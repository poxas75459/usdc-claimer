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
    "4TyXkR17ebn7yrCpM7ZH25uNbPknFXUPxbjsg8gPc5MehnewsGQn21cx9vmzuabW3pDxMJJxJxdaZMEeiZYVLKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JS2MhYWCMfy3om2eoUuUiSiqWd25JWEWYYSr1byZkuzAwjCiiqvPBtcgkr3mGsD3EYjJpkN85edmW9Bp6Mro2L6",
  "key1": "xVF5PYHoDp1zCARZyvqdadqPBFnEPsAz4FCBKivH4XjtRu1ETY5oAuqwAGtk5LyZaAmC49RvxBou4F3uyVP85w1",
  "key2": "4CAXdbq8TEj5WGw5VvGc4pUCfHPkksfqosca5u9PAqXn96y5a3J8p1omJg39PAvz9kPQAtZy1cgHU3voK7BYEtGB",
  "key3": "2dbcnc2oYR4rim9RE5GMGiM9xr9fWoqhB6vekma9diEtThqkeB7jkmkE9nrNuF4dnGbFhcZ2aTvc4vdcqXTmu7pp",
  "key4": "yQPtWxusQBQLr45wAvNhtCib61FBMkRFuuJ83eVABpuHwBeyiKmXUKH9rs1AU2rPBy17PBAjeuwuGp8Ac9yHgpt",
  "key5": "62BhW98yApbxYfbhYUUdYShcXtvxpuLYEnEKvqMGTHQ1hTG6qfuH9sKComd8zv3SLL3vEgUdDa5VJeBy2uyWEtVm",
  "key6": "2XTP7TW5n3e1Y5aDq5kKKJ1mi5HXNTgEFdZBUexJ3Nh7NhQdwwwhPvkee7wat7LJwK1muVzvJYnLb5H6dFqGaxxj",
  "key7": "kFjbjjSeWeqJfnsdwr3otPPeTtVk3ryf5v4nbojHBcp2qt6ZtMKg7VG25NmqRatrEUHSigMgvboghZGQzUjomEJ",
  "key8": "2LSdPsT2aj7x54y9DS9VVdwrMAHh6iq5PHrSGEdycr1qDh3y3gDyZfkYguFeSWYDkw3DtXymtA17QEqxWBSbaJup",
  "key9": "bsJoz1xne1cqoJ6DmjXLG7cJKr4tdQPEbUbWjjjPiJgwgMAHoxxEFnKSVCW4cG1U1cNFsLhwcHScKrYyteUK5tz",
  "key10": "5HeUpKf7KrXXj1QYnqxY6a3fjQPNuSHTuJvLB9aP2UxNhDQ2FhmsWzAvUEK5QwWNWDq6HY7FVxNPBn3Lyw8rGDkU",
  "key11": "4MYhskRpyXx46xsaTNbXtmwk57JadQMWrencqpGnhxBbDu69k1USYvSx2J9eMK8stdqvvAyuuA6CgYXat9P9yGe9",
  "key12": "5x8SCrBLAahxSXdVGo8XffaTVuRuMPCqj6JYLLnczJdDMgPb3NhWkB33CJLKbH6qcCHLuJH8kxxtFpVEK7EVFDw4",
  "key13": "5qQQ6iuD1EXnxjfsPn1FMFXkp8q8mLTzDKbcxpuhZbd8LbEbiVPjq4AyKpRPfgoMJvUtSzaT3nWK8f51eo4Y1Tpe",
  "key14": "4ieHZR8Q5GZC9NCDuGFtwqqMHNERXgVbTB4p93gnGk8TSsgwcSXU4gwAjpboBreqxteTnAf34LDt2EVKVuSrVKJM",
  "key15": "4KjZcr9G3Rr6tkvxhWiEsb1CpieWG14Xy5UENWgJGg4s5BmuMTSLyoHULXfUMPU5QjzbwkRZ2dytYtqrGUBRU89a",
  "key16": "4vxGJC4gKdTo3sGuKhZgqLS3zWWfdjjYkDW7fQLqWncH8x4fKS6A6ncpT3k52Wda6xXnccG9ip1zR11yEUhmXcer",
  "key17": "2bxhKCK8fbxy7QCTpbpFqacbGGjJTrTYUEs7eHqQuJA6u2614PiGkPxHcUsEeQYUrfPbvrkA9UJKSjJmgLKjkjwW",
  "key18": "57h3emJPkTezSY9asSJPDd71WHkzDESKY8UWs7GSPLbjM4Dc2JTaydwJF9ZPif4fx4zPbWymUgY1GYcjiYcBJrfm",
  "key19": "4voe7zcZk8i7t4b7PasWhQ3MPbKX8cfBc68kDVgwAA4WCusTZg6WEkxEAxUkYanxm91LqBrce2jPm1SEbMgMyXJ5",
  "key20": "37Ltoja1x363R2eCGh7PUkqF4f3rPtvgPbf8YrB32tJhjkc5JdwagStM45nbGCoKp3auhdyR2spjjUxAhauHZWLw",
  "key21": "43sRLQWXx2bPq7bvxCN2gsE5y6XdGZ3RBUjUzBxQzCeBKZsbmgpVz53pE6fnCGgob9ev8YAbKvaDEBmEsEJont4b",
  "key22": "2UrsKE51cEHNZLMYy7avDwMsoPFnp1Si5GP82Luw2XU7MUpprh2BAaRDYtcf7L63mFNaRVfaNzteTRQob61FwGK",
  "key23": "5xiV2gxokXmNue2ofe5TFPY4nUUJHrxv4LJpAEb7Xw9SsSZFAoHDH5yCwKCzfHsbqvSthReWs2zZZSMeDw6JAe8c",
  "key24": "2FU7nqvHEtAr8ZFJRUvuGiAWXKMCnmP3gbFHKJMarM21m7w7y1DehxHNkxSiUEpYxvtu5nvWoDDmUA9C7155xXiz",
  "key25": "4FcVTmbXuz4bGSX5NXWKFi7dVezmHMVw2A5kRWApLmm3f9UL2Gvj5ASzWVpnBG8rV74NFBZ2X5mm51BvMCYe5qrn",
  "key26": "4oJo8JZuDQDoQry4i7efJvB8KSqEeFHhm9HYTamnByfSx1yHVrgjvknQTH4uY8L8DA34rFTRyebcZu2eXRVmKS1J",
  "key27": "4XKHXeUQNEos24s9Q3gsP4XmGrmCVt1bg89n4sHY7eWmcqg3ptBu2uefy3pJhdJHbfBYniJJq75wgjxrXsBGPd6B",
  "key28": "3J9KESXw84VZ4EeKSWtDKP1zfjpT8PMtAXgjVPBUbY9yQqPTHkcECXP7XsWaJvhvcWbyozgPFjCmmDuvSihzr2v2",
  "key29": "3WSoXLcFJ9DMsxVMudtehScL1Lh4buWdYwfohCtUCiKrS3zuvmiufhFqdrx4nkbbB7Coam6wWAQZCyJjcw8boJaH",
  "key30": "4qsMZ4Qr6Rx1rkYB6NM5Dp2TJ13kq7k2e75E4t3otEEStBS3JUTwUFLrzjLz8ykh8DW2cWbGzSpz3tzmef6KKSQU",
  "key31": "2Qch6w2iWBgFvFkvC8jqoUr9xJ1RRYYpTZ6PsivJPKFW4Ubcxhk9vrigVcUJrgRb5r9AbJgTe6KAn3WxmdHi7SxN",
  "key32": "fBwUjJybcMpu8dDrxL5zy4q2mtwCHdTsbNtDa6y7LQtZaF7Lskxi4zoS2vdVpsdx7V4xUrA1gBv1QDuZCPwWkGQ",
  "key33": "2SqDUzw1xZWjkFp7wG9fGujoZGPk33FGrrnM4dT5qU7fSizRvNJe3547MxbPKTxPfXAwz1LFNKX2tRcwaPJtahtr",
  "key34": "3H8z82g7xNHV8ZF5WH6M9bUXJEQ11QpTnMdJPhf3fWmeP6Ad5r9VGcXqV57AxRQGTsMJ4eRPrKeJyHGiwBP5Zcg1",
  "key35": "51wNDoDEzquvxBMhiEkvRYiYcM4BPCVwrrhQXiGBm6Hieu5u2KtsPiVMKqA8rzoSFSPCKXTGkvUCoMKeUcm2hBAH",
  "key36": "5gcidSrQDunNi5Q4kNXHRTm8QEorBApGtX617NcvHMSPnr6xWZSG2kgBiJQtdg7ZrUsQJF9cjNwDv2rNYsDePDT4",
  "key37": "vBV1yL1Uj8Spkb7mgA3C18vWTwaW5TDhsRY63mkFDfeba3MBrwYvpLzHs3niEsD6oFx3scGRR52Gqnvf8YZ8Xhq",
  "key38": "3PdHbWeWv6k1ComcZ8nYqZShppprce9YC7t4EECsQytxHvJMeamPN1xABymz3GUi24SQgE58h8HXakMazuPUv9zR",
  "key39": "2QsZwNorj9RzSYJGAEWxc5wiPFfajfXYDpXxsrPLxRKLQi6vq1q5QqWjTZXVbBJEMZTZVPNHXYGnPJCCfLRPaA9P"
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
