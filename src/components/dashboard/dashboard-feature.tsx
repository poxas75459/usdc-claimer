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
    "5BVB94ghzuP5qHN9hfedczod8t7qHA1bHBJoSShSxZNaZZrrvK2L37igkSg8J9bTaQNGF3opzyQmdEJJ6c8ZQBdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WAq4ULpGeaobcCDkCSuLqhrmbs1ZoXmD7FXxvrpHKDnnfg9XYoHjWVwTH3683dQ1hKRyeFQ4Tp39EiKC2Vhz7db",
  "key1": "2pxC8fq3MwkShYDeo6xsGtrB3fJTijYnWLqbr22SL5m27iSXjVjVSMbUFfUFNWpxfFXFBDsr7LZDjvymcbooPN6Q",
  "key2": "63r1s49keeHV1tzC9ithUEjXnZXPwvgWZZWSehiWAVCFnzurf8FD42T4s3TAPimavUbBpwqbcSYeLuzisf41yxQg",
  "key3": "5HcgaumvZxCzomjs6evgbFFRdG1hzkj6ZamWPaCexK9ZMdXq97SitdeJtF2tQf2yxmGG8W85po4cf6SdmGwLX39U",
  "key4": "3hSB8PBrMzz1vXt7R2sQ3HayUmfyVGDydNqhz7yqvUKZN7UciGAe9dYCDwbSoVZWp8uYSjvraeUWs8LzpBQCho1C",
  "key5": "3ns4M5n6GdHoAsvJdcwboZUtKZk9MrBKizszTdtk6BaNdWznUjCckyrgo2dN9M1icN98LuYdzDTknoBYo9KZiECt",
  "key6": "3LLPWY6XE8kvFKBj1MwdtMns5ED7R7GLvLx1rCo9Qpn797bAgPKjCBTbsGCdf1EJzVCxVd29WawdNhjJC6Yqqt59",
  "key7": "26R84qKeZ3m1sZmH3b1sqyUUysExGXMyb5m6q2janWQWGa3xQHnyhnfbi7sww6SHWMfWy62WZuvpwgGx8wvKW48Z",
  "key8": "5HBfzkgxTEMnzERy8VXeik9Rb4SwCQ1ZsXJDoeCSh1t3tvxcFJWppJtZvPckwU8DsBDq31hwMdgWYpMxgpvEofS4",
  "key9": "4y5kgcPqyAeXV46UE7Nj4ZNQbvAHXaKtcrmnD54FjUjHn4rs5rHrvSF3hW22y8qWdsTkRQEXT6J4if9qkffDzpZo",
  "key10": "1jD6FpEkSQTCwA7tCPVj7fHkyqB4hraoLnJkTmEhEue4XwhU89uHancih3Gqq4BpdJqBxcBiq3q94afVotrjHPa",
  "key11": "4K8iWaCfneDwYnx8K9cXCqDqbiYFn1sMgHE75hyzfBfiJnEzHTVQqcsVFRpshGWyQQ1415HjY4xTTxpdvAQC1NQz",
  "key12": "5Pn53kLVCPpPtF1XDFENSxmHUCEt1AJ9bpu6P2xWqF5yfTP2P9bXUUYW8o8pXtKUYn6sDBntj2RDxZjg8MfKUMRE",
  "key13": "5J42VgWETBwFtuy46tahxNFnAtYVHCQRfWDceb1M7cSfFy5dow89PnTxydn148igKmQyoDomXaf2zt9WkPR8owQD",
  "key14": "3h1nc9utcYtHJmMr8vimfKNy7vzwAMDQVxreJoqD5oj5HKtwvJBmzf2toweyPYoUfBoGMyrKcvJqDEm4chVGwDT6",
  "key15": "66NmGeF2aBtj2WGFHp6wfDnzyFB635xAHx28a73W2dEmH3KD9fGrfwTqMvZm39ZrP7tMpQRxvHsfgmRxDnA2DDCs",
  "key16": "imqUdzWT6Kqoi9SZ9zRtMDyYkFsdkqfUuFLipTf31Rsa5X6GnuCHuAGPGMAv2G4XZApxftgo5vni3BYQDv3odZh",
  "key17": "67dnCh7dDTCJRrHddC8xwZgUd7TZQQKkQz3R25iqVrp4YEYB6zbPrAFYJ7kUsK3XoUYVy2huZp6Xgmqaky1e5kq5",
  "key18": "2TwL1Y3TrhJBiWJmp6Enf7F93q2Ay5VbJkkN4DbXkxxdebrN4xeWqGnJ2uavXXEDsz3XDw9Z9ELBxT83dUqjq6qx",
  "key19": "4XEddu2fsBM9BRvZ5QmisagRnz1HzDFXwS6D8ah5V93Ykx39cRmcXnvoqi89AXvvbQFLdeCv23aYBYt3HbQEYL6t",
  "key20": "28UGLQAqCSyYm2DW24oPf6ichaPpf98t18jqt6Jfg52BdZAZRx1YLgTUGJGiqLqkGnmdMeGn1ZjP4a269SCuMuHm",
  "key21": "3fjjTmyEowxDZQw7T5bDVYEWtFWPbvABuaJ4cYsLSfBFQZMxp4BYJLgcbwAmQcXA6wJQBozbTmpS6LdWpt23UQ7H",
  "key22": "4L2kXJjbmWGGNntHFDFoHC21Y5hKnSAhx5et9vVg14HiU5gaGaMFdUec1CfgvHYwCJ6MduTky9eDNmiyfRUmMwWF",
  "key23": "3jGyReyoJCVv7QxZvnseGr1xptEBi7vQpkS6BRz1iCY7xyDuFvvtzGUJCV5Qw8sGCYYXmUdw7PHU5Cr31WG9a6bo",
  "key24": "4UViGC6PtzZ3Za348GXWKoDeT7JqNSZgN4PfTxJCbgQZogL7YMzp7fNfVpiTWVEdedbtPqWkfTo5s2n6dNy6hcFo",
  "key25": "54KbgyVVkdB91PNNscLyiJDtDs2SE2rdoiTeJMh6vqjWmsqPKm2sr68AiVkgparhH2Aoep1kqbTyeKfGNwzWX67w",
  "key26": "4xMmCu2ihQxJrA2EatCQEVrTyhufPZtF1Yrg6xA9tJ7T1vAh5ipUxAU9UeziTz8mmqfjpigpqJWGLSKgWnNNjBUE",
  "key27": "5gB9tdxE483mKgoqpibBGygBMKYpRFVUpwWVjg4BJvUZuvEgpu3qHFCSJa161PyTJMDZiXCnkoo87gPpjtNKP3Hh",
  "key28": "5tJ3r1uSZQ4Gx4FARQrDv3637LRsHAFo1MoydXceKMPQYYQMxBoRD9zterTJYT3zRdLTngDaGHm7Sgg9kgocDKia",
  "key29": "5LnVW6VTFS5s4Cb7JnXSz1tHVFpSk6Y4GPr4CZZvqGyXVFRYQTfsUUN8Z2n9PKZ89ArShbw3Eyip2RDuVLAYLx5G",
  "key30": "5Z3eNkre5irEK9hZLjjSV73J1cVUCAbFxayyEkLchPQ5cGUJYJX5p4fosG1KhhC9jH1wRUxgm6LWjgUAJfNH5MtQ",
  "key31": "zk3j3b2siT6ukuG5A4YPqacXDCRzLS56Yj85HAjFjBQMwo3c9LhtBTDqni3kVdKX5gkU17iQgWfQ1vHKyS52ZXg",
  "key32": "jyBexxcbwjL98o8ErkcJNx7n8hhkwKmKY3J8RUyGsP4dxEJoTsH3D4jEuK7LMTqtAFHUNy7B2EGxzeHF4HDRdFm",
  "key33": "ie6hdjMMjKWNv61KVfLGZ6mnZ18pk3cscmwTJxhYmLDiG1UgbXbcsq7Cj77vLs6BogvFyENXuKh9zza1V21z3mf",
  "key34": "5pLCEUwNZP7S8taPsQcuLYVo1pFidy1a6RH9YX4D5VA38swKvdKxsncbK5HLvQRNxEk9xSHVRHkyEYe5WfrdfxoE",
  "key35": "3zVQSNvC1oShfbVAa2U7NDFZHrwNFba68MQ76dCBw8jVNVExm9nb8rfbHbJDCKKQrXf2aH7LqgHcbh1XtmCFj66W",
  "key36": "3i8AAne3H5cEw4wCFKYJssebmKKCfgkvLcFoRxpnHHj9rWcmxKXkqoCs92noApFfv3jB966JtRwuYYCF14Q9HxFu",
  "key37": "25rpUPsM6QETfwzWMNwME96EmPTJ7pqhtCEqaht9CyqEyPPKKkH6pSBYmrsoEH5Bxakh2qQhHD6GrELzzNjJfnym",
  "key38": "ycRUN4Zhoi8ZsDQA6VNAP7HPUhS86mSgrv8ZnVfV19Jfbq89832AYGvV3o5nMB5nENJQF5KwRdnT1Brp8ZiiVsX",
  "key39": "39NxPXTHegSuEvs1oqQJhD6QDanN6UrdxDCvsqJLcVHFqa7WgbpE6HVZox2aVGjvqPBff27tXGJx9K7s5nyAzwAL",
  "key40": "LWc1sdHfoSDSFLLAMHo4JzZTiHPPCVbpQLCNWDN7uMrBDGomf6JMgrzxthmSokQGyZsvKmaUNbaCURKEbpy4s8s",
  "key41": "pmuHNQrmBmjf158thnZXnvnf6DszaPoVuGK8tn1KkdAd5hVFAE5WE1rjiXjMtCC7Ca28t3B4ebGkmnNS5tB2MMh",
  "key42": "3ep11zeWXQvDWVrvm7ua3Yp7QB5BjVtoSMckTJ5G5WN4z1JmwsBCYZtMS3Z2WCWggUpnjwr7sYZprWXdjZGqgXd7",
  "key43": "34YL6Fekf9MU9zB1UWFAJNxT1JGcnxKdytxmHjCru5VtYDrMGMu5SWcmofV4RSHSJGKtz2zRk1mi1Ured3xqN5Eq",
  "key44": "62kTpT2JLudwF2N3Yw5Zmbqi6drpCjAGzScw4PYXeHW4iuHkEWbEnymDLGDmXAFUpXA64H5sGfCXcq7r9R82ZYzA",
  "key45": "62qhn5DNKCJ8YxtsEYQ2NzMx4pWd3wrPnuKryQSPjAf87Yrrx7qmn6czif2MJrGDpxRV2FhaPsoxtcygFAZoP27k"
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
