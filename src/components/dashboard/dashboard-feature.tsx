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
    "47M67hgarnXWLkfuE25gPw2FCWV7iCA8iKMQPQaDXUa3EQfuPNcM5v6MijgjHjeQMn4ssJHmPbwoQ7hFPvixX7t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCSrC52ikiWioSmpEhE1WFpVkYXkCjJuQQpBaQTijTMcSmENSz1k77EeBC6waVvxqGzr6k6yTgK6pQejFwXoiSe",
  "key1": "5fosvremupxCPZU1ma3eK8NaH2FAodjZrr5UrAxdP6s28NK75X41e2MDuKkWZV2mqTf5FkzG1fWAfY6vw5ffr6yB",
  "key2": "5Ufea8MBaEwehNNEtquyCPLbqioVcS1JECZq3MLX8LMDgSK26QyZJ9MiABvv2uinKEP7BdtpLh5aL2NbaHb7sN4Y",
  "key3": "2uvrZs7JMvJYdvr3KKiYAUMkMfcSheE5Xr7UKK2DpzPdecMhUqZmzUg4kCwpXppNXRbodf3FWXT4Y6ux6Sr9E8a8",
  "key4": "2x3Wp8DWa1bqw45LL3MT2nsV7jCcMrQ6wAbtxYFahh61tnvb4AGsEHurFpyAoZoUh6mNyuZxssCZgPYaQ8cvNimo",
  "key5": "2NLDDSbHearMZ1bVcpKojQ4ja7AXMbRQurGFexNz8F11i1nZwjDqWCv39oWBQYMongPcMURw9GpypjCkFZs5WJ1u",
  "key6": "4FPDhh1bnZepwPi6q1LwPSLAye7y4S7f2esV7euCo4zYAeZfwKz5X8Yoh8h2H8AzjjcuLw67ALZZG19GyBqES9Au",
  "key7": "2of59zSXrXp7E4E1KipCGbfZpJfAtHeDSV4VBsqTWghCBe4KD8GB4dZVGXAz49dCWLuR75BGdBkNpvPivMTgyAUZ",
  "key8": "kX3gH54AhtMZRzHmY66W6318oNnAopXmaKGj1Sk5PvGVcH5tVatAyoFTLkVpadR5XjXXC4USKoHNthHxpv7iz8C",
  "key9": "5QFmK5G6rSsyTyFnKztKdtVZ5K32freXQ4hSqB7ybYo791aTGkA5TpcAGbDsZyTDha6MbnGptG9SQU8V2YWCFg4C",
  "key10": "4dV1a4VS8LVX6zaUHccZoZ6GEizaPwHTqTh3RFtA9EE9DKoNf12QSynBzTWRmSVLbG2eVvKg7xaJzhe8x3Jn7Mpv",
  "key11": "25JyMC1gNeP1fyGDzKRuHQWypcGDmb9gVP9x4YCs2n7zSAi9JkELr2mp7GZYxUHr8U2iSEdV9t68nzRg94GT2idf",
  "key12": "36M4Lw9a5MpoJ8F8bQPyE2dU4MFBdsyVupc7qZjvv5QUGRGPxowCsvp43NJ2SzhQsqn49iGYnoBzWrb2sbmKmgfv",
  "key13": "4eNLMVWemkNw73EjgXBJS7FPJb2sZRYFU6SKmXFHyqd4GTnAgYYCZrUAcbA2M613DGVX1PqAFTMwMxUNvN6icJXW",
  "key14": "2VYs1mXyqUTAq7e3P3rhvu5n6D9ichSm5H8xewsM9VPsnCgCbweLF6aBKRNraZF6ibWeKPyK3TgKNnH8fyhRMbxw",
  "key15": "ZVNwbceKHGVopHJs14bmz5VFb9V5Fm8PWsuRTPKADw2ZNojKFLMfyeN6ihuG8cvNJ7bokaefTjFddv62H8iHPKj",
  "key16": "4GHBbU21fWNdSu7DwxuF6KqFttMnq6rHkYBDndTbckZ1mrs6wyHtVBgscTdCzZd88RPKHh6qMdFXW7KxtiYmxpr4",
  "key17": "4mzSFHdEMpeW1oNDLFFa4pbLaqAWAg8ZjGHn56b68XbHxQ87n5QAWoKDJxT6q1JrcTKgxWwkknqzG7Uzh7Dwsz1o",
  "key18": "3oJaY98gjYeG4Z9JEHLZrzjXDZbsfYAFhDMmTNUidcU6gVYcTrGW3AJKzmwztx7uqyd5bBbxP7rA2gzGH1CLrHpr",
  "key19": "5whVbXZ8Vh7YwmZS5XQAAmePGbSKW8vR9AdkJLFwU31Ljb8LLabvQ9tE1HomGr1e5p7GMD6jPTdRPWc5XATpCXbG",
  "key20": "g7BSmn6474kmCcW3kZ4w71nQafK6ZMDxpn7GKVuoaPTfb2a644atMJrqUDwYcVqTLEUhT6wT4jCB45ADdaoRa5L",
  "key21": "63DNdLcEAhssszdnX6QAVReoRhzwRZcVwjRFhxeCTJ3E2yEgMSEbuFuvkso8d7pE4mifd1XrZowzDRFZ7c93QxZT",
  "key22": "2fStA4zScUVv6SLdK2PYNEGyVDb98V9xBTLoFL8oXfa58SF8Q4ZJxF4sax95rtXH9w8kTDJFBAGrgUeZ8yycJASq",
  "key23": "2qC3hToGtiD81z5G3rU9U9gLvg5N2vmfTgUx8UAYeNm5aFu3hfhjZSiZX4WVexFYqdC9HGrSZCGbFphVFzc9iLV5",
  "key24": "2tDiHR1rfjxgpYz5S6ZSqQPkUdNG634r1qbquxw6FwuyCNk4JtPdSJMMYbmwkVQGKkFLsg9QdDWaZbjQa3zmdkyT",
  "key25": "4qcBiFgFbed5R31HGEFkQrdm1vBfxSZXJbmXanU2KMDr4XKsTZCqqCqefZCUiXGKYiu9g4BNiDjGwxSVACeiRuv7",
  "key26": "LVCnFgERFUFVqEkV8NeVUG9JnA6Fcmb4bctdDA8ZyXUn8PGUAYYXthobnFUhzonYTHM7EXsjeKTx2Dowvyn8Dge",
  "key27": "3PaKu7L8CUoEjvGfUj37V1rrFa5bXGyPX5CvYMfNbDpsnzDmhkdq4V1UcdzomeMfyqsAXJFDJXHUuv9gp5LiVELf",
  "key28": "2LEKb65Tnd7YNWfRceQ4QKb1AkVGCH9eBgFNpy5YXrE2R1o5HyBM625DjRUEGP4PaxA3Y1PFqCMpuoxDut9ZAmGa",
  "key29": "3xAyLwRNYUnaKwHKYRioQDPtGyohncGytyUK1B3SKBU7gkcaQeDV118Kk82RXWHGs4f4RZQDwbTX75pwJqrpoguu",
  "key30": "1jXgqx9XNNvn8MThYDMAedrZbmx1QShYRqd9CSzHo21MyPa6EsDx6iiSg7Dz6gC2bY2TwQdnLjUM4XKpfR9jQbp",
  "key31": "5J7kDerZ1W7Sqi76P8Wvd1tntkpzuMBwJCHot7i26LvoDsNrpdV71wa8XEJ8WYXf8MVfMY68EtVvnZvcAag3z5oC",
  "key32": "5TxS6qLojvdZvzyJyaJdBh9xiU2bdEK2anHX7tB4SWwcr5VLzcrM7ZqTih3V4XEyWvLACdEytBfExx2R7k39Tw34",
  "key33": "3TCfEyWtRB8D4ftk2qC1piwHmYXSySUq3RJLH74chqHUJjdkPQpYKi8bJrfKuFnEAXQj7kvxxf14tF2oJuua7e1W",
  "key34": "4dKCi7vox4vbZmnS5hSPqHkaqczroY1dqn97Lebz5bQTmWPvBBiEyoKMahoB4DSoxVychzWXZTdbGVinuEwuA65F",
  "key35": "5Dy5kMF5uYQ9GsmWu8hiMyKFQkXq2JobjDYNrxkyzi3rqbebPN5jwBksfGQrr8DRzXsk92FgYdAcU7mtLP6xAfVx",
  "key36": "5MsfRXZH2FkpqGW5vyjE813b2fWmkZSEFaPVJNWE5QTpuqGMV39G4gD6Z9bAzBcv25KmoojV5cDbVy3zCuvD7BTq"
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
