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
    "3qbpvp98EaLC8cG3ZShhEEGRBexLi6r8AZRTp1eXctaeCUbFWA8hXds6F3d4ZUAn1cuKWGUffGbXWSMUVAmEaWm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6iX59oW5aVWyBaZKcSAXL8t1Vxt5AX66vjCdycFW9yvCNrLiNz7xfmZwmH9mtWnHRQgtPweErXUBke6CnPE26f",
  "key1": "3frruf9kAGMznqomsMv6FNq2qZRRfZnBNb3PYKekws8GJbGgjqraAVyCsCB5CvGo1JBh3buX5zBioj4uMsmA5Cbj",
  "key2": "Q7TyrsPVdChsv6oXPvHQ8WW38rsVthge6vVG6NfvR5WQZ7UjNuDopjHLtK7VW3dqYA7wt6U24rbrRsBKkGpA3U9",
  "key3": "3NccYeWZQo3eEdjfpw61cfVRr2ZecNHQJejXuTsodkq6ErBwYBtzHE7K5Azwkfdbd5KpoCbKJsWaz5L1tW4MLEw7",
  "key4": "4qq2spUkMeg8WZAcPdsWeX1chqTq3cyobJLy7YijArf1tK2degnLWXHgjUFeoMQkQMBdi1HYXhiB1twQ6Tba3Cb2",
  "key5": "51LdAYLhFx9WwykvKCZdwv9sKwfgMYGWobn9r1wsn57kRExKZTTMvHYg1d173f7FNqvYABPhn9J1DZArdodaA1xy",
  "key6": "3roNChda1aRtkqgKRs3cGQgB1aTXzErGhK5hDVftS6d1F17DhRsvyXyEwz3vw1gp4TVbWNk2QXAWGjLweCf35BZ2",
  "key7": "47yxCjf9g8znvBVVUbAy1CFqnhTxSBvrhFynFVTs6Xc5F795sAELoFqW9Xm3tfaSxsoYGo4Wu1GQH16AXQoPNTAN",
  "key8": "3kGS5iy6ph27rs5AnRGCDidmije8AAb7j6nzyaPWWLT1hj9NkehAzf2ZZpppMh4fuixw85x5BdYb5oqgykJvQjJq",
  "key9": "zxL444wVcdQ12PjbpN2F2FWG8mkGAgwJaQ9DiynsmenStiseidFCzE8xBHTsxDSPJxB6pchh5pVgKsHrPHhCdnY",
  "key10": "2fhsVZ81zvmiABEpxJ1fxFQgHZ9ySc8ZrmsvBrn9f9Lx4ksQQeNXTpym7LCpKJ6kiABq3SicttCKpFdwJo8rYrJ5",
  "key11": "TaQTEuVY3jmpk6SKjSD96vARkLwq7TQsackZu1Zr8Zgxh1fyySuM7X8WMN4JZkb1U4gGSeJaEMXEyZwGm3QWhS9",
  "key12": "22r8FQfz55FjwqVTiKNyZ6qGVfZu11bCDwkna9uHzBWFsi1XY9uPyARadwnPEmnHih8iucvDcMWpjZKBMCyeuCks",
  "key13": "3kvMjdC4uTyF4LtDPPRQjm8bFBp5XsZVprvpmYaRPmmaLnAvvnoT2iDVAjsbFrXgREFKqPcpBQR2zEErmQRaJ5W5",
  "key14": "3XHgbZSXob2kSc95Bh4eN8zcGkf73RPbgTqW8x9ii8cJsrU5Y5PM7NVN9fXx8Ky49kQwjKmbvn82Z1taP3NA2cm4",
  "key15": "4kurudPSByB3Kt2ivpPzerWxYnUZcGEHFgUfHpa1YEUWkiQauwgU5Rptm2mdvEaur5k6WhjLtSu1qk14uRLMvoDJ",
  "key16": "3Wv4xKDbUzvcp9wmcyhoeVm8YPxtPRwPqys142afwr8zS7xwGjWterNbf1g468VUsmyN2nxGCijhsaPjPafa3aij",
  "key17": "4CVFXmpthTPMpqzCQg5GY8pAimqsPejiWBC2gu3Eg4tgc5gyv8myaCWzoBRhegHhYBMQ1h1aBagMwvEjyWYd2uWS",
  "key18": "3RZiN3thD86zf2N7xSUaGPEnxhFtpcJJhFV8inCWDCdupQZdWPopm1e3uzKtqgoCY9G5b3PprZ39dYL3j2RmTSaq",
  "key19": "4hQGXnriZtkohcCbH6Bu1t9iLQ6QqQAnztZvH7ujNLxaPCL9j8ppwQx7jw9mgJe63wPC5vy81EQRpoKxEvv57MsS",
  "key20": "5YLC1zg98TGNVLcZLHuYf7kdkj9Uc3Wtbtm9A7MReeRaFhZX1ocbwSKSNRJU3sB5YgvcwGFvt5B3yivWdzVKuCUD",
  "key21": "KUSam1DUxvrGSXD2vT1StTMbgULv48Timg7hYQDKhBxMz22Q4MrRPhVdzSXAcU3CDeSzGaq44VBpRyLxK4jDLVm",
  "key22": "3zap55TEWXJqAB1QEezaSyQ66tRgXN43zufmRnBYTBaZrGFkvtAhrYxaG54MZUvdxQcSPZuVRxp34WF83EAPjX6g",
  "key23": "4SfvHMgS59TgSNjtSB6GYARVUv82kpiTT16RQeWY17tWSbCGCLiYgNshx94d7CPGzHP62rsW5wVGHddNtArLDGQp",
  "key24": "3FQ1fZJgMk8YVqjiKzyRnbvHrMeqzm8Mituv1y4ZTnBDnk1iUs8PLAry6Tcp6D3A8N5Sc7H4gqi89sLV6XPwRzaa",
  "key25": "2b7A5f2wV3UMJGhoQbKLJPFS1vMsKJG8H957QUK4CDKC1zma3b2RyDVbJUVqFykZ7sSkXoJg5NmdaUj2BudwTM8h",
  "key26": "2RZwoaYHw3AXFcxa4237xBJoYGiYDqTfWBYaYayP6imSt7rLkLz42uEenaVNFABW51gfj76Yqu6z9Psre7ogCxee",
  "key27": "5BtSqounP3u76PnKNPF75v1U5XU3JkbB3RPXzYduUkTGB2M29pevhXcUhsfVUWH4uPEPpwY6fA7UB13MWtzT7yhr",
  "key28": "28RKZMfctg5VitaTqzDtzsG64nFo5SX8MLS54ydATFGVoraC94TqGCkWgitDu29vgPVhRxYKfCcZQziRekNw5PwB",
  "key29": "3ZbfkPv4KLDZpdhbTtQv3SWecWVBnQr9Y5Hf7x6bYuL1Dd22nGKGkKaoenQAaxmCtcMsLsw2ALuSRAGtd1qUxtbD",
  "key30": "cQV31Z66y9qWGUzrx29trUwM8q6jgJMeSGdCYtvvMEfQCs6HAe8eDpNP9eG77r3SuvaM8apZFTkKeJLoGpjQf5S",
  "key31": "4xzyU7YZxwYJKwRvoMyQCsCdQH5ewvVbb7MEFHYooVQ2iSVi7qSSMKX5XFuWqwf4rGkj5H6ABsWVo1VUFowSam6y",
  "key32": "7adECwGvPDRAaGmHLpVsnuX33zjkrY45zgRYf9Svj9VqZWYbmea7TuEscHVHUVFUeY1ee3L1hhiLKAZNJbUFZQA",
  "key33": "5v1RtxKQhKoRFK71JPHhitacSgVGwyRJZRUo79xCqAjuu2pkPhuBt4us6jQcHYdh9xoKSJq1xigQRzEA326TkQSg"
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
