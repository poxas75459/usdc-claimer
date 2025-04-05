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
    "LetPt6aKSpYFckyZTbXW6HbZRqBj8CLtXmUQ62GL73ZgysNjns7jYSHn85invrXVbESNFNJLaevJYPP36uCCTaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pn6cnDebFP5uE4HT4VSbgbh4hwiJGLQCpybdkhfHEuojYfPARw7rKZTrd49iJjXJkoLCwMS1AQUrQANV1SWTsRF",
  "key1": "63PdQh2RCr4LDZuBgcGnjdacmrxKyjQjdDCkbmfFcCfJwWnqk14hFcRNsNB41Ax4uWzToH2LsU9nA8sJEzSxoeME",
  "key2": "4wvMWgeR7JXzgDFy2pxCTgxyfXfFsLoyQz2r5nwcLe2Biu7DN9NBWFvheydoht7JYZwurJ61ZZLNtR2uh7ZRsXRg",
  "key3": "2uvdiH4ij596JEc5Bs76US5PsDyMrm2m7QD63bFQZaXegBQrow5cL9QQdGon4a83AoVUUYZHrs5ce7d3KmUxiPHv",
  "key4": "FVKTmS6tU1N8Ubs7mvMcgjdrD1Uue9q9LqzG67HxqxxAFVCZVLAisip6a3BcEagjf29m6bCac7Y9DKvgA4nQHnq",
  "key5": "4cGkYdFR6mbWTaQ2Jqitmkk1gFrNrMryF8rkKV3CEdyTB9cBpYEYfggwnpjiZXtkrYPJqkeifjF37JQzNjSjKht6",
  "key6": "3YNGDK6TDoTvsHM9C5v3DiSNZYcS7Lj9CoFGevXh8eYuB5ZTfi7tPjtsTLD3oXeBhpXLi1PrmE7aZMzM6yyQMVN5",
  "key7": "5M1yoPB4ju8txGjbMx3Smrd6ippgzDYTxkixm5KrH89Nknu9oTh7fgagpMFuYGwViLSDcE8uMrrX3kxYpEUnhvTH",
  "key8": "63o6vDjUw4M2jzSKuyyHSWYdKxGFDyyYcjBVHFsQtp9QQVeJn9oajDjGwfT9oQEzW86Ttj4icwxP12aFjoxQgs9G",
  "key9": "4NcyF4wURf1xg3uBpXrn6ZhmowmWhVuj66ytLe8jCBsxW6tQd5uArw4HaUx28Awf28Jehbuym5hTU5o8CDmAAzvF",
  "key10": "5Xb6mW72p83ceGVLnR2PagDD1ym1ETXuTtK6HPLKsqZ2vm5Q6DBrBSfj18j5aeF5M11Jznaepu7US7fN8HTTGiYv",
  "key11": "3eZmQh9VQnQFEVqx9BnbkMowJ7Z4pBTP3NsnZAYhmfydaaipHYNJ96ya2T7MHuwYfUiHX4v3kCHmyFSCYRJdoEFn",
  "key12": "4cAtRLQa3PzrXQbj9762H3tb5CW3tf9AsSiT1rgZnTkqjsaqmHpyY9WsvwtgabjECUzJW552SFMbsBDhP5LEARR2",
  "key13": "3NRmog9gP1UwSoQcMU3HJHeW15QSnqzjLq5p4B1YPnE4uC7ANMN5y3974Cj3SsYo3V1twiVsidbw5ZpeRdTd613m",
  "key14": "3CmyVHn93SoUbVBwmaX441or3Nuf4MeRRTFHrSyjf4dGBemYeZApbb16RdeZQ97BdzQpnX7pLk6PNWDm77najxik",
  "key15": "3mXMVzFWyMSuLnSL766252PCEz5fwzBmun2tZivv57YrsJBHWfeDFyom9743pxQWccHRghQz9YxA2XGvvaXAeegR",
  "key16": "4pcBL2Db2TmGVN3KWYBgkykwk14Xra1ToYtEnb47x7kyr2LZimqFJ2Jvyw6tR3GZrumdd8yAiDhz2YQmBjH29pLm",
  "key17": "5ReuKMirPB6GBNKhQ1Sp2tyjSgXNyTHmrK1DCiCmmNnNbSU3mFRybYD8Fr98iK6F7Te7bGYnEDTt8QFPjnovDmYk",
  "key18": "63jQEtMjWdsSqXvqaHSXro2LZvULJc4euUPEwsBExuyVZDTy9YMxuW19e8nETLicff3YNYWUas2QSgJwBowXs2Jw",
  "key19": "2S2QpHi4L8GVwhSaJTuhaMP2iCVbmrPJHnUsGokFCwkNZFE9yfkUaAvn6o99dSKYhaThbxNkoRtVKBWQhJQ9kxyT",
  "key20": "32nHUWL2XbWbWWQrjoNAgFEEFvrEwscztDSb28d8UfCR8mKUhofU6ADzFmn2B2nCDHtiYRxKqHUVygLmvgKCYdVX",
  "key21": "5mrrzdJ7skt9qW5NBsooYseisSNA8GHdxmu2rSFQKPudS3UVAiHp6ZZfFFKd6y5U1ZFaz41kmLbcGsuTFV5AHSHw",
  "key22": "2NdckttdNxSPF8TtGzj7J4eDyTtMbJu4TFxReB9bNR91D3Q7YHdaKKbwab5cCbSXv7pwXHcce4mpRTspNBEcA6J5",
  "key23": "bU4AhH7eMvtV4dtj88hbc13ZwfrtGnggUHcvVRP89bR6yzvxmWfbcDYy1ruVFS1oHVdmNzjQpg3xwLuAbD6Qr9P",
  "key24": "3oKgYUBqyUVm9n24T5YXPD44RUu8uPaKSmLsE8hKXYsjsaWekxhb1rHYpUSmWhh1p2aecazg3JD1K6M1a6upFWNy",
  "key25": "uNucUcjLmjGNA6WXXq4EbDEENWapAxSJKqV9YdrDoLghdAx21Urc7ymcJ6RNcP3nj2XCc8Y9mN5aDxYyE36iJPD",
  "key26": "9b9S2a7psrdHhSs3TddGWTNd4rZ6CDX2NGP2HUNCxihQbE1tmu1Ts6xR8dmsAQCxz1n1ZkAVjotBuvdqi96gsDj",
  "key27": "5f8D7awSNcvS36egpEr5nhfcPATMDXqPAVwUAWNHpubzso5stzkHauTyQAccDVmUhYo3rWxSFKviNSfNHn6SKTjz",
  "key28": "3H9X2vvTVHTNyNK5UvZesKWmEUUi3TdLaHNoqQuikKrXeGYtJmBcx6Rek87RyGkChKSC3TieL9wtjbjhQLE2na1P",
  "key29": "2GwKtKtie27tGjKCmffUzjbWEvm1X8nWnJ59L59gb2VWaxFEY2AHS3uy5xyVBdFTsiLrnQTFuyfpbMnSKXgZ9a3k",
  "key30": "4qrpX515E9iPxFE53ykH7LkhvhLvcRLQvj4XVyXMk4PQTsSntADvBZKygQNyG9xvGWQZ6mYkiRHodNHRPf4UrWUo",
  "key31": "MzHsG3S829ArZVfNPRrWzSKpXxfhpu2aY9VTBB4Vo4cJtPu9KkgCsxpXGp4rEszU3vJ6SPe7YyEPCUDkSq78r7c",
  "key32": "2ez8oQuddwL9oD7bXyt5XnEb5H72y9izEu6nLCAKmmRVBGq6E6xGYqfRudCd9Aw7VobDYt6HiF9HTMaPabfjXahS",
  "key33": "UiGM8iVMtPfpDsHpP7mVU1V3L35cWhTEdnCPbhLV3qYGdYKtCiqmQLBPGycfwvi6JP72xzPNXpsbLdqedCAbGHA",
  "key34": "4kJ8XfehHJAeYg3ninp9YNkqAXizuHMAwYSwSC5kKd7Xi76UPknRR58M9uqsoxYHP1q37f1uTNaYbZAPNfTEZjkC",
  "key35": "3wN53HgQEjoF5gEp2KWRg63texkP5AyAgRamUkusVHJmULtWqPZ9X8eeQ1Cgh4crL4o41pwiWAY8rS2nqLjkMBUU",
  "key36": "3uPpBWt57UwiH28JXv47FNYHeuQ2fq6AAFEAd9JRtfkGf8ssEjZmBc1eHk8g4fpfhVuv9dC2WXHEK2anRnhwjkSk",
  "key37": "33kVFMTA5wLGyYboyXNy2jhpLDm5AxLbCd8GGL96Tvs5fqxf383cY8D1HdEwoVz8gPkhcPeofGd223F6GB91qxKU",
  "key38": "2jarcXfFR5Jy5wsctM5D9c3LzRL4EdN3morWtysqGjd55RT9JTsLFVeNLtsj6MmFsZccAh4QEprTCkSsoEzL7z6J",
  "key39": "q6ktHvid75oTrHpGrp6w8kVrRiUkBgTcpmFyefQSMkv7DJERcTyRRMHXXNsnvJvzZ7x3Er69pXi4QWH5ByM7rYJ"
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
