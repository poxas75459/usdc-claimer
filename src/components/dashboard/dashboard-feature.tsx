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
    "2YKkwKTdyxhSHdL2yKx3gmTukEnE1xtzXuYsX9vtcTx9mghybBqEztsXVo1FazyAeyZhQtvHKKWiKsXR87kNQ1NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8gJscrJMnDmp5dCHb8zdLyyZft4kwm8fUBaQK61iUZNi5E6Tj38fzK3ugqTCzprc9mdegNBLqBMe9YeLei7BR",
  "key1": "RRX15UdX6e1zd7R6fZS5M7GYJtfCrtj2ptDD8RL3d9er3oXr3LJX2VuNGNNZU6dJJ16MzFE2eDdqGXeHGToVmT5",
  "key2": "5FPm1Pdobfm5UmUYUggRyQkmEFsfN4LycPaHGT7ogvveYpPi3nR9EUbXJwqtDoBD8HQXsXdQ3XDc442F9y14vXXu",
  "key3": "5te7hVfn3MsSWjhhcCMYbuUBmiSLV4A9SrRzGE54zcpuk3B6obWqQjDEdS6NZXAjtHywipmyWjPutCGsWJjUESpz",
  "key4": "24QCrZfaBBqMQ5gBynyZfcNwvWVEtCPtuox2VMJAv17fn7A1MxgexSVMNa3fNQtMX6sAwxi77YSx55CgbzcycZZm",
  "key5": "3YzvDaDU6mC3pqUGUfxcdLDn7azTQvczBAWQ9iu6XsgWZaKXy3oPyoQfdQMPEwcafznHp9eCsGfhVcEwEbJuN1zm",
  "key6": "5yLRxqwLNRQgEa9YTHGiTND5Egf3Kcw1fMoU7MsJVYsve8tU2MpSwDVu1PA5aKwAAn6agY7mbW96NtWHNPJdEdeY",
  "key7": "5RQtxcCRhzMVy7z6AEi4HvAz2iFBkUd9xC2VCnZA2fqddkgndABTehNcdGLDME5ifJoVVpvLUqPfZbfr367cZvtD",
  "key8": "4vDTRGLRgbD2byquAJJmfPRDBJcZVqGZaA2hjjNEjoteKEAHkM2YLK8e4o82NboJ1ezedEfYh2TTg4N8Mj5Yhxeu",
  "key9": "3mWVqXrVhbiaeoMpFsxnhmzXGXWtRwJC6ua727jtXH86jePMVepC5Vs3FJ6XuGQSzPrDtoohgqkYe65toSF5N1y4",
  "key10": "2KSoX2LvsYNfV6EQUpvNsQVKuFPu1BVq33rnFR1TvTLHgn5SzJaPHHce6uPXvPmjdhxtg2Enr3C4RSJjkSUxYgUS",
  "key11": "38AgUANxhbzSZvqHtdSxjVk2bSEd6crUfDGrPS3we6XPuAa15xogV5KvGrxSoBewGT83o7iYwv3FTrwuPPTgKyXX",
  "key12": "3tyH6RS9ZkkwRSyMVKwJ4oKiou989QHDZ3gXLn9RL6fMKXnAQztcGxde8EaT1sgXrDaaKw86a761zju5Czbf657g",
  "key13": "5MKmeqJhsYj2pXyFd9wciTDwterpFfwZ9XwHc8tLZAH9WUepM3SNqQiZm4PMsNoRLao27ohNvaQUhKcdvkcbTLNK",
  "key14": "jpuNx7m72S58xJauYypp4arFrCpinmeCKwVNXUWHh1fByLFhFzW2tsdi6Lh44Vdon53YBHyUjBB6gwnxY4bAt8b",
  "key15": "5Ai7VQAoCBR45CBpV6UVee9Eja85AKSSGnNmabHFoeEiqEMkMQRFcVTtgh38rqNdeX7yEm3YFkHwdVR1gcwrPa5t",
  "key16": "4jZQK3U4tmSxKhoTtzUTjKdbSufruLbLeopPqRPPpPvhvK9LRRP9bahfhq7xEvDMiFxJmhrLjt43yKP78k9q3w2i",
  "key17": "4GdNNf19w6ndT6G7UroJJhniSDZ4QDya3SGG3wAg1YVmRcz1Sfkd811RJtpZBKsKUhHvXjPfnMbxzz4kx8brZvxj",
  "key18": "54ZZJ2EQ6JFVis2XR6csXKc22aiJns5X3wzEZVKKCFkhPtrG1Cw7gsfHDZAa8D5mmXjVM2AnBBE4ycxSyCnHJP5K",
  "key19": "5NeK3FDfgZRu5bkxCybMyLQashaDH1o8VAxdAws3EmPBCeV9ihv58sN5bwYKH6tnNz2a2iPEyc9R23UyqktajdZr",
  "key20": "5DugBrXyMdKtnQsBP8Y9qHi4KaC4f8Q3jPfUuGKV77nZscyiVqtHycrsnUyZYtDWrzpYegeYkcx4vS4Gud4iBuBo",
  "key21": "3aPr7YBpW4sue4gMbh6uQ6z7dmjJ2v444FUajWocyA5g4LJ4BvTVYHCAmi8SKqMggzBasJKjRe8z5UPpcYahau2C",
  "key22": "61hCnKJyfWApK68cPFeuWt2H7GAfqEuGw71r4mdMQVXDHUZbHYdyK1xrStFUgqDMcRs4FMkxjLf6AFr1GVQEAoj2",
  "key23": "4E4KzSH1WrnDx59p29fcbAZftzCsK3nJEognyLmWhHK2gjYsjNANtiwZkANCWJTL5AM48mHYeBJyY3yre9vkD9ez",
  "key24": "4ivw8aEVN9YCJafLtJe2R5bWZTUU1zetgtcuDUsF3ZDcjCtHqEKD6oK8gj4aKvLTUD1SX7c5ybnKhb9u163pCYuM",
  "key25": "2iGSNYDJJRfmNkjETqPw6AFMi7ZekieFGv5xwfzA3CuFGdfpjLvHqh8NmLjRXz1WRr1LAsfGMa7uBfi6y9HzdcAF",
  "key26": "2CtwgrhMvn7XqzSPEG88FGEzKPCtACwXEozKiXogmAH6U9SBhUqooX2QyRed2CRLAiyTRApD8zw4Vxtcrfuj3q4b",
  "key27": "3RtNY8pnmKLuy3vqRZmsnrnVYjUavR3q54GGsPgBEkhM3JwighBPzpQTH34TH4SmnNqmWpVY4iqdCrsfF8qL4X21",
  "key28": "3sLGVuWSMa8AK1bNMR9XCyJQKBt6Rm3BDZF8QsevYsj2RNjkA3QQspLfc3naviWQtMUyBDGweYnbBw1zGgpGvDPN",
  "key29": "3UQTvVXdQVHDF353q1rrTvVKUTMUXmUWUGicZzcyVBhhPAvQ3oLeUNWPzAWf5kiLXFA5bBUAVX9kgEG8ZzacSvku",
  "key30": "2iUyqM6dhQik43kzHxQSwN5gdymQSYw9yXPsUJfUpYRSj7D3AL886XQcJmc6BPnph8agFGC7D5XQ9UA3LRCcgXUT",
  "key31": "ZBtSUfRv2MW91jWcfdpPZvcoYzPRaAmLbKDtSZKJowxWTVXbSMeRaudMyhmt7jav2YhTWfBMxvfvfkfgUgpKZzT",
  "key32": "5Q7uUQ4kucyLFhdBPfSzzdz6Xgmr5sX1Q9LtgL3HxTkj3EacMd88ZMQWS7Y8w2vo5fKMq2CgpxxHzy2esJ9StQw6",
  "key33": "rJ69nxp4AbhquJ84aUq1owdFGHyUbBoydvE5TsPNqa9xYFGWDs7rCw4UBaUEnmU6gZ9LvYpSa5eTacRY5Z1MkHY",
  "key34": "4pWtPQz5U8g7SC1HWKvuxYM61UEEfCJYCVKQoS4dUov2jXFW5xTBjQnUcrpFFqpujcf26s2acn6Uf7NiF2D3eYHN",
  "key35": "2uqoPBkdXKtg24JCvTSErPodPZvETEEPbLaw5A3NE4bZtL8m19XDihMsZyPa6vKb5yeE7oKoNL9SSXbNvBScYjkR",
  "key36": "2apafFNXdZBE9c7m8wjvM2H8xfnhKzJvkUQXLHK1dMXeuDpvxX3YpXZ2tAU7kMVK9wqGf4KdgtSpYBeLhTgUHmZ4",
  "key37": "4hpUV32trDo5y4awAwzLC5mW52MQSaKGrwpctaWx3eyGXnkF1QuHcQbimUuAXFacxakcm5mFLwsWG71FUWkBw8ZC",
  "key38": "3vTBPh2uJxhBH1c1rTUM4bQFo2c6xju67T8PNb46hrvUnqFAbgKYUP8ttuuVN5bSUFxwmyLDSW1BQWLGtVZKuA5L",
  "key39": "3BaDXk1AwuFfBFX1QCh7hp5EZWLZBmUu2TY2qj6HakBqritWUs52XQA7YjjDWfrZvfpL5JKRiqpBSfcCj46gnAxq",
  "key40": "651ZEcextJSMGKLDNBc4DzBMPhz44qWJJ8Pnkd5E56RFKU8TENctf6b3hJTyktT8XFaKHGBrutQdUaVD2u4mgRe2",
  "key41": "4fbNnEJMAEXufqdksMKeQt98nv5XPPPXEs5TyhEM8dcLpGFLf2xYf9G9Tz4fbRrZKZS2J5BnW6AL71QhER2CJ3ba",
  "key42": "VsLXpnLSm4TASPiUepXQNR5zq6nXR8YP8qSUuSdifzC79rCJHF2FC3o1LuPCziyvNeU8qPEmbBuiQWE9rx8KbtH",
  "key43": "2vBbqq2Z8tMArdaMW3Rv1gJJBJ7cSAbAhR2BWpAh593odN6VXeXHtmeerHYn3bwukYQjRmckmXh6aUihk26TAWHm",
  "key44": "5t7yLGTmhwsRPysi3o63sTXKxpvqPj9NA1KFd14cpkoQWxDN2gpVrvAg7kQzbQ93BuCqShya6gueH2c8VaZRYZmt",
  "key45": "2SvPmvahHdsbPMLTeMe5hgdyevi7pcLapksHmey4nZur1ZUQZtR3a9M2GEXGwjfiDppvX3Cqq4bkqEoqLxJRAyZ5",
  "key46": "gcgtcsrVUgspyK8571fVQKKWYD97ryBW8fGh3fPTG9tvX5z9ngHopFKfE43bo7BQBYAfARKXKxPrTCcGoSanUTi",
  "key47": "mfVtAKqivQWYD7BcJhUihPYKFwEpqEcNGa2tjWvKr88U77KVUjkFAFar3rMytWHERTk2TwKTxjo7XiSRfwfU2J6",
  "key48": "2Lp6wiPrTpSmVFoxMgVQP38Go2r2GQwYusYTPKJ1dpBCPs6D5a2ZMkxFUVtuGkTsvKA9QwuN51jrX6ZMBmVjMpAU",
  "key49": "5R8Nn2246DFqBbXQ6FMFgzDRbJXB8ZLbi8WhGNHQcuBA4mQHw4yRgsXmJcWKywHTRXEghzXCtq55Qc4C9ZFexy2G"
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
