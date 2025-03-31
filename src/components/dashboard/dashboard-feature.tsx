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
    "5nNBUfJb9NH8yMFXg58KkrNPv2infqjXJw7SLpV1iLKZvvTXAdsTgzo7R2K28MaShSQKUaWmgYBzYhqtgua1UkHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7QfB7MkubsB7PN2cQ71itgc2wfbqbKQqJoetmxSV2DeA7JMj6BviCh5hZEp7ShNDeJenYyc8UU3p65ncQYwhh5",
  "key1": "qdi8aQCZbeG6Bg6agHKEyQxDqRCrGDvgPHhngd9F6EHqSbWK4CKwEQco97joJ4KvFYPxFVHEjFXURxCXf9jYmAK",
  "key2": "598QBCMGpzhQxU1mCdBSAdXmGB5HU74PWbRf6a7K9FAZywWaqbWA3Mb9EK8HbgC3uzsAiuiZ3SssxNijjGwg9LHa",
  "key3": "25dYTKeuBM3TtswJcb7CkAeofyERPYe2dHz2rER3fcvEUhxAPEm9qDztZC4NXXCtUaVdnpjsEAEo8g859eg782Fx",
  "key4": "41Lpbnn3dEbXY6kEt9jRCoTNa7K7a1sszgrxgL47JJFaoQt6Uc12f7yVdY1BLQQRVeoYNo9XjaZBreYUCxGdMXgd",
  "key5": "3QtqojStKVVNpxZNXT6CKQDeXkTfyEVWva8CNsdGTUFCVa9GR56qGEoEcCKzncxsPTJ5LZJ2UtsrGxtJgNBKk1SF",
  "key6": "2yJzfFvojz7PEcb5M11QnRUzB5zei83rFEvrbNyy6Tzg3CG6R4JdLz827se979879ri7aw12FBv596tS8zJ3ZTVK",
  "key7": "2PmZN45bNyG5NUn2J52gXbKHGg6Q2oz8Q87r96CsqusCiAWwwqFuycnTtuB3SgqYh1nisyRUtcmcp5QYVfob4LwT",
  "key8": "76cU6GpWo3L89ddQFHs4niApYMEtahw3A2TeVqjAkpZUXRSRxZTQKhf5Bsg4ziAMP4BqauA6rxVLRYue4L6X6yk",
  "key9": "5k3K83PA82cWLKgt1UatzdgmSdaFF2kExjfTy1YjR25y8NgYJBkFmaaDMPcEM6VhvAnZusT7Urx2NEo19h9PVU6S",
  "key10": "4wgGR24kBak2tCW28nh3RADbQYokj8DMPNVLMejQrRQd7qmFQ3HK7EFCrUGMYVofzUGWmyxAZQGSQz4ct9LWVnGh",
  "key11": "3WsMpDVPxw7RtB5Vo8yWNSSboGvmm1YBSew99sYeVk3SGmbHwEXKtDyYCJUyPnpRJPciFDf5qnEFZwjc8exEmfDV",
  "key12": "4UTKbMbzc2qVKwh3uD2AgNcbqphxKE3LVZrMWEfmNfVPs9tRMhCkJprr3CunHPHC71Q42vfmgRUDDtBNofLrcyU1",
  "key13": "3nX138fgjf2gKktiZxGi9nRSYxXsin2s3LWmKkwAtWmKALRhphRPsBXnb2Ema1C9W65jC3q1uaLo3Pj5NLex44g",
  "key14": "2VXPsHQithbJ2wpQrdv2WbiQGXoqWnjtAWK9BX9EPhSWA4NkVrrbVrQSHgSdsrE3hP4pLnc1PU7NH69aFARHJe2y",
  "key15": "3CGNrRhahJjwggUWqgaZTDuJdM3Z4n4QQGSyjHbGHcAXR5AW7PpAAkztRXrmNkBRbEGtvxKDaeaL4ynxn3Qk6HmU",
  "key16": "2J3uuj4JonvqcxjiZujoR3AUu1TCWcmwCmUnS9hEjiSss6Vx7FEnem7Du7vLaYkE6QsaT8TwopscSgajsCRWCnUC",
  "key17": "FaZzXARd4BvWHwAq1kCHPHZAa5qQNpt8EGSfRRt7LqChsvSMzdaG9LQAgzu7x8yfBLwHh1JdZeMZFTBQdd1HyWK",
  "key18": "5v1PvSnNLnm2kxyg3xpCd8SpzqNvWfqyFq3hQBG6pwxp7eAxVy53845ZuBDXSoPNUAs4aBNwaZhYnBEarRmNfKn8",
  "key19": "3Pb8EhosYfT15JVcVsSaBXavFE8FMFzbARRWofbApbcDiKNUmtX9n1xAr2Q93e6ERCz89ifwePEbsp4heztbqg2G",
  "key20": "58DsT9VQ3sWcrPkdJ29D2UtqmwrpapuefYXidmRG2WjyYXCNZsPiuoAxs33GaGg25aEH8MN3KUC9oy9giC1iLP9i",
  "key21": "3R7V9tZvmPRLU71ypv9mEwvxDt4W5p4KjHUWLeUBi6YWcC9q4Q4Wuib3DCeD1nWUsKv5aA5qJLscbSCHok8vW5vH",
  "key22": "4TfEKqGkAW2gfTAMasVctG6ScYT42a8V2pLezP5GnNPkeLEFe3rVQU92TPQT6BwjWAPR9CKcb7fCDkQGm8sEEH9h",
  "key23": "55nEqaKEhxP7uPSSWFVrQ1t96XdH8saegUvifr8rcAHfWPa8KB52qKt3bQTDkVQPwUu3sA9ytxQcaMU5jQtKPsYm",
  "key24": "2PhzJT4CChtG93F5Lq7UmkZ1NRrdZTqvgafb83sji6RNY4axVEqspg4Edhmhbe9WTR2Gm348hmmFRmxdGChu5AGQ",
  "key25": "kegnBn7K7oAa8vN9WTZYhWaqcuj5djhoTF55oZjLqQFpysfUubc7Tt5HT12WLaP5Nd3mtgPt2tqEkaWKarDQME9",
  "key26": "3PGN52ApkuhvzadD32DWFQSsMh36uhFHq9wAYw4tznR3UxVJf7hxgCQMonD7bpd6VJDfR3etCYhw3Z11X5ozJbWN",
  "key27": "3dsGe8PJYo2WMrJEEGSLFBHZSgJD4pyYMAFc11wxop3H28HrQ8HdfUKTgNjjtKo1rNs1cWusebJ1ordHb5URiPoh",
  "key28": "4EFBEGLxSsjL8CiX5EdwHnG2QYBVuCWBBCBu2hroJU9da4HM4LgZRLAHRoGYqCXoJRgPdkmatjsXjq5PJV5oUyZ2",
  "key29": "4Fduwghz3dJn7n6wXad14JAJ3x1Ksdk8qMtXgMAqi9E5uYpMX7V7nt3ad3TcXfv3xyassUyAgeS3e6ATWDYjN9Dv",
  "key30": "G2LpX65bxXTe4MW1pHnHYYZMk3MqTnRnbEXNyUiCzyHJYn3LR7QBEDrtrU8q8pfkcALgSbQeyZJg2HrRARtAr5u",
  "key31": "39bt7M9uvL5wZ7boHa98MJ7MYoBwUxXzyy7NLwkkkP1XkdUJdLykn5cF96iPA2rPzptW4UDNZfARdbRdVsSXjwVX",
  "key32": "4KX3Qe3XbwWGiKmjVRDV54jdXyGRdvn42rWUCMyhfL2jywC362TgAtB51aAfrvvLfGTmqPuy1BZvKF5GmhvQL5fs",
  "key33": "35BJrwwVmLNt571evzwWov9Qre3gvFHN14D7KTsrBDndTC1aNgcUfJBkmJTyLUkWXpKfHnXiT7fuo7XUsb2zjtBJ",
  "key34": "5cjjekf7w7aw9TXDcxwzQgsb6niesAqoYKeor4AdgoHWze5Z3xK56yzi1SAvkLjnGGuPAeQdFhfxy9xHkD6LENNU",
  "key35": "4R2L764gxCvcEv3mhK9GPt4KSCjS8dTAELqyqXhLK2oSm35oqM3jEr7XazAx6qm6LS9VUZcebD8FMkgohsbeKnGA",
  "key36": "383sWGvgdMcNCRYGzvArQwY8C2zoWWWYtMtFCnCoGrpYHdRgu3jyK4MGquAonUTf5vsytUXAn4heTAJmAQCSJiXK",
  "key37": "5MZyMV51N6UxYkS8ji6d2UpXz32HMEJZ4TU3zj2LE8SX1PHu7ciZ912Zffvn3CVRjVFp4ZxxprsjVjvaYuNyTXA",
  "key38": "5CLbsjBiM9eqjUmhCK7FqBkrbRXUNv6q3hNmU8fc3xkLnoWRg4dZvY7tJJToqNELCyHTHaybQmxngpoiEDvWmYLG",
  "key39": "3GKR3RChBroS8UdgMDUsD4ymh9X5jdc3rfEnEu3Vagzpadae5pr1U2CHrmqZVb9ddGC69ndJmHWFXxZXhjm3M9ZU",
  "key40": "4i7c3MWUmEke2Ekbma5nF1uwXU1frdXMN6keMCaLL5xzv496xxkreunPN6nqMjSS68EBGQsgHhwHDYdivyY2uv3N",
  "key41": "2tvWV7wc2UeGiq8kTnMoPAif7vNjTo6hiEoi5KdrgZ4fg6YZBaagATLvXZFAJdZnRWYdRYaUpHvBAh5FvuKSN8Zy",
  "key42": "5sBLix3JebNKanhyD9JkjFVdN7QewZFgYLxwTGK8xUPsaTQKDpZ2M8yjDUtEsC2emsdBDBH28Y5Akgcj4vpRWddz",
  "key43": "3dcdgrxZFvY7yoRU7wFk2SF4KXm4q2at2CtWWLgcDEdZbaEYWNiTJDqAhnn972Gh2yXj3bJzT97L88rbTjRJutfL",
  "key44": "22mkxKVbGKxC4qkxKJwpqScLJjaBLc5bhLu6r24AffmH41Q11Z5fKK7VEo2xpgZLHvutrKyS81PqXj6K9WBDHxiv",
  "key45": "2e4VW97XrJM47DM3KfovFNy5Kn16Wc6NW9zQYdKmyc6HjnGZ68HxmYe9NyNJTom98xutrFs4ML2uuS7j15HCje6Z",
  "key46": "47oCu5vzE1zoKVbW9aziCVy1aLZSYQ8iHXLUVYU6u4nSC6AGBRzV4RCvUcHNThpMne7TVoFk6x99Mn6sTDMTS35U"
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
