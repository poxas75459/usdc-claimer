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
    "5Gzz4vtKUBdSMa4TPHBHw6RbwrTgtFzggTo2JgLwzPG1gRavXcQqvenpacTF676Bn4KvYNq1cEb2f2hcpc8bp2nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRt9Tg2UzrLidAkeDTgaX3cHy17RqYK1mFznw78EGJdmN39Z8yvSJrQc9GM7ypG9Y1dZkmwXZrHH1QvzNbpuGm1",
  "key1": "3kmPj8BRLy9CtMheaHo8LyoM4xTzNv31yKrpjQ8zbLSpgqjs5TmCUFpoQ5tfYcp2FmVRDLifM1Ntd3anH9DisZMy",
  "key2": "4QehgmA5MggRqqeh5NBBvL4hy6u3w5kPAS1rxy7CoHcdi3UAZoPKjqH2g41kVP6vZseEMtQE8sQc2WjKAVveqCux",
  "key3": "5K3rBftj9AsvvTsvK13RZoVzFu5V3RDVrqHJPG12HGLG8wXPdsNjUW1UiXbi4n2wysmgHojpQ7vcGREpse7AHbn5",
  "key4": "5sFcHJ4vSCqxciQpDxv5fXtZyEjTpcWpBoyqNpAFRtyU5hXXnHitqXLwG9zWkMbYSbvMBSqUivoSHxFxro4KLXtX",
  "key5": "AAYKHk6W3LL2UfKrsFyoJFKqrs9NpeA4wG6dd48UNd8gJLtFJzkvXhJkMkszMTQm5FKB7LbxLjjxvFTvNbNM2Fs",
  "key6": "4JerXHCBnRC9PBhSXvdT4jGdSDtouN5N33q65J1SoobGeR9UpMcyMB4SoAkcfYEKp4XKmamP6Uoo1Vxvi3KEExWn",
  "key7": "4pp6ypZXEAN9qyvuG6fA9yw6RgQ48A2saKkbYKKH3dvNKMSrSVxr8gTtGjVpXdUqzkWXHQ44jhW5QVzK84DF3Qos",
  "key8": "WDE692EUzdoH1SqhtaETc4gNQ2uTNYBS9PYPyndiZHXKAph5sARF8gqAb8coPRDQ6GXjdBwat1GXnfmHSnLCVzi",
  "key9": "5ZiK8xS46ohim22f8tqL1RyrsAMvUCGfQXeB4LSCEdWU69tLVtE2eWts9mQHNmGuLEeELnEkoqjko2cYD6nZLQaN",
  "key10": "4v8KcgkUGPSBmYivff9JzvvmJi2mecfjCJsxyQUeADNVJ55bRELgE7vZeLYhZc9yJtvF56DqAyjD9VDJV4tz3v3y",
  "key11": "4x8KtpkDAx68DYiXqeUAmg4C1SxEhMZepxhLGYWj6h2pkbmPTfjAA81a6QsG9uiqcHT9mM5cGAcvTqXYWjqr4uUa",
  "key12": "2jjGDQHqpysRv7TqdpzhPo28kxr6kr5kM1CmmACfu3KMNmF7WmuSwbtmYsLVo7u9xTJBaPmP7hdpyE5uxL1rFPgk",
  "key13": "5B5er1A46Cej3VDWfY3WpbxJjL3DQByYTKttgvuEF92AZiaKJz8CPGDMxjyiNy6Lr2nBd4XPx4jDLVvpsRuqAHfB",
  "key14": "3RGj561xnQMdprBPaaNi4H3BpvgY5QutGa6xnf5qTiUJNbbJtGRDmBmZqdMHGBZd8UV5WjQSvoLantjRLBNGf8KP",
  "key15": "2CbYCKFTUWgg3hmMfPGB7xTVTYF13YqBSfyKzg5sfjTbbi6L23LMBTvrB3XeQd7WjUmGYu8fz3eTBRP1vSRTS9op",
  "key16": "4zYk6Jxc8kAhNSQ4nabKddTnczdvNyabbSPSc6QK7K6MJPGcH3g54A2Eta4sErhK59rMi7anMMwaaHwTVR1MJ9zs",
  "key17": "2r6F13yaZnzja8dGGaYX52eMBHN5BnunMB5UQbDTGvQC3a6zteuVKyc7Yob8CGVh9fTJigtoRLiwZjEo1drhqspe",
  "key18": "2YGiJvS6oFasEjCpa6MUCLpGNKaYsL6gfut2mcmxAYsXXki7pxy4vpN2Hq5A7ozTbwj3n3PZiDDFa3xnJmPiu3kG",
  "key19": "3FFXMWs64mcNiQ7efPGGSdQayQ5BnLynzumaUAjeVtzYej4fudaPD2SbHXUqgFM91y3tgwdYQyCJh48GFDmT2373",
  "key20": "QXs2so9F55uR3EZZNo22wgtEhUZesQqZhzGnkznGrvyHyr3Qz3EtRSHh8iJwZgRyoKgZCDpRnBeDBrHDEBEDTKp",
  "key21": "591oQb5Ngivz3qkuBjkh9UyzaVgpSban1fyrVPvJBtaAwVg5ug43kmmNeTMr6rYdnwpZVPmiJxavPZRAwA95FDdX",
  "key22": "5uMBU79mMabPVBc7k5B5N5zFKHnCHibYZMmapQpxT1gYQt4Jfcb9j1jzjzp6YHPV7a4Sv99nhLvxmutNCACBg8Mi",
  "key23": "3iUHfGR3zF1C4UQAauWVLYr8uTxrtjkNGuPbfsBpXVNJg3Lqsx6ziu7MPGG6y7ceQwFtrc7pVTA1PDTUZyYTN2Wy",
  "key24": "5JmryZHsVBjftRjqJ9p7trvriLC5nrZ8DDNjRa6xAWLodQN9oaBnjqV8VRioayrVDnxwesK4KeihExVhsbwR5gds",
  "key25": "4XzG3RWMXXWzA4KzSFtwGMxg2vhXQknGZitiWz48RWdpbFiQXHQRCNTMvZP3kR8WMfGvxqTrZUChCEmv77f4yaPe",
  "key26": "pzhQAc9XsmiQRMGFLcHM7NccNi2tEZCfVcAKZsMA8APaXcXe7CPi9KEichCj9pM52G9psT1YsfzvS3vrwGuDZ4g",
  "key27": "3ZKa4TpF172rP3Cq485b4HC49Zu23ehow8FYP1p9nGSH5KL53HDQYxpsdyex8SHyRJbEYykuJCmAN7z9YkDEuXBR",
  "key28": "2dgfGmnkj8CefVmowLwn9ZSH3cUjFTbK14NdPxGS8WnMoWLmrhZ5K7KFeLqiCccJixVYkKL4Kp4HfxUaECs3k1Ye",
  "key29": "4s1K6LjF3LWzGW3K3iSp3PeXDB5NtKJK3LV48HJTEbJ4MGTPFikreg24yJXd3DMf8R3HxAueRVLygxBVJZNmdBCX",
  "key30": "RxzUtwpGAfQLyeknno4VUWLT12EtQYHMZx3VVgc4btKQoihQeTBjeyGmjRRebna3roZ4ckKXgnWgtnQoBfLAKRE",
  "key31": "26TdNLTdKBuCMLywb1aYAm8JpHHp2pz27U46xu7xdyFr3nMgJhhsaTuxQRcNJUwHAUDtdhGzRQB3BALBJFCYZy9V",
  "key32": "EGX57pYj3qzXip2j3Kg8pW3VxdEHtQJ1xXcWxXgQFiQ5ok3X2VWwYVRDSkZbCCoqHDFd3BjaoJagB9TyogREkia",
  "key33": "4R7C5wM39eQ32epxmT4D7LcyrND31QjgSSCQ9MpG68XsrqUHQYfysk6C2YVcLQgy934qt1fkapXgTSoxgd31N2NJ",
  "key34": "4hSUxRwE8RNefGCN3TAdmyR9AmN4wMYXd6RYVf2U2pPUjEAec93tBmfrsU6JQLGXxfmhF1uymmDv41Pg9LKvCjcy",
  "key35": "6FddK8fdD8bevrQCQ4irQAwm5z3MR4XrdaqtBYYYxw7oEoQYFSKruvgaqBSUbCVhyhJkvSF2JMzZCxaAPZx56wa"
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
