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
    "5ztPYLZtRJArguGFDa435HqwVbeNDCef3ZVZi9J6Kj2vAuAae9m7urEyKwJf3XesUCwE8QUGWms2UKpEw3cQZEkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hksa6kPoNs57envzvLDTWQWXtwGV4tgH3PSobrv37xyUJU256eNfFNERvKAvsfUvy9EwEdHGK3nhbstprK6pk7R",
  "key1": "44gcNLGF83FqksZf5abUjfHCedjT1PsCSv2hQ4bRSt5UZccFcXctHzTLBukuzNe3AnGPXEYk6T5GVv36h5joJDDa",
  "key2": "3cTwJguXPX1YtYGHSMGbfvxhUfG6nJDx6gNwKmM87gED6vjqXNX4g95atkfLRJf6A6qmt1wTvAnM7bigUbpRAAv5",
  "key3": "3Gx5BedWHxKJ9goJbRRSZ8vcuwvGvXnFy1KVvSJMcR7koRaoiuma3XExRREk15N3oGe3HkGzGda3BbYSu6bXVRTb",
  "key4": "3kW6Um4v4mKE3xoMpyjw43gNVFczcbRJbk7huuRToSnH1BYM3vfCRC12YAxfC7Pr6HJBhT1PTuM1YaFzMf5ShQBF",
  "key5": "VURE8kgDhSFdbpyFoXhH5iaU1JJgwQtdNfLJwe57VcY1DnnR9So8c5TSFVGgpzZnM95L9ZdxVoMq2uu4qydqy9K",
  "key6": "3EWEoNL6v848MVgKnNZMiJDcsmWiTgvYMUFLWpuEa5hgc9UZDKupDyhFHpJMZPH3YpRvoEu9CDxmHLTykMcBXaQw",
  "key7": "4az1A7xpXHz58LnmJBcoCdDB7ZcZM8Xm9SQ341kZzQmMgDTfp4Bsan8F9vR6rig5DRNctdnfDCAg47yCDo7v7Mf2",
  "key8": "5DNZZ3BqKxdrMMg8tiumcFStfhVkDcY5gp35UxtHmr6TRL7bWpCusUnnNDbp5HjY4W9qMvtSuHPjSGfQ5vFwhrYX",
  "key9": "5nmg2qcUkRbFHyQK2WaP9Qif9EvRAyS5c5oDcofmoJqtHWt3PmYMsZf5HfqcHbTb4WzezPC9P2LSoCH1uiY1vQtU",
  "key10": "nLvBKPeGdfYdAGyN6mFGwGUEVNecuY2zoBiv8UG9iL4Y3C53fzzVnv8FFYouMrkzKtoJ8XrSrgVTseeM1jPSG4T",
  "key11": "2cZpAnuST9hzfMuqVdT9fLwW16TnJLq35w8gHmSYTcr2b5NUS3DmXMjDhbK8D6jWopPdBDmkFAZKUwg9kENhthuT",
  "key12": "3Mr1ajCgheasZEkqJjapHuHYoqpZvVvqfVwtgNSBVheKUKQUqP3HKiibwVqWdvzjygdifBfhhQbSkL7pCYR5pMEt",
  "key13": "3HrMsptNGP4avAmfM9nQxxCuFYEnkgfFbW4Nq7neuHAqGvU6kNutkqzVTDoYEBmAdFmj159RYyjWsqDXAsNBDcUc",
  "key14": "2Exm2WBZEvadWpY9ZnATrtuWxVfu91jJ2y9vTaMDtzifxTk7imoDZ9o94gnZnheSGGCu6vjKR4rWPkijadguf5rE",
  "key15": "61HkJ4zVoBBUTTL5WQV3Gt4zsCCNSuuQ8curJZuzgA5oSEGMgoGjv8RXpGnzuETbQifwRHtHvbbprc9i8T7SfPFH",
  "key16": "2owY3ygvbqFASneysYuwsPJACuGbippCFJD55RxgU1GLZqNffDcUBen8UB3m89HzMPXrfgw3VdNEbuM5t4o6P2Zp",
  "key17": "5yRDspHLnzcfutFyTJXEusoJX4RptfMoATUgEb71kqPZyJXb4UXFgg8bbwPVEPfkF3YsCc1hUwXCNXw9SjwmYEgo",
  "key18": "r1A9esgtQo14oFbUtvXNhpGqLvNMB1XmXktmGQQnnQk5hn2PzCRFiK5zBohKvej8xFsDfbrLxrunyRaD3F4TL3T",
  "key19": "2NfFkKCemoyUf8oNor5rf4TDFL1YsdjqTPorvfFtQ8iqER4AxJ1PYRCXxcBRGYg1cP8LdiLKDXnYbq13fM75yR6g",
  "key20": "qego2SsE4988MmWjbQXQh6UoaxpjRuHArDgQ6ro2MwAD4yGDosFwdMjCzyzLtmH4UUS4mCraz2mVMNUDHFZXgg2",
  "key21": "53eUFqpW9b1mnassvipicMv6yeowfvnBf855kYwtN4X6BZZu6K3i1jGaTVQ8y1nf1phypaupHuhwiHPYiu82uD2b",
  "key22": "34NJsNWXNaxL3nneVKjFoQZvTaFeMxmXxeNvj1NJ7kDp4w33GXQyJ6AMrW9htASUH11HSHx7DodVSyGYyqpVKVfi",
  "key23": "4GMSPByJyLWXFVGqAgEvS1caMsHb6bkYsQ6oxYBfwjbz3KmSh8KuM8KiGgEGnzAtmqXpQp1jzC7rewWXnLpzRVPJ",
  "key24": "4DekATyCsLr4enHkd4N1gRCJkQ7uqbKvcXQ5V1eJe7fpieh9VvxiAdqVkjiPjH7naHaRY6XeqcYSj5G8U2fK7G6P",
  "key25": "3wHmsGtjXZnsRTFLYvnQvNZuwnWrNoY9xU2GpoLESwosM3ekHr1mVth9KYNEXjhj5fHgkYRnKp3uJ9wZuEwczaAP",
  "key26": "3zB3qdtzisqujNM6QAZQwWch9iAgjSrx1U7EXhaEPLKMbuEzNyhgc2yYyaBRhk2QzvEKtFwU7BPtLCF2XwAkPtL7",
  "key27": "5TKh9WmbDdT2SLYDxiquN6BQ6LCKrWeFYuTeE8grhJvqdvDtdmo7K9i71Rq9zVYG65mPdjG8N3pUsWw919QXcpFj",
  "key28": "3CWuFCNcyuYuxUc4tykzVUwHNQJuvsMJkk8Xy44ZHZDB96bo9GqLH6uc5cVtJJgfCkCKMkcKidwEArt8gjbLwZR3",
  "key29": "3C2bhNqE5vNkrvch37KkrcKNVGetNLcq3cvFTyLCmP2N96adUkqfreNuASybms1Lc4R3xc5mcDCUmZdhcmM3hm4N",
  "key30": "4rthykm4aC5posZxQ73UE7E65FBHukTQ37hFWYfNciHsvs7Wvy8rzRve6sBybrTRtQ5VA6z17Q2XC4bx9g1rCqtE",
  "key31": "5ExNJVbvDZ7PSFmzpE6DrjLZDQS2wQxGiaHGBsMtWMob59j2iJNnsVECkDjCBsCqp2aKvJQ2TYFXo4bZQ6Z6ZfGb",
  "key32": "3fuzaRYosWBvTZKnXkc9xx9TsimBo4uEJE7bmJAHnvSJonSrQRX3RirhGyfiw3cSJJf85WyNpxbn2hidcFQCgNRo",
  "key33": "3zKTPbbrBHhTZr1QTsKbqYcdybpYAS6tFzY7yjUbC6mfsUqpBWQrv7MzbdeZNAsxuR2nfdML489xvL3n65CDgSgr",
  "key34": "Hvh1qZLxb88vL885Kw1pKm9hs7spavGzkgRMZqxQtVsDidoYvbwLSAwJuHyqdiDL5sCR8zgcTXhWhuWpo9p52A5",
  "key35": "61Cu8qUqQBE1vQsSijmzrYFAqkEhePvMsuLmCFt5DRbMu5fciE9SFv34QmQDi2D6fsEWWK9mRGNmSZv1PQP23rdP",
  "key36": "5xkXek1ANWaaCxy3XecnTegAkehiVKSvYte4dhwaCAHAA5aH5V8fnvYJaA2s3xyGPgkCG2R3i3FxpqVTKwPBDrzh",
  "key37": "4c9dBLGGmfQutoXRt6VrWSYo6vfuCe8nAq3LTNBhX39jayZyyG5EpjRTAQBmH387Fiq7Xwz4k8dsLb1E8YBLxv6o",
  "key38": "45WVpWJCade5921eQuTUUoPeNCjFKYStXqM6ARzVixP2KN9uppU5wAMuSinQ32T8MvL1Wsa4DjxCsxMtSwDRPDU6",
  "key39": "5qRkXYznoR5xPERPN82E8C91BbvK8f5Wg34HZrfwxM7wdYKgMmfvMNck2YHCFQF7ELCsVeZsJz3kzKMjcfwKYJ2e",
  "key40": "ttGucbdhSVaC5wGhnA38zXiGsR3AS6hnsq6LksEGvSS3yvkktBc84umRw4Z8D6paGhf3dCp81E2gef6dd1XJ9a4"
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
