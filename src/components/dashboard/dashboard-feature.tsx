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
    "vhA8HeLTAuVPJ44jezZ1ME3RwUu869xUFizVJ9tCZtVArxsoCPNPo1Xz9vqcB2xxqAAW89xB1JsV6RguZzoAnuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8fe1st93Z7tSUQjKu87FaVZdWE5G21MZ9yfLN9BjkvK8vqEX4hSR2wGBifdr5igfHvuwmNAm9VRtgBbsV7SF8x",
  "key1": "2Bqtubcpvsj61f2p1pvteyBeLCKM2MH6pRtX1js4uJZpK8peujkytgh2SfZz6pXT4SMbkpJJTuzN3sPg2ZzpnUVT",
  "key2": "31w4D9sQzczTBXQFcjZZUpZHiaXQHpy5u7P1aRkAMaaTNU36gpcG2nHVW3mzwNLs7Jjp6DvL5meHVdViwaQ8anii",
  "key3": "3Qr7NSs6TJmSFdgNFa1sCYZkKFRgQV9cVXAgjQpYqzze2Mkt6xd1zH6HokKwosYNv1LRDQtPF3S8nraMhro4YTsQ",
  "key4": "41SyN5FFMxjohjkQJCWagDdvzJHC8eRwvWbKbwR4TzS4Um1BrxLGrsTk6dMX7bn8Q4oS9MfUMyWJgsNeho1bHTqg",
  "key5": "5p1Km53QbtcnUGKanrSuxa1pWjngPomEdhgjZhrvdjiG8dK9fRAhecbWT118X1cs3ENgL6XqmuZsQwLveFhxkPrK",
  "key6": "6fbSPgxJ9qW78unkVj6c8AC3Si3UKRjZkss5YCm2M15eCmvqyKEePqDieqDcuyWDy1Co7am4GF3m1HnCSdq7oqV",
  "key7": "3TYyHj48r3EeDJmhvjF14NphqCAJpbpicwCFRZH7w6emhDvibU343duYPugEcEjq3iejQPHyedW8f2EGuCU5rU29",
  "key8": "2q57fKT3di1BtRV5NAohReu5Lx1DSHNksxNaJ9h1XbMViq6RPLtZvbfqUXF8XctavhD5qR4EjvtJ6QMPFvTVZPQg",
  "key9": "4K5akAsV6Mk4na4nDMgQPZgcpnd1Y2kcuPAq6HL3uKS5zEqHsDzJRrhxXmAnqEGFc4iytZyNgUwosGSUh1wX8BfN",
  "key10": "2VFppjyNe28xbYZVqEGacuC3QCJYuZCyjoWwnKjEt1fsS4DisUGvtSnFHtBjyBNFoftmSmM35N3bjXPwstRpZjQc",
  "key11": "4Rrty6tn6NeTp5oSTBn7AR3Aqypv57P2WAZmio2ZpZfEptvMErvjywZRG66UMhQCm79TQGpMsnuRuygb6twzSSgA",
  "key12": "DfhwyMFtEhL38RAZtdZtfjTqhYgsLtMZU2o4AyYdNRYNhk7Pux51mRqNaSaA63deMYffAgZmVGhy5aXgvgJC6Ck",
  "key13": "5p9oniS243yG13FzbVCoZpMdRdcC1iSKaguNJ7GQW8DRLwGz67usKZrUUitdDuhniVWfRYRc3ZG9AARmuFvszwkX",
  "key14": "535Xnx2NLgEL44tXhL9YXba61QF8F7mtit4fazbfU7BwtzjMEfGs3WCss2ovHYATavohVoVRGyWtY6oEMVNZsavW",
  "key15": "3pndPBRPXWjRUg6WZvtB7TooVcJpeMgHZJiwU2Zhi5VFTif9SEKhh3tnEQWvscZcrfNoBa3XKqjXjS76sagGuKoN",
  "key16": "2QiQn8AfycQ7TvZAU5pGSEXUNs695AinwT3obZKZUsnJ2bVi5foSTtNryFnxUfQ9N6phcNeDKr6g1tPw2BmBojSF",
  "key17": "4jeECSvHdG5H13efuiwx7SxzgVqVnXKRnFm8bCXagQ6oznJZqsSoS6nCPmZP7SwJfbSjMt4ao3DXrpnknWarcq2w",
  "key18": "2qajoPFhxoMfciyxoFvX2yie8zWRyHWv5TcNeJDoezuJPfaffbwRSBy6KrV6hifza1ZS21pHYMdzaExBENpAfKuV",
  "key19": "5FSi2oekWV4jRRBB7VPdqyjghbjVHXpGEqkwzd9Fx1GTvQ9wHgtugJAA7xu5vYh5k29QaqjNoS8fA8k81nXTkHc6",
  "key20": "5etoDNtVpePYPwHdKCvgxMYZLeuPTJg6HpNbSVhhUJcZ28egFXNXu59XzNg37mGCo5RC3URiTfJae18bmA56giG3",
  "key21": "JXokZk1GFyeB6ULw3PdRMFf4cP3PPigW9zC4ZJjp6m22yMX3zbik7WU5Q4wxtiVXypQ85nac64ptQWLMiV2LknN",
  "key22": "63EZyVD9rTHwzC5sFJyVJkz46v6rsYJFJesXfsEEU97RWEVLAGSmZTnbH6rJsR7MLSLVKK9xfR8RWNbk9UBGSFYR",
  "key23": "4qb7RGmPWwE39MkF7nkRgb7Bae336XL5Ddvo7S3oSX3nEVWB4Qv7QpfE9uvVvt572Tg1v3LSGryLufBwEuqKxhFG",
  "key24": "3iRck6SyZn6me5j7SLHtCD8db7TseNzpc3qQhmzLekiu3bdQc6cADNrEM4NTQHsqQBStbsEST5LrZqKGTkrjdVB8",
  "key25": "3SwR6xT6spSZBXkV3Ya6g5fjXy5La5TqNbK7Z7QLx9AtdNQ6Jm5QBiP2S9As8p5KkwhZywBXM7stJDwsaE7ZtKNe",
  "key26": "3oY2yQwZ7HK1wwGN6YKzJk45jFdH7NWfTpvyeTQG7otmzXeiJGxrP7z6qct5cwmZfYcSDkK6hqLjn39i6sjQoB53",
  "key27": "QNYGyD3hDQYWrZiE3EGJJzfX4RquSrR7iXjVnMVphkYokzipn52fvUhirKaGPyu4oydDUfefCc75anuFHBeedB2",
  "key28": "Q3E7CABaJsstDHfRdCAVxtgKALVdXghBndUQkGxBsLS8qkkXhqzycXzyyDB5WYs2ArtHHCg2CdSpYKTNGV447Pj",
  "key29": "4BMK3xnv8KTQ4jvKy6fGZgBZcy9Tx4nW4rFaboiKPwmaqMs9Emqt8yfnAsfTpKZNgvw2tuuLdfaQM1STVvGaZGSq",
  "key30": "3LKU3ZCDbStTRSS4ZfRSbsujEAJ3fqscyVNky4ua5qfu5PGX312N3igmnWjduS1ozuzvgLFBiDn8MT3eoecS4mhD",
  "key31": "5HFFCpgDNMNFco2Zr6b5gqsg4KMFAXmPGbN154MeiYHWnEp3i6ZTG3QesCKiBpreAC63sqKDSKmFAW88vv5fhv3Z",
  "key32": "J4ezZ5PHUmspHvjbMm5eTW7sQ1DwMxEkDnBXPtfrgqtkUG6zbKxmrUZ2hkw7x9SVdrTqSVb4gFxikR8q9XeEjxr",
  "key33": "3zX6gozkBTsn7V13Gzr9j5a72NPZSM6E6bt3KfAbxJj8sw68rDRtQWrJB3NZw8hNP9Pxtw2R4TbC1qdiqc91TTSF",
  "key34": "2dcxFJkqbMR1ZebyuzT4c5yVGEACgxGrqWwHvQG4qrCNLCJwBXSS5XtFDuuHQkizFGppFMa7Zo5F6x94fsTd1Psa",
  "key35": "2hTNQK5N1ecCRN1DoLjxjZuGAHUK1sQqWDY1GRbPJSeLsnHwEo2VGw7DLGgsfS4jqFx6y36Y1vUQT6ZjYZq3Hy5R"
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
