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
    "96Juykguxe28h4ngqrkzqBaaeqx3mP7ESawwXvWvhTtk6NwKfDYLUGarwK9kZYefUySgixn9ooRzGJQDS77MX8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WF2KV2KGaPiQEvgo6VT3xQMh6QT7RFP7RbDoBKzNBn47UhAmkE9aeQ5S9FpaPkzHHYU5U6yuHn8Y7S6qXwenBCP",
  "key1": "51XWk9Rjd2wKhPQxmQW7Chq7nExHNv3YmhawTJbgZGtBB45RqYVaHNqMZFmzYZy27zLzkF2nQ1EPD2vCeciWG69h",
  "key2": "3sRNiEXdMthyBZXdBzBR3q2ykVGQHFamqXcM5RbWLxRDMpi3iXgqieLL67ymY5fgvQX5pBBwZbbcuGD3ULDfZ4Xe",
  "key3": "449msAJEkkF3KQKtuPp9gLnLtJCF6AkfUcBoQzaXXKQMydTQNfLZnZmehVqKkLFVjaxxijbLMnahwFfiqN2ALyxq",
  "key4": "4436x3WUouftgfmY64J8N5tyqUPmazimyBXjX9JNBWMh3chWsxsLVeMRPeLm9dMWGddVtMRz3Loz5WScofYcNX8D",
  "key5": "5rQKzHQQi4ure8uCcVuipTs6AqDjMQVDpvrs8KoyprEwYUUVTWAH9GPAKUJmsgo8rbpV75a4HHwyAtpZ8grLfrc9",
  "key6": "222u1yee5avmhtzGAqm4KZK6cX3dPjkczxDw1A14esiSUNWUkHC6YWaG4jYNp2vzqT8DV1nZo71utU5p5vE1P8n7",
  "key7": "5Troi6ar1kzG3EUhjaWKmfd949t7vsmcwoAP15eVwNkerqybnbb254N9gqJJZxDYZgAp17swkXFNphjhT1PFkM41",
  "key8": "3xsG1tcowwWQYgqSTXhZ8qxbUnZnWh8HrASskf3uRNdazaisQJ537B1koEh7QXoxbSWKrD9AkZ3BEmeDAycby1s2",
  "key9": "7PryjA1PMgSfLzaDV2joeqX4jbBa64v6ij9SxsjLrqxbs2G6fdcQGxqKKW22oXzUuJRcwovWYnSAxiRRFjzTA17",
  "key10": "2Bow1f254faeftcYWwQFoMQokA388eVqX56KWdgdWjtpY1TaUgNKyVVwAmYySWKuGu9cVKs5ZH2yso5DqKTxbsLe",
  "key11": "5DhpNAkaMB5MQKorhdtaa9V9bzmVJZmnS41rysdhhEmPzJhHYabDVpWPVFwm2UUwz9CjXTDmpy1tZ83duyX3Ng5h",
  "key12": "hmbNbDxp5vHxUK5N2Mhoa3VHZNtnV8T69AtnFDkqna3oKoRa6Hes6jhBfAwQwAB2UvTfg6hFNbiXHTYQtUndH5L",
  "key13": "4yRXDtRqXM9jsyKAHtoPcBop25a44rTnPocWb3TfqJx3hb6u1buHiYZTFX4pqfnQRad844U9F42XcALqcy6hmedK",
  "key14": "4cnhyTeGNPAAg6L3wDjjEKVDFbpRkLCNGjuESuzR2u1GuEWZ4zjkfKDn7HNpSDhnntLJUMzEf2BF4FXZT1S8eha4",
  "key15": "4GKhMGBswanrrL8hFwDhjR3fHp19x3smRyTtuW3NzHihCr8i3t9eNjr1Xsf98H537PPoxKaADZKwXuTSVs33g9kF",
  "key16": "2pJbTpTeYtW37c4SmaFW3xmt238tYksJ6fTm1UKBYE5oMGFr1xMtLxoM4hj1GacPQePU3d4zTMxMC3QyBiNbJ6d4",
  "key17": "1GVAXdtPQhHiVxYgvGfEvV5UwXfbSHmDTJNubpZLvtDDkG8YqChKXntfQJT49V6xPnYQPUqRhttmyL9c4H3vzvw",
  "key18": "4m94h4bpUP9FkCTDjmPo6EjgdDCi3GeVYuAfUZj6yH1jHZ4ja6N9EMzbwz8SLsfAAc8dnr8jWgHL3JPxSest1hDL",
  "key19": "2FQu98HgwECoQLMEYiZ5XokyF6J4E1TPSvdJHjnwMX3PvThcUKf3WSJqxSJaYQa5pzA6gCeyUBU7Kdx5cmWHYPR2",
  "key20": "JuQsAMmAWRPNHtGR9yG4EWksUkdPnpDUh3JxFww77pGk71YMZGC5vYTFTKs2pmMBW6dR7gmMMK6VK24qTS6NcpB",
  "key21": "32KMKv7w2qtLBnj5EeSVYbtXSTc9tFx4hyoBaMQjriGfNJqf3491PrJgzEFBt1TQvjDfS7Z5ifTQD4siHMwkJFE6",
  "key22": "2gRpg2LdGYARJ9PfY4w1SZAZLJ9SczpLNv79Ai3Y7MezZPXYzcVVrX9i75hzguLzzPQL6k4SfARH7uxoWJ4JMMP4",
  "key23": "4pHwt2fePKe7Psnw383DFY9EvaFZW8Z6ihYAQmZaFmxXRGviqPNR25zEe9VpdxLRcmhHFy6SQEuTNwfWacYsZ9Ef",
  "key24": "5jS2juPGT3V8RsuJFJVHq8N8JUGF4BdhdPUBHUyfd21mVyG3rfcTt8XG2AyCbURe345UZ5rhE3dRKruLW57xpH1G",
  "key25": "NCfHd38SYxBiA2ibdg8YR8zdmeVbTRgRG6H95wiE641wRTFUrMcVWY3QXKL2eVyFUSDVMqaRTV1bYmgknC3XCtR",
  "key26": "4tMSzDe2dHkHk9jiaUwZwaYmWVaHxMauu3tQ4aRiJqWsgebTxZjpYpvRFJJywGHLAb2ehSEWx6kMLE2HAwn7nWPc",
  "key27": "3KMjQVJug1vZ1TKtFK7ST8o9LX5g1nhhGyWRHACUg3onHGMYzAjQcuLDAGSk3MSmq4QbAYcqHRU9QAFzbVbiWNZF",
  "key28": "3ncYFTKLnPDp3DyiDLoztDDYzYHnoKsb5Z3hGwBsPrnZpiEgYLGbCPBkEVH94sfdE47e2bg8mSKtPyRDUr5wczZK",
  "key29": "4NnL4fHH72dCNBtyMVen8ZDHHdzwvMWpyUetC7fct3eU5n5iF7YGgSYkNJ2pPkRVypUSGXyu977N97YDi2nAFM98",
  "key30": "2aKaJFiU5w3PNKNEufCyKaynYY3eW6YNDdTwcbZkGpXSaUzLuhr6CFoiqkx82R7n6GdAoc9wRB9iWx1mRpoLD4fN",
  "key31": "3L1v3J9GoLDgTCcVuU1CDbsMUhyZQREAVfQtJQ7ybmVsdbpSrHMxuSxTuRjWjfP2uCiSbnwAsD9RLfmEWcRpeSgH",
  "key32": "47obioV9rEeoZmiBNE9GE8bDvFsPaByi1iXqvxsLva2cvHoQaUaSdibk3CZhRmfU69QHn74HjqEMr7D3SPH5Vt3z",
  "key33": "52XFNoZNTdrEDwgeBzbePwWEsm13Sm2JbnzJ7YBXBcttAKSrpAc7ask9a2u1F7KWLVVysVuB7JWHrKZkPnCAAwL7",
  "key34": "4mqKygKuitrWspPuCosHUqWUY4duPVuKnJ7GS8QVV5fNQ1Qiz8Nh2MrLvZvFpuhBsNpS5BqPhKujUkwW8yzLo5JK",
  "key35": "3qu6tKsZtFzBQfWXf8YWZ4wVace2YPY4GnNLRtPAWhjc75Ve82F3A36HBM4YwRbivBTFQmN32VBmgjtUmt4MXjyK",
  "key36": "3RRHXRRBuBMgxiCTmcrvXY6HEHciVHKWqkvdCyuaubqZC8RPDgN4cUz873o6tXpd4Qh7JzEkY9E9k1w9KU5b4vpp",
  "key37": "65cKNeJzazkHQpmS9HLAEf1yNfQipu5FcnF6vVc1Lvsvtv6kQcp7Por4k2V8dNLNBufuTzCPnSuSDYZ1XseN5pDs"
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
