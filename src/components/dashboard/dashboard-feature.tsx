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
    "4z3xz6f8QKVunBnZyj2snAcgFukfxj4c1tJQJpz4ripy4HQHXvCKY9PF6m9AgAP4sKJu4einVt6g3fic3b4TZDkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmdT3XGFdf5Qv5uRXs1hZtfHzqcuWxLD4avVJjC1tqX5ZywQZb2WQqhNMkXeT7aSfjHvKeSsmHYZsLGBEQsj6CD",
  "key1": "yixt26o3QoUFfJgpWsCxe8s33srwaGoS8AGG5pfr2ywe2BuD3wpcHprSahQJ5We9vwyYPATirXECZ2FDvbueaUG",
  "key2": "2GN1pdVcNwGk3FhNYUcRQ4tNeqc6wfZDxofKV4Kh6yDst4VzSYLqDYmvH5icm9a19kLuDzBtF9dTsgQpG8qLJJ89",
  "key3": "5X71uDKVk9J4sHgoUrVCACppmb5FBzRTfaeNJnP83DZbjR9pLeUCk1cchdUb3PAvwhaY1RofeJCj9VCGL25XQUKr",
  "key4": "54gTNssfcFF3ayDTQnxVWrHawLeR5xLB8xZ6A3ubLbK5ZBfKwCYr12PgUoR85nxNVVBfCob8c9puXwreAwfxMX5y",
  "key5": "3MmU1mJx8mEMEmm3A11HZQVDJZfavUAeKuRSYSzDYMPngiuRYtPpyq2KmaaXdTYRGpNAG6orKASdyLyKuu5oFkYc",
  "key6": "4HBVoLi3HqGPGzp819yyoKqRvVuwVnRAf5SdnoWmJhxr4T8XJCNMdCsQXMsSEBtsgikaiia3i7tTvwaTubQq9WgT",
  "key7": "2A5Y2pLsHiojvCRpFVCVzPnvKbT8jVAGrQtckRKwA29qkfTseyxWZGkvNgv2fa3AHL48NKLMNbfYZiqbTRfLjaf8",
  "key8": "2bsEqj8B29XiZbGLcnSJigTMDNhquMuk9ZhK6YVECNFJPs9kBMrJo4rGGcs7iUvSj3u2JmuDDXwSjhrha9HSiUDo",
  "key9": "3SvqsQP2hRHUMTRusZEjdUnGvPBupgrVDwN32As4wJDmjb4EAkHEjcSKhfTrTRXarKxLao2ZsvceUHZBB6dUFUPL",
  "key10": "5az5cxRhpRJDkDQ8gwiMGvLpSLM6Q3oLDnANSMW3nLetnUyDpFEDDkyaKpQ5WXikqBWuUpeyMzGqGfi4PwpG9TzH",
  "key11": "3S5VwDXQTuMm6czL5aLrrueL1guPpiHBjt8Ypw7vtWFqandMpDwMA3VqW74M7fqFZb3xsRyZC3RYXtGVP58dBwHg",
  "key12": "wDEhP31QccXGu4kEMeDwffpbkgGcsTzQHPvPV5Fiq9ZW95KfT9iWPkSdri7Usy9o7PbXzX2669ZF4kozTZ5Pmg8",
  "key13": "4bmUMuoiviQBcbGA4mqsMDx9r8oZwAc917dnqqVHU4jWR7yndGygmTTpfVovbAanfdJVn3qCexqAWjnpYRWV2ueo",
  "key14": "sXbaqBtmH4SofdS9LqxZpzRWA7dCQeVqskvh1Vr29ryu81RbYGcpB3KWxKH5jnTfbdeeitnn1PpeGoLtKJYtgbM",
  "key15": "3UjiLHAnrcZwnReRiKfiffrfDx4NT1TVDyq3oBfpeSEQsk7YC9xtUwfBA5DQv3b57wcM7USpu2pJia7xXzLjHPx4",
  "key16": "LcfFAw8LhdDPciasU2vNBo5PErrvrJMWufSrt5Jft9yWGvUuzVTbTnCWyR9e9o9LEVDJnHX4dapM3AYzkqqm4BP",
  "key17": "3RZ52oWfEqrDKoogLbdnpfU93k3gnZHNdKyLxRW2cKKvCWbaP81i6WPAY5LHo5z3hj7GT6SZ7kBrmDjky8c1vKYe",
  "key18": "3N46ZAZQPnHtQkYvstkFrEys8xtEDUH9S4suvo4e2YitDdV5M49Qv13QmLGG1DUytiF2HYhUWK9AcDLb48qf3wYf",
  "key19": "3KUi2JHhZmHSSjAPBasGZPvKKgmrJdnBZuaVvnVkDMwPira2d8pf4oKssBnT8mcGjdbKig11pNmUAnmWEAXEw35n",
  "key20": "5wBR67cWfQanSxYrtCcsekjEgwWsgz7w9mcR17Z9sfSPeGNRaephJrho8H366w2s1M5as1CX7ova3KT4bJZpzxvn",
  "key21": "2ResxRpiuLkykzWFLsG1Tpuoy2oPBU4FwLcZ2xNYnigU2LoA29jGCiCj7aon9Zz5F4jXwZmyDTQeFwuTS3nHXFa2",
  "key22": "3iHqxhMtbiM9n1Px2vcX4PxRg8pKkYPh2yZUcdmyj98j8AJBSUbkqkPCPa9buztcDkmHUqBuY7ghwZ6MZGGj4vje",
  "key23": "yDS6DnsDvAuKcKTdPrU2PpVQi6cXH6sMkXF2gRokwtkiiAPPPQMK1GEYc24Gk7pwmCBxmAZ3E62LKMu4fJHdBBC",
  "key24": "2r3mC8AHstnqmcdSVpUWWqj8kTHijGvZ9nzCXx1tQMdLAyp6Km2vPEPuBWWsPbe6YabceX18nkGwXSgVMuZT2K3h",
  "key25": "2ujUYUpPP2EB6Eae2QN3J36dTkVrzHWKQqYEJ2bbMyEj8WXGv9SKnMcuiAnoFZt1fcV2VxGKdi7enEjp1tGPA8JD",
  "key26": "5UWByQf9XwQywFjZDTLSeN4iEsn66EqsQLidteUFye2f14XgcQE235Li7UVwRjX9yfh66ZT4EKBkYzsgk36TZweS",
  "key27": "4atEbhWVCB55Jb7YoJE19NbkGFsFzPCPwCzf7NHQHPzFzVooPV8Dg1Q3EKue9wUhYWLy4Ao6fYWJAfUqJtXq16Lq",
  "key28": "2NKWooqEjshVQf3sQgV9SUedhQxDWkwDSQqSqwaX3dnPyp8EVfUmY7dHu7Yf3HA5JEi6raodKZuEuZM7q7JFh79p",
  "key29": "2872Uvu4dhjPynYqwZQpmC6qe4H3fszngYkK9L1ZVWeTiAZ4u176WLW9Bb5jW2GHcKsd8vdWnayJTjgf8J1s6wy7",
  "key30": "3daEfJ71UZ5XQoV2rFi7TVoxYNGGBKopHUjsBwZCDSwNSMgZMhXPU5NLrg9TujszGUsAypZecTbAhXHnyuBbYAvJ",
  "key31": "MvhaiNhp4fasxFS6Q3mVw4SKrvB6Z5mWiDjqeNDG7HJuPZPcGfg8uJjXQbf8NkahsMksCwGXrUukQkbEpePj3Sw",
  "key32": "4r3m7qKdWjbLHMWxp9Z35MobhFQkPLqDQGdN7CwUw1kaM6H13uTxph5WJ8M6LFncQnugbBt87dSCyVdEGpWwrt79",
  "key33": "2XfJ65iBeNGmTqrpfR3jpAAFdQDkv1iGsv83A9nLMELEh2z1L7TB55rxJLuvc248iXBL3zLMgEChM4ZD28Do5iNH",
  "key34": "2Cy3xibahcEGHbxpj7bMUJ6GqKoXtSQZ5YAoEHjffX5XLb5ypPyhBW8LxgHFXgHq8jSXH9TqByrJYbcribtkyK2n",
  "key35": "3jiSr5maN2dYF5Pfp11FXti2XEM3XJmxqTpSwtpUC3Anb5eqDU964c5KQPSpkjHUywhxsazFJgW77BWjknWzCMGf"
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
