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
    "mGgsUAyrJ6WJbJ6xtsY4VMMoYRRZLVsoKTm2x18yxuM7EkxWs9Zfn1WeJ7sjAM5PBYz3DpwRpGwqgjf34exmDq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1QytEQqz2PkJjtRX2atTaKzrkZ6QPaCcmDKUuPxYN3CiZib7KezaiwvGZgusJy1xPsb4iXvmyN4BVHR8aKTV33",
  "key1": "4PaNSDCEmD8xReePA7XURq7AXN6u4c25LQvqzPM2P38pMpT4978MmB41Tx6t8s1BFrtVNpL7sTDyXXWzxUwnV9i1",
  "key2": "5p5xV4qTnvagrHxJ6xJKseTrQGwvELtJNUr6SvPPgboZz2cCjt5JrPdQjSkdoxZ3oGoBsN5gws8UjHYNV3XmkvCo",
  "key3": "5aa7NpKZPv4YAP1kGuC7Eqcpyw4tQGg7V8T21hWLJfV9T2BPsfwy833MA5C9Zru17cwazaNgTM4gCjyxBwr2vcy6",
  "key4": "3WW5egFTSEmLaBFi16Nesmbgm1d6i4DHw3YYruC9ddMk4gmjhAHF7KoHtNdxiZxsaPieTpDhDtivrAFohNWNkoSi",
  "key5": "4Wd4gdPFsmzuKR88WyCkjvMEmpbMAM7g671fBTMy5zBLg69NCuRMg1BxocVDr6Z2V41Liqn4pxEV2fwpYUVduqgY",
  "key6": "65d6PHfN4xB6g92U2TozVc9dEMFfAikJstZhy6JnnooaWhrUmxZrLt9T77gUDxyX6UuQjmmpFJzAjwbmTi6HK2mE",
  "key7": "3NYg86uDb1SzgpJBZWdf6dnrZVqLoAH7Wc6TjTVy8NGXH5JG7tsVyzH6pJeMDYjC8af47Mqf19wRxZPFkfRtcTou",
  "key8": "5Qh8m94cGucPVXkp5rjjVbitKyRRExqNFbKtHBYM9HLEYr9NdtUgVQinwrNYn4uZkWWxZU5JTry9DrdaZtbhc1yH",
  "key9": "5peaVN7TSDhHuuGi6cshPMZDUpDGrWwW4gvW7T52txm3W2qHeYNP5WHpHNTBUsHw4p5kf2a2nDuUS6mabwBFcP3Y",
  "key10": "3SLhHiFx8CrGXgBV9r61MnVbJ61QN2qiMUft9G8QtNDaUHk5BqwGm3hnpoBTMcC58syS9HcZL2e8KuUhrjnK1N8R",
  "key11": "45GkSfqWrwkHtSh6dA3kDjJFvHDL6VVhvDAqr1V8DnG9kxYJgXkkXNBdkZWSs16Fk4x4hTP8jDAczVPfvZBdKcFv",
  "key12": "5y4H61P8z36J1Wzmtkx9fESApAwnB7Wxk64tGP82uqthrawuWmmHmAc2b374qg7YBy98PZ65cV55wpDz9DsMzX68",
  "key13": "2NMt7VA2cDKFWNhwJVBXa6Dm4n49Mv9grKodR5GSEXfBjomCLBRFQHWWeP2Yyrs4ZczcqdA2fM4tGiFeqwjgsMYL",
  "key14": "28Byrggqk2mtdufkjmPWX5BsoiNypJzaFJy5MpTPRYRJXkMw6QKLdVvwCvc84BLFVDH1tPhmPeWBxbYqrfvpoo8j",
  "key15": "4qqJq1Q2MEKhuJonFAFmCXuuQAe8AQPEB8FM7Hx3jMSqMAZmVfXg1228iRw9YXeZffodg7ghzB9VGD4x1dbA2DxK",
  "key16": "2YNqouSs3jniC2bWt81exVeE2HtnbAg7v2c6uBtxNfKKroarUW4WQfNF863EF9LfniD5QLTTwU6SEociAsTd6faG",
  "key17": "4FVLTxRDvaBeEDFQUs6a8XugxpAFTsz9TDoCdj79iPLnufC8NR8t7Ls3fds1ubtvCRicWxrAwNy2reJ2kooPtQVh",
  "key18": "62ccfDoG2dGSQbqpAN3wsWuLYyg9afp8GNTgtbjid2RRkRPn5PaWWK3gWgaSYNZFKpGRVQoRUhtHFYoR4mFrfhQC",
  "key19": "3mpoJHAPUnufvBykkcuuvBcxGLfs2innL8dRMmPrb9ja5DDZ7b4pYt2ZcF5NEUovSaebw4GqP1cewcTp1EarxvYX",
  "key20": "2ZWgihftujityszbp5PQn4vEgVr9a8t2n2Z2AdGRgnNxLtyHdH9v2YLRnr4CKgFTMeEGvsZmS14qucnCrR9oJivq",
  "key21": "5WA1NzcNtPrfHXdfZ9KuAWuCVdix7tcHc2hDMgwAsv6B6XjFevsvWkfn9VZkeYVZZdsFt4Q4rQPVcYYPC7vPDzCr",
  "key22": "k5VwNh33Y8suFEtxxCLAkZj29eCNDPgoVzk1WH83dAw7kL6usj5jCDvMzp1kh6koqE3DjmghDKnasb8FnECGCEd",
  "key23": "4mxEN8vfedGrZzFMvNYBZ2gjSUXLu2Yno8ZKQFyZKEQ4Pj6VdH9bMPQwRDaTss3trz74it4nhsNA1M5PhceP1NTs",
  "key24": "4ZCbv2CwYf5pcHG32uKH4xn6WG2pVLSK9d6M4x2PMvfhNVwH92wNqpMNxkLc7CUBx9QxywBx48euZwMbW5ftZdkw",
  "key25": "tnpZ38SHYViuPsSe8zkH7Z7jTgU9atk1QQFg3jzQp2XMSZPbKoGxe1XfG8GnZMTBbNe6LqvvYGfjKsjDTXJhJQ5",
  "key26": "4pJaoSAqJJDnU7TTs1LajFsQSjMG6LhK21fKgBQCAxThfRMgWPf7mjE1xw7CSA6LCtQw3LnoYhgnBV2VmJG1enCx",
  "key27": "4XdLhaWywn5xhAYrXfqKWWxkp6ZevvJCC6PQRWJEQa5TrXGekgAAN2ivikZEaW1Li5HfCaAiKVVEbK2bLtcvdS1P",
  "key28": "2vZuZzQydHYTwom44tg6g5z4pr11nMQCppthjoEtCpTHcZGwGjSGjWqZ1o9bUz4YavV4G6eZ3ffYpoPeZsSxWhm"
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
