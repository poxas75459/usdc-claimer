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
    "oHBCE2NbLb1dxHrkxZD1Jg7zf9Hsg2MfYQvZ3hJpVuUskZPSwNXuGEsRMdeYRnK5QzAB1tJRjQfKGFNbCb7iUZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "snzFvi7B6um3k7SeGrFYVM2WcU1qaEauevwvuFh7Z88J4p453G1ePsgrcyL4ZCceNMYPqG7aaKpaNAJjz9zfp86",
  "key1": "5GmjVhgm1mxYUZeqAhU16Ry2qpp3dwTtgMsYr3PR9ux7NQ6fbsBHHjMWYf58HzMB5wP8QWdex3nXSVUM67gijoSP",
  "key2": "5qLddbfmwnicfMwL5oAAo6ZK5ATUMDoLfBRRxFuYt25w6yG78LCE2ZhhHS2cQMKaC9RmUH8KqhXM9zuSMYgrrwoN",
  "key3": "5WXmuZrMcmcfRmmN2ZYHEhKC8AoMHKVsGJsVzaVGSRWrQ84Fz3tGs9bbBpoHdEMLsA9fj6VZt2KbPq9FafmZWpM1",
  "key4": "2CrYHTGF77NK2HAzXbnkvgtFePCWEBiqNkP64UzfPQ5768wAXwHE1M5UiDp8GJ8D5TFkbNE66gnYvXgdGuREqQSL",
  "key5": "3rNreLCxAw186S96vqYRS477AHPRrGQKU8h3cwr7aLsxD9tCgEEAGKvrBRersTfrx8JYNDPxxhjmWoUzdvYN5FvS",
  "key6": "57S15VLkThiUHbe9Ny3YjSN3En8iwr7oh4m3oXQPA6XDfjXmCFwabPTUEYRynHk1kCHUKifZfqoWH8SQXwYcVeXR",
  "key7": "4QjBW6Szqr3aFX1j4E6GjcAu8UNVk6beVsDJSM2uv4WMx7q7E8PuLwAGdpzjhezx3U81hjNgchXG1XCP72VDjpzB",
  "key8": "4o7wk6NrePyRGWmUu85RFkTx9XkeR7ELsk4m5giDQSrurGFLaBMHDTRZ7WyEJHP3qhzrggjoUzYqxpSVAyJXXs2h",
  "key9": "3JChajEez1G8vBprJE9N1FHsiWM6vJiiHYD2A7vz4n2exA615hn8MrPjXwUmmbLEUDvSe5cVczheKaRL2ffhhuyb",
  "key10": "3m9SN1yB5GJhkgGfNPm8Di8yDdyXWrMEjVGFqwMmXtngiRi2MHWnCJ77ZKPWKrQWi88scgPPn3Dqrs6VN1gHo2mW",
  "key11": "53FbDHWgs22VFWJv6VbMyssxzq54QkR3eZVMEGNDrdkxgi11GcdvsNVg1ZRV8ACvQCV4gueb99UxwoPrbMv5ufdE",
  "key12": "mfeteSXbrQJgrvqdFTso4BYkYQLqHd1nX6tdaFk3GmpFJ7wnhuWbJwbk1FWR5D77G1HZ5L66Awp9DNxD9dsys67",
  "key13": "48DBRjB7B5Mjzjb6kRGzvGHQ6nwwzu3vwsfsPryFn5TXJTCqz9SuRipnS8dXx2t8NqdeC2vbVmx7XBF8imvGFmxq",
  "key14": "2f5SE9vxycecJXdZuNCyJdPPMRyqVHhZHPdBz9U8udPwQ2mhyKgyRYJRfX992aE88Y2GnheWtXfpwLyHthnzfzcP",
  "key15": "5w71Lhe3YCSk4LUe9Q8qACD2A1yCBYNWA1k5Ug8XjYY7PL6VCxECfV43ow7RoZ5UqWEu33JtJN2woN7aH527ZuLo",
  "key16": "4f7M9uRX1kuzvPdLwskjEiAEoZXnhAdFp2HguzzUBd74b58tpQ2xHiM1B67daxT7wzy96gLQU3gpx7RtchgjtJZ3",
  "key17": "2Sr6R5YjwPA4fvwLQ73YoDLmpkzebp18GBBP6Hpr9oRUK2Rgdg4ezDJKU645nm2sPUmxyaHtG2RqgY6mXWezz9MF",
  "key18": "3eTqhCfxdjXyj9hcyYsiSj6HMtRmaZvAhKmWAmnNgpeBeCezd2wKdAdL7EqZVRwkfNa1Bh2ERXaWBH3X2unC2MA5",
  "key19": "3rF1CxPwvw8twLkrKnx1qSPPGffCzyBTMNrPfwqbUtvqzqVQk2onvbmPvNQxrCR2pi8SJ7uXrWLTzEv4nQtoBtPF",
  "key20": "3Ax53Zh7P5RtKAxogpsNXmg5cNymAKk7H2nkAQQRfsZyu7Gi6LtFswurETGEbBkLBsJBTp7FMf6SQxerpANNZeMK",
  "key21": "3vguCHkruCdNs5hv2XfexxGmc1SSg5UuC85GYhtBGvkb8qQFUDTvURRVQ4CppFc5otQn8TBfyfNRpzRSrKSuWUhL",
  "key22": "5N337YGCTXK2651MuSnoEcfUGrTr4kLWT6T4atNb8UpfP5tLfZWj74DDhnW8aFR2hgyooubNTGRBkbc5Rz7RPVdJ",
  "key23": "4D1NLV45RgmkAPNz9qNLR3vQ8enyR3ZxBtP93o5QJktTHfMkGtNvuWpw8nPKZTeEPcY2sdqPbff6fpx2YpPtr9b2",
  "key24": "1hLQNjiqZSrc4pEXvAKFquEFTqambszjMAG9fAYszBnAmEsAMfJpmrnPZ1QsbcQJhs9JBFR3CzKEs1WWNGRwbTx"
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
