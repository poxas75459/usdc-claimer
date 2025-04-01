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
    "3u2CTXBk8U4T4N1NR9aCLGBvdudpPjCSKyW5PJk9TA2Vd79J3TUfGN8EKNhpscasuAdx4v2c9Uw4y6kPz31gF7P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfHdsZkQ2R4zphE1VNoyZ2BfkddUZCConRjpJgr6vrS7Ly4BsNr4HZK1kcD3QtkvwrptRZJL7qUbAPu6R5VESSc",
  "key1": "2ReR18NLjtLiQAsdWKr8Y8DhfXBTj9Go28BMiLhHajS9cxPj5pXJjGwYwc2EygwZ3FzZubMH3DyhbjfprYrMs1iF",
  "key2": "44EjXCFUpBtn3ciVnGxBoBRTWz6LSuhdsyqBWuY69QyhzT3BhGUvHTacWrYDvDYLkijgU6HR2euMfKKNvvfYoMC6",
  "key3": "5onsFW6p329uzJPpGnir7RrZRMe7JUHWFdrNeH6mmzYvoztmSfM9ySStT4E6Er2BQzrU6TouWe1tYPu5oaZ5oLSs",
  "key4": "5w57ZDU94qeRoxWm4TSumAv2zyof9MXehBkT4eyA7nTEZJncL5jqYcQ2fG1EQeow5LZ1QGaZR1chUycDuT9UGCY3",
  "key5": "1rvQcpELREnfadqM7yTWu8NgSBGnY8yVtm2w4SDPRLYKYwbrqvbKCnK6BuGcUMKvSBCsmEaz5qafVEzkHt7ysBB",
  "key6": "4HUwEg73s2kZfFW7DaJRR9E7V3SdK8KmkSkFkoceWUAtpCVS3CJTmUn3oSGWt6B4MKAbXhJhswX6tCvpb5bFzyFL",
  "key7": "3HWLHbqU6ySH1iBQ7piCmmsSpFXchVBnLLqfG7XkyYBGo19C57nvBqXuSEMjbLapxnsnhk3U1Kdxkjivbjz9hkXY",
  "key8": "5rr1HPYpHGUcuDjwt5e2bNMxoeR4NNXbKiHria3uixbBBV8NzaGfDRXqQouaEerPKLUrJv1kd1qh9p8HWX9oiLpT",
  "key9": "2TMadmG6a3pZUB9MGneQQSzWVYcgPG3zgRDYqoKo8s4tEA5RVX99U6xZvg9Z1gxBEbQxee1KgPhKcscznetG9eSh",
  "key10": "2RP7KYTmPPYkyfyMVjfSdDaPQ14kLhJpFWWgkHTEqqsoZYTJVPB9ABVNzQJRBNW4bmuz65tK77BoB3mhkDtBxZqe",
  "key11": "5B7vNTodZFu2cfM4nT5dJAsyLzY4vomm8xT6SVixKsHo3j1Ks7hrmHmaRBSkY3ajdJM6xDxmwgqUuAvf1La8qkiQ",
  "key12": "4YdovbbwLEGiedZCgxSMLeCHsAYx15SsBCdGvw2nzrbjcsrVg4JaMsiMd6tXvGWx8fB7tQaA5P2kAbp8SZWHEEAc",
  "key13": "2TaMF2jKmd3Akh8Ro7zW6ZRHQayVgxbJBzmug5egK1XhWpPgww8xQg9nTQMoyGZTSX4TmgSZ5zGZb6G74kqCiWy4",
  "key14": "3i7iSzmbBzrgBVjzToY96gzjmJ7cVEp8ySGNfoY3k6JmHp8VLzdRxsmVoa5ofm2XcxT2TJRXV82hTqFytDQiPRax",
  "key15": "3oirsEwuDc5AfKvqQRyZQE7astqbGhLsXhQwhZLmeSgkW5ThLe1fPyjckrGE3dbvR9Ji7ghAyaSG3miMSksBQNFW",
  "key16": "47CvGe3aHhRHU6r6qTGWyNo2CGY3xzf81ze7wdRVixRAdGiXvxXWS56VXDKtW7mRMywumC8E7Rvho4njNk9MQc4q",
  "key17": "55Uw8YA8rrhpZbpUYXsvfofr93uSCotoDhCSbTwiPgHmgsLVKJyqJg6g53dRLXVPk287fUd9KmDZbMzMw4wwEyep",
  "key18": "3k5E1yRTxcjjQidahyuL6kGq8vJcyFRTm8dj5NejV2FUqSWrL1DWQyZ4oY557gVtrfA5kRmaNkCERe6BWZeJcphm",
  "key19": "4xmXoG2GhtUNnXHWxhdsGSni7Zi2LCSTstM9NncmxwMiP4mQXZEABCcMnX7NJs5qrsCzd52UrwoSDDgwoegfez1p",
  "key20": "4cmnXG39JXAxQEnaMTA2NVDLsccKQ7i1sNwqfDzngpdvo2uP7Tr4MFJuhcT1Yv8btZNymFyeqHztiqi6aVtUhEHG",
  "key21": "2t6tnWsGQzDNCZLXmw9TMYkkxFLVzZAzWpoe42oAQJN4ba8WojudXGotFc5uyVHDuBzbd2EMqT55nCQaeAVxEthA",
  "key22": "5oCsggGATMaxWtb1auBCExdDdFK65krBQd3Jcxvq7i2ykDCkUonsAkgMqJdFu7YR2exXMJ7fnrqhBddLo7VVBMEM",
  "key23": "54765PUizXVAsMR4Ymb7q14r3CbACUuCWjtgMgUpPuCGop8iu56Mkyb9oeSTtvWjtBt2NMyaD1468VJ5JsMyBigs",
  "key24": "2qvxFmqzpR3yU15riFHcpLQWyu4a6f9xnYG1Erk2WZnfza53CRgGiV8kaxLxGt9UhQoe5ceYJu7HvALU5fWbEbUa",
  "key25": "2FXAdFP1HSGtkkuUDWvZpYWZUTQxM5meP2aBQojnZTsjqKZFHuEcfBaxt5kvuRJPoteKeDc78KUYiX9A2MYminab",
  "key26": "647vyu8To8ks8VKEcHmnHXVBryygGAD9AB3CyFprcVQ8Nrx75xLggPpY6fCSMvB3qR22xe6zuNDUSU1boSejpZtf",
  "key27": "3gVwdBECJVuTsXPa6ijrEPSc6Xi2SdVt6pZPaun9gJF42joRnhpWSk5nz6UUTeCv6EwpGSNitWTLhPffEaRVUqXn",
  "key28": "hs7WoPFPiNPLan9L9KkDVPXsy5Yi3rDyuSqgJm7BUs6UCPjXXDdHsTCzNhnP5TmEpJWoMxeXvaDenpjSWfuspWP",
  "key29": "FTKM5ysuaRF6ccyD8R1dxhLbkk49jW2BjUKXtsU48a3g9FZryLoZ2thuYKKLzgrkB5SFURERoynUAkv9wBMvirr"
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
