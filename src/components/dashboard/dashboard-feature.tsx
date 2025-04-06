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
    "4M36KMB2NZEACR82PBLg7MnocF8tCNzPrXF8uyWUzTmS8YzcS9tXAtPyiAWnYtaCB9juFR1nutaxRDK48MyKebs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWMs313ShTQ2X31rCHtFoSPDWxfCafEih574AVknKPGQGbNKjN1zrR6ES6ba97YtK9LobGe2E1utdNLMBo2uvdH",
  "key1": "3rfZTGhBEa2BuMF6epvVa9mY67FxNS8uLhrFRRkntLVdFPbDURMHJjrQ4UQvHVdEhpxczo3Eea9HZ1tLVNCvKes9",
  "key2": "3zguBWE1NEPRZ126GvKCjNT6iowZ1sf7XxkwK5Q9eqADwfy6JP6byZj1THS1RaQnYAhNMgXDJxnbAyrYuQZkdhM7",
  "key3": "4QkyMxL2hi3y1r129XYKHsoGwrixNLp9g4myvtRgs1wNLnxEcrujALjgvRVp1DKpwSWnV3uZBmsuw8LpqVGoRzcm",
  "key4": "4h8rFoirP6dKzyA4aHonjsw5TnU7wdU87qGt9KNpPGuRPeGmh1AQaZiLhU9ydFL3Yp8tCdtqrErK4hVy2fJDYfSJ",
  "key5": "4t4d6G1vcon8QQtyFxpJGFBq4wyvKQQ4HMMuMJSB4u5w15svGiHLnBazEF26HzReLaKLud1eXc61PYLdeWiDT5mN",
  "key6": "22abyWoXADpCRF9pkZe9FzpwRcTMcQSMDcg35Tqt7AKHeKmBHZmkoi1GY13UrSmec8MZYstdu1NkDcXW9u9XB3kj",
  "key7": "22S5Nhi6KE35PgiXViwbynpw5Bf7Qv6ak5v4SWXpBLhx7MK3MeidYkDcnJiUgURB9T6yoeDMQAWpgtUwpxY6TdS8",
  "key8": "2Jm8RBAuTBMcUGQUXXFjJztffhSfF5NBMjaWcq2kXupZi1puuiXynpuAFHrJ6seNdBf6mB7mXnP6416XxmxnHjEj",
  "key9": "4t3yEJYax3VhtEKH2rs9MKZdjBecphTTwy499rzVdX5dH12bSZaqAnJw1sGV1zEMRkyfkNMzFE81mpvuCxH9xfTj",
  "key10": "31uqWsXMacMUZ8PMEZtNFdgBAKCpHqnuicQh57HXvm6sGKUo3tESh5aPaRSEyHF4fQfVpd94fzGShPiadCvAzfi2",
  "key11": "3ZMsn482sWZxnn2khF6VSz5awgcPdHA1DvDE59BucbdyXkpe3Tq4x96FULV43cxyMhZ8zpvMtUavTic97HMGxdQz",
  "key12": "5iYMfBdfUp6S3p6JBXZMdz2BLQrz98QTne59f7NkYRGrJQxW4oEkx4ePo8VB5BpsLKVQXrmYaydHPWThN1KRd7xe",
  "key13": "3CszFwyMYYwVs1e5eJeEGHMp4ywF315TLFan1etLY9bLAyKUAqo3Q3fCjPkwkjsvXSNAZYWuxJ2CjwGC7YfLZVxG",
  "key14": "5rRJz7xP583AkQxskt5WXysyrHAvzyZH6kR8yoyqGvG27Uts9ipxZgy9q8Ype7MGLi4DiZhK2Dn2Lkg1KC8ZNPNi",
  "key15": "4g5pQyHKzLRMszpkgXd8fYQBioTXm5ezhmVaUHFXA9yRU3GeUveBAFT6Xr8BPqwAAMwL6T6SjZhiwZTx4h9e1YHS",
  "key16": "2msTkK3epBe21Ly58s8YCw21zYTXV2hT958LYCwmPfLvXNNajRo3ckFwCVNB5GGENShctiYx2QmC6Yfb4LqVfKx1",
  "key17": "3yntL2KXhC1w2kqd6Noy9yUqTnzPQbDNWzo5t3oMZFyp1CzL6batA9RwmJbqtiK8qf3oMMEV8SLawr4ETdabWuUb",
  "key18": "5Ew3sLGTuB4nUhYzyYCGvYE2XuSoamA4aTdGwzMkRc3tJxbRCEhxPu9vA4NB4Rv5SDVMHsmHkHxpTcJCgEYVNjKc",
  "key19": "c46SYpZTVKAxwUw7U1GTAGELEs2W6wop5BKqDeNsjWt9Cw3uYaXH5WUqcpLM5TnmDJB8oYs7911KYYLCgrnk65X",
  "key20": "4eV7aNsL9NtS1L9H4SFFFCezX46F6iaoVcrMbcLZGhs5hSE7Tqz8gHToDgS6TLMtuVcpSh8Vqn4tDwc2tairnpia",
  "key21": "67qtPBQPgcFA1hGpgtHG7oJqXVd3BAejB34UGAttW7ETYfkUkpoABPVY6odcJLqvpm9U8icd5pbsdCRRr8TwEKr5",
  "key22": "31K4WX28L5qNhBDTvoq6peMefVEYrPZNRYWhGKD5BY7W7unWRQnw7EJGhfozNfrMdfmEfBWjMx2TkXLAhJafFkKQ",
  "key23": "4ZJfk28mn1RtwbwnDo9MRXcTTo2kshUYJnmP8wqg8UCprodkpPnud2q5NA8UipdMEN4VkgEkzaBbHEmtQaGv1bxc",
  "key24": "2Befv6iEwMmwEe8siUuVvYx7LorCMy7kb8qGAWUKw7AbaZUnX1D72FoCN5dZycyAq1LczniKJMNCk2DzSdUqEfyv",
  "key25": "5sFUAZgHKs93hu4xLcfWcC944G1xHktFZM2jpVDW7UBuWYsnScxSAmwBdUaBWHA2ZDHzE9q6PDo2p8PrhJp4QsDM",
  "key26": "nYEMeQQA5aKz3ZrMyPLefbxxGVae42f5EnisB986Y7nEz4jEcj2Yyd8yvipxEueJhqb8akdssPgsWTHnn4ACj9n",
  "key27": "2jUDBZNtPwVR6zcc2kTs4J18kKZWciUcK8vzmXz8vg6CAze6USdTy1sTGPkFczL6fFH91YezGCTCFbkHgLsM6akf",
  "key28": "XBGqDkQV5Y5pSyuWwpE8v7XmzcGpwD1zBvpgQg6ffuLyh9Auvk52HwhYaKWy1iAtiR3MW1JYK8Hbz5ZUHyGm5dU",
  "key29": "5UTKyCLcYbXVio3rJHSGVQjoH7y3jLYkJbgz39AKZSyPQT3AJFyyED7MMC9Z3Kusq9ZvuHhzG1bxaCEJ9ERHtymh",
  "key30": "3pciSCV9kXtT8q8Y9KTCKe8XiFHKnntMftXVx3KHwhEhMMJaCWg4xP99FFWs2c2tz8vva3dFtsNFXThMWf2UUEVx",
  "key31": "5QFsGs9ebn4xSkvMdZxwQqXzQmQtrvBG4mVGzYHrdrKv2eHuCR7zPkjAGrtwB9vKzPABjPVYh7p3TaoyNa1ZugeX",
  "key32": "3cr4LhAR8pvKPFymwLMmsXQDxBmXkkkHpwBtMxvQeoxQmGsg6dLj4X6Da1YPvbf4Mkp1Mu4MDFyudBvbJd4HMkyY",
  "key33": "129ESSwZbEukQ1NqS6GAQyvHwK6Zw5NyxQrmZJgthcijkMeYakjyYcGCQhKebi2JE9D1ByuFa7M8BbPN55onwioe",
  "key34": "mRdZi1k4nApqbzR3xZTrF469sBoVmuFdWjNguUdHWyxiEwzviFSpQDncAQjBUjm5WR6Pc3AaEJPTky3edL1SEzs"
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
