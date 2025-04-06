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
    "3hjMaifN1SRiEymddKFpbh9LdEpS3SXnFKeKdNWK1j91JyD2DAqXPjCDV7zc6zoixuW8MWwnmxfsiSe5HYqLMLpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGJbhwn8vCEvxMyJEEPp2kse8hsyQnSV1uAzwCuKq8Rzb2uLa8cCcy3K7SggVrgxWThocbKnNdGcigmgHYPv3sn",
  "key1": "C3snKhRN6zDQHoZYwbtrXuRJ9kwxtSuagP3MTAx4shp6RD3VUkmkeYmpfdS58kgjcSeB1oxxCF2F3vJJ42wzp94",
  "key2": "4Nre22HKf2inN62Wk3AF9NSs56f2B3B6ojwAW8upNSpJbszMKbo6toooGJf6Eoo9gScWAD4Gr3bv99J5RHd7cuAG",
  "key3": "48Hc5qXi8uG3Hhp3dGEXtak616HEz4gK1vWMQUdFQ6F3bQQ9oVEtGucum4gHqy7xoHi4D4B7caphTrMynGPtDmnE",
  "key4": "3PJun52Y3jkCRvGTnecQj9LdoRSNHtnu1VqNthRWbih1tyEjvqZmNSXg5Gx9215Wrhf25KBtR6ZehZQmm5YkFFq9",
  "key5": "4CUtnYawAY1exA8x68NQB2Vo7hCoGeDeQvfjBfcya7YEneoeJrnE9PPN8ngGhW3y55FXopDUkDhCL7xRyoVXjskw",
  "key6": "25MwER4K3tBf5G9KmoFcnpNgVdCXGQhSZ4nJanMmD7ThNYiyDzvAj5AJ1PgcFNM7J3PF2shGxxmhsvujYMCSpyfS",
  "key7": "5s9sDPUuYsUVXv8a7a4UKMxHCX8RGMLeWWr8e1ZkFgWFdoKTxk8eSKRWj7ESF4M4hXytYnDooGDN9yGftfx4Nw81",
  "key8": "41amYwQ8YimE6Rji9CvzyaH3vGu7Fj3UGJQQuT9oQC98pFb5Cz2iPbevYQ5MbyHeVNrrDpnBAfVvYreJ2VZm8cLy",
  "key9": "5L8MtLAhTpop5WaA9mabTKcW132nsps3d3GP9hW3BCk8UgAjwcSrUZSZ9LhiSu3PRpeAgbB6mrvmcY8c1EATjAb6",
  "key10": "2UF2vC7hhLgvuoBo1WPVw2DQT7GAG4QSLxxCoWGcQqTFkSQY9h2ix5DrtFKTgBuCD9z6HfT8rgNzVs7HqYRKDQYt",
  "key11": "3rEg5943i3cb1k4DpRzsf5KiE3PkTY2vyVSon8q6dmHWaPC8KWPwW9A1CzbV7bGwWPjXHN6ZgtZ3fevWSmeURgXw",
  "key12": "4cgcYnHt7DxhA7bgzajvYsMwCAreNnvCy8ePLT5UWZHhrcmHHgUNduAtf13HBWbxgYkm5bBB38Q3iBvTjccDf5yC",
  "key13": "4hHJ71SfRcVUb2kKpfEtDVeNswY3xQMwEvZ3UJWKwtc2Mdvcnz4CjJSLzGz4rsZ1wtSSEBvaAQFSdnrEVMcMR1wT",
  "key14": "dJbHsBQtGE9yeMyKqVqikh7Z7rpwLRwMxNy9oRsVJN5EWqsKikrcgzKMbxZAcqLNyY8azLewD3Vd3vcTkNVWPy8",
  "key15": "5yVa9wReyb9D6Akftcu2FGgwnomqwq4T6DFbiE5yMR3CGrjfqnHfk6453LKz8Uf9QVTL6EyjgoQwZk2Jsb8XNL7X",
  "key16": "2pDPXv6Vfu5tVaD143echYd7dkRUn3MGTe3Xg5z5PLqpxwBfJpEe2dppu6PwJUZuUpdViVTkmKHdidTCD8weqkQv",
  "key17": "4cCU23eAd66AA9D9YyAth9bYPfuxwGtDLvBTW23fjzEZBKAtzoWN4KEu6sWspo1rLyNUoKRwoJK37AYQPaZeepvm",
  "key18": "4HqPphJAaarfj59CWCZeqiWe2Ae7EUUFpvgQyHb49kzPK4HpjaJ8RssXVgeos8oEBB9AqpzLUCZdn6gWbkC4EF7X",
  "key19": "4zs9E5hoLnF5zaZAGaU5xmEfx7jdsYqpkGgmZN41n2D1LyUwuQ5AJLoAm6Z4r6uzz2ctoWfFiMGNztqYnk34d7kn",
  "key20": "5AFrMYFTa6RGuTRuzJyFD3qdN5uFT1qozQxCJFfPquGKB6tBcuBmLnpbxS79P55iNpqpa2SroX9H8a1XLUxSiZdL",
  "key21": "5N7QaGLCjNF8hH2CXBzeMuLaSabbCx6RaKzAVf4GhvEoRqiAcr8VsD4V8UhyPb7yTWJyA69NgU1xqK48VpHemo8s",
  "key22": "53RJxbg6uGqVKfewiswXewxMWKghi9iJo9JtXqqRcZNnWVpjc6PpVY5Z9Pd93VjDNejKoLBs8FcvQouEaQ1n5Fhe",
  "key23": "UX5W49E5Ufk9FVTzi9fnEwL7RkSFfwbRxCTfTwvzkY55j71ysrgqjQApJdmdTwQ83X5JQVYCihu9bLusfu9dCxh",
  "key24": "5NXLoudd9UWZx4Vn4LefDyNCFVGwKLHqJWNrxSut94hXdg3vhFnfYTmSMmHLHLcaNC72ayQ9tuLJRQGJcLLZocBg",
  "key25": "zgd9iCFbYxWTLxQJHkDRMSZ2Ki2xdezHpaVpHkLnk9UrQmgST5hXAKS6vy4vPU289UXEXDtBcnoN4xYepTdSq3C",
  "key26": "mmgdHU5ywV5GG2H8qxty3pnfj8fQymqrSeCE9pzDNUQJCa5w6n7HyPHa9wQEyCoSRhGd4YFJsrTdisaBRAbDHSR",
  "key27": "634QNb7hNWWmPSVChvvAQ1zmsCdo7g83XsnwU5bfcCXD8aiQf5qbwjaevL4cPTNj3aJpDLprNXE6r74jPoSjjdhq",
  "key28": "5sYzHM7mk53DUDhuyq4iGbivtjhzkQrA216kmSVpwnRwvKoh4FzTmHtxrZT4F9dMbcPs7WvnRdzLAPCmjkGYFPJY",
  "key29": "3FfoMYLYtKjnJocF2DXsTMRZi87eQJj2DrdcRoufcAAVtRVFxBmAzagVcWBt5yebmADcu4jLSxtHXbcM3HecAEY5"
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
