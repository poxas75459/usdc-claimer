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
    "2DByKoUTjdqeWTJCkKxWaGm7ZELvV8VzfrhpdJA1jUbkV6NnMZwcWUQFMwPqYNEwnBX8mt7kqC1xNGxTJ3L6cJ94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBjQHtHKQeTTXjBaAeahGAPaXVkpxBKbANbeP3qVhDK9GQVwJVqbuCa5UfD5czVHAc4y5hzwFgTeg6aPQeWQwkd",
  "key1": "3ySyu4mgbojjkSJ7TqfoCS4TQGUwASumiJkRfh8vUyXhv5v8dweewFGDo9eCLodhhDyQDvJpRGbQ3NnzR4LowWMw",
  "key2": "3kxvXmFQ59rVHCH7ymQQkyf9RUCRTAdZCp7TZ7KE3VA2mu5mcGkp3WeaLSKZqbeSL4JxeyNfSGxZ7JwNvvymQszA",
  "key3": "2s9wCNZwaUiHh14FTaxkHMSe92oHczwZ1vMVVaskmhG39udyxmVADwP8nfkzBKBtTk3VEBRQPXX8vdzNzwzif3WE",
  "key4": "67TUd5E8o64RwbFSy4mwXrcuLbLoaoJvfAKRG41kWJvfwcDryypZJhua1hw2J4p5tgTYvV7EC42ZtiSqRXD3GC7Y",
  "key5": "51AECrAR3V3qPHmJfVfKMpPfpMV6i6xN6Xbf6EvGUxcq3pta5SRVa2e26VWx6ua4UwVZzPbynUnEumwungRX31EH",
  "key6": "Tr3qcpnBCfYWDk1vRZbU1SD4FV3HwhbnFKLA4oFptDhTpSNzgNUXov1uDjkevh2vLimC5egJuqKq43knnmBjC6a",
  "key7": "5YfqLm2teBhHDjLyBxbaYR7m74h5tP5obybRt9C1aZAV266yYkGxJ8oAvvddPGbVVGWw27KNes9DCNVr5rbBhQgG",
  "key8": "5fpavhKESDvbjURtn2SvFsaYia35bJJNo3FavtHTg4M4XxJuHJNbSXhaRXiEY9rQa28gLT7HmSStWLjQVRqbCaDk",
  "key9": "4RHoXWXpztdWCrA2ih7yhDZccCJ67CF6G8AVZCRrFyK7xmDHbpwjAKQ1kHeEaTqFcG29yLh7v3su3GDXKQBJkbJh",
  "key10": "3njHk9CGA2ZLgsrmQF6tb4V9rSsupbh451i7DHoP87FRWPtSmkXkeoWrpfNq3kjXubisKhoyvX697Hmmt7UcwCot",
  "key11": "2wELEiUDNWiLDMg1eTcwDQLqWwdWD37JtRhbGERWsLEJ6hBkTpyYWXizQCAz2mRQxHwpQEvRdzGEsCxUiXwEWb5X",
  "key12": "7Ysf4EKtkjunsvxTmCfHNxAK2yg8TacVShzocMMjZDY4eFiKdd9Hw1aoefvL7sYRKmU2ATPJ9nESmWmhDngWDAP",
  "key13": "429eRhFWNMjcpqZPWBhLvms3qJgg15kfmpWBv2ZMmuXN1gqT9gA87BQYFiW2TQfWNJJVeSMgDL8TB2rr45DRhQQF",
  "key14": "2KnyeLKBX3M61fMnVLtA7Tz3kD22nogQ7k1Bwm9ZAsd1UTNNrmyieHf9rACmFytJMR6jQoxY76kjR6n5gmWV9pt",
  "key15": "5uWARGHs5sYddNVBdZzp5wbde6Sr7wJtg5i22VevajPYmGE52iWpawtyXGtN3FFSn2oouYLWwXmNKgiDeDXapurf",
  "key16": "2VXBDGbgWBB1G3FMpUZAERmpXAnR98pEFgVB1zbowuWEinoR1ttqYHvybUmty59FQFvvTrDWSrLcQG8WCVbXW77j",
  "key17": "jMrjP5tos8zQ5MXjmkydBgpXemMXWM4qNf4QV9mgVSjeFZzoWZPNLTADTkFSXtdBPV59ZadsPfYL1o5McL8BFUs",
  "key18": "f6Ge981XnKqB24TuHKpNd6krq5DWPz6YtxHaagmAAiXuX9ERUG4Q7K43vM1y8Uc6BkSCyY7aJD8b7FgsP354Qzh",
  "key19": "2pFUXKQqfJwsZiuSCBxWDrzG9KpZV48721agpVzQFu4PSRh5ovSFWR7Wmx2fQK3qsiSTkXZq93S17QDPdezVzm2i",
  "key20": "4sXuNxsnBng8862AMAesjU4ujtQyo7TeWBuwiZ94oaFh2H7SAdyFf5v4NzMgLwDHxFReEEjGSS94bbmbNKZF8Wnr",
  "key21": "3QT5netBMt4Nft5W3MyoUxRQ2TP44feGzktG1UES5K3qp7s27ik58AP6VvraDss29EQPzDjkJW5Gxs1JPCixKG4N",
  "key22": "3GwbWtoY4NFoHdggCRAzwJbx3YPYmRFEtkbXhDP8UjVsbxKvpNkaoXzb2VmBTMhpSS9Fr8dTdEsBWwaju6MU4TD4",
  "key23": "4k1rDQRdxmuZQUav9eK1GFtgN8pWxsvaARiyrbsHb9YVj46jmMkZrF9U25ihFsqum6MAmaj91m49ayaKQ2oEebv5",
  "key24": "4sar7ynYQUUfcjLQz2DhCcLTbaFkQebjNhB3kcrMpvhdVC62uaaG1CgTJfXZNZQue392LQjTpYEXSuG3DvV1cEgc",
  "key25": "533EwmsBLH86iuLUU2QP1szK5RaGkFaEfr83uV4yk1yvZnC4RVZo7HLj1zWAM8Tu3ppid56mgVGT7KUxxT9sSeCC",
  "key26": "3oLxr3pbf2fKU5zeReuPLrGhig6TKtVcirbATcsMxqiEP9PnvtHQm97xk9YErDKR5LwK8vWf2SVvVgWh6Uhosxj5",
  "key27": "5dJKPvVcncUUSMxVSAvZo6UZXWcm81oxxtcDfEiniVQUENGKQTzgs7yhwpmvBAJyDK9QmCNutJBDmVqaW8qFXV6E"
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
