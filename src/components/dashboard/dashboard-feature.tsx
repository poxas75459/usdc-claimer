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
    "2oEXGuRfYjktvwxbfAyUFhEo89gDPde46tWRB7JDVzkCfBFNm46xiC28qYhTXFqb8FHMaYcxRbgM9MDDmKAB2Sx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZN3fKqus5aTXocSshQFfoU8uZpPcnGAQmVTJ5yMA6NwxKkkixRVSZujzTrg1N4amHqPcPm6GSPfffvc75vLuGHv",
  "key1": "4fFkNqYGHXQHQCK27XtuzsJxRhvhu9oAxYUzmLoyp3Xmv6V39YH4ZDrrSjfJxDAMwc4y2kjTBDF69tcWRsdu9KXb",
  "key2": "3upMzKJ9VSMqy5U9k9JY2fJ39o2CBHPFNiXcvYT16VBbz7hWcZSopb1XzmQeH27cMGepWWdhm3fmMpRC6k1gBBfw",
  "key3": "tSvj5N5fPQthAD7yokE1KvRpsPnQzeAQbPUQ9PhSD15xbsqPgbRwre7h4dxAxc65bMtj38qXm4y6nBM3CTUW2eJ",
  "key4": "3sC15nttVRnuCDKXmug879aRfNXrM1yKNxvkSt9Knpp2gAbWwmq9BUhkny3xYFCtX6mzx8a9UBhaqPiR6DaCp1Ak",
  "key5": "5uX1Zb23iYXGXtWYNc8GYMZ6B2gDQqdZEQjMRiaTsM8F3zCjpcU9CRqaci1RFzB5Ezn8vxUqcwsTjs88RhTsS3s3",
  "key6": "3284tPiJwJRbJdE7hxisjfyyBALJSy9b1DRNWzdmkcRcyzpDYfJK3kgVdcY6S5XKSmnebA6iaoXnmDtNS8E5aBxj",
  "key7": "4yPLGbqbL64fqGSHP154whvp2kF81vu5wF1kZzTQ3jqHh6us3sEMY6DTu1sxF1cLypThYNs5dKcAHVF8mZLrZDbX",
  "key8": "5qm6DBgJkXoufBetBvC1F5fAK9kQdqjm4DrNn7oqqD562s6y1CCEfwEg2kdHNJ9T7sMJd3PNipSGwmvnkBbWsJxR",
  "key9": "2hi2Z6LsaEzY2ShMMHm8u3Fsqd8uroxe3vHcrMBDGKEVjtQKP44ov9DjzYUfk3gtaN2ocrw1VYgJ9XunSAvkQpb4",
  "key10": "64Fskwhb5Q986HXEwzNz7Vvsgy7tYp69XrMxkn1Z4pGgYrBujcF6LR8FXvgdkcshYKCe7eeQXe8dJZmY9iQxK4hu",
  "key11": "2YwYFuGvK7dgvZMuybUc6wcyncLNSrm5oh32bFqMKRxgWLyxAqdoVAVvZkxZQQe5oVEum62PXmWmCGRFCwia41WQ",
  "key12": "4dbtu1xcmeQpt9yWsm2P4rPgCeXwgV52Ede6tgucYH3y8PH56wxahUzbivGXgfCUzGPEpoKRV1UL6GshQFufeUV7",
  "key13": "MJCwYp3gyp1zsR9toeNxuESfnMZtpDmL7r5uYghMmZMJi1wdtEJZ1abJ36SVRXwzt14adAgRouFBMVEkstQTMPv",
  "key14": "BE55BqSNzvYVrtpxzZvDd2DYqY5oxpYu71kve2L2D9id42TrVX2SHuSgmbZF1ZRN9H5KAZ2UQEKWhoSyVVEMpeU",
  "key15": "4TCS9F9VappBL7ANuawTvMivT4TiimkHCrsoerK14V8JMz6e9CWSq4wyJKL2qMNjfQk1sDh1Rgxdfr4KLPzcqXST",
  "key16": "2pj5vLQrzogL28fTHD3gEY2J9Mpq16B5PvWfnDhdG1Y2gqsqHu2Aqb9JGi1tKr7wCSyQkeyaLU4WDMPB2wRtkkvs",
  "key17": "2s8uVMTvfvqbhbTpiJLQytdc1ATGTKsAtuVR15pbRf6U3zBEH3LwDfgft3S8YFnKXGU4ksRH4CsmW1vQgs1pUy6o",
  "key18": "3SZtYcc2xBQd77eo7qChJozeJXuBPmBEmRvo3mUm1gyfFUtwbS3SCBPqXnY5BKQTpZbKpdDtDYUPjBLKV635zKG3",
  "key19": "2fbauhMxoG7iwc4pBzB2GNjMPaumsbwHCbUktpoBxPy9dDCY8J5swQfbh8WdDgy3cQdthMxhzkQxfpLKkfGexFt9",
  "key20": "3bj5EdHPDS9S8m5xEjYiJLCitsv4rnbY9erN6z4jMsAQi7iEby3nSwg8zdghEedxzJ1ePmrwcx7fNU5zm7DJh7PA",
  "key21": "2hjPeqWmmT6kHhgkzbpJzXAeVuU9FkFCnLyiGKRdkjuWcBeE86BE7h4LA3Vd6kVu2WjQ1NNpEwvyurM4bCBamTLa",
  "key22": "3H8VXHrr8xbdRKEUBkxUu2BJfByk8MZpw3sCZT3in1eKutXpRTptqVHAq5UHjz7MQWpiaBaAp8nR18NtyftBybq2",
  "key23": "3QXCV4qtaMjWJYWVsSgpLWrC5HsjVZayQbPzXcj7mntfNGyTir8EgPSaDdA27oL3LsfGh2JJ57wPJ7pRYFw3aCjc",
  "key24": "45ed7WFpsoF4aY2LcZBBGZztSDmxJ3oiG9DhJr5DE7LWTAoU1qCJw7AsQJ2chqEx6ZVTXRUP3PVwLQ9Xd9dGYHxn",
  "key25": "3fFxvtSsfj3gmmnoY6Pzm2Em2NiBLHShe8bNof7BSEBgBSK8aeWaBg16eN9i3WrbSeJzvKfAH3AA6MM2ZwUpM4j6",
  "key26": "3JLcqvjyXoWuTR8gNQ5cQjYXU2tqVL2xuDZUJKD1uHrajba5gvTNUumE7bd3gnwRBtF8YBzLewBwrQMYQz8xJ47v",
  "key27": "5mXLWVVqYiebnNaZKTtes6xtkcFEs3xP81KELnZessVSxcNrBSH4nv2cATekLBMgj5PxbL2s3WijaPhfCzLYBhDS",
  "key28": "5a9hhWqGgbU5DyfepPAcSzbh1UYExatvuYnoRvT5azqbob7wqAoM4MFy4ahPLXdtAyCZJKDTfB1dFzuLr3Ztvf1b",
  "key29": "ufQFiMwETWwhGkofEfpSyGisPptQP1GqpHJUBen2bZVjvRpAVB56gbg3Lzg4HcaAKS7MGYQArEaNKtpEee74d3E",
  "key30": "3LesUsiHBpNsp7xXc6cwfBEMQ5pfFqdBaRsoZgh5FV8eDZjyUEQYRs4rBh2vKWYhBVowfVV198kVGYLPuRi5RobS",
  "key31": "3D8aR8nKKiNEu673C7etoFHjynDm3Yu1yQEYcms3R9bqQ67ewMvBYCshqC2Ykqt8Qe7okyuyLqYNgy5oQFpd5seB",
  "key32": "5X9i9vBtu4Paa1HdyoXa7Tme8x1XyDmd9xG4rw5B8236Q16sp3ACdxmsQRRT8qMKTSdWnSB8NXEtUHssUksU8Phr",
  "key33": "2ikFcQMkojAwypWSYNjMAqH16Um387LxxYKV6QyBYsbUhCTW2p48MQHbq6aNddrHnJpKYngRYySceZwc34AfyVVL",
  "key34": "QUWzoqWdYhGJDt6b6avHAXqVLBHh6ctfQG8QaZQsT5CNNbnQ4PbTirgEfsXEdw919hftCLG9f5czupBUPM6CDZU",
  "key35": "4yFTxR8rXaUSv1thRwbuLvNrFJf8GtgBVoCMad6a3hBxnyzfJV5ztzQk9JCo3z5N3gnNS1GXmz6gM4jTLaUQX7DZ",
  "key36": "3UmsYxLhDXw8tW3p9gEo7bPt5Kb8pJY9mypnuFawTrvmhjXvhzJTbrvqFkL1Gz6r6BvAYHzERqDCMvVKCrADM4hu",
  "key37": "3zLEc48ztB42qa2Qbx2rvGDGigeXpE63ku3rFafKf2nnmiMShWJfrhQKzfiSzzMUcXzY27X6pEZ2GanvWtYjZ27p",
  "key38": "3zv2FGTddkDJwQZXQCQ67j3eUm4ZgtQJbbMgescxxp63sfkAMvdwZXZSexD2e6djx2scHizLthAnWe3zYDc7MCDu",
  "key39": "2eGyccUScKCVJL4oMecWmZywV6GPDSsbiDDEwsW2a1bGfQAvezFSJxzhrsuqjZotHe184wnqcHWvoGmyKxVrGf2F",
  "key40": "5JS3U1Cxk4xAhVPFUS7DyvoS7c5e1j2F27ja5ToihzfWXE3iWszu1RqYVwdbHumZzyVLjMvXUZ4dn9nXqvc1AfCr",
  "key41": "5L7Yj72U5wmJDbuRiCsBYNpG49fN9f9r7AbMHbtt2hzbdfNqaQJRsyWVUyhu8Kw6RfHsTmSavTNkQdd3qN9S5Gfh",
  "key42": "39tzLHz6ZdsimvJokmBtbZVdS8MLgbGhrk348wEQ7pVKHj5EURv17xgQG1YriQrTMywbF7S3apVY6nh8jdktRBDh",
  "key43": "5y9JXwD4sFJ89PBC1xz7vMDTgdHYyQyPKVdgsMQysmV1uiPRHYyusvNJ22V8FauKKhv9pPnnZzopvvPuEZPdiNGJ",
  "key44": "4bHomo2XpQrTwznH9aJDpPJvVhuxNwgcab8PwXXkLJEncTESvU2D5zVvjGNLqjsxsjWarwtQzp5n47mx4hGTjw8Q",
  "key45": "3stjVz8ZmdfUU1KWZ5bKmj2W9eLH46d45jAbUx4SRkmrS5wBjjGm9c8L4YE2MAb6kFRvB4W4joKLEWRFYs1pFgey",
  "key46": "43wZcQGBQkbhR44yGgxgrGLxW98H3ojF53vFpPf2bUGN4YU3MDWgtBunXsEwciAgAvtv765ohDv7kBcRKkdNtJCE",
  "key47": "fnkHWwyhqwaeutxRRQ4euo6xTJsjTnmJC9bsXRXSctoLLET7nGhhY4nBRshvsaHowFuuSpZGWsMx29TuAsz9jpj"
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
