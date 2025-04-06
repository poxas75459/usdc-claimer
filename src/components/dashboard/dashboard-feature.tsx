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
    "5qP2784zK1Zec1w5xRSHXZdqRMgETKzRseSWuJRE1GwpGDgfdqWWqTMbXPgZCVHeBTmToTb5mnnHVFayRMFn8AWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qK2UrWXiRxvc3RpDGVQuxaGBGyHa5xamSYSU2FNrTV5EX4L3FZgNfTfbBHg7BLPW6obksiosuG1mfCXq6uzXDPM",
  "key1": "GsfEbP7cb6o7Js1Ruw6TVyuEjZPskZ9jn1GyyuBicwSzYE4bDvoiYum1YErqb94dp1AFS1LzM3JQ3Ju4kZXvzxT",
  "key2": "4kUAY59SYjRUmY8f7ety5e5bwQBiAfm6AB1gQuVsJ5b3ZsBurHN5cpcuMyMeHUYhjFWi3J2mGwWDsbFc61TbCPwL",
  "key3": "tHH6azY7EHTLFGRC3wdFuCRwbt6cgyQFW8mDWEne1auzQcq3AE2TttRfekx1WyhFTNkkDmFyr83mDiWGaBvFy8d",
  "key4": "4wJoJMhrQNq8KSXJokDuyK3E1u11futXtAbSMkXu7JNG76nc9fvTpXMBTZAXQPexB7mUetSfozXEn2UBgtJYUVNi",
  "key5": "4zG3G9UxptMzS7w7MKiyrPD26Poc2XAXURHD4HsyQhVsZGvPM1FqgSHk53jPSiVtn2WLENB8KxPfkkgz6fs6aPnY",
  "key6": "48yyJtRccBtk9jB4re2KyfCXTuX3p26ogKoWSSFfn3DMZEYRMYKknTJCvrgo7HpX6rcmmYbhNXezGU9V34SYLhE5",
  "key7": "2RJyMGJbM3rph514bHWXDEdEiNMCgBvQULy3UCU9EBQMDzxWKMP1BNkmr9T1vkp6gTr8fu2PLxe1TopcSmQWqV4s",
  "key8": "mZsXwjFZ8tX5a1P91yDWx3L5CqTogVp5dJhvi5GT49WT23tNqcFvaJkVpXoYYAgXp9qX29GAUKBRaZzdQ31fgVX",
  "key9": "2ejLFiTenH1GkUx93GihpthFeaVuY72xsGCM6wWzDupRJruD4rAuTnP949Na26H8mBxNY4gvG2BnYTNJN79G1mLs",
  "key10": "5SGx5rjXrgUCHAhEEcsmwMzReUEoN1BKSXWku4XnwJCxA6L6U4cYvn9nSbSf15SZ3icgjioj4FSrb4o4gcUXEhSw",
  "key11": "3JbuQ7GoAWQndaK6VSbjw5JhE2sjN4vEdRTGda28hCUSE18NSPi2zmsVnJ7f4ge3qRKUYVNSeJBaJdsoshWZVc3S",
  "key12": "2YL8QA6KK4fUrEkwvaQjxxzwPCrHtne2ocufgVd2gnhJuD6J2ybqG2JnHZqKhmPSYCNaLEEpE19kmDkxnHL6ib5S",
  "key13": "2HfaRBJZWQHJXm7Pp4ysc8jgqpwp9sj1z5TAxLZVKfpDGE3WwscBfUrTmeJYSgWS7nKv3VvwB9xcNDNcCvp1xUtv",
  "key14": "5v2KPo5Q4p3ZiqTWjiGSzjvbYH3XuWfgdenp6pNEoykRszpd8GuTjv3B54Tem4BCvfnAMidfLdb5jJSFjzC19opX",
  "key15": "4yRR1eLEVY4DBi6ivAQGzZpPcudmVw2TQHt8GcNy4gAYzcoFkLcwi3L74qNw4rAJejYSAmnKNyHs7dniMXCU1tG3",
  "key16": "2UN3Uv4RUggyyHbEc5UeyXBwNwcpCANQqq5q2787CgXpqQhkwx7h7VJRLHUTRXabZ5pJBHVcTqmRgao6CZBTBUR3",
  "key17": "3FBW69zNzFTFd26hoY6bLcyeG9GzbmtS5Byvrcx4mGqP3RUSgKQDAnRi1frkEkDo3Wpsnx9oHdmQjrRg3b2ZEHT4",
  "key18": "sjCSeCTrajjJuZi4FJvVEPc7n7vw8imeDt5Tx2QRzUY7kV2PHCFSoi8kYSutqvZg44nfoPA4TXQyNHfboxBdnYJ",
  "key19": "27DpfGPzymMz4nefop5Wx2DBkSUZHEcu7KP6SkMytTAuJNRvJLTt9sm2EBXjn8a3XktLDyrr4EDrPq2mTT33QNPF",
  "key20": "4NcPnovik7Mb16wbRvtk8ZsiLDP9TTu2GJX1KXzHD8yqTpr4ZAey2Q61KaUDG6VuYvZ2oa3aKRPrKqdKT8B1pBWv",
  "key21": "3YoZYs2n1BGirbbqBmAocUPBYK1gG5i63oBovV4QWQrkRYfK7wEL5y23tnQFLviB4sTWbgLnq7Fch6zFF6m2g2YD",
  "key22": "4biaBTupuK3T9p78qhmRbHUTw3av1uTjCvxmt2rzGP7rMwJ3m6Uat748WLzvMEoRzwqBGP4BWDoNNf9s2ds4ygZJ",
  "key23": "64VZWJWsmvaZp7pxPcn68Lps5S5UiSsVSSyZ7Ndac2QLrZojUMhPxpBNBbAWz36GeFDURZQpomLRJb5hKo5gERFD",
  "key24": "2dkWPCGmF9qufSHpHQwY4mqXYzJP1AdNxptEGsEVaDyr9UNNAkCoGmVSsi9Hv24V6GkRCNVJtT9hjuFBTXg9bAdb",
  "key25": "3rVnZBPnFdSAf7zfoKVg1zmLecUXEgrz2SvkCaNLgAciiY4cN2T17cRHcvFikT21VxfhiHR4WjqvfSrSdMBJWeRN",
  "key26": "5Y2EbndPDzBpfSQyqDGTtZNvqgqtrWDnuJYHXLX4HtEZrLJVbNHWBHasXZt4g3qUdRTz2MPs9iiazGujqbWidb65",
  "key27": "64dve2JuQiPEUJvG3G72FUVqy5hQzLBzKfCw7eY8rMJANYgecAC7s1v7QP2zXMY9cyxSePd2fe3VEo9nviq83HX1",
  "key28": "4WaexEAMYq5LEP7tzdF6vBe7jShSa3itPJtAeRp33Y7GxH4rEqViLi1oia4Vdqk7u7UW2LkWUDuvG7zbWADQYYq8",
  "key29": "2FZzdQp8zbFuAzbkY2rizuedPRshfZHGwe2eRKCUPf8WSu3QM4ZeWpg3khVEGYWA9brnYd3NamAC5Uap498eEk7e",
  "key30": "5i4K86twBAArYVmLJ5uPBteeR6mViBzGzhZaYyDUdjphvtBdUGPqc6xMSoUZCtnfZ48EBU7oQhkp1XCfSRBB7m7g",
  "key31": "4YjCiwJPJpWtrJUQNoL2VYsxsp5EFaFGJ7C73xuHynRfZFi9kkvj2iRdSkeULQLjSrbQGepPjTtXeGWWBE4qaYoM"
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
