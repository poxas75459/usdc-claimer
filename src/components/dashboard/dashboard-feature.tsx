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
    "2oK4fp4YcStCJrDL9GVLZNjGjfRQop4wEF21RUi5WxQDGPp2317ZLbvTbu22Jsdapm2yd111ncHie5D1mV2Jk9Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rj7F8rrxuYsCQQxoUhP2XmMznVUDCYwus8m54jcY9pCp1aDCL5PVC129N8ncNgAorvHBcqR3H8esRkkCcpngHZb",
  "key1": "6RedtUAQDYAf5Gr3sk1YHxE4nJdvsuvngAkuM4kPacBo5Jscbt9MLbQpFRkXc3MnzCxgW2Y3wmPGAU7YLRXmh7t",
  "key2": "WqJWK1395J6Bv3uJzW3PFZL46bNXnpxrZm6EQnmPPpSzMqcaqbpFezLNPx2nGDbjzGrsabR57Hheb6WgX5LpAt8",
  "key3": "5mLHx4X61v6MaLFnFdgfdxy41dBXBMfeDuaFUhvA7NVZDHunyPvyHyjCLFx85xoL7SMdM7vkVeXYGuN8LpxyYuC7",
  "key4": "2ANvEyWf8FdZ8WMZaACJ5584t5kJf8GjAEueuBxCb753mVjd2B4anyyt9KqLajN2ZHZVKF4Nn6mgN29XphKyjoqs",
  "key5": "24yjM57TcyHbTXxgbnvupTbKMn9zwPBHD1T5VJkHEucNYinWpcus7XybRxW7uw392K91zTJ81WePksSAKQUGdqj5",
  "key6": "2qjbxFoqsD5sgBBXTgt7tMRvGa79AuPpaY4MprFKBv1R6GAfbnvaXzrDst1VryF7QPpn2Emh3T4exNLkhV4CzaJX",
  "key7": "2jG2vnbumuxtN2kRuHa66g8xCRLwbCNCozwqrCDioDH7KSnEeMNBwSoyAacmxo6F6eK1LxzpBy5sbnkhapMtwEZp",
  "key8": "36iJAHoZoxcNHRRFZUPK9hCK6u9nYZDuT5VbKMVDixVJwHjzAsYNgLgTd6eNx2Vk3r8ApD8CQboRmiJSrZZcPCcu",
  "key9": "3vntDKJ1jZkKKkf3qsjx9CZiKkVYQ4aKfVJqPDD5NpjW55wTgBcVjEEgWKF3Y1zFZ7aKXDH8gakpYvuZqriA5iCT",
  "key10": "cE1SnbQiQBcsmrTKEMwBLBPt7G6d4aanihUtXBJwCqZVWyfSWZZicApDLZ47V1far4aXYtB9g9nwFCTcQSrXvcz",
  "key11": "4Ca2SLHs4vWZQNU6Xgnuxda1jagCs9KLN2asrptgbX7DpJNHDv9das3PToWvX9AMDdWNByD19vpZFGJyP8HE8F3F",
  "key12": "3sKqYULpu85fxRbHmt9WKWXhH2xqjijmUXs8hsxs5cVd2u9rKVyWhNsVQzmSGP1d5KryWzWcSoFBeD8SF7Rigvbg",
  "key13": "2kYbLJJ7sShYpBaoCD1PrmPm6fJ1yhizQBrJuss9UVKTcNPvR5ZRxihk3Ecr2PfGYgQBgt9d9i5nwgh4kFufCnK7",
  "key14": "6kuovQX1aJwxgeao2BQ1KsUQsNskBfNAeyMHTKEL6KaoNPb7V45NjSzL89vj7UYXNq6LDCBtk2LqvAVfJvpffV6",
  "key15": "58hZrj6EECsb4PVsF1aG5KFub6W7CbpvyKchss1EDoa9qAT8Qgez5xRBcKNV1fEP9NydWA6qwCL8u1QNmcEHSgMD",
  "key16": "cQHKynsQHGRQ6sPVffyvdEc6omMj3B6FBKPfHpTUvTJSbZjT1gswfQ6JFr8KQXgoKqjfixZ1AWUGceXXxo5vBNp",
  "key17": "7nvjCqD57now8a5RHKUsvGpvGr57UsWjzPfXVj7B9NirS11UKV1jzrQiJyTx7N8U8GVURDiokRM27xVjhMAkeSn",
  "key18": "F2XnAmzUDWppem7iSNRxinBAfzs9UhWKk7ZYjqftXy4Vpc95NuosL2Nz94gQQnAVsFU3gS1XSjMesXFjcKwYNs9",
  "key19": "3gPZpGgiDMzTkAD1BMXgtxNcuBjoyonXo118i7uSs1D9oDrQPwhqD9Q8SThkpvkxFFjLvAgxbxWS53xPrtSKbdad",
  "key20": "BivujH62SjpFDxRBtJaehf7cqHTKkWELoeNon24dhLhtTa8o85fLVdkMcEJqRthMQfFkX4Cj7W6iWo87eB9B1hF",
  "key21": "2QUs84JxCCJpdkZdQmv5AoB5YGDWSFgLVvWtBoW4hc1RU9T8RmcR11RJn9UmFY1CfES3nPmBuwFZfx6keWMzXJvU",
  "key22": "3WqYGteuSgb6v1zYDZYWHFRiGnhNsKHqtAMZ3C7egw7J3NfdsQJicZ9cebAZ8QAoHs8ajf3vbcFDiXhC5bRcpmB1",
  "key23": "4YXfo1LPwXzDY7qAayyRW8rLtzKWUW4gXKe42ux5e1xLpN6MFR9NhSJMbmeyrefmkPJYbj4fnsz4QUjHx9aPompd",
  "key24": "56mzLBKXVaAdd8NPkcWtcy74Ro7yRPkS2WZw9NsjNU5yHrBwE1rsLUB7agpfL56HN6j4FTg9yVsZxzuY4eUkhM8Q",
  "key25": "4J8eC8AndqL3dhgu2oThsj9iR5RFKjRXGQT7aqDCkTTBGYvBBioShGeJqTYBfXkJQm3TSk4KaLvYDohapnbgb418",
  "key26": "5uZ7AUgpPviyuzxPn1QF6AiYtEaFnBheNrod6qy4C4WJPL6VUJDUXZa4H7gKpaXqW9Bsd57ohm4gaKLxZUyfuqZ8",
  "key27": "3EdFyaM7z3TnETRv7ByckPoiTqkcsbHWUS8NXU2DRXdaqYu7PU6hAhcARXdv2WCmPuEu2RfXnmepwEfbx55hWg1n",
  "key28": "5CatUPcCDYGDZyru84ofXe3duuGkRXGmEVSagWU6bu8FG6FnTUkqaJXMhvYQy2fyL6Wnq9P5CVExdBokJg7zCLp4",
  "key29": "4cnTP2ZqjGxrUxjMKJjbub8sLd9UCyizPQ7gee8swQ8EyhEERpxM7eeAaeeLX9b7RfvexxjyYUPjQadLt5K13yeZ",
  "key30": "4kqS2XtRA7cXJsErUW8R34h2EtqX45VMraFZCgBicDiEqV4BShyWWZcQCkefC6CRYywAPC3yVxPiunkxQ46sEmTG",
  "key31": "yiwM26Y4kUEwRbjixy3iEK19kjZEucWpFSgBqgZE8aTNsWubFRF4vJFAGJb2Yd4gt6yQ8xSw5FaWDJrt5ydwp87",
  "key32": "5M17PqknSqHJ4cARFRiWuVoKgXuL8eg5zmMtTSxHQgY47NwvBBpQJC1BGCuRsotuQkpfzH7sEHEVnArUZeGzRD1r",
  "key33": "218Lw47tHmYvdWM54NKAhbijYpWdFKfmZ3jWccnn2EM59uyz2u9Ud6JaMpWn9RoiGWhsWFgp3G61E5tyRUHXY9Qc",
  "key34": "5F92Zgm2gHsVYTigtSBBNzyWix7CVCgvQ93NTDgQQV4FD6iqcUTY9AFTxeuF6541dY12R83LQsZ5T1mnQ9kDYRar",
  "key35": "5UzxCTaYva4Vmkg2pedCXeyvxyBLmWDNyEyk9Vvx5HWbLJE79kLx9o5oEXiPt8ud7Lob3GSVupxdmd5oXZ7DvpKQ",
  "key36": "r7MTwdbF2LKHGYf5Xk5cc7SXLoXf4c8ZEyvHj6r5Pf8tNB9Ray2gJAR8EBonhSv31NLWt2Hb8tPybBB4MGhCuJi",
  "key37": "B45Z4xeYSB6D9kANaGeiK3dEXwVtCCBMP7a98vttNsWfAaPdYQMoLGPKxGzsEwEf54GuwCdaLUXipxCeV7G2V5N"
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
