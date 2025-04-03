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
    "4Ju7XZrnAXrRxq7FRE13kDnbG9gAoKJ5NAzfpfvfp3ZoTWssBttBDcJ3EtZEPSe8iYLBCakNtw3WoTho84cNNS6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVDkAeu4fgdKWuYzyw3iKCrdquQSjJk2LtLSig41KuPhCfkrYrxf6TY9FaJK89EMmsSJtjqgp3gBKEk7mhvfTdy",
  "key1": "4Q8FLZBoZFgqhtJmkXcsw4xgknopnu9VmmcSateQAZkdqojc3q9kZ4xtwbafhFuWGNVtin2iTJVCmfXFpkPiXBYZ",
  "key2": "2jdb8iNJz4K57HYN4mBr8ei9TGD7t4ttzVefxb91a4YivcdRXpDekGu838t1NZWiRESQMr546Lx2TVh7LEUnwNQn",
  "key3": "ED8i3PyudF7U6uof6ShntWEC9bYTKt7nNybMUjCASdsUBe2pLniM2DggoVxEbUTgPmQC6qBPHWkTwTE8XWLHr6s",
  "key4": "2CU1DKcpy2eLhr5rqZBJDh95AGJEbCmc33UAc1mExaXPCVtD87yTJom6xSpYkKZ7aQYzhM5i6hB1Pe85DnefVqUL",
  "key5": "Pgjdb3BqFGypLC8QcVB4zDRZ8X9VzT77MyQwJbsTLAZJFDiw4eWaxQk4ESFEmdiq61inNRPrGYVeKyqVWh6NC34",
  "key6": "22hqMw2TBb8h8cnmBanSy54FPMSjkacRXBR5L4GB7QkfLWkgEmRAJ7tcqR5fXJbfa4LudfKPiQhtWZ3HQphG4CqL",
  "key7": "39DUA82uTY6hQpkk3ry5x6qPMN6PdkBRSpkQMPUQrSbjExCMYV5a98FKu1GJt6qn7mXRFr5RaNRv1senvnsRxZjC",
  "key8": "xZLqGt7MDJvzsf12YGqb2SAioxjK4pDVFLJ38FntUSCoXj6bY4dJYVYnMs3wHKFmJQ4iXNywQmWkWhoTJioiH84",
  "key9": "5ofhmyYgqBjKJSuoKc1suy7JCeW2KQspmk8jhrVB9mGYQwKm3G9h4zJrT3PqPz4ayFGH7QXCZVBQcqnaDY9gZGL7",
  "key10": "4bqYGetAm1vAQzFsGcTpSbvqLzDGKdL54ccttapc8Ci1bad1s36SXVK2crpHit6Qx8EVoiAKsFDbFwEvjSi2Q1p7",
  "key11": "2U3h9Qq53yb7kjqE9wJRAPjtJdy9Sz1dAvLtvHHHApdVcbJNuhDcvGcNeig5rT5givD9Ltn2VEPqLPYZq1Ynq8wS",
  "key12": "4osvo4FjZF2oWMnHHeoM5warvTeZP1R4KWVeL2ha2B6mamB8vqYtr8z4zU9oNZoxDzWtYPrMQkdLpyGvBFrFLyHf",
  "key13": "622c7cA7r4vozKipmEVywoPPPLFGito2Q2CyKLnGDtoLdF6ReT3wvfHSeJD9WMy5UVDrehr5BNnAJKQUxXq1JGnC",
  "key14": "R7egAQgozPgYqpyreWT7n9f7QdJ3fjiw4CtaBZ5KYo587FfRwCZJATs31nPxdbbHT3U29N63zPRETyJFiBE21FM",
  "key15": "4esfwWiYaVLZkTh2tBAPzRuR8Skj4k8wX1P1fbyY4t1LwSdKr9QrgBbMiFHDCFpYznEiyq3YNcyV7X3gJ7mA5dEY",
  "key16": "5wmMiAEteCfD8fvaF642z94jNybgpn6vsnsNUxGoexK21RdNjoMFKgyJRRzLj4cEXCWx9JcnvPjycTefkC725mSj",
  "key17": "5MVc5Pgkt5h1c6xjfWn8YtZYPBZXudfxEkwdCRg9L6xFtbtjaQG6gmmY7w33gzjtV1jDLZhaRCRVhMWHHyLZMLNk",
  "key18": "5eDkHTY1xcxfcDKvHsBDLWJGEh6ZykeedDweEXvWMs2mhd6kntxTgzxUso15VGxhmQSToHCe4X4Qk6UKXHmHXMce",
  "key19": "3G81kJJwaeJifqAgk5f4FrGCpmr6ogBRKzidL9e3xcaDtucaYS7XBZmBakxcwfADYWEKKmWHA7pKmGvmmuaaeYL",
  "key20": "26wsWgmVRTc5NSLvGm64vMzZNTy3yQBWCrAwfNL4PGMUL4MUzqRATKbR8UCSFSQQ5uinQzrSyiu1mbhdSpruGaXz",
  "key21": "3biPh4kWvCoKKsMKU7evrjgqo8y58ShGYvBEDLpYTD4pMgY6uZrHpM4bLFKa72WdVDnKY6Bvir3UvANkjWPz8DFj",
  "key22": "zk35YzgB3Fy8EgLYkQJyZvBKcgYXNFY1sGYQVkc3iwv7d283kz5VGdk4LDJhVmfxYZGN76snwNFssbEQUt7NMw7",
  "key23": "46pePCnJqRfHbdUuzT9ri8SzyYAkBmDVsCZ1oTHc2qJo2fX9EMLrdNESRq5i53WzZmt4JTvKSFpCEpSELGcxsy7m",
  "key24": "3SJ9u69jXZQaAZtA9386Su1bBQzAwLUMSvAQHdyZWL1ESTq7k1y3z5mgeTPDZu36MrBoYg1gxpzM8TfoAYeKnPRR",
  "key25": "2fsyX86wpn4tmJJ3RwXiun9wnUvYZCSDoQ3FbZP83GGiYDdfCEWPg8GYiarkjzcPftqfukyLBoH6X5sqtr71odWq",
  "key26": "3GLZYoBX8j4NWP8v7tYmMnAwiymQPWn3JT7gDNYrZ2iwzQ4KYfFUf6ZaAL9ygBYhLuVr55E1hCphCvgZZjgGRZE6"
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
