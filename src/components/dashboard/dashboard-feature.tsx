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
    "2XepN8tJQrhowRzit6heXDWNT5vE6Pfw57G8e5fy9bz8adPkBmPDBGgZDG6A6Mpzq9efcsb2p7NL4ou4wHPXNQUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bMmphN757zRrXjyfCv9WvpsiNazuhd9MNQe2JNXfQ3ougdJNtbM7mdJYjgtBicuPpdSg9hqKiQ8WMPHDfNPjse",
  "key1": "4Xh1nWeVGMY8b2Ke9zEF5F6vNZnj3tthwaZMbGx3BiurCuGhH8dcg5Rb1VNZoaL9KmZwgvqyJ7Kt8RAipDLhHszN",
  "key2": "wHYDVkEAbYeLWibw7fRnTg8p2edun9iHwqQGG9BnHJ641DaS2S5rAGTcq9fFRtvJdbDkFDDtNgXbMYGhEzDuoZX",
  "key3": "5rpdHBSAxxJQpm88wpaezxeaCgeuV6wnNBHqTCzjDDZbPmKzDsPHYTKTsxCbNRAFrzDtD4CEAk3ED8ETnQTfmTyV",
  "key4": "3qHKvZ5pQCXeR3dCVhHictxsbUGfGax1rpXD3WcrYEt7r9oiTQ3vp9y9gpXv4M1JWG6pET7Qdp5HTV6XMkmu74a3",
  "key5": "5PQySktapGiHqWQLfeyFWV851PfA56aDJKRm8Va9avf1qy94DiujZdBFU9UqfAY1XPgzxaC94LEkZWeHL3GSFGs4",
  "key6": "43E37Xg8BB3wemXVX3r3JKPvAFoqj9dhYoNP8FqDZDmXKF2A9uozsY28N9Ns72oTusqUSQJ2PuMNAbpHeeJ1uWki",
  "key7": "9w2ThKDEPeaCz57zFLYDW5k7X9fp9qytLMRo6fvekmZ1rYcaqx6VYcLs6PyvM2n91vDFrADQoM35Z93gwN98ey7",
  "key8": "4A73b1TQUqQvNSvHnk9WkhU3tZ26CPRWQpcrzyxkeH6zyGugAW6c9XW5JaDkhNVCLF1eTVsjxZHvojSYrzoHc8YU",
  "key9": "3gysrknMf8d9q3z2UqdLXTgpfQuVfQJXr1Si7fq5fp5mwuX6Ms7BeVDBCEDuMPw1ZZ5Y3nAP7PtbRK1WtW5hrEzP",
  "key10": "3FQ8LWvuhoxZCt4avDNY7DshpDWPYC1EubaMP2SiQvTNCRWk6ojfiGHbu118kMq3g6d9CW7NZu8FdZvjRvh1Yy5",
  "key11": "4NChcP6H853b1oGpiuYN1JoKohY9i9DQAhYr1WzkoE9xSFdy3fG2vyAXPpsczuSLF3z1zq4DaVohT5utb8XcQ3MY",
  "key12": "5ZexChaoMuTTxVHfJ8bMrNLJZxzFptRBuvoXyBesShcZhH2scbmig8bQpVFtiuKBecnJf6EVWTs1WsoU9gjPLNTQ",
  "key13": "MZZAjdt1svZNHZ33V2ro2j6Djpj1PZepcq6axV36zKyvio584cGbhQhzuYVGahj7GxBMULrrSvsGGtvozQxiHbd",
  "key14": "5n5uQt35hLPdcMEQ97hioWBbpABpeyhNvJRhYVfd7csCknaBXZTQaGEi2seWLenV2LjrwbYevs2JhciH5whg2Z7V",
  "key15": "3URgx1yA2xX8vk1ioPGBnocCMaaY2wrFpfaRFrhK32Fo7Q7pDysfMn36x8vJR5MZ6f4Lv95TXQmz7KYCJ4K8x31T",
  "key16": "41yzDtgmUEUeGQnUTTo5BG9wipd5G3GeEqi8hY6HwKDYR56niQwN7TCx96jqXaKY5kYKC4ZZbqg9rxCmsv1CR8ig",
  "key17": "4TBfEZq4tD7gAvr6fVuDAvuvzsK93eDtckAE76V7kg47CWfV5BPrVymWXKETiipsidjnkwQ3KpsL2cyFKvrH8Pzm",
  "key18": "3ZeeYqwkT6c1bfgvtjW1JrZuntpJgrmTfUyYvXFU4xqcBQtPLLqAfHrRBntvCfZYPMnfQMAwk9UTC9DuP5bmQNrx",
  "key19": "hd7KX9eodmC9Bjw9n2n1VFKzcyasbKW8Zpa1j1EjHuUHkMA1EkGG36SJk58Eg8mNvTFgVULSJtfV7gDbbYhistZ",
  "key20": "58USX2ohhqNBtNSLDv4WghUc2yeTmLqgStyR7GBN6E8aD2q25gJ9DJiczv5WBp3ALWpzk72DVLRkwmGe397EUVsp",
  "key21": "36YUVYN3QBk22CQ9KWC1u9rUaNXSbeuNQAMYGgsgpGSpzUY5c6UZX4FRBVwKngZrA44jsmsRdL99FL9nkfkeANnA",
  "key22": "5ER6WkxgrWrio9kRQ3GXYvxm28ZftEwT6yDZ1XKwJ3AH4HMqB2vYBp3BY9nf4vsGLc9C5pcj98DFoXiokHWsTXwp",
  "key23": "4A9jk5NjCZ3k1CcEGdJYDENKavfZaSmDectRpKPZ6oYM8iogbDefh7thxqCRVR6kmFqJ8PiFU7E4usFeA559iJRh",
  "key24": "2t4MRdSErLp6c5xb7V6JnCE3ePkffqbg43kzHpdrti5yo19ZXmPBsM6cuf8LYM8Uq6gKnnEQXjQgWJQwgDLpRDRN",
  "key25": "5DYJ1WxjEZ4dadySnfujAz5FKP19dwNAYUW1DcgjQQN8SqKU5UuLLz19zcfF6N8f5siSBAqD2ctLf2KyiiTgYJHs",
  "key26": "4KRnX8A6sUmVGUeBuYg84KRkWLecvfBVbR89WtJuYPEetUNQXGWoGCAeQhRCoeVAyHaUzkYJtGacdmfj5f1wyQpo",
  "key27": "xqiCygZ1RbETFiZEbScnukwiPJ2rXyB8SQdnhco1wcVto5Q4pkvGXAb15wkeJGBrBrBN8eJULG6WF4wX2Ce4S5Y",
  "key28": "4TMxtmxXXY2ouV6z2RV2AN1waEvBahqwN3kZvvEBuESnAs98n7VTZV6vWKdJjvUAj6ZUF9UAreTDtCK9u24orxm5",
  "key29": "3qsCzqw7VHsSrQidouuR2z5NZJawN4cvgJpXT57s5Nm2gZhJihYY519BomEAU2ismz8u5iJ2c58gcTcRDbimBds1",
  "key30": "212mZsiqV3ZRpgszb6XGrdKnR9XbFoX8t86tx6GpVzZeoA73uf1hqJdYEdumvRK8CJgmChXxdjzDMawmwRWrciDU",
  "key31": "31HCnVj4GNcZoKoEt7GHjBQSBeog5xMdpHTJttpA3wYWb6LKoEdqhf67G7juPzSUnhxQg6VoR4Var7MdrrW9sE1t",
  "key32": "2o3xNeQ5Xd8j3e8pD9bL2s6KSwtLysLhZevjESysdMW1ex6kSkagSKGbfU8qETyvqPQjz7SXhCx1z5ZiJFWR955y",
  "key33": "PAaXUD6ZgwftBb2N3D6k71TH3UyUofvFVNmoufd3YSc4hHB6Q5GF8QNKZVQsKHTvt4HGesEZ9quAWKydEAihwTM",
  "key34": "2jSQAg2RqXRMrtXMZfyZ2YC4eE2oZfM6ngvtgte6X5BWV7jjtfuBMF786rKa2UHnxrUHZyAWk4hgwCDG1pS2u5E7",
  "key35": "2R7BdKjbZ4w7n2bYArjixzxWjnmEMkGTGHFa3hDZP2CrTbkpPMmwzCV7BixxVaZjH92gr4i65VMi99n4n2BZsa3d",
  "key36": "xQTxj7ZWiE3SBPcYKN8aV3ajKmmfb2gG5GhrDNKXMEXoLjJid7JQ6ZwQyHBatTVaQtsWZe4knG3Bn7Vogc1aQtr",
  "key37": "4xjSk62wjp1kWm1LtYkQPqxvEZNTaPNmpz2hReKHjVK7AkMAbrDiTxgCTBmWw5iJFvqbwBX2p2qTEMWu1kqCmDJy",
  "key38": "32JBSzt2jQAFUcv1PC2dGVJY1pqiNz6aQdTxsnG4rfPDhv1fS58qaegYm1pd5cTyGZY5Yy6ZzwLsTLjiCPsHSP89",
  "key39": "4bXUnjSt8qCQ4EB6skwV347sLAW2EwsjexoF4dFFFf8qDYxbt4pv9x9jq7yJys6xkfMfiBVaXzfvHTNhmCciSkQ3",
  "key40": "3M3d3Gwg7TszqNG8GHqWpV5gPizH1jKKFPWQ2j1K4BPC69WeAQbBj4UC95Dxfp55gSojLTKvif1uUqRVbN17uWyr",
  "key41": "YNLvS9mtoBpVoAoTdDPAW7hHnQd7ZENxwFqf6DfdcEWtBD2LLAHKpEpiKAbzQrvaCcMKrTQHf2eYDcZqS9PY5om",
  "key42": "3CPAtbgKTGShR9cgKBAsnRWNuukhBC1FfHBbpoynqrQog89Qj8fyA5PshfbDU49StViucjjsE35JtMxqxSkWazw6",
  "key43": "2x1WMxGR1DSkzifEroYtaHMRUXZG1YaSUyW6Qtbmo81ScnGpSBVGgt6YP6B9mMAyWnm1i5MmBoav1wy2VyJuHaGv",
  "key44": "4BAvuLeAX8VTDMbTCkXheXHGNSWnyGbstxKUNcL8LMHtyHhBxrLrQnhTcKDGSzRQAueW5bTkUWJxxLUp6PcWRa8z",
  "key45": "28zhWDhfKWeC4XYnD6JVAj8HVAXkBFCWuee5YYNj4BquKyYur1BMXawToRphbhMLWottnF47J9xjG9Hs4xd1wR8m",
  "key46": "uWNZ36s3FuuqpM85o6fgHk3XQowsD1D1XB6VNcdfytQ976XCFqD3f9ZyHEaZDmQhwqRWaT3oKhjYCzrQ1QiRKHr"
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
