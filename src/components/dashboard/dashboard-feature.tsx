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
    "3GCgp2TFtHye4qcrCwAuerny4uFLWGcVw9yPQzFwrM4WjGXdXChnorHRTTBMUBAa63wEkhEdMQ6tPr6n9snGTyW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JmrcAsu3CxXbTQpzSvhhpUuTnBwWazPRBTsHNNEQsGLHmHWJwyxP8wDwmCwGxf218Fw3FFRzURU5Ukky8n3EuKH",
  "key1": "3Ru9p2SFNNAPkMU435uVdfxDeTAEpiZAWgDrRHh5DZxcSYyf4JzPhrHsc4AXby4XG4qRngA14YPa9F91867zjM2t",
  "key2": "LFcRczdocHqv8y3gunPoHsRh98LRTuAVuppoYMir6rAoTBZzw8eGYaPut2s1bwxqwCXx1xWgpH5khhJEqDFzK2z",
  "key3": "21oB2K17SpVpkogkh27B9GkezA5Ydd8k87NApBkUBDR4LC9pbaMLTEg9R8QbXXjzXbiiV9rJ8xio8ZMEQpZznBUh",
  "key4": "2tpkL6fjaa8BFHGQMMTHhaiL5BQx7C2SnpHKn8J8Gv5DHBgpKkLwk1XqfreetaAYmkyXhhifnLUGjqWMtG9ijT5A",
  "key5": "219A4j9QtC6629ZbmFzWg2Wt3671SVdz6x4woe8397etG7SuBA8CGAfTqvBDmpLUL9gNPqH6cBg5mcGWHNxTTUjE",
  "key6": "3kKzhSCofdn7CJamnxfoztyKewtVa9t7S7Q9k6jri24qNGk6ZzSyhF5y6gvgaxGUsRAcg7Ki42FQqbaiZQUXwwyy",
  "key7": "2tQmTPo4d6QMo4F4yhEGGdLQVvrYPQVqFpAb5oTeWd9gcR7qgN67u4JyN2kecPWWTbZp5Ro75AmSNTz1wqyGoTNB",
  "key8": "5xswx36P7QZqafKhJQjwATwj6uFeysxmK8yo5H5HHNWcdSPu9N22NARgJd7heY1hUpcP7b81j9svFXYACwi6zeAr",
  "key9": "3Grv7UE2vWaSGXgsaBxQegYPqb1RcJtzChFqoqt8do9DY2igpuWrvA58VyR4JFCtW1t3HfMZVKYpvUDiBbXC627e",
  "key10": "3jqsK7h1rdzKqTXKMogVmXFruBoVaALDz78UfhJbNBi4Eu621FyGnQTSTFqXTQraYdGXLLD84pNFX8DnWyZx4sZD",
  "key11": "4PoCxjya9AGS4Co28fAptYh9e4oqLYsa7xVtQBaGn4JeTZ6fRreU7FLbetcQamT3eFVYMWrNjremSc8xQqPfzhn1",
  "key12": "5uxPVvL99JqeQxAbgGdxuccM2FCsSVLMjWp7x2qcHtb4PXLxeubxe9sPh3EKds5oSru3gLN4vWpSkYpb2fihacFW",
  "key13": "3KYSuw22MzrJ3zEuqcdiKdHEemR1YLnrFQcZa87t8cXMpnVVbYd45kG2KYPw3jTpbwz7fQScHaKXFUGAGBTsXPjU",
  "key14": "4HY5WpNHfBTThZGXjkuyHMTNbP5wSMavt1hzbJS3aePjpQSseAyuP9ude3Hx5J8j9sD6MV19ex5ay16xV93W4DEJ",
  "key15": "FaBLbZpimKbnxrTjHWDVZoswbNsCgkP8J3XzQEdUo8eohVqpCWpr7g4pJzWyQSL8HKmwgoLFC9EmF9dmJjrPYpL",
  "key16": "5tyVzgbqrNsn8ah7mFXFLJKW7mt3tuo1vZ5moRGdpTtBwmXYQLxNmP8o2tZnWLZ8Ntvkp96b47tT5wakvApzZNUP",
  "key17": "5s7cXD36MdWs8aC6LzW6GjzFqkRLNQP6WjsUr9jeGxrzu5bc4XDQBpmmvUdq44KGx9fhhCNauWw2aj5vWL8kK9rQ",
  "key18": "5UXNgiKRnuqCpd1hVjSGrjJeRuf4M9vVJamW7ntnAQ87dyk1gSJ1ohsT4RCtvXSjFpNkHAVjhYv9Zd7BUfPw5GLw",
  "key19": "2JvFXnVzZwjeV8oS3yRYjhPTjk7r3tEkWjgkuwRScUEKgjxGJn4PahYLfNAsqHDYQz8RDFEvYFgSqY8bdcZN4sS4",
  "key20": "THgZvwguZxAobP6DY2mwfHvk1P9kzms7qGtkKR6xti77Rc5amvSB36gcoqXeNo1SeP3r41NXEPDBtHL9zcgeqWV",
  "key21": "LdX8mSQBgeMFncG5B9Xz6zCvmbs8b6FvxTYVsxotTuRYfKRCwcmVTnj7AdMYTahzF2CFvjhhfWVQLHxrYXd1naw",
  "key22": "3oZJizBRv7SDC6ysXFdc1si8hqbpqqj6Pt3nFM9g6oQ8SGjnrBLiriS9xShEn55tk2YGTuU81cG3quJkbamaudo6",
  "key23": "4YXAyrovBv7nWbfKLMEehnMC3eAm4LjzWbx5vNAmzVxn2j16piZnF5tB4QXYK5m69KWVYayQ6diBXKnLbTzuRhTZ",
  "key24": "3JVq3TtmoxP9G6NZnZCsxzmCzGiGeqxqkq8CoLMhUM81x9YsR7WS4DYNzGhZQrY2huSmt1mUyFWUsCpY4zysreCQ",
  "key25": "BQC7okc3zwWoPmSCHcxCupqUiSMkJSXpmVN9itgUsxUgqXGTkh3HL8QVyHHzcMb6y8ekiA6vY2UEChtvJfCZHC1",
  "key26": "4bwKqXqyu4xcVT2sbUcSNHrVt633ZrjUxdMPzr3b9biH4EVW4USmLXkAuSKCszrriBhV1HxX8kRShF9AmEgmJt9w",
  "key27": "4ARBCBnTfBTBUUGfydndsgvmCBcQxbACMqLK7dLc87kyi7cPgN3nxWiR8ENcwsZW7xXRBr3Gmt2YchhBksYyfCZj",
  "key28": "4bFdYHDagqCpJM1YQAbHZeW8gQ8j5VwbmoHbfLoH4MKeymHGU7GdENq1maP7UCgqazUvJdR6p6Jqk4pcdGWS4NsX",
  "key29": "24cvAzhNhWjY9SVgkrzL9Laz6V8WQ2jhTnNCBprNzCCokUaL7xE2k9jCvm7sGao2ZDDj1QmJoH4FjYSJz8Y2zaQS",
  "key30": "43jeKbCn5oGzGkLnT6SQe2PzaU7n4k9JD5xu8jFvQX3ecfUbcBxAWrQ9N7xG1rNk8U5rausNYRsyhpQFSfjmK9jQ",
  "key31": "5nHkRvWVqZAWU71EcchABc9YgYKdjERhWX8L263qfYDqJfntW13LEJvtvPPpK8XhHZmiJsdU7ug5FUkJvTHCP1Nc",
  "key32": "3dz9TB8HXmASuGqbHgcjbtupDjpx6Wrf1HUzFBo9pm7mRGzzDoXrLDxmQ1BpC2uKWQAWsy1BvRiLd53AKQ8ijyg5",
  "key33": "31vXJ7HfqGMGUbYm7y3jwJF5Emvii5wyK1dGEPvxxruxZSSxyEAf9YALvBBjgxS1ZFNys1gX5HrDkMGUByZNK6ki",
  "key34": "3E6h6KZRWD6PwPvUsE8ZbjJoRX7oBybDF2Eg53mekyoECWMjnn9PjM9eU53p71UqGZZ429ADqHhXaQmXzAvSvB2S"
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
