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
    "32qitQiU7dgcJKDtCeCbV5ippGkPUrg6EDebkEKfJ1o4QXkrkx59gbL5PBjTnZ6SyYp7FMAGxpKH5Xeybfz14wD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khBUp4VBV8Z6R38S3WiyQavJHPU7EoKygP7KjgK5oLyge4uo72uazSPQ956FkwDUNQtn1fLugjY5kgM7mEwwA4L",
  "key1": "2V49gpHnGyB79En7hXmWoBPCd4HASrHZBDpGfQPWeKvZZvVvdPdzF45n89z3PsgyWW9XhUe6iB9X711u8jyk5BC",
  "key2": "53kXGfSLcLi51KE5bVBoJBk3QW4NdCFPgN6XGRPfjAdGzg2vbr5xDKdnihrjYwsL9gmL63JSRaWeVfrX6tRZtWo9",
  "key3": "4ZhUBXjsoHchP1XmYWeAGqyLniLUMTQtrYAdMJwaV5CA6vYhw4jg5UKzBAqSS4u8Rq2UsbsZQ3T3iuTyTVGf83k2",
  "key4": "3HG1DUM6o786F4GAphEfNzELttjomXwZQeBTsrV1nkdyV9uGbJzKBvwufHwd3fEUj4ZDagBTEbWgS5xdbiGXvcgu",
  "key5": "4f3SBxw8jRLhSQybfffzjaqGsBcdwk45Awzp69uqFznz395rNNRJG4ZTseXgPYckHpp8BbQ33y6GAEnLJacZAJb2",
  "key6": "3YMmnj2gDbU4kLAJDLka1Y2KfKMgExfYoRLPQNs59DA8czpx5xpM6gA15jEroZAKihJUjjEEJegYze8xuwUNMhre",
  "key7": "2z1s5J2wnf8qhxUJYFQmXAU7htQ4qJrtgbTFzwSW5qgfxVxt3kAQQBQxBB2iq8g6VNCDok9tnm4VyiXT5xojQ6hW",
  "key8": "4y5GEeXCtRSXnPGhMip5oeoiMT83bWQ3ZM5q2pSiMQvZHc3NvBiPkAgP74q8tnLKRVbaiGjBhyBVgPVR6f8CHjR7",
  "key9": "59AnaqbssnvgQbqDmoF8MpGxkHK9Zguu45XgFRGtcVJDAvmgCEV54upBufF32XUe6jbqannkr7X47uD8E53V8wpp",
  "key10": "52QtJ9NpudVrwYt6we2oMknaM6C3pUo1zsnSBngiqKj8gYdo3spUYam1MmEufL8wXQmGwPwGVEvGPj3hSzYXf7vG",
  "key11": "3BRxcMjaB8cGJD8g4s3ggZ184rKaXHqpZGRmy8YFPR79qwiuAJghNZkY6ARBxmeT8uXxGz44d2En926iQ9WPA7RG",
  "key12": "CTgh4giYNm4EcjzD7GCiigcx2t5Sq2tgK6fe27mAUXJiCR3t6KTuvpGhHQponMd1q9GXqDhSLakzRDD7zcnuRRi",
  "key13": "8hgC9ym2rrooBMTbF52e6rGxKYL4CqhtR1KFpguSQdemiG6HSK6MveF2PHP6QqWqKRgYxWVZ8u1mN5RYKyfYYRa",
  "key14": "5CpzLsMXBP1wX2SJ6SagjY6YjuwSnFXgFHNhPRUpntQ3BXoD2GS6sRefVdqQEGev8PaQv9cJiUkqjzZDKdTRUJ2U",
  "key15": "JTaczWQmFB897npJhGqTi7t2khi3jtBNu2zDyXxY6c5KsDic3QHkoShhWqtVcZpXPhVtwUj25fPvwoqsXu1W1Hp",
  "key16": "5jcRfiqGq8GzhkZHrU8Stph1fAwRFC1RU681yRdYi984YCX98Y52emvhy3xeadUqcKCNAGAzHBzad6dNtat4HaWY",
  "key17": "4gadBeWqwuax4rgDazp7coMMmMJ8nEopHEzpJp5rzhQHGQwTyWfjjjYryJy5GFfcMTYwi6resEsnsvEdSSmA22ke",
  "key18": "2HskWxAUEFZTqFtNhpnHFneh1uEeaoZQnKuw8vM1WCstiH2FL3a4cq4WdCtpM8CtwtKML5rfVV6Z6PUpQ8jfJS1k",
  "key19": "5u4FvD6Fhi1MBr3pdyduJ3sH2eFaE7gzTHX1JzoYSWfDZa9VxdYJbfZP5H2xoex6BXXCqN9CpkyGEbktWRVwRmPf",
  "key20": "u6FCx3ht7AFpJFvDWJDJBEu63i6pUqC6HjDNHJZgaCRyAZwExims6PCj5zzBTCKh2D4GqpQ2DgmNaYkunatyREY",
  "key21": "2586KUVMQkrfc61JkzcKHvcLMS78df3kEr4Zc5ue12yrqDpwgLvVqNdCTHmqKxEeXU13kVxdHCnf2foPoC9fMPL9",
  "key22": "2Dy7HDbPYHzdWFKRW375t4pyTRug5Ag5PtCjCFCWyjK1Un8S9oxWRgQ1CrakgQYYHm1QtDxjzmfM2eJy92aVFMZ1",
  "key23": "3uaGBeCUPsd7msMF66qTKXPUEVDmHbjLwqxrNTyDP6WsKnFBy9zCFhSxwGP3NeTX9boJsEhnSHNNuo4L9pmNHzfd",
  "key24": "3Ts5KeWGt2LmEVdihwFeQxtsXAszhBZoDHhnFEpv1hhUvYpjhCEeEwvLMii8Kyrst3fCwv4v2VduGvrrFjWpNjU4",
  "key25": "4JwLKKTCZajkBn9rXHeu6XeU1K4K7SjUCz7JDvi2uXmocUxPmsRFhG1YSwz5HzaDgGVxqRUakxo4cJmFMe1eRjYu",
  "key26": "3wezjBRbBrfDKpU19XXsssVNvefVSj1yVLwH3ygckT1AnUCGH9kN1q941r6yEx9JiBF9cABFvy1w3bAu97jZwRPN",
  "key27": "W1g8tbXvdJJDCTNofHkd6Ny1ZxjFrZ53NnP7xt83cmm7PDrGHNbftyCZUeEsVhrmK56gSRf89Dwjc4591bJqhQd",
  "key28": "46dumZRt9CsFPbFJbodm911D9FNqcQx8Rw7bARqCa1Js9fcmyyxqbyvAFg7cT1p57xBnrSJw79QWXbMSPomXcxKS",
  "key29": "2Wpn22EJDFjoVj31oN7vGJaZHQkYveiVopqgczUSYSwN6Za5VV7FDJgRDmmGtVSRr57ebAH9FAVNfmaNYpaiz5xB",
  "key30": "2soRs1xjNXJGd4yBPekPg7La3s6saRbjF1AnYY8u5U9dS8FWXtQyGnaFJ2WhbQRYsPHPt7krj9XpGLkYomNYDACp",
  "key31": "5EgE2cwBMmP2ozEhKpXnGyHxqQxd2XZbRAL5n1hfDKnXDgU7cKoSrMu7w69ZRJ9CkNu3kggQ9jK4nYbEHvFpoVVt",
  "key32": "wjeMbxDJ3hkzLLGEZ8BE9zBjx7TdjF4RRYm5kiyTmozef31v9jyEsyJDWKdo6eN2rEV1e8GzuwTrvyqh4H93MaF",
  "key33": "4oYTTscitDDrD39vGypNUU3GdGXmXA6UL345q354WVvfwQTvTKH17Svdu3UWpND5hLuT3eDmPjbo1ncepdZeUZ5Q",
  "key34": "5ca1qK7XmPQURK1MCPr4WZEdJ77yi2Dg9SMAT58dw2zigwFX2EvxHf3GSeawL3r6dmer1zPmhus8ADarKNM6iYwM",
  "key35": "55KDHKHTmn7BBVCrhcx98qvGQ6aHTHe8nUsE3ofJfhZDqQPjUHWbrAeGP9pSSYDbb7C2jk14VFgRDTt8uZDq9bk1",
  "key36": "bzWcQwNjug6CjfkhDBMMF7NUhrbE7iG5scbQ4QhXFGFNiHV4rdEESGqNsAeVXvtymw49Fw8hvgUdARgipHQRcec",
  "key37": "67NKPN9Nk2wHScEK8vFfQPofmLbm7Nwcur14sTTHPJmMK7KJ2piUBh3f4P27EQwdyovwWUvGw3EmkqENQvhmuenm",
  "key38": "4ZQUrMeUEKsZGXRyWhPUYrFrwsrurY488iVbrtgBDFifvmVdfw5pM8mwTp6CMGzQVfHSHBTM1N8YeLvP4tLvKkkM",
  "key39": "4y8m3gEsrkWxCwFQH67GNVsM9z1bgWmpgkT2aYVnhY7DJcG8YuGUhUiNb8cyC71KHFw2ny5YP6NR6cLvcc1ZiyEk",
  "key40": "4eFB2G8kai1KfaTfYpeHtsisHjyjQQzgMQVQ3A1pRFzZouxUFNpdA9VnQv1RPrdUnBHwX1kRDAza4eGXErAPugap",
  "key41": "4LjB7rxGh4TcAna8Zh2iny6vy3kyn4FUazwxa7CZPDRNwjXYTUsf2pLTckwrrXmVA5zm3Jo4c11c8Jf9GY7Hka6d"
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
