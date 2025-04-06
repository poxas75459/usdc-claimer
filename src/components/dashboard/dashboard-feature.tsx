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
    "2iAaNUXGatWiYe6sRDk8cD8PRXk3fDtcCXwmVSW9jegsCCTgtFjAC3eob7hpGk3135oC5by11Cf47sECAccnnN7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJehoWk3C4xUvxN3JoPS5aCmyCbnNgAaHpFvDEHn671fu2yCkTm1b6HQ9XBx9jQNqJko3vN9TGECBxe5Q7uykK9",
  "key1": "2oMoxkL6iRBAfyfrinB5u9y7UtzjHVdiawSGwk2iFcf5nBTDaGJF8Li63rStXpxHLRmiyZ8jreLCzyRi2eb1GkXy",
  "key2": "4uwFABfroxzCRCt7mLpQWKn9itWJZQAUMb3M2iDTfE4drfSJYBZqaWBVnU7rMbQWWZZqZptWjKMDXWLbBuo64HUp",
  "key3": "4BZm4b29yhTNVDH4tSXtF1KokMUZpuw4q2smcWJM3K2MTMJHsJVe5sdU5fNZ7y9btwCH1xbSonJy1e9aTVKeY8qK",
  "key4": "3inTw5UVvrHwouGhayUNN9kFbhDT5tmPeSaTpKYjG9f6zDew4is9Ctiqjk8BzGmbt4geLNCYwcRbdPLeGu3Y5wTa",
  "key5": "2B7qADxe4gmWRn4MmZP17yqk9VuSgTg4tTz2p18JtaLAknKCbvqttU2tEFBC88FrLEn4nE2YMWeReG2Nqyav5jQm",
  "key6": "gGCqGTQRdM3F1DvKWzvt8Zeyb8RVmpNf3CWG5gGm1Jv7rJg1k66ceCZmbHzxfaKYDQHXQ95HkZp3rpBF2Yb6ZBv",
  "key7": "481GHkikrJZu78XPzsEF2nmcBfdzHXS4k7cb11GRTtw1W2AsGWqAk9D86EMvJCuUjn8pXxAV8iS9VUWdwFtxZ1D",
  "key8": "JGokymDyResqHGyN6NeingGdzSnPfChPPTP8tfxaC4DEBkQocr1WJqnzTwBLjWdDDQihzcATWLGZQDXhvF9jbD1",
  "key9": "2i3LzKLprYmjyrja56Lh2nA8XiUcy3WPP1MFaf3rvyEXzeCzqQfUdULaXG58EeURoLcmTFGZtkkt4z1RYZYdRy9V",
  "key10": "37cSX94wv8YLiZxCnNzWX4es9fpWmozY1WcR5kN9YMEYFMLLdMUm2nPo4hxqjAsviNKYP3aQD2uy3Z1rA9GmG2yv",
  "key11": "3gmT8HrSeDmKApW3E6K6NauvQEpJk5huzXnFp8v3jnwKKZ6JkTtGbBqn4dwGF1uvKABRT4u8dQB3EMvSff4jFcDT",
  "key12": "5wp5tY8yvagVDzQxgszk1aRABsBQ65Jq8XjoWQkNFCnixRrrMa1Vxvjrn3qmca7pcde8PU7TvD1iTd66CRfb3jmo",
  "key13": "53zZsUwYiPBE33FHoRfGCMKgy2nxvez4vPUzbx1T1VJP1z7DqdGRDKe17J21p5b7EjHMgycnKA29gtxUH5JyfBLz",
  "key14": "2kAHV4qDzuurw3UVUpnaU3XnUj9b3AeUs4WzFV9E6mrr9bskbrXauYcQsiqDi2rf4K5xb9FwTqLjLzXdXeTzTxz9",
  "key15": "4QrSVoeja6y1MxRwTk2bohuqBHN35mp1wJDttugW76MXcSaHQBUemnvgepFQmxnmUYRLTv6zJLge2mz1b21NX7S5",
  "key16": "3andCxXstsw445VaTkTeZ6ZamxagffJdVNZifme8VqZt4MW6YWJJdUAU2srFFmWs6Bmnbgisupxs5TJFStmZK5Tb",
  "key17": "29jC8vbMw3KVtAEEd7ENMyY9XhRyfUSR8NYAaBG6pGew3C2jdLEQezwgDsvMz99quvJbpsmfwCrZxkzJAxnfsYF8",
  "key18": "4xJdPNxBEJRVhi6Z5LwK2k2hESP5nK2P11HZVW3cd5ufakE1mEBBursAfF8uvzQZNKAC5wnSDy2ngyvhCtELXfk4",
  "key19": "5nDrBk927172QXvspfvs21T2434pH6SFbuSHTTmP7zvLZUZn97itLt7iZNR7BzasqhkBMDeG7p8ipHj4Y9qSZgtJ",
  "key20": "3y9GrnqMfjXTqpJf4BNrxaqrwtsphypCyJFNHmysnw3LQxuGLKFVv9dvCuXDRJYxzmo3c5Z3kyNECEiGbCHwkDfN",
  "key21": "29AwWAg9cywQhdsqyc369HK9Cb8aYa3MdWFELuYUckJz91xHADph5BUqWWfua94kEPVvzsmkvGJm3YrRLv9Ecpie",
  "key22": "2dEsUV6AMvihcxNGYPua3zZy2C7JWeCfBktRypqkYM6ZGFR68P3NNMyU63B9hqBJLFpBHcUZMGJarenwwb4K3zGC",
  "key23": "24MUxZxrqmRrwF5Dn6LABvrt5pFwpWHnbCrYBUPsxJHjeJ4KMx2fjzcf5UGJrshucej9BxbKZPmkPd6KsNXV1wbX",
  "key24": "4iu2dGBCd1jrXz52QHbZM8H2WtQtyDBKgPiWsU3eUSkZWX1HqPvw6MgnHgcv15YiSTXCaA3HHERjW8nWzWfqQQGE",
  "key25": "2pQWbyUCaD61EhziMBjSDX8c1KiCLfuneXPqcuuwtsa6pU3ce75Ji7bdhxXnigt9LFsqCH871LhNY4bz8Y1EqYcB",
  "key26": "3z7QWM1VD1CM8Dt789vvvJkeQFsSU45oC6uA76Ze2an5kiRyj8ZkV1azc7R4BgtzZUrjVTDnDuZkAqkonjmUK9mg",
  "key27": "5x6JYB5yYq4eTkscKzX7n9jfmBYkua1W8dEmqCsB7FZSf4ANtdxErpVjzzirftzWuhKjqngrp3PqQbbEwVy6Lshi",
  "key28": "39uqhnWf4ro6KcPpkk9UcWax9ATzZ1zwL76cYyH9rf7nwupzhfvBmUB6ohL4x5y5KPHjfyCRRXRAHZuB8Ge3dgfV",
  "key29": "4eeLxTxzShRVfuzmXxb7q1AH9MWPELm22meTy4kXcJuntJASu5MSDmvp4Dmqm9fs5VRCvS5RmQ8xVSymLqz7hfqq",
  "key30": "2dFremPMVya3TZ5eHefViXGVcsVE3ak7QVpYYYXaXHBd12iLZKHAcsLkuPaFjD1V2r4sgaMKvS1XiXzQ3rV7Tfqd"
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
