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
    "3A5KWCjCPobcmcAJyHAY1oGisFyQL32VLBsSRDVMQ5iUee4diwfLG7BNtiqBRa63icbTuYorK2ov4LdeG6THT5mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTPmbXKAGyQPdCDZ8X3wkaJce1SAnLDKS4LEKUEaXswP5btjueoNuX4U4QVbox4EYBzdyzzt6GkoT7GEocsur2r",
  "key1": "5MkSefPjRMQg3ow4s94EAuHQSKHdrroynn1CvRHj13h6xmnC1QZcYfeWgZgdaxJ9gF9ser8v5AfxWhioN9KH7smX",
  "key2": "5TNFhTZxxxnvxB6woRUbZE93WHjC18pRMstFSzrCCYFHHLW4PLUdR5DnKXF24tBq3bnBDDuzysTNjefoYD1ZxNDK",
  "key3": "5qs387pH3pnLgEWGYMNEqKLDGLtRQNbrmftWz8FWZZqv4H6WVg7ZKU2rAgmWgjeryQtc99PuZHDuxtpPQ8qQQ7Sj",
  "key4": "3KZ16NGytz8WAtxtocff4J1oB27838TnZiYNCaAiGS4vGC6DvRT76jqZzia3BCrV5cwsVETQ3R32gb5c4zozTfFD",
  "key5": "fpAdMWYAVgd5raHKUGzV1DLStpiCzbQQ7XmsLS5ypstYffqoqhch3eWCxVNUVqgJMbY6wuhnwTDupFZEM2UqQLg",
  "key6": "2xnskpDozVqd6MzE55j3pV2hSrPNpS7mfGYb4nAU3SLcaAaayqYPT3yUodeZYyYrnp1fzkWBUbmimUJ4YPopJgXM",
  "key7": "2aNg5NGrXXbTWFjEpVUySJazR1Np5CxjNxqiF6Ypz4bfXAawbZHeV6oRd5cuLC9uGZ5vQnQ6Cgkxz5J5bJwPDzKy",
  "key8": "2UTq3MUd9GMwvLLk6D9t9K7szVec523SvXZsTLeZbHiD7b1KGEpGuJRvca2qfbnXGyeQ12BSu1ji2e1UJ9JWdVem",
  "key9": "gnAC8xAsmKxg1vyBUpmXSpEZXKYTA8b8D7wzwpSAdjR3aQLEQhNsnqYZPvh3oDa7wfSbvCZmwW5wNbpzSpLHHA8",
  "key10": "qTk4GxK78Q57XKpXFwbA7GZdAxWDAE3CXt2Pw4nw6aBe13vTS43dhZGJ34onQZyzwnffpX1Ush1synRDADzy5bf",
  "key11": "3W8DUkrhk6Moery9UrAhYkG98HAoCaGsCwaZo3xhWy5mB5aRLwc4HLU59DShPmyLzWzTGZmCLkW732TMWH2amRqg",
  "key12": "3QibvWESEkZ8HpUXkeS5pdzzfife6ZYu6CbwowicckERmzVQsbSnSvmuatWP9THLFUWAXsGPXHdLAjmgPpdPd8fE",
  "key13": "3QWhecXf4miXYghZcWCd8naDmjDosHSopGv4oxmAbsXttgQvHVPKff3VGKqtd7dbXwiotiMfiVzJg3jMwa3Do6SU",
  "key14": "4tDRtzvLJTT1QSPs9KVd8RE3e5kVXCMzFeJgMxHqEhsu42CRTfA91Cx6AbyJiP4XUGPwRv9LNyuLxbZnZmuFQKMo",
  "key15": "2drqf8mdtyoTZysYRbxQ4WXmdFJS67gHuLNfdpGN3HtF2us9nkcLi7wk9dbjvMPLEHdaFirXe1XtgPLJ1imte31A",
  "key16": "5gYGWBWN5cx233vTMFCjQHTvFfXkBEDJh4qerqyV3TAdBisWraqBbY9YGhYMfs8mY2ooR1FF3en3giKt1CMk1ado",
  "key17": "DNKnmkyJmgmC8o21HywX7xakBJ5it1JCJLxdkR6PQEMZJgwwTWM4YWKzLXCWMmNW8518U48zCcr8Q5Wq32T7CtK",
  "key18": "62jsx6XMJb9euDERjenaRQ6tPGj6tiMkGKJ936c1HgKJnM6miuscJuxud9bZHpKLYwS61BYABuDQwevwC8Sg3REv",
  "key19": "2TagvUVG8TsWMyZB1C2zLdnhR6V5jDmexemj1bFZ15DwBWhNAivRKuarTZMrmenEmAzQdTu9svAejNGLwmZwWtXV",
  "key20": "5DeKdS1bxbn6RApw7LdGu81NmTdP6sVogHjMdwqXDt4wLcjV4pYC3fhnwNrZ7xdJbCJbdqyTJkzWUptHJd4u62TJ",
  "key21": "2ygHPxhABRK1jCYcVuN3JVjF8BVaKEAAkjtEXHDoLPzsEJLCF498qeM77ZMFUc2uvCDobp8H2aXdwo4C4KzmXP9e",
  "key22": "5Cb3Z3MinP4RbpQCe2A2r5Rj9CoBUEhCPFSrPLDgNrCwNtgFTMbYhwJSr6BDutxURjyhyLAxpWPjktm9ecTFfWr",
  "key23": "3W4yoyautNytp5kMumsVpMxiyAU2myj7AALNYutg5a1b3DFsyWHmT41NKLZAC2Jxbtz6qtbW27rNUmY7LyC3V1M1",
  "key24": "4BqgpS6RWRzR1kS6cqVvCTTka6RA2bW6ajN6GguPUDEyZaLFpL72nGNt8v75j8joVM5DeyY2q356vsJPT6sSVHS7",
  "key25": "2K41sogkdGjnqypCFxY4hnaY2ebmYemh7M5zyd7hNoem5Pgnb1XY8qTxncjSvBtPJE7eEtzna7YVcbkZN4P5gv37",
  "key26": "3xipxV1S92MCsaJdmss4sZYCeytQdgXvkqE2xotjAjbQXuwPbWXAt7n813hBQr65LH27vkP4zwFd4UFMGv4svs8F",
  "key27": "whbjCS28dWLoMWFpbWwTx2nRkJCrNWb7yUH3gn5LYeKUp7XXEsGGi8zjcD4FExD5qS55UX3a97eDcWfoE6AEcX1",
  "key28": "46yLLpGVnizKXQbR32c5jH2mP96rDBwF6fyz49g8Xtnhx4ba9ms1sbYcsxLkQiBoURTseQ9cqREq2H4Zg9sfKvCX",
  "key29": "5sqmMEpzWgQSbX3C72fifyorevAnifyZPhVuBJ81paGox22U9dGdWjUT2udC4hJqZveLD2xxduQabepC3YAqfBz6",
  "key30": "5H6NucizjVaME5X9hHyBdNUzcyfbJ5SanwjkaWmC7VdKPJRgBUYv2qMXPwgQoEVbXGmrgoQjuHvW7pXwAtCLA47p",
  "key31": "5Mb7wwsQMrDoqay56iPzfeZzwuyP67wMYNdpnNiiQ8MZ2zt8mm212W99e9yGN75RYpD2mLzDz7EJgHjKVeVStyFQ",
  "key32": "3Gum6g11JNaijhVjjDWr8d3XDJ29EuWNSZg6DQUUhwNiYupWgbUVaZsouDKnk9sZt9LxpVvDccW8C8GhbnUib4qx",
  "key33": "3wkfJ4J9ejHzqDkFmYZgrBcRbEzEX5CmDooSgTSxC6ofuxiiER2s2tuT7cvwphENLQmaV7yssFrNxzchjc4M2662",
  "key34": "3Uan1P8UZxL2rzC8ojAMVepwRziJresakkBVMUApZMQCDsfFnoGk6Cr1tCQYNDq5xin4wVkxRY79fK7cW7UhHBAH",
  "key35": "4Vf6qqq8zdiKZTqMVuM7LGGf2bSbe3MYVjpXyULtoY6y7XQZTU518d5px7o3rAvuNcgGvPoBHnTxeVUtaSnRyDcx",
  "key36": "51yHgp5SzYM4mHjhvwMzYEFj8NoksR2u4N5HVz8wK4BYWtQBVjQUyd17AuSYZUA2tXY5Ruhwa9TAboLSAM2kr8NJ",
  "key37": "bb3AMVHjhmwuBMKHvBaPpwsaZiyZdHkhHZJs2jt5bWe2RUVm5tPfWTbE75hqcKkFRhMNVixcq2F6hiuqarDTzeN",
  "key38": "2mrWfqVSUtgtvBCqrMnDEFxKvFy1Q3izUrmxS1YhGjLkAs8LPnvqjbq2BkjHEFo4TSiayYaQ3RwiphcquFHTmxZY"
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
