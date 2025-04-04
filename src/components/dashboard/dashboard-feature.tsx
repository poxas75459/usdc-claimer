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
    "5urwboRDGC2uTFE1AvYug1aZat1cejYfqNnDDLHWWkx5sFQvvLx6mhMQxWBvB53aeiZb4o6yUkK5Cw7VpdMAzqXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Sm15jxhkWJtLqBvKi2z38X6RQMGKmgQAtyFdTU5xqAokco93iSazpZCDPTypw2BGQb7wVDcbGQBRVFJkNzZKna",
  "key1": "4eS7WRbahiMgpDTZ4qAYowufCtMbjquPLJhqKEbESobNdynfmvJg3m9o8hYgnE2ZuD1WPV8KCyXpxX74xerCR6Cb",
  "key2": "3mbnhtUY46Hd8GMdWLMWMxJYbovdfQTPd5jqUsufoVGJKajo17h5MixCrtxc6F6MsMJ9ZRQ1LgMHuXe7S7MVxGgd",
  "key3": "6JnNZb6UVe5ewVf4QyFjJmFY7fZVuNWJ1iS4xv3kqvptzmLs7MUtPix5MNWfyRbpuz1J7aW1Mz8SqLQmEumjCvM",
  "key4": "2vEWgbjV7haR5ADXH56ibBXVzLV6mYRoo66VL4VtxwXGWampBqKYxbjJChmJpcU5LzFYhkAUDxtSAuMbAvuTTHb7",
  "key5": "m6CNqSXTF9BWkUoGWYVppkUjYP7SSksaQVK3BYCYTDY1jpgqQ6z6ee71dTSUa3q8XDdSzhn18s4KqbtCyJ12G8p",
  "key6": "4QMvynbHRnQnGRHDKCyp8aFZES2t4NVkqoEhoEwSbKMqsqPpvXhuLttyLuQyY9GJ9CPBEEpx4qs61kgcy9viBrQq",
  "key7": "3Cpu5vLjrbYnPWrXNiZS7wmgXWpoSybbq1qEpHeKY1jnjJTzgsEoWwjrpoMziSmFJyiuFQDjeNL8ck8mgBamndqF",
  "key8": "n3grF9EiM87CgTmmggqEL6ZeGPhmw3sybNZCdcw3m32ynscgSZGGua71MdhStMkemjFELhjSLMgUqw3weSrbVfa",
  "key9": "5SeJb5WtML9PKfKAY5NbbUpmzcjiyQR4tSSVwj43eQWnmULP2LD2vhPNU48D2yzpnfRTSmdFbgYn8h6qj1tKtBQY",
  "key10": "2HzYkC1bGN3DAXa52ftG3PiC2BNxi1Dh2TMULSzhDAvMfU6H84KmFxastJ82unBqZGDsNuwZmEkcwobaW9iWrggk",
  "key11": "4j56tQup2K2TfgQzJiW4KLveSPhaGmdtbNXvdEGk5hFfPfXy3SzYSxBWeEtECmdo6QPJsysxg1AaNKEgNqxWYkbU",
  "key12": "62ucwMAKnPmNkwFtHNRZLRHTkxNwePaJJw6NQnwiUZmThV54WxqwzK5AjPsvp8dVXueS6RSkNs6S3LBxpPH8UCSa",
  "key13": "5ATRUPiV3mQCLxsLLaMWB6LWXMTahbQ2CA7osNGwP1vuCRWD4JmpFeM9xNzdQwV85z2XYW8NL7GWJ1Z1rCHHtg8e",
  "key14": "2wsUZNk18iy98WEkey4oevAX9b1b8dgXKafXVMAf83XyMXpzqr2221DceHsbQWDXXv32D6Fa62YnRXx9NP3a2F4H",
  "key15": "41fPaJskhDLiWCUQKd145w2zQkKLPiyS7XZL1FNjdxmtsdW9fbPbGi13NFNzqG6WPSy6o7QCzG1WQqS4e31mRFqH",
  "key16": "47y9hdsXLGLiaG1nWjRRfzKwYZzVTXu5FGbtMuitKL4ht2uEXRDcQ1GdLN1j5GAbXHPquBX4q56U4Z1CbraL2Et5",
  "key17": "C5zid7MznGubiuz7Jr5PbQoTrD9QXy8hhjR8uEkVgUMMFqEr7t5yf5vkXjsab2qpKeU42MjEWPfe8GgV5vJkiRH",
  "key18": "kmxtz1boew1WttR4XZ8ibGDMS4WhCccHUiggDVHq2Fi8d4su2JVtstYXWBJ8tzXciUG4MhG5Jq4EJAky2326Uh5",
  "key19": "4SuzrRdGmiKuCLgwGZmYPJWebR1nbXjneDKuAnLT79DxzWebEtAfSk5Y7RqctcyD9BBaHPA4PxCAqud24NGPAtpb",
  "key20": "mSKyUraTQtgecih2U8TZMJ2wQuNP7vU1AY5myxnKkcdP65n9YshKrTQksQXoArPgBZKcukHHW4SGF7BYqEwj5c4",
  "key21": "4iCFwombx7m65Dmqo2dSg6amb5vZSZBFzTGn5cgto3mLrurSa4UiZRmKGtpwaakepRbSgcxpvPVtbhTPerbDofZD",
  "key22": "2qVwmZeRZE4RhBpdbXH796nySd6RUnBta7qN6d96SUBQhnGP8Jg8jtWXbJPxuazdeEYJyYvJGcJqBYME3yr6rjjt",
  "key23": "5GuKaGx4zkE7wTzCjgNmJNtGUk6nj4YQ7MvnTcbmcM6niJ1zK8fVkXkRyiGfYeUuarKi8nLiZCdTvhQ3sxHsb8fE",
  "key24": "3WH8HTcRZSg93DGMrsg8mXo35gnQTX4KFjeCNBtEBkvatNP3EdvSzxvAbAPzmzomLzwz8p27Dk6wFhTUWNdutWUi",
  "key25": "64JS9ZKj4LXR6QNjxqZJTyT7Ukyxn7sBG9ov2YX9L4PRmfhzLwCJtB5zCbabGapK78BznWfRzNpLmyCpJwLzdk68",
  "key26": "2Q5X2F77Knkk95GYkYk9JP6JNiP8D2gmFkvaBjv2c9QWDWYUSvBXLUBYQ8s2uBycHGdFPLVjceCzPooJkFy7Vmdk",
  "key27": "5yrER1EQT4cLduDfJTRd1NK9H45dgf255ej8n5Ti4PzWo93pDFxJZtkjdE7BF7NvB9w6Zzw9Jh67CNs7aRZBmk69",
  "key28": "4XhkZobqTpDarEqtkPbns6b5u3yhGNU4DN4XKkiveftT2Xo5pLxY6qbWKYpxXhqe8V9uzgf8VVThiSLxs4YicbAR",
  "key29": "4PsTHC1UoaqXWx18f94cAjbB8ngCskGtcGTt2FbVJi68sHvEo7YK5Gvkg8f53QJGRyN3XkWkgezVoacpv3UBDfb5",
  "key30": "4bXwQEEsouEU4XAbMX6SJQ4TRuwgT8c3LWhNNJR9emQcmCky3XM3kxcvFbaDfUAFdDWz8AESUVCHypajga2GYiNS",
  "key31": "4LAza24SUd9XuMP2Adz7hs8x5aMfnqpQD47qZ8qC2npNd4RFj7wgwzekmb7XGPNWqDv4xsWQjpheeSjKgi2XbNmG",
  "key32": "MEsmfeUkhREcbUrN7mCZ8MQHgibEkP77CbMrKMoV7pPVaidx5t4NwrJo4QoyYJTdHn8cTLtuJQ5dkF7fPuRx2St",
  "key33": "3th5SHkYnqEYzbKaJQdztnPm4HFryjBJbg9MR6CAeELwtdaaJNXQTeobqEAmUzza1jVWw3uqfCjtTP2iBSDDxCvn",
  "key34": "3okhpHeijeQqyTBJkzG8PnC9y3Wbnx3P91JhNqEhvgtsJr9EKVdwYhKas3Yr51qHS4v6SRSTxyYGhPDQZ8fXPtVt",
  "key35": "3p1v8r2T7FM2pErxd3ep9HZMY31TCBPPtps4HJs3f3dMDwVw8Ca84WkB2Rvb2DFWheurKthLCNi9sqR9AvgccEfF",
  "key36": "4YdGwhtJqpCvrYMyzpG6YjnEMXgdvnFaWw9uqw4rku7oXgaAqa7anCVLdSbn721qB4RpnhuAj5zENf4X5c8XMiVa",
  "key37": "NXkfKHHkwor8Jgs8cqrax6GZuh3ARuNRqu9uJV6BwtdBU3Y54K18YBsb5FXgVFCUFEABhfPob9vRnj3LURuJURB",
  "key38": "3eAFEyDmAf2nrN56Qzh8xGM3akSuTqbDxC7vjuYZDBH8qV7tnKiddVh8khbd3pLAj9cEdh2R6xBfX1U4tiS917kF",
  "key39": "4PyoWnZvWJ5YK6UZDWB2BurfpJfZ5Cddk3Bo2KTR5hy8Y9t4xmA5AKfyTLwdevLDmLc5ZSzesfPHs6KEUSWX4PqZ",
  "key40": "phMRwDZiKQKS5sUXfCue6XkEXPqEoGYHgrnKYSBkCDkPB8dMjLtoFvUJg1uyHyK51pNjVNY7JMWj2Z7fkkJ6zWS",
  "key41": "2fDomoDKrjyvqbuoX2r7XRZ7N95jisX5pEyGRUXAZ5nBZciMAzy5bMSd6ZgSYzEXgdMMNYifNzs9v2HxMy1LZP8Y",
  "key42": "5DfRDawVs7Aab2vCkzkGo6ws5ajN98xAVUQZShUxe8tzLkx4zNUwQnHJHidsiXn51sov1WoNnQ3L6mDN52JBaXEa",
  "key43": "3w76XtmQs1omcgqdRW5TCx7oNUHBQNWkkoJ5X8vK3TDFMyHaewjc8MUxiA7uuXfsL9ddBgMyJVZeTefokKJc5R4S",
  "key44": "5oD7Hun9moqMhD3cuCuywvfzUM4y1ur1yiidr4WTX2Aid3zkDynAc4Wx8vetVt8HYJPpbkFrxGwawY2ooXKVo2iM",
  "key45": "26BjHko7mqHnDBDBTpPJBoUZ6QZ3yES6vwoCT632HzR1fArxHZ7HpeQ4eHgrkEb2dxNdMifw2vJWqd6uCSZgKcCP",
  "key46": "31mcQZy6aeKCLjVATp9F7QR5J78dS2ZFjwKyxfXsxAJUm7m8dvyk4wEamnremx9whSya2qtj9nDtmspQfYDe2HxZ",
  "key47": "2E4axHu2CL6Kn5SsQ3fC2qMJ7agfZjG8JxDkPokWykGK5ftmEUaVAeoaqGQ7TRLGDQA7YgyFHLbduTb6xd4n1aQx",
  "key48": "4AbZFKmVBPKroyhLC694i4Q4zPiiX1qZZtowojJtvKYVoLS72RVAAAnxs5nwv4PNw3ReD6iVTTtktzEETZRMKLZb",
  "key49": "3nBu4T3fvneSv3qSqE9bjSkT8mSNeJ3aX5bPWLaSm8BifBAWXR6Zj3Bm9p2UCCsiZ2DwfLEaWaKsT3NCfwndJZrs"
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
