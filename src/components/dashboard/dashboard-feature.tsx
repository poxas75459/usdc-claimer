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
    "4pRrYnmkgp5dcVMmY4pRyjp7WVFGjz8TmzudridFE8ETUK8v5SLcdJnbp5WXXxEs3is9jBYsKLv8M5gHbajUZRRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5ueZMWywXhizApN9kTmCFAcpctX4QhPmavD4svbPhwYgT9NmSj2WP7rFAiV8JoLdd4mH3zavgzhf6T26KWG4gh",
  "key1": "3Xr8CR4YvPZCjUFK3gwxyo5xt7fjE6cxk7QAXtwY1vhkaPoPj4BykUEM9gmZHDEzXPsKT5g44sqsTw8orxg49wd3",
  "key2": "5FqDweTSnRGbRSFxiQAwudQFZy9cJDjEPx16T6vDbdBT4nhmoEYZrdT7sAAZXHpzHioPzqFy4eUKv4UyTAd7sYeC",
  "key3": "4frmRbsGu2kueMEygHe6cZwVXqq6T76ZHGVvVSDy3Wm3Ga8DGZXM9XhAM8ecUUEBESGtVKGwUW1n2zwZLhnqyF2r",
  "key4": "SjH3nvE2P9jh1Xbk3nXGmbKMsTdHfh86YzTxezZT3g3N9ch2LjetXrKT721r3Zggq7iAxvZHPCu9uf1PVufYm9E",
  "key5": "zceEfikqSDDnMVve1d117UATqsC2oVvSBmc99JEBSF2JCTfrC6wN3mcB1iSn4KWPwQFGpZmT7PCY45DjPvgbDhd",
  "key6": "3Xvj7LXuxUW6UYPJ4Wz47XjToMhM1pTfRRQik1c3KRQXBJPrHsc7DxuHEQtA8nn8oiN9x9i5Mki6YpGi3jhQzdHv",
  "key7": "tfgD3KuTxvTpMUidYWQASDyz2R6U5fMoxqAyoJSbnL1rkkJzXZGBxH6FW83b3yKtCWjqbD9MwTPyKymAQYuNhAy",
  "key8": "5DNwZ9x3iY6cnJbqQ5J7TjepFBf5FMdzPLTHtWFSM7X41kjjPRTQJ3jRLzNFPe8nbmhEemUkEF666ovpwKnT682t",
  "key9": "4mF76LzgCurovhzfEpGztF8XdMrYiGJoRh3PMByDzUTPzDuyPfkgDGPDp8bUMDe9zuMMQ3nVUXoFKJLJ1MbXMyZu",
  "key10": "4REJNkpRhTWosj9WEqMxAuhg563qqFVMeyLrSrTqp4zH3PKjwrGbTDRwsyzW3hSLQSMnBdjobNATc9w77cnaRUkn",
  "key11": "4L5kjceBxBiK4Y9ffmefY8SsxhYZ8gA3xQVDuWzh8t8a91JPZyGxZ2jPYRZN2ttQes2RKboD1tj8r1TQe6G66KzZ",
  "key12": "4wEs2VfMJWEBtEVojPEgK8vBHYZYPZ9QfwyaMaBBZksKGPw2PF4erCXJsNRK2oikGyqHM7XMy9LFada3QKx4C2i6",
  "key13": "3PtNe4DjqvrCXgz2SAC2k2LikjrwnJPb6u6nf6LJZb8GNcnUxvzRvooFULsRRHHTkDcm939G5GPRQsWHF4EESzk5",
  "key14": "W7PBf3Rz2Qk7uBNZvTnTRWRpEPEhvBtEiDgtrVad85xsgTC3a9C2K5wLzEYou2D2W5SgVFbU53FzsKcXGvj3xGR",
  "key15": "64RWZ8YECXZQHGgVnfsxbmSAn3WYkpA6K5REQbnupJrnStpYocZ5Rw3wJF7E2zKEY63W7Uy9KM7mcB2pVyFirSz8",
  "key16": "2JAh5wb6qiFGeCAPTj2dawh7e47hfFAsab2qg2a7E2yNUkpfwz5617M3uqqJacdJ4KEtNHiUgGuWyfVVCmLngUhj",
  "key17": "35evhRLzapngXZtYMSFfTKxwczYEuVREGuJ1toUGVih2ohFVZQwLwXMKSCXShqfmdzpBcHpqfDZGmS1Bw3eQWfvn",
  "key18": "5oXXsWXEAGykw1q3zWpemaACJRiehaBdMoRdLvP1PSurCUpcXFJJZPxT7FW2X3xEb5fcm6qDHfCLRvyrqtttahAz",
  "key19": "3wob8ifRdQWrJyoW8gtbGNaJDnVqPg1YzpmxDX39gvW2qMVsC9KPZrJUiPAGkRWtCDA9CmeKaik2hfLevjJnRp2F",
  "key20": "3cjxcDa4tAEd24iJcv5knCZG4VU6TR4DfZ5EuYtrWVA7J1cAqYRTcwT23F2CraQDgzXi99SZTCtqXhyncavYer7J",
  "key21": "jQsjp6MpHaJ9Z1PYwEUT4W4p5Twnyf5qgqqMmtk6VgysKGo6Ppfh1jW5ddv6XTKTGG9bei9WzDRryAMBZQ7GiBi",
  "key22": "2hs7YnoC8riKn5Zfg3no8j7RyzHMJKBGin9FtNCGhzqxDzQMPBhaXSAsRzySre2ueNWoHkzVGb1W1vfz4Vu23ed1",
  "key23": "3ZBkhEk51iKGQuyVBhXCnry4hHLwzcd2ZUHQrKkfFW44DEah7MQ3Y5YvGuYwVgjM4GoN5m8ZwzTtkXQxQJa2h93k",
  "key24": "3PsUm8TLrkxkbc7K3DMyAK5mmk3CWtiisR9gk9muEGSXMF8UXxiFy2bvdBrAsyJBFtxEkizDGgieup7anwTJ5LZa",
  "key25": "5r4pTQLCmVmHipn73xQcYagYi4QQiZa4sWztKmV2YRPavFwdPaySb9eYkB5P2i7LTAEf6tARVRHgesZ3WarXPK85",
  "key26": "4u28aopfj8zhUnpSp2jXgP8EsUagcFrEeia5Xh8NVrBkJ2eGLugvcj5wJ8ajcYxWiEiMWXp9gB4tag8JccNxZeX3",
  "key27": "5bonCVCcm9yn7qrWjRw26AFRgruCreEWtBrToAAnNyYRHCzGZ316zZrBBNXvVQb53zcw4VFViuAPXBnRzTjKfV6z",
  "key28": "52duwZgVpHU6CvyV2TotEaD9DsVbBWDsKaw8AxRaN6129pa7ysaVsrVmPLx3s6Augy4ZL6rgfr8Tgxi4g8rmra7D",
  "key29": "4zsYhoUd85DJN7VkzX19kACQ5dsFWanGZ74EzJwQoYzK727s7VzFiJXakroMyCFMju3Y31pRZ248SEJrtgzym41d",
  "key30": "2dZQvzfiaqSVgiqb2nEeQrkCDtS9NUb59V2PVp4i1qBia2YAsHjd2yx3CVTxgyMEYGt3BWGcKCE7p7iEXhK2ymZh",
  "key31": "5LD6B3V65uYpR6DEwFYq8W9doRf6ay5tpoiZFnwk4rgCw2LHeXhTmtZgzYycZhT97qsxp5pBzcqqvQnppQAd1PvB",
  "key32": "21KgH8kc3rmRtTAHTshRx81ApPX644pGZhzEYuTYBj2hEesy5fNSLkya9GQwQrcZhyy89DD9QZhH66n6ATTS9LeQ",
  "key33": "mo29mThjPoQiBSSMRst4EDr41t97Pmt9mu7fB92z89T7ztmzDCd4r8hZn8M4Tse7VoRVzvTLHJdSQ4cwUAZKXnc",
  "key34": "3qxRUfuXzsdNLMWXgemAEVq9fZCZymCFEckDkeBUWMe6GC7SGb12rSEqixxikzucKf4m6JEzdPkQiSqSSP7svaSD",
  "key35": "MnNCXWqFhbLzj65zSvuw7Lrn4JE7ZuMhNGpi7srx2mmhGhPFnsoXdvEy3G8AGHNAPemt9YS2h8ex7GUZyqB65ch",
  "key36": "4MCxW3WUuFvocAYPHdaYYiMC85DucnHg7jLSxLXBkbenXd3i7bdRkDWzAD2B3bDTHsCRzH93QQsNCSS93temm3jc",
  "key37": "xodL52sUiHaWcH64wo4mMH3rc8gAGPkEdDpaBaNVg4R1Dsi6WckYFxD8cssh5rnNjteHMMbdLfdA63daqjSEQ1z",
  "key38": "4EXy9848eTz5DZDMdXNWAM6LtBarGpkKgi6ec3a1bkTiaBp2WLC9MA8hhRVapeD9urzW63WX6nnMbrGmMLZ34Erb",
  "key39": "3aT7wNNgZzWH9d8TUq7jy8xvmxbcSzCXqeVawz8RL17Mnohb7ZKpMa9EaW5hZagAVCrjuboQq6HNdyxYBdTYN66j",
  "key40": "QqvdfbCPRFscAzykBnarFuTurXA1ZAyom6rJGTq1US6wKkx7mQoiE54dV1kTfy96TJSAqCh7on4JLLQG1i1c5Qh",
  "key41": "3hQFsWdxJFAEBYWjFEKwRoyucQZjctKAirbfRyTidNqdY97x2zhfFttazyvg11QNYBXEWeEWKBRoNCFbTA3zQYXP",
  "key42": "4kZEfjY93ivjtfab9TYhu1roPufXTJn3eUfJeaknwEycAJZThyvUWT2tHC4ZmhotxG3piPFRKT4E1eDbeuRAYE2H"
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
