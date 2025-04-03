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
    "5Zka3S1T58djWKSYi8B6osEx3mbZpN4yRqDYKKNi45VcSooZQAUekbmiECii4ZQ3yUTzMoF67W2seYt2GovM4fi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Gj3pTdcXdNzERmg4gN2sDTwC8Vsnhyz3UH63RQY1kEz7oKnsf4zA2T9433oFQS9CiShDzryApiBnx9TLm84iPM",
  "key1": "JifVuywfhb1WXp2gtEeU2bq3KfZX3y6yXKvnZTMKtoBrAuBrZK5NR3TV9e5KmDoYAQ3PzVUJdBH7eT8CYcGDpcH",
  "key2": "2Y6EtC4FCk6yBoA4R5Z65yp4cJvejCsi9kKS9i91HU89C3gMAJ7aFe5HV4ETPPcT27atQ2oYAGr5Xf4KyHiMD8Dw",
  "key3": "iJG9BwUiiEkcSofRxymVCh4F9E6ZvFaEu6JadDCQErYLgvbVq8D2fLCCvz5dULc5J1e82Yv7FLoNKYTK23aqjBH",
  "key4": "Ym2D1CJDK7jmepB1aGK2EPX4yCZMD1an2A6rFgCVLMvbEyyjQZzU9emoWDdh8bDNLJnPaj5wDNT3TGtA5TPb4rE",
  "key5": "61Y2R6GBMuDdeRQYCdwcsiBbLv1J3eQEFY4anBg1nMdpALu83Rper3bj6TQUU4xahzP5gPoKha8N4CsUxBnsHe9V",
  "key6": "44vAouykvc7Kqw1w4oWGR1mcweL4LGqtWprYqSZ5keiiHFgQx4W64UTeMNzhcFtMd98wTMkBDq7Wjnu2yD3XYjmm",
  "key7": "3yETLuqJVsYsrYSUV9BnwxGQR9tRWuHdNq39rsU6F8bLqWfYmMetRDtdmaYc1MTMaXJpQiiUUX97UQYsXdWieeUn",
  "key8": "67LXLXX4tXkYyGdfQ6ZVBjGXt9zrPvGw5RYd7mFQ7fBzo2WkTwMbwN8Udn6Rn3Wz8v6aFPuda6Pjn2EXF6ZqoCQ7",
  "key9": "639718ywvN2wwvDBxRUBKJjFW2eX5CPKoUqECFhMam9WgRbdBpmz1pfDYHVficVBk1Yd5xXadMJeWAFNCa1anWGn",
  "key10": "3dLoisfzy8bGnkQ5QASuLH68kvFs422JYk9fMqkAJ6JMxcTxcohq655HU5sEQfDseSGQ2i6SD6gZwfvrskLjzyGX",
  "key11": "31KTzvMs4QvdASgvVF3rX47FsXxwhBpMJkLLRXeYUzLBwGiLaXEvYkpicyhrPLigu3fsRA4RQVrXVcpLoY7zCFZn",
  "key12": "2qhP9RFRQXmMZAEg5nPig1FWbLjb1ottdVfQqUefwrynLFJYq7oa94a91jHRuTE4FRGcYkgnahibk8XmczScGmZj",
  "key13": "3rfPBKkoMPMSonqqh2qRwnxgvHD6dQbyEkRMFxbAYunYq9bhmZVffJdzMZqiD2HBe3FXnyErMj5VELJSjjRzq9WM",
  "key14": "2pzDigJiAFuXpjQXfeEZ494omGzsuXNhkcdkPeJhrW91632WK1Wp5xPrrmTLu6XdMuqV5Gz42N8PxDRPb9utHofM",
  "key15": "5sBYZiKW6ypf8YWMd7NVBwZy5vbGqMap3umPXJZGDVMU2utWGtnkzkWRUHqp7i3o8kWj1CDTNWBw3kTw2GfXvGb5",
  "key16": "cCBFoQMCNpB5rhHeYqD1K1pHxGoas9mugNW5zBC49Hek2Z5d4TzfT3aeYxkCcsVb8nw8GzcT9rnYpxiS8gN24zX",
  "key17": "4vvdqFpem4kfHaXUnXpDvgUxCyHdHM7SU5Qit9f3eV8QEE4hwMbUdPuH1wCxCVMW2Mhr8XuE61zxB1Wb6Myjho1a",
  "key18": "3QCkF35eYY32kFJFHNhPaVYAP8gf1Fq6D1L8sUHpsJKLSPWCFWm61qd65xBA6C38fgdm7AeWPJzyie9ZHVw28YPs",
  "key19": "owot2RtH3gHHj3QZsur6dfaFNF9wa8x7EJDdhzWgxkwtvbD7VogdtZhLYw26iXkEAErvYToHaN5vCjQUc2yKwrh",
  "key20": "4fxdecaw9tATNi8yDnMhJAB6Nsdmhx4kNDcPNKnZWZ37PwLhrgRMqpnh5VF7B3dro38BNBRgaVCWtfRKqpCsAu5P",
  "key21": "3BVeyBsSCLTTPpbJqe27T5wwBeudZko4Ju6pTFHRNuP9ribymcypNW3G7oEyBCaXnFsCzhgYrg3ztdp1VocMHGoS",
  "key22": "3Qxft7PKLruiY6VHzLNk8Z8edxYZxvSzpF2HZS7yuTP1onFSTYqqrU7GwDQCqi6k977dFFRwqeCe4Cv9uLv4C4fN",
  "key23": "5s5PaYpi4GyrqQsR72u1VZRGEYxQPXn8mxic9qKvw4PGNPxydFPqH1E6jz8VNsRqsrzgXeHYzBwmaoU948ePcvFS",
  "key24": "56E4UC4BpepN8UhhMXHoFCEXCzajNrHyAD7PjXrASSL8T7boEYdnBXdR2xusTnbfaDzub86UeZnHGLtYQXjiRKba",
  "key25": "4VpWsHbBXFiPu8V4V5BTa7nUc78ixJGhoUgpXShZuNKJoP83GH4vruj2SwA3cfTtRfqPqrdd4KDNZZdvH4cvvCDb",
  "key26": "3bucamdbH6fGxtG1Mi2UpfUQu74Q5DzstFnzwKyoUdcgSc3AFm7uqTEfySkmNa8S9quvafX484Jq3CuUGYQVqUn4",
  "key27": "2FWLCtYtTQpSaBjtAk1RrurWmrQyKVErYBetQ2rUcXPtWyhVPvpeZj5Z3YLYCFXN4fnKBaCuoJ9uGgpGJGEabvkA",
  "key28": "3VfjcbkykEQqqYGMNHPbpc28sd9ZgNjsYrszV3wYNMGGW1HJU1k2QpbGhzinoHGkunXjJgyRrwkn2Ru3kSemax4s",
  "key29": "2p3dNKucE2dhGz86UWbNRKG2nw7yjPpf2xXDfmyuDkHKKncC1ZrBySDiJNQBAMorALY5R6HzEQkuaysrVYmXa6cr",
  "key30": "4SPRJgU3MahK8yanFFHcQ3jTB9fjnRLEv3Nr26MHwoXib4sXn7dxtdLrj3zQpenB5qf6xccnRJtNW5557h1XmwtP",
  "key31": "5cTz1batRVyEBWeuE3mAbf8gXvawbmHUjAcF1TardbB8ZiDxUowN5bXb4ML5bu1CVL11kj9UQYv36ppJD5xHorKn",
  "key32": "3HADj5j6UAcBFsLY3iBpSg1tVraLBBkUhPEC8p1Hi1WiPG6fRyGMAguPbi1tP4gJj2YvbSNgoyyRvPHA2s18Wv5A"
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
