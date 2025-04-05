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
    "5S2B7YGsDdpRMKq6vNWYFQcJbhxS6Cv4DxqvCrS7w6ZwfsptmGnXoCYKAfoo1GjvZW13h1XFtwZ4QrwVfUsxG4AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSvc6cgbfNqAazyAh2uy17fGeAH1MZyYj9mamFrozmnu3zH8Kz3dJ7Mb87vGNJoN3gFAscUW1UwCAdDGoWZJrZt",
  "key1": "2CLoXUSztDppw11ovH3Vce3a8tsrSrZzj15R3RtPpyDzpS2BzMFz6s3hTjhkaeSKjCmc95BVEHEvjHo49dhTehgU",
  "key2": "3Rb99v7cqLFxdhkMMDd6da6mQYHuSUsDT6nUWi5ASh2q5cu6uUmsxQEJqe4kTFcUNzwn7cpZACG36NG76BKBGWWg",
  "key3": "gQJhKiFC7amhGAkmvbaTDKB642Z3pcEXSs8Y8jzwHvGAQWJVreXsbBwZ7hDQ2XHHLUXwbnGtJb2jaw2e9dn6vMk",
  "key4": "26ArTCChucN8r9SqGDfVKYu6Wyf4hsfo2aAHpvyk6GrZrXtpDou6Ymsx1xLd6TLFwAxbaTVudajWkTF3knHXFwW7",
  "key5": "2KcMvQgf25utXMGaUuWXzurdczqeqQ3ZXn1pVdfrd6QdpG3EoHHJDNiFdQFL5cRft4acUpdjWkY8Af2ZGdGaMKLu",
  "key6": "3jTQJkXGxsoM4Jra3FF6z1NEjf7jg5PgEHwuCvp5YVWvLhJzrqGqDQVBoy6BA4CWU9iwWsEj7pgwz1SsF6UuBrRA",
  "key7": "5crJ8sgsjQa6eiNq5mrTo3qsYbQFmRKEAnA1ALHf4isXEQvzxKYqJ2h8BJpPCd4edEvqAoyj2ieybu37UKXW4ypp",
  "key8": "5yDQ76YJ55pcEGTPRYXSaiXx6XtsDH2dR1jLA4aRdSaMEdhyevaSDuN27Jdqt12Qbdvtrr3Cy5hvoeVCe3isTLt1",
  "key9": "42gQtEvmdJBmwgG5uXW3Kz56zv8dLWUZCENDsogPNzPnRYVd2gc2Spvi8egwdYdHNdyrQSzs4NLFzQqfdfPvqBV4",
  "key10": "4GdkQJgDkjanK6VDA8xr6kGEW7xAsQCxBXxb65iq4G4e6sunGwtKi2NykyxbsWVBLi5tRy1bejsCGw7N9sT3FjHk",
  "key11": "82To822oWgneiK2qDayDWu7iYGoJJsCPr9M8fhWjMDzrR3SdfqPhbt8Vqd4MJvqmYJC66EoWLfVWPYdCf9N2AhV",
  "key12": "2F5N6GrT86SJTnCEE5muXki1rNyreW2zy2EZDazyqf3oW7veDJn1SpVDs2jFEBh8GaA8Hg3PvfyB4edmRR9udmbs",
  "key13": "8hWb7yfprKA5mvqiFck2t6T724ahQmVtLN5iUNJEq17o41ooLvXjomQr1W46pCfTEvbqacjYRZkm1PW2w5LmGma",
  "key14": "5B2Lv1hhuh95LZq4uB3GEnYqnqTXDTV3Vp5d13cjUs5RxaHVzgTzwsftMte9T9HTsEaeFEhE1EykFFNZh8ikXwfk",
  "key15": "4M8pTYuvLtFwTKXYuFbFY4DgPraatsTDQgcNPeSH4P5pqgdvCtXMZMVibG8KYQ4Qt28G4Un9GW8vbdEwZJvwbawY",
  "key16": "86UL1fMMGJ3sDSa2GU2YydaarfNcE5zENNLmnooQXpAVYLyBRF2gwuyXhazXkPKkM3WDce9svoWJYpaUMkYCQ9x",
  "key17": "3Vc98pqWvS48ECLVydL5XgNoR3PtdoGJuuYAvT4ZGM6gAW7vnJDarpW7FkzkEr3JTDutqrvwRxTr9iisfAtnMA1V",
  "key18": "4qr7BzSziaUnu4BTFpic5DEfPZxwrYnqUnBCfY3o8BgZdSW1FfJgKsE256bjwHjJpVRCGm8Ld1wmpxUshGZDdY6C",
  "key19": "2qKNfZJ9Vgy2cL9Wub7ATC835NEj1BRwg3dwxVEsCsqRWBrGxssM9LzJ37t93wv6bsLyUAGqP8VWsoMsXCHetRh6",
  "key20": "5EBV8L3Da2mt76abos1ZfuJAcoyDrB3ZL7uj78sjnvoPEn2v3N1TVkfL4LKGk2ZLEct8AjGVNWZte78ZgdxceHy1",
  "key21": "Qh7RHCBg6RWLsmu6DBuYaY4jVg4orKvnPxMjFZeiGucWhi4CKN8YfxJpDJ5B6qs9TkGE2KckZNmzvkF8ri56gqx",
  "key22": "5sfy1C9BEnZhq8LEqWxrQmkmHdeRuhys876BhagWLUnyU2CEgSTVtQFWiMyNW6KiXUVYfP8nUnwHz6HdZoVzuVUY",
  "key23": "2VvtudKGNuWc7AkiCT2sWYvsJKcqyAaiBtEe25KdqyunUCHoxk8ASwF7gHy4VBxVABPDDxZQWEkAWZtyurJiPzac",
  "key24": "5MtAGqSjYiTnCzdWRDiJ4ZSUfgrXtkaJwLBPYWfEr5NmrtLU9nxobbdgTMHUxk3u8kbbTFJ373w7MEQ4ZQDTSb8b",
  "key25": "3Fcotapw6Eo9En5dMD3k27KW7vPwGfj3vzRYTEXQkw871zRk8MrTGLHND2dSvNhujUay4sdTysxH21tiFBmSaC9s",
  "key26": "5xCZhzHHjt9t8eW4tew5E3b9mMKeKmP7m4tXnP3BwyHgi4FMbVKUUvZWCTXjcRjjtiKLkNxvvLUWqAUR2Xv8D8HW",
  "key27": "3hwyjMrtvj9Vmd7jd8tFcAad8cU4F9193XZR8x8r4hAE1DpbJoeqrLd5JkDvjbqsPZxMBcX9HzkX2hoteCxmryLn",
  "key28": "2QEevfZWhx3yU4FxcWH754bFLU6rq4Vvgt4wsguJBGXbmunr8nR5M2g9QnFbWU17qGQLSqfMCevbvMayVrkTbZKF",
  "key29": "5cWLPd4WLwmW6hwbG3TXiZpSn6afqJHvxuhVSCzXYv2GXVHf5zRtg2ugmgoQuy7P7G6BJohrCdU35nw6cxT5mDgH",
  "key30": "3xufqbsu72YiEYhYSjsnTkCUmYEFQqBzag8mYLNt8Kn29jF7fCcMKEnBgbjssmvpx2tdppTzh8pWbx3vw8mKzrQy",
  "key31": "5rAArReyGxU16U4PKXT2yp72dzZyfZWwgn2zJctWaXhmfwAKEg5GzUtxsdpMvDTyanqQqkGMkcSJDqyuMCMhPGyu",
  "key32": "5xyzbWD84uWJMcTuynnH6WfZtfC2UPVa7MsavgwGjMmmUmmy1o7zTCMqbwbfxngkFVm513h97mWmmHaHvN4gEBSY",
  "key33": "5Ng3JufVrEAFSJV9Ck6msM9EqP24E4LyHeFyFPwVHCr2N81UGXr59SWxM9uzjiAomddYShAN5K1uVVuGyXNxdCWC"
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
