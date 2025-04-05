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
    "r2HVz8oUQDVRofgA8mfy9rfeAEv9WMvV9gqMBxmCnFiUTHEqFasuzm2G6ZfjLMUqoqeynEEbB35xpP8QahyauMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQXWYsv9GoFpsFztcxN6WYrQ8ZzWyJdyg3MSL6AGD4rnVnjgZomgX2Q6JA6q82LkQG59cjYHbpkvpe3gqgo3SMs",
  "key1": "4KkWhK7VLZRr7fVWnFnBZitFqGJo7y7C382u57vQutTYPgt4Zku1q1463eearAM4oMrLSPTKcjsyST1WPtTD5GXZ",
  "key2": "2tGEkWLEEapCMqLdKinUYDNfU9e5SHwK68BSmR2JojtR1o48L3aPUioSYpeoDdsaf6d5H2maRu5X6D7t1KTujbzN",
  "key3": "3TqzoevzT5Lho9c1ynzDyYjzBxBgw1Q4qRFkqcHJAMveZANwCcmB481tNr5RagbAzxZhffsrvCqSoXdTBL5TNhwh",
  "key4": "4b2A9tEoKBtwNMNEB1G8i537ekkVAJPi7na8p16FBt5d4ghR7NMgCSb2YUStL7t6aNriSwwDzXrWTYSPhcEcmeXr",
  "key5": "4vaNsBL4zCRukF5spoAky5wXPmeCXFoPamH66bBCg8uevyU1BnpsPJ534UqZFpqUkaHLcYY9cc1Yu4pnn8CPg47Q",
  "key6": "4cjCd9r9khFEgGq288isZs167aZirnk6h3eVScFyED2gusafcoUAQUn3RcFsMbXsSMCYsQfBD7GV2KUtaTgq5nn",
  "key7": "grF81SfGtx3krUJy7wZgqH1hUKFHPwk8gGgnQiBd228tUA9Aiw8seiYJUMDZBEyAF2JSa65GeM9xbsJNgtgbSaj",
  "key8": "2pLpuR26s7VKobPnB35sTmvMd4twJsowjV98JVvTMhBvfVmPgSGTHUKL5oLGh35Y46PU6vCBgYKsXk7jyJNbVwqv",
  "key9": "x7KPksi9oRiVDyhUE3WNgJ53Kpj35Yczpe9ekKHzCj1uHvbreVmpboEVDNre6kYju7sMEqycMDBAwtNyWNLu4at",
  "key10": "2BMW5DSMcXFnVBauuJFGv6CzK1Dw1MF7bqZRA9B8fQbvABvoqrFMCPDWakondE2Foe2BuBYurYtcP7Em965ncX4F",
  "key11": "3QR8YNaJwz6ZGjEJsYyC1YLUDwYLxhsmt1oQ3D2orALiLA5x62zWS3J78q9zyLhzsCgkhxgxJTr9c82ZpPVHpG9y",
  "key12": "3sMwqk6gJzKqDxPmWFqYSvNHq7PukYjrCySkiPJ76B41DrDJCKbgZRfGS8x43Gwe6Z8pYrhdR8gzdPfShqZhNgZw",
  "key13": "2HVMQqwACyqUWtQqpV8fdrebQd5yN13km3SjrvVBGRVEfaHA4TsqHd8yaHod3tWhvo3L7zZyz9HxFJdST179cSpV",
  "key14": "459SDTFvqYq5oyvj3yXsuzL8aiM38nJWkGjtnXEta3wbmFDWFqUfMPwx9SRuvaemBqSuJ41fFK8Tdj1ZgzVjKkEy",
  "key15": "3JQxu3i6deq9EDyZ4aWVEZtMDg2wLvuzWRd1gDxxMZB8DZUXmHC57Toi4dusAsUScFWkFWF1zwLoR5QizduyHuaE",
  "key16": "vZ8zhRJUCYeDfUoKMy8mpxsoJekGFARUSCgNW1Sp3LU2JYYwPVmvTJ1jJJme9rWkRxviguxpxmqnH1PdtRCg9R3",
  "key17": "4Uk4BzeC6SYh5JPsk7x5wdVGhCgm4S5cMkQLTBHNS3iPw8cCQX3KvQa3uoSwKaW1fSQyH2QML2gi4vyHJ5nv4r2m",
  "key18": "TjorWunUsPqzC57UCPAvdYXKnZV4d7XjwgtwCbSrHT7HSBmHXnFV9uC27okxpxmqRhxHSnRthwFYLjFxEBcQ3LJ",
  "key19": "ydn9VrKhqXAWF1HmaQyP97QioGCrzXxhd7EZLUpeh6961kcoXuVAz38S4gyZX58W6LW56wRjekqubcS5ofaRoa9",
  "key20": "34Y62oQkoW7zL49uY9SbR2DQGxCgybPg7zaoK4hhRNM5EzL35tqTeEeCMoSC6f3AyFQWpKozjBzyzV6j3TsRL2WV",
  "key21": "3bgWdrc8RVyGnsz3Z7S9hbgErtpCEqaWFjRYgTXZMNxMxUp6vvsUbj79fjZKoiyC5XnPjgnck7EbnXUjzcMhA9kS",
  "key22": "1MiFTb9MXdSo7A86TBLC5z4K9WeaHvq4watw8TMhE6JADq66rHPSLVWoDQt2G8qqqccro42oUKn3LM9TTGjYbSL",
  "key23": "PFdYYtKDchUWtxsDAYHkQ9q7iLvtTZdTaBK7wFKPa9ZMFREWRjFGZWhAF6p794tpKZg2xNUexGMaM1A7uSVmQ4a",
  "key24": "quaziEpGSZ9z2y3fz4eHNPDJ1DpXAqm2bnPLVBbpxqry39DUCP1JPcMybcXBEKyxa9wNcmUzfkCF3knHTFaZFrJ",
  "key25": "42cB8SsSQCCNyVJZUhKbtU37j82AGqSUPB1mtyr6V4vFcQYxzisWqiPa6y6w9BfbMfSZB9K8hsLNSSFztExjFS9g",
  "key26": "2ybsXsqxuxRmSdj3YNDnbJLuaf3REiXUhKY7TjQEW5CmBW2AgB4GqjdUDze5Gj1v7DAKzKGJWDjT14wJQ5aY8H53",
  "key27": "3t1Ncc656fiKCPkdeTzo5fvZ88xYmFzHnLrMces64GrLfuYh3E7hqj7RwauaYbmahZZtQjJLdFD3FCwWvFQGiYvd",
  "key28": "4mcJsNvYFKyR2vao7GZS2JUg1hT8LdyTsZCqsH1DTU1AtmwFxMMfZis7C3wQ5rSwhTaFF5vWYGy3aQjtevPhKMUa",
  "key29": "62g8PoSwFppDR9DoDN3Rev7QWuW7VQSEQ8oVByMEV5bzo3ijCmSawQorLRs8cWZQ9hKAcA8F43bFE18RrQap3kEg",
  "key30": "KE2UFR3vmATnvU4sRAHWhULjxMMnzK7Chs3deQ7hR9xynguCekfD1P19jtSw9D32MnRGKCrWjjGmdVt6tgK5Ahy",
  "key31": "3CTW2QNsGRDc2Z9yKeTnBjFqdy52qhKva6oy6dWfUWKz455fr2aNPoz3nPM8hUkWiVd8Q5K7piMh8fjsSCFUd9N5",
  "key32": "773UkMqFk6KWMaHY17hRyMpiQakRFazddk5xFEj5c5mPWtZQEVBynrC6DBfciPLLFftqYV95Kx8XSwKdPoqnGSC",
  "key33": "3h5GVgzgcFQU7aFAHT61DqMPgo84SMvcoqZAs8TdmC7GCzqtrDCnyR7rkAvsm4VHzgUTNJrmR43tbvekCAPXhuQs",
  "key34": "242VXGZrkWiVNo3H8fy1fDdXWtcdaWMtemZPbRbC1MfGWVQ6GNTuSyG8zAWtyB1rQqbfCWMnm4QzUKx1b5rwXe22",
  "key35": "2Ws7WHVh2TUTT9YadgsxY6mwKG9cirMozGAPgUa6T4CmZ6i7pBkfJCHe6rhKhjcwbBHrAQvyXFELJAA7Td1FchVs",
  "key36": "27UTS9jvE6zPWD8vFAfQpnSbYUzHhxXeU8sK75F7QXwaz4fm7nmXXo5eaetK85SXHfeoXnPk4pD3ZGoMGxxbbuKj",
  "key37": "2NBmz9kmRuVaSfnK8N7U9kJNiMPuCXZPYfASzadhfYDMBiGfzJSuZVLL1xjKFRLiLo3An6LYBrzb5gXL9TdSPdqE",
  "key38": "2RjJoNkBTBouzTpJT1Ghup7KSrG8MyBUkcnyVLJy8KVskA8fSCUCZhpCvRjjmePrHfPvm4MyXbCG84F5rf3Y3o7i",
  "key39": "6kSJKTQeU9Au7GKGmEBDjXkSKg9RYQs7JkkmxdmM4iUMbEwhuPKn4te6Cruk2C5yBK8jdft3xTwho6bo4gF64bq"
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
