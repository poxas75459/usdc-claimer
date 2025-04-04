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
    "2aV9xNzBYJRVmvj6RNZBoCnXCtjkjG1M5QqBDXvV95Qdwcf5hw599YJNn7h1NGAzTixaUt9oCDtBQnfDWgm53cEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHEhtSQnXHgGjwbEANsGRNv26L5C7CQnaY5ph32YgT9kyLe2ykqehfyc6C2TT9uaDLctvs2yFy3uucai3aSPW8T",
  "key1": "M5nzGvav7F3URDLLWmYxRoUWoUttVmVtNaDwFVjXxRCXPH3HQVvv6trfShTMgbo6MTUzd1AtPFWNRY52waNA7HJ",
  "key2": "2F4XQx8E4pLm1jtScNwGcYihgN9HYT8zxvaSQSqZiqAycSJh59R2TWTiQhWvKkdzTf1PwJTceZeWfMKwKi4XtWz7",
  "key3": "By1bQ4vmhdRuhTcD7wm5CUkmrL5PHX8fQuCwVH1V2WRz1V1HCpgS34NfV6TozLpj1G5i2p1Erj4UNgG3UzDA3UG",
  "key4": "4dT51seuinfoeNKhDkbwC8D4rs3MqJSbkG21fhjFCqJJBXqQJ8km8hqWsH2hopc7Gij9bbRKA5LFjHtwQqSdg43X",
  "key5": "kp5cw3ywqCNf7yExhQrdah6PRe2mAF6bGzRgHMvH3bs9wN2TijpsQSsS2rudMYJFFC6CYGoYp3KWhWhm8H52DbZ",
  "key6": "5utiyD4eGdAgnSTgEMKVzugHoj6J2T71yFkznzZ6tzk1oKeUPUuLbHn8Ngd3UUEYeboorJXknAqbjvecFHZ8nvue",
  "key7": "4WgbfiHTzHetWkFbiEF8eZ4V3zCDdjJrW5kc1v1Ex1zz3tRun5F98QY1uqNLd5JZbB6bQRbNczKi2XiTnMSJJYwn",
  "key8": "eEYPxVgUpccPquAtpa1CtAWQEsDYjuDq7tUzHoQiNUDtZ6ZgKKvWHeaXSbet73D5RjFq71Hb1J8GgfeDDN95Yoj",
  "key9": "597wizkPqoydDSQca7RMR5da529nJpfRLTTL1EpLCYuHbqJsWDXCak8KqRUJqhjVuNht1vtERHwfqvaZmmDEcr6F",
  "key10": "EurCi5yCQ9gf4aaQwMuEfQ5fxng4sXY9xEcDncqJxRa1g1rEb5aooDaXXq9zwcgffE7vk1Dkf8WhtwJiwe2AMQ6",
  "key11": "5K3FXh3YgW3SNWQXxSn32mMpqxkSgrpJMw6y81GEoqaNrzTrVNyQyuu3MUR39C82oNuHkJBbgKdyofgdvkeosCru",
  "key12": "21oPbdCp7wLo9eMeouzqoVe6ToL8JMj5S7uDJZXxsjWiyJgRkZxxWkbscfA8k31dj3mzcmQdThPzCJct2SeBSMNf",
  "key13": "5bZRrdKSLftRUrTTWd15CK6mphJoz8v1vngqiWFquwutbMp1sDcuYDrWmd7CaqbxDhfJYeDJaGHfVTVH1AbbD9KR",
  "key14": "2ERSdHkin4671Cg2Sm23Vzct3JC4ACqVFeoi6iPh1cULzC6k7fPUYvFLivZvSQi2TLTubghQRXAnAE1aXopKkRju",
  "key15": "TffBriTEWpJ8aZQwnHbomtnWPVBg3xGkrk3zNKAykHiWeUtkTFjCnZVpY7c2wM7Urt5nQYEY8MZyfhj5EsLmeHH",
  "key16": "2qvdMgL8BjLk7VjF1EwkN8EmqRx9sjtJBrbgEXDZKYtdJQBTGR2NTggyk8gYb6V7VovK1XBw33cJeRrXMjJE5Zci",
  "key17": "2p8K9QwBbNyjUZGF78jmPuCjMyj2F52c5xKqBJzQRfdR3pyPRP8KP8dFU4WD2GuUqxjqpWtEDHa9gWJYrL2woEcR",
  "key18": "2cuLgbuw8jzdsT5K2jV7KuyuZQg2TrAp55gb4hV9qSHev9NyyLPGA8XDEfZEP4RBHPEg64Xi4gfVmXinPtnTQPWi",
  "key19": "zuHYSx6DhFRLho9N35fmPuMQvWw941gjBW6UEUKewxK6Bknap5Nb2fmRnDXi9R8DUfVQwXKiUopAc57oY4Df2Q1",
  "key20": "53EqoufUXCVpoth4n3s5kL94p7cxRaPTwUFBLZcZ8SKQhfuiC3Sh5PKk9CCo6MQLZ84GK6Q5czY2kko5b6vMeMLz",
  "key21": "5mbHFF569JQMhoRCAdWSu81eBULJgXSV4v7G1uHHLKGzFpNeAFgtowc5J9MUHcXdjJBNT9EhR4iWsvPBehYrNorQ",
  "key22": "3GCEjMKeE1QUmPJFq5ByE3bdxXrSQZUJzjkFjoFAiMjBJNkqaSTqSdfpaSwx8zfopDX55BAPk7SzUVUbYyWNbgSQ",
  "key23": "tNpkNmc6FCABHPDFBpk3pci1kKaaSd3tUy7TF77YfRQhDD8jpuq1bwXZaZ915iSpsaHhteDkp6S5tyLGNdBtcPS",
  "key24": "4ewturgyQFwtkysRZLMMwsbnumaZe5qpgbyRTTEdP5mBEsQSU5pztVoCtwwMVgWBuhuFf12DEuNWRwejKjsC5vHL",
  "key25": "ARCzyykPN4dbDo61Jm6R1YtcRuUkikYUsKfSXUC4MGYfYxQSaRL1n6TjrZdhtbLrbRnV494fZVnbmXJBdmqGbnV",
  "key26": "5C2GRB1hc4zN5p1svCQMaTtMbLHVtg1srueZVdeTddmEd8NoQFSk7aurvJNw5wDTVdWSZaFcmdNe2WfaJktQFHNH",
  "key27": "3bP4H5EpMfr8vtNxXfANk3TG2owSs4rwWY6Jki95rXSQ4F5T5cFS2Wzc4m16PM1SrYu2zMhND3yP8CsZj6eJPxhr",
  "key28": "2TQd9e3UfHFNUWvFhY5Ecq2bCaS9Sqs52hMLWLFX4x1cfWCQSG9M4v5hECXaC5vQtScbcjdX1WRjwXmmggVL6296",
  "key29": "3tWHnYGTjdo3MUN78rHNbZuvHYcmYwuqiyzTiJh2AC5M8HWs4XsW9Y5GzJbrdYEStQaV5x1fDtrRVCvfHa41MuNK",
  "key30": "3UsHFZsedRJ4pE87DpdHd9fp94XGYvBKZj2ThBRAgV9PpmvUL1X4KhokfdJU49FtRsjJzPzpwBM1VwLGmJNt9b27"
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
