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
    "4DVUPLMm9tUCGsYVBpgxf7JBPGqNU9aZhAW73vGgDokpCzY5tZZqZjjRPM9WJymqhJEt8nA7PbVV77HjcZZQgpqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6Um3RqsxmCyy2oFfYMaAwdkYqXuGJkisUhvzGAx4G4jXsiPdPiaMQaAJ8ANY4yRzxTNe6P4qgt3pvVLd8QgKEz",
  "key1": "suos8hmkMh7HUZACx8RGjaSFTfVt3SbFF2A35HGwobtjxtD8BBsbsJ7GFHJHH6FrJ77VFZuNBnQzdzQLUWu7PvB",
  "key2": "2WrBXsYqgK8kP7egQ1kz2RgHpNf2FdyH4Rnwu6i7Z9hWnmdahwJghMTH3yGNs2pksv25J64dv6Whetznkzteea5p",
  "key3": "3be7tqL6WLhbuDA7Yhzdv7EtCUVinQkZnDm4k5Se9aXm4ujDKSfAtzaSdD96umoNA4jr1YUSwXFg743GwgauqfMR",
  "key4": "Bu69AHCpY9X5EPUqqafDun197UCPx1A71FjsLjMUsGu3XQK59SprA7jRi4z5WWvdcB1CZtjXrrExHmJoJRzUeu4",
  "key5": "2gDj5vZ5A4prNM3rnEDywogodFrDhZFhboBodWEig2nkWAd76pytnG5tzRafnYRM4e8V5RQg7W4MNWe9hkM7pNGs",
  "key6": "64JG2GpDq2Qetvp4qS82NH9bbyRAMcxpuFC83NKj93cuhyrVRbcGS2vz3NmExHKftYNvexfvBAJuxBckBGGMgUjF",
  "key7": "2ffZm6T9NNjcyYSFTiz36VbXtBKk9tZBN8eBifobVpnxPKz5CkgUyqGV854peb8DMYd3RA9Z2FbvkhWauaSALqjX",
  "key8": "2tFiTrrctnRQxF1XHnPrFA25sYJ1q9GJF7fq6W7d7bJUduAhERjd4HmgX7cC6U3HWotNAaSa2eGXokyFhqkU7LiP",
  "key9": "4pnEY4v7anafoWer49ghfyaq1KVV1Xpam8FqHjycZwH878ofJHruoQbMwQg42pKa13tCnxPtCvgb8b96usLHjJz8",
  "key10": "5hbsUVkCBNGSoqfenhgFFYtG8FU5harBfgkwMwV14adfwYw8UZ56JfsJX5bqnn9ZVpnuFekU1n5sskeHsx3xGbZ6",
  "key11": "5oZnnaAPZU3j4GVUWQsjCwkb6NFgZUP4DfGHmF2hUc3kbzxVuozgDkw939f28HmLDj3BWqCxYLJL9gT7tnA13f3a",
  "key12": "8cMPE7ZsnF1MNWbC6dD8ntw9kAw9NMpJbfJmsj3DHA43SiGdACkFsnwVoKhKVvU2U7PTKNETkqCaGAqBXm1TnSF",
  "key13": "2kc7KMAeWAhsnMryLW2ms7vstEyhLgAHv4D6dLhvhr2Nto7x5o2daKfizKiKLqEw623KYq2fLzEMKQwm6Twud8cD",
  "key14": "vwPPdZGXLWwnvUeEEUxf4LGHLpo8Dr93UnQJWTp8tbVEaxztZ6xvpzdGLZFNSk3B4ysK4W8XJipfSv1g9dhtbG8",
  "key15": "53uEvbbyHR5d6sgBK3WVX79MdWsa46e9jSvRtCfKWVS7pHotaitVN9MqyVJpgXepdpnXc3fzazfc7EuvYVrLz5ta",
  "key16": "4wHHFRy3MQGriCwToLXiFV1idN4PCRWXvyEEHRcYNghki91MpD6qUGgbVYfYBZ4kcTvXpu7PTLLy9Nvaq7NeDw9V",
  "key17": "RPuCgAncsfkQxsJL84xWD9gLmBFQBzV9W6wPybXvNsjpGiME9CMZnm77GHhnVVxwBFK1zpRAirusCukoVKUAV1S",
  "key18": "5hn8LY1rm8joE7EHZqoxTkC872Q3anywuscJsmbdN5Hk1TPwPf126w4tEKk5DCQCSoea1pikPXadANiX5YuuXyEP",
  "key19": "YuB5VpHQJkzqGnkaMhTEEEiVLEhfdCrRgksjhgGi2pFVtQd81sDG1M7nKNFDsCw8vSQjfgK88r3sA4HMwMt5B5w",
  "key20": "2C3xsZmqsYxgqCDmMW6JgkVzBhnAH7zCTGyAWqZKge9DeRMjnBwecCiyRyAHv8pz9PB4mZUmYR56WegUz2sfdpCK",
  "key21": "SNV4LKqw5cx4f2fXua426qXePeW75f5kNHHKedGmCUAcEhF1SNDbxUoUnSX5VLWL14Px2y3wMWJc6zPo92CCYMH",
  "key22": "XzUYWtZGMhoVGPc1exLBL2bkh9TmCX3ms9oKSHNPAknbQ6euAmQwevmz5ZM7bSy93C8PN8Z6QWjyWS9K5162m9p",
  "key23": "4DzcNkv4MtcKx8HZARGp5sFtrpTjYsq6wBKJyTyBWycdkprbuDkr8PzWYELTHcqQrf9HWDfDmufDEvKdTZuNRakv",
  "key24": "qMzEXw12Dx6eTxwem5kSNrmyww8gs1x9KbngjaUg5ibUkShYs2JsWLzKNM5x5WfvToy8PUoQnkkLLGKZLxuoFCv",
  "key25": "5FJaQnpm6ozwF1Gsx5U8tGQKK4W8Wetw3FVPjSDAFWyw7WXXXizoLXNkrkJkUXGuQQCsxyU2E5XSadTrhRUeFUWz",
  "key26": "gSQpPSxrwnpVJcZy9XhL8Xgch8Becu7E42xPAD1r4Yn97Dq2atieLQ5Aw1Xc7wzEp9ttAttNAJrsV5SZNms2KF7",
  "key27": "5YqY1ytwdYnhoyc23jbQ8NaJjWp4HShoucH5e7hhxAMCh421d6zK8gqiyrQHvhR12VZttdhshaxDTKBLKCiqPE75",
  "key28": "28UgV8omn6esPK9VcN11m6KSCJPqhyY332sjiJKESxRJbDgSPyrPUGDLCgmMjvBU4Vw6nJujc2Sqrh745P2iwTAE",
  "key29": "2rnEhoz7QqUo9k9LxoUzm9Phgo2pgKtTQn8oJTyEZAfYaHca5vpx62RuqFh3NqRfnqrzseY9qqEVCFNjbHPvspTn",
  "key30": "4sjxLhzXgeq7Ujf4MrRzTvt9YHHXZ5v7afnKK5mLT2SUAW8yBwm1yxDSfFyYMAGgjiNpDhRahW63HEVYdm4UYfuu",
  "key31": "48D8FMXwnRFo9cBrVUb3Y7cZQ1Jf2RvwApAWQarEcFJawXvs6LqX7khKrU361BrmYnLXMcwPufeRJB4JTidGbYfb",
  "key32": "4hFAHLcrPk63XgGtPbGhrQmmNXVZDMjoy2qGWjvV3ef4nGSCTALHCE8A4Uc23dsXmp9mjxT8eG7TMzCSTWAGrSY2",
  "key33": "3ErqCuzuY3W8rqxXLdUusXhpZN5Au7Yb6s44HbEAkDooP1V6PH5uGXAauhQ2vqS4BaXS7v6JUnRcXf5275j7a5XA",
  "key34": "qTsxGza5mTSTgSiHJ7SDMGq4tgJspZPLmNyeLJQwMyuQYdzzXiprjRFmfj1cBazuYDfnsGm16HzbinHeFqvzeEx",
  "key35": "4iLeYWMp3BqoDPzf5RYYYc6zxuJb1DhPL1FA1ju5NEcg1Jp4CDrXcSGtbAbkXqsEiXJanBzanKhECnNksjEfTX1y",
  "key36": "ypJtjXXNYfds9n5HVNvPLfs2UB2sHNuVKbUCxAQ24ze7QmvH4F5TBHiVqdnuezc9n4Pg2bziUnavA4s1X9pYiVd",
  "key37": "3Q6MsK82RKceZNewWS56eiCLXqLDvVNG6nyafuhdfRDoaag8GBPvEAzTtQAbskQBvi7Bczi5WHHW3uhUanRuRmM9",
  "key38": "2a7tuB2V1Tmyq5X54MPYVu7w4mVr74c5eaGzG4pgnt4TY5oCy4aMei9xEsPi9aZYaX4pmcR65ZFdg2J6EvXsaWrX",
  "key39": "5iJK4Xhq1yjpZR2CJVTSQFqtdETniDgNfikoC2ffWDNryc4JBJmZC2AtR9cq22WHdGyqwfC6wvMDAFMALSYKSP7Z",
  "key40": "jWhemF66iUA6b9n9JXQLJELAfpCnyAQq3aMmeprTsoyt8yit6hwaKT7zXQr5bgti8SiCd7dGquhwLDK4b5ouW4e",
  "key41": "3eq3BVT8qnF2RfXDswbw2gKf6EYpwzLtY3bML2vrNDdNKuAdFE5X6wJM1oEsH398fm1w4GzoeQoNraUwCQqkUaUz",
  "key42": "5xTr7hiXytrxRKDCFF1tVbEJ5BMg4EcUibDFyfXAAoBQCVmr71TNWTycaYVH1e9bTXxQ8ZJ5r4ejxPz1bAsj7ovC"
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
