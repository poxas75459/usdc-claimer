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
    "3mHzFp4Pj8VMCZZRx1yjdLEATiewPNYwcDyqZK9raTotao8rRAuEPHKvgcetKdQRtMtm9NC8YjBWXKy2QxbACtUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLVzEuhnbxamaKnrFMpzcUjgU3bbeZ4nPiN4Xd3G6MaoRScXJzyG8w787y9r63bvNnB8cBmsSXAtzXrFzrB4s5h",
  "key1": "2Yq3gPcM77oTW2z3haRQqNd8p2DoP21EB5xBtMysaw8NJTzttSWJRxpvUPfeM2pjNvRUeXns2eDkJxT8sWf3L3ou",
  "key2": "2pHh9Y4tPhgGbTvgXM2EV2wgeoB5CVP4QfsrahqB2XWhWiJRA4bLMpzreaZqrpRxBWBoDjcYKPr37a6in9JF3Ujj",
  "key3": "3XTjtTA7Ma2g8j4ozNWBUUYhaE5kxTWTZfT3tuRweNTtNc955ZHTp4L7yM63fGdKGPRRWVCvuVwKHLy2UK5UmR96",
  "key4": "5TdXuAp7YhzNhFBG1ZmPmLvjgNJX1xi4MzdbAcC1eE5HQdsVNwKQSWs6B4dZQZcN1DaeiBnJ8rQHYZzBL5vDQ3hn",
  "key5": "2D65n6Dk1hUD8EjCd6cXuE1W7kgFQs6ahteHh4yLGd8ekYiCJqR2HokEnZgr2dsusL3YZBfvU9drCdG8LDNaemVj",
  "key6": "3pMMP1hinximu244NMp2ok35LFehJqeMV9braJjUjGX4cmdV5fXictZZNyG5E92jZdT8CAcz4pCCg9FRd938LsDy",
  "key7": "KZdfHjteB4vekfboL1r91ugFWxLW9Y1JEPj8jn6GtGbLJnNKvEx4DMiMvxfZYw7QRubzEVwWeusFD7H6tQgFVsA",
  "key8": "2HCaVU1JZ4iMHWpTqa7SAqU9ipdn3ouKgQ64SWgHLfZrRtYWvdMFui4YzKXb8ie5Rv6BeskgBEJoxvMqKyypBGaz",
  "key9": "21M53icgwNmQ7TXmTVcsMyWgiAm8atVAMcHHsnCgn7CSfRsn99GfWFZL9DfSkQUBSpBr459JDkxzN9Mv7nUB8y47",
  "key10": "3VdAtjxuhSFQjUUb6uECjz6yeShXzwL7kLSDNxjC6CffZzMyR5tqjvSBGYHTdcAksoQCp6s24Ei9uHAK1PuWgxh9",
  "key11": "64W4N8Bv1EPjGByJv147p1wFbBDEzyexFCUc2q3DrZNCycEDbDRfuh2YkQEKHfE2BF2ejW1iFsSDM5XXjfsw9aDo",
  "key12": "w3MT8LNsjbGx7xz934WvE4bNX5D2dTCewVo8pJhpaUFEgDWD4CFDcQoXuhukHqhvE1XbtLzB8Uxs75EDnMeDmW8",
  "key13": "5L5Wq9nKsKbRcUzrFaDHAEcMSBHu76TbuK8i7hjSUL9uEiB4tYm75HBkuctmmEpzMp91YSAJMv9WLvqZ1Ejp4KJR",
  "key14": "4tx2xyFYsjBp9nWDryEcizdTddWtZkdAdUvUFt9tPF88DTK1W4xqe8uXxaNTqsFE4DYX93mF7SYkuspBrYiAVDro",
  "key15": "34JrdTfNmV64NoKLyePstsSbtuHoHxqeUTN22W6aptrsfsrhhVvisJu6aoqMz7RVMeG4rNqdidUtSMZEx5F2HtQ5",
  "key16": "5efmk896kU2jKMPZUXgSfEBWf4QcHryaf4HUACDWkV8ewGhpK2cmU8veFmEeWMieDLypaNEDkYnykKbYY3k2R6a9",
  "key17": "32maA92aQQwvE3SbrDrxF5cZd6xAMGpxrXZtYTJdsPtbVVv7YBDVrtANTQ8bb5o8joK1zrx8ikVwUQdgdpuf1PSA",
  "key18": "332qMBfnpy2UjEWfjKWLhq8RLRe2LHnSPp6bjYbpeWkcACEEJKZPSmpwyesQKmGTeSYyP6YYYHLTq7RNfUGTmwJs",
  "key19": "jZyoeMtrcdmTqCSGspPg3sTA1ybp6W2rZ34WTQxVD3tu1XcxXWogRobMHi2sGqhWmP9qXMhpCbAcE14R8c5E7dg",
  "key20": "2AEybDh1XoxfU4odWGGS7tPdMCvGoXzagcAkrahnhAogW4Ueeqxn8rZubNqiQre5UGYbnhA7ndh7EyFSWBdaEbuh",
  "key21": "2EhoSkYCG4dgGWcQm2TFhygpmDEgaLy3p2f4QDhnAfWNJ8PErZaNx8ETbR5c11vz2DqwkxMgf5ZJ1kitHJSPAkpT",
  "key22": "4FRSFvfm7ZfNy2q9X5ogEyLAu7ZBndC7PFdG4mbiYzoWHoTAuWjnXb4zxyKNQtEVTtAn6PyQzDeh9PEWp7kwQJJ6",
  "key23": "5fN7DP2mAhxwScMHfmadQNZS4TUdgMFWeekD92kSkL5Kr9QjCeJM2MgFj89bKNopDhmfCWHY6i82CxEv8te5mPRt",
  "key24": "4QRcDT9bEF1EXfBnVKT3BsE3W1PfzUFJTLS6hwiWN6zKTyK2B6vxES3rWKGwomkag86vidbsPaNsBXSyUX3okhsk",
  "key25": "4nNhyj5KhnYE6u4oaqNqFKdsRwTR5MWkCUsWpAgkEwUXz6KT3ZLxsRGq8BdR1saytscFZu4MRDkwzBNFUvd7Jjxk",
  "key26": "H6xhaRgMfGaeTrSESUdP8Wk9TfXjR2Eg86181TDMGUZQa4eZkZrMVdXYmN77YUCfQvhyrwGD47eiJ9sZarQzwor",
  "key27": "XbxFRvm7oH4Aky1tHhyoNJ99TR39h3Ub5QcZxmopUKoyy6WLoCvQLeZxZdn1oCUFCFZgfzKuXSFcGMLMwbx9FqM",
  "key28": "2H698XKYFavSFAnVLuJPakag44YojE45HLdTYRPLEQJa4xGTrPZH2kyqEDCBLPr8CL97Y4H3uYZBNCjPSsmGGAPy",
  "key29": "3q1ZFx3q6rVd7uWg8AhjuPfxn4Je8NDs8RzKbP5EaKyoXTC3FLdPfPubkaiD4mv4jmYmRox3MDnweYAg3o5w8GQq",
  "key30": "3yso6PxA5hSD9GauEyG1w4wZ1a5ASzYKuWV8MZM8MceT7byCR5PpGiWwvFbZ6E7Cxvo8mhQqmxpbP8jUvUp49tqL",
  "key31": "55ZsgfovUmQxrkm2PPs8TC9ZVVUWVE7yioJdbkvPMzV7VYWn9Hz5V9eXdcvQ3xpBdwEPRwFPKr6QBBoKJLst9WFT",
  "key32": "2W4SH1E6cwjTeyspzBMFvT8VM9TjoNvYTs2h1q2HL4n2GA3h9cTk8dF3ofDZx3rp21a59BcNRDJbhRaEXjVKadvZ",
  "key33": "4oNPwuYkQ4CXw7acS23ej4e55uRv1XhMnAKkuKqad6RzD6atoKna121ikxH8QviEyHKQMz9k4Db8jhgtTQqmpfb5",
  "key34": "5hk4thfzNycuxkC7YF7DLvnjc1p4tN2MVqiAYDYBGxSQJbuwPM98nCiG1GtWHdvBuNaXmZrjRoRG9Dy99AndqX4A"
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
