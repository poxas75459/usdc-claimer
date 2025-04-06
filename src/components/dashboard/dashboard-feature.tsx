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
    "29FunmXFXfyoZxdm3LC5s6uA1F7aoPNmdyVcekc5NHNHaD3MsFUZe68sEKZGju9AwUS5bXeHRbANDUnEaedkKHi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePsNaMmPHnUuBN8W9Aai4tNPKq4meuxLVabzSYL5wAAffrc9RJU6b3MNtKUEXNudfxQ5eujrQLEjtSvMAc4a6ES",
  "key1": "4fmC3KjUCuoSXtVHNFH2S17vHiAtgvMzmiBMSCfdDT1RE5jZCFYDiAW7T64yH7vvUd85XbhM8o7kyLGr6ZYrYZsF",
  "key2": "2rciN1mtgqcNowDfwE7WLX6c5Yh1taMocC3GVuqiuM2X9LQAyAbk4py76m8Dq7noXMHhSJFj6jdpsFj63uL2yh3A",
  "key3": "kRuPMm8f1Nfkct853Kvrr7HfBaDUzHGMAznB4p4gJPooim35nGwNR6f2KjGA2jCG78191YaonRb3BALsojJQqnq",
  "key4": "5uSpGKwai1Hn7Nh3HKainci3n2FLHjudNKXa5nzCPNkiAFVKPwiE9YH2ieEG63eKMPWfMWafoGCe2BfF95A7FLrd",
  "key5": "52VNN9EVE56DCKwbU7BkHwbAsed9zKGuQGpcEcqcCFnABRtsm2XXNZLyzeiWTukgqmjUWKhTXr3etVpj1yMYs91a",
  "key6": "5evRdim925Swngb27SbmANAnyRdvhBERoBXnCsvB1YVmMysxbgnFb6fFS3dC8T3sfZ7XVsD83U1pHpcDc6Cr9cy1",
  "key7": "3pHDJ3be7g4ChynymbajuU5Ani14MPuDW3WDFnR4eA3198zdrNZYosLKxFgKRne49XzQXpUFytgWsWUy1pcMRngt",
  "key8": "4TTbsBt1RFB1rcr2NFTMD1rPcWEW89yg42Kn3gsyngyuXWGBXpiu2JPEECHWACy7j3QRPE7R8UV1reqagxteaw6Q",
  "key9": "59Aiuwm7KZE1ryZsbvdqYB8Ht1aSEUsYiviofeXf1VTLSKpUDtmdUpz2BMwo6Ly6WbEqfbTVB2q2bk1DiHDPWFAa",
  "key10": "2jHFdBSUsNhJAe4MxkEV7nzEQCQFvVu2aY8MYRct7XoE771J37gsDwTFj8CwbmbNhiUi13vRYV9bJiTerbU3XArr",
  "key11": "SzSX4NiaxxabXbDxs3xoQXaFTsbNajPvQYbdiw7iBYx4V6hFvxh2vSMB5x6aWLUdbTGJnUYbGJCPNbvR6Kk5LsB",
  "key12": "3nJ755txda4gmt4kUpGJu5AqqWbCsms4KBtAnn6hUTo7KEb5CQWCG6jRPj3ne6baDsjw7rAFvv1ForUw6ZPDP8XE",
  "key13": "4o7Zvn8RHdVQ89Zba2c3ckMaYYEdrPv2oZkacE6hAx79ZSkm57Am5BAqqSgvb8H3Ec2uoSFWBRqBG1ZJYchLG8p1",
  "key14": "H4scpgHV1mr5sLQLpFgy3oxfW3CJ4BoiMXqVGkZ8NUcckfm7AcHKspMztBcibUHAdH3NWcRGpHAzKjHHJ5Q1LiK",
  "key15": "5MmLVPbh71XuAJwtyDfHUgFC7Ych2tubjFEsmf9KK4yFJHRpHKXWmbDyb7cwBiBDQa7HBf1GTcW6wmGwK52E2AEF",
  "key16": "2Jz5yXyjX4ym7qAgCp5qD33sGWN3bpRCzne1Vi1SR5qzAonz7rxudSyZ1XaADCWqZWPYvMqyyir28aHUUJq8FyuX",
  "key17": "4e4w8qs5wFy2SVtWdqTayPudGCadG2erUd2xMKmjAoHVjoLFZQdgKcpspu6Z8sPL8YoVoHkY5fcD7UjekYNtD9tm",
  "key18": "4kKssRzGJmwkrNNF5TNbQ8WR12XDGLPC2tCporRjbx44QGtJc9dSMKKzDz33Loe7GZuZpFUsppNVtJRwsG74ni1k",
  "key19": "4yqDurfix3wb9AcPHe8aEkpnTex7DxF4BUoaH4hhcsYzNoghkce37bEydkyug3bhvpVyLU2xo37v9Vz7ZCAbXvVe",
  "key20": "4WT72ZHAaJkwWwwPcKoM4J3VqKVuHGq4FtE65Agiy9GyAwDgqDy56NCDFiAMZ57Q3vZZfBcaAiD3o64y1AxDHfCg",
  "key21": "4LBakJVkWrSxPqhPwA5Ddyj8kwY6SjtHj1ccKubXmmAsxgp6Cdpw41YhMkc6qEZjavgY8oHYHER794xTwwg5T3XW",
  "key22": "3HoG9HYfG2Xe3MPZZFfw4m95uubeubutkT2hMtJtCV5eWBCBM6uzPWHxD5ATcMA576AaGBKcHU6KA9g9BJ5a14pm",
  "key23": "2h5bZdanmeE9QN3YFR3aSFyUj3PJctB7e8WJDHRhKmLkfWf2VwZfeGGgEiSUsNkmktzf4ZDWhdj8wUzAjaVcXAZF",
  "key24": "3reUg7Vu3aspJs6gkfETKtvZpK6nkzGsEG531HQHSrBtUsifB9jPmMHaxgvE1mmBQPsr3mUNjWZ9Tut1SUBEVo3d",
  "key25": "3VvKe3yiotyGLbZyUSndEydXvAMpvDK9xXG8qw2sSdeZMoJqaFwEo4C5iNMTJ2MPcEPKRncemq2Un24agBYkgDcC",
  "key26": "34JCRw9s5qB8jrXGXjGDP3t6b86VeUSNTY1XecSfG4eaFjNd284V62jbcWdPM6D2J5LoaL3szhiqh1u1buKqcfqb",
  "key27": "648CgvXUETGERR4CGfE62sywiPGVokaUyR2tktFmnnm6Zo6Hs9m7oYUbc47McsS25ywWRDEHqHpJFDdYXntdAgEA",
  "key28": "469iNNWQDn1TtjRHDjW3R95tHji4jvujsmC1UHbiXNvdh4GGUxkjGKGrShf191gCuaoXLHrYeRaxnijJrhuWYm6v",
  "key29": "5PySUs3yFbSi2rN4gdPwo2Dyp4JQhxt28WT9t2e2wrQrG5Vs4wHGPh7psinLJt5QoaYiMjZYhULL5L1ZDaLp3DzL",
  "key30": "3WPVxFWUdLUGvCzMUTJph9kpSXsrAJjjrugrofk6Tt8wYDEXHXCj8oewDy2jQzexiZuPWYREXp2xpRDRStgUSHwR",
  "key31": "5xrbehhCiB8eqTiWhxkpri5u9z9vYUHE2Y4QiLPB3VuGrUfhQKySps3u2t3fEizggawXtpQoUH5BwuxjJC672Wwx",
  "key32": "4MrqZqf8QYQTaArqHWyu9CZFY75NdB8X5cyivoJGLECv38GWKqUZxfT7dsjwdZyKQbh3Z1GZmuccwYqWj35jkdb9",
  "key33": "3gAvHcQGDa6imiDxDYiAbz8xJbRNoAqoZaWPL3paBPVTzLS15PykHM3ZTHDxUaMzywfgEYatHtBQmgcAgoqYwvU1",
  "key34": "jkaZaUwzzHfBoMz4w53h6JpsA5SmL37ZEP4KXRY9g4wjq7Xnenyth38LwUt4wMXmULPeR2pHFbjZ1iai2D1gB78",
  "key35": "58ktBbb77ZgzGWxnMJRMhjBAWsP2sWP6J8SGQmWEBBJDGFZ3Hf46XMkwW3vnRNhUQpn6PYUHvkq2oHPSWQkq2pKJ",
  "key36": "k9eHfHf1iLEX8Pk82YsjdubADfQeXwanNGXRFnVcTD8QKXNYzDqKFnzUSr1AAXkDLZAXFSXH4XgqUMohs1hnHd9",
  "key37": "5mFmkZxuaG5hP95CmVyvQVitxrrm3gLVpT7NwBS5uPmCFReKyPpkJdKN99mEou3g13ZKDgP8obwXFdbTiP6FJGfd",
  "key38": "2gUnEhkoKm9GC32mbLh7qYSghsmJHqdtTD6VZPe6URwYKPCtLf9Yc35ddT3xYBhibwQ5Wp3qyjK3ECLCVBxEVSeH",
  "key39": "3PvyRr4NDbz2mpnRCqBzHzFSQtYJPGm9wAzSKyoD5Q9EdD4QDH7xgEAPaWawLCqaXd4SeFfmZbjY39217Npv8JUx",
  "key40": "4mM1BpWjRLweWJxjSF5nZZNVzFsurn5DsWYUbwhLUKq8SPSTStF9RAUpjzL3NsrcSJnFuLUJp3W7rK11aKbUH5xq",
  "key41": "3LLecQ58vHw5Qy3GbPBYH65VBwNxoR8wrL18ismmEfqmM3kZuvZqR88uh9pyXUbdgnU97e4V8BBLu1QP3Zh7GB1X",
  "key42": "5FwD6yQLiyN4NjRFxuetLFFws23oxXBHB1Hi7XkqmgG3fHj2Lavnc2eCgzbZ4sX9CcPf2FLzRn8YLHjjCM1n8LTS",
  "key43": "gq8ij8XbAX1thgEfGpMHoVB6wbA6n2aVKNbeEBNYH2xzYAGDoyNE72geojeiijCJ9bx9AtDpcPdSB5Zp28k4nH2",
  "key44": "5STDdZu2LYre91F2cT2KmTJC3LrpC6HJKrcR9RoQSZQthBfXNnQbAjhmbPXDtXfM1zFiibmsAEEFA3WGqgBFa7vb",
  "key45": "3U3pBJDaNuxYijHxY7Wabs1fB8VvVSYAoybJ53ZtBuVaJGNfxKVq2v8ZdCgC2rYaAb5FUihDHagc5Epkq6ATE3zM",
  "key46": "37Nzd2eRzfj2P3P1F3VnTqRo3P8r9Q8BW5mJZRDBkmW9D8p4xsrwkzzbqeEAiWbb9jgkU3fbjY1syYjP2ZAd2KRW",
  "key47": "4Jhmi9J2SVT1ryqKhtv8k36PAgX15BH79cPCXEN7oYk4XmkbWbRmwdyUg3hzcRKzoPGfZtLdEMPQTJLTr1jubMDJ",
  "key48": "3mB2mBvEsRMHC49CDAmKiAyi18euG8KnvVqJ3X9mvZFUSHFJBCCguqbNeSTNvh5WmgmNTkfRvTPsSXTtTiazV2Ln",
  "key49": "4DXtf8S4d8616sNZzyoJUMLCDZ4FKL1jchGV6naW4gqFfQWeJLP6YRnxsgdS7Z96Kd4wXpJ1jEXLj6xAhRSUUBwY"
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
