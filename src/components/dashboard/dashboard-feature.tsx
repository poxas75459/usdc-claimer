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
    "3mWwbQ55RpzUbN87A5pGRsRQPyx7L33wEFK21Aw4Rijuc1WraXzZp7XFjgRLfNQxukp9mEQ5MMBk9rKkaxa8yRZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SX7wdJh7DgJth5SFUueHsZMcjLC26eLgAqRcX3sRYv42sVnqpRL8hJzedkQKkwSEAB4gqaEco7YRf38xWQKkJ4j",
  "key1": "4e3GyYnfK1UtacaDC3H9hgvfd5r3JFa6FoM9wNESJ4SRF8UWiDUTAjGMmnfCAfzMhGo8h1WCfvrMtPdJjeVGj8Z9",
  "key2": "4y3vypUMDDHU2Qz434oiZJX1s4R1NWrx6dK73T8YB1jinjNRVvofPBib9RpiNWfV2xiSM2fiLVsWEQTSLPPh9kFF",
  "key3": "5xrmYP7JCzBKC3trFNHAiCEb7KH9g7JBUfQfbVwrUQRM5dyJ9G2bA17QZGN6XbiDY3ZweMGPqGn2vRWNMR71jxq5",
  "key4": "3GC9uNn5kFsj9WPF3ZtjmpHQwpGq7JMQ4pZeTLQMDPXHTSLBvwcioR6GVxwEQhiRpvQcEu4FopqkXhuqoS8dcjq8",
  "key5": "4i7GXM5uJYwWpQvnnBrbhrMJwVBvhpgjmejDp5ZWsvEw6iVkxLK8XPKUvvKk7fa7NTLHyxpiPFbYXjrt6zW6Nb66",
  "key6": "4bNfscr45pgyEULsPvJbN23MJbvuy4UKJFVS39Caksgwg7DjdxgeruWv4F8TEg9FkxrMkfdX5E2NR8ksPqTD2dqV",
  "key7": "39wS7Bkeq5o78qgcg4qXmHRciQ3imHaALv7fraCadquZEWj9N5EF9ELUDHgDvJDsRmm5jD77aK5SW7JPNDLQCZYA",
  "key8": "tmkeiAZowdamogYdvLowR7krG9asV1cs26zgYeLD19mzkjmrrXj33uREsoFNfFFwCcKhNUF2mdCPwrCZWQEwzvJ",
  "key9": "avTZ5bpTEQbEJJxyJZQY4YMHmtrZHU4m4S5wdbPvMQWWoDqx5x7yAMRoSL4QxEo6TgWNYt8siPRQNkDhT5cc9P9",
  "key10": "4siRPuppZFUZRf3NBs3QvRKv7JqW5c49b72MEPbACZgkJEJN34fkVTURy2dojXj8fCLpRT53VAAmrefZwCtVWoZ4",
  "key11": "2percR93dTmExQzYFCBDAhBKJ2TX97LvLftys3zMjfZHrhpDE8Rg1QhcxSDdM6NeXox7FGq5xqLtyKtcJ9NfXoSi",
  "key12": "412g2TSrjZR9zEJ272BGh2fhrWXXnVzZcmBRZNamwWFRdugUL4fxpskCvjvnmUTYoB7XJZpx9AkoyDFpneX1BEgx",
  "key13": "28nefHNbyAeLaUjUKWKa6J12RtsrQkQN4CVn6nsJjoeiTxtBi7oCtFChwNhWyQjoP51xJB93vrGKaaq6u8fQri4z",
  "key14": "4obCWXpJcAJieLBKRQkyVs7dL95e2QjVaAUY6A7GKesernKKN1j4ajHW5zWJMHxmyoaveWVt38sAerAj9tXuCpHb",
  "key15": "2nGDbjKbSruhTZfvfEJFAcHBR2FtB7XSrVZbtLiiR8XzYrDNPXj4PQQZmqW6avx5Yb2GSZRRmAxKw7oebR3NXamf",
  "key16": "63R7oRxPiEddKnSQm4e4Armq7E6xLvGvPQRMFHEyrvtjYfKXkykqwqWAXUAmAo3JfhBZ4PqDn7UWCKqSHdaJvAQe",
  "key17": "TLw6ovA5a2SdBnwRokVUx4ThgLwkq6Ze4e3UQfcZkxBp8kN2MYee9os39cNaBnfiE2pJB3DjzRUq2M1HetLbomq",
  "key18": "2kXSkMwKMfT5y3rv9LXFTjxu3oyb2rLj55HU5EfusQLt2Q2AwoiUBXGreenGhMbyQEEd2CrQsnJ2S1iff5pLSqvj",
  "key19": "2DTDitjE8rowwdCuYiRyncLEb6wqx23GV5SZp5cQ9YQw1XsteARL7WW8BWrEQc4vUgVB1xTRPWVc9w8YanZvAaMz",
  "key20": "RvmZWH56DC8E2w3eK2HFgYUhwb3C3zDKoQ5PKyt1dxF8kMRmmzUEqYfeU93Cnqk7QoP18ust1jCD1ifUJgzgZKp",
  "key21": "3C3RB3wwrsPHK4G52dXG2FFohxQUDZbR2KgYbmxzS1nc1SAkLMbZxFxmXKEzafWQy4wvqm1WZTXG9FjekgeArrpk",
  "key22": "2moh8vosZzVv4YuCfVsYC1ZFEfAMEq1Xgr3PMoMUqb8VnUnyaRWW2xQuneFcfzKjSHmn5LyRe4rUVu27EsWUQQzT",
  "key23": "3U7xHa3vBGFECLd2P1Aq5a7PiZdQWQP3hoFd6jUAJW2mFMnbXjpVBhebquBbpUABAmS3CEsWsk6EFkAQwNwWbEK4",
  "key24": "5tXJhy67TSn3P99bTHXMAFLJNyJFfumQSpfAWTxYTgv9UzVzResCCfKaikiQpGmWUbZuDtz12pUdrVXnjq5Kabfm",
  "key25": "5F14JQ1xpYZ5EXdqeemw5HQLtz4XrEuPjam8jHSUdAuNLwSMv6WNoP48CJWaCPf5A18aHCHE8FeUmkqShEefuGSN",
  "key26": "2P84j3X8su1keUFXkfRnYj8xCcqygG1xdqNKawic4W8owrgFVYdBsN4LSZWCMSHdEEdAbCTgdyYEsd6rosfYaRYs",
  "key27": "p3dLhrZ3tXz3i6ZNLd2YsNYVsckR65ss44QJd2F2KD32KE7gfKFxDRwcY3q9mFgqXWBLNMcJQFXR5gSDfYARVdj",
  "key28": "5V7BzMt4Wk8VUfReafBuZNKpvhphoDT1QkvY3MftF4Kpk31XsjN28w42vroiQ1GTozCv5aV9GUEc97CPT9w9am3U",
  "key29": "5nNnbnL4x9PB97Sck2mUCqLTWqeiJ2TUrk983HoBJQymLRJ7B9QLaHEQ1VyyENKr7d6NXkr4EBwRTuBzF7QEGrYF",
  "key30": "3WKFA3KKw7we9CasvEZdim8urzYBWotvAqayFV1VXk4AhFrpE5ctgnXAPtjSUSPGvNuQX4uawpAKqoY3JudnQkeT",
  "key31": "FuSpNd1yoZVugeQbpqeVAJNzZrh4EWNnJBDTVPKKA85H4Ume31mp3jqnQzdTPAyDwbRxXawdEQVZ1WMdU92VruG",
  "key32": "3fgqv7axPkRCNFNBaA4RjyPy2AkxFge3kRMeBAbrDiNCfRSjfN92oQqCDJvqb2uofKfTu5qLWVsahv7PRWMrxheb",
  "key33": "51eK9tW2sbq9MKFNyRV3UBZtb8uP2kRBxundmdh5PA1BiYFRxf8DZNYzCTMKyPaYD5hJhs6Rkw9WrAiVjQAfM7Wm",
  "key34": "3AYBHnHueRm1sLow8USj1X16QXB1zc4umY9gRcuJcVf6UQbtB8z1EvF8C6a1W37vtjpDQuffcw1tnzXTjq7DrTie",
  "key35": "5nc6WAPV89oM68BEyp6a4SVwPSp9Enm4cxKSa7F39AYMasKe7vSJst3c8RsGVrJZghHjb5VV4mPDPcZEtmMAwzZ7",
  "key36": "5PyEgfjuBMwf3SveLwenBrxXjKnitsh7EFwq4yJu2s9aarpJinA83nV6AKKrJ6JCyE2ceNHrh8zYcWtevXxYheay",
  "key37": "49doXWL2tAGNBssMkY5wPC9k5Z3czEZHYYvhFEFdsUh64CiPph5frk2qjJqDZgPQL5JraqqusZp8N2EYBR4nasNn",
  "key38": "Zq7ox6Fh43fmEkRtds6vQkLxtQrdQiitif4Hg2DZrg2dMJ291xKxZ7cezkqzQyeuLbsEfnTZ3yvZF9sVa2EL5wn",
  "key39": "54QCG9tP2NVbD65DJqyEF8EqD3DydQiBgg8J1LFTZtDD6KwdhXopSnN52TkNqN8AnF9txZyeFZUZCrFjGRmrn1EJ",
  "key40": "3Zta1KNVpU6fbjPb3PKv3DSEaAiHviEDQ8wvGHm7iyW2UaGZo3GnLovjdir98Ub8iF8Fbd59ZHgcNYTZn7Bv2PvR",
  "key41": "3VCNu6hXGbnezRK8fXhopmrYKHHZvi2TViGPHDgjerDf4dVRre26ejqRkPKebSYBAZwWJsCPZsqAG3VSBtfjyt4b",
  "key42": "5n2ZraQ6TNGTCfvsQEeLxHa7mnxw84YU4uDW7xQzBU2DZBP5rRRbcnzNa4vXxWpfaUUh2GNzVfirMy6tPju8Uk6C",
  "key43": "2kPhgWP5ZVmLS9Fk4yGkGFUqLAPzobqZCgtRrwyF389VMmNUErpwUsvXXs6objRrnqxgxsxVYKsLFGDkw3YFCSbc",
  "key44": "3xwtbTitmAiTsY7PBFbqfx1oPaCz36qEc4TUrWyyT66ff6kKkSTs9xaomkwbJJxUEY6T2gpd5yYibuZ6kqRg9tS1",
  "key45": "sr7RaazMRoy3Pa7oar22VQwB4gWD33p3GctAHKn4tQUNpz6g7sSyDXLrWzGXZiXgJiGYDjSYopZTrdfQ4zQXeZY"
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
