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
    "61SMDtaEdC68B843xV8UpWdKrSvgQMF4XtnZftiyN7LAvvK3GiippHGdxmpXn4zveL7indFZz7ebUFEJ8G6oNp1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THDDwh27FFJJ3RuHahwzRSjP1iZRrae4DTuMUcK5nLhxp7a9ytyLqsVNSjYgC76XxdjVhHdp7HxHcZ9xqDjSDHK",
  "key1": "5Mj53Hca7ecQg4mAt6mPpxyNGLHNhsgzp7Yb2n825Mm4ioiKqfHrHjcQMrJnL7EgTfabXXeZ4ChLtoBmNuuYEsZY",
  "key2": "3sVMv3Xn8QLFeU4VWGA2YSop7J4ryWVGjjxZ3o2ZZcjnTCEbwV5Mww6veApPZsXvdah7y5jyMS1kjtrWuZAvaUNG",
  "key3": "4WqeBFsEdVoZ4LffUT5iMheMyXxXxJkny99jnjMpqoayWXwbchRZbZXZR4LtRoStL9tiE5bnzSnsX3ZBgsw61i1b",
  "key4": "mZo7VtPaB2LBJp2thfSbFAKEWr9ExwX5w17XrbU84A6VKT187YcuDRdnBuxvCkuSEnLeBGwZtrsDRkgGiko5bde",
  "key5": "2Q11cXpeLaWVJhn3BTR6DN4CjUTovsbGQZmcUk5MkcvinSD1rvY9nAsFodiQTFQuSoTAodBT7T4AGpab57H7G6oQ",
  "key6": "2gy9SgUqFLKtHrYnGVeLy8RDhdCBsGTet7JXu24vMMrXPp3fFbbL2ySyhtKD9KfHw9AP67ipjZ4Y6XqMxNtFSW2p",
  "key7": "2VMPYTPWyrxknc1UrEcJSzj5Dr5nkrzcqyXLAd1iLg2Qd9HXj1ZW1ZizTviJMGoAPkofcq4uisa2v95bEQQFgujL",
  "key8": "2eaS7q9s5Zp1QWHovC62ZpY9Cr8mMh2CfENexFVyNoNGjLbSGNkwnBNaq2Tr4nQPRmpAHrtW2sDb2ECYodnGWYAk",
  "key9": "9XH5zjSfAcN8C1RcWCcohhhvuFUFSEYahbLHPp2BBqeSd63MDQ3h2WZsnRLVRQEY7p1KvJyN2uHwpx2h1BpJ7Z2",
  "key10": "4isvn81VB6G9oQPND4MErbMqAdUGY4ZYczZL9fXgQm7GH724PcTVTEX9aHV2Af5x5aZK5LquMwSFyNByrH6d2uJ3",
  "key11": "3TinMy4ixifDT9wD29SgGaUo16KLZjKrgfapXNmzeLqKfHx9JURR3aoYwoZpLrwfjmVVyJm5yiC6Zs3Hx5osbij3",
  "key12": "3PvXbu96ppamGdfh9Zedc7ZWpSmyZ8kGsPUJCQhcbmfxaBmcKMfAxPmC1dWHknNh6DG6XtdbzVq3YE5jriFhZw4R",
  "key13": "2o8fC2CenmJP1CEJ6XdpcE8YbnZ57sS91uZpvs2YNM37a9cYgmeH6QYxUe7JUwJMTFCFjcVJxqQ5KBb2d6gytcfV",
  "key14": "56aGWTM1szC4sh4ZTGJonFki4ptY99oMDKcXEh7RNTkSSQELvb3YAydqM73ZowSakHMJqXGhfCCTzWLs5FNwFP2Y",
  "key15": "4nfMXtY8NE2wudXWaeXQjTR5d2ctm5mvP32Pr2uEA9Pwg4zFFk23rcYAKf7ekpD4PYQZdtDfHLevgrArgX1uqs6E",
  "key16": "5HkLNo7U7PgcsoPcXmYNwPs3gfdwfZyUzJBk7XoZSb5UsrZ93MWzaMG8CLAwdxULVZVfDzsLHZWpTW6Cr5pnkjpf",
  "key17": "4khtvr3K9eqsAzMSbYkvjwXtt31FZJB3BHKMTYtg6Fd9nZKGsh63UzB2mxfxPEZ1tnWPJEkb8419nocY2kQyUdXX",
  "key18": "3ij3cCjRsG4btet3GAxynyhAp4paVuV4GV2uK3oaJSW9sh3fzFioNcQvFoeuaxrveyxb6fssP9hZodMbGJSm2PfB",
  "key19": "4fp282StHi617NRyiUkzMjLFedj9UFgH5KuUptVtRgQLdx5mc3CZmVuNDxGR5fuCsWcz3fqHJAH6skErizKDxGj3",
  "key20": "2ceHDctGakyBhzMKpJGqFzee7j54gumX213Hsxm6W6rifou1DWjZk9ai9mxruUFkUvY9hiL3taFv7di4pdnhF8gb",
  "key21": "H1tAuW3RvxR48tc3rWwSwjc9ZiuZXaCGCNwstKUm5iFQj7jGZcsXMxPz3gKzv8fKV6JsZwYSBXFNvyxViJPcnPE",
  "key22": "4ha3gorR3fmyvEyeQL2A32mau3EysqCGBTVfK3NoGiqUZbmDh6tHum1njAQ5EukMmK23hVXBBTGmU6gXH26bZTwa",
  "key23": "5FLa1iYkp8AJh7imXWGhQUmb97mD6H5iuabFEbuvGn4e1HoEioxaPYZiN1Bv98d3nMiBvjFmbbsicWFWKe86GtQR",
  "key24": "5AKcLEmZFh1mrzsfHxM1fCZRvf5crYNNPgWqZk5iWqDVv2q1787wqtVpCxcccnzA1kapaVvmA54vusk6vprZVYJu",
  "key25": "4yeYiPmYtV6T4wL5vEpLYbYdPMt6or7Vp6wQkTGFK6DN23MWGSwkAfuwx9iLBez24BtMLb1762sK72JbiM6xHv8E",
  "key26": "2xWmZ9cfUT7pzTFnia7XcMhrez9ReFHfJ8HSxGhfZxKgBmkPLy7c9DfWL8UCxwwp43osj2sfa5sLraFZdUzQ3Rqn",
  "key27": "44dEJWbDq9nGJabtHfWyB8e9h34WJuujmoL4N3Wh9mWMjnfyEGYJV4d8gdZpQ3bF5gyJWgkMWB1SwcrVZqn1h6XQ",
  "key28": "4ELBydnn6RV79tK3J4PcwMsRLKBi1iEH73nu44gziSr37oZ7nFs7n2Tr8qsbQ3G2hfoPsiqD8eZf6CeCfH18exjW",
  "key29": "2uYRSc7xZfsjEX1FXSW1CpxCq1qqhhJG52CBhh5qvJAfdpsheXsCR3mhZup6qyuVshucTT37a8NQ6Fy3dHr3wzkt",
  "key30": "Vy5Ea7pmfxpvWCYogvCuX4VNbTHnKgWMkimYq6pz9jHpfF4XsyrCwT8zh7KEvdpwnjQ46Y9sGwpfSMWkUoJ7AQz",
  "key31": "2LB7b5HZR8NPj6VyRLcxufq7h1yYQw5coCKehTmVu6FZ32Ut8boQT16APbwXcU27hPqQBqjpNHuJbU99YcYtazzR",
  "key32": "33jTmMMEptPsgc7UA6xsMBLEaVy852eatgkNH8NMJ3FoyUCnwyo6kk8GT9TEh4J8MnC9r9udkqgmVZ1oQDSMEBN",
  "key33": "2Pw5BPd4iT6L5Yvba9MTdrUqJSfc1cWhJ4GknCjwBUnSaPr7dFEHA2CZnF3RbQRUamAs7eemfg1t9JWttLoPSe44",
  "key34": "4dHCdLARyydLmAVZX8gYcuq798Nx9dbLLZNbeWfHH8VvG6MtFkycumoSszpWvzzu8DZvWGWkbNQ6YHootT8fJupQ",
  "key35": "5Sm5Ksxa3qDgB1mcJDj82YR6Hrk1zWGMduCZRhXKRWkmQUznvj5iczrgh6uvJTk1zdWCLBUzmJyqirsoPRFoWBsg",
  "key36": "2AvhVZT2zm3fTeizYKiyvWBfoHUw9DxyCdxTb8Cd8HXafh3HQcddJqUDfJZRbcukKicqxhQdsdLvTpAdTVyQtyJt",
  "key37": "Jb4Uw4MLfpAjKytQQyC72dtTqrUydci2Z2qVfyAp7Diegoq9LT1GzyAR8FePx4nDcC8PxAp9Mmdz341H17LZfbr",
  "key38": "2pTnRZnZM4BtngMQMzy2dmJK7qX7rtuVzPJ5E6DJi6NxmjSsmAnN182AXLubgnNhSC3sa5zcCFjKPixJmGnJ93Cu",
  "key39": "pbGaazJmGmRfPuPNTSBJhUFpw79RHNRDZ6mHF4mnq8GGKfDoxXcqwJFHNqkw1yjDJUCpvfcjQKAfAS1yWKfrErj",
  "key40": "2zHHREc7B1mwypyiXGnQYc5SjE5CuuK6rJtojQcfS2keUnfXdLLq6MHhmCz12UiiXzD9ykYBCvFxxguG4uuqFwTn",
  "key41": "5hGHfrkZY5Kdz1n1NHWtJfxh5jzRFZSsmN2ch95q6wPTwcgmmVbq5JHgZuYXqrwoyqEXsDBmhWXekHbaVvK6vfPs",
  "key42": "QfNqswP4MzYwCMEEf8WpZ91ukgSzUz3JFbRysuBxNcPnTpRs55xR396CpaUN2SRMx9AWdL9LrF8BzZQ5qzGwcym",
  "key43": "3tVf18EW9zLBE9FKutQQ8rzPwBAZfXq6sdHowdZvGpR8WHdK7Nc7e4uDJiM3frcYHs3fPQAws2Vo5MUcV68Vu5WP",
  "key44": "BsKiTRDArPTEtc3vQpPFwPBxvpdA3NSev1U7vxnHbhdcnRTmPk23dRLwXczy1dfmTYZCuwGmfmY26aVfPEDTbBL",
  "key45": "2cxf9FwA2e4YGCPM9j4q1y9U1VGdwztuWwQ72G2VwZQv8wPdSVnDPFLvgWf7vhdCqwSSwiSsM6D9aZJf94MthYc5",
  "key46": "4ABuG4TT32WQhCqQ91DHs5AignRP11Giu1FFduz3KScCNtWtFtoJBGJ2wrwwrjrxNwr88wVRg7ZXT8MpJU9quenN",
  "key47": "2poS3q1SPrL7EqYb49JyboRm7a7uqRCzjK7iarpyUyYGqc6bZ7JJu1Xb6bc8b6ZTdoVMPburdjoS4ZQBZ6pX2fX1"
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
