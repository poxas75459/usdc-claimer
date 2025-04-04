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
    "Vb6vE5Bi2L4FsHxzykwSw2b4WSPmkL3YRiwZpGiGMrBSfoqJgYBXqtVgmTQmPTmeAYutbL9Gk1nPHfy1jniDuuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4QSpnEbe2GL2PbPrvTE1311CVCZSGRsoAWbu6gf3Ti2qMyeRvTv6a5CDih4Yqca4z8gN8Z69r9KjhTtyK6UVsf",
  "key1": "2k6KttbdhomvGpojVx5W7PV6DYZkqNnJpGEH2ALFukB78BUSgjCDZ4upbJ8EW5Kj6qKuwNCCqgXpzycq43PKD8Ar",
  "key2": "5xVySbSrL5SL458WYAL3hSHAFQkKT9wyXL9ruJm9j7tB7hwbboNUiH2eK6sjsozJZFUudF4CNwHHFjKSr1qj8CSB",
  "key3": "4fBxego5CBp2arRiNWid4b7mKBRbJhsxCXmHZ66W2EJGgECdT3DPuHHuFpUFiSDT1GpUt2Vhc5PkYbTWu9MqQKkD",
  "key4": "65iCMQn1gwEgBnagPMW7caYEqaxjMChAVrKcAtp5GDyecfjHHNEBhVC22BJ5tYLdDfk5nHCTrbzy3zWysvXkaiyd",
  "key5": "2yx5hvHytr8t9LWgwae7stSF2GpcdRaC6cJsaC8Sw6EKtjdtvKV2JrjZ7h1uJbGDW4SvgxNHqzearY3E8cT78KsH",
  "key6": "4TmbiQe975NKGH6buEeAJPZ6wy713A4HuaV2h2aUaauERyBCGPFAuvXYd4uJDTUWoG6FNRghfakMRatnBbbiCKyV",
  "key7": "3Gc4ydBBm6hXnHRuBuv15CKqktCifHLJNhGnujNmVA75mGfDaDAtauH8WCiL8rBLG7Rvyq4ncbrijWwZ4hiw2cDY",
  "key8": "28xpS773R48rK9eSwbNmofEMhNfvhSuCQUMnHNoxdTJbVFRrZuhmyiu6dGVuc7V9Nf78tDpwWbrvxL5CjVacZLPp",
  "key9": "5ro59opB8EjPuXZvT1bMj2q2HizZj1h9w3hM6fUE3yGrKhK3ajWVmwikkvfVobZLLPwRXbcFehyg1iEgHBdnn5ss",
  "key10": "kFGkD2t71ihYGwZr3aw48BtMCKAdjGFeUcu8ZwpWEsQwzbWjEcvxLG1fYbEvCVc8Rr52HtPi3CSEE8urcPwarRk",
  "key11": "5TsfTAFvtm8PqKrKc6ksd5zyvWYkYjWqWDYSP9jwhUEcLUDjnBLxRewvs4kr1nwD68nVuoaQsGRMrcoEQUZKQSLz",
  "key12": "5TyFe7y9KsuHT5JeTsST3X8q2zvmRMV3QzHSZy9EMsWwYbAVFwWWs8qoc5n6GHya794eA5sNiVHoFu41JHRFFnZm",
  "key13": "5NyZMTRcW2TZRSXQ3dGMY2TdzdfUDX6ZpMzibVcqaRxAduXeKs3D53j8n62DSTsiQejKrmmJMcGS4xKhc32aWNgc",
  "key14": "5kv57gJs1ea4HATs7XjDEH7mH5iCmgdEX9yaMteV96chDChtt9mGus22TiVjSSjB7BKgLBqgdKUqLEMMUXvNkR3J",
  "key15": "4KYPBNu9A1jkaD4Sv1xZgw2XZ47LHXogHLSGDbzduqaxAEK6wj8pShxt1MGbguJDmtDmkNKt3kjuTB9DPxCTR6tz",
  "key16": "5VbqGPJDmtVu5B3bRw85vDCT9S7sSaPQDEc8MJy6zrBA6ghzVvV747Emcye4CDkaMPsdQcsvMHsqnG5y4SAuBm1H",
  "key17": "DrpqUfyYwJKcMkP2xs7Ndxm96jQpqMQd6BzxdMZzLmNVxr5HomP4xoQFr5jn8ebXFVsXNRRKD2Y2Hmm15XdNxTy",
  "key18": "5G5NHtGWMEFsL5BDk9KopdWuSLwJNZYRhJMcGHDwpskj3Ypbp2ztEZ2SjK7LjvAaM76PDijPySMpRP9Ly55Umh5Q",
  "key19": "583qo9fMTYKmY3xbfKSEfD7Yw57CN2qhRKMxmf4C7wGRc27c2BcTTjejduMECbx9TtKHxoDQoLSPseLjBK1Qzjx4",
  "key20": "36N7NsZriLjhyMCbKn4bcWNWjirY7jJawYYwoPFVhjKeGhyyWrAC4yeU4XHxhBDDNrGLLGCh6zb3YAzGh7heWXnm",
  "key21": "42mGkSvHjXxB3BitFKD6kuej3SDo9icQ8pu9mZwxcdFuRdzsANioh95kxMhNH5BFccjtGn7PASskSk9HJD1DuAba",
  "key22": "4qcqnvCKzSiyFVgT6rC6wpob4E2Eqk1kgFHaQp1FGBTvUaeHzjbTF5w9SJFahpgaWdJpEP7MN1xfZrT79AEd11Ef",
  "key23": "2rjANNgLHrusdt8u7rJCDGqaGAjqxqQRVS9xSVEvPxScTFdcVBtFDAXM75kZHxsAC6cHqduAevETMrK3tk9rRabD",
  "key24": "26c9mcVDZuifY9SYXfcJgDLfJaLJ5Fcgg828QF8oJX6fZapWsfG9SYsTbWCBD7fTkC5T1LXNqca5zWN3sBZrmQJ3",
  "key25": "5pqVZrCRsCaPksd39bvST2LFJA7UJT1U9hghkSX5wtRw2NvSzhiYGR7b7giv1UnsMEC4mdiHrQqGWKUrSgPwkNCx",
  "key26": "4SuwaNKWC6Sos1YEsugizCgZJjP8UTsFyu9hjy8a3nYNv5Nc2KQHuFSThP6BfGqgRmCFAJaHsenGvTTSE5N9MRtt",
  "key27": "fFP6by4A1EuxdpPBk2CvArwJKaHNRqCETSsP11j7vdnnuJFJeR1EmNdmyK4A5XJbx86tWKu8dV4idQNqUhfAKjV",
  "key28": "4b59zRAakcPCwfqVrDbETj9d1XR7jAvLZYQzNgsZ7VDx5my3wiE3rxkYxNCVL9eavW8qWXFPfSVwCQasuq3o7jF9",
  "key29": "j6gPuRmwadssuoMraktv4KAoBo3bhtrW3YERBoWz4TXoV8ass4zFZdzxsfRi2AbsdjbMtDog3epKWJZjesTjrpT",
  "key30": "5DWwspRAH7qWnzFvbmCrPC5rJNbAtsnq19bj3tbVkFKiuD3qeBs61vVmitAHMHDYcwn5PfbPQ97Qvou9EXhZ4QJC",
  "key31": "2ADwRnZhvtKA8pKXzo8Y8SRxRKq9FCkYSXd4E2AyieYQGotBrCDk7pHvoG8xryFMp58dqa8SbxUkB8KmoM78HLCn",
  "key32": "3ZYJcp3ZEpXyXVvpkequdhZiswmnnYa6piyvC6De68ebFs2746X6GwULJiMXz8K7TwMxrLvdwPzp8NwQXUqVyDj2",
  "key33": "4eVZ9NE7sHgke2rfNWcC4SqWE4oGA62rg3kcXDExQ27SBmXg1vzq19ocFgUacjVwP6EXZVVYpoY2QTFvWAMnomY2",
  "key34": "4XtCxw8PVAxv2iAue7oGAjZ6eAb6JBLYdGqqk1NLvhsfF4UG8pL1iAMcQz2zMiNhcnwB3M5F4y2wnsrbExTtSdxj",
  "key35": "5kqkQEfrqnWCgyXQffYpoA566EdHbcWapLHJdnC6r3QfTDJd6hzmwXH1YHatW52nYPQosRnTbHjPbuUDCCzA5X3h",
  "key36": "4eycrp8GtjH5sJCAsYsCe69KmLDoeBET3ZdTHjoQi5hQ3EenC9BYckEQ5pHSD7Vry2SBzdha9hd2MWk8Fkqp8dtU",
  "key37": "3NcDZfVDpNMHhu5rYE4DG4oU992LzcSZ2un9o2EAE7k5hfYoZEMWKtY4PHJxGmfcYQ3F7FNG9Qwp3FBMTPRFJAon",
  "key38": "47R5PjXYJTyFeGmQF6d9kKHtjCZcKSKvEvueTuVKC3BxBDMbs4RRmXk6kSPQmm4Kb2qwLXz1BTt8K2NHWexmBgC8",
  "key39": "ycKQf1Q8ELuu5Kc5KiQGLjK8dqBzazf9RHdWGpUVXmZ9o2TKuoYW1tji4B7dfqiihJmG5FXsG6pYDb674jwaWaJ",
  "key40": "2NZ6Fu8yrMtJRjWUWnmxo2E3EX5vdW3gtWMTpox2bcAJ8oss35LVGmZYragkTNuoiG5HNmjZHyU8PGRnZxt5pFVE",
  "key41": "wNZG2oNKHNVvdUh54p8viovn7oZc6AYg1F1Ekd4jwgoF3bxhAjkbUFYw2wC5gX6V9xjx3Cq86AKGCbCdZZdNDTx",
  "key42": "L7WCNriRyqFrfkU4A8se67jponAxcBdmShTnzoHtnK4rsVSnSsGEVZuNmrDDR3fSjPxm9tX7AHNjioz4mFX5oMa"
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
