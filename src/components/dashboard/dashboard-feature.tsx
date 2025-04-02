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
    "2Q9DFRM8BJwCK1yFvvcr1Djgn46PVKJpYjQrjztHADFCcAQGoRpFFoFbKYm4p4kGYHrfB4a3xksg1NfHdfxdnPtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2zEZQNxnLHQmhvh7ruaxkxAcNoWDcVnsfaJEPxHWyAkxtE42HkB26SuhqpTt9HVtAk3cVNQ5ZiuwApagUkm2jn",
  "key1": "25rxJPf4erBguxLiwP8ysd4K1AiyyFPWW1Gd3WkYPwz7ZMXhJiV3tWEj6XSEyQrm8C1hCTm97YsHJjTmDJZyPJvn",
  "key2": "4LPkfWT37KTjEQ6SJpTMe7oACr3p3BifxYcsWy43uYvfRBKyZgKkfqsQLkzXmnnQZ9p6eapvd5G8MJ9ZT8hPJJM8",
  "key3": "63coHfxYnwzYZm6RkQTw6KLZu4ADXnsWK36eXfJfw3jNAm1jBnnUeG4opUiN9JX7uYQZfkYcFPBbbeX1NBMdhoEu",
  "key4": "4PfGt9rF8CZb4VpR5KnpUh1S6q58bqy56kS7o4xttmg8zLtkPfE8d5PFMA3NmDQSiXcKeUYT5iHgCTo7oS19q1VE",
  "key5": "26QqBKdA9FkMDvugfDAKiZquiQthUkiGJ9r2V7npBmB7JwJ8XagQ9ACFThEX7ADWC2wDEuw92VicZshL1DD4vaRS",
  "key6": "36FiuxeVvEgehm6k7oL5Rsoj8CRsWojJLvamP4uJzg83S1sfjKSpfdYpXQGiNLBJMFVydN4Bga1FHK5aFpN84DQy",
  "key7": "5R4S9VHY9okgdinonydAR2mjQUNuNbqzNaysv1gUun4jnEPJ9QNbesWABjDaJQrtjBmR8TawLYExNgU5bZXp5gBe",
  "key8": "8F5euFSEjk9xZYjpADjVqsAxpnRBY9hjQff7nMd7K8WXGaZtLPzpyznyYF8iRSuBbeBn3q9vtCRDzSWcQCgETpK",
  "key9": "4UYTdWEFemGLpfh87mPRx2dCWyUfFnDf19bwLFwfhEnmyCZefHV26P8iBEfV7cp4XVBYinn9JobtwZ8Da4sKiZM9",
  "key10": "416VnaMK51ya4NVDhSBhbkjfafzoXywCR8gzHsk91BgDehavWwod9wc6w2exhgB8A3zm231Lf9d3TP6mradsyz8p",
  "key11": "MA25fQ8nW7GuBLHWDqekU3F5GzDPrAKYifAuafXgABaqU59N4h7MN69YS3savAF99aCULXCNPY58b8tkKBd2VcL",
  "key12": "3ACMht2AFJ22rWCCCCTfoEKuE4ufVF9MrupMvyCNbLvdK1nvQXSjgBQVPWUdt3hyEdtVjckn82aXP4XzHBbwEao8",
  "key13": "4hJavruXZsKYxYVoudiVNcsi5oZxDScdCJ6mzCNorrWrM7xSWgAEc4nNJPQ5kwcHb8aeFBykjWhLJikqXVNzYbv9",
  "key14": "2F4ZFQkx54fvQkMmdHkgNwNZ6Q44QWWZkrv7P1gis4Bu7cFqQ7d1aXkNuiMtJutKvbVnEHw1mx2Sb1C1NiLzBysh",
  "key15": "n9uHLKxCoCgpkTneJJA3jFsyp6AoktUQ5dPLpKaUbZDPirJz3bd7ui1mX87ogm3cTcFsJzkxwtpfpoPvnn6ZdJE",
  "key16": "3jkWMakJtWYXgJQfKJrV1xqbLDpXcd7JUKTEPvrpUc1TReL2DeuuRUTUL7cpBM7MN7zUemBr1mbmRSmw1P2mcer9",
  "key17": "5MM1uA6kYJWxYnV9XiULYrdVqpy9kMdnrg61j3nGfRy3Sa6gLes57XXJYkwQkgFrjcGzcjbqa7VGVAGUDWoKeYRf",
  "key18": "34SXJUsWBPn2mekZtqqcnDwhYGaQdMeSGBqsxfmQynoTZ9GBjf1RuCUwPz6jjPENVczeZaK211htmhrxmpGKCWj5",
  "key19": "3N6cgbjqhb18L6CK7G22dX5rz8zkx2XgbFWqyAWHenAKAcY1yTtVhFSYcy57hw7MY3thSYJ8Q3deSZHaLnWs5hf2",
  "key20": "2WcX43bv7ih8BUktiggzu2qAum5pXXgDaqirWH3L3CzVf37GEwdbJ1TmN8xXMhgu2MkvPN2oorDE84SMrKe23GCx",
  "key21": "5brZoDV5vNK3vqMkFDk82kEMK4pN7bZy7HxWMgEBkjksL4knmkXPt2Akhsoh8db1qAktqrttPxv2LEcsU719gEGW",
  "key22": "2j3SzU9za2VPmgpkFwXY6vUBb77H7GsT7N112fhPgzVUdHGxpJST6ELFvmLXGELG2KR1dsHhpxaV8k4zYxW1HMLK",
  "key23": "3t2KLPmKGTqw4UAmXXfyTUnf5FzjvDEJricuvBjYHzv2VFFHhG94SxrHBMQnH6QmddvzF5Uw4GSZZoAki7NWHmhL",
  "key24": "2u4y6GhqM3XeJdy9dYgL4tzr5hAKLfL5CPSqjp5WiBmBTEDZ2BRJXqGAZrVXcY5aNixAqBhjqSwmnzLg8iVLFpZW",
  "key25": "5WBLB6bEX7RrkUFAwgeqsHabmArg1DsK1ukfGF1Lgb3oRS2tWRAsQAxNhZ7faPiDGwG42P1BUNascjBsmBYuWHR7",
  "key26": "ZeUegHo2yDhmCL9BuNKvka27FSdjR7buKEago3xdrcHET72B7iuwKdC4X6Poim5thEfsYJLrbQ1P4J3zbLchJgQ",
  "key27": "4b1KokLPHnWZXf87nmuJG4hZxuynDKh15fm9JDeUSjKMdNwGZREx1SZGFDzFsAwxziyKx85aZutSV7bAEqJx1R87",
  "key28": "54d6HAQW5xqCFJghd8QJHTWS5ApNBET6wi5Y4p3ZcWCvmHcuVa2AUVjEHmRtcvioJpnwXLwzCyHMhPvfTRwv4k6H",
  "key29": "5eKkNxbpynPsLgsdkGHVbPK6TCn3WLNtwppyzVbZiFoaScKLVPTR4U5mHwhkyiWPCSbWLNjKMh9RzgGNhc37SW41",
  "key30": "3Cxha9kFUPq2b6rzBACd1Rtryz8inJh2y1koHq9jE86WJaGfDqfZqnhkiLok8zNdyUqcU9k9Ww2kpJRHJn6Hwg4a",
  "key31": "5XKHNhcU58UgKFVtENkQhcNo8Q7FQBhoXLrmxGS4FtpA39SssTYBNUk2Y1JgwqguVkkBuxRQduZVcGgZ7ksWPVdf",
  "key32": "MTUL7R5CdwLNVadvZ5WGg41DAj7ZE53ciHs4qh6WRT3yxyPhb1br79zuCTvzwrD9hG46AG2azeMStXRDcjJ5fDs",
  "key33": "4GRUAvsgrSwrUb92cDGuPkhT4Q3mkGZ8XEncsoqaJ6yurJzNb3USkXEmCDvahjwmwbTate3SgBc8R6boTxoVkG61",
  "key34": "58KP7mqwZdzhvGpUr91qGLuMkNYbZfjLJfm5J91h2rGH4HuC44cFmrok9RPh728LbnfHJnzCkU2MNvr8U6cS8y4i",
  "key35": "3yfArJw67DD9K4mk7u5Bm4byucP8b4MjbZT9nGqZZdZVEDW71bcaCfWXaJXZMxQs2Q8HYjBqWeNReGEQXwkUhRRV",
  "key36": "2QK1jwrigDnGSuY5QXSeTnQfJ86eQJzFC8EjWC1YpAUp2U4AdzTz1U6BPwYeG8bGrjdFQtW5n9qm8u9TAEoP3Je5",
  "key37": "2u9xrcvi1va77KV3W22ChpT3LsRN1mdTdkWjtTsPEAuw9V7qXnMFiM9C3rNqR8EXbjjaYSopYAjLiXn9QHy4S1Lf",
  "key38": "4ToFoFHH21D4WDDFc46LYSm1Ls7zEsu5LcntLyiJdFDz2TZWBUFwuLx72HDpU9Nz66xFC5uxUbkWpALaiWtWUWwu",
  "key39": "4RMztSX2YYQYSvLn5bgEPe59jk186oFUSkfHaUa9mg9pZu9h9QvRLmgikQ9zc6MqWknW1AapHM65J8f5kHxj31T8",
  "key40": "4iiZL1UjaUoZGUDC9r5nUY4ZFBE6A3X8MyLeoyE3KG7defgdXrfmAuELsdQ82qr23WXbZm1umQ6WswjSh4wCQiSU",
  "key41": "5aeeKB3Jegmp4FPHEs7Rvcvmx25nxQ7s8u9KzKzzwX3TVg2M3J5xxTNzVZTe9ozWWt8eY8SUfoQE8y1N92hARyoP",
  "key42": "3913cDHWYQWQUP1mFdYdfZKSfGNd1pxB8XrWLKS1cruB8dZtYwgA8M41VrKZY6NCVfYSGdq9KN45oVrN7gm3ZT4q",
  "key43": "5kqELPrjpfZEpbKFQhArsDg22c9jKP93oXrMtjG5iKaN9sSjLNf6EQ4XBrBMdD47YMSR88uMEU1BF6e3Gt7caA97",
  "key44": "SPHU6G2pDnezMjZ7ENox8jQniPEfzJ2kxCeQ7LPu4rmEesEjsQ7zge89AyyJcmvGivP3EV8DqaTyp6V2K5xny8S",
  "key45": "2TXtCUWBBfD6kSod8TFoE2W3TreL7Vrx3a3hkLm1E8GZL1X7LHTmc3Ly882kkGXvWSkfzLgVB6PFbriFkddEGG2s",
  "key46": "vP6zq6X6HksDgvaj5Cb73ehnLAUzVrFBet8wmmsbVs8E5FeKRzz75CJFgiv2zfj2zX94GSJ78FryFe5urqLLsfp",
  "key47": "5ro3Jye8JxPaBsaJUF1mqHA7RFuESGQtn99BEnRyRgpJNbLB3jWWJzb19NNAkqTEnVpaMeJ7Dsyur9a8bdnrjrwg",
  "key48": "ds7MozJSasFZJ6JQn2zcuegqeSFwnwjtKCVVRCUqjYDis9SDMawkfngUxvDVB9yfcr86Guaqqkewy56mF8kotT6",
  "key49": "5ffG74nQTDVwhCzVeUbdox7S2Qy5yXZ5iwougTrJsAaqYHwiLnmjDZsPeGE5qNbsQvpzBQcSCbiGqyKDdhg4pgSo"
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
