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
    "3bgKAscJp8QSrSH7FEsnXjiv7sz4Di4kSZ1mxmFLrh6f85cQNTjvMhAcCpsGmtcV8gVvRNjGHwzt9hkebj3Yd8xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CyanXx8hwk6s5FMez2rdW6CBwCwCqYSwEbGRgbnypQ672dZivpgpkhaDjpZVkjK63UwsbrCKSXHJguzs8Sz9vVf",
  "key1": "4rWJXwjWyYAsB8XVu883Mo1GxfHyLUNu4n2oRx9Z6DcZgJ3fNR7E3DFvs5TMFVdxwvAwrAj429yeorEYuzNJeohW",
  "key2": "4JMJM97wxp5aKGzuivmgRYFQmTBGiK9Ko2uZVVgjybkf7xbNF41mGu6rLuF3kLjkLpBL9k83Lp9fxJ1yVT8UQ2Xg",
  "key3": "4mfyAmqSqGNmazo3kD3YF8KjJgvAiXaf1Z5S2wuVs8qrT6xQDwzSeqcoHfMNKxHEqnGFtGubmumv5pupxsVTUunE",
  "key4": "2sLRNEKtq6rvjgCKNw5rzgUPsjHgWHXLKa4oMvzR61tUSfTj1iBEBS2KW5hLpYFWgCbuagfVVHeLtigbmGm928jW",
  "key5": "2eTFd2WbtVrEmH2gQFZfkpGNezqd2DdvkexZMHorE3VXrvFdH1asnZUwrfZhFvpHsant5tZmtorhBu5W6DpLUSqe",
  "key6": "4KuF7VnYTLbuxymkYNt7Vi4E7wRWdiBJgfcB22EFZyJFjhKPAQChFNZrfTzbvUEsPB7HY2BQrGSrfrtESKBP5ymA",
  "key7": "537kXjynYJDXjJ7NjjRuUzCS1bWq1ihSaYLzZw8D9BuGTaFZavpRDEhAMbPtvNZdtwiCei8VjwsexZ5nPULh7frb",
  "key8": "EVyeTeKxHq8VAgTom8nHbJU8xgwvgr1RsobQGhvaZWsUvtTJGMkCUUt78qnPuSM1bcrDirPrvqJiDtEetrZV8YS",
  "key9": "3f2AYzysu6ANNuTrkvAbLVtxdh1jF5FoM9Ckv1CJnQjHXtThRNCw8iS9VMdVVkDur3Sd6Kbjj7oiNoRefaczdyGS",
  "key10": "3Ps5cJi17z16NHLQtVjZXE2dFuNvFWin1QLSdQmQdZsp247SJ4PrnPzjYXUi7kDw2zgWtaxnW6RCR3cABeDbrPrr",
  "key11": "gRJFxmAhXhePuSnNv9BUj7rnnZG2THn6GDZEcjxCZgtpp1wb3mFDRJqkQrDqKZFA1o7SszkgH53CST47SujWA2u",
  "key12": "5J2Av5B9qFNS7gXRxnuEKw4tNuM4MKTnHKh7pC8iWZ6euZPAiX1SE7iFrDZ2EqsF4YBjeFtzHxHim9ggK2yXyqGn",
  "key13": "o3WFjdBX3kfTuKaSwJq3sw1caKDmyKJa6xVDhxV82ZBH22pza2VRitwD3HQE24S8x26FsAMTxGgN4mxQ5fnNZkg",
  "key14": "3zEuXCdvup1m1SdniR4mH7L1woojjCkkUwhXsKoGmmgR6eDNm7LVth23eX79fraCyCC4x2F2KBqFxsB2DbWfuBT4",
  "key15": "5Z7FjXN4nAyCxQ9Lut585wbWDufDxYdytiA7SMYy5vgKSUUiquF4YwyWqpYhcwQQTaDWAUTpkWfqsMUNY5yEpug8",
  "key16": "4UZJdeUdgLt45KiEbAWb9bN4VjF8d5nXJHRBAgzg6VUhkYUkLy73yUC5kKr4mgAVbK3Z33bBmCpQGyuCzeXJQ5YU",
  "key17": "UsFU3dtMEf5GBb8UMrMpkGT3wLALLW2NcwkN2TwxQu1FUBoHhSjUgvVPsFA8JHTZfLCAshSHrsyAnHmaaZbXguv",
  "key18": "3cDRRveC2XK9yfUUC7CDE8C5gPeStRaruB3buS8yAau7Wd6n8roHoKqidLdt8Jd4abH4obrkcGw85PUSTg6o9jkW",
  "key19": "49pqCMhCZtsxceppFbNgaZdUSpzijQLKvt88mbiTJR72ouaqfiuo7D23mL5oZEvGKHMeaXxdrWMz1fKBZgdziDAF",
  "key20": "5xzGzV4qmnopjPWqXo8MC2eZyK1viBNNyGdaaARrcnV3ZHQ6JTGGfcK1N9y1MuidSX1b7fp1GwVEdcu4mgg4ky9U",
  "key21": "2uni9nGKEQ6VqsoKDTuM71uLr2rEELh9qBqDhd4seTKmcztpmZjt1rZLBjzeY1nfmKaooyAK7NuPsDKiMcp78v7z",
  "key22": "5cnZFjMcTwP2UQEMvNkcAXnMNy113qUDrUdWmphaV3ZjtW6vrh3JP5HyLs61mGgu5Xqvb1cgjhGYPw5JpJCDZUsx",
  "key23": "3B7bNJJnKP9dHNWNUWwDnN2yGKXEBPwdJdDZHjxd1BmT9niWshyUcXsX7hgEcMAQxeKcC5t1Zzoexprvy85QFWiM",
  "key24": "3Rnz7jNAgeo2KkZFniBFtEtFLGjjidZoSmTaLs4TW2etc9ST8Z8mnrZpAJEgjfcuWoosWs2JqtrZzWQMjQ1rAJFy",
  "key25": "2ZuPwrymCCpsij4EFetpt1N8KVrySrgom2kJYgK239CcQD9WG4bSeayhrfHUcN5ACkBQMXUa7fZ1dypHdQeiYxsA",
  "key26": "25gPTzKFx2jcXB8ZwJY6sB6eQrvLveQAyCgExAAsBH5oEMiSEsFZZGY4nPh7q1w7f4DpLNN4rhTpfHgdqchZ7KZJ",
  "key27": "4fWJ6FXLRCzNgj2CbA4yjZQioogJ3pmbkyEWsjtZuScwtzepzumnu82YtE5jiML1ek7JB8dgHm8GQqdmxC37zjWG",
  "key28": "4Sp95eBsBjPXu8riLo8XcgDVgb5ZyPKud71psGPrMHvpa1EhkFZ3oHe4ngxpZwaJep3jFyJUbSNZsB6dPMyFPT2m",
  "key29": "3UhwgKRv49CFcXJMtNTfZz98NaqWGTZRKa8JEMzphtEhU594uXvuK6xugvMfkCdRNEM5VPtzGbSTa3Xof8czojFu",
  "key30": "2kFmnscg2s2wptNjVHm2MmN6wA8Qi6KMSkSYh4Qb7oAx4pvbxmAR3Ac6FvX5Q8QXAXQ7RV3Np7R5anANbxggDSbB",
  "key31": "5oJYD34WKXfeDTpJ8DVLfC1311tYJisJZRRziwAdfKgbFGDvtz2rNUNpyULrD7u1HN63tXoqyda6vYMLwZhHicoH",
  "key32": "3LNVu4dniDVDEN68LXU9A4n9LLgjDpeYVApcJ9QqbJZzn2GZgRLTHz5FdR1uBGhxuEy2gbQx9Ha7eGEZSxHiKQfB",
  "key33": "2NchNuyP3qgCXvi1Kr8kWrPSH5QT5ELTjiabxSYVVZZxazmJhjDpQECMtZhAdxx9mBnHosg9EoNcgkWmrwAWnwfN",
  "key34": "c75JwB2YCBqYk2U6NNfabK2jrkJBdjrPWHB3axec4WV7iuzhiBSHpAGnRGnUcn5KA4yurZbuceWbndta28nGHtH",
  "key35": "5zYfhLN1hK7PCZtseTBdh8t2bnbw7KoGknAEFv9cCJd9H35D3uYis66MQ4cXWiViDGfofZGCsYaNd4gp2yptjv1o",
  "key36": "3MS93U3grJVV7nE8gh8asm35jh9YUjNutqDu3ryC41M1WDWU6HwS1HAiYBWSjnFJFXadC7ZFd3oqbdrvdC1QcNZk",
  "key37": "v9JXvfymtm7t1hhBvtBw8H9AEZ9foRNvrenSJs7CE7dKz47hhpoWVbyRDHgtgArPA7EbaqN3gdkWBm9EFVnAEQG",
  "key38": "97f3pxZ3uUgCusrvfHHruGNwszimeo5PjoCdGzGuVMjSDQqEkjvsUCaSq9DVTpzCHGKNui929zcRmfxPN2Cpo7Y",
  "key39": "57EwPcAoRMnujYhEDQKMX64D6zRmUmqBG2QPJhJbbRVgb86oyo5EFmopH5G3PTunBK3m7KdbFA4Ko7GE8GTiuzpe",
  "key40": "2f5L2nbpfST3Y43LmT6iwgZGZxmVpPksJduCW4P95yCejV1vghx4FsSr84vR1X4cVTtGGP4LJytPwzatXAqg7sXr",
  "key41": "3DxAgz4iWMMWC61hTC3VTGqVUzvsd5ttkft1D9RYgQ2KwpsKsjZQRrLjq4cP9PuGq3Qxj8VFbFSXNibC9hA1ydTZ",
  "key42": "5yCTKSXgy3tq8GWrymf6xfq2NwgCj7hiwuSMpiqxJbF8zRpWTVVLeY1JpHo4WspnUYkCpExowaMHqQ5KBNXV4BBr",
  "key43": "gnCFSTr25FyrNbP2EhydmRPUX4mNUTprfTKBh2wjE7E9BF3tUuGTfkfYTxm5NYMNm9owC1v2fbeu2FJSfgD9527",
  "key44": "2ufNNzGuSSNcoXEoCyqxcV9Ca7JrN2tCwUqTPmFicB2P7nmdEVM4PrJSLW2ZmNZEmWg3AtgpPkMG24zrVGmYRX9i",
  "key45": "QyQBsNuPpgZYpvE5Bx9QQKnd8xMofMTXZGz77vueCfpqwK7TYd5nUo4e5cjgY4xagX2NKwxvycfkCmovsDMhymb",
  "key46": "35UwtPtbXyfQj8RJwqHpEPxUZVg6FU3DefnQoPwRWPubo1NueT1G5gjVpJTw2WCVPzmwCDnbHeJfBZzL2y1aV6Wx"
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
