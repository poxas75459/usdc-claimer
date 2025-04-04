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
    "5fbK1859gTKJkZiwu4CV2wjxUZo3A2UaDsgqtR1w4R2b4iDXj1nqjKugvezf496XVntDu1uqbz9cGGpeYnjAEext"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QqJi9heV7vGaKaaSrUk7YDUHuThm5TyHFhTn77m1JsmWcwipwmf3Tw1UDNdWUVd8TVD2TJhiRjmF79Rw2xiop1",
  "key1": "2quyrjjUQG5sXtAktrURiJfwA9qyMsQHfZUn7LkPcgcn9njkGeczagUqjLGFqGfHirkGuAg7jmovaGN9BqAGi737",
  "key2": "3bm8gsw6fCrBTKuKoU1dgK5y19BbN8FoxEJsfboigZgzh4bjwKKefbi1BbixfXP8Es3W4pDYmdGq1fMXqaRBCoPN",
  "key3": "29jZfXwJ1ZcwspdvjfbLVv3QXMHEP5CrfXfsGwYWoDUHDRv4tT9wjztw88e8jR4ucDpPv2vxVnyswYMvU5NFcZad",
  "key4": "3Ezp6JDsttCmELdfu8wFmeJoWqxyTACHXAFiHFPSqBWe2hzdYgLFBzoZzY736GazAUAmaNjVyX5558Yzh7HtWkxj",
  "key5": "2e6nCapdCT2XQJzTvYLDcTbDTz7Rwu5hENF7DpSrh3rb1D8GFwpMDRpChTkcuiE6vpKfvEGMdmZcCeRYJSg6K33Y",
  "key6": "5GtmARNjqpcAB2B7L1J6DuJiSx599guZdt4CLFipAhWCiSkDxKntuLHLKrRyEA3xmogc6fEskaEc6C15TsTK197N",
  "key7": "568CwrTDAq7CpKryFoaWJEhkKU2mre5sMLMoQFVs2K6en6icS9Gck7RwXpc2N8nujvtthRXYH3zaQzjmaGephk8F",
  "key8": "4aQmxe5Goys5yZSdpbiAWYrEMXCwBNAL3ykCT2ctXnsphzzjbTXSqjcDbyT9VcSZ2DNE6MMUv7b6zpF2bCqPcQRg",
  "key9": "5c5wd9XLJcSHyT5fWwKhoNLEzV8nXaGMDHgHcYfJMNq96NigmQ6mFiRyV5GWHY1t7fpti8gbXaG6biWTnjDYzCyM",
  "key10": "61PjMhPkfJmoD1CGXGqv1LckveZSscvURruCo1pa1jQ62pocGfnsrVttBV3SCXDX2xu58qiqyniicyo4c1bxSZwe",
  "key11": "5mP5XQa9dLhGCfc3Ya5EwjvTeMUWBjeiqb8u722QPaFouoxL6CsG23kqpF844PRGZLQQgX5ACiCLh3nGJ6QHXR4W",
  "key12": "425YSZnPP3NinUFMpmcy5sFumhCKzHXJSCwdUuCT6eDxvXtyE8nYqPWSety16hfb1a8TY8BeFHEE5yw5GeMUaPbH",
  "key13": "4Xej5pd9JSYZbDiUjmrTavG18srsMS33R9nCuVzrvnNvScqWcdUGdPHuTFfW9uXjyWNHNGU9VaDGAYEp41iRNXww",
  "key14": "5zqd1YDyFT6evUj6pygrFkyufMHpWdKy5R7Xc35pmTbhPFRDeik5szsJ6BTZDj9timEs4KJB1Y5gRv9ghEqoujZK",
  "key15": "sC8TmbgAy3gDzKhGysoETuT7RxY3hnaeBzrMT7dXmW9MuvnL1PFWTodnTGbcSgpj6riJS6PKBkD83EuVvrKtrgU",
  "key16": "Sf4cCxF5zc1M5eAKKNkLALWwAyn3VsFUUDGHwKTF51gmhvajvoGsfs76eZizFT1THH6YUckeCZKTMnU4oD3dz6e",
  "key17": "4aHRpxxSo2zjeLLnZzSSCvG1kK7u6LwAgssuDSDyvMfuHsphbKEhXLewZPEXRwL7NhvUQYpfbxVjeuE87g3pATcU",
  "key18": "5yCuWBz8gaFpN4Qh526oroDYK63JsognKFGjjy5njsrhyqVSR2H6PESmaCNpHG5xEt4W69sq7yYWRTUa1A2MjLCQ",
  "key19": "63VLPNsuHvnyQ8dnPFNQRNX4QKa4mdCtfEP6VsyD7QS9wsNA43aysvnoMxjm468oD47agyexTdWGxcAVSGKXR194",
  "key20": "PeGaKAfzYJtr4cQFd9cJXqFFaQGWd4jC3sugczUb3pJBHsKJdaLXD6Nt773vWuFoqfFVZS6rThhDP77Hfc3HXdn",
  "key21": "3op8AN6hmb1w1xSZCZx88urgBzbzECbnprQYQsAuW1rmHooYhXzwCdjRFiMhZp5dnpH1MjNSbra7XW7CjAcxNmN5",
  "key22": "5z3xmCHx69UQbvKjNEq6vpXjfFXbVa1mtqdWFUYFJYUVApEDx3VimPkka3jKR5K1u2EgsC5tN672iDqZsNXNEduw",
  "key23": "2zinyYbKkf9Kg5chRKYGSoAhbV8uBFTKqJe35UFo7X4a5EiNNkci5xBu9GvVBLC8ytCwrq2c5rCJjwR3JQ59Tc4b",
  "key24": "2U9WrfG42XgMFdM5CfiZviNhTy8wMyzRk22379ge4EAdvFsjrkbpNnqsJo7gDehpuXT4rfQiuUgxbHt8FiGyfFj9",
  "key25": "2PDxThr6UCWatkpBh5EREehkSJmZHzSEKx8b8A1CYXHopRiPAxtW91dEZdVDz2C8ftELB39J9AAG4mFN6v5Q352A",
  "key26": "38rJHH8o33SLgVQk787ugrWvJK2xh6pp9N6GHQkWzhn86pzSeFxSTeBf8Lu19DcLMDdKjXFxHY3gkD1AUAZR4T8F",
  "key27": "DLkAFuKUMpvv27qzxTYZ4tKkjJvniBDzXQdPveq3aqisX2pzjEzQXMHtZHQBUufNYpKYszAdxLHN34ZojsWq8ug",
  "key28": "3np7CBqwC4crTWzSguANaZnMmR4M5aLq5jwiW3ReW6Kj3AsET8xFJzzZGe6DWrHc56fLz5ZrhwCe6emJzprycnMQ",
  "key29": "UnbhnKzMvUC25EQ32FP8Z6QCCavYEY2PJSr54FZT4cHJtuuua3hSATsJ762sv2arRQaApapzDA9EhV9wYBxbYS6",
  "key30": "5fzNizvK8mj78YsfeeSTQ7hE7wiNquTTdUCgoJu4x3yErMUUMdjs5U9N4uPKVQehy1hn5WVEL9AgLAnHVY3X9ZCK",
  "key31": "5SZeN6e22YHHRtkb8FecXP5HkSm2DtW9KRQYfxpRs6pdSq7qdxaUWtbbGeBwNmzTGJgLnx4MfMriq5hQhiTFdCFc",
  "key32": "39R1tgabeSvaQbqpitQmgr1UkhaCVuMzDVm2AieNjtUgLGn4oDdfZWpkJ3Jzu7MQk5gXbuufB4gKugwoDrVoGEYE",
  "key33": "5etye4kSnsrz3VMkWU9Y1beWHjLD4Zpz3ze4NrKwhT9dUFS2FCeUdTA22DDC9m6EY9GoGeBPErMn75apGgHxrsr5",
  "key34": "54hVy7s3Xx1Jm5uY6eGpAAtvx1P7yKE1KxcCVL4urUst2fZh5QUeowaCG5SBoi4h4LRGP2RN68fuM4miSWErcfUR",
  "key35": "o8pFmtuomEd9LTqTHBWDFQwhsW48p6cFxBGfaPfdauMu812nZzrHoaKKhpcr6esYnnhu98t3LoJyVrTwqRjJ9ny",
  "key36": "5KzwjtrELCBKEq5Zmzfjz44dtEAZ5PkpKWEXGWC22or7JFpb9UkwWpLoeLPmpJgHY3ZVdtfz1AtD4F7YSG62f9WJ",
  "key37": "3EHVHGEnXL8qb8tDsnYrf1eriMDQw3bHDucsduZrH9RBpa6Vcek93piMZW47oaCpYxsRCkQ5ei5fhiA9AcQ76mL6",
  "key38": "61Vhhhr4RTG6JwxoUayWH6FbcJ4K4mE5e1euaadsSKHPpBRHfHgD1z6FeSs8TBsqDHN4r2Sr2GBrv4JKgTuVCmcc",
  "key39": "2rtNsfQJUkt4M5dwN5oYQEiosbxk7R5SF8756GdFJbYsrzGK3iTSzXeG33HR4YXe1FGWPtRggQxBCGzVdn8TZjSM",
  "key40": "5E15cdrKaNRBJqar8jnHRVAmfiJvNXEMm1cgPzGHnueejFwYCGcSZhNqewfYSA7t9afLW1XwLg84ypS2AGTkbvyK",
  "key41": "5SjH64qnPMfu7DVABYeBSoZnroYM2tgMsnRdyNMdsLqG5L82KZuH5vpvuW9hsdmGnmTZf95EQVHmbYh5ByQVyrLz"
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
