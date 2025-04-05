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
    "5KLLoPq7HHRnmZd1N3qU1orYtECZHfxaNgu4yktHY6q1jEa7QovV1EUsivDyDiBWqsz5H7Jpq8DuLKJb1jQQYgPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRWyWPmHQ4bVmZgy1kANBijeqfsRAZwU3ZAzonv4xdGv2dTpWVV9DKHgooSAx9WL2yeFx2EsSirvYZBVecrs1Pf",
  "key1": "5ACbu4aHfi69mRu7JsZgsTFSuRSrJbHZ2qSCfVT1DsmXiXZgvQhSnMpFPDbtt2eJ6Zzq4p3aQ2B7Vje6EDnafv2n",
  "key2": "61FHffhESQecH56K8P3MzeSBFt2ZWr66qieP6z1awc4wBAriewhmTo84oL3xqg5s4SCUPHPyXtD9pnWce3av9ZPu",
  "key3": "34avWSqkpnCye6xH9jvu6e1HminovFTGa9y9TH4KKjuhBMmEX1HH3kfCt3HVQzX4TciyiosyuRt2hpEDhmEBuwWV",
  "key4": "3w4qR3AfPBj78BEfb2pxHBRQ77ffofa7hGqX9F1ZdG6U9xbNnoCFTYDqMf7Me8JAXU2eVxP3Etc28wxatQwobxZj",
  "key5": "3oAzRwZdgA3iBH5ibSt7ge8y1L4aq4g6AVUBkr6mbpokPHEkuTzZzHpVHt1n8CURAy86TmHPKxD38kFKFxisGS2",
  "key6": "4RwbxCPLsJoUExNW89dF7BMZAo82qRo2FGgjdK46TBkjdSYqJr96hi2N3AbxLhmqDUwnALwguYnb1q3UBEFeCWdq",
  "key7": "5YMB6V663yg3juDw9H4ZoQbzHjLnGkRKkFT45K6QDZxDPVNLzVxsH5AeTzuq3pgeEhT2rvn7CiAdwnCf3PXGZ4mW",
  "key8": "547LriaSW4fZ7VAKciZffo4yrxbvnLWkEYDCkEoMuhCLWecHtAx3C5MrYnyt21HTPXmdHdUC18q5TDiKQAvKwWud",
  "key9": "3T2j8TL3VWGeRtNGredmMh5BmvHFAyvsRqDoB7LnvwGNTbtaXBGKwZBttaUkNejMr9aHFia9Kv5qttEoQ2oVsv8T",
  "key10": "4oKsGYoqBDg36N6HLfSoB8x6dUiiw1xA6rKPNWJecezM2qDRLS9e21eBNxy8Ska9qbsCriLbbNTQpEPDFoaUZgL5",
  "key11": "ibm5XBFrSXcuDQJaE5xYMLjHAicswAdYCiwC14k9MQG21bhdcHn7yD4PhZjDxuTG56scBcMt4sximoJ69g2tz4o",
  "key12": "4z9xSasnj7fHgWRLSAYTEef1v35CBiQRYdiV7cpPU4o8hYZM2bKncEc4JFwkytw8tR3pKSVqrYuYJGeTpXifH87S",
  "key13": "26gfGmn1746unEudoNoxw4XU4LhDKpRNVDssnEaiJ9Zqio5Dj6HXYxdooeiyDLrXxv8depdWNj1em3dQ8jPGVs4y",
  "key14": "4apBPHhPUfLhJmYM44jYJux9kLqzgh7joLaqdVTiZmaxbnMV7t9gXqsSMbctv3bGVsxgjtRFbDffoEjypvaEa6UW",
  "key15": "39F9Vb41rsHQYhkPiZyUcx36KZLihtbvFusa6ySkjYZ8itaDruaqmbjDKUqrRLi7FqDgbMkEcX52wwPfHq6j9Jpr",
  "key16": "YWP3jqHdSSrX8AeirXhxEAVNuMDm4ChSViTbThqh9orcDWTmKAnBJEDcEkG2x6cU3wQigvth6qLGVanwsGCGk1q",
  "key17": "4H9umtsgGDxPe2cyWR2SbKLaexE5MjNEsp4DDdzAGSHh9QWRH7hX3CL5FwS9E6EUUNBMNSgjeCnfFza66UxzVQZE",
  "key18": "3ZXt5a5rHgL9mKg4YztUKP5bGFmdofrvSuWF8oD8Vn8WumM1tTuUJ2Mnj6Bf2f7tHS1Pgt2v2AvNpWUh85UtZAqb",
  "key19": "4FhVh78R3L28MNGvJpY4y3znqNBCLst6LPKX8wYAXUxpf46vQnEv3PmsjVAPRYW3drouri4vSHsaTZHfqzDLDDQA",
  "key20": "3j3dUQJKCveNJK5NTnnfu1oqrAHZtUHMEMAP3TcJ4GJ4fyxXyQYsCAHayv2gFjgpfgSPfKxd2AQFXLW6E2f6Qq26",
  "key21": "5DVMPoQsxDi1PZeD49j1J7JtCR2AyZWD8a8Tdzr5hAiywXEhoy85tWAFHvazteNRJhUQcrzf1XcLAKuYJNAmULmn",
  "key22": "d6seny8ab1wcUSrKy4Y8Hezr6dQwa4E5vxUgFDTqrL43PS4kaTZ6g17ZzCbc4zgupuwDwozdo5Yz28uAvPpUDoA",
  "key23": "5aTdQ1nPfUj6Y1HX548EYUofxvawo7wJPmd23QL2jRwvp7QfjnVLyewgtWcGTt9yHXGw1wGciSm1UsWWmn97zKX9",
  "key24": "oVn6Zexyk6BeYua8QE8Kir9h3Qi3xBE8CExwNb975hr43TrkoUz1ghcfjaf52TaJbYRuwTrUBpqpoV2X8CWH7cF",
  "key25": "5jgizTzZYUrwbp3hBxoyLS2dERfFmJzHBAwPrV3mc7X4Uc9P8sbGcsfujxu873X8ij63CPifdgb6UqnzVmKjpTRQ",
  "key26": "4s5GHXymzbsAEu1hVvupHBrco4uxqf9m5Xgu8bUFWwU3rZLyNfyZ3yj7nZhPZtUEvaKRzMRekeY93qGEiFampf6d",
  "key27": "2gC6aktzuVgiU9sM7GkhWhioW6hMjkCpSQV6o2FYCi47ZgtsikqGescERW9EH5aNpkVZkt8zkPx6LHwxoxSwz5wD",
  "key28": "52uZyzv6hsNGmW85YuRKr4HnoxYhKBCjR5UX2p7pfQtBx5LfyNaMWZgiV1EZhkTjGYxFARn39J1cLPxKxK5sD1Bi",
  "key29": "3iJwmmAo7X21pE3dUnJEH4B7KGSH9CJX86A9Nf575R3SiuWobFEgwZhmGzqiSzn3ea3x9Vtgr6G3gmu3MGPXGREc",
  "key30": "KtDf91zRWNBG13wkVxhQKsEQSHMFzpg9ZFeVKVoDiXzHWNPo77eVzJ76fJMrxKLjEdnZg4YBkKzqX1pD54LArCr",
  "key31": "4caxJB79WJZUfaTiR6wzaZazYyBMYWyvZn1dH1Cah9rZKhHwynpnkkB8jXbjsaX2mcueXc7KX55z26s6GvFmGVFZ"
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
