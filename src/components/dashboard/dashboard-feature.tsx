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
    "3BjWqBseYk67EcuG133BCehN4XJ8fVF7ShHWheAs6s7Zy9bw6TXYBczxtHjmoh8kixv1ghxCpbAbk1qLbtHHyGWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2No63HN2ome2kEZPm3HufH8pA3eyvgyAm5mDEzz5H7HTX6JutvuFUb211D1gdGpccrph9EPJP3uwykymF638rF17",
  "key1": "5SUYCZpqioEAijN3qM52xh9GfJjuCp8EpKKdhr3yHuLX1u4znVBn3UkkdBcUUS3W7niAC6nJnEznX3fkuLoGUBHw",
  "key2": "5MMZ8QtH21wbBHgEe4EQRdqp5LJ2uMYJNvRc1KHKL7SZBfjaeiEp4ZPfXhKJGU1mnsQzATdL7dRQkZxxwXkaSs63",
  "key3": "43ZdvEwGuh81r2h9C2NYJeDfTQaZqbzMtoocnZjpCQycsry5g1Ni71zw3m95yLiFir8qc2fTjdBYEdHVvzs5mdA1",
  "key4": "2Cr5PrJQK94qzyH7epWbFyn6r1ZWBdYd2HgekuNxKyCyUAXnmbmZh1BD4mmHQheNVYd3LkPQeP4D3HABwQXr6EEr",
  "key5": "W2vDLi449C4WeEfkgK5aWGPsPirSHM32FZMnHSrxh89Hdf3rJVXQ3BaEr3dxVvJ1kCXyQg4PF7M2Jdq9WbTdNu6",
  "key6": "2kFjJhUfWEYxR2Xn5jenCGefGkGujp5YefD1JSQPHpCisGuiqMeP7o6eQc6KBxYd98iMQKTujz7at4xpXk7C3uTp",
  "key7": "HfxonLGiMqPm13SfoX3FpPpSqmVGbZenWKB93DYZxpuJnMXwcMieD2QMkeTW1V28M3p5fzzBbEgU2kAQ7YQUVyP",
  "key8": "377iKKPB7TvpaaUku9ZsAQzL4JNxKLvNwfTML5QyhboLs32QuHGXyM3ETLEdwQo9RYiDcpuCFFyYLGc9zNEYyH5E",
  "key9": "5KWFVvogTmT2NvP3N11fZm5gMRsGh4KLxNqeWuYiWhHjehBrktgT2xDc8qhw2rvZqP4UpcrJ6JoSPg5GN3KXhspS",
  "key10": "27JsMApkJYwYbbVcZaNGZ1uvejZe6jh9aw9WcChouH6cgrb3envveuqGc29BKv6VJSWCExSB2CNyhV5cVCA5YfXb",
  "key11": "tTceCGWCnEdjUWpWZcDKDLJxAwupxhrcZssPRQ6jQm9bofpaGLvT2qxQe2TNR9egYHyvPjB2MUPDVLontqoDraB",
  "key12": "kqju43sEyt4zZRspFvYX4EMy6Ci9KwQZnkqBCjhRz4PVUjRURwJGsCU6KbjQirxGTNBEnfi3Bg5kpTUQbGb9qvM",
  "key13": "4SyP3uQy8aiCmTWW5UJLAkckKNY3Vdtxc2KtiorAx5NVRHAbgeqyWa5gVsAt5h3atuFLQKEBgAbE4edzNhu1XxRy",
  "key14": "CEoqttxREiYC3QteHuTKq1cRzg4rteGeigWL9n1Aax77GfpUwPg4yB1GhH6UkKwcjtFzVgHqGQDiaoTmDxzQWij",
  "key15": "n6ZpHaoxCeJ1oPsskthYfF7X7tyHn3GimHhqmgokCRLUhuXgLxCDWx6rw96B7zotr48y9VXPk8CyDUo7PCsWN2w",
  "key16": "54uV9NSqMErs3SQLyLSWhqLzYzJRib2nFMpg8zQxf3qiHm4iJDQ8DQscQh5oR42pf3JFWBQQMGcAuubAiapKDSkV",
  "key17": "4icY3q38AU9GRVwjiryoVx23HgHGtiiit42bKUPxTyCHN1pQWFVV8bEnTwxuojEiUVmrxWoTFrCUAdPYjVVaNi2j",
  "key18": "4ZcMDA9sKC9BwJP9Q1HfykQazTE8potmAqBaKphzbdHr9jiVXE6tfHGvdk2DUQbLT2sKy8J6QDAPMWecNbPCdyCK",
  "key19": "5Wk1beC6Ax8thfiJywwQcRirHES3VB5pC1nLJrBnGoY1eFqC8H6kgoG9xmQtwfiKgw71YQemu5nPur9YKLo3vQvH",
  "key20": "5AXnA8MwGuuDmkavQfa7cpyDhw34BuiRZ1RueSgr4C9cUULGXsBM7nEKiaTwDpSAMCENrqkeeZainiLJw2uJspfp",
  "key21": "gavfV1NrGnqZkyvqAd2ysHNvby287FdtH6zuuaMSjxyuHfRLNLzYkZ9NM65D3DHyAWygvn5UiQVmKHT4L1d9r3f",
  "key22": "qHPFLUtJSzDBecG6PgFTmEiycmMr6WjJbnJvsr7e9XrA3T2peQBivZfi3jCyAjwHm6GpLzNLVwb9NQZYm7DJk1C",
  "key23": "4kRkqgKpCro356miG8W3qAviNtnyXnELNt9pCdyHTFvXE5SNrBcGttZ3mUWLWAkJ9b5fqnEKxLeK2JpV1VJVCfgH",
  "key24": "62UU2eqsuqAUGz2tWCYGPRXk9UPhpLd6s4HZpiZPjYwfqJ6DG3rq3SCPNZL6otsJWdfT2RJ6tem1g41bogmTJhBt",
  "key25": "5Wdw1jjec4RNn8uBi7mD9f4iaQUBdJFggoUP54tzjmAde9wmeAR6UrYrpdC2e5svUgHwzF8GWFkeVmoMFgV5fsBY",
  "key26": "4Y97Lr1LCa4tykmL3HWeeg2Fa9gZ1PjVGBrig5biFMUTJJpWLYQJgB319o7Fytc1PEGAefcGkPBB1dBGEHzn1tH2",
  "key27": "TXudkAJrrmwV6P6oL9k7qE1127qb8R7ehENyUfFMM7qczRt1KQtNp4YUqJBftZqudB2bbqC8TKSZervQu2rP6rg"
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
