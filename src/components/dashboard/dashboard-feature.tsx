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
    "2XVUGceXSGCJfADbdjEX7V4Ym6VeXAALuH62qTCLiv56KjzYjwech9JRjNgwp3Q7V1MQkcqu6SmMTLgBLhQTzCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dv2LWvHpwzSD22mmBdiCmo4SxQ4rh6Y477FVkswes6oTR557XYBeMDz6VttjpZ3T294M2Ui7sw8xPNTtUcujdi",
  "key1": "3TWjtG5a721M6hqETPtivzzDMEgb75eFa23xdMorrF7yD7eRfU2JruKgjnzm6PFX3uFtBfQhpwAgAYJ4JmNCEkwf",
  "key2": "2ZnJJhsVE7rCdSvcjYDCQaPCNggok8bWcB3cWkBPEFy2wZ1Ah5BnJG8XmP8CjoA7BnpBvLGUd1kPTHyeQ1a1h7oT",
  "key3": "5UoMuQ5RVjPwceVrVeQfqkSUmFfDmvTQ9wGWCwRAk74iRBn7WHVGnQjfGzASujqFaFZ4PChBcuSH7eA2VKNGcbgh",
  "key4": "41x85XmxPkTUkFinzdEqg7oQGYpHkUtMc6dsF5z8FujpSeRiMGxF4SCFuD8NK4uTj8ApKJVXHxStfEd8v6RFGhtT",
  "key5": "4iEs4ZspZRUb8iCaoejNhzNE1ek2TmKRiAKEgzNLv47EJwKwSmLhMtWcqZffpkTpzt9Jj974FL4z2TWxNM491N3j",
  "key6": "5BY55T5QiVvu8S1TRBfx6jbuwrbJ3HPPiTx9xY6FZjtn6g72WoGLJtgx9qmKGeYrbQpuqACCNNV4jgsNLtTdcxGq",
  "key7": "Z2v4VC5WtzmD173ZpQJy14XRJaGU5RkUabW1cmpnoLwco3R4X8NLyCzWFA1k6XxDCqtFyQJrVCoQYgRnLGUATNU",
  "key8": "5ryG2nN1SQ7oDHSxu2bG8u94CbNVKmb6CdoA7GW35LapShDSzN5N5KxMHMJ2g8xwBKJgrqEHMz1nTBaWB7PEcJov",
  "key9": "23mkaiuwQY6p7Q1BaZXxDBVuus6coGydqqxaYYDqbASunXNomgnKH9NqtwHig2aJQaPWwDg6eBUw73TSnSZVqQma",
  "key10": "2sH5ZdA6qYbkog9CAvoRXevQVNXpcmpEp2zNzAPf41zLMMLXzu4wY85xz1bwC6HJ3HB12tAu6EXf57jcppeSGn1x",
  "key11": "4aUQjop2TtQkB7fq7uFQhBkTufv6nBymkMgzQjxYmb3grDRCDbw8ZkhN7o25k2aGCR8bAhYrianj4aPVBcd23QHr",
  "key12": "1mrVtMx7MtU9dgaPAPAdcToNGFjChLsCttEw8iNi7oTptG2vw3MJGqfjpYVptbzN3Htw7EbkYb4Sntc572B9R1P",
  "key13": "o4E2vmnmrHzkv1qCDBdWhavwwhdhZVWSbSwNkg89wzAAuEtA9xKDRxXq2wGqpPHR4xk4qJ3Cp1jmtqVHzwuME7M",
  "key14": "kFbbYoyEmuvyC6PxZkhc4McZkvLKSZGHvQqjL8zYehMzjcCpTMknQdKsrwu1sGYu34PF8AQ1kuGfGHsmShYQJGP",
  "key15": "5mSd2z7g5hgjgqjvYSXWxr4kh66a5RxmWpU7i1EjFP291UmBqKwtkhGv4R84AJEL8RL2nZZWchZx7nJrgCeFndT9",
  "key16": "HWMoz64bTfW4SUVnRQ2hfy1DRuUPQkXCcGD3a67JBooawE9dwTv7u3xzv12yWhjTpmdGdGns7Dv1xxmPGsep9gM",
  "key17": "28h5GcD479UC8YAsPmjEZMZFKPiv3NdeLtxvD7KgGn4rmCN6XCs4nCr1dAtHMhTa2XC8YUEKj9YKWSxtfbcJMvJ9",
  "key18": "3C6CcmdDC8dKnh7Zj7UphS1XJkjASgH78SSEEwNsYjEuBhPngL1wMJ4GoWRghAcyfDP3kVyRT6sMu2ztra682ZrW",
  "key19": "2drKVnfsKsoZSsAMGPE8fL8gkXpRMMGD7ywvZt2bJ28RdPbXZfUh4bsa169EvdL6TU2kibqQAByy2mCSha4Z2RrQ",
  "key20": "3GFfhCpgDTh137Y6NdvXnchgVseJSVcZGSixjg2GDuyuxZ38cVanRgdCnR3sCyz4MYFMDeHadh1MFp7KGTM21S18",
  "key21": "5Hjp6KVzUD7Fe5BxH9rbFKPpDfvW3LNj5NdYWVqLrgRxAUfoa9G8h1De3wtzJodqiwSbK6gPtgZPfFvxi5XF86Sb",
  "key22": "czoa5Ez9DWrhV5GfUUyqa99ZYSMvL5VZ1vZuhbmAM3uJHuf6LUwKhKKzsMUpX3ChqvmkMg2Z4Nk38vKajZpyYEW",
  "key23": "44tCXNGcQTPorkTYtNAX3qyRTPUgp7AfpTeysrhgJ89XyNNXTrY1DpJnqD9ydLfe66JSw11dXomezQcN4duRf5bv",
  "key24": "XuTD6eKS3sbLRgcNBGGxBmq6mR9Wsrn1wz4XuFbBeatxWR3geBWijhWXUXSd3SvgGvZ7iudv4GkQ1BDh5H7jJEH",
  "key25": "4xjPto3wwyN2q4doj8fNuP2MGtZtqPjV1Eu8AvEu8SrkTbimqEsjbwEkVCHT8xTTTJTHoZZSSAy5Gm9SD93bd284",
  "key26": "3JYXgiBHwSpqTwphxVFabm1bNaDcTHa2PbKJVg7zU5hjoSMcU8tmpdJzbfYRwktjcUKAXszUk57CQAUerpNYnAUj",
  "key27": "qSpV8Q3HXZwpkg8jdKCh7iwbHwe6rngsKE13pVB3x5En324QXbZXpcKmvR8tNwnMibzxJ8HsAYTk5B2ZUTBRFYG",
  "key28": "zDmcx3sMMQ4Z5vUbBi9CFjFS18zaBG6ZfQEgGe523VyHRtHwuBWZy416MYJ4At6pdK21if7zq6HdXPUgkJcQBjP",
  "key29": "3k2Zpp3698yLDQbGsQ4bVtmJ6Zg5Yb4XPu2ghGTtTtkJBzcNtXHZKaDmTJJ5B4JwoHc3bwsHn3PiC9ozyzwfyW5g",
  "key30": "4cSZfzfxJQ3JCxEYsyvJhNrSi4ppbJCPNa4hNd3VW5XLp2GAmFFZv4kbjLusJU6JYYZumaAPxEjM2Q1BFVqmvjZU",
  "key31": "5wHGy2gWyYk9PMSwvxTwfS5VDWx7u74fprah1uhs1315RVpa2e2PnUm6pamaUXL1qcgMSDwtjggpk3z9SWMkePKQ",
  "key32": "53rB4tR7CdWNRaDGnzdNHb8HBmGCwKv18TwpAQwz6jrXeDCBFr5ZBUHRN9mYcdfPdn3Gw7yfhH8ze4Jz7JytCQeX",
  "key33": "336AJhKJWjbTWmKFoyHbCcWLmUKmEEMwtnK48BwdrCnMq74Eqhkyew3BDRZD4DPndNHKYd7jk6A9nuTTjgUEFro",
  "key34": "2Aa6F5Pe9szKUdEykD4Bngab7G3McANiY3CgS173KvtbWz9E9D7JdRDoVhxsfaAHepNs5u2iRNtfnvVHkgRaDsbj",
  "key35": "4SiC9xLRkyeWXTtKFpL5JoSp924JJhqQVojRu7jh81ED67gaeWrLfsu1cheGPcFYTeDLcToXNdBHLivjwhVUceTS",
  "key36": "Be2YVbxNUeCcbSnSQSuZ5HU5JTy2Bt6bFJVpi8goycoK8pGwVm1dyKbkxUHgRpNY3mPCCN8qLNaaX82qGDnWjNE",
  "key37": "5BuUGw6v4qvFDaWDbcoXp9GrXMcB9vwQ51qoiZ1S9muiMrfUTx5iMmvdCJomXv6TQrEgUBCKReoWMbsiEVAzK5tf",
  "key38": "TWsJUN67dRS4boaGywSYbVVVcew98jMAT2Kxkt1vAfUyjjxue7Tm8bzKhjGHTcDUM9PbrWuPE1tNYFFfzv6GFky",
  "key39": "DZRTBivDA7jk5vSUvpPKVzfoz9y3kUKWnWaWFjvKPiag6GbgY3H1r27W51tsrXWccoV86RUQzLLJquHhG9qaHrp",
  "key40": "3Yx4cEZaKeRm3T339cYUtrjyYUv78mVELSdtkodayS6PEjEjH3BLa47qTr9nKMDns572Pi4Ukd4TnhcbME3FPAVM",
  "key41": "A1SCvYmswDUWPXLPyE4oMHaxxm5vh1dqFBKdb7QoTaxWiFicdrVhasfGH46AyanDJ1stJ9wHd4mXLDtkWMCsRPk",
  "key42": "5B31heC3nbqj9Yf1GFwcRcM87iGbt5KZN8QHauZsKJH6d5f27mnTFKPjVD7Z72SuxcCGqx3wL4L95U6zFWT5soJg",
  "key43": "4vA5cxCxv6dChCg7ZWpqqzsGn6QUicbBYs9zWCHTDrqA1pYn17XytUjuZNpJRRFa8Y1FSmPQZR6JbbWPecpUzpR5",
  "key44": "jnXDrifNhP19WaH9DEJmLBQJpPoryhJmtMupM4ogfyETC512xR27HESfzYHFa5nLG23WPcUf1MSj4NtYSN1Kozq",
  "key45": "2moLM5mnqDQtRrxcAPEEiXvpkFn1NJfkiQEh4HY5RwiLLGBTfGLiUK4sW4LnkAMPMgGGJRPvTwCisjLTpZbRYDvq",
  "key46": "4wEVKW1UzjpPPBTJtwk17iyTqrZBi8GH8L6Pn2wh21PY5YnT9ZUNnbKAoDQDGLX4t8TFvM6XiJquAEfPWz1KydLx",
  "key47": "3N6T5VdMW8E5gtXCHPKjcTjg8T1fE7wo5Jzgpt8XJichRek1PXVgWhnCRNFDbNMuEAmjD3GMhkzp38Bv6Xe8jwR4",
  "key48": "3XPC72QyuDXC4xBJD29W1u6WbuHjc2HixhV74DTKEmNW6NgkVxTENfn9qkHc1R4XNojFtC7thpphtFfeGYjQDsFB"
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
