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
    "iwWjMaTWyJnp2id3g8wNc5tcv6XgWfQw5osUriYybPMjzSrfwyNnQT1ULqyWYW3GQbZZniDM9ypgmfuz1je1aYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uoRqmTSV2wL2vKnZGfeGtPEXN2E7zem1htzVEHRwzYw74fUgVqZkqZe4bkWyAyy7RpafVCJ854mtU6UaamGGD9X",
  "key1": "bN1uLa1VKX52cAHyM7GpbDAZPuG3Y9y9cZYfzsZT9WHRiwQXS9NuxPwx6whEchfQBHb5st8NNHy5wAjaFG2HQDN",
  "key2": "34GZcSRFWmxr1hjmBaXjLy81hmBxFvzXoSL2JtY2NGcjgU1hAwhpeknzWgwaDeNvKwrTN55an3u3Wjd9KK45v37s",
  "key3": "4UgNdaGtdJXeqRoKqK2PWp4bMWoZPZ1wkqQTHS91QSh62ro3DDwS3KrZdj7rNyo5Gg6G44JgFnJacMDZeejP4KPR",
  "key4": "2Vvz4FW5fcafi5KGcVcp5pFvEVCyK5sRU9NSb3ZaDUvSfPdofXMB2emKVbfrEJgJaMjjDYvMFwxfoqRQr863skua",
  "key5": "61f7nWShX9czhajQk96eDFbCxcTY65MSUhFWxP83Ja4X6PnmUb8JpAiZJijgCQ4otFJfJFudSrgf4Q9pxADPixRj",
  "key6": "48efHHh8ifHG3n8N5HQAZvy7oeYRsPj1aWhEpG2T6q6wTzDZgk5MVCjs3QwwutGSoXXMfhvn2LqMU5FFZRaKT2eS",
  "key7": "4c8o3dbwpLEyZLitEjZaK1PjoWquoHQ1W8rAVUgGY2ANB1b1isAT4wttTaJ648hHN79m4rKwaoLnH3s9rLG56aa5",
  "key8": "KzPNZH97pP1se5yp9ir8yyRQa7CG6vTEcetwnzfuSt6hAcGsiCcv8ANaV9unFrk7gqy7Q84XpcXUMUKT87PTb6u",
  "key9": "2n9yRRP6TiejcyuBceGSYWDy4rcifAddYJjnYx8iL2TqRn7gzDc4WGguwaMLN7PT7fgrEbinw4Q82uimPJVdUSz7",
  "key10": "5e57c5sGtU6F8DBQ61oFdfz6Gfm6QcDa5bBBSBxfcjxmXEJ17HqmD7FUF1zBiDuBpF8nfvm58SDEiuHaNRrNnPPC",
  "key11": "4X5rQPjCQWWJZzrKoanRpJjK2cdEAzSvyaDSF2Qs58iwQomw6EQbfUNTa3jsbG9Ld7ogt9yizratdw5jwzozGx1v",
  "key12": "4dCfse9HjcZUSdWTAGvmJJUg3C6EsaB3wzJVYavqcGaYYHUHWXuC7jcXvtxrWXJW6BLVWGhZxm7N4Z3tdaPLzRk2",
  "key13": "2aq152rUusUAduRAqNtuMnP7mqcsfbxxoKqZyiB9BvnAeSzvhkee14gFAyUQ2NvvZSWWwYCbNqJ2MN1ksW2MYVsY",
  "key14": "2bY3mCHAiK8SiddcnCjs81KZwuudGa62ivGYZeTSBk2THvs3ri7n45g1DWBAJ71AYRbevWKqgYnpKwt3iEAzEcPd",
  "key15": "2FFZdhnpJPwpt9m1BoLo5Jk9h68AUu7hEYMyHfWcoqTkiAsAjSU9r6XXzDBQCibQ4YikcRPFbCbwf6Ypqkkesu9y",
  "key16": "2JW5zd3jAbEHbiKpt1x3eJkReYbDjTxRA6nBBmvCZb2uTEqVGH7DfngzdrF8SeC6E5pG9Zj5BUeBo9ncRUKkE4BB",
  "key17": "AxLKWwLxRmKJFWHttihqeQcXGBgzDxwFJdr8ipYAn7ZSKzoXwZCW5aBLgXz1NhXKJGXVdeAR3RyR32WbLcuypsz",
  "key18": "2XrzY7rAMLZEHbjWypHNLShAcBuMD3VnwAEU3GSe3qTLhRLxdNikZhTXuZSzRRYMjM7KkQwgZKGgums3KRD8uMe3",
  "key19": "2HgUPZ4ER7Hbos5zVDKteu5sC8nktqk518j1V8Gxm899k5w9bSGFrLzoVF5TuLkcnX9hVYk2jAsZNHUTBsPQCRPF",
  "key20": "4zRn74PPYXwGDnB8EA1L8UqZhSJkg2WjuqdTum3BxmxHRCDinLAMWk4c39iuUHgjTdwGKfWnAatbYL1GWdcA5ADH",
  "key21": "65j5VXTeNK31UGcasX9zbmgKhy3Zxvbo8AAWqgR5E8MTTwJnjaMyRsc3wfPq8NprTUubkEB2jnUP6dViF6CguLpa",
  "key22": "58mQPMYicSNTaL3ueATKKMqCkhbX7Zm6ip3puipQXahMkTfrzv78kDhuHDeE2k9sKA8sYuHueEYuwSH4tWyti7Xs",
  "key23": "5p2RFA6dfaz1drAMpVJgfj9EWz8GZf7PwTwNQFA5hMLGFXrauQvFTdAt6ZZMjFEkd2BtmYs4TYTQ1dL5EwymCXVU",
  "key24": "4EsWDT9GhYnDTHfExpaHPhbFjqyvP6wd4RJHEJANSXfzLjcfTrYJYBBSkTpHAiuYLv9KMWzXm6Sst8shmo42SQiT",
  "key25": "3LbvnuRFpNjFZTcFStVCfyh3K2exKyzh2RiBF9FKLrxpS626QyzVYKdmfJSqCeFnFq68KtiWKufw2Kr9XK16sQLg",
  "key26": "2Qtcz57MMf4pjbQWsFAp78pfFmQdqCt1UvxWs7mbfEqj6NKP7YEZFvLypEHHn1Lr96GHLt6PDqX4A2oAMsmwFyg6",
  "key27": "66GWEn56QYrz46wRh6NzTmqyDhEVQv6YsqUG1GMkzN8JtUEgt3FrHdaBzUwEd4SRGxVdC1Vm95gQM5eiW1kioQLU"
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
