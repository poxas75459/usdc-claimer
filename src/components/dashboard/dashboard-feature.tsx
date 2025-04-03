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
    "4eGQhCMUUA4amzELdXPDsQFc29fSP9edRU6r1pjDTEbHNavav5X9qYToCViDGCQE86u4QnijMLWiYW8Mum55q39n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xxwg7E4grtAd88CRGtsGGhmdgAaD5kzqt8VNPaN7Gu96EqwFj7UDLsntzeGnTQf3zhtV57ZqvP4uMdHc1j8wY6S",
  "key1": "3vkHaFX38pWyysd4LvQ82Q49VNm2xrPbyQUpuHNXFafspEuxiCZ6CuZkdnCTPxF1nmHkpCpRJQnEXN81vFXr6KnU",
  "key2": "2TYpWEHL1kwhJwL9wxPbBz2gKwqXaa8KCzDvodC88tn6QHHhPR4kUUNamm4fBJAXMrvhw8A1zhAJZLLBzEQRP36J",
  "key3": "4JCMvScSyZtzNwo7d1YJQFf2TjJK4VoMXUrKnnmWt53ukh4riNCtafixtSdMiA1ri1zXyGhkK8huukuCuZkFVouC",
  "key4": "3muqsb7SGgisYMJbDBJNFGwUwFXm1QWT8HLw4SqHKFQrWnSk8EB94zvBM3YVedXG2tiPjsR6yka6xrDEJ2VnKXrg",
  "key5": "3puNfBjnAFdh1aEyyso7p71nHz5KDdkQGsHnNvqzYMpEv7Ut8hZjBEAo2rEbUKRTR2Kw9wJGPTdmz3CDjp7bsDgf",
  "key6": "2wANJ7y5fWCSNanzopQW8XyajqWrGKfqd1xCLxHHZU19cdLnWQ3EYwWyK4KerCZ1562gv77jcUS7xc9e43ctW4Ui",
  "key7": "2zXbZPLiY5yVwu2rhPcX9a6BSgcqhTix7xKWjSDaJJfVv2Ruprqtp4vgiwes4cHJWSyE2PyEhGkeS3dabiHcRiAS",
  "key8": "4dEBFgMgdMyT2D2r6vC2P9RNdVCqZvWTkvKfopAXqkQnfN7rdbVNZaqWEXpnbYDdf2DMsCrCZyTvbBSDsrCx15Qq",
  "key9": "27zy7MthXj71EWfV5ZvTRb7kr9Mu4honx3K76sXiWUzFrPLopA7xifNStREeBZkwtGU7YdQpyPLP2isR6Yd9gPSi",
  "key10": "62w7XHqZHfN4ry3ozNGpBxLRsAVrf8t2bC8AzUvBafLyxdjuHHPuWsqn8L9vJUQdCXkme1DZuZnVHyJLRFd5wXsQ",
  "key11": "64JooABgMdsge8pLC1Q5NEAWu6uSshBfdQSBgE1tfMHNWNUuWPA7ronWsJradZ7hApnmtv9vr5sQnyzLxtvakmud",
  "key12": "3BKzE3LrrBd39bkkQRbkMKMgWKKsuQmpvF7S4qNXGXVZ6F5DpuRtwT1eeezFLdTJVsbZ5Pyn7dHZzxLHWbAZzt58",
  "key13": "5gEAjMri1LNPFqC2jQx7GgMCJoCGKxNiPz4eQw9R1zMht27bMXrsnw423dLAvJfyqnSD1tDiKWGm4WUzGffeT1RA",
  "key14": "3Z1WppuMR9fPvD25sKXuyxAYQiTaRr6cZf6EQH5VbwnueQLXu2YGnzMLV2nzCPzARc3bjGZBy46pXzxBBQmCJMW8",
  "key15": "dxH7L5WX7wWs4rnmBA8L7Yk4PbaMCGDf4BMfvnUELJoMYpwgFXz3ZzDSRZ36NHN72d6Gacxt5pC3NnZXPw2jPpJ",
  "key16": "4iiYURR5z2F5aVjDkCwDHvMZam8dVEu8q9ZxuqDSVrBR1F3CpbgigkXQoWxgmP9u9dUwGsTtUe735VPDPvKSANAk",
  "key17": "51fUFHEnpuM86o5ot3JTC7JKhxsh7VxnwWjCVW7GRwcVGi8BYtPYN99H6GrFmpybxTvFe2XqcMMt2b6eMqWDwefZ",
  "key18": "NRNpACPAySLMaV1eQPZTBurFci6FJWAPTzqtMjdVf2CxpZ9mrxQobj1vJ6jMF6yWC5K82xzVPk1uAV2yGbxT1hA",
  "key19": "5YazcBZKXyiMQCsDh3LxC2BroF2Xd7Xm7z1p87c2QoxaEZrZtvEf6RghwbpjqU4YCeEpw95tDbQd28SEzMbX5FGv",
  "key20": "2rpN1HmYWwN6h1HaGJgR7iB9RJJZa2yGPwzWyG1xMZL9BamHYtT2huKHy5H4Hko3kmPrsBd6rn69bDAqYNGicXEi",
  "key21": "2dfcjT5Db3o2aUyeCAYfpk8aGPkQ18F2CZRHywc9n2bGoai8isddsHmXYo2fgsfMqaS1gnkc1fWfW9MVsazCi7Nm",
  "key22": "5RTYmfyXxod9C7q2iN6D1zc4V1oPfUmptEpU5GxrmAX97vSgL8s34YgBLsCNZ4HtEXro6oK6c3qaeFCgUhwxopAo",
  "key23": "3u9cjTuNK7RWtV1k6s6HDasygcaCJWTggBcPsAYGWHiLuG5aXH7htgcVCnka6SfegdsrZJh4juLtAh79HD4G5fNw",
  "key24": "4c1QHqyCnRRsF96K8mBTwdA4xjQscmmxNvMxiMGb59ukBqCuD8jXLGeWDRMRSiadqBQRx8pxmZko3AcJz9fsktFB",
  "key25": "2bqMYhkVHH8SAQUHfJvojvTgmtDS1CaQWjHi3Liqtz4qBo5MJZt7Pg1nJPqfyfq6kWmaCgW6Qubu2CjVs5rrgST8",
  "key26": "3UkxhSaFjNYTKQgUKqtn7pWZVcjHJcZrEiB3SMhUcL3JPkDunxykAMwZ4PdoFHVttdMQQi22kxPPSzZBU33EmDsj",
  "key27": "4Cgir4oMMR35rcRmMAQeHjijS9qa42DMXWH46hyfk8QXpzrM6bMV9GeEChoWeQRpELzkFXLVH829FLNpFr9EM7RY",
  "key28": "2Ca59TDqzPNpmWKtfMiJS31qd1RaDamwiJFxWNVHCa45Bo7HW821MVjAeegG8uRtVch2MgBAq1FwDmjJP8jokjKs",
  "key29": "sM8TbrWYKkk2Ar4zQv6Khdktbxa6eMXJKLvygNhPsuT3brNPCahC972M7sKHwjE6ibJGx424xyZdeFe7DzBWDve",
  "key30": "4XssK8wDZF64hRZAMMFWK1dzx1dJF6LBFWtGc3StYXZvH5iB8qZGAbPGdphqdtBEMkYRsc4pdcvNHXw3fv5Rh7hX",
  "key31": "Y2aMxdCqXMvx2178GAKXDSQGq5U1JgtiSHvM5DjzFG5enDHqMJuhNnoxoyyksfXuZvrUugRrNypX6o6a67SCajh",
  "key32": "3juVUqZXJn9ssyyCmWcfeLqom2Zy85kWCCciNkceLmLN4WUv8Ngz4SbjHrph4kFyxM3XftzQnW4UzkKStfSUCPkU",
  "key33": "4uRVjq5dPDysJNRoiVoQsCh8YEBwT3jD1eyEN3NPLwbmemB5kLv2ihoS9qfVUf1u42WTrPgLDXzXgaXwFmm1p2Rw",
  "key34": "4yBumxCN676Jk7iJNgRwtnH8UX5Zbd1zcpBTsEoBhABrgEVuq8nf48ddg22vik5KN181xCxd9WHvyFiei8oUmVWx",
  "key35": "K3jw6snz6f6xKPRPXwzAD4eT7oCfunkLPoS1W3zZWfgUK8YDuzeMAdFVPC9HLJ5qdAQLb5gUasxCnTYEczfjDAq",
  "key36": "5SrZjM8AKDcpFMKQhfEs8SwKEQHj8oJzcYitetuvPwRzMq8cqwPvn94juuH94vL3XcDKYWkMBnTdd5J8AWYeMxxg",
  "key37": "3UvGUV6qYtqTL77dTXvwEcyEqWSvmJM8z42dM7CYEiQ3uRvE2FYhrMqmxrgznzVyUZPthRgaV43rhDygVQrNBuxQ",
  "key38": "3svaNZ7srFhzYy1QZFgM2Vt8nfReAbo6oH2xcyoU18TEcpyHWAjpqQmgGd4TFzP1WWc9eqzuQjyx6sFB7VTgm624"
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
