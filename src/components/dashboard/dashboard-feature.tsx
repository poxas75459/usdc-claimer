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
    "tibXY8T4NPqgzU4eDU6KWj5MgSKhn4QuFC7NKnZaG3Tkutbf6FRQTpaUjdLoj3J1ukZAnCKwoVt3bQCfRXpT5dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1A87FSRMQhakq8kogVT2ERGAdxo2GHEovwnc6RFz1sLaTNzB7H6qbWrfKzBQXVRTWUdZCJiEY6i7dCbF92yjWU",
  "key1": "57HBFwRnKsgCGuTCfnTHevMppyZhexTEYLztmbB7Rj9PfppKjW9hj9d6Yhe5c54CF8PkE8yigwWboZCDMJCaxosQ",
  "key2": "2DuFpvGu25E42vTnnUUwt9z3Kyc74qQBHZpquqT87F3sjNN7Z4bzagF96xX8z8Xh2ej4DTwa9ERKpxRrsEyoe9CD",
  "key3": "25sc3mtX3FvWgqiFcrFWD7nDb1Jexeuc5YEWeGNkBXQv5UiAQ6H6qkrAAYWpxDF6rvMSzmiNAYtZ2FJ82rxUwHW8",
  "key4": "5iEEjgLSYqPxdRFQijnr9qpySLZVbaMxkazZVEMMS8c8w5kLVMn1VbfCpntmr9uLoCNUz14xuasxrFGDojFxg2ao",
  "key5": "4kL35fMBqWJmUmjk5cFJPJJCNrTbMxdE8asZCxo2hiDnLoKCDWS75bUy7bYuQJg5vESeP9XrZ7Varkhn4fr7t9Vo",
  "key6": "bVPjqDAhoKoVHMiDsxa6apZcrXYEpzWumSTYLDid5mc1jadhntcEG8Qm295ejTdqgmAjJbmWxozfpjz2LAEBK3R",
  "key7": "3gayN1fKnA5cDUVuFunzPrp6K7mzTSFTSx97hRY9sHv1fChYCRcvwJ9NxndQmhfQr5EjZJTgwzs1LJdYYkQ4Qhbs",
  "key8": "sJUiPN73GKivk2qEtmsUB1G3TMLtNFTz17SX6wgr3M7TXkTsoLY6G3ZVRahp8vbRUZSYW8LPXyhp9whuzPYuKCN",
  "key9": "47T5z3xrQgxwdQURi2HDTwhoxecMwttVQJnMEzxQ45THU1CSwhLxKgCkSCwH6VLEVoW2vpbK4ZzfLsZ4DPmPhcEo",
  "key10": "3yn7NfdZnV73tc5DLhrVeTEaqGUzXnFNjtKJPLPuTURU5KuhsDkMMG7NEp3VuX8wVs3BdHvEydZbD1Gqpp3GtiVs",
  "key11": "5Q7Wt6am7dh8WEThcrGtdYiZFewSY8Jm663oaxVhDTwtEgFxrjjPuZNVyF9brroKWgoM9S6cEAvdLiKPHeXoeKLV",
  "key12": "3rGRELBdArfrjyu1eEdkdEFeN2GiVvZguKugob6DKduGJrAXWKctC7kkREv9UpTCaUd4CtnvNjeFnkhhrKXTgWSL",
  "key13": "31tCqmrqE61gynFYerv54JAtjwEMUQyWKyd5mxDUDm8dypuW3yKJEiRhtmJdk71SDXnpMakBpXPDX72Lwxo5VpG4",
  "key14": "45GvwftKeUAD48B2cP6qJq9t7CteB8rsFfDCf28H3vvMxmFMCiS6U7J2K9t6BW5knhPXkDxAkJQjyVs3nn7DrQfr",
  "key15": "37gR1dDhU9xzGbLwqyHLEcx5yhpZkwi4CsrYdbjZWEou6zhRkFHgBSLA4aZQLLKFEmVbbWKF6ajhoetop4BnqTZJ",
  "key16": "3SpuSEkgpvrMf2raUF26wMtN5kFGDQjGZ8AhNn2P6ayBnHExdgLXr639cUMBeE9vB416E6BrrdfmJLcb1ndKxRmh",
  "key17": "4yhqWa6jyNqv66Rny7cL6sw1fFBMXHV7TsCdjRHgeovXB5Tg48DGuQcR4iAvYpPyLdoLFtiE2YTFHsiFTj8fdrta",
  "key18": "3cKBTxFx5qCeuXiaiTXa2MdnZm7Q5yz2P2Mk6TPRtjh2TUFfEs4JnK1rwcENrfEsBuQxHnuKfqc5bqJ1pEQBVRCT",
  "key19": "4W2nvDQKkX9xMokBfpKtbVrFtDfHruLgFpwQUKRyX7DXrJ64vxWssNsZKceD78wTeTjU78KABy4wn4HqXAqm8G9x",
  "key20": "2KPqTvovSwxT7szAfiV5n8Bxq9hFcyfHNehqNj7CwLiAdEZRPXkPNNqEQmcNazhczLiaieH3YPhq8Us4GXyAjj5n",
  "key21": "bH7LNB2Dz8N5AdoNevUQRfkLCfhEq5CddcJY4KJLctCmBtJ7L2ha7mnxWcHikZhquA7pQWDk7zPGxxnF6Nvv9Tm",
  "key22": "VtVGGEEKKxZ9t1YNVNArTfdfEnbZbEaB2sQaHSXYYy6Dg2zqW5YoxQUjQEhudqmXM2V4PcXSDpuJUaX4Qs6KfXe",
  "key23": "4CoSN1ECWn9ntR2zAHN7wXw7hZBiitMQwUymihosZPbvNMZjHDhjuetouwa4GeGFvnb9QVwsCWkRJ7dw88WsMYG9",
  "key24": "2kYpyARPWtHhokVpBgve83CS3TfqrSmoGTMwV6JfdVGt8iGZR9Zm5eQTYb7K7jjrUB1JTpMxHcm7CNkPLvyvs5wC",
  "key25": "4ZvjsohJshmxSevdW8PSTGchLuwy5jBuLdSFuxW89LSwb9mtVLj7RNnmB96Vviw5xzNAbhpDLCJBN5dffuktpVvW",
  "key26": "3DQcaTijhjDDfNFi1qEokha5XpLu17mFRYmL5zD1W9rKWdhvvTt1jBnErCD15pkFWPgHJPQK5JkD3bUxMCjvAsPa",
  "key27": "2upsmrey2wNVQC4bL5hJvwyAxRXfV7Rm9RstiQu8G8Z7B3q6xXwqnkqSSfJSH5qed2psr58mWr2TFnjzsdqesGNo",
  "key28": "2Qshhn3YzXaWy89Qa6dL9AnTvpoP1yxhhYggYNGfJtGirhhm2EiWdThttFfkXcwYB5hJqyvEgBn17FtTjWUynUNR",
  "key29": "5Phd5rim6mTXZGSDqg6akJZAk3693B5LKFkLwKtPL1GrWkdVMyW4FMxq6zRFzqmvjtwXdvEAKkAVPAQBarF7v4tC",
  "key30": "3EA1GjWNaqBjhF82tMioL8wLDtgKjs3aQ4ZJuhohY6m9SJCwSpY7zDQ3x5hxpkgdFf5KyLywn3MCNWU9PGZxqiDo",
  "key31": "o7eAVeSUnynj6PGJDQuDxfmRmKZYfZuD8CGVzgctgySEB21TRL1ugcfMSMEGgqnL8H7mi17LF8RFZQGkAfmpSCp",
  "key32": "3JonJUETiL55rJDBNHAyWrcz65w8yLrcDkRx8tum7msbFqnKgQpd933SqkYqHonG1VFKkYg6xbPEy7uU5YRFJYDi",
  "key33": "4YWoXT99obff9LeoXXpictQG6xPeeVaaG31iWzR5UzENF3kkksQWkiLFVatNonTaD7qq6c92KBqzoJXfUHCFBJVo",
  "key34": "63ww4YWPPhdvs5a7p8B8TBvee3qhBaQGxmpjiLAM2pQpwU8zgkPRFh8cn2jYo1CQcbehnXZquyHRBwcSzeHsHezS",
  "key35": "sQ5dYRDjvUz6uAmNBnrgvkyV56ypR4s4fE1XeWwkP8KeBBWs7z681y8BrRA5J8GHC6zhjWtoy8acg2Q5WuqU5z7",
  "key36": "KLBpMFH4gD6uqAP9BYacxZHgu5EwLnhJVAi3U4G1bUKLHANuy2CEXzJLv1xwQ6f1NTfhmsxPZidaU4sSzXKT7PP",
  "key37": "21tYJrxLfNnxvHSwwivbK4dKq11DUSb7tXULhTv2DaN27Gduq2Budf9uXfQJkp6tLyTwqMcC6JojT5jKU94ds6pg",
  "key38": "2s5Vynsq9uxAj4HrzwF5xDtw84yZqG9p1138tcjGBKL1KEPf5FQBeWoGocQYTgKVCLrFukqWntrGYbarhxJf9wJa"
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
