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
    "2VLrbviHNc7MKgUJGGu5geBKziWpebS1zp5J1XTraQtBwWBXY4KrNgpSWWnHb3NDBbVUwyJZaE5wcDev7gbar5JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeRV8np2ToLvfarqELJWHsDVYgEZRjC2H1tLT8hwj3t8wEA2UeAzN2KUCr7AjpyDX92WYytdz7kXdkaentZHmbV",
  "key1": "5ZbnbeNmgF9WAicg5eGxnGMTdNxtHDJzuUn9EVe67S7hcTQzTxXJ4ycCtqWe12Mc6cDBL3g9UoPVpzSoPFXhHDaq",
  "key2": "3zcV6AahohgG6WFjevjLLwnHLXyBA9npEaz5q3Dy2JsEqiaPDZERvHxYzo4hbifiARJXBg3kwAsLxrtRJMSuYP7y",
  "key3": "Mt7p42Fgtht2B8cPxtaeT2j8P1UcnjK3YJQh8cMcHVdhETzh3aMb2rXaCXVQnwWge5YzZPfUjaMAgGHiwnKwrsh",
  "key4": "4M2E1vBedR9EXc3rusnW6sbx5BWDfxEthnyj6AFY6dENjccb4ZfEodxPKxreepkHPEJGiDcAYX8BT5HVVDTh3tRc",
  "key5": "3H18wzYv7efeP6C4ePsuFBFkrgps8VhS5EWZxgoBmyvhcbrV8BFeggDCsneBhYjhxUUcMn3Jt6fjW3uvN9q1WLMB",
  "key6": "4xhUbGbGSKGSakCZwB9ZeiWYj2PQCbAcQPbCE84txizdo5uaTQupCMhYiCRs6ShhQUtJ9vbzNkmAxRxvYTdEDbdP",
  "key7": "3DKRx7eCZrKknYZTd8q9cxDsCE9NYD1ypHnHs5jzPS5bX5b9BxseKeWbW5W4vJ4StPQEAi6RfmMW8AmuS4EsieKF",
  "key8": "USaJBKJdX2wPFQT88iUAWwBG4DCzkrjupS42SyX4f8FRtpKqnNmiep1XF6vLAtMLZfwt1WGGZLpmCSjnCrJqkGu",
  "key9": "43qam4NL52NhkzKL6jgLhhj2t6p5RFsFGS12W292Sgt53UFzLdTLExpwNTekyo9oodC8hTpVEK4ymKz3pUFhV9V7",
  "key10": "4jPvN1NW7yDthMbX4QDNvzaiCgWr7ZNH751gX1SH9DoiNZYuCecvvUVdtDXqfHvQdiYDVx1LN26D6LeyahMJQSRp",
  "key11": "2ia62266PQ4d5pokJMpsXBNG12XbKHDXqbyiaYvtM3FbSFtnrECCkL22xgFNcMubWjvU3X6sjHUMB2rahzWVizNR",
  "key12": "5W3awWPiLiH4cYKjJ3sCzhmo2mcxz5SqLvyrZJS8hMepFeYd7CN6dqgVACwF8GCy8mED9Mu2NJ9EQDusvRBmtax",
  "key13": "64DBkTiseegE2ey6xvtv9dnDM6C8kKCWabp4uN19oXS8HdWQWiudWRSBBoBVY1vdJQQaBZfK25TQcNLBCtnxUdMM",
  "key14": "2CQU7YMAsRo4YbGE6nQGVF73U1jFhH83ysoBc9w4m89cQY5RUsDN817vcSbGLfRFHE15A7ayJ6B7sjQcShR6C1Zq",
  "key15": "5mEMEamTvvee9375z5txmRGeZ6iB4iSff68EN3SUwB7AsEXoR4UTrChaFSwvrfpH2UAz12QLeVRg3heBkrnb4ofU",
  "key16": "5QV15uv4hTtgr1rJxJEXxty7fyx9FxNAgHXNpZp5pUtGAUsRFMTdUBgcNYuSiUGNyHzC2oZm9UjnaKGYEbkkZ2QW",
  "key17": "4J39XT4t9JUGvRZZc9dkqxhzWchCy91c2ar7Rxvr3LjNoU3eaUiaQuqkyXCmyhoNtogsjNA72x9tcSuo6VsbuPYK",
  "key18": "3kqPqjMB5Nzi6kkq3FpLC8NBtRtndC6o8kFQe9tRMMDkYMjmX4SpTMVqkEnKoRfoNsayi98xAHao4anyQUUwwL1n",
  "key19": "4aXV5spJKESLxhvpBUR8GchgmKqRv6kVQi8C8G5bYTrFTrMGTn4evqUr7R7xUyAjUqEm4tdfyFUnSabpCZhhuzYS",
  "key20": "amb6RmtdXG5dZquzitkPvdbxqQgY8qLnd46vczWR2eFFbCjXYEGYn6SxLSNczW724Y5XZebzMc6XywExEDz93ZM",
  "key21": "NMAoMhbSNC755a428GPyeJN9pSLZjtHcumcB9SXEKFEj57fx36fzgjfZaY7i6PPNr8Q3KDptNa59FSWv5WbyNTT",
  "key22": "jTNJ28NMpuXEx6V685MmDKoqeBKRBnv2CW446SEtgHN7z8LKZ5H4rzNwtnyGBhHa77k89bMZ9k9XrKTfWVBRsGU",
  "key23": "2vtZUTWzyG8LPAqVQyAmBFmx8HG8WbUeG3cxQqynJTA2jFmPPw6MoFXoXPp3xX3hKwQJGMGAYEX9UuWwAQB4tY6K",
  "key24": "2eWQo2b1kBybiqn59jMWk6PcpVHKJfJnvq3KBjeRPU78qrUu4gebcAF32GaR2YraMm55qneNtb28rrbunjiCXyis"
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
