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
    "2Bv2wf89FbEbxNbZM5nJwapFaWv6sDRP2wC6Frhix8beJSfG7bTgrPKQkzPJ9bH5FUc6jx1aQmuV4Ea5dasQjPK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Qz11dXGBdw9s6Pn8sysFFU46Fyz68r5TTmrZMPGuQ72i4ng542Kdjgm2MMkfX9vejXVjZ6yQq3UZp1H58x3rfq",
  "key1": "2AGxexozJ6nKyjfbvfKPxgVn9unnx2K4nTzjzakSowjbyZycXTCqZGbhS6ATZhKNcCHV1oHtPJ1SEF54PUeUsssa",
  "key2": "BRfPuts4MSSKMXpAY3ZHzhSrp1ewCvp2CCb7XiwiWuP8vPSNc1w4abF9UpqfcsYVakeDVobLa1kH5w4gtShMKK7",
  "key3": "5Zfo2h8SCJVvWs3V5f7ctPqQYbGtfKn5WabhqXsRSLMhyzHCVkTzfyGNWuuU9bxN81CmCU2fU71ZahGBJXgxiKt5",
  "key4": "45WZSQDG246dF7rg5xJ9yKqwTQGdQnWerwUVgsMxGKn63sR9dPPn47isvFku85BXetQwh5Dm7tkFEXjk1en5s8FW",
  "key5": "2qP27yJVPrmrghixLqkNxdRuP3ZptbGidQXpL6PnS8tyzpU8fEryKxF7GxxzXKS2mNZ8T34VyuZqAzbfLmejwcPQ",
  "key6": "sUVUqYnbLJiBaK4rS9pk8oNQAqaVveMzzVYU23mdaxUXprytjcJyTxARNASAzsjUpsoFzGf2tEyjJSabMcv8iU3",
  "key7": "2U2cF75SVDhu1QLEQaXRZwgehQpbpweMCtSf39Y963vBPMx2BDqLpCoASmFx9h6M5KfKoCYLWmXgvB4vTW3A7AoS",
  "key8": "4wG8V44kBEE8LFDrU4AdBinUXgwGzot9UVvzxLYTpomBNnKYzos2cf9a2UafcoWx1mTpMpUv7817dKYKF2DFgN7c",
  "key9": "5MVzcVKAWojuBA7hQR9viqeuP9us42Ecr11UioW1o1AKSkp5tUGchp5nDG6x7WH26fcrzMWBaQzjFqDHb1yBmsiF",
  "key10": "4X1wzuFchefn2yWHSXYeQnG69k2NxF7heVsf2gg3H7QYT4dJ184yzwUaexezT4Uv3gmoxYiovEZJFfuCz9FtjtFQ",
  "key11": "26Pf2EPgeNvDTdxooFptqUT2GPiNXnm3TzQ4eKBk4JSc4y1yeFzJEog9SVwbKNQuAEqdR2KTLApGcXyUXLM63P1f",
  "key12": "2kGbhFqinjmF64fuoRRjVwqgGANTda1XdrcXSgAbhgKWa65hXzkq9ij8qBDaTBuMZmdN1pWMwDuL7Vxkx5uRpZwX",
  "key13": "5nNHTsB4zSrCky5UYjYyyf9zibcCSq8MoGPXytvR9fNjNA1pCcFzMbjyGmz2ESvvz2xsUTbU9dLVaFub6pcr8DYe",
  "key14": "4K8GVhbJ8VqJV3LD8W7eguP5XEPRVQQ5Qe172vDKBL4Rkfgd9c7Q5qZNt552VuwCUA9v8FMGRbS5TbDwNUXzA9Gp",
  "key15": "3b4R727TJhEQTFX7ZGCyGFqg1EenYp78pxgHwPee1yG4v3YpyRMV6xus8UKp4vQv7MA2oAwGP4brE4qUhQSBKWJZ",
  "key16": "AT5kUFuKAciDNziSvaRVBix4nYAGrMjXX1mYB2XyHWU1rBBGnNNRxwLHcydr7DhnGkmb6uQawjjgjAnRUpWBPHa",
  "key17": "4VjyJdzQ82a8DiA7F44SZnRUmMaha81VZCyt3DTXffoUXzHBPoavzA4qhvGVUaoFBmhgbQD9TiDbZ99LBXyue3wL",
  "key18": "29ftJEdu3AdAV38wKcL69iRQyL1fKJQb1VFtAdaMWaGEFDJwN6sktdx7tAw8EZcrkEnxhBcJehxffoC9nNajVqoj",
  "key19": "35rrEjP3yryj2wtyDsPhXBPdDf58TUj12GCHvkg8BPGMoHYWf3JfEZ8U9B2KRPk3ZkQ5t3zBtf4RKBocAmVo6KHs",
  "key20": "5cUJVf9UpFCKdkg9Xv3HDBnVcVkSD5SWqSLwEKpP69RFAzrBWdwvk7KAfRg9h3sFuYRZQFUiPuvdqaKjZNhHTbME",
  "key21": "UQiKv9x69kcBnyV57QtYqP9vS8Ptr7Rtid7QAuQcrJhTt2nrHuZB515XsxyGkyrtETCFA2jGYbkCwCBPomMbaDa",
  "key22": "1hgh7nqJCopaFJ6uiEZ8NV2gcvd792Z3aEv132GdfCuVyeid8i5mB9gAyCi5h8JeW3pLGQwbEKqKi26RzJRg1Es",
  "key23": "3pkoGMtTgDoVLsCMSruARCdLsvUT9DDPREcVu6dUeA9uNg3QXCvVD6FKGh4MzBT1tRSr5JR4sjmXPfFBKZm6QMJ",
  "key24": "5q4wgui1ATk9gBha2UoM5pDFz5LCGb8QAYBvA8FY65NBwtWYUQ7KXhZaNewV8hGUcMrorSu3BFvZVonj4XaUYwwk",
  "key25": "5uVPNcJuUUftie97FXMT4oxKHKd4JC4ZXWP6VrAaLJWeQFfCgCoVkFDUQAizuVUda9GN8Jy7HsnXHekb6Wzvn1ih",
  "key26": "2CwZ8Cytui7MWwakiiBe8tptmwMdvXMXY2jzBtEG9eN41bZNopbxygChMmkqZZL9zZNUhdkodz8qgNvQ4dwUd6op",
  "key27": "2Yhxa2RR9YTuBDejDYKjS92cJFpPVYXkjQCAhcfYMJnG5hPLxihJ38R4TXy94ZLDfE6nd1e6kFsCQUj1LPfNsbeH",
  "key28": "7jWvMGcnhYpJzsbScFAY6b2dQRzPEyY8HK8kpxHp45q3JS2bYeLH5o58SMbaKdySNJGis5GNZLGfQGxfsop5mCw",
  "key29": "4yCxMhL1xwAo2ngCpVaBgQti2p4QGVhHtFxzcCr7Xnw8Fg7ridkF7Gv44SMY9vka7zEg9mJa5NpY6P6rSf2CQCVM",
  "key30": "3o8HawHnYmk6JrecUPfC99iXzYsGr4hsCNtFm1ip4dSuerMwc55xaNPKpZ2FREGcbW895WvSZNr5EvuHMo5XHK1j",
  "key31": "4Gc9MnGBtKZpCgUfnyioWVjM9fNHYvYWc3a7fzvHaE2shuaTrWYVDA6ofdR7SXHzXh1UTC3UH59vYHjj6mKnwiiS",
  "key32": "5L18sBBZvrJLjLaxmRMfXjE6J1U4qGCqWrCzLNMcrmWZuaSmA3wbYPovKpkxjSNHXSgHtewQDLy1WMjsaXWMy7bx",
  "key33": "528Qg9BHVXhmjxGh5daoKRJJjUQYBzvhEEFhXqisFvd3AyeSjGcVS8CmpiE7xQwKWMJP9ofgez3dUNjVf4kg3LJy",
  "key34": "4CkvGecjnxXi2bxyKJ5hKgSAdczWxkVJskvWmrbLSVdZ3AbUTyaNrqzLhruCrooMxKDTbFgzEuVYvTthMQZd57Jx",
  "key35": "2k7bKCoigxqWqm4Sw21rFFuSu5XdQfxeDUEHX5Tb9bkmDfCT4r3NZgM2pBQjgyYkEKQRZQW55mdakyypdq8EKEef",
  "key36": "3VGTVJ4rWmeFGZEFHxTB8Yubg6B8Q9e2qZ6nVsVrbMJb7oyfA3tcZBEzhETgETV3cpcYfMb3GfUjRvGNE3W4sqw3",
  "key37": "4HjNyhVmEqnjm15aG6x1futv95kK1FuP4219kS6uTFtBdwCuSdvq7ne42Wkj4Bf9fmMx4BksmfHsepddnjaDYm28",
  "key38": "58Ac228gpuVJGKVNFUx79kpUz8LNRohzSPCcND6bQk7e8h2zNBBXbTGDBnHreBjeyjRcAoEMBq3ZAvVrCYaW3m5x",
  "key39": "4MJTDGknB4osgTbYQxa6dDLiwoE81NEhouSLkN56z4LQeDQWQ3EVLzVL6nqvtSyHfNaetz8CjgefsGfLMqjZLoen",
  "key40": "3uA6HyAEJ1x57jRCDUhaH7VpF9sZAMNYfLwjeMn4JnXp4qZ8oXJLAsYziTGB3U5gBjRiDMpGHazW8T66m98v1VKe",
  "key41": "5kJ8npAcDYyWFm6BevW84wLhr3Chc6t1jLgRE8mip7PVem8Wmu8dE5WzXpBNydep7TzSMzvNY1qtUEB37RtpuLv",
  "key42": "5HFS57QsTNEPFWJKbn5xoMaEPs5hvNh78CnHYsUEpyj3VVmeiohrsNQdewPenbGsmGQWwnkFLDZFtvSgDM9QUC7G",
  "key43": "SWM4dWh6HP6sdoETW2LjAAjvoQYsWFgUoSYJzkMBSH8vuFiMTpjVsKDL4VbyZmdjZUxKcjzh58Yt9y1q4xTR23N",
  "key44": "4zAd2CMfX3mW2JpdFmeESDxZ3TZRCqj51nZg1nza1QHjg4cQ96BMKgCeQ2uxnsNb8YAaFyQqpA119kv3gZkoLVnE",
  "key45": "JjxnY1g2avaXffxscMt8UCcN13q9SYBWkPN9GzYvmgEeDBZ3bBwqfhAsZt2UGYc91fa7bDbLUgs88pN8etq8Kwr",
  "key46": "2iWsKXiyC2p7NCF2ZrAtbAXEAZuuLuLPJnWtH6Z8gRZ7Ae5miZCLsdXHvSJ2dHCZ1jkiMgfByiifQBzxnqw94Teo"
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
