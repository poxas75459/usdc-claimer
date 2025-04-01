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
    "5B9NihoGkvZ4yVsJCNJTiQwWauPUfUSwou3B8sH2x4geXtxo289bA5YYsLR8wU8xAAskqR4v1SDhwGrfr3PSvk62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQ6ix2itPKUYNQx8DAKgJoaAbrxX1youbsVXPYFqPCJuP4XwPeqzEZsA6ia9yMCzFrdARdtmaAXBnFKLPxyXkDY",
  "key1": "tjh9hRzb4c61MCxsAU7DGXWUHCgG2cV9VH1VtV5ToZh9cnXnpxpUK3UebGgsQrRfpZXzEScRF7DHRZvrMckPs8h",
  "key2": "5bdjipLxVJoMgHTGf5fhahL5Dawu3nYC5TfaFK2HiRL4bWeoKHZUZhG8osqaVRnTG5Pn6LK3dZPeqWN8xJT98GX2",
  "key3": "2Vv7WAdxY7RrE9dto9BoeCJF3t3ytW4UfXsbAxZYbtyKmjTJMBqxT1AYEtJdfqtEDB5mxq9htZxqVcPAUTBi7EX5",
  "key4": "23W9zwDpjnAwQfoCVS63hrkqrqhfPDsTDDM5FYvqA21z5RWXtAEVjzDoeHo52k18oxdctRZjgtJgWfEd4Avo29Dx",
  "key5": "3BAeVb7tb41LFpRDmfhuur3CBXcrEBxLsLTnXKvsf7BS6rnseSJSikJe1krC733t9ayGZ4z9G5MXjMP2Bn2PGYht",
  "key6": "ZdjGxCyj47zbCKLfnZat8BQ8ssFPMhLXrR651gqfRQ6ubyP8KDgrnpHx97Yn2sHBDgGBPnydDxZLuWZ45aByS5q",
  "key7": "ojTfP1EUkm9SdezXZo3wDzmPr2eDB5zjfsyYaTUGgrFb81Ju3iizoBnupzAGSu17BpW73BpBtWdihhrYiFFyHL3",
  "key8": "1waqpjVqNNyyD5UpA9bbdStA9pUHm9vQLvNhwYmU5rCPS5g4dNnMjhdYYZSqWrAxkRCk7qYf89WytTWrfGtH4C8",
  "key9": "2yiTY7PqR5S55GxLijRczTbTZcDXJwStffQKsA8AkS25DtocNo7QcDEEaZnbk76theqdyHVoKcvUCZPMWjEdH4Z",
  "key10": "4wdKQQiXp52s5Ktt63NJNmatjPFova3B89tVuieNKRmmUxu3v6FeEyuvudKwsQrHgcVrzSvLaiVdddeJ5PfhSiqd",
  "key11": "4iNQaosdGRWtdRV3eP5PpRyi9gazkJEpfv4x6UDfmZimYDH4VQ6emoYVK5dB8w537mnTY8KB7CPFDr38yjyQJTuf",
  "key12": "3RgfNCBEf8t8kjnnCDdNoctR7yAZHyramJcartgCnn36ckVA8MdW6J11YBZkZZGr2MaBowj6zby9ahoU7qPeNaCh",
  "key13": "4WfzqqpQ36XahbbRmkwM1khMCzwoiHWwXwZuoNCz2vMWZYfgKwsDARGa3wEBCiHupuvqnX24Nu4kZLLUsya47Hq5",
  "key14": "4uvUkabEn5wKny2rv4qCGkwDPktVtypsE2dnxHTaZZn6vvLMgM7Uh6DEaF3CtX9jeWAdED5ycXoWSsR2cixPCsdN",
  "key15": "4GSrKUvMAv1PZB6HckDTcqTZKefw1ZZ3AqJyyVK3a7nPikUpds28vo6duyF9QDn6o3Jy4Bn1G2EE7YMx4L1hdzUL",
  "key16": "28dMn4eWu2wUpZQa5CNV9eKivuS3pXAzt4MjHNWNm5NTyvVcXS8rPkmcRMSXG6KraWRRa9TY4BZVYL32F8ZwsWDh",
  "key17": "3YJpb7SPCo3YyBSNvooDL7e3kCRtS1M79AB8gq1Uh58kr9WUtKgxY39oiWBY4Sfu8dFidEAEVt8LvqnPwEodvdnZ",
  "key18": "5SwNgSwXHecEeuUv9hJf7JV6dU8Abw16cHQrq3Zp3zkMX9pYaRxGUiAWyo91YY12nrq8pErtq221QpM3z2Z7CTLu",
  "key19": "24WcEhUQg9pSY54X1ZFdy9mej8MwVAbFjX8YcMktZMNGScceLn5gESavNEdJeMqiXYhHnnKhkyXW7fV5vusc9QLd",
  "key20": "2zZ6uqvq77KTSLBNSuAtXxTUW7aVt7y6PYG6Maaq6siEx3zpsPrsKHwGhPMuuBAjheh7cgFHv51Wd2MVjaXaGCci",
  "key21": "2wMhowjbihPmxL3HrfJvWw4JW5uZ4pRqg6gKshVr5oiGevRkoxdygbZriEKHtPE2J2HuAZCwSteRqQG7vPq2JZM",
  "key22": "5Rzg8vK4niJfe1kb1trVeAtXPQPMNQxtSBosRwtAeXCYucATG74tt5jXQD3vwm3iyAoVHx1Ag3iK996qBtew1vA1",
  "key23": "3BB3yq4YGTt7ut9aaACeo7DRrUAaX8QhBHjmLPagC6uobdCkEu4NPbQvruAG3DwpvNwMPUuJu9sZJ29xQpY5E72m",
  "key24": "2mATpsTcp9VgfhjptKGgdj1To6CAT2WuprqqiMSxa3NwZQojTvzqvyUKqiGXD8eF7vQw9PkFhgar83CHtDz2QJBP",
  "key25": "59q1onR8TSWZL3ou5MTg6sznopyFtjjjM8FTsoGqGmpMCQknLbB5HaDBqSWmEzX2yc372Srw44TabuCWPiWxLbkh",
  "key26": "5TeTCY2oorn8XMy6v12jq5FUohc6wPtNNuT9TgZDuyJZQSUbpMHu7dFH1QYTzLLEWeyPR5bNM1pitDn3t1fidpcL",
  "key27": "2pE3aMfvKNPK2CDGdLp2PtuHxhWGmirxhr4C26pvLoCc1WZr79mijAiNcCCh3R4drEc9CraPkmfZ2uS7ioTCmzjY",
  "key28": "3LTyZfwG8UxFk1rQ7oWinPf1e1jE6uHELDdSuNuRbT4rvMpvWtcaZYQSxpjfcpDhva95Dr6Bd1aFsQPBV3Ld2VxA",
  "key29": "5fxnC8KELni29EgFxZL8hRE32x1MehFQd4SuktbqW3DqS5rbDqfJNx7nnfMc6aUtE4XxXSD1rHUiAGuw6MnTGkF4",
  "key30": "66JRSXm21fU3t8T8vaprnFa4k2HGsG8hbFBmok7ijmpHKxM26iryY4WNQbyy6n9pDWzJU66bHy3pgZaoUm5tjvCX",
  "key31": "6PMR5Ve13GUsXwpEkjjtVg2Swgs4qnRkuX7Vxv7pFZQ9yZQnCpe55iwW4kYo2Xp4wVHdfNjStxwYfzusXYvVVJU",
  "key32": "2xPJ9pXkr5shZ4Unk2BzENtCiDaW2XAuDRahM3iuM7FJP3T9ZZEUyvV1npE6Q9PZXjgoXKAfGji811N6WGFjFFeo",
  "key33": "3wCnnbbZJ7AoZYDhrW9A7eokv2FSwJxfdPe2PQCLP9BfboiS2XgtsTkNTvkQAA7e1rFqKnNqLFhgG2TR6cuFQPL4",
  "key34": "2u2bsrTZ8AumoYsVkYTX1W7SES8LASzZWSMbMFshDCqhFFpo3br7YiJrYUgQzGL4DQC6rNKLaf1gWFogr9bXoSbN",
  "key35": "hEbHJmJqsiN5FrczLBnu3djjgZwktMdWMQPbpWVRBnUEnuoTW5vffbmNeT7GUsVb4mTtma3u7v4xb6ZnneVroJx",
  "key36": "3eKci8umG137iSzmmrXvnvYvFZtvC8UyYqXyLNd5rASaVVHXgynVhxAhDcroBrXqXSNM2nmAS5PG6NK3FukkB4e6",
  "key37": "4RC1MXEACMyiSqYcJVjgyaXu694MvZbM2hitWSvP7d7kqviPvbXj5a1KwzGsdcJ9aj5eWhVBqraoG3bZK4KyYKTc",
  "key38": "P6HRX5Lj1kBmDpVPCS49StPs7C3X9ozTv7sREcfB4LJCY47J3KVSxJf85Q9sy7YFHZTtvCJZh7S4uHyjjaYhT7M",
  "key39": "4WN7H2sJohNwH55n92caZwtUncWbgS2cWoZdFQkHR32amBt5Mh3fVFPd2snbACCEmvfL3XwxfjuTD2HxD7rdaKPK",
  "key40": "3BiZY4JuAifsGSLQfpsenYsWjWVt4MnTWZSk64z98crPGyc3h4rLVMpqTpcxLy6yyBNkzRhArFaJDYCani7SBpru",
  "key41": "2wSs8hQGWR66JJHfm4DtBjsaJ8f2KPqEsu66cKwFQ1ydZ1vFCXtgdu511ND3Li4aLSMTPMYjuchexxBWwnN9W4cU"
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
