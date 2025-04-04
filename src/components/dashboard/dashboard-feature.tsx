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
    "3BLUgPR1nNtVGHRkauQZVXuNtX4E7LDnGDyJhYwKd3YBAUzzg2YLooN4R9d85p9xKfZputtKXaH5V728G3fUZXkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMQrHFLpPdSHkBm2GkCFhScfLcPTbwMFpjV14kfTeGW387vV48w4r6FqVFKfPpZBK6s2f8C27bsm3ojoF2hZP4h",
  "key1": "e6mD3HRTYoAes74BvLi1ZfeYN38h1ym1UcYAwVXupZYeP8atNutcC9pE2sRHXBUrTDAdHDZwS37AezehQhHXz5q",
  "key2": "JGP2VwFJq1mhdFPF3f4pQqGpkqPwz2HwGLtSAheaXdWKaj3rU7D3x6XsoAzEbpk38ZyJSTHXmRi4KfYCocZcmPN",
  "key3": "25ZT5dHtTVU5VDr2x7s9oodLstWdaQqwa6tKs7GbSRJh7TomwBkiPS8KDai6jczoqcm1J22NZFY9qofJcCFxDZ8k",
  "key4": "2c93dptEcEZzjw8UmLGGUwyu4PpAGFuWRV8MeozpdPZd2RMcknYbFC1qcyzfoWGyS7Xh7G9AzK1xhnnatTiTEHWj",
  "key5": "5SRphGSqxKNLoxV15R2nDD1LS4kjZwVxBspReWBE67QfJ2TJm8Fk7gdF3uGUXA7LUBh2Ecvs44BVUaq4A88poA7G",
  "key6": "5Chqu7go61Ak45TiY3fX1upN8SXctakGMFgbword51xN7EGEi3DotXXVSUukpKvANpwMyjBBZoyjLwbQUaii58AY",
  "key7": "2X8MQ9ehNFMcrfin7Mo99gPNNbSJtjpyFHiXT5MsxfXYSnqF3k9rFYEqiQYt6As9TwXd7FFgLs9JonoJattjgfG4",
  "key8": "4nTnQm15FUyBwH7j7bdVErf85df1NZCYSQGHwKRFq3UgCQ3n77tjvEuzbynk1m5P65TMyZuioYL2m2htYxER1pVV",
  "key9": "5v8VD1WbVBzeBmyUQQEj73z8yTYRPn4hdRafYjrLzburEuR5m3CXYQ3HpRx6jKbh9osuoq5aEvg8VgxBbf5N4RkZ",
  "key10": "2TdcDeA88aU7Rfh4v1VKXiign5pTGYkD9LZytr2DtgWdcFhyWbkWBSh64fME2pCm1kYub6ND7pBFaoMGYE4cetMK",
  "key11": "4oQMwjx8CLpbFzRLHnSurjNK93b5r6xrjTuEsxLEEoiyUeZQXXoSLPb191eEr46ioD4Zx1PPy8TqAGzVuHfV5UTu",
  "key12": "3mQypAif55pqs6KifUxKx7MhgqMoGswgqsef3gwx9KGNvr9PjuLG5hKp7LxWrhXAk2uujY2ynNktfk5P2dyhAQMb",
  "key13": "MSrJN6uqUyjaeZsqmfJXfzJfQmPLL7EjZ4z2N7xrjqLxLwjmjjSnUS95pmSqUwEm2p3Do5UuFx9z9G7b12ECbS4",
  "key14": "3fNouySrMvATF8o4GG88mKQfC27B7H7Yvz9pvU6LgjhYnhvPkgXPTHSgtbdHzZTUFcHduvDxVEb2xHFCwBKuGpAe",
  "key15": "5V7ShuuZGfzTC8rPu9esESucmWGzt4F4ugxTMRnbv8SoAuEkVsdtJsGQNc51a27ayKgei2f3hEC3k2YGDatRtQc2",
  "key16": "2mQEnEBZwTpY4tb8ZSSDLWXyCsUefXo3rUUTsXDooLto5MNXqXZcp9DbEY3ERnp9DwZ3uUA4wdUsMpRZrUGw2GoN",
  "key17": "5ZoRekakPHTVZQRB7svoXqZbdL22ZAgwFyA38zaFm3gKnKvmE22tSzqH1w8KqCs1y99RMar6bkRAH5X6eqN8qy8d",
  "key18": "5zXsYdpG97QRHa5TjRru2kmoapMJ3mmdvgA3J7dNExzjkanFb6yA97SrUxCTDbg6sq7buMJRTcPu8DGbt6PV2iim",
  "key19": "5TYiPVL8jL2gJviUbA3peAVvHrmQQamSeK9Sa5DTA6SE17M6mfbfHWvwzqXoyyPBuDP6JkE7QxqgL91sUi7Ea1km",
  "key20": "ywWx6J88DKnaVWsnxfZvKyVACb3sFCrPyr17bhd8eHRHsehqtaXgoVDNdTaNcqZ7NVk91UaAn1SEBUWeMTTK4i2",
  "key21": "LMw7S9dwLF9rQRTcfVdCpsuNWdxmiar2M51UEThGY4cLNsLmXRqZ5zuKJKxP695vDA21YQKDCC3axcsHQ2okPaA",
  "key22": "3ptx5UVAYx6Nyr2xg1HeZNPeGaPtFjvAAFx1DDpshQtu76ybVnApwgcs4uhVGaZFszaQDDXVJGG9kogyk3ajPAeW",
  "key23": "2LKfmuF11LtogiiS3Lmxs8aRVfEPR2HnQDLaVseFgNKQWJkHUnYk9AYTH6a3GZyQrgyjX2BPSdpiEdDKW4KZc8gV",
  "key24": "4BxVbicfrSUb64depvoo27gxKcmX7nEchZRtetise6gudu4RrT8pUt82RJsL8Bzest9D9tThHuNySEQqnwqujUWf",
  "key25": "2JqUnM8NC4atkZ45U2axNVP7q1BbyD6y5gvqRPdT7CGZbFuykfhvi4WmvvbF1XupHAM35GEEAefd4k4WWf99WuWG",
  "key26": "41gAr6hJ7Y5k7WABgK86e2TMFq7mDFhpbVsEm4KAjjHvBUZj76faYWCdA8itXPnMt1XX99tJdnfVj7wYm4R8rs3j",
  "key27": "36camhjxs7kJQzrGFt1K8VQHUwGDejSYiEW1NFpBbteydUMBBZZ6zv7xRisUsJ7mg9TsbTYPABEQLWYFDSqWonfW"
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
