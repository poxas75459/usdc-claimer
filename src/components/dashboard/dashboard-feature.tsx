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
    "i6sJxntELdcYbZLKZ5CZZpWiqNoenY4KrFzRAFa4KzknGb31cs84vm6ma2DaB2SF9VTqoavLPoMkAeB4U1eRraK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E76sf8SqSdQXdhQoe9WMSeZXLy9uDz6w7qpKjGGLUg5NK857yVSujtMhdo4FGkT6iS9tSexdaiyhJw7R4ouFuoA",
  "key1": "66K6egB9HoAepo9iYz6KVFX3M9sZDd2unkmYeFYYc3Lke2FTywEY3cWVbcsDooTGw43dVMWbfXutPqkj3SSVjkd6",
  "key2": "2dFiKSjTgvfTa26AtfB57LKB39dFQUTRpe6iqiADrZJQ6sQQzYGRAzHH8hgdZVwgtVzoPdsgmh56pLaw1bV85onc",
  "key3": "3TYYUBHWjT19XFBam2etwKKn7qdp3RRJGtZXNAsh2VFyznKfN3YE8moCzYVVTRAw2H8cCSaTLCirbPVq1jHrjCF8",
  "key4": "JZwGmQT21vLq9SvGsBCmVjiGhAgoyeKXyJBV6VMzLfSEnDv2hf2mMzsTE7MrKEVqiguFC158bkajJRbs12mLbAy",
  "key5": "2hT85RnnRXxqjT1FwHw7ndeXNpTJqrq2rH71ChpwRGHNDdo1SQuCJ8Cds6mrtp2mRuUuz24M5qiRceJ72jxiB1J2",
  "key6": "2uZuRzfHzFCNTzA94nbeKLrr6Qxj8XX8Mtu8iURCyFyxpCBH8vkMWu26hgZHDnymCuEdeg7MKv2WemkpAMa5TvDd",
  "key7": "xbH1FXhivP1WtdonCb84BhpsQVAoTfpwBjupP6aHb5FQnYBLu13t3wy8xsMnDCdDuynW3E4gnRjFjMnxMcwTvQi",
  "key8": "3zjdYUdddP7bGrWZ3jtZ9aJ3DYhBaQXfP4juVVVhQ7zLDer18FUgFytgjFcK7GMnwixQAjwZRy74CZBE1S1gZAnC",
  "key9": "4xrqB6nM767TNsxhJLWE76sdfZQM1VS7Jm4Xaxppz4PsJqubC15f355GajyccDqHkb7gm1YvB3mRcudCW7a8Mp47",
  "key10": "5HoTruKdq8toywctDtcDwhWXhLqg9H2gdS2v8kwt5439b2cK19cn7QNTyGjnbrEAyXqRhjaNbZt57BQMeq2Bx9dF",
  "key11": "2vwjcT3ejQ19Znv5PEW6hCFc45jTAjHZDxffRhyt4gcEYUiLzmjmwY8Hv7LUjjMTPSMmWDCAW1qgp6wiRkCqYY1e",
  "key12": "3bUfUHnthgJqqUmv9E1zgSDLc1MZkyS8cHH1KUQZxJse8C3Lsq4EFvdoi7zA7DSmhTU9JMdwSk9muZXy84Axn6XA",
  "key13": "2GvvSgW2dsqZY8FQqpV6YdXkvm8MGVrbAEN8k5KSn618sBa5RVufc7oQEihexXPZXwkmtoGWXYd8z7D92NoSCRG",
  "key14": "43jDnYMt25z9kwR8XXkGcgYvtvPi3vRUdfLZ83UzujUN4qotK1r5KqLvfQ8aj156HpsE6wWXm2afWNdoaMsG985e",
  "key15": "3REMErCaKu2puBHfx8pAZgKbuCvtGzS8uCwHckENY2MU953vnCgPpzsM4t9dFEiaP5BDetqeW9QyLqGQvM5pxkAc",
  "key16": "5XnXoQxcZwdNrcbBQ1564ci6pmHsYo5pAKWKeiQ8vQ3ki9etYPaiYXEE2ZTGDrEG5EuRdBnkJtFuzo6CzvFpcYbV",
  "key17": "3rwowV7VYJDV936BVT926NN6mxG6MBcnbUuNX9wEGybbs11cEg9zsPSmnD7URshaum2SYCQRP9XqJcLLWfuoMaHq",
  "key18": "5XkqiUpE98Hi2txZ4HaZCvugHqeESsG4ueuULMMyrywBaddJ2r8U6CHwrbDVR759LPFgqJZq9WppikVCWkG9mBMR",
  "key19": "2bfszHFYZs2qH4SZHCnmwPbCgDpCz6SZavaYusTcLBJjfmqkEKEtJZRikQfp6KGRWJCHqZAFhQ66B7a3PFH9D8Gj",
  "key20": "h6QsXG66bsrxPYvRhcuPzMyuM7HLNSJg6MrFzGV3L9yUrpKJaMJLuLGhHECrkNEVK8FrvckqDwne3oxiDmW916G",
  "key21": "41b4kqwcuhmjtfiAtP1pLty95eDmSJYuyTG3KuMopC3r4TWrPM3Z8oZUBqECPcnRGxNAyAdUaYmGy5WHD8SapJRg",
  "key22": "mJq7qDvcVJoLUQioZ7FLNDE5omVsa1uvbaQKh7owqqZThfyQHDVMzY8zAckvSRkZ3qtRwrqHBZbai3vU7gB1Ege",
  "key23": "41SMmsDjkNy57Zvzihi3s88PeJHDcNn2LjjYjgXwno9v5wuzVChZcBjSTq126Y4wm3VhH1dGEZeWNr8W4Ehs2x9A",
  "key24": "2wYtpgk8fYhGT9VEKaJ66anFxUvEh7sRzsGCUx1Qz4Xdu9dkwjSbgikDcvXg7BFbAPRqVYtX3jpKszS1e7KXBG2Y",
  "key25": "2B7HqakHy5V22ixGduhxCg1sJdfvxcY3wit45NeWw9Rf2TuuQp9HLwVXkZKQzzTJ3zMQ9FU1HcMehsFMCTAj1S2Q",
  "key26": "5nraxZFpUVa5LEPiw3c83NDhtc1vVjZSQRnx7WUZwpv8abevDuG1oT1bxPtKAY4qWfcpPGuFoCproLVwLZPg1XFn"
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
