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
    "5gzNKQ5MGajXsMgE1u51dkEFscvW9md32ssWJMDDMAaLyxez5hbAFZBUroEV31zJh5gYjqc5BCXvRMsJbHnfcvdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wtmxpRJRCne8UY5bv4dBVXBWFdbkaYoZDLYbgquLXr5Fq9EdP1GxjtVHzeiiQpKErdRBcGtN6oTCSALf7j3VJC",
  "key1": "64oqN8NTCEtH2A8QzqmwWyAvmR1obdArRpXryeiRYnBSEEhdX7J8Tnz2spu8uEco2TuYibSHdPnt7cyPiHkXZNDT",
  "key2": "65UYUizGgi4CgToPr78QT5Dua1XGaLgERTc7AfJ2PqVXHJrB5K9SdDQD2J81sDHpckJRocLKzuxJFTSpTw98UB2W",
  "key3": "4yzthhpoAmaFqCju4NcCxK9J1dGpGbGASLzYKK3rMqQAfGjSwNnF86nKdVrW5ZziMS3TRP1adp5PDBxLc1CPYFJA",
  "key4": "5XZnRKq6vxbX7NNxTQa3Jpy17W9To3aizHNZFvdi4ST8Rg8NcHLCPcEU1cbg87xgAVcmhp9YqpX1paN3H2JMM3W1",
  "key5": "2cns1JigKpH4AP3KFMuxDWSBf4FTM9mMQntFbzKJpG2NM7FVA8h79gpcN1BuDE8T9duTeq3S4pHbbaEtLiVvtbXa",
  "key6": "4BfRrmpcjUewexx9kbwPoqqHXunMKyDkEY9J2Wa3KSpGzhWg1RAhWA96ajitRetsaUnj6zwUzZwVXFmhqx5MPSat",
  "key7": "DyeYJ5xXgZNSAbj4z85rZ9YtoedtUjvxaRg19Jxay1W8PA4b6HE7ciLkp7nTpQQQVbCfwpBDYdqNiBCKvx8rKMz",
  "key8": "4cZpM2V8PHhYrXr3HAjsashBjv889FeEsQNb9Mz9ZxoYcC78aM86d68h5Qej2ZbBVZedMG48eFgnTvXyo6xvn7xR",
  "key9": "LdzxPQvQQB5z4yXQJnjDyjwhXZDxbFZpHfxUi3w83WcpxxHAukHrBHrs68pT4Yjb1MebVhQJ3mj1C8PvyqfXetb",
  "key10": "4oiWby639vsA1sSQqe9ofkegs3J3qP3SiVbcT7LDrpcxE3niPuTwQDP4wxTVrQjxgRnGvEhVD6RzHUYo3Ub6S2HS",
  "key11": "4soJzDN436nvCy2qSni1UwLqRhm2wH3FREaKQk6gm7jAAeEqFW8uj6nUa9qVKWwfHV7332viVYRwf2m3G5aaa3wP",
  "key12": "3XecJy9SMsV1gLG8ar1iTzDdVkjDEQYrX7esUqkLokn87B5kqmxYfEXdP6f9irnkUJYzvCuHCENwfPmaZbbFgNRw",
  "key13": "4HVGN7nU83qGBeaZ3BUq1FpVYNy2b5pZHJDdexJUXfpBgdLoVk1xnxwR1eBnoWKrt1e98KXPTH2e1P11PKu7t6Br",
  "key14": "qanDTQQxi9kGEZX6Hq7t1K99CzVpxGKNbihMY5tmbZ3EwfGB2mJeRhiVrHsWrCAq6hy3AFGV4aJnDjzoVD5Kimw",
  "key15": "5Rjujf56koqBzZcDcjCwp18uxZVy3JL7qzCAChcC6yzprDvCWkqxdmUiPfWzpQ7drDydvYnuoMxRrmMmrsmWqEFW",
  "key16": "4NHfRcmE8m8jqgANsFZdqojHJ8j7imXvJrZtFRrkwtdvTTRcdP7pVZVDrL2Z4QfPXEmRrgXc5yfXz9KWRbD9EcAG",
  "key17": "4qKYWtWFKp4zDkcJcktVxVBvigHegEuhuLkCD86TnPvKLnKThBeaWBrbT25EjkQwhhkQW37ymLtL7MJD7FXrnxzs",
  "key18": "5f56VVMUUFXh9udP9Q1SbpTL5HxMq2jpcLnjQ2Kx3DZr537M4bJVYyPhFkX3WjuiAKaZYQzHX7yZKiwoHd8BckuW",
  "key19": "464Hu2xeienhWTw2tqevzV2PyvbGFGbuXUrUPvE1X97dyCsRDKbbdjPbrtU3UC3Ln2kmNbUvTd1ZFXhTDByhYAXT",
  "key20": "TRqq3Zpj1hhMYudB8BhM7iJV3xMTJ3a2LRopCrQiWLvwW3SUsu6wttm2bruZxPRdXANkAAdXJthNsJyJBxqYCfb",
  "key21": "2s8oJPSqyhKs5G1UhsvnUrUnm5zcjdrcq17wWk6spRzLYorGnzh3tvpnigvzWdTUtv4wm5RVTW5v1ChZwDogqpyP",
  "key22": "uhwuS2ndViPii17jGVModGnLeScfL79BFkgbRWqHubfA4sKR5jX8ZEQjq2ZdYuWZKWszvZVzoanpAJPHfo3a8e5",
  "key23": "2gGDn47FSrgLUqBopYUZPbEE4iw4q9ibqGvgPDKC9PXrTcyTLmjz3rNSf5diAJ2NtJMaGZqTqKmCuFtAFefXSGyZ",
  "key24": "2S6y5s38TZnDSj6W3zaji8h6A4XjZFcCdg3u2QfgJfwt3zVvgSby1xmbznvcBbJ7B78Ver2A67hpq5AsjMK8fB6x",
  "key25": "2BTiWEQKFL5pUvGgPKsrcgnFEv4xvjb74dXj1XcUfLKrZ2gwpZxKLGUxenQsraUmY9DiN3NEJN6EeNDo5tCsxTiV"
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
