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
    "4GHXyBaDcViwNvdgfNnoGoJvwAZFc1HmMkvDN2eFGQcHvrkyPWcLwpjHc8eraTA3ni2rd82jsWXpebvWR6gC5pwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZYwhejQcKsvkwjNEJgxcNmUdx6rzmKmxGH8HD5jQY4wPoBKY3JJxMq5jZGzVrRxoxwqkV4JQSsJoVCE7YudwCz",
  "key1": "ncREXAnpgene67oy8XorrSWkafvRpqth3J8T8iDyRxGoc3pn7vwnG4R4RPnVv3bU4rTP1G3DZozbU1rtzg6Pb5n",
  "key2": "zx5U9PwCn8Av2LyXXfbKZzH7btrVHUvBsBieiCEcVRGuT4UmzNzZbaqwLhAp63adTpXxzBFTeLU1yWD63ZTx6Yw",
  "key3": "3C37HU5sBBPEKazvr8tyDMebeKg7Hr8N9XHsUt9zYdkaFAaJ3R16NTw4HYuGjhyM69HAD2qppGvsQBQdyhbsEk6s",
  "key4": "2yFE67Yf8XGy9AVAhn6EMKPGyN9SGbw31acUUvQAWCqTpPU8T6BVZTTNC2ykAXSMHiy5AQfmVKu4tk8ihTmG5ewV",
  "key5": "3ckUygK5UV1AxaJA7bDfE8C2T85LbRX4TkJ2oqp2Z8rAB7qGu5RvnyjRoCJPaGhuVYSE776jP2HdBuozFq7DuDqN",
  "key6": "3JRzwxkDxU4BjSxwi98tqbhSi9wktkNUyUELnBfHBkdevnNpgEeJ2Yv679FDs84XTgVasuqrJYitWJ4dTKKZDJKK",
  "key7": "5m95UvZxnC5weEmM5CBtVMJSMchX5PvmMPzTXmtM3YLspiDVNxtuib2jGG2kCbkJVcP3UHrhqTk2gLU7rAh14pZj",
  "key8": "4Veho89EoKpcpVXvZCsYDUgNuDAUedayAewK1anxscDjHihPr2gZtAWSbALAxNGyJY71CXgdBuLLJozbFwu9tqDG",
  "key9": "5zKLnkZ84geHBZRYb4WPnfVemN9mzZbwb2XdzKzAo1bsa9ZGag7LEgh6g39tPHg1jic9uQt3cr9BQvQknyrikiF8",
  "key10": "4yMu6WHpqgd6bzRhX6YMAg9PhW7VNhpZ7jSJXs6TcCUMyiaAVNHH72G7RikHzpvCPfdJfdJbSkvBzZiSmScpUNjC",
  "key11": "3WZcEdWboR1c3jMrQqVZiKZhfFk6yYdEbKKBmfFcts3NGB2VFQAGsTMR5CKh2c7zk2uTTfWQFuF8CWBGispoJLnY",
  "key12": "3aiiZ3Bqj7wZDtVAmegVBDbJSkXwhTchCkDdoHKokJUuoS9Nnbhf4j5WtVESq993p2XobEj4QTpU8apZPfW2kcRw",
  "key13": "unmRPVBNrAGrW8tyohPN9rbuZ1nuCSxiseujZhCQBJEZdDDXRf7y7DmT1vEY6sok6Yhn56Mn1qLLVpQnRfHpety",
  "key14": "2FW8ugJQMevCE4rw4TgZYwiGu3x8Gm7iv7dVZp3cyhiVh1rYuKSYpSzho8qkTtqHWp9gaLNavfFqUGAFktbKjnWX",
  "key15": "4mEJCVPbBT2UsqXschraA1rUeDrPAW7bZWjcPbyvDSQXJsnqZX3a48Zcq6RV66z75gwVQKGHNcePbNWmii9YjNSo",
  "key16": "5DGTPTpqx1sNcyurYwcFSDDcYUV6Jmd8Tt6ak9ZJ7YuhnWevrCLbzQifJVVkWNsCKg1jEkJKoKYEU8YDda8fVrhE",
  "key17": "4AzLAezB7KDKbh9tY3XXVEa77KUJ8vFFCW7HKejK5kMTZWeYAn8FMxUSWMHxBXtxjZSgrrVKxNjHH16wzeDUtFhD",
  "key18": "677Gc4Abjv6p1Z6svvKPZAZY58AmtvnyjYxVu3sbyRT2quQdk4DL28Z3AAEKtMBqwVL3jJwkUpvMP9TfE8AEyogx",
  "key19": "4kdsyVTqsjT93AURunLVus6N1k99eGqESmYBRmp8URqBizihAhBiqVPfjCbuc2Vo7qquEW3AhqDnL3DteD71oKB8",
  "key20": "42XUwGb4thTQCA1HFRXZ9gkFJ8wu653m2A8gWSY6CoQiJ4BisfT2eMiiwWNL6FjhkJdDSM4vCEbSejNtfSsFrHa3",
  "key21": "4e2KWebeYWCHMeZZKwtziewxbRhQuf9KxkNfi1LAmxL6JxvCqnEx3hX3ian9UKUW61fDT8LrzVYvZps9EZ9KXKWP",
  "key22": "35f1v8en7DWi4rpw2XUv1tTh1kEKavo2DHe42pf4mYmN4VKB46bLs2U1W2JqQoTBUA4ggDbdEe2dUNhS9X1Ey3J3",
  "key23": "4NrjWGdoGa3EzBNQ4dTMrCms5D7jZ41hoNajyFcE726RmmqEjLEVp9KR37DjZY2ZkecYXXF4sNPmdHWQu5c6XdEJ",
  "key24": "otxG2QxpTtN1tzPodorwMqLuR8tXiTqYQoLu2LLhg7LmqandTQKTQpHD7Co3uUSYV8iZ2hfQfK76bVL9S7T1NH1",
  "key25": "2nfzT4QTei8Nzq2tCiRydwsr7FjqDXFERb5qrbgSRuUz9Ks8LwJQtmkF2mF3YHjxKqKv9ScTbYuBYxdgQjJkLv4D",
  "key26": "3hyrXuzPSApQ1SJb2uhiFh73Nn65dRhKiVsbtDD2eozFUkTpcbUGH2U9AeuGkuUVZwH92wDY8WjxLVuZhaDh8KkG",
  "key27": "3tY25hMnJwGXM8fzsYsQWZUReWQ3nFSa6UjiENFKdpcyjmyp4HgQsCvu8DDXz5RivDiXpg2f94Y16rx16Ea3zP9w",
  "key28": "38uPkwUJtgo29fF4anJJPToVDovuw1jsudqpA9RZLEy4oay3S2C3j8epFfB4WeACks5A3SrU8Ydb5ur52ZxWLdEu",
  "key29": "31aQSb5WSJZBVUdmzQnk8t6GPBan7jQASwWngjoJ392XxNdUWPFYRUZrsNdYDjKRRvak5zCAYqdxC9bgnpUQd761",
  "key30": "KFm76QYXZCiVEqSbT77qTKEKz9Azm6fP9jCcSobkctQGWciDkCdPVcvBQM9ekEn5xYs4hgu9gK1SofsGGT1HtBw",
  "key31": "wQ59upGtD7uXz712BqmJ2V34BhPtPgCcadv5ZL61Z1AfoybK3ovMcVyx4ny1pkrPBmrNTcV2zaHJy7jEcRTmgfi",
  "key32": "3L3dYpxjt53tuWqowN1hBberJvmx8KyVH76pRadw2wsxGuzYYDhoFNdChF78BRb6eKGubM1zBj5aGxHNZm6ZqDtw",
  "key33": "5JePP4KcvEYj8VtJRJwFH2WUVt4K1aHPbMarmt1KA2ZE8B5zJBLVbG7x5ruFrjyof1RiQtStWtSKjvxFP9bCwJgD",
  "key34": "3PNeLo3b2a5qbUQjHTupQavHdN14D55CGYmAhhzE6UYNzM2iCoMeYxsF29pXcnzmXTSV66ThjfE2fPTtWZiG76JW"
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
