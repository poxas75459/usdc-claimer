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
    "rXsCPkxn1hVVwtSJjNd3MDgvGTpVy83t6sjzNptJeaKHo7mUMVC4ea4bSBF9yY6MPFrahubJtQYovXcuzs3VXMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242thUkg71c9DYtKMoK1XH4rvvPgz6JfcwUZkWFHZKhaDB2oYWFpjWeZZNgbEUzUt8fTmcAQWZWtYgnU7NoPCHsg",
  "key1": "2qH8gzyey1DQuTwj4hu33SEkHbktTGVtADfrBWwFgx3B3WLSywT4dUtHxw9MkKDaeEeMGpYJ7VMoaaDyNPVxN3Vh",
  "key2": "3am7Cbz7hUmSaECrwTHSBX7crLqdgswHJVvYW2jC4U5XvstfvMiRVsaJovNfXeiukpuAysfi8LG6weBrf62yfT7a",
  "key3": "4ES5skBWzYRjfDdkzJ3PPwYcHD8CFawJjMM9C2fwuvM61z9hkzg4HPirgRzDG5hbmqBwmu57JzeBXpeHqHxbaGSi",
  "key4": "3roAFCkHqoFZbLZfThJQYapAyM9QYuT1WWByvTRhpfhLD6etbBnWoUKKcrS2MWbybq3xoE8Q7RNAMMBhKU3wwWcn",
  "key5": "h6f4gwfn3nVGLT7Eksntp1Q2MpwT7rrsK9Fr1DusURMgwpUJH4Fxb5SfSeBHG94DxfgEv24E9B4hBQw7xSinVMc",
  "key6": "5yxuyoPVHqqjGLbfTR65BpJ5SL6WbMSJsYVp8g5EL4QaproFvRd6gULK5nfiMVMxgWwo27PP6zQjMPtm4NaLGvvx",
  "key7": "5HiVsmxSHZCfmyR8kJCKBU94EVsoVFEoW659MooaevSJ1QNi4bzNZGHEYP8tKXegeacAuzMnDwWphHvG1hGadYzp",
  "key8": "4NucorYv1SsC8Qu8WHDjFxJnCXu3uqYuT4625UzC89uw4cQhRNpTHYje9SXZxrtbvAWqQn8JJGWfzdTF6qdfXAkh",
  "key9": "4YJ6qLCQpBptHyeCDH6Ypc8QMrxF2fmZhCKa5v2ry4Biaxbmxx24bMr4Hcvs9REhvvftERVcWYSbdMTpSBPG6mdU",
  "key10": "48eTZqP9PddtbUiCZCW6hUKgMgFF46akwLVRQtmwAEWxET76Yrgn2VE8dAxQm3Z7QrKzNnCJQzifFdYjr5K3yoVg",
  "key11": "4iUUF5VaxiXPNd8viGBiyEneQhMBDPKYCGshZLdFaH5P3naYdkaHPt5LDAnYfuSL3MWmNokQcPJKjqNmZh76vqYj",
  "key12": "5cBny4e6MwrJjJSvsPYXvTEDetzagiVpYw6sJshwCcbaZuPKYdvA5BZk4KZeX3HvwdskoB7JcEgwsrnhZeKKkmP1",
  "key13": "4Si17gsKzyCBgQ29fVnQHF1mXkxSsTjvtz8yNz3rB25NYhEZDLHsm9ZDZHhFgTViHTxqgBZUnHYgXxMZ4zFBq5JV",
  "key14": "3NnwJ2vzpjVD5EkRb46R4i3NtcpkgBPQgSzPAX6LBY82NoZrqpUVhQhJLegBu2zZESYMe52t36svXTF6GhrXthXX",
  "key15": "4AToAXv54Cp7rNMjDFgmsonkas6D5NgjYJ8fkXqhsz3iXTwZeSkGNxCfagSQzWG7USHnWpu48wjM1zwLxiBgKMUy",
  "key16": "2hL2ycXWeyrEu55Re3oUL5LLE8pmbdN9YdEQFEHWdr9ZqpshY4NdqmKX97aJj1Q8CzrfjED7dcJd8GrBb6kyQXjV",
  "key17": "CBorQnCwHj91kq9n8QoSzMyEJA9PKTbZp4NYWVtLkC91yEKRgVT2t4pKu8uBnV2xj7bx7vAiPkw5iuMJJvKceHZ",
  "key18": "3kwa7Ue8nRsS3F2nQx9XwRQFXpGBmB8TqrVoXv1PLhuqdqKF8f62RgsYkEQRMHQbMTMDuuZsLjjzwcTHvUrHEN3W",
  "key19": "34kS6u2PjcFShgj9xuJ8tWiCAzTWfFuxnYQDEXbAXd9SGwsBMudcoEUmojkcKwAPAjSsn5qc87hw6jgT2spmd11S",
  "key20": "MCSdasfwdpPNirvR9amwhYcwzXxfyogjJ6rHJahdny6JiFHTieoycVbUuWfh9nTrsh6qQEReCnNimpFH67JhUea",
  "key21": "2C9NfJ2mA5eCBysVMBGF7P6SSK5BPG7QjB6qBxraHsn4CKPquh2UUBMnHu5ZBu1jmMiJKPZkSEecbxrRhkYdQ5kM",
  "key22": "3LvWSeM5maXdzdoRoKyedb8Q5cQMWBirRoKbYQ61iG7N5XJbEg79cdhTbGya6L8pNS2FN4vRXBS3wWbiq2xoz2C6",
  "key23": "81bTeDLHbMBSgRppXFdGrYw1gHAwmwmKiuacN57TptUhpha62u6XXJHWPdw9cxfjqW5kfdLT1REXpec9WfqZugX",
  "key24": "5an5UKAdap2jYR4f8BBBanE2rLtTR6e6HLE4dQyuaMC9sG82e3eBLknncYvPc3yLJMGeCduA21XXSZYT8Lqo81Lh",
  "key25": "fnZEs51StNryhL4f4kUzCUhtfZSxB4jXP9XSwNPEu9Wm6JQEbJsGYo6apjVYPA1zAy398QbvVqpDeC1cvM5Lkpv",
  "key26": "4SbYSbDCRSVT5HQMk4PqiSo2RgeNaqk9xvtkvQ5dgHpZEKZqPJ5is1miUFfev5xmvYYoE9zUpXFoEBR4tmpHXSez",
  "key27": "i3NkVSM6LKZhxH6ccHWr3SyqEmZFSFpKWiGQZ8m8NegoSgKxbbrY6Pj1J6komFvjeEw3i4scVMrJP8WnDdv6Dwm",
  "key28": "Xi6ENQKjJHuy5QQkHYLaXCUpgqJdkLk2v5Bf2Y6TQHBad9LaTPyefvCJQss66H8ZdGMcUDoGCSYwd54sswKGgWo",
  "key29": "5MjU3uLcbfriD7hBUfFViGY8RJeMwYDAQqb7iDbCH4PPaW5evduK6h1NiCP6BsCaZjCkcPAaKjENLUBGJCn7VthB",
  "key30": "2BotpoqKRQcR61xmzrtV182T64rK7ZuR4avVTFPKmKw1a29eadVFXiZZ4gDdDxpNPMUm28FoVAmmxrPywS3PAaNy",
  "key31": "2Kb9dCGvtrhUKy27X2Vi54Nk3ihcwupJb4JPLxekdHXxvgnkQKZaxw8j5qqRndANMGryETYbHiq4dT9zRU686ryp",
  "key32": "53CTSXf4vDc8iCe6SDidLoQTmf3NqfhWUNaL7aHatEv9P2pBu4XAwoboz8A5qpwY4aNtYubN2uEmjaihiFuiXSiG",
  "key33": "4FLg6mMpyRiKKx7JpS3CHbZeiEbvneLWujuB8f17WZmr4QvJcv9YH7ZYD3nhH8HSeoN5mhFmobb94XTJSu9jb83b",
  "key34": "4GoedQEoDiTGZafn8C1JaJdj4bmn6hNKbByHeMJNC2hXWPqPzA8WDrx6Rmo2FjQKUwhcvJCHSv9wuibDfJCYYuAp",
  "key35": "4LNdaa4bZCgpb7dHv7fESjMBtrSXAwBkUpPfAd4F5Vk63hSKHNiEe1kZBJS6G56yBxnueXoXSZ5iVcF3WZCduUSa"
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
