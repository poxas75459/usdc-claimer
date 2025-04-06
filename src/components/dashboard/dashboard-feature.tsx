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
    "63z2yzP23AGwSs1C9EnnKPhzGXzS2EUhPQu8k7CAbhDGcxDAgbqCVPNHSXuawqzTtepheTGDLbXaESyfd27j8HM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvLtsdhVj54tsRoEEfwWrSqWqBPkYJWVUwzWWpi5dDvaktZPsTHJats75RycfvP56741FHrf2r8rEi93iuopS8X",
  "key1": "4v2k1Y3LfhtyTr1cSwSNGSsTHu6AKD9zyhjo9UW8EADe5jmkZEkoEgxdViRNXP9vX3FRSQG49xtCDtKkc26uF3i",
  "key2": "5VGDW9kuRDACrGAVX6kFDHhSr2FQXgVkE3deK5EN96tgzaAjfY8uFCpvghnp9BHymfNC8NgJfXRjGbvKz39hZaPo",
  "key3": "4mjNTXAXErBbUxF1Dxz8iNm3o4B42orvrzxbpRBA3gqijsvaS3jL8dFRaiaMVhBDY3mUanZc7c5T1tDdxfLEeXwc",
  "key4": "2VBKmtFbY6EbnyZ79jwfDgESkcrQ7LCrDC2P47uKbmtxMHHYQgLF16KVS8yKyv64UFY6AZvaZSaFerbihFSA4A4W",
  "key5": "xNPBBTHUG4RiL4i3JJmHA3QgWQKpnKKK426jWNWGQiTJoERCormd3VwHHxoY5qGNAv9LqewaRABFCHNTNpDpegn",
  "key6": "5cd6a11S3G7WjAf25oo79AwBBqV8KEDjdLyEqPXyEE2HZxaJHPNagmB9Y99uSWLxnmLRWN8uLrrpN5ej4MLW99Fk",
  "key7": "4GjJFrsuFfxcV69xAKSzYN85TwybNeMkFpzCWHGcgVNe9QMJcYbCJ7meypV7RYkGXoEFgzZhmFt3aacGVHJPsb9U",
  "key8": "4ZK9QL3CQ1k42G9RvQFSgZ7CAXtqhERGA8DREozFEW6T4xp7gWn8ye7ddP5v1ot1wv53zEKekTLkCcnpwwErhgFm",
  "key9": "3NoRE8iMmp6j25Dtj2Qv6zCmgDLB4abfdVV8R1spUku5Sig4NMAqmLYyzYRcJxpj1CAudraccyGVjE8vrHA76yhm",
  "key10": "zhipPa9dB4b1jRbTP33eiiMHWY6JjpkRv71RQ3k41QNNSFz5Rgjy3ECsPppuzyy4anM6PgrjGhM6bxciGrPVzjN",
  "key11": "3xofh8HbZ4gq9xFzhgq2ZzUEYnvoY4Mh4p5oj5eGNQgvvzEtJHP4oxXRVfnbo1gF6vV1gVtShaVi58AcsU4eZ35T",
  "key12": "3qZAgaTDomRrk2WrYqFksyfosBnvCmC9jokXjHqFEYCGYEv2kSx7zR4ytgTiyWPQ2kGYbZzK9uvXA16jkwdowHZj",
  "key13": "7oTtKQ2TfTydDth38QrTisGff3MM2MA8jWGrKQavLrhtxy8wGWrdcouXrzq7ya8UkoawuksjYk4cxvPUgEsRm9s",
  "key14": "2JWAwQVbyirmU7vNLNqo9yRD5cmZgqbrnyfSBwNHSvn73UB6qhkWGbsKmRzWeHhkhMuJknGyFC2on9uhQrcjyu2z",
  "key15": "54tJFSRnZutd2mMicc1MwrjuDoADdThJ4EXN2nZaxbJUi3CL6xMkzfAGLTDEQyQtYXY4T1kAucpfPCr55FiyRBnE",
  "key16": "2LvPvuQRDmvFW7Rf8YTxfqYwPM58kn9VgZNHQT9aRgZ1wH44yMbFa8MT7r5AC9ZVqz9BQd25gbkVsjkHoKYw4fu5",
  "key17": "2tuKngWNMKzppQQFqEcA4zqhzk1giEtvCHwwJQr4uMiE2wydtkWWdg9m6xeqaSRSqyTCpfaiPy1cVQCDB87TM1BM",
  "key18": "3a4d8wUYuCPeB5ZQ7nNHXaAMmsrhNmB56nZoeCQEQSJREH5L8uBntakZgye3Ju3m2ZhWYqgMN2tavQzfExhS1a9W",
  "key19": "VzrHK79Nb1v3EYJpPAHr8kTsFfS4p8bwiW9HhBRtpACjZQi78L1WEw8RXZxSSQJN7Y78X6VB5yNmkca2siCudEM",
  "key20": "64sK9qSRZ5rPiwvVbZrvouhoK998z9HEFrPYcBQF1jVH4UH862Vnhv4j2HfpbY4EPvC5Jfo446HTnaE1TEpvidxn",
  "key21": "648rPUvTwk7vTRpNQ2rCa3LMoR3qhFnRgGELMUpQkxtSz6J2PLzExRTX6PgbLRiNGvAf2WUhgbFPGpyvtPwhX6q5",
  "key22": "27W4kieydgpNQjXoXhLPZUhjHFLEwwEqHs7wYNNhfWTX5MLBpowCu3HLxo6mXRRtZC6qXkVmeRXD8wPDvUwpVHkq",
  "key23": "55dVhwyZqqQoRt7c7RJTrcoAhbY2vCYSrYVxb4zFU3ShHGTSzxqmvnbXiHZhvvGwKvdbG9StmxGZUTEnn5QmPVbR",
  "key24": "3gr9tbezAwAp6GReDfEMg17hC8C3bu5BSy5pbtbtNC2oqzEYVozTiuGxbrd4C9bns9HFYdjZwtCoQexdyFE4vUJ1",
  "key25": "27oxBhDGH3FtFuDWpBVcgpDNp4oYxgY1gmQ5skp1APKH9Hyrc5NkCMt8Lhasx35RC6AeGsC6ZhDgufMzSKJuXVi6",
  "key26": "5bXMCKA6xtZrXVFBGz6F2F8NMwqHU6DXV8oM7MLuph9oHbGz66f9gCHaKrXHLHHGQjHPedJPc71Y7KdP8o81qcTU",
  "key27": "34MZuDCvzosnPg3gYwXVCXUYZZ8VnNgoZrg6mzafHFYoY4ZFRfGGQvVPrRBXHyrvV7rY5iViC7E1q3LhCvC9oXL1",
  "key28": "4bmCJyZ4SdYEBk2XjeKqn8e6RKTwiRH5LQ7bCrMNDPE13ZbXb6HY5t6BkwUccdEks3wNCCxXuwFHRNgGp2rAtC5J",
  "key29": "jgD5R7APu6yPGTMEBU8A9nHg4xy1dVmoJxcJqNKPaCR7WFVLL9dwqF2u2GyFZfvsouDzDsiTtYDXLjSqHFXLELv",
  "key30": "5GzfaLdwN3peSimxyByrUJGiGtj4QUwNGY8wBVLNvmtWddprC7eeHftFmxVju9ddrP4hFzp4M2n7shJQ6GhnG3ky",
  "key31": "4WT6e8xTiqeBVQiPcw8TzhfoJsxkuv8TjXnYAkJcVJ6dZz5netdt9XDbSPAX8HQuMVL3uvejXvbJgMgGXBEu7t8B",
  "key32": "3ukeaYBkvJbP96iw9k3Jku5Mgai8p24MxMEHx2zWRpt16vUrTgQRNe3BexXadsNTdYCn7tuzjc4MBVRKri32zjaJ",
  "key33": "5ByWSSXZa3pZwGB9tmwiCzkJYvqtbg2gfLQAFR1yKH57kkCLG5DcHysTcboKGh1XdqegLS7szvJKmFR97xBPLNMK",
  "key34": "HWNiy6EaHqKA4nb7QHcKVWJFb5DdxsUND4xxWaqkKFvmKNvYw2zKR7NuwXh5J8jz47f5TWD3wMJpsxP1oSwMBKG",
  "key35": "2rYeZznNyhdCKRkmQrHAaHXykAw4pRvW42oKNbeFd98zWoHJ83ok85dEXDQ8GGXFaMAzDhBsHD5R67NfZspoM9SY",
  "key36": "4m6PPKTBykTSTbYL1MtS24BZZTxQbFZxsjgCP1zAc3qGMtCxQHPqY1WTDELQBMQ5WAKqBPperr9bubBqwd4deMyw",
  "key37": "3ypgZBVG8HwXhRsEggkJGKg5XuC8jCUBbBxWLL5eYDhNcFqMdBvgiaeQELjgPC1Ne8LEPecadCkDDpLGgyJ5k1jm",
  "key38": "3TjKshRanmGab86P5Df5amfyWiU6vKxBniAe3c7TL7VdhnxSKa3zGPm4nLJuh3nm4uXVGnhP9BW5FSbdXP9TV7wk",
  "key39": "2agXU1C6cMtQNfuZh4L1cvRJ1zXA4fhnQaJdTo5iDGkTtU3756RDzku8QEntJLVH6R8CbLMWMSaErzKiGGQnNgRo",
  "key40": "64oZi9ML91QNDVpHxR3E8ofhvBqskLSai6Gy2nuviV3H69V84gzSQsXvUquv3Dqg8EqGDS41VJGbLbtQAFKDSfrJ",
  "key41": "G6PgAAHQV3Td7nL4uqgJ3fBNg4zmViHKcRZLMHvp5pkUPjwjBb95gh9d4yro2ehRyUG7mWH4cbpeUAhYjXMi3uG",
  "key42": "4khzMGQegDwqnp2oQ4rDJEx5FiLLoypwa98wnnTEfh6f31t6QLxKU2WSZZDVMQ5spBBivtZyZ93MWQgs5SCC9KGQ"
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
