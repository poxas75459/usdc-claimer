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
    "5F7fBJTWb2Aqn4J5QFEAQZwSimdWkpYtg2BVJz1VPg9Zh2JQaEn64JyypebRT9JLjh4VogRTCWfEdviX81pozVwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iUTpzjByywu3dqfQjVYC4vCykRB9WKnsFmDcHYeQWiet7yL8dkAeSf3LxtLk7LJuwQrZ5juFZsDom7ZXFYJSxzD",
  "key1": "5mxSDA8Ne2GcAbgnN6PB9vnoLjJmqirhFe6ZegyjNNSmdthDp9h38GWdGGGG9Q4NeRw24s9n3w7YBrs2VuF7431z",
  "key2": "hQFT3FSFREgJk12yH7wPZCYP74noD2KdxoFG74mxibrkKh9dYhNiuhcdPTouH925nvwpfTrgMeLxecQUeKxvWQy",
  "key3": "4oC5JkNh3wkiFhA569rJ5F7wDZZvW7iKmXcXpy2u7TdK4R3FvWVh7aWJh1gLB17MTChTojgEgk45qXJfXh3UoX3d",
  "key4": "4gbMWfrWM5jFEExH1NhZY6rycVdGbG1xcNV1rrZyLEKEFQkbx93n5fXdfXa3yLWsxMwbvrgs9gJ6BpcXdStM5FhH",
  "key5": "5XAnxX3YDCxGknJqe5zoxGcjr46RtCKfczkCN5eWew467e3bCnStwyJAEgR72US4FookB8k3mZffqAChYx7zvUfV",
  "key6": "4azXRyEka73415ho53zCjJLfBNi4qDr38vRGd2k3ybaeY8wpcBEPkCS7vHEEFQok8jX1MCuSLewhkcYCX16fNPwS",
  "key7": "4sDYDXrFfYEgFRAJCxUENjU1i5AxS41Tbat1kqWT9aTfenrbuvL3djqU4NusQw7CwEFHSwUeT52gXa8n6boGRFpy",
  "key8": "59MmY7t8ggwyCQaSEPZ4jLBtpd99oU2FVYTwv7CtDVP37VhGKFVp4P5Rw36pxdtVgvqvGVc1wFtm74Lqx5BpmgES",
  "key9": "2tgW3WCzELys4uCNvxkYpC9ucJFJxE28BUb1ykCaxLf1mJd7JaS2ijqA75ELidYwgNiDwYGmQWg7vPkkYDnVKAHA",
  "key10": "5vuKnhUFnXrgX7ceJ79wQFZuAxPMdWRN56Fbuz4SprEz34D3PuducHUoa94Kzh5CHwngf2w9iJi3YmxXw2ayiMs5",
  "key11": "wZVSnkdCP4mF4dqCidwAe4kvcS9aswWEELoHPue9a9ToSdeDiXBVq1n3rufoH8Dagkqsf7xieCkE9QNKjZho7sh",
  "key12": "Qmn6CsMcYzM6MpMWiMSLPaw35UfZamAJWgW3n3djutwyfKXq2VcbEjYfciJMWbuuc6aLRAkLMmoo97s2K6Zm1WP",
  "key13": "4e5hDcAfGjbQSMjaz5vSjtyRLf6X72qgwmVsLMJ6da8Qq3F9vSDmHgxu6HwFWLvVYmeCUkdzUw1oTxdrCG91GgMF",
  "key14": "5vhAdGzxsMdU5ASZeoAQ8MMw65n1hS1SAyhBPg8yo1mQF2CcWhPuib3YX6tUZVgTQ26jBjoGKugdvbmwogYMGkPY",
  "key15": "5XGYZeABQ4GLsRiPdx6NBgzxW6NmYkc93d9mARBHkWimf5n2dUwyR6rknaYgCAZbcbK9dUxxhoG53hhpDEVLZaUv",
  "key16": "4aNSBSMt8etzQVPPPVKbigPJ56SKTup8W7UHzdzXMpcvVAMooq2VFzVdobKhvxmHCYjHNCwWxHd9zp9FM3K1jZBc",
  "key17": "5Gn3EW9vfFcBgN94U3ogD9P1D1i2TsRuvs3net54saFxc7HLF3QzB4XUKfKmxvgZeMfFWvz9znRapnKsktcVLF1N",
  "key18": "3N1PKPFZ9pWYK8JXJcsBsMiDzJgLsbZVa7TQpAdkucZLBkNgyX1CWuGq3EscPPgWVGidGqoCD6jfNUk3omQgp1Nz",
  "key19": "3d15iH7us6wTDK8G6jyEd5zbWE7CgmN8Q7Wu2f1V9DxGJx6hubmXahFQQDU61usU24evecdFVTQ9751LxVQDLQyY",
  "key20": "44RPBnU3KmVCyvcWK99YKe222ujAGT3nfp3GcqfDM5HjHpcYKgJHDvaBhRWwgugLv3QwGAp4EY5J1wvBL8yjnw1n",
  "key21": "43xeERXoWu1X5NdtxnP59oVvmwUvFAF7AJJgdPmBFzXyjXee1emT6fpmM1xYz2uSAwt3i87YtbT9EemGK2fMPrjr",
  "key22": "29oowBdT6TFVPQwGWr5BmaXKUyfeGAjeZCzmRdjuWUH1MbH8o3ugNz9iuLgmXaVoWsoXouDtRyR9WNugCBXiJQ2B",
  "key23": "3P68g2yLXx9B713ZubS8JUJn7apoCSGdVRi6LXcu4WbSikA1Gu37W4riBB6fhLwNX94c2hk8gMjXG51ew7mNJJeW",
  "key24": "3JvcgseZoPV3ELVd5xxV7Fn4EVSAwwaGRHv4feSJGmqG2NiNNSSm92skxBKn35HdkYDYkk2hCyRdK6ZkHKFZAaqb",
  "key25": "4HmGQUEfWYxUj9yKDcaq8ntPo3s6scfWnGK6w8qDGEpREeGtA2V9zhdeDdLmU8Lka6oCG5A4nx1PHpWvxQE9TSbt",
  "key26": "V2VqAZdxbjG3xbCVLoMcvfYRNxZrLRJKQQ511eoGrKMzuG5VjhuWN8o87qdwqF7v84XLQ6ZQoHxgXzxUVr5LrVF",
  "key27": "4Q9UmZWXkNCKYbLs8vm9qAGNYRbF7ShcxEeiC5zBKYo8q2tYu4rNoaXExhbeZNABAfw2kTB5u2LiSZHyNCuhDNsa"
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
