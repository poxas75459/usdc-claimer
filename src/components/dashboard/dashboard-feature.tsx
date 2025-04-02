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
    "3AZYoLZp6w3VxkMssJ9CfT5otFdzUkvDCHAFv5pBmhzQyiwRFaCkJuXkBMahEgyWTewkutaWTNfcnZmMmgi45nAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bngim9XHb86HGQbGRDrvGP4EWyEaMQXBDCR5HeSBNm9Z24kJEA6wK7kETv5hatyr652SR5vA65baaBERYpqz3EB",
  "key1": "5B66L2Mb2biSH7DCQLfVo9zVjxAoZgUVM6BHxCum6JZaM1gVhdtcxNJ8wP4Tm6b26rbvqD9UgJCL8WMemXU4gbqN",
  "key2": "CKr5mQRQM3o6SN89p2cH5jZK3SMdAwQHzg8z2dZF95gUc7uZrmSxvakyTu57mtaHxrHTDB7Y4Rgv8owJhpRamMs",
  "key3": "4RWiF3goFL2bdx3inwhPJrkLNog6Co9k5nGphFGGDGE6HTBmrDw3NLqdMqowEeFCAPk7CeSZEppfkMKKbvWvSyju",
  "key4": "5oe23o1AoYoRi3RFHRMPLtce4grHw5CgXBDogjsvPuo6DApqxb3qhEnC9T1wDkBQqzqqQAjEg1iHb1XVPYiNudak",
  "key5": "2Z9yhWoAMSWjFXuCD3rFEzCDQGrZwFCJHpW1ixCFBe3SVTJ1Za9Rzzo55nH8GiHwktXnBpJcvDicXMvfT6Q514tU",
  "key6": "2VtCoQqmLfr9MtJ7Ni8z4Ky6XtHzivAd1LTjTfj43y4AqJaYNf8bmguRgW4AmEurUJb99zLwq5JdE8EDuwBCZq1p",
  "key7": "63taxvuJhQYFaZtqYL552aKd1VWWVU31BqfnzKSu4nsin1VWhNz33j7gP8vurJYf6im1YD2WBCjc5KEBn2zstuqT",
  "key8": "jWob2z4ddBnQYJXsnJfUno4gzpMuxy9oE5TJB3Nh16HHyL7PKxTr3fo6WDvb97nqvcoHNhhVXZWKKTsz3AKFfgJ",
  "key9": "4Pf4a1dPST5goDLuoTgkBSXD81codoadTexjmgFqL4RMPTNki7rnjscN9a8Ly9G7CLrhk6p2CJ7dS5RXoaPPZyhV",
  "key10": "4hjwbMhG1hqGhnp3zxnJ5YLsKbD2ro526aniqHifukFcq9q9a51mAjJR1t8tSXZWjDQPLAeenvBcyyqn6TTz2xat",
  "key11": "5NPmEKTPieAtcDS6oj37yXfXR2Us6CoEbWNVAuD2c3Xh7R6fyy1McD9iQ5AsZBC7x5G7pqR6Sqa8euZrkw1owGA",
  "key12": "2mN9wsfgPHWE5cMgyPJFbEfB6c8G2MBJv7B2AjfV8g89yWCvu2F5Y1K96GmnLurux9teq5w8cUp2uHSsi4zedZL5",
  "key13": "5f4YLXFJLHvRu3HV5tVyryfvM5zTm9Bv2cz6RVoXrefB7E5avssd6G3PSuazWrMg8HKeJUB3gQhyo5KoESCthGEN",
  "key14": "5uq85mM8dWUiM9JeeJ8t5STgEFPQKre7emE8RtYKPfYAdcKFQRVhqD9NnjKLgUAAAMGfkYi5CCNYpy4Wn7pZwcy4",
  "key15": "5WJ5U7Q791Ly2mMRQUEcWNTZSTD7q69owFh4uEugcHQN8YPaVZsoL3UemtbzD4n5AZdVWiTvunsNfffdfBU717iS",
  "key16": "2DvRmszg7NQqw4bmQwx3o9caThuqDashkcqrHkq8SyKFdF3KuF4eymAWPL5keEh7RRpANFVpzKgCZkxGT5znYyL4",
  "key17": "2CwfkATjo4oxdoRGzw2hwtLx1EjYPn8oE57gjr88nudTbH4VwUBhfgSphfqPaVnpUvjx2nkZGdeZC3TZWMnecYnM",
  "key18": "V8sfbCZPyCRkhD6PkHc7uRmfpJZagN5us9YeZG12aHg6P3cHBqShXL75PW5Tvv7yx9o76pubGXrmshAuvsvg76Z",
  "key19": "6JYbAcT9JAPwsr8rs4M3m3qHqQcB8b1Vu1bjQcLnSUZVkBj676NHgKcPtsoeXLDLDTz2rnjjJQr2rZGUZMfNnUz",
  "key20": "5heND6xSLakcyp8wE1xALqHiDbWJLGpx7tq216QMWdeRV3abV9cP1BpKht4vMbJh7F85WyBfm3Fhj5kDnNxo3idz",
  "key21": "4P4JtGtgojtttmrLKjihyNPw7XGrDJ5eZgPwgcP63FVhT474puLzhKcybhfAG7FPkCTg9VAESxhHzeJ9PAFBXp8g",
  "key22": "2fjAYa8SpE8fQgeX7FRkkpSCPbNqssAZvwZL4SGZzzEriCscNyWqw1UN1htzyepejk6tLzTKf6TD3nheLcHErcfK",
  "key23": "31wxtuhvXn4MzX4AkjZ2WPhuiEA1KC5SenQDqwnh45r9g3VCErVhZsrpFomdVdDB7eGxivDFr7Vb2qZdzduAY3pB",
  "key24": "4LA2atqYYZDjmNmD2HCssGU7WtPDAmaD5GAdqLjxNDkjt4AVpGg88dF4DK3VW6rubk8CW1qH2TrUvbUQrx8mdCjV",
  "key25": "naonh5YrsK71SNymEsfbpqgbMZtmdZUe1m5o2oEAwn98Ps3dP3ENxHPzeDry4LQFLH6LDmeZxtcUiR5H4rGMj9c",
  "key26": "4znBB9HxYRrShUdU6JtsXX6vBN8W4uX9hPUeGQGmrYSEaHbGgnvzKN9qx8mUp3akWgU1a7h6BT9mXN7BRThNDEGX",
  "key27": "38DhDmbQdQJVeaGAvWp8tkXXo1vxGkL1sixxxjP8p86dEMrDqnQD4iU1NvKVAJrUvHw7kGfEW43u8x4Bv8DMqEuN",
  "key28": "3VYWhsR94dDdnWc19H34tSCkXgDw1mCKTG87e3FtMVNrjddp3UjYgfEYa76VeGVANCLD6ggk5xqsEvKUAhhgmsA4",
  "key29": "3TXgSoMh8fsXgqrSK6dvfaZToNeXXutZR3wtSDuGfPaWX8XZqZvZNJ2fpLRA8dcRUsdyX49TxP4hsUt4xDYzLdZU",
  "key30": "54uF2Hxo3b4AWVWabLaHPqrHpgMnKLYdkp8aDCokTtQ7GmPThqRdi9WT9AtwGNbumxrZBSY6eNRq8Sz2r8Kdr5DX",
  "key31": "27QT5MUTnwwBk2MAgRgTTDvERV39dubC8o9c3JgNFra65SSzgSpSSMzuWJCroijDmzrKq2txiZMEtG8xutApzVgt",
  "key32": "2sGggGUas5t8cKgat1mYeB94XwarogpEKfQpqA7Ro6uBE3VX81yDHM7YV5hEzhuBYGaa6KEv9M4k3NeJBCBjGoBn",
  "key33": "67VD8mYemMZSJkzdujtijNYkXQCmFAyDrUrZFxeGQ1n8YcqNamuN2wwtzgkhwKmXhi8zPysytsppwsuiTPKG4zQV",
  "key34": "25DR1ZavELikJNFCsYATH4oqG3iFiNohgcmQoTNpxRczAsb7jZcfMUaakr5pmQeXLR1SHgECbUVc5v4wxmnMNAC1",
  "key35": "4Hnu9CncWohNnGMGqp2LWmhPtrFpkV9pQvoVHMykJivz2ikfPLiTkFq2D7Uzi85W8bhPaKyrPDVU2VGbWwLJ5jrP",
  "key36": "FK9b6yRustCURTqQMN9EMvuoEpzaxTEGUiEthL1SThFVYvyFC1fgF8D1C6udbcmrKc5o6rKLCNghQiqordVRmVv",
  "key37": "5EJXvGWLHFUrYE4os72NTyJ9P1CAigoipWv8eP11kS83PrqrXGdTXn2KUGHa1LVGrgKxuYXX5VF43HpkjLreCyUn",
  "key38": "3sSsQmPnwMdJi6va7skLFGhSgS7tSAF189Mqfa2qNgjya1QxvrMGfFAV2EP1kAJVnosbty79Cca4MT24V5p3mr4b",
  "key39": "2gdqM1XEBa4xHraWwTGfuUK5Wi5vURc2sXiXskZBpF8sWuUVPCDRwS7psxx2bdfCRcR2ya4sxAmnsV7iwD5XS8zn"
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
