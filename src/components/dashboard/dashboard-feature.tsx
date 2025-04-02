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
    "5ZPeEbus2Xp6Sqki8Whm7riYPEjahRNJTiNvFQpH47j3E1ADL1fahRhDW6wwkNR4jZ5VrRWnhCA7fsHj8irJewV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzU9LBMEcaYHD2LFLLb2QxTNoXKArEP672cQ18WS9MvMVJUD3nCC8F8rpz8siKiX23CduyRPzhtQ7EodnBpZixP",
  "key1": "4aHQ2Ktzc4yX9NJm9krJquXXGRzzzaM2fW8wrcLVDudT3CHDaX4ES1VUxkhkmfdNQgbCiXi8EB5FpwUDeMCS4sqU",
  "key2": "5o89Cp2moHydescnSipJErGZUxqVZKKa9SmAzbkqzjA3P23u23qSk3s1988aZFQCVwgbhjH1mKjoQFpaJ2mRW41H",
  "key3": "voKEkytKoABAERftG6zSC97bgE6XfFv1dYxcvpea4s2pUn7x2xTJkoE3Xnryc6in31h83ky88Cz1HRXbEgdfuE1",
  "key4": "4UgCGm3tPw5NZ3dswUJX7zdfbsFXpsuCPiozsMss1do5ozWARXeFHAHFnBYkxXaKWCNEjVLxHkdKC2rLy66k8aRJ",
  "key5": "4K6FPjh2ezkrE5eNtnYGhXt7XifjoAQaHYbR7cWk2JuUfdCMjxYAP3CH1n6psfGzS6Y3cngK8f9GqRqRtbT59Gji",
  "key6": "64sMifAoDyjpedHqFPYzUGwh3KzTJRwvwcueLw7GSNZypgqXdANtaaU9viumABWUimx9kXMk7fq8eyWudZcEaN2J",
  "key7": "2r5dtuCvLvUPXGdbW3xeSSzDdbwwCKATmD9FvSia9C8Hy4HjU9AZ3LyYpyi3bGDibSkvcoynJfvb1dPYzK458oMc",
  "key8": "62JzEX7dKBZ6EfniSKZ4N1156apbKF2oxMJjkjTdSHLDbfJZDHyjcLqHBNugct2igDdqJkEjGho1kjXkSJ5EbbHT",
  "key9": "4eUqo4fVw4WR4fYxECb8ESmonPKkFPJ6AXdTfBYxjQMK9pA582aPwFK26WRFXPuK3h3JFpK76TPfVh6ftQF8gu61",
  "key10": "5nFvrWFfLxa9yPqZTdBr4dbtzJSeD8WnEvoGYKbP4qWRmSVYVkrhr2TTohZE8nmpkZqwcG2Jdtpp1KKg86ZH1NmF",
  "key11": "5BQhjVJCCyeNXLt3dN5mFqPzuEVuX1xza7UhpjBSdaDp9ai9XvVgHwnksSYwmcM2iTx45afYTYuDCmV7rt6ftVtX",
  "key12": "Rgv9A4V7EZF3HFmmBnkqa2tBsym22zwvi2TaXw5NUy3f4TZ6at4UQoBNhwwMDe6y6G8Nnh8HUfrsZCfBZAgFT3s",
  "key13": "aHcEWVE4r2JauSq2DLNzL95nFsZeRVeX9fdDJ6aBdwuFDyBnnFX7N4iND4sADq7G7dLezdRtjNa8zz4EPXRKMxy",
  "key14": "2DWt2Fq26ugDVVf3DNTRXSxY5V46DuAkv2J4eRHJcXewRe1w7qdk2F8FjmHh5Hp13XUt6YYtxbuZ7JZaedxnfcjo",
  "key15": "53F9FH31vf4QjQ2u1YmtqTY1wuwERwtPWykPWorC6U7vEb1T8RCSxpzws4jEWS8qf9PwY2T8u741z1SgTxvbK11h",
  "key16": "5XxH8dD3QPvMbRSJtpvx7ZnxAw8KnPwy6g5uBi8FbfWiETLKN7hVnXMDFH8JBjjWfGFmhEzkdTHiMBjJxASbFWtV",
  "key17": "2gKepQtENJbGWsT1g7aQkUejErbCC9YEA6ThhPiyMizDRDNCYfwsmsGfXTiwVCWVN4K5XeTsGyVakxifuQp4Hk6n",
  "key18": "4sCM19LGBawptEYLNZ1MbMVu5X5jLmbYyWvK9hUAFSTqiMEZJNfcAUuQsFmF3DbEDdB3ksrAzBJZRzAkZXzgWnBb",
  "key19": "3c2sWBro2VG4XFiqHtU1cYPBc1RD3Sc5NUjdzvCUhS75pcP8u5HETttjhXGgw8xQWRa7xHuLnsDELzWTgCYnv36S",
  "key20": "RcsfHxYbALQz6fzW5SsiHoudZLzeWTswJfDHuiMCXaLNiYT3iJ1GRRgoER6WfYmbG3xnbsQBn5CxNZ3b1DxpLKb",
  "key21": "5fzMMwJnLN3GCTGLep4sCYmpXchfwbHSXeySoz4qXiCpWZTrW4fgUjAVCa4HbgFdcYdNUtxCxtMbPqwHSg4f8PrY",
  "key22": "DKJ4p7Kz86UDGEuBhxT9xDTgX72CekK53LEAWq56hWVLpM2nWSuXLVqLCxEYaBL2zpE4bt1WbcP5tGFgSu5xgUQ",
  "key23": "4Zt3s4gxrLhoMZ2qe44bQeSa7zXvesdHAwkfRnqdFoBGFjps2ZAt9VULTVsA2oAmBdsHTgAjEkSUopkZJjaDZ1d6",
  "key24": "5g7sCLLDzUC6yM5fBoyxafySMC8w1yiaEiD1Fcb2d66ukQFTwp1KFHX5aZSso7aXL5wVU6bAyhFpeAZMYUHq4ueQ",
  "key25": "TEqy9NRjzw1n9SDx9KF7sYBWSmd3u9U3uCtDqG8EdA9Qe4WCjkahJFrQwd5keJtZFkUdKkLM4wH7WeTCKoNSjP4",
  "key26": "kg9ZFUi324yu1BzYwgJJ9KfzCGSDychs8vaYah9XwMx2eXj71WBMfJpcECxU21o1FSw1D2MGLB1YfNCdKckpHyk",
  "key27": "5seirsP81GkJMFXNCxaTgFxkW7XxvjfbRzNh1LpNvKiabsxMPNcWkMAsiw49DQmAMnFg3usYprnX1bQXxzX7Dj5G",
  "key28": "2qybsmycgFmjDbcotQbTewWnsqqQZNKVUQuqkrkiuqj4LhjD2Bh6oGdUr5xctGueL6YwgiDg4McyAMciL2mimMYk",
  "key29": "4KPzvZAhAk9Yoi2AbCyz8owmEvKBjNrrVqFB6xsSionvh7BeHc5MoPVJQf1TAzQxZVH9wYSUesTefryBQ2xjJMo5",
  "key30": "5zNY5o5jk58Z9UhHL6KcKaMpSsNh7jAsC8j3vBNjcjReZqbb5yv2Kkz8S8debgumgFw9DkyAAP57gFZRuQrxh3vz",
  "key31": "2aXRcMTZ6EZh3go54jC89aUT3AE1rbpWp8MkHCrn7rh4DRUWHWfuBwt3Nz8M35Rr5Z7fQ3JxAmq7awZRHCaUJnbu",
  "key32": "4Xr8pisSPZ1Jk4MEb1jWStdFJ7kc2RLYpcJiaNpgnyxFsJNt2pgsuJWxpRDu879UTmAcrMAqtMjKSXppbGaDgTak",
  "key33": "VuNSVJ6dzqjEfo9sUGAa4NVYgJg3kechZhdEMMfZ3s7xUi5fWyGcqwfhSGdqtas9isuzFHwmsypM57bpT87WEcA"
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
