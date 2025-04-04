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
    "5EtTbLiM7YePCkLQQxvniHAqrGrr1yCtv4VEip3VAniA4LyzUL8cd1hhDgfqtxX8cU1TDKGdCULWFVvyh6nvs1U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkpcCsZ67pRN4NPQ1Hae99pPWEqNVsL9s7TR9U56qffw4FTAiJvra1me431dG3WfywdkA9N8kKU6SiNGE6B3a3D",
  "key1": "5dGX4H86XK3zoQpzyCgJNVrHcHwbffrhPeX7qiLiCSdQnGLVUgtFbdpTVTqDh1d9iJkgN2vgHFJHmWgK72pLzsfu",
  "key2": "3rJ7AHwW3pU8jkyHeRnXZLVxGfXoe6NrhFSV1pToknfX91w2Ub3HQ9xV8jVCHDyAMpaRcp18D18cgGVxrrvs6j1m",
  "key3": "2ZYkZnaoPMed9SyCxPtBfffGbaitsq1rJaRKDNtBP3z9MQhq7Nqc51re4SxPoqed7BPcukjBJ1iKRoRaib1KcM2R",
  "key4": "5bcQ8xGyYSQhs2kbWxKHakcQAYt4c8YVWCzsRZFJECPuXmQjxSZ8rGSy6mAkUmksCVkuKnKa5xU9Ag4Skc2gxAvs",
  "key5": "2PmCTUvuJAV5qHkqC3m8hDCQ4Xc7wWHwLXzZsv4G5VLSwFZUnQdRWiNGHkJKDpU2HSWjrdvA4e2usRepmZ8mGhca",
  "key6": "idCnEihk2PSCrizMUmYgY6Z5PkFPgyV7JdsiQurtLXLm1GMRMFGiG69H4m1fwefmH5J8Mhiz7L3qKZQz3JVRWas",
  "key7": "Z7hGZHmujPu17MwyzyrfVySLW6W7duQG2UCSMACdsPhQNa3jUD7o2SWHtwRwogeRnrfRHc9c2T9CPiTsLToyvrt",
  "key8": "X5s9vjDCHFe868PRdXAgUuGFnxMHaycmVuks2zNNT5Tiz7TNGDWmtBEjroMf84Et42HxtsmvG6DHtPj6mFYiKUu",
  "key9": "5LzWXW79HxFLqUzBGEu215QLSCVwMK6biWA18HF1QFerxu6ys5vbjn3NoNgSeukrcP3BELafk1ogZejM5a1rGZe1",
  "key10": "51K2NHtdoM8JwzJsFZuAzCqYjvrmB89gp9QheYVmPb8zQaKRgLTFbweni3cvbDSHuUshjbpTmhxtUUmCecPTp4Gp",
  "key11": "33ypRoJ5sxMPRgQw7KShZL9BbR8AnKD2qq8eGEvqJnKGdwJThMy8eZPZqWS8qXoTf7Y4ukR78nGSz27t7t9DnJMD",
  "key12": "wkSR9eWcJV4FSm2pDboPhr3jHp1StzD17qDpQJVju7wgxagVA9qDV38u1dttw3pXv8UJQbD1EehQYQbjgWZhUEX",
  "key13": "3QJoGxmd7DDrUhfd4UG7mn9yzYBccRfdqW3kgqv7kqZT36fFvcMBu46BA6dzzYzm9f3yboKtwHGQf1N2vEkhXWre",
  "key14": "3rRifDjps358X64fnttFkBwbJRhuzCdttLz71FBwxUz2iMm7ZB1U9JyCRDAcpfPhBsZcE8YAxDDmikiY4zA5yzBJ",
  "key15": "5AqVpAt3WTcVxms242eSSYF1CQWtNxsKrHbx5XCyYJduA71KtyZFKM24Gihvf7VYgXaSswmEPkVbm1gPK6XWzto5",
  "key16": "3G24maUXLjDNofEUnMbkMvULpNXLimArRZnqqrGeDCp7mbfaQ9Yq6MWssWm6sN2mfX96zYkrTdi4qYdGs8VYunMp",
  "key17": "3LMic5659YsX4SyPWkWjNedZMZuWkkoeAkjKeY9jc2sFh4LDhLWSiUsYdaLEPK7CtfXcLqfhV2XHknYqfqcSoJJH",
  "key18": "25dRSeeMhsGu9Pcixj87Ug3UNaBpY8b5KovP1SXSboXi7sH8sUWLMkq45A1JfhV9jE7SAdS7pjhDB2JbCSKyKDZe",
  "key19": "2yNWVChxZSgznNZaBcBEzjinDkJ1QUULw7C13z9MGLRGK4hzLskrLm1PFgRNt5RYRaHpeYPngpG4FF1k9vXdUS23",
  "key20": "5df99hMHFnGw1uqEUtV9heFDUFKHJP11BdPBxmkn4q8JY1egrPAUiesAVNPWfD3A9jwrseFVdcT17gE1SMZNs2Y5",
  "key21": "53fx2kMEvey5XnKkRtBWWFANLZERfeLRnjvnS4YfWLANsgcnqMG9EhchkKM8xt9X8HFgTFCDT4mKMDpgTiP7SVDt",
  "key22": "4VZG3XwGDoHrGKKhPJ76gp1NVCzCBpTbiUDe7K9vmQyC4iydmz2q9q6uyB7CF81psdDixcVaGYDm79DZQyi6ZeDa",
  "key23": "2PLV5PsFRzvTwfp9yuC2CZpfVxpYV9qbbv85Xjry19TfVw7TfRLLbtNnMLfSthrRmhtoEWU8wrJY1nyZX2ke81gj",
  "key24": "5GftUnUBLcVvzGQkR1XptAi6ww2BjaEhx3ovsy7w2uxKjKyvsdTfT4r5AsSSgtRuSciN1rX1EBWGM97WPS8E1NSo",
  "key25": "3kz7k8XwwUGJ3TLqZxRRLBoF8VP82irmZdVViJT6UoA9GSSscBk5TLNxRvDfcD8aSr1taJ2b4u9r7xk9NWv8hNw5",
  "key26": "3k1DF5PQm8wvBJy9f3QdRvYMp8p9Px1NkZDVwKuMrxkEMgui4Cbo1Ee3RKYCzcT6mR87LehRZjNRRJyJY5k3TqTu",
  "key27": "cbcXAYytD3As52mDnG7UctZpQRxb9GWWNcnVZN1Jxb4bG3ZzMZ4aCu7xeYwjcFVToxRiPqzJ7xns4SoYpCVTfvk",
  "key28": "wJyhuUMyqTR7LZgjDTDU48kmR3pgCmY2AizXvaH4VvQJRCqdWGcY3sAEwHjHV3Hf4d2w9CwhwWyQDd8uRjaZp6c",
  "key29": "iR6hssXhDuCkM4F1sU18KpbFJ5uCtr3EhA1EWyQ9NWHGWHpEcQ6QGJeaGSQ8MuszWR7w2yymVhnEgurviEiGkmu"
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
