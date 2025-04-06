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
    "ScmYADhP7RcuyweANKtTw2Z7KkqoFqKh2tTFD96sRHNxBvefu8Gu45sXqEnsLQ6cZayxTi7qEnvKQLn4coxMZ5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQ7vdqoh8hCd9att99jyZXvbttG3Acf5SpzBzKsaoFARHhzXT6h35UWCzBcUmaZ5tHeiWhQbwkpJKS2jCdN3x7z",
  "key1": "4DFKGsnRwpkuUsVZFHbnu1YdHRr7zm4vwZQGWyHuKo1PZtwdS64sFb5oMMfZMTuUsUWwTfo7WttFjuyNEwX4a7cU",
  "key2": "pdTzMHGuMHEiZjvy6WWXbjozv3eDbU8FdFJZjbAD3dsELGWPXwAW1FPp8VDzVwiwZNh8rtQ4eqoWGA4fnpFoGjr",
  "key3": "5j4JyqBAbkW5EaJbcqPdkH3kwL4PAaZZmWMPN3tS4VgGHSfyTXXopYNKkQtFUcTY28n6HCN7c2eqrb8mD13puzKx",
  "key4": "58BTZYWUrmj8na3aJLWFdBsLwaZS1HNRzttF4UXdqFT62g2F3hdf7SNTtLrVSjZ63zKCHthuUH4AQJsQp4W9zm6C",
  "key5": "5MDzwcmvAqEpy3D7w48B56C8rm2EBvw9J9bkYFNMTsZurjie4AHxFExdTMwBsKRWPJLNugujdYt1G1ie3Z6ggw7C",
  "key6": "41KKfJcBUAMDK225mVvYX6y2j5CA2kqUX9keifig8nxJBEnNzqMD6mNZnuEkSmP82BnnpLU74woXn8mb5MBMFCb6",
  "key7": "3VdGbP3PQ3VNwwvGAYpyWxDMPd7seyXJBFJSiPe4CxtX885VwLtrmzMZGDGjizCFLH68jSJ6zvrFmSGMZ36dWiyh",
  "key8": "34WKUyFzQEnjSpXLzCvpW27r4yHReEVaikVBe6nzXV89HF7yzmxdHatnivQhQDJsEQZKzpDnmPJSVJ85q9U8G4Nc",
  "key9": "2RpDRWpu7yTR9LvA9EMJkC85kXX9sVLJNayz2niwuhXeDzmCypA9x1vKfhW4osSB2ddq1TdKSDkNdRwBEpb48AUc",
  "key10": "4GzRiakkEhNzkHzLQkvq4U3XgEk73ZJnj5gL72753FjCb2apZW8dmFMYpZCXDdc9Z2R5ThQJRBuKKb2GFqD5eA2V",
  "key11": "2t7rsgrrsLHhLc387X2x7KbzJvvzkAM613VAPoEcMYD3ZooSJcmiPQRXQnSNc1kfmU1y8euSVFsPCYCXpRotfVJt",
  "key12": "3sjxZ9yUKz3WRrrqB2U5Ayf1wp5QYrVHzEJxJjYCcsuL1X99rtXT23gRTKTbmpxFVj3YiqiPdUkyvZLNfKjPYR4L",
  "key13": "4HtGFtc68Zx3hwJas2ZGcr54hyU3JTt2ML9VvYP5Ev7f3um7Pq54dBoC5AfMKjyHD1AfR6kf9sedsamAy7fN47xk",
  "key14": "2qEeEVg91kc32Mj2YiVnespxr5QpibYQQTqEhgfSX96uefszBFVvmrix4YNLfM2doEwLQqdG7UwgNtwTou7um5jd",
  "key15": "38byyYicmZ2FXJJGXJc9iJhaHFZrwg2bVZE5f5aMkLGQz4GP8WbZLeXCZiLFFARP2WiHvUjhFkg5eatKZ2QzEfe9",
  "key16": "7CSMS6db1uvmmZYjRLDPPczrhT2a61uu1hRtxiJPZSahtRZrtMu8DHPjCuNRJNcSFHYcmoPzFwB2BLnAj3bqhcF",
  "key17": "2UFDRRbvy8Tu5Nux18oqPPPaJVNaTqgaN5cBqr4gFMoXjLYBvprkU2SKGCHXbk36rANQWh5qynZTzVXwko7CKJ8M",
  "key18": "3ZMpP5Ty3ov9hkd6yx6uxFL71Cd49BGJ23HgVF8uLVdV8aG4dF7VktEYUSnTABs73P1qdbvpJtqN6UoAFbuJ1ckM",
  "key19": "WrwHnTAypRhWaueLgJZYYZZnndV8c3XxE481QB1Xt71NYkQqWFsQZCrxCcoV5D6TZ2B5qf9HSGjUcPB76LY1tWh",
  "key20": "5kwNQK8dxrpusT8DnyS2NG8L8MwmQXmX6ziCTm83MdfvDzF9TrYASk8gXMLcuejUk8SM6b2bmQGvZgBPxwE9NqGG",
  "key21": "4tP6CpiRPgjrKAUdhpm9fyXzeh9QqWoqHHeNPXMzU4Vc56vrG8cs5FVuGqRpqYRJFegfo8uX9YqiXw32b3H4LVbb",
  "key22": "99z3BKQWitS3wT3oiKYFQQBEYCCSnKfDRitUSYfgYcahsFFs53RFnj98mWGq84T7ZVwq9gKYYK8EFT2XpS6X9C1",
  "key23": "5nH8jUAJAzeJoQYPnDhRTbpwE9gyMNvQdFrAhVGkzgr9MtF3sbiUfJQDY5WBJ3Wey2KZdS6tcDQVveigAzDwnncx",
  "key24": "27r6bytjKkbxdqa5yThLwiUmispKd6pW9rnPh9XkwPMFmw1x8oqKT2T4pftVGwd6TU1vdiqFasfefaVy3NRfUBm8",
  "key25": "A55fukP9XaAxZv5AkFEjAwmrVTfjhuTxNPHPqe1Q2LuPQKeR2fhUdJb3DQZDGcaEeuMdbh15zRNT8a6pKTpWaUq",
  "key26": "2yfravVUerFRzHa9ZkPf57D3xiGuDXoKfGU9ak3kAeFHsX2wHWWG59TyiBn2VcCLwPULsKyfJgDbA2c6JwtnDe1N",
  "key27": "3G13FeQqNcvhXs6uJYCBB3Rf73kvQ5mfd1yomQSoNbRFXyKjvfPk1MqmLeVkkjSRxpe2wdsWPennbmS5zjD7S5Aj",
  "key28": "47rF8AVn1obhDuxvHNqPZCYpFjibW369mrvaSc9D86eeFakm5PcL4zHxfAjCBcRU3UCUueWsAT2UBDFW6yACmWW7",
  "key29": "4NkX3NBmGQoNQyUbrAVBqBHEpiaAWiCNqGUXSUpXGhy2wdtGjhHRapDzVE2sUE2GfL9okFf7aafjXxWNbZrd7nnN",
  "key30": "5CuDkMtZ2N4WT8pZ5SHx4DgN2XSWxunVZTRvwbcXVvagsjgxygGkTc22bKRDvPd2E74whoXXjjYzbcJefgTJdCrp",
  "key31": "2hV45b8kJvEKkqV6aHFgUWKhbKei3Ed9Q473APUGt2aw1BiwPCjVgiPj9L3YxpNW93RYBkPbfros9GH63ctyHbRu",
  "key32": "hUdWdFLxgdywRNnSuztiTUNfntJAkVFuqFZ61iqtVpLbEYFgeUWQfZQY2Vq3Jzk6SqMcH9ujQ4iMzTSuxa3xDi7",
  "key33": "2AmFGA6sDA2jN3WjYcUigwNUsZ8NogAqqyK4JZtsBgLMuhGmgvury3kcA9StyDuDy82jQSG9eLPpamnhqnMPqZGN",
  "key34": "3o9gcSe6ULVH8NqyzikXLS9YUzvV7tdDdDKEyTvoV63y47SR2TnehNn7HVoYKvTJMk7RV35jrpYHg4supUEUN9jJ",
  "key35": "5G1r1eGC6SP8iwCab6ckhet1VZ2HzS6pUAjQ515j55WL3MWsW1vymDeJWYYHGbq6YnBBDQcZkfhisJ9z4iX3fFa9",
  "key36": "2yLXbscyoNZgLjoj9YTEs8Z7oHKkMyMMkpBXvYTe8SFfSMJNkGBtgqoYs1yM4NzTfuU1jZTC7qkJDBxgHUN4c5Xn",
  "key37": "3VMRTMhsK9RRgjX3K7znQ729isMgyzYVs7juJ4aEkRqsJfTWJJbcTzE2Shx47fP6Te3hnuTeztwb3dDMRmsSQ9QK",
  "key38": "4BEWuFfiMjSHRGumrc1buobPNGE1Mcg7gdMygtm54piSBhGw4MAXsAs7xQg5MxtxZgCrjqFJNXZwktbru1Xb6PVf",
  "key39": "449GG1C9yEcXebvu6n9NLtFCz6owW5Q6NsYTEd6Hedq9wsAoWVkc4uYuPVgtAndtmo2GMfC3CVB6HiQWdT6mKGHL",
  "key40": "FHhPAUEFzycZmcnsHLDZhG4XEy5apW8M7P4mv7r8KuSfEj8rmBG9EhmkVQ3cB4eHNAPS8gY8k5kL9baekAcFaWe",
  "key41": "3vtVFaB3dfufo1JcFnZ25YUY5hByfMssRoKH9NTY3ub8p1GKRuAF9FMsMLHu6bY2jbL3Arw28LzPuCsbEZV6FH7H",
  "key42": "5F8v9STPryraF6bKSKcEpLer9E62wm9hYng7soPVG3WArreZKE5eQbC31r8Gh8xbSPV7hsSMhT1ePHfRtxYcWvi1",
  "key43": "GnrQmfw8NgUqFvkPKFeje3zQSe42zTvJ9YXWh2mzRvnYz3n11ZQ2n3YJGB3SuVbx26BStRJGe5JeWkdCbmwUxqd",
  "key44": "271rY4hf6wWNa3Gbn5uqQx5JH7Z56aARGFLXrxYcXtESFp1p4hXVKV8YspET1phTZRgFHESpJotDPd63uysJSkjA",
  "key45": "C9XZ5B2r79Z9BPMDLr91prfunSNc5Ahwh4XzgJBoCq4tY8m5ectHbFQNNYKXkeU4Hn5Ws3UJJhYgJv4G4tzpofR",
  "key46": "5RF6fPM5i3eKtuKWiZpx13Z2JGrTrU62TEVwWisPexyopgckzBXdrYtk1kSMFx8UTKkQLds7hcBYUxCbxqqjCBYo"
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
