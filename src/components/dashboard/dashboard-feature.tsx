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
    "5waDpP8htRYUKzH73zW33ei9H66r9Q5K1qJq3DftdYGB2ooDqKe3GeuMW6aqMh3CCfb8oAfei7yCfMvdpiUa6DCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8sLDzwoFXg1gQ47uUPMsuvYgzy237E6dqwPWRBTwpo6adQ76dD3AxGL7oet93KBUyua5XNiuAmx67uLJHb3u6U",
  "key1": "3raZ5CH7MF6HBQTLTWqD2vYrR78NkjjLEjkJF1GSmyHBsHKsiUD4FwPqqxpDPMZMBCdmruYK4Ym91CbukU4ivibt",
  "key2": "4dQqKigJDcTvdC9NYqoTDk8sZHeaM3eSQXR3hFFUyB5mMpe3UfEo99qRUxxr1vjNqnZPGsnaHixaAxjAWcBrx1Xw",
  "key3": "5b9AP1DR6cGJiwiiRVy8A6rWXepzT74rGGTrJiR9W3sgTsgrXYJBWdHubrQjk4h28dnxG86HNSDW2JS3hrk5cy7d",
  "key4": "266L1WPnHwLhJgXweg7ND55vBjs4uXTEJdHvK9mu3koYpgEqjcAeqJKr7nnBbS8M6FV6w5tDwaBi7xwsbf5C1DKF",
  "key5": "4z7H5t8NrHtxFgTG9pDuhh3XT1C2GnSpuWZWgeeC83x2GUXV5bDfbFJmcwfPc99BnX2fAMKq6vT9aaWW6c5b3vV",
  "key6": "399es3VKjEkbQ24akHQe43FfuCA1u92PoZCBZj3GZ4x57wD3oJcDYXVqNmjswvdn2EnZ53NCH39K9RYNq4E5JMWt",
  "key7": "4PeWMhPrRn36TPpEZboLLJyaDSXecv17sWfnM5PWgS9oYp7z9sho4fxJhyPFi4MqHVEB57gmbre7jwESLks3dkHC",
  "key8": "5bz9h9bDvkNYUArsxdoh9LSM22gmScarYXESmQHX8YujmJUBAVkimdFv4ndp8HgUedefQaXqco3Ko1jABxbjMQU",
  "key9": "JvgzR1ZkDASAF9LdGLoxgJbYAtJ5HjmbHKQMbYYouxacLgdq1cHkbwr4WiEefGTePkKRGVYq2RR2rnyQzuXgAm1",
  "key10": "4T2y3yZc26CadN2X83vA8EuG2ozDKtZKYSSNCdS1eDX2KSYtSN4oHQhh4uiRWCuyh7JGW7DnqdcuUXRwULSL6Vxm",
  "key11": "WgZyb5yGc21Ho3UsiBhoaaLu9cdXdLa1EQYqMWcfjvZdTZfqVsdDN4QQKaYNWxrDazFCdtpVjSBicveWcJPDrBc",
  "key12": "2LXYUnuC6XPPqLjaK2X3jY7P8wQd4LacFxYhAZhPHWaVanjoypY8i93fVWTU6G2RTbmM7vTXP5ojvvY6WRoZuXEK",
  "key13": "2AG6kfCxdEoJztexm6nqQREPH8TFCQorBWpHAXZYzHnRGaDNjRKWdamd176ALWQJYBbP1kNp4qXpEGWosWvNJ8RB",
  "key14": "5Su3whrkygAPSmiMdErkGvrGaA7grTqYuBkmzBJ4qkGLTSyk6fiZHJfBoxYrf3MdB5p8UuvPUKYZKb3n4ce6Kp72",
  "key15": "5dVW6P5WcW6BpKiTWQNdPRFt5mQ9C2uHxVumDYrWGrNz8BPyoMFTg6p4enwbkwFVdg2aUWthqB2tQCmgxUnJjJAD",
  "key16": "2MNgrzmRisCG4qCtqNdKP3oU2fZTKYd3JTLNz2cqCK1nB41ufYChe6FVq6M4NSg2wzJE2yjgEvvAJqCC7aELmKX8",
  "key17": "rKNcXoXj8kngJvJnS1esRw9cWeRaYyt4b5Ep947aGgztqZv4jxccSHG4YsAGVUajG1Hw4pthZxUXLGsgnRwSbcE",
  "key18": "5KC5USUFmSotMnM48bwT7sG68dFpzP8cRZQtMHMpciqpXVNTiTyTCoFvEnanQpSKajwKRs5gRuBU8WCQA5eCPQ5d",
  "key19": "4PV6S5TPiXjPgvQGn674tamShKSreVxptkSbtej5egrbfiMdsknhy422tAUrKQfJxVPbg6iYny7p6s8SJ9gjPUfv",
  "key20": "9HUyPmzMndbhx9gTnFSrTfoAvNLBr85tTr8Pq5tMFu4AXtB3wQYw6bGcPXqRfmGdb7D5betUmT4jTJbmPVbZNq2",
  "key21": "2kt7KDUDtXgj3wKR3GJ1Nzd17hRBt6BM59ix1Cror8VTPZQqKJHqdkjteiHteFmjsxC2S9BkJ6wRru3jM6WBoxVq",
  "key22": "2aizBTcjEcWgj1iNmmcXkybjfLJ62RxBNbgZSuUiRH2toQDFKxbkL6RTYFviDXsA1EiV12871pUdb8tXVqjiiHsp",
  "key23": "4H8wxbmQZRh7gzbjVw3igQ7X8z5mMSgYpZtxm1QCgrqq84rvCVKod35qrYALBmgiEk5F5iqFGqRQS7ZzhWwf4iCV",
  "key24": "3nKWmFZgq5K4YSGgBxGgpapSeq56DE5Br5LRUsAnHi6PsDthhh4kT8TrJnGywBmcxioWzbbqpmEUm4kvfQqJqgmc",
  "key25": "2uXFzadmG28dfvgdhujNTn2pDMZWtirmwLkpYLehmUqrLr2R87GwVv2Y527b3vVUVPxHRGUbuCQLXK3U72Bqq7J8",
  "key26": "3LRk1TjzrMZcdgfxX17XVF7LLdTnXvdqViZ4UAUMD6guiG4SWwoWJ4K2rxGkfXnxBY7E2aTA26XwJyQtFyhgjEVU",
  "key27": "2xgTZMxAhWhbJaDfn8y7WohCq2nZwh9cx53ttWr9WgSWxgj4MFuDk1kXLD9MK8K8g6qcX3Cjq5pAL7nSdWXJ4o3M",
  "key28": "22F75AemweouK1dvHyVDL7zrmvP2Eh6UeL7bViWHJQKMgxNHRwxRbjs9DTihQaqhso4GmV2yWujAft5EprEmcRQW",
  "key29": "3HWTgzJJW6uY3UKnUAvmPHvy23ziAdrG8MRhbkGvy9mSZVQQB5Bspi2QwifHrVFLu1ino8JrzmrtDWLTNeYkUzpr",
  "key30": "T64ZYECnbBTYvoMj2uPRtxWML9NHgNqajzoQsmDJ2Hdq2Qm2iKS26H5GtAZUGkRfvJzvTYSbHXm4xhQXbc6MXvd",
  "key31": "4WjaYEFKbM7JByYcamx6qtiMuxVocCutJ8s4DZ8f4XQNDn5LoV64WecmkeGFLfMBdWAv1EgDuRVWhQ8b4APx1Kfu",
  "key32": "3dLuzPLrzjQ5UBCnTihtRxCaYCdgPwNtxZT8Df1PPzNTvP5fccqb69vsj3efY2Ms8ep38M1QGvRYcD6US4dGpXKE",
  "key33": "5Eed3TnrqputZjt4hZMXugPxQKpu9mmksgd9X8aaHRR7Ro7Ux5uWitj2unXVfck7usoVkzsZ2v24Jvx8SNUz7pec",
  "key34": "2Ww9FoQoKeCjTukqiLJByViHsZsCVkYVerZ5YMr5aRxZKrbfK9cxYaaKphzpFspS52ruZJT6Ao7rs2cuNKC74Kr6",
  "key35": "62tKVYJccXikqF7insPtS9bZ8GUCyeZ2ykzRno1RkE5fNUZWSViYaNj6w9HtttWwsqMwQmjrKkLifZ7vKetWUcvu",
  "key36": "547o5MvRfxwG5fnc2axgTGieoxhoykUA3RR6VAE7w7SSogFuYxYr5GRuhDrSUSjMCeYYurf7gnHoj83MXP4uN56W",
  "key37": "2GkhqGqBd1qeWVoEoW91wnt7cPgBPBGRERVyCnmoivWSvSDXb6yHGWPaFaeqgTouiEQexvnz3mpYhsUFogpzX78J",
  "key38": "3MfsDsAdcaZxBL3B84AsF74KfoY127xQqjfEmxnQFQoqqMJ67MwQaDcKE6SqMPrEWhrVF5wu3hTz6JkG8vxT8mXP",
  "key39": "56brrSNveU4AKN7AhNFMLwoSxGS3QH1fBKB48aQ4Wm1HYkCACdVLeBBF6spAkYvSkYfCaAomJBAPTnrquXmLxGi3",
  "key40": "4nKU5RWxx32rSKc98smTxMUG1puPQksKfMeZZy3PHMLubsE9EdVzdQEgEkrr6NWCTqznk6JWJESexbDHDdL8VsRW",
  "key41": "2A9jk3ZNnPBR1VP2bhkajPswVn49ZrGWUZ9e1tqMYGwSWZi8PiLgLkSQ4kwA2rao1XsbArdYMWyUK8A8VTTRkMWX",
  "key42": "5a2QVgDzamYpt5npyXhPN32UbTnQ2seJyst6cwNEnSi9Zh2qBvrioiPH2Cj6rEMjbmUmueC5mmi5uUNVJ68x93nj",
  "key43": "3teEQbLYUsuBXfEgLvJFdMDbTeRo4HThmre9tEYGVRUWoAJKmUZT2fySaKV3KQorcMQZsEUtubGCnCdm3zzB8Y8s"
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
