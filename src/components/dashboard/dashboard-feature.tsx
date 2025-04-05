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
    "3eP8UH99U3qKB4GhZd14E2j1RXusX3k8uW8tyBQkjvFfCodib7xjFhxjhmhQZaGupyVR8EHNTT7Vn5mo6k6L5aoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWY5tr5ykYswGqczDRehfcm7MywLZYXEe7UwcG85i5R44TvFybChdVpt8ugbcwm2td25R2uRNdPKhfLZ9FyC3Fw",
  "key1": "34jnp5pp6Mg1FLsfnbTuMjkxQ4YyRwjfqVFEwV8Vi55YZxAFVZ1Gjt8EM8t4A1eYjjCBC169ukCW5CBJppKxMy1i",
  "key2": "4UnKkVjdFsPWjYr88MmgMvAfHM4DWhzHGhQ9VjqYrFT1BozWpnDiQJGBk4aN6p2qjupYWb5gmJN28Ksei89zKkLo",
  "key3": "5RTrR5m7jUS6FMqCcWYQBPA3GDxxgsQnJKLKcEK6PFYv5XP3UUSYKoGKwmCc4ZERLdir2ZKCXgMiSchFELHqLKeV",
  "key4": "2WV7Zc7xHyCQCKW73paU4cekmbLNHJoNs2DWDfYi1iXCs9ivmerL8M11ywhSVbK6i2VQMxoyvrfsBnBCdEYmTFwz",
  "key5": "3M33qqUqnGSq8cfoz237V6RteMiSbuYLzZXuSAPYxnyxrDyAdxz7JMbhPifshEC5uHdu7oYh7wQwNuYJ8Dw489et",
  "key6": "4qBJXHEJdiSefKYYXJmokjc21qTNAxS1Nhnm2BJfZEhBTVRf4k6pTuFLoQXiRmLoGyvyx1YcouPmQm1YB5rYxAqT",
  "key7": "4xGs6vDN4HasUEFtpCo9zpQyYbCFNrUPaRcbbUTwD24wt7NK987PodFZUZvhBcaS9HJAw3XUB9NKu4dPaBzf218Q",
  "key8": "4mFngMbqyongEkBvPu2yac9TUYfw95sN2eaDQGpqzSru2aSw8jmSQiPBbG68VUTNob9BSCGGuimN1WkVme6UNuMG",
  "key9": "4sPNQBrXDLLYghLBMmnectSrAKCgsgynwuQVbxbtmpiE76D6vSoVpxC7Qrm6hPzCfVJmT44vKVFsLNNMmVzgwqJX",
  "key10": "4MhZaFti3KpkEMJKUXDb6ty1VyKfv5pJBtFgUFyocVTHbrimuzTF4KJaiktyMyJsAKFPSh2gSpKFrPgDjHZLpkXV",
  "key11": "5qB7ptmVbTvAhvocUzYmsvf9YDpePcK9A7vkdF4xGbTiQziMq9Nm5n9A4ScuN6affC837HToyhe3an61R4DYhpJe",
  "key12": "R9aipbwGJGMMb8XmZEBntmZ9gbSciFxq26QA6UycgC1ZjLd8jxBLdEuraAtNBCDZyZPjhgzhxBMURtKSkndJx6A",
  "key13": "4AXTXdy4WpQYmeoj85MjWQA7caGnuuUnT8w1U8YbjEe2WhFHSZwiC5NYP31HuWyiehTpSg2K6C65a39BSGPgZFr4",
  "key14": "2ZzYpAjdoMF22aTVb4Mza3719KfkX8t1RN8oABseg3hzCJZ1HWwassXwkJXYs7J4hXucQ6tATURLBBzAoSacAKzC",
  "key15": "2W9uX3TED2mresFmB1V2N3wBw8MZnTM33qMHk8Fm8DVzSf3K4QGRfdugPayxGcsrhgKdLp1tPJbR2ENhvMVBU3Ji",
  "key16": "4YVh3siupSnWNvG1qJ5iTs8azoCi7r8hHGB3tgbGJsvrgAcpzNMnJK7kXEoTQ7A9t9LfeMetzbeznKw5nJKQ6h22",
  "key17": "2QjDyFGUmf8TBHtbFD1yNW6pJ35Sz2DvGA5vz9TKQR1wZkW6czZZJrJ5wSFTkgw8PrsZV4YRWkmfECb2idRkxmQD",
  "key18": "SW5DaQD58SxRq7tHnpFKyhjnhdCgG6cowyF8daNwijb2kvhZLrBZSyu6CEsPhBZ6RTMEfGD43sZsxf9e9wo3a4V",
  "key19": "gr1dKqkRKN5cU6UYReDzsZdnE3DXjZAm1yZR1kaFiML4uw6vPa9K8J9DVHS86jKVSTYuKfgcgwbegKuFZyZpXiz",
  "key20": "49uyvWSVuAisctYYzMyiAxS4SVSdHAB9DfwhCjwGdTQeS2NrUwK2idV5SkoJusKqiGkZWSBuhN8uTH9jaTTA3QiM",
  "key21": "vsecH2WPtksqaf1SDntnDZRhnqHknHxYSnuHZJWnitjeuAUTSgpEKYJdGezFrLAfQRsdx1CbE2AHEm8f1n6owv6",
  "key22": "oyBRq9dPeiQP7mNnC3EaQVvACRzotJEsRVzga8e94cZKTqV12m2eQuuJfnGPa9GPhEn8SEE7E9RU4cS2vjRjzE2",
  "key23": "3TCUH3zLHYPZPtz2XpJvTbbgbEp5kz5Ko4Ta2HyNmpF2iVYgLa7Kn7EGYZUJhPrNfWZBPZXVXx818Dv9Sr7dNYr1",
  "key24": "4SDXD4ssppf91Y21toCETaDU5pW4cCokGy2R2fVTAM6Sm4Y3fgFDfJmhrKiPKqGAHxa7GSnXZKj9VSDJzMvFHLNr"
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
