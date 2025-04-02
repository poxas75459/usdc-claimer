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
    "wi3vASL9Wb5ERy9tRaGHktbmLWMf3Tyj4wFBR3dopiqBB4frYHDBrpDo48XKueJ65jGHrafQ6Mnc5aT8wpeCryh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfrNrE7a3PQvoU8i6F9UPcfPuNyvtNQ4DSDh2i9sRqn8EVvRfQdzQXyaePvyAJhe3rcjxd2oV8vpCtdtdc6xDve",
  "key1": "5HjTwayWe8hzBYdKBDqY8j1nrMbAhcwvi4Sc8tWBLz4sVqmjbVPXdGCgVaqNidS4J5LNZpjRBMkxSe9UfPAD8Bdu",
  "key2": "3iCb4meXwJYKBTCubfX3PvZCjSmdnydr9g12cksefjaPDSTRyRLYoFzS3t7ryo77ZYCUu1kPBFDvsQEAth9n9B28",
  "key3": "2HaKuPEYLauczTNSAf3BhydF88QFvWKP7qFj6kz13VjK4HaRJETvPb3MDB2nUPBtRLXHdmbgDRwotQtELtQgPAS",
  "key4": "5P7SBXXENKhnrMNX9NNRp8QWByCAJfvQTLKN3utHFuZj5UfT2yqkMBWcrELCNyu9irSPaB4L19bHqzQJvWSB3nsF",
  "key5": "4U7wJnTveaj3i5q5yy8AWZ6esFNTCapoo5MwwbMZWg72F5a4JthZJBcLtRVREvRz8QTS3sdissKZdWPJRs3STPFG",
  "key6": "29mMn4okFdbkPo9TJXLkvuV7yXiPL6yVPyCFAZ6KkwXLYeKMYjxZnW67xRgEHBJQef6oJMfnh5fKDJ9cvoUgUrYG",
  "key7": "4JzGkAudvVcs8rFVfkWNYXmArXgQnCue1ivoi5jhBP4yPks6zn5gT3Sjxt9KhsgMyZhrNVQpwMvHJ6gMSUSwhNyv",
  "key8": "3RJLXjkAyNEbzXFhC5qYT7FZJ3sx7xYXHjNj65YH15Gk7coQMkQZY9YgxfKZ5R8G5LZoBUHYzbwUxE9kfjs2HU3J",
  "key9": "3DTDxrd5NtgNNgib3CQYzwDWPwwm4DptmkcViC9ucASgecZsja3hyyvj8BXtbZXfogQBvzLBvsoXs8hugtH7ChzL",
  "key10": "3o5yf2Mm3jZwPgExjkMKCotiMcBy2CubMGtzCh6XMGZ1Rn58dgQ23JT1vxQT4zmD3AuXkwsptQPph2dmw4hRVstj",
  "key11": "52M3mmDxmDyTFcxPhxmJ6WM4xb1TcQm4YquU6zZAW7v2kuGU7CP8YsV2KS8h7ZWmvQcAjmCiNWZB9tysyMsWMVVj",
  "key12": "3womToWVpbZzcpFCCLYB9cA8ud7u77CsshgkGrSbN5vhpJvVyAvLrgRSu4arWHHXziECpEye86Xp6gVd3wwxB7B1",
  "key13": "41jysG866vGnF26kq4UAQUA2ptHRLum6GYDRn7RTgRb1pgCCywMancY9McmtMAv5DsPjVBiumtkgBBBuEWUcqjfG",
  "key14": "PHwxHALcSR93aqWavBvkKDDgfUnfSkwJWSbQoaDf17S1hFnU5dJc5PCTt2Sgzdd3Mus7K441s4ieapF8Ab6Cx9N",
  "key15": "47p4fkMYxQnjhKP1c4n7ipyrHVwwJp7cCq3QrtaMKUbhDfpLrVCKEyTz5zK8T5TwyH6gALWm29qMV61L5dgDdkKS",
  "key16": "63CWgkjw8UyJwA8xHuPcFuCfDLRxsqw5Mpn7ZZ6hidwcPi19Tj8izgHgupq9PNUN9jArrxHwPQgMjmjoq5mdfnYT",
  "key17": "2gbdvQkWDTVASmKjHSvZmrLPyXCFpUxpCvsqR62VCNcnyZp87MVPKgaejzyFFh22fbArbxzbnbRDJ2VLM1zUkuQM",
  "key18": "2X7YYauzef23FH7BNC2keZSFzMZ3LPySq8iGZEo3p1817CxTTGyTufMC2MoY3yTWcXTjKKGhq7eBSKvyKTa3wjZE",
  "key19": "31i6m6FxtEyPTHET67eif7S69hYsnvbYP2nR3y8W1xLLm9boUHKXrxzweNHDPohzq5156McF3VMQSo3hy2ktdN67",
  "key20": "4dU9JWMmqoD4JychCks55uU2C3SoYwF2A5xJfiCi6LbqeKh6WDBtf73yS4EiMUwf86s84YztEy1cWMLf5P6JY25C",
  "key21": "5kqeaCwXXPaYPyNcgTodXy77m5UDHRrjEo4KH41798KgJUVXZKSaSfNkvdRrgDKrm1sbES3rJbtGGPVZmYgs7kQ8",
  "key22": "y4nioY5CUTPte1nug3scDumRDUZ3ugRxUfNpp1crXrk8wMkdBGeGPnY8Qi6vKBmjzCWZ6eLfKD4XpKi9feAXCY5",
  "key23": "42nc4V5h4A9aikV1Mg9u3WPTUCoZmmbbSmVhxtUGiGUb8FxMfA8Y3iuKHNjRKWv8f1S1BJUUfcmoJsi6J7bWXsif",
  "key24": "5SCzuDJ7nQ7gtjcMqR9nPARQpt9oYWSG6qKJq4fHqShZmHUwAmk44jpjqijyfiAjG5BBjJrJZx1P3xM3SMJMp9xY",
  "key25": "29kvK1kuYoxnm4uKZkRf7rD5vVhSDbXT61LVdH1EK1NTwKKdLMgT4bhTFbJyPhtnCK7xUWYzT3SnqJG4mHsD2Pbk",
  "key26": "5kwRVhe5Ei6Q2xYQAtzL2myUS2Zmexm9Z2gmpAna638H6sKbQGGFpJsQ9KpPYncJtHm9PXgj5ezMAGFaV69y4v6b",
  "key27": "3vFoGqCeMQvaLY43RfVSVtfZMsh7ZCdDymNUFeZE3QffYntJYdH1aC9pGkmibK5LjXZZtMMey3pmj6v2w6SzsMgL",
  "key28": "NuaASGdFHgzK4TGdTq9n4ESJJuxmPvERAzx8p9iyv3Qoj9awF78QWpCskAa7aYjr8URoX5ChAMUB3FHFs8kHoUJ",
  "key29": "4gkWFWepkXDZ2XqdsZNZ9s4RL8bW9QtLwCtUyF2ZsqeAdkhQQZ8LYnBgJyYokv8pjJgeTzsCiYQH8UURmATxg6Wy",
  "key30": "5ajL4avxksdUnZkNLxCgg3vmZQhVtn8Jj7bSzxpTSALuM8Xe9TSxsTyrBJoxQSvtYN6Km4a5MMqCGeuTZyneCREf",
  "key31": "2duuYfiwyVmQ2tGXhoQt9YLdxEnYPoRnBRJtUyAXqZeHjpkUoVPhKRRBQkxuhHXmMn4MM2tGhonG8toJakehjwEt",
  "key32": "4Hje5ked2XJVFJLEcshumXjyTmxwp4ApwYRmZke1ALYWnf7xFSm25y2SCfDZGi89KQ5HcP1XbhFao9YSfZN5Pzxd",
  "key33": "26cVBpRrDDwQnRNxtsx8PBPWD6PULDa4vUpQkiYiUqiJ9i7sujd63jydVn4jSvEFvSzRGcf8MrXfJ9LB9GEYbgBv",
  "key34": "2i4Y5yYq9FABtw6ZJTpd646yCNcfQvdWxLg4gGwM3dLx9Fb58r1bNq87SqQ3Y2s2Y4zKMyWZ6LurEcHHpBBgtXHR"
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
