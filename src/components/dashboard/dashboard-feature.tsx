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
    "5iEwC11fXYAgNg25mFpChQJb56Fy5LpvBppaHL5hmFkb8Zh2wTTpz2t1sbCM1ghGwS3gkbZeWKXQJ6VKcV1qBAgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iFrUsqWuHvSJGHAHavDC8UVQGyTKjFJDAJv7BbTQvpRiD8gHuXBFJ8vic5NAP9q4LnzTMpHvT7hxD4Ciwfms1Eb",
  "key1": "3H77542gik6MaiGDcsZkL5DFf9fCjkXUvZX83zEr8SRe5qqx7tE7WV7fs35ZxdPacRvoKebtSC39oP4XSX3YME78",
  "key2": "2eBC6o5iKVrE1DQ3kWCiJhEKSCzxzg2PZaERtFsrUvyjjkZ35rjQmMG9Xbhc1VCLNBdo2vGPeWvxxTDs11XKmYX2",
  "key3": "3tJSnrmL56nQ25Tpmhy5e4paHHtc2GDjwP2VoKmRMqB2wkKacCFL4ZwvgrCxxhXa4C75SsKD4n8Fw8Tz3a9XGZu3",
  "key4": "3DY4MYcGxnpXMje2fg6t9PvCSaD6SHNEhe666UR9doLbTspomyqkWB6BTLVejQen8T3JP2pa4C5KrY3uFCT9K1LY",
  "key5": "2g6yLNfc5oww3tFWKsgRPpg6t9Uwuo8NTTwUrzSni8KBQtcqgmJ6teX5ZwsuVqMYNpv3WYCBE4Vuym94EaFu35J",
  "key6": "ip5TS6J1Ef1hKiZoWWtCCK5ghsRSsMP4xg2L9Zzn8guScpUJocZh7nPuVVPT3mBw52aVuszTPtCnfgjRsjXV17E",
  "key7": "122YdUBauHBSbxY5oPoEzRsy6fqeGbAQdL5K3waTATGm9L6k6LDWqp5Y6NVcBMkRcD1wy4gKftf6ptQbztZYkt91",
  "key8": "3UCvcxZFYyzkaeu76wVKynwcyhWLMa3r11ZvtjqKZKA39CrvdfGp8ECoFcsjdjfMcHtZMs7VPRi6JDu5YGWgCAmk",
  "key9": "ujX7KpvHv294d6wbXbecq3Kodk2tGE1L6wj8auHVztSKTZh2bUFpX5dN175Mi8ErqKoYBiZi3xusobMBdz4YZRJ",
  "key10": "28CGcDGv1RixxSLqj7eWNA8DyX181k2uqcZKEAJbayXd1TpqMq5a6LSYW9ijBCUiJNq9u6rLB7nsQsAjZQ7GCJRq",
  "key11": "7L3jBoCm7ep3kL75xnEZ2nLGcUUUZp1f6pdhDarBSuYgdtrxcrHPQWiVLbQn9wZuvybHJdc2XoqU8sv5vuPo56Y",
  "key12": "3mRedc3Dgn6q67MpSeD1BXooXJ9pL7WETV2LWru9oDFZqREieLBZYixz8NhwsNQPt1wdUMJKBATzDgtKZoKmzbt5",
  "key13": "3amJfGKQMxAnWxGs7Kkd5RAgHgVQRgmF4JgMCVyb1z5dribAaLeSXMudkzjoGXRQTUcB1MUDmjKT9E87q6RPmnjt",
  "key14": "4poJYYiyhMTH6zAaq5DuVyi5PWBfMUsvwrhWDAi9aLfdRVtA5QUm6LWWmAs6wFb3QcLYBgsue92TFH8T22AUkk2A",
  "key15": "54jcirEn6CrTayrxc4H7TieVCE1u7M5vmFgn2R7AYR2dv6nb6eMe2xzRELcgJPdM3fGWZWHprAkHkZckxgKiMcbm",
  "key16": "3uZwLYUr9swtPNbBuWadMEkRAECgWLsP4q82qCKnqrKxUoV1pgDurQWHiEjtnMLbLkZ3RkxacDG2BifEfwBMAyGk",
  "key17": "3gvZ5Jbp41kNCLMd4Bi5AYezXS4p1Ma2wLiMiSVr7r3wj2ncAE4EWbvrnyKxFyndQbsS75MCaYG6UpRdcm7ig4rd",
  "key18": "3LSbALMJs4Jo2fBXZwCfehkRmAfSwLJNZvGpPtCjGovJe3U33bBcDsdiSJ9SziWMzR49BvtNQ5wddVpReEHTEGCS",
  "key19": "227ko5QuzkgBxMLvEbzqEnBntMrhPuz2VMHKZgTykWkm1EeRsKgyPUgWVfq88shUnUmSLwFuZD49snUcH1hwRu8M",
  "key20": "uDUAD7Rq1BffcfnWbTFLDTsxwQRcPUrdri15VV1Y37LP2nzjkAFTf3W9LfUdTueK7vAc4aGTVDCw6G9QtXpNWHB",
  "key21": "524ABKzwqszvLMhuPWyr31ZF8gFQ2R1sFZcM1dWBGVo2wPv8tgbyAiS2G2YE5VTTHE6p9eZEsPDoNdsK8NRBaY6M",
  "key22": "38KS2oDdSXcKxQdY2Q671YcXNeEtYVvpTRvLj7ynBDtZAhRH37NqGGYduCg5oUTTMHWrTBHiXqXfWyVk3eUibSAU",
  "key23": "3U5A78nMJsgRS4N4HGiMMQYCSTsTRK4hv9WrJTzc4RPeVk5oiP44F5BMUsEsZ2Rc3nVSVo9D9FDaEYPweEJMH1kZ",
  "key24": "26msW8FuicDDzfMMDFdXS32t9kgXnp9KdRyHtAS9bwxYFjszPjwhMYdvvcSHgyBZBns7RS9BD8wfHcu7T17wVNhs",
  "key25": "wvTvW5pGGrnbvGv65Hp278tszQ6XUM2Eo9t4QaUaTy4HA8km2SoQatKkFvSmmYB3PLQWjmNmr8xkFZ6ipeuMiFv"
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
