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
    "cVLoGDxDf94dtLtyqcG5A1ueeHJpvvJR276XrqhzmP4bU8cwMxsoJ6QexPDNUfiB4NuxtP87W3A5PFUavaKTywD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RU6Hp3j3kA7njwDmMgks2DAt2SSV7bkueB5ATzdaNKUW91R9uA79YYLRKJ9CAFmYK3CV6iJYkkMRy4ezVfDxTDb",
  "key1": "5s6EbTdZVkPEYuEhm1qku9B7JYfbW96Sn1KhPp3maNNSkiTRmqR4idRJieXHER6WBzTNLESz9VauPkL3Lj2acYCC",
  "key2": "tbeWFPR7o5Jb3hpVjAi6h5cPufdmgPdYDavi5mqwbvecyYqHUSA2sUfJEptAk491Z4vkaxwVdfjLx8bXf1kXbVg",
  "key3": "2BHT5JdAq669kxF9ksTsqS8RB9RDMCKGUjF2xrWroeLQGYu2ZFABtcCYpdqRx963XHECWB5sYxSSPduVSLgRanS2",
  "key4": "5ojHbxEp6bpghWQesjBv7FVpJjSK1Xonmxvc2KKC3kwxbGmGYBD4sXPmqG59zHbJ5sPGuSQFMps5rFijGBxVoeNC",
  "key5": "5SoXYhFPWUBZtCE7D72mgMCJpFiWeSJASmtSyc1q326BmEUBxFP9sAk9nHEJQ8YLKxDzCZy3kB4w7VDmszFwMY6S",
  "key6": "VtNSCFhuvyHe7MwqSJCrWmjxspGfH5TUeKRfM5EkJuqq7XU7wF3RRPg7cwLZaBDcaYWLqYybcQMFeQrsN2Be5t5",
  "key7": "5oXoRsd3zwJzSpLgTVNUsJyB5wU5L2iU9mTJo5oYQsndHp5zGcooKPorfrd9UR4b3XGPtxvJSWKbbNCwQ6dHVqSB",
  "key8": "2jBgk4bFz5XiMiVYFRwWExNad82bFKBdV8MzUEhMesijPYSoYNyKMqzZTLwfR4pGSn9Xthf7BYsMPfBRu9BcgjWW",
  "key9": "3QSZeJ6PffnvumCUyEXfaU9YPvb74UAFxzdoGQ2mutuM72YMUpWu4jiFd7abhsBQYB5UrLENJK5DspJFR3H438di",
  "key10": "2jAFgrhWbMRZxfoxNcxckjht6pwcNrJjVZPD2nsYHDxukqkSHgbLtZho7ofgMUoNTnRGY6LoW7p74uJUJkiBQwyi",
  "key11": "xmZpfvu9j5b5VWC2BCf6FiUSqSpjtWH9o5siDVbE3d5GbUJQqorXRqURTKtd22Mxx9voaTiG1xmjLJVSjX4nPXv",
  "key12": "2xcVCkkttBs4DDVp46VJRj6boDRdWutUrDRY8T388WuMrF6mLcBngMoV8PQWXf3E2Bkt8pcXmFh94m8QBv1nSSZf",
  "key13": "5ev1VTVqUk6ha7NrZKKqTQTfZDadjGP8bJfNsqtvVkxEg1QjVRd858KoLtpnHZ4R7Nj9ViqKBMnk7ZbT8eFAqgzg",
  "key14": "3jGn8RaG3kGpvk8SKfLwAEYQEb2gLMzm4DzGTGV1bE24tCwrGysS4hVA3oQXkwJuN3FoBUBUfH3JC7fqGPMHjy8z",
  "key15": "44FHYhWcUVVFSmJ2YR72rvKFq89oApYnaXG3YaSLv18ajHs8wa2g4rXzobowhhBtvL3knLJGuBHp59Bhuf5yMpq3",
  "key16": "G3JB7EBhjAPcNdGfEZvWypwruCwgMM8Ea2312CLDSHhpuq53DPSGEgDCAw6x12ZV3AB5c7bpPNKbVPph7MePjo6",
  "key17": "3dY2CAS8jcB1TWHy9JWdiLxGk2w6sp6z9p2W6e73qr8jXpcWKXmkz8pCGPpfpDvUbqDUomZD7qGo3Fp5LnNZ3jRA",
  "key18": "afsGhd3jvxt7j81q33PHy4qaESwVJojBAD8AxeiMCHKa4cU74q8M1rcR7ShwgwQJbg1jnyx3QJjaXNea6Mqhh8K",
  "key19": "2SXoyaDARPmroEgZnx2aHgxnPLrEvsDjwAfK7duEHG2yHzueZbEwKHKxef8Ne5rrHs25tvpDbqKnhJVebRdeZy6e",
  "key20": "2D63cgPXqDgRsDPvzLbeRXv7bNiNJVbMqnnKFxMqMJY5FwXD5WiYW1yfeBWr3WdQjhvJZZdRqgU8Wk4s6NPeQcwm",
  "key21": "3QkEuGaC62U3eP4tPvxZHUks3dSUWBPAsXdnWTVFfigWQDpGqytgzFiLr9tU4sapZ65tLSzVSAfZpyx39egQvXiB",
  "key22": "5Hm99WgaA49yDvKXHLEu2S5KHVoM9sE5bEE3UZ5Zpxhox6RmegKuC65YeYgtmwYqkJnHwtqe9BzumwAwcQREjF7c",
  "key23": "5xngg2wJEyp5FbEv9GbQzM52at8eLSb3VD23k82wK2PArTCFWuDWiWPLZpgeRjfFE4kS2NNpysyFuZeo2WFEkY14",
  "key24": "4sB5CE3zw5RnYjFRouaa4QKYzhBDYsDqSArwDEnU7kNgCwPn9XpsKCy9p7SZfpFtGnBbbRLQpZYr4BVqJzMEHsVX",
  "key25": "36QExrHfRDMQqphdbdLmJ9jhhARRNxSdwMAnWqApTm4rB3yaVTuYJRGEmHZBQLMFeQkerTrpW7dJsRtckEyWMJ5K",
  "key26": "3AWB2XL4C3M1vEigC8mZ5A5UGCKY4XCMP3xNpsFHvaMaQfWgufJCjnMhqLbEcH2wJdUXWwYxT1NiY9N6Vqyv1nt3",
  "key27": "29i3Qf6apkVQLGvZbsuQmK5qxfFDpPwK3s12pj42xj2WbDnBowxjiHB68uQpRD9Vv3U5Pgv83cBAdGYtWPF4ZS9k",
  "key28": "4acdX4nJQhdqYoz71eBjpBdKERVdTbwqFzzxdedcB3SebBhNf3BSH4vhrsihJ9b4vQuXxuMJg66rYnLq1Wux7WrH",
  "key29": "4yBstGUCSTEXCyL8N3SSujinwo3nDXYzuzg6fySJ4DKKZpfhk1Ktpt21GhRDZuby2jhW4TsKxL6gCRH4j15EaNLk",
  "key30": "7MGqNC2dZra9Yiz6AjSHWoKzQLtQ2AJdjuB5DirdBeBs4c6ycNwG3Y1FagbUDMASwTA4eHGv3zgTZxLV6MwDqU9",
  "key31": "b5gjegcwpM8JvX95M8bSTJhyFPghneBVTvF2MUVyHAu4gVD7mEdtjKzGSbDt4oajbpuVSpkW3p2tCnC3tny2MMn",
  "key32": "3ChmDwpdH4BatKc2dKf5N9FPbpnVixbKHEQYAw85j2wHguMLToS9AiWXLh4Y3bJL9BYeaH7JiPn4hg3MYH6PDPVG",
  "key33": "42A3uS54Nm3mqXmMT8NBBZ2BXhYdPFWRKPeAUopYU1Pr2RLm5XkvimXShaCXXTPSazoJhU1Her5PMYyHUQbyCqFt",
  "key34": "3fL7LnAAz9W1McHDDJD2WNoMaxQGGVraGeqCQKQo67GRsojA9zTwMje7vXCTzBWqkVXD2rkfMxzMuqPKpLwsfSFg",
  "key35": "UNQpLhrPmP3GCiXx5c8s8QAFAXXBozkNHdmfrza2imbJeSq8aUuEfkSUVHpm6FsNivChez7oCWqLJAasjjQWQMT",
  "key36": "3qQtLA5QqdMWZwcZ3rKymG9mz2sZE3obc1Hz9buyDoziAZpDgb8GvfMB7h54h8468xoGX5mV7seyP621q4gSjhWZ",
  "key37": "3ofEki7ZoxwWRiswoax3HkV89SF1vvefLnGD5sWG5FhPe3gcapZz8ip1Mqvxauprnx4NhxNMfWr1jcjkVhRSihij",
  "key38": "3MGhCwBzMd1rNeviKoB61R6Ki5MLSPnh8s1UWZLTFCMGdKDVPD68UotC8i1t8jptKx9W2DCWRFJgKQipcAaq2ami",
  "key39": "5ACZaJ7Giea2WxskU6TaiFLMjrftZJXg9T2CHiAaU8GFZyavZdQQnFDm9VM2szF98J4qu1eFvLqJ6Ap6qdUXRMt7",
  "key40": "2YpXVxdjYf7ZyE98aqJTiyfWB8x1iCTMj2PbEEDJPm1kqADv7ZKdtBmgdU7N2WSs3PYJXtwAvokzsYgL7hmpggQC",
  "key41": "3MJh5x5WSvmkqHkpBy8JZ6z3ETemLa3N1LRzN2EiKsB8EUiKNkgx6y5zfufqnXPYZK4Xc6vBFrZ9QytRczuRgo8c",
  "key42": "4h2Z8LzA3LaMVEJRy2GHbbZmFT4ivyXhuXTbZ1B1Do95fUUibHcaR6vy8H4J5CJgLjQGhztHUtnMqAfMqVHuFwrm",
  "key43": "2GN5uXjWYc8nh3udUVRQ79HkvUNu63ckPUkQptgVpATVRkJLoBrAhRGoMAwrHCtBRUiPNKHTcLiw9qtW5TYV3sMb",
  "key44": "2kxCpSzqWRVKqQ8MYrWe8k5r3XKx7tW9N8eWmFX1ZrE18TP5x2PCZ7Yuw9nbdj3bkzVnwnQCLxTZgdZ8Y7gyaq3y",
  "key45": "n7KwARnnwWo9sbgpYtq3pRSzfGssXvzFY6Pt3PDizEXLmJHhDtJS4f1FvHTTXtGCaSGT3oH6dXZEsYTJoyd1EDU",
  "key46": "2sycLXuAiCxPEneKwsh3FdMxpJC286VsoW9zxrfW78hHNjKjf5bpDsiQEgcHkKJjCu2utFmhqabobnZwxC5G4DdU",
  "key47": "2Sc5XUMGVn1hAMj6y8QymtrRyY9yi8AxwqSmLD9EC7DxyrF5jQYMFhFof9S1tyvcC1xzHrY3FXWK9BcTuRF11Bw8"
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
