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
    "54YYT96TznZLwUzfxDmB6ewdNrKsHrBMvjcucM7aXRybUZZk4UkhqncWZXfVMbDwj6SjG97VBtC9ukCqmUjN2m4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cU25M1V5XwhhUXpGFGfoXZdrYxhcFyfLHdDPLZs2VwwPNnAZPdYWU3VZ8VqdZLJdGYqYH3gUG7dgcgptppdx2iL",
  "key1": "34vHadr6J9PP8Rys57J3u6qFHMekd68H1mvpjizjQrx98sfjSEPRovDcSwRz2wyxo71ow3KVfC546Y2tSvTcpvu3",
  "key2": "2SAyE1ZVHz5UX9AZVoBAUKYUp1RTaDm1w4cYKCqGT9trYVnE4ZWJd2AY5aB7Tk6MuF71GyNQrmmQpmjka44vTFah",
  "key3": "3APHkNMsHvdqECMv2kzrT769svKfSHq5nJh14sNq2nmMSTyxhj5vqW4K1ZQrTFbBaUkaesLW249Xy3N78dNf4pRr",
  "key4": "3JNxB62s6JWsKHrwFrC5UXoz1bczaSBWjwpTWVmoigPz7qSeQW6Di6uWkBwx32dixafqrNjPupKhR6jdqGq5nZda",
  "key5": "WCv8yV3nKT2zCBPX1aeNvtWxeUpWLXTeKpXNvFryV2JTYUXqCTvcjn8dFEm932VPEbdBe2Hnfo4wz6SVU2ZVeXB",
  "key6": "99QpvtSagMNhq6KYKXdW4X9htURWVBzc5fL9nJfwCqy9w6PB3AaCPp5LqhsVADVwinp4TmpqKmqjUwQNuj8FAeC",
  "key7": "67aNMoJZjNCpEFXuspepzGSK1z7H4KQnbGtuWXxsCXRek9qqsJ3jcLaMasCna6aCP8A24KRCTQvFny6U2LSeraqs",
  "key8": "5N9uTz75qaJuzgiMY76URY7QTfmUwTet6zQtyJsoacePPcxXV9tcut4J6Qc1Hxm2s8XWBFTKZCfmhD56N612ogWZ",
  "key9": "2v5JtAvEvkPjXorjGnXPwkoE1wFvTfwsBC4XmiZrwUWBkwRjs6oeGJsNNpjW7KhBXg1qgSZ3cBe2Gje3WFQyS6pr",
  "key10": "3HK1A5cDf1ve5ccNR41pq83ZCpqvXoahSqmV26LTeJ5TbxCJAB4Turph36Ycqk62LVD4iy6H6fMQvp1zqcxsC3a1",
  "key11": "4VQTYjavda5LSR8ywcDEDU5vdeig5xmyHn2r5mnb93ozpv5XBge7Za7cp4KycteqZzwXE5rVoj5Ej7oJgAukyQ12",
  "key12": "2gwkp7BYm3ui4k1kcHSaK9DRjPc3zjxF8HQdGTSRDZv4JdaiS5cqnNvMJaGVcJiAKSJizpSMiSMW2b2xVrC4e8rq",
  "key13": "2zQJHjcyibVf5FxUTDFzps4kfeC1hRWbk2Kfu4T8RTSsajuRkfB1oiuGwKTUFUXzRdxgM5XZJQeR5oxQApAjH8ZN",
  "key14": "2ALqY6KccasNuaKBZ84K5AZ5sTFv4c2WzxjaHMjS8kqh1veoCy4q5mwXrb7PYyWNwBSj4xhmghN6zK7toD2pmxF2",
  "key15": "i1rAPNNXqL6ee2VFQCFK3RS4gV1bnc6A8ia8tcjT2eRxriKn9kKW6se59GcbUjurXaySC3ozrJ4AqGCsHv4Zwou",
  "key16": "4X1cKK2SxS7zo5JJZZxVyoReqkxAJbWBwhyBx289JWjzJZoagifpWgEQFy36oqT6jnv3HVtnATBSnwrfDmX8NLDe",
  "key17": "2tV1CA7A6i3xnfspURBXUj55JLSfeDMU9BNzNsGdmsQuvmUgLaMNw9vu9JkcBXxwJ6zd2kr5L9XH7FP8RwqUmxZ8",
  "key18": "2U9FikRgqpNaH2RVxu1FXVP881dLL4KJpMFj1d58LsD1W3VJa2rBhScTrjAcGBSNf48BqVztRuBE15dnyxeyJTLE",
  "key19": "5VtrFCjBLHTEhvRC4FYNFXWUSmN3xUCtXWVa2urJdFr6AN7XhHDj9Wta6qRaWT6q91qDqnDvxxaX87UVr8yiZ8ap",
  "key20": "4Zc75XNKgTzfXiNeYEcJ8VfTsXAZnsyFCGkas3LjjZaQS7rodayux3aTZM6qxMvB8pgXXqGySYS1BHBYk24SFwoM",
  "key21": "4sxdFNNKu6MNYwXnfLXHYoXQgia9PQ1NfbNZKd8SDaaQq6UU3DMZmFgtn8gMdhnbPjf2RM75srG4TmmND3UtKjK1",
  "key22": "2y6knnZaaa3iprJXW2Nmv7ZkKEEHWAR8LShGwHMuc2fiwMcFNDGfHzaDbZHa2bks8QcjE69M6XDkaAP9q57CT1YA",
  "key23": "2giQCpzHXrsPZenc646HiMew8YXawL24yYA5EEUb8Qzwx1Esn414Qk3j5LDdpxnytVmk1F5LsApB6weXrStak6C7",
  "key24": "3zEzuWJNQX1LAM3d3k6USsDcWYcuR1XvjWnr3EBFSMpGKH9mytumfLVg7mzXa7dnFESZSs7Cpch6nYNACi1kSU3Y",
  "key25": "3Z6V5xJBF8tqe5jsm3WsMacZ6DTYaxmrgWrSucBxCzmEeeQyCfjUYbXg3PwNQ2x4vycNa4CQwB6n6kbbtPPjcPYK",
  "key26": "5pUL4g6oeMQwuzwjb2Z5nQh9qqxX88pYCN83SHdtZa1WFxtP1To1pAvBFBTWgb2ineSxmzoWZBNHmzffkoS8Ufrh",
  "key27": "jrSr7fW4Kb5PrsskUQq6bREaY3thbwAkHXxj2h3uVk5vWWDivgAywxi87BkqFsoT4GdtKew1YBEqUgbxA5CZ1QM",
  "key28": "PaJtGZW4a1e6jCBJ7frtkVFXBaZAqftFVEwYSys4jbzgRB1KXAoxBjr3T81edW8P5zX79PygD1KnT3tjuqPw7sC",
  "key29": "47NPvjzNQCCTEyD5f4qVwC4uzXGGzF6UwN6dLJ5c8fQnieVain8xpnwz3g2HEmjxBewz4y91RgZcSTKNdqJ6eCiq",
  "key30": "23FcFSysXPJJ5QAyZvDYVmsgzhhVa2JmAiTR1h4yrcKGp6Sc4YExXrABuwH5hxBR5W1GfQer7T2yPC4mvQDqBhxN",
  "key31": "9e2Wt7VtseqJaRsmSRMXfdQPpTqrWZa6AhiSG4qbzSCUvt2UsikVJhADQS5ZW4Xrrw9yjkDbjCEhFwrAxpm5csC",
  "key32": "eG1yRbuwygf6M2N6mJT8YE9bK1S5N2NuVJrbeG9KLKzmyzMFK6x6GmX9CmTLvFN1ib3h9SPXvkp6PGHo8Bejnw8",
  "key33": "4FdBm8gZezrTrxV5psaVx2GNewvQZF8ExdKMfrBcwFne21cWH9jZN1hQzCcxutZDF9JaVQnuTimJr1JeHj8Ljcdc",
  "key34": "3Hi43QExjb374v8fxjXvX43GixQUofrH33e4RLRzQ8tgNzEX4hsNCej5rYsTk6U2BztVsp5vxGkzbX8g5Etg69fx",
  "key35": "3SeK84hoAos2GRWJsvNSryFgeABUQjjsHhUw5eXKyxTgpmnyhZhEQnaPnShFYxWwZQM8vB1hHkV8pTeXB2M7xwo9",
  "key36": "2YxB6LKeVvJgLQ67iYq31BY7you9DwM2skb13GGxNS3ijJ2FZFh8JAYyGgfj4j1CNzop7Pnx2qtowpj5RWyLHSY2"
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
