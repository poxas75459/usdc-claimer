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
    "4c2MERrqoxsZkSDZ2meLh24w5LY8GvojpZriDwaRBxn85N5mEvjJhZh7kuLGymXcvN3MUAhUUir2mFNcs47SbTcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpNWuJHKWmdzHYBuertkPAijqahgAmZbmXkekq2CKpM8rvsmSf37dZTXmTf7R2WcqcqCk2CaAHwr5dfWxzyo5hh",
  "key1": "39MYedhakhxaDmPNHokxig9TJTrdHrPUEJHJWsCPDYsV4PxLv6c9vkNnb2UnTtGrSXJjfReep3GBDMQsVieeNAeE",
  "key2": "2unoDCDevYKj8PaedYXvmUxgeRhEhgLwF2EXMEiZsaST6VYQQC3GRnNhFEzPqSN9GCgULKriFQ7nXe4tczS5FgLs",
  "key3": "4DWw921uooLsMQPWAozx39EgJWNJ9hSvQtYP6dkmBk9DgWQ2sk6w2QDpRx7Xi1AGKgrBeVusWfZaBbgkTvHn6HHk",
  "key4": "3ftqtUPzinZY5JoH55ZgfNr5f5trJsj1swLARXemUwg6GeVundzGCe8PXbpfqBWzmX66DoJ1YYQxR2edUPj4KqRa",
  "key5": "MM5kJ7Q1KGSXCEobDeX799TvBZx3NCm5jzJTwampwirJD6Z1uHzEhu5iB979PchyJqjX9UHDtL92gVafFfVpXad",
  "key6": "nNE1zi8cnhse4SvRcNvexaDPfVoaRcy4Sbedd5Z1yPyrjkenwGEB996n56oMhjKaSqR17uE5pWuEhqdWRgfjuuG",
  "key7": "5oNTrzSwFDyixbB5aRpkQdoP2RjbNurwCrzpyFqfoyYLaFDCroRCsZJdgGe2L8eWzNnw88n1hNJgseAqEHRE7vyz",
  "key8": "2eY9Y5KCeQ4feHsu5SRHvZk5PTgsJi7W4RHADP7FF18f1VvSx5JMSY4PHaD5i1z3Czgt8EFKiEGhWqP8GeJGctTe",
  "key9": "4GfjXUdEcRpLmyX13YKXpk1LF3JMcDFdchgt4EYQfboigXvMp4YpRRorEQuTBUGWirtqydRH7Zj3D9yEeDcBKCgq",
  "key10": "2B6FCkuDwDqiTHd9wptS77jVeSuCBkbEYjvKmczCh6FyrhDDfzPzgCaL2vj7XDEuvksg6pUFKzGyAsCtnvyRMZeE",
  "key11": "3qhLnNe4QVpkVQx4DdMsRSBYDKMPYnYsqbDVxgvtWec272JjdzFeJwGngp3wcGoThRuHngicEHUe7ReHzhrp6iwi",
  "key12": "5DFhqKURpbsFHQqThqnHktMYpJbVeBS9YW8aaxUsgqi2tXcLSJHPhK2SzFQNyhAVDQSDEbdpA1ev1PBPjbEDGaiF",
  "key13": "kCHSrg4LUE8Bf7bBUY1WyLFRgivMpSn4NPvQiZW1znuvfb8tbySHttdxWTt2NeKU1Ww9uXTfr99khxZssTKiWpQ",
  "key14": "5tfbGzvFud2Fwt8hSw5rzJaevzbxNU5Mt39JeDYJtWXkTodmTotVnGqhonVx8svak1HzDpKEyVYkADxuoVXMisft",
  "key15": "3QYGfdnuAfhYPB4UftvvHhvE16oYhn1EayRdvx7Hj4eUZCBdZaV31qWkSexff8koRpesb7XvHsutNsGcBcEFNoAF",
  "key16": "nZnUxX9KEEcetHCwYwwdwoKn1cHg9w8AuuWzUvs4w5mzimLJ5tM9HiNrz9Go9yXuS2X8sSBUHrUKorBXB4pjt74",
  "key17": "4MTjEgAUyksb2jkxK2u64tqX2jjFbAa1jouKu8Ai1HDUsvYk6h8nW12FX6DNNmVd5WDnpNWJmyjUVUfp58cnybKT",
  "key18": "5L7pregcn92RxSfgEPBZPcjo14pWHVvBLcTT6PH7Z9FZyo4F79txZGoXFSy8fH2EcA4BRaUSZRs3jHKEbngmpxja",
  "key19": "5DBBwkkoErrHFacNJ2MAsPKxragc7cGqEcLeewksrRPDCDDKtbUGXKsTxk8ZYN7GZZ3pJQDusvfvAocMJfEREZA1",
  "key20": "3A1UkYkd6s3osmVpYko1wGpFST6g9Z2g9B2zR7n1miSKbm5bGfzWLUtPzBsk1ZNzQm3r6juYmtEUJ7tmwLRtLDRk",
  "key21": "2tFXgHvAN3iPCXzXE5BnPZ5kvpvDgRnjXhr7LdtM72bwaFSNoYMr67vtk52BhgMps6pZNDWgV6bY8YG8r88wokyM",
  "key22": "5GXwcGQUEM3CZgXj6Cee78sHFwZqQFdrLNpCjHdN5YvMHSeAJkx1bM9MgraYdKzdUXn6Q8HZJE2gu11DDguQeP8s",
  "key23": "25B2EroqnhpNmjz9hqFuuqp5okBfz2apgpNrhwezMk1eETRchrdfsCkBW9ADUjGxtWFhGwahGvGJJgzTHBDFpFJU",
  "key24": "3AJ2iFBSbZzY59jB9MrVbahXNwKnEoVei616G73ni6DqexDL8NQgPU9CT6Qn5yEgKSAetyMFmj4kYK3mjqwvAgsS",
  "key25": "zzQSaRKthCqbut8BgX98dSkqcp3upWhtn9ewhHEp5GmfxSjqm9vRPwF2V2QqRtrEXMpp88ArgErDpeMUC6U8pT8",
  "key26": "2Kcd4expUKAx3fnx9B5a6EzUTAzi7Zux69vzbqNLMHLiW79zWCrhq6jMpf3cMyaYWvsFZrNVq7PbCEG9sXKiR6jn",
  "key27": "3QibqeWzY5tGmE7nKVeX83LiG2dbU1SxDQWKXL8VNJenyXRqzxqEKqByJ7vA9zcKhC6S7K1HS8eTLAJ2ifAeEr5i",
  "key28": "4mkvtR46GEcDTTtSPxujxCht53U5VowTDQSomUKrZHuMxjE6ZGgFTPfkvRav9SE7xMQw5PfZawAESnFqva1EHJMG",
  "key29": "4NfQN3Bvi5kjL4mUQmiL3UJotzpqSgCG3gfAszC6aj6N3kbcALuLkuHmgBkZgkAhtGZ1V1piBhSSwVwH2Y5sMToF",
  "key30": "56eSuVh8UUqvuxfWeDizY6GQpemZEmzmcZLBWHvLUNeccnb67MNnWEQF8AQMtGqeijWZaAxMbjgAFTefTvCQrrsY",
  "key31": "2iQiQ6z3pTisU3Ad9WYcvdTh4nxxYcMxCznkrdswcAjb8gDev6FEDKVDs8o4PHH1PBNJPG6U1VtkJDuM9GXpAaoe",
  "key32": "5kLVk3zbbXnqVF3t7E5pkm9m7j4BrwRzxp8MdkmooDtmxkTKaWep7ZsTyHaeeUUi8kZzBFQBBehsvnBNkJoLw7eW",
  "key33": "45k7QUcgwc6STngHw2udTrUsZgLLwBihWDu4ghwtR6hEZPtLQjr1J7gxX9z4hutAPTeYuKGZVTbWZ8isfTP8EmPE",
  "key34": "2grNibMQ4x6us6oxUtPGrE1XoJ4b5T8ji57NNMCBqdcbAzDxFPZP6MMRUi9eaJ8iCBoENFqwhy6QYnsBB9ef55pb",
  "key35": "QKFAWyU3GwnzCyAhyK7u4Wv47jw16VK9wmCFtUkgSKg5tk5phJiWgFghV5x2evbiv7QsVvjF1DfeZgNw3cg9Gk5",
  "key36": "2SVLpgjDWi11hEh51P37UaiyJn81ZKNwsFvAWKYmUVzTBUQY8iruJvvTTCdj8nA5J7D1pZCQ2xJbihqM4QGfpRft",
  "key37": "2cWfa6jy8CSbfnaJCtxyhLiSNVXg8BvjQ8FX3CAZCwfscBpP7KGfDdqKRepM7co8WyDJeUZnDkFvhsPP4NLnbPgg",
  "key38": "2JPVgFZS5qtGQnevDSqS57W1e7MgTN9pHqRcRUBuaezmZBCrQsSu6iszLhNJKw4rKPEsSLKpmRdeqf3E2CHt3sFh",
  "key39": "rrTtxzwu3eCVvBDRKhZaA8KRn7yUR4ZCKJsMV1QBHtx4CZGyzTLP6iGcRJcijkz88ZoZMEVDZx7e8hEK2jq8Y2h",
  "key40": "3S5HHgtPGotyTcvr1uUcnMnXhh6wy2SUa9ZXWiY9GiJyQ3137dxujk541iksHFAsqprF9G2kRKNS6NvAqqNiXsXt",
  "key41": "2CjoaVFdBvBZxu56Z3wvi9g15gdKLYpqppGCnyerabTGVA7Kybm23xN5Uu4jqBZn5fcrL696T2ub81xzoB1n6YoK",
  "key42": "5tH6ZgeL1k3CyFqkpRfAxWkxGykhrpR3aJxv1W2EziPhZQXDmrWbZUpZXWNj1W6R6wgRWF9JzNc2GxqV5SQNoZk6",
  "key43": "3Y8bZcrwdqAhmTGLLFnfP9RLRoQr9P2WcKZrJ4oqfK8W3rjAhySQdvgaj8tt4u3Y2t5Ws1E5mNs8UWE24HcERnWY",
  "key44": "5iESUAfwLntB13FcAQjtxKSb9AsdrE2iod9H9m6BXS6ph8vrADtpxvwb4iNJG2ie7ZqkULrf4w6FMgxdoAkkFtwz",
  "key45": "3RmyiB1csgb1eybbHj4UQE73w2Dk9dAc26omxSnBUb7E4hPjEzVDFqYMS4fjEovEfDCFyKJMRb7fhGEEfg9aEq5V",
  "key46": "3WsD4aXhjbKtoYPWLhZ2orGfS2iuH4MD41QfQjE9BSVpP2pMi4ZHbMPh5taMY6P19bNwTbiAvFzL3TPuzD8DKfpG",
  "key47": "34Gf6FXzXLzGUmpCpQtAY1UWdM2YGi7HLstCK2jM12wR3HDLEkZZ9adHmZyg66Njyp3WzmEShthzxiRb1HtRffkD",
  "key48": "R5inTeuQDwTq2i9z4ia6TUiv3wFAtLTmojPusoix13qWFGnZgujZbUzLE2tT1hixfJsm2MvEX8Yz1o2BCdZZDj4"
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
