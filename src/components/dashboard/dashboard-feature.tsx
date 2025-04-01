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
    "JGh3UsR6RHP4Y6s8wfKs8GnHhDk9UD7dLERQ4KeBJSyxYvkPygLyZ3gL3LcaJkrsnx6Jfxfxa3Uqcg84BWgttZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9FaynLpYi8tTKkkZPxdKn2kLQ9wrUd1fBUhqAR2XBJynhHKnZv5WBjNyThqwmpiwjQx5SRfQk6tqqAJcaZmZm5",
  "key1": "23oRw1DqfWUQ8REeF9f68kAZYR48C1qHSCLkJ8YYZrrxoGsX4dc9eHH9hNDAsKV9YgepjxMykk985dGveAVVLwHS",
  "key2": "2AefoZUsNjqG5iGtuCHpg7XLJaivkCVzgcfYtrjX95kN1fMmZbriNo8z3fw8ueh4R67qJwgBJVRwiTj6BGMaix9g",
  "key3": "4eU2PF86QHLx4435gWZe9mJqAZorQ8rwpW9t7Ge6B1S5ASoVdJDmijHzSfyFKfAScERPNvj3j7s4MjoBFfeDZZnW",
  "key4": "n8mxNnirmBFNFvMuN5gLxbuwLBRSjwcowcYkE5x3qUcKcAxuBXwq2prcPPfL2piGPvTtHf1LpXirGytE1TjJMWa",
  "key5": "5FPH89HtQFKgSfFhnoJHknVE7T8gzXnLmJAd4uFTno1S5mmk3FqxXwRmdA15TJBVYoSnMbVwBCPrhrbiZX1yVzcK",
  "key6": "4hHkupYRWrcgWJMYzijMCmA5AfqJdNSchcBQqCKp2EkjKvEmSyVn1m98nGHJBA47sqBpkJ9aUCd7qJjLwV5t4DNE",
  "key7": "5oEguC85HmaUXqe6cdQ33Dv98gZNrVM4chmwP379PfE6fpsX9inAgmSWDCZQ5kp7b9JCjfiUZYtEJPQLKekf8LpJ",
  "key8": "5sXs7WBK4AaS9fCPvFzC2UhwdJbfDEd1utJjfDXJK4swnRSRCf1iCvvnEadvEi45LmpYFmCMM7ibqdrAULgnWp1N",
  "key9": "4wrDMQMnp19iEAVkRWmCPxbYcDMFASLEvrLuDEaEerQMrsqwakoQTqRiEuK1SE14YdkXNyKmzs41Do5rV9W1akoP",
  "key10": "5LUthtYjBPFS2US46H5p3WLgexUmvz5dvPVrTyYKJsyo5yb3MyuyQEW5aTmYSe2RWdf7KZMF3GXAxeTjkdc8xD7F",
  "key11": "3dy1o4h1ymPLPN3Q2pi6yZgrpHeux5NMbLhWWKAyb4ero3escbCFvaskGHwjLMuE2rkSwTun8Et83j1nJ1rzzeBY",
  "key12": "5dShm3nYKMzG28GQ3eQ4rpHNYBPAQqMn5t87SrQMgBP5NsM1pxt5sdKgmGfUEJuHCSyv3HqZujN48gffFVkkFgnt",
  "key13": "zuVEDhugP72UM26K7MAyusg8LDxhRdjaNapY7NJGqnaWvUG1RYpwDxHeswtnNXTbAQ5CNidXH918Uw223rNc9RW",
  "key14": "4DvU8T3HDJXA6v23if8Wp1AhVTFuE2SB3cr3zLXqd9HugoT6CXx5jzEN6oSHbQDryVpZwFtgZ9E91wrBfVUPCsm2",
  "key15": "5WmmPZqFCeq8K6xEadG22cqY7Mjnk3NLtL2DQurVq85QNZNWtkgtzcBHut1E8QB2D8q9a8AKnrE7Tf3S4CfhgFBf",
  "key16": "5v65xMpBKDj5ShKnux3uPzAL1eaY93L2D3HCQ1BZbsz1X4xHrS4YsoZq2CAqeByAwCTMvDxuS4sF8E2QttPZohqp",
  "key17": "2dz1fpcpU7FSGSMPg4ooiNrsBCrDAqLRu1DwHuTdmYYjycBYbZDT5wYKQerhASiovrmGexEm2XYDqpzsk5VJYokW",
  "key18": "5m8c2RFJAhbgiUsV8gwCyzE1p4hsvKrZSNwUB9HooP6w46DpTJhXrgm2dHY9kURtiEapFMztTwenNBes2tmw3rVh",
  "key19": "5JmveejwkhHVobFerbRnmcMzQx3H6S85AcppyazXQ2MReUcvdbqhmg2wtBL2Z3iWJpm95d9aF4sKwUUJh6KCRHoE",
  "key20": "8wrLD8xoRv2WrUfx8g3nW65bLr7bnGhRVP7RaRSJ4DJXmWevJPoeZWSu7AkxkM3pNz8eGCkQqNGxHofPWjPMqfu",
  "key21": "3hygoxxmfmDSsmoCuBL4Wfpep8JijHAEsGMd3hBM1bQBn5VfDun7mLBtBzmREHeW4YW5uqFAqSE5obyvBxLyyHG8",
  "key22": "2h1BC4L6qFdymqb5NHNqhMrScjn7uaxmYuZRiE3jkZ2doxLSm7CgtkfZzQPH3UYnZEn62NBXgLXQFN2kSWGucywv",
  "key23": "4vFaGbeBB9RCuFdrb1U7ZGtAjZSSntw3CnoPyX7cW6YMb5vfGooejWbBh1SugjMACUwfu8fWVRKDwgpAR1qU7y1N",
  "key24": "rCALxSSsy7BYAXNuqEzgxQKpzcRSwz1ZN3c3vuk8jydLPYfzs1JvsuQrhh8utTQ25vNG9Wr9ijqF6Vp9CaCTp5u",
  "key25": "44TkKtquiTbEVM6BzgmgUxPdmDfAJST8wn42WAdweh9NU7we3bZHBLyesoBvWeMq5NJW4t6HPJoo8HgYS1LLZpXT",
  "key26": "4BzS8m8BLR83MQChCcXoZYKurqGdNVgTLM5cKKeszU5SrrhD2rQuzoaubGF6B3REYhakP7A6mpm9mfbM7kVvGtYU",
  "key27": "4JfrauP32Bih5BgPeecGkp7muCXPodTPDvVqFwv8JbD4MRt3pjvNue4dnX3XLcrMybcWMKak2dy6Dj4K1ayEMn5v",
  "key28": "3EBbNSQzHpTAEZSVEdeUSQ88pEKACEY4AgQYq68E91Z8PXCrmWarQvHbtLPaxzRJMCeKi61fpNXGLYp5SCGvenjd",
  "key29": "fiancjh3FFeHoQZoqDH68ZAusGRGfknXF59uu6jAJGekRV33Yd7a976eWP6RB9QwL9GB9r33JVSYANVtXz29wmK",
  "key30": "FtiPf5Yt8YTrPUbZ6AB5ZqfhsPW7PGTCGk7zyo4JWwpYW3skESqJgTTaaRt4E1YVnPLuafbdFHHZJisGNhharVL",
  "key31": "64UESJTjqLR5ksXXpHBCH9ys3e8iE6AdWYAzZG9QTRey9A9dQ8JjjihpE4BXQ46uSvt2odaiZyuLxR839BcUss3N",
  "key32": "4fZPUx8fBfH4qHx9Z6scvnVQFg86pBei6iRa4svZpDR5gwDTfzhMHxse8BNzrgCeymBJ4tV75nY912AuAR7gEnun",
  "key33": "2YFHGdHFsDrJhpZnTQPfcjdKrqB1Sczz2MhwZ729sLv4NfjzT1zakE5LUR2mBRV5pNQgdhDCmsybj6pBJW27zB2y",
  "key34": "dNwyxZ7W5bVYnnfMdjJ9nRP9U6KKHbgD3g5GVXjNJ4AzBXmSaAB4dZwXrqBZyBASENHUaqXPijyh4PEMajeadHQ",
  "key35": "2Po8EJjNMVN8Hcrt4AsgmNS9bRczy9qRafEQBAx7KE1YwfEj4ggbBAN9VA5u8eEX6mFcR14VWRihG6U9i8geDtVf",
  "key36": "2rU5gGws5pRrGNyhNPpUmMmVY7tDEVvpJthEvxnowSPVEEhnNQJSCwdPbb5KqVUAq9gPXccu9oABD8AYhMTEohj3",
  "key37": "iGSFwcY5yLFH4N91YCVAscTDzvoTrpPhoePif7fWKPjNXKoWCnsYqegGmBhXWTt4S9KqECcsFnsswDiAb63W1wE",
  "key38": "5kHuQb8C9siEiNR82BgbNcvjVRPuaDWCcYQEpciRUuensB91euy3uo6BzRUUhzApbMSEZRtNuhrR7xT1YnDppCdP",
  "key39": "4dDVqXVun1j5SYpesYGEwot7ta4rSZYdnvjzMc9R9KZwTBw28b8z4itjXoRLgKBSvTnhkVWukKeHxRD17zcnjcQi",
  "key40": "3wJ4gn3teSWADsmHrEqqMSuSp8jK7pMvRerjyKaKnwWrZvLBoVrQRXdYwrfty5LjamCjS7y38S68rKWbLTsxfdyb",
  "key41": "EHSw82iHJNQGz7RkCm6xyBwvLRA1bshfU7T3fV9iE9fkcocEuRrtRA6xgwTwNLdXRg63kAhXuBAsBQ32zunX9WE",
  "key42": "2kEfdjSHUXXQR2tRARgwuwJBK1NtyFijSgd1qySBamM8yWpp5VJAEwJVsGueu7tWhfmWbDwdtqdMcjpfNQJiWFXz",
  "key43": "3JDUpsXnMTv6HDrBQCsjhaEDtkuewY6XrwwZQjT5AF5fWifCANSKkvjHqzZWD8wpMM66rRv9xY3uSVN6CdfC6Qvn",
  "key44": "5QvHPyJyT5e9HRKhizEsoNVRACV8n9oonm6U14gZrWoWhEKrnR6jYZHFS3fiJx2LWf5mUEgJFdK4gmpDehV4G3kP"
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
