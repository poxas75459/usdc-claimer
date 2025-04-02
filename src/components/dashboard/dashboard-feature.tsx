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
    "4F1qa5b8uL3LWKNV2vVMHqwzFVpjBu1GZ6e9KejbFahR65kBapEiFzB7eJPu1ihy6rZXRuBb9g8Mw6J8JG8W66CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNvpJNDLfoAq4rQiftmS5xtzbtHPo9P49yhGNt74XEuPtQAs654mp29jWSYcT82SYfJERyG51EpMsAnecr1dU15",
  "key1": "DFvRvCsULbyrfcHPrmiyPPQNK99Z3p3ZHAavMhATD78DQnXVvK42qCXz4ENyGnMLEKWJiXEzBvit95mhqTn1GZy",
  "key2": "3MPqLWFtxzVv4udN5srcrT3prFCjgnwgp8hJUEScCKkjahSo6XcRrgaN32oSAu4xZ31cDZYVmLFDwKCfAGSaEti2",
  "key3": "98MCiDkR6rEZEDQWWUAnZz2ypepWGi57hEBL2zq1wYiVus46Rut2Ve4jivjzAFzVFviTrXPBmaTzhsn4jReBU5K",
  "key4": "2dFpxrKEnYNVBAd3ffkZSMbCuyUxNPidKCFei29D1L23i3VxNnJjf9DQw8LMbMjHnNeqfx5vRy9C5UHyy1S9B3R8",
  "key5": "5pXE1ASrJ5PghZ5VgQH8n6ubPHMmVWyFxvJUL8hB1yK2vsv2pBAURWMMUEyAPPSqdXPc4A97K5pTERchmG778bCr",
  "key6": "5zgs5kUDemVAxX2Qk7gPF3BY9CquMDkA3wZjFMb5e25sGWMj53YDN9rf5tdGtYnMUqrVXy9RjuZhCfrz46zuoYVy",
  "key7": "8DyqjsUT7hawj4FJEHHS9mAvueLaPZYdCviw5MaRhg5fcsyEEMvPqwUNdxoZKR6fGAoj7oAHfWLNYBx9BTKvgCR",
  "key8": "3G7aNAmiDyVyEDDZKLLdxGNypsYoE3bwNLSDApyCKEx2X8SrzQfmdxHjgqrpmU6Zr4JuyncSS2EqjLSku2zsXvzv",
  "key9": "29s28ZGi5tWfmXeknhJ1oFHgvnWKUDnoK2H9btHKhhtmKZpyMvvMGaMPoZpdoVq7JgfHouXCi5bDP5bj3hc1NE1C",
  "key10": "1DCg1RVRBrVBum7AQPedcmGy6ZqjaQL6E2xJgXGtiwuNdXzet1PZcAVAXk7kBiQr8w24XeKR3Zgbemj4f2gT8zY",
  "key11": "5XKeFHcJGG88KL6w1K2pdCyKqdKg8URjF7AzhPpGCaiDSkdpkQTxvbkVCoLam2VHyCRAbyxsmSPjrJWYRgtDfFVS",
  "key12": "28DpFr4TkpStiWnLqwfCMNGbLK7wBCdREaFFq2eiR8iZ6eAWa4KyNjxhgyWiZBwhxasSqfpEpmhJatc1EzxsdcAq",
  "key13": "3kojDP9fkdszVyFMKeL41rbTc6oyrPTJN3sx2Gyzj57pBBemoeLCY8QNucs8fqMFP81sF7LoSbGoekWVDjjGzztm",
  "key14": "54tniCMfVkmazxgYv17A7Aqq86EKxwgHF85wQH9h1FcWqg5ueSDbzZA1LEC3sXoffLMMMLnUgRXeFZRFG8Kijb7r",
  "key15": "3iuv1ek8NvWe6w8tsf2mfeK5e4vS2ZNN1JN7q9TExGA5U6mpBDKu1PxxXT1T8zeTxMJcSjgEfixSxEMQE5pnjk6F",
  "key16": "2eY6nLMptsffaxbkdBQCWTCyhNVWSRycrXogJF4Sr9gtBJb4dL1w1uyijNyQjnYaUvD8YYbM9yaFUnh3KkNjPDEn",
  "key17": "2UxQyfhnk1BcNh5EKhjRuZAKEojAp3YwjDvtTSEpUPi2ocQZ14cqzo1BNSxCFMDxWadTj8pVWb5cAqEjM3MmBZAR",
  "key18": "4Wmh4qeHSnKqvZFx7JKrU4ZVkjejJJw1M63D9Ypt9FYwVKkk39Fd2hVykLyWnHRVhfHVib4xSoLSNsxsFzk7u91p",
  "key19": "2uCbEbvfCQH6AwedrvR1uf6MKdn51udPJt1R7qE7rajxQ8C4KvVPPqZvZVrJPcyUbTDxMUTVaDhU7h1F7qr2CpZK",
  "key20": "HenxTGfCPEyftBeBtBZ2F9ZaXvc5U3cV9YASGsmGpx4HsdMaHzfmETAG5sGeVPxWXi4mAwbdVrPbo6NS6U1JohL",
  "key21": "SLRGD615EsZSsN8eipyF4cXdhaU3vXZCPVXqWrVbxUuHUU1iYiKfw8rVBb7R9XPx6NywNST18EHcnDzpGYLAmfZ",
  "key22": "5uawdwdJoAC6QY2Kn138Q3MXmX3tM7pEdb5ronZBWcQKuoE7fXLUUatpR69WNBTNKhD6wPfVyVDX7Nas5uQCNphw",
  "key23": "4eYLj9pesckKEhrGP5TNdp8hGXmhqQuPQYC4cE73mUKwUNHd8Kpuzvj37RsA7KncdmjtLpRoxL6S2JJKASWhT7j1",
  "key24": "8U5VG7AKKH1EQmGhx5nQKu7Bz4Hss71kKiczqFamBvVaj518J7UV9LSwmQFvswoJFdrqbtsnBa9VUPDzT5TsVRG",
  "key25": "4ixnRjRM3aBffpjhYK5cr4PeF2JebXd3RLU52rf4XQX3XF39nv6WzCBSXjfdFny5dQAEioqgR454fLQRqnJ1Gigd",
  "key26": "5Do6w7zvTDT5G3i3jVy72kwyc6bR4QRsJMoscCZuDfUqJrAbrWEhrM4V28Nc1NBNhqzgRqVwWgNb2dd3KfMXsrSd",
  "key27": "2TTG5WfMQ4GsYPzH69zR47usJCQdKm2YQhLW92MS3ufUqTGwwp7qNW5pVzix2P3KkYov9oU2PBqs2KysbfUPb8b2",
  "key28": "2c3yS7yBB99xh7ujGpxufGSFaqxLjhbeixPFTSFkqnUifr2YLamE7gQdbJTFhtPod3vTm2HTZLDhiHh47z41ERmj",
  "key29": "5PGqGbwri8pmWPYhQEmoB1uEFThpf7H5nEKXHK4BEecHzkQBVBqHVjLtdxFneMvTdv8Z4g9WBKgStLjSQdz62L63",
  "key30": "522n4foXtz4sqkeURSabwEQLpnM2tqw5LbeTbxisLVUdzjtmR4FrWow539WS3H1NC6mih179E3t3G2nADKDLNR47",
  "key31": "211QfZ4w7ZXtttxqpZLBmtgHfHzx2D82N6Yr2opoptJDL448CBSRCk8aK3eMUmLwoUmwjBsf4AgdfBL3wsAgtcrB",
  "key32": "2qPwrHVoeQnsM5NE1xJWoB5U2vdTmH8UQiFMXQmi1qsAj1WGqP173zujfAhWx7Ba6C6incSCmLxQwsZ37JqoMMFS",
  "key33": "JDx2BosiLofbbCM78HVC2nitSwPAmxoW9B1pygcXZVmQ4VrV94T3y88fxaXKYpvQbw4RDxEr5PBpsRTmiNYVqAi",
  "key34": "3qWLWFVn34VtP3qgndR6rcNJDvi9JK2ew7xECB9ignDWNdbEsaate7ZG4CipvGWkhCpfCYRgWU3uAisKNGpopWZ2",
  "key35": "5JS2cUxi5tKFENZ2AXMdgNybiU5vswgZgaX2yi4HR7xqF2hceMU1vmSmqAZWq2LQv2LEs1mVjPsg6Ldvu1hH3jh6",
  "key36": "49LbaVP9xpi6sXuyL6fYbB4dXTTRrqnNVQbd4qqVja1kU5M58V4CzodduiTkSmbCfyZUuLzQ5JuwALXbWBB1qqvf",
  "key37": "254U1Lz78MAjjj1nz3A2RPxrD9nRaEJb2pEHyCyKVBk3z7pk9UphFGeyHvPVuyZbT16fLy7WVpVC3hhPgiP4eeTX",
  "key38": "fTph62Wn12QtJ9T51Jn91xkgpKwxYvycxYaBVz7RFHvGA41WpQp5BjjKejm8STQfsLuGe2j88irJYw6kXsxYym4",
  "key39": "yNDo5gW4jcjMbGPMVdx8NduHH4mwauBou3EtvsdhqM6KTcQhQ7DY4amhpn2v4yPvqVMkdSS8CC7VKSYy3r7kLFi",
  "key40": "3bnGawHqPAF1GXMNBDiuzuKD5F3EPChfQoaVg71P3NgEpmxck6hzr27TYQsHMuT4L86ycMgFpN4C8MP3pBPDMRmH",
  "key41": "2FJv69DAmq3f9mncKFWQVkdJYwMpTmnYA4rzcDPw2uaNQ35NugMn7bqd3BfwYHs1j8HpRQWSjwSjBsySEfjt9Z1B",
  "key42": "4hdtfWYYzN7sXoRB32hoCf8bHVREeepp8Z9TAjPt7Vnfbm5btHq4aK6vT7RCoCjcFSToCQxVHsSZ6BsLF2qhFyPL",
  "key43": "53P6eJJU8pb3RDd6NatJH6fJSrdGLrf5mnMmJNsk3PAdMp8r4v3jHrJXcoHH8QkAiy2i8u9ADC3xBecLNYU9KT6N",
  "key44": "3aJ9djdfdN8qATzNMtJFQcHH8qUSyPPemw7ddADXfGbtRyMTXZuJEAMsz3xpMncpHi6gtBb69U3Y7mfGZxrdoZh4",
  "key45": "5w862r9FJQeMdisXgHsbuN3UbXgpGYR16kA1FkqbjUXuA98DCzo71ZxiecW7Hma9nVU73B2g1BiT861aYBstScWq",
  "key46": "31XEkFAJLuhjB74cNw4mXqpJGRCXthTuhMG6cku1FLvpRWuHm9aMfSUAksTMWXyJWQ4FEd8wtn9cFzQt1Qc1tdEQ",
  "key47": "3194XHzKpDujwE7BhQrFPCALLkoHSHpa5oKxumTqoFyq5chrm4f7R2WAYToWdFTgUB2g82kb57XDUdtEHwCvvJDB",
  "key48": "KpCrjWtyQg2cZexpwDeEgMpAL84mJYpefEfzexjByD6F4ixh89Ky5nyoWkgtDBQXARKuRoL3o9eweBYf9M9x3V8",
  "key49": "5M8eB9RL9n2Qdx4zDmgwbZyuHrRFtNLh1NfGTt74NYPTEKSPf2iWtbMbfJ4G9UYDiWFN5iuE2nRCd2y2zy9ueUHB"
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
