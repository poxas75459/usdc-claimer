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
    "3YAuGuL92aSXEeEuSexSYVxYSjwC6K2HTwNhfyHoMXjrecPKgx8xsBM4kovN3VneuQfsm5YD2ze2699rvdCZFoB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zd8GrHxxZ9UHXu6gsnSz8EMsxcJGPWEZqVA8jZrRM5icL5Ct3A9wHazzY9VkL8UDKguSfEpmj9HaNUmeDR8V2mp",
  "key1": "DbGtsZALYgh9VoDdfooysqyTkRN94Xmvf7AiDrwSvmpMYXiNYvv2TPW8oSmhz48froFyyoRBqifHeo7xVpKFhnM",
  "key2": "5c7sY8jJj8S7YZHjwzK8zPccwYz9XX4KtPY5fFYVfgw974iG3N99mKmTzwqk1nBU86zBSyf2dzG3C38pPrHoFm8W",
  "key3": "quo2XSvCRwk5uaY4fgVyVnbkGzRnJfkWAhzcjeo81MGZSX1g3sF6476fBzQSNu8M6JRtkXfQxyFq2xyZ9wAzxvQ",
  "key4": "335w1Vto3VGT3reiCgtXJcU4bSJgqLvZj16azGcb8pGbjHDwaweMJ9571ue7q27HGPrfS1Uxdovx3tm3VSbqboxT",
  "key5": "3iUsnhfdFW7yGQWRDTyfuoAqNhDmT8CZ3pQGssqGQETEp7xyZc67Hw7VEYxtM6r1X6jVidQrXyJRbjcFkzq7gzxq",
  "key6": "kBkXSVXb8pxcSyBzcppx2KUph6efug3htfvaauvB5WZki5Pjk54CFbKbpmqc76bga6N8BEjH5nMy3RhG8JnDRp8",
  "key7": "41aLCbbHRpCWeeBeqzyYwQaGibG7DT3xeDSrY1HGH5yJjsAG9RRzSCfkAaLEN2NctWAu6vqVwV26uGnYvSQf6AWV",
  "key8": "4pH7QS2Pm1d9AyQp6djmnt7fYRX3Bi67HJ3MsQx3wPm4v88Lh38w8xTWd581QRDAqrE7a2tLpzUHre32pBJQDhpS",
  "key9": "5d17cNgNjzzbDcrP9rpL2mPkyTj2feHm6rCEtyX6Zy8X3pqAPXSzw35YwAVZy6aixwYQCe2ZCZxR7KsBP7pYWjey",
  "key10": "KAkFpcuB4NBg13xyMtr665sFDDYdYMDCMsopJyavmfh4KB5D8p6eF2JFieko9sf87eoryiVKwcgn2fNTUisqaDf",
  "key11": "3nNbPT4jcvzcMTgSzBPSC9tRQ8bvaGiZtc8j6KgHuwmZtT1rVmyPLE12ANLeVsH6SmA3a9SJwcdRRiw84Sjm7Ls6",
  "key12": "S4YhVQCn1Bo5Mdj6Ez6axxaP4qa5KSLxeUaQJq4erQTsxPXmQYf8CGTcWWmjWBJJr8jgYWw9gWJAHh2m68TKmon",
  "key13": "2GFSgeapsKfZaemWpAB3wDMYp1Bm2mpwkGYCa2wbeXYvSroV2wkSJqAvAU5uVRtfNF2Kk2NjXP6FhLCizkS5bYUD",
  "key14": "3nysBjNBLc92sCbknc94VPzhdj8zNvq2YCQqd59yYAZsFENNUmZJzU9cenSFXdsz9qEEZu8mGkzc6tEbrArXdmY6",
  "key15": "2HxNU6cX43Yy9AnYzHyYasdqDngeJ7BARpJs68ERrbqvk6u1e93XLcn2JDhRXwpswUmfgrm87Dui1ntQ7JWHEZxu",
  "key16": "2XRPV9TiouwNy2LcfAxUkWHqwoehu4mdXjiiravimC6QyPZ8F81f3sDbHGZNxuspH2NtrDwk7Jv33PvKYAfqydS",
  "key17": "3RNBYwGMG6CK6s3XiK3EpfMJ7npoZZgJoYDLhpVgpkCbagLee3UDx1XqFBQ94f4G4MuyR3xSkQafv7vhattFrg8X",
  "key18": "1gz15noMcGc6S2acoabXYfLEJHSuB9EWKzQFgwtP75FSSfCewEWvatNjNYyJsoqzpZmVayr3AMuMs44cWowo5b",
  "key19": "66WvqnJoDxB8BbBnRVp9dUK8Mx2ziNvkutY6bTqBip94k1cnQ6jZeHwH8NnHYptz3pqvEwhh9duorDHm7Bnck2si",
  "key20": "4WbWHzkiwyFLvATgd9tQhq2AecKXtxxUJXnh82e4QNxVJRFVKnnGFnPe5dKBkuHVxBp7McFBfjL4uASJ5vLgvawY",
  "key21": "55NtcLF1n8B5eQntUpXwZ7s3afWkR3gCCtd8T1tr3VqydghSfD4n8pXXQ7u5EitP616g1Mpd1HGFn6WVUrxx9wje",
  "key22": "2oSVfPZPjta53L3TyBfVYhW9WPKK5ap2DNK3igGkmuPk1mV32T3c5HqAkmuPTdPPFyrk4f5EJLBX5AxsqFmAGgW4",
  "key23": "zpaqd7hxaS6nNLF8U64EvxbBomUsyKkcTaVyMDdfZ85tpFNeW385XFpCPJgrNirnxa9YHuWxrTYvuEcdTPMEz6v",
  "key24": "4Pe7iyTBRHc4xG2fz482SeZBi5g5oFVQSG28nxTCLR9ThRcWJZFEEXbhzDTkdjjbN3iiewy3fZNpkFfhMAFhLmmd",
  "key25": "5vqyWJGbBJ22br9ZkjD6L3sCTYBhFpdr2R9bbTTraxjWkptfJ5vCP5ChCKP9tJ85QdQj9TnXcJoRhNszZxeFmoKC",
  "key26": "61c8RqHiuzwWer37HXsBpLWpHbv6N4EgqT2ainfnMihwDuAdE3VSF38n4CoHHmk8XNiEPEyR9gXKuMJ43Ycn4yv8",
  "key27": "Woi8Xwyv8HvtPYSmwhu3SoJHzyrhafbfsCc9Azth1ctoa1iLWe16UWuotkGUa8RHD11YPbyJtBy5CcSBsbkXYJ4",
  "key28": "GkV9kQmAsAuYHx6CTFtvhewh4EYvDM5Nf7SUhHApXYAPMkNL6vtbVvbjihx1UXiNbjSNXDLTuHEX7jYC9L9ZqRr",
  "key29": "HBde3kKteL9uCkQivMQ6j4MZmc374YWwYn7ffZESm3xSV656Fov15EF7eEsq6VJGDyu9EHRbaahAtSebJ112dSA",
  "key30": "2BucYPRmw3BAJwx47wJqAGjWrPnNCMJGKv5hKW3ZKpG72BcK14f7jujJJXs7Uu4z6oQQArLfyGuAvM5hxDMScSmh",
  "key31": "63MttCSRoBSqNNTCcj3GhJCK6Fe358XtJxGNiZUCH56KCrCP2meVh8zRP1u51TMDoe4U3LQny3xWJYBtWpGvUGap",
  "key32": "4hmQfRyux2yJFHBZkFz8JAThykuP1DHwiNogTuMvMYjxLnVJ5b1f8P7ZxpSttrQbd2kgLgAdrAgR6NypeHFC3kjz",
  "key33": "39Njg3nXQSJXijYnxXotnYSisD2YSW3vacShv4waJa7UzHQBCr9Lkyh15fXdWMcwbyn3MGECoJE5J4i4ZYpMhFeH",
  "key34": "3kR99jQiq6qraxT4TXmCqHqpbNQ7wYDg9bjvrC9rAoAPRTWQVQNCTpukgoHNQZBXBYgneCHCCJ97HYNnQZmnY4Pq"
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
