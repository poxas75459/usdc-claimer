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
    "JUmB3TX3jEV2zasRjHWuxZjXBHQjeKb2hXwhGhaqePYLhPVm5CefM9D3mbi41GjjuErTR5jWh2VuoxAAtBRL53g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQvTpm6FaJNo7kGdKGqhXcfChnstNF3USQ76gzoHiLhQP2G4Us63P22iDZRLVouKZGYqdULwjCe5X2vzRBqr8u9",
  "key1": "2fzBFrAfey53pnk68CLACtBbaasdPruAaTRq38d49yi2RxnshcGe5Sq4NwRrTzRfY6EU6VgHxKkCFZjtv2Jt91dS",
  "key2": "3rsrRrFJ3DYdLQThVRVsNRg352VxFLpMDUjFAMRGyRBm5S4G2V2TPpfzWmmSs8UynxoiW1KXQiSLaW8X9jRcK6e4",
  "key3": "4JRdziYtJz6Gx37HNPLTdTn9CZSEodwcuE6mT9zAiGNEBfLBnoJZNhvAUhHWY7iZpLTiTKqYWeu6SNZkf2Ma8XD6",
  "key4": "4Ye9HWiuMT6vkXwYLr3SUBDzfdGBFGrcz4PQQEvUpSNFExFkG7Xgb1Gnu1mSeXm8bWp6Ey6YR2vLAekFh1iPibTd",
  "key5": "4TTGGA2BRD9ehtUwxkvLueUsMajz23sQiyQFgtuMKSi2dJJoyXJ166T71d24pEsdxtrMYj43BqbgDgpLKqWGF5F3",
  "key6": "3B36VictfBigUsJsreA59RPgvsBH45zN5vDBtFVTDZik1Hn489aXsvVuyWpC18DZwBseM93jBomcdwiu47iqBX1h",
  "key7": "5vzwbREnRtYMpDKhTMxqtcFvH5oCd7D55posj3mfXeGtKjfPUNFDLCJGc4mffpKQ7v3UYXkv9VNQ6tCta7yCojS8",
  "key8": "dfDWxds6fhDz85Zb7PVk9iY2TBmK3ABDwfkBM6jcKgL577gVMtRnNvCCRTGiXnpzrrSD2stNvq8RnhHbEhYrjMh",
  "key9": "YTbUn6K8c13fHS7V2v7dFyoY1hxRqTB7aDtZ7brSs7ZiPooJGBxEzu9RkHmJZnDDNHDZoyNyjzC6VZ9BpEF598B",
  "key10": "N9W7SZn7vYbEEXdMop8a4NnEB9PuJr882dvUj1892YKJ3TQh7m36CqqwgJtA6tRrznQWE1Lhqkqn9DuJiA98ktn",
  "key11": "4vD2jnC7K1ArJfNB4Nbde8XmSJo2MFoaXgCVDXoSd4CBYaLcVytqmBurgrxqYshDLHCr6Srj4x75q1CW8BN3sxSK",
  "key12": "2hLn2PV7Jit5Eb3Pmw7aQ3zwNMb7WbHhVXibPx45mqbZoqLEHDTMX5vm4a74Gr1dAvaCJfbdBCkw5WZE1pVoCy3y",
  "key13": "2TL543oL5QCp5T6zp4HGm3eyn6Cfyiokx6pJaKjWy1CyVtF3NyyydWdNPdwrkTVedGcDRMRJxqAENZLoWPgo37oH",
  "key14": "3HL2iMrfZKgLbcrW7ujDZ9mVbqX8cDCKvH5NmGTJFZBjChFA2DTPdBsq34w1eciNRr3MYPiCRHn4gGZomSUnJd8r",
  "key15": "2j9z8sERWaWwxDZza897UatogT1EFWEiv9tp4mVPiDjxWqdp4zj8uYSyRqzZDFUmBDyiQohxKnQ9kYpzDmB5Bozg",
  "key16": "4u2MD6gP4KoaVebVimCxu8aop86QFEEVCPNTqdMgxA922qSeUVFK3JYZ6CwoS426bUwMqgp6MyYGGX8339CDotqk",
  "key17": "49e5f5oUcrHs4r5Aq33Wgvi4nyf73J7ZusYcqiyaw6bVTY79yUBGLD9656QRYa3LqeHksLkhq6tnTbokJLDWwkTt",
  "key18": "49m1ci2JD31gdsiEiCM6sBBLg8FmZouD9HMFmtCjAqoiG3U3MQMUYCLttaHFyqEpN1YdT7gkRiqFCNSJYKWaEXvQ",
  "key19": "564EqB5gnZjGYt2Mx6qdEB5SV2vYKAgQwEox5ho6fiMes5gvae7cEyG7whpZSQ5hmRZXJiSrbMDe1EyjQWsH7EsC",
  "key20": "2Q6rFtvbzUHXbSZwttmT2h8CJTsKQLj4rTJfSxEuWQk48C6zB6ypxR2SB2WemvAuh67tifPHLwmbeJ7b7wbYkzSQ",
  "key21": "2RzVJjbZNyp48GpEpbz8iDU9TL5PEbjpyMaY3qCS96YQpcND5SquVxHUkTPLi2QTSSScwEeJPAXk1kitijq9mauU",
  "key22": "4khr4rS41MXfLUmB3mW2cg2yjrt6UAj6z9CHPqAtKJZNFoM1u9LBP4GXti4N6C7NPef55pS63ko4fWRGMfE7X8Nr",
  "key23": "3eCheNTd7rwiAJ3knAMpSVJTzVeQG9euQbursaURpA8vcvX8unFjjPi9t4iqU7GErzDe4ZkvFipWVA8Wr1AKTWgz",
  "key24": "4jzaq2euVcKiTtCyYkePXQFCUnWzQrEE7HAtUbaDGd7WHNniwVY18spQcc8yrNnHRSBLM8QptiSwnBd5PGeu3bfL"
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
