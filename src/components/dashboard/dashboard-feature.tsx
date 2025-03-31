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
    "4kAudpSNAd1J1ewBXcFE1YPvcdhPoix1QmvKAJKYnq24vs7foqCGxf1rbWx7pc7DrX6f8DRxPNt7dRj9gubs7PUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vi9r7QaiH4KinFtjH2sAXJdkSv6rWcNCaSCdA9Vv4SqcwNs416CUyscbN15aMCY8AtjvnDEGZLE7nVS7qjnkVQJ",
  "key1": "5eHhPm3g4kFyp3GKvMEQuTMuHZe5v26MYNW35uwSTVbxwZz93aiULUEPgZUfi7kcWxHNQR2ESkssFwFjxwnHuy7A",
  "key2": "wjc1a7TrKeJ5uZJSL2eGUVoMzUmUNPuF8DzSWgELRgMuxJnCkCZ5nh36bTxfCzmi5GiRY4ep7NLnQ5Q4LwChsJq",
  "key3": "3DK5BwzgDM47TRnAZfSjZ7dniJszFCc6oD5xsT8rfBhVLwMNkYnzd9gyJNwvwMH6juK2RwZydNaaJarijFkc1bgN",
  "key4": "Dz51Hyf3QjW6HFsxfPSuso3yqb9vxtsN2gcENPuTFzyARwCWMqQDq5XPM8t3zGQG88PgLxVAVCiHdcbXDJTKMv7",
  "key5": "2TQdHWXFkguYnyMk91GPdACr8LR9x15ifDDSyuPTw22qYytDWGjqS63NndqpaZ1G4pFWoW1tmKAwShC19jcDwhpu",
  "key6": "4L2Z1rS389XWoeYvco2UGWpQUqx9Jqm5XzvbMWYgAM5FFLjeR7wqn6tAaFvGa3KtpVZPwgF45FUN7rDQUmvvWFHC",
  "key7": "5dYjUudnEsvPADx5e3vEBbiFfT2L4ET3CJ7DoBndZaebSaZuv8V7mjtAxoBrf9GZV6trF21W7ytVTj7H9Vvswvxh",
  "key8": "46nZBvGw9AeL6SGZXPYpwDNnApzqYMLDJCPcj9vScrQ2vozEgSPSgCfKvCQuMXEhe7kuB1isdKhi5fuBziqDByRr",
  "key9": "4o27zXjqGB38jB7VV98Gip2bSXRb94EjS6k8n3X1sXYP2nJfBoRL7P12QiZAzYYtUGj63PmEhsDaoukFiwpgEtKz",
  "key10": "psTn8uTXfjrbaE2Lyo748uZjpPBTw84pFTTn68x6vgLe9778XyVLQawra9cfaaK7s4SEqcr5sF9DMuQhFzeLWsZ",
  "key11": "2QsQY2cnvD3u1pUSNnEsLqh5Y3bwrqbo8uuLTp5GJj2aM9cQxGAZRLgzmn8qWh89xfGmEoMKrmBab7r4pp3zLjaU",
  "key12": "RN8XiBTV2SpkeZ2e3bSicMfcRi445UjuhAZRSLfwtUWprPAb7dcsh5FZgSnkkKGYBK8C8GJEZYT3wB2FExhiuLo",
  "key13": "2iTSFQ4wcHVxXjzop7fqQxzJeds45fxnZ56YeEfSG7y7bTQ1GGbdrrfWUpUwQ8HSEqXxDhzNZEbfmfXKM7k93WzU",
  "key14": "4upX8T34FHtTmRox13JhZaQMbNMhwrsGVkVyJrsD7tw5cfB5UqdTnkwJR9xGL1wurpM4qnVGKPqmHyqzUtio7235",
  "key15": "5iKrVPv2tLBthhtwfuGzZSuz9xfEgBmeZDwHLKcaPNsE9NMsrpKC1pM9YZ4YMNevafQUmKrLPeVwsf7nuKUEyKWz",
  "key16": "52MSs6hLjRp4JDA9StSmQBreuXhdpToNsRBBVtAtVnT5nkAvTYby9DtWndcMT8vWdiYSJ26FusHtksnWbQ9rmciN",
  "key17": "3ruMQQcKP4DjkPKN3CT8pyPYmGiqiEZpauDF6KNDKoRYpo2xL9MHymrMqfLuQczjQgQQLRtVaXLFn2bHmWSFrreY",
  "key18": "3QB9am81JHqpEDCam9bfdEcTm8wKHFer2sES75CSKRM7pjNsXRXAWvG4PSJxuqcrxxgASdattjhV9PCuKyEneVQr",
  "key19": "xdLeXpAzVjBHMcowJjM25VQ6Z8GgmBwxi7pBnpr1rL45CFi7CkMNnWMjxaYdc1uxbozp8Aq5RpTgTSsxnK89Z1m",
  "key20": "4V1B8xvF4yBCk1gv4S6bc7mudJ1oEr7fof51pwHG6G5yR3hnjK9z1YJPYdPY2QhfYRf74Qx5ikPLZVo3VmMQHvYW",
  "key21": "58unfUnfFAWeESbKxfDc2c48KxRquQp6REPnJGiyCST8cLANjMdFh6TRQyTTxcfnHeQpedfHUzzG4H1T13YSWrEY",
  "key22": "ozngELxfKQXZHiuTUmuYFaHTcQqxBoKsy2hmFWmyKnv9osRVzabjJjHB1vKzfRsmPmqsMmy5Bn3e2kqua4X6zdF",
  "key23": "5jxXkiEDQDhda6tmRT7KPWLNQm6EyX3Dv9iY33RYK4EzdpCYxZPmx9Rm8YLNU2uhJnJZi5uKoWkodpQfGfh9rFiy",
  "key24": "DbzH7CfnG8GPAWDnF5xLb9KJaYhQ36erL2S8qEvGog3WedR8gbdUnsaN1fq3xGUCyKvrogjPwj1CtShaDAx4Yx1",
  "key25": "5pbJu5N6rv8b1jixkk5FajhvZxbq1UfDbDgnqDMjctCXMcrXrTeHKd5vpjpg8NCZ5bRDwwGdYPKXD2QrGdUbEuGe",
  "key26": "2LomiEEWjxHtTHzEkEQgh3QaY3CE8SQgsAGGY8Z9E46cGxJNjLAToFDJKqnDJncSSZzF1wUpi3U5MUCbh1XrcwbL",
  "key27": "2boM6BUeix2TbjNb9wtLwXWnFQqjR2obbEVUp1j7o9SyvX2o3inDiaxLWKoBpusmKf6kxHsrXpwfDpsyUBhDkise",
  "key28": "3FGek9bvRiARU83s2mDmQu1puS2PcmBkrgtPZBriRyWXjAKdbHL6igCi8rMTd947XeEWdKYeNqCbg8WpD5UuemyB",
  "key29": "2WDAMzDxTMitRMX4WQwiNyM7ucUyPuJYM4RCNHkK189ypE2iv78ryKgFN75VPVEdnBe3wHoYAftC9aL8exkCff7d",
  "key30": "4yfM42VPTxrAxFqQZYhFcA4G1g7UPA79njs4xGteBDsuJyM7s5ST8KXZuZje6gF3AhdPjAXuJjsaxZcJeMRBvES3",
  "key31": "4N8WK8J1VnvfgVWmteepdv9yiTybqpC8VHVb9ET23vom1CFX97WRjwKNXEyd1ZGVpY2A2B8Hj8UVD1etauMG1PiR",
  "key32": "3tADRUFsGQP1RJTaAh1W2FzNG1GdktHit4cGqnRpXP8DQkf5E1Pwk7A8zqQFcYRtEGCP8kUJHscB1PQQGDES75ui",
  "key33": "3JPggYayLYycDH6aBF5HuEdFFgMeetwB43qvv22QhTo9eEfARhc38wwRRbsTuPmSoLPjL4EtW3uDy5CLJB1jrtDm",
  "key34": "3a3SSCEKHbmDSRYrF25uzJJrJHkVnyCf17YrvcEmXLdD5MS1Xpd7Kt5KNJcPQV9D4GzKzCCQMm23r4L3KE4Ls7U5",
  "key35": "8JEfonPeHTNTqcRBz9Bvj4ukdufUpG6RFa3nv48ith6Qp8GFZvTbmSAjDmd7cB9UB1WVEanauVDJwP3DP5L4PLb",
  "key36": "5wm4KBdhsUfuYXyBqgnJxpnagRYaU8yaRnY4iuxN3mhLPQTZX1CfeDP8RKsoSeXM6PWaEj2XBdTxskwKTomeW8rr",
  "key37": "5J8GBYqBopT9NgV9r5rgh7MeURKf9RyUySiWMdMuzkArFVzSKZnhQ6ESsBEsvZuS96pPkuHarPx6B2H33Hs1BT4u",
  "key38": "5wHdhWCzyCCZHNjNfWgbda5ZZ7eaiucfnVrtGG2YWrvKpqsePsPoazX5nDXTsGzTNRqMcLJvpZywoBys2WRLfQWK",
  "key39": "2xgFZr1QcYuKskfcdjPK5ouE9Hexo2pwmbhvRwMg9UVCmgguATPg9wuR1A4jzc94Z3cWxs6mehqCPBeCR2NMkZ9K",
  "key40": "3xCY6zzdmxs4NXvksH1B4pevhsbrhzk4qokPueTcBoUyVtW8hCJenJ9QXyyPRPEF1eGEpV5ubsWtGQFmaN236jFJ",
  "key41": "4dzPjRZjEiopj4XE6o9wt5m25EaARjPdPMdxUTg1C6msCcHbZwqAnrofHpUdpZG8X2GycHkWLjabU4a9rXu6VzzB",
  "key42": "4bDb45f5BkZub8F7PzVu74iyKB4x9mQFRRfLHJRpZHWUNppYqgTiehH3sNZ3Wvt9xBQWB8nKU3Uk7WaLfQS8yri2",
  "key43": "34qpSQ72bnt8vj9TRnfq6ZWd1xSdvkUFNfNGMnp6JXLj88fSanT3JntWgSqEgYTzWFsNPR2sr4LtQQVcaudUGJeR",
  "key44": "4srW389obBCtZUY3ek9tk9XaagfpJqo77SxaeKvrWq3ceHkDFPHaa8SCBoKZ2XnpDYd7CjqsDicZ7kQtZgPLt3ke",
  "key45": "4QiVDKuGRHvmBqzmb8JbP44ZKoeSKwcfVQ8qLMaYLi56UnrDua1sSCkQT1eC6xJjUakE9h3xiK7ZJiiZTLZ7d1Yd",
  "key46": "4v7pGKLiXbKWwULrcarFirR18xGbTsV3WtV8dEhCBm9CMuMTjCCtY13PWz7SAMu9cHU1rL4RAQgGJ9WYpsjrk8DN",
  "key47": "5eTJmDSuYqG2rkizApKgqy62DxtCFKciedS4DFqotT825JhcJwwfEatPT88kV7iyAVmneMQY115eNc4DsNCfz5nt",
  "key48": "3huZzFZ3MAc8jCpMZzvxGqbURyJpk2Gt2yJSt6aprRWZGdpo3hNe131mFyPSsCP3je9wMfvvJroMMpQ52ZHgWYhU"
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
