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
    "527XfjvYAe7qtubMoez7JhMm4Nohs1Au7FNchCshF7ff8KAk8MwCGmRE6DpGk6vpqaXEF5UPty2sB4vzM114rfWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJjPYhRs2yGnSpekf2iS7MwNWzuXxUH4tqfvFzbfgmjbDSq1MMNStuAnkrfRcD7fdrQYZrG2kFbbEVhRfW5AnLC",
  "key1": "5hbwZLEQKPASzJFzHdL928oV7jAKTW92Cx7aSS4dikryshwq8HRQHvHL9N9VhWh1yQ2eZLpFoYvRY4yGQ26jJANy",
  "key2": "BHycpjzCNTyaEMAq5ooiA73R6vuDBXS49kF4Fm42k6ynJW9BDrCDoTYN1XGHw4XydRnR8FvtJrLztabYYh52o9P",
  "key3": "22zcUQAM19xS8TSxtn7Zu5SCiqk8nQg1vsoK9XkPbL27V2z9y4E55vyfvxikLBge33wiZqfTZFwnSuyKkkwabmHV",
  "key4": "2eCNApUrr9MUkRER6U8QxUUmirrv3Vbmoyh6TRkDtAMrdsKh6kVmpTvP8XpnkTcgJkzzLNEQsHoQ8vRorgVqcGiy",
  "key5": "ZawzfvBUfXbUx428B1Rjv5z2Y1CHXvGha5ULin5h6Lt8vsDzWAcRiZCF54TQjdTvWtcpmK4iukUp3Do6qQnkxSJ",
  "key6": "BKBaTJN9z4mc5hN4vhyrv4LsR2WEMiZcozrjMm2nRzDeN2qUrzbYySF65p2zMcgbo7JmwFWkkwWL8ft9nSGjPf1",
  "key7": "2C4b8GoyauiZ2Jv3eVaKnQ2Sg3eNArrZWEe8Y93cKi85s62fvSvooDfuMqL3czGwXEPmTdtHymV6ieLNNNAr7AFJ",
  "key8": "aPR4ArPgB2ZvMCxiekHzZpUL29Bv4pZDG7HEdpgYJxVLGwPTu4fyp2KEKQX3HJk6YWP4dWdEg7WQWJE76wXTLbK",
  "key9": "4ZfDCLGN8DZsYHDeBRAvGEwKVokGZn5vxtUYnhb2rpJCnsMpnvqiLCKHcnhzi75oMELWeTGhjxre5dYHzhxAQtS4",
  "key10": "5LPrvTASQ5sMKEePjKt3fAD64TtNcJcpPyyumzb3FXnpCqknG6RB1oaP1r9R1JAKS7bLaiWy2Wy98Gv4atsoWZRd",
  "key11": "5H13hEsAGNLkXeaX5shdFVbQmX4Afceo5Twk9kHcB6aMe6szDzL4zvxeHvAuuCJtvhQt5FJNur6kmMWFnrdx4U6e",
  "key12": "31sTNvoYt27iozPstpdZbKdtUWo98zGnj3y1XmvaYcV9ypWp9NecwN6uTLYkz58C8fhyDgqKe839WXtPTTkgkp3J",
  "key13": "2f6qqp7qwNNP47YzFZWAM8bmhzCqq7ydAfCLxoQ9vJUHFQgXprXj2VfEh4QKwQY2MnhYDJaqmU8FZWpbcYm1GR8h",
  "key14": "QjoVnj4NhNQfmrmBkRxiout5fXsCFAxeK1Ager4FYHGSQkfMDHjeUztJTwS2TZYEuoQKf2f1FrqopmCk3JCs1aN",
  "key15": "4Zky7JznTcNbSAaDhhqmMyWTJ75tP4rBpvtur8WWVDCmu2mivcjKCtVdqkQNKxnCuR5jN8ex4ame5gpVvbExTv92",
  "key16": "5sA9Pe9rpJk5jGV8oeYYxXMyWFKpE2EwT7q15tqXka3tqBD7dGz6NXRE5NQsDa4LMidVVh2NNyV2vBWXStxZTPBJ",
  "key17": "3Ekuxy4YDoTFHpN63cncAzz6eq88PSBrQKAzW21jz9BQ52XHjffvAmsg55xgBDm1eVs1r13UnoqQCwDs5XCWcDTY",
  "key18": "58ZiithQmqsAbJ5mmnFqZP9DkEa9bUQJuuyo5vcyQZWM7HY6vdUWTCS6pWix7hxmNwuQwKdmkxqSDMjNDHyTGiaY",
  "key19": "22zxuVZJd3E85XF34FnJFyeUyxPCH9WYz882Eib89DzzguYgTy9aDLE5f6edjWbZYhvmsa87gjTR87bZThSM73qx",
  "key20": "uEu9fkCf5ERNtUiUGCWdgEyPnVdh2qwYu8VAJFrinU19PZem4btEeoR32vH4Gv5Y2CycUe44SkUChdLoWPNDZGN",
  "key21": "31LNdgEqzSVSFtxm8VS3rK9THYPN9SQPJitKhmB5VUJipAHg1CEKb3uEJC8qeZ6qaWGStg4mm9v6R82Lf3qY6mxZ",
  "key22": "37DXMzujcQ7X75WWPBR42peVgRWhp26uAi4bJGt5cTNs1GQcdsceBVuxgMS1AffhWVCHB5jR5iNCXLyWnoV7vDY6",
  "key23": "YCQG9fRc4SJWuPWNvEhwfJLS3oN9tHbqhKMzCrdqgnRXhtYuKVgkydY84q8QW2kWBmKTAy7EDaGq9HZw1EZKmqf",
  "key24": "4ZffjnjPGqWHqEcAgBzcqwsm7eShNw14BF7XP1WoA27VpW6dKatpejXTHZo6vLt9ei48i6syFESzTxkw9wux43NC",
  "key25": "3WpodcWcjB2ckW2Fi32SVPr4Hfiazb99CUNnsENgSe65ub9FYaXh9VTkPbToxyr5y5ungzdDFgKtECGP27pdy1ct",
  "key26": "5ryRJ5sxKChdJTfA1sqFHoZe8PPoG2eCYTxMRsrTBaBQZSpR4MZtfkTRV2465dn7ASteHzqCEjxBSALB76obmNGH",
  "key27": "24Ek6eYnCxxPUWv1uy46dcsCmQbAWrcxsyGCSw7pwwiBgmdYXAEsyRtHZboeVgvbty5at4ZCFp64CZHzCvZ2TAJV",
  "key28": "42oywaE6NKU9JMfssAA8ic6FU5DLCATi1gGsndEaCMRnggoZZqxq5hQdAZ5LW8NSmVZvsjWPG4fpRsFiTmHVsysp",
  "key29": "54kq63fni1GfR2vpzhgUSZHQUhBD6vWYBzDi8wCX9t2HrdYMJuTNQZ7sys45yTyeYkNEsrNdaLj5VncH2LxfWmm9",
  "key30": "5zZEmHnMr3eCxKNRgARfeYDfmW2WWDYA4zNDpB6dMmmM74oFMhNUFX8hLEBGbCngVDiV2uJVQGzQAKEUJXxftMtf",
  "key31": "4yummNy7LmVjHo85PSRpWauD5NZJaXA9VJpcHLhP9eWMU8BZf4WS36xJQbv2uHYwBPhtocKwo5fhkaebC9zwx7Mq",
  "key32": "24Le9ZZho7yLYef7T2RU2D8fJTF6qSXkRQ5LedCrhJ8RD8BTCCaRX3jkK72dR9L2mWWQQzWxUQdAEZmBRfUEvYVC",
  "key33": "3i5YFXciC5YFSNSeyzHeL6czpBN6qLH8K9gVtgwkgg3XCrwC4kBU6eWj26mEMfosAUjf1E2aUmB34o5EYujQogqp",
  "key34": "31fJRTgH4qJjE4ebGAjgtcYW4Ar1vxuUA7pb9zRpmCkjYM7tjsFez84ZxppYvoWUnvnj9v76FezfRW1NtCNi83mD",
  "key35": "xKW5hGmaxDJD2TWxnbpLhdgMtoM3dN7HetniaFEFWL6Pp2SLzqQccn8Y7w8p4uEbAWaJThnT1RuAoCHaoTGhMKP",
  "key36": "3uj4XURGHTJZoru1dhiGWe77uoYXpZNH65JBPRxaCCCXfNo4EPaZztB1eqrELXVbDW7u4sHYj4EsPKCVoiY9JwSe",
  "key37": "5uiFgUCZoYb1Pkrbwtnxzhg6g4eALAfUJQSw5de91FhLUtPJZmUz9oQVe6THZ3GJ71NCTEnLkFxu1hZBHQTGN2Uv",
  "key38": "2xZkQqwbr8LZ3CoEyWQ4MQ86ZthAbrQbkeA8BnYy4QG9tfjAVtbpv4mRUpJnrKRcjQwDnyTeLVpGyFEGVVBcG733",
  "key39": "3kdHbZJTYFzKdSG1Pi3pTebKqFt39Eej5TtJAm991h3JzQNg8VGtdRpz6YRYxtbA8jQVweM3489JBdNgsHVYYhs1",
  "key40": "HkeTyc3CtG9h2droTRsi5DBmWQW6yuiB2EmajGZTRLPYETB2Zzf9S37nKfTgwVWENXNGicjbvhKCgMbrMkm2ZfG",
  "key41": "2vhJuV74dqcFsDWUKZhhUmdDKzxa3W1GiM4ZpHFpGStY8wbc6b8UurejtbhFZcUMDvWfPtRPg4SWb9R2WLBYy3hu"
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
