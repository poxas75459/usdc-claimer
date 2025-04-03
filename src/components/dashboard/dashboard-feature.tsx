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
    "3u8y4ixq9rw1DmtoqMUYtpnm7ezpSKVy8uoz5WRJc7s5Hxqm8DKAFhDeHC91XCu4QgWKARHsTgi3vwLqidAAZpqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prxg4kPmWaapxucmfYVcrAnmkmRm6WbBzeweJyzesnMgQa6qPn7gaXvYvM3QhkrzpJ6CidKNb3ePzV3H8PFBFSp",
  "key1": "5KpV8LKWF1qjCFjn2KDcn3VEN7fUW3gd5ziujWrWhKeGizDePGgCCv8Fyju9XhsNqoPjDLn4uDuYrQxAH6sZEki5",
  "key2": "5Hfur3bE9rmnq99kqzm1wVZMqiND4uq468851Fk7a5NsHDbsupdaXmQnWyxndBHynNboV7XaFdh8YdyvwrHZ11mo",
  "key3": "2Mcb3a5wPKXHHitkhATMjRf4LrUBQTmULvZhUGa6wKfgK1UVRhYcvYoynu4ktjnYcgeiJNhKCoNJzS7apsWJhJp",
  "key4": "5AAzFnwX6cAweyau1X4nxcqXHHLvEc7UFSTtyH6maocddbvSmgcPKEjfKN1pvYvN1DhWjJuHHYUroLbsiZxkeLfP",
  "key5": "fFRWDhoxrVWSnFkef7WzhMPpAoAZWsUCzsykpSUnUkGxNFGZ97kvvgiU2u5TsVZ8hUaWnrgCn5tbryQDCsGP14G",
  "key6": "2H8FvvUFQByxKwb2CSFtBUu65JqVypK8CLhyu3EWdcWbMQUjUkPc5T323EmANSKuTSqjeoQxHf8ptipdTuJYChTs",
  "key7": "tdGGucbC18dTFmBLjNRr2T2CSx5wc6Fh9crSjazRtUdVGLnFGiNKSiXNxsMAuahzDJ3UU2E8i7NCPDzysvB6yw4",
  "key8": "2yJdj4mudcWc6sBpHCbSzEZ77bG1LcRKJffRY9MW7BUGdhYUYXVakyzznanwiBcZBABCMNnLXK2vVDvBPaj4mPRc",
  "key9": "5ko6v63y6hbqBccd1bY6gcT428RQd9s2f9JezhqKcYVFsWY2iZfj2bne4PWnVZo6ety6RasmHAAixqn68CY8Sx7P",
  "key10": "nPpyGY7yCoktao6gEEWTAV9RQi5UXmHRW5Upvyznijq5ivqSyWiQ5xgePnFmQZirQ1ngkZGAtCwG2xPf8Rv4v3w",
  "key11": "3MttdawjuTnpLqPPh7T9oEZQuixX3Ej3srqUvoGZiZWb4UFVyZ4xjzrfUhrcg5jJbytc3ftf1vBUexhi69Tdto94",
  "key12": "4mcjMYZFcaBb3PmSGAhppHeyqdAMkmgNuvyQbWLTXrJGqdroBF7x6BTKQueGiVPX1qkJoP4Gmnrx2e6PNSpjevCR",
  "key13": "65S5GV69u3KC8vaB5KGUdf8R4n8FQRnbjT4ecdwoEvd6sMazPPgCorRGYfGveU45MPQWuBYBkRB7scWs2YNsSz8G",
  "key14": "3vXJZSFiUYoqR2NC8pxDrVxrBdemF89segTG4Jof2EobriK4L6kfKrqiLzrBKAsWeafms6v1kUc6Ed5kpP16EqrW",
  "key15": "56Rhh8aJYAfsSSPwmjM2v82CtzAjHQLWqugovtFMUePMmtG16yRtxvjERTuVdLXrkLnehduQjtaVQN7Nr6oP9KsR",
  "key16": "HrPh5JT4Sob9JJkrdEHsgzT9eNjsKWymvUJ9VwtiMNrLPzy7F7t9eVgFEAffJd1gPqdcYBYppMkBFmexvRZ8eDj",
  "key17": "5ZhGdG55VUtdJTxgPvxNyqf6euRrHxfsmmScVGCEjvRRrcFsC6DKWynY7BvYW8Ri1GtYBr41qtfR264jGf87pDEw",
  "key18": "4UKZMsytYMdwpCNfYHrNmtgf4CLs3fNvE2azjQEWmeswYbnGKqEDxEQnvF9UC3to4DjPnaVPqXesysJWRmJJQMTP",
  "key19": "n2SxsvD86qU4kD6YvmfXhSKiquMxqnkrPknAqFb7Tne9bWyq7zbQngFHtdpmY4orWYzT7boGyzmXciFUUYYz5rY",
  "key20": "3wXSuD3msEdmXaERB2kmKjumH4qr7SyZfKFZ4bxHYc3HT4tkzJp8cHrCGpA2hxuJZcxSK8T4Nm4GCL7fN6CWNrqJ",
  "key21": "LB4qeVWcB5Uw5fHJNcrCDHK9fQq3NPaAWPwmuyWd9goS16tSgHTzd2anvMXcQAiZ34y9GYUA2CMdDwutpf4Ne7o",
  "key22": "4WEU1Uu4ACRrXbH3UZpzHp8eUz9ykdgJ4XcTRtwaDHRaMKoWo54E37vve351FefjDtkQsGkB4j3dh4Jj7qGsFMug",
  "key23": "27M1QbxjcK1jNVZZvAScBbFqpFcV27wNzvm2i5qLS72jimcYN4ocLBVGt5fGxHrKp8MWte4ts6RF6fco3SBuWn6G",
  "key24": "4qjyWWqjHm1iT6PaYibG2FzjVucWFwDmaytrEw2FBF6i2ZF3AMErKtyMRfETCd23T5zZbumgLnzj78Wr1f9AJYbW",
  "key25": "3eMGcN2FrtSu2ZubH4H3bp9G5q5HghE3Pi9hVxN1Aac5V3LupZzZ2LdYDFPxJNx5ENytHWL8N4uTXSf1aDi8qA2K",
  "key26": "65vpdGaQ4RF5k7JMr9zeMwv1TCrYAEpkzz6fgwyrF3VC85m6NEpc8tug5WnDgNnriH4agyQgLWbk9QVxVKCEmUoX",
  "key27": "3DGeZ4CPH5Vgeje6ttnvT9KX67ETJX8v9ytNqSPSykPHSAnezuZNdkh4jamPrUA2fv3EkUEFjoFLW1hVx6hzNs7d",
  "key28": "3GzrwTi7CiLUk5ArekLNXhvw2hniMbGje5jRBp5u1uZAUN4xUzpAW8gK41bE8HzyNnSY7YFrawHcKC4xZPzRdSbP",
  "key29": "5q44fodtcykD6hVGTjCqjYuMXaPRHs9HTZcGYk4tRso9NmTTNyaVKPUT5SKv6igbwei4BHuGBQCfwunDJVkJD8bA",
  "key30": "2tVx4a5cbgaXGdhgWz95BhVSTqepXKM6usZ2kAX971AgUV3q9i8QQqkb7gj3bUj4yihmon6y4ZQprVYJC9GNTZs6",
  "key31": "5kWz55MM8u1wNVqZiVMAxzpgjeNyD33xvaNLuiLEezugbM2gX1bTNNQXtBBKWvB3zLJmGjX2nxpYK4CzBJZXgNm9",
  "key32": "5D9PxN98AEd5CUNosJAP7qFYp3j8gumsefQoxRrmTtxMYyLXK6c4KJpeunmozsmfdWRhiXfCcbf9aTdT1k1PFUUM"
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
