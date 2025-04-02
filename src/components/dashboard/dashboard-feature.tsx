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
    "66WejoWCnZr2BU2HALh6xo4L7sovqWax3waffAABMpvu3bMfhbpwHbx5gy3AQ7Wek6VSnN47AWRwvm3gVvDUkLN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGm7hKJr7ZaoSn9w98HMWvzrXzSQCWrRzoupbg9DTUizYEbNHLNFuVB1Tc5kv65281PS8mTrVho3sVqM4vugujj",
  "key1": "5vD1iLBrWkDzPqj3zba6s96SuLUKhpvkapNrDZESCEmuiYwkvxim9ABgh54AbLdoPUTy91QskViNkTwaUdzdBFM4",
  "key2": "4KK6ny7rECBjzcDKkUDgPnQZ7WHMTF7PP5BTauvftVTS6zcL5diTEv22bUU3yaneFzQdXUpH4rZbhLk5wdCWYZHT",
  "key3": "2hi7xtLTTSBS3oVcS4DuzHmtRfBpZgJrgNgoD3PDb2moYgLYkpoeeRTMQoeWxG5QrbNL7zTafEFM2b9xfyfw3tsC",
  "key4": "3Ym5UFBPHZGaaessqhsstRWyXpHKtajuPsHoZBgpfBZbuC75a27gijmnYqSKvzpDb1Tx8qVZU3RvHgfwoenoMQLu",
  "key5": "47mpCRH3fWVzgYfinVaedfdSTJpPXWiwvYwk8TYjMS72vA9j66Ezw4eqBW1TLFvRxpwB364H4cxtDxZYFdjmPsp1",
  "key6": "5R4aYBFTZFvgyYWkdK2ib9rRDbotUwif4PNY8GAr2bMwzXNnHLfddR18DwVfoTUgbNFj6MYrBU14bUUCFPdbxYN8",
  "key7": "wDcarEgZQE5Twr27Qo2FWjizBrajWHCqsr8P9FrcxoCS5gB966WfuHbQHEE6TAmt16Yn4KgKBVPtgAoZTEj8oHW",
  "key8": "5BWxr3ct3myiCKSgr3j6NAzUdHCNNkyEGv1x6yrR6wBVqNoSZ49D6s8rM7BSBM4DziTyuVPfaCkK9kjKEEz1FPcQ",
  "key9": "2Z7dUnDvqqZCJg9VyjR2kkwZnmtroUDmCbtfsfAMswzXAAA6NriaPnvDSAgLd5AP649Uik9KqE31YY3cSow54cjE",
  "key10": "4wgaZbjCDLY7Fh63xW1gEUQSTUCPxJHjwKzKPpxZA142VcSSXk6yV2nXs5MSVb8RMyiCmHgsZBr7imbfvE7kRXfK",
  "key11": "sW9ygj9uj1k2npFbDDzkLXRQ4KnaDmnngtxhVhqwM9zw5ixQHfPT2U2k6aWV3BbS7ywrafCbAj5pbd3yTdEf7iq",
  "key12": "3tnHXno6qqwEaYDpYVUoGxx34jzhVPcX1KymDPwNYWjH2bZWW4G48Xq9Z2NxX9rn1TLTApwV6T8WWLTbudxdDRRi",
  "key13": "5YnULsBaV8vJ76GxMsGpw72csQuAtsc1Tn6tbmz49EnDjFjVWSRi38UNppXtDpxGZMGuSTgbeW1T5K2UdET5Cynf",
  "key14": "5o3g6F32zNdztzGEb1NVk5D7Gd4RhEGZ1CKwwdxtgMojh7fn1wC2fpxmpbznsPEQ8NjNDxm3y8jPRoaTwayVQyuq",
  "key15": "2cj32mToL6MmofRKgyqPe2au7HKNW8cbz53pVSrB7Cacw1E2z2fvPFuF94v2wG7tFfo26oYmzKV8vUYvibVmCPXu",
  "key16": "4t1U9Qthaavb9hR3AcK9WnoZamn1nLzUQKKoMJYXrkRWk5i9mKZZaks3RRPkXSfm5mBTmQnRFNdgRYbJd8pfMPqy",
  "key17": "3K9CXNSq1UgnXCDKtYKsvL3YMKuoHGfpTtN9piMW5AS5yDkEaNvVTTveAG95z3HuK9aCdqnU6JnJScmY8VhX1fJJ",
  "key18": "24iEbdDEd5oDDcsWuXFhiyC26r5jXFGDQiAsA3Av1kP482V7ZmQavJgDUR7uUEp7kJX7zzpNKPhBzJuHGJeATAze",
  "key19": "38yNHkKXA6ShR2KxTHwdVcxmWVf5yCFcHVBNWkvhSVzhV8ez22drdX5iZekwjfqRpdLiFnKqcpn7bKv2U9VCTo6F",
  "key20": "f9nSBvGtjNcDo1DLmnkMxxjQ1P41jUDnGFpu5C46CBrYhGJsZvUqHrmxXqws9qb99vnGBnoqLK2Ux7ccA5YdLkC",
  "key21": "2nbereSFaReYG78LHVJcdASkrFXC3DakHSMQ8QpZzxhK6yqma7KzDdVriYmeZLUU6uUUSZuTJR9kLrRKkpMbESnu",
  "key22": "5Cdq43kkpXzbdVD4fhiyCxUmVAnmyh2Np26qH2LP3mZ7riknxjVHsHt5dMYsGFd3LfLVyu7CW1miVD6uknqjxyDF",
  "key23": "CW8HpRSGErZGUu1ESsgWPqq7DSWuLe7b15zdMdJ6aTZtKCDAscgU2WnXHssARE9b8pr7GBJ7nFXvXBY15aUzAaF",
  "key24": "2sjQRy1ZGFwBYnadKG6KWq5PwSAcwuLDsRXnXPGbZep4tptvwQYT4Hyzr2RJ1JGTA7cyrizYcS2Brkx7bUKtwyQN",
  "key25": "4JdxVhriG6SQFbXY1UUc9rELfqbV7CuBQgX2qdbe6cDHWzgEx6qHwsUYzE54TG2D4YTYdc1J5TzJZNPHoHFAkhyp",
  "key26": "cAD8gDXRaNQGufW2AVFNgZTBdwdgaF85R7HVPxfG4rN7xxVpu8s7FB7yj9GRBuQHSnrzs69DCK4BBdQTZBgoWVb",
  "key27": "2sFTWvwSwzXrLAEHgRjtEd56x8SpbaLY41gtdgaaij1hudYQfpUQ2zTL9RkqXg4VNSNzhgKCYH5UG3GWSasp54CD",
  "key28": "4RBvzCFc5uN3zYJwseYn7WsvpNMp32UojE8ZwfrpKLBruZeTddC9GPdbZWyKAk3GVXtrbC3t6rpwYkLv19JnxdHi",
  "key29": "QMbgNW8idbqgommSkoeBSCXsnVvPpXuXD3aKJo8ZByJo22Lu6F86YXreQ73CDbkiCHwe8hnjhKhRGGWcJGmHZRz",
  "key30": "5mM2wTtGSfXFkkq2DF3mYQvMnKdAi8qnk17BeQ7EmutSuEJKe36idzUnanEZS3Zq35Aiq1Wa3xZyFixzLSFXy3yG",
  "key31": "4L3NSFkS5o1abfRuVe5g8xKkgAnsFhN59nMgf5iAokrnEwLABAmPj2d64c9DKtHm7HmKYSTwhwDMggku9qUBfYkd",
  "key32": "5zhU9NYsTsk88hwHq5ZdBZz8K7gdLwRwG4bZ6nqYgNMDftCxrZkeUDam8m93MkFg9WU3h7YvDnqdkHmnBsAQhCtv",
  "key33": "4u45rJuoWN5pMS3yHuM2Azf5YwuRxDWMhUVVmX5x8ACvYgu4ZENDqjxKNZDoGkSxPAerboeshLKBiEocadqsEJ1c",
  "key34": "63KXRbHGCZvDd1PCy7iJPXrsbuhx5om68fgbGa8mTHT8RZ6M2s2QBCUWNhYTsPrwVMHHWRBP7cMpeDsxkv6Tn5Bg",
  "key35": "4on8C44c8kRJgzw4tYpNpWoWZbZaE4bRy8VgEqmF6Y3QN4CuWLcH3KSjEzixRv81mju3wL7XUvnj6chLCnGb9p8g",
  "key36": "3CBw8f9tLZx1cnQWwsayh4kjCoEPBNZtPAUkYhr7fHcA5fskY3QyhazfVtPDW4k6V1t1pKAxgoMw9U13Krejhjkr",
  "key37": "QDQ2DmgqfivgfLuGG8kBEEYYKKc2z9YRjxe4BkJCvVSJFrqX53vNie2QwZSnCXRkgq2kj7jLHAyG9rENAQAeyoy",
  "key38": "3y3BSFVHzr7ThBtZEWE8J8JgzN1EMC4t7L8Y1FgUJAEQGXYdpeu1uGGDmSmuYLwE8BDq5E62kgY8dAH6FrokcPgn"
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
