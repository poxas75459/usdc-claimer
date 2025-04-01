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
    "auFRuQJNXwgMreBSJzqijoBf4dzEeAAkByfwcX9doiTVipR9Rji95bLDncqZqbYd121gD1PzLhfqqGE52yAxePQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKG8puTHvngdRFwRbwnSo8fX1KvgTe1vp2XVuJBEpvqv1A23PFR17oU8jmvtoYquv7NkwdRsBiBpjStcW7pDHdR",
  "key1": "2NwCXHKGNZVwhuLK5rkzBuyQy4rmYHWoWBoV3nTXEidE3YoSYTiPFAuYqzQF2yh9W4nFfj3szb1zfVMXZgRkeNYw",
  "key2": "5ZxnVhjWvfkktVDuzAo117xyPL6LpsnqpxVS8SJGJ8QBwzBJNGhJ26cDYx4HPX4pMPST4BS1SU7rGZYDTBVFjn6",
  "key3": "5RAP1Pzon6XYZhKDLSWsHQyMgSD9ARhcLa7cMs25pDt11Fw9qBStNQza8bd7fQvMi24D3sQMkQMhtyuNdwGpeyu7",
  "key4": "NvwHb3TGkQPGEe4YjQTe6xaHJn43pHCGkuc1iNev7fYdwM5TUC5jTp1dFH1MmNkMqNyyQvjD7t3ZvxBzHddQaqf",
  "key5": "2Ubgyo4jnPZtmhu1mgD5JXrQ45yydna7esVwGujp84SAfkuGNDjsoCNtcqFJEUuwXajFa3YyfmcmPsxtm61Nphmk",
  "key6": "sQNATPeiACPx1sWPYkgkjz9Pzies6zP69dKHLcUzrDuCw4oVyxNPVPcR5uZWf6hjRy97T5hYV4F17mrYjKMhb9S",
  "key7": "5DkPKP4ibrpQVZLveHWdNJucno5uEEH9V1zLXH6TeuUwtYSJUrL7WwLhBbXngnYUZ6QyGpwpDAx2iKJM51aD5oyn",
  "key8": "2jDLgc4SeqcrUQrWuknQdBrUCy4oJq2poeTQ8wcyUkgfdTvDnYs7aazzuG2SvYi5AJJQERvYewhZ8d1rWZna9VK4",
  "key9": "4RGNbPtCrfaH5YaPRPZZ341WjXh4aRBT8kEZAAQBX7CVpTD6ZyJck3nSTDGDZeQ6Z5uEj6QJeKY4YggEBp5F3jGn",
  "key10": "5NLyLnjsyf7m4UQYXXH85xVxDnMTk7CakhGUHUAJZTXp2mhsAHTeXzLaX5udxPVMnzXz6VdNSYKPuu5aaddVStgw",
  "key11": "4bTqgWuHiSg8HrkRFwoBYdXhvBYsHDghtyM8y2PrM8xPtsJM9JRmg73UZyCw3imT6BGaJmjtaoQAcYRQi2uC3at2",
  "key12": "4H6E7G1QHYmhVRSTNhxFcC35PorsffKaiFDczgAasbxmkqAxVBaAphTSM9h47egPYTwY9zk3kk7Rm477rDrqwu73",
  "key13": "4fCaqszQV5g6TEn9wCPhzqSxVwm2QLAiL4WGzpnE5bfJWcvgfx9rYFCeVNRAyCSs35AykmEzPJjqDiTfDENcdKuU",
  "key14": "M9ipjsDv1Zr8Cte4Yfk34f51UXTKXu3gp8btswRvuY3bRa4C8LNtNQKxJPbFV5rhZNQJg82oAeBfusR9RgB9Zfa",
  "key15": "4QXH39quZ36qk5rAHzFXcQ2VqVfLxUh1xwEpgwodU3KHWfg2UFAH9ekKDNYnfhQGx3qdEhzSCm55tpFL4UCyG3KS",
  "key16": "Pj4fLA7xb1SX6cWnRr8A8bUJbp71TaAvKFSzkVy5iZs4uKHZuh2Jmu9SVrNcz8f1sbjqZHrRJEs2A4VXYNfYKCv",
  "key17": "4eBnvoNcgMgjmJGczCb9jia7JFjkKQ9XoGCh46jqUDjsHjvZ7N5Df3ZTgupza2Fymr37anq4sQ4K2BhveKzoEUQH",
  "key18": "4topMQrCWnVLQHLQ8yYC6WDpX6eGmawuTniEGwfV7XqymDZuqMXAZUWQrvCdrK8Ci73A279i2k3nmdFmnTsBgCbp",
  "key19": "Jt3jcRSzokCY6req4PknxiK15caS1AxQu8jLmfdHPp1HARXf2fCbvjVNwEPdfyCsd4sx4PGuKMhhLyZ3SqjZwWm",
  "key20": "45YkV4w4tpzFkmFfojYueuRyfrqnuXDvWjeCUYHjC7Urx5sjZEbqUwQ911rE4Rm9ExvVZrfU4zqzWVgvzNXuY6Z2",
  "key21": "3iUMPNcYE2GAqQRtECJqcv9uxxLRScDZCxkq53qAeCXdDtVxGyTux6posgBMcjfRVcdijYawdLPif6Y96ZYJoMkb",
  "key22": "ajCZ2cTsNB8cUvaa41jWepUYg3vyrWesT3Vb4YFmL1zo6Ddh3WoNNP7t5wwGJhnSZig3jqMgBFU8GGkXYDUB8Y5",
  "key23": "42WEGe5QCzKXmzvY9MMCbMviSmUMRzbgBmnz2Kttto7UForMydKAvm8qNxyitb98nqR5kBz2JuCuptVm55rQ995C",
  "key24": "17TpQX1YkdmUfvDt7ASzzaPoeiHvLUuXn2xZ2H3qCjepRBTPZrkMh9aLramnubYHjnf6XqHaPbS3RjkcfqCCbfP",
  "key25": "3L4XhKVd1h7iA3Hbd7nwLmxdbcQ8tDSFWdVopUvMVaynKpUX5yhGdGuwNSyj9osVRKdcXtSUXgPk6BEWhZpBrxVb",
  "key26": "5wSvy3zvN7JDcMxvhPaX6cmFjAmB7keuqc47zLM5NhqY62DkfjAToaMsSQMdjvL9ikmFByNLNa1tM2hApmFMvHNc",
  "key27": "4SAHPHbq5QKmYte9oqkzXF7o3aQH8b4NXkLmv7xBQjyof9xqirWmGTnY7o3rPPeLQpyoZCS6hH31jCCqBifNxnSG",
  "key28": "5CWb2TjhvxrFm2Q3cGipXwE69AT61oxvyqQNCGdw4VUU51yrTJZTSykBD5wBHVT4jBzzd5CwYVRxz4gz3qT4Cx2u",
  "key29": "2MtdafzNkYbndcvPXiw6VnwoiJiPyEXasuzWHzgjv9fvByDfGxYeEBJxH8ZNEX1p6HZYVeHB9VQiq2RJ8i9GeQTY",
  "key30": "48gzFa8TqTKpFJ9j8hUVd5AFHNKbcvj5uDJgrWcMEdeEukED9ctfQAaKPr5gTraP34whhcJXSqEQZtBa1VVhXZxX",
  "key31": "AfccnGoRaDgkCgzRMbditdTvkEMvNvwnkFTnpCQnNXttCUpwwQ6AYBzHie1WVtPEHQp2BRZtZfG1z2HegzLqEEc",
  "key32": "6RKdYhxDH1afzAYNxTmxzuCJt63ubLiSZw8ZJavR7PjZRY1haxsNBULtPRdFEFTogwq8wdyRhQFkA1ViwPZEV2a",
  "key33": "5YJeXVTDTrzRqSqmHcFwn7votCWF4quMN3W5vQ5YPGu7SETtDEj3dRgyCpzNmj3kGiR8iRrKRkM2jPfhf6dnzrcM",
  "key34": "5N3K7nNKTgVTwVjdHbcRiowPwY9z7dxKXxJNinGQRLsQH7Ga7A1S3qzxHPTwfYi9JorH6DWScDKEmQceSdCAaR7u",
  "key35": "4nDqq4QfYuvkgnvVrWqv6QiggyL6vDYNmsFDYnCBqeTANq7YigMJCM44CCC1pev5Fp3ufUkMdDHMziPQiWvufPmU",
  "key36": "5eis1Ve519rgWPjCqbShkHnkSZJX2r34A4EnoTTgzrerw8u1C9SdTMGE2SMGwMAThzjvvjZ1cndu5WL3ZLKmB6Go",
  "key37": "qcUyLxSaDgZrCsT3BCYpx89s8gjzEVUDWa2RKjxBqC3E3SG6FuxwsX8jtiW3FA3XE8Gt4ihL7xxhqeULZxaS8NH",
  "key38": "2hK1cvamcyLRLfmiBQoi76Y43Kx1xpF5TiRGhSWmgYRCLLpi4QdKcGc47UwPBbDeTaiavTAZuesY3bryqM7M9VWF",
  "key39": "4H3cU14mAAmuayn6EWvPY2BSomMQEMKpR416gJ55g3VBmyY74nDkN2EBoRJFYPx7WqqQTPPJx6aUPpyq3K9iHuNe"
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
