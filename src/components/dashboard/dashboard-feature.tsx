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
    "4Jh5wfeEphAgyPdaFQfy7xNJRpy5nJky1NW2o77E3kWwiQysWmpPiGMoiGMnq2JNhBRMncZFfiGe2eWmA8zjDNrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jxpbyhab74FiCdYZRakpDYCFjMVGnGopj7nkjJiqFGr4mQxuSZdcRetBAnc4yeVgNYhtfq6Sy8ST6aaXYYcDgD",
  "key1": "4CTPYTkEoM38SXwxdaBwt7t8QUAP4YMCyiZYnLL9Cb3jaWn177stY76Pms88JoXked8F2wG7fkPKGri4kNAUeDqG",
  "key2": "3ELYtVrPqU8YQxd8bWByu4i4TyNoeVrnLP9VyPJwKD8mKN1BN1iJkuKskr8P5XjmTSfoqv3vLLp2Q8aWAcCMRwBX",
  "key3": "3sJRFntET19zSjHuUcBqrwbFqjGZuVu3bhjf9NWqAMvHJgo6pULBkoki5UdQZxDPRpVcJNhd2EdjNoHqbyFBtCWh",
  "key4": "5UCcp6PhYAYugrAe84iqkZ31eFjBcpqXBpJ2zeyEvCoWCq7319Ds3bbU4e4PKJzNuxh6uMtHcbzKUDesQCUqutkj",
  "key5": "3PEUJkDSjSdaftyt9JsjaaKZ5xo86tG59oA4NDhZRaV6YG6kGMtpBFGwRLWqHPdABBvH3U95Aq9oVFGDZ1Ji3wNp",
  "key6": "3nUjjEnjUCWQtwGMHVts25ovSDr4NSGmG2mEs9umpZYFoyE6AXW7Gyxponqvp4eHDgLbZtnFcpDUwj7RLJ5M2Gdg",
  "key7": "4no8shJyv4TX8jdMknPYy38nZ81jrrq9wGLEpKMMQwRR3yBNfhMvtPxzzFeR8C5ALjRby5Lx4HHFY292hKpiA9Rj",
  "key8": "5eqayLLH8WbYkymXx26vfUaSbJ4mWLXxvCic9w7r645iCGEbSSFGiC2Qd1qwHpyxX8Sev9Tr81MD4cwzjQrkJHCG",
  "key9": "35V6BfhU3Dc4k4YVBYMaB56zzKYC59yAnS1HQrh38DeVEgrYVqMZmygUBMumxKAqhMXE7p6WxS4HRh8SXrAhk2Ma",
  "key10": "2h8caneZxSC8mSdTE8BDbhv7fkf1dN9Ak5q8MvoBEyFuZJGBNfG2WpNPEGzCztFLpfmBHm3R6wsVHWicgcRDybc2",
  "key11": "5Z3W3DALCbmWDLcemWVJfwMoVpm899t8jSNydUhtaFQWPP2ZRTxK2qNBs7jQ5JAfs9ZSyGBeBeTzmeCZzroTvRoL",
  "key12": "3c4e82AEbXHwwmo2GVssUtQVZv9UvMB9cqQ5DHmZZ2QbHR8z6rbeEvxAHYz5WdakE3aP4hVYHfHZ9XHtwqBRX38m",
  "key13": "33CfQQxcLFv6SDB6omKR9kVdwvWvGfzEc4UKHd4kJEt7T6vTBvM9mMzwog4uD96PdrLLjHjcC5FPRiT4izfJ3wtX",
  "key14": "5dYrApRb1zw5aVHaC1x9sMp2eTyrsWhcVkfVktFTvxkKJwLFVf7Weqo9jMav6Jn7QSmG5Ehcha4eg7SjpVFwubgY",
  "key15": "3Aj6CiKn1sQyxtF3drZhH9z7S8WpyBPd4nkqK9jwbCa8XKdgQ6J1jAPhTY6VN52FyATX1r46Mg4EGsLiJNGgaFJw",
  "key16": "4jx3vLXhxvvBiNdtWNWT48WGJWmcoQQfwW6E8VpxEuwaPCy1hJz1cMF6hFnWV1S3dPMNaaM8buHbEM6XFYp93n4L",
  "key17": "4bwoZDtbRm1FsT4CVkFDZvwDQxeTfs8QngK3Z225dRirJxoxbp4Cg2fD1MXQ1ZK3CtsPZF3QuSjZ3hHqdGJxeEcE",
  "key18": "5t6HZKPwKW1a7Vj891AJUKLVhXbAiKm3Liz9H4XdxrgNGyTfXF1W1fqAixeJ1srPgdLDPti53zY27hwCZiifubLE",
  "key19": "3j8gZLYsVTcP8ZjwUCrEz8TzK6NSJ5okgV4aeFQx5hC1tVydUtqhwi2RGVHzTccQon33xafLTZwQZCdZRE2X2ucU",
  "key20": "SnohrGMda5ghwrbJzZQqmtqUPpezdycZPevkmU2sFqHNLVtmJSwhjQNc2Pb9bNJLjiKNz7neHiKZb3nwQethizq",
  "key21": "2yGZ7ceA9nyKjHVJRu1KnU8BfQSXkUPb8acCMhYdmb7FDjvBHpahyjVRpjDaXgScMTxXAV9x82yYGphiBGse6frJ",
  "key22": "4QfbDqntXQtCYemGNgDqeiHQCajwYjRj8GcbFU58g4ZadG4bRReZB9fcHWKzJytk7U7JfitWe5jjG9ZxY6UnQmBN",
  "key23": "QKDDqntqyKCr2Rux6AcFBwuSthzSVFQVg2riwHcbWvg5BUhh5mFKxzAP5pQr3dHuoWojVB1bdJvjq5YgjHpTzcq",
  "key24": "2TX2QrYpjzVHRrwNNemfX8PYY6UjMk1E38purLGqMf2QR3rs6WoRJw5Dy1i1Zosf81tf32Fki9dnMEb9xSwiFfVf",
  "key25": "4AZC1U77vceRY44UxEr8fQUJBELr2J4UtkzoSNbfitwPgv1P3VVvaNAZDty7JPK9ym916FY1XTVnt7meEcXsawpn",
  "key26": "xjWCgPTCZBX9WdfiYX3gUDxdnt3JzqQqBgJStyvyqtM1y5Beedkqzkh7SLwURSvVimUTyfrYb6q9hXETXNehNLz",
  "key27": "32LnqKYS4EuveBq3mNRDiyKncFfcvL263rpquKLQ9rijb3t19UDUYzy4F8AT5sQR2MvfoH2E6qegUEZDNva4wHLP",
  "key28": "4tknbyzVMq95TL4zwerG1EPfAGJTvpSDcW4SqfwzZvoTVX921bou9xMd5gX8Uyqbxmksv9JeSvHFpojCAxigWKFa",
  "key29": "2J4NF3jZztcHWNahyuUDwbjTe9HXWLQXQJ2WB7WSz2DCd2RTFNf2F3mUdekrzmuYvsz4DMo7oPaLMmMfS7BjaWWT",
  "key30": "3btTNG4wFF8Tftc7Pzq1Fi7RCSYWVWo15YjN72qePwzCBtRc7iu1uu9jmq4BUwezbmcXpLJyfkkvcq2LaafXq8Bo"
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
