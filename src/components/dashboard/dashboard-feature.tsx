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
    "37Dih9TbWWT8MBDWVyrXazezHGFifgTC8HXrJ2iBYqf8DmbEDZqC9h69n5Vf5basKhCDZQWfshzZMWBJMq8ciyCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfPHzYvCovXSxdjSCB7xidwsewwDkgWr92rqngv96AeAXn6m4uj3QD5mv8kNpsRsu46fejXy3ix68UegTCp6f92",
  "key1": "49GuADRKk5easLK1bTmNnwdZ2NfYmVrYcfxWjYyF9Se94ce5dFAdESWmbLjMtxEZPwSaAdXkyJVEkEBzHBHjCvND",
  "key2": "3vpPVEYSiXHi7PfqnL8WK4KNoCUp9YAypZqssWdJ4CH8Hb2BuspHEvJG8hhw5oS5xKihpL2cvCEoGFXVmc5gLvxE",
  "key3": "41gKZhCfm6L6TNUu2FFqJEhWrHNzz8uKBJyWHsV1rEE93HLuVcZRi2exPsrmGKZGbQQxxocHPru7n5peByMNZm5g",
  "key4": "5wUf5y5ZDNJyMxKNmBDoENNyTvDJpG8TbArG4cA3RirRRTteKffSYLxCD7r142Wgotc2bkGbw9ULNXCLKg7Nk9Z2",
  "key5": "ogJjfLz3FDf3JUmFjwfvDhzTos412M8FYMsnxHaSF8FcmrRcpjVQ7EUrEocvyS1L9UxvGvsFU1iymGsxEE65j2c",
  "key6": "3QRwjyHXXQpLW5gKNLBQyLYNEBoLC78YLA3rJhoWJWdVsyrHCbT5Su1EFNiQaGbxcb4zGhfk3BscLHdvocTxW3YY",
  "key7": "3rkRfsknHAninY3qt6LhmGZbLXAprU8wRLQdurD3ztZoJvEAni5t55W8gSRM8vtc4FoEvZQEgBDtiAX2RKLWLGUr",
  "key8": "57f38XxM8DGpN8XQpogQmDx7ek1QEKSKqMAgdFPS5omTXwgKEUDBWgysWvXAjrobXWcePQ6xvVibc17FJdhSJ1rC",
  "key9": "3f2VgUAGPEKJWxf2oRs9cQJPesjPFbBM3ZGvi8yodjwMHwJf5JejFZY8SmuFA2xTzr5YbZ7UqDkiUKJu7cT73L2n",
  "key10": "2Cbt9j6ZLdUsnysRe1MXm2rAGFvnnijxz8432HhdKJ6Qhvj8AN5XKU2BBm33Q2UjAzPFZnxUPZjYwuBAv4J2LjK9",
  "key11": "2AiZcnsETHBA6Em8JvvpH67pkKV5QQx4RPMPkn913Bow4XnyU6Sh6jd2TP1n9ebKHz5dXHEx31M1BcLkaJ9tJrX7",
  "key12": "3w2LA8v6aFZFR91Hq4Er1A42eN7qbZjApuF93vpfesmKSJqCuDtzCZrm6ZP1uLFyEtqxTiTsRdSCkrYtDv7pvS34",
  "key13": "4QaBkXuXNdgHujCFcMZMXxnHk3eAvBFCQ4TqqFJtCFzmkzKu3hKeAafFb1Z3rB6haica6z3K4cnQ9DNeUhRdtVeM",
  "key14": "3TAjbF9ka51LBXcXgEaCMwf61LMtrBbTcAVRwqzSMiGCv6zNd9ZXBGFgPo8GyM12o7cuowNEQyaPNak26dSQ65LA",
  "key15": "2ALQQAZUyiTvf6KQFBRMdqginW3KGVUsD8ZBabYrfRWyK3hq9HwtsM7aqvwuYGFmxvywVfrhzmrjT354mqNaVkea",
  "key16": "2bPUeQwEsXKPKdBKK4BfRxYB7e4vYksyJdtT1bjQE2aFVdDj5XFvxK2pcAtiq9MLaKPdf2gbYeRGz8oKc1L2PY2u",
  "key17": "59EjFmVfZ69wHm6CDE7eyqPEznT6Y8pz7M1PxrCajVtCqMBLfi9rbr3bE8bM99UWWTHuZ9datbNmnY4wbyao8JiL",
  "key18": "5xTwgG8Nbnic1V8KPWXY3rbVZ8JG6AWajGu36GhpvyEzqp4hcz9DbRC47y1MoNWjNw4Cnm6ZSeMpUXE6LqYUeTQB",
  "key19": "C8r2JZyqUipniLkkMHaTVEbY9DuvoQqQdQaT4YT3uRzsKagPatjKLrWUpghLkVc9XuaU84BXojhMbiQzXVgqzxt",
  "key20": "2SunTsWqEBe5GA5jHpBqNvTyxJyjtf3rFmg8CEaajcDpVXmj1WqBbHmcuJz7rYwGhKpHFtoRbPUxM7iZBXrdHyqc",
  "key21": "2zDemHnj4qstPU7nokKwNaPZrezh1HogMJhAVyYz1xCnDUWxwWadEy6nux5rvshwfJaMF5cag3Q5zb2MbzC9UHbQ",
  "key22": "4EdsTggDu9LexgGQ15X7N6Bu48uQrMzsWxWoTN4WzroUWKcpn4fhR9X5t9RGP6mJ3aF91SGegUm14nBYMQjwMFyi",
  "key23": "K3LGdJtFXphefrVLNsu1hsxkWXFrw5KEomqgJq2QNo4Wq2YGvWnrN734PqWdvavc7LyYgxWRB7B8hu5DyoZorDY",
  "key24": "312vLohnPT9MV9kyAX6rrfPennQuHjvouWLG3LYjAzPH7jMxkqKhxqniRZWtt3x3tnUbgeG6jsFGCE4rzsExFmVE",
  "key25": "31xfg67V59vDW6G9TNuvsJ7ruHJNQN8Q7Mba62GVA7ay99g7XumK5JPXeQwXcLnxbFrSqNh956m1fnfYF31ryzNV",
  "key26": "63yRdCZXY4y9mRtwEXWcv1D4NLViUx4Q29v2FtFAeYk9sGRpbXAAuxw451pcyXcLUkKJHeZLgiTrbuBmU2Ndyu17",
  "key27": "4sm6vtnscgk2Ju4wdQjvv5gM4ZFHgynbigoopMFzRnMk5qrRAPzLjnNi9F6ot23tfykcHXKWRbmq8Wd2gBheKHGV",
  "key28": "57bVH3GsNUK22EktjxfYT5hWmTkqzJqo2dR4WRzGexGqia7JL8YqbFKkRzrxswCyUfXRuZJqsWR4Kt6z4NJFPMGC",
  "key29": "3mPLSwiif9Y2L7xqgQneGUxpUHPHpWhLpqqBtvjgZp8bmfpgJonkssX4mguQ97JUxq9zjAc77aeSSe3f2byr8keZ",
  "key30": "3b18KFnqwPz9x7g9X26kbdddfHG9aNwtrSy5KiwPTsWW6PnBdR3CJjyw7VZbV6JB5yHJf5ptdbEjt69HPeQDwPdN",
  "key31": "4U4k4UnctWBW1EwnD568V63VCGpY3U6ov4sp89XjnUpHsGaLVHguMRT4D2mr2txzG6BudZVFpwKiqiikeCBdRRWp",
  "key32": "2EEmvfDbfWcV23wyNoW1sL3ohKGzJZHsPijLXYQGiSXm4fzfiF9F4pE69xokkmr3XV2UCDT5tc54wyAXKTzoSnXF",
  "key33": "2VoeWVUL1UfMMMBGh8T8nuxMXMtPkdgnpDwoAiUY3CQYau5esK1mnvqBnzSZ8Y1o3QvKaizvA8aFj3a4hq2JvsYy",
  "key34": "3m1YNDgLh9ag4qUvsTYdSftBqJCBGnMyEX8pQAt8vbNk1JoCu4serBqqvYrx8JBDpuGdhujVoSBKttPaA1qx7goK",
  "key35": "DgMVkszM6L3gVFPdCGtAtCNch4oqBFYFCk235XxfxvBsBN93rhvJ8gbD4fqDnKyH6R8oVVaUXr6ZqqQ9CSnMjiG",
  "key36": "5JMMwekE8BeZrcdbMW7XzaYrsc6RtQe4LuhcaHd882KhxsXGRoERoNsjsR7XuT9KdJqcGiV9TGgP5Ex4pbugQxFy",
  "key37": "ETyrLhfSdSM2BQ4kP6154u4gHzesC8F3zBAsfixECrMs78uVYfaJ2GqM22bCsE6WVQ19BeaVEDdPpuso9wKbZPd",
  "key38": "5L89AAFsUDnGptn7oDF6nuqdvFVobFzHUiEUeZGoJHvEbtKS88fGL6WvFVSQEN6FWyM2uimKg3QiBW8LtCcDE4fa",
  "key39": "3gu2r3yzfqYypM1A6G7NHDZNK6vrvpSfEk1ze5CyZs6TexbsYTAYur4Ne4WDUsoHTUQ79BbkBEbYfDXXX3msEe1k",
  "key40": "KBfBLBLMX5DVMVLJGzVRmQf2pejfnSJpxHqVoRu5LwRC7wy2c2xUkThSZCipLrzMMk3ECBCjeCfTu7UmUrRkN2Y",
  "key41": "5kz2kPKDE1Xk4SnmUXHwgp18QYHVUdYafV1EzpccjbVxrAmveKicoqPgQoa7sJjKqUw7buq3F23xQnsSnMLNKWuK",
  "key42": "3uV1xwKCLVd62BerqE6LZcDGGZpSavMet9cjAYa2iuTH56T76wXgtjKbLvmD8yEtnKxu1whAJWr3GQAsnQkPkyUp",
  "key43": "5XpJNnF9n1XB7yzCZhnUnXeKrKyDgc6a8UcgScyTUSAc1ixUEtQNRT13bKZL8Jgtt2ubnPYsMCiJiRqSgf5kPnng",
  "key44": "5sLzqWA4WaRdd7mRDURuScqx4AVshMqYFkYoHFYYF2zhyXX2vbxMwcPEGzCQYMM9hzBRyci2gb6j3uRdTz1NtqpX",
  "key45": "2ospN6Cqfige1tNB7VrxtK64qQ4vnhu9JywdgA3dWY7HD47GqeMKKuvr3yH1hZ9XGpYvU4jcQAGP7dqX1QeuKNPn",
  "key46": "KU9BsqrBHDQY8f8ZYtkPxf1hzezaGFHRjNdPpR29GEhd8DPnqrkTc2hfu1M2iQcDA2641ahT7Sk3iGJ5pGiDX2m",
  "key47": "3m83xa2fpbJ4H3KYdcfxf8peKjvGgme521PrDZkLcSJ54Q9ykchKuSjaLmkaEge1Xd7kTQY6dJurBUshm74Nhycx"
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
