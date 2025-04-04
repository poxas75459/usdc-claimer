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
    "f5z6H1AohECzLn8nD598DWmkHYFiPvgPmAUS6wvenEE6MyRELhHNzop9CYKmRphnv6vRJT6pXsgTRKvHi9ErNMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXWrWmHcuJWWFbpwTzqZYTcPotZikxNixXyrd2xes8fd5VVc98Ef11yn2uYfK1fjkR6QWGpSstCP2uUhFV7ahc3",
  "key1": "28Sg7SRty9LafJ9TLgygRMZpNoqH6sBqxCTdaQ1etyjxeXukVvnHjtjbJhzeFGkNZCAJwKqTb6sLfGJ4JgncSquN",
  "key2": "5Rt7L54BJYkJKeCAdUD3eAh6ALDxeySoheqs6azegjmpd4qpo9s5ED7QLvXuSH8m7QHBfUL6ZcrN9yLy5dDn9TkD",
  "key3": "77RHLQqnN4HKd7shXiN8dMWiBEFRht8jwgdrGW8gynh8M3S2rFj5WdwbTyhQ3comprmRS48edfgN5EFetQVyUnh",
  "key4": "5AsDXJqgk6fBee4yWDZsMx7rjb3fdBxm7JQ1PdNjp28w2QtyX2NR2ht9ZsFXW8iD4NbjgZ5PN3uyaqWHg5kHNELu",
  "key5": "5gBF4XErXGb4qgBWe2LzC3k9vR5ThkURt1vekVdqhxsn6y2FdoVwPbDruBoCXZW1tuAqqyxZCZ9KFsdMtjBcxKyS",
  "key6": "5aBWbQAytoZ5CyHeMtm5MyTT9mWUehJyrrQuJzdafS4iFdHpfjFFjLb9udVdiRhF2JUbgCMhE6bDzc7yj61NeT8n",
  "key7": "528cvi9kYm7hfENBBSjbBFrCJar3PES7eBn6EYLddx5aucKQbMuxu2eJ5buUA2PMhXe8Ufv1zHEvi4fkbXBjaoyv",
  "key8": "3CnrEQrcB3jCumu9rnbxJ3eQhLUEtxvEWrL4ffRprwdy9FNUVVHv4fB8QhNvKU9kswdg9Yx8VMFhJ7xxk9tyEaiS",
  "key9": "2qTx1Y1YZzd3jXtigMK2kxWSxE8sS41KwStBAWJbhWALBPBrDv2xuYUcpytph6Jjq5N54Kb3Qcd4rw5fjqYxNjKM",
  "key10": "4qb41xGYPRRbnV366ke7PXWkiQSUgN8NMqzdWiZDpMThsTj8o214V9y7qYYxUevFfRjdX3A1FLrtqpuYjZZpNqYr",
  "key11": "3FWGF3zT52SbP3WuFnZxmFW8SJzBxwSF3aXrXzhZ9fscfueWgWdvRzijhyYrRXAkVNsAFpChXrXZvmBgPiPbBAqF",
  "key12": "Gt1jksAsgVnuZq8yZbsYFaokUdCTTgWDNHX8gD6eU5aJdsNYScu3qqtGTCmYjg8ZTBfLQ8ZjQXiBUK3bWKHzS8f",
  "key13": "392KY27XbsUStYZEL8bGKovJ1zEt3weoFiu3d7Ev6CUaABiwVpGrv4tZrfXXFNbxrYDfVHMGDQR2cLuq8m1azGo6",
  "key14": "4N9D85eFewxnsqWKZGtucKhQ8iG1HDbpXuZhdQxDJdEEK8abmUVxu8m24LQYi6QAfcoMocBdvnz6rgtrYocRp7nr",
  "key15": "3T6D57TZmmzAGzPf9P8pWQJcD4aQ42WkgqDQJCybcKCB9YRUPCB7jRouavKRxo67JNK1WxW3drbZq23mJmHawmBy",
  "key16": "4Resi4sgATLq99YqQy2H9KLk4deD2uwZBnypHMSMYREUht1A95KiiiwdUZKztP9HevXpsBW6oJH1yr1nm3aakh4e",
  "key17": "3gpgXYiVRixNWpLGNBUMiDTBLJSRTTDw47JPikVbRXMYg4SakGHUsiXoZu17WeUszotEazSaW63T8SEJXdgVJQ9F",
  "key18": "Fm78vGt3HWkcm91xq31zg5Rq8b2GZtE1zWXhTGg9AAWaNsxrRSFTKCWyEqUpee3ZrTF18FvVDzUWkuKE5J26CwF",
  "key19": "2A8vF1JdP8WsENP3J6qqerpFEPjBkeP1xCsWMr8o7coBVjgeG9S8PpEwEGCiCscnwQJDN3sogCuqxq9L8fhkQq3i",
  "key20": "5p4YXKUF4HSN1hbbAyTX3WMTQN1NXoTWZ22fLqFdHv1YXrnY53RmPHVS4nBdu3TcNhqG513LDUoFJpbJN9TrYoGL",
  "key21": "3eTcPqtLdzbAAvkenaxUTeec5jiSxhsS1DA9hPDk751FEbCoKgBtdMwHPk9MUpc4vqDAdBjeHkL9LjhskB3TLRN5",
  "key22": "41oXnnxno2B4TX71tGrRJJADsi6TTzeDn9JLcJrMmNe3DrcpYSeaXbKJP8dDv2BbD39RaVzeSg5eouyrneRWuvqr",
  "key23": "3EHAUUAeF6ZSyUPoCXKLz7U9376BbwPsSgTkvso5Ro1d1xsMAGMadQY1A9GZuKKmo2QtVDx7iXF1dAna5emi7VyA",
  "key24": "2VxZeG1UCHbo2cqVCQvpAJcQ8Vfj9mahas4HJsnNPdYfT324YTjvFLVsALgwav4ZJY1GVpi7CVWvmqaBJFB6x51h",
  "key25": "43eNenZ8c5jUMA2Cu9wyWcBQB2tugfqydGWGtaf916yDJW15ioHLCpAYNhYoRUZQd1CAfcuV2zaMNgu5xKBRzXdm",
  "key26": "47wnV2PvhaXsL6jVCC8BkKkfNrSBpkBRj8wSi6JcWfsh7MpTK9j8vs8GzLLpwDKSaJn1odpR7iKpXYGeVM84rvcf",
  "key27": "2zG6V7Ln23uvH8msFd3MbJay7o1ZULZBd55SDFVvyDNWaqobAFP3rYZgt55vBKtPJqyXvJnufToSKKJCiaiUAx8Q",
  "key28": "fexVMNLNdKsmKoeJEHQRa4yeG2QS3xST6N1cmcYqfsAMmqYxC1x7HYx7uNmfbmL6ZQfAeE6UCsCbEBSsNCxfsxF",
  "key29": "594FDpz8x1eAUad43fUxJ6rCUD6mQNQbFZWdvZqKScUbCmaf47NgUTLVPiHFmacpwd2Y2DfEdzeXNipboFFiruA3",
  "key30": "48M1f1ugvfdudve4cFR5wynidiNz5CeztrzWARQBqsYjqy4LxTw179BnFemAF32B1ZUFt51zjfSpBSLJ1bg57Adu",
  "key31": "2UQVkvbgtgGhYb6Bxdgeba3WGfcebpE3YQbDjKB7PzPZwwPaaDsSBWGBguRcTPHFWxWAJ6m8nro8tSwhv9P1mitB",
  "key32": "5fVNV4jJ1VtoAvTWUQYS9KWV51aSdt6frMjX6M158WiP2kYZUfnxgNhjMKjyUPy2z7VeaXb1NgCDvyZaXBrKDGA3",
  "key33": "Yw4Wrj5kRmpdquCvVL2ec7ogUtV2Uizqwjic3WsD5Jz28yx9SqStY7QjLmngKtbGekHMVj6AttTnR9X2vbS2Mda",
  "key34": "3k2wjGVTXENoLTFrFc8eKy2H8QdMfxeHFw78cy8WpPnVwh7yeQZL452WwMzeHDEq9yYi7Q9jt8dUBrjuWevtS4Qb",
  "key35": "3Dk2cNFSjxsMbDcJXsC5SrwBd2HymxDotFTUWEewRUAmr6kJjUUvLFhdyuWXXBEDaTjeBpYpF9fWwvm9j2VqDTTk",
  "key36": "2VaxDf9EdyQmvg4x1MEBWf4EqLJsigJ1ogX6qHeMj9JexhdydGNdqwNtnoUuVphUQ7GzuRU7A555e1ip8JQayZUr",
  "key37": "4GNdarU2LjyRzuoBFxHJNJEEBSa35roULZgxnJjfeMxxBqW9wo24PSCH5Dd1xjLXmcCp7H2fdYzeNu5tZxfnnq7K",
  "key38": "5B3fQqmCQ4aQD8PinckqJE9HUJwXoY32F3MRv7vTrQE43LnBprj4qSsgn4Y6TBWXNLZwFtUuQxHXfETRWoE2wWk3",
  "key39": "2j4EukA3X4PbmnRNvsfJVnyjeQ3f7xJ2eLYZD9VwVNbdPU7iRRV3uNsbLeUw2ffuQP8dXHgbVktqpY4CgDriezT5",
  "key40": "2iaT5XGAFHJMVQkMWAqrNS8NYGcGydCYHJegXpdrLR2SDsSAdGZEVrtiET1qJu59LMCGeQBjRsFkTYFrfZ9GDFZ5",
  "key41": "58D7f4n3pgNVJ4yXDvmX8VRjTVHVu5hCAmP6Wgekak7kvq7KyKthjFgj5ZvHVxzWdeJH99nrwxkA4e4gQDMmnmYe",
  "key42": "YE4gQ6PyRY1goMr9Dsmt7pG1iyuFAoe8hEHoU1Ajj2hHFqA4NAYBJsckE38zvfTBhD2vdK5XF4bUkfeSwu3CANX",
  "key43": "DNc7PUzmA4zeBQjZZTSpuZoEkDj5kLbvuRDFpTvcuJCmsPCgJUJWxkjzt1vpPkmzRSijvuBZiBp5c9QeGCvB8J9",
  "key44": "3BMLE6Vvy2Ne74k5JB3xQbo9ASwrngveHoQixjhQVvpLin5DvE7pFt7JfheD18wMVCqei2UzQBWgquDkdYULLBqX",
  "key45": "6R1Wp4QrvyNR2RGtpBAHekhLZKDkr4678MFDq8f31AaNGRV5qjZ6EBMTifAjypan8gaNQE4462kjwQ1Q18Sw9hg",
  "key46": "38iGuzTjA51T4jpxwNZdduTWPKCxuTeTZCxa2N9oqRCPebd8xKQ71x9GUbaea9p9HDAvHdioNb2Z7fUDHzQnjbFb",
  "key47": "oP5gSXhDC7yTaMUmo7WPcsk9Mbck54kqcKLDQbyAHaxcY37KEkFcd7jcpoFJs7g8oZLAyWH1RorvxWw1GtUfMyN",
  "key48": "64rSfcjtoGVdyngDHY22ZJpRqB2HMM6QxqmPmxSMfmBn2whHutXd14uZRdZ9ADukDmtdmpDRoDRQEFKUieBeWgTd",
  "key49": "4xGEEigPpqQSBRf5Y1dDUqdpUg1wrCtaAWDwbS2RiNN9nBqZoqNSdTNKiurarFnChrV5iYDwHDwZcieXbMsfkfmm"
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
