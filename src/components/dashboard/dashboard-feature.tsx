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
    "3U8YogDZBEf6gBAPR5NqTYTtEK8hz72KcmWnqXA2u7dMFMBa2HaBi9vTfZuDeKVp6zb2TXwFX2y65jK9g24Aor2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgYBGJzD9YLCH6AfXjf2BzyiUDU3PS4xghaukSqDFoZj9ezRRFnRo1QKyP5aNWzNqHQuMdbsEBWkWmuB86DvgYm",
  "key1": "24DNTDgrxy7miB9EV2KtKCizt6rVXhMutTJAdvA2whpeBp4H5bCFovmbhpGxYhxz8jBeUyKPeGVXLn1XxznQ8yRn",
  "key2": "2wbFbF2KbJnNxUxakYRdtxRaoUg6JJu9XBcmRFbLnysanonfJ5A7pSzsrfGw1BeL4C2Q7F8CFoh3QHm3xy9VYvA7",
  "key3": "ntVtLDJGXQ9dhFPcpAkTVWmdUA7L9kNg3pH2qo8T5HP3DhnPGiBjxDTjCxhttM34h3JYvN3i8yGe39SopzdAEaS",
  "key4": "5npFDzfivX2yG7zuuV1nifqVCh9K1o1z3XNNdRM4R4L7MjaGzW8jWmCAzR71prc9eLETaAN2D2wcbnuZnPq3zJZA",
  "key5": "4JFUNCpaHwfXmpzDbY71neRGRDJaybajdh9MVdMpDXjRRcGdQ5AbCjGLQrkoPN6D7A3GEoDYKkFaxqfWiRStMSto",
  "key6": "59hYFPf9xBLP9xCx76LByJnsx2Ha7QfxcLFJWbJYZebqNViWt7Km7oxsauA1jo6Qev7hnuPD3Ryuntk5w8naHAVQ",
  "key7": "3t4EEp1dU2KCntPV88j2Lq27SptpNVTZ1qNzeepRa3SkoTLYdXB8eVvoQ6pUHTZry7gixLTeyMmpWf7bzdp9xHTG",
  "key8": "5USZCEQCsGALCyKw5cmqPnnsUdDFiFo4pUj6ikTZLadtzPUtEDvus2ju3byJvovMywxeuKUguAPN3BMVYNbCV17i",
  "key9": "3ynYHK6GGKBCEC1TE9EqBjNdz1gb8tDfsFwsk3WRFmdTyUnZW17pxx5nk7BjDYB3gtzqSaSJMVqPbnVbWThzhGBF",
  "key10": "4YCZkdFzMafBNYXUd6g5Hg6ZUmNEJu3msondFwmHb1XG5AT3iGN2d1tnMfQqgcp5E6sa2onhJ2mNebPUN9kBk17p",
  "key11": "8EAXATtks7juQTnJ1XG21ATu9akL9d7XpmXQFZGoQRznMFhHhUZjwvJ1FR7YtSCQtYe7rwanLiDLaBtNV8Je1Pt",
  "key12": "27gQE3vvdZipe73oRMRJ9Xipuip5jsAqNpH1k5oTQx7sxG5HwMrxzTeGjyWijA3yA5qiG6ua5tSmeb3117dT1CW1",
  "key13": "4qkPdgeGJsoGP7csto2Py2zVFBiMqi9cFdDEt5zb1EQifBRLADc7bzNFnVoD8WewnKzvDCQRE25M791xkKSeE465",
  "key14": "493XS4uknaxAyBgceAKp4DJr4MLUYfaF295WnboZMsaomenfyeMqQQ4NHWM1E2cY1XSso5NZx7NuPfPBwVEYUs1n",
  "key15": "5ap47dHuVNSrBUgAuWvocd4r8dfwnjpFMWppu3DyNazeRkGy7dgPJCEss7HmAUorsbxbLXzddu77obM5PabecEgs",
  "key16": "2XhonWJv7UYC11pk9dyxjkCmBAXh5rPMP1xW9kGpjmnPzA1kVtsnxfkg44WAp1stvWHDFvRAuyeazvgR2FuL66XV",
  "key17": "4e3ZASoGwytgzPd19WMy2yvANnBM5XXYzzoafqrnS9f515bBRjx1ytA1oQya2u18yK5wXVKkJcn9CvDNsWFzTM8w",
  "key18": "35HTdRa5wS1HZQV9wc97peiuvJYnVuo81s6XxYnLfkwAiwk7xut9kik1msYgLPSBiLv9YuqphxEpMP4ch4jpEGDx",
  "key19": "2NqvrZSdP4tM7a7uHgjPW5M5UaxutFwouteEMF1x353wYZf4Cyyp6pGwCwJvNf5DQvkfUcPgXFZVSdgGaHPkrLr6",
  "key20": "7FwqxePkVePHFuwGTiVz6M84SeejB5fx5bSzVCxMykpXCF2LHyZR62nByvioDyJDzZsb9dLCzvdHvTdF6xfDJCs",
  "key21": "44fUosAnDXLSUKPbASzrHNkJg3wBNcpAwZYYzd7g2y4wDLKNvTwwTFnP8X3Ldu59evsQy3u2oze1TBkehkKZCoZD",
  "key22": "5E3CuLpsVGcu2i1ixeWJdnYf2VYVuZFW3fz95N1Ti4vDTn8GYC9JdstMxHpNyysrnGV6b9U17oHyRQ7Mph8uo1hz",
  "key23": "36jrmNcE4Df3sGe91xByP1tY1tEQfET15koKtGgBGdMLo3PM9u4RwMo4rQQRFBm6ZAg7jdQDm5Y4VAdF61RUuVET",
  "key24": "2CuijUDHJAJtzRjbAwMGHcGmYbVYsfawf7YD1R8Ae8MzBcaizeVGeRUKDknUJH8iWNUcmA2CF8WR8LGL4GdSaNrc",
  "key25": "3pbydWNcFamFKQEpBp2xgwWRhmZ9bk35RAtt7s64htePLuZFYQffM4Ep4zMEHUeW8BnMNr4e3BycyGaw5vj9n5fg",
  "key26": "2GbtPbeLYfYtVuFymtT6woF7rcVSJzEbfaPu7YdjF14uf2KXdvRhJQ2KNMi8xRUsXHe9Xy1YYxN6kfZ45jFwV9AE",
  "key27": "4ZfjdQw6bmLhRWBb1o53sncPNGB396bG5JctcXCFsyD2JRaxY6BCNbGaeotzqYgj68sZ5muZzYXKx38p68xZgTH9",
  "key28": "V4xiDuK6wzjeLkokgCnFw1vhRm2gzVFEMZgTHSQKEPjL9tNSTgHVPmg3z61sKt5D6gSPhQLCkFMViF7AuFC1AB9",
  "key29": "58ZKrSHVmbPR9jGmdayuYtsHuunmgbxeUZbyychPiygTzvh2Yz5bRyXvSqBe3DiwkrmqYn4qZdUtSe4ZMSJWQfqT",
  "key30": "4nitnapkxGjgiP5vM8igradRsBPMmqJdYAMhk2ktPzMgcnD1Vx4nBF7Ap2kqt2vpVJC6LAwxCskr3Pce2TxQ9zZg",
  "key31": "3GQHpF71uvb2eyE2WB5YjRkgS3ohWsf3zeBuJofjvPJNP2L78p3WU9xuk2nKnFsAKyt2NhbeeQ99RFib2LzZrqV4",
  "key32": "2DFhiaurCDXXGnXohHrD97mEn1bFBuZBdBxk9t9xcDAqRnEVgDGfvsd6ycfPsBMfAACqHyKLAEEWfqm3ZuHgLrEC",
  "key33": "uR9WVhAZoyZ3eDQrY23wExWMtRQhxr3WmxCLB9KfuW1fhoEj7AqpMRXx2fM2jM1jAz2pShttECYb1UXiS5trAFZ",
  "key34": "3DgVyBCCCKYxQpaX2DfuiBxiLVjXQwwpKeKcStuuazxNHgnMxu1uorCJ3bYnZ2KxKRVZC8zSYYrmF9xTkckawnvj",
  "key35": "2u833tvtTyLdYZqfQMALbymA2cvB6pXN18c93fPcjoxDTbEmhGZTGaRmnrWqcWxciiUG6sPvJ7J1jXK4yqsRAjYk",
  "key36": "4ewjaRdAXRGwWExraKzFyuMJZYwtkXfh64V3Xp481j6vFi9XuoojpSFTL9WCvkddgidKfxmGMtUMMeyaZDuwv8xX",
  "key37": "5w8SpVerpXVuqx3543hmr3Xe1PPLFBTAX8dEGbRzdmxSnViDBtvY1ArQprwHVfc6JR7rvDtWhCKL6Nko542fa1QQ"
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
