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
    "43R7Z3Q4B6onJFQLPYzj1nJ98odVSwMeQrrwfY2CqqW7xpzVvfEVvjQebGv9ajtV6ru7QZoQwxHHLut6XDUffKwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACyWj1dPapu4qyvmKfrLNN8Mi6qzuf1ttVTCKc7P9mJNKazEzWvZ1vLWEkXdeeuUC6Ng3kLDwqSACY7mzTnDu84",
  "key1": "3hGBwrUpEEvuQ8wDqGARE668LDye7iRjETU5c6BbcQbvgktAngt4CAsNdkRo1s4Xcv9mWgpcoQ3MN7jd17B77Hrv",
  "key2": "38xHHSnzBTpHvM44CLPyw92rmfuqv3YtoJyZajU5CMjeKG44ZoANJ8NwMiCHN4MooGaBjmLNLQeAtLr1VSSiqDoQ",
  "key3": "4ArGWAnDXjdbxRReJ4sbvd8NJGrEs1Z8LcLGw12dwRJCmFdiBtpKcwpvTSyfH33dnVtMXdnhkqBQF5bQn66mHaB8",
  "key4": "4eoeD91S7sjWTbRsfL2t6qGQFgnsjTyd6FJWTMwHCnY8dcc1HwkpoYPNjkcCSQLd9JP58SpPz6ccrhw2Teyr2nPr",
  "key5": "2LhbkbzJWVyhV9RGq2WGxpHde1NubnbKKyNEroPETxVzfeoLFX9QdbdhroT4b2brpYoGc9BwpYYPiqc73UmeKYLz",
  "key6": "2Ry9vfxGBgR5Y5F34aXnxSNeeL7Kxtvv3fFkT4aMFXvpR9BZaFHskGvxW2ZBABoNMZEbV4knmVAaHDyhmXN6sPuR",
  "key7": "pKUoEzwRycsvdcELWgmyngMHzpFqRqPWy4zi6rhYwQxWVgGcwUe5V2DA3sFhoz8ZP4Qn9Qwfug5zcMFEpYiTQ8g",
  "key8": "2HT5ZCWeJWGHFRFFN9pakYSFWN3Dm8xMUVdxdwfT1PvSjy1gEvwGcSNxbncUp9mXwo6odFAYHdzzerWR3ERbdEw4",
  "key9": "4ihWg7vRoH9jX8UWrGhtjNzpj4KzrscLhquf4itxS14VH3mYjGq3h71n4QcRLmtN1rR2CfCbbbcPD2wfqMSwMJ2P",
  "key10": "4AHkhCjZw8FNCuTtpHgLqGAUiKHMSbuZZPBqKLM14BzcUvUzSvq2nsutxm1K3indazG3i7fkoqoN6iEiWbRdTcBv",
  "key11": "22ZtUPGgPxz24CsWGVys7Ltneih7smJLK7HttGGK2vbgYJYaLBdztPXCKkYD2wig12VhiiNiirNVW7Ty6Hj2DsYp",
  "key12": "38ywGdKV6a8rYkSUWPVJb64196BTNxB8Zi1mv6Cbp8YzPRXYKy8neWm3znGPobhcLfX9mWhHM38qMU7DTtdEWe42",
  "key13": "2J4hGcgRwZY8euDdw4C7Lo1qWfuHPtPJXPtRmfXzBoQ7ZD5EV5CXvV39fUBPG9n93X39kxTkAyPtA2HcmoyomxR7",
  "key14": "3rjaHGg6bWq9LiivJg4K9UD8xxZrHk2S15EA84f4yYTXiqNYM79kXZRbUFyrLdYkNnQSrRyiG4msFwARBssQcKgd",
  "key15": "2hbp3XAd8ja48g3z2SC2EBUvCLDSXHVDNjLcckbHTA43pvtprDm2vCnKMgAUtKrekPiDPkFxwjy8hufsScTDQ6eh",
  "key16": "uiSEmdoz8fyufSeex2EfU4f4YfhHJdYk5edcTQqutMTXeJ4RofEmi3hHVpQJNgDzUXZhwBnM9QN3NtsTgdp24Kr",
  "key17": "2P1jMhYdpfZ2Tws52giayETJwPJQVpJqE7NvBYQ92NfxfyciFkYcCpdRLFLNTZ7Zzxnrop3UteJ75rKZSZVVTeEc",
  "key18": "3m8mYRnRutARv5insp9FE318TR9acsbgrpf75JW72ExT4VTkdTcdKT2GsTd5jDMP7qUdmModSjKjjehziNdQUBUJ",
  "key19": "3jgcFsSUE83ry8Jj2XeZbb7bwdTG83713C5ckvTDsdXx4GjH3swX2jLoxXiwyoiL9zAPxeY52CmUNShALkL3eQfV",
  "key20": "2XcZMbQDSgvwFJqVSB1MCgk5t6WNUXM66P3ePkQm5Mrz8Cekh9G5ZroTAG9tGPaLDRpYToGnxWrHSSk8ARjt4bs4",
  "key21": "55qYNyJe4MuJLtN6jvjPeyWskUeoKfFhAPYtWq39rKn71ArXr9SRa93fHqsZmZjCzkXUcsfiwcNysGei7h4J3vaZ",
  "key22": "4RuXas6N9v4bRV9DRvQgjsgu5P6RfoThZPWRYoGxRWS5Yi4ZMgak144t6aHbm8aAiNBoXsr3CVLP91UGRTYAKM9L",
  "key23": "W9SbGJpwgPVtmrQtWZHqnMF8m8dUMH7WtLGpyTSGj7du7K7qVN8s9hGtYiytU2r4JK8WpE1L1RoLy2Tmm1XuoUq",
  "key24": "3RpvhFvHsJNb5W4XM49WGKpEg45vrS5PaMJZkR6BCw5oZzfAB4Wb4J8vQCcQX3dizd3rxNNQNy8nR6y8vQYraZHd",
  "key25": "4NTQN5pkRvrgqGNVPjoMQvF9J1Kmtf3gLiFUcah8Y9x5RZiYRgxcY8tNoR5nmHzKFEVQZn2weBskcN7tSBy6iePF",
  "key26": "3R5vSMo8EQE86NFpiUVnWnbPH6Y82iVwYxfz1W89go4wtC6FdjTMNPhV8TMHqhp4Z5iTHLs7vbMVCNRpNe5jwAKe",
  "key27": "35mS9xgaQfvdmxDGT1JbmTb4FZxKQU7Dd9ez7jNotjuZLmDQacCsoGMG7AtVLScRwKsqGQ6pTw1FmhVdNeJYvMCv",
  "key28": "3p5ViU8iQMGJAr1rr5oLK7mJD9aJWqGz57p2Y91RaonoRwmVHK4PaQjN6fWqpGsT5KbatmcHweVj7mkTdhDta4tT",
  "key29": "4cXsB16znFaCyTaVLwQVPmBbkVLFAtWn93iQFyZ9r7cKyErrHjBj1vQx56bfPB1wLtxcfaog9LJq7uZyS5ZuqbVN",
  "key30": "4DHbgCis7dDwKchqiFJUxXVAQu3yGLvqABAqSKGqVf1tUPY71nVdpfpJdA8683FjJ9GgCq49MQ6KmvEuULkuCYKY",
  "key31": "4m9X3M6uLWUb3u71EFkK1TaWkMsaaF7NdUxAUjSWQBJJjXHdsxdFQb8dUbYtSiRZq2VytEY7pWzjAHAR1oULBvUM",
  "key32": "3qc4n2YqUpyBa3MTRZVdKykT6k7BzYj3DEy46mXEJuW7MNFhdiYRKFvggGCiRKLTrkY2oGthDBarQi1vxbrc1336",
  "key33": "3CCd9Ff895BYu6uR6C1xVH6NqBPn5FM2FgvtGPo5gUzAxnbTcMzk22w8AyFSt5oTCXdLrDpMThhWaRHPUeJCw6T8",
  "key34": "2fDNMGEadT5KnRXjrJXmNTWy3i3ZDZYCRg84X5pb14ezzk8B66deek4WK89NCv3EPCb6xgH9Qd4zLNm7z5ZFrnmm",
  "key35": "45xvfmzqBS3GofnGLm7pk8H9Wyf3USovMgSiKhqfsGNyFvebLV9oWYRu9pAi6JYtJYoDMbfihuB9464rkEJf1bko",
  "key36": "2R5nscP7Hti6r8bsfPWjc2HYk7P6aYZUn7Ca6rqhNqVvV3m8bfQtVZd9jNqj4hgshQY6vPfpT3tF5PuUz8mvaQbW",
  "key37": "5oC3uUnNqh4hkd4hvQprL7h8umWLYGZgRqNzZxsyHzsgMbAKjBNC8FjWmqMmdS41QL5Vmrj2L8bKpeXNghHzm5MJ",
  "key38": "3apekt5nXGhr8c5ULuPAt29Sdp1126653W6xCdCJdKhqUj9cZgLpFtod5TXfkG8DQwFpfY7saRamHVAvVbkkA7us",
  "key39": "2zmdfvGqbn1HiFG8Up6UXBT8WYkjsDLPKx7P3dgFMNgSwXDfxbQYpdf2Q7y6Pe8L7Kx89jheaXyP4ibz2BEjd7eB",
  "key40": "2CV3zSCTyKLmGwNf4RUFhKmPUnwUSp6MGGb7Uk9HYXMs8n11GEDEfk5r2mWUifzMgdZWrRcykgAWvZvDbp9kKDnT",
  "key41": "33GAS3DK2B7QMbXAhGPFeHBteGd5octUfh1n3wc3yMc3fi1AeiD9qkdMrBMfSLHAQohV1Ego2g1dQFGFwnRNEzkp",
  "key42": "2wQnZwAGDLRaTby9Yfw9bDwDS2MNcMWiKJ55TkihW1o4hzGe54qXhetVPjev2VNF6bG3P6pQMhVrJ1KsTraXi2KD",
  "key43": "3TBDfRAQBAFTnuQPjTVojJUr5F2WsSskhzE3xSwgQAbJQ3sZoRRNXMofJM9uV2q3hJE1m7SUqHKeN9KfyZ4qxEjU",
  "key44": "5RVduxRqipiASKqwFerj58x29uNtTcvMd1jDBvjmcYwa2r9SfiFkUdT6XYNNmMTXt5ik9hd55yx4GMKaw7sDzLWH"
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
