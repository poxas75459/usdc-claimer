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
    "3jbnF5aCwJLPNjXns41G6N9gWuQgu8Za7YNTBjpwkKoTsHXAEbF8A5S1dYhFLEzAEQ2UahJaq42AuUbCQdnVowqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2C2XNJaYCVXJhyFyy8Mg3vH4MNWijZ7fufp3jvaR8gsKtPkhhhkGYFmxtxDGJ8HwR1KNESzPgub6Awjp6mYjmC",
  "key1": "46RtvbAHKct6UTNqGq29DQ6fux8esHW39kU5bufepqK3FH8qSn4tHsBC1D3fYZeocx6ErUNkiZJ6ZymFonsjiemv",
  "key2": "3VaiAhfS4WBpZ1xLNCED6wA8BJXappE8tSeTQ9fqYY4oerJnBmHWQYe1NHeuR2xyxpTYwifnU6ak4fusAZNY83FJ",
  "key3": "65BWrF8f4gQnUzeo52YPoVBKzwEJ1XmH6G97nYfWnxQDo65LcV23JdCQXSR3QPiP8pbk3nzvCY3bMzqkSsfj6H9A",
  "key4": "4pe82P5jdBciT6AxmVWBVYaAb1tQdsCqEvuf6Wf7gYCpmnH8NxDvSwuC1NcRHb9Pj16N3jpHsHaiWAXTgCX2a3dQ",
  "key5": "26zifHAJDxdLuw7FbUebhncmdUmTJqy3PnR6crAe8wvRCWMH5dZcqGDH1DuF65sdDPW6o6YkwR3H3nxGPFebPD6K",
  "key6": "QzeWq5vJyNBRkvHSYpwnB3ZF6ZxS7EXHfBJ6pJ1KroqhdPNP31yHrrMXu1AwvsVvdaPydDVQf6kjt6oBe53CxUL",
  "key7": "4fV1EYrRQyiREbYBmej2YxkvKDiRn4QEpA96wgJ9dGCzXYY1MrFUeLMAq1Y5ieLErpQAVSrWHKDCyHb7ebQ4FZJh",
  "key8": "49C8YcCTDFPTFu5bid7xpuXyREFjKCxAxQYTgD4tYQNVxJdMds2DoNWyHvzRQye66z2P6GU3tZTzrFzwAudevjDe",
  "key9": "28PjuhxrYZbzzQHm3u7XURsEGJePPHNkoLLdTtmuWzWSpNFZZahff9pq4josuL5hjvCJp5sNpJG8nfoKRcGpcALX",
  "key10": "4igwZTbaBRYXR3mmWb4rqwUWLg8vhEtYtJryNsaecqgpdZGcmJo4otsYGUL9y4SPV2L3urxVEPPz38fAJbqdNym6",
  "key11": "58PP4BtcCYnsJboM8S82ro5YqPNfEAd2zKsXr3vKFVFvNnFVkn5xFeP4A3KaUa8CkgWJ3366bBAZ68xt1Adp8abE",
  "key12": "3FTgxctqqXbswTDgHRuApx7oFaZyy2V36UFc5EcVwQKdDSPpqqCezZP3SfjzhG7ds2fmn41fCJGZpVTtR3xmYPC8",
  "key13": "4iNSE5YdMeRUBegohgjjEvVdQy2NY8Y5Tx6EtdUVri7uWAX2puzG92GWyvR9EVM6wjLqtXS58e7aV36rdNGm6eEa",
  "key14": "5iDL4sJYKsxMwNJ9meJjwUvQrwNFG4Zxjs1Ug4G9ogaAiq1rarpmgVuSmnwzzenf3KuGDJRbLuTUrgEuoueK74F3",
  "key15": "2qPWusbjGw54oKJZe4CtAAGrnZwiZAgfxXQN1BH64nDVioUnrqAnTyZGyTVPe8XQTCeQQ22GrJHm8jvTd23QhczE",
  "key16": "5QHLGBnVoMvCgF7XmUmQGrdWueCeyKx857MSYFB7NuqFa773G2yta5Yz3fQMofums5VWxsfhVa5iGNyDNeoBbdQ5",
  "key17": "5EdJvU5Aw2xQxhU97FMWruZeraHYwJDBt1UbZZzPiUYTYELuCy1c42W38ApWAqbon3JGaGeCdEvBbkRa6rR4aVF5",
  "key18": "Y4RaCmL8Srd6mavnvy63FBR3aDrcCxfYnnfDFHpoDgTZ9ars19JBpnKPBhPDavgj1dRUJqpssFmGGh8KqquCZjv",
  "key19": "2KDZqBxfxyftA5xYdUDM3AsBzEYCyYJrtmWFWs62dkHQ65g5XCAXwaMLnyc6xXVPJsQgK27JPdmsxcLEEzxNf1Uk",
  "key20": "5xZZJCE9A18uLXnsKL9xSVMXxTM3jqTW31xxiets6ExpKDhTbYpZ4vyN7jJCVaJbQwzV7zcrA3vmn9UGwfEEuyzP",
  "key21": "5mYX1jFSvqhdZiVsXPKTCpNeKrqBMD3jRsW48FDCw9TsHK2Bqw1mgpiEuHsjtYh8CmWRc9Fvy5T6XinQSSE3i2KR",
  "key22": "4fezqctYz5LGGZ2fKPyDXorW8dz6y5N8P4si6a2NcGx54PTAGaFqLxsDUohxW1sHwkpKoX6xBKaHbnEh3JgT9rW5",
  "key23": "28oDYkBJYHeWAaha4jSGXbEVFXrdVatiosc2gWTFuRBNddy8nZB1tFjFNYAusu1s3HycKkJSUH2rmFCihbkRRYf2",
  "key24": "4ms8Gm3EvDTcw5dcpDweEvXUM7cJDrKY3b3wQ8thoUGDyVmYt3y2YZCGSiE9V5xaDdq5k718uLTVCY7JkYvreL2b"
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
