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
    "4RovsvKc4XA8ph4obKr5JxR9cynpwbkfcWvKTX5nMS9MWCyqinRne7kdTbnKGjSmjhRq6ZvntTYMLu2hYdy2pGch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42TLqmUKS3KdowbGCooQqL1G1AEsHMpxKeYTiqBFJSiypD3zLWKrMoz843cgVVgeQm8ynGind3asgBdE14kmfGii",
  "key1": "359bAHP2hZvFC6G2sNMvf4AqnPryVL8ETtwWUdASqsetK8jJKFy8fji7rSz3L8YJkQRddDxattidC4Ti87tbWZ8i",
  "key2": "5DTDyAFtPyEyPppTUcKphGhzyKXA2P2iKD4cv7o5R5K1Si8VW3fupizi8KepfaDYwkusk2Bja13gDYzBLsrPAyFh",
  "key3": "3W8XcsuVPnUTQYz5YL2xp7A8EeBsHK4UEjXDBKgG1rVJ3JHa5XpjWJpb4XT6fezvGegcaCpthRYAJfs4RRtv494Y",
  "key4": "2ifEuHi7zkrpAYVJQyksPtHhu4YYB2P3j29yQw32WruxAzxTARTuxNxYAXiG3KUMZeQBKyyxLhsK4Rw8SEKmphgR",
  "key5": "48hNYs1LAvgEJ7hHsd1i5Z2nTcgTPJsfjwFnmjPcmt7QzcpTVBr1Y776P6wFqVh9Z3qm4mRJ74FDBxGwHPHYuTFJ",
  "key6": "3raF5tJNfZ5ZNyayRSdRa8RzFN9mqkybQqnCb3roiT6eJmEeosXN2qJhXs12DXcAHJFXJCT6b6LdE4J86ek6JisT",
  "key7": "2nk2tajCJK7ReGUmCnkWA1A2UCeexMjMsRZvCsrJeGHjJARbJNQ7wusFyTjaGgTsxPMEeSQGsrG2nMvxiA2SQgER",
  "key8": "5J11bJyHukRCNaTKgnysjxd9GP45effSH3cY3JToaPXDDoB54xPTGoch3u6aMv8BM6FZgyRJCt1gU1cH8BzJHBsT",
  "key9": "3TvQ9pRMb42V1QX3s6QZr11ABSoSw4ATAwXj5vFkSDdDy9JwwHUkjdcXqnzp2GNVDYFrNA2WBPtJrUyFEsbdu62A",
  "key10": "293CwW8fanVoEu4uQECB2y67ZUeeHSgtQSbJ48VkZy73ekuLYtH8G1mNTg85k5DqawkfxG1oJYJGNuSeehcDqMxS",
  "key11": "4CVrQ9zmGwru49HPcKYXurT2np7ohJGWbeLi3381ozH29Yu15WGkLT4ZNH9TqkYUNnmuYGb9tLyS2uwQFggRfMfY",
  "key12": "5dCXAoC1cTMTyHruSgGRVy5mojmZkR94vivbLvPoaUXhXhKAGHTZbWbAGtuk2vD5hYdDqcSWFMRms1zB1AEKA5qW",
  "key13": "4vjqxB4YS68UGWXPtmqytN1WusaA9iw6AMMytU3n3iktQ1tbaJGgvSfbuQrW8GVrwFTnfPVhRsSNu5GAQ1fwqWnT",
  "key14": "4SKsdsQkMiBFzMRaqnt1t4UAj9aAgRQgPqbdMkKZQDg8WUXfARqpWBY5h2CMHPTtiFHCvYEGsyFi7rF5BcrqUidR",
  "key15": "3DvHAd1C3FrvHXAiREef9HAerkZg7wfuZiUhY5oAjVJyWauTS7yJHr5DfxkY5z1PL3cTJ2tGKwsS72mMGK1hjv6A",
  "key16": "2sz8XMkGAsPkYySuFVC4U3qWTaKimMpaj9CinAQLopqx3HnuRUAi1e6LhxQefeWo6u41saV7oFrVQ56bA7LALiZz",
  "key17": "665HPR5HLWdx6UChRBtuBYEP42EPayhLfQNrsnfmKPzxLzyQvweZzw76TYf1tzZsdjPkuGNzw8zirjki6zuvRk39",
  "key18": "5pFfBnnZLtWrGYo2JAb41HYgNoty9hamb7gWjo9bR2vCgSoyoXSnsdYwMgh1SwzFwZjfvZP3Q5ys8HgPMqLDEkBo",
  "key19": "4K9dpDAwDqqDf8cYTZ5bur3m8DErRnwVbTebNtt5n9gi6AGM4sEArmvwDT7yKeio4F4BZd5Me6jLwNETECYdT9br",
  "key20": "2Gg8ZPot3z4pbw7UKXgKq7LGEykAVrMi2JzWZ8YsNhqWdmF4p8h65EdXNfnVB4VxcJcHL4suyqMsijdDEE3UrcWa",
  "key21": "5gp6TcYGaeWtAfpLdLS4UyqKumw47wKZhh33nNFyhg76sPCk3Veirb4xVMGLiXU3nmfXaxFq9h8tSmK9isZCFDiF",
  "key22": "5H4v1dhfemJa7pJZEkrtZf5wJr6hdXCHLp27ArZ9kVznFUpYxYSahSkNgJmqqw39XKQbbosa94NKCyw3ArSnK3it",
  "key23": "2Q94bmeB55bLhyEjjyszkb4Cg4f9aa95gBQ5v8CiwCaA6U9GEJ5WjRnWJeStvvQWkaD88KZJryyXbFnyD2vzYY9G",
  "key24": "5tzLGP9bHd8aFgMcw9juX74ZhtAXKYkzMwYjFGkFFEXeWowjKUSvrHWjRWhDePGCKetYJQKVECuVmQqvqU7iHwMF",
  "key25": "4Y6iPjCHhvvCup1JyegbQhTyVwTMTnfHTNKRZBSP5iM7d6k52QfdUFo46RNmW2T6dTAoHMEtTehizXd655bdFQ91",
  "key26": "5VxRFvSvJDfGT2XPZ7MeKhehrj4nLZ4J2pR4ZnZoCh6h6fmY5SjyU6e1V1kEZHXu76U7wnJntEi739ieyRy8noUs",
  "key27": "2HKPHWSuX1UGvAzbrFeeRW17nqf37H4RvYh9shCAXNsW2SXnxVenBW2Z9FxiTJB5S1Ccbsc3R8cZqCoLjDB2ZKAs",
  "key28": "4DQksczFJEHBtzSv8zRtEUSyoRUVzdFXbpNiKJm7KjxYjKjyGjvMZNXup5dkFEqFmGfZPjE5m7HJ6noBmtijd7Mj",
  "key29": "24P2PqrJJMZ7T4PXihtQYH195PBHSGeCELp36EvrvAyDRvzYsGnokeAQoTYDC4pJxd3Rw53jbZAPPkwGdKMZVzKV",
  "key30": "5hvXUg4muzQxiMUAJ4GGGutjgGnrA9TwKLb5EuahvVaaJU8zR63PQymaTnH3AppiPCBTq1AM9Y6HGvwKkUMjty2X",
  "key31": "tqodNW2oFKoRMMyF9ZmCVmN1DXKDsKEc4DTdx5oGLsLhNURY8mw36AZm7vecSM6VZJ2f1LECxd2wy3UxWCJvEZY",
  "key32": "32n198kpQeyPFNyKqDT2rtLMCdQ2NjuZVzcPk3xt7ftr6rBXPhEBwUKhbDT3uxNNkQZEX9LtasdYxi5KZgkWz4Ru",
  "key33": "37zGTFaAmJsoLEy4ZArvmFdEtimuCbfP1WyHJx8Q2RWymTNXgNXyMjkqvX3ATq7R3f3QUqC6kMTPRuGe3aiNjrdY",
  "key34": "2ae6sZVb7zghAwXGgN9AshQLAZfkSU6WHk3frNBrzzE2gJXakWxusdFbs1jDEJzqUsevYNa8AnXv5Chk9HGvmL4F",
  "key35": "2XwVhhjiuQ8Z62nkGrpBaHh9EkJuUSZzzCKpkJ4oocP8hsjG4Gv8MiQJuBwTGZqoBirwfHZNDLZbjTLteQtp8TNp",
  "key36": "53dcbjZuAmJVcdxAX9m26F2UnhG68RTfJrVk5oSDXvvxEqki11ZHVUDedw3BivNsTy62bpGAg5PFEqzW8tfr9UUH",
  "key37": "5PvNVgPdsVVJu5M1QjFqWCUBhPaxbSzCj3fVixfSdRt95Pb83ihse9YVBSgvFgtx8TErVsGrjzuLYd1HBtpsLqFi",
  "key38": "5TYcfc9ckhH6dXTqXgcoReq66UTrBg45QNQAPaibFYoBywz5F2h4bghcdcEiXSz3d6bKQQTQMeHUu1Fvyk9x7tZS",
  "key39": "4RBKQPs9jj7U9kDfBsCFp4xw2a8jfMD1Qrd8bTzasdv5UreWCotw3UYNNkzqRfBEQNukjuNAdXUxZ45XdaDCqzuW",
  "key40": "2KD9H9MnG5ZWAgZ3rU6ptnRwRNdoCqEa7RnNGXJFthe2RuGYJfRyBe57DSTBTtg4izaep1JrS1xjux3qStpdSHjY",
  "key41": "bFyXDbrsaFGwWosMaLKuSVyMi3ZCRgp2ZjALSScY1kmu81LCBieLNxB7gQSNmJE3zZCb5bohxoXr9d33Eb3BZX2",
  "key42": "3UJxH86w4rMUU59QcwZn4GfNsWM1iZCL41QCBAveAhFceCuJGkDXvqS5iUmFoRLxGWMSEM4kAa9V75yu7XNzaNBC",
  "key43": "2uK4TvqhDh7xgv5iWdZDjgshT5tfvANPXRTCzDGS21ESRL4pUDmX3exZ3yMATc5euC3HmwVsAq1sdeXBW2fm7CX2",
  "key44": "3mR6wUFkaVYBHgjCU5o4Z28uxj9NUNK32bUdigCtVt9YEKg12rjGvMGfWoNgVW2VeqUPBVkDYAFFHDgpgu9skVrM"
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
