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
    "pbGcSaGdiZB2XLqbSXmeE2H1EoWJBYXH6Xcpsfe3e5tNPWyyCVNEEPEspKDzdGV1bFEj9QhNtmrqkVqZJc7bTJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zdwxJG3W4ncbEVbpy7nKkdJrRL83GASeNfJK6u5YtsZGt9cktomvkP2eu5WQBcTeWjVszWErCy3n8R8iuxHMmf",
  "key1": "5VJZUkY468Gry865BwdHNx3LTQYKF9Q49xKXVfGpihwECuoyQYBKRYh5JBcy51GYstN4HbcKZb8qGjsk7rjcHZEG",
  "key2": "5iw6jbuXHQ8nPjXuAmS3ETTmbRCiUE4zkFqS1ycDVp5GKPp1PChyeTFR66yGot2U7fkZowi3K6tAuJDJKbL2f1kE",
  "key3": "5xHPSRitYBDZ9BaggFEHemUd21EVhqDfbgJ8PoBU8ViNJJtS4BNwDuPYxtCkGD3g8u8GUJQh2P6fwLXPgrcN5RuB",
  "key4": "WA2syMF4Bpo8bT4KNgNx4Uihuv8A8xo5neebVoRbEohUBcJnWX6k9K2zYJeSxrE8VHJ6yt6kKvBV8FgScYr3oX2",
  "key5": "4ieQok8GHp7Fbfv5GmEEkxe4GogLB6Lq28FW1K5YxhtDQjRK59bF2hHVjpy7orTPq8NJRnoabrWCwfpFpgWU4SSN",
  "key6": "3bS9LrwSmmBGapm53WubxyuugzgAfAZJAGvQAVpz4gCemwmmx1ESaz6Rb7zY79aNaE4GmZtW9q7FQptU2sfffsZn",
  "key7": "3j4Df1YJoz5Lm9fmqHRHqV8QAFPmWjCLppoiDv9E6Kz3HD5meAfoA2qhihvUjVw9oo7VvEVTQi9x7fABGJZxkQPX",
  "key8": "476WHQXxTboY8XaCqFivcoH1eMGD98fVBzAEhXgppYd3DpVVX4wF1QXp3w4ykL9sYbFtHHFGVMjDeJk52g4HZYUT",
  "key9": "32mqNpfMquhUwixyuPmHqfnq5tLJ59xruB6XhA4KgDRvPUc1v7bt56Cseo6q9gEpot319hR259PyL3gpjJqQASyX",
  "key10": "38R6QizomEKxnV4THLVhPJSigHd2E2H8ds7UbfVjP1oFiwFpZrtio28gRKC3gWmQohFJkjPmHcikREBbuEVrqpm1",
  "key11": "3XbFiCCwhXnHR1XkK9o72JRsGnNs5XvLcBt94RGx2PnSMYPuqDSb6GaZUwBKqkBGTs42jw59BNcWJxuiHeg9nxtG",
  "key12": "5shmhwXByVgrj1bUsUeGF4Wzn6mnwfr6Xif5YiRUpUzWuuHRVUc7Kz4CCDDwvsdRfspc46HoDUEymTTgNApkP9ev",
  "key13": "2vZsYui39wd3PBx2YGgcDbnLT8TykeSicU2DNed61FMV3K1WgMeV5nMy6XBHPdWoGXFpVv16hjeCuE3JoyLevuAJ",
  "key14": "5tQxPgmmUYqHP6emQEfgo6p1o4ocjeNpLScggPS69hNV9AaetviJdrTvHBURXpEHacu6CEme1Vze3K4DKs2TTbhs",
  "key15": "3yjHudHrpnH32gYjTYEkLNHQhZjm1ao3dhEbL7gVS1FTqLoQcxwgiMnACCugB4ep2E3qLEUE2P47UJjLvzuiYhce",
  "key16": "2BaWmjTVutHJhGv3FPmYiHcqjSnDBV51xF9DGvEcoihnWycecshV6yzqdUCc17KMzuJr6a2rBRLghoHfufpPY7qL",
  "key17": "23tzn2aW4mFFhfoHfcATYCtJgNannz2ZdfVcpoBUoXr8ewVb4ceUrN21wiJARruPsDnVEv6GPSRegQM4ZpvGJJdN",
  "key18": "9GxXJEgSQkv4Gq81S2shdv69wSYaLJ4FxAuF4EXvUYL6VbccKaqiKci5iN7qnQjNdGZkP7nrY8LkSS4uiBXRFQa",
  "key19": "sXdEphFxmDprd1SWz2MLwky9abUL7s9YaZQWPZqYxRKLYqpCaTc8qEvthcPAVnT3mvbcVTYABpi2EBJezo2Ueqx",
  "key20": "4jjtEYXCv4ixb6u6PDfgj1XRFE9MiE4UTJx1pNfXZC1WXMiVRWw3K1eCGBjoaPufsi83FndNFQamjMDh98p22nMY",
  "key21": "3ywiMEDJHbe1ayWmPfbc53phYAJsXf4gPJerBCqEGv3s4EPTXz4X89Hmcu6w6YKDNFuFXBWSMVjrvYfUWvFrkUJP",
  "key22": "TcenFgt8keaUb5K4FoPqVj8pAPuWmKvQCwfJuHnrWawoLe3beWJkk5uM4SaKLRQdeBJVUa6DdHyq72oYYY211CS",
  "key23": "4pmG1tsJyivXWeAKosmDsoXPKdKJtYye26hYRNqJA4K9Pmjjdfjh2maSAW2Gc749dtqC7EiVSNRuNcjfoXPyfii3",
  "key24": "3znhmmpUsRzW69LdUbRFw1TdztzGRFAnMxAZ8qVAtyJpK5T6Bb5VRXnSFeQfCvxyHYcrzQfesbKzvYNiydV5D8VA",
  "key25": "61MQnqa3UQV6ogzZrFzkTBRDedwXdrdW2Z2dgaPeU9uEaqaiEoUEqbF3i8zumKst9TsH6fH3poyPj1LgDZouPF6r",
  "key26": "45yrWGJTgfhcm6QQ8n6KebezgDQTWUPbb9sEhNLfPWxWgexwMkZm2BUC8XeZmnwt2UQepUKGpiHg8Xh861q7bXAW",
  "key27": "5GoFfmFooYS3kvNMnVrSzDfgnSm2fYhKF9ht7kYTCiaZeDZFuRguDaFqR5QqKSMCmTNfVo83g9SMEiB2AZufqWhi",
  "key28": "5sinT5pMpSPNbKzRnyZxDLEwuea87Bt8GPVvZatkLQC8ws5SYQQHX5637iQdJVbCbybm8omonfQK3GtQcmt7RDH2",
  "key29": "5vFU5T38uH2HFbQLsG9EErnyRmytXToc1RGEuNx4NhYv3dbe4w7scS2xZpsrgqVf9RrmJbQ7WGXiFcDddJzeQhup",
  "key30": "5QeQQfMeUAzXQASKHbsP44GrifRJMbTRog4w9r2wTTZiw2nqX4z1BBWBqhKeVE2GLn2kf9b7BdeZvaffp9kN5yH"
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
