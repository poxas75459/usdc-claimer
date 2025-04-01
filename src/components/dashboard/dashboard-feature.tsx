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
    "4YgG4fwVZvXLqSzUWyaqLQsEDsNhe4CGKzqBokB7tJm3QfRQpbgnh6rQWhrP6qM6AfWa1eSDokuKD76ELRw2GBfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UHQX1wKcGttyweysrXixebYPZc5pM1qUAPaahqSewBtRj2piPRWERaezeMmcVCwEuqEs5ckNqaU2g79dhpLqsj",
  "key1": "4M9F73roGnKpBmnDcvTPDQVwKEd3Qhmy9oT1G9JnwtdaNxStziZ3sWiC9MPUE8cSbAvHhVjX5XLEqd9urPXqt6pQ",
  "key2": "33VW6h4EmNinyTEymsz4phvx1MpLsLfqTWqKzach86ZDTpPLPxmL7sLo7Ymm32W9rFxmjRKN8YQsfKHGTxSdCpez",
  "key3": "FpsR3SzkUGCoQHzqquLSsDCoUeCAoKD26BBEaLNhJs3kKpt2YGPW6gqMZxieXaB9jfmyrr7nvdV3Mup3KxtwG7S",
  "key4": "5VoHRZoeGWSLfqkuKXs1qogCGAp6KZv4P6KmyJqX1Ca33DEEGmK3HHWCndseW4kFqBoe42pce6XTkUtkwmJ7oiTp",
  "key5": "2jZzqxmZd57Qgn2TvdHUgt6haEp8TwjeWtzzsZmgQHSG4w4LxC2dysG28q3ZAy9krgAkA84x8EbbEnzWbk7A9ChZ",
  "key6": "49HsVmoK8yHq8Nd1KnDfwFDa7d3b5hayH4rX2aParTCAyoHdHE9H6HogusdQtfBYos4W2pcmP5fF5sr16NFHcKpF",
  "key7": "5Mp4CAqq7gnywZG61qUSbMX7MXay4bzeo2fe5qmuKybV7gA76fygPGw6RjYr3bqqdRpLa6syKVTa6Vb43DGbZkZJ",
  "key8": "3b8cy1BMTqv1ZpPhYBS5CkT5KqPZccxow97xNvazKRnXTe1P8rNJC4mUxqQbaPnoB8MJEgHjZHS8wagiU7r2AK3W",
  "key9": "2wntVgKaGsg7dZHABWWvfsGTNdiLeiZehGQHLMSQeFnc8VPtK8rM1zGNgPjoTam5oHVH5hpb9D7UEBkDhRGbunhD",
  "key10": "33hLdkHLwQPwjjXWTKtFvMdrRY6MHdknEWKkCmz3tXmJmY1Fsx4bGvdarpXCBDUdWAvLH5Yh7nqeq8s44qDVGzsg",
  "key11": "4JnDnmD2z4XQygBvZNTAbAxjW6YDhuX1tCsNUfvKpY2oiMNkGWuN1wNtMvQEdbgCQeRCEQMJiyt3iax2siDkFhxV",
  "key12": "5yZfEnYDX4LbUUcz1tUhHYhds644fTWfhyvzN7LkkVdQGbAoPUc2zZSrr97CtRbNBuSqRqFNkTWfHGRKSbbZuFSR",
  "key13": "5s39xeAHEogCSJU4kqa5aJGZT9w9GQPSLGoJk6fmDJLvuY6poRhfQQvu6Zbxref6KURyCpxoopfBMCPFswZWwafU",
  "key14": "4FqKBJcVtfiBnTAwuiWmXC7PyH7zyAoVHeNfwQEDhK9UDdKFXE2fgjkwwZqBXCTcV22vqU4vo4NyLdbWPj15VieE",
  "key15": "5vQE5hPybQXtoAU4mwwd6e3p5KaxcnMBp624njg7v4z4355UBHRiemS12XUXFLwt4sZxZDz8wNgeEYBy5dQCSfvD",
  "key16": "3NYkxVLCnke6ohEdJUTpBc63qfZfUL9PhxQR2ZcJcD4DKiCVWYPcE9Fnsz8Sy59xdokNvh7c5VdAxs6tAkkMmFmE",
  "key17": "5wLEh64cXgGiQUrLvWdh3MVEXPFYixbXizuRAqgpy4fGdLJHmUTvVrWR9mnPb16StgTPY2QAFu35yxuCRaKi9tP6",
  "key18": "2QDqMiQrJKc9teEtLTYKeW6ZTUCfZz4tzxwrDcpMBwNWdZzpcaB8GfAuixSmSXsqawqjdPShFn1Ttj5ruWuEHhr8",
  "key19": "4H7i5Gpxjjp88LGRJ4BHqAZr9LFWBzka4gC7cmFMSwnQA67cxQpAri6G32rYZ6zNKxqKtZXqNc9duiBg4AneK7qN",
  "key20": "2gwGa8oWxR7qSj3N53qJBVuZfUvxofChCfWZTFSSFmV4vqU5zjL5v3HNHMdzJ2j6W95uxXxG2UPA8USSJNdAjrKm",
  "key21": "2Eb5SHJxXtSNYhqx2haKVxV6xKLWzbTzBqDQLq3RaFXJVzoHpzUHHS9CSiLkX5KktwbPPomVFyX54cG5QCDGsJzL",
  "key22": "25n3uSRxG7dX7Dd3rAZY2WswHAZhsEerKcPdt6w4Qd6icPhziT5uNdt6iUE6z79byyaZxDWH6RN7gbpS2XPMeaFA",
  "key23": "4E4Vh5s2voWy26yZbXY3wkqS34rmw8MHxwYcsXRj3Z61xpMncaCag6m1vw1ze9t2kc4aE6oTbzDK5P9MeVXy9drZ",
  "key24": "5GiYYKg1iY2aFdc1Xj4i5NmH8cGCb6w7F7v5VHK9macfMyWvbfPkZsYy6L2zLR6umdehWtE4yvvUrkpw2pLzHSaG",
  "key25": "2g7oKQ6B6C8AbpXnY8JmNSiHiMdM1vJ4y7TxJCUoEK3eLotwV736nTAFbEHQX37zJt8a3etUcrAPPhHSFzJpnxbz",
  "key26": "4HZjT16zs67iSJe54sQkPtpdWSY7joYvsFJLymrgDoQb81psNvnKeV3Jc7aqbu2f73ww16AwavPrRj7SWVuuDZrN",
  "key27": "3zo24DE59HJ3XbTYR7QFLsHajGY29vB1pPp29iPAoiLSMPqZCmJM2GiZKR9eP2kw5PnWFdSm5cSh19oZ9jx9wX3N",
  "key28": "1tF4pEkdk8SfV2kTtjXL3pYsBGP8XtyM4ewc5123aELhTztJri3dtCSe9gfAEqJJBQaMi5tJTnaebavJWWuLtKm",
  "key29": "3UCheDrNRQDwehyW6bUF5k9o8SZe9RD4DPwh2zaKS65u5wZZZ1JMv889GmUMJC5DAus9kmPE8fFxJrEgTWKXSy9E",
  "key30": "2V8JVSeN96Qfv3i3xQFbNjx5FbTvhdaniZytbtn6Qzgyvn2upVTp6xnDRbDxRiGow125H2aYRfhCtWuPjNQVZUfT",
  "key31": "mQhXsZYg8SJRZWTc4wENTViVPv3xUp1V4wWRCgRXWzjG9pB1TBanfJLrdanQT8kDyasL7M9c1bQWqhb6XsqfMdi",
  "key32": "3RsmKAZjxnoB4bpnR2VBu9JBf27ZigAJz4dggTiLmma7XEr3iZLFxVyY1Lh4zN6KvLRFpnkQQTrGvjcF2SEkmEkf",
  "key33": "4iFY2q1Jv31HsQtMknbWNbxLQUZTj772NnJZH4TwQ7tqMedeWXPa9qVMRcuw5Bjrp23QejoNbwe2tVW8CLpXRYQf",
  "key34": "fXR6BvC5X5hZ48izG6xp7hc6feV6cEZb7PwDY4ixJxsM5g3tpyrKjmgMh2NzZb5L23V5Kfo8yG5FaNEZhZEi3T7",
  "key35": "5G68oNu5wrZRW8BeNjTUvKHHD43QSD1syJLGdLoi1JgnXmg413vURTAYPU7qb4KpU5btvfQFZFvrHPWHBiTXJ5Eb",
  "key36": "2h43VNRLvq97iTFqjCXwD5TtLiznPbMtPb346QDaF7LZ71UxRqkMTNdzGEa97hZ9Qu73RNFAoFZobA5rNofiV8pJ",
  "key37": "67YZ3Hc7xK2ZRP8CembYDi66YgbScuLdyCLXHP4HBXAkwNnJELAf8HqESCfQ2gGwFQmEtburfY6GFm3qLTi4SVtn",
  "key38": "63njoXBNtec5QK9pVDVCGPsSMfJR9HSaAHbm7wRArdWySGBoKmvcUguMGJpqLCtrvkM69L6Fsjf2fSWTJ5zQmrc7",
  "key39": "fQBY438DB8jno8Bb9xbPdfq2kYeJUM5YM36bhhVCcRAJobmuo4nM5Q6xjiq9bpcuyiViRX82UFcTzDXyFAgw8Tg",
  "key40": "2YqZAPpBCe7axcwKRmJ7QNMEZpH2tDPs7GtKrjZN2urFjRMVn1UcgoKSzdTQ1achP5nMxiC5GAG2dzM5xUKqnxDf",
  "key41": "3bSAyjDfumKPouKXEsd6G6kErHfMmaaVtuS4aoTgQydCRLsjC8i4oJ8vN5knA9CQrSADD3ugpAC4NzzLs9MoiT8q",
  "key42": "2fCVmcdv8rrxdPshmrzwKiPK7ukTUuuFjK9VrkszgnLcRd5aQWuiARuqNgJX2xnB9Kfy23ewL2qCwxphg6kZYBzu",
  "key43": "GckVdrQAuqALQjWKkgzfZUGVoCnCxxM6Jw7eazQpeDqL8N6cTVEKC52aPMG4h78SdY9bfUo2gWpbGQnXFs6z8Zn",
  "key44": "4AoqatC2A3KSFdQCxWHLMpgCuUoAktXQ8N5LK9QU5bTfrvHMhvkYgJk7WkeoBgrPi6MypAtjNWrTC9Pm9hUaLN4Y",
  "key45": "2gWt26xi9ufWHo66AevuveT66RsY1XU3bFyuse78iYjUbk3tWmWK1nssZzsLYP7W2y4BeNjASTuVMt1AVGhWLJAe",
  "key46": "5oh9MEocEniG4GaBT6yEE6X5sFqq8K5GsVNkoyuZ1wqwzGKTnpx6wMajqLeahg5hftZjQGVvHBTiYjYKwdXNFrZM",
  "key47": "2g2zm9yJxm8MSj1qW7YDVAo4wtKJGQYRWquhcL6xirYqceQwMrcagn8kpEFUB2w4QymaF5aUMtb9BmS8Lrv2PitY",
  "key48": "4rXbLVJbDucaXAGFURkMYGcqGvRHF82w5SMAXvJkB6D6mcEqRkdWxaBpdWDk8LT4gGmNjJHGZB3HqhAvs8UNz3p2"
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
