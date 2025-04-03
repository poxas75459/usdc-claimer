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
    "5o6Avr6ZwzBSeaXTLg3SV9pRU4U8gf2Hfswzxp2hn7ywxXTKz6JNEDSP2vup1aFugsKzSR8ibnUFCsJqQiG86JHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FjatbZrYpSK1Pbkc3Awe32WXA3pUhGnkKdy41uPrponi1LZtJ8VxuhEHF8NHC2gmEeQyaH39HwNbfarHX3DyoGF",
  "key1": "3YHV2xhdVeDedTZewPfGMwrnWXa3bGDQyGsDP5fHdLSuf3fuNy2q4X5z7kp1teUDN4avqd59BaRcfJH3uWHMgKmb",
  "key2": "4R1nPnFLZFsVmk5M8Y6yJEiG3qPZ6oVj1n1ZXJTBQ95Nx9VxgdG5oYFYRHHesvhSfv3zqQ4X7ucLYHDEnXg3xxJk",
  "key3": "3BjpgxeDUKPyCnHag5eQ1KRiHVTDoLtCPmKGDphKuAcLY1Cuv4pK58rKZHZcJEusssKkMB5EFAr7ftAewWo7ZTuA",
  "key4": "4KJSELGh5xdRs5ytyCAZnbaXsVnwz2oYvdLtgPii1XUM7Gp3srs2hkdyH8x9PF327U2xo4yURjHi9LTKj7PVXKg4",
  "key5": "2e1RmvBpeRFahQfv2PpTemdeKW7Y5xaZtFiJCWACx8KNdN4wgXVHuWQpVSCB7LwFiXXHy5pY4SvSkcHftX6Jvgoo",
  "key6": "E9ZVWcX4E72Ma1yUwb9hEr7pGKnescWfG4XV4j78aZmopqSTvZTDnofNePCEPEk9g5TuQHGp7TEcLcC8VwWogFL",
  "key7": "xME6MFwTGDqYuYbx2try9Ntbf77YrSe8UnfL7uBGxTGRaJKFER6FJXZcX6Pc8kSwe9zePTyk7YD7QN8TaD6btms",
  "key8": "4wDxNJKippZUGjCDjJ2vxJU4qZuZMhKFYCDFQ8GdiYKsizZNfDY5FHnVQFs8ddJwfTKKry9JEUfD7oosxiQtKAXz",
  "key9": "MJ7H8GrYQxKufTQNADTQ6reWtG692GdT1xUijF5mRGht9VBenpTbtyaoZGH7Z17nqWMM76sp5vUizu2rgAv8PmE",
  "key10": "3FyJDsmyrDsJBn8G7XRpeRCJvaCHu5tT9uFTw46FgMBgptLxPJjV3QWoeVrphSz3Va6J5svtoxmjUEjPC23afqGV",
  "key11": "67QgMN7Hfpqw9tofuqhXJrYwZQtMidd3NTLDnZoESCPTKgsrgdqroDV6ZrRx9xJQ7Yk9RWZ7rgmNqRKYLDXjsXDK",
  "key12": "3xowKKmzRvcVpMiyg9iTo7swuv5ex4wrpLk31UZyYRXjWpX8Z975r1ctuKgNGBceTERvBWc2cZ3Tr3dVQEVab8Qx",
  "key13": "2A6nUZK5C1jc1m7SJaX7UvVFBAMSRBoZxBxovSYpHB5Rc1JcyKmq4HDVkNQf9tKGT11H9oo2hGKdqCfmdF2LXddt",
  "key14": "5ZCD7C6jHwrVcSS2Yoyr7VdAjM3pnLPCBYQ6Yna6iduEa4KHFYSazUkhEDX63iuMfExAEiyvJ37GzqLBhtg46PEB",
  "key15": "31X37FsGLs7CDQRuvfybQjJaM7LjvTGzxitzyNZWZeDzoTh1jW9WqReeT43d7fT6cRhsgakxsXw8SoNc62oQr9tz",
  "key16": "3pZVaJgQCsM6He8zzL5Vis1yy7Pp6m41jgVka8arrgfHF7knKTvdPK7h2tfQTcyi2AkChd5HQ4gL9BjjwxA9a1zo",
  "key17": "2ngRMCtBemqM7Ap7WCrHA49JmjJfoFaoRrp8SnhnCYv64eXyvwXgpJfoMwr7uyRD7Bvns7Yqs576F4NYUnu6nb2k",
  "key18": "5eW9a337sCJpijxy6BbGUdrMCPrTmCwEt3YgP7bwnE4ByiqMQwiozhvKdqPNftKZYV6YX65kBS2TsjQNwSWhxive",
  "key19": "3Z7xQA69SFC22wx2fy8jBttrwf8RPhzFEcyTump6e7aEzjrGqBvv2tZStcLyutb1RZcgS8jZdYiuqrLUv6qPVGDm",
  "key20": "63o1d3xT1CQToUCjBrQYpaDnwrqdiK7AXzzXDv5kD16jCq8JCE9qcftemEyU4nEwxMsuFfKqfgG4msEqdV6p5XLV",
  "key21": "5UzMTTMBCN47XuYtexRcRtymNg47UyP9YHaajrrgMwoBHyGtCUwEJgCJaVNVAokqAtnNojzb9n4gM7r2T4ZHt8EK",
  "key22": "4cpynoARUr4aqXyEwWvdBvgmeWDzrQ68NcCq2MxWcwrGqmX17SYMQk3GBQHWHLG2ZfJ99md7VH5r9EGheVgMm7wz",
  "key23": "4UFHcALsAPHYBraqSWftTon4vMX5fUZxco12F7NnHrvA3aTtGBmgCyXfATAnTZCW79wMEw1JVUjZDsUxJBk4rej",
  "key24": "4aMWmzS6aq1jAmx9vM3oTXgwfoDKkLtBa1Da6vzfBUqK6zGUAZEzFPXXg9ARoERZeATgQ8rMfEgXQqrGgQcbgmRm",
  "key25": "2AuaLPuZCDLPzpbo1284U9eP4f2i37MighJdCWjZEFNgK8dTAt4sRMMrszgSiZKa7hDUSbCQVTSCwyysNira1nsV",
  "key26": "3VpPgjxCrDpoWbbujjrVjhWcqpeL71qhDKMAQYhoDwV1RmLaa1Umhqmq5Ghw76VvDJc5bsPNVF2rcXXJcaTDxtj5",
  "key27": "29JwDJaz4Xd7MJrA52eTx2rLCx4iiug52uT6yq9vLade6NzPa6beajAgF3iDjBectahmdEhnqNR8vDWMDmoqxzYc",
  "key28": "5Z8mqAJDX4ahrExvZ4h58o6ChX9GScxZ9zm9vkWzD6Lw7Ndm1qFbnfmwHj5wgSCRhGaFzhuVeB67PcbpMvm9U3Jc",
  "key29": "4wUpnMjnVCzLGN2rX7QpZXppEsPQxWntLJWB8fv1kS1phMFx3sYBkFhojYA5NJEZPiDyWB2SNuYkoFCQ5SmBYj27",
  "key30": "59bdFKXGoqHSbBM8vPTjzdi8DB8BwZakY3CBF5nFUxZHE87teMj8fGcaMMMpQoDpaSW4t5y3ho2t2giuucKwVyHZ",
  "key31": "452PJQ7WDitRAgkfW2xVwPvk8bk5DKoLtqcDoUY2KzekjYWnnmdc9wNuFxpm1MYXw6oXrYRWkKqPRPBs8XqWy6ih",
  "key32": "wAP3sNL3xcLbfQ6CTXeXsnfFn8cb86VfhGRuKd3v66Ligcdo4N92SLYNswdbXgL7vodW537u9oyivNuv7j4fZXT",
  "key33": "5KEH3VkdeTA3p2cWsjHm8R9juUR4jp5LAURzr1tLiC91gs4GmhwwU8iyrKGRpw9sHRjjwvZsuiP68TpeUBidpZn8",
  "key34": "ERARvncBUG4sGj7avc7Mf2YaHLfa3oBrVc8eLb2Hsz9AabK4oNaZRnmmyqdd9YRwMAMxjq4ETPfXwYVBE7gEYU8",
  "key35": "32wyh1dZdq4jSuLM8Mo2incQaNASnbiS75hqZSKzp1jQbMtvWqXkbHxvCkgiC5YbgoUzSvAaTnDkhgTVcgf592RE",
  "key36": "4yvPopao8BCHJtZrs5mqCp5RUA3FBzXikcn7Ji246tKD7SqghUyF1TnbFKaLSRu72xjHXwpg4jKXc5HaCRqM6AZj",
  "key37": "57aZ8HzuW2ZR9rHx3R4UcPJZXTuPakbPrKdyFVuWnisV5cdTqKDWuAkzESm6tDLrsqYw3uoPTcqiG7xWoos3ry9w",
  "key38": "3pcQDhGQhBhKsCniRv9WZoN4zpDnb1AzGbWLTYfCP2i1qPscu3Pe6MyHMPLm6D2kM7fE2iU9tXtLer4hTEYAKsNm",
  "key39": "26SwTa8XfNCaYhLGa4cDu51onzYysWSiPA4s6Mjxca7Q9gMiuJinnsZ58z4FY8xnVpC26mwK79S1hW9ZkSQXLaBY"
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
