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
    "wnG4GG7yftNjkrHDZ3rEKdt4b8niYxwg2qazseJoxBxCpjXNTcBYAU3NGUJubqfwodArPxUkYvYC5fG3KpQPZLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqH15Zi38kTfbYWpxStBs2QVj67gjH35F3LknMY9FUZgjonefvX5yRBqoHVhjumcuDMee9QhcMF9pDZxrVmW1gh",
  "key1": "5UsoK8Dy6HvAUNB1dzCcDpLD3dvt5GQ2D15w3L35kdmdBiWximwuARQHKFQrsE3oGxMpjgbRCgGmJWvsddShikYk",
  "key2": "2ykiPxwhZNkNZ5nFwmfd4NU4nYe3SwDSmx91wtkhaBqypDuAfiy5dcn8D92eZiDdUVfoDav2JdZoDjvdbmiZ9Nnd",
  "key3": "2qj7iL1douEyggebXxAAn4hwyf8T5BiMoz1YAUW3yYnmt5HWCpf9P4JgVNfQGVLozERsL1daPLW1E4zN1uUxziJc",
  "key4": "kMfYdenRAPx39yYcUYqL3mAYy2do9YqNX4fH2gWnFJo6LjCisEj1CGmyxRYDmbnrbKFHzQyh8JcQ37e4mpcCMbk",
  "key5": "5Yciw1wjoWHXztnLHtrzfYBFwnKPq15YFr82nTFDtSLHT45WZEaEMWsKNnTbFRsr2awixKN3ckdJX6pbqVa6LVVX",
  "key6": "2bpkt39AeL3RV6W9K5wJ7SD8T92RsT5f6bKmP9WJjL7KJzL1vPyxMSJMjvZGFothL7nKMP5wFfgTc6BBsiizeGLj",
  "key7": "qC56RQK1ppzoQRkqgFNUXTgoXVBEqy2vuhKth5m2FYYjovtoDfd1CZunJ44E9YZvk6cRbcb3gJFF45M1ArhPNr4",
  "key8": "tt5crJfR6RKYvV1t2L7QAGzWbJxM1K8ZSvq1hQq6x4g88x5VznAiC2ZEEfjEEdU7wNbB47MNNczuMJzixKrH23P",
  "key9": "5tYbWJHuLPY78DytFzAHiN4Q5vAjxPMFdBuuu2updt2ELRM2ScdUWzFp7VcfHngRzGvktmEMj8Y6TXjU3acryd5N",
  "key10": "4xCqhRoyEgx95aeYJQoJPiEevDNPVpNaJQDQ4AkTbHHv8fPHerJcvjT6171iYubrVyHJM2F3ZKv4Csnyo9AcRQcd",
  "key11": "5cAf3RcYqahPY87ZqyNj9vmV2NaFbzt85MKDgPxYqao7QW6yuAKcXWaHxjoTiqtTJmYo55kKMaXNZncRJqzB4Kac",
  "key12": "gr6Y2yAmt25HuBuvphStubXftHATyKWYhvSSwuUVZ9dK9zBPx95fz9btTHyR3GeCjyuz88c1g1Jcvu37kj33rQW",
  "key13": "3J6rBnFm5wKTU93AoYb2Nv2FjsXdWndsb73FCekPrNaPDzutt1KS1WN7vb8ag4fqpBzRSkukp2diHc2UbiR1Y6f1",
  "key14": "65vWGDkEN8UVQ6cPSjJdreK6xbKRTz8Ei6r54u1B69aws1LjNMGNJddoZEvLoNgjxpnoEgqAgd2Jb25aa2BGDTPB",
  "key15": "32dJs16UADE19Q9nZZembs6mY7XYu6Na9vhJp9JmUC5m9GAuNxZHufxeL7BAboti1sxeQdBKVHmt8GVfEBrCUUiB",
  "key16": "3XnCtrY18MX2K6Y5UtetMMLoyic2VgUivLCydqF7SgYJvJNLDStwx64Tgsu3USNC4vjjBVTUi4hYocbwcQmQhfiJ",
  "key17": "5P5RAaJgGR5GMDf8VikH3E9C5pb9WL8Hexdp7Cz53EoMyeKUGyJnD1djgekEwpwtYXNXChKQCaeyZGgC2jRVz4oe",
  "key18": "U3UB3jEk98KP6JGerFPJcdU6rQUTyCtQreLuz6L2sRUYyfScaEuHYgUoBFs1YbAPVbzmaP7dj7MWdwUzqd1KU8M",
  "key19": "4MEqx7LNw63zwKYpkhuPZGch8oEiKi8ec1jydfQvWxNdhnNnE3XV39dVAL9CCzV7NNSe1tejup2QNjpTc9QpnxYL",
  "key20": "2b15D6mwbMsLZF3ZsqkFKiXGZcpCtmZgJnrYxiAhQfjsZvAKaGwb7garKRF2ixdqKKszoyxkhmfvdBEgLw4iQKQu",
  "key21": "3ZNDtovQZpDxHzhwyQL86M2AqHmHbskEzyduJF7NWTYzJc6WzykqGYz2QggfekxuhFscHi5Lfzo6rYdSjPtZEZix",
  "key22": "5rLFnn6WKsCuMAnsz1NWik1PXQn2RRs3tVZXbZ9PGRZMZKrezQJYCrroiLRUiK2vw8kYaW88DMaKgoyufqLbhSRW",
  "key23": "rbu43gYAoGiLVJEB5WzZPeNC6d4irNJ8dvZZevc67bW5WwBgrk7qsD6AVWjSMLyAHtZySiud5Gmd1TMmmUzUVKj",
  "key24": "XXT4xrPsuNUythdfccg3uBGaa9BKmk6HSREB9qqi232Ese29APbihiS7wH82fQXw63MdGfEMBNZmX2dRdqfxMDT",
  "key25": "b2ef3h7MLchHQmJwJk2E9z2fkYkb7xjyGTHgjFZDjyTPfw8M8LiDaE3ckd4ZYgKjEmDfdpuL6fVavTCHi1rQKwU",
  "key26": "3BjgWL63kTpapfH4Ne72V3vghCFCizqJK5YAfQ1sFyeaDCe8Pqr67WHAqXukmv8Bg4CZbZKVNCSbj1ibiND46aF7",
  "key27": "3Ru9cuKC1Ctg6g1AqNwVGxaQBiwuntCZ69ernRxmaPkhaKqPft3jgJzDPvYrRSUac8Cx7unHGoodKxGwS5fMapxi",
  "key28": "5jrd1DFHqRLtBW43U8XCmm8fMr7J9WM6awCPqPgwvQdbWgF9QkLyaTFbqgQZDV6zjdDWVswnb9GpPLKsXxhM1xiD",
  "key29": "tjeXUtjR9LbALsKbW2RVuELAv3E1HJCEow6WPpfGVxToanZYPorRxyYwhqUZ5zdotg2NZHjLXmGouaXZnFysFYJ",
  "key30": "5kdmg1cz5XvSjmh6KS1hENBzuo4jY53b1W2e8oPGe9fxo7XFoC8VNxShsYittHbkpWEcS1LDYqL5AXb1PbCYJ8Kd",
  "key31": "2iBMQKBZdhjGqmZFfCP189bGge79fXzAUY62g7mTwSsFLPhDAkAweystByNwZ6yro6AFgXcqy7xvQqgxpXRYB8bk",
  "key32": "2fvSmtXdHFxqX2rtw7271r9U693xdMtkqAs4QnYkv3xSjNdLu64AV3KYe9SXkZmC5aLk9ou2kiF4tuSt3ezeB2vp",
  "key33": "3jTipN2JiVJgK47h9odsNRGiGzwUUQ6bKjXGErfzqbU6tyjTo81ntEiaVK25dw1Agy4ZPX1G1MsESVLuCknUZ9wm",
  "key34": "781rz6xG7KVtYxCj5kmrT6TeZjkgn9Aw3g3hoeBdv3z8mbZkxzWgP8mg2hQ3GvJLUSwaxGY9vybhpe96aJ3MiXa",
  "key35": "5Di6JMy6hTeUKEtwbFNkfEb4A42xJziryZr3zxJ7UQTYwGs9Wrba33kXW2G6mtZfCG67qctaBoeT51JJRTDP3H11",
  "key36": "2hkSjMiDevJB1ps3AcXkUQFxtkUEsT5iJ1GR947mjqkrxqLtTagtmdDtxLkbYVjo7dv2q2AGf2oLNHHw8ewxRtQX",
  "key37": "2EujMzt9oFeqLK399R5XHxzpAKNuSKtwh4wy79qr3MU78zMK9SqGadg46FXTZwbsZFSE54kNb8QRbq9ZPV7byzB2",
  "key38": "U9mN52fTemG3TbvwAhP1fYvsQZyo97MEwPycLDNmEPJnBNmVAzVNtUD9CiqnYPmhn83qes2JEHXFivVJTwd5j9q",
  "key39": "4ZdWVbiUm5kWBNwL8S2svBf2A289EmVg6yLUpTJA3dtBysUFXB8VcTkTfwNQTMjqJbfghVPr4S5G9Ya9FWcWKNqi",
  "key40": "qdUjeq267vdJrqF3DQFis2vo7mSvaNz8A71QotoKY6Qq3c1XxJRghjG2BRvKni5jHcmWKNNNmNvHQKvnDoqavGe"
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
