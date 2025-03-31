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
    "v6WZwGLWZx7JS7tF8zdg1FWAjRC3asLXKvDebBYeeNyiJqjYbQuKnQvvT2h3ng7GPFp7vzPyfR73tVmdMEC7HkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAYjwug9szgBUCJpZtPpVcfTu8EVrsWpsEGmBVUVJZDUYqBHY9PnxRjwq97KiX3DmBEo21EaXZ4m6ktx2kikNkB",
  "key1": "LaKgA98grVtE9bbQdzPK3hnhKyaYv7Fd2zm17rac7vbiLZABjksJMq9ighQhfB3tPmkBybxtesGti8eHbzJFC6e",
  "key2": "4XQ9N3RB42ny6TNJgtBFD38nKev3ykDECxbjpca9b6EnZpxTURcE9VZ22LwZXbCWXT2a3wqR5sPaEqVxQTY3bbGt",
  "key3": "5RZvd4Q69yJUWNoRerxhp3K4Ts6QwnxGk8z2SqgW1pqGWKjs9UW5aVmrKiEwbgMkMWN9yZWAAgwEBVQWR1yYv8VF",
  "key4": "3VzGq2hhKSmJPdGBQ59WrrBsvAjAEmhKgqMYXY6EeSpKcat89JisuYc9hhthaNpjGvbzJPHmrfFx4SjUHt6jzLA3",
  "key5": "3rTBR1JtJS74Hmd3sguqivrQmfkzXqyKKLevmgR38RDie1GeW8Wnc8vJ93Crr94iZ9CuXLRxNAyhEdFL4btxjgnC",
  "key6": "5fHPaxp1gjMMsJAWBTNyf43xdYmjdzCTSqFNphQSQop6EKigg62mZScTqzjdMNcNrR26onhtCVceLyZfEK8XS7yd",
  "key7": "4XsvqaK1sRj29Xqfj4tJ7vzAfptNVhGBnkgkdbRc16XY3VvnCMdqvdkvcgUyKkA5cCj81CEn4mokKxBnRi9tL8Z8",
  "key8": "3MSumdHFr7PdksQnkTzTr36L7QjDFBKdwU9C54wxLDpMdUmBqgpWRgVbMX4Q3picb7ZP6yN4VMBSxFzojsDW2Aab",
  "key9": "uafyHuUu94vfEDe7prXqjwD3vtj4VFq7vCzcLmFCw6tm4RzStPzEE1L6HjmytbSEXEekCgU9c56Y9Q1vfbpkbYM",
  "key10": "3QUAA8DjcUfNTfYYj3Xm9WW8heoQkRricDgka7PjSh7gXK62SDZrfSuNHNXSc4vyQdwADZH7y5ACx7sDLUg2TBZt",
  "key11": "LM8ZR7e4VBUpbfT73YotqCwu6StptwwYKxFKfMzAmttYgsfHQyhzm8QpQwg81aqaYFzBTiAxXQE6RwonbUsuk3F",
  "key12": "5duDiAdU7gZSY5uxkBHYDPZksDeNcEgHpWiu6wuGX2SfBq4yCPkX4APcaQo1QNKWVG7egFhnn8LSoRSj9n9T4dhx",
  "key13": "EqeAYGuxnC1mPCT9xPTyonmjuQhy1JMWtcn5SshwFhYdmzvfHTYUu6UeShTch7n4niSYX89QiPu64hxpERtawk4",
  "key14": "3LChAYbqbqzCgLZGFYyYUAyfWimpMMuVt61ejZ2obAZjhUR3fXu7WsqVQvFQPUz2v8NqkVJwUx5aotmBCTKMHwk9",
  "key15": "3CCXmyLdfwn6zdLzEJUv6sDTNdps51xVSUsDfAitoxktveTh79UPXQiGPLmdkkyzG2cmBUfoZVM3e2GE4zMr7Dm8",
  "key16": "gootXdYLm7UGVFi3JuEWjtWPxfzqbRmfmx4Ho5sQJuzqpr7dqWV23Q5uB5oRiVAAhCErvVgNwtyv3pojjjXfCig",
  "key17": "3TjuNFvfJzr5f7h4R8rsAVY3sgMCmwcmXbg7ikYmGV4zi6KW1VKpvjwnrL9FBSycnHjRAgJW5T4PT6UM7cxMtcM8",
  "key18": "5zDpK97iPz5GeUwDZaBG9t2XQWZ84YTRMQ4eBPMBy5ig44wxhAUyNfNaxd6UUzmwsf5od8WhJUVxcuverAypzxLL",
  "key19": "9iAszr3NDvgA73SdyHDbf8sEQiG98HMg5tgJrgcRKK6kS42UNWCPgtc9XcLNi4jSQu1J98FWjrvs16Fbtu5jhoY",
  "key20": "4oJGsMdyCRT9H3FA2sv1mjVVnk8QBc2a559efQcaqvzKE15enSixLke8iF2BZUDh1i9yCekZhAA68s8JnLen1y4F",
  "key21": "obtAL8Zz3XZy84N42mQHYu5wX4omt9m25ka66VTnUUu3GhpnXuLGLrMUSPZQo2dQfxjKuMpyZ4p4qRpNVXFseeW",
  "key22": "5ukvtXzBEBrWGQF9ACHuW5xJHgyrKehrXLyo4fDgQg52tU4NP7YFoKB8g47pd8c7CnN8DbPPUUu1nbMM8nDJHN9d",
  "key23": "vTcKKG7E5oGuMipvHz5GGmR2ExL45LKH8XsHae9DrMCbwFgET3hZBaj2h8j3jJpDvvgdBynQS2Tqw1QYgj5asnb",
  "key24": "3kd8BtqWiJ2bcmCNovMFMvwXCcWipcMT1pFP4uPmu5cEpU8uqsyj1kVCcNFdPYw3av4hThJAHe84ZatE3mJYU6fw",
  "key25": "NhCynd9LAqmnRkju8j992wVb6XCh8cAgVDDY1wnUgAeiYLJgiWbTmcquiJqDccxwZarefNcYjvHUfSkBi3CLa4p",
  "key26": "3BymhLzr3N1etskxVEUhVzAr7iEjT4YSjAq3JuBKAgY29S2ucSvvdSXWCU8bRstgwP2YiawanaFujesSaceS18dv",
  "key27": "n3s8XPmeJ1tvpU2YVmicShgjdXr1Na4Wft1wp5Q8WmDDAhYQG1vUn1jDWtHJZXPfDBZ2JogW3KGKyo2ri4xDVEr"
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
