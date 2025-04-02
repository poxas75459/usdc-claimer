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
    "4LFGHqtMZqwZyu2cCBJwzq4e3oXL7NbPYjnAEAQXYqrCZJuQqFCyVWMn9NXTKz5ViauJX2a75Uqn3ErwSHV6i3hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4me84JX4A54qezs4rK4StYVLB7o5JCEVTG8bYt7vqYRz9rqdMtoPo7VEaax5FaBfwcxGHN5rwbv7vUMWBpP4xUrz",
  "key1": "BmkFr8Wa8ccFbhVttqoPh4atN1XNzExZ7a4XCc3auWLwqcsbwQoVPtyfmf5Ne1TAmapGeid947NGCwdKeaxYWPa",
  "key2": "2Lkjoq1bLbRgrJDJzb6hgTNHqni9pW9nveqbBtHuWmR5vg2cSkFG4NpF32DeiXBb13KgoZWDW8UWewm3SaDbJtJc",
  "key3": "22ErpHU5KaUgcLLnPj4BErv81DEPD8Btz2B6redu79yynDWCzESm3pUwakp2z1GNb3gtZFE1xaHLYyymvqNtx32Q",
  "key4": "4e1xNvqk2MZYicbPprrQa3QBvST13KZp3HAobQXMXFbLZwmW58pzUiGukna8b9GE7SKzXUhuZYnVeHvAN5zT4KGw",
  "key5": "3QdUWG3DYKP1ttkQKU2NX2ujdveFtuaCa4Td2LmuVTd5CTNytydmnQLqqjZLe6cJshKrAvzoKfRja4bb3KLzV1xV",
  "key6": "4NJ6b6XGrsh6aGsVW34uSdnF3fJihuGGGiFFV5gyUoC1syb4rr4n8ufPC8QKT2X8k7RYPEVLpeCykupsU9eg8xzq",
  "key7": "3gzWGQJV3mXXYsn5PBEdH5vo5W1JXCd8MZH4cjfwUtz3mknvuhUNzHo2zsLhBVmUxSQ8e2Wh7zNPVXvpf9RzEdtQ",
  "key8": "4o1c2DaV5VfazcX11pDCjFF3q41xG9Jqu3t9r2UzEjs4KbNkxb7P2AM2wMFUa56yTbmhfDK16avHsBZQnWtmfxy",
  "key9": "3R1yu7aDXaUdCtfM4GkGpK4dqkA3a2MSKv6pPsKe1vpEcTf8qWd6bj2yccbNoxTTVYWg2w8LxgQ87NwsU94FDRPp",
  "key10": "4imTYyujzunJP8PE7gFrcZFQj25nLFKvkAXcBogT7EZLfYDRnDnPJUq7cXH8wrUNWi4QkC1bjg17nA57S8s2qUFo",
  "key11": "3hKZ3pYaGDRRmnehSqw7SqzyPexch82RfkCK2MzpdPZos7LzfLrX4cH9wXiL3zbg6Wxp6k8YizNN1wJ5WWrAArny",
  "key12": "2Df4cx2c4ZyauSCxUD8kVxpDEnVz2v3NiJeCnABx3j2tT6jjxpUuuuJpDgV3XA6dTaFM9C523tLRwVXXmxUQifD2",
  "key13": "fAxd5t2kVumbFbyG4SwNYqzJk4GyENiocqjsg3QZE1ovWMWXusHmzfyu6WcU1KDxV38ndZVnthmXzSG1dH5yJFR",
  "key14": "Dkt7tdMwBmwcJTTLuB4ywRXKavMT8DpmBsdVKSneQS3ehE9XDTwhXVywTnb49XFDuM2RTLpeJRb1qsAmyFQesBT",
  "key15": "322tv63LHuWymVBLfBXHcFFLdLrQMUUjzSqSQPvtYJdpjx377hRojpXtT2C25C2cRmPKQurEmTetXRXV28pEMcuv",
  "key16": "39Ga1K6s6kkmqUNYdD3bptpvEiQWvoRHAhSiGN81XPV86E2FGneV7Q6MR4QtaBpJmAJ7yFE1JV2gvQR1JrvdAKLG",
  "key17": "22troQV6aksU1b5ucfWF75gSzWwtfgmACLMkDYF8RFuP22RE6e2DfDEooEfarwZy4BvRXWgqB9CYighLXcyZxXrB",
  "key18": "3eCnhFjkJMXsH1JkajesWFyRsLqvSjDjW3YJUxRfwCsXzj5bMzPyFMqje89QzD9KH8kAt6YFHioiJU9EWqpYHbrP",
  "key19": "hNvTp9DiNE84xAg3GexD2f9FNgnPeVqAJGuLQ7ucALkh7gxoXW58fnUhpxMtRmz1P4pXRiPyao39R4NZKXou8d3",
  "key20": "ogxtKi5CQQdAcoh8HXe1w5SvYmWmH1o9fHvmF13azFbAQBL8SfBqzKfUbTZTGDYkQs8HXFegYsjsTKZckJUwAEu",
  "key21": "4GXiP5RN2mCTijyAYTLXPNb2KRBs42mdmBByghDi5CjwCCvPXkTBkdapw3qs2m4UKHHEAqiuMHoTaJuPzaoADCvU",
  "key22": "3vgHJaqAGdnbneqAFu24iegjB7jbDm1ntHCU8viYDse2ewBvETTHDZByeQMnuZXwiXAZpqfBdo3kNvzEMz7DUmoM",
  "key23": "5mxAxAePEjhCQw3MHNMSjYFqu4WFdiL81ZxTSwnU3CJ6jY7d1YsAxhYT8ajvNbrtjisY7Dddu4Tc1YmwG327zY9o",
  "key24": "3yiempxkyTGQi8d9TmU6rP9VRmDuTcpBHoQEJ5VFBvwXkznaun2LMc69p67fZfKv25qiGE2oidc64Ngha52abrge",
  "key25": "4ziFWwoVz39tHktwjpwhRrCtwKZ4c4GVS4pCyKN3M51aa3xWCdvjYbLSQgXgXPgfXuhSVnn4cp11YbT44Rdrf1V3",
  "key26": "2WEitp4d78um5fq42rKBPfKxg8ruAgdVaAwmv9c4AG6MM1kWrkqFVnQuvBLAF5RHXNHNGWgDYHTTxpeEupQvFKXt",
  "key27": "m3hgWTG4evS47JoawjdxH7qHeZeuCys8zR5CaGCVWc4dZHqjWu2Mm2S5Wj4J5xz8GZxatuxZUhrqBDC5RN2mPFf",
  "key28": "3eDxhJ5YX9nEm6AyMw7FqSLo8G914jPtZMo3oY11uK51KGUWNkiisEzVr22yHwn213x37fDGgGvgC4jjjbgGv5dP",
  "key29": "63xWEH1pEmZRPpAKdkJNFN6aJHNsS76YZyJcNquZ8deeCRzERJf4MnvfxRJjFNG2MiW53bByd4aTdEyEGRxZt3yA",
  "key30": "3T6MP85qz73b7r8Zgj6kD6P2qntoCNj2Mx82vWxLeWSymVdnySJuoEcRUjHnngCJ5JJsn55t6dBhahV6w45JPk8n",
  "key31": "4dGiHtspzVdtdJQ14oaAjFgzKTN7doLbapHADhCgtmDvvRrzapoRhA94YxRm2LvkWZLT6sUgF2VUQo86YFBRHVnj",
  "key32": "3ExAwS8qt7Pg1xr7SEgrDhX7xVa4NuAfJMDsaB9oGRkBhS6tyNnhNn7AQLu42ycfpuTM2Px89jNhr1YvAexHsg4m",
  "key33": "2Ma8315Ex4Ry5whYyrHAQcY5KXWJYQmUjmH3rUdvhWT7cxYRJaMHuEj9FP2dNHvNLgdfttW6GSpUaUzoVGg3UTXp",
  "key34": "3U8vqGVFuDYwPgyU2sCQhnaLE7GLwMQW5sTgsSPnK4UAxtm7HjJgrUjNKQd7C6LFUDfeBhNL1n9hfqyf1K7n21zA",
  "key35": "25wpAFtWe1adACD4xrAJSSJAwu8echJHP7tUcMXavHWQsk3QXbVTkYPYNDva9vuPfb9gv4MCZQ4Yod2Dscqeopei",
  "key36": "61sJMBMjWf8bgAviX6jnScjoqehgVWpDc9x5N3xu8ptm4W5aVUVnGY5iFg4uZaAyTRgb4T6nZu4yLXs1yT3EqzYL",
  "key37": "5LWFVXsxMyZvmrznf3b12ZfP9ySNBiQFWvaBAfKHAVhQJUjNKzwVnoN1sgLv19zYUBnrwTkVCTBebECwP957ftCY"
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
