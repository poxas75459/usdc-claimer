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
    "5Dbv7nxMtDqjoA3TohivKz3vVf43GTJEgAD5oHHci7Lg4Eu9AsFtpRgiKs7fdVaz4xMEVMzUcdnaw1GnLcKUjLG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQsYUmVt1YsopNRHVDo7tMUZg6wfXaJe59s5vnK6f2n4da7SExwj3RzNDdqQRFbtJ883F21uPUXFAaowpGqjkzj",
  "key1": "TZHYfH1KYx9TY1yoShSpqQK2aWVe4AzXxaUywLead41riPSW2gdeCJyLYN6wGGWPDTF1HE7Kc7HeWM56nsDfi1E",
  "key2": "23rCxPbSHf1oiuF8HzdcdJFupwQBvNTFfpHQVYzAR826c6vX78vERHGBBzdvwUmGoPzKsaUPHyiqjvBQ2yP7CrX9",
  "key3": "2XHT8SBFXaHyswqy6SHajcA1wkZ9ZUehRmdKrHzXhBd3SAPtYCS442Dd9yMJwiKRwgGhhBnNjUqicfG2JNfL8q3C",
  "key4": "3AoWiwzL7TkYNkyZADkrM2u6T2Ui8Y6cH7GzneX1WhgcxtYKAoz47VU5wiXzZ6Pj4hHDgTG8aNe6QaJ1491YCGX7",
  "key5": "4eb4kbF9HH685YSTGBMkUSz2AKyQGhcab8iRyPHhsVNp8AXEdSC6Bxqtf5gxbjPsUG2n1Q6Xjx5PReFC47Mx3w1m",
  "key6": "3h3xhnYCiffS1kirmwKu1FT2acaLgs4nFeF5JERhF4hz7jGs5XMaMLArusSjU8ez99HD8yP2E3xQxfMsc7Lo5L4K",
  "key7": "wkDQ6c2ya14Ui8bwiYpv9zzwer56ne7PVNqLS2iLjq8KX6rqQKb9EipXeSNZvrWXp5AstHWrrH35LkTutGQKCb1",
  "key8": "4RkiacPXp8BgrhJngRHGB63mcD7HfYyr7nWLCyyy1JfCKHUcF1UG3rBFrdHCVjWZ6LU1WLUbBWvkKrX4UB2knpNe",
  "key9": "5oyj11rbjRciCnn1GPWq8Ct49aRR5ENQ4EGT6AjUjkPQzfoeFUe3LEnorGfbPT66zHr4aqfdc5aVB9nW14toZLq2",
  "key10": "uTt6LUqahkLoE5y14V3ZaN9r6U7ocyuiCkX1snVmn8to4kAso91mXKQMj8fx8VicsBPkCg6sJCwKGd7AiRzNy7N",
  "key11": "2riSb3HuxGeeJXw5xUMN6XMwkNavEmE1tvDR1Z7RFPq5A3TXryjDzNQ1rATe7TMqxVg4WpkE7CU3J6La3JQzyg37",
  "key12": "zDHKFcMmYaqBmwDygTg5o5Nwk2jGaJQt19Fn44yzDYrpE6sSKP1yYpBYSjjLkv2xDh3HKD5FPB4mZtqGQG4XM8s",
  "key13": "UVXdAQebYD4uAMB7KSCfpQ93tKYJSxdfxifxTj81h7656tnmCgvLQuseoxHmRRQgoNEjZnHFarovNmWHsAvMe4G",
  "key14": "38seXctsPx1sEiK5gU5ycFVzR1Dk8VEQUsVgA93KdtcZWLwg7SjE1vyAXmrLuwX23epHTBwMg4AZT3pDMkQ6nUcW",
  "key15": "3XePWF4X2VVJvxq6Sgr5ekgcLBS6ya3rfmhK7PMKKEYRQanqX3DzHGKEUrdmTFAWBkhxv3RZ2eHyZzhTc3GS6cmw",
  "key16": "CdQWCNTZhQxVYxREasU5Cg8f2MqFmYy3iWdUvphci5K7ZYVnDQrP9mYLxAp6mTnyRLDmuzKsoLR41fyFkZCYPCV",
  "key17": "4BHu5sYiM3z23oAKyG3PKCJNdHyM9QwbD9BomM6KV9CJEG7qoDe2Y3B7ypDUx4vEftBmbkijdsehoD4v9ZueRuBb",
  "key18": "2bWrP3pt6RwkwSTumZLrAzUTgUK9KHLTqx3kDaC3M3AknBD1J355p9hgQTD5iRC7F8S886Qz5MQr3SR9HFBbxB89",
  "key19": "39pasSrdoWf1ieEvUUcxAqhUPx8WP7XUQrrSuWqr7sEprVSUiFx5ZgooDufik891V27cbuuZg4z1KkfdFs2hbrQ",
  "key20": "5bPJVnGzK6Yo8mY7qrcoj2tdFrZVwVCTNRZJ41cFuQJZYwKNuowgKVshTYARiEPtd3DnCznbVHBTF9UxnXPRnLhE",
  "key21": "YDBJnQzxEmwFmg74kX7p9v9oNymb9bgoGoXMnokA3yZoACrdk5JPQibN2u5jtveyMKV2dTvmMEKm6CFm4XsL2js",
  "key22": "2oTEDNixbdEAKMrmhXWGUZaLkqRcLfaT46wu8JcPS5nqB5tKge8928qYQefDyoopqLzf2gU1dkX23qxRhEkoYRxt",
  "key23": "5t8UgPKycoQFajLJyxPvbAag9AgqJUWSAtv7UWYjrGxiLXXGe5GtLKNJodMpnybyHvpz5qp5A58DEA3sEvw2tVg3",
  "key24": "3jBU262rtLNKxRqm3RPnSerCUAyHzGdbtYDcJRUSgUwNw24JU2iwDjCyju2kEnGQLvKqTSBq1KwcsTPzyxy3znFR",
  "key25": "2YsdcFCFFtv5GenJLdzzN59oD7j9BvPvD3GYd5tAPhPKM7Uw5Msyywk7RbdowWLEdxhXWqSXcCrQWYH6evmkV7uW",
  "key26": "2wg8JV9z6NQDno2ppYqaSqUmRZtVSjfJCngHHLcHfBXU2tP4MwyQQWRu6tfiz5a9pXuTTr2kEeMUwxU9d2DNMNfN",
  "key27": "2TmU1zebn55rRAVkACZXP6itt7LfUjAQbTS1DyEWAXimrSUKueXXhz1mKL6K3vCTjKtoJVyWFzDKVZheKiVSSeDb",
  "key28": "4etVVc6QwciXSFf44jKcmpo9TzQfTG975JrK8Jus8LLm7Fzgrso2GqNtidzBA9RaZpGjEM7uj8zwyod8pXFM7Ugh",
  "key29": "4X1Gmw2JF9LwMTs6BvUoXsRrask8BuUxLVLDtkeNwi2PZZVCKh2AwnVzsz3T35fRnQhnD7hheZCRu1VHriE6S4HA",
  "key30": "Ppi3aXXKxMW2J1PCr1MX1tSbJK36mJLqw8TUR1W2PK8sg9bzTig64Dd1jV85aBVetHogEEiPJh9YZBCQjmdiWh5",
  "key31": "5AAWVxmJoV8MkwvacKKhaTLenGL42qHGWWGpxzNhKLfb4bFKtXoPG1RefeZGEMkmxFUczCcARAYErLt6YKaxHadW",
  "key32": "3tnXeZjPNKD3ZffybwpTg9RCe9ng8vK5WjtbJUKf4MVWfgUBLXATxrv98NSnWeVgtR1X4oc2MzX4GBuGzhDfyq8N",
  "key33": "65VV7XcumFBvg996KHJ4uTXJ2yjJH9Nd3qMdiHqPXdWyGktZ5j2WiiwHKq2wEc4Jw3e3968tbQ6ojfMHmXPF974B",
  "key34": "3gqHhj32qpACqbdEZpa8EFGW9752a2rtTuQrXBtA5vyGS3DamD4TWXBEuYBPnW711Y6t4vCkwKpPwzNmfcu3QoyC",
  "key35": "3zyoALE5iu5XpuSiARbZZd3wd5VHchcTndX7XAQ1i64uC3G6WMUAqw8fC5wb1zyqiYojQcUC6KB88L51ZWiXZVWL"
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
