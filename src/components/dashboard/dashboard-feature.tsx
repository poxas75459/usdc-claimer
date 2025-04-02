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
    "5gtXEADT3v8FzwhWXtsqxGvYe44tSxDMwXj7xnWnk39p92wZX75nTgHiScxX1Zzm12aaNiKeXmRKLKr1XkKWsj1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMTQeiXD1ozTvrJacYfpPsUDsoif8jSDTuNKAbbzDE77LYFDwtRAGFFg8541hhFZQ6Y7U4E2jk214GpEcPU4GjX",
  "key1": "29z4botz7Xa6BrvwpuPerRXsKAvUGQ8FGMrdfnKpr7KmWqSiQW1FFWa7sRs8V7MyQtWgR7U3eDDzmYE7xcjrMJeR",
  "key2": "3wVXCCBZR1x2etEX19sCDFTZJU3pj5bYRbarzBfxeikcbcb2QWPhGfXo1E6G9Z7o8qasXsTgfGaW4gd2G6zBXGGo",
  "key3": "3c4aLSzdZSLUG3znFdqfbjU7vPJmNMHdRaKFBGLHdqRZD3oYncMQLc6QrWjeZLWx9Q3HoCoMaChzpSqmgNMqZubA",
  "key4": "344qn6xdFqVXVN7MmJ1ha3TrstBaS6VNJn6gXYPEGWhCN7wyd5VpBkrN6SgVff1VwDYx4d1JjfQ8nQ4ACZyX6c9A",
  "key5": "3U3X41GVZeTCYVQcDEVzqKVVGEuSoTBbumv9gNoGLES9jmxSfJWhrShN7oMGijk7Wok6TXJeR6Xhn26fgWSehEoX",
  "key6": "9pVygXJJrTTMGhLt1PyZd4L7r3W4hTKRL2nMCSCgTrfMmHy9m13wcK69bu9vChA9EEaFPTaMoW57ZcY1wpCKGTE",
  "key7": "2hjJDx493Wm14KympcF7SFsKJfRvscJMALxZ1khndtk5mgUX1xejccjUwfVMbXPr1AV55q691Weh8kYfgQmXvW2V",
  "key8": "35dd1Uz8dT8wtaaUQFsthDfLBNKJspMwHvJReQ32DZqA8ya6i9RuGbhHkESgZTCpRKKHq2weNhTsMfdT5kkdMHEs",
  "key9": "2Y4Lkb4ogsuzo5fQ4whHgmWTtt4TtxgQe7JaiVyazXBaBzwS6QXgbzNxmeg8mNC3iRUdjm5VEAbdMUjd1F3PRYLu",
  "key10": "5QopMAwpuJwRFWDBJLziL8yiZ8obscsW7gm8pTxEbede6pg6dtab62fgHLA6GRRPgFJPVhX1S8rKL3TGB9jS9xif",
  "key11": "4jHWF7wJKgLSktFA28cQ8g5dY1pKAEPiRJrVgkCmcbnEYBurrSgPL2Yxdn3BFJG32JcyVVvNv7P7m2HKGysFezv",
  "key12": "5kGwVgoTGdVPQ58WX6ugR353i66s6XR4gcDaoJiNa8S4WY1XqHEXTwjhn2U6vThmS7uvuS2BS4aXWbc61PQUSEq1",
  "key13": "3cxSSeNnhVMF24AUguFXPhvhJc7JZcKXNzkFFdEmd9mLeBb1XrXqssd4SAXqtfKjWnPrGTfSbMbjWNizDoc3XdbZ",
  "key14": "48QAmp4MDYajcUvFhjkZfCatkqagR9AqE4RCEQpPUfDBaZv9Mu6Fr7zvvFk2kKeiSp6FzCdiU6Wd5dxqXD1o5yg1",
  "key15": "22g46NgMHLjZhpuS542dY4vNrNK5SzRKSXXqcbyQDkeH5w7xJttGsLDjke96XVxCEpr3xKXnuJbiJp6uc4d9TVba",
  "key16": "5bwfP5RbJQSHaZLFegaAn8FGRDzqy3n7H3v88hgAT4bsBdztpgm7FbGZjnUkH7KRBtZ4Tgn5pkcNtwheTWkndikF",
  "key17": "2TPZANanoAFJDRbmwe1ESG8DVpvh9J27kcbHHNYpLnNzBQQWr2Z3eUTnw91M7cuKZwff3LgL4BEyspukAXmrLvH3",
  "key18": "22vwMkiyTGHD514P4FFEixngGSvfhAw53VpEhNG1F5tVa1RT2dJYVKyPJf9XF87fT34bmahGMnK9mUoxAeEuo2r4",
  "key19": "2SeVbc6hbYPjJnNcRMwJvMP3moNC588yL4XkK1yUEvWn4di1byuE53sK19B2NVPKcSXKens1R7rLNBPjkD1HaBag",
  "key20": "45g6iiFN8RA3Z4RDisCugKd4hbnX7a41Yg78GDNttxdyQwQbN9gE4UKqTL5Q7ujXeU1p1BzZ17ud3nauthzBv2MF",
  "key21": "3h8caVmW5Tv9EBw6XetTJWs3a8CcxTXv9Rotja8bX1R1wVBNCvYUbc9S7xvSmijjvHzN23wzFXj9AdQChaZEvedR",
  "key22": "676BEiM9ZRuiAvZ325WjzyMPzevrWvBZsrWv543H7UCvFHds6AzC5cUVEzL12EP8RmsKgKv8tuC87QV8bJdR4pTX",
  "key23": "2L7AJaYuDRa69gBVGpJEQ86nggJq3iUU9YSCWFnrducRbiEm8oktzFmjjxU7Bx1anp1B32k77V7oonwakY1RbSks",
  "key24": "4tDUFwcR7RDa584RdAZDZ2Ty3oHNjTs5wfik11bmayP2RKyY5aQaiwrQyoZrg9A6RPr8rtdpHWpmWQrHWs3XEfJ6",
  "key25": "4mydQgqDnQhMe5riZTMtTigaqC8gFi1TCFigcMmvuktWBjwPtc4PRVHi2EYz3oJK6ZiaztfK4FmTxQTtKKKmxdCZ",
  "key26": "3z8nWEYtZpEa7vwVKsPjexPosUL17E34fYMoH9TkyAJ4GRXMnbMSH9osuX5ESrDmGw9nLZuTCNBdcHx6X2eSGD2J",
  "key27": "3edkP5KwqzpmFktvYAfxtWTqVozffJfePHttU1681dMMtue36htdsQRdAQ7nyhr3WsU7gqhgVv8o2sHeJJYBNpZV",
  "key28": "WaFRvZENenVwfRBoqgQqBHkRxNcdQ2GRE4SAdNm7zbBymRH7im6E6EYwq25Fgf7DPG9XAVP1nfZgRhbVxy5gxqZ",
  "key29": "3jqjv5wFMLFiS1JbRByJatqXRqWRQZFRNy86svNAsDrDE2YTXM5wYoBCJ28rwPFZrc1q1ASza8LhkMJj1LhDBX5b",
  "key30": "46na99vCTuTDYirFrwWDmjRs4hJoP1Ztj2tA1JeunuwCa6kPMEuBvWstT8C78euSMCXS46EsTDzUXedrjQ6JVAAr",
  "key31": "4NS3TvtsmqYxP8oA4KsrwQtNwBWngx9azCe7FefY9T5X72TYBTn313zj5X8e12gRcBnqgkPhpYLS81LqWMApbdi5",
  "key32": "4ouWr5TGRDKBKTL6TqbQkfDhmNZgqQnfbb6wEnjrbX6dNeCDDfnPT5ZoovuZfqoW7MK99LkLawTy7Bqsex4GVgHV",
  "key33": "4Ppsa3NMr5RbF5nsoNGxVtGHa3G6tYj8UvUifE2abeoFQY5iFU9MVbXM3LKAyf7D3hpKLBwnEDBGbBwBhBm7KfiT",
  "key34": "5jNBZzHNJ4DFz9K7b73JoBFR7Za4XHbPDNfR3AQAFNWq2hUx76pmzRV2gkZZmknsqo7CsWRkBKpEWc6AK2iqJWaw",
  "key35": "5fhVu1HzCrTNYK6sbv9EQmkQWC8LZooQCGmVUZvr9sTs3iqjJBgsJzBQGUVWKMBSqN9HJ4aH54teCB2EAVr67aoE",
  "key36": "2dZyJXuLujaT48fm3R4gbz5RzrUVbSf8THnzWSbrR1CRUYu78qcW5uYptjwcEKoJEu9DRf288ctpCs5VugoYLH7U",
  "key37": "5gHCHyYtWmJdDxwDYwuZPJgPyV3HtMJY88hrkSssnt4aYqEMb4qrnTAMKTaNxs5cVw35SV2gk3DLtUPpZy4eroZJ",
  "key38": "3WvrDwkt7Z3rAxuzMifqQxVwmom8ChsGbETPxkUXJ4yZVybfkPHQhNGxrEqQJFKMbmJM5ytbVptCXhn6xA48ybDG",
  "key39": "31BrKCYezuaCgxB8fpv62Rh3LT3G3u2onqzAifHQXdEVYQFqYf6CqCwXjDZz6Ra4QR6mpR44DxcoP2CzYb3XyGf",
  "key40": "4ux1mZwptM468tvTWbv3ZNqovcoJezsHMw47FBNnU6tPjtzqr8p4hDEbLqCi3MNMPLsjT7WLPRYToSmyAzUNp3Kg"
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
