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
    "3abK7naj8LPbktCHg3xvaf9WTvqLBwH41oBBbjwAjnEeWCgozFuYTVBfCjsgaDNdvYpHQnZT9VvmBVjbvLd6fy1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1nN5QtwsozDAb4CdNMoqsxfZGRH3VM37tPQ6fFeJfVYNJruPnXYa825pvjj7CVo5SZTF2rW58czpAP5DYGaMS8",
  "key1": "5i18nNXCMah1QLD2LwqX6JofKf8ethcBhfZaGYnqdkARQS9k3jqMEoFxY7CspbFjPtsT48a8SFsZEwvfhdzZs5ZQ",
  "key2": "ZBXVJuczmZR17Ps4zojaHuehH3uzQy517hcYo1TVCucT45sc6EEBs3MaFG7ghy82XH1BY9gZzEzo9K9hfMXUxGP",
  "key3": "5cXcT7fERJ9vaL6WFXkh89A1isRZa5dGa2jrwx4FvqGPmYtdPuCxeBxANzyhXiLeArSgWzhuByn2Mgkc3AHwUwyx",
  "key4": "2DmnQBPEqzAqZhdyQP8sR85XkMzrVUKCcriiPmGZsSZmQquy55SCqEqL62UFYKSQJY1nWPsVPnGaHpSUZ3H9d9uz",
  "key5": "2hW3Q2KD8m4mH3ryGqKyq3KRPWUrxrWxoSGvhbrnPBxJEfhKHd4Ha3HKykPUUcdL2K18PipFc3QTocQRqTThKEDx",
  "key6": "3mFVuKq16QM1hXwSTCWc6GiqVdwknTMjhDdXYHEPU9yduwSghbsxXWj1VPwREEDoAW4zfPvFVTF4qi7dQAweWYh6",
  "key7": "5RGoUdy9fB24WVYJ2wZd4EAXoUggLg8tpEq4UDGCGgMyHapfNhZiSGW5qQ5ftPtnFdkkSVBWnAGc5NEhbzo1dyPk",
  "key8": "5SCNayYwGp5ucsPjcvJizpQ97Gwku47ijAtv8kNH1dmTNTRxkh7uLg62mxfLPCACDDZ7J8bKRpeUpxZi6hxVFRJp",
  "key9": "biJkNgcheAp8szrk8VXoufAc49FGvXbYwSyH9dqv1KT18DH2WPFnAKCs1LE7ErNLLzYpLcpgu2WpKsj1hbmiF4g",
  "key10": "3TKrjwSE2qod6rwwHcEuvgZrfemrKh1tQbVJyMRoCXxuxR68uQ6JAuyYf7aBiq3a3qCnqhmhJ3fehX2e4dtx4o2r",
  "key11": "3mugq8d6yYNTNsMsqeaB59iiW1NkLfLtdMJxceKBfZXqh2KUV6VqYeQweyTefkoN67k1JrV8uhsSmzxUk1Hp2qrW",
  "key12": "Nor7AtKynThu6HzE2Aa4kgx6uw8cqmjPD9EHRTAsoi3N1kit5kjfKtdAwAQoXtx3DKK4KjHS3Va1uJLNWohmBcK",
  "key13": "4my3WeXwv9mjKhSCb5a2g7b3yRaHCiH8yN7pqVtocGgaBiWkk54jpRtwHUbeEH6ToYhFBXaopKpY3VK4B3ZZyy6d",
  "key14": "4fz2heN67h3ZcQWpGduJ4UvCdFpjrk7aBy7ALZatVTQ8AFAkofoNSawEW8sz79x7JVzYdXmNQ3wsZcgiWAcQWiDQ",
  "key15": "58tz7uCuZt3bZb7uYgK392mtum4x2NypwVpFc69T7D4GWr2kfH4bfz2wCD7KdWsCouGi6AUfivVV922d4YFK3ymv",
  "key16": "4ySYv1mFKtzTswmy4Tf2V6q8KgemDMD1uVR2Y3bYq7e8NJvEf3xWK2E9brrt7mWaxGucGWo69DXfLkub8VzDiewx",
  "key17": "63zwK5hc3jvUa4SLW6kJtNeMrEtS55x7JFVUgNDY9DxTtDioXsbvsBExXvvbzpp24CgfMHqitEgVkHKCvoNGDPmN",
  "key18": "4so2CsWaPm5nyUtnuDA8Mtgt6qmRFhySM76qAetBWhE61ZSRU7iXWKdwCkzyQmnMAeTcwMfroubDwgn6K6XDcjC5",
  "key19": "4JA8dSp2Pj5NandY54vbnrUffMyoCUzmL2REovBBtYnpHzCzxR5FhpNvYa1Ng29AdKrvCQ7e49hxD85MUG8WxQfX",
  "key20": "3BFfZq9MVWNsTtjGm74TAWGQ6BagAnxm5Er6oDBYuE66B9jX5woAZLgNLw2vqXmCuptZWUQEnRdeTZxNWSREZbpU",
  "key21": "5MD41E6QvyEXWKhkAhE4DWmPyKoQUnk2YSgdJnZBgtwzaRZmox9Nf86CEvs9DFJ88ETwjVibCdJqFuZRYoVYJpMj",
  "key22": "4TQ23du1ZJVpYJZVbQADUnoYPzY1LPZ9zvi72rF3KhHBr6BoefNMkrw7YUneR6knodVH4d543X5xFuHCsYoz8AjN",
  "key23": "3gvRVKVnWGiyZ75fSXWhEi2eA5tVNFof9Svsx2s17pDcnMsMVZwUqeLBpXUPUZvxkNtRH1dNHRbtjL489hx8Fz9f",
  "key24": "43JSf3dqvq3JVAZ9TY3M8RF935HtyB2rVRZrAd1AdrhUkUL7ad9PBhEFLSWQu8dWng6Ge5L3fmDRizFJAuDDqd62",
  "key25": "4MqqQqiyq4n61wQN7wtK68mrDdmUwhbA1XhZSW5r1fnXNsciAbAwjo233Hsw9TSe8d3r9nyjiwvV4QkbNeykAtws",
  "key26": "jzJp8oXzggjsW8qtSeP1vBrqoS44V7aT3R94B3WCsccdGCXDF1UocQV4AdpJ5qCGWdsQVeVyBEBvsr7w5tkQaV3",
  "key27": "2hzMPvFz6i9ZH1pWT7UcxHd6cc8AxfnB6ExojhaP74Dfw29XcgetEhnFApoSCvJvP5gnKV7zztMnNTMgGyRZCmZT",
  "key28": "5DfXYo8TcSay3yc1psFLyNRiRerxbP1z42L1sDnbtTF1XXrUbdNRqGbuarU4kA7LbUN6zdcuUQihwFTG1Ef2sGPW",
  "key29": "3SRvQW1eN5oXVdqctoHfHDRrY3gCupEZa3hRNumibe5vKy9ugXjYPDFVZw3maBihrGTGT2xuW38B29fggV46fZbr",
  "key30": "62gC2NJTDEEtC3iD2Zfnmfdj5c2WoQ1RUDUg27JkyUeNLsYj4mEqUBzJLvAr1h2aJeFek8LrKyXV1vfsdtaJ7HYC",
  "key31": "3AzPtCcEYRR2jVmimPm4aaRwGsHdfshARwstEWbz45ip7NwzCX8Vg9YBj85WSHCp9eZue3KVgtFgxp3peK9t9cf6",
  "key32": "5v2qwKWA4QSNM2H4NpZjqz8UimTe4hsoPWCkESEaGcD6VoPRDEeQuUCUUrmz9DaWGt2wzsfdWqsedNBrpzQwXPCi",
  "key33": "37UghTYFBkyWxvhhMwjfzHVKjAfyfPJRJMbLdVdY9pTaASqST6S2gvKZDqzWXJQEM3Yv8xKV4UzUed75VCihNDkZ",
  "key34": "5QZZ8Sx6ExV3M24Q8j9HgpnycyJkc5h58WF9dEBeCiQZ2ygBsnAs9APkGfaRREdU4YBxJ7Uj9xQeRdKpMobaZfaS",
  "key35": "3tSKCJosoQYDCBD4DSyfVNm1AN13CngWvdcemCw4gKtZcy7mYBvPyxKPYKyie5njsn2arAUWNMA9wwvmBCVJGhSb",
  "key36": "5MPVjkCHh9fPinCCauCFvXmmp2YrXwWAjGbNi7oxP4GkWY3YTimRPmPWUJXd76tDgubgejBpCdCwzDxWtsDxZcte",
  "key37": "MinUNdMp7tor2VTDZsGDKTxLa35HjfM9Fuoodt7MizYcWKT4WGAMbqoZPSLUVMDHHpnzxb1Rt7ReBKeiRx85ygR",
  "key38": "66ZvmMophbqcWCAtkZZt2LnVdFAWKo3RcFZ242R8kTgDvbVsrffPWBf7WsVKqHzAJApxsemdaMGZTB6HsHwJgTXt",
  "key39": "K2cUouqTvxukSJyBrB3CYRPDNRugJeg8nMAEGbRKjMwjFGtQUhWhxK6YGs2c4Uz66w8FxWqvHuuS3GgrmDNMdLZ",
  "key40": "38cUpznuZLpq7wnCB7svoikmApFTuDDmMcTnkLgtLi1TJgHzvcQsyszYncACAN22fSnKa5XGF4JBV7PdetFqWdep",
  "key41": "WpMxi1bawx93XEL53NmsWtb43Av2j9uMgBdZ1XTo1i9ddGga9jpUFiuHGx4bC85bd79BZpoBJGhpTGcH8ccXEKa",
  "key42": "3Dih1TkNpAjMnd1efUxynCCa5i7n5PjuHuFUDNRZt7HrmJoPbjLqUkG18isukSADfKc6eBeXDTdJ28zTh2mnqhnB",
  "key43": "4LqzoZft9dYyEGc6GvXTah8tUoMLBFK3jALB3nuW5rpz6QBWeuWP3hUeeK5CGfE9LUbr91uzrcyAxPbpLjbDc5Gn",
  "key44": "5Wr2KDoaXwdgWUVdBBRAHawGYUeqRYoUE7K4cTuLsQw2WpEYPNsyoxKkU6eoNxdBLCqGRQEn7YqgQ9mXAT87HCQ4",
  "key45": "43yJ1YGewVvutn8dvT8Cw1xzykW75QqBZuTWXMSoi5PpSsoLuUKZSisTSAKrsai9PPhqWD9hAH5HJdrQuJ8ws5LZ",
  "key46": "3AQb6wbaXftQG1y2jFBNECUrcBx7K2epPewThhGtUr1vsfa2bEfCRmzxqfMEKSnHTCQnYTBGiWFNsWjdzigttFSD"
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
