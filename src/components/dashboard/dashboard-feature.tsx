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
    "kz1gUsX2g1QbiE9TLMbMNiJNwqgWhVVVrJKYfjBsDWp5PyTrd55rzvMd1R4SJEWGMDt9PmZ1dC5bXJgAYCxdg3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYct79FJRjK8UszyQEVumPvcUkY1QxPEDgDTM4RDEeCFZ29DcvKEYkCNHovcrMwkTjgfmvDYYb61szVYK4U4E4K",
  "key1": "54SDkPB69r7FTM3C8onFW6QiUZ3fLCwZLNQgtdBp4B6gEEhnEXEPGE5qkS67Nu2ALhbAK1XGJepG8XPCaxVEG4k8",
  "key2": "32174bPthyixdqTsNFbHVZfu5rdFL5bzoaox6Av9UBFczoBP64bt6oZXv6L7fXCrDMUfXi1zjZavX59CZZi2p8yd",
  "key3": "2jTvPfLthGmZYRVhbJ9Lw7qkFeyz6M6MzfCU8JF2yLUuw2gd5VkS4L62nSLeNy49jy8KfvjGNSGTJup35K7hJhxY",
  "key4": "3RxbQC9sMJyXpkJFgYbiRmNfY4C4ko2676KDz9SgvN165TEXbn6pekZxmpP3qrrPD7UothWipTSQS7BLSYoQRMCD",
  "key5": "RQyjPhmtKX4DgPjB9V38bCy7dkC8FU9WHjCxACukcwAoLU1MT3kp6Dcr6pbX1ZUAkYKZfFqLPVT4efy3xRbYF4Z",
  "key6": "4GMQqDktCt9xT78Qxv29egji4hepgMsT7f4vLhhdxWA7ui3ZVYmh6MTj4uTCZyW4ema4D5HZLXUqCukM4qZvf7nV",
  "key7": "65H58DCcTkam2WDqsVbA6iVq12PtbWfbhKTxUwiAD7iZeQzdGBysZUuJo4gKyuD7j1j8kHEKVfGJKkkEMMS3rXyJ",
  "key8": "qrYNo7bTZEBeyPSJaQVzCjC8thof11Rxh1byA6SHt9seGd5nPcf7w4QgydEVux8HNu59ovjRdDbXpsHspTC3LGp",
  "key9": "5ynBaeJQ5EGCAyLhvJosVSEdTviN1yKWcASjzEFz4jts1qsnbvkKUbPvcs9zJeNunqZJuoz7hZH5pN5ekjEhuRmt",
  "key10": "3svJaW6AifhczwrtQ7dJwPUURkt3teMcEhj8RNhv3bGfF29cxNoRvVJSQ4kgHSDL8doDPagBrXb83dtZb6NHMJbk",
  "key11": "3tAU28yvnCjcuQb6JXUYGPVNs4puZUgxk6fg7Psrjd5y4LmCw1Z71ueaooET6MraTSuiHvbAtjRag3Tj3qCjweyt",
  "key12": "5BeskdXXh16Fq7HFHQHyUczcjxKDwagCCUPyYm4VF3w5mVAEmNUwyqwe1kjVCj87ef5sAnd7KWVcM98NrbT2jDVi",
  "key13": "RTW7XnnZSZAry4rpLDTEf614PWFGV1TvF8g6gYNkZ8XzksQ8jFQmfbMARPYPTCcUovskgarbgeXHg1sJTWD8XRa",
  "key14": "2g7pfg4NDnBgmxNxq6Bpxravvh6aCQUYFvwchNijA8VT3fe6ZWoFzvnJBtvPdHn8uPuVR1y4dRfd5XskMeXarFAF",
  "key15": "2CRd1JMp5n59x4Rg9PHfwYRRNMWE9bpQ8cfM2nFqdF5hosigtcyytkhNm6UVoy4uQrFtDab3gLzmnecrKDsGb1zM",
  "key16": "uLALiFLracu8o6G8A9ts3grY7jvyu9j1PrhCZqUwJrxDw21LHRGocY2ZNJhsQpVb996t8mzrxrJ24Hi16eAfyHL",
  "key17": "3iCCuv2qGExbZKUaRSrcUuDHyKcfWqZPt1BqAhL4c3wxuNvcba3c9EbcrSKBMJ3Fh98Wnn7bK5tsk9SUpLru9bRa",
  "key18": "2m9bH17Xg31jJiprokBTjJUjnWE8faRg362yVpKD3jWMeEKmH3hWepu4nJf886aQMdbSTG7wh2XKCF4jdVLxWHbc",
  "key19": "33yaP4KnNqtun69A9WpWYoesAcwATUr1jif3cwEboZJLEMmrvDfkY2Vfp4x6Z3Tx58rShesH4mzeGHLjHZ6k5MiX",
  "key20": "4oCWnJmfoCYydKdSXuzqse9oDTdJsADA9mr4gjXyiJGDsbHJDAMGi2JTwbuLRaN6H9BmB4GXNaWgAFF2FaNZNf8F",
  "key21": "3w5WuCCaitiSUgKBK5VgB7cUpfoJrQUa1o1f7My23vxSF9EqweuTVbi1SCRS2CgqxKYA3KXg9Y7A3DyZ9SouzxAZ",
  "key22": "3mWpsB4Vz6A6p3pkxDKDEsmLErMqiZmr68aHbLTaYkdVMdXtu89hx4tvXpLzTXy6wHG1h6FpAiJ3YpADGaHUjwwS",
  "key23": "23v53T6LuXX4Fsv4rzR4cWnzqQrSsnMSCkizvdik9JYgraHHpPtE8DgbaUa28c7tmNsCifXmDcNEFGG1Pmkh2e79",
  "key24": "4SQz2qgGztM4LBhwVe8Yn5uHkt1fSEuL7r1moGV38EW1BEMNHFsvbTx3GTfjKjnF3diUygzPv1JgxNjVTF7K9Rro",
  "key25": "7WxYbHAGejXVSFzaSwkyzDg65bTHLFpjPHpLGuBDRYzcWmFSLbx3mPmWuCAuoXh3KedyrfP7xQfVVG7eq4nukFC",
  "key26": "2pgxexLZcYHZM9fAyD3KXJ9MeUj8p9hyebydJWvUYmQct1X4J58tLnagzkPkfBdAc23jjLRy9MMYavzzZ4CnmeLW",
  "key27": "3y3vNVD6kfgbGEpMC2TjXZLLzU15FVW5cxDAhEAS6h11ycTXD9P9qQxPejuNN3tC9yxHhHFDR5Di9KRCw15r4QY1",
  "key28": "58MTWzt14yjaqhxRCV9UJEN5CzQ8Jt5raCxXKtJsq71AqB7vbV4aK2DzA4ZtWhBEQGobXa1s6EeCLbwgoXU1WSGb",
  "key29": "639mrS3s8A55o9nwhAHQU5H8UF453V7FRqeBh4LHBP59svB2TBUMAqF2V7uzeX65borYnqzvzkU7TftNs52i6Puo",
  "key30": "4G4beb8tSDmnqgx85aYQnBC1fGDGxgMo8onvAnUzdnAgHgWtbdWn3vjcMMddaVnn6EfFmWDEP9t5Zfgpi8jbctiD",
  "key31": "5kcsNkpvbwUVpTrjDVGUzPp5w8uX98qsMuSYZn4x3dJ3X69sXg2P2kitmeP6n16w3C2MS4KMZCy6ZoRFgT6MQzvs",
  "key32": "54EGKNCG6U31DzSsspr96as9QQss4LLBmgpavo5uLeYYRVGXnkE5xc1xiSNjsLKz6VoVyiShLJfZctY1YeukWe6z",
  "key33": "UULotUCwvpN6cwV1DPGc6ZtujL6aDcP6vDDueRTLLjn58u8zW2ARyaCEfD3GZf5gnu127c4FPuLgvEYB7GxRGzv",
  "key34": "52hhNbczkGpid8tWy2s1Zn2sfy3cJnyMPoVjJyg4E6hGzugvGZJuVAHNy8qiNoji6GmhBfQib59VTAB7Bd6G8ZLa",
  "key35": "JrWuaW5x9nqnwQd5ceRMGw4Hqb5NhyPCEUDYrp9txCLKReBABgiQNBoFMLq6qJwJqYCAcKMhmcUbRoL2ZbzojeE",
  "key36": "2PyM7bSNsmYV2tALbhb4hLi2rjJ1WPm7fWKJGQ2GiFSgp91szzX19ogo6rGwTtwMPLGJYPyWDjNKKvM4RRiiMgNe",
  "key37": "446ENh5SFiNPjnaS2atWdc1rpKmSn9Qm5cYiwYLW8XmVF2wgb9z3j8xZcv1Eai11id18N6GHwSqa71fsvutYCB4o",
  "key38": "2dDHGXrkLcgKvDYA49emQ5Quuf4M7kN8jAnnXc1DqJrYhDv2bKudkRngakrp7AkpvRLp165eqnD3YFbzWWxT5XFZ",
  "key39": "PVRnwZ5DuF4DQMt5RNNeBqZ4St6BAxuN8oY6ikG5Y3LQgcmWGy2dUAdgLZjYzn9EGgzACxEdjvcCSH3Q8gs6iVh",
  "key40": "5NYBCr3RZy8a9vKnZRzskVuP8pf93WH9ZRyBk1d577wew1xKT9Ri2z4g31eKAJE5fbS3H5f4xkN4M9q4eD1voyog",
  "key41": "bb4ssUUgshBJ7jqD1vHAGbi9naUekJrwjyRzD8r7EVLXrQFaqHuSDHa7jac92eFST7ARmwnrZGcjio5F74oK5kC",
  "key42": "2p3LjjQ1xKRqVTjiZaw4bUsNQoWPF2w3e5TeT6s1HtQhfPxeh91PsNMNYbvuRJxydpgEmfrNTciNDSXmNrf8ptcX",
  "key43": "291KDDjBNgnP9hnZbRRkPu21DSW7foMZQbhAXC1SkbqsA731yFawd7n8THurHKdJu2aNdF1SsqsMFx7BtASkD5B1",
  "key44": "5cPSmHQ4fen77noVHkfwtPUHcWGDgP1qR58cyjsypmztUGmdQ4zgV7GmAFNtxiDF7BVexQngfHr4pBJVGw9tWWBv",
  "key45": "GgpjuDou42f4Tg5tZhAdBV6g24d6Bvyd6s3rW79dSQkMtv3awY61U8zoUdF2T27UxUsB9BQF9kHzjsXj2q1SPr4",
  "key46": "bXnD8jg7uMnKuZRfsxqRyw8DhCe51R6cAFvfPVanEvGZ1ofnxp1iK2K8WdwqpNuK8edhuJFPaWUhBuGfth2ZLU1",
  "key47": "pTv9g2UFuwNDSRMRbTnLuicFkDyiPJQrmeTUMvZb4dVqSiNSWQ8Cw9CS95EGibvWyfwoN2sJLEeNNosbxstiQRN",
  "key48": "5ogFsVRgp9AxDyyjyxrRMkzrNZR2VfDZT6iwXjF9AecZi5TeEHYsPYgVhFqaNguMGKqVgpF3KxBq5Kercf7geogp"
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
