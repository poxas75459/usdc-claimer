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
    "36gGH6z9QPJbNQf43cxWgsRa3e5ZSffTKm6La3J34sGe3q9Zbg6NzvPFg84pzKHzbHjwWKENB83BWzjaxXjPdJYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VY9j93WXuzubgnAvfimJPyDGq26Mep8SGdKciBmM75pdvbZCMibzDPfBsHGaBQL7BdipKTmXQh3QHKwmY3crtsS",
  "key1": "HruwDU6cJE1hiYWJgSbNpTWzugC6yfc2X7gvxji2XbyTENaBePtWWaWWgiYXsARrnpo5mox8Ue6KFWJLCBmu5Ku",
  "key2": "2iTAj6zj1u4gLSHmPFnQAupueVoueaHDzQ8H7VyWJya884xpeCyRnMyD4Sy1ayQ5NnmZsdXtS5shyenGWz9ckQig",
  "key3": "5BSmRfAcqGo6xSeaBtYHcu6CPWyKx4D1gYob9Fnio9ysWNy71EriMifpyYxKNnw5jqpRnHNYAUBvaXBqxQ1Vr4JY",
  "key4": "5ytw6yekjLAYdMnuW6pxRpQTRuQA1z7PGQCdiL1rHXcvGAoTSQNbCcjWhZhR89T2esUsiTjrykisCoaaJ73AaLCw",
  "key5": "4xmmzaus2CHUfWJBioz4g3WJ5EUmSYU7mRHeDWg54WfwpA6aJzZ2pDSz3jZogudg618RUtp2eb3dTBi2WWqYB6YC",
  "key6": "3DTzKYcxa9pLr6nds8ew3d3vF2nbm59aBFg6qFfP6qWxJGJfsng2AEsK1pGJyEurALeXHwktfP3MS5jQk1xUPgAE",
  "key7": "hAUmjKrX8EUDYhvDnvapPvFVWosCKuAWpu5GkNyTHJ4kAZGrbZ3ZyVPV75hryYkP6Fc5jT8V3EctgchBFoaH9x3",
  "key8": "44MZUGUDksk5vNTxxiDKsvGNoY1Xm5Ubfvs99Ji365SesKnfDqcVQVAkaxd3K5JETtXLTmgTXhehdzxuHZir3cc9",
  "key9": "2JDo2azcZixJ572okff6TkZoH8TNaqmoCk1M5JDcEZRYdynkxLvGDqabVyYbmJGWq4T1KvT6qkVHEQcXweWBrmrF",
  "key10": "2SjLVi1QvrfzHpTRLtXGQ2VguCYiQNoJpHAfHQyY4NM53utm5xrvBjuWZobUYd4tvx4cCzzCHQYkAcuBtdSjj188",
  "key11": "3iqq57tnMkP7UczhNyvtweQvrcqBb4TQNbabs4YtW2TF1tNs1XSpqKUTwH2whbNAEZe62FtiVH6RXrwcBRBbb58v",
  "key12": "2aiVukzEX4Q2z1UjtJ8Qbixy9hRcmtBfruiG7oQ69uWSvcgtuumQ7uwT4FW7a74Z5ngcFPSXU6y2VGwLHdsrEJVA",
  "key13": "3595C4EF9LXZRmHbVHBmjJUuM8wFqHt61F9yXjD8VCuzYEVXG7RVqWAACFXgBRaSuw6RD8YjjCQ9sTpc75x6FSBr",
  "key14": "5KDKS33urGQjPtnZLP1Jr4gFrKnDNttPEtEhTiNcaAdd7r2oFKXgjzycjuXnhxJu18R31uLNnQt3WWw8ypHPbmgJ",
  "key15": "5NQyCjKMVe4rVXRBirfonUAvktQH472GvMr3BYJFGmmMzeL5Fy7acKnxmKTufQaEkbEzZGSLWwoyhiSw8ykFhNY4",
  "key16": "5sD3j3kY5XeNvQNWSwRyYs7rf4wAYscqTzVoRKf8i39VrKRcBMoKR8QTU4vZHK99xUufMY8L9KZVP6uDMDGNVjfr",
  "key17": "5fAbrsxZL2KRfLhDWNn98NQa5kKKRztPSzEzCkdQSHww1UmrQ4p71FrHaxm5B49RiRAW3SQrGU6nExZ5ViEv4kX9",
  "key18": "3RRvpH67Q3usX7YTd3uiTAb81Up9QvwxvynPHHzKBXyUFWsBT2BkVmMdckbzshNrAVvRTsv8ux7SGweWPZpzLZ6J",
  "key19": "LnxRM6oTHLfdVazB6NdUiC2zgUigKCa3uL3Yw5W2v6dNyVrsJCoZQ8hZvwNrmPStZ5S7bpYwHX6A4qd3N6twLaK",
  "key20": "25hnFv2P7x4JYvkK3KbqhU4W8EK9rNwsCQQBmSYQJwM1TJsArFBSCDrLgCh4Jm7rLm6kpBMjiCZjEM1xtYrXXyB7",
  "key21": "Xh9L6PHQL1ejZvoHQKQSq3adSRrQrbZXUE3sXHWrmiwdjxUsH7Qq4mxSYMbXa2usvqbFqtyfiAcSqqyuWWGWQPS",
  "key22": "4DmzRNsanZJoc3BPUVCT3w5HoXpSegbrBTEg3uWvj5h7QrQbomjUSjgikjtvGhk1aDrADefkbFFPWqBm7CfE19iJ",
  "key23": "49p466uryB3B3xmo6LUo4c68Xi8fBwU5JJaBRhzhLLLxcwtjjd9x8N2JxzQLc1cunkg4XZ8oFALWfGjNnUXySpSB",
  "key24": "5Jj7RFEaxyGogNa8MZtK8J8WEoZbvC1LNu3F73g1RcwrTn7WAQNQvDPYiHG7hk19jPTAnDH2FBiVHofmqwveffU5",
  "key25": "5j1tt9QfbbKJ4yetU6tPWRHpwTxsr62omipGUuK7w4xDfiNmGwkmmAYpnhtcUcjvxvDXgSzQhS2nzZ2ExktiBaug",
  "key26": "3M5cGw5TdWSc83VnxsRYX3sozAXVfF2DdrhCYQNzkHYUzUxefqQcfqhzRAkmLrisD4RciSGfjpaLWr32CKSkCjts",
  "key27": "567HeLcDEizCBxTae4tnPRhXcYkaPGih2GbEMVZBNi32P4UMX4bSJa3SXTvxkFgFZPhBWZFkSpENkvta74285eaE",
  "key28": "89VPacgAUXugB4Hr1kfx1nXe2ewRncYHR2DjPVjfbXP6Lev5fHVf4ZWQ7fygB9qvpfEscbg4tgKQHiVTmrBytYg",
  "key29": "5dvrfpSMmThLEEyv6nuhZNKkMsHo4Vd8QPh1q71J13aP8UMWnbLdB9J1q8MzfavkGGxC269GH7u1ib8jWq8LzWJV",
  "key30": "63FUFZtdspSYvhKbWWXsGkiZtPMfFgw7oNgg8rtW4khPSZBQ2vBXZoMMgYcoVX66tP2grUSwjV72Jv6MuKquGz8z",
  "key31": "2ZnKvJ21AZ3TDrmGxyhKsy7kZfZGQDurZ19CfocTwepRdyFRnf4UkyYfqoamA7RtHHBJgjTN2obwLrqVzYrdJj63",
  "key32": "zM8f1kGDpKGKFvkHSRBMStYejN37wcZ7nwr5pCu2Jyk5u6HtBfGbEXqfeF3xQFzJhVh6LwdkA99a4fqkAK7T6ye",
  "key33": "4JergB43Qthoam2rs2UyXXrgTPQmyZES4hV3WshXNcTLSrVhUQmyxGdaRRjeQKpTDZaqg7neVdgtejJozWVFuoZS",
  "key34": "2LHt7w7aWSbkzTmshJVVUuq43okr6DTr4swanTDF7J3sg5qx2KxVTikyXThjuoauqH3FpYRVWmBJKzWhBakpCCWr",
  "key35": "oWSJcnVENnFqHzFJBrKd1AoHhqgC9GpHemm4xTCwStCdfABBXKYwYjGuLASAwhotB3kGkVnUGQuKAyjddLYUnK8",
  "key36": "3VVsX5zEknCdzts5dvHB8dqjEhDyUL5rFntMjJAhdU2YXo2ACrKsYaeU6PyimUpTcAps6Djjw3WTNVaTBvna77ju",
  "key37": "3FM93MBN5pJSKqLY7q92fWp8BQhexvwyjKVSzLPKh5AtC9NUt8726JWRM9uGyQhbHyHjuwzzeNKanoeQHwQukEar",
  "key38": "36KKvtXKYcWJDeyY52XqS2zSJX6GDY1RMAC1nA7Q38dipthmD6iHkmZXHpafW2BxKi6HHrk9phbTD15qQF1HFQq3",
  "key39": "3Gq7Gob1EEW6JyFPR4XY1VNmJLwDKNeLVyjFBqARJehEFFwwThFFHKeNMd4oUap1sdbnEXbfQGd5yBRcHXAim46T",
  "key40": "47KKq1LRue2awQTpzvAkd7UefjFLPYezSnqpdKvZLn5EZhZH9y16MTNv5j5rcAGLhAoAyB2GybUA3uvqykC7xPei",
  "key41": "4crMsDTpdFEFC3HCuojyguKHNx7SrkrLoUfdJ23FVrffKZbba8ggvFEKDmW5G8qRUjo1Zuyy8NwZsR74kKNLqoD7"
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
