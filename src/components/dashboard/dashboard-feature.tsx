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
    "25KRRjYEWF72sSzGKLhSup1ydNB2AHcHcobUQgininHwUrpjUtmwtnoXaZPvkQtHmEEjzCYhkZoVPQNiRT4p1a7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCxEg9wQdr5b35aignjFiDH3BrCSQTzJnWPrf34BqiNwKfAjqxg3duXnt1W8d7CzMcKnBLjT7YdH1auGCXhuWEF",
  "key1": "41QVKrnBonKAjWJX5DvdjndxGFU1P5yQJCa5H2TiLK7gkMQBJEmpndMRiJ7Bf8724yAwcabsCqoYfRHWrJPsCYRE",
  "key2": "2XpBTAynXhkvQ58cqpLMVGE4XG2zMqmbpVgGPgy9bqLKDT8FxvAQCEBmRh6iHwiAfAyuUKqqGkP59Ha6xtsBbSaT",
  "key3": "2PB6aspH5tSi6ujByZXYSnp9BpESDkr5d1bhWsejuqAafsWVzMsCVkUYwet19XSZM5BU32XXhn2BJT7KSfjrKDha",
  "key4": "VkSgbuup87gAVDrSbqnsLbV62zjDmLBmt3SgD2XGcEZKNLKAYCGHm67MduGbxtmVjc2eNuxsEL7rzjiXTCecLMo",
  "key5": "3QE4a3g4nmLVtuLs8TnAYg5vHdzU4S3P6aErfuBCYUeXDpFQgBYofSY8KF9bv689VnLDxTBzZix56PWSNNXD3kEt",
  "key6": "3LxuFra93TpnDBdr2YcBKovWSTou8bU2rd9kNWyU5EqnNqXwXRNnmvj8JrV71B9E57JVBppnchHsK4yAAkeNtp5o",
  "key7": "2JpcFygVZ8kfMM6d1rHuv5T9PzEEsRpz92a2uXpgXpbyBbhaTQ6NbcwwxAqkJ3ktV8W62YLJcLL8MeM33tgDMehd",
  "key8": "5cu8mYrvQFntYhyNip1Udamspv7tmrHFmBQLUzk81on9MFEYU8iwwBA3Zb9pTytLSatFBEDuXxZC3ug6FdqJzmai",
  "key9": "4zHkdYvrMHephtbmAD1y82r7bKegvkqzYL7QDRKR1b7Z3KM7rmAb2unvUEG6WEQ34epeiacaJMCz6SQXL9a7N5PX",
  "key10": "4t1r2Gv7QL1ZoumT6QMrKpoYs22a1FfnCFn5sqMiSteZxUxrxXhhS37mTtTnmAf9T2SShrXf1JyXjhhb6ibx1XEv",
  "key11": "3vkhsxL4YN2hreSFN2Wx2JSHkr9444qs4qN6eXtVYnQJJF6yEqEUBxnarSuhMeCASTubeEJEwRfi4mYfJ7CRG8bT",
  "key12": "WTyTDH2ESkiNaLrDBGUzS7bvegBckxg84tN54JvUYoc1pcJsF6UnK3aL8KSoSD9FiLxbU1PzMNLBdXRndWgQtVQ",
  "key13": "272FhS5yeecMDRg5Xww62cDcyBhS7miAv9Rh312dQbbxWu1YWQ6rYkGtLiKLZxhxH2KmTfn9B3Wv5LtETRAWoDzu",
  "key14": "2xgNQYAJTiKwNmV1H8D6n2ji4cuZGVM7s4d1Ro2TkHu1dDjih1QWNCzcqJTVPYt1eENarukmus3TBPAEDDNur4pb",
  "key15": "5TMurGW3wxqDztLjQuZg5fKVSngSqVWd9bzBmKUKngq6VG11LmhLuffpyYf869TDJ5RVAt42oddMoXLe4QGWE4wq",
  "key16": "3GZXRUPunbJh84ojSWH62eGkrgCi93Tf4JYCEZWohUJ9s6BFx9kFwCH6sQrwcxv6LC2fYpU3rLvxKEyQyVF5y5AQ",
  "key17": "4fC4ai3YZHJn9Sxa7fGKiMZdhko151zWkE6N18Gy1HCbz69QRpv9ra81DSsGgjKZ3oSZ3FGStNUt2U8eJwg6nzEw",
  "key18": "23e9MtKKxjXukBqPw6rfiAKanU17cLUyzo9s3C2ZiynN3995MabpxVuNz1avhbn9cQQFskovv1e3XvDGMwomDuFe",
  "key19": "srY7Wu68TMRvBSA8CrxF5CztqRsYdH9EgiJVQDqPRBoejFSjkaVqxomZR4jbfyishLJUQsjFwsDBVugEA35cDt3",
  "key20": "3KDZdZnmAisjaqEWyQ2GotM8B6kLWxpS8Q5oXYsyD4BWoJd9wrjQuXe5zhuCCRgckMu8gc44L2qaJkKRoRaHm19f",
  "key21": "247w5qWSsRzWWJSapNycs8tzwbr1o73WcXHmZLvwYruJQJTGZTVKUEkg4p3FqNdp2HYdH3fd7VCioM7zLrvYVP7H",
  "key22": "2gLoT9W8iLuFrZYLu74kD9ToyaRqjR2TV8uhaFQp8tYBFW7jdQ7cesREQRAPddrRsRqpHzrCbNkF5GxqFeZW5EQM",
  "key23": "nt4k926R3ThWqUwYq5kxoLEVbRXTwvP4GJVmLnxUuUdJVawTbnVykvFoM213x9HQoC6r9pxhravX8R243eZcgoK",
  "key24": "3k9GRf9wvnA9Adq6gkvdf3rBT3sM8c71cP6Qz5QUtck4Y8FCXjudBq2vHgu6j7RJ6U13MpUiCffr2gUE5ZvaCkFt",
  "key25": "5Ls21JXGW8FJKpGC2fbMDq8bQ8aATz8DTd221g7ctYkVYwdeik79fDFmvaYsvGaQ5F5mk42CY9beZLmhRcjCUYSK"
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
