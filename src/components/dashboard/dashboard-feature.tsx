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
    "4ZUbNmjWsJAKar6GSwjUWHGvv3TjeJ6ZTEBp2RiZ7hVxf5zESjLEg3fhb5vgrSbPZyJDjLGwDs4twpBN6oaVw93d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcp4c3Q2i3JJW3dhfT8617MrPErHW2GvBmAjbQ7RRMUsSzM2ibrSGffMpowQF4ERu6zrqZSWEsh9rUXKkgicVUu",
  "key1": "2MgTq7vrRUSPwcff1b728oo6Smnp1tV4Ex5haExiDuU16bk13r5ZdVawnsnApf1B3EG3q1nFzG6mdzJVQ5UJBByC",
  "key2": "P1jJBtqWiwFVLf1CqrENn5xKrFYuLV3MD1q1b2NomRoTHXZpdDU1BnNsTqTZfsj3ZAeFfebpgApvWKUPfAwbXHS",
  "key3": "3H4UD9FvDnwNd7UxurW3c7c8wXXGzVjq4xNMMsQBnSeaPzxPwkhxhmzqPKCQ9SzTMMmauy7dWUdS8sVEzbHX73XR",
  "key4": "67qNWzo2Jp3AzKLoyb5UczznVX6QWtVLARBYai8QE38yePh9zUy1Dm3BAcdMkAtEYjp53VLyky14xNretUFvCSUR",
  "key5": "JgJGY7ZaUCRwvgp7W6Fa6nemjnGxAj4SMZV9ChUrgYQtoBLuBJk9bt1sBtCpQ85HE4Q1edjQHLispchKYQAVpmQ",
  "key6": "31hHvXxfUAVHvDDHPG9GcyMpB3hfZp9XXFXAdMN4146YhWY26b7dkiTGGHggRbRQJjpCrKsrfxKDuKBSGEN2SgG4",
  "key7": "3Ch782wh5C1Lz2FeBVRUyPUqQP6Lm4diwT8kpz4cG4ji6DFNQuEVsuEKpHkKXdcaj6NLow5LRaKgRYGtpFLH3pza",
  "key8": "2BLkL4CKZ8GJpt3qFaEY1YuBjzCL5q1BuaMARhmqwwT7La4adqT3wedVwoNruLJKcz13Zi7xF3Rt3TnvuNsqWB2s",
  "key9": "TF5dhzMrExrQwRAjcSimks8dgq1iLobgQCQocui3BP3oAMLDcDiVDTnu5swsKPJNxCvfMUdwrT9V6MLwPpELCqU",
  "key10": "vdvzzNWP4qtLHwfSfaxtDVMsKHV32ozznCnWtbKBcPYG8hk47tyqhpTvGv2cjZSFAjxYSKVAZPyhvoUN3zxQ4FX",
  "key11": "8AjLEtFy5DqePydyf1ch1124V5UhAeaknrexSNNK5XH9GdvTAAxAeknKWirTfa9Du2dzqFqtvJVQDks5PV1TKiv",
  "key12": "2LdAofvPj2bqJrbkJvEVsAw3Lp1gCDHRNnMkfogoXFYFJXXbUEtY3Fc3gwwVb9RQMukQ1PdLJY61U4XureStiH6w",
  "key13": "3j3VWDxEBBcTB3r5T8Vtqm6Z5nrmasoakdcZVXQkxqLNQfAHqhqxSgHD3tNjcCPuoP81bQsCD2D8rCUf3wdBa44Q",
  "key14": "36ATCqGfZLb7WQzTYrWirQfs1HwaUDFgyrtX8Fq22LiXnn2CLjX7koXezKDDnuZrLenH7WT7DDY9UcASRJLKrzzJ",
  "key15": "H8kx2oitiqyqeXZMSUouFoQkS8qwVMYaDQT6PAYWgQAHnLxLopiZCfxeHA4JY5uMsYZ9hjQc1G3BJnqHaHdCVyQ",
  "key16": "62bSgyWdZybyMQNQsgz4PVWhx9tVTfw9R36uvfN6dcHBjYEkErAhnsuuFtz9b7PSmVLgnYxqWZ7pjhj6mrDuYozM",
  "key17": "3U5qYrPXgzUfAeZdnh2ScnWBc5qzj5CY3G6tFHVCLyXZjXmptnj1QDPKzwn2mUwowCyheGb1vjXbTjpNWymraZXA",
  "key18": "51XRbWVdNta2NuBYjLbgtAjUbUm5P1hphFQmMQBkEhA3EQFr48hziphNwRyYF67iba78pUy9CNrFdHqEXCbJfLZT",
  "key19": "4pM7nzq9zoSGZ3QDqvGF1RpPSvg2NjW4JBwzzDEjsmYnGYo1t674nwmL9HYudvm4XNPU4xkuNeo2B5b4DvvQ1TVt",
  "key20": "3Twy8ycG14xenhGtyXH4XQVykoCytj651DHPq9V5rAZ78U6SQHYkTBGYZtf6aqGNRbjvezPsFD1cSB31fozm5FrZ",
  "key21": "2WzMfL934p7gdyyTtBBTmJE5gQxTJKJydFdtdXZCkrvNUqwAQ35Yix2vPmS6nCe62gDTpNPoB6EKqK3P6RJcytNS",
  "key22": "2E4aV4yxUiGac4cCfuk9AncQTfWwkLmj9UWn5dCNsm3PmW4WpGJkPVxyJiU1UTmiqh92WgydfzwBY2tvz8BYbTrL",
  "key23": "NyG9AT4xkSBKzHr8gBeexuybEst8E86KeeKWxSCDhS9dMTBLt5bYSKKDikpEu5jH6TwPj5k9LJY6zBUi4awDhNt",
  "key24": "SKAFn11ciAxv7et5SXh4DXLaJt8SdQ2APoHtVrwedKCd6LuLAsqQqU17aYz68Ph5maxN3MW19Tft4q9soT8wzDE",
  "key25": "2hnSC4wDr16aJ478VgwrwJ76m71f6hFiw3L6Age2A2Mgh78eeBukoC4kW2oN7kMaXhAoRoRzjJbDtwRHWA6Zfnb4"
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
