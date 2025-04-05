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
    "3jpwQRao6vNDf6iVYWCiGyj6N3NrUcRByW8K1cjudjouFPaNr7VDceQ729fRsGpQB9dPbSW6gZBhCfuyPUGHSGu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WPnZV3icVXGhyZDxqMXiC2rH7u1QEh5A4XoNgPpNgQhHoiWWn2bhfQPfCBTcKE85xgT7GHa1Ft7NRfSv82ZiE9",
  "key1": "5vcR5NVu1tPgVb9GCcogBsrXR5fUF8Hb1SJ7KLqniqBV1bpFpnk4hgzaVQ5c6X9swjv2KGthMx6EURoaJ9zTXFZ1",
  "key2": "5YEYq61cqj8yosHtRaXWNdMoWCrhcB8JTbrofzr5HWdx1WADdHu9oYKk1G445fpL4fBVtkhgQ8UPswUqr51628jx",
  "key3": "5bnsqvVVJ4dbHNXwhVrkWQsTUv73nsDtAEwRzMUncQahatoXiLcEhXTsFcSCCCB9NMCYa4rvC7fQyzwFuhXKwFS8",
  "key4": "3jcBg2exLX9kJRWVeWuNsjSxG6Sv3mqmXNAaQ2S5LYDri8wa6497KhE7136TZJ3GuQxm9dK1UzSDE5kNQY7YpPHi",
  "key5": "3WR9WFhzUQC5wC1TpqkhKA4o1JTceXJjVvL2XRAFE9whNa2WeMMcfcsF1BzTu813ddFXNgjK62bG7Zr5ecViDc8m",
  "key6": "x6CJrH1MQ6mroDFnBMv4yyx4cQd7tZzWNvm2eBiuF7sAxK2w1MKRocdxEDd8W8NdYWXuFcZc7WX3epfQSveWUre",
  "key7": "4FUzrRSoGoWxyHFPNW1gjc9XLXJW97JK8z2y7vbtPX9EypWGiD5UswoSQx67pK7AJAN2Kp9fyfKwWmJANdpRUH2d",
  "key8": "RX1X5ETUM8b3DczFyAvNbxt36U8LQSzRSUwc73fHbsbj3S3e2XDCT8CcrhtjSnN3NHnFpVEAoQebSTZfD1fqUen",
  "key9": "3ABoLRtbiP5JJ1TJg8evQyS5gLzC6ogzcAcMSTLfB1eD1aeHyrPZQFgk5ScKZ2opWSN7L6wmd5k9Lfkjoxy8kixq",
  "key10": "2tzU9i18ijHoLCFRMteKTS3aTuJimneMGx5UMUUvTdEQyV5zTw295AVZTz3xcme7DXnKvwN6L8UETAy9nYLzvTum",
  "key11": "61xqQbWffEruoez5SESkMJW2RM4Hf4WJTrCi3prrF7WbymFZ1QVc16LkUJbUs7ikEBrDKMuAhDCNz23ezoTiJJZg",
  "key12": "3LsK3DuRLdAek5gwM7MakxdSAnqLPAym2HuvazRgfPo22ZGf3hA13Sfiy2sLwmwE3BTAUyCCRfnXxuUj63dvab1Z",
  "key13": "519yEazRdr3rq4HhfBSP7TzbJwa1xHEzcgPWs12dDndJvqFgTXDV7vNDouvenQNbwadwZpdWbsGtGhvTWWmTPShz",
  "key14": "5vYscJPivugiVR5jdwiaVn3EdZhBbN2KxvGQWxDyUofQEgr6zNHXP9AwwikfAFr5cjjnCSjLFCaRuq4U37FexX2Y",
  "key15": "fDXFCuPn44JJPjeogZJWWSYhbbS2DG7LSMMHfYtEAnN9VohgfLStd8ukdakMJjVid44YUReyY9TKnwLPgWJMqK1",
  "key16": "2tkCSedvEW7YFobhUk1H6zsqFRiPFGoBatriMwLmJdgFZ6Kn8818eudqoNFsrLGy4t7Bs9fN2agMn3WvLuX5zK7u",
  "key17": "22KWSbNXNzHYEKKD2zUYGJXww6EHkVfE5pjikMMthoqLHUW66AmX649PRyPu9aWQ7A2QmB63sZ7zB3KYm1yPLUUJ",
  "key18": "4dgaupCjHrEtWJcUMnZGgLTvft937jjHTEBjv6BPDoKPnQgwdQP1o7nyut3FKQ5Q8vGPcNRMWqDs61ZRduikCucv",
  "key19": "4QXuZzyEwGzmNq8UZy9evUpfrAsL9mWZUHRVdkWbqojRma5hshs3799eF9RNiH5HkiKiauAFah2JXT3W3vFRrGhN",
  "key20": "4ja1mheaoYAR7TLDacVoK8MprQ5L57Qv7GpNRNJfKjmwffjMNN1RSfAoGfM71eE1xbUKmZsSvyiTSf7HwgC1rVBG",
  "key21": "4RhzxRXHnWyzBxx4vAZnRLV1ENvdSvJoxnmkQspf4NPM97MTjLaXiNyV5xnNSY74s3zwmFGgxbnVMZQYUYJQEAkK",
  "key22": "c6riCbuXofYbrSJvsN2H8PzxnufEHNsUoyG5GoossyVGkJu8rX2vYjV6TF6Vn9gWnuPt18WKbFksQK7hSWucoqY",
  "key23": "4fDPzXEN9eXLvyqNw9AD3a3Z38a5kkTixU4ei7QCGXsT4daeZsvA34fcnisC7HkpC5HrQQgjpjpRrgd9B6NwNa14",
  "key24": "4kaqoypU2jaFWDFdDsdHB92MpW2bXAN8pxAstuEfeFxQmwd2HXyiwrufABDRe82hKdmqpwmEW9iGhQTkjoGuyvtP",
  "key25": "4xPmY9Cbfue2mJ7MyStVZZTCBeB132bbVf7nGGpcbBaUbdPriKg6ThB8nWxTveZzPoK7NhD3QnhrKvQqgY59zSWQ",
  "key26": "2eNtZic5N558s7owrhbAQPnsfHYxAdLGzqgu3BdMJSHtBLeaW6L6BE732NKziMRqWRhSzjHyR5W5eT7SVtKdWaHN",
  "key27": "YLygVSamWTKujR1WwfFuwEkBuQ2h5m5fPtCwVVmVj85A6KkrpoJ9VQf8yUaJzfL3p7fbt8eegUiFFMdLdigd5V9",
  "key28": "XYiCj2dYSvAqJBUXisEssq2e5W7NoHzUo3WmayZ6dYu3MT45C9jPAg86PhGcDzm9p9Yh6h2tFbuZFCtW1zi55rj",
  "key29": "gSQxJGG8UuCPTP46YTX9u2DrL2yHxPbD5jc4kZabTxnNbkRzgGjDDHhnFvG7Ch3WFGT9xAjmvkBXGWB1HBAAKxL",
  "key30": "4eT538rVkFyCTSDXtLhUNEych7Nw3SEAFYtpbhftaHSRveLjVKrHyJ1vMYH46FWqfQBdn4JiuRzfo5FbDEL9qY8P",
  "key31": "3JYUPeoxZQYMX1NnnY1A1HvkGy7mh7zHYvdnBEC4XokzV82ErhEqpy8tmL5n7KjraXkSwzjDnxNinS7xCZvZcr7g",
  "key32": "4V4PeMpu6KBxoALtiqpyWJDHn7ksii7u1zpEMz5nzY5Cvk8WMK32L8wY8LKiWiXLLUtQai5G86mNQhbbgdgf87Uf",
  "key33": "3KfgoniSBbzLznGnjqHnTMw4YfpSEeSxeRtViDex9N6gdbkaN9X9zzRWspmE8v5d4av4ioXrUAjriqP7KS1oF2Uw",
  "key34": "5pnZ9UVaTUhbDv5JQ75L9eLrc12c8UUBrnWC418eaKdscErhVqSdRbQtTv996MCztNFtu5PAny94jcYaHTF91xeL",
  "key35": "52C16HVup1g7ZtHDpAgCmjYzQ3FqJzRw5cedbf93NPM4pwas2Fu5K6Euka8yBnTpivqroHNdH5eCShYFuyRQcZkZ",
  "key36": "9KVfDmoe2jzYN75rWdiJ6b6pFXETuT6qFVcmdFt5YYvCvVUf3xQcZUXAB5muNfK2B25AWTBHgpVPbFMf67yAVH7",
  "key37": "24NtNL7oFKThQLtWx72LNkTKN7r9JTJTnp1YhwgmpuH2vXxt3XQAa72qMzWBVFYpYpJ2kM8LXV8ZfNP1k4ff6nSC",
  "key38": "De3c4bmtzd4ACPftvcvUA1ThwCrqNWKztmPoBv6184nuiWT5yQipGtmMjXGwQY6JuqnCcXXvZzmwvtD7ZBL8xAn",
  "key39": "ZKRv2Nmg8LPS1kyfbDSWDB4Sp4hcEvN6jKaZRJdu8LFVk7quFt5K7vRBf4BpXAbuKqXSGGHrmy6SsS1jqTNjZvU",
  "key40": "RU3mTY7VrWd1PjDhi3sB9gUbPri7duP987yxMtRUAdtSfQqPc3FPEYJ4VB4t7AUe3JjHFPfKTsdQe2sKExka2LZ",
  "key41": "4URiqSTqTQFwMNt2Jgked7NRYm8Q8oYDqR6sjmk1a9HBXWti9TrwQGGqDzwuxNBCDFUgoyM7hLYcU4W5vJZuX5vQ",
  "key42": "4dgqpTBSxH6tkyxCfjTjFmDYyLAQCxm8V3ZAw1tqdhmRhyKyMNWJeBJNNBHzXfrVxRXUu3PZjmDJmxZoLNcHkCyr",
  "key43": "3mkmKBAGxhVCTVDdgek6zu9JFBvR4J5zddxdkrUZoxai33EQA85Cuq49P5jp9ngqzF3UjkH1Bz2HMbcw52vUyoUE"
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
