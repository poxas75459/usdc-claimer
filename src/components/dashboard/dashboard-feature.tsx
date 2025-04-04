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
    "67d2DR42sP9AoDKkALh4jxk2sBWSUUBXGFW3fYCQs1qj27qPA5B4k6c9Pu8bavVrd4V97cDeSGcFtoexTAsNoKfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFPMAzPVxEcNVZDambBj9GTYt44tuqtuufATs9Cz2iFNW2PnB2F7oRGWWaTSPfHBjLcrKUJZAf5KugvwKEyYFgf",
  "key1": "3WdjBLHaqv8sgGMWC4Le6GvQirL5tGMSy97TY9J1nZDUCBvFWh29cHKRrczZBav1MXJRptt5oKxqeT1HoYrNgWnr",
  "key2": "4jyMdVhfeuUK1Aq1NAhBwfD3MmChuvULprpuQfMbeksGjcvuVaRHTxWyPahpfTyVvHyTbSWg6zznAfwq7w7sa7u7",
  "key3": "5bcmoPtfqes7WuQ3jvyiCf38JsXUJVitLuMyKhSqQGQB322ZiU9UMo59QPQKqRCnga74Tu4sTtDFNBsN27jEnYFS",
  "key4": "6539DyfgqLrwLPBXqAM1Jh8Y238ZX7WiVapyGALfPjz792rXWDt3sBPM2VCN3qQtT4j945tQZgd7RqiH6DazEynJ",
  "key5": "44M8hYP7XBJ8NR9ACVvFvWGMrx5jweJ4rBFmjKEsHppMtnA3mEgvwhKteempTFCrpZp3qCGFaNq3fgZQMCAwa8mJ",
  "key6": "3khjQg642A2QpZoQnCaKqx9jkdZ91fCQxpXaUwnGUi2BfxS99XHEgppEjPLwVvYdXwXTWC91SAHPFyz67QN4nPgJ",
  "key7": "3i58ACjgyGSartb2oBLNfqVZnQszCVmCb4zEb5bFNucKgG2bhYzXDwDu8uDkGkHEmYgfwrEHKRa8Ho7CDGDkcaJf",
  "key8": "3tLwVjJsqXZQ11oCwF9W8eocC2AWUsYje8TPtoWCCstg3tLe1BNcQ5y87DxNuPGen8F3hG6wTpqrUBJU6CMq5UVH",
  "key9": "Qck84fwqPVW7tcNdqzb9fYdp5Yntuqw9cwD1YkKQakWYC88nW2pdsqXRFLLP1W34AgnvwtHfiTrNVnmUSCF2NG8",
  "key10": "3ToARVq2FMj2haxFjTWMmzTXfA9yMDQHNYKCPQtxQe8ZH7QwrP6UyKJyizqvGoidyNtkohid8YzkGcq9USdsS1e5",
  "key11": "2RE7ALC2eD9yuGagHfv4D7TEEmUvTBVk7o8esshuCEmBb3JxHVM37Upv6ULAgh9umbLDBt2V82Ri36XUhFgBpg3Y",
  "key12": "5Fn4JaNxAunzf4vBRebmZqmXpZ9pcrt8N5bf6TL1FjrbD7Ac2yoi7baWRuhbmhTgLtgxeAuvLbv9x6LtKHnMyYxW",
  "key13": "d1Z8Mkq7XY5aSi27YR68Gt3rPPhKit8gEroCEyYkButUD5MkpPsgjQWfdsBY9A9avmvcrMgJEWCMdysgbdS9h1K",
  "key14": "Gi7CtjAq196JTMJm1dNwMBuzf4sgiJWDTRMstoQt4qp7G3yjFuZfpKRKxxMJo9CmzSQH5edZigyAk7koHjboCjK",
  "key15": "4msB8iHVK5Bk7m1ffa1o46oMREQq5YzySqcS2PdGkmA8pWfF6m3M4Bp8Q5exyvF5Noo6tfVGYPnYcaYk6KBgU1Ae",
  "key16": "5Q8yWYXVWosEXQSZrbnDZeq2L2LXER56copxAnZBsf81npNaots9cYmNd2peaP4GybJ1v8xzx7UnjkHGL6UvpcX6",
  "key17": "4tR8P4na721Qwb24yBFMAymTXgTUh9riKEGCCwvez6mwyiXma4RDRK8gce7HGKbaWJxdX1ikPQFLURzGyi6fPyRy",
  "key18": "557HK1dDtT97QKnMJsTfy39ukuxNHTsprpBmxSxdtm6eYsT9vjfteAuN7nghUu93VpsVyZDCHyDEcxc5yzsiZK32",
  "key19": "4kp1rpZscNNEGAE3n7zFyqt1r3F1XyLxeV62MkLsFPv6xkRnwUzzNsPgT2BMQcSxb6ZNvf6Ph6kaEyHNYCCyXoo3",
  "key20": "2SsMwoxecjMwoqCUiwUhJqgsMaoRjzvqip73DgqdtSL9U2BZh2K7NaYg6NqSd3DuXuh84xAUhUNom8G1t3QMq9iX",
  "key21": "3vErgVS8qn1nJAotuwSzdDVPjzf1JkjuhN4mQ35j9eCafyJzFTgwVxtwWq96wMRukgKK9ag1Bx1jJcT6Gg5yij4j",
  "key22": "2wt7YRJbDNws7sHw3exD4xk1LChSpp25Ziba3qwRK7462mHdXRXniWiLCSgdBWjbfB7oJH36XYBMk53nZapccpnt",
  "key23": "4FXa2R5UQq4diDJVmLRbz7GFKyiGqbqNPAx3p71J4TGrRCHafNBQiSvYVF87JqfxTYTHNMbKhdumF3VSk2d9p8Sg",
  "key24": "4PjWKQFR5ooQjsfGhSAmC2DDgj6RWS9JMsQJWLTogZam9uy7xuAtnDgrwuMkc1qhWDrx6mJtPsSuFedQ56XzxG2w",
  "key25": "4m2aR6uXFtweZcoZ23ihPpdPApBuq8VrBtCx7E6ZYK52oR8GLmPw6GbU2NzfqoqUtoPnN57kqFPaPrbb23PgsC9Y",
  "key26": "QkLvVASjrbUKLhEMJNhNgBDcJTQBjLg2pvCL3QxgxLHKgzdirCdqnwkxryWnWKr33GC9WhDyHeQM99jiNCxEkiH",
  "key27": "5i2YvQExcdChdxXaVwZpJZUy6PmtDzMvZwVzPnPoK6TkQX386Y3tPMrjE3MMPUA8m9R9cV5vh9tBF8G6NKsMhj65",
  "key28": "3yNcs3feqxEoM8Y3gnkg1bftu664eMDJ1S6JffKTicBCqbPG6LJ4HhKijJrttQ1moHcHjB5J4ThbTcCoJ6FNUdKR",
  "key29": "3QZRyFGsZ9B1Yvbe1VJWe4kVAGZqPPBaagajckFJYuHsfZwnJHZjbp7nwxDL4jTQ5fsZxBd8d9Fa3ip75fAQWSR7",
  "key30": "4CggwLbZ2ao8HeE2L9G5WPHQ8NMjsdpDiQVxivnoVQG7ooLuuU8bH3MMtNE3oSP4ngTstLsAky8x2esH3rrscUgU",
  "key31": "jorzUXWA5W4yHU5xfnMW7ZVKc6wRLsBFnJRtbg2ZonjHnh51nKGdc1C5nmSLp9kWov9UeKh3SjH59bVGeY2x2uw",
  "key32": "3N1FAfxLXW6ZZhuwGaFARDpAhvzxNKfTNruqtXpyGbRp3aczpgomCDeEsVA3HhqoVzEdgGcwhUn76JUqMkb6S4NN",
  "key33": "UH7LmcsGitftafm7WsyAe2z2FeHod7CANbxfuyvBCqqj58D513kTfhMV6WpkAZCy2CJDizfjouNjQA1cAJ8Tebk",
  "key34": "5fsqGwMSFFmEGgHo45WLZ6fixpLxAC8gtJ8hdenXB2NM2wqvJCj9AsuSrTofzGLp5jFXnuAhaKjm8bUzC8evGGnf",
  "key35": "4ogT2P4J2qToAudEedHadedU5g7uMFF488y2nsAVq64SjVAhBhogVnirqDAhVER5VJ8B9tLPSG2X3v5UnXE7dDMu",
  "key36": "57UX2X6fkKamPbqYHMAiqv7EFTSaBmLGYpLKtNxAoBYex9cJykB2JkdjcxjKQQpsXfxyv4QCJPuiy8EC8bCHkFM6",
  "key37": "2aZkVjPt7JmtarhAnLE5zvWnJtGtaWdfrHK7TsuZLDw32RgGRDeMzeBwUdDLjC6CGHH2zni1stfG9iPxuXiAb1s",
  "key38": "4myRtTuDo1kyvn1tUkfWSvpAuWv5rZyL32wzQqWieskrhqfpd4DZVRgZKd1CbDvk8ruZzomhnsiJjFW1vDwUSgFA",
  "key39": "3XwVvoHsBGuCX2nohHpacha8KVDdMVohnSXsN3Tr79UMExmyR157FAu7zi9ndSc9RjnFcbNZY8sDpY9VGLAqaWoK"
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
