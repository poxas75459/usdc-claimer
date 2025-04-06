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
    "4Y2fVMFkHdZsUtvhpXJZ9QEXUbmQTJmsNGBoVkKYdEo5KZBGwbZkAjAkMaaFC1FLpz6ViPBk6KuhG2gxSPMuhmSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRTKi73X3MudP7P18wz7PdHsyvGRLdpiTHouwXmQmoV5Rkqar58iXZxe5g13W6pgnGcaoc9Fcwuz3bWW6t9ZVUG",
  "key1": "2fEpnshcGVwAk8Uuwi5pxpoGA8SmWRMeUTxzekifv1WmHPXZXG35JHaDs1D577neAWcWdCu5MZB8FnaCj8mDazju",
  "key2": "5Fx2AXSWU1iDW49JE1R2o3hkppSYgPkG9DvbWinQsjGeUaiUcJbgKvjRYmw9s3PVrzHfKkZYdMEVjCBSosG6jvmp",
  "key3": "5snxFELmiN6JhD5xjwhSMFS2RNH53vF5Grj45Cv6Vr22pNticnnz1qNnaPVtuR6cvjeGV3HcLYNacwr5QtsDQa59",
  "key4": "S5y5Gn841msru7AYUTmwwzmNAVhgiSnTifnhknCa9qdQVrPYNHWZnBq8ZMYxR1tgSAR3odY37tCutdYp8MYurgZ",
  "key5": "5qzLwUGczmD59SzBEk1ZtCYeo9mezPMFVDVA7tQ4CX5ghhTqCzTWWwiQbW9rPQH43aivNmuc9x351tyG7KoKGjDu",
  "key6": "462WGM6gboU5YhdPWfzornJk9zDc4kA7svmJhrnrE7FM5k3gk1tspdryRNqmrmyJRa7Fr9oKeGYUtbvTn5HRfF92",
  "key7": "w7ifDKgmFRJbftbvHYpseBcKQn5Z83aMtWBaccA3u4s5Nc2KzN6CEYY6F1yQAnvqVxGwbQJyiXX9a8cnUN2dh4f",
  "key8": "2DRudmrc1sstzvmNb9k4W4Hsji3gNKckZ6ktaniUYrN75y4oxps7HRxu6d8GwydoF6Si62tNKmZqgSofJyP3rgvn",
  "key9": "4B4y6wTqjynFzKPwdvx1b5qZa6cNH9fXGuCfPjb8ryabm9w3Tz7Hmg2ZbACDMzvq9WPCZhNPB3ecWWvEga7HDnZH",
  "key10": "2EgARWtgCkTr31XS7Avr9D88bsNntmkfmTca5NZLv9i5TAKiB78eELS8TDZDhr8jMxUdkShmVWxJKyEkUPy7W6dn",
  "key11": "4rPm9evPYdz5khUoW3nQRFpp54VgibGqQwY66b7jzcEiJ6aERjyJ568Hvv99AyVCTYfJz132P3DMa4A9SBtRjR56",
  "key12": "haZvYZvT11zdmSRwFpUmyEiENJeQREah1RMWypeQ4QbWUL3xcvsF2VZ5Va975BKwY1Zhb78WdJp9n4WGPsUPhki",
  "key13": "5VBn5Mn3ruXcYZsbpdcqBbVbYMDR6iMpX6u6Qfoy9NnAvspw1MV22qZfmB1f42u2n8MGrsy5ZrEwM4rVCmekRBoU",
  "key14": "3M6iyWRBv34VhS4PDTdi8gvsyBaNxwSXCDKgQQJjWr9AXuWuXzhuQGpS7fjL4EYBNtrTkNxDjWT5ZFgJjkdZ8Jdf",
  "key15": "4fVcJZYgCa2dHxLmmX2F5Y9aGmLpgN4g9YHcxQejUCBMCesCYihNCcbag75EkY28JHKWokGEKJ8XXUVdxKuDturL",
  "key16": "5WrH5DpL41ofcDUVKyaPxDsxT49mkstLWKLBXYRxuAKACYzN62gXbE1PD86HwcNtxrpndk4hqrKdP8tFNFoNam5U",
  "key17": "2kRtkJSL9dvrzqgsywWWhGPc3YdWHXirHxNEyMxYksBJx3vXGhcfVxUgeBTyctJMwLNikyZNxZdUeATv6EWZArvq",
  "key18": "umjdD5MRyBVxwr8gmNtSR9MageuSMZti5jAqmgShLHYpidM2vWtD6TPeCTHTvLpSTiuAzLBuxj7PzTQRZgEGgNs",
  "key19": "5k1CMzsbNGE3mgjrwH316NgbHGyej5XBfPJtyVeTCdYEubYdZbfkQ8zXuRwHhbs3dLt3B8esVRU5dGLo4F6bRthF",
  "key20": "ju7D6W6WGPWD4hHpZZ6EcqGBQWvayM2iWJzjC48iomhZrqJpPSpKNzywn5Zyc9GsbAgt8jza1JZds5bMcvhToMr",
  "key21": "2UMDsMoq8XYHag2GEqyCCkdGrgfECFajmiRPqaqNJRhRR9Cs3nhqRNd4LBbXU53ATHKb8t4w8qSUev1YR8JsZ21C",
  "key22": "5w4JwW4kFxtTTXqFnDy8EkkG15Evz5bQqqPWM2YqdFjRKo5GAbmbcxWDnmVmh5H94qe41wKqHLCVUwCDXVZSvCMD",
  "key23": "5NYRtexAgjgY33PxeeYTZqFdtTQzEazN1i6jXNJgpxpSNXiYT8VjQC8SgbN17qV6S6LQzHUby2sq9YjrTW5v1jBC",
  "key24": "7MC4fNi7gmTAfw5YyF1E6PXStRvgDdZiKM3oZ571uf7GD7XD8oQeyitnkeb7eSXFVwyiuMF5hUGVenR41vnnyeX",
  "key25": "3139az88gE3Jp7cA4KA7KSHWhyz8AjqaHtjojdmcX2J34MrFuWSGVgJRXLt8ySw5PSqwdqTwzaJB2FZwt5SPhwHq",
  "key26": "4GEMXTegEvcDqnqBe6s8SfqrinHqUDGj9GScBb97vNZL6nNRoRFS1n9Arc7XKHtUiesz1ZbeV8PV1cLURqATqiLE",
  "key27": "64AxkGAuwmbAqeFocT3QsScCVy7x8KaTqPJ82V5YYTeRrPTEjn79UwY7oSbkPNKbvVV4zVeHRYLfednTR71nLJmf",
  "key28": "4uzUuMLGTC9qGh3uBE89mgszhivnekVb6VDnx6t8VVU98Qd3Nn3Xbq7E9v9BvX6Jj6DBWUenaPnwxrukJakNSkBr",
  "key29": "2gsvRaUDY4dVApWB4t7CMUQsiiFWw2cuc9BMnvHvMbfBnBU2YWNZ1PaEWmkGvFxU6Nj9Usm1ZCRcw5VJQHcNXFgZ",
  "key30": "3x7PF29kbm9PUayN8xf5Q9UjiL8GsfWoDt6QxmDEHVQAb7PB1GLGFgE7AESj1tzW1ak2S9DyHuKEf5a5enBV6of9",
  "key31": "4axpkgKvuqBpL7Sb1jPGavPAuno8Z5q35ep34612bbbRdAMNkNeLLcAyEKzHHuMKXxtxnZuiTPmLQq2kqaGwFMof",
  "key32": "DNtRbt5RCuNwht8yVLenjcRVJh3LZ5uPY3ztMk5Q3jSPr6gjDz9H7eVE29bFpXaVMxCyVMHKsSfZKNRGf87zPaR",
  "key33": "5sHUW1hZn2L9ru2pw9f11ZB31kgrtrG3rzf3eBysJcTX2tENEEegjvVG1gXtdY5MSZBpgPEKKDUeaVijcvEEt6WC",
  "key34": "RQtpRhTZ2PvpfmMFDUWccpvU5QdoQyrWpx5WSjcGYwY9sk9nVMwjurGFDpddgkSkfJ7KF8rPC7ETarx4CuMvxgn",
  "key35": "3KkPLbVmKDMzP7eHnYf7eHGN2QWt4jFYnxSBicwq2tND1vYVVEuGTtSUrb9zLXMKm8D4jt4gD8JtSKhdfsK8ZQAK",
  "key36": "8RcYAi992PfeB4h4or1tNRFGZhakz1ih1iNtfsECjCGdyqjvFsc2oJtT27GZZJzQv4KR9xWTeqJ7gN5UateXqsv",
  "key37": "5w5dgPjVLtcKkV9JCuRfMAh32W8tKebospztjAHoN2hY5FtWNVTgWQoHRY4x7jfcUvek7FkytWFm6DkVuLhrX3vc",
  "key38": "2nx9LvYNYgbTZmVi7cma7aDn4M2jB6JYVSCTsJ1BTLfxTzhTeYorpUDVs9jcxfHB9rUKZDWPFjcmq1yVP5jZsyLA",
  "key39": "AtiX8h7oAUMMh11Xcho5ZEydSNXTZFVDufwsmUvAdgS9FEdRk9NcykMw1ZXy4DwsuvVeTigiavaQmcPkd8UZmxX",
  "key40": "uS3VQPT3avK5i9SgXWPm17SaXR9f2VUhNxza9Qojk95sGBf4cGk8KHwvMxFNZspcFdKAX7yMaZJsZGdwXVaA8RJ",
  "key41": "333Rb9ftMSk2L3sxTFGPzkeE5PuALEPbiq3syda6fL4txV1CyUPupn3htYyevBVq79P7Xo3W2cAyRhJJjLRbKKQM",
  "key42": "2ZiYymMKd4ZzVBWZr6UUutt9mrh8CUMWrHjM11Sooj6TUkdJAigUzHdmKPW5XdkEa6vsE52UDg2W2FPbwT21bPdU"
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
