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
    "4cqX1NpojDUxq42v84LNZYHjfvqAiHg6BWCGeD77FFdbSnDExjrNycjWWpxVpnKHzdrWbtViJorsbiVuNPTbQjyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6fU76D62VZFATGZpWK3FQSNov1z9aSbmdF8Rhiw1kj2gNX5NuSw4b3XLR5NZ7oMNdRQKWAfcRssmXbh6UUiqnJ",
  "key1": "4ie8v31H366P7KeHdh9uEY2Fx3SNuLTWHqXywF2TEa8zNw6YucyHyDJWrrj18zsFwQsyfd42xkKe9Vrsc9gqqMyQ",
  "key2": "33QHi922jCirDKyZjtDBAMNtzC68VLCUv21DyJzRzqk6JwEVknpafsFi1Gechn2PqWcsoLhVf95W7B5gC6a5aryn",
  "key3": "5x8sfupfrUHxEEZcwkxm6R1zspjVwwDeLyse8EUwp3mFTfdGEbwcWQkvw59rsDgLHL8QPF9bgDz8MjeF53NAfeHW",
  "key4": "3AdtuQyxzUai22yUsv3vCQ1BSpiwGMskLNcz3cd5xX1xwtnRiEgWUrYpem4SrHE4PWZE3GLP2yRbUGpFK7KQsAYT",
  "key5": "4QKaJw67CqqpREBpFGm43x4eP5DZRQUh7WKJZg5wbmeGfFAQYgeMET1XKF3iQr2mVKognMraKR8nXPJi2tfontjj",
  "key6": "4LRZNLsrwPXYmomDhAUvs3dZx2rNAeCxBKVE9NH7BbaZSAv3pt5WRq3i1AFGMjZgpLvyD1W8EutiNsxctvzPNRN4",
  "key7": "BZTYqqHQWvS7Buyq2ieNQcReCMK9zCYRWddNKCtxCRnvF2w7ruSY9kPB7dXgmkvXwH9nnQRec4cetCQeRM97ASJ",
  "key8": "2iLXrkZ8jG9GD7rZA4U8Z5DdKUYsMa8uE2GG5Ma1EYtyzGxyYVehRL7t6i3oeF4pmWpsMWk6imBjR5dwkrFDEbLz",
  "key9": "Pv9mfFg1rUhe4DYSvwnWvoq1e4DGVB5mW1mQHxKkKqNkShThpXdRK4YdFUt8Re7X5SWqJ8cnDfBKZB7aGAB8bmF",
  "key10": "2i9SihVeHM1Vt8YfawuKTEHSBRfJsW5Nwii1uUop9tfJvw9ZEA4N9KRMkYwASzpi1ryXteeYRKQZ2SDtnLRDvHAf",
  "key11": "iKcKrEZLWCk8ZioUGgNAYCgchbFNndiRg7na7K8XqaK4Ldjcy3iP8EfAKpWKjKUgrHmq7kMUm4Je5KntAFNmA8n",
  "key12": "5Ss6MrJ1d3mRyNDmhHduC2YgbAjqTLCoMa1hGkDSk5ZCfmGuYfVPj3HP3WU8zw3R1fn87zDwdNrRh6c7KGbdfs3C",
  "key13": "5cHhE4kAaoUr7Ry94BBZqYwDcY2jzCekhfuEwvfTzprfQzfAPVjEH5AdM4CD1BKD5gXmRkF387BomUcdwvX427Ry",
  "key14": "32Fsq9VRni3QXbGBkSXX9Ao5f3dyGU9hVNE6hZ7dBxfxs7fgtkUfkqFayY3Ywn6hiewaUDi4cMARwQgFniRpKCdR",
  "key15": "26HJqNyPRsv4DdNzjoA3Z7EsANasqvmjrbZsr9CZx9gMaqoyCXMPeYhAPTywZbHtaA6XSjP7rGGWTaw3XS4AWJWc",
  "key16": "377M4F3fhy97TmTLicWL99bEPQSAczshDuPmraEQRZSXcazJB4tpuPqSWJunXUsbBQp25w2g3eXyzejvk8Hp8t6T",
  "key17": "2ywUadyeztKGo4r3QYKTof53wgsURW79z9dLWqw2i1vmGy59ya56kNVvmvv5rKd61dddYtEaVTe1qD5EoQqr3MBq",
  "key18": "3U8xvFXgaB7Kbhf9quzw2NjW9w7BjxKMUu6jzmw5xcNnAWtVEPsQmBonpnMJ763JNy1JURzaqQLVkPy3dpvW2CA1",
  "key19": "4EuX5ccdpPWw4ivNa3zZM3w4via38V62WBtBPoPCKUA4c7aTA4yP6DpVAgSbNcyvEksUYxKVUzvSTEpmPnvoYjdL",
  "key20": "3wZZ2duvL1iZnDUn4PoYkr3A4H7WFxQYhmT2ko7i4NEEjnZDcYkMz3CmDVBaLUJttHr999gJsTn3jheCkT4gXiwz",
  "key21": "4E4n3SwLfEu29pQE6aYWU3pNeonH5TPwxzKzqpsNJMYFhAqMGxFHk8oagefMeZ9NU8mb5EbwHoFnk8HkTkfrbkhU",
  "key22": "3DqCL29nHxrLjbnibuTa8nw1c1d5TiJGGui56waXu5xwdKPgtNag6N23jNtZHSaZpSNdJS4J6Gr8UhNpHAXdpZR7",
  "key23": "3ahUC1Jpc88FfEEoLtjhaHjeYi7LwcDbKvkuGMk5moVBCFwTJz38drJtXVkvG79R35AV8VChSBBzXumfAuZrZ5SV",
  "key24": "2uWdhxey6fJxTZ1y3xgZLpNArQvW5R3KmTSZKcgRqZoVxCxJMnrbHUiPoYzva754x5Rbbxmi3WJtDigHh3kkeoWx",
  "key25": "3RYhcA2v8PFNy1mrog2EKg3nnG9rYCxCQGJusQgsPc8hRYsB1DDdt6rYK2n2CrJXBPhjQ11b9PWqwd1q9GnKFnMJ",
  "key26": "kYoy8ghj7QkRjrHdVFjMP68tfysSX2yiAr7RYBw1qKLG3F1u7A3kz4mtqQCqgrCAH5onhbb1ZT7LfYRnYkUBNc9",
  "key27": "51qzdTNveSRR6L1gVZftu986rx5yR45wg5EohVi8RV2aqCSgCVCRhTmZ2o3JMURBzVL3VL83Sb7HULpF9QyBarfy",
  "key28": "31G5h9ssF1kU1qLBaKbbHuekhdexrpu9xC1jbnr2uDg7NtmFui6iSyB6cSzHKdyhXnT82zSUx5DiQtG7CGDiwVky",
  "key29": "rVpcuyDom5mkUDoYNX6YpbjbWdgnmCS2b3L2EXTqbaMLm2zCwGQ7aiUWohQBAJV9QmHS3F45jn6gB1bKSV8zcaQ",
  "key30": "4NdwGKKduRxRLUHLuqdBWhJzW5uTRDKcVmWUnUogronHfLVbDkEmKe9uFSGdWViz3j9z8TtSJ54sAymdE1vg79Vm",
  "key31": "4dJ5myChDSskx7tDMh9qVYikigP8bSw9K5ZCL8dDGxp4MPuwaDKrqejTUwxwYdHQCtZMY33E3Z8QACwWCQxnHu9p",
  "key32": "J5b3wpxNeuvxwgyMZTqxJm1J26dP9vMVwZt5sLjD7az39X34zzSDhQbNv6Xx2BxNu5WGLhAcL7u7qLVaaqZfCx9",
  "key33": "256NkZiKgJMo7BPpJdeLhVomTeXCUQ4XtoRaBkhndpCGNjn4y4ZmrDU6snsExg7JrdhzQADvpQgchcs25yUnoWw9",
  "key34": "8kmzPDVCanHcHsstDiSSFS98AbtRbnDuZwnvVQXB8Fg3x8VxD9EoYqN64in7p6N59ZmTJ61QBM3sxdMX7ZBwZAa",
  "key35": "37BbGQpLkVaLKzEpdUM3anHSUKGVHdZ6hGnZFk3q9gDZowE8byeWctpvPUFx6xJdtazd5JvfWXwnmufBj6jryREK",
  "key36": "n6LzaSL7JqxT9MKk6QjAGSzGRc9x6jb4YDegVKe1sFKgjZ3DZRT1YhijHs2nc5c3pTBxjpAsX8bdnQLFcY1q3oJ",
  "key37": "5DGBdyqbjqzrAEbKLroVsjDPHf2Ee4PKWJYYdi8UTcvjSra11WeRTRUMAwkQ9hnfMgqG5bCidyqJmagntFvJzdjj",
  "key38": "339G2b9qrR3QyPsvGBkxW78BdYaajqB8XLADqk7k3whWdVKWSsXaKJCpoZLWnZCeWFThfwG28FAiTHKH78cB9HiS",
  "key39": "3LfCqJtC1B5sqpebZ2jQp3Jr7ov6TeBehnJHqDzmC3P1RhzYooi1zt7Cmheu26dFVK44NYwBfRZe87UYK97iLjRB",
  "key40": "2YtReVnKNjWakQA47oTzCozFK6AtWP81PgEQLLcFZoF83ih4zVv6QzgvnUPbbjJnvW1JJAcd8YmWdrqbexr7ifwx"
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
