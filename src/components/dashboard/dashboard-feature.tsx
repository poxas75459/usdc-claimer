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
    "2QV8w16WTgtPSxADvLkACCXSyB6tNhLxWbz97sfAt88aR4RwTguZ6J799ZbWJL23aamyY476QAJdCHvGf6qYVyPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbBBBd3iaBZSnQcJ7VwkHYX9v9oxeRnsAEs5x6rJyWiGMfWJpVnmDN6DTRcyxsRE8QcPY7vB3nuJEVRE8UGL9rT",
  "key1": "3fW75pWuAThYvSr5VKtWd46Cf4yWf6zSB6MXD21W8p6SXTA5yirpaD2HucrWG19w9PVqk9wcnrUZE14pijNCw6jV",
  "key2": "5FkjRL34ZfGgFa7b9aSDuVkBwNqNzvywSpLYbSQRcvh6ToVyT3QXupkEmBf62oNBBtK5Gr3EoktYENp881Z351vh",
  "key3": "4kBGFLL5FjUqa9Ks1f386Ncdyst1cv93DA1WdPPfk3KTAZCfovVofiQh5pP8gzKPT2ptMVoLPDhy4hfvHYY4N7wn",
  "key4": "5AYpDygDy7Gi25cvUYW3AAm6g9N55XEmdhd6TgwFfyue2Av35iNNw1EzFcCH6SVRN88GYcV1FQ16Qvesz3RpRDwU",
  "key5": "4N8e78rTaiFAPQTvAxKZWPmQ3ydWbVTxDxKYXErM1hageZTGKETiKZdFQFuRGNzZTxMEBgS6Tx1uDhneTnZsNzvb",
  "key6": "7ZYioC1EiYxC6S2LsxWJa6ScRZrJwxYbKMoAhCJti9YdWYmehFxAWS6NYz5mE2D1v8SCavupUc2MsbPwqMvZE4H",
  "key7": "3tLTgpoSq4TZTmYLVZUGa6JwZThNTzpdSwjjQAESaLDxAMShWPffPVqqb5BGZiD15TWYaDjPY26PL1YusCU1bNta",
  "key8": "6cELkjmmuho6zE6EkL9uZkjUfcEU2ixVHevFPR5gt3qpYrJac4aPGzVyFfHQUQygYp5VyKPwcs9nyvyGgPLRpjo",
  "key9": "4w1qBSjFgVW1u1t8YwoqzPiJW8E8cUxmLV5CFi345Y9b9zJ7UqEUxngKt8pFrvHaEcJSEaBrNBzj6vSpgM6yyZaF",
  "key10": "4btruBsp3cDVTzH8Lce8KrV1XcAKBDJYTT45wooKx7ohwi6AKKoToi4n4YjD7Q2FM7d54xYfZfVtc6Ed3352gP5p",
  "key11": "ybA9Fv2Zh8Kj5kuGK6V8ViFUJjKKUUgh28ngiYVuE7jbf7D76m6H67NhiXYbeGDAiUFWVPcbBJnQDzzmHgXeKiq",
  "key12": "5SUVATSBSCawT8dEsymLbtN1jZEraZqBMnWAGmsjxYCpB7NtFeF7svBd93tf2Rk3XcSMxJjxRh36ChPmqTKBhmEA",
  "key13": "QeDTn2DyiVhbxFZ9DQVtfxizWYqydpp7kkxSpvxyRCG1HMPgEZSq17nmJHbDJYQJE6N6ibVbxf8A9pM8MsGTNpn",
  "key14": "3sBV2XwtFCro6VRo4JBPVfktobo5t5iHSUSPwQ8do5uY61zXgDvUbkxvCiKfd8eiva6EhA1MLM8efRUBxYkeraxj",
  "key15": "22mJ53NxKp1wBsiJQ7U7LMQtFBkbGb1GFJLW7JbK9Ucymj6Z2dreYXPTJUSNZ2wZ3HkcgDtukt1UvvMPcS3txfzc",
  "key16": "4mFzb53xP7fKAWBRK1M1nDdfzpVT37mhLzJ8giqX13oWwssNNqfx46UpPEbose6fRcFcF9qBL6PBnMGy8Rujm1Xa",
  "key17": "3ZbkEmm4HJacah1yaeUgBi5ZHqFuP8JFd4i3GTy1hYtxGX6ASHA84j3gESjVNSgeghAxuF1Qoyxo1sTioAjKrNcE",
  "key18": "5RKPTnyEcbJuBCtDwiepeFEzN1p99iB5WZH7aMfH7MVjFBsbi1Vb6ScPF5Zynvg1BGfQ2ce5c1ie5XBdRJQGSds3",
  "key19": "2XfqvKLcJBMn63vjZDZKHxEJQ6zQoZA76Wi1gyzzfhqBSG741GC94nAauYJESsBSvUiKzFAfsPTc1ixsWe2R4xKF",
  "key20": "4rj6CLxmgJ4DZaHyqvq1bTtKWkDnxJisoK9dKw2T4ARGuooVb8sw9cwneaLAFF3NZybYVq2kHcLtMfEcxoCmi4s2",
  "key21": "VZqBXBo827gVwhBmf54hSZzzqZcBhYBErMPCfX29GsaU1QA9hwSSgfYWh2wZbnz7k5Eosqmf51oZxZG8VWKhwmK",
  "key22": "3aaYeXkWNBeeY8Smgf61mWFBGEpGKSTxA3qgAof6WvnxVndhkxRnQuCWQkM1LDnatxUEtYoC6rvha6sezAGA5sZV",
  "key23": "5LZ3Kwj5YHVGhibxwT8XtSENk76vSMQTyS571xfLBWJRnzi6TcWeJpBTDYxKzWeR8YKMsHo3T3VyRsWTPAzyDFn",
  "key24": "51wqnNMgqmXxw7aEfyvijaMKLgd6ighbA2eMfF6gnUT7z71cZQnawLjFUwxGmNWJHfztBXcm4yLSqGmtEkJ34px6",
  "key25": "7UwDzTT2VRqruBoa7j1rMnCtMwGUV3FwCXvPjypfhBYMneBHoUgh87Yxn8i2ayxXEQLmrzhoNFsRVURNstuHCku",
  "key26": "3gih8HBWK3TMfRTs277w9JRxAzwDf65sJshH9uRzDhwhnZ6Wmz1TaZNdDeZNSmam9hCL8VREsVLdEN6mzRNrdFaD",
  "key27": "2jMpQhEe1BgWqgPptutvgD1McA6RZkanWY9U9xX1H6xXixfb3JmUnZWwUCnvjBccqWEJXqBi1RRBaMayALi8bfCo",
  "key28": "3NNCkV5FVYdMrq3KTqZUq1TgvpzSVewP6QM777smJULYKRpUB5KKibiYREk4bT9MBdhZgZVgJf2RDBwrGpgmqzku",
  "key29": "67ELHbqFXJHFVSVbxMF9tibFMbQL7NXUssHKFaYwNBXbpFGm1YRmG9GQ9KUCnPmryhyhgSkaPod9BjvPMugFWbnk",
  "key30": "2PRtVFVu7pna4v3SB8BK8ijNSfZttoNjC9hW2f1YFQVDFQu6ecqmMKcoMu8ynteex3MqthZEhZhvpuS9Ut2GHqCL",
  "key31": "5iSyqCmWAFjEE7q6bybuxrhzoGSdfVT2ppqaSt2ZxwMHsdFLj4jSbazveqwY2U5zfjxRcgkQt4bCxrUob4RwL9zK",
  "key32": "3gbmHYw7KmGMD3TjA9suTqyvT4EU7iL9N5KGGnwmuDmminQj7rt2fsjgycknRvgaNcasFzPbHBEcbhwXikhXnDZz"
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
