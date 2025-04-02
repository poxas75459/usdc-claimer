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
    "WHMhCui5B2UyVG9cx8dGb8Lov8SRVHPnb9SWFXP1Sguin1CZKyfmi1dyspHX1QQPE5fNGifzuJwmr9y258CzH2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVjQ5WNsDJg74NfB46khFEFvYC99fhhAxtDCY48FurkzD5V3LfrFFbDzFQzAEBUYYsDeaNxQ7XiiPY2j8n2T4SN",
  "key1": "2Br69YGqYZds56uVaXLDjQpz2gGpUh5Q8YCT5nKSA4JT2Hy6casogXAEALeKEJYZ6NhJvSLANbWo86E2CZzDPwp7",
  "key2": "4T9zyFx3nN2iegM4TkjYgd7enmPygpZ65RPM21fcMfMxRiaMpLKMFBHERx8Rd9KgKm4xoy2JUq69QFU9bvA7gLqz",
  "key3": "JbAz5gdNuns6BjAtrVUSRhjcKGcg1yNNEAuP4yFKXN6ZzRJH4cF8Qbbr6ujkmk4qMqG5hk8FZnguVtSjs42qSZ2",
  "key4": "JeLzxJTxqmgyN3jqjbGkhKFh3o5eouJbUW7bwPjumGVNXxW5eGJWun5WcbTU7dKYYuUVCEFcCSULYwFX46i2rWc",
  "key5": "5rmpS5pomBwaJKtDW3TCJSdPb5Y7TfDWptdFoaTA8aECGdFR6ZCpiouCZbBgPJQfz2oZtQJ1gG24cqNf7LPZDtxU",
  "key6": "3AVqM9Z6mdc2SPU3tdebBBffhhhLxUTFLkLmSiAMiZM52vNScYcg5rmbkQpt6Cx7Txpwqn5n7BiYbXsM7Cy2GjYP",
  "key7": "22D5HECEJ4RzUP9y4ozQfUUGTvmDnoxGcwTByZ19x9yxk6kaz5kVvedBUGxgfJmf2ZVYkuaBwNBKxmFRBwJ3ufVv",
  "key8": "2VFZ9SzLxvyKLktCAmi7rKWtgk4A64bAX9boHDDeZrFZMHjnPCx5rkojTbTPLGRzC6tTtiHphPbmD43khgL3wUvf",
  "key9": "4KgqFLZ9Zkz3v7Cw7pkcnJyiYF97Ai7J8w6DmRcd4K6dbAtZukE4Jrajn1SfuPDJsdouDGdYX3pejnSRh6MpELMe",
  "key10": "d2Ekz4oQBmKTKafrbSaZG67CE5hf6BnoSCsiAwdSN8VEWk9gaBfKecZqmv3EWFDDHtDbmVwUFRGsvVTkzmTSBoa",
  "key11": "2Y9ke3Y5nmNUMy23fMonjbgfmUZRSFBxoHpofbvz5QNJ3yGe7cYca8p88uuj9dLsF96ThwYdF3LxMnq97JuBQSVU",
  "key12": "NhvtDc9nM9aXoJbXnFuREmCTyUSYomT3qq7TABD3SgQq9gRB3uojqJNvHATYzwXQ4RPcR6eVWKb2YdYhjJHWUNc",
  "key13": "3yqk2JMVRXTujLSbMcUNVBu146VjrP291KrcoUAArrKSBjpFDwBNDJKtHoPQD1rL68GisNCjjyCxWhyYuVDuXZ6z",
  "key14": "5NC9vWDc5GbfTaZFo6vh7YtSodyyHMXxsiTC8cuwmYQH758AqzbkBzh4GgfuA9fLDnjzfp336X1KScVSsQoD5Tco",
  "key15": "2uNXu67rN77UX6GisqyuzeD9B4ddkEDJctppLSvF68NQZgAfJwbweTNumiFRPQu1fuEf4y3mmicJzyvgWvKNb1dV",
  "key16": "PmpZ5rKAUpk5XiQdFJUW5h5C4cdZg7eZs38FXayxdeBEXAXMWhX9XZ94jzMioqNdjgStgVTF7RRtJm19RbvdnXb",
  "key17": "4NC4U6FRi7MbirT4WVji5eWHDVGq21v1yDTyRFq9aX7QmHiP7msyV2SoupJFiB3kSsja2BYtNR9YMtTkjpEskNij",
  "key18": "5zW7FAm6niUAG83CX9F6x7eZPENaEQMnXucDRyK2KVb9u5sS5WysBaNdgsUUnWSz86WtfDdLbRjKzFyZB8WdmySp",
  "key19": "3HLbs2Ni7CBJ51FCY45pfsCRXD4q6TobkKX8QyDVt7P2DZeLLirCQFGW3LDy7GgTzKnREgS5KvYCpJ2hEe6esuKZ",
  "key20": "3fiJSBfQDfFAXvZ3eyZTCLCKZ6mVeJyVcLx99xs6ggEq1eajff43cmRrbqrzWA572uCxxx7mAJXwecpJdnH6XvfJ",
  "key21": "5qsPJ62CUs866oWNh8phozDLwcnrekM3cWArieUzzG7SqFAshXmhK2LCwhCC66dN1kiNhmY7WoAtE5Vf8ybQbTZW",
  "key22": "5P4yH3NNzQ5A3wVu4tYxySTeuZorc7hrpYiCCQ89W1V1A1EfLExnfk59Qg5BTdbY77C2cRs8FeqRiLeJYPJSP5of",
  "key23": "KYDuFAiENwEKQXgs6p4zx2dTCKQ32xh1wrLFBeFL8Akz7oEpDaccFfGXHthc9cWvfXqf8XjTPQrNboGrQwLuxy8",
  "key24": "59CUx7GnyBkrcQhzLoQJwpAbjf7wF7HTSvUmrFkEzCaHanKDw9vXgYvCcV5GnjignoYbQwGBSUkujYcN2ea3gVTp",
  "key25": "3ek2wVJBPhSbvFm4GY9W14Zhkjuz7YJhHhZuRP9YHxRpabt1jJyYi4TEEpJJgoqGvgivYKiwv81MBwWESwSEN6v2",
  "key26": "53LjJgWRidXuhJteyr4Q1YSxYUfdTgTUYepaUB2kTi7j3wc2buyuP1zL5hinLb3H6Do7jtibhgNN6xt3pov4YJyD"
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
