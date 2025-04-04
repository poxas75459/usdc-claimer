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
    "2y12vWDTPeGZipYg5ZKZ3RZ34CbUh5oKSwNq9BbhgjSWxdUNqvKDVYGZWnn12b8kXmDexjyxS27AspMk7cAAtfEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HCSRqnpzjFbwoZ9qP28bn86Pvn6B348YY4nn2TwDngxRszfRs3WxNcQuAzuSp4ZgALRCPSaDqZjyui9CMwPgVpm",
  "key1": "5vpXRxGaG8SJkfC751TJaVPkWfXpEmbEZdYpLjCsgUsPkJZuPh5sT18SyDpaVpPY2YqKjGrNkApoGmLbcBYHJVMB",
  "key2": "2CeM17mVdiGp5mjYb6dFrNJPRz4YdJAv13ZiLqqU4EwF9aQgErSxyAqEoLCA8LiBwMEbbSCqi7Lz55y5LfxGYHBW",
  "key3": "3GmZsbFqK5s37tUUyXKFfHrdh95nPwJ873LAZiVw8jKMyMSUpkPyhBSVysRYJgksHY78P7qHKHKqNAbkDRobbJSD",
  "key4": "VW9MUSM87nXyoUQfgZ8abM2DCYx5EUo4hai356PmYYQuFUXXRDd6Y5ibVrzQTsG2GY2Gi3iFtaPbafcCjr6hDRa",
  "key5": "4aN7867QSUNyBXBm7CBnbYuww9Tr3KJX6bP5xUWZfwwg1a5hEfZnYf9Lf9qtsbrrXQysh5RTJHpqxi9mVFzBqJgQ",
  "key6": "rKus1qcD6mEU2uz6LyUijEYUuc1LpQmjBDp2PTqfnmdFJSzt6K31ty5GAvYFSbUtUPvq18BYnxs83WaWwr2VuzD",
  "key7": "5NNYL7AVoVTwu6pcNT94HQjMZbcExn1G1dFnxswsKGdAoyAzmyzevS9hGtgm8J6wdmu6gcrLvBdXVFS51wQwAwt9",
  "key8": "3PyXwrSA8tHFL5KQUJ9mPCnziwy3ao512LGDGUgCA2YkNf8Ny2UJkTgNk9NqSBm5jE36LA7hk6n5W5YyH6XorDFm",
  "key9": "4H5X6TkzwHwg1w4xE8g6RYBUrBgqVc6qbebQTP2c4WuM9VWuf6uDdn7ch6a1LuZZTY85pzLzWxjRuiAP2eh6fhjb",
  "key10": "5f7sSVVJniFGVXgcZDSmbp7DDCQJidRoNSNVkd4fzSf66DGwC8mJtXba7hw95eTyfHr2U5WNcfiQiJ91i8aYHydm",
  "key11": "477jF341xAXgZCZZAM25y9PHM4zQs5HoohWrLQFuMgopmHCsE1yVwfh8M8cL5Fd6JwCtXt7H4Y2pEFcMYbP3iE6z",
  "key12": "2u1JLgiYP7TppL12hEBS6p2mKvu9broiVypGYYmBaLmzF96E2JdWJg3MGAigPAQYHe84WRtLARFPAHY9Fsj5aYD9",
  "key13": "tMh9kdVtd6Kn34Wrq7xGXTtPmcaE32bwgEz7RH17Qx93dBkz2Fe6m2arEVgeiSmvgXevoD7Kcj1bSSmaJJQLtGL",
  "key14": "5U5T84tjEwU3xiYrx5c4ygcVZQj9o1DD4EUYS6M2fF5EmYFJ9BELxRTZtMH6prfjtBcCGGSCvTmKe8hSMBXkL7Bz",
  "key15": "aghXh5JyrCRQm8LSR8pRG5axQw4RDDneERQ1xV2PuKosbCjjMsBk5ByvVP5m8CSGgkSWCDt3oe6VFJNVr8DF3aP",
  "key16": "MDL8xDGC6bMvh8sFgrpV8d1EhgJ7PKrxSsVSZez24gjisBiRApVH9o2qDm5jKroHG37CUit1rPnVRT8apGpgwxR",
  "key17": "PS42zKEENhpFZEjcq9woMSBm7b32Tmzq1hTfAKvcRoQAcV5q2H7GNJe5XhXKc2cz9UEaxJ7A6wmxiKv9Va1ZBGv",
  "key18": "8e9oW8jLQzRbX6Q8DXLNaxG9iJ9yLCV7HshuatzStTKPeDyUHfYhCv5FN7wdQU5F6Z2sLzeV5RKDDp6f8PLQcpX",
  "key19": "3BAqAcTYTdik4Afs2ZEq7BFUWFKrsx6zNozef1Liu9KCcdyCxRTVtUUngZ7V1pSLcvPUrHHBTnwqxeDwSYsWtfeh",
  "key20": "3NLpo98BhcFA2TpMYyou3BuT4iTM1puty2oqabCrT4FJfZWfPkGzAb6NqbTUBRLxYAgr5yxsYbvQQHr4Tu2DQ7eV",
  "key21": "xHBTfMeX3qJXwtHonGrAarxW4aTRi4JMYYicQHfxPgpAtPi6MyZYYs7uA3pe5ktz5xEAp9S8M92rehQxMbFLf9Y",
  "key22": "HraxVZ8QZ9vsGL5cptcAtfigaY4NzSHH5kp31aiNH6ywjVsmkJP3qVewLzJ4uQMarpwUbarvZJG7qFtaeLa2RQk",
  "key23": "56D2da5eAJXGwY9h1TTCigYVMLwy6E72w6af2NNdu28w1r66ta2zJeWh65vshg7MFeR85wm9VWjCXyWcrLRvwNim",
  "key24": "3XNPhAcnirvsGGy8uiRbqyThXCkJm48m7NPbuZtEZrjpemTRxfC1fXVoM13PEWLdPWa4T6G3Hxtb78TiVoMn2VYt",
  "key25": "3rBu3tPyNCjEsNhN6NSwT1P9NvhMPKNmk5jvjEJhe1jhDvKUzhtH3YnSbFP4gccm4SDPqctdUrZxgtnu242N44WD",
  "key26": "3Yjbkp9xnvgDWHQA51xtPQutQHenHtjWc1QzrZSV3QTL697aW5N8catkLrqA4PvgvbAcUFSuNjn3gEn2NsQZDpKh",
  "key27": "2sdgVG2pGfkKdzTNTkWLZDceMMHE7x3gLX6FYbDMf4yfAtKwF94tThqDJnNCz6LBp4jVZRBwjssGFoGM9iBzX3pG",
  "key28": "MasMWZwQpnZYCCsfJHejZfqfgB1JMC29fYGwshEYHxyrF3C4fPQVw3wibSyoXpeYkzkTnQGVCGh8Pj8vHyNptvf",
  "key29": "2otMnALMxuZwX2h8tD4191DTZS46MYorwfMdGP1jKLZosqsWMAJfgNyCW9uL7LL9shmLzL1t7NUyuWyRJK3VJXPa",
  "key30": "samKzdne5MKV6zCePs6jWmT9sMmz9DVaWaSiyFuaJGnjEk29SiUasE5WNxgR55tA56CnVowoAG91xDQWH2K1sLC",
  "key31": "2dKbQuJgywYLox3g3eN7B5dWWtkjScYMAgM4Ue7iriPkA2S6uAa9MCDvgboh2mQeDvoj6sNDWDEfvxRsHEeFfjy2",
  "key32": "rLLJCJfosAcgXWBRHSniWZJpfWPjEc6uKpqwE4j7ZS5U1S6TuGhriLfKyKpABP2xnFWpMLi8HE1dVVBKNa9fyT1",
  "key33": "59vM4oCNqX4y8UGNSKcbBygzJSx7jrquScUZisF2zkHn2AWNextTeAGTj5aJkGCBS8QsGsrwtJK5LHp9NcCQGm5e",
  "key34": "5qX3qE7Hcnjg8r1a4do2Ao15wnmrFi8RT8rVANLj3RtFEhFcGzgvwDJdKBDzrmMfHPVBJhq1rbjLtVbBNpyZDHjT",
  "key35": "5EyaWZqwUZzKAv4LwLn75hzGzeGe94mE5hjHmA2UB3uuuqGouachQQULnikLgjK2yK2zdfi3kgNx6xKx9ko4vX9F",
  "key36": "SfVXFnx2daHjKULV4ezgQpu1dfQkTR5KfgeN7dLE8GeKXuFNxQBfSq97Eis6ifQcRwPU8dkobCXbsvXCtYRT5v3",
  "key37": "4WsZfDSAXmF9L5ry1hNHwWLXDp61wRRzGo7StrgAA2AcYet4oLsjEfV9woKjLA1eQuGQ94qdC4xt64H3XvBM4qJv",
  "key38": "3ruN8JuuVJ7vJ78n386fdeVKGMVaQQh4qFroDnBW1GfG7SNhoaNBYxz5jSrr2xJjxtC8oKGu96MLn9pVgMaHc9TC",
  "key39": "4ALePXyyqnidZ1bKi9B5svftkTekMFMkQbiF933KY5v7qXorger8rdjoEzbD75MV5FNUTBV5b7A3wq7VbYjvyVN8",
  "key40": "2LoR9scVEyyZevxrPvE3QSkh11kZR1xmMdJz56Au3JWzP3rivbB4STKziYraFCHGv2RHFm6eWH8wrENgxrux9A8W",
  "key41": "2t7a33qJxDxmTCdBPKyWW3wgvsSE57eZ5L3JUNsJBJYkKsL5VT5apHNTy9t3DaJxA5vGVTcSpXPUWEgFGdx5qFpX",
  "key42": "XigbZbMgZjrbeixiByLPdovJuzQL9rhSQwKfVcUNEu8dVGJT1cFgQuGqcdFxTxLgUKZ1xa5tfswgV3SGD7j7GUK",
  "key43": "5rEDXpLmzPrTiVXNp6nxi3iNuHjQxHadvxr31LRSkvD7UDqYDoCnpvQZMuWrJ8QLups2ANRkJVqE9qi1tavswhV9",
  "key44": "5ZEzN9fKgswueXhoLX5pVJvdR695wNixCAZaPaz7XTwJtfUJ8Na8s5Bq95pFoU4D57t7YRyAdt2iPRGJD9Vy9hyQ",
  "key45": "JC5HK5fpWCahYTDxxjJSQUv76qYXetWCZzesM4Td5i7xrah2nxSZ7RxRY1GFv69KXULpimaigiEEmwCZXLtQtmV"
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
