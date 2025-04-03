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
    "2k5PznUnTgcrsd1a9PX5rueEHTRzi9atcRVrnabv4dXkDUUE2f7fWBe8rfat93nYodiHGF1vxvzqj7YDZRkENoWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZg5UuwU9yKPruYZ9v7WFkfH7pG7qyzUyVjpDYJ9DABc9y18C2B5WibMs3L7dCPMPAvp5jTGepNvCJ2mZsmCYbe",
  "key1": "36qrCTxh7kCCtavzfDdhfespcKhKgksZdF2bUg5TnAmyoz7yT9thZ722Zo2r1WyBJ41v8wagWaLQyZbJSp6ZKPL7",
  "key2": "2rCKozEt65VvKyZgJa5FcLax9fLhAGegLRyFqYuNaXDdxFgT8a9pzHTmkycnFrhwDwe9ztNSswZL4ww6CiEtsF2L",
  "key3": "3kTjouGGEhzFQ5En1paZZJVTGnF21yu4eJG8nU2FKzpFnGde1SJbAPvj98jKamx4Nu8CKJ1ULUqVfuPfyHhA55JW",
  "key4": "NmbkLT4HYYLeokHLkwQHAV2whzLjC8xzuM6eaH2MdE2ZweDQ1Rvg8s9KwVeuz9dvKZ53pcXr72LCohPpKxurq2P",
  "key5": "2GKukJ31wZkxtiPYHrKfGWD9uauKVktEcQqR6dqUStFuGz1g7rfEhUFQKX3nChDBviBuWFqR2pMnHTJy6MTvVvJN",
  "key6": "Eh7KEdBaXfMzH1E5yFwNoRtR4yXLsvbceW92y5iwrZkhD8G6DLSkrzxHB4GyocLkwdsaFN3NkQEyJEJv3MEHct9",
  "key7": "2fgKeV1qr7cC5h35ReB2t3oRPDxoyRvDpQYMvF1vmgHHN8oKijgvQ6U4qT4usmTj6KN2Px5PBD7irMtK6yh13co",
  "key8": "3dzwSMEA7a25E5EBmy9aMA4HE683khJJfAp9dzRB7R7wdk1b8dxgfw5uMscjStmcrxchV21eDsgwNr3XEbcQbbkN",
  "key9": "2jZu9h1qSSoevzKsKhEBM1PoKG2mBChpmTZnetwHx9QBPp98wz1Gp7gBr2FSeN1rsDnTuhEysk6kKA1dd85PbXUv",
  "key10": "25WSwgYNeXepWAy4ZAUBv3N5VGTVhv5TE2XMuPWeXyU4kD6uRp9ANT7u4CsFfgqXTBDesCNvvRtVMeejxSQSs15a",
  "key11": "2JRupCRQzBsvM6RmpFNNd6Bq5XTs26BqV1RkwJBSdAsM7ys47Y42rovKkJMrhEZPRKDpTHYamR4HHEb3S3eJcUNy",
  "key12": "4344aZumj9VCMyM1mZcxLAtRCWZrymYr1LPQorGobUyuN2gxUdtDbk7JDskQZSxY1LQuPT5kC3V4XuZJWdBh6mGL",
  "key13": "3upgADQPF5MjVLydBtzG6wJud3n3Bv4ioe4ByEpARyS1Q6M88gkEnq9cddKnwbxT9UdzSQKh7ZF6FTh88JMkPHLw",
  "key14": "26jD25ra58Bdzi58BVVgUYx1Fkz3dNymQi6mJnRoVGbNMLK8tyXXT3CQets4MsYJTS1XvZoDtMxNCN8W5aDaLA9m",
  "key15": "jQc8tAXarp52K1UkPA92ehP9Kkoe3NsWwfidsPemCbhCyKaK9jhLyNP3YVpj9cT1c56Ts68AApV5JY3ogmMuW6R",
  "key16": "5wbMZa3UJ7gEqJY28B3LmGBuLFMAJzqsT5pEj7z1a3aHRhWFx4PqH3jPn5C7KJzNTKC5KpPsDAHbjw5Tx4kKQYRb",
  "key17": "5JFxqpmsPM52y74rxhQCcM7862qwSq7RHsW46TQ5wnKWAL3dr5NN63468hQ4eRMK5izB1AbLxsX25ahiVVutDyN5",
  "key18": "29MiCSRtKXdp3eSWrYuoL2RQfkhy4h7qLUZ1EdEaVuAo9Pb4MoNayWtSLXffvQqm5RB87oQt8LaLsy2KNuSWSaY9",
  "key19": "2qZJSGHR9ig8BpQfrCPeLL4EBQ3QT11PhdiXMzBwZ4vRR9EADdFT4BAp4xYRE2QMugd9kxWepu1NBjGDc9ygqABs",
  "key20": "2u36LmW2VBH9Gbyh2ZFTzEWqd2YZHbpgEkY7nEVQnmq4VEg8uRiM27ACDXzx1pmqt9zc66rNHd2oLnyGAZSKDSwU",
  "key21": "3JXgfXVBhAFLLCW5xfsiVJcDF4rmhnVjUzZ2DfUs3yzApVXjCck4shig6NvwXv6YsaaczdZs86LTbzDyxkB2QLAt",
  "key22": "3gwjaG27byEKbmagHkWAJq5mjZLJUryFWWRmU1XdFMz1kvcEXTz3HWYx3nGWWw9SiZmSnSfumkXf7XQAWLKjZ3xc",
  "key23": "es2znqcrQKvxeFp8GLyxmiy7kG6CTYhyT8SVraLxUqshB64gWRQhXL9tHyF8yBqNQ3ovXT53R8Z6nfSUS4PPwmp",
  "key24": "5bQK93zNwLS8qsqqYK6vN8U8RWJ9hDU8omVhvmzFfUKZxs7vo86FCe9oHXw1BGXC1FKyL41uyAvFF3hpjYVtmhBC",
  "key25": "5uCki3rT8sSpSBVbaJVNJtEvVDzWfrBjeow4mbnvgoDjC5fYJ77hCeJrrFV7wssbHmXYs45QBnZwDUX1b2hiYGT7",
  "key26": "63M5kvEtEg1tGdmwj9zoFB28tdjpukUTdLmSCjRHvft27x7FFH4qzEa2gfbJ5GV2SWhBVKLeZDkeqtHtgmAUD4Gf",
  "key27": "4oqKcDcw8LtqUJLKAxyeNuHM7Jv84au23Yv3DQRmA42mgVjGjyW36kp3joP2xVcW9H29VjZQEZezQmwvCZWxUiuP",
  "key28": "3r5QvSskdE9Abs2frcZSJHrqk7L2HW6VJaQutPrdG5KKLarBPi8R5y1XjYVfQ37hnnSgHuqF3MMJBRqBeWaC1LnX",
  "key29": "4uSAT8GNXb5DcoSETMBmiuHGt4jraPA8o1H8mtEumhCKpt68fkzTsGPjYR1ixWHbCgFnQeg63M739aKZrzaUXhHj",
  "key30": "3VZ1x6FJc3Pxuh3pCc6FoXXSxt5V96LSDBqJJ4kkvrwWSPhouF2LEyzUzeV2bG6xr5iSzg85Yq57ddGY6nTCgStV",
  "key31": "5iJKZrWbbTcKaX6kzxkBYH1z2kvEafwrU6nVXPmAr3oJH3jSrn4Nmbopz6XzDimERCGT5XhPnzBMKFFPjZ3WaNGC",
  "key32": "24VSH5pFQEEvAA5gmSK4toqd16a2mgZV83Jew2zArRUQJqBgcPqtvY8JKe6HvLZ8rFu8DUTwGsAqHFKoZNkPcyV9",
  "key33": "32vXKA4BnAy26egkkBNkKknXLLEV97nE46bUUSRSR8K8rfwxGh7V5Mi4b9obxA7ic1UPYoRi7Y1Z5Mgb3MKSceMt",
  "key34": "4MBN2tLjAahbShfqKEJfYKg5pQ8YoFHdh6iXbZKEL1wD2bFarSGLbzKVST9hPrytQGFztJ5LvFFzu98jH4J79CD2",
  "key35": "54NvXFdTu4Sf9TeMDQQuGMomfgz1XJAazXpwApKwW92or2zzMKrvwxSt7x1nJPTznsrEvg9pjbyxJ37iunRECrum",
  "key36": "5Z4tE49FM9wZb1fd5mFxs4rUb5iDHwJNMvcunYZYTU52wgT7BxmfqzaPpr7X9Qz3goKezgYebW3JZEd3LgToguAT",
  "key37": "5Y9UFPywyNyHit6rc6aedPYHjwrmh1g7X183gGa45Q7uiVJLL8vkuP6ye3xvohVN7HHqNUA6ekKBTnUf966N5rsE",
  "key38": "46rA1N8UgZwTYfNbV2n1zUQXAa6z2VBDjc4fypWs8krUrH6gqoGYKeFX9aNe1jVtwPvAM39rh9tYneaBNwBZJyNP",
  "key39": "4k4iexsGHYT3LX116ATpDHGzs7G9rJ96eeiCeFe8sLPdQqTcFsKKdErdSYK4Svq1xt6ELKpzmveEK9z6nibWZCqU",
  "key40": "3JvhMGzFVUEGxSJzoUtjKjWUXyU1yUkQ4PgXdXfXZrK4iPB5vqMNefUPbHMsnBYXHAzUopebNqnhxHuy1VoSBGiN",
  "key41": "4GAsfHoe9MczafLy1AakzhMfF9qG3s5xKreCefbfiAj5nXNTdKrrUch5jhKSMzQsuq2puv8j3Yh1KQ6keTSM8nwP",
  "key42": "3jfbEfR2UUrT56PhVXcLgbaKh3aGeWsCAMgKYCx7tUzwVJ2fqG9Z2ut1yzh16DGu7CH71uLEfP4SQPM2Ca7nDpz8",
  "key43": "5fLvdL5TFZsrwg2FvQ4o1fhWeHwjGTCncZhQrDMULdshBh9BbXcsbMhdvE2MFrKv6Xj6KWBBge8DtpnZn1ocLvsZ",
  "key44": "36fQN5SaPqWPAdMeTvcNipaZaaoJfpNpSicbvNCVBMzERaA3SAgERw3c1BZ2whuwrD5mL4bFmFLkWYis35nHUrPB",
  "key45": "51nC227zhXBYHvLBhZC35MQyCHUML9NgrfQNenhJQPoMxMtc54guwkCKwWWhvpCS3GXckTju6YvUmC9X3VHpv7wM",
  "key46": "2Lx6i7FywLmyNdtMxmo3VmkZjMDFVa7i6rJbPEmwusQDnLKTDgD6D6MgJPyNkz6WYxszExLkvYNy3Ma2i9aoR98p",
  "key47": "4zYusJ6E6SBdZufw57taJdqTFmNkEedEFqi6FxKXsRM4jZAhDDatJHkrWaBiwh53fVdUoYkajpJu3xrbg3ELkVaz",
  "key48": "4noegDx5u48mDnSDMFfPfo9NCT89U3tDPTVJPpA1KknYVEP5bLk5sGrU93HPH8HYcrsZWSD14GswTfqdFLQSWKXn"
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
