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
    "2EiXgbYQtcTFgBKU9WZKSNgS2Cw2EozQzaToVyjifvzQ98PSufR7MJj1px12wNGh5yGaX6q4CY3suWrx7YuFJUnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQLvG5vEXxWXB6vtmiKFo7Ry11WZ3HBnDW9RxYWxJK8ZNysk9mQxrQAsJ5HbtuWiDs6xPjDCTkw9DTyfdfgYyPi",
  "key1": "3eQ4eL2xMqptn63e32nUSdmtPswUDJD1tAv3M6tkWT6GNkMWQS2iEEWon1sFwcQKZFAqMVvtN19A1PVhgYrR7HDn",
  "key2": "5KSKPgWo9tQMY3dDjcf7DocRbGfCZatFyREztm1CCz67LLTdvdgNsYLrSRFWByKrXeFb7ZmAP2HJTBfLyJNSseBB",
  "key3": "5BaSZTJPb3YuV4mgrrnW5xTevUtiddMNmyq5qTDcPfy1k12HoHBgewufkhjvod6yY5vjAtTxzA6T7BcZoQKWkMUU",
  "key4": "4xdgShzkCGWeAGhfApvsCGufEGCnew6AUxWWVNNB2KSZ4Q2TjSVu2ornnrKvRkRh3zaNTSTGAUUu4HeFbcku18mQ",
  "key5": "22vLcTnhyPEaf4M9ibmBBjyCQTCAprEjGndJQsbBesneWWjYgaT5t5x2SLKmg4M73yHbh21XVmSSrm8xnX6zUS6Z",
  "key6": "44aTAfPYVWcq9t1Z8YEAshgfruCzhGg2jhB4tA7tMjAbsXj15SzARwg7r2GPwksqxLGixA8Xp7Er8HfqxUN7SbFm",
  "key7": "xPtcoCCz9z96ZB2pNtYW2NjmAJLi1BvudtykFBWW2NUc34fB6d7HmsudhKuzrJ2CL8vhJ5mkFz4rto1ZuedK4Nv",
  "key8": "7nhwox8fMYXQNycoaiSuZLDqS2ErcLMjb9eaQtiagKQengLnvVXgQE1ht22Gc1MZEX97kuVVCDhBg5nQPvCfdfG",
  "key9": "f4EpcJydke2u4kFiV7kmNcSKZp3hMQ5uC865D2g6zLz2erSZULjTq8ezkXeeebDHVLMAbejT62hRcbT8NvHr6GA",
  "key10": "4VR2vzzg9fLapPwtogK56PFU7nfzE6fUnN6bRJJ2v6UjcC1quzhULh4AvE22naZxWK3SKdbxKQ3CNLG3sLpjxBQx",
  "key11": "61oSn82P4dkm7Su7mGf8u1SVBYQCNnpwbeUVRYRS4YivbsCUAudMztMdLwShkaaPkCRfsN4mPxCQDnXEo9tMMSWy",
  "key12": "3BaocqDyXrmRMALvPVNT4wMGBbZ9qDbRBpttCfYHJjZmwU91cGgw2hzP5eU66NdWTuUP9PtfwWAyPRSPP2TNg7e4",
  "key13": "33AZ2RfQXPnqmpBjywHPpfrUBGSdrUkSrAj4dBKmsxjSn5VF13UwrsEZHrJJMmAEhXtAw6TPG8EhgGgCdSKjQon4",
  "key14": "z935otPo2Cp8qzFs3qqL3Dr8giA4HX22NQqkozDnbF7UveoZSoMpSP6fGRsiMKhcRxbyMWjiag6F3iYzrUCcJht",
  "key15": "3oodWKqGoKQAZpYmjbPb3VmrpHQpYtSRgdKXvKyrmAnTEgZUSgyLeRP7k9enKKFQ8eC6Epu3SUQbvx4ux4mfeV3q",
  "key16": "GEoCRgCDZgFe2WUg9QP9bQqbrMGNU37m2s2eZNrQLUAikbzEAS9VDDUESB55SGHmySWPZyj4o8SxW3w4A2Bpiao",
  "key17": "2Ap1N4vHBcmQRdLbNnMiW1iB3ywY3oMgeKozrX9U9cCjy78rfPWMygiSn1SBAb7aV41nNzhZosbAsCVCZTEAnfjL",
  "key18": "4oEgdrjaDJ14Eggf23R6pY2g2trxg6e5bida2BWHiZs7ywmGpWyPB5vPSZgWSqRo88qLffjYRP4wXjR36GdazkqN",
  "key19": "5uR5gFBGD2hwyRkbga8MU7wnc9kow2PuqVgeGXvfFDzNRe5fqoeSGxGxP5JK6goyHLWuTpg1SkgVmRgCRuZdWjK8",
  "key20": "zdyU9ryBKBKm9VxqdoPBwSqqKvHANpm9MXFhJrfG9NiETvZf7eg6vWn23PSnVW7MQZrE5UWXredCP7eNW3b6qZe",
  "key21": "3N5N2nhP2rJ8U4Ux8MWVD3UBACBurKj6AsSNXuE6xXRQ62jshbypg86Tr6tiYQH2WVBomfxvno6y4kSCNJhJVBp7",
  "key22": "LfSj28ADZ8JFVNxu426XEAhVWonfyT249yqrmNyQyfKes8Sogcbt8XHD6rmTECMc96VDN4ddoEjpL5UzypAABBZ",
  "key23": "2q5jdotTvE9DRNu5MTEKUPiJwyeLXSupu5K5FJ42FQj7yw3CMCGAoHhdUAj5DAoFTCJdLNnKNjxJ4hDqNJGXkFDF",
  "key24": "3AjspwLMiMozimGACq9eGfMMFP1NEpceM6yAyRjp7ZFyCbLhRhhNZp7V3UDT2c38PgsPoAhKPYzE1fb9HUpxYySc",
  "key25": "zV4d4Y8cbfn6BVxjXLAQPoiNg6YWNr8VSophpmk7q3YhJNwDX7JQX8j2HfYcxpFrXDgnqmsg5HeQxF8C4nUKYrF",
  "key26": "4XAX7oY5sPPJU4UJsfSuUaPzgJsKLwQBDSiyqYd18DLSzeXFyPQPudgEDs9M8de6QWGCGBZc42HEYwufjiex2zJa",
  "key27": "5FEpLcUwr4iZjA5KRfNHgDVKmsPKD3d1qr85r6Z9BkCowqV6hS89eivz4kHcgd2v64YZDoMLT3H6FVtifjCE6KZs",
  "key28": "4oFHKgvrHzT6BWUamrz1pZrSdM6wjMrHdNeaqeNN3T8rUaRqib3qiEBsSNKJ9veQt7sq71y93YMnGe1RQwduS9NK",
  "key29": "H2HtavmpTjFGrGBHZx4ihCtfN4rQKCJ7tiojcQL73Fbh4QxE5DPkDsjaBMALg5gQ4dZtW29UXVp5DX1EMEGNEde",
  "key30": "2W8oWzuHG6jM9aqxqiCqMAU3m2pERFy4nRkXjrVumkCV3sDovM6uoVJpFsQ1D7Dq73c21zAc73pwUnERpefkhQdX",
  "key31": "65RCpkKLzAbBQz5dCtgKFv3dpYZV6FVpeBn2TnstoDvLakK3LxtTpPnByKer67HcFZoHiVJL29AMiVQbErGYeGga",
  "key32": "2sAma37YvtE15ZDwKYN4NJFHUX2RbKwRQAR4HnZbG8FNCf2s7bRokzrHnTHH5ayHZBX5piS3RPQeVAsXtMzhNznw",
  "key33": "NMQFj9VPk9b3vjpQZWUr3cXka8FHpDKYK6YCkFYqHagtmp29avECadjorXs33rptdygKDe17E6DApVwqDuc4DHP",
  "key34": "2Jhba49BMyraeCQbKdA92kJH95vj97pRienUPmRfak1SypeFsb9zJqAPYhkaqY439H8avetUMWAzczMuVRnj2LkE",
  "key35": "5vNAE8PcNLyTJqLvr5wFR2WAyV9XRtbmtUPjr5xge3WjT181xhMgvx8NuymcPeAu62QSnQ1LKdfFmKHRYuXk5Ngz",
  "key36": "3U148UTPVkfNGhemu7HeMY1MgR5E3B39d6dj7mb9D5mfQd2oJPJqzwW2UZgbKxwRrs4uCje3y9QUArhvkr8iivPd",
  "key37": "2PSrRtHN239zE5mCsg9ABEcvjvjBGHi99zLoosnecmVyjXQgNZQ6jYJnmLcSeT6rxg9pgoAeiL5F1K5Yv2kXFMGC",
  "key38": "3xPFv6MJLRLndmu2fnX4MhYKR1FY8M8uQAyxKuiCQo1bPF2PCZRWQsbE5cpaATnnD4rgqfU2fWs5LBfQoCpYvayY",
  "key39": "3fbFrBjjCAAwDjazaA8uqd6MRfwW1d4k9cwkDbWoE2HzoFrhnKZ5A9viuB2Li79mhzvFc8eJw1frj8x1a2uoXRsF",
  "key40": "2zsxw3gRTHyuRSZVABzg5kMriF6kb9zDYYDowigEpxc4Ji6JWrLY9EF4iwRffqEecAJoPrmG7nA2geR4ecjVDYWJ",
  "key41": "4DsUSB7n36DNEeCC6vfAF27MdSjZYPsBKSS9CHTfhwefCsqF4W6JraMPGhz1C7VEJN2yBwhYS8s4U8LvFUeu46dH",
  "key42": "4xaXJG3NZzyyz1zLcScBe7Skd4URvejQVZf3pjJ8EftQUvYpPL2u4sVaPWKnbaBmEduApxZstkfJWD8TgixFg7W3",
  "key43": "44S7QLvwsZ5k2fC9v2FFvCzQ1hx57qcF2QtfT6xJ7b9KZEsXTGPF5tnPsdwgFzrhqRxAFwTZdoUmddVx3eRSacpM",
  "key44": "Ez53A7kkQESkoDdDCDnaK51S9YWuohqcaPgt37xbsBVHHinapVV7i7naaL5uG5CYd4rWJjjX42RtqkKU2kUjQ3V",
  "key45": "3fD65s2Z91cXw6MneXUHXF8D7eyTw5xjSDnKSAK6RmWbXHqhy2pBw3orvFEykfFGMMSBCgVmPAKb68q1TZnLbM5z",
  "key46": "39h4VivMpysDSu8jwHSWZEXfAW8hZJEDs5ffR9f2NXciyHJPQgPKKbWkWjkq47xrE44Qxnjhp8dFuYTtWXiL1A3g"
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
