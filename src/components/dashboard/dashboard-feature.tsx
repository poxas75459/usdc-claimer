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
    "5gviHzTM4f5f7Pnk2qpQw5eqw786tQre7WriWXBECfaWteGYb7YQWfxH5DPcnpLF8kh9xeda2uya6rW3zb9oEUDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgh2d7RMTqohEuJ3SkWsjKtuK4ghXzKf4qLN3RmYPtGYLq1br43bbMxxSXzgnohdvJnZud6fcVMuLUDc8jD1nFX",
  "key1": "4ZA4htGBe62hA2uJZutUSRpiWXCLhKmdhexhWaLBhqXQuVtQBDEe45w5bN2EXeZBmCe8TMe5NNWSUG7rjGRLJhFk",
  "key2": "CjXQ3vzgNKPR8fuUeSnLfbrG4k33DmuTuZK6tkTuXUwA4ZvYXD4q8jDnonSTrWB5m8jN86ArUc5pMo1T6LbZcDY",
  "key3": "3xaQD6Cxi7CKSwxiE1mfbM7cbZyfJv1pcrj66WSwA2VcsrcbwY5W2MHuVLiKdbxzk7bRFKxHDdTyRcgdC3c2xv9x",
  "key4": "5tyDAQs947ipXegY6aznUXRXJFJrErLzQH3RorB5qvgYFod62VjsHcZCpiC1yQc6FBKgSbUoSSciJ6ozYrHLFKY9",
  "key5": "3k6AaqhELkAvZ4N99BD6wXBcaDaZjfL3meQnfgEQiVYdDSRq9qjgymYY7yiwFbXQGpJn8B3asApNKyYuccXQad44",
  "key6": "rSafPyqZxQ8b5DM325meH9hEvfzjT9rqx5sRo3W4PeB58bJG64vpbUcwiffa8aqAuTucMZ83qd47oGky1rvgbh3",
  "key7": "YjEcNDqhARNRDMURzWzMMMLMb5VmXfuWTMKYGamQQwdoPX8JkAjSMMkkvy88QrNzyWNneBBCzW69Cwgv8VDroFW",
  "key8": "aXLN3ATU292he3wem4STweoZseXvTPHg8eeiFwrSq7PU83WQD9Ac22qSC7itF6ef4BDQq36LiHTjqdKz5HiEnkc",
  "key9": "3S1B57AzEeyGmQPDpNTHUefcLptZAnfyQwhAjLB6d1qukGWV4FVWFeSoEDNGq2nw3ZGkGtiATtRDefthy2nt3KtA",
  "key10": "KyghQwLXjEe3xNsvNf2GwwfRTJm39Y9JZaWpjmJWTefUq5cY4uSHWcF8uS6PwhbZ2rJu9a4VNPQTyuX5BiaNZiW",
  "key11": "3mTMXRZgm7PMSoUPJtXmmQeezn8XPgyRkugDQ1dAcdrz51xNaJ3RvbpwPFLm54Gwd9a8rEeoBXa8sQzTJ6oeigRX",
  "key12": "4fTXqm3GbCNLDCbgYHqA2zAL4wky3WiHg7yqWoRzQMagkwmsaCPHdKXxRoyQaZxx22ZJVwohi9t8wG6NedQE4vDC",
  "key13": "5SPq7Xxug8My3PyCH5LnmEK5WzWXCTdzsgiS9fm3iuNYXPrBZ9EwpYJU3Ho6t9mpdBBfD87T3Ca5sTvtbfLJyguF",
  "key14": "5cX1ugyak5qBWVgwcM4XzaLDpbUxaPjF1s8VSEwaUUMraZ1bCnk68vAD39e6wSzajFTdm1gbB9BwV3xzATZXJrqR",
  "key15": "3KUZMgxYy3SQQNyPUSpTVXkiJVm5aRwLJcPq7NKum26GY4kUC1c3FSzAk6L93nHM7JFYrTcewbPDEBD3YvEfTMvs",
  "key16": "3m9VjMU2zfctxceJQDe2F3QEGe9DNtZGVUGAiHYkcQznrJvg2kFx3xSU1ZkndXJ68unzdzq2DkDGHSr48FPWDsdc",
  "key17": "3ctwQkfRmaUa1nEVkq9XbeTsaKNYUniAjw4Botgpo7Txuv6PwRUMnNthSmC9AxiFFHqJCU2G7HYyDBbd2FbFubb4",
  "key18": "MpEE3nKCjMi3E4xbtfSQBksrqhR61sqUkpx7prA8qkFubgh5vHqefnH6Em3De6YnDCa1i7kuPuAmMs38rhz2NKm",
  "key19": "3F9xr1Bz4Un1QoqW4qhr1Wcw8YJHHvRuJNV1EL3yT9QE7y86J4nYA8nKPct12Wjpw1ubvWiWGvSf4xuMrK7PK2bw",
  "key20": "3U5d1oMPvSwX2ihxzZYBcFXEzC4PFa4JeZgPaxqFNEYdYfuk6YGaBAeXz2rUm6DMZTdTysraECUyy5nUgSLHXMVC",
  "key21": "3x35JXnFboNyn597M6C5fZwBEchs7WSKrmtDDYuHzzSsj8z9scd4TCMNDCwQmhQYwe49XUqX4iDrCvS8fopgYYcf",
  "key22": "2whLje3byntBZAbMagH7XaMVTGWsZrQcLCkzQb5H2jz9ieBRm6fEbJsEkc1TfSnDHPidp5ZJ2QqWggaLnhZSooy4",
  "key23": "2Ww8fG1jGevqcfqsJdMh7E63SPTyVPmhSaN8C9H3SAd58MrQc5f7CBuS3eA61VCLRJ7T9kC9cvZjcgu2jehbVH9a",
  "key24": "3iMNXEGxTzTrkXnjxKAk4NkLUSBDzELwsfFWxGihArVJ2cgrwTjgUs4f8k7vL5hkHC8ZtqfnkcWXX4TkREP1Zf3g",
  "key25": "4Cakb1DTyyE5TSxtnHgh8aKTzjiJ6M325d64YwFWw3AwP2mK3gD7JVkVvBoJP5sTra9ZpvEPZmUsmRGSzs5tmv6m",
  "key26": "35jQHDmnvjRPmB2bZMWKTTvR2tXvsF5fB1t5X8Z7uD2iPRxxwnMvGRuZYNzrvpQg7gUSzCGZaqGqHVyuCb5wYvZg",
  "key27": "29TY54sGk1pJy437xB2VCNuxrPxkTmGDwc4aeRh4sJaDmdyExmuDvyQG73Y7Se98P8WATCohZJ7CMky2og99zqcV",
  "key28": "4FMyGhWP12NAuSP9wEZZKWDVs1Jue3fWdSujyD3ueyS15CaCJhKboAjUNWFQe4nkG3hPEeYRrg4P91f8xzi7gnqH",
  "key29": "3JZir8jhzZb2MiQc8R3Mfd8rhkJ8g8WgCc226GjGtbnB2MABGUUfWptwe4AoQmntyaRiLRqAoGHgSinTgeMHwcUi",
  "key30": "3nwiRFF1M46G9Qoq5sqP4rQeWXDqgqZGFauDcyZWZjpGFd8fBfjcygyQPqqedEWde3kued544RMtLtbYgQjP3DjZ",
  "key31": "4VHf634PvKoSJVPtivpukMvJQiX64VuSRhcK3CDRKpbyedqQpgZYTfMmjtdCVJBgo2TnLZMTnNuWmPFkxFqYeLuA",
  "key32": "33UzVbKh5bVpbwdGegTMmz2GBZtaJ4y9B8BnsFWXrTFeNvkartqKgc3HiXdcT122zzXUUw6VsPfuYkAtERvcQNQQ",
  "key33": "4qUTx2JbHrFo8EciMhqK7qRKm2hY24gbFkgKD5W8zD97bM9wrpBSbwXK9Kf6tChSNcvhqMreXtjcGfCRRE1aiFYY",
  "key34": "5R3NzwEMSvs8fUvUXqgDFiwENuNY8KapH1Q8uGuhj7meYrrsCqj5TT5Mb2x7WRvEi7BqBN7AZUZEvR621rU6646Q",
  "key35": "4vJKx1yiVLh4KQAxAXncLCCupbwYkzWs8GQdndWGb99ynmJXQm1aENSA5c7ZcUV1iJq4eF9dLAgh8iV3LLC6sDxZ",
  "key36": "dNFVGaxgGsq9d6du5Z2BybZZZdZJK7qAyhB5cez4HqZSyo3ADAQ2t7N26qLxMhRaiadVpY5qMJpaHWhAXW2bm22"
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
