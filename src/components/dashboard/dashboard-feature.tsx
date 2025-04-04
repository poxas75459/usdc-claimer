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
    "4bXtzdohSF5DWxDxaLAsnEeN9EiUNio433i4VnGbAsMdqMhLcXfjnhpFgbDS8WcKhLEXnsWbgEgXukZyBzKX5VN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tqjYAZBuVoxVTKFfNAg83mKHuiYP46YbGEvnybbgesqqnbeNpsp7gJrY6dFM3j6SodqX8NBa7hMvttRXQEniTsm",
  "key1": "5QAxyfN8JmF2E23rg46cipRHXfPDh9WSTgjD9LGb1bDtq2ZgLkiQ5tDLtmpGUyEKrJvc2XQc2EmvF47rXQ6VfLFY",
  "key2": "3Bmt2SK9cYRh7WHForYabjzuoSafLm8rYVf2yC8S2duBpYjdZQ8rPi4BakLYWjkHyasnBMoLBzLPVbyJRtKrfp63",
  "key3": "2q4MT2ExtSWQPssbEecvKhLeyPuvSo9XDEBgTHE2kwHYhEdmGVHqT9e3HxBJR9r8VzzaeG3zMZJmSY2t7uYKQbjS",
  "key4": "4kgRmREftEjTNJrQbP7WqD7f8uCtmk8tJUbzXc38CLrGKNYAnbq542UBUXG6eY9yvmaoF7CG2vwKNyeBqqofvhk7",
  "key5": "2f7H4kLYvoTqnxNr5KQ4qVCzUKrTkBpEVMWEzVYAfg6FznXqRcifY8t7kBcS7zNEs9o11zibNNnmDSoFay2SRFp2",
  "key6": "2dtwUViAAhN5ACMeVgc6fGx8rRGZBZ7tk6u7dMwtvVQD6rnttDdbJTCPDiJT3VeaRPGGwaeUpZRsreFhStX1eBKP",
  "key7": "2WGC7erEinizWcPQxAiAuZx9VMvARYDp6PbRDKhenoNiVWTAMKn3Qy44kwP22EgrB5cjUPukz2wyohhNhDU3FNbS",
  "key8": "3MgUKwhBcW9H85TTQoBQQ3imA3JSTm9kR2HC2Ydn7A9purTU2YQtXFRCSDsLLjiaXYXyABT4P3zqRCJrVRxLc9et",
  "key9": "4GLWMuWcDn5HWattE6K9oSkvZ9QDV6QbHpWTFeQnf5cvTtt6mEEp5txKCED6NjmmCbUsBE6sYWws91bgcEnQaNL4",
  "key10": "2cquHCA3Deix8w6N2MXVBjDvbRkM8e2AEfM3mwK1bTaKbqBPff4Y1i4C6uHp8SCnxZZdtPzMbezpAzzoEz64LWUk",
  "key11": "2iHa865BQzZMSwXZtkXaTwS8PLPWGtAj9Fry9cF4CjkA8fHfbqe9wFnU9kyarPFHcubAh4XJjcqvDixa2s7FJ267",
  "key12": "5aiFMNfc7Wbsb9uFXNbGACpD9DrcTrhKtd5PTgiFjMH8BBfUn8FtW631vw5KwbXdJc2s1XWDiPbcMMrB1rqMKTmw",
  "key13": "ywL57WYYSCDjHVfVuUG1F8j7YdfT6sUsPNLAZqAqPSxkxdMVwH7EvgLXh1WtPnCPaBp5FC6szsFcPWdD6TDk92r",
  "key14": "4R2Z2S5EzVF4gpgFCeseNFFPXBrVkDq7MWB7fKYWP8ZGmhXpxGeFA2xpY3V75f7hDMYAHwVssHG1GctQmvUE5aVg",
  "key15": "2zDdWJdudM67qPGruYPXGp9xNsT9gQupMeEeFunsfGDVmV6CdYBMFUxkc6oV8vwgwoPdWqcBTWXbq9HDij7LCThp",
  "key16": "4HGoGHc56ZEcxUc8rEqetFyDcpMGSwrz7hT6pCo6uuWWunkLkojHSqSNyskV12gDQoWzgpu8taRBgh6pUUKTpN7d",
  "key17": "5k2zrKVD1qzoHx9suYp6ZBmrBcxXDZCnQCPuLdKRNwhUe6jFvEAaLhFf8UW3XytRfLBHuS6yyD3qrCjYX49XZXeB",
  "key18": "4VrYamMy7XtgGwAToVqG5AQtZcrS9zwsCNKZR2AWVqQMBqiST8V3QWBcoPJDBJk6i3DQtLxjEe9Db3tGWBjFMaoY",
  "key19": "5eUEPAAz2fkgvnRWbavsrZYg77iNgPc89CuniTTWHjhZkCTJRNHV9WmGra1WwU9ZvMt6eJEc64vimstDAw3zAyUj",
  "key20": "3Y6hN11gYm2KmkNYrYYKqEf5bmsHmwSAkBP6ARGkPF5nCgAk5zkjydbtcMy4UWHrB7NUbFRJrLDFnUnGiPnHp2t",
  "key21": "5TX5D1RCGftwLYu8h7styQpAgGkWJB1dWBzUWP9cWR4nztR4imZfmy7oBn9RUswcrYCvgqWQSHECW4C5X6t4ZdBK",
  "key22": "4u9MsvYsEqVSbFCRSTwQKR9HeLfCJQpLJtvsg2QwcmK5qiMUBeo1Rag2KTWUJtXfNxMQPm3pHo6EU7mBrmsTzvVg",
  "key23": "39BUcNFwHNMsmiy5dGn3XoKPf6Udw2zutn1LoKnHiG7nFsVyRkRH8RNAJ6MNJ5Ap2iivQjvkvs6Kcxfv6vYpdLmz",
  "key24": "4rnWuBHq2Rjmzou1Ya6gZ1qBBdf8BgeBMAaa7Juifew3ck5Aa5ZAYXCTWvnDPB4oQeSZGopsXpSM7oteKTyATb4X",
  "key25": "3DB4Tv4YMeYzdy1Qwc3L7VepStvYTHiVgvt9VTKebfeHkCW2DmZ7nhM2tACGcM3jwXFYqgj4zJXZaDsoCDZVSFNn",
  "key26": "5CuYPWEa132FaTWU2gMA5pCyyyk3ZL67bEavTZH2KoReXt3GHQBdY9tTXkDa5MdvCNGtSb7QvdZiewmjmP8KegVF",
  "key27": "3KuH6q9344JpgVy2dLw9S5FBxWDLFWsFbRjjXWj9LGrQFLpxvwdhvUVoZD2YozwhN3oQM7TgUFwLEPuetmLm5WPL",
  "key28": "5BAw5VKRx38PP2LYQH41pGzNdRkd5op5ztYYEqcqj5E3yRYhKV2SFEn9uHsZE2dLvGUsWhW2ByEo6KsyMKbukHCg",
  "key29": "33Ap2cdbqGDpvJfkdGHzq8raAVq4z1ujh2HfMnifJwaRJFcxRKcSj9GFq2RK1VvaYCdKv7Z6PQ28Ts5REGv2uzTL",
  "key30": "5AStUHnjf6uzwE6LCjye1stLkSsNDm5ucNTUsSY1B3r6i5FDUVGAFeCDTY3Dg6GZrFtPSDUx6rPwqhn8MULY5bUp",
  "key31": "4ov4wdQc5o1ReMesyYP1P3J4xpgx1dnjwd9EH87cTFFM5jcH1aidDbnqEE6tvFwngY6EEVyvV2t3oz8Cdkaf2wUD"
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
