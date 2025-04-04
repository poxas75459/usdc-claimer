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
    "NYWgBjnvTK7TtU4XT7wzxfYUnwnRLKnsRpYH5qk1UWcvW24Kwd2SPtHujQsf8BpbyStAaUEU5o7CTgbGANX25kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwU73MxBAFrE7uNF2khcb4SnBoZ3A6Xw8KtQJ69u84ZSK8iEnVjjXCUqF1rmNZ1Sy9UxPXM3PmHxznj1JAYFa4r",
  "key1": "3YuoDMkv9x9jwunCdGo48etDWVZJLCmVE7dqzd4FEnfy5dLcAgPk16SXRvheHg16dEjwnMX39VE1y4eexGxD2Lc7",
  "key2": "46TuR15Q3yokmYug6TpyP8PtdxYUX6FV68zLaBTi2eCsphimsdBvSxG39Ugby3AtEbiP48J7DoBaKQ5ffaqJkopS",
  "key3": "2iYo7d4eyEMiA3YcK5hXNqWNKiQjqb793g7Bo5KW94JwY8wxMsxRhRS72szN4BQGC81Ftpz8UaxsmE4MokmDCvg5",
  "key4": "2Bqhy2bmLGBb4AfTJ1fFJoMp6fWBucc76a5vhZim9SCz5GkiUX26rfe1r4TgdBvxqUVdD2nR8QXE45qD3TLBZH5s",
  "key5": "L2z8uVCd69C5kCz4e2dm6h42B8oWDgCrXXwVDRsDvJJ4b1np9tprp9Pjqz7AoBwPD6V63zk8qwDKYH7aedkHTuk",
  "key6": "2F1UTYXoJHrjv9pcnjKn3bVdm51uHBnXgypYmyeAhiFPmtoea9AVnsb4boQ2EESfDmFHkHavXiUN51msQuHkBKMw",
  "key7": "3gngR5M6t5uHXgHvx9XmDqSYpw4L887GUDaEsGXRvRFmvwHBCrqbS8yhW57fku8TVHnCaWNcr1ujMizfSmJCZ988",
  "key8": "5vZGWZk2iyjpK5Ge5c39wfZuv2N9wQMS2ULEZurJjrff8fZZm3Rteer2ZFgeUSFdZkYkqjFVj5me3re1qz4dWcqH",
  "key9": "5wUsRiXEgXuWcPHpdHKY69cBZBMEaFAw8dJwXLYTSkHmZSEWf6RijJgeHu1mpMPBu5ZKH9NXg8TKhHJ2Q8u26gdt",
  "key10": "4tLsDKoA7xMDHpKfHCuzcWSH6ENaRzTmDRhG9DgmAtEaqtLF4AZkGdqBEZ2dPsDv7pBBtCtZVgEG69dvYpCXkSAA",
  "key11": "5F2G3B9fLcLkFB2xudXzNtYE5vmCwodAj7YcQJkmPbvrKNM4aA7JYg7ZpD5Zm8VvJQfPYpmQ2YExDhwyuLeiuvcw",
  "key12": "5w9d23yZsiFbpExgmVpxEjgFYXki6fd9Q1VHU2vRLJ3g3vucCtbDyiSg2yfzigb9afXFWSWjFPiD5KeRUCjcR4kU",
  "key13": "SCHuxCqXXZDEMqnRwvf1kMZuu2yVN1eZ5uEEpnVCAnmDmHjQEk3NSQ6AUWZeNpV8FZ4M6uE4nH8uYy1PGpn8F3p",
  "key14": "wEFJegGZuDcDhqaXu7zn6LB7ToksqNi6wDpJ1WuukZnUhDwhDCu6K7QLVBMKSJMFJVjzjMp1UQErAToGvz5JmZm",
  "key15": "3xEkkKx7t2ua4ZNi8K4dEjYxeHz3R9QShvCGDRkC9fCzPyUm6HtbW6yZo5oG78XQLznd3aXL6soRwHHwNYkCiKHP",
  "key16": "2TUUNqEnkjHSuSLb8fCiexQ8SRd6fL1CWZZyJkwjui8eGDFaLNzp47Eh8zvbPRgse6UxEuTC55cztRAJPmd273nz",
  "key17": "2PrJMvCmPKvUPKVupg1DKLYU7tcKjSTQKih83P5DvAFewaWxQQQCYC2wrzKU6uEGxvzDcnPi1gTupaX2itL7KNv4",
  "key18": "sAxKbijVjtRzmdgbinzVWhmtkZVuFY2iFfDCVBu1i13c46fGyPCZi6o41dfJdFz7Tn73qXi3TpYZonECJ4tfztu",
  "key19": "pxJS7EoVuQNFK7VCXueNaebLKeaa2Vd4ZiqHUpr7m7M2XtZeZpkUQuiatNJCpNydjis2DNEU29e2TwHao5jT3Jq",
  "key20": "2hjRCacgBnJknGfGCCjPQ3d1b1zw3S5Kfv5GRoWXfma2T7cjSoE1HmxdboDT3ELhFr6H9HW6bP3kJNEoS1tH4JeH",
  "key21": "5KgLZ3K1nwb4yzf52Vqob7W1e2cFP9jnCnin721e1C7rCP1WqMDFYjDJjt9kSGkKHfdzoQvq1wZfgUVuoTzMEG1u",
  "key22": "5FP9Ex2X1TXiP7WKZkcPvvk83pcu2m9UAocaz75cBZg7neEgGBfwQHhTVJfyk28zdj72hmSntpykyzRsWXC5s9Hn",
  "key23": "4s4R1dTZH3wir3eqBCkjgKTWV3QhvSD1DsT69u4bwfDceKUmgBpgqfF9YjGGCwgZZp7WEuJGzxU5LFcwFKigT14U",
  "key24": "427FwYVHkgmGnzBkGNLxzwC5MrxwAqXUq5EUx2GWpgEgs6Q3EF1aMuea8fVdHXM6xqc5yLumD23UDZr1Eq1rZJ5p",
  "key25": "22vwTQ2iRnDdNiF6LsPipLmcVjUxpbueRY5x1RN9Yu8p16WTCApgt4ABDQK7A9Wp5sDX3i3KbTBQhvL7hxUxUozx",
  "key26": "5K478QDtYBMYaqktWvZcFMKexTBcSpvagGxAmdQJhCRw7gn29qmgh7MJsDCodm5grPyp3outgqdoiwEUZnzUCxs5",
  "key27": "4kmmPjb93uQAaFTV7rdDkSGVjWbnbSVHAsvYNu1fRzroTqpDC5R86nbUnmRDnQNPgRngqD3iMeipEEG4fHftSCPB",
  "key28": "3Gyiy8Novh1SSbbwLFQzRigbBqJcRD4WZdyzxSCUvFmMZYJyzN1iE4QdGjXj4EwA9LDusSgDzHKY11P7T3BhTwF5",
  "key29": "3nNXtre9apCE2AeZiKTaPKNdhVegzi2zR2Hr5QDNK1nE87NPaGEFTg8uXkq9xaM4d2SS4iT44cgFgjPnxAaJ57mq",
  "key30": "5S7SAuDRzpEbRhJ7kxffEjkpD4XdntnwnRDTU6yi4f3x6dC1xPaejiTrUv2cX6HqxEVHfPqcPhw1P4x3xo1Hk8Uv",
  "key31": "3oR9s5R6uyMLGaSW5CYB5JzPj9P8CDw4ivWqmAKNxPRrP9WDrbdN5qf7h88WrvBf1rNqGRaqCCRZUQCVjguKWkZb",
  "key32": "4wij8pcf7PndJso2BvZNqC5Wewn7qUDRUA97aHmdnb2pHVHoLkGFK8YWKJ1vSTxTQqZpb1XEcKS5ELVat8T4F8xX",
  "key33": "4vAyamaHMppnnCKaJByh2qvke9dsY5kEjUBHfr31zZpjYzqrAkrdgvqxLHHtKe6znC56WVd3SbiyEqfyNCceLtNH",
  "key34": "46FXva2NkEmL3BBEKDRLPmyuc8AWRUocNHFM1mMEdPJoHqciTXUzKsBoRHnshaTNENuM9vePP8unydTduXQ8FVs4",
  "key35": "2Xzh6ysNUYQ67AU4TZqmmLspWa3FjjcMkb4afEYzoJcFTzBN7bnFCXkVcgijRxobVTz1hiVLJTHn43CuxNRqkq8A",
  "key36": "op5CZpy2zBpxAw9moU1c2QTUb2a9uea7KqZjQfmkhWX7jrsKZD4thLpnDRUocHYe9azqAZ6XH6bh8sox3afqj2v",
  "key37": "4PM6xkm7ds8a6GDitr3Z3uP6j6CMWfcX94cbKiCHhWwzsB7MLtsn2H9mSTaxTpQs4fmzv4XUQVLAcNUN93aLPV1J",
  "key38": "36ZGCib9R7aDGX2nkmUGxEsZzFcXd9t5W8NMuUKow4mBXW4xYCQsEvUxgdy9EZQy4RvUcQex65vMLo6YRxWtha8E",
  "key39": "4Ys8suLVJmd5jLFqxqNqugfg9maE7yRYnDGdDwx5Z5a9nnsxFY1zkuMVm7sGvdXxkAoFo9k5fdut21VdcsweMFVh",
  "key40": "4jCf8bo3kq5714g5FSci6zhFapoWb9iuoEPcZxDFvD5fps2RF2AqT2kpwuTxEsi7BhpvGx9shZ7svxhiaPR4h1gy",
  "key41": "3TZpHtTT4yKd6t92pZ4zo4qhpeX1FJ4sn4vc7nmr13iXvSY8LP8Nf6PnwBZt2wWDsFBzotuKPDVrEW4ug4ALMSCe",
  "key42": "27tbRUwpxGdmY7taDiJZs1y8PsW5x4ba5muCogJVt4NtNd9wMnALmoXmn7D9j6Pvu3sotox52km59AKSGnrEc3oS",
  "key43": "bzw8hNFEnp69hGUiNoFBGcYegztjjzjiyKZjb5G7rgY6i7FvJ3ccjgEvghNJKaApcyGYYZPNKdrsZ2LCiXkhQ9L",
  "key44": "5BtgTWybEW9PDV6pY9gC9QBf18HhuSKijVzEyFsWikexFyYDLpGX5F3xZ8orYHByni696G8KLaiCXmUbESpJFmdA",
  "key45": "31mpBFLZUiQKVWE6Tq8RxnpCZEhPonUHYFC7fEknDv72tihvSFxiWj1jJjJZKWWw75yWuSAPTqjRPmNruxfwDjUN",
  "key46": "cfTpmi3CFcFZFkFa8qHwMt1r51eWN5Pcqph8XATFxWhmV9wqMnYEDNVsuEzXafw4XNeb1sS5pPAmuwkYS4caFFq",
  "key47": "2EGPuZEYTxqdSro529ya1Mf2sKCMJzZon3iQo872ioa4DgCnpY3UhMrA6t1DXpTtaBioYvbcPPZoCMrCN1qE8Hhk",
  "key48": "22RsonFoc79YFn2hKHHzDGU2xARFse8Jkw7yhx6ndbi39w1dqWXPyVYXNJrXAiAYTakyZFYvTJH3o2W9x1oZJqNg"
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
