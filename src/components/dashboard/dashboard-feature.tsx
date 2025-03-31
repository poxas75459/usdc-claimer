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
    "3D76AtEnLWMeEWricm7HVdDFN8GjmaTMkLkxhJF7JQH6v9DUrqfFZxKBACa2z18NR9utCet3HUnqR3dgesB1z4wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EyniqqBBtS6guaUPLrCdAEXTovUhqJQAxLjgH1JdNdBtntKzSm2Eni3e3aCsZyXDHXnh5ZB664JwAVsVqoybmZD",
  "key1": "Zvh9ZKcVJNAU8tSpmZRGVXb3M8JQr7wWqAXwyxefYGzT7YdSMVCCDG3V2sFG2GhZbaqjNkAbk9cnq3gBwDmcUKG",
  "key2": "wesdcF1ZoMqEBs4s5JWhr6LVXvMdxLRespNgX42mDUJbJjBCvKEmjcXFXtfiMsWMrPryiFqY8edjRRusa91opQV",
  "key3": "5hGKc5LgmbiiimJXJQtEf2mFotF2mssRu7zoAbfncw2XQvB1hVe8c5pVZ6EPHdUwRVYfu8cjNLeq9shfpcMQP5MH",
  "key4": "3APTtRaGn6NqkQD6eMpXGECjLz5RK5Nup7kiKgd2qLtpTWGMUXYt6TjNtigbf7i14S3phNcjKYJSnY5nQFF9ETfM",
  "key5": "3f6gvb15bfzBi1CLBsZR1WjcXEyvYJBRZrWoj5qBsgVNrUSJfahSfZ2JndgKuf14BEQQPc1axuXspgo4AGw2iWJE",
  "key6": "5uT9hBNUtJZ5DH1nVK2Jbwv7HattUjt9VbVaS2MSsGkQuLtnbaJqA6dgo9v8jom3fVMrouArYzxBYQT9wUajFFwN",
  "key7": "2nDTcmGoetrDjhkpRMwTLQ4KXDA6JsPxPveFstyxn5rWyYZXrrs9addiGqh3bRKxyJk4CvBW8GHu8VqQY31radiq",
  "key8": "3tNzC32wy18wZeVaCGSJR5x4gCRdwMZzYft4LUbEk7umpNDe1XnF5vbanEhVEgXZBoz2QzxRUtCNZEzvS6VWaMcm",
  "key9": "487M3LNzZhjP5TDDKWx6YXB2RDd8wMxNTfmacfC3RKMWsk91WjkmHnVfBELuTYNUEPgXWD2Den5YoiaSkcAbRnU5",
  "key10": "tvg8Cye5tMypUtZNBGybBau2uiHht3SD3udaCpUBxvjNdvaSmHG9JreDHHqvoEJqQKY6raYh3QxTMhVrTMeQAAs",
  "key11": "41E7617hxujCvCerS4gjNeE1XUnmXNvhH6xnMTpsbbrN4TLsFd4A4iLtMPjqsEwy2WN58CAoqMbBSdY6YDEGYrhc",
  "key12": "3Jj1NdU1MjY3AZkMEW42qiSTX91ZD4rW4kiM78QPakQtmzpejinfUi8durfWSXV3BMwuENkkL3LDmYn67Lf1uKZU",
  "key13": "3NdNamMuHi8rfHTKwxQr5yXMZzavYdbxEhVrXnPUFttZaBR8KuHr8UjPXpiHV3soCDXDB2bnxK7YjUDnMQLHpshs",
  "key14": "EVcmC1G6aTBB4To4BYGCy3gdoDw6yXVTj8zWbcx9xn8Wb8mUYGjvwQGGaKBY4jZ1YxR8y4VB7FwPNbFjPQfYhMz",
  "key15": "hf1489Eweuv5sfkv1dZH9ohPWpFyNTUfV8ADFySKin7jDJ1kmH3MNda9jNAAkcbmgcVPRR5CZHvsC3Qf1sNGvor",
  "key16": "qCNhPVnRhc9oBhFryayrXCDjzVPgqC1bjtF8FRE3kGc2yemmZ6cdwrYgq4vSc18oraNs3Pz6YYohovEaBEunEGf",
  "key17": "5ctQ4R6Pvd4WM5v2nQtoMitptuSjrzABw4HGhWhp6MkEHE94wVdfWH5BZJnWjRzcqHfyTauFS79gPToDz6vKLzx1",
  "key18": "4Ngx3dfTYjRQjpEdhLEXFoCRpxfPhC3dBGwXBaJ9oY6aLxDvTR7JreE3KEnxUWyrcS7QuLtdV7kXEuYMVGVzMPbn",
  "key19": "jxq4wH9k3YxqzUhiBxM8vaD6vxJXfEb59y21uXcUvFNtSesqnPaoxMmy8Z6qcbPENrcA3Qn6tNmhtCYpi6RV5ZC",
  "key20": "cc97aPHUbjCaAtCxCz4eT3tLGWgFT6TAyreb6iAo5u6qWwTByWgyUteVXChWHmfFn4FEbF1Sr6JsyXjPcccGKVX",
  "key21": "5cf5dBXnNkUwszcDEFmiknP2SGr37ZacwSVdCiB8P9mJ8oi3FN5P6dBmguREzGSSx6SckTjYmkbPFCRSV1xTmVLq",
  "key22": "NStApB2EgkAWzTEFWHYJdeDYi6f8gPqTuVuF3TLx2m1mT82rvdPvwcgyqSdsgB9r6xuY6q6PamyiRV3PDfuAPxT",
  "key23": "3QaFjjN2dgzEyo1y2K21V5Ja4U2DPkdfd121MGhYeWMcyPpfmDmqDF5fFSv5zq1i2oFNeewgpBqdVGCG8yu3whKe",
  "key24": "33dJj2wqz1iuPb6xP5hxhLXcf5zWyMJ7WBSzsQHnCcwibBA1bFjN2tYVsbZsJHT8gBnz8um2g7VBHnYMuYrXCBk8",
  "key25": "3t8xqFfuGxbNp8bZE7zVCdb5ssVJ9bw2g4szhg3bQuUzdeHemy92zzuKTgs7cPei5MA21faNuVajCugNN8uJaUC9",
  "key26": "WCHB9jPD2J9Bzxdr47fvV3yVrfG7yKLuKfhxFCVXFC7aDJFx8wwUsCqd5BYFRYZaTFpcGq2Bct8NJrynfpSRd54",
  "key27": "4dd15PBpVQFDsgUGQy998jP7AwFnzXfGJkbLJxDt8qDmiZg8FYnFgd3fwFKe4g54CDoLcG8TSD5NhBA4ooPVgWLL",
  "key28": "5TnAGSYqpgdTbQH6gFELTBZnuHzEAnfcvATLR9o7vQZLogbXMwE6k3u9p6f7uFWDZQ3N8oaAS9QzUBfSMiEvvGjG",
  "key29": "3gJUjBR8CzVZ89Y4nAhN2YNqgTuGz2T7cGbQn6jPURupfBVGX1zq7GoTAGsgFHcoyuekWa9szJcMmbT5wXV1Wye4",
  "key30": "2vy3oNjXoPC7Kevv72kQEnKqW29ZTfbpdkz3ZYHMdeBn6hfw8w9N121xE8dKRQYw9iDMGYLfhTv9RejM5AuRSwqt",
  "key31": "4LxzAyEU4tFwfvq3hwUm7gaF7FWZZRU8moEJ2gYknFk8752dtecTnAm22wor5YqfAsVYL9Dko3RocP6w9ExkwHz2",
  "key32": "PnugheRxPxaqTHTqvV1r8yoh9zUCYFwqnLNL8aUANYMTMyML2C2xfXvwb2jWoa4KYGhuSc9Cy84pTu1jhBwoR4G",
  "key33": "3owNgiQEozEW6WBijnHrAN3DimX4Cs4KcT3sg5WdufaofGYhQsf9SunQjz6KkB89JRQpJajVaVzjjkcLmHoUUJKP",
  "key34": "4FyUyD99PCVNK2Nyqc4vuU3HyB7m48jQdwHBiZHmmxLAnpVRSwmNwSpxbCrASYoEtiToCAQw1wHaumtHMGbGm8a",
  "key35": "3H77vEVTmhcu2Rq9fdWaU5PzT8cZLcuwzX2Mu9MvKgkGJ7JGA6JypsQW2bgaQnZo43Hp8xqvsHNaSvZywdjPbKeL",
  "key36": "B5KW9VVfC5SfTkqKN3Ff5aW4CMEWjiEqGvJN8XWVAuRZJBtoHsVTZPc2DjcWpwcmZCUYQK4keRkLR7jeEmR1NqW"
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
