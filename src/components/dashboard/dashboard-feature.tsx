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
    "5d7MibX4ryANxUHAMSQW613JhdWuELftAoFEYuqrbo5GNGpMAkPxAgLtDANB1DeJU5NaLhrn627ZQ3WeGrmrMKFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uG3Z5ADPoNmGQwhk8n4uaPvBxYB5ZfnPXDXPHuTsxgk4QaqPXKZwqLsm6jUrott8JzA55BRco8ZZpyuSi3D5cJE",
  "key1": "21SD984KSXtgsks3TSA1aN28uRa9ENmGKr1SUHvQd79xKv2pMLZvb2QKtwHVxXYNmTfJRwhaekfeQxbfWeBSe6Gs",
  "key2": "59gxdF4Zpv4S9yZjF5ZQNC5RvrYvooMorLFKzRHyo4mn7cmmWRsfyLnQ55CM7y3fztFJYa9HRsWJF5Cmc8P1ZezM",
  "key3": "3CpRHhQ6vcf4tR3oDb6DFRZb8hWAreeT4Ud5RuhmnPeFvjttBmqgJnsjXzihWazAZhLC3EsbuNdNszXZFsaHrwSD",
  "key4": "4M9ek6u8uuMAjkfgYouvVkpfn2sY2gk6TzshdC61T5e2paNYbLZ62MDmCoUEWwU3QMdm2FyxfjYDN9fKRDEUXmnM",
  "key5": "2eVc1FN6D9boxrxB31GAd1hgMavi8hDqASz2f1t1AgrVSR1KqJuQVwbH3oqiM6r5SJeTf1nvVofeXAk2m6V7kQY1",
  "key6": "5QGAVjboYWXfJZ84t2qrtRwmBrtiJtbrajRauYVhGMrSbLG8du1mU4SBK5MxVi9hqSn7nNrttB1BqiTgHxsN1Y7m",
  "key7": "5rcsUz6VzuUaZrhnJsMxSLNkPeMs1fKRWa4agYD34xuxyAqbVY6G6hPVG589xRtUzarTMGjGW8UfWgQL3wPHCNfB",
  "key8": "53vdXJgB9emFhn8SCEQs8YQuvSwrP8Q295VkpGL7RvCMiRUv3h3qVyi8XFqLTatppZGE6SW3Lrj674j3tZW2YKY5",
  "key9": "5Kg2w2VWDzWgqBfQgGwZGThHLaGbodSKSs17w2ZYt1ZjnhhP5M6UDewdwVqfWV3QxMq4Ks8hwJqsvV5gSftYhXZM",
  "key10": "2jGgKmjt1WySz2qYevAFiANKANU2j3et8KWCFdTvJTNiyrgMf3VwZi4C1FP2g2u9tofev75posYvAQ3KPFS1zrBt",
  "key11": "2wcgUrcJgK7T4mDHtaBqXK1YjbwdudFxMp55B6MQyqDPuSkVJXgPPnUHyZFehxNs27W2CfLn9qBADfQqKdxcmXGz",
  "key12": "4tDnY9e6AHNvraYRs5TEtgH9BUEFkiVzRjiV9q2hnKZoTKcMwCavowFyjN82wGi7gLa6teoZoaMwtjyozC1T2E6A",
  "key13": "S8x6Kgb4Becx7gpkuKztksWKZZX5ho6qkksCeEr4JAj4DVQidZToAUActNwBBEthd5jzgwsKWpogC4VpY8sieNX",
  "key14": "4RuaAjMtuigp9Xw4jWzNZRmb4wEKjsG1j4nr1LGef8fUYjv9hbKZY8VnqT4GVftYExePZvzqVnSH4aJsbgBP2a1v",
  "key15": "4Z1TrHhzNvQm6Lg2PSKZ9aGgxWqH3k8uHR1HuYgaptdrj2rnw8jqAwtNfLmBQoxgdgV3geWLBSbWaZiozzErBzLp",
  "key16": "5QuEPQwwFgqTgVbNhuiDGDRGbDih5FMxAkxMS9tqCccMH4nTf2zAXeewR1ZDsZQojc7GB8GdMWEspwnFrzRDAUYP",
  "key17": "3q87ANBLTj44whrez8ig9MVrv2o4mVGAXM8S3HZMDShicvFK6bNUWn8mTNURAmoT9YKJnSaCigbqtzPkS6gb7CJh",
  "key18": "2U5VdTzXAfxCg1tkjBfTGd4jv8vA3zZj9m8WjnZRmoMPNw5rNyQKRgRdSJLVDdobwdDBYn2qqyGEM8nGXPv2CzVQ",
  "key19": "5mtfenLStFsYkh3NS41TqvqunPe1R9TuFchBRRptP58T1X74Leb1tVi6VAxhh6Bgb4v6rghfUnUaFfPi6APMWPd6",
  "key20": "3ggXzccxR81fdgXNBJdBszohHLcn5m3wLGdCDnQkXF4RT5bypNyi3hTrhcy7Nmw7iAtKgS8wPgWCmLfX7CDuuZdo",
  "key21": "82kw8xvDB5yDy7Ny3i1P3Mxg34VfzPtyHpspjcM9KCy6aPVotrfwkVjfuBeAEcoC7WCKrE6pLiJzJJ2efY4ymiu",
  "key22": "55sukyCkDigRExkvKpsSc478T7EVJ6zSf7nwXKM8spyDo4Cbz5otXZrdLCmi1zSSRoMZvRorLfbg2xBPHd4ue6ra",
  "key23": "3FgF8s2h2L6xcjsyWTTEFy5GajfyhCwFDTxhtPu7asnX4RnJrZmfhyvzCSxwwn6ouTkxFLPMtKVXsMzBAHgzqjhW",
  "key24": "fEr6QQGZG5gLe1mpGqZHWDVvkztTqyD2ggytzPNhdmATUaJfCNhDFyU7zNSZmpwyaJBoCKaoGsy49qR8kEi2E3B",
  "key25": "5T1bvJq9GLm6fWc7RcWM6ADj4AQwLqu13AyD42CPDycgYBaiDZ2HwjDMTcm7TQZ1umDQvXDPDeZEH7HrUuneAKdp",
  "key26": "gNX1L5mx4HNdVmZe7S8ydSb9iAgqBA12B4TFDzyxfbqHFFfyq5pMstxLGWU8acXQ5GHHDzwQigoVejoHJcfnHPi",
  "key27": "47MQscnQ7ZP4WYPSZJFrLGcp4ebwQ5Bp81HoH9rjwNxUhNvCucqXnLSRCW9GzkfuZbB52T9zSpgDLLfZ1yxXQVuQ",
  "key28": "3QuJ451Rp5hvzPrmhH1kM7gKcaJMZoiMdaPFSjMgnJSMZcBQ3Rgy171CPdqcB2vpqEgioaAeKiaxiLGZZKDCB3Ta",
  "key29": "5DTZx1fecYdi8fbXwDMtYcx8S1C6GBUYPt4jTtiwocJDu3e6pD51irCwpvWQXqCBWy8gqncDjH4EiysebheerRTr",
  "key30": "3tAdYSUnbNi4uWcsJDd5GZ3qVGbrtwxiyyMSxRmJ4eJ7Ykx75Pj39xTZedgGgJEbF2Fj7jXTHsDHA8Poyn9eKDHF",
  "key31": "4HhkUGoNEmKwQXLAFEVbHbfSxWDb8nhiE7iGG1KX3jgHLajuA4H1W3hBSLCYLxkWnrXcNeCkSCNETa2bafqzd4N7",
  "key32": "FNuskMMaXDF8FZ7gzQf88CVt6mxvhHymWMmRCSAgd5LbSwQSoZyGX58kQsxbCuJ885QxGJ9iCwPAEch9yv8xj27",
  "key33": "3ip7BFSRPctB6Pi1tZq1dTQct8LWHHogzEZt82ygcsXJNQdKDK4yyXLMFUZCoRNeXp6urM89CvVaZbjW5ed6pdbm",
  "key34": "swTVStNXsViaNzjvxMR2axpeJL2UXHmRRCsyM3Ejgk3HNQmqTWiBuA18pUC6LfcHzyU29kLVz97qPD9Hyiy2tE6",
  "key35": "4r9LEW4NfCMDvRi97ikoXm9CkwNCQBufmX2CqqetThWdGYiffRuQkNG6WEWCSPWYuyAdRKTR6o8DxDFQ2nT4GaHs",
  "key36": "2kJDBC4Q44FBSNqZuwGedhpGt5fp8sfY17LGKPVrmmUp8uuiLCnkn5b8j9W668oKrYhMhit7xAyjqCByb4Vy11pu",
  "key37": "4Sqq3pPwrp9ncSkWnm11QNioB4YTtfdUEBLi2ZacAeaM2pcyC8pHTi4gz73gp9kx6pNJibiNDiiwdZVnEp62ErwB",
  "key38": "3kyDU1NHDii3C1KqffYBDsQSRJPc26LN98URi5SsMFhqRaisbxHJxCDM4oaQT7Uf7KTW6ggrp2gTyXX9Q9K5nhzf",
  "key39": "4MF6BxqdVBwgb1f913Qov7LW4L9uxcb9kFVKpG8TKH5y7y5gxftNpoWftSMg72sY1uozHftZrRiwJRDg6y3M9zNQ",
  "key40": "3VGiLGvr46W26GeJDMNkTyfZ488mJy85LnL8NEgTUG6NaJHgtaPgn2epwLvedPMQ2fdrewUFQsWxCfwfamaHhqPG",
  "key41": "4AaMGNWLYNcaKD6Nm6XaRamriGKj4ugrv3e8VTJzH51fHax7zj49pmb3oftoTRuZmjHZzQvYvKKpPoYU81762JHe",
  "key42": "3QtkLiCQHEuaw8heGM7esnkD6sr7ajwcJdCuMQL5DCDmrWyjKXq6tHXt4g5xt1cVRC4ehvQtVAwGjieog8HJku2Y",
  "key43": "2WKhjZ8Szp8BA7B4W1VwZAwp6oa7k89cVc7ESRBHvGybB2Kx1xrNwxZGULterJBAxD7gLGkoHETSp8Tj5jGikdWz",
  "key44": "5r92QeyDdjhtEJrmsGhKwmXhHJNpE6oS6vxVSrENpXp67pPSCRTerDHwCHJC6eq3k98DBPFJWhVdxoiDvTGpEBLR",
  "key45": "U7saTzN6rvuCr9qmuEnPs9EkWMho1SRtmRPjJViXVvXz9YALh8mCHdWJWEQqHpCY6MoqF3TiXPpZc4kK6pzVpHC",
  "key46": "5kKmyA5jnBpU1YFiLBNsGTnJVXiJpsLeMUZFvHGr3HKhKzGpwJsV53Sh8VmcFMGSUVnje9rfvCw9S8c5Vhpj55BE",
  "key47": "3KcfrcmZhzyihaHqJYvyGVzPPn7GwXpZXrNXvzvqdraifWzgqSvot9V1PXDYvFN7Ujvorzc7vqbzaCYzxPbfgLLx"
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
