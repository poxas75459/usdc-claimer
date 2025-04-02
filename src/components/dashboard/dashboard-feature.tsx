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
    "64zHY1ZjSrtptxufiEmF4DqBnUCEu4KJP88r3vpocRPTcbPPojkpYWebq53HnAvcm73217CWq5fW9xqZoDsawshZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pq1fzQmFQjoNRvAiGHzMiQY5ed3uN8wUC9MxagCQC2hGXncuSyzZsDSDf7AFZxayz2162NbX9ftYz3CcuuUCgnF",
  "key1": "44tqJY6LuQk6W2kt8NCBM6ZTLuvtsSUtB36d2EAzgAchpSkNnoziuJyX5ba1cK6kNABd6w7o8wtY6YFdaFoTqLNg",
  "key2": "3SzUUyvYRKNWhyVF26wJoQYkqmLPskCki2Z4c8y6Ww7CXHJz2Drh1jimgstb1azw1rKLEmi2NaNvjLMdVTVnF3tG",
  "key3": "2BpFxdnGWiU3FM9okzF9jm68ZFqvgSXHKrUstg7SrAcsFwKTCqfyba6JL4M8GGt8KXxzDmTMhzgUm4K4DysnAEw1",
  "key4": "2xgZQQ8m8krdSE3XwzgamyH161jrM4UjKVfoTxhLNbDA5UJLpVFfnrkvLXAM6WjfxYypLEp5pDGd1mjmCUpso2Pi",
  "key5": "3LiEMQjeVDudhRwniJ9HJrBTNBEbKfpFyBmAcdmMGNe2KFgFoxzjomhVnVF8JEfcrBRyES6RAzboXgf1MZLmc67h",
  "key6": "63muyrVom24x16hVCqBkr5VWisR1NovRZVzrWwAy3QYSjoKcrY4VQbtVnNoRJH6B6ohQv7GvFp6Mzoy9wpJ1i371",
  "key7": "3iQqzibifMqW3WqVwi4tvh73xQWK4cWj5Qj678diYShx55Wyi1XX5D6EqCWimSTSDq5fnf2a7gRvxQoN9TPCqyTs",
  "key8": "mHnaEWg8UJpFk55Eht8xaD7KCJQ3vi5bGg1QdtNrJzinz9P77rJKaGFzDsyFeYZJmVncGAY2NieBwpgsA9Jcb4i",
  "key9": "4KGi4bgmRQKRmq6W8TQrTJuoLYC7hBxecXNY7QhqETqmd8PbxMeCR1fsjUJMosN45YDbeecHojUfkVDkXkHcAC7a",
  "key10": "58BPEHJvVntRRAgDvuZrkNFDTCBaAhRT2tLe2o8Qqg1PXwtypWV9i9pX8QwngAD5D4LwcNarKqYFQ6GS2TSEkRXb",
  "key11": "6Lf7bWUet4dp4vRmixF7yw8GJRMxJzmoTt6ERWD8Hih1dog5jngm3A5o89PLhjG41NoioobhvwVwncbNGQEncJg",
  "key12": "4cFMngFnR2TgbN2rAKb9AbiFnTrnEBuT9bRGcnb1MWHJbBtt1XwuKQqUbmS6KTkqgzGL2h1eCkPmZHLScccWUK4P",
  "key13": "2UCAkK84rc9sER388VV6ryq7AnVk4Tp9ReAWp2ZohwLtEkGK7h2NVKoPbMTfv8aygsySXPUC5fbcoqfwdE7RzSPd",
  "key14": "3WbYTEEN4kymQU5ivtzp6DSn7UGso1YukuU7u3iF1mUskYXXsmQzHDjxeC4dBKP4YxW58jMB3viYWeB9p1FKBaVd",
  "key15": "5shqDEVw2Ji2UwxQ6HreGUaXgKQdaLr2JFEzPTBtnCxXrRLuPfscXETkvNL4uXyh2cw3DFNLfVyttZPnpdpgjiQe",
  "key16": "5wuxAS8G7cS8PceSacUvYnobYQk28iST4kSXhb9Ru8DZpfMXDb3ntda2q2BCJLm7arVM6NvgktahV5kgpXi6cM4w",
  "key17": "uSrrAhgGrCrTDvvCNuuvkTpoXC5CypLuCsge4f72gYqghmfHNKNF1AYCSBfBp5vdssn71W2W1TVFvfYPZ5Dxfyu",
  "key18": "3yALCrnc35RCP6upuEDivSLZxvmdAuKazVY89Cn97jAhhH9JR2gHnXwgD1JdZRqgcif4UNyGw5afZ6mGBpHAPgpj",
  "key19": "gNQp5GNXWhhGGs1MujUBKLmwaWSkUYEjTZ9cpBFQUbRXhac4AyW5jKuviS6fEPhpswN4hJpGw6po1HZqrU2gskJ",
  "key20": "ZcubiBiyqMgjrVCaVkE55abge3NdJUznH89kVj9p2R3c75uqEEg5dPS5rLHZKLchUbcPYpdXUx74GVzdPUmkPh7",
  "key21": "e37Ym8hrtAo6PMH3XqfEommz3SmvxEe1Rs4W9K6NHbcP8EWAHCMuEH7wkUow3we2nvA52Geoge9JNYwfCeNK7hn",
  "key22": "3ZFJiGX49gcuKhzdEau8fjNUjwRFfzMEuivWvbyGnbPydiXgwFcX1k95RoDWh7PyLvd8gudFkZmyXYmkw4oCX2RD",
  "key23": "joZbuVhYiLQf8KfRxDEH9QLX2UknEcDn936P9fUU6ZGiZeD9wU7oXm7RGh1ahmfcyX3a4w4SRZvD9PpswwrdupZ",
  "key24": "VnmBigUBwvuULp55mPKxXsvnf9WaX3aTuBKJDiFjf9eXVTksqW6AQcNAESTWarkV9z5VzWedS7Bqn8sduKhZFii",
  "key25": "3dixLcyohinp9WRY5cwUyyAKe6UoECCMzYi4baB4tfy6jKAsgEPp3hjmQTrwK7Pa5WqKojQ4TvPjpMohDSSe4WS4",
  "key26": "26M6iHfxesyVm8CkFCK77hnkiGcjWqAfpY5kcosUTZKMYH9LJn81BtVrJp1ZQK54qoYAnycteG9atriJ8PfFFjCe",
  "key27": "6q6eBwTJEzX918VkJfyUYZ3ugMAqTuDFTpw9tz4Egv7hHKf9dLRWNWwiBCaXrTKNkML6gHiG9WT9FrUMqKyoE9J",
  "key28": "46oXMk1PQNs7RDFEDdcYwPjYobwuhhNrGDmsdpeGSzH241emhsHC9YMWnURbUTEqLVCpsDmq62oUorUFsHm2RQD1",
  "key29": "2w44AgkwdJEoV5cjTCWVXcAGvPcAeUkFcxfvGW4vhEfAqHKM6n9RoXPJi7KgHdC8zEaB69Y1JywJJGjp5Vs8dB62",
  "key30": "5JugmwjXXjqZC8NU4of3RYTp31VACmdxV1PRYn5JrMsuSkLnbXjBbxzY1eBk49uzbDyPzfH7Wo7P5YAKGqQNGeHx"
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
