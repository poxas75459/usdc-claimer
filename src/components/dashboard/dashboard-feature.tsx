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
    "3LhL6f6QyyBPkibZZE4jbhKsLCppnGM6UgVuPGzgMLCb5HnJxz5qbuAQruroEmirH9MYCVXdd79fbeA4VWfji7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLnBUYxab857J7uq7mzmsbX2DL9oJufwW8MX9gK7o11NAHHuwSKdNVB7CxEPqu6VYxxRtNfif5WknzbMoyWNZtG",
  "key1": "G4A1pZfGG3S6tyVpxMwCEGcUu9qf5SrceBgtUHSiX17YTkH48qfmjsAydEdgYqzjt1YjSGtWW2QNSkeaKifGpEL",
  "key2": "3rcZWbyVgeRFmb5EZKC1VPpdiJZjVQWPLWLT7QrCWbUDgu6MMiKgASt4bZvk8kncT6ptZjK6Ac2roTmuBvLTxkep",
  "key3": "2PaBbHqm5fgSskfKff8BVbaLG8yZUMfwvt5WVxZndGu8vhyje2QScUToitqCq6VqZxhDUXmZW1SWbGicxDu6yeqd",
  "key4": "5uoszT1w2FA8DhcsBhVyHfzbYsQVKk7SGBK8FhnDjZ42yweJKr6BpFMpQVUYFoyVNUZYK69eGivC9JCFR6YzAU7Z",
  "key5": "31HLTxq6PbMGZ3fuQZQCGs5KQikLZvR321iu1jSSN9yaWzZKX1NQ1qW2t4jGbibYtczc1tWF1aMLfBAskBDifWK1",
  "key6": "aZeQZZk23t9QiZvpmdtSrbzEFCh33Zw3FWwWNdchNkuxmvo8c5E6SLTY2uURCoH3nwnJeUh1sU4iTfTHc3XDnCN",
  "key7": "2FyVwMg99FJ2jrDmR7nK13b4VDGo1drbdkejyqRAJx8iDj2ffBVDdtYXGKVhHJDo2b6bwmnrX4rDo4edK5oQ1NEP",
  "key8": "5VvdPQnQ7JiPLKSBPfHuQP2CNyaSemnV2iVri4QMmaDa5V1Z8ZwYQbeAvcXweyfdAshpb5TyCEuayFKKBj8m1RoT",
  "key9": "JgncTpK2BCj3b2JkgF4azuWB1ZAvxcoA3cYA5aXwYMoCZDXizgKGB5JLS4AP6FwsSb3rYuyNwSZ9PKMXnV3ffP5",
  "key10": "5oG53wbpjH45rhLFmF3dR5pp35ZWAsKFkZVRp5GBiBQrcsdMdWkez6GTRZCZG7J3ieUaEnuG9AjTWr9xbMR9sZBk",
  "key11": "5B9msn8biX5rmnv189FLPwgZeKwwx2Lzh8ZEarMGe6NPxtnPGtst6Zm2wRkqrnQhFhZMyEPMpMwnm2BGAc3w1bQy",
  "key12": "2SDhgq59cPjKoMiRonVEYuHTA1KJyVB1R8DJsS8CPLWbdUYYxWoKZixhYG6xNxaoPPwNK3PBXfMQALhE4TSMoHmE",
  "key13": "WgxwvwXSo8sMuhk7GTYmnzPGRcn3Hww7GXRraoWCk38XhEMNWiiisrk8wv3HPS8UhWEAQAywHGVsF8VWbc5jgx3",
  "key14": "3kxvTpTLLoJGVK5wKGrqEx6cPLv589SNyRKNu4PMJetpDJ6zjXiSQ7WoN3QpyT8vVjEJ4nEGrUzVuC6LiBUBCJwZ",
  "key15": "2ZvrBxcmFh2dE9jNHnVap2BwJv9LZzbnHrnWJ9acT7KwwVmamkYSjoUDbPBgiUDXHD7ZMhoWTYAx7xXmYrU4mqwf",
  "key16": "4EKZhtQibzsjC65snVZpkvLCaebs6DbBy8A64sHAGiCCzBVt1rDeyNuGWkmCb7eHjFZ3rEuDG2oYC9ephX35ie1K",
  "key17": "GMuNg2zh3CiZ8eWd6GuX3Ct1PE6W4WZcAs8h9z7KfkXUqud6GE1gWaiozgbF4NzKFWdMapjfr6yLosp1Q1hwZBv",
  "key18": "65o3u9qg8U3dHsNcPyU89UXZSk6AM4xd3M5bvuGBgTAVx88qfnrwViwbXYFbNEETgRxTWSj5MwgopKej33nRgkCq",
  "key19": "556e17P1Hn9XtS5eg73KxF7WMaXH19oHLr6aUqiW3qf2bY943dur8DWv2eqM2uE3ps5LvDPG7Lj7j3gU6bVFFqX8",
  "key20": "4fLFVx7uAG9kijfowpXy68xAF6nXp4rwsvjYiJmWpe5DxbuQiEJTesrW7LTA2WNH6rwiAJAtnFYnYfy2UGouXdDk",
  "key21": "oHXfVpatiD5N1UpLKbmHZRBv5T4iQVRX2np5RVKpeemh2kQUCayPrgxBZuDFyDtyoJ7FNnP1M7jr1LPeWk2YBje",
  "key22": "4VmfNJ7BJX1mBKADb3pBZCE4VEtXU5djUCuzmwhxnzW665X9RjioXCKKrq5yRa4mc4jikJw4DMDq8n67zHPn6UY8",
  "key23": "3U5RCfZn8jrCF1aF8owAeGhQ7REEceXKxdNEwdZgriKgHWBsXqRSsnJY5jbzuxVyfxbvUYDMn9vhddtZ52eEAmbE",
  "key24": "37Z2PZPjEAaGbojNfkTYBVjA1tX9fCahGky4DPbWezopN2xTynEXzGPUqYfmgZqqzcMr4i68ENWCuJyHByX9uj23",
  "key25": "bNt5iB6GwhcAnfBt1kzpJYUTeCJ3rvdpsfj7jvjYCAX8TX1jnWqkqnpjHcUsnMGzXpYpwXgeFrT1DPdyX2dnvDe",
  "key26": "UNTTDiAMYzwDswYrdBQ98rVBCZkNFfxrgc1wEZxnJces5ioaFvHZ7rV5PFa45ZRk8S3iHyYnFe2ygLf8RhSRNap",
  "key27": "2z8r1ykvJA6VwkcQtXhgMcyEYwfpPWpqbx5K2pw7cXjBioA8oQNFgYMWMsnddFtVknWaDCGk7s1d7uHmPskdNeLq",
  "key28": "2zu7CgCKsEBYkyiQjnAV6xirAe6hsayjXtA2PrkzhZtWvLVr2q6GyMPPvzr5wFrgjKUfsEXscGtxFuAjMFwC81wd",
  "key29": "3qC1HXBzBL81ANBN1E7yQH8rBAGEtA9rps2f8US99CYkAS2Ke8zeojvFWeWmoifpdnX2LSTa5D7Lnt6tDKfBTK2p",
  "key30": "5dYVLMTAKuKKRRJzjrHe3pZpKhsfs7Z5qTdknoQNqx2HFMsWdgZ7wGnBHErygwEYRa5ErAFRN7hbPnEs2w8hLcnR",
  "key31": "57En9nUgUzWiAYGapMDJZ5xdCVrooHMNRiz4vFpzAT3AWdAZpAepfrjx117D7n6MMB3SEuJMxs4kgs8A9UZ25TBd",
  "key32": "37FHZPC8rTEtEnycHNwurJyufL4hE5VxVHEyJmhDgDK3v7HkhYc66v33DsJULtN5PSzmoKdDBcYAtbuHhUgN4jfj",
  "key33": "kwQSmxjEiThHULV98KteiSuQNDZSp9H7Mk6ocwB7FsXe8oEwkS2tmA5s218sS9Bcsbd1FvAza323cdN2yrj3AMG",
  "key34": "3XpuAXCH3Cz2Y1pGbBxHLVkzqWLANE4k5Xx5QaAwJ19ZAnKo6kuj4LkZtqswNmEettSAr323SN3SePhGoyNimQfw",
  "key35": "5DbHipkm7hXxjon1PpeBBucPbaUt6oUHxcS3H8As4FsbqrQqMJL3AG48cupsqBueb1Bq93yTMvCQ6Dwiudfx7wsy",
  "key36": "5HmXHR9mzbb7XoqQrdkY9SqXT24LnhhMvNYCFsHJpGqLzGybyAqHt7hm9DKtV9MbcBtHe31JyeDDZVZ1DQLt7SaD",
  "key37": "66ut16rH44MejoyMWSt1woWNgYeTHP9UkRVVHuPrLEC5fbNraitnwHxFfFBXfxQxZ3JVnncEc2n1qAEdkekiZ7RZ",
  "key38": "5HguXUDXmRY1G6YUc4uZbmauJWpEecn6RGa8havdHJi2HaeQvoHCSK6E8H4opRxDBwKVYZcZf2YH1FnfepA1StgJ",
  "key39": "5zVFcpGADJiBDMXpN7KD8fYqcEghpru6fxqUgQnNDaPCPsTudYm8KXVQt8goR7q5zxeM9zLxov4LB9KnJUZiauyz",
  "key40": "5E2BiQ3QeTWhe36SWtnMA2rN38ArTz3Vkm2MQLYEcTABNWM5uY4eFKWpArTJmLwGrWwj5tXkZEJSw4ps1oSQK5WB"
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
