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
    "4T8c7kK4Q2CikugvQorN1kMCYcS1Wtdmf8viFJUWBBbzEDJd18X9ppuprMzUyXA6FKw8bWLqK8uR6XzRu2gNzHRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "896HZV1fFmYLsDRoyDa6dJfddKtiFvP9LaHMyPSP9Yo93hGiQnP7qVbmkquy1TWuKUd4ua8WbFpFQVytwuHfS1c",
  "key1": "3UHbXFFPVd5ywCEBAGwmFLebHg12MmpZkbxRR1AVpAsKfpNaU4uLg2VoawWayf1WH2VcdRGkHzmPyrwCZdA8EdtU",
  "key2": "4ELSFWT8vSJuk7NnqbrY7eMNGkz8CxTnjZJakVwvFDP9f8GsFHZfrdgFuSiNkzBkcHHnnM6zFqXrmhdbhA7mWaUf",
  "key3": "39m96JfcoVrPbR8EXaJhEacFpXKXDwpjLR4NStxE2P7oJLoDp5T7b3zM83aH2DoNobypWTVZhMv821eDvf2jqVq8",
  "key4": "4KnVuM4reA5H7Brm5v7LMi3zB9P1ZJ5B9c7iFwbbkYwRJaNmoqnzC4R1JZQuBorPmPS6wiMnpAo7K6JzsYcRzHbw",
  "key5": "bTYT5Gf7xZ7S2SxbkJsu3SqjXrC7M2kynQiHgtbDJbSYL9jdW2uDepm1p3uirYavaHfhkxiNma3x9in7C1jViaD",
  "key6": "5pVyEYjtAwvrWJqutX5DPvJY6LpmkULn2tSHSexQvdBY1Lp1RHadHrfmEFg6qczwmW5PYLGjhoDEqTDQ7VeSJ5Md",
  "key7": "4JjRHohqu9KQFpggPYxnxijyCVzdbZdUCLtr9UVLdwX7T46MPzwuKrvG5t4xMy1Jcn4ggYQwspX92HZmHzVAeKZd",
  "key8": "5ECpTWx3hY8hwgwP4bwpDuCQMzY6FEvvpbwqCATiPENrA6UEAaEX8YUaPiQ5MiS1i1HJHM3mafFLWaWSFoNUHN1p",
  "key9": "27WbSjmv3sGjD2ann5izW4fswuUEEmTd56UDpZ5aQr7aURnje5o6ybwPMAA5xkrayF7Zh2DA4tN3L3XpXS5NRgUT",
  "key10": "4vPa2x1f3ZSrB5mYgiJQYvD7TSoSiLGexe8z9ZuZfmENSfvgZjqKj1cf7FYjy7y9cM2QYqfcy8VnWp2i3FEVJKaN",
  "key11": "5bE2bptevSGKpCwDZCzujdVNJazznkUjneaT4bdzYe9Ti8YwcwY2xaMeuktStPCQc2YRmE53BwuHNFGeEYjQgw8z",
  "key12": "CvTbE7DbYRjgftZHvc2ZErV6c4AtMrj9SiwuCWeTnGqpww3J5NAXtXaNQPjuJLxx6cMVqwosbHNw2Zqom4xi7c3",
  "key13": "hZhcKB9673MnFPykar3MPDBQMuKqFEncdnCCEqse5BTTDHbe9iAuthZ6qS7zbSmjLstfWiykH4fxPhwRYTiqBow",
  "key14": "5HDkMMJCdEuvvaNxY6yKLjFjFpZSFWHQCnfpsRwNcou3gRTo8g6sBdhwrRF1qH5DXtjCQgXX6EhxdJuY4nUSkUym",
  "key15": "4HBaxoWYF8dskzjKqoDVJLbwmdJREYsLWPtaxCjzzaLUBrGonxPHa2fcbpgTwRfqN4aXpx683gL91VhAtZwpmcu",
  "key16": "2eoRidPgTm1WSyw5KRekwRCN4oxTH1LTTq3sd4KhLJX1tNXC5Q5WvQu7deVnyTECmdGLZYmSN9AUgn8nWeMXEdjn",
  "key17": "3xt2yYfMuVR9958ZuTKs8q5j7Ji8auEavRjNi3oXR6odP9NytQLXD37JeDuz5qCxHyXbnLB5nY94jKpNAvLwFcmV",
  "key18": "4iYBu78ebCgh7H6x7TWhqGkmFdP36dihxQ2PNZQUTh9tKB11iDAqDESDuVFJKD2LWgSwv3r9NZfHiGuqRvi9RLr2",
  "key19": "4cXXwk5pKMYJ8UWi9eHJmoNCACVz8Dv58Z6MXZbaSc7w9dctYabvaCupR3DfiBkd5Lni4cBF2FnEC4Jfxyh45X7Z",
  "key20": "63uxsQWjds21wN6ScAYJHcZXYwPMi8BFP45nND3C3aZ5hGinH91NXsDPiS36NcAuQEGNGA7ZgxCHSyLKmrmyb8Mz",
  "key21": "77scaQVZTPPRXch6jyyJR5MikvXqFHUpjqWrQ2UxN2MQ7spsACdT4dMr6fTGhL35xfL8kdmVemN5ZwEm7GvjW1D",
  "key22": "5wbPL5mTiXGhx3qcP6wPngmSDzu7Jyinbxmsvfoehna2jAxXyUmB8mzvHeSbK8X4kJnvGgY7pfmhwBhZFeGAYGBv",
  "key23": "2Sf7mm4tQtz1dAGhDykZvDqvEBjDhHqPK1X5nWrWn3nsARXPo28mNVtZXPf82eNENuKDTNYgNcbfdMrggUgqZ79C",
  "key24": "gfsob5Cme2c7fTpkuwzsTq8Hgbd4tNFCyzdxLvE19yPbkcFR9h8ewnL7GzczWVxTZ1ZEvW4WVbK12owGyFM7rc8",
  "key25": "3JDEcMdHrcQPBFeStk4ka1ShnExhEmtraEt5v4BXswoLWLY68Ve7je934Z9AeQrAaW6LSmA2GC27ytu6Adi5tAES",
  "key26": "9ejcK8SPwvZB8NKQo5Mq1QNcQrWo19fQXRBKQqoPAoZW7jxuGGS4wgaBpzwTGiWg8Avx5Z6xMGkEKCjx9sj8D9F",
  "key27": "3NHWZWPvudU4mQRyVy819TRRVj7WyT9JjePukpvoyrGMzrMf6XLB4YrmYqoioCCLV6ZHysqUw5HKfsiKEhWERC79",
  "key28": "2jHmchzyk98WwKQRK6AbU9kNoGe38gvfCi3vSJSx3bbirRWjFpE523GC2AhwA2KmF2beHBmd7uQyXNZgvimmbzDE",
  "key29": "4j1HMxGNMbW7NfswkyxRtLvtC16riW6g9vVDpxSriFoWnKm3wyQDtp3Q6g8wCDCBpU6o5FJAM53VxYPaet6FBcNS",
  "key30": "4j1wn9MeC6vabfRFHq1S1DtmEutiR1fCK2Mx48HY6Va97PNnRvwbmCkoiCkFTPVdXCNSCKNpyZ8XSg68fBW4nx7C",
  "key31": "5o4Pty84ih22JxJiyktTnpyBbb3RXDDXJRH4FL2BY6mHoroVwMFLV2eG1ELscGAfFhfcwG7t4twrzAtmZtLn6ho3",
  "key32": "iXj7xUaFCPaZHxHZ6WHNPdsqsaM9DN8u7En72Mjx68xgm9LSbB8UKNwJE3e9KJm3GvHmxaxr1sFYG82xdVPFPLW",
  "key33": "55TS9xJrUKxDAD3wvTr5g8672FDRdLJrjuBvqhv9RoayKHQ2KPLohwoNnot39EUvAopZPpxCZM3uJu8BUyBWTjXe",
  "key34": "5PHzBhnZRqJY1zBfcpAJcv75WRdj22XagEFSDYCNVtzwzaHR8TMAfScLC3Rrd4gWgog3RikhppgDbs2yoBV5xNoc",
  "key35": "3jJgKjBxsqfj67g7vSBmQeLgkmn4c4GH9BM2CwE7hNLACYBjk7ArE5ozdV4koSrC6aTVKtL8jTt5HWMsN8LZvLEU",
  "key36": "i2CYoxY7PGfqsYsWWqxFBg5agDBezwqmBiBS7r5kVz3xkHyuEB7V4mzujEaVHipgo65mFZrG5RSjWQKaNMomVJf",
  "key37": "3ZqPiNY8Ke9BJeSajqv9xDwPHpeV3qJ4Qv6f8Ft7FCpGJ2C1UbitN2FHL4eyMWSS7fsu18HVw1kmcdB3WYNVqdiq",
  "key38": "5vWLhLViPxeBJoMSjiWYHwxyhaTN1KxPH4NAa33JX8E6tDPAHmzBR81wCgUuKLEQPNjiFsPm3pQEvdrSPh4tYiPq",
  "key39": "3v6dhmY3ywMeQfAJkcGoyQEGCj2vkb2Vb1ber6P1TSDNhsG31RmtuHMpAH4pLVXFq4DtTPywfqHEPaddSPaP2WCX",
  "key40": "4QobmnzQGVCvuCA4BRY7ZmnBEYD87LWsv8ixB1j4tF93yEj3EmSWPdg336wSFyLHEsJu7hAMCGPpshMuLm3weyHz",
  "key41": "S9nzZEH8tBNxeNzZt3X4jy38uQmQXSjJKa9D2Lf67WWk7mjCyCHYsg29QdjftKkLTQLHKLHCHqEku6c5kzPeDkV"
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
