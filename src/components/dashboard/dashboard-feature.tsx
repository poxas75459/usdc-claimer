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
    "639CzNTdqLAFHqS1yhr9quGXPt5eGvY8UGcHL9XGZytx22vSCJk81hswuAM1QnABtcNpa5cB8c1mxezJ3T9qXT4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qonmu7mrMPSyKkgkhtbMY9T6uMR3hNFAACxdKTmQcUxC2zx2ixxqgQdNk8FdzifNe7NcVGc8zT9GecKkegtCWcH",
  "key1": "5Dk5ncVdUqGNtux9eWgwrxgoh1w2A4BNXTRhdcT3Y7faYrgiw4AXHJfUv9tpnGSMsSXjkaYCtFvXyCTytoaSnjvh",
  "key2": "5m35meWeidEuJ1s7i1q3GheWpSxFWrzKdip63iwiK6GpsTpskzZtsaqSqik4vmN2R6jzUbnsDFMmghdVrt2Gagw6",
  "key3": "5SxzkWdbXPKCP3RpTToZdyqRfX7xB2bnUkzhvV9NMbDsRA5rRFR69DbUfzJtHMdE8i5C2qEg1rojBRfB7e5GHR3f",
  "key4": "3DTRXyYCsBPmN6GLFYvJfhds4WYWSzf8fnCU88TAgVKJzrn4wTBY63oaKSjGJPfC56ZYcU7kioxH9YgtrzDwmob1",
  "key5": "5YzXCLQ1WEoebkgcGezFfZFEcEjJ8Fq5g1pPSQEYgw6echeqwT3bWctmyBvLig8E54HFKkHeMtTnpBYpt1GMyqCz",
  "key6": "4HsWLxULXMDkqPxxWrnforXDtGLHQCymMTMfxyu4qkZEZxjuxagBqyu8DBwPxw4mW35yTAeDWRk29Ajntxz8sscj",
  "key7": "3PUrSoRGh9TCohfyYkYsnqxxg2swXcgFZWqyB2n2YnM4KrHVkeXb3jpnskUJnVednCxcKmb9CgMFqHqh23B8ZZgn",
  "key8": "UFNETfbcQT7RNU92MUWbJGS8WapqB2RpAyNbrpt7TJ4JXBeNTAZcAKrfjTCe4pQUE3szBPftT45eGvvyyaws7mt",
  "key9": "4eVbTie8DmiBpWrNq3j1j5CM5LbvHuaBAsbgSanGed3YyLZH2DPAtzTBMdEvgP1oDTFmiBfH8w3vmHjXbVXiEAXL",
  "key10": "4jr7Q1oqVSQ9g9JnqRwxCFyLBK4b4JYrc1NAn33B1wkUu9XRUqzHP4TfRYUyi6xmedsR7vqpLU7SFMRr4PMAQUYo",
  "key11": "bsNuP62jkXv9QGbGRvq4FjXQU6Wo7FwFyW3W6aWLaBVwhaEjD6jQRH84bGC9WSVQuVanYQ7toEL5pPS9pCuisdu",
  "key12": "2Wr1pHwPHfmbdHdBZTvRANqBRA7yUgk5JsRJRYmUhCEyV5GAnnkmuv6oEYN45vbige4RKTsU3uADtJMpWz3vjvrT",
  "key13": "4BJJhgJifxwE1hey63yCaSMGqY4KKMmVLaJTem1zGwQj5MdWJBCiu56p76jpouD7ccg4HR3LNr4hF6hoYZN3f1hB",
  "key14": "4T4aHM5hipWymS2vetnrk8SazP1xPqDh9y7QLLYkexodpc7d2v78fsL8CLdToEaHp8afWnBYJhm449AXVqK6xGur",
  "key15": "2vPjJr6wFsWyEZF3y5gyvVfd1k9HaPSs8n7eWPAwRPfqmgJeBmVojsgtuxddiz1vufCBHstKhQfWfzUooCBDJMs8",
  "key16": "5jfEVvXGbL3Au9rxuxZEDBATdpd7kaBRMTY5dUjkaU2BqHxTZgSR1gM7TyXGGwYp4MNfzHd1ibth3WTik1AZ94re",
  "key17": "4nT1gAP6TzAdqXxLzGsdWiMJmXdU4YmAJvK2ZxCy4TQhFfWLsqcgJpHSgkHTzYJCNXVWfzTeaZTDwRPmqkQwnLu6",
  "key18": "5k7YWwVYMmo5dx5WrfntjWwkPng2eX6SSwEYBtLDSxYEnX5nfCdo3wQqnVqmm7pSwnRo7rERqtfwyD9jr5NBk8hn",
  "key19": "57RWLj65G6xjP7zFrRYHwzCxj9CkS2FZh5VgSEMXonbrYRgv4WCcJceRzJyf55CYjthY6xMRd4qUu7svMm1vJyLX",
  "key20": "RyceoPPARmTeUfNV46aCDVvMNrdyGwfTpDd5SrTg4TxV6jXeFMT1DTcKcPCXsLnRmXVZFiK3hkjtYLoKTfLtcux",
  "key21": "Ge2fkCgePqY7f8SLbQbq9dBPdC8SB1hwpZAQhEr8Hqsys4ND5nzM9wmaqCtRt2J3vzAaqs3Ag8aRrfqGqyYgAVf",
  "key22": "UJYkwjFGJRHWvj5ruroThwhzNyrimHM3wgrLiJiXqPh8P2eY1fFmPhy5bSKgcY1P7gRX6RcQcrXg7kt4ufT38gS",
  "key23": "fX9AKThYHdMRynrNgrxoq7Z5SqEuC5Ukgm3GNU8vDpkVLiTUaV6qqbJN8mojuR4KgA2K4w9BbTPexAaUh4jZyYk",
  "key24": "3v9ytpN4uY24EqUeP57cm2J8mV89QbFz4NzjqJtZw3sQ9atMX7be9XyZbz5kFPpFnT5pg9NVxNTjYiwg3ioqZ7wG",
  "key25": "2JNSkaefbe1az1XMouCnuhjNtasePxqB1LMutcKYq1upQi1fG1VKdEazuyQH85SWEJ3cpUehPTtNSgy2p5KqFha4",
  "key26": "2WpoNfoZtga8TQU35fd1QX14YLpAQzysXA3ujz7uHxVrbjnPvb5efuKcivrgDhkup9peF3b9sg4VvspzMuWfbYdY",
  "key27": "mLNGwEQz5Qrf5wZWSKB3gYPK76SNHv3kbYVkdoLF98iK6rTkH64BxA96GtsDXwp7Up5WkiLNbNoT16aj331mLDY",
  "key28": "66atnTAgAaXBNSj8C329bopkGspmkD3etJHpcWeCuwjBeLLehrujtCevuqQyCjBF2rQ8jUtiME3sYNp3bhquyUWw",
  "key29": "5Yw5EGmSvh7mpBodmPBPyt1zvn8EKzDBr8KH4EXwEz4GWSTNwcHJHh3CroaXoCRxEYUpoYS5yCnpdPv7Ksuw7F6j",
  "key30": "2EMpxJ4r6xPzWWCVbyKjCo7kFhuz1z6hvxcNe9qb3cx6YgxWoq2VF3wkEPNoojTvBVbtCXZ2Bdof1A9ozfawLwZL",
  "key31": "3FxWctPyHPGgyjmuaQQLJjM8yS2MV6urfDWgdPesCbKMndwwtBE4vNP6Mw6LBR9jAUtbsRckSowCotAwBjS2axgT",
  "key32": "2cB9rS26uEz8kBTBbpWgyNygy4bc9uxUVuJMTGeUvKDd2Zx9j1pQfeDvTXPaJS9N6Rawh4QUuZfZNHcLAQ4Byvie",
  "key33": "2V98JTQaDfu3tDGbjTShpRbqwAgFA7WdyzYS4PoTURXETb3zCZsUM1LZW16rK6Kw7dyof95EZ93DNGrah5hQFp5R",
  "key34": "34hHQWLzCK3A4Gdf2h5JE9GzTSXtNpQhaCvTobeqVozNw1tRDN4D3mKEBa5AeeThq6m5LKEsaF3QhRzdu7nj2eos",
  "key35": "2fzs22391YTGF3yGUsgvE3si5mLZqEEuQgUSjNw39VgRJ5u3GFkWG3MfTjofXPLH5xddxJ2irEbqgpXACTp3Yawr",
  "key36": "5mZrRtoGN4xUYZtd4qSGpjWCr9W2LMjF67r7gN4r6WRa1U1r5XYrRAiYYnfpzwQTWHWSzfG827jnxu3E1npZ5nVS",
  "key37": "3FHFReiXokEUpeGMHwioA7qeEUaD4Hgm35NoSgzzdNn9ckicTfGBYWGRTYS46JwggSGc7W9WsJDdFFN5gkFWsYpW",
  "key38": "2UaeLz4CSDPYcTXVoYr1YWrn2nGq3ntEew3ByGC8bf3FQYSjsAmkScojYwbb485TimgZFhbjmaLm5EdVpGhVRpQE",
  "key39": "KHrGd5iejzbzrvCdvwLmjqqG1dUH1XgUMEjyFZhY9tNWyxaABUohVybbwmB6DAPiskk74Zb7rAG4iVsCoVvHpQ4",
  "key40": "5Eb1QnVYR41CQB7spnbrwrSAzpPz3qVW7kCRxNMtRswiAwBBz5WDzv5mhMRN5MeJrUvPfP741MPGKnrLacJVix5E",
  "key41": "8XKH4giMK9Zu6yxwpVS4vgyevU45QJpXFBzzDDtrgbL2kSt23G5teff8nSsgkbAeTD4Pbu3VEJkcGsJpgdMZW3e",
  "key42": "35tEMAfyrgjMG8D66AKN16yhh1wnaq6uSGNk54CmbDBYMkGtyPzMrRLSnjn9twVQXzT3pidvzEu7zZt3BDKcyFA",
  "key43": "2u4D9GVPfiXSgtkJx9BLRKGZmimE3Jfg8KSznaNvmPdJzPwfcWS748ENPwE6dBNhbADtENuaCsa1i5FyHQGxJSZ8",
  "key44": "2H2VQHw1NezbsWsp2rhGHB3mP6nvJUw3iyYPAS6P6rQYsmDfBTk1uRQDRp5QJkFB7mAavDk2KhUG2psQ7fSGnSvd"
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
