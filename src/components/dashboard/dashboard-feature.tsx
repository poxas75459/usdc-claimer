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
    "4xTQLRCJ9EiKwx1nLAsZEdCg4LTcNSfcYiRVsWodeQy7PQ2TEY3ByoT5b9PihFBjnAqGhErRgsBvL3vqEdDwhik5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgYu4eV3QJjFbSxidjXadvD9EEL4Vyp7mYQU4uYqJwgbUWxCXBUPFR7EDRgvrfVN9NEmkx8vZkiubi1EaX86Lqx",
  "key1": "259uYApW6vPLAv4UXo59LDRwXwo1By8k74FuyZjt5AGhxhPPCbvU8oiTcmYTV9wRrnZtHHRYfTY5Kv88EtdW436v",
  "key2": "3pvHxdsrUH2vjxrM19tJrRTfpQYrMGWDMq4mPdn21yrAsVTyRicQaY6rQ81oVUpXbGmsqUsJVp52qpUioL1RCfDs",
  "key3": "FkvsMM2kWWmUgE6Yg2DyAnPBeqRHgjKRG5mm4QKS36JAy3B7YCGZLckBdisMfZFrVqvL8W8BRqZNMW95peYQzyF",
  "key4": "2Jr9kwdPMNM986R2GmoezPUBsPQLKNrSvkGgNNMqFkevNZZFCnbDihbuXPwSKAu7arBzXthZzqHTvETphwDUkiqC",
  "key5": "3qnYEEbSraTN2zb1AyH8EGBP7bH5ppDtWW5ZsLx2ehAdP2Unm4jFtVQw2kxEzTbCr241vKyXE5abzn9gYkg2iCkw",
  "key6": "2fgVSWLdk5xz4xPCeF41fdB7CgADjSUjjBzRFpStKEMaB1CnZNEPinfGZM7WUVsQYjmy9UebwDttu4rJyKx57GXd",
  "key7": "2rtFY2Y8HrcWGZ5Y7mY7jTTXWUjff9F9M6Awu26zKDgAo2GvoaXEPre9XHNy2pYRY5RzugEYxc9rbd5mUvUn9oLc",
  "key8": "3VR3HH6wJEyup1CSLkm2tH5yQheZZkmhryZg4oVriKsAJXvPqFDY2K6Ub59cNffdqxqGVZXW3pSBUrwDFxHU2Dv",
  "key9": "2xG6qUev4kQkyEjq6FNahdC2uEp44EhBBsAYxA1ZfQhfjSipK9UypEGeqb1p4gg3CfqqpDq2KD3e7soYarBD99MU",
  "key10": "3DFgkEzMzjBjYDC8zY6zU1xb7LRz4W8fH4xpQeXMM9eBwKLDb2nor5QTTJu9bPnrjuKCRTCiJtmdAybrRee9Dfbj",
  "key11": "4X7yWZjwGfr8ncUkwAeUp33JeFoMHNHS7ti5yFrWzJywWr7yCbVH8kw1STrbUgMr5h3kJap83m3SnuhduXDxvbTR",
  "key12": "4krAhrU5oUWCFnfZHRn5ubfDssaJfXi9PXs8PDgpqPJua2DGKPAoCMdCfa2yUiRstNmyhfphacidkfzYXPVhEnHc",
  "key13": "2b9ZGWrCLBmaqFbqJ8nTzCU3gbS9ywTQPpHzGRhivBdkQ5tg4fv3T7SLmPeQiaQ4QEV1hcfB1cCekVEzovRqdmMC",
  "key14": "4z56XR8ge5x8SWZNW1yrpdihRuCwbwz6KwD2AxTmc2uJSJYAcAn7N5vyLSVGvaaf4sek6PNZVZGiqb4hyvj5qTMR",
  "key15": "J2WDcnU4RPRWLwHejE1sKjNvz1dJ4XAB8DMhh2S4Gc2z1DWWuzCNMC8ec9EnCuHLmyps9YCdxCmyGz744tW3GXd",
  "key16": "2AJdsFydBKf3tTmGqnMFNccdrw19K1LwRVU7PLMK8P6tmsPwTdKrGHBgzvpd9PxUKtxthztvjoRLbtGjw4gRPVMj",
  "key17": "3PnzE5UD2CUojQKERDy4sJEHksyYGY1vdngUfq24MTmc2vmnyC1pd4LCNrmTGAgeT97ZaSTHmBqoSVDp39jhbNiX",
  "key18": "3kWXEBFEabWkCAMuXHX4AsZE6awyiar7nSY88Te1WDG2HKQGvdXw6YcMQ75EA4gztnAACfJHKWbWj5MrrRvzS947",
  "key19": "ALx78JBuRuFCN9FRz7o6PPCT9NK5usmr68AgUadSNuf7B6p8kHmGoiTLWkqcsgqnspvmT85dhRPnXiABXhnxB7S",
  "key20": "2tX7AsDQKk6yM3ZtL8Tj4QH6JukkhPC6S6GNtLnUBFjr9bg2EdxhEiVSLUdQQHaTUj1Yt7ghhZFRmt21NJDV6NN3",
  "key21": "57Jxa97ZxQsaFwKqpdB5S6Em5jHbXPAUvh9W18ZySVmAVvPjqhDFKSN7eLKhdxFjkYDzwu7B3TrQvCThiaGpLrEc",
  "key22": "4K6NK55XG1ucGLJTQ6DJEUyxqSUXGN3anZvzSYo9MmqojTAJp2H44fpxUQYWxBJM4Tpvy4xfXvfuEtgMkHpqMr2L",
  "key23": "2WEAV5QrQNbWvRnJneXZkQj1c5bZj93ghBjvwYDvPLD2AhNnTg7UskNZSij83D5rjCGbJ7QfVGBY1NG6exVM41S2",
  "key24": "4mydJVnjcuRGy8TVn7KzBYHpZLGt2EX5QGHgdQFtheemACHH1LJ29AKvVN7vvzwxD8CtsTEDFr6v2xTLpY86mLxN",
  "key25": "58pHizdCEWTh2GtC7YTFhohDXxSDqAMFTwZZjowz31AqJyCHZD6JSmmGTjNNYaUuGLBmdD9G2LLH3zuS3ANzu5i6",
  "key26": "4xQ9H2erg6zgjr5xpXxydCaw38RCk8YsAiYjmiA7VekTj6nc6mjYfw9K1aMC4ieTL9Pf94sbakpjQVotX9gLFWfY",
  "key27": "5yuFrgRyct42xRmmkwn6wFef2DbGokk3MTUZ2ZAJd4jFtxJwhxKWNchdkf8LbdXv7R5FRd7JYUhJvKd6KSvhJXo2",
  "key28": "24nhnqo2g1KPvHFkAgez4QF91jMf8bHVotA639RjDsGqwvXY43cRYiWDKZ5K4jCuTkWksBBcn9n5UACp84NCZUdJ",
  "key29": "26zJSoSo7ZVvkkD5eb87cAvuzDn6cZG8KfGgPde2t1EqTvAyh3zB5fKB8YjPBYPWgEGXZwFkfPUHKsrt7MiaWMeC"
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
