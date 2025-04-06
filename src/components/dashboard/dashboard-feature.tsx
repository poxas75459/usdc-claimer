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
    "3RUj832o8eMEkAe5KgPBMf11SvGhCFRE5fyPdyZK1Am9Jqg8ML6EjKo9qWtro4izys7smWZB9rYZ5Lu81g9VYebU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TBp1sS9YPWJNAuNZNsJExjnbNrsUaWmbP9CP7sn8AegUkm5fAemMKVC5zZT867A5rDdKdKay8x8j48X5SZYZbRx",
  "key1": "3XrwA7ZTffxQeuV8FYz484TG58PKWrRNSfEBV2DEt29kYkBWKss636FgHAT7FPmiao4GuPLVmUPEL4CmJZQsQXaY",
  "key2": "3EZuBEkj6UFR8aJx2QdudNFtATjr9oDomwsRRZ4vex8HoYKNUXDhKp3rQU4kpzBfdmWceU8ibXwhdNXueFtQLRGM",
  "key3": "FY4Xdw2HUeQYALaYzR9zCRf45YE4zfPyTyoFg4AaXfdeByhivoFeakRMwowMc1GrgFzpL19LKFU46HQVUfHpVSF",
  "key4": "4nGfoJZHT6ihdnM3aoCT4eLiMKPiFiREcuaER8gLNGoB4PVWbbReC5FWZZvnJfiNANXJ2pmj4z2VmSxvHHAntJkn",
  "key5": "4vvwzoAZdZBKeEeC7fQEWiiyQwcExsdz3b9AGLiuLR5aG5EByBEdQq3ww3D8LPyBqiWfhymnFrvbca4z1ueLbzFc",
  "key6": "2FbfyR5UXtdf9xuRnbVNCxi5jC5rYgx9GPiypWDTcyygMZ7jeuVRBRNH8D2HLmDh2rJ9wJ2DzCrbz2fkoZoadG9W",
  "key7": "2AXQRvWjGXncXoUe87iBpaaBooAhNXB1YsMaEJSXj5kPZTGx2zg1mc5HvBihqvDCEgTqkUiSZe7E8FQ2Fej91jwW",
  "key8": "XCsB1SmX7tEpMQG9GE35DJfNRkEBLq1QsaweqKVuy87Bh3eaYXdjAhy1RqVXcjSyroGNRNhc3KvVjfuuW2aVYCD",
  "key9": "33icSG4zZ6tn7gNQ18nYBoFx929dsXizgxcJPKUT9rKpp5ZfXqWucHHC4emFw9ATjSbFGEvYGvSSqcRTwHNBHhpg",
  "key10": "25r7vZ58KUp3BMGbzjoXXUpwKR8wvTxG2eED5V48PU2LGJSFnyon5ZMp8XjxuvX7S5eWo8Hjh4JhvVYccyigz7uV",
  "key11": "3zUoiZADRF8RE2CEp1e3rizTrbjusqZhwKZNgykdenkjAgVNcwDgnXb4PzDpAvWHYAfLdtVBvE8hf5NdRFbgPV53",
  "key12": "58zhPW6cma93U19xVW8sya6Zqufah43JZj6xbTraTiYqxLmY6bwqx1DwJKLSBs4JA6FYcXJdbcGsjft8AtbAAnTy",
  "key13": "YAeTU8mHkNdCS4vbZDLdxB8HoUAAkAveoiaj2j9JB7vq6i6je21nDsMCnEXdZdBguMNUmqAwPZo4gyDttv6yP6M",
  "key14": "4NBKtkfbfCuKVWaGefeCdBoK4LnCaDYuD6vi7rKGDBpCGk3wBHahjEp2FsdVekZiXpiK2JZAsyWyxHsYRHRWAdVQ",
  "key15": "44gdUTUAuwFKFPM9VDoDyV1PbxCAgiebGHnPbekZQCtTfjaAvp5orWQgbro39gKFa857e1GPUK7CFL7yiqSfMKZs",
  "key16": "5vyb4cXoKRz6UYXGN7jUY7ja9aM5rf5PZZkxnTfzoTmYvib34M9DoZQwGKKHhtCGWCM6NomaPLEUvxo8R6dAzi3W",
  "key17": "52XPNnJJgQpFqthUQBpRGh2Q4nXVHN3qfiakzDeMYr9UsGpGvW9V72tJsikhfX1QDYmrJ5GhBbjUQFvUdPMk4Dv5",
  "key18": "gbSvdmcDMk6U8hinBi2SmKAnQcer4RaErnZWTpiPoEuJ98UVswxJBRHoq3v4qioStrXw2KVz53D643aR2fTGYty",
  "key19": "TdCKKTTj8UAfCTCJw8qoTpRi5iiWs9WrVhp4CWHC9jpoPfHaCZWVtQNbFSdPG7xQgha6Boi4m8CfwYMFYBUYrLa",
  "key20": "3kiFHfdzBC6tgdnHb8zbFPYwgmE6deiVCizXvxh2HdCJAjdDuWLwq1pPQ5zyM9pCammb7gmnf7qFhL22pr1cBbxo",
  "key21": "N5tiGMrFmyfJNtHHGMhbZRqTd7KrFZzW7LL9UFPvzCSEyQNh69KW5og9fS4FLfFbhFaRco9R2SKhKu2dvuiiE3i",
  "key22": "5oxiEYe8nfKsvgRvhXvrybqznhjkhAvCGNqGtHNgrSp4y1u3XUGWL8hMnfvjrKVg3oyiXUjRk1BDz7GLP5njUvk8",
  "key23": "4kxGrBnX3DUEguGK5HBhSEKhu7CMxpPjMvyXfzoG3uqomJSz2fC9WUjeEavrz7NRvsiHb1q2Hsy4iJjQpCqKKDPm",
  "key24": "3JburBPCePnFg3huk3GAcQoLe5MxVoPkq9ynrrYq4L13x1Xv85d6Sna6B6mvHnpuMKfYB5p22LookTpGJte2CKYB",
  "key25": "5ikhEeDKYgMhw1TzszudSPJ1QPpJFvzqPf4YeCgubyY4YZDAvuXj8HfiLVqZLzjQNDWoHERHbE69kZ4qWHihmPcy",
  "key26": "32GczHjmp4dsHDNquBkxt5mgrnCH2jEsyvEDkWiDwwpcR6nDw58vZwcNNZZnHjeDvmc2ZZd9LyJRPXDZ5qsXmtRa",
  "key27": "3sQM3CB15amaxqe4gcYx7HvpfqWeMut6VJSHSiyhpvApiCuuSNaJeK4hzvkrhDiZKwkJGCQddu1nLa6RXKgkqTW5",
  "key28": "3YBn16Af44EqjBDLm4866TboPDm8TPEnrgzaGhWLiXhatd3VLoJXyKArnKYU1WmNNfnpJi9rfwb14jdtxqddLVCP",
  "key29": "34Ux4s7CxRB75LTbFr4FWCQXPPHXTi5ZeF1Xt7sTPuso72z1m6acWiqbp7LCo6YP1yd9N9kHUqrAW47JxDwxyx26",
  "key30": "2pddqtLiTdkxQY1yYWcALFsLYPfS6xiAEUYV6fKpMREsfVQ4j7WLZ63crEkMYSmLjyM4atG29xtqQaEy6haoNuTF",
  "key31": "3CoMrz9gSXK5H96HvmWq3yvEKLZWv4ah93Smde8D5UWA7y6dmk4LiAPRUSWHhCfTASLMCYVQ8qub3CRzHxDiddff",
  "key32": "61gRQxjrgN3E3Xgyv79GFmJjZk8akT5Tj5HWEoSLtB6zA9CvCbTBmxdSM6rWX7X1bxrSp4h6diRqXw1dqLY4fs7g",
  "key33": "5dFEqmUxJEDtGrvk5wb56fHeyuKxJnn8WM2Qz6kipFLrpNZz3cg6B9m35cuFFZQSYeAMhgXS3siZQXjmeLh4YUJP",
  "key34": "5PBvxYAdeY6yT6eDxrkj62115YdQGpUkqhauHXNvvpEcAgG3u8n9pCPneBh4ihAUp9JfhEnp3QjSKhqKSe4Y4SbX",
  "key35": "5W2fEvuspkHi4oVBFeHoQY49gzQsWfwTTbjf5ydQepnr227dKrvhK7XQyYzNu5238VmmbNBGNhZ8QYX14u2vvg9x",
  "key36": "EKMYcxDv9VM8uADFxDpzva2zAqRB9WetHYtetRtT5WDxxccqGzrKbemDmaso1jsKjwFiwbXPiKPQhEuv5gYGqRk",
  "key37": "4hjKQkCTtRCXHuME45GMTYqx7WisECxFhYZdtLbVXtdFp1K6LKkd4fv4TvVL1UtmEh82mLgR5jeqR6PTHykGWXCs",
  "key38": "3tUqx57sYQ9jb78oLtmuBT2yZQx9aybvT779JrV38NPbw4gWuUc2UKSmZMsxagFEbmKjrhJWFwpJmZyJKV3t3BaR",
  "key39": "2rNeJoLRjgCPvSfxLZhembR1S2EiHYX7oAjgrNotGxnTze1jDsBhkP759PM8qFCPMAXW7f2WC5AReWDxZVHWkUPW",
  "key40": "s5AMdF6dEHnGEgueVgQQ7uUWP31pRUuAVc7YAauwEfVJpcmLuMCteqzPPK5KLaKCpLMaCrDptJnVfC49jB5nte1",
  "key41": "2PkwSARg512V9tEsjctSfDFC1qDwnNUgqcxMmfmoo2MknZeyoe4Er5wgbU6d53QGmsAFV927JFv9wLd54MvTqv4F",
  "key42": "2DDHvKQZkU5LyKRBydN1MbKNwwTNyS2eq3ePJkXLVHPw3oBzn2CvveEk1JNVeAEERKBzHBysiG4F8RVsKxRzoPh",
  "key43": "34rpYve8r1vxffZxYzCYC8AXAgbQatxmEZ5TRhZm8XSVZWxGoTtXT2Q5ZRUXGJiPRGzsiGizJ7dN9Ejv2LDR3YSq",
  "key44": "64sAg5anHXnv5c6psq3yYn6uquUgALZyfdPNdN6672bPUb1fHdKdrgSeA8ApWLimkp1pZzwc6CgANwCiD4qvxTgW",
  "key45": "4Ei24aoJQEFjVtp4kspjq3xzEn7buoLNNNqiKUmQQZ5ozGMr7dyxzX7GL7aCWf48XzRZuY5CBWWFuLswby92SNBR",
  "key46": "2NQdJLJeqPGyK2wwTMTMGGSryxUxh73nHBe8cHVUbwAU8pzo4PZPXGBTTbUpA81Mwx8pAhHG1SLqkh1diwpB9NFF",
  "key47": "5uMSPp6x7A3hjumYYqk4cQECu3HG1YHgvMiWuhjypSapcgopd32rj4eQRkwYWfNKAWMzdjvb125hpBYQTF3BvAMB",
  "key48": "2NP4Tpj8mqDwttNAzA2LqHDKtzY3AxWZjZHVer9phNkSQmCt1VRqJXaAMzJ9NiESZhTei5EUb8Vk6WeKhvJs2nYS",
  "key49": "5gjGigxF7RG7S3KPD94dpCSNu4JgwY4kWkYKXYSLDHn4sDJhP2BmHJRQ4wsqRNsJKyVc7zfxcbKUr7sFUJ6q8ySp"
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
