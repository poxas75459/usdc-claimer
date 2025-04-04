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
    "HKv9ZPrhjAQs1peSvWG3fmSrr64pxn6wkVaJcFruAVWg4Xu7gtxxtna9WSFMuW9mqr9FCM2XYjzxP7wXEw63nrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxgjyE4sBDz9f4AyfCs4bXwxMbcitvcpDGfmcHJqLwAeUhvCFZEBzHC7ukWVD3vJtHkK2ma97zH7mvwLJWXcQ4t",
  "key1": "6KhARE9KAL4BMXkTfLTydHZjn8cjuXSsMzWzxrz5Vxo4bzzpXzHPD595Nk8nJJ2cYgr3DFjw7HkHjhVwdQiqfo6",
  "key2": "5xe8iqrsvLCqiPsiXrmViXRoLYTo3Pyz4SfCBoz1SVJqaZQ5anCpRuzMsWi9ky2ksf6m8qgYgZwGzBQWus3UAS6S",
  "key3": "4WpeHSXUtMNA8bWrL5S4EuM1r4kbbEbDJLwbJRVieD4YZqdtc1ZuYfSmtFD9vRh8RKX7asMRAmBYhe7aWsgeNuSW",
  "key4": "4xPHVts3QjBMK9fbAUiXyu79tmxBrz4p45SwFdfiVgcD7pDDRnrvoqsM12b5UmYm6bpQBcQJh3QRfn7HPRRSRC79",
  "key5": "2WL2qtRnvghT1sQTev64LFXR9fHiNNJMZkmjhQbdFU7tG8M7g3xE8x5WWq56mizg5dCqaXjBFbpJq44uymc66guq",
  "key6": "21rVfB3nCuUfFykWPMYLKK87aLCm3jscXapjgAmFRqVEgECQTPrzgchFKogE2zEVhdmZq4wMcfo1BXxTVvU7uXQ9",
  "key7": "2iuCdUm4ju3erRmRN6MS1xG827Y6pxEoAEuZpBbrhWKAJ9PriTR2k2VhiDYtzfs8sAMjm6GXmPLfpg5T2A1iPHQo",
  "key8": "2V7FzPUguda7o3xAnkKeArtigykshdqFWDA7EG3be9KkFRwBuForgXU1Lo8owhhZDmBUi1vPUP1L15VzUHuKCDbK",
  "key9": "pcssR1RGro4G7sCF5EoA7MqhGiwERiQipr7pCpVhyhM3o5VhiffkkHtSwaWhLxZsH81PHi64YjAvosqDrgLZphc",
  "key10": "beJmBMCdP8bSrfVuuDtqgmLCu4T6XZUVHe3hEPwXGqrkyg4dMAY9dM91qxpgaoce9dXNGtgEewV2DySmGPmHAgL",
  "key11": "7EJKJGtvKQQ2wjiMoxDNqE1VTJnsNJSZ4gFXDJoPVDhBxrJaZwtSoNzesA8Bub2ri2dsNswgyjGZbkzvb4UtF5E",
  "key12": "3CCb69vFsfqW5FsF5MurR8Xctvb9ktKpG1kG4c5vLoi6JNQpSdqTSkXpw9D38YCN1mN9Bz3pdp5tC7yZ9kC9sTPA",
  "key13": "m3xyWPKPsMaK52XN7Jsijok561YnW7LU53E9VT68wv7VHvkR3sCF8FTDd3HSbugpKxmGK8cn85aDZyrez24ttyH",
  "key14": "48SeTRU4wYtavarwnmCn6joKrxNigg5fps6eczHKd3CvdtjeB3dzUJaigV2FNUoFSZrKxoeKN67zSoKMpKBtQLJh",
  "key15": "42sapTTSKv6mpRmyhfjV34CmuunzWMgvuUshdxZiHSgW5V2aiuHEHqh9wEyLNdtMdLu2vf1735zrcSRspuqBVsPU",
  "key16": "236iGYGgMF6yrwCdjJTjKbX2QB6BDnL83Bw9NCFGtVjuu5TPJwuUa2qrRTHkDhbfS3ba3XLXvYhufgTRDqUSmXqi",
  "key17": "5N6HPNxPi7N8JQRD2ymNWPqaAxiSYaRybPYzTAXvfpZBwseRHCCtA3rBUy8SQxTutjEqi5CaGvBJL51hHvPiCDXq",
  "key18": "MraSweLBRTkMc3FxvEWUAPH741Cv7DBHdjaMUXdMGrj5n5ryJtLeLohFZkU2PwDnNzZ34AnKTbtD4h4EsHH8yrh",
  "key19": "4U2Ym7CntZeCNKmuimA21ud2ZWR3EUkYGcSAjZn2KVs685Vq4kYje6ni9zDf5YSSqnwHjwaoeFf8Y6Rw4XutYVNp",
  "key20": "3pwCFsmsqKZFdNSLY8dyvm9QG23cQAKvyz7R9a2hRQgsp8V8jvtqVcXhUY8ivGei1FrCoMgfVznLmbpJQxdaSZtg",
  "key21": "3YaSFHmp8f6upDN9TcJhkimBeUX1pDcAvD8QSukPcX8vL1ApxviGWFQeYL3DeUM2sQyUn3ngjvxisdQVyzwTNWvW",
  "key22": "5oenmd4Yk1HiyD5yiKnGouiaa6HSFVsJns2TARt9JWphRB2B6cSiC5z5ExXBYQgMVtv1j39yGzH6r8dqtSwGpesC",
  "key23": "5w3ACC9MempH1njECE69iwcMsBn5gsyPXaQmrMHDLT24WXRMKy274tduGe8BbkZH4ptxMvYGUPexNGRoJ5xmLvjw",
  "key24": "41mS7dqq6AxrSPDb2AoQaD3E14RHWGAa584APc29yZVKH1UyJF2ZdoMxSb7bj4P5G998uD8YjeZvQgFm54dpt5g8",
  "key25": "55fE1gJbRn8ghpL2CvtAiNBBasZ6rFWkJkti9nG4ZYxrk71KZCV8M3Zrt86RqYrKs7KhvphqPpJLKEsv3G6iPyeH",
  "key26": "3fGmzXe8BFgxhPCjswSwAAcDoVuXE3VD4TgpYHkWSbTAvsDRZYPLthP61YggsuqqLhRiEkN5B52PXf7K8Jun8S6",
  "key27": "th9kmY43j7w3CfFRz6MpvMeesTCarZZyPShd8uF3x9nQmVu5326PiWRid5s7pzgUeVg8JpZ1a8XtaN2Ep3ccWzu",
  "key28": "46QPTJbXSyFniVSks3nuEQ4zFdAmiVT1Eqxi7Wf4N1W9eVCa4a4eKTBNzWmGAbeQxubaLppeXWXc7DsxmhVL7mVh",
  "key29": "33awkf35YQbKUJNunwDNoRFGBMfuNz2KwtnaFuK2AktsBFLYzVDBx1zr7kfNaPqr7QZuxN8rnp6zDuaJ5BBdpWiy",
  "key30": "5ufSjYF6gYNKwcLjNF4TnGX7Yh6S3eBCH2ymL9rAXCW5CQy49x3iD8XQA7GNQ2LsmFrz9LTdHkzR5mnNYfuLiL5o",
  "key31": "5A51WgG6xj4441GN3YADvSQSTLEwDqL6dvFkL2AuBQuZqxrEEd8YvnLGubFrmVDhUjqLfBP9VQu1gSt4PJdSjBVj",
  "key32": "3A4TTV4cvr2c5XDnz6kGyDBciQVfLqM8KQXddAN94NU2j7dXCDCCYpqGDNpbnaCSiZoKvAyNs4U9k54Sn6yLNpgm",
  "key33": "ko9FeKwJb9CXzRjBXz9YkfTfQwLoy1RuSjJQR3BCq3dgagB5oMw8QN86h72d3PU2wNQ6GH7t9fjVb94gCLTBcoZ"
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
