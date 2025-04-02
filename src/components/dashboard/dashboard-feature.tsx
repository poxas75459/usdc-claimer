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
    "5MrGUYH5f7aJsRofMgCQcxcSWVr5pAFNxSXG5Sn9mN2by5897MhtNaAuUVZithDppLA96YQXJqqTiGtJsz3e3nco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V4CeJ9L71CZ1wod3HeNT5xyPdbXbjeTNBFGjQ756BTPCCJ2nXCRdBYAys1JtYAtsiFdZXWQBV9caW6FbjYk3XVf",
  "key1": "2Z1NHNFsuRVnAGdzEyd47DRuDoF2cdvCAquBV6CMkaV1iquNWGkpmvhCRZipCczQHV7RiYmWgR7qVQHg2GVY8Suq",
  "key2": "5h4NJrLvcsG5MDyn8NFYeh17WSfNWtaff3SQ1WzHiofBLecDg225zn3J6kDZXkTN8vcbYrdn7ArARvh9gVABMrr1",
  "key3": "4TQYHtNdDphHSBs6obXJvwEsciK3VQf8AEcxKhvpE5nLon9yXZwAYJNWkcSidJBniNBSHgh9BEwrTeGajmJxwrkr",
  "key4": "3cyYwV8zd424PY9t41tQ8zBYsAZTTPbtsbtzkN93hS8UkRPXXb1UTEGzSfwbL5bYcC2cJzT8jS9Wi72dkX69UeK9",
  "key5": "4Wkjf9y12WRC9AVWx7RwGdXZTTsMSMkT1hbVpP8Yd9S3W5uwEaHSpCyCjSRpdsKXgQLhLokQ9Y8CB42MBSheNcoH",
  "key6": "3S39zfMqaNxkUMr9KXU2nibVKRXQNAjCNob1k3bzxBi9jRTZZpVJQ3jr4xzjDoxsU3NfudU8AxcncCkcCDkjqk4z",
  "key7": "4sV3n92BLmTxtELgiaT3tSLDN3Q7iy7naDuNtWKkDEoBAXbjk2VWteS8UB1Jko23GMWBz948VUBsWFyiryQhNZFg",
  "key8": "s5nJgQ3kqB6R4t6MrAjm83zb4FnpJzzQUtu4aPHbtQfTwaSAS419LGKEmwwteE9CFvNPDGyR4Gv5nFLDUwUUXZ6",
  "key9": "5vy4YXJPMR8Z6nBuyDWzXSKr2jsJBK6C2FnsKkCebxYDz6aWxQhE62QtXoSbbdEJ6NRv2yoERavCqowWMdbztA51",
  "key10": "48NfaJnLtvqXcjdUsjjoaNZhuQ3qn17RF1ZBMfz9Fsr8Di1W6x7L3npAufPQ4dW1zfGNdB9xTBFufk7FaB7b4QAm",
  "key11": "2nmcSeTzyJR2Rs6rdcZnVTWJL4vw4VYz7H4pSJpBQ4H8cx8AVVBLsdmLvunGJPY6WzUwQSrSiE6tcoQviRdAtmZP",
  "key12": "3YQaCKdKaAD3DWB3uBBb54hQFEwppiWepX9KbfXBnbNH5Cvy56Vqw78njCSEAMSiaH2eReD1UszhN2QTDB2yiCY2",
  "key13": "hdCKXK1B1zxrbK2gLzaqnW9uv8F7vzbYw4zeQTKdnHD72BhE5Jd4hHsz7HwCNiMe4weqvyYp6pTSbgPFB7k5pAX",
  "key14": "42fQDURpKsBTBuNQrzD13CN55uTS7vyzaP3zqcJp7RpbgDobhjzakd1ghtTo3GoRXU89ERTTdHwt61B1hoEr68r",
  "key15": "3cfRVhmihXyQQy4uEQguVZqBkBoQKEMcSJr2kf5xryn7c4NRPmmnyVm2PVsXmjkPf1o7gw1U1VoN7qv9UVMh71dj",
  "key16": "4qwxMLxb43DKGF1x6wR4Gfp4o8VA3SfipHVDNqE5AKHmMREmLY7JoZqwrZqsNE4hSoTSmaFbo1Ho7xEYpjhv5S9E",
  "key17": "thRbAPov6efLTX3c3LxBeagYrjpbp2CTQgornRB8C3iaWkaNNcsyFGUoNQ7Mqahk7ZaSygiXbREUsKaraHYtepN",
  "key18": "25nAEcdMWazyZ1HHqqsPSE9Xam6dRNg8oJgnRncKavfiWX3J2pzChBKpxaLXpZpafELVMmXdSeMgHJ6gyh7avibE",
  "key19": "5MyS1f7noqUty62VJ4tcKhXNLoTSWP5beF3BwNFrJASG2BE8JCCq1S3tupC42HMW36fbvLcwBvxk3aEg7h3r5SKj",
  "key20": "4m7UfgHV34x22HSWnwuLLoY63k7D5yAsQ3sZYz94Y4ghnpDpccTZGTU3KiWRPaz6SXcpJ6RQBaY2HJ558aLuxnqz",
  "key21": "2zRJmKU4bCeo65yBiDEMSqhztKJdZGys5FZRxoSJRjT8PcZxNyAKoodRchXPuSXwX341KUY8tSseC6Powv3NsYGW",
  "key22": "DbfqtvMKLW1kNoRVPFHBW7jepCHzcCzUZAkAGrJsh2wjHB71RM5UNBTa8AMMxkbaGhRce8sFsWUVKjQSRgSB44g",
  "key23": "4z5b1cuaT6Qm1RhnPiLbnZBtKd9NRQG81hDzdjHbTRgG9wUr7PHFMuagcfhCyJ6CUp4Gd42HMraWF89DRbnQvhNo",
  "key24": "5FRH7pPhyK8CdMK5mPqzVmzAdvPH4v4PSPxgK3KDu4U7TSSvf8kRt4mGK2s5vLpCkK1bkJN23Vaspuz6FoMUdDDc",
  "key25": "584oCY55UPA9TgnRY9FgVPja2RN2FSTgDjf8S2wBbfUbSdRtUbKGqdzghyVFg42knxodgxAHcKREdSwsXwSeCTLA",
  "key26": "3KVtnSDqcpDJ4CKgankaCQMrxUZjYHg2uXS24MVCoAtFh8vtYcxjJwrQnRQK2JL8wAfHtoq1xhiR4NRnBjpma9kR",
  "key27": "178J33DhGE1sXuthtzmaQgybXjGEqPcTRdPP68TzME3XpWZR7sysU9JhkjwXoyeRS6RzinFBFnkiz5o6fJ5XA1B",
  "key28": "5bF8wJN5LscSQY6GgqxXd2aGZ2tTya5NWuFWx397gnUADBJXCJCiNPUwDk2TMpjLgr8Figmav24UtAsew5spgvz8",
  "key29": "4o9gKW7gUxyv2FQU61niJfupF5UouqKrfoKr974fdw5rNfSgg6Xzq5YAHT5xkHz2Buq3KkFyiRzmnrhscHfkPibx"
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
