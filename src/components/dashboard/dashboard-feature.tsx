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
    "4GjBZQHh3CKg4PfQzXpuP7516WGzeRN6PH6yit41DipfYQiQXtQxUaNA2yz8Mo95Tfc9Jg4iEHtAwzRUgyi3pJCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9xg8eCU6nVVrGkFjxDsa4kshjFwC8Qcrhwh1UW36UTUi6xXY2W8GqnMhhJaDeoF2bcJTyzUny2jtrk31W3VXwG",
  "key1": "4XrpjUpYt6spdcGh2W8fHNbSHsz1Pz31hts8TLtsNUGe4zBVXqP1KBVL9UeQCXSCyWUzR4rZezn67w2a4rGBKx4m",
  "key2": "4Le6avcJFdwztsPX7yW5VMX53f3MFt53UmL257hXo5aK9CRLwH2wrsEtqDyXhJS1Lu2nXmr5gbQiZkxLqmeJgVKU",
  "key3": "5hxTmtBpx6FPkwMCFLdD2JF2sFtxQSy5ge7bwZacie39F7Y1cr5f6reWqX7tsSyWChmxaeFwASUYWh9KrfwsB4rc",
  "key4": "3qXcLFHq1fGESsZymnpitYLAWTm1py68goexjAgntNZ5pcWmHp7CWVf2owAmMYou1sn8Y8AmEbd7DDTRD9bSn5QB",
  "key5": "pRafR4WKUpH58PCDL3HRhyEYgqWy6eJ3H5nNSJsjDuQdRKZSDQ2CTeFETmAckLAgwmSHtVAYfwxXyxRWgrW1FFt",
  "key6": "MKSCBocohqj6GRxDCNu4PANLwxSRBry2Xg3zvQ8U5LCioAu9BbxKAnb3J63LM5i9JGgRyfn3SYsrd7F2g5DTQvu",
  "key7": "4SoU1myhns76P68aPkDM9pvUA4tDYARp1RHqF9WV9hBcVGqgrSzqU8tTUMjMogMCCYR5amf8L1LXa8AXqknRTcs6",
  "key8": "jUbn2TK1fr2W5PACNpWAqgAMBYEYXYQmMtj4JkgwVKVwfHVejN3c1CPKEnYpfqTfQTQqnWoCxLn6p2QUM7ncnQz",
  "key9": "JV94w4bhsquhCegfJVp14reky3MRE8GmB1CoTDuC1DS9nUJ6chYpeHoNNG4nibjYAGXBnJCCguRrgHkfTCca2LD",
  "key10": "5adH5amHCCPGJxUxCK41BMp87dG8C5TPBuPkMqQ42xZLXT94LeHSpaHoqKRKARYXDHH3jCZpgogWcDmfy2p5M6KS",
  "key11": "4SzwxJjXJ2X7bDk7CZfeRatEx9tutS2DwTSaxpSRQrxVPEfUZ46X8ERaE8J5f744LmFzydyZwHDEy42CcbGHaPE5",
  "key12": "BVz4vA848mGDestedVq2CByC8kuDMRsTtQmtdwfYDN1LsehqaKQVZFnRB5ew2VaSmA2EjsxSrnT7ecdrfLkb8T5",
  "key13": "Ck989kpVwJH8WaJbeYX1C3PX5EppcyJFmjVsEWCrqE7qHn7f2R3dL19zcFmS6HcgWaiZjsGRUSZx6uHq59kdfSs",
  "key14": "4BiQgnzYvEdza3G4DUSCZ4ueiN6dpD9fJsgpVtq24r8w8BMBS2msa1tmYF7zAS3wZYnTdBLk3Z7TmjJToFCkkAyW",
  "key15": "3xq2BVLTk3A4Hm1wZ5aUHjxvC5SuccKoSHWARwj7JnauCZpqkzFQiUV4qEQrY6s7uHisB3qd86cafADsGRgdUTmF",
  "key16": "4MiERLthjwZow4V5vv9tehezCoQVUZBe8yTGiKrQ2Ue5nJPkokzKekB4JDHpXXLQfP3CJvPcgrKiV85eTyca3k1c",
  "key17": "4Wt4mL5QrwJwzebBhQbkaeEZFhxCfthZUJ3nBGh1sbJDywtNY8Ypzx2ycNFWnTg1KnkYe6ALXH47quWMCtyvRwsK",
  "key18": "2HdRcKunTFk74o1UGwFxQZZoSZSKyfHGzM1mDPoX2YY5cHaD6fyCLNucw4whEwgFtfFcr5hnpjgfiAyjuMD3CayX",
  "key19": "bf1vdXkXqGZKzJ95d92VR1YewfgWK4bDn7r5eqh7W8LWe4bpAcHNV2SZWoHnrSJmmjpoZiCxEpVPL1oe3FtbRpZ",
  "key20": "4SEjjPepSrdQrLqgyop7tacht9gbvk5fPkWUat4vsefBrADGyepxzGoK1XB9CJ3AP1eKCwRwxCeALhgjHMxpDdbG",
  "key21": "3UGC9t5SyhND7M3YRBvqBDsA9LprvmK9kAoEfkBvTApjsQTUpHTWXMnPJxm4VAg5tP8WaY5KoDwhWhx5BLFoah2t",
  "key22": "63724mRsTwfRjGvNpPvNiiv1zFBzoFAny5QrH1zpbCzu4Lkqm8JVH8j8AaBPXwybrsyeyGJCZxoya5wpDBDUnvLT",
  "key23": "54zmwpBXzm4xGTURt8GGfVv1c24Px7eP4xs3prSza4GEnf8j5KrxAQuBFku4hwmxwDjBhaSzcgKrs5ayGMfjVyXT",
  "key24": "66L88S4tFn6244YN9PS6ti2m9Rvzf6kfgCQEVjNsZufnqXW7ob4gJqvUNuSZUDXkqoY3UuV9VRL5yBb599zNVEA5"
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
