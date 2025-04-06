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
    "FesrfSv7Ff6uZcrkN9tiFpBZ6PMqKuypEGPqmTiJJpK1BPiYt4HKZA2LgyhLGu9mSHzK4QW6m3XcB3NnmLW4CUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nfzhpz9WMRaQkWMMh5ovJzEaL6kEYBaMXhJZ4P7jTSCvxECqdoL7NLzjD63qQVNWsZAkxB921gVAHJGAR7Q7fUV",
  "key1": "2TysD6f8zZTmGtpvVDezoZeahn6Mr1kVem4Ud27Z9mySEuRdreEKYAN8BBjexGyJFEB1EhVKiEV9iusiGvhP6xZJ",
  "key2": "FdTBB2DWWV4kDEdFRJKVeZuVzdhPLC3PY5JRJ4hyKkfdmdVzQ8rRNEa4MWSd3wwVTtWeMacVoDcXeKRz3MjrrVG",
  "key3": "4yn4R9Vg5yJTSazo6YQvEtSoEPBe4jD6NTdEZQAVvSAmhgtN4CK8MhrwhJjfdKhHZ68tpQ2saKDfAW4DxRAN4PuD",
  "key4": "25dofPstmKQySxr742kCYu2GMTtJQ1VeUCccq9fzojJYCLnN3eKX6VadMsRxZfWjF8GvEWadzHKebAundwf1Kq53",
  "key5": "5NKHppJWVz4og49jt7UsKKeRLLArRKeTAffPuXNS8SdqjZV4KjcLfVmuXKv5oZwBDzCNrGpNVhARtYmAJYcV8Ywe",
  "key6": "4XCLob6bmtMqh862q9MStoSDRzyjvbk3ECDNBCB9bwC4MZy86YxdMdQhM4Nuzm15bGFdcAZN2wE4oUV3xJ2dq4CF",
  "key7": "3Dmz7LtN22uSSRfem7d8WVZNJqKoUiGKBvMPGNZbF8apuLXG3aTCKj3D2oQdhArwC7bomtVjyeErUHnLnC7GK4e7",
  "key8": "6Wy4YgGHpH9AM1hqxzSBGWund6X5u6Tjw3VZJfjKHQfx2yrJroUquq2YBJnFtfX9cwW7quvH6n1uLfG6uAwQjh6",
  "key9": "jna61E6Wq5nHcG7Btr5GkuurrWRMTwp38CrCXHe5jvcpQNKyob4goNSZoLkWQdmv3nLQ1CokHHtBvcczC15o3DH",
  "key10": "B5FGpt95UT2bK1anXULsHmu8pQpQgZ7x63eA6sjHh86E5UZSsQ1XRfsLVsxzLNMS3D7r5EZifwSmxsbiZQW2sXS",
  "key11": "3j5ufPu32z6nng54SGmPuTrB5qQFn9R8SJq3wnwYF7Tow28KtMJ51Ze9mABKYWJN5XSUjVGEX6pan5HzQ2KR9odL",
  "key12": "5NDCx1krBKPzZ42adjFEmoVpnmkffXjYu18KXXqVxn2EDBMQ6UTcct87dsXrmBj8My4FdVVbWahwjx3LSsmDc5fG",
  "key13": "yvAEJWsWdhNYJLcZUYQ8PcTyGjcpaG2cXxWdrv77p1gsdgf9rJwuNnnEXg5uKawrKt4Fr7reJ6yECbCzB6Heh4c",
  "key14": "5Ler7AZfS6ZxvsRBS6cSjejqxdBBYUe6XQP8gJSnoKPEFbxRZgKZCz8ocfixBXZnx3qD7bccCsyBfsatWgwMuX3S",
  "key15": "fYVhHBh9om7Cj6EphomQePWbgdFMBYw1NiLHG5f9Rg4DeeB5zVCyi9W8kDeiDVDhWQMoSGeZ7PGbaLj7jryyWTT",
  "key16": "4iM5RjR69rAPMucwpjgWW3WrFHkUVF4NNFAyr4KYFYgTFtSpsTverKGgG4Hk6BxkFdQNRCViTRiH6ERiAd4cvB7C",
  "key17": "4CaF55uRLjr8hgorizHimCVC4akkovBKLMr36ao5iuN4nWYoQ2oZWiJ96s8KkHye1RrUHdWp14hfFqVNjN4UyBkk",
  "key18": "5FD7z2ds1cd8FZsDfDJe6FGb2ntuZfwcSZy3UJnvwmbCPTtYLbP9UhKNfL97nsHGaUgfh55oJhA9vNpdWJir4L1D",
  "key19": "43WcyEMMc2jt7mNBofJo5wijtRjudP91BM8yL3nwsH1MMTpeupn3eaDob5us9xFTSr6AETBVsdT7AH7bHabEq6tS",
  "key20": "Wyqd3J6MuTnNwcF2zdC5Mb3QSQzMNemx9Xu3b5u2zusMeWyLLT9rdjT56z2FQzWvBdWeEhST3qK8StfR4HbGAoe",
  "key21": "3Mv6XsGpHiFX3uTVC8aJaPKaQAqdg9xRGAYnAevyXJM1CnKQsLKBeQRjPDdKCXa95SL6VXpoLWMzvCdcH8nBpGt8",
  "key22": "3QC9ZUMdzHLmuKAAb8a1J4hMDKQQjdhFLGaET8mXHMgYND4689gHAL5PSEdLoRrHDdi8BsCvw4b2jPEMVEWHC3co",
  "key23": "zgBKg9jHvBSjabFCZqPcaCbzR2tCQtP2m9eMHjdWmkX8aMXcn366hYU7g72w9LgYzbGqyeDtebKFcZWq2uwVeY9",
  "key24": "r1zJJXhAJiG13c1jprdBu5Dw9JGANGcJbWASssi7yKmg1s8Qyj1JLV6foJ1vkRgmpDLq8a2bmKWwpGJyURH4YpU",
  "key25": "2uMzUHTSqQ6vg3UvvrTsLB4bSDDHFtBoj2Po8coSHrfWZUiRYtGkQf25hfh2JNEoQu8nnkDVUPXTNPXxCMRthamX",
  "key26": "5vPcUJgUuU52gLaKk8XYzNBmvYt1zZkEzfCx6DN4yrYt1y4XVXycDVHJpQzeQUzcxnkuUQ3Pct1xQfHxfkgPebXa",
  "key27": "34BfMf7PNJ5QzbYvrNq5842R4gux91SctxxhBhY2AF26CRqJ8A8626Sfo6U4kQ3VX3gSav2g2NuwjonKqFw13Vb",
  "key28": "3m36t1jERMGdV6c9zt3sGeZdqei41QVcktcuQu9FHMqoehQnw9a2hktseuvzM5S91pPhg2SYbqptJQTEBsAeFP1E",
  "key29": "64mbwnDEvo1UYhMX1We7KKmfac8DB9q3vmLf8k7mTZLkR64uVJ5urkG5iDoMn7DhVCozg5WEFHpzC53iRXzGWGEg",
  "key30": "2b1K5F7tvYJfL2SKbG9mZchyR7dvstdkdEAjWHqYLgctjVzemmufitxZwFRah3t91DJGoUGwmZrEoRxJGVgGneT",
  "key31": "2NEz1U5eS8DriVFxLuUuT413JNPt2eX2S7Bh7kmiCYVGPms6HbSbdAG4S6iTCvwuyvqcseHiwfbhnRe2hvNrXVrc",
  "key32": "4V7hReK2tDKfiXoPEgHS3UUDE9TSRnEFocm2hwT7HLJiUuBC9KnZVT89RTV7LXpZHWvnjwF4mEQGeWaeMJLH89Ck",
  "key33": "vkdeAcEL4ZtZ6FmCntz4UeEWqi8zCniDCNrwZnYAEsquP5o5W4zoBwZ4Wtqc2wfocaBTK8uMfFb9H1wz8DMfqfP",
  "key34": "3SbT3sLPdzuy5cd5JCaPiKdZw946x3VvkRGRARSyK79JD2dz1uh9LJjcKD47ub2LeLnAmq7mmwikBJi5Fq8LqfTi",
  "key35": "4TBWJW9L1qhCHQBpyw4FkMQAfjiebspzHR1HegCYReToG9c1VQumCo31GiP8eV6B88tSg7H9ZgPAxYEG1Koje52C",
  "key36": "3Lc6DsY39AGFdTRTx1Ej1v8C4VHs81MoB1o1QJ3bcEDjNmZPRpc7pkvZmWuvxv8NaZm8iW5zKNPptsMDbLgf251h",
  "key37": "tTZdfXw4xCjD9AoGieaVSKLyiM3GKaMZcsQnLENZsdi3QFRdwTeda3tFFpw5ophtLSnRuWznXGXCjsR7pzBBvLD",
  "key38": "44Mn74GjCoq4m7cz3VK63XQUsGJAUhPJArMNMS73yTLWX1RWzKb56hxak1mqmd4Dmzei8D21Rwwo8cwhNWuXudAY",
  "key39": "3ogsGHAQzXccS4rPN6GZYhP3Nk3SBYZ8HDSkxwMtfvn7z7hbUPN9974crBkAHDFyFfpvZyPwTBuDqUinPXTYmoXZ",
  "key40": "3Q3dPKJaH56qsbyWU1urJSNFxeQKpd7Ut8vuDWPfhYakGXmLQvRh2oKU82YEsfLYp4A5G4fQVTKMHasSCueFa47T",
  "key41": "H9UcuZ82FLznAoyhNyGfUiPDFmk8EuTsMwYgKGgqQSrPn2BL68NPsZtQ69cSi1XWrpAAgZMH3cBGXWYicNQkYyN",
  "key42": "4jAPFbyPomHwS7thbFGdXp3raf3WkPcVxX1rDdWwcf6qXuS2tibmXWKAj1gU7HEz2NG8xGtuPpNcrefiwrsjypMr",
  "key43": "2W3kdpbo4nmWPqwuCA5nuYAr6FGr9vdMNmrWYvtvxm9NnLeZNnMmXW2LioJ5utHPn92VxxLEQ2hVRbZoCKXjw5gz",
  "key44": "5s6pLj5b7Cb9T3pkPsqAHqa9KCtJeiyzoRh8fKC2DHxbXWRjLFNE6gYecYw8tLVhMf6TK1u1kA8Rkj8UyPNbaZAb",
  "key45": "3xCxyxhErkR74tzCABsaMffKLrExBaw2iVxJRYvYgogdLewBUdAJETXnRWR7HQs7qE4ANeBzCPRbQCW8JJDBsT3p",
  "key46": "55CCEwKZiXCrqzj19V5g3HcqPFEc6mCBqdGbxnSFj5UJQsbykui6yu2hLZTFbboe79haegRbfWHmik8hv3CXLaCf",
  "key47": "2Van4NHoNmEAn5ptr3PudtKD1ru8Au3oZ3Xs8LJnwm6nspwryH8LKwm4nqbYyuwYqj7q2EUyFKddEnbsx83e3fE7",
  "key48": "5zbU4M6QvrsC5rSbqVpEiKnswyKE994ZbwkiQJSWsUfAmVtsH1tYm3DJPYMokYonBNYXPictzxBq7tnPGqXLJotf"
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
