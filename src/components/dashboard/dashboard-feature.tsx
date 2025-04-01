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
    "5VF7TQHus8k2AfDnjRzMMw2SSDdeTbWQvSB6iTnXWxf77jTvbUXinVpYEHKnqS1c1qAS5v4snAJB8GSnbFK9i9Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zMJcfbw2S4eZV2mLU2sZcfUWPwqQMdy7f2ZVPUt7nT6N343VSmkvaFdQxhE3rViGGek7o74uvJT5KdAKKQawfEF",
  "key1": "3B4J68JFQbDz2vjTsMuX6AggKms8rSQ6vkCnbJq6MoKrurhGzcdosC2j3xYAT7tRUnjh27BBYhSMX4nhhL2ea1vH",
  "key2": "2HJ5qLrfqvXU1Peykux1Z9RXbjfGG4tay9c7WA8kJLtLowafGoZzqcMhiMvbwnJaBtetXEY7GLHbj1KJWhPv9Noh",
  "key3": "36XuMtNCy2Af9CJApTEiCAEdXoqtBsW54Xpqf4XRPTv8Ryu2UspbhctZLyL8CVFD6VpBktD8A2CsPETFR9AaS6hN",
  "key4": "4uYkxKKrkKerRoTZTUuwPAPDs4xMdEQ3Wu95CWgWeUEXnPvHQHoJj6bb5ffZFZ2qENmQKM2AYkiVmi2qteVBTMVs",
  "key5": "2RDqTYfgJafSACb7gFyvKygsKmJjbuaXqQXR2AhXBcxLB5CaiEN2XaBq9JpujmoFMPvakeibvdfJMCt3rvC4gwTQ",
  "key6": "35ktCQa28fp1JddjCXhfpFzsjxRuWLASwkpxNjUmXEH6MWVnLhFhdV3Cwj4VzZTQUCiM8FAZdSq6uVzfyDiWuCQ6",
  "key7": "obzSqHH6pEFxLGUqqu7SHw9pf18KBVFHMADQLF49USKy3huH7gGDSm1sGUiwHEdot8HesRTSotrGzeTNsqs3fq6",
  "key8": "hhUNCp93dJxXZc8yQnihNAWTNFo4wLU27xT45KAX48gZPCfFdRGha7vQ5UjPE5CJbuviRKL8UjwZBBexKd2mYMA",
  "key9": "2W66sKzhuCNMgo3hWWXSDx735cheQHkzqeJApwuQAQxXnQ8hK2V3QvnTgrHfr9Bkywz1TBksiznY1bWEof9kLfLU",
  "key10": "4751u16UT1X1N3et6ntC4pDKAePfYjzFZAV3tXydK1rcbUU4F9zBBjTgPTGfv2w2LK7GezGLqUgT9Dq1WQEHf2j1",
  "key11": "5gSzm2zFC8RYWBoJzgL46mxYxJPjPsjmHsDS6Xh4q9ZTRQcgVWydnJtmzSUJwqjUSwmfure4knwAAag5QPEZQAHB",
  "key12": "4JxjbgqPW4JpYArzyxyzv1hZ1gKiEhUWw72Jy1Q2yxHeZB2EptX2suuBRNkNUQjxkSt7Rs5dkTPEJHPzDt2xqq1x",
  "key13": "5RqKKK4FguWqNTWjSEpXTk2tkGGWFzDuTvhAPHHjM1AMGKzVQykDKLupn8dABBsy1X4DavEirmUqUwZnavcqyDPk",
  "key14": "23grLp5wdbTPNzKDVc7FbnZccFrAWvqD6mX6dyg6AsuzJGu5JEmKp7Qf4MEn72Tuwcj8TCEp7W3GAsRvrg7XQkCD",
  "key15": "2tMGSHU9ru5deM4PG5dzrqCKFCFfz1UPLvDLh5HfQVB5ffKfTWKDFzSiFh3yqhJynVoVuhrEACRwENqd1KJuP9H7",
  "key16": "39MzwpEeasHchHZ3oFzf4iUUT3mQPbXGJVuvv3FPdhAn5JHBUh989uc1AoCuAUZ5t33xSa2psYFDdNRLmnmiYkaE",
  "key17": "R3xaAXp7N7yqrk4bwb7fSj9ALEFTcnopC6ptP3PMpehXdSoEAvd9vY3KPhqLUDNERFcxzDWDxnEppKsbKpPwzy3",
  "key18": "4aGghMoN9HAtxuhm5ZmTB3snKB1MNNbQrfBSYDuZY2MCYF73o29syREPfEGp1ucmgJ5iSvc7M1WyDArmTJLzRzHB",
  "key19": "53q3ow3wKLWGi2vqexgYdHBEp4YTXy2aqUrvzWcTRdHRq7WfBsoMRdvsMJrYhjvqSwuUaAYQeYKo4DJWMmLjA9s4",
  "key20": "28bQBvewfo95rNFS4b6FAyivzQppCQBEAkYNjdck72G2sFLj7pRyqAfx2yWRvXgqqnZST37pjskV2kPna6CjT8KJ",
  "key21": "4H3iEasak7i5hiV1oYo2dSKCu8SUTvmxKWJeoH8xguhGhoMJXyKWAn9v8sg8dhLhyM6SmFQnrgt6qCbdHw2MeDhW",
  "key22": "2shesrt5VnK4Krs2KE1BfcyPn6L9tRwKQqskk7GxuLWukhmbPwd4hWDqcr1GbZM13kWzXuy2NA1gqnsc3EhjZi2J",
  "key23": "5ou6Ax2eVCYnrAji74P31wooY8Mc4UbuE6T57XA6gcui3u8a8WAPcFTKg28McgbBe2WbbkBNV7X7A1YUo4EhmXgf",
  "key24": "2iwNozHF2tZSUzbernWRzGXbAs6av61jknvT3Qnn92dYaC5fv2Nq2MD4xsTMRkzeJWphR4eehAUWfPCoQtizNpv7",
  "key25": "48MhEXCZShZpV9Yspy2BuxxZZCxeJBVgX6weNPehSwkqEmHs8wcovvYYMV8EhdyVateyrZ6y1izkefecve7f43gT",
  "key26": "4EVcSgrTkq76DX3VfEeXFB5JJjVSZ6iThLyC5qE2i74ignxhDq8ZPAq4P1UHWzgMHuTJR97ehKfUTPj8qQCSaJph",
  "key27": "4XteZCKX8f5EQC1eA3AhCh41sxbY54zTzLTr246WWKYdWw21p86JX8qACsvMgETm8qqr8cNU2V9MEisTJjbSNd8A",
  "key28": "3Cq2G5hGvcceNAZaK6ddnLfRJbYXjj5z1WoGyaHAnPAc3ZSPnZmQYR1PS63e4ZaHLhSia6TEmBSbGaAW4ykw4nRC",
  "key29": "38ygAYH1vkWdV2W4L7xWR617ENH3NnwB4ikA6erQGGEmoxiyV36hchDvjmgcVKJ5hMik41sAaKMbub888UD3uXTx",
  "key30": "1xyfXkXReJrowZ1Ng6knwE9icCf1PsvmNbBEZSUaHEkjBcoxjWqiz8muT11iEyyHtSsKxuNAM72V6NvJCN5LGYP",
  "key31": "3ZTmNihWZiPvbKKUK7cE9MTF6jMVWPXByYJgfZ17xTX7BrPh3iYwenjpC4e1SxVZWUDXs2ZjxzYVgiYQ5aEapo1e"
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
