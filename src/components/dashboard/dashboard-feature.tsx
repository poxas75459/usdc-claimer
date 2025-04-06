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
    "2eAzrHGdQuZesbmPfAoSiiMAdV5H5Lmbnb7MwMa8AbX5UEFMJzVZMMjMWBrKKdJGVeY2pvittCdDwJxJecnUzTBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2121FF8FZ1bEZuuLwasX1Ftj4dzgx4YFBVgR67C86UmvhqwMJ49mnWhbHNo88cpmiJg1T3YJL8ntC11cYmmTBxp5",
  "key1": "65rPnc6JdJx883USY1YbXt9UUeRgwxJmsQJ9d9Q79dV4bX3zbFCHsz8A12Sva6gUGXpxFDk3ZuDFdKr8UMPjd1A4",
  "key2": "3o59BxEgiwkYj3dvEfFbEYWmMZnDiwra8ES75hSbRCDPaoKkRKNWUdYb96FcbmzseTJN7xodjhULzxnoKVFXqU81",
  "key3": "TpPW3xGetL3UruuBX27awSMoxUnuwmZvsbFTMpfDkNwiJsSYG71hNSw4JHM82S3wpZAciNdSVZzpkv4ipYQH6iR",
  "key4": "65nuTAJymvH3zYWejMAMXcwRAhnxyKjBjcsWakLUz3DcYJPmdULeCKskFoJoh8tNZ77KqgsxaswaFxzhi5mGMD1T",
  "key5": "4uFmdsisLYj3XtNxML8nstRtXRC45RRwL1G5L1zJwcDtJDpEuEgWjBLEw3u2CUgKeWDusAVjrBnitszk2AJBdHbv",
  "key6": "2UCkkKG879JdUSmmiDqHckhHAEKVr5YNCUFGwgvvLbsZjWa5q1pweGkv8UiDjCX4edpfXp9z5Hx46Pm6q838zVtX",
  "key7": "4q3H2qVekN3GPbThcNQFoZGdd9kcaGFuUkApEYBN2FRct1fuWWD5FRqkbioKmvJy8CKbwTs1XXrGV1yTBanmoigW",
  "key8": "4N9rq2Q4xp2PUUguff8Sokedp7jDaTQRhZw1nKXEBVBHHyDq6Dv4zRb2arxpzEbUogE5MRc3po2yqQXVQPWkAsAW",
  "key9": "31m5KMrg2D1RqBqY8hakJTn2Cv3aWVsDp5TUQqpN5m1LFS9uQTRj7xZ84jy7U6dQnMoPNJ2DwKLbLmXxFhhQYLjn",
  "key10": "DK3ydPUFrFPfPuhnv1SAKZ7CnA2Yvz9xZBkdza3UcHe41bQLYBpH7Rv2KXFnPEeVNFuMuM8uRXx5kMoAJYJHc5t",
  "key11": "2wHfQ5UPB9i377pZycncnTBNrRFexis5gnh4Cy8hY9Tnj3dmYDuxWcuTZRSREFWxZE8fTMgpfiSSi2g3tSVrPuwP",
  "key12": "5J7Q9CW82Fx3NKW6HFSYhQoVokf6zqQUSmmQxszrFCP5q4syYEn2hjC8S5Y6mYauuhFukgggvwdtyKjBRKm4Ntmb",
  "key13": "3WMHHGD3SQyJDcrfJ51MWZkmp8HkmRpqxof2NBG32EtSqhxuw2xpbrhuT43GSifTPYLZoUMwJ3SaRqf4nvM4rvZp",
  "key14": "3QGory6M22PR79hHD2Kbzm9S3qkaR8d9UVDcpwp1DQ1wtX9bxsJRkvesFndARv51dudLbWEuCLSc6pW1U5aZZaZn",
  "key15": "2vjAuiwYJitnDDH9HFQPNhGwGEdMaqWw2zSieCeUPZEBQCKC8abS8B1R9cHxUaN2WJ4kt3M8sAQJvMY5RMe5dCK2",
  "key16": "4thcGBxds4QCED62wETcXCxRvWYkkJ6bT5j6m3Km7iawadLTWT8prgxoVbAxteEnczXJEgfNdYtzUfgqpgx6cNfD",
  "key17": "5HyMxbtmy4wrykxpJn6NDUcUo161t946119J8wdxsWSnZrzYov6VLXMeTZfMbdSzYG8ypsFUaMcGwQq6n6G7oQdh",
  "key18": "sYWdaAMK5by6DF7CsQq6H4Nhi65L2djdfaTzMV2fnu8f9BxV34GPUGbMmg2t8SP6AREatPn6d48JceDiQpgUKgr",
  "key19": "4ZfmJz3YGzXA5auJrLyCdjyzV6mKdWaq4JqL599cTcHsvDEx4BbrPDuyMR29CBrobF8L1qNFoeRpV6r8HphvChrt",
  "key20": "3KBmbFZMBhM2VjPvArH3D2kZLFjTwUpEj7JF7Dtep1UJLFLuSebj1kVLwGg15j3XtaQAgMHfuccqhXKqfpEZq1AW",
  "key21": "5iUuuKwDj6RGV1qP2gYFPVP3b3maPZJyxsj34AY9s8Fk9BCEffyrXCh2EdWi9NE6nD9st5eA4xUQ3VEJXHFYRS5t",
  "key22": "2TDZCky4MHSf8gbtC24ZpLdwocTDJEVeSQk2doZEAmrjQAShroHfptTCP6McpyR4EDjHMEvCzgXeQ4AtLdRoQPhR",
  "key23": "3VubW9k6v845mxP3mfNdxqKBBqMJUKuVWmvsntJdRJz99eJVWU8vBRTaGum6Q4gKSfmhy7H5bKJfuREwucEDrGeg",
  "key24": "3BhqfnTKuBhJpTcpLNK46Brqbi4i2pRtQ9HDSNEid3svfpwZFpvKdJ5KU2dHbMUrPNPpawBty7LC3KhP3h1YT1jP",
  "key25": "4ghHvJQAJ2qkxFTktCMhArQy7CwZAuKriLVpgdHQ5EXn7AgJGTsyuFwa7Ej1nxPtotM8wRPMG5Vy8jrYER1jT3yB",
  "key26": "2xGWjgTX5g5ZcYXXwbtk4AnRBrg9CLZMfMo9BrmkX8FBDnMRVk2tAuAJ7ZfvCLVX1tM93g8ybsKZHVrVtRt5319V",
  "key27": "43SjSkYj7R5xn7FdwrTvKzqxeYAVe7CSmQYiwmRhXAay1NM37FdAtTsnkQHi25m7aNEKZa13iZtXc2kdnKeCZR46",
  "key28": "3XzhhojoAzPTaJC3fDpctrA6CA2Vfmv1YuuZDYfMw1bpRZNYiRpuT495fKhkHdNwdMRnEwyWmz8xmMb21ukutxGy",
  "key29": "2EFA6McrxLPNFFuQRaBhQeSiQP8znp5U8G7GeFni3hLkibPkVpYdo9GPKiRFuweXX23oyvkNe6Ymdk18BVFeQmxa",
  "key30": "4Nx26Ed6pnVjLDkgGpsdj7X4HZvPBiPhBDES9o3HsbQU3W4UzkYdUqkJwYSNPdjkJJZ1F7h2F6Fg8LgyGyAzhjKW",
  "key31": "3SUT1CCiFwVTM26a4ku2FoJRA2Vk9i4tkk8SUq28zwB712LXoycvsyNpTdub353Zaco81CYX5x6KPMwKHXAAvxeo",
  "key32": "3z7hoMvmtQ2XkA6VNQueWLYrUhn6rLvg6oPjSNgPRh2DogtmwNracixNFXY3E9dLmH1uphnc5EHdD6wyyKyWFzHf",
  "key33": "628GUXKworvUtfHhEHRBEHeA89aMiUXyLu6uDAVmqBDF2i8ttDY73whHbxMRDhWceXkNamQJUVaQtHwhwP2QmhcF",
  "key34": "VV1jUzeYw5fdmVkQ5qCtXhcwEmbo3bpQQZwFtvmg8YPE58ubvVbMG8men8BGLAwKkknED3BSF29hUzQfy1K5Etz",
  "key35": "YuT5wmK7g8UAEDzdpqwrd87ktmj2gV83Py74npAzqg6Rov4xfyTVzfpvE6RxK2CKu9daQ2PAVJnZBAEn6MDt3KF",
  "key36": "5rKPpE9u8BZYGPKSGDpbSNYxsgYFETZmSYnaRPujRwDRJFPtoWWoxa76d1sbfAb6xyhfjyqBhyfLaQpLQQBMNTzL",
  "key37": "r8CLKcwZZsB1va5aVxnALiPqZ3WhmVrEqJ8ivaiX89ZimgkAd9esg5b33HMwWUPpJUjg3UaedRqCEnKUuQJWX59",
  "key38": "kcXU9QxsfE2mGRLTzd4UZA6P9vfrNgZuSbAgdGGVuRAyQ9cyA2bwGKR2mNpLEUayg9nuYhePVbXTXARJfUf4aaH",
  "key39": "2w8vShVFqmD8LBesFWzxeoGJsTFcEaYtydaUmFBv3vXqg5qviFXM33N3tXi6DdcNSnpajMEjkt8ZnWxveNTir7fP",
  "key40": "3Yo2hpqQfiWFvthLnapgfAarz2zWDxDiwsxVRZh1X9xpX4zro54Y9bjeGYKw2CRUunm8vpetn6UWQBSEnDGmLPJn",
  "key41": "49dDHaKp8R3ybD3RwVpbhLr3ggqiaWymosLrS5ZNjUGya3Ay2JrCJymbK4NYzt3DXSskww9UKSLoE9xEh5HzTEbg",
  "key42": "3qGSGFLN9UerDDM1JZYxzvdKtKervhpFR5KtnQJCRviiTtWSBfqSUzSKtgrxPRxdPTkAM5vLmfaMYL4Gbi3kwsWe",
  "key43": "5CZUocujMdeJ5HP8byuatMnCaGcEiWwyCZBKTP9T3BsaMs1bCY2vQYyvjaBNi1rEJ1S5WveYEF8tvjgTQzwvTYwv",
  "key44": "JsqLqVnL3wPLuUMKX1mzZLbQumdNsvA4wA9yoorV2NWKj6trp4dXMqJREXauswAhXesLg6RLva5mcfBP7QEnZks",
  "key45": "65geHpQB9Z7mZikbUXqGy5GTjNbCgJiy2kXJ5xryfT64BVmCNbkhXTTvK3aAZskCT4asJ37dw2jzcEd8s1dNCFaU",
  "key46": "5AKRu467NJ6DSNJGDyWUucpZpUzqQJEDQXyref7FmbPifnPNigvJt5gYLEKcRnKm7KdGTvEtZJhpTwh7BAw9nLNM",
  "key47": "ibn2x7YPEqYnGxvXnFE1Nb1GxWPQjtvrYNoqh4SiFci2y8nZLTKHZeFKWrmWVHgVBffxyGFEwn5Qq6KEbbqUNtv",
  "key48": "4dsZzV128NpQdLWM78UMXiuK1MaCPk59rg6JtEfR6AUvQRSihh2A32BPEDFpaxUoFfM7EWv3qk7mqy3SSNrcjRe2"
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
