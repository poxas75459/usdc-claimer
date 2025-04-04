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
    "2CTKbdBBAe9z4Zn7T8qh21jgNmELc2uyiEe9xp94qqEEfZujJ57BSZW1XYxxdJAmLRPKLQwGqJQCjHyA4QPP7VUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqR1KVzaiSUzDcNzkgYD7GKfb5EQDHKncSC9jik1s1piV1yKVFTTUfy9mrWbn5PzoUQ7RXJ6Zue15ENcyDe8MBz",
  "key1": "5U4VeWXXJeH7Vz6xqDz4hnNvu33dvpxvYCiGuQFaLHkS7oWpdkpZgQ6kWfmpSFmvGEGPhEjxfyCqPggs6mjpMiF7",
  "key2": "65u3p9mFn3WufWUGH8XFBozKH9Ux24rZJHe3BGhiVJV8bW7xj7EX1fbL5ooqkA7zCnDR75DK1hMkTgriohTyfG2C",
  "key3": "4pvyYByEoRnUmCFPaqoVu3gs5vFYDd5VH8RUeYKym3iUe4fH45gY5sqcGpj4XEkG4DAkGc5xLBGMv6v5tDenpsCn",
  "key4": "3J7oJzEsps1UA85UGcHnfsc9ScYTYApXWQbwtrD7i4EgEgPrGTY3K2EiJTHnbSigmz4wADLKLyJDqaJm3EydGrcb",
  "key5": "AAzFaHC1p5ERU2SpneZh4r74QUE9JLUB534ze9GuUjvePQQavBWKNacgCCKemgcmqGNaLeyntxHNoxBmchhRB74",
  "key6": "3kJQYMGu6Y4FCVCB2Nwj51NaRkqYa4exno3xSAaQhD1bJ5Ppp5SSHDm283zeayxaqcRTYNWF2181tVQJao2DkZcL",
  "key7": "3zjkh6p2cG56UMLN2B1SUmdzXo1gfunVdmGV5t8j9z1eDckRpJXm2qQ7fEc2qhmX5dKx9CncLqBcz5KznJUSNmTn",
  "key8": "3MSzc9v9n3kmKZABgPAKZn9FVJQhHub6fmLEk3ZdHRCkE44F1MraTykUCT58zym9oNrYRHXS6zgh6kJk6H5aUMay",
  "key9": "4EPVZ8wRmXqZd1b3M6hXFttPY313hcUxznPZpJeB7yWYpJUKuzDEbqqYMd9pkmGzj4W2VYbZwyjyfhaA36KX5rxB",
  "key10": "tHfxEniXCs5kNejsckAUq2EFaJY2HXnwotAkau9GfMaAThXoJ3YYZ7HXDk8DBfkY45xgxaHv18piLXygf16mHBD",
  "key11": "543iYrTcK4SdvCFM5g5PHXFyn4XxGgfxc42zaionfULN62JCTA1rM2Jc87okKKWFLiNj6ogUJ4tMbaxvdgPJheyg",
  "key12": "C4jnq1cEPPdogxkiUuqWaByXtUzWwnryfTUEPHPgg46PLH59Sgg2yzA86gypXQcAi7AFpEDJQLXKAht6rv1WE6e",
  "key13": "5ReS3HuqXemK5GWsBrAmNT1VqU9xSGafiDcksFnPszqDstknVsGSnwLLss2jwrqVYf4vY2JUNnTghTK9FYExKgoY",
  "key14": "KJBAuavKnRn1U3RRS55PTTRirJouu48F8QzV1FhkrDwQBTbtcffDNu6mvuR6cbGoczA8uvpwADbPZrhd6Yjbpce",
  "key15": "2jczVK5LaTwBpZXs9fRUEWTJUBLzQqkgphD36gcfjDh2tBKuPyahMPEPvnM8zr8zeRSsbSYnnNdq5T9jQPLmQZ22",
  "key16": "M68HcMTTreC8gzWdhUw8TQrSYYXcNB4azGha2Ff8pma7CVhF75MnyQmcFKjfwTRom1pWLtMa5NyRBB565s3ESSy",
  "key17": "pkeGgk9AwSCAw8xWztXv15FWK7LfnMYSCjtg12jBf34FfwKrWaJKRJ47WkVGJgXgbd65GxjGaTGoc9oLbGWuu8Y",
  "key18": "2esSGAJ2mvgvnPyvFRm2gUKdv6tCe6X2koQpbioPiofHsj6cAhhXSHQivHqf4fwYRCjDqFduDYwoPCrVGPh5sB3J",
  "key19": "4Td1yfS28WodFvpeGjuNPkm3AGS1DsFcXXCB8dWLCjMGu9xPBQJueF66HNZxcZ2kVbcnCihRJ2KPRJXQMUcwWWTu",
  "key20": "4FGz2R3ngYsaEQYsPLpnj2EHGkNYSpfwobUPb2aL4yfsXuGS2nn2xc9gaoSCAw24uEqX2eLRzFx7ZJgtLSgntZUL",
  "key21": "3EGkKf3MpDkZxhdaT6Fuctfa4Fa7LjJTseiwtmhvFt2BDHHxURScwsPzsHNuKqJzSBCWdSUZjVDnDWXbFLp8mmyi",
  "key22": "3o745tqC74uDeUHmXfSUXWcgdZtixhpNcUbQUvX9ANC53j77Pb492wHWni44uQdgatq57CdLsqFncFxxuwwMtXRc",
  "key23": "4y12Je7PmK41RsGcn8CQPsJyoMChLgiPK8Dvg2Fs3A2k9LpTMe15d9Js87fDAWXBhyHSh6Y3oFpHB2EXLDMnCT8K",
  "key24": "5PqNmeAcqEk1LGik7fRtrbioYkBHggGvquuEA3vNNtq2pjSk8wyuZVvU2RDYyZ7r8YQXSoWctvoKJryegf2b4Qq3",
  "key25": "4Z9uHiWqL7ZUorriVCZZhdM1iPoeSgPnAaH9YCCRiHhiibow2K5p4B6qCiFHSzp15vNQJWLByCZiCcNY7fTJaZEE",
  "key26": "2U5A91v6SYyuThZH9VfJnGoVikrPGyJMV5XF64phs2pZyQmy1eS6FWWtw6HJprZkKNGQCjyLrxKfZybM7FrayD14",
  "key27": "ei2Nffu3DSNW22Nie6EwZgrL8ejuAN4A4RKRqni1343s9it9LtpQdev3eYcecM4qGPGcZDjLH2A75RujEhJCJpu",
  "key28": "H3z5S4ADVwKteWS21RANgMpaScbdv4dz39AiYpPzsxjXaUgyBzrafpXALHemjgxHZoEiYP6XAT14wZwUWTkbXun",
  "key29": "3Frv7pvqMkxKiZHE1RqxEwdu9538rtaWtsK5av5XJfiSMyT9pgR8GaScGMCwoqmzvHnnD1MnzYvv1skBW9H6QtdH",
  "key30": "5sCREc1wgE4bpASMu84Vp4ZZ8N1nAtqW2YEhUUE6u5WjKzdqqJnMjHT6Um4F6ndnPdE1fsJVH1BgSGNq37iWsv45",
  "key31": "2Ci4h8y4t3NrgSx7pqnLpD4kwpVJcPgbfWhqggpojLJwEmyLP78CGNfDMAmXiUJavBZs4u4cRFHhprvWpPG6FCVF",
  "key32": "ntmHMWeKpWnvjC6Mz6dpvFFGJvE8kUwS2U3KgU6nFMiW7ERtNPPZ24epjMmVWNpuS4nHBou2qmNKWsNjh92H6DH",
  "key33": "63YsP3UHWpu9JQKkEdjUCMW9WxZ6WxZsAjfbkF88D8QyDRn6gU79ed6iUhuRRKGQsMWjLx4MMFkY8Ny8mvhJKKro",
  "key34": "3uFYQb9cA4imJPUqiNzMifvt65YuQyFKT8DgeHdHsT6aQPRuK4jgn2b5AzyXVQ2V7cyGaRUpJZFWmwrWw2aSz16V",
  "key35": "2Xo3mBKYBeMD9t5WbieWBftnyxZneYqTMJxPPU1zGQKZkJM6jxmQHJdSJmFFm6gkqjtRG32aQzQHoipM3TauxKU7",
  "key36": "3axz11fhbocg3p6CVQ44Rn2CQMP1UZq1YuNigBWzWPCCsbA13NBpMFRDG6beiTnUKKh6BXJiT98Fe9dj5UU51VXG",
  "key37": "2R5fEeqq891ucJ5vzhfv1DqKLQrsi6vPeaLkZzzB3YSAFuTrhiHqkk4xMWnzT79CphRjgW1kfDQrxDFuE33VC3wE",
  "key38": "5wsCijQxa3Uz7hLBqeZq3vGWkfRvEGrvx4y4fJzvWGj6CrDPoJDs3fWSwzeqg9VRTjKnzk3PVoc5Lioo6v2ebT5t",
  "key39": "4VyuPTdaD55VE24XJNCzdLsezwqHWruCmdZwK5moEq48mqDGm5LBP613NmKbN69TvQEZrKAX4RREPRJrxFdWaRUA",
  "key40": "4DPfH6gc1kNoAwyt3kPAnx3TJgSGvFFMzi4eN3adZD89zLo2GgpNFZsW4cq2kUQ3fdmegTTVFFGewxQ1v6HX4FBF",
  "key41": "ZSuxwihaQJKsLR4vMsgZ87yiAU6tG9Z7mndkJpehEnN5Dokxvc6kihcPDoVLkbXPR2KKD76Ra1uqKSghT2MHHA7",
  "key42": "3Z3PqKW1JcUqaU8wkYBnLZDgVVDz5KsxtV2XW5XEy4yF8GVWfPUCeTb4EFp4cjRFas3ghZiMbAgTmQLnwyFYjSWo",
  "key43": "2jErJUSqJVZBa1qhvab5LKkJyPF73xFaPc88Ks4yMdczzd5BWxMVvkKFaZQwSPVBsM8WtWwjM3BsJxzgHxp199qr",
  "key44": "5CMR6AAbhAz3zcdkiwy7Q2jPeWozA9MbFMHBhzbXozNJA7J4n3sHzNCfrvC74apXK4pwBbRskge3zfeQhxDhJw8o",
  "key45": "NPoDrG62LgYfGK72kj4mYyDoJS7eC1AGmsPEHAJTEcKhKtAFmpN4CJZ9McPeUpcFLskGjk3CDkUvUtKbqMbacdt",
  "key46": "43M6EhreVHFsVuCXqV7PwwxFRjTpx7ydv9XwrQDF9cf347ErZ7TqvKb7baxkVLQWgrFNzYoPGkuAZvJhhc4cLW81",
  "key47": "7sfH2mkC7Cs8tw7WLPcN2LbHcwVvW5pbXGcQgK3aCgtMNGTQeqSHtfLTjB3aUx2e7rKFAt4vKP7hihWMPUu3b6z"
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
