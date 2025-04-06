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
    "4QeAXCHdqeZAy6CycdLZaDiCfDtL82ohKnh7wEPKz8eTGSR5nkzuS8J8fRAkGVh8g5gq7NvnRN7bSUr3i25w2XGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CpbdRnJFzmDT4CL8TfUSaQ51X8us5emFHFZSfL27S9gmnHezhHRxPq9NLjBpN1CLv7RM25smG75yPos8sixV9z",
  "key1": "y3TuUBUx9axvto3mGykNWa9N35JTzWFMhNEnsHedREhMJcs84Lkh6njmoWe2wKYG4qRs9Zbbx69WXuFA8HL76Xm",
  "key2": "3DMCZHiqnoZb8Y2exiiZpumJeKygdXdV8144GQpexv9dHQst6paqp2NAp6seFENtpW3erXTd49RQsGVJr3af2Gfe",
  "key3": "3s798k7KZ68nsR2gFikA1o8TYZDsHBZQmyMYxFVGNc1HVarCd1xaRxLGSRNCTd6mGrgTwCZVh6QCCpvtwaARjbXj",
  "key4": "2EgxnR88zD9u4L5RA3qtRB9c83gMnHHXJr2pbaUwk9ZQturUDxqKsHV3uBCMWhY84UMJNrULHahhekq6VeM9R3AS",
  "key5": "4XUps75ZfRUj1eGubykS72tfpSTicHDSSNBtbSnXujDnUEKo371CWNseJD3TMCLk2KRABC65YG23fofYhA34cbVy",
  "key6": "5GdEBTNLY69ANHNXZsRHGqX2LVxjrGYr6t8VeXSRGwzyaWdVKbK9nEHrjr6nL9DicP9TJv8vbTbLvXwfKBK2yKWN",
  "key7": "5jr1dTh5uwKppx73cocpmWVahAERkj1vAHMtEPPH5e7YHbNrh2mUbgBYGiQX1ryqMz4A94W9RzvJCY7hhh9UWqdH",
  "key8": "RXEpwBG7WQEUXXZSCkMMnvULWtZbEd1FGKJTs6yXzVd9wpJy3EfwchYeGkhGfqHaNTFTUJVmHGqrtfRzUhnUbdF",
  "key9": "4836UC2bbCf8m2oJEFZShB4E6nXdFBbViKYLnuLQaCoygesuHkLnzCZ6qGGvmQeVotV9vkQF4hZ6dgG1Cdndudeq",
  "key10": "4ZBbtbS8yHi8XJWP83KJcWBGASnjXReJbyfKztuLhetyDBMoYNHpiWCuZbgCPpMAXzXhpH9XA9iLPy14s7pd29bf",
  "key11": "4MFrfF3R1ios91RhmgHtTCDxYZy2ZuKqHexwkKUvec7BKXGKSDSSmDDUpharqBpbvAkM5NPVcLP5tq1mHoGBhu1b",
  "key12": "47uEHBhLvQpWg2R5t12UH5cWGWXpQ1qSUfPDChKCaH3Wqq1gNffrgbPHHRq5pA3iQnBA9Rd7H1BuB7ehMerxyxXE",
  "key13": "46Tvf6E6YmnLUzXrH6RtPAMdSwmkF3qME8tbuRLnuuwBaY57q48pidajX4PicJcyUCE71R6LigERUBHEp5h9DZ5h",
  "key14": "aQ7q7mabK27t8Mtod9emHnpgZzZ83PyRH5KUihgNex81UEk3FLey64kmDPznXVtU91gzuvSrsiavzS8BctECeP5",
  "key15": "5pk1MbsYmcwPwEzJdgZZKcfgSi5mrJdVa9YYTiWAjnF4hX3RQrA5jCzZEF6kyKFajZe34Bk11xNrmzFoEpYXn6Wp",
  "key16": "5Jp1duxRCbXfqimTS3tG8E3BzZRU5SKcfskiJdTGPjvYno1FBkiS3XNcsNQ3rZrCDK6iHpQikKpZJM3rt2eYm85m",
  "key17": "3JYMDnZDde7RrCmJffw5rEquuMsq3oSabaxpT6RppjoPt1Zr7QLb6oPk2ZTySH1RU5RKvMynPi7RUrWxNicZzmZn",
  "key18": "HkUXcZgUUuK7P9hVgd1p9amyTSmovUUU6vaHjBjwgGgRzJPjMMcH1HnitK2rFZ8fSTSX3u8FA9qChLLBjSNv35V",
  "key19": "3pjPFQDNBvxs9Z1hugr3C8nN7oyDamgY4wq8hx6SZNW6Cve5QiM1D7avvxYx3apf5XbVke7Ltwan1JTsTz2cWzHg",
  "key20": "5AKY8fsA6pb42bvKfe2tS8HXUxVmzpWb8bqtk3W49guthMAMwjpMn59ti5doiTsjS62LfQEwtxFyYc3xisBv9pFp",
  "key21": "4MQSYueJTPinBWhHxJp4yNNFNGuWKQKcYF4b6XsjFM9gyMkGoBrhuXtdF5yRRb7Kv5jdRFGBLg8FuGTwmsS6f6Yg",
  "key22": "3UCEupmgt5rZwRBDSaD5csuBfxu7Asj61vCGmuUCxFFFJzv2fhUDRwZtnBkUAgov4U7PLuqW7bMqztJ5c466VXSn",
  "key23": "vCTzqUVeNm21LtTci5S6Gy86XWDGA5PwnTQQRJuFw6CX4KdwxDxsexLHeCJ8Vn3PHRBffUEMxKLoyeEyU5LAtiM",
  "key24": "xv4CNNMvvahHN4uFANWNGZKXvA8StLEk2mMjzkLebEgfd5dzKCnj43ZdCgvz72jGZRUZRtnSFPNVDYLrgRUBsw4",
  "key25": "38bERMhat82Q7oit4xqTytn4TG78YnyrUsWm2WwZiCA1CztVERKZrLPieqnR6QJCcjUQhhxYdwXdsr8TuADfQj9U",
  "key26": "VzfYM8UT929Ka7fjeGnjR9NBYwrtHTGZBDof5HgLP5N1jb5oewbtBKxWjjfHnAQyL6JkDYZev8ZjU7GDu8w45UF",
  "key27": "3iYnpcw7mrhkyLQcY6M1vzYTLX61DmGpnZHXb8vFZZKB9MEAqSasG56QZR4cZMbckdvTzzhXEkpaiRWNwNgXPrho",
  "key28": "5sUCKnYLrFF25n6XjQFt78VKTVggFQZ1rZxgbdnbPeaNuq4mix3k5yjwFzPjmJ7uXCaG2wjDSL8b2ao8tgpnNgWB",
  "key29": "5txsa9EqhcbjZesJvEmVuqnQWdX7CYMmPxoudR7hRRQ9KW4xAXtnAgjde8wkSEZqE18a8vcyqvMMFuKyDqsnAaqb",
  "key30": "4FsPuAvcFA8Fz4hSggom2Kbkx9SojD94wBUYRqmkYpwx6PqebWuf1LrzZoLWxFLgyZnw3mS5pAj5Cgjaen8g8TDm",
  "key31": "4ypi9GdcVoLE97Rn4kSyCAthjRXy7V6ZCnYCNuVMFHuFghPb762mNXeBVA848n5eCqHPjEQBjuDCry1uke3tgdLh",
  "key32": "McMstMHNFSByDrb6AnQik2iGYq2ChDjXjYQkghbGzeaN9jxUT8dBpxir2kfF3aT6Nzxs26D2sg71CSokduQyeL9",
  "key33": "466NvYcvwJipk3Cb1oh4LaLDqDbh9Dx9SsEWZwpqMMvZZAFE6uvZ41mTHkUHGoh7Wghyxq1L4JVoyHN7KzwQfUUK",
  "key34": "3rTLkRzioFp5vEUsHBpLv8LQcB1inkrmPWjh6ZSxMvbBpTS4NgvLJMadqEKkyPX993K5fHwvo5tMgFupxN2mjqrj",
  "key35": "4tod9JuUD7tQ7WMSWqcRqxSST8pqU7ULzf7QhAZgrKiSUL8uU1LJiULJ87WA6o2hu9wVM5LBmRs651QP6ETbcFtc",
  "key36": "qxS8rwDLPpa12JahycJMjqThivvQJuns3fPTrxkAnrWSMn7szWQNMJG56yEQV1qhWK37xuZihWYUecW9wpfn1YN",
  "key37": "3UDr2nLGCkW8yVZ4sQbZHnWVvPrU6D3QmWFrwjLaqD3gXXGzCjBvUwRwTFK63as8YTrcE5m58BTfckGu2YXP674L",
  "key38": "44tiHxSQKcbCFVJ3opNEmeLxiVSrSEuvCph15pALtAkcmyFgdVfoNk6PXM3icJE6LJnjqw9ywoSiPcWCoJFtF6RU",
  "key39": "4v3kCQ8EGrF8yDFCcYjBBNGdG46XB13VhftDxoHw8XkhCVSNZ1QZ3ynoamJphT93QS4MKLaHCSoeAPpi9D6st7Yk",
  "key40": "8ghjSAgx2GvmBNVq1Fv384stDeALtWAWm2ThdkPYWFUkP23eJsszkXjW92EjVHCrHx5xmk4W21aWKcaHeFwZoLb",
  "key41": "28Kd8d44po6b2PyvaYd5G6y3VjkLCQ1jym9vbx6Me8nDvMXuXTciGiPMcYuQmCKdHxvWp514YUWahtTDsSKHPjnK",
  "key42": "254KVpN2EzVcEQhxxk8vhpJwu77ovapZEF4Q8XKBXf36csoVQUnUdjEBgaqvjrLhrAAsWgZeZUoFcDjvVTF96WEr",
  "key43": "3xSgfXKZHjKNRyZvnTV4HkoozsjNLfUxQrxZoSF8VdqHELoPfycGbLo6LKbiDDGsiWsyEgNALKFdgspQH7YozvnJ",
  "key44": "3jCXPoafanLMmQeh6phvxZVeCmTAT54DrcYvYWNn1hYPzUmUSSKaWfYRWVHUqpdyEpxn9auq5ZtK8FH45kreh9gv",
  "key45": "PKJJ2RvNLunE1Vix1FyC4e71mAsgcJV1izZQXzgEKjcGVcavdtfE23CG2ftyPMr18TTQ4hSoDc3YFbtEHegQosA"
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
