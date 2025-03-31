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
    "5JQUcAg4st8LiXvGa7YY1dtMKJHsSuFSEamPYQnoqtEifiTW98FUS8v7cxX5NfXviHMQpYMm2Tab3f9DQifvbrXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vHsMhyQzPbbXazfevD5TebxxuSKaCAJvUTC7dPGAYa6sQ7ZBuZXAi3B4G2Fao4A3Ruky8HJsxYHocK9nk8B2QN",
  "key1": "5zbMTBKDqLryE6isaTSq3jii35yCBoGSVoN336YGwbcbCH4KHsqEWiehcN5ktq161GmnJsB8mhRJRii8DwLquzoW",
  "key2": "5KCLvphVd5mPe9L3TsQCmKpKy7D81Bpq31eDAxiWaQKBNBJ2Mytw9SysWfFG8iqy5j39M4VGWKXXUJESMPKEz8zF",
  "key3": "4Nad4q5XfkzbUeaTXN2BEZWZPyX17CtckNYDNA1176qLDZ8anvE6zSGUp5zUYSJktquDZNhUHMwMTq61Z4VSvw1q",
  "key4": "Gc1o6q3gY4QqszCd798dsWmqjBpTPCPThM5sncHfFRwM4fojDWjoNfCz4D5GXyaaG4TeGX6GksbWcmWDpY2V2N7",
  "key5": "2m1XK8r8P87RNbEoF92B8NL4mWwfM5XhhyT86YW3sw2m961APwuS6sVz9XPsZS2DxWSFr81YmyorSbZgAGyjvxY2",
  "key6": "3prVGhjyWM3Bf8D58TtVuo6pNXF4LwaHxX5aoJujdzV2reNDSoGdiuop4vxj64pT315paw75y2PEtKR2m1xZMdG6",
  "key7": "5Uu8rjRPYScpm2ZhzM3MZRubNWUHzFppvRzhUhLtJDkh1u4ijQkivre8YiC4Yd3QtxcCZunuG5HB1VrWAJoANysu",
  "key8": "4VvB2iGVLoEEnzDVoJZwd7bPaH1MsSqyNiA1oG9KNsbXQBfCW3yf4QAuEj43EtjRo7G3U7LrLmUASmpf5QGMHo6L",
  "key9": "3cGdu9X2RQ2jpiv8Yf1Py418mk4BrhjRS8Az9vChRmmUgg4o7nCXAbcnYJ9AZqGEuiCp6sFxztx1pMMLAbmZPd17",
  "key10": "wjqf4bhnQyqCVUMbN83R7LF4NUfeV1KNkcfxvGSPf677wUXk8BYpR59MNuCsxV8Wi8wQcpGbS5HdEZsuCk7jBvd",
  "key11": "214o3FwzvFdSApm734MNwLur9QjBMvYsFZ9hqhL8oqHe177Z9sGgx5iV4JftT2VUn1zhFvCvv727U4HxxkzZhMTF",
  "key12": "GozB9QvVHVuUA7QVwEXFVSu5ohLW1DGSCvsyaULURMpTdpvfqHYFa5xv59CS2tFSsMDu1SFeAT5cqHXCZRURHdn",
  "key13": "44kbZ1urSHnrUthWC81US1TsPfeBvy3ST2iGcKdiKRYKNKHezkh4csReboEZ4fZBZLXkAsGqpaLqxYfe8Go5qSzL",
  "key14": "5vGr626wpBpQGSFCuPrShx3m1YZsCegxReBBWsdu9wTCoLNA6kpPhdp39ACyfbvD99WwgjM7W8tPi3L3LyiW6avd",
  "key15": "5Cs8k6wkURhYFMq4ERBXHxmmWdQHH9awVS5pwEjzY2A4kC1SJnv7dEsgrucu4i9rYNUr5YMwzH8FMuptdTFGxT4M",
  "key16": "2L4HK3ZFtHAZGSKzT4yPe5rreqQAp9wSLVQMAHj6oNArPr2Z1Up1AuN5gRS5xknbQQ2PH5B9Yy6GBERAzo9dqW2o",
  "key17": "K6AMk2ncapbn3WvenBjUUrNzkPijjikTTxMQv3kYA761uCttZMCsUM6AkfchbrduAALcmYbt2SBZnMxWGKXjuZW",
  "key18": "3ZFWLkFyt6GFqZprcaTjB3J7tqYrQRGbhpNghsvvREMgv3yxgEu2zHofNXihFKevdvZS1c4VXh13353Fy88Djxp1",
  "key19": "5U3gPd5th5SYuc6Q5yK3cBgU8JzuVEZmcjB2Z5EwzZFKKQR92gLXUbWTYXj58iKEToqLe1THqR33BM1fJtLToZwE",
  "key20": "59geSdBAxAovgikLYo7tfHfqG3YNHkj2EG3XYVYsYbiMydLwKcA4jhbk47mscHsN4ctKYmAt12UHQD15AeH7nTev",
  "key21": "4bExmfuzS3k2uq9RtX6M9ZYsy8KSUwU3idhsihxTYazBZYq5qs1LWJ3ZDRE6MQ6DLX1fQwadPia6z6APZ8xcj7BP",
  "key22": "59HMuK72SHir5zEHqyAQEqNwQE47jhQgguckkYBXeJy6P8n8uqvBppjf4wKC6cqPb8C9g8jSukXH1YVhrpnqeZL8",
  "key23": "5srJ94zPmNaBSA3jzZKTKBy7vSRu5RJFs5MwGRG3p7XodJKnQtmiPtqnX1wbpkywLFYKxH6GWroPM49uZpHwGt4N",
  "key24": "5s4tZqsfAA77NVXhejNruzX2kS6t5WvSujkCgy6wGaA9bkLNEycQXEG3HwotBYFe6vtM6kNMCRaFqSxbSruNufMx",
  "key25": "2vHCEHqvA5ZgZSx411UfNm2QGHeA2cowjB22zuFPXsKC5b5NNLirY6aYZwAPDdGRpBSBGdwVc8RBJEQBSiRdqDe",
  "key26": "2HQVABtgjPAZZtpy5wCsf3dhwir9jJk3s9nN8rtP71wVxdPaijUdwxpCuRqMVFs2MdaK3ejptCyxYFbkXJ1Aa6Q2",
  "key27": "2SjoHixuHJ7gwak4e5oUDgxjMcVmQrRwBtcALzfm9EXjLjzgRLUNRHmL4uqjTyKj7J4uk5DwRUQiyfXV6BFA46Qb"
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
