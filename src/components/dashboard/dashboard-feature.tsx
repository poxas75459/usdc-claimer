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
    "5at6ricUCUPU9xjeoJQMbfKj6vGRqat7uDEykD52iurL7qNtK5N2GZcqYTTe8hzdDWddLHSS8iWP8hj1UVEK2oxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrVx7oeeMBosrS3WF5VdxwdP6uErPBacMoje73A9YEphrhUn8ftndyh63rCnbE6Z2ZhAnAZgftYFNPXW5PmEsWC",
  "key1": "2vAvBkCYUfj4zpUEo9nwdidxR3q1HjWPmGvTdtx9grNNtMYLyQvCrckgV7sY7bmvo8yJQeCW1BbwUsymudMLLJog",
  "key2": "32SQTW2RU2aUN5fUzmkqsY7FMKDyvwJjfcqPMNdyYBC9eyq85U4wQFyZxoMTZSkGDJeWKBcBpc2Q1aNmBZy7fu3U",
  "key3": "3oNn3ZszEhvedtbT2Bd982hsTvHuFXy17fd2dcGzbBQAvdxiA6Mh5vWkMmKiBEfDGx7kWLSGAALhGYSkxHkPrqhG",
  "key4": "4Er9ZwB7VDS8T4F3wHXdzFjBBgaiaH2mj9D9saVW3HNrUnnJ9tw5q9WrTJCKVAUTYaqCMUSfUNqHEwjjCUnhocDo",
  "key5": "3jNYuXt9EHY7kTJckaaydWsviQN9VrjQ8vYMHjaSsi7Q7VtVLM6fxPeN4wej3oxBxRMUttPrD9ELFdX5bYT7XWhA",
  "key6": "4RKugWeEmpoCFeQFMgYWnsB5rVCMYNV14KF5D94ufGpMpugiK9Xtsi6e7gzZ1JcmpFQ67gmVuqvYymtAiuDyv2HL",
  "key7": "cTBMY3chz2kaeyq7m1AbKEHDWiccJgzRuoLksHXQpoRYezLJQkSwhs6mDX6JrZfxPAc7oJstoRn8gGCv1bcsTWZ",
  "key8": "5JfWmHdrAYtR8dBBZJ1S4FmduWPfLrGotCG3s1Z3nyoBKMVkTc7YUxGfFvHtAJviVSJ6Krq2N1mF8Afz2g44wN7p",
  "key9": "5EwtFN6J4PRyMJ8YvanBEMubuxtAQ5mp2kTJYdU9TMzkRFQRAmr5kxGqG8rX6dwmd87meoPogZBrBaXqoVEGqVJx",
  "key10": "4Jgbttow3TaAK9aoncbxVnKwq9Q6ER2RAstQKxLCMviiozxzPJHD55gcv5dCsTeDwBThY19A7fof2AMPRewXdjXa",
  "key11": "eNoFKpGWiEcot6eAFitFjG1J3RynbPjyuEvAt8k9qNvi5VzyJtpa6wgxLueAi6NBjzZjCf3Knz6txuU8gtpmu8D",
  "key12": "3uqDNgYBDiy3NXEuHeq3Engf29PEfcCvgnMkcPaTixJwqTSXghA8RfSfL1raoftSrQTdYonyf2wh8VMZdu7Zv1uy",
  "key13": "2aA4DxcoaHWAkBrL1yENHGWQJSfP3ePJyPxAVyM79iXRaTcvQHdiedQtMg18sqDbXYfZp5HtjGjgzuLLuBiWmeAn",
  "key14": "2gjuas2YJZCHu4UGDqRczA4FNspEwSBR4cTFMtARDcCyrtMfhcbtroZRMLuY5MFUNeyNnPdF3y3Lcn9a8f7tMKme",
  "key15": "4pmF5m6a5cy7sRgDcANJ6e7YrZQuqxtK6bCdpiGBUt6UPwfWB4w5ccQwZNaLwp6YnwYj7Zye7E7qZHAhXnsopFHt",
  "key16": "2voVhZu4LXxnTQ2ytTeHT68Ttk7JMe4JBGXN926WPUDHctua3DmwbBZT2DsswvNT5ZwQ1BM1ijpe8uwsUS2TGFAv",
  "key17": "3p4ywis9kZi1MR5b11sfk81zZUjo2Mw8D6GMQk4VVqa8szjDpCQAB9CX5YFwK7iWNiyRiqFNjZjCC6zBtGxXJZKu",
  "key18": "3xHLZVgcTLJtdnfg9vZL3o6HxZ9SyA17buZ7bVL5eMm2VtivhL6bKqyD4n4mG6rHmnNMi6DKqJmTPqnTgT5XLNCe",
  "key19": "2EkQMQhhnhdgyDZ8XT4PQdWTBiRp71Wu68v5kwfFEj6UpgRktSdR4jCDFacSAbUjvxSrUvM9TujhApQCZH9Y9Arv",
  "key20": "2gSqnjWvhAyniT2fMTM2avvqdZ7QMWoGfovJr7hA7waFVhSN6sXgdrNJFd81TQicDj69VfGz4xSVbRU6CfC3R34S",
  "key21": "5bC4xu6wCGXvT4uxs58jGWwQfNBPqmrx9W9Nwiu1uRLGRMLwmNYkdHJox45J4Jm234GvFUBtiyc3eEqaP1TBVUCA",
  "key22": "TzvR8cLsmTtK7L8Gbaim4skaJ9abdndXd4GYYs4M8tzEp5X6PidkkM6KDZFDz3x4s5Jq6HhQC5MevUxdT9wcmvo",
  "key23": "4MVzDWXenpPoToM3z6p24uvAgiPaH48WQnEEKwj8Kc1ncR4iqeKwFtRrYdwRThMQPXKB1VxKeeL8MurbiSD9s1D9",
  "key24": "4LAH5Dkfa6765uXWRZUsSKqoWQno91mAibxqZLXuSHifddnBDMuUYPV6WKEEnHeXHBaE2eBdwJgosGBpeW5XgtVg",
  "key25": "2eZKeJaATpq8KnpkRbUzBz3iKsV9eLgJ29ohsWZHpSoCSMJo73u8kUp22NLjrLgafY3Y1Y8vbi1PxrbFZrfHnG1y"
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
