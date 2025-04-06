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
    "4PUi4Pe1f4U8amwttm4sQfa5aVTFq57xU3KdzFKN8GWy39SqVSCGQw5f7o36zo838LF5Zore3kuj43QhBRJtmENw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qT396JMEmL6XSRmgbG7mXaCJ9YD6FKo1jLKGnqKF6Kup3eoVzJCKxXwByV3tAZxcQPagWLXgjsBpnHWtJ3QoXco",
  "key1": "dv4RZzNRdkZwqbZVsst6ZZTXzwRQEDcqmSLC9uCa43R7Bjz4cYxrVgcPLeNGbfPiiUuz8zmX3wet4DvQxQWgRDT",
  "key2": "43T6DEr7QM53ydbyWqmb78iiqb46dEbEtttXSUMLC129L8nL7mupztx9v2kwRyPPKWV5y8JdUi49o6ZaUTLb5qiD",
  "key3": "5hLr2tEqmoMJ7hTEAK973pCKAy2c1dYm2wzLmiKJPEgjwkpQPNgG33ey8tEcfGRLaSjhKVZcAJw2YeophLP6Pft7",
  "key4": "53TnsADxncUqK7xfEyFLY8QwYXDn36fvTDBzuN9PKyXcFTH7vcTc34tx3RnpqSiFvK4DToxrc3T4Ydr4Ho3b1ovq",
  "key5": "hiGt9fukheB5RWBzKqm3RKwMR7QjhzxxA1YTStosYqbRLR9vRPUQdU9EME3HTtH9TieJAFUhDQepWNtR1sgxsG7",
  "key6": "2fGpywqNmkGej4VzQQVKneifvyXJ7ZKMUUG5wFw2wgEohF6MHD8iapEjs3rGAB3XnWiGBfVkhjiTFn2CB69Ryavj",
  "key7": "88UsqgE9qSeRjMQwgHvaUjsNCoqTVKfxpdWR9BzUdzSA2HqzruNTfsh2xTsVvLG6aSeCDKpML5u83LKAaeRY7hy",
  "key8": "VfJLHjniyQwodZtowDrQ3NswikyrVQDDbiVZ7zPUWaKURk2XgWfFkGHUpJkeGgjEJNhKYB5UygpuJBibrSx2UK2",
  "key9": "3n2w8YUiu15cbedKyCR96m3unvTYbV4EmRffPeWkoY8K6VfxdUWKrUKwZLVXJ1LesWTJHYcbiYE4bk6wBkUqdCAn",
  "key10": "3SvnoHMdEfEMGsbyWU4Z9GziWfSMrCprBcdih6L7H2mCwP1tuXSP55WRSkPr9w16Zwo3d4MDcSz7pUJMoL7TxUzd",
  "key11": "5AQqYXweCgaunSouJVtzoR3kiBCAHHN9TYnKHDANn5aXqRHbfQfthnpFDLaLWviv2ytnZjLmHxPsq8p9KAuwNiZy",
  "key12": "2H3cTB3134JFcQrDNiKUrhsHQco4HLTsLMPZ4puYi7a5xmTQfiPCxc32upuk1rqy3h68vc85EaUDYxDkGGn9Du58",
  "key13": "4astRDR6a6BD8BmcXQywBca8hBEGqrFgE9pgipp2Lf9ucBPoJTAmyXV79hnZznbAiy4QDMWzvEEWDCTymtLnXkQR",
  "key14": "4jKRyM2eVSktzK18DEmbp3USeWfxT6BYwXXmdC3y7Qc4XepSNP1iFRcfpw1Cq13mMmeyDYWqySobW9eyb23Qg5e9",
  "key15": "4Np3NegD1h4MwFU1PJRWPWZ6Gj5ruazw9U1zn5SC31vguiqYk7mbkBFhGS9myoVFtUhY92g1p2h4zqvCnzgRVX2a",
  "key16": "5EovDjDqFXRDuzR4PsLioZExACmPr4F4G7D5BVkjz6uTB3D9z2T1uDNdoQYh2VJ5tkqoubR7XYKtARu4pUo4vzkd",
  "key17": "5PX4MdhgYbFUDtH24iCRf59zeNEMSXrFLEwjCW88VzvNUpbzBCCx6zvNSr6w8dcR2RDHLXtRWLg3RDxBdPJMMPj8",
  "key18": "21rFvzsGSMYaiVNSfDuF8bznpb2LAAD7s6KWvfVK6bi6kTtrLQnE26QQEWJUBeafViSLW8HcqJ9qaUqmHEQrjwB8",
  "key19": "4Qsd2cJ4SRHM1bcbQpk8Xjta8AUhArE9UEHhmrA3BHiHeYrR2UDosT7Yv9mrCGpL8Gz6KBxP9r9XtjLvjAu1Rs5d",
  "key20": "3qKB5adewJs95twdHTNVN3NTzjLv8YGAtexdMiFQrWXSYuToGvvc2GAiiCipsKxpWhs2fGrqyxtdwE82iwzEspdL",
  "key21": "2abPbf68EHzXLto2VFC5ptQHUAog8ByxQrqrqE4ASN2EQ3WAnjV1BuycPMNWAAVQdzQrdpuHrf37udcuZZbLqCbT",
  "key22": "L74HnrmGfUsuxiCyk4smfEgLBufjmmxPoVC3gYYmwWS33SJafaHgtudboZFvP6jYbLqqcAXCPSK6kPiqCL8hYd5",
  "key23": "Un1QHCiA5DVPo8fTL7BtLnKmerirg9N55HpzBPCYh8zzTT4SKa2s2kk1Dr8jS9Do9sNDpgASYWtDjL4ZghRbHrz",
  "key24": "3pLknuQVa439LtjsMBPK7jxTHAMEmjrHtw8EWGYjudij4Laao2z2BQptGGLrbHAgQbRu8dygws7k7pQVur1hEmUA",
  "key25": "4dsXbmB84f1QPyoySMoA12imD7y6tBv3y3bYrWDrQy4PsaoYgcuyhQ4YFFNj53SfbcssWVTtC17vCZwZL6LDgUUr",
  "key26": "4vgkw3kFQgAdiMcCFYA1PWxeQ5BRgiQxnhHX1UWEEinVWwmduu3W7oSFUboMTqXr57y4rC2BQGa42Ph91hKSWqvA",
  "key27": "5nCPKPo88ZCi3Xioy9otxh5BAgcVVLsCGD5J6WNPBo92YMvH79NVKsUQynN5FqUofPy1TFpmxP8pkZcPYVNZz8oV",
  "key28": "2gcidHethTywcUq7mmTFQjGajFGsQi8WkpAY3wdqupWe78NbMwUDY6uQNZL4UYMYZVAHnwno69G12VdA8nA71RzW",
  "key29": "25Qo8q8duWjGvisp39ZvmAHDkhhiL4vWAh2S5j69KwYKwWqZojjUeNxJCxKgiEQhje7VL68ZWaP9CKdRiFaDyKq6",
  "key30": "2Zj5ffiGqjLk94YtVTub8nrrwwBP8N565ZYBkyZUDGNHvup6khRCegeSongrhNHPG2GZj9tcyqFfUaBKJ7yiRyG2",
  "key31": "2iWgVtKRw5AaactzukK1QHRbm3umHQU3ykoCyp7ESRABHUuSbHW8MSKKsFpw75Qaz8phcsofLnJNkK5uj7pZcV1Q",
  "key32": "4QPmxftkqucbHamVxMkC3fu3ainQFUtEdxN9aYB59RYU9T1PmSgjrbxnwMTGFA6a9SrHJ9jFdanewxdgdxWwfJUe",
  "key33": "5SckhzoRZg56U2snorYUP1RKjpyW38j1v116Dj3M5xEVCa48QbRQxHJwJ42vtPJ3ev7KsybP2cmuwiDVvWVhLc8a",
  "key34": "5UEZvHvx3gv4hoHYAALsFNCp9VLW1VBoW4iwvZCwEqphTGZ2CVWTXpM5sFbmNwSa5dbSDeVLahhDyYQcBzPg8Tbc",
  "key35": "4hpQrV5s3hzmnSEnQf41ekobBJcid7qtkS2q6BN5UDZzhjgDonA9ThyZrXtNcKvYa7EGtw15SKuGNVzocNcXQQcT",
  "key36": "2akTRCW1dFeQMs43vJXQfMZG84eHmtH8ZLspG8Pq65o6QTG3CbYrarecGQtVVuuD52x5Aauhf53kiPfwt2DLioTK",
  "key37": "3itfXQNnMvPgjpfDFQveA7yRLFj9LhssTGWqibn2cTYsknTimf5pSfgyKg78gY88LLUsMFRQs3bxJiFUsyPK7JgP",
  "key38": "5rKjNsWpNT1h6NezKmkwqqaehMes8ppPjyZUfngqoekDytcocrX2TQhr2oU614diWTSUQCk321FTSijapYDJ5Zc3",
  "key39": "4TxVEH7iuA4x4mNYthgWnB4so42WXa5asMAcGr2hArg14k1eK3RCcVkpPqXJgyXUk5hw4phyxaV3dcXPtbDnaDQp",
  "key40": "eopEvKxe8KpqETuHAdtnHeRdgsFg2P85pxt5vLiUuVg8dMDdWJD43TN28PtrH4eJyWn5gcsFeDdDNqciU4onuXc",
  "key41": "4VxPwuhSC6VEBT83LtsJFBoBMHy5qaKXDKhkcgqezB8RqEZDshF53xh9HePUvymZTjh7CbE7emTgcQ6W8ZrHqZEK",
  "key42": "2FxHdi2P8hkMw4qzwgxQxMRwkZtv3N1Je6thNvLidRP4nnwgENEGqGrMh62nx5k3isQi5TNSpCE4EWMphQ4e2c29",
  "key43": "5cquVs2VSzFprxYFWRr5G2Xo6iB3pywJVMYH98cPexif4KxdDAQeLsS1sPbL4U7HsoeqyHy9AYT6SHMGEMjUUEBZ",
  "key44": "2XjDsTX3QfPyTGjxktm8zvBPFD1Fj55Ny49jVYFwTh5LGse7LCiED6JYNFfS1tVv8wsqgPaML25qyWEjSnVsaLRf",
  "key45": "4z3pxhvfN6L1xi2y7DCQftCPZJTzZQx531NH7CwZwtE3PSqCryaC6ywdhpXLxQd8od2Nei7XUyzfBkjLncHcCjvc",
  "key46": "5k51xeUHUZGxTMYGBEd2erV4wtcd716Lw5dupVeygN2XYQv2K5aoryAsUeyic72CZz1oN11QNGEFqJDDboSwRLNP",
  "key47": "EZFwTt99xJvsMsqrJYLtSXRCCR4LoGHv1JDkhEc7wVRZeCuNoguxAky2WeTLxoE9KND5ohzufmaYcD9rNCdXzX3"
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
