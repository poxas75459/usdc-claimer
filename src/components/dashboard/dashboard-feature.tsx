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
    "FRooPpLGXtjvvxyFF1UuWAZ7b7siEsbojk6nFiKiSBf4AzPHfXoqoXdxcMu9wV7Mq7H86XHd4PY9RBYc2TD3SQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nD9sxFgfEwniJMyQavRQKcXw2NhBNDc92qAM3uxiXVy14A5HW3XX12F8sGqUoCoAXnCPobiGgwbJmVV7tMDiqJb",
  "key1": "4sJQgDXaSTghTDEL9YGA77JhtifhSaLS7Bz6BoDXVw9euYyNng783DcKzF3nCYHpTrLWoaprTcyAgTGZe8gAuVnu",
  "key2": "55q8ZMUY1w8CBeSJNXqXKaKWfbVG9938tU6AndLv84Q64NSHsj7BWutfYtRfy8PTamG4R2z8vvt5giemRz2mm15Z",
  "key3": "4Gg4Ko3rcvoeLSwj9VdRq74DTx844sKNqPuV8Yp7vuqTk9naSXcrqWD5ubTv3imwSKazA13T4YQHksCZvRHbimzp",
  "key4": "4BGChtYfsmBiZHVQ63mw3XSBnWummzHdKbQWpnifbiaiabpxWJPoX3UpENqNmKzTuSL1XskBPKRJox6DdX75Lesk",
  "key5": "5J1eLXCRP7T7iBaLBWsGHqGs6SKNRVJcFdT2a8agVk7ujpkSGC1vME9pKa2eubE4J1xnC3qC1zQBGLbJiyvTJRFD",
  "key6": "4Z8fCKn5UWbo78ZL9cdU52jGFdvknsnwFN92KYJ7iiRP8uaoC3DN286VHQSD8FgYGMb5QCkVr3fuE1Cuw9oJdQbE",
  "key7": "5cznMUsQmU1U7vVWKMuXwMN54UgBSxdzESLuiLJns5WjhPNioxhXDaYMidRbLzMeKMYcJTcnnSjGFjP6rg3MkmX5",
  "key8": "3FoaRBqKvWysLNidnbZfnPfp3oq4LA1f8guPXb29zFVbg31gXFKdNUt9R8nGnFVjxSEcnnjS1oZ5vGiipqrG4VLU",
  "key9": "31kGKm9PaTKXLMnzJPpziUV638UVijWZv2iHRdunfnHecNKYDCHDTRpeZatX9g4n3vQpoC8ZYpFeoBjB6As79i5b",
  "key10": "96oZtbNizmiLE92ekqTT1iygXCgQXXCEuuazzh9U57dwey9z9gBYxM3P8hrLm3fFDhD4DMDqoBzxQTnTu5JCeTU",
  "key11": "4qM4xc6WwDeW9kH1qQdiZm5tm38GJ2jfJnMcpXaXekF9pXotLE1RhD8iyt4pruxAQUi8CWruMxYMt9SYwuMoo44k",
  "key12": "3KkxseqTwYN8cdn8BWcPkXVgi5p2gWAw6pggba4EjK2zUSKuR1J4785BymaM5ZtC3ywvytfYdbgMCPu2u6JLAvEn",
  "key13": "4VuGRoLFmzrifsVBgKDxaokwf41uczvSn78NmsrFNjnLRUzMT6CL6p2pnY1TbpXuqE4JFe6xfHJcA8Cx7RYkC9JX",
  "key14": "2K8t8NYmXRKgK9XCM8tHaimpf1yqQzH4byozzXf5Rn8GF4VViVotFzFz4DkbKoBNwdz4f4oPiYwp77sLwTGg2tgy",
  "key15": "4qtwX4Ex1DcAYkAdyhyi8F4KfgMjoYRVseweePf92uUTRP3fZiupAeFi5w4rQpWvcN46ErvjEoqivfz5XfqVJfdc",
  "key16": "2m5ibV4NH4LC4GcEbaXoyqmgLNbC1M4A8Fe91LJz4Yr7ZnZyMPSH31wq25GoPsWP6FhT363dfdBJNkq1eSUChJve",
  "key17": "4Q2vsncmzgrgjyTYwJsgtYZ81uQ1ECA6Btx7mYryxgpwtEj2PqHcGiDdVRDwyjqN4Sh1gangasQSMuX7girbypb3",
  "key18": "4ZZXYhKpiuuCa9QcCT68meErF2p1Gg7Wdfd1SVPvahXQuimqFneRrLadiZXmPqTeuwjzYSMfYqM2p1EmaErDwwLo",
  "key19": "Dy7ijFZdZSaPjZKAVCsNVmAkzaFM2AuaPRjZbtgVNuW8ZVgw9UvpdN7RvnqXDgRqjYhsXBAGACQ2bqrtetDLw6c",
  "key20": "4QbEp2yD9C4BgWZcTFce6C5zgkybYD5qiPYUQQHUwCu8xYvftp4sARb9npn8hRaiVSg1qNJ8Z6e5spbDsz593F1n",
  "key21": "4fDrrB1DjmmkyJ8TQpgGMoQxmQQ7sMQmmQbdCFjb5ifPaM95JMLw2DYycoCSQU38kCGtPCinABuv6XVWhrJZL62P",
  "key22": "1Ghaj3BA9iYhhnfzoYHVUEfCo9cx3XXiGDKMu6Bet1n8Rth1zsq1Q9CPh52jzr8N9jutLXt5Wf524P4WivYtH9T",
  "key23": "mZmswzRpCbTvN16RWJGWUnraC7XzTZih31j1V5gtAgxPto9oEvsnJCx9QuSVgRhzQR7fYU8XRYM5BNCQs3P2CWL",
  "key24": "LGex3Jvwzzcm9wpJ1a9957HiYwhtzHYwYXmBdBLUYpGfA4eDHdLNKkQN6WxdNJ8fqMjUD9QqXvJSp9gZRg7LNVn",
  "key25": "3jj67HaVCPitT7BYBoioauj6gHYqQbDeuDxWoT3S6w8wWNEjzuopfStJuWzqAREE7jtpKwKV8bM2VAch6woAvztD",
  "key26": "4XUTKPHTSDdKNGupCAdasMTaUsCffzK2FMAm4tME1ABERgJUbFukocivtnekhonjqRZfa7CP9spqBSwPWw1ZbTdY",
  "key27": "4fe87ML1ae4WgmEd5yaEALMmCNtMhaRoi1UPqPUvEsfPMxZ9JDKeFCLjKuSazZwJqT9DKyCWLi3TKLS7E3nu7qMW",
  "key28": "2ifKiGjEA89p2oJq3hnEZwyiMUxADGFZMC73rzqd3p5vBkEUGhLrWiuqDDG4fGQjVCWyZ6K3tFwKyDw7djCjkzWU",
  "key29": "98qRW1xw9UVFtTGW817jo21mBf7fAfAzvfZZnMvoqJTjBLjXzvm6zwFMND88tA3SnR5S9rk5LqNAYYGEkuTsKWQ",
  "key30": "3sspZFMreTC2WBrj4URH6QGUEyHn1a6hzXy5HrQjM2R98jU3eDV7tHACFn7NfVU4doFAWUccAUroFSWQK9ioeCHd",
  "key31": "3skjb5RRBCWXcFSVo3Q73gLPqPFRxpRQeUZDNMXZMFpRAftJRWDFCijEBKa2b7BFFwREjN6qswgAVoQtSRRJmKcM",
  "key32": "HZbeqoyq3noFu1mGq8Gj18yB63EMZsMzCDMMgpHUxb6fn6TLfGwz8jxBgVPBHp5jfNBd27q2rVfKd5wrv1PnVTu",
  "key33": "2zgsogFLsFsU6tUvapnFpmmeAQJ8pKyAGm9iA1HqgGmoi79oqTiuV4cuT7NoGDWa7p8Mkr4ZfaFjhSfvXxgJ9p6C",
  "key34": "4zoQPE4PwMJnN2pbsHuJ4aA87uQMdYmyzfiZaD2pQ3yr2QdfKpqN4qeFHXfuXdjQM87zAcMTyJpcmrZxi3onURkG",
  "key35": "BExNCfUk2b6uBt4GUmfumHuMZKRdBCkcmtkYdoELtinEm5QMGXZSXz55DP1GsxzyQnAUAeRxpA4tD8W8NAdHnba",
  "key36": "62kddQnxx2jRXMPpttoFcroJ6qFdmkZfXpRSD9aEZrUGP8rbC8zM2wJTtGVTpQEw1jeAdoPfm8anV3MN3qHwLpCQ",
  "key37": "5b9ZKQvJw1BcRgauafzS8YK31RA1rQAiBgn9eot5vrMEmNp73xfuaPgpxkuvhJJMsixoATmbim3fgosADHF5q7MB",
  "key38": "3nkrkTGKaJU6fkUmrBhibbGuXeyDaHaFtCLVLkq1e1vEHZuqSVtfBRbjTZ7YxC7Dowz6C7kXXBumuBzp9xhmDqZv",
  "key39": "4Phv2zxD8cMrGS3EHpBgRwKeL5zncVa5n9xpWrZnJkeTGgP7jo4aNoUQSSurYL7mRgHqmmAyXY5WBvNq6aLE9Ubh",
  "key40": "5uvVnrrrZx3y2cj7ppuCsWDEwBz7KLdzAuhYKUiivYrsRf3SYPWDm2hgN4BMSEoJ9sQ1REy9Vosxo8AhWjT9rNaQ",
  "key41": "35Bk3RNXTBvpfkNrqyWU9TdZqncHCeq7nEyjnEwCmcRZKidJUHimQMySRHaDB6V6gBvjyN2eMA71L6h7zj7tknp1",
  "key42": "vqS3PvUuMaiSKt9oWrXRGJWA3tu1ZkaPKkU4r2bkZJy7sRhTzFRCe2JkHPiTZqMX86KZJMMgiJiRnaCpxiSVh4K",
  "key43": "GzFVxk2GZasW1gfJ1c5kiJQXJFT6GbKXVs5s96QgpszDNtB7VCv7eVATUsXGWeU8n5NjCZGEyPHYyJfmJNtjpEf"
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
