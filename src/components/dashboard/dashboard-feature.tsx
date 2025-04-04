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
    "5ieS8qEbFcLUndEKzBYfsDEEXRycnXHvbY592fo9KBPuhpdn1DLgx5bx7Mhov9VvAGGTtdEtBuenuE2vBwbMqFhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DiHb6gU1PYk1VghpHPdbu7Acv6ZyUpZxUfUcqdVm9hQemhmi5AYWXsGyiiHpUSHsrVQVsaF15AFDQGXutAxfyEC",
  "key1": "3nfXsZrnLzi8DHpvKYnVim8BQmKPajXQVAHBUZGonB4A43FjfHrBwa68mavgspihWhCJdeCtzDRY1w5hLnUPAskv",
  "key2": "ZVnpnUh8fhoodm6QiktMu5eYy8xSWfqDKLGb3S9nsa41RzaESaUPpV5bPnpFrTz5FYNipSVxtzBTTe4DbGqMRKr",
  "key3": "4MYm6nUfaHFPtaxhiKrgeCPFG6wqPcR7YL4Jw8Zpt6dHes8vsfVAeczRK6HGB1UabPVd1Z2BZVHxndxuVjdLrinw",
  "key4": "czyH4wznfH99AsVQCsooBC9REQfN2K7yHcP4h8eEWVYE6ZdMN2cT8AYmacdB1CzuUtGTTpNv9spDiQQv2pS9FWi",
  "key5": "3Q7wkhUR5YJ3u57t8W4s9F78rdJeqmHJgHhACedtwbgdPP8RF1e5RdpGzgbJu5R9o2tQtL5W1AjcepSr3gtvDjAb",
  "key6": "5DFoJ7o1zDkk2XPPFXWQERWKMpH8oAahtvVwKS92ZeyAyUNKpfYe1yqZd33uQUsonokcFXTUzq1gPKkR4R4E2qwk",
  "key7": "hMvypCjqB5JJJ79exdqm2raoCX9FjxhLNeD74mX84K3kP956YXWPcRQT6qVKov1zmQmahFAXtBAHpkTmkerCjFL",
  "key8": "5GbqENFP1VBvjkCgfspD1Z86bFGwjmAZdxbNLdu3zWtREDLQmUch6uMcPZtqziXAfRRibKFT4PCXjxVW6nPW5HMW",
  "key9": "37xKWxsLFYY3Gu26TgpxWzxFxpwAjjk4t28YiwLSTbMd4UzURWffan9CnEzVb6PWBVrzLnhf2xhrkxzK9rmFNbW3",
  "key10": "2SMoehGuvNDZ8o1TaaRiesj1UMUWXpQPBgZFPWy6zyMnjMa1E1K5bnJyoqjZvxNs1s1vuoMKDR8gV1gxSojx5AE8",
  "key11": "3WrE1fpgUDwcDx38Yakd2bpoKHFW2WzcWZ4T22E8YUCe65HVtX9LMGA8dJxp52n1k5cfZpNR9yCKbC186MhpBReD",
  "key12": "3EtfgsD2WzpJsM7W6WGNmoEpByf2yKEMfJ9u2YvResUEPZFHG7P94mPe1QvyEbRToJScvpW2RnWKSB7R4CFpwSbq",
  "key13": "5FtW5Kdcp2LPj6KmorRwJUPypF13YdrVfWzZwxLMirUewrmw7jkHphWWxbZ1kJUwt9CyawjMN1tEC3VuAdr585kw",
  "key14": "3rjhqd3HE2NWabVTcaXryAvoJ26rwEo6ozdUB97AzQWz3okcXgT5Txrp6YXGYPH8BVrrdVZGwEDkwHbEqkaK9xbk",
  "key15": "5RHrGg2hQVLfsCaYVVWS11yMBQ9mLEuCjLWG55APBzT1Zk3NFBJsvCor9Z4qtyvGs8E2FjGa3KvYMjsRWmJVvCdn",
  "key16": "2zSLKJt3BdxqKvtus8zCWUehAYcWVMYmZ9wjHtw8NC1p66uu2AXwqGPBpiszF6Ufg2ZhRs7AgRxGTRyz8mPFrKdJ",
  "key17": "3GDnPt7cfsPTL7NWoNZvjnyRzJLLM2DuW8TVLHMSgw8tLK4t1ZLGCsnLSwaWrsPM1Mo5LhL5RQife6wgFVAGdZEF",
  "key18": "3CwwMsi9Tzo139Zg7gD5jtfcHdGr6UvWo1U28gbBZS86tqc5sE8Tfd2g7soKDb6HEHoVLFeMntjvV61WSYLNPDuE",
  "key19": "5LPqr13DCvQ3vNuCE8jHacyN5NKYK78P5UhBxKjaWoajvRgMQ97AUUdHcLBGkZ3hwxdFs3fBFmHmpCWd6eggSGVy",
  "key20": "2yAGBDmiYjcHUtxAwWPmfkqmLx9z9pdYaDvmqrHYpF2mVz78jy91QazjwPDyqU6aNU1bTiJkueH1kweQMR6ZMCm1",
  "key21": "5wPKCL76bfRbHLLnPL58LrFXiaT4LJZbSR8WhGrMD8XMT79zVvRbtATgtz8YheWXYLxwmKaG3FcuyE4Et5wmQphD",
  "key22": "5zBoWDn2oKRUKhHvB6RKxscyycXpudicjhqt2N3V71sXkuZfjvmeu6Q5LxvciFiY55VwnN3zNhKS6pYaVJq9rVNU",
  "key23": "2LiDZdafE55wy2FVe8HF3raJ7mfyb5mVShZdXTwbynvpWpoTqxzqbkNFGTRRY9FdCeGY22HLEKChohiTHHfiiVBW",
  "key24": "3ZUgMqgBKUTRKcoNFD4MKLA8MWyjdMKKr95EiGWUQoDuRSuo2USSN1V98UTgYAdYQ2UQLbLcZxkdJYRJoDVy9mwj"
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
