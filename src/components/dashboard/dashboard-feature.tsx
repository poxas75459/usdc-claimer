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
    "2HAEKbswwSkM8pMuLrgjmvCi4Waw4Z1tuM3SsQFEmDtXPhFHay3ANVa8kQrP42q5jmWzmdF6pH2pCKs6hXGvqCmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jDz5meqPXYSi6zTRt9CB3fsf3zUWxpD1Gtxrb3N8Kj2w31sgXGx1jhuwPKdNEyf3814fnb9LLMLgG7uSAj8Hyn9",
  "key1": "3h5VT1eLo67RfkSHv2s3uxEK5HWwXb3DbmgmTkeRYmnZut5Wg9JSacE5W1c86N7dcz3HqLsCytzPhRs1p8ffRrr2",
  "key2": "4h8oP8sNPsjNZdcutm4wT8Son1jf3ruUQhmsR79Wrcx1wtnB59Jr7F1Vm9yFAQMGByFueFrem5fq1TMH1DagyP9y",
  "key3": "36YLwfWUebRwQhW17hre9Tsz6niE5W5HTKSui3FTEyYPvgYUkqYqn4TQsh8CG1hfxrfCepvoo3FTkcMXXV8nurq6",
  "key4": "XDo7CE1SS7wTKVbMRUCidocLde6HGFGnM1qCpovpRXpxxeQAP5oj43oGuUH8cgvjE938qxncfi6BV8ECBnvgmWw",
  "key5": "35vmLBHdaC472qj17XRrkk6qspYQHiH9q4jWxx7HUqNwJQQFbSTHjA48BHapGrjhzdbXpJ8tidioKXnZLzn61127",
  "key6": "4XRVn97Be3eyRsz9XWKTZSiqgWSrGv1X3Euwzstko7wKMA8TQs9A68W2B33GpPNYvF2c7KLMyXfZ1ygXTXj3h1rn",
  "key7": "2J2CjY3MT9pkfusDUbq6ZrRPPDxYhUkycXv6tAZ6c2mmCBDNu1kq9FVJ3eGKUf2oe11LuixdWw7aixBf3aSNVmY7",
  "key8": "2PK4iRhD3VNpQgPWhVz63zmywuzB2D4Y6wdN6Wovmnzbp6aR5obe1E7Tsb92sgnLxQK4aPAZu1u45apJqntWDiCW",
  "key9": "3kDw5b529JeNJjRPQZiNVMyptMBZY3QiwSEwfMu2SojABxEPaXoTydqcuPE3sETSZ64MvX5gLgxspubXLDPiz3sD",
  "key10": "45XaY1wA8TFMQaZwbQsZN9vmPdwLepHfFcmaPax75iU6Jbi3MFMeMoexwkYTj2kCLHo7C2B3okHDBhuKeTX4vQFS",
  "key11": "4SeGm9GdHjT2vW6S7DPMrRa7HYk6UJxfgNxGxSE97tgyUY2k1mu3tKJqCb9vnmyNdd3BZEB8H1xegztfzuZp1eP6",
  "key12": "2AwvqAnazaXqrr5ap3UXN1uwgwMkiMayQTNtfwNQ47eSRqB1qm2FisJg9y9yBmmozkVHZcQErZL4RvmESwBXFQSd",
  "key13": "35iYhrDa1y3bBTpNC2uHjcXtsXgH6FF12NnM6ZD2cczRBeYAhaiTNUCGJqaWTUrJXQ4MHmf7SCpiuiaZEdcXwY9n",
  "key14": "17foPrv3uwcEGAhyGLT5gkeRAWUWJkz7Ycgc6DvbnEHxxrneiF4tCmQr2ZxmynXVp9XVLC47A64zmqge8QTMh8m",
  "key15": "4Bjqh4fykuMhaBtwkbgKcBz14UXVdxnponGHdpiEbqVoxpD9MwkYt93vdxQtcpqfgT2Aamr3MTBNpNAqgbVhQ12Z",
  "key16": "2fAjBbmfhakPagzPwat4z6RLWyU7MPPFEQxDu9poZAw4LKyGKcTW22C6XPcsZeMNZed6bXZCECZNcdybetjopRmc",
  "key17": "59nKmAhFZN7GbDfUYbmq2uJW91Ztp41o7eBV9EuxhTqDr6jb5CWwtM7fE1KyboiL4P9bFLB4dkk8eCYgdhSsjoGw",
  "key18": "hq6guaLn9uKofk8ZLjbk9Q6nWbQTegbg14GZojL3JfGz4XFDFhX8aNb9XM14N9GXTgdj6zbaXsXZzSrDKGyLpnC",
  "key19": "4yTLCmFUV5KiBD2gG6CgcWVV5ew1rnNqE7qYZeBn5UhnY8PBmE6bSj8unCxYnpwADDJDXKrKT4b5v2BDCoKJJyqT",
  "key20": "Y5NE9tGsAVna8DeM4RtMmKQT7Mk3843a13pnpKyxU5ysNcWduR8WUMw1N7x24XenhqY8oddwjNn4mywL8EPgP9j",
  "key21": "4AffKKofxMnwLxeNq2LFXUU29PWa9dGCo5VhtmVkFXJAuEfbZTp27wLoTQbhFn52RB2PXSvuLuUH4NDa73yfSf2T",
  "key22": "3KgR3cDMGic8PyVzt9gXoBafijGKEJiMB8TkaUnf33qgsW544KtgLH3x7K3grrvB2moie4D1ApSLTSb5djTbZzmT",
  "key23": "4otBffynPPSdhDzNxUTsnen2xjsASnCWa2z16nFJUGN2982wjTw121Zu1u698XoShTvsjWo47tHyBmHK8s7mbAUU",
  "key24": "3Wzc9nKbU7neYPVmxmqggkDGTUuDgWQAuZHWzfq4ZvDYbqbeN2TmRY6NHpozq1HBryRK3xaWhedAL2sdzoeLp1ij",
  "key25": "3PDQPMBGPNyh2sHMS57iCWqe8ksiNbHNCE3yrADyiPT4WYs7LYTLK3BeNQbEcTYiMrSmqVM4m4yAmeSQiRw1Dmth",
  "key26": "58rkmg7o1maEQsG4tgrr6DBT38T2hJLtGSDLACbnrFTDSpATM824kAw95FtGSJcG7n7GJ8K2VgpuyR4jHtapqX1Z",
  "key27": "5fsKE1NE7MoYQUigH9THa3ivNL4mKZYBq83n54VFdf6dYBNBz7UqwMzV3AKW5ZRWmY7aDt6GZPs4dSeUHHRFpMzm",
  "key28": "zyzmyKuwowpEyG8vjbBzdyCCEK8ZoW7cG7kmGU7feqtUQdnzVk5K9oT4eK4BqvVmuiz3s8X2eJwSisjLA8ryYCk",
  "key29": "2R6FKMrCDaNcttJLBvsruwSxunasGn6T9dBh4G4LLi4e83spUyjqnAt8wRv9EzqPdeiE737ar2G8rv8QSYcryoTX",
  "key30": "49rFegs7JxZsRnWE6NgPLSGeaTTULJ38VQw8nGquqgHfaiHUEEaGg68XGKsm4jgw3jJioeLc2wmhz2rPKrzipCND",
  "key31": "5FsKkKmaSK4SywzgteZD3Kn2uPvidTge5FLGd3ScbZdAoYb2B2kzXqdJbbVbrPr1fhGSGnwjPyNN9wk1UrvDPQy5",
  "key32": "5Wgh7R7xHhtN3TAhrJdBURxrARpjycbgFa33t9ycvcok2WyspuxDAGHPfpHpsv6pEt5i2nTghBiMCcGNqi9oYbqH",
  "key33": "Cqps2ckkjXPoxwcMCdeNLfxqvbhzPSKstv1YuuuqtvJu5LAtZHMBwy6BEXMfM5shWo5Y33RdAfL1Qdjf71mtUTp",
  "key34": "3Z8TuUVyNxDg9uQdFiD839tDUmJDQUMzSatb8zq82ReDxW683j2dVQy847HRJxL5cQRx9UjSKVQWQGSjTpQrt27x",
  "key35": "2T74WsLAQmmfLu3tuxxZNht4UQddFbmhajM8oYk6xXPXpinqEntru969XmXA8YBk6hfYE342fa8H4xxcQDthCU4g",
  "key36": "5mRLfo3AzoVGU17zMdf55683VEcVuYZGPNvU7MvpRWXz5ssB4LkzRC22xtweeySGTQavonWAhaccqwGPES3Rm6nu",
  "key37": "5fmn8vhc142awPDhuRDxsWvrdjfCU188txKgSWCSJPcqG36sQbXUpfDdXvLzaPx8rZrWxje8kFjryrxT28y13ytw",
  "key38": "5N6u7pHaVvS6u6bKoMLkUqNGMy8oKcqm2ZNf1BmYwFZnj44k1HDdyk8gb2wux7v7A5WWdp8J1aMJXmGe9r9Xk5Yt",
  "key39": "4NPuSDn4a2DS6LbGLSGXRMA8qguCgZSjbEmrG4t4Y4dTi19uibvwaVygBDjffWfUZyBvXWSRsx3BQa1aJJTmeoA7",
  "key40": "5uWcBXE3krjUxGusNfn5b56zAMfhPdazD7RRVu3v2nw3JpBX76JRo2LwsWQ9SgXBwRCw7RJCcVeaZ1JY8x2aXwpE"
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
