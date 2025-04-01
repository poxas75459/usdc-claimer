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
    "3CiBsY7zYeYAg52Ls7iCpFyyhZDAT1GyZen26GcZT7LSYe1PHL36ejY6UAnj3XRCgX7ow1onNjeHPCeR1pgCQzQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNZhEQLV7HJe1T3btws6gxpMVNYpMqBiZwqcMsLsASYegBnKddjJNeytnzawHKL4Lkz7oYFC1NwtRD5RAzSVzMy",
  "key1": "5KjBAkqq63xonBDGGWx6EfrdtUd4SsFSsJJM2RSHE1SerL6K8kac96MZoy1M46YM8E3gBhJCWNprzj64pZ7Yusw2",
  "key2": "3X4WjCRTDDqLxSvnEXie3rLQxtbYVtnZBjwvQsiiA5FEczBvRqRhxE49CTAon43Tz3FEpDwXd1p5r4YUYSL2oprt",
  "key3": "2Yt5Tdj8V3fHPDCSQFC16JYiHegEadYS9BDgCKd13jvdzCJweJ67fyHUcDz2hieqBvEXStHpQ13fLRsxDMrqnMp6",
  "key4": "5wrMPjhXpqnKxdjYeWtcAwHuLQTnb2jh5ikgHA8wz3ZNrnW2W4xKeNW8XvKE1P15eiPt5SEikaKcNsDZS5nGd2q9",
  "key5": "4EGy2kTdU7jFHYxoFHyKtYurmD1Dv56qc2rRWXqy7thVBP2yiCceZ3eHLGSzH4Eyh5fiJKpmkkhqTZFzNgPMWMw2",
  "key6": "rDrHzRN5DecB8Zqa2vEzWAk2R13dq8QWEm6XWinrGGw6aY2mMYngrHmQ672rWPYpHAjF6NEzBuhkwrs51QeH6BC",
  "key7": "4tvwjqQTKQ55FhqCaHDWMXpRQ5G2c9g4bAuNNgaZZsS2bSygsTBjJZtdDYhAZR5QoCzt6mg4EXWMEH4US9KTZvfm",
  "key8": "2TR8PoX16AhQ8TVMMPyvySLCEx4nYVgRiJFkHMW9NFhxHRRMboAnfaZKRtmv7QiTGiKo9A44rRE1NsbS2PcB7sKj",
  "key9": "NKP6v35dasqo4JBWRXz46ZaEWcuQ1ViDaxiB4EMaQr6t33XgVXzbWw4gBGsJo2qkoafA1rSt19qFjARG2XhxmSt",
  "key10": "3ZBwvdtFETxdnpwDPajD8dj5Uh2pe8avUoB6kHexoT2sDRgGwuhnMQLCwYL4g3TTWCKANig5Ucy2iNx6eboRvcpv",
  "key11": "4VA7LroyyVQBKgW6dWtPgbVFUkfi76y9hVcJSpAX4UPufsxkbj8jvHLNVRycKt7xgEhAu8QrGMZmM2a6qmJv7gp8",
  "key12": "3zABhs8cHBJ84AyJGH1oLfN5bQ9rCEZxoqTW6fQNLkGt6hYFJ1JKg7jpDz62eRQuUymd8BMXjixriZahfYitrV53",
  "key13": "42hdhERsJwHZ9rFBWw4HMVGjUCx4Rbzqyr1YBWwGQHbswQtKiYwvhWvwwwtfo5YFdSxycnccqNG8YmvvDdsRP8nf",
  "key14": "62vQJUTCxnSs8xwxLZScADCnDgKpkPMkh6FV4X9YVLbs66R45jMRgEFqem1mc75gqRS2wUgSDdxzFGCqQrKrMqF1",
  "key15": "5nhKx13v1vtt7wAfqNjALLEHm2fX1FH8rdncdQwuLe3Bk8LatuXqQbkq2yU5HcSf7pMKi3L8aMnpeSngVyamp4CP",
  "key16": "3ageGY5R3AM32fE8ebbC9aNKizohPvEuk7zFVFVwQtmYLww16Ec9P2C6KhADmZNhLHXofu2wGcFdXxpTAUwkcdpL",
  "key17": "zCjuCDMcUsnbym28bhtrDq5AKrtsw4z4AHhs6ULop99EWBVUSHwrkXyUzZVdXpXYrh4C3KDVG6q9TuBy6UCwBNd",
  "key18": "4YCeW13MJwxi2sSWZDxhwL4sBtju6BjWirr2H3CzPJ4BYWTUceXuUSWmd8RaJp13zkr8EMQ2DtiJcjAo1pWjQzim",
  "key19": "XVACAnXuVFnz7Gci9gY8hxXVrvF1g83aTv995uN8gEfG3whgSkBSNYDpUDKjRwXxLjW3T42vDWtxpaeQSYdRfPw",
  "key20": "yFvtBcgdDNBnvRBFezUAXPJ929gUmQ23XCEBnGZfcH84nxoEsUktk2MpxEP2w2dpi7u68r7Tr2B5QV7Ndxov7Gp",
  "key21": "3NH4XCit2NzuFAgwgmiK58z3iVMyXtoxQrGEjWTfVdwWYsaUhQXDk2jqSxKDFPfZr97VWoKsWmDujut8v2r2hipo",
  "key22": "4XTFw1F9vPJvAW8UhN6o8xZNpWwp13LzFMcGdYTLhhR29AUqrGpEbaQDPrfiRgP8ZzxgY6QYkMUxDLU76mgkeR9s",
  "key23": "4LNzrVgAUjpAbFz3Lg4CZovE5pX5bEazqKK9AYmVCLwWdNqHC2sNX2dBW4noiz8URwMFfyP9b9yLtJ2KvZh9UDQV",
  "key24": "4Frn5DrYWM1P4oQ2PN25qezoZMcbpzqfSKw6UY5fRroHZiQL3MxxafQ2GMcGNoHQEhU6ZA22BU4cmQXC4Wy1Lc5P",
  "key25": "35LjwWtAfMpqd4RX8L7a1ja8HbXSJHYVbx2FUZ49FFyzELmrc6xL45gZ8oxW3ia3gAprW3Q7RHn7YBFLCjvEwZHW",
  "key26": "25D6PWKwrEueJ3fequtdKTzsAxrRqAMJAPvkKF6fuP4e37tyYJnCJuRVE6jacUjkRwdXTNXtqNRfjtBTSjStjBKa"
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
