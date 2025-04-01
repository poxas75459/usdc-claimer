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
    "4VsyMhZxMpKr8eVrVCfekBXtzRbbMCdW2BzJAjsG1KomHD7TKyt4CLQzPXiXrY2mkMzqsdSguodKuXqdKLJSz655"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FXrbb4YhRcss2WUJhB2zc4FjtBhUqg24XapZn6d3FXieZwME4rB3LMG5z7mpJPjS4PJDSRzSy7qefRd275r5rN",
  "key1": "3FCbSFMK16kZJ29R7YWFiLHRNSM54dQrm5qhJmqn8WS6ZnjcQpjkawMw7s6kCBt8KzGk7edfE2V8dXNtqWePagcj",
  "key2": "2bATofZDfVyhsQyrcm7jfkYf8kfzSt5NwuzcQyCRigQpRAADXxdzSFxrckA7YRvZo8cnJWjrQHSuCXG2GHwSKYn1",
  "key3": "DXD3vJjcGG6jCq39vGpiuGz6qUqDZbrGX5ea8JBN5AzNY9YJfLFD9QYgTkNfy9m3hgdJwPdNNYrk9NyRLsXK99f",
  "key4": "5PcgL4UgvunVP7DUAQCkafxuSc4zp7AyQTrZSxWAm6cNtq553bNKnxByWciacKm7fBpxzPSpwjyY4qhEr4neyQG",
  "key5": "Cw9QB8Fg8LzxSDUu1YEHsrn1TCf5pn98LoDY9fm3iFXgE9vgL3zM6GhsQtYmWY5sJanevTmrbBSmEfBkajkp4ow",
  "key6": "5fRLXM1Pz8FTAct49r3qcmFbVYeNzTpMnYjnSWMx7o64YnRJmJPZc1WcSLe8Q4rpE9H8tmjwkyhMuhW61Ww49QTE",
  "key7": "4oJ3xA55fKJbz2jFhHco7dZuKGYBkoFnSQhfQLpuLu3vBS8CVWJJoYRNUBWUeo5r21oYHcYMEJVDktD55MgaAyTH",
  "key8": "58zQUoxUbGRDaijxvnKmGSC8MmMfMqbui9RbdWqPPakAKS7nSNpdHBCBQtgaRcN8vK1pT5Bnpgvjdumz8fnoiDdP",
  "key9": "4dAuSWQBr1Ei2mnoky3nMdogjvJwMUBrwtgtqTYPVdLMYx8ExTTvEqC6bxfgUphEt47AQD8qHETooV87rTxNX9h8",
  "key10": "NvS2epbDxrG6tVsSoGFiVWcr2ihwgVTLNPxttEMpoT5txH6hJWMBdcJC7gy1kk43pGBtwmiRiedt6QAfVFM9Y7y",
  "key11": "5u8x4pC5oRBNiAQJ7Jaz4DKMrvB94TSpEE5Cuxye2Vvwp5UeS22ioF3qUcTPvFhhwS1JmCzgLCgUpN3G6yGshQtV",
  "key12": "4fSGxXo2Kuq9Cu6L9tAUyL7c56WyKMZioj73DdhjnxWwaoUgYrL1JWKuZNwBT4jTqg2uMDX8V3nvLMxfy2sZupXM",
  "key13": "63JUTbg4Wd189Noog9YLxcisWQAnt3ZT5QwnFakgmeC5ditsZa8knN91AHSY1sE8obEb8ELus59XCs7h3vKQpCxD",
  "key14": "58Ug47pT6bYDCduUyxNvDmcnQYov9H75PTZp46QuP6ZP8sAYDC5LEBdM52FFAoEGeHzZKhLRfPu5UjVWRUcTGtCV",
  "key15": "2izaV6FQv7uN5uvYgHLFyFUYfZt1Rc8gLkG54ZSJWC2ndCWYaeeJzCmxyGLTxtVMgc4mjwddRZab1bpiEKbTcTVm",
  "key16": "3ucmtQVkaSUaCPtBYD3ThrF5jJvLSrSMuHankx5avY8b5ApP6LCL34r54ZB3BpbtaRnL8RmW9Bgsx4CWqRfxYK1c",
  "key17": "3eHKsujzYqzgygd2BcyK5heDFdrdgy52JTWd3wyncnVxk5jwcFQ99ZXy6jbcUj2VWqMqZEbmbQsWZZfF2cU2V3Zh",
  "key18": "3Lf2asCFC11f29qeratTfpsPWgvJSMcDBTJLzVvZHmFFndeZLkvF75BKqMqEchgauZbWavN2GVmFAQnGAai3R9ap",
  "key19": "LVw51ki7sKCEMWy5pZCtvz6umT16ydz7HyGgbDWz98dXjyYM1nVeFFqVJGq3sZXp71nBVYB5WKZEkahGdNBUPC2",
  "key20": "4niG6muHrdB18BgETGdscrNKRqQsA7ToHqKrDtxF9nPtXiVYPXvLyR5D5FHYYqKVtmutJ1v9kdwVB2tAbygr1Nh",
  "key21": "3ecyou23aZXjB44NQdhoBVRN37bTsPtL8haspajGivYbNU9TpY4vZiHaoa57VtFDkkAEanEfz2bqusscfBbSn553",
  "key22": "3LNecEwnHeMJScayoCMLBPBHnL6BydS2JhomeWRczc7TWyUDRcLCLJT2VYJRRYPc15LwijEuMGJqHTTHgyW4UoKk",
  "key23": "2ynkbrNNuBih3NbqkscjQ3qDTaQzQxVFPScoauF1eoQoTyt6MiG6iKHB3Zcj9itRNjPGJWMvhWJScAFtJtD2VKuG",
  "key24": "598yKCdM9uLoDmbqiFgj3m5kpfgpFdMgZ18gpWmRfeZBLmV1SoqknJcBnbspBLFBCcBFavuSVbyJ92qKMne126mB",
  "key25": "4afKFvudhCYZCQ7oRtf9eM6zx1igKUeioNUb25V4uxXBjJZUGZYTsZMyi6KLxJiFP7mrJgoHKi9Puq4VEgLUQLm6",
  "key26": "46z74hARhMoT7ZoQ5anZh9wRzRif8hEffRx9FU5Fyipx3ty9q9CUEmQ4QUWTUoBStbL3ZBZG95DPDRMyaZ5FpY2K",
  "key27": "2gDFLNNnA599ve5ty4TvU2uJdcESEe7Eb5656ibcpEaWhnPUxs4WYBQLKoxnXNNZimwsFGsa67qqztdzQzk3MqgD",
  "key28": "3XBk4DSkGXxw8ehqxwfYExkDoFsgDpLxr3LoUiwxMicEZ4zUHnF9KteQxrRyHtCzCpwcGKdn8nJp6GbBXP4emARx",
  "key29": "mwtcz3wHfXsyQrodVFZJUq93hspRwz8zT4muwtNMVc9dh12EhShuUG2Ginh92it1GSYLaNTeJgcbZqb58pnCtGV",
  "key30": "3fdwL7A4RdF5eJeXe3CUY1HEBobpd6yVLevQtRJHrUz2dy6fSXNw9xcf43nmGznGf7xL2WhuScm571UgSFzxBi3Q",
  "key31": "6izBDypTFJKS3kA1ZMUpUpd4DH1b85o1BwwTyqNuZwxNY7KLanGuZXsbwZ9tT1aWkB6s9srjDD6RTT44tFpFMkA",
  "key32": "4J4mJ7fhnZbjjzQ1MfvbsHxnr4a4zLi8GXu12oRjabM3J4sTgyGB8pLgZGE6V51K2shcQTkKASLmbpMBdp3BHPMa",
  "key33": "5RvHm9RW8KW9FvRkJ1UPNDjU5DmLNjbqVQ2CZ2rckZxQh1g3QscRuFcvXhdLv5VWzrzieEuoCKjnTs2PdYhZT5Lm",
  "key34": "5S6RDcc6aDRXHoUojMWws3Jq38b9EnoJL3GDf8AcjYA99wZGRspe9qg7o6EwdRmuJf3FJK9b7QMjgracu26wpkr5",
  "key35": "4njzWEP3XPFwp6Z76y4ee1vszzBoqVriv8qquGNGysf6qQzv4jes2RuSLt6tGTDTqPTxpggRMisTncxiZE8Lm4XJ",
  "key36": "59sZkrFw8HnDWM43hB1ebSCqQt2Xi3hRw4fcJpwCMeTBxFWThU2NZ1ySbLvTn1wHJhxmYJ78H61TJkS56WtpkSHd",
  "key37": "3GLFw1YzBrXaGVoJV5LzJDeW8Xyue7QiXeTanhfty2xMdSLfxkQp1aW1UZtFSmwMLkjTDKJ78amw7MhrhSkoggmq",
  "key38": "4DNJ2Wc9PA3f93TWmkzQpcCvSp1buxEnvGUfRYSLjFt7qEAkYUnCqV8DXu2KneoarjdKk4g5en8P859AjgNwnFVx",
  "key39": "sYgAdoPB3fqE2ME95h6CdsSC9rMHCvkMF69QR3VxZKKtQrWuF4XWgVeabLFzPjCbPi8cMjiJHWEuqWzNTPLdC1v",
  "key40": "22f5gXBdZGKQ91BqXASxqQY31gjDDVG5uXhgL4woCbPsgK37dznrEAF7JNCmiQUckUUtzjtDUJ6X2hGaWt6CfsFn",
  "key41": "2nc3u2r9gJDqnzR9NiFmpUvBk4jEyopyuxiU2MwREo5EFyemFt3PW8SzdUjgMqGgUwJhCEiu8REbe5yNzE1C71cv",
  "key42": "2hHb5idbQJ1VDLmYQG7xgR7XeUfJWfcEPYgrPbvrZ36oLX6DWvUZc6K2fHqyEKM2TkvmMuYbxMVu9r9vx4YMRyA6",
  "key43": "5Z47TL1zTwh4gHnaMgSRoJuGTZipL7tMpwDAKBxbDRGA5suVWLVWjDqpxNvKYjMz1sT3D14ERfEhLSkD6Zy1thV9",
  "key44": "2nnBdaPVokWqZXNmtW5cQyngg1LtMBhmEha3QiQ9LsdkbfYnswWdLWEJknM7QmXmW4fcCG8tvnvyEMLs4HpdJ8PS",
  "key45": "5LPLBQCJHqFeX9XvNpPfFHZeNvohjWQkje1Qwgs1N1BCe1cy67zfsToDHjRRH59JWMLxHdivafs24kN9bjvCmXP4",
  "key46": "2948o2GyToGK5bEQdQigmsCrg1rL8yCEujVTvsiLbiSyEJCaK1bFKjip1KzeK6ANPu4iknWAsy5TMj2RqP1VUutQ",
  "key47": "2DGXV2WJtLzwg81yuC9GkAtbQK8zHTQK12t3oTbEzWkNZDckwWvq3iqmGTUSLSsVKRgVvroA47Zvyr5RUiXKBv4D",
  "key48": "56n9tBRJoujaNdnRGhpRgUrUi2ELigu9tuKtZ4yfkmzyuS27Dgpqk8yowdAovDa6zSrZfQePAUxmWkTMGSHQmkv2"
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
