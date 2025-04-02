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
    "fn5z7m2zRuU5HKfDitEfgAh7a9LMxJrMRm6AufXtzv9fPp8yzEaHeWzmK6ggvD76KYrreyKZEzrJEishresnydh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLFYXJZsoZrSvB9QRXhTxSibhQnYGriCpfoX7LxqY2N2D7i96vLSJmACkntAvk8N3nunUxN88tDPSF4jGzrtayq",
  "key1": "4JGy1nAY9A77fRayDFbGXCXqsbKfRKsKZfb61hBSfDUXQUeVfoXmRkMMApRkJb9qw4JvHAPihrQwEQgtNNXBAApr",
  "key2": "31QHawCebeweGwPpXPom1iLFKeqm6fk83XqZET4uZSV6pAjXEyEfo4SEUoiAeEFUbqDnHhNcaJh9YhmqtZzf2axQ",
  "key3": "4QYjBfJNv9yDYAexFjzTUgFGir12tToUggbra7h1kBjEYRjzLDZCC2rFcJfMuKXEk2YKaTTuxaW7mE5gk1ig5Ydt",
  "key4": "Shzwot7aAdbNemquJFd3mVVcmPE4yqS56bG2CMPfyT8gytkPXvKcgftfnrriGqFkELkpmT8kRaxYk5gKPPFpKg4",
  "key5": "KdFC4dJHd55uwkjqMcY3XLxVDSec1qKUgc5yYqUxKgQ2TVsRVmBdes8rkku5fCEXbj1EJaQM6M4dVxYh9HK6Qz5",
  "key6": "4toixzpCXoKE3WS61MqwAR9T3MWoLS33tZi3L6ZbEKbUQoAyiQtDbrDpguKPhXm29Teb8p2NwZGuLoTtRWGhjSty",
  "key7": "5MgXCCDfQzsBYaH2rbLyfAbt4LQMB6B5dvMcvYK8hCgJqyrQ7DYg1pZMR2eKgNESe5z5D9A5nsErqqVas9k5FdMe",
  "key8": "47HjxBeT1SHXuHGBfMPUnB2JV9gCyuYHQyzzJncZ31NmryguBGEhDRcLx3eWKQkQqaPLjRUSRfxt6KVTqVkYfDpt",
  "key9": "2AocfYDntqywpSR3nBZRDc9tqDKbMKq8RcL47tzexrpaUQXqcRBijJ1LUiat9oDxpUPFXaKMwLwBPfKrJDHSewWb",
  "key10": "2RmsiMPAnAJFu6tYrqe7bvJQ1cns1au2HK6cXiWGqycgZwCYJ6D2Yzas8u46T4AUez27Fs1Vxmzkj6MExfgAZYig",
  "key11": "24VagfJy3wNbq6hpZ5e88hSk4QZJ5vcMrfiX2PhAptCz98RE4TksuegPvDFucE5NPjtGtaFahKVjWUhWyGAkrkQy",
  "key12": "LdLCWJz2E9h5wE17ZNmwrj21eBXkZLwFnpfncFFmV1mvZi7tJBTFtpuQ2yW1X6Zp1wJkAh9fqGZfGizmaGGkmku",
  "key13": "5rkdt8ciunsooauBTFJX34TBouBBgP2h1XrhMMQxEjtmKhJKL6bokLNpWBBy1tQVVWBuMDSv5vroGvJHfKf6nrxZ",
  "key14": "5ENspd85Q9mD9ECa1mCXuLqAJnsgjtLKwmz1T2HM31JmDspxiiWsRkonzpAFfcT3NDBZSpWVCTakwTW2DoJdABfN",
  "key15": "3JDS6jBFv51MRf978cFa25ESnpewQvVHFTRqw7NjNZgkP3zYa3hH3LKhcrhVUd3Hih4gYTB2rkRHS743Z4Bm3onX",
  "key16": "3EmHCWbh2rB2Zog9vWwaVZonC8WPN6d44PB3F58Di3C87W73HVBSt5jFzwdkzpbSXTNLssn9ywVqUtdtX5xdWNSp",
  "key17": "3NyMDzVGxdxyjV8z8zFryigeVQfKp16CU5Q1py9a3Bn7GSBZ2r6JANPoZgDJoWAs7W3ekeSDpzSCAJXohEnNiRxM",
  "key18": "DmL8chd4mCEUD8Lj5oivrMhDeTpbgdDAyrS9evWHiLmn9L5S8R1GZRtTCUXfPKr9C9b1zpKmjxuMQU2HoDQLbU8",
  "key19": "3HnM2QP3GXaiMh4bPsgrCEZ1dRcNMsqNASMruC3TzDC6gcjFXUHapLcovFVRzhbi9ZQfpxmK2iNQTvzGUWL6byaD",
  "key20": "3jUU4StuBFrukixmdsrvZMve4TfNgkesiq5mhrVxFDoQfDMafiTC4WZZDVRfKBSwAycLo8NiwXmLL84k4M93TT95",
  "key21": "2h1aAZtzPhdFZYJ2LizB8mEVv1gbfHWdy75BTFnoWZZC157D7o8jfepfcVEKrCTr2fBUzzW4NUefT7MBPFFe7j2T",
  "key22": "38EDR52TLQZVVqwufAfVdB3N1B2y2BXVnZH2WVqi8JrxUXUMd7DYgRrPk4HaNXiZzoyEsuncPyf9gvPevTuQfTEG",
  "key23": "42QjRY31BMsq5EFsn6uhmgmfHtSMMypLJCheFGtq9jktoLetzCkpYd4kYXcemjRK8h6utsEAkVMpbtU8mhcjWv2Z",
  "key24": "nEwsZk9MMYCYCtqJ3km689gdH36PXduWsiHFYhQCc4GM5NXsUfjS8Y5tqNn2znEowjVLxtg7Tfva9kR2Xn8ViKG",
  "key25": "612Yo6ge51QvzyzTQa8sVgbWRxVx3PqR2cBu1qgHKZFwj8gH64MjZqzGw3qJF9ZhHR6kt7fzm5xJs4LHyW2gJwG5",
  "key26": "WiDyTV7HWsWRXh8aUNQekX9FYt6RADGAuGnjGptxtibBxpvN4MmwneU6H3gY6sitB3QEX7JPDSiJC9neDMGo3sb",
  "key27": "2KcB11pNcm4EC8FJrsmRvaACgVvpptDrkkdkNvyFqGuTCRPsBrmpaXSqb7PvwYx9zCPY1b8WMnYJzQd3GX2j7Cee",
  "key28": "axcVFWqjBFmJwAC7vYDX9yRpGKFjtShwJDAbsouZgG6UcNR7eyrsA5GRz8XWi35NweXRDn7ZF3sE3BRu8visgDz",
  "key29": "4wr2Y4rqQf15xaGSsGccxLbsoscSgZC8bNBL1Ze7JDRs6afZpaGKXnY4jUDCwsY2bXBSoyP36ZNF3WKvZwY8nN2E",
  "key30": "32C1R5FGjwKJArgTYE9J58Cv4dLfMS9gkhvni3zvoA8WRMCF7DQ8QPJ73wjvafKkpZbE6teuEcwgAPJZtSvxSP1h",
  "key31": "fQyH7udy9ByXZ4tjy48aqyST6Bs48y3vTeordPx1jgQGKpC9RMRQZw7vQeo82gKAxLRB9nfDmGtTMiCw1ePBz2R",
  "key32": "VpD4hgLDihuPzp2oNMvvnh3zoj4GVxKfSoHrnzi6shYAWTR1KMwugqbYMqhTNhtJRmLuQN2rX7jToV2gbNZc8g3",
  "key33": "2vru2DojPekKABKvCDghUyTvxz2s2btkACeZTSjyG2tvHQpAbJD8t8RDaXyXeqLEaWxAo4VfVCUfq44mM78VvRNG",
  "key34": "4rdooWEr4i8JETVne7wthvoAYtvcbv8Nh9QkDJ2gvLMrEXYMGa92eqmWScvVZwbkdVgVt4pv5nyPtq31beUifTVy",
  "key35": "bmN6xbSveRuEGW8CTKTGsSDw6cT7t69W2FhCemXFYEkkPbZez7KnaQiNe7Nk9m2Jf1xceQPpkH9SK7UJ67MCRcP",
  "key36": "4DjyHDVFoGciKB2Rb6ZG6Pg256XYEVW9uPjWNK6etTsisBTw7YJLNYiRNXW2959MistAWQFFGr7QTJ8yqzCc3KfL"
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
