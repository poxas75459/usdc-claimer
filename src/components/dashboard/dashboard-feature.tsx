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
    "65EyVrp8mU6LUrfmqTq5aQs4B6JMkjmeKFSDi6jdtRoS9LexFYqaGsHkqe6j8wRef8Rbpv62smhWkoeDBQN6wn3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5XsFPRy98xFQ5p312xKupePrFTc7rzPc6CgZkn9cgS5kq5C55tsPewS29vdSmJoWacUyVvX8NaxmLnMLuqm7f9",
  "key1": "thA7rG1hqdr915Ds2A5EvCiMsYVHNMEi3PXctvid8LVHxHa5U5Ar92eVSQ9JcTM4BURx74RkoEwfMcMuFLQE9KD",
  "key2": "5fbmx3sKSiAaFQpD1VWsgFYTXVD2NiZwfCx1Mgwe33xm6rvau6nv6hTeL8WVWHSfYrLzKV5mEGYxhhpPE4vJyKpt",
  "key3": "4w6oUUVQ8QdFB5nEyDcDmyGqy91p4eDhVAVVytvpPs8JAK1zV2uTyNtqUKdcNptGz1Lih92CLokTD2KmaUsgdxxt",
  "key4": "4VfQYRY7BbJ9xBdWJ6KhTWq7Qdpjknf22E5KUBcbz4qdjqk3aumjoiuRY8VHr1vHMGt1qMg4ts8LzYxF6xncx7vm",
  "key5": "4GSjRccMVHgow6gR87CPa9ZMPgjk1JyJjjB6BPvSHA6RbN52BRWyzBwCSJj5iNWn9exowaAA6QMwtnb1RdGkyLUp",
  "key6": "3qzXtgLRTR3KTfkUDTq5nrkNaAoz8r5DLi478v7CWv3hiADEaVeGeeKpHYWebwXMrFM7eBpUMCU9PUFdWkwQqaye",
  "key7": "41z3WbxcY9DL4iCP84kGYvAzroHfkL8egPDMV1mWJrCRb28LZqzipisqtYoAL5ybxWFhjmyjFQdJGipHwJNKnVsd",
  "key8": "429xAfTdTB1h2EUaUSSo5rybMjUVWGrr7hCyxsQbZTa91Tb8wrwdxeKfRF9gFo9ST3miqZQiu3kCSGDx8agbDhvZ",
  "key9": "5a8pRsaYNQDiubRn3ZLZ2vwb4bhMVq21GNXkS5dn8dAfqn15XjUHGPqy5vHY6JmD41zrw8YKu72vF6KiJ9ayhWa",
  "key10": "2gwd5dtLizfKo6eLMLJ3TYACJWx4S78jsjCFWhQHmnKNYdKSDdxBPSHtjSARSiYwLD3oHsKqEmGWUbWpseJugNVH",
  "key11": "SxquhHRwDPU3i448b7SvMH11nSa3tkMZ7HMCubf3w5wY34Wx6UgpEYQkwaQPmU2gZsvzosyGjJf3AxqnexJhbVk",
  "key12": "43Wguk2m7Kox4Aa9HshdecziE35RefgNg62LBQQE8jZyuLfDD7oiKKGGPRsQDHQJKo45SW1oCeGbCvVUzqcEnJV9",
  "key13": "2xUXzfEC61RTkSHkDpAeN77jKJzUm7Kkjr7nbT3PaKmE5UvG4vvjatkqDNsMRUYXpfBBgtKLyF24ybvphKTX6BPb",
  "key14": "RfXV24BVSpBDmCMXqViV8nWpRJoBTVnRjQEz2Z9TVTCoQBkCU1jiPSK9uDXrBHuHdSU813ZkfUjyRbRNFyeduhC",
  "key15": "5N7z8WZx8EqyqNQmaWPRKy1E5GuLLqjXcMdHcLFbkx37ftmTr5gQVWioPADrJp8eXc8PKVYh6b5vxNHWfbqYq5TC",
  "key16": "4EGjifWbtydThGKaaEXAp8nD6dUQ3CCcAdrijcffMHaKqK8TjQ6dLXo8bHJRpJzBkxb9oiqnNsi3h2Q5ZqSdcJjs",
  "key17": "2Sc3FzNS5TWeWuAWafMqg2RNWcU9vxz5y26o5LdPv3St3ke6ZKCfZkSSUNqwaJzDhkHEpATKwyKVi8H9KAVvnijX",
  "key18": "UzUddzB8rbFVxkqYcrxiJu1LCc8v7qJFWRNJkkT51yqx2jZhoLxAYeYXY5jYjsP9vPt8vFMySnmVHbf9yXuEa2Y",
  "key19": "2sUF2hJuPaixYSh4vr7XuyeprjAUpGKXjdnD9qi5W8hDp5MxEUBWMB5zfqkCzaV1g61pfjYLLyZJrJmpKZzTX8Ew",
  "key20": "2pAhcyywsxtVoEUUkYvUoBhbtkqMbgQjJAKgMN9uSyo7DFurep299jxRg25tygL65r7GWsiWTg7cY3GQyzAd96to",
  "key21": "igCmhf36HnccjA3dgNH99EmQtUTShCWszNdbr7vb1TDSJ2zW3Qz3hiSFuL5evd8SAFvMnk8E6pszCXHumL5UFmF",
  "key22": "3sBsNsEH4HKiaN7WRGmM8267EwCD3H4Q3nCb87Wsrjy9gWXENYfmGVgBKNCfrTozEYrLz5jFLVAAjrzpcyyHEfbZ",
  "key23": "ATbeDC8Dzq21anxMJmd2YXkUSx44NK4tPJXCKnHiRzSu5ZvYwD1kqxgHeBaFfb6fRY682waN3XjviEke2dXmiTo",
  "key24": "4W9xfbVzcBtXXBKbtY6wvQFCUckxrHzBWkF7ngvoVRMDCJqkE5pXKWnURohvee4vu1zKPhyZtiEyFA9FjrYfrshh",
  "key25": "49Xtp3kuzqTABiHAsN6taWJLxE3JvvjHHkh5nySMyZBDQ5hrmjxc497mL6jDkH3a6c7okinpnQ45cxMgwg57Zkm",
  "key26": "4PzgPgT4HiP7x6CHysiKw6b3UwX9PGknboT59jv7Qyv1ws752DD9zi6VKB4U8k9UFZXurZjkrmWZjy5SKys5MpFN",
  "key27": "3WcmKteTNgTaJN3b4gU6ASQG5dyv89Vy2JSLghDyLD4VAh6qobXmJDjEZnjVQNPfbH5Dg55bxC3ReQXQ5qHPk1ZP",
  "key28": "5EobSorqk7CnZF9ToostvBVPFWFDycuwaToqzfrfNXY1hm4pscezsENTtz38JJUtZanqLK2F7cv1VRcrjKPU7DQg",
  "key29": "2RAo4aJ9RCngZm1L9FSxQYjpLVXgYULcxSJDnHwqxjSfXNzQ3K5HBeyfUwsge4KhK8psPTLJ9Q5fMPjCm7n2siS4",
  "key30": "3xdwy3hVT6rH78qCvKDL8LyCmyJLg62m5Y2KZYGfQJqHKNgibBVBNzAvT8jViAwbxdWUQMGmRi5DanRNopzr1feB",
  "key31": "4ofAJx7DdyjVtSPYMJdGvc87uhnRuyfQVU4PBJyantuWB2Seze6BuZi16Zk2bEkqv9JpUTcSZGuCkY6Ep9gUJypm",
  "key32": "5UMyRDknJGhUQgG8UF4fKGadXv5ezhTNX7bwqD8mv2NS62iqX1yebXiH1Vt3AkZpTX9Fm6UA4sFRp6UBxiHangXn",
  "key33": "5jLcHPpimxJZD8zqW946w6hbAraHidbDWk4YV7FZzUnu9G5SkskAGrzkEU28tDty5Q4iTcg74NDX5gPW6hXzbVUu",
  "key34": "2Jpex6HJ5cirym33LDj5nfEVyhoZrMyeMETTm3R41FCN735K6KozCdVKB8fNZYJ7h37kQQEPojY3T8SMXkK6PEm5",
  "key35": "3MN6NyJxnWYfpjGxSSL2ckbTz4XkoE6JAnzQ2BPMKgWfsWruvHQLJeNJTVEMihJCwA4yejrbjgL2Dbn6FgwSzqQm",
  "key36": "2ZZxA6FkbJFsRAmDn9bsrAyTtxUVtHkkLqHss3GcTcyrJev72JLs3zZLzmTZiboxoX3HoBUtcjrYy5wB1RPYhixu",
  "key37": "Z7pThCPQzpzv4ie5pKEZyXuT5uQNoeqQKKiF7EX8SxE48NEYuDGhqB43ZDhCjxG8Ukjwbhj3fzSShnoAYVkGkC1",
  "key38": "3o2DcqNToy83TmLbyNNXUju4AawByV5EZfbGsJhwuJ3dTUXUoT9ibB3LMbWcE7WztCiewwsQ79dptMv6su4JTtxa",
  "key39": "4drWiR2xUhpjCkYe75xByjTwtL7aqZZssFWveXXSkbm55Kds5ZdfDZxamWc1Q3c8z1wUjNu6hNM2Npt2jd8zYfER",
  "key40": "3WbaCvbRnPf9iD7pU2HhjjKGjo1sdCdoQCiwsw6vaenPz7LXuKZTSwh9YofU4cDKiVx4LnB8HPemLwoUfXv983gi",
  "key41": "Vz5J4EU4k1i1YXtFufpgLgVzv8n67zXxCJyEFUp2aAzxtMN1Pw5qFu4D1vQ6BdMJjqSeFSuFW8qLyxAwkbSiZSF",
  "key42": "5PrR55aVTYXjazSWDs1zq8pqAbCxkAekM2vNvqhWUAMsVYGQ85zt1LSW1mf3CgPv6jQM3X7srZiF5MHk6s5qwC2P",
  "key43": "2so7RcnQao5ZwV9G9LGP69wgmbFwvEUTuTfTvw2sbmRcsEfgLwuqhgQMdWWvX7J2YahZTXoBQhu5feqpMJDykkFn",
  "key44": "2TCBiFXopc3EcH4z4uWVFAtWHK9RbAFSzwds7vZLkA4Hy2ev1XsQYTjaEmqyqVVsZH3FMZRhdRBVoqPHgX97vMaT",
  "key45": "3XnvsoSBGmykERrQ2fnC7aFXY1XyR3m7AsPt9ty5Q5yLGbb9euYa4AT27JHKap1JC3CDegiZ1Pxr57shDysPQCuD",
  "key46": "3WriW3WZ26JMVcFguRbG171rktS2549Gxa2LQAHn8ztsVYXPKA3BujyzJs33giDN4T6kxSBXDpa3s8A91nRcbUDf"
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
