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
    "3rgAVtViy9bBLnVNfT7v4HRF8s4zZbHcqJQFFfuKNMAX1rqrk1dDXr8UHWxd4LhkNEF8LJ1Tu1XQM34Fs3uUuiA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7GQnYk8JBohGKS74fMbaQSoY6WMZ6ZaD8TbTCyCH44brKACyj9zDMFmZB3dvhqfipjBX6DV5WYEckq6fvoFLY1",
  "key1": "4yudwJYDGE8xk1K25pzFJF7mkBoaeiEmpRqSJEtPyoGexytXq6UctPtyTFyCvdtdrxxCnfXFma2xpGq27VuuFXns",
  "key2": "2mk3pbTCwpDqtyqz45VLeaj2J37zMqge6qW56cGKa4ofxo9PHwcynQKY5ccmsu2viEiqgLDDTDURmERXRL2qkzsP",
  "key3": "4ydGsP9po69DVApCKTTQV7Kv5y5qhKTGeWKcXeNbjKsx1evM64oKVi3PgQkLBFNSjLNSxVGc7PVibFGLxpn6aMmg",
  "key4": "4GQ2Q8ZNjdgyGUw8Lvm41Z55dYWKSds9fBTxSmPiDuivugKsBKVPsbGSPQhjSLKKxjy9JMNH4pnMAXAtec6Ue7cm",
  "key5": "v5GbAnDHjzQAaL8xQLpUWYp1iaMD14yLYX87tckhkRvCk47C3vZufgihjP8mC8Af3r293NjyF63EbYAJMiugkDg",
  "key6": "4DdDHf5owAq1QcAprwud3u1t9iLKP4v7rW6TuGPfDXD5ei7rhKnqQBFkgiygnemuqMuScFMiW6CF2exr4ZKZ4Uqs",
  "key7": "4yvKmAsDq7r9UNpyQYNGzC4KAEURNBue1RbifX1ffijKABpcMFBH4YyBzgm6GbdJzVjp8sWST9EYjwqD9eXPsFmP",
  "key8": "39cU9HiZ5uNaFdNFDW8b5jGmgTW2ZUJ3oKUvgdVyfNMvUhgk8mbio4fWBypRg4Ann97ygM2sFXz9WwMx1hy47Aaq",
  "key9": "2veCs4YreKZV41YartLRH9xgA1XNsButj4gkChGNFrZGw38ocjjDJ6DVBcKVQ7B1AvkUEBYs2VWZ5ourv3kNrdQu",
  "key10": "5Btgg2LX5NHCEpvWyYYKP8EtTfS9uQd5jNexF72WsYVbZ22LHXEWyiBVBLw4KUpsjgkRs4mmNHc97L6dctG9ir6g",
  "key11": "WrpGDmgvquVCWQyYLDnNSRWYhaXZ4RYCx8Xds1Kp3pgCGYqrGpR1Mtu3uc7nELUfBY5AxqB3YMrSXCmC3d3ipLj",
  "key12": "L5yEydJ4kws7dbRB1hYnpwSW8vTQwsU8rExazXh94G7dQDXzzjj8ztTQeBYrPeyKQVr74uyAkLPxpZ86WVrnokv",
  "key13": "9NYQhRkE7XJqNejzx7JrStnYPbovFnLyWDysLEZ8pWR1HxZCnrHRJv6nDhUF1hbbbZhnMP8uAKBU5cWFMevnrYP",
  "key14": "zZfnsjXfGVoTSkDzXVigGd5GCUh1JaQwoUckCgN1jZSitFKwnou22rqRwtxQjBstDr8xnjxCBrBaUr7gsPUFSwT",
  "key15": "4JMTc6qBGaYKU8Gu7istPyFPvnfT6YiUzFNRjMvGvUv5oEiSkdNmp7L6gYMigeFr9DBTxGpRSMWXCZnFWeM4fZSE",
  "key16": "RrAH2ZqH1273q451QaFMYkWCNU3Hkc6AbR43mD7GXJxcj4NkMgR27GD5ec6Cem27MVkwN3WrBdHy5DZTvL5rA9B",
  "key17": "4qkCekyBwogqCuB3DderkmZopG3qtkA5WFHHbA7qziKguAzk9TioyvqMvLtfR8uquYWT9PEqmwXvJSqGoJaZxskK",
  "key18": "49VVg9pu91Fwn38gZBU9YyaRDij6eeSZn6unP2Kwi8EwVD9P4JCx8VxCkbo24fpMu9ENanXjEg8C9huxFuL5Kqjs",
  "key19": "3gvZZdsM3LmMS1apiyYFTnLMZKQDmTUXEGqUEHwN655NoSNjZULojWZkRQxys8YSVMnRDzTioF6nqDF7mdu1W56v",
  "key20": "54sjpcLV9mCK8t8JY2RKxRXkGXReLewWjRxd2R5Z1yCQoHsf9iF6TypbfjYPpsC4UKWyZFFsYLJBu3SaqaXmwARs",
  "key21": "yThAXny98N4JqSk4RepG4SXMEGt4fV6ZUDbKfLDtTErGg8SpiJZ7UHp7E34ahrZNVztz2J3wiXuozZSDDBpw2en",
  "key22": "31caQuh4v1T1NKpP4UWRQkh7kQgKGqyxQJVsuAg6CSAqmCgh45QTFGsELTMwmvSaEmJ2PHFje5PVR4eVkZMgGRyE",
  "key23": "4PM7C1bdJMGy16N6rJTeuiLDgcC2jBHpspFf4t4RijCHSN8JFG6KwQCCQgeD3Ae8kzDayGZcbWPNhVHgToHZpUjm",
  "key24": "2HfFyiKk26f7xgtejBYVarzzHxjVKGVB6BEvBoSTUiYKb1KbypjuJHrP87rngmxcLRbnH4TpKBmoXAdVGYbuVekD",
  "key25": "5BMTJSUAQzTzizi1dBptmNKsQZMkKfbUhkqnFz6fwdzh9EbwQmuCQ1AYkASpWUYmsBKH32PkC5uLxhTUVErEVfqP",
  "key26": "kuDj5dMhDbaCR3f5RQA168AvjngF9TejbbXAf3qxsWVBHGEq9dHtZ9a5RK1m5TnXwRMS3i9BgBfuo8kQrREcjsD",
  "key27": "3y1b9QFSDgrWQLvRU87oFvx7hUgS6rqEkkHchWhhALrNpnisg9YwLzZiiCAiuy7c5wH4uYkpnRjDYD8FHX3UXVKr",
  "key28": "2xXYavsifGx32rcqtmN7E89Vnxyg4ubZh36zmm4hRFyuPB18VBWh5LPcMUCed5yLEQWqFvWKeyYXYekcZrBMAAjv",
  "key29": "3gzxkYRWpesrAXViRyePCHXvAZaGrtxkCG2MDPEYtx9grhbzFmV7SMBF1bGstReRE6CeRBaZ5PNLSrxfavFLiccs",
  "key30": "3H9fXX8nqm9VPtBJZVjYKbPx7VcxzmcBtBr1nDF249RexS49cCH4wYiTJTyMBYafH2Z6VYjvQPYH1DMcWBCnXUKE",
  "key31": "3CXPfT7PsH7WGcg5AirbKUt3Ao8KP4KBSyEY2DiPogcguq6isWFDCF5r8M5Lt7RPpwVPr6wcDMxt27U42AVXkGrW",
  "key32": "4vEAXBEyETMuQqzrhFwCchdx538YRBeV6SzSjFGfkPGFozJsk2TMs4YLGo1Gzkx4VWJ6hUuUei8ZwD76cNwd4XjZ",
  "key33": "5KZAAnxbLTCEuEs2S5vXo5XaBRbZb8A9Aprfu2bJPvMS7dEX88je26s4o7YptkaV6QwNB63fWryom1ZSEBPd4pz",
  "key34": "4WNfBX7wFtzDY3KdseBM9r8iykBw1fSDywtENnxu4xYQLYUCT9Mr48uYbgQ4hTCz4EXkBAZWr9rm8myAwX7sisas",
  "key35": "3uZfLWHY6jZFARQY9sRZ4nXj6S7ALHJKxyHjqezbdMsFwtrzxqdzjCw5cKCgEghmyQeJ5myZZLNUZoTi67ZLhRLp",
  "key36": "BcfevWWRjeNm5fuysCS7ohRBQEJm4vkLdE4veheECe2nKiE13PSz2y4zVckeQLdKVrRmzhNyFv7c1T2XHoESPhM",
  "key37": "PCTeiDeNLSuQUDkeaUVhAkQ81iwtEGV4rcCdoTyKTxKPuSDyfmN4NwBsfVpxc82YFCB8bzrtCs73XjgvJokGAw8",
  "key38": "2kLhdf6rpyUkx4uEUS2SGj4xwWkPscwueCsrYbAhsD4jm3T6z4CWYn5dL5Y8doAF1qgAFLsARKLyKFP7acdkhRxv",
  "key39": "7bA7rRPctgQRUFUWEEBjVa8nMVFCGytX18Y95Y5UcxXnkswigChaFv7drQACUYN8XV68RbF72FAYocgibtehED5",
  "key40": "3spnV7fwVrAUnNtuVppcZw6zuScbxZHnRQM2TybaC9dH8iSsnnwdzoEwAvmfy6v8kSw3v2exGwJS7dEUTgX9b5Uo",
  "key41": "5sWmDPf3wpdJ7geeHaqhRUaDkrniN5jwHALKazvjretMh9XvfvVMdvAR7yNW798wEjQtd942rAUfCYF7ktkSbU7K",
  "key42": "DrWTk3fgJ6A1TYXQaV9bf3dm4sUfYGMJ5pEQ7H3FWhRufAk5EbVshapLE4mdSCPFqdbWVxa2cWTtWf6715VJC51",
  "key43": "39UWbsqJKkSDdnEUe3ccJZr9PRXg2mLwZZhiGA3SNR9gC2x2U8ZJitz3HPixVwsM3PdfPuGFscuzNQxGCAnrAdUp"
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
