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
    "2fvFLZzkvYnXCCUvU1EHuoypYW2txZfFt5wNhuQNThKks1hdHxaYqHdFQ43H7fVMDHxBL6yE7ZURM4LGnrTpYAQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LmZVhoPsiJbeJ3QSvowpWfDAnb5LgJcgxScmFRTKACNx4qgKsYPRsh9cCPmytUrwehGyPrQDBZd9xsbGbjK3sf",
  "key1": "gLxPXgrW2dpTWVrGWHJajwW13Z1nP63zPPUWjGtLzRshxSDuBKcNYHGtawW4xahJ1WRQqQZNCA11pbYzLcdqp1f",
  "key2": "2p7NY6tEZtjxUidG3WDWhtpUyLgdGbmYqoeTnRX6fGyK64jHyak71Nb2EsGsQG8j6Ztqt9zq63DKENrvCqDYysPq",
  "key3": "4tvDCx53PGZPSMiVhr81aBQyHFMMYamsw9JGpQZnrMPLeWkxq8CCvVkydY2pSUU2dm6QzwgNKCYm3uEw1bd1UAc8",
  "key4": "5JcBPYyA9HwuKF9ur533Q7zsAmCLBW2o3ShGPbufoKo8geALry1kotocNyZxxXtbEEa9gaujoBkp9ndAjaMaeBuc",
  "key5": "3BGrY6ozbZdvPbsvcc3e3ZotXsNQGaSUxe1vNmooCgBy5ByTZWUgTiSRmQfQsN5vgVuH4r7gZyg79tLnjMhsGRBB",
  "key6": "5apFvLvFjc2kzcWU9PiaB976hP7mhSZbXVLPfoNhq8Xdm9eUTztHmakzvhe3zDQAQFmzXjh2SJnjhVytPExgrWrp",
  "key7": "4WmadqTrAj43YivmP1aEeX9zhT8GBLsUh5PEihvyMxXqjuZxraarykUsA72jiJvGyTmML2y8cth6PrBpzDknbq6A",
  "key8": "3KjDTfp6eMznyGYEXLrjrQkf8y9foxt2pgBKWjdK4wHgr7sEC9wRHZmXQDd6WzNy34wSk3MGoQcrgZq1aDUGm9Hq",
  "key9": "3Uk63Ue2dPNiWbFuyCwKG9oh9gybpcenFzxbbthdbER9yT4b8cSgoNhRsAohf2Y2yMLp7Q61FdrmppAu3mCHbBh1",
  "key10": "3BzPyi4keF4rHtFbSbr5fzKvB7JZpLcvNGiDTyperVqoyFbKoZQGQz4z3SZx1QrCEQNNHAfZ23hVwottu5HtLGWB",
  "key11": "3XAvDJsdLLs9YrNPQRUERZXP14MURu9BCDZtLs6C8kti3DFN4mmr9KQnBHU9Rj7CYfTs4gCtfohvEfmnAiWaS16W",
  "key12": "MRVuybhPB27As8Lksbst3g9nzRmk1RHE9KFNj9yUX87zWk5auYFPvsuHVdGSDT6wq56NW6zquB8QT3uY7f6fnM8",
  "key13": "2x4F5bYaL8uUwq7iGytRMAQnfBSwjcxX1p1Dt7a2qop1pAVQdXnQBwk68KcpDQXESaHvLPC5k5DujmdCZZE1MgWy",
  "key14": "5pPhdiXARFbvk8utFom3VL9Fd876x5EdiytJzvngmiVBkYHqZBq6acjQJSdExAh9usWjU3vFEDfh3vDzB2gdH7P7",
  "key15": "3PAwYjvnkVWqi9JEFd7vyS26w3h8Ay3Y7wLhLDgxfRYgwz1CzPmiCncxRz43vyH4HWYBWtmXMFc5m6xCxUB9LNpa",
  "key16": "5EFNZabQeJRonmi92qZ1PM47dUnMt5Mgr7LNsWv5ot25ztYkRv26mGxJBf6N1Ak9eq1AVNfqQXBzhfpat8gx1WcT",
  "key17": "3TgG3qgWLbiV9cvmRfz9vpRNHtcp6LzcGne2e6GdQhD8YWj67uc9PQ8axebR5xZHbAWh6PtXchwUnBa3S1ZjPqEB",
  "key18": "JrfPgj3EMtdMecguXYde8Cyzp3ggckiY1Ko5yE6Qc77Ltu2nQd8stQFB5gqNWa2jmM5fzjZjeivuqfAZB2AGV7A",
  "key19": "668gzzBbhTf7PB8eeYAQA3Tb47F7sd2KivuvjkouS1ZszvnbF6YjXiSCvgqeBokBHs84zLGtGrJuMts5FFTN5XRw",
  "key20": "59sU3EAGbLnbuyHNrrH9V5Zb1DxW6Ea2dFkK1LP94F1RkeyKt4JrhkzykosB33Nyn4LsWCFqDYLzaaLr31uVHBuE",
  "key21": "5fazFpCM8baHktQYUHNPKYUT6szwH5rFKDQV6uki7fj9A67Waqa987M1xgZvxV4xgE5rtW9DhAXfx47D4gyqsDdq",
  "key22": "4b2MYVCV9znb1WDFycryshdDhZsKSF4qwBMdYq2NmLiFUE4Gn33Xdni6M9RXAm42Gc73EEx1pKrGc21MqSABW8zN",
  "key23": "5XeA3Zq3mwcUZDto3U8WTFAiQLVtDqwihWJBoWYGkFNNrgKqq3vxXMc9keBiWK5dCv9irspHHw6tVTzx47GivPMK",
  "key24": "56Hj9GyeuHh3PK4M6H4ixsDJ5DfxqUCZK9PYUdgzvfDT5g3frj7TNWcMBxvRAx5urwF9PC62NFm5gmWTAXThsaFJ",
  "key25": "2kkXM5V9giozES8Af4ZNgMoErrBzkszu28LNUz4d7bQhhgtoyRJyc3AZ2w9KhwQitxuMmmJwL4xpCwmNygt5dKRT",
  "key26": "31xCE8nTXejCYqePNyk5CWuZiUonXWsxnRhpbpXRaXwB28Ve4hQGPtsFyyfvd8wrPQw4bEtfaaGjHxbYXmzRcjVo",
  "key27": "Q6LedJVdqsuAQFrfSQLd4QzEvMP1mjV3fymoJDXiuYjtpZCqp2jE3Nd2UWBjYUVXpAvemSokz7SgtraGuk3dg11",
  "key28": "3UjMwq2Rxc2Qr2cmYUMsNwEPJD2aV8Hi9TYmtXTrnonfPAft98XGsTESGXUTvnp2Yi4FK5ktfnayYVJ2bYab6C7a",
  "key29": "2wLAGHE2vB3r7b4cUARAwyoXqM1FJ87K4mDwJhEiVbWgdxA7LePuBxbTzFzMmapYi4t46w7dMwABq6emqinDPn7p",
  "key30": "5ikVEtFySXtbGDvPRv75iRGz9FemAM1wvCTExjKuTBCBvsWCAn4fJ1xDyi1NtF44xUnnt6UAxtXaLtbM7pfeF2Eg",
  "key31": "55it6dJ1S5mjSQULRxNCjUHidUz49xMwjXkxYvVsWYWQij67g81Q834miL1neFweSHchK4qeUpUM3VjwPQ9MRg2H",
  "key32": "2ivxfWp4oEW6d9WXCAiVzgd23ZjybNdZ1nqJy4ZC5njAQXJRw4N8oTHP6KpytHUt82p9A1aX5UeJ6KAZsEJCBMXj",
  "key33": "28yCFEZn5NJ55ooet8fm1W2jsaUEgax6mbjeSoceNqhKEtkAxqGoE97PEy9KpSx2EGYzCXAxoJgZ3JmnBJnftFgh",
  "key34": "3ai1cD98ULazZYEScY65kTNerpuZiKeGg52DsrCZwQmXnsrUNTCH69BPDnVGriFz6nDGFmwNto68zhcPqWXWVXfD",
  "key35": "2ZcAyWmLxMrQ5y2qediNABXq2TTFMWjkDiNVKq6NQLnYK5HXH57qcfdjTqhbh8e6ahVjFMARQUaYGGzFJ5uGES7n",
  "key36": "RpJvG7JGEdnCgS7YatcZCG9y8zj3XMncLbbVeVzZ5FcpXFapCjp91N35MXQBPR1P95NX6x8CXFDwe6ujcteqLiz",
  "key37": "5dgtaJ4j9c6Vb7Zj7NJzwBU8gNYfM37mtu95azp6WvhzrifGb8VXKseuyM9joRSv17wAfEkhquHUweqCXmc9Zzpk",
  "key38": "3FumB3caaq3TZ1ikATyFvqxLh1uTGcfqhJwwKhvUY2x5PvE684M53RkpVa5ynJjr25U1kR5CY1SdiWCraHRNAPu7",
  "key39": "2a1nVYkrdyfSzy6xa86GFo2BB8FoLvRmwxnkHXxPqU1BrupjxN2bXqcmXaRcvhQn3g89jrseWizjJYPVw3qcnqeN",
  "key40": "5MAQbze1Po1erntBf2YZRx4VSQBGu24npqGexwwmXMm3GosWuSnsNHpGQgDLQu6ZNLwVBrkuWR4TyrAjtukksGrF",
  "key41": "2Dix5Byr1Ve4RUCqAxYujV4Q7kLR4QrXxy4CBks3o74fVA2HZDVSSdJBZmqJ9deKppwVAKnH423nCfwVR4Ysomam",
  "key42": "5NyBMdy4DPEcQxH4kn56rub54urPjuCL8MFJjGsPX5aSkQBrqoZce8wozHFJSuhSURE7yr7Dx7qCrExPdSjzXocZ",
  "key43": "5uoKf6KH49fSTysfCtVsJrQki51iu5d6mgCXc3ScPjhJ2Nv4Cn7ag3QxD6SN4wZ2TdEGgRbY7gGr632y2PAfsBbm"
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
