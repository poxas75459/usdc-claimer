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
    "57HPp1Uz1qw6nyzVkb1tH8AQmuGKGX2g5MnQbtDEZor7DXNamJrzoUD8CouULW36VfHUFgEV6VigWRPME6ERj9AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1qeL5etpJKRF8nAWELbFHTgTPYbcYMUFGtq8AHke22zUPCuuWBR7cNmseCjYPPnokFVEHJUUQ85s1z1Ke4b4z7",
  "key1": "kqsPGdwvwYw7syJdMkZAvtrW4x86cja29bQEWdu5nV4tMB6Sqvi8HypNEgzVV2Uv4wUCBHCYQpSc8f8Hsn4LeY8",
  "key2": "21F9ryFygTNyubtjYP7dx5Dt8P1YDcPcfvbjthUs9ZNWprrU9HoCH1u4bYax7qB6iCuHZAKbPR8jJgiseMdrncug",
  "key3": "3Ys2gZvxWnU8pWqf2GFgcFAML7DstT2QWJGkK4Ezuiwbp9b2AUydiuJSQHurpeYjJL2Vcde8TTjP87naku2DP8Q6",
  "key4": "BypsEqvkAqmxN3NAz4Fr43AK5c78YMP2jVaQBgdneUWtYoEf4XLR5DQyJpPPh3sEzjcWqxYq82LZymtEMgDBbpQ",
  "key5": "P6tj8LpC7c2VmY5sEEwmFf6SEUrufGvSfSVD3uLxmsX2Nwnz6biuDF92gCyaTFKDjJ7pYUJWtG8X3wAb2PLNRYM",
  "key6": "5oXX7yrBez7MpUpS6ZdSNrFTX485LiKM62gQmNeqtNHiYuXZngSdjTT5g6C36Bna7Tp9L2F5uWU457nqhmW6g33c",
  "key7": "4gWY4Xzezp3t7vncnwfLr9jFo9jNY1gEh7Te6rfb93GXzkJx4WAbCLjrd5NJAC88mRj7NgLDaZRPzsDnZ8xgoRGP",
  "key8": "5iBreNGQJ6TZ8P9VgbGSwwYwGquHP7T7nvbbpBdCR6jRVt8YRatQ6Ew8kNKvcTZUiPFkb9ywSLWZcFfiAWePEnox",
  "key9": "2BFr8GxcbZD1aGhKTRqh7DmdzJwbJmgX3cN1jX4jpFeJjVkDCdiRdivnu5AiMGsafWcrTVyzwimuHBC7kvbwYwve",
  "key10": "4UDagknwX3RNhsEPdEhQiYmM8hY7B7XG7K6GFEHfN2dAxJ3RV2uW6k3JBYExNavG1p73E8BCZNUcQEHBBhWYc4Fh",
  "key11": "2Jc5YyJfdhzjq2kvm1bCvNnTH4nku5qvHsSHemUWtJEaUDTXzR4mbJuML89LCfhQ9hgS8RArMQ98eXyUEm4bDTte",
  "key12": "4qzS1o4SzTcYJNphaV3MxzuzfjeWhDE7uqtkatfbs2BQQQSi8UwKXKvhAKUUDPntaJo54sTPM4o99qEWnVvycBR",
  "key13": "5fQa4gDxGc97Rr62mN6s8sGEx4neY9QJsCYSqiFTCro8PujPPDWDzNaxa43DzhRr9oq53xFVkznCeARL1GajnoZn",
  "key14": "5przfJnE2eaay144bBD9DR1qTx5eWTUf5CiBVX9bhmHTq6cDMvxx1E8CGa4ksPgZKSUf9DG6XSqmRUMxkCReQUzd",
  "key15": "3mTrcxoCWzxMNxxrWVspctX9vZa3HDozn3kPuw8FKfgBvw1dvbiBYNTXU5ZZoZUXprexytKsCf2i9X225uSxq2aL",
  "key16": "4pFSsisa4Hto8ggDZtUcfVZHjCdX4ehKW2hTXfwtrq2LVaM6EMxKRfefobqK1oDJ9ZbB8GzaQb6sLK2b1KwTkc3T",
  "key17": "3fTteMBgSiAwrhHnqMNQogFEb888yEpkqK15q4c6ZfjRAaye2HdT4urq3LgCMa2YcHzKQvMDmWE4sAEa3S7LKzbH",
  "key18": "5wzVhi691CbBb36dqJpTSxMg4TdSRWxZYibpn3mpTQJyomCjzj7ffj8NS4wjVh5Ws7QZWFXVzCLShT8cA4b8sktP",
  "key19": "58jbbV2pzuWG4GYTWreqPgVotkfMRCt9EUYyhpf1NpnPRSe5KaEuehe7idzd53r4hruPFY6UAE1BbsBWD1Hc8UbV",
  "key20": "4J66bi4VwLU2xXqe5NqPFThi6ugMP27NmDbFAc9p6dCQPNaLMMBDtQngKq5mskU9HBxEyoyubKPazNMUyCPWeXLm",
  "key21": "4UeTYjYQbzq7rUNHEfV4vE8ek5FTw2JYHVyyfV8YXSqzB4L9JJwSKQ1RkNnFC5Jxo2VggJrgiB18m9mRAZv2r2TW",
  "key22": "gZ7Hk8CjPbei56hsNsaWSfuv33w6rL8wLPoCzrScEQ2ynvKLEenRrxFznxD5DwXzRrDgCZJ1wD2qypmaDGWysex",
  "key23": "4p4uQAnKFhnSK7garAza2YcnAsWSsBG1SZuHiF42E9ih1hfDm8nQ8m58q4Mm6PoifNzJdyUx5CZcFXNhPUoFa6Bb",
  "key24": "J13Qv53oKZta5Pr8vMR5qRQX2q4zrxcpSqj5A5UrdRxPNAjktLXrYYjBir7QhCKhwu1sqaPapVcsd19c44AAiyW",
  "key25": "3s2U6XhgKAaggV3CvyiM15FEMnrpJ6WBMjr3uGHWwB3DVy5vfgimQSoJzDvhstT6uxxvHU8eBs8GyM7pvXWt2568",
  "key26": "piZCdSz5RyGohJGaWie86Toh4VArwKB8mWmqy5j8L19NzufjueNdrbKhmVvg5dzhoT9FT1ZaMM4pz9CKxMLnyMe",
  "key27": "36aM467nAfyEnFCZfQPTBSUxGte67bvKrigYVWyR7qQzKkceePpgSqrykit1jit2VcTi4hUjDj7HhZ8t4DPnttm3",
  "key28": "3UkLfDssPuK93Y8iraV2kUYpVYmemM6cuHHFKyP4nsDCiaPLQhqAZJdAdhzkyTW8TAeaZRxFHQWdrwUiDPUZ3sLz",
  "key29": "2UY1sinaDUE7dwxkNSVSq7pj7KYnJAimUsasWfW7BD4Tm1aibhxBJCGt7VQN6hV6j3SN8oLnWXRYimtXsCXfKL8i",
  "key30": "2LhX66fAKdg27bPYTMZPmBf6A2N6NvycZmnVEtf284Ecv8hVLL1BRu2wwTeXRYNwh68xth8KiVUwASxzbE5VUgiG",
  "key31": "4UwhCB93EPs48rDxAr5QQ7L4y3hqWpbmFmwkarQ1MVJbvs7ApSFKfBiXTJfbjnvykTHdBzhRUTFTa1s3Y8ztjcyu",
  "key32": "5Xya5HD1uiCzHiYEDXW36M7GqwcmjQxV9Cjgm47vfBjskWRiPRr4ptofCmU6YLVf7gfxXXxx8mqEfWpNG81NQyK3",
  "key33": "TGZEmaa3bhQnZHPaKpKKiSg1ZTE747sh13t7urNF7TnsVvcACznAXitcvDygF8zuJR9i6T5P948zP3H93HfnSdv",
  "key34": "4BBYjeGAPgCKwacfmNQGmi8qjrepmk1k34qEBN6v8pEeXWC5LRkARbvxej9yW7SQPii2toUKz7uS11Y6YiNnwYZ3",
  "key35": "3XazDn2AW2AykfJoVYLCA7KvKbpVmuiEf9aP3d4D7QuXZWzjHNcMAP2q2aJ7wi2bYymwjWB8JF7FkGHGnbcoN7wx",
  "key36": "uSZUUkqLUg6mR2rLtUcYcwTaGkxJM5NGMismEguwLokFEBomaiYQcqjm75H7dzKP1dVXgULtTCcR9NkPDQAkxa2"
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
