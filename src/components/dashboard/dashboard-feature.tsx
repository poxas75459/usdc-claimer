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
    "52HScWihBaVXzxcYKTPVehFWuCcpR66M6gcLXpbC9sAyky6VBx6jkaDbpLkgDWdL7HoP6rmDvfQaAAkXQRjyv3P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bm9o6YXNQRDEYgx88QeyMMCEj7wVA9yJ9Xth4Uwf964fmhgoe98v2tSSkmDvbQ9egn8oRXE3vQeNUuRazzKcApZ",
  "key1": "3AbmFQA9xrVLsNtaHBonJLNFzC3czA1SJL84JmPNU7GYdnqkR8ZwUp9cDFqda6KRS1vtgCZ21eVQaWYTMJHd4kuU",
  "key2": "4cn2CVgyyDozi6U6rBfJovt5B2yuA1nX6TJpcy8tMyxxddBGid2qkbtQY2RwGGotEBAsY7vyhh5AkRMoWhuqmWob",
  "key3": "6W2LdsKF7cAR5DMB2BVizAStFgb9BBkqziBum7LTv7Fms3QLtDjvGKTADm53oJTQKcVpkGaCyznWtxJ34SkVdap",
  "key4": "4g9UrPXpZPw21P5gqXQg3EdgdeQkEU6hTyHar938H2wDM3AHHBF6GsXXqcJSCLhSwYqu5DPi8VrDiAqmrqtYv9s5",
  "key5": "4zpDwvZCiVH1dcCwd69XVRWTeZzvZGRxb3jEnzivzKBU5p9yqtYyR4DxwkS4FcsJDMUvTfcEV7BPrE9r4GBJ4SsX",
  "key6": "hRVuKBnYfHgnisLeRcRmtkPT2kJCGAg2cUSJHwHQMLh37UEy2DHxnfWwsAJDb9LNfnGFGPXEjbmfSf232ZRk8jQ",
  "key7": "5uh4b13BJJ3gfETkk2AsjQ1qMvJQWpFCMSCBQV2rcfb3M7NsMGqgdGHF41vC2WVBkqCpEU9i5afYTnYffVFBhWU5",
  "key8": "66zJMLCggiysxjGxsgfen4VErR2E6fGbT4wkcFYJiXvjsmgcYTKu8b4WTRtPXXZioUFhYbiAVfDsxgW4uG1FnWVv",
  "key9": "4XJPQ3cd2Vf76nk3ay7wmF5dWm6uRuxxBUGiU8YFAqp6d9P7SXBJhjBsoyerkpEsPSEdyNhtH5xgh8PTzBfN1xBN",
  "key10": "5BYCTDD5dUXMmDbtnSHSS4vbq5zr4KWqNX88McVFG1MnncvnprMxrzNxYaeiRBBvTeK67wfmr99Vme2NsmoGDGuC",
  "key11": "62XwBZduVfW5skWdSNNAvgvTbtmjrw1NHRz8zbNL6EePDz8AGX7EtUdEty5fLBvp48NcTFFWiqc83Mvm9vHsJhX9",
  "key12": "mKzRFaAUjajWvjjPhxb53CGWKLuJhFsJLvhvC1jvySXvN5Xs8XYq3CTCJ4JWCVpRKGAUBYYXxyMoTgEpt77mxBS",
  "key13": "2K4DT3UUKnRWXT1wcf1cGXtUQwQmc71yZx8HnX2QPRvJENKNjKZEumpLCXc7WxZL43xHneyUQNkjQQzBRVyq97fq",
  "key14": "4VMYaZmCiZeBr3f8o4v7Az4QHE5TPRF91F7ry3gGWQBMfxtZ3SHAK5TnDw2aBxx8fMSkPJ5666BdzNGDmAQ68G5A",
  "key15": "2rVR9tsULMPdDguxtevMuDthj6rVy4bFzaP5jfgvFfg8SLkRGe7PMtyC1sZzd8QCE1ZB2jo9F6PinEWydbaDvhPv",
  "key16": "4PgZcupi7yYKwcaArG6S8thHEs144qjUcZryxxwoenJa6Evr1xGPVe9yHsPFVUHQY6qESuTs8t9m3vYvSu8D1PfV",
  "key17": "64CrVyGohEKMs1fHzBX4BMpsCMqqHkGg6vHfnJTUDDjZ2xho3vjADcJim6rwXHdo5NzLcLPSUAu1F7H2aYgvg34a",
  "key18": "2s5wh2h14wXpV1cW6ZwWAXYunjWT4iPXGXRR3HiAE81YaT1wEhGFFK7JeZubH2amMjAevEYiVhxmfqexZRL24DXF",
  "key19": "5DpJndrczDAMWtsFV3ghjZ6rBo2roqc1TxrDYzdAnJUt3sFUCjU9j2ytoMveKVWk11nfTVBRnqgafm1GWck8S9Km",
  "key20": "ntw5xUUV1Nga1fEvkatNspgcRdTkjQu2yKkSpHDEKvsNHhEjzUZ6e9vfCBaXz27Sv8JeNiqTm1UznTeL2URd5mQ",
  "key21": "3koFQBwKWniHV5JfpVKwGx7vTdohVBvMbF93yGe9Yk9MHE7QzLWZvfPPwiWtQP2wZmJbioPoA7dpNK8hXdVxzbhp",
  "key22": "JnJcLfvBnpJ9iANY5eH21ntRFeDqfc3Yk7ALayqt7vEsTwY5L6GQTiGq7GHojVHbTWv1vbMavdtRxn3MY8SmasT",
  "key23": "2BW1YNamMuBHcGPZuAqRR5fa23tXV1hdNpiE6dRAKEdHDRwKrnW6RrDyAdUXZ3u6KRCJgmqgsUj8LzEtjLiDwWCP",
  "key24": "CLSSsf9V64q71ruSvsjK8rp5gsvBjxoeiWirYHEvGtdQHqZ78qXi9kwKyfLuhUNGdtzu4kgVijXRtrxfqVTzdkW",
  "key25": "2ejzK5BNugwuoPdSNraMYf1z8VU7x7WqDCpLSMg9UjLNii2Rc6DUHTmUpXwHyZQ2bUqmJa5uQBGz9uaia1hW7KJo",
  "key26": "2r8LSbZexZh4MZmCZwP7CqYEEEET3YRZbJkyFhf9WVSWYnyybcDD5mfB1QijtrzkprMMwcW1Wdd192wbuwGhQXC8",
  "key27": "5wee9yVgwuxJVBRw499Yxb1g5GL1MXWY3jzsYRc6BTyjN1GSzH5YbBCcXnnf8smPJGGvLxKXKcJPpmzjvd3T5Fdr"
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
