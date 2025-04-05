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
    "4ke4v9ZYeCiezdPQxBzwg8GcgC5hq9Ghe85ScJn8vAAYFqgxzL9gK1HsSHNrZqaK7xbfnfz5JVbbCHBwe81dvJ3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vb9U9N1gFG3D4nd2cBQXuCzhhKM41AbK5tsd6MLX2yBHAhedE85zxJ2Bv9izQsdLPgWb89KqWfjkJetPBUbQjWZ",
  "key1": "4nj7SJmd8ZQEtKeCRzzW3KBBTGybMRQqYX22k9TnqZxgLtuopoRKPTczedG4jDsf7XSUadARffp7JLcekx8AJNPE",
  "key2": "32SCMWrzSC8CkoQh4WZCxCk4sD4QpinYYTpfXYESBgaffo69WpmiTi2zH5hrgKfYJk8HuJdTgXcxwefmsxLdV9MY",
  "key3": "2V1oVLyT9uTes6cD1Feku3sDtEUuVqhrQrNwTHeoxQe2MSxn2nr4JeDnSKgFKpPU6BWLb4TgoMKUac8MydC8CFLw",
  "key4": "4dyax9j3PaxM8qHz1b1B6mb6qLScVQvfGumvtEunHx8nXYQAqCJeHXNnHx9hTyfEgyzxC6FZxm5AigjUMBYzrvdV",
  "key5": "54K3bTWsLYjJ2bkcpXKdX6R2Tedk5tyQ75xqAZpGFBSPo5sHuQv5ng3h3i2PJGHbxcCNsurLRtfkJhH3dn8YjEz7",
  "key6": "5i39gNqDKk7zuhGVLdTFbMw6eQuLZBynyy89QWU1wVoHCXgSU899xQQT8NLPkTzg4FBmtXF4xj6F6DhNuDw8dsVk",
  "key7": "aB9HxFZfKUTruSMJkshR1dhKREoKwUahCqjBg4WxZUZFLUDemsCRnqK2eWvJA9TSdstf4mtSgZJQojY3VD6JEhb",
  "key8": "cEvcct5Rkj9JbbTZeNqQLzpkfumHsA1n8dYxPfRr3RE3o1BaxoBtJLEgSrsm6BDG4nPjozTSAvAFDyZKekcUVDV",
  "key9": "4dYTB96vQ3Z3jphqJW5fiXhC7DWh1L8w8Vf117WWBuQQuJ96GPD7yU59HdoikZcbjoofeH5yDHnTH2S5imxVGKrj",
  "key10": "2QJ6YYaJ9CWADM8WQRUr71EqRH9vboy7XxDrxCr6XAthqMf2iw57dAo2PjN6fix62KfEc8RysZVwWdhFWRKsgfDC",
  "key11": "4YGNBYKtygjfghnLk93bQZBouNY7gfEWFe3qPFxreJGuZU8HTKK2MxTACrNvwh1Efc6ycuXbppJUKdycMVSK5jf4",
  "key12": "RUv2nkJjPhhkVwyqG8LFGAbN6hvZUEMjkAiDtSEvKNi7bY8Th45sqs8xYx7BXrBTvAFqGHTivzVR2YuBmpSmA5Z",
  "key13": "39aMEFsZiSumBqzEYbNTR9MkswfLLUXyAaUJU3joiRyzg7xKSSvdpXPzsDvy9BxMVF1seLXJAmhgewuAJkp4wwNx",
  "key14": "czDqbfvPRioHeYRJ5SFUfybUGoWFzQBjN9yFkztmnSEf4QWyyJVjgcRwdP7yU5nUPeGpfRgUNbbyyaX1YFdEPxx",
  "key15": "3pUr6pG4ku2pR18YXsN7NdKrZJpputL4jxCHH7LKwwYPnKpcJta9Txk5Ki1gQjmfgdNR8C6DM9BrCLcvXaJaSUCa",
  "key16": "2DxAVePkCaVac5ptETRaHrL5jDeBqutTv6WbXRCTCf7ARoorcfjwmpxGdYGefanwfrbtY19ik9bW7xiRjrwkrbkQ",
  "key17": "47zd4RLffxtMSiZXZLXv1yV8GNXASbAGrf2d27A4o5goa7bvqmk1ey4BnJtPeWz3sTdoXsGEMDHscEr8htc2sH6R",
  "key18": "5Y1aUpNLS6WeHFyPRRWk2WTWvjHTaokLNESmDYC6bzfeygwQFqYwf7G1jAz9qdwHakXShepykDSitstkE68ULHAf",
  "key19": "22hSZdXf1WJu2KxtmgsjxVMa1kFoKD71wfgkeUXPGswmqC4YkxKTH5Eqo8Brhmu3XPAswz7Hgp1fxjbkpW32YnXc",
  "key20": "5GQJ7X36zto6E2uJ51h8tp4WqhmVh2jedvust3Jri64xdkzwioGrD3e569BSYtfzeepS1ZWkCpzGXMT9n5iKLWf1",
  "key21": "3cVNk5AfB1PsC8AG4EBRj8wJpaPHr4vwvQZKSgmw7jDrWU4zK6osVXRA4vMsAKDfShiZHBwYGENkDktL7dJFkCEU",
  "key22": "3f59UptWmZPhhsCBzbeRMYJcZuoXArpWuiTBpLWZsxipb9S3d1BFyRBhoYs6CrdFxpnP8R4ZbhHCaQBBxAMC1CDq",
  "key23": "5uHFze8JTD4RgEzqELh2oiBLdENgFdCKWebZeYzQztp9G9vSuUS866GTffqUHGZhRnabczHYTkw1oQBrgw8ZYKBi",
  "key24": "cDp2ezQ51uwA1bQw5APxqvzufog9Wo98tDuXUYjp85TfaRgctjFBzdoh6NxxZ52aQoa7i3gU6E7shgjQh1iXU3B",
  "key25": "4ZvTHaHkcCuYRWgn2Tx7UA6XsBDKvN2wcHUtG3KESm6Y7eqvBqsmo8oVbzFGhAzkPsWeBVHfZofZkDXXbfCpHiij",
  "key26": "3GPddUayHVnuLH6abXabrLSbw3sE2jtcyVgKHxEHbyx8xX9GHEEVzZPozdXZpwJAM3fxhb5F4uDZTJNkysdMvTMc",
  "key27": "31rksNNGBtKv7VEpFX2sppJKZxdXre5f82AdLCNpnjNVHhqJWu5itAzJLSEn9pUL1V16oosUuozaGysdzhkTUpNX",
  "key28": "53mfXZacvhriGJqX9LpHX6LGiwjqcA5NcH2fEZYQ9RCjCTSWTGj9rDHQ9QBgx4beUZzZrUHrXUPpfA773cKTANxz",
  "key29": "64Xkn4jphatvN8SC8JiheDVJFMEBiqAzyiSn2Zq1ZcDh8K26mcUQApipQGzhooJrngifzgA4G7Sc7UUwsX78wpAb",
  "key30": "4mwegYiKgzpsJVbrbmeccZnTjmXxbQnSYFLMxQMeGCLuAuKutcZpyYSoWhYZrtGkxUd63gum5CoShCgg8DnWoUVA",
  "key31": "3iSRWRtG3j8QVTtgKfvn7qxCfeUgVosf618tPvBWAs6ZhPg65fR6xNA3sWoVniYymgtTywWVCFYYGSmss1j3zp8u",
  "key32": "2hojvPfVKbPZjQQ9BiSXKKZ1ZDwuJyXxA6CyG2haapcEvyCSGidp31WW44AqnMSFkwYPC18joHyfHVBoyjrfg6Q3",
  "key33": "3XN5viv1TsiHW8YLgJK7kS3frqfhkk9qcxt85pzp3EXgWA8aaYsrFiRGK59Aq8GiUBJNHPDidky41kbRLC8i2JeX",
  "key34": "4MGqKu9xFyaq3B8UKJpmVxbZH9FSDwmu5vkdYF2wdhJodE3MMn7VZrBPBKYmF6AJSxbHaWVjEWHDGXitenyUEKEG",
  "key35": "4RXYhZa6djjGjqhAWkDSYE3Li1HycwtF1aPi27Rgh3Tjcz1ViEd4SKNhkjQYNhWPtqmgiDtyVABYXfSt7bRLas4A",
  "key36": "pikfNiTGPygtwxXG567Az2TVZ6k9KLLawxXL1NjcsNTiAKijaiYCWrhe2hTnCczYvYobWeHmLFCBDvcNjUD2mYB",
  "key37": "3iBv82SikHmn5gjxWw934uNkGb2WX3oijNE6rNPX4nTcwh9UK4ngLvsQoSKtaq8iHuYYFLY4EaCGQNfsRaKknPrc",
  "key38": "271iUENjrESTwcc3KWwgP34gMUUEYAuPpZotUwgoYNFzg5thZc1wzDwznv6ktTxXbsBSCi6AdUb3ozeaTLiQQ2Yv",
  "key39": "2chAa8zCbHnd6fTPP8dxbAKkhs8giWbp8cgVmGh94i4F4aHfTX3yyPJXCCxgpggcBYpM8Us871EWP5UKnQNTccDx",
  "key40": "3dvmJMJTZNZtmPxyCBY81QWWnNS4sT1JWUT6qn5L2TevMNoPfAz5EMKmU6dv8ER3VvUGsTntrcawAD6qfUp8P9ME",
  "key41": "tB1xurHbfvT9Jd92EgnDVg1p7UKy2Vx64KPM2g5P27gRqwSEWbVuxEXpmLN8q3eugrtkTVgDncgigtVBSLQNhLr",
  "key42": "MpNMiECTgauax5VTWv3Vut3nwktpGvCKcpe5BHZESuNuPEYcCDbguVzeaB9EiqtrfEpbXPgJRNsg1dDqqpQpUb4",
  "key43": "31PuTwv7hZzZRxx1PAKyoXxxrNKRY9CHABkowL44JJnkbKTyQG6zEtf7NWpfjU2sNzhDWNEn8aVQpdL4TEn9yheG",
  "key44": "4CDz3DjLvdf7LcP8inxrudPxcGqoZpC1fGU67uBTNmp6UwU8aT3mHMb9xdqGW1iJdyhrBRRXfgbej5toUmUDds8a",
  "key45": "2cVrZqvSHSdKp79UT2C1vVcJvN9thTLZzDiYJ2bzTz7CVvi5xX4EndcapA16JZSccPu5BGoBwMsvnz3xVnt38t1E",
  "key46": "4CCidv38sb55SnMwMpBxsuQgk9Q2tpKViwqyxw8jkUrm6fu3z7J3CUatApzLyXv8BhaLqQfovGYSLBgBZe4zyZd8",
  "key47": "3BotP6EunXgnYFforbqtvoExqhwTtKtKjm1hRgnXU1687Gj9A93SVut1JiTxD9WoMbpPhW8FZ7tW81Mph2iDSuFo"
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
