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
    "2KAyKGZG8Q6r2UZLXKEAfJS8yFS2B8tCYqWUShxrTQBxSYWmsTzQzDfe5XRt2Q5urRVtR7yj9HBre3wjRu42ZAD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qasa7RUrdv1zE6JecmqSFFpgtGDBA1Qgura5Qt6mjSZU3qWf4cp3sx7EgwYDsMvSbJUy1girJNVqjnSKXADXFzZ",
  "key1": "auwbBD8c7c1uGXADsfvj7owC5NyyovVUBwJWbcUb9zUQx3kkuL32LY29XYxnBxgzazRVR9E76F15bA4UD1nTrTk",
  "key2": "4Sp8rm8aXb9fpMzsJW8eA17xjeWTXxmyKexE4sePkDrvHg9NLVkMbfdiGcswGbDUtHk5LGWxDadUWLPd3RvPRvAS",
  "key3": "YkpM6AGLYdwpHTHfkuFwTHFJArY5LFxuB5TPDScj6Sdmc5kUjH9ugyxCtwfaj4Cojz37cTD36MtugXYQsvnuZPW",
  "key4": "4nw3ujtArpWNuQc3gnga72DmxXkQF73bbWCt7Gpboh5VSwb1nVoUqS293FUBv8KswBj2KkazPdZHZdBY4ERNpwRY",
  "key5": "v61BbXxZ7mMmSUUzDtPxt4jwsFJojG9S1x87C1HfptfQ2gbhXD2TiDAdkQN3HKYUv42rrJzLqY66dxhmb9CRGyP",
  "key6": "5ctoWzjyp1Ej3uvBVNZkAPkKvcwwe1rwRVpZ3f1zGo176txjouFuq6fLSe5zbheqTz7V5odLtjYqMNnjzo2GQ6qB",
  "key7": "61BG26V84aLF5ZMpfmrFRRdMqnUTzZJV7Wh1BuHmbieiXq8CBm5rtEaHXZAdLKdVFmq4Lxwt69gmxfi6DH6PVFws",
  "key8": "5YpqmxT2f3WcQMpgFsVnYJfeh7WtidfZHER3bkcS62xMSUEBH4ycZ9wxrpVLbVh7WZBMafF8x8P1rfgtjvH37nqZ",
  "key9": "4S8mzrdqhtrAPzyFYYLToDMAtnQAFBMuVT3qZyzf6qmAnK2LgUDoJVBDP6cLGbmvXygUMkpyw3MdGM9gY9ma6e7Z",
  "key10": "66VNu98A1JmZ1Ni7YQ7LbrLEL4RKq3thqHdk4BosrD2k6tmwjZrULvpy6V2caSy9ggsxSTfYYgNQJGef9d7yvYzv",
  "key11": "ptwZa31Nsiza2wGp6Mk34EJSyLuehJ5E9N58jjtXHuKUvtumtm26HyCiFp5VAiW8AfPCRuBX6VWsuoRe9EtUMJn",
  "key12": "67EoLMEwYhJLnuZLtXHSGRqf9YxsMcWAUEj1g4zPNgr3eBuDkTo3ed1EoxkTpxA4cDpURJ5Q8W29mRJZ2mdX9B3s",
  "key13": "67ZWERKoT6V8JdgV7xn9eaXupHSEkSMxAj5ewbKLepBZGtR78FnCFWGzWU1Bb1TGwzzB9tCzTuoPi2VR4ysMocp5",
  "key14": "64oy4VaA5U3fhJmjDGxY7Rf5PmjAx1aYCuHWgiURD1BKNrHb5jkugUf3gDWsEeMfS5FxpftDyten6wsqZpZCYw9P",
  "key15": "2zJdaii3S2aYYVdS82FRpVWqRjUCPV7UNcFQX3z7RrUiePNac4RM9gfYMK58tptLjMfi4BaSq2cDfUY5tJiGSwgX",
  "key16": "5vvDaeP1mkyBGrbKBzEqzLWvDcUTQB4thbBkfT4emfrqvTv6M6KrPvq4xhXV4pAEngNLZLdEP3p1jk6VcyepFLY6",
  "key17": "557b3u7sMwoC1xfBizC631h8GmxotVKJKR9mRNv1Z7vNcnLVpCCD8sUhxLSnnNLrVneS1jqGBvY26WyWePYyAHc5",
  "key18": "3UfGP8oUw5LuFfrevnc7M6o88C5ut7jePh2ZPpVu9VGT2aYrpJLg1bdFSGmHUZWqKnHPqrkxEYLUd3feJr1Xp9th",
  "key19": "2qqFbCHwGWQByYXb1ktbB2oh5RVHfUgGdQcZeqKp6EjFnuDtAguzNovtMnQtGCPCn4TfME6jgFvt8dYHFdynf3N4",
  "key20": "CQRF3eGUbuiG7NHoEHik8zmygos1oVqG2eht6fwCBnKPJXckNecgRrmx9DEYs8BN5YcpbhnLPRtkmcDWXr6nj5H",
  "key21": "3SoMJ7o61Zw29C6onUpoPPUcX1WwbwQU9DCm7qsesL5hQmQoVMKJQZvA6MRtEDUtUbbmY93cSXUCJNEy7d6vJ5xY",
  "key22": "2zQUzGevLxtB9GPxqfap8MKCW1dMfKip5FVrXh8TM8FkfiAFhxpni9ZfzED3ST4T37TYmDPWTnRrozpHKBVuP93R",
  "key23": "5UmHJrkVprHuADwpUV9jSBxPZEKBkDnzeaqYc6ZQhZvuisLER7eqLmzUxSbCjEmqBVnc84r8kkY1zQPdJAXVbCYG",
  "key24": "5eytfd8c1LuCwZU5wdLrLgKxt939kwemZYjN5MPX1y3nG6rzwL4dWD9FjoMFW85b4GPmn3rmy5Boo7wSdpAp4fiP",
  "key25": "39NzvVZJxdvjsC1Z4dGG2GANajdJGFDgBhaUe4p9L5LUnq6uSYvgwLgayPJtrx9umPR6wTyHuuf9mXX4s19xmo4q",
  "key26": "8z9p4Unauk24P9NBwDdPM8bSAkRZdDmguYwfp8rTdyAmhJuGa8yC5cAj4YXnZvCPGtEVSEXkAnUnHwbHXJotyGU",
  "key27": "3EKySP3f5BCZExxQB1JWqEMbJ9tmzrHbPksT6uGsCZojgaWMKc5C5Z6mCcJZB6vPyrFPQHveQqmKMSqS2YcFgmEi",
  "key28": "3wuaAqd2vCR8WFWwyKZC7Xc1iMvTWo88Gd7nF3mm6DDCbVv9BjqrVgxF8LiaXNU86v3j9dPHqurN4XNBrCLwPaQX",
  "key29": "5ftzYKvjHvckmgah3Q7xJ6YsTKWMedpjbij4xCH21uZYAXv49HvcErnJrFEsLejGqbaAGvef4JA2eEeBcDzYJn4F",
  "key30": "3bhHQgboPXRTApGquimHJtUbmbXe3czgxPkNpvGnkTjDfwxitM8BpBKbMQD7oA7CSfZa2e5KkELFJTQ1YKUfmQvR",
  "key31": "3w6pARrwSxFuKRsdinQrtQTWME533kNDfmohZaq4g9BHvY9byrjFygkP5GMkv3A6aJ2hwX1C92DXqSSUe11ApmLD",
  "key32": "DEaUDt7ZP6H4iUkSYTpGWxQRgwA8wdXUDhUfif8adrSy918u2Ugrf6QGADM4vQLMAWrWr4NHWKEZ5hP9PQVxE8X",
  "key33": "5wRTFtHURahNsgoAGsQpAF299ZcuSXvsccN5wVpTafcJUERiPabBcF8KusG9UsCZkij1HH4ST4w7xmtDB9fGvqSi",
  "key34": "5uUoFhWpec5mdexSf6KDx8oNHxkG7qmPFGuVFvpHCnFdJFgJu6rvesnnM1yqcmTWB5pJshshqAxC1uxU2HLcvRTm",
  "key35": "4xFvMLGHm85ZGdx6ArBKYnZ3ozk6UiJRg5NTR5JSu94qTKPup9fPYxUfQnnMwoNFBZXCRYDosz429fDr5ABLQ2sj"
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
