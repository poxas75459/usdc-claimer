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
    "5Yu2dnfvkQ2KmkrceTa4RLzhV9se3rzoCfnavLa2hwv4NCVP6WwEXSoH9vK3KwaTnRLa17eafFzBKpCwFNGn6zL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5oJhePoY4FWGVSU5rA2a2yykeuR5QrkVFvah378h2737A1FtfQZfkbgbTZ1utRsq66oaAfZ3D3VWHDwwH4RUeT",
  "key1": "2cuyVNwZgCcPzMX8F1UFMdfsd5AD84za5chZTfcc9HbXUrRbTj1NyYoC95av8xKQ41VoEXTMbyLanffka7rdmFgz",
  "key2": "3zb7XpUh1miqnEUqQ8quNTjJYV1wnx34V4apozUybvSt2DBehDbHfPxPDdB8qcT8QYsziVR138ZPrPzCx6AmjpaV",
  "key3": "2SGpHvYuoVwja6p5Db3CTGuRK6KfxHJT9bWcXLwiKG4c4v5ygDiP6SHK7YbytEFMi3ChfqL8z13gHR5At6WfR2Tb",
  "key4": "5C9dUFHnkrqtK4LYwMXXs512od2u7Hz1M4G9hgUVbp6vtFVJRyi3txgdBQ1AGPjLrdF7VcZDxYc3w3z8jr5SL2TW",
  "key5": "3njM1STcdBr9Li5Gui5tioNjnx7zDnoi6trvgNkWdZ9KV8x3xqf2gbQ2UUA64J2RcxeWQwv6wX6jyyy8jXwDQmK8",
  "key6": "64RqMNQX39GwtXFuMamJzqWjLfB3fkBsGZCc1d7fy9eQRDceT9Jda6K5Rzzo6vvCG6ePLEFzLxbSr9H5W481qBwj",
  "key7": "hG4jSK3PK3AGFbnCnjDfY8pEefZEx1WUZuntjH1QfrPvQwVxjzRNnBKp2rBU1tpk68K2iNgcyhEEYAGYRaDRKGJ",
  "key8": "5CZn5CEedX1Y85ocJSpDAgjqJ3ZrmkXAhX6mTaP9Hjd7aan4YYGVA2gMcaKcxBeqFhdiYdUUmhNrcaSvEzdnLohj",
  "key9": "Bh2gQCuX1rRSJni2WBYaNMibXvraA4u77WYHsSN2d9xRnmnS9LCRWCGBbCvqwFrEs6cTW4aPuRz2uxyuwviXmg2",
  "key10": "fR71zf1f6SvF8JZyvKPM1VBWRJoYoVftyFtcSn7qXMgaQpPrBzKdrFyfAsZwkJkzVUHSfrYWY7dHG1CFnzYgptq",
  "key11": "3vadZXaUotZ6USr8bR8pp6w329X43T4othuRsmGCvBbjvsfn13fAZXc53yWSvKGy6GuUkqms3rXznyAiKKsVpQ1Y",
  "key12": "59SMvQEjvQ4hSnCgJsHZZsAzGMtCBoEJJrKWmJjdyo2jUjvaufypVMWKXsz47DsxtoNAAnDNmFF24PzommnrszGL",
  "key13": "4QWTv629QAkwqhwqnxcEdbmTc17a3yf1CScNvpKHygrmtmoReHZFci5ku25XsiCsdyjLseTCFDBxWaPVebeLnNCo",
  "key14": "2GZVibhqjLk1SFzYEVm33PwzaJmtRxC3H8WL4BgeXwz2rULy1xSHwUVb75XjdUCzkYueZnwS2doqHvSBatvNkxjn",
  "key15": "35dNXg9aFuTpsGhiLwoL7tzriMvrGfjCkhK67c6W1gr3J7gmXCmNy8Gd52UzY4dH294WtyDDbTfs5j1jjF2tztAP",
  "key16": "RV41Q2FShkjh6a1mn9RmPUBX8pM5ZM7Eo6eDiDiBzWNHpnXhcJxZQh6J7nwaGtMyRaUjRYReDexCaim9qsJcbAh",
  "key17": "2EcXd29Z7nLoytoEmr8miPio6NZd2s5a7EPTQqRPfjcfLW5xjcMTEYA3Ree3gWdDnZXpNvxXcVsyzc3snchrcsMj",
  "key18": "5f2SGhZxS6ie5zoMeGtnp6AZ2ArAaKrpKzm7QwyodqxfCbaK81s7tfhtyfPr2QKwvGh1QaouCaSNC3kkTk96CLkm",
  "key19": "52fYL5CtLhtqtMz6uxcUFB3KUzTRcKsAF3h33ErP1xki25F6gErsLfkeQ37H3DKxWeMPfC1d1YCStHbuPgUrfeC3",
  "key20": "Jmp85hX6QZ53bjhMz4i5CWE9hfiCgUeibxyA6HmUZMnzkYXeJfNMfJvW76QyaJctTevTsbBg6zvzxWVFCGg76NN",
  "key21": "2j7PCW8njscjXyVtk2oBv5kcW81MConUyt9ckqhREN2FXYaxMN68qVfDgvMf5i4XQemkG47rcXRQmSLTmE4F8wfr",
  "key22": "2gie4ji1iGw8YBqF2UZZoAanTXP3V6qfDiQM3Gg1oE7ZpqJ7PCZGqTd64ZYTf8Ck7aDxPuiPYStShFFs6okwqHHh",
  "key23": "4uWcr9n9GtPx1o2GaiPipsVscLhhp6THSiyCQTd1gC9zEp28XPcQxmKwxK9FAcgSj2FvYef1MfkdHRrzeKsMJmjd",
  "key24": "5bexToAsPW6t7DDh8A8ipgicjtvnjYGyoxzC9MuYVUJ42YTZnajrnhVkcXzJaeEZuV1QzRGkSTXxDbvxXFUGoPZ8",
  "key25": "FoY3arzTjjiEHYhQgwfhtTwqA55X34T27LKHh4jmnvK3Fk9fsnLfMhau5vCjbQ1o48XKc6412NBiYjN7Ywb24rE",
  "key26": "5iPNYwQBZzwR9ayQJmRgU35NWz9yLJeC4CUxrpfhK2Pfbe42j3WgX1hfBT9i68GjpwbdLZp1eD8AhiZeVecLcMf1",
  "key27": "5H3BQfLeb2XjHfjgoghsSb5TzSbjHHzgQLj8V12YQTovaG4Zi59pSTJE1vjVr8dZGxBC9JDj377iaG7x4nNwNfWN"
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
