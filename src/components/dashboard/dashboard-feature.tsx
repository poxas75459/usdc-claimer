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
    "tBgc9gpMLyCE83wC7prxi25ZKrPChgpLfHSfrJkqnWzbpLsCevGyH1rSR1My7frg8XNohRSqH4nsPNFvps5jzVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ym5KPf6FqWQyDT9Ao2RctQnMpzXnzuY2s5ePwHbmLz9rRfVPX15QqF4UZFVE5btZLQy17eMUwUAo9aA3NSXhL9",
  "key1": "jyXrovJeWdF6Fn2Bw4Vz52frCFhjJbYoGB3MmMQRsiY6uk8F4BAkxUPThdb2Q3ueoiZCTErgsknob22bcFqiFrq",
  "key2": "MKuC4BYzgLDZR7uGAc9XVyXUccik3uAg2qYCA4Z5zqU4s12vALLrPpCPNSiFnJueDNWXjBM3SHecJCevoN2LZsm",
  "key3": "3QYL2MxmRRfpHJnuNMDpaLjbbhJpKmCv6RhyDnzUTSLbYKUD9jM8a7d41GVzL2K2j8RRUkGg9vLV272awqD5FSNU",
  "key4": "2EpAxrLaYE1SDdWJQxwM73FMqEYoH6q1tuBSpCXBDtsxbyYtBi76wLchB2mqQFBDs9Mx1sx2cCftWbW2dfQHocrG",
  "key5": "53tQEW9dPurkLW4zC6tEdxPy8TvR3aKcKj7Qe2aD2Cv6n2pLKP2Dh1vW9QcLRThY3CPwTXEGNaFW5ykY9Z8A13Q5",
  "key6": "2q917Cp6ZARbV25Ha2Q7upK7thz94HmTu2nNvpiTTSkezBV6TJkCoSGANbuPUsSL8iPGkLZioHeD8pVsCqmseDXi",
  "key7": "52y4AfU7EPU73zqBfcVFqfdH5Aeq7ebMSEhqU1XfDLfesEiMgNDHNEuteX4EjbDnN5ggd8EY1b3xBD7pkHWny9fi",
  "key8": "ZsvApyR6ut711zEwdqFvXUEroDJxk7m24eZ64CDsNYWwZsatZy57dLQYPPdotybYJaFeU6fye6ZbkzubBQbd4e7",
  "key9": "4Z1BJdtmT3rqK1ryA1ZCteB6zvJimT9hdquoGQqMss4iFudnDRZKT12BNKgVtuSzEcBLKTaFHA2eJ4b4rSVpCJLu",
  "key10": "9fAy8rY6L2RP9D2coQekKpygSozmgGCVvd7G3TtPMxrzZXbD4TuGBgJMvpBYWhBWXtcrs9kGZPZcRpzzD2wVRgB",
  "key11": "4htpuuxxsAVP8NU91ARRrZjdK2Dt5gsHHymo1sJTCLZUf7xs8X5R6j764EKUc1ikBUhQ1uk1BV9p6VfD2Bwsub7c",
  "key12": "nHCgkTPA6yVqyKcLZWV3dB2ssWA17JoCpTLDTDxTYMrxZJJ5kQUzCKopygGHKXKB6XKkF5kqdsRH9bFcTsZGCkR",
  "key13": "55m8sqcVeD5i2S7Rmjiyr97trq53eU44ZBQhrBNEd5ZQtw1Qc7xjCvfKCw84eGJJt6y3A9D79ixMQYDawedWmTmF",
  "key14": "TYtnYwycXdgyN6Bmd2iBv7MhnYDjatt9wQGVYMkaLvnVUKqASqUaRvMcx2VzqaKv3EmRfQHtoDrAaNSDrRhdMYj",
  "key15": "3eLe3n2nerwNQpNdCXa7TxgwTwzBh5aJ3MCRqNdfKA7oPexexGGgzbRL8zCnTxwCc6qApBj8LTDsfFgvKvQyGtZa",
  "key16": "3h2NfqKqtowqhuQAbDoHvww7T9MQJdrY4pGHn2TDuA5KxCisqbkzjFf22SduT5iPz5T5hZm8dgQ64KmFHR5dVkLA",
  "key17": "3RVcCw6CQ9RknKye1qnJx6V3P8ZM2d6Yuyit5zVCzgVQTVhbP7SEcTBrAQxpiEV6muzPuc9ERqm88zFxvrRkVm4b",
  "key18": "21vn1KwpJJKKSo9BHLNCLsF3MUqXYdLGt9x8kpVC5agVQGLKAr2U1WP3KtMPLHDgr4Zh7YrvhqyMi9yEk6CMqXAj",
  "key19": "3u7sfK7ER6ApczhwTot5QrvS2AEcr5KzfQ3EPLXnTdGLFXvK2cAWta1bqj2HzFbRsAPcAtUqWhwG1LERoNokTbG9",
  "key20": "4eatCc1YHZjrai4ydarpTy9cZp3ikXqe2sqzvMYwW3iuHsg3Ucn2Z9M3Kcm7GioLS5ZwDqDKub2ZoEah5tRyi1sc",
  "key21": "4CynLBwr2KxXr4yaWJJQWFTxs77KAMD84tZcHtBJbtWvWQGfGaBY5hUk5HE6foTYqhmfuhZvqrp2BQcJMBiV4LnN",
  "key22": "43fFuxpbY6LbMztUo2rz989kUtMEFqN57C3HrVd6ii3tLH4ezjRotwRk4jTKsYwC7CxtJn1eH4Ugjx3Jdv7voE71",
  "key23": "3Y4WZh43HLympZoqCG2HH8P9qni7C3M4z1eQ1KVmVMYtdvtmHQeM1dyhggbmTyijD4MrgvUw41cTWVzCnKqnJHdG",
  "key24": "4zdRGTjKMr7dvYBwd1CG8doukEiCtjYKNNCHBQvLxEdnnD4i4d8GMHBtXpmEqzYSW68Ghk6axzZEvDN2zm7YGzP",
  "key25": "4riUizwwyygyuxFzxysZKdVrfXCA4TD2zXFS1UXxvVwDZWVVWAiTbXe48NGpxsz2PXLtYZjA2J6S8xWuSaNd8vHe",
  "key26": "p5kX5XaM1aqhgobLyij6RKwAGPGzHBWrSYddZcBnDvKv1kpLD44xcqZg16FrurRqwPLfVEJ9hwyhybizSymkBd8",
  "key27": "3CrXn9fsA2AaXwwVpHozrJi39tRrV8n4w6Q7C8ZuUbrk6kLrRfKh4xWb9ZruxsoeiY9bg8WQDdDNsgS21fnWEDbJ",
  "key28": "61MxB4TjdWAe19ME9E2A8kJTfXeYvNyyzbbgZCKFtXQufyFk6KgKq6iCYBNsTWFf5rUHY4d1tfBfGsmdsYHrCD8U",
  "key29": "5XAgYPtuPFMxsrUu6VXmoj2qHnnfJ1XNnuMYcF7kJeUnwimvqbiceGyW5W5i8sKFATAGeyaKLsS1BoB9m7g6EpLE",
  "key30": "52rHECmfXNrgvC35N2VtLNYN4ZnPJn9GD1s2KitpA4FQbCUHaK8rHobedUFnxd7bhz5RBwGrBSMHVe1wBCSGjK39",
  "key31": "5knejxkevA7JD7yX6BZL26mQQmYLnuD7vAwK5LTU6AZaP5qmxdogYcQ6TqATYrg5XxdFPVSntN6uW2rfqhzicWHB",
  "key32": "5matzQdtTkpgDmXkP1iGoNen2ESQ47h3n1przRoMGvEycASZcXWTGqPV6vhS76U4BX9gcYzVWKk2XqqKq75oVVw2",
  "key33": "EaVMBhQ1MbxU4pJTxbxRvG6SHianWnjmELv6C4L58zrEPc4jSjTo8V9Gj55AnmRAwuUAkhTUa6j5pZS3kMikz3t",
  "key34": "3VeXaTYMHttFmZXPrTcEjTmM2tR8nBWfvYyep4jA76QtoFYSCLkQAiYbg4WmsUUQ2U9UqcUt8gLwVLPg6NLFfxVK",
  "key35": "38HscAJQfPHwiS9v9yVyru57w1hBtLiUvS3KMn6hRTMjYFPB2WKRRZf1jGb1kDEZZWTzJf8Eqp8SrfBpcdx4P2GU",
  "key36": "3uNe8Jnckda5zDYyhpjL731WbZVc5UhV7u3aqsXTuDjo1n2Byf7mZmxrgDEbiWc39Sp1kDeNYikDu4MKw4UkrZpv",
  "key37": "44CF7dhJsCX2VjAVfqNNSzJJKgGbJbWmtxiXXZUvM68AM2Az9z636agU89xbyQ4QUv7otow5FpzBy667fMWS9Cf3",
  "key38": "2WLt6waGx5Ek6aCWax7VBWBcqhzd3cAEDjdo7swt7hi2YAYmLqjdKWwfN7ZzEQTS4kkn6RaYYHiHxDxpE85CJ4iP",
  "key39": "3W23e5nnT4x6UuiEs2eZv3r1gFEXhu6sEk5GKGFzwkCuSF6Juj61SJU9zCuKU8nAopaqQencrp9XVYzPfWkqNSiM",
  "key40": "3JNv2eC9XTccZin7k7sENMdF5aj4FAWNmG4k4EnAU19TPZht3CnXWLXAhJAraQQPi56QzKt4ZpNHRYek6VSXXDdF",
  "key41": "urfLYVbJNrcoaHyGpfTDbjN5383f2VL3yeH2xXYUhyB411sbJB6GwWgCAQMKv7ecnoqfQjkMgbCnEMtfrQ6eW6V",
  "key42": "5nRg3GxCJGC3NwGur6nncUuCBFzZWKzAkFeAzzcYfazNMEPGCE72mqe3vFbPusd614svZPPbDHCZDch4VnimaQPT"
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
