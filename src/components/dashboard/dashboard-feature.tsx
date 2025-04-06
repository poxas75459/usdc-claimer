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
    "5b1TBYmPLTjtHGMMiWbzxoPhuALU3sg8vphanw83ZY4fAbHh6uQBDvKqC2Ciueo5nAu5418L5qkCiWuqbf17Udyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RkegNMz2u6cS6VKNq4z95X5ZCBMmoyug1rgPevnQTi1KfyNrZDgXrQoeSbcKWpetMKEGExkFdh51X3U6yt4YuDk",
  "key1": "3nZ3tjzqSrASNN4MLjgtmhhhB1qBBG74QJZq5Gd2qQBhcwqGa32omY3yfUU2Kn3wQzzLpfHKZW5u7c15Wkn6NF24",
  "key2": "5VXYrPjSxyCDLkBXVhziK9KE39nQDZ4Bgh9HqxetuqK4U811cs1NR6QhYnNgFtMTJq797PD1kh9sDnAtb7CAzbG5",
  "key3": "36XhRXNjLyknuGECsaVgYhBA6it6aQ5rTQU5RE4R29WJRbhw1JKeeJiCCercX6jz47XZxgQTSRyPxj1sQGwtgaHf",
  "key4": "42DtGoxkmo6Fu8XYMoC35pTu2eKakGk9X2e1qdh5wdRry5FDwc1HiHf9RGguoMJuk5xbxgxedFjmLsfjgVVY2MwB",
  "key5": "4noi1rE8M7cDf9VLxZX4PoTMon84Mv1SGDZvzjVdezkNbYZnTfa4KVMPsh6V9YD56fgZsDcAnFZaZAJZQqPf3jGi",
  "key6": "NvfsUTT56ZqByymHrT3FpYJJEdxmToK2MEZzz55LRi7qVJHLrpgRg7eUmM1u2qgNw5EvLS7iqsp2v9uzVfF9BXf",
  "key7": "3GcAxTRKZhYp4iCGFkRs3dJekji2aRYfG6Ar9ZSUawaBvtXGoVhYSZu8cpb1KTcJ6y4tr92jw57vfAS2XEaABT93",
  "key8": "2KneFXWxnj8P4fVGMfQViaFqV3APtWkooHEsW7XLjPtxycNamKyscqgXKiJcEqr5ndgLJFuDzX3cn4j2Bzdopkh4",
  "key9": "5pp4q7UiveChFYVaGpd7fDA3duMSkX7QkLvv65edebfXeteyeYuqUEi1UgMMryKxxVPnMCuEHU9asfe59ApbbKiM",
  "key10": "wTPjWGqTyf7yvPcdQ2yaqhqtstzLd6rNmxRGK3snAZVCHqVVYMBxaLxbr8NhYFeg9SqpTXBCnwDXFrQT85KhNe4",
  "key11": "5qUJebEVKbSxgh1jfAPBLg5fb7rBnjPd9EPwBFgpektqg2D8FR4iWcKD6NnJ8BvVvNm4M1TCMFZK9JT28m4D2d4P",
  "key12": "4T6bF7YmRAnJ7CYKPpPtjinEB2KAP778Xzgi64HyQB41y89X8LYuCTMmr1KCzXXboNM43JSwUVzx2UR2jHzPGyGV",
  "key13": "62p16XPetGorWxzZvVmeGuR3RCrMuGtHkBqhu9UvxeSQXDgg6F1T9Pc6mv2tMZMzFbMj7M5Q9ftpRcMwVLUkU4JY",
  "key14": "6DaHfx8eLfJm65HEtNXGuucgDV2EK2CbraSV7GF3hYmpXmG26HxTwZMuKx5j7xi45oRDJNbjFqCdb8HpbB4Q8n6",
  "key15": "4tHgk2chMNw66YcQBRVM744JSequungVNUFfBqbcwYec7yqqNRbXjwatar6UAfxbbxkdtMMgrrTs74jGKMHzm6Ht",
  "key16": "4Mt946DafBtyZSpm4kNLUHR1XDAVA5nfXB3ymtRfEmjArR3EASJs8X9iT2EH5Jp4iecJmEaKSTuXVQ1G1n6ASNFz",
  "key17": "4xFcBTrngnyRdoDRtkUfkCvd7BMbS7r4ADpPg6dXFiqVcELo8uZF7RRJqZn7PHXL65cGAx264MRi42m6gZXHP9CT",
  "key18": "3V7dkZpQytLmvPv79egPQHNHLpewuUG5p18V9jmKTDpSNAcufbxmu4GDX7LuRMRTLW3F6N5TdR6su1seNXEkqYkE",
  "key19": "548MHHaxUi62t4hYASMTLh46bsKiZAMGmGQq91cbjurkNDwie6YsSdjT7sodEGRUtkDGEm68isWN5dKuv7YaewXf",
  "key20": "39VqLLmuhSH1KC976SCUfqZ1Joq9bPN9e4MDQSwvWps7FUBt4PkvzYq5yMik8WDE8HMFLQb9zyeHdacbxy7xTG4n",
  "key21": "dJfDb2iapQ54Qe6cvSAE6GhTqPxxNcqxK4cFFiVd3Tja6qm1jRCBSE9aehVfYE9FuxKGZbpx64cGFZZuVxjUCdK",
  "key22": "3ThL4p4ynyXGo2RnpNsJcF7Xmuprwkuixhe7Ns8dhxyvcD1sypWWG4DXSj9QWxCtKLFaGWjR9jkWrH8YsDj5G835",
  "key23": "2ncwtN6tK2GYn7WazxbWDiT5gXsE6fLoQYspx7oGkQPSkTojWKJrjeQp65kf3u5gtuPgteyBSvN3ngq26DQUVMXE",
  "key24": "5XS1Xp72gGpncon7tfBCo3nFSrbeREE8fZNCUpWVBBHdhLxh2QSHwk5wdvuvYpxTX92a4XUTVJaFKg9Fk8F6rezN",
  "key25": "4pZEHfTQmJCXqXHrRwqs3vXDnYZ4R414t5n5RDSawhYiywHiqwtnhubHTcRBQV2F6RT7eEMkHBZJyZvUGji3188s",
  "key26": "3qgWE2wLKEEGnYB4ZmWMLYVPeXb4BAGdSrQ6b8PxvCnqwjuNirjXr6V5SRn5jJNUM6TWBdSehb9rZJitk5tZtQnx",
  "key27": "XAi8ZnXkdz1Xa2zFpHczasAV6Qgc8E1j9jbE9Vz9aQPXpAAimYGAr6WKnK1yDEo1mXWPfN6HwjSC61nvU6Ewnyr",
  "key28": "38LbWRZRCoVfNF1ZW463M7tTu4bg7YretS3P5x4uX8gTC8NqjLkEm2kMnQ5rTKm92xtCFPdoFqU85qk3EGo63p15",
  "key29": "5BmwKcyUQz7sSqhrTjHwCD3GxF6gSyzAEHzAWTgKLzVQJFRJYUFRxA2s5ETPQP9rqHJicoTwupGreFg8o52BJKm8",
  "key30": "2HGZWFBM1cx2TeiCw1AueTPufoqKhvvhE2k1WDAF3WB1PQKjy1GbWiqSL2VH2DMSiKCF7B2Wgdbx4QzQDCEM9YQ",
  "key31": "2mxd7YNiEpkkC3JFyapMyBoAHveihFhtrRHPMSMLRgcHa8s7QqsrHWH37YKpbcdAX77mh5etaqaHCJhJorrXoEca",
  "key32": "5C12FwLrjo7D1XxC9hmymnAsyftrnmraFJFeiTmshU9FSN3QbUS7spFjRWHtsGuBjbZuxrYWggsDuKWpPioSuV3W",
  "key33": "5UHfeSFSBh9b3WzH4nuDSaMijD4u8SQLf17QMuNSqrtZocWmDtM7JecEHZnzc4VjmsgPtmCpJ2NLd5UrHL9ZvN1i",
  "key34": "54ekaPu2aSfAkzCBTfWH4X6yHLY6FnGQE25g7HjnKffDW15h9HaeZieaeTcEBgnohGhYsVeUfuqbKTDvKEivpcNo",
  "key35": "5V9dxAFZfyvK3gzbpEmuCycYBK1Zk37Bbzcj6WNWFHih7htZZLvtrJEa4XWEfgk6SeXrbWm59UVyum3YkJPGNT3r",
  "key36": "2QyxRnd3GX2HgAsGKVQx6kBVpM1TJoTLdzj4ngoB2Srv2hUvceinSCjaaoaQ4Dx5ibQiyecGhapNQxRwAfGLty5m",
  "key37": "3EcNNatG6R3fbVVdtWPtkaaLNKSy9Zx6Ar64eavwcfmcN3DWG9JshkkckSGLHGDRfgLXT5J4VaJHGUHo5FCYGevR",
  "key38": "5Y1ZXpsd3vxWVdT3xM3Rk9VpsaZ6Ypbb1ky1JVMaMgYvULgD72K9FxZELNCU12hH5Qxtz9oucDPcMdLRjQJj52WF",
  "key39": "5c1GVGuRYgF9NvAX6fCVacJVjuCvwdErAfGguY89C7T94HZPMxwQEaERQLqJnE9hZCoAGJoHwRrUaTyhHi9GPj44",
  "key40": "3Ziu7hyk64hcFo1CW9oEocjw8Kw3X1Hy9YcuJ97qKkTfRYbM7NYejivVGpRy22owEMnsPKidfFWyw9PK8QpqrWjt",
  "key41": "3P9yNXE4rmHevfmi3D5aJyFukNhw513vUSg3C23oqM7jAxDjXP5kUFc9o7oxtEwAC9Y3ys7qc81hyw2jZnDFNPsu",
  "key42": "5xUYFm9WJXveqfcR8Rijbr9ATQqPuqf8fm4YV3AbkG1wNb8JzgowuuA34XogMHHTpjeUwBvqLLjR2XjyYLxdPNB9",
  "key43": "3YgAqxMe4Ys9ERvEXDjZwbWr4W7MDmn9pw75mvDBamA6oRNbDLDjaznXN5aogn11N3s4feTXLSrkn7rrG4r2QUUS",
  "key44": "3vksD8GgwTzEYPJHLQshU2gWtLGiDs3FWnepjbsZHM3ZCnET23KYQE63ydqLcXcZwMk7ATvTtGZggZnggQddTrLt",
  "key45": "drJHzAueS9jCzj4c3FS2iJQjrSpXXVunTtBTmPtaPhv5aYhVBRXMb3GpdQ2MPyzhZ2XLwDVwZVVcWYFqgH5mRwX"
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
