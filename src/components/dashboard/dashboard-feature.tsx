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
    "3xPh4ZNdjCfjCoSwpa5uLbxLHhpUJu85aWVBF78s9Nbu5CtF5RWL7wjT5xPB2hjuVwZHqs8duneerwG1wLGAvgEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnqWf5VpabmKiurME7BEukXD4UTUHqY7FSfEiAGSTLQz7YAppoxEuNcGFGXZjumwxdWGg5SzscotQyqP5pgvpLt",
  "key1": "2oaftMsimNzsJAJ8o9AUnYWyNVUbNhdeNLwohxLojK2YVUfBtTGNwy4yvXvhtrDC6ypWLNuUFPbzsFx9u8ey6weu",
  "key2": "4jFVmpWzMt3FigCjhkm6j1qds7XDKX9ogumtj85cAHY2461dCzJXXFqyDKXcVy8rQotvhCYJcVYK5JuT2Xw4gsvd",
  "key3": "5qSCniyCEbG8k8QpeHfDP3DTStFtmZJgfyxtbZWX5HcwtTtc9exiDz3gvWYW7MxnyFZuuTMgtSxedds8BseeHwD",
  "key4": "3tGLX3jZSUopKddHdRLwJHTdfSMnpS84TwNeB4w5uMMfSZoHHMmo6S4mRXW9SEMoU6iP2dpuZm7GD1hYkC8FyBhF",
  "key5": "4SKGSSyq7MSF3x55PZQaD86wFXUejAqM9UKMhFTpszxay1CctjMRoL3Te6Deb7PhE6NdsF89ueoYsYu5QjrjiTg6",
  "key6": "5De77hDLf8mgDaTQkaNA7uk2HB8WaXwa97kk6icunHzKMarfkuzBMW6xhGqkB4bKyEaKmkmAheLPy45E75hZaqfo",
  "key7": "5gqnvVoVv51XD41UbbgGcscrKdhLJNiYCbLRJ6T7ofB8UCbJ1by4vzXdGGMdrZobXnc178EKz9reJBA2AY3EKy6H",
  "key8": "4v8kNhH2Jra1gYVMySrKTfArkASFma8kZn4K3vh3xgDYqrSV1Q68KuG2P5JmyzUtkai7fiKPtJXnipavQa2yEWjU",
  "key9": "3hE6dk8uMGRYvh3uqHVy9NQtizkMhcJrxCR9yiPzgEurcWvpPSdCYx7symjDgnFfTJo1oytqYKDwute85ByZFf6v",
  "key10": "3C8gS7toK7zZsoyjVAUowTCkJoB6ZjCfrerPngLrWoVzHLaGYqjXgEGy4MCPrBx1KWGRu6RpCQTGoGQiY9RG3ymu",
  "key11": "4skT5TpkgRAxeDr7QPP7pajMEgunVNaXKT8C1z5LFZ3CpG5hx3RFc1gKPeZCvgBKJbGxPU33HH2oKaZNxo7Qfedj",
  "key12": "WCv6tG9cpcht3h1UgPP7FwCg8s1oArsBraKPHp1zVEzf4bhSvoaA1ugqyg7p1PEi6hGVUuv79tgW6mk3HNuvQF7",
  "key13": "hByQVX7Fucq5G8s3dFMogkH2ZuG4cq26SN3jc8u9LqFKauWeztyAKrLJz4EDaH4xWL95FhhxvZ3oMzaGuHwWhd6",
  "key14": "36yr9BEY52aHYR4rzqihKJuxxNJ2oF8KxLWy1YVw6pAPFPePBh7dBZw7hctbAPdAt6fSK4VJXxqcYZFgMMc2hbjV",
  "key15": "21jqo3HFfM4m8pAyCDeyFxz5E2kkixPzJq3TxHTGVnhMAXFngmm4yibWft1UHKod7RWMNnGpmek86b43byBytzhm",
  "key16": "5Rp1iKEfyCmrR1otQy6tFV9zefJgVhsFQDHNNj9hNXnG341H7UqHDsdaMqDY9QRjckkUGygmWHEFk6wTFgEpNPaP",
  "key17": "ZxJQgX9h67RWkGEA6Msm4EcNYVzdrSqK9PLXRVaDwSR3SvQAvbYZqTaH9qXavjFLXWpExq6KarEfCrDoUXH7raS",
  "key18": "5Mkkui3omPoBptqutKr1cimtUiogj9BZUijedoDNQXytGqxQAYixLRpRA7TAjs6EvWQjdwSjnPqKrbyimkFmnZ6U",
  "key19": "JVj7dSUkHQEFofhmPD3ynyVSNxHVGHn7VRkZZHosTErAv8yweRof8SzocaSjvbLsPVjWZ7skQKwHsY4ex3KJQ6L",
  "key20": "5di8VymqrFs688onbWVudAfMfFcFwAYj666r7Gk2fYgFqCGuGaav4qTmDcTsva9G4yGc5TpgHxmG8o8MsLKb192t",
  "key21": "479wzVMbVYQ5XVMPQxjb2FejmRbXFQ4BfyJWfSCfmpfGaL5vkNoXPatjJHdRUnGXAYcydw1y3ZN5LtUjf6vd7m8g",
  "key22": "5LfUvmCQAkyEqo26YvVSu4M9eQ6YfyKJXt21893UaepghAKT4hvb5xo5B4BaXcegYy9ndZ5566VmpHD3h6cgV5bm",
  "key23": "32DiUxZi7zRkgjdmKeN9yEVw5ALDzj6SHaf58QTL9UJ9U8XkSzLzFGo8pVEyfU8wFWjWZ1xg8HX8vkwYFyqw5D7C",
  "key24": "2hQKtEw5sS8bJ3jca5WRkw5SUmz9oseRJ3xckW888DpzVvZc81VLdimRBZ2W17Pu97Nexb8rzdkTCLxvSNoMYGFP",
  "key25": "4KMQzmHBm36QGCNWW49jMC1HmcaDSEnYE4hSYAZZYeUjarctULey6r4NAp8p7KXZARrc84Ka9nfuBPnDoLUw4qLW",
  "key26": "apRF3TwUZb7aw1Z8vfAJnpG3y3faKGudtnvC8BF55qUiQLwbNbcbrmm3pppnk9f4pPuUwyCa35HEgLnEGnqE8io",
  "key27": "jAsLwdVjjBkRUASwSoZzA4kh2Wow5rQ4R87K1zooTTkqUK69zCHAL5ymgWKftZGctKGbLjUyGiWVjA4dvjrqtzZ",
  "key28": "2zwdfAodftyxocJzzpDT8whvBaKh6ChH9NUJpcqm45xNmfaNMw3ubJAJkNgeRPRDSf6DzHtQFLCBQSNKZm2hWX7N",
  "key29": "3JFU7ZBrZ5KNahYGgPjwakhiN3mCz7Mejbvr2KRP9zZ7ufZBpJsfQNay31WE76G6yHtv3KXgpN22Bi33n4MwnCk6",
  "key30": "3xSYr9LHLKE1rgUMHjhQVT8xG7dBn2mrx8egjs5VKtTAnVs9CDDD2GqMtp99iewnE8gAMbPgXSQQoMe6fF1gudD9",
  "key31": "51a322uYmTeFUMj3Exnnr68K7xfSBJtHiZ9D5q9PgHtbGVTxQkXC2ZKMVvosJjpJBh1SUQGRgNHzxuK4bTCtwQkn",
  "key32": "4jBRtv6r6x9MquC5BApnCT4nZ3yRCPEsongt87wZqgpy4rqpdWTLrYzUKABhbHdKFCWHKj2hhi8BxqTNhemRemEe",
  "key33": "mApBD88WLYhDDJs8G455K5Yh2oCkfCnWkP98YiAAt9AWuvu6Ez4PzwDADV9atcrYrxSJbZgBdNyUFonELdiyCbE",
  "key34": "jH8jnEa4GofDyxTGRphHufPL3ybbGiR3YVuwuBdk3L7pELGs6upuk7EsHW8HY4xNjioU2S8DH9KCVjxkyGfBLoE",
  "key35": "5n5STZKshVy1Zpv6tKqbe7m9KQssZXkFFxn3icksaZiyawUH9PsjKpbGUVejViBhVxKDZAvKHhcpTXTSDArrJBjo",
  "key36": "5nR7BrzshNzryPQpKcg7z9jgjF2W3nHT3ayfPkCfV32mymr3rWetM4eeSdp8UahgcdhgPzfMLU4j7wvYw4NYG2bd"
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
