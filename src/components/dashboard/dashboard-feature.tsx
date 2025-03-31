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
    "5cxXLDutYNr1Q3sFdjd9apdqZ9H8WsPvBdbtsK1pQ3ugXWbjjvQLp7r9t98UG5rjXe4zLpeF6ZminACEnRfbeUNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMJWuuH57dfY3EdRPVRrsSeHtghwE3dBhqDqaoep3MDShbWu5VLiRvhWZSq6LDkNNxipFm8tyxtKuqgHbrqC3Rq",
  "key1": "4dJhfRxWsLunRnwfZZSpX6M6gJ9a9xa5Z8ijSpP4fMnaawxWuZie1YWJP8jehGo7spGNjHSsehEyqRTTLiRvFzEY",
  "key2": "2TMfE7kjGLpvQNf1Cm4EE17mNkJBkHsciUawzr1W3u3GXqNrGp49uspDMpFDCusbS3wQvZELuNDpjWpe8QmGjmh1",
  "key3": "sP8VMyiLeQTQa4tiMD8WiB7osgeZWnkYFxtpR31qsY2XosLt8XbiQh376ZWRQ42F8xPSmaVxBri5qE89hoYK2D6",
  "key4": "4fDi5wntZjqzTB5r2gJfyD75gC8qsQxHiWgJq7SMar4M6qpyRYQtsAud1BwtjnzGqtsUy3qWaX9NjkeMHSDm5Frq",
  "key5": "3iANuWzCnDrymBLx41mqUEm4Lzt8cXNHEekPBtwJ95nHTQ1mFambgGPfzkeKj8hSShuyfLuQ1PFLtrcFM2FC2aF9",
  "key6": "4H3oBk32Z828wfpWjJ1xMSy9R8vJnXv4w7mQbCjYVjiCLPuAYAyrypDQ9PERweZAQzmWA8oQjZCv2XisgX4fCYDT",
  "key7": "3ehv3V7s7MCScCpTi25ceBmXyUya6BrLMxhMMnMno9SsvqnNYY2dy5DLpbdQYxX1CBX6CwFxut9xMSAySDnwnRYL",
  "key8": "FMjx9N49rrF69VXM7xn41QaEpLJiKgU9hBMdyp8bwfGAisAzrbGJBLG636Jg31zvX4uYrdgdLPbJqcAmuupmFWs",
  "key9": "4tkbJ6LW8rkhccmryFskihk6ToCZjGwAmryqd4CtRa4E9qmTPANijVWr3FREAQa1WuJb6JqgfaAFUgnZmzdGcANt",
  "key10": "TMtUPwjU5kdpPcoY3YbiQ4Mj9zFHPCEFLFLrdNFEkAdQ1Ua2RqnRVyMnRXPX8DGXMyf96FS92mTekD2LeNzYeb1",
  "key11": "4hG8qB4TXbh1s6qFdymVaYMCUNapZsVB7xrXVfcNhB4yzE8LkGU8HEDrN9SaY6Y1b2KSscYAVezyLaBcij7NxFfy",
  "key12": "4WabqNTrYA5u3MP9Ttppsdrza6QhWJThNXwQYB7westWDgP9WpQUsXfcRBr2wcu91nd7KNc8ncmJUh8F6u8T4jFU",
  "key13": "3n3D7T9Hh5Us37n3xzeRDLntFpiqVTNWYWxVBrBazn27BCx7RG9Bn8cT8JtuRF1mALQVpkhazPe9M5sAwWT2a1Mc",
  "key14": "5vFWdQtzQ3ZY3rrtb7fgXj4m5aUZF8wuP9YHWZdFzJebTfsZYdfW1xUykk7n5SscbWT2wSdq28iZc9mjMf9QZ8zh",
  "key15": "3YpLwnivHxqT9JqcPpZ6Mt5Pxm1giC4czmNYBbNftoFwQTACiucuzwPETEkAEpd7sQf7NPD73m5AaYQMPG2KUNQn",
  "key16": "52nzyFw89x29ZQxrY148cEmdsHgJWSPuod2bicHm6UXh2ajhCjB9Wp2PBsdjG497UJ9LGikfxsc5DqPgdLkccqRw",
  "key17": "a3bCEkW5dNyyH8h9cVpkJhmnchmfBaDGCEQuCAUJgR2yUXRG5bv2MExW6KKpbMaAUYP4JywXSUhTQmMbwnKm96c",
  "key18": "57cj9EFk4FdxWzLeK2LnT4TXsHjH2StFyZ6xAMUd6gjKVV8dPHv5nVyFWGozEwCCRnHemdniVEeRwwxzXhqyQCSt",
  "key19": "2RpyjLuUU4vVLnGfvhipcVVxn75K3i7M2YfU3CCtJXh3PprmbLeVPBJDsYnMJEgwzPSkvvtvbqfCCYwBKQwkTTvw",
  "key20": "63yjwNh8gzivuTXDyjCmjm7yYQqCjuz3HZksb2HqvMhJk5xvBHUGsBGXhKodKJvBUPND5MV3RtTcapFhRqZ2PC6W",
  "key21": "48oFpc65zYqskkzXZuratZHTHDCceX8Dj7yMJQn7j9YtnSrcPZe7rdrAHQ1DuTwAjPy5qGp7LZ8SLbsXm9UyQUsw",
  "key22": "5VQKfW71ZF9Z5KRFXf6pGWrCL8f6PupqSRRED5ECYzj5mfPvoyWhKfFyNkXELjJiRzCWDSoEUua2wCKYrmowoHc8",
  "key23": "2jBQHTHT3VFJDB66Ghf5W6JtBWenetjRYzLekff22bBKkdiRzoCasALvNunUbkXrv1YZX2qAxJ5ESzR7YgCpGJYY",
  "key24": "5QCiKWMtpnaFHUHk4SNukBnU3FBAM9ToP1gt1zTFNeKQciza7sjyg5Z6MfLzYUAmfwS8JiExDhAT3XzBe4q7tULm",
  "key25": "3CHGKBr2mb7BnaKxzit4rTtpmTNPE8H31JNAFkLJW8ZpjzRbWcTT1QUr2r7cPBbnH2cFTfFNAcNgiq5epQiaqnn3",
  "key26": "28HhqQ9FtuWvgJDXicbXKne8u8MQ8e6agLb7V7GpBbrAoDLSMBw9AkimXTUSL3dPuh43rvjrNrPappsLePmjiWc8",
  "key27": "2BHoNhL8kGy8RUA4vt2gJHjQ4nz5opx3J3oiWdNCDn4fZ8jPUkANuvBNUKLreXGqDRdYUiqaGHSsCmnBUvqC52Yn",
  "key28": "3gx4ATY5Rfxu1Wy6eoH5bFCNEHYHR52MQDP7zLA8CF9U5oFdNKUnTVxqba6b7bRUYdad85JsfR7t8NEwnfp77Eoc",
  "key29": "3zU24TNh4qhTb5xkTYvrrvP92Asm84a4tymmBBghuLvV7FYGMioNKga6mp6hB1xNtTduhrdKY9Cby1iVDzb4LxUW",
  "key30": "53mJAz2uZh358JpoRUo7ytBzX5FYqUdWZqWaS7VixyAjbGqva5gpTjKYBN3SaCqFERQ4xZ79oM1pWCUfVSCePNCj",
  "key31": "3V687fiK94hzvRg8dbdsibVLbk6u3TyKkuRdLdtbLZ1K9kDp5zoRvzFXWzJLEL51rUbd5N5CKRNNT9rcHs8daqR5",
  "key32": "PBvERiuo9MWjKYyx6KiGnNb9bFnWrzud68nQ5gn1pirLX41SeJkeHUzC6VmKXLJQ4YNcZ4FS82ZSobN6FwG6XQE",
  "key33": "64SfFaggK4pWano8GhfDrtoW7PCXPG9Ghdv27dYu87WrHky45ScAzW3grhUYM1Tkf3WmqNJX1v3K4tCsejfrHhxw",
  "key34": "2LaqdVKVRXvNm47m8zQ4ubaWwuXhPyvjNWvFME8GGsnVyjUt9xynhYGaMZj7BheFhU4H7hSj9N6xfweJGerbeEjP",
  "key35": "2vhxC9A4Qv72e3SQGQdvoFykUKkbPjBSD5DF911t2fzvMces7JuvNSTDULt4kE29xdr1pvwtZkkxg9nqRsVBxLci",
  "key36": "5EQkxPGpHLGJmR6fFw6BNtKBoFFqMLn6F9idhjAksvjhpT2aMyTu7e7nqNWLzuuYrXvvptw5U6mNb893zCS8dHNV",
  "key37": "5zX6Xww2FpHTSyVEfb8s9BE2xQVPgV4HGFh9WawXZL3EaAxt4nEbQ4m3FNiCxJswiXFgufmh8BeTLCrLJQ6XKwHR",
  "key38": "3Cz5mt38RbpusTV3RjqTwtzRjfhHNszmophszsi9Fqhtzhzse8EvADEXeHBHMJdHb3rMZxC5qfZwWXzst3NZUp8d",
  "key39": "5VghpjKXSoCcJzFXoRmBvqyzbYQ2x8KJrVNww57TS6eAUdFh5wPdMNLzhi6UDrJiu2E4ziyg9wmqWdn2UwQJ3RBn",
  "key40": "5bW6GxdYe2EtcGrnt8pvUjmz9jVdjRg3QZYdxcvLaSJJwVAKScbLBdejbT3dRAX1jCcfV5QyrdNPAXTYUsa4KPTc",
  "key41": "BJu58NjqJ6ZN8YEwj3w7rRf2m41MWkifdib3K8dkvLW8VB6DVZptucSsX1p6GpZfurHXmHozKkjAbwh4iCsVUd9",
  "key42": "5vvw3cxKhvgCcN2xeAJiqhRDbVCua17Zr9JrgL1BsyFspk2VrD8qSvrojyevNFveQ9ygftx65HLXFaiwq7yy9AS5",
  "key43": "5uAYKJS3mdYmWGR1SMBGTeAieqZs8LfvsXQKSe5k1nFF3NaHPeuwXZB1gkBHRr6Nc5aKDgXvzbCYgdWR3UzCE8bt"
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
