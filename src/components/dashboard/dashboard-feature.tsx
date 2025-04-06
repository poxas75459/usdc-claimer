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
    "4KH34KqGUyBNFYSr7yBbf59qCjk7oiCn2GBRYfGg2u3hmVL3RCp5trTUHDVZp8xYQpZWknJN539vxmf9jnJcn1ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzkukCuBLrTCHuFKjWijTpbF6nH15aHwikVoTzusMQJm1HpWBSkuFpse6Bv6m6w1q4qcPEPAK4Nvgr3Ste93QGQ",
  "key1": "82RVu3Ci69KnDSjnKaWECMno18Q6Eiyq5wMbpdm9XxYJtUAJ48nta5DFr2tM3A4eBDxcc5wmCdHvq8CeC8xQvFf",
  "key2": "3H3DL2ePSpQZUfeVT9zg9GN45ybwNA7xNTyndqvtZTcBQtpcvXNuVquBzd3zCiuRMYy8EEEpQULkTcggZmjnLDYr",
  "key3": "4Ui8qADjNJbvRJcr4Pv9YLmbtbpCHEP4iVWQd4J3SmauiV4CDjuBsc8QtSnebGLSxpUqUYCxFWy2mqYxER2LeS8F",
  "key4": "5kQqVf4e2SayCbdidBCrc1njsaXsaNucYTfxLsVosFr1mPRbCJfmuUGgM8XvTEGwikK4GPsqtyJiL1jjnHFHw1qx",
  "key5": "5zG9QB4EiHQcixUsrHAUFwByGcaoWhonde4iKiTS7Mm5hEzyaiYRbo2koxP2cEV57yxyGsi5g6zbuoRckrBFDSoR",
  "key6": "3W8Gg1KWUNnHSMTG9Wx5avfsRLENDqZ8Qq6jZ4eGiyR5D4MhJJUgDqzTWKJ8wZoSuYw1EBxeTpDqWmfJwgzwopzg",
  "key7": "5VvukzYNzLgfm9Yc4TWhUQjzATs4g2FktBdYrEDWLX9xTn551jyxXLuWbJRZfAhXKPDYX2FuqrYEzNCgJurXvDRF",
  "key8": "416e7E2unGe7jMoRDhJm3TwehNEQWeuqxLvsiaP2NCFTUQCbc3Xf9QEUorRsEyyEo4J2WTPogxxZfG5UrUeghQva",
  "key9": "2xqu5YLUaFwjsF55CkXyQfrQo2hLQ2H58TEg4qHM7AK6ewYHUJxfDWg43UHJnNzFLDaz6hv2KWtGz9UcVKnZtRfr",
  "key10": "4hZMD2yXVUvS3qwHMU1dMXeqcKkh9GaDZBuHRPQimzDcXpJ3X1xRVZqEESgtWBdTnqRDnBqbHuGRtDaUgMSpvM8S",
  "key11": "2oek7tMcVZteJbybYsxLYRhpR6v4yEj3fEgcmteZDAaL5RhmHsZ4qhNHf6RngsnqVTkm9FovU73JUUQAXMkMSeb4",
  "key12": "8mYz49Muww2EqvSgm65DESfbHVVYBkgmJy3S7BYvt1THvuWBCEUQPCj3SWq2hHPzyVhonfgumV9wgaxgwrf89hq",
  "key13": "DTMJhnyHFVSVfYkuv37XyHTHrG8CYSRea8nJxDE5Kxp4j49Jai6GpL8bE2rgyJALXrrM9J44PH2y93rqzFz5ZQb",
  "key14": "qNDUCtkc5ZcD3HpYmGDheUT8HaHdWcdyfozx6aHASXTvXSUxKFabiQwHr1FpEGp7FT7PZCdhVfubmHMf9KkRUPY",
  "key15": "51Ng7sy5GXStG14mupLoWyHgLbKFsTMo4phVAX8rQEtmM3gRF9RnrUDuwoFtGzJXePeJR9LkYsccaGbZNB3fLPM7",
  "key16": "7FnCuBjmPjsfVtoPeUwCtoF24vDW38ctJQQmnm3ePMeHPLAXHPRmBCDpX236iwJBwK53bbpicNoZ5Byg9sHDAHx",
  "key17": "2j2VRmSUVuN9Smdgi7j1mFwcQMhznahfsoVaz8vkjXdtu2Y6F53CEV5zGUQE4WFmuAt5bkTohtHVoHYgK4wXFRpw",
  "key18": "5wtPL1bTG6axXTFDhP1ceipQQMXJNFYBZ6cyABrxr1u6qFA5U74JZq7ivhuEZpLedafzupgutc1iLZNcrGWHQsMn",
  "key19": "3AmeunGWsQ81RqP1fNnN8MY5BQgnHQqqyRXn3vzTsC7yeqQWcKjV57Q9iQrSZ6KL2eCHKNQ5xZ53URb5mqsLNvtr",
  "key20": "2ZZSE1TSYcZadcjmdJ8oodnv5S84658BhtnHx1hCweX5cVB7hvbf7kAG6sqtHXEqMCDABkToGJ1hV6Wm2ev5RgbG",
  "key21": "x2i63SXTQyh8YJGisUyhHU9PLtPYMdTws9ftiLUmQjFPJ8kEkrGvWjaFiVgVNLynEJLPjJDn6CRhs7qF8LBWVJ9",
  "key22": "2LbQ43yJzPu1wCUFVxCVpLkUokQo1CaisqewysJ6B25X2BS4qu419FYZkVnJSBKq6NaGuRZjQaok7ZHbtHYaLSqF",
  "key23": "3pgXp1ULSMLDmqrah9efZgvZrgSJtzKJ8cSVknhHnehTR8MutxQBS9GHjWqukR8FSSpgKTvtSLQZ6fD3qq2DSJPd",
  "key24": "DKHTZG1sB9bX942zVcVf9jvnysQGn7ARazef4rTrhjaEskJn8F1VPW5AQdGBs4H3fwUu53cRc621JgPZn8RbRNs",
  "key25": "4yRnEmiWNrd2YBfreWxwY5DC8Fecz8ScX43HMpWGaaKRNTD7BMtfTwGGZgNxo5RAMLGupzQCZbZd39sY8vYGd9JP",
  "key26": "2KWA18aMDgbX7c1QV3D8A5Q4xVar2gQrNLU5XCqMU5ANakk9r4XrZHSkB5kmdsDVVknGRvzmtmuG1BMdkN5LTmeC",
  "key27": "2rG6x6o4gxPEekXTGrmfXg6i3Xm1kNNRopWnURwtgm59qbnxDD1rYpAK2k4YnUuuiAngFV1pY1TVDdiJbCwiz7kx",
  "key28": "5XD14RXBWXmqC7LK7vo5xsLVoEFHAq7kc4Eq3hdA9beAHUimwnz8gNgBQX5gppraAH4C2ZStxZbqPaameh2B5p5r",
  "key29": "4vDgmXjzMQv9ydJeF98iNpsX8FfKvE6Kxbsg7xfGRs1p6xib268MK5yTCzVyvSCrpJvj7xKwkLYsyt82VBrgBiQN"
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
