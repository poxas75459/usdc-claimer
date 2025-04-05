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
    "46GQwvZoaaFMruZ9xpqW55yarbi6ZqjKhSr7xCgS3pnjrgNEhd7WGbzQqibxwnjB4JgZkYRb9RqadEajDdPd2GNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GZiwf3aSrHirThCU1RJaHYGTX3kLvhrwJZ9sbB1wGmpq5RyhRkETZHTw5pGecox9WaYjvahL6hpiSpus6xJrHN",
  "key1": "2Ahia8VzCaajDewf16cMaYedVsAiViwi1hs5hbntuSP4uGqiwbGsP66hX35MEhMo5gea14SvAzdWruvZuTsnuKoN",
  "key2": "oYnQAb8GVnN63VrAKw9kQDAKKB4X2koKnk4TdgcTYZnRsW74zSkuVMEdSqtktGKLYPkXkkaYRST7FLryMMcS2dW",
  "key3": "JwXvCXVfYf2BQ5DoPbfTcRijxWHbXvrXLpp2DU7ei3fBbDHFuQS1gAnSomeVZSELT3Lvy53MMomDhijHEXh9oFY",
  "key4": "5V3dp83hVonvF5pMKEx8VewxWhiVbc9wViAjoXbeua8B4uyMGkDfWusQakjTxb5bBEaZJchnWKVU3NGQZrcMS89K",
  "key5": "248wk3ygeu2wtkqNQaLDDE9B1aj7gTzsFmK3eafq9DmWq138fvUjAUHrJzEyc2Q5FkhysmiPfpUSfP68RozH9v14",
  "key6": "2wtfpHFfB9Htj2zwawT9So5g7iGy9qeNQVYMPTZa2LMiVfsTDKCXWjfwyXV83aFuUD7GLYQHnCwHybvGn2QtQJrH",
  "key7": "5N4ywprA9VPLj5YBAZiSab5HfBXX7GzfAeZvKN7YTpuCEC3wsBwHXTCVnp4irB6KEc6f7V9XPHVzHx9fcBwxtufJ",
  "key8": "3ZtW3PPLjuiSiE6RStMPNGiEDWBjtNrDacHXfBZw9FHddU7NY7cU2s25mEiFJFJspPjkF6iJvdo4XVoaYGJrUSVp",
  "key9": "3USthCms7ZomjDLaYXY9KVuezNx47GJg7tG9WnYhZW4QNZJWXw47L6MWmAAVKbrg2pZ9UFWeoiyPyLMehF326dKF",
  "key10": "5aESiRKy5ed1ZYRhYEQSbiEsPbmVTHDCXe1aVXTBw3Kz5bE2N8b3vA6eouf34wFYTw8euhNgpFYQXgFUHvWaEx4G",
  "key11": "qorVvAguNd3VHef7t9kWjUmmege8J4CgNjVMcAEmcpRkEBwwa3rKRQi89GAbS6nJ5Us7uGm3G4Rtgtg34rFA3Qw",
  "key12": "J925YXxtbN255FGoWHBpNzjifiwQReyPET4ctV7WZi6VEDBM9d3hjT4PYzMEqAna2iwN7HZpUUzqaB9sdCrTFU5",
  "key13": "6GAxSPkCJw18Y3suGFxkuPCz8XptdN9czwTuo3ywQRB2Req4ALA1PZpFeHAN23Ytm4RSVCzyiLyXWHxUQ5fJTYf",
  "key14": "5vh7oaaXM3RdmfCecXfY1yoPNU5mEBHKS7Gzgrc1LEjrx9dWirLSSazUL2zrX1bmXBLxvZMgpqKiktgqRqoNMwrw",
  "key15": "61cLbTHq5WGuPTHRqASnVHXLBBUQhw1DP7Ja18BhbR2gWxtXRN5KnDo3dW91nKF4RUuUhposFy8ufbUuqtKf8gUR",
  "key16": "pPVQfrfMJNLYEULZo3mbkLAiaJyFCMfQ6w2WonsCwmEH5k3UKPzvdNazfDMYF4vyFDpD8NAikNmtan4Hmn9dMsp",
  "key17": "3Efna9kuM5MvwZPyTVDU14TPGyC29WNcsbAtmvCumwsxYCYKaXkmTMcc2nCA5uN2EaKwcvEm7Yr2b95JbfUjkBob",
  "key18": "21K7ko1LrZbBjkN6XU6ok4Jfzzy1dcuA7W5LEWo53xbJrnhe1Z6uxx87gUakjVpEAdUpvWKRDueTc3CTZSz5p6Ci",
  "key19": "4a4xQQVLBCHGdEx4Y7m2R68kA7RhvQ7Eu7eGDLnemuh4JaoPmBU6CEajRNTce7nBgNciuDbRqtjLSvKN1u23bAga",
  "key20": "4R1qQZHEimbfkTDArhJSYn5gkpNhVH2THEWPVLFaSaxpKaBq52NrjMAs3VP4STJzzabT6ZtpBjDTXWZzovQVW2SE",
  "key21": "4WUzfcLgk4ijeS9bbwTSdnYdVEE6NZTntg9jog6GWcfhFWGgvCZ72hJdVGsX2eYmYgQzcR4pNvoR6w7o3yc59ANd",
  "key22": "4JnLcxjbHQdLdWV7QWsRAfHAC7sRXwGGdEyFNAPspNHze4pw3PgCv1WdL4iorVtyQNHvYK3mTWqWfaNMfphougdy",
  "key23": "599mJHsqCP6RYVogQywXC14uAiHfcKgGG2zcKNjHnzTTneeZYaaQfsWjeRdyHXuhjMU8YTLtQPVT4Su6o8Pnyny7",
  "key24": "34XsQfZru4TX8CUugzsP4y959sBFwBCQPJZQvSissvA5zL7gugzpqUZgSNvb6KHf1cLD1xN1mpiXvCKXYcEGTcfG",
  "key25": "5CJZw4Y6iNyuaVt1cAJhdrey4SVMo49LCQR6Q6BAyBpBGTLz3aMuNsXHZnutYVzyoVnmBaAuMJxzuM7qRkmHd29C",
  "key26": "pV9zcoRnH5akF52XrBywy5KBTT7ZvJQNhBvG9r3kGPtWVG79JBz1pV8nSjU4faVzg9qbmgZSnm8NDj1UsEp9npN",
  "key27": "5rBJi7R5se3aGgsFQjc45qCsXWHd3XNMDug5F8AGAPdPM3AiAfoR5xfs4zFc14fTS8XjtyfB9vSB1i8RBjAdLYkR",
  "key28": "4H28e6qZwBiRhwQbQRfhDXcePXLALhzbEW5KTKjwuAvtWyo9DUYNcK6wYr7AZe9QNtT4guLX8rDs1tGfKBhCXY6m",
  "key29": "3HdiiBT8v5uACYHeQrX8CSSwhjoaLniyGGDeMRVLXiAEWAMPvbNv8bfSQ1poxMqcvxGxYNqoQvFd2soGGaC26gkK",
  "key30": "5BXr2M3ctWMN53D8jtUSazyxEibnnSAJdP7nvUCS7oL8buMUuJ6QiRpfjFXqdH8A5CSE4ngsLfe49iG694NHwsYX",
  "key31": "6ufaWzuxvNUDgFj8R268FAAAw3nr3o4xL8DSfVmEDHYSBr7kuVxFBuXMoB1UnTNr7ekryCBf66QgSauQgRf3cpT",
  "key32": "5LUPXk7fHzdTkGkXi3mi346oTVmgtBgDfhThV6C58VvgMAeoXqQSgvuR2BS4FGBnUcVXHtA9p4hWVsXpCaNXyNQ7",
  "key33": "55HQUwNdEZLPqMAwC5qN5kEJk2QKzAVLswnoo8bJjPjNSowxDTaxGgeZdAa73MWJRvGt8BePH3chtiQE5iBcykJ4",
  "key34": "unSqK8PPKZiEmHURME4nJC2nVezUJeqTr4asNEphMCDMoJuUjXmvLBb9MvmLHGvZTeLXRjpJTFn89QESjceJJHy",
  "key35": "5ozUmigwk5bX4YTUU8Y5pQu3v4ZUYzE3rkU3fZ9TtGryG1XP64GVNssrDDLp1oy9hfahEdYnGDieEY1TYcpgw3sF",
  "key36": "3WWv7rdQdKZeW8VnN5Hw6jqA7ZSq3XeJc73c9554bM5sNULqe4YG7nbxQYvBoJXW6LYAuuSXnsVXXsVk5icTFcgD",
  "key37": "5QYYztNCUQ5FdaagEQYKH2NL8qohVKuYDz15rQjGytj8MFyNN6MUWUYpfDrkJLSSKNv3Abfne3pYpNeHiRYstT8P",
  "key38": "66hEHsCPLvsbQsEuc8wBXTAmfY4kuuuqysD77tJiPRk4wAF85794jnYr3n26wRjY76QLK26ToHEUoH9XGq99f62e",
  "key39": "3hdQYCVb3DSmrpo6Tq8wHm82b7r2Nmv8fXsfUL9XZ5cYLTUBBAq26QR7d82x9QTyC7Zpi2XBqWyyvm1bLnnyHbbF",
  "key40": "2n9G7Qo46hqqiQwvqHroxqomoUoLJu9qgSboYND66DqdZ3UnvfPUCUuQ5BKMSijv8KNWRXLGuFaiE7k9fRSqoKaB",
  "key41": "64JAHPL2RAAeXnLxjjrBDTWbXh1Cp8AtbwRjp6dqoWyqE7iefqTa4K32mknKrbUXRPu6ncAff3Mn1rgJ3d9Fm86Q"
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
