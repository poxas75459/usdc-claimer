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
    "XJfGCJrRkaB7RQ8NMiVnz2EQhH7pVsmSsgc9GfuAVwx8CEz4od8g9ASJRM4GHqEYoVjDWZJtsHnMkinxjKEg7fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcD7Lr6ZJiCUniKdintHpFeLdGgWjJLBpA5MPn2v7he7xkc3H2V79efZdRWN44bXH957BZiNjsS7diQwZN1LUgt",
  "key1": "29eWGktcFJTa8dut79emYhXsVJH8rDKwQ8tWhNqE6m39ixiWbwP2fCSUcNKa8eTJ5aY7GoQNjamtU9dXgj68PhAQ",
  "key2": "4yJTKcxh47H9LUtcotpRLyNvqQjDmS24NXukZ5ZATpAdy48NmuDxH8P5XchqBVcNx1iCUvUTq3TWjJ4CpmZCpXhc",
  "key3": "3UH6VwhBiMCr6r6bh8Caz2i9PxGB2Hmi2hTUnTzNk9BTxdWtHG4eXsT9ibYL74AjozpPwFwF5NeryJkSAsrLRUze",
  "key4": "4h2qYSjRbEFiDi4bLyskT3LRQkPhpLnMUeC9hHM5sE7dWrDXrye5ncU2nxbD8T8tSzyJmNs748zEhLQfE6XzRMEN",
  "key5": "4UNNW4r9U9CGdgaCsLtUfqMun7wiYnAJYDihfQ8WMFBeNZVftiUeqKGmECcHz1yGy4uLALubRvGvNVUXpgAZrMof",
  "key6": "4ngK9rbRHyWm5SY7vAh7VqqvwtrEntNG9HJjfzTjeca87ofZWmgtf3YqUG3AMUJDTNh1JMU9uKZTES56kmqDuyhd",
  "key7": "5zNGXdPCRvTMMnpSXGGTuDALUJAtKwmTJtkgpecsgDHkrn8sc62PYqa3RiiP6vMsZPJna5pNHLc5Jfz9uckb5oeY",
  "key8": "5YCnDhPyvkHtz6DndW8DYP3976qxv5QsTAses9BW8ZqLW7X9B2p4eLkuWBuwnZduDin7UjSsoKxaLRrnszvAifDi",
  "key9": "xEpKzYWZAaexw8WfAqxXFPnGU6ZpgazNhrwZmuCeVRpueP723UQMH16juegDvKtQz1nVyZhcUAnuu4HaLXSBbut",
  "key10": "3igAqEMekmsc61UjjhGihxATtbe8XCxxbJdR9B5xPmSLrKaiBYLQRUuxnajGTgJUMgx1nvsw5YMoJxiR5nyjcHq9",
  "key11": "2odPnCwqW7f2Wn9vPWVLMAFxvxA6o4e15Lz2utYYBtAzHy6PaUs7ymj9Ui8bU7VKombfqcWG8XZu31VCaYQn7uzg",
  "key12": "4M23iihbeYX3SVibTj3YTvbQGYA8nFt3jHFuzv2s1U8H24FcMtQPypuxDJTXpJNLZspPdXjXFk8afTzMSvX7XN2M",
  "key13": "2F7VUzTjx5o73L4iKg51iEfDmBqSausVyaQ3SzrjsWcTWi7WFxNrcaGXxTgapRvgzQ9nuffMVX6L7hBSTdxKmsP7",
  "key14": "5P1DK9zFLV3wVSDP9eCM8ZDEsVxx3nFDxcFzCycxZqsgPoKc39FkUZR6KYKVfdWE6E7nbt31yPt4oFAH6toEhEhB",
  "key15": "5yFMEQb7BiA67vNNrr4yt4MgBpEb3Mkv9PH16WZZ6tsABU79UVNsQ3h2XATJpReBNtwiQoJEqxEa5Umye9bMT3ZK",
  "key16": "46MYkX4pmJFeQUHyZ2KQuhSjomH4N4aMc9sJVkm5ecaJE3YxgMEkchdtPYKHk3hZfgA5VeNXBTHvmagxjoudAkbS",
  "key17": "C1VuJjhWAE8PMZ1CYER6ybLimW3cdn34Ebqe8wtyzSkCn3x5ngkRxBoWcq6WjfsUue71v56D8YDni1uhRy4f3ae",
  "key18": "TuhV8L7fg5keFrpkc4DFnu2iAkLsWQHHYGwPx2o1nFfZvqh3KMorawkR2ukvFcjdF2qiv2tvf6osJVsTic4UV3x",
  "key19": "SDEU5d2AdapqcgLaZeRnGKSkSSb2GrMAWP1NFzEcbKULYT29chJyvsPMb38LTpE2sbBTmx74syCfFvB8A4kZK4R",
  "key20": "2i9kfvayt8NykhxzKXeZM8CB4wLqoih5XcQuxcP9MewUaFFB5urCah8NrdyFfMn32gWyeGmupvTTgXaJ8uJkS2As",
  "key21": "eSQ1hsHA3utLJCFNVJh6guN4ETTGreRSenD6CiPFNhifLB7pKTdJ9Bv6JdoZiwR6VAMGttDK6y9Udcviq43nLq7",
  "key22": "3yMoLUjo62jAMcte3BWiRiDgtYMzAtxrpBTLJzuzX29o95RaK5HA48BzzEimJ2DoqqBbRiJMM4dBhLq3sVuwDsqu",
  "key23": "66Mc2L9sT8PQceeEBfygKkvjqKbjnWkSeL8gRKsDYpgWRoMDNBvEJD8g469rGFAAidgqZ2UFcvb5KyLmT98vWGeB",
  "key24": "5jYEy8wzrj2YdKG4rZReDBRz7R5Z4TZ9Sq7zjtJHqRtJHoMt4TwfxZFuewz8GL6PczjAFGpGTqy8y2dWaHLgfUwZ",
  "key25": "2xpzsmRoGzesHfFeXsJGd15W3adTEd2dXHJ6F5VS7QRVUxZCJuwyyxXQcWaoF698i3s1345AHPvMg2a6gUAcT75U",
  "key26": "2BELV73qHJ9xavvcxLx3d9V16P1MrjmjmZCdbWB26bNFxxWvqiKfUtecdh5Ze7eEGTUwzLAyoTLFsYurdeV5Un1p",
  "key27": "5zMQ1mHzho1EA4jqTQurEpBbA2eQwJzmaptvK2fXgwUtoSj859cKhZiSTuNFpHrqd2EYAq7sZ6h5BqcH6m1hL7Jj",
  "key28": "3vaypj8JEFAxxbqwsbU6aiVRqo8RGzjA1ntSawStFc93zuW9ZXofPGSAzne8YFqrdGbo4ZPdRAGMkmXaf8kdYrrQ",
  "key29": "2dtqcrJeyuGygFxqF1rzrWMrtdPKA4fMtbY3cFzR28QbyXVS8goD2dem4owXNYNd5aDG3pQHzzxoDMrzdwvMhBap",
  "key30": "wvsz5fuvuaJxcY3sx6im8gwPdpFFqrmxvRRh8CgoR7NBKpUhoGGcWkoNRm6gA3n2Q7Ga34v9DX3A2jD6pxSSfde",
  "key31": "5FwYhZrxb2odG5qJgRcrYFoji2xZeGEEqc244xQaZXJSpefRBm6GwTYjWUNa8ytDghzzBPS1kKyhuFtYJhAdDetg",
  "key32": "2NsvVRm9hxe15G9J4gUHLzhZcM3x9jVzSsB6vVmMmxWr4HHRCPymvvvrsKvvxD6g3AzuGGKBUPTRZuUTjXYpTGpd",
  "key33": "43kcjh6KhyTFr5WKZ4vWAf9rFoK3JzuSJoXxG5KeCktzUpyoxvTbZ7TFyENs2g75apM674rj1Cyo869mxS2irA37",
  "key34": "YS7bzVihL1u2G9onJRYiy4FbD2iZN8QUTuq12pAiuA2xJEk6C1PLXWVUZgP2oy3gYivk5U67hKM68kiKhyGCZ1A",
  "key35": "FE973viprtyLN3pTKbN9h9FJookWVDfGEyDh1mmDeCy3RzZpKfutcfeViiYSNQSkPWFQWxpDrS7J3A7cR2u6aHp",
  "key36": "3V5UEPe77YobVDmxvu6inAAx1rdvv9NenXmKUfEoessoVQFThcL4JLUxns6qsuiCzjeE6gf1quRYWaHXQ4XTVvMr",
  "key37": "5wUWGmPU7XsVE8LHw28uqhM1nfX3LqScdPEadg15nFFbRifNibEeKmwDnTBHj8WPXkvCzDpAiPrfzi81sLZoqGcP"
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
