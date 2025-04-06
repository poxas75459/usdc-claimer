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
    "5gQT6RqQpjPXnLbLyuXV5wkosvCD7zcdyRDi3BB951LGxWp1cnVvCk7mk13oTsiTY2A5xWE2vQdK4DC6iCeGESr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bstkzAUNbSicewuD45WvzJyFvfJRisBaAKeC7j9J7FjYpdFuL7eVFNoKMdkRk1r5hEVq9fWBfBW3SbhxrtV6Q5",
  "key1": "46zFjxmKSaxp2uG99cFCTEVe3LmJCS5yi3FvPN5ddwMcazKonxWwBHrnWAeUSFoyCP9qjjmYzk4fGBMovuZR2VrD",
  "key2": "BgPtqd5V9q39izLXokFRnCShjUwr5pvngJEB48T2FYjuA9YpK43fHfdGeURGhGJg5dCCmPC5HZafnfcdq2tLm2t",
  "key3": "2hhDiry9gHP8CoExAM8q2V61cTcyCdYAofNkmWmHDgxtSJu5wfqMtBugukhGHUdiFC3bd4SBtWWAqsCHdef5jLP2",
  "key4": "5P5CH25HtmHnpUCWHH2JcAcAbq5ubmuWDskLC1sdEzBiFFbLp48HAJPGVbTBBC6P3LQ2rHsUW7gytqqNiD4koxeh",
  "key5": "6VxEuHy1sxEsNHCsSmv5YpJWoMNB59aM9PkSp76tyrApgADeBdufBcmRWQCMVc4GUdTsFoaeJT3CNVKaLEcfSLe",
  "key6": "SAPwoQC3LAuT6DRLbskKob1ycSFGxjwSRBzwx9XXiEWTQYcKhh2ictWsBBSdP42xg4SWyiGPsJHRa6xPMWMQu7R",
  "key7": "5UWuanb7DNEMP9GvUPFi2mE1xGfKZovgSW5fErgZLU3qXrfrsZ9fAstxvf59WM9Kge1pjbSmEjoPogGeXTeBmKXW",
  "key8": "4TZdQ8X1AjcwVYtDugDcMwABsX3u8mGJnYapxf3Bj7PhDBL85uHC8vYMxwMFcJAaFeVp6WGuR4616jo4JsiqdzH",
  "key9": "3yGu2wa7rHLnzbcJSxHea4i6ZLYpTS3e6ayWugGiSj4ivQWjLX3r7ZDSK7esF1vXvg1tL488MsLQv1hHT26ZuBuV",
  "key10": "3RLmJBqCnmUXi1UYRqqZSztm8aGHwt5VZR8wwSvhSJGobsLUoP85QQNWXixtNKUpw3bqtxCdFWqFw4sAa6L24HBk",
  "key11": "5fSm9s5T7uBTKybiHgNCzmdvDBJRYVjPAqTMzQJtLAuPuuLf5NXntDRHVdFCciaUqdzqSYjqxWb8cBQXb6FzbQxd",
  "key12": "2zdt8pscDoxRDyPe8JrK6AoWrK1zYDzmMZwnnFbNLTdcBzbhx7swFdxqqKLaMNpa8TWoeFMy76riRbLkzzar6b99",
  "key13": "o1hpjaUa5Q2LRHL7P5gWJMKtydp9yUF8RMcmC3UhL3xtdW5soy5jKEWvTbw2Y6jPVEWTFX5Ey8ReB5d27RprLxP",
  "key14": "45typBjR3rK34DBymtHYxSZZeDbgLuCD2CzaU7nG5SPhWq1GgLDSUN5Bbaerxwa3s87B2nNCFmnGDwWD9D4U32zv",
  "key15": "4swsxD1pagYMCEp39eBezrYjLrrAgGVMiAr4krC1XvPLuhu2BVAJNrGKkGrfkL8qL3gR2Mv3rf3TGatQHokHb4ut",
  "key16": "d9CdByDemhvy3yUwCLA9X1wis324yTr9ycME6hnomvpQchmoHzNBuRz6KN8n48dNHrLvmXKqqT9bJqGmvbB39RE",
  "key17": "uyWTw6EogbowznA9824sDaiZ3Nt8mtLDgNhMDospmNQGQS1GfEPHBjsXrLAy4JMpMsT3XWpNadyqoHraV9aCvkB",
  "key18": "2nxBZARi1MUMSzzJx7x9WbgzvpNZtAEyCY5HLyUEvprWrKFn8Un7CFPah9jB9WEvA3kSWbibCcxqaAcZEdRSYhKS",
  "key19": "5KvF4tsSYiA8yvwP5Be3cs8QbBd7gxS2jmpu4S33VX6HoAiv2sQzzUm62WCcRtJXRV2wPPnB2zF7HFT2avrgcCU7",
  "key20": "3haBrBaTzfdgN2wzLA5m4fppzv2pdDZVdicLWbkFx56sAFvewaB6y2otj2re3u1yMUasis9cnCiJaAGPJW8KRZy8",
  "key21": "4xGEt4iPKQNUKxiamxrhrP8Usi7jnF3sTvNEQPtbKRgjSV2AmSj8dfmSAcoVqrJBMKMoDJoCh4jaffb37pxSL5HX",
  "key22": "4ckbM2mmbZSjXYk7TVQz6fcsyDae1eBNVg8pk8e53LBzxj1t6hhmEFe35z1bPAwoo82LWWsEmNHaPmNZcJFn8Dxj",
  "key23": "5DjJh3n8PDKf1J5LvB9FaHgfKf9rhnw5evUvCBxHhMMK2955pmuBZk9D4YHNZ3EwfyY3okrs7gWq73ANf3gqoJzB",
  "key24": "4CYK3g2r75kuUCJ1X7xTMkUvT4dB44b3ySiAwwBFUAtt4xzqmYrGfiWpzF3yWVpb2GBwjQniF5NoJ9oTdXJ4P6N2",
  "key25": "2dcQrPajpzsv9JiQ1sBR4gotkQkX6xA35BVX1kUrX6nMpWfhUUFFaVR4VoQzzcjkFSBhewMDY6Rqq9zfzeGEB69y",
  "key26": "21sxnvTRoZArWLLhZU1HAUVnrHsgDDamXgJ1uMGA73LzY3KzBzpE5U9EUhfaFULNSvsiTENraxVzFRjmPcwwApRt",
  "key27": "5CJErJMEJepnY6HscY5tYEGXPrP5BNiTQ7m8MfXrHF5Sdf8THu2o6mv6BwvfudBFwLyocjFq2NnRt814j7DxWZti",
  "key28": "LKpBSvq5mwND2p7qhBoZaxbKfqmNV7b2D4tJfykv5xKaar13VckMpcFVoVcgMKerorAwHzN7ZD9UUGckJKEXwLN",
  "key29": "2uQJNvq98NiPU5MSBmUK3eLTgqH7MUPdst4PYiYV3ADt5vkGz6y32AsSNrJbNQEVhodgKkxAxXPR6A3pLdHWo2ej",
  "key30": "5rPiw2wnpPGtXeNFVUqdCMrK2ZeCSqv69ksHy1DnHBmdTcxgqCrobTegnL6myvtpWzRWjhLqJHeUFoxFsUUckC4Z",
  "key31": "2oz8xVTfQLCsGgYMRmf75aTubZHQmBsYFHsnSwbyUmTc1uQWEQKh9pMCZxcze5AKgwnDTGwG9jPTcxoonp748oVh",
  "key32": "krt9Q6aXPPTWAgsK1pyUFkLDvL4K4ZWTXwkuZ21a4ZNYmghu4mY4Sn8PpRx5Wk1AZETrHkqoVinroP4d9xzDTGA",
  "key33": "2N1zhhAmJnem56f14DtCujW5dBwmMNYEECGryqRBQvx9dCKkWwAHPnZzpkzoTV68unrjX19naxj867u41QJ5Pz96",
  "key34": "5ETAHy7hdEVW6qUqsJKnPnNJn6uuEzj7a1rGwjrpntxiHiRLfT6yC685zd9mVrLUgQ2xtvYU1XATcQA16U6nKEXF",
  "key35": "2BNKxLEcbaLSYM2NtAUUzBm5T8uPBVXp7uTx6EfGEY4ox9dc8gQCWJpSt33HuMHyd6c46XpND6UvfYPBidTyJ5hP",
  "key36": "ma8SfXn3B2JcAi78USuruPMpBQJfg8WeTGmqxU9H3mbJwWXSiZDRWXH5MtN8Xy9kXrqqLhg1FvzKwXiK6ncwM6t",
  "key37": "SP5MqevrNBBpwMRRDkxXqtfkQKFHfCvM2KqYQffHaaEAM8WTswQWB1L8VAr8Y42p2kbkfPw5Uvp5spCJSkbf343",
  "key38": "H5MPa83XAveG1fZDZxTtMyJFdP2iGsEPesKkmeCJ8D7A2j3QjhoPfsW3MEiSqCJU2wM5ofsU4z8obZhADkfpcoG",
  "key39": "5JWYu2GAVyQC2wH6GSrH3SqxzCMKnMB2XvnKECWBKEs7r7xrVWqB9vK8TwyEizpecqkB5imRL1ibyd1R7SEBwCyp",
  "key40": "3q8Q4kSr2oce5L74DGZEiyzcM6DJHNfvXCxJ2LWpkmf8s2xzm3ddccrgX2nPsDzCx73oWUDeBP2kBkuepNykG6QD"
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
