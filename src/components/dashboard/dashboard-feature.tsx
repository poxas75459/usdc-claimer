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
    "NRpprAHgmKSrMiEY9Sngv5i5HeoyHH1VH2Pcfiw3zV1LJuwMeUnvNTwTihSHt3rvLneCeHoMbRmmZ9AU3ymvuwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FCPJWsMC1KhH3MMTBm1wauphQCRopzzjne6JQr4D7r3afVirsgJ6fst1j7yviYrGPttEmK8WvaJU2Xi7L2uUoo",
  "key1": "2aSC4gSqnqeihATo6rxUoVC8h6Xg8UpLQgSBEbr3QRFH9Q1qc88KbdaSpg2nyqyq9zpHQqZMA7kNVHiwRdpZ2xe2",
  "key2": "37bmXyxcs4s75id1j3rPvBVuBVQrmEEpPhBGSiVZJ9om4cZbman8nW3ZdgYVW9dfoPU6LeMwv5DQEHSbe91rCMVj",
  "key3": "5mj84tQdriHQwWuCuYSUbmYf8z5SbSiC4akwcwshubkUfZeruEmGBLm3n19kx845zd6Xhhmok2FPvY3Kq69drQPj",
  "key4": "61FhZA2p9X2AwWwpxvPqKG985ehQfQeAZgr888Fok5H3wZ2TQqh3xaD7ZYyqJ8C9vFmGyC2igLemx5cXN7QFRjyo",
  "key5": "5gqTALtfPKgPKJD8uzuM8JdZ77f2cvn1kvW2TvVY3PDnYnnxt56x7bwjCQgZddw7bhRrJafEQe3ZDUxe1e6MrExL",
  "key6": "9wbwnCRbGa4XFfttmsCtznpdbdS6AvZh86TN15jy53QLxjHsdyvVf1xtw84o2FPRQLT7S7sVWCTBYgFw4HjUqYr",
  "key7": "5XMp5uApjLF2y5GWYXoCoLeL4MLetdyQ8fpYBvcRC7nCvHgXjLwvyKo1huFJ8dgKpuE54aXSNi24enawg6mVEsJS",
  "key8": "2UwEksLoGofibPGGovuq3SNT1ydhBg54RNtS5icMtczQo4cZkeC8bjUt1Y6qikuFtBHTcgHguW1jRoXJtttrUQQk",
  "key9": "4t4YL3e6Wa4mfYBeV4tNSmtePDYtPbsKE4orgKd2yt3TidN13T7W5mdyiHp9MaijMU6jZrYbcBYCVozoYSCQpmQ7",
  "key10": "vek5TH72KSEdRK1vxqM3XguDNNNn4ZVBGQeJJbXYSvbxns33kCkUAWAHZK3QiPVYnL1ZdjpKMMmtZa1jjMbLopu",
  "key11": "3L9ap4dimFaEMib4VsAfAvxpaLN1PGMzTc82434kBBE9DPVRzAbgGodBQMQqFferUa4bAXuxXJ33kix8p2AhrEjm",
  "key12": "4E9tJrHcPfuM3A1K7sXcCygp7j311exP8bbLYxAP8Wc3hqsf5VDYF5WHiXXXhRHWq62DQcM8rbn8tM9sjyaLHdkS",
  "key13": "5TDdGnp9mSC3MVpwm5UwGNqtddVK8ggfqxeQhvex4rQRaYNnGHZMv9JUwasCkaQ5S7wAuZ7KFi4UqFgioftbzuFK",
  "key14": "47JQs1Zhc6XcuSKc1Luve2QYVtnSKz5dXGxWpjCqdkQSyErYqQfbinAQoYZ122qa8bVwKnebXduunoFFnqYWyKNQ",
  "key15": "2rHxw5VnBGJbsNAWM4aTLfY1DPTn1Y1c1kR6uQg2ro5f8yZE88RTWF3gq6ocADMQDjfSRKVaQFz4fjZzceL3E9B5",
  "key16": "vuGruFCRbi6pxxEmLGhfYE5R2th5BgirVGqjKg7nghbFiGFXWyrU6p9BzbRfgGtCP8Le39VS7iauXd4dXMPzX1r",
  "key17": "buDvo18wTbgLBYLxqGzbtdVvgeDduDmx9yPi1SpZDfkUP9i3wuY4rrf2YTngBAKpmGnhP3ZGQBScQxbWUhAoCJY",
  "key18": "3iT9afKacG6JdgSjU2nVbLXsHHua1yzUan4dGSNsBrVEu7nSt2b7HnvFg6ccbVPjCVsaoXwDvA4T1uBzZJcdc1hz",
  "key19": "38QKUF9geev3whKbu5hvRTnJ72mu47WiHrwV36MaUhCvQTHFCkXgxRczMWwZoQq6Vz7qKm5N2PHLNeTVUjMc8syN",
  "key20": "5evzVm5Mb2KEN4e6hDdvap5bvmFo2TQnUDbZJk7XkWmZTjkw77F6yNhsMj6g5wwbFiTtKT8Ea6kk2DJihHKVZryW",
  "key21": "zGa2Xzzgix8Y5PEYDNQTiSUcbCPEGbjaR2uahxbkAm2qLBL9Z4vr447NECQTCCZqaCeJdQb3Sbp4Se5v2PKLibm",
  "key22": "4JkEbX6R6cne6TaP4cYQST6qX3DyWunesVfWzLydJLdn9aUjLpU6ycCFYCeNTY58zKoRts54h2hkmp2QD98XkQGX",
  "key23": "4yHKM3VoX4w97pW15a3Gsm5vVuAzhgNnswJWanPHZEjbqhnDzFv61xbzxZxtxAqpYP9nevpExGpNRCtrUb2GVze1",
  "key24": "1x7CcsJbUb38R6yaucQZnArN93TxMkGL6vWZR1ApTRYCz2q4x5LbGvipabDrKZ1hGErTMM2axBCoh9vXcTRx9cB",
  "key25": "5oCGZVRavmkSdGKFQuPrWVtqUiQm36Sw7UqNAnZC5ibdcLgVTpzBtuu4wpvK8Nk2NBScMS5H3yfjDLaL7PPEneh6",
  "key26": "1wVmuRtNrKyrdHVXQtfPwTmvbpE1PptxSiYZeRcHyvUyebCjrXDrVNVjZfgg8Xk748arBe4FSzbucLjCbk7LPgZ",
  "key27": "2X2Cm4qZcY3zw3FiLMNpzYwiAsXan6ZC3sfUgNT7hgZybeTDPTKqxjiuGjoSzU9ESTGMJXofUCdGZirkNEek1kNv",
  "key28": "pSHTRDUp6N7FYT8ANKXtntAmZK7hsV7PHsqw81Y6ug34ZrHrekcot6PQs5RQvauZR3cnssK8jSRPAEQF2Bm5mcy",
  "key29": "4zV858zhekWKJABzt3cvU9CpH37fxGsEWYB85fCYJ8ghMNRjD6sLD4CoU1yoFRzeid4tSBieTYabBR2ah7E65st5",
  "key30": "2cdTuXJ63wfnRmattYe1TPSbW7uLiqSKePLfXp8sGtx7LpVx9oqh47aoqGsFbRMgGyT3eCWe1TGHctS8rrWSt5Xx"
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
