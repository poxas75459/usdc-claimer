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
    "LK7vZc1M6hX7jh6sVRRZ4ukVkkFS9M4v178AjQ8Kc2NBvNhVG1BMtgLDyJhCEWhcihX4gybFbGRkaE64mJznB2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgc4C17KQd6m4HZUMofFNf9pnrEndJdvfgfgJod1zW6QBXmEhUYGN96QD7ARzeaDS6EiRaJQQuswmpitTD9vPqy",
  "key1": "3mnHFhTR7544BJ5FGmvaWSefkrGWhQBtb1NEdZudgjgFTi4KyKsLVWqidKqjGptmhpMLZGB37Xp9vtpzcNswHrW8",
  "key2": "3Jy4K5YVCPXm25SbU855uS7R2bwfyDEGrA52hJcubnFGPNy9R7hUx9cKAL254tMXfXKYjc17kax7B8GUQ3oir918",
  "key3": "5y6YHRswexS1iMYUyJVYj1ShsEa89poeSiTfmQtqWcWiWj2t2qf3xK33bRcrvrKRWHqPAUrjgUb3ttmnLbXRT3qD",
  "key4": "PWiLtHFXuMYEmWWyU8FXdZai5EQjwPSwY8rMZ41xks7BALffjmVWmE88bDuHMp7RcBKHH4H9n2TWpCJQzhjDVUJ",
  "key5": "2N4bEFykGvNu2Yy75ELpwUkswMjwbrNYXu7fQDq51JZrf4zGhRugW4e5M8Z1zJVs14UyXu2N7vfEyJawuKLVA6uq",
  "key6": "4EezMLWsEDjaXw4g7NBRPdpkSgjMHGQ9MaLqjuA7TE6ByMg8s37uk6CXpUWULxtNbUwtubtiMiQiNdY4WEZZTsSi",
  "key7": "37PHK4tajPQpaTUQv7cLs6cMmTaZN8qpmv6242jobR5EsLdkrByrBYpH3FV5wqKnykKgu27HXQB3dhUzJJVXu3Cw",
  "key8": "3g4MmveMH1A2yk49GnbxRUEVePzi1WdvBybhq3WKsyi99mCHMtntmPCRSsYZhRgB2is67euQxZuQC3MZQHieYPgB",
  "key9": "5TdYK2CdvpRD2Vq8sK3z6XXF34SRngoJXMTah4dDLwv1PvG6seXMgP9kmWBT1ivfH5iLaAjrhTQRKHLECHesDEGF",
  "key10": "4ojV9MVTF5x5YMM6Gdbi9XA3sZ8TNHUWaK4u9Hwxgjfs5XtcjkXmbt9RnixcLzg72Pte1tmK65KcuqG4V9P6v6Bs",
  "key11": "2cVZrQuc2Kqw3P3ZwE1n3g6djaWDX4GSHDQ6Xbm6h2BZCZkYHhwiK2r9k5WMUvkjagYB9kJ2Z3vuP4ZDGfB6MLhm",
  "key12": "4GsrFzWGzhtjHXpoUYkAiGhuBs1LAqDij5hAaiCRdHMWmaSaDN5ntZtz1AUsvLVHZ13DD28YvASNcfbwAEiSZZGc",
  "key13": "4ZZxgkoZfQwve1gfFirtREV2GpWfyqDB5YievTtcWbki5ZXiR3xn5pysazjYAFD7jbGWgCC4pZeAwrsXF4b2wCDE",
  "key14": "4HHgK3WZA1vCP3oadtzyBiqHGvHdiaMmTU4GYN1PDvytxrQZYn9BVvomWC87WZUPTnGNZs3GrCgaXCVUQrbYbFNE",
  "key15": "3UMkej3RqDwe9VFE7mpbd8my2Wqiz371tHUeJZLPGZAYcSPNUh4115amDP2MWvx1iNLqXLFaPd6EfZJ7dwDRATL7",
  "key16": "45cfxNqtSVsTyt3yUKkcUrC5B3nSo6obtCQU1PXdZ3p1YWDhjprcNyRFEveg8Bx2PZd5xXb9magcVEgLfSBaCyGp",
  "key17": "kfMQPCQbnoR4y7qagRfKuN47RSgaHMbdhtLygixVL1z9mHqMAuZrUHKdd1Fy7Ru4ee8n5PQ85JnJ3nqSkAGK3xV",
  "key18": "5aCyt3rtop4RezbewnFYGKgFQdNvXWGZ53RXQszPHhMPd1Ca23toxfKrrWApkH1mKpxkKpyR2tpxqywkANG6wQd2",
  "key19": "5jsjA6UAAdWphf3nPfzAFvG33zFNuKz7GsjzDtZCZzfS1txAY1MX6mwXVN4DPmk9rDM9t8zrYjFHNQrEfrduvSjj",
  "key20": "SJ1NkAx3GNsxfHxezKeNKz7ENVjX2Wbfh7tBVQmRJKYvC9xAo2H7Dbk1SAzxLHWrER7wKjrA9QbDiUg8tSxwqsV",
  "key21": "5iQSV5ZRTiDMgzWqL9dCDrJDCA1DBQPbmQhDRTUQ5xQs525mKYgtKB8f6neLJo6PXZHyuRq5h7UHnztTikhcNrnD",
  "key22": "3Fn2diAXBnEGudKf3VzES5BtNuR93U2z2G5KMFV7bofDvdttx2EfdLQFkE1i6vkibyX387hDkuVXSMSipgY5LwjP",
  "key23": "3z6RmQdtyf8dqiqpCWZMv1DMFgwUMmECue3cP9f72WUWokJDdAiTihi6meZcEC4SFs366vBiVZrWEMRWwaXKSjhH",
  "key24": "2AxTHEuhGWnv9Td9aodNr1C7L6gYfT7U2FonaWSke4n2f9ffBrNF2hZZcKUgEpGvus9EpYdwQKz8uSdnC7E2kkKy",
  "key25": "3SorUJUPyyUGE1GSRayVAUsJVffw1PZiRn3rnsqrf9TuAv3kbNEYNFankeBe8AALeB3wSwABePSBM4bJ757PHj4w",
  "key26": "4xSkx2CbMYSvUBUvvh88mbeFTiF541y5kZms5YQouXa35gwXt8ihZ1TxnbAkuwc1vrWRo3cj5ZtQCU1RuNWfgKJ8",
  "key27": "5cBw7HyDq9npc9W6A5PKYFcoeHaoFHjbReGAaV1hFPzvSGiaykvRvAypvnW8cHdpGcFgf6YXNXaBkHjZA4op6wsq",
  "key28": "3q1QU3aV5y9rfWDPGX5kaB8xKtc7RmNAqLtSVe1jFcneAKBDJEQBNQHfFMLDoDZvznbjzAXeDP5ZGeK3Txoxy8nK",
  "key29": "622mcZwUNG8M7WCRDZFzcwGwNqKMvwKDbayP4FP3tKx7zb3yEsWHVmKcCScGei7wJSWzfZjE7jv1TcUKsuVtXSNc",
  "key30": "aEpY7t5vP7hyBaXcMqkrnAt2sztPjJLPmkexZb9U2aKbricahuWjLaHfqxYvwdzagZQKoSH2yMD5rmeNYj4aDMt",
  "key31": "2VbiX7MKxQnPNpyU6pb3apc5G7z51nHrhGGNQ9akbJnpYfAc9fNSPvao7fKqAgkg7mswon6wS8PNdCJDpDfDfhc7",
  "key32": "5P8dCw8zWSDzh3aJ1rp6s9FLvf4U2m47kkEnxGMhJJeWDbjbDqDqSJdkP8kQAMVw4y7bTQ64WeFh2Ecyofi2BArS",
  "key33": "3hHsPVx1NFSEbbcoA3nGqthsXCybi15BugWddr52uQ3XKWCe9TZnm1ZcvszbLy1UCrmn7VDobe4HATwPdaZvXiwi",
  "key34": "64kF5KxfSTCSEDCBV9RYxkaZvxFTuaatzwQSrMhSn14Aq15Gu7jSgo2uCo2m5eEeoXE9G9hNtrE4GuUMeuUa5RQe",
  "key35": "4dLJVhzvjkL4LrLeFXueaR6oAXms4P57NczxurMHdjGcBUn2upVFQfqNKCTiADVWDDiHCq1qdKAKLAbr87NY9wfP",
  "key36": "zmCBXUYBHzdASUokCk78AqfRj8bjcTmXEdBHgNwVS13BrvUcCJtMRgCAoJkSB9EBfi5YERhCt6nKaKkqnpc6rpE",
  "key37": "65eDNFjrZaywCusUxZuTNZg8Q9b6J74VPtY4nsjUVWtdRLmdCgjyK4HhjuCvTcSAGSAkNgFVpzqWytxzMDFDY7nY",
  "key38": "5D1xFLFzi2TXTbxejnvyvYWpMKW5ds18Qn5L6ugc8iwzr3rQUAKn81oh9RYLvNocyC4XoLNAcEHKb7rnzHu882T8",
  "key39": "2jsVMBki1WyVakrFZcy3XwRymV3ydKYg3WaHQ3geQ2BtLioK9rRcN1q7nJbCw5sjDhJR4rfiVWmZKHnf2NV8Ktuq",
  "key40": "2SouKcTitGooEwbiZCnajzxfMPBxYG2xwuq1PEvV4q8hfg16erbgTv6p9rAvFhp7YsvrbdSK1d1DJzV6GGBNZba9",
  "key41": "Q3vJVz4sgA6D9WSX7GtvKo9CgqgjCr42yNNUeA6jdq6nVLAxWrTVbtepwtMLkjaVgg44xazuQFL1qJT2UFZSBEm",
  "key42": "3PebqvMCYSrmysWiXqqLFZRNCWmT9ebSHqqQ7thAUYDVUrfUPEhLCZY3bHEehBqWMM8tjagWqRPCoutLicGyChft",
  "key43": "3UfgU6W2P6XntGsywooE1We5cdkhChL72aJpvLa3Qkj7YHnphSHEVi5V9tn86opknMRXAp6hcdDjRtpHLQ53tycG",
  "key44": "5kDqfECKMzfr2aUFpvytDBLEF8TfVeFz6hcfVdxtPskGHEomZkfzXiGmLngswKCEM2QYVP9Pqw5FvXTHkL2DHAKq",
  "key45": "5LvnNmz6HunJThWyRrQ73vV8hWiYuYeKECzhgZEAMfrKQdrUTNfCHdg7FSje5SPnxrWHCRGYnUs73ufqGyVKn4A2",
  "key46": "2M1EfLJfnsRQzPD9GuC98YRRJ19JruPPLePpGzWTEhmSSML1NDYxZpBpb8UMotuqZf6Bcwu5AnC4FFi4ZfmeRV2G",
  "key47": "2wrHAcFPjvMVp5UmWVzw2WxjNrfVgnkp2EShtQN5z8U1K5mELVm3NewMS3cQCwXhYUCoUmLX2fuHWrBpM6HMDQ8x",
  "key48": "31CDRkTrSnuMiUKQoxNsp3P37gAwYtKbPdfCxHEjBQvCLeWCbSVCheEqdkdD9s16wb5JCutkMsfnrmAszb3Jn3Le"
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
