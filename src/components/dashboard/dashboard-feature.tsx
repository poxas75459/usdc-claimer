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
    "4RwwVAR7ijmoLJ1VZKvruxYQQbHutPrKAWobW4oAB7g4UZ9D9RL9MP7Kg7Dt1fd39taDi6ksgxDXyqeTCSN3ugh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTCCEeDLF8hX7dXBH95vxx12pMf9Sh7mkQVPchfDukYJhQwQkmAku55NF7PhvYMkQT2ypmpTNKeUbvvsHqP7A5s",
  "key1": "DUjBkwUxxXDYLhKMRXTJJszwsi784Dxoyy17BBJkQ3HwHSN6ddNELJWgxbrMs6PDiJLoZauET9YmLyuV8LmWzbp",
  "key2": "3JruFvGKLJnbsqx8UqsqZx1uHimkx8v5LDG3ZuQ5MfBot8QKfgHb6wksHBLTBJpAcXKnq2RFjfr7dngTJWx9ABTf",
  "key3": "4jMdmi3z7U2FXF4gyWqhXDbEtN7XTaUnA4tJmgY7vAyGddvPm9ELPhzJwJnDtzxPAL5dP524UftGCNv2DyE8cfBE",
  "key4": "3teoFDHaxGjZWUxHQxVQMk1ffih3zMmaacgCvC3KVBfGpPCkrcSq6e79bn4rCQ9FCSWisLo1FUGSJxxngehdvc5P",
  "key5": "3sBoFwQ5jcYpSv1MV17k6DvNboaAPVhNzM3gPwfYGA68Wjiw8Nm8KwXhoDbtxDNg8x118BStmVEECYoBz47vAoct",
  "key6": "2EseN2BzZo1XjUUxdpJkC6KUDz6Lztvzzkd3FfeXvcocNQLf1LMjrYPYmbKP43qDggqtjhysyRzU544brDby8bBZ",
  "key7": "36bNJmcC7mxL1Lv7bPgq9ZVtHP1qYBjXTukvctqpJSoQ6wtcesFDCSvvifioFR4868sPQEr4g7e9nvZGbjxrnN4T",
  "key8": "4AwEzGmA4XdsJ34Sj4CiuXi28skGgmVBwQs6WLzGBHnwSQyYyJDQnZPjHRh2ZejDvqdzb7wscrvNU9ku7KHdXmM3",
  "key9": "3EXQuqvTyMWDi5Ennd4dEWkm1YT7exrahiDa57bXhoWs11fV3VWbibDbFGGhXitA7GdiHf7V2G5DGLADnGZaFziR",
  "key10": "5K7nM2vfBPXq6KsBhmA4QiwaxUZXoK9rbR6Gzowwp9wnN1RPrbwSjwyFWqEPbZdrYCQXASsG9xxRuQGTbparfSxu",
  "key11": "121YPfQiQcouKSbbdFhyiCMNXUnzrXvtgGm1HHrRYis9pcAdrqzvMsdp6pWvmZHLMMtFa8YkgC4yfuQGNc2M32DB",
  "key12": "XBweeR7ojdeduwra9psXtS3J2Cip1FJxMe4bnkSxuQX8ZYeega8JdiPaaht2B5jDWBZb9X7bD3sygL7L4cVppq9",
  "key13": "YwGwih64Hu8pPQgZEpNJhtFyFp3e2ZQUZ7uNB5qqpJt8jnZktHZ2JHK7rZMJu5y7buzrg6cZZGbzuCKAuj1C37o",
  "key14": "hKSS4GnZ8pGzXj5fAjaTzpCxz4MK4mQWbrMBQtrDFLKHt1D4D2nVv1r8J8hVhiXd3spWY1d4pzj1PjYVJML7ty5",
  "key15": "4BHg7eD4EZiAmQaWxEAB4WAY7u3DPPtD3qJqbaNt63kEutQqzse2qAFbDgU5BNk7xwVSdaQkvohEZNdQx73jjxiS",
  "key16": "2GZsZUyd7uUw9K229LFTwQXB2CRmpa7nwu18SurALgVAJ9PQJ7tDiJu2b5RZHFw7NHfqkxxFrDJgZ3Hm4UMGPN4s",
  "key17": "7h1c2AzmsQZQ4SJMA64cjvc1DXYRzr19SJs8nmRS1smWduSoar8dw49vD7jrEuspYgftcjx6h3pYktgJTHfk1mv",
  "key18": "4kqxRqE5rBcF3c6FSBavf8qzZinjiWtiu4CjtnGCwUjJWgJTocrXxJL6CMEm5ETCyYU5Gc62gFK6rfsxihoqD2G3",
  "key19": "3XPfyu6URgVriPsafU46254qSkx6E2tx6zdikqs5U8WYDpt8SQLeuYxHymcrNhXRQGrhp6kXXnXgMn269Jmp1ir7",
  "key20": "2YZwcdmBq4h7nWmYQSqSjKku5McSpVCdBmimydQbmsZiAYurkFQjWtXutEcmX9QVgfpLPj3VJTTcsM7zoU1aNJCo",
  "key21": "3Z3BdoxGnwwJNfgFKUth8BCt8vcnkdKoFVwfAmrCFThSQNPYs1Rg43b13ZSYAVqDXikpYzqmyuPmp9Udec8Fbswa",
  "key22": "4Hrq1npNS7ABkiRezAUfkcyWmLAfFxfqd6VrxUAHMiNLiPMsW7Cunoxzn6jW57FXYD3Sgh7aJkV1qUtH5Z5qGbst",
  "key23": "3hzbaztqM3erAdwvJq2XLKobfoUYr59vPhMKbFHSv6enBe6bDeuZiWEyD5vv5KnzBJ3gm832LQyBZLFxFhJatk5u",
  "key24": "29xoobdpMJHanN6byyGzTusiEne4JVU4DCFtDj4KS9suYvDgJPBYTtMFgTYBRiDdcyzKqQJaKiuWWjFExKhfiVEg",
  "key25": "Q1U52UMqhrHeKohe43sLRFMmMU64verSrZDzPECrE5VBQVN7pWwgjZ2E4aT1QpdiUQ6WW2iNvNDzFZEKYQjVfxt",
  "key26": "zvtWnkZPsffHr6nXD2EEx8rFL4A25Wer1GRk452hST8idcDzNzuxbSjcjyJxLx7ySpKCfx4eHNzoRK2kxGt6kUR",
  "key27": "2vpo46cw6SBfrcn9Vx7KV593KG2rPTDctXqBtycnmtm8NyujDjtozAtDzZeFQkZJMgFSXbbj8W9vQWpR8fLSPgJd",
  "key28": "3t9Wubu7Yrwp4aE4o9JJVG6Mx7kemo2zTF38d3phiC8EdVW36JQTagEzkGMjpG9JciWAkTNy3rjudV1iv1PnkqVp"
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
