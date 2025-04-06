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
    "3s8d4VpCcqcQTrEkxyPWSZhVGTacyUf7wWNf2FVyZKT4oaqthSF3CcPNch1G9Q86BkL3kAAa1YM5GZhkJmKNVG1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q56w1VXwruNyoGSfNe5DC9s2xdvuSouAU4Q4a5mTuocPNN2SSSqJjiUoTV4H7ZzZKHAEdTwg7Ec9R5XMWKhjRw4",
  "key1": "3M9VvhUSx4HvzLW2gmQJFKW3PnR1FaU62ZvaiS6n26xafJRYAvs9dPWoMnmTjVhocSMvsu6Ahp46DmGvME1gE4Rb",
  "key2": "3DVQZYJ9raBphE4YtKRpzhWq3Ew918nCghJiG245sdMKgGD4RYcfERQycvEpPt15qRiCGfhVTr4N9xJN2dWKCnYx",
  "key3": "tihrn24MmmhqyuE8NhWyrYswvxfXk1gVnF5eC1cH2xXD9SmLmENJaGj8g8SrK82kF5wuaHg2gq2LL3QnarCMp1q",
  "key4": "zv5u1ftvvdtozSf126D4wJ6VwJzKF15XEUdAFkjfUniqXp9Svd1Si6KGSRmrp8bYcCB7iN6GMvMCxQH8nTAkoAN",
  "key5": "5hJHwiJTMKVcjiRGkfCZrnY3ks5uscsc9obi3D9hiEdpebasyFDjtMoVCxSW1ocbSrtESw56hWdbso8N3tepxaLb",
  "key6": "4wd9npnGcggtjsURRaC2WqCoZAboGKhgqgi64KuAk5VMQ7qDRTcMBAXaqNExUC2fEn39CgWrwH7cLo9sWfM3eNF1",
  "key7": "YABEL2D7VNUBXnfopcQ9u1gYgxGAavRwVPQ2Nvdk5nfstBxX8xQUgrKqrzuVGCFGqdJeRFpNkAexsKbS8NAaEMk",
  "key8": "4DXcqYcdB4cbLPoFpiQUSQUT6Yhwyn1Y84s6pnudCDbKHGWouxwWQfgnG6dR5L33Wf8X5wvCzL3GRCHxXz3QoiH8",
  "key9": "FBMZV4Z6YRKzpDxK736X4SqsAoxifss8TdHFgdLZ4soW7MttTXkWF3jVKH1SeZgSF3PRvQ1DSRBsiuqXrvHtmmG",
  "key10": "559YYWf5UY3WdYFu6ENgkoZx47VctHinnN8QQSzSFWAatBrAxYqc5iWXsLbXhRqWBFfLTC52akp8eSpTs3HPdJFx",
  "key11": "4A6fzvu69rnA2nVnTCxyHyPW94tu2r74EuTgkudkJDRbUP7snUWkWTJxXYNZSzdQefQ4a26XVfR59Wz9WumxxdQk",
  "key12": "2MD1NUA6touUrdZNPoTw1jhTZjhEsgQh4JHs6oLm2HvQ76SLSp2TEuTysos81aVVMzgTCjKhpBbxqXVvUQCHoTwB",
  "key13": "2L9JXL9sEcvVJGgqwf3pB9KwijvchLUW56tAEV2ZADc3fWJay4UBaocuVd1SygTArGGTU14b3hqm8FsZFUc28rT5",
  "key14": "5NF6a8eBgeEKudjr8FaWcbuRjEHFK6vJW3Yjpy2Mj4fKXfU5r9bgedEyqV8Jfo9zE3fa8Fu21DcpYCMsJ6KdabfY",
  "key15": "3hTCixQXhKN8x8sCefLB4ZLEZRZUMqT1gQ3aTmsMBuTy3BvdZe2UQAgrjT7UwxhADgu3Sg2cBqQ9iVav17gbszqX",
  "key16": "57rEx5HG1xaEevv9STkFcdvPSzJqJsckhfNGpcze1HpvUpWrZsi96rgkn1ty8oidbVkzZDuzzoYS4mwLeAHmTa32",
  "key17": "5FCjAHyybbzBTv3PHWpijY3S77XfHb7N6UBEHpCoH3X4Fz5W76FVnyA6XfCe2mtg1b6EDuWswmvMZQVninWUX81V",
  "key18": "3Lrf21Pq6kZbhtPG3tYysYbcrCLiXoi54LCNM3JPqRhG3HcFB7q5AcCpV2DHT5VQKkBrbLCNEfPBAFVN9YJxcBHi",
  "key19": "Uh2jkWu9PaodUa2KU8VZTZdN9VL4hk7zaaKCs3n9ew2jKZU366ntPoxR9o8r9Wb3oobw6jdPZKCVj2VJdPRZAsJ",
  "key20": "3cGTo6KkURzfq8DquLccTUp2aPphzL7zptJbb4DVhqmMfswdV9MQU3dDvCqA3MFzwcf4FpndgwwFM79Aj7YSox27",
  "key21": "3LLQoRi3bFGPyrJ7SWt27wnjgA9K4DkuHXSxNdpth7tPMWdZAL9w2X8qBvkiXcM98k9WjZvtW81LiTPpa2V9q36g",
  "key22": "43HoTBSUrTmgf38TwijnuQV6QKwf1989mY3brQ5UaGSPaNNA22xw5j6ARfJRutcPq5xPTpHV7cTKn7qL8XYMFdJf",
  "key23": "4rNWteodGXF3o8icAkUdp6N8NwNweWFyNMJTNBSiuNkvBB87kP7A2Z6c6oLXdxL77tMLudNmyuNdnzbj1CNyD8pr",
  "key24": "4o5Tvh3WBvMEsWzTQrmD7tZXPqgmJAGWezkrZhFfXXcfYKsTsC4mFeoQoqxQGgoBEVVNWPScbu5p9iJiNequihmM",
  "key25": "5HGP7pU9z1a8VD97FF4NHPLWB1tAdgTT4p9p3YNDwYLAd7Ed5siC2F1R662oxNvLAPZ45jUUr9x1rrVHLD9QtAsc",
  "key26": "3YsGDcagz66HgmPinGnRVT3WNBoop14uaprPHnMCsCaNcHhMygwTuTtdgdZJ71h5aXi9qzMfB6TTMayquQ9NtcKQ",
  "key27": "5qwCmvcADa5xd9zwsHyxqbKPNspWzC2i3vTcw8tA1E9SdWNxXatW6rzRiLotmNjeUcx6HczFSF3wnQrya51UaWva",
  "key28": "3FxBF8i4y6YXzcqd7uwi5BV3w3LQofHYzA5zy6zzAcy456EUJtfVHzUSHsTyFeGeebGW1JQLcHdwPLtYstqeCaym",
  "key29": "4NTES272Ff8kPSSqHsJK6tRMNcu3TM5Ey7UHEDcuiQuMtj8FykewbxZqC2aVino4e1kz7pTaQcZXS5NrS8GQCMw2",
  "key30": "5GwEsUrqZQDyFvkqHwc8xXwcT9aWtcpVSGAN73vdrCGXJKFGkNxZwKqWZ9eTd4KnFzFtKmM4FFxcN73miuBYdyks",
  "key31": "MPqwDH3sTscMtkAtxvmk1kUbHk98a6HvQUfHM3oB85Q8exerRtSoxzZMzbzzZn2FgQFqUfkPZnK7YRDXRyKWMC7",
  "key32": "3YFR5uDxB72BT6jqRsGMoaGEbTbJVmzHmQgGwwygn4bso8gJghzxHM2vEtJNZanqq6Luen87azBX1y7fozqEaa9",
  "key33": "5jSVvSDPsb5oaQbt7WrEgz6XLuMUHJpwpnzcfkLVjkZfAYwNkUGMhZVdxYu2Wd24udzNKPZkpkwffcvXpwUH6oUN",
  "key34": "MsAKaS9gpiEnMKnYDewDNtrSfSvr4Jur8SN2tVNYhTWUQxZQp9tXdHe3EwkgRgsnq2zFDkKzsn4J4QUejhUHDqK",
  "key35": "62X3TphVVbt8E5Q4kzf2W6668GFWD23fk5iuwH7N4LQTwMNKTikfP7TUxwU4bb36nqVvM2Ag8Lx8cCW27vHth84L"
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
