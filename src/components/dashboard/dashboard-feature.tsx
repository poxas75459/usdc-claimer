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
    "5B66LYwuJ2tCeX5f3mDkoUfv45CB98hr5LiVvMVaN4ywpMAbrLQj7cysvnY3UmP9aGB8gisoxQaATMjBF2Eije57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AJr4MBunfr9CYdHnfetiDjGiH1s35erxuG5hKpcJiUvVCq4NvUpauU1QuYWkm7kNggSj2fwUGZRGcfRwDCxLaKK",
  "key1": "3ptADtGKKwNND7XN7LJ68X7ExAphS3U1gbGxVwk7Pn6PSrF6SFWT3Dymu8KGN3EpMxg3RY5B2pKXGpKbn5A3zEgQ",
  "key2": "2qGMVoMA9wXyrreLP9CypmCph1z1SKaGJQiR3ea7PCvvYeCHNrN4aTqFmJHrvArSsW6PhykxwJoHHG1umbMUucfC",
  "key3": "23bmiFnKS5ajc4Lj4BeWzyxj9Tg4h2aRxcG8PRQ4hUzoD6iV3b5Tmassa6EvdrpXRAf5UFBwF11QuwEZt2ZkAd3X",
  "key4": "EDj4HCXtvYYgoh1FTiZuEr9yH7nn6zQyQmXVtdAebsqugJ63sye68yDhSgWNVa9WTwoPAvrA5Vi3QRsUDUr3soc",
  "key5": "4JEYJXvpsUQVAW6uHWGdM9icpQzDpvM8wtLSFx55D9AYaJ1QMvfA8pyaD3SntDMsEeGqiZaFQPGKLgrjrrNDETNf",
  "key6": "3EyukhBbwYhyx71a3YUU1SzqDYWPUEWwSuuaxGVSNQtKqvE9wbyicBAoPPwRwW63Z8PhoGPriBBGZzwvTqMpnmTF",
  "key7": "4CmkYTiMj3LrVzkaPLhA7h8zW33ETKCvBJxWaa6YMNrVux5VsJ3q6kKn8neqYrmm5y1SxuFpGdRc7TgcSHVgj7wi",
  "key8": "2BHQP8Jd4vP1sppCDu9WcyU6FBNwdXTCf7czWebJUKqSXwFR9iLgbHef8JRpoEQizm9mvU3BwvN3pjt1GGDteDQz",
  "key9": "4XrtHmS95GJg1kq65kQYzmdQY4jH3y5ZtqL6yhPs8552sTwQECqtFMEoGo8whYFajjNcikR2JbUWbWSXRKwikiqT",
  "key10": "2CyWjUfJd6PRZqCKtZciWXfT34H7SjjWtJmUYfcjzDgXqNbPtfe2snb7Xu9mSa6LZbAtF7CQaBJkEZ5pT2BL5ovC",
  "key11": "36QThkRZSvMbgrTkqm3jHht24ZVBCA4fhqNSXCDDb7xvvbiNo1tJkuLxqtnEN3JiaNssqwgmPJdMDeQp8QAr4A9t",
  "key12": "3JXRc8MfkakqP2muvxZsKEECR8JFHwYAiYysEs2HrkNBcWXS1wU3Uvgoc68Xjt7D1SBJCpERUQWyVDsDNrWsLkVk",
  "key13": "5mjFX2keDuvafFE4VpPMeq8JDnmfHrPrrGrNGQMZS22ix728uQfy1BdLqzst2DLyvWBGSv8yPVskZzmg74ESbtJM",
  "key14": "n3WRYQkboXNHXxAH1kg6XCQyyFyjTywejDiT2JuCyPg1e6fEv2Ysc2B693CcfnrzY7zD9bodNmkep3Kxk6Thc4H",
  "key15": "2ffvfANzGsDJr55iZmxfqMVZCy7k83yy5WmBak7CfFaMYvfAb6ij1bp6mqTjSi5ooasrgdAA4i2AgeXMMfkwgroV",
  "key16": "DxkqvoAEUsRaoXUQZ3rasUc59SKsxixcq93Js4WUGCVc9kCT9phuUG1houps7vX9enX16wRy42WWXwhfHQTCgJM",
  "key17": "4MQWPGGuqiWx16NZm4vyZYsVv4TUHwLwoQL4MDXCZzzW4qFCJB371u1YPUwmZuLKhJ1QoEGq4YWQgMYWeirzqeHv",
  "key18": "4NiZnxmEX8R51vm3kihK6XNq4W23Er875tLGEe6VxXxFDuN66J66T7vusfLz9fQDaGBzvDo5UuVpMCjfs8b7koK",
  "key19": "54KtiBJ1PKcD8nSBD2rD1kWdyZz1tVsb1hPRJxTWbtCmTm7qxcyfUA3L1NbomcLQ1LR7YiyMT7zGHdgFcE1s1z6D",
  "key20": "27UTVkd5euEYr1NNzx81eG3PnRizPfdtUbjQVBo3mnRrPorzKhXmxE8EjVprhsFgbQ5kbCygBcQDvzkddp162KnU",
  "key21": "2cctLCtkPic2zicK78o7H3cXb8vEh58mPzDbJQpMsDgpvv9LLkTYh7YsVvsMCHXeXXvzWT6FDXJ34NC9wLFzmgaV",
  "key22": "3roQdM8tMeSirYkqAk2QC8JE1B5eJdSAvW5wqVW9r1GJ113W1KenMpDvCpuSX1puXz6RtocdMNQ7THeVWsZTQM97",
  "key23": "4Exjvn3zzecR4WuqiQpdhUwHTCnMfeNZj9Cx73dcEkSLaH5cfXDZocgpaZofzfYC1fi8amYnrYmHHdPKBMCt7qrQ",
  "key24": "ybK188EVGp3ftXdADffUzBYvUPUCFtH4Ud4ZVpw6p4JForFVPPCLUhfwpRfH6aXmnUSmGiCfEKCpvHVEcJEb6s3",
  "key25": "4cTiEYaoYMTaxdfpnVD1ZwppqGB4fhd8RqsJW214kdFSu5z7jQCqaBZrbeYakKLyY3BDH6CQAJVgx7hRCUYExjxc"
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
