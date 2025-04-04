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
    "64Z3sGKjPBK8m1VmMmp2M2crGoxUEyL1so3X194YVWUq4EuB6UA7XPqaYg61UfvK6Lhf45bgfAceGqUyePJuHCay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZ4QtYyg4i4TFKBMrCeCXsB5oJ2CjAnWLZoPy5mrSBpWXk3fis5XmftJjdwsxwjBQZYBDpo664M1tdH8VLiUkLd",
  "key1": "4zeW7tFhuZk5sbdHsJYLD1TWX52PHXPHyU92CeCBk1wQtvkTHVh8CK6c1HS1oLj1tRzN57Cw8w4jvEGFmc4YjYvz",
  "key2": "3GFJJu8MYwSMxMv5CRCMM6oyXYQDjECjXUEvoRG7UbVqTtz268t8dN7grJxCfUX73ZESwNfTxLExotNwjYwP4kPD",
  "key3": "5N9k8bfeAL3kphocfYNYvj6b7wPD1gA7WYvvW8Bewx3uoWKuFe2V8XRoV5nKy9LY5jTfjrUNVEieGzLnnT7ZUxbV",
  "key4": "2sZ549MYFqbwW6KybxTJefMdQCYd8jw1zufZDMV4RNCubn2GrZNcygjA8ZoYWu23uJNqEoWmiQkEyBDST6BiPfLM",
  "key5": "3sToULnRHn9SpfaHwRqVcW3bx1TNLKhkFegNfjDEWCe3KcMStw1B1LnX6mX3U3RW3dxy12dVrxVXcmsistNXRqpt",
  "key6": "3Q2JdjHQVcE9nPUBkEqqSaBGNThvRS8SyBNFE4gurBmEcywSNumySvf94pBdBVFkZaGbU2hVWE6Nz8qZaV9m9Sbk",
  "key7": "3oTcAy8DmAJz2CS47Agyjz3CNAbpBMFr5N5YEp8Kw6NkTXhR5kXe7PHTSdQMwtCsqyXFdt5uqFtxjhSjsPzEyk6k",
  "key8": "2eqAZX7FDM7sWf2TRF7JngZnyAY5dLp3pQgAAXjVBjQND3VcD8iApw8chEkyHi72Ez7vTcbWQprMAaSwEzP1GAV9",
  "key9": "nJUpcg45iYX8UGKG29ygTwA8VucdRrYKxnTiTpYoqqSyeReAkHW3jFcBpFMtYFVBWQ6YjYivDsKjFBLxwix5aM2",
  "key10": "mLLfwcUuk5bT2WF3V6brhsdaPgdSHLjatjbZ6x4hcD1bzHGa2bEJf8fGmpPVZaEBZXRMoBs87f2XjpdJvKtxWoL",
  "key11": "58MRXy3HTmnhgRrMkFqCoCzrsw1wK2aF5S8Aceu95TbPoEE1FYzwXLGUM7sUuZSc5L2TBQZn2yZ5K6v7WctmgkxN",
  "key12": "24P5ZQRKP6Nf8dKxZta6FvV4Znr7jP4KjBExeAxiYqR1Yzz4baX8p2N6me1GLLwKtSPuPyy39YfNDLyZgaJoxwXi",
  "key13": "4YVEkimyH9W3fRG7HkrhHHrbMDSgooh8GwJnHBFU4DcTn5erwhg7G7LxSRYtGuofGTsvUNTuWLdB1XPKtwsw7FRi",
  "key14": "2CoxHka8EMnM1x3SPw4axNAqvvsr28yQpBHwqJ3qNSU3eiiXzpnVdchn8b2WzEmAgnKJ3EmX6RSh8rmSXi76jBWG",
  "key15": "2ti1BhKGDdRLDq8sMrkpqKcUwzYQWEARYy5s1zrBQ29qD4senpgS6bTeAjYhu4FHqnctP7sR6rz9NFeZwW91vRf6",
  "key16": "4g3kkedDCZC6vLLci1AU8Uk32hCZUgCkkrtypqp9nmNsevVemM1EwxHUV751MnFiU9CPJcoFhtFmpqLizDb81UyP",
  "key17": "rB6B1ghnpDpfuzfWNhiEAGBjLNsEs2Uce8vmsQaBfyzyDkjMEs7Js8s2srT2GWU3fzRAfW6fVgKDdV2LERNVLk6",
  "key18": "4s5FwCkV4eMnyVdSPYoGzkxAqgQ8uu9XmnURmUj1mmdLiLpE6wBRTAFwJwrQnZPujvhhvvLEWPkggBKesuUhKdQe",
  "key19": "3Q14VoGHXYxXmqN11HZLdjdzgji8GPV1GNhE96b4LXsqEJUieSMoiSsQw5Suz3idMBvasQ3PJWbwU59e2BjrwUGu",
  "key20": "4cdADQCpm1Q2Bt7PF2CcdUX2znCADkoPkmRG9wu2JBDa82QBbpT7qBvHAHirMYu3WBSbiQVjSJumGXHMvriDnDL7",
  "key21": "xEUEg6Z8wVmpmqiqMu3k8ya9KZVmpfcXpMdGDxQ4Zw67VUhPHY7gefMAaCWmeWda9cCpbLFcWU3fEq2ULfp8jUm",
  "key22": "3pW9EoKS8NABvnc9Dkr93NLJpK4i2gQhtHcGvpZYXHXCpQDmT6CkeDZiPnXCNSt2YC6hhzXe4YxWNtJ2KymwfpeL",
  "key23": "2HAb17SKrTQeVSUicRfcxALV7AFvhdVNnTb69UopCgY2DuPhXJmUbWXrZpkj3H46hFAiY8U77nYLkoGLpbhkLM5H",
  "key24": "23aaq95yb8dYGQfBX7ekhJm13Gvk4r9SqMkTypSGhcNzLafS4sDzJ5ivxnjWtGtznQE1AoLG7Rd5jsPzXrcL1T5t",
  "key25": "38HnAJxje3WjCi5Tj3tUzes3b3EFpxqtdhLhhavtWHVdyDcg7JMP4cZ6TaJ6TCQWRRcBCBzceqn5dYXmfjNeRWTX",
  "key26": "4kJpzw74BaRBp2exEJ48uN5Wd9978F1ayJ75trdUtJ9yfwHs7WJBdC2PzBRXcAh8yau5ti4mnzfzSMtnLeJUwvdS",
  "key27": "usncmsv2ZcvyiSuAGXhGPXrQfg5hG4AZDk8cfd1oEvR9fa8wZseUKRskJzRRNBKdVG8ooEdcPgYM7w2RJ9QRksM",
  "key28": "5VnKVzjp4WjwyHXu7BC3QD8D5AyNZfZVMXgwxSt3CYQs1fWXqkytabjk3aHBogfUA7fGSfqfP1G5mQHuT57wTpK7",
  "key29": "4tJVC2xMuvqSpNqJx8ochTWChrih7Ej3zSSBa2RUJ89WusnVkLYG8s7TEVSrM5YbjPy3ibX22z1iZB6BiVTS4i3b",
  "key30": "5wz5eTX37WBt4HR3wuQUTAi2XWDjTY7DDfeXqAzuG9sPaRtD2RTSpPAJmrzqg3ZM7tNktByy6XfxK792mUnQziqt",
  "key31": "3C2oMDv5QqZvFYcH7hD5zpcBguPQNdG5Xu1taGMmHDNt7e9vFSZViF1TyZtC4nBnQkMdw5LT8FGko4wMmxVbWmuz"
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
