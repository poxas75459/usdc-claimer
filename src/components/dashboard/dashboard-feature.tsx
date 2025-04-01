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
    "2BFA78F6s7oNyPLZgxPG5gLdXoS4aiWvZvA7eenrFHefHHTm7Vp4j9ZW4h56TJNPicqqC8wix9VJyccqKsszZSHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Cy1FaWb6gkAE65fQEaaWJXU3QUkmjJLL4tsNVS5YRH6z6qcWJDGWdG6vpM8zbsbsAK4ijmwUZQoZeFVLPy2QqK",
  "key1": "2xvZWNuETZ3SNKstEBNx8X7VPdocx5nNaME9RjgneSCCV5vSnzGbmzJuRETvAsWeZRLoRwQVv3c15DCA3hnSAr2e",
  "key2": "2xBHA1MR86VX9pY6RYpLrF6fWjiVCATUz3CAq5V2gZ6jcRsoiJ8UvbRrDdWiUYXPhqMeiMbwLbGdPmZjn4hEGJJ1",
  "key3": "5VN54szyfcvK4zKiWDRbQXpwvaT56pG4b2hhhcebutBbazWxXAp3VEMqm1tyyDgnh4FSo7XuhYDXpLUHwU9JJ8mb",
  "key4": "2TwsMNyEJPYxa1u6xPHodsvenms3WzBhmMUkwmKGG14jRsvKrHLrGdBNKxDBephYDRoY2D7GFzwFGzCGXfEk8RuP",
  "key5": "2VteSdJdNcSL3ADLFZv9baLtmrXeATaudEKUTSzQoTZ43FgenMf9JjxVDY23oXYkdUecbR8BveymPTQ8Fz8Lc66Q",
  "key6": "3Uv8SRcQVbcYJvMuKr2oRDpL2wq3odhVgBNx3AsHnNS2MoqSB6yyGWn7AGTURFu2betKHcvYueQwCp7DkzEXcWFy",
  "key7": "4uGZvRGuzVPNrLevKqNRjoJK4ddpXBSSteu4iT51sfinnt5FWoHSUnWrt3TxEz57B4ZVp4vu6bv1Y6edvTPDcX6b",
  "key8": "2Cjym7LJ6a43Dr8fzLYKkT3y3c5FP8dNgvt5CAkVmNsxG9LBYsNyAwHesbqE51Ez7opX9bfuHve9m7gUfrp3xhLQ",
  "key9": "VGUC8MPoZamQXVEAoi6c8tE27ztjgR6BZfw4dwkXEBwf2HSxxW4kJKxLiMLfEiTF5rYbeiJaLGRjQV13LphnHWm",
  "key10": "2274PYnfBjV4D951qbwg2khnaPeb5kdJqmJpa6t2qR9SN7tahmQUTqX3ip4AD7GviuP7BEs2HWkYjrM9D62zpZVa",
  "key11": "4icLdjiVHydGrnjFBc2rKjV6Zjv3hBHHoAfhkNqMGAh66p56WXMEwPy2JbdxeaZcT37b7tLa9AvRfD2WwwCjF9EZ",
  "key12": "4MK5j68rTaAkyxETKcYprCZZVANhmyfUguQCaVfDs8yri7Kgis44oNJiAjzaFGuWTvMZR5Zhyfvc6NRxFJk44Kyz",
  "key13": "3egs1bWNdvmZ4p81K6pyLLWAmWWjhAdHGf254buJ9NVzpkSNFqFdipcdVBqN12gLxCo7zAj9mLgzCoDkE3sWrSDD",
  "key14": "4S7yNhshiTBBXZzGy5enx4pWR8YBqAk71usJTCB1i19zgsDxMUaLVY9YBHXQCiJGNn8xZTgh27CRjSahpjuiqzqR",
  "key15": "53noNsV7QJ6Bw9WtEtC4FRNUCekwASxgGLF1jJCHLzUzHK3iyT3FKNLbuQxsZt9B3ETrpNsEdX8LUrHfeaXCxWmD",
  "key16": "5JVqRHY2DUWMRXVEa7WvQqqNFaRHYTsTyTPoTyb8iU3JEmm8SbTqHfqS93pjC8ZEa1VFL57Yn4bN6wNttYMWqse9",
  "key17": "3ox3DBowPME85M4EAVMrpZJ1L9YTzcAJbWreUBh6NUr1qsSUBrZwJ57Q7ZuV8wrjNd4Prh4EKdTeAxv1e3tH7uU1",
  "key18": "2ouFrby1Uuqzp24mE8x4D67XNxox7JqDsndGwA9ZS8Bw6X8FXs3x4YDt7oEtcL983KGqsDNKtBJQwk7K5rmKZi79",
  "key19": "5iFvULVJaQg1Wi26pxNPDpmqjg6N8kEsfJYX338GmLi786NxKHqmDgSUU2bpevgEi2idCLfaUSdn2o8J6bDqgJ1Q",
  "key20": "5YaBpCBrzt3kENHapfhrkmKqht2FJm3CUUR8CFs5NGAzGLBCTkUWeboZYQc85H81rzk9jTjbL3x5KPxuZKxxSJ5G",
  "key21": "5BcpPY2K4iwM5chYrCmRqiN7nBN83JJdPaeMSyThk5qLoU7HjEW7fq73wmSJckQ3GLmhvQBLkXjKnQqvtQsM8pzF",
  "key22": "5dSGQJ54H7cEW7yc6S2EfHoAZ7pbWP4R7Ym7nPSDEpgPSHGGLonoVoXAqkhbaDbWaXnTTGGwdZwSyYUUu2MBEs3C",
  "key23": "5ySyC6W6wRY4pFyp1Q3Vg1gZpiuTJWS6STBbnBmnHNKv8VXByawwNue8mb9tVXPfKGAY3JGXDWUadSwPZrZK2bok",
  "key24": "WtW1x3VqTtmSqwp9qR4hWRpUUQhLw848cfEY9hx5nWRL1j4MPxEkYjzhGieo3eWyt1Wum61ieT362ZgJKwLYCBp",
  "key25": "3W4MReddowEqzp17v3x13VSa9VTsLE1wkmxRV4oSPG5oveAAJERyNVKaEKUUi1qo197Azm5iZDYWsKvZEaEMp4Bz",
  "key26": "4eEfhNy49i9PTaxq7GJwXjPR3sxW5t41KUZQmge3FY6Vi7gUyaAbArySrouZKTJRbX7Ht6F34ouF5e1f3U9f3Ycu",
  "key27": "5mWvNUXWXUeRrbZeX3bM7sMXLyr9WbJxCXyU6fAcyU4BGv7J8mGDB5Kec4iF2mFW555bFoXHViEsdQz3Ce48thyQ",
  "key28": "5UXW6k2qEtxCRhM2fcVBcJ6PQiZ1D9QYhsJF8tZ71dU6bq3xDVnjLjCoWY6kKBYMLYNwMWUE6vGbvmmxXwBj4g4K",
  "key29": "67HfmS2WqDdetx9iEP9CACjDGmLTaJRcVr5gaqMATyKLLXJrw448M6167KKKD5tY93bJmuYsAPaWYCX7hDxfnC84",
  "key30": "3mQUbGLF7sz2AnLRnqbbTbrSAxZ3oMoEUhmPEJKM5L64JEav4cwgQAjSDGsLTTdMrd7bEgpNEZbvcMGvsH7gugjX",
  "key31": "381x6nf5AJks59GzqLJ7rjU3NW2bzY5qPMJuxkQwMguLothumZiufwNXtLKVKjyh7Ccwe1tKGnfEXBhUS4Zh5xFL",
  "key32": "2zrwQ3UZ2N9qPJc8EJhQ9JUPgTPjzDBkxLVGdVsAwGMTzA7pQjyGYv58wwxJjVZNPyXpC3wcjA5G7M4HveiM8CAX",
  "key33": "2zQjRkZFBLRywox1d5DSuJSBJTUduoc9HQJpCthBT5hpJjwvKtu6BLhuqexYguWWY52qAQWAT48zP3pRZDBchTGQ",
  "key34": "4ZfZNC3DHiEh2A2KAiVpaYEXnyKMSTVpAaVJL8iPwK2K4zwvfQHtqHvwM2twXHKtHMTKkzGLpPkRSSjCRr4HEUp8",
  "key35": "MpFUQdJHqfZmQhjGLBfcxQQfZk8ZfeRjkPsckGfVd8wkRih1tDELoyZ3xmKH1LaqeQaU41x6BbmSbR4pyex4S3w",
  "key36": "66a4VJCjzm1qHoMMVDFnAfFnwaGsD4ih9cdqvGdhkyYLGNqASNn8HPUWpmvN3UTnfkKL5xQ9YisJpfiSnvkmeDEb",
  "key37": "4dkwsjDX4hfxfYh1yfvAdwunhzLT2ZN7xfpASe5mRaoXuFy4BMuhUdC1qpLvXQknD4hSEdHNFC9RWATNre9SrTU7",
  "key38": "1uknjGdJAbycWep8x5gNNPM2nYguoYvyL2CqRwhtwa2nZZUqjyzfVUEMQtUoEGoeNEuFhb7yKy2SUsnhHFegW9y",
  "key39": "2LD7iapPm7AuNuSv2diRWbuUp1fwqZ52mnzEhjTSXQ9o61NDwCco4fw4LiuM1dHHGqtd9Qt4XKHdUuNe42Q5p1wN",
  "key40": "gPHUMHZ88aLzPApWsiiXyWdXuyk7JGMEegHXbmhYXWtRTjPKszoVKEpJJbjg7SrQDEJJvsTjsNyWLkSmbvuFU9g",
  "key41": "3Wu153guHtYGLkAzBXM3KnxAm6yZV4PcYp5KzZWHwh96hPSrNLDeEjnshBTtZbaTXuKufZ1kWEi2gphUZw7tDUY3",
  "key42": "38E1jddFeN8R5rVRo6LGkxMc3Q56bZGL27EzrqPA4yz8BPXQvzHLeo4yj3v4Nhw7pegPwUuwhQtE5ngv9qQCRF7p",
  "key43": "2FeHLf7DntRXu5DE22dzWqA6kcSUAGAd5ptHDZcMrHPdeD1Fs4t8pGRwH1yRD2pwXHfXCneWQWYP9giYz6BMiq2X",
  "key44": "uUp3pPS9qmEBE24NeSqLDopCREKTaHJPxSvwp5d8CVh3fBJRN8gX6A8rpyNfBciH36w5rNQyMf4GuLYFLP1BbT3",
  "key45": "TnMBCmZXLRW5TJKkjCJDJLPtZv8Sof7Ad6vPv14E9geGMKxeh4hYXibjKe9Up38xuTaVtBXwjhXSe1NhsoReEWU",
  "key46": "5JrdXaxA8FAgFenrMhxg8iAnNBLEcALmMNvaCH3sZNNibYh2apMfErhnZcX8z8RZzmjuNmVN9hXFibzPdM3RmcxD",
  "key47": "5BhuCsBLfPd77v61nnPtY5voJuKUKtSuhAmpXFxuTHPKzwYKRsZtaAknvchdFyF61Erzhae1BNv2MsTEsp1wdeWG",
  "key48": "f7sdprEfS5TwWpkw9VXJx13md5aGcpAoXPfCt65cNG2nyFejSRamhEFRMdzwMyAV4ZwZyvY5dHob6bPtZtazmx7"
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
