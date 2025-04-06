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
    "3xTaeTy5XWME8tNPNS7irFNUfvNbGPSwz6DGhEAVBB1KXTbTXjYJy7if7ygh4SjsvwfPZcFkSZ37iPAodqjUnEd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mzna2D9QgvV2wCzvBAanMzzKWh4VqnT5Thn5JyGZrLeLL9Yp41abWXCpEU8MeJw1wW3aRKHjfjZfyuAGPHP6wG",
  "key1": "4i4DfLoMT9LkLLoud2V1x5W6hg3z8LPCYd2cqR2Y19bM4dC4n31ND8NX7wQN9EpLGRthBVbPJ99m1kAxa8FXAsB5",
  "key2": "xNWr7ogmzyp4padYkPzxnzYus4NpC2gGwzrmyjsyaiEnJENdJjCT9DYM3QTHmHEsXZjdriZGbdrRCXxBGC1cpmE",
  "key3": "KZfFtuopJjAQxAjC7bET1gyNBMDdZwrGp6wWN7Ni3JM7FVTWJYcXo6dtuwFf8sxxhdSewe8oGkoPJQETzDf2gSL",
  "key4": "5AaxUp6vKTrQ7KhK9TxfprCR1dkVFYihMAAZUZ6oqVG9B9E29sDYC7vFn6VCMDji84gYMUkciy5WNBykJRhKM8mH",
  "key5": "u2tc2Jedfb9nXF9ACzPXaSh143tCHePriAJ5jFtJuRosSvZvasXsKSnGpyavoidrpPh8wdB6kqpAut146zWwmW9",
  "key6": "4BS8EmrLAxUStASvFN3VZ3LTsPLKiQFNtW525VXoYwt7T6a5WX8xozViMXNZ4BVWK2f4moULXbSCWjZSyg3uPVmZ",
  "key7": "42GTTi2UduXMfy1zMKeX48ioN51G6QHCCLkHAx39cXQaFFc42Lkh55FMWWoZeX7LRYXCu9gMy1Lc2W8tWjd4qBPu",
  "key8": "4BqvDJ1WHNSjwJKYzsyXqxu7dH7FMjgasChShMw37Uoj43dB1VPLffgwfpucDPAMqeXfNUbom1HF51Nws3Xng9E3",
  "key9": "5nbiRZZHqXSmrzT7fmbMrgV5byeKmzgJyCTtWjU6iVDgW5B7bh6XtjJD28pdwgpYjwXiiAPwWyhJ9iEhjzoCsjeU",
  "key10": "5cotn7XVjPKGQZwanJc1coK4DgP1fpZr4Bz2StagwxV9xcsyd7pgF2Fa4aTqTg1JZUytT25gj9BTd598Bz231QSC",
  "key11": "5HJ8gErM7hRYv1uHkh1FyBizdSgUfc658kPPSRtQdzYz5eZbitUo9LZyvxC4Sa7Fjd4raGUM9DWvvjPgHhtemeP4",
  "key12": "64aCYjtfQaqoCRkXXFp3XiF5UdyjaJfRwwV8duxuXaFoTTxcV3c9Pafj4JKsdS3yZgXt5jFTVQ64vvKEb7tk73L",
  "key13": "2nisuF7DxSe7jFwwip57MmwRA3Ffa4Qw8kuU1chX2XEJ4QhxYUeaZisdX1qJTCWYPYkbW2QC5VRNdXmPksmg3JCb",
  "key14": "hE3oZtjhLTrBAU9zh5k2soJDJRDeGxpk8baGh2MVUmDNsu4C41uMFiNMWsAhaUyRo4jrAjF21SYNHbDPWDwjMfb",
  "key15": "52hcK6vQioS5DY5x63u15VB6Ge4fig41zWVFVckQC1rkBq5Agco7viKeSDKxeSSgaQNbFKTRVc54ZyMeifm3khv8",
  "key16": "MXY7oG3ien8P7Xfcxw5vDKw4uKEFwnyYcGNBFN2K6wdTkuK2huxdkWFkQvxFbv4xDtY1yMh7ux6j2XooV9y7p2c",
  "key17": "5NhaKdtKi1VRRmGj7g7b3Eqd3CzaRsK1AgUniVWhUsR6SWkDrYLCKqdb8ndu2XrASrFew4CBrinngPRBVK5r4Vvs",
  "key18": "4YnJjmNcdqBWZuN8WFiAvdR2ce7niz8HSL89rYdpkGhDavghoN3MQwTWkqbsimiMdQBo3NbbYVsvFHoAw6wn9mxB",
  "key19": "5yPJiBto3w8onQyXS9wNzbVzdQDgu7Y3pXBLMEL5SYSKAgWZgfTMbdsqcZW2SSkWsbcZ8oMqgf3Trp2psTzbhjCZ",
  "key20": "49cN9iNUwNn7sFpt3GYLdkjWziDdT3t9ZX8TSBXWNEo4ZgSfbrqdjuEJdevvjJYy8RyHPyDzaYMNRge228CTz6zR",
  "key21": "2ikeQQ14kro6EUS47iYXn6LUYDTXpnNbnADurm6gyeBh54QR5Fm9PLXkWaf45nK7ZGikqZmz1nBoTURy2qzWP5AW",
  "key22": "911nj4UrwS5o1QGbz7PqMue5btdRSyMkdqnL5gzYdM2FQot34Cq8h3ArJiALqzDgtpS6AZ73Luuo9SmQFRGW8Zy",
  "key23": "3u8WzvbW5BiPkbmqeP86uoUXfDfP49c1Xnyy1cWi2JSqZ7mvMquf45YHgyF7r4kSLAxhLiYK1hbF7JbrvH8jRQqU",
  "key24": "4KmNBPcbkevGsKr87N1ZAqj66Hg7sMSBhjUa5F8QjL6XfvdAHmZzc1isw6m1dUGsYKjTDkEh9zmXux6o196DnMDE",
  "key25": "tw4XnKcMa7Gu9zwNCXEBMfFEB2TpMM2sFwg2z4tYqN8R45YSgGgjfXNwtFtZomyJ9TyiFoEqeiE6FnirsRHEeAL",
  "key26": "2jNYid3bk9uYYzUt5GWnUCRTYaUWQAQoM6et9ue6dnoHSJjxXTUxaBX5tBREegqZrX8YbJePmbmXzVMNezsHDyb6",
  "key27": "47sruG1wHcRynWUPY8vroVAtxarKKDZynP678G1oM5kA9Q9psEcs7vig5LJNpUpB552KeexyWypNKH4yXDssPYEi",
  "key28": "3dcJTWNFJm3NZtCWqMjCSkjs7GFd77rgdxrZpvN3hjxKKyxz7PKdXhet94GRKctHH4cvME7bzn5nF7Jo2GAFBiJo",
  "key29": "6ZvUxacANC9Ya2rRdSUq9E55y4Q2tgPH76ntx7Mf7JRBP2qwEVpVPE5MRmJqcy1aCmZYHzgqJFbij5fRn7vMCBL",
  "key30": "G6zLNioztAomEFbJqqaHvqYozQzh1EngGQugSwRWgcgofdyrmnSKQ8x65NoGR8MdpruKDoNNVP95dUL6KyJhZmc",
  "key31": "5QGwqgn52stiAVVy3TtrrBxqCXR3AfWsTgqW1UGUTjfhSoQmYZLe56f8nTZx9unbvCbUHbNPSWyYKLQhV6U4RVeP",
  "key32": "3Pk5GADrcFW36eSQEGosDzgwyYP1QjkBhUUqY9zeumkX54txnswQ5Y7BekiKFfeZ65thpb9gX2MoPFXQuqahngAv",
  "key33": "3cvsqQyi97gFsQnAeaccbdLzvTkmoX8LPp7h4teaHZ4V8RjsH15F2Np1uQ3R3b5oaPomm5mpax9ArkgnyAQuEPZE",
  "key34": "58xAV3sb7ECgaujvDu6jYjxgAuWvAZsQFuLtDLBYHw756nc4vqGmY1jFVxNHympqWrfqL6W56rGLBy77eZ4unhfo",
  "key35": "26X3hXdpc1RoUaDKj7ALQ4KqRo5rfHsYNcsUq8dAEhNFxKRiHrHQfzct6aTg5mjJCLHC8QTp8m1sRM1r9fcG3ex9",
  "key36": "3mQHnnCdB6PqbLqsXocn5ZTT3SwNVwzoFvgRKB57RGeqXvyfGNLxCXjgj7SmfhZ123SS7LZihAsUAg9CbVexpoTc",
  "key37": "5Fyr7767TMecSsnn3hoguJ7J8JdCDNKFjKJyESyVyMF2Chh7cbAoo1txtzB4t8FSgov6e7yMjzRxFwBxiXVKE1n3",
  "key38": "2YuSqLfB1RRYtn2WhHVEHMLg3J3yNnhVH5Z5Let94JeofBz9Dx47cPQJ22e4iL9Q3kvmm8Pk6ie1dFrSEPStj1ry",
  "key39": "25NNAqw4vF5PeK9KHDb3YiWWkwd19HQcqkQCYSekxotcJeWWjmTpbChejM48S6DkPLTTzBixh7XXcYRii2f3cuQV",
  "key40": "3MPb4MWAe6aeRwoFRhrLTwqFWk7h6v7Uw8z5RJqhjQgLF7ukdBKhh3FC4PnfMpDiG2ASxMuk2NTN8x5q2b6v94dj",
  "key41": "2EPZ2fo79St4Sd7NUxcDqZ7yZgf449DjEdFoJ98p81bEqTxAfZrFFgKyZfS1pVoYVWyNJMSYGVFWcnwH8MsL32MG",
  "key42": "3GCdEdxpQ91b1fu9A5RoRT8fUZjMEspCK6ZqQSu3kUa1T9MhJJEXEZmAcn8pbFdYgNjmEcah5MQ5g3JBPy9NUKUQ",
  "key43": "HVXFbszkWxNR4URuTPYuge3tkaJLBZGnxdXpTmAbeuNwiCRXP3gU8ah6WVgcnrTwfosTDDzDBBA8jhWC8b6wsnu",
  "key44": "2jDPh1U5nUecVufTof8pEbng6RwkCp21DnLRtgE1amj6gf6jDYEm6ooxbV9tviMAdTHVgU64UZ5sS1TLFGRMJT3L",
  "key45": "34dpbNF3wMJR7RnjC182BubHqx5FWA5acvdo5jGbpfP7xDuo4jHQxmL2EJGKU3W16PvmtRBqSxUNhC6CYCoDqvw2",
  "key46": "4G83ogjShYnfkmrQPRG6JnEaFkmu84Bk9L9GC6oJiKa2D9B5cSMSGqaa2UDnUtT1acms6kYntjLQSmBBGY1wYrUJ",
  "key47": "cKYgUdHQdZ7CcWpJ5EXrs6SscN7DgCWFVwDjLtckUdyNY6AgH3SRF2jvMVA6MLK9WXvqmwPwsibqBxfpeoRrHcN"
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
