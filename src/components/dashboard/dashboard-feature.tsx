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
    "3pjT9cWrA2ZYVKpqs9VwW1YASsbukQoy8m2uke7uHk8MegfUyGb4P7wF2HME5pWD11t9B2GGFgDF44RUncmKFP6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfnSJsKNALwf4uJGNpDEraXFo56S6EBQHKnWRgKyRKZD94Cxia5gdswx5CgNbfrnzx22r8SL8jjWziqTweGSvDw",
  "key1": "5mBp5Y4jpLQJVSf8wfYkFYbMXpCufFUkJw6sLn8fEdA1Rs3pE31g9UtfyKsLLDEXNukWnw391nLQR7CS8ybsoJ8b",
  "key2": "2jEPCgNB3dt1DCLtrRN2UgyFGvxBqyriW7tFdawq47E2ZeqQsYvCf9pQBY2GxUW8BTfxT9f73bzVWEy58rsYRf8F",
  "key3": "2sJVdQd6RpQi4dFnPfFCBAUGmg4YTD6tmUeRVPs55zFbN27vzJSvUzyMYZysWPUU4VgeaKPAdHiQRKbqaCkZ2q3T",
  "key4": "5cvhe17ijNwjRc6rfXpL8HNdS5zUuHsgEgaPPvo1Y43QqFhQuyyyue8uz6U2GEtRrS4G7eHYCqTFCwg13DCcw53C",
  "key5": "4iAtAwtkBPFtNVc7X6sSZnTNT28ijJDMWGvbWWQ9ydYov3ebzkjJMQtimqYdRL8ijs25ipR2WLNnCuHDeWWNVtv1",
  "key6": "3M8TkGAntMyhwdFDmqQ9Spvi3LPi2mkYMRwFaXGT12pkxiYQVcXSQbRPH5kx8djDXg8oEdRWdk3LpajkS6JFD92W",
  "key7": "4BL3zqQ6c9eRoNS1vfDxS6KqWe3nS8uSHVrJ4WAtDGpHbH6WSokbUTiHKXB5CugxkfwfTrKkXrTpmSs8EfbEiZmL",
  "key8": "5kCxiCe5cnd9xP7NK4FCH74STPAZAdSkiBkx5uhr17zegGuSnbuywQsvUTN1pVGRKX8i8KbCkUEpsLHxaWHtHKeT",
  "key9": "VmNYDzfenTCqq1dk3oxJCRUSQre6kek5WxKYyJvRrYNYzw9f87cPWP4Ctne5X1Z44Twp9GWtR9tyoqtmxVdGohT",
  "key10": "5wKtxJGxXFtCq8uACXopwd5xeqf5HD7EP53TWWfeP4obJ8peovar4QLQZkpvsqMi9z68yrmiRd9MXjTD5fv36QkP",
  "key11": "5N5oLWpgwumuX4n3jqeMXEYVP6bdVQDy6DXVepgTkUD6E4KETHJyyu2dREyFDn4TYX9r4DrCGak2R9g3dfmv4pDN",
  "key12": "5XdkfmhgzuTjbsVzdMUbte5fbU9aisujDKmDDNjdzdPy24TV4qTcKfG1DYoChNCgadE4iTQdBKPLd8e5MC79Ynxs",
  "key13": "59qHgJM3Yx8fEVzoy2sHR8qxRpnDk8MQitS94mY2aV6X35WAz7Tv9FsWtA233WChb1qGDrTBk7Tm54jqteWJbJNU",
  "key14": "4QwRfN28VBbZjHS4LzZYonpb6kYUyF2qnVMTGURVxmrt7nQViAGcYaXjwVkraBH4a2bGFp6DevL7cbfizSv9U1Lw",
  "key15": "573e3yuNBsJabQfediehDv8tF8psFg9RHfM2Tido9STgFGZnhDj9mDtqpjUdrP9Jgv6zKEbFoCMnQYE8YHF9fKYD",
  "key16": "24L2sjgr6WV1rNVjroPFiWLJPQtAYFJiihCHGQmGnk3xHi9GVY35frVse4468ecXS5Gc8xKWUQGZfVzS4EUMPS4m",
  "key17": "5gRQfqLSpNLhDsYXb21eC6btXSWpaz9wBCgjMxG8vVkHw6nPVtD6wXWq7WWnpFm7d1nUYYPTN1FajVLcHzux53Gr",
  "key18": "4aL1YbMMw22KikHhbA553xvwU8h9GE2qF4bSu6j2fe26PzGgw6nHXbnE1RjTachGWfTRnDNAQa7XwuMeCWf2UoUu",
  "key19": "3b1iESSuVsCth7JDcL58ex6QXZiLyx7dANanNLA336wh7vjmJMGzNqapWLmcMQaSMozf6xPDrCW4kd5aPzDfMQ1N",
  "key20": "5yxufhKLF8jc8fWGJLyhLMSG7cr8rXDC8ezbsCi9yQZsszcZwX8imvogCSfvDNy4GEQvjFxwTT2hXCcaa4Xdfef1",
  "key21": "2Hod6K7AyR6oVhsFg4YHimDJmQddGYEX2dK3vbhFQCdHZzX6iQUtEBACAR1M1f725sqrzCYbvv1T2KXvSZeKcv37",
  "key22": "2ewB5Yr5fPwZuM9cBp8Hxvp6FjTyWbSKSv3RxsukkQqm2NEmSMuoBdH2gPmtQMbADuZSZSVCqRtSP6Jk1dkQsoQ1",
  "key23": "5qyyVcvthx1tSuv3DmAvQsKVrwSkV5r82va5dbXbLKYu9vJYueomX27Uf8dXcryCm4bG1YEiR7gBBSL15LuYf9JR",
  "key24": "4txXxGe9udWKe7FsKGecqU3jzmAZ8Bsm3ZQcNNZwuqHGwyxSjn91kmf8vWrSNsYeG6eknXrgPFrpYbTMC9mx5fuh",
  "key25": "2cReGiQLVnBMCVC6mSjwmwNKHeuuLew8NqZ79EadAiVRyhcGnfdoBJ3gGHrrVaWq7vZ6Up2utk1w41SXVKoXirXg",
  "key26": "46EAG7Hk5u4sxkj1Hv4sf7oeAYYo6kNYcaEuR9FkFMZBaBbsbFPEWYq2tdLmFjpVBbuTerL21WGFAuZ4mn2Sz6cd",
  "key27": "3nCkEdfAkiAPVaTkgMN4ozxrecYSPdzNzJ8uE1YHV7zH1Q7XLTHkGZYPW2kDc7z3ivcdtLxUKdgYQNzYkhVGnxC",
  "key28": "5zEa2q7TaEoQUM5K9Yftedegia6pqCGwV9Xwpe1p77QJTVhPfeT6Jfakq8kTVtQE4UjVrocE8AMfcx9SzWLxBaND",
  "key29": "3BSqPFggj5opo8GSA5Xva8QzB9Z6CCj165DQDvC8gDMzoLTAK2RSnc6uK9CmnuYCkycstXqyZyCtoGZEeZZ2Mdmg",
  "key30": "4MG4zQ7tJEFPdhP2urnseVrdNA74qwU6mQXMx1XwHSxo7xC8pmvgEwohDXq74tDmc3kLJwVFpipazRPPbCLqEB9N"
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
