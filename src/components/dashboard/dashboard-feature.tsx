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
    "5LxxHqxsNx9pRsY664mZ3XocPBwqEFddFVVWJcLmqw5SA3AJGR2x2PB2CYq2FaWt7zAvgNVXwPARvxYxNpRNEp7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDr6CkhANViukHiQZ1HvVYpBxPHP8LAtrWSFm76STb9kedyqnFmHSBJswJzKZPjQfW92oAMTSgR6Lwp9d8Zji2b",
  "key1": "57zXyjYh1xM6EEn6ivcq7xCuiuxyZHmRzgcmJZEq4UxkxqrzFQQNB3voAHH8xSpfnFtRpGfaMSEBzFLED1FwQAmy",
  "key2": "2WtqNbYtbE1BT7Ler9Tgu7ENGxaYFK3qJPatoaHJKHTzJCjWenEKs2jyydu9ZVB1z46s7RDS6SZaLxiKu7qecgha",
  "key3": "3BP4fC6a9Dz8Nmmxjnh87SsHBj341AGoYmRndywwFdKXxVercp2wSeCUkGXrNxp1ez4PCeVb8WQ7hPWASjaswVMh",
  "key4": "3iuwpxB4Np9iVud8GCxkvn7WZqE8P64h1D5S2yqy8YGM7fDy9U2ixrUD6KTT1C1x8CosYwGdfmHVNU58dcEpuMQx",
  "key5": "67QzQzd2gktNSz59tMaGZqieMZo4sjWR9B5HDFRwNGhUxtha7vJsrV1vouUyVYpB4kGUKQapA62Pt9MABQSATfsD",
  "key6": "476K6wcKWmH2gvRvibH7N64uZHMSq3bTTTXnbJgjjW6bAc2xXmzFqS9DuZy9obTsKDmKNtAnzEEXLk1gzi1d8cXs",
  "key7": "5Y2M4HD5omdB2Yyn2dXMboDBbaZ1DqtjwrLApEPVGPgPjJyuKmQ2jn6X9cw9QRT6xvmckikrPjVYB3kXAzXY1UJk",
  "key8": "8CEPDusrLkgK2uAUcXK5KJAjUCPfcDJidrTywT8tjCKe5oyeQoLK3Pnmefd8om9Rm3ycDUTA41mGyBwtF6fHU6F",
  "key9": "3XRkFhNttQUGNKkuWfEXjvEbKB75acv3VD9zyLCn9TvHtVuADBxPiUzZSEWDHLgNAZ7Qu24SmWrndNSUQfjskwBb",
  "key10": "2iz9PTDunWMsZmXVzgZDR3T1W2zQVxkr6LA8JVKatFktoQ2jmg461stsfB2SaPXYeZfVVbBAxmvTzqk2yBk54YxC",
  "key11": "fVvVfvstPRSB6qTShyvyYWzWWRgMLZEH7BpmLjB1sRgFWEWQ6JzUaDkbdo73CcjZ8QzXZfwZkuh4gvURSfaTssD",
  "key12": "4uRv3Zd1hkLYzpP32ijG8w5EyR17CvX5cvGbPksiyZBG9iHXAMnXBnMgXjABXoeYJ5sU7jaDgRSpL8S5Ki4dcYpU",
  "key13": "F1P5LrbXh3uYKgkwHweDFRdjdvZxvwLftfDJwKygJjPCTN4mPrTo5PDWk2B36e1LMXEkf2BzVKV9gtcC9KBv7Xv",
  "key14": "3HyEtgqUpciN1rA4aNcThLYYTyuK7fa2mgcs9iUXwWqUFwytFgNZ1ChwQ94w7Epmnk9uFkduqNxva9q3rNBbBGTA",
  "key15": "41co2TNnA8ewecWuD9BKUNgoTXc1ojerfFUTTkxL1F49rcLqWekPD8oA5GUf3kWmzYEVi2QJw2GUm4XZadJmX3DW",
  "key16": "5GmCBtzvVtWULxjrzSGt2nksVd359UcW1DnUiFLKSHBecamevVpKz6FE6Mmvh9SYoKHxAGfngXM57LGc1JXCLfDb",
  "key17": "3J94fgy4eteWsazsU8rcK9DQavmFbTPgJzGfdenywhGxCN4WJfFWzBVFy35BUwey41enhhgtwVfPGSJ8EpnHbNnZ",
  "key18": "29Q2EEV1vUaskwjZHbGFbf86iTNw5CRYcor3F7SZABu4DthWFQLZuXi67nMaK6ai4fogjvvsR6NbWyeG5azXAmNg",
  "key19": "QUAAFb82M4bgT7PXajKAzugYMsNT9TRFNFnBNndfuXneptxQNvmMopAs7KF2zTs5mTTPPnoS8SqDLX6nz8HRXR2",
  "key20": "3XjSznJz6oqEuGKnnbE5rPbebG2J3cbiDvfvAgeCwnDSUVnMc95L32zdEp96Dtj3gNGNm5BvJaQ7fpW5EU56nt3g",
  "key21": "5YuFu6do77onQFchzy2me2NKxv3cZ9Mxpthza3FEMz7FbzfzvSHs8TP6uw4f59R2sDzzXxteBpH8eWbcTNzvVLEA",
  "key22": "2ayEx8k3EsQVnoLztgeBo9tC6G1zg23LCzTwSEoofot4dJp38Fb5PQDqzGzASNAWBbT1rc8sGy5bahYxFQA69DDB",
  "key23": "31fFA7K35fccP7woVN3M2cRhruhQcASUohzDFCaCakWCT95Wk9usGf828BVGTQ7r6bN7M9xd18w1UaLg9TBJqMCz",
  "key24": "fUB5Vo5fsr7ea5gjbvGHqXYaBSF3jX7CgmMJVV8mZAKPUDLPB9tFUtWZqutsUEBaXa4FmretRR9ZJyhCG7hCibU",
  "key25": "WhDt8eFWpVvzULpw4wTxWYDvhVxNwksB9cBgWgZVy43Gex9ihaPq51T97TPhWXEHwEwHfYfumef5WsE74XMdieX",
  "key26": "2sq2u1CTuneGtpw5EfdMaddxXYNjjgV4cLmQa8nL7A6MnsAFKSVAa1R8jQese8vanrT7pRNLjtHE8D4rc3R7zVrS",
  "key27": "3HHimJD5Dj1LDda1BoCU5BNaUnLSz6esNUN69ryGGGvyNFVdG1TNvFBFLw3k2mrtofRrBGUwbUrtL7fFMRH5xusB",
  "key28": "jV8p7aL9pdAhcVRNCfxPVAoyNik736MZP9Gcu9sRrEkqbAD4BeofAqAm1b9NWMAakaHRKSrRWbC8PY7sqjSj6M6",
  "key29": "2VyW2Yr1jfYgrsoDi8Hray1EFSP4ud8KMCPWyq7deqxaqb5KTckax4YCT9f2FaEUxH3KAwXEiYftJLfNySUinzV1",
  "key30": "5MBRxNfw2xScGZJV37xExVDt1hbUxr2yABAaNWqUDPNjQnW54H8nyXtzMokLGzn4W4W9aHJaZsMtnojNU7zvcQfY",
  "key31": "nKekY9R1iv7s4SMuDFhbjmVbDHUDb7dUgjF119VVDUiwR57bf3D5mYmCPWniMNdiSVLzJK9nQfymYC21q7JVSGm",
  "key32": "5KwhE1TL8SXsdSAmwByNJD6KH6BhN8efYjf9rLczQDu8SmSWiZ1Zhwbfo4TAscPQW74GAQqLkkocpRFWwJrZSyZN",
  "key33": "5D7H6UAFmRN95PthLfPV7RJh5qfrkJUak8X2Dk3hJYMeFtKQ5PGzt6wfijEn4e1cnt7tyPHQ3SJxK96iunYwQJSo",
  "key34": "5ZGGyWgr7oDvXmHYGXZQcbJuNDXjtVJJiAe5rBuK9zfGwuksW35jtaHoZHWSC65YKm3eJgRZbw7hVC54yoASo6C7",
  "key35": "2gqKHjZff7EUuNFJfdr23t81AePBuYYduhSfEk5kpXwx8gEtWdu1SnLynLkN3a6kLwiGWn1K6K8fYFVeKFCVj6YK",
  "key36": "wGeKx31PXK6bMUSX9zExzsZmRtfTtBfnm47vZQaZ2K96GDr3LcW9rGhVMQz53a3S4QaiDr2HvCiYQUt9XjsGZ7v",
  "key37": "zaUFtWqwWBiFWMzqq4hsSMht2F3oNzKvXoJcq1RrMmybbj8oZCN6GJStu3fjPw7B4yDgVQVAJXj3mmZC93FERfH",
  "key38": "2PkTvJSvgAQ5nx1UmyXX7n9k6p7qXtJyMe8B2XAZP2CaBBwSWAvoZty8KuwSxDPsATddPpa2rcSPbT6QNetR2pNa"
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
