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
    "2yRaSMBzYFSnk1BxKmASDk7WcAa2T7GySSKJhTW6FMH675KxkttLz7fsUwticVMmxJXBeCbVQKedQfr5iytpy2d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkJmZSzs9cbTDea4BCmU381DJ5CYjwh5L3WtVfsfXw6sq4HVfVn9uUsFB4WFLNSzD351tsfFbvV7PEH4jzx4DVW",
  "key1": "4wGqX8maruz8uuJPQadJmDRCJDRaeGrAzLSeFGeqSKU6TsiY9WWvM3qFtV4kfQPGhLTtV7ntYtwj3mugQaezeayJ",
  "key2": "46mYit7ecxACbwF23nyHtRppq1NLh1weCXQnvtFm3yxrHdDZhT9PcmAhWntjsDf1aNUD1KLVAnB8bW4UN6bB2hNM",
  "key3": "5WLtZiLwQfac9iEN3aApwFLCkZY2TD4ACvxi71N8ctJzBkbofo6HNQWiNZ8UXBmE5NnZmPRHLjN6UeTLRXQMTUMe",
  "key4": "4aChpbWr7HXQ4ZtJWvuNB7dgrvuSPZdL9JfibdbnRTHopcxXe2r4smqjwuJ493MQxpAMJeMN5VGAEVq6sLtMpUQX",
  "key5": "67W2U57dQR5YcYUTCqvBVPQRjZwT9dVR6kj6i9yCrg9aTnU6pRYqAeBnSuyb4gP4YzsfvfzfsZGANgFrf9cSKvt7",
  "key6": "2VddS45qwcMsa1H84NYsGDaU2F7UA69G2KUem3NtVHyxGASJKXemZANcEXFiqu7QWiJmeeNZjCku7uXxppb7W89X",
  "key7": "3fPAjgzgTwLUPQ4aqcsp8PXsrbVfJQLvGhsAuATL1tno9Y5ktkHZKgGzwcztcFCrq4hxpHyMyHNRKaidjrhNQPn",
  "key8": "YDLdayrySKxz46SM8gnqh2kx73dhRTt8U1bixGpdKAhHWmKP8rqSs9Axii6iKtLjctnFE9yPwEZEdmH6c1Cjmjd",
  "key9": "3W6jTKZ3jZZEgnUVYgc6TRroPtwjrgNvRp4RFNZT8qjHM5AS3atpamUaPn5NvtZKCRfBAuN1vEYMqPEFYZnh8ENZ",
  "key10": "31DJQFEiBFNosYBxcgYnefcFzoAMarAf2arFCMgVEXAj7unmsgSGjsqFbvrA7z4LE98XSVodxMmiwcbiCYE5trG2",
  "key11": "S8ddY4pWbTtZevqTH7iVFaG8MoHzU74k3tAu3x3i5ejZ4uSUcxYNnbYSDLKAQBMfKfZP5Ydkc2mV8UvULu5cpYR",
  "key12": "mdY9RShYShgW914qBQbeE2GsBbdS164ryCJ3e3YF29PAicfMu8tkRFT8bsM7UV1c3G7XFUgt4yNmXCBAraqXoMh",
  "key13": "4Vec872GNjTU4Q7NfQC7ibkz4RhaxUhRCwxj5NwB2j4XHhgqUg8ioTPnffgiUZXc7CFkpWdhdKGua8CdSKrdou55",
  "key14": "7jSEedjx51Wn3TuZCAFojQYvhFM9GbJX8zXH9i1L5k8xJTa5EDxZ2tdT3pUnW6AhHLyqKNimFGCvdY4WU7VQgA1",
  "key15": "3T1QSQAokooiKq5rEdST2jGmq8JgfTd4UDiWSzRQnJbB8mSofUYfdeTpwaiXxuKL5DAQjZAPq8rAWesCkznosExh",
  "key16": "mVH5wK9BYCi59cyaxrmEeAqNrNSfektzZNz7BL7W7Qw2fZ4eunMbWWhJuJFB8J81ZG8Ys2bmBWSFReUr5WD5WLD",
  "key17": "2vxLG2cnxGgvGz2cZbiwMbezJr61Uob78ve92Du3mxAUVGHY7mJubiVMqgA48TSSrwb8hnZcuMua6uv8QmTbJc64",
  "key18": "46Kues21e7e5kFgZFYhTD6ZANj81xkTc8Pc3XyewTxZZBHKZv3Y1hnU1yWFkfQEvVj7zRWGwMycbJgKi1vjnt2Nt",
  "key19": "34VUA7peoGpvhRvvkqJTNb1nsiSFB774jN67RWCj2qZfyeTva9TY6QJKJdveTXEX64H5dQQRBEomf6mcRGHGmY2m",
  "key20": "Cxf4jQu9knSNC6mbHdxRGjfRvwZUPhyXyfu5GgEwTsbGRw17JpaSgeYqLgBPQZkUXTxreaBh9LQonUU5Jk4pN5t",
  "key21": "34kqLDsmjbaqDD3rLvHrG4GtjYyLpNNLFscXGSJdZSCnNUQKcXrQbgvEYAevNM9UMnnCmmib8Y8uVSyiY2WsJUNj",
  "key22": "5znqSGLK4SfZf39Xno3taTARKWgbXVebRFwJJJ6R9Pxbn1vVGAPGkiG5fSwzS741yA9k6DuWjHg5zyhBufXNLjub",
  "key23": "5X8qDcg3Gas5jJCXA3roYXMqZ2vFjxFk3PTUvnqq8NXnyNR77qtS4FjAmNqCY5C1cWAJdt1qMGPDg7KiN7eSmtQT",
  "key24": "4uh6D1yLfZEg5Xc9vkVYayUkzY1JLRcVUXyNEtPJoYBmwyKccvJTENCdbiD9VjJ82fkVHNyaERhzXCWFBgW7X33E",
  "key25": "4K5wpoyeSXt3y8FbQxWjDNWC9EPygfotSgVtGCuv9V5E5Rx95tpTmW9CdQP8nFw3sUkXhE2ZFGzUn2Fd5GqHbFDA",
  "key26": "3S3EKeKFhH8Tkc8BtmMrmVBfwMQH7CZNSUZyrE52b8Rp4aHZ2waDhSRoxj7GC1rBnmM4rnzxsYiwGzowHzZu9iSi",
  "key27": "3BC1iukZrSFMpPzSm5Tg1JCj47GYwPegh9toCNaFhgXhGqq2DYLsocfSPAgxqH4m9Xjs8ikc8SvcZfvfii397rt3",
  "key28": "crVcgPN3d6R2FVRo4xSA8AAcke8cTEQTRkB8RD6oeUGeQuBRHbhZf5uMpArdHMprMHMqdXCYnBnrUrvSvunPcUc",
  "key29": "4SjBKWZD9Qs52mKYYdbnWXX8s7WqxE3B6QTPMcrGjf9BmR7P4SyJ68fUoyHpWneJMqetkqoq1WZo3fozMdEwGudo",
  "key30": "5zvW5wB9rDDad23rhdUaVWcSxWehFcBR4jc8wwBTk8o8WQXuixqs4KoiRMntYkyTxqzTdAwoEvabtZ1ZkPnayrxq",
  "key31": "4rWiHxnDuXa1sqsvfxZC9L6uGV3ZLxuWbeE7cxbQbCpU6zUMU8kznkxXsS3wBwBjkzJr5bDx3TtiGViihREjvAhX",
  "key32": "258rPjnCHQzkavuAitbhTaxX8KtMV7NhjBpEWw72p6S4VEKFe821Ub1CpEKcoZgFex1inrrVKKYBC3AXcp5KmfQc",
  "key33": "Z1wGR72Y75DzLjpeh8GXDYjufFCxx2Wp3gBrAN3FSseJ9H7DaFLCNpwHChm4XrYCNBEkoYyuEpgj7vNfD6VPVrK",
  "key34": "DSrcj2T55hSiE2u2mxgQ9uHhamKAfbzD9ufeNyKGmc2MxMCvNgr3dQsFLWfhrFa4yrYp737atEQsXytkfLX67qQ",
  "key35": "3fgkfGpRhe8kfbtGqqQyHxtyxyRUmLwYgs2bZjgdbnGLFTrDYaV7zPUUPGgAux8tBsQQ34P7dhHnWAErQESJwxU6",
  "key36": "5N4XWtDbjdWrVsVL2bprhz6qu4yfzuRBGEQb68qYgyavZJivmRuDhogdvaDjznYvknEAAAkW6yKvDhtMQaMknEiV",
  "key37": "2CwEhxrvaokLRDzpm5NutTU7WK14Amv5gdiFwEzQmzZkQwEdFL45GrhAGpvLTM8pLWpMSqcHTQkVpe8LpCaRnA6Y",
  "key38": "2k4GzuMC83iehUZCsNrvV7G2L3rtQ8iE2DLbNceRjwHyABnk4E7ThBK1v3ze2wS5mB75m3yfVxHszQnfgzZ7yBdu",
  "key39": "31AZhMJxhRghykbpGi3XXVqKgnNu1GXZzQFXsjX7GAgm65Mvya6UCdFrSN7ShzrvAXp5DbNjQzbkCu6RfEugxmhF",
  "key40": "fenTPiFfC5qt3DKUdu6SBBJAMGYZWEN6KTmPHuiTroCSwWksqmGXA6k2YLXm5BMzrmXb69iwBNTPVX1c8Y84haL",
  "key41": "5pq2ZXmWg5wMufhtAhXBH4J4MR9MxGCq2pjA6BQmtimPtZhnwcYQwsS3hRGAGNhRej9h5NoSbBjpXFAvyLfQYdX",
  "key42": "4wGefpRBTDnPyvJkdi1U2sFe2XwADQcJRBHVgHTUijWZYbYkPfQu3ykF8bEW1t9MQb5uHrxUi9iQLWYVn7T9aXMH",
  "key43": "4JrxQWxtPNJxhZi4VYYBE1kPuw9LFE8JzsGQrFGgX3mDuTSfjhauTfbGex9Q5eyoW9nwC8RP7KnGJgPFTmLPKom8",
  "key44": "5yJ3cNvKEnudAVgEPKiAS3S6pzH3czDzQ4HKEe2uPgX8QkBrgVEResUU5LoQeeVenR6XSEmfnbzLrvPsRjQqXc5A",
  "key45": "28SeRWR93my1LgvBAska34WGMmRACjzwtG894vPyuxy2cpbomMts8aqoWVa7GwpH2ZjWUDVugCSFKHix9AiCvmTh",
  "key46": "3fukJvtrPuQn4hwRUfpdso2LK2sP6yJ6N3KCvuorJVamXrfjR4sfUDBHj8psCwadmXZfgZe1rz2WoLtswn9k3whd",
  "key47": "TTULmku7vwrPJvvPwqdJ3XhDNTqwg7qSx6MFxtKLyUoQCmoDLQX4Uc4kfM7qW9VrGHTknp2q8BNCfsBPGRWpfo5",
  "key48": "5oH1w1mdrcnTzkYzDxT7PjyQ8RQGVakymqcGoBG1NPKQCxy6P7Vrty16nH5Ck2ceLrDyFYqRKHkJ9aAGkzheEkrD"
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
