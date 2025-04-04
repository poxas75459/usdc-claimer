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
    "4XLisr7Ui2qwJkVZ77eTN6vmEJfyPHsP1gfMrWZSfFLCELt1wuVC9Arg8miyH3QWcgAW8cXYfDKcvtAFsSrduLUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFztrGWKzxEPdQcPfiGruDSiuEZrnQF4XPY28SmHhCJhJXNVghtimEUszYA35GLVB9tVSUgb5VvT35VuMHc5iVw",
  "key1": "4zRo2vnnrUUpnU9CrNkkeVV5HLVKRBjx9SjFatydfwHQSQXj7Epnj8pZPgJqVbSWvBeg3uGP6LQfyGxAt7zLP2Xy",
  "key2": "miWx5jJYCjNBHPFfeWWDTwQLDwWNmg7N7Cb7Mbm92knq2QiEfhbkCdwaa3t9esvpua4sf4BoJM3xuCFCf27vyMb",
  "key3": "5qvcfNgkeJNmTbzQiafwwb3THjyk7peit3DtrzubiL7H6tCVhEtr1SbQNK6huxmfKAkDYFqdi1noyubZc7aTDibE",
  "key4": "4SdkRLSWFcptntnqPUa7fkexN3fWR1f86VvmbcSApKMDCnCTYsYUEGHoXcMXG9UAVJ8FqM7NXXbNFQpKC9nBcvQn",
  "key5": "3RKkjmSuD2UHLMkZTWSU6TdmvNCCisMdnyD9yXBPBUuadUEd8wBi4EcgXgGLQuB6oUW5YQ6w7QrG3h3q7KYiFuts",
  "key6": "3JeJhTHV8N4NdYL7jc9W8z7SPz7AYBQjfhBtuaxjJvh5nfdU7takoycpMzASK5it73jHfgfndJVto5xtKskTRK9p",
  "key7": "w75CCFDwA7YQmS5j9WnT35NzxYdjjpZAUun1CSkD2HFHBKfHXXuyqEjuBFvrffxwm9BGBZLGJqCPkYvYdhHZ9AF",
  "key8": "4oCxgxB3ecHEeazZ524WkvxS7UyCdQmkWmSrr3Dvtd6dh2PFzfHYdk463BeYSXrZYhwBYaSB9KpJtPxufHLhHze3",
  "key9": "4eBbXFesVanQ9MZz8fysSYk32Nm58dgdMy9wvPzcNEMM6hA9EYQruRLnFQpUTJEB6wDxFsvDZXBYnAHAZjvCGQmF",
  "key10": "4aRyEz5UdVmg1VnEWdgdW3FAZDA11WKXX6wGNfvPQH7QdmtpqQ24z2hHvnMFZb8H9JPH9R1JNGNv7a4WdA4eqCEc",
  "key11": "5FiwmWqHv8hQbeBHmSiWTJxJV9HotxF2aV5ibRdY7EJBKd8sWmeEpUx6MX3fsvNy6JCNUf3WYWYfPCgWFux3QZyB",
  "key12": "2EFqkFcksVBhLcFxN2gcZVgmYQq3J24r9gjnhE3wsp7JQSgThPbHqkeyPLQzj1pXehhJoVNDsk9ifTJupi9nXrF2",
  "key13": "4UXqqcEk2DZ5mG4fPfLjnmroVjJWpudpF71RqanaAYwbkG6Vo9iFXACgr7a4mWMedLPVoj5eWVmpcE7reTyiwuK",
  "key14": "5khDJ13YaCr9fZkMR6XMvS2cs9AqUFWSKzJEY2FQ1GCEPLSgEUNWFbcyRjCUAXXgEZ3LfjnU1tB7eckWFGLeoGP3",
  "key15": "5mPzo4H3GiocWKQzTTyyW91aLmz7LFV3FYenDdfvcwpoG3od8nta6k4pRN7YoWgheY1Buvn8grfg7RpkLm6XL4Y9",
  "key16": "5LaPKLaTTPHroYbyAKUwnTUkSSy8wn7x3VFP161kZHPpupdgBAzxfLGTtK27FcHYoeXX7ByRMrJfbmdgpePS77UG",
  "key17": "48fdp88UHSjHvvTsMcK1SVp5y9svmrenbhW372caFpBX72gnq9Ux8Vk7q6x1JiXCxQmYbuKjsbe9nn4ZociKo7D8",
  "key18": "2uDkwBhvnUEdqfKBLaE2AZrqgpCrQNqzcgVYbV7JdtNK4XPCkifLAV6vGAdsDhbRWc73pCmhqdzLdzEmejRs6137",
  "key19": "5GQHgNG5d9iCW52ZBWGrQp5RyUAgqe7Q1CPgPqopQyuryDcL4jhTRCD2NV2kWRrdLEsvXa7rJPrJ5dprsTd5jo2C",
  "key20": "3hAmj5EDffFy1nv1H7kgqnMxRzwL6fQfShvEKy9YkvshAUpC85kC6tQXtjahSPPBitHbP7ZhS3KkziTsFHkNjZfF",
  "key21": "5CsQT2Ghi2DoeLAx9ECK2krNexkNWqiLywYrG9kbxidpcm3ZvTW94aBvx8coPLLSQEdf5DBUY5xVcVRkq1g5PjDD",
  "key22": "4f93eouFUwmWMfrLidt6LcnTM6tr1LhaB5hRemcbxtSZC1Cmg8WfiW4Aqo8UUq5ELQYc1ZnwtQNS6KARPFAJe42i",
  "key23": "2vcitrySAFZaGEwzA6B9dhu678kA68HRctFqb6XYin6ryedYr77nnxMfdSjncAS1NTRtaEHvq2T8nRxBaotjKN3f",
  "key24": "5PiZZCh6RGc8NHPdUinLgQku8oYAbnV7hvmN8xRi7A9WUvD4WKBvQwKH81wm717yECQA24Dtq6sAmuwK4EgNYDea",
  "key25": "zHfJPUC2HtcFiZqDSgRiYmsYCs9ag4BXvc36YBfpEN6YoRFLj7TqG5nyoFAemSs9o58YBPrwy2p5qwBZXwe6Mzh",
  "key26": "5okcAUt3whxUbaBkxuib85rrqsc4zzJb8J7bpBNnhc8LUgqmETiPzFDrUq31eXwUmZAyQ1Dv5bbAowWU9hsCmdMq",
  "key27": "3VBMX7KYbShsYosf6jcc5FqHuBwRT8Lo9Ju7xsTtXw9D68kwP32ULi4WKFerkxR71oybhpDLQc5stKZeRFNXdd55",
  "key28": "5dVpk7EuLtiMyfm8zWCZRLaSENFdV9rSUfwmiGNXEB1qcWEBUaj33o26w9LEYqYVEPqztWDMsP9UrZq13hVdE2hD",
  "key29": "3N4Kywr65MrZhJPgyDLfG1xBk22udkrP73gv7UXdjvJmQY89qe5yvTx9geXCoELLa5zNqgKnrdGKxqC1ZPgeZEG9",
  "key30": "5iocaKsfPUNBGRZizExgYotXRkFwkNECtV1BhPxuYWZzmktdmbMWb19uKtV1BDAEvkVZf39H2YHXcgEQVCS8bRV9",
  "key31": "JgwYmva2vpNNh1GPuzsoypkSY8GGc8c49BZERRaontMsjSBTASkCA8jxNBmvuF9X4ecZaWbnu1iVKXttnh9n3Jm",
  "key32": "2CBGfVhFp4PncwLNQZk8VcWZmpixFETkN8NqkDPcdyfN8LRWEPuBC7dwWeYyzFaJxiVbSQ4iecMekyqFW5kL2QZm",
  "key33": "3EmLTaE7eyoqdem4TtMbFynUYLpMUR5JQa1y2TinzTyuWcVFgKaD1edADErr9Vt7fdqfVi869ZYVxDoLj2V5VJEq",
  "key34": "488tbHZBPy6vFz23PMd6ERFBxg6ywpj3NMouZUqwqna8EjW1ktDTfhGGv6inj3dEXUwEydEEvxya8qSb1aQ3zCEY",
  "key35": "3f4iBWWbveEBbr6oH8524M1SiGxvRBvtLtkW84STeMnpgcmKge644K1z9Eur56SAB6eGdTwAtDmcC6w1nyXAydDa"
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
