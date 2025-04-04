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
    "2kfdvCpEhvs4tkPNaJ5ANcyPiFk39LMnK6DwwELqKELkAdAVvqMaoMDVhpRGFKygU7K1Jr7ghFBeMNon6HZaSKCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNULsTwcpsdH8kKCjSPDszhjLtXKUXMH5nLbhcvAFJ9KHSKcdDtxYy21WYG9hsYVg38yy28Vv4NYo7utpmkUDz5",
  "key1": "2ftCAqZKisKiDUVS1uVKmbyUcUBB2jaBFbHxbh2WxaJLs2JyMD66iaePUiVtipP2PE3coeAweZLAd91DxH9Z1Cdd",
  "key2": "3ZZUhPYdbSjSMUr6eDsSSXqdUtVj74FYTCh787QfAdv5HRSfgBSXdSopY9S2Jndv8TpoM5BhU6fvzqPmWoffxD4V",
  "key3": "4P7s3C7akCuE7wkN2ch2RvLrowHCY1T1ZynDpjDVcdtq8aJKdc4SPmrXbzCTMNDt8ZrKRsBtU7XWUPqpq7rDwQ2T",
  "key4": "5xv5YR5JCVZdRB3SYvx2HQL1CWFRi1yUs3s2C6yF7dAZ3QGWd4nfiWiHa4oj4YZCNtVcP87cJLgt8BYaxVa5FECc",
  "key5": "2QCjEDsGsw1v3WHZdbXpMZmu687TZbzRhZKijWruLQzdgbZKt1zfPUqGiFiiaX2gMtRbztRZMv7NzfW6RLjky1yD",
  "key6": "4euyuQTKTK3E5BcNMuFYkaPbKK13ooirQoMdhubX9JxFvB3uzfiGMtWpq8My8vaEnY8RAeuZVPAfX6aBa66Hn611",
  "key7": "uiQzh9Rqoiym1oPuXzpi16NFKcVF6wwyZqC7UKnSt81gtpdXYJXKKcZ68ffYRJHiB4t6uDs3DKJ8DrZymnfLbiW",
  "key8": "USpWJAK6e9Qz2z6vFRH5n2gfTNZzoTbDgmRoodWnc9y14ocfwgDdcrZ3dkAQiReJsA4m6CVXuhX9wy48GXwj8Kx",
  "key9": "4Z8QXyshTqG7c5GXvHQQEnmMCaVNnaXUBYwizTjABKgSYH6ojEXpM94aAvoMYBJQkndSKorNF6rGvhjKcHYWbjdq",
  "key10": "3ax91XfXv26xSiLJ2pYMxAD5XazERanrQx7FQ9CeMUPNuxLzoe4N8GwzALwKmJRGrzmhd6ZhqofhZzR4FTwNGFeU",
  "key11": "5i9DyRmBvc2jT81KaZRUUUbwuNnpsBCKAKjXGMLDD96Qj5LJDoLsBgHSTNo66E84ApDtwygCj8ZqskFZn2hyF7et",
  "key12": "2ohXBLYqMDw6bYkRrBRtbxWSHLjsMbjF4Yqysmt6fjpG1p7y6Y7ZBoQEpDLt5B9EWsGixKSeMiB2VhrJa1QfPL17",
  "key13": "3j24rAbsLXHQ7oaMWe85Z4Wic6rGdK7QZYPUxiCMvvACyBXpKgxJSkPwu4zoDcTHP1kgwgumSR869RT83RvRMW13",
  "key14": "ALmyu1evbfzeLSMDCSdo332Rj7UgGA7qW3EUzJoKuGjbyTnoe3jj6m6my8ytxF8xKxd546MG1dSdAJ1syWyszP5",
  "key15": "2YniXX9AJYpLQoXrGeb4Ux2bKGpzP6q9RHDefVkr3nXTC2wis4pcb9QiqBF4jHLa23RkWSZ86dueYqNRFbb8NZFi",
  "key16": "5pSVo3jrSdajx12T1goMqgnzmCHUm5g6KdfRj5RRJdkXgA2f3r8A6voeMnXb67vBXhkV6vjfYPFK8sk1cYGXMRve",
  "key17": "4pt1ZsQUXu3LKgrpQoyXeowSw65a72PxvU3KbnQNSci3FppeHZZJmzLRW6kEyhhjaggPq6TmSuvjcwW4heSrcDHG",
  "key18": "44XShNNp9A8xF1Cv9dQzMjrsxaPRy2FYoHbPjgpNYguk8evHY9nLED8z1oznufh9wZWMLmb2XtsPbLPWKLK2oiwo",
  "key19": "2xAT6192ycXumpV79DbNxPoHrwAEZ7xzE3zx92BUogGKcLn34r4M4SGCtF2UzrDZ99tHEeU5c3XBcT5yn6LzMu7g",
  "key20": "4HLroSdKAZwZh3jEW3jkihXgsGyXL7Ry9vPLV5nGTFN82XBuT7tdc5avKk5e6qbKFmfH3AfwQGLZ4MgQ42HhvLki",
  "key21": "2BMzMTKh9NkXmJ5aybCUR1XxZxWWkqJsmnvqdaSbdbYTXHNY6ZFiRd4yFbF456Y1iD5Kqw58zKdN3RDKwxXi5t6J",
  "key22": "mJd7SGR2AZoia8iRroafcbbcX6qYUDi6dkqGPeEAzKEaYspBFvtFFQUe8jQc3KPSxrhH9UUdfDcWNLYhN6PBjt5",
  "key23": "4eXqWwshMiMivD4BnVHMtehsZkQKQFeGbdeBhGseyTxkrSWHm4JmehuFxThmsBpFZkTMyKspPppB8uhcX6XCUAqs",
  "key24": "2v9Xo2QRkzSYzNxj8CS8QXdpQeyQ2hhFPEttLxHKhSz8Ag72zC7Fc8KDhmbVcfLGRY6B5xB6mK6Fx3w1GZT4YyFK",
  "key25": "5dP7DGexhJpKaeV4ytXD4iddzzTj15mA32Srkz9ztRVaSfYZXsp9tbLBHJLDfGJUAQ6eaVbXRtfkGfySqPJ1DbSG",
  "key26": "3vCtFvsdq1YqKGQEVci1d6eRjbPzUYzrEGC5FG59Zf9XBE8he4R64dU1aUkAsZ16b5zmkUjzC7MeSxgnzSpTCRR7",
  "key27": "4xE7fsAbBimxEwhxxWfJPz7nJCP6PGAWCqHSHS7jCAcpS1FKNHVefV1YwR6zj9wwree5nxBCn19Z8n9uYKezVyFT",
  "key28": "PNg34CCvPbATA62DaKZrV3D3VuY1ow3hZRg3eNuWQQ4aV9AvwiCsfuMN2htUhxnup7u7JFopT5sFjy22Qw1FDdp",
  "key29": "3Ezxo3C75nm85CAk19fzSJsNFaQgNBCCYnREkcMrHkNAy1cicFSEgmoTgLqLpc1UBZ41VPBbNRgNXyNdt3rrWYaf",
  "key30": "C1NChxjSKjDiFg2msNDqxmSYZy5hvq4K5DeWfzuxKSYMo2kbSuJsxy3LB25xWBGAu88WWyzBQDS2ggbzTFAbveB",
  "key31": "2FfQuzVT9W5apkCJmzuMR2gVAXzW6uPpD9vbazHU3iE7RK2epE7Ls9z1tmJJZANxyt9gJ1HrJiBu6w8tW1Zezp7o",
  "key32": "jxsokcxf3FK4aoc2bcpRsUi12XdWveSckQxNn8sM36UAnm9bLhMb5Jd989sCY7yvJAYvavw2KvXX9kzi4k4RRZv",
  "key33": "5Dx9RD5cANp36dY2kQvqGf8YGoXnGSGVF5ri2K7JVMbuVcVqY4Np4E3yNGwWn2fknvvnjrndvtko3oiakz16hWeb",
  "key34": "eE5EEgJKu3MLviBpETWDTrKuVCAbfjmfaeaamoUz4jDALVzn6eE47JcYfjCoMNbPYULDqfAHLnEXVzUgJk1iioW",
  "key35": "2BcypDLKrkZwRMD7qrXgRoUvEqkhhdDrHwkP57qJfbd2JX88jqofTTxtMK2jLGyFPCuneFF6UFQSfMEwQ7yHji3w",
  "key36": "5Lu7DR3x6w1tzuqH2Qu9szNnGFGX6VT85UhmWJAN3ZLYRvNeEFhuMsAmzE8GsSo8VT768p6CkcXqg8qA8ah34sc4",
  "key37": "2LVE4Ac96ebJoacP4kn95kkHMHf3fjiEoyjbFZPptNZje2PGbzYWuEPKooo3TTxk9meT4yCEEbXeUz3mybGYVmVK",
  "key38": "4BV8tNNF974dAv4kQVJLzSaCV7ZfFU9hx6vceY4eAL3aV99j1y5uqAnNBzaNP6xpZaGghErvypXiPxXiw1jmp62d",
  "key39": "61Z2GLvyiTRBdvPriN6BNV37v97aMW6AGJAE8erzzoGpY3dsQQs5g5nt5VRek4kWVRpU8wkVo4iRhC8N1N5ZBpPr",
  "key40": "46jdzhytYgiHfREB41T5QBe1WDgndManzgWwH7eoRfBiX9PzTakMA8X9wwChq5HgepZVGAXPRYBNLr7RZc6REJVU",
  "key41": "5e7suhSATKwTvD4sD1qkrsnUqytFKp8uPtCiBoNix7ak3tmCK9FTjoRDb2wv4SLZSExxqkPDGGoR9AwXUW4H4sjV",
  "key42": "2tnZ1argnCSNKJ78uBUKuTu11UpHpdbFcusgyAjS7soHdewMx1n5Sy42ARj6Vg92re1JfbbwHmbCgnMyJbVKzod8",
  "key43": "5itd4M5QRdg9pk8CfyzSV7goRXgM8mCodoMPKdAURkV7S8D5mkkB2ucbAvYFMBzFioFsYbjtDiomrVwiCy6vRb5A"
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
