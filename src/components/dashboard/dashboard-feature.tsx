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
    "MoNrX4v3HP78PKvKkTT9ESK5u4JApKf4ohtxUTRaqFDHnwFfQNBdsWjwMJBVHw76SM5rneMSWk7nFWn5nDVKi41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quZUoqyGFJBnJcJK6f9DQ4CTTLgw7Eih1vSDc4scj8e5SCZ4s2pMqajtrNUnQyjcXMY2RuwayUc4wrcfXGMZpWe",
  "key1": "5aesVGLEp6msPYsw6btfZCZyNxvp92C8xvtyBeBpRB6VwJdgSasYKDerExqKM2RDhkHnWa7LCRScGM1Lvf9cjAzu",
  "key2": "5tdz6C63JwRnb9h2q28TajGv5SLce8sGb9Tq6Wcv5sEDnR7UKqdZ2DkqDbZrJNc5B26fJdsRvKnF977J3EjXHfiF",
  "key3": "5WB7jQi2AqJrGAAMgpSjUog9wjy9aq12io7tEEQsEJS58UMMmPEsXY45cY2gD17kXbCLenw56tLEe2gTajhuXioH",
  "key4": "4joX24YviYEyx7c9mSPs3VTAYdYR8BBcE21sbkSLEWVrmoq3Bp1fLkoncq5fkiHsGBBP1wgczRt45x1rB7VFBVqG",
  "key5": "5TZo7nzjRKte4fbvBKWgStHftiFVSHsAJQAPDon6dkQ4qs3msLaBmAVtN8Ao6PHaxVgVC6Hiq4aexcg5SDcD8DZG",
  "key6": "2EBknowLWN4gchhgPbcnPjoWhu1zBeGS61eVJDBp6G5sVbPdXG8QTzAh92uVVgdc3BQqba85RGJss98VC79R77kb",
  "key7": "37yxYoNBFUrr34AevBms9askNgJqtzRQiTJ3Hg57UmYb9vTuagyDrLfhPtkDEXMHNJvPHDHfA22Ko4yKeaSrBQfP",
  "key8": "4PhH8DQGqQLoCLJGbQmKh5rJMzAsAVoAiRxpRKoWC8Zn1qSvx2fA18V3UTQSBVWzgkHUNBtyLsqkoQwcFQceMKZ6",
  "key9": "42W8us17Z4DhhEHihMWueMA3ipDWryfgpSHfxuoQFPqrb6GPe6zBQZFH5FKcdj8z8H111SpJrB3KmmMFP3msRhbz",
  "key10": "4J6XJJqpTqjmP96JhMqELd55J1RqgM4Fz4eEXMXmAfAvaxenkJfsZQNgJWRQW7Rmuq9dLFcLXpNHjANmpwT1gnN2",
  "key11": "2DPCXwfFs2yd3c8emU11aspDaa7NgPgm43tQBjwmPJxGNMAFQKiE8THZSha3vFA5uoBb7S6bXi4tvJFd6YSaUD9Q",
  "key12": "4nxPJH96x4rEU9Hakt9ooG31BbvL4V9dk9XrqQEDE9QdscrFtsue5NGaUffAbme2tNSKvKpzreB7hiT9oxc3phCF",
  "key13": "5J16uzjpEyXpNSch7XeDhFXtFeBfF7vW8bKxTNvqG8MbsqGf4AAsKFFNccbYvQhDUFEJCZzxq8toANJ3kcPQ1obG",
  "key14": "2qQQhecAgjLjBPGNSDM18VcPiYyo2kwEicLfdrBiM33MpQacvmQRa6zYonBuBLMLEHeqqg165XY1bGaujFNJH3gp",
  "key15": "DLeKHCakgmhQEYpcjCXPxowxnpuNMWFi6m691KEevvRi5VAmcx2kYPUKdEJjemg7RAP6XAh2RDtfwudWzNNnot1",
  "key16": "2rHAdhnf1CP9QtzWsWbShBBxrYbVaVBtc4rB8zBQA1p84LvdbUck3U3NsGbeCKqtkZAr5FV9UyeZAoSkyQUu7cgn",
  "key17": "3zV4RsriLyv1rbyWxWiiJ4pPVwL1RnJGsTxYTaAXcXPo1Ae7MKxPuR4YFHPQD5xCqd3yquT7T95JsXSgVLgcRMNa",
  "key18": "5Da9T98FHZpiZEdDePhhginPTzK5orL1GPqv7NGb2FPLasseiUJniwoNRSonfADsQ2dtm78Bm4ScuNY9HzBAPiBq",
  "key19": "4NMtdwKquwkb2uH4zXXDcJfhmLB87t4VgJtCBwrCgrtSkrJMYNaGqJ4RBths8JARh9Kei829kcW4izJ8baG9J5P",
  "key20": "4CMf5n4gpLTpyvoYmdS4XtppQRyCQmZeSV8wmCBj7mZ6z7pLoMyjyVABSGa4PLc5ZsBWTCm9muw5qhrgKKLRpznp",
  "key21": "voYHVu1PtgQWmqpgcx74uKbZDt6RV2AKTT19s72nyoxaYYhRuJtawarHZ9JJudbiahvrhWu6fxzaX7wh17yJyDj",
  "key22": "rz7fcs6vpUcLsFzRPbHpTsY2TnyzJJm7gCMXvqYZACRKpHfW5TyXSkz4cBkmJPHzo1CbKJNDzGGyqrEj5egH8ca",
  "key23": "4zNDN1DqDgYy95vTa73Tn7bfy5f7ghXVQBbRpjoABE9iquYbcWYUnmwFvRskjkjeFfN317UfWM9FhcaPNJg3ZFYq",
  "key24": "2FmceJcxUTSY1n9bwPucKh6GJnkg9fW1V2eXSXKS44AhrUEt4FXjAZ2emmuMaVXQLiCKBEVhPKJ7HxmHsrUbjYBK",
  "key25": "2GuP6SYge9jEGv3bhCktBSwpxvkYFysrb7qF5FfHtGr7cirTxs2mR8Nv1Z3RhD7y3GMQQbP7gnpe9nd9SWs5yytL",
  "key26": "57Ro6fJbcdfJpzPPNvCqzgEmuFqyCQc6hsbsVy4pmQpt8jpNzM88vF4UPpe8qTiA1PyWBuRTjizriR39TSZr9eKB",
  "key27": "3BTDJNkA1Yy1ebF7SsqRWcnSWLV37DqhmCiVZXrDgQ88SBwsEtZ9r2LzGYXs8PD8YW3cz7cQPoeJTwsUfvJgGvaM",
  "key28": "3nCZWARRPsAzCgn3gBP1E1nPyx1zivtvQN7xHu45cxgTE9an3F8BgxicWfzN4YjT2voohpQxqqPwF8M5TgrXCL1C",
  "key29": "5mxee4BG4wqyCNCKMBurVU8tUu987oyy5jZP4inPCBmuaAZrT78fp7jm6oqY7XXzDAz7NBBcVCu2aVbytCvnE6YL",
  "key30": "4QGv5XnEzVQmhNVx2wJoVk9DDLmLKkuunJNvyayvKUJzxiF1Kdsg7wmHxQ2JcUG6KKzPKhPZWPkFeni2tiaAsQhV",
  "key31": "3Wdyziqz8HpXub8q5vxUqkjPhzXu2WkWhrxb2uDykjakbDLk6GKTAutcH7NdPjThw9roW59Lwysk4z2RRuhc4e8i",
  "key32": "5tPVajzVtorwdNR8iz5V8GFquhn5jrNJpEzVzRGvV7yhZLdSiQo4oavE2bF6oow3u7wfDWHLS68t9YfyC6wtPWps",
  "key33": "k8XiPGh4fHpjhQQCdQHv4L9KP3QBdsfCJnyc9bnpafAGEwESdBTqdXjNT2FFot84JAEVjCkgLYk2vKc9YoDhRZ6",
  "key34": "3TEz7a85ktWDEiKQk74BVtThUJNMxRPCDUbXPTZmvy9FwvdaGC87cAYLxMyPQsDxAUv1R86e9BLXjTzuv2hyFeYB",
  "key35": "GkdjMBwKM1ZzDzENSvJejqyGGsfWHD62tsLAWZQgynNuudJbczNm1PhC8QVsHzRsBfuRDCWn8Tx1mmPmoSkk1qV",
  "key36": "638jhtmXME82zLN6gZBT2FC8jhUQNSEaTmLyKt5dzNM6iiskB9FRkaK2ut3PiXGiJqSZmrSEjDNA2NeqHhy1Ez8h",
  "key37": "4LCPvh8fxdeZxHKgaS4zAVw7SyYqBF854qzg54YAoZDUFvwbL5wpcpkgehdNhW5pQwfQ2eTk2Y6PGQqUi4bB4ex6",
  "key38": "42tw7QWa7ShATBEyyfgkpUsDx8vpDL8oyu8rD5yxtBMciiZkyfp3YzcDpgJvHaWTRWmLKi17jrmGSFYRJGYYqTG7",
  "key39": "3f8syvw3QSzidschPj4kjhoki8JmZUKD34kLZYSB1xuNh7jZCnF9CXQ9Su9LYPs7twC2PvdREGJevCTh5RhoEZUS",
  "key40": "3FVnGqsbsyFUGeCcciNCFRK5Dh2YrBEJ5HbwTQE8XWf51dRzapB4ALhNe3hpGLHp4mNkgqqUdcHS2TEk7T8QS3Zt",
  "key41": "2fqcYaUfaxtWKduZ9zZ1ki9v9BJ4tYwrEULZ9kwaFcGZjoMaprenPMRsmCSoegoJYp2GWBcfYSP6xbnXwgpFZETz"
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
