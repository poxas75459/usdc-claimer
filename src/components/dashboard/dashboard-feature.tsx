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
    "58CY55jkHBHrhs99eGkkoWR869Lcwj9PwiDaXzx6B27UZq2BCcvt1QZCcrGFQychJH8VKpGkvpXF7d7KhYJ4ZHfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpxmZxZVLJRWfSqNGpV4y3xqWvYiWH8W7ne7Mtuufj5Bt9iFBW7BQqjagShcyhk2oFa1Y94GPRZUsmSKhvFR1hZ",
  "key1": "3qkVfLTYLb5rFP77cxPPdY3S7hMyPKF39eJq3saT6E7qfqbkQnX9MoiFHc9JVyx6vAVTWu6GiXdvM7e7UGPZjtA8",
  "key2": "3MRL79ZcRVzQhY8wMSLjd1wWottUW6sXL9eHauxj5ZmRrkrzBkZtrPmZS2fsKykpzwbvyg8BzLbFc79ms2qcv6XX",
  "key3": "5wH3DqC3rvJqY2dAQdFpxaA4LvVmgipkzxTaWbYikXdGrEipXWn7Lbgi9CtLoS3BaVEujNPjJFLBbogdjvJFoq4c",
  "key4": "5C9CRHofq8ANrmETRPB4YBWxRqywLS8WxdSJjEkxPYkREKLo6rCtSzbxCkAbYUSNKMeuuAGpFmJHWkKTiFxTeJtj",
  "key5": "2ZECeaFpGUUSZwpxcV1W5ntL83vxPJ1kF6qyybfKEEke1ZXVBZqssNQmjnbnndLvNpnXM3a14sh3734d2ZxXGRT5",
  "key6": "3cT7xhepKTDNaPpsxCKRdGsnQrjRspnRzJdcRdUWmmMy5N2iBtAoTD2zJBi2Aoyz5bDHkwYLUkmrUccSaxt14kHc",
  "key7": "3qBFjon87kXxPHqbbfMzBqaHRyTqdzUjayHyDRGuipQANZMzcYnthZUTs2sEiMUaKM3NuUhvwDXAhxQTonwQBCJc",
  "key8": "2C5YeCPLBdSNGHRcJUJ8GDJBt1VCq8Xyn6J7fq56E58CwKe4rdQNbdqiJUni5cnbi3Au3P9RE584iuREL3nqWm37",
  "key9": "4wpzXuSdNmrhoAVmRKR1UfaduEpMFwzQasW8rHEYr23g1vbGpicUVgwb4mZtBU4rRZAeAaCrc4k4yg1BKSeoXVzN",
  "key10": "5LnTgY47YEUFDjGSya8upgHZALgXAenhidTrkB1VjAgx8RJ1wUjcphR2QaEeNQRoT4qFCbGtVuXkW7gWhdpMV9TQ",
  "key11": "5vLbgyotSC855yDWhdpEzHnyfss4KB4HFN3LDqduF7iiw396vksfi3r7ZntyKnf7SMzYHZqAUaWZRSVsRapd1mEE",
  "key12": "4MU6vp79ykQj7MAcNRwZr5UJ8WpQNqVoRoCqbgdwjugCtEfVaMZtbj3zySTorxvJYX4vKgQd8BHc1r1dXhoXZWCw",
  "key13": "3iWAHVHLk957T2z3jcZvJDZAXhXvDVK9Rsos9jGuS6hVV8Nq7sGU6KFAM8b4TbSrpDMtgUkZeUGTPfFcVDKFQMwh",
  "key14": "2AmZTQY63mbS8oHGVGEJekhihvy3fWZ4utTxs9f44f5hJjWShgtP4AL9L9CYGShLk3m3UC2J1QfsQXjK6xedLM8D",
  "key15": "3ZwsQBpk7fdXFEo2HD2TQF8u2ZyofrcapL9A2Sw9PVPjJgweSZR3tiCAvxALx2ZziRWAsGfgGASdTFn9FGv3fExq",
  "key16": "TFYFEdjDQ9DAjx2LG3P3t7JEhhJBB3YiZbd7qP21VBAPNrouCCTDDykMceFJDfb6KFYWe4hnBzxPRhqXBMtE3V2",
  "key17": "3yYKpbWr7uY4rtspm52f3cW6ozDXwDZRCiMseum4qYC8xYiHerJVGbh1Uny64df46Uo3Cdvv4z4UKvneTSpY15Z5",
  "key18": "5bYZr2ocDhm6GsmxNC92tydZUAntjK9NfpFyMtNY8FQNNobiTjWkMLvHJhoXhseDEGizsEHzMPJMJdbjnf2ASbvs",
  "key19": "3aJ4qkhBmy6zxQwRXMTnyHvDAYyWaPU6kiZYTiui5PrL4zpZmKySFVwdmyBVSUxXhfCAChv7AAbKSv2SpWQ6MA24",
  "key20": "5nY336QQabKc7piJqCXwywA21ArzfVocSFXFmSvARgfMxLWmdo6MyfyshxkcnxUtwCyrTExCeonjDsFgjVRVkzrn",
  "key21": "3Bso8FzPcAyvLTmiNdUyg27rcaznKeQFbNDpDWeNCDDksjBMWtNYMiePV87L5Vm68NGvwQrFzuZNusYhHccMfhxs",
  "key22": "LTkChd7czqZaNUYhE7cntwL4sFHPkqkbq9TSdd5gcgdYFm46n7HwHuhWkwC6SzTEkRVHsLHNrgu1TY4bwQujwCF",
  "key23": "4NejLNJZBkXuwhRCSUQW8bJ52g7YKQWj6s4G8PpH4q4CYMUS6HZ9n4gab6XhmNq3btSP5uZkQtnGWeAtwMGAXi7L",
  "key24": "3p4JdhJ7RZgRpsKTuGxdf6B77tNFJuGeG9frFrhJWyJJY9nS2Ui7Dh7h98iMH7wmffgAkgZYPFdnosFDg36ACCY7",
  "key25": "5p5JRk54muWuVC9YqV4KG9yVSkqU9tmvy9FnBUaSJbyxjGuXLupnsBPWs5ymhK4gPFXUUJmruAnXLPJEYeQF56Wh",
  "key26": "2kqyoBU82rkWGy253pv17ZEecK8td3mPEDhAPh7fY6MWwaSZuCP6BuL3KCVzcYrdWfUb38EDDqDt6vMKSWi5Nq41",
  "key27": "B458jwevPRMbGbhX2fGbaphn4qhpKuubZpxFkHWcQz2mJ6WpiPNaFNFN8nToKB9EBcazZixNCetbzqHFEaHdgBo",
  "key28": "4S3obPMPfUivuSxKjny1Leg94bJEHr1mchTRaeQY1h7RnWMkWB9bMKLmGq4YdXE9mfoMHkVE5x5HmFsidxxrwDZf"
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
