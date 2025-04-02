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
    "2QpqbhEnEikGhv427quvramdsWABWpePgAJQUHJTe86G8RM1rgB4tFhtK9GbxnaMNPLu22Tg92sf2Xfqk435QTT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MGHFuCRP9CETM6fUC29nEk2MykwkKg5ZtYM7Y7BRgDhpUNT7HNuqxbc8qSmPBHhxvhhFSQKLZF8CtnxMedzBan2",
  "key1": "fpc6d7dS9EKnVnjsec5BAy3osNEsVrakNCg4HZd9kokPLLG5dLNfYsCgoGmNA2xH9j63tjTKiUKNuZcu9rToRiD",
  "key2": "2DZixVAUQph9PqdSnCAJ4La8DnFysagwguk8vo7inhutJWVB77bL6WvEB3svk7LY95KFvXGeLAeRGL9gXshTdW4r",
  "key3": "5JF1GLVxqVvSn5QDRS1xye9SMQsSK59FvfsARrGr6k5aieycXXZmeudL2yQmPm7w61BKJ48LHNqDUQiRJRRH7hA6",
  "key4": "2dw4Z2RKVqcWEaDZRade6bbLm8V6ARr2QbYjcqdch3XGLgoHhx7zmc4bCAnxQ39XyRtFqxUgXLFZGwLQsjbfZ8L",
  "key5": "PtQ4bz3hpwUeJsXxuTH4vZ17Dc8j7tuJSKLZdL9tQr84SsyK3LkXmLCR4ypS3JSAQaH1caUvVnWiaUF9517BpUb",
  "key6": "5EJmDid6WdgTEgAE2AedYV9JqaDsg7XmyAuwt4B1dNVnz9kGucMfoK2VnvThJTuCVyAiHyR9ZrZsYmmNu1F47mx",
  "key7": "5V1tLxHYcJr5ZQ6T1Te63eN8NFHdoyoa81NV8Lte19JcSq9E2feeE2giphMLrN2HELVVH9HuZpN9PaeMeuT2GWAE",
  "key8": "2TKjWVRNT8AiXjGAWp6wAK8tn3ZEhV4dcdBAv9amm5Ce1sGzcRCSnanmc5qDfAtyDRRZFYZXw5S6CUsMkgoW8vHN",
  "key9": "5ViLrDmhyyA9KiyWBg5LwU24Xrjv9hcPjbT5ssM16v6eW9svfzjmnQdPpUdww1fyoKbi45yutCDfw9GhXfFPLNcS",
  "key10": "5CLt4ZZJxQHGp7cKt4LVME4miXqybHAGXEEX8rB5CdyW5s9YxuazEDBFALFAMj3iGLzR8TQg8FSfK7a7jnKRHNLr",
  "key11": "4bDQSQUHWcL1N2TSKU7kNzpP6pnFfoeFtLcaUGqJ9ap8hviPr3B71JE1ak7VaE55uN64nTUsBQWMSUqhcjFajG3q",
  "key12": "3uRUxYVj7bwkbgB9YA3CAEFKmxGSGBHJ1KZtntK8Tk5Rxjnn1LWwzPvNnf9xqnEpRwn4DCGXF3MSvRF2C5UmzjXS",
  "key13": "25gbeQbxnsP2hbCzWp9RVNptt3EVTHGMEitWsie3ACMK7kLhtNkpHtnXHPmbknHcWVG2rVb59rETJEcSUVrpZi1A",
  "key14": "5ewfRcjXeFxA1sudQFeNm2L2bt951nr7DYXLKBE2jLbNvwjqS9AHzw8k2zaLQfykFhsNrryJ11Gi2F5gM7psbpYy",
  "key15": "3oVR5rz1xLmuPdJPiTahxtjWD9KKi24WSjGeWkx7fg7UFTRJG7CK4ASQqrFfg3Scub2LvFp3zN9ZhnuMjhppycAn",
  "key16": "4FvMr9LE95YenbLRFccJRKcjL3eeZXE5ridc3ejJvvgkjETSTK1e9Xu3sTxr4cQtf6EytqUFxYqdpdhRWVygd8Ao",
  "key17": "5q28iYwuuazkUM42Rter7yomisnmVcVrgdduu6X5mxBRTCPFGEGic7t2jL4fUqjYSdxAmABgVL22DwnHo7zCBc4D",
  "key18": "5cTXufF37iH1f21YXmkp5ZLt6LzJZTL5ue8MmK9DFH2UrhiaPqCPnHyeXWVdpQcgQFD9HE58qXPiD4gLVWxTHp9h",
  "key19": "4dvsNxhxcWPoR9Fzjfw417ghTJTzADfMdeA94c6ScoJgpJC895BwotpmNUs3tvyUBRRP9gmpstEP7bPJC7a9zycx",
  "key20": "2AMZhBjZoq9KSacxBdq8Aru45vWPKSG8YcTtFyamnu6ukxWTJhsMqSVgSu6Uf4x4ZzHEMWnzkRZ7JfQvxG3NZCbE",
  "key21": "31r1hPv1in3tzpagyUA2PZu8KrEi5ZYyArifRxfPhzXQE4zr5NtANLBfckc1wGuQteLUpGuecPbUoGTbFZG8vcGB",
  "key22": "mK87KPNDpz1xzbk9RyunpqVADaZHLMCCCNK5xnNMJdugJgnRay2T2hfLaEZhWhGQWP7eZHLocix5563u2fLmyoF",
  "key23": "2h8W4Sin85SH7oqSSoekdG37K3YVcscbsQCg7yrPKsEEML1tpzDXt9BA7VuKPtdz7kkUi2QkmLyuWdowch1JriaJ",
  "key24": "57JFn7mXDyrjMvZko6xsPNA5sgT7iTsKuHYPbocNmS4L8oetPURyf9rZ7Nq7KexquFhicQeN2hsap5KTeuxc9LKc",
  "key25": "62SRdhCneSbNe4NCYVP79ZnRhwwHoRpKouUHp4yrjxyLpD3FD6pQNYqr4dCce65BZ6AmuGZJr7rnGBErmtiRXu1o",
  "key26": "3QUG4innr5ZkVU12PRJoB4drW1tmpT1jpGsbepsJAo3C7wNTkKdQqfjkGR6K8k2xnyJXPfKbqbJpuFfpGaKG6hcT",
  "key27": "5fVeD5ummmASNKW27TtQ1rewpM2asH9FjJfnvzSAspb2b6Z1vhgNhKNtHcGxMpcXyp1HMxdpMVzPsnddqHzTAZkE",
  "key28": "24NeM6FPcmwZ7TUGG5ASwcWgbCm5rp567vuEEyazszMDbLgoegwJ6wn27JSYYvQkjGFapwKCXYR8VX9fdazuus4c",
  "key29": "2pQm11Mxn9mcMw2KFKXEcs6RQMnbywtTYNemJutttsXGsEYQLauJtcjmd85e2ZkaU9Z1te67ncUuzBe7ajufaQ2t",
  "key30": "5oiL6giKVGxsxs99n4iQJDJZnBpNWxecZDnzkBo3pKZCAcavrJ16oGDYSHJ87Q9YaimeEx8RrReaYLNv2fEyW8HW",
  "key31": "2xg4gSvCNa2vtMXitKTNXm36UqFbFRWhoLW7aDuXXFDkkGT7opt1tc5RsCzqtJsezmoEmyp8Z3VXSw3bFGJvjmzU",
  "key32": "24zFng6yVCb9pHEgF4bviMTmfKVXsUd2FtESJZze4jNxEEzEVYSMX2L4qgpvouCsbMoL1BhVzvEkXy243woY2fLn",
  "key33": "3pyZbibAi4Y1LYpv62FSdxWL8ppBJoY9P7gWqdnYTZJju8u7VQHe2AFVFHrEfZ9miMpefn6P1bQHRefdWbQQpVum",
  "key34": "41KYKuik4LoET4tgExBCXQnUwcgpA2cwAX9U3Kxakb3ca9FgUvJ8mowyE8jAA1VbdSG1mnbEQ7cGdsjfQfRjkvgw",
  "key35": "2Mo9p5v5fDbutPNXJS5a6owE8CPzUvZdADt3X8MAdzcJkAQkJ3t757qQuFz8uyB2d6RxEUibhyn4FxPmsAPC43eD",
  "key36": "2HuUdH4GWiEnyadbdaopuSGJFB1kXWzHv3WRiNsAApEkZLsb5Aev4Yw3A2EBYJfCW1Fi6fqDbtZgjUc5PbqNHgvb",
  "key37": "CGun8egVTZyyARnd48QwksniY723kebgLA6gNGirAGEGgaVG45nWT2h1BVBUkJWCP2YkBjy4Kw1nGnRZRKQk6Rb",
  "key38": "2B9iMMv1TT6vA6qEwwjLTL239DNjJahgKwUk3En7h4fA6kE5194Gy9nEf9tizT4x5ApmaZiW5b7ZDxS1SxEc13xx",
  "key39": "5r7ko1g9po6wa92Xd7tYfuTn9tBeKGonx9Z4Qh9VKDXHZ1UAGB527JDMD6h3E7FK8mM8g131vE22bJmJUFgMf2dT",
  "key40": "YZHLNnrDPnXi34Z3PsGzVynsN8tQgq5876beGQhFUApvorCYq1VS4PJCc7orNXKHRq5FhTq68nPEx1VERJjtzs9",
  "key41": "5BxMq6bHzoCoQYLx21bG9EH4mgAN8dGJtb7Bztc1Sg8h3X748xXT2YqJWbfxY6MsCnqdU6R8ffknFnvXChiAAVpu",
  "key42": "5DGbq8rcYo3pyfwZweDvE2jfGMjsAL2GSSU8mPnRqFRhpHcMgLj3tx7SpvvhVaJZ589Zu36Ubz2kyua4s7zLvMD5",
  "key43": "26uQF4X1E1Gc4YzA8GA476r3hDsLr9pPmU5c8D3J7aLnQEMUDah4Eg8AEdZ2Krm1XDGhCxzwMCErFYrjCEtbaqpB",
  "key44": "2mehRRpD2oacoEAECEk3X6VTidm5ohFsLrzL9vq231tBoCRobXqbwzvygu4RKeQzpTpWFWiDkf4rqcMGo4V9XJSn",
  "key45": "3uXjBNcMEfbzBvn2tApF5VJ4nb7dgyBNzYhofumZy4kUgN621pE6zD7eMKULrYYkBa438wkWvWvc6BpyZWaumyWP"
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
