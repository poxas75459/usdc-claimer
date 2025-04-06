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
    "5mj5CPP5K6WxkEAbZRUNXCtw186VydqYtY6DPseG9uvXrJaMCfjjhCUWipLPADLu5AKERZd3vGxJydbod5ESbBft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVEFbeijkLrDB3fxZaqTgMegvfMcGmhmEqtn8P7TfBi9VTUZXeuKmLVEL4FdpFrv5Gms1NonABHUhfUygBCcH7Y",
  "key1": "KQAGfKdExpx4ioiHpRUtmqTyx8zymDpw3iNQWWa8rBgPjCxHhVZ3FAWt4NUtVYRZZbfyLHCDCihJbxEdj4hUifH",
  "key2": "5WfjVovfiuB4fjmV4GMuBpAbAbDsBWSYxHof2pUNBkM2Ld83By4RzuVxohtCmixPD2wib283obtomHtcPaYsiTKA",
  "key3": "4eSVkqkxC6E9852eniFJj3aSzZccCusYKTJ1F6iKaYDNZiRd1qao5CK8wrqwAWY87wAbeuuvFRxmcx5Yx2LXXqot",
  "key4": "LncAGvXcRvATuQPJUHJ2rER9vE55Cjb19qgBB4hyrP36gc87L7UXrc78yMwm1hvDtxcKusN6bXVJWZkicFZjDV6",
  "key5": "2KDAzbGnyykvTKMNVuU9jB5gP9tNb9v5cYAybT8XoTnCzQjHJpNTj1NxZV624oj8fyfXWYzWCBLSY3QEwxZfZiNW",
  "key6": "2fWNpXppieFq7G9LkSR4mF4RTvQ6pzD48iQ829BDY4bZvgMudVtz2GfFG6UKkr6c7rMnU1ycDFHF8bqxJpukSZcf",
  "key7": "3zADaLoE1bzewnYUFWT2KpJzkNg5pjMprn6qzWexxt48DT64LnsfMsJUX1f8D8ocCgdUmKbhLHnBv3tyQARErzk6",
  "key8": "2oKdKzHF3mJc1WoRQ96iUCaNcK1sFRVTmbqiPbVX8ekug22qUqkA3zrRMw4H1NgiecJN3aXmiZ3UzchB4FQuDd5d",
  "key9": "5faJPgR3mkMxWaVezNoLLqzg9AmCxN6cyZ1zL6C6BHcvo8XoP1RDkyBmBnYrUPzs77mQDQdzQULcsKd3Wqzn9eRA",
  "key10": "creuLpmXnRumRJ2CU9tfbXB2xW63m4QpCus7Bvax2o5TNrERQ32feKy74AxrJuNCGjUMW6eVkMxwhTn1kpcA8gD",
  "key11": "3AZhhP1GHZqy4JfEFCmxZiGne8aLdk49BenznnDDT8uLse5nYEcZ8hewEy2TrdDgnVMjLhJrkSYZmVPS8pds8aMz",
  "key12": "3DUdDU1z2aTgANtDKuXUgfaYnbJ1h8pjYCk42aX4ARZHxxmstbyzunJzjL95gSKpEXGoTkuk5HRfvyXNvXTPmX6v",
  "key13": "5xW1SpqX21Eti42DuE2rXNHDwuLxJjDrf1GFvqLDx3GKBZDPxfCmzhdmymkvF2nrgfgNPiXQZMLCpHU3Moyi5Aey",
  "key14": "PgKyUi3aqYg2mLWc2ccEvDYYBKV2SQc3z2LHcsjGNxurzqgTeaEVNv5VmWs4A1eedjUMZfyxXsrwxcvCqcCgvLV",
  "key15": "3xKGKpWTWQbddNa4J1xRt2n8NPqV4aRkDptJPqJT53R9RnpeaUbNFrNqWyczeQsLDnvzMKrnULnxbiH7E3zuWajm",
  "key16": "4ixoscypyeZSiG42rbdop5MYuhqmz1AD8WRdcwmabjNWrTP6hrYrrXXw7TREBJyi4oMnVFvc2FdWk2iE7Y13zRnq",
  "key17": "q3SJM3ecJjwVvCfuTQBc2U9KhyABiixMNoAKsNcB3GPGrujE1FMeqcuEvLrYcNMVsQJxKQkpzxZEHm8s4SzYGq1",
  "key18": "2WRG14UwLWs9N9G9Hb7iPL77Hmek6P87QAm17Udntj4JB9LK9VSUJL4G1ZSKgC4cMFh5CuMEAXs1iqakJSC5o445",
  "key19": "3wheGovcJxmWZTVfcg1D41gmZWQvXXX4eDH5EYZ9tVtYY3QoYSs8pkqzMuhUHU5Xvo1FcLV9sj8z6asTifVnAcy5",
  "key20": "5712FoSWSxdRScYjJF7ejBva4PNiA3NhQTtdUBEGJk5fmrkmJ3NUZsSPbxNqf659Kx4vuvWJhCCV7kWuqfA4sWff",
  "key21": "2iBiccJJSXJkUcomV5b4gUBgQycCgTxRahEwVvCMKyxyDqLpjDs6koEKPYV315pUr5uxK7VBAWsEkUBmmpijLcx6",
  "key22": "3JfSCS5U5fPE2tLfZWYsU8HZHjca84GDEFrgiuNMwwRWxrLHWVPomPzZERKPvxcgxA8EUK4TgJbofoV9UqPnWTXE",
  "key23": "3VS2ofvQ6RZgvWdxkynJFweCq2rDpUB34TUjVFih9Vg4ewB6ndvrcVhUVuM9qKm1pYqAzJTVe3whmN8kR7n1biHH",
  "key24": "4zTSGBZ3LMcp4JoTXV9yEw5ULqfJW3nFqrTngRm9spzYEEaMABrSCuE6yZbNKgDscsrk2C81x1NAiWPpzq6HRGpo",
  "key25": "31aKkEtUMu6UqUgC9U1AofcXAE8n57q3Y3AMP9khGkv3bGCHr964y8eq3iss3xxqfBVbYaMyxqcLonunhq4HauDh",
  "key26": "kYmZrM4hq3JdfYUZpCK5J8WGjwiy6X5pzAjmDP1jEmuscoyXmNmgGRZittsnvwkC3yRnBhPJN8rNAdqQ4AhDPt6",
  "key27": "3UKN8QsDz9Lk3fzhbRtvdHDRYFgxcv4G4fEsdwm8CmyuL6i9xxwBjSJgn2N4X2U1kJsxhg6Z58NL17fkgegRR2he",
  "key28": "2bgSS6W5fzUSwLZ3ZwK5NP4nQGvMAVW7spn2ZdM66evu3LAFEs9iaibDZAhPubYJcCgw5nyZzuSyGEFWZ6HkAjFY",
  "key29": "2848H6VGg6YoZ93ebtqZVcTsAG2bBBhDbrdoFsA3KaEVTVTN4mnoFqx1KPCSJz15sQGXTnBQH9dSNCmv2fV2gNCx",
  "key30": "44rpUQmpNNBnXDYMSScjKKwbXrsyh5c56gvBJqmsPNojqB4Luhf8Juu58J7ztbUtVBBzQYtFNwM86MwQcV7bhw5Z",
  "key31": "vCqvvAi4KHbCW61D3jhLAE6rTWPCiXbs9DJuM9cHd8azjxG6azvP8NjndWryLArpaZJf6XzXZMnzUmqXd79qmP6",
  "key32": "ZounCwu27oiDVjNtPzRRLE3yzPiLY8Jz6gsKbDcDdXJpGJpGBVP8Y4yVjnRmaEuQYUBLM6hHWGtqXwLsN1VupZk",
  "key33": "2xD1K8EcQJZ8QkEXStZi21chYQrAebjWAQ3LV4PPbregWvXqfF4Z35QbU2kv3usdhZ66E2hQM9G1zvpxLTWPAKj2",
  "key34": "5zogoSG9eg7FER8wmjnH3wSGuQh4pNs5d69jbA5LFepFCNoYtZ6ryYvXjTwuNeYGigGo4cbG2PwKcD2S2fgdK1QJ",
  "key35": "316JiNaQroZXcp2E8zaZ1spBJbVKeHTCJ3W91n3NDWhdhms1yuEcNeDML9NYqxhevdp3JAUEvQDRWMzPs8B8hEEx",
  "key36": "3UCTAT4JkvzRHrU9Ng4xLoy7jFwyp4Bf4V5z7E22i7t7ESGruG1pNZgxEnQbt7BdNCE1eXRgLWiaAvj7V3DF6t9u",
  "key37": "2Y3ZoaJdnpYoeYrZ2NpMaoMp8cvUrBt3UwUVHDrDUu1xdiFb8D2g9pSTyU78Gq18G84sTYkZR3VyvTX4k7oikXCD",
  "key38": "5TfCLrVsTakq9UHuGMmjUDXzy8rUv9CK2KKEjmaLEhmscxg4i6333CmEghnPQbk32etWfXyAMCCULHjeqzS2gAPJ",
  "key39": "iQ4SVp5UHZNDHZeozkfngHXyYt98wETnbJi6KXGPpnhsxqK5ZjTV4LrARYaL96M6cydvNS59DYZV2z6td4PJAor",
  "key40": "4oZLDcD7jeaUKSNrZe3RozWeHtF9h9Z4137uUzbaDVvvNQwfuJhKpb8tQtPur8MWzxwVccSqZ5NQvwM3o4jn7hpH",
  "key41": "3A6zFC9iJrVM8sV78L9h2nAtcCxbFLKijxATAJPpZ4C5MMkiB3t5kjfZcQRzwCptexAcEk8owqaNRZ1wgjkWTwsi",
  "key42": "3QJzEn3XSiqyknZA4uo36KYmq11u5VCTH87FNUiZxjdKZRJK7p3Q4vumb2Soo7EFeLrv4BsjyF8pwpa7GPcLHrDA",
  "key43": "4zmWXDpsUt4fwCTmmwDXTPLNxANGuHntoB1QKPWjo59TTKmMBVqCfeMsqVoUoQbzvsnP6LYBkWeXcT4FcRFp4owM",
  "key44": "4zVLfNNiY92THWDHNiiUZQ4wURPB9P9M4NJSE6nicgeMiJCo1GchXqDMmxkV8JUrEaXGMsnBfGusizGfDFPdNH1b",
  "key45": "3eEgT8LdFXJo6EvfoT7Vh6vtQcPc19FU8QJ1f9euC2FoB8ytXad2oVbUr9ckDCD5brFGxXZspMtYUH3Rm1Ptv2RV",
  "key46": "4Nwa959B12kdh1Ye3KMQFa56fUaKhoXMKRKj38RyQxLMUnjrwvd6UaCCnKd3Hap4qHuPp4nnNibb9ZhAftq1av2B",
  "key47": "4RS6RaqapsP9JRnJjidC3f7ZfjtapC3JFCQDvAsuRMrJJcSu8JdKAeo6tNwajbKNmzrC6FJUu75qurYbzmJmx5G3"
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
