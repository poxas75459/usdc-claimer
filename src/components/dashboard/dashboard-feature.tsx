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
    "5xE6z6Y6qi8RtchoZoySxNoa2PgyRSeH4md1V5H3zeiKDBuKx2wuJ9fxGZcDqs8TAg2XkcYxa6gRnMoi2ojGHVSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZoMFWZaajbXUbhKGcvvY6jA4vciGTJ1tW7TQVKazD6z43vP56VFoRnuNqk76sWZ2W4ziZ8ssSJAdT7iciTFdoD",
  "key1": "3pWyRwiMcZdygpqydSQZLWBshHLTnZRhhTcPhnujndqADCHUuoL6Qp3uEX9vEEWxVnMCp1zqikJ1c3R3h8QVR3HF",
  "key2": "4Hj4a4Y4cMY45cxHmACPtr58vDp5L54j81svcJTpfKSoEQQjS9BGwdBXsxGB59tbqmNqhenGvLmZQ4bpQW5e5xfa",
  "key3": "dz25zb59J9kiqS4NdchbbkSJ8brH41c59K5Jt16gRMCTaUwfvsGx6LN3aJh2guHdddp2Sx1mtoEgm8gx2J3LMLq",
  "key4": "3FFgnTWhUGcezv3ERfzEhbPJ3SxPibnLHCSWpcXTSjSm6GQ5kL9eDFEBdjWGabSJnW1ruDYJyBDKZQBmAFUAYWP6",
  "key5": "3gTQY2rFeVP2bwwcVigrcTL6wxJqgk9nnWkW6nrcCbrxu7kNL1bpYG5PNNnEoqU7QLa7EmxcxCtDnUXEqFeoMor9",
  "key6": "2h6zgkbcFPZfYY7KFpREnLY9FsHojDqyH6Qm3xSjbq1T3R4DR2qPh1rkWL8uofaNM1ra1VAqrLAN5GorQU35Yevp",
  "key7": "55J12JZjj5MMYDq8zAv18D6vVPtwfGFikVPqobniLGAsnmELgM3hYZaVbj22QLPYjE8pf5gLnq9BS6hVUbHkc2ih",
  "key8": "zzbkXxXbV8izp47y6TAMWwx7V1L6ibRKX7w622Utv9tjhPPP1bpRWzmiJrTKzni7RYk9UgDGshS3pKv7V9HBHYX",
  "key9": "5eVm71S8VEwFCXzkPjeXR2xbgULkimqiZVjmN6T6FUYH6pTmXAEBUGKrWgxVEH5J9kAsRjiwKfqTzrdVkLzmjasW",
  "key10": "2h1D32apJz7fh1Yza5whM8ChzoVki7wn9xCx8e8SQbNPTWA2pPyBisyTEvsBpQ6dp5BHcgDhuEMvW9XFjgspquYP",
  "key11": "27C6qip3ka6HCUmeJp45SXzEYt4DcvwCrcy8wyacN51Xj5Zbg3S5vvcheya3gfC2KT25N5VJ8KrWMFrXGQpbzBQE",
  "key12": "5ZHncFwqtpLjhAYXSzCoFpppirXA56nM5upB7dmV4gTTi2APEJDsZpXMuAXUZyghBxwFHpHL9xYh63mU8Sx1neZT",
  "key13": "4633d72WysNmwPrzYGpbpraX4zLbaM9qJJHJe9Fh7V9uy3cxRQbZdVkypuEXVn6wGxBSeLn1JpBA8Espe9XwNuhB",
  "key14": "2byQpQDCw8VBarq2zXZe3kRNF7ezvz5TaoMmcYzdiuRPtqHgsgmXva8u4cbS7CbArbfKZuwp4BUeEnvSqKYbCbPv",
  "key15": "4aF9RZVaThfpkCozDZNNhyKpbxnw8xnkKZsnQUdU5docyW1wi2Tk7syMKsedkQNiikwRxh21DcBmkHK3oJkQvpUz",
  "key16": "3acuj6bKX7agnGcPvaT1o3BKCVSTPwAVW69UNVXwFZ7GqCpZ5dEqtZpVQ1prbZWY9WMJdNDqwXA6vi8stx16wSfv",
  "key17": "4W34Ktbqp7B6AoFG6KWeS2zoiUcri38LHMQFAmvzHZR18JQFH6FE7MTN1HxyVCuJSgx5h1ihaH717MCu9Lvs1nW",
  "key18": "43HSUFAUD67iHzBiEZEhLtUtSSER1cHvXVzzLdT58GL6CogdnBAbPEU2djdemHHnweFg6cGAXwi5q97tx814tmph",
  "key19": "2pwLhoieVjtSA31rzGFFwCE6hM7dLpC5LmsB6MAi3Lv5W9GncoK49S3iwFqgWL6NkSuf1DqQBrwNVZpdm2goXA8V",
  "key20": "3pEEZ559jSp39yJT2FzEBUb3r8Zbo6GxrXCGppuasq4opf3qXfZXt236Ree1XSWkXUsPovY9FUu7ZKyWa9jhMm6f",
  "key21": "5A6Tf6EFB8HxnKDFEtLxu64X25E914iu68cABBZPgjUvsfa3kjja6kwbKn4Gw9vHad6fEKUwRUgZP6mHmk7vYguJ",
  "key22": "3FgiSDLi6L15fJzoohCBc3RGCxnMthT7H11aHBW877Tz2wjJpbx1NxuJbkGwuWoeKmpAeV1iYXcnK75pJoq7epkA",
  "key23": "yW7mzZxTjLWvGE5foeqeiAYYUoArShtT9stYE62nEAFhfUCvfHzqvZ7U7YfTgzgqftTsSSVm4ZA4qYzNNMaNnSx",
  "key24": "2BimE9UAnhvmkYBJDQXF4kwWEYrWXa8Gkp6vZuC6ykBUsgtCSnraTEzNxasRAJBfHMVEgWdinq1GE5FVt1KPs9Eh",
  "key25": "32TyEqhSp6BgboojwMgjJTwVfBa6Uzaed8FfRLHo9mtp16wxAhGU1Z5DhCusaf8km9tVxQWMniuQWZV74ZTz6F2G",
  "key26": "5Xg4vwrG6DXSbRw1fhJx5YS7RfR4X7hpCh6hrmEH8T8c1indVozVqCQVVAQh1HQRSKywNFcQLzMUSzXAweJ37Utp",
  "key27": "2WbRgpBkjMqobe9RwnWU2QBd8XkqCjyGA2GyNWnnVn5dVcR2bxPJAUfTyCxurQq6ZJiz3SfUNAknah2GR3ay8jnB",
  "key28": "59YySnQk6s2LhVXF4h7zMR533wBipXp1rXAXDwvPPqwMyapsq6rsfgxQKGvmdaEb6WLENCbJjZs7c1iKCSaZkx8o",
  "key29": "4Vkx3QE9moswP9Kaj1yPVbEAVSBqqfDT9VoMW3wKPKdzphBCKuyYFLH2GScCxAz5ADm1M8729o194HHRs86ujce3",
  "key30": "EeXPWinB1Pi3BtwZbTLLGJZ6D2xhQebm3ZPoVQWv4EFZTvxRh884PaBbB6ivteFQKH5A6PwCoty39aWKYJuP3pY",
  "key31": "LVd1Mn76rXCDNGxz9UZEkC3yCvdbkQZpBUaDHsMkm3QwGHSbf7uXJHKKLr6xQHWDz9wVnfQ75B6neFvW7DURZFx",
  "key32": "3FgoMjajBUmqTe5fRLUjaczCBn3uZ64ozreHUZjyASCaHXJYiJTKmB41xV2iruydcaBTRKZV13nbzU1nQ6B17zue",
  "key33": "k9STrT8UdeEchyYp8ms2LKqBBcusZNrM2ajPYLpCbmDVkT2US6nZ3iFrwG95sQVzf9uFfMhEJwrhuTPig6YffBe",
  "key34": "EeEyHUGbVf5MwEjmgqPrP8gUihewwhNzB4PU5bZ2K2ZKP4o78uku4U6xB4GbFG1idkSivetgMt7jFauW4z1kYpx",
  "key35": "4HoJBARCVwab6G6mThDV5mHdZR2HNXoNjpwcjvfeqVfqDv3eMycNCY58svBMpS9KrbcJu6PjtJYxtEcvgVxbTxmM",
  "key36": "3xPuQW2Ha3UaVK9mvoGK5MXWxzmPQrP18UtXtfrxu4gSt1zzjT3VyP854GtKX8j9bnEUR3RqB858jnRnAv3rtuns",
  "key37": "4ystXRrY6B98gHYrTc1Q78dMnzd7RTVnU2c8c3a3M2rCkWQqZnBdRmTfLDbAeTPsN6vpWWKxQ1xe79aLZeNC2sUL",
  "key38": "4kXyuLiYfJVoJPqGJzpUE9uwWfBrF8W2kfs12QKC7WkBmhasmVqKXx6S7WMMvYGQ72hdeBHcopo5dMF1i4jr5hye",
  "key39": "5BxBqnRqjgkujzDvukBXY6hEVdQKikbdSf4HDJcQvG1ipz5xBfbaqjjjnE3zooG7UzXVa216EZuw4W1ChJjiskeE",
  "key40": "4T66noXLqS8SwyEtR9tfNBb5uqb1syNWMqAyCGTFfjG7rchi2qUBCAYbequKxXqHRQn8hiX3nbFakGADRpbVTDRx",
  "key41": "2D8QVc8vmgv5rH1WbMdbs536pPEooghAkHabbcvQQNm1FBwy8FBgHX8KYq5VFUc1jPBUcbuuHmp3bvfGvBNGVzHz",
  "key42": "4PiVANM9qfjNyKW2De8fZ2vv72uJqpHamwm3jXQ6jKAHw9bokGYDK3jvrzVzTG5BWArvWJsPzUnZcnnSFe4TmjVw",
  "key43": "3NVsZckvwnqaWBfALRHgGHysxtBvCQgyz7d6VrzxTLixZCeVcUVyM6K6R17RLFQuJUJBQGNnXatCxNdFEfWoow4K"
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
