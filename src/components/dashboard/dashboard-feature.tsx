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
    "3iHgSGprppzPuUiqYfsTgzJYiAkyRkmyxJAZnrn8gz6GsBkcX3LDrrFh8s44ge9GF2YXru1RwGCA5Rq6wGFUGj2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7zuR5KCdacffnC3iG1gVoeaJNVaaRb39dB1fBY3bN8H8krmn3y1vn9ftd2ZEMz1h9j9arGaRtW4P9CoAkDC53x",
  "key1": "22YqJo1hWR9B6nMLZR4F8REJS854sxZuMQGvtTjgv85FFnnk5s1q4CwPwoX4mkH3zjz1ChYvyWAzLBqdUX9MuwNk",
  "key2": "2Do5AazHCSy6ezUELUAgjTAU35b96TFgckP8y1r7RVEJYxJvGrADUtkTFhBxcqcovZrFFsdGXi4wPjt1S6gTcjrN",
  "key3": "3kaBvrSTNd7ebpbDb3MTVQWJkrs7Rq6dYCvVyofsppq6Bs3LZC7TyhNQymLp2kbbxVZNYZrYFBYGERkiXT7jx4Zz",
  "key4": "4nqBB12fGhgSstx9de34WQD9ZzcSJXchAxu3t9NtDjwq1hMkbNZAesYVBSftNP5TYb6p69t7ZcMRWkth7pxXk45Q",
  "key5": "5ZcGQ2Hj4NkookTaEyrVqJczVW2RhcsnW1bS347JWuC2jWEFmx9yvzBTCSStsJY5XWXMMY3eJbMmoHSiZxSSPEjQ",
  "key6": "4xhaicSJbSRVbcCAkN3bEjyAS53WhcV3Ts3sxnnLNAQ8ni8JwabQPW6vJA5UJfhEeMJDDiUpvmXQu6SDkUWRFcV5",
  "key7": "2mcLcKChqH3paV7Tvof8qTJ1Qb7u361Waw8LZxReb6hPJ2jarb1ktag31SerwuYz344ZneRnJWkRC4N3owLPFZVA",
  "key8": "2NF7SLVHWMoDtT4rb88Ht9DYLhM555CT9YENujRiD37CW1JJfrt3Cbj4NdMc2FBYDjig6oC3TF2fhYQU4yb6mJBG",
  "key9": "58gvtDzN5ajMWeAxQJ7wStdygGEi2QBfWcfHAyy2PnE5Gp6zduG9Ei3oZV5Zo7EJbyxefFztF14e8xCdwesFc7Kq",
  "key10": "5hpvgLgDSd6LBz93V1EdagDSZJzw82kD42UdZ5cugyeq8nz3wSbXmuVQin847KPm7YDmhoJd49y89TY8XZNvdFye",
  "key11": "59SGa7CymLeoSQxj4ibqWGbGGxh1CrHiQUhsQNpFuhufBcrjC8ZGYBpLNPL3aX2AvisDbLS6tiAeF3w4DZpBuCsu",
  "key12": "2dkwCaC2Dbs8bFpavnyj9DaMN9Y7vPzeb5iwTRwyHYPHNaqetXRESdUbNpGoXXNRa6bd5S2y1YenaM4wXAUxucx7",
  "key13": "5GV32pUn7wTnotufdjG7P9DPBoftGDzuVSQeuaeWZJisfzWRusiqULv9F1M232jKLLN3QcLGXkm2zaNvHa1KzcJY",
  "key14": "5jHRhgtvEZULbSL8aFbiFDCACGG5YXTEbDnPitMTE9izvY3uayS62dsKcUpAUvZNKye6jKFmpeEdF3UzMuJUVUrU",
  "key15": "64u3k1B8U1ShRfd5Eo9cqCJphPxhzz5JY6pAV7fbnKQ6AzUuTyr1ehstffZtr8BVB7JsCYEz2zQeeVFkpTnPdejA",
  "key16": "24L6aNjYmzaotbugYNo4VkHEzhyhhMYcnPdjaZR4g8bgRHckEPbtxqTRPprFhd8BBdwN71Mf5R4evoPX1RbutrNN",
  "key17": "2Kn6icD3QC4bbMkZByf8nUPu62FfjFyMVk7mXcLEXSUKyU9aiJds4R95cAf6qKsxS7Xyy9pE6kfgivgUB3sire8H",
  "key18": "4GncrG2q9ZKtNP5fjKjxrwG4yvkDTkS521cjfrgH6nLpQQ68jcHKEEY569sDqCR9o35UhGy9vreDytZmgG7CFCEE",
  "key19": "61WGrtqMtvhgeMTXr3T9mpE83VR5bz4CVD5BN7AYsKxK8kH2PW29GjSPhpjKL2eRxwU8JD6h6AhqFBHzdPYJmBLD",
  "key20": "4Fyx13qz8QXnyXvaXEoM5YdNhBawc33tZ19ZVJraYowdjPPCMXLjU1TxRNAF9A79x11Xi7tTF2gDgnvQvy3TT67n",
  "key21": "CaQ5U3GZKwsWj8EAKdFdaBfCL3A29ehM6c54zU6z5xRwZLK2HscWB3KXuV38uqf6WzpiJC8h8HEGCufoBh3qCF6",
  "key22": "3gUqLrn4H5Qf8Fj4monwiBwZxL6oUGfk9ecNaSFsxmAK4GKBuwpt7CCkTKZwAx6WCX4qS5DnpwGL9E3rKWvbbAEW",
  "key23": "5SLxXwDNVyjXetW2pLB7ntQ4TnJUTffrnX1mos3p2GCnhYu2PF3gtRXuQUthsuM6X26ycyFx3SbrQS2xntgKv5hU",
  "key24": "37hEqm8CzfFoDxUsvzE5C5v8nbSDNNdzw8RqRmQEakndopCpXga1nhMrocyQxMuSRWdfTEnCU6ko3d1LiExQy5JP",
  "key25": "3Ag34E1i3MRKwswiBTSqtrERFjJyuvJNu9GnTULLArModM2syJU4iHMtQiWjRBV82j15WRYzZCLRZAEFY2jZg7xG",
  "key26": "5Nzd5KX4dUYm52TzcWvvrK9GXKQYFe2Hg5EMrpvreXgFsR8oxYst4gtnd9ihJap2FjudXkLK1XvjHx1CVYuLYAm2",
  "key27": "2kVZMVcxM2PDkAtt3LpkCUXzTxwddsm5j7faMo5gJQuAFgfdT1cLbnCmXKZymNpUxsVWgDk586VazyA6QLxeKJda",
  "key28": "5b8r3g9ZgCj9BMyuznLy3HCJVhNKoMdpTg8QMfnaydbBKsEeEun3q3ZHe3kSnGkCdUKLDhmsyPHDqD3v6RXGMXW6",
  "key29": "4nrt3femdGDFQjGEXK36vEKnNoAcEWBpwWigNb7HLj83x9YEEbWmkLYaMxFmZMEkhEmzdjXorES5xewNP1BWJ3x8",
  "key30": "NUCmWKg25VDEoAZLT4hxfDBjZy13Dz6i2dd44vLnwqEktTmC6pPDrt2QnSukjXzcjLhAcWm66ycghiDRF5Cexcy",
  "key31": "37EVUKPAyPVKvfUjDNAL46JSgXPH3vyajvExo7U7ndsQz1UoWesWJCGJGAzqqVSaMxNdUESeFD9K8g7pAaxdJ4zR",
  "key32": "4DM38PGYHUmTjMiZVCPsStp2nxF2NWecVxcdLuHiCKNrZUBqG62kmATVQRUk5HSaAnA2SxBKwMK132aSdtDDSpCh",
  "key33": "3irWvpbRcLb8h5aUDptSoe19PAsTisuF948CYL5WFNMYm1i4NLH8vyRA38adFPhsFzaumRPW4Ncjnj4NbeDVZFga",
  "key34": "4NiiJDSxeXBF4JmV56w7LMrhxdGRXyinsfT2h6rtjMAe7yWM86aEC6B8egq16MR3j6XYFBVP7q6UGLJEyg1tB5sJ",
  "key35": "5Egij6A7XSHxe1BNfV1irUrV9ha2KqyU8LsYwhSF3GZf3aePNiNhJJk1BBdD52Qykq1eSnppXcNKsrT6sRbSCUt7",
  "key36": "5dG8obMnWcNnzLwPk9DAoEX6wJVoKVC5CzXUpov4ycEhYLCGDjojZCaNDRHdn3MhtCXAtZ9Ws2X6ESrsAMGqUiVi",
  "key37": "5fCTCb518hcJUNaR5aFeCEh8dVfFPiNJNtc8QY329c8xhaANiXUEb5HTME5bW1381V1EpPovW2cy91cYChm2dbnB",
  "key38": "38TkaQGeXhSHGFd32An1hzeL6iUZpB3oPzCMxNJHFLypCYCWSgYcrjhjzAox3HnPAfZmNXWK8gFM52q17cY6efVt",
  "key39": "51H4oByPmyCfkfgN9fzDy59cc2yXVYq7Ghoxh98xyLwGicwz19A5a34qhHWpm9gqesFfN2eWK7qA4Nr8vp8Cq63h",
  "key40": "4uG5RkpiTwZuqwN58MkaE9Bmfuk4wtZaLzkUPcErpVFeUU9mFWF2wXhSwwCZREnBcGUCFEv6Bi7cK2FEK7s5ypiV",
  "key41": "qUq6JGWDCnwY2GTy9e6Gh215v3NS5AzvzttEZ9aEBQSw61xCsVpaocX1zByP9v1ByQahLLjUMVozepPKu4NPzYv",
  "key42": "2VmzYootPQ4bh2jsMyMS4PwXn6WEtTjbDb356Jmwg7mNgPe2E5eRbKG8mo3bKA8RzdKWZneR96Ukt5sp5h9yWaoF",
  "key43": "5iSki2BudXYehDpwEdECeHXAG5RWWnUhdK8CEkFFN68wKodrvoXeJWBCMJFxmzDL5Y12dxNt3B91Lwf2CKNBo1Bg",
  "key44": "2hDnvX3hRs5uvCSv9BtSiaEp8S6djx2FbuU3rvP4P8FxbXV8vhMAcAsVfmAvTWEpqWNjt6oujLdpQNQPNYK64sa2",
  "key45": "25ybyuBvbWdatYxLY557VY945AEqGSxVgu4K2X5bue2G6Deeo6wrVBeymTzjVGgJ7ZCQFmncME3YJNt4NxGFThPN",
  "key46": "wEchSZnwWC288Kd6Y6nQNFj3jiCCxZhszhct8aLKaBJe6cyf3dUEWnDkxUhRvsbeGTGApmzr2w8KbbdseR1iHmP",
  "key47": "4yDnxuM6C8hbJQDPoyAexbqoCE9fTcEWRh6HhE9aESEGBpewm5C6qkNZdtzNwXuHA15uFpqKoJDh3YYZzcLCgPtb"
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
