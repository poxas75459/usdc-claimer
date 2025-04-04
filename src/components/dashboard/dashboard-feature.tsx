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
    "3CkSp9FbY6kTx79xfYrcx4dePAhFrAyPZBND15ydAZgeSkZL6RrtHnnCBpdfYovwcgNivxcVHMCWNWAHR4NXsmir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wy9aSJSYNMzaup33r8g8tXBKmS7jpm1eNxBGBou723wbqm5bUw4vU5NpK4JatizWC5FAjvT4QNQVKed5tNzsAEZ",
  "key1": "4uRfAXtp8reZPgN5M3Npsw8s2byHs26DLfy37q9rDWdywB8QWJA1kbVjgg2sLsHmSpSRnEgD4scro8DApPUynrKG",
  "key2": "3ZbrHS6AQQaregH78nCjNzisLVbgsntV1cWPX6vL3HCoFxXeJEAqnhELxX2dA2YBevshd33sSNLoGujNX8oiYfh1",
  "key3": "4eBTrn4kWGV1fJDy3UCd8TfhtSEpv7izbThwmUoqMMF79QJfSet73ZSqj4vu9PKVwPZ66G2Tp6Y5Zf4jQuYCv4Z8",
  "key4": "3FitEdW2KZ7Jk8sHkeJJPafDyurN9jVL9Ca8R3XBz1YQak2ixAJ6rnwJusHyoYsUbLNV7STqEkUUfgVMfQSWZCLS",
  "key5": "2cfe5AnHrgPsC6a4LWT4E91BRgVW4g8XfVm4fzdXyidQaQgG7nkoeJ321sgxue2e7737BCmZi6PUWkEiMdSFmLaV",
  "key6": "5FfKxGpJTKQC3oUB8USd6bb3e2b8PRujtv8nD8duaUoVf1hxLDkzcCr6tcR6LJ9iMheqhdVEXiXXaWFqQfG7zNDS",
  "key7": "2SnVkg76vU4wbkbaWUu9crWC5JM5cAMpWHazcXfDt4i4iBAofczy6p5qd6JrGLLPshTGbkTQQoSPnt7TNHHVJ8Pi",
  "key8": "4LcoQJqscBTEwxkUiC7vq7xRyz1e3eT62dUzp5N35qhoUwK9cSvw8swqKUVp49HYpAyvySBbVrAzybGP8qhtrQTa",
  "key9": "4WQRmaviNg7xHyWvYZ7bmetcnSiocLG1rw1MoP9BZ1qvBKbrFvFB4aLxzxn9PsguV9rGfnzk1YJxmSDmmveA3rTo",
  "key10": "YWMH5wCDREueTCoQadsWiC7q2ZUfXhNrcvzwwKcd1ocrkqXZqjUFVRaDGXb728YKW7TS5fvKii1PhLYHrWws991",
  "key11": "cYv81KXp46xkkX4qhqHdL5bwjH7XS1R4romuXwV3K18cGKc7vfxgYt2ZCNo97CE1gopm5YsKd4A9gyMbhch3xq6",
  "key12": "2C2PYWJ1826PWuJFdMZeg2BjtzUAAxGpJxGJJx3PvfyEefihkURFDu4Neies4aopfHwCbqa9tikGzeQTu3eJU5f4",
  "key13": "5EQxbxhri2Xenyus6RQKoZeDAZLBmJQ5pwxHG5y7SnNVL1NnWC493kBhUo6SAKmWBrLcvpPHp3QgECA2FVGUrAGp",
  "key14": "57Daa9AJaFnms2Y2vRa1a7rypLePpekiNx794Ev6LgvJQPazjSEYB79tWrhTC2oF7ubT6fxpF82Sv2QoPy2Km1iq",
  "key15": "4bWYJY32CrmCsi6fCzc1az5qbxzERbbJ23Ys648wqUdhagDNiiyGM4jUuQ936Yc6vDmJyGQHHadAKaUHeWqrMMbS",
  "key16": "64Rjv2pGgPWB1ipHd24wkwFYqNs3TvgxsX1NkFdN3Jp7pVPZ8k5zat3Prm3ZmL1f8v5gSioaE4WTWhuPQ86d5vf",
  "key17": "5QCf4VTefHtjh9PVzZgbki62iDoFS1GfKv43g5VyKLmsx54NyqqjxZ7iBi2ehk9JgRkwvagbRuZQgbkzQXMEGEmV",
  "key18": "2jywvy81Hhp3zxWFvhVzysRd9qqg6vDEXH1xyHASM2vRdFtHW1iej2ZajUv2dSqFfUXztVA2DtYJJGrX6GHZDb2",
  "key19": "5aY3f8zhfqy4sEvufQmt7GHjtBV6RTtmRm3njp6BAuZgxJTcKCnoT9KvFAfFLBMXoF1bpT3arnCij6zGNxLytYPX",
  "key20": "4C36BmCjeFUnVwbLFsFMyLgDDXWvjcqkNkekYcmm6JAKcyuprb6dgyapFMwD7zsMY73JucZAtbAZmsCPzDdArP39",
  "key21": "azitsNvBrs8fipsWKTw4SkPAJgQxuf6eSGn6dU8WCeEeLb3hseCdcwyD4U3WqhrznRiJvjb5YktGM4qTmPr7uzy",
  "key22": "557e2prBfSRQAu9FSnPHhFTuyx6LbztgGDZ9n1XBCBKtMG2FCSw194uJmYZHAktpqCVDn5HsdiJxsJtnpL186vA5",
  "key23": "3gAn2g8AZkLkKD9bBkWRHb32FqSWSCXexTL4T55nTxhLKf59g9rDygYXHZu163f9yd5xbUCn9ZvGyVk8tbC2K2d9",
  "key24": "5VbjtY2XdXkjAfJicFBiUv8e4kNDBsm4FrLjuxwdV9kyo5uQZasRttRC2Qf7xQAmcVMoVaUXFb4pnPDc2o3LYafJ",
  "key25": "Zj7687monEBg565E19XPFkjNRGbRVzSJzPPESU4oiqinXzWTyPKK8a1kCR46NU5MQJPejRnefgr4B4Pgeun4KB6",
  "key26": "5hi4e2r4gFvEN81r2YxuvtRrWDqVzQ4Vhz54cbNB75o8CeHos2B2UdMFJUsF1kUbXtFtcG19f7Pg2qdP7qJW43GW",
  "key27": "5pcJwW8nZHt9Mj6pLxeyXkT1XrinRXVia2PNEuU5nApcwfvuXDFro3sWnoj1kviWr2RfSwR3jgEB89gUFQ6fJ4aZ",
  "key28": "5ENJvawDfFAyRaBRCH2B8H2cyDhHqkNYX1PFayrvZ91GjpWU89ZaCHhg62f5fupi1LzNW9aLtH9rRyuvfrtUZeyd",
  "key29": "2yh6KuAnxFu1mqFyQR91zcR46X9w9TwZ21n47WsheBdwcTjf6L5z195BKWdA5FsTfJh5Bw1iPSFwrRtjejd66Yaq",
  "key30": "2MNpzP6VL6fBiZF1SwEwedSokwfvzs8oxbvxahVVV1V6QpRfonZXGRVEUGdcW9XKJbzZ4BeYKo22qqdqJxFNWz4Q",
  "key31": "4NXfWhGVDYmMbC22Sv4BA6Rem3EWApM6kQLTsCEXjPj8xhQZqje3HHqVK7UUVFrtgMb2gnvWzWtXRyqJW6q47yyw",
  "key32": "436kWsi6NB7kzQTUQWrm5DUsY98xD8vQDjvEz18zVX9n8cQYYhyqaNVFKD52W1X2AaZxnWrZyxfSsTAcTz3mSit4",
  "key33": "4ZcwbeWCVmd1TK49NHYzd3tpdBgDLKN1wSoue8FbcttTEE2PcKWMvqjT7JZkCahcYVAfskM7xdYxbgHvf3qVrGP3",
  "key34": "3qCyvtHuuFJu4xbyCfExJbsd6XDCxe1UKGUscwaHhHYXrvB5xnG1iS68sSDML1FKigRRQYGc278fGGePH49hrxyK",
  "key35": "3tBgBxb46T6bm9SLu4sk1TUmsRSdfk5ZW1k2KDzKiU8NTRwfrhjxJx9ciYunMMAcThNUnr3UkSdG9CYmd3DpuWLX",
  "key36": "Vo5oeQ5rwzMMC7yHVanh8r7kiMY4v5h3wo5NYP39Bc2x7KMv6BrQPxay5uLwF8EpE6mHGrULpMoBrQrvYpznsex",
  "key37": "3UysMksRz4oxkCLwnztR8QAaauDx1dfdzanYiSZpvJd9mtahxXEVS3E2wnDsrtAnbzsGst8cRtASTvvFhUqbWGLF",
  "key38": "78FgeJPs9ePCZbhzRtVVL3fz4pE5AuerUehJGftmHESjoPNwhtXzixvtwjdCkPbvdzB9AbXx1aGFSUvUXbt8p3t",
  "key39": "5bWg8av7jXvuSbQDkwGyagH1RLjfC3E7V1WDFiZGffnZqxitHixpviiCnKyQtvREb9Jkxv2TPTmh5ZNdFMBPRKEt",
  "key40": "4siE7gLyVVJbaX3hioCXYWiiF4bqSymJa1Jnk19B541JfdMA4ebkkBaARouDRX5Kj6FQPJ7GRjCtiDPmLMQQBnMy",
  "key41": "4ZQW5C2JF5zxh7XKpP7fjysTY7SbrRo6pUyfPdGFkxSwaxe7G3XFk9jkXMPj742jBYwjGP6us4aeHkGjiafbPrtS",
  "key42": "31N3dXgyr383KWUMANio21Mk3wuWxUhhbCrmo2qfHZkQYES3vYf5ZdBxARtowX46HhD4ggb4gCGhjUrro1DBiPQE",
  "key43": "3258FQAbu1zy4QWdyxeCAHtZtVfPQzGNWForuAoEXozemq4MWVmUoSDpHn5uTNRSRNjqHaEku2gatnzSFtixACMH",
  "key44": "5zgxUe92huWZLWzTxMq5Ne1G6XR4ZW5Z5ibfAPhUeCiTEwW4M3Fr3vMSRszXV2mXkXi8t1XfMBBuwdpxhjee7M2o",
  "key45": "3S2KSGNFURf9YTch1ak6z5vh1drs1U4JizKfrWCsk3yvSYuUb1rioKw88wPErjMUtCi2WVqhA7Ep45PSLUaeixN5",
  "key46": "5aEG7Zeeq1TihsnWjMhGGHg2zYQ7xPLQqQF72beYEPoacjSzUgo8M2G2gzmQuqYRijAV99rZYCe3m3ertN8DY9GH"
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
