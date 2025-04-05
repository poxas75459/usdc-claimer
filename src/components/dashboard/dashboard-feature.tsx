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
    "4nxwuyMFeDj9z9vcpQPAvZoDsfhwFgrrHjB49MSPtZtAo9PuzoEjUw3m4ohEwkh6eJFfJBcs5YLJucmJbegkApMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNKksAASvvot3tt2qzT9z8WUCwNrAimV7oQmBDJK438btjAUoBb7i1Nk54c7hrbP3RNHzXeGw9nDLP5AeixhHvd",
  "key1": "4Q9V5zsTuuELFp9xMTVAWRN6ED5pRYq5mTm6BtdLnFoG1PAguCsH3rxc184FgjLThXNSsm2snLbm4yLu5PEzLrRz",
  "key2": "2G5Tmz9invvpcxVp8wQeiPzvHFLaj5oW4UcYzDgEbRkuadzmXHHwidmWU1XPwyLCTyMA8exfqGdJ4Tq6WpewzuUa",
  "key3": "4fLbyXYDazDPRtKoygU6qabr48HwujSZGrJX9KSwmXsiUBCDKJFEsXJJwH1fsygiDGB3oPVm92KP5eaBLP8CGgju",
  "key4": "2w8xX7AGCSRH9yS3z5eu6PRJagZDdVoQjkBnpYfaNFPSv8Kz6BrJwyq5N8r3pJkwXakGxL5o5U8T7mnpdosXwe4X",
  "key5": "3U3ks2MbRaCBjKCHa1WxaPUuxQMNTYPiBa5eqrJTCbp9uNkdzwg3yvN3QhADFu84o7TYNJ4NVSsXKnaNieyfGKLy",
  "key6": "44MBk6WT54gYwLimkMsuJxvQX8TrfwzZbzSnNfCdeKQfi3TwEMpm4MsABb4wam8uPHj64nzCSDZb5tssQsdTeVt2",
  "key7": "3SMSW628xMh5RQrN6wdhRpPuSgbyP15a1chSxnZBrYEJh9HrDpEbJpFRtKVFhMPvwUDm6FdzovHEL28vS3nSJuS4",
  "key8": "2QTzj6VceBokkfCTE6CEwD7BCWBYkTcxdU9XDPrAnCfkBsaNg6pAoX2D7XkZDqf98qoGHVEB6FyDSp579mjhAsqf",
  "key9": "KJhMfSiaqTSrXuV1Kqp8Bec1YDgzXKRULR7pSpb155Nif1ALRubC6C6GPMF9Hu1XnAJLhTD3sJ8iZuVpPSYc65J",
  "key10": "UkWYMAQN86FaTUvywHnqrF7vhk2dgrQ7oNbmy5mFapEwzm2P9fHzum42YMpf6xTAmSgGENZFuXkw8RLUVzScpVm",
  "key11": "428DHgV8mcZ3uBQ8zDLrmUHiZwPPc2j6YN2cDf3zDXn4j2bYntY8wT1Y9huK2yKrwfYmgA6Zc8BfZkdVSuVd652Y",
  "key12": "2f8JWtt3K3VV6rHYo6xMd51tgNf34Hk2bXry6pZMfv2hCvKX1fNRebRkwGETgZ1cHB2bASSSfyov5sPg5BzpjZdT",
  "key13": "3Wt63iL5128skQsxU3AYp25U1GmhEXGrH4Fy2Wdi1kBjc93Cu8VsVbcHAHpSvPYFegzDeDyqxunY58cSVdU6VsUj",
  "key14": "2qujYKukdSvKaozizhAMn4cLB4SaBty95F9yVHJtmAetgeEy7rd39T3muipbZgLCRP7xbguT7YMkwNiqf8CwfsSg",
  "key15": "2o6wo1S9TBVaaXKMAEQqY6gNZitNGMXrSAXxLvKg3LJWybAnUTre4euLPrde96cu9XFdtFq5bxQ2F9Fax1UVnu41",
  "key16": "CievNeNEWRASXuTd844fdpn8PFgua72jj2oKVGdU2gtCA6yeyfua52wCrQdGGvKfbVkeZPKFCBQWJQZaMmqYDfK",
  "key17": "5y1fhyfXnRgRE4VVfsggBrRURiV41a4k5YVpmGgTfpSEioZ1cAEANJv8eHdNhgEmVjBpsR3G8HAAhM2uCCEYYhtR",
  "key18": "2gB9LnDTh6ms9iNE4fYNsnFve5KYGF9LW99Naqk8zsQVJhCgnbZyEC42Szav9VXtduF45Fy1gA9x1a66qQNzbzhv",
  "key19": "2aKcYq1g24tHD4pd1fxRafV5ifTzQtTY83dmyo3prwJ9bQa5QSqCBFFphCqb42AtvVEni3aDmRGY6Y14q72oRpJq",
  "key20": "22cTA479FpRvTTtjZLfhBr1PuuLneyjvQFUpLpDPrxrazoWcK2F7SVNGvWcmV12KuKs1E2iWpLYncWRQLtZJka9t",
  "key21": "3xhhPy9KmES8VvbVTfuYAHcJAYBSutuzf1vT4K97QnERZwaM2cpKHa7nxEzgFANXb9bpVX8BYwrZuYLXN8aE4T4o",
  "key22": "4KoKywxd4rzwokpaEuCPvadetToBxCmCY744Kprei8UZXvz3CJ7w5E45FZ3FwTHWgxMM7peBEy2UoG4y2wT43vCS",
  "key23": "kkmd2QpxnJq8v1ooxdPpeS15tVytdTqrBHkttMoZK1NTHPiAA3nxYw8vhcoABUhxewJ5g8pKnLFZSTihwY8HyRF",
  "key24": "5uFCKKRsBrwLQD1gwjoH4FUChvsvPGiBm597BArgkbcahReWYHPMy3Ut4xWGnsWKScEeV8kzSb7fDMeXFQjEFs7V",
  "key25": "4kzDhwJaLZPE5SKsemMSm5BiRW3fxs4HLdNPNuQZSTLtJeYGUZxnd5PSK2w5Qi3MRPSqNZaUE9mYWXAFxE2yiNcV",
  "key26": "2BA3TpsNSxrTd5wbEgVBTWHccwRFq4VfE56DHUce8sdaQzeXgmCsMBjwAMLXCp4hgxXLyvFY1jsFSTqbhiEXwgXC",
  "key27": "4oD4vv1xHwKdrhTKwts4AR5HdWKB12MYKmPE9vrgErT5D2S59XaZZsiRfHEYCUnbKD74BbhJshtHU3D2FbBa9RyX",
  "key28": "2NgG9CL8gByC2B1qiqKLX8s2Ho64VeDhQZiu1WZ1LXgTgdaGjGsY4rXAdWyWjczmx2A2qapG4KHoW54YfPYtH44S",
  "key29": "2QZ1jykyAYRnMqK6xJsvdpxDcXgTqNH19wB6Gz8jtSGnmvb2Sg5Gn2JJSPQXkRPMYADARZDZs4q2MmeYuoAHvYih",
  "key30": "NtkbgEUewrTtXXqkU8WaHGP17yFb3YtEHqEZ9k6UmQfPUPT2TfeFFBPbGz9DabbrsQ1ABAgnQfesDsSHcBKzRh1",
  "key31": "2rf8M42jEbjYMTEKXJoa77YyVhrvfT6fUfb6xXh2eJsx5M8Vzeoiqsvczm81APdPmvzutyGVyFDGz1L8tfFGocJ7",
  "key32": "3g3gjQ5hecW6MAsj6yAJ3RKSKQgEmbgy6LmhaqzhoAYpiDnH9SG22Ysa2F65rfwWzGq5fxe2hNjhiMAevdH3CsF8",
  "key33": "2rLzc7Cxg6cjYKRtJr8a8veFHA25afr563Q913rSY8LcA3QA5a2AMmqRrG9gtzo5F8uEDmqDK21UsdhUjDEJtoqD",
  "key34": "4WM2ZcYTraU2Yrg9MZEu5uqbJekT4qTFaVyYsQyw6doPmL4Xgf3MnguS2jjbGysL47FKoJCVzCERa1aaeHr7CvK1",
  "key35": "3BSRfwCUoHfbZFL1iBGRP65GwaJLQahJ4mYNmmBfoRxFiaGCM4L8RznWTy5jHZWaZCXM4FByVzdHeH6qfoxAgaog",
  "key36": "3nVrfpbzi4KADgZwUc6z5udkTdCrnoiH5qKkYDnUSqrfKvncM9cxQew4NjFo5mBv3hDwrvVheemxhgxT5pMhcTt8",
  "key37": "vRUVZBM7GMrCuG1synu2375qxakzeGr5z8pkUKr4KUtjJYsUzBe5vHTU65HowyQxD68VuavEwF3y4LMsqqkoAb3",
  "key38": "5t5sJJM9SZYV8BtwGGJYQS1JQP726nCbaAip2HbGbmyq1QjRTG8Y2Us5ntcu4v2HgqnA4dMKze6TbGC5uX55XhcQ",
  "key39": "5nPGrS6fNHq3xaRyUAyNZckMiFMKc8Q7dhVzcHSCNXFWiMWnfHXtQFrmtj7iCYtt4idSvdcx1wuQR42eFsBuswPx",
  "key40": "Q4znHVoRrPX1CY5Fc2hhdk3AXhKBKdYexRQ4iQPL18Fc24Btv264kZ3MmipUvyaaA9nihjsRCcEwLNjh7Uc4Q9R",
  "key41": "4xyh2WSssfqLkv6oKAdxZyT79Nw7oEehsJPrxrbY7bpBFnjeqZiD7eUUBqXoi2T4id9rCPw5vhQ5sYMWT12jEMSt"
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
