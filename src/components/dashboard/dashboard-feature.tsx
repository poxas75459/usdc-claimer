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
    "5pkW9Vv3AJPSwsy3jScK2WXFtRFZzmf7XokjaqDgENpip9dRDPGFvc5fGBcNaehZTWxTNPjJCNBs2ynv4B4wYc73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hoUS1ehYBmSX54BbQSJfi2dSRtBaFDPXsHfdtChrVYEMUXyrMBTzYmoJH9vZJpYjA4BTR6byccpYCZibughJsG",
  "key1": "2mPBWSi8Ycn4icJiS2PWXSdexdtPgCuKTYmC5CjN35Kqg3D5bPaPtaX1eFUMi59ZWk2iDYuL7Ff6ARA5Z2Y3i3Wn",
  "key2": "PLGg7Kx9hiEW2VZ7fjVuExYY9Tt1uYAEQqyj1DdZPity2bCzNejokwxqeZbWgTGVJYCZgbPmDZBLJGdQ91N5wTt",
  "key3": "5mhjnZiFqGircjvXDKo3wj7JCxTaPzoWViT5kyyTeEjfr66m6KWPnMZbuLhTB4hbyRM2Ad5NJDohw44vmVth1neR",
  "key4": "2tZ2QutLFG6rZAGPqTWA1LrT4mNnP1tqAA8gxKWTRbdyLoxPT24UMJHk6MrpTniwxS5hdE1QHradJAm7ZbbS4vod",
  "key5": "5oKYmJkcuAvDxiVfXzNREn9tSRPQtAEy32uBkaEebMiMzAgUaVtMo4vURmpzWBhSPshEawQQy92Wmu1xe8NdZ1Bm",
  "key6": "3UDJ8QJKpMgPnRiAdxkFB6w4w7xQUok55ZPc7XnhPVSrbqMANWwneNXdb4t8Wryn1i1WtFSLJYbBNnocABQfsAKk",
  "key7": "3TWg2KpjPej8agBV62ou19X9iwMonff4PoVyZH6tc2iRwymdKpkSeaEariPDmNzDRYUbRN1TacAtEf6WT83qRoq1",
  "key8": "4csstYrJP1PZPohpqjk6tACqj5hCK63tT1d4pmi18thtUdrfLeSX29TRnRxWYFSp4bAVbTH9eiKTFxSdfgYMdmzX",
  "key9": "5fS6TGcHoAKkxuuSgFh2hZULZ4tD8RZRjRk8uRdCSPassDFgZeq63Nc3BH7Zu6z8gVUUihYAekK26z2KgM1jdjcY",
  "key10": "3Et3pKnGfGtcFpeyNYCwMrWDoWyNqT4d5Xm89NuvjHwee6TA3g8Pq1LtbW5pLxxZbpwQP89fcwyTrdE83LxVmqQL",
  "key11": "xqXcpFwjegps34WEHQFtehUjpGFopCVqP2bqake4xqFJmLf3M8T95yNSgArv2a3nhC2h4gGwSqUKsWj8zaSxRSV",
  "key12": "51KbfV13mXwKbnW9z37D4fegqa8UXZjkFHuGTzruCnmro4T91esjvsrbNd5hvqJWAoDWDgYXEGEizbqbLfaRjW4z",
  "key13": "99mNNJRREuwLnVGxHszi2PM8rJULC19ociy5ink4KTjNSCgNQqabdYk6vzQ5WAp5nCgp4bmBu1WbAED2WdHDC6j",
  "key14": "5eyjCr26CqbAsoXQXsYgotu1N4RaxRhW27EHR5JYMDJWNoRqczZHxhVcWz9DsV41rWD2TAm5m2pT871VRJk59xpD",
  "key15": "a8WXEFcZyuuePG66Ew9q9HbVuBdmdZVGskHiGqfujMrAvmcvgj2jd22rcNKAHo5dfQLPXxm7WbPF5YP92kkj6Zo",
  "key16": "5J9bdwLBaJL3kpLBBdeWiE3CiBsYZURhn64ZFvUrMNBezXDrMHsHmxjnBov9yGVbJYUx5YJuY7f77pkvCdHbNLc8",
  "key17": "4s7yGuHcdrPKnqEkJLSaDm1Eoks1PirEUB6sNFQAZtxPUtn8BdedDM8zoNC7CxtGxkcjKgokxgWh73XVn7YZjWes",
  "key18": "5zBT3HztVddMLLVjEL3mS7uTJ1g81tBjqGPWPw3cYAxXFV5k6gNTNL7ry9vKUnAsu2N5HJV23KHBXD8eJ5H2LPgX",
  "key19": "2ad8wgoLNxdj7Jy3EJi1NE3ANVk8Y38Ndtw5fzkAcG1H4DtLgpPcPyyEzvSgQJkhpuhEtHk4g57ricwLcWFGvTTZ",
  "key20": "2RNnLZA9axrdRgiaYYzgqQZdNXWcDL6CBpnywCxFXFZkPeUWdzRsjTXaDCd612BmZxLfNWzKFDSCbFkabu8b4HgF",
  "key21": "2BTWgzaEbLEhEUYCUZKLcR24u3KLefXLyEnVPMtZkpQaGydkrhbnsnFwXrrV3tPRWo79LTjLZMDtSutyLT2bSExG",
  "key22": "3TjfcfreMV1soTqgqHSM3RnDvT8dFsgQc8BNRkKUPGUgnSH1qRLTn4RJbjke4hBrQXH6G5RwwevAkF8BqEHFMtWh",
  "key23": "4LtfC8TeNP7XFF7rdVneTDzruhis3ofpatNZMZs2MLDorBsb9M5Xad6zXKDBZMeKujGEYt6Kq8LgPr8YQ3tV3pMT",
  "key24": "354zRWdar8we2bbJcpDMt4Kj53zwjUiGUdG5JqM3ftkSDYqRWwSLvLfZMpZehwuDAsSUfhjfoKn1CJ4AB5oB2Yuu",
  "key25": "5QPowSUW1UQTy8Us9yzJJZKSpwWWBeF1e57jLTitNsb32njHk8rnQW8gEcjAx17rExc2wf56bgcZmAAzYP4E7kMx",
  "key26": "4W12D2QNWByPJWEzAYiNVh7yFx8dVKoKUqK73WDRJ5cNzgeTsKYH3iLg2M7N1muBe9F7DT8snqtwSMYw7frgwSq8",
  "key27": "5pkD3yxNrxXP4pfAdFU4KvoGCW5T6ez7PbmKN5Cv6VpESnsjMpdJyudaHD43DfQLz1KHXQDBpgQiUC3Ecf2Rbyvu",
  "key28": "3zYJR6wuYUPVmzaGFpTTdF7hvpnvs3PAVynYtWSYjW2NoHqtNaxG4r4eWw2XUDuuuHbnpeJr2QtBVBHyM9TwZhcq",
  "key29": "6621YEZ4QSTsx5PrHdgF9umy2fYdHTZ33QQhauX3BsUvj2g7DC67NRj1rQRtiP1j3i3cSrR2Rruax44hHJRNWedn",
  "key30": "2uimjod4QGfEkpDLm4APKcSTnEN29PPT3zddxMjASPeSTnZk3izXzYCWu9GMW3NET8KRMhvaJGGEPWPZLm1WvHov",
  "key31": "4BB9NyorH2kB5WmVy3DcJhh6ShkU4PwwSZJiTaJhqAozSfiwY9NRWT9QZdQfHSd4kaCThi8BgfMJV1wpfRAXSQu9",
  "key32": "5Ctv26Z6rxE9YK1NX5XsVH5kXNXD81WeiYLoDsYiXXKaz1Ut7rg8dEJysaEour41ELxvgGDGZMzW8SMfGBzPr1j",
  "key33": "4HtkHPjauQDnCb54g8CNFBgtNCPcMuJ9UXkAuKu6zf9yLXTVrK5tUDYTxa635LRb928YVV8CpuTjyuuvEw9zkpFo",
  "key34": "54wvcWSXxqyxZeYgVKaX4c8USvyEigj5h2PiqyhyA8ii1SgfBL7kwX3eTTcYpRiqPnNhy9hfURaL4PfesrbuFFhq",
  "key35": "495RMhbSd51gZZ2U3wSQkL6xEhiFBq6SWVewEaa6MxfGMFmN2GeU9oZvT8WmHe6gQbbzXWWLpCC3ScKsNLhdZcYa",
  "key36": "mfokpkCJxPNtNTM6X6w3hVvA9MuPKuYM2arNBNKyeLqauPQgjdwjtdBkxM3FMi9SmVUuMVGFsi9wKxqgU7J2tML",
  "key37": "4265fcSDC69PHEFLLukfbKbydZjYoW1q9mJ78px9SeYcNeBPPiaQmE1vpCZY78xNvn94eTWFhUsmEtsLfcvbbo9K",
  "key38": "4ceTmm5gmqMGzvxQF7EaEtcRdhauDyLTf2EgNfoCj3JmCuhNL2AP2gaWuNtHqPz88Nr5stUYRRoEASgCtCjGVn17",
  "key39": "mRPWrryUNUJUmaCApBLKDLKsxCVDYQiscujwBDUJAsCmQGjo6QPb4PQGTQszqdEdgHtoovvvqMt2XkDy7reB2U4",
  "key40": "4jCnxkNKR7Wv8S1WuHPth1rHJfCg6afku8zvkbntRXxTiE4vVWGPkFkYHSjoW8x58Vc5Btyk1mHmkdDgAjin92t9",
  "key41": "3P5pvKmcVXEsV523dzbWEYR1fsLvQHGwiMZwRgkfLFMbhx8bkytpgD59gh6KqRq1fWmZ5BTZwMoVY6bFZGKSzrpH",
  "key42": "2KyLVSabGDEYay6gbBaohJ6qqpjTmJmHrfScGvREjeZohi1iqotN6aUz4bQxs5W7hqhEE417b9984BUcEhYSnCkK",
  "key43": "4kFjkC5hA92GtQkAfcVZFnpFhYdkY3yha2aLDbRBVmPKN7EMWMLgRhvaStVETBzriPToiYR7tq9GK9H9Wbp1Bo5w",
  "key44": "2XemHEcb8Xt7vMuUU3MJUHLZw42CCBkBdDFZomCwq1ADJRag2Km9zghfB8y23DEapgXd2re2RmP9B1SCoVimp3i7",
  "key45": "3F7ciD8Vpx4nNJqbp4PDHJ3jbasu3jfmSphCig949o8ZX6srP4bQ3aZjbingnjAqkjdcSXJ5n3DNmHqiwZ4WHYgw"
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
