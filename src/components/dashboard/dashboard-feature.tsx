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
    "9WWMH514X63AiAFVEKWCvp5xg8gqeaQdhNaTjGaavZACXwr8nAusRsAZkv1AdedqSmcMWCuZaaTnL2z6gtabo3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrGxJvkaUTD3o3uFMA5q5HWWeQkmthYgwBbhg1xQrhCXzdzbLL2L9bAipRHu9tut3pd3S5KyN4tzoYcRZ1KQPDU",
  "key1": "3kbms6PFfErSaQcBXSKhSu6Umg6HQxmL4dJzu5hSTx5GXh4ntvzRPmXXueDY1UxeRnHKdjFPmLQnoT8vAgoMenUr",
  "key2": "5LKVU3sF5z2EUNDmUBHSLH5ThjVDzDQy9hDfZRZ2Le1juUThZ37oVnBjAjSjN7NJsGx3MQF6bePp4x3bDGLft2Ei",
  "key3": "4kRq6Gokqp4UrNDz3zLauMbczfZV5UDJzvhmybzNu1CgtsaLFBKprDSCYvae8aRNhji3MhWQanm6qgTVjRnywcKh",
  "key4": "3NFQ87htZXds2hVG6SXy25oz8yPFZxdAvMQ17B3LbwMMMJ79R89y1HNGNPDrh5UkgG3Cb6TaGB4ZRwFy4VCr1GH4",
  "key5": "qoj1KGSCHz3zmCCiWpokmm6XbFcMC763mWuM5Wjfkw2qzr3FFctVzEcxpsm5ryRNm1bMf25Bv8PcRJmekHHRsfu",
  "key6": "3fxJr9CogmCfboov3SL1o4zZWqT9jQVkjhhbWPbK5EWwKmqZRhnqSfW5HjKbGKwB5GvvBu65btYuBk3zcmJntpX6",
  "key7": "36GgT8wPTZ6XKG4nKNuWmcked1Tiu5ejqzDJoFytJRJKw9DdraaMgGUjdYXYSD5iASpF7o6eitWh2ggxgZL8eyYt",
  "key8": "2LAyvkA16VkEqBspW6sepVkuzpYseQ7Ha1Mu1eo81fwjoExvTR4UTHfV8unRVjq64K8bugtToDTx7jMLPY5XM7sW",
  "key9": "5VdFBZQyfnhfhPtPv44vh1SBwy7hPTWDMP5qU2EHZyEiNxiL73eRJTq3dMEmTE9hnhNvgF5daBUxF2P61aD48fUf",
  "key10": "3omaxmPhNN2hRoNXvEZ5tAHiVfKUNZbRZquvKqdFaZdtZf2AkY8gDSN3dh3MyA12DWyU1zyAz7ade6QwDGTVxW1o",
  "key11": "3QeU6mqxMu5hGysKj5v4mzLEifZmwLgbqjxpiNq39uwLEUFd3o88XtoQvg4P9bkxbLufimN4TqvEyPa6XDgd4ocP",
  "key12": "37xtJ64oY999Gqu1nWP5VftWrjajVvmiVuQkRGGhSnrUGm3vB2jWzcanwVRrzanhxJTk8PBH9dfF5p1K1UzwheNW",
  "key13": "3Rk1rf6yBkyQyaN274Uz45ExmvhndwLPQE8SRnTVyFmMbbP5sXS9ayvm4Z9yTc39SoMaecs2JB5zdBWo3WL1tK4t",
  "key14": "61CGby4eBvaoq77njTuGCw37Ncc8JUEPSRMpCPQtJg26jgfqDw6pcEisYnq5Y6TgYe43SqzUMznKvPQLYrVLq142",
  "key15": "3hWzaujsKMDdpF82seM6fzotLNFmFnASG2ms4zXrBDqmfSvds2kn5QXKCKLNFjNAQGERuBFgjVcbcxTN1XVWmkCH",
  "key16": "vu4w9s5Atwpwuvjk9kzVXNQWhV6b2ox7GLbyj3AEFCZrXCgUtgaz1St28gvMTBfoFiCVFMvQBU2vUcxd8HzhEBq",
  "key17": "4cyQpBtzt7V1p3xaw3d4iEd1rhY7RJnC3Z1PoFsBizBKR1UBt2oHkRSwpdMcLw3gWQCTzmMjmo9PbTu2c2ustKZi",
  "key18": "4puqK5e6pirtpjGnppGZYC2uPuHwPZ36sULcdkcRxyRp44dMSyVMWMnun7AdRUSeYAxWBnGBAjGcdT6PLvYA4SgY",
  "key19": "4BxAUu8voqVUQG7MzUjkSeV6MaVY1QZ783xNKRKQo5ihrPkGeLb3s9LtHcNMUzkowfGWzoFC944EYmCSzP8j9Tmt",
  "key20": "2P6T48QLbCAsfQxbAvDLwUA9CCYMLGg6psNiKFiq2an3kdbukh2tAJYHm15R5XphHKi5HCui6J4bYpgucMMzRCid",
  "key21": "3NvvZDtiFxMRNjLRdckzpTXdoTKd6N7EH66UrdkuX3iLZ6NSvL6Ge3SqoDM7YUBhU7P5tNG2ArkK9okeNDwSdFUC",
  "key22": "4mcTZm6nZDpCKdH9LYJZ9LhcMgDRg1LLBArER4y6VD7ngBmpWecs4B2RhW9DADS87EV1kmwCjo9rmtDDNDvjGm7t",
  "key23": "2SLHoZrESC88i97qqMV4DPLjPwpq2SNmv7cxUKvGXmKur2iEvsqqZ9vegCnfWoAuYahPzce5h9CQwSxSTQwst8ex",
  "key24": "4naBjzdHvrisBhqtvS8hyMFG7c2k1DDt2t9peR2xoWdF2HHJzZhLTYPjhmiLdSQieCLcFXeu1D35y7fq3CvP9wW9",
  "key25": "4SThPWXqtvGLxohazHUhUiWJLgYJey4semveo5smEtjDpi3s2QdPzzfkaTSP7dK48cAAad9auVYY3oDPDaM4VAkN",
  "key26": "2BZZqVfWy2HsZhKPmxBisEh5gDaMdkbH28FuwPbPNSfkDPLuUYEqyku7nA12WWd5u1UBtw6tbesEtkriB2yeMjD7",
  "key27": "3yEkAA25X44atzkNx5riyPC4UkFG9hA95Lc1iDX1fudpCGJR1u9uDGMtAYSPthDUQodB8NUdsnVyBM4gniXAXKKc",
  "key28": "dpo1HZzhSYgyVgGgwqi8hxww3FhQCwZxA3vCxKxjBb6gqA4oYJ5aF1KAwivsz2U1UAtfZUCx18iZ5eXfiZ7bTri",
  "key29": "5TibaNJF68m7qNvYRog3uYB9RCLwwj3ZuvYT5B2buQJwUA7SYpPxkqZ8LyJPUFcexafVgTGkphyMT25wQcsdMitT",
  "key30": "2zbuLMtXSjfurT11rEwZm2NzUTDaMq1PEztpBSeTQzMC3oYYrFWLXqigrT7yJTqgvNZw2oH8t9Mf7yCALyQJMRsX",
  "key31": "62AsKHRNui3MWTdcWnXg6roeb13tzLoR7FHQiN7VPq5jgbhudx1fyvsnRJH5TY2fmN7eqWAjH66TYWdLEhBeXnh7",
  "key32": "4Uo2SbAtk1ARzXKmkwRjX7o8BPhndUQPhQUuj5eXU4pmJkaxBa2FcDVHUXemGtfF3vb3Rc6WDQPjjJcA89acUiMj",
  "key33": "3zqCZj4atHQUQg6yBgvUUkh5omynTMbedGSyohHp9vfV9wRYiYSiaWeN6B6EPD2YumMzH8TjUnNxqVEd7nCC9iA2",
  "key34": "5kEvk92neAnrm9Enwfm1p2VbL7QwWoQjUdxUQCJHp3Qrz23c1BZr3To2yrXrAq7zrarniFvysLYTU2NQ3wUVAkFE",
  "key35": "5hfsuX39tSZTAcLuArnT6EZQYrW76GjLF1nWExdoYmji1kUdY1nZATwr1suhkv1WoZbXTgoPp73nMeyFuAVxi14r",
  "key36": "5prJZJfFTvQFMHvgV9iKLXWtsANUjiJHR8mtuJM7saGR7Acbc8YJm1BQb9g3h5SLzDzQbgBSjxSbTYMd97m5ZNyW",
  "key37": "2Uc3Mi3zgtZkP261fBA8xsxUsxMVdi581Wf9NqPdikm6xDBLjkvUbQaitYiK6TEQk26ayWgzg4XigRrSEBb63JuQ",
  "key38": "4rU8JjriNot8rsmhT7nfuFuRwcwErY5T3yGFqJ15hd5cCD37noTXXNRe7zgau6hs9CWhDEv1ADjyxXiPyFyNNd1U",
  "key39": "3jy7yutRyZMnTr3u1DP3Mo8AKv87CRSVaS1Ckc3yuTtSWqCfYZxxWZqA3zqFBZeqCvJtRmajb17Z1WeQP6iYnX1q",
  "key40": "3vKaa52BRMwgeiKkAXwaRG2Ev6at9WkcRyWZHau5ALC2uMVQVMfsSfJ3SQKSczLzVHZrh3TueW3yVSoMBg4YwsPN",
  "key41": "42BEv2Gj8u4nQifTHd55Ax35AF7iWyasnueSoVUpDkcZ82romPJougniz4F1sVYe53fxQeDJtaFSK6srE5mdSoP3",
  "key42": "24QhKuiecXRZBVm6NcW4LoR2hbohudo7osTHUxGtEm8pHtszF9hrnjWvG5FmWcSp9a78yp2CtfEUCABH2F3xmvL9",
  "key43": "3qfHMcR8J3NE9kkhBDNmguo7HsQf57sDZKo5woe8U6Gq9oaFzKLHZprfwS9r3uWbv2TL6EgpHJmB4KBR1yWecb6a",
  "key44": "31EGmdrLEFSu6xW4XNQmzv3F2eD5fGz1aaERBuZcJY8x31nKdCcnpfw6Ld8TLhrQ8oYj5rWUFAVbF9ZDuq9Kpj4u"
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
