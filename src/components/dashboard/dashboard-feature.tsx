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
    "ojiuKd2BtVepRkCpP642HhBFUG4PLL5YJsfFAuVpXFcAAzs39gyM9m4dqnMrt4cP2MVqe83NXDMwuDvW55U5ZHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQbx4iyC3FM8fjj9G9ptSvNTUk3aG35Gd3KegWQJTjWCXDkbZDkppAayjpPteMumtp7oXVSwPYL1vE6BsvXGQoA",
  "key1": "49Yzrqnvaevb8Wi4Z9MhQmsLx1R6vmWpqQG9Jp9CEb8zTrBLAJZsZpVTJtdndKwNMRqi2iTuw1LuGPyhKoFNxf7P",
  "key2": "5kweLHLExZBKqF8ApSGQrerwEjMcZ24tSYSeKUYf4diZs5cZ1qpJ8RARU9BaQ3rRjAgfxhmsr1rcAUqF8Tmd4KsK",
  "key3": "3CpVjikntRbYfsQReUzUZH8Fux5PyzYovPVjBJq9XvYS8wi6wrjXfLkxzWe2qW1SjRgeWfuJBxeepyxmfmskg4Wh",
  "key4": "4JYMwivq3tfN4sKDotncb3HsAmA8kCK281kkAPGDVNrWMQzDvsSbCVA3st19tZQn9nXabZBVb1P7F6GWhqt1VzsT",
  "key5": "4N1QF98UARguZr6LZe4it79ocNEaUs5W8uLbAU52TmvJvJaxZ6CXCw5j8k3kfua61KFCaXovjf26Y2Vt9e2UGgLz",
  "key6": "2XxKm4hBBtHst6wxNFAFkdx9HZ7xpSSZckiMTJnae8kB2PcC4bKLSfXDcWeD7KPseh2tDzPFafPFsHADfAkpCWR3",
  "key7": "84Emk4dmWVgZjqcQoPsHqaHUzSdjuuyvoXtQX2ow7EzJfwnVcLT9qoQM3QJBSEtg9nyDR6yCtBd9ZHmdpNapYGR",
  "key8": "5P5e1YhTPopjDBEdu78FNdoeLXm4s9kFXc8mPWQVAzxm3tKVVK17oyjWtTs4waxEVqdXinMv75cqUgHWB9naGQCV",
  "key9": "FaXUcaCBdFy3ejm23TBWrtSmdkbF3xGXm7bExqT7KSv8fWPZCLeRzVn4iTnhkKcKzsD9u4tZ1dxc1i653Bm69Na",
  "key10": "5nTB7RBUrfcQ2EHYfG4fKTiYzvWiiLD4kecsetgyXiDEnqU3Nfjg72g1jZbcT25e7AnaeCh6NJH9LdxeR3PtWFer",
  "key11": "51kaMjnaR3uMc6MQqxQ9YwePDxFJavecM3RXdsntB5LdwGej3xoVWK4NpmcduQUgH2Kaoof1BW4xwBam4u4i71yV",
  "key12": "3LfDNmQL5acor1EPd4gSvEaUDiBNLSqGmAJgVT2jKWPq5KHkJtuHRNxGhLEtHE34a6SS1JPHdtWmjHosVChwKirv",
  "key13": "596bkNp5JqDTMLvRrFSbwotgKzDVcwn8gesP2k7FrRiyWhkneryhCpwvL8BJPF3iUhCw5J9QHxDptiEUyimwkaGe",
  "key14": "3QGpDXgHwT62LBazSrEGkHTb4p4L6MsyevJUXkRqMMezF44nkFsCMgC6ktEwcwbKECEcA5jWLiYyaRZbB1f3bhPB",
  "key15": "4q3GD2jQFM1Bo3Wn91NvR2zP2g6KoY6awjqyTjNAWtSHiNPm1KS8ZrEhDiMSUWFWXHN8eNKfFkoDbXL7k8wJGq6q",
  "key16": "4cT5cL3kMEtTARW1KSYMAXaYdSYLaBZXXgMUkpANDApbzD3HwVup8Wz3HzBR9URYhhBMhKCfW7a2mzwb46WuTVkJ",
  "key17": "3mbEbvvkDgMrdYYydmK1Gsqsu3YqzU4Q1fDHzPs38Gt7xh2UCHLejb6WxEPy31w4UArA3M4EXYA6TyUkvibR854u",
  "key18": "5ZK8N1af1Mwo325ciWkELWRPsNhtBAzdN6AG8cYo4KUrVBumehHbtz6UvMBJoBzwUjtTbgaUDQScgT3L82FpoYSd",
  "key19": "5m7MKEE6b8xLZqFPqfBve3gjCEef1vFcF7VQPPb4ubtmcSCNRvnSWyweUC2KvyQCPj8wEZWEdkyiquScEWkSZp7F",
  "key20": "3LXDzKkkzZfWjr9frWU4xYCeeB3wdDEw6iaN1kehfjYr1rPxhDifojoH2WfFRF9Fe1R5gfnCC2aoyJccQF5E2h6f",
  "key21": "2sGSSsNMia2VrxH6gKGeZLvELEHbZfB9Z4uJmLZ4317Mqj75rgHLK8GAA5TKsDTBTfkjXvsj8DkaJusEHAUKPCBC",
  "key22": "4BePmmE3PrYHt8gpHdoqgK5KNTBgPM1aajFWC14knHqPw6d6xR6VSmMgyW3xS8pyeGLaM6rhQH3A6uoBmJutFwZZ",
  "key23": "51MbH7XbJeophDYy3oe2yGuYwogTZLSad6bT3YurUF6UWCrsxaav8UNQT17sXrhNsjMEi5FkgYuaBxb9uNfBh5hw",
  "key24": "5UXAM5ZR5tP3oX5f3t2A4n8FjZvfW1xjTxxSXRgzR1zsaKr2vWqt7W37byXy5XAdYMvRCVmwrsJBNve9XWph1Dxv",
  "key25": "uSAkoyXywEjvvxh5o9XNgubbBJz2Dj52gn8wavoJErywGKAwQbm5oJiFm7uq79e1XW7FFPhNw42xdnW7xE3SYLY",
  "key26": "c9v2sUV1hyxQ1fU8S6SjKUstZhBx1uD3HpjJHjQ5ALd88AbR6BhzemFLZKK6J4bUFUqvaazFeb7GoeWChZAWxsu"
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
