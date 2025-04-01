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
    "3ydh4VRYEK9jtCLdL7kbuKhPtTb7Gw4XMD9NPabbEADHVxiq6TBkcMm1DzSgBjoooNGi1envMtrTpmwG5YezG9y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYADVh6NYYe7YJ4zmnVYoMTvPyoE5K37BSNC9N4qCoqkvLRih3CteWFGVnctnsr9saR7Kg9nDH1eeNEmZaNv6V8",
  "key1": "5kThfe2Dv6acmw15piZvfBi9Xut1FAprAeDnQi9rb2Y687MGhv6khpJweQ97mbc9ZaticpTP8z68FSfuHyw4EEX4",
  "key2": "42FahUz7DHCUhfHYW2Z75qatLVpu59VnFJFUVmFqh3gsjnQF5qr71M2BW8nyyYC7KpQiHG1kjd3BjWktSfy1ES4f",
  "key3": "5yM357dPPaejgcDB2yPXXfcVqz8oSkszX7eoAdRxZG1Ftm7bKHkNMpRrRcWm3UEN7MoNqzo9MzQsXTMAb5V9aLbD",
  "key4": "5jijdzna3qgZKipSwHnBVMLD5HiApwKg2SnSdkrVKM8wvyLSma8K5fyXZtbg9jyo43oixyCw1Gnd2cc6sCjwUsdr",
  "key5": "3YdHCCowhGNJG5GHK1vY5gDnmHo6BvFmfNJRNr7ScY6NmJudeVgVqTcxWF7Tr8t6JgvvGK2UiBFhWXWVS8rpC649",
  "key6": "5rFKeYcy8W94N8NmiEjhKVr9tB3ee17dmTkSzSPGRaDjPPhcRdcLRCAPMo6QAHDpP4tyrcdGapRmBYydorTxK1ym",
  "key7": "34pSi3RfpFtUy6yyHkeMEudk4yHxVV1eVJr4hCHoz2Eu38Hd2TCayzZhHa6hGtfc5u3i6kWPT1fzUcBaMhJWkQ3J",
  "key8": "3Gw19TvYPqmXt9gQ6n688cq1Wdw9FmyETbRGD9BtwgbHz6nSzaBW6fhGmK63dvgQSkXz5qUgN3Y5p1NKaGqv5GYx",
  "key9": "3LCm9rXfwki5CDt5Eyd4SWQGokKx8cimHcZfSfAEHtLQGynDNmuapdJwjitbKhGDZrThZkZLH7mcbm55qk7ruPXM",
  "key10": "5KBSCgegw6tWVmdBMvQNQKLPt8cgJRp41jUP8ST564WTVF9VCAhktLzWUh5DmKYYLQNWmYRHsXeSvGzQefd9jgWX",
  "key11": "4zwZfW2teAUVrEJVwPT1UNNBDMnZJvWtkFLxiV5G7CXVmv6Lz8WvpUMyi2msFWHJsNR2phhPERQcw7RJhucvwnCq",
  "key12": "2hHRSgCXxX9DeFjA9boXW33ihScfS5egFEE4kk7z9F2YNdaHrQK24JRdTWV6d9NpQfNRFZVVtVTF6ZvEBV26jQmq",
  "key13": "mjfFeZk5wjfWkEpmWtPCVoN3VTZ7jW47Yq1LpDHwKzRKmJ7sk5AiG3yxt28BZLZsW3LAGyMdRkDTKyDDNptivPq",
  "key14": "4AemNXYhk7NCWMGLeP9gHdyyTqCe1xfyVfdgE5p1d8UMovD8zL3sELLJNkR4mYNXpcd6zGkoSNQ6JxySXfHobCXk",
  "key15": "2GRM5iCe842uatH3d8dnMkkFZgcF9ABHkiEmFaoy5RgXjyA8osMbCAkNKCMbq7KKrJterbmwGHSnmqS5rSQGzfhe",
  "key16": "DNNMR71wd1QG6nectcyUr1ioHELQsYCq7G4DQsPVBDBTpc4i8fQdJuNrY8m1XhqUk8QU5Ado3DwQxjtrBYMpk2j",
  "key17": "66g9BQTvAXewK8j9DsWKaEiApf2ZXkBsYpLJhsLW2HxFiMuWSMFDruM9BxJMgxydUkcrm9LLDyv2JXtYysXy9rPA",
  "key18": "5tXrbTggmRibHFvpv1PB1TjKbFuygQN2QBJRtfN6pLT5Xz5XwvqtASt1g8xjG6sPFCtEYAxuvQLagyaVVkPQtMUA",
  "key19": "4DQnP23L5Pg5dQuPS3L4K2B1fgZptFRed8z3AYQiorDYZ4GouPPC3cWv3PpBnND8VANrMsCvyXcxX1oBbLVF5DfS",
  "key20": "4mbCEFYjWw4bRu2Vfx74hhRgEc2FrHYM8zXLyC72CFU1K9ntyR1T5RcSAbZa9Ye2BUMg1ypAcqLCWTvoL4JmTmjf",
  "key21": "Y7cRRtminigHQD5QovBWKY6HhMee2B9yqGKYmij2L2Rua3UzxTxNG5KDNR3G9pEEZo3Koafr356atMeSXoj2jGQ",
  "key22": "3CQ6b2TN65MgYLtySZnpwkuc7DuAT4YcF2JUeGzYPVoUE3cDVx8yGrsik88mSfvmqh6Ed4sHBE4RbPZTxydvySD9",
  "key23": "67FY6gP94oyrcXerk75Yn9JpXFDA67WHDPDMphyJ2uNQ4qzUuJ4UtXePTCKpXUH7mKwHZoKK8GjCbeg1SWeLHTKW",
  "key24": "3fBhtqavr2zxgy64zL5HfoFeNjxoktfSoXNjUuyfDCnaXkNK6TqzjwwuMRARd91FbJWDYkFXfpA75aKeEpc2Ju4X",
  "key25": "5ARtXNAA5x1GKJS7u5uV9K7oQ54UjF3ncB8oAEog1tpziQuDwr9bavURn597B8ipThQq4fF8pzuPcJKgtxcVwf5x",
  "key26": "5hZjyyKa29k3wWFbXYNSDQY1VWoNA4UjQ9xp2ZCGfBraEcj7Hs1eJkspJXjHdtPz8RMdDgprrXBWupS9wmYEpuPg",
  "key27": "22iNA3uhZLWfv1HPdxiTeeomTgiw4VzdUsGL9VebDvLmJseuYh1SA3zQCGha8q3cXQ5D4xgXgAg2swrQowEW3xnh",
  "key28": "TTpHu35FMa37Lkc7w4J2jSCyaTDT7hAGsMq9PFb2KzSsF3B1W5TUic8VGVmZzhMbob3FNgsScgWQxX6mV2xbmXm",
  "key29": "66oKp9jJZUyWUpG3chuwbkQ2dWTkRckY5GR2guwfJbedsoCa5Enef3ZYHcNLCF5PW9StAWMg8HzB28NNrfdNnFQe",
  "key30": "2YgCYNWghS6E54jmMnA4QmNod68nm4wdLRfRjrqzUMSVcGbo7nh3bwWznJidfCEmYi9To88qy7t9rX8MKU6yKP8h",
  "key31": "2pkc8GK7swg8bSECnQuMucb3kEVDiXSCxXELFY12PHGcp1nhFEvtaKezqyZQKF7DaimmuGhY8xybPoSk8gKuE6Ff",
  "key32": "2EuHMtxHuSZ88q2BwozJFAjpAYCNm5qfrSCzHewj5pVSu6HVs3xbkhJMwJ66ZqcSwNdRWkkFSEsWVCs7yPKEUFPu",
  "key33": "2b9mikrUQgKLj7mrEV9zbnVy2htrhdpZccQGV9Av47paAoYcGBfWYPucgtstjR1UyBnLaY9miFYGjAV7CE3zfvrd",
  "key34": "5MQiLZFT4wGg8UWaJrHKCEAUf17rGVQahfSKT9rxKgthrSdcHVaGaZjkfAur5EyutSJqTjhFWrPTPdjB91jL6JPD",
  "key35": "4Ee7fRYhKTHMXassKkPcAQztxn1WT4afmRK2UmR1hv2Z8FLMBBLHh9uJvRpZvV2BGzGnEaTX4ss7667f3PrAtByk",
  "key36": "pLe2MpX89mE6foPokHGGCBVLGwc9ay3jCquPFCZev6moHRHweLSYWyvKbxANHKbgq2BxvMBcC3QFJM8r7wCsiWw"
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
