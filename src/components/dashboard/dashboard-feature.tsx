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
    "4d93C4SFLpy8yqwcySZNGUdTW43KfNx7fGFWZm25J7h9P1Bn8RtfhbDgq2xdW6nuN6ZFD1h3rpUsSgSyUUBDHo4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gySuituc28dFAut4CUkG5o6mZHM3bG8Y72bTHZ4NqS32paxMakcRFMzw1gVFj7FtMAP7F1M33uzsEB7TeiGUGj",
  "key1": "63En1vY7yCpunJFBPjiHi5kG8YVZQpwSbYGSGU4xUwcQFrP7XwjFE6k7ZR3HKRm8k4CBhBepXVB8WeZ9w4Dmaz1Z",
  "key2": "2AbHKf1SgqEauEFrTMVAUMUf9Urnjr67WVAxjBeoew9SLzy1NzG26x9MJHu8xpeg4ECRHoLqcqxmwTEFLpK2zojN",
  "key3": "5gEEmtph7mDbDNKoyBs1d9J4HrbkddVCoMiGgS1pT9WeLZxudoxfH8oZoaqx5ePsKLWjCEy26muD3W9dJHMH3opS",
  "key4": "5itMGvrnii2xSQeHNKaRzk8E5uAFRqYwFFCMNMHABiCyUmcoU46NJyxnBHgkHHzSJbhzXecPNAXPeCVEmqDT5xu7",
  "key5": "2xhcyyiWupUsj2GWQojiwjunCSw2JKR4ZzgE87tvxV8QQNcKdEn5kjqopEsD1B8EPGLWj2txXuyM8C3GBrUhoSJH",
  "key6": "4pJQsMqmYeDBPgwWzzUrTybamniTyqi1GXVue7cpQZWesVMy9SgicRMFnznb2Y1FonfL4LToKtpHcaJC4LZvFkpB",
  "key7": "5v5sHXuzLRNktN4fJuheJk1HugzJfJmZqmqp3sdiq1qjpVtTGXkV4Qz8q21wuS4NspeCHs1e6181gHdadBtYj2rF",
  "key8": "2LDg36T3EauJctjGvsKwZjFEGTBac2BQCNZR68hdUShbDyBwH4qkGmzZHH8F8JKkNaoiubCwA6yAFzgAhZyuTkv8",
  "key9": "HJaNZMbX8vWWbWUfWtN9DHxsBbr5jdbtrAsJHjVEGDsfVRtvgWbYy11v9JsbKR5PjphGvUrGLqfjTXp7iT9X5Xi",
  "key10": "3k51GD2h9F1McTkLK6xvi8D5c9FLBTCHYFXseEYG41PcBDcmKW3GYBWUasx4wgP2TvFUXp6YjiHsszQf4MAXivNo",
  "key11": "4nHfDTTyTn32W8D1BD4MMWLLPvAk4RXCDmgrb1i7xaCke5UX2FquF3qnjcwfRVseEP6vo2zrHZbZznnTFDfzaCgR",
  "key12": "4DZKukr6Ad7vKyc9ujrrynBd5hSzwPx9AckBkozU4wTanMkwoJ2EmnDSfCrQ9ATqhW2Mf65ufp5zbPH5xhS38YhP",
  "key13": "57jGJxNHPuWCq1S3BtjMYwPgghVo1xTCqYKSNy3yhzkvTwy6qsy1yZA5cqV8Jdg7nJY6ocru2DFMe81oEfkQ5aA2",
  "key14": "jjiJoVCLovMSUmTyFCF3cQoKJKa2JoCJ2tyxWzzFLjsvkJxiYrJDHKuiG3gF7QdfumY57HzTWPzGGFwxkKbDEE7",
  "key15": "3MdpHR1bACHwENGei72QXQAgd8DmH8Mn5qs3UJnUg9qo4sza1iu1b5Ys5qKX7WYxndNGENZ8PDgJx8vvvGpESPCB",
  "key16": "yjQj5kLaBWK2vryTNGuGm1jwLvYwbT3Y5tfDGkzofyX4LdZqPrLN9w98PnZssEv3dDy1KvHLqBGRqN3akVz2dns",
  "key17": "2MMaFyuttmyMNv7tsaa1u9WPDhs2UuNPmnxPDMvz7d3kYTD2ydKVZ7FPQx4zx6C3XjGtwJWRzR8WP7E5WCXqApE",
  "key18": "MX8zvg3PVnyaX6W3axuP2UsT4QzR5qeQ6jMXxVyoEA3K5ZbxVk7ShjxD1igdLfhNC5Luy2HAoS47C2LmMVKKNSj",
  "key19": "5rsX8T4czZsZqLEwLLk9vV63QBaXu34F86BieVc95eA6F8gPp6nj93VsXbSHqdddTqeLg3RxxZX6krhrMnqa52Y7",
  "key20": "3RghGRxim3ZqgppGftNvzYJ63o8Uw5pKKY21KytEuVR32G7tTCM5uwwnZnQbJbnLcu5zLQRQmaX2poav3Emtt7ut",
  "key21": "3uNKWExFPRTzQzpy7FNoB2h4WW3UjGPmnBSjGayeXmWKFcNU995bAdDZM6HgFpYRQr5nhH1WX4QQMMpmCKJAqcKP",
  "key22": "3cARQ3gV5wx664Gw3cei4D6kmphwdnR12GgUdqmUPkZrw9Peuyo8G2afbiuNnmpeY1hsSt3e7PtazdVLkhfSxtHH",
  "key23": "5jRmApQgn1ybFgLfsjxj99MCXAUgmazQEUxJsXRJpdJ7S1gczSktb1fkz2Vhjhs9nz544VnWBzxGsixTtVmM9rZs",
  "key24": "4V6uM8e3GnDjpNouXHZ1TMfbzpAtH4fEdavghBkHzLQsW9uyTcaTSECHiATnbsiwJBkCtbFt2EHXJJUkRbm7h7kw",
  "key25": "41TY5UTqWVAbL2MA2ev88Efyr69Zo8FTiUC7o1RGwDZjDMGSMa8ihBe5TCNsmTmuzMdC4Kt96igFpTZvuYre1vSP",
  "key26": "35oAJA2gtiTJ41GguXTPb4A4o9j1Y4KtYSVFcJfi4BJoANfTheY3dpTmfZCHL8KikYwYP6sS9Yixi6GJg69M7zKf",
  "key27": "2wFq2228PXKRq1hAt4Gs2vkyUfQTFBC2cRvBVYwuLnGGb4tmPDEcP5XBd8J5JzZnjgKBbofMpGN4dLrN7TRXdPR9",
  "key28": "2WZy8vrZNUZfqomLPxUX5QArkNMSqdaAcm3ugxA3ntD9Y7yzvE48v2JXCoopEeuEiSNrmHbfxAN1Y5o4GNa2BqX1",
  "key29": "3QCQ5TpKBLNKkpqFvSAnJm6vjYum2WuQLVQKNZiK1ebhgi38WMFRzjkTPkoQnVpsgT143P8jJT9wUDwtqsF9A3hg",
  "key30": "caKm9gHH8KPCg5piG31nEdsUhu9wRjkgGbuLTLeDAexR167jJQgmcm93sP2HSpefPZx6Z7pvEuXmo29yf7twQY8",
  "key31": "2tbDyPrYAFF85R1NgEJwSKi4ihkNG4tQYqxuuuVqeFzfirrdBwoBTHYJwLrwXNQEdoUfw73xRuzcoJujuAHjuKdP",
  "key32": "2QzSmr5ZwmTSiyzfB3egwNHmq1zzsgFgffp6EcRkDMjEFduhKMbcWqhztx7K5Vg1VytgDw5g8eNZu1Z2kgcWY54T",
  "key33": "5grkfhSVs4EYKNKJ5fkj9QeATkBXHFVjYz5TQ44a4Qodb9qBuD8Rnbz5DtLS1SufR56RxdhoFAYHy4AGwbkzaYSP",
  "key34": "2p3sdQoeVbYYhRkhG4v3UL5vVt2D7cKpPGmnVnyKpa6obQKNRbSTjRTpxLcUnK2goyR4HZGTVkH4khtY3MZWoDQX",
  "key35": "4yxaXJF5xfBBq1j9jVkTjg1q4JUmMEuKFDdFeY3fRzXUuZM2KWPHq9o94CVKtFWBtzgjaG4qiYujxRuWXkNwVopP",
  "key36": "4J2dCyHZ7761MjhfxVZBHGK1graNAyV5BrL2Dfs6ynrNuo8GG1z2MMwEaZ7skx511Tg21TfNompwU1QLog5CPQqK",
  "key37": "WxpYnr6uuX1gy73doG9U4ZgcgWCan3gZcJ54diPWfihEbX18RvSrcDWxbkDN11qj9LGAjpqam8hghC3Qq9T3FeG",
  "key38": "8Ui3hoWsCD6fTq2zaZVzCBXioSpRK41yKNm21ULGuzwaFUSzeY3fV6hB4tCsZTNCLAtthQiKufE8xBxvP9SNmpq",
  "key39": "2syXTJaVrdB33dwrXDkEvnbgEhgvJ5jNyp6uxN9U5rJ2U1XwckfazxXPXVE6YfMyQv6LdsiikBq45niqpdfh7ffJ",
  "key40": "4ZzP9UraUgjZZ6ow32NwHzwjJ58ATEnuHuzBsHsg9REhPwZKqjMcYbQozz1aM3W5mnFbLwJqsSpv5xndQ2ZMcXBo",
  "key41": "3EeBo5rabym5YCK9e9adF9Mm59FC7UzjiFoHUyiB37bX3SsDPhv3H8LhoPYowyUqLUHaiYXmYvTLAiLdnqdsdA3E",
  "key42": "2jwg7G2FdKd8kvxVSZoqoULUAxb4zxuGVVaRsKVt2pMyScJtTNpThAaqcPiCeMHAJUethT9g4jc1WxpA3DnuaSCT",
  "key43": "Gf2PKLySwbJmVMZW5zrzJAFvLtntfB7cP1ht44EB9s7FXdR3xwGUsHhq3HGGneL7sUJ6K1tM5uAE8xmbua8ZuYf",
  "key44": "3FGb6oGPz1CnwKaBh7J2tGGgNNFJicyeJB8RLCRABq4UsLx7Nau5PsQTk5U7RR5A4JTQa5Wmfn2V2521fLh2FHjq"
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
