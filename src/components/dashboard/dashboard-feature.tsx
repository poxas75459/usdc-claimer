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
    "2LRyowuUa35bgjXcs5fJxByTaFLdeDxGvLsZwNY56nNVNzyD72RGdQmEEqoyA4EaM752GGoWSoaRv2P1kVH9ftmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdYQ3x2xUxemnsd8bpQWgcbEuxtZTVbhUFFzc7d6DXmSLzLLq83ZyoY36bj3r34PiEfrwEvqd5jXZjGLkGhTfvE",
  "key1": "4h6gv6kKGdvH8ubNTdrDcvPWMjPCGTYwVcxEA35qA7d6V9A1oEvt3BUZ4tarjfEtMuePFHovRD5z194cZUQ5BViL",
  "key2": "4XyZ5BSc5rjLkg9XAAQrTjcAeXDC7m6NBKPcwMDFzGf8DT2aWeT3JbzMiUT4rq1qjkPzoKztjv6N3dpg3FKdo6Ns",
  "key3": "5AueDVZ7kHnUzNGD5akrWZCYSVcLAKbt7cBo9Hra8Ynby9YVx89oP8HHPQRYes1U1gV8hvsCUMFNRvGpzYspw225",
  "key4": "Mi4FVTTRe9cDXisdvRMv65qqw36E6Tq3xMXGdq56mYxuvHKzrzq2vUmB7Yw9gnyFaRpYjzk1C5ZXYJzCXpqbQW4",
  "key5": "sb9DjLFmqDE8gS5Lgd8krZJeMqvo8bkXoWBBYy85ywxzucxnZn8e6EsZumUuKtbZXMZ9ZGsALgJVEFt4uW9oELq",
  "key6": "o7ta4PdWNrC16sLXT6TkBHBJee7FJKSvgdLpffALYcKkts79vK5TN84G46SfrhiXn2qXWTBar5VWzSMmM2cCWgV",
  "key7": "VMZLpbEMicAGL5VnHJvvUK3V497MAW8VtDmam4cpAqdP3TUAzTFvseJpH1h2mm5WcCLycgkz3MZ7inUQH19BzNL",
  "key8": "5ftuuf77Yk8rv6bZiCQFv1ogmWqm7orEboH9Z5ahUVdatY8GBWGSHXe6MgYhR1ZBAoK9iKZ5wNfnLt2YiosKeYy9",
  "key9": "3jBhgYHtxYvpSLNZChQ4UXMTLSn4A6Z7maB5iapYK8B9Np3p3XYAMNT6ukTnzgevZbD3215hEejuTphQhMcaE2ek",
  "key10": "5SfbiNRqvVDLQEBpxQMGXsttFktffA2iMtA7Xc36JkbJyVdmpnZmpaEjq7WiaYZR5CogJpBjd5ADcPG2gnn8Srxu",
  "key11": "36T4Kz8p7ojyn5KyYYRs2PfjDHGCA7kx8CKiwv1KnCXRVHu5UbvPBE54Zy8V9JKT1b8Tqyb19U6tKdoj7soKrpmM",
  "key12": "2TVJBk5AZbX78ze47tJfoXsrDoMmG13x6rXX66Tyj1cvGXN6P8pPWxWG2byXW7PEDmHCVXKY5SeupJnnadEGzo28",
  "key13": "54mRYxiZZTf7P3c98ciXRezkotK5kGnwizWY1b2m9YZWBCUNJV6wcftJHbfBLBNiQZXLGyAkGeSk3uvzmMUd9LYs",
  "key14": "2SRMZU1u2qFeAkdSTtY8rxwJTjn4NXoLNjtRUHGhS9SRBqRtWYhriBVXWXMgBSGcKJcVibvxPYhX3MFkZmEUMFTc",
  "key15": "5VDB7JZhr74gkaiwNMuGpj15iMC6zqgs3jB47jUaHG7cYH7iV3c2gJeuZmQgDPpPj6Txq5edhgQZktJB6jLacZtV",
  "key16": "4ysQHWE99fZgQzYGUQW3qwcwejFSML5srJWSsT7KLVrPXoR4pUWX37Yj2Jbco2xVbZn7nascFtLpg4UBEZAUdGHX",
  "key17": "2NU6ZyRvnNpEerSmP9rSsMYZBN5GYekRUiskBEAtTwn53qKyYoRmNYwKKcdLhhuHAa5d1yFmU4sn3sVhK6xKqHn3",
  "key18": "55shrsanUejUa9cAQhbhrfZwJTmprWGXWVSZmVux5YzpLSt5ov8Zy5Zw9NAAXTvGWmKNpeqjQqSgNBzk5rWZqeTE",
  "key19": "3GZLjPPyQRtM8RDNJ2hDgDptd46cAq8ojqJDZ8r661ukQpe6pUXJGbrUeNEspd4XU6ZNaJxptXU5vQzcdZKjgq6M",
  "key20": "5443Wa346FemQ9iAh2Q8i7mZRYXV7zUyN2n48kiixaDQxUAhe7uqX7XP4JfksgxzRFtFrdgZS3VR8G7SZcA69yi9",
  "key21": "4WpRBZr8LihrEc8Fxd95RZPstEyXtHqDTjzmVrF9HLfg6ZwNWyaB8ZKhpNssBeygZ9xzCauFUs5vZHmfHN3gfJG7",
  "key22": "ycCJiwybKoaKqhtCktqQBKMp6XPE5CoroWLkKuzwtBiNRi76TrkZGuFJ3CBR79VLx1bs8bcVDQMjYYsgkqy1EzC",
  "key23": "4fesuM8qkLYJNxr9w5UBU9Jdw5RaJA2xto8uqvyodh9Zdz2FSVdhoLzYCr5JmMuRr5zZSZH2xrupoBhk5eYnAsjS",
  "key24": "m5bCs5ZjzVHJAy13J1z7g3tPaxVoRHyyW3wxbpkx51vff2Z9Nn4HhBJvQeaqnvtLvBC3gBsMyon9sH3xmUKMwZ2",
  "key25": "3v1gBa8fVvcJqx6txivnDWGKU1shRDMS8GZKET5heA3ZKC2e3CuZ96AYfyu6Gaard4oCM1F4gHiviuyZXYcN1Y3E",
  "key26": "5xEHEPibfBKi7ccmxP7PbxGkSYotuTv1D79YMuv4raZQTbh3pJ8Y6uruoZBgGCN8LDzWttevCXMiiPZPVWocH7r1",
  "key27": "2ZLejvAv6hiLaSdoBYW7SqmGdTsb49DztzSTwXEXsPXPYj8noPRaqB8VSzhAz6xHuKqpumSxQMEQzHrQDCQGHgFC",
  "key28": "32GCAQrzWihPHj7ZqUtmkXHVhA9jaWAYjDiRJQNMa77nu27dJa88b9H8FYtabD2oBb8XSgNAGoEw6Zw7wZ939Laq",
  "key29": "3KKYvQ5iHLtC2HghV3d6KMBnfMvLBBvXVJQoAe21aM7Did3HqYxR4trFqiGEyBTtffvwXwkb4opo6iewHzWbC9fR",
  "key30": "2qCqNgvbxdEiNA5rtyYiRXD8PriDCCzGEbEQJ2EBmM2uGX2B5mSosA4ZmEhBwmSVa9U3xyJZzH3hBWoixe1Nzmqa",
  "key31": "4C7tiQwoewnUCrEQdrjEEr7ZVW9y7emuMmcrBsyCYBdXizSZh8U92wRorrTUrivKjmVKbBJHKHirnEYHJiDSa7kd",
  "key32": "bQbMx7oNZGBsjraZe6wXnBeJZ91zDHgudnc8xSUazWQdGHTyTV3B5Z4fFKrxF3XwHjJshS9G8i8v9837iPeExzq",
  "key33": "3JJtgsJQSEppV4uMpVYCzYMRFftC1YFMvJ7M6gkFpJh2F7w5QCZMfskxUtT41j7DyThjYNXG3CvPUe7jCs9cjKcZ",
  "key34": "3Y8vDZ5nw37a1C7XRH29GXhXv1CoE8eXHkjTGAf2BaLQZ7mCxdiXcxP9Gj3cUedtSKf4FsWjjxDt7qvppXuwDdbF",
  "key35": "14MhZNez3YjD2sGSVuKNnqV1fwAgsF2a6jKeR9XE6vZZqz1kFrgPauQ31u9hX6JrHDQqjtdt3AWmr59ZLX3DVfi",
  "key36": "6REbMGyDeSnNp981a7TMc52hwNz9NA996wW832PgK8HtTrgec4LsrrWwB4Xvb7yJjj9sdZWwjrjkR3RWp4qtwpv",
  "key37": "4tNAyixCfsFKZBuuwtVdGGCc8eUsyoKrmMrj9DHcHQjh1fnpusgzqe1VX26pb95RFTvdPxCER5QPTtxc5YYDpsnP",
  "key38": "5GN6bgrBE7DUVPhhMmMt4uB8S48bfg7an9frJaULgcd1iuQDj2wv6WobCHR6LNBBxxcPaZ7Mpf97RLThbH6J3Vux",
  "key39": "3qTLd6zojbaxWBwfpzFHzuzVz8gvtNQesD5HqyCmSBqNYPmrsDxSngJ7yWiDPZmXXUHGULaiWFBd2SoJJGNTk2Yw",
  "key40": "5CcRcj8yHToEoa8Q5VfttfVaRj4z18Ld671G8LnTC88ykQAoVRi5dpSUbJ55vDS3cQc45brdTBbcj2AciCjVRb96",
  "key41": "3RU75c96FRvgRQLC2PZargJXbdr2oBoVgj1oWaH3YkJ4dmy7LoUYKLT6uFStyHrzadTpKcXc2hjsqgHLCUQXCV4P",
  "key42": "2Ny1umEnwNEE21q8EGGTLqm3DZrorcd64KHxwBa5NrgSZYDCRu75BW5SrjN6ZhoKYXtvcF15nXevG9oYA533p1XF",
  "key43": "4nHYc4awnFsy6MTr8zrBt1nFdrLmQFQ6ZN7e2e9Es95s8GBg8PC6z3qpK2St2t8C8ENpLGwfFAiarP8YEDNpwQNo",
  "key44": "42b5SrY8eTP2ENJ3phZ82mQZbURQCaREAN9PtYc9q4eWM9hL53hUR8QT1YwCKidhnHWMpTbCgDmbJwyAgeizavUq",
  "key45": "jfUvG5wMYy3kQZ6Wnzw1hLGhN1Vsxcu4wwvPHqhefHd6MhoKNQJodDssQseHmAg1RiXVVJPcUiT9pQfPj2bArC6",
  "key46": "4hJQAdtEPyLgC2KooEUFsQ5aFenUpYLCtb94RbsAPSvs7YxjMntzDQ1n19CUh7Mjtb4TZHsbXbYCRdL5rCWAaete",
  "key47": "5rMZbXUAWcwATD3v7B5oSxdKeUaGqEKijE1VSpRkZR7YxLrcpuqPSV9vBJvvTQiygRfnQ1N4inXdFiq4GWyuPNBC",
  "key48": "3QeeN6tLsieu6xvPSPCj8xHcTgnLKp3JUanTNtCjcLSFirLnMbjGN1PPJeNt6W5u4crKvNS3L5g7QfUhQhWn527F",
  "key49": "5m9ntM6mRGCVE941TFpRkSexfPt2vMm8SHt1W1yzZAp9UDmKAak1nbtcHMM1kC1aFwBKhzyfBKPvEdtSAVk53EYU"
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
