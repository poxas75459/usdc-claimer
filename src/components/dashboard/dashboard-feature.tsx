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
    "2ut9oGBQovUEc8FN7CuprkKNRMN2Efgftqm86NvHbDBwhrgK4c2nFvP9JeiQYkBDuDLCSzx8fqTx1Wh9795Sq3pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5jwiuyiPmgFce9bz9p6WMWTYgkW2HoihLTNqHA9nVNhMjbb6QYfQ6Gr866YRpfJj4mwBbYGCKp1y3UKwZ5xhdD",
  "key1": "3LyLzafSZUREoyHss78c1XCLePnT5GjkyTM1ndr1yP9BgYe4PihKfRVpcxTnmFcRKpSrX8iQrZA1Qka4QFc53vep",
  "key2": "3QwH9xb8rfnBL1VfVcaD8aPUYrtbdwafNJCo27d7qfb27q2AXD3xv8zn5J7DvnZQyKw7oELv2V9nj8gT4yVzz64Q",
  "key3": "2pQEPj6pT8JXdYxMNchnuPMy1G6dq4GSqiMsX1ShEXtjuFmj1BjA4tkug43isS7ESdX6p2rEeMtqoB824JwgZkNp",
  "key4": "5mog5wLZ4bveGHuFbjMejsdJkeC8FfLnirVYMw9A53BDrDahoBAUfsisTz5qu2aMQYSTWbLHfZE6FNP9GZXCP9UR",
  "key5": "2h5fkH1CTkpPykgBf3QpnMU7nS1jUUE2XdUGxptBLACVC479p2N6KoRDVFthvvxdN7rioMMyRWWvb9pb2iRcU1Ep",
  "key6": "53fNKodNGsQhjbUDmvJixKYPuSxbymV2N5UzGLG39buBQxrYDNQdZrJoaU8bYTAgj7WwY6wh934eNQ3F7ScRfwuw",
  "key7": "5n16wmN8Gu2hy5XSghvbjuAHaYGeB1TcNduZGgfeWhCpwnFZD8uBXKczi2GMzPSr9JFJLVTKDTRUzuyedAqAVqDS",
  "key8": "5THh2xFoJZTZanZrRZTYCXdwsunrUL2X2wTJWXEQmRkGXwF2aGZyz1vnNDiqGYSAi5ucaEDcvhMapPUsC8rsGzuy",
  "key9": "48BxztwDa8T6fbT661YB5nNazTkhF8Nq1wbgLKU6jrCYw2FV7uJWwsBM4NjFLLvRVZDJPKjg5yLT2ScfggLQJXXM",
  "key10": "526oD5fQcNaymHzjuYzPjc1RGHsHerRwiVdSKsuCnQaqLESvwCNZSp4Hk6jDM46NUDR69ZtRkejAuCWwJ1cYceph",
  "key11": "4hWpZ8T53Bu99ET8VPkFAx6eKoqfCjknSqAa8s8AeJo4dzHS6SftyAn6KTUyosYnRxgWPRzk3av8bA3ta2BLKg53",
  "key12": "3Y3C7GVFSPCSQ3HuVasesn2qJ1ZAQ9BpTq3Qjr6HEEBMJk1sTY5t2T15G4KSe6DsHa4KHEVBMX7iaaEEHSZ47Y5Z",
  "key13": "2bVWJN5FaoXagxgjK9XGieKDbKiWqnizyQYg2G7opJRftXopvMGaM4UdALZFyr7PcmrpXiqEVoGsdcHHcSkcnuA3",
  "key14": "32ddSxdm1SAHzhiJY7FysRZkYgsxmAQuQsbiwgCZ4w2N1rtEWNXaRiCcNXt9Tia3f1K12iG5m6xFfTbW1MDVz84v",
  "key15": "5gnq3qgZty4STPdnviW5ibDyWhBxnw55xq5ycruUjFqmcppDUVatfbdNBmSSixPujnetfvbNJ68yQ3HgQMJDTJsn",
  "key16": "Gohw8fdQvdGmZ1DnsGEo8HJHAaS8RULqg8N6oVbB8c5fpduwd4UKZyDamCHMmFZgWNcDYQZjCPuV6L4s2h78WLQ",
  "key17": "4CJijTdFaLDoqBHz3NRQjNvGHdaruwCQwneN2Kw3bhuPW3daBSomC8d4Sn6t2qzwpGtcREp5Trtmq4YJypkPT6Ca",
  "key18": "31dCi4NJJaKM1oweQhVKr1f3CYpuViUnSUWu5kKyRHzZ4zwtQQRF37PptL8nnkwKDxnaadjUKiXhTaSUxbQdjHrE",
  "key19": "hEeUEMv8vzzAbLvUssdbMZYMpdjXEszVRe78tCXofWGS1dc13fZ3gDrZkbqkoRHP6U2ZujdsuRxdH33UMVJkpwK",
  "key20": "mUQL5E7DR2wm4MB6PY5gEU9VvkHHS8chi9poSPrKxFpZpuFxMdFciLy4EGJmkTUYGmuPF3NvkPhkankksgRB4C4",
  "key21": "4QXqSaDcWUnFxPkjsPKruGS5TYxScuFiVwAZEm1DDQyeycyi6zNXgbnCYc6RDzEkiST7KLjd7JF3uQnYanjZyY3e",
  "key22": "5YHzrXFzg8YAfRLTGmGeVXTjeAiKQXyjBAL9MSD1Siz9ThToRyAEUP27qyXzcgY5mMCb7xsrujf4pVgV7LR26cKT",
  "key23": "eXgQPg5Xm7o6PpT6qAUYCZZu2U5qiQKCqpdzRTCnV5N46nUAM7SMzHA2Ct8eRJsyuh4n9WFG9NJcpP6KcQDaCf5",
  "key24": "649RsvSdBJeUV6SojDyMZdDPXQxhPACpAYbCp3BvzaAim1eJwMimQHVxBcgpMKQV94ZcjdbxKvSPLPc5f6dUFso1"
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
