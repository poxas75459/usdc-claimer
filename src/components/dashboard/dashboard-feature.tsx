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
    "bVHewq9R3wEY31aW3FpAN9oXNEKQiLXXG9FGxMrEgBr2i8F4kVkvVZZcjMiHACYwWDEzHdD2oMrA8ZuBMFrvg2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCH4zvxk7bAEbmChHyENJQKjMWPNN4eRvXXWKAMvdqJP3VNXG1FvMg3nAct4AnNka1oxpbM1wrLheVz4LVsDcXQ",
  "key1": "5HcKAwKkoq5VjR1y8VFG3hAo23sr4G8bZ9rPiYhXfGcPBhHum53JEzc2A8NLkcY7WvDaZ7ESSwQyVsCSCD1fVg7a",
  "key2": "Fyw1ZjUMLminyL9sBfgp5NHeTLbLLHswTXHt5igUuEPnxmZ7snLbeBqQ7SQ2WxysWWR695TxnGdwpKzgW3GU2cU",
  "key3": "8pUg54jcEceB1bd9NEfxzYPGyNqoC8juHZJyV1ZYv6uxTK4A3XqiKbXTwbLKyyPNbp7f2nLY5v5xgicGKRYA8UA",
  "key4": "5sgChebFByKRzBuWmBRNXL4V97yq2b4vvaK5iGaUaFzwGkMEB3zPy4Ku6JMS97PXD5uFYbSQGVDw3BCNb1FwU3bT",
  "key5": "2rNLFSMMDXi6G9ZtStnSpAU3FwQR7aVpvQJfUQ3LwRavR1nGnYa4VkMgiUM3jdPriD9EZtS7hFL97F71etMsxcs2",
  "key6": "3n3JkeAh4reyqg1ofVbSFyeicLsFNxGPiEux6Dy3RUHzC4xVMyFW5NovRy6iVHfAxdnjL9BpMkWCZqDhfCGRuXF7",
  "key7": "53vqHn5G7k5yu7Gqcd6dnEUD2kZn6AtH9ffhrEY7fJmf9U8jWFYKF2tFnW9V626a45JHm5PNVbkiadwhJ4Qttqck",
  "key8": "3q4XJCgmyPtLHdWyjRTjo4x9aTH4TMnL1299EjeVJwNLWm1YDizUB7JMgcq682uq2Scg1tag9jzq2bTh5vthFBv1",
  "key9": "4ZTD7By7FFzR7QK7iTaGcX9oBsxRQWKAxU8CrG6RnzXMBudZmwDLMF3BEkzQC3dAEBKgP5jDc8PWpV74PuFP9f6c",
  "key10": "X54L4ysvGuxEB5AMGYegFZTvZXAjSD7ueiTrBwgXDxmo3ikwdDnQSkVVQPLxPSrifFcnid5rZveMRCNf2565BAv",
  "key11": "q9HRfD9GNqK3pDvCG6E7TXcA3pRvKxtB9tiMgiEyK4yJMQCpRp72TyFJBtaSNKV8pzXdnZLVZsvgSy2EVkiyc28",
  "key12": "2d9uVGZBEJ8A7JXsC8zE6qq6rqYdcM92sRHW5LoEgsote1PEQyxZ4dvAmtxnHmLojTmWs9b1nbBtNMvjmJd6BvyR",
  "key13": "5aAvZZdxUxZ7FYfhVbzKtNfXTvPeWzpFNhNT3UZBh7KDw92mis6nNTZqMJc1piqxMWXW682zBXeHT7LpujJBB8Jj",
  "key14": "CUfTjpgspbRUjSEwtqieXW8v6hS8XJsXNH18frNfAU7BwP7utGike6uPLwh5borUZGRQdpYWc9ycKRWrMAJeWmw",
  "key15": "4Nqzqz5VVwu6pRuoBvXrnXB6vwjsJHR1Zqb7sGCKmuH1BQst3axnfKeib6zupCkSKFiyiHHyJENabT1xB8TeHJwP",
  "key16": "29XXYV4zwJQuC8j4XjXnf7AEpwy6kPAegQwkcBH2HnCtFuNbUiATGTqYDpN4ttyCFasTszAgn8fx6YtUe1BEFb3s",
  "key17": "5tsz3vuHKdQGni5KgEW3RLzdaoza5sbPAQC8o6kDaZuNmwn5rvDtmDrrCJKGmvxYAur4nqaJKZ6RbTkyrDfhfNzx",
  "key18": "2PiiCh3es3feYKgBh4mLahNvS5nLGSmu8S2n7wGda7u3Mc7tvZRPVnXHmC5NfcAh8zyvrdZ27Mtnm5EnapdnxUkn",
  "key19": "4iwKNfjVdXRHcCz3yyooD2jqs9fd57WF2x6wqNkUbabaMVk9HL2zfTZCZJ2EGBsuRe4xpHdxRrNHuvLBk66wVPr",
  "key20": "4ai5M6DonCrM8GQ4yiLoq2aQuENM6khubU7CusFLdniFbLHSF5TX6bxXYHqZfdQ9YosVdjib4GVdBhEaJdZWeyTC",
  "key21": "2SAhTVrH3zWSZVBuNpCmwWMpSjHWNr6TX9xig1NVAy4kda56TCzfBwFVg6oJavvqhGb3ygWKtZMyNKe2Y9DR9NG6",
  "key22": "2QdptUMxnBXspGS9yE3KvhE6UvitihLgiwGojo26eNzKuRQz5uhuBeT3kaKgJRXM9eKssvXz4WNLP6iewf6w1fz7",
  "key23": "4x6C18kN6bTryCAU3jLnGZXScsD8LKR3uWjKiD4e3UG58VTXwKLt1sFFyJL4ReUfGAasTdyyUTWEjGAvh9b5f6bu",
  "key24": "dhYr44jAK3NWaLaKXxMU2QTPx8jDtBh5FL1yJMrNM76FfXGQ64k7kC9sifLMtL18rDFZ8u5mJBaHm9Hv977ShyH",
  "key25": "33MzAcCuEEwLvwiHGWwSDq4eShpHxnFYosUqevmYfZN6mbU6QZjZGzLHip2vPnkDpBKD8B4jehXvvRhnXzB2goGG",
  "key26": "5XuoPhCCVCr3MTsA1PrueAqywh696vAC4ot3gkv9YAPnbTus58EhuVgSsWmZhWrTcNRpZ4LGPXqBe4nsDKo8cMM1",
  "key27": "3cziXzrBzM9gK8RYz3cUq3kT7yzJwRotDP1LqgHVBR8FCzefbhbu8oEJkA27HZaHZgMTFfrpDMHyiFjSxQmKfhCD",
  "key28": "3h3dZNw5kLP8teKDJ9bwM9DCxKvGugA6c5m73yKXQSP1McT1hgTkHAZ2B1iCmpgzzLrx6cRE47eAfKyYazQoCSdh",
  "key29": "nqBVR9Vk4sxYBUeRWKXX1jFbPDkdWwD8toAk7KrVXDG6quXFq7jgGGwm2T3P83doJaEgRndhGZxYS7dW94qRqF1",
  "key30": "3WiQW6jhen4hkxc2jTyM7s746i6M9qkF7GouENTFrNQyqeVj6KqVc3tNAq7PqBJsynwMxLVQuF2m8Da6fKLpRWY6",
  "key31": "3UR6bsYnEM9YR2jiH264Tjtbfze2YY3aCeYzCf6zEMMKze7bzcDsPm55FHKQ16qr3ZWaWK6podr9uQqYV51KTbpy",
  "key32": "2JYVHEA9WiybDWwa55Y8FSVXhMrVa2gimqpcrJ1ZHCtir29jHsg5DfoktNTMuUdvBL8jYFHtbnhNAb49UcMda5Aa",
  "key33": "2cvM6CF3wrso1JubYEsDTnJhDWww6PPBNbrD2WXYMB6gU3Hbkphe9omDRsZiyBH9fJk75fNYdZmxmv9iWZAMmjLu",
  "key34": "34EwqtDuQR3ZH4vzuA88aG1hcjaeugGdPxczJuNpSAMYaJZnHk6bXctCcraaXeaRips7pEBXZBR2CZMYCx5PVtr7",
  "key35": "5jxRmByWdZMrjPPSSSnhbnsLBE8UGoxT8kPpz86gzirn8Wa7G7niFtsNgsKr797AkmpnRtEAkqV92ML1GabyBdeJ",
  "key36": "5GR4mx96pRM8wot2mtqTEoTYFWULQdPjejJv3qE3TQXJ9qQBqZtwRPbC7d9a7ago51R7L78PNigo42FSrwzrDGUt",
  "key37": "55snb5DgfzRbSvHMDBWQ8ZeYpnZbB2JWoYiQkt95hiVJQ8XUzXyNedjJe7u8rxfQzjVD2YTTBprPCbSnzfqcGWBZ",
  "key38": "yK2RwDu5zYzKapt4cSyXgxtWFQiCrU5x7KWdFBnXMPCPdKRxo3QJUprhim1gAGYFsSagusUKa9Vhk1G92fwbT15",
  "key39": "3jdEfaVaBbbHxUPyXTGPBmomoyHpUri4Cu8jiCd3kq65mSbUyRpWA3nqyo5ezYS9b4PvGEnmCFXpbiSk7YdiMVSe",
  "key40": "3Sqambt53VSt5G58YVU9KFkmAk5Wo4peQqimyvrqWaMTmQt8tbJr74mJtSiNsHN1UoZy2PQd4mbTH58t9WJvFDnF",
  "key41": "38tBjQNvSwTkTJtBa9ReBQYeTcMg7u6ivroEwCPGdA1aVFP3jbP7FKwvaKqHor6wmYwJN3obizEwJPLadfFkwKQb",
  "key42": "32zcEjQSv3yfSJuuNrjwhu2B98eU8NxquZkbzKUTM3qc9pZbyNo2rporktfs6AS15mtdygek286bv7zpMDWZcKhG",
  "key43": "5U2fDdKnFozuVE7TrGuCRwGqGGNm4WS6Uz7mHgVU3KHVfZoRGpwW1yJSs3DfcPTvfght8J6FHDj8BqawbEFPsg1d",
  "key44": "2NMdnHuhCwVFibGpBxJgwq39X9JCTh9Qcawffe5r9Puo2rKBDssfMoGKgPP2gDftPGMLqV34ERBvSUxKz7kSb1oD",
  "key45": "4PJdB8uyHScgcKEFwnUvttS9v61znwzVubGn6gZUyz7KxMvv3uzdB41vvMTWoNCkmgxHJfz6rfNyvUaPYNLuaAd2",
  "key46": "52hkfxVHNxKY3VHGWX6iSWihLku9FkL3VVZcLRB1Z1BvW8UyaGs8pTDThFFVUTy6VaTCt2VcRENWWjRWLRnrWBTj",
  "key47": "63SXugsFJ5qbtz5gqmKNGgkASwsvy2hCoyZQtwj3QyKCi1uGPY6fpoHCpr2m7CRGTqT5pbxefZqRY7BwF7Dzce6v",
  "key48": "44rDuy2ihwS2j7um3V8v4AgAyVFBAck8ZoxPCbvLKV1TaNJzJR4ELpq5se8g1S3c4WPJkfva4WS7AGAEGRRnxpbe",
  "key49": "5zra8Mz43CxC8JZp6nDY9vFDaBXZAWkzmACGfm3auw5g7TDauWW91T1XnHVzaMSEM6bN4xHvQGFDfVNsHNkVokcA"
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
