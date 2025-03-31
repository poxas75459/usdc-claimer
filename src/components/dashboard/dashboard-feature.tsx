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
    "2MFi1Sin27MA4b84zuEGDjAk5rKc6nuwLS4DFdW5MnUmH1DPaxRLHyZXiGD9GhbBbE451grEMrbSugNKDPgWdCQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hBNSCxfEQVkH1obTCoi8FFWc4ZiFW4m6NARrceMm7SBxf6eshyg25XWYgRCyPfsfrcDULmCLp6JHSvLiAnfSTQ",
  "key1": "4MjeYhB116NPKUMftbRi9TjRz686z3E3Fc9BRUxj1cj2YhNSDmbYLDYho36xFgvVbGZyfUxc4tstdsKprcAqeZwU",
  "key2": "5h3QhzYJRTRsUq2YSDkCJYvDHJT9c1MQAErw6AdY6y8YTtvKgcCPAeE2SiZLGdcUPoJ5uygxqaMVzR2t3LTH3onA",
  "key3": "3VRu9zFqV3sgWPDGq844LGUDVQhaoN76Dt4QQ8EQPA3zhS7FgtaBW78rnFid2EVjmEr213ahk2yKKQZG9Az9Y7KM",
  "key4": "5vELyg3a1PSdVHqHmydD3AqX9e3qckWZ8jt7xNndtenPy6WFx6wKBnFVVGHwN8nwdnPoneBjW3nLHmFpnp5C3u1B",
  "key5": "5Ye6KceLkSKidTMNvtoRKteHh9UZQxaAvqEx8baT5NdCnLhxWXMYF4eZnAgwMukLYKULyouVw3RbiUnjSW7YNpB8",
  "key6": "2WnH36XWDKoGGDSSwjX7tkQqRsT1JGKRT2CVaor2xBq7BQqyww9QUYYojFAr4MHMAcWMsMMj3ed7VbY4avX6P3Re",
  "key7": "RAbTn4DPWvZmpZJdX9FFSkDNMq9xyEjzWmrDfLWTeDKottqzN7S9V2L3YAqUHXYkT397SZPrVW6ZSi7urW2yFgk",
  "key8": "4nMcizQSBmo6n5LgkN6ATstqvgtphcdDnNom3CGA8YKedeMQPzTHAR1JYHEvgibcYkHj8xFYnhxNcDWcZgcJLy3A",
  "key9": "h4Lz4vJVhfMKLggR7koZTcXwGnBHh48GTPoKpSTFz7sWUzMqtCiQ56UR5UkWiQmoHpHk3a5V8uQwaJ8yT7pbXgA",
  "key10": "5UYCPFsNZGZcEi3e4bFQ78guQhAbtHzXhQ3dXHRAXDoDSZUBw1xBmqLQ47xAuLYMXiadLdPi7dhUm7iebF6xRXaL",
  "key11": "4xvYHoUWCTnWwaNLByEnEje9ZagSe7S5qdDuhqvd8K1TUAC5NLYjqG7GxrzY3pUFtPpdiBmxZTc9aAracpVYqkVV",
  "key12": "5JhTXufxVPDvcjudvVE9Zf1KLRpKiQFi74fmQroyt6mrCJbHjKg2L1WnGNwPAunKLSPFpHvNBZWC7MaM8B2xgCRa",
  "key13": "3g5FpMcTPCZsM18Gx13Y7cKizRU38S9hvXHAY5z6NAUwUdZTbtKCHmjVJSzkPevC4U3LwMg8PP5XQGMhG2y4zg9d",
  "key14": "5TkQP8rDyei5uYDiAvPTKhUcnUKajRhRNy6pRRJjbFjZ6vJEZv7T2q8UUNNCdR9c28SPgutiA7ymqehZrUapNfwD",
  "key15": "4TCFvwUQ3wenJBKQdVb1oAhQSELpbsQfX2qx3KbsCgr3awDWFSXMvdAtzX5MPHMJ2X3hLtQX74NGSz8XxYXpFgRA",
  "key16": "JPAG24QsYg9mHRXg7xYyeZwwLeqz8FZW64qCisGpMqEHoeT4JR2tWhT4CbN9mk2buobDvbY82PConb6ARJ3zCBF",
  "key17": "4qLayTygjVUxtxfFqWeceGDxtHS3CDCzsnjgw8xdF3Xuimok6wbYiecXvHtQp44CEKqbL62wpuLtDFXkFHpKstsE",
  "key18": "4FxeAtCrD4eLYYoANrqtUQuwBTCqy8ULpbcSvrxPXejnVyEd2Nirzw5oHxEbrVxrTk2SwQXnoxJ5LQdHzddkRrsW",
  "key19": "5KFftNmAsYafEhnKdGqLCMwTiprGnMQU1nT93N3wq8VhEWpLD1mG2djJPwCKCii5NUhBehRPMqSdWVwcCxZrCjMH",
  "key20": "2zuzxNZUC727dDJi2zdwb7vD8CjYZBRuPcpyG2G6Q32fMrLaSXXCp5BtTfYLjLuLpb9Z9iFqC7AcYFmVYKrCUrV9",
  "key21": "6h3j43pPAL8p48CumhMr3FPzFwpDMfcEfCfgLG1g2aHLorW6EmWmza2GTha5bf2x2YTzAppSM3UajVEh9zWMkYW",
  "key22": "5unGwVE2T9ZaB2Rdq7Tzmjty7MyyL5ourVJFBvNK8LwbjmZVKX6mMQ8se6CeU4vNp1gzPTmM7xSRFqK2gtWC1s6",
  "key23": "2dAh5mPmgqmhhqeH6P5kNbMPSksmkDAsYrDRHWjr6HzSRBeE2exZ1XcPhAj7W7KnfXK8quAFQHLFc459d9G5BJRh",
  "key24": "2XbC5Acnv8KoqsndMrZghGBZeDPzaqLwJq4VqUcGnn1qAa75oTMHJwCHoLX5acXHTNF4S4tLWpyYi8cfKiCtX3MF",
  "key25": "3wB9GmyxdTwYowVyJP9bSiQqXuFNn9KrLPCGG6wCAFfcMsiGdvudC9cnBJCQ6xQURHr2sdB1Wosrury6eeG5225s",
  "key26": "67fEn8P2r1pKxgmQzzuhN5p7xhwpYAebsDbMYGKfbtaLjQqtkGygUW8CiCi1dodB97oBWwNPiTNaAnfbmKgCkGTy",
  "key27": "3PhhowafAUefoaqhbSGVca5WE8jRruYr5riJnDjCByZj574vwad1EEoweTzxeEnxBdFyavovneG1NoycMkykfnSy",
  "key28": "34PNDfuaMqEDkYKXnaeHWP9g6rqaJ4C4Q17VuX6Ea88GKYT5RPY7umXAWqHTAGDYjEk1C2ZCGPfDcX78ehgiNn9K",
  "key29": "hcfrFkNJjjgy2Sxc7FomSwcE1dk3RH3CXSndTwkZT8FD9HBYTRXJ9xYX4zWeYqLhHUCyTGTAdB7qRMiB54NwgG8",
  "key30": "3espFfK4fgxkqWrd5qnZ9BXHVq6abk82iCu3h8w75ioYFhBbafzX5yHu9KYfU6bW6DoScFyzwfYKdC2QMdqHCcDb",
  "key31": "2FSoWivfBiYdu98Qg5P1qkwsMMJ9FLvdQZ9MCjYcuBdM7BhdHE2RtPkjaLrRXPvc4kpBEkvn13rYPVQz1zYNbJRh",
  "key32": "5vtQKToffT3J3serh1dCZd5znEfKy9fDHiVnoAVsJ4Htq8wj3XRH74FUacs6GuEPBLZF93UpUUfZpfFh9qcLKJV5",
  "key33": "5srnSuNUePa8CAp2CSxVnPANPQVp2rrjUYPJLM2f8m5MkRXqNAibRRLxuv1B32MPke1yTErmdzdiE7r7iGzMQzUx",
  "key34": "4Ww4KMtzUGsX4STZvp2XNUXqT5JsYGCmjGGt2msEmJoHgSsNZq1zFCyfNNQ9D7vHUCPR9bQDmW5uzqCXtCG5Wc9x",
  "key35": "2PsDimvNMCvqCEpEjQZPkxbqc3jg2buqmr596oFvDksyeDPHiSwPcgzGR4hRdgdniLhCtZVapBuciykUtnJsp8Uh",
  "key36": "62QBGFUnXVs3Nxz9NuAywRwNHTkWAvBDUZsNoQtx5V6t39Bn4Ti6JfKhACXxLseRaUgC1HV2KiXNQPRXVrHZfqb3",
  "key37": "4vc8umo5Qeeyu3Y5qqvJkzZDWVSY7FsdshduYwctW9fGmHtKS1M36uWLR1sJHCbrashPxKfokWEYJhEbx6kCVBQA",
  "key38": "46C2Ti7MzzZjd7tZRtsUPFCk7dM6CpiYQt33CRe52MqfAm2sQjR1eXn9eTNFV9xsj66bxKqDmXX7KVWakiQEamjM",
  "key39": "63fKv4MLXzTyFcSvxGJrcXoWrCwZrZ3Sq4hL9srMJJDJ3JC5sbvarwKyMqMcn7xe5LebYBVuhyv82DYuoWvJUzmh",
  "key40": "3JWxiaHCfFe2PQy3TnoTZqLUnRYmZt7TfD6fdWMQWvgAMjTrniofP3hpBBEwYLo98wNG4TLewT6pKfJkvkutqUwn",
  "key41": "4gf83LwoqiVK2SXt5DQy78UNb5tSDfFxQRhST7QpLinbWtYh2BVi1XzmCHedmx5rxXkrv4yzMJxVq1fYxHfUZRyV",
  "key42": "3tCE5y7DikRz7NXh8jWZvWPs2gmig6K6kdZAZmqKLDf9Re85P14T2PzFx2XSuTYKZiJYCHZM1vqn73WSuQhiDHeo"
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
