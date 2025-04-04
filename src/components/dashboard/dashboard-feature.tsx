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
    "aPAv4ktykvS8wwctnqGFZCcX4ZKT9z9uumZvYYFp2MPL8HATVnCpaxHf5FX3ofARS9NGfnvyNUdC8pw62ZL4gek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWN6BZjpj1bWBocgBKe2LFxNhhwjG3z1MiJ2XAS1UUsZd318KHaQ3rkmHbPa1JdoBKVNkxguu4c1aDVgqdVotjD",
  "key1": "63M2jB2VMN7fqrSmvwaai1WnQHJH1LQgMcarynMjkSX49CMHvraNSEd9CC54XYNRWWvxEXo44HQsJNvoYYhzfaaj",
  "key2": "2oAeSZuxcQ8UvoHDzdBogyXC3TeVuk4CCegsUmonMPsr9M2QLgSn7QthX1VaGCQzJQzc5Y38n8msD5zHw6gaBRde",
  "key3": "6245g73BG16uZtLpWyoVLqJ5iTHYWR4BT3dVGGpCHadAbfVfwxnbC195KCs8SG2hTMi6S1obxcFd9cfmwMCwFHgQ",
  "key4": "4ECmJUM9xr3MKZPkU9FZV1pNFxQRe73A7L6NVxXBNyFvS8wg7vwfyoSRYKmCrBe48NPiVGoaCdfKTwBBjXJdN7iE",
  "key5": "5PrBUfMhaMxNJnU6EdtB9q8r3J4Xa5Z4ayuGBBWtQ9UuYFBHtnM5jSb5BWojX7GkEAzSTus6p2o2Sa2dWPchopyh",
  "key6": "4Hy3i2Uhe6K4HYPs6r2cZS8RguxVTfJsVL76XvBrmSAT9H24TqawsxeDW7SZJFzusy9ZmhuEBmDXw2Xgqrt6jbqQ",
  "key7": "2vVDuhoQHpwrw1wVdKcCjCJEeK6NgNvo859zqhT3ZwKeijb1iQkWZJrXQFjNmeun3yt3jk2MZVAAFqe9wwHe1Qwj",
  "key8": "2zUaWPRmkeyKJKVnotDAVzvtouXpNdjRaBUDuu7F1LQ3ZmWWKM37u5dKfcjfUPnyQDnQeTmrLtFDCnM8eawnLHJ7",
  "key9": "4S2fNLZK3VU8H1dVL6x5z67WYY4WU7F6pP7gyXXE3VptVXFEnaBCPTC8aezZdntA7oq1nAJmMykFHJXHoMdT54zn",
  "key10": "Ab6p5cF1NgVej6t94Fp2iVBEZSdNkURuT4JDXqJf7Mq1EAUpBHsK9WHXMW5aSgK7i8hVeUtYprb5gcdmLksN9KQ",
  "key11": "3FLPZHsQ6CH2pp7gpD4M25r8KnVan2eH1otTuX9qHwNhopgVY2Uiu7WsmkGCehxoMZMqpVRCsikMmJUdAwqjozhJ",
  "key12": "2ADGL9YW6Vd2mTBteJKkNS7NCYucWxwTG2uJxnBScW516GkZWo6nXvDv4vak6yc7EnKuq6TRujw4Brmnydbb1h58",
  "key13": "4DnN4x1AMHC5vvoRQx9BD6ChFjTYyTptvU8hKP5acj3oJ66tqFTjPA6zAapGCfgBuCWLhXh1YPajCn6D2vSKy4Zb",
  "key14": "42EDWVa2mNjcGUEnAAS4dD2uVLmERy44qhmiJuZRKuRMWQtU1atm33iVxgDrAWdXEQhUh3XtTV8nrUTY7ajS1ENo",
  "key15": "4jUg6S4tDqCxS5YTvqq7PdYWiECpuoPKEfog2THFyc3pCU11x6mRPDtarxFmYsWenLv8qjPy36Cb8GgBWPH9dDz6",
  "key16": "4QKoH8TuKuT6A73FbxGeXSKQR3TyyhXoh1HANRh44QEVcmv6orQWeNJ7DS75fBbBrZNyaGSgHv7NNT1A6i2HNiwX",
  "key17": "UdNdKPhkFn1AfYuaDaMZUNpMKjX27bBsB7ZuzmCbJNY73zJXnyE3j9v6NiHP2DupPPuxYPJiuYZ72jNQFrWQbdg",
  "key18": "5rgiWfhw8MhZqKixtAcLBtrPhVkrMJKc855GZ4wcR5UfAeCrgcy6386E63T2y2aXiKQGniBkWje6k5xPxHQNEWvA",
  "key19": "4fcr4jAqH45tYCFSotEJLNoyRnqGDjfhkXkh6f7qcbdERwAgQGjZB4yT2BmmjFcLocqXYTjnPZFu7XeDbjA5HjBQ",
  "key20": "4373u9kCwBLDSMrtuhAeDz6QPuEdHVNUBmcNRoJLm84Gr11wfWBmZ2gdvGHEeUXTNMRnCZiJyLXpJHFj8CCamn7x",
  "key21": "5zrDmGNV3psoV4dqMKuqhZomJG9EPeCdhPMbPWZBdLBPYTWC1Rs8LZErXEo5o5iZwomtEdgyxEhwrAf4HzdsTDpV",
  "key22": "53uY1rdxTSEyA1cjLnMaVYLmQESxQGsRb7N32udNtJQ2mEtieFoka6cNnQFWdykXUnj6z5vMEUHQWjrPKKynPYev",
  "key23": "4iueR9fvKE6shh48XrThwPCMTyDGpnbPxhhhBdUhFrcUwURR2MA7Ahcu9HFjhoUbnyAncFdDEVytRXc3VvRhNZFr",
  "key24": "5R1fLFDbX5h27VxCZ7HP4wW2JrkHEzdLxqED9hEpf1C3T7sD58peL4heizDF7gYrtHm4zCZ9FKwknohnykzvbYcd",
  "key25": "3H9dUEfFNfcqdJYenGeJLzYp8TY3kWpePtX1mTMXgRKUzVDTWtvBcCdamkc9Uyzat1yjApc2hkSYZq6Pg3RNDVKr",
  "key26": "3YnGs3EBPaNRF3nii6rJG5vvwYBiZ4xiV8dgXuB9F1pW2SZs95B7hZXhVAnUVc1S2GumPir3v2utyFbMe1zscv1B",
  "key27": "5qLN1R1y9KAYizGYdei5u3yRnEJF4Q2MLPcZPzNTmy6LNMZCfPYfaVLop4rkNVLmxYP8U6E2dihagxSxthg4hB65",
  "key28": "uxhj3VxMC3iKav33t6motfsebVnEoKfzycM3LWEnh8hU2w2ANPaKwJTnPMft4FBe86Dhg9nJEwbyXayhqSTh1fM",
  "key29": "2x9eXXNtgfj1Jmr2JNq5scLzXAVoU9BaMwppW2FkLab75wPtbZDkTrFD9iRVB71HArS5XAsCeDwcSxcd159dNcmh",
  "key30": "2UYgVA3aBhG2iDafJeELQ4sxcUtubC2skhcP9vxq5AkhNhG6g5Rvk8hZcxG8meBfXYHv6WwYesD3bUUakeQbowDq",
  "key31": "4hQsFckNTkpwUWHTkBgs5HAmReAm6G9ZCjgeNh5YdpkQ88NbJNhVo2pjNUqni4ypbYrb4kJBvgNDZQdXEzcvAimR",
  "key32": "22M1NUmNmuPtSjC2Dork9dAAnejk39oSYDb1AoTi5sBsPnsFCnqpMJM6LHj75VbWoqxJivMRAWVB7gdAdctkaPQa",
  "key33": "24rwXm4FnQSdeYtmDu3ZvWjCx2WvYGNYFLnJW7YExxY1FYA2s7qPC9ffeki9MTtjtsDSCLM5nSRzzacC3Zk4tfEz",
  "key34": "4R6tbH7R5jqurTCHbNYXfGcekxVd2k2LyCzvcWuLGxSqBZFA5TvzY4FGJhnJvEQAJkMsRn2KB5Q5fY1eZ5FMeLrs"
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
