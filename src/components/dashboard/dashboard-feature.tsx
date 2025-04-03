/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "FnersNWE435xG8iRCj6Rzm28xtdqnUfdQcxSxdP63kQJsKMuBNnUtXuBomU2uPrMu8YfV1fvd64nyG9r9P6dwxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VPhviNCAADb8okMeeeULdNHFBHKffvZB9eVB7Jav4VGoZkMHmhUKChUi6kxRVCSc3JeWvXDxbHmpZJa1fs5C8g",
  "key1": "39a9JKpFJhKu1AYnexZKMHL9ucAyxbvwn6F8pzXdgsQ3WS5bDHc1YheMHGPB1ycxxokFUzsANETb1fp2S2bbMKP7",
  "key2": "3fcMBY3wfWshtTCcQ1FYKJX8yTy9WomJPPMZYfVDeTVoWVxUtw6jaeKoqSyFaRYgzj6hdqEqVEwpwiaAUARojgLc",
  "key3": "2NScy78soUiUyZEBJ5HsdTmqvsJ2kXkXM3bx7HCG6BdT6qb5ARrnSUomgomJ8MXD7WAGQTXdmTCgrYZZg7h1dmYu",
  "key4": "2KPgERXnWemH21gh25xxjby9BF8pbPzwqLsXX12bjPvm19kwPARRvp8qbExMCBhZXz5ZuHypxzq2HTJfJoUkpAZv",
  "key5": "2nrn4VM9Xq8Z2dr1wmBkg8bMvVAiLvxzRnTtw9KNiYue5Pz72muU3rJjwx4iFrfzHUsfab6xKqWkUULEPpLdRQZT",
  "key6": "WJ4A6MeGsPk358SoxE91GSzyd5Pwa9y4kLBhL5Ry2avuUtVpP8txEm2yFYHGLuQUb3H87okcSjDxTZczNuYzABK",
  "key7": "3AXNvZdWKKWAEVhTTuj12NHCF94TCXtDC6VSUy14NH3jnmQWiRFccASGh8BQ3XaGKpkh4hfasUYeaSX5YCCqeVm4",
  "key8": "zL2tD6szRHTg3YH1kKLygKyyTMZnZ99R9rg3ofzewpEWGkiXJQA2Tz4A8su9UBqLzhWNa7cujPpxj6Mv16JGCwF",
  "key9": "3ZqakfFZGk7rqLDZMqYAQyodDBqK74pWAC5A3DCN12bYghFFRXhx3vkr4vD5NZYBi2f8CrXSM4nmh4oc7FqQoXqs",
  "key10": "484awfS5enu2vGwTZRzwfxUL8zqWtriRPNt3maRwxGBtJicWsgXDaRBk8EmkbtkfhEBYCYo5qaV67a4PWtJRtmf4",
  "key11": "4zZ4gkNNSiXnmmEbFdNNhUdh5CxAc2GNEND4WLp8pVs6qndHoNd8q9hmwdvxna59rZKem5Na2qdZjEUS6GDwNSn",
  "key12": "5z53cUt1Cm1iZ8z9zdKbAPTY5239LZVzdAGQoxuvNceEJDTDeik75JFLVT2EDTfak7Rg5XVfeSEXPgGHpgLzeAnz",
  "key13": "2rgdi3xsCS6UYHQiSBXy7RKXPQxvEyjHx3ejSHLiVprgKzzcgfAVYALsCqqPnY8oU63tDGPe7gjprpFrz1TmCYMh",
  "key14": "2x7bHucd1u9yCnpf1msT6EruUT583u5uDBsQJRqLKbVThENDyefheeBMwK4rGXYjWu5p1SPL5zh7vVhWr5ZygJcz",
  "key15": "4fCemdacr5ovWx44JfHyuSBrTrgKDGN5GtdVMWrA72tJgiint4YcqUPqzucM1iXqLidVWAnucVEVZA7A4Q2pPF67",
  "key16": "5b9GaRb4FVFejoQcjQaHEZSk9YPjDqX7nddKhadiYgDdGJ2m44nNtLKsGav9ZfbdvtMaTz84D3Lp2KpbS68Pbusu",
  "key17": "2SDpDpa6Urv2metPt6dNBj69hghPHwVNX75MBmtf3W7gzqTTGkHuH7mxDhWixDm57NwqYC8x7wBrkAp4J1kn6r6F",
  "key18": "5r7H8qVGYMyeNqgDKFjvVNSMQ8LgLHPKftfkfkeV2RpoVdxJE7EUYJfay7iRpbojLULJEhtTX2SAwEXJAbQo1z4o",
  "key19": "4NbT3d9jhkFRs7sSnFs2wHMqnA7MCxPLh9WApZya7EWRaudT8Ye26ZxEcmz5CVTC13AqoRpGCay2z6qB1ZhjNv86",
  "key20": "5PBq6fjQKdKG8BVAtr5o5rpB5hfWHGvN2Uee4qE2AXF2HuoZups2oa3UeX79w7W5bKZj3KawMHdN91wsc6qZZ6Uf",
  "key21": "xmqFvRhW5ddgwncizgVJdiYnU94uP22bEAmY1fvzX5mkKFYKW5kjbFDHFuUgdfHxJP3xBDGDGKPsRVRGHoxL5Lm",
  "key22": "FHai3JjPcRzKwESjmmGfd4C1TtNg8CmYRnT84zDHHY47n7metTikwoHBBHECNUhxjvdg523BPuidySqRkeyQgxE",
  "key23": "zrEPJdB5ifBo9txZ19N3tRaa9H3GQSvXuHAxaKeafApzHUxKRag7GQSQdmBf9gxVBzmGdugct383UdFZw4fPqin",
  "key24": "4TtsTeHLfGP8momSUz7yndcbbVZGAUo52XW8kLukQHgViuP2LAim9cZk3g1mdNCZdDwNCA4wzut6hqtmorcrZWgu",
  "key25": "k6ff7KYVtuo3dUTKBxNuGZkMSPPxXSkrXk6VvZx22KDL4vd3QhKcZsBJ8YRzC9rsRZ7kWWwYLBbaChUFwAWto5W",
  "key26": "3n2isUAT1eW3CpqDgTR3CA57qYkR8LLgB9T63x4HSB4wQuPtAKaUbGBmHEYfcAKmNCSWGfiMed2SRLWpAE8hbCk4",
  "key27": "2xcoeP2mThgug1zkj8htiDx6LLJbGFzY9g8Dv13iG9UfZjzo3g9u1gWDQM5MKebgvnrf8UNZTxwRimASUhG7iK7v",
  "key28": "2DF929p1xRdYSLi9soWLHomYXwm59wrVLtXAKioHLVcB5yKUcfK9vv7Yjvyreuu3KCAjT1bk28QPZZ7DjPrrPRNg",
  "key29": "4c1txMEFnnKWuoe8Sx9fK7R7WhVRYzq9ZJNTctHuZjcJdZs7pgyeNDCBLye2xYnHdMrTRyBCncxWvSCkrKPW3KqZ",
  "key30": "4QJcBs6E11ntnCDbuXa5KV2vxde1XrvzHDMpPTca9rkthZ1BsoJbMPA5SpBYParznjeaMvKeJKtyz31W2Ns73iNb"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
