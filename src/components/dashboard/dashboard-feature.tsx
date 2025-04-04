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
    "kZYPpp8wQTHuCWW4bAnXXAGB3BMS6mmmLre64uZv2m6K1Qp6w2AtYTLEHANe3TPorwXh3zUw5puN5KG78VENm7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Tinbekr6F9yP4a8NAgfeBC1zNEbpnKbfS8VMGqLtdUdFM8pdYS7F49bRaP13ERovxQnjgpRkUCEwuUrMHxyTXc",
  "key1": "4Y3tKPXBNSWr1kBLcV3jou2nrpuLzXt74A4h9vbtHmNRReBLatTpvFx3FyKgtLSgTpW9KXC8p8Z87HevsQSsi6Xx",
  "key2": "5QbbEQeRP4RnrPAwCNoZZGxeZZxLSnPjdpNrn2QRaQ1Y2XVPMR1BY1UHZ2cnPqwSSBPepUVz3xSDAE8GcFyLvh5i",
  "key3": "3gzWxFZaUhUfhcXtmY5WwnPUMRyyw3UGh7CSkD99mTezEvsBdRD6pktskaKmKgSfa5VbM1KfmxhP5M4HqhZbKudJ",
  "key4": "ywFVS8N1hye2vYJCFzKCZhTzSWbyYjE1VxWARAPvrTFvA2KSB2mMHr5nFokkZDnpnjtZbR7mtcPSFPENPiNuo89",
  "key5": "MDiEb6PbeMavV22GYLbzD71jKe9Af97kXsyrRQnSyoZ712Ln6eLdizNUnjfgUs9rUn5QkKAhgHMKGDyno8EAnHU",
  "key6": "Yo5e2C13yCk91vhVGxWKMq8Xqq7Qajpu9k8uA4Cqmbt5vnNkSCG19VHvLJTgV9UUXidnnW1AuSe4VjdHxrdJRhY",
  "key7": "61nnrLtVz5jHdZ6FnEnVMZt756KYMZTeGh5jMGtbSexbg8ZMg8GBpQmNhhWaTJL3Na3AfgusRmGsrnM3uL1ERtAY",
  "key8": "5PPTFkqSp4fHEzB9JJQfxyijCy5LrvTEJpxAkr16prm3XEHkmJGtM8c76TJtfnbn9Qy4r1MAChWVYSxZP3XekkZ6",
  "key9": "5iAsrajSNst15DHrGtjpLjQtPEgK1xH4XGjngQqiXn7oNxqUVWvjsF8NR5sKfhqPDLuWMeayvdhDTwvYH2osCXiX",
  "key10": "2CsaGT6Mq6VfGKL3EnJVNf6UDuZXzn44pi4bocE2RTvjcTHTWHUzEwkBUzLsDkzspmjRr8qQJYtXHvtgLTUPx6jN",
  "key11": "3s4Co1z2pHaiDfLrhkpzn3t7QzUfxuFoTxshUwAL7TqEAa4NFdn2XSaWRggc7Xd2FYGnHgxThFD5zJboUAmbpn8J",
  "key12": "2KqwdH2h1aBgaYtHMgzSaKXT5utmaV2JMF1uCma4zvEF48Gfu4DzJ5kN4VnJPtaSEqnzu8NWxVyPQjxhQ4j8mqAH",
  "key13": "MAgPP6v3s4CBiDX9rPv4FX8CNYAyJ3uJ8cbEqB8mPsXnsTit1zsaRHpR1bV2qUH4upm3Qy4Pc5VBvEKiZce9kF9",
  "key14": "4y3GNCh2J5QmKLmKZupKV3kLca6TQxd79JnvDccCJjKuGaLiGkyzsS18K8vX2d2m5k4zyF54L3j1boPkkeowaaHD",
  "key15": "49sKC32zkdW9FbSsaZ6RWLGSTQxUPcumQba4ybAcukRH4fts9mNK4HtRWSbWxjg9jkfzpKadCRLCoqjq6ogBpdC4",
  "key16": "3VZ2YNNoB53PWhds4x3SHwjdesyMAsQL7jHhkfGN3j9EhgtSDWqfEj93JRNroURwntw7fUcbbVtfBv3mdjQoeJkD",
  "key17": "2eRDPqPwKtwpMGGAq2BPSMj28Fxesm3d2RPioUBiqXUETZMdKFTSxMqbi4nGoExX9rTVPTjd94favqzAifuqFpp",
  "key18": "Kja9M14DJLJGZ6WAgxuUJAKNhjTrN5VdL9NKmZtWetzW8hxcv3iZpCdJdqs5yBUyqc57UH3MPWf8WXBFG3Mgr8w",
  "key19": "42syn5c4mF4yyBxZC3JEsAb4ioBxNQB4aeDS2dBymSpUrngSS55Cg62N8ybeuxXhHoKnua6UMFEpFoU8dV5rTyy2",
  "key20": "2tFcfTDaFYns1jgtpbcr7hxo2HfX5xYFZWKEXu3GxAzWEtdV9WhbMkMWceD72Xc1pqCHwLwegHyeG833CwVzt3hg",
  "key21": "9C4koAWNEuGPKRmgYGGhbuoZRHehb6fn55WJn241gpMH7UGBBQtqrNLa2AD2WafacisCssUPCvQBU6yctLbpA6c",
  "key22": "4eZWAwaaREAvb4AF1Kp5kkkJ8evNWYiSAVtjv1GY2reo5UhedZtPjGArHXBaTwK2sT9VDzTKf2aZpAEDfBkM7CUk",
  "key23": "4Mv3aKTgCH4v2w2KPtztvPFRevosrd1fPaRdx79LDK4S92vvt4jNCLW3uvG4rYCAaUHgxcBMCFpxcWyLHKmSPTs3",
  "key24": "3F6y6ytkxjC7rvzMi98TvSqVPFYqxHQwKeaDPdMVzjN4nHQPc8s8d9vG4YXpA7ejUXhVCRpf3s6tzbGuQSj6aoxN",
  "key25": "43XvaenCaxeF4hQRLcVUyngStdhoNR5JZwiVESvTGKJcivrcD6UGWB8Wn5H7pgii8Xu97oYQh3ZN6Qb8DWupjK5W",
  "key26": "26Jeei21NGoir8KX2jdyRN6HaJdYEuSgQd7SC1w1vy4TCgNGtYQChhrw6sJo6snyAvhTrpb2ZvgDNWhwt7gPjr7E",
  "key27": "2uav1PqXLRZGfCniQE9X9wRLTjMCeHcyUiK26dDyifyxxcW1Fo86Cy1d1BKh6mmLALHfdeq2DD7k6uNvAABt8k4J",
  "key28": "3qKS5zvJ9hV26kYNUcv1rFmv1w6hmYWVdGmjYczcCmiHaUpAkJZLQmu7HSRxdWVJkNfiJYFwzcM2saUKpLzKvJCo",
  "key29": "DQUNgMB9s71FuMbqBj6cbNwo3xEdSzdF7xeWsktEpHtWByJcrbGM6oyhnyPnZWYx3HHXfHd9KKit1Px1LRm5Yj2",
  "key30": "5bg8CC3MRWgV7SNXiU7auai6ox4x8Yb1nCG8eNYXyTG7bSQ1aN9zLaVv74WBSk6Ng3RMJGNevQYzYG5tvgQpmy6Y",
  "key31": "Gpp7qZix23vC4om9seemWcjYNMDpBrSS5Bi9dJygjoWN4C6qSowtfZu886gt7teuuw5bEFTXPYxAK7uZhKvnGsV",
  "key32": "w9ecdyM63QWs3131oVXLkEMREbfgvsjZqM8E2CyLchKUtwByeEcaM9kZVCFpTjNKSuRq1LtusUo6K3tfD38DnrK",
  "key33": "4o6wbjgvDKSqUk42bkTfQquLSFq3RnHbxr8FPTRonKqxzaMCgDhcdAEnt6Yfw5sXBQokEapuykwVepueX79nBMF5"
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
