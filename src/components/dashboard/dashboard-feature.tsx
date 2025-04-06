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
    "5GSkxedt1TDUBXXVAF8m9S659K7jTMvp2JVruLUPUcNkzGNHKWiXEBxvSSidxqE9gunJuW8qRq29SpdXuerCf7W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWjHLuNGzTyGnP2wWep8YtALsFpvtKuca19rVVqpYsSTanZXapXDQSXWT96w1zF1L9yzMHzu6MHXQ9kjkTSUwap",
  "key1": "4D61QNY612TpfoytY9sCyuRbzZV9ZxoVd2CSde2Wy7zVtH2XTcvL4qwktAgStyovC3atVBcJZzmSnDtHMiSN4NNW",
  "key2": "5Mw9ANChczSwgSCHt6FTCLwzxHy48tUBs3Kgyz8m4bFjf8QkyyqGkdQtBRaZJDoraHurt3GY37JvyUyLtpwzVCyv",
  "key3": "2vK49qLbF3e7nMnpeKZqgceCrLmefKSPaiDqpHrPWP4WuJda5iTRpCzeKj9yPhfHN1edg8yVhrkfxQUWdfaL1dGG",
  "key4": "3xaCRrHwJgDAh84DHawEPrm2nzvt1e11Xbyr4XBifG3TCTcx5SRpBdyYRcWJK47rQF4haXNxKeouNHe329b4XSbq",
  "key5": "5fUycxEFJRoPqsHGTbXehYSojK2B2R6nHWq17KMinZdsf5Rg3xbU2xKgYoZxhbJiTbkSVkTgqyEHBWdDWFkWT3aP",
  "key6": "4T9R1TydwWobchT8WhdCJpEgE6ffxNWamSi4rsnhtCc5zGV7EPKivtsPGC1gVB923jHkjkrm9hnYrx2DVK9k8Umm",
  "key7": "2nHcmY3jH7RyGqvntpJJ6zycQe16WEcL3nrjR4knPKwcuNzJxD9Q9Dr9VaMyyhPVQuVcKgZPe7x5Ky5ymAGMNh9d",
  "key8": "5VpGKWa8UaaTMntk29rPv4su69HqkSkgjMH1Qmbm5EXA6vPhiJZkETim4ed1TLnZGHhsJV5UTgwpZ8wCZzqh7CaV",
  "key9": "34xjfigNnbnciUpYCo3RBLpN6pbeXb72LCPsGpJVT9vcy5yoNjEkRvakeHxmLmAoxasMQpjJinJUQRoCFEGwDqMc",
  "key10": "2ckD4KEcd96QLWS6esCpUW1ydsSj1vFHHowzDziFHrqn4SKEBwexL6JCSfhauCQK8E6d6LfCUskecLVV8eM16oSn",
  "key11": "3NMPFsHoWBPhXTJ7abSpfN6gQf3r1PJz2rrKjPjqShjdXJ8GUWZ9JwBkfHPN7pGnqW9qzMzpceDZwDMdt3icNFgb",
  "key12": "2AytqRqdejixL2svoFv8GhPvow5DF6CYJBG2mvaEVkVsTEsv3fmGYDb1xt1dtUG546eMXtEV8mUFEXAFZB3ad2WG",
  "key13": "5zmAp647eHgQV2NpJvdMh5NThfF5wkB4z9Th3KSEA5xyoV7NxXTeFVpzEqNn5LavSNGHPS5Re5extQ1sNAXVGF5m",
  "key14": "32KEHPpH1umm873hwoW69eYbS7qMjSMCokcfcYmaBEHi4vVuMWZgLzU26fdw5CQUxQGqDfeXLeCCtBUwigVHxa5z",
  "key15": "2xLZZKmwqfLEYhz7YTGrQVBmCDuhAimw9qqJkEo7DP4iio94n1YbC7LFxyNeih7LHqemLcXK8SofuCCsHW9HD52f",
  "key16": "4PWcRBsyhfL4orWFpiyL96nuWZTJgKTRsnJ3HG9Rew5thGjbp836gNTixsezVka3VcruGBtAMaeuSCNfL7SYGan1",
  "key17": "3Qa4rG9TS9fcapuSnr7YDrPVRbwXMySrvuko8vgTdUdHA1UsdiyoUJkSqSnL5WrHok3PTEe1jVw183j87vWu21vB",
  "key18": "qiQuwAHf4SFLWQ9jEcjP5qLDW5mb2A1nU7uYLMSchMTRHpBwZgXZyBijqMZJ8df6FToRTBu4yuZWymLemjMagMr",
  "key19": "3k4wbeKsVmZyRSexVUQg239hb54nTwomU4Pv4tfmUs6D6T2Q5zavAjhdMRnppLQLexNmGaEPqTgiVnNDf1g2J1TS",
  "key20": "46uwVgyuGhNeMpjA31WkEYkR1ZUqv52MLSbembUDLFQFrit768rdTkBQJMjukTbANrLTggcRDZTq9ZFHcCzjvJud",
  "key21": "2r177FDZsQK9UZF2rcGWEDGjwM2XAQEfD9KU85SiS6urCWA3RfhffR9gHU3EJWJ5Ypi5KKLsxqyZudEoV1yUCwAy",
  "key22": "3URZJJzikwqNU1o8nr5EaYSh96dayPJ5gHViepbwYXequjFCYMBUyxpokspT4dBphFibccDpjgXDq7XpdAikptAQ",
  "key23": "2k8jCGHeH3Se7i4E9A8jFCgkPbXcrEoUo9E65W9KWfcM8p3UsifQ447GPCwcXAPi1UpiANVa1uv7ne8YPEqc2Rso",
  "key24": "3GAxian5x4XqRR35MvWneQmbKjMNepgDDHMTi8T2yRn7Zgo8jTbC7Q7GdjNxbBJBazEzmddd63i7JPnbXfkxL27T",
  "key25": "5ZmuUnQTtV8By5Vt2AruzyTKNYPHuTBvBxtBsNPoop7Yk7KRGUPaYPSZ4R868EUc4b2WY6RaRWzQ3xJCYBvEpn3x",
  "key26": "5FvLehs2Mu8oE1L3kNaRB8RL6W7CCpdtCgEFXDHFbyQvaFYsLesrjby68LBSxZgFiuTx57BW3pKtivCRhwmZUTt4",
  "key27": "64n6m3aQAzCWYZJXBMt5FcJrX6f4Ro9p5MQr9hK5thc4PJZjjXLyHxdYe9eSxgkpjXRMtDu6yxefZAoV9BKQdauC",
  "key28": "4S3pTZZiEZ2peGZwuNQ3p2tSHm8Uv6CUcUDCygZm9kaewoukyK5kaTqmbCNmzs7GNA63cGDMacPQdSYNwjsdJEFw",
  "key29": "2cKtpQzvKGfXZRrxhjvcBY4h9AAPaATTUdyL9121F9X4pcfMh1N8xPwWU8oJg42xQZoG4i3eqGYEMdF9WY67g4Sf",
  "key30": "2WLjGM3UNhdNinDXKZXRae4s8WxreU1rcp39PSdnf4oFRtzd9WocFDEG2V8CxD1HZSfhmhmojSvVdJUkRdeevkhA",
  "key31": "2igv9y29dUGBJTGbR3VDfXoiBZ4TXNpBh76URpXHtGbxpAayH2325vcvyRE8WLB8hT4d6CxMdCKLpvoRCieZ325f",
  "key32": "3CC7DhFccwWPgMpRkLcHmf13vUF4YjszQ1h1Rm3hiNXjAfSZvrfo5Ed2uaJK8nw1VhGYxGe6Kq8eM81Qr5iwdFwJ",
  "key33": "5eYiP8kTiyouiwLofGi4guWzwAzKSjuAvpFUmMG9VrthYrEG4HymAs7MZi4b45FmdBr5Vvr5k8gNovb8gkwtYjY",
  "key34": "3r1c8vx5hMgfkGSqXo6Mawc7DTEXzwa21czYC8JbL2WLPoCRnoE8URAoasB3fdK8oTt3s22E7Fbc2B844uv8E6L4",
  "key35": "5RmhG31fEGDRsm3QPtxBbRsqBjh92a8ShdAreaFi6LLdr4LUxfrTh5oWofhCRrCnRXXec55ekRVQRMKUJEzPtB2i",
  "key36": "2pomvyWAXfg1qKR57RdiAuAqAJQSJKynwcT5qaqtfPRMdR8HPv5p9Eyd2J8o3oi8aVgWUXtBxDaZC9VhaZGLbq9L",
  "key37": "4wFP3mH8PsbnxY3NCHffg8TiX22SwcDhcqXJGMZDc93bbBw4dZ6eNkiiDgCC7wbuUY7o6RewkGD3AiNdkaPjBUKd",
  "key38": "2Rjm8gpD45SGotSkvxc3B29HQtbe32YF2oKjjsL4JmR3uXiEGfehotSDQqeYtgEfpE73w9m8FDfVphvL1av1uWkn",
  "key39": "36F5CX8NyxhjJjxJmNQ9b9vfREqBchEutUTBJgzLMKF1na1PVkYPZPCWvW3BVZjSAEC7gnB1FYAhXu8THuvBXXdu",
  "key40": "3ySstzaVy7xveWxEMTZi2ZGx2etYqe6ii2ne58HvN69VEBSgLupJuSsAw9icmTrNuRkbfXxfW5zARp9Jq3NbH9hU",
  "key41": "ewhiLVP6D9XeSHjF49TLrmSqX2DCYGRMpYo8my7HtuGzjqd1Z25ak44XsBWCh63XsEHjbpnQmGC7GfVJfR5xnF7",
  "key42": "29339vQS62FuKbBpRkUniyyXrvisz3KJkUokBJrjWh4f4vhr3SKXXxS4dnszycbK9okWxo1mrRmEfSyNuuPZUJpZ"
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
