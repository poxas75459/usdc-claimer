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
    "5MsJJY3VUn281YiGcSHnGbLByj13ME5ToBWZ7qgb1gRDkqHJWftNfXaUxuTpQVRNZVXmqyCpJd6TLxYqzHdGApQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h23qHyB9tP9MiraToqmfGW1d5jNzSpGFMSaLobu2rBUoXatvaei1kzjKFi2XVwUtfoc23ngabq2TUVmidHJiUWr",
  "key1": "5jqXX6n72JCSzoSiR1FdhTCkxoBdpinCSaW9RnvcQ6bQfXnMUTfpLvNz8EhASZa2d4FNfPo7yvi3riSoWpZr2D7a",
  "key2": "4icajJTsQhnToHwP2NCaJBDTnyPpoCUreKnFr6i29R1AZwkSL5QCPUKAWAUWXGDH9ZSK9CCXmXEHiYESf5eWRttn",
  "key3": "3UsDJDeFhVX2UqgxonkRi8C4fH4v42MBc4LMAkMRT482KVSRrE5Tn3DKQMDL6j7WkF89up74aBMH4k9mrEDWYHhj",
  "key4": "3Gfb6ez84nSLU2nbvNbkU5MZoYfFSsaJmbjwfFQze9yyHpJzBv3XqD8SBR1b8PZjpsH3ZwiVPSF1ut2YgRdaHo5y",
  "key5": "w8iSWhSxUKY4RgoW94Le7J1uHJ2hMJyxJxEtS2JJFcfmUsUH6ZYvxS72mwmDEuirQtLAotSyg5PPiS8RW3WCudo",
  "key6": "AFeU9PbMEf1GpXv2F83gwDdL1NG6dL6iwtnT7Vv6WUB5yHRuaZVzEbranxDFiRRLgaf6D1hWN1DPSLZVAYiPofs",
  "key7": "2KqhL5vc5RwBmVA4QxJqHyMwH5MrpBekGYX5KHSzHCJcG3ZFDvEGWx9whaF2c847LF4PAvnDJELkdxaWEoYKWHGy",
  "key8": "5avQ1yTeYqmndRaVWUNgBkTmXxvmw31czw3R2U4u1nAkt26ms9F9jB2Mx8QC5RDTUjQK6TrDvsLAUGRey5YR3VEX",
  "key9": "5g3i7ehxAxAbmdMBtdwC35wYFkeDy32jPwhJsNpX6Uo5J851v9CU7N9kGBqr3cGC3Vwb1DPpgFFF3uzp2uaKRS1c",
  "key10": "22BJ6DyfX5my61v8Y8gbwFtir8qaELTUgiVCKoaDXVPEziPigoLLyuARBao7Uy4bwB3p2MSs3rAgUYLVRs8DGRvA",
  "key11": "2yWsvEsLZmsncqWMcyLYfENVT1hrRivMfurDPciN38vqCdsXFAnf66ydTdeu4mjqUz1xmKHPt6MLEcDbEpkNde9c",
  "key12": "4ZcW5bkYnq5KkQCQcW5bJXMHzQmiWeDPkKcmPXU1tremUDsWR5JF2vWzjpGmhK9cNRTy5k7FHhwQS9UvgPezuvcm",
  "key13": "421PVts1GtdM7hCM7wSpycciXJzw2qkW4Nf5T5iKP5URQgdPcgWaunvN7sFXsfi7WLGxvk8WuT8MCvJT2BDYhkEf",
  "key14": "61PsuF9JuWAsW8W9dVorYVNqjZUEHBge23i4kodBhYor7KzfcwcRCxq95iW5ZMjj5m1UoLcRvdqUouabUuTrVKHm",
  "key15": "3wHgtC3hLyL4BuyddtmZSSHANxAdYyRcNoCWo9arrKqEKvsHe13nJLoqjUzuqaBsnbyBrLs4YaTUwma1MtQoL5eM",
  "key16": "2iLGBEB7WUmyxkWuCtd3t5YRgS9f2HsUZ87hqbt1P7ML4GrGgWFv14uRhAA2ovAJbZhMCb8Ai9RzyNTxRghTUWAJ",
  "key17": "FQiiJowPuYym7c1uNk6FXDZgH6RWMwn9f3WLYvHnPv6qovKdWzecu5PsnCRgX4p9ekeZriAApB8GfFaejs91WKN",
  "key18": "26RXx8KK1r8JbhT4f9d8thwhyHmVYt5476Yv8jcWyFYWXEHcYQDHPMNYo5fAoeNfcQMPDc8aoxaGbX7cT1g3q9zR",
  "key19": "3dWVZxNjyZBXbQ7WpqKJLUrnDBW5UQ2EbWG4T6qWXLaFVLY8CAcVCaMHEALH9DRjQP9dbtkdAj1uSPiwEbsQBxn5",
  "key20": "2D8HQk45SUGcjh9dWRSJEycZw3TBoFMgYPyGUxtjTVEB4mRNwWQk5aJf9AnwMUDN28sg94hZcw3djTa8FTBkLLFh",
  "key21": "3DJ7aBxjqd4qSQejX3kzumaZiF8TxTTqRSEQvz11Tq6SLRSDFhpbXU1oZ7trJ2vhSsvJxHARA15b2sc1c5JXSzug",
  "key22": "3iVUUeNn2656TFSy5T2of1VCqFdQdLDi6m1cSagxcKgV2nUckeQTpttrEzHtqSM6eLW2ffVKqTG6xxzBWuKE47jM",
  "key23": "3dCMHJzKDsKvihHfMXSdBtnwuy8mc9PHzLktHMUYiySreZSbUBvhBESNp1UdcwXY6dZT5nYNi34jr8avPYbxYZab",
  "key24": "35oihh4JrrRNdutXQuNLDRRDZRjSHugqUywi1gkm68iUvp9nMN4raitdNtiYcmX8tpDjEjW9Fs2GPAMWKqQwm8Ry",
  "key25": "3ArnZq2bZw4hzLpJi5ipC4kbyQdPa4vz1KsHdZjHrHfW1BVeafj5BVpvmeUN14mdW2aZQo7tm7WVfCQJFdzKD7Rx",
  "key26": "zWRK4Xai6DXJQQJALM3U3oktmbvwccyUCaYHbgTiW1nFzjduh5kDahc2jTNa8jzZzfr7m9U2oQ76GgwNHapwWfT",
  "key27": "4DDqLWUJUoFQohoXf5q9qE5qm1EnXFZ9T3A8jQtzQErTfTLP18MrDWHRcoQ3BjRrTz6EKcmCXQtcPBG655A8UANi",
  "key28": "4dYzxFDLNLZEuPQcP963yHxVyxFnKsucbrAxNqjvMVR3wqn1akUb2mu7A84bBAmUpgR3aSFGBarKc25Kfb1RAEuB",
  "key29": "4RyCA5G5Vfg4DEskkkfNgmNGdBjvwP67WShLzffBqVWR23TANymHChYdqv6WVrG2ghK8DKVszwLp2HDsaKGNuoae",
  "key30": "5frG4YdruzcHLVtZ1xR5wTHxPDftSkViY6E4KFVxZ4JkvorGN48Q8vqEPV9kHFkKgAmVU2NUpP1xi5PLkGvwZiNS",
  "key31": "4vw3inLwBn26YLycJ7n5i4KXYYNKZ4cZnNWdceMkzKRgrVtfCG7o99Wdj3MEGPcLaxQgK3TTd46uejsLEaFt3tnN",
  "key32": "3H8n6QstaawTVa4v9NL1iRBxQ3onAEbgEGtgrfb88NcKUEXFMNeni2C8oCNTN6nWRREiFgbjsquoEXLX5FKTiZ3K"
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
