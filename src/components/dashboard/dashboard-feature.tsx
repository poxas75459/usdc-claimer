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
    "5uv5PZzGAKQmZybZcT4eHJ6DqjZwkuToAsD86mUfbhvFE4GN4CqSR4tpTZZyAxpmTfgr9heRLJuWEXXtSvVEeAvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FL2gDHRFqA9r5wGvDXYY3osnh4FLz3jCV7sfcXSKgwSVVihywWARNswtTCSTYXF6BNzWjEkMNuZpwjkmY96gbe",
  "key1": "5PF6M2NdBVFBv1Y1vYXhjSCKPsvEhNc5T4kavpvwLP1463WSRKpxAwh5KJgNkYCQoGknWQBGf1fZbqFqT44BRfCB",
  "key2": "3izGpmDugBt16hEuUo56G53W7VLfRvbv2aHrZwCi3x5pF3rPdNAmFtuNfh5rGu4TPx59PMHbu9yzrDgNu8FN9n5d",
  "key3": "2yG29BxUPLj5BZLUuoBJ6BoTKQdpp9T4UVLDDryRdzGpqk4Qv1CQNJRkzkZgvFCkhbmjuyHW6UKszEQE6jzg62Uv",
  "key4": "wu6rxwqg1ctXFiSRuAVrQDfHcF1jP7p4kc9Hy31GuSuo5Mgrpux22Ua5gaEU5TbFK2dZVMobWjD3U2jjRFJhUoa",
  "key5": "2svRZTgw9rcHRsWhFjuxgwRBZcxZpqaxCJJ7fUHE8EVytMRFHMBa8LTKtJsZtDWP37nLJNbniYxEwfHoogjYNKma",
  "key6": "3ibehxTiDo2Zw3bhise4zKjuxwaBmicWw2FzoxvrzVPCw8fYNXZ23Q6bXgWtZZFXzPsuy6ytcgGsJSAdr35Rt3zb",
  "key7": "z2a4EK2UKM4n6J4VrYPYK36yhTVzkjUufAh6AUSv62Tct3d7B38xLDKoLJRQYA5Q4ZzExffEGheg2np9dvJrNXM",
  "key8": "244BjV4cXTMcQA6KZffRnWWsgtDS9tBQv7L6RAxHnnHTxnPmy7AihWbuvyPYKQUFCNWAd3nSSFajvWFfi3Wcp5Tj",
  "key9": "5FuxvDthps7jWWvVLx4k2AbLC6zmaqzgvqcdxMeR1Qd7foZDkSN6hU92bmSecJLTYS3UwU75VXwud6N41hWLf8d1",
  "key10": "35UrnPr2zdMPRKtRbynmawVEStKdbmtcU9ZHJUhUPzyZFsGrFwHZJoZyA8DnecRSaFNznTiaRBVjNCeiSdoxHg4X",
  "key11": "5yDiEFzQLX2b7Dfrz8AkEMzNNzk4DAmWqQCYHo4Ba4ohyaWHJAqTD79gKaEKdhLKWJVhMZJMDqUGcZgArFP1mPrD",
  "key12": "3rzGYsoh1xNDdBcY2gYXG4NgcoLdvWBvx3FRNYXA8eiiMqZmqC2v9Ywiw1D2YL82aESDUdav3k4PCHtgMSd1xx7f",
  "key13": "2qySXZcGbH8pJ2jjc6FvE8eFWMwk39fDmKbTv8QwRQTbm1kq82UNEUtQaFkhJbXCZQMQWB6KPPcxB2YxB8p6Ar8F",
  "key14": "4AmUvjiD1ihPfeKG5aDjLqV7TosmDex9PuQakMkforp9KaFNmWo1VohCG8cVKcnqCFQ1VvTiJngdd6jzNdXfWxq6",
  "key15": "87MXpbEiPzUXQK7zmCLbPc5C6eGy9uo2jVL5VqfYFMG39fzdm9LzGhJEBbwWX4GYWCsEimRiLx36vRrkerb28sm",
  "key16": "2C7v4hgvsiazgvmsUMVhEmEAZx5hEFGUBcvNAdXULsr3NTgSQ688C9drCiHhEWRHEg4zQsJ93whx858HdeZXSTq1",
  "key17": "22PPEZqETwJJGyhSySjFFbexsSuUK8CVccuDbyaktSznNPD4wovcVN3PdXHVSKFoFuxapBN791e4zkyBKPPR7b9U",
  "key18": "34Yyx12aQ7SuJXib9XBYgTn7eEmbb3Nct4hDWK9ZZ26P3BaZWsCbyfCRTyNRdgZzomcQX2k6bC1pfLKn7iz8LZEZ",
  "key19": "4o5NLbWFJPvoUp5ktVd1ApqQ3w7w3b5MYN4389tMUsEi2665BMRyLfpj9AiryzkJC22rkdvzVvoiih495Rv4zvUZ",
  "key20": "666ujrmuF5h3qY1MzssjqtT1vE5eJoHoaRMX1c269cLCSw8tdDeW7izEVXV9rDqGZwHVhi9waxnKt35MopaKXkX",
  "key21": "2VBJVu3agFAW5usQWaQmeNrX9JWjFB3puFVAcNkTFXfFjhLqMfWJyYncBfHTGFbULt7MvhV8szGHiaxaGrzV8dNM",
  "key22": "5Umain2EmJjmTFm9bkcoFW6w1CPRGQouuFg3tEQZZVnJoMiKV4uPwYxn1U8fcRczeGjPRcgdAXHMQLFEzprxgp5h",
  "key23": "2XqTimkXbiLFhhomT3KDgsLQpa6oTXCdUdpX7xgK7ouyBNUbiKKNCC1gcyCbzBXJ78HXD8zK3EhC2rNz5ct2GnKn",
  "key24": "3zhdwD4XMe4XfQuUosv73qRHcTRWEFXXeBkAaNfJckba5u1JJSTULEgAxpNvHpxxzFzaEGSpNL4bkqUTgFNy8Bc5",
  "key25": "4YBozcbPkP4WkZv5GYrRqdgZshXvM1b4P2F9HZDZN8Ay58nBzNzoxt9Y26pf35rm3fCGpHD8PdHVRvKqWrb1VrqP",
  "key26": "3TKBLqs2H1mq5gaydR1tiWgswrYNrqMDNkBi1A3Uebep2CPXN76eNqKjHDWj1cS2cySHrFp1UKWZNu4zmV1HiqgX",
  "key27": "5oCvom8LdaNLHeyhSeXCjzK2sjR9sopXHizAKTihTFrKSXF5mnwJ5NnLbbPQMn3m26Jium8ubLChsn5i2T8FZcK4",
  "key28": "muuZzkqB9ZfSLe1k8YpF2RUMRc5RNGaEJxCReQwic1N8ubYkqbSyngAPH5LTQMQiWZ2aPY8h13qqSf2fxs6ogz1",
  "key29": "3KrFtjCemrDX1hEMNbhegtmHsL4L8hXZ7mwG1rAoQD1kM41f2JHNsRGi6G1VZDswbKfKqYsx8cbpDZBRjmD8QEuC",
  "key30": "5urq8gCtVo6EapxU8tBvshqhXRF75fENRMJzS84mS65JWLE6JcWpvzWH94gKFsMY8YG5S8N6326nU8UHEPVtCeGo",
  "key31": "4d9XNqG7BbBaU1hMv1BeqUQk5FT4jg8dmSXepYfRAk2MYjTendRD9kHbkayFpkDUVCdK38ftYWYvzWDHfUbzPohE",
  "key32": "4871LobtTLHZxREVRfsqq3WhRhkDPGam7MD5pNSYRJzT6Yhxsujj8G75MtDE8ckCCmfF9U69KSdPCCf8aeav5YnF",
  "key33": "31o2umUaJAK8gN7w3BhprDgf16HaWseAkv4iHPXHqN2sHw7wkKZuDPp6Wp6kUiK7hFjzp3wWZctLX4ZdNq3RS5v2",
  "key34": "4JVEpBwpJtPkSA9vNh3monysdGvYQk8Y9AKFhpKhBapQ4ir9a8YdEhv58sxpkoprfni9xK3t8mVpZ1v4WbbedmxM",
  "key35": "47F3kt55sMirNRrSMbgFpoLkE4nZvzTRuhuq1w4tJ1VdfdQfjE2vCPssrSP1rwC6BdHW4iJRz6BMZP7CGWrng35p",
  "key36": "4t69Lh7LYiK7Chzmc6SQiFSt5vWMSVFGjDFtiiJ5rHFP3YrnEy5yJwBoWwUzRy9Hzj9UcmV9JGeM1os6L4jqmy9J",
  "key37": "2pp9v8K8HyWaDTByY7pJwX3Dcx3vUsFQWgSuriDDxTPgjyyiDGCVyjypd2dL3obvLaouGFxu75cAo2iRT4Xmem7i",
  "key38": "21hiD3Eo6nP78ayhM8wuRrRqX9Ge7tJ3Kir6ubis4QgnzZ9NCdkvVnkRuiLyWRHv17JtvQkEYhkVxaoBd9RujF7f",
  "key39": "fj4JohCWHThJaan5XGBieYTs8Z9HJGFtarYr6HdhwaAgJStBP2HtegT1PsHEg2Nj9iy249HnRGZ8H11916K2yi8",
  "key40": "48vkJ9fyDUny6rcWHEo26bH4KhAvtE4Lc489gWYT1vvJTxZJq9cg2Phv2wMJAosYKR6gDrytv4oV5pYrUoTxBwJB",
  "key41": "5iJTAa1Lky3Hh3usmToz3S6ac57U5FFGF2oyYa8GDMGfgNYiWxBnPuHRsERQkaKwtyTwPKPfd7GMo88jPnAzATPC",
  "key42": "3WooAYwfrWw4fjmGrRnnmFqBHQeSY5abvXzcW8bZsbN1KMCwRhL5P1NR3PoCAjaBh4mdvUKeEZbYJZCzT3HyMxU9",
  "key43": "3hBMxC2jaeLgVRVrFz4bCoQpTbmp7ybTSSCxyUoPyEmRTVYoTrrgS7sazwp9vykEGMSMaYJEd5vLQW6KeJcWybjb",
  "key44": "4BAyhgHH4z7CMmghHzwTYofYgy8enxrxv61fyG94Ee5DrqeUaW16pneHufdkG6kBzqgW3p7x6DrFqDcBXaiz1bRK"
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
