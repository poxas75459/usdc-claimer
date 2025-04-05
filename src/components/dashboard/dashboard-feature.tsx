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
    "2FoEhfQa4Md9RFTogu44euXf4ErZr1FQk38DGBrMzuidhME9Lh7zNGQR43asuhohJGMZt4ck71xNVVH86p8mkYVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5m7Mr3m3m2WkfCtTYYCUA2Uw17LTXBTsHwLFXXunSEPPos8VnkNuLbwjkYLVwfsuk8eWN5uWrtiJDHU46RPJHp",
  "key1": "rqGZZ6XCwemjNGf92PShgKdairCgMNTGACbfkhojiFSD4H1ZJjgd34YTpim86p1vGb2uUwM5TimAzkNKLHFWiGe",
  "key2": "2SJyqL7SnEqDatZZFWP7bJuXmroAsX4HK4bWhDw8yH2GYGAptrHkmS6pUn5eNAA4cNJeameGV463dwWkJoDaQt8U",
  "key3": "2dkCLutpHWn7FRwz8abkn9ZFiBpfaBdqiM9y2vgNcgWYpbHKcpkhMFviJsubsA1FAFA9pa1pd1v8c9RChpp19XZg",
  "key4": "wHz9EY99NtUDsZaDGeL88kVreNaNggtbEcG7NHkA4XQtBdjyNsk15MVG83MDaqxSSxJSc69MdeEaU1PuaimFew4",
  "key5": "4SmzCC5t7MALEARmHqNiWJHRTfXDBTnqCKJDsSNNsDRbeubZLSsScm36hRNPUEoPfpEafUodTdxceDL5GcL8cZRe",
  "key6": "2kXYTeVt5XES5M34J6TjqE2cGQGxmsdtFWjHS164fnsPaSg1ytGUjkcNgk6Nn1m9M9RKT3uKguwEy2zFmr57vANw",
  "key7": "21fGNHyj7td2GU3NQD47uPNJVdEwiW5b3bwiNVAHqzFGZuN8TQgHHoMWYuNfnEHT322PEmjX1RmXuUDcsJXZiHXL",
  "key8": "2xgpxjQy4p8UbfQUvMfcYpqQs2Z1nsQEsZKy9espKbLKdwgJXRhCcVSDYS3a6CiHwTy5ViHEy3GmXf3bEwD7djsD",
  "key9": "33QUM137nVdihMbJe5XJ1bvH1oWqFoQuzqi75R6vDEt1jogt1np8qkPsKz4K1XPgNAtH5Q5aAsgVsgP2SdxBDb72",
  "key10": "5V9479DzSARpdQQyY8UJnwjnoZiVRapdKCdpMrWfH3dnC7ycxQNidwbGLv8qt76xfjZhnGzegLFNwjX7uC3KJDzz",
  "key11": "3s9ELYDR7Ebsm1d7Eigcb6Mwnvwv89wf3rizmdnWDZHsz2c7NNopMawJ3Tv4QnZgWQoWynEUrCERYE6FRn8SXCUu",
  "key12": "56tpZW36m7hSTrLNGH9m5UDiWbPfKN6wpZgVkBZ35KJZP7wKV2zcRuKn2V8JzTm35qkLjG2tfFkJHg8pSTkNgYmv",
  "key13": "2V7iMYCimM2oGEzmdRbyRB8yMwfJUGzLxcASbbceRXnKMgadwkXC9FfFQ39dfYYFUiwMc5sjVAYRiXwa18Voau7d",
  "key14": "4VKEJUzxwsg867aKqGHqQzeUUhFdovi5Y5oq9kPfAkZ7YKMq66bLC39a7dFxeXoifRZjsbznUYKtCg9Z93WN4z9Q",
  "key15": "48bSo6itD6nfq8wZ7n46AjeGheYQEyzZQ5zj9bUUxCy5XEbGydM6veMb2uB16gZWuALBHnsaBBCZ34xhnnbzNLi",
  "key16": "2iPeQnq6ydi7ZDvSWWfHJzVabtGr4XJTZyfA2bccpAAUAKsWqn661nyK7rEmrCdmUp571KYhQ97PhD9ifUQnZ2Ep",
  "key17": "5fJxmmVsQNhmoDxyX8MdM5ammM7tMRpNZ6KLCR4qKsq2ux3q1CBLGjvqJ4ZWTMhQdPTGr1h2TmonjC2awsoGctAb",
  "key18": "4ocvm4NsK9goiVcaY5dLECZCozorN3HL882qBxnSayuZ9zTfkoTTRrnj26Rx942Qkb55qzwgtviG1MgnkLfHAzxp",
  "key19": "3xjbRS1Qs1wkdgqAjLN57q8P6TkNKhpQNphtDY3H85atWpgS51koT7p9tqZXz7rDQRauZQ2yEZ5c2jmQdtdbSTt3",
  "key20": "2n7ghVUk1TmPpXUVSqm7JHFKyCKp17XK3sqkuRG5ozNQiNFzLhFYJHohTGHrjzqDN14TWN5tENpNYXVbA1GDxJ4b",
  "key21": "3MCgSFyB19ALQpkCKz4aNZ7oPZbJRUoZwJcc1HQrSDsgjQdAtTEZrEh7KPz58exoPuu9tQ8m59bmKuYefe5hYHzD",
  "key22": "WtSvwNxjK3P4xWPLuWtbSA82p1wteugiyVhu7ZU4bJwzTbxddAJJ523Q6GmXh2onbTHYwAoaHB1isZryddCdQbS",
  "key23": "4nUoTyts297VnKHkyvQfLJMcuS1aYk3uKk7yrQV195jscTrR8jHicsCfExTAVAxeSapbtHvTNZ6nQXmxkfbuPFra",
  "key24": "5CeRkqZVdbeHR9u8XJhQmNLyQahvSwtzYqUEbLzDBM8rCG21QFbdB6sWD7j9ZUgZf4BTxxobhkMEkASNxiMXDWJ7",
  "key25": "51GfAWDjQrwrdVS62AE6snLquFMdqbh8u9pB4o1HqBxF7PABv6zwkC873qUagKg55DVgg17g8BrneGTSQiQbxjz9",
  "key26": "JwLsSH1sJub4mrm8AKSoBz4QFGs5xPUh1umrbQbDEnp8SyaNM5bPQ2ELoVbij22D8FGpPF48e3NNzfhgZngw1dQ",
  "key27": "4CG2yvegotYdotXdkSueRey87wPC6RZsQrhDMSnDWttyYRJJyrQMmJ1Ete1kYmWBKhFYeYPmVeGe3hNCbcWzKm7q",
  "key28": "2EoTnZ8t4zn51CKB9r9zuMstkc7BNBtDUjzRBz4uPKa2GpsS6VQSyNcqYVNNxCoDmCscHbn5pZysEBTstYPWRcub",
  "key29": "3TaLqEWKRfT3HTPT68ZeDvxXWF3h4DN3dBdwkcUsKtctfAvL7wU2kWnv7uz2HHAFmp7YAifwbNJy15sTNSFEbcHw",
  "key30": "2urs6h85Ge8TYccAAEdMg7eNmTS61cEfj2b1vCtjJ1smgzjdoVmJiPSUxbXT6epDkkKMuJ5Xc5VKDiJQTwMssLV5",
  "key31": "3PbgNYQnGwBDwH3yExaKFqZNx6BaBcqgyQQ3a1dBqSpVx767XBjhDzuAdMXBM3AwDjYc9k3avBpMVcqXBZxs2Caq",
  "key32": "5KHtGrDK8UqoixXhiJ99Afwcnp3VterccaManXZRgppztnPvQhr5fxp8Tif33ZsCK9RqaYwGhkrUdHbpzjtFxEGm",
  "key33": "4ZtEim9TY849ZbK56RUjZrR6nHdwzxXLE5wbtAkMgbH4dTH4qTcWFP81geRnafz9QtZ3i5q2DzfU5pgDGYZFjdTr",
  "key34": "38sHWqZB26MScPqd6pMRPajpnjbNT84AJeh3nNSnX25QHnq81RpQrnRJkGbZzTbwDczkJnxuLqdQ5EPVrtufqqaS",
  "key35": "4a2uYDe7XE1pFK4UQJtW5hyqP8wWMJAqbrXTj1Tk5JY4Ys6wMYkgqgK4VbnwqiiSup2f8KLpm32YzTGbSRWZsFXq",
  "key36": "4u1nvZYPhiasyTbgWNyyvNTNdzpzULi3scHWyWJWiNHoaCdAocbth2adyc5ewVqRwU8Rcwyco4uUCvh9e67uJEfE",
  "key37": "3yMGMN9b41J2cPWPBV8PnmC7utGaC6xnUPoc1DoyLEsf8ScQUDhuF7KcddrzaMpZFWn2pe3XbRwu6ZYm9UaVSGbg",
  "key38": "2sy8xpJMJL9UfDPSLBKKUbhDrCCTEzhCia1hooXHT8K4SuQ3dTcQKuzfKCxhfCEbenf9RrjW7B73cS5UrCwHJyYK",
  "key39": "2zh1dkYa6nrQp3n1FWoCkbthqtn6b1zmaCAYF2NXGp459C4DVB3Z1JsDL6sarjNqHkzjjvykrLX94oAE4ksxgn7W",
  "key40": "5VeeFfxGqA9WzaThPL6hiZKTKroC97a6byABNduHgaMAnYcm8eiou6mTn7t37Rtv5Ta1dQBzTjZup69keowPHetH",
  "key41": "4cAzZbDzEjpw7xjmm9cT17GT7qgQ9KW8ttViRE7jfcK8o6C5dLUfDRuzMpEpbW5X5xTgGwAj5jLMDk87e7YBcV4h"
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
