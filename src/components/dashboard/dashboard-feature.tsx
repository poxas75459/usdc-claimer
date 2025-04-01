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
    "5xvmJVneuRqkgwSJ9YmCVYaxUYGm5vaTqx9ujwqxYeQE3G7H1NDB6E5LBHpmwirK3okN1akuQHFq7v9DuT1TRcbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYqbvh3MABuVd7aNfSvromrdVArZotNtNK24sEnGV1NTbXTsKuNuBUyNkJ1DQR2gTzF2UFX32SczXLjrjWUNZDS",
  "key1": "5SNWQ8rwhfrsbQ6KEXYrW5XJY6p9DzYnqJEPvjLRVQhe4vE9B7HjtCDtCTz6MefAynowZ3ojmuQE1JSYPQCd23bP",
  "key2": "2ghEW2EHMPqXBXCmPSHzvJxTGWFdnxxvoXWcPJnF4nzSUiW6CMrdr9MeXpkHs8kSdB4Ch8YYKFytrMm5ybRJVqBy",
  "key3": "2bFdG2zg5yDNsYPjGbfAb9PgU2M4jpAtk6ypkdkZfkatqynjQoTHGtWsCF8CHjsumSLutz3J6nuMhPMudNZDsQTy",
  "key4": "4wstU5Q8ByYUVoDk5iQf34eXVcBNs2jQd6TaYnAw6o628uxxZW2QxYtz5Bzx9to72ykUzjwRJ4exizUEayASLoE9",
  "key5": "2AEpFz5VWqFMPEMbrg4MzQc6FRc8mFXiMYypxrdVfwQXnXEzXVcmFXBDVt2QbK9jaXumsYCkhpgjjhwxiMR6nXXZ",
  "key6": "3PyUjEDguiDV2ZZjL4vx6LXLrihLdG3oU9mVnM9a2kpYK5P5nYAMRtRcqzw8cJB6x2xWUHxFFrL4UgpC95kU7pWX",
  "key7": "5RpV7Ego1n2SdQ2nnF8JDGHEX3ChLtdoFfSkgij3XUob4s4YQFpTSj9NdDgwo7pXrmPEyyDauJxWhpzVRmqZqg8C",
  "key8": "qU1Gt1cbVWFwt6c7Pt9ecuV8m5j1jhPksciBM2QMkKS4mJGok3KRUnJ6buyBkdrem14Houb8iz3Dc59M37zCzSF",
  "key9": "2qN4FpyDMXL9WPSKisK4yNpCABgAjvYTEx2sxs8CYqBeNqRYrwzcNjRYiYtzLLF4CaD8eSTv7BFh54LaQ4Log7ks",
  "key10": "59F3ehPqBii7Vkfy2jsLFcbSBFdGKKxTK22a8ckCY7AGkKa9J8nKUyjqBR7unVAD873u3LrPMuTtWBjZiLxfv1G",
  "key11": "85rG8vNyATrN5V7UqUXVmzx7oRWpimqBXcSxgB4e151T9vL8VAhjRptzs9xHJudR1R6jS865wNFj8Y9YjbMgQ1Y",
  "key12": "57zeSksuHELTVZ9EYcYrFbNg4W6ba9YrjiiWs8HC7pFobkuSwbX5B6AnQeZvbcHXzzDigcWQyKjbBR8CeqkSAonY",
  "key13": "5iFB3bS2grTgMNDFqMhzfSNsPCe14TEzx4dtBDJ2ToLmyGBBf2aRRtD9KwxMC71qyAnfPLcVtirwxpFkWG9eejpH",
  "key14": "4C9PtUUuQ3xvchBA7M83F2nM5uZWF6Lzp43PwRWNpeuxqSYEsvCLdf2oEaAHDeLCB6bqR4jjnHzgVYbhxcFDtku3",
  "key15": "54BFKoWVozQTycJApgCSCz9yf9YunbVkUHRJBWMybADqaKRUe95VY1nbo2kvJn9GgnTqugeZictNAJH3YQ322LzJ",
  "key16": "55WMCUJqCwZxGsMUsFigo2qPbgxqXYrc7KxBabeUjWinzbQoQeCcAFP27tEKQ5g8X72tPkwkbeTbXZLLB9CdLbtB",
  "key17": "4GxamqaTLVUN26BVrRDQbrr7QwsBv7Zt3e1mJQMFrAVDismU2GH8om59ayGroFX3w714hU2AFgg1YwPeUDbCq8mo",
  "key18": "5Ehytv2MtWwjpskJxJnc5ekGNjFSpk7CkT7TVmjQTv66DUWjZq58KG9Yn9KgsHzKp4VnJcs6iQSy1BgYDQ1fagSW",
  "key19": "xFB1pDTUvwS6r7TdwmrEXrS6Jo2VCzdpeRCDyHv3NbU5qed4D11B4pxp9upVoMp9MpYbqAcwxi6s72VqgvGaC7G",
  "key20": "4LvCPTJENZA7GdWRqLowAnAd32tPu6Ta3DmCmqUu9pvykPDb2fTJ6QWAdpR3XjVDbCaDXpdy3SBiLEn8zRzjkDHW",
  "key21": "4NoHbMVozp58GHdqn4dPzXpXD5WtAieuh6vHLfaVTGps6wCpGfZygpLtmEfjvMtE9X8EuBgeKWpcrMdrfedRorbR",
  "key22": "4r5gcBYLCvUwEbyhyPfTKnbvt1CeMDKS9wovkoBn819sX8cWy87xrhTHjpFAeT9NscodaTpFnxyc4z8RNvqRAdgs",
  "key23": "iJPmgbWERkcbCBEQndhSncaTtoTtHYYoqGdd1GucwZh5bSaSrSLRo9svoJapL7xjB2ZpsDeFCj8CQChAemsBJ74",
  "key24": "34tVKr37bLE9sRQwAo2XKmWs7N3nLzz2u9qjyv6JkvFDc7Qhc3izVJti4vs5d6Mj6PYhiboi32e1WNEHfX8gjXyy",
  "key25": "2rsL81NmKUjrKsFXdSUFUZRykgCoYst2CbAeYDj71vqocEVK1MFxNyQXZhMGTLpqw4x5g5jiHNnqs3nVXc9txnLL",
  "key26": "AFAUgTxyjwg8W7qBb14ereAnZi2eu9bJ52U2du6kyRPZtreWTPNaLotw4smEiH9ARDoVr6SChLz5khUnrPJwkLW",
  "key27": "5cGxkUnH9a2ZQir2e1V3aUX1CMUZ4st2kVZ5vhf2vZRxcaoZUd3QKTWspNkpZohkV2ZHqzDyMVnf899G4iQMfmAn",
  "key28": "37WuEtpjgoV8DGXtJNpxxna4JnKeWR85LNhp1MpnXHP4iDrXcrukzsHsB19JcwSMY8g5gYJx6tXUx8q5CvmUcXej",
  "key29": "55iaAVN5AftJzTBvVMXRGYFRXJRmGTa6mbj9t3GSSdhFP6KWYqhvq2ghwDK17prNzHFBzoXYB8GSYnU1ChQyQZS3",
  "key30": "31YKGKoWXWF6WP2i9W5CtYa83wWn4CBb8UtzfSwmTmNTGFGW4pyefWT1LkXAuLJGHST3fe9ou1oMzubLzzvKactz",
  "key31": "AYBb1ZP2XcDvJvJPcxGEE4deUTQLDyZPPCsigWCHhjsA9dLUY1ExP5onduNCCh53JRCsg343Bk3iYXxQjsjKMNN",
  "key32": "3CmAnWiVm12EkaJHkPdSLcfwYAGSCyBZogsuEp2edVMsQQk64VQMDwLo9W8AN6i4uFQ6oG6GmGgA3aPepdVeZEJK",
  "key33": "4gzgF5qEDSSksr49cncZo4yuySBGPwfnoFkQExbTi6h38aTW3ugNCkV4MCXFbbvELuqLUVK5BQJoZuaEQBGZrZRj",
  "key34": "2fpywPA3JUAfuYnhYgyUwpwDZZFgmrJSNuBiLe9GyDbz7CYA7emL7XTHhaRkVPVTy2pAEvxSqWQfciuX6KjUUZtn",
  "key35": "EMRAGiqiVzaiBfv9Gec9CPSviPFQA7ZZQkRTCWNvfY2QoJ4NDxP4xrabripK5DV2c7vp5DK5JZvkyqFykcTXX1w",
  "key36": "3oU3oMrbj4nCo5KgR4vkt14avNtazYUvS8U1GFwci9qZwWd142kZZvLEmvVDdTkNV1tCTLUSmYf4akYyuKVWzvqC",
  "key37": "5Dhd7RwuMwy9FBgD7xBEQ2QDrXFyMXhU3YqjoEKauk6rQ4JqikHDEjeHESGrXxkLKcto8wUcDAGEALVKCK58AYBz"
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
