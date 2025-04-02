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
    "4GiYwMD5BDu1KeRBDjW6pZfW2nACM3EicNN8fufKX5b6vm8qNwHTpa8ZEsRr6ua3x6NRhFudNvL6XxciFo8Sj8P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHp4nTWSu4Q7PkbBFtz2CDqC6rZ2yjCY15Z3GEnHgNsfJuj34YdrQmnt4nkZpDSqDDBctAeZCi4hyqLHjaYwEfn",
  "key1": "86C52WiBNkrMYkmshswqnkw5ZSGMYDyEKYWtW7eC2WmoKyTbTbn7QNKrKoatZftSfucYoVMWqSHVChSZgC2CSuZ",
  "key2": "ZiWYyvGid6qVXPArCAuhQsZCPCuNfCLnwKtpq9kb99g4NCmo2P9NchwKDWcAAVHMmxLk867evowJwqTHex3gJxA",
  "key3": "xQ8GqvA4GZdWq6mKCyv18BZNYxnX7tWgefEgCCPgGaTcF9ptP8g9yPZRAhecuTYhKkMvRmt7mm7HjbRrYhLJCaA",
  "key4": "5GX4N7SRwm4cYUujU1vv8Ltr5TEUvxany3UgnqeApUvhjJrmBkn5SMUG2NnPTZMPdVf4CgMst22sDVViAmi23815",
  "key5": "5iNAoH5uXSzpHnVXN4nkAA4GWXrLRLRSwfcEwLeSt9eShahmjFJvVPBMrCLyjtCgtevJaULfLfAas45yCVdfysKf",
  "key6": "5Ciu3iaWaWTno8ykhQMjCsSEEKaeDa2r7Xn8EL1m2FXDBqZRaWgXkPYjksCTQaVpzTnRpbR88mUondrKTwZD3ouZ",
  "key7": "5V8tAYyL72jQiQCSduMvarK3wkpvToZrJXJuxSz4K5DNWfzaUz8dUUninZi7kuVoqgMgbzn48o4CdtfHnVWYU5uD",
  "key8": "4KpRMyLrYwbncDbvtZ2gxy1V34VYiYwG7A1P6vv12AfSYfemUyN6BkMrvq6C8BTSoNBm5NummbWdNr75FnViePZM",
  "key9": "57SUEHnAmEL8CE19xny3AFunYx88USBcGANXnKUw2ghb9NmCUwDdx7EFwk2xYnX8K2f8MHrzTJZHa9oNqYttbb7i",
  "key10": "2Yo4i9WztJ9NR2evuk592iXEoHhCXRmmvYixH5BsYzBfmQgVSLmgAN2NETJtqiGnCCGXP94Jp9JY3AyvA43zJAKd",
  "key11": "2vUCi8WZWdAaF5SRf9nQAhypFwtbQJ76dmqrE6F2cLnEZptYNdBESSFFeJHuiUkypdmPRx62xteHginLZ5CKibgb",
  "key12": "3o4UZBm1QfPJdm3Urgpwy464MB61BsoF9xqqyYwaKuVzTRs4XX548Cm2G7KNiqhdWPHhsjD27kF3zwTGG4yr2oya",
  "key13": "2G4ttmctruAzX8TZJAqtxR986kd6vdGyQs5TqFwjt4UVWByq6JCuWp1jr68BSUccojtQE1ZDfozS2jUiaHTX9WNj",
  "key14": "5yZo4ASmGX6eiED57KW6JrHTiuYZeDCc38E4vb8sqYEJpCosTRbHG2ce9tBNmQndGh2kobCUAXV1BhdLdi54SrAT",
  "key15": "5eTahpTegr755Mdcmpt8563qircevc4BTNtqqhZWTb6VQjd8Q5MYJwmuqiBY6ATuPeD1j4UTuGAEYadVAZMx61ka",
  "key16": "3xYj75GkKhgawk1jc6FYLAuhi7AHUfNiNHcrn3ysAW1rcYUGqJwhoHefj4urRDXgsvfYUUpiuzpnyu9or3rfAzHJ",
  "key17": "3TDHkEUZxVwcF6UrDTdPXRb4389KbckVriPjCxYARKGgZjgmamzmD7ps8kqmDLgU5ETCkpFer81XA6fV6Cat5sXk",
  "key18": "2rGtoDWBnvUaEBe77fnBoanah1Cf1tMwtngQoG3iYZGdtFZ8emGmBLx1nR2igQHaUS2pbnP88LYvyP449U8r35c",
  "key19": "2yZnHEu5b1M5bwonkcytG4DNSEzrs47Hr4Bq1WDTBw5g6eLjZEz4Qg9WvimSbs3RPSNL52B5csuxLVKQRmWoXVH3",
  "key20": "QJfapPsGKHbXxrhuUsny1M4b7EMXz93HSEopyNAQJfam9pauokaHjRrpvyuHiiwHWRNkmcchcSwfU4bVjjWFUFC",
  "key21": "35d6q7mDC1itdvgQhtMwdTH19E1Qkxr1oSmBPHM4ephZUJz1uMnHXp39uEnNp1Frz2xYxvbiWTd1UCqPrmpjVDbK",
  "key22": "5SCUNDHMBqfTmXDzqrtvzLWo4EHxezYWah5UCibpBNLqJGXPaYyGsv5EVHUBhFcs78QpLxeGhit1Z7C3ag4amdEF",
  "key23": "3fn972y5W8pReqrPsZiuu9xNz14rPbejVeFc8NGYffdDorGRu7GdGsYFDQA51RzTgFMWJGcCmkq4E9yySsnvAvAb",
  "key24": "5g75BCCPWQmbBze8MXaQhMxYW2MJYVy3ooAsLCDjDhgbsau42Fanh42YKYYcPS1XcYPBxUaXYUWQmWuCuAVicGvE",
  "key25": "5jQWraqgojNWN9BEbRWeaujrJoovgNcsZSwZ872tbqbtA8rjwaD2haiXX3jeq8GRHpzHNtDb97WWkee4Ys8BCJ9n",
  "key26": "9pBr4KHd3FYdTW3CVE21owhLmvcWskbaRGgttiDgbR54fg6EnW7Ps2K1c4bGFPQAd5aFxfPwDBN54M49bh7bkbK",
  "key27": "3YznxfZZbvoXNRjeLhuVgKNnK6WVyBWpuDivZUy48xycKdStoAPJSAMdac4883sJvr7kcUEc9XXqZyEZ7r8zPZCg",
  "key28": "3eFriaN9GZ9fLgnCkDPXuN5PXWwRE19FDeXgnbaN1VDWrV6sUiFcWbChbnL5LUrGHsHRKxhxZrCYVSsbZj7ibPxA",
  "key29": "2wk16MhwWckrMDepPETaqqS1Z8whZEQSsYpnVysUXw9dFKh3JqoLWX8k8wDoUjHJNTN1Dwd3sRuiq67h6fzp5ZNJ",
  "key30": "62Gn6EY3omAVkS5U4uBthBdVtW1iaTi8r5HgGjJpftm8CrMprfCnitjosLVdkJEpvgmqVt5GcTux4FoDfzvK756v",
  "key31": "2k4MS7SPQbefAS3FcHbrn7cQxLW54rFgfA5vaTq1tqjKu8rzRJHq4EaXiPafVSZRFzJY2Rm4L1QNRF8MraF9qNQB",
  "key32": "2Sh8ntLNL8q6PVYY7e8M3s9VvfqUjpm4BG8MCevKm4N9w9nDNg7XwPq7onAHkWo5MXa4TGHjNopQXxxL34FdCajo",
  "key33": "4ara7JT4shhWPHpaW6rdNwVCDmKy5BHWFqMkVxfB8z5obmhGrswES4kH4B2q8p7icTzsjvgiDhybt3ebYGieSBXk",
  "key34": "4K1f6JmseEno7xtjPvUWoFc5oQNVvDTTmdb4rDcwjoJtV8Ze3egJUjd5FsiGvz9tF81s5hwgidDV56VoYLeKZomp",
  "key35": "Gcy5xswybUaoEPjVetogbp1hAHJT9Zs4S6kPTeBLvRAA4WUe8PU4JuaL9CJ9wPoLbY5r8Agkdin5gr7u7hV4e6G",
  "key36": "5jfkNaMc3p1D8d5CxMidftC4MfvaEuZoAHEefEGttS7J74ubUU5BckUWLbNrpn1838vdGJxc9fEpEvUxaHpqLmKG",
  "key37": "66Vqa9oB9BqQurU8Tb7JzvnQuRSnFpRM8YWBPr7p8pPWVUSEpM1pNT9mSD8nXQkwfxnWU6DgnCpYdkCLgExCmcLB",
  "key38": "3zA8zqqHhVPYDaCmqL5pCLMaWU3AmVAyjC4T37v6JgDSZwXtmMpevbbFcsjYLwf1ZJPkbGihrP7UbewkbiDCXxVk",
  "key39": "3S684T1f5nALw2USwnZMQX6jsL3udC9iYTYv2mPtvQPLty2kvD9nKQLnKsEEwuh7Psbx4bY71DPVYbdj8TVhVThT",
  "key40": "2f6EY6K9cFdAY6YXaZGE7w2XH2MLox3mmEuGgcJJ39uwtzjkWCprpHGguHTB7uKGRhvNuW6yQqqrLxFt2BiPKDFL",
  "key41": "BYNkbq3LKUt3ejKMW2118bmfQRBaXHRkUHbLUW23hWreJ976Pj3V2Z9LpGfR78CKW3fmDR1tm1JKLPM3uwPYs4j",
  "key42": "4xAGnDdRQhXXT1PqEGVNctZFr8wMfCaFwW1HDsJ5SrNAQ7hkDY9p2nsHbdXPHLhbLB5LHbJSZSMzTKfzRMWNrfvC",
  "key43": "2GB1fA17opCVZwevTS7NYjxTwcq6AWZxFGqowSaweYzTEbRjAF5TsQEx6fiVr4hVWA5dZ8gzMyjXqeBHKKJuWrbV",
  "key44": "4hcjW8WVNgscEy8JiKE7ofBpnzSzJQogGQpZceytXJ1oMqbYchLWB3DS4pmYTYPFT8tzWNuPw1ZSS1w71BVeP9at"
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
