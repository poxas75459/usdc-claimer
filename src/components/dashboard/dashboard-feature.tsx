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
    "2qnUx8dXUmezKrwQ6jcW5HNgb6mY4cxJqGhcQUB348LsDKn8YXDCuqYiQzFvcn6G4HZURe6hp665iHxpzVD6t5dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PgHcJcemJvFAYUbHWsSxKgGbfavCMkGcXVsAyD7gZmHFmqAtfsLbuncFtLHjLMU38UiGcanNkNijQfv3iCJmhW",
  "key1": "5ziXJSNcvB43AH9xuFnvttXA7w6zQYs8f5HxAS7tN2vEW1GJTofcvLLAzuvdaTJDaMfVUUr82sWmfvSZiNPu7ViP",
  "key2": "57B24ExXqvTEgRuWMpXk7o2VnAhzkp9khDdNczMfaeDkWgvFbDdLpLJ8pfGCUUA2hDzwre4UuSDdWB84V875Xqim",
  "key3": "33WLnzmEfk8N7UJPXxeQqzvAjXefkFDb7AodFzRZ3A9jGhAp35XBhsefTMErMCvWic3ApHgqak4fBFcKhVvpAmuv",
  "key4": "3c1iXPUszwPCKvP1xUrj9P7hw6fffDZdPGb6hkcjySRYKXwXhndGhtCN7N3FDimRGnKLa31sBbY5kYkq11kZvh1U",
  "key5": "4VKL9JCLmedjj8eyPUjiVN8jPvDEp7pPw7J4snymE9jWeoHbfRWK7kdndSpgE2t1EkMinhh3DvVFmtveRVA3StmQ",
  "key6": "5h1xShTk3s42NmA18xPguW5tpdsBQdxZA2MjLFyhDXvs8Lv4MAoiiexfTELHmprx9QsaMEgwcEyALdR3TyAjscRY",
  "key7": "4uEAzKw6QyGiuRnYpg4sG6yQ6pXSUoaEDzj85oL4ZrtLQWSJAWo3Gs4ei5zenxeC9mLgtxsp6omJy2JxgaFMabn5",
  "key8": "36GswtBue8dmQH8uTECTiGz5zS3bSfq7PuaS8zhJognjdGE2EpHU5b3Y2cJVkCLkonvrBpWExoY9LKnbXWbjxGzt",
  "key9": "2XNHUPS2vSbHoNxzMwyMjnVnVm7pWaHu6YLfG3X15ttgNsBVEq7C1VCYKdy8H8qCSKT3EjyuVPFx3JDgUmHEo7WK",
  "key10": "4P8bTr743kPSeWkCnPiJYiLTLveeTtbDXknbaSL9RVGcCpvTBWKiPBzMCSVRPVsz6ofT3XLN5cWViM1wec564GpN",
  "key11": "2Cuis7AyTYA2VtsuanLVgtM9vD8aamCephrqSe7vX6aed7PVisc8kZf78Xfg9rKntfYUQJmodujP82Et6bfxWdX2",
  "key12": "62parPYcSCf6xN13PwoNhX38TeCRDWUQa7VtS4dqGaYjgBjeresrEg8YCuBiuALL4NQNZ4oGQRuKi1k5EPiKjYG4",
  "key13": "2jAvsYm1H7GD1boGrTcq21erNmrsh9z52pTYjVZYxXdF2zN6UyKSLnkqDgeLPLPp4FJzbsarwLu9xyKecwegmCbz",
  "key14": "3pcewrFYPrTL25Hmx6HB3379rrGmgqTBW9qNQ5w7LYGMcZBFmAvzdTWFaF2euMfeDbcXt8EyvYaFTkSTsR6PckFU",
  "key15": "55PCifBLZacirZV8wnqXeLR2WNGM5nTfQkz4KAmXhmuFiQGBgoXLKwSxmhEWE8M7oDWPurDEdkVyQFJCuXoNBJiW",
  "key16": "2DpKPoC1RiKTyvoQutekuh5fMGBEc6uXQQwcx4iv4J7UCYfqCxNXP6fqJ7XfmvCXpeXHBgEDbsCkzfcsqGjNSBsu",
  "key17": "2ghFn5ajdFHHttDBVUYedkVPvftepPhpRAtjoP9PEukLBAyF9YbbdeS44KFUVqsD3dwf4htRQm9Laoiibtix3mMo",
  "key18": "29Q1LbJCj9S93J7vPhurWo7uHrLb9hJSdaDN5Dutcz7JTvaBrdL85rhspW6SwKq7oh8tYsAZa7QWZ2xNvhMxZfce",
  "key19": "4ZQ7NzLiFDfVQs4Z2WDhEnHyrS1GiqGB9K18KRU3SjQ6fbNMU8o5P3BAm2d9AjYnLji3FPo6wip4X81cqSSpntJ7",
  "key20": "4L8gqx1icMPYE27EE77ZUZPHQhusL7s6jU3quHz4Y4xe3wVWx3qxjPCqxqAxBSA6hneTqyQyi4D6n7YcjuwuiURN",
  "key21": "bmMrECKPxxZZSGjvrRKgZhYXkL7evvirFhNvZshfpyW4mPhimWshZvLNdEnTvgQVJ4B1djWZRzHWU8JbSUKKkb2",
  "key22": "5ANBryYh4adcjq7jQrX1fKYe79SNh3pj2VKqPBCL4z6JXYePnpwUcn44JGAGGmUUyT77xmnKuNS13ADzKZEjnxth",
  "key23": "S2Xnd6TiDMJbE7HwB4EckqDWH4Yd34tfQFeavhSmfoWiS4D7QqSUd8pPTxchHMpqaVPc78qtMG5GEJtYUjTrAuT",
  "key24": "5HPY6QKupc2Gt8x1j28LCezo9zH9PJNvPincZE3SVUyv3KjyNJu6MR7aqtpyEodPmys5kJBx6g4SX9Hd54wSUmeC",
  "key25": "3M6kSv7p6QdAnn1srQeEAHQw4MRyT9YggMgk4ndR5mj6U4agTNxEG55BHgx9GDCFjLBXBkTRDgZ8cXYa4Ex5BheB",
  "key26": "CGD45QZgqZCKX8cJwKcSGcuAKcExkB69R9gCZhzSwWTPAkseABps9jRXfMT7jXXz2SwNu3NNby41YLHHYuwKAJd",
  "key27": "LmfLifepu7gaWtBP8b7uSnjRa7BUTG6egqiqrztWzLNKysNjHRSiQjzgYn61d367RL1AKFeqcPcvgkryyc3CE8r",
  "key28": "3SERsX8uZkPAeR5tUUSxRViavs3pox66ws16iQK6v3richVy9n2JD2oyp64evwAUZXdwNoGJrzp9kLCCeqdCE3pt",
  "key29": "5HqEhtUD37SdRZx46bq78mHFzfX6XuNdwGwb6C12UxsQUuWKyDQPKJ9PyNGZuhqtWSPnFvmjgKLU9B6YkR6MoV6j",
  "key30": "23uU7cT6hczPpQGQrjYMcfBSWXetWb5Vr8CUM6iK2qsXY99npr72vVXVkwNpPciDSVfKNd6cmnwtue56R1ZAWuXx",
  "key31": "5BWQVH7p5Z2Ame9oGP2zg5LsoMWAywiWUig76sYyFi8nj8t5h7wWrBpNgVF12tyD7u4kA3Ji9hq3B4tRW1EFxYWD",
  "key32": "3mQgam3Deynfp1gRZzZuvCMh3GgdBNVFK746YwnaFV79LNVNtvXnE4qRLcaixojGUE6rnc3Sov3snX8hqZC12N3E",
  "key33": "2QL6Y81fRayw7B5M2w5QNbtZEuMTDa2L1799J5EViJRLRAmGgi6B4z68aSExGWYgZLrUXhq2378dHuT4MXNrRnJG",
  "key34": "46FWQ1ptSABLK2GP8xGe9FvKsyV8rmHiwLPxdxDbus5VUDuVPhDykBox5P1RXNrUJXvQGGDLyiKedysDH1tj98Yh",
  "key35": "38JsC5QeAHWrfFj7y7syqGZvXhy8oCkS5xK6749h4HnzEJ8vJk5fXWvg6GthktMZ7RFvc8XJsSxS7MFuSyu39ANH",
  "key36": "3PAtJwtsgDYeii21mdhUxhpuEFKckgVMEyLxy12FRSHAYYLtavhAhHEyNChSW1unM4k91QZGVVMn3fNjwKY7KjvR",
  "key37": "63U22MAnnXhxQz3b2Z5BjNMXFQGaxsfoJToLnRKsgB5Q22bbaEaTTnYyJjhweVzp16ixTRJZp94sFhicu9GubFbR"
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
