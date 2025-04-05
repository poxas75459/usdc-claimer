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
    "3Jaqy9NJzuEsSdHcitkgetJLkNkr9RfJfZGs9d5qqxmrVAPEtkFNehipwhyr1r3ENRKruLT63qzd9BBEorCXfvF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMS19fFvfdqhMdWtUG63YmhDxLXXt7pDVXNwuGi7hRRm8N4SNfCCtEFjYeRXWTtrW7ZsESq24UaH6ieqfUmM174",
  "key1": "jmZ3h8MibW3V2xi5dCUoaW8XW3kha2vJUTjXUXowQJHRBaPy9Ft24AM6woFv8vp82XGmKhASoocKcLvLHAoTWtH",
  "key2": "5MiPjf5Z2zwTdfDAxcb78T7rUucHUdj6oyKwwgZmYDCpN8Vf5sAE5Ew9cG2fwMtRYunV8knb8nSKHM65YG5xx8oA",
  "key3": "583Mkp7HncUhUZEGfzb6hYGi7K97MV9QTKwzzW9mHQxTidGPHtNVp6gbkRK1endFDfiQgmFMHNW3LZkjZpViCxYT",
  "key4": "4wx1t6Rs8EDaDGLT1jYDJxfm43exTdSiKkQey4xTZdzRHwbNr2oCEkPCNMd5gDHo1qAZGonVXzoThJqZuEwvDVzw",
  "key5": "5juyPresiUNoQUHMh6tHW6dhJeKfQTa3vL7BqNqhQhPWtTC3z945oVctE5nR8fUhEVfyJpZxrNXYzHQk2qbbk3n6",
  "key6": "494hwXusBXj7yZCqXavrhvhozFqBSnDEPjPd77Pga6fzTd56zuSK9iFTc9fg6HibrvsMctSx2BU5Vdt61upryjri",
  "key7": "3b9b4fxFWZZfnTrfH99RwEDkqGj5FeDCu3fxT455ojyHhhic15dDEQtfYVKVPBtwh8SJxxjGFAhXCd5sde25gpLg",
  "key8": "5yzMnMD5ZwPdWXMQasUvW4rhHknP9WN8wkFT7huKDGCtcgqGwNGUfHoQVrohkULMX4mSwTR4pwN4wqVo29ap8dDB",
  "key9": "s9dv5bzmRL9wZsTAEQL9f42pmDU64ArMeSYHdCnMarbvEpHLtZyKuUneQT2zoy7E7D7kN58YbeG139zgTh3iNkM",
  "key10": "41BkY9pG9x4hPECvQd1LPFksrY9rZ1Khmr5fJu1suCc8Ybr5MXhJ9m9sHqUQeebaTeSSJbVJhYWhNphPP53n2tRn",
  "key11": "4EEvCv4oyXGEohYe35PcWb5nMCvm8GzXKdVcYskm1sJ3RXE4aAhTQZDuQb89YVpFeg7GFw6NeehSaFsSFiDDs1Hg",
  "key12": "37jnBVQsQyNtCaBvbJibNQcvFKhDeNpm8yULo6kakNeJCNXxZCehG66McgyVegV1wVB1iN9WHWbEbXLSFGkyGTK7",
  "key13": "3AkyP5rBefznHh6gThs3hVguq5iYqTaoYa6TABPzsWwcDCn3pJVNuPV9MPUa7VATzMQvmnY1iYtoYZchxQq9iYq1",
  "key14": "2SpEbh25hHQqeBBdLbT3zwubbcyytAvrByd3RprxNrpV2TEKsZgp3fC43S2tdK2PFBR4Y2yB7NwNEzk5MsAiEynT",
  "key15": "5zptbJmPRL2ZYhVeKy4Ky7fd2Zb8ZmKFef3YFisFeGaRHdQ1wfitp6yda4aMa1gR9GpqK6AYGsk9yo2V7vX5jbp7",
  "key16": "4AZjZwub9P7yLcH9hXjnXAsr2W4DpFr4ev7xij5Wzv7SC1YAhKbPePQ4oZaBzs2Ja2AzXYCa8ez81qLdMgcsWdeY",
  "key17": "3Ywer9hzEuEpdG1ydTkykhEW8TN9tXedDnunkeoWHEFEVwnC1qGuAtjzB2rkWLLapQpxEerCCHtcNH6VjPgMqMRJ",
  "key18": "46zC2PpBY4RficJXssMd6YZJppvWqvt1tP52xAPvUkD9pbXTRVywozxxPdef3BQSYR9efruQ1fw68gGNzU11A7Ny",
  "key19": "4CT5ihaRgsKaJK9eLzATMqojJcQJuSxvHGmVq7ZgrpPLc74cvP9WrfzTSZ7oozYvupNQewW41Zjoax9jNyz5JuzY",
  "key20": "H22MExf9sKgz4wnuf1Ew2uzb3n1vHekKLKJH1FBARbhZ49TBwgJJirB1KYBp2eiGKXx2LPAP2AQeiNqxpxM7gVA",
  "key21": "4wSWfrWphnqFuJ5qV6kHb9u3ukTuBx8hyx2i28XDaJJz3CuWvuVnfVdKbMZg8jrZtZ9i3sw4E7rjkJhhtBCqdRWQ",
  "key22": "3kuegZ8yvAZ49PowbF5JYMEkbsVWFC1zN5aMVFJCbwsNXPtDaBqXEQnqzcAX1Pet6EZkAY8hDxrEoUWCu38osoJH",
  "key23": "2YA8gAQ5Xopg8Z4QrgDjN4njSFXWNWq8TVgmneVXdrjx2Bnh4XcTCXEn2wf9iNXKTd7fEZmJK4NuP2V4zpsUM7MS",
  "key24": "252YjkWaDw8dpoThQesGS5V6Qzzw2LJYJQwyCo3t7rwcARi4a9kZy1cs4xiPVqiQ9Agr2xyiq8afj8vddrNnTPoe",
  "key25": "587QBVZQw2guvfWwV8reRNANgcG93wUPHS8eHuyTHX3zj7MkD69A4TtoGAyBQZpZeMBpwnwVfoCU7C6juG6Ei3qM",
  "key26": "4TrSKZ7YboiP5RShAafuubEdBWek2TEGsifPUtCnxfYpCwvnyy3BnjA9tKzNwMc6Tps4SeiSvmASNmxHpbrm5BGN",
  "key27": "GEZDaqqNUKYUXq7MBpwUinSnEX5STkoB81mCx2R2GXHC4RgnTqF6irJao9PZTXU2BKeTAYxE4RftgTzEAxMUYcU",
  "key28": "4ETLuhrf1CQAb2b9y8Fupmp2hmHo6rA3PA3Dx55151gMLFmn7Fn6eNsihjshkVoetXaNQr5j1GhHpSnZfNf3hwDa",
  "key29": "5MdJdr87Qi4twWcSvfsmzxgwFKypGvempx6Az71X2zNQMUJAWzwSsLw9PmVa6pQizQUK35XPuLbt2DgLKHv5e2vX",
  "key30": "4atQHrtTat6gDhSKuUjd6ce8BCY6kjpGj2kPdsNzRKvw6dH31AThRdocDFCNJBfzAQpW8KpWLDpJYsuCBJqTgB85",
  "key31": "5JRUnWKmVJTmaPuFcB3kqafgzJFURi3JfZN82bszsJbgcd63R1Rygyzv63e9j6xYzPM5FEur7SNSAqV1iNMqyqQW",
  "key32": "3oXNtJq4tW6pD4UzSgY9gLNuCMNmNgMtZTPfE1dkigsDgX1YeyQmqL3er1gfDsyo4zdACNStiWCDLX4c8vMBiiqk",
  "key33": "4pcH4o7JZ9tqbjf9jxhfoMWzoVoQoPjySYweEVHo86NUJ9iVZWos84yJjYhsThec5BhLPoDWE8vbdTA1EAATTiKD",
  "key34": "67FPSYLqTKdToMmcf9nHBnSi8vWeerYLmjkr6uidX8tPJSEmFwqbw1r4jWgAC6VBv88wQ7mQVMko4MYv8PzHpZoL",
  "key35": "2ZcntQ1xJvGguKdAZziCddFsh7uW35WvxtaNpV4H6TybGxAgEfRKogU4AdppFTiVJKehHy4gS9QpseKfnV3GEgVy",
  "key36": "3sekGfBDCoPuwkaKpnaqoBZAtVAu3WfaggPrSmXdVpyNw9K4WUJvT7WXjCgEwobnd6f92q8k254cgPJJUygJ6mxy",
  "key37": "2oh4hYmvoi3eDgzqcFZY7jbEqmBQGATqDBtMmgN9Kb2DQrygAQF3GCYtzkoVqwPTFRqCQxVnnDWWhKbkBrHFmC3d",
  "key38": "5oJp7vr7qp6BGbfCM6fLns8vGQbQud57Yw3toLWcpgVFrSrnAazMLjXW3V8kmr4PgW3yx7tQvYwxqEWquaFCBAjo"
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
