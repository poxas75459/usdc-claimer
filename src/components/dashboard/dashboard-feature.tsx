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
    "24gsbt5FTv1u3YSdaoZUb9ai51TQpR17Qpv7gDwYFeQeMsYLQjY6HXWZC2jrMboAPQ1HXj6KGGoc4KLaQW9urmVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M753F5nKKvpcfQnjzT7nj75nfsSgJcJ1Bwf55F42qWJdNrcWZFQfAdTZULnmWt6b196Xrr5EC1pYScrKVVpKjk4",
  "key1": "3kKSSk7eQJEYTVsGMDmEnUXR3LsM248zKUd3VtYR3BiygLpyVhgRhUrKhsjzhCMr1Qde4bEHFjeopBEBVMzPsC64",
  "key2": "5c1aogJph8hcEpUT8mTY5h8BsWBhBQEDkoCmG8ZVmjcQZhCxdNoirwX4sTJEfvFowiN6cuWr4TqWpxNmsZQq3XXo",
  "key3": "3ciNJ7JPPFfQ3SfEGGyqn828XWEefHAqX3xmXy3zkrMZN52TnnzyUEHdcz7f3xxxJymdW6T4dnuysWVk8MMyR9xL",
  "key4": "2S6uhJYn83janQ12gbKntoTv3u2v1C4Yy8YvjUtGuAwU6e1ZtMW2A3yf3GDPv4J3RCB4a6xFjhjY6TfRPX4g9hBs",
  "key5": "5qJUE77PVCq6k1RYxTwaDoeRRQTCQwD5NhMu7z9sJ7jrMqRF2hU2G9RYEKtpahhdPpdDPVesfPdkbc4kwGCWEHr5",
  "key6": "3zvj8tCec4CTFEFLcPvNFuLFxwcgZHUSEynqzqWyZ46HvWFUchwKicCxeS7cpnfHjVHhdaagMfCg2yuHCrRjejUH",
  "key7": "5jJX26RHiBvCHyL34XbxGFGe6dAaGSRYPsdgGoBhEBmoZ6dP9Hpx4j2xbAtdhUWiWUbQzTKnRn69Z11QQm4FD9Hv",
  "key8": "2cMaG871RA8dMZnz1q9Y2eXRZPHHio15XRXwBT9Uct9eARKeP8yWMhpX3apTxrfcTYNLxRr2U349811L3CbdpCNZ",
  "key9": "2KWLYuzADQXAkaGJYwEoB4xfNnioK3H3ZngHSzHJRKPWNogWtyyJgwpiVDNxP8VTURvUNDQtjniVKfCsMAAxfrtJ",
  "key10": "4L6t1bD6x5t1JHc9hVbzabQTQsuayUVcgTeRfhapExtw5SSRA6s4XVyvP1BH7rJjrDZwKbvD846XvwnE3CmGwQba",
  "key11": "5uYR82ZrYYLBMGFiqcUTis67V1Nut39vtp3tEcFHAdnuKpRo8MUivYYvoecDECU5yZNJzZxsvoApMywa9BPTAu7b",
  "key12": "57CVQf8UcUp854PcE9GaoEsfwVEToLLUV8x73svtfUxYqMwLxBX1sPLpzNLSJeQdi85syqvfow58bm8daL5aqf4f",
  "key13": "Vkmr1T5kBPLurrW493qVqBd4U6m57yRx1ckkQqDYK87v3CYiYoMiPdBTmN7umRUSoQXuWgDBywo2BzvmzpfQdLy",
  "key14": "2j8tSvitoVy2v3Ucurv779G4qPBbcxYTtxTrq2DoGviCTdWXN9sCMmgtGqwbXfaLzKDG2PmdMj3qg8nowBCaYBMz",
  "key15": "5EfzSRjYiuhxBWSTbLryBPKFJ1kdBtM2csBCaSn1SNZeoVnEaLW99eSy6q6MEHALZEmKa1kjdxfEUMef82B3mhMs",
  "key16": "4zpzfKH3hfpzDCTDjSkpKjhJxhLKgBNkiztSSrMFseSFTds2f1skVxvAw26i9HVRb9aKBXY6pnYHwKUgthoU55ka",
  "key17": "RNK1QXVYE2Rh2nX44RQrH2vrAHEfDcvmNgvQtvGU8brzHQBE5gbyH5T5H6jXmHmJn2KVu6E4H3t8qsCixRE7pwN",
  "key18": "2LqHgsmEehp9hjKMkWCjaBbfRe7pkhNrSq4otgQnnh6t6SUfCed2KuC8nM8V7UFtvUZ3GYt37FPHxdmfsMYhM5bV",
  "key19": "2NC7MJ1uAsS8VitUxMNL2u6MfWRfHjVoUPn51ioUZvy5PNB6ZDTQK9uorSJCRXnrverFScsXsVwUE9pemU5uRyXz",
  "key20": "3G1dTCPP5WgepPzgugKwiD6M6gVX8jsF6dNnpiXfniKnUyY2UqdLAsPTyuTCFYgeP4DDyMwE7P1hwsdnXh95aYra",
  "key21": "2EHs1ojTWYQDPw8zuuLbZv9x8jLooP8UML5xyyVVTJtxdwHrddaYQeWT8Tm5PcvktNeZmbkudPJA7yGtBLBxhRTD",
  "key22": "5YXyPW9GD3TFvxhyevto19Nc8wxeoZ4qd1G5ZtXFYJpTcmm2DtcHFuTsodwnRjr67Dqz4oBbB84eRr7HRDZm1qE9",
  "key23": "5WXccoeNe69a9P7uvukaovHEqS9hS9PXfgVPUgtte9dzWqjvazbVrTBcw4VzqKXzH4Ku1poXhC7dBu3zGRtcnu2P",
  "key24": "5J9CmkWk582nmByACAZrECyX79kGinxy3Lewajz9vpFnnFJukWbzhV7nRLGBePHvUt7ybf4MGQUURGCXmzG7vNpC",
  "key25": "5kqBLreTXuy2iiFPZkX4h1FTn8Q44sgnQD5zjw362gHFT8PcWB5zNG81FEYnSaFyC5UtrFG6QqvFMs62rvTVkUL2",
  "key26": "2m9BMgpPWJBoacFpVLtpR7v773YZc5x3D3SXR3ihrVSKPJUQeQerCRfrNR8EhWKhiKfTqCXhpgrU7SENDcXXfyVA",
  "key27": "5bwW4jyrZ8cAynom9mr4zXtp5jFg7XpREgdMoSHcKhfa2eSTyFZrc2ZkkQjWrRJVgyPtMCK7Y7BcfWXu1QoF7yMb",
  "key28": "5wbKu15753sriDBXxjv2zb6KrGEiYu9HMKSwPQ3gJyKNrNza8dwevTaaXeqSLW6AHeBWezzymGgfeHUm1XmAgyiF",
  "key29": "2qHhT8CVw1n7BknGU8cNChWdQgAeeY9sMMamEHYDZkQFr69airE5jMuy1EM1LKJRYbFUfUJDDYygkhvvehd2mheX",
  "key30": "4PzuHthmSXdm2N6JD59nagYmiQjXSuwEScUqLWQS34ccNms2vBrAkMtdQZk6oGugQWnMXPz7tGBC24SLqkrospjQ",
  "key31": "4tDwbRxGoUqyLmTqeZbtwJqJiZWfKJfqfWQb5eUhprY5sCGootEuehmNYWDqh81XMNx3o651BaN5rTNDzZ9mW5Pc",
  "key32": "g3P15kePWUWKGQxjn9oLP5Dg1Zdd45fR41Ksq8qcZfL2YGg1DQV1P72YwfKewgiekBWBzZ8aLgMW72chTVxPFC7",
  "key33": "3x33VivRnZvQKcvTa2qz1JDQshxFHAHk9SFGgkYaAwcpR3PTZTz6x1Fca7MH1hnYJVNB1Q3bBHKbeHsWduFjrMXc",
  "key34": "4wWjv12v7DbgWAz8L6smsXbfzNRa9PiVB47phuEJJo8bh4FsgBMH3sMfJUgzWJbJrgs8dR8XZXj9Bt4CyUN5hjXc"
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
