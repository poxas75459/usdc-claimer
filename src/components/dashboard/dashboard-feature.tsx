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
    "Uwr28MYCKe1ExgGMZ2pvbergS8niPBY69ndR9gvUr4UcHfMdbJZd1kwD6GmKgWDXQfMCzN8ejQcKUiHWHFH9hdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yP2PCzsMpja2PFB1to2Fxoi5LM96wvsS12jvCEbZsgtDt6uHs2gapSmJFeujqZU56G6mMZvMCgpUVQw3tAjZcxN",
  "key1": "3nE3srntAYrGpmDUr3cmZFDGGnvotEBBVUj5XhfPrkKXP1erRJo6Sy2w5Cvngdd5hfN8jLXo1qk6Rpk6u9HVPVzD",
  "key2": "3xL1NRfnTrm4j65hJJng8KAwwaE1pyGR975pLLLwTCZ3A1VX2V8jByEvuKhh5DZ8bBHvVE4hUmUsutenvrUh5FDd",
  "key3": "2Gd3VL93QUNA3FcaBmw31uXh4pfLmfRBAbUL1gKQETdh6gVErGEeqoTcRKDRZF1h3HR1qHFH8d1tgAMjdNsoxJZj",
  "key4": "5RGwUKHk1YTs651s6v14hJ1gsoWNsBn9EYVE4fnXnJMQ4Qkeru9oeFmkUkJS63yzBkoZKBWgE8wKqfZaKgBYxj2e",
  "key5": "5MGdvG46pJFHWa1Nb9hUKozngZaFHoVTUsNEsg3xz5abCejHUYQbhKcPoYfeL8hgHDZ7p39Dm31op1MjfiEUjFwQ",
  "key6": "2KKzJomLk2sHtDDiM2om3kjBwJbbHsWYyCd9btKfeJpYk7JpMf3q6DVYMBk2Ykopey23csTCWhnjr65KLDvmQcpL",
  "key7": "KuZ28jTVNzQeWetuZT9aDqt1UKVGkey1ECVsyNyp5mhUKdXaVn1VVVpLktUTAoSDEiMVDNJB6Hdwjc7zd3NfCyi",
  "key8": "3kAVzC9iCW8u8wZx64sqnkLV79tCm3YMzr2cKYVZjG4uHDL954B3JZBVSLrygtJA8TDquf7mY5JPcXNh5sUVFBa4",
  "key9": "5wrQBCkWYXc9xwjWZWMfFfZmGY6QBixn8sXm7CEmTUB6Vo39hex2tR9n8VKq3wLUPa3KViYRPaLUtm88wvRBz7yU",
  "key10": "5dvDtvd5aUeRZ7miti7QGfaqrh7HKMqKjA3p3qibeHrriQQPCm1cp8MUthRnBCHN2PTkfwQ9ecr26E2rbHgZg5No",
  "key11": "F8RZDgAuQSGvkLCR2ugPQccV8jtuXoqHqksoNTVJYA6AjErDd4s5ix23WtULfNZDraUBt5CQCw1w6566tCQKJBu",
  "key12": "5XYqamfcNdYG7DcszpFXCa9sCCSYrZc3WbFX74gd4MzAo5yJTnTcMDMWRcxzmbfo5m3a3cEcC95wzZhUACpfPqLX",
  "key13": "cBW9gW3dAicFnZYWmdGogvM6g2auqn1MKQqfLLjX2DyGTc4SkFXqYV3o3GQzJD1hjLoBYFaUjaw6KyXCFyHeEee",
  "key14": "hLasvu2mViVAhcBT6pNBDHffvRDmeVP34H3RZnMDpT9fFAgqSY1GMTY3y8QG9UjXfZcoWmkS51EKAMgydhTYBGu",
  "key15": "5JXKJDhkfae9N5JytfrbPBBGQ71i6hkMk1B5eAGniKmEoKqDCd9soVjigxoD9WkJujXXunQoxbyKNbPfbJzR7DU3",
  "key16": "HakFhy3L569wTadGpNVy7pfoJZwLVjnkW6LV5z9azd2f5ogW7uDCuQb7CeR1FDnXGcRWvEQFQ2ucLLhMX5Pi97v",
  "key17": "23HVWdtwmPaaKnNZXbwiwe2epTxRKF7Xmv8xzVQs1S8A3knwst2trtux4HtV7Th9LzjxjauCFQn36RnpvSzsdwKR",
  "key18": "4jkPpLysDHtVashDiwhPiJKG3LVgyoQFHozQmaKi28AkXFFKsnvvK8AjGGgjxAyQ69sByngkEr6Dk7wAX26y3kNq",
  "key19": "3252kqzEeepzCBWp7yT3WNfP92NjTW6uwrYEhBA5vzZ2CBLFWW5HvLVWQ2ZxLa63Tv9ZKH8YZu7ztDhGJt4TLJQg",
  "key20": "2MxKS1aP4w9A6ncic1GmmcM4TTnQEzymgc4RXthsuY3i6syyvpAYwsZH1iYZx3jW12MuJvkWMDrCRqWGMVKbTAxE",
  "key21": "5jZpYsmZ91DqtPvtqMjp9AK76U4ynqhUmj5hbhCg2mfh3m52hYzXXe63NrEGBVxedrnCX5cSEr8bL4MS7y1dmVfG",
  "key22": "4at8scvFW8ykHnV57gZnLuTuCWxdpsU5oqgDjS94fCFBBHgQrjC31WQsVup4FP6BxACNWdQYzGWD8Zeae95ZopTw",
  "key23": "eWWwLakbahoVexrZYRJmmkGbT4XuqeooEMxUM1huvFjEaBxNmTW1YRtPZSHTqJ3eHccSqpr7GHN2qqsFSeydVut",
  "key24": "52xYGjEq9fqzK8QMpzpGX2Hzqs3dTGz34i1soGJhyGU78JJvn6QFdux1i7rCKDNKBGRvnbaAxw6Q5Ti33EPs8t8j",
  "key25": "5EPZxH4cbK7rurmZrhJa3DrDkPeQGKc7eEfEBQBQ1dRLdaCVkPf8Ge9hm9QHnFVTNc3qJyNjfVGSZ8omiqSXxdFh",
  "key26": "3eNmbZS8BYrFpMQsMgXRFqWC2eEuyaZnscFQzfSPg4A778VSZXUbnMx58RCkPR5AQdFfdCN6MNB7wvGtMYYTxTFu",
  "key27": "2cyghRzcuvbV1X4XNvjb4frK4Z8ChKtCvzkPfRS2ia2WrJy5kFqZPH5TTjgzkFBAF7HizTHpVJuXmRyTYrq7L3CU",
  "key28": "27HWfXsBYYBhrCJvYR97N8sk8f9rH1AsWTRF8Em1iboeF88q85gPxqsRScYZsEGrtiPmuitAsscVPETnZMa1cyjJ",
  "key29": "4Jd19UfRe1VcbKuhHjASC8hpC8Y3rHLZ5BfB2X3LvVQ6QhxZY1dXiyHNDecz19bXGEgLudcW75VjWKySTQBmQqLm",
  "key30": "3LJSu2Da4vHnwkJCLQ5omrr9YP9Be5j4mtwsD3QXjeqpnNq3FouQwDKeqk5F6qjWu347BYvtdyHw9HuwDFfBN978",
  "key31": "oSEqzyxSq4MgaM9YDHLFMT3sGtEj3Y1Z3tKkwCPAVbZsNw9xEhVY4HF5vNkBA4KQNzvmTwa6azVfYXFDRoJu5Dj",
  "key32": "rgCnB1FKhWZkhLeueKL44cMTjdpMmcdVb7tXfMQVHuuMFAHCzKTbYGxDXZ6Ax4AXSpjkEibHM4UyJcr5phhiydp",
  "key33": "4Fieejj66XeRAYi8rV3MBSCda5FDkUrb1CiVWt4aPp5SnFG9nFA3KCyhTreY4T4oXthAPxbY2jEwxGRRi6rm8zB9",
  "key34": "54s2CAUrUjVvY8qSkfWTkFyyS45GnWfXn1tic44WHVCAgUdk729jaHvWnUhK49USt3cBPk4k1dyKA8tTAzh8vxpF",
  "key35": "5D8RBdSt9j2jkjz3uvakYx5yXga9669Xpbt99PUvq43VFz1Pv5sDVVkw5f4RkpgS4dKma8sRDayJAgxMCev9Fgs7",
  "key36": "3KF4u97qUcAeb6Lv7TxRH6GtZVPnvUQDtQMpN83eB5r8d5HGAu64hW8VwPBsYuP9Wi8eH7Y6RfoPj2G1EgWapT5c",
  "key37": "5VV6tZGQ2T1D2V5P4N3hgWcBAgcoKqtMEk19UsnstMXzTVnvwkPsqBL4mzV74ejLGEUetHS6UUuhdpU4ioDrAkpz",
  "key38": "4ZD3ccvojYTuEyRfp8aUsLiJXcr3PEc5gE3TV4JUe165gsebC2ovfSHjXVLtjSuSE38RSFK5gurC36ZQh3ukesFR",
  "key39": "4u869cfmZYguBMMwZjcE4KFcgMvVnR67zGoPxoeGFZj56zy8nWZX289d4tpAANUsMR971MDJneHqNGUdMLDaecDx",
  "key40": "5hNw4b2oX8ztbmKbzjhmZ9vFYM6BMDrYQxMfv2AYDEWYH43MEFGq1vuzwQw9JXtcw2nfe3tvtmJyQKhVF2LPx6W2",
  "key41": "2ZaRJ8tHf3Fs5B62obcPudciNT6yGcc13iKJoL8zdgJXxtX8rQAA2UqHzHbebcJZYw43v6Mk9C52SXweyhfVZHFA",
  "key42": "3oMfRoeLKtSxdFRsH3CNPed9kxU4bHxKhRtrNJkMdZMx6zTxPpp8LMRttdJ39GXWjJ1v5i1XfNQu6VZvNejiBJU3",
  "key43": "4NrFNWePRAXmQXQQUbDS5reobGtd1wspoE6ZkH3BfmAZMesNU16zXiMKjKrELHYSUXZRxmEwtGHwc5CPuUuajMZr",
  "key44": "2A7S3nse6AeyWGuxqq6qFWUTiwcX9E7FjrcHgSK8eAPPbKhAEeZvduswyzLgPX9TiDip3nfaSsfF68xFpyMcqkp2",
  "key45": "2U6PjuWXSy4rqhdrFAo1oQK3JKwUbDydKcXtRTo2i7meemsuSDNgvNSzXzL5VvrtmxSajvSd3YZ7wfA9ZZNEhnqb",
  "key46": "66mQ9nJpMVgjrHvVpZfkUfs7NVB6DecymaQWfmkEbq3dPvp9KaH1ZUPrRikiqjFPvMwj36uCJj8PYvGBoiy5pMwP",
  "key47": "xFoYTDNhmfyDpmhW7yjTJZdhbTUoM2Zyd3fs4xvmf67NXQUy9NnXDjNyDK28ncz1XopfXieGutFshtCa3PaEEbh"
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
