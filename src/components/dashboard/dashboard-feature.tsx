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
    "64aPvpq91cBHwvPn5qvjHkqmEBh8tx2yP69dFnjfXjJTvWwCGpaJJK7jbup3wYkdnEp4HcqpWBzSzKvh63SncinC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cH4nrFtfznZLNkkdVUFLnyYB1YU4hneCjf8ATvvqzr6pq13PpwHrVTFcqH77y9AKBW57XfUHy75qifggYuuAayr",
  "key1": "4faq6M8xEcsGY4f6ncorfgAvhoDLewfLjECyyFJLcYuY6FsnFDpL1QBta83Hv6peBfX77U4EG6uRGDNRMAQXEyZi",
  "key2": "3DjnogY71XYfdxjf5SXtmzLLXD5WGmjdZuihYY2aVJmab3ErSs8RkyddmTAevKr1Su48jM2vJcN3DLi3wfxuJWsJ",
  "key3": "2RDSoWPAZVtMxRTZgDDvtCnNnzBY22k6gHUXpqheJuy4FGhmYUA9A5GhY2qAtPCPTip2CrWcMt3Dfo84SncE7zNJ",
  "key4": "5vvzjnRrnTUG1sBQRg5UdiHvqhU19eiuZB4niqhgjeJjTy2HuoxUYHAnJhiHeCnyzw5C65FJKPxBGwqtF9BNPFS5",
  "key5": "45Y4EHgE96oFvoQrNDNgjv4eMDPE1Mq61sNa267m8Eo6X1T4hfSDFyCgoWR4DHWT2bWoEHLtmWVmAGwFhTYbWvT7",
  "key6": "5Jar4ScoKE7imJXT3Z6ciFjAuKHKEKttFBWGt3De4gnq8kFZnCex9XVRBcr16ht8qCMCc291VPj3aj2LD35q4u1V",
  "key7": "5vufkpeoMB6GsqzTyKPV2xW1ZqPS5EQGw3AHnhndonmkTBjH1jduH17rJTDHop9eLFmarUNC2rZVvvLFQadryEpY",
  "key8": "5pjB629QrhVj8oJkDoYQLrui4XzaXUnGvDnEhLJVmL89XrmrJhvQ7qb9LoLnoGyiq7AbxNQauzLxnWF3HD3HDiX6",
  "key9": "4GBpp5gVrVUMHQ5r1sRwnKXu55MLoFY2Um8rEvrNBUztK6pdeFvqmjoR9saC7b5wBNzaMNbAiXXfzvptcyp37UTZ",
  "key10": "3nFTKudSuKDY7q5W6L7vx6hiTHLXhbuvkA942J3h4PAKg9Gb1Z7Ec6wKXPuehxLTyLSuobMt6V49ZJ173GthyFLz",
  "key11": "4PHogKCNLzgoT6AWrtxYN7KBH1NmmvPAM3gmkUsJ47e5bxgopn8vNd5zdK6YvzKAZHBT8d9R9rjdGvVutCpNe6yy",
  "key12": "2MgqNc3K7vg6votYqC6aMMrQsc79HbxwLx73cGVBgJUHtHK9anCUDKNnb53VubFLcqoTLjWu2FfKV9c2FyFdmxtc",
  "key13": "2gUCeJ2EcrVY33Sg7Fc9Z2iYQHuvwLahqLArscujGdHbM8RwNGuB17R1AohKjoikkp3V2Ej9ZVp8GrHFfUsngj6B",
  "key14": "2sUBK8Nh58zyBFXXCsE8acWyF8rasoQPAaEuRuHuRS1H8LMvs7YTsbxnh11MAiM9HXeMaHTNqJ8bFobXwuZp5osD",
  "key15": "56YEK2rpVX8ixXVZyDAiNHKF192YnN3YZmZ41KFZqnihn6KJgNJmcYRisPwA17Kz5Rg8YmFcsorxwDhuv9zuXMLw",
  "key16": "62EVtzVxGF8FSgk3cWnD83NT2j41HJiF2bmVYgnN5mnKZ57UnCvnudrSDjajhVtdda8HVUB8Hg4ADdv5PvsTUhEu",
  "key17": "5TqhLK54EbjvBciwjSsddR6nr5ELZsr1u3roVWcJfK8x4p1b8UCUHYBzgSk1dbBmvvuzXnXCKSycRD4ETH9AP3S1",
  "key18": "8StRkGmkQNuqVMsWZgu35aqwV5Cw5cM61YKLt3e9Vf92oQVvF4dD1D47AvMdokgNwB7dbXWjnCadv4eusvPQ5Kg",
  "key19": "8hkXfYuTsmDSRDUTNbKYjocShphr8wvwg9qR4SdcwbkoaNaG9RaxB7fV8dme3PSdfXDiqFhMZJnWE9FX49DCF1z",
  "key20": "NZMx17S3QCQki5bRHT3xqbKQLhtsFv5x5ZiByPRAtsED2X7bKR9QcgRYAWfaQixTZRXB22YND1H2ontvjmc7qf2",
  "key21": "489N8SifxDHsnhUFpqNfCA8SD25wLoAqQh6oTurmUu47fhvy1HUo4dQZuqj9K2YEwHDvEc4STh9PE7pBuK1qJY25",
  "key22": "54s9fwzEyqG8TZehjdg5er7QdK1sV66vweSH8gchx4VJwAGuRc6YYGD93Y9qLyjvX7caE84CgRZT2bFDk9Jao7qH",
  "key23": "5kp6Rq4K47NWFSnuv4piW4D8NfN6poXEmEirxa9EmFSjHqZqf2sMG3YEVFogmLqV7c3GyNzHM171ZrSr7xhcH5Kf",
  "key24": "1FSC54emkxp62GBBEFrVXaSW6vLu2SgGKAwV1ykTVzpYryZ7yxVih48RH7nQPMMumDJjWTE17caMNu3gRfXzfnQ",
  "key25": "2CMUyMzxt4RgFTsScMgFJ6vgMSNSwG9oWuwkNKPV2MZ9Qm4NmWUQbKrcZewEBbpNRw9SQHRK41o7GK3WLg4r8rvm",
  "key26": "cDLMTorDb9KKGnGvb2pPnHSRdBHidnTpKcukR5PsFur7ZMD7AenndsuBhbby7hag5k2feQiW319tXgMxH3TWdnM",
  "key27": "42qyCRUL6AEwRnhuc3xEcWKmTSbMNEPP8hYu59H3f62RqG6EuXsj77T95DLfAWvPpknm7QaEs3YAFjgTmZhQ48FT",
  "key28": "49hYTeJfXzV3Xd1agiaNVeESYCoha6QxKEi1pqmNLgyBumF6YjrRvHrVUaEfDP4r3zfFNWyhsgix1fCRprtY7AVd",
  "key29": "4xD9pWhVxRh2LLQBsrvSHVpmEPSMEqfgqyFB6nZNafweRFxzcQ2UKmHchu4vgtUQammd3awYoiuDcMGvzZnPaVM4",
  "key30": "2xuLVn1rV7cKcrZx6omRbnkALVm9APTgD43yoVAxf1AGu9pqpLPH7itAebHWdD74gWEiMHNpUA8D3E73RgrqPyY2"
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
