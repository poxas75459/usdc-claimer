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
    "5yso3THEMNbhiviXWJhWzMa7T6eeWjvawPe74JspXKRGgZrkXp2WXZevumS5VKKCVer8omNzAFmVs3bPookrCZxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZMEgjGJaTFicPvZqQZmXKY8FcznodmWgcAyt6yZ4LGKt9BALgAoc2JN9fyjEWDDnHDqmXbNH2LMDe9ADJMvA9Z",
  "key1": "3hGU4YBF5rp78Qzi922jFbcvDYKCKVKh4AEkPwiXLdF8b5pTfeQrneF41J4Y9GEHFJkr3VcTF5T3MoEq416wZsej",
  "key2": "QYnbCMGSQQ6RuY1bVU4od5GKzn19fm3tkrVAzZ46jGn4gCG1MTERpxpkLRc5T1v6tTkD3fPooWvmSasKJ7uMjJX",
  "key3": "5izZqEGjci6qbdm6QHSyTgsV3n9rG9pSHiE8FsEyyxZzEkQyEkM8KFAVMyXQjbPTspaRLzwESaeE2pc9s3vrNezH",
  "key4": "2xuPayNy4aTsxNANGUZ3E9XBksHTEq3XPyEZFj1VaSSGDmypbUXnnqFYYXffLbUDiZxbPBSG6hUQV2wMSwLRLFW8",
  "key5": "3xQKcGqFvVxJW9mAp6hfYLnKKaPBSejJR3RBgdvyAasFjhadbPqG6uHkY31496KmUXJhPSeZQ7JETYNTwDFyZVh2",
  "key6": "2st6yn6tz3m8M6s5VVKX1SpETY142PuuibamzLdYKMinkAUZzUYDGQ86p7eLoXEPiUppg2kvxGoEAnm65hQnNjKK",
  "key7": "4yMVfJDKDGEhcTe6vuQkJug1rvbmKMhPzXWHFUqg6qTuZuZ1VBnxpuLzS9RdVGG9qrzkJb4y2A9qGxwUpJB9p77d",
  "key8": "21RYB2tUBvrbrRHN5Ryo76kjJDX15aSyBax2DC9J8VA9sfaq5YZ6muSsrvKBAASAnjxTHpLpQSKQkbPHm7Pbt3UD",
  "key9": "4EJzkxLQWqNjZFvX2TvP2BQFrjF2e1sAe8KrmoFmSyWsCe2K9Uh4ZWdyGiBov6rd3pzNt5iUZLoWEwdWkWup7uT2",
  "key10": "2PGN8PFvGBrBf67uucEnPc71KVGSK2BeWste1PvzfYzuLczomCfn9bLuEBmbETpHEiiAZ3XdDHCSBmAnajtSbfeU",
  "key11": "5P92J58DuZHWWjesa8FcGoQbWAFPmX1frEfsocREPE4ao1NptUw411KKsH7KwHrQeyhZPzh3M9aba9AHvVjHAumc",
  "key12": "3Dy5BbeGUzuW3n1hvQJopSPo256zoG1991jNDVFkNqg4Gca5oPkAXRQ9ZQ1cuDgHSaPe6LtUgzWodBirwZfUbaA5",
  "key13": "5GH7CWwVg4pyjR3znnwiWwQb8CEbQ5jkUNKbom3seqwtcnHLFuiMjmUU7jpTitWk6oMMrRGCiEfR87WKisR1KzBY",
  "key14": "QSqvy4LDjVsFgvC94WvPAfFLxsVDfhUyDz8ELLoEpNLVTv4B6vfcCSjz3d8w2xZeECbJ2rRXw7MtiAEu9Z87cQm",
  "key15": "4LyVVxVbGjXgx3V27y3z4HboqaQZTMq5o7kvi4S6LfdsHAdgiVqv6Cro4jUaxTv1jS6HkW19EkMvAFRmxss3xe4Q",
  "key16": "mzshHHKwmbpScdGVW3HB14398JUgQw2GMjkbUELkiUiTUmjJaABknvw2BBQLCTSAKvJnqR6AcP93rfWDBMe4hMg",
  "key17": "BjhUskYJHobNYTBavp8jjpo4Y5Pc1m3LMm6aeYyv4Q5eiTafi4cPrBVi894duBBeRRuqBAuGQn3s5oF8Ehwo5rZ",
  "key18": "5RPaavKUZcMMXVRnY5a7qRJsL5oFEqgsSSaZdTfPGxiQjvdeaHUaCRcxfenK2zq3wCRGDqFFpMidFAPCvXwQ4dhS",
  "key19": "2aH8fG5kRgm5GrYb7PgGBtp1zDvLSvCP5axeB1Shd3SE9NgnwXUMP2dfFusuiG6SywJcBgtSyEvfzbbLHqtATbVd",
  "key20": "56b5RCAMkAPkqWAN3U7sGzD7ATXY44o1XT5AeraSmTR4rJp46GB2LdWT3gE1KNS9M5W2wkH4Z3msRXUWRGoU59gA",
  "key21": "34d8nz14BE6Q94FoDdkStamqRB47j3NL5uZDu1ah5WhvdtJQPStxqbKEbzYQojEoarA8Lxg1mpymguwUa9nebqrC",
  "key22": "2DGzpTv4CbhwTPT8466zKFteGt2CMYz2xTRRAXpoLg5fMKwmw8VKtg93yNLzED6T1NQpN1MnStymAStdonGgEMUq",
  "key23": "oipVKV6kgUp7neDJ7j9T1Pqr4Dke6W8YWpM9iKLud3Mzb6mFwfUuVnCyRRRcfvNoniz3VsNC3gaBTdtfh1j3uoN",
  "key24": "5mYDMrxb9hDS8oJayBS5QZT3YTB22YXgwvApLh7wSR1jKrVDB5GAkAD2tquj52pjnxfJVPvyeqgdiBeVe8h6zLL6",
  "key25": "65EQe6TUExV4E68mt59Wd694xRktGmPTdfXridPzctro2mcvVM6XtucMT73PNsFgwTb6DLR19qUUrCwhiBjMKmA8",
  "key26": "d6Vy2qM8S3Hu5G52fjVQ7ReuwtbPVDFs7yUQucZ8RVNuspQ7yEXU6RBb5GpfJ6m2c8wkotE7treQzZ3pAqfQiVz",
  "key27": "2wC5GUivFpWmj8pFz5zZVsxfsXSEBeR7G8QCG33siWiLamVzTdVqHGRL3jSZMVbE6wFiSAmXe7Xz39oSmgiW6siG",
  "key28": "3SGpZMiA9We1dsK5iaKXprfZkbUNC3stV7o9hhhsc3mQrBWDS8ArxY3uTWtgZz5PueEeJ5ueD3qbUwKmZKRArB3k",
  "key29": "5LjsTs3n8eFngJFm4ui2A2xQ3nY8wsithJfS5Jgb5siBwpgzmvx9c7C2BsHX676GhAshEffgKaQQUdBCGQoySyZ9",
  "key30": "54YnN1YDVH5vbsF4Nsjy43Daz7dXwyg8pvX3QXxHov6PMbk1k9fLhZQaR3Ra3BoHprhYpPRM2tWoueCwpW7S4Wk6",
  "key31": "3rbnVWZiPuqQDGFwf3nVTzNBCokB9uVkyJDgvbitt7zuNujRgJhC3SxvCBuMoAQMmPw7U2SzRraJqYR16wyPn4xm",
  "key32": "2mhS3o8oB68faSJuuvJ3rcSv6CwwiQ1APvJJQyxjhELkjWxiuVDkg4vCNcB74GP1vwDmsLmPg3m477qaBYwBX4xw",
  "key33": "3XF8HSS9kVbcPG9LQ94TmrZPC7q9fwq84wc67gzDds1S72pnVqxHA8LAogzMJBAaiekAah1NAMJKexWY5F3vfuCo"
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
