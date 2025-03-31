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
    "5nBPKtxMBof8jesyTDawLgii33DSxvALNiGKJoCVnirzXgK1gRoirfMmdRxrdNcEJEEy1VfgvXw3TAyaBNCvNN7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhUo2bcqsfkfJojwBgL3T1vbE14ZzNw82vrUtbwd17THLAKF4fjqjnAys4MvN2DwzoKKAttuTXrGg4ABMXGomFr",
  "key1": "2Ga1Fk8gGDVBVajVqwyqN7yWc7M4whxQgaaDAP7Hgfwu4Sihh12kDAdTvpNp6M51pTgK2kGyYAx5QDz94DE32o7C",
  "key2": "2xg6rkvfmZtBKXL3UuExENTmitbJttYfFWaWqZLSpMJyZ7DeG1fdPJfchw8eW1vfLaLYj2sgSn7L6rQnYHtNVtLT",
  "key3": "KemBm9K5YBQpcqDB9CqykMJvDujRGQrkEHtFUjPGfA4oCmBKQ126z5LozWgwXYnpwp5PbjrX3Y1QqiUtL1Yd93U",
  "key4": "5EnkbjU1R8NUAmN3BT7etRjbYnFPqje78aBF9YGzxffcHJ2qU2g4TCNsbZQYEC9LatKCukC6jxvQ4QvJB4uYNnRL",
  "key5": "4MNeYcE7ZfpYG9hUcj6e8w7j14jpWXQEUVzTFqttsHyo5u4i6JvK7HBHJ9UzPNkLVCqeQHGya5mKYSNRb2mTNKNt",
  "key6": "3NMJ7QKkip3oJmw5tNujSMacc51GivJHHLP6tbvoiZsNcm75j2sKkyMCFjVqk3mNiK5urqEiXmg7uRtrUvDedkhD",
  "key7": "3cUk3EP2UL11engGYdLVsM8N2A164myKmmVkWmRNAejAeELba1XLAmg1v2wBoaZWW5kv1ooHPyddKqVqA1dbMTcS",
  "key8": "2o5eM5HLVhKAXops3aEaJLoTRTDQkQZnkYx8xZoLL7WLWrNK2NGDikAwqez4opM5erzfDt2wNt26k3va4XM6yvJr",
  "key9": "3nUbNrsmEYQS8SwAhbeSVnyGQjmc5pJqjobkXfwNdDiDeeR5wdqVXCjN7CY5Bqmr3JPHzPDHXqNDYMLR7FzR9JVZ",
  "key10": "3ojPaF4KXrHZJScja7UFRR3a3UvbtPi1ftU1vwWvW3oqGtVPMKXKtuFRh943seVkx8Rp9ADjV3x3xwhFmBKeJKMY",
  "key11": "3j4Zx9BeT3gMNnUGZz1seRAdK1uYsv1o6ortfukiB1nDMSbabZ84k2Gu5koJsWDiPYLujzzGmZNCmBoptR8ty7Yu",
  "key12": "3puzaAsvbRAERNvah2GfJEBiGh2bagF88iLud3o8BG2A2ycriXbmBr4K3ngqqw7Z2N2TUFFHAyQ4AupndW7avQua",
  "key13": "2Uud8L2ExaiEfRtytVbYCCWcL95Zo1myzsS61RYQXpoRzmF1ki5RkXkmfgSYydPX1cQQts3LGuSZgRKtAg6QXw7C",
  "key14": "4ojm6RvRMzyFqsndLGuwUq15Vm3pEx7iFU6TPK21zqrW8nrFhtVuZ7ASWvw7xGrfQXD8b4YcvQWnW5oEk6uxwTdJ",
  "key15": "2UudRTC6feYX4Snir1h9H3GnDrpiJozuApZZUz1wuLLhmqLfjFNEzGMfxNWn9MVFhvoR16ktpQ7pe9epjFv4sYv3",
  "key16": "5JBaZScYDrVUrs6T9K6zNhSPEGaWGcgF2XLrowpVVpmquvcociaBaTJAEjsRcZGQHAMsBeaso23XRVsLSNnapWye",
  "key17": "37ypWLAeq58MAsKfUr4uWFbtfmFutuymMErkuQcpstXAWJ3ZSYNXdntXFhcB3HcnkBpyvnXa4M4t9QGfG3ZnNDXH",
  "key18": "2vMokLDZLUHz62w2M3udV7CmMCWn56GGCmtjUmAvfocTQPB9EnnGgQwkmeKLWBrwkmT6hg3uqqYZWv5dDkkAhu2R",
  "key19": "uyHUqXvtjBThqZPoG3GtQPa8wNDizv9Bv4AezMLu1YfUTQqKdrRME3CfG6uiBvaXXrSBvCRTkuzb37goMAcG6pA",
  "key20": "nQkLz7JVqqTnzSdLS5pBwq2QyCMBH6futEnNAKXF4UtgQ2Pw4tQa7xkb1j4BqXUG2yBdjvZze2NWF8yU5rVZKZQ",
  "key21": "x2QC8hRdejnZGH2Hmi64wRsQgmPdL5Dn2LSUyRWVnWde7TRVSuBYFpWGxn1bDUWfvDbdrwWm2gWK6rNTSXFAXzk",
  "key22": "v9XaguiuAPLoQF8FZSuhyLCekkfDnNuGfyCpSMSwEokepkVM87uBxAmTJHrM4HXcHS527sj2CY43tjchE42V6Xr",
  "key23": "5khzp2S7UryTX7t2DmjVFo52Ci3RExm6YUwLjj3QDFNhsAVuxUtt9URr8yacrPJb8u65rLLSErLCXDop7yuVAXe3",
  "key24": "4hbgTA5eHGu8Lu6GP71X22ZTTQJ44cP98zrDzUpEPvTMSmq5rGLJZLN3PKJAi9BZfJbvt3oeVYQ9G5PJzVJmDJWv",
  "key25": "3gJdCLoAD7U1333aVm2g4RJALggQkTK6PjaVX2MngR63GK7q9d1yowVKnbnqTuacrKGzvxffh7YLiSxPaHnqM5Sy",
  "key26": "3fzE2f2QsURFkJiynaqNJgGXLgWF647k5185TUFpFr5DNURTLooEXRxtdKSMtcA4K73CvnevQpyf1nsZPmMhh9wa",
  "key27": "3LnUxMFRkUseKEgRDN2A85NDuBeezob4KhonqfZwUVnGswfj7tRAjARqTiYiv3Dxb2T7eGL898mXh2V32gsR5KyS",
  "key28": "XngenxfvnrH8BwKVptkJR2o8dX5XL6ogTziaT95a6pGzWCurWWyREyex5Qvv8je637aaq4AfN31mjhtXdiy9zvH",
  "key29": "31UbdXkd6rYj7Xe1adqmJpRXqx9hH9VGjhNtJsNh6i6fdZmjRp8et5VWJB59rk7khNiPY8dGfeoyaigcsHV39m2D"
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
