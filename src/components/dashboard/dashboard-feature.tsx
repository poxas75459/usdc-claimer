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
    "4iiqxcq3Ec28PvFJWYsmidcZgmGsSQaan7giqJ3mR81BYHckmdDfncyfkTiyfnBy79oY26jbPk2f6fiDj4E2LgPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mx5Cd1Wy5Bjj7gJ6LTzZKkv2grhoUgRM6yDgh9ULVeQvNj6JBuUrMfD8gwJd1FPRUR4C4txVLEVV4XYxdsFhSVS",
  "key1": "63ALNqnyrhwhHZLfpaW5fHGfXCTxbtssYdoXwTha26iT8FwwG9LrU841AYaLCCPZoBW5kPk5kd8eguzZ3LZeshZv",
  "key2": "5ouroZMJMFMW2AfUdrsu2c6csqKTR5xyq1bTomQfUTeURKjzGU91T2N56PMoAAbcRyfaWixYhLVMGY8YKjT93CDh",
  "key3": "2LB89umWXU4VWiorGbMhjAByhVRa25AyyziPVFPGLqqrw35eTPR1psGPp8sH8cMUxsSEUrJdfDSns6ShyZkLBnsm",
  "key4": "3vbQEJow6Wo7zzq2NX9d87GgYFSaQk4eU3jNNk1vjTGPe6WWb3XrEjHcrxrsjFr5TxLrreKAMGdRqexPZ3VxraLM",
  "key5": "4x3VZXAK4Jkx7kqozVXqkPcG875y12oHmruDXyjJah8sodXbnjKZdXg3oNVXp1cMRVE3wqDuoYM1UL98GgJoVPUw",
  "key6": "55pGvemACuX5UtCc8RGMkzBodFsobSY3wN21gtcTtLLqtsfhbAP7fqGGDPaaJLVCHRry4hipuHMi1UvEijBHojuE",
  "key7": "2kHMRCBJev8DZYdQc9poww71RvDRggkn48CCcsRo8cZzj4jTnbM1i1o9CSEeoozTwLKRMYvVGJkwRSzpA5fjL5UV",
  "key8": "31xJRMXYHnzLCpLKjNRVPmTTgmX9jCYtSmZm9d5iZ9DXwJpbCeh6hH4iKxcqxjhGDRxWAaqA39BVMXQm5sBtAAjV",
  "key9": "aLAU4vuQLqJsxpiKZnVz7bAVxNYNo8WQvdwHKZveTqk2J5zkKZGd6Uy4PxBKARhQzp43ciY7q3ohmaTmRukfnLA",
  "key10": "vdMCxSVG7WvwNphuwHh3RXJaEYbMGH3FvuAwUfA5d5zTueqeJYnrwrYuSecmVfVzJVjwMRGq5BeT6oJQkoEBtUx",
  "key11": "S9ToEM5spt684Nkb2N6AdCtqEu88FKT11D8rMmzVNodPePEWZKEMMnL1xnjNWeKN1ZGAoUwyPUncj3wRud4T2p5",
  "key12": "3QtF1Uqf2tRJo61pVbkVM3zCed6Ey3Hj5qewN4kziwqyD4HMRPcjXRWahPoUPK8jQSMMfCrhLm2nYSUace49MKcD",
  "key13": "2hwVLY3ewPHD7zdeVF3EZXJdVi5ymWGQTznFQ9KqC6RJEt1mc5Z7asnTCz1K3v61VAF4Sj5puk5W82YjohKibsd7",
  "key14": "55GpsQU2QrHG4QFpRGEsMaYoUwpEXW8h4UetJDRednH4F7CqL9BtUwHEGEMakFZizxtKyMJVunLQUxiLXJjyupnZ",
  "key15": "s6ZR7YrLYfiA2FmnPZsizt2A6B2jo4ZDQJKao6qmYcpZ75qw8UrxdMUy48WpqtwmPNb5K19qidy6LbzQ2h9fcJU",
  "key16": "3pSAeedMRSL7LzU6JNEpU5hamMzkzMueceMJFVrb2XUHFbQajdZC9fhDm9Dc68aPTpBsRXkLXDgvCeep6EzFrrLE",
  "key17": "cyjR3HDgRg1QJchdfqGzPaSvdMJfkebxVtwgKD7dwzk2ttqXPVnoXFWSJXXAumkX3sySQC5cdPji4t2cwajcgvW",
  "key18": "5ZcDDjdtDyLXAgB5wGDyCm8D2HtxwjBgYjNC2k3AWgZZXAu4Zd7nfFRBqwNWrc3sEJte6yKA8vX5n2gQL51jSA89",
  "key19": "51aenZFouZdpK1RYHypRaQFges6eo8kNbrWcvWnwBp27GcmjoQdnkgabSeDL25wHDrMS1YfhcB8g1CTX1SCgngdF",
  "key20": "2LEXRnMjzaRHFJh2Z4MNPVKSRr8dD1srcvT5kdzdwKuz3GCU8jNysbytWxzk11sEPuk1K1bEyg7Ssse3EKRynCLQ",
  "key21": "3gucLrQjLFDPVQ6fxnhm1UqAFcPqGfH7p1wsodEbxsMdoJ22hoaVH3LXaJG3uPv5wckRtWrcP26TpPnzbEnEWtsu",
  "key22": "5H3wWtiiPUQJDbZRnPeqMXE68XxGnjvpYvPzoSLJsGiNVKWDCaCB5tp1RDgnWscWKvy2hyEnFvoshYZBMaYn3bf8",
  "key23": "3xzs3LcZxQt5neXP4chQdybfJcZ6dsgH9GYnrQ5C5WnHZzY8r4xUVz8QZkDMDj6eMdW9xZ1DrFibTK2fyyf7yUtc",
  "key24": "y9Fx3ubggbF2CqgvBcPVnTkPssgd8VxThNxMPPLD6J59fMALEHKufuYREFjigtvMaUm3REnH48BWPakff7FWBzA",
  "key25": "2ySQmwLeQp97D4bgdnsL8jJa3ofteickhKfpomSUMv2DMfh3M11W9v1R62dhCEkPQsuGLEpra558VFoHkVDtVYZU",
  "key26": "A28LaTgc2oxFtNt8GS1xyutz5quPmLRDxPu2aWMhZ2oF3W2oA3W1JoTeDzT4cK1bUtqw7aUf7s134ZPxsrPvY7U",
  "key27": "36r8FbJwPgx86eK7D8a6DNX3yGuxuJGiPcVZRHmvPo5GW4H47ibu5Q3LFmMDdW1THhVbxT1QKG4QfYm9qDw71o3G",
  "key28": "65UdrQRctVjf8r5gjqioj4PhVG81Xn532XUKVd7FaGkRgBu8aahuxPCTkGpGnnjTGfG2nkSvJP9UM2Nfv35r98et",
  "key29": "47iqrWJqhKZGSCvYu4EUnEospwwSiecsfehvDAKBUzvFjbjijxqqymGzEoDbJELVo4VGuJma78xnSbjJad1hE2tT",
  "key30": "FLo1epdjPQw9RtMsLSnuJcYtUvAw8teAUF7tJwUvFtBBuqxGazqoB8vNjG9NcFYf7y2etHAPrTMtbaeFJXRsgsQ",
  "key31": "5Q85y6xjRVH7aWvkEGTthg7yigQCwRsgoSzJYbuyMWdePpdbzvyNRVQDp4oRAqGMv1phXbdKfQx65sxtwgWHZwW",
  "key32": "5iw92WvRYaVZQbvWJ6DjwzFM1qpRCPDL55YgiRvR9hP8bY3n8vuvrwmWSNTpQgsw7XtoxtYRvjxjAcynF8Z423xN",
  "key33": "3awispZcDUNaahnbJDM1w8xXjrh5ayBUHHm5s59K7jCf1D8Kkf1sp76ExfwFF9HdVANKpjGyqSdZMTxArwKwpibf",
  "key34": "t3kLrrwbeTu2Eg8RjcpdvQhkN5wnw5e4ZqPQ8BMHTasTaAVQ481QPFwewseY7YvFMTT4rJ3TFYAvbffmfep5MFA",
  "key35": "2njurWp6kAnucyRigLEh4pR8BVi9qYGDP1VjfAi9ut2AeQ52oaoEnaFdtnrSvN5WAHuXwpQ6TYYsJdsMgqh9ebMX",
  "key36": "3AyeRjs1YmH3DdUUvuKunhqM9ZQw36F7DMykcp7FivSCXVaFaQDGF5bKiUUpj4MwNuB197PXxwnhhQfne5svwPB3",
  "key37": "33NbnKXCBTpQG3HS6p1Xvk9kvk2Q2vbJPffVmdQPjNw4ktTFttYyzjaLr619KkWM9fZjBvxabMJPb6SXTn9MARXW",
  "key38": "4jHzfT721ENSP6MMQPY9vtaA5JuWAoJ1wTwxS1i3ZpnC27c12bBorvjn7ExmV9cVW23jaUMGt2k43brgvk5G7EpP",
  "key39": "5zjEpdvPFLL1xMjiGd2vxQPs3mSBDSQVnu8fcVjcqLxvf2cbwBfNrwd5wVmx8TXSX9nkNDZDagtD5ig5SYfUgF5q",
  "key40": "2B7XBC1ELQyomqSrZ5Tj3wWhyiFozGCyxJsmbCAgktuPrBa1DcapJorTSQV4TXfh3NVZBetCHG2YaqPFPwLJEaEv",
  "key41": "4oZM57advmD5ryzSY1j66No4Wjd2VzQAgRdtd77Epj8djwsen1z4DXWYaC537tiLP7aJu8e3nidHcJ8sifA48SGo",
  "key42": "2N99K7AKFNNzLpNotoJtuGxUpWTXCrxrwTJcygTvLJduriHeBGfeQ5ivPNxQUHt2CP1iUYSKtxRitHnHi7FHygnP",
  "key43": "5RJbUMNMx52v2ivFWXmkeiAWWjDewykyzeKV8GmjB7qm8PVQkk1b1HqowDkKUtkdRECQVRUFdjq9UkYwMbr7U5Sk",
  "key44": "125aUmURJQacNw7xq9jVhGFXVLxn8zBVzKjQuU3sKGLzPXQRCvtBVN9eEz238qEKyLxUZSXq5whoar3AYGHkbnjB",
  "key45": "2tj9fVa3sd4AW6v5oSmrrEHVXeaUJyjkhpcNxDkpQ8TPnn1VjiaPuNMTo8PEiqK1d5icEuUDTvBiTcgTaLMXnxR5",
  "key46": "38uykQ2NZdVxkPnnPueT9hHGixvUntgfMaHvEX5HRnH6jBSrZNZr6ik8teptshUtyRxiTjujix7DKkPwwgjDpL7K"
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
