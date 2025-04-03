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
    "5NcQn2Ts1Z42gfnjHsw3KYR8EKBjtASgSUZ8F9qLDx6bRYoyJHpcvdMjYNjdycWV3tJMGoAkUuewzWjJjz1K7Nr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJMaMco1TkVS7vBwPFUXMamFccNnVtRKQehDm1qN1FD8TZGb8qzff9hWffSfCpa49Ufx2B7mtrDFxtgCrcT5syg",
  "key1": "5v79WB97p6Qh9H7g6spJPs9dnkVSUcend9fwzaENzRBfaYGsXk1Gd2myB3Feni4ewb92hHjLAGwPMgB5v535krTY",
  "key2": "2fkJHGzA5smVd8hSrAShm6VNJkhtKr1q95jCE7CBGn47PUgHxqe3JtF8XrRCLdMiounFhCza9HPkPQaBbBXsevJ5",
  "key3": "3V1gx3rezgbAKqNYLbsUiZ6agtKtFaWqtfkustuA7LNXJnDfrT71BvZ8ifFr8PxpKDithUj3TSmE1Jh23UL5Gk84",
  "key4": "ajmeZxJp1oPEYYAckrtzWLWgiUoBPdcj436AN7MSfioknH4H2zHCcY9WGHcceyXgiSMuafgj7GhY4zavYntTi89",
  "key5": "5r74RRTHqx9RVDPdBP544b4Rb3m1yLPqmFPdWtNY17nSB2k6ivJeio7J9rGK4E579a5HSHXURoq3M1shGbsJvxUe",
  "key6": "3qDoADSwPnz9oBkhVtCgJWD9tbRHPPXCDqmcK5QZ5NtCujKG2j76fLdeKVNsj2RkpnVZpQrFeHS3NzhZjfXT1Qvx",
  "key7": "22QcsHpmM3n5JF9Fb5ja9nuomqPMfDedrkjxDwSaHMVJQ1DDLzragkFXSHnDq6N6R52D43MESJF1XcfX3bWXm2xi",
  "key8": "4rmBL69LGcSJu2ZoWKAPaPmWKEyv7qJN9BkpNPhLjKbxXPeJBP6zsxWuXcPcFTAHHdCHX9j6ugoavEkAjXugaL4Z",
  "key9": "2eQXTZnWpXehPrUqgkYT1fRL9Gpz2kte1jVRsrFR3SAYPG4cSo1xkTR3vayHrnBn2AZUH3qZShSk8hWkcs99DpJD",
  "key10": "4vckBZsTQRKtUNWMB7vxi1XTjZTNnieSsD5eKgXHthvPgUncdVwSbWGFaWvFwsets9bWA7dVMXV3KDACbaVGQFgb",
  "key11": "4s3ZvRsaCxXjA7Avpsh6jqBcZvCkfptgAG4GDwETmBech6bUS7w41TzzhaiuaYASKTT5pLg2vUj7g99cT8ggC7AG",
  "key12": "2yLSquY4d6zo2dQ8Z17cRuS1AACeqQvV9iGuhgWRqmNe9Mb2X6FobYZB8wrCtcVWLihPjzjjNtPP49NWBHWWLC8p",
  "key13": "5jvr5RAPwgfuMtvr58tmuE1DtA8kCXpzNh8st846erFPpv8TyhLRnC4d6C3X2AoRZXD9vwJuncsAG2Sju8hdFXff",
  "key14": "4vPei2aktYXpsyxPjrJDDEKeJNKfPBZJJ2Koo3sqpdPTkRPhx1iLjroZYWrnsKGCjnFbTMvXqScqVJQPjrNFrxtM",
  "key15": "p3FRTHYoHSY57s3tvhiL8ydMu8sPnQjVspWMyEJ1BgrbQMUPCVNySdfXm8BqF326pFW1i4q2yiVKKQoWtrpZSvB",
  "key16": "5wkJB7iXU6XVU2yCDMmAEs8PYdSc4eQTs3nvjGztJbLCN7zC1c3AXf9mWFLJMmpJGZL4p1vc4Tys8WYKvA3cSphJ",
  "key17": "42VJrLjXtX2FsTGR71iEPvNjshDx39Tn9cf9nEj5dB45ga4NDwTi52dfNWPnmdDZGuhH7jsuvZKrj3qHj62EJFfN",
  "key18": "3UsfKj6UDC7sKBFjVxPWartg9bAwWwyvGR74BhxCx17B3AyMfZBuY7GhGMMyVv61VMY2KyqXVcL5YrpWed2FKHBy",
  "key19": "4ipxsg6FEB4SG6FpVMZGnbuSUXfTjVdqqCwur6ennGSEgBSrJTesmd6LqMksjEK3ipJtkcLJkHgjzvB7DsNTNSpL",
  "key20": "3oFFNnknYxmEvZCrst73aFVLTzMVeHryGa8Gidysid6PvcRTWw5pyqVpHK4NSAUFFR6SbctMX7dDM4Xahk6sndEp",
  "key21": "4nuZBBXfRyBRujfCbzcH3n6FtAfDdFrkFahBs82D7eZ5XuFHR67HhwaZ5yGP57AuR6gTwGCuipiyosQrEeLZV4dq",
  "key22": "Ujjd9y16PoE6QRgpXNmKfYi4qfBAmJNfptvQaE5vahAUAAy6SQkpyvFaFmoXyxoGpbyPtEm3j3xtSb6gLn3qt66",
  "key23": "3ciLiRe8cLyY6NUQjHEzLVZTP7Zf4Hj8JnCD4EJS598imVLwLdRqJLX2PPfJQjsbSvmCkfE5vAZK8rSMtAYDNyoU",
  "key24": "3Qq1x1r85gMaLoSPSDG8yRkqNm4Vnq5UCVToNF4xhAZ3P1zvgrrZE4f1X47ssmr1MdTeuRAmtLqxAd4hKJDLtwmB"
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
