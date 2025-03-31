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
    "34MgyzTM2G4NnA1evh5rsZb9Wk9u4c9mH6hQ2ucrrXBeMEpadkskCMxaTowyRJ8F94GcULvqy9nQSUqSqX6gqfPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmxLpFMEhArbdK5v9tEgFDdnHbxTX9iVYTGxNhzBooeeWZiRk4ztH31xhJsqASUJoe2ZnhaAHFKM3ZfMK8RTrf9",
  "key1": "49kMzZTvvKXmtGuuHXfTsJUKMpw5PiP1rg2oBtpL7sqfBL1Z3GGzSf639EZ7Q11fbd9131G5m4Qwnkwg89Zq1Xrt",
  "key2": "4gbahcbX3YUyjGW5P1DTMbkGiR3Q4FC6KUUyYKzCWafipB6wrbhx6uwnum4HfWG9wkhjz3K1tUQmHDP6TbrJ11Bj",
  "key3": "4Buu9csdLFTWppumz2tefxsEtVfufhAjntU9U3wVUXifdKwCKag3ZMqexBYtQ8muEY2iLZu5htSyXeatebZNk5W6",
  "key4": "4wPHKrAyKQPRBxZuuGsHueQx28C3MaSjS1ZH4bBLZH5CznJZZdRUZto8uxq5ZM9heAMEQvNmqMY3jbxDezXS3gpn",
  "key5": "33RRM9dx1wugzRopwcER2tpZuUMBSjYD94wbdbuguz5cercFK2tXi8hjNjhjXvDfrJrNbaj9cTx8AUyGrshgRYnt",
  "key6": "4ATLVkfkuv1yQn9nwnudHPAfp4z9MgMqUsd56VAjX4JMyNQf5wCkwcAESHj8b1wYdhMozmwr25WVNkhPfrRufTtk",
  "key7": "3M56HyLybmS8UCjEMd2wvUenqxokMtSFFiTG2XWm9wUciH5pLY8r4wsyvCvLpyiQpAtBjYfLK2zqEGTruv29bqkQ",
  "key8": "3oQtLHMNyfuut7H4udiUEodwJNDNcAPvAN5xXEj3NNqHE958cyGd2iLaSWXd1TMp5qgfyNrryfCH3dz5C7NmUfQU",
  "key9": "hUbc6oWV1mQjUJy68QVd41iGrbtEADm3g6USb2LYuSwHrfrEWjiHJJ2mK8u4QHT3MK6rGHKanZ8hzGZNvd5EADp",
  "key10": "5Q2Ek8zGV5fTHdV8MuP5uGu1NSBZnMAPLUdGmAUc16x8ndio7DgpXJHZJtS35wnGFDk9ReQpm5NS9R28gj8d7zUm",
  "key11": "yccJABvLwKnmW3MwCgTp1RkdZ7wV5onbwX3QreiNCnCH22uHDoiHu7DeA1FemnwanGpvC43HK4XLzP55qB2zMXn",
  "key12": "5HekqYC2z6YEhYSWwVp74hyhyqoZJAWXV3ah9SzUS1y23iGaha9RE1yFhisevsc79LJ8m9VQnNRJZfKdJncuAhTs",
  "key13": "TSRkHXgUBVKvVHSs7uh8VHWotzwciCeEoYjJg8C5fJB5bXbMfUqd5cwunKSwV7q2Zx7YQrHDQeivdvkyYa5RuxP",
  "key14": "AnUXdPX4TcokpX948BCt9xbgm7pUDCTewia9n2KDeDMN9MWv4n9dGwj8ypybN3rVCxHGcoADNGXzi5gTHG1VDLr",
  "key15": "2a6LmCBAuTqoLEjQXX7vqhHNVdqDyy3D8QGaT2NphWo49YshYkmRUQxEev71v6gCYSqRHLNZDeRMiCuvBKNqGsUG",
  "key16": "3Qe1SsmuTmia6xjyCyCa2xA8UN44QTagdrJyU5bxSMAzZ6Qa28nooUCmMECf7Duj3gV2LToxGxGHJZiK76PmdDbY",
  "key17": "ndC1W7ARMtJPKJscLPjyyR5zk5pCJUU7XdF1vENsLraJPhBdWP83nK1KkLnUTFzCy8xCvaJuCrUfSmEDu4XtSW4",
  "key18": "2d8ktHiUMdk1K7ARTHLF6mL1PFDqEp36HnBSQ3rv6DoSvZLJPCWM9z6L5rejCGSKFQ2vNJczeEoLTwvpwm1Fkq9R",
  "key19": "VVofzGUsY7kTXUFnHAUt6XisD6fgUXEV6fGRftJeReYzhVfqKnjNFo3LrZTe6squbDnhHeXJbGgascjLbKLieax",
  "key20": "3aYA1wXtdKJwFXqHwDJyMokWe7uiPZTktKqEqMzXEVwUYApqXMaj71GXsRHMJCw9VuCzFXRMWdN2T8YdypqBvCRg",
  "key21": "qtXkvE36mLWm63stGzA3hSZWW2wD963gmGyvjKhHXHtCBDpUeoLeVvxA9XLYXxFmcoyAu1MpyLp7oDh5oNudPqP",
  "key22": "4Q2UZNBuEHzD6wVm4ar6CfatKYuexTvB7kjiswY3njMyZ6RE9z9EcWoY4yLRqkgtYiJyAJFrXTnfGXQUDB6GeHZK",
  "key23": "D6VoV8A4QLykyq9ZtZJTYvyR7k5woCLFbpBTcVvjcHiZMdKKujPtwbpMxGjud3WVuDEow8cDd14SYat227xsBSi",
  "key24": "3sivkhFgX2fVT2CQxJk1mpfYmn2FdQ43agmvXQctDCYhUaa7U1rvw1psXyCreooYupYvTvVTq44bhPqjcAj53W2S",
  "key25": "4wFH83CnLBW7UM5sBjE2suoBNHoHQVTZa8d9fZLxJJXace8QuY3DuPj79EX6znwuWfhpE2xZQYwcFUo1tmEYjjLR",
  "key26": "41dzRyGeU6TwQHc83giMp8LaCXyCymBPrxmEWq8vuEzLxPq334MC42dV4gBjbuKQWZUAB33DPj6WoLW41L2QbZtS",
  "key27": "4Egk2sYfSsF9Kn4zRpEtfJT2kvAnzwLGKYjEW6SmUZYjQeDK9ZUmKzU9r5rrcQnc1VWxr4Fd1Vg3butzb6ujsxpw",
  "key28": "4hJiStezQhWT3KmNe4HbiQLrjb8pPJtqpjsKbgPiEBQFwTHHAXRmPXMr7fyL1cq3Hgz98EDtAY2nBbm5HZTDw7j6",
  "key29": "2DoX7sMypKopHmMj9unwWTPKZTyUSUAWPxKA8jXndiTUXKZPSeBF3oJ9rSjjH8tyE8Zb7RkV2XGRSWQZwtJRnxWB",
  "key30": "44MWu7KdBBNH3tbC5iCQ1fE41baUWZydecC2X1B4JsdTKXWd3yjfVmPfuAqs9FnRsSWJXhbMiGmrjhNk9svLUTfT",
  "key31": "3Gmjx8jw8xdzKWdjZYX17AUkZSRh1szYUBjhbi1JB6SGhmQ5FNtvjBrXLM3hmQdFzQvnDcNcyziQ3aQTZvetsLTq",
  "key32": "2Dz41JgGNrijNGQGgTJv9aRoTVDLasHsLrs4ZMsinuHi8ANeQtigX7kF6jiEme2WYAKkk6dUTJdzNMumQCAvbvUK",
  "key33": "4CQnHX9bHbtbmZdWJkwgVUeYV3Z7rCC5LrFoGG5EchSi74ZtZeLsbeGgcEDnYNUVxE2ohuwEkaXRx9R6Jh3i7bsk",
  "key34": "2QLDiybKLkcrKUbUo1JYgSsaMe1VTmQwgdWu1CTipWzUAck1vYU8fQ7Y5a2hQGB3C5pbVEiW2S9NXkknySNgQf2h",
  "key35": "G1W18RYDTdxPsw7f5eUoHr3Y8b5dzZPR7XZbVFoBEFutmV23rZkRMz65CGGGruY8YEarLqzTWoWDzysZbmyrrWQ",
  "key36": "3gMgNjhYYjShAZKCeP1KuB6oEhCsNAZmAybLAYuWEhvSmEafQra7i5fhuJY5vchFzyipWw58aXYnGx1TMaV21kLs",
  "key37": "2qgrSv2BYg6wWXEzt2onYXzP92H3xbBBRB5WiKqn1beJoSDwiWKwKhSyYeMAQWSnd2PjoW3eCCJo9rSckerKewfr",
  "key38": "BzKuf3n3w5J5Ywqa4vcuyLqWCokoJJBagiLrYznht5m6MkwE9QinT87ykWVcjrvmMSdDxmQguajGoyrM5wkWC4G",
  "key39": "5RemWZWLHKwhmYJJfjxUWw9CnpoPdkEdJgG5D3WoNm5nFN5Wja8HqRAQyDxDi5f6FLKG1VZWrPWyks3YkB9hejq3",
  "key40": "mFHabeXCPjqoYDD5ZPsKMJSPkzY6yxQKPvhWu58UfoteJEnPSqw8DeWPieJGAgWTrN1CSPsNxU3zgVfECffayH3"
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
