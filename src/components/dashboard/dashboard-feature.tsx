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
    "2FQ1AojuG733NNdCJpCPAoQ6hEoQXnszvvgXXvK86yEWP7e5dpumSrqesWNu96HQN2XmDJW6JtbAkUNbigq9THUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpjfXFNgfEwFfJ1atd9mCTArHFvMrnF8x3fnBrdPRbCQPRKoGDUVbM5UcWQLRU4ucRtGstatnPzQyLHEG97CGTD",
  "key1": "3GwKM4GFEmS6kYJLwuUAHuYnsc3YK3xKJNAVt78EDAFvhn9SirxzjErzB9WFihcK1R4fmH9ToEjj5TY7ux2TgwJY",
  "key2": "3LzLUAo7oFzDMDtAbfTciipqviQEayTnSouM7rbCMyutuecRCAmX9E4G5P3cAc7gyoToWL43TshqNGSTSZJtB872",
  "key3": "2NnCdtmqBggcQaEofDzXV9GxxQuVvGcgEZg1seL4tfLLGJ5P7a4zwBxvFF7Mjbvh8izKwkNMiHRnF6LXZZERh2th",
  "key4": "3SfmZ8npje4bYt3dSZZpLcQ7dQoHurEF2pgKnhVWQV4twkcVEuZBqMLJLkQ2emMGr2xM4shupwpi6zsb5bLXYbRw",
  "key5": "WHw5HP8CeCRQGPn7ShfruSWS86QuqeacvXgUk8Nh6YsdXnBjE5ozPrh3qZ2oHQW59RkpnmH5vhgTMxw3nxGWFU5",
  "key6": "MtMLqMuF4Pwkzn8hkxuiPbRw9iyKvVY773Ls4QvbpWdJismgsaKQhJFAG4kPYgWJ6TyLskhrvkPWcnaqJacmoaS",
  "key7": "QqzaKrJ28RxX4TYEcBJAnFKRFU7nn7rmoCHAZULNgw2LrUCKRUUvuADoTKYErR3RGjNy4wijsAXyFi6GT3Scf5n",
  "key8": "XFvbwXMKRUMEpfeccceEokH34X21BXMdc8PHxBebQPX6WEdkkvBL12nobq29gqE3tDUeWdiPfkdF5Bmwrxv6ZyA",
  "key9": "4tGf56KsyDKB9h1MpEWFNgVQFKmf2gTLaVT1UuqXr5vWSeT2xuZut3Svktuo4QrAZ8BKKzCEVrtmNKzMM56LhZra",
  "key10": "2FQaB9MJXo1wboMs1vDpdmBQ8khZKje2SJKgUFzrVsz3fayYWEECsTnvhckwHRzqfswbN6AZHA9Z7e2cizTQpZu9",
  "key11": "5NsYKGC5mNGXjPAZZt75NA1fbuBTg7tCVmHgXzNqScfTj9UnP6BizqpSDYfkR34wtwHxEy8S9nv3fm6iVJXtRbYc",
  "key12": "iyRGz5znEh1H3ckS6FwQHwBDqC6ETTpczjtvedMnkcifKmtB8EgbVg5d1mJ75Dh2a3niGHxLeFmJ3TtK8hivUXE",
  "key13": "5gKZNuMRwjzhKeHkpUNTviLZZ2JKGzTiEDpPErgnbkazAGdwA5UYescFrL5HnFNC92vv4aqNcA79MhqxPqiPn1Me",
  "key14": "2dWqFTypeZoihg2DmfAHwKay2sPYe2jk3HyUM2k5HMARGetDbMqNAVJg9sBsUDcne9iTKD9VPwyQpb5qbfNtkSTC",
  "key15": "uS7ZGUpD5HEddXKfZ97FFh2zhhjDxCk2VniB5mz2NLrka2kTVTcv5fCZW2Bs2EY2DvBcbfVxV1oWDxwmEZfA5DX",
  "key16": "5fx5ztp8hBr1umF2xGbcFDBrPMLYwHyMyw6dJ54v7jvNnanBYRiYLJTTA1PjUpAeqpmtXx4GtqFhkKoeHDKsbQFx",
  "key17": "4J6rXtHa99QNHZ8WKMBDLx99uZisdLTPXKMJDJ8s6XGhDkFa1NKrNLi8ejDw4w3eK1n1XAgCyL6DincxoYFwNzsK",
  "key18": "CkuiETKyRnTGs4hd4kw8B1mBDEh91PoFLTDzFcouLNrnHna5mosPKQLLZWRm2xWbMEDqHQZBFGiXt8mvBTYcS5J",
  "key19": "46d98cmnDQd4sB6RaFD1zeBa8bcF4q1FBxiLmK2euQN27r6kMKGpYgWtUvYu3z9uEpPBTFjKhv1ubFHZYrYKPXzZ",
  "key20": "4buEDGNDUR4WsKewrvBoe9LD9zbmEMu4MRsCbq6NhQXy9Sp3J1UQhy18WTfAWVajC5p9DZTXvkGUt9tnStrDTDhF",
  "key21": "4HwRjCi8aefuREsHP6hjjNdB5yzD1DC2bKu792N8SqH1TmH6tHKLoE2h38i72drC7zAecK8AAdBfvwMcqn1MryMn",
  "key22": "5KsxdJ4RD4pqcRxtNhjkEEFQZqfUxf8bHixkyFjCutV1WD3ANb8yXYghtTUMuiKRgFgSehUibkxvL86zzYz1H2Vd",
  "key23": "2B8U6vtB3VJHo4Mz1LJ8tv6XreEPNp3J5XDPJwGXu42mUuatoV1Ci8hfhzvNrQuvuz4y19iBxbM1j6SDimnsBUxd",
  "key24": "63LUKEVbebkVRkxWK4gRKECXAjnHwjvh6CS3Ak8u7zGL3piwRi4VVbyWygX3rb6v4RtewDzgeSFdaxRUi611Wf88",
  "key25": "2uSJw7y5H5DKdKqeGHwpaHtzmkthFasnpG5BCdUh84TNYUXSYYihZcp1XRoPGhgcDTMuXfKHWBURNgJPcneCoMeN",
  "key26": "siWvMN6M475vLARz1ijYb2fHEor2LvNBtfm2oyjd8uefnEVZYzeNPF4EcebdiU9vKdwkpJiC1ofkwYyumwDFwV7",
  "key27": "5L1NqpQ2prP9BUVgzkXmtPzDqqE6sJBNAt5FfDEmwGSnY3vV5xpKZ5yLNdtJNxjgs79CXo6xjVzmNLxMsoX2uRKM",
  "key28": "2iEhCVRDYdD3maox18YDxK49mCoPqf9w84ECEQA7EoUAtbZ7Wwn3gDc14yU2C4BQYTT8wLPHhxwVk3rf7cn95w7X",
  "key29": "569PxkxurxZi8JsbVrobbnc57RBHFX98LBbp9G8h3cGxNdMTyy4FHyf2yj2vs68fDHTSmsjBZ8DCvayCyJAYMEBg",
  "key30": "2aRrepH319F97nuPsKfdLW79YpddLDrTzyLhCYVermfpCPfzQEaFvvjdMx7tYCqb2CH6mCGBLRdefTx1d9WEczBi"
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
