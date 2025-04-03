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
    "3vAQXyjTJ4okzjhHS9kZzcq7FhaMB7SoTm6JF3gRNYN3z8Qbd4eGTyRmLaboZhuqvXqnfxfTRQAYYUZxG9u6kdFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jwzou5LPGmRgEEcJMU5Q4RyiBHuSEUVeMsdZyc4R7sJ4XC45C9Z4kFbacumE1p727m3c7nwRB9AmjxX2TjRoisH",
  "key1": "39SmhaJ8xt7YHbySwjJyfRtPcNvZVRe5n1qFyVyGN3o7ELySUBN699y8kMBQCpiYrBouBTa3DyVNW6jyZy9PCRX2",
  "key2": "32gCU8qjKUkyq8zCEdnYhW3yGNTqm4hfKHeJg34ykJJAmgy6FFtKXjHV7bFDsPbEFMsfasu5yJkrvcYFYBvgujy4",
  "key3": "4sbSeyyKRzmN9xJthPQEhpZKChKhkfoeTcML4Sm7pRZrf97FcGERtB2bmjqd19jW6NmWcGj3KLvSfQ52XfCy3iFJ",
  "key4": "26ovzrACDtps4ooudqUgsg7m1nrdyDDKEnYKFKctB7LQmu9KF7JWZAPbUt7Mwd6gyURGkAyxxx9Vn5MzQHBttX2o",
  "key5": "2wTjLw6Z1Lgc1LgA2yPEL9TXrLUcKjdNxckvU9yv8KYa178vw2nNorFhdjBgoJBaW7rV2gZ5GL22zNCQjwhmVVk4",
  "key6": "625sVP9bxqh5iazyu6oYnp8LnwXejUPqC784Bvr3s33bACNgV5boPpJq8WvnKZ3Eo25rsKNBmuLbHpTxhYqDbbW5",
  "key7": "qKVwiqCePp8gsXV5mnT7FVQqEJTiLz54hhrt2rxGWVcmQ7Zp1EWyHmvxBvMb5zUJ7cB2gd986hL7SB15tW16DiR",
  "key8": "mqPRbM5s6yh8jvySZpDMGSZ5QbsWoVsoAA39Z7LshoG6HCNBz3egu6Z52GeQWjPGXRkd2ctr7igidh6WrSzGRZQ",
  "key9": "5QrwvkXxRcWuHJpchLV1RqZxHUcm4GbWQtpwGjXyvZSEZ5Bpno5gCbtCmLBpRNyatZwwRYzyfq4LoB3Emg3U1Z33",
  "key10": "N6DMXFn99QzMuTukdhcudcEM7pyVUMKq8PMwyRSR9qXCZyKgqvyX7BbBQNeYPFZwnYaaqkkapo1vPLj9fpUfgu9",
  "key11": "sLvLka4nb9v8TAkrdV77fXVD7Z9pCYPG9FGTePGHRJW6zzCKRasPjPJzxnwcLjRXFcNzqPbH1ie61CHraKYzv4v",
  "key12": "562pZJPxzjsNivYUb9ABsq7wUCCCFeURDdV4xao89xYA5jerJLYbeVpqdTodP1Dki6Vd8aKEAhxxS5c8RNfXyQtE",
  "key13": "mkp56JVEVyS87AwNeze3qeSRa2rvXns6psLMuSVFqkthEJ7hUdqBzAu53QZCS2mT5LcXzwj6YxXZX9eUBRz3vgs",
  "key14": "2QfrRrcbcCLa5M2R8wgJ3Tgjy34vnDDvx6XuR9Q6LEWwVzGTYQCRgrYVSnxxvgoTtDAdAReiZGNCYA7atXjLEbZU",
  "key15": "42yi629bV5BrhjXhR9HCnQimCg68H8Qbq6xQsaYnpCCcj1b8yURfcQdYBxkDEWmvdPWSwLiNPHwFzWriWSCu3G5T",
  "key16": "3XFuviHdafFRkQP1WGd77x2GiERwTBe9tsY74MfcM47RVw2TwKUpLfZkKjKtBNuLmiuwuy9gRZY1ijBQsmGEs78m",
  "key17": "4mw5yjEz9DnwGTjTFFMf5fQBWnwCC3oudmtBCqk4VsffpJZ9PWujwChi55q2dErm48w42G8LMzgkkw46HhaLbGR2",
  "key18": "dptTgB6SYJzuQDDVb9dTkeSjdS2eiKNQDnHUiAQ83cyN67Gf3xEidBwpqHVUBhNgkVeHsXFwDDp13ozJEkcFmjh",
  "key19": "5nCDoXmMYstob1dSFE9mitdFyTFb9cUMezMPemoF6YpHG5faf78g9DkJE1Cq5pCczc1eVV6tgZ2LNhCmRmog7QUT",
  "key20": "CxPiE5kH8kes2hzK8aozqHwwvYicCeYixSWmScsnQc5W4NzSywKptFnBKG7FD6f7kDvYsMnqzQ99HmNeyekz1N5",
  "key21": "2uBxWJaDhAga6bLAqZrYFomTqwnV6AMAv6gVW8qoemZ3VnVDxM36M6SB8PzjVwjeoK8bgGnxy6sZt4CNG9dqaDHM",
  "key22": "5kpNeXrYRDUe75E6Tf2F5DZmZHUdZwmecCgH9TrVeMGY17BsFYStSbytuosRnLahBY1oDEdyrt8Xmy1tno3zmvW3",
  "key23": "4gXGZs64ReJfkyARrXg8YYrLav9XzZkKjcc7HoEEWyQvDHjjT4SCLRZUFbi8f4mY6euCQdvjV78VubyBDojWdhaN",
  "key24": "5ktk3Vw78134HH9999KSnWrY9CchS7ezJHvCRki77t5UtecjyLKYwzbEEHSMv8RtQr5xPgcQrEhNtm7gPnxn9dcp",
  "key25": "3hqe9S1JVodQEVZg6rn1GfNWWUMPUxtu1nA25JUi2CzWUXNhP6FGf4X9be8iCuW9QtuXyywUATUHmx97ucBZta8R",
  "key26": "4Zokssx4VS7cWXPFNFqTFNBKSThhMNdeeAHK7aRkiPvyBfuDfkkGwu24Tez2e28SfKox1BoLiyYMfbsEs9tgGbkr",
  "key27": "5jg25dYuet1Qx6oconNYQSripVkSnxJQejgBTSYDDbpy5iTs8naeoyyTwZXmdhkjxUCuKcPCykMwHWr5KuYAwB9y",
  "key28": "Ua381Xo55mCtUNMkDJc4YBH2Px13sX3XrbheqP5uveiAz7aTx1W5ne2mUCWvs1xuJdWi39TrKyWWmjeEdo9Nnrr",
  "key29": "25sqgSxfaLs8eZsMEAiiAPDn3eBx76sJ5VAdoWfyTX7ZcFA7r4SmRtDBDCojoJA9aWCQBktGz8p8UFRLWqbG2mkS",
  "key30": "M5xtf7LjnLHber4DNjT9RiydMRezhBJH1eE1FVxNAkUZsEPr99HwKY6KMdaKb7qrpEE2hQ8WYvtgcKPdgZ18nvK",
  "key31": "Tf97NVxT5NR6xLuM7XQ8WV3x7ErCiwUZuW6rJxP93gRModpNKW3MTbgkDQ7v54Sj5t3VHyiijceW9RaSGvsAiuF",
  "key32": "5jDETShqdAha3ZnvWDc2t4jNci8322xcFCr6VPD7TDQ8WRbBRDKSXebsyQmiW2sNK8e9R6A7Vwk2mSV19Njtyj7W",
  "key33": "26QEmgKmBE6cYzqNSKaZCTqfkUCkZpukEbKu2atSXizQULse5Z8PWhGGy6Ab2ncKZqJiwtTUPT1D3XSz4199yPXR",
  "key34": "3dNLqvgHsSkXoA1dGgtoMcDNRyn5cLZyuTjKwoYiShNTSpxZGEaQizAyXBio3yDDCG8RkHzR8SxKdLjoEZHoc5rt",
  "key35": "6pBbbQno6341HLXzQz1jgJFDrMB4p556SCpPVB33tPo6DUZTKErPT1sStxekn6QjgQzi9JBMM14qtJAdS11p6Xq",
  "key36": "2NLJ5yyz7jE1YFGcr671J1SeLU5KYrDVf2ojPAx8jnSVoLTrbSGq6rzBgPDmDzvsVXho2dVXxM5yWqygsh2yyGbS",
  "key37": "3L4XHVPafLTgD1ZPi4Z9GYCg13hdRSbFoKSREUeKq3VKJotyoGAvwRy6MKAEQgLJ3bFB7gJySgCzuRCUYkEP4Rs8",
  "key38": "5mw4hgesHjSmmm21wAuV1gvRJbcogGbEvE8VZZAqZxKdDfizDwwoN7MWEkcwQUDjLbMPpUjn7uHH9nCiYGx7FmiV",
  "key39": "3vm6JLMcwq8ehy3xRhSbqkNc2jYB9FgFw4ALe1hWu5AiPjkHQVufbsKrqdedm5TBTP8ovp47eW4TSK4cjtRY58Qj",
  "key40": "5okM1wfiqdZsd1QCaNTDHgePgEooGU4AbYobbFntsYMZ1vADYLEqhXgKDRHRzgXrcFzeTytFtrABAcNm2Ghr1wSy",
  "key41": "foks1UgRdWxxhPZNV9nr3rV1Rr8MFo7sBn3YCPKC6QNKnEBcYzTkZtqVYNND5CV6movrhAqFHKRGnnGQmAoHgj9",
  "key42": "FwKcAh2BJinKCqVZtdcwjrZhbxyfUj2SWt7xTBbnkDq8ZcTaAmvQzBVkcDQGpeSgG5Eb2sEL9bgzCBGm4qTZtuU",
  "key43": "4cRi6Sp2o33JAPTXGaVK9zaSTebQFNpyF2XrGDKX2uasNAxHzvE1YbeBBoDXtzNkHn1eqVUjv5rxT3J9WdaSm9b4",
  "key44": "4yC2iGJ415h8Hxw6VgrZA4KPBqCosnZJCnpnAjGxtdVDUhPDS7VBCb64xqMFWCaSgW5e1J5dwrHLEVDKQCR4dR37"
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
