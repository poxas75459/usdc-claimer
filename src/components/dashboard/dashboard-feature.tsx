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
    "3LnpaAqyDhDdytb6VKw8AWsdgMsfnSbqqXrxEjFgE4eTLL87z8AGcHPp3FiDk7QEULHGFcbkG68hNTM1Yq6CmdGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3jmF6Fj8CZnPJKG68kraCehJ5ZFwJK4aLjF6iUexNzniQWHSWQGQPMKeq5a67fDUbd9Z9iod3BNBJJzk1QK1Gi",
  "key1": "zQwjxkuRwa7Twis1Lj4CtJiZygb74eyG7sZmxR8BPfb38WXkjkv2Rquk7QY5EBpxQRyvky7XnkWJRs6ajXGiEZh",
  "key2": "p63difU42ksabqZVCnDksqrkTQFUhfuXL1nK1M7HJMciBDYTz6epWHapguJsVtsxPkfqMZygSMmD4P531iuYZHo",
  "key3": "5yXggNugpC4Hb2y9D29h8mVA5eMChpGVNQfHif52JHFLboKMNib4y38PawvR54gsPWXy3rk9SCuZko2wvQXuuWkc",
  "key4": "3HoNfwyF6GG8Ncb8ECznbW44Wuixcfqb92FjncWaq2b2ofjsh7o3ZffBNVCXQfSae214KFZkdt8EWKFJBnTfbYhu",
  "key5": "DEe6FarfXuD2G6PFMBWoCNWqmeXb4Uauto45zEyTeUkW9U2pW2223fQrjfuq3Zxxx1WTjoQiDDaFRwgVNYJhsEv",
  "key6": "2ReyoQHRrjxHoUxkx2sTi9nJ8E9f2NMdpBZ6GmWzYzkp3YKFCizDWdG1EeyNTewtKxTc7HmeisQkQGst79tYMPS1",
  "key7": "4tWDnPqTnvpeCkGv6iKraDFnK1zJKQ6MpU4PaGDgSRKLy6Y58SmcELYwCFwhg5x32YZJfv1M4wRg5W7qFfRGqvZd",
  "key8": "45zKNZhTztuprrZNje41FZMd5fkSY7YJUmHJ2rGJ5AsFzJgHAgTNBoUgQCP2jXRd3h2uvo3S2tEgk7XfKMVegusA",
  "key9": "3BRKsRniWtYYPPdXtYhBDWXcUXqVxZwtfyHAMRsn46Snsfeky5H52SJTqngRwQ7ftep3yqKU7zXykVQxNAbF13x7",
  "key10": "4JaDBYn7U32ea7ET6LCdG792gQDqWyksoGYa8GM956FshWhBBMWdTRy9h9Z3pSxTM4J7FbEGWA1G5fHYsMsiFZ7E",
  "key11": "5Nk3dW3H5BNMvktNH3pUiUGdemKmFHSMnjmwDHSDDh45nd5vPLNWK7SmixUDV1xWUT9VNixZSUKbPPCgA9fZ1xzY",
  "key12": "4vnoNE4jqkP8STMdFRnqtARJ35wTb6smpMgvSpAZehirXmtKT7t8zJZEzjAt8RrFsq9PZ1XWcc64XtbESfYiMzw2",
  "key13": "ao1gu3Pr9GHZArG3EQNrmcNnfLsR83MeED5ivvZDqJKyLZ7EqUhggF3z3YWRE9ymn3Na2BP5vwjYVv9hFjxVsWH",
  "key14": "4g9nRPhEVx3mYBmicdrDwHqh5j7JgiCUoZEM2JXmXKuT3XaAVRh3hVLaLMvPgpdPRSVKpmRkNTZNnDFXCikCaV2W",
  "key15": "5KdNmcnjNtSUy1YaJVBqmtcfqqrkkdPtJLrMtLzFb3dMsdgWZrw92DLqf5w3CuxTte4ehhQjjsMhuMW1bgueA73y",
  "key16": "5vPHgX7hPw6TKWvLX1cFB43NL9kqnw34GELB8agaZgNii1A366gxAZZjQNLSLTPAXZnnZ3huu37fC8nXPRd2nfKB",
  "key17": "4ARugBHdZvdFzSxXQ4SoZkiQt3BouXDKSxQqmesKe7sU6QTiPjFMCFBeFZdCwnRUutcmTsGmKDB32F88dtVy6XM7",
  "key18": "2A8EmWetZHc5Wz6xrQfHsF6A2nJngcxJxfwTzn3F8ECZpNffZBQkNssmJhEJNkxUyVaEYo9McMkW8mzRWKgnFucS",
  "key19": "2MKo27zBCQ9VD1zzwX54hxk29GkjgoBTiVweQKJsBrQ8k5eArboViaSt9FrshVot8mR4NSTQVGGqPw6fBHVLig1x",
  "key20": "5kDjrAzswqhL887jpH5BtJi6FRCVhpJGC29P1TJ5y8UkqnHwVj9JmqQCrSwg7WqY71rL23HsscWLNPUye8pksU6L",
  "key21": "3szrATxCm6NGa8DR1wBigjAQrHLpPtStjK9648PYuq3ddtCH5UUqDA8QiRZ6pfQt5eizqLseFfPVfkRV5C8NDNn7",
  "key22": "46sUCvsXAHM6YvbP8fbaTwdEtVX1VrMLCjMgL2um1G8wLYbAxq86L9MMpkFdqAhiNPckwjkT8w3xgCZHfXTQAkZ8",
  "key23": "3FLeHBJLYTzFMAhB3rVURnSGTTshvahrqZzVd4PFcRzG31RTN2JgTGAP6SSKqx13N4158UznaVKEENSPrVeKvtJ4",
  "key24": "2m7bnJe8hZmjbxcKe2fGHPxqqw5MkUYRVu2p4fBwHTuWuJiG8qFqh6QkEzEqTKtagv6W3hEkJ43cGcu5fPQYeUzw",
  "key25": "4GDpVHoM3WCsAY2FriCjwUoNiB8tssD5FqYuvPRuLQcbEtAqZcVhxMPzAcdRpi1ayvCF3Ecnwx1SkygUxWCzcpkw",
  "key26": "uQM3SZF8Z3QutZy3r8rWn1TokcXKBvAUbUtJZHUymJrCvw9ZW8vg8aBjhfVhxhoVrwaDrvTA3SQ2pxrT94zCYhW",
  "key27": "2XTM8nBYWDewXpuxiDa7sVuXpU9rNLrAzEdpSQ2Mo5ywGB7EELVyZce4gurY7WP1WNT5oyJVykE4hxTvLPgKtRFE",
  "key28": "9wSMKmQQZbbVxxhUDSQkpGcLcDAF2PwAskkxcFiyhiaVMFYkenvJ7wJFYTEojgWBrpm6DZsH3kXi6LEPXJTUCs2",
  "key29": "5J5ZeE9L4AvnHnPWw5wKQq9QNsMZqswQJmfAza8Qyc6CnEdT43EXGmPmGwjihk1fuqyxfZAP5G51wLSdbMbKNw1V",
  "key30": "5U97s8CqzFGsnZGYZ5wWmUJctG9VWfh74afasa1VxiuzZD7vTawhevWamBB2DwumPzTWYGSNLq8tp2JbCoNwms99",
  "key31": "2uxTKHkAzevd2o1VE5CWCRaZwuhMwTFgbiT3DZx3mFo81YwAkGxAfBverFkpmtvve5rtP7TaNSr8fmyGQKvd8Xpr",
  "key32": "kbqxtJbnELMShSbh65nCHR5GcsC2EtKFA2JrdPYdMfWZG55woX3vxbWY38hgCoeAfoSftZx1yFXeA1i3fr8VEhG",
  "key33": "3MTMhPjhnqxJ5KKq6LbZpWUo2387KFeJSbo7M6h1EsnsQ5pAG3YTs3NMVumMwC5T3xBveRyHGqPH6N1TFm9Fs2o3",
  "key34": "3qvEGp5q99Nhv5FS1ezvAZXbEHze1TYHp7edaNdLJWRtZ5GNG3bQpUP8XxqUv2AJkALehdE9JTkug79dQbvuZgfb",
  "key35": "4CA5y7LComtLbP6cVbbDv8Pe9JChhw73YqoTHDYeymynnNuKiT9PrLVn4sN5F1XULZ66avbkW8L78XtQoBWXcGtN",
  "key36": "4jhdkSj7hvTsYQdsE8fTfKgf1mVZ417KmC8a4gED1eureKPhNUR2f7jjoTSo3vZq18nFy6nE87DzMWhWjECJeQU5",
  "key37": "gXeiMLJ8H45zSKX95CzPdJgcv6BJRkok8s4KWdSix9f5H7rwiRuQRYhajgSDAhEiy4FC34o3LDE565dhoChSYUv",
  "key38": "3MdZjiZ2FAfsyBYyAD6PMx1CidHiyx4eFL5FuzeyizhhR8dTgCwLCsG55rKRSVSttBWQATTw2hCoxJqcxrY3aRn8",
  "key39": "5QANBpGQpcvLmYt4yuKcPvJPoPYF2yf5Ri2Lt4uXtkhDKyRAkqdey6Z8z6SwNp7VC4rwEe7DDg255ipwrFXk5YUM",
  "key40": "4A6RBVFDg7gMBamk7UzyEDAknx98cvaxyzpwfqaFSXnA94W9jBTfTNxydsJeD34s3sYReXsipU4QpoCWsFUEAUZR",
  "key41": "2dkzxgEsgZYztBRFv7R3vErrz2x2k1649Sg3ayeR6iMtLfUeM75SF1s41EpqCMYNCyQAc82cDCmhACH9GTLpMC6U",
  "key42": "nq8RSfDRAiK9oBta1r6vjRJw1EnMQM953F8fY12CVCWC3NNKv6PPDeXQRaWQ2tfCjjAFw7e1wpnQCgVwvKNnBbW",
  "key43": "4oir7iWTvKwjfRvdxdTSUvig2NSWTb2y5mbeaMw7vMd1e5uCiZQ1qVmm9e7D5tDSGy4KHWFNpsar7GXjYWCg5pz3",
  "key44": "66NKgMtTL457yArBHy7GYKx8uUz7Tbfbv2Z7mzWyPpNXBXvbM4CaT5Mkp4HShWRVdQjjrBzjs5iGgpeMQU34vQCj",
  "key45": "4xwC8R8mHLFxkCK3kK8edCTEZEe9r8xk7UKC3DEkwCq84jRzysxvgnaRre3UeHW85rhBq5WMcCdR56Eq6ZSfTQyH",
  "key46": "5FETbDVcNLTzH5DGapENqVdns2W96R14vN2AnvN9mRaC8hrVVq89KJhhCJcZmH2aczd7QDzLRNtKng9F6Cp5YTXx"
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
