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
    "2AQZqD8Ue7bMmnYHDPf3pkdxMcffuGaDKanDqJkdWGDm9LnU38ZoaFWp6sHbd1eyN1r5FtCjDwcYVQUGAogmu9nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RV61w6Dm7CADoYYT5QFg7Kw23WmgCZCLEYEAF3qoBmTu1NwSZMMsLFLqnujGpRH5smzV5kzbqu9AGGJPQyz1hLu",
  "key1": "5aEv9ndKwN7gpK7QDu3BFmf6sRT8DaUk4Q1xHVdZGMYkzsq1TyGroAKcXmw59HJ8eGaovCTecnMxSbHepF97HpZx",
  "key2": "4e2ApXES5PcbvCHSr5tMgEN5dPoi3a7qus4qhDVC6644i6dCVN8HRf2CPj3fZ5aCHaDLE9t6ULkmuvZ95cPYfK16",
  "key3": "3onoimizWuXnyEKNM7oWncQmibKUgz67jgxmubSezR2AzyKcrirruvGH7xGxbu6zv38cJRKTNqqpsmBPZAojk5J7",
  "key4": "2WgqYfvc1WzSLUbr2aERLWPj7HrZHkn9yCPjotd5k4fAAsmksPhsTsyta46JtBbhrEEyfoNjVwU2kFAjDt5ivDfS",
  "key5": "63GKJau5j1L5VgnBdH4KDhgVPyYduvnCBsuCm3F3dPPTq7GhJ4XR5EV2YPaWsLgfETDwtQZc4zmt2dYWfivG5AA6",
  "key6": "59Rh3sYvvNENsLCHmLfPyGJ7biAarPvYPPdx7Gn51qqEiBND6YGtXZyyNfd7Yh8YbYPW7M9KanPp92kUJgqYzBxs",
  "key7": "3KKvZ5LsBFso1RmmfE4usojSqTG18Mbi3cX6zme9dUxjaDtQSny1QgKgXCwWNBgg8xRDS5QYtNaqqUsVBhrrRW1T",
  "key8": "29MGCNgJXCgdgQ1CqaopLUTd8HSidxp1mkt3GuRzzqg4RTcNpMaLRcsrgTLnTE3UbhY7pkfeW2ZDCinVUFxPvrQB",
  "key9": "uoqjCLGrA5LsXbq4KNtwkAgMsn3Xd9bcVd6z9Ew8Qo1odZM9Xs27uXemJ7WcFvhvXSr4coAnenGSDUA1gh9kXA4",
  "key10": "xgy3uQNqJ39RkXh2L7gYk8bWxWo14vXRf2P3B8P8vBryCqK3WxBDxxYEm88osvs7u2eUiZwQATRWUn1yikpaLN6",
  "key11": "PS82WYRoF7ZJGUhUNgRoHGYng73qiqyLu3M5jLWjKWX6H8Nvt3XrHCdZ3cqgDcxUehuxpKRxk4EkNS29wL8oJjz",
  "key12": "eZAiwGz3dmvd1jjNMpBkALVT8LEswWNHeXVRcgz4qYNHbKBamWttLBv16ky97nBK9mkUvfTep6Rrgn7Xtc7gCPr",
  "key13": "5e4AVD1dtWZaH4HuwWSBEbSiqLfdLzXRcpTCfByV7VrkdHBVNzpFt3wBW1hsCkToLkkpjb2HeD7nZyaLNxg9D1kU",
  "key14": "3QYQCnXj4xNvcrv7rojPNyJLSN3o8DZKvctFh8WXo6RRT5kS9vV5S3i8eevDop5FTaJWjAbCWuZDDmRUmLMXfosD",
  "key15": "5Y8fFFo33zB25meh8jaPEVQ1XohKw9Aba4McYdv1PGNU66JgMaLCeCMwiXUkUxt6p5NvAHLPQ1Q5PMmHWVxeNKfx",
  "key16": "3JYvGrHKxQSjTDijEdQjqLpH1SXoeHydWMZSkTfsrAbNwuarXx4ZxErXk72EXpPqKVhmaRRhkdyWGnu4rQUTXdvq",
  "key17": "3bszrjXz96Eja4n5JMMNNUZQDyHN3bedrVrF5E5eUtzPf3PoTxHuohoNbiZHRV5vzDUUpPs6q52GbcQMKrS5JpGh",
  "key18": "2Gr9PhjL7hs9JKXsBaSDSp2pBJPUKjgn9DRNcbadJT6Jjs8WYKT69AFpth8p46SUNyNETGM7ULK8zhpEDAsWPMHL",
  "key19": "3gGqDZRWMTjvR99zb6qK3mrR2g5NX7vk8jijKbQisQ2nRG3VcG7fCbnu39RgyS6Z3BY2Mqp6rsUJ32UfVQSDE6ws",
  "key20": "5G3LfziUyVT5HsKRLd2njYWD3QDTgYRUZMF4sTF3qQxgcPirZfruPribtrtU66oDxnChXEeZDPb8BAXLRDm8ntbf",
  "key21": "2PuMQAifwpUwdC6fFucHhCex2c6ubGLD8cqyqgsr3MSVxjTXuSANdAL4qtJkurAcQbvEjGPoYLQZsv64ynzsGAmi",
  "key22": "4EjFWD1pVaRtdbYeeA5jPH7esX44v14HU5hVf5sA5XuyFjYbSWZNFLHayUrPdbJL2A6GMST8V16yr3xnpT9Br4bc",
  "key23": "5aeJYv29Ph2i8gYhZJbvNwsKF8v9Jozs91hxctUjeQXpVeXgoNLyQss4vneAajH9atAyxsWNLk9bnq6KUT5QG6SM",
  "key24": "gKVzoYafA51tsNRsXGsFjpLBM55D8ZGyriQEWxML8bW3wTVdBJJ8KNbptheLcc7SJGipQjf9ndu2nuPJJj1jjyK",
  "key25": "4aeXLFHixTTY9qAzpTvCzv9gYZQRXkiU4tDpLbyHTqViLgiR1rqWd2rtX9iB61iL9yKHcGZcHnwK8Mh3rwmZVcBg",
  "key26": "3aPuxZZN8J2d6qSr8k2HcZDpEyGsrhqFAeuNumQDT4pTgtKYWnwVZDZtcsWvgecXCBLGQNcAoVeRpqV5NgoFgiNS",
  "key27": "21rHf1JR8i6kjKRdQL1fxHNMFdhmXKzSWJgKnXWktjZeCYDQqHQ1U6tYD7yo5rgKYD6cFnUH3U6TEoYyaDPFeLni",
  "key28": "3jK4bGVk6tUadEfqyndNd9UnGetBaWfikb4Qck5pJrPLEWm1K6J5XKSzqRz5jENEa4yD626txZZZQDNsqRokw3wj",
  "key29": "4Rnmgz1tkj2nz45XwQ2T9ttcFncHY3JuQ1ptgeUXk2s96u4HrU2jjLjp9KbQrfEfXFe7iwoRKVBSAGgcNhpRiRw9",
  "key30": "3fhAUtKPL3U8rhmKhkzzD4vUnV8PH7aLvBdmqeNBdkkbDYqna64kJG5aFLgmJqaFFRuHvYCeAkJFgukUw7zW4y7j",
  "key31": "3NENkyBENShL9cg2Zw4BMdD5cKXyEWuLvxixGfXp3RvJvhJnNTTe7sh5HuJaJw61CypLjYUweEG8ZLcgfKK9REN5",
  "key32": "5DeYFBJxqSrrMvrnaWvLf2mLvL8MNTb7NKwFLVK3qPfMNJC9YTtAk8FMDU7MZxuD9FZsC9RL9MS23z5qzXvAYUVB",
  "key33": "2WpUSu25bWZYcRwzwskz6LxeYmPAdotR72bJncsmiqiydsZaDFNdxbfPRY9zdRiqJnmhXoH3hKb4AJTMhggxrt4F",
  "key34": "5jZz94uQuuRHsVKAYdzNd4HA3qGe9UAeBx1VdzrPznscR8Eysh8ehor4dE7o7zUyuGKHSMHMX52s3PA5DaotSPBb",
  "key35": "2JHuU7MLAPswiuTpHcCjMPoDzFdRzPq1NyydrdtC99qtTZiqaj8AaRSiZcUnDCJV4X9tmAXppDXq6QNDCLnSDfUZ",
  "key36": "BLA5m89jE24tSSGfC1WrLVkL9WZq44y5XU9trNJMf8msUAU4Bc1986ZbY4fyUKtYXJ6ibwM19enGo27ZsdnJ5u5",
  "key37": "8NfbcRMeZrckWrrkGWTzUGfvQEcPUNHxeSeACZzX2UzbPTvBitwgM8HsWxT2BhG4UdSaPuRQKRKt5tQ1sYXPWP8",
  "key38": "4mi8GnCctgGSqnpzAiVGaQNVvDnJk53fY7bLHLydSawJL8ZrDgx63eDkKJXHNroekqxAcdnkBnrWjwaXKAFB38QA",
  "key39": "BBofqkFtGLUh6CRVoF77TeaLFH6rpSz3BiLmx7zbqiMYprkWBVx32hPH6if1M7ATwnYHUAVcJaYMDKknMro5MJg",
  "key40": "4BxZGSZay1Z4dBocCFjUNy1YgoRLaChGvB6frCEP5osejmJfroeaMprbNtjFJt8Zynp3ej1P8NRMm5i153NLtxAp",
  "key41": "4K6jEcfGf9tkbdsUYGrmMPtBxq9uw7SBkpnHnN41V4qH7cmgWEqokAJbC4o678LJ28hHBBv4CGCg6VYpEC3tA2QR",
  "key42": "3bvowC99oiX4BpRqonFJo1xhj9F5Q4pLToEL74k1iotCBQqz8mnKrPqZhUv6M3ZEfX7wZSxX9V28iR8ajujPtipq"
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
