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
    "5dJ2UQYhqrCV7J47TNJq4ZHpcStT39UoQ7YrsJNdDbHUbfffKSbrWtJwtHq13U9whi2ALoBqN397C7MjrZAqshtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eC9fTULbJANfjBG3CY41jsDj3REeUYDY2Y78S8tsYi3zzx6YMmzp2cssYWMdyf6wNzg5SU9GCrb4XoRgw6BbKKV",
  "key1": "4J42ExUbrceCcNz2yU1BHgbKgpBdLH9PjjREWqfN95yqrzFSddU7jg612uq1dssivRbWpb8d6YsBfzV9T2EEaLyj",
  "key2": "vV9sQss6rfVivDm8NBQk33X3Z4KHoAkFD3pM4rnPfynhyqMQdHfkpThn15cSZAqkGYnyLWtkXHvkr246YqSJTAA",
  "key3": "4PoK2WU1Dygq2cpcchsVNY9iCRXHKPsiVDpWLZRPSpVbvtwoVzrbh5DEdYvT7cCoSZeQ9Vcw9JnhJ6HRQxZB8HjF",
  "key4": "4sYcEGx4rHzCvzzYs5XogtR977ZCXMMCn8fA5mWPhaZxQycvs45vDX2wGEvnibL3bQ9s9UjwA6EHGdgrmF3haFJf",
  "key5": "i9n4v17vANgqZZouqV6fSrjiVzZ4EoP2FX8sGWNNBzvcVquUuiqS2Rvub9AfjkbDM5fDgasGNpuiXGvGAHFHTRs",
  "key6": "5DmbiToRvwGRP4jhMLLHrG2AVzPzGXXdSb3uUgtALyUDBidNNXnXXbSqR1VRmsTkNkBBAMBD6MswryNT8g9EyXsB",
  "key7": "5kUE6VG3rM8ZeHeTwc3DTZfZbkoYWjRqJfBRTCBdPmXRzfV4xxUwBS1CHz1sKYgw1Xh8rthUJnju2GYzKfsFfRXm",
  "key8": "1LmrN5qpBTBfBBiDVzYAZ5g48rXPAkZTh74EiDV1bxpPQqjEMsMN1mMPeZoDVyCLdWuAeBbGLBSpxFm1hEBqbE4",
  "key9": "3QQVgEm7tDzChggwKhgg2o6pFUddjdKGocoo8d6iNhAtgtYD1U2cYiQ7nneB8qJ9Ws8CtzirYyvFG4WbWiumTvnU",
  "key10": "5k2pTGpXiwKyPsCd8bE3qiJmncKR91aEhPoj2sHJKPwdomQGzQDWETxRRKVew3n6kJZ66mENpaWxS3t72f93ZLuH",
  "key11": "3PSLuXUygEMmFGwUbFP1pdnnGPJpP5rxkFkEjrsvHQHnBgajsDrAmPiMvirefXLp6eLtwEvvwnXJPxr5UuJ3c6SK",
  "key12": "5ZuuZxWaDMeSdVA2SscKYdkouaZUDXt93GojjZ3HzHS1Ym1aJYrASP9LYAmWKbT5sG9GFjetnXtLrCxaVVAztLet",
  "key13": "3GCSX3UFP1oCWbE26py1qavWgxz2fhDkVmGEJDb2yaDMvSeH5pbkSkqtqkcdHW4LxXNAyW5U9Wd6hHFA41bVcMAo",
  "key14": "2AmHjuXJ5Vq2LWDFmr2yK78yzYcJwp3JMj4NtcemoWjDGvkqYRszepcqEyEwuNNCvkGtR4bAB7LLVA4gfzhw9Pm4",
  "key15": "5nq8pv9q1XXtyE26a2dtqccVHJ4QGieXZrazjwrgN7eBPrtY13g3pfQziczMj8xAzrLCvBg8LkyheopEMwhFtWJq",
  "key16": "4mh22x5rgoDEu5gAH8qmcoXpYMPYgGfxz2PGMG8conrXmbbrW25h8NWbbSQobbdkoaUtFrfNhrajdZaHxiScBa4K",
  "key17": "4mrNm8xoxXofsWv6mbrjh7M6UT2wtxtZbSCpucP832PokgJMUUR4RPBKWHi9X84boyT6vdUT7eHeDrynizwB16KC",
  "key18": "2cz7XoHTQZUxq1KGkgrq2LDmazkGigYWT7wyixQnQmsHMNNMTHyutYgWyZyAJSyiqTEY9my2VKyaG5QRFXHQvW6p",
  "key19": "4o3Q6jGJt1RsgdteRECqXbN8o6PTZKP7MTGK6K5wASt2vBRM7fZwcj5utVB3bXVi8WsJ8wRpjyT4egzP3RW1t3Lh",
  "key20": "32p6jH8cFiBoahcrGd3WfBNYN77q3sADw3rFGoDe8w5nZ65Nv7pvDLNm53JWQ9mTScArHa6vJtK8LeZNiP859oJm",
  "key21": "55CWp6vPRcCKDUvWBSDTA2V1G8CSRg65eX4WVLsz5S9WEEaZKxUJUt2Wip8ctVWJdR7yVR4YyAP5vK5Ned9NprUi",
  "key22": "2qoLYEZKCNg7ZjzdyFQiFoC7T2baysAxc9Znw5NBcM1tvJpU5oD6R92eYZPNcqJc35aHLWAepazUVFvStZ8xfq7E",
  "key23": "34srfLEA6od7T54bnMaejhEt6qFPETtZGBhRo6x4XirdkB7HUzF1T6MT9kayMq9DGUPjSB52hZYgke7ynRkgBj1o",
  "key24": "2WbsxVYf7YV7rCXXGiTjcecRMXp6wz2xLVWotq4iHEHuT9uxXqHxJkUvWNgp3oqs4MAsdVacMTkjKaJqnVFFoaLM",
  "key25": "5Br14DnWot1WXgna2UexsCg7oHxJV3wSSe5ccagWznrfxgLqJSprHS3pk6jSB2p2MXdCXBW1PkJRv7uNU6cw3QXP",
  "key26": "2cG5nkatf4VKcn2T7Vatm6Naw5BRmJHFTEUWVpeBDAKw3JC2GtVuEapHDGHjJipGfwfbJk631ueTJhBxu1zbtoXL",
  "key27": "KCAkXFfsWeaE39Xm5frx14oV3UqBXLLFK2GMTWpaAPKxdELCsrMkLo13KiVeVn2NPj3VSv8rVcnXobrYvThUN7h",
  "key28": "4x2fdo2DiFMj3URpUiVkdVNh9b8Tm9nHCyRjGViYTGMrULsFPBarrZFWTxDdYvPF6SBbusuAbUKg4ebCQxJaD4c2",
  "key29": "2XqxDVCDLpmbSQddVAztYQPvMFkH9iaNgvHde6hVDYCEr7ciXzP1MngGxbk2ptPKshjcrM3Lxw5DGqR3UMYMJeJC",
  "key30": "44L4csFvbL9iXrcVUVBG37wUiSPsiBK66kMHsoiheQ4BXwt1dT5Ngw3pnJHuYbnkfBGn5Q2qyrm2odfingoydXvQ",
  "key31": "5mpe8HZfv7BWwDAc9iu3cVAVpKW4tW5nuitYsXCGS1Jx3BWVT5okqSaTqghFX6Rncz1goK6zZswL3AvWCcWADdo2",
  "key32": "3nwixUGrYp8aYhj1ufFZ5kA6HkarRM5DHvT6rbnJsY3vPJLjwvxmUXV2GfDE3TWjTbfruu5VTiEWuu2wtfD7tuct",
  "key33": "3RjFpR1qTt9SVoG5fCKvdsu9W9YUBnQDFxc7iiX6pda1v5gQSvMHdoZSBsrZaGPWmMzHVWvfsiuNgKEa7cG3N3JU",
  "key34": "4p4hsmhKs4KPGaUwKor33GAv8tZ4Tvia88NFMcvgHgRQ7upTJGJt6aeW49yfVfSW2A11sUVhxfA6X6z7wFqbzU2r",
  "key35": "39BRJxqrTqnkHPexKKhoyXLGDogBb1j6zUAkuk3jHGPxL5GnQTWQmGXgNeumFZ5iXZDm2ShFMtwBv2NT51GXY4fk",
  "key36": "qdSz4K38eytsUnfn3hsMsA6HvZeE9nXDKXVwqyvYJ19j3xQawjm4qtjwUqgYzJksXxVwsGJ3KyAPhG7BRZZUyoK",
  "key37": "64NRST4hyUTtvJwNUtrnrFLRTzivF19hHuTNb6t3Grhfqnpfmwg1mCCe18SYbxvQFhKE8wmewccT3bajg3Pf3rwx",
  "key38": "4nHws9zyjTVeL1ABV2bDsYawK2VJwVg5gZrWNUQwcvsUz5LDPKc1HQuwVGEBYUi9RrQBTUkbYJNHUzzzh1XRyQUE",
  "key39": "4Sqc9MJGcsGFzGjqGgkPK5B81Uryxb9MfNJfH2tdnCApRPieJFkdHKKM3VLfkcP6Rrr2EBGH8156waXFnSJGdXad",
  "key40": "3HBpQbjLTytv5zGT5SnKmnu7JXjc674vY4h8DtwwvMqY33dUVS6nvrLPqEJZMTMuzRPiBurg46PTfaBKEmfTA6j3",
  "key41": "xk9Nayq8S2yvrJx4veAw6KF3KrPkAkr5iTDvoyY7kshzLmaBCp98NLXjWKFnc9aAjaPCp3r5FzGuGNqiVdAzXs8",
  "key42": "2iajSyS3po9zxKjKEwEeLyvY3CNvambgXE6r2fYLzQHsAKWGgNmo2QPAnyuBEtXntUibtWdHA6te3HgGhNQBJPQh",
  "key43": "2GLXSL8LCCs4LjX7RczJuWZs5SwxaG4TLuJ8ipaE5wfXetGU4EZeL3F42vHus1GDg3WPHjegpXSYsw4PavQNfHEN",
  "key44": "4TBcsWxvgGsnMfKmGB4YgCg9ryEozXEKirPZGgp3Va9DygSC8eCS1zkiQiZh6iwoSrzvdD9nqBAbaUhN2KsX5hxy",
  "key45": "3vcuazPyH6GXk7xYDiWr4t26pKfbUUrnBf5RCFhe5s1m9X6KnxkEPLsPkNZ3StBBCLc5VEfdawKBQd5VZ3HdCSqD",
  "key46": "owm6KcwGvXA1hmp6qatNMxA2MAqUAWtqekfkLMtDFuhWCMLEjyfYtyZQy371Wm9EdQPQ1vboeqYdrMm9yVF4YUi",
  "key47": "63us69AnQuEoeWJPa1PxTxgjCGMS1GSgZrJuKmuSsHFBe6aKcm4YP2Zkn1TpwF4yr72SN8GhGH8ZToJxy3UZJUv6",
  "key48": "ywrXQqJQRUjRcY911UTALYPkz6GTEYjbE2kviFuDZoRe2VWrxVqrQoxEHmAWxUcgHYDUYwd3gi7tMwvPfJeQZ1g"
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
