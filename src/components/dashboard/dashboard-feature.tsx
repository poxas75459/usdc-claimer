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
    "5j91wKRkUxT3hPfKzXegcCyNo9baYJjSuDcjpxTYKvH3uj4CRNjstgsfAF22sdE9JVYaJvY5M8mLRpx8UEAUy3JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qFN4aEBtyCtdtP1UT1HYwv6TS2TYuWsMdFXETRKV1mRMu9fRw3cKw8pkTtV632AxdamwKXpdEN26uYN9nKHWn6c",
  "key1": "jzXcdin3gyQMEokpxymEd5qPjMfmmXxpem7ecSbpmwFBqjD2EFMHwzLDFBtH24ribkZNkLJj2nr4HWtCRChMyXw",
  "key2": "5rshQgWN3nMMRNMGHPdb3yXpMBi7wUFeJxKTjySCHZF9EeLCCRZzEz81PgHWS1CyGzxGkBRQUQzpPtX7mcrryRHS",
  "key3": "4BGW5x7565pBhoitupYeGEA6PHAsSdGmZy7EMnm2wzg9639dUKak4Tfp53ymYDgu1J5XkpeGETtJT1JJbwCh1WWy",
  "key4": "4pr5cyx8oAqNX5Au3mJHoEMoDGgycReABrqM9kXv4kuSi1TtVuArCHRwr43yXuYxwb8ansAp56QPsXi9QBYHS2T2",
  "key5": "3ixQbGBCbA2cfa6WNVWvjcMAskmb2bq3b4Vtcdi2CuPDFB6y1fk2XvZktxnzSNMpHH2Nsmgc9ppuejTccjvcCTM4",
  "key6": "DzkqicUzJbfhHafGrdKhSjJ2ZTi13NKqdpAQMkKiYBwzpnzTzQE5G9zVwNAqkSYzpCFUnuYJq9NHChoFxKPd5MG",
  "key7": "5GhuXxkdV3mPJ4qKorBLsJ8X9CqQ3Hz2bju2egn1L3L6tHjveUh4i2G8uicoBDzPHRJBt7MPKvCEKkvSAZnFrNpB",
  "key8": "5fJ1L4i9gDdKp64DiGfGxxUfYoPXrFSs1EHjWaWZU7636gKGC4HNTmtK5aZ215kHpSyChxAVMTPbnTsnbk9t7f14",
  "key9": "59UrEp8HGXefozg1JtWbv9wG279wswYeAnL252sbKE1bEUbXQNFjBsXkwvD34zVkqG6p6fFbKwJug9LkELVSotTo",
  "key10": "4p3BQSxt3ePbfq7UnSEYCyNwsj7UU6G7fBZBdiWfqDjtY1LxuEGnJchaZwYmLBwEmmWS6oRGtaLeyh6wipgE3dvF",
  "key11": "4RqAc66hgQFhHqedXqYZL6JpPSNY2G61NfqBf6sAUMTDLPvmSoZQLg4FARd2d5CRh5QVeBtrLEtw9z15Ho97PnvX",
  "key12": "3jSjaDz9LGDCUiSdvjQA8MWCmPVShZoQZxv7SjLGsNg87me1289vnxpji1tkocwMPK42rb9drzHL7wx21YefpZxz",
  "key13": "5endroJ9dkjpRHGMZFsJhTSEUCWZFmzEq3r7XBt4RgQjwLXaoHS2LSFA9MH7H3ibLngdKC9pY8Gefn6HZWb2nZQD",
  "key14": "TB8czwQCrbQKgJkfr4G6V1UYYzPniqagFYZpbZCkm4tfWwQjV1xa4dGQ2ovbb2vTH5NuaipZZ9RuadYBAwbFNq1",
  "key15": "4bSPtSPBSRkd6zeVogbGe47BktLNkq8vCNh4suu7xWW5BwnbSavHqWV3mNbg2dWXszmhY5CJ7UmP3yhsJYwfUkA9",
  "key16": "548NJVUdBCtaLFhJfWbKDPPrcFE2gW81vDJxn7JaxuBNV7Cn86dz3DFzg6FpQHdX82kptVRckRSUARpvNefhUTzr",
  "key17": "vPYifdzAzS2VKZEqAJ16eL7L4B42kaZr6ZiNvgD6MNFzFQNEsB34GEjN9exKjzFq7MSmGhiuh7HBFMhi1KMXwSQ",
  "key18": "3xYTpsHbK2v67Sd3jNcRHzvfk5Lq1dxa2HyyZiz3Biwo48tz2KXAzfSCWCrCCmDha3fE4HS5wmWikhWPGjCg1BHe",
  "key19": "5nyvjMJKx2Vq2xWVBHe5xfipTFGQqNgXMP8wfrWP1jfN5XzECbpk3XGiiGuUrvn7qe9PKNvVt74LbfDbxN97EGur",
  "key20": "38MM1K9hhk8MqmG3TJkdSG4G9NxhjU3YUQodUxa85pKQYFsxRcCELPX276cGBQT5jjKfyuLf3To1p5BE2PDvvuiq",
  "key21": "4JzDwsScF3MpbPyuumqvmBwdFZi6a54wC33moCzA4Bp5WwpUnC6LBCcjAw6rWCqWyjL5NGPrPbUX1Y7p3M7zMKQT",
  "key22": "25uYiwVN5Gv6udPjVEMF8kLGZ472SxuuxXUW7fPwNfBc8nk6fVhCN4hSZmYrZcucdzcKi9XdbEQbbw74oK9apnw8",
  "key23": "2MDS4wJSWDJZVgmZm7SLctbhAf3jwdXtF6g3pmqs9bGiGgbRALJTyu1GsWdJqFRZg4sHSm8JoGH1hSLnud2Ju3t3",
  "key24": "4fcqJqb5Ryfc42vYhui71W6yZVk4f9q81K13HvmdACjinDMgQFxf5X5Gzxoea4GHfno43EX2ySWARkhAbjTVzN4Z",
  "key25": "5uYqgrco7gfPYBX5YHrnP8agBts97y3Gs6Pqht1Pw2bkawXgpjqPNrFU7X9vkP3v1iq7zc3dGHzCy2uns1x4JV4t"
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
