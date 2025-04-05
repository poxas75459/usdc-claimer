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
    "j5Auvh8xoRvbib9f5gpZKSDGtfCgNtQGsNKfSWmcL5DqK5zm8THwGy3JxsiZZxc4xZRfsybvUcxg59ZJtYt5bmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAQLGuKNvRcMhGdWazpgNpvPVZWLgoVBZbvaPRUvDtmMaxTdJfyTQSXRD9zaGgAwayaN8EkyncLphMg9TiyCUag",
  "key1": "fgLeb9D1Dj6MkRX6XimRrXKrmz5GAk9FNQiZ3XeHXbdPnkG8d7PmahTkVPhFherWeNB3X1BrHd1jtQFmEbvg5DS",
  "key2": "HrxQTrb4W3oysaoxjwboKT1nngdWKE2Amtp2t8WZzYZHnVgWaDvnY4ezD9Wm8JoWo4UjYFyRw2DjwgDumFYSYKq",
  "key3": "2eh98AJ8e2BWCZLj47JT8ovV4enYoSpaoKZ694wxWvUPoA7V8YgSGT6ASqbnygW1sN6xDu9yPFXE1NL3N1FNKm2p",
  "key4": "3syQfyw1KBdPv9ECSbypsur2JzyhXoGm6ozxhzKiqHN4emTZTAyUpV4WDF1rWh9JBEkAUSMC33nMf5nTkuJ44XRF",
  "key5": "4ZGCTt6KoBqtnoo9mGSwz2Z2kqu1pZ6jkt4bunzexKUCvSnUm9V6BouVDDiTQziv23LMwKi4Ne6P5DCthgxqDh1L",
  "key6": "YiVbkbL6Dz3aZ4gyHuaHnH1N8dbqS9nxwEYjSBKUFBTWJ79ujv9P1cydw3jirw3Qq41mcbei6mjTS6RaAiA6pL4",
  "key7": "CygH196zJdpehbMJLSjwrLxM6Mw61Ft76qDwsKXNLqiwt9rq1JTnsSdtdWySGd4kHdQoHx7F4Ep8tEGZyqC6iQz",
  "key8": "59X9pfaWJqHoEBJwFeXsQeU2o26RcXQujY2rF7kkZMHhvGqxKfPz9cCoBdAwryk9DJERZZddPjES4m1vsKb4EZdk",
  "key9": "52kCkmZ53epEoxtf5HYY8HgsijFmXSWdURZWF9FCLPQ2GHjjjzoG9YmqLeEHombkyFn6GWiWiDdoVho6aHaHXocS",
  "key10": "2FBUK4k6cdZVMgTxzzz93xr6e67S8bwUxx4SyK8RBZbEBE3p6icYnEBWuwRvq4Y57zRciDkvNhqPrnPvy47oKBLm",
  "key11": "2K7HbqBGLkMGAF1syakiZrMT43RipSyBSGppoSnsG9A8K8iE8KneutPnpjD9AYSR2kejkBjhavKrY3VAgQ7Jra2D",
  "key12": "5RvEEXSHjrksqAzwMUvaoGy8qStfgUZ4XrU3fot9qzKjmb3KESRWHzcQeGZMq1UktBNUA4hs69xVjCp9LRFZfRAE",
  "key13": "4xKnBAVLB8fEifwSz8edymHHaHnCdn3Zm8eBDYb9sR7tsFQV9w347A6j24aYHG4d249gJzR5383J2HVQnYhdphnW",
  "key14": "4mv5YmHKpJmYXAF6ZoQLUVqvUWz55DFZ8VNNfDbnsFksZ4QAwEWmXmjCEUGJNbDjWpSsjFAX4fkJN32DNGiRMErr",
  "key15": "4BdH7JHEYTkzMV8Mv451b2yn4szUsW2vVE6rjaGscRHT5kPUUn9H1xcn95zubpWtVBZ6MUnY29ZR7gSCymBJJGZ4",
  "key16": "3fRAev22HaQDwCLM7re9sAbRPTHU1Evwu3FWmymffpGyfFW4QbZXfz9wpdUHFnccE2ndHHidbtjfurv4E7bB8626",
  "key17": "3C66iYoayGVxvKwM4XFE9DZ94q8Dbqa1gN7Aa9b1bWPPrxv1RRhn3DEcHPdXBFiwQWpszRiUjAPgfyd8iiqeBgwr",
  "key18": "7DyQgKgpAc7Bzg4E6DtkvJ1A6yhnMmVfSEu5N7mxwQGBijNvgVc6cRTbpJtFm4WPrHYAS74zwfQLHtik1ggX56f",
  "key19": "5CWCMug5vY1WvjcaiM3XADiJbC5DJRAqxmEAjQcwgjQqFjzAr7MrhDZCCgYinAonybVLacAjtHxfW6Nv6Y8fxyTZ",
  "key20": "9rj292fe3WA9Vbh64cWQ7kLVH9HanJWGJq3DZzN12uazpNtM2Wqn8Wd32sdA2zH5sZYRBQzby2GPbe2de6zg8aX",
  "key21": "nzibsa6TbBa4suBC9Q3t64vAjdDY2MZGYCTEMSLEJuXCfG7CjZXrwD7jYFGWTq43S3M6NW6nponZoA3zYDNPLwj",
  "key22": "4trUsKPKLGsRHGS2s7xzbe5qga4XBgxocpgaWWWhuuxraRH1YMwAM9fYRESZpMCGmRe3wY31yNa91myrF8rk4AYt",
  "key23": "5xvrDrTPqnBvkzs2B5m7jkbw1H7NmtK4uoeFcF2w9nVAZe4uztJRXiEeV81Yvv7R3eWDDrkSenSZmQx6AMBegWfR",
  "key24": "3BNxQDrVSx5uZFsiG7qU7j2jiTYatkut3jRn9RFf731s89G2MGRj8frWFF6FXH6NTHnEvnPNmao9Hy8FhMhc6iKV",
  "key25": "YA1QyEWa8q48R1WHpTCCyKmQyAS2c1ENXbq3pbCYhEtv44WUEv7qji3vDaxy7afxVEUbe2Vrdk3ryvwGhVoz3PU",
  "key26": "32SnHSAGrYecEiMjHn5ntgRUgabxtGGngWtVZYoz8xNiy9wUp65YarsqQVN9EDM1yuGrUcFNBmSf31PoCbGXxh1P",
  "key27": "5dWdzyr7qLJvj5gxrTd5f8KdmUMXPAnCM6KSGbxZq3kdL1sJ9XvpEUcm64rkRevj3ENZSRWqSKBFdmNHcWbGLN8X",
  "key28": "2SE8psLjuYrJFM6zHhEMSZMSDXiM2Ewow8HHYpZZ9Q5nVKQXzVGaA1QVTu9zjwAHppS4YLsqZnMkHjJDv2fNgpK8",
  "key29": "5YAKLogsfKjfH9fbjKX66A6dUHn4MK8CsPg5JkutbpS6eCbxHqj7gNeKAnFbZHhkGFL8qnsSeJzEayJnB9sKnxUy",
  "key30": "bwaQsvUaNcjMWisgpf5sHLGAivY94bDo1vWmpacUNKzCAwpbXfmRLmeZHczTG7NkLRpvUJdwUTxsceTsAWXM1jp",
  "key31": "29q29uxhoVYHLCQ7u5GJ9sksKT2cW8Vq19uLZXD1tvnZQGxruPhhH9hUNvRwAAKpzsW3njrVtG5mPy6i7uMDQrD9",
  "key32": "3FCubaqnXbXg42XRvhRL5YznUMoujdZH2tm5eVfK4sbZnTfJCUccHKWZTYzA5Yw3dkjXSS9fzkFdd8nkC5VmNCaN",
  "key33": "5YAKEyTwT5euGsttaGiME3GUeuJuUkgy3FTx27EUXywF4CmWwgJFbq1B6esZDB8uU1xTfDRsbzYmSxJu5SaPY4Qw",
  "key34": "55eYY9X3oj7YJdBDNww1Ex4eaQPm5JubbtLjHXs4kWG6MetUUsudChfYq5pHqxGxbuVNfuZ2sDQtgGkioUSwQEKX",
  "key35": "3bddqX52rvGF72KNsFv2VCnVf93pwGJqegZoFdnEtAvWGRnrGSrjjUmVdDepp3S7cfVKNS4ykxRC3CWs8TxN8DqD",
  "key36": "Wey6n6rnyBAj64KduV23mhmCj3Zw7nL5gsdsnn4m4vFpPLNnj3kLWeZsLwXyWxphquQfBdreeonMhPg2nre68Yr",
  "key37": "2aBmzN3yNj91io8jLSuC6GCvvN2ZXdhWJ9CLnyqJtBjGMhnNC477LDms2saHWtFhyDkLZUhByS6ekfLoF1jxPNbH",
  "key38": "2bKUpvQqBbE6MepD2DwWt6JAvQXtQptfQGbuXmmNWeDuVsSmQFQu3EizrYksZbbaRBBK2Uk5qf2yGnuhrgZVKDQH",
  "key39": "5bZ6ekaVBo39KrVRLRCn4ND62w6iqw76SQ7ULjbmZJo2dZoLLCJ19q8qo2g4FjVjXfut1ZRpoYXJzxz1BrXP7s8U",
  "key40": "rnkPi4ucshNtH7j12hEYRJLTxbSwQRerw2SpjuaXn1fqF48ALZQTY42BobdNky1ek12JQ9JU5S3fuv7UjwLentE",
  "key41": "2V9Mpms1bFPJe9aRhEvKcDgffioh3qw3wEc1aMWk2JiNK38SR78qNrdVfbDn25qoLKm1YgpsLZetPzDyZh5rFweQ",
  "key42": "2A24PnettZYeMyLdB9PZ25gyCScW9NNVi21K2psr2xzVQbRK5iS7dqMpUAqiPTvx4rqBjmW9qqfmpcZwFdcuGgMu",
  "key43": "2mmoBqv585f32TDpa6ETw92FRJmXjPKo7HDSU5kh7PFQ3b3nTLF5YCrDmPuX8NF7WiwVrBYJB3R1oQLLUDzP5LJc",
  "key44": "2shv4UNreNmVnjMfET4DifisyHh7QP57LnGMQ184TLmqMVw5o4FuwAbgTDXvv1oyQnR9u7AE7zFkpbf2R9o2gAFe",
  "key45": "29YKRiFTZ5xrHm99SSXTuEWSPMeEyeiMoRRp26m1kxi2zQi74VgF5AcxGLEKzqZz7DhZmvtjBrDPunqpcfFmhcbn",
  "key46": "ec1SZARfoVzjYCCqxb3vP3pbXTDURnBmDGjGFi7Xvfw4A5WW2fW13yHXEhMKYKnEgeRRkmzCfTKkneRAixu6X3z"
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
