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
    "33RL2r66xE85BdoZe46ifmF6ShfzKcMSwUghejNXhqXfDSoFznpQAhTs19cDvReJwHZBS3L2kQ7wh1RryJTM84Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRhunzoQATXhuj2PCCwaPAKGUoRCCcD6w8jB6EERLCKc2q2XNWJX5KxVhRcXBDmVz3kP7pVHJ5X1wkePXamd3Pr",
  "key1": "3E3kaTa7avUXPid49CJsTjFuHgHTsXRam7xUjZMHeHyez8oqm4zvADzuHAUq5b3iWfMkeXvTDiwYzFtd3MfGkUaA",
  "key2": "YcE6i1tsPs8pAHPSVGgBxuFxsMXYUupgRvnszwwX86Y9yz5n2ZLweVLscVz9y5sqx6Yi3Yj9vVDgTNs3fgpyQYa",
  "key3": "DqcPSUNwMPh5gCqsvJXbbqWWXgtnwL7wLc9ELUJ4FK5bDKhYtm3hrVw6ad5VQB6BmVHd1wWQbuSwE5FHntJtvBB",
  "key4": "4c51Q3E1UEmnjQTr9S36AHZVMpaKh6SjKSriJVD2emohACuB5Z1g7foxSnGHq38P3Ejacit85wdmBZ7a5fmusDmw",
  "key5": "26JStC9q197fLGtKnpvpW7hYUpvVGC9unTFnXA8MWgvxCyGUFS58bcMo5KWK5Wr4CdLNL51QRrHAhU1dXnNJbmYe",
  "key6": "4Svn34biMR4kNW8MctET6JtiMeYBZ7BPmtbKaUPBudvCS3Nm1s2SNiNTUBokk9cCY8x3r115xh3mF9byng6Pe88W",
  "key7": "XAxxtzhdmAwwsdcFnbx5rnn7NUa4VjMLxRS3LciJQ9h3XmAzW54np4NDoSLWXcYqNvBDNHSiCRkDCj8nTPjuJPE",
  "key8": "3WYyHLbAKuXKn762E1bDTeWgaonqaC8A9hGb8Ew9HmZF4VpXH8WnuGUrWyCEUCAsHdaBYYsiUMp7Eh6Dk9HnzevJ",
  "key9": "3HDVZcd7yqw6xH46z98zA621KaG7eYsbSXd9YsAuTj4rw6qafGVa2USaVE9U6Lqby874JcMHeVcdLFAxYh5MXQSi",
  "key10": "3WfvFkWAUM8JBhUYBeP75herVecezFnmrYJCu1r1C1faF76a2yXLmzmerTN37spXxUVhwLYZdkc4NXVKMgDiMdtD",
  "key11": "2LJjkaEbHG9LLskvBX26wvNLp7hpMBXx745HZnZhFTXcRJsLYdJkHwXY4fRBju8mWAnd3WhpJd1MD22ScUTRcdkj",
  "key12": "3uiFQfs8FtWGe29GPjHuLiNtR5nTQp1nQ2b6Gz5188crkPbFfVU1XkeB9sMtXT5AJLbtiyY4xM1bobe9KUHuNjXY",
  "key13": "3VbJwi9zmjDqVLYQLk26ruQB4HodzdZkuiQAc4YRU9fi1EHiQbPcHhT8TNETTxmujPwhweXRvGgD1ePXpSdC69Bh",
  "key14": "QLtJuYaZjfwGjfAzksNMxBuTNt1kPBQTbDSnGnNj8e1ytZhS2eQLdkPeypZGjkZ4xdzq44YMgc3DAN1RfLijYsi",
  "key15": "4MbBgPDUxQwANoV1Wfdqv7b5ZbuBzhqiakygg6NTFdNi26jLNhTC1ozjDqsgdkvGQrztXw64GB9Evi2qXFbJnAZX",
  "key16": "LcZHcP7BYUpS6nqQuVzEavvTQ9XwrK5hdkjCNTvjUz84Nh5sJpH4nJ8JvQ2CcKdBA8jw5pxm2GgQxKNSMrmPnwQ",
  "key17": "uFof8GrzPy5uX4XaL3U2kqmGgDiCTZN8D31KBTiCXxzatRPzbHWKQTYJqHSWSCerdNKpVZgBV9o3NFZGquy3spG",
  "key18": "3wSiNPhtLejMkjgKRdV2zsBd3h3S7P1V2rzxofTtKHrBBr1p368b5ZDgwLSv6kmKXr3rFJKGkB4MUuHbdQ74Zio6",
  "key19": "5psWh84swHMHgLuFqcCz5Y1dUcwo1gMvuxHWQj4RZChHDsBobwPMZxFqcJkh1DyoRGm1nrZdVfmeLJD98Xjbm4vU",
  "key20": "4xyteu4RqRni58cY21E5AZqJYSdwZUnEafWcCuxe84D5vsNGhLCn7EUASwdCnARs9dtrUMHeFq6jUVad1EthNbJs",
  "key21": "3APBGwLXDpN2cJfKGiVBqaNKz9ZrqgSTdCATvhAxn5sBxhTpW26nVXDNxbhhKdAopdHtUmW8wB88EMQRtgQrMrQ",
  "key22": "3RLb1SohMfsNMht3iLRV5FvkTKZCCWm1rfbLSGVX9rrUrNAwGTWJiZ521YQBzJuF34Pcx3MqbQaGQwr6j8v17nJt",
  "key23": "5bHzVMyygdq47BbNKnMC6WkAMmzX17AsUNKwpBD75LpBskoUqcaYfhjDG7TDeskXx4xfkSuGovh2L6rsasfjZTGM",
  "key24": "3V9wcx499vQFD22k3VT7qavWZ2rLqKYyLx1CkUVX5kgbdepjMq8KuEgG9XoJ8BMpeiq64nmJPfMFuZg1ciQND2cF",
  "key25": "5HgyJz8C9ZS9YhUtHiQHpEU3jHeDkqLu9MRwsbBeocJVcVMUHbu3v7i3i4rTn1NhB7WEcZASxUabuoiE8C6ygVNh",
  "key26": "4beNE6GYBoKKChFEiUdap542EFJ3Eonip7AAgfHcnKCTZtZM8gXAxefYtnL3y7cSjwNasAAgCpCuyG4ULAPqaeY1",
  "key27": "3ygZqR6G2nVeBpDW5KSyKZWUFh1Wuqkgcc7YDucRvSEMKyChP8KhUKhodzFcPdUDmCNV7nEhUzMTMgom9Zy8cB5S",
  "key28": "5YGrDX7HMKe2QzdQMnajTZSvB5mpC2H7sHbTz1jscv95Ewy1KhCWasuBNxK3EsV8XF4oVtW2SPRrPr9jeCKzx7bf",
  "key29": "5rfgyaFEbnyE7u8hQqoWnYUpvbRV7VuDbKQHzcCjRNVGomWuSE3GYexU8wqGnTLLwqyCvovqijy55LqmMWFi1cUJ",
  "key30": "5JHTdfYRi6Pr8hBD3zj6SiAGwvTcxzR58iZCgJKwDgETdPs6vvoybskLUhMEjQ8Avt8khzjRVbAJwZXmMVCnKtVc",
  "key31": "3MaFdMddJbtpMi2q3w2qsw8DTHpWxmejpJPy7BsWWN4ddwrKMbtHgWztMC4VQRKWuwJt4CHp3oAUCUBcXWLpDk2V",
  "key32": "3enxF16evKokYz5QVsQjqAbM88mNe4ugL3Pryptjw3UmQaFMkey1CvxjKabnhxf3G6XnFt8WxH55i1Mtsv3AGUb8",
  "key33": "3N8ovqeDjho7VUA2qdqCvSAiczFQJk7AvnZdVy8UTzWUKLFPBQ7ozoezGVfE5VpsKDW8SyTVFyKXYr2Cf8VA1XGf",
  "key34": "647ctkvPLkXPJRbScHDuumDn9PsRBxD5ovYLv1448KebgFvrJywXXHUYG8bP89EySxWqc1xC4EpMLYNjzUJeAnCW",
  "key35": "4cT75gesaMCSj74hLcW91KSwJ5WGVaL61RmR8CfjMW4rNUAD9LMn86t9centAVxyUmPhkPPSgRW36WiSsoCq3WuF",
  "key36": "4TJgB2eFWDH5J6sgQguQZxyvqHsriDu1wYhMQqW7tfToydGyChr4v8svyfZ6iU3acJviy4ih5H65DRoYxpy8GZfx",
  "key37": "4d9CCp5tZpdhTvfmaTjjRjhu9GUs3U29axaNjfX2iKL3x6V4UdThHAk9N3XRAJLPfEF5NU2wPQAXGjPWWpYQipA7",
  "key38": "5iuPhcxsrfAY8Uxuo7AgqthPT2urfuawJEmat5Ys51fngGWfHjLny24hu2dY7MD5ULtbdrLtzUpu7W5z9jfiPSiM",
  "key39": "4eCczEtXTjk3kL3sPwiKZQEjkUcB67bL4nh679dPFP6asiiqQrwo4c1cUAcLqgwBrVf5VwVzx97PJDikMKv59rbP",
  "key40": "5niyCkE4LFR7mib5856NSuLpjg8WGBsidYtp4Yr4nM2Shh8zQ2g7YpvbpiRFg32uda85JV4MdDvaG14ALxDdGLME",
  "key41": "3JHM14aCDyUaP7yWkGoC52dABhGhCsVCEwy6Ccy34b6eg8yQBVmDhNNa2wtuEvJ3FgLXmXBHcfYVrFFwxVZJNjVs",
  "key42": "31TTsh3KsRxpQDpJd9yNzF7CkFNuWzAmRGTvA9CBLdLr7axjzDYThXMNxAL2q4ghmZh8vh8U3n7uQZBTyzdcSAEE",
  "key43": "5RvGn1RQ6zX9gyzo2Ft1JfjhcUGFExcibKDgoq7roWWLTMUv2dj6FCWfx98wa3s7UV5eJhMy6ajpZqJygf7gdg5z",
  "key44": "6K4K2bR7X1GePpVrxdekWmTEa3fmcaV6v65UmbWWii2dAmE95wqJQtWnS18Ydc9RtVtR5UwQ2C1YtPg11CWgEoy",
  "key45": "Ps198Hx6x66sUL5sr6Ckv9xSNxth3LtiG9RQVSnj3xLfG6HUHCUvBb3kM1fptgmLfacv1VZPTskvzbovpt3ye5Z",
  "key46": "4TD3Rym63Cb3Tc5BTyP2hSDxhUoqLg26Cnj2y8fi1ZjSwFvz5b3as5AK89JUojiaF7xTwyExZBuiwyfJ1M4waMz7",
  "key47": "KuZf3EjrNHdyFTAozK7Mr2ZuSAsuq5TUiUSj483HLb5ges2RGCbh9SmpMR6i9jcHTV3FZ4zXrVmg48kHZtt2UGN"
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
