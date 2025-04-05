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
    "4f3WBdFHsFLMVrsYra2nRzGw4F2hF8GXNseHtdMzVdZhYvErJn4ocLi9mEeW2NYLLxKJ5xvr2TBrGU8n6uohVr3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfeKB1eJbVs4Y7RSMKettXUpkKfGqHLxuPG9Lfj1tNXNeMjVnzPxNvuBLRzsQHjh7get7nTK1FCEQKPNroG65To",
  "key1": "52dt35mEYN9FARjDLLE5ugiqRJA8m4ngFKu4rZaxg9QkMxKqBGTjUag7xVFVU3CjpZjaAUumAJVyTShzLwimbhhD",
  "key2": "4chrSCJPqxcdPLwC8s3X9mHNdcqdPm1ZAusTQHQCNs6BH7MoCvrwbdB2N3QWxbpFVWZJrjMkoKhfLDR1ao1Mf2gU",
  "key3": "2oWfStuQQxB5csWY6sJ513VjmgCZvFujLFP5DHjJGcAzMwdouL8gjMMfKtdELyot8SGQPtE2cvEq1vEb55uTKqDS",
  "key4": "3xuvGrMphYTajXXBmDrYkQxEZj1B5TLwaSbyCUiNiGQNkKK9nRohe8yKEwueca4LhtBd4aC85xHYg2422az512Gm",
  "key5": "4eRFTAf1BQ6BWpwhtnUjZ22VpfRERwdQ1QfEjRdSGD9AJgcsYPZQippxuVv2feSBkzmhyiSg5f18mX5p2a221iGm",
  "key6": "2oWyMZ4Ajj6FCASGpdEhCfNqWqRSgQk2xriYqEARoBZugZUGo4EYEeK1Pc7HD2tznmvjMtBWUELnGLZNAoJCyumS",
  "key7": "3ojxVFeGJxF3GKbFAAD6VoehKANj4SDma22cDNfCaQAU2Zxnp563enzZudvsjkeVgrM95CDTrhA3jvL4uULTR9QW",
  "key8": "2ZbTLSfasuSZxUQ4HMXAJWnsDqE8eCTTmJ6JgK26xohRw2NYDNNyTfzeaDmMAN6S9gxXMjKt3hAw226PDeUv6Gcs",
  "key9": "5ded87fh61LWeqq6dzJQGTx795eG7T25hrkrUEeq8RsZ3b3J7G1NKAnv3mGfYVj66kGzAcw6V94RRAAfbDDmMSfu",
  "key10": "4oJcErWwNv3xmpGJVqKQ39mqP2ukz826MVdtXXcnKwAuK3gc1ZiWAyk2r2HyUPfK42wxsdNeJ7PNLeVbvaCxy1zY",
  "key11": "4qgKXbeBMuF1rdADjiiEWi9H7FMEzn478Avk98TUhMBDTdMeNHkQnMgomMGnHB4cAKeai18BEuGwtenRAPoAkJ4X",
  "key12": "64ojPACbfnZmTaZTkMHBPQJqst5Aa8Q3wyUXMVT7PxViYNcf5T4T6AbrPLpM3KX9NnKHp5hGV1iMSYv86LfCQkBX",
  "key13": "8wcsxw1LzzyaMD49Kj6TrLeYGGNJtmMGrTxM7MBQieQ1TB47cYHv4Xt557K7Y68p7ncsF6MQvXD9ERn6DF3782e",
  "key14": "ZcF1HCaJ7oWA2nnKPgsstdbAnKP9ncjUrnncezj6KiGqjuFXJ9GgD6rfVFuaJtjiyDJK7THvVFY4YwN6DAteWva",
  "key15": "5cgyunNszUHZC7NyxYJyh75oXGLiYXNs5EfS5LgidSaKYHMuBJgVaRDa6Yjyw7ymNuupXFrRe4KdUy3ytVCnzu2i",
  "key16": "3MwQte2aMuV4jvVho9JrvEdawjEpnyAHpVd3MrHShnq74FEriuSaL9CAw63KfDp8Ug5ysZC64WQZn2vVtuh2Af39",
  "key17": "3nAVx2PRv9HCSBz1WiqP8o36fq9BEc5JAB8h4GXCQqBUkqdUXd8re3P7gnceifxPNXE42bsQswYxui5LU7W1ennZ",
  "key18": "4vADJQiNk9Kto8gjiUSof3mdsF1n2RmCbvbk7nFt3mVkG7eGzMeR148mVTYoDvRfaZJG2JxrgJFSud1zK2yz6wy4",
  "key19": "jpkwXAtkfQMXJFwC2ozPquN4dEpEuDvRjRDsJjrxZJTTM7nB2VnsdLLqYFipTMxAqEAnXtdDHU1cY8nbEbno7WZ",
  "key20": "5TrovZN5yLKEmj1PhPfpDCU9q7S5YzoGcA5Zpef5Bkk9KkzAj2RBeBm8gPhFjsh4b9N99ttGGwvbW98TCdhFNFp6",
  "key21": "3HDk5jZ1G3CqdzRVB1uhPXzeTXeYYbZB4bDDRX52gWDpp9D8BAPqCus6QKm1gG2GH78JV27tapUgwKDtuYF39CQo",
  "key22": "41KXpHgN56pQGfNvTNf7ZmN9izmApU7EEQbG6vpKc4HnzUPawDCi29XnHkqh4aNtCQFMuP6rESDYa2asq6MNByqC",
  "key23": "5cjwCP8CdmVGSLsBLvdqFfZQ2UZxYHaSAVFuHLmQK3p9EtAnSYsgfzfcmLvH4gVbJeSwVE3xZN4Dek5h5VZA6ZgY",
  "key24": "64JaBmPVX4hxEk4ZTTKBtnjaxbtCDpDhGgLw4JQ9ACEQ9whH3mXkixGnzKM8qWvh8KRG9TPzJ4E1JZEDY2yJcjxX",
  "key25": "63vSrRd6RUH68CnE6QxMnn1i7hwGXv1SiXHnsYcSiD2sQBitRyj9N2wj6n3NXPiBHm6Z4yibVzXGA1iTQVtv6NbC",
  "key26": "4LQVWDsAhRnKAygnYwNZsxN6LEjgoa26vVsRavQSye4xz7H8BsSkzXskQbPQaz81YJq1uHt2L8cS6167NeS7XVDS",
  "key27": "5or6GrrQrg22GgBovxT5iqko7wL9cQ9QKaRH2M6to7uU9QLQUYjtAmuKhEoL5KYWUcDUKruam2ATzu11CsHrBNSx",
  "key28": "1GtbzA8ivvwukWZjjfBJfkLkAnKKp9oAEpB9gtwRFM7bJ8d1po4LYwYPNyg7kSxJ1m2Z17ztgUajhTmDhFifyoB",
  "key29": "2uBZBTbu6niEDxcocRRnNHu9wBXrJjWbJS2K8MCgufGPcc2hYGpXJx9QsuKKcJmJnZBscHAzLSLNaMTtamai8xVE",
  "key30": "2jMijjDaEiFEy17Ms4b8m5BuxA2LWF1ZLRhf5FCuJodHtKFbY1ghkVfsNfh89d5PTVxg7vhMn7wrAorg81WDLee6",
  "key31": "4gfuF3Wa9nsXUApZY5FKDTZJfsqcjEbMMofAmf2f5zS8QxRgizk6S4HPMuEGWTLRZNhzpVB9HuLFv8NyPrTJt8Be",
  "key32": "2YWGEDTMm3tanAotvZiHFjMhggpH2X4AgGFStxeFQaWqU1AXbrivUdYi8AWs3Jz6iwgYaou7cg8o2vB1G7cpsJc1",
  "key33": "fkcRnphCm2SdWYjLntBd3zRYTchtG7siGcYR2vxeVUaYRJcC2j4Ze4AWHAdXzV9bM4jAwLah31RhNSGV19Nv3Ws",
  "key34": "561DbtUETNV6jFrKCS21WqmDqUfc2i7hkDcZqp2ZkDEwMvz6hMkY5hXRJ3tG1xGpYeQoTxBi9RkrBRR9HRGSQqya",
  "key35": "A1HYrBjBmgUxFsCDnSEcFKEsuiFR7DLQLudbtgNvmZvvXU5DerAWLd7quEjh9F7dsDhhFcjDnF4amUCF2yG33zH",
  "key36": "4DDVEdK9FsKEei6UzbJN3oXyzs3agF6HT7QmmTgP4GosmyR3c2FWAonakgEs8LDDTnvDj9ZuJktBnBb7M12xGbDY",
  "key37": "F4BMpkAjkVUFpw5h6WWo7unRgqWrFnefQErwFzFXjrcoMocyM8ufi3vdrFZrp4DF5FsHqb14BMVyzKG6JpdvV3M",
  "key38": "5ZZBPw2fU9uspCwN15mzaEv2Lo6p78mJ3YaefKNc5wmbkBxw6NbJYmVnyTQDRqM3avAhh2FnDrT1FkvACFFVDUfq",
  "key39": "ZyYWD6p78ERuYAgPXfJahcmmM1RUpo42jCFQQk2rX8rHDYNDimUQmkNGVy1rt4p4msX1wQzq8gvPCdexBBjW1ZR",
  "key40": "XgaAw9Huf5aWpxMj5k29cA2epJLuWo5xxDV9xu8ruE9vCB68GnWPojZkb1jPUMRQrayN9guenjnBKpHz2CgyFyt",
  "key41": "5myUHCLecFAHg8tr7L59Tp3pE3vYhz9AWmLzUFrMgiGL855a7TL7sFA6aDUW5SC9AzANdWnYHfPo9At9tZvjkcNA",
  "key42": "4VqgcwKZpneH9AgUarC33tVEo5XXArHE5pjBi5LTdeHAevjPmF19sy198RZkUwxqF9Ng6sYBsyV3MoHpnneaPRkR",
  "key43": "7qN5ak84BnSJJ3r7Fj4EvJSreUwPuE4V8bJQjwjmz2bWCZxE39fL3DaHBhzPw8DBU4fae23uNc4vcAJsmx52kQp",
  "key44": "3ErbZ2ACPqjJ2PgiEwy6H4M7rozXMesZMzF5JM4V8wsEY5x7rdJvRHdhi1yn5eUMbYRG99c3Xq8MY4s1s9onqXTg",
  "key45": "2GSJPE1d48EYVZaT8qnKBDhk9PaCH72b7DoKY5DV3PT5spNrKjagEFWvLfYsr5wNxCknVPhHXBc4oHjJQWRdDqhM",
  "key46": "3yKbSas4XcukFXggiHFhGP3ENsN5wscXL5kEX1Cj8AKGCMzZeNcqUpY7rHdm54EncdjSFUurobBMXxZKNZb6JXzM",
  "key47": "4BsdZVPGTnH6efF2ikph2aoyTLBkoLFBYzXb6Mh6fUqCm8RR6Dr1oKGm5NraiU8dT94ZScBbTRJmhApjUNyY2JGx",
  "key48": "3SQ4JcHcm2573wTd5x1SbXKGcnXvgUPssjsaTR7M3StDJZ52F4QAuL7PJ6hSh6qfEt9mvqJo3y5ptKqVuEUEtjMA"
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
