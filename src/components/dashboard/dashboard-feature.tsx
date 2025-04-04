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
    "5GrYi8hqt9o1H8nPUuom5PmNDkvAZbTkZdUFEdz735Lbpe3dAAhi32Sh8MtTkQk2oapACm52GESEwQmLfSPYbK8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMAXFgaLSAEtvfswkJ6UwrfZ4MtC4PLrXZ1wm8GVBwvy4CozZ1rPMUtLpSti8a6FLn1FaKSLUxnG53NAgcSXMEW",
  "key1": "WKoo3hGZvPNAZbKBfwbb28PdCugSHaEYVtHCymX981gsRU83KVRUiRjP2PjsL2bEcv1ie1r1o18xtfyu9wN9bxT",
  "key2": "4RQjNxzKahBSCLfM8okLS36DxQCfnN3Vp8n7nAqqre6FW9GDTBCGSaHVKRPnBGxguPXyKydhtQRwbfkwe3h34XsZ",
  "key3": "2mFtJpytMrpyTAE7cd2soE8LPfH95ytvh4qFoEonzaP9mTbbuGYZcZKjnVJBHiHqGZi7pFd4cfM8SVn3wjDy7iCp",
  "key4": "R6eHPYBdJkwKBZ23i2ojjuaJisZJcXYDBr9F3p5iApkPbqiepJED6zzr3DwRZkLMVdVjWRNT9hsCnTQnjaDaZz9",
  "key5": "5CJANd7RHwJuJ9JcGJnhoNZRm7RcJiauvC7Gh7ep4y1pcWQzsdVG3oKjsHfawqKTnVQGBbEUzg2f5awYAfwWcsGi",
  "key6": "4oC1eW7nopUtCpXd7dG9fHSkuneQUUwRLMdsgAW6ggvv98o9GsR6wRzWgSV4k7YfYxpq9XWxaBxq1duN6qKMcS9k",
  "key7": "4DwaAt6WUKkrZr77qzg3KGBWKdZu54n3eJCmNCUx7hQKRyYNjJ8y8LwhnTV7TpVVv54NKqevK1tsEU61ZkkF62eL",
  "key8": "5rSLsjQJkajccBEjzbJVMZZxTd2N9eR4KcnW6NdHsB5Cp87djsBLGtZawVcMAghhcxZhSiy9y2DTqHCH1cxRi3hM",
  "key9": "4ox2MwWb8ALL7A2CZta5Jmj6XCkhR4DdUWM6b54pLYm9B8MW944LqstJcgECAwqm7t8TQVkDrjhQ5941pUrcWZZ",
  "key10": "3XpFyw14GyFBy3enVbvkUJhTSBuWHRA6keFR3Z8CPMmsAV4hXtWC3ZtRyWNpKcHHRqtfwP1oAL9qmduMTrdBRGft",
  "key11": "Rfm5N2u4T4Y61tR7vxQt9LuhZbjaK7Avjr97aD84vgurCLrHrxAtw9MifrXEVkiH2ekGmvdUjsbYK5JvzkyuAAg",
  "key12": "3uMiseYirKHg1mAPRTh2JHcJmDXULnXRjK1zKM9NJiAuEcT8rTicDfuLSpCfczuv7QYwddaQLei3niyvcvNoowwK",
  "key13": "4vBv2ZGsN6XhhFQwzSJXcjRdpjnPduerj3RyHvYmgorJYc3HUUSZHrFTLZ6up1GXdn3qNQtLzgTmmHP4131Lvx75",
  "key14": "3moMumc18b9DBrDFGMv35Y9P82jdutu2GixpTeRcid4pCyQvmEYw4xnmAReVrwc92WbXvzkAdkX62PQVyG9Jmcga",
  "key15": "47BHNJq9PgcKCzsMk41RmE86DPWjMuqHs16DJZnVT4w7bWA7KogoXmktvtv8hys48bC1N38vqDRPc4rNvmBKDkKP",
  "key16": "yATMoBCCVxFpSMP1Ua39LBHfZSUVJPWWhaqWqJp9Tgd8Dgf8n6Fod68utqMeanwdmKs9884xGWHTFhtFfxVbQ6N",
  "key17": "3Z7QvCkgDANNJNeR4uJ9in8QZpaMgJMa31XKfcNPrJM55pP29j4sdFzkJh1hnxcUJ1LebmUibVgjeXD96qTBGEAZ",
  "key18": "3bAKRHy5xmg32FqbWHCEmCtijqPgfo8TRnJztrKpG1k8pDNQf5gxgbHfY8SyHygjTzByRJnxvzUBJPCKB6baFWta",
  "key19": "2ZaFhndJX7quaFv1qyTGXV53qJ7j1CgdvCK77rHrsjz2BrR4dQZozhWeBtYaxdKFhqY9WYXZfrTEJKFcJRjT3jqo",
  "key20": "3VdfCCHVzrdJ7g8toUae9PNhMNsgDhzmpcMLFsRXfTYSS5S5GCUzQ7Jrf45DcoVKBUPLYwEFJfEz7s4XL7RVYhjW",
  "key21": "zscokVdV9eLFB1hKCahpTM6Qf9Euk1tRSBm3HfswptcY8szjwRuc7HHT78mzhdsrcJAP3B2BVqVkFcb1L4HBgna",
  "key22": "Ej3HUKkQpPKJzNq7wS2DBnADbL5XMhQ3NDhzErdtTHXaXMgQt4cGkKxffdRX8XLfVepEZeHe1QDsGnsFhDHXv2A",
  "key23": "5eodqwn3F27wU1ziTgrCWXfZ4yjTHPTLSepLRMZkYziMosoPrbF9K5zM8a1Y1PuZ2Xc5E3P1W6PQ2z4LgNqoY8Ju",
  "key24": "259fv3spS8CuRvdFZvhwBTe4GJpP6LvfCb7WGeMmPpu994RqsBcLueKGWDEVQRXVPTp72NgNVRjSSz8GniLDuLrj",
  "key25": "4USr3uzGhkuvomsMfrs3C7fUEudyQgCTkHWo5V4J6VnFbEA5aUTvoGKo4f91uQys5e3vcZiYRc2UDf3C1cX9borF",
  "key26": "eRAeK8iupkYqFVJPXgg7cmuWtxDQi7wt6ssD8Jqvej6ppg93S2uBr8XueeukDroTGi3Ndy4BFZhqwhBHxd6Hd6R",
  "key27": "4Sv3TE27RNN1e25eZPXK71PgiJtoXzXDG7jVvA7VKVpDEeQhjnsX36ddNf9r9vZmmKhbyeTtftTDfwYQ3qaqVQ3G",
  "key28": "2zSA7A33FshAfgrPgdExKA3uimXnmDzBoVsgrq6D1FSUtPkairpLWAMgVwuHtqvWuNqGrgBDNUuQj9qL6rUasi8f",
  "key29": "3svHTTk4Y6F93vWEGkLnueHSKUQqypeJQzxNYGahDXDwXi8ZDGosaCAZUjWSdA1EVUxAYV6rZTCa32mf2zHM7Ezp",
  "key30": "4Y9j5seuoVuP9fBk7Xpv7XUiMxyvVpA6tnwTtcm66kmnS3vVvhVTuygorEQHHdNQaACEvjExiZSPFTUmLowivgJq",
  "key31": "3AwFYqF8EzChCwYw76QceKBkWQfBvY7TDhBcs1mmCZEaAejna43UdwYcjkmDW3CWK3GEdJ4FxvTecHF7EnbGTHLu",
  "key32": "33rPTX5zt3dJHKxNm58AA1ddjy9Kw9LkXLyUXQAsPbgThgCvjkvxQJnHGdHEW4PaQbr3naVd9Z4cKYEamuMYfP3f",
  "key33": "2eYvCdEfaouiWc4WkUtAp2936Mv4aXmnMZaLhkw7jUYW84Fik5syonoFA2GDS8kM8KXc2WywCZuq3AjLpEFPKdRq",
  "key34": "4uGuziSrqJbMeYvsTRfJHirmENzXL944BQ59SgavZv61SaRSWKU2kNYNuRYwzUk17ZfCrv5fDRT3hb7q88BbE2sq",
  "key35": "bBXCN7VYRQTqywtuS6NLqP3W9ngnsGYSfWaZnXUc5EaVqtjW4EwUEpA42hEdehQBLiuswGuhX9f97ZUS1i4hvbj",
  "key36": "3dAdZhXKtxZ8dM3xtEATittG7eD1oTMi6GwUbpRQZwuPXKKndnCoMnbwPPSnaf8kjR6EorWT3o5YKe8UqzsCCLwB",
  "key37": "5d9M8RrXBhpSh5qVtKdgjkfrDxxsFchScRNFwnd1b5agBi8iArqJJtiwFTYcBXfaKCf5m6gBWmyR4eEK2rRuSqpz",
  "key38": "4ncgn3zeyQkm1Jqc8dg6ku57ybj3vEZJGyESjRtLrhPKkDWWsHUAuYdCAQsbSyABausUvrq1127QsYiFFUdMqRYK",
  "key39": "4f66FZkMKvceKRvje68X4CeYQLCBm67sUKGs1e8SbS95twbt6jVXj21HsJrzqVLUqdeghUdjgLsGUvVzQ7mFPjaA",
  "key40": "2zPbJqqZHQYEk2eKaeGdc6Dj2NpVVSkTDUQzKGevHgVXq2BrfQmhzPJwmS3fSa18kfk3Le7JsRePAhBiKmkMfhkG",
  "key41": "5R8tYeDhJA6iptZoCQAvD5Z3g5nc14gdA5CcfRftSPQCTj11fGJc2daXPCYsH9z6Xdsme1vTgu8AmbtzRJdSk8YK",
  "key42": "3iEBS78nMhQbxKtBcUfyRHX6jqYoJWhcxz34qcr1v9MF73cQXvkstfTEgEMTbmUcdvYEJj2jNuGDS7s7DisnDQ5b",
  "key43": "4VnTuidBVKXR1EzqtwDjkMvJ1axxTRUV5g4hXsaHWDrHAu1Nja82sJJ1ij8WAP7f3G8NEqPe89KApxz5B8xtb6hA",
  "key44": "418TZaPb8mdS3tFQ1yndc3HmV4R62QTsqA6X5SuCwh9iT6rpS53aWphnqMj6317sLGaA1zqMRs3rAPYUkhsSWPLf",
  "key45": "2eVXUnuiUuyQwXYWrv6sEv5nwMVSbLcbRokUnq9Lc3rAmyLegXgzN4iAXgZ4NikSZtPPyYV9U1JqyBBrnApDY1we",
  "key46": "3AHFRgS3RFkbu2ZpWm33mwRDYkwt1FKa2mrhheRLjNQmFPK1VdKJawZzM9SYGUsbHH6itsnuPnJRVKtm5GZf7c4M"
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
