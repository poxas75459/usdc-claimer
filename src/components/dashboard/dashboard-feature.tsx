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
    "4tudRnrVsqjcH4QH8mUxGhtQGuMazNTRJXVkYZDjLd3BmNKUdcWqp4fnJc4jzj87xTPh7GRCAUKH3aVxc5RvM1w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVu25vWDeTqnZeJi583J4p1BQQHveY4VP2CjrLvRK7ck45hQ1KoykfDtwqHjWx1z2QzmZ38rL4DeAqYJoRubhho",
  "key1": "YMF9F3h9DNeW7xbLBLN5qpPkCRiAGUuGgdC5r2utBHz9PpQFkGmhqhK5ZxrBbErU9Rp5RDY4QHqJNBikvVZop6V",
  "key2": "5VtXwWqDgYTuUshFTq3uwBZ9NSJNfu4FjAB4MqDVFTxqMRpxgfSSpcz8v3F8hP1jHEw8u8Tq2SPYyEGHL2WEiASv",
  "key3": "sGmPe1N3SHWvebJjbcK3HsXXiVrwMqu3urbWwdVJrC1zpJHzwBCJxvARV685CoFLnZecQZiUesjjjircsKSYSm8",
  "key4": "3WHRvNg6UbBuKbLhjquug7MVsEb8qHGFcAm6skAiEqGbMAMCL3QeEQ27oeuCHUH8Vg9hL898yrRbC6FmDpi91EDp",
  "key5": "5YY1HRVTszXAviKunBJNBwfuzrM3xN1VoTHkWLiPvM57tW7txJ31FrrCETrjagknFCJ4nPdEVErm5n1ojcUgQehB",
  "key6": "7zcWqoMCxQEUDhGPg9cdTjxMDp5iZpb3c2nB37Tro3WEK3GL2E7F98bFex7PYraxiLGRoWJtLW7tgiovawpcCpc",
  "key7": "2KWiv8EKFckb9f57qooRKGevRGrGvi5fiMd5Mb4SRkB9NYiEFwDrZRGS3J3KLthp8XZ5FxhkPUQ2hPoVqqqaKHnb",
  "key8": "5xFBcVxqi55zwSEZ6f4BcSSUvzrHrPWvauineQnfTrg6VX6cJHehGSUrkegYZPfeydAftTF31yvubCdvrC8ZStBs",
  "key9": "2N9e8Ehth6s5bDzewyv2KBFQSuUzjm9Wm5ZVjMJ6SeAvJ3yXPA8RU56536Xcfd2VrLSEwJuBNczupEx7XwvNReua",
  "key10": "5j9RTx4bKnmuUVVJdZRcwsqg2KL1NmfPAWurZmU4L2MhePEyrnqhw1iaP5fBzyUBiUqnZKzv3odsL6tPryS8H1te",
  "key11": "5rdqzzduspqYGKnJx627gL3gw31pusBqPtWnaJ1bLvC8gkaievkHMqJcwyq3EdhrHtDxvE6ebE2w8wnbzSuePYGX",
  "key12": "53fNd8EFj2TZgXsMMPP6idBsMFmD8d6LD25942RDqTRGnkWvEDVz4b9sM7UEhXDcLeS5f3g4z16bPJSFbw8zfnNm",
  "key13": "nYvZwhmqCZAoWooNLuzKgcY687owD6gRe5mQNXCnVD3X4piAxxv6vfyiG3Fvm3CusHs7ew9bGKmSx19KiBYUREq",
  "key14": "3PmQxezp4vtFAKhQcmYZZHJqb8uWyVpqu2sxqCELAVWtV83MF6JEU6EC2DkpYFQrasEoKpC12wqgvDFb8QMEBBvp",
  "key15": "3pBCDHoyrPkMRnfGFDb9kcTszbFe4q7ktqsFG8aUaRZG4GxgXebyVezVJax2AMb8DtqS6YEVRV9524JpzGkgJVw7",
  "key16": "5aE8bafC4zNBrHjYgXdUobp97JSoxiMnSQhGPGQ2zngd96jdAf1nLteQdcdz1U5fZCdgQYtkvG8NqEbMaJ9X3uKA",
  "key17": "7HRCAqStb7UsrxmiggiuHpcGhp3UNQzkTBQaKSQ8Grht8cLMzkvaqg8LHc8bLJYRYPKWoNUy6GucPaUPV3xaGz2",
  "key18": "4v1XJmfcjC1sNyy7z7nNJPCvShKBacarq1ZeVpp24YqsoV2PNKwwCichND1y7Gu5FLi4aWHspSHDf3ZmB3P8zVcV",
  "key19": "57hX1uGqhYuRARdTGGQ1TA3KdDRhx1HLvVyfK8s2dLMGs6PQtgAYVtpCsxqhba6LpsJpEunmfDDrJdfT99NgxtZk",
  "key20": "4Aiqq4KkYjUfwmD7TerMKJozjmow61jy1SJVsXw1HP7LH684iWLp2kfn1Hn4md91yX8jhEf1NbrrjVLzYbsC3BnD",
  "key21": "X283BQsDnXPz7rnzuySZnJjPMiNPWvh6r257yN4Wit8UzBbKb6dejHewcfgRhWa4W5bcXQf7uR5kLWfQSPfZybW",
  "key22": "4rujqgYKMgqLGfaPZ5UupVMBZ7LxpweKhXUGkJqW1C9JmFLE9ZJq9szLK4eiWcWhcPEy6DZRadqWskT2swKgQN1L",
  "key23": "GEzx6RKMnEG3NxfZojMWQqUbE4L7T2jmB6qezidBrwYoCkoyhdXeHgdCv7432BpvkFye2ySfCUFbVP6CXYh6rx8",
  "key24": "JQfpEkzYgQNJS9feHoNYoUC4j53rCZeu3NzhobNZcHYQ6veGAc3e9qGiaaArgCuxVwrKfoYThvx11hKzPB4xqPx",
  "key25": "4ANNFV2Cz4hnFzKPbEmP9UwDEQDAh3EogHfSYW1dTgZqX1fpKSc5gQP6yB3ez3iP9isqNFUbtcbSGSNFhsoZyoxh",
  "key26": "5ntfZq1LzR9cfRYTpNPAFhgxqQW1hcnKdjm8hH1vmLbEjPz69DjekmjpPqNEaQnutNKw4jN9WkToq9iNyQUBrrzD",
  "key27": "YuKnM3gwExmk46xVjfdRN3pD9jhPKDeHvcLFFbMSWpw5u7K6UdSiouLRB92HpH5HZJt6XbEh59eQs2PqZGHbRXQ",
  "key28": "EHzPGZ3m7MnHiREKJVMUZAcnzRsLRhJ8crreEmC2JNUjm9ipzPZoXejzbxk7MoqXraAgCigDshQFxpwUeCeCckp",
  "key29": "39LFmPwicoqZdxdDu9L6X31TzfjkGLDYs7PYb1Q6nooHHjRPB2YHYCcKht2uaFzRKnixr8LbeVisK6jAdq42HZVt",
  "key30": "5yX1VDRgqCJJBjTFguY3d94CHTTeh2uPFoBs7KYrGteD7vrcJemQHZMK2LtKUAm1ChvqvH29wTfxg9FzB9R5aZMe",
  "key31": "3Ph1yN26kaYkt7bmzYymkea95imgdLRYfi9iMFDC7PW3mQwqgRSFLgbiQPT67Tq7U93fqFfyUygpw4fmvxin8X6r",
  "key32": "2DGwcgsPfqbQ2NijiBCNHpXSLjFJjXBvV9i1rCxAS4gMZy5eSKimSzTpno1Jwbe6ZSiaDGA2SdqhLAZStBWFiGSc",
  "key33": "28YQetNajRaZcsaiubXmzQJ3Ceyepxdqey71DFpuwM9bT5jaJCgxwEBB2D39Zt7PizJWvTT1cip3w6RJsJEiRRSv",
  "key34": "4dP9g9AY1bEDb6WjBUPRPfataYLLPVAu8FqLzLWVLkuyvfArdRDtiGi87tbx7MPqzscPhVzZKBsq5z3WprMCTioW",
  "key35": "3VxyRPYbcQyE32923QBVePxxMPs8wmmxPSqMiwny5wxew7PXES3Bx23mXqwepRJFvVxLQJAFnAu1t281hVrvY8K3",
  "key36": "bGSqn6pPybsxodZzaTp9UP3Yx5M1QdkjfLjdLBT3PeE6k7wNTfXHUkgKL2ZrndiQEtQ1MncsL9qDxVKPwXDHxaA",
  "key37": "L1LKyPEg214ASjLe6yoF3V31pqsBuVBf2fM9QRn5jaJQEvv9yB7TXC9ty3WSFFoxk1Mdj1p6179F2dsrj6tVRGJ",
  "key38": "4rUtMhh7524PU38V6JYCA1xCPcDXvQ41WuocUbrboN97wnYBNtiivpqEgpu7Rv5XKXWZKgraDmxbHZLgBf8CFVoL",
  "key39": "2bvXP7uoyQ2Uyo1ejE9vkJUQq4VJ6wmqbaSuKmK2PMaf9WMiZJAbLhH6hYLWEiumt1C6P4e8AYCu67ehGQZLZy8",
  "key40": "2hFkZW2K3RNsnxMXnwoza2k4cyeE51unLbwVAmCR1b9r1heMxWQz65CAbDprcaArabmQCTUxXSj59cQvQsjLido6",
  "key41": "2Fn46ht4XLfoewWWSHojnNFAcib1vd9CwS54GKXJB46FzxBYfnFHj2JC69nftDLrRy5UyNN7uzyHE6t3YxVyXCRe",
  "key42": "2v9yR1BshWmHMs7yDYCoEfWdUi1qDarC834MU9yCME3DeVZmNiXDdw41dQ2zmcjSQbMHj5JZXkXmStiqUotsuvoP",
  "key43": "5Kfxk8xrXe3VX673NFtkaD3dnYZBHJ2pK1jdxC9YtMszCaaGgDrT29nkhg7p33kEBvboW8DHqzmPeSdcfWx33M34",
  "key44": "5Ei6p1CPJMytoW5Pb9fotMKBprWH8RbBJyxcTsnhz8knpKAn6VSc9Si2f2wNBucnDCQ4okud4vBJ9VteyXEUuxWV",
  "key45": "2g2TuxRm4KjwWzFDu6Ms4S24WCTyzz8r46tTeU3m1W7D4L5Hh7Rdd8CfSTG3A69MtTw8mxxNqGSW7ouvNJbTDS8w",
  "key46": "4VZMey1SK3Raj18v5xES36YpJQCRQxj5fxS29iB8z8kMEbAdngBuyx26QgeQb33UWDPCMZk4NzLUgaLiLdcnaKGm",
  "key47": "qC94wETKVUnQsiyrZXnWyFNNHEnxnntNpGWcNLtqvKgBxcNQqvFHZUfxTBiZVYy54HmGiwQu1JkYz73CyPAwRQr",
  "key48": "4ZmYShNXEXB56axXypnrKFXC3CL2ivCUD99n84Ecrxb8ovB9D7dNohWW5MrFY2cRHb7g4agPVhjQcdmPHzKExAfK",
  "key49": "2JDCERv6msXGoyf4Td4Mq33XyDUHsrG71PRnabtRKCbncmBiMCvysFpoWrcQHD9VVHg99u3jpdku6nSd3L5NSUW9"
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
