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
    "5cmxp2bp4DGsHi8r9oR5XG4JQUHyUGu3PQVhpEQvCuLuszfZ8VJD8pAA1A3QzSBvFPjRJ6KzxpWtzLy3eLBRTh7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TzaBtPwKSr3DryfiDrWVCGRRzQVJuJ4GjconHckS7T5C2oYqdis8VmvgYvwriNkrH6PEm3CkW61bdBTQmpHhTUD",
  "key1": "4GGBYi4j59jzZb4MY5h695Bxjo9HSW9UY8SLLEpxJX9aQBkmzZxTTF3sxqNVCkXGkBJRN4BkgMXg4iMsShqNHVbW",
  "key2": "2VkCvjBS6vDf57BWwEaX2LyiwngdzLZVceDDNMcxQjwARDvotCmrSZNHnMYHqivLBj1xKXzPmmHUgcvEmkKnjCEd",
  "key3": "mJeAEzW6uEf5Kbk5myPBqcwURpV6uLEK5wn7NTPF6W1Ly4u6DtEynS56FnWAu939YMab6ry6xXPAF5TXKJCc48d",
  "key4": "5A2jW84ZRgdqKjZKs6Mf1Sdn24T5idaYroN4UuDCg6ePGHmWasHHjp2nGsjGxjnodzqmdA1zdmH3X3ErpURRotJM",
  "key5": "4KDKbQ5C1t98ygqiKWs9BDuDfdk8xrQtP85sqZV1YaQVEZgDo8jXKrgFiZPSCDDX2jsAHYDz4gEBY6wyn8XRUuTL",
  "key6": "3bUFMP1nS7amtueMoCyovmge8oLg1oyQhjTvdvg8EJKRRAnGnfdsyuRKT2CspufDrsLiuXtx92p4gaMf79csFRzF",
  "key7": "66ub6bgMC6pn9SS8dga2PxCdqkP1Re1ycdMWQQsfCPiDRK1k6ErmTBkriUd3s1hq5xYmzmFEkGNSD365qCZb2fd1",
  "key8": "4q6KMhjCJaJVqpRSsthA35X3BpUqMCHRX7c4etznHbMEJKsft4PxfUdbZh7zeZTNtsFH7ckuKpDM8SFkWfvBsxuQ",
  "key9": "2RYaQ5TEkTinQmqEpm5PTxBTQ97m65QpsTsNUUCP5ggpUgSjN4ATaaTeCj3GEm2U8dBQg1KT63N9RhQDuz91V6Gg",
  "key10": "5p9SkuXGwucdVx3SAEogUK6nsvZc7xLcWW7nkjx9DHViw3uGTBX9TmoFaDUuoJhbnoKXidZ15TPZBHd7nSQEU89n",
  "key11": "34EvGHwUBiojJzExFu3AgJczkdjbGArXkouZQGe98GU5rv7oj6zP4ayq4MSC9Nf3S4LktTdADUeVDND75DJ9F1g6",
  "key12": "38xY3bBeEnvATv7k2LDSyzpngRofKAUGR8toNVkTVH353VqmZUgMfAGwQTtfjZyMq1bwr5ypcn7S1puhJKuT1jpL",
  "key13": "NaXmJMBKgjGngpC52mtsaReUsyFXtcq4Pe2VnGfETpkBdd74Uy9n88Xtq6b9ukR24fjncA5KrLEnXP6Nzd5pm3L",
  "key14": "s8P85AagmM3xPy35o9fSorUPwM6rA2Y5BRdumJKdZWUevxFZbP4Sb9LC6873PgRy9tqZqRRxUXHdm2q4X1wzRtW",
  "key15": "2MthdQyU1j98f1LZhyB1w8zQbwfNjgjAZCo8ZFaecTDDVtV5rpqKrvRYN3T9PZ6QDZxC1AqgvAmbUnCQWrXAQXpi",
  "key16": "43VBFWNHDnNyUFW3L64wUCmSxnk7ciiKcoSfCKA9H37mDN45G8pLjvc8sWgF8tKbDUy6VoXXFpF3zaUwioCxo3aP",
  "key17": "3TRJzVwmWHNkDspZkKs954KouEwYJQPHD1fYBKZHJbSitsKh6bo1t21QLaS2W663iAJYPsHKUJqinZiWMrdmP1d5",
  "key18": "45Qoggbx87nAe972iyXMjrgXTm13Dx6NPeCjuk9sLdzx2znZbAQSyZ3Y1kpvpVd31nUHQEGHfsj5mZNQ5zhYvpZ1",
  "key19": "3q881J2r8DU7D5fCHZ7pyB7PCNDg462PkVJBhPdMLNy7neoK3oefNVY85pGjruDZy5Y4C4mX49HYoqDFoTNKvibR",
  "key20": "44hsHPCYGq93B6GsguynjfRywa3x2URmEr6GFf1rCCaGCCm49XPkrCTeE91TbTZj2Wg5u1S8BvMRPekXSn7esjDB",
  "key21": "JD6vREZaRsN9YjWhe9FMEFSKcJNDcMxfk42Bj3tbTfvTTwZn9jFLRa3zVdFcPTQkegT2VZrTCvKjBB79HKEoSZw",
  "key22": "HnjAHvg9FtUCgDV9BJjcVCms9mF3cUD4tEuEDjXm6QQxPZNXjFcYgYSD4JjU4HyKUux81FtiwCSQhWCwqqGKFLA",
  "key23": "64dshNR5mk6ktPpLwSJoQsansgx6Mpri38S6dnF5ggtRQeRJ9v6ZS5QcsBY3JXVA7mc5GPVGKCntFhm4Z9Ag5oJL",
  "key24": "4p5GbACJmKsVSCmTMQeggzXsQKq7yM6xmJr4f4W5XmSah4R6fA1c19Ji4883yh4XMVSXfE4Fc1xprER2Vy483ZWs",
  "key25": "2gZVKyoVUteLDJnT2pqLgLbn23Rfc46o6N88d6Zr7vqEcHuDTi3sX6TDwnJqb1zbcR92BrdiYdEagCpqiCVU3ATx",
  "key26": "4D8cQgHCqwjh6fNf2dzzFus7BhrVGbGHwZAynbtHKq4TXYaMTvW279rxQAU4UE1Pz5JcWW7L5DzR96yb85zH18pD",
  "key27": "4pon9ragRVzhjMTbGSMTNHnzvau7PZNkfGnKFAm1JHpPHStdgGZ9Y6WK9e6CVg35RetgVN35ApyBLjEV3zE3y21q",
  "key28": "4KmckAXEr1YV7b867qdu8RnLHrYbC9yV5FMKt5XWm4aYaCuvi5r33itTbUhVUYYhKL57hrxa74kYkwCxsnj527LV",
  "key29": "2HzVY9wLAXm2zFenfb3EY7uRueV7LMnaKtbWEdGCMSyh63xSbD54UdYgA2jLk1hgrkhbhVkT87A7gisqvaXRo15s",
  "key30": "3ETvhkasrVJjzKweapeL2e4HgSUprm4SNeEnBJMuHq2hcCmwHP6rHtpyk76ESWXBmuq34qTLmW78Mabz5zHRBt84",
  "key31": "4VyBd9mH77ADeF7Zwy6sFv8iEbmRSGfrYUPLqA1UAqgJd8gQtAu1wcs8EtBwDUgytegAMjcnEz2KmjSC4M4wLece",
  "key32": "4Xk4HB6Q5TykhHbZ83BBgnQXyU5ww5VcjYWV2BnfQd5snyhdVncRmDmJPWAQjPUF7WuepV5v5DA66YHzGFK5Edof",
  "key33": "38JNo4475EmFRNGy3bTduigK13pNsPJRxHJfBibVX1ea2YYdS1o9ig2cEbAuUK9s62j3yFrKtUZYKdu2RmkM9U6G",
  "key34": "5AbwReRAzayhdQQsp1NekTbhB9Soip6x7sgYQkBuMgEW9vmY4Yh5H5M56313HPhWg6CNnxoVRjEYUu4AowXwNq1h",
  "key35": "4ntmB2yuF4SaHqLTjeJT3yXxpBgDbn3BTwCVzjZSCWszHfGxAvCxFozUYx8r5rtKGbpZSvM72JbR1t7nNUzhivZ4",
  "key36": "48p3ZSYxSKgpjfatb5v6N1v5WcJV4DXtSZbnbWorcvhYiJwDQvLqSKu655hki5F4c9osJpix12vt1uaiiChSzrXq",
  "key37": "qwpgS3oP5U7E4J8wbYCPuNTvxsE867H8xqYnb3s9FcexpwktsXoT9SSRE4b49yjiuwNEzvBkChVjCqT6VqSWbD3",
  "key38": "2Q3Q8ccDMAeu2pCctu7FUzhsKGhqmELEAcARsmS3VYYzUSnZtQCiwpbmDqghk55CdmQpWefU6vsVJR4S9jFjA1i5",
  "key39": "3X1VgJDKn5DFXx8WWjibWzkF4Qe5FJM4kZiEYMgs7xp6umehHzzt6VryB5NogauFYf6ot4vsYWb1jQ4NEFcsjqUP",
  "key40": "4mJiJBu5hhkPPMRaDrm9jQmVxkvm6bWiHuznvv3sJHr3AgKAvnnsxkRjeQ77jr7sf8zgewnDBYb8v7koyw6yqjYv",
  "key41": "3gpHVM8fvZShqC2WrB1Eh1vktzEL7it1chmvGq3BLpMEg2z24RpLEYmFNkhqn1B6MAEFaYNCBXhFapv4pXp6pGUL",
  "key42": "S8u64kjzxbdXj3cJj2Qs4qMeyEbHYQQbho6rPTJaS4aBN7pJjnHtSzaGQqdSjkcGRxmJnogxuzUdFXzzMJVHAap",
  "key43": "39JsTZLJxRXKEWkNXFbmt1Zz56aix4wQ22vTFWKfvpY7xDDHGcvAyLo85UcPovbEyP9MhtkGWzcfLpGaomS736P4",
  "key44": "4RGU1g2HrHyQ7q2cEWPicSH3WV3v1pFAwf3LZzqyMzn85frnXFPk44eqiVf1kbVbndcKbPVQUrqcNTcFkgJ1pJaA",
  "key45": "4Y4U1WWL3AoMTqup5LTNwVFEH2ErJYW43HP5FtnHd5Ucy2X6yYip2cmMWgTkx3KJXsCBnp6ddrDy5HEVbJZHahkw",
  "key46": "3f9BwWyy2csiCjTEpX4tJnRv8QTimXM9TkxPwq8Rwy37DxmXgp9taY3GqwUV53cf2LikQBBiwkxJDxFtGbevsjHk",
  "key47": "6ye314ZfNreCmguy4zXKrsV83s1sxgkBZY6JWh6BwA6BXqcWdQVgUM4AELS3sKVLBo95ZezCVDftzEubHTvkrPQ"
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
