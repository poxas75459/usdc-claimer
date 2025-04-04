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
    "3z8Q1SR4FAGsm3qCxEL5L6BJ6rJ6qLDdqiHZ2VVwnR5AmtBd9J7ou99pXjyPAU6xFiGUZ1FTghGZqSvpBYPqh8oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWYzMkKtnLVssZ2DhqnfQW6RKCifhjCS8TAHDPBEJs9KhcR9vtrM6QFSZM7ci4yPFv2gYRR3SqDTCecXi2kXHJD",
  "key1": "5gamfH4AexoJL5Dy4rptFwRSuJRwXFRGdxLXjWWuiYCZf5gb1gJeSqh6RMJ9nmZ6M1wwpt6fhzCUPVqQrCrAV9ga",
  "key2": "41dVagr3fL9ywVW2npLsQBckQzPyS9aiRQasNc64BjRSqmebEXPGYd4AHvspFDtjC1mqF8XvkTRYUSASY4KNd4e2",
  "key3": "3enbM7aTCPBdQpjmEjc3EsECWKQHpB34p8eJq2jLsn8JLwgAVRaqAcyz9A3MnWW3CwcVtMSrVet5mTE4VUGp4Mzr",
  "key4": "QCST9UcktPq15JSxPh1M2Z7kND3MQxs4kcstFV9oyrpS1fz8TvzfsUyoUoxhNE3UyzkFjDE7Vdx4cjuPDiArk4L",
  "key5": "2hsPthFU1rUgbYcQ2vst5HZ57fXFMgKFEJSXXwwvAjcNJJ4cgd9GuPqhuzdgz5ro76vq5VVbiNg4d7bvBMsb9kPY",
  "key6": "2ty336VBpb5sJXszSyFpurtLPmhAvtoJm1J4p8HDVGSj5ShAH5F6SiqchJ4TBHiFXtw5gHPs3ak3wJU3FEzfNM9d",
  "key7": "24JjmPZr3wBPCjaWaNrdMzqm1qM3hJxRM11kyhNhsLDPBJLuu1dPymZUN5bQM8CVbFQZcjHrad4z1fBKbv8CuaiG",
  "key8": "43DNkpMmAmQtWwETTfB1ufYo7yxck6Buzfdqw14LTqPoR3iLkztfQg4x8UNBnFmu3u2GX5rSiojg5vpz5JoX5ELa",
  "key9": "5PCqc4mqPzhg5Uxq2KkEtW8nApi9CZCKck5VWsJcd37FFqVpbeVEa3NH8WA7x8DdcmQrxu6wJ4gscLTWPtWBzxRy",
  "key10": "4gZk3zqHjJ3t9wAse4hsm2juVALcWTYfZVKRfHr7NtyjHWZqFZjydT8ApHMmBJvvSb2smJ6RH8PQJ3W2GYTnK9xW",
  "key11": "MfBtCUK8z28R3UKe6Zkc3eVhu7DTewiFTFPynfc4WstAWaF2scm24xiZwn8mVsVDjDjce5FGeSMnLnXvX1FFKQB",
  "key12": "2JSFvfPUcCSyYUfN7dEXgLfa4tZs4aF7jFWnzEyZojkpRYFTGF2oajusmAcg4bL7PJgjLpDQpcsArn8UZKkNZmP5",
  "key13": "347VX7scNA7iVZtZPiBY6PcXPPTWXdhKRj4TBsFwFbQGzjghWwjFE9fB7sQKDWddy9PYDPiznGHiPZvXdtjYDNHx",
  "key14": "32eY8zpuTuAVL1vdN6oyqR18MhT9exAC3nS3rGDCi6omq1Jo8pDtas5xBUg5BFpWYc5UvkbZDUK4rndUs81HXG9t",
  "key15": "5kRCuWuXkbvMtzRGzqTRyxoXy8KYbjpmrCVG7D2b28NBp3kDuhExUVnLmEtkJGFjhRgoaci6jDCqKXn1a6NSxBy7",
  "key16": "4zDuskzmbWvxMfQqXkKikeLuVMaYcAaGcCARdPtxsGi9QPCj7if4xxtWtYxaajs1mY3dngAd4FSNb9WiRnqPpHTp",
  "key17": "3DdQ9F429W9HctxsV4Wq7BmFNnBAfQaufxjunb9WxLERYgAweDHMnvETEvme28eK3t4JXAdJjSvgueAtWtUhjVcu",
  "key18": "9pMEfadGKkWPoAVs3P9Yzefw4TfTxk2rUQmXhG2d2f27hAAUzUXCXbpy8nwQKxyZKdoC2hjmVhEZWs3ym4khBQx",
  "key19": "xxrsAzZi8rP9mHEfPcXHpj41ZUGKV63VSeo6VEmAWxuAaxpzKNRZc5doSDdoLevNf3wE74bvhu2eayRJXukceVK",
  "key20": "2EBiSpP8sf3gUwfs7XWtKcNDEWPrepM1ZjKRkbRz4YxGGHbscMFJ4Q4izcwxhXwRQzJt8iFzM7oGSDbNGTYKXaZN",
  "key21": "4j1PoddzReGRnxiFYZTTT2Cb3tpm2BkXiAEuxDrfxX8P7Xt9CsAeddJ3RvLRJpChFbgJuMFpHUdR14UFSF51Yiv5",
  "key22": "PKQBN6Tjx8fphBBMo3FUAGXSf8irH8ux9cpp3iFA5YX5WmpjXn7szY6zWv3D2C4YrhCbpQUo4xQCsfgEof6yRJh",
  "key23": "FBsif45rtjRzysrYffz52AkjMqsyZLYxkv2oE7VoVruQMJPaLwQDjVs3ngCwRbLKUmi3cx7ovsr6ppPwPSU5gax",
  "key24": "5ddoBqT8Wwj4EiuEf2TA6uewX95Vv65GdrmBjdhR1B1WWgPVYiyMV1xW6sKhS3NGC7rVCFDpz4vqqjhw5cxWYXB4"
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
