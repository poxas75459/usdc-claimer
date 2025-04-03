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
    "41tmCcN1g1UnpCVu69NHXHSrpsFWhdJ2QGtRgrZqQwvqTqzFoSZB8SrQkneDW4116TQv3RMe3S5jm8bMKYQWyyAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgpsiK99UgUv6ric87UJYW9QKeYakZe1gTbKNrB3U1bw1zRLcPFW2eEZLwLrxCarwmdTCfvwBcPkbGCj7ZikkRR",
  "key1": "2zeLJJhcxbqpPnQpuaP4zNwcNQzthd7mPEhwZYbonPGme5KGDm1Rje9geAYkTA18Nf9hWe7AhtYfWsmSCjQjQM8E",
  "key2": "27dH5yR397qxAnuSKxTmd5jy7aSpBXfhvH8T9ou8sNkki74j57XtUdCxyCyErR8bhRyLEWk33TEnab3YyhFgVkij",
  "key3": "4c7AWtx8LHJeuQ8VgjmPL7X8pjpPg1VrLYtTbukSgbZjkB6WkgSFfUYT5bEjgDbroSPVdYZj3iko71h4Xizv7WJ6",
  "key4": "37Zj8qWkbhVdPu3KizjX6VoDB8vrW5yRuCJv2FHAuK9RFSpDpb4NVyK3RftxDR66qXTSrpy6n1DueKAbQLjhqrey",
  "key5": "2hFESUqBGktvxSNhwAwfLBnmSxmMFuiPGyX7nH5DvxbAUhKugqu3kwzaE4C6c8jDdXmbz6MbvTHkLmBgJBf5E1Lu",
  "key6": "GWkZpaxGjXb9uejME6jod1EkUVYMT8y9CgDPBCmGxFUwERYrvhTAcj8NTpe6MDE2xrFpgGZttr445uWsrjwcQqF",
  "key7": "5WVmVEAZcJ9jgpJEFKDKy8T8fPdURfZBEXQgnfn9DmcAH6g6DfQ5d1fnvVxkkcGpU82RRKUDGVxpMG4AqibfQRQk",
  "key8": "5kkHw7NFxpy1DzLHCfTAugMNNkXao2W4Usc32Vsk5xB5ELmgN5hyosMM6G9qXLx7GaZjTwqEuMoSxQ7BPKPChSuf",
  "key9": "35Dg4RWDLhXS3kdVJwLacbJc9AUUudqrJnQmzdUHh9YdYyk2o4HQ9jczn2A7T8ekmBz4KnEF1A48dcJVegSo2dMP",
  "key10": "dDQnMspxsJCkJ43TU7T9QWqZ6yNsx4Mdz9Q6joz2VVNG7ASeR83HWB3Nypqq9RdcKhfRaysv2PiSokYkMoqSdKc",
  "key11": "3VMjNeRNAVdNzrDvrmktdm4SjAFSztGVuyRLxYMWLUe9RpSadNTTXGHfo8SLiWvpY5RUZwXjJMmqt75Pnb5maFWi",
  "key12": "525VTqKZX9iKVACkdjLUKuoRrEE3ZuczQdNjCJu6zaaxYQnTdhxeghwYCisELM5EJFHvtG8REFd9N9kGzs3sj1i4",
  "key13": "5Hb6Lrh7AhWBQtkdpxvrmooXMJ5byz71QauRsuKEZxBgwenQfZC7WkMyxZsHFHpMqjLMcRAnmCysWXisMsCboBw4",
  "key14": "Fjw8BwjkxH9tNU7TUSroBB4g8XfR17arBcbcWjkL4zgjNS6z5XfL7rxDFysDR3A85QF6U4HP1BWUa5cPKaEZpvi",
  "key15": "4zi8bXBfpGTTQTjHxnp4aoYXix4pUJcNaor2DkcUe4NjTPFePwdDwHvEL4qghXEaQ3Ux7w6kwbi8RUpwbHs541Dn",
  "key16": "58idgTJe9tGWNuAMmC9bPok3D6s9HvXtmJJEs48MA8eQAx2snyu3r7qfhf7ryZLzKrPohKqvW2ciZLbtSky9QBSM",
  "key17": "2CgKtmnypy8dSZ44Rt65QdtWc2obtYEekQcXee5jvb4akREo7gGwTQReUG3e5KuPdGGbttiz1xiet9z7yMoRfVQc",
  "key18": "4KB8DXfBEJdW3xYSxyF18n6SPg2qEXRaxvybR9UU4UhqWd1aVwFGjz61WcPfFvk4qLhi34WbkPwKA5v2TCdxk2ZP",
  "key19": "5cT9i7tAF4Mrno9jFt3W2VDbq4C9DsSykQPBYJMtBeq4Dge1EWD1Ep7ci5Uo2UeC3ZTNqY2zoEAftMv4tgewKt9r",
  "key20": "3mGsQn5wXirZ68nRaX868G6N2F5XmTdzPENycThiML38kkW1KWB5AyWZFTMKTcfLqXEwJy3tJJnH5ns2dL1LL7mW",
  "key21": "9aXr478gzNimuL3385gMmFA5ZbzdeB4UMzHg27cHSVxQxBRYbKdJ9KLkBhHG1jf4J9Axd7ix7Zz3dNNJaZjPe5p",
  "key22": "5yMLRRjRM49asq6TN6M9QLLExDfdP5UD1eZsWSwppdua94hzvduk1YKhhLcDbtRaytEW57NxsJFS6ExfxULu2rJZ",
  "key23": "36Y7TDbFpmZn7sNFQnax43hzuAfTQyBn9pDx99B9S5r3duZTTJTT8nZAK3RGft6YiXiPACmHKXuKy5T8LRMXrKXp",
  "key24": "pcKe4XgR2w5tDHuQ3M9P5QTqVRCAzh4Wqr6eSBQsasTXhiNtj7BFmkMnp3xZEX87Kh9hX5sxf7Go5CkoTKXbnaG",
  "key25": "3yCSG8am7mSdfkhgdCEtn1B25x7RXmFLZeDuaUkE2AkwoAfAhaiH7aRZmhX2nPSf1zv9QNDtNCeiNjvGfFE5fszd",
  "key26": "4sPhoYUkTGiQ73A8CZfJa4HyrYGc1ASu8G3TrUuKLxVFCPfyFyoAZ8kSBDxf9LckjdFFAU3fxiKJ9bSRTtEWVwcg",
  "key27": "8bYnYRn28jpSkmWNDUNA8mRJxYxgo7GHpib2GSqs6UrpSnsfrXsD3ECiX4DeZwcGcbeFHxv3oGYAq1ztT1U2DLQ",
  "key28": "giBHnh3nmUoRt1UbQ7VjjiUWD8x6RU8HKMLs7KJ9BvnFQXMR3HNd6GU7GqpkEcEdF6fP5DK4NRECumzLzFNtAPK"
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
