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
    "3cB6Pap5TiWaCK7zU94YvHYYyJkFsSrQzqgdkhSjwqPiLdaKW1tTHs6BmAk5URpqXgjyUcgaW2hAHXxpSkaiajZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AU7rqVc9zY3FHtaf2UbWJJ9TYmGjqPiMzV9iyfifYXu2o5Bhg9YHZCmc7fKMHnxzM3FfSjUpr3hewEmjVvwXvK9",
  "key1": "rPqoJQx4jU9H8EJwKLBybshSHZSe4jkvoDDW4PBy2gTpDdrc4mvRRP1GzTDfTTSD1AcQhHMp42KeTEvBHUDkc3V",
  "key2": "3K3dKbtrDURgQ819owGWKqMhyVFNxtjvpm6PWeCt7w1rmQcqdzaTLsnheYyeqMUXogWobqNm5V7Aa8MFFPVM4RNQ",
  "key3": "4ou54DkoA4a2oU3M2Cc9vvzZBPhiT8nJFoNmhzMu5BffP6B2E1TMUWchhhX2P4c8HCRW3zU9QrgZb4ythfCeszCG",
  "key4": "5a27pw923kJuLLuqsi9gVWD6gKM1HWa5RwzSB9Cg6GgePkKrfPfNahG22XFFcgpuyYe4zoToQUey9sbVF59Lxszn",
  "key5": "E5UCD1DeZPaejgVyHxZGxov6Ae1CLDkq1tA6FUryHm4SWEn41zNtLnJUKdFYzUsUJntYL3nniqrdk6XxzFXo6We",
  "key6": "2aqJTcRxAhABzvXEvTpFKahda1yQE2nAhx6qk7KU2bKFFo1kF4aMQUHbTYkUz8vPg6kkfxWAd4wCM5PoQ8qq9bPn",
  "key7": "4aXQKcdbzX4mb5tN91mVvFuRXnMwfGuH4coS5BXwcg6dYWLvYrZFE3yt3xgHYwcnY2T3xtG1gz6qHBjUqMgBLv7x",
  "key8": "2nzMp9QBBaeGk6m95RGww7TZBHJgUCDoVGF2nryKxXQatoC975qB8gr3j3SCN2C7mhvhj4oVS3zDuFxhuc6UMQAw",
  "key9": "4G4RTJEeGa8dPYFKMDhS6P45qLscpEfZuSGpBugxDYG7n5iz579ntXhuEP12njZuSD9mEH22YtcCkoCT6gL1379M",
  "key10": "5RgsnXC2LrogHQf85c1Mq8TKbFKQP6Sqjkn6y5AwLEU7uUi5esFNPiitFDKJ2fZCxAt4UBb1T2ZyK3TqzwnJYT5A",
  "key11": "3TeuUPhmSZt4Dm9mngsySuk9mJwkqQ48bYhkZuTpotQsUx8TkCjDP47rX3z7FqGwzcJ2hbfL9tZ6oCGxpENfe4q",
  "key12": "5HS7tg8C98aYNFHBuFLQXRURXTvRDV2vbCuyoorDyjKNC8RdCGsU9ySNob83FAbFBuecX975GSNjHW71mXTjBywE",
  "key13": "eat1RHnHsGGTUEGK57dcZg33tcVeqB7KcF1KjMneUnRuSJgEy1ntDoU1Jz3vdj1bvXNDwh8m1f6i6KqAjd1UdBk",
  "key14": "36gi8btYeARHpZQfEwEJGZBQ6YCxJELrGyerAP5mPFWeLH26AGszgwEevxJwaM3fJce2afbRRAHwFVaTkrm5Aiac",
  "key15": "2GKonfi3HVYiCBBZjFfduz6fuFxkAjeiafWiTMyzsuzMsREveURXVaLcduz9jdQgGHrmSmVjqjEfZQsvFbLWixA9",
  "key16": "43D52X4wLyXAaV5tcvzZm2hFtYbdVT99dUFmpdcmUPozNGWR3FtbANn4caMuieN9TGRPnhxGLLLnWaMK8NEcuFzf",
  "key17": "5DT5ckrHKgaScmzr1goBWqM6dfUGL8u3rejemUMsiHeA3KY8UrMeDPADFMFTvpGkv46qAVKbp8vJ6o1uQyAZRdSE",
  "key18": "jqKZPPqxyEmfvTpPzZo5oQ9u4tFMvJjK44ox1ZHaPXT1jWRAmRoGQbnH2pPrM3GeTC1Qgz2xdJFZXgG6R9pWtE6",
  "key19": "5VUjBawP98hbBNjCcKBtFdTLBPLbJkotP1LmMiyLPqT6kLvUmvqWNMGZHfZ3GAYqUFNGxnJuMSXPEM3qW3DBszeE",
  "key20": "3SYGP1dmWBSeipvPAJcBDnjmXaNTcEe3mpoTYsLSsnTwjdwFJkYeNqc2uaJmrMbk83QVSqGekHWWd2FipakbQ4vn",
  "key21": "d49gTvCJiEmR5Wz3U5J5jvYXKxxWNvWMB6LF7kRGeUTKegmm2qbeZ1wEb85qfd6nPAC9mNNrC9qqNTUcjEnQCPp",
  "key22": "5QqSc7VXfL7BrTgdnx3TLdxcAzMEdMa6PuZxySWRx9zr1kDEcA8F24zJNExmQprbEghByL9MFNSAs1fiqdn5efpZ",
  "key23": "4nzAjFgViVwhvao4nmuwR7hqJhMjW9ac6DVmdBJRgouHVahDhisbJtwLcKHovWsmLbY7FYyaYmQRK5dMMz4hrTmr",
  "key24": "3Ff5zbkerzfLSq7jWYbTgGjoTQcUkdxbiUu4kiTgcLyBTamZVpRGuYSyUdUDR8sZH4MUzWDH7nMLS429DUpA6V1E",
  "key25": "2EnygXvzBD1SVk4EkrfbapBDP7zvRXnDtJQZ6k9wjdnjnEeMv9WZ5Eb53YVSLXZvvdU9YtVoANmfw1rn2LSoKNAJ",
  "key26": "4CGuiiT7QcJhDcreTQJozrRTYEZhFhPq1YKQqpgo1JNjNisbSDBxFuEBaFfURWfqgymycj4MRmzkrhyrRCX2TtEs",
  "key27": "2vavDRWdzKnmxBGhVvDGrcX8egUAUeRatTHRcj3ZjjhrnYETfLVYacsrUfBf84wRHXhssYsSWJA7tLZtxkvQjrSx",
  "key28": "5k4R9foiuun9cCVksXriiVNtU9Gp7K2hNKReixALKYNYHT9iXHxji9bmPyZeaX5MkJYmCGtmEq1hV7136YuVnjKy",
  "key29": "5SQn1g66SdVL6S5yND25CRsL2UW7Jg9y9PZJ2iaD9694gpQmbpmwojXKdLvg7GuzizDta1ajiYDBAzWBJkMEj6dq",
  "key30": "5kyMfnzEUM9CMqaKv12XqPRGPqxsKijiyntKZDRMmKuKKyGnTB5Hi9ZtC9vnNy7hcL5FUjNadKTt5LFX1KA9aq9X",
  "key31": "5bwmdmgARvSABC3hbPPmDteXcPfnFy1CN43HvWq7cNeyXH3EXMXnZuJVWoMSnQ3Acnqa9ZSxGSzrwt871a9kvTt7",
  "key32": "4JptFtHL5MmkAyjS2bt5uTRPUM6eAEBnok2mRtVTwvxMkADQvsgiB6Y3nEEdywp6EhM7rwo7cGuBT1fACxucj1rR",
  "key33": "2w2LmL8yXFQVmh4KKqKtToCMinEBQtfSccZ2hsMgbSL58Mw7BzTuVz5Y5AHhoUBRaso6yVyYNpkhqiqSBSAJtTnk",
  "key34": "2hqeukEEnqb9UemrpqKMeVs1CXGrA7KfytvAgcJUmD64tydoAfAe8dSLy4fwDZy2oMW3qrXzTbjZ3PKmrFjPSXpG",
  "key35": "2nQHxpgTcMsgrq967vQksCyCAKzZkcYrSXMfoYEMynYtytfh9xyyekdmiqYpPUbKja8bm4FDV5UJHK35AB33aqeT",
  "key36": "5EJoyYEpXZ9Pi3KzzQd4eksKofS4XDraMeaQprTp65enbDzPv8uPWLDcZ7prvm6S88MqDbPU1KByt9MtDE9eR1L8",
  "key37": "2eaRxFjEtLXJLvPPDx1DQt336zhSVdTrhVGWDLiAJbTjJp6xBAsK4VGLhs5Fn57Za1vYQnUeLALua73qmKcf79e2",
  "key38": "4nVMcAzjASeYvdMg82jXaGRQTTMbakBFaHsutpM1sZaSJskVv1BKaWJ6u2sFipYy15k1ZpkJGByEpE2VfcPxBnDC",
  "key39": "3B99nMFi9yQ1vSDNyBtsUXKtCiXERMhxtzTzu2gNVjbWSbQSjVRvSxT7AYcoewF827t1rXTcNgc28ztep1Gef3gz",
  "key40": "5s6WApidnbpjecBBcv9aEKtBwMN1ZtrHskvQqVYubP1v3QWMr97ZTLwhQkF11PekCzuzt1VtcSww6JfMJCbbJ6zC",
  "key41": "wR5Bz3KZYsuge58boVVqNJX1HBt1StPK9LPxWX7AdVnf3SnRCymnK4Y6ygywh8N7oeXxPKYRZYBjeH19DdPGKr7",
  "key42": "2hJvg8HEcYfztEt7yrjmwmpDF1kkWLC5jV3SrSZd19WxH3xgj3Ezb58n5e1YpmTFRmJ8MCUuRBDqNMdvvmAqrfHL"
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
