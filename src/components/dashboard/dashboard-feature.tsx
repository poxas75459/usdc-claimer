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
    "5CxDGJ2etSCVHFXgtCvckJD8EPjTnECH2srD8cW2QkxAaPQUbPofVbyvR12cgK2sj5R2BK6x4QFmGsNG8n78uESc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56S3YxMRM5X9wLNLG4S2TyirpJSs1hjb1Ld9wur1vmT8af36mTLoPGoEe5tzwMcBshDkWxkvDxwhQiEKPDgkdZ6J",
  "key1": "3RErmmUhEEseAdRkaiUNq4J6QHCmej8g432G1eruxe1jZ43iBHWgmhXLXViWSda7p5A4KEg8zP6GN9feJm6GqWzm",
  "key2": "3FEm58s3NtkJP7KtjiivsP6g7QynyRiuEKsrdb8nY8LQzFH146KcgkcmjApyibWA39Mom8HGcnoTbtyhQyAx4Vb",
  "key3": "2qWDmgfGkEQbaR4tDRmBJhmi79ZCVsdDVpz5jQAANbc8BjATYn7FJxyX2KgsX9XVEUo1Pu2M9xpcRRdbjQj3n361",
  "key4": "4VzgMye3cn6FGvNYEqnPyUriJgsA7Mc3ahejkSu4ZSw4JHSxh6Nfxba2dqEbhb4uwZK8qkUEUsbMQT8aXD5Lzmxf",
  "key5": "41YM24YqAzAkCj9mf7XLQ4713g5UnNipLUdbmZESb9Zohad4SKhmwF9haUf97HnUp2NkGDAMDmA1r69Mq875VN3Z",
  "key6": "5VTHziEub8zevTQQ7KzZasAxyandjs9joPqPTrQyHRhheU5Wqwe3cY5HGBBEYb5T7eK48uqcwMsHHKM8bwkTDLo7",
  "key7": "3rk1LVWXJX5b3e6VbSZmPS2RBi5LixXTkGtQjNpZEbwsd4JjVkgVRrQq4nbksfa7D1FU1m51GnZdWwz8isjhsMP6",
  "key8": "5XvtFBFmzRYykzTgzToiewveRHV3yKnyTpbzTuNQ3cQZtp5QcLQMLY9XD5cJq4QubsCvLkX37fK4eFu89jeXKNbX",
  "key9": "Uk7PWi9zfJYGyscCU7hCMJ3z68vJ2FjAYdAE4wjF1o4GVb7vCAdYyNpit38byqVZ9v3f54PjHQjW7syF8HBFBpU",
  "key10": "2UsQ43Tg5yx93izn6XovuFa94nhQ3cexnY93fRHuuzs8cCNGKqxggNo2JrVueq1UBGWs4kd6smwwPA3swbVD69r3",
  "key11": "66BQmMv3TB3LZjYcv2rRkKxWnM8G6Uo5fd5hq8mSFvFdbtq9bh8zGugREcaC6aJbMw6UQNohPTu96ZmVxMBaHAzZ",
  "key12": "642Yorva4u34a9wUEpYyos3ghp6V8Hpp6Qmy4cnZBYiAfVdYeFaDANwQ2vJ3c4Pm8Sr9xtKUPYWzAXU4Adiq7Eci",
  "key13": "3ZBCuR7tBZREx9jJgaj4YFf5tUTfh289JFH2asxzTbBk4tb6jsq1KFHNp6tzRNhFL65p2MFFsgpZxbRRGDiXJ4TN",
  "key14": "3v8qDptDdGrKEE6GQReJiZiziU2rr3nesVQghggdWz8xQpz6ACNFeNDS5YzY9S16KNq4QUUPv5gBX7XAhxpUN2D8",
  "key15": "262KZhT89Zg6NcGQyoCAGMwefxb8PPV7XvWs6mYuWQfsfEoVqaeYS5CVqEyDKjGWJEpB8Xcc4ZvVSQjP4qek1EDV",
  "key16": "4xpyc6sAsUWw6BF7ryMp2tbw1XzBQFXmfBLrxQV6BsCiT4k9LLqNxShAbA3oHYYNdAjDUbMtcSPnsp1aPJVnWUso",
  "key17": "21gbcTEhW9CkCqVCT9KpbcB8DUmqwkuoD28u528PAikRVoWiLa75NyiEZFjFbbu4skuHZyuiS4TpvW3MuQCanByt",
  "key18": "28HZ5NnjKAjoauWZp5aEf6ke8ifdJDg1dRvZV6V2UdD4uh5zMywN7AM2JFdN7JqEP2vz3xxBC3mE2Gh3gxDvmkAw",
  "key19": "wDBBva65Csv2PwQMzx3zcfioy8XKBKkQGw8oggPqNsJ57czCxGcxAFTPXRSaTiFNWud4oEVpZkgVXo49626usf6",
  "key20": "2cZj2BD2cm7qZ7yEAoABbfsVgH96awxS3pcqPzb97PnidR8eVMFJjiWWmRnpHqQzM7K7JC813ZWcj7sKhY7Zy3Zx",
  "key21": "3iJJSiAbMNqQfMv2XwAtQfDUcXJfdHL2Ht75XbhoDz8rwWua25p4XByqTjs59FTxrhLCFR2fteSzgvCKgunFELpU",
  "key22": "3WYY8F9EvwpLSnM2ZM28FiozTf7gaUkwJpcM8pvCUWJEKC4hg11UK413Rh95PN1uVvEvpVLRoB7FhvCeHMrLL4ba",
  "key23": "2vgGtXXKkrcxZ3aiNi4uZuj2uZRLX13c95LTvbv1xdfLiyvXzUPqsQbeiDSGqMSof8z8aDPDYxDx2fyqdYvZBzKQ",
  "key24": "5wyaZU6KMcutTnExbvAZZZJYuogV4WpUA6sSmsQt2hCysnUqBZS2Y67vJ9mgHeRMFqtQUzNzv6huMFZC2HXHnosA",
  "key25": "2tpSdb4pGfhomfjj6ENBQyJBedqPrWLFKvA5DQpaYPUSvJfMKtsGQvXDygTHxB6MMijBHXLjMMPuorrh9weC5Udt",
  "key26": "4gozKqEigpwoyQEHPYXsd1yueBYbz1cwRf8nc5WfzvEbdU6DvBhKkzWoGPSnXhPmAWjtewoJDhCtqyHLh19yhbbK",
  "key27": "5wk5BBUrrZQfkUnawCg5E8ciZhyMYN5ZXn38L8JRf63MD41ARRuYffjnfpxgzQmhqtMaE6KqxzogdFKzXxAcG7Qh",
  "key28": "3y28rwdc1tXVba3WbMKUT25gpKjYR1tcQ4RoFMGXWcX9N6fdYHu8fEGqXuE4uwfk4EQmwapdPtPPwCRVZ2qzZNSm",
  "key29": "26fw6mH15a8ENxNTfJWijCCxwFc91eitCFB3RKejpP5VBoxEXbGkhPfHcRmgLHEQ5PHp6pQGGZrt5YAAUKTD8MC6",
  "key30": "uzce8KKNzpPBX5opKS2n8g46gXBX6GhoM3CvPT6BkqhXzH4jWAVHyt9SveFpcsjHdoGbFyyGL9hgLfCvhdhAjUE",
  "key31": "66yhHU5HveLQM2UHA5Yj3Zo4Ep6GD8D8GciUiVhpv4FDXihMcE4adY3h3GDFGhN4cVoFaZH7JECDHKGz4Vh1sdD6",
  "key32": "2h5oWBEVyjme4koWev52Yt6ZymBW8eFikFwczd88xdzLz5bDZCsX7SpDqN1cSN6fXZjgDb3ybMqqNjk7mYHHtKWb",
  "key33": "5yoT3pkgqVGMQpdMDVomGQZdXfMbzUJKb8RxAJjTBrz6LmZSwhbn2JVdQ1aRUMYUJVkT3qnvZDKyfSFz7QHyPPc7",
  "key34": "Pz7yCL5LqhrZYxpH6ETZLxbbDhLbJo29fQUeY2uJQcMpbxhvbFDLgWFZvJw8mt5L8tvSE1V4iuD2dQeqTGE75c8",
  "key35": "3USitaZK6NwdAAhPvFDG1nXZiHtjk9Fw1mAmazFkb9UkhzU4UPZ34ZJnM5bJB2MihzrrNQ76uZmXvfHCetB18pKg",
  "key36": "4SMcjLQq4yTDRzG4V6BzZY7XhapWSkGfVCGr3um22iMu2kG32oG7Mdn9wBzSH9WXNFycgoiu5kNCfqNwm1xWd7mU",
  "key37": "32bRb8Yxuwe6jeUzpHheNGCMtaSPkZLR5RyxfXe48PzAoGfXedBByqpTwHYAeEdpsGRTVq14Y7XQhvpj8963Mi1V",
  "key38": "5c2Q1vog1uhAEMsYQrLWHNYd1oQGDqFx1R4NXWhSdsFJ6d8M9Dho2XQ8B9X78rR14i95h9fhcaCFipkfFAfRe1E5",
  "key39": "5qVqeytFKRehrfvMhJcfmBYPfmRe1161fmVweGsgLpFdgWELnk7aYWPW5kmLudBVfGwyHooU2179NQmxnaSc5FJa",
  "key40": "3xpKyN1Yo49gSCsrtFFgitWb7bJ6rpWMBAtmK9W8Lf7NiCB6cXWX5WbJsfvNjvgjBgxrhbHzUSiVgZzjQZFtENff",
  "key41": "2FYD5Psmz4RVUpgnZs1e2XjwzEqhsnqEULpEChci43hSD1wptyXtSk5LN2V95PccsRPtoV9eJwaQRUM5yszWF6Fm",
  "key42": "66Tzz9XLqmVBvPKgKXPNLps4wU4mTCJky9JZPD71C5yd9cDpgWAfrpjobcVgoiSNeodCyhJcXh5KLgjY4TYtiYCe",
  "key43": "3JWNbQUr4sVn3vnnyUEkfe2tyATBU2wWCSETqfjhbFbszqM7UFfcyNWZucXxiN8F4DyyfiyZ4tb2f4B7SSkTH3wX",
  "key44": "5JyXpXRoBvobBMbxVwwS1fGJYQ4iEg3gL3uAjmkw7XoZ3rxuNeqpFqASp1MuzNywZNWvNzwSbKkcp29n55Q3sH8a"
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
