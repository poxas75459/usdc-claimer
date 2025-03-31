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
    "pfdgZg9QSQuTvQkZjeVmLAoSnotx2nA87rVpABrEJUcVv1ymB5BfbqZECczvwtzCP93uu4Z4GYtNDqLP91jGhXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PsoWZ2aFMEGNNbTXzAjn5qgXSoo9fPYCHiPjNFhu6jUiUaN2DykvfakrYLBdZbWJ5qyruU71j89yUBDMzj62P3z",
  "key1": "5DA4SDYsBbXAioxereBsQt6HhXrZKyUS7PSvZw7EFPUGp9xoHvNWHoq9GxX5VV6u4XeUbyVGPHMLzQoana6iGtJY",
  "key2": "2DNKsQqufVoFob1bZppyNNDDn7xAJXneMBe5AhPhvdmiE2Rp5XDyJP1idME6xzJs4vvcMABXZKwfBBZaUsK7ctuh",
  "key3": "AGf3FEm4Y3DVu41rPuA5EBdsLMRLkPu3ajQUHtfnmsBFyHQzKm819wojDhvfMKxGzDRY4cmBo4e7R8HA9cVnhAL",
  "key4": "2hXUUiWrayLqNSvyjyRx4CbqW5Kf9r1E2FxSeGAPNqVPVXaE6cybPVz6AjPV66FM4nJwtX8s51FaoFBPPXLvr2xz",
  "key5": "2p7S9LBTj6fPzhrtEqmr42DCAHh6J7BJCDNVN6BRFEvQRCUVvPaBtVZkKFsM62sexCEWCvLdLEsivPMQf4vn5yYa",
  "key6": "31vXvAa8meEghDuFkkCS8yQKudP5K7AtgxsQrdeLa2p9edg1uTT5XN6xTVuyjsSzwJkmwyoWVkFJzhkzHxzWALoX",
  "key7": "4X3sr1So2pVwtBf5M8C5DPyePVPFsjpdwgzZR2kKpuGWhekA9NbuXQkvCnPja1MvtJ8KqbGjsVYR4e2tQSE6BnCe",
  "key8": "4q2UDqve5ficFNW3B2vN93iZv6vGDSAJTF7UXctTjK9SkE3DD64BzPzUeJUX5S9tThq8a4aWHC23w7LDFHa74Bo8",
  "key9": "5vE5DXwxNaFisfJTKgHkfCb2poiPhEZYfY3PHh6xRsvhBvZc3x4VAVu8FKhuXusLH4SCjYJChYXHNqhQnjB7P1SS",
  "key10": "5tWkZH3sZbYTeJkAaMXt6gL34aWhULWSjuZCyK1whCFHgTR66B2usTWu1GA6eaGJiXPSqS8kDiJx2WibaDBcECWu",
  "key11": "2o8wrpbMGFM62PDUaYT4V4BxuL1QN91gFVPeA386cVeP3wb4XEG1oJtEgdqQvuG3cQwiZdXM7x7Dr5TtkP5VTgqr",
  "key12": "5ucuPZe3mn6s8Kq7c2P6URMm7eamqrBTY8yfPicxHaoeDJPSxpzP2wvcck8sjyhFsx2FAocv2bWL3udE9UUqH8mS",
  "key13": "4XP8bDj27JtEPZrJLKLAmMZSdtTRARNYuRt2UAX5zMp7x54BFHL3i2fcp3w1qm9CkekY955epFDBtR6Sys12PVzs",
  "key14": "U5oJNJyBV4BVEDWRprM5tZG6Qfa9mw4hMyJ5sq6K9oAjLHZH7J55TUAAJ6aHwqZ2Tdsuu5Yih1sCvUjfLNydXnZ",
  "key15": "2mxdXVff5Qm4KwkTWWBQDyBnwce64X8HeBvbQC2pLfBn118PYnBRtoJV5r8LQPcbLWwyEpNzEQT7TR3FiuqJz5Ci",
  "key16": "cWRPowm3nfbtA5BVre6UeN1cxZw32QQZsFbPU3T2rd8omS4maaZGzHivgazQSE5Z8RXoSGkuqkuciAYiPMdRyFT",
  "key17": "3S3LRCYk55fJNh45STcXSfYH9V7xxUMcVXPGu6t3VHwcNenR8dC6bv5BTx3fq3VXiKbVzVJDH1BrHeyJxhkErU2t",
  "key18": "SwhUXJarhJAKf4LT5YiyU9SdQB84TC2cotASeLLFfy9t9AZfRYNsSg71UeJeiKe7JX1V33Lpv7zkkW2JJRe8ZdB",
  "key19": "55vdPaqez7Eg7gTAWq17hsrwJZxhMmSfx8qNCbVMe2aLNbBDs3Kb5xMJyHB6aV37trcZoEEm31P4xwdh6sKUY1mK",
  "key20": "5SAVdMaTdYMkuUBdfhkNGLHT3YZMX1zdHhwzZ7YbMp5DzXfznWpGANnXLnnc3duqvuJwxz3b3s4j8R5ucZzcif3j",
  "key21": "55uQJFiozj9jSF3JkMawEGoa8eU8R8Pha6JZeZMqs4ZAv9kYvibkyYs2Rhw2H4yzUjeqhih482s9WvP5DQx4k1nz",
  "key22": "2ic3cximm6EG5Nv1tKrXhVuJV1uR5hvyuFQ1pM3dZ1rRqUdPvHRPN9XzaeTYrM7nHNQhtbH7opWyYDLzjavRuvvE",
  "key23": "5NGQ7fq6WHZXYTzMdsVzve77jPjHLecckctSTifQ3wmyNFyk6CfbgqRmDfeEnumr1Ch5hSx1phT5xbcFx75ERLRd",
  "key24": "64dq8dfaFesCwedwwPpggmFNe87JWKUossmAcfyHwtXrT5KoUuQb4si2zSXjGcyxXK9szCHePhTG1GUkaj1sBjB5",
  "key25": "p4ugLPsBPafsc36mqJuHpqSWHt7BJXCm2gZfx4ba5cBdpJWAiBu31gt5gLyMVSeYnkcEDDsP11ir9KT3x6w7fJz",
  "key26": "yeDHDU1PbVTyjcABYs5HdobeLWJrReqTTSxjKse2MBTPzxYRtbLrZeP8vd5AK2WXCMtgofWHbFAx5xXCLsuMb35",
  "key27": "fVddPUQc84mizkbEhrJUbH1mnFcHHxnY1iwHaTnr6jhmtX1wHCT1YE185HyPFESW87Foa4hB9r9LDmb8paqDWZ2",
  "key28": "ACe9YMAyqnQSnEY1njz7jSRgC2LLzGxyUsJfydJUhDcjjft5BJYiAhW1NRQ2MK2tTCc8sGjZw6oMapAPvx2Pkui",
  "key29": "3YEA3RudWk8vG5W4gebezkCtccsKhqc6J83TctdUfesom6ELCNuUgiqTX7ghD63tD3c7sJotrRtg4tj2Fsd1VhAn",
  "key30": "y6PQs418v6zKzUF6FQcbkMqxFTBfrwQn4LbBH6wSGooFxRA5avJnZdxHmWPqpCn4DDuRc59kX6wQ2ZJFDiMdbtM",
  "key31": "4isb9be7wMYa4TH6drFnwc1zzvXq6J72SBfX2k4f4sGD6B3mViJDayAChgg4qAAJqmJRnr9bwmSApu9PiPA6eFQ6",
  "key32": "oAcLYAEqvU96Z64nQG3JXhAqDf82TKreufKq5z4o5WC4PjS4iMY3avE2KxykGG7A7YPa4og2EDgaqab6FBQyUiA",
  "key33": "5fQaVCPPurm1E5wdj6Zdwm1nk65sDP17fGjne8aUo9KRAyorRrXWhr9Tm3zA6Pvxnyf5nrYKHziNfwGsFLXRnVUt",
  "key34": "5AqjiKXtSeCXL2uNyYdyQYVeLn9p1MwCVBKctoCSTjLEyCwizpw9dDHQuZAgj9MkWUg8J7KUiqesrsc734r2rxov",
  "key35": "4ws9qQzv7KF6873LaHBDAs3QL2Yr6qRvujSprs19WafHbSudr1toxP1iLHVgDvVd2fUfWxPxFGBySue5tztizR1",
  "key36": "2btTEwwLLNkA5A5Vku5RUKQXhStKeKnmGKME2eESNiJUYrfYDN2vEY9SzXTjA7mdzxST8GxY7PCDjRYBL6YiE5eG",
  "key37": "ceL98rCGzvDHCXT8cpoeK7ADSJZna43ig7EzBWjt8GemRKM54o1T33b8dfUAo2sJ5w4NpgyJGiBhfGTjV3hKHm8",
  "key38": "2CuX798tP1VnGKzH4wzRBQksrMQgWAZCfA7uHHMQpXQKZJ36nK23Z1Vjd6VQGT6bcmCJzbzS5ok6NuFQBRpPK9ET",
  "key39": "4gADpVHaSp4o655F1YyUecevVxbn3kb4nnT23fEap3yhUv9fcU32YL1rxzypPX8yDqNk5pNSH52oqUsE1BmBcwfc",
  "key40": "9ZsAm5yfayqnm7jP7ySkDFBmqrEzsNQyufygKPMX2gDgmttNMKXyg4VooPkgT92WRPQzHc6hcqz6XcETUjWr9RR",
  "key41": "4guKvstdeoE3dRmqTNWCcp6wvmfjmBhGGny6sHWuxipC9SrcLnH6AWDrGWDW2fsLcT7sWFhyufGEqvWSmVntwX1p",
  "key42": "3Ty7p8wrinb7nSMQ6tdzu7QBYVrK6X7SQABNMBtiHS18CjL86yEoEFoVAwYaCkSQcg7Kf5fBeHhRhUAKgM2oq6o5",
  "key43": "4vXBnRSxfpc7r6zJMR6kKeQYR6mPjKRC3Qvh95MQ2BCyGiViXBrubv3gJHZUVBH935C76xMqgvSYmcskedMKKMPD",
  "key44": "4AtNzXubuVjveneZmvhJSBkA97bVJQS7crR92uxEasr48UiED7QTZAz1HgKbuADDTL7QaZreTqMsBp8Mw3zmvEyR",
  "key45": "3oKe2keLBCkCyGrLw7MGzwaZrRyiBfDmMb1THEaHdx5oMiSe1s1uTAravewdjAyJaStJYN5vnNsSHynB3yvKBDne",
  "key46": "5SWSav6chf32FKhJgRUNy27ST35YDZMm1ojzxFCvvxjB5wJuYhHAWmVutsjxhtq4tEbZTVevGs4PCbic5T53pzur",
  "key47": "3HYpwb8cAAkAEP3sXPXd8t9tj9BuVCgj9gjqwacJ3NbFPwS4PoGw7wMgdANWLU8nsqw1gqobSS2q2ffbJEjaDjwg"
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
