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
    "5QdW9hyYDoTSNoMb5mvihVnzVGTLpLzNZCvqDRe8BR5kkTTsCozojhb988u7BN35EU31jYZCCau7XiA3LZftMe3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XA6nQz6MRLtpVDFpAv2L3F85n4yMDxuh8mBayhbUkmAtvJ2XJbwsZgEN1TcqTbvPCJprTB3578uf28BQuEKMbux",
  "key1": "3CpU8CoWUVFZtuDJYMN6Rda3DTAQMu9tz86m5sSgi4WgvvuoRDzQUwc9ayGRuaKuoACAYGU1DFTrg8rRAFLjt5H3",
  "key2": "zgrAWMrDFzvv6Lmk18N72TCfDnEot9RzEEXeKRgULK7mLsd6XeS3hf7WhDLnPZG5RVSKvGMMJWmBoXaNiecCipu",
  "key3": "5kdyj6FTJErbc7ARrUiBx9MskMdGn2kezpnSc27Eku3okKMetzFDFWtFgQaYUUVS4ADf9b27hvbJmmiwNLj6Q8Bw",
  "key4": "5A4s7vd1Z4uAe1ugYHuzowjX9QLRVECoPcsHaKs8ocBfcdhagRgFrKKYmtHMiQuzXp1M4XXzoenv6aNb1HePuK5f",
  "key5": "38PVjkMNJZpL8RwCRuAM5fyfyHCJ8X2def1weV2KET2kfTxNhdQysQRHACS6ncSksGqWDHPh9H8sv58F2sjHsWhZ",
  "key6": "2SqhtBagY3xS325QPJKsgAK9D51Ws1zx8QVgdD8MXAzG2vofY9cCe7XzqWCdLp2JBi3S6rB4C6VbfnNZhx9TvoNt",
  "key7": "33ean22VsLKskSiHKR7a7twGYsNRzWWNpXnPJaSErLgbvR7k5tFsxzVxQfjS57WbufYgy95WgzBQsfAdvPWcbUSZ",
  "key8": "3HGXDqZwiWxFr4XcroRpH9cjoLwMT1vadBxbVFYXBsFCUZacDVDo8sXxfqFEu5ur6Yt31HvyAZekKYXC8LT7fet",
  "key9": "QbSErytKEVf8dr9LMMDXa76Yc5qSV1E1zvvmoaT9aYyLQiriFdRUymD3Aau3m6zcJ3tdxyRfmgVMtcWh8SqxmQL",
  "key10": "yvUwF4wjpw1uAjvJv657AbwmgWSg38MRUEppg7s5DVUsWkAYgqB7WbKuKg55i99MnshLLuQvbNQnu98BDY8uEbu",
  "key11": "UFboqtv9YY1yxGbGEQFyJWpWp4TmnsxDtHnQN72zfw14LFfANMappVPB7YhYJXpa1smpGVvG9n7u9dQom6CHjtx",
  "key12": "2EyUnP93q3HEcsRsJ1gdYU5VctfMn7prKzBY67qXo6hCrqAVDifaifPFV6tdes6HW29UxVXkw1qAF6QiKgBKgCWw",
  "key13": "63WTjZXrypeNDjyjM4CjTXWf8tbAwFSbtGGCT13oZBwb1FCtTZjSGDtHcVW3RCsGmC6tnuJNCu15Psr8nHyR3A8p",
  "key14": "3egEx5RLgxB6i6CSk3nXDNPVYVt2pj4aDHJv2992ihswCXJmpVGVKGmPLYGprqtr31LNbixd2oEJs9dVgSAfZjru",
  "key15": "5JKGeoLjjsDbSyP8vFZ1wNR4NCnJdgTwgYZ1PGpWZndF2ss7WJgVpXM233Cp7WxBeCbwpHE2UtbiJLbUJEe3vhK8",
  "key16": "339ga64Adsp1fBZuQ2d2UsWMcHxttPEcLLNWJLAFFVzSusp2Ht6TAAY47wTgBxitm7QPNEsrn2N6fqjEtUw418LB",
  "key17": "4fZxjpHTKcSGjtqBjWnaM714QLrXCZxN4MKzpcAdCPPbqVsmqzzNL9G9MJmkB9rZnGuTaMK3XfhBBxBWvufdW5ZH",
  "key18": "5y9o9jRhg6kS3vo7TyCPnfh6YhuUeCAYyHfFtHkiV1k3kLx1fhzEXfA4pAJojtoDhkz1amMkJMdsFDGTYtmitjrZ",
  "key19": "hA2tvVBLUhjqMtj8FVv97QyVN9UqfgkQ93ebJXC2h6QeyvAkELYUkAneFWFkX88rAqub8PtjbfnAbioZk2iEr56",
  "key20": "5xreRNXdzuNahbpHqy4QHhY3pxtiLnJJJ2Vaz22KojSuvQdSX7XipQUDqihBLWJUrrkGZunyMHNTD3y31GJKAJim",
  "key21": "2HdZf2b6MQTjbAZ6Lfwdjidr45dbYhe98JcMAwz33rcj7tVhRXiyNFAb3fRdAiiywjjpohk7vvb6jw3uBWYk1126",
  "key22": "5FKUmjymbjScRkVsKd7ivVtgRcf8iLBLjwtD6kynqmXd6exQDysTFrYSH3v8rT63vp36LHRyQH5BPcUu7haSwdWm",
  "key23": "2UUKvb4YymTnPp4QMNr4ZX49CpmssbKVqAG2QbeeQYGrZn3tYy4cnZveNzmqrJNtCXTy88ahCE1WYq5b2krbKLuX",
  "key24": "4Aa3AntvzXeZH5dF1rBQDJUmHn7AZZ8XYbEkm1zXq42S5rMhzZZFE468EJZdhDPbowgZuLYD2Z8hHhEvQ9FNyJRn",
  "key25": "4KrCdwhfHEKGw5Qjdag7YmhguF4nEZ2nisNgysoWUCXHM7UquG46j4cZkhDhd5KJ9sBSesbNdPSjdTG87QH4xxHz",
  "key26": "2ihsVZLkkMeYY7U1B9h7aqdCN2a9yT5JcebfEAYkaE1VapCtCSnPuon2dJmmUP9Hf3jEqLp8aiFP4UFM6DjkTfmF",
  "key27": "31QmFad6mgtCQVgeMAqTjGmhBHnvAdHtgzKoU4zr3QKKxUtF1LGBsuhCG6FJBxu7bi4oGCgAWvt1MRbL1pGFZjAP",
  "key28": "41JXvoyNdsPNoR1eq1GBAmKo5NxyYpc81HLrV36jFaAfB5yjP3Sbj1TyDB4kpYPZvV73yqdVWKa3HByEp4SwwSYZ",
  "key29": "3GsCJnL2SP28ebMkQtmjjfXaHc69HBcbwPQB3W2jxuxEmncRZfH4yavUT1zYCwNsn2rHBHFx6kTxjhU63qq4j9xB",
  "key30": "5TBB9MctgS8ua4DbLvQ3k5TNg393FjjSm9rya2pH3g7pENuNK8umfKSMwBpRZvpnFXe2bevR293KCt3ELBgLficX",
  "key31": "35xNrFnDUmVvnPmcD4CJ3gGXg2i62VR6jGnqEbwewKWevhGwZVGw6YJYSMdWJCY8noGbFi1k1BeSx6AfmZuTb5GY",
  "key32": "66EGNmfGkYymDNWYLXsB4pzyEA4LEEH2Vu5Bq8xDMyHCa8MznW8vD26DGyn1NzjFbgK1yKo1zcUHC4AxukwUFJT4",
  "key33": "3j3Zcu89o5rQ3U9V9kDxCuFEydbnMjrC3Un3gYyvuLYiYRg2pAPbkDKpbG6oGtBZ8LnPMkrKYiBHauoJHajepeq6",
  "key34": "4WGz1VvVB26QtDQudGK6dAzkQPjsBjfhgNKiCbs3XCG2zvYUUQ8qd9ig6vs3NjKNGp4xA18vohexh5RkM5HDbtGk",
  "key35": "5Gk5jpqvCs7zvRANuYy8xabBvZxgLMQStdK2PB3TkWdBF3oMt4nmYLabJLMJDSfBBou5uJVg4E7wTqCfbe3wLUW5",
  "key36": "hqXPDQUhxah2RTPP4TWjZZJJinX3LJwoyYmbTEEJxW6hWBWpC1FUqLwNQQtNhZKL4PAvfXsrjHzJDVd3ca4hhgD",
  "key37": "5jpTi3PWxAkfwKuFVyLbBYTm2YUJU4zDcTKKryWMRZcmHyZa8ZphWGogFHFoNJC8YNx6TRrKK48XCkXJoYaD3Bkb",
  "key38": "uNJYpjdiChrMJdzYv1k1LYuH7bqFYSPxxAtTmbuEGPPN38b7WEg9fdXYv2HfgRLW69KLDsW6chYruVi5Z7g1anG",
  "key39": "241BptgdosJop6zQ6Aw2JXVukmRyVXmh8kFEdEr5Yzz5CoCN8SfM2VGE4tWUGye6bHPpEtEd84bS5ibyBHrT7phr",
  "key40": "2pj2owdjUJMy5PhkDsDKg1vd8LLCCjgF4pcDtKNiEC6ruPgmeJWSM6yaLPa3wnvSQEBqC74yiKgvUYZTac89yEz1",
  "key41": "45tun5BawTXuHeBcLKPPo67uXU7RybUiHRGueuHFwwr4EjorCWNHhufEhJ4MrVbQwuRJwr61187zudmGj8nh4kHJ",
  "key42": "2iAaBeq8J44Pze2LfhhwvR4PrLRpKyqCwyvViMKeJDmm6LKSxEipPKtvkk2QdihevHf2Nw4FAQngc8vUU9u88yva",
  "key43": "564JSdLFEFRTeb5E5oFiiSQZqGZiMDHEAHVogTPjMQ68ujXLE53WetKGaYCuTF7Fo6ckyzE84wHBPXnthiW6zQ3g",
  "key44": "iER8qoqRqoXxfQawg7RqzfJU6LtaJZv5qoKhAAaMJ8ctVACX7QM8YqCnUd4bS6ockLZXMXF9Dv9dkxjV8MrTkbm",
  "key45": "4fxnNd61yUXdf9Xg3ErenxXUETgzrqdi14Gxpu2QUm25rSdrCsH19itG7wZMcENJo3pPg7WmLjUwfB6bQRbkQm5g"
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
