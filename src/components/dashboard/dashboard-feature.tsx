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
    "EANDscwtT3xTqZ64NyWZpsT16q79qUcBzeQCksYBVRVQwW7T1QLH8BgPRCNRGqYrNzaYKbTThzj1Put28BwGH8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZ8FiQWQS8eYFGcfGQ46RPEH7fX6Lfym16CDQxKjygunNN9W8uBL2VDGLF6NDxQGgHtg4cyzrEeZUM6rF4T2Up1",
  "key1": "34USeUHAMc57HATBcpBBz31Pprk39kuSn5tVTYhhgqpECqRx1xJyGXfjNYiBcUtrnpGhQY17hiQz5pAr4qiFzANg",
  "key2": "3WDvKKetGDFA9aHJi3fsrfNUGAeHLuLiGVqw8SKuRp5s21FPdikDmVokWAWj3Tc5cu27YRUzdJbgLd6cMr1UktJt",
  "key3": "29VeEWFmCvgtaRdw9T1984HyKBzCrVX7agNkML8Uohn2X6eXFgqkvPjFzuq8eQZsr8DF6XM3uaXib53iFFXPausZ",
  "key4": "FBPXoovjUwz8ZLJ7rRFdNy2JPcxQYLccpq31ckfmRiQLgLLgqgjVcaEX9CcgmZGDP5srytNDw9BmQ7jYVBjV14v",
  "key5": "4643w2FuZMhH724V5X8tMbrGktyxdNkgsANxZKXCqfSaJjuhQCNVskdS6SCp1PJrvPStS9YcGWjSEdcs48eEhiXG",
  "key6": "Ch7JDj75uhAWMRLKihCG7a1nRju2AZ5ovFWwrzm4wgMx7EnNyHoKQE1KbWx44kA5VitrJ2ECGHoeoN4dWEry5iP",
  "key7": "3dkQJ3RWXtAu95KH8Th8KBCmRVFbYyPS2xmGFyfXoPAMYGPo6yRttS24EJii48LzqhTVmCcvUXHTTCXvQxCXwMkh",
  "key8": "5YiNv3q29ohDpqX7TmuwMKh2x92CPzXRX2Q3bk3cCu2x2LKGtuC7uRogvfembq95zdG3zjhahshFaGBe9dkCLkUi",
  "key9": "42HYJkXwiD77qY4VmLi4i5wyD8G4vGu38P8n2zsNmZpb1kG8dqxsD2SrrnrY89ofwAnUGWe21E7zpAgHn2mqeTmD",
  "key10": "56MzcB73A2nFcJFyb1aYtgFPHtppJJM8VaZKQbwK9wisMwWdYyEZab77rY7SoJpQrtSfp1YEHgZwx8EtkPLTtDsA",
  "key11": "2XmdLdTpBz85yHZbWSpPDf6fhZNbufJRrtNmfHpXbcQhh465YTyewADXr61iYKnzsVRNS54f2BpHfGM9ca53moT1",
  "key12": "31X7KtQy7PwME8eKy8XoV9xxtavjJ5Mr9HAJJK9kshBnDWYQppzmFME2Wdp7yjo7uZDyKW14kdijF1VfRAfYNLo8",
  "key13": "cUzG1XntKqze8NBoHttX4KqfMhACQYSRXvddGw1xDSv9omchsnmyNa4rzY5nFEXubBkT6kjcyKECwCyWddhSf5o",
  "key14": "Q4urnx6mVdELJpYYYrnLgmYWAzEmHDSFe6tbtBNmHBUaA8iY1LKAGdTTgmpCZgi3r9ZFBhb9mHLU2EGSbMV4jBy",
  "key15": "LytPDx1yQZrP2wv8mFBWKqL7pq8Qy558vxZuLifrRbRk2W8o1Uv9VJZsikVXamTL38k7ZgCKuJMCoZeJ25Fx4sP",
  "key16": "17LpZiyZkQgJgUMnncgfWVcz9BGDy2kTHsbJVuviYfRWjgmxnNAnyNyAQzyN2BCS1D4tE8FgD9X1tpAjhfB9Nes",
  "key17": "5x3fbiz6gufPTLLYaY27xHJUVVuubJJZ2v6poLxdkFJh58R652jGRdf2Tx76VoixqQCfx7VJKxyVEndVXvks4mUE",
  "key18": "3TksQ1WpKznUjkjDkqgHWeEU1VzPSKJJ7erjEcaRU9NMxsKJEfAbCMTLVr9iGZddRurxMypLVgYxpL4teLT7T2Pj",
  "key19": "445GVBn2ZbZWZFYqhU8V7tCdczkoxddLjvTyfmaTDnjsVcizJbngfChqyFSMK7aXRCTnSAyWBZkAziwhPG4LRykr",
  "key20": "3FGxj1fWq9rrr94CEQfE9h8YExJFyR3jABAaA16h7ZuJZSSUvdCNudTjJVYvBFqFm1CnPv8Wkkd2UJ8JWXJJnCLc",
  "key21": "3CyVafn2xvCbizxqBc2zXD4UbmK4CiBMsGeitz5Gu7TUBuequapAXTsZ6Z7vpbr6q7dSAbBYwivnN4BXwFFCmiAm",
  "key22": "w17mJLZBw3otLyfHdNMgXV4irAqH2ckD69KxEJRokN8uzmYGbXMF7FNikWcw8oTMmaj6yd26yr4QpDD977L5dT4",
  "key23": "WYBsAriPdL21vpsfnJLT9Mn3AhC66wWe66z8DfPPYc4vkjqSq9fPnCkf6BsvvE87MPUfSfWQfXyDNBD8S4zLJhS",
  "key24": "3RDQUVcYC4P35GjM1MSSvatjsP5CQbgj2dzpzAB28xJx4yVxzhhZrNpSkn9D4ztLBQzdV48RSjwfahtVp1i437ed",
  "key25": "3sHQbBE7gikSkX4STye5FnV6xGXAU2XSdUHKNvNrrX3VNw9qsVu79SWKuJfERvhQxGs7mhekLY2eVNgD5nDYkzTY",
  "key26": "4aopkywickW2f9kmQgWR5mNmmEVvxD3TaT8x6TiYJhhdq9he9uvEsNVLADJDTosERzxLr5qoXdZEovUVkJkoGhyo",
  "key27": "4BPfSfWjxcBCzq4ebH6tsD1pBXuJA7ZgogSdfM3Wz2VUybRd3bQBCwxZN1KBCmCWUJth8SqYz8mBKTfS1oE2f8JN",
  "key28": "LQHWwWwGs1kVxKeoryYFxs5MKXhDLnJGSy66X8DQ4vG6bmHxkHzrfDxVGdNG3SL1o1Jxm7GZiCpLnRVvVYoehiy",
  "key29": "QCPR3T1kGLrDkVTLEGfkLmzv9QymtwWvTrbpozRpeetPfmw4dbpm5W9aLD2iax7ELWUnwGw7fcxUHEB9NNoKugC",
  "key30": "2Dsw1KPWSjK9p2AHp3UtuNptNszZzRfT2ZYR29HwiW2yvYH1PPjczBsdw5E1cRxrAMVbpCznMpSVHok3TfcnMYFB",
  "key31": "5TyRU2XQRGMftG1w3PfCNKcKJKWPZWHKJN1Au7poEYyaLggP84z5KkajD8GUvrRa5A4sDGR5oL16aYeGx9cmzXCK",
  "key32": "2gGTsCRzyJJQhTcmeMo6CjBu86ebbcF5A6pNkNYQf3Bn4BQiYzVvyoXVVrg9hvEsG6nmViy39c2mExKvwzNHRqFn",
  "key33": "21iHUuVmDUBRh3FShK4fyhcHJw8i1m7rBbihNrf3ZP242rhgy6ztQhVYi2MnQaKEaMZYw7sYQ5mrszzr3fDWtt7K",
  "key34": "64DhBhF2EnYtrdC5MmDdUmsX874b6kV9wVuba43qT6HXk55Z4fsE3mJPdQfwWRiTMx6vqUEeTuqggvw4p5e1BN3e",
  "key35": "32hHAXS3fFAxPT3nadTL37vh9JXZRd1QPX9hxQ3GZveRmCAhUakZCv2NFGoTDt8JtidztXR3rzkVKMxH3q2h2LAs",
  "key36": "4ZpEfHAEnQ13SWecUsZiKza6Vi29hq4Yi1Y9sJ9Puv2FvvnWrSXuJNvaTg7FfV7V2PHoPNL9ouwDEAW7YcMxn677",
  "key37": "5gD5MZDsVYhHi5s7RMs1kctP4DKmoigfpHMitQef439JZVokTPtitZHPaZF1SkJtWTjwDtsXkhAse3XTD6TqfdpU",
  "key38": "5FBxR7H5Vme2ELJ8URMFHUGcztUSAT3MLfaem7fCfR3kRmULkeikP4HLuFCpkzLx5aQQr1Svyq9wte3B9aMzzxqF",
  "key39": "44myAvmCYKjSLfnnQ3Lxhygo2KFtkL6tFrYiFqVQWhLp8Uqr3er2p8enx6Zah4K4W11cx9svjXCprZnw58boKJ96",
  "key40": "2DKXhTkKtUZuEG1VoghAchFVghYvwGFQed4yBk15evB8YR3NKY75kVpef5LNbN3UzY8udXyN2rkm4sR5WaFa4eJX"
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
