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
    "3Q6Hh5sEcmh55FxGXfvQm7JHgUYzFMSKQ7XVhzdCwgBWUJHxseRByGCgNnXsA6hQxai3F5bTVcUtGwjdKDwn8FZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLaV2xYftrhNwfKtWKvRomnWUj2JDZveuWsjLEfyV6So6TFaGMCYqgSuyNFVTUC3fBGVpY9JCw7qgpmjsc41c98",
  "key1": "5wk925aVapEdoWhwWXvXaYgr9ibZ91vo61Yae7NYoQGuBFajAy4p12gcDFAk7DWiezozvQrs5Jsz4AJTCTubAaFa",
  "key2": "555UgCr2NM7JcHVH5chnR3JyfV8fYLZy2ii1TnfyxCQ2YXaAmAVVhfjkbJ5d5UbdtrWGnz9LJDEZFQJ6mGT51C9S",
  "key3": "3Hno26mRZQhmJLan5NtcyMyLcet3eYVwTkcbjjFnckVsq1g7aNf7FtkuzwRUHgk1Bz1wTLXWAdn5o8FeunPzQUyb",
  "key4": "3Dmfih7TqqmHrEjoh9Toscd37DasAgHh1o6KaVJcxei6C7eNnQW8EPkCMpZ2Zx6VzT7zRKzjVoh8yjR5p2ATwrJU",
  "key5": "3pwJxo3gGZcRQkzyGzQDvAbqpQmzZw5XM62VUsn93rg1BL7e9TcL8pHzJCLfiknE7gn57mwKaD8xnYPc1DwLHQ3V",
  "key6": "pqZVaLQ7bqXaJ2qUvBAFuj4magsNP2fg6DViCvdcC3BCYcR58aK3CgVBnNspDBXUKNXYZo1dJjwR5vmXH9LYagu",
  "key7": "4R6Q6ExPtyCCX4gZCRb5DY1pHgGyK22UidCsr8CWQxep1uhPHtGLb759CZgHwP5yasqseYKVoe6mQBqhfJtdUKn3",
  "key8": "2226Gs4oiZUTM7mYxaAXgSHshWZtCJZzzX5ivfkSydHMy9yhJxQEu8HDaNeEgVQAdYLHi58DahMPMNbLSAHrpkm8",
  "key9": "4H8X8kqU8foaRHwmFjMzhWWnE1jp3DSBCN88jLoAERotwKdXzS1FAsuUSUehifZak167Zvs1nDQjgnZgM8hFesUZ",
  "key10": "44VK2k6ncuMiET4JQMavQHD47dunwekVokK94dzTUocN6RaxhfUWYfu5v1Z1BK7R8kMRLNUhk7T4XTpyJXRJjyCC",
  "key11": "FSTK5J51nh2s42PEWDqzuEoTvawJo4UQCyTsXNuJNmjE9EgvoRD4sNXkK6oFHmD7g9DvVwpPtwy8gGtWycd9HsA",
  "key12": "21Bpkg1q75R9V5KCQutZW2TAVabHCydYgcwc1iFskg428Ge1LS7ZbKzcZSrMFKREwaEiSKyhG3kscXzi8Xk1D7sG",
  "key13": "2btXx27S1RgSnsQdWi1iKcMUifGrd5cJyzW3zsDwVenziVSfDWT3Vvv54e91j86r34ss6fYNHrwmGo8ZnkVZf9a2",
  "key14": "LRUEU3qzBLu3kZH6X4es7QA17AZKUvrSEKqQw1ETCj4owfn63sc325bp8Qaojtva1kvtMyWxQxeD9MNCBv9NwD8",
  "key15": "2BXjUZw88g4bgbbvR8QZrmKdywqgCeV1k6bwvNDCSVY3U9sK7LNasVfsDshv2DiWma1P2idKrsEDfVFC7CM3DGLZ",
  "key16": "2FmGQW8bHKd9FaKzyj63zr3cmB6wwGKbw4b21rzN2ovS4t548bNvAdF9796sqELw9R8SfH8xriZcR3yuGUp8Ld4t",
  "key17": "4RLogw65iAL4nYzpnhgLK3smzAJeW9zhM7WjLNTrp2doiG5k7KisvPgPakZrmzuHeuN725XsPRBxKpWyBPtkH3FX",
  "key18": "3hzJGegW81UbbUXMTCBsU9U1ifxmv7PMhCvqQcnPGXwpnBcsmyU4tJqtePZoHhHBd3nu5AVqra89oznnEpkpme1c",
  "key19": "2pMuQXCcxvMfzSFNxm9cbDqnLP1FbFd2Ar57uCRJUKCiFHKxZeqDeNUXEffuQyWMsRBmCuwB8kP6AR4AD2xpx9Si",
  "key20": "2RrR2Kz39kAzNtHYMyv499ze4JHWJipCtbJLk5GEzNqUmWvCyuPRp91LNwDTJU9xuRZou77hd3B1zcqJpnQ7XNN9",
  "key21": "3Sj9fmWqL9GSwWzXAJ4YQHNPgM1TLToqJarKWSjLw16nvn9LQiLr4YSfdpECd4nkafFH1n3i6ChiMPetWSWUBLJj",
  "key22": "2ca7XCC6d6HHnfBmtK1aQycJhwCMn7K4NDp6LzTaLWbTxGSGXWm6rhGb1MbRoNhkwbAztEexxmo2G3KWDqcYGGZ7",
  "key23": "5dSWmvXL7npChAT9W84yod15SJGFsLFNFeLG2NAKAyKCbAymvTp7ni9Nsp9U83Frjj9AiwFhdKHxqopGa6s8RE6j",
  "key24": "4mvHgacjx4JG5q8DDWNbYv1xbMf7MRcjkUUBf153AH8vKa9osJgWEgrWkwPbFtXqQ1mdRf5GY3MpsvfCpSmheprK",
  "key25": "27DLNGQ7XWFEem7qRnoGANHX9ta5MU4xa2cr18YsUZRjafXgZ5yNo56YuWkvzvkBAN6dJPTXYnJ8y2Lee6pY1gsq",
  "key26": "3ZzoGcdN1aGwCAw41Fpa7Ri521AHf8mudMMtL8mt7M57vCTsfzTqgoEvuzuXbAotXMKDpJ51yaUemXQMnsCP4yvU",
  "key27": "Pe2WgPJb5N2guBnVofvmUdQJr7nS7FCEnLeDrXjT89g6cNdoTSxTRqQf6sHLnVBbtpCSNE63ChrUJvvKi1Q6pQV",
  "key28": "MfPuzLhKT6Tp4BoCGnytytKeEq4QNWr3udkBA6K8RdNf91zhGWd5WsUWhnBZECFRZgyZpxC2GGraFksqGMetJQk",
  "key29": "XhjPv7KsCDTNDe8KSkAzJ1cMwHhqyGwfzdNj1QcGQFp8C6EzhJhpuGYeX5v1V7HG2MXSVkmZJGAcmHSNNZjS6D1",
  "key30": "2Watbg1UTWmjVPeCed6qpoEm2CyhkiTw2JvtT4jVSHekHvkFbJE6uBgM4Ljmq8nkeWWxkXqEvkLHoP2puj223ZNT",
  "key31": "5XKGB9NwveeFmwQo29cssBZowXqoBqgH4shgbBw8N2CsUMZTrjTkMz3aANKKtbs91b34XKwehY3z4WDzXw725b7J",
  "key32": "21kkW4sat1Wurwpipbfmx3WzSEEWLiXuSQZQJYTCB9VtLU4BmFsWhGvYxhaH1z8Ms5mKgHNXZh6aQB1VbcYqCEhy",
  "key33": "58DUQP3zs4EVWUcZruVdA3uZP5GxpDswm9x3wJLvJtum1JJgSNjM8irkhuywomxZHZi1cAuDqFBmHxieh5JHKmRp",
  "key34": "61fvXKLK4NMV6MY8xpU9zmEnfN4A8KHPdeNKWRLF4Dt1rywbouixhzwmFTS511sdVQ7QgyWEKbQTZUng91Dm7Wbj",
  "key35": "MDryX6bSy9ZHNkNq4WRRZXTda4mURrCWaYLoAm7YNpV7hFhARccAsFqQcmJNVzbMmggRBf57cd5eLs8CMVKo6on",
  "key36": "sKGpb9aesk8Sb5RUJFxeiGYachW2vK6P7PhkBywfQuXpDaepRn36bZKhrHJfxWho4WUrDWeyX1nr5SKzs7CE5yd",
  "key37": "41CaXnuSUHB51T5H28d83gUHgXXhkezaoybNaocYHiWNpssMHV2Hf9eCefcs3umsM1SJvcLrrQeuVbxoEf9uiW5W",
  "key38": "2xghaRsNb5fjzKAS19SbFAhzRPc2TnyJTgpqoMun4ehg2KAVLdQFAEprucNCDchd7ap9TrmzJniuRfZFnSNvpmFY",
  "key39": "2DnL69k4CSjDrkTaB4qgLbAaPNyjFb4KRT2mTAvhjknAPBnVXLHWmdMjmQToHajUaCUuNeTWPNbNyAm5xLKgA898",
  "key40": "3tH99e5aoTZ5eU67ZzWJRPYnxoSmthW8NzZCSDwRbiZG57d86guicxoEwUFnW2Au8WZ1LntLfbiRC82Z27nxxcZu",
  "key41": "5AM28Yp2KrQvQAV3MFA3JdjGvSCRi46TkCupG5L4PCm2A3ut2JUXz9LKuZR26bui63acfysLjQwadWneboyzNdMz",
  "key42": "3WY8vrzWtLMe5K18wTfvuGeBFmCy5vEJyUWkq361JQ8sS1QDUqomhbtxCT2oKescW1YHRstUm7Z9JknwV2PzDj5p",
  "key43": "tcNkRuMc2twkVFox16t4kEmtt96qSHbH1y8JQvbsjDKgtcgZYHeJ1unn1n6yyJY7LujVoYxhWkDNPhGc4moGFBJ",
  "key44": "47ngB3o7cMDP8KVGBYJ7KGg25GzGXeC2VSfWh3T921Arb1Dm2nGmrCbA311LUqLGeLTMTC4cfFQY4YMFhHn7V147",
  "key45": "3VaDhHYWtafG1AcXVWxTorbAR8EWVKwaYL2mHg8KccEqjXcwRaRnmiqvjSs4bbwEfrdEvsZPgU7jcurW2fiMrieu",
  "key46": "2twHBBrWpJc9FkhCjRnypL5LqXZaHaLSwh57VTu2jB1QLxkX7MiA6PgonjmPPTBT5TzM4YNU3Xiprpmc5ET8EbZb"
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
