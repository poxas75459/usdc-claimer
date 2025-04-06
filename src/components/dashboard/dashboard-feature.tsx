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
    "4m7RT1SMRCYnyMPiP6RS1319dnC2BZi4H7eVUujfn1ZjK7LLyNvi9C9WtYZs4x8hCWP13ZTAtAq4KqeRLF4vq8t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kEowSu3AzV365fq2yDdZN1uTttvy736wbJnJsfRcqeduKgpYTaeBZBwkSujWkGsUfvGgqcUS5RZWs7Un9Pu9AA1",
  "key1": "4HEPHxjgxoPcwjsSpLQCzmYvML15h8r4MeD6GsqBQW86gE6bhjwBUE7mZKgWghkHH6PMhPHntobbGKCNsek6C4MT",
  "key2": "2qakgDpzcd19zFycAzNn6agnCUz4AdaiK9xUj6wG6Y5xzi3FnfKAtJ55cJuxgkApK9nF9wZTuAZAnsY3dVkbbFEa",
  "key3": "52LHFH1AhFCuyCWnak88qnQ1AVHzUSHn5UFiqidzSp9etSoVHbP9SxnoRJ3EHrrnhCXMZraN5WiwGuz29vdjti2G",
  "key4": "5F3Q4fykdnNr4GhbMCEs3S1fUPFjw9s2UxjMHNMiNG16HMVcBuvfTve9NEzwgoD8xZsm9cZkwmxw3BinpGFzDMh7",
  "key5": "5PKz6wAVdVybe2B5jzBuHNjiuyo4vQSxV3WAYXe8vHfmDzgxHbpC4JHoEeoEatRWkQ9BKjxpLQ8xsiYuw217oeZ6",
  "key6": "3TkUCNbLbgvAKvD8PYmz7viSEYKTKAVAaTnqQT5mheXajoW2h5WdpStXjUJggoH2vkyYvcWdeXUT7oJzpKfhYhNn",
  "key7": "5uZHct1C1JYmMfqPUoUiveXUQBVFJEsoLchzMvKap883XyQhKavuUJw496oLQzqCRrcre7sezrGvh3fiRo9H2ubB",
  "key8": "3obpiXkKjdPUrDXKJYW4prnKwBnV7tvu7Te6j8ojKxq7ifPm7AmpfxokaVF5MekNtRU1wDEKvs1Bqk7EJcbL16GT",
  "key9": "3mGCskaFanBvG8EbWJdhaET2ASoaMNQcz86rbnMzSCicfFgDdQvK8JgYw5dreS2LacGjzZEFc4T2wisP9ity8ZhT",
  "key10": "5vWVj6EPNHB8uMkek2p8NCqGEx1FzxnVWWoJr1RinPCg4UTWRvcpEL16kP8rFu3sSBCfjjhgP4R9sX1YWHFYGH7E",
  "key11": "2Kqcz84j3ejPgt5Qsvd9qq23kiJKgLShXcpvagzNszTzoXf6KNuvfCRXa3jwiv7quLpmUMnVessFnNMGeEcyatcw",
  "key12": "4tJtpsfAyrnNuHc81UW8ELwgTf3dPC74yxVkpU2XdT2tMzTmKFcBaxwUhb9C5qG61gcoPb4zFNfN5bt2XDKaQ9tx",
  "key13": "277hdaeUKubm5UhKr4ptmRy4mzBsAqtpPqkMc99qrwzyjpA4P4YnnvEyMQLJVLRvrZASxkJy6ZGyxGNy2pdQhzKX",
  "key14": "4venUf3KE8xaoa6bfEv34QKsiV1Vv2sjhQjq6JTt3PHn8S2fqAnxawyowVTW9SZbRYjCPj21scSBoRkqV7c3zNsa",
  "key15": "3c1cFaAcPSdz7i4BjxwRGjTYXN7GwHkMjuRrwAmQb2pd3faYc5U3LwM38HuNbydVBwWZrcQrVH7aGdxLZzmQY1Sh",
  "key16": "NKXVkWvxMcfFNuoSydXJjgdXVF4ixyFQcv4Zc822dT1ZqmH2WHTsxELcQWRqxEfdaUJmttgigmZE3Z6PC5F3neL",
  "key17": "5G3pSsA813AjkQV2LsewemQ8DyyJCYahuvYCgyJ7oeTaxzhu7eq3VfD6BM5cD5TEoakw14nEPmJxXPVm41p3iJkC",
  "key18": "3iNUrU1rykMMaMeuNK6ERhpsx8nNuJbiN3acXZBAs8f4gtFzFxFZNtHLbhR8yXwgNMwmm16Dhe689fYN7FShgu5z",
  "key19": "3VtYcpNyHPED3KGr2A7wJMCf4juFG1uMyYxAVcW8wiwxDwBtfAjjKasB8YUnPQuXpGaFRtMuUicJr6humYijwqBt",
  "key20": "3USh7cSvf1Hizf6atjrKtdKFPB2iQm2pujDhMxQRSnP2ELfThsz9A8nhZNxWqatC8Yxwz7KRnk5VhV669pgKbrgn",
  "key21": "4Smje2iN5mfo2zYzUX8oVPSCmHUTKWvRNnyeS2eU65WYscDRbSiNaCFcFw2VuW5ePWqZCCxZgr1qyZVys5bcttcr",
  "key22": "58GUwZakLTWNfhP2KPd6a8mqKsZZJH5xqGtgnfRMvwcH8SxZj5Fxv957CfAfUx9RWakbd3JaK4sWSrnKAt9GPPPE",
  "key23": "3o7ir2RNBUiYyi2Gu9doj5oMqeGY1VQcfqBLHu29LdesxbfFe5BEcoTGXovG3CKum8Hdj5esNvp96RgYXuuGKNwa",
  "key24": "4J943TXSYkbrWq1ZDEjWd2Hxpi9g2KV7LZkE49BwBf9523MhdfdsFa48EHzsxj49T4GvQofZVZt7KD9tQSrisKtZ",
  "key25": "4ys6ZqGRMH5hXiPUFMVkos5vvMdUwz3vYU5LxMqoqpbsEJpGUFmcAv7BhKGV7ZseJG7QcJxuogAAhS7ijqq6Bmgz",
  "key26": "3sVM4mcSfRj5mUxbCConuJnEV7xVT1D97crjHSkTgEt2cmW5e6KCEmv7icUp4qh2wYTa7m9XXCTZ7Maw5x4Poxy4",
  "key27": "3cShJkdakrfSvzFSU8oQXL3hcVZ9iQh234t8fvdNFidRdKdh8GA8A4wXT8r7U2qzbkAJFprVh2dhrAwbggUgEHrT",
  "key28": "2hMtTws1omReWWduhbDaWphfoL9WVYGecybJFetHPm6fBYWKDwiQRxPS4W3zxymtbEdkbMEoDyt5SA8Axp7yJwF5",
  "key29": "5CgViTTroNnrX7fVEUvbAZYC7rw4JKbYbAU9on1qn825MxR1mcjsRkyihWobNvJqYWYkQm2oXd1vNUjTGaqgitNt",
  "key30": "5curzGU7HGJFfPyDsFLs3HTpZDN9AnjgSEm3zuAdovTc74zNE3ojYdBW6A74jo6me6XjygQwiA4rRpYR1tMqMeFa",
  "key31": "4tjq2cbo1poZ45PSz3XtXJ8t67Rkn7FRuZZvAHJoJJJHHie6vyiawS1A5d8FuaYdEmfhiKAFozXL7H7QqXXEXUmg",
  "key32": "3Eqhe2c2UUYp9MMu2A3oM5MQHK1BVWqS1G38NccnvJtSpbq5hSJs74TjtFnPZbc2sbZxC7mHowGJRoVvcAK5Ujya",
  "key33": "8rNkAnyMuYw8842Q3XX3STGHFzzP78UGkB3B5fhcwKjMrEfA9zoMH9Mt9SMPmd8fVTT8TB1479aFby4s8FLeqZv",
  "key34": "3Pie1PAxmbCtf6vQCyvmcbZkW7uBAZZgiw5j3WhZ9KnK7Uah3caKJxs5iHD4WoCypnbBsKvu6nPSvKJxKtmk4xvK"
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
