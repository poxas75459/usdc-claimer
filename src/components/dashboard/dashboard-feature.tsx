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
    "33LpEJ1FueFz2URZ2ev1hWfwrnXSTqYuXri2G7gpE4r9U7PMWkjBHn5g1poXHQzf1wfnCHhMZnXd9KhM272MEjsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X44hNkLM1b8iG7ra2ST9Z9vjQKVjNCfjaMbonfexZsZVpZLAqKafKDkZkZCvZ8B6nBbaAVoptmUDLNX8Mmp1bns",
  "key1": "3AfRZbkGFF2RVtGrgxn6fzAAtn2tVPpBqcMRmX1uU6vMPP4xcvjtFrzUBvepyR7mYeFjBKcqsMCnrVuRpuUK9p7t",
  "key2": "4p3ZNJVNCJGMehq3ABdwkvMcdK9aM4wcRfQD4tGagGKA9cPmKDZmRjLLnt3uS7ckwz73BDRKeTqwqS4pNbh78vt",
  "key3": "36dwCtqk8iRTDFboSkRKzMZPwSLQgKogAumxMx2V4iXoUiTSTfZwm8ytZyR7BPn28w5ndswC8fHJPZRjLTaBePB3",
  "key4": "5ZnYBL1i18rcGP58fRE1BgEdzKGjpeUi3NSNr6DHhtztLKcHSh9BNUjP29TNzWUkEkrGw4LtP3sAURjc5csQ9Had",
  "key5": "ycHzQmiNEHpkU9EYaCZPgrxqTWGUBMWaqU7i7Jr613xR7doN1Qq9Gi6RPRqTDLapAk4SX8DDEhc5JbMvt7PRrmV",
  "key6": "2WbFmd9UqAQzBnzWV1F5kRrYRuByUd2Qo9xScDVq2ir6cs21stLz1q3QLXC2rQ59WzTwioDzXJmURDXb2r9TVidN",
  "key7": "kf5PtyeY3aGL4WbxcDh7UZ8HZue5RKNkmmFQKdsSFHNMmfucQFuVqncTJh8oBYLPEsu9MfmznCpu2Nz9ZVaq6tD",
  "key8": "5QASA4WkzoHv9WHiZePG7SKN4zi1Nb2hkG74UJxvc3Zh1JSYuHpDKWS4mzLxL2V4TSF5wxhq66A5myRQKjZThzoz",
  "key9": "yVx6YoQrgJWUmSA2SUJToxfjHRvawPz1RaLtFuZ2Lm5yPGhbcfkS8XuFKwpaGZNguFnintAxYNdnSaKPrtN4YQN",
  "key10": "2GgX7JSpfuhcti5BmUkZahnCzQyXbZs5zhz7R4kDF7J8uG4ByYc9p2daCMCJiqNyiRVJYUHMstrtugHfzhzU1Skc",
  "key11": "2bTZEYp4aABxU2jEoWPcE1GeYuntK7vYhbrtUV6X2z9P6Eik5FBN7xMxvPovd86AdeRfaitTqmH1w6KSZRADiN9b",
  "key12": "2wCXEQu71YNkSM5YzXtfP239L6tMYJXLYpEy4TQ8ML42kXx31HkaPiktKokkq1VgYcnsdAnaSBTGMGsE2e4JMjSG",
  "key13": "573aa5ofvo2HfYjFsUJJn8BB7Sg2pVofUcjHXFSCVFAwwjyEPmcShs3Sc7ojyfW9pdju3Cw8rf5CbVbAX3QqC6xh",
  "key14": "2HA7TSpLz8nRvm9Qd4uksZP3XvgBDWT4iyAF7Ys7bj1mDBVMJY1hNUxvE9sB8sRZBP7oGTWkj9Kbi8iGx3nc6nkD",
  "key15": "dXmxwhddmujxHNuchvXUjcpVoGsGzJ1x32QrKj5gbtmanVsQzdGXSQ7qYtPCqkCTmPsh378vs2YHW3N6joz8L3o",
  "key16": "3VoiXn5aECgGXtkYNx9eVrj6ivc6zSRmSsDhBkUuVQzYjDUgMZSPWGpF6Vz1FTXCm2qfwM1E6fstMA5uJ6C3PAho",
  "key17": "4pCgsqSjN849qpAFNSvd96aukenouf7YeWbsr3CBG8wF4n3etqmpXxTPQYK5K9uUZfw9urpRqWSBaCEe1zPrBrS5",
  "key18": "5tYkW2dhcMk8FeTLUvDskpjC8wM1LkiyCtXwSSomJsswk82VH775NXkJFuidEgRDGvoRXmsZorVk4UZhitEBb8F6",
  "key19": "2VX7X6feRWu2mLBjQ6j2VixEzaUrjtf6Wy2qUjt1HnTdWBrq1Et5YocutWTpthRgWpZn6ZsimhUw597HKKB8apun",
  "key20": "2RxNVWRuXmrZoxo6NNxa4fYWDCbZnzghRrGdimGPzq7DmupK8XQ67R5rdphHqD7taKr7PKz93XwNjYwvZmcfm9Fq",
  "key21": "4GXDMg8pRKjKpa7Ydgb9BzA2SdwAvGTTmJhYiwYJ6LEVsJhURDpZmgUU6nvh5UakKrGjbdTJ3vfMdVsP6XbYnysE",
  "key22": "5VerVLcLmiyKwgggbYEmjTfocqXxXZYw5fWvedqR4MhDRPD6MeRE367cxKiau7y7U6mmZj2J2c7cWHymZcVCHrKx",
  "key23": "2p3DWGP9fnF55xsKzkDaVH8xJefY4fnd4SuPHEAoHSqkCnKJDZ5gkpnW4FMvZpSpPZKUK653zfu29JqaQ4NPZWF",
  "key24": "3qaixqqksh8otcyDrse4BYAMtqtL6tUaYon25PstHXbXB8ZmifCsBz8WaQU3soEjb2CHEBzNe71Rix5XQQYMpJHE",
  "key25": "3b7XtX5ugiKprWNoNp9w7AbzvqHgLPsLCicofUbCSP27BfrewN62qNCMNyyBP1uaW1c9L38uGHG5eEHr7mCQQpo8",
  "key26": "4K4U6eoMNUS2W61iAYGVVb1ohirL3SJ11frfq3dmLsbbWSRod7KUXtGUAsiMhqDSnTcjq6m44hEcySMVW5vNgf9a",
  "key27": "4Aq59zdhB1YM4vt5beQyRX6wN5dd4oVyNek4Rnmpm3vHEmRF8bMghDxCSAFfMYoMPUopsMikgVumoyjNNcPyxeQE",
  "key28": "3qLCE9smGixFPHFL3JtDS8JcWocfgeLSKHLc2KZj7hKZsB8Tykqr4AFPSVR5iwe3X3wNDRfqiM4dQ4RxubZcJKd3",
  "key29": "gyVHPLaPE1PtwUdzZ2Rr94W4yY1mYbyKnLb2YekZB5xszPGoF9DwgRkb8F32me5HEF2bj6xH6D9Je9UDRyetpfk",
  "key30": "2soH8KrVMQiMttvhaXiSPnQTYzR4DzvCZBjDGTqkpHFacMp7AGAUGUkFpkHubq6EajNEduufMfj62LT1fjqTDDFJ",
  "key31": "5QSWqXNkjHWfNErCtZZTV3Gua7TudFpBrcXGjFvUEJjPKRCYrNc9GK2CSi1KZB7k9TU6tRTqChuWmkaWttEZMZqi",
  "key32": "4vWoG5VFm4f2yzDXq8HQWTn9oX5Zgz9KeQB8Z4CXiryxhzrKLXYn2Jw2WsXKWRiiv1MLME6fujXA9mbHfWjULpeV"
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
