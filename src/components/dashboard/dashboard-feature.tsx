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
    "4KESZ4YgwgRR1bRAujUiNdUnuBt4rDZRagu3rzuBWJSub1MHXDDvAGudHaJ9rwJkJGdtQ4vMKEVRgYTVdvP5NJTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAZFXj8Xofv9nruErfegPndQAy7kHcmMpswQFrax23aWM8ngYMdVHjmCtyfLpoRusN2Fx1MLND2pe2hfogNTWGz",
  "key1": "5GfnwVw5v7HzaXANttyBRNCBV9UciQ15sDtmESPatQJt7DoTonnHqAXz3M55AMUGnX6jgnhyzKExxwuN6CVegi9Y",
  "key2": "4SPk1os9Lfw9pmAezHq5Q9DCgRoWVUsr7rrrhZv2DoFgvhWBskuvbt71uriMXX59eEcm31kYMfTzA93NtH8Qummk",
  "key3": "49tRhJBVwtrgNVZUp34zBMXpufmuPTnsjA8f58XKEfv2r9BaiNbFPSDP5J5cCca48K9rVJ2KerDZu2mvSpxvxeXt",
  "key4": "5BGbSFojSPnY5cEHtaoQDtWgBukD8Pzt4L7vZ7bRnkGytb5kGLJHSioni5JR2q4bvtMUGjnD9tadxoZfTWzJgFtb",
  "key5": "3umq5nmApAyB5bXde4UrBHUL4HDeUWx7SiWPoEMVsS97zgStpMKMCAweseZQLbx6yZiskhanseEg8wgqQx5KdrzE",
  "key6": "2jM6v35HMQi7baNLgw3zCaJd5xFm6in2XKGiWXwpNNtfNeoMBMKhnAP6kChNt9mu6xNuLKAYWNmCSwEbHxPvZEpQ",
  "key7": "2fz5NGzqyrtMcR6V5rpk6bd4WSBehbCoBLhTt3H7ZRW4wBNv8XhCu4R6a47bvENT3kPqDpc31wYAo84aMyzumahs",
  "key8": "2uGHj56zxqJf3EGLmkhzfNR51gc3MwgkMmbbWoq38GrfujrX9RJedpKo9MV5AmY3WzLe7VSjj8DP2M7qXdhxUpZE",
  "key9": "55gvLvSiVYr9y9nUgdisKXH9mVDc4E2wAcexvXKiCyAMJ6NyfQAF51AsLJDtkwGC5BG86o6x8v19imFC3HUp7rGA",
  "key10": "U5Z6nyQKaUfmJaHtChe4Sxtj9UUHcGknctL1jtm2hBKZuP9wrPbuy1vEowQq6Mzi7S8aV4CgWj2Yae96KVPkGZQ",
  "key11": "2AGL1jEc7NmLrAr3dTy17t9831eND6tsDTfwhVWKfvkoiksZrXL8rQoBazP822oBnWBvJq8AEcdxwHfoFW4gzKkM",
  "key12": "4jSbUskpZeggumyR2SzEGrP8CArLkeTERKMATsWgBoVXRFcAD7hMAVpGgdA6QpTDtQ3dVDXGKnZjmyy7DGkuYrnQ",
  "key13": "uiHe1k12HXYncCViZ24u1aykqdxCrjReMcef9HbQAq4frEM95vgVhasHLZygdxaSJus6vT8cGxnVhCmQE9yRas2",
  "key14": "4NU2cuAAYECymSXZee3SzhqgQuxYveyKWnMzAwkZci5HygkRSGQ51yp3oukjbMKsJLhXxTnfYN2kgrQpJZxMPMqM",
  "key15": "3my4RiEGKncnqda2gdESb72Tusub4zmSeaYEEAXZn1xpTSmeVQcYtCtDTpjLK5vvmvNxKpRL96szw8Nt97fx5fuf",
  "key16": "bM2kfbCRKTMoW9XSvQEoj4TusrewwBYHGAoMp8T2aCfWyDg5PvqSuSPhFM27yyNeZ5EUVEfjCjHzLTUDyeAYUhN",
  "key17": "4UoakAjm2tG91Xphgxh2aK5NDvW2waGW5mmEPRHmXVf72eupncvnuSuutPKjvsxinJZafd2e6pwoh1safiLHiKkt",
  "key18": "3HHUMihMKtFCTpRajVTiRKGYRyUcBCgqJmV4uaHJaTdBmmN6sx7xEcPU32HqXFqywoFXP4AtitkAgFrCBULcyFpB",
  "key19": "45oxH3gkxU8bGvUYtDyfVdxiWXUNdkDPeSjHrCfXaaWxpqiRf5thLDQPB7LFUCAg8rVMJE7yenvezPPMB9vEmrMv",
  "key20": "4Fi9FFKHvRHnw22bhWwnaSUpjowmu15Q8ZFQA8p4qzZmD4NVkNh9bgMQ2rTnxe2tHQssfGRXnytgXowHiQhBCgfX",
  "key21": "5TUW8GGuTwWDVcqf3pZd2zppJeZ1Gu3MeFVfsjFRxEgnoRSs7AqbLvTZeo5e5bErvKz4sCyoJkhtZVdNgX5UAdKP",
  "key22": "3BmQF5U1RmiacjVhi7p1J8hku4hJXGHSFkVBGCgveJkgbwHqnLPfhcekoMyHP2iWEU4J9HKcz6LG2CTxT7tqU9Sp",
  "key23": "4tmdw2skwHG4TVD9aJtYQCh99mt6hmj3YuHJrq96EcXZkxrEFKd8ogccCT4YHWac4W57Lkb52N7PDT6wAQYRkkNS",
  "key24": "216gty1Aqs9G8MEVYUJcAeWuJ2aYctHFUz7QFV2hieHC36biikNs1py5i2kdz74yECJjXyjAgcqUMdcuyceAsytB",
  "key25": "2hMavw91XZunHa42wwRugtBLVpTm2R3S6rtGpA7XRxQyBe8YSUjgUy9LwBE192UFMZFocyFnHLg5mqksbweWyEEo",
  "key26": "5YAZoCmeAKSdxbZ6dBeRQhHfS9HXUaapfterbh8gBMe6Lz1v7UxpMRjxvDT6pAnRpwLqmduXLW2kTLEHz5P4toZy"
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
