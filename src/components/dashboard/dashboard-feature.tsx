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
    "51t8QcHWubWQwokP7Twf8qGLiVFHsELoPcMV34BoSwosfh5MKJbVvRgWcHQgTwjyA2xtUvvE8TNDgHdvdVBEfd2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "281iNCf2eMarZapdBXqBT4JcUdx6BkeoENWrjorQ8WmxYbpuNxujD1wq9kL3HRCynVzxXajfzqrGBwuAKvSTPrTm",
  "key1": "3XPsxpTXKCR55L9dbwiJMG1xiFDBGsFFukZiDe5D9bWbd4qN65AY3TZ9UUV6kCkU9yttVErNHrtKZpFoLtzPWe7Y",
  "key2": "3xNt5P47t9sVYaAtGyQp5CqV7Bd5jvxZudqVKKMdcSXDwxMGNovMcBw6qLf1fRKe5U7xNPWsG3AP6H5dTb7vFZPx",
  "key3": "5WscehbXpMpLKzkMG4BtvKv2qFYSeaWLHkPhfsKvnZJGBzKMXi9H4cbQnezxSMnGBZGKY1JioYPYAtpzYva3nzDy",
  "key4": "3pupPS13KFm9Zbni4LXugqEAxG3nzCbT1CLR9vSJKUEY5rbbuYKMSRjdBBRxKe6rc84eiWC7i3zBZCBN2ALA8yLw",
  "key5": "2JcdCTBSC8P1YGuLUQ19JXusH9jdbBU81ekvrzwLd5LLH9hYYwtcANRCAZqHTsdV52CKoe4dswRVCXUpcgsgVbsN",
  "key6": "57dhbxFjw3PRS18XcUcgAEj7ZrZjbUhACtDf55ZeKTXiLi22QeT8fukgGiCJps6zB19LTzB4UGcFi1pgjwLYgKtZ",
  "key7": "xnXAQbhDe1x2U1Sje1965spR32mHaTTTkcwtFxZtf2GxatgxeVLMfv3T24Ktqm2QaA1GKFaFJr6esTxN8ufVWWD",
  "key8": "5JX5A9pgR67ZdAxn65SWWMdv5pDw1LiFCv5nWB7J9DQQhDU1VzBgPguZWjebnd6hH8AzS4TAGebEadv8vwBhVQku",
  "key9": "J2hVc3M4yVPF8v5ruj4YjuJMDyjHpfNpVfkFw9F3LgJBXehaJvjCJbCwP5i5E7u2a9rMEhp6LLrmF6qgCk5NL4X",
  "key10": "418Hfnfg3bazTfspcpzuijW9HDgx6NeCxsLCAF9a5eCAhoJvHmF3xWGAQgYzNzcdfnQ5bjoBJc6j5p443scuDeK6",
  "key11": "2uvaRGLfYT5PVngTc8ZoPahgYc31axeYBMFQQTffcnrGuFjZeMtSMPkSYC7tmzm8gjryDJ7UDNHkZycggMJrutpv",
  "key12": "5z1keJAPs3nHNju6HAUcS7jiL4gbv6nF7YWLhWGLzV3CSfKkXXMbz6QQnzR1XoMK88KuoRaya7xYkFA6CBVWZY2d",
  "key13": "5xUjn6tLPt8PWASKAZz8nXxKP6uJdYFSNFUS5iKFTSRJhL6WwXFg4VBXunQHFsydN6uTyWSdRgCVctbWpxmWaVex",
  "key14": "65CdkbCdUUiA1SK8qtxEKELbkrD9yereztSjMy4Fb3XHHsF9rpVcjMqByV2b9qLFj13TAG4xWCzKvAZqKV6mZVDn",
  "key15": "3qfh8VY8EAhvVidLpgpCT6K3p817zQiTgXPKYzNQ7MPM5A43dzQLgrhx5ammqm7bD9P1j2mESGq1ALZ632n7UtwZ",
  "key16": "4V7w4x6NA3geQqzazhM3VNYzwuamEibz9ngp1rmPMu5hmhU79Uxzz7d3Crpbwiv9QHDm6Dp9YMudUrXmix4gHfto",
  "key17": "4PpHxAF7fMhRZTncoiXusH2noZ6SovWSubunV1RxKGUr44LHPTXkn8Zk8TF8sBU9pGSyNs7z5CWM35YmjMrfudWF",
  "key18": "4TKHRaeX4rP9952hfKYLW65MRvPbVpdq2d4hMehMYHkkxmMtWuv23coaEQaZ59EAC3gXyLV3U2XfXx3AkyGmiq8s",
  "key19": "55SNcWUtQk6MUDnBC8EZsA3UdAzEmWpLmdWvzKW1uT1PjUGpScAzgYdgonAoqP4GeZ5YAfxE1cbcpuy5gAtbNBDQ",
  "key20": "nCCmFtf1z2QDXMs3Q5RQ9D7DM49Z4ecumwXUNcbLfSqohtjwpzroyoFWQ28gBgA1MskWEfqw3Sv623edQgq1qXZ",
  "key21": "WKDpWZPpLnyKLGdor3gYjG4kgW7Jb2CfoQ4S4z97HWPZLss75PreC4kvqNjJWhR4g8awUkTb8W7imK12ACSCYwD",
  "key22": "4n7j529Cg7Qp2bg5YDx2A3VVHLmEyx3ACV5J9qq52bvVo2J7Xx9jZiwZoRN6KecNbXoNtu4EP3tv4MAEJaakbnTU",
  "key23": "64oLyypQtZNuja34u7NmQur21sAdBRZKxsbekHGX5tEX5rSDnd2Kb24unQGcMiGAgf2xKpYGShWucVfnwHiK7sLN",
  "key24": "2J6v35eN9pp8MQWhsqf7PDGZ6yiFRhm1zrNAygWR5eQL87XKkceuYg1A89E16ia5YFpRg2pYjhbha1hMgrVGRbde",
  "key25": "3SwsWpVTqJDUsVYZy9AnrX1n2qZSB7k9DiB2MgV9z2s746R2QtrZmuqSw4Mz47GcyxjUyM3d6eDEurBD741B3qCH",
  "key26": "2faUb2XfguiUSCuRTMwKiaZfYCcqtYAy34i7ztz5PuGspvXWtz7PfHDxrnrNnqLAPPneEtz4eiUahEDkTsR4a2Ci",
  "key27": "2zmU9hP3Xhbh6LCjnPUnQL716x5RcZX3i3VEPgHz2mmgTfhrLPcQMm84Gsz7hiXvsXhKDsKKouUfCh4WCCXksGaf",
  "key28": "235FbtVWuZWpKatS12HV5iFy1bbNPjWN1GVLPTcLGHG9xPMc8wJei5gStaMTwG7m6Xh71YqvQFy7VyQDPQjCJH8v",
  "key29": "2CcEcymW9qh6Fb4fs5b13SHNDcjuzF3MowG1fmjYdkNJrmn3YsZggMVKr2T1VNWBTqwBHMCbbF2VNHmFEau2eVoo",
  "key30": "23mY6hdfF5ExLZELGkGBNUhzLdDqd8ZCFtuW6WW57pB9EJP1jENksvoCtkgcYdTMQjZmUDUCJoJMFVErJrmPS1rd",
  "key31": "2ZWLjfNZWpj6Veps5BHbKpowGaNZm5fGQH7NFU9NVHBEEQhnNQMTZYZALyr3ycVWhomx2qfm3iAyLhp4j595TTy4",
  "key32": "5rFyD4QiDxZNbyXSYahXDsySPqBMDJ2TTU4m6GZetFbVKErZYCpzb5WMKd8WER6Akbh5tdoudGsSfGEYtSHp5Fd8",
  "key33": "2N1zZPyTk5WsBgNdoXwthSCvxncEyyaDTEMUfDjtkjgaLqCvgwWxtL5ivCs1FnQbniVdcWdoA6EmkwY3LvnqN1yS",
  "key34": "4KZW4KceqDZwUU2BbJivRk8j97Co9hehaTggMtYyKmTQGdLk8WZLJRPrFSZpfCLCLk3DG3RFL4CiT9Mg2YbcgQ2Z",
  "key35": "54AhZm2q5kVD4g4vJj47ccZ5GCLFoHcAYkw25QW3FFVd3PccJ5kQianffiHZUivLjnJfCVt5QFQi2ejFRDoGgt3Y",
  "key36": "3WFcnYN85MYwq1BgpQDghndPFWG2BN4KNrB8LQCFFXS561bPuvpkpPrjkFAxwGbRWmykWvFUb4DYxdPrcxonTYNQ",
  "key37": "2jxrK73Vfqtdzc3uFR9c4KwtHxqW1FjPmHqyw6GtEMpmoDtXXTMtVPBNNvtY55DTZpiYkRwG2bjqnVNDEar71UF5",
  "key38": "64FRi5NvaLF7uhrpUC5pjtDjRm9NpUagiJbTBbapsPxWvt299b5B86FX7t7oi9AYnEkwN4xFXKzUeqqHXjUfLHyT",
  "key39": "2BYsLKbZws75LFrKocTk84cV937j9FNF8pW4oH92gGKDSnL3giC81ikcXAhKMheVfbqkLJ1RnndziV8NhB5dSPBA",
  "key40": "58zpWTeNKq2CF2spoQ55kEuFYbbANWHkaV36pzSTBCeHwfau78fPjtKtcfVCAjXujKXDCbWd3ojPeVd6WH3ktnzf",
  "key41": "24Jvcdh1FZbSBRbxdUyAXor1DXnGzsNpuiKJnBQwaAtqHEL13fjU7sp1s3XM9uuHizTyYxEiARosNBPDqbafjvbK",
  "key42": "5MmG1UG962XnK18x9MiRaprjNYBCs2NaY1aTU4MDiNzpZqPAAnGhm3yU3L5Py6Mvyieyxz9fi38EnHUCYxpYtP8N",
  "key43": "fop54uB8eSTh5VGZQNtk2Etrwcdmhn3ewCSGV115YoJdZRJoK8J9jfVBt3JpbsUAmcrKdSz31F9fvUqThYCkAJo",
  "key44": "4kQhyiduhaSBg1EVPxwwLq8FLcgBdxevjEyvhRdjjVYPjoc2Xq1qH2g31XpLmeoZnUczod3X6hWXVvD9B5XiHjjc",
  "key45": "7ehTYefLeFSSWpCvc5d4SQVkPZn7HkAX77z5WrpYxDjjhk36YaTqnhvvDeiSR7vV8qp4mFYTnAHoqhXinuUrcKo",
  "key46": "4846nSSJiVdNrogaa9RZNNhEMsn3a7QtpvpSwiJGsA1nMm3WeoeAzZ4z4Z1hKGp2DS47B9ghhCNTb2q3vt7sKNv7",
  "key47": "4pLNCbi6EppZPE3pz8E5pD8jpma8XMxPRCDyWbq51uVWNhHNjfHcH49gnLTTYJAeVAwAU3gaQUs3Tii3h5yUgJv7",
  "key48": "4JGMnxHBdCMz6MkLyp7meB8yu2P2V6kTfeDWXS6XxWkadrBG59cd6XEEPcHyo84AdyTpuWEUevS3TPczvDiXswCJ",
  "key49": "2RrAtyE7gs5cU68aTTKxbjn7RjzN4DmfdY1gX2E7yZEXDV9WzaAGhAohq6zC6n9kqVnsNsqEGcYDawT3nfDMbFnz"
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
