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
    "4CG8zQeYBqxNenUx8KCBVEh9H7jDMSprfe1aRbQCVGi5gb3W2qnAwyxq6wN5UZWgB8sE6gpm36nUP3XutNzhJPHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tco8BcDucyMpak8doUaLCZyNiGnU5cZajhEPUCK852Ee9yuCDVmSFt81in8BwaUVmkuNPiJQX8GipyoJGxQv3V6",
  "key1": "5V9Hq2yw59HfowxY4kNUy1V8aFELtSCYrdu7GPP8uNQt8TtGP8A3jGMmbjMuowcQoBrzgPj6B8w8zx1GvcTxw4F9",
  "key2": "52GFufkZ5XHbjCNKkvawTTSV4wYTG1m67PaGbomfenHMiiqQQcPNbzLzRQT8LxAVKNEJk7ed4ZinTX55mR6mFAdQ",
  "key3": "4hX3N2sEBNhQrHmeARH9Gt5rkfsERoBgBUGHDQJ63f8ANwPZv1Yo6VdxAdbnTrGznyQ3JmY52brmqf2sPiipEFQW",
  "key4": "5DyM3rp6dG2eVbzJctWfYfZN3o4NX4Lw4eG7ism25PFb5reLKGEvLVpEAJ1YVp8F6g5izVYcK31H2nuQtMAW4BPv",
  "key5": "3G31e8zWstpQQnfMkY3L83ysLADcvpBiHjb94dYYAWqqdCDVdhdjbBAxocRNGeb26SXgQLaBasycrKZRA9dcef8E",
  "key6": "4DUvZNtWQpNeXnj2oLbeu9xbYtsegiYMAGqRJKrkMuq47NXjcqQXiXW7ask2MjkvFC5yXxjqppo9ErcEmRmHFTWi",
  "key7": "55Ke1r3TZTzMygX3Ja4uy1FWNFMnVgeq1EoeVKn2BJqpA7PMesPp7zDm7cdvqUdDinS9PivpinziKA3mAFNXCBRC",
  "key8": "5MkKodEUfJakWuNecCofgGsQa5Fg3SReJRmEEoqxbscAUUeKnJTKKyYhF9tCLziih1GTrJb95NxquzvCXZ6fWxga",
  "key9": "4ffbsYakvZ5TuuHArApxDpj1mdxv4myLh3GiAFu36fQwH7hCTZBq7TJAbJE2vHNEvQiQkafHZfQWKK8dMFUA1xaj",
  "key10": "2VJkiqfD8XC9YpjGbsoL2rChRPPgArh32eZdFFiLiTTqZnuZi53Mp8UHLYch3o72B4N684K2uu4Kz6ENPQ2Gp84A",
  "key11": "PbZpYvkb2NLRn7M4tXhK9umwPStqje1sFZY7rkHGtW6UVGv6mMwfqm16qK7nCXUnGk5xa6NeqUmjAXnL2Qx5DfJ",
  "key12": "4co5nouMgJTYmFaVR32b54Bo6veSbmP1AAPnSHMogYzVYc8FZUVWACxJd5PbsbTk2YwpMdJMajc7af2KmAXpD8r7",
  "key13": "3A673EzRie1t5uoXCzG4DmrhjrPArJgwD21cJboC6NNQRgAyhGmJWjCefrQwiMbCxv1afm5brN9TJu8vqet2MomF",
  "key14": "3YF8uNsyPwpS2Ap1QdSt2ejxzHi9c6vKWG6MkG2GCkkMx1bd2GYnU5qCNNReLkH3cecoP7n2JxZzULdcik3kRXSW",
  "key15": "3sktUE3ZVwCTsHgPLM7kEyA5UnxUbEAT7wKKi2gdTrSetd5DvjKp6EPmuKDHtgoNQisTiMCqSLWLrmxDGNHzjbpm",
  "key16": "3FSEdfn7UUntHrxxRsWYx28QGbJSADrRfzUUa9nTB4ctgMdL4U3EkYhj4a1QVJ6oA5g8cRtai4jyXwMBXT8zvef9",
  "key17": "z47iryPLZJvi5JmMuXn2NF1xcdmbFatJJpwzSZYBQdaNt3pvtXYKWKvP5rCWeeFczhg6S2RnEc1zmzbhtZ6mBQP",
  "key18": "afcGAzFuoYuT3KbScDbqX8tBebThJUqsnctd7VQTYeagnWhkxhGAaJaexGbxnos4yMd83Z5n8CbvPbeVMKskcbh",
  "key19": "51enjSgcwY5r4WVAxR75tnWSui2onpHpkM7Zk8N3hBbpyHCC4Px9ww3sMVxpBpj6T88qVR977gRvK6PK5iS9HPmW",
  "key20": "5StGapyUGD7YY5pZj2TCBNQMcxuxWM4tXoZs38VfReQsmVcKdNS7oZB3UU1CJagM7xiq12ipqGHg4bns2H2f1Bht",
  "key21": "5AZsSCrCX39SnRdpdtkoq6sqiKfpHaSqgi6NirsgpcHjw8mnHigBeZamYwCF1JNd7TFdMJL5nPYRKRGiYpnonRWP",
  "key22": "66XgzrbmNBD9kP3QWiynxhNQfG4bG1e5VgiDUKeuKcr4Mye1fwQYpcB8SpywmEjx3ALxCsM4FL447SkUMuirChmt",
  "key23": "2sNKnmxgY7x3J64RRvupwiAz5hiitounmDKfHx8djKFgJfDcPHdrxezmTkTzaryFhViECkuLqLPwAwSVDfUuNJz8",
  "key24": "5WjohNLTN1MKBT4TaEh59xdgXJTxfq6U2p2xzx2WfSV5gqHwFDen46DK9wNeZ8voPtJ37NdxDo2jw24h5oMhWd5T",
  "key25": "2zvBmWp6fb2GE5ynptsTrT3ZyUeeQWLhf8b69453A4N1Sfo5SNXNRrPCTis3zhrcEJFJVfLzE6JNZaeNHbwDLFb2",
  "key26": "5yQnP9Jw9j4yvF37NCyfTkNVACg88wF2Edp1hjrJX3kHJBsZdTB8ydGZXpUbX3dMLWAH4mepvPGehFmYMWQvNPo9",
  "key27": "33jKn4XKfXSUknzLjTKGDZWMYKrR4HqNF1EXAMoApghHdBiRRso6DSqpDiYz1w1VoR4vHcaz8BxZAQXQLdrFzvE3",
  "key28": "3uido5RoRxmPdhWBKQ4ctcRaEk5f1CzXyGEeWxby7vHG7wz36jMy9KjTzxxXVXDRc7y5mhvBrnegTRPd8zv5CNbW",
  "key29": "58ghyRHa5nSNFTXYuNtr4pU6URLRDLirKF16Ti1eLJHUNroJAzVNJ8cJXhHQGMUYdCQHJ3RMAYtKHnSe7ThUdNan",
  "key30": "4nASdqrf3hgZUghNq3qakKTQXecS3UT85LDbrxndGhYvGZu54foMcpj4sXiL8rZjfwzyDEo7Rhnm1UWvYxGHc4vM",
  "key31": "3sDFn2xsF94ue1QWcxQy5tWmDYHC1GrDjxJARPkyvRvRSx1MeaTeHuYbpoxw9PtWDQJ7wngFD8KhA7KWVjrR93z6",
  "key32": "5s4KWDAvosWdpz3BKrdB6XUEwGKu89gLnY7dyBxs8WqkgbVVnefmZ8j9zNZttuYPEV5hbVjCSC6B4xB9rnKZfaUb",
  "key33": "3dCtCun6eZ7sRgSUS8aniJRzv5LDh4e8eT2xFFEWh3C3rJxG5CBLD6D5gCBnqdLVUw72KoA7RnBNAe3BpertH9ys",
  "key34": "4w7VSJEm7n8Zs2726urow36eQPtCXAJeCm6J633JXPniynZCPfNtYmfQStSAUtuztntFBTjLk8H1K8XfZreoUJKD",
  "key35": "5KztpvQwdC3i1V25s7LUCKdzzjruAtJponRg9ReevinfBapUUG3rQTmwVgiPjYqaFxk8zTtmmDsAvBLmaY4fGp72",
  "key36": "44jqvDyuDQbqeuV1YGUoPQdVCKfNHbEhZHwhkG8MYzKDAjidAukWPVMcEqjoKiSbgvWy3h7jbNkNByva2vHsTLp5",
  "key37": "23pUeacAMudLzFBXh9f8hCQX9wRnpWZCKd21uF6jfQsgPv8TgqLvyzmN9Mj2YrPwkvspSoZRTzAugvwzXpdxZ6mB",
  "key38": "J6p8FSBw9FkeksMqpps29bNPk4kxLyQAmk5ngs6c6Ngi35LS345vR85PXJTBXhB4GPqb2ksRCSxBm3hLT1WRn52"
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
