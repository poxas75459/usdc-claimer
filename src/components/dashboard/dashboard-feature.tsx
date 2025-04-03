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
    "352QvYimvsg8wPaQQ37H1Us4rVMbaPhgn4o1qsrsV6KyzUdZGeJrSCarHwwvXUC34d2eajPkSo5puJSN1K96GKVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y24NidDDGkGf4mmE2cLYE61bqfuRffPiBFRLbceaF19N5vJwVyP6X7MfQn3Ek8YGUSzSzCauEUvJWm9xNhF4cza",
  "key1": "4qmR5YiXYw1Q69UTXftJaW9rLfD6VsWdyz46XRqsXVMDsiKwKAcG8XUmtbNUqhYx2g1NmPHSErJtpK9edXqvryu9",
  "key2": "9EQvrKKa76TFxvewqwzNdaJQRDuh3JQCi8FXKKqBDarGc6mE77GJbsDtK8588vqtCe8M8vsHHMXtcyLAEXA5s6u",
  "key3": "5KDo3wPD2j5wWryHrfCPb9HHB6wQyvW2AtqvG53tZSSMGVJC6kA198YStpSqmxNJjNVejP3Fewb1y7ayYXuSj4u3",
  "key4": "rKuXz1Xcycr1mhu6ckWPHDN8qLbi3mWWeNXsa98XWWzDwnYYyMigNx3wseU2H5o9C8PNdR6FXmQ53YPtseAtW8t",
  "key5": "3AhFKiZvHdYQnfWre2M8yarMReYq8yfKT2WGc5JHPepZWaiRD8ZGVaLqMrAxPQe7iBDjXrpiSgf9eLFH4jektsdX",
  "key6": "4uAqNNqMcVzi7D6pw7hRqBgVtJ4EqNLWffomCPp6jmRiPXvgfktvvRyVgYwbwRkPrj2owfcAiLDzAdCv5Yj2GPPY",
  "key7": "5Y5EWHj4U4ujCpugnkc1Gor54snAzDsciYRRAMpdhjTwAt6573KEovYDMVWt1GrLTjjD5MGqGYzFNaF9FUyBkt6z",
  "key8": "PWAjdVDpfrm2S37r162nbvC3hcv2Cnusds6GTowHrgcCMRzu9kvTFT18Qoj1mTeMDduebEfixQtDhWzmgiDo69g",
  "key9": "3h9MK8tBSr3dfEbhKCvo4wBjQhLFgD7bU1F3wq7TYws5ZPDdZRBN5h6s1L29CdwawfNqXUMJExMzB37XtCBN16hK",
  "key10": "3PDmbD1jLTBDxLNo15ddp8bJ1QU9jRHVAmNjzJXENTj3y6B3g9k5ihv1TUf3TFh7i6FqLY6TEqKp2RVxUeXxBHJ8",
  "key11": "5JyNQe8uXt2H3Q6TkRTSpXwJ37TXjXeaNsTmmUp9iehv244Wr2WWW89gUYTT1QiHoBSHBizHVETH12YeBanNTwaM",
  "key12": "3y5gBph2UzLgH1r8esRuvcwTgiPXWDUxcC3sGD5Pu3Fa3ib9jYbnSwQUh87EhC7MW29YaZywHnybyvU7enwzyZeH",
  "key13": "nHmuBhr2LYS9r54ixWqGyukfsXjqSv6zVhamVtpvc7g8xYa7uxaQSEDdAyLWRD6mJUX3Qsu9kQsPk7VXwLQuMNA",
  "key14": "2yaRMtDUZ6A4RPMW1g58rAcWy3BkY6it5YiqxrJ6sVzKpha6oETrHFhc7CpZ3gKVEFnCK3YFLg6Ry37VF1cRWStc",
  "key15": "5SYcFdheMSkL7zXDWQyH5iPzU8TRGDVSWSAD1pxkY8vkMUoGWJqjVLkXbNU7DWdn9TVofxTG1D9DfcuprSHmcEd4",
  "key16": "4xzWZQDNsogqSrvnGySAcikjDV9jrGux88DmPEqEjijb7PLBUf9FtjpXibAcwJpRVpzw1yCnFpnzf4RQnkwajmYd",
  "key17": "TyR398K7paDSYyQfti7j89Zpf3sieQXmGEBQK7EfHE8ZBYeYo52zB54jP6WjQ63SdZDNj4SYWAQe25wzTs1aN3k",
  "key18": "4LLCRrcJ7kwDE5xRTHM4aRECr2bv13BwUckyFiQNivdxY5G4oUNHpVQXrDg6mp35jbJEyvjjKhaRShHGzjBFMJWU",
  "key19": "4dNcpiz3wt7ZdZHGAWPuivdt16dNSWWabumiiy8vdSs1r6FZNREvVHXuSFTVZDdSCpun1bZgi4F3y8cvfSeCRiyg",
  "key20": "g497Wk5UAEmvoe2NRhJUQ8MMpp8kpBLVUxYZYNoEPdHXbD7LxkPn5H34WuGzocuSb2aEc7Gao5GMwf98p9SkV4f",
  "key21": "3VmXQbHcvNtQ6nBnc9P6CCAsDYRHU6vmuWca5mYrV7FKd1mN4s84jDJVncvYr3MbNXy4zjBu1zdMKjkXF1pDbrDS",
  "key22": "2DhX6BNXeV8TXpBsF3vnHhBZZfyGL9a7wEGZUKsyNbatjfBAEUVkMCizsTJNrNHjiTstHxwAudPaFnJo9CJB7Kwj",
  "key23": "4Ras2uri97sVyWmex6L5AtbBL9DgL53rY9CmjA5RR48uenLAWzoMXER7VfAguu6Z4b9SQR5431Tkq1wdqCqn9d5e",
  "key24": "3zWPkWfVp6o5qdPAQaYqWox9DSMmp4RoMuKe5abHAgYsQsxcEdxpYxhcniCAZ6jLazJRRY26562Dvmr7xVyBpVKJ",
  "key25": "6ScNkw35JBSD8sGMH6jBbV87rBgwBh47pXfaU7rvNcpPsbwNWNA3443NNXKidkY9Mu7XpiSU8twC2BrR6VWuzxt",
  "key26": "33syoRMC5eVUVDzt718hF79hCaPKzTwZZuhbL7UGhk495Ndzo54wQx1ak3UjXjiCiV5q3a8iNFazshpVLPKqgvBz",
  "key27": "gmGPfqZoK4G65hPoUBaahLx8T1pnYBU4HFLWh4dU6rLH2geyTDs98Eh23grqZdU89hKhV9PnS7HwMU39auRbXCU",
  "key28": "3HKuroQE69jzmhBm6HPt9YcvxXG3vxaneB7SESfZ3kwxbRga4x8turL73jJ8WimsPGqouARQ4TWyRkY9P5i3kkxx",
  "key29": "4ayqPN4jfwykVZLaR89QAndBQicUc4ZLeXWH1xQ1E9crYbFiyTvE6s6yxvMfZzSpoPm2iwNvjbWrdZ4UFDLskRvZ",
  "key30": "4EKFFkTtwcumVaZCgL3VivUmoEfUL8bG6LNH9xeB2LFXSfpR1M9R5XVuA67abL6D82XkTGjnDGzkD5Ezs2Mg5oHd",
  "key31": "42UzsAdTZXji7vFtZwzoY4p1xq71tWHigTvYUeaT8rzfNwpxx6Mycv2iKPeJk1XooV7LGak5ojoz5RzB4cCGu4cx",
  "key32": "4foefuyGjUXBzUWQzjX9Q7nigQHAH5JuLxvYNLPZgMBNcXXp8LmMSzXynzuAFDR3F5D4VnZjFCP8orPYMcVznRmM",
  "key33": "3AEHLiqh23Ruih3qUABw85YxPzVABmuoxQdWCGGccgUJ1uwzB2323EvZFF2JpWVFEtxpwpfAzLqAgFkG7Md9vUS3",
  "key34": "5UnUwVusAXGth98EQcADY53HG2gCZPBF1gBA41FBr11MD4V1qBsw5VjRyakGEDn4xBL7w9TBLmxR2Q2WszegUMct",
  "key35": "3ZUZHM4w7zXf9EkHuC2mjgXd21UCnR3bYS2NgSS7EpqEnUTyVV6tmQp9tLQ6KA47TMuSTrpLcxzgLRCwVjGaX5oV",
  "key36": "5CeRE7ispYFg7mXez3eesEY9aWCNdVbPK8xcx9Dch9riHWA6MitZ2n5p3Jvc2frTfnUHi6Xx7UmxEQMf6TehNVpn",
  "key37": "5UJBuHiakeYrDrRHn7K9Ge1HmKTQQgw7HD3TCDrhD2hbCSPVGNXvY7XXtySH5tPKwHPWwJJvUenEiPhBC4WgMthR",
  "key38": "2kAuF2SuKegYvnv5hA5hUjWVGxtQXfqaGVzJsDy6uFe25pbinEfXWg9e8wxhhU3MUzzp6eAb3MbfXQnBUW7fxeb3",
  "key39": "2cvjGixYQ74KCYsdchLNZ7HS376UwtQRsAVGBZiRK4eGVkHfpET4fmF1jwiP8vJDa4CxgSawMhKh1nodsQqootJE",
  "key40": "3ZDML6wYM4ifBx2LYjyXVn8SxrRfCGFozxhQ5tz1xEJrP4Dii8BB8nrizQun6u8em3ATMY9t9PvZCdJXqKuUUyAC",
  "key41": "3TGrD6BKSq9kNm4fcsW2X9TyVXaQGBJsNYxYNth9rHRBM2XjJvNcJFJiGapqMz7EWd5cx87wQaVo39WewRH9JYJM",
  "key42": "3V9eZxiu5zZnevZWtQt4gTqFXi4p7UWqgCJoESEgY2osvmc5yQg9S1noURQqwg54JjSrScMgwvNowHTEiCXuGZ39",
  "key43": "SNtviJ6M4ifjpQyqEuiDuB9LLxEGykR86YjSD25HLupiYuXuzQCPAtbyDmsYzosAL5M1ioHZyc5Via9LruGvCUe",
  "key44": "4J8DpyaFnS7ykUKQbJmDVQsXfgxBa6vQjdHDNhA5UoCvhrqpeM4XKCuYtFyGxbwrmxRCdHn43VPatxnbcoSVWvoS"
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
