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
    "3yHNj5pR4gcZurYSUeXHw3yXtpQPFpMvHohtsTwJtKZW5WsSaidtAEUFXrJsmYpSmyKsChDCBGEAtRCkJt8FRhen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gXPjTHtoRwUkfov6Q6Rf5ojT18iB5YmExRnnmvDFgpMDDYiEstt4UTEp1eiNVqWNog8EZeiavbXSsAqkPfhjTTj",
  "key1": "2DkCYkvbPw3VDz3oXrzKZib67r2jqhKxtQZU5r1NqSmJnjdQDqi8becU2UzassdtZph7V9H974tzVdHZ8QkfAHtR",
  "key2": "4WC8kjDH2MEQou8uPnLsoHRcecH7fjRihAQP2YUBJnonUVJLNxk6cqgXN6t5Tk13Gw2Y8nCu9xkABDn58yjkRTTJ",
  "key3": "4ApxMc14hGfmvGkzCLy16C89vycqRpKgChpWifyHMTTCdgVoCSQW8W5qeAiE5Zp9q8MHM6SMFwNep6GymWkFNtjG",
  "key4": "2aTamRPaaX9Gv16My1gznqUy7kajBjKRav68igzFA54HRjX1DnxUpx5tnqSUXqkhGHisRSa8wWnqd7U5ZzfMiSj1",
  "key5": "2pcmsggZqR8fyWGUt9wtRUNMUorE2GC2zenD29cPPfGPrkc49Sipb274mjUgwKj9BGTnk5QM8veTnVmKvU4oZ9hQ",
  "key6": "54ZkFini9tB8JEXTp8qU7F4dC6R1hXNLoehmv51auRjm1qmjzcX697BbQ8QRGRRhmqmQTcW4c4SzpvPEHnn3Xnbi",
  "key7": "5c9K7jwxoREPg2Lo9Cfu9kf76n4pzdJKiBbyPKhGgbMinxm6g6sT5WQ4zYpSMv8AKtfZVB7wVdy1Dx3oxXLM2Sk",
  "key8": "5UeJAA1J4fD5U9gjRYfSZCLKD4Ba4cNWHrkAFs1trBPircFXjY7DkP4ZDX9d4UBLFSwEZbmW6HfaHsFrJEPxYgAz",
  "key9": "5RnfADASrKv8jxUB2JEP6iDJsPQF2LaAjGee4enHt3R44ALxD5anErgAWE3dGrfgA9mnoVTc6ZefmBWFRerqHdQb",
  "key10": "pUZi5bMttB3JTEATgYdemXQqBRZZMZ4k4zrHgdor7J6AuznYUvEHzrEUuAKwR4r7NV1EVvPm9uaxny8dUrTNx3d",
  "key11": "3zxW9LgLmEn9Yo4P3KYbS8CpvqE4inqRAooCbLdLkAewiujPnGszzBdje7UdCqRMjJEMXKamUWck7J71m1ouUJ2a",
  "key12": "47vfzpXdaey4bkzHCB1idWBbnyPTdk1rNpmzPjRkUQDYwHTVSD2uK7DGDvwKaKejRrkRtr8pjnxUbNfj8wDZhq8f",
  "key13": "4UHcx59zjba82EksGYVk3kNp5jHdFHCovvndLway2maKku4r4EqLyWfyWWnwhqc538pD1BWgokyVeDsdAeBkCZQc",
  "key14": "5Z8gifMT3cgvis7wE198rPSRVWdwYcFgB5EDqdeqTzSNEAgNFCCLHftdFokZgUJYZFHR4E5zhv7E6foJRJJ52AJB",
  "key15": "2L1fexoZCaeohdu7SuWcXu2DhfYSfFhtNCeEGnMHmhVRcFwD1dT4Jd6JLhYfJHnBYcDuTZeMfihfEnq2NFPKWFjD",
  "key16": "4KaQ1V9DHb1datLhw3PSqxHimv6h9VgFG5f4Bo8FDxawE29Hs7HD4opEbPoQvtvhKpE6YM7mawPfWqRZTv6j3CcU",
  "key17": "YZtCW1rbH44mu9cXfWwrXge7QZ2LoDbasdFGg3iPvVsNeebUfzjCv9dFWwocS6RJtXGvaun78xcwJrBy4e1BwL7",
  "key18": "5j73FdyaPe53QzZpo5kDTrQbAuZg6ebNS8JLixVxeqB1Rkug2xxfdJxSoTmPHRF8PCKhNjraSodFkSW25fAZR1Nv",
  "key19": "5CZpmMAec8qLsat1Hc8u8TqE3tYkVHTtvLwbFL2FEUtMeHQVepHWUjtwBDFubegLgFnH1CV4qCuBdQpHrVzC6ZQ6",
  "key20": "61AHSjLHrczUv4A4TC7UNT8SqCrbHkXxRTnSf5iDVfS6nmpcWcLmm7upE5cnd67fEzmJUhdFNt4ea24qnVrzrUqa",
  "key21": "QZfVsoT43Qz57jqUWmN9rFVc7apnRp5ZLKCxDvzgcrVrx7CuRZSvWNDREDkq6tdgQx4graHtGGwTg6Bg3X9ADK6",
  "key22": "4zkyDyfsZmbekPWM1cYk2uvbbXrLajHEgRXkEywfQ7wUk64Wj2BJfTUXLfNCCo3Lj16h2y7F8UNh676wio4casSD",
  "key23": "3eYoRCmPLgYHUsk9xdMqmMStmkaPXAegLLuBXFSfJKuV1YSwfaJaEpFfMZjB7C8U2GmD5vb63qcB88gMhodEfCuM",
  "key24": "2vg7gyLTmG4RPrHLSG8gC3wz8rhmY1aJFn1D7PttRkgSQNyvZrVWX7ihW7xYHgAmQADWFuokoaYhJoJDXHgbvsyq",
  "key25": "4kJrAAvuHUhc55YU1wBPENszvYUyapgV8Mb4vpN3Cdwgcv9gvuckV7RMuL6C2AjpUYxMSJ3ffJLfFCgNcsojAyb9",
  "key26": "5D7h5Zo2kdEKqhpEt4FbmF7cHu75iqWViJudtnvNmX6Wa6YUWVvGKUEou6m8MTKDy3F9fYwHnkvpGBqZMSeMFWRp",
  "key27": "TGnFF3DRksr8SMgv6Xvoy1B8QqHxa6kF3smaFSZgFR93Dgh9Ew3GWGVSs8thx93BhckAi3uzgDc55vykhfxhUcP",
  "key28": "2AHtKGfNs7krzcfAdpsz9JofK7hN6ZP9HhMrqzM9hPCYtzzPHRepxBBapQdh4ZTUSL23GSRwAodz3NQc3EH5skX2",
  "key29": "3tCDJULYd5fD4pQVTv4PBkZBWKjg5tzBA79ptatJ9qUHbArgNZSpSQ1CfKWA91KqypixTt6Jj1vw4VgKdEUM6axg",
  "key30": "4FJ1qVvseHmgB33q7NGXiez4S2Rs4eqcFJ8dpZiW6U99gnDzAub4yUBLairi6EyJ7ZopXmMbaWirGJMsqEZdET5x",
  "key31": "3yJMuqH3WbQppf1oL8D49SaJXQhDgDyGUCfQA2eAFrQz2UWuPh9dDZpMRpGB3s7Bn7fgKX686oG7XQCCDt8ezXWL",
  "key32": "4ycLdtwex2bPyd7zeGkCojsEc4fkfZMuZmMftwMWith7mg4KMMjJKTXeDp8p8MGPXWyfmRPARczXiwZgXAWSNAMT",
  "key33": "2e5tmNXX6W7KUhor56XW6JxFh2Xbu7SpcdcwVTPoJeHqpkuSXeEfDCrV3J6WUKMVorf89uT45iN6ECUt9XPxZMG9",
  "key34": "VDpmpv89Nvr2brtTGPyhiNSxzGwH9fmPUm2J3JV1uUQz7mEfLoCoBntM5Aox5vGuCLp3iBnkLcnDJgCFDTztgN8"
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
