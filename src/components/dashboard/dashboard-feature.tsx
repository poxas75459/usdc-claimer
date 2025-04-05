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
    "42quy8Yuz6QZPPp6NAwN9dd4cbJ4oRowcAAvbu5iXQe3sXkjt9N4skhA9kDdo7x8HGoS65WYKeWDGDgSbMmDam25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezHXEk9ojMWABndqdsm1erv6mFfMgF4T8BKdRac57WmGR59UEJG1eSaqiaWEa7bcqiWABEWg6tHzy1RYUY6qXjh",
  "key1": "55sXee7ySUiY9fP4K73TpXahvqjZ3zYTk6fToiPE5RJYNVejTSkrCXBwUvpbw7EdnM6c3ii4zrpzesHBGrsEQfBS",
  "key2": "MmYtsZ1HsuvJF9vHSGfAJMjfQBdi3pBuVNnL8uKtfEAxAxs14mW9iNxLjmuXR8Bm3M4gYqect755we2Z3QzYCff",
  "key3": "35RA2U7PESRaEBHGeGn8WrKNXzmZBx1Ds95Wh8dJ3sJaQjp4uY23RRWMymHUee5Q29atM1AkUJrQXGaycURkw2mJ",
  "key4": "5r74p7ZPQGTnT2squpg8fVggnozN4gHGFyNLQr6huMaMLoJg96wbyMEE7NoHxh1WpfCkHNjp2y5dXHgiM7ThjVSL",
  "key5": "4ZiNUdNRmt5KdYStPcCnFz4bTYuHEnondE5egRwz6TxUbkiv5qSQtsuTakjHsy2fYya2Z6qGcJuEWLJB9Qv5P42b",
  "key6": "4KeSCih55DDiJKZs4E4ujQWbmXAgYbUNV7yfAPPNsXhwxvU3sxjUYKXjNzYjAk5Ck5MdAw7oCKCojTqt7SNitoDi",
  "key7": "4raq9qBBfZ9EXK8JyoSQtWAKmVxZ2xvDH2cr1Mpjb74rjQ5ygcpgxtFzBng9b6fwiidBRJ5c2TGUztda44pyc35M",
  "key8": "4N772ZsEPzDdj2hJDgFjbJ9Xeon6tt3cfxwgzbiGmqk3r8S39i1RYDMj3QT4fxSZEeXi2D9skKcucRVhK4igiG9g",
  "key9": "4jXPZxHRk7YBPFp7XxvjeXkvQHCfBUE83V4SyPZ3krdD7AWCQmJSNziHkLNEX7Vgw7T8wJXyxKegr7tWDz6CyxoS",
  "key10": "2SSqpHiA5bhHimZ3xDEyoermu1tF7ZhYgwLbZ8LY3WfsZTFW53UX3YnhjnELv18fLEFBr63Bxh52VqLDCe6B6CJV",
  "key11": "29xxpt6nfxbnmBefnRZgCWk5xkHdQeUBVYfSfUWS9iMpz3GMXxq6fU9Au2zq1N3iNxiJGVyUfFQv2iFvGBg5Fg5y",
  "key12": "5jQArFQ9gQwo7YEt59tyAQ694sK8z15tKB4d67DDG1qEtTitzLG6j2dkXxAvEQdWx7CPfyts38yqDFUv4aYMSnNe",
  "key13": "49opJU5RMrfnG2twsLUD9cAyU51oBHGSs4mcZRNybepUBKTfnA9HufoHojxxvHpydxEQfiuwTwt9vzrR1d4SefsB",
  "key14": "4ZUm3Wx76wVfZY8xGK9NufZo9AVuVUbHBVK71yHguTBmkuDeF9czfVAnHjDnZwsjfosmUbd6TAbQkmBJDuDJZGvs",
  "key15": "3GRhstC3D1dw4JRj1FQzDwqxD38agHQSocSX6Ud8PxugmfVFSRUM5ABeRyhj7qABuMbJqJBGTkG5YmwJfEV6QXVP",
  "key16": "26rKUVuL89ZEV5WuZLVdt7GfcKJ41heYkCsNr2pCUCkkVMvSBUG29idhDpHxZzBbFwqeG6KGat1hYU5AWYChGvGE",
  "key17": "4YQEf1Tc1thadZiMTEqttHzZgsaidqoJhyVbzbruZSqbJ3s6agEHHUpkZRJVePTdHz7fVE7pj9A8JKRsJznAqsAC",
  "key18": "XmtCs53wXXVgc9rE3t5EDWUdd5hPQF8EJepjrHNiK9fej4L6r9oqAuSuLtQHkyhNV5zn1nZRwnostg8zQbcPwUC",
  "key19": "5pMcTDMZg4qv1fA8y9LM5tuHQyGj65HqTYrLVwwti96qpWEYvVoN9oeqnFvzNrfZrYC8TX6mL3BvsoPzdeCzPfGK",
  "key20": "VYNcVZafgMDLbMjpYnVcRJtrTv1Yq2RkwYU7hKgFCzqpga2xx2iD56zbVVF6CKj2LYUeWuk24wAZyBhhjnRm5wT",
  "key21": "5XAcjZCE6QPq4u6CBZQdPF7ekqVtWXuymo3UtB5GzpBqnWow66gH7u2sPmnnTnec27HjG4WkEpXuX8QbFWBSNBaE",
  "key22": "5mDVfg8u8gpwe4jqZsMAN3j1B4CGUmaFqsLdtBHhn3bbDKsyb9jQA1NLEeG1gzBW2JpZAwaSwpeAcsRG2RGYPuFw",
  "key23": "jc1Vigwv4QTGNeBcCxxJCKedR2U4YAYinTbf6rT98oJBCKDfMPxtnsLwBLoavuuVx7Q6C6fDBZb3nzKxcvWiHCi",
  "key24": "3dvELwkBSFtY2u6eKfLFgRZMfToCemnE4dA5pTAhMidiQyU7huem8w49cz13Y77LTTDkz6NrHfmTD6NXshE55Epv",
  "key25": "4qQuXyyVuqVBQGToGBuxUktSHqvzTGV8ufRHT7Kc65wnaCmnbfk3ESjPoZE2fg1ijFJzjoiL5wAuWYqz28CZDMns",
  "key26": "4TLyeVrpVqEYwcjV8Ba3MLqDXWMiBEE2uK2PsVxX6A2gdQBKR1pPnJbFktrW7nSTfdoKWogJqQCRjDkHtoeo6Jpm",
  "key27": "5XujHtK3ptLj2DhtCq57qj6iNLasqxmC87bz4x1Er4Vmjz942pwAkshZ744USgb5cKQAwF2nGgGauQfS1daqpbiL"
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
