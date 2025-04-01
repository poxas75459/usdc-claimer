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
    "4T3xMhUQSYko2MhhRHmvDY8oJsptHtLW4KJngGaeKgW5zE7DwhfRqSj7wpNdekmUo31q7VoYpqAugpYW78pjogS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KuYhasBXG7xD6wYa4u9SP6jwBkcoFUVwgCKD7puy63rqhg9FBdCR98XeULfwfUANUj6ga3CgMgf4uK8WFWo5ChA",
  "key1": "5CVY5rmJinypux4PTBbLw947Juyt3jZhecXTSxwrBTf59UnJYNGGp4J734xtzsjTyhcHfzDFimeduPFXz8v622UN",
  "key2": "33TwvqTF1Nnco5c3bjJ8Bm7J4rviWjPcvBB21Ku491T8t2LKBBkqmJcfT8BeeCb41iw5jDGo5HfhGWGadMoU6TTu",
  "key3": "59UShAugnLyfddbimtAgaF95vXenAUDpakS6tr8m3FF5R3TJ8vtmGRPTCNrZvgPvVPq9esVBNgasrMrGy4QnCDxq",
  "key4": "3KfKGp6aujgkqwHXthVZ8dvtJe7CEn8boJJn52NHtFi15Wk7bsmujXVUggo3r3qCLoNedAz4CK1ZuGgrSQrkFb2P",
  "key5": "5ikcrJnzkFsTLSeAbsUVEZQMVGeCyemPV83KMsLTWF3DyHcXmQR7oiJzcTV74wdjqEkB8S9LaduVfyFkjdXCfKJn",
  "key6": "5Gqurfur1gCoPsp2mvTqAwo46sMzjhiqjZD4wuCkLUp8CreNH76vdVCzQZ1A3Gucq5XJNTF3HYrwX9ByYHLrXmLL",
  "key7": "Th1VaKyLswEVH1zA8QPMwcpv5BRBU85Mnuan6aEbWoookcPDdoLd42EDQjVHztB4wZwzkBsQAexDZaPyeqeaiMQ",
  "key8": "Eoh2MNFBTN7YRUzjLTFWUZNNQ5R9wUXde6mRSisHeLLxBLayUTeEJr4ZG4P9yb9HPt1S14bhWqD2UVxPhsuCYEZ",
  "key9": "5CV5P8h232xy9UQN7uRdUPZAkfLDU4vbSvL6fSWUryEPAV1jb8opd3bRvgio3Wm4B7BnR4okgVwPPXy19sVQixVR",
  "key10": "4ZGk7q8jkj1ND5EKdu4dRYuxFcvgtbTj7bdyEzk3Rq8d9mS3PCsoxonqTo2uWKaQLZnuDPYZ2FAAzY72FK3eqDiN",
  "key11": "2NaEh8rH6EewXcJp4EP29SdEDy2quxjm2Y4sXzzWiSXRV2chPLvDe1nUtwAGySH8pKwWpLxXvKKcWfdfLTiUoyEQ",
  "key12": "utpLXTd1dt1sAy4Xp3J6WL1ndXwhFPBt2Q4APVejV6DiaZUL4N5p9M5XCdusxNzRsz22qvQH3Zz7E6E89T62XeR",
  "key13": "26FbtUqpFjzDn9Q9JXomNPEqgbsXabuUvHe21NUZGV8HNGZh4pWbmfZZsK3YF9g4j18mn5XoceWywJLg6nhBh7xv",
  "key14": "5r5XXBGoQejrfirbQ9BVy4vS9aLZ5itAou2SYmNarosyYpkpqpv5HxjEbMZY4yX3uRtcvJGxKKz2mQGE75FGEDkx",
  "key15": "2aXhfUbt2EFtJjS942p9CWBMkzZYS6QGKUTXXV3VQmWbLqGoi3VDTw3Eno8L7ArF9Mg43vLiyFDtkbAwXRBNZ7Np",
  "key16": "22s49WGLH5o9fELBYQeCs7p35okraQ2wminQsmxJkGk3QJbiZYewwuEcaXNS9P9n7LoTof4T42PUXgnyEU9xGSK8",
  "key17": "61wL4QuUVZeGt5pyh5DadN1Hj7SP6cyhafCkvsukFWZs3b8B5FF6MFgJzH7f1SZByuC7D1HFkGjd4pMs4XsiSSJq",
  "key18": "33p2LXLKWbmGxo1BHMEvj6qeeAa3iTdkcCvNSbAZh6GBTDUy7sS8fUZb4hT5ZtXNPtvkNfjiSjySAh7ynywFGs56",
  "key19": "4FFkbvL4oz3c9gJmv6LA4XMyXzyJh6iMMqtxcnaiRD8eyqW8vD41W8HcLpmy3tWUGayreJTHw6HYsLwiugsXyofK",
  "key20": "4Bge94zBKcj68eRLR5oxuRYu7vdY4xmCVFm8T4pprJ87wiuZm1w3EgHqsvRoRa1NwrHJBsNXgmCqAztumBKqPFn7",
  "key21": "3rTNQTGSTofoMMqZa6Rvz7i9GFig1MzHe8HsAiPE9edqjD7xnUvWMqdf375RQHJAbwjFpeJWZRjeUEMDeQc9ssPh",
  "key22": "5eJK9Vi1Uec9AyKtYd4Nt7wduvUgY9JBKixjCaneEmzMwkMuAoFSi8X2qDwj7UP2bZjBnRL6D3TTpPXoKsvuP41U",
  "key23": "FDMBJEQUumuMUKRCppidn9DsLPYJ8eEucoQmrQrzaCq8CFDkLqz83yahkhk8X48Cg7CnvHDREJMz89cAVknmRUp",
  "key24": "f5n4u1DShWbP37DK18t2RCBeQyvzDc8BeSyS5fHYG4HYfBZLDKSD4CCR4qY7GbKd2SSjLQw2vrbdQdv9RTvmynU",
  "key25": "5XC1BRM5tyVSgTGJUzu1ibmvHbsB7PVNw3YdHodhNoYfDkUR1SsvtTgPPSCLDcg16TqgyjYsvpfhUU7eS3SzBhDF",
  "key26": "3GRAk6HdDL72V1kfKGVrcgNH9TGcmVGuCgTC5DMDYz8DRRpAZE3RqBDRE9Lb4fNxSLxGZiGrK25wMsNmC1XXVkpR",
  "key27": "hX2FJv1wnCnCpf9igz7oDo5SrGfqjWgqVFnfEAZacB9UMnnBwcub1waQYry5WH7LWfP2d46mJP5B3wMcHXQdZi3",
  "key28": "5G1s6hGDGdmp1XZhR8VaKNgyLW149taqZDzdyQhhgdofee9cQAVJqoP45Bv3f96yNpZipgy4zHsvRQbHUb4x3aN6",
  "key29": "4jaT5EgTVuErYY7fLkw6xjx2hpGivBvLsoJ5C2Fq6HzC6HjqrkHWsjyRpETSKsjCsMACm45zdTLEfUB4cZzLUpVT",
  "key30": "5GW3FFyw9sYGsn8qkJsd25h3hMAzGYuK5fdgJm5GUpjfo1zhTWHfiD4BvSydsvJ7ZEGWFfj9yNsTv1WQG4xf3Hem",
  "key31": "3KrX2rd8ZeACRJaU49YcWezs55xJDmU2BfCDW3smeB7QSRf26oZmx4EzuwZWHcJWR7TovETSxpoPQr3PxorsbhFT",
  "key32": "5353fymhAxJp7tBWBPXdM6JBAeRWQP9fuzgHDQ4cRnx2wnVhovn8vojXS4wnB14egSdTYajaFvGazw6hv2TnQgPv",
  "key33": "3SbHSK2EBDx4g3GKgSyhMkAicgNz9AfHhNFLabKx8c9mzhvGi9umcogdtr92czwb9D1AuWFEzXLuMwuZwkEq4QRA",
  "key34": "4cxYGQAcv8CxMYcdpvFiP4x7HyFDaJdmbQLDpDCVQCwQ8KP7BKxDUTP3pLkTkt3Siuus228mnFM7y5ftHbtNNJgX",
  "key35": "646oRmbRtZ1Dzn7BCCx5MHU1rGYV3zA2R66EwvAF8ahZHd9y6ViWL8cLUQuBuZQzdGLGnot3qjzbPiWXnTTKLjB6",
  "key36": "4SKTewkxfkisvr1dADBw3XWzc5ouUryBVGmcdj8DeeGd1XkX4PVEkQS4V8iDz91kxT2Cz7Ys4WkziMfwKqNyhYTM",
  "key37": "iwzftpUxEmXWakECZiasuPmFBP1s1hyy6Ti1FYZSxZ15hcYhGuV2buQzrDXM8W3XSDxyutVBh3kKJBRhuj8rYGL",
  "key38": "54QBGMUPeBPjHgCdLGBHjvgXYqmXaEZVM5PWM7akBaakox2hj8ooA5BQnA8G7RS4KVDKRpFhKWh57U7bNoRmo92Q",
  "key39": "PAtLW3FoW63esqReo6fqf87d2ARvYtzSJSdr4rJdbxP7GBZApRSHbbYw3hsp2DZeo2rH6NXpYvkzCU3f5msBYXZ",
  "key40": "5A5xpEJqQizYnf1Pd1EoamnKKpurkp9JXboGErY3aYp4EtuNwCmNJ3e2NfRAWcvzScz6c6XwKKDDUmt97PuNwXc7",
  "key41": "2U8RrntQYg8mQhMrQAWfWi2p7feqMVWqUweso68zVNhBNWxXkwVt2PMiB4x6SjHuyDuFjHALuqBFqbetyvhQtd99",
  "key42": "3TX251CrP7MjhPLxDUX1viA3ezGe9hiXAaSsXPZXX5NCkZ51RfiZ7JFLKrx6qDXL1CgijhP3RjRHQJJKTW9YdodA",
  "key43": "CQQbLqLw7g4e3yRUas8fGMG7gH88wPXg6fn9YBSXDknzWspkUZXyCBz9sQaEwsndDvouA3SfKzjKPpUfjakX49a",
  "key44": "3CXaffWq493w8ntfPoDxUm9UqAJg9w37LydkZZSHYTNLDHjaoSzYAyKAYrrjV51NF8xvBQaEs17mJZbAtfT5vknw",
  "key45": "jrHEqZ4NkEMHuWcCkwYeDkA6FGSJ55m3qkpxrw4v2iyYJTXrahh6z4P8aovLMzvTs9brUxtFzUEw5cNAJVGhoaC"
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
