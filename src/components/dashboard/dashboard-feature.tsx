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
    "4Hgr1P9UqtAqPnk9mpmfTY2FcDR4gfJmFr3MyyWpT7cdYYDJmHdqoGknUoVZqAqjq9jFkWP3MUTEd3nQ3HzVWrDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eybQqaf6xoH24GBy1hZNpdFSKgEwUncknzfvo7qysEZDDPyC5wWdR4WfBxw917bKX2ioXowi5b9mGdxB2XyWWR9",
  "key1": "3XsLxotpJXCchhs5WgJJvGka9tUFCFevogDGdw2nuNT6ewN54EuBg8T8GFgJkNYerK6uHeVcy8UrQdPpKX4fLgL5",
  "key2": "3YLVfdTifYjBxfcwwh9a9dmBgHBLymzUX94EW5PNxLDjoFuPHVKTmEWDUrhMF3jmbjw46rmKR6DfG6BEFHmAWzXR",
  "key3": "2YkpwyCNpvMEVqBh8xppT2mSS56YLhQcyasWY5ark5KNpdQM8j6GenS3WKPmkcW4jsf1fiZSKBRcPtLiUHS1yKEW",
  "key4": "5YVM8DmZc2TETkg6gjusm3Wy85XzfWnjjMsfDqn8YvJQG5ifJ9kNthKJ9BnbPTWRHVC5QCgSuzTDZyrYjbVWvysP",
  "key5": "43mkwnZpwetBtTg4ptsC1YJWrcn8MjzLUPFrjzJojErUX8qnVQVkZiw4uaDpUWQcuPUAtNEtuMHTQ6rZZdDf1twu",
  "key6": "5WdnKo5g4AT6cTyPCMu8itcVnJdz8HW8BSj6p25vWyUFLFxnGxBGuziGg2XWwkjrzrGD7MCb4hhXpE89WvCuezTc",
  "key7": "3C14d9Qc2yiRjGrYCs4bMbeX4p1BGgcfirgAZGuDrV9skKStYa9kDymtcGW1X4hges41QUnzxVUnVAVPTN7t1VPs",
  "key8": "2jUswupAbZv26ntkTyeCfEDziwhmVxvuy22mnpaRZk2U5i38cNF1yi1cMzQVHeWRvHF1YuFatmA9MbAkqbNPqk6C",
  "key9": "SjRmwttUAQjDAMeXEU3croTJC6mdSjTFeZRakmWpKz7YRRcfZL3Co1eBRN2ZQ9cxBJzBNgtFkhcPt8JU1fhcJyf",
  "key10": "2zhnrkVZD2Lfbxxsjt6s3wZh5hrHUu9nmmszBmC9VJCxch5eC39j3K7y9jW3Rfo4CdV9EnEnBFZv7S7rks9zTWTR",
  "key11": "2VnWQs9pYTSmD2XbFxMUsFPdt2DEnS1tDmB8wttkucKvAmvqY5WHdNrYRnpk6GtU7VBjdvE91P2hFvfrhZFzibLc",
  "key12": "4SPfnGPSJXWC2qtti1KFjS6BKZpyk4jUj12iWGiF6jUMKfRyeZhHz2LV7zxo7xeTG2d7wmshhGJpfiwypePJ3C2B",
  "key13": "5KrgjyqxhtVw7S2PyVfmLiftZDVTU4kzDVbmeHvHyymtoeNjCJ7LLzu9o4DoUFMKZ7vtcvFRKhRqY95LRxTr3zFB",
  "key14": "4spUqybjPdKdpgSkFZ7t3w4bd9ZVCXv2wE5a14NgHdt4xqgTiP3vDdygLBeJxvXdPbztPSqUaWBNanJs56uHAcVf",
  "key15": "5XGrJWHtEHYJyRJuY2JnZNvm17oTNyv4swksMPGt4kCKCzzb8qFH7kFvxxUw86ArcHFaGEbiyQitrhHA8zj8bKXj",
  "key16": "4n7zp1H9bARPE5qv2LNPJyeZaBbDDvvzMcqiGujqrKbVzzucghZFK86Xdo7TYp4dMsXMcqANfZz1xLc1NeaSDDCz",
  "key17": "34rP3n6VuCP6meXp2VkeznfCTN8b5hNfhcDENiDurDy4Fq6gp1SHEvQaZqCpMkYjbXCHKfkkoyCPY32ZBPx44zsn",
  "key18": "5yWhHLLLpB2bYsQnDDvK3dsHrWF4ZpVo2oa5yyqfV523SXsQMYMxhQYwKeJB7xoCzsksGGJbF7pN8jcHtt4oPsUP",
  "key19": "2vRubHjqiHNomWfdb9PdogZ2xLh1tkru4JNnNtboMEpbhqgYJRjdD2VZ61RVRfYZpjM2f1m3LHg12vR2utrmMRAx",
  "key20": "3URNwwm3GPttK5Z6qsAGUkC9uuVSQbgXCbZ5jZVomyV4ic8LhbzRWPyGXKkjbJ5UqsRbTuK7zY4VFGLiJcge7cjB",
  "key21": "5aXkZp9maoJV5UYAGUogaybJF2GXsS2HZBtJYnsuLGubrt7gr1vCBopzCiYMfBbjSyJN6r85kmmYCeJL7iNdXPiG",
  "key22": "5qddyy8gpyUkVPi9pzmiysPmHNjdNoCVi469Qxo5ENomEMJrNfVKGKwp3Xf4vw3VNPk39pgjZfoRjms781RyitT5",
  "key23": "ZJgtqzuuRq2dquubyPiuY3brf1rjv5xg6UrPThbHg7aChmJ2YiwpqUtd1aW629Cyp24oJYoMKBUFgkMnpMigCjR",
  "key24": "4tntJ3vRjbHLCoCDFkcwEjqaAiGHj3coHCKSLZVC8KBgPw3hGy4DCzS1nz5gS2k4KfA5QPuKw828PdbqhYAW5fty",
  "key25": "2f3LwpmbWYwYfb24irYsnQMAGRAq3z6EpJ8bDCd3UtgFefSZiL9JRfVt8wRJanBV62BayRhvR3yx9QkmofySWyaS",
  "key26": "5FECgyqebReTUNCPgfJzVoeZgpCJTf999kAPkaZg68NWhuBRxXNmGkoiyjT2Dp2QFXe4YV2RA3aSC1wc91vozj1f",
  "key27": "2XraptoW1JWqMvkSf8FsTyebVTDzuzRxEdGLuzJ7cd2CuaSKhmAJGJRViJb8P1awXG5cGebKBuChEpWNFZGLe7bJ",
  "key28": "2eVTafZHz8CAEa8Z7RJFpNaZSQjEMksCBQN2TuiXy9FajbCpraf4KxHjUceKtGRjEMsmmJL6cvaVwRCpkbuggBnN",
  "key29": "3Rg42TkQSstZ5yGrBvTSR1Fbr5AteAeMsePj9H1qMSDbXxwX1HtbPwB59MsHferRzJ5SbS35eZpHVs45TNxqAFfD",
  "key30": "AcCAT3SccmL7HrU9Pibjmo1rxXBXP3Ezy9Ay9i6Z7gPkAercbkwW5MPUFGjFXb9M3P12SogXBWkorryWZATC7VZ"
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
