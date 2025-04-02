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
    "2QWWHVgJbgVE7oLyT7VmnpBHFnzewprxhgH9gEdEsmMqYbzus4vfJjeHJLJsKM9SY9DxgfwftrnoYsG6jMD4mP1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShD6LJXHT3cgLQGnmZ1WwPomKZ1JFFjLJenGRtzS6oU1QMLLNy4g322aEjjbWuJ4hiP5W3TTDZfrLBsiFgPPs9A",
  "key1": "vmGJhjLaikFxL5Dt2YotMSZBCFK81ii7FFLaTf1hzBbptubfWqvnoLJiMg6iV7D7egDLcq3KNCgNyz6v4MVBAKp",
  "key2": "2YPJyeuq5MBBAWTV2bY4ZHpyw9ZBtmQVUyBNwc9Z7qmLKwDsp1fVRb9Hmgvd6J6jHn9PZ9vBMp1qaVLWMHUeZRiH",
  "key3": "3vmaQJNwNK3A6gMpbuQArMkfHewYFJeeNaYHmzhzBkXPZPoAreTT37F8FMhdndHLW2mJHrYN2CSDZE47UqJ7zwfr",
  "key4": "5EeuzsdLDCcfVmiPvRq9Z155VKZgjcv1FEEVihXdg3nLuAyvmMGfU1r4Se8Vq2L9QKU4ztgkN8X5hDbRjESLsGqw",
  "key5": "5kEMNwfKqtrxSkMfRH42c7mHmNP2iUM3L4RijhvKnMmUzx6R86qJ84ggqiV1k9CqxqDoCVi43cYjWfLBxTXqVW6S",
  "key6": "4pVAHzZCSAGjFJdeeEVG2RVUPHKcZ3zJRyHaErbGk8hV7i3YMn28YzJLuva6vP6rvKDzZv9r9qimfQFaQPuPtWwA",
  "key7": "4SUz8FnG7ggA3buA6XV3QMdQC9ZDiiGjG2Hx33aZ1dcmnDU6WT2RwMa9dz4uhMbi1kSNidmT5tLBT9gFSvfS4Axs",
  "key8": "259ZUUv7aheHsZpBNZkxShM1fNrJq6kNYzdZuvvSn6SmmX6NwgeFMbk7Ji52C3yyHJZ17So9NPwjiX7qUuvGjUDj",
  "key9": "3ieUuuWr1UeQvjLdgSbrnDpPFq3gRPktiCpt5JfdjsoBmk4sSWRUwP4uyiT292actpwXNCxgxAPZYiVhjaL4Eo16",
  "key10": "5kheQYWQtnU2kH6PJeYtz4To54o4fmKb2dG8dzPVh4ET1rLHarh8YpfJbzAWZfzoZoEbvPprkLRg2rKbwTSjHm32",
  "key11": "3rT8CokVEgzw6BXVqK6PdXsB2kcgg9yrE2n26JsVxHBBNoJcCyoDek2LV3mVtMzY3o9mG93SV9xPo4cZMitQ41RB",
  "key12": "4ubx5hVgc8U4rCCK634Q4h79Ceuf6GyuF9Te4MwcYvh6rVSMtjS4tX9Bs6S1H9brDcvcgSV1bZkSqV9bQyyFr9NG",
  "key13": "5DTmPoh6YxGuRmJRbwqV8KZNQoLYSRb7CHXjYWjmdRv267JZ11shehAYNhzGQ41s8LHfu6E5kg4QQYtePt8BCbyK",
  "key14": "5Udob7JcMfb46gY82J1mniNKXnWa9YbQErRFvEZEx1xwrpPSZuPg8r3Rx9tK6JcP3ueVHPqmt7LqUZNZKSZ8GQk6",
  "key15": "2W3RHH42dnCh7RAM7fKCU9udqcNsmgZcjEeCCn5qgfe8oPiMVSbCFXgVgd45a1r9vqe6Y6yLXqLaid8V3QHySGfN",
  "key16": "5L82z397nHfnez4T3cs61tJXizsvonAofm8hexKbzq55Sb52V3oZBBNAp6yqhkDHNMSCkQy3sbcVSAH6Vj7Vr7N6",
  "key17": "25kpBhEjzFd4zUW8pWz1KGXoJq1i6NjMsdwL1cUftjqFdUVSZYbHv96ZwAfSSVELgaRE5FMBw4VAwnKw6apaWNTg",
  "key18": "3d59aKAFZZujpJCNkD3rQjcNj7Hr2QP2YjirEehdxfWKHRWrCrJtvuvRke1ctaZT39arqr4pWDk2Gq9mpxymiXfJ",
  "key19": "3VE7byKU4uH2swtZx7bnyC9HAiJyz5xzghWN9ShHcxLMxSPURKmMyDSawPmvcqJvQXYeZB8GkuURbTcKW6PaUb2j",
  "key20": "4WNYeYhyNsZf1iL6wP8ev1WfigYvdoZZgEh9PGFWevUYzAmKnMujYtkx7J7zPaPiCB4h3qXXVti9zWpR6z7sYscD",
  "key21": "2SD8t1wH3igUnysXWtvNYE1LjxD1WdH2zJaKRYVYgwKd7UCfs7E32XdWmFycwiVNQB2xs3NTBF8yo9VKPDZgj2Tj",
  "key22": "2xAkN4Qz6Y4FH1EwFucobehBu4D55dLcE3zEaezvxim9Gu6gdfiw8R3qjiEC76teA3LEHrQKmgPALvnYQj2fvtyX",
  "key23": "4PVMjkjJFEMTEFuttXXDEjbSLf2HXpREiZ92DjTkes1o3DXQXy6hmadTPQVBvnKNdRx2QttZ5QCCoFPNafqMDmSy",
  "key24": "3k6DGrLUuFyWwt69hQGsY5x3WbhKdf9hjjR65Vak7z5Qo6hJsZHPqrMGppP9fCKbpGZqboUa4hswmo7WEWMzE1kD",
  "key25": "48gXgaxAPwXanSiddcQSJkSQyg5N623ZhxJkLk4Yk9a3vMN6uxwUj1gaXeUrbQL63rqN9V615xpHUyqEQ8erNh7s",
  "key26": "qMjKR4H7Qp2iJkhY8fjaK77vhJ5wcqTnfHt1NyT17ensUtxC5HW7bjS2DtmUH2i4ryBUCrV6wsJnTYW5k34oGNf",
  "key27": "4rjUdDpqKNA2QEniXoKjrRsk4TxaJUoNQNevBTXHntFWGeRZnkqN4jwkWiApPViYmUxNQkbn6dG7zsMsQC5Hdnf5"
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
