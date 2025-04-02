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
    "5PaGZNTcr3aaNvvgCGKATJfyofEqQDV1cDwo91aXzQMjTSRTnrMTiyW815avw44hbbJLPLaTSgRzNyja9m4Gic9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eh9EU3y9ar8JbEymPx3Zbtr2sv5rECG8RXVw6jK6PKRFukmRKaR4kvnZL8u8fK3xy5Xgt2DJBdNH1toquuLeEAL",
  "key1": "EjctLu5Z8qtuDZRmxADCLs2T24ZDygLUC1hFTFrBq52GaMGXiU6oUpwLb4jB5bCF2ZbwHT14dAFr6dTVUkbQzTT",
  "key2": "2HQFwFHWqEX3SoKiDTXiagVBmvam8CmYQm4rCUKRxmtyyT8qpa7RqnonPbvoP22uNzotChAMXVCXEfZFsbfMwG1",
  "key3": "2se22NAXMQ6hVyEQvxLaUgNudkCSJwHrMQCDdEc58JRD3Z1sev6R3DVwdNt1FPwtFYdpXWJSyjFFuQTEgARn1KcM",
  "key4": "5qee1xvMmaycje3dPbqquUjm2arBaUj7mP5dG3Kve7ndNoYJFdbtkDxW96JvkFVVgGRju1qEWTqfhsBkaN1joaCY",
  "key5": "4LfEG3VTYXYyaWRgfB8WoZmBaGzfXHXiygwA7iKcu6vM4DMYWXLeiyPEWpdSKC3HiNscPDKNe53bd7pF8E4zpNfG",
  "key6": "331DHAYj8tjg4jHfxe3CaAp25WrE9mYna1mYPTYsuLq2UnLwFj1vCNjWX8i5vjpRQ7KXG7kHVw3UKjrDg8Yiu4Cy",
  "key7": "3htAtUTd7QNDK3LXWeWQGUE41fPghXvjbWv4LXmmaBxPPuaSWcDp8mQb2E6XPXHpjNapcvAsgwFNnYbVaX1rrNsC",
  "key8": "3nSUQXNRi7HPoop8BoRAxA8GYehf8p8mEHhgFwjewknGg8AatDrxg3XakaF5uH4KggSHKX1Qfg9vyZagd6DzTZMu",
  "key9": "3VJFLkZ45aDYYgdb9ie4GEHh6WCWL5Z4MDZWHoEvA2sJwwtzAza3DwPR2L1YYXqKUFEcH16R6ZKiYGYu7PXMPfPM",
  "key10": "3E1REa26PyCs6mNHQc1VNbyd9BViLBFaSxKZhHn3PoX719KFPtZGTu4SKWsEwVznu1zzeZ3bNqDB6FX4XfLScggP",
  "key11": "4cq6KsbtduowDE8rp36ofmPrM5radaEBUbxKu7yzJkUsWk6qMfTGixGvESge64XkPZkapJ96DTAqWdpQfAPBGsyU",
  "key12": "7aZ4JrcRe3hkaFnYyAPeiXyfc4SmgjbnARjebdnSZ28Wcr1iJWpzLx5QxfgCpFzQbnhXejjuLMwqnkfYyUogPgP",
  "key13": "MAHuWr3z1RnasWMBWp7Jfiy6XUMuLzCsN5XfLdfVqFKuih3CbpvmVBs2y5ivFsnwfiDraWqQq9mbE4vQZYoLb6R",
  "key14": "3GqFAYah7TXVhVFkgfajiTtMtieeq8CE6HuDccJWPPm2CZGD1WDTWJoDzkDGevxLU3erGzYFMRxem2VGupgA6jRf",
  "key15": "hLd1BXytG2mNYwMFwqZcmRvRxYBnoJzGkaXcoyXksaBGmyGRU84HAqcV8bVBC3xsJkWFB25djg9uj6CrJxQ2Huv",
  "key16": "3cNkuyFVjsbwC6vk7SQodyLP2V6GuVTgyYfyGKp5vbunf2DG6DchZrooemhXa7W67CnQNAgQ6uYM7Ktrg2jpRYjw",
  "key17": "KD45vfFC69Xfs1TpvV432qXEjacAJ4GPqntPqAkmck39t5j5cTEPAwhsnGFvvuXfQ9xW2MnNPLXYkUu1c8oLB9E",
  "key18": "3oUvV9urtuZv4upd82DoxSoHH74GrV63RLtBoMWk8i74bv628eYJCB3bXZuV417C38Ea6Z7dLcKQPYpxu7ZUvobT",
  "key19": "3K8vFPYHApEBZ3JTNsw5YfAEpb6mVpgBdZUeSA3h5rBh3dLNukibKL3LaBxMrvogDSd3oXqi4jUQ2PbDniERtMEt",
  "key20": "4fiTTvuvHArAbbM1CKDfiDBhNmgwnC8m3zdo5Rjnyinoc5FNxS2ucK56PhYWA1raeribhLHatUamhsyB285w18RT",
  "key21": "3TGgmjcCGqeHHNqQxpefYfXXhiviTXY91ps1VLvzthP452oJKyB72aVatJaiiNvMnibZWhmbGMUQVJ6KCLLKQnag",
  "key22": "5wBhhvfyEhCtGbbShr2HXQPevxr57Fii21ThVdJxi3YXYNAgPPWuHyy5Lbs9eKqRpSrcmemaFqeGLjhgmnE4P2wp",
  "key23": "4Hn63esmqXDodQ3jCth9G3q9h3ENP5ZyNnV6SzVVAahj8TcwTxxSW6SLCQrPWmdHo5iyaRGEhUSvSPwKcnsY41i4",
  "key24": "4Ug9FPqxYz2dC91HaHQZgi7KjWCRg1WmTJriEkaR3nrA5de9PQgTA5w13T1aHP7eFSXyE5PiELH5zggP6g9LZTdr",
  "key25": "5c5L5a99Pr61BnnhYwiVTD84KfMo5KYtV1Gd1Ly3tdGfkNBABqL8vkuhVAkFD8kH9X19VWLsUxGFFQDqbw2h5q7a",
  "key26": "3cotgEsAjCeg38APLQVvAxTPGPS1NaRRLxKhe2Jr9VHVUaGx2aDgrpLtLxyQViK3che2gKnRriXHyVBy63dmS9Hn",
  "key27": "2QCyCv5mWRJWh6tU4u68a2rHSKVNsdi4YHBu5PYc1kCWqX7zSts7FB3FuxQiLrRN7ddD2GfwkJK4TkHyyXP5V3WD"
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
