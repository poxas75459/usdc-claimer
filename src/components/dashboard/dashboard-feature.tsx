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
    "5jJpNUt8sgPZXQ6dTZ9vxR9xZQXgrQgLoJPg6mbZDxebF6aWxRdj9a2vjDSkrdK4ave6HjLWE9sUrjtbBsVP4Kpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePVY8U3KavTL1byHsyGofLrFUMoqenSYbNmBawto4QeqekWP95ty6LnSp4B7RFmB7rYSZNHEumuVoow39GNoM4F",
  "key1": "2NSdRLD8MfpR5FZ99na1JeFsPnSKoaAWR1z9JYfoAQm75qpR5dpqdv3hA7ShGwE3xYHZesJ42hdYyW4F2N5fokXz",
  "key2": "4Ss6KTXA5MLaQUtYeH86tLHQuPggMaqpFk9LpnPUHtzDmDZNsNXYwd1X1RYLjwmmCQKD9cvm1QA8t4tmUfw8kJ1n",
  "key3": "4EZA2g2Rt7KawgWpv55XKFLiXvDGUCD9PadY4NdwKuqRvkY1DmQE97f7tnAj1ELkjhzZY2PUd2GWFeSRVu6swck5",
  "key4": "R8ehxjE4BCff8LfTWAYxjUn3xmgaMoL8dpDQVkB5y4aQAqJiDe4n9cTH6evVhk9LS12HZwoYtNzWoaEw1hrz9CA",
  "key5": "5cUKChw7s71jA7KTwZQMfLY7xSmSJgje8hgXpJnpa8pPyyg85LNemWZBA3Z61H2azmXnCXEV72jMriUQQAaqk4rG",
  "key6": "42RhWnjpqMHEaFehYbxxPn6i98ZMdrzyreTcSLkkP26qZwtzMDcEotbJAEsG255HSMTVHB1MCwX8ZavQrkNUuM8F",
  "key7": "9VAHmoKyihisqhr4jajacxo9wjoyJPgfAnMXKDaSGuMJq5PUqKVvKR2HZ7Lb1MXxwg94wnzxaENhTrfma8ujj85",
  "key8": "52snV2aQEZdmvcRgDGXUHzMCWF5PmRenujrzG7WCFuFyhN2b69K8AkyLRFrDbE7jXyLZuBS8nsuDDpHiyg8BCNQm",
  "key9": "2h1coMexG3Q1AkgdLoZytKCinDfqAeCYQ7xTf7PTbczxN18AgrHU87F6rTdJo9Mb5X1Zfo5bzWRENcXUW9SfSiDJ",
  "key10": "WUkQzJbKDZtCBwNtG5HBBtQXEdJofG7ER8bGheAiYjtHrL4xWYvypn9j8mT1Ef53Nb7f9NYghg5aV9wEidbqWFn",
  "key11": "3o13eaAnXCYsvSZpCiG6GJ7xK1WZVjRhyffQG8KTyKuAKjsR478DbpEMsB4Ckx72mYZUB6umXLwPHtC1AS3ZWAiy",
  "key12": "LUtvmkcvPN66HhrVMxob3ugvbnpFUdFzYDgvR3vmVfgrLXQo9qburAHHFoffYm1jwxwM68vAGsvcvP8sLNUjv1g",
  "key13": "3fuzkD1QAduvr7oNjoQwG3MG3t7fmr7eJxGi2vDSygnCq6p2sCDWwqdp9xqNYr4WabQmSAYU629EikWHV5JRXnwn",
  "key14": "3bAEL1bAizeX8f9Lm6183ACqAY97AqkhPvNSQCi6Douk2CR1VKC3Vpy9E8cDLEBgfnV8wXc7tQrWnMg8rXdNn54d",
  "key15": "5RYdKFrMAarU7k8Uu8E4sVqLgMovtt6XZTnukP6zk8CUUvebwNF3LejLwkMzQM9DN7uqMgNaTnyr5vvHtt5D65P7",
  "key16": "2sTbd4Gk4BsPCYzwSQ5DiUKwCdBczUJudGeQA2rpoTKtCAmDHYLwXDNf7xjR84UhPzCuNRAUAVFsKBiNM94zS3p",
  "key17": "UjN7Xpk2cqCDNv4f2j4zLRGNJ58U71gSBtpEzM7EZKbYBBXy3MCjfr2gC4ksvStVAWCrR4DRhUP5H2XhWnQyd6y",
  "key18": "3DEQX1yB7f3Q5WjntVJaG7aVPujmKNtacFcK14xN1BVCUgwojWeFT5PfVZfDsFCiQTd3i4FSwNvR2YttjkrSPJFy",
  "key19": "2AjRNMEM8BHhCRw88qesikKknTwCkQVmCDGcN5PNJmgyfTSqXMf2KpiuPmbh4TGn5ikDW3tvw23JnQvqvFzJTjHw",
  "key20": "264ZFVjpxvPRwCWrjVWjaTrXHxEdhYxR5FpRaqPRU6yKM3vKqG4ezdGSH65DqnazL2XpbUCckTPEYn3dzZMMmsmx",
  "key21": "2jA2aKY1j3mbG4H69k78WJo1WFgyxrx2cW9D3RVha3ZLGyZzZVahkFNNeuupSSFMduJ2drgd8KA9gp1ZtXuUJYN5",
  "key22": "2uFyTqphyjqW933osAfiCjvF6Jj8cgrVeFA2YbqbzyE5e53wuroUD8NnXGcVmcYrSFXM2btfCj9n7jEDqSkijBep",
  "key23": "3EZH36rPHd72EZ8CedGxL1U3X4HupPRD4CCe9GK4h7juNNFsFyUx4k2xXL3bMUA3rpNGYEgY7JNPVWKabvkhFD5q",
  "key24": "24hTqmsR86v8kKex6gW5LUxwXX3eivQkWXgrU3qnRJUCvpp1bFcKJYBJAAVLcRp9WZ6RV8ZMGN1kb5NFnDE1CvhD",
  "key25": "4hQEHYoUKkbAtqih7HHfqh8wfyA4yEeU4vNJHLKA2dVh1TcsRCqBgFtqLTrcjuCsWUTx2bBN6A2spHYgDJH5Jwvq",
  "key26": "2GxR7WJzAzxENqsFQgBPuYbrRr11NDCv4wGrD7QwtbDhxjhyQcXwaupZHsA8KAGrmPK9HLMz1G4th7k6BG5hQQSb",
  "key27": "33D8DyDYu7F6PF6y1PpNfqH4QEAhUE2WrNiCQ2sU8onoeNwFMEZzaEonCKmMXFbjBwLDisTbQSiZWfQJRRxXqkRa",
  "key28": "4hqeuSANAiBhgb7vefbtXN37WGyQmGzPMSXpTp2B4NbNXAKKDrV6Fp4qV6t7omPwivxjVRadVgdHpKSj2yGvF4Rp",
  "key29": "55ieyunxX5bHsTXjMuLZVZ5ZfpnBETM3XUvZZT4Qa1LSGPmwxkvjeV5eeFgNfJgjD3uQPc4WbHUExH8GAnQNwhJ",
  "key30": "29TnjpiijgGiTLstPCg2q6Tamtr7GrYLPorRGE9fseNnR7Cg5W6Ee39SZwfRXDkVvphiKzj9nmcMnJNErjLw8nsN",
  "key31": "3BY8rFFX5Fu2CKfXYrTwr89GeGgsbkhsuGMScn6RM5nEantjtpY93EZf7U5DPwKGWgGu7833mas4ierY9dDy6Rq",
  "key32": "5cRo5SUSbnXFCGa6rq27M2pLniW3xVsEAN4QqpzV8BFCu8qQFfQM6w5wCp5o37HYWpMezu6JdSNyqvGZPYGGhTZG",
  "key33": "4NKj1m1crFsBt6UFEwTShPRGWyg82JBNVoMhW4ZkuKcagXHMCb3Yd6Bzy8QDUXmd6dNChwKpMoA56SdBXQPFdRdh",
  "key34": "vbuTmz4ZDYBwzAz5GXhwaWK1TPyKdqRDdAUdzpfyXM9B52jSHH9whpZ7Pmsp1Qstrbge6zSZgq26LZW3PF8aHis",
  "key35": "24MCyJkUKiKXyPepffVALKeHsyTsC1kxGvWsvHnfwSfDCzKLHhGKnrYFs1dvmKatK6Ltzu5oNty4jowvuTWQmC9Q",
  "key36": "3mSiyyHjyY7vajpvNQwkoGiGd2vHjm8xjZsz4ke9ymLEVaWRsgX6B1bdhhvMzVJKKe9d87oNAJUUV6wq22hGuLd3",
  "key37": "4UoVjLUowEmhB4QNskfbStfAvws4Uhy86grGV3A9oC27vTt8qqT7on6eNCHiREhHTXCA1W44x5Grn7w2YsXLdLgV",
  "key38": "43xg3f61UKJPyVdhPCQdAR1wuxLPcELcSeMnNqW4x6sneJCNDzX6UhV1fHS49hhYY1cRAm9hXXkNJLmDkRpvRHv1"
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
