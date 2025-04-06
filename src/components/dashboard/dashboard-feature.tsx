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
    "3AHGZtTq8A1QwEnRouJVMLSiDXBjpp4GuKFL4bcMhpG46QwrHkGFUoHv9542XGpHSca6s3rbdENVwGLomJ1ev5Mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Bnj3uGWnYdsEHDdCiMAB3oUMN3Sogu72zEoNqawN5hZigXXpvmFPBL1i5CAJoLu4FSUbTjLe8LWrkwQNadaDbt",
  "key1": "57v3T26C9brovYQF2fBjHPEAQwacqvU5MFfV6iUvou83FDzMCEr7NZs73ayu7xMpZqkr2TC6ZRUcyLSH2M9ZbJW4",
  "key2": "2xBB2awenwEiCpjFELmJ9Se1PA3CUN661UTdRnS7waYfJkTDPHYbrVYEGD9xQsJRRjbo2DB2CpPptpqHAB2txNm7",
  "key3": "4jyiH4xkwWKveaVeYvnjNCwUH2Fc5jkCYAva74FqckCihEpKWWsAiptdGbQrvAprfwPhKWZVM85jqzbpS2C1Mo3f",
  "key4": "MhAZ5BrEnz7HP3WqxvD6mMWMUGyMAr8NU7GRhJ3M5Pm34is8WGTktDRdiGm1Qku4GPx4WceqAdYZwTcVMEADzVh",
  "key5": "DegjDqNSrKvpuSAftF2JeorAZzJaFP271y2GTUnnM42am9LCgyssE2KrT4GPe6X5Zq26svzAkWukHpX4vW95XDu",
  "key6": "2SLCKsCEDsFQwvrq8BHSDV8F92H6cEmfD3CAGvqWVK9GckrXXtqnZg88USWzMXmyZ2k8WMN1WPgaRiSvTdL4urM3",
  "key7": "4FY5fCFNKhjgkZqMcVSfb6PMFoiZyEiNEj2sarywZ5C1H3to93YndL6fnKQMxAVY3wZ4bW6nMpZY8gQe9aRHHSqK",
  "key8": "5GiQ1mSPiq8efrcKMCFmM7nQi64yGNu4DpFMRcyQaxsXicG4waEo4uoCvwgcnVRFuWuVT2HKheyLyTqmZ2FCZSNc",
  "key9": "APkqT7mwLwojntJnuaXKp3X6w816B6Tuy6jZj5KADTJYtt8ETsaq5GZ6FH1vPS3Gy2xaMhREuLjvQfyQxuVNpav",
  "key10": "2v8JqjpSw6HHQF78i35e1WVoHxKEi9hjr1Xczrr6ppCXy9BarYDYaLKFJGrZXA8aEPLpKRkL2Q9bKbwrKVy19Bck",
  "key11": "3GusSUq7c7xjG86jJGv79PhX14q23wzMppXdaeF4xgCtxPvwECV68p7SXDmG7HE3SEf6LWNcMKhGpgPVhWUvJmV5",
  "key12": "4YVDmqCmoxSBE9jebaPMYeAT66BoLnhW2LLiqSC1MBw6p8SzcVpBDuP4yEWp7FDP7hMq51fPkMsFG12e21jffww4",
  "key13": "2LBoahZy5M6hmHzFytYQ6bTaKA52LrEgDLAUHqRm6bt2GpYNU4bUqt3bcpCjQTxXQoB58fwJunMHGejnX64KD1cL",
  "key14": "4mZGMFZQuGodzGWxx9uHqrqnU8in5tUybZd9Wtozii3W23jHHYvj3Ncr1UgvGKueyghcegxMpzga2YBYXcTW2eAG",
  "key15": "2sBnhQNTCmt85R64EB9Ljxm1bewbfEnrjNgjzi94Rgv6Vr1sq9daC7evCZSBho6Fh1txXaa68V7LJibg8PCvfSTV",
  "key16": "5wCL3WH6E65XKRtEy2wZy3mFpTfSe2YcyXtCX2WYR6znGrHofkBnV4dAHwb11yqf1djLa5CyYrkfsYYhR81e9RWL",
  "key17": "4oABHnwcKooWRJFEsPNwSZyCMgPLBtCR9haGTpjHcgL1tbkDF1C3gkLwa8PY8zboQoCvgG2Hg9f9dgDaoRCwPj2Y",
  "key18": "2XL4UHg6vX7gjQNRugJ6hEcBEtPK371jTm5beFjmr9nVSfXsKtKaRRMvpBP3QxPsKdWrN25dP1jvrfq9HNCECwgo",
  "key19": "Lj97NYQfByTGGeEWR2TaGXE55gu7KAW4DbbTgtLKSCpPrxvteuThu6pdEK7Gi7LWRXf2HTRokpJphuVAKdH7f99",
  "key20": "5VU1UGpTKSDnBJfsmZoNAWRCjkX8kW6w8Kg3SgMkXScrqnvkikxn9vi5D5TFJFiTjbQkQ66CSCthFgfGDyboYUx4",
  "key21": "TSY4nHkeUWd3dLbetYFYMTJNZYgmLjZkcN2c27wL6PShJRLT3Rx1zGyP2Qv1sgnNR8TmHAJvkpAYJZMq5YphqSS",
  "key22": "4oBo48Q1xp54hpbeBioVZPkgwLpgfW3HnmAZE2znZgbSd8apdqJhiCnsJs6Aa7nBB67e3QmiPsy9hFhJX4rsBaXU",
  "key23": "2AgDTMeJoFrAtxbh9133qsJt5rdk6LvC9Gdviotn8Fhq4gU4y5vc1MKSsnZbPzvHCXHG8WhUWbjfS38mmWXu3tW",
  "key24": "3omWTfbApRjnFuNaeaMTwmmcaJhS4DKgczgM3Sj9osm8PV8K4FTwMUZ1RxexDcScRyQSXTj8Ryoh6YL916TtKeYJ",
  "key25": "41EA35gpMZxuzaqkg3kWEZa5dGGgryYewRBFyioLeaEBgngQ9sdRp5LDHAbasGG9R7Bud8Hro65UWDuhRFavR3CQ",
  "key26": "4P4SZQd2qyuyThWk6254wemaV7pa5DPDcNjvS4X3WjCCKLLAHsKnkuAKoQ9d7FfjhrSDsxU9jWEcKw1qU7CZRnKK",
  "key27": "enPXdeHrKvQ32SpLrmZp5MHdJoTgCsnbv4nGPsasr8sPYQCJvg3Yi4vavUNf5hL6377iE8GD5YhDxSduAqfYg9e",
  "key28": "2nZCdHQDnc7anDyVXWYdpgYtMmq1MdEiinyrARW4UotwYAEeYSNkHmgmcVLCmZG8YnZgWHDoek2oDydk8yfVGmJG",
  "key29": "5WcxdX4HyqamqmPeywQKxssfStCxeyBtJ3iKNWTc6pCMDx63Z1DyHhaWWYTbX8bF5eNYcLnVtz9BWDhVCqASHntt",
  "key30": "j64E7Kc6p5eMsJ29phpxJCzKRpwiVfqjJPudMsWirJiu5wsYE3cehciUKbMovZynaMq2C7JLbrfAkarSNGJL4DU",
  "key31": "5C9iEtdZ5aBY4cmRmpFXogwagpLBFQd45ZpnVgCY9DL11RhojLgkTvLnrBxqy3ibvitJ6TrieECDgCVyuSMVaU5t",
  "key32": "5TkGbYVU5zh9ESn32Zi1arUYZJZWNQTdkT2Dwrc9no5vv4tWJH35ZJfVTtdW1uJ6fQL9eZPEV1NKLTVQep9ht15m",
  "key33": "4NbKaMkf84j4KyTQtSYxkVosFFZnsw9EeFoCcernYt8i5urzNGh55Epm5RuAsUbfQWWbQQ8AkCisXBmN8oxQ2WzU",
  "key34": "2SLShsjEphzxmNbyNzJm9tPoEeynKVwtFtceyYVkTuhGJuy3yprvuu7ukSzPXpkxAdgibK2Lte1xqJHBXjkeBhoa",
  "key35": "3N8dqpxA9wiUFBwKtckze2WSfAQR4y12GP4FbZ1FAocR7QinJY33zpsEaENg8SvoPvAYr88YZJgKNeYdUK2anKH6",
  "key36": "E47u8MCu5bUy7Me7gp5CXTR2LLZiL2s6Nmac9YjiaJ8ox8NGgRX4Eg9ivVUatxBuHfeRux5GsALLhv1oPAqtLAu",
  "key37": "4Tt4xKRrJjQgQ2WoAb1mxP8J3qXooHHmwXPXuT2R2xsNJK4siidSjN8CzgKCHG2qxfnaqmfT3QXtoMECWJ22SDhA",
  "key38": "3bBCKC8W4BaP41pienLdneZdSbZ9xLPNYoBffAiPzZASA3y8jLxdFRb9xennCzgzjyFr7RXtfuJ2xjKu5qj7KPHZ",
  "key39": "2D2VFyve18tMx23C5Ca5vob1brfyMoDkabEDhV5wfknWm8Ng7bNfSGQ5Hxk4cEosk8STuKmEM1EYnR7GABCDKLgF",
  "key40": "4D6BNKAhYfi9BTwkcPkc4X4wJgoL6Hv52rRexhSw7eFvqRPnYBce9WrGt7YJFsX2kQhaNZLohxzQpCrAZLfiaHT8",
  "key41": "3E6tS4q3uyGWye98zQeQb2pzVMNDYmawRZNPqwhK6vx3xF2oFk952py9pqftoy3aSPECGFnRuATnFauR4Jr1zrFR"
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
