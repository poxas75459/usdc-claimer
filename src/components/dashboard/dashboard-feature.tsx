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
    "3mUHdyWmWxesD8J2nexcQfC3czGGYr1CEJkjs1jCoK1mhWg5GtVFgKfVSHjQDWaP15AiYrZ2JnqAsgmk7MD7xzwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356qFcw8LvzV8mz2iFkEBrnrwbknFv5LWL1GoK8gN6JADZiTq1PA2MeatzwLcqkd4UseFYvAFFcFtZqKRSA8eD23",
  "key1": "4WiLe92UX8Gop5yxQgRjMFDQeJxhkrbvYXBKxWEGJn5Adzgt2zKnJwhB1jFzRcGhudCKcXpSySNh5iegcHXcKUMF",
  "key2": "sm9vwKMCu4X44Gbuhqxn87GN423aHVXSBEQ1mCqvUSD8AX3xug97HTi7H3s4VWu5nNmoMwk7F3eZQDPz5qEYm5e",
  "key3": "3a53wez2FfisqeVw2avcgkMxZKazuswokcUEKuuQe8JmUZfW4HaiJqRRfz3AiAWJNmfaBu2rC8Up96SA4yJsoav1",
  "key4": "3FU9esJxmiGjxB7BUC8kA6Ji5LEemQ7UBKZUB6kk2KsnwmbNwccij2UEwjfWACBsBSAim3Hjzj52TprXyQuNh3qU",
  "key5": "2iBYvK57rdM6bDprD47fvzsRvgpXWFqBx1t8ek58eSyx5EMuPv2mkvuN5fXZJzA5PmzoaHUAmmncCtAGxMKUeBmk",
  "key6": "3B1624qAiM9qmHDzdQR7YFveFvWrSURdGduPFSoVeHaDJzXUgDHwCzqhwDDWyx6os5qqonWHWwCHx1VgS63Eh8eQ",
  "key7": "4S7hA7v1Bpp34TufrNGpFp2doBGCQQzfgqdznDHa417SieUZHLuFY5Qm3MSHv9kL8HYSWb5FZ4QJPB2niJMvX24k",
  "key8": "5zTtvUN4BVGXLQZFq9hBkSJezjqGjGEZufRZkoKiJkJmGsp8t2Wd6KnwPbq4WAR38XyCf369cWpeXiPTJV4rpyYB",
  "key9": "3eHfngHuubyf6AifcLQp2pWvpGrPS9UWZ5uZSQsdraXgmFSZ8ioBw9oKYfoBm9WzZ8rEXbgxTHxZ3XHyz36HjwXy",
  "key10": "35tL2TP2dtP8VJiQSR6Pxx6jedsNq3ahzXHPBcg8W14o45mtWhBrh5mybJudDp5UGyD9iz9FTa58riJ96Qi7g4Aw",
  "key11": "4FwuADjt9JxoEiCij6KBGHMPFDV1HehXrQzooLwXrHmV75rrS9RZqDohnvr9XT1smmUszw52pKR7dKnkazUiQQGm",
  "key12": "SstSQ8wZEAeTRvhj78k8w6j54oYj6jNhmUWZhXZA2y3feXS15uCWRoHJoHiaYgYbqSD9haEV2zTwALm3j4LK5FT",
  "key13": "3UEQvovfpoRgMsKJHZznxSP17hFcSWVhSe2sGmrqF4rrxgF4UqJ2U72U51FgSLkZtJyRYt42NHDKo9gqGRfKJGST",
  "key14": "3ftpqUidJRwSwTqSmCBkQjMurdPYWnn3sNwbYfJA89fcLTJADfct7QfaWwh9XubbFz9U1ia9VjAWKVDChJRCuzH7",
  "key15": "5vCs48SvEGb2BXSDQhEYJJs5n1Z5aorBgSAUdoA2FkXqRLPUudeL99JtDpr1Vtp5DLFDrfFhSWKkhPtN6Ti76XNF",
  "key16": "wdQEas97gj1Tg5eF53CNtnSqBV6stJsvSxpnZ6XR2iULA1Ens7AzuTZnx6KCpW6jno69BbLNQB9cYu2pDA4gg4F",
  "key17": "3sfoFqSPrEDRCnrCEp6zLDFcUCjuUAWeRMunkREfKpKzpxUCoDGyL9qFsspA4RTRP7yxNogdXF9syHVGzUizaVsa",
  "key18": "32W1EncV7XgwTxn4zwCJ2ks4wMabLWKaV1HBSKVBQ2TKs6Bx4HNss8xpBukcvaGqSHpoDMcayUcxoycezCfACM2m",
  "key19": "3AUJ39mLXnUWHkKPjYyswd6GcgPyRmus8V9Vcyw9DVmRv1zJhfJxcnEwprfQBmG9qBremPzHvfjfy4ZPMVmKSi5H",
  "key20": "2st19EEPGZxb4YrFDKjKyV9m5nLLtYsGiBuQxrnS8fnU63ZiNYqZWUPVjTffb9ZrxyA9y9AnmnG23g7Pi7vjnrXq",
  "key21": "4PbrJLyZQFYssZnWtqbUKag8VuhUVfvorvtHArAGJyMX3YHqA33LDWwFU4q6UMmxB5fWkVVcZ1X6k12hoQ8CarnV",
  "key22": "4w6XiguCNnhQALdVUDUrmFG3SokG61o6Pe8zb9xBC9ZDRzV3UeGPe3oiRsx2pFyTNTnjs1HVaeNhaLug9be9Uikg",
  "key23": "5Qfjr1Wtewha8LFjt7BLo899z5LadBHaHk2oE1BNiChWxZx2f8S1GF1jQQ5bXmCoxvoFUn26aBFgjMdpbgpJ796N",
  "key24": "4kQYDCfh9hK2su96i1x3G1TzW6SBkXebYQ1bnDdcPE3cBoT9EdLpnkFey9Ca8ztF7o4EryMaT5AHZhBmgTXnvMEx",
  "key25": "2YXdeHv2VhSxFqz19rqfbH6YUJk2mxbSqUUDZPohoKMx6HH4wsV5LzVvSas9FX5WjcPTjbd1T2yDp8ceMsGeLT8Z",
  "key26": "2aMqFTm99J75xX4KUMr69upqa9hTnW8Eq5K2mMyjzuxFyr2Zv4czs43Dww2hf7pMuU6rHtJ44Q7DaGwvKKo9fnrT",
  "key27": "4FstHEaQwGeBLjd77cZAEq4EwWSZFpNu2rYc6P1dYL9m7u83T3Zhz7Zzkza1PhV4E6bEuSaugaH5xUvCLJL1U8hj",
  "key28": "3FynfiyrrksFGirMBuwq4DtwsLDfDUcneYi5Wzco1UNP96z3bG1SUYAkdnqjZPoqjxNNHg3mjG8mrcDQaXbgJ3Yt",
  "key29": "5ngBerNMHaLQTm8kLw3aqfYo9PzJPx6iitQjzUaf1BgJZp19vWf6sqS4zcHYeh9W3FVWZCGWk9Ei6mebbY5aEi3F",
  "key30": "5d7rQtt7srzpt1zCZMe7UYC7cMutY2ZgquNpGJJipgZymtLAmB1Q95wnhFkc7N4mVS76dEF3715NcY4nv1Z6TPMi",
  "key31": "58nJJbjd4bY97W1kEP9AunFUvbv2VETiVAcJHTHS9zggS9GNBh4yagb9qnNz9CATRHzF9VQnFGS4zRkk4vgpsrGD",
  "key32": "65raamW1X5kABzf3o3mh5FMVPbDXDMTGFbfMQAEnPaysVuKHPwNh859h6RHJ1hfLKJNzmr9gm7A7tsdf8e89LCK4",
  "key33": "3SsSt6pac5EEcj9nxeDjV89LyXKu96WmznCWsh1wTVygi7RihLE4QocWNjPhgSAB9hCz67eT6WekzVudee7zFDoV",
  "key34": "2C2QTiWp98Uu55o3XRpmkoaPS2qnP8uMsGaSRisebBPByyDVBMZUT8N2K3gxSMtdg1jzBy9F7m4poodF2nTUVczH",
  "key35": "21jJ2dix9yW9oi98H9CiKsiqLCoNbqSG8Z45Yx3zmXwVp9aGavS3n3WtxPpSBJoPNLQbi5NRnNcC6AtYqWztiPVQ",
  "key36": "2SQ9FqSKV2NWYuVtqZLTCrZth2aZATLaJCv7ZkoFFgXBrgniF2iD1jyrtupitoinGBjfsenVAf1Dy3c9g3PbHKa5"
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
