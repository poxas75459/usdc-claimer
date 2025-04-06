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
    "U9jhzhc6QbK8LefxjL3XXCnxiMsf9cU7PPbcyjPis2MpfbxGEkUu2qgMT62bS3JQ44NG8bn9DNrS88YPoAMunJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2CwSRzCgmZQFD5NCEffNNecAYZ9a7ed5hyDh6xJnLrgbRwuhwNpzcaWr7YtSRMxSNvEeRhDsrmNTerhpCBXiXZ",
  "key1": "3xBvq7YGszmY11TdikzcoVUCDEK9i7dtoan8EJ9uFbTYUXBUELcgwKdGmDsRcteYQrB8VDPHhevrBSFVc9AyFHcS",
  "key2": "5DhCnpfJcF41BRsDEBhxYSApUbNPLYJUAB4EUtWAejgt3pK2hpLm3n84XKRG1gshSTM6xjqLE4aav1wxTeYERfQm",
  "key3": "5BYntruTPos15bUBnPBPRwYMapzajJ3TJq2FZx4Sr8YrE3aqupdXTSrYR42JKd5AznDG1PD2w5ZfCaJdBLNJJQL4",
  "key4": "31tnppxMbT1iS3jtAVmbxjgE26G5THKge3hXpEtxxv5MH8cczRy6AUBSi5Xx5b7HtqQPnrrxDEhVFoqx5xPLzdxF",
  "key5": "tZqDwRwRmZbm7suVhmzPZtquvoFS2bCKNqezoxkwiMA6kZSsd6QGhAZcoq6v3SCtgNH8gsGv2N7nqNFjV1RFySL",
  "key6": "26pBAUUFHFdWDQRht9zR4cBaa9MVDXk7X3hKAu4EYxZjYW49kajKgmoWrTWZpBLGfk4M2ZEuHU3mAejCkzsnj8RH",
  "key7": "QT3bj66n5U4f4Jm7ymjjV8W9d9t9eaycKa1AcE8n6ZK8omCyJ5ju9nnFM7hJ7p8Y2MmXxsPzmAoyCYQT7bDgwKt",
  "key8": "4TXdQq559uFQVxuy3FyEixBYd2LFnBxynCu52YmAkMF1f7J4jrcAj46Z8aa2A2rGyQQiCTQMBPBTfs78eUW3DxPr",
  "key9": "5rVw56N6feYu7UQkyXytRNeQQRFuj45r5s672DEgM2VDRbsmr9KcX7XUk2DkoVKZGE8AuiHS83ysiQKS8YPLr2Wf",
  "key10": "pGEzyh7JQy59Gguk5BtNMZkVUGDHT1ARScdCwLLg9MsC4nTHrsei2DK8yydNBG6vmaUTiyrL65Hf78K8QCT3Y38",
  "key11": "3wmzExzQ28foAmjJDQVMbEZof5PLVsZ3RWtsW1DMADKDP6iJmXC9HedoknNDeXB6w2u4MzJ2aMyttMm59xNJmF36",
  "key12": "2t63h2HMoExkZNst8p3M8Bdo81DRjTvPiLwQJR8xNrEnf1SKhNMy2qZkRAecW37nj6GqWeGjri9sAXKDtrLBPbwe",
  "key13": "41fptqHYZppaUJD8Bip2xNc8zdoz6QTEkBf4SptVFzMXHBnA4BHbT3E2hqNmMb2zwxPNjNB744LJ4ZQSTrmxVXf1",
  "key14": "3ZWxRcaAHyoiLCWKQFvReN8oSb249X32jhVGtLGpzipvHFitjUcNqkrbatJqAXZQFqn7jpNjpP5HmzQb5vKzUL7M",
  "key15": "TaUERDcAtmkudKcREpNUb39EMWGQTZb95CfL5UWB1uXjNwG4kxYpHN2AnTTuf46wCUs2Gmj6ovfKnJRQEduxvW6",
  "key16": "497ZBEGKFZNL9js2Qyg7Wpqw63uyWBBpXDW6zwwxESam1w5mgNG7Hm4dYq2GGmSh9P9k6sqtYarc2QwJrCijvSdV",
  "key17": "4RLL7HomuLwgye4f3fQBJHYVJNyq2D6DyhjUHNEpR5iN8dg78CT9Abd2GdnLqmjd9xaq1rFun77q4jrxQaDhZ5FP",
  "key18": "WJ6RvVRuKgjEGDzn8r2NBLUMxZmmneQ5C2dFCGi2nrCXpZfHSjt6KdHKDT6KQTYRUdNpP4YGAntAqFmG6ENtgAX",
  "key19": "2JRvmsgPuhgxpqv6T7x4ZtB9ADBv9YkQap2hRf956ySYMJEXLGpgcMqCyUM2kKpubZcenctsKvHPu9vpMfMqbbze",
  "key20": "3HzrCfEhqRSvBH56sDUXqnBiLxu5Rh8QQmnLEMSju3EZTmqYEH9vuNeTxDZntaGLqryPp7LpkcndwfnV7fcx8Ner",
  "key21": "4byFUrA1QsDdvE6UUZckCctcqhdHYh2wQ11V1Dwj1mFbetw8ha5gby3tUpcUDnMmB9okT3fKSSDyUSrrFQcKqSyN",
  "key22": "34oPLuMvXdqQY7xNbfaHdQ8qDvCWig7m1SHkvrzXMpqKskFTnXi39gzzzV2j6kRBNyidYTryXkdTA2b1wd941j3r",
  "key23": "5WDFHutpD6rTL2thVsLhU9JqyWus6XvbzjmWQx5sfJF2bdPWQZJRokv7pcr8rDcEQzLziMUnD6hPKgi316eP9YdX",
  "key24": "3k7ktUsr7PKbuAqesATLuiqaJqZnJ3SabcwFFySJnrrVTp12XFCZAFBkd7V3RfonrJsBDQaaAG9KXejV373mC3Xa",
  "key25": "3SoX2sNt5awrxKH89oqZe9RditfSaXby7ybdHwGXyubHvoyzWpizffTLsuEsUbLBsviiVhmk6uRqsw1bx6UrF5pv",
  "key26": "5XWTwAzmaCX9kNXUXCm1rkMM7UN5sJicSroHP1ALxV67hFNeNqiqnYXj3TfESCpgNcSdwA3G4XFtzuryqNhy7Bu4",
  "key27": "2y6uRS4gXJRLxrcejMHRcBriUJrRtKjWEbEQBuMbzhCpeeUMSEaHWoV1MFpMfkHdczBgfVyfdaCXENr2fMdYcFEC",
  "key28": "2NA6pTmSjsxtNkwb7Gfj8FoasazXGVqjW1zLZCRc5cqEVBZWBZtLNM3VqUM8YAJVQy2Zn3cunEoesArYwhuJuo6D",
  "key29": "3AdyutkMeoAbwucSp4c5iNA2VwPuvbGzopARpNWRS4pqjxdcVgWJQHbLKMU2bijn1GfGzmbpDYksAr5niDV3ZkCA",
  "key30": "3dY6qsHXBtev2dat5sxTcir7kzLHmr4vqpzHZtt6bV9F51tNxwNq6dJkDe1DxvoH2LYHNjiCg6ghv5h1GkS5u2Jh",
  "key31": "2VbTuVF1Z374MtbUQnRwaitCVGEgUH7fvWVDFR5yzHadwJVzf1PXqEezGhrHdL5qxMEfHTo5SbcRRoN3ERd6xFQK",
  "key32": "hA23EohMHV5w7hXrZKPRD6eXFj6WB6VSEg7KfZN2qFHY6KMdMJQGT4sGHXwdUSNz6hqrouR9UibttqhPGoBZPbB",
  "key33": "3EZXQYbaburSgf5M98i7edq9r8riiP3bnrP1gkTYGjxHbiHXaWCiyA35hyyLfJWaysW326FLwtoxf5AyFd3AseHL",
  "key34": "pjF2FpvXxpbxj64d7byhD8qkoZBM2RAeUupaMDeC1B3ebhqTfejk9Hx5HHpnqQVMarnM1sYrMVSVvsvyLvNgqRD",
  "key35": "5CRX3HRtSZpiJc6ywwWWkF1jJrkWS243gbwM6E2nGdVt7E8QqLsoCzLeXZ1HJaDZUizGAdVEHRoBNS7xNeNFHnHM",
  "key36": "XX5gA1uYPT9i9GfeWypQFDPJuZgSdXKcYQ13cer3W5shKq3oEQpKJ1PmwBaapKYjJocbHDofmbtgD3HAEaou6Vq",
  "key37": "64HJDcVb8Qo23gm94m2nwsTUEfphKKQjo62Yvd6HZvfCj6vXvimLCmjxB7AapYYcJBMjUZPNb3za3MNQgL5fD9LL"
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
