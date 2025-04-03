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
    "3H1exnu9JoXxbdJ8ssgLMhA3SWh1kYLATmG7n3zkdJGDguEbPHi73Gn8CbgoXNoy2r8hSjrYmTcfMegvPTgCsV2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "482kRPjttfvPYcbajWTMGDtJXW2EB2SRbfbTTLLfLnjRtf6zJGrxqPGKjGF9BtT52gZ7FzC142ATuUmKzsLZLmYF",
  "key1": "2KuEcwVzv4kSo15oaDRG65b7Z43M8Uw41zQBbvifzjyrtLYB8WrTyoxmpdhGxJ7RuuMQoGXB44BkSp4UPWdcNJPt",
  "key2": "2oNm23kYRypgR6wVKq9UyHLM6c57u1PrpNvgVyMVrRAShB8X8vbG3t1qf8X6sNHXiwuUxoDDbwFKzs6zVmSnoog",
  "key3": "5BHXKiNpGpxM2PigLuAxtBK6yq8mF8BNd6btUJFffJsWUKPVtW3ZWz26v5yKHinrAe84gGF1WaPNx2QA6tSyBrtz",
  "key4": "5zzu9EMXcMJgvEp4DnU9zQMFq2QX47j1H8WyKEh5g33bZ1SL3UAvnuT4B7P226XkDdXYCYZJVUd46aUuZyJG2Y7f",
  "key5": "3G8tfYj363ysbZo84VmiSHZMNBb4FM6UWGZomUJ3QpnqUAfjz63amyeddpGyXuBxRcmdnxNQE2o1zrRDYptofgME",
  "key6": "2m2MmcRHqmrSQqY2nVMTJz5z8HMivN9gTHDNAxCVpigydVQCHdcBUjDrTBuB5RBDFjJHCRyo3ZaQ29DwqCMAuFSC",
  "key7": "3wYp22TdNgWbx3rtSAU21YHBXA5wpF1GDMXHL34kjQHfYAtR35U2THKPXL23XPwaZVABeo5U2sc8jZYRMcyBkUM6",
  "key8": "64BkbtuBHvRJMcCnSdYBi4Kkvc4WvbnE81qJV4ZGNViyMrKG534r4wyqKd8XMvXu4BPkFBhwPN3YfcfuN9tynPk3",
  "key9": "2Gip9oETLizKesBPRkj84krd8aSWa8Grq3Ggfg49oPTKZjXRQkmUKpG6KA5Fq177hL55gMUBDafPnJv77P1DPYw1",
  "key10": "4ZiMAzHNb2HWi7FY6YxpFWSnVkMDTyYUh8LErhubCq1y6eiw3kSGZjPqthk5jDcvmKRr4J8NonkGqcYHsNuzSEgf",
  "key11": "4U9Res6FE3V2JHyvBwB3yT5jwmezc6YrX8Jqm2BcLVGDH3K5i5rxuFPHunqAvC5QePNtbiUx4fUFbXUvcqZc6N65",
  "key12": "5tZtduS2m9qEq71Tnj5QsT7ZiV2Pu8DiHmj37KoH18p9f43pATCkyQJSzw1wTeQJgjvNgWC28BkPxXRdYvEKhG5j",
  "key13": "5Xcye76EARpbCaxyBVafGQygRsFfUCjSoPT6BLQppKUhBuwePycXzLkaYkTGqoGsnNBejEPATgrX4P8sCLweMfju",
  "key14": "5uSJuZ9jpyQ4jSk72BBYoCdswPmUUJ1RP5nugcVqFPqPjhp3nUqeFbGFhqhZBStFAp1v7gvtPtFTL7ePxMnZfcXv",
  "key15": "5iZsPm2MWEjKGJiEM6trBAZ5Cc3keiLdjtCHPCgHoXqf961bqnULbapUKeiBWm4m64ZFCYL7UU8kb4txdNruMCcP",
  "key16": "2bLPubhnCoPfM3LUoWN57iTFUSn53NuBv4dZ98dG9sJZTE3sb5oG9eoYhatZgknVZEp6r1TexC5mKxWpPVauzSp4",
  "key17": "5UyhdG3LNoVPXRXVztgrefKAgkDkjoAvGuLLBRCiSCJyaaMpDKx83nNinBKk5pri2wrh6r5MRET6473edT7qZHFg",
  "key18": "4wuJ3Gz2sCuotZcwnTVAWbPq6E8bnYP2QgZwsy8Do5x28LPsjRjPcPpAYPeimJW1SV8Ytvru9dGcusrZm4KRZeEP",
  "key19": "4VyDd23rwUdkhJuk6Ec7EpdyJ2AKeHEpU4Qtjade3yaBAXJXooXPXuCbVCTmVgdvFa8KZp4NNd1R4vKWFqjH2Hj1",
  "key20": "cmxrrrPuJmCEFcvFwYaVKTWYyfLHDzp7BqtbuxP3XuhW39CJiWgmWQwGvg4xS34ekBPycPTsQvzcvGFDKoqA7qQ",
  "key21": "xgn2cw5tL4Md5Q2PxGCapigVLTLUEoN4RB6oufXExQzHQXaNZnkJnUYoMu1Sr4WqkvSW4pDE9vaFC3QRPLzvpJJ",
  "key22": "5YWUGC2gSKkNiLUxewB5k29jno6KJjUbq2xsmRCnrBZbmuMwiigiSeeaEc718z5EiwEX64zFt1bXYVsEt26xWnPG",
  "key23": "2HiTcNzdPDqW42vQbGu9DVJdV9Wfj7Z41x91GCYAbcvTYDeZTMg375bPsxXhd7E2KsfvMYY8wXxwXA8M4UAEgPVT",
  "key24": "Y1ufFFZXJNmKfrmD4ZrWzkzQ9RZgDm5wkVQjkDQHWLZhHSmsnsD36F8KJrv5AgCtErmseQPsuqbVscbWHa64YGB",
  "key25": "3Db1tByARHM3w74cH4RHC9qNnyK6z1tSgTpm5y25rrKgVGP6q9vMq3m7829qrGsJ9cP9ChoK7KGh9b9RrTDUDn6A",
  "key26": "kWWVTy4eoWuDjDXRi5RHEvzJZezubirfJ11hYj9BvKSuof6BGaoYKBBAxrQZjuAqVKKqe8Ggj56dPvAwXTToniD",
  "key27": "3rNuBaPXvAu5XqM7ojcFPrTtuWKgee1EDWe2TTqs4rJRB6b9korN12pB1TcJUYpUnKvVwbhgscZkQytN5zki1gmc",
  "key28": "mrwdKkj216orMcuQAyjjp4JyUnrXFREbPvccVuC6U3PSsTouwH315mSiGM6zGVdY4vGTtp5pj6QNR8Q372fCnhg",
  "key29": "5RLc6XJ5gtYGBJVsxfU5CKHRsM4cpz9HyP2DDvHMLtvBCmV6AxibEjofcoKbZYJMSAMiWHEbJBfvak19Jvu14p2L",
  "key30": "6gJ2nKeVxZtgfwzGyEgUyz5MVY94bzvgd6MaMxQqWyG5LZqh1dqXZJ8U3hAtzzzYTtobfNXHAU8HMQ1jbTPQUz6",
  "key31": "5yagLPrekpPXBKn85fQTZ1m71c8kroyUJEQWeh2BgGJzpiyg9GhTpptBFMqfHxCipz8tkYWaYtBJ8rxRzViXU73u",
  "key32": "5NFtAxzZZus4qq7d7qftU98osKrPRSmioH2XMyx4PsjJ7DtNEqJrwPH8aCWjo54VjP43DQewUSnBSXY324kDhNAz",
  "key33": "5hcFHgj7vz4EUFFQRRvtPzY5xduehDPyTbnHiQTar1J7KKrgxdCPUuxSoGurt7BcWNGRno2YV28bAwXJCB1AjWY7",
  "key34": "5v1GK7qhpyhKgWoTBcXAXoDtSVUmtr3emhg7HrX8V5bnoUMVk5MnzyLfUyg3AtusDyfEpVxhpEXTdSPAwjUtynMT",
  "key35": "Hu6mXsczH11M9ZHhjAxjf5gaS9hdNBgCDPka8ZFMaQRSTj8UtwkxgV5dGk6A5PvEvWFqezgJkGTwm8Q4oQQgydy",
  "key36": "218YKe2VHyzrUUe9S6d8sNJxAr31NKxQnqbhmdxoAdQUgQaaw7sHdXLCo2eqW8YRwTqiaaaKj7MvrmJRiEzAZ7oC",
  "key37": "5UE9hCAhSe3zo1GkpPgisA2yZkLGWPTqozRKpEkiipCUV1djVJgJGiy3mjPyf6VtHraPW47KBtvDTwH43DpmACh1",
  "key38": "5HWArBY4dDduTLN2b8WvPm3zWwG3N2LcrX7zYU8Coh61D98rdCFZvnyCeyfAsYYvks9uSUG7JdNEiHFGgySH15g",
  "key39": "2hh3gQMkhiErB4PP6isFjyiS5dWXMRBXd5sjKdr6oLhXht6C4GzWvSTbkcdvnhhzomnkPMXTSDu8NMkgnh2pq8WP",
  "key40": "5xwDcTWRmKjE2W7b51fE97367Rm5Eoukqm1E6Q3z8zQTwnMt49RjwA9Yw79uSsyTavxT3vEoXL48tXiREXmMzQpA",
  "key41": "5vdDwh4JCsv2CVqznrJfA1FzUYc8Yx8Wc61B2ZemrhAqNouKotD6vZhtUEfFq7N7mLi1fMLQzywQqXKcqy9WRo5V",
  "key42": "3Bb6Na9GLKwyzG2xwThwGWcexzWbp3gryPjJWtDxFmAseAGwUDpMwwtjx5ym1v7wSZeKfPBoV51iHK9Ksd2oHdxA",
  "key43": "14igTovTEi2JW1CzN8hUZHFqvoWfwD7RhgWn4Yk3LmdWz4aXbXg7w3NTs55yoccioVvCzAM8bbK5XWb8A3un3aF",
  "key44": "22Z9ydWQypEpFhkeMrax937KVmgP2TytE3aaR78eS3XwU2zGuHtLufYnxDKFKftL2gbmuXjsPryoau8zB5ecNSrB"
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
