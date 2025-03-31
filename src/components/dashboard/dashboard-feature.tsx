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
    "62u3YVtLt4A8nb6ANJf4qT9ixpkNjk1sexDTeCkTDdpSRDPfqWF5gW1y6eixyYUTCjP7waQjLMASAX4NCaqT7Tnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaM2upL6KagM2UL3ukhjo9V7P2WRaQMNyHxm5ToQ95fvZfGAzgptnwKWVDmAvjvFECGosDLwP3mzvUrygC7DqXi",
  "key1": "2kXDT2DSL4RLy4Ei56PzGN1EeKQ3cCRwKBEUmz9jmG4TukPbYXzLQGG7auEbU1zdSSuzjUxhANuRH6iAnMkUGpYS",
  "key2": "Y5S7NqQjeEfp28Bztk1DSs59t9D8AmURw62U4K3vHEGpcb7cM1FzQ1AQfnFQXGVW8q7tSENbWrJFrSbcAmLxN3N",
  "key3": "2k1irt9xP4N2CrpZWzmJgWQ7p4ZrnDMGrjYvRK7uKqDyqBMTcQkunFvbNfs15bJmPii6ckJTQotCrLP5evrFc1KH",
  "key4": "2m8aKQm1Eb7D2445TozBbdVr5RBWXUURykXYsCuLGF9rpNndNPQzJ8ssQ61MRbMoKfNeQtZRBdpuj35przJoJnD8",
  "key5": "5Enxn6xVbH8yDYbDLoFYwtA7k7yZ7rh9nzBfEKHAGBthgN34D4bsbtnrXCEgUza1sAygE4QScVdpoteo6UiDZuo5",
  "key6": "4eo61mck84rCd6FSAK5ndeYkiya8rgRWt7aNbnh84r87wV1YoR8oqJgGNyPYGRE4pKzYn3HsSHXdbGqWJYZeiSur",
  "key7": "2X9T7WGJ2cF6e3m3REGtMa4ywGzaXyYHyPR4fQG8uW3NQQht98aGs7vZeF4fViKqssojhEDCU6NKVnhSp8HxiHSW",
  "key8": "2264MEUrQZK49fQ9nyLBoYNu4CUVBi3v4tMuGq5KSdGCuXjjo6HrGnXgW3ZdgZ6edGsQEvUHGbBf4b2kXYxd8QUu",
  "key9": "a3XGKumwAB84353e1VVFgBLzvGn6iqU8qufJ7z9xSMhJN2EkPx4RtfctqpUJBgsMhqC3nfojsiPzxqy6Qy9dyqg",
  "key10": "4bsDmdmYHQkUFpoRuudCeg4WvWdZJpgYfphkZH4AmmtUgwA7NiPBE4bHMr43thV2WK79D9sGtyaif3f68APNtinX",
  "key11": "5XfBJuT4oJsJM4eqhA8aH7NrS7uwvWVjUcQwTjyRkr4WdVgnsjSB4K9Tg8aTTfCuzL38NN4w3fNToffRVYLqEPDw",
  "key12": "5PwPbRmdxpuRL369vXftV4Q9FQ5rn39bV2t5SowK642kRaFCR2jAYTqJkbaeJ6sSei2DZTd4jnVdFhpYfLunGauZ",
  "key13": "2NdyoyR3tWVnyQWp8C9jgZnwgyfBVvVvs9gTaxWbrcUACjvWc3gW2BcA3vnVUUu2dunxiosLRRoEmc6tPLSrNWkK",
  "key14": "navokYvvbGVJ8PgSdYifzRAUeRrwXZb6qbWF2597D54rpZnkeRVYrePnNenymXtmn258CW2hU7ySdWNgXDxg1Nk",
  "key15": "5kveNmZfpMsA92ZpkLgXqeBnozYR3AWqmhmtxL7iiJMoFFbPUF2pE7fTqzrNmZB3frEHXXq2TUJ3LnZGoxZSsS8D",
  "key16": "3n9pd2n5K3D9LUtsanPeV4nG9Vtja7WNPj6EfE1o3Qa7s9JqGwww4bEyFgc4HCUNB3mfSrgGmyCLgfjqQzCejHUK",
  "key17": "5iamkpdNEa6chRqayCPAkshdR6XVeAs6aNDJ9qU3NP5fhrWDkYyyHGqoAgDaAN3hGpXHkRaMCHn6EepaXZ9ymUZU",
  "key18": "mYHhrvXFtiJxaVK44DSvjA42uYwGyWmZa37NQX2GsrmCjjkwA4DSEXFnzRsmWzD1cNWyscJ6T2tbdHWot4Uj6Xb",
  "key19": "KmXbK4bDueLocZASdcTxnxRFAPHuyaTWKHz43dcyo5RtGDPdipUuvh6rm2wh2SkmSyFRPHmgciYxrzynpiEx2Kj",
  "key20": "MQmXWv9mbgNjd2U5oajGsMJcjYbVKpT9PZydroHahVxmDU8omSoyCzyM8aa2hFWCQCe2mxjFhEtytC6twnPB1LF",
  "key21": "RxmdhHBveiT4DegthFoYy8NMretHvDXJNRw4JJZED1EkFPkRin5jKn7Mzky59rJEEDcTa8aTtovQavxEjUq8dUa",
  "key22": "4s7zb3kL2aSXaP6dFrZ1eRUe89ZzqpdxvKdDUMQFpHuSGXTtzskgVnTqScxJeUuHwTDAgdPNjRCh3TFezLiJ8H1z",
  "key23": "3VQCd1Z49zNVmJQScoRXD5BaRiZqJiiSSdtz9eNEDYqZcUuHjm833raXCzWK7kXdNmJ7yj7PEGSF2QdpPgqW8h8x",
  "key24": "53FsgQepCmEmWc4LoNfhxTDDU18j99Dkys16wFBj3xoEUPiV8fxtxLjHtxyGWRkp6o5Mgiwpyh4sQWBvnWGJQJty",
  "key25": "3BJ6mo3Cekdi2iw3JPV55mkRbriEM4ZYMFVZ9ngMQaPBmTmWt4FjCGGGQ3XdX3PSwGsy5sZosu8kWhGXkhCFeKzz",
  "key26": "4PmSdzNXzK1GTdspsSY7oP7QT3D2vVZRVmfP7vGwpvVn2PDkVR8c5YaDC4hDKpmmWtAbbHG6tAZUziHzMbkVp8Fo",
  "key27": "65Jb9uP576F59iKAq8j83YkLGCk9iVVdtpEBQSL8zNr1Zrteq4TDgUkynzVERZF4pxjsEdEWbfqSFUvZhcuoyxzJ",
  "key28": "25dMNRmtos4TMd7bh2NwDcPvCVDWx47nZybELNQUWMm2CftfM8JgB9LoXkoSBbwXbkNnKfJGtbDddNsASDJFmYYD",
  "key29": "39hbUQvANcj42B9qCfEo6kGqp38tazyDzzVx2AAHKk1wmNEa36qRdRdkpB4CxytJXYLfPBBQYsj3qDfcvEophtxL",
  "key30": "JQBmevJKXXeJGYDfYtDBJ4NkpXGEgTQhbZhCwi7PczbugHpdT5URQiNUBvkC7zn3Uv7Mm7PDjWS9np1DfmJTBZ5",
  "key31": "37hNMHgbRijwX9J7MAYvFHeCJ1ZbsuuGg3XBErvacQLRJQgygGoZorxTUTz464Wuc14uT5aaoG6DfYZeALJ29wkA",
  "key32": "65HZKdbFdrPP2XUxi6Jfh27q8qcNfDRU2Bz8PN2nwtFjyiGJGMAU8x1tqkHu8DAZcMyHshTfecTUErR34VqzAHR4",
  "key33": "2jRDgCwxFXHTZwqwBCkdxM7GoAikb4mjspxzqncvSKBAx2xkPYyX9mrJYe6EXLGRjwKEk1kTD6dksoGmPghgDZ1a",
  "key34": "3bAsfEetXxGinr7vfa1K31osgjNoufWncb936BQKVVcZE7UZgpH9QKfsknxHRWCgE8YQP1jPjgumjvxGoCkArpig",
  "key35": "iMcASJH6Rw7ezmjcn1UKtzyaAx59VsLEYRoGEVNYWEK9M2LeDfcaN4V5SQWoi8wytYntvsztA2VxVhFMqG3Cain",
  "key36": "5sgsCKDYjdBKzWcccamwu3vxgeSRtwiAe36G9QWn23LFH4ntkqf3yNA127gDAouudvNjTaHNLUbS984JLe8c13is",
  "key37": "4khNgd8VgU3hxCpWxYWaMbrBDKBr8ioSynDEZJuFb4Py5Qj4mx2g9JQGp2Fy2bEUw9BsCCRnnE78FhtGZ3SAN2bp",
  "key38": "4ZShhoSTGfGFkdyN5oPuC1Qjr12XDyJrBTYhyhKb4983FokoMparq4pU8tW3C9XQ1Jxan32W3k2kXUrtaQv6vnrz",
  "key39": "ghcLDyxk4JTpnwTQcQU4mEgb5i2qGqsTfxA4dq6HztsjWW74hadSKuRFcvynwq1qzN72oTcq9xtURwgdp5xiXsM"
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
