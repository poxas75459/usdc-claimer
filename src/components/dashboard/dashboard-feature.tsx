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
    "5XUw3Nc39KAKDZsYHrz7G3MFPMmFDdoUA1Wi7JNy2T9B9YeWwMfwZTY5Pz6JNJDYZF6qkKCiqhx4mvjyuhctoay3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4hFWaWV6bqQ6dinBawt6NMnGZdWJQvSfws9SqvZWp89Msc4CnREZcNDqwjpiuP5GTRBQFC6XkdniqGo9BufGDj",
  "key1": "63dZ2Y5UPTEAee8MyLB78s9PtFmEpd6WUY253R7dtu2M7kvFDHY4o3ax2hnXg8npt39TiGe9dKtJsG7RiXPWx2Qr",
  "key2": "2ZjHy9u7DbR9Cbwof8dFhHG5h3N8m1Z1cH1v9tkTwNmUHbYDtESfcpXE9ExYFA9zWtmmdwoPovNfUwjxwXKKuPdd",
  "key3": "4JDLqy8TvC2M8e8Jwaz5Btfj9NpDU91N3K2uhshsk6zHgUvaHE6aDRzMeFzKjwPmbFjddCVj6Ky4cDNNvvUCY5i7",
  "key4": "Bx9f8uMrm3LZosv1TVTE6ZNJ3xm8BmRWaqnoJiq6fNDK1QAA3ZkVNTW8zmxXGUeWQvcbEiQRWwYYaqmdsDFU2Lv",
  "key5": "359msGyPW8Z6FzMzNJ3tJX7a7Ptp2UAe96HoekcSezF99mnF24b7LPU1M2HeuRDUtA3jWkCw7ab6U3GtSTLPKNvT",
  "key6": "E9SBCpUUno1CH3wPAjbALuHDHSDM3Uq3pjXyXhwTPD1AA8ZsMoS8f8Z2FMU3HUxAme1m9goMSoDKy3SAqiisfSN",
  "key7": "UC9BZYkDGPm5NsB3UUi6W1gL8K8bNKBYiqfRpsx4hXXf7iF7uQjSYxfCnyUBYfjaAdbfZ6JRtzmcN5c6VtPwo4T",
  "key8": "eJWGBprgQziPJaerT5Sk2B5vQv3kmy2jyG326ZpFn9t7MdJGTEMYobhNt7VyRPwo9vHPJ1F49UvzE5uUudGxnAt",
  "key9": "5fpxWCXGV9eLg8FAxnLEaLzRnHnyqZkWracAjmoT7CdHsP1tCgCeh3MLMeSqqytGaFpPnn4pi4h3H9fktaqX6a4G",
  "key10": "4jA3HM8uvKDMh3ZXrpj8oc6RZ4QH6sYmcCH24ifCBQrC3hzwWWtrymKLoa6CN5LjVw8GrSnjVtSjJ6pTigrGxqR2",
  "key11": "4wXMhLb52na9vQU7wfXDqND5unJXiJESwSG56HKtd9ViRwGyKVMSzEdUCBqdJiZVMSeCBTscXV1V3otifVziW9Vr",
  "key12": "4QZ5YETnMTJ5ggLHErtiQGKrsU3vafYFDZaf3XQxX47aEzSAtJnSTcTpYrBWwDHGPD8v24qdpVZk85tN8wVatM6N",
  "key13": "5VaYDSexP8ETjgfEzrrefBn4UZyscVev9nf98q9odwBx3LbxzQkaw588RBe4ARtN9U6rf36sH5qv9wmjbEwfSCTT",
  "key14": "2pZQyVuVZ4iAsEqAKN2gkpuXqXxKZFqtzoKY3cD8yPdgZYtVBxSkG4ywJxCrGVkTPZQtNntXvVEqJ38WP8VArFwL",
  "key15": "N8cXCfXyVosUKSFRysdoUEEjsDP6ibmUVHfSjNKsiQ7579fjX6bfhcvN5fmC6pNTb9Drhkm4PiWNQGzLaySsuLZ",
  "key16": "4ZCQBXPsgB16pGVQgfKT7NcpEnCma6qxYd23o4qMQZtAbKiacMsZQb7VDbf72DKDx8SsQy2brzdxKhVc9sKEG61N",
  "key17": "3VM5J9CKRUG5RjDaM2zDcxbw1Yc56SMhjoRdncY4f8kFrbDRw8i4JmWjmKRhkAnji2tNMZYoUepgU5tybGunCo5w",
  "key18": "2UqyiWfH4xrA73DEKz3FNoXqRFf9hL4poX9LbxgTr1w4k94PT9A3RF71Rrdg6pysSGVw7X6iAKvscDEAkZCQu2d6",
  "key19": "5VYQmLWgpRvJ4knZE98LUfMdpsgyKHbXA23TEoVn9ra7SEhz4GEXVcK1ToYA93jyHz6tkxUXvop3X93qypyvyrsH",
  "key20": "3hZeYeeNw7kXk8T8KpG5WgEchxRdxQN8UffvEceKcjuqR7zw5mNuW3VSQeVhn2pcgUz3piLx4aPSUZ57Z2rugRZm",
  "key21": "5KAeMAfizrTheHe5JaKCukAG8reaUjs28g16UPsVgqB8aoDAzVb4NDmj6ahpLaKNrgC5EXgcfJME1AGgMqWVQcbv",
  "key22": "486JSGr4n1cFhDKFiQB7KiJdTKvw7xbGfsUhgGRa4E6as6nbyKAR62hsEQ9U6Nvh8hvvY9m2qWBYK9URRYMNEpxR",
  "key23": "5k274Q2TWmjBKDsurQ9qLTedd8adozYCkbjLH2WdDAKQPJuWtU5SCWBjWarbo9KVp4eoPmrPmHZiq9V7mMWJs5Be",
  "key24": "2SEAdt1j2CTa7ccqP48mhWypRBV42rhSpQk8SKbfef3pa2VQdokVXfABRAD5bt5wQ2aDexeTpgteNMC7sufPqzFf",
  "key25": "BfANYpVHtL9CnYhxfyp2HwLuMLkkHreb3rja4XX5NbYr2HgfynLNeBv2Z3pYGG4663hv35cmmwrH47ucrz3mMnb",
  "key26": "ao7ZiNoGy3LjSK56oUz1A1Mq7XCZFJGcwQceSq94L62LG5S8vuuddG6GPcVUbPiiuymKAFKM7uEGDdMprdmSJEH",
  "key27": "2s2KQ3rJL4hMhCLBADyjuwesHoX7GiBfhsaoMmbUxjzhsbfo5AGoBps6P6JCtTMWWkafxSufcdc27EYBPYoqPESm",
  "key28": "2Pc9aHHyDxhp4AzziqxwDxYUwhkmxVAQjns3C6fMuYmRunSUQVRGZy4GByqkqNAgTvHcdQaHi1sa6JMRrPsUBdH5"
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
