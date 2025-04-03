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
    "5LJpg4MrrBnGptE82L32UJoGEJaG8K4NKTrJvRJCmSRmqE6SjSCZwhp4KWuD5Sk1tyNMMEaR63vYVkb3FMhjGjLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJWRpM4tF7FgokVg7mh7zaoXtH6LJjc6G3F1kZJf4m69XRuKJErE7rzSoTsBYPrZZZt4BaHMGHxsAXwR6HXZXRC",
  "key1": "5KMuTBeHMroJu3JLaKKLD9xZBg25DTpqDGcvR94nqaGT8G7bDCN7fADHFQy4upRxYEwc97o8m8fYYc1u21Kmy6de",
  "key2": "4N5hBftQoVR8MxEEmkqpzrxE37XAuRVsT7xmvoo43f7U17y9UKwWVGjVUBBFo3opjB2gQpWmTmAGnwNAb9mduBFV",
  "key3": "3et2UiZQsPnDdagMoGAJmLCWZ59XwxZBiHxojpDoADV4ENTe6nhLYM8Zi7ZMBLMN79v29E66BJUnAGn9FxrYDNKm",
  "key4": "2BZJVyuyLsnt1HBsura3bvEYzk58ycH8BzFz1k6cVGapF7514QNsNnu9iQsRB7RbBJ54VcFVqb9tKAPAZ1n5JuVQ",
  "key5": "3vj5QdETHyZRq784cKaq4o9ZA4WvkjyGDjQJMeVhT7xKkEmQS11DvZnpNLeDg3AxxKksqtiKFixirvcwTDEMKrp7",
  "key6": "3nswxVoGcA7c1VNWZYPKQenjxYmEASZQuFKDYUTrz5Vpf8YqHFT9rbHVmN7QSLYUtRGHnLY4ZJMMLrBA8Y9yua2Y",
  "key7": "3gK3sJXGKfHyKajuWKv7zNj7TKDDJXYijpP93b9L1ZF79r4ku14o2iVH7gN9KtFxFyF8FaF39oZvAqUFf1XnL9SY",
  "key8": "n9mpLAdJQsyYF2LVZv8bRnjZFuEH33Sq996ZfMf7WX99Nqg1XhYHvp1AnE3YVw8R5QJbSjMnbzNsrenep4yLt93",
  "key9": "2MRANU36n3285JZMVaqxeH5jzkrKjmcLdSV2rkcgmfzMXjPxhrzG2xZwo2GbcsAPvN2vwJsoJvkkY5WWesgRpeXD",
  "key10": "5Pe7sUWkdMt1XgVFe1xebZQet8WBAzQNaK8cW6se84udwrY4WiLRAa2nYqgP2bXAvk6K1F2qB91ecHUCwCzmRwTn",
  "key11": "2wYeD5PVDydWnRddeU5UbqKeb8LXT9EamZ97NKean8xFPAU8VgP55qttVWXX33LcFn33ZFZXDgSNosdGGcuXacdW",
  "key12": "41BBiEHh3mdMHdauGXoZoaiZ8oVCxMukWFqkwgGybqiP8do78MZQooetoQfG5ordPqWtdEC3RTT8NuWU18A6MLcE",
  "key13": "3zzkfAq8kQun3hZvPSiq8v6pPfFx42Fnr7qbS6kQMYBqKF8cTXHJknXydknzDbo6QnnEvDCCv87UR6CyKmL2rktU",
  "key14": "3L74HFmQnqNDhiCTNGGgAd4MLKtnNNkXKc8CaiFzMgyk5aT3ry2kthXJRRzLZnzEsTgxzndLHfSCWAsj1Qgx1bBL",
  "key15": "4D8tYEnUouqbPa8xiLNWkA1UALbWzVHWUe3zMR7HgPKWu7qMPJVkLaNaPkJbFPNFxdRikogRPMRSkNou8rcEpi1H",
  "key16": "3oKyVyNHuoHWkNpbVcUNjQRJocmvzePP1Hap2DjjRab1WQqryav7Z7E9rgEwh8vaoTGQeQcxCTMfe6JuDxuVVPvK",
  "key17": "5EzekpU6bZQxj91s52tp2SGGjJQRgz3euebpeFV2QrvzqPmaZUREPPqBdBJuiPVWCKmFKmV7McQSwREeyenp14Fs",
  "key18": "4yhtVQ6PfzTECfXtrsWJEGENZdCWgtgtCrniX7RqFfaJKTewvUkk36jJcYVqjLtnoJZgZm1g6sEShuSvSHpcyE5v",
  "key19": "3sy95b8FmcLme5m2YNcYFPQxpUJrhFDmTWNG24xknQPms9YQLqo2ewQ3RUa1USmui4bF2JAe9QEfsREwfWjqd47H",
  "key20": "5Qw8E45YtoVBGJayb8DbFGQ2pu8v9jdN17gE8xoCP75mrin9DEsWpZfCk4TYy9zXJZZTJsARXp78WhRXgqfwYtNX",
  "key21": "56198aEd8uv8VoDrmt3Pmnen5vC3P3813ZtgoXdgLwFNDgzWjV1K8B6aMSnSeMdDLEvuYdBxfCSDiPfbA65xBgh6",
  "key22": "5Dd3usCMEs41GjwR3kUeFYTRX8FMb82X4rkdmQErYWriJFYNvFQft36EoxEvmhCJyWjZcjjyHRSFRPLHcMGRmE7u",
  "key23": "57PzPBaH3nisC8pk4ZnmQ62wukD9Fim9c6k8ZB5snPk3SUmCUbwCbJ81ZPehQPmNzmQidZLXqNukbAGwBaNj4w3u",
  "key24": "t8eYt6DjP4DAtiEPiRnEy2W9FF1KNDa6J7V14NCYjWMxnprbWFThMsCpnb2Ty8E4AhynU1jqSKWggmvcyhuNNV4",
  "key25": "4pW3gvvB6G5Kzsex2zpgvAWnMS4kReqP8oYgTWcD9ibNFJxsHG4EJdk4d1vrknoVJE8TuTLKB7Qo6aPJqUiuSk3q",
  "key26": "2zW5ukuU4KAxiXQ29ezJfgu9hophGxrFYZqVZtSxqtZRSpr6fEzFwUd2vzx15SzTp1uwFfubVdGC5weH5yy7VcTa",
  "key27": "3UNn2urBGTi9STD4arG9kdhUTckabbdWtvTfLnUNwLTPA1tvTeKiQ5XSbDY3zM9GRV19ygEQ7phWpqLDKuTSq7Kc",
  "key28": "3WxNfho7raHYWm9Lyr4kNJAc9Z6uwfZqthY9tK91kZ1t5esgZ2YCY2XnuECVmRJJHrVPQ9vzxkhbjjpqm688mZoV",
  "key29": "21k4kxeExjjAR96QBMdz8xMyFJqxR4YcLxEpjhGgEH2C71i1cPi7hhh8puHNSBepDr4ehivVHnUhqtJ1ss4CuXxz",
  "key30": "EeXsW2hdKZhw98rJeuS3vjsBUbsft4pj2qQfSMCLJYAnivhX4jbB8nxj56k8muFGc1oFQ2zPT33ncGPcSgTAr3y",
  "key31": "FdKf2GLZSxKCCJBvqecXfdxfizxZtpZCzLKEDbY5PNrW5siVo2529uFN9zCvQ8tEJM5n2b8dyJS8tSck4cUjqpX",
  "key32": "4fXMGQXJLnw32hasQgV3p3QwdqsrJHV8HfJNDpMMuoBkjkuLxsJKgpVgRtGLWNW9sCNAw3foYxQV94mqqpe7Kbzq",
  "key33": "yENozPaA2ZWCJSYd9NnWvaw7hN4TaCWubBo8pciZ7iGzMx7US7cHnFM5cMKE9kD2s6a4MTMzfbGWn7vdzUtgaXe",
  "key34": "3bb6qMXJtkSgAYLHn3gj9cbEbCQG5mQQTYzuK7zqyh3QA3xhczK7KeVHRvVfvhmwm1hW55Bt6UtqQWEi4wcJHPZ7",
  "key35": "3Nc5tWjybwu9LqccaAptReyKhuJaCifYLtPvrbYsCJB6bYZXgtQHU988A55NTUHoZEVpqfhVtNjXnaVLTcc3djAL",
  "key36": "4FY2ev9imjgTEW9K6uMj3bKKZ8kjRVz3c66s6q5ZDLx5tNbGuwGbsweroihSsC4tfY7MfSeRxffDnSYY9UG7ztoe",
  "key37": "4oancaq3TVFFXMMMgSE4GRRe7dnkEdKAQ55kXaNu7zk9ZSoxHX1YqsLngauxkRsRGrYoCYj1qUGt7zwBCtyzSq3C",
  "key38": "CDMjWKh5bZFEFChBJbqXBmTd1JRoCzxJnUTBK6SPeGjLX8WCsypUfrJqLJQStP5fTEuvD5Qb7BXiUZoi1wcZTjN",
  "key39": "LGZrNpSLA1oMBxy47AT1f5AbbDq9hJuEYyZ7aGEaF6aNQVnUDKrjoS6jVFcXYcpo4R5QvqHeJCxiGC3rK4LAwmG",
  "key40": "nHnZZHBjUndoCQvMkydhqk7EcbNFMah8bqh1Bcsqv7REgE72Gsq3WBmn1CcToqdZzqNMriwoooede1eWdwMkJZH",
  "key41": "d31HbUyPTT5mQNRjsX3dxsqsvkNRFFYyCdoq5hNJmwKuHYhGYs9hGmUTvkzQfCUat4pBCb9PMxgCfx4psiXYtbT",
  "key42": "53cDNo921GRE93J6So3u2cvEzgJMqq263QYP65x4P5gMnQ9TdafWWiDqDJGG2qkKqhdr5Qk8xMqgr6MmzN6HYSiM",
  "key43": "TVrTAtD6FT5hRPtB2Yupdn1Lwz48rapZzQWevXE91xbY1CNWpcFNYstNAgR6dfasiUHnJ2MXfUYi9CLMvs9QtjL",
  "key44": "2A3QSu2qqhmWCTktawQ5gXMKtjipTQW5pkiZpzrt7jMHAFkwkWgaLSm9HXuNYqRXimg2cAmFv214JhpP1s3WLirp",
  "key45": "faUDBME1kwDLGXJQ3z5VkmDRYfG9DQSbWyZQZ2TUEJmj6UGrXq22WqFHaVBHrmW1WMWvhZyq2eQsbEKaehB3xPK",
  "key46": "5U7Xq2Hf7U61faAL5LURB5jgrstkrkCLayybUgU4hVLaoL5ukwLQ5AdKgR6h1xoVKhuMsDCKnqaZb8PYnomUqPPV",
  "key47": "2MoFmCf4sdnhUtWe8JHCmZy3yVVuyorEU8pRXpz42cDr6TPNFj2hW69CxRTKXGRxg5BVfwBBWz1LGmT6FZkeTmyR"
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
