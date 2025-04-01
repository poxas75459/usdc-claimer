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
    "2FnEDyMjFTjdD3t8PjiUoGBu8rnVTg8su9HjnXZBGdGyLfmTyz3msCgrp4S5HohM47aKpxLmVuBHZ5cPsn4mwmw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKTALujFanBgPcLG7mLoGx2JAPS7DnEKRyz59H2THb54g4vkYYNSsnjuhNoLRaJF2ZxXt9dXoeKqLpUjRmCHA5b",
  "key1": "5ikJT7cYQYCk2W31q11bJAh1mWHCG7ACdGrhHF3TvjMmoDB1zf2qVX4G2WR6FHmmb9iEGrRgDzwz8mpH1zSM5k5Q",
  "key2": "fi2dtMmALcobgmPQNgG6kDGg6G4b1XRZyvKdY8ptpU7GCFLkRkKRTpJ92BkRFcdkWv2V66JTz2X3Z2NabFpHxc8",
  "key3": "B2YCi63vFka8cj6j85jUH8xVkAQK2ZuWGdZxT181BFaAkSuMsfo11ViXtXoc9fX2XrdZ3h5dpRf6S4jsTfZZUTy",
  "key4": "4vUD14Fs2FS8wYQdS1HSpigZgXzRbyS1sLNTqvfTxRAKyD7H2Q3gofrW7j79VhGCgBLjXy2wXrZHm5KtEbuXU1R8",
  "key5": "676Exg6KFdNGgyeus4MJaNLAmkkWvFQPWGr5WXBCoAZPPkFFwVVb1eznXnJDLgRBhbHbXam6hgsWyiBGyNiXCq3X",
  "key6": "2Snc2CJhxVneoVoNyKExqHoPnqECH5xqgRiMMTBuTBz9vZ1N6mNGGfXdWBPea1yFhfh1YW913NUf9DuMkrbYKj8p",
  "key7": "39pWPK8jeahGrwrqybnZmSPRhYnkCATM4xwUi26tsY82tbNddhuBAFDSoYTzF35XiHwjgq55XbdjF5PNbS8twxyx",
  "key8": "5VfcN97asqwvCyViAYtsa6MGamKjCbYRXigJNZnS7M4AykdbqqECuqq6UMDnxnPaXRvoJqxGoYU2TBx2Dnr5jgjQ",
  "key9": "TZgoUY5h51DyJhkF1bowL3TUKEzajEdQ5CDxJKEnYPmLWe5HEGo1Yjvct9w4cUr9cXvJe4zaLwF9ho6v5eW5Hrk",
  "key10": "642FEH4LXjiakMPBbAfgYE8GASXtA5ohrMGC6fRpobN6Spc5mpoMLdLMWMfCYEiFPq8ZGv163qAkzZe49PCUUSaj",
  "key11": "5d962hd31CS9h4CW4dyYEC1bTv2cZPX6W512qurNjaZrHmp6mQFPaDadFe3GaMZ6v6u3RpQgC6hU1ZHDcc1DYkWW",
  "key12": "2Y5m4VUKSNyQaq3rZKrP17BE51SEa4qcPASFrNh98eF5QxrDV5B8g1DkWgeuzNukWosqvuXVvgKPjWuaWXbcmoWj",
  "key13": "2be5NFuf2L23SqMMRagTmyu4ddKpm5cExvV65V6LiiwjwobjyfAkmPBxzuBjevKsuytjzhCTY9SKVKgWeWktKSV7",
  "key14": "cVuw7b4Gjk326rp5Ty1jmJcNUHZA3antkSaR8ZvxXfW8pP87yE1FoQPMVZXiwJ6jTDBF4NH4pwjuSEnu3gkB6XL",
  "key15": "eQ7DUjoSf988VN8zG9ankUkRjrTNN2xzcbnVHTPzkst59guZ3qCnKMSNxBtggsU3ENr1ewBgr6JKZqiTZbZNkTd",
  "key16": "3uyw3qnMGGR7Fa1hYCLq3Ex27Ggrjzcg1saa7zQrqNJYhpiY9oVqQAQ44R2YT3acMUUUbrZjnd9DdHYytRkFfTcj",
  "key17": "2JxUttCEn9tCvS7kopk3LHe2QPe1v2zrzamkVDjGdV6TZeyi4WbVgwCBPLwn1tV1CwTXFrqZ67oGLtjwA4VUgW7D",
  "key18": "3g9ZLv6jehaPPGqqF1JYSXMrS2UCANnWNfr372hivPH2duDNq4sPRYkmCiYs3ZM9e4emgJsBxevYb1Wy2wypbHvu",
  "key19": "4GtnUWSEmVfP7My3RFGNUjXSE4RXJTtPAKciD1iWNXmaTnZJ1WHbbJxUbWEf3Y4TDT6ZjJY3zBw8u6V5iDmks1F5",
  "key20": "4Lzz2TmCZVT6pEsHAyRELg9UENZ91tMQJvCufjqjNVbydx65gqbgsXzuo8FB2SE4KQaEPLDzVADcYNrxpVUxf4DR",
  "key21": "2SGNQuVHhZSh55YXC4xgXj25enYaYsWhjSv9zG1mDQLEF712rUqEEvHmnGp6PaMPANru6aFuoxaMJ4Chb7UiEmjy",
  "key22": "PUX2TdUjs65a3sU6DLcvWGqPMWBHfhFkwYvyamwZvav4DE7AS9LjcKSwbeC5poJSg9qKGCgUiZ4C2uUeBede5Hk",
  "key23": "3RH6fyYDCzFw2eooKcSUERggTjpKhbtfT8fkpmtwa4MykFdRazTt9biKpCuK69kognrQphxPPAALsLBVPaPFs9My",
  "key24": "PjLEerTkB8TVDgyzQvL6FKHjZqiiuqKFN5KNxjfJxTy4pUPW5k4NRk7KEiKdLF9SEPLs8jiHFykX5Dkx3PYw4GS",
  "key25": "21jWbsZ2AeYPnK9vnks3R9iArMYTitwfqLDgaCowWWHBD15v9S6tWEJRrN9SGSkbKthJDSzXPm94YiyN29EbV5A2",
  "key26": "sqiTsYuHzc77r85MdzPmt8x5FybUfLgUvb7EnGoW8usghgcMLQToSPPMaXq6KqZ7NhqdT2nygJSXVmTcWxeDo3o",
  "key27": "Cmv6odRrHpNdGD2HT9HJXEALAx7B1d8iYS3Pwcr3VT1WxzL6eNLUhCTqDTew6gc1zgqfC62zxZGoBBNapkqNa97",
  "key28": "29wvphB4gRSarCJfN62bMSpjowFUn7Z5AekDN3njnTrJZZG3gytzyKUa8uzm9CoVipyHUMLkMG5MaeDARsZkhr3D",
  "key29": "5qAtxhsrKwMhofBLWWvbRVfumQmHVhz8Hf5AGGP5txdQxCbyqfV9GM333XXG1KQsLLWMeDFFpJ8RHkLBsfLtiB1a",
  "key30": "24zLtbQsNFXhGQ7RWNEKXSi6QhFe8sNhxX8JeXzMWqPxRfqBhuNkHcC1rrhruBsUjqeor8Hjy9ZwHba1sbnZfLio",
  "key31": "4yJ6AbJA5XdryQKtYYJkuRJLV1TFpAsxxGT9nQ6sT9i3auPmaNWA3B2j79Jt4pMpdjLLwoACENJmQSF8kAvu1YZK",
  "key32": "5irhAy8rFzoQSzeeroVPvRyCSy9J2Y7ATNArBGSek5W7qt3ncPNXoDa5C6DAddyD7m1knZsFMAEoVdp1CUmmtZr4",
  "key33": "3bJhhVrvVFpmDr7xfyvsgB1evPQPYywvahRzzS1QrNQ1LHNij2EP9YExt4KsUYdsk2nYsFQPUUZnAnqfhFLtfJmx"
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
