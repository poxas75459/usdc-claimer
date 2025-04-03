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
    "5hNfQu22aXJqkFZ4R9Czwy8bKMmLibqhwXdk6434nGYTThngfUzEZZogVQdS3XUJRBHpTog1nHZfrrDW1xGbQA3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGiem82DtTEyiGS6mB1D3ZYtch4oeZYuyMUnqKVgQ7yjqfNRQwhpEDZCAVQy5mrnpqnvP4eBabGjYvY1A4WERRM",
  "key1": "2Ec1nYKzewPzPE3yATds3F1uXYt5RXnPPxEF1hPbb5rcwDnrciHqX6Bq4g6RYTqm1bGBZNvXMw2h3CygWTZD7XiN",
  "key2": "4Nr9tVn7eSQpdjhx9US175SG2eCHHpUUxZNwgJDMFWdJ8xD5yyciHPaj6z4AnpDEew7PegzdtaX3C1HTLcdPuR4g",
  "key3": "4QnJnEj6VNHGKrfiddGNDt1cobyPBk7zNcMXumGKZbqNU3guVWDpPEArLJspr3cmBjqpbS4eDeu6nBuETEdCctYJ",
  "key4": "2HhCPK88r6wY77iXv1cXsVUfz2zmfzCRTKAvUfuQ3nbNymdes7PEw4bVGNZhb2cKmJtCSPfrQfn7fTWEkHs7gZsT",
  "key5": "2XGRWknnQt8WNn7pm1RoDh8oWYnjZ53wSsU8pM72oSbUygqxHMfSeHSqXmqhpf5Q1CmK7hzhCSpz8AiANyy784U9",
  "key6": "6Abd8i6zFuiaUjhBS5SzZoSKd4Ri7kEbSq8HperNjdD3YrHj2cq9V45PcqE2MW25fEgcBg6LCNLRhnQA7n8NA3D",
  "key7": "DMHBpQZ2U81mfsEAsfhcLD3tNPSoSxcHpv737zzMTrfAFAfN5GC8rp42rZ13kNDWYuooERqzovWF47E7rpew3wC",
  "key8": "2vgAmrYCCj3sZJYbsr6gaK5ivFdeaDk9B8rEqtec6VBNBbkxpMWKVhGK3LnNZoyL5Fe9tmCjCFE52PQ1Rcs9autL",
  "key9": "wPLGUZYkwwWCtsqyLuUw8zWDC59U93CnvHfLmjzYrGHbBn5kH6aPK2z3eQfYipBMa8pp6KDv3uWoM7Hf1uchusd",
  "key10": "gALFisPqaa3ofFJ6Z8SKAK5tVKgAajSv3a3Y8E4JKr1bpEAchWTuPVFeR8d4bHaA5du4Rmqh2KUYmRJu64y8zC5",
  "key11": "5ENC2dg7F4SrjpHAKmivJyFMXmKkY5Y65rRMm3eSUvnJqCN43DGZpaeErUJVi4ntyEeQQyZy5Ky6RtFQrgWJnVgF",
  "key12": "eVSMseCbAMfvNbhf41Hn1MPPcGCXJss4cNh5mbkTH2FEJNg7vNN2X3FFiSF2QmURkYpNMQwZuuDPuq8Ky5jZLeK",
  "key13": "5o7aG28q8DyHhC22MZwKpfNLwa1bFQpt2KWC6e2sWvj593o81X8GGiycm7w1hGWjaCWnyVcRgiZwGyYnVXaqK1FF",
  "key14": "58Zd81rR2N8yjgfuM5tEtuapqGLNcu9CXFNYWMxPc482UWTMozGRZksBYg4MJWHP3CdWX44UGAueuT2v4q1Xpoew",
  "key15": "4rsP3UxwRjrTxTwyciZFX7EoqZ77nbtwTSqVsu626jxWXdH7W21DtBqzZnqMESQCkGZYD8EXaR5xkeGeozaEKRbX",
  "key16": "2YVYeVwj3p3Fvcu7XGX8joZpFHHM1Eagv7s69m8Gjf1jfLtMsePJ29niaur9StnuhYjSMUcb2d6jjbK5PuYMi5uL",
  "key17": "26n5JYvqmDFYMueRs4wv79Emsk5gz2rxCvaKKtNg2zH12937GfPrwQ3YQwAKYv4M9fDUzTNVDMmdBo7VGAMfyXj7",
  "key18": "5dmChtERnYzJ1bfgL3NTkDEVm4XztBLDg12MUPzoY7DjEVAqStQwuDaMwkPpCYJkdyomvmD2kbApVAAjXAwXN1ba",
  "key19": "5GRTdCeuCZNYRgq6RH35W965RaYURa2VPRfSynVp7SMZKJDuWG8MkWG2YLcVm6PsADWSddQxvC5zWzw7Awp97bi3",
  "key20": "24CC2J4mxLzSzHtXEEnoGfShcbQCnuKjj4jn2Mcop4FTytMcNaCoEd5xAU3fq9accCSLDrq34zY6wocdadYAEn2q",
  "key21": "hqke2esUAEZQgx9RDekamBw16t9WmkWvukhJTns7AJkEcvTdDRcwMTRy2Pu5trPtqtBBLtvLo3iqiofsiotsC51",
  "key22": "2J1QXyG1FoRw3CeVa7ieHKVKbKhfS4PcGLEFSvjDBP36aX43uzazDBNfFMVZp512zLy5wBukGJdu6Sy4eEgYavqr",
  "key23": "3svDWhgRMxQ8JzE556rKkcXbdC6vcTDPieYTnKnx6BLXC8Awxv7rs4taTpZ3mwufnmsEu8AKH8K6kRSBfBUvAUQ3",
  "key24": "3Hs8HvShXengoQ1DjBpCcLUCwVPXeLrbEUKuMq5L9PSsszdKW8fTEsWcuvKrCyRH52TceF35Ka9E1GdNbxaSTqsc",
  "key25": "Ayf5qLBT8A73bDrjfokugCK8VNX3sK4jr228fhPMkEANdWyPJ1tkW8B3BRwNCHhABsznbctK19ysxRzg3uVYmMq",
  "key26": "61YgzLVnXHJgrxXAuXdfbcjhT6yt7LDwPvPZrRY94L9LM7FgE1PxvLyzkUjHSrDQ58VqpjHb4gk1XrrAjHsGdiAH",
  "key27": "5mCvEAVPZN1qhiLUVn98aNPSmLznrVwdM8pQHakKyqYzJZ3iyEEzpY73YV9faFAYkdWN73eqFjgJzxEjy5Gvmx5n",
  "key28": "HyAuBKK6ZAEbBiAk2Jun5VaAXsmQZJ7UbHJGP9xDYffxNPqwepJQQU2YZhAZP2vHLLTJYQmxzbwRVrHL7HzW2mq",
  "key29": "25Sp9XpVcpQ1W3fggGqF1HjqWxbMueVv576rQjdJjxAkB2nVQjLfqzREpKWaFtgYisNQdcV2gR4aEYiD46NuWiS5",
  "key30": "4SNw58rRp7aKFgrr2pMqr4PgZ4YY35AVYcUVfochUxfE8LEBBFpPgA2nEfA1SSRre8QipoyQCeJDYYbxcWrY4kNn",
  "key31": "2jnRiBKQLC9ohVVyAE9gbwnwwJgaiyJTawjsKHyeu7ux9Kb5SFUbBtzTRAhUs5R1dCoqmGiQcjfZq7tBoaqoNH8f",
  "key32": "4LvWnf8nZnwD4t852R9kscmMd6Hcyjeeyjuv4FV1HHFG2WK9c6YHjseDGRyRSdGKnE15Fa44d5UPm3oBp8rycVV2",
  "key33": "udwc7gGUnkBhaT4Ume1MBCZJUDXunwPuq69huVhGcWUqhKZXS1unNmthLGcSYTeyXdi1wfKt2KGKZQu5ADMsVtJ",
  "key34": "3Wu4hVuVV674czU9QyFFBuCzVJz9D6X9DbyS6mdYqYiJCzVXjwW7RPmgy3TT7n1wxD6tptYRGgK6G6awrbuqMbev",
  "key35": "2EE8QYhgZRRppQLWQdsyHLkRvpzHHMcgJSNGLuxmj6YEsihSHdiaAyHxLtoJzv2tb6SWKSzFoxpTxbUttraWCQ6q",
  "key36": "m3cV5jzSUJRF3ZcxaEb2CL5CndavGagqnmp1YwSZCS83pNTj6xQN8QX8KL5zcA9SrhvvQYEWhYoQPSCpaA2vpLQ",
  "key37": "2jEEEGqHw1i7T39pcU4j4qRbVkCSpVo6Wi4xYU4AFWdkHA7887n54WoufQviMdmSdfp14eiXD7Yt6ju1eiweZBWC",
  "key38": "PVY533JDukNy1sC2Mp3ukf4DE5vDGsBA3LhRi1ebUj8aGqjmJ1ZkkbSoQBq9qw2LZwuxi9kx3TZNzYUDsqtxar9",
  "key39": "2Gtn5A21xcoAwLSJ37sMdeqbBERBHmrYDSzwPWLgFLQXYLvSopaMCkWCLZ8L3kBgouHJSShCa2autWUmSpGRgxEH",
  "key40": "3rYKJ54K88PqErrWVvE8KD6bPzq36agSnqpedVqVpT8JrnXPZZuwcZsKBgLxzw3SGTbpBSHU7CJAe3Fvcg8BNi3Q",
  "key41": "5a1C5aHaSpiLiHBkvGD27y6W8aS3Pv8xp9ezGFhaSP2PH3hFYn9iWVLMHk6N4piEuSFD5CfCXF55Gxaz1EP2xoaE",
  "key42": "2PX4q1ySd1uH6D8ucJg8kgi1cJHgo2Dmj6mz6788g76EVCFmEP1u6ecohdKdJ6pVyji9Mxi9DLWwHUBSJBbvUTCc",
  "key43": "LFSKMbz4VxUnquf5oPwChoXrGor2G96iyJAeaVFoMVZQZP3uZ6MWoBfCdkr5hpDNDJKGw2e4qPvr4q1YBxsN77n",
  "key44": "r2jR8RXm4RrbLQPvyqfH2wsvLP9VfqekXTdBX5NpuaV7SpqhTMjvwD9gwYxa9KeqTUphY1jExvtMoUR4Yo7Lbcf",
  "key45": "3wYF9AqBFoEg2ndWGQ2N6DyzYxZKUSByz6aDW7Hnr8wdhH4xBskBV1c6wgfKK5TupN2jQvBKhmVaWzD9ZEXDDrvH",
  "key46": "5nJdsND3sqAUrxz3MPss78cAeLJvduRfzG2xhvyuVE18HnUybRii56ubCdRfRhdjP7nJ1BjoXB1XhouYK9K4k4pL",
  "key47": "2PQA59ozCwSzdb1Epkk2svvVRXmH9SvcZbTFFTF38BeAfFtfJTxK86iuPFrCZ71U85mTAYQzYGs8FyTNrehBZPEu"
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
