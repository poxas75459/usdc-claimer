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
    "2hrkVqjT3J4fVMcFyNaSnvLJgPnPhBfKNHWnSombkGSdp8n1NJFQr7toFZuY6fjhLqAQe1f2rk6hdEYY2UtC7Sgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGomNXKKYL8sbxXx6CxAcSb5P1UjhCXbijTtJ81jN7bsJ9PqJXbTYtjnfvEWMvjaRR87DjnVgLDXqajvs1BJiPq",
  "key1": "2gJTGiSLw9DgVQRUgc6mfdjH61F5zgiaRXpPb4UqsxUH2oK4aawTigAQZHzVRWzSNZKwjW9N9xMmJ7vnKdKG36X9",
  "key2": "U13pvSFBhJRyBQDmRz6Yyss3tTWPdaJCvhCoGVtnLFKd1nba3dzRLdb7KwsePEGw5gHmtAmjgfmjSDumyaAM9Ja",
  "key3": "5bQBeZVb1mGLxjkFzrZKt61uDFoLyD7cHyf3hmugo37mfumPnkG3AdxAJ2HtNDJfVT9X7bTbb1nQKExPfV43ZWtQ",
  "key4": "dRZiwRzobnbLLwgADPJzka8v56sumG39oESYn3vVGpWcGvn94VDKL3wWQxfPCXCyvrwT1rr6PWZGdg5AJx9gMyC",
  "key5": "2XUuU7DmfbqSTFs66Dw3YdKG8Jwkewds5z3UQvhw92pttfbZvrAfNMrVTLaiZHNvmJs5HtFecfvLynba8uxjkeKa",
  "key6": "31XM8fCBn5rkfrP4skkTPCeHYP37SKPSfUVVerMnuKVvZb5KXfDPbgjNnwwvzJ6a9rD8YdS3gDcSs2jq8P8K6xp5",
  "key7": "YG7Ayga1BNEihhsBuoLLkMD5snD8ZgiiceJAc15fK2EfQEfp6BbSEgYzvVLoPBfriHG5pwBy3nyhUAhV3yxwT2x",
  "key8": "FUkxzosdUiTbDrpXAEDNRhbuubpmaoeQb2uvUP4ABoDj9xAEZmfC2hntbdR7djwQnndScHtFxFAiLM9UJj2CTx5",
  "key9": "546xgpBkNFQ6NzPM728bJcj3rRkr3GL2HSnese4dmgs91JSyiuCPZ8MJJPZfMabxCwA9eQVwXoGtVry6sALhA1VF",
  "key10": "3xrmfLh9knexohQcghPh69qs3zPVxrZZb5Gek6Y8wBz1HGpnoguwMa8x397e2CfK4tC2jeG4mVyVf4GkMyQj42o3",
  "key11": "5Gz8fXQ89gWJgo6JLZJmSf7gynVcZwpLmm94SQMBwfdKdwikCLxvFVWmBhJXMqwHRBnFkeLupHH1aqN4npr2mH3U",
  "key12": "2rafVojHUnTyi9oRXqiUQ9evo8aDkdf1x91HY1hhQrdoxtgxciqapZCgDUgk7j49WDwWDAxT8pcqCbf3Mz2Ba3Sm",
  "key13": "2hmwkYSqXWoiiikRijWCiEH95EaVHA7GVJEmzweubVJCHJcbiDpEBMnckYNkGJ8mT7kZXysZbAuyYG9zFqhdaoqL",
  "key14": "5LUdWa5WVdg1mjDmNckARsQns5d5uPJnncXERG5tgF9JvjEt6vmdGKa1SQx2RwdoNvhh2jrjNDykCQUxy3sZziGk",
  "key15": "sgECbYBJLt7Lp9bMwfrNnU15iuaZV2epC25yrmvQBWKvNbFBhitkGKjfTNtbbjXhEQKfygK7wLt2Aabc2BCkz5X",
  "key16": "4QifuL39hArvYg5F9tSb36iegfMW6ey5BLb1qttVbZsAZFP4NH2kUuzxiwWMy35pt7HcZGf6LskiyRXN5UpXQ4Ae",
  "key17": "2rDxUvE1j8aZRKvKiYJXRrhs6mdZ1VKfy5vBbs7UPYw43jGtXoqkvqNLDmGry94QcjokTc2L8EdwaHndmV4QpbnS",
  "key18": "3stYPhxpE4MXoxq4ZbiJPVQLxQc5EtoynLU88nRXs9V9ah9wtXT8x2i4LANw1LQ6vw7qUejbyyK9C37YYRavw2UY",
  "key19": "5Zj91tEUTYU7R4y7bpzhahf2y988Lh4FfvdURBtYZS7Bu5unvjWZ37nR2Rx4VEwCCmiRqhP1tbGxTTdbNQ21vfji",
  "key20": "2ZyzX16Hst9oqakGvjRjifYmbSxcbXoE63o746KthWin4fq1tpVUWFWg2uZEGzwv1RGmoNmzmJ9TBFmGjeU4ibmg",
  "key21": "Mx4HKgayvoGdjLDEMYajQhxAsErvRD5uKR5gdyZ2fKknmBt6hAiEDTbEiBUs7d28f4q8678HdSvLhqJpewaYY7y",
  "key22": "4FSo7MLQWKwxkkiaRRcuv5WArnYHTTCseAXMM9MvJ4wAecWwwM97D3eTSEHhU7bKzh4NgSeBx5NY76ri24YL7wTi",
  "key23": "48gxaSTBWRnmpPXHTr3w781WvYvWFgXAj1XFXKnfRavosGkV8pNTJbZ9dmPmPaMRXV6awZe6QrybQw79xu3oH9Kb",
  "key24": "3K1TMCpaDe5JNj6SGbQBDxKubtKzYcMwv1Zo7p4ZCM9Dbe3bUGMHJBqDza95NmGUkFvZuXoeQqCrGgiVwU736Bnh",
  "key25": "fwqXBBv8UUjwknmw1PajHTbwXFA9rSW4eGLBJu9hZpLoLBFVdoQ8tJpMLpWnP7p8xBQMBFwEdP75nSZ9dMut6sv",
  "key26": "3rnh3jNJgUynBJ4z2eBXEVJCRdPGvHauUyHNPG2GCVZ6xDAf8f3QJmS46RbTLNxHWQerDARfkPgMWnFMSZBTFDBL",
  "key27": "548X1tTCmeY5M72LNQ96Fb6qrfSH6YwLDEMgN6n1WoYck2XHNSU4fXZSf6F3Rkbsf32PT4AxnLjTfn98CQJdixvq",
  "key28": "2j8jWtY1hGPeUy3LjCqmAZJyKd6g6SQSXmK5oU1f8mMSqoBP6Zh5GpBXjSLEZ28KjdkxC4bxjfqEoByBFZfHDXP4",
  "key29": "2TcK7b6HCgoGR8v3H4TBjRxLCAEtCpLWAjCPNoNLekRNP7wii5NYTuQDdMeKYTKWEB3SShneq7mpCYoarSqiHHsM",
  "key30": "41JDSo9BWxLRf4QWsGx2waofhYhTmQ75Pj5m2j6noNAxLwKaGcjdyJJFEGDf2P5RxZgwXpLsqACR32REMFpJLd4h",
  "key31": "2xZTKkG3AC7zvJ8Hr2PLb15F7PTQAXKtBT8ozMhXJ5zkayVJF4JzhgtrL6kAXqoWiXiL7Jk7teZ4v3DYcnfSdxUN",
  "key32": "bRKAngmEJcTmeiCvDVzkhne4oE4ik7dTc2LVv7EGYLc1LBw4WehQqgsbK5EWTDZo6y6TN6pKxMMzkgvBxTdQ8jX",
  "key33": "4RjJ2RW8fyMREx2NnbRQATKnACfdCnNe5PkNJ4qB55t5efXadC5J3cHeAKkAYRyMzTQDEYswZ5csEBcJvZGJFPgq",
  "key34": "2fca2yqf2r2K8wyWsrddQtd5sh1QD7TQt1yjUM7mHHTW9ScE1wo53vgkrVuuKz49NHYkCNU1udiGoLcCWUzPXTZx",
  "key35": "2JFVGtayR5hyjnJ6MipgZP4N24CJ7TuWaDWwdgmXXhpbViF789gWXVwe5EKFpZKrZCQq8jHgMmbMR1pYiSyxgFXK",
  "key36": "2q4CT7ZZ6oKK14Ru3RFq9s8pmuwbw1PxJUY1qkW3sZQsvynNRaBdempsSTuVgQMJmVBsV74xcXBX2XXucmFos495",
  "key37": "3Fi9uvLMcTowmEKYkSGbTVXWt7QSsfjYsqRttuLUT6WLwckWa4knEDPQfowjGWTrYKG2Jb52i3XtYCe91Ptt1SJd",
  "key38": "22EcWXRuSUFh9bVZpTxCjSUM6bS2vcqX1vjRwQzJqPCxN8neQz93FPb9wn2P31zakEHkQHf9enjCYy93ybYPap3L",
  "key39": "3Mba9rL9uBQwzyr2CJX7CUUWTE4f4gZ3SCjAxsPWjmLq9JMbiWjjsrJUDJsnYCNA4xxzZdBecvawt58FEEHtcuuC",
  "key40": "5BFam6ooqGTC7h6pFp5kS27hoLwGxbjEyiyjkYgg1bp8sAk8sgYKRsMtc9U2iPnrGE3CrTbyULLbiBsBkYpJBxHQ",
  "key41": "8Kb5ogNRjHd9YHtgiT4AkbtyEAXLsC5u3FyhLW8jCV5RfefsLrXqTaZVF5pJmUeoEeqJS3X5NaFUDm6RGkfPRjn",
  "key42": "5f1Gp7dZqwvstAogYs9afN2JmhXJ9aTU7eGcTfQEX7XzxuYMFkXSCcKaBRZBC8hVMBSRXpiDgFMqNDsRcTh4qZeu",
  "key43": "2ETZNXR5A1YawX8AJ5ba67gYEHhXBbBdFsfcJYVFAnLMQDWCGkGbJi7p8iArdKrAdf92brLoL7xxXX223tNULyoV",
  "key44": "3MB36XNguwTqb652YBfA751ZbPN6H1ovqrv54Rt97uh1XR9WtsLYh2p4Xepm7UXK1P97Pwpwovo1bXXCAKYo9t16",
  "key45": "31W6rNDYuNpFjSTwwSr7W1gLyARpdzCyqUWX2UYGKtcMrcn4by3EMCqAjWdCJLzacD34CPmr4NuLdTkjnoZDHotP",
  "key46": "2mLGsd1og6wPqUX34Zx9cwDajVMDDNF6rHK7gQY23AT9tTu2BF9qWWxyCgdpNWMWT9RP1qLqzLjr8hYKDFJCq5BK",
  "key47": "3HDf9uNSjr1i3oZHh6G2uQJ7hTeXhne52M3ckhNvWUzU7488CH3Txw6t6eTQe2fBRMuoUf2ScjKhgHtctba1anFV",
  "key48": "2iNAUuMsHfgmUzm3RLhGPTze8KerBVQDUjX4AYKX7rWCwhbfZ2Cpo4BKteLKbCYfFrrCURt136FwpPYRkT9L81RE"
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
