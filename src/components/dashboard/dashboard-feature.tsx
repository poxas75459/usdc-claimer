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
    "5Pq1ZdLemBkvyxLioZwuBotTMFE7DbJgM5ZuEGF9ZNDnwqBbSLpA1jip98yzPdnshxCrZ9kp5PiJMLFM7w8kNjB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdziF74yri6AxyDcMrpqAZJ2Ti1rpDshxr8nUFC7SxFR5RbmTZyRg79bUrWsi9HFq1w5P7hnb9phju1JYdJuSRY",
  "key1": "5eSgqgYHz5QB5cNxUci1fJwHaQUjjqBYU5LXR3zsCDFk9q7nptWniFin9gUjhE3TB4iMX6GMZw21zPKrTUDkopNH",
  "key2": "42JLuHQhHCZQT8vrqWMp1ACz9mAhRYbjp3cJp8dphxPAcEVY5WcAiMdcqeTMAfLHdMVXDDG96rW4swMDDNvZ5uBH",
  "key3": "4zyotBapMYpNBvn8DcdBwSpd4mWPHmifwfBRRpvoj8qMyShuPmSerroKe6JR3xosEdWXUqduHHGchVByjFraMkDs",
  "key4": "2JiqDTWqaUrNYxiEQ3PaHCi53qzzUTVDu1wArmxhzfv7iYTpPvarhVoYfi6CKpmjzV9mfbL58EuscuaNUF6zFLS5",
  "key5": "DfpseSdNe7RwXmaFAc5zgbBoG5EPKaB3e2sUwkMoPCucGzumk4WP3bwerz1sR2BDx7TyYstaviutZtxRb2LUQif",
  "key6": "eQCktXtkxRb9bwwRkmQDrnPHDGRcR1hUwpfeCacJ9Dw2U5QQgQr2s1ZEEmQ6MpxaZ76drUXrKwJV943onVWHzkC",
  "key7": "5xeXCooztcEmpi3D6py55w63FGw6a5G9uMDm3vWYAPhMpGJtWd3Z3Q2JdGVGrdA95smYzvbATeYArBtdfUcekrH1",
  "key8": "4eTQPXDTxmhMcpAZP8U6MReySrWjD2cN6tMVyXPpC7n4JiY8VPSaXsjve5pDDeiQ2cb8FGEkegrTS2YKTvuJdGf9",
  "key9": "3RaAsSQCkkVdXzaj9odN4EM7yQo9WkRNBdQYgUiEyx5DWzCHeVyaYdKUhwamN4Q4Jp17i8XT6upcuazqHx63jvcP",
  "key10": "4JGVYDyPWPk8pjEMTVfYGoQf2HfDmJtqe8DBXqrA1bazjVEARSANt3sTmwwQVKVUgcpXQSdb9SynXHu7vLG3P7Qs",
  "key11": "2UXXYhu9XphzKRoutHmBmVx5sNWvskiQ5ZZ6QaHfsadw9Mz9aGKa7VPGa9ZmBFJ8tSBXBuKdfZZ4rxbkfeeWtGsi",
  "key12": "66njaWKrw7JCVrcDxLd3nc7w5h5ZQtQvpbzbHMP3wE1gsTCxFseGgp4kXbmnJ83BNDZL6mr9DNiAwadtDt1FdUsi",
  "key13": "pBWTmZpXJnfYaFKBVj4R1h2HcuA8BxdHj5pfHFifGJBFe4j6raWfVVXPpqjU6yR2SPG5dKGyCUf6Q9rRj9RMK2v",
  "key14": "4dKXJjJtRfYchERyFAM2WDzuRB1nCucmjCFZC6s2Jh9tvppbMUX6nxqM3qRnAf7ovvxjfTjqnqs4B7Px5da2AtFJ",
  "key15": "EsqpfJjnoimH1vguumHE6oXfx47FXi8G8LipaVdYBfrri8FuiKXSknYgoAiVe4LuLENRiFwxz9hSfGS3XqPnXr9",
  "key16": "2vEA6pFBcmWVJLJ2i8NPtym98HbHmrF4Uucd6dpRZaiYzN1KNPLysbeLZx7PHWj7CaeruMVmR2gRkaR4dZHf92ci",
  "key17": "vLjM9jy6bSe6EgCWaJek1s3rL6WMeaXBEtfTbnkyesiB171PBeAkJmdZuu66ZhLu63Nmz72a87sChNrBfQ2AdTC",
  "key18": "48LbyeXY8dHKf2J6JXMtHhmqZ4mqADC5dC8LPA1kMpCQk3y2JCTRGeuuYrPmuLauFhfQZgsc46MtXdMj33WLCbyW",
  "key19": "3Waqw65BqBwVLuf19P35frwunx9fBgkMvafpPvDK6sdygroMkGwzvFK7C6ZzSjg1EHSYsVTAKF1oawBWKZtVaFce",
  "key20": "2hRwAbgrtF2GMh9WWUbsaUqVXVamwE2nCUSRGuayiks9GDkZry1NSpCesbSEncRQcBVWbXqMHpHhHn8fJcWh5qnA",
  "key21": "641qiYeHC4BtNmEWXVCtSi3c9gXaNvVvXQEmeLzDzn3hN7FWqRn2Pe84eccroddLQMbwMffpxXKxRwrBaXsi6NP1",
  "key22": "61ecbtdLUkgzC7Yr5t24VnaZHuVFVFJtD6ZGGVXsRXAj96HzwfhQjKWrZP1nvwiYoZUKC9jfBU4sZLbE1b75sVdq",
  "key23": "4bdWKnPJLhXunNjqTGZWW7Qqc7UFzqCS65veXWc7reqdZqTQvjeAikXbQsJi2LzrQpWwAzi1Ee1jqBRq5ZGG3usQ",
  "key24": "krb3gfzat3Vpsync4k9wFRZ8BFcraycT5kPKCqBdsRHLnL5Wyz3TrCsg9t4PyB29bvif856PKre6xiJPfuD4JnJ",
  "key25": "62f2Svn5xVXEkKFBytzAyuu2KQAuDfDVc5aFfaXZHRhh3KFJz2FtgRJTqcNepZQ5ijT9hWp1vei9A2UVWmXe2pGG",
  "key26": "64DwDCHyociJqMTXcwsxNWyxWNXLfwUWWn4tdRe8phk1iUrXvrKwRaLzaGNcHRgXTNLHQfpyDsQiCcWWQqtXP9fx",
  "key27": "5RBMbTG7UcMYSZuCxNeVVym5wisHzPhbcqT6fJY9widGNPs5BTLLrjwtL7vbhREq5L6GPc5bCtzUyqRStp8Sg1fe",
  "key28": "31qpNNfqYbXHBtSWkyzZ1cGEdoPrFGzJ2BXA7TCzGfALzTcrSAmDoWdhbHTWxt9cYZu1Ec3tvjN4eduHTKkQfWdm",
  "key29": "n7De6spYzYL5iN7bVxvTNmdeaA7Yq4kx6ik6HKd34CwpWkLS15bJVdaLpcfpjMsqCKNBeePg2QKAP3y92MTUxGh",
  "key30": "Dzp9fPmSpNfivJRU2gn8hp2vvhuxKmATYZ1mJttmfMeC5izWgtAQcVWxFqffFRGRkazWepkWvebPyMWXroNSfWE",
  "key31": "NkxdjkEQbxvdqn52vgKXenZ5mdumvyFSuWJp4y8KZon2JQT9YWcuqoCbgKUYotKpJXRL4TYsmTLBB99XNmS9icN",
  "key32": "2UExvfuQEBvGAZEVcGLwVuCar9euzuWwCHTtNvy17TigUVaBJVvFkx7Q9HtnxSaFyq3fQEuxGi5Tdrh8fgPdM4fv",
  "key33": "4pGPFLWQ8xWpY75feRTUJqmdvKa4ubVsw4Hbf2k6fVwTdkPKzw8GNvu9TTkmF27osU67F2XM3mEP8Tmt2BmA6hBs",
  "key34": "3UAcBKjNjkDTw3ybVfHtE5DUbjA6kbpr8HhnsdrnWQyx8RggSEGQ6aBFAQAecCJ7gLGnJdvBWyGEHKfudtbZBpSf",
  "key35": "5FBfGDbwHTmF5Y2UpvhLafC2Guy8pdQa3r9MWGK56qxFBLqGASm3Z7ExMKjaKP5QtLuY7SVAgKXjD63LRkUFeuuR",
  "key36": "42VHBTBK38E8RQjxkcdp8zM9ZYiGAVsynomtRA12tCTPY7XddLSzr7JfQtK5ABb8rzGPiG9pxn3eytDfWuwbS9Es",
  "key37": "3MuLNrdkqHTuq5eYQLz2K7toQBPorTZoGVxPZVL5oqENZ8G7xo1gH3VJjoSummhEmnRi1cemf6TxRuXFsVrCRcVu"
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
