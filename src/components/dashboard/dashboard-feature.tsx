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
    "5JVQ42yUMuZBhvLmKxgXb3mKQz7mcxfeUR7RZUzsv6cKc6qcMJQHPzpoQpSqfPPrZsdNs3uAGk9CVsoaTL8Km8S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkrN8cbQFHrCEyzhh8K95hTByAXqqyxZthvdeC8VzeiyXTXLAzEXASnAujwkwMnTbwwjcGHgYFyJfTxc3jX8nyZ",
  "key1": "3BHxbipM8oCwANw1MnTRpvBu4X7UCFyv4SGnrmi2wjRNyP996iZooPj1JMmadw2AUupx4Yq3mT3sP9WdNZoH11YE",
  "key2": "3azTRwBitfcjDrNo9rh33jUBmeJgWmaVY3ytdefXx2Z4g5FLHCfe7H85ar91SwejSAncQqHPTBdzZ9gB6YsjWSZh",
  "key3": "2Gf1wTkZUcGF3eyL1vjaHYXVvkzotPbxJSpXp4j3RPn2dTVZuLHbvAno2q5kd6T9mRMPZFVE9vbNYUgf4awt2NSb",
  "key4": "4AVkk8XuztWjr7UiA6q4CGEYNgzktV35pfJ4o92WNK6pWcRgYyRibnfGjLQCuSLHSbKimbmrZgYJQsNNBdLnJFzv",
  "key5": "mXbZ28VKXtGqUf5PdvLdR5bd3wbLKqvRf2TjAcXqbG6TqZeqPtD16UGPB69B9u6jnLM4hvnXHnE7LzjQefxBnbb",
  "key6": "ScjCyukgmkEbeApxxTmCVsJSmzpdUxcXq5L63z4CigwCAvsJm33rrFru1RQCa9dMKquHvGCfn4NEQaMgGCPoUb8",
  "key7": "3oyVWTr8FQhBJHsUbvjLrSFp7tCnwG76fwpaQCiA9sax1J94m9erLgcSnnotvxJ8HZ1LPoPDuA1tsU4dxfk7oJgy",
  "key8": "3GPnxH749eHz2REwZPS2pfrmicYHE4qpaXTTmLUtBX48mn6yVSfZiUeGuVAqAzirzgzFPhZnnNZuTMavtFkMyrKx",
  "key9": "RieQqg1bumZavUbwVaAGL1WLDChQMxyh3zxTU8omWBw46pcxbvEK7tuDdB1aD2cZqKoBp31cXtYDmM4E6DfQPTh",
  "key10": "4WkbabU9oKxgzL4DMWiQdGPwNvmWxTpunsANDrQbsgrUincXgGTGM6rQvNkuSoDvCt5AMotuu7GHT3BjLjBG8Jgq",
  "key11": "5LEHMeM35gxQUbEjbFQ8Q6GGiBYCSjjQDAUv6MTDhwgb9xW3dPxodHwGhkZPQchUpUfYhB8iyMp4JxnUHe26BJ7z",
  "key12": "3DmTeYkMZddWo5ad259bjSgt1fnbawiv8iLec2QRyJnahq9JrUdxxTUxfrPAJeCvr5rb51mBsqNVrMwMSeK7b8xi",
  "key13": "2y7YeThYpQpQhXuVw1VPKw1TcUK1o3fSz3vga8qRZHRmZvCduW518baWLkrQN2pPXHmB9SCqX2RekF73GVoFwBvc",
  "key14": "4cH2HCJkm6Ef3pckQgQJtVB1Ycu1VAsNJLzBRfthVQj4ATquDmDfic9urKuHVMpj41iEYzHYCyTxP6yXmj6TuWcR",
  "key15": "5GhQGqQXDaqq6Dnk7fEiLsUHAtLBEazKvqxb6vZAwFD3GbB4JogwQXnBwGyBYLt3kSjeYKLkZHwonQNC9gHuc9nF",
  "key16": "6bpL7K656u9mTy5d9yRgwXVMt5Mtyux8L8hmPm2xoFuzgqz6iyVh4cgL6A4CSaBhhGYj7Wv7BWsyBqiMke3iQeX",
  "key17": "3ELWd6d28cuvo6nV8Q5xUQmoiK4Unp1Nm4yWrU6MNFQQ77KD1UP5JU7rnVZzaW3sDy2CLetLLytYLFaXHa8wRTq5",
  "key18": "4LAyrVXCVJvGdEmq5wSMjFbxUhvJKu5SR4rn7Nyu6D6HeZj5EbcsngBzgqf6knRJRKa48qJm5kcduPerayDbkktx",
  "key19": "amsvPMZFfX5rcroE9734o82NPn7B92s8KcuJvStQ4LRxHxb4rbMMGRbTtREtKRL3K1Hk9dZwmZyUXWK3XPmEQMx",
  "key20": "2ZSBbTKwhwELZSaPFfWdv9kBEMP1juQVkEiWkDJi9thbapqYTtbbpaB2RQsi4Yi9D73ZrfcP89ktHJ41wvQQgKAU",
  "key21": "GEF8zMgz7tBWtCKaDhZCUp7kBf3Smqtb6r8QE7d1U1ERSBzDiM5ZrmZ1ZYUkXEvkqJVtdFK8YNWSoPpTsBFqXCw",
  "key22": "56bJqrsMdMYgnxWGQ3wbmueY3r4KoC3mUGLpTqxcT2c2z8mn13PPfvqqNomS82MdP1GX4jMzKJmACT8qYFZH56LF",
  "key23": "52KJa7mYW7EnRJKG1y6iQEWMCNA4nvUeS1pjad92dyt8KooNEZEraiED8Ee7XpFpXjsY5MkX318mqT8QpeWxcoMM",
  "key24": "chgiL92W1EW65pAiqsLmqRu9a8mJ4ZbeeyTG6YtEyE8q2nju7qwHBema46f6p3TXQZcypjUwBqm22hHEZPC8DVn",
  "key25": "2FMXc4mewefWddvVMKyF86pEtE7h83rdd7gofk4EUG5bBo6oJkiE4RQXtAbznnM7BQ4VHkjqZyG3n1faSqZbW6B5",
  "key26": "3EorZoECyDN7zgTzPCwF7FTxxc8JrtSerxhnY6SApCReJm4zFA5Cs759Xn2LkBs3dufto44eprrxrhNc55eZMq29",
  "key27": "iGd9kDDfaT1836ej2exTDatte84ftwKB3zmwfSCLQUPQZAJZzDYbKqwtoURmdVAwKkTtr7B8kQC8FQ1WULcmHTP",
  "key28": "Voj2yGzua9oQztBCtPqGNEuNP2Zo9WE4XUFjFjuj32sRrvt87pF2VH8aaDQfehwWDzsfmGS3iHDNVa1WFTkBnoq",
  "key29": "61WTc1fMBK5N6hGcFuwdL16MqbbUERdMu6U9iygyTysijgncD7AHGt6DTMSQg3qLNdKcfaomjJXhjikXDa6HednQ",
  "key30": "HzjNrbWWAQ4Dc1A4jE87tgjfa9EjesBfTRQKdQVs26DtewHLf35zbnzxyawaTXtLRbmW9Hub2Cqjh4nvF6gaduq",
  "key31": "2zt2ygqYS2w8xyUwiw69fpX4WSyc6PG8gajkaWdLorqLxMUapasDfadKXVXtJXCBv1zaSrFww5BMnKrf2A1CYFHP",
  "key32": "5X1uwguSvZ9MrUApV25Dys893huNm4gWTG1DxMkY5mGSwfU9pQA9DpyTuu6kXzBCYG1om6bntBWy257o5ThZSsCD",
  "key33": "42MbVkCkJ7ucKSK6wURCRbkHYrKXWTfiVzf4nhgCDptZuXpiN7UuBdqn4q42dprgucyLvLhYptQcfn3QDBVMDjU3",
  "key34": "4J62PUWJrzvAfjFCCtAD9TVvdyB4xq19ASbe46H7WfZsr5WbTmJBfG9fyvQs29K8dz2TNgv1bAcAkYhLmVufF5yK",
  "key35": "4Xog69m3ca1GMCUWLL2UZxVwtnKEE911oHHeZ4qp4dZeQBYcp9e6toexVtH2bB82bCmBxy5goRJdHEA5q2fQVqzP",
  "key36": "c4W7y3MzgyL6wsdgENuKhqmajons7WkgPafDa5cCpoESkCKvLGMcZqQ7Eb9GKcGmEn1C1ZGGotfV2qU4ZTzZYGt",
  "key37": "3i86mJ7SqrDFjNkXbLw9nxRsbG4aaDc8kVGRFGGtywnTPZ9TAJJ28nqJTW9A5VYYESFfBT2tBpaVtQAPdZ179duL",
  "key38": "44GSMVtDRhs58YbGnnyW8mmAgqMPWmfnSYLKf2o4w6HFxqL1wyFubznmSA7AAaFu25k6HRNisSiXoXxDjpokihvC",
  "key39": "2jbTyhGiUZC3L3ErknEiF8Sknin4XEtqwUqCofwePhf9JXBMbiSmWQmQs3eiv5RLPssv7duKNaVohojZ5x5aqLhE",
  "key40": "ByYQYxSaUPUVxtqLJR6EiuGCbBjDBk793KJpzjkZmeLMAbKdVog7KZVNk5nmevc4GwdkDTsPtWwfVmouCwrn8oZ",
  "key41": "2uhdSLKGus4wVSpaeBszuWqkc2s5SathvGXU3MYQ6nffrxA4vDRrXNPkaCbYoXeiVXx1gcEzDwVf5GfP2Zr1A7X3",
  "key42": "28Rbxhs7oMaLW91BuVK6wSb2yGKbS3kPBZaXDndkaxooPRjTqaMC8iCs7fAF6zN2Y8b1vTypLrA2pQvGvDqw1yXT",
  "key43": "5wkotpgj3vrwVVWjgcKzYGkuQyTcfJqMp9VHB5QAVguz2ypwLN5jReW82uAwVkRTKN4ZXfAxd1Pyk4nTpQda6S2H",
  "key44": "4hCSdpjSt67hVy8q7CNzLc9BUQCKbWDi2iAy7n2GLrqqSP9Ap69mVS4hcSoQzaR5CmYms4GF7Rwro1TN9gjJ5MZB",
  "key45": "2YK1UTt6cBiMhZpiKR1QoLSxoiATqi6o1VKHfH7EAzELnHPsxGw4WDiNUhMXqQ3kWHvVW5pRUvQZBGnxowVRh6LP",
  "key46": "3qfyPYX9NXc1UEwVhs2oi9tKZt9YVRVGBuxZTTShH3oA4GasHgXjjoDLPYPwvWNB9RTqeE3RTnMMt5GyLgNQNPv"
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
