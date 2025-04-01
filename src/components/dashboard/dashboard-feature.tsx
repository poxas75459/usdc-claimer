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
    "LkwPSwvksdocbo4a3Ai52zJqBL2txsbAL96AxxGqzfjRnmzCKxTTsXKofrXcuVzyKqNpz3ecFW63xM3iMqzDZet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLHoPsgMUrt7HSKJk4w5JqaRwJfUnYbMmterTWCgfeiUHA5YBjQEA1MWqx2YYnf87dA5Dy84tyS2hAmZE2DNoYT",
  "key1": "2pVE6aZXyAyFTfLF6wL8iukMJWGeYa3fV4NGc5pmEshdm93NshGnpurzjw5Ux4vC6e2yz8goVo29dxtU1qWcHeaK",
  "key2": "3T1jiv3RNwvxVcxgnjCxuwdHZe9vr4Av3ckMSRb4GRXPr6L8DNVb4yZTM5nWYnF8i5MZ3PDCTHqstULcXP2vpoez",
  "key3": "C5e3kgcGAkP7azCJJATzLQVdQxQRy3GMY9SnLVfkeifHy4PaJ18ruinfuBUJA5Cwb7qWUnCZVvg4atLsaEGH6KS",
  "key4": "2DM24h6MBQ4KkQ9rSKTAGPWdUPL5w4x5GMuhvHk6XizvzRpuZc1sr4TYqdx48dYx6wWCxDogeu5nBb1LmYXpMty2",
  "key5": "3Miu6AsfWHtwnnRGRnqFTxzYiCxZUheLKZUjot1TPuu2HZg3mTLKuYXoQ1TsugyvQDzpGn5hFUKfKZyRk8sbLQ5o",
  "key6": "2CXUm4H2XdHXGMyZMimJZpPBnNGUGGqE2KB2KSzsFxYQ8Sc71EXVbcY73pUTu5yYRdYbQ83H2JAfTghH54JfUvv7",
  "key7": "3kYcsz3DV6vDA6L6KzT8UczHDasDApsnPL5AaKNowBnUopQoUquwLssmyWDr5d7Kx6RC6NfYRJPokzMZ5Xan3grp",
  "key8": "ahnyF6DPGjDa7Wdz4CktaNByUkaxWSUD4mWfSwaYh1pn2rozwMxk38Zk5W5RmvSJPSEX329QrQEMLpbZ5XXdEsM",
  "key9": "3f28V2LikA5XrhgnytJrvvfa5qK1xa9SHRnWCBCPUU2TR4585RydSGFhZCxG6UPjY3TNydHRdMhkx7XKfZNGVr2t",
  "key10": "5cj7iTPnHhw9aXXHn6jVeieQe7LzrRUM71nkiWLgWRaczxq5SiK7b7ygY8BE99b44fpQHEQ7GcFZy9bXb1YfSnRi",
  "key11": "3S4X7ntJwxE7Az6V9rTZSH5cPb2NfPqHEPuceD3GctZovjmrqfB6arQ1ywivCjkdYh9wz7vJatjUhUzoHu1jHNwx",
  "key12": "5jtDZvK5vkB2aXje3CxiGeuoAePrponwG66RtEFZcGpAgogKLGbJhgQ9Jf7wW4Ze6SbvUAyaK9TY8SYRAwuGqsJL",
  "key13": "N35vRhB66iRfikeimbNSkcVQuHdjSWdVzBa5UxCYGiEiJN6KrPczkkiqPAXVEXm76Tp1GK4MwhEHaCm1ynjukwR",
  "key14": "2CZMnber2Xt9ABAcVeabmzkGrTopJ2ZhZtJfPmAo9us4moKU5EEr78R2t1R3itP1qn3gh6bmxJRCSziVsd7QCadL",
  "key15": "RbxLLFkUDB7DQnHYYLxWBFZ78pGRNLQLhKcGR5SMD2cGkmxpAjLhMFPfbNwkXDQV4mQ8VBa6WRgdbyudeuaMuwY",
  "key16": "1sAbCDaczkwNZtzNTZdVCLWpsH1PxDpspX8tGkXJCGrKZocCodSQwmkGGmdQ2ZPAo6aVYV9zoCgTyapBpzxyb9Y",
  "key17": "27o1TJgrpFKzJp6hm6vGDUUfXd9mCTFxYdiPZWXR8W3JEbftE262nsXamTLnVFzUW7vojQ6V6gmwNr2Bq6jzgHdJ",
  "key18": "3a9YNPe2rvwpcFJu1h95XsZEL5SmigEvQLWrgLbnpEcZjiD36RqiQPa1JhVypDiqSn1PUhsx2HfayvbJev59Um6E",
  "key19": "56Be4LibF8rpsPHQsktt5CEB3qhmD6Wa8uDTdyUjZtEkgquore83PMGQiWMSJZUqgLFVUozhdccsvpYsfNH7miZD",
  "key20": "2bxEmkz54zmF6mXkxfantxiWmttur2cZk9DdgJX5Lpk1r1gZ18CQrtQqWom5zZ2ctDDqfNGp6qTRda63ceWxNos5",
  "key21": "5nJXKLZKsgBNPU9FnF2VbBiKgJ4DfzNQuybxwxwVmYd12yMbpgA3v534Ws4vRHXucW1nC4mrMnyMBWdJi5UdQVEX",
  "key22": "4E8Na3sKzBScgX1i9ftSECpTTBNGUVcGkUbCy5Wb9ZCu94pH3niHCQk2q6BZR9MKJvMYKsWg8jG1nyeyBKoTrjrr",
  "key23": "5x5dYnhzqetdPymYq6z4WH7KEb8DRj9aMPWNfFRHCesv5DMTYuUtGWPCcEMY7tFTdmNs96buGY3xRaYQRzX4afXt",
  "key24": "4L7rQEr4U8MzC8CEdFR46fhHk2QmGjgGxdJwtF26t5K8T5J43wnKCVXLrVFRcfQWGQrWz9RHgwYsxakhKqALQ1b9",
  "key25": "5dmSb6FhFBa3eECpSutUFhoL2rJsNv4ihRc3SJwWxxCmJD5mcMgzGMhDppf35MyjLeyF7N5NkH7uqa5niKe6rQBL",
  "key26": "3aoJ6GmchxCphYii2gKuCa9cL6KUPWJwJ2MURZAXiNpdYYJSDEidQSToVgQ37naznWCAh6XZoKwTZbgiZ6HssW68",
  "key27": "4EytJigFBSd7pTRdeGkAHSVqtN6uEc8ifsfGL22vCCM9KqvsPaHTu16BAVmBXVVWmMzZY56LSJsBNsRkkUxABeeo",
  "key28": "3U9w9WSb513RJ75ApUV78jdZAbYiiMGgxJQc385w9i72QtBNTjxKDR6JEnv7DAs3Ykgq5XciMjjv5RAiGjN1uenT",
  "key29": "YRCESKmdDoKf5vBRZxxJjyGLDmcbpAQeoFHzPjEnSsnxYaa6fXnuB1nMDvQ7v8tRqLYhnuCtdJpNQ8esUBWmeqW",
  "key30": "4kEtb1X1QgK6rq7bWCmw3rVe2Me8J5R56WHHVvw8suA2eQoEDUE7CUUy6szoad3SgYRBQAsj5VvtpbM2jMfcZWe6",
  "key31": "2mdoGZTVmLHBRg11W14HfKRZjGvRLZk7P1T8qFUjSgBPfTRCngtQoUo9Jmzpo8iCj4bsHeeD71bwKcdoycNMXC8o",
  "key32": "4XEg6mbAmtveYJhzJ1nyb9bjWsV8h5SFMABgqAaeXbCtaaoSxPmh36XxqNFJ6QVm32EcMW8EXsFsgvxquWsYw16R",
  "key33": "3CCcCSRfpmvJ5ff9z4K12aVgRHsMDbZgqv8onaxxcLgei28KqCjHQL5EjBCGtpaUbeSXCEvVXN8cRBBURRMDaW18",
  "key34": "4vyBKmFbnV8Hq22F7884wDK9oCZxE72YQFi54vWXyonAweGKqhEUSyF7AYFttbxrhcEiGxkaFNHiwvZggTnEvoA7",
  "key35": "31MzMAXiFyDqa8YVKHDVnP8eGtVA3Q6iUyM98txbiU8rSCP4aabLhRDyyVZPXU5nsaeuPQ354U1D6px5f5hVUSH8",
  "key36": "2TP33GFkUTGnixzXR9XkxqUyTURmt6CKo6oTJggut8QMFdo1jkCQTLwQJubxVTRq3gtJ9BXzxwxc7HTUPwFBxpDt",
  "key37": "4bSzpnGvpR4JMAn6KVskUJHWyBUrnswMV4MLmzzNFQfvSB4NZNDZaBbKSnKLQKZSH58ckJgnfZykYgEkS8Sbncsd",
  "key38": "4jWFAVE5KHeE8vuVe8stbbwLJQFVwFx15JJGfNnbQLj2BR4SJLNbiCY47ZpMKfb4jtUBHj4BWyaXhVS9LsuL8Cnc",
  "key39": "n6zZKGRbbChMYVqqkVRR7Qum5hPsAPNsA39HqitbCUNHu8UX4R4s8mEDGD4hc1BMtCULJXjYgLPLFqrZ6vCJD3v",
  "key40": "2aMfBQ8nQjXWxNGZg6i9YTEBcBMv5HJc4LMrqfFGodHgLAipvE75PWxMRdjMUvp5xZ49c8cRFkipTUR9b4e2Dg7r",
  "key41": "QUW1uegaMiKJKUaF7WGHyAzwTQ1h9JAJUVMsxM7QFW1MShg1bcEFeCinVLApewm6Cm7pg8hFRStDZW1JM32QjwD",
  "key42": "2yAqpjePY8wMXkryJqurgoN65265dGY6nVKDkdGAkdBH4Xw59qPkhEMYm48emZbJ2yVGyxocLqvCakLJ5G8PDZxr",
  "key43": "5Tjmw9GdFxPw3MbVxNSJxrxgL2jrgnQQWMboAM3HgFVrvw2ibjZ9zUZsRFWxt1HTQctFnF2qABt3EB4GxVPRJ8dT",
  "key44": "5Mo5iQkjxm5jpns7ixHbu3gpxejKEsWh1rS1TbukhQdPdEZrXw6QTHf1QKPctdXVkkZQ7Gn72wpCki6zancAbBp5",
  "key45": "mmYJZDjKwCkJjLGdeRY1xQ3nVjtkPQWNUgueoet6xPiUvs8hC6bzMhzJxUc8qatRaLtv2VoDDozoySyVrVEm4GJ"
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
