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
    "3zb6fAvhBrfmcqvHc6vaUshtnDSRbsy2rBRsuuNwRqkXWVe7RHoTV7udWwk1Nipn8weP3VkD8n9dxovqAHvM2NQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnaRTGjGa6dtNiQ8z2NHNCHmBkxrnps3sGNska2ZzRThu2qHLH4Zk63uVbc8uUZZBNChrsuuHXe6iDRGb8ZqAJV",
  "key1": "3DRz7ZZ7wwLvBgy3y7gYLEvC4k75SNJYku5pgVsCGHm78WbeKd2VStCkJTcBR6NyzqPSjxWvKiT1idExunNvVeUb",
  "key2": "2zKCqbKPsoXHff9EHDbNV6X5VKF5KRnV9NsXntMtG1Dv5yVZ7C56fyD91gkVDTJqv88bL7ULYFb8amjcKX6d9SGH",
  "key3": "4YMyx1tHZ7D7yxDuYD4DqSmrzLXLSRN2oDuHtKVe8GbV2t4tqW7d6ZxM2B7yoo7x9KjjatUkDxu3wXoVuDMpwMWs",
  "key4": "2ZzN5AHL7jhWoA6wUGaHiq1XZvUNpaWsJvN9qAxmJFFBso4w24yw9Nig9cfY9qrQvD2QyCLP3nQtADvDszBW9aVi",
  "key5": "2185qMfhVLSyoeKJWA4dW6Eyv71tqBaoqzmAEZJwdaatBwErvT8sJBA941HXLRHU9BFPgAG3H916gC7LVUAKnp1K",
  "key6": "4QdeFsmasniUvms3N8VtWAJwGbM6XuYpiyrn6PyiBAgFS7Ga3BfYycYCDow1m6zkLT9KecduEtshQJpNdEfTgYcs",
  "key7": "4xytPBksLrFruXC2RzNSkxex6s4XUd2dkCBCCS7CeKLGQPLgY7amr5uJVdi3PZjMcvFJw2aTsJxk328F8f5FAPeL",
  "key8": "4V8c44SRbiSX1GLT8Y1Et5pR3vtCoeohsTfPt3xveX3QjiK6nvBubCDbHeKDM26eAggmxR9ED8PAPSyVBbSzStaz",
  "key9": "5Z3J1YbEjhbSNhxJm1dtLxz5z9pBWAzJxzRL4TuMw1E7G5VnnWPxZAjpyApbDA2jNdT5Z8KFwJhvmru7ic1KvyR9",
  "key10": "4me4yXpBNSPPpTReJhWNrmw88yfDP7i4jmEEEAQi5Yjk2Hxuf9PYubR5grJJBBfQPDW8ERTa1GvFtGTFbDYi1Zft",
  "key11": "3G3A7nT5jaC1iyKSTT45eifnXRhrYDmxr4qRUgjDwPJUZgNZNfScwukR7YPDPTS8uXo67Fvfqn4XRPhhn4vkVnW1",
  "key12": "3GdxCJ5SAcPzFRrZTtTuQcb1b6nKyD8JaTWBq7knZzxdHnqxQEA8cfEr5CD2oZBc9znF59hkqY95eP7Koqq6cjeP",
  "key13": "3QJAVLxCcaExY7KrCBJEwVNCmgmfAnexK1VpRdVjPGq22ngvfAcgYL1zrviPEfzvQyT6PMASQqa46P44ePeTZv4p",
  "key14": "5GzhJAoJzrvPsuDDEyeDKN5oqYHzqqPJ8JbzUggJJ9Xqd5df2btL9v3nQS27GGtZ9rmvjTSQwXvdEZpkC2fM6aue",
  "key15": "5hwHsz4MnXsuhiGXBXHFmVAADjvvpACWRxy9nsuPUdqs2bqVuU2jgTNy5pDVfWphurSLwHdAVtQJC9UXScBXcDpr",
  "key16": "MTPLvjtRximARqBxMz5svJtmnAcp4mDAn1Fqiar9dmph56JYySHSoDP5LmPUcVFVW5y8jrUsBUeXLXH8qhUFNZS",
  "key17": "3u19yHXAoeFCquCTnYRQ1iRx8PnEMMe3KuUvnLyN6yrWqzwTgJKmPVmGPzHeufmXbAiVfnGGkevTMMjFC8sf1vBg",
  "key18": "5SCbqRM8ABM9zUECroqkjH7fJ3fU8FyqESsJbic4XyDCZqb1qVyxqMSHGw6GHPNqvUS2fW9SQ9XzycNTJfY9s7ZV",
  "key19": "3DbVdzaioMM5eK7Uy5DdAnYRkanZQtriBMfGxhr63Yt5iRcjFXvXDJ5MZLaDhjq5ZK3dReXoBXH4qAeeq9ASJWr8",
  "key20": "64rFhDoPfYAiJDHc7n8dT6B97Wqsk4zmCRdNJNGLiGK3S73P6TS2wEGuR81pGptHEtPJwXME7ZmuvfHEKpu2HYWv",
  "key21": "567jZ4B8Tf2g9u4UhDbQqMFGvDrTcD6fw6QMa6vmwv31tzFVpkn9Drcgb1qodFfTYxrvFht6daRhD88Qe6qFdztz",
  "key22": "2QbzH6wkdgZrbisxUhJwdY2atKdUqqtomj9AQfgYWUMsNT8VjfpmsPbfcX3Vhy45skezaBwTKfo81B6JvATpqzLo",
  "key23": "2VUEMWyoseK2UH61pXd7t9va6EFGvLoG3BJssxRxd4JnwCQtwx7uripyWQTVUVhA6bDp38ew3VSCkjTXXzWhdAtu",
  "key24": "4GywNHSRry7TW6ECSwxcYLsDVojPr3AVJUHTFEY6Ysh54Ejw2vwVWCWd7LnPVBrdVPWf2oyxVNCg6RjaPvpEvwue",
  "key25": "4ZKJKrzx4VzUaQcgbBk6ZT9pjvEbV3sAtxS53oXjowNZSjAMtdzKh2WtiXHW58swHBASVwQTAsBZZ4cDyZmjAAJE",
  "key26": "39JjBSs97oTN6r19PuZfCkG11ZFYUqyL65Qaf36KinQAoYA7tNv6ZdaKt6cXmBMqoMWACrWhHCCiD8frsoEuLUEz",
  "key27": "5sTN23q8LGS41X7YeMxVPeTyucBAUMcpp4sPq8wwzdNYgBFinMiuGtHTPZXn5BkYAvU3zcEaqTcju1HCCfC7nmGV",
  "key28": "ZCiYgz66avo84g7EgHu9cWQdXHZr61RhA6X9PCGaMPZhpAa7weWwtAUaBLAHsa96wV7SVfGwAFgqmMDrEjTkTD5",
  "key29": "vtKyhGANdJ8L7Z4vJ8sQBvANHxB2RsH3SxsHjQ8HrQoQGMWW7CgUCMEUJCDPSmJJhnfQKEKmwY6ZwvUyZ1StwNH",
  "key30": "5BLXHs6dtoKrZDy8A4m4DhntLH52XhcVhzGS29n3nJJVtDfS2f7H4B7za5azordseYqzQXT3cXqz7rD7HqrtZAkE",
  "key31": "3np1AvHZo5LkLyeBqUNHNhcVBRNDTwBaUbwnTKPEj1QRL6fT8CBpTdBpDctGcFtbtbNpk4bT3QW2FRmrBoUa6fH",
  "key32": "5V6cnUX61j4cjzP2S5gQubuhVrdx7DEJHjkgTr5x4CcWUY8Po2caxR1AEFLrejRcwuHNKx9miVYptgKPVxUDe4S8",
  "key33": "37RNr5vb9pBceRmGsjZFkgDVJcgsz3h5jn3doNNksUGDub6t1L9wh2xKdV3t99KgTELqAEvdDjaiL7ogKdU2aUaP",
  "key34": "5WdD8ZJAifFavJEA4om9VnfqeSuosYB76xzYPoW8GvGWVCr8dfS71kGtEUYNn88CUkjj44CQXbbN9mcDW88uAiqh",
  "key35": "5ihzjEBgSKQmxXbqxyjWf8ipzR3BivSx8zUV34ALp4jCHEXKfrAfHgbbMGC9GePb5zqFHQSLRyf3JdudsgrUNjHn",
  "key36": "5sNUmmwqoWu8MYNUB7J4zaUQEczyCSbxQFo4pp6ZPnmboF5VseNwpf5sn4FMnis5cjeKZPXzrpssZthK2ZiMLKET",
  "key37": "5c8Pm73D1pC9GUWA8TAf428MEY8qgzDpQ1u8NkM1sVeHKjpmFEACbDVGdUBXrvSKrdUBBoTgFWGCscfcCXWuBZrQ",
  "key38": "3EMJT2vd7fkvZ4QYhraSQB15qx5QYUDP8Zes9qH4WRxxdWxd8gasQdDk6aMBx1gua37TXaAf9VQErbyH2cgWBBjG",
  "key39": "2nDtaqwUd2oPin5gLEB2cKPTTkXLBqqf3gE8pyeQb3UVxFRG9KcTzZqazmNjEhJU5ri2bBQvukWRJTP28LikSP8p",
  "key40": "4TgnZtgB1s34U2QLCcJJ2TCEfu4nayYpLVvytAK5YsVe7VGadTgmpHN9V8MLuJQ1ZwXiEH9DP9F6GEGoYG4Qeizq",
  "key41": "4oqgdu3Tk4ekBcWz5afGmBs91PSDZztRu9HVXitYWv3xNuXGYoGMhk3nVnrRbqeCHBzSZ6tGj75y1vg11K5599Dp",
  "key42": "MamT1CRaBwCBsRqmRxYe3VLRe5yeHKz58cULqmWLymLxefwdTLdPd1duFyiGj86B9t8d8exDXxCzfRWLxnhqa99",
  "key43": "wG34W6uwL8bCcwd9fnemBQ1Avuq67rTqe19NAma4FeR8VjyQ8gy1vee6TJ7scopH5wrNAyvb2oGyFmeqy6SGmnP",
  "key44": "4XMCohEgGZdLi9pGbVVmEJgqSy34QnKn1pRxa5na5Qo1VPBgeqb8tbuP4MTM3BAKdun6RtFmkn3T58k3VaKUu5T",
  "key45": "4QCt8xWQnFYfv6AY2hzqWVGdkE2tJKd84FnKji4C6y8gaZcVtwJ9ZkQRnuCoW5yzsN3dnegQqUXayKN9NDavdimu",
  "key46": "3rvpNsCy2JAkV75L4NuKUk8uzosEvaAaX7DToYgki8AD2DigjxWA6MReutcFnow8zwmjXHxWVuqwrkHZVxsYULYn"
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
