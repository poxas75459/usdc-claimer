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
    "3HB1WJNpELAUQqeCUwBtpmJ6WATCYQxeZcAeQbLE6wjdniWezRBBNiPZfNhv7MmKrVkLH62cXxYBZ8BGnaQtsjp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPSAFZRyW1pL1EVazJj4LEtWbS6B48GRk6sNkoCezuo1m2AWRBY2fCe6JeU6DWSATAwQd8Zw8a4ZtL45BcK9Kkx",
  "key1": "38pPNqQkobJskevsF7MKWfdHrHEjiUsX1dLULtTXkWvUDPK1fb4QKwYtj4jFwRFpdUzWFFGWPkuXHLCgr222nwqi",
  "key2": "5jTCWDzt7Uz4YsR96Zjwdf4e4J8ddEEmM8UaZ7uEKygkJD4wXPoZRpffguKM9qt2jb2YX6ru78EzgUFrVqgk6m97",
  "key3": "3XL46jB2J8ASECEEhthkwA6JQxjQVXmCQyWUaiXGJwY24kYguaWDcbTeifh1GSdxBp6i2FJTRhjrYxnYoNx8wfoV",
  "key4": "2KEXcU2eHzRBYFW7rpVF7uZsEaKnpQaSnDWwC8rUZEvv9psuDx6SMdRqSvh1ytA1ARZ42SW6UuJv5TniC62MJLtS",
  "key5": "65x2onWaZDaDyDGo5vUcemPj47dGDZAd35ztymtE6yc7VJapxuvWKqrNQs6HdtyPwsy9GpmpWeEZqqpUUUXzM8rh",
  "key6": "YLdcPTaakNbiL1wizLLxkvZhAcAeHMi9PFeFsDYrCgAM4UG2QRYLyqWNyo9b2DgP9eZPevemuycCyWjAQWmHjf2",
  "key7": "e9z4xz6iCRekccve9s2TkwgEgMhGVwo2n2TTTCFC35BfJYUkWFTqbUKnLuaEVztHpzwy5rmAVQTvbTzRkSpz8jL",
  "key8": "dydpEoGbccnbqt3hx5QcoVieC5N5QYvdoYP8ksE2RwWsiJx2GXDnZ9UEzh9C8szv8KvBTe5CQMjy73eLqRTk8Lf",
  "key9": "44onQgdFM1X9VhjvpCzAVAcS6aH1M8ng6Lk9BBA1GKhaFfDect4zfSDiM8ahJQB1apnPoyG6WaEWb5S1kiog9kPR",
  "key10": "5XLkLtFp81CuYnhMt1kLxg4darEitByeVQcnMknnnUsqFqGYaaRyNppef4WbW6Xo92pnPDbWDuwH48mE3HkLkPV",
  "key11": "3NubJ74yHGDYwGrE6PB3TxBz88h5wBYo4dsDtFheW4k8mH6PtYpp9Ce1d2HDKd3yZqUPqRHkovpssPiK8z9tsD8u",
  "key12": "CMH6d6QGwvZcBnE88bMmRZrPRDEmUYABmsN7WchTmDwA5HhNdCPokAXEdGyxqT6T43119G5s7uBVVDuWDsgQKne",
  "key13": "qSAySPVbYXibiCZ6cSES15RktCknY2DR86Q4bWZ5erRYk47DFVeBsEMEYRutWvqJh2yNtzxT8Xm8UAjkWTkhH7z",
  "key14": "5A1ZH9oHy3prguGdAQQQMLZNnMQjgAd4hzJbFsKesavzhF9SLM7tSsSxRPG7PReEnGNppF4QP9nBLrXFQH3CstxZ",
  "key15": "4BcV9Le77dNpqkMNSchYPq6ukBKhxMjkNuhtAR1AUATV9CCsd9QVpczhyLJaA2y8pa2BDJcM4ZW3txDrnF1Hn2PL",
  "key16": "5UdJ6ab4mjcHqcorCjY4G42VhXdiLcuKRF7tEUJB8he8bjAPydcRGkuzg4L213As1MsbS3V755AJH4VPPyNPiyEc",
  "key17": "4NXVj7upipPXjYPZMTicZVFUvgCrKPiwCvc398C44SbVK8Nykw6iVsG5mfjRpvjLHufqrYf4eSASX928zprM6NpW",
  "key18": "3HR79oULYBjhf3aUsqRLEVavVQxfuh6FBEfta1Skz3fBZurywb8VjVfJEUUAP2ftkjAzV6U7dhGXXqFaHq26dqpT",
  "key19": "4BNHxBbeteq985vF53rG2EsNQz4MCyoYxX3DVWwfoADRiXfKq9z9Koe8Npq1359jgawgunEgbD8U5e2YHgZV7QJR",
  "key20": "5RVdoAur3thjz35evL1wDJrqsctJJb3h1h9Yduim4VjRvYmxeuLcTcNP8s7V65dtAKZAyngsUk1hcEKcpf9Ne1P4",
  "key21": "3KKRSbcW9U4M9ssm7So2fq4x6QRJEAkHuouw7WkRH2yhQ4VUiEa6DgjpRF92kr4e2U9j2zF6B3gi8hPtX6irobhP",
  "key22": "3bKwVDTvbEB37LvW78Xt1ku38AbGBBihG6Uc8Jm4YuwboteBf1sKxtbyhjSKjeUEsxv1czdkKC8UysicLLqRgaR9",
  "key23": "63KfZMRqjddxNGiqbWyNpxA63HHyEGm86BLcHLQVXuHiq91qrmBZgBXhT6tt17RLZnHJavDFUWVSdqi7vfqAmsXR",
  "key24": "654YqN39cPnxD82J342aE7AxNX7Cf59eADzgg9DXCg2tAxdiG34BJvdtQtpJb7tjJsiJinEeHutdhsFrZqMywTT9",
  "key25": "362DcrxSr5K1Wua69Anmd3PxFTSopRwjyNdCSE6bo781ejx2i4GwatbGUaPAJxaP8P5owsJzJk51j84cr5SBYcM3",
  "key26": "4fX59ki8Ta1SKXWgamN2SQZW7dJor5wN9Gsf1c8BRgabP3Vmznseqd6hqpBWLF8BGvPmiiwTGcXs4JoSfxKzXUpm",
  "key27": "7eb3WsyBoX3uqXdTswVzirbqJ6ZL9ynYMxfTEniz449YodxJ81g4DDTeYqQzWCFM85Ln2AH1Y1omv7YTrDyieXj",
  "key28": "2GzdiEynYwVZYpZTZ9sZKrsr8pku6qCKAnoqGU2pY2kYc4rB4CwBA94gLLW9XrgjzndoY3BcKMApKw6gAcF3Wggg",
  "key29": "2rRJ7V2Q3fMaLMEEJJhrXkHiCe1CniQE6bmrytZU3ckPayqqEhP5KKVLkveEvsUhMu6vHDjS5GZpZS6qkeP5snWa",
  "key30": "212ehW5jHZPue32JKo3yyxb4o3oo3d7r1S2SciQMfsjZ1uLvDjLjxRgsAbyXwYfWwMYph9g5esQwzCkSB17XeeHd",
  "key31": "rtsAWtktfSkLfY4WJKrSPKJuUDNULsr9UboJLx8u8xP8LLHJGeng7DAahs99CvEB5nvNYGgv4gUWSFysbjXdRCs"
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
