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
    "3Wbs4YNcpW3VCZR5tFfinypyLFXCbcFxJ7YppMrZ8bbCCAh8ENCtJhwWVdpANDoLtpADMLW36ArcHFDL8SAWpdeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfZfCjiKL6Mojqstuk641ZKnJpAnEWBUmHXApEKbqsA6CLitqMGnJmzgBoymN9BLuaJNTWBdqray2WCFb6TzRX8",
  "key1": "3V7Hyb92uYPyJBSw2gf6nJnsrTBFQPNjcqgwTXLCU5gFQndAZ1YfHXhAVP58hUkXSKi7wbLMs6bJVVP5RSjnJkbH",
  "key2": "5nKYnHt8sy87ddLSQDGgcGXtBYkvJE3MH8B9EkJK1qhMmgN9MTmj2uNev4V5dF2CmUjcRL5xo6zixxwZiCDmaoMw",
  "key3": "4hkErD5PLneWtf3Hppt851Eg4xem2Kyknw9TCioDXFkZszAqM8nPYh77BeW9zEkoE98eD5JBTQs5EoyboQR6WwBe",
  "key4": "AikhtroXeX4xKD1FjszJdjhDb6dGCNkqyY4CiwyVteTgorbaQrV2foKgYDVatK6bXmTzAjF6jQymoEJEinfWTTf",
  "key5": "4sFsTU1oMaYNjpcK9dEubkU8YMQ7X432MacAvAABMZJvbHc4xTy27JJUcjLV5YuEPyvpswZoqYtwSVAKKmK9nq2X",
  "key6": "5EPaxx3zbCt3AttWZxZQ3xokNcdujghX5FJd59jWn5NGue5nDfq7mtvDu8KyDUu23DxFRGrRm9UspatgnnMamVGY",
  "key7": "WebYwzkeh92JsRHhMgYmqNP7prM2pRRScctNMYkyK8ZcHBrd6yq7LRfdEsWqwpfZavQti3vzTeBLAzbi7vEvz9v",
  "key8": "4RsqTWYqi9JQyKvBUbTfKJhU5AVZxfKFfccAma2wuyz5qJYcJCu1ovGaTpmoJQPtAovokJKwfC2DGLUvLdZ8xHLH",
  "key9": "9byjTEeydj1b56UYt9StMcRGJpqF4253PtPUuE8r62N3zbFtWooDwJVzBF2mFT3YSbxX9LoeBECi7FDPoEPxWxq",
  "key10": "J4ob6FeL3utcaVyQexX5PVqjycjtxNV8A6cfwCV5AxFhk2EuPZ2icymKDh5jUgp8NtM2sTYV1FCaHhoyW2ZfeUF",
  "key11": "5UihpZG8iB9cf8Gs1iGpLJgSfnJjDwiC3pnDsJG1Acxc1jV2oQNkch2GnZLkwbfK5tPzX5xntxakbAfBsdFBpXjd",
  "key12": "4VR3xRrQypd4hMdBZD64qLhLf4kjrgPKfP5jJWub6U1p8qoqxFWu4aEpDA2tfmS1DzyuXzKqG4KnJ3cHUu1YrdyM",
  "key13": "7odBhvg5PgnUcrb1yT7vsQtL5QcXfGN7xReQ78kXX4hAoW9XSoPLDpjhTTt3ZeR7Ms96D2kw5DNuWf7na99TgQ4",
  "key14": "2s6gNSi9By3iRjJQ2zF57ePzoR2VNaNYcuCanzqK9PHmYcrUkXNL8SNtP1GMKURjTxeHesPKeZ79UvYtjEbtVnaa",
  "key15": "3VopR9n3BKsTFcScT7C9odykYiH4Vn2jZ39FggBaA8K2oHBpNLh3DAwNjKfc7jWEQoAYQ3eQckvcTyXMyXfo7Lcz",
  "key16": "4dsTmBBJFa1NfX6onh4T5oqspkXxpJYjcc16tW4DdgqrWfkvm7gpDtnVXWt73AQd6yixUcv8JNX6XmBcP7ZCYb3k",
  "key17": "8AR88c3hA17f5TRfT3EsTmyaZabFt2Tc1ptUHLtCzbfLjs26fWtRQsCm25qorzMVFuVQXUTsTRazKB1Sa5TKpxb",
  "key18": "56HKsXbUenwfBhYy4vterEBukZYAwwEngRftHHx2w2scCh7uUCAUbeaPtekVWkJ2psNRb2meh3nxGZP9v3LGzPL8",
  "key19": "YhrKdigxmVLZgvF119UTnvRnVYzBTqy9k3rUZmiFHPfXCrwiS9bUKmkP1uRi6S36ExFwNUF3wGwzsUHooAr8RDZ",
  "key20": "jUWv98qgwF8yTrCeNY8Vhjzas1QmiWnbQninwsLc87VkH1nnmswvp17qzsDapos1Apsy9Xvv1U8psmhvjpbt7Ap",
  "key21": "4UkBKXMg9KXQWBNxw52ZtWscNLETavHrtt7r5Ba7MpgZpCTJfsDpsecBRVcLRvhRobyrK4kEHaLcuc88sJqh8djL",
  "key22": "cHuZQJbiWhCfhQDftStiTzG3Mxp46c5vT5Q9AmeY9AgNjJX6SzSkKeKM6RnvZE6Zm64mg9aArjweJPQ2zFAvf8t",
  "key23": "621dQqCsgcoU6TCqGP3bg8JMFoB8EfeeJgqHaf3UdMaDmGWgpjBC321fcqUDDB8kSV6Td6VHXaUKNykabiDhhqZz",
  "key24": "4kcfBFxxfrCfC7YyFcsGK6eviL5cS8QYRKbVLNgNrKjWC3cTGFM9DcDjQDmM1nghD3qks8FH9B3991W1BJx6q4Ty",
  "key25": "5sqq3Ldj8AfDqKLHoH2Y75M8ifxAMu5XzYWuUFBgfxXkmhKXrAPHt44mDtirKvM1t8ctBaJguNrfUCyMihzfjcT7",
  "key26": "6RLtMnYYA75jPvMQSNzHtJe1ggB8PSzXzAu8SsvCNEmPZDKwtuUPZjZPGro9yGEKJDk8sHJGLDqQpJeE1H2ByWh",
  "key27": "5P2RRYdpqLCa2oVMdMCodKxU2QFaLvydXdfutaYmxJRKxuH8qCNVxhTiDn4e7UL8tUfq6CFJFQyWQE1Gwc2DfRyi",
  "key28": "4URiPeb6RGcVuJni3kfEfpQyXQKgqUHZWiWTxUTqecp5kbxsUAaGHHHCthWZ5bKy5PtUBzg7avM1KTWbN2KoQqjP",
  "key29": "5ZJUn9h8vVatH3HyALvuke5scaWg2Hef8vwKbQBTrMAZ9fAnLwPJYbeRuQjV5xhqc5eWSKaxz5ScVqeGA4sqjpEU",
  "key30": "DHFgzQTGT1nvf3h2QDyMHhqXfakDnR9YSntVA6w5KtCbx9W1mJZjUF1ps9mP5e1jvPQLdnsNJ8AD63qAUU33ynY",
  "key31": "5d5fXc67ADvLtk67XZhWifERLdKz8ia6ozsutymyWb4cpBME8VzkbAh5gQwU3YRfwzcp4vLjTNyngLBeEadeBwmD"
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
