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
    "ATpfdhrukFcAP1dGntKukrCVKhFjwbrc9vwctexKLnWBKj5Ec9EyPy35RrHKsEmGrNvQde5h3KSBDFBBKPD59K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2Y8KhftPePYuZfWVFECkySVs8A1jLdweevsZWESGsWdpy2TVpwGukb9ASd3SGXqCGBds6Sm6bJkbG2qtsVn884",
  "key1": "uaRHGoQeUuhQyp3FeKiSkamza7bqgTYsDYWvscP7GCqBZn3HYE54SMSd2HBH4T64UC4QrXciMmWHZQfm3G9RxF2",
  "key2": "3qdQvdVv5Jh56QzTq4iJx61bpbrndgeE2X99HFxbVXYiUDyWMVLxu35HdaqNuYJWPpQ5ASQMJmBV8na4rKGAqDpz",
  "key3": "GquYFMxGj5fcpx35hgq2ydssvWx6WTnQ9Ga4XKKqZ72iyARtWCMjVKcqzQ1ofxgzCQGwNf9mxweUphNsjju51nm",
  "key4": "63nTvLeBgChVuAYDEbbdk49mA2Y8NKJ7ZWeEWxRsvjs56UPVebvBMzcUZbQxHozTYGkjKwVGeH4KPb4oCqTqfER5",
  "key5": "4dfidpQb8FXWB2yRPQpxT4M6bS1EMCoSh4nWUJhU9BZzD8k3zoiUDsRpgzFaT6RFmPEGyGEWHJ6cd8wxNzveBdF9",
  "key6": "3TeWR2bbEsT3gEnMvJxUWpVk38NSXYgNPaKa5Qx9p1h5Xdy7jQ2LbtMVX92ZxugtPh8CQKStwqZiwBwCLZzPtsoG",
  "key7": "5DkHfXNE8yj3i3z2ofZYbj673uYaJVhyQSMJaRhZHJdnyS6bJNunUjvLw1A1wsFvWXckumxYKhJqdfNF1rFYXHWp",
  "key8": "9fuKNPMJvJRft1wj324b3MiZBG5S2Fh4LYSwuKYUkmLScoLkWRzdfBZq9BQTGG7rBG6dfjhyDnZVKfif3cAzE6V",
  "key9": "3trs16gtiwrfcw2zkkhP9JH7HqDHmeNm6AeNKVSZQnLYELZppeJRFpH5uepQoF6FmqkYzHsuN961Ub9K1qtghJLg",
  "key10": "5oguReg1NeRG74TsSPpffaLfaPYXV5hGLmHegVTa1n9dLmhyXcWYBSCdw3kYbtEiRB1mMEeYvygtB9ifEoR3o49X",
  "key11": "4s8zqpYLxiBibvsKYMdyLTbTi94X9mN9ffPeD8yJWcZxR4B6C5Y3DmjohtjKihUyBFXUFLUSLXesvf9rvxgeXZoT",
  "key12": "oLD5jJFFo34Qi5RP43nLTxBeAHtTfBusgsZAWFZHQU5A945X79PUSZqZyfCQGfS9TMR5DRP6ozuCbsKTzHBiEU4",
  "key13": "33hSgam33rmf3xYH4mKW6WE3VmK3hbXuu8KZxd9mFwSV1nDvHWPH1dkpjeHLNQZpK8y95MwqTMANYTW6UriYwpdc",
  "key14": "EYoipK8FQvcha4Wx4rnN1u9tAJ2Dy5P8tWfFwsrGVf5KyrcFUC6vqiV52FhMTziPE62cp6GC6XM3kmq3Ueb3nHi",
  "key15": "qW7JLac7rwEtr5TE8dpB2XiRdoGk2yDHFs1vtYhzVmmn3Z3aGeiRVUUFfdnFro5S9ommgfjeCFEnebQFhmHpviU",
  "key16": "2HYezu81wkwfEQwzpNz5vfmAzx6ZTznQNtQXF78tMBv1ZhSNY3ZnG1xVcZGDFzLkFHeUKqKggBo3ScvZ7bxY6psu",
  "key17": "5DY11q3p8Ck5zep2X5yw85VXFQQ4PZaJNPmdWbmodzCH7ZzDVu7nt2EiHGGA5gFeNRdiJJw9W8RVkgMXgaNDKZMd",
  "key18": "2gyjyNwygf7MA6W692rA9AcBv3dkY1uEyWeiyKofYqr3bpRAEnkgrSuiWEHqqRitDAdxDG6vgeR3U3g37UkKSHS9",
  "key19": "5e3k7TnsDSs1wLVRmWW2JfJK1VTeKxNQ7UbrgCPs6c1GkhRT7YTdFqfvZEhywzoqpQGbyq1WQxxqz3c7dmeHFqoK",
  "key20": "2nQ9jJoNkNebWNKQEUwqRFyVHtLCtmEyt3Txnj9QWyyZLMgFb5QzqgvH4cPtybrTHcCtVg5KHGcTaLsTqx6rBUgd",
  "key21": "4vJ2dWDQ6RtSy57LVSnNBVm9Ad9cTrX5ZYZ5de2vFvMkNx5zYv91vdZU8SRrcnuAxtTbuG2Z4H4m9EQa6WiterrX",
  "key22": "2ynkbtqpacYnRXzv84XfNfLALkiYnmVQKvhxT7vDCdVxPeSdMU6G9HPTMhvuZmu5yvi3NxgePrZJ3BMXfK4PVHNP",
  "key23": "2HTARYYm7ScSpUTN7QyDsaN9kYEKPcwXwj4xJwag8EU33mgkees17EG547Zmcdo7imvn6iK13ZvEijqvYbJBetJ5",
  "key24": "3t6d1KH4QdEe1ys1iMJrYf1VsTFjaipqHgbi8HsDP9cN3nwCTn8V8xJJMpE1vomCiECERYncukoTMAWL2YUdjh4h",
  "key25": "Bs18Zuayk7eeHDKjfUFWTgNbcAsSAyEDUMU4smSrP6xw33NT5fNo4NjRDvtWaWLxFCtQMowaHrGtf1umnGqMmRp",
  "key26": "1jZTasjujg9ZijYmsC4q2a8u8dFPvzEMH7V6hDvJcNdscxqFxdnSuJ66qgGzSV6q22PZgLXfcP8oGyaf9FrjmDp",
  "key27": "2Ezu1oLVmfsfQaH1zmw6UxiE5cNeYopFpfLbZFBjWhaYd6Fs87wWfpVP3Chb16kBqk7LoW9Gt1ohVVnBFAmn9Lgb",
  "key28": "xzSK1EyYxHfmk3ucT2v6EpbLq3hnen91tf3obq4bc9exe9cSwSV8CmQNEGSs4hGWrF6n5yjvP2SkdR3RTahiqGh",
  "key29": "Sh4CEnE3VvgtUVazQvCGPsx9ToNGguCQkcrnGQZXhy5z6AtDr6H8QG2ar39YqNTbeRLF3e9fxMqdmHHTNtxLUcp",
  "key30": "5qHrtFm3JbSbQdnaqiEzjri8FJeHEoJMXEEteLtdebTvRzgZULMApPQZQTmTeUf5roBLaK6Fx9Gkq6vvCmRsqkZX",
  "key31": "47KyXEY8W7aHH5LisDSFZYMq5vzEcjZS2XYH9AEW4WMiondSm1QDBYjbcGCCMb9wakzrkGXxqK19Djyy5ZLZ1g3S",
  "key32": "4pvo4UXPTYpU6AWRvwTXCZarFeeA7uC8xfgQsBMMbvr8N8ig1BriGsEXscr3dpzRKsbkcS3JLLdTjcjC8UW4Tiv7",
  "key33": "3pe2CRQhuXyfii88rtTB4UXZEgV7HiiijbPXGPRxW257gDLQfRDPtHfEgK5LpGr4wK9VGVUHEjBovXfziMuZsCrX",
  "key34": "2P8Ewcr3Khjs4PKqykskunbdRJEoanj7wie6KKo2gYgANJTtziiYof5csJFcsCrgyAB3tx4njCKUK1Pc7cTeSbxB",
  "key35": "5p7zYTMLEFPSZ4jb88y2y8qcfk2Ty47dU2Xksgp2XzDqQZsZTq9hK8thitxjo535T8Myq4b7xGZGMFaCiUXL8miD",
  "key36": "QQvx3iSsoB8dByzqzk436kfz2RugNe53YCbi4VanWCqfo2Vj5PGAVGWmKskHNiJca7KpXra47FnXJBqa7nzsRit",
  "key37": "3n8nt2mCvvG6bWnRdrLnGDZMf8CHc4THb9Mdu3m9fLvBKgCaXQUPoGpZQFqcxKmVB9bkXDgs7xxTtGpHxarcYJGF",
  "key38": "2zRAupfiGxQy1AvvzBS3MqMGcUKD1E6WoDL47xcVLmWXbBgdZ6VY3U5EXngkWBTpSdZwfj9tnafS7wAsc2W49c1f",
  "key39": "5Dh9ewkhQA1dF3XDKzDUavkpfDpA3CwzspZs7w6H26XUbGxWqoYEHg1Evq3xXdaXskc4v1VN62Hvf4qnpM8VEv2C",
  "key40": "3ieJdXWwu2yaEGwQYoDDNH5p3i8YjDcVnpnbJd2yj5LmY4rE8f92MorUb3gwSgA4Yn9nB51a4wyP2rzde3LLyrod",
  "key41": "5SpuvwfrgjRZjcVp69nwwH7158yMttUaNfu1NdXT1UZ4bonrFLQo7q315NWHHNGDpM1D2w15FpFAEwRDR3fjmT3M",
  "key42": "4UJaYSXqgPER53QQcJ3oeAKpFxzxq3k2hMxrdZiPxQX8VFGFUV3AH7wjnz9ZhUhkYDkMVpsewzzSbddWCvQnv6c5",
  "key43": "467eMzgDANqLpkXW7J7fBn7cm6Rv3gnaU5LDXxiYZnx1qHE3EePKCN9wqwVrf6MYbmqGMSdwWKWXLWtNn2ATEEf2",
  "key44": "nrY8YzREXDcSyzq9QuMcnWbLiznM4yJXmj8XqL8ND3iCbNgkimfs3Bv4tMt1k2Bc6KFfPrUw5zQJxYxmreeeR49"
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
