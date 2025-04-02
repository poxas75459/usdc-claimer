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
    "3ERf7ijaYf1uPg7v6LDGgcpvFc8muTN8CzrMn2LgFH6irzQtLkz69nx46udo7QrLo55Egqa4YyVsHYHrgP5wzQ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d4PqcbAmWWdUMrF2daLRi4ccUEyXN48U7CdMaP81kHgkYZN3tnoGD4FugYbu3XvqSAEFwr73JFKrSoaEjisTDeX",
  "key1": "4PdAYYRkNp2R71xRmDhvhZMKCrahTbb9DYhx48W3HMuBvAjZ7fusZNKVyFfedgeZjR2RqZFUGYpxihEkdpBt4ava",
  "key2": "2xmL2YTkZ5v8sEB5xoMujSGYqaW8TBK4FpjRH4rPPqdwguz19gVDQPESfjHVKEUtZY8YG9cdALcsjD9AXXrp4XgP",
  "key3": "5smEJ7HSv6kE1wrANx7CP8JGw2toriiZykQ4sFshnikpVasevNPLyxQeEuTcLCBV4jCJz843qTsxpWwa29r8A9Mn",
  "key4": "2gaaHMFTV6qoecXistFdqnJV6WZ5G6xmFMSJqd5kwrynfKDmpiZM29umuvTd2KKXxU4h6LViVeuPmbstmEdJFk52",
  "key5": "KFgwQbRVu48ZZGWTM1VMr2ptte7fc3tw13Y3v3ry21WNorkn8H9xJoDKDGLf1F1biuQzat2Y7ZHazTm2Magc9vk",
  "key6": "4dwRDNxoB5gJeeAfzNVwuRyPumAUdL6HbhiPBqoRj59cyE4uNYxyyqoGsstKbAu7FZgehCj8MQfWT6kPnxNsdPgF",
  "key7": "43qU8xKxXwuHYf5u4z5uLZcmkzhS9yqCwTHroVA1WocueGGUp4Ya2tSY16DFudVerNKRbzkaNkqrTW6RxCyPew1N",
  "key8": "2KpgLFYNwA3Du8GCNhzMtU7BHTBVpMqwAMnUN8vKjUU31owAhKeqXkmAZBztRYwQgXQSs43W7WvuHA6tndMUZZL8",
  "key9": "3qSbsLcPDuNawDZFmUKpNJs3y1nbTKMxqWLJu6d9Yjpta3LBsVBPbJCLb7ankpKZvrzbEPHWXd1osthWpaNYQs2T",
  "key10": "5oBiCaanTWRV193DoPCDQd5g365TVN39rg4KVzcQKUKZkxVXDkTJxi5TksnvYRrAQuXF4AkuHk8Xr8Mfqb8x9jdz",
  "key11": "3NcMDBmQnDQE1qfwV5uNhPmmMh1gU3QtXQ7Z8qCJsJ9TqEwQKnHmkS4xfw8bjyzLymjYRDcpgPiigyjGF4qHXZTJ",
  "key12": "2qoNj4CkwTRGwvqv8ahbQX9XcE5wvuvbfGXi8J6TJFx2sMRNQetg1P5nWLg3F7jcg6f2rdKfvwbts36X9bninn7M",
  "key13": "62rDcURb2sYPAYUQBnTqVZPVMJjwKgxk5RwPxQVWUnLh89ifVx2xsG1uskjogzKEDg7m7aShYkB4CC8d54o91rwx",
  "key14": "DVLZMT4PDsvWN5JozWJRRbEsXFTiE34H7Kq2rF9SDxthK2Vc9vQQ5VCx6G3J7LdbDmVkyrVUKwPtasA6JmXN8HE",
  "key15": "NsgGy8a9iboKqmBVuUdfrZgSZpbVsKdtMYaUGYfMfq2WtnnrhUAHDJT9DLgxmas6SPpRFYJHUYpy6hkKVDXCQMa",
  "key16": "JcqD5Y7tJvEUVPqyj3AD5e8KSCT4cAZT6YBjxuut9WHpwwYo4TtHPwK7D5cCbpzzDYDyBPrNAGarg6NwKSpYtWs",
  "key17": "3JfNaHD8rodvdX7LoG66s9kbpS3oH8oBsfNBLXCSSiR2dwirdP6o7SygcSkx6BSBadpsByH3shNsRWkd4GZdwPxV",
  "key18": "3wGcf6o7F8ubcB2mw99iXqeZydRYcwA3BtRMc1M17ExkGA99Ac8bsRWy1XD5thcL4fw6wDuPmarngqsDidYu9sU8",
  "key19": "2CMPVtX4vwcXoByReEnjYTrn8cGPNAVgiEGDnTvwSyAjryBaj314nRCPVn3aP2DpzPfnHTXZhMP126EwgAKPwWUe",
  "key20": "4SK8crreKCCviSJZy3ms7KxvD57SMiN8gLFGKq7tsschCvNqfV7TcKw5FNTjxG72Qai6aQFpD87RAUWKALRCdRxk",
  "key21": "N1rhbj5nmaywv8tHNEH1tdLmBpv61oCztUGnc2bhLRwxbHJp8Z9uJuNSeHsxbsMAQLmM8dhAEzbyBCHQZCHBo6V",
  "key22": "5U6PQ9Bf2biTJ4wTazZ94yUYdpHcRj8McYB6C6D7gN1rGr6jH8F21ZS9mwhb4KmqEkNxyz9LXFKNSQq4YeB2Hy2M",
  "key23": "4C8JUR1uJgw88MESg4VtdcR4LuWdgvKTZK1WopUwuYeBLTBgJFmn4ZCMLXPUnLBvFy3PL4KfNYgzsDQeY6w1uvXL",
  "key24": "2NCdTDbeS4r3ZT2EEWL1U3avzhvYwJEAe2EY9VLvJkVqAtDbRqy9GpiZJ2wgyAdLVQtXJbRSnrNm1qnyYXz3wYL2",
  "key25": "3rDtXziLgoZ6NM5qZoMSCU5Kbe5RRNQWXUDKMko4mKG1faBBgEeZGZ1HwiYt58XS1kVg7Mu7bo6r3au9Ki4L6Awe",
  "key26": "4uxmGKV8Sotgo3Ubn4vtYYTK7RQs466ghNi2LM1YYCgxxcPfnCjjnxkrpeB1G4QfeDaz2528ELyBTpmJNMjHyKGc",
  "key27": "3dNu3zhdTEeu343DYTzg2bmdEhSknPTy7RnzHsXqeMKNN35GxKyJcUREXXTicWUG8XksfDyVKbHiot14HGzi1Bj1",
  "key28": "2wS4AjrKBDG8mh4SRXWH34JGzJoJvJh3CdMMH28rUC8QbdbVZBzSeAtHtL2pSKoym9THMTaSpUG9Jy8vXWPQ8UCy",
  "key29": "hVLNRoENBU29FuzaND55taUEQNAAGpBprrKiKHLGJLjoWq4y4smHjFEXwQRMP2Sn2AEfqtvM8JwUq8Mzq4wCYBM",
  "key30": "5AQjTbyfNGVmXWw8ke48MspequzVWHsqyecZewLvPAmf43vuKyCBtSbyJ96d83YiN2BqTvQZnGcRP6zgtymjbbkS",
  "key31": "5L6cbGJXg1Z3SpEa52sF6w67xDZXgqcJGqKhtLmJsnr26rr7sBo3oPf1wwULML28xXg7qS7AawkDzRLxXsT3zpQc",
  "key32": "56v3fnyzmfQGwqcixzgNcBGr76anL7rY9gQMv85kWHWkQ7ESnGp1FiES74fK754bj3RukKwdHhwJk9SwCbHBV9cK",
  "key33": "wUCN1SbNRY59n6K5n5RHEng9ocQXhuSHZ8Ji8k7oxHusRCDdGM5qckfxPhED3okFD2hmRZhqyEKTYQw1Sud3jDt",
  "key34": "5arXgf1C3Y1eH1YcMiCzj9ogioRaSwDGK4rZ9zCX5koR11ZmoCibdcgdHap6M7zUAa197TL6traJP58Q6aMHXJ9E",
  "key35": "GDpx1WLk1rGg2Bf7b4zkrh7PLNr9q7LgHM7F8crF3nBQftZW5tyDJgcHuee4cPT5QArTUT3duJBD3xNjCJRDLen",
  "key36": "5QESHytDUEwHs31yx8Xpf25mAoRTGffcKEEsbu7xZadTkLBEVfsg8BmHkPbrq2CZ1FkwTyYL4y1LHXBF9uBWGuAv",
  "key37": "wfSt8YKvxf7MkxyJKitu3p86HYzdZGMbaTpek77H3QYzaSsMrd7NRhjGEz3dViYGbbo3u3BZd8yPmEh88DAPwzS",
  "key38": "57nMygFMWCKMFtJaNe4w3TzCp6cr8DobrYUz5LVnnLYziGM2Y6Txg5W37SLYXB6hfZgpRRduJNJT412W4x9xmBRr",
  "key39": "3zC3KF13SKrL3Vt26EDiWUGJLNmpK4QyWpLRznFjEhq26BBG7QTZqjM4Wuaf3kt9EyN3aEpRmu9sR6JCuEbQCX7a",
  "key40": "2qfaubtcb9mjuREB9ugS4YqTGJKWivBGgJkwkqV9gJ4mMyJbxWTGA7ezzytRbHHodHmFezkYdKPzCfV27taQV7zQ",
  "key41": "Eu5dVga4DPecT5e5tHUYtHmCggweacSbZuhCqCE4iDJPfyTYzt7Hzk6wpRLFNefEXdS96eejsAa8NuQ3PedgDHe",
  "key42": "1BCaw9bF86JpQPX2DfYkBbQVZHQkCyz4uTUMQRH9ZqXh4yadq6W3hS17kRgkfFkSD9vMsXQ7qvDBYuizL4Fd31n",
  "key43": "5exF5q9PiaYM9BzrL2fPSLTjUf87QriiesnDtGKz9wmP2u2dZur7CdLYKiaqDi5orUd3abpD8Prumam2xnwDZZhR",
  "key44": "2KPtJZYEMS71D4ArXPmPQ4FMz477dxnmA9fRUgKdfHj3b61fX89n2S64veTZGGuRrUDaYKcaiG38b8WP6HTsTCx1",
  "key45": "3dGNvLBiUogyWVtEFDpkSZ7wjksEYTvTn8Dpy4S7RrmVfvhpa7Ps68ia9w1Q3ZJtDLutk8USEWR1B8bvTxPvjEMM",
  "key46": "XWMVvEWV7FYob3W9LBPCpH5FAjuLFMuMbbTDFzmThSaR898xXn3jeWecEx21jCxe2jKfAX7TMQGb9C5Qv8uSpb8",
  "key47": "VNmGuuFhbsrfcMzj1LbqfZYsHUkgFByWiEHdnjntV22hKP7UyPN4ki1m5yK5Y6cz3t7gtnBAPghjG3eE6ANYntc",
  "key48": "4ebqY5xCco8dvQS3EQ79rUZP2V4omCQ7ixFqXM5gycFEMXAfXN11d2cKp7tVRBQbiw8xpsomFfG7p5Vn9iUz8pKp",
  "key49": "4KtcKjbD46YZdHBadfsPPuGQMt4mJdRxRXkjn3ztzbGa6z8XXb383mFpoEQVQ7LkMihGvNASVJXdagfgPRFSgNuD"
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
