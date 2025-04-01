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
    "JvCxAtPEyGfav1S8ztT9DkKCGHfq9bAARAJJYAgikZLsJLQULGw53XVE6NUpbSJ3Ka8RLc8QbQ2YTucmnsH1xd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sH4yLkxX2qZbRzLDfvUCSLtmrj85ieubREC4GumaDsmdVaU4pHnpd6nksWMTmLVQeguiw7pw8dMoL5Son9msVY3",
  "key1": "3Gaht4oTWWcqQNm1KYbdry6LvjJ9GzT4facVUpmFPyzpMQBUhwpBS6rga5vstW5Q94cpap2XmnTuaDv2s3MeXTgz",
  "key2": "4hWAgAsoTQM1ucZn9mFxNz6B9UWgajzt8PHKeUytLvtqV87rhui2ifW8y2oVkU3Lxqrod2wMbhBuF9WKpyqduG22",
  "key3": "3BzjnkSYWDVn3GqigHUUWaDytJ7WpfuMraZjcdqfgzkMaNsZ2Dosi9vjufMNZWzMx3f79yzZAqb8EkYtm2jrsSq7",
  "key4": "KgA6jAKdB8WQgg21Jjk68XQKzs6MAY8jCFVFK4P6vKEuAFEUdH9hZWQfabUvphxtbPvD3bUGfBsawaHNEycnPq1",
  "key5": "5xQHA8kntbCAxMWayd4ZDmLER2AnE3ZVKoebiLNJwT2pjXWi8kr9BQP4hepsG9KMDwpCV1c7m3arrjmqhAU4qgLT",
  "key6": "57rkdojiyhV9y2QPkTSxhjYhi6KDGwGdv849b9EjpZmV3UNySX9pZ3ZBbMmafUxh8qoujvtaH5yYTm8N4eRogFV9",
  "key7": "5hwnK8ssKS9MCtHWMie5KxQN5EfFi2Nezc3Xmi3BBveZUCRLfRSgJTCe5czPKHudcVneELTxrVKhf9fyBoG7LgNr",
  "key8": "3cgoDiTZAzxe9fV9pgvHnxSSqqg7ANMJNuC7rKBzrRkxLKchtJAbygpLriL3KwhyHrFytVKA9vatSKFusT2VG8av",
  "key9": "nivoDdLmK4kUXEppzbdfGkUdNA8tiTZwKR9PcCZDGMJZokzrofQd7jfWFQweQUJx18NM68bFByK9rFKCkNw9TbV",
  "key10": "573iFbyeeovgPnyanmxA5BJByUYmWWBbWTcUkErHVUs53V9WXTYqZrzxPcebwE5UKcYFbAUfZoVZsCAgPVbQQwc3",
  "key11": "4AA5AwWxJsLbaiwKYnu4tXNmVFEHFJ85T1HYjskWRaaLpbiNLZRjyLNPeqqQMyKMxh1NUWt4PNduXP6SpZVmB6F6",
  "key12": "3F1PespcSCG7RDU1CT86JSHUNpsfiyANihTHgYpQMme8kkLymGKJ12GXa5bp6SSsDvGMEQjvbaTth83Z4t4rxLg",
  "key13": "4ppTHxMGZQggNTKdSNfjRR667ncdhuDXBrw7aULEj6v9VePgMdmZfiXsafimSCEfv43P1Eq9ZvLk8pmgRa3hGuL3",
  "key14": "q3evVhuTuBvPsRFpBNttW8HKJBDUMrCLqcSzMERi9YZ2qunBUhrRdpuHsrenTvHawkMKg6TQ3mQzZQxPvjERtkF",
  "key15": "4U1sfLYYg2WNshchm8Uq1nF3VqoTkvqT79VzbWCvXbmnAaAYfay9T9bwwDEMEdFSoTqFHcUHX8jABG3SyX57FFD7",
  "key16": "3vLBPp62YYs9nQPHy8bWJBpGmNcb5BeUtFRTYYRjFWxcDNRYmnbntEajBiTeetAF71qFSSvBrfSetSMJqqyymnWV",
  "key17": "e64J6UVfUdmFCCWgUfQ6qjQQhQCxqn4MAFeXbMj7WzYJWH4qxzrbW1gPNfyxmo69kZeyJ27Haft144usCTmM5nA",
  "key18": "4gmwLH5mT7mZB3AUkcZ7haEkwdpWf9LRzgNK4bHPDw7ByHzXdVeUtBn3mtRLJGH251ZwLe83P7bzUY3BZPaQcAVm",
  "key19": "3CtLR6oMuSXpojTToo2RXhPXmVedp2LZ2XUoyF3Yn54SQo1UdSs7qmpnYRs9a41JycJoxgZ4eZQ5j78bYVGDiUpu",
  "key20": "jSLahHNe2X76ioarZEMEvdUTLqrfFo53uP854Rkgff8syAVaw3NJHKbWr7RCP2Ujtm6rkNpVwNceN3jKxHmbiQf",
  "key21": "cSCYs5Af71nzdoEy7bLUCveXpEBtvSZDE12pS2ky3m6t12mjsyPiB7KqXHpp4cGuGQx4noEHAwDujzfrGR6VFeb",
  "key22": "4HLVyH89qbaiWBGSVioXpyrZN8zyCnEy97uUYdCQ4UAYoUqpN3gM45WP8yuaGfetq3aCpoSFe1snTgv4xwXESE2q",
  "key23": "PEJjzHFPsHs9Ba1kTJUnN9AxsvQS2uCy7u434xWyKevSiH6xH1oBB1aMxK9gpSmZvQLA51TTwPFjeg5mfJLjGVV",
  "key24": "3fnrvu2nNxHjQSAmVrb9gdUf7AoDiQdGMQaz197PF9pEBGi7noce2sk6sZPoWJB1ncCzT7oGrJwHni9vgDNGE5qi",
  "key25": "3B67Hbx6arX9EfoSfDDetabyzaZxc4wvVJckrU9Gf7zQHPwuj22eY1vG7MuTiHsFsxzDmFKrN2vswYRJcq8Wtn8e",
  "key26": "tDnTE6tsihMV132Pks2cTf2FTTzv6VJkLXtt1jHRvPLjPQDMHQGqt6BSAM3xPXJYPYDLxxfiFs1jdtpm41gVuN9",
  "key27": "2nbrkKDjWYaNdzAKc946tKfUij6LvosMxX9L86bDZ6XcT9BHUB9wfqcpAkAPgYSfY9zhkZ5WiMNnhKAgSXFLCcTP",
  "key28": "2UUamVUYaVRpS4eddULb12iPjrLe9qWeD54Sycr26X3hZEgGKWkawFF3qYmpGduUbGJgAa1kighkTVmkCfHLjUA2",
  "key29": "Vw7UHRmhr1LSfmLHFBTsuvTko5E9W2rL9hKptKbBwUswvDGaX1By4G5FcwnrCT3fMtgphmUy5SjqfDqUayLJh6r",
  "key30": "qdSKv26VFoVUjuvdNiarhQwsRG31t68F4hJSYTUBdEEw6wWzhNyQZ2TpJBiubKMdPQcakYbtgtPftKzpFHn44Nv",
  "key31": "63W2V4fKCb6jkFTEQt76SZXs5FknYKD1LTKvszM6pvFHMVd2d5EfBfHHxhLhXddECJ6vnQnPKRhe4uv1JczYz4AF",
  "key32": "5zJ2AdKbCbNLQsjRUUTWyvMqpBrSEVKVzQbsxJ63GCStH1rhdctAgvnjo2avVpxaA535nUpJVsUckzQzkqGRurVU",
  "key33": "5viZBZmZGBGnazQfB9MDcQKMVnffJZuFyqexQAEoWDzzzFnuoxQ7sHZqsxCuY9wFHbjf4SDELautRuW9mhb3733r",
  "key34": "2kt8ttYzYRQGoHcUGYradi7dTDvhNMYThjva9UCZsDFPf1Dc3yFnFSxJGTL8RgQdk2zbLMTc1hTGuBuYaXiZuwvF",
  "key35": "VQyLr8jjFrucRiQEdtZLrj4iD7UycAiDMDkUxkkECd6ajgppda1JH646UYF7DbNcjkpmmgqh8yevJHXq2XtxWXP",
  "key36": "4SV3oaqZ7FCnJrMKLPGVhxS7TMExRBwcMbG2vciKKumgMSF3WTCpn4NQCpVsiRt2ueNTfoCq7NnYHu3iXEcNqLNa",
  "key37": "322xEiJ3MVH7bosowEVTqA4A56p8sX6oXA5ndyfxsf6DuUtdvaFJqHYtikRB4sPreKjGNsbooxZpQzqugymjDkNC",
  "key38": "5kvs2FBC9esHN6Qq1grZS7bTq1p2FWXf1gA9ShxP5z1VduAL3k7UszCo14rSG41oQyru7PvizFXwqqfZ7L29fdua",
  "key39": "2McRcN4X8wEtf3xYqifS9TSVS6sLLMXqTz1h6afCULx7CYBsGqkh1H37fChZ3UxwxSDboSfx7GN7rBdH7dNdSYef",
  "key40": "2WnFMW7ufEcHoymuuKGMZdUhAALkhqJ441HNUsacufY7Yai65zT7CEMpVxRMRxbronpbxqvhT8xj5FnqeVFHUVfT",
  "key41": "4bPgk9o25MEHteLSqM7Xuem3bWiDbBP8B9gzDCfnLSTVqkMS3ory592qLK8sge8Hae8C9svFsQW4BsxNjUwwHRPG",
  "key42": "5qEvSrS3uJT8VGFm4xGnqpuhAJfeqTf7avDE9dVZnKbwJMe5jdzMFmkZHGQ66WY3GTPkTZQZhzfo4cDh5Nwi3zpN",
  "key43": "5HwhNsHateL4xSjwWRvSCqMvriW9Vrxr63yF6dRxYEiQ5MXnGHn94jCaGamvh72EB2dcxXrKwY8FGnMr5Ygu5yBC"
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
