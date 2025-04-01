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
    "5PVzizfvy1Dp1BPC1HLM8kJDTGMLyPrYkVh2tR33ATXEFkpiEFPtMF1MK8JmM9Hs1Uiw8BAJcKUmWoQLrcsbR77V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jb2K65MZnrBEnvZwzf7EzGNeisQMzijgi2A7zPxBQ1mxPSviQjuD4hZu31xr3GGnuFvu5oSR12zve3jBMZy9atT",
  "key1": "4Q5qiggoskc7QqogokGHBfVrAL4ybBBgrKjUDmyb8cwUiAdSHCiqrAsnEmokmTLjXfGPxnwxUFQ7tuuE8SnXXDTF",
  "key2": "zVMbWSVofrJq6jet6UaUAbyM59gZr85dpcagTtB7y5fevusnPQNm1DcHkanjfcDWiBfscVCXwcz69SvQSGbds7D",
  "key3": "6GSPk5WVqVriEtDpFKnutEpm2Wo2Md33yBmUGtxiQYj6ZymGoeYJgpbQwebtSGiV9KjPFGqTwuC2Er7JMfmCd1k",
  "key4": "5EKxwotQPaD9KuWos9gxYRNynREaYdY3mpa9V2zaqeWmqo53MUmb8bgB9bnfjyZRoQmpaeWLP2YvRtgMEyZKFWE2",
  "key5": "QKXVnA1UaHdkGphMqn3FJdmfnJW4Fi6pXdbAs1TP51xJoKF1e6WyMwjHHtpHoCtP3WeQdi4V2rsRVmKNJj1sPGZ",
  "key6": "3PJY4LPdthZsQ7kiCEmaBiiXYq67wKqgyAaCKNLRh1YeL7HB3u2PA3A3bmSf3d7AxgiVP12816HpZoySEUWU3hew",
  "key7": "4uh6c9qWghqfZnNUJnNX8ZR8ryWAPsRqK8KQNxYYZYzUyXF2dLZrDe1WbcxaXsP9Pyza6LBE2Pmf6ixm9B53jhSY",
  "key8": "2Vo13Wn2h72Q21BHUmsVxWmDhvLff5xSLYrCgUBpByBmENa63fvD8HJqdgDZy1eWAdhe9CCpnBPJj5Ac1CovMJhm",
  "key9": "3p4UvWnaSypupP9uteXavVAXLWBzPoNz7ikUGSsZygSTD8wvraKuXzMoVSoh2Pj2rwK9iHv2ZKFibJdXkCq4SQWQ",
  "key10": "5EeAdW2fdZomnWRdi5XNZhXsY1Z6qbaqy2E62JAvsG2BynQcUZe4b9GQNixLmYF2JRKw8WJaHcGTRZRWnm2GLQPF",
  "key11": "hZXsJoaR1dkZsXkHhJKgyPst2iQovgw7799kGsrFbL4w4Z1GMT3uuiHL9x5y44TNcCbiFAJTAf64Hm9c12uz6Rt",
  "key12": "ih4nPzcqD7w164vLiWTwtQZjWK3h3ZxAcDPXgjrfu1py4ZNbDKgboBwPQUD67ayoHnHQW6G6h3vWr45mFeMij16",
  "key13": "4UQxHnJncYu6gMQjE2GAs62d6u5rF4Jqjbp9yYSwacDYGC7WECQa3LLofvvHdjbUgKqLxoy3kvzMYmuWK4ePNQvm",
  "key14": "5WLWJLxwbeR4bZZHgvLUbQuof9GMm4ybQau5MhwTiiUUwDqpnP2akAs3uhVaJYFGCozWruZ1NiJJGFc8E9FYsors",
  "key15": "3NPRkN3ZBCfVE9jD6o1NJVSwqA6bF9baspwJjn5ewtDaJYsvt2YvwrWyy1Fzbs1M7Q8GkMjeoniSF2fDd6FGPbuZ",
  "key16": "3avsRC33VsyATXhRshGi9Yz8cbxW9vHxA9zWU1e1QrEu75PH8Pdpgv52wEtCU4V4WriZa9uykU2X9y1Bs8aNFNJZ",
  "key17": "289Bc1Kt5HRAATiV9EurHyMBwwxfZJWF4RG1SB7cVmiDmWtzW6uWh73FfMmE6wuWYiCWpfYoKEgxR1t9SBLBYwC6",
  "key18": "4yxXgdCXG8r2XoXTnyiaDWDvssUF8iwrugbxcPSMuBroAj8hap2sQnUKcZeJFbXiPUdXiKbtTK4aoUi5LTnNkuJx",
  "key19": "5Gd1neAwnn4xifCGzMv81xURB1wPgk8p8xqGz1GrUELKC9faCcVVdzVyuxr94VtRN7Td7XdceuUePzbvK91Xwx6Y",
  "key20": "5HrSMvTiVX6KwRtb848mU6T4L1x4vqv2iWkdNd3MqmiBiNQH54aCiHqP9d7vFDxwXks7LRasFdPiNrm3PwqSer6J",
  "key21": "4J6bXmej4MBk8ANkQEmpoXfbsKJooN5Q4aa7zZndBxGvGMRh9m9ViVCc8siPdQyfoLqwA6R5YXGkaAaaHU4sL4TD",
  "key22": "32M4878w8tQ1fGB1Ejm5gtSE6xMTfWh8ZhUtgCzAfqLQq21sk6TFNW6F7g8nQaMcxMwHuz9YsUq83tEbxafWsmrt",
  "key23": "7aXL14aWL83okHgPcUpgoDur6FbfNmPc4iRv1MSDGHZG1ncshmp9PtzQJboMa8hZRQHnX5yykhkMZhpRCuSSVFx",
  "key24": "2f6MPTuynjYkRgSNLve9FF4vaAExo4Tbe4UoLnQCQkoWjs7gRhobUrWZ2ThcMz7zfTLgs72zBf3Q32n2TjsYS4bY",
  "key25": "66zM7MBUPANcThDihstnDGN2wDfdYsbxUc4eqj2p5RjvBceg7coeQA2naoCsMG7YRs5efGene4q41KbFbwGsq6UU",
  "key26": "212Sm6yYJT9nF43UqHqzGMKrEAA8uMTV2PgFXbtYW9pXmqTX5DSGhHtGSyQNc6snNYrypYwJ2CiArn6sXWRT4Mcm",
  "key27": "4NQ3wPYd7H36EUkFayrsWeYc4FcXuVZYdf3FSk7a5zdtZ5PdjV9PQe1Pz3K85Zy5tawHf1mDt87GGujpZW1fCQ2u",
  "key28": "4y7p6ktuzed1M9jXzPLZGeyknH2Ndji4XdrZ8BHj6rrzwuaMHsBwxRcZgTP7yPhJW4VasXK8foqYGhpLpF8PFeTX",
  "key29": "4rrbYfRCtRRv3kLXRbJAFmuSV5K1gae3ypnwUP5GE1GkGQcUQ1vNzjN4vjgUvK3MFY3dSfvPfKa8bUZy68BtZit7",
  "key30": "4T7SJKHsQ7sck5R963JLYxgtQg6u2wDxjJUNxgAsiQbesuSi5b9hqjfyDeFnoJqhnViJVAzdntquWxB3aiceDfx3",
  "key31": "5JqmxjqWpbPk3F1cvnYkjGvYoTUdUTQBm9MDw5R8DgbnxrbcWZAfmHK5AMc5EKAUWMCFSozxReSg2CVaz26WFMhU",
  "key32": "65QS5ZnTQtgHDXKg6Cvms4rPBrm76tNrx29rh9KGdoFPEAvdRcFA3L4GSv8u6mZ3N4pudhMyVkcpdXFYGEd1GQBd",
  "key33": "T8fRAW2tS7cYdkf6z1pKDQkrVQMR7MNqqgsu5mViPD44cHNNPrQnBoCHqbxW2iJvPYLAJ431bX1anhaPoXTBANS",
  "key34": "2CuxYe5Fe9E6bAdyvrapQuqTACVNMFeAdN1cvs6LkWhGX53bnHxSZsZY7H2WEdV4qByjhDFKqNuV4qrjYxBp3gzz",
  "key35": "25fVwBWxZX3KXp2BQEmTGWg2E3JjyPp358DrZaJNLjNaXZ1JurYJXZ5yJZygRAPZLNcVxPFPbRRwFTJhPvq52ftj",
  "key36": "LN62r9yPTUWvS7NT2rgfZ2jxbj4GmhsY5QuAHcuWkngkLFvpLYWfYTk9hfbLbhfKkSLWrKACmHXYzAdDmZqz5uF",
  "key37": "eBfZw69fNEprnr3XnKSHE54Ya2M3SNXyY8PBKMCNj6RRaesUHR8cXRt65kja3GAeZmot2Lih5y8jjivXz4YFeV2"
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
