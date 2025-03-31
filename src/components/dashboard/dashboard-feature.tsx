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
    "4EvpBS3efzCud2TMCZkyW7caw3TSNoAMu2AeHEiaukFUuZbvCSH3S3PjtMhTENjkiZYgkhjHziqEp32xT917psTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgCCpQJoHs1K98sQGLom1fS25x2eQatkrsBVyzqTq1kP7odvDYfSXecQEraj5WjornBdvKpiYw6AGfCb7DvZDZu",
  "key1": "46eVVRQ7S6MQR5rS6jvHCFNtz2bz38RsDzto3wK2YQUzmpsr2dsi8xcKVScu4u8rWZ14GvPeuuB4vjsGveHnRpcE",
  "key2": "4VpQq6gK4ACC3t1ykuyuMUPzXb2txBaLvbZdQ5Fg92nqsdYSqx8mEDvWN9rFiNDonzWB9X4i946bLGuwYW8zRpSB",
  "key3": "gbj6GtuvC3B5VbmWrGUqyvuGme8pgwN6gUrLAV6AMrc7itHsNPJ8V84bZQVYxJ7TPPipPoREhwnmwN9ZAiFpGrW",
  "key4": "4bKQ2qfqkxtvi5bYTvDPeyUg9xYCyxpqXKD7bcUD6Em7RpZc7ssMkjwtFehv9h4g9Y2RGqtc1JxUFtX8KZ4MRwzj",
  "key5": "WZaqk3L58kJP7NQTVQUZAj5hUFkDzCuygCq9CfyZju4iq3q5CfLXbi58MBA88ZarNkPFtpaiLZAWu4G4oZ4nxS4",
  "key6": "4DaYyKkSQfbkatFj2hB16NJQaRkNihehrPyXHK9vF4AFRNshePaXj1JcaQF7PKEdUN94KTZkezAXYgk6XkZMLXwU",
  "key7": "eZL7fPbMhZdBSWA1zYau8quVREXW9NkbCnq2W7VszLLyTpgyHixXqcirnw6zkWZ4rU26TEyw7yJnar3VaERteBd",
  "key8": "2HqBreUrhEqrVza93NEtaBzCBcCxgzdDiirYUFVxJA25SwNZmQZ2k4knRWpHHUP96dRPewEW5hb4z7XBJZqSiF6y",
  "key9": "2Em4L3XiVZQ22ZfaC2fmYRUrhLAu6jFvW3oFD8Razfq24wXh1XLBiDNTja6RqLTDbG4nmFp9U9d3GjNNU2YonVky",
  "key10": "499J2U1VXwtoaqXqoGw1ZgbDXiiLYkyV9RA3nGRQepLiLLAxrPURJuLVfJkwzvdGWxkyZTxjagv3fZwaTA3z3frP",
  "key11": "fNkg24gKyZHoYLg6hGirPBH1tZN9nMHaRRGVKfa2jueE7mYFHYcbF1xJbobua7KUz3FSxmydH84BcQzZ641N83d",
  "key12": "2Xman3873oriTB8fWehJo9V1N2wdoSKM3rzRgitNSBZrx4bNVwk3mCfTQn9pmoQQ43MGQFmsQGcoNoLVatchJT7h",
  "key13": "3vFkJHSX6SFzyR7TNNAtRDbyNjcuNWxQtYx1dXx4njSUC8kap6mSoa5Uw8w8NqzQLdukm3QsDn943T2v8Zf9eZm7",
  "key14": "5riDxpteb61Rp2PK1VU5qqkesMfhP1Eo5LfE3NqfqhpFPPU7GwCgkvEwzNZG6dN9LyyHrYStQmuZ66Bp7Ji4GZZW",
  "key15": "2aPesXtPPGdWQjLvVx2xVn4rNNBpcnvFr5mJQH7THWADcuTrbj8AB7xqr99vMVsmEi7v7mNphoJxZVE6G9P9nZ4r",
  "key16": "2QLQyFwmDQqmzRNhbmcnEvqdeaNiSYPNMp3zRPRu1dpAoWWAtXzZ4Vw8Kj244hUJv6JesSSfCKotnsBz6QKBLstZ",
  "key17": "5aszQHwXAmBrck3qq25mqvtMeP3tTRUsFscCy4UC38ue65VMYRZe9M3Gocr5RwNwycgWYyC9zeK2wWPy4NN3EcU9",
  "key18": "2gPhuUVz2mwBWomGkZC8h2bzr8eC4bBfbZ3m5oHmA3rJFvWMiKrvR8UbRnuaAxpNbBHbUQdmsrTqiXdmmHpwatSQ",
  "key19": "51uFw9Bc6DiWDVvJeckVvQLpyV2ewJ8dzWcmj9hADK2Ku2ZRWfQKoBWRqM4mx5m21oabyesD3aPM2UXMLSFAxsPD",
  "key20": "4WgL4Ua6PUJzBJHnztQb5wFYiatn26n5e5bgTxFMNNBn6jJT3mxE5KYEiNBQoP64mQowX9XQ1Rse9U9KyFqeXTU6",
  "key21": "5jioTArgMBtapN6EiDgcGJGf9wP6WUsMmVWHLeNHac9kswAKnJoyJw3PFYe1yPWH4W2rY61hGN88z5Ym4HXG4kog",
  "key22": "2DbJC8aHT1HDpgmVDqvsvoZKY4L6gtJsn9mrGxyfwVchDvU8ZNCkwSno64YjvnT3A2HjftdeZpqdT4ApbW6b4yM9",
  "key23": "3rFur31pFDDzoibne9kh5caHDQr2ti5YDpiZJSTsnfqHEpdeMkTBY9VjwR4f8yHw4TbAxQeRiDo255Nh6E1xYks7",
  "key24": "2uzUABM53jEaQ5EiZqZKN7fcEqfFhwjUSZrDZFi6Hxp5AreBTigCxPGpVBgqB4w8ZNLxRtzqKfyV3r4Mqqpp51LW",
  "key25": "4ptzv7AiqDZy37VmAqxviX5HGZJXTN3kaRcs9dVDy8fcy35BM5TrhH6D1EpoKRtPcEzKZVygUyjDTfwxaNa9DPeM",
  "key26": "ft1oRkVApXP87UNgGtkUNMiuXWAyckFkJcA1T8tqKAc1UgHVMmX17w3oMWt8ZrADyLyrW1x8LvNg5o6wujoz54g",
  "key27": "4nGxMV6voHqJ7QHyGbVRyjSZ1ko8dEi7SKsW6UawQB3UkbgdKCooXb9Ub6mEFBuTF1NvExMwEooMFvVbR2KUPuYg",
  "key28": "2MWvoCWnffJjqW9wq25qkhkyc8A1jYawv5Koc5LtVm5zGz2EjAz7XuDNoz6Qi9cvAhQGmw8X8xtUG6cW7RkZeWC2",
  "key29": "3q3x8GfYL8DKWpANjJ51gon4nmhfgR5nAMtTP1aWHFGj12i5n2nuufWA2xRAjg3EpjaRsrWoBqXcFbpD2zmbyYXw",
  "key30": "3xKXQuMCaYJUjzvb6RwAkzt1YeZnvzM9cMXfURaBz2JnpoF87zYYzAjnYKfWZ1wzUaizAnQgy4L7hkyLVUGeswgr",
  "key31": "3LaBaTp8ZEKAdfF8bfJRnQqNrnZ2vA3VxhJtmxWwKkQaPmBnhnx6PcChc4W2YpGwszoT5y1PQhnqra93tBdWxrkU"
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
