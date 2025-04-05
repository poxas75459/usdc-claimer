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
    "5MNmt9zjV7uEm9QxZhxtVzCEZtsvvDk6g1pzkr6ergmPEoE4H1vSXQR8QvL6epePZ2qKSo1teh4o7kfEAcWhb85R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8tLKGzcPH5kqYwEmX3rnfVJ2B18HYixdpZmwWxtJJPVHTvUudCT1kF7qyKamnBGKQGFcELSDkenqooykcQ1ram",
  "key1": "gnrPfXdEuqbLiiPuuMLUg9MR2HLmUgkLuZx1WC4hhgAv8xtA7MhG5PcapLRXKRM5Gu5aoMkQJgnxXv8qzQUKMwn",
  "key2": "36XHa8sgWTvRZfs1n5gR3saRzyC1nEyWVhkAQGVBcZBuoeMn9Gskf2gsG3nH4raHZQgfL3wVQFZzXKQBamoi9wLS",
  "key3": "4qBumGPC5GxTm1hTPD2FUCsPG9JFMvZmXTBoTbRfm68UZAE3ShtkAjrQ7rdya8PfbCW6p3UZWNECBZq8rnGYXB8U",
  "key4": "2f8pw5gTz2bSuXWS7vZUqSpdytPkAyKWz6AUsA35HUU9SzLmauJK84G1Kct1jeHE3E3ko64r945ndDmwDamURRiF",
  "key5": "ihc4XvNXpFm6xA5Z3GBABiau3xH9i9GEyjpkVrU4vGnSGoabYMDne6iE4PmawQwrryXW6Xn4xyum4andqDsDckn",
  "key6": "56sCcbUcMp2yYJN9pTbXayc3EwyaEUK63BmURDL8zb473PBQagw7yZy8cvSF6U2aVTUa8aXZxSeshSuPycn6MYFP",
  "key7": "44Cg2JNjrg4ETfVpxATw3DDN4gvwnv8kshxyD2yGiTKt5r1gLbrtVgfKNWojE7w9DRBtqpnEV5Zj3S7C3QJDwmeU",
  "key8": "5wpz2HzqW8JkFGidznJJtX5xsWw3LPHjVm9G4WZJCQ5bgumnYhLKTkrM5z4BRzBQ6S6HUESFxGWBJQyuJFFPDibv",
  "key9": "349RVUYBYDpuR1iFHwbT3MQjA7oXEYnNktpMXurMNFxXuRURJCDuw51sCzRa24r4mAf92js6zmTpsk8stSKhpr9E",
  "key10": "sZ9aF29MFW4s4cE2hHui7Pf7pHKjkwFszRnudJnuipPGZfpLYhtTP71fi4xvoX5Djn66mKaDRGVCTXkFtuuhFKT",
  "key11": "dMExrmbibr61KL8T8v2E1xUKsdcYbwSucr3cDiaBhRaMs8GwQ4c9NhE8MPhJCfoNmB4aumT8wtwvywNb9YRDzyR",
  "key12": "4pHrMXUTCzN2fjCUWDP2e1JZnFgehTTaMxXSh6AuGzzdS7e5aSMMgkoXBvmDoHDdYuthHxELkmZQcPHngaPEJ6sc",
  "key13": "4Hi1F8vUjanRyqCUDbNmZEp5qqURDK5igvMwa2Yf7bD8h4bsAhdbAs1EQzij1BZRysrfGwfPJ2xGqkVBcbZ3qKzY",
  "key14": "kPWT72UrT8bfAmpPTXJudc8YQGsZkS4HXyjwJyCmRfvHs1C5gzfDcCycHzzZwCUraU33qSmdWHGa8e6HADjadWt",
  "key15": "4GeG2BVGU5WahsTFfcMZe3v66VFLW8VEL22bg8ytyCdyNCuTGPCsxLZMX38mAQmtAQre4iNk5mKr9cpyCx4cpSZ6",
  "key16": "5pQP9vSbJR187NAveZmgpDRYWbweVsgVfjxNh8bqwcUgn8VVeM4yRiJc8NHPAvTcfYZjXotxzXGvAgErf9ZDLQCv",
  "key17": "4uA5tqZksHYvTRecagiTozyxdFVNZdc9ayRwwCokM5byiiHm7QjQph8hJVy6JZKvRDPE4VMZGYo1C8X26341ZA7s",
  "key18": "4isg4v2nx5rx939cUECvQQHPiAV3dPHTu64ueX61DrMQZobvCxXVGuFx8k8KWUtd2m1bM6QWNnqZfTPeeMgYWBqQ",
  "key19": "3ypSCeY8bN8PozGjdtpJZx4w5QS26d1yKuBRAdpwG2TL67HMriRKHh2B3yzDsKvauNi6x3Luw1mdBJuDSMH4FA9M",
  "key20": "5M8DrWgWdTCbXUdDq6TggmzWSAwb4TzN71wJ4PQJFeeJHVLKCpoctAaMekFZeo36UTEL7UEfNApyrD8P3Yt6nYqX",
  "key21": "k8AHehAU89UUDNKassCuxHrQHNQkeWrcb2JYZnma81ugny4nvS9SzPy7jEnwV61jYHTyAQPYi3k3UnT5szUKMz8",
  "key22": "Y5YdhRbHhUQeVsPseuPGCEnqiuK7svFusFz3NcMPeWPvKDbXwBKpHkpFXozxXK7pxDhTrP5AhynYWsTRyinBr26",
  "key23": "3FgWtDTaeyZScem3KLDnoJdsDuCkcua95FAJK6PXZ93jMtctUF8QrCMn7N6rQVu8Jw4DeMLVcUopJPrR4oLenMHy",
  "key24": "5yAmHvxsnix6XyrNjw9JBQwfH9yupWBHVTQnmWBqyfyqJTHP7StntZc6zbezsfY4qKgLRExMgnfe5ghzMswUN1wi",
  "key25": "2JTV6rKZ4Nnsm6pBny82H2h4896za7npwRLYL7WZxTwU1bcvRHXfDguhrWRRNNkSnjAYGgtsBPqr6GxT2hUDNmAN",
  "key26": "2KFXtrWrXDaSLDcgBP55CxTAo2ggKfbR8P2DrmBwMLVNRgs9ndaeQMgjqTmLN1mS4FuP7Drds8DEXvW9fjnywk1u",
  "key27": "PB7mHuuY5Nd5Wic4hSjx3uoUNN11UY8KAXxCNK6X76FvgK1BSeqpn5cGZoj3sDr1eduJbAAaYyujsS8Udp2MDTC",
  "key28": "3vuS3ZeiFATv5G1PV8fHARmw2rV8PUdq9FFJrb1jB2ppgjYYsG3cQuwEncZHQ2dYmJAvyfgvde9iQL1UZEKTbJ31",
  "key29": "EXy5RUn9EJ8qhTwR5Ea8PJfeCUX3SnFDGbDJ6M28bW7orVcFKNwSZb1HC6z3PZpzPhBtiXGm1d6PdGHPZbBzxN8",
  "key30": "3HoNNi2FNofQDiU5fXrJrcaWawRsYG3ekUTwC1MGx4rnNGA5GxVdcCpzypxNnhM6oAeBHUF987tuP9VUwKmEtN2a",
  "key31": "4UvtS1KzaC62D5cxwAaBYkXyGYFSwWoeTk2ot7P7Lv2XKmGjsEhYrkYr5Px1J2oJrHSh4QnmwP8ey8itEnjXnmza",
  "key32": "5bVmKgxf5rAXn37sJjcSWUSLDkJJKX6MyZ685shJ2JTcqMF8FwFVi49oeJGufvP7BvW9BapmorbBxEv83mLaaSCA",
  "key33": "5vsD2tk7npNrWVhZ6bzieiqMB1ArL4wzUQCuf5iuSgqnnw9jmsWeAB6YVj72UkwmCXBtoKxo5oFjebucoMYgQgof",
  "key34": "DB554UKqfUNf3vLtTpLBGHvF3yj2mrn3FbThFCedBjvmidikFL4r9jtrsEvcaGGE6aAmSR2CMbg3TRwGDqoK1Ae",
  "key35": "3qx2eskwYBGfzHcaJR9h17gXo2agCaENSCvtAwjWpfgY7SFuLyHXD6V1dnTXjwKv95eujRHADDuErtbEbzWsDfyN",
  "key36": "42rs7R4ezB5fFMG9FHxmtSP9wcw7TFvfj32hMzD2ki6GdVvu4VL2Cac5d8cyuUecQXJNwNJssWuB2xceJdhiichJ",
  "key37": "4jmGGG1zxFTsmgFnxU4XQWyrGAoSJvevJrd5kwe6JUaYKeFon8B7Z3Q9uHV9ReuDM1bHaAGoeb1QnqwyL6KeTps2",
  "key38": "cuRjSSP4QuydzXYYctjYWjyZmFAVWjPpE8QEc4brVv5oZbnmmmN95kdzSQXzddBHsBYZsrbarNpHn6iESLcMEj9",
  "key39": "5KFFNoKetYaU4Bv3DGdbbeULF5edvMGXTBSpmi8yv3N3cBdiqjfF5TjUe7S2sNCvk6XUevVxQjFXbxyDY1bKVseV",
  "key40": "2CAUm5jtYWTZQVVBiocPmcXsmYmvGgTHAnZ6Qv1VJptDQykkY4ahThAAK5b2cpLXYL7hZ6tKhC4zWdQ9eKEpAEfU",
  "key41": "3covi6yvZL3pVh7pkdQkWFSb7YdiUgjGQ1WaaP5xzusXt82dTRspqTcPz6DPpdrBJyqSFzh88b2JqDTA9uSfsmzs",
  "key42": "3i6Aqj763Xyu7mbZgdW25yarMQFRfUGVio5yF3V26rwniJuvLAU8EHodhEwVn2CSwjh7o1ZDAkLs6PhaQrTgzPwR",
  "key43": "2gYc5BftyMq66qGc7MVxRpHxhAhaLWeiM2JM4q8Ahh2gcHxy4u3NKrKsU4w3mY2CPGiCm12wfsY2Ne63XUwJAZjv"
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
