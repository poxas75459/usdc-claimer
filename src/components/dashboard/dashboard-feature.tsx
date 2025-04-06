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
    "4Hr151GEv4MxLnioXQ1q9cdY7t8qDSMRM5aM1VK6nZ6Gr7zV5tu9FeAD3HMBPMgh1K9d5FWABrw2eKhPUgsR6tTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJxqSSextjMX3ARiMa7V2hKQNvQaERGn1mEUchbBZ2ZdRj9a6KhR8NBh1PhotLgbHwtSCkJQobqGcbVLUoo4Lvw",
  "key1": "53foBeaFjpeZU78PnNx83vfzjhPwUFRJ6SCdWCJ23wgha4tHJjPRa4VTNW6ju1DxaSo1ePJ4kAb7zCFjEK1yAocL",
  "key2": "u2uceA8oE55RwomXU4HS4o7tZ5vDutBTKABs77GjLs6pLKPnBNrYYUGmoQ8ZTh6oMh2gP4M216dhZUTfEDEj8wi",
  "key3": "hZYGZNX1vaX4dABTo2cPkjucBAdiov9cmiJcGbx12RtzqeNuHA49T45WismDZLh3oAHqHAnyK9mEzaaFScdtAWU",
  "key4": "44cJnEmHn1nfZNZ8XzYoQTiapJJPrwwFqnwGyyMC4EqPyPGRARAWkXV57rUYwHwN3jAfiwv7Gjt8qNXHiTy2PKPN",
  "key5": "66n83S9Ghk8deypKrCY3GnnzBdmRHd3rz95vx9epBSeKnbM3XzJiVfaZdaFPbcA9myrj31zB8beMtGQkCoTkQ7Yv",
  "key6": "49fcrD3ZxnoxZWhetCUY2V43pkCzkcrFBd1BaajocJYgUgjVF97uGm9Q4u7yXradZrJa9DcK1m3ZKY2YcTnJcRdQ",
  "key7": "AcwVrPsJaUa9cZntdpNpMifwTPwgdF9BpWknztUH5QZhcAVY6JGiwGJ6UXTamzpNnfWsY1rV7SNWxwvtSQ1Mrm3",
  "key8": "xcWyka1D5NZzeAChoY8UzG4ZWqScQFPoMf1vjnkwgE4sYdZQwWhkmsFvvjEYoKCF5emJnpRCrgQn8DqqhfmQLHU",
  "key9": "4D4jKN432CNY5RQwaAMhaEBeABsSxs8dF7oLX5WbxHpPLEGvStAocnEYQ4KMEVjWnn6FqA2FuLHxzLAmSXH825Ru",
  "key10": "XayCLa3VKoTJmh1wyWwMDbiTtg1AVsdCa91KbTA371XyfnWeAtq6NRh2F8bbmCRAqKEqmcQ6wzT3fPfoDX7HDoy",
  "key11": "2tpuPAAohDBAhWaTR4BB6PhjXWD3QmGMQ729MCryx4pHxUh1fUZfPR42mDHGV8HFbP3VsgXv27uQXYdccw1wmhyU",
  "key12": "4GBmQjyuE4WsxSKaoJLkUATACQi3nSGdeAdxWH6KjydokGeFYqdy1LSEw3PdXZvWb39gmAaAJrVt7CKsWEXkw93z",
  "key13": "qQpmiMmhuwyoRkLM7fdcYyDTWWZnNDS1ZbiULsJLSxtb5ei6f1q5qTyh6WuvS1WVG4tpSaxpxaRB8cwpEKCQSg4",
  "key14": "5yZB5kPh4SWuGRDYwZqWwHGGcZDZSWsYEAvoqF6ipv7Hw1EcQ6xJadrrmoC81S7agvwbzu1vZUdSi13zx4F6tEPK",
  "key15": "5Jyw9vsePj58rFELDykofAweUCNXiTg3SeWVJG2PdVj6UVKEqG7ykPJYawAJx7vTsX5m1haJAEKWVzxwCy4MhYLv",
  "key16": "dR5NZScEmPDyeuWMS4vsUZWHjrwJfznL66bQAxJnx4V6JbNGq3uuUtwgigsnRvFv24DwySTBehFcvCa5R5ZV5kS",
  "key17": "3fUtPnVAEQejXZa8FnSxBwduGVkRT91AyrRSzjiKN39vQ6RBBUA7Q1oYDNSMZQxDALvoMqVVtYHNE3Z57RexxPUn",
  "key18": "5XEYW76A528iD6AAvZ9dqbS1PiTRz7TT9uyL1FobCCdy2EEmuEvDEP6NPhCb83Xf46FZULoCB3uFT593jZg6o9i8",
  "key19": "3ov7meYyL5YMmfLjG9TeLvkkymYFp32LD58Y4EsQEVjXz8C7RPXsdGqZSZGkiiZZsjUxfdHwYDFcxnQEZTChyhs9",
  "key20": "5wLBgcyYxGq3sz3rKQuphKcJsxbuzkxbCV8dy2sy5WaBrheSsMWbpyxRtqFmgAtKG6aeQotoBofqqJoaG2dogC1x",
  "key21": "3ceaKepB9NDGzPcTeyffk8kPJG9D7wpB55da8vmgdi9wuW79ZAhVSfBdqtvNbHfPL4UXpxWDmZdzzY9xDwJmcS9q",
  "key22": "3EAiiyZ7Yt2jYuHYyXVxZM4gJYEiKMaY2y2XiBuDKgDrW2At8eofNWeWp6drAn9gaXYpa2xGe5CMQroNYJwiNr9f",
  "key23": "2bftEpDLhZbEFq5Zfzfnf9z3qNK29htwNimQ7zcWoRR7qhehrNJMmcnv32AWMsfKuaGFBYYuNj64Bzbd73smimHd",
  "key24": "5k3pn85PHgu4jVUaQaQp2dEvTngnuzDL5oK5NdVtLUrug4x5z9uaBc2EgfsUVkhk2WQ5RTVkpXfCAU5WdxDgfPMz",
  "key25": "8YoMZBJopgyn5STM8kN55qnjk6h1NJFJZXhqjH4CHtcbgeUo2pVHXXid3HiMXwEQubSQ6MFoNurZ5TakoNSxpxZ",
  "key26": "4SQSL9MeBoffmMUAMXrQxG3iW4G9YtPrbZW9VkYtaVbuqmQgr66Ts9XcuAS2K86f1tsE8wT3dUaBpndAg48iasFv",
  "key27": "3R945PKSgkhaLbsCjZvsCtdXkspXAAzgeXKLH9xurZrVEEnJkHdVhfEF77CEZjijzN4K66Gns1ojxxBVgWZEybQz",
  "key28": "2yQb1fp7xoxFBBHEMSjQzcVTyis7qoUxeZMvRTTHgXpcZhNpAgBDHFBe44fcuzu5GoR9haKqpLQkrfufh2XQgEpL",
  "key29": "3YDYDQ6tZnd6L1m5ckAR2qAE9A6VZPyg3PULQj8GSwCyUurB52Dww5F2aWMeN4wC4uS2UXhAmdW7S6E8zKkaYQA",
  "key30": "2fTQsjmepbnaKJ3GRYcgoL41EsLagVASUdo66TiQG1EDRPM9FSJvMs3WamueVJSdiCn1qxVMQDRry8zAhz5TE99y",
  "key31": "4NBAgU4U7Kv5TLJTYUvqVfGrZxH4mWiSPxDmagw5xz5Td7bHhTq5Bu5wXd66cLDP9YWGFpGxLyeiqBavj9RM97Vu",
  "key32": "3B9qLveVhxR6sk7NADcxRY9iZEsd7JJDZNkWymcXRYGBets1QinFCrJNcbHn1XdA96FHvuKgaPsxxaD2Pe6LzaFA",
  "key33": "2MqPgYcx1E9mQYzd3cAWD5DeBQ1Ztp9FCSu3XKK1YoPPTbogjpEWmgyrpFS2vkNHjPQy9imd8zmUXQE32CE2v63h",
  "key34": "24ZAW7XtUBrZAipbtCnSBUUNNFBzzxeKCVnNh4vsD6X6qcfD9ETr1SRnbBxQ6DcpBjUbd3XyBjakAM1vCkPet9nN",
  "key35": "5WigpqL4VegmLpHz3J1NMANNWcJ5iXzLZKCBfR3ph5jQjJP3c9civGNKK7tEfZ2rsfRk1mfghseniPhnsxuSo4BV",
  "key36": "3exZccG2itANVz6mWgtD3qiEh9z7bSrAzMBuFBppRttK4TazkA9jyV8Fo9NJgWwoaioqYMgUXUKUg7hppC8Ktrwq",
  "key37": "4cQmhM9EPtMzZXzj4udceKj4VVxgPkPiZaGZHFUA3yAG6wCrpPgzzttfNDHVMBYJMikQeFF9WeeNVTPHj1wmJNBJ",
  "key38": "Gdcm9PmqJ7DQT2q7BddVzQVbzGHmkydFwBzEVGmTecDcuYBYf2RoFSYxAZEYJKERZGmMrXWKBLoiwgTV4Qu8dd9",
  "key39": "3fS2agHRh7bqFRZGyDoxpXyucGham4ENCLKEQSxX2UbpzPCxuPQyj12YNymoVCuermCQAtsEPLN1nqKDjLgDvpgH",
  "key40": "378LWNoM7Q8vyHKhpYujmPWHv4dtYi5Sm3zTgz2cDuAy6Q4Dqx3Xi1tt6TtkSdtKq2KAv6q8fX2YoJ3T12TPStjR",
  "key41": "5qKcUuL1DdN5psqv4uKJURrS5bW8JjCZnhg7pffN6hAXtuLLhhcoJ3X4JT4uWkKgR7DYajQ1tAUBva99Wjsteqz1",
  "key42": "2cqFcaaiU4ovgCpyFgVGAztPFGdM2w7zEbC6CzbyNbMJRRrnaiXkXPq2qaweY6r32BNNS4rdYHogVuDT7ryMkq49",
  "key43": "4uf9rpNUZ8eDyJdnhd4veWb6eqJuEbcjmwkg6rEMhVF43ZF7fmrYQj2rqgnCFgGWCPR7L2th5KguPXNBrRrDq3e3",
  "key44": "c8eUCqqJVZ64uJ8X7ro5mLV5rxr46UL6xnuaZ2CfLsqan1BRtGL3dHbsrxmMdUXsmuh7gGjC39Qe424n7oBUT7J",
  "key45": "bkfn5rCKUmxhsoBc52BNXXsK69pEgwt7H4DpJ1mVL1YuU9nPkzLaow642rBycqXzS9mZTVoPoDisDhq1k1R8FnG"
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
