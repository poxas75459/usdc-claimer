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
    "4TkwfzzzoGwKyKCsjJR6s1wLEq9AaWtKkeNNvGDMf6oHM9FnfySUQq6TfZXFZrK3A1aX1tykWsJ8unKtHZMuprHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKQ3i2gdTyhiqDUG1CLRss2BJ83MeLLcHBB6JW6vrhdnqxKpSuRg7tAKPm8abuAgEwScR7g6anFEG3KPCdMbZCB",
  "key1": "4uUcjuTawk8q7FXnXaDvWodxn9FNBTnbvJHAjZQyFpHk8ewRpZR1ArVxzNqo57FjiqD2nbM5K5FyBRAyEgyLpXhy",
  "key2": "57DHcJa6sYdPfe22FBHDkXbvS7fHRazsq8w2wkFotqjQTg8v4afyQmQDhwAhDnezc6QbDDF2tuHCNmLqed1FEo11",
  "key3": "2j2dgxJo6m8nrUCQLf2Uj8XfFZP8rT3bQ1af7zjhdLJTAtbHgqsupvi6rV7MMm2nDGeLciZyBd6pC3tc4iyMGeRo",
  "key4": "3hEbsvMyPLwUAyUka6EnGDF74qkjNro7Nimpi8gXtXK17iGnycLsGNbhhWYTxD3rkQs38d6fweKzc9HCyHBqiZyC",
  "key5": "4xJKgM43TCLXwVvuS46rPp5bYU6nAbTmSi8G2aV6C3WsSUQAC657AxZuikyBKB8Pjiq6zFdVTtUYrfrHvsM9ck6U",
  "key6": "3uV4vpxEGS39mUXvd9HQa87eCXRjDhzriJ9Kt9A98pK6cXoBD3rF1uFtxGL7JiY8cceRGwUETW9rnLr5UBZZrjeu",
  "key7": "21qCxGAvGfP37JdXuFuUhSef6wTSAmA881nCotg4bfg8AycPqzsVMhr4VT8KLCK5wjPMP6sifXhypgyQmUSQgsmq",
  "key8": "3XwkZuErdqqUXPthWaZnLCmff3dQrq3QQfo6sSjzCefWqxo1BCGgCx2aB4KbRdUV753aR3GRgv1yW9dAzMwvSX4x",
  "key9": "4jRvFKPYrKH3XKTQmT3cVZaKVbLYHZUcz9UYNptvNZfd7WMRnZQBQDw7gwF457feeYd8ceBsv8j8aLzTTofqVCSg",
  "key10": "3NbwpfUQDhSUwceLEVA9uGHNRoWtvtR9Mb2GFdaQWtk6T5mNRmTEB7jDMzmcj94i3WdEXaHS4cpHpQdchLxz3Nhd",
  "key11": "5w6X76Nntuba46CT9vSYqAPAbu27UVFG3rirtG6VLrWBEyQzukKQA8qdk99YUbDGuLzboM7nvcXoGhL2Q2d7wgp5",
  "key12": "2Dnrkq9zA9gEPMVg7cmABMqwFj41WtWD8Tsk5CJERvdZDBjtEm6xgGV4rKrX362bCDDB4HSbp9f94CRcTGtE2pha",
  "key13": "ZMXveA2VbaCofFCpF3rXNtjaHKLUwR17mXDQ6cdGqFV8zfYKLPpQmwG3t9k4EguKcXhq66yXVy2doM8XVSW5enG",
  "key14": "48XKFns1paD2guxxVkh1eMumXbmKqJVbZUQgJkBZP9iSKQCF5iy847cKWGSyx9V26swa9W366LT6qKANuzqY9ogX",
  "key15": "5sbdT5gYY2b4HKVfQSzDCYgMtBfqf2zmNMRED5YAr27G9uubFJXv8dGaW8p2yon3TFgoqksGiq7k3eacrfk6SJSE",
  "key16": "1rxDTvYo5G8ZQLBEkA6fBwvbi1A36v7V5jmejRemLb56EkFJnMn5jrBE32xukqtqPjVYcSBohXrUR6Vo3mEPok7",
  "key17": "3bRg41nLTYDn4UtW1gCaX6VdXgf1hXnZhM6NfQz5kJuXq4mhNKkeyx2EtDuCu1tMg9mVfqCFNuKgFmpUxAt2SLd6",
  "key18": "3m9Pn7XSAYwq6PEA4Fh2etJtCnkfiKhnCQe43roSvBdbhdiX1BeYTyfKkBmKzPUrBPLohjuSMw2cbS4w3o6kqaLc",
  "key19": "5P15srvbVtnpiaGTua6USc6ffkBVYCbGZWkNfa14nTJgLdjP1noc4RHJyRTZrPLDx6gNaBW9svsLCLmnHQFirPCS",
  "key20": "4GJFBJ2XNfmuqdykcBWfyHQDyQdVzjtqG3js4RACDstvPQEkhqtgY3jen8PQm3X9YHhKevgfcM67sTLzqzCAyTbW",
  "key21": "23P3yKyJkxgZYM38mEWt9V8Azvb2h2TSDzXcmf5W2AJc7hQTBmZEN43yUwwwSX8UKf5WNxPFf6oLTBSzSYPVcN6i",
  "key22": "2FYvwhVNmYqK9wH4mMeyN6QFKx36xboaSNCdA1HpkVQvWSLDGEzeqU7EVLBhvznR9n3NQUAuc7maeXb5iFrbuAHv",
  "key23": "2CrRXEBYww3WKaKJXtMQHP476fmiYEJaj16QZGkQmBtTHYDH51Zts71HaEkT4CThpjixhpfpTw3UWk6sxt3mXVfF",
  "key24": "4tpPemtUbMcG2nV5uh2zNFAvCKD13eBpDugx2z4chubXdZ2ZppVV2nnvT2DjaYErD1tQ68kCvr2canVS8ugaPLTm",
  "key25": "27RY7CanaNn98AQEe87c2zAHTc1VnNFM5DKjArR4exGEotC4ftiJghr8z2U7LRqXQziE2EVvL82weCPTLAruqCwM",
  "key26": "n5z4Yg7Beft9SH774MSeYwKWxdcHsqfTnzv8ZhjviLqw1bzX6pyuYJ3mg4kV5ATRg2o5VaCEi4WTYBNPTdXwVFT",
  "key27": "3wu68kB82hq7PnB9XPczUxshWzQjPyBYk5GdX6m76Vbxe53y3BxwYoF4EBjRLZgEgdhsVjgtq79BNtfmZQguRH44",
  "key28": "41mENHnF3kdSRcH9fXAYzsYvBEstevvLvAi8ngAHVk6Aj7zziCcxkzyLWARk3qH46bkosY8myHmKsuFtTnkznFBv",
  "key29": "2edXF2pqPRFMNzhX2i5oUenC7pgwK7hqUkp9d6CWvHVPFEFrZbeLAD5G4vGnV1JQ7jVLQh2B9ny76rKwBHEyAKQz",
  "key30": "2NhJa9vE347Drv2vPaegp82hAQrm5znZRMrvE5Gvzx61Hqkm4xeQ1KSxF3giNBgWHQFgvw2hRXYqeAEtDtoqzy1T",
  "key31": "3uGGMBS1GUxfNUoQcm7pc7XdPYFghbgd33162DyXvFk3neoQXm4qA1p7wecDTYtCbaiTbRSMqDQWNEXG1seqHY2J",
  "key32": "2qHur5UjR2qrbs1p9R9hNou5rBbW7m7bLA9tc7rwZa2pA9UTTb3jnESbKLMiGsaKT3hZg27jE6dJ4oqQSFtv9drQ",
  "key33": "5hs9grfr1vUDpVfhr7H2m91h3oh2wfXFHwC9fVuagsLwyHGBKjpdiY1M87uF9bUmLQmx8XSSdSwyCRkzb4avVehg",
  "key34": "2nDp1izTnSsuCabgZyVgdT9k5QzC3xpCd1ZZBj9FpVcCp5MMdaRFLsZ3nWhWWRMPebuthU2VjEvJSmkP1UcNcEYA",
  "key35": "2zsMVo2HuP7ju7fMJb6mSrFgwyMVqB1waEo5D821DsNUfn5dGjc7YsxEGqzZETi8Gfi3P56tBH1RzMMKBZc33qnj",
  "key36": "49XbHtmwETozonVA5m6wafkRSZQwwdduuLknhAYg6K7KorRa6r9ea2mhLPdJx22no12M5XRkJfGUaCccnURx7pqM",
  "key37": "4A69eg9S83o5MLPEeqCuhwoT6Vv1vo1fM6qRszVQRXvu1vzWSAgYVK4Zkksvr7LsahTKyF1gXE394X6gvGVcHHsX",
  "key38": "3ixMiPQaVeNet1Z8gpLtpvuKPG9Y7LyJPqXXjMPPKSxQo4HgbKiNerQ2vRezGtyxMuwtjqbhobVHH8guPb43yCPn",
  "key39": "kJagamJo9ER1HLGs5WNffABPBQ22ZDRGYAmqXenJdi8ET46CQBmT2kEZwvyKGTMGt5iUqRkaDFxYHkZbshLt768",
  "key40": "2u5py2s6x7b8eQEjXCMBkcycB7YrFAvz3jtgJXDtAE2MZQk7axBudXj3cCynKTjrPj6ZTyxdGoSe9cu3EDvUX2gE",
  "key41": "34HJuFzNVdEP1c6BKUAsX7gd8WzsiYwVU7zj5Mwh6NX3w5NNL9TCEGGCsYDgkjXKrZaMjdqfjMRGxxmXTzPTFqkp",
  "key42": "F49LU8S8Ske5mF5RUv8PiXuQNGuKwY5Qb8uhptEsccdmD1XWDiRCV26gUEyt6GmobnLvuSVrgmodgynyphWbbS4",
  "key43": "2U9o6Vr5VrsVWWjZhDM2reDtYXtNYeWehYbbyrn8brvfcHUntNyyMTJ9jcAmqSWZ68nBpqHLrvd7uAxEUz2GoJ7V",
  "key44": "4VAubxEVizgAxvikjGZeb3EF91nTYn1y2pEyPVjoVw1QuaNhn8AjmvYtusCtBMsU6mY6V2khccLXt1bACkFtS8Jv",
  "key45": "5sBid5aBBZmcq1juc7ffybdwVJoemPktdb8VMeUK2cAbpXFJ8qdnxSsuZXqErHzKefG5BamnnB6EqGGHMnHHxT9J",
  "key46": "myKFfEmh4emG9eMVn5s8nWrPmuzmLVKyMHSQYowgoueA78jH2KPm5QZxN4Bz7CeMmjnKNK25xnohTUgHekMFTJ2",
  "key47": "3pmMmuJj8socV54qW8wnrbBaZ1hd3QoKPhiPLxADhNaVeFW34j9KEbuJFf3ZiFYQAV6U2sBjwkj53HtNEHLvu4oX",
  "key48": "4ntybV98i9TCLxNd181ixVGW7DQXJ5ZARj7isJbkTBGVok9n4Wy2FPY9ZHUSpkreQyHjx5ceVTd3faJ2Y8K2Qz79"
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
