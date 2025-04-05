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
    "5efXdo3e8GZqD7mYCPb1yATqrZdHh6qAJXrUcRpKne7HsAWSjVNMAn8A3mTgKHTq4zKb3jxQ7VdKznePsapacj7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55f2T5PejfrxyHZFg6UzR4wV5kwisLgd54GnsmckcifkfFQgjqPEBsEzdnvf4esvY6ugEevX9xFoQBXU6t3Hbjw8",
  "key1": "5W1LN5UEY7wHGRNWhJvk59kcpD3EFFuT8Vwt6u9rPnEXy9XdQKeAYJF1B5cuPdEQ3mx3nKWdvvpgz5yNnofQhyPG",
  "key2": "2WhQPSwvQLHJgsAmSkhZ4XQtc5eRXg6rkn9fG37oK3SVpZDpiqV7yQrsf9Zyz9qFT1PLfiMyfUWb8FC1a9HVALVg",
  "key3": "3N6fnRStruu18F9d93XBuNDMNW1SJYzvdds7Y6v11SyhtMS3YzHgdPunWSoLQuASXP9StmfXRFKU3vSNFdz1y7V7",
  "key4": "3kLhs3tfZM5Lu5VHzFxciw9fRKsPrXdZMbi2SRwfsJ5uzJv6q6Gp8JYcr4yqZqhnSLUwdWDXGmFMx9PqN1nvEAMe",
  "key5": "55yiUubJWzJ71G1P5ErkyRcn2JDdsPaqt6UYxEWDTWm65ptb61PhaRqUoRqD74fj6DoKj8NhZ8uhQJQUrapZZxPN",
  "key6": "66R5fqTuLpNMzmfzEbiJJ7owWvSHryJDdri1Zh7M9wzP3buFnhtb98xEK1WPTq8MfknKMaP6Q3drGJDGSdpMQncg",
  "key7": "4VDNKrhyJ77H3ReYpjKWfphAgpw7ztStXsomJb5JMpw1d6sfnjyVGWY7nQBZKJi7ZT3FwF8Z1mEyqHU4utzoecyG",
  "key8": "2EoPkzMkV1bZzJSAXxkLfHC42akEvCg4Ncq6zC2RKjc5c5AHRhyFtdB5KWzFERB7jZyvXkGf3vZHZKu1fGAFjYmq",
  "key9": "5xHfW89BiPSwsafmCgFU53akchFFdC3ZJ4uRUfeMizUhVcGT8ZcSPSNAqCHpyjLPgPeyNh5XuA8gokKhTpdZT7vy",
  "key10": "gvoypKwJpaepNFwbmk6bx6CT3CrpLAzMhDMmvAneLGmhHHyzyQWH9tGATXuxuQgjXFggqYFxMgG6sSbufSqmYAL",
  "key11": "sqrStyo84GCmerhRvVtHLW5mza6xzQDtiJ5FNcBzZu5tBnYCMDwXiFajdK9kU2rZscQ69gcUuNbT7R3e2wUdLq9",
  "key12": "35DmGB64M4RMobQEqZwgJNrgXjxzeL3feuYARrC2YFDZcLpBKSvyF4RQHpASBBcktD6rMUB7rXtXUNyvf9y8CuXT",
  "key13": "3RDFBAPyZkZFnPf8ePfSCRkWcRpCQ8eo9JyMLMnKEKanCuhQ1tZQCDEicmeReGzrb5575kSt19JaBtADjgobVos9",
  "key14": "3q4ggWoBqFqkVZJK9CraE6JRjtcyxBR5yahAnam9x3N4ZFTUjeQ6MvyoBP6SD6UsDtavDZA9HRTaZ2MSNHKsZ47u",
  "key15": "3vnDz5Ci2TmpV51A3mwDhGiN45EBJ9gZbr7Xyme6Yp7Zz9e5fBCLrGY6YcSE9FoS3VMmMmNVMFsfRLLeFDXsN4tM",
  "key16": "3ZA2dMESxmyyywnixZoytjnJxxjg9FZiPqPKzQnEjxRdmCP1YqsV4o7WKLRv3AupWKhKNP7eTmhyy4tW4Vdnjuqz",
  "key17": "43WNjzz8niwRes2Z8JJ5KPGdYu2TU63roB2apBHnHu6oVLb8MRkgkqGvnPGxB69RdKVza1wS1G7n21CwAuQAUija",
  "key18": "yhLdW4fQg3cBThz8PT1Yze9QzLJnrAxaNkF9czMka2trJBbcdbFt9jUkP1eKTYUMn3nv3hbVU5Aw6Wiymc5bpBM",
  "key19": "2d7bFCYT8WFYJkCrWk4mvFJ2LuWUSzci9KJUBMZoUrxgckAcLt5UNbSvqpgBuC1SUr8WZFx4bZCtEZcEwNdibZ1s",
  "key20": "2DTp9E7wWAAwkFas1piMaaCw2kUkvpjWJdnoicxdaRrRdQFYPecTtJffcAdFcetrkxe9dQm1ApoiG6fBW6hu2djp",
  "key21": "aKryYacV3kwSzzFLQyJhJ5vAxXjMm2GQso8zJojG6zW2dXPqjFB6c135roRhKpiEpvBSfQYjuRjc8Q5JMc8bRMK",
  "key22": "2NSa3AZyx9LuRnTm28bVX2ibVBqbEMtfMHEKBiavg2fiuAZjyWjxKa6Fo3qN1xsdDnDbCtNY46Pa9pJwQiXhJHUK",
  "key23": "4Ssqovx4vw4Q3NXw2XD7Lh6fekX3MvPc73vXsvoDr4zhPWYTbN7mzfUDQ5feJei8Edd6Ft1GDsZPnZ4kq4abiv5V",
  "key24": "juWUWnUECKdWWMSycKZBYSyg8mE9US9eNiiwfD9sDTDhcCM1r3xZY9rxBjJ6egj3YH4aoMX6rLTTTRYWN1oEMSn",
  "key25": "43tnu2ghCNPNa3fnEVZgqwNfECw829A6xZnsUeynh9TMyiBiA5C6fVd22dda4j8C9cDG5FDr21DiqYwM6iSWAKKe",
  "key26": "5gWA8qvzrdoJGyrH4fM7M7v6uq3Ue62UHPY9rpTPabcbzAsDjYSswseMUDZUJ2vtL4BSt9t6k4oP5CJzWuPdAATd",
  "key27": "3dA7k2rAcNLMpbF79Lrd3DufVmb8SxBjedvQtWRswYjiYResVWisREnEbM4tpbA6VuSRTmXsnNTpNCVfaBCXzPRU",
  "key28": "EczSvSL8fhHswhsdvGK6rTT2XqmuAVxm8XZEbYcP6zds2RDrP4iHDYk6nWHAjVNwd2F8pvDVjawqjbsYkSrP5uV",
  "key29": "3Qd6jQ7JruTwfsAxtrfGR8BuCUWZUFCF1xsxXqjBFzZB57MuiKNsf1KeBTEqvphGeed69RDw8aS4t8iDHR96rHEr",
  "key30": "36mhUQceMMguswjMuvqhsMwKMqFQWxVM3bBGJ2pgRErahb5jhScAiaLQF3DuFQN2dAbfzGLsnKqEE4SW4xMFVko3",
  "key31": "EpP2Z7WB5FLXCds2u7TWPfoYk9J9GQfBSKcULmN3NExXsmswBc1cRyzgDwu6fM9UKQn766h7hZMh8ioAyNUi3Dm",
  "key32": "5bEZGF9qmszTfP7Xqg7mvsskQCYp3B95w1EjCR4NuY8PKPFrKNcmFvc4Bi6S5fEDSBgJjjw6rnKBtXkvuFGQuBD5",
  "key33": "3iCrPHfGdtteti8BBD3akWNyBuGLv9bUFRL9vXrXgeyy8ByegX6Tc8oJ7p3PzSxrZoZZLLXCvSJzwwsRfxUJB5oe",
  "key34": "XzLXjFBiDnyzGcJskHfn7LMvi734pbJHFeJPQq7U7QW2DMfPW2TKzc6wcYGogZmkpXVy6tuh7UHxhF6eNCUnXM9",
  "key35": "4JXf6ieyouhCv3KzhLWv1kMHU7KodbhwUuDVyuzFpV9mrX7czswpj3NB8Cm8vrmdAoPYetBUhrnfYW3zbEhDkhkp",
  "key36": "5e3V9cSCr3Zn7f3ugv4ogQww3iQmX4NrStdWaQgpMQQVaK3gsVJH5JTNyziCEFe971JMrLqRyKLHZriDfzusm9mG",
  "key37": "3dwpj3u55uWfBDibKKTzPs7Bc7KRknS4w7Yje4QNSsqySnkhTKpgCDWbKPhfTjcNksdogYgjgnApekDUMzPxfQpw",
  "key38": "59Z5Gx4FFsib1Cm6LnrzZGKRJKTUpE1zrjzeS1ArUuyiKHhu9ARfS2drPXiWWuUtHGJkww9x9scpYbrTRKwzZuGp",
  "key39": "33nYUpapBgDNGEG1GAJ6ALVkucKfHjAd9CW43nqDCoE6zJxW4fQynHi2um5FrNYcrHJPQNutxcxHJJfU7iKFk4Ud",
  "key40": "4N2s72R2JDoX4L1FwEV13Vg76Jk5FzfToSoXJFLHbwqLWPdoiAk1PY8PtD8CZ5h9pSr3cAWF9r8AnmfLAEz3mZTR",
  "key41": "fwbLzt5DpQAVd2gdq5HvDzbcg24z6WEnbMtfubNCHd5gN2MLcuXmpD9SypM4kpGfrLvt9xNj3AZqu1F8tYmDi6n",
  "key42": "2xcGySn6AdCihEdeLqmBrSviPoTxtnjGhTpAbrhPhZCSEhT6S5sK9d22Yg9z5LbsbpsDNotqxd2EvJHUF8GwWXhv",
  "key43": "3W1kpsN3EfipF5haQs5oWA8LgpNtmPxcAUKquGzv8zfF6UmFeHgqEKRGosEWaLRWQgQPbMCWZuJStzxBLT7aoDYc",
  "key44": "5CfWKCDew1ZJVbjvApT4at1sdK7HYBF2GFtXtBsaz37iRCaExckQ7cW3CPq45MUV13g5dMTxKs2rQ2EYV5yb5eb8"
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
