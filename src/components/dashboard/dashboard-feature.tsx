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
    "63rXxSE8brwjcZ1421kc6QK77dXJUcKAG6k8XYxsqdxE3AUXyBnuPneZYLK7p1DChSxu5AkjpTvUV43yErJa2nYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmdvxezVQT9rhxfBWMJ77657EYsuVMTPNqpbxKjWoPm63xcdk1oTrenNcWiUBFs1NA8aMqp2BjbzLjUVqFKHtYu",
  "key1": "8qPLKjpSouHjnFQWNoDNg8Z552aYmcYZspaGZxPuGqZcAWaF63tBYM1bqv7ZMVNFSwknRpZsCGLexLsiKekr564",
  "key2": "37XQTgoyV8qvT8XFVXKLCX71FxspgUV9tvs8rJbAZ6Zz2TToRCgm8hHvGp961ut7Kk1VucLeJFqfkvQbt4vodXYE",
  "key3": "ri6EG4JQ2FmKoz89XfTbR4ykeQwWKG4UfZyRVEx3ER96jvDEy2WC76ojfwLsAxmxgY7Erk4EL4gXDjqchWe5bpk",
  "key4": "64hdtf31XXHk1hCSEfWfpJxNTHH3ayTiEpQezr8R6AfJ4ZawytVLaDJCyU1DiezVXQ9ggBaDtnrv5rp9961QqMc",
  "key5": "4i864jZTbVjKBuUSuBTnLAd2LiSMhyKmxmASNBh3p345KwMRA4GaLW8b45gmXYVEEdsrQTZEoKTSBQ6HDcHg1WK7",
  "key6": "4nzhrp75zm1aqKA1iKzuSceEoKMtJN2UkFmdjFQ7sLnq6JLSSohApkuuWDjyEotn22nH5vaDkGub5Kru59nS8Hyp",
  "key7": "5zY8xrYHQPAydcDxE8keqKTPUuMrkdx3C3oz18GvBZJ4wGsDugkj8mEgZ539xZxixkZXcR1VMgvR2G4rwgMwFGA1",
  "key8": "46KM22UCQsSJkQnxd76YM8gjrHmcrQWVavM9ZALSTPV2ahFTt2hmWj94P8GJMf7ZaWat8oVKjevkxP1aauT2zXc4",
  "key9": "pBSkZZRQRfUYXG9kWx6griPCECENnMNick7svWTtVKVMNCEHY723KrKQxHZsoaTHTW9uKMHLjZHuLZa8w1WAkoY",
  "key10": "51t2sZK3cYQsrUTQ2fLbvdaHobU7k6T8JyA6Bne1uSuAHB6KALXtVRsrL967z5973zsBj6Hewv8r6eakbQGQ7p5h",
  "key11": "3kYdrA5EYxNcVSMR9sP9eHzaCQM57jiLGKLLhB9k6sURcMRnJDyMKhTtaPPC8zuiL6deUtuREDEwRMqiWGEbH9jC",
  "key12": "5oZHF4eD6k114xmiDkiaR7J749Qq2GADDAxLKZ2S3UsbpXBBTAixQoT7uBcQYdSm2XeXvQSmLDpSuNCwgphgb9SM",
  "key13": "3g2mQDhz2PAzZ7NHsxurZRVbsPTyNQjLYu82yZEhFcPYMUizMeJD6ZjBFzB7CPns3UsH8kFw7zgyv9hWBseqXLDT",
  "key14": "4WRaFhAueRU2fdxqbyeVGGJDged11NNdoRPoKQ2vkttZr4anSgmmFM1HN5nMLJYq3iCAND82ApUeLUNgYo7XD2fT",
  "key15": "2oQHh2WGzXfKUXMA1KRD8ehd6nZ1X4TajEjvRnMPhG2j3pd4Ev9jM7rfxSH2yH7xDfjz5LD8gBrKTTQF3fxaw4Pt",
  "key16": "5gNRoEbiDf8CjLcA75Dqbgd2khTUDFphpbQ122gZca4papJvB3ogs5DC2ivNmLEwhdH5YEKS1Uwnmo3qChrS4Ska",
  "key17": "2tiR3kZBgjYg3tfN3R4twNT1mrjPbfMFiY4YH4qfYsyZKGCnY6u3gT3KQhkCtrBWA7Ng42Go6ah1gfom9AwQ25EL",
  "key18": "39YjU2xQ15myp7RcMAQHzcuUjVJPCgrNYhRAbthdKDGfaCxhX3hghEG5oNAo5BnEWwmMZxNfj9AiVoFkwF4co3R6",
  "key19": "ueZpT695i6gdGrXGbUFQryqZ52LmctR9teov5pPtn6W9V3t5LQejiSiDuscgQJgyLn633v7HGRZry39y99o5Zgs",
  "key20": "qht5xwgJJ748fLB9FJ42bMzEx9k1Up3UtMiSq1vGfqnxMYqDfeaAwfLyKNsu2ebBfby8yTWDpwwzvQY4edfkn4S",
  "key21": "5yNYqDPBAmdAGkznRYdbJ3ELvKguVxeAmAhMCFqcV4Y8MgTsFK4DpoGNrVWMwiYsASoUdWJbsiDnSmHZcBhr8und",
  "key22": "66r9w77FJP9H7EkSxLSuLM6gBxLKTthFe4ZYuPYCj7jpGMHgqd38Yj2NRTM73BJtVbXEhurLkiS6jR6eegC2nwA2",
  "key23": "4THCkNoyMseKAJxyC75AssCsx6CAcVciDirEQsbcRJLL5Lw6qFDswcsyPCfkqGWBCK8sDVpqFQfTXZA4q3nKSwLP",
  "key24": "xGooGTYdCYgTHddvkzJSc3S3MiyDnjGE9BPvwmkqdxszXnhjjTRcFRCpckLJ5q29hqVRZjor5yFF1DW2Yr9N5aN"
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
