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
    "2KT3joFaMVQvmvECaRTbTuBfURKMQkrGwubBnqa9hStM6upvK1TuPSvtGTWXAntkSgiz4Tr1pz53T2RDaF24oN5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSoW5EhqRhKM2mgJMEAadycFeVw8N3PagvA2P94ctZ9LKCvf8Qc9WQow5zBNULrP8fabh9qTRQs3AkhZT23ShEc",
  "key1": "3oue3fSF8tUZEacSYxCJ2rW5p5i7m6nu7HicyUKeQ8f9gKJPCzjtasYPUJHaM2cZWzvpcC4JNnAVCZKXzcxdZvRe",
  "key2": "3s7N6Bx96ohPeHugX4xBFLXaXibnPfUCuXKXVQaCGmeqRWS7PqurenPQKZZkcGK7UZ87yDRcMLkX6Mq2qndkm376",
  "key3": "5z96vDeN8mFMf6JnmCUEjePtC9Dcoyb7CAjmbGMLWS37KnFZubhGPSznmeSPy9ar8mTkTZay57vkcfAM9PV61VnW",
  "key4": "4SQ9RkVSQkTfisg8rss4mGgor8Ckcnu7Ab6ErnyGsur2NJWYj48QV8nefZe4GCSXei5b4NscAmkmk3tFTsfZGSsr",
  "key5": "5j8nokLEyMKbmwXGL2QehRXnMTLsFoXTV6q4H6JT48359hvLGEo6GFRE34gCE3RFq6ifomrAMgnceiK1pob264Vu",
  "key6": "3qPeRSAgb8EA6ujH1B5moG6SCRDCVPToCXYVptocaqnQaB3wWvvCQJUBnrGH3UZjpggpLPp1PzvnZyN1kZC6RL2r",
  "key7": "G5bMYgQ79YfQ4GwF5y2YxeNrm6769me7htAwXLkGY7Ftbr3ZZ5QpA8FMm7CmQmAhV1v1xqrCNNMfwTidvKMzH5r",
  "key8": "3FbMTEeztQZ3TUzjXF7f6vmVr9Kif7e2cFRGhofEFNjsfKd3mLjxzEgNzZN9cMYfK9HqmzVRRfxG5fJ7eJciwXA5",
  "key9": "4TszHXgP3B2Q6719AqUXRVcSdhfEf9dj33Pvwy17cqAXemoe3WHj28GWTKtqoyRkNFCSj1gFhgW7KUW2QUA1mRCn",
  "key10": "495hvX5oUHCqkgtuDvm8e8p9VpHjSnhGb3kgTTbZhf2KJiw3u9bgLYvWsMPHQo453GfcLyN6opP1U1SvZXtTJTML",
  "key11": "zRipYrmzfp9nZmcFKbhdAD8LrtdjYyLiFMDKn4Db76dnAuLvTFcuwqcEececEe6kyxgEW5Xbb5fM4zWBpXmBwZT",
  "key12": "43WpcyW7RFbEptGZTcvQXwYDyPZHSty9xrst52ok8N5DNvTGjGFmFCnVKDCq3W1j5AFqktuQSQT3SgcUXKGGKCqF",
  "key13": "4NFN26nBPokK7yzinn9Jt5Zd1PRpSEyMpbdDGUnfwvH2UhSB36P9iu9uXogx6AvMa8uuMwMT3Z5eBFWjMVqYfVRk",
  "key14": "2aX8s7uY7hPpUo3qPjZUhh4NXbEygpy6r8pq42PhVobgAch9kcQ6FMsL88RJjmGp1mEUFWsgfYPiHt7rnnWZMGiN",
  "key15": "3SR9u1DDGaQVoqMfwfE6AhspeSmm9L7F42AuiqngkHLpPMbUQpJH5gPtRpiZRd8Spi13xynEbaSJ3MyLJYhE8V34",
  "key16": "3dHksy8sgnv3kv3VKxjTkxgVXhvQLfLbyCF8X1SftV3RNGsVjhJjw2Dnmk4XU1qQrC2beXDjHi4weAj8n22dxXar",
  "key17": "4KHQ8cA4fitgH8XXwQUpM8dgy68xBgekrc5J5nSv4cSypnfNfrYq1GRdNP1jcjKvGSsZqGxdnrn6qWdy4xGBkkhK",
  "key18": "2yZqVadHEVpmnVTAiAd251BAXHsJ5WPbngcDLQGZqenKL34cxWnQ8Gx7W4oSQp3rAQZHfL5SxpKMdJfij3irmbSm",
  "key19": "31bKMsKwrudh9k8EMCjn8oMAvkRr9hY57r5mgjj2vCUCPZbUWwPWv4zyuFDKh5TcVRDwawc2F6bdX6xaWKVSiTiB",
  "key20": "47FpoCpEYnoRRe6yePbwW4V4EkGVpnZgcbRadmDmDMiCSsTYKkPrTfbYs6ge5942z1U8ZY6VTFhTnMyr4312prKK",
  "key21": "3A7x5Yavd8JrbY9axpuUJVagaqM733Ya9eFKVEhmzLAstpVAr7sBgg53Rv4Ep4zZ58Uwmvaps6L8VAEMFPNQhBYF",
  "key22": "TZNNLt5NPBKeTQeYAPgyEceDYheaJ8MJMimL4pFyDaT3862nZ2wtemxZjv9dvWUcfG8GfvSoV4ci5wtsZi3AWnq",
  "key23": "2mALJJZkUzNDhkiqZoST1e3aB4wgFFVQVpjzQ6R439jHGJmAg6SQgdRwFP8ivQt8eMVsu7xuBzNgGjyT7mhwheL2",
  "key24": "6525XhZMRqx9fHcfW9K9Fh2qW7LY9Q39EC4JsY81XSkL4VTqHohxJy32JmzubWyyDNSeALybxY79xM6XEV7LZqKS",
  "key25": "5oGuLPpQgMqaqkzTRn3kNUceLdXV5iPXXZYyqVg5ovmkgTxnVA8n3yikWgR5pH9DfrSA3rgcozT4JzkUtCPuzx2P"
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
