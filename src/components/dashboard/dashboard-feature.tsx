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
    "vuJadc47V3nK5B3fyehpKJT3V7PoTQdpiwuuyPquzmYrz9pCgLrVLojhWtgEDu4swe7eL4mqqRQC89Wma9XF125"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWqwQjLkiFV6cVy6ZJYnr3hqswqkVrjJJrE8YEaZLk3CLSQkDRUzX6Uj3Cqxz7wxBMSv2yzYuYhwupEyZ1nLkrY",
  "key1": "2csGRuDmAXbyNf2siH5ANAa4dDgZe4KwtMqpSK1naV5oWDWx6WqXNA2dMayZDFBoGdkdcy12omte4sRwwi32ctis",
  "key2": "5CWsXaMtZ7myauP6a6ToX2R5CmKwwvDJkSNs7EHrUxHnbWEWt9nXsuBbdf4TuuXg99Vmoz7VzktTH4d5dF27yDnQ",
  "key3": "3C7fPC73Lj5PvLXQdXiBvkSVQDEb4pTUwfMcihtu2yXdKXbHRQMNcF6b59YW24Q27FXmhdEN6xCLbqyv28EwL7Er",
  "key4": "4xeDx8yciqmWNAPatXtF2w91RMw9mM8EEQTEJFz9fcZdQBtK9YqQ3UP69AeGaXunGdAr5ZzUousoibaHo6Pwwdae",
  "key5": "4214yqBN6CW7dDG9pvULsESkDwBX4RGMYpuAN4d9efTp5CKwfgykufinHZ8sM9AS7w8uP9uVAa7DduoHmqiXQioU",
  "key6": "2uj9V6AXc8o1Xem1YybYfn8dPCz8kEHKSLKUWW5HyqVVCpWGeSio3tHFskYDPA1A77WK8A4JgufU1YHeaT2YBM8J",
  "key7": "JEkRa9URJTYgaykZKRfqKXKs67z46xbLEK7sMB3iukwCnjmLyDbtPVuCXTMwmsTqaFqL5iPJ81Jhqyg6e61dFUo",
  "key8": "3HXgszyEAg74szKitfkgg6YdpoMsNGWiCNbm99kuk9fvvvz8nRN8Ff8XQHwyECFoYfja2ATaU4QuLAuumniVoqyz",
  "key9": "2Es7RGCxJZpbpP4gM18ydCCVd2UupBkwEPhpbmw9RDVe2Abzjun3dynijs32rbGbPAi5CPqMsbfBSXTbibLTkPMh",
  "key10": "PqC42PnGKm8JtxnYpX43NM7JtVgkrESx8LhonDEL5SyPJizAVKm8qvoEGrVzAJEGsL3iArrURfygGN3CQx5qnCR",
  "key11": "3q6sn81jXFgcECLv8oeL9EnqFy3uew8GEVFXmuauPxS2hLMjbRGmUr8aEkaF9CrFdcu91WNFwpFpzdgGhh2MqFss",
  "key12": "56vXANNcAPUb8FAd5ZAP1heNHhQ5tZCDbFqGe3PyiWHQSuf81kS1oYV7cFKLo2kTGnTeFwoa9yyq64d77r2S5Wq",
  "key13": "3wGnwQsQkoTVwmjiEU1id835HGj4u966VKwtMPQdjGtytp2MbUyykj6eLN8ya7xg7E3N4xu2f72Z31y6Qqe6azrR",
  "key14": "3VMT639aDhB3invybFGbcHSzL12v5zZavV5KJA5zWp9fW4nLxSYhE4Ec43Xpsr54zLYyNDLG1jFefJGDCzGSRRhX",
  "key15": "3T45PPDWiuaBgfSQRWruJWP7zYsR6uLw4gGiofP5xF15iVwHdsiSXxsVstrbuUSXGVva4L1ioExfsCL6WnSdL6q8",
  "key16": "2knGijMH7hL8BtasSvi2xUCLqaUdBbfbt6Z4NBr3pDj2VSjjTXURFki8etb6h6orBbMHXbmLpog8kb3PgjSxDzwG",
  "key17": "3yvXZTryHF4LPGXREQKXUQCcnCVgMBszCac23DpMFTcAkMaF84hmQeBKJvibnnjktVrm3nJWJpbQvGZvHcG7xciZ",
  "key18": "4oLjjR69DsmfTLJvMp4TQnXQKo5eevFZ3nBf55DpZniAomww84whSA1LsGkAUPRxUR7jmC2wFDeMBVaCf3YD4JZQ",
  "key19": "fDWyWigDF8wYwCkCvsEa9ohpNg7uALk6d1Zn9M4REHVPius7hTDpbsov7hrDz3UztYUEq24hnDgJVwr3LAjnrh6",
  "key20": "24DUWatvWTcL4Z9nLuV2joYA2M2piGM5CXq8mcjyxzvofAoz3LsCuetAX3fgpicSK6DX1TewLfjwuPiJ5FvznQT6",
  "key21": "5z18xRAdUTv2MbvvRzfdfPx9K5FE3zghqDK82tizjNXULHDktm6yLvk4gMy5hvwwgWhzHjrkUhN1JnsqTrgNy9FX",
  "key22": "3XJZQxPSb96rkbRPz56sPNtiSnm5283psbWMfC2UYr3GF447Nj3NS53k2AWw4yJmnXwzzey7MPfijcFP5bTiLZ16",
  "key23": "XVnph3YcFfriimyztpYLNPRB5iGSRiWS1iEqYGJBZhNQXD2DkJpD3Lg6JpAs7q3zXXV5g8uLS6vjubPHD5DQLUc",
  "key24": "41yim1nuV4RyCVbhuDLdpL7CTo8DqTHHkXyCDr4U2i2oHnr8HYmYJaEAQ4Jq4F6r86XNcwYiLkmFVVw7CfkMWUYz",
  "key25": "2xzkxiXXTQxN9Wu46VUar1F2mqBX6v7XzegMTY7tF77guPncMiLySsgJNoB1acj641LvnQKpS2wabm1Vbhwfw24A",
  "key26": "3mvDzKjQkpiPWrAt21qUvycturWSKtjggoNEDaoAMhdAfhXeagX39SiW1FE3YoAiqoQAVjbrbPFQ9A6QPY9sZAvj",
  "key27": "4KZB3Q6RnWT6ctrAju9JHDRhqpvWUsr3CsmLCeq4o7VD4QYNY9dTqdZaRwzKLgngqLvsn7Jft6g7eFf7Ljmw3MWN",
  "key28": "4EZ2bWsXbEfujeYjtSZnCD6RH1TxGqpVWmhVW6FziqBAUBcV5qiByM4hWZMsq4Xhj8jw2i7m7SJpBFuec1q8bNkT",
  "key29": "57e1W3HYfDuNKZ1SxxBR9aDuQXrZLthj6Yq1xZGbYsc4bmrAvbrpX7ZBoGkMbGxFd2yHDhac8bf5af9s6ANtRUtj",
  "key30": "4Vj6aYmv3NadJRvoMupHzFtNydQxFWehTWfiTtENvp58WB3eahaqDpVVsNKberK5kGSR3LnTAkY2gMEFtp2Hsx1",
  "key31": "472cGh1LcyjWipou1uzJXTuWyJD5XbtAZK4nxwzYiTTGioSPLD7TrM34igSNcDUJZiiqiqwE5a3VYfVQn7wPQqkM"
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
