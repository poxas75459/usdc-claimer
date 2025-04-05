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
    "KR96MSZh2a7m9Q2ggRmDPt2cz1m3gwLjLyqpmBe5kPaw4k24PkvfUDidRebXX7xhtHaaJavFn86mm6puSChjgUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VohTia5mhehjsHL1TGmn6PD61PwyiP3fvSZSxkunoqm7hxGAmo6NrwW5vioXhTQs5cGeYdaYpgvuX8P2DrNQEWn",
  "key1": "2rSeKxnLrg48ne4skDdjifpckhNvKfpgLK7mKYiW7J75qLY3Y2X4DQ8bsS6sNqLoidR6LV6JW1HHUvmeD6J6UnGq",
  "key2": "6MnASosAA1kVRB5ffram6M6ipUUMujzdw773ZrvDccnVFu3bKv4jqwN4TEzoqUDZiGbmuk3hwEGEUp7rVwfBVaY",
  "key3": "39tnGRpyXtpDnJnM2iktkGUTbD12PjgV2JAtWZuoJBCDE63XSZzPPhQfg5jWTcGsdo6UBU41FAiwc9PCTQGAQKiB",
  "key4": "5rF1SfhFvRYwAAEUauweHjjDFWDga7BwhFr3LDGh2uYTXvDwfaZm6DVqhoRq6R8adD2ZaNKkJf11iVS2pzzwMuuG",
  "key5": "5RyHCV7CpWf5iYPKJRGuMKxeMMt6FYesxLzEDGkBTChiqzXtZ8Vo6T2XM5qStaZVWECK2qzoLJH1Ac5FBkEZk9aV",
  "key6": "66Ss8c6zDLjDSZbNatWbbxKJgtfwyowMKAxhWosGJoXWEyRCnGP33gyDdgf19R8QBWzqwdvRyWvdfExgcW2WZLoG",
  "key7": "5GHQ453oP66HwL66GmzLuySrSc1TfRsjuvQzpHh1LW1hPwCcsRvsqBPUhckCThGT4dvuRK6BGM3uUqd9zz5rUezy",
  "key8": "3rGTaoumCAri6GGzXZ3muVdNW6ngPKhP8p8i8R6p6PQGM7GM7PxtxwyjFGPeUeUxukQqDT4GEREaMpdcoYTVUpiY",
  "key9": "ZzhBRKaPc74AFfSbPwtP91fPYJdvaizF6ch9xj5ZwbWF5KHwTqLdqeuy1i2nXBHmzoMZaa8fxztdQc3CNVMunL8",
  "key10": "TJuAWyMAPcMs8oQ9UCB45nQ6iUWdvVCX22g12FZLVwybgEGPGMuUHytLZVv8phc6gW7kMN9QgTJ8KjgUCbUvFLC",
  "key11": "23z79QiApQPp5fVi8EpwTB8WHsLTtXKorraQgcB1TppRtMZHcsW9n6rkLCjmnnDmUts6Wh785TAEhuMD7THu99gA",
  "key12": "5eQRtThaQ5r5ihkF6oFnqMnm4cq9hJr4dBY9bTKKr4rDEyBhhxdMtjV5ZVaocL4ko1nc3WXkJWTXVBSa86ytMAb7",
  "key13": "5M179oKYn4QSNhBLN3y3TGKdbfB1bJz6imM3RkwoANmeLJ3zhNzhDGK8p7yirdSwwgbZMi6Ag1BTWhcJc3csAZRy",
  "key14": "sfyUX7o5ongoxcPiLCYRfVavwVzyUjEoYc1aQ9oh6eYRPJEad3LBLgqPoaySiqGZu4KoJ6rCzzLqXnJ24bC5RDs",
  "key15": "GihfzwexCBH5kNXbEGTHkiMR13sD8joMtwnukd2ivsVproJ18paGapWCBqNmQ42t9b1SKKzQLHaZD4UoBnWhjYx",
  "key16": "4Egs45B2dkh8eCqwiSicGup8VcE1qvUiKFXdLG44WyJXosiZqSefTzXwLRZ8q5PGjuL3MUmrh9KKhuaPAE9g7F6D",
  "key17": "4YYa9vnWxRsbocHUcRbjRC3z5LaToTzvt4r4sBwgjYyJxcMeAWHmK1UGkJHyRLSn4hDBa9wLZJy5GmRZMyfswRp8",
  "key18": "4Luh8Pk7b4E98YeLTPJqtQ6BetWi9SMCGZA9VF4QMdczghrwckfA163DPu5UGMBcJ1Bjo42xaxqyDyUmQa5SFFpe",
  "key19": "4xrohqnepMPPstZrd8C7RJDmxVF5Vtd7HmM7vhjh763vVNc6SaxFai32VVjbAV4h1XBCuZRbnNV2A2JxbnPHDC9U",
  "key20": "2bWbRff5zQt5jw5ZcVjYh2epmsxJR84D2jYti8kKUkJV6Xp4zScimTXcgKVK2SMQfrUarWquqnziVPjrBx4JNRQQ",
  "key21": "32EfNo1qHzRNLjXDrKv2daysFmTHz4RDKbA8RQPaQRMtfvBDVLqbAjkqiCPZafeC3sgbukjoed5p9Gc4vDsuRysR",
  "key22": "3xjmtBVdTfh8g16HsfCmpbwJcAsUD6qHkg1o1XVncwtYS6Qmi5fXsd8Mqgo6chuWcdj8bkehJVcYVSbtGgsFLVJi",
  "key23": "QBu55GyUrRa8sqkvxs1pwa9x44RRQdcd3UUY55LSNfauqtHHZ51f76AnZyMGCtkiuc2wQSSnX27UWrV19Vk5283",
  "key24": "5zHovqFbkeokGkjj3MKH1mPWhzqGZEqDih65ELyzW9zP8QYtdyzCdY9A7ibMtF5iKiVtDj4aKeX7xtmHcUDbGwYw",
  "key25": "5UkgqNffqGWCpjPk6QKTuNiuQuMmoMtwetnph1gK8BoPLjCbPKgNaYKdnhJE8U7e3M4et5uK7GTBYwQHbVBiPrCM",
  "key26": "5ik43xPJsLU7dUurXa8yVHQKKBWuC4y6sbrk1ugz6kkRsfwaRHvzJ5gQgxpQxqXbZCvjaE4iAaNtwpVbi466s6pj",
  "key27": "66Pyuf1b1eZnkJzKF4m9E9RJ11J1RFaQdMRKgDWd2TVAvqmN9S23ddfz4EfS8oJ5JfHcqb9A4HyVFqwpAocmNapM",
  "key28": "2uRttvk6WjxcGn22U5xkobtY9QFJCcnje3MGNmgKaMwxu2eXgEFxYa5YJjF5t46AUAp5zqhgwCDettHNeQdp99iS",
  "key29": "56tKuqR9w8ipGP39JzQpcUyFVX6gAHZcYX6apzxnwaSuCWiSpBuKH7TjY1Uwxtsq4UnUoPz7L7s9NoqLtFqd1xfK",
  "key30": "3U1hqTX6HNvPd213VYVYQwM8GcATYU7J73vSM5oxdYLDyeEwZFKNdYZv64wNzi58ewsQWMRqZQopU6pPTHi2zspw",
  "key31": "hZZkKMGc48Lsvb7MNepUvVVv8sQQAd2hEt1teGLgGx7rVUz1xVXxvfQ2kyRbQGAuFFQYrYQbRzsSJCaZ49p9TTT",
  "key32": "4J9bTg4PEmq4vUgLWxd1CtG7VbH7mzvTWVKHwwVkNxe7H3iLBpqqrr5pSpaZg54Sw1LoH8rVpa1ReeKDCf3fd8U",
  "key33": "2rmwfjJ8Fcv8ZnbARsTxqP64m6WwAFwBUDbQ1nZWKmtQGZEf9unSz8U4CQ9Rt6BnDEPo8F4o6d5h9HBAHXuVgm8P",
  "key34": "49CxC5uoERu1hKyAfn6pCVjwfotJ9MGa1AXKAW9nK4PD5Xk79j6Un3mog1AXVMcssYXjhZDU9ubbmvK1EoyHDBT8",
  "key35": "5nBYnTCCR21s4fzXvziTEdp3UTsNwzRR8LzMZ15kQB7wadsVAUrJhG8xkbo1yQ7msYbv5xzhzMgN47izk3aCGpCt",
  "key36": "29V1mjdYegv52V3DEarQEwbk7Znpxo6q7H3GfnrP6W6LUfxk1VtaxrnAdw2F9oToihSA7HUMB7sfbM3NGmitTEbL",
  "key37": "dLRj2EHgdkZwovLYAsUVeyz6mFBoqXXgabZCnsavkcaCFeLKUVFSduZ5QseE51WyadM6XDdzhUGNq7Qp4nbWx1Y",
  "key38": "4EqcSVwzZWNTKPeQmiPYuq7vGmhpFsNv8S8tiYpVRUquFmzUHPpHP7AHwtWLhh5Gz9DfTHBX2LKM16Qr9MiNes3G",
  "key39": "5GZN2GB3UB4HPYaLHBA7WX6odKsmbfp8fUrYM61eWFNMyNuzHpmeoVtQFDg8U4BH5KAMcrqCEuVTD5tD9qTa5KCB",
  "key40": "4Eson2CasJLQC9YKM1o8hAjpjTsNjkshFBBfVnPVe8wzg8j2Qihkwa3nSPKeqUQTLeuHJK9t1WkGCj3DBeNu5SXE"
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
