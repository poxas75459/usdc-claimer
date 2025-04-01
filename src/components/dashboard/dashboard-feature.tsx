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
    "XC2CHe4zkdwhLQqgByP36XjddwyoBA18QffpasokGFSYkWcKP37N4frCgScJmvLabCjxA7Sbo8eYPC2AyAuNrWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtvtKpmN6HuhABnM8MLLcPFN7JfQCM3gfidN4hRCSf5aei7Vv4izFVQWwfh6WdQL5q2z8myDE9rXcKuLyhY2pMn",
  "key1": "fYEirTjxHcvL6DpXJYfdk4cyMFq3Hx5My3uyDZxMjDr4ggh7yJ6LY8yTBCBc74cMmULxJeznrnzaBwEVd6duCjR",
  "key2": "4f6pDRhxBw26Vkkm6cYQyCMZ1zSuzA9Vvi5mGqNyjmwe8e8YuLSZocWFnx3YdPdTPA5M92oqaAH1WmiRvwepNWf1",
  "key3": "5pTJeYgs8CWnxvXqM4TzAEP2jAQpyuWArm89KHesJmUKBn6FgssJ5fU52jygYiaEfj9XkkaZqTwEE5Ze2srt7T8W",
  "key4": "67j9EFfGBS3obLK9dxr8Bgg1pwZMY3oagoLvnPso3WvaDTQBN7xeUEP5tXC2gogjX79e8Gf4cVPXWGoH1MNx3QHj",
  "key5": "4UjpLuKSDg5RN7aASUsrsdfzg3Cxay7jzhY7BjNoq7zxmZf5QpC97hryt56mDzwWfyRukJKDQSv7wihtd3N3mMER",
  "key6": "2r7yfSqNDtPTTC9UbDBUu1wpF8uW7VZbgATUe9xfg4jTPyhgAfWRCGdDddHEvEM7wrY8wCSbfCMbqjjG8VMqwyzZ",
  "key7": "2PjhTpXX5rqZQN858Vc6a6jGVVwP7RgTgDS3A8oS4fB9K2uq14gkC4xVownkNfYJ1m9zzSVh5QS9wR2kaSvVFSRq",
  "key8": "4J4YXUW4fwZQaDgkGhwjZh8535KoubJDQXV1WoRgeKsHXod1xd8ernz54VjNpr55U5YGJeFkWBu5X1FWycBS6UYt",
  "key9": "2a5ruX9G4S9Hsar9uZNF6NiS1f79xCDRw2teoKhg1wPvkVWZac7419nVk7XUHCyAcCDs1ogbmUCtEZYxZxsFjQUe",
  "key10": "4Dv6qgXQG73WbadBjLkeMp184TEkE2NJxS8DYD1E2cjbYqu92UzKWkXVQe7touAcjBawCLn1DEqRKA91ws5MMMXa",
  "key11": "5spiP4UiUC36SGEVHJaPY3pTrst2eBxK1QQPJPtmbbC6HmqThzVUEo1FHBRvr7AHBxutTXtZAJwbgyakQ1QXqFUG",
  "key12": "dV8Ta3t5dKgkXoG5h3buspvBQRxnHfJFd1GWCRALcDYpJx6cmBmeF6E4PHL2d1Rwniz6AZpKJYfdS4YrV5iR1GP",
  "key13": "2Z1gGUPJvp1VLV1PACxEkS1RANCHpRkbcq5iapdDeXy9GFZdWWtRdZ1EkjHdDf9N3DxjstPTXDgv9kJtvjaWuVs4",
  "key14": "3ip7WFPDuHnuuPygAM9ZfjV15Vr7Muy1s2oMnbyZUodQHA8M2bRpvAvor9i2zmUZsDFHKFFubieHg89DfARaRr82",
  "key15": "4Kx2tnL83mxar2CJHxFaMLi5QF4bjzV2SrNjk24RaYi1L4qPnzBqZFkr3QRJByNudqmACESmQqcndA3FeM7bDgeB",
  "key16": "o7JcLftvsmfgdDTnDYUSwGRHx56aRHApLaXiR8N5rXj2UHy6NCqdZRaDoR8UG2tm127uv7J9VM4H1rMkqT6dfr8",
  "key17": "RNWVnsQGhWuZMD7MTtYz2BSCHEExoopXD1zDMip2xBEcQxXdiGjpU2m25JwvKBo2XZycWffAp33Svnh8xLX98Pc",
  "key18": "4pSMMkvNSiZWMmZkLtGrLYYSxXxqrbQBbL2gnZKXbKoPUGxJtpSmxvvuH7JaLv3Yc97AovVh2a6Mpkz8ZYXXRGL8",
  "key19": "64aMaDN7rd2wi47abSCpduCAXFp9GxW1aacaKc8rz5hLE2xQF7GyeGficcgdiY1w21EvBssEYrAv7jSSWLSaAhEb",
  "key20": "5W2nHErQSMwTAYvQXn2UY88ESnMvbaVEH8mzAkZUtpJBF6awzmpAEDJVPSxGyCvY1x2U29EtsNNbaCTEAYkQ4Ekf",
  "key21": "2pdJzZ57MNhUbHsqoF1tHcChhFBCDbU2u5H2LA2ps81P5yCVbiRCwFrFQ5XQwhvn85A77iYFZTrL4Y2Av3tbGNAp",
  "key22": "5g9fXXywos4zx9NkVcmo9aHTSRqmaT3Yow1tZMQWGa48SjBkSfcfMUTtYsNLjLGkuZ9CGkw2fjjuWJogba9mJDfG",
  "key23": "3o5Ms64F5Ed6cy6vZzcTnHeDMuA12MRbitVsFjztXmbe34p1hAJTEmXqQvSS2SaGJcjMupM2i9pKNiZYsPeJUoTU",
  "key24": "26yhREhoMN8JmWdXMaLWzk2fkPJ67H79Yfz79NYRgi2BnoNeDApyf5vaDF4Dp4GhDuRZS6VE2mV8EgoGJZfeRMZP",
  "key25": "4bmRzDSDrLwnGkDC6BVvmbLV9dHFR9jjEyTurdgjEYukTt5PcpC78fmuDmDR5AG5ER5VKHya8byw4VL4zEtiviZC",
  "key26": "5F37A1N45EDj7W1pd8zNnwGCQhk9xXDiMY2YtKpG85QKiuqUp669mLjG3Q9eAApdTzGN9qX5ie6iekYBqwxbtHev",
  "key27": "5xxykDiCxPNdxfAin47mQ6q7qgJLYKqfhZjycp19E29JsqbdZHWQxNULUbR1vMFWbWyw8jJ73cqSGFeo9JBbBcoW",
  "key28": "57yoXBENxABTebQPDqx1uqU3nMo4R1ed7h5qLgRJ87ekKmPRe3GQVGnY4XuVJgaj9rvFZ7XpjEAGJh9njKFZjvpk",
  "key29": "5NRh3ovqM9d1Pw1gGoBwhCCQeKqgTJFyHzaBr4Hge5FpgUZ8b6ESnmCuKqPf9VSxHgNENCCnpLh1tcDu2iwLVXJw",
  "key30": "fTzLEs53SmWivZj3SeoWe5Fen2HxZ7ogvQurFkAGb1uky1AQZkVUis8PN6jX1vnWAWUQ9VSuoz9KaMW5i3LytLQ",
  "key31": "2iu8Zkk61pr3aSagQniToKspsskTNFpQjEEXdVxJvB55NwMEkFkKqxLfEwE66N5w2XuiSjKd7nybnVWPzih4hucC",
  "key32": "4SiJPKJ7d9VumH8mFK3rsqNAeSa3iGRgLCXKb6qvqVAiTPSNRXNtjDkEkWDrSDUAQAt7JLGP8MK8rEXvGhGjecyF",
  "key33": "5B9wzYy4ZE2TGmHiykxWTw3sYdM2d5UuUgaT1H4PouvKbVbiXwrXho9VbuRREgkvL3pN1QT94dSYXpMN4iTEzEMz",
  "key34": "3UsBqB16LnYRy8ykrP6cJ3aHDUNeUEfu7QLqwVHuTnJ99RXUA7UtaicL7h6ow1XuZHYR1kpRDD94zvebnfZfdgtB",
  "key35": "4fKC39JMeFTcRZNjfUNowdAptu5B1m3HfDodZKrXHjsoi4yjo4ZCaprPEg7qws9wmRSCsZzuh1RTTatYiDhfSYX3",
  "key36": "4FjaZDgRmWgjGoqUqQyn7rtqvCyvAkRkKtUK5givRSqKUFzaQc1jK9UrWnnoFhA8JZG4fwZUELeXHXQiWhfgK56c",
  "key37": "3qzRaqB7vr3EdYwU8qW97k5AN8Dhg8DsBRpF13Jz1u1k54XD3ycaJc25AzFKqibmCTbrHR8xKViVLcV1t5X9cJno",
  "key38": "5fvAzwKfiymrVL22NAW6eZqQFw52reRxbCEDb1kZBw8AA4eVanYgcpZSk2UXsLBzigxUxqCRN4PvMn1CWtc8aNmj",
  "key39": "KmFh7TAHwiWydkX2kEsD7d1vP6syochsSU4xY5NJx95DunkDqqFo3GhVHV4xPn9Eavze1fGPq8Zad9oBAZq9pcV",
  "key40": "3C2x9bdnGonMaKqEuYJbwtLeSEi2gBokYD2LnjJ8yYSvtEG3UNCYkeN4p245aNWXPZBzouxRZBPshFA736YQ4bLm",
  "key41": "4TjMcx4YL5cRMjbRwMaU7YS2dEHdrccuMkmSreh7rQDTsfZsEXhhwJ1w5tYqUH7dpczCFCqhkAesdQ6m2rk17bqe",
  "key42": "46d9XdDxNTDJdjbqF9C45btD5Zr1DjCvp7Qe9a2vDtkyhhJxXm5Aj1rs5VseQoY1dzaBzbQgEqythtJFfuiU3gEw",
  "key43": "hMPPaC2bUmTPT6tetmdCYASRANhF7TE1Sw1i6zRn5nwiC6xbwAaacwB371A5MjLyBeAf4nCYULHYvbnxmmoo92p",
  "key44": "2LFSpnpUSZLvN28bVpg85Ztitmfqr6BHH2it7rs5hM4bG8xdv9CExDubJjEUPnNzHh2NQXtz3d738xWEFFQUBQFf"
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
