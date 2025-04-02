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
    "5ByvH8tcRkqMUWbnzvCNrgwEfnmLkEMLfU8tQPnQ7R1b5s9hD1FfNw6yNxxAA2dSpL5RSv2aXwtiHdsPbaBGPNK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPKaGthskDCfSi86BY3bqkT2wNMCwBDZCtTSe5x59qi9hX2ojuYhR2pgfZHk3HSVqQ9oD97hSdNAiY72MgCYbTQ",
  "key1": "29rPJs6STmwYsHbe9H6vQ7YQbaiatRrFgVxz2SgGeNfzHvJzjHyZJE1a7ahJ3FE55wHe6baJpJesq6dTU1U3Vba6",
  "key2": "3hLPCS9NJ54jnwQqRQPbT7hB4Q5yyqmKWUmSsqL473onkGgY8Q8nbxpG8nTNWTWxqa2KRzhYKav3rAZ995ewGLdp",
  "key3": "3g3dyX2gqz9duhx39nMray9yVgfwEbLfc15BdCG5QX3LBN3cMC2kp9rgjpoJx1zect6dfcrgP3D5pdBdC9FQXBtM",
  "key4": "57DEVwQN3rEc8vn8fSSw1zJB2gam33yndsBc1R2YyNUTBYz7asnJNgUe1KnLFdt7uvxfj382pFzbpjnSukJkjPDR",
  "key5": "2pD9pp5CEVgMA1SHJbL6jPcTgim3cSpsjUgndZdpqzb5GH899UBy5qKvM3vQdZaQktRVXZae1gUdTpfv98L5KT97",
  "key6": "4JVXUEN398aiLq8hoDQtkJfuiNR424e6pFFH8RXF4TuWCzDMggAGzRLw3LPH2VVhQ8DU4aP7cn5iFs1o5xtoqdxr",
  "key7": "4Hcwgfi4Y6XZQE9jeho96UHBcSPf2re2kugMoFxGXYgj1s2HvwwMh4bi2CMs5Y7rdfaYzbM13px5x3hd4whV7A88",
  "key8": "d9xZq2unJAQiwq5U5rU2nvYHJfQc9AX2XgJsYA7P4M2DGF3vH4wvzcYRGnj9RqBUptcXwQ4SjERe3u7zd4q2Nbs",
  "key9": "3HzbVdmazdxbdbcq82u4RkBUYyhB1ensfjykkmztxvKtrdvu3ssspaKDHgYWhNaycDh54ij7m7qMezaYXEdGR2Nf",
  "key10": "67azj4edMp8qLSojet2N1t2eqt4E8HKbEGXRUCugdjqJc34zSBUV4xQ3rrCfMoP28515gcSb25Z26QWhLfcR264g",
  "key11": "4RWf1T1fXKjWz4mxbVcnG4PLrm4gbAxR2f8gdFSGH9cJEytp7y9BNT5ifUQJBBZe99CA7NauTVxykjYqU1bryUo4",
  "key12": "4fWQvhRipwAVsebx1sDrA5N9Pj5yo914LuRuKTELFqv2hdeutWrPTx6HWbWpBLrxAXQ2ZkduQeVGuzvU7PNDeYWY",
  "key13": "4QVrFVbCJWnuW1g1G7wDa2gLXVHTzSVb6r6nfihWWx3S6UAuEPcrcYfjRYeFzdR87AgvtSPYVTF9iZ6Rq9BxbALv",
  "key14": "2sBgm78MDFup1eZ8xCA7CYR2XaKCv8ZVESwroCXXKyw9Hrc8S3BJcT8UZfqwMirYtPHoBsA6rx96r17SPaUjcvPU",
  "key15": "4E64GeLLK6yaYKg91twLb5cMRp45Jq7aBmzE63p7KFSCsECjCu9VJ8kuzUrBkDs4ee6AFvhq1cnmzZSz7Gnhm87m",
  "key16": "5rWW9hGvH6VPXDmSRpxt4p9GCXBfiy8ePFJs4Y8ePnQ5NRM6YUtDm1JoVTf9vQPNQXyHosHiPXzVh3pfhzC1ooc4",
  "key17": "3i35iphWzhKNRLhYR59P2o98uCcfBjm3bGMVUAdHGuk1y2aAXurrdzTZ93u2EkpPa8Mdr2FZ4hj8QnzP8JqgqhZ3",
  "key18": "3qimpRdYT2ZRg698V7CihVo8cN8CA2hV4mgwYsVUjEmhyraEZxw3URdMYpYK2op3KkU5hZwsKYHRkAyZ9AsYgSKV",
  "key19": "5aDsgefa7P2b1HDwcgLK9KRqsajdLWQ5cMQpM8h7L9H9DJaNN8AbWyatxrYSDpGsTWPDWgvR3BUCVzo5jrPZSxLY",
  "key20": "xrJnjPjCt9JAqVdfRoc5uGFYG4sh685H4Um7Qfgi54APXWKeDsFXPxnbssgyaK6Em68c6mCbkJf3YmpsHznikCq",
  "key21": "5u5RTHQ4ZgskSNTQ9JaX4bQmYaQw6mFmriVq52keENCBwkEw3K7Mfx2GBZaNkBzig6fJRkcWjFrAiUTVnapeKK2q",
  "key22": "2Nqck5uGsjPyrpkUTDJwJ8KgMeZJDCakCpB5DdW5WYsBj4bRpDR8vhpuu3eGFe3WERYxdPqWfnrKSRrAYxQVfnvv",
  "key23": "kKKWkkjEqMXfMHxoMrWmhXwcpfaappquuoRHEdvDGnNtX4QWSkubF7xnGDq4Xhre6Ye214XskMwxawfhGarTXcd",
  "key24": "31amiadPmXprREYKcUvYhuU85gJpwcTQ4r62xEuPN4dDuK2PZ8DcjGhoRf6r364S8gFm1uBn3vM9sSjT9XhC3o5c",
  "key25": "4i3hTPhN7W7rdVu3CWEZRxy6p8dU5ALmgmWWkfe9VSVoJQPXMF93swgQDFprN2izChiyi5bwCJq63jNWfBzbmRYN",
  "key26": "3caA2VZf2nJrforwYrYPgzVhtXzN8RpXThuPG1GEs7Nsc2E8tWh6f8HtufHDACTMo6esKbp37zEUwYfGCijtciiq",
  "key27": "vBze4Xaj78Fuq8Y1nVMyPSWPdgi9REBxzWnLy4yp92kdDjUsgxhK28CmcC8q5tbnUhq5ipQym3Joi4nhP6ViuqM",
  "key28": "3FY5TNJ9g2QHMto1zd26bjmfAsaY1buKBGcyW9erSdm9ttPmApiG3itznJZfC86z4jSWH24gFXmsFD9rAd5BhUM8",
  "key29": "3Ms1pivxrp24QYZa1qho7soWJ6Yi9BA9FHpoNJRtTgzXni6fayQ6MP28baV5dLxvURbNGiwqyoW56eXV1x9XAi2V",
  "key30": "2NAoa9QJfSHFEhohFv6zttSht9eEE68ADWC4RS4aNYs7EiuQ9pc1732fScfjtCBBUgArjGRL67pphKoNNCaaU3qs",
  "key31": "38NpVSEmnZ11WL2o5WMjWFzTJhAmmxNdUgUbBimMZ2E44jAaZyxGjWFnpVrnE4GMvwKkAeMMDxnQD3n7kS4VGKV5",
  "key32": "2Cmu1CQZFWF2zEtDQyr3hppAPHQuPZGiDbwkZsJRCGiqgS6kUgnHiVmTduWcT4cauZykZ5citKAei8d983QuMXsV",
  "key33": "2rB3pU85ADgqgciaYxBKYK8s6vgj2ahwdpEKrYnPLLXxeDAYD7sApPGQ6TnAw6p5rxPY2Yu7aVhTWmAJN6zPXUnS",
  "key34": "35Bo7Zm4yozi2BiqneAnWzZhusU8xnsb1iR5ZahzYmkB72HrBUSuyUL6CfAMG1upKvwBqo1qZZHT8tohE8E4tDjo",
  "key35": "296ZB1kherqSiupMDB8dB11C1vLg2YHcNXeR1tT9K23nTY3pAZU1hxzEXNJtiQ1CiX211yo6Hro9C1efZYZhX2Ci",
  "key36": "3Xo22ezDN4XowzbXf53dxnk6WjSJPwmHDjdmTB6WnxRtih1P8YiwZPGpMXzYHUF5R9fUJevXAaAYZDoFURpVWuo8",
  "key37": "4w6rg8W1Sb853cdcTjLKXd8FoTiJWbqaqBSKo3ACJK4BBevFyTqUZvKoZeQTEDQxGGyW6drs63CvqaKB4EYu6in2",
  "key38": "efhFPmzUZvBcMEjqZiBpNFEG1ViqRzhhD8xAmQUpf8smvnAjJ9e4YgJ1hJugDmDRCe2kPnZEyxWkct3z93zfz6J",
  "key39": "3Mg3qgSUbSGneSEPrJFb5edJGrXfEjJBTLef126KHAE9BFM79QQfMzwTmcM21DuTcPTnjcGCY3v6jzvbQdKtDVq1",
  "key40": "dtXZhqDhpQPxMreCHSaz9H3tPAhbZHPxXyLNTF2UBz5riz5NKYiEnuV2scKY2q2fi84WQf5FF9cfLE9i7vRy5gx",
  "key41": "61h8heYWkomRD7XyJpKvBuL3JQYjgJ21qWE2iTorUNjZsPxPp7cQkn56CJWNxpePLqdZ3DfdtijZBAkF4PYu8khE",
  "key42": "2Y41EsTYy1fMbqjupckH5WWdHgqyF6T7hu5R2cMP56mb6LKFyEWYbnCX6yUy4sMbMz7CX5X7odJTT5Fo4oRv4Aq1",
  "key43": "5A4mtgZ9pZZs1ryixVY5WtoT2pM5YkiP1ZWD7fZ85M4FgaxfL8SSwF8b4er4576TRfdMsGZjrk69Zx8yR4xTtdAF",
  "key44": "3UVc4TgyZQrGoyBN5jKnnTGBTCShFnjHppSujfSV2L6cDeJXzqYHTbA5TsgtDc6NJVbMiACGsytDEefEJBNB5CeS",
  "key45": "3hk4T2oak6nYLt1KnJ9hbB337xsBQykz8V1gSHSisF2z5WLTW3nWhn3NF9ftVyhXPU5oQAjD4tsg6vnvBEgmsUxV",
  "key46": "5x9ZJgXnaPpU6Fz1b1b1WxxyQnJmUwZU9Wjs4ZwgQ2LY4A25sxFWiatv96NERDryXW69yEapxQBbFz5CQnWkomoV"
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
