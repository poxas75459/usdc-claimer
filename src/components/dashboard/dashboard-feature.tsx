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
    "GfP4icKhEjRLZZLcgk4sPpBLRx9qbWoHVQQtDLdv9y781KzVp4F6XYHmYXHKSNRwGSn66dsTzpTr18tuEYKCPLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7Bkq71PxYDbkWd86kk2TYdH8CXJyYjcQj4bS296HPR5KgQnrr9fzGfuQY77fuFjDMsxdW3kQuC6pAcxhtePVH6",
  "key1": "3RRQyomJhfPDVerpeFswDDbwGaJEcbLcu25VpUTYg7mT3d9S6Lex1SdDb6tz5sxNNnZCjeXWT7qaaNuJjPGomRJM",
  "key2": "61K11MLiWo2HGkUxExDyVJsAFDkr31ERNncJUgsoEVXAVXXBpxYbasLZpWDar4tcnLCGX2v9JJQZW8Kf1tfXEJu4",
  "key3": "tnFG1DvYjyRh7qiqrsBZq4oSQ4fDsnRP1E4aKrsahvtuN9usLJcAggFWWEV7oAR9qbArxdNo31V4UvaVX8YCiHQ",
  "key4": "22KxEM9dzGJKzhSWxYWzjz1jTiysWFBsado5DxCedZPnYNfH8rC2RtqAnM1mJC4vHfHwbvPzjZcbxZbK6P12tRTe",
  "key5": "2TyjadUpoGPFTeEkmwyhsy9Sb2Yt65RSVemPtKTGdjLNojjePoL4hsRex953mUrQDbjrcXnWTHVkyVBv5m4UCVe9",
  "key6": "5ZV72tRcq8PCuG7EFSX88DCTL6Y4FK1mfLwKihdQnNDPz8PuKxnJnwXCqMtRQCrW6Uma8JwFR7o8jQu4DdomzoTR",
  "key7": "wuN7E6nPs3oSH5Er56Vj7AJZMJvJ99Zz34da4JLvxGbKjc5Upxqu92Jupy59MifVETyWPJV7bAgMJba6eBswBLi",
  "key8": "euRBBcGHvCXCSNWVfcddkeAcQt7kEdbVtimLyA82xCZhNqV7MHnRnh9Sa3gMx9HN7KugWDHrwCz99u7vngd4hCz",
  "key9": "29Jo7521HGaGSjmNPwZuVe7DXBemtEhMRJG1aErrPeSRLt3RxbNk2giFegWcSFV3eP5JFk9k6Ar8avKf5doNez8K",
  "key10": "46tFqKoeVapvXhVSCyzmz3mfX1izGMGsJ6mjnaPdqnSr81wjJC21xHA9uAYp8roGNQKQ2sJAEd6bobbTg8hMEiiH",
  "key11": "xdUwsjaS71LVYbisaqYSpL5C1fp388tB5CnmWyspzNjfWWpzfR3zoPvVWeWu6Bq7frbLKdG4a8K9upQ6U7FYeyh",
  "key12": "2zmhgjkCqo1w6FSZPv11gGr5QiQy3mt1VCDveHcqfpcuPb4x7VCxbLeKZHLK53it4KCLk6hz1EeEErXiN3xD5952",
  "key13": "4df99NFjP4E9oX6yE9kMPKtVJgLQSBUZoCT6m5kjXq8SfDx2LH5d1coyKMGLAFwfqKWYKRtQqSkuoFfkCkRuUDyH",
  "key14": "4RxYGZQiY5sYRESvTbCsQLMpks7ksHAaSzAM256EpKMhnpSLzqNhPG7ro5HcDQELyNLGKvNTHcAiCpkQS3hFUwqX",
  "key15": "535aSUeGaeDRzdVpcpUcYGkJA8JkgNLangXDVe2oq1oxvUjGXVZkhFs7UHovxFT4XThzv6XPDnVSgQtXfJqC7eDL",
  "key16": "475TZ39wBvxo7DAFh9YWBCcZh6rEQPA4Qq4RqBgfAn455rDZ2ZQPBupc9E4wkrEJ66UhB1v5je56j9nwbpRpwvZT",
  "key17": "3P9A6G8Hbz9YpVBP8pisUBRY3NiqzugDggsC6zRjqQucYfY3YV2a5oX8A1JKr34fJCteQsGwerhRYe7uEgNijJWu",
  "key18": "3fwzybohwFgRuvaHTAn5v2UQgT9KVAzd3jcxSdNkSuSxCaowYmZwtY4XXCVQUckiMrka9n7TGgdS3Zcq73C7ACt4",
  "key19": "5QdQUKsHkgFJ5zRXsAseuqr5vJZQqifh5GUcKpVWsbqzBDxnALcFnPowEt7PZZHWFCT4tpAZxXf6GVkbe15Xdtyg",
  "key20": "392XRgD2XvxVCQwHcdiCSAeUfC9M29fs5SS3jiiAY1gjGZyQC5u8keCfrohLHUWs1Eum4oUjNRXBLw1Jn8R9wSpo",
  "key21": "4uTTe53oUm9jKn6oVi3phso53ttGm15hLikGTXCWRjaYDg1ff758MGc1g8FNYs1RkyPMX4fnq5SdBPVJdnPndPK4",
  "key22": "4phmPfvrKvfWcFjTuCDdWj6NCrH8Cb2xWatGdv1Nvjmk9mJTP2p9GCqgrUXVuW9L6aiD95X4pAbN1rjvwjhJnZ6E",
  "key23": "vQtEp556MzgAEa7moMa58W1tFeAA7XT8hDxMxa9jd7Tai4nxZaQ1v8MECvhGT2NGGQKY38wEJkeQQpgBWipLATr",
  "key24": "5ghFx4qqGQm5ChVfY27FuC71tcVSNEhQ5K3oDFHqiJEnBgAiFJa6GNPYwNFcSdbZJHYS6JrijJNn9zPKiQtpBCbx",
  "key25": "4Ct3jUhvXEmugXsrvdBbstbBrCLdbH98dwBh46eX2Ze7NtvdaV44BCNCvLSzxJHsHGG73C1GaZ8NDUv3Jsh5fmDm",
  "key26": "63tvMkReBNV8UJUiJqWGJEkXfCGYMzzhjGXFhyG1gAdbxtCtCseqQw31vFkcu5PbWpJdW3aRWSTkLkkgg5pCQJFL",
  "key27": "4mj363NWUvHGA8RNm18GdTuvYfN5tifTNYUskuKJVs4ssqSwpPeQdiA76149BYeF5DdJVTWm9NZwf66RbAei3mqT",
  "key28": "62UNmwZhJLxEgUuX3ef6DqWd9MPXbKHfmffHy8Lt4YG2bd2jufj9bGgV4thgePCeRLucxZBApoXmf31jyPQ4AUA1",
  "key29": "3cNtmzWETDqEtiaVEdh3ZiKVtCbxjAhWwQxYLqtsimfk77gcULA1UJCoEF9q1ZVocW46PP5opF3NyeU5n873PahR",
  "key30": "3HkrC7Jmw7fcsnibWFuUMNPJPEKMbb2FjUD3eZ4Koxg75iGxmQsePT13xKy6mE1Dx5sJcgAHhLmNkUaXUMPYyvBg",
  "key31": "ixT6XGArkvgLq92SBxHD8PsqU1a5QJpaUEAw5TkKGjFQQtuwYrjHVrz9StMkEWNa63XZHo5Du4wZRi9GayshdUj",
  "key32": "47GV95jmNCMATFdYLY8aeFAsFECTGbktHY1MxH8bALnGzok23gBShXz5fpQ98mSxoWySkwhxhyQNPCxBKoxgouyT"
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
