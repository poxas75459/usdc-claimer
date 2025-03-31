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
    "3AVMYgyDM6YCgqKn6JA3im2ZLrK1yHaRC5dBr3U2t7vTyqrvJSY4BHZYVk9HxTuY3E1pAas7TTS1DgYyzm89XYXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyPAUyCgKRjt8gnvjd28eFySRbQXPVi4frEudATVNVrQrTzKbixnDi9o5zSTeL3Dy3dYrCmJRUjR7x4jtKKkXG6",
  "key1": "1Nb4VdD3SuJuyaMQedQ1G6j94cSvgTpS5dZ7Ep7gsAqY6m5ieTWYj2da8WsQ1oey4nNwwaihVrbuiRCFz7tKPee",
  "key2": "3XV7PhVxFPu7AMj9xpQ3SjoK9RVJVr7YdR9G3AxJot4sSLs3fHLMryeDvAehXHQAXhrBjHSNymr1mLPcyGGDxj3X",
  "key3": "4KnSTkLL1QyLwzPVBNep7voFU5h7iVg7yR9eUHw5HZs3D8uqDLvp56Xb5UtikEs2YdDNZeboq5Dw2WgC7c9Ky4RV",
  "key4": "5YWkz2FYkVVhGd3pmndnvJN7vmvAu3diXsgoSBsb5kwniqM67viZUT1RPa4zP4dqaQ5JMY9HTaK4zUqsyVDmAsEZ",
  "key5": "59c9CpthLS1UJqVEbqgomubfGqMhwUgEygyQhuHdk54UB9FcPxpt2DQ1ZiMaWeiqtj9EF9RLcqNt1PWDKt7DJ6Nt",
  "key6": "5Fm9cSQyWz9AeXVWi1P9jSoewwgKitSTWqWHvGR9C8jTDpScwzPyy1GnmNJASK4qcWsUcaVjgwztnCyn5tPCUePJ",
  "key7": "4FHxuvRZ2fqfiNwDoakeJ4fH5WNNw3EmYpS9bbKFpAKdzDw1NB54wHkiT1qzb5nxm4XcuVvdEzUY6kxucKFjxiYh",
  "key8": "5ZpUVocfv3DVguMokSaFzzMxSMDwygV6umMDT7Q4CwB21UMx38sfHdnbfVrfAJ2RGzpXVDZF6resojyGGBmPGDc9",
  "key9": "3hMs3LaxSXXqFnKnyLhhdPghq7C7x6n8SLgoeeLHzVpmbmmAwXiFxEXK3QGi7HxAcdQ4uHKeCoTDgmvTRnXAwtsy",
  "key10": "2uVJHvkXLpSfLzZPTHZ432iEm9rYedZc2KmmCqefmewQxsQ7Vm1K4xdqcKb7dNJV1sgoy4aZLqi2J1cu6dC1DQw9",
  "key11": "64ZJS9J2SF6a352tPG1MPXopJtXK8pq1tqdzhYB8MrrDZpPgrMMJTkZpCcUN3fQo6eJ81AiaREgf66TjNGutNnXc",
  "key12": "64Eyeqc3VDpb4yF2Q7mEvJryspufn7QpDzsYUBTVVrrP11Pck4a6SDft75SL17tBKBWQ76jNSm4CFgpvsMHrCNgS",
  "key13": "3kRGwcUi9wrbF6iCjeAnyhZJWXajHL1rZi7wavdwnm7pmH7nyoeApmv1AiKtqLc1pNcASKp38MPHGPH2Y9xiqmFw",
  "key14": "2Yxr4vDgKjDqTDZrxVpiXtFuZNT9X1GZ8fzhbXTT77XK9AHZHuoXCpeKSz4u3vzmcwdKf6hn52LcbRCcPouN42h",
  "key15": "SqXQtQshXPiHynXXoLoSg6jBZVFoDrjtV22VuBnQBEcpU7vsR4Qnq57Jc1PeuD7D5s2k63ZW5iYqBMvnb5K4HSf",
  "key16": "BJxNh72nAetpVFD6DzG34pcrKLMrn2H4pngimhJW6QAdBCXa7v5MtS3QfmMXYRvEZZN9jjWuzpVBJJJDs6SC7v2",
  "key17": "4nNqd3yrGBu8yAiy6Xz5chX2uLG1pfhS2UGboUt4VZ6c6hGxDKkZN69B2qD5hE4pCndY6LvX6pSvnKtcNWiiHsNZ",
  "key18": "2CFGok767JLcRYzraPHg8r4E1b9UPAzixbZm7U2yvYfQEQc3d8qSmG6UhcYku9BApjfTSPbMnN3u5K9UYiw6mDV6",
  "key19": "4UqNk82N3GW9DzbX7eA7udKY2DEqzVrxfmh8BCZTFCH4oRFe9LXz9PFDhkM1AkFVpJuptSfdGTPiD8Bq1d51nFcR",
  "key20": "5GxMaW2qMXiNKBgyX6JMghy8TMf8ZytvoB9Dc5KaYYKkXNqx5U5ncLDb9jA1ywMrRDCh4tQ4f2LFjC2hZwmBA6iB",
  "key21": "5cdpTTgVPtzkkirTLNpodmSsiqYneu3rQqvXZCNHkHMLqVKNu3fqq75mqAcGhi1uHshTeUBeTmhV7A1uTvQncLHR",
  "key22": "BSKX5WHWSaBkgDG2EccDTuS5sVFfXGsoUccsZtyWAhELWEdfJQz2S2TPd1dcsqf1nAFpUSqsfPoXf31ycM3qbUn",
  "key23": "A4VHdT7d7jC1kEvuWz9y9udc7DuqvUQAhzTgqnu5MWfZENQ3CmPnYi913ykeZybJyS8A9MgmDxaGrXVTQSJgvyr",
  "key24": "3NhwTAwTAyxPR7rR7a3ggaGHk5tywWnU9447p2SmzWDDZpSDtxySTViSHHJ3YfvjYDj6wJxgRK6gBG5bezSMUo5w",
  "key25": "5yJDf7Kk5cbRhmeJvvaUc4hZxSdjqpX5hnvGWZBT1QzE4oefAmM8F9PuJwTnbnhavGQ9Q6g2cJ9YH3reGJNikVUM",
  "key26": "5tE1c1g591r3bN87Vyzze95dEdgkq152X47bByv2BuvCTVjtuSfHjHjYkDkUndvGvo7qMrmbFipHgsiAiAkZFid6",
  "key27": "2envBinfg7y5eWmVJrtp1B5HU7KxXeij28fTPNaonHMRgk8CurLZSnDGyz2rX8x5vVkxm6jhLvLTYuX3A2R5w1va",
  "key28": "4kefm8WB4VfsuLqxDqpDGKr8uU2bperYqet4kvGU6QWcRc4otLQxVLdZpNtcNmqZDqW9TyKsPq6z9hgxiT3P9mMh",
  "key29": "gzUJMWqwELwndXpi9eYsGcH68ijyhBgrJSJkqihTXq5gsdJHeKiUituFnmVShkCbzxjX5Zjg3ZLgQzDChu1Qo6u",
  "key30": "5z3V73YKznpc5VkrkCvybw2Qg7nLqDvAYsESuCtTfCo1Hg6sLw3xKunPpYx1nYReK2ESdMxvGmxhFUS9Yd8CyyzS",
  "key31": "4jCw6TY7ELvtakY6MYr169aTdt9viCi1KQqHjLUrDk3q3g8tkjFAxndbGgb56g6yangfp8XdptPiGZ9uzHfM4wpD",
  "key32": "3fAUJgR85EZfcKPkaJGYbnXgRQx79YpvdTejQ6ZsKiZKj66WNVqEcVpmt9u9TqsPoghBLkWZGk3n8AFpFTgo54kd",
  "key33": "hNJ6CbpztVpU3PaDr2fmNAxs8sNKatkQ5UWQRFuKEkdw3vTZwTfLByH4CM3C12NvAosWm1G6qr1wANjJc1425UW",
  "key34": "3GfWyFAiqiiWHPnN2vxiv2g5C9G4nNVFjKg1MtJy53Sdw8rcbpsvbUUX9LTsECtrwHDtmwxxM2RzPLxbRtKXA6q7",
  "key35": "3epK6bognovhcRP2serVmvEwA3ijQkm5t2pRjdkcF6824CnMDDECwMkqbsqfeGQXVbiZrX3g8dufFbpP5tmqLa6o",
  "key36": "4LPjsc2hMwG5At7G7Qrn4EPs1RNYszfP7TgAno4XWjcSnFTc27PMXAnXK1UuGzeDVNWtGTvF8Bnda1kA9d3meD6F",
  "key37": "cRBrDqsqYBwm7vjMdAM6cBYup72AZcCYVikFKxmcfGT4TV9RR8TBhuQC2qtVujTWbhmvD9uJiZc9vW1GuziZSd4",
  "key38": "3PJRKv8wJzjaVBTeJmL2Nt5C7uhNMosSN1NAcrk9zd1Cbs9KXwkT8v4WCLfhZtxsAda5VAAjujZuajQRgUQBNT7W",
  "key39": "i7UHLeWWph196qceetGprYbMRLswzuXwaNic8pUv23jC3qYuZTf4CWcjRLbttpcqv6om7AyPApn3sveNHpX7Qkv",
  "key40": "2hKiEMEmV9a8vVbxV2nWTpJfy34rDYc7vixFK3x4HyzywbxuH9wHw5Ea374DBKmC5rSstTxdsSztFGA588PDn9sb",
  "key41": "21YfJYLBr4yKmXLaAaNedUY66YkopTZY4SX6PfAHNWWeFtvWhN4u1cqXpmmEYKBVod7AUrKPVLjanCoCfa2yGbKr",
  "key42": "2TQ4EFhirNyvdLKZi8xpGCmffnvgX7RsnWbU77yVhf67Zy3W9SBMbRdpwypnkAC85MyRNZKFVisJVS9rK2MgKkug",
  "key43": "RLKByQpJCYd6AkDgbtmEWwGYD5eFU7iSDSZtkKeSSBvewW5bZKKRdySFzMvEEjmvTvbjL2iNY5dWsK3wN6QN4Pn",
  "key44": "2U6RCVvCd7VqYVxcSXpD4qvtLqJHNtHKCnm74L9GjsZQqdj2vsFkiDTRf6PaXGgB5ozd9KFawwVA8AxX6dkAyr5o",
  "key45": "4Syb9V2hBDZ1zvsmeDGqWSkaGYsPtpAeCVobo2F7XWUTVB7WxYh9LvX9Dmzr7vwf9LHndeybPepW9g8xyykqPA1p",
  "key46": "2jrxCj8UATkxGF6XhjLVmwceLfsuaubiKAxiZv6pkmhJzpKZD8BPgi2UpXkefknAfpWUqi5B3Wveg2rFgMuAd1Yx",
  "key47": "2nyBYELzL16VYpcSHQwaLxCSL3hfbhE8ZECsgWqWTDiQqJ523CV3oN7dUESLuDxvJhFcroxyCmrBrwjHskvzY5DW",
  "key48": "4Hq3Vm9fy6NjUFZDVUS87MDDkF4i4nrfLgxSgKJ9FdN2dTwuokUFsTFzVAWh7S8m3EsBp9hdZA3GT46E1bPN1xM3"
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
