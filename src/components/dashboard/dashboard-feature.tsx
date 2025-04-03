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
    "5vjz3ew7ep1cc8CMGYtpYxHXt78GWLaP9PtdxG4GmvyK1Mi6E2HSc4kTgLNKLdwDhoKoPEyyqqw962HrCtDLkBMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQLKYqbCATnaMmY8Sr6DLWokh3BZLqVgVbT272re5egKtRFZhnHStwpCcV5GwHNtVDEcRNz76W8Y6MGJDjggKCW",
  "key1": "5QS12RrSddXEAYnMqQKhaBrsXMbApdVCh1cfZir1mBkhBpWqLaVX3EYKevXD9jrhaJCRRnCatTAobKAj8PTm5tPw",
  "key2": "2JaQCtyrx4HqiypZ8Ysj4yqnRS7WT79yroS9xMCq6M5yFLVvrBgBjEWRff3KvFpzJk6SFkMA5JBTFaHTpYdvDaS7",
  "key3": "5xyCnFpHVVJLfZsCK1ZNueEfyaSZTcr8AYqMGbDWrNTswfuPWUBVuKDsP8WRiRsL8xhvX4ocKwRhaah4hxGbTkQh",
  "key4": "3Ms6U8hzqFGcjq4a8vv2hUQsoh9tZmJGjiZf2nmxxFVcaCZdbMPYwF7Ja922p1GiDoyZ5hKfDoUX9Vq61XDnmxX8",
  "key5": "25vKV4vrEgwxkga1hSUrmv6cBcRdJFdob47zJNwotRTeZ69gYEbjAPxMDw8BjuGrgzqtQcPwmFrqrwUA765Pin7Q",
  "key6": "4NoZrFHGuZjP2WoVuy5SEMb7VTkmSQ4wmBzqVaa5jqE97HtVv7bs9KyKmWCaxN6PixXw8hbotafzYAvLFbVAJ4q",
  "key7": "63xJfWnU3MyLjnNNVqR5zRwTxzNraSbov6S1mF8L1TddCQ7P2hJVQSYgjubL6TSwCTtN4U2Ukc5iyiJ4zpvRGitv",
  "key8": "5y171EVGTvxPUGVyyut5PYUqgWYJcfKH12t3e48AfW7UiBekQgvNCwnMTwoCDYVrjP1UJJYmJpCSrVT7jXsGufCR",
  "key9": "hsAuy4WdY5GzvnHhSsFkXbCWy5Xi6uax1fNJGBkWSwxSvDyZ5HirEBftiv72vBYoZzJdUaZuHZnLtaXbNNGJSd5",
  "key10": "3KtXVBQhZhM7b4j2EhzPQcaKhh2vHtfe5WXDRBHdNV3gsxrK9SwZ3nx27ecR421JDgDRM9d2etPfNfgCeWBvqDQ4",
  "key11": "4o3CZ1PaGvuF55o6FGDvTGWRJo7C88ACBgy62EUw6kHsbZyqVNav6CvDTRh3CJB19H4n83YsuzgGVvhvg5nEjDuV",
  "key12": "395DGCwnffzHK3kqJhxy5GHxxbfSxm2M5kaKdCNzWF1N3TXHjdqvvy8H1w2ogQxf6tDMf37DUv6nATFXyf85mxkE",
  "key13": "5kjZRfS7Rc9QWhGkiDgdZXEXxLFEu54EpjE6V7hDn6FM1avVUkFu42ud15h8bdUnYB22k3nMipUduQiBg9suVEc",
  "key14": "3oGyd69xyJ8KnDpw9UdJvgYA5dV2qKxoBCW6HwirxsLKrBBakDUuVHP1aa5AELyxyK6T5X5udovgsJBCZ6VxzAzd",
  "key15": "aer2KFavg9wVjpKX5tJ4SgstAp5z8aw5p9bLT1cg5PziyLA8gFsyXz4mbeyikvfJHRfer1nf7CSpH7CqQHe7tzG",
  "key16": "2WB2mhx5fVm255k6BoUuRykvAtY1RHtNtie7cZM7aqmrnY7RndHSwDMUMTiZ4P3v2GGaPimTtAx3A8kofDAxSNfg",
  "key17": "53gYBNBDvNWsYHrEYRyujtifZJywoERBYecBXgbgyuHsAppT5MFaXmwgYbJZw7tFJNkB24wNE8Uaxp5NkQoWtVH1",
  "key18": "5V7mzzDKHNyeBSYYqQpUTMq3bQyfeJkuvKFuTEKFbTYRURY1vyXb4Pi3iNv3kDHsg8m7XW17pcpRynXBiDPParj",
  "key19": "gFv5nnoKqdec6cm1Q4hzAWvXEfU2vsVs9LD2fgWQ5fJNvAD15GW38RM3j954Gmc3whBEr2v3Bf8kJvShe3gL8kw",
  "key20": "3XnEnNH8rjw4fsybdqA6VX2yp8Yy6buNrabUCn4cYpWKQxHi1LEZXsVUypziULUQ2qpcLrjaQRKgq1LiBnTnAoVh",
  "key21": "2BkP1gFX2aKL5vstq1Y5a46Av6KoGeCY2FfASJoR3BXpEHJzaNWc6ejZGVMpZ8HV5hk1XvgfjHRPQaUrM8mtVnQw",
  "key22": "4PYi3LiueuzAPcZuZwbtmE4iEuxsPEZmvSqVTbuTgo9SNK4wHhxD7NRKUk9h1Aq8sU3cgDD5L6eZXdKgUYYcin5b",
  "key23": "bbiyaxYhBncxZBKSy3zqKthqrcrC6vadU2f1c4S39qSbmBa7wVw4QFcgsM3UNsqLUEf5YB5vqM1L29QfK9HYChV",
  "key24": "3hd4gwhzQu4dQ5ZfUkPqisVVSPNVFenTkexVXfAxXxYbu6rGhQjThP2QDGMLhXVTHKyLkGu4DgerEvAZ1P7RrGES",
  "key25": "3aWNQEhjH3RQEZPvCFHpWno3vZSexVwXkgd2qrmxUK1LdwWNwdfZfMrhjxDJmNKMQv8wnXHe3938cmhT7wvt6bD5",
  "key26": "2ytvLrLCCZyy3dfL46Z6thmBXhkehXhxEAdy1cBRXSwj5jb9vXBXcM8PndysSHwxSBKTdPNBoHrdWu8Dmvs1tK7A",
  "key27": "vLqMPHwKeyy2XnT5hBcs72J4ummpQL1WEjvCfrGGCELsqLqbJt1dvYZychSgNDtyR4WLCJwomRsGds1utPKWw8g",
  "key28": "51dB6Z13yDmkMSEvnAc86Vk1qHU3mqiFFW92MKiMTv8RLHdKYuidgZmWrg4TCGgWR9XMieG6Uwn9BS4wWjG34EJk",
  "key29": "3EpBrTvz7JsPw899a6HFMUwKzsEsvV6aAyB18tRRXmEfACmWFGqnKMUZTjdaF8domCLKFcCdebDePy2soasNxWqx"
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
