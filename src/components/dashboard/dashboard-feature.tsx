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
    "58c5sm8Cd5JEk5iGCagHFJspweGWeWK1iggG1LZPsd4WiCuZR4xmeTdgZmJhWSB7z2D2z1Uhc97RLga9TfxoEqrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82h1Kfxs8CKpc3Uf6KstzFKv8sM3pHWa172mXANVjgre8GHwoEDyYLs9rQoomt2CBDHC3FGfu2dc1MmpwqiTSXV",
  "key1": "344gr8UStNyYM955R1n8qp5Cs9mDg28QNEXbWbD2LHus8mAKbQvidHWxVftt47CqQAMEhyH4R4V8P5a1zNP5LFyf",
  "key2": "58L7CUS74Fkr5kkRi7aoyN1mVSbB2hTSbeKiFkd4qeUF2XZxMJkALwYW9UACgfUwsGvZr6Re6Y7cHtx9Um5ZW2o1",
  "key3": "HnmTy2QR71ABQtdJDcyXasYxL87AsN7t8wFJesdoVneH1LPksr7WJL1dCv664HpfLsztGvAASVKeJgpzhgHbbFx",
  "key4": "4fpfgo78LhHDy1EpfPMM3cH5izuNeHLE1TBRQFzAVBCyBPuUfocX1nkKTtFpejYpdpbc1oCLe9viB68UZtK4GGAm",
  "key5": "65poeo5R7thALAhpWAabEaBkzjARpXETDrQhLrMBXWcCmsmsPs3hq5ASmZ8xMQj3jcaTqdqPps47yaiK5QtGbmzZ",
  "key6": "5tMHUHntKz6tjSpsSiwYs5SxHpGEd3PtxB5UBxNcYQwza6inLRCbMa18fGRJsPEDyN3WCdeqQMsXgYkzo1v4LgcR",
  "key7": "2izPVr5Q82PRGdzzLXch1qFZdaCNQJZqQRRJHCRc2ZPtF35D4mV1gC7j1WtGmhfxx8bn66KtebFgtfdk1fG9fFxA",
  "key8": "3PbTvTuxc4Xjj3eY9fBRmkh1osqCiXJhBqggBeSjqy3ZYHWoyk6nKGuJeasqDzbQafJD9QoBUH44zBQrL1CauWmp",
  "key9": "5z5ocSbtHw7UsHVahS8tUHaMTn6nF92GTARUb1DL6wtqLaozMVpeUDLXekqmMWkdVVgDAipmMKfpp9Me4WUWdDn1",
  "key10": "p82SRtdACpbxpavUYphrje7AzozVr1GWxpfqBvGS88gE23rWGSE72B6hMi81QZehtyZ4NG3qLD61MBbG4sdhs2B",
  "key11": "5HzDvDgXrgB1HgbJPfZYvNw25U2o8xdEUuYyT4EkfyBXTR5xdosv5PiTR8iHGLnDqCr3dGbX1TkkMqSPEZgFEJjX",
  "key12": "3GARdAeZBPqcuQAAKt3WBNActN5ycKUJzBUHJq1E6wZM21cypXp2BEwiy86fSbdwd2PGKLwro53SwWWKVsVcutKv",
  "key13": "o9nXFZK1Nfx5e58PgKeuBXPJHUsf7rjjuWPBh5V5pXbamyaQR4Tb1H6i4S1twF4Zv7c3vAesM3g6TAkw4djY8u8",
  "key14": "P8qRtJTh36dHD8c6VAg9HZfGAH1tKX1QVv4Btz7nR28MuL8wjFARmhBA52teyftdEVbH1BLCPj86u5FYw4KvDXc",
  "key15": "23kPDK2VEFCx2FG5vZdGZ5sWzbG7V2XUxjiykC26RTbkDFZSs3BCuf2QdP3Wdue42wvoWumS67RduYFZTAYdrmJK",
  "key16": "34ubaAQF1CQW92URoZ8kUGKPeu72ffC365XSoQ8kvQA9xmn4FXhBmRcPbM4nA9QANDtBZ6NiKPJQnSQ1FGPXhspv",
  "key17": "2U5NEyNMT9P7AvRNtWpAdFwPQwHvJW4QQuZhJrswdn6vNju7UPRL23qHaKfNndQWohcjtFRUk1HmmQ6VtmocC2tB",
  "key18": "38YGBn8t7wA4RupMLFg4ptiLw1W3eLabYd6CsjP1Pfn95GEoHbEvvyc1vPqwAE1sqPMiY5Ga78qyWX1vyaExGWUF",
  "key19": "5qxkJdWiXADVH8dM9ZFP5SCWSGytQutsUAYxdrhkBsBy6mGhRDYERmKvMzDfmrFXiois3p8HRT6Cvr5tTk1QteDj",
  "key20": "5UDa1NxAJBszd4ESvJTEw5DrzsxtAz6dqkCN64vyCUScFeH6r5ooNfg19PhGiS36mHsCvJTGYBgaLYZM3AzYfVHT",
  "key21": "TfGysHpdTX7oUuH7itc4tCNhoef1s7tyUCY1pTrd4JUhWu27v3g12QjseTwSpQrT4GEqFSvCixjDNCe9kjFpTmz",
  "key22": "4H4c8JXS26x6XfBd1hhuR6hXiiUgY7Sdrq4vrAapBxQerd4GzLucoA3UUAwP3QAKEipQBvBSyKrxz8tyTUDwQxrJ",
  "key23": "HvMUZ6ta33g8kb4ziJnwFFHNLHEBL4XTLKFLPCg7aSGYZsLvNSQBBB1Vqnttv6KDSUkqTmtYfe5ev7f1arutHEf",
  "key24": "44WiFQ2BquawMQaTDSbjxdKme5aNawutviefXRw7ZEwZmaNrngdcULPqoDxTzeY8XCHd4Mkvf4REZGuG12erttey",
  "key25": "52sjcjtnv7GauVpVHFZibnuYwbkysofFnizLt4eNywLdxNbajj7hKQi5FiNnPcU4RU6pDtGXGzYipqNHNpL59AiH",
  "key26": "Jxi6hF9cH9te32ywscKcCQz4urKHUZxt53D8snnYMrceNmWJgbXjFKasWsKD5bNkqz6JuHhYuYHoDq1H2X7yv8U",
  "key27": "THdRR9L4FY89WYFQkmCWre73Gp2J46ynLPzTn744zeBJQadiRweQi4UwqT4GJw5DEQxpZGxVXm6VtduXBKgQCyz",
  "key28": "5XUDyhAxDfxSRu95kCnZUYxCHnUuBoZYV75ssQX6UyrJ28U8vi3sYeiyLKzxMLJ8So2tQ56nkzsC79PRyvfDcnNB",
  "key29": "8vz1aYG8LYrz44SgpJXdSKvZwra7oyGcdxnofX8xUoYRJEU97fHxYCXxnQWsRR5H8gnVqRbfN179sdifPHU6rrg",
  "key30": "3M269pEpgcErDqGGbvMVX53iLpm3WNwtyC3eUoCSac4hTr2eUy25RE7j7KSFvnC6h43YhFsQpFzy7udsN4HF2Xyu",
  "key31": "5D6rUBMtgzYVNuPd5z6Qg4TgqTZA71Vz9MrVdfsk8T8k5fWBtHbEH1HEQvwPW1PwkrqLfXcdFLQnBRi5fg2r9nUp",
  "key32": "4PrMBnpUPQA4uvJWe9HuQzprHwdTXL1GX1pmQkjrz58aPUztAVgdoA1YfZoFy75H9AVpYj9X5LvZeuhaC54byVFG",
  "key33": "HpqLqr2A9g5zkafV2NLqGatR69vppNHH5oToeqMhMxhSk7psL6UTsWJfzRbfWBPG7jRrkwVHJMQpxPHooiynybB",
  "key34": "zhRSuKpBzE5NcHSriuztc3mUV6VYBNVzyPEaxzm6QPH4kX7JY2Wy1WWKhuGd1NvTGNB6SyNhtVQ5Q1cxR9KpzYv",
  "key35": "2gNnGtW1wauBA9z1sZcJpKX5baWntUUKHWz5Xd54LJYFqRNDqinXBymVpRbF4B4jxUwb1wqFHThoRubETCi5N3wb",
  "key36": "3KxacMYh5McjPY7v3EXX8Z7WXPe7cBC8TEdDH1fmbDg876X8cUbmNWM9migVZ8tiKghSwimr3FPGf6V9MSPo6NBh",
  "key37": "5sEkPuNxFModrJuxFu1BF7cpJ9qVHtEAJKiGmTYnipmVVhtb8XU6B7DVeyZwG8mtvtnMaB9mGGfZFtiZ8MjxXUsf",
  "key38": "4HuJxmjxAfEXDCyxCBgzFrp63Y8aQPMLcrnj9fYxpCRRg6JgttBiZpvp9HzzqZbG8xLu3uTuhC4kG2HvUqCkxpGb",
  "key39": "2eRus63bfhjHbkiFMZLGmL1jrYmQog7ZgjRzBHGFK4vdP3w8NYAcVuQyhpVxXWQwyfYuypBazuayovXXTLPz3ZCY",
  "key40": "FGxmu9UyMyKxWhy4DGv5SmGuyUNgpK8ViQeMx1vZmMwKfvtGpn7k9QG6qkqYuR5kiEthRSuHw1AybwZBZmwAXNo",
  "key41": "2EVEoexGdTjhSJFXLt88njhftXrSugRr7F8EDjZx4bFCcrYF4wWBDod8NBpkvrRqjGNi52Yt23Hz37TrkpPgLTp4"
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
