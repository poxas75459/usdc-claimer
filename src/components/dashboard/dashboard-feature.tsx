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
    "4wVcjsy25At9qEjWa73La5vAuxqiNJQX6yaejQ8aopkBBM8qZJVNSb27ofKVcY2FQpsNuBeP4fYxwQxbGkX15LJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "neJTJx7HLXqfgu8H9DbUph6Tg7i84geLhbLCNpkWxAA2WoZTZfao2hZWnicHFthnRc4zjpo6613nezEJNa3Afn4",
  "key1": "2qgXeZ4KYUWC9t9FKgZhwY7JaXR6QTSatFwMhERhM6FUaizTRmzkn8ZEZMySoCSwMp5mDzWMBwQNZnMdq8SWRfJT",
  "key2": "5cXdM51DbE1smAx532RFn8TmBUtUxAgiNbk7bKvvVdxRj9sotpWddxMSNURJiiHrVCQKLvUnFAD6VNjrTMHHMC4r",
  "key3": "2v5UyqpM1bJdYHH6eT9UncvswYqZJVQsSCYVPNWC37eb4byM7EQi3bE1vGDvTyUF4dmfQvoj4KfcPcYHMfaitrpN",
  "key4": "235f6WNhukaMDSMSNBDME5QhGyhqobg4Dwrfn8Kqb7PW9ffpFA6WEeyHag28GcYowmreUjyLbimsQD53dtXFdseD",
  "key5": "ciq8fQNH3dF5eZQELy5qpPHpAUjJxGkTjpKy6UkAnaXwfABpFE2R55CqYHcWGsC8yTwxDGSMQnPcvJTgfZi8TB7",
  "key6": "SUgCkzYNYyyZEMVvqiYfkTaUDQP4u6df4z3Nw9nvzeozhJr32VuVUpRWFgS8Smt9EEqH2H2Kx2fhzmFr8nsvjrz",
  "key7": "3t532LBDgTU9yPjJCVKNexAY81LXiGRiqeqdrgVimso8eoHWpkckFj1ryq3r3hEGos1ReMBommqGHPggtoCMg3Cf",
  "key8": "3TBecs2qdZNU5sQFjaEQBSjAD6Et7r29xVQdyrdTZ4hwcDxe4rRc9LdtmSu1NUu4yLQdXJrFcFdZgSkozZt5dnGm",
  "key9": "33F96iegBLazwCj7G7S3MY84oYj6HNBhBN4VaPGswneeMUiZpmQtfsLQt8B2FqmJP4xWZgUeMwzZV3oVA3QsZJ8K",
  "key10": "2vRm5HXbT7FjL6qLHEVyQt4rVeCmcAhui8H14NGKgkfGbKPSVwp3X5F8RihLroXLt7ZB963XpsS3ZBEPh8TBdFC3",
  "key11": "2CT5Gd2LrkUqx477toAjmMtGshBZ9tKVxhFmGTiMZimASwqMHfXmUR8f27EB9xsWrhf1hmG4sooDdBgeYmND6ZwE",
  "key12": "4WK9o5mn5D77XBnu6twENBu1Abu5rCko9eDCotiL8nWKrv9WdnjFQpX3SH2eMRtLA3rMEqTs38PR7iAyF2KF98TQ",
  "key13": "5p3ut3qX5BUPPECghydKXdKEgeqjEPc1SJz2jahYCwvEX9KNxED3LmXuS1NMLVSCvqEob4zfvnQ19GQ9S2EMVUTZ",
  "key14": "37HiaaMfS8ZNzjUDSKsFy4TgKkb8xWYEhpZ4fYQg4FsvzERe3Th5jo1Q2dXpaRePtmNPMvmFk9Lj8zh4FTi89VFq",
  "key15": "83TWEuJZmqtgnwx1LV9eZCo94H2EwYucYPLDPoRtgjyqgihYEidugiEz3z8DpjAnGL5DVgdRkFsWU2bJYpjbWnN",
  "key16": "5czL3RG6VHkSGb7n42pmKmd4PufcEWzHGvP6SP9zF9tsg5sn4mJBKRN3WYMFX4fjCurNn6HB3MosnumcaBFnuq3a",
  "key17": "viRH6EfPtLX2DhiGQAxijBTy7Fe5cFdMzC71c8N2RL6auhej95G1Ft4enPLBKDRumXGaEJukZvVai6XuzCd88vN",
  "key18": "yxir518YUCjFpBa1TSqvzgr49uo2VpRUjgRwtactEujXmAw6WGeUT39yoY5qJTWk7Gm5Bsdf2d8ftxz9YfwXNwd",
  "key19": "3jS5jWY4udjNA2uLqYXjwdTQeDPpcUUXmN9jnttzkQPwkkj8k47azPK2xyaxmqce8mr2J6qu3tFkJfzzahVdhkY2",
  "key20": "4wWfJdMWif4xRsVaNWEuF3BL8eosfM54qCR4aVfvtibZhGzhd42E3UMRzaT8wJG8BY2KBVvLHUonYyc4vJ9yzn5Q",
  "key21": "3hLiuMSwDGM95dRotfwEVNE9iX154z9UWf5kbjUSAWQva1SRA3ysGoiyVYkto6cAkAxRoCmdypZKcLmfpBeeK2Wg",
  "key22": "3EzuPtriSwkMz6fcVg9VkFK8pFCp2i8oUA1AE9yH5XsS75ubW5zp383CRu7AS6noUHR5huM5vUaZudNLBRcmo5Ak",
  "key23": "3zdEsPNJMeiepGEYorG1SPf3HfofhSAFVm7eXCsGkTVZ4cGEENg53xXbSDFAEjpVdPQZkFkgjiqGSEU1gjCJ32ZK",
  "key24": "3uLjN47NYWTtp5ZBz1bEFB4FK78zTeUBfUpSSP4aza9xB7gKQS4RDcnQJhDhVi4ZAR3byXiBPsZZvRUAzHfaNKww",
  "key25": "2TD6d8Mi924rMKvuy44AWyeri2wcXgVgCfLfCqNLMJoJtn2PSkQXWRYJR2wsuXv9vmzFgZkSLEC3XAG1jqf3mNmM",
  "key26": "2TCUkdDRy5NB9c6eueTigUaggcSM9XjSi6Kgt18po7A6MUAqci9ye6xGK121npB9kymU73GL9NW5Z2fzM5eDZSVH",
  "key27": "4V4Mah8DoHvrS22NznEkkGubLq5idtDGeuASR2uhXt6ZqAwasiH8aqEFY5od2QcW5fgzY4H4sUJC2i2Vd7PkdJ5e",
  "key28": "gLGtc47AWHz5MFZTinoeurnNPCCRwVKRPN1A1g4fnfVx6y1Rg4cz87W8fmCwANwFwdLHkggG4d4CjqBNFyPkoWN",
  "key29": "4nj4pzj7u8KaXjFKJ2TFXUrDMxK39iSy9apGyBxrzehbn8Wfg18D5FpANLL3yAzPGenxsei5aaPXouiw1CaedFLM",
  "key30": "MuCA7Vc6nAQXbc2VzT4YysKbu37aTAZY5vPSCK37nHzHhm2mWHkYrH9NCj1rV2kNZBMJZBFWiR7nTyxp5biaaSc",
  "key31": "2mJNxP5gNDgyvYDAeAMDgSwGuPNVE81ZxwXfrmJoSP1sCfqrP6ZShwHuS83VGS2En15TKYY9jSmkrC7cNYfP3U1C",
  "key32": "5LwJz7S1aLNQrA1iLyQPx6qh9TM1WVUYcttLveZ5cm1QE1BtTibcM5xNrpT2VsfbvKDxWfoi34BZ1y9nf3rs1ihW",
  "key33": "5BET5ULANWgU7pM4opM2WnTjwHeowqoFNXpWshcGU4rmZ5ZPw34XfrzEm4CdndR86NA7eFfAajtFqxay9dgdL4wZ",
  "key34": "k3RHdunziKRpa8Lvc326gH1tb3wYE4Y7poaYXMEBXkKGtBavQTNsHUigXyEKPS8JqbD1YdCnhQdtYC4HWBPVCE6",
  "key35": "4Nr7ZKdgiKA4uQj94fnGwYHFa1ijzkBHsU85b1i5yh3oCPsgSkQpXguAzoMkzsksX2ibM8ZuyYUPYA9LJ1vuURpx",
  "key36": "5pot8y11d5NuaSAr4JECzZ53s5d8mrmftF7VH776oLFsbA8bhiXaPZ9FNEU83hrfeNbYDQBxULUUmSzaYqnQBKXQ",
  "key37": "5R3hQKrMfM5fvQVM4yfyCfJo9WPQ68uCgCK8D1qHs145P8UPkFa4bsiNsezA7o9ZepDhGXwsPvAyHYDoaCo8UYPS"
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
