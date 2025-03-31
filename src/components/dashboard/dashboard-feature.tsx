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
    "62i8ZNWny4v4QjZdWyJdzAVh3L4SMuPrETooHsKdggXpMwhjLyTtkyN9cQAQijPiCZcu9r736Zh7NNF9KqEXF7mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kq8GbdyiNCw8sTW8vtnsPXRjpbYZ2jqRik4WxsfpFnoiW3dhPYV7BMjBEA9HeZ824WThJWMyeAiFAM94trKZ8LG",
  "key1": "TrYQmH6cEER3QLGwwxHjGfAX1sYeaXckWGxz1vULHbgMfEbCm65dygKcj6V9km1zTJN6X6HBq1E55zRFDGDpuRa",
  "key2": "TKh5JLQtcnhuELq7fVM4FknH5naSMHT8FjRDbsDYLxwfX2T7TG2wsBKokTCbyKwqiacHpnr9KkwU6wcdoCgQac8",
  "key3": "2mgWwMbmDunQPxN9kgh4UrLXemzDU7NRu74inSRjNDZ59PVsbcCzwWHppqsPFEGQa2nYPHw9z23G1ezgpYj7UY9g",
  "key4": "vq3WNFR6TJzCQgjjhiwDaoGj1FzZE7fi7g4nYFb6UugETBz5RR3fhTGm5iDnEsx5gdf5NFPtEZSN4M1pJ9Qadg8",
  "key5": "2HXeLtWz4TqdeABQiYN2bBtpzdS3vfhdsgsrciJwrcXtvNKaLvvGikV2TxGPE96S9RTdVviPrq1cvAWej91zmhfj",
  "key6": "5VRsf8MQbfXXPKEE1Y7oQ3ZN5C6oRKdDisWgMyqDAnxjnu8f9oXe6BwQHz2XsPTfHsp8cku59k1J7Je8EsaP3f31",
  "key7": "dMffs3AmTNtG8WxxM35PfAYh4nqL9YXbwpGFYgZqrm8rYroxuG6juwxVo95UBBW2D5YYuKTs36cccpzRHdaa1Ka",
  "key8": "peK428XukoPZYjB6YstQTKiH9x4g2tiPYSpHdd9fHSR9SsD11erV9ejarQk7V7pUDyfb855xeK7wtUaKWty6grY",
  "key9": "63wsS5j29HxmsUy88HfDke7JXX8ajPP4vE7TjrHj41p8PZnF8p7PGhkFb9h9MsiNhD74pFQggJXgAGRBvfUMFMNW",
  "key10": "ZaNbVxtH6v4FyG46347uisESQ5dNDgMkeFbrPfCfrh1XxPefzu4tTM7rBHsU59eKzD6USujTEdR5cXF6QGfSYdz",
  "key11": "5bhyuqtsULr3dB3SmBNUoJiNnyrXzZazwuYwGx7J1KhW1E51HEYF43Moitvn94f4cRA5QP6gtXfokivWZCp9u6YS",
  "key12": "4xB3yFq1U7cNRTCr99jumSpM3kuGCqpn7cye5ZmWFQ2hLcs8DK9NHUCFeQXDJe1aaaZ6mq4XXDSHBArvj7pLeam8",
  "key13": "2kUtkoA95jeZNnB87dscEFk84TMXyN6Q1vF7rZNEiEeiBcQDHpwp7wrqswZrVgmhVw33f7VKDSfmmAKSZvuyZbAz",
  "key14": "2nYZPB7Ycy9UMHXBYShiDDq5cs8JfmUL5oEV4XBXyuFUsDs3TiJDSaWX2FKq4AjPtrdHZdKXT3kfWajT9BNhpFz1",
  "key15": "3bFxKh8fgX2Guhkjw3WNk3gN4KyK52peuQHN4nhRypD7qVvsv3bBE6rEbyJuB5KFn4jXEcG9724JXrHJ5e7Lfz64",
  "key16": "qva79xHHAhA4Rtn19Ercu4UQgy69KRSUaxMo59KpQJ66MScyQJn1egAnGNN7YRwU482Np9NcchsoKhnPLmEYpQG",
  "key17": "63yjNefk21yAY9TLfbkB5XrAQwEmpAHbo5rizxCEnCC5rXgUDW2DDWFrSTYBU731Los6hwFRAAC6YFM5vfdZSJXj",
  "key18": "4UbV6eHM7qsabxgSgueyFQmsDDf54jMnV42V1qNuy7nk5Nk2657YR1jWSsFRU5wCj5TiABiKXGoQvQNXb89QjXGT",
  "key19": "CqLPA91YVcvY5UkKKPzwVDU8TfbdpAe6WG2NpS7HQiwDv7yVSD8nZCQQiWB2k3nBP26yLsCMdAY3BAxmZujdERJ",
  "key20": "5APaRHM64cZ1JkkH1VofFWuc8F7xyke6KTSUiZ2DuLTmjUAeMUa7sQVY26DxoGEPUPZVGsCzTrkmXsCfE35MXe1h",
  "key21": "3vtekR4Teqsvo6B7FyB5SY5f2HHLpRvz9VZfPVSfc7PcFo9iozhL38tBz9mzwjc7FbkCoR9VVvBL8uHvvNaPoESQ",
  "key22": "2CMsmwjLTaG5MgWPV2HuPoj4NNzV98tUnB8nQmRRTYAQZRbDKYaoF6fCmsdueauTTL3PKZGCg8CK2EVprTsRyuxw",
  "key23": "3PiAAfMJPLzkL4KDQfr1cVwTN55JsvXEf8LhSnGdQ7BJPvgbq9czxJjs1egzVVrtXgLF8yPoMqRR5xNKATxaYGpu",
  "key24": "24cNqq7pNijCSqmALK2WxPqxBTE5P3GqRe2y7By3bQWhARqUANkL9dsGN1ucx6CPYL8SQTNrvxoAcUZuGruW99iL",
  "key25": "obQN61CTWnSSE7ph3yM5tKgiJVGuqMkTfh5Xe6rLtxZvf2JpHYJFEfmzepGGqLBSK6Dxx13JMgL6HNpmMDkPhSf"
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
