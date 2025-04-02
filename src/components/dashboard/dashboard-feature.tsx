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
    "RcWyMakrqsnCQi6UQVZei6xkoQz68FuHYjYobUVNDTwhHet5ufDPREDoGE2NYGBtxXtFCA1Wx5CigNf1PJSFnkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijHyDmL2ktiY8j9Vsv6a2KxJr9QSMkPZe4ZCP69jKZQKKEsd7yjEpjt7PPv4nniQGMzQztfF6Zeb7Y8towT2o1S",
  "key1": "3Mt2Ma4K86rZA3Uw8XdhBN3mEH1qSc7K6xjSn5PRKPLHdKBwvnonkFwGoJbLQ746HQrTrSY43aBE6BRqZKP1dPi6",
  "key2": "4Uccw9Ya8Dzj9ZJFzWuFbsLzs4w6bqKbyHhHMG35bFuyGkTc5A9isKpDaWT42eHUNdh9kAXEXwrBArdYFdqpcuht",
  "key3": "5h1i3JiPkt8vbr2V58egQZWXAdERVvsZ9B2cQNMDteGaMWQcLbAfHhFvPPsWAnRda5PGS1m7W4WyCpCQAa8HpgRK",
  "key4": "DB8WeMXRQexJjbvBhsHvepBy79mkdy5pGAz4XChARxxEA4U4NSyUKPTQJaSo8y4QatvzRu8Xz7EQdjLvu1AadBA",
  "key5": "5WuLok8tYugMGEUW8u5gWpTrsHgRYWwaw78dunmE1mMrGbCbxgQXyGLQVMPHjWvk2AXeFwq78jRqVv4w98PzgFWd",
  "key6": "HgaaYpy8MP8ASAGFxJ4ACyT54jVYoFAYsRUUWwp5WZAyaKCaCNt2r2VuskSpgd8tJJwNbSmvAnBJftv51e8j4JH",
  "key7": "WSiEuumJvSDHyGd2XvBNDMmTRZeZKUcGT8PKcqbFkDmSez1cNGkuHKScjossa4JknDuBwfZgTcH1Vq3e1XLQX8x",
  "key8": "4UPKxn35iDfUnDMoLEr2HUZgHBs6sJAjSK3UdkDvanhHHXc6kykBpkGGhoXgTLpojbQB4jGC5ASmihmjod2i3HDz",
  "key9": "4TGy8HWT5BbqCBgY4QeZWw9AiNqvCreVDJAC2USRUFDYKbeX5MJff1qaz96a6MX3o75bpcTRSUV1KJFSufycSAh4",
  "key10": "EpHb5fFJwpbAUxE9XA9a7F4GA8hULrY2LQEE4NsJ9vS4qcoA7NALhofrKvjhLi2wMuYV9L3wJUWUb8UrsyYzf64",
  "key11": "5iUj6SgeJPHem9uNpEGcSDYHJWEEULW63yP5EdKTm63mVeqpMyB2jUJmRStgoT3HQEDTojQjbCD2WmP8im5s7nvJ",
  "key12": "4PARyDyJq1T8mgvFEaLkaEnC8SqfGbuDxEmYGb4vGztDcPicnAQkpbtaHHfrAfq4P9fneeQnep7kkxhX2FT9n2UZ",
  "key13": "46DCQjowL3exfjV3xfbotPBrizfT8pbeRxdQWAkuzAjYP1RVRqVqFizkQEdLbe1vNDVvkYiFajGZwb8cGEWZ7MiA",
  "key14": "59dTB99Asr34gnsxVfwVDhrcQSsrAWvhiuLquG3sLJGayV6T7hBRSWsQwfZbfF7ERTZjAjPReqRCmpBtbFGEHP5p",
  "key15": "4hz9cQQVT5rJEgvQb3mWWEitF6jaiTKABWXGR3cfouhGyn9katniH6mF6fd5ey8bX5586DrBfBQXTNdJAWwPtiTi",
  "key16": "3pKiREsLtjG9pafKrg9sVxk6THUKjsPWnzohzPypLk9xRzSJSRymUKksPniw4KXf458kRtyPK4q6rxsYdWbp5r6t",
  "key17": "4aPuRdkYhKLJvb84akUEmTJkqj4DTjmh8FBTEAB7AVWNM1LDEv9DaxZ5DYEUkegMQQH11vox8Ba6a6CN7ZfqcfrG",
  "key18": "5SzvMbwazEtaJ6LTjPQY1xVnQKrdDJuXubMaKoUBPS4k3Lgiuy9i56eMQJiP6vaWQd7ehkQiKfsYRd6EwL1cnxwn",
  "key19": "63bRbmeEaTWKKS5V9qKGfG4j78ebYx2iRoAhjM2i1sL4TKrzSYRKr4JxqPnRsWqFdxDKs1QFkuGnFVm9BkwNavJK",
  "key20": "59DpYfnzWuesXB9kjDJaLq2DNHgXmGDiVGU36C4u82sJkpWheGWXkTmM3M7qCwqpdepGXyT1ddDsbmTvfN4RzbP1",
  "key21": "4Xtskj9f9mYNDhutgxRbh1MiRHHgr6s77gDDNBM3m8gtQcpS1ekmoKGBjGw2RKvSFYBqDV4kYyjxqmoZnDvwpBVB",
  "key22": "UnHniCuGEDbJGQV3nYvLGv4Xe9gmJpr616rLgsZRdqBJLUzTGcLCXgigaLf7NLtJWrN8iusiwGgKsR3PZDhaUyG",
  "key23": "cQJRq7WcNYiUMJ7y74NtDFWLzSenyvLM3Jv7kCmETEBtz9rFkKsMkjoaUSRpVC6GVhbcXnGyedQkWT9jkeFqHbA",
  "key24": "4p3mEN6u8VNQysvMLE975e77MA6tF3hr77D5rZemA1ybngRaa6vB1rDimN1Tk26q71c2ytXyf6w4WPGStWcp2h9A",
  "key25": "4KCaD4F9eA3wqkh5JwfQobGQV3B54nh3xPVMiUMtVzK8M3xiQ9Scb491pbZrZPLk5ynJY8iwZ5JY4oSvxaEnfYfK",
  "key26": "3DPFX3cQnG5oHMk3bsZd1mkmUxhdESu6XGhP169XNXzVCVhZKVUWNUBnEsED5dohH9HZshD8eebFfFNUgMKrLjNA"
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
