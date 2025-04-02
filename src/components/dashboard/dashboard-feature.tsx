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
    "4SkMkYq51uGxkwQw4JSE22LPBKm3vW9mMeEe4J3CxPPv9KbisuGY8uViYHJefgdvmy9eNDLkR5tufRMDVH2HQkEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBGDtyC3XoWUuKAgnkvzwk3MYMq5Rkm4YDL4FHHR5qoBEcgtWYzmfa794PvvoH7kqBCYJgF3riUdMqHTiUteDfM",
  "key1": "3ZnYcKbWR5KFZkZhrYuj128XKaZnP87854e1c7chU851X9dYrGMqte4Z8qHS1mW6AaTQQWjBSDxnNNMG3f5nnkJ1",
  "key2": "4PLwjMRHk9261HEZen2BrYE3GmmSo2wgqMoXMZhvBuGErUdGgZQ3UTLUYuZFK9hKwYdFJn2BMmLpqBSFpMxVxe2w",
  "key3": "xPoFzCJAeBBjhB5iMNDKLBKtdJqLeYmdNPez97EQeH2ti1uGsWT8ox7WdYARQyry5yU6FX1czrKU6JyhLzjS4vn",
  "key4": "4wDthc9BbWSLSg6FEZVaWtuK1EfYhqHFVGoky7xXWFaFnk8LvtHYwN2zS19QwCWxFuk8dUpwT6JxqzXtWz13QEz7",
  "key5": "5RSFCEoq9EcrWtTSFu7T9GGGLLPkPRFBx1RiGBzo5gsfuaHWVwQjE8YDEqwMAdBrTJ2HE9i4jCgPUQGjdAFquqXg",
  "key6": "5H3YkBGhrjpxuZWHoZ5rGLqiqtJNUjU9AduGUQqQtypao2m94XfcYQerhHpRBEUxLEZXe14LY9WYCxkn3NiyHEFL",
  "key7": "2dsmFwU9wM3kHMZRVhsecxD9WJZq1yeGjkVdsWJweatviZvffzjeGMMMtbxr1Uf67NzF2NPB5ZPwR9kVQsBVUiuv",
  "key8": "MixrGDaabGXRH8BHhbL6wHtCDmhopfdng5fGPbKBSL6dsKTo3RcCGuwVqw21xtQr4NvkmCFVgYNmiKPY6cxyu2M",
  "key9": "5LfxjfKyUvTcssHg5wkpgaq4eEbMRuCR5WadMTNnWM1HhQ3d5FTAXoG3FjAnuD3SGGHxzTgZjiVE2HuSoBZub1yQ",
  "key10": "5RkVtXJtbNTUFD9YDNekMdX9CK4JGMDBmGfmtAWW3bAE1dUUpS7iseQE7euWBQ5edvg8PvQLwj1WU6pwqaPMDU5V",
  "key11": "5LoNxNngq339RGh3xkRcfqqa3j5cetWX7hv21QBXU1QNKB89G2AS444auCfiyGBRuZ6Qh582hKfq2yLZ9PFJU434",
  "key12": "4wbFkJp4y7ficqLw6dDz4c58fMDQLkvRedYUCwkjVjoe4A4eH1YkmmeedN5YNeEH55a7Pcy8MRA12JkfgcPvEYHp",
  "key13": "23w7AxxFQyc3i4xDK1uge4i4efk4GbjHfri1Q42FkiCADdBjPCBHLua4RTBNZMnK5YRMCPEKUwY2ZfLQRy7db6p9",
  "key14": "5hauWM6QXaMbzetpydtnywoEQeUjELfHdMxqALJn14r5AXxojeCv68Hb54AzBtrb23Ew9hio9FUCbXtKASa8u92D",
  "key15": "2bWKapU4itU5DuSPWFdhUXpU1Js3bYhjXFzTnJS1RQxkaJEA4HHMVP23QMnHK5dnoXKdfyfMTEDUXufuux7DBJFw",
  "key16": "3vpB6b1QemDYyzPY1ACRovqLbRTebNQxt3owVFPjxESt4vJBL7mNqXVba7pnNZbXENh2y3uXrNmj4Xg1nnNZ2Fv4",
  "key17": "2xboczqJy9atgY4j3UqtX96MXg7uBwwJxjMPSL3gpUz9CzR29WM2kVLerpmN38u23GwcD7MUCKCRQLCuSDeFmhcB",
  "key18": "tMZ42pJcnQDfwjeW6bw1QqB5m6ZyKTyq8MbcA7p6pajJDvkTzoNpyYwqXwZZVi4qxBAt4U7ZvZLJc6MNtzgDxMG",
  "key19": "5cqjLhYv4WMqiSYdrE7MN4Nc7H2fGBnpVqBngfMunLfxC82KN3mmEZ5jyL7iGHRryuMqtkNdCv2GvMLce9XYY619",
  "key20": "5amXz2z9aen2yTm1ur3CHLZUz38RBEUSvzyzVVvBNecm6KTFpgjWX3qqw8NXRRJv875wHJq46QFhCmcopdcXd4GH",
  "key21": "4kWX8zsaSApieNxhFNFAi8R1qytV6HJ7g752C6sFzsmwqG4zk4DXXhHAUvLHho8HEDzmSsjZBmbZ9C9MyLHNYRoK",
  "key22": "4ywfhEUEJroKZ9E3ZGmcSMwHtz7miUX5AGxGjRa4w7ypDVVTzQdUFKeExEcvoDzud88PAMp8Fe1R5u5W3TJ8UJDs",
  "key23": "4yuJDWcEYLa2K6L3asBvSJKZtWfMWMuqCenB8eJrGNVH1GonQNEqsLWBFjPDqvND17ji1EUg6V3sx7wujSwEw7pF",
  "key24": "51qKM1uFujk5ECLUcBU8h4Yy6dJ8PApNLgB1Q6JqapfmVS7s2Uusq5972yDqhLTYHSeYZBzfwUkHZ6xbKfSYx458",
  "key25": "2pY83HRpB4poYHY6zY8cJr3QV66itrnHs469kWdTdDjiVeqPzDKyi68ScrY3cLt6WmzV3fo3SLVQ4yx7PdMSnURh",
  "key26": "5d8dSZ3BgoSKdu48QQkf5c6hN9pHG73BKYMxwYe1HBHmAaspBjuCa9SqF2aqtWqG6gnz1gPbxGDVCTKnPiM9mAg7",
  "key27": "3Kk9m3gMYNq6r9JDCn1Mpq7dG7P3BFZtY9KFMT1VkvvMCXRwGe4HcVF4A7xeky7vfEbAe65tv98JySYC12Bu37ip",
  "key28": "4ojuD2aKE6RchYwD6o4BuunVTJqjBmHdEutPx21WX9xtcry8GA2coEyazAUHpt4NWoaFZRHuwLpwsEFk5nLBgnT",
  "key29": "4zFaqEEXaVUdGBViZTLASkrmsz1wjwm6SEDM39tPmbHNRcqLjkADQAmirRXWRFBSCPbtRVNDBGCq6kh5awZAco6t",
  "key30": "4Ysz3Ekh4zJFFJMwGg2CGNxkiu8AGYEwW6unQnCxJp3WtgdKqEf6uMGG63tS2ZdfxFMCYH58Du7iDrGie7B7JCFo",
  "key31": "2z5cW2pBqXf31aMuNh721HmUqtTfCaGXKyvF612WjToGmZueYS88D777agEvqTz9WUhGTYmsiZwCFz6h2UvZGiY8",
  "key32": "2ZLdQyEH6B77v1c7uyQNvL6cvTVEERkE4SrDbMH2wPrur3G3y58MupWZwi9Yaq7pr7UrC8eRZaHGi8qGRTs3jVBW",
  "key33": "42q5i1T3czLWJBMZyX2mXoxRSA7rDrzjd46F9V19dxMQFHfZmY6vqRDSMpyQ5P2poh1mQnALWcYtW4C6fzAju3PK",
  "key34": "373nYxve5PZ8i6myV2L129M8TSZAbcnCw4W6ngMdA4BcTpnvvqLvtwPjZ1cSkLzZGyc6RmACNyVe7tdgRrhHRihB",
  "key35": "4tjsgcMjcJ5pBvc4nKkZMHMveMHKTEXpfQGnFooJv4PCBHviwu53pDiN55CjhkYoM6SDkrDsWYkXfXC3eD31eQag",
  "key36": "3S7D24hVtpLH1UAQYkMweBETMY8VoVcd8AbUQU2Eoes6rNqQFUeLxx8sAHso3gQZfvP2ZHkGva7PwDA42AgLBsbm",
  "key37": "5sr6XSJEv2dgYtx8gQZnN9bXNAqQSUhzSgJHMuTZP6j2AQ6g6v6Adb4NJvUT22aWAtgbB77TceVra449L3m8Rfr2",
  "key38": "4KnsFVQvmStQrYPY1hGi8Ym1e2c2o9cLFaLMEGx1ZXZVkCgt3LQXc42pvi5bfDSNA1PrSwSP1w19NimbmvQXC2JQ",
  "key39": "2AwoHTEG2X1ucagLNb5M41T624MQNh7MqmEg9NGkKb6L5cCPuTNKqRUmt928DnztgDgVWC23iCfxNt4BCsZGT7D2",
  "key40": "5c8uL2ykA2ycMtVhcgo9dPZCLqncapVpNQPrvJaYznZuTmqkeWH6bmGXiVYJTPXE75rP424bpCVzqrJbfdRsxezF",
  "key41": "p5ysVLqpMs9gWaKdL2EzXNPvanrMiPXTrpeHrAtmZANXAtRUgoZ7fKZGAvG19YwJwvVDajvNofhSDCDR4h8eSYu",
  "key42": "122fTtSc5uTuVWn9aBkFTmLCEkwQ3AdWcoUnRtAxZvKkJ1uSevjBo9GnevJ2gGPDKDQPQCvobTGe1Jgv1iqQoXnR",
  "key43": "M7tQZqv2PJ1xdoSxpZ5W52waepLfZ6Sv3JzHRWgPvxdHoHfvxnSmBvoRKjsTyLQbvdkvf7LRzvaF34Kv8tgYKfX",
  "key44": "2C1PFwN3V44Xmv256oqqUjrXRsHbWRpRHtnXHL1ZDHzqpTY3yCWxMojtH1qn5YqwspkanwSXEEMw51NbmbiVaxpv"
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
