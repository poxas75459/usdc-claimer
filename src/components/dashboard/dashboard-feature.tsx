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
    "3WWj3bcxYrqyyyBVxY2oaJdQYFj7FsScAKnkqUoobzJ7AK84gxSDLLscJaTjRwe7ApF1vxBaffLNsnwUz6qoqS6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQpuD71KCSSk5425AkV7VWCK8LnSn6TERBnf3nYqUpcrbhgT4BhjzQNikbhzU7rBihyoaZwqpLM9dPZeWzo1QX6",
  "key1": "4K1ftCBKDmCY2rH2rTh6uR8ZgWzLpeHVwKfdZgKAbveCXMUu9SM1nPPsAsfveyPSbnDYPok7dAJgDuekXGnu5xV9",
  "key2": "5vjVgF88XgmVUMW8oK9yWnUjVhhr9kYHBVUMXKRqhAndBYD5EwLESVMimkH1YvsenKniCpfoG2PqYvWyc94vmact",
  "key3": "Vg6N8ZeqchwpaMxwWDjvm7vMcGNFREo65gFWdt4kKkC97RC4RgrnjstqkH3ndffC9ofEAyypj1qhrYqRu81MEiz",
  "key4": "4RMopS3DJBXqJkEFJdXYDLD4C9rxhFQjPkrjE5H7LhkoTVTapvfDFeqbkbcWbXWYFYSR4q6QLPKYHGehjLaw7cqC",
  "key5": "4Wk1H7mEHE9GBuKzxbpc6fKqPa1ixaPE656f8Jk6EooQTcrM3wmLqfySeMZ431N8R5bT55vhZCfJpqyH8tCPbxbC",
  "key6": "2W1NXtZsTuz5aWjBXy8Wr6yfTMoPYmHP4cyEjR2ydeVhx5uT76Uwgg1HjJWDypMFGH8ZwqSBLfTz6ir2fWpXNPcN",
  "key7": "4JwEs1Px8Gu9tbvnt7KUsXqANbJXojcrsyKLnFF7wzFS4981bM9nRzFnRXSb1htRzuyY66nKUkYyDMrPNrRWtkrg",
  "key8": "zNEw5j7jH9brLkmw5G2fjGfNCFnoPjHa2mTvFDrVYKTqGXDJa7kccDEtHJ7W8Q6oWm3MNey1QVmbzuPzz4SfANG",
  "key9": "xbCZsqDCVieLrUiz2qkMzd1cSW65oSqL29r9AhSz5jb8xHTmVHV1o3Xm3WmMEoJEPGG3zFWUSujWfzZMfB6A71t",
  "key10": "qMmvHrdQSfVfZraqKqibAJ5xRHVZyoitDcUNmQLuyM3Qk3LcGmRdYzW7iypXcMERiGKonBAKQqUfNgVYdK8pSza",
  "key11": "3c2rPQzpjm37QKSJTUchZ5dfgdQ6LLwQ1zhHfTbTqtKguntEeXhMSJjPrUsRZMYJbmhijBPNRCB3DbUBCxSueAUo",
  "key12": "3KhGKF1D6Tqv4Gdf1QcEomJNTNQnVVzRaKJWaMz1bt8TsVBGqj1354QYMHMvRxTH3qbbAxB31rbyeJJpTHvLS3e6",
  "key13": "GC4P1NWfdom4KyEexaF6EGiXMvGGGBan6rrtBjEP6wAwPWRPbvyPbToGD3BFbbv6CdPkWzgF5ah2vpmJNtxiunf",
  "key14": "vQetvXLfqoi7H5p7eHfCeXauCdj2y5WK4batiTC6PRugVRYXayfEhjZfsrZugyBSi2g5j95guSRdwszmN943sJh",
  "key15": "2Z4xEnRLiz2coBZdFKJNV2W2i5WCUzxopdmDiJ1TdKNSHM7ueZgH2dREeVSRN6BhEJ86ryfBMnY9yr41dcFJ2G2U",
  "key16": "2zia97ZuoN7X6vG8VXhhXH3QxMc81tM7Jqge4d3cAAkLAngd6YxjXGEVMJo42vTEpD3wbgHe4iLGndQWH9wiJReV",
  "key17": "5YyGqWPkT8FhsnUTXh7CkxCMcGoD7HnHZJrrivDwouD64Td5ZW2M8ps7LmLjK4Z7s4R7qx3MvYV36ckowjwdUWmE",
  "key18": "2G6kpnkF87sjqBDFtJxJGBnLVK3PQy5S84gnXfJ6U589x7E8h4Tj3oE5YBejiojDesGcHbffns81iwUQTtdJUZRy",
  "key19": "5qeFpzZeQNiPJmBS6JHubfFaXYj7JPCGnDU334mJGS4deUtRrMFUKQUzNJHUMV3P4njGVvLA2ZaHP2LetiY1LRRX",
  "key20": "5VzCXgS4B1j2SzV6i7sK2TbxFC3SgQdzgZSDHHDiLC3WFHoF3VSGuxVVdF3sRuxrrdHiHhGjwMjGTNqrR9sQpFGh",
  "key21": "4JDUp4XQxMxAS1SWouZhhXvDgXBCeqEfwjaw1c4m3yTa3xUNKxbgcGNwvPKfpCqjmf88d1wBD7mQmxFcWVKpmCz",
  "key22": "3jutXj1YMScG1cQLne1c1KHadLkiNKsjhxubNeFWMiin6eKSmtV6f8iAZTujAkaYisX2hAJuBqgEE3d41ZkPjueL",
  "key23": "2sxr1ei3XzPovxWfG2Da4yu8WSrcqSrKgj2Tw8NzbXvySJsmfsK8TPjacxWVXFL7A2f5ERjj7Fz83r6GYWkuaAcv",
  "key24": "3epTG3Rk4QfJPbPtTczEgVdNgMf2EtxnFuGDYr7FQz597XPuESqBuzmvQiMvRUpAAjojjp71E6YJLr8TSnzbnXqE",
  "key25": "4yJJ2DCehr45DxMmFjg89BLvy1JRHgagQGsSEzg79jpRYNosxfpyuL4NMyhMMLvNjCS9LZruuM7jpLxdErvF1vEh",
  "key26": "27bkQxf6ZFZAZqTgTSSDFRm9mWvvh1W5x8codFKh4DtTo5wESkhan4kYnpqF5ch9KpvMLpwsH2zv5VBbRfbhSsAa",
  "key27": "4qxpUpM57sgQFR4s9mmznf9JECbNk3CkL7YwzsuXQ9VQT6kMKmJmY6fUvbtaURwK6JQ1nWymxTK3DTXqJL7kGTM6",
  "key28": "5BgEs5ExU7NT8NmKa6Sn5Xja1E5ujY2H5FjhLRgX55UNXw1g43fsBowuKcDThsFNPbu3YzXtEEFGAuQSjGzEwqgY",
  "key29": "2sMsqxxeFU8LAxuEWcESiRyginvbTx2mvsMKTrSvKddcdZ4EdVi1zpYPtQfSN2KJ9yxV8BDP6oFBPBYJU6tihCxa",
  "key30": "bEBGQKxKFVST2QqS7Cbw6CxpW33Q5Z2um1eAWE4vMkgtfobEXbi4xix46RQAjYHKVNVVtep5Jta8NywdaScvc2B",
  "key31": "gqKRs1MLeYbBi6J7G8egw67RAzU4NUPvNE445UBNDLErR228hiK6t69L3VBfGVJceqA34bALpsK1vftY6yTumq2",
  "key32": "3qzfgjBoU7yFwETdv7NC4xbAVo9wPjL4HDvsbdcL2zMXntivv9WEbkA8d7UkmAK1Fc1fMAhaeg5ZJXwvpq3i7taM",
  "key33": "2u3pWTAr9bPK4EvZfU5r2XQBmNEkxWRAR4kmwRw5bjCpS54r31JymMyQapzNmCjWBCuZphWAnNTKxozbSxwtmDnw",
  "key34": "2UbXR1VyHnr4irVYVSnjpdyrXpsYgdEnKtuPSavaFsNiXWfAHvfbkCUoUKNYr5BL4fk4rXcxf3j9HmdjdHoJ3vDX",
  "key35": "5gFJd3SnvexryeuNntuRfWBdi9kZuxCBuLy3jkAmQo69J5Xha88rRuP2gmDnnEPvBu4yMZfMasCYWahySeAk6tMu",
  "key36": "4LQzVkofDeuJMBJpg9pcDdD7JAG5tdS2Q6WBE8F7meWHc6RmHwHLCHHkWhnue17rprEzfhoyVUPrmJ1nk2ECUZ5u",
  "key37": "NrUHsdtTL9gPekRrktfrRg9z3VpZMb1s96oxe7AjQSAKB2952f3iaeguCrL2CFGpWF9ZqDodmreNKn65AuKSyGP",
  "key38": "4fpyoNMXZZYtE7GyQy7KRdMVBFHxy8RyfKZroCP7tDy17WjZYaAeRG2soFXF1ucSMMxTauY8XVkxoyWgNjh5NyBe",
  "key39": "2n3AmbsHXFcTF35s8rT3AqSj1GV3TQqKSsu9qTTww6ZE9ttzZXeHXky4BatBCwjMo61mB7HtZi6TDrfY48fPei4P",
  "key40": "zApv5UhXooNhGxDdAQsndRP2koavPbt33yTDSthTyTP7z88V94BHbrVAzQrMWCqwLqte2SL6cGjG99C5VHvGEAA",
  "key41": "3mMxMvDWJHuiDL91puor3ok78itdE4B51ZCdaYDTc7Vs7wkhVERcC7FEopPigW6CiZrrhf4yyThmMUJsKZxe2us4",
  "key42": "5HKZqR5hFu4XmNBveDiQBgHzT18thmrbt5PAArmk1JnNBz3BB9xbFvBq4AwUivuvLpQHbFc9W6WAQFm5v3UeL3d2",
  "key43": "5dDRZQVGMkZFbap1XteCfAHoHQbEo4gkjPKBYvzijRqinDzZX3wUT9i54nfsbtzEz5BvThdxobrzdGvzWsQyo9hi",
  "key44": "3Mo2CrYmakGPtxjUVob7gr14Zyw6YG8uSJmtD6EoY2khzz7z9sT6BYdJmYRCYiuMKJPM76bdmU2Cx2dqYR5vcmsA"
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
