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
    "28RV7vXCBDQsihc9KLz8GTxvCL3mv3EYfeYLrMf8TVJPZS2HiFgUQ1ydvFi7dJqwEHtvt8aiqJEme9aWK73cNUwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQcFQiyu7tE6BVFWVGaiHAkB5p5DLgK5GiyonjbPJ6EY4GNg43WQyPVY1EzcubxJXW22X8yGsySUgt5s4nucusP",
  "key1": "64YRGUKdLrsBAMRXj1BdLcwQU1yFowmf7HrregxpE2ZE4GUh8WCqzmhwB6uW1BhZ85m6bdvBRrVaMeLAg3WZAHjJ",
  "key2": "3nC9EnE1wW1Wf8yPYb8NLkncYSPuqvqu48d2fX4CjxWvagN2oNgsrwkJtidCVPXT4K39SnZvFji3GWCWampJwZjZ",
  "key3": "kjUuQJMExus8uyHuGq9ZWJXA5L8vkUo4jQBKaGhbybYUFCzCmEffrJzH4j4VvtV5XfQRDzqURMhxfGPvtGw16Xa",
  "key4": "dZNHyptV3c5WDtHPe1ZeYfnhsiYcjLUaaw8DdHxdRaaMUnweU92WgF1YL8PHJDGmmBFtbtRMrwTzqSp5CC1toc8",
  "key5": "5X8CfzfCqiTRqniHkJzGTtstG7GseWkZpBxJGqKBzUia55FsTLjn6jgqgpMeAaWNEygG3pwUhDN6kdjEy74EFQN",
  "key6": "4eshdsm7baSF7j7Eb76xMjsSMnfWGWXRPV2v5gtnKuXR5AKYjq7krW5drRHWxvw1U4pnFf6ZSU5ooJ2KGyoygcZw",
  "key7": "2mvc2GoMR8skPrSYbEC6r2pUvYVD1JdZjLkp6iPbF4PYKJxEtmqa86u6s1YrJot1Toir9JxdU9FR7Q6bYwgaPhQK",
  "key8": "ZUzui5Pc6KQDKgMQAC1L1KKupHNJQfJjug8KLs9DBErnSiDhVf8UmA2xGC9Pw2quWUqLuAyegdXGSR32gFLiRGS",
  "key9": "5Hqjz38p9sJ3UezedYxQFvpagoRDmQa46jV5G7y9DorgmSpvPycPs1VTBzdJeaKMpxFK33qNBwQU9LEKhQCXmR51",
  "key10": "23L5KigNdFwfbcf4vLJ6xZkLsW1917kDEueTqmyYwnXkqhbLf3BtH5MR5nbtwQcGVNcU47a44casHRjUwLTTpkjR",
  "key11": "4CJd3n9TenmKB9s1iaAADq8j7hxxVANBSjnXPwWymWoJPwDj52pevJPqHHGtNm5vtin5VeMhamfgGUFaRm1kJXDG",
  "key12": "28VVs4SEkuZvZJMgxcrjiewDusb9sK6KCR9EiVk54BTo7X57bX9nBrDZXqyCE4u4bKP7yNrN52tLLvXccPJdDRJH",
  "key13": "5NSvJbBbjYU8ZFSh6iQuEhYpLGC9htW7WMLHvpnnozfqHcfSa3CvmderzxzwZTLm6MtPbUL9eXWJiLmrijoUJk6n",
  "key14": "mtgFv5HrrJqhv7BGXr8TkECgE9yaTzDankZtuVzYMiK12DMcS789oR9JkEfsWAYVEoDWH5a7FWoC1FviUnyNuRQ",
  "key15": "2VmSBWx8TKJVoZijKFoUd25JZYsmo2QiDttXqWjyZgHiaZ6xm1P6egyH7g14Hw7JsQbq61XUo54r2oPNP765KAEB",
  "key16": "3naA6V3WzLKZMDHa8x9NhVT3ZSvpeeRd2GbXwvAJJzmcwW9wR7HPnPA63N8LWJGw23V3o17LyYdH9KTbuqgJgSfJ",
  "key17": "2GkrRS8yaJHPpt3ztdBrmhhSH45DJEc9tEhNaQVc2EWY5JBZuJDgjhupehZb8T47FcJfcc1mUtJjBCx8G7UbVvqE",
  "key18": "PLmrGnMLNNDVgwqY2UauKH9J41W6hdeNmSJL9u3E4L3AyX9KiRWUX9owAKhsFWy8d3hfVtaeJYoTFafR6YyjvPx",
  "key19": "4HYdV3iafi8oPtpGGG7oCAsNkytnPbEivo3tb6fzwSeJazhePnEe5yzfRzWYmFMVocgpiy2fvTj4DPWVJwB6PPTf",
  "key20": "2ZMGjn6QgX1nuDYfA36s5ZUwq3ZJ5BWJLYW8t4WwrGJVemZvkG6hkqEgNiA1uxwkUZSFMZMdq1Vu4J8tTVLgDuVL",
  "key21": "3nhbxsw4uLE5ZuQnxu7ZfeVQXfX4Mf9LZYUxDaqFYjdKL89Uc5mA7NWuqq5rnmUpXbegWHY47bqa4ufdEktNSXRP",
  "key22": "5ZJR12xN5dKcGEvs5HbxgG5RY8sY9dRcKkUEuGkjTEj8qy3NuRW7ht7FSfnu5WMRS1SvZnsetXfPB4jQP3oZpC3a",
  "key23": "2BkrjWZYyz5YF7BwonRpbr6K8FjXQSeo7h69yjjbrCXQad42ZnbXNL6X742c2ttR1g11qSsNRD2FZg5PvuG2LTPV",
  "key24": "3WjB4H4bo4gVxTGMnozkKvXGGhZ5C9YKVyavb5cQ24cpEAdrAYFJu6ksNTfCfwvK9n9LbTBQfiY1pbAooSurBs8U",
  "key25": "2mzoHuLtAHwRZuVB5pmkPdBosRnBrC4VX5sYbFnZsnAiTHW2p3PwUDwJo8CSsePardmL3qn8syxGw44mGcDdwtVT",
  "key26": "R1FdVjmTrb4jZgxkhCGNB1JcS8EbFxxG4rJ9EwrZCKMvSKhPNwv1gZqmxQczzNnfZRwWiV3S53PgZgTdQcT6viX",
  "key27": "5qXH8GSD69Fw47yAAGr6yo8Y64oUcp6d2mi1mXbw3Muir17QZLWwbVjLts2yfqYSm6m6ZeJ6xhhPM8ocM1QYntWq",
  "key28": "4CrhxWrnRYwS7BuSFBGvHtTc2YM3oiZcnMbUKQieRhJT4irLmyjuZ699i9GLJKbRdmidd5SUxLnQVCzAjPWxnizk",
  "key29": "3YGcibAwUmXmqsoty8H8zggFWxc1VBqUJPd2CgUwbtKokm2P8ZPkKYVFDgk36MdmcPJ3B6FP8LCz63b5HaNb4juT",
  "key30": "sYgbqUVEzegmPtDJNZdErwmpDfJCSk9z7fHiWq3aGFHweVDjM1AhfkoUHjFaNXMsFxSYKZNgGccuEUJUgSBwnq6",
  "key31": "ZVznd7Fs8VMnQWBLBV4hfHN4Dvc3jt4ZPbRK3zqoJ583TeXRGnXkTw8Fwo4ujdMwACD3MrSEX5hCeHT3obaJJNj",
  "key32": "3LHeBgFPBnuFkQNkJJD3fVba66EUEaf4MWPyU1yNgN71b8UBH4W5KtcGypV8JZkn1MgWkXCED56USzHGNbPJNXsF",
  "key33": "4pfrMtxh1Petd6xVq8bfh5du21nbYmC6745qc6TNhQyeLS9ptAGtk5vcTbH45MiffEUqt88SNbcuw5oUpD8TXw85",
  "key34": "5jCRDEdTMwBAqkvVDqsWiRVQkbbx7Rn7cyJSqC128YSmCQzau3WKKbV2HuDtDEkoMRUJtCVSfcdaVVaKZBpT7dwb",
  "key35": "3UDsEzsEGDusY6jMVDCo6ubZXspP9J8KuMsT2J6zpq21dENNfRDjRMSi1wCZnZRbGKvrMKyUhh3k7XaNKs7hqPGN",
  "key36": "3egZKeBECzr2Ym2kLwv2amPBfrt6tQst8dLhNs9GBUGc4emRxVYu26yWiU1cBnCKTroTtUHEB6dSz1B5katQzZyK",
  "key37": "5F5JLTUPr3d9JP6dXSnZuoM2SuLg1bkUt7NY9Uipi5PfxvALL13qUcRs8yN8wy5gcc8GbGHRinTRoZaFLvYKeBAM",
  "key38": "rX4NEaTSaxbXTcPYHombVMX1KW3x6bbZYgtoknmEGxUNSQzcdYBB8VzHY8DLFkQjsccAe8styr5doSQD7JYzRzx",
  "key39": "3iXaUMcyJsHNdZeC8ib1r6P2eZTQ91NKJRX4afBHqMoTajmo8qjViX56ZMNtAotw9zD6P7CptLeto2qEdSR2pEyi",
  "key40": "2HSqDedNpTiLDn2f1tDMHF26paRq5oPJt1BGCAr1YocWvikz18Jc8EdmbBjvfNSa5JmAo6QY55DzkqTZ7gqfgjXM",
  "key41": "3eDuRBEnaBYGmcvrjvTRfdPPNezbA7puz3QpcnosXvtrSAgCjLT3t9vfgp4u1Xgq1uXnPFQpKHrJXSjYgYnpr11P",
  "key42": "37fR9mFEn1kcQPXQSSVuD8m1E3kkGGu8k6D7mY9WZmmukCcswg24Hs593XMQP1A6Ah2yFtt8ajTmBg6ZAZoVj23r",
  "key43": "2UBS93f9TwZYJuRgreJZ3srpxdtfuaiReeYP5SMswFd8FG1x9e5AV7J14GzGKMJWbiM4STfjh4b3PKPdwGQxZmPp",
  "key44": "4PxMdJy6fZ5XcR8C1fpsZcfPZnZHKbn2xktBvUtVT7xdvz3pYwMm3Jw2wdpEhpxw78xDiiL3Wj3VW2ZFJXqVxu8K",
  "key45": "4utDMPy5BfftMgEHmJHFm6w9JHoRcQVSHta6hAk7B4qMt1Zis5QKpBZxKvNRML1BuNovdFEXNooF1GN8brqq9y3f",
  "key46": "2jW5eZa75w4k9bm8cVp1ZWYVbq9MZgjS41SHnY6DCBYBDXLzNR3CndYGG1rAJRxBjx7zoB68xNjw4gf8S7D3cFYW",
  "key47": "5ESF42EquGH5grzR1y6p93oqKYRRbaauvCWsq55q9fvAUDsDHztnDRstGcCPp6mgEFhkpCRQK5xYLXDMzzHS7U3"
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
