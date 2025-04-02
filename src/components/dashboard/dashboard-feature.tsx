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
    "WMe4JFyxFTTyXvdnUYz8m33femhhRRLL9qs1MpHfJ7n5UpetQeSqXqAGG7XRjhf2sg921Gc1TnLS7DVzTmPXzhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fh8M66vZBRjZPQphNGGwKWreoCFqFHNEr3WDuo2DbcpSCRuxJZuexMcH2qq87J25hen5gUT7yKpzVbZh2xb4Vad",
  "key1": "53qGk6zehc2EyBWaXS7nUW8kGFWKJ1fdhx3GX7zv2wAzz9yJFngqecsDgTuYYEBq48YcaF8zxzwvWzP7RFJnSn6v",
  "key2": "1CJa8Syfb538rttekpi4iZ59635CQNRnahWNpqFagKbu6Gxz52k8ud1jLcMd6KrVJr1DqcQ71J3UYhaqAXBLaiN",
  "key3": "fFeE5Y1vCR9oY2BzxLfHTswf8ezWgsdXPDNBQ1eEd6uBQTDA4UcF716QAAnXiY8zntD77khBibtVLpvLbREMwjz",
  "key4": "5BcWgBVYrNoE4xMUyy4xqqwTVJH4uc4fAv99RPQErU2vme3H419w7YQpmGQbFcJgRDLoF8b4KSCU4i4tnUKXTqjw",
  "key5": "4SVX3Ze7YXC82yLLufHRScF5yrXzzrUu5wmeBHsCjJ4hqeN9kh6JydSUinDeXGMYqQZLWaGyXqmvJ7cyvNPb8mBW",
  "key6": "KMd2SbwJbYQi2ChqfQWfVGdMBDePzZSPs7wUF4nWTdQAeFRaFaurGKNiEswFYX41j4XUHLR86VoVymCpN8hUcas",
  "key7": "2Gx8K65sS5MHgunzcQqCa5mKRzZ9CMJ7S4hJLhW7HQk1uxKgCoTtGRJ4r3TdgpHE6hyx2qbeM2gPkM6GcDEQvDzY",
  "key8": "4pe9yXAH7spJjEe19hHZm38vaANK5Tfo2sXZyereac43nkgQ7ZdPJkzEf5BfvERFuF98Y1GgdApEMhutdvvPTCQJ",
  "key9": "3ute2he6GsG7eFCXPXM9L4QcSAiGuZB2EUPHvvemtVQ8tYnckutSneyFVxEJNWxjboc8YVbGsmiWLj9PobmAvvVz",
  "key10": "4BCBs6uwSapnUam5pF5xPCgGnqSNNaUoYeRtFaHF6KbKHPZRQPABh3Z42uvQqFi4md47W1JCHpmP4U5dyiRNBQtg",
  "key11": "35uSV2pxQPjaPtDsABqf8L62iJTVZ4J8KHzQAzg8y9M9tgx8SABy56VGbRao67GA9q6VwD5zEfgPFJybU26NYCGe",
  "key12": "3UpT6JjmgyDw3bfkg1TyYavHYxNB43FpVtFfyVizUz9SG3yJKw1gFSfx525tJNKrp4bGJgUkNA3S2ymk7r4r5yzx",
  "key13": "24XPrbaFGY5p4vz7F2THRb6RfZb6wskfK1APwQ2wkUk15AmywN6iyRUBV4ZJkFrKCoJ53AEhyXz4WYW5JDYmTfEE",
  "key14": "eT8hY6vgaYwvr8pVRry3EBUxgCfTVHgKP1cVBTsm3a5ymMdfcn6xKG7GeYMJoR9vSfcPsknCJE77AbMswiw7XVR",
  "key15": "3PGZAY1QqxRFxWPMnTeBDaz97djtWctcoekHXUbfXwsBKX6at3qiuqt8MNjxBXBCwu2SG1ucKrXCiUXqv2DtNRVo",
  "key16": "4cev5Y2feGTVrPc55GqpTiXv22wSkstkFv8UUJxT9Btji7LgVmERvzLNAh3m45H12ufF4NPVTJNguZayS5ieMSJE",
  "key17": "2WShicxfaoinMPZEYjjD2g3BiEEsvdvCwiuKCasDSxKXokDb3Yzar7Kgb6jRmNpsDKKTf8THu55Ltc7fUxA4PCSW",
  "key18": "5mJxiR9i3HxYe72qtbvcFT9CK1xS2jjZzsGKHZ5GYk3NXpEuu9qNFqrHWgwEegsxxZW3N1hqQU1RRqB7m49ChNEN",
  "key19": "561CfNnwjxmfQcwLLFaosTtStvNPj6jwY7mNdw2wScZMH5pnjeAVmopfMTdzErp3VnNEhmT1LHG82YvQKTGKdcwv",
  "key20": "HaEbAnMZwv8gCkF6HPKY8dc1c8Z2XaGueco4Tk3zovLjffJ6hque1mz5PoteAhRSi1BmcmM22W4aChHVZ7CMawQ",
  "key21": "2y8dFr4MdP1dXVnieRZ8H8SBnr8Hcwy9zWFkdDjy24qPKjweZX8Ja4muFKsF2hAcsCLJDfW6bayVrD8BdcbsFahA",
  "key22": "2Nt2uB4q2RDdAXiAp2k9VBpAojUerFTTwRqY3faiBYx3iwfgBsMoWwBR3LHw1bovTEnPihEqVTDHfYL5bXKi3LAB",
  "key23": "4b2umJSnPwze3YhLEbU5UtDNywv7TUqFo2Bpyv2suotdgBSFFYR1vnRJu6vPZke5uHki27AYeG1BJBHFStzGoKep",
  "key24": "4mVqPxH5fzmVKsKLSbMAdr5Lmg9oyQ1uT1tzzxfjquG6pRL6tEMMRTjgMAvgR5fS1je5kPDRur2u835nKGEaLPVN",
  "key25": "yPUWTC8jGc5oPzpTVTSatRrPM8oRkgzQUYr8aRciZ1rusoKPV8w3nYAkT4a2NYwvXPQ8hFQzkV4oSQHDwuPoXn3"
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
