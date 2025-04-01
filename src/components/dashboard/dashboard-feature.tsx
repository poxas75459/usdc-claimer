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
    "4FrukcQgwXbnQTuDb3EWUXTEtAx8uh5KfjvATxfHKeLdL2ACfBZrejPVU5u3zrxM9BiyCBQYJjoMj912eimcm9XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pSsby9SXTqF6uDb6xpEpyFCgRg7DToEGBW8U51yG8Cj1FdCeksd4WtSF3RwPTQNkdgXBeX4BSpWMEo8aC3S3kXV",
  "key1": "5EAyo6LveVE2RZnaVCpSq1iAsy2mzbonc2Eb2u4yc8HozyLLQBDQSMJRP1PZdkAvrNSkf2g3KKqveocefnHWfigg",
  "key2": "4YvQXuGS6dSSK9HT5ep4FkSXXgJAnDtNqReSRgUr3Fsf6VTKDBTjLzR7cSr3DwHrMep2bNzsBiEXJLpDiiPzhjvA",
  "key3": "3xVHNTi96PTyAdRuVwtDKy96mvuPcptZwdP1mmepe7yyAiuokAc9jZG59WhDu1u1BisUcXcJmPJLyAyHdJJsqy4q",
  "key4": "4923yM7L66eCF9Ni9etCe14D69cMhXX4ARDfkAtuPfh78NR665eesMej4dBoJWDU1MByAzmcwo1k4byAQihnZkax",
  "key5": "3TRFj2v4ucJjjcXYQUrHgKbWxyduKU7hT5e1hKchdV9zFtP4KmmfdipAbQ7jRM4L1mMrKzDKwbezMD4QwFcpDf7h",
  "key6": "2G38Zj7SbsHkXpMDLsZhxWCB3gexHutMw71YADDi11yRznk86E5YvErkRLLk3YQJZmoftPAh7ZvitzCidhmYSrMK",
  "key7": "pRBwRdCr7dyHBQiRm6JaKzweuyVp2M6X9zTbnHR4Tvt4HXP2Mi3XM3eJ6sz4bWax6qknex4VAVSJAs8j6mSHK7z",
  "key8": "36616E5Va3r7mxXaUAbH5VL4VpggPb3JzWZme3pidtVPA6244EYzjWFS2ZYzxhLnRiAmASXG4CCahfDZqd61o2RC",
  "key9": "56KpTjuTu5qZyRoHnKoaxpPWYRXbe9dVVsby3nZ5rTkf416d1wwhWPHfHUe86jDU5mu3Mp71mZB5i3CmwRBuNhT5",
  "key10": "4ZGjGftsZA9FMJpQJAsoJEGrnKZJqZ4qHsbHN5xzMqcVQVmuVk9FxnufShjyxDCysxZBvUxSUz9TFc4Nwg7fWcxP",
  "key11": "2PYmALTTrUtu8GYkfp8HaKJxRuf3sGt4xGiJZ26UwxiLvRoCPQXHAi9m6oQmyyztX6PgZJQNYbf1jKjw1NFUvXBV",
  "key12": "5GvZkDnTBJTRs9AehgDMowFJKJiEvUpoLYAcWU1scFUn5yJz6nNc1tdv32hYMRFBEKY4Qef3ta8m8efZ7pvpYkSJ",
  "key13": "2D37huW4ntzYi7Q44HSmwHPbAdUXusvQb83TZrcXojtrW1Kfv4GPCJ4FSpsvdWqnwWjR6c8JkVcZgaRVR5TpPWkM",
  "key14": "4guBcfxDtU1B3ESVez6bNCVYyxSrdZhaL5RsBs9GCHSZFVr2U99A6HbtqvrQpBg9YTCBCezJYQqt94jA7kibEWnm",
  "key15": "3puZWMRhVSqH53oKHBj3HhadyprgAvNAebwn5yuYVNJM7jbufifb4s9EhqG3YfgKSMVzBHwL96cTPsnmeaErWG52",
  "key16": "48VGyDvGgSeu8W1YAerxNw7m5LbC3U1fHS7ZwkUXgBNpmweT76oD18ohqdJwGLexWcju5SjAURZZbJ78SQsA6E8S",
  "key17": "4zgy33E7JZDrBzurfWcbqbHcUaee8CvpDTshHANVHZSQ1KcRKr6tPDZHNe3iWFEgAHj9zSXRm2Xbdnz1Yh9p6Wu8",
  "key18": "2S4kePMNaSdYD2QQCQEVyhZNPQ5HSh4qT3mwtE3qiTyuhGRKYpswzgJbx2R9fD9Q3VABG3WbB9JCzgUGZ3NPBQGc",
  "key19": "2owBGvjiYk6nijcvfNk7Uj7tir3Zn2eNSpEDt8hfPBeBVXTFF8bYxuejtTDuc5iZNNw2mHnSEPzP2TYgT9HaKpD4",
  "key20": "5xMYs9thXR1a5sM655HnUvMJv6cX15ExfXY4uX4VTVPLdK9uHiHmCJicPxhriP9C4NJpsSE5ooSwobVEijcdzqXm",
  "key21": "5C1UFPYzTGJHVU3bM6ab9waUmFF5iYhr1UgqzgoRBmFJP7PYNfhkoq4fT9895ySekDtXdo6dYPCrh3rNz7aHUnzE",
  "key22": "MWx9a9CCRPenE6LeSd9PQkvpFHj7Gx5XgYNfdL3B7MwxpansGmqtPJ6mrVm4b5uRhPKW5vUnEhWjPHzK39BXV6E",
  "key23": "2kEu2xCV22hdbsBgVpRW9g8bYj2VWRfiLUvgDtn2dUE7nkQy8C2Rs8F5zdqwhhgBjCr78St9QvwWm7KV2BkmvLRf",
  "key24": "8G3Vmrstmiqd6NAwEaioJ8zL6yL79QEi7EPt8J5UKSvAipzdTaJkgBKYQh1ELMjTBvcqe2VZHt6uuRZEfp7ti9N",
  "key25": "32jKpVUS3HfzChf4FNhArdt4fUmv7mv9dLbXG2wPGSBivxpk4G7WdqCv41zB48nJcA78H5w4vJ8DDQRNe9miXqwA",
  "key26": "267kPE8tQZYrRLrFZfL2fiR25zW73bXNdT63CAXkPhh75LJ1rJCRXXG6kjt56eNfNRVey3aRcRGzCEEM2ZE5v8HX",
  "key27": "2LLV63xaBmtbRPkP51FNiTun1PFuuseBfMJtPc16FbUmXhNuUzrSemCLEx2SJsJdUchM3ogJJkci4EoBp6LSU4YF",
  "key28": "39sFiRkRbudxV8wYPqjv3q1v6E2nnhBwi9byK6QVq1NUb6nhwmGKwM6tRbC4sN6qwLgcLsAvriSrBsia8uubrVE4",
  "key29": "2dBw7WP8CKKLBL7UNKmQW87Jq2eB2XFDNgCFmKGXQqwaHaxFWjBbSmyFdNF9iL9Du6XWzKQpK6f84cS9Hg1URj6W",
  "key30": "4xY2V11V836AcCemk5GuLaQVB4FwcQ3L2jXNoKqHkGccN4TvPQEt3yAW5YFH6eVBYMq9VE2KNMSHtK41SZ1CZboX",
  "key31": "31yMTx8KDRUYDeYk7xcad92g3hacZXppa8hBU5uFzLQkJWs8Q8ZegRNJqQajGjq3SJjPvhHV8Tou7emLEaJwByBf",
  "key32": "AWn283AAPh9xA8jX7gCPG7hdniPwqJMkkVpHP72SEQDt6o7jRBGAnw3yMA9k2M99QoVPa4jvus7eS4wL4xUeuDc",
  "key33": "5rwmr9uwFoxuoP5BjL1As7P3UYAkL5tyeqPhFRJaF5Q2oBEqXqJ2JA4y7nQfwcWqfYXfyVs43HzcVUMPrs4HYJw",
  "key34": "5D91fBjjLfY3pYnPVaNHQeS1Cvm6RQbGMj7DUfzeLD3yL8qAj5s7XrvTAGjvUweSBhH7MGqsegASujEHgtv8GNEY",
  "key35": "5wfR2iEththJ45g7SAcVR2cqVddWRgzicMB2BTnYUErbJUuM57T9BBhBrWeC9Azgh4qXVLzi51jd2MFXE21ug9Gc",
  "key36": "22nFFQG5t645emWeyaMAwZLVM7Mn6RtJAQ4D7HBv9Tp8XHkGLAzXSYHpdFUu2AC7EzZLWz16h8VrjmQoJHCARhqc",
  "key37": "2VNy6p34hoNRH42FNVazJM2CMB8eU8VpRKonP91ABsXQcFLxGeoa19TLBF26beP9JH4Sk7Cf7aycUnaD1v9uhEvw",
  "key38": "f6JH8Wgp7zZqmesUHx8w3MWBcRQrU4s33YcBQPGKPfNFxLJ7jXXVvs7LrXCYg6BWR6UNKaAXqNd1AmZYmSdZrC2",
  "key39": "5vKmr8VMHfSMM5dfVBZg5Mg4VmpbZHzUmKxK4sdTEmnX3yMiH7DRK7qWMurc23ERBcBuCYhofMHGd4RSuGDwWK1N",
  "key40": "4ELmg67uUwnirUXEcezLAWzjqc8x7GpuG1KXm7HzwprcffQh7U8tbKKBwm8zrUcNdh6S8V8JmDRwX1CzoZtMh9MK",
  "key41": "3wq7vPMwZyECYQg3Gqonj23qWK7zMfxCRFg41Dxj6ZyNBdJYtrKpNyVBRdrMcFgUDHAn57DwLqyZR6qnCVksjATc",
  "key42": "62QXntELua1h2yEEWjCPR2Z9c4LZjuhKto7WEZhUcWf8vgyJFHDBjXAx4hDMW6aQUH1JGYdLqPJ8frYyvCEvrRSt",
  "key43": "2iYeJ1aYUSqZphR7r5LMyAe9MzFuFihx7BtmhVyYTsjKqZQHSH9gRgoNwiWo5i4zfVQXC7sA8JXdCBhzJZVvTr2N",
  "key44": "2m7RUGUko2GCN3K48k45wVoGvPC37gZVsrfKT9WAAN4RYsSczAu9NiNn1FG3AaBNdk72TFUBjAN8b1MtneUUfLcG",
  "key45": "4KfUewUt6EaFxJSk1u2kJFhuYrWpu2BY6JwwdDeo9cf5wnNRQ3EeVRB6f7u8MLmNtAA9TjaLxjtzHWuuRxWree9v",
  "key46": "51bvutWbTFmxCigQzvbt67r6qGSzpUjtxYHDGBBSYeyECn7Fn418BBeqGcXfcJE5KaP4RMmUeF5JZgRQ2M56qXz6"
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
