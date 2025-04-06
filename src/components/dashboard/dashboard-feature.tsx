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
    "35VGAQpqyNP11TvWhpM9XEadi53CjA8RP1wXRqHqfHiJLEfqgH6zuSM394wTJTHk7LAR16FRxXiZLcVYxYPXd4MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkEcFtpxWTHL7q6JASMkXUaYCnEu5LsSWwDPMfp5RgBinQKymUBks9jBb84NjuZYkcDt8XHYqyc62gMb1u4KUEA",
  "key1": "5ptPnPqD1DDcbHEB9uC293tBT3XDcEaDkZySAx4PE2w5mFu7Edtcg4Ua4Y3Yu5XfFwpdv4z7xK84VHLMbAGCJ7Vk",
  "key2": "47NEQpmofkwJgMSsEK6ib9Wnm6yUbDQh36BdbQdB5Y5Xvs1LRuWKEzWbGbSX9D7CupHgyTHP8hQhEqRFKrXsJ4RZ",
  "key3": "5mDUrJza1TXg4LkMLcfQYbEduPAW77KdZdsYRtDRaRKPUACsURHAGDThTxp1rEmFi3PtAFWCMJvmWJxkNwJvDcZ6",
  "key4": "2qA3sTs6deALAoL5UG68T5mi6M3z37ozVLayyabzweWpVF1Qyzmf1EbtNzMN97wJNzCQR8oREp3554Z3a1V8zBA",
  "key5": "2Mmw9NJz7QEhmGPUE3xCEFcYnJ2ZUTR1b9Gi579CasYYtbba64FUPLMxwNVykLKeCChfPqCwaChvLyrpbzAR9Bfg",
  "key6": "3XnyayoyQN4goXFTfTijVe5VNTFEwnBoKB8uQxkkjprtPpZuYR56jAHzypNqScEYM181NUSgZN6PYHSLHYxLFaSD",
  "key7": "Yc856eCR7zeEdkoce38p2oxCQnb9zi2TsLcNWThqHVgD7X27Tdrb8JCtd34fUreXaMCEsL6hSPKYamADZSf66MG",
  "key8": "592tjCjtFWHEvX55GKY9w8edvLmNPoAAZLd5cxM152XnBTjKrtJiYR5zEMzPXxBzuSBLejZVpLA9P9ycPbaEdG1E",
  "key9": "4iRDDkvqgPkK1SNjRyVMGC6v1Fduy6Yq5ATVs8Nj1yoeJkf4d7fk4BRNkdA3dWhZQpgoe3HnbCwNBBm8zzYbzTFU",
  "key10": "2j5du8W7kyELRttY24n2XGLJbSgyj3mwyHJ5DaF98DjvXbJfrvwcdm1NPfbqx8AyfjJwJU5CXY1DPKtw8vi6YetD",
  "key11": "4G5RqVTDnoMsitsUdP7ZafwHmHGoZDAq7ecncw4JmzdiAgNixoekdjgn5qzDNycuke419qiRbnzEbHGZzmrRQnDS",
  "key12": "4W2oo7NAUZNsC4NL2ifANdk6NWAN1hFW3qWGTep7M1mHCZHAZN2ksoxf8chcTGA5QY7zenGy4umMwBbdETTbvbw8",
  "key13": "4WKfVunYTtyTaAZ2wR9ax52J8BVDPBb3iZBEnd7HG9M5wmNs5NVszMF5ynRTJVjAR6CCT3i2EkmCu6CHAueuHVib",
  "key14": "2mKZP4ZkS9HmkpoSgUsmB4Wz5EaPXn4UnpFDosn4iThKU3WTxr2Twq1ccNXQVcGzdtejWfcXDRNE2EY1hJwb8y8G",
  "key15": "3V9SsZc2dZUVQELLcr9VCZMufmKSH9BLjPQZ1o3F8VsALRyoPF7VRiYGdRiGY1o4Ld2P7sD23X8SU1vcfYvy8GbK",
  "key16": "4b2qrM9LCJB6RctNAdszBUd7eDkvYG9LtQScRQwQPAPU5USjCXeh613Sug7SbFR4cwBATQAYXv3fxNgZgGmY864m",
  "key17": "4EnVx1vgF3872ikmUMnT2iXLKVXUzzRg8MsKZhdaRAMphaaEh29mGC4HtwE87yZyGbVWmVyURttBajChVgqKma1E",
  "key18": "3hFnbVRDWtXFgKQPoY8hJxm2tLimQouMU2RjVBxTLBXcXFz6T3zkrgEGdbz5cjFXTxuGSnVLwWD4zJQXjLDG4TmU",
  "key19": "2BriM4KV54F8p9NAsmWa1w9AkbsbRVbnogT6hTceE7VJbRRHqakTjqCjgkthy8bf32St7uGMgJHhsU7wkH8gkRPT",
  "key20": "3ZbbF5uG9RcigDPunsyKDNvTBzkkequyeuasL2ZmvyGsezAAG3cj6v2zAd9DDEPoj99EYTeyMNdkDj6B1gdxKrub",
  "key21": "2k6G6PLTSn3R7qJnjyaehVgwWaLbSiti8XehZYCnzQ9bDkaqDYH5RazJiiWjqBhXqi6SYHneHbtzjHQ6QJJs3yrW",
  "key22": "UqLk5Pf9m7M41QuHw4BN4oUZezHLMzzQqo6gaNbdyyvYHYRkVA2C8qzmMyTjmF3BLx7wz9WQyG4oWMjHHdLjuHn",
  "key23": "17YVE639wJVLfC3HArNhv2dkGyQb5LEXudw687oJAt2HF62DzGX7FynWY9595eZz1Zmwm48zvxRka7SYkAvfSo9",
  "key24": "fpbde7MRkehAbSZfsS8d8Jh69Bj4ind1zAfFvV8mMwbBUUGYF254JPiGetGBCj3apgqopBNJd94xtgZhKvm7ttW",
  "key25": "65nZCts55QTt3NzPk2pZYfFm1kJjBM2GTNq5NAec5V8GBYw2ZZEzVR2VxWew91rW9EtYBcXfp3GG4sMTRCAqqWfR",
  "key26": "36rhmn5o74yZRdPJyaf1Mk7qvYBQG2z8iJVLiM5D8V1swyjBbq4iwu2fFnSWNmnifh6JtVDM4KEAJCJdbcA8YvJ",
  "key27": "2YrzWkrVEan1rRvHVHw8oLT19hU3gLutHMKkcAzXkh7dGKq3JzE16Azi2ffjR9YLRnwd68NQM2SBeVaJNq13U3dZ",
  "key28": "4ssMPN7M8oXccqqt4DSk8ARZBszTDWw8i36ceq9saNc8rH543YQDo3kN9DfVWau3obkyYgNLUtPfLjRmBAV4oQe6",
  "key29": "aZVUhUc4sh63LRFco3GuMsr4wBWrmXBsVnFLktoA592F1usNjo2TfNWtYGM96hd7Te68g78pYyi6DXHUg4wLxdY",
  "key30": "2iDd54qPaEJctEYCq61Gw1ycKdDTjAi6Zt9j2gunCJQgDdXdRX7zywMSsRVhyYb3bQxa8xUp1x3oHxnAkbD1AEQE",
  "key31": "AXvgrZiyrDXhoHAE58DAeGCo5xAP2okF4QNN71UMk2qvo23xhqifMCApf8po5yew3ejEmXpQXYgL2Hh6ZdXUzh5",
  "key32": "5MUvNrwFuMimA5nsA3akM22aqHMep2bZfU9BZvuh73S5EY4ntpXrwsFcHCcCPmLMzuZTxWJ8j6x4MPFmdr1aKbiX",
  "key33": "2wzAZthXWZHqnTqanHVmg9pGQkDXvQTAS8YrY9rL5LjmyyNcgXDarn4QQkXS5XZXHjWBqom7TqZ9mHbGffibVdB6",
  "key34": "2hFhH6GNzhQPWDXAoZ2QysENbLUMtLBjaPG1mCrHrUmU2jg69HNnMxUxQgUpBSUSa7exsZLqoMca3DvRd72fEPNH",
  "key35": "avCDDeJ2fMmM2QkLBAC426wBamJWzbcNDEt8DCsH9694PNXku3i9WWYZQ6ae1zEHjy2XZwZxeBSK2siDML7fD4U",
  "key36": "3kvi8vVcHDvdhVYF2yzNzwub7E81qWD3Ft18KRyTLrBY9tyRcR6qSx6H4bquJL9dZThWhi6qq1LUeHsmFwqusbah",
  "key37": "2nBDzhA23q8rNP3T8KEiwuvXiVYuJJjRQFaQuSEHvhXkKqYEj5krNF9HKvcwgSxKHVmSB4M8w2D28XAgbabC2bfz",
  "key38": "446whwrYGm9oJq7rUiAHhz1EKrKcpbqiXZGzJftWXkzFRjpgGogw8PXLi5fpArP8C9778t9j8avuqfJo96PmVjBn",
  "key39": "2dGkcx4sfz8pdZN2MiU9ACokLrQXWqNB3xagT9rBrudXU2kF6FsJW4ydS6xFQ6y54tWwYRCLTqqnNywUJEZgTmTA"
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
