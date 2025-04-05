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
    "4xS9XsojroRXnkapJkTLQiE144zXd6PgYAA4Ee9nuLMUEojT3oZ6cB1D6FcvNL43aFzkZ8iQmKAqCzVFTeY1ASk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jY9CVqsiy8ix2tmsxihdb2E4PKqzZmPd72C8gcB1hS2g8yNysXAChYtcrrysDWg4zuE1ohjSwpqKrqCpb4wRF",
  "key1": "5tJKMwS1o4XpT4Mj9HwCkKtDDyiDVoiH21h5AVzsoBYQzar31rHKpbntUQdAf78fUcba7sQsNKd5qGWLbpiojHsw",
  "key2": "3k1183XiPKqdfVR8KhA952xxf4Xv6V8Uzw8hGARAJCNFbY7MtLDULEnqRbqReoSDux3srjsacciMKfYTFdpHyVMu",
  "key3": "2Sq4h7mw7GiGKt8zzNX6UkvWz59x3bNAuPE8KyUP7imGK4fKcujoW7NGA5M6DnQeTof6bBbWAhSfSgXyNP9ctqgY",
  "key4": "56GAGLQ3qjuB7X3qni2x6kwrWuViaCjw8bze2cQFxEnpAGbAXxtGYzkdauCU8YyjKdFUeHUeqVwQzaevBCFPpdZ7",
  "key5": "2qZUUd2nV1iSGB8wea7aHEeMfSkuLK8LRxWGWqSgDfcvnWCv9Abh95SXuCx1TopB7NtkmT29rXPiecxP8UVPr9eH",
  "key6": "47Au952TkucGkovwY1jvQMLSdjoNVp2oNsB14qcmCi58XFwLPz53q2YUMRaikSsSVvK7NZnJrHPHfwuoTwccu8Cx",
  "key7": "96un4gHi9Cxs1RisvpgEPiY6msrqK9aStS5nFWXAkPGZtA3s1dmmHMW2xh15fYssqyJ6zikk6fpK7zW29W9Hwdg",
  "key8": "26nKfJ1hAz3t2BaYRccuLBiXH1duGmuU7PkcEWmimNG7vr1TgLrf69Xa6G1yatBZ8RJqSETDnXCoJTqVXUXXwprX",
  "key9": "5m88D9UamCiVPmxAipb9zQWQKzHdnnqhNPytia9rKPG7YnYRRNAYUDT76KppoTLwEhBHQceBBb9pyVCt9mFouaP1",
  "key10": "4ZGjWXxmDPqWzPdz4W8925nTbCtxPn32zj1SzTLg9WN5NP5LeRUkSg4a7wVgBupb8HwSYbe7kF4osjECZtUzotEA",
  "key11": "3zcZsDGwPxeeBs9LTTFWiT4sYQ2kVXW1cTQpAZXtPgo3vqffjgFfxjPqjuUvrrJWM9LY5AAt23KPFHKGRTsuT9DM",
  "key12": "4yiiq5Rz76n62jxp8fz1KbjX7xfak8ZsUvC6ftL8Y2XYnjVLdSf4KwjxHmKahskiofyKrBVzi8pevcFcq97kAGEA",
  "key13": "62C45fRkjeS5TshEnfU846i1AouTCPz5Xdwi2wMxEv67isADuCYLcV8fRTdDJ2aqUx7y7XHEQCdaPoxHPTHYf4wf",
  "key14": "2XY16qF7RyEwmpa5ou9TCHgLi1Yni8sLjWzFN9F33GvncBJ1CxvMZDdc4iVXVHvr3yB2d8AZTWPqgwCZesxMNoKX",
  "key15": "3F9QzCKzZsyZE4R987M569XDkaECFAFxsHNK3RJ5FjBqoRYLwNjwSqLJRVkhbsMCFt9y9R6omp7WGmiUxAdqXi4R",
  "key16": "2M9YTex1CnQE2pJU26XXLGDiW8EoJwLpc55wrqHH9H3tseiUT2jKwsJU8CVYSwiu4Gerjha2gfkzhT1KQCEp3ezv",
  "key17": "4cRx5ESZXn4DW5rzm1Hj4tZ51ewquTNNQncaKTtk89Qecmboy1DfFfYwRJcz2XuqRyi5kHLjXSY9GbvKRBZ5KHTx",
  "key18": "35mQQHo9hQUDepJ9x2L8R7PLp4r9EP797sd3N5dR95q2DmubAbb8YqtHuBN8rEWJSd3iK8GfX6d2PoADreAVH4Ei",
  "key19": "5Up6FcD5x55Z8RCERSFb7A6BRfCvuoczAw7RpHAzZ3utZRoUXeh3t31bAEPV7iTuG8LpcasPVNuRYMkD24AeUdP",
  "key20": "3vdBZVVdETdkymoDHefVkq71tvumJF3R6gdqWVwPUhju7mvmKWNkQGNkwNxSWq3ppgHZcdNPorLpBUS5FkbaBNsh",
  "key21": "3XEjKnVCbeEQUpQtzbrQbgySSsHQEp9Y8JdGzvoqNqCuRf3MhLekuBX1C2h4DY3DLWt2s6vM9abnqeXjc5snP9ER",
  "key22": "4qeVzbG5cybtWL9hCv1GZvJoswvvRbbYjPMXJRjRUtRrNj8Bik8JSTPeCRaVcKAMVJZdePsRN7N9dyFrTAGsFvZR",
  "key23": "5bTEJq25Hf1MMa41E5N2AtbNCTuDt2c7ym4w2uT1YmcPmhxx65xdZCgVzRDDwECaXazsRWqXJaSu2umK7Gfz3NdL",
  "key24": "39T1GrmYxqnwPQiKZKQYyZqz9XYAJjuGyKjZhVTBanYrz9SdaBuXz66VLsd5kyxH6hYGhMip973uYun5XfpDJedf"
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
