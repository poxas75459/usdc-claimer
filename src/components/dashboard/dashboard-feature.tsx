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
    "3ZoDNCxzZvcShoeeueUREKSD1d8s2JfyL6GaE8fEsKhZSPuvKGkoTt16jpKfFpMaFSSkKfmKsmGm6zaRhsg6UAjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMk5orvYG7TzsDgNz2YwtY5aZsT8cpELD8g8Nk6bitHaLtkWSUukGTE8Gizq19RMqv92VxcHWb4K9DfuTSCEHDA",
  "key1": "4R85DiXMbdFo77m3wq5aenZ92X21F21jwBStQbp4AQi1q7NQtQ35LrNGdPo3gyCDP37XKtdAk8pcRM6xFdrVer7j",
  "key2": "5afWzM7DUbJazsvBJZMJt6kmyrEvmwy2ekuNXdkAV8BSCkcocQ5QmJoTAYs1mRoByXf2Ffk83AX47G7h9T9xCFva",
  "key3": "4v2YmdUoX7Duz3JHvgZ9mbK1PBb9unXQjQxoCiHP7rnRHbhK9rKqyPCf95B2rDdW2QHB8nrYc2gHQSUkZcSmZ7Zy",
  "key4": "3yf8XQKB8K6nhboE1Y7KtkKZJ7oTAsN2QipiAMppPeP3xmH58LYGFs4XKi5wMFptVXuFqRe7geFygiRP7nN4yyke",
  "key5": "SLd3LjozWEvTtDmxoU72GTAUKnBiF52UoQ3Ad9PXEqaczy1ZUynnSBqpwCa3e1xYp54BqXp9FK4V93pnhvfD7Hu",
  "key6": "46aWuB6K4isuTRBq1isaaFHxdKtHqukeWLQ8NfvHtWsZSyMHdgiYZGo9y5XBLrVRsjoxQXdSWEQprCzgnUa3a3CU",
  "key7": "4MXyFrz6PSv1HsXhwUg4iKemS1QorBrgaEKjeJYvMZzXx7MwfSamjcZt9zfs3FkCdQA8AUwpyPsUV2Ax5azuDsgg",
  "key8": "4MYxrcyuQhZ1mCmyc549MoDkAMqzJkTt9u6X7GLDgFvAspoaidfsXQEUzntJyw5Ue6w8pv3i153Gwbz4jDowMEf",
  "key9": "qGfFyyAh9FF25EQbCf46yUdMWSudhNk3Ljm93c8WR3wpkUpHYwJrCp2BgRgDWTNR69wtU6NAEPjV3WCNHUGyF2P",
  "key10": "4Zx8Q7QBsacrTHj4YQEwVn7YFbjbd94EFQVgtL84UXukTY3MtZ5ocXzFsmMDcKmyPnNowFu3Gij1UXpjsqDuRPMX",
  "key11": "4zgVTd45qeb5Tqdrd62bwr3qhKVA6q2FZnA4pBXqDtZA5Hfsao8f7zU9Sb1GxWyuH6xMMTndJNkSw9TEXKH2AiBq",
  "key12": "5H1TPAe6Un82Y5TxfypD71p5GkxjzxTBaSEbEboGvctcn42eEyWSpSwEDDfR4cByBLiAR7hcXNr6zTUpgtqw1qg",
  "key13": "476UzqQzy9xibQeNp1aFevfNHVDyNUS93KAQQnR1wUP9Q1WFWCJMkXSUiopeTdmg2F6E6hQEiqCUYZNTryYBabXR",
  "key14": "5nE69RPbHLvTSXQccjW2Es78rnzKvtWki7HtxVzVNLbTgd2p8sDC21ZyifgDW2e4mXyhPRp3TBhg7rZKxdSoYMuv",
  "key15": "47wDoH7UA8U9SPMTeZafgvgn8iowFm8qAvsDV7s1uhHPKFygYrDpUexpMf8mRpHSDpzcs2sYPgETyuxwFoHHkMZ",
  "key16": "2SWeAkfsqT9mBWU5sobLVT9bVmcevZrL3RDKooVwUGwBN8CoF3sk8Zj769kimfELrHFKzB8d2vwV6TfL8y9fDQjq",
  "key17": "5gRx5i8cKutTjHsrbDMQtwt2NxruGnr8vKKhEZjJWmYRd8cESoCZoDjsrxUGmmtqypkM9kjZew7D7LJZec4eAymu",
  "key18": "35TLoZxMGaH5iBPcYz6UtSg7QPpS7cYb74VvSuj8Pz37aV1cuGr7wjB4BJK7w3fuoTN86iPEAdcyrpv3vGcz6SVx",
  "key19": "aeXx9XhSCyEN1VLncG1rawqMRoNZvacH9sFPcJeqXT1r3pfinQH9ssdqvWwaRhC1uup19hHg7DPnm29u1eeaqdz",
  "key20": "5G9jKksKYmQyzDrsdL3KBWYsQN2Ss5CxiaUPkLHq32qePxCLSDwJxgFnbnJqzbCryL5afkJxwZ8HiLKGVhgCSRJt",
  "key21": "2m8iHSQhg9V45Db8hsjbGJSwKV6nP7hWcKNawCmrbe9ksRXmoJoWg8gAVXyQGkeQ1rB5t8xZQtZNPryuTzZUZ2w7",
  "key22": "36RFFgRV19QLMDFrq8Z52RzfcFXCqohJPhXu88mJJevGycYJAcSkmsRcFSx7GzMp38XxQphciXAYFSbqZsetUFMW",
  "key23": "yWYN5GzYCViepSVpXh4jvQWqTeHQ3hhshJ42zgFhjg9gb5np2LWsq4wv4bvJCpjBMh7FCerz6fMQ1rJg9qJ2ugb",
  "key24": "3tZwaquBTCk9mPD429QDbpMSGeFE6myNb7fSymwXEiwQQFgu6qHw9sYoVBZW3R8x2G81Fzfk72FfPqup1b4YVQYM"
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
