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
    "3yrzQxU33GDY9qff9CXzE4hezXdVpp8NijUJZQWG6dwQyDTapcfYi8s6jn1rhrdMfEcsrj5H9EPTutGK3V5cFjTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGjHJGbCX3ZicMArcSLbc6p7wApD63LJUuNep3nvf4xqBgWz7hxsFsrfd2cFK2KECS9L5wUGbYE67hESHm4BAcL",
  "key1": "Denisvfb5JkUnBtRmxXv68tNF4dhD7wsu6PABC9cDb4sScCh2hLmbS8gnhSdj5WNEhq6NcV18BbG6hZsuqbWfVK",
  "key2": "5bMdXr1vJwZWDdRhB4BErdu6xhzfdgrJSqHcwyMvhYfvrQ9NxqmJbsnwYAARXRhZoXE2WEsMiZ79AxgWKWUqEvSq",
  "key3": "5cePHnrp6KwmftatZyWsxt8ebK3AmLBB1rutAiPxP7g7G1yBX5W1FDDF85bTS4fak7F84MZxerNbhKJDxfeSZ3cx",
  "key4": "5qFhSWNBXv3AmDUv1qG4uW8SmxKGXcKmFtx5MREgKjGYVVfbYs88UHhZdDoDvFX1M5DQvM9KUASP7tffh47BYHC1",
  "key5": "2v13zAjiyfJPMJh8svtxzun2oDiMFXXPtmQp8n1RwpHbBEByrXwqwvdAWzW7dx4nPaLqkA1x1FvV75jGsYoZ56ju",
  "key6": "4rLvwLrWtPVNfmTkGa9Xvgr7LgRGbCqzUpSeSke4DWPHR1YVsjJKri9cvxJ5xrpsrZTMcfBZL1dnVeEoCBPfLhUb",
  "key7": "5E8JZxyz3ckaC68TKJnTeZpbnu2wcD7wBipNMxbUG7DezR8mEehBc38ZP7zzqzuuLk5cDPdnagbc6ZUQh9aJnNBM",
  "key8": "5RgrBM6Fx3TnYDk7Dm46ovJJXDyxHQfdFHfdTjM5PJTkeqYvQ5EqbV4w3rUz2b3DDzenNxdjvNR23ouFRUWL5C5t",
  "key9": "626B8JpXDY5XBZS8XwFCTxhAEvUdtj8etehgjeGRsUGHrk9qbutFeHpeVwWsVztCjLQPYdvYpaatXsK1ookMvWwR",
  "key10": "4gudM9twCnbdc1D8t6cTjHc6tQotnYZreVym9u6buUMWpY6YENJRMttfuL6NJJzAEnTfbcnSUW3JXJt99mwPocFJ",
  "key11": "5uGabFiJx9o7jzLFs5GBzPFW5ChEGLTej23Xs77KDiGU8dKyuhDC6wMzMwKtbSw3uU3bFzJw22ECx3rHMmCqZYrD",
  "key12": "5BmT1XzcyFHCnCrpddKNTyk9kUcv7eYTLLm8UtorJih1WDaAQteyujUJ3YTJsGwvjbcx8QAyTR9W9dT7LVknsj6W",
  "key13": "2TTE8t9qdTVankQkfHLWV3He5KtziMB9kN5XqvKxvrygCa3HEs7jtCQjKPVKLbVxvf8Z4xz38bhoDizg7n4x1HQM",
  "key14": "R9PD5rVjQnuZQfGmrDAkspXmE85kQuUp6rTj4qqkkV6TN8RW3jg6L7DYbMESZKkYeiw5oi2tcWWZE2DfjD8RRmK",
  "key15": "5DhMLGgY6rxt4SsjVAD4FLtrc1V7UNoJciPRJ4bsRcCDonXu5vuJRerphtYmcmrVrdspF8wEvbjubroHW6PbUdna",
  "key16": "ENUNoEs4YBcXHU3u3Qv9taukBUh1nQVVbyx2mWRFeHeLD5bHb1cR1NfiRWmu7VL1YCcR1eS4aTmTzcLqVc2qJGr",
  "key17": "DoJWeDGZSAn9cWHrbDbxg3EUaQ8sJYoNJv5yiLwRHEsMBGToM1zaUgduJrkuQqtYeSg6vyFs4Q2y483FVfCZsfy",
  "key18": "3E6MQ9gzd82E4971hdbqJtmtbDBxWYF1Sq88m2PAptoPkZVt9vY5XUp1G85AF9ie1E9TZnv1dK8NPudFZ98HXxCX",
  "key19": "3yBRG1oEEyaWbNBbmBSvh2u18rwhKcqVdaBT37uFnE1AKJkKa2Tc7SL3d7wigH8qmHBewu5x9WyanrFkPk5X8ZHq",
  "key20": "wkavyvUiXTgPjUCeemQFDq4iurZTjFRvAmuBmJPsBzw1hLSVgxfdFtdSPQn9EjuP2LRwKseWDwRuDAdmnqP3UQ2",
  "key21": "4cDoCnojdbxJuuPfnUGmCWjTXfrdSnRoyn7UbNJLUwZjbuJojNJvu9EYAUdrBaspUTiBLaFgNU9n8uwfi2gxpmp",
  "key22": "3Px4RRqVa5YKbFPwjr4bVou8jyySPuUhBzk3PKBeLTCjLxTMzAnC6NNCwmQtiV8XutVV276bwg8QcfPHUvgbTRed",
  "key23": "2sUswWq2MeZx5fqRA4HhUfjmYAZVTzRDffBsQKo9PjZEV865Qpx5wy4ajasaWJU6z7oYwAiE8oCsUcF6bmvEnfKH",
  "key24": "5Mnc7paJcmvjY9AUtzn3pY2rnqzreJzzbgM14SDqU8yTio6bthb1TQvjKRaUbmkMvQvq4BmPqeQSTJdwRevX1znX",
  "key25": "3UX8soZJLWp3ijg7yHpJn4gR2RQP3AYWSaVRd61qtokJjQGTfgoGR36e4dT1J6ZT3GYm82YfsezGNVxaNaMHhkQB",
  "key26": "pxR6PZVktQJwXkxPFkKpHZJYxHtcr137VvmNZTWLmBBeQE6WWFVovMF5t8rM9rRSEugUPjd7rCDZpB7mi8e1K6v",
  "key27": "2XYmstH3agbPyePdPUYo9jmtYz7JCHdySKmhvmzEHZd7qZTjdkTZTfTtjGwT8PYwXioYENGmxTQzg7SE4ukFswcV",
  "key28": "5BvE2B2oUZGBpNrAULZTQxPD6hEdP4PDFvWbPT6zFQk5A1dqRKQo2rH2SG5spCeicJUVxzS5cpoqEzRKXjakGMBA",
  "key29": "2x3e69bn1puiF4skvU6LJyaqGLZUMunx1DTbStbJZoBh5QKM3UrNSBa8dnHwNPyCGnUe9Ks5rWCjHFGhKmWk4Bky",
  "key30": "434nU7yUfuWz9X6bqorJU7y9odomskuBmU6TmRDuuj3Eb5KD4kQHGVvF8MaHJeQpWnkwpZSCjYbwNb7VkSGNPuGC",
  "key31": "2WRGJzP3vgHMAmV8Qg5jTRVyKV5kUNo6o64ah4WdnYFk2TJ415h5PCse424uSEULj1ktQu1ZRL2Ep8RghLLSVjSo",
  "key32": "3eaWRQCnWLzrTeGXV3u48Ca8ms48oYf88ks5WAoRwm1nRdcPn5hkXAEyBFX1cwTVhM47RVUaLDMGTC8FpErKK1Zd",
  "key33": "4ej9GcCinKn9sc3XvYVvRwqgonAoB4eLySm85mqv787rfpEmmVruvxoHETEdJMaCTj6uzbsJFswxkAyoBnPNiVPt",
  "key34": "5s7xr26L38qh4NKn1eK8eBrYiskDT6JApvaLURCmrs1AUqoB7kW16ZvqSxWFyhLaUpNRH9dDwYP8xpTQaqoRZUTX",
  "key35": "4oyBCJbcaWqc89zruhp7fppA6nAqeje8jE6E6HfYtTNwW2xqC83SQC8wPJafL5u1L9hVuaefwyo4jsZ1EWfbSjyW",
  "key36": "2Eugq9u5u6R9yVVmA51aA289sHtJNKUVcFnZAziVEFKagamFSsn4JrYBvvpQuMJV92roMRFDY6TEJGjCgQYSzxnV",
  "key37": "3rHxSGd1j3XvssH2nW5bTLpD6XLRzpF5HRLNwutQPAdnujhLgnbAv1imRX4HPnG3FYHypiHt5uPqYX5EBkvVwkWp",
  "key38": "573yHGzcXi6WebC77uL8AghMbds1g1DTNYMTSRE5ZpZoVetaM7HG2sTSTWRVmUK3DN12uJ9RVXLeUgVV5fPK4xAP",
  "key39": "3s2J4Juo5ZPmTJkYe5CjY4oF6Fd5gh3Ubu2QFtwdRM4wNzuWFx2Veni5Mr9ZMCDTnBFnGZH3XDtSk8YvnZXKHjR4",
  "key40": "5de2LJmMNFg8uEjy761yKirFWQDPp14NYCtaqKvBVqeF6EZC4fuybnZT6G3y1SfcC6gY7TG8eCv2EH9farxbWgGS",
  "key41": "VhAwahyibNs8bg95D9ndEi4YcjRzpVnoAACBuThbtbKGjcfWhuxgrapeHdnEoRvERMh42QiEcAa1SYce6J2zxKz",
  "key42": "46YDeXWMVLh5PxxfkfFqVd6qwhCo6vrf4uBnvpaYD656KPpNGkj4DoRrK1n1x7ECgKNKhd6jPhiGUUdViJ1RxyL7",
  "key43": "3rvysYiSdX1FLgdVJr6VQWjsMhJG2SfRpg2WtxCs9Gyy8nvJr4uxsYmqa1yiwX3e9X2uFiecBRRtVakV7jdbPVhY",
  "key44": "fkzhXzEEvfWUveN2KjireCqH7M3Tfww1bD3e6su8RBXCZSwAxSR65jk2nk2vjnYhqnrxRykDxW3yY724b5AwNSS",
  "key45": "4a5Mq1CxAiiUqHPjsSZu1QMcCpjsyW8b9tExXsjQ5ktUFcV96UBrN81Qpus4MsbYTn3N4EtCUZ3vLWwj5qm3sQZc"
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
