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
    "328DTZ3pLyhpCYTL8rfRz97t2ZAqBpV4ap1od8SyaKG7M7zuzib4UZfQHVGfwiiVeLUDKYEhN4PwcnjcDUAfDv9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4venho2axQShD5VVGKo7ygKgvu1YBwG1vEFjvGYfyTEUnrCXK8ZjmBpU3LiawhaWdKsctw1udB9ZStMa6eXJ8U",
  "key1": "4beS65EfyiqgKeoAz6Rh5y5t4K89SDb9vMWDwTdo26C2b8g1ALLKdqYJp9Rvrwtvc2i6NYLa3LrDHyYAj1g64owA",
  "key2": "43mMhKQobQAiNahK267E7ugcMWU1mQEiu5FX8EYtatEUkgq7ssGLDzQGhADKy2ks94jvQzicpbaeRaakpGDW8E4p",
  "key3": "5vuG8pDaMeJp3peGhGX2ZdyVLSxmBJNSe6YfWGYJwkGhXiMEvcwLRAY75znGSVAmb1jgJTLHGTH6FDSsaYWEw2GF",
  "key4": "4HATWHznbpCftM4EwbxfjGr5wg9sPRpebuPMjauECgG7SWGrgkYyeh4SDTUXS7uJ6WpMc9KeT41VuAYRck94Uz5Z",
  "key5": "4vnSQM4vtf1mzBDtWjwPw2U7kfH6cHG9cKZhRa6ipyX27UMTxWAzfjFFAAmJcTQ1qjxf8U7L7ZtrW1SJNjgtSpMZ",
  "key6": "2UiS8sbnCex3Eznz2s9ASQWcojTeERcHCUtMu4PgeartBfNv2Vt5dTweGKwBiYzBhAJNqBe39v6QNANb1uH2ye43",
  "key7": "5Q919GTkKuToD42ihVRhDtrtBgtrYHbnQwity2bocZ3wXc6ipsDiaoyqmQKR58zPuDXsWj761VtAY6VMCDiMrVaX",
  "key8": "GSqUjTZEzT7ftc7kyhrejvAWYKMzudZK6LBPZvrsppQDPzpaPay6svBEjYCf1g2seC5DtJ11eyrKRoBJk3JAJZQ",
  "key9": "2T5SnbGYkQft6mgST4ooC5mz4iG69R8DDF3MAXNargwhpZQ6kBGVXhX6D5BDqEmgYmVwjkimTVRX5AUDfwEnU6hn",
  "key10": "3ZNDbUrWMxzdsUTxnt1r3Brnad4Noo614GFyHqLZqFVbtbXqPJQ5nW4FT3YPQ7JzwrkKygoXHXwuWN22ZXiNBiDi",
  "key11": "5nnxGSaDTFhVbee1msXFXRFPDtvMRkeLvnDcRkjZ1bcBDjZ2Yk8dutcYzYKLmQ7vcdAZjPW5YaTLNgss2RDd5NST",
  "key12": "3VLttEb485Hfk38yyWAHK2tt1nuytUdWRkcM48XyVsgpktEwWCGEVCqGZwJGWtAP2faCwrmt2b8fzft3FTkSLrEk",
  "key13": "4dVtKJqSqXL6MyLmEDseUBVC3ospL2sbNUWJeJPmKvD4ewgmTmT28vk56Sk9xviuudGcR3VxWqi4nBcJGphTvLCd",
  "key14": "BGWEopgPxGfs3WCTSvvCP78RRgp2QvLAccASd6pFcVBcW6yCnTFvRbcFxn1wj1d4Au93k5imCQqZC7H7zsJSiPC",
  "key15": "53KZvCQhQdAHh64KbpWHPWKhRCLExcQMmwm8XFRFcCh5ukgqQwawiHEjFjGNA1dAqWTT7ysGkqMvwNw9NBeTxCwV",
  "key16": "FLzY1K2y8ACfTbWoqxX3rjV3LRvG9TEBw284J4qKtciUj8kmBhcUwg1daxpCiWMVEcyPKdcyaguobbXJw3sSLmH",
  "key17": "2E2JjqhkF9z9RV8UpqXoVcm1ihSS34v23Uk7uytDD9eeydjG2EhBrmXwuXMwGTJkzxLT2Hx9KRRh8iWQXp5piBDr",
  "key18": "4WR8Jmm8ENgWejv8qFYuJd8TBGU3uo9ujZSmz21MTKx31xsLsHj7PogosnUUtFF2w2zxTCcHrcmFAWCYBNJGvJiw",
  "key19": "2qvkFYV2JByKkemKAbZndSp4JHZZfcYkzamSTqbi1r5URwPf5SsEGNYAWFf3BRhzZM85kesvrgo2iBUEWXY84HqZ",
  "key20": "d67fyTcEmeNxXHhxpfoNqU7K2qfenZ62VnvyDDyvZpnqCkjvCZ2tM1ri2tdpxBnwPgYDPTcyMiPGVUyqDPY5DSt",
  "key21": "c23xq4NhA6U4XyE27dw9EAiQ3VnJjzd6Y7sJQH2TVSzGbHBYsWnqgJygzjxaSXUpQaHKnzSkmNNVt7hyuSP9w4H",
  "key22": "4qF6eLmXSmb7QE4FtrsekTJsVncwVxDVeb5qCLJC9Pb3xdxx5RpwusfHP5zcLMaJGfbUh9TCM3akUpHjDuB5DL1K",
  "key23": "5bsbhEXL3WQEYQEAWkFfYmLt3kKYSLNSSfBudrsAu3BdLpTZfHMa3XMe6yPY944EX54iP8YAWhgzWsbBxj4SPJVx",
  "key24": "3ycEMiwmkKufozEeFEEKSUj4RcQ4QhBcCK5c6m9nDpqv5HiscEXZ56iAhnw17pUTZ7TCmLX6zbdzQiFjHikk377e"
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
