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
    "3vkVyym2pyRcVDzWKaEuLDA31WntPQK7cSESozgwoJDevb6aYnJ3PeWmJkx3CrUmUxqPkx94aTnE8tShbHLfAgJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cm7CDWdSgmEoVB2gCqhwWCh7EWoPsvB9mgV4zMvaiL3KfZ4irAQg7iS2pcbN6LkaCg2L71eQEUUxS3dsKWDwLxX",
  "key1": "5pvYvYia9nkv9DJi45rDvNoyHZBaFUi39hW8HxAjYSEqxL3rwJRbMK5MgSDzGhsoamwjDjemPYbLrLGUxB4iXtRU",
  "key2": "44CCuUa49WDPkrR7WmkCGvV86KnCM9mzkfLt9ZeAbiXjRGoZFrEePGdVdQxspp3Ev6hmWv4xNirTW6sdBaTzGJUt",
  "key3": "JDwpoZigbRgQLgEVHwAkNJbN94ufLZ8w25VPKZsUxyARFf1JLLVUjqfnY14us3PVbjg5XhKVGVA3MNzQirH6k13",
  "key4": "2JAZH8tNDMj14Y4wybYGdAvft9uC15zaLX2tdvGVxZ55CVNw34x5K2RZ491Qd4DBngRxG5UATChECDnt4gTmJCkW",
  "key5": "Gkae8qN7nFAdsfwXNKnfGzGJhiuF13ssD3tZ6xtm45NkqPce5Sqd6xCknW6X8VZ1mmRSxVBTmmJPWfArBevVn5u",
  "key6": "5Q4LcGDYTbRBEDUFteaQ4bNk9HBChsWpsjPYF1J9MoJ8Xe3nNVPNGu4SkRtCRUJmqfJSaPPrnrZ4ycMemLu3QGjF",
  "key7": "2d4zXBMapV6WKCpyoANAZ47Cv2G1Boizx4nwjksgLFHmJhfJS77stNmtNpwDwk9X4RGPQWuXMpds3cr4uymS2kRn",
  "key8": "5yPdQPGJ9NnqEhfiJ9sWs4Kbpga99A7FGzurvQU56FFNueD1Z7KYAVErh32RWyrZF2hyM9sqfrXmRobwDPAqkLKq",
  "key9": "59vJxzM7sZ6TFDqNc6r1uZsBhpJJn349yupGVkzgVqVYYQRkP1yUApH9CujFZYmeDUqz6Lj2NmbMFE1AXHwAFt5n",
  "key10": "2oGR4CD1jChN6LkF64Ng1WoCYTVUW9KFoivvpGRS8DrajokLiCh76KTLy9iEXNGPaLJeAD1G3k5zMofE7JDYP2Bc",
  "key11": "3nQQVmSmaKQ1b5Fu7S2AvtBFAfXViM57KTHC9vgD2D89NtgWsnHnpqz1vV8NGJGAhisqrgCnNqLyvqsMFXTJo9ms",
  "key12": "xZzqFKMpe1X3vJGAse33zpyHZcg1W5bEjouWjeL3g8WL4hVfwfLgBVMBZLoJhTQq9hmGi8jehME3uNki3ZFvPRE",
  "key13": "5Bxm8rRGfFQNC9hxtjRT1hnNHRZpTTpEkJvNAorvq15iEvJKLw7Udbhb2xTo6NjQ2tbVfYy8Fj2ZcTrophABUcFX",
  "key14": "213oZ1YnzhnNAawxmup9cgUQuH5qfMPgWqCLv1ceEMQu6D1Uc53Hi9acztaatyYxcXVov696yrbss7yB6rUxCzZ8",
  "key15": "3ekqdsZN8QcnVXiBGhKo2G1ocWsKV4P9iuW99Jb6EVCZPgXqHyNE4ERnsoYFfR8QS3YrVFzRnQ76HgimurjEUvst",
  "key16": "5XGpv2sn2pbPEqwkKdZFWaPCU1C6r7wQzNo6BCUwRy6oqWcqN3jXDz1SFPWtan6noYWw3mohLBuHAbKVUeJzGcj8",
  "key17": "3sFP4pTfofSa9QWPL6yW5gZUzboKA9kR8K7K6JxsS5FAheXF2JtqhNx8vPm1r7GV42T2T5dLPjRB1aBLYZjVYu6U",
  "key18": "4AJeYNwaYSHM1TYGbQShtDhFeG7PsGV98mtbaeEfoZGyPDMUeffPFwL6aRc7pLh7QeG2CjGqGTRvpxBhz3V3bSHP",
  "key19": "3gd2secoSfa9R7KppKi8A24rdg7NZSRP9Mz4XjahAobBNQRSjFJpmz2qYAq1ovyTZsbe7opm8DVGH774ETYuhViE",
  "key20": "2ixEpecWFjvnte8293ktEXAibEL1pusCLievnLMTGTiY66nK9h6okb95rtfEdK6VWPtH3nLE23a8hgEbQfBpHwix",
  "key21": "uyPnvQiqxFzWvaTNXqR1h6VGzaHcFKwYXbkB9xS9HdU3yjk4xPhqvcA2osPd8psfv7WcryTbaBAxdwCjGetgpbw",
  "key22": "51MYjpLHRYPeGquXmrTxLx7Upout63VVRUGKTxzP73oKCW5iw8nHBkBsYrEKWeQvj9JeNnJdvGVr8BjqcYQTVbhZ",
  "key23": "YjaJQNck1YwfRdroigV9ksiPaW7PNZNimgHjnQiF1aeu6N4i1CuEkMbinBkLn33b3RrwFZ27Q8KtCrJLe5ooPw1",
  "key24": "3BKxpabzdR56kc3iC2a9sbCCSFSxYVTczr1CQxdsBaK22Ek2d1mEhr8SanbcC7F2pwHyKqHw4H9iPTR3Fb9MEPEh",
  "key25": "kQS5fjPMij6d3Hn1ZgPCkwZJqaRXbjdBKMgDw8BNUDDSikyQWhZ14He2qT4AVrYbwgiXKxAuRpHnQamTrMJLdWu"
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
