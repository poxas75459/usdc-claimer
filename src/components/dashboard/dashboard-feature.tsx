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
    "5bzFro5DEcmDLdbnfFqoFggKKCRNZ321EX9A5sBzwADoRtUNeFKwZGx8uLegHeAqqc3ietQuP9RjcgA4EFdaCdFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LPHWzgeA959JgwTvM6ms4igmRvPuUQvKEGBhsnozunpk9W3YxqoXEm3YNz1LEMTaurj6CnY7rGbrrBFMVbqyh1B",
  "key1": "5iEh5PL44G7F2sF8BfaMYix4MiEGcb2DQtVi2UafswkTxYM5uCH56JZyo2cby4WDRGPJSpLQnv45ZrP7FMxNnPt9",
  "key2": "7HiyjkgPoVvwPoB7SLHa3jY6XhwbDRbqPHH5ELSAreKcsjXUmpsebbdPSfYdWRHPtueyGmpCPk2NaWBSeKFiVKy",
  "key3": "3DJ3acQByrnMoEfxsYeWc2ByetGuXNZEndvMG128qbb589215sNDrwL3fbWdUDdwX9eR4eXBrmBZq9ChLW26SGhK",
  "key4": "5vk9vcdMso4peFhKsHjQjcy7EDZUF11FcejQR5QcwmXBndDsRyronvvnhQUbEXoiHJctbbAo44MGbQP3eBuGAewP",
  "key5": "5ak6URXy76LT1b6cBPco8SofoUaNvbU3sSwqhEVUB4atrWvz7VWD1hJrXAECmeKPj4Xbc1W8gNiacAUeev6ehFCP",
  "key6": "63cLPBnPCGMfJ8hE7nhiKZLQZx71vF4thzfqD3Yyjp5cyqGWj5fUyC2Rg5kWASDdsoSnqyroRk8sQoVaUiLt59h8",
  "key7": "47qSCx9TdEqnQkBk7X1eNLji1TBQ8HnY86fQnkYje9cbMZ3oqfYD7ZBSnpcrqMVmWh9Y5XxF3m6a6tXLVbJYXJgt",
  "key8": "5GfsvYawFocSqju8WhkmMsCoNK1vtQ9mxUwLszswTTULLttEfYfNxZincXvgT5ffYmp6Vj1Yj2s4RppJVjj6MdYk",
  "key9": "23ejzni4Dn35whn9sGyJgcbpbkL5iaoRLhmmpHzPzQx3aBCV9MHbCNXX9fm7K5TvLWgz4GkewJnJAnZ4jo6hJpdB",
  "key10": "4EnHAaKHi1QQ7m3jTxJCAvuf6Z4tGBysPjC1iZhndvBgwrWsSgthoF5SNtjNvzr9oucFmujdniZZnwwH5FARDq7Q",
  "key11": "5786vBHFoMRHmxTc8Lgo92gvQwqoTVKjVU5eE1Le12F992C3kYAf7rqCXJ1HAdGSDW5o3sz7fKHCJjFoY3h6JdzR",
  "key12": "5f2s4RDFrdCqvropekRsvqFUtGg7tqhez3JhCCExUpdwUAkxu3Jv8ni4A4UjvmwDMwARpWC4EdmzQfp9QcsZTb4z",
  "key13": "UezigBpvXD8yFpu3uugXXLstydsEP8jfL8dywJNWDSa2nFSPDzsDMh2X2orFTvY4VWocNJe3cVcgDknS2iojE3X",
  "key14": "ZjyHrdiDNRhST62W33ist7FRGADQtzeEEFxZMh7x4YrELRh1MXy3bcyye5BXuhSzcoN2m47ncYd2dEvchoJaL9m",
  "key15": "3h7qWYVo2uQGJKCZCf3EXtrWyF4VduyBPSqzxfipoqXxeVvkTtq782zkFdkZdWaveT4fcqZD68brAwFvTXZBu8Y",
  "key16": "pFLppV5ZEW3V6iMqPqD627GLfbLE33iXxmgw3TVi8NrBpFLDgqtGkUjn7cPi6S33e69gEPnyAkEfvJEW418egHg",
  "key17": "3WkBBXapH8f3W4KWPgrmick1LcGDrDKFYjRWfh1ZzhzaBrVYnKLfpTRLsawGGcWymEdWp2VaujKaSgJQ5WgydQfJ",
  "key18": "47M8B8XwdwLLavt5rAptPuMswswV2YzN8dwNvqPsbAE9bm6Xc2Lk34gwi7jKVzL6BbNFpUsvp5gdi46Zq17wSTjd",
  "key19": "264Xu2F7fFC5E1fyopgSeidHJWEsMx1jDRQZYGB8Ube5Wq3gPjmwZVY6bz6bLHrjj6QRDcjiFwDmcDTUABwcvod5",
  "key20": "3hkQFTm4rdWYcftXgRzpzGkNXXRqjdzz5PrTESjUc2vbPwYRyhGeKCbKC18nSkNxXSuHL2rX9LcBUMYimZRM35dh",
  "key21": "WokPNzVkHPgksVHqEyvNuhYJwEBQTF6EkkEoCAnpfZAfwXDF9RoQ53wh5ntzJojJj7erSmEPvEUcGmm6Fdf3zao",
  "key22": "5tcMGWXYDxpWuCen6AkVeHsV3dYTVi4D1U9rHctQtqPyNw6sr6Wha1V7wNxkrYgG44v1x1PYH7u2aMd7gACj48Tj",
  "key23": "3t6ZUxLgA538Zq9US7vDbSonTKCJioaQimUhumfHFXAfvEJmmFwFHw9uVE9KdwoitUL2Mxv31ra6aRPA7cFm3rNm",
  "key24": "59C3sfgQJNTL3nsfaCf9waawYzMzrYc1fSLrWiC4fPphNjASnqAsVrFbUBEiHvCLzMs8cgemu74Mge731yhNuZsx",
  "key25": "4A6BdwbUQZLw7KifdhExT7SQqXokqk8phqhqhzB8VqDiudNGfC37wwbEuAH2W6nXjGQRKSjaS8XgNqMVvmT1M4kU",
  "key26": "Zb3YkPiwVkPVGkdnjvrmso3q57Y8CwUAuLxVDrWgivt5VBeMzY5H3JxEaTXouZugsapMKpEHQBe9P8DMN93sv7E",
  "key27": "Hx99v4eobTVM6Uosior3zageCgoZM2Bb94WQKTthHFv3iAq8ooR4niaNpgYXVD3WCrKsmBCpCbVTUy1bz4xMKpZ",
  "key28": "5WEUJ6Y5tuJ6BGs5EEf7nL2nYoAbFC61XSQgX4Y8c6iVrBSprV2L79h5VJU7NJt3fEFgi6doFdCj8NRiqyVgcMQv",
  "key29": "3fT2ifGybt5vSHRRZHD6ZCaUJDhRYbnvG2hv1DAp9HiZhLd2LCUBkK7qFjxuS3UJJ2JwSGKBf52VQPjJFkuuuh3F",
  "key30": "3hjsh8Go8idJbCNTubZ6fAPxWx7tdNQJ6MdUwpzpPeHRSQoezT4T5mae6hAxXfqnj1yAqNskhRMpGJ1X6bFAwnes",
  "key31": "2kmqvNMy7grsoMQBruDJvW5xZ2NttNKCUAszSdxehkWEvZqGWXHFYfcpjJ5SMPmi9tbnkzrLhXFCE3WeDuCRwwmj",
  "key32": "Pt5J27DRMCYiQzBABcNTABTKcdCNrMRJ7MFGYAdcvrmhAUKZFPSWA5oxbjm31Utw7Ka4cFSqgnVccsH1UsvXpmp",
  "key33": "iRV2nQaMrh8qFmg7itaESmf1ofbvbxAqKtqx651BsCz5Hz791c11nobSDGz4FfF6nwMoWqLByWsR8WmZYKM6HoE",
  "key34": "4qa153RafXkk6vNKzYyZb2Ku1N1mU1Sf72ZuYqPVXz1xMGvrJBXhKSADcLbRwn6HinS6My5tPGWb6rHd4Z73dGc7",
  "key35": "4iFFJF1v8EA7LpWYyLCgyrk3LS3W27j4zUsthNkE1zmMgzeR8UfL4w7EFqfp3LoYpmjwrgfnZup8wsGdtWrcorAU",
  "key36": "2Smx4bdHqcr5oTuHB8EwMNBMjbGujJjwC1vLjLQfYie8CFSp6Tw26Z4MrThqhBnQ2RtHjQuPBkTjym8NJJoiar6P",
  "key37": "3ats29AL74NpxNRAcmc1ySDGdrndoTLsnzafsv4Z9dHL4rr78RyCWyQP3QDtRvRibbamjXtbGnQyiD9LdruKEyHY",
  "key38": "5ihTArbenEtLr8PSPxWizgfjoPJYvr4qfyYbLaX6HDpw79e2La65wk82obnPr6B6A129BJVASMnypQQw9TxgwBvH",
  "key39": "34BMHgJGWXkHnYFR2WxFobNRmxTZJRb9Li3GutwGWcohLT5fACNkzpCvEp6DQKFYdZg77ykNpWpLz6qD8KZRsfBY",
  "key40": "3AUG3ecwQsnHKnTsjF3PqwG6H6eA6gXsM2K3FTyrAMF6uacgB4hhBFdeJCBWYA2MrRzwxgWEeVZp1ojBSgG9DxNi",
  "key41": "2f5DQWEqF4YvGxCiaPEDZaUaeXcMAqnguSvHQk6NsLSWy3nYKGK47S5KMLm3VvsosEndkWC1XKpR4AJAVQ15q3Y7",
  "key42": "4417VK1xvKpmZba3WWwo6rx8UdfVq6ELgBmpCKDFbr6gfqbFUknMws5oWqHm4oJdtxy42qGyku44z4FPnEtLq5F7",
  "key43": "2jaxw6rwmQ9KqtqoKezfrX8jQz9DwZxCwxfC1mNG62SkiX2S5FmVsgZMA8nvX6nDcnq9rgqhb6xNn8nUmTkSi4qH",
  "key44": "3EEYoHYFdmipnK6oFgG1MigAU3RYTi4PqYqumqzTLkmdAj4PDZJRCFFZHUmjWdU79h2btGEu3Sxahktyz3G5W6N4",
  "key45": "4dGZ6AB8D6oXcdAxs8zHkYQTtYVzjnhVfT79oxW1Gt9uXzxo3Lcz9C53op7Dr6Gg56jzHiNSGfTmMaCe5tE2w7RM",
  "key46": "4uKkmPCS8fEDNEFR6rUFnvkrzj61zUnLCgZ4BSUerwQKyM24C5Djou3fZg31gBF5YrqaRyinmENxKBzKM1kXU4hB",
  "key47": "4RCA2FRhZzrF6FqbHvJrdoDLPMDyEWvx1NGFSgAP3ZDGzRJEcUiva5SSvRfRatX3D4VnWeCAbvWYvSGjbp1zG4Sb",
  "key48": "5d89pJb2Aga93nKJUMJuGRJASBv8FGVyLBMmxKCdf4nd3LpjRqUiKpzKpNd9KZosEvgCm86qc4qzVeXgVELT8SRc",
  "key49": "4gYsZ3jZt3chUsvgVQKvzJZwQ785aFwR6Sy5WrgLrJ6CAQt9M9vXWRMZJ8empFyGcxBKYo2opijpcKvehwvdr96V"
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
