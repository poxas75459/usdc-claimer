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
    "4UUDFEQjKfr8eXkrnSir8ywJymJ6HPBmeeqdxNZyWSYRsgA8Nk3SYski8kFL39i3GehHgKDAzBPAL1JVqYVNPqKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rV3YMhYJeKq8EmDCzQJVzoJpPh6c3avzsMifmgFz1PfBBDQyX1M6pQMKNQcuwkCgXXVLD2RaMz8N97EdVGHffcX",
  "key1": "4ogSYhgrEHY1qTwwLby4MqHvdL9FfH5PWkd1BdrLGxGDh9iwdNAi4hdA9eKXnxVBDUfvPKUE96Jd35Z5pnVgMYLU",
  "key2": "2CLLJDrywqPUKmxgqvZHVEdFxKHziJDpExvkLMhwPpHZ9F4msfjY2xxbZTDYBtGYFAzQKcS3jWLR7UNdQvw47o8W",
  "key3": "2wMEs9FStABgs5wSk4WNcWrGPACQjdFGnDsXTjWr2YLXHkURQ5EJqTwU8yEaRy8c9ksJ89U5vkBNtsNRrqwVxX9p",
  "key4": "5KtxV1H16hSMuCXrAxRskzmfA4SEHTqB9EeLRyoXV5GJUNYBtniEmcjSkAC4oeoy2FKhHrXjBivsxv29y19kKM43",
  "key5": "2AFP5SMFwAYk86eyGiM5i7W75FGQBLBawSVgP5oDDwFDM8SVFGay5D9KZBqAAERRy1iBAXA9xvASdZNXmpyRTFt8",
  "key6": "3uDpumyhpdiBarq4qJuJDWbsPo4nTEvE4nbws3G43DdkHj66fAiDTkf1vwFzxcreonC9nyXsm5KKLFCZV4eBezCm",
  "key7": "5p2kYLvHdvRstcgTkvhrvCjrheuTkccVhKKbmBqmhpGo5QdZm1ozASDPbkwVyxGC3osLhLzKtPRSPNzuAH91iHFH",
  "key8": "3HjGvbWC5NSJJnMdAmyc6iToMv6GtznaZkFD3hrqzu4kE8jxCx8zWo3LvANz36y4erSuL4aZw7NJKvLytJKLA6NH",
  "key9": "4MLkYHox7VDaozJ1xWMMTLkBu3w52afCZZ35MxziiVVij1AaB6nfMqbrtyeS12eu6TbwH2Ff6QFKXvNpSWuTYXUY",
  "key10": "66hb12kZJJytmtnvEWAzp68eUFWu3DL7WSBMBbpcfg293eAemKT8WpDt7vtSNmbErjx2dmUQYtXcQgEDPUPJXR7R",
  "key11": "m5x8c8LycUPafLgd46WD1Ewieds2cAf9FDZwmoAVt8zjKwuAtNsBunFsLmUzkj6MGmcanMoAko2gfF2iZMqL34c",
  "key12": "3Bsk7iBXQQRDiFD7iopo7mTBY4HrTeVnkeFB1xS33JjmBLx22AuPrJb7ybVXrCLgxWDyb1KCYaeEvSaDRsc3ynS5",
  "key13": "XP6pDJsRTCxshFbXH47SSgmZcv2ERepaPxUWHaHRvmBbkPu1UaiZmmbzvca5Z5Qdkop7njbgBe2uvccQxPqdoMD",
  "key14": "3z4f6B2dZyX94XAT4CaoHDoHTQ4HBGJKPKoBbFYYoJiAp1qUiH2bSu4VQwVaWfPWaFqZHJhEfrUWyKpx2Dhh4EP9",
  "key15": "4upAgLgnX136GiLuvwm4ScMCktp3etGgceEz1i1hfCxFoWYEjoLjyurskahJwJeET9vYma6VckCzR6EyWF922wLk",
  "key16": "4h1CytatZYrWxh47rkv7rHNTiJiKTk4W7pyhrk3WCoJFrGy3XoUUUCXzFEojD7P44Q4iAuUhECjgERz5sBrk4W9b",
  "key17": "LqVBdjDHZKNXD47Dq7A3FNsCYShFDWCfSqSG7J6gPxpJnshtiLt5wm116xtGSESfe12HKZQopku6mPfCPaCAoTC",
  "key18": "pxYLtW31RkMkvFRApmfPrLrfb3ezTkVpV5S1VPjHTAmo6TgNUK6XY4gFmnJQB4urLCwhvorFUCKSUY5Mw2SVcDA",
  "key19": "joipbWAkmibPTHt7wYSv8yQfuSExJcLMWagLrSh3GZjFsrBRrkviQAen6YXqGuv5bShRGSdUXJZNzdSgZPHPTEp",
  "key20": "4BAMuVByrg29ZfmR2YNrLWym3s1gRScFtpeviXH3MVHSSjc5QWsh16XQsigeTWuA16gKVZwyaqottjTpJpe5hnfD",
  "key21": "3uSAiaj6xuX8HaD8dAzG1QQVV6tQ51fyHXDjxcxfhyeFYtbTFuX87yeWe5qDAwhQa7oKGf3YHf2FYfDz4GnFRpBY",
  "key22": "5n8P36A1ju9ATDoESmLJTy6KWupppfbFndGp65Se87RjRP2aSFtD2VtmHyBK14chryvhvgeVBqYvA1GVjdZidGwh",
  "key23": "4FfYcfQ5u7H989YHXqyu2KcLS4ntGmkHRFNsrZuU6mUsrfwXVSkBEB9ERn5vKZPmxDEEdYGbBmw6gE1RyMJzWWZ1",
  "key24": "42wBD74wxMUP9bks9RmqPM7CFfvH3LALBG3ApmNEPZyRCE55QjrMiuSvpS5QYjhPMqgquVbtbyaXDtjg1EC6ciZR",
  "key25": "5pUQuDdgFPLztn5JnMVLua9Mn12K9QV3Uu3hgCkpHhm98CANMZa4YS7ynic6vnAG9XFKZqrHBJXqz3a5323K9DNx",
  "key26": "mnk2krBNVr42MEn3fL742nGgVjZJ2qd7kvTiFEJWog2PymtfR8H8cPAEkM6BhMwSAk42YKKZJRFbi1cNJbD5wrv",
  "key27": "gXiFhmTR7w7MFftTvZ89gNgKPRVPRihMwobh23PJTTyCf4W1n6L1CcAdDTCpncW7A6As1NeiJQuGHeMw6rYXVhS",
  "key28": "59WWXPs1tDZW5yoD7CxT12HvorVgwBuTBMeYUv4ihBF83U1z4F9zXQdxUqRf4QpZb7Aco4XM5nbTC5MYyj2udnMa",
  "key29": "4ctg5tKms2sdQkPtt9gtvYY1cxokHP2sBF2Yi3UK2j6fC7uPpQa7ziRqAs7D55NKdvazpuhmWSkmuq3cAhLqCryZ",
  "key30": "2EyY4ZUCMPhnr4YApz7cxpy73Xn88z9Swko3zQmkGVWhEJLscqktWEBLFhoSVKT8MxyAfX6CKza6JcvfiRN48rVt"
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
