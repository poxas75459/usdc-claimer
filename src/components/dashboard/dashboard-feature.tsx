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
    "4rKPEJjwj1FDhoMr4RFXRNNdojYk7nV3ikGKfg95mVd17VbKYuwupbKk7bS6hsrq7VpXvKFZujmGSf6D2stcdqoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FDbW3PLZQxWCiP6i1njTouJP8sYYPsdeKpGF4VeiJenj62oZeuwsxKLtH1mgJAt2Sq5yF58zx3ArmnusMeF8ec",
  "key1": "5LRaFKP82zzsuGEGzBGNBELxqk1hr4F2a4hkbH9cHvHvjnbhcHtk5a9zp5itJCvDNhCzQB1tt1haNwkq9mz6KvCf",
  "key2": "42JDGjy7XzjeqDJ4JF2sMipHYevnByAMNcuk66EBaa3FSbfNVp1PeQPPRCd6Nyf4W2aSq7ivTFSmeiAX2WjotXjQ",
  "key3": "2oW8vbURSNoSp4Bpp7mDxokjzi5nZiQ5spDGXZiEEzgzfF11asJcX2JRWXzWjP25ds9Er7gT7ThzadrgTsepYHP",
  "key4": "4eUSpXnhWwwweasF1EKZPxb6Ci4AGGVxCL8bSY6L9G74iDynsoTJWTpaWzEQH25Rjj5CrKg6KafbBQosVhffvt9c",
  "key5": "3KMsJFEtKdYYHiNfzp6nJ565FWTJYREids2kJcMqYFPtQYM7bPTJGhKMPdsQPF1ZmDdhWQ4PYb3L9YUSVhDnXVSb",
  "key6": "2LKYkFBGuwzf3rvXb2faReE1LSJx7QTqGrwa1RhMY3HuQMFhZrJaUAFcACeCKxNQF1cn5p4yEasZe4WDz3217ToB",
  "key7": "3Y4z6iMpJxxVP7bWcxYDTvJ5E5RqW5WspbaWuddvTYQC3uR11kmAjW8wtUqeisThUfPvboLiXZU5T8qL3jCLbHNT",
  "key8": "4XZKAjhXQNPSvkS5569L2qyTs2oBKzXp5sdYageurds1VzRnAExGoG668EepTQUrDBSER3tnXM536ZmrRf5AoNVD",
  "key9": "4JBV5u1h6XMzdAc94pgQGShgr5tdgTv2ccJ9M8RFcpidx7hLk8D17ewEEMSJgJTQQmKqH2FZZEVvgqXpCfSemw6U",
  "key10": "4N2x3WRydVjKtCiVLFHRuSCEgQnD7yayY5m1EH8P1WTDzGePxaWKeZi4Jc3gox3QmberZTQV7pXJmtfke4zMWDwS",
  "key11": "124zC1x1K5No8g2kEUSzfpDt8DXppcYbtiXEcZ6X3obrNpTDV7yuFqQbwUssbAuhVeFczUYYWe5Va3iQu7sHTnqL",
  "key12": "5U3DWmucHdwRPBwNb7P69TeKDoeiXHw9KtFKQ6NiGzVXJY1TpABWgcXxmzwoxDx9gty2CL4tYmbpgU471c1SQGtN",
  "key13": "4RsbdvYBCJNFi6ypmJuCHtYDqRJf3v4SSRj7fqYeyiUJKJyzzMJ7sZzEHmzL43Y8SjWN1CsgnUyEvPhzorVjnCcr",
  "key14": "P96RT3mDDyLBQT7WK7rUJKVdsb7QZ9beNbWCUwPRarR48XSNfzmgyadrc5VAcFVqs2Y1RYkkEvaW98rtiuAE7pg",
  "key15": "2cGb6ujtFhdYzEYy7RvfqqiK1ixA29mEEYinfWRNyX37UbBL6KBugFgPnBdenNdU8grfGhS64hmS92jNrYve66UX",
  "key16": "4ju6Tyuun8zzLLJHK2Uj3tyPYWoQwHaS6jsZFJkZMddEeW6AUqNmu5e8VpNBLPU9cmj6tHCwQjzQv7mQpQk9jxPZ",
  "key17": "3r5NchXFYNqwSjosvN7gqruUboE2P54LNemAJ1RXjM8UbEYSGp98D2B4zH8yd78LKJ1XhXqZVmUXoe1stEMdVEx3",
  "key18": "4DGnQu6BoniRaJkr1E9rmn3WxuKsqmZrFdsoxx1LjvgYMDgU8iEeAnRnfAHzuGDZuvMox8sKPagZ3LUBsA5pwsrn",
  "key19": "57Ry2TnZaSbNRuvWhp2eNcnajf1zQWC5NnKfN7tRmJVPWMsC1iwxCeHPBjuMQj2UWXVFkqnp5sGzDm27mFHTYZJU",
  "key20": "5kwhgV2CJ1zv1FYW8RcsqxjzZzKf64s6gCLNJaUScyxJSDwMh89yKaucDB5oLSNpe4Qp1ockHg8CpR5GUP6881yB",
  "key21": "ngjDcEf58XLxhTnXHjNieSon9fXx157e1m4yraHk9o2vWuH93heHqBk4BaHQpVYbYmS64sqdP45jCKA4YeUV47Z",
  "key22": "FV4C2mkC1xvck7bAR94taJT19SMbwFEm6TNfdSatPY1oNVzPrnPtKMCK3MAikb4PQG7gPtrXiUj2kewnBk5pxUy",
  "key23": "5qX679EhdNt2A5h58CPfE13kJs8veziRuKBoa12uiZQxpMNcgRiRuLwQ6PbTMU3cUW8o96JdG8ehVKPGwrxq8eMV",
  "key24": "2Zgwj3N9ABrJq6a3FiyhSn4pcMJ7qW8rUhgGLqzPTxWaVwy4RZknH7hyghNvvgo19EUW3nHxATGLfppMKQynXw5p",
  "key25": "5WvuvCicjjVNc3w4fdy5ktDzsu5DtD4muz7n2quNvNjaGyD2D9gBDsjNZ4Y6PxGhtM7PPZzkBDcXpnTLn2rvcyZK",
  "key26": "2g7dxor4AkApDw7A68yNwKtpqMtkhf69xCuP6g96Vu86GNrPeMnQdhR1RFEPXYddJvAJ3g5pwVYNvEawVcHLRKWG",
  "key27": "5Xu5K6UYT8QU7T8KCvFYFTfQgauusZGLVYfYFuGe8xgDmMFqQtS6DTNvT5rXgbSEsk8SgCC79ENBxpKwyWLqn4cF",
  "key28": "3Nng3cbGNdP8YmBHTkDVAyqvHvjcReQQnZvHu8EQLo1SLpNn9638f5aevYqwERLHJ8tkHg8s7Uj67rznbNzuu8za",
  "key29": "BZSpwd9inzMg5knh6aMcpqqvAhVKVytEpPiSqiV8nHSCAk9GXFFN8janxAok684U8gExb7s96bESrbX8hR32jnm",
  "key30": "37RkKCLQQx4SS71WEkGZwKnrpRvj6dqAwAcNbCA6bB9JVo4U6DZ6Zcc5eBkt6PqenS3681p5LRCf2mLBeLJSdNGY",
  "key31": "jxkPerkWAdSxAa2UN1Km6S294Sucw8Em3UYPc2skXvtRgSqP2ywaPhc98gEWi1dTMiNmRJScufbsPreBMW1sECW",
  "key32": "je4Cei1F6tD98n9Bi1Jt91vaaUxYhEQu7XABPwFCmLyeCKdjo9vAuDjHcJvDCfbAegy6UT3N86avMWUMc3EdWQc",
  "key33": "2JaAP84x6QQGgAtWoVcugCg2CYJCN6JbJ3hShScw9RXujbgXUigSMsBTrSwV3N3B42QsP26SPTaY1GuGAkmF43ko",
  "key34": "2h644xTP4opEXWSwH6wCm2zJPEt6osU8vBToJZAq9zN8u2WnZK2Ca3NrfSTZz7aZQKsbSy9u6QSfcFvFWNDKnzgC",
  "key35": "64PHHkzLvmKYwTPc82zTLBJNikdFXC1Ex4wX1r7c1nUV4Tk41dHkveeSj2T5S7RtBvXtThcAHeiaXq2psXkY29La",
  "key36": "38fWbkyoTzDzjeAi6VVXcWJQPQRqYD5N47c8yrdx1eH1VDbidcSGZvL6YYf4WMmVNcratTmDx8XDPCKGzzCggbVP",
  "key37": "5ttpYbV59LCKDA9kHq7GpPpuGEP3FUtcYLKuTwaRNt8ocWAMN5wDD29wJdAmsAwGanZVC2esLcmeyudNPDFFeovY",
  "key38": "yxpfZpMysm5hnKzczUagvz9Z33HoSsaJbzb2sdnKxyHkjT6QZm6869F3H33ND9AveawUENGoyudnJbhc14VYhhV",
  "key39": "41b8rZgxcCBZRztRkpZPGp8z2uhd3QTw5SCEAmahSwrBJqC9cYKpqakPV4cxr5YAP7aYp59RgideZL5MzNSDjD8y",
  "key40": "Zyw9pZMZuUP2Tcr1gEhahhEUGMbwmGAHJMux8Vb8DYDRBz3VcpeBbsWsxeojRexuFXXgGcC3bh78uk6DGhh6hEr",
  "key41": "2hw15pGQx9XqN64ackXRwwQfS1MZCHchAiRcuidtKZbkFCWT6WJXywCiJ8uGUJnPvttq1dfHp2DDSbq7hhr6iWn6",
  "key42": "zGZrJaV2Mjwtf6uPC9Y1YLo1MFXZZRLX6Y1TqyzVDctzz9u7k8UVvTiKZVqSKkKvRQrebfwEJGGNLLzACNRsUpv",
  "key43": "3k4RmVr3YbsxK9K4xGiebd553GsbBR4vi43Dc91SGQomcMzW2dCs3X283hZvMf2rQFQkJjjQ1axk9BMCNXgwyMhs",
  "key44": "2BPrFkK2LAcmAGB32LLjtkHMFtuKTDoKMWLhD4aqispEDG8DXWwfAcrBXhpmkdowNbh3mgJDCd3aaErZSb6Ns5ag",
  "key45": "3fFSBVazYJBhrrZXXVsPoxiQZRkpTQjFKmNAMHgFTzv1ne5SvYnr9LGbkPnv3FtX6EMadkCUQeahooaPPMJT5LfW",
  "key46": "67DX9QhqntTWBjgLW7Zha5cBWTmSY8wngX9XwnJzJYYwvFcLtaH7VioZHGWEHxtAFkftNsWzm9YpBFVa3jGxUzmw",
  "key47": "2J8qGDmnAyfz4HkDA6rqcgvTfLuovRk1EyQQ21Wy2aZ8CSJG6U6mwPjZuNxEwVEhWvf8XtgeYf12Nis76fev2R7V",
  "key48": "MXQfCqFgXkoadPMbwnK1U7dacG6Ut22qEPgawXGUYuxebkXP8Td7aeKrr3ns5gtxQKMojrM8G2N7V4FGA6M6XXx"
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
