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
    "3uzpPKMZHn64YeCq3uzT917A6ieTKZMcmcz9oxqaBZsnar3v1mgKNUHYGJYUVg5DjXMMSfvP6odpaWnmKMkQdLhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDCNvJeDRtoTrBv2GX8dUhESa5dGyqHD2W7xt7dcMjGMmjRkKg42f4vxgA9PxfyY7AM2PpSLyHDsBxNj9rR39zU",
  "key1": "58kerEwpCyhHMFSS6Um1gZLy4UwFQt97CbkUW1frMe4iY5JFX8xnv48kkCqGtHqDV8mdwpMXLKguGR59qdKA6soJ",
  "key2": "3qCG2Bd3xsCg3tAtDXZKDAhXBna57svfQ9d2ePWpAGdXYxbnVUh4GAmuNEr8ijNgcTKGULiogrefX96c7PJqMjbp",
  "key3": "5ZAbY9T2NujwUX3LBJe4DdKduWgYeugHZd7yLo924XHnTUUJkkt236UG7bbPm4UzB2Q21SFktagFyg9F67GzrF7e",
  "key4": "2xrHvPEL5tdTUuMF6ehL5bJwPc3xDkrGEnJQAeoNybQhxT1RhaNJkT8g4DGZpd2t1x6qP3pLRv6im2ou4N8iuFFQ",
  "key5": "39i2L1gw7yt8CdpLhUCYEHHcnDTrocsEv3yHpK5YUfGuxkDtUaKiKAE6usCS2tZFKB8T3qNyqGibWDSMzUqg4Vj4",
  "key6": "2gyf83Urqy9mtoj9AirK7q4Zm44HowhK6W5hcaZR2T4jpRmWsuXeYzivtjSwXjm29bmbFsMNUEGyvcX4kxmSxZUR",
  "key7": "48fVKF15LpNvqA8SotsDi8SPzA23qKzajTQnUgxv3gAYpWUXkUyNncQKA7k89wGTN19qoTFTJJ2Qf878bHYNdsQj",
  "key8": "HcJUZgXkXQ6v1FciiZ4otqjzF2HGUSu4WAmEAsk8dZ9bSTnPhia3EsoSMygnjim5qvCkw8ftPMNhobSbv6LGpKo",
  "key9": "5f6YVw7F1dzp4wSYciwRsXMvMeDP3Y16sFLxwN5X9Q7KCrmwaWPm4fqPztEuZ6vTApHXLFxZJK61mBizbspUA9gF",
  "key10": "eHGDJmRJuRL7mvSxrhxPysWV4WmzTxzTsPnsAx4XbUWcUMw1Rq6Jrgn2fPbuzCZR1xtynjqBV7rV2iUvUdj7hZs",
  "key11": "7Myh3m2okV4ScaXQNMcrxDagiUG4tx4uLRwHBYRRnAhNa6qBXkwopAMcB3svCyTJWWF32AQKzGtwhL9Rd3D97ch",
  "key12": "335gp5kc9KUM7TN6qQFgwYViJh3DJD5MTXGGbHg6J87r5Y2QUwPb321ck9ksF3TQXBURHxiCvv5myDMbsiMTd2qk",
  "key13": "GG1zd8EQMzvfZPNN2BYvNPiXM7BvNay4RZhs3NQ4xpsWao4zwP6LDmNyUXc9HwWscUUUXRo2c66DthQZaGfyy2o",
  "key14": "3H4oppGd4G4A3y8AXkcK4rYmo4gVfzD9RK18hoSU6jB22n53MRyzvYZDQQX3jKCReeEKj9JrR4VUh3PajeRVnUjw",
  "key15": "5zCSDmMgaR9CDvN74AxCb3ud11b6uvkeZPU7tcuVaZV8JxVkUmfHNi4Zmgg6ApNz6Pskm8D9ChcHjhhSnUoTgp6e",
  "key16": "2g8rqrnVr4yX9LoR86KHUhHEJFMUWZqmMKSYuWu8iDweLyFYiu9bHcV3ZywuUtx42Kf5Ste26tVCvJ4DXcsiNJxK",
  "key17": "5NpLKevySKgTyj9Lj5bERPCNakmhfBA6YW3sxNzUhXQDhyhf85RhW8abF2ns6dwhkyRGwyS4xfy2KHE7CLS3joFb",
  "key18": "5yjX5ywwNCdAzHCad6ShUQAmPV2K1HyDG1hLzvnJPAVUVjaSu3ZWJyxbaVxSrLonrzE7NVtj2VrbJsGsqdKezfCs",
  "key19": "f6DG8PU2AM3TG4ZacCaBz7jGauH1Sa39hmvSwbyw2o5dBApWuXph9oSfDPVsAt4aRPKupBY7dutWQ5Kt4V1fRCx",
  "key20": "613ZSpykLaY6169BAdWUyiYXhi8WfBGWHmkXDpnjxkQe8KYDBbdvo5iRUvuPp1MTeNooRxKkrRfsJ4dhguetyaCt",
  "key21": "5pkMVrgufmtEh8bdnwGK3MiUtShxsqTG4qr4Ti1fsci2NuXSLCyrEpUgaZtPvWoNfvQzMZ9nkEPHdKqxoQSx1SUk",
  "key22": "PhFeSUyrcZvbJY5SAQeY57u5m2apUE4Myck3asfUYaheAMEY7SSbCdNYGiK55KbJiR2DHW7U2dSUM35xEotMGsX",
  "key23": "3sRqeV6CEpBB44X3EPWLRVzBTVm5AmWTWauXNYQkm2Vn4xMd8NwuKsjXSRXTU7yKLP4huRGJwb16tiL6zfkM8xGY",
  "key24": "WQrccEWYUafo2x2TYGHCbXptxYNKMnYva8EPZwBF7dXrc563MXPncPQSczw6rRtjkbXuBrti8VYxtiodCzRRQvn",
  "key25": "3GC2ev7hP33zZDu8Gvvb4UK6831PFy963AHt2eRiT7hcxhX1TnAkqjUxsZ8LXr1h8bwovToUaEiP3Vh8heF68DQr",
  "key26": "WZCpusggZ8JC9b3UQVeYsKkx3NeH6iWLPFccuBEN7HVGjaBc8v4Spvui1S52tNratdJyGBqBZxoAqzdoaZmReYR",
  "key27": "5ydzr5v2jgQzzSxBuL6CXx7TTXQKsh1yR1162iH3zEa3GHdXhkG6mpxyxsCKV4pgfRGUmK3VtrrAqEoSJ1V1cvER",
  "key28": "3erDxqCLn8f57rYkQuitiBBhAgz733ChD2e9zLNBUq4X1NjGFhMAZXtrA94TFfz7HRggWskFrLRyeDG5WNbzmyMb",
  "key29": "5phSNQjv4kqTb42PP35jKqN6EXtapL2UAEG6fjjpso8239vgWfBqEjYKhwLx1rRvFZiDGKgnusdxDMhW6VKp9ANm",
  "key30": "4R7dVbWmAwZTdVnUKsQbKM1rBRy2hTceTLKPaj4TpSPVeLafm97cnzEsMbdG2cP4Z53gyhEUutX3K42ZpxErRh8C",
  "key31": "7fxV1T8qT9R6RJUnKyUqjw1v8hComLmVuNAjo56w14Q145oaDDgXviEWipAD14igN6ysRPDJcCRSjF7DZWU7bSG",
  "key32": "3m5CM6876RWYxrdEGCCuDGoJRuGLjFujdYCyeJswU47Hi37WRVaJpSfTnHbvjCYrdpaxqQ4JRweJLPeat8z7Zh5T",
  "key33": "5pnzjDnAEykKBSXydPrkp3n83uqxwdcefRNY4Wqgi2dnfqvEZXGpedH8qiTGByi2Fi2DyrpBUjCmvvZLxyYJChBw",
  "key34": "3gGTFMqtHDFTZ3iZmx55NvB3CRt6VkXZkZeqXXY1eQ8PruaTExkfLQnLTGkuFuYmchvofF5iawPKh7YSngS112Xq",
  "key35": "2wXuNXWdNjTswuzg3bY9vgtDerkfdvYXFiBQEeo6mrNQpBWfuSmQgVZBuBKA9TpH6KjVzN9bDmSciKZ4ezye54Ui",
  "key36": "5VtdVWNqgN7Rkhn2RymNCxxRh7wzRxTcLSn4rE23yc83PcCQAZERYebTVszgfHqphgGaCBVGqWNskhmBkKfnVfzE",
  "key37": "2VX1G8cAbATgLQvkrW8J5S2p7wRcgoFXma9NEd7EDVAFxgurJhgsanSB6XBPje5m28q63oFs8o6G9ZUKxNNzhfWc",
  "key38": "mgjMhKoQJXKgEQSaxKuHnRYLKxJ1gpY6cZ4vgjg973WfmgU6SK9i4KyM6CuReMZhYgoxU5fb4AGM5ov7KLmKVQW",
  "key39": "4PTPFVyygf1XDP2ekZZP2AF64ec5m7MVxPpnK2BjSBcvPVf6157L29pn4QbVsDddxJ49Zi1HY7mr7spviViEDvKA",
  "key40": "5g8xa6BojD835NeaWarD319ve3ZBpBRSiAETuqU3yFM16EnVmRUAajQBedsdE8XZriC7RFFqZaUDcueFwqxuuewy",
  "key41": "5FuRX8EHTnzAz7FnVoBVMuivZBpiTr3LfrrohC9K1NQYsPG8EQYnN2jvj7TJSTXD52qetp342YwG8XMQJnnRu9xt",
  "key42": "qCW41B4zTzZaTepFRKU71HZFLjLqXN5pWPRuWda78gWKYD7jY8Sv6FKHVJF7zHRRkn5gU4nNJZgj3UUe21ts27s",
  "key43": "5xopafdVDouV2hLLd5TBTvRPYnPXZ1CXqpKSjYiQ1uHMDmWCVz99n1YdPpHoradSGw9ZQd5Q5YVHYHmdK76cFCLe",
  "key44": "U3t9UQvt4vEzecT9bJ7H81nbQXEjKAykNQPHj6LqeFm4Ux5cG2dmKHmDfd9sYkqHfDNxjgAgiznnCMB2ppUymJv",
  "key45": "2faouN2fQJmxrgpz9BNHZdoLp1f5NtoPLGstHhYMKL6Wz9yLYwUKTH7aLjZcPiZ4FeVcb97tPn3g1Qio6UaznhRY",
  "key46": "4tLBqW9SYcNYkQKdBCWeq4BaGv9okvvpHAc7mMudb9ExPEBH8vCent8mVzJZGyTQE3UFeMZ6Cxa9syjLZEaxf6XS",
  "key47": "2imZTQWwiWHtz7fAEDoZLFfpfjx8nGzyhAijK2D7bkQbsaGeX1XMpUYmtnJx5AswbKNWLUsvLPdyYzFDcJiSy9zB",
  "key48": "4EwXmMFDPyYesx1PZQNe28YVKPSkEMkMMLc3XZkjeE8zzEuuoCiiSEdT2HbN5U6CqpKwL5Q8NBWzXBc3LMFadjBK"
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
