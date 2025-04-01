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
    "2yK4LKUdxwi8KtVDx8CrJssdzoKdM2ob8MfUYpXdhAdcUzKfZMoBSUvjEUG5DKD2QTQFqUymZBEtpdEsaFQk4yMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzVgzNBdKsbR4KXGAxf8NLiLTXHtSWBgpWhrMDgkooPCZettVFxUFSJaoqGrH4m4kETYGmheyx7rwRN1urUfoCY",
  "key1": "5uUzcWMKGaTYTB4jBbCBwSoAwEJBfYhVARS2og6JGiMutYHiNg4T3xkTuAzwWYs8WmSr4mBReqGHgHjKP5PCEu1N",
  "key2": "56oGHQPskKomUsW8woseYyWQMXg7JWQQxqy7pis6L5NpoV2ewssN5WFPpHsf3iqk3VdeMjgidrZS127ErrLfjxHT",
  "key3": "5b4AKxAyiKMFpTvdgfNkvwjeKJwTknJJZ1vAvZ6WWyhRQv5qcEYJSbzVSxbXDeUzZz6FeXtHvoxWxNxKdo2SeCVt",
  "key4": "hkxDkC5HbW6c8cStbNo382mpDzHnzpU7KW9ngEBsL18Sivd7k21vLgvht8C4ZinzqKJNeCYpgf2Noj4xPWeh6EZ",
  "key5": "5tj4obvtEJTBjDmrtteiSR1MbEgGjHijHiDLvZZ7yiQahiYQNAxqCWutt8LpLib9Fn3ryKBBXvM3D5CWmghH5K7h",
  "key6": "48hnNxJqvuTxrrwCoNUC9kTDEuKXSvpJWGHzzt73D4Yn2s7VGn7t2xCWttNyV9uLhRL9xASFRxG77JYrZNVtRnm6",
  "key7": "FSgb1XGxzBay3HT3kwapyrDxMbZEyyaUFrpoqUvFPHSxB6jFfuj5kj6WGW87EUQ6ncbCLyxkNiwYE1h9xRPFnRv",
  "key8": "3kP9SUvktkxbMYjiAAdTkmxaZXV1AVEbbPBNAkb9woHTzR62DxWUDnQ3M7Cmt72s2enis4dffmQgbySVartXYnsE",
  "key9": "5ikA5qFPfujV6EyiKAWb3s8P1nhVKApvwbsxSRTBz2jck39XsqkpcnCP5twA4CuhirgPGzmgZvSRAnXYDdEEwEfu",
  "key10": "2BYZ6SjysUrHJqYvw6oZC5jo4HzP5T7nTp7Yh4b1yu6iSiSGk2UbPUT9UEBkJNxM6xtkZTqKcxCzeEDX8Z4VdHcA",
  "key11": "2hca3WFR834MJ6JZiW6Hq9RwZuFrJc13g17tBL7gvDNp7TkYwsgux1YR1wQWTKE1axdWpHzoeQzHmSFzbWrwbiRe",
  "key12": "5ETYqUNPyrCffAUUV2JWoByP9JmMYWFNyABjsAxMuEuupGE7Ctt1hqkStB66qzgUoMgzB2NMSeCN5C7R8iLd7z6w",
  "key13": "XBShuLfKApo353hbtyiUff2VhQemZHgVHrcJMTpfEeGoH4dGQ9tSgbc7uRtCjmcUgwqmRomdSqFgKAC4hJ5W2Ym",
  "key14": "VzWNwXRiuxpHiWV4c52J5nbeEbqCij5jLbqTUetwfVt5uX3jxuV3cNkZzuWkZFcAUKxjP1Pbv7ho1zyrJcdSGsd",
  "key15": "tBYxBPSinjG4sVkoH7LNf7VGdwxEWKnqsaBxVYFHzDabnn8ZSLXEP31MtL2tsoYRMLZyt8nrrbYrRScirAPZcgn",
  "key16": "2ezcXF1Ji1dx1jaxNzU9mq8e6itnxSwa1ZmPEsKCRawzmG4AJ9mNMLQZiR5bTG7gPGnyWD23zNxsRT7PXzATHUPy",
  "key17": "46CsBLk7ZLJTwvBNSrCZWvc9K2MaJyNVD3g54QubBk6uraUKkq4AGbRVav1ziWTagGAFZeVEa9kAdaT4yENAmAaP",
  "key18": "2srDqDTUYtKCmBjDf1CM2jBFyzw1qtoU9TbaZ9LvhyZAeXKxZf3fXKaJcYCL3qtLSe37yVq5PYQ1zNnLCtG7UVRT",
  "key19": "51uAEP9pD8NsnhULE8eeQM1BjuoK1JyNWo5qfDStseAXDgjhtAfSiA1L9gP3b55qL95ZBGzpdj3EWmKx7PfHYBCc",
  "key20": "36yQDZA3ZdmAqpWfRy46kos9KMabRkSJZK1AAe6GJTKqmdR2HgG7Uqp837ovEzwgzPUDV3zeaqFUL8v3NVAtAyPG",
  "key21": "LGHKFh8xy3BZhhbcSE2ADjRpz2HWDf2QEH6TEL1KYrs2GkorW1oqCCKwt5ZM8z41GDYcZhpG4ymATX8tDDrFCZu",
  "key22": "26Lt7ni4VTjyPtikBpKCoNEN5MJXQtuD5GPm7RWy73U9ua6KawvqBw2GDPc4bFhADdLhf8fcwiQLmYE1WBEhYVdw",
  "key23": "5XdZij82S1gKzjUekYQf6oE4pucXxTbbTGfGqz9wDco3DaeFu4UD7md1C84VpsDc7Qbqn69pqUKedQNtSKRRGaoy",
  "key24": "3H3wh4MKGimejQRsrX6JWnZHfvYrNmjd4qU4AJQbPuMywPTrNwdiZFz4oAA524C8vT72ktiKrbJnJwSm9TYttRfg",
  "key25": "4Vi4qpQukDPkLYGnkXRr7hUEH5DdF9Sf1kYZ9n8PGM3x8LsC8NYrsmSDXXSHncuh2GCYS374VPrG1VS9oe5Ntdvj",
  "key26": "4dMnEmFCM69cP2c6mCRAPHktJqrQEU6r2wGq7xzWquT3q5TdD23XCtMUknr8SSFuT7nph9FrWXP3dMZjsUqi47wS",
  "key27": "4cmXbJwZaDqKYeZuSABjGDc1TujXojJrJAtFhCW2rgMQw7Z72dTf3QV1YtYKxaLcpGDDwSQukyigxFeLNtdC5Dip",
  "key28": "386cWMZ3QaAGW7iHGsjU2ZogYr6DzqNAxWgFkyLt4bp6mJhPHMVMLaHAPgG63tFEpc9A6P8riq8wfGh3yeAcKijZ",
  "key29": "UAvitPBXHNN1vTdWC1mGPcc2CXbQicZskyfDUHfREsAGvtSdBJedBe3vsL28GV8PNsmCpD4fQizfC7TRTURBhNp",
  "key30": "4Vi7jvaTv1b4bp59BFUQMjV6F4vAPtdPF7ago6r1VvPvg4NwupRzEKKQP69axgX8C1sGee5k2dUA1sBiBKAEWrGW",
  "key31": "3aE34s2iq9PxaxUfEg5TGbTnLrKeaa5vtpe41ii9zmsXPSRftMG6J3ofKx12GFqGfa4vVQvcMTt7aGxrDiNoPJR3",
  "key32": "d6bjDY9KpdaMDmZJjnbia62ETUeetYBdtBmRFwQvBWESE2QHmseMLCLwA84PShfx3NGE4LtcAJ2kMwTwYYGMPTt",
  "key33": "CUSQPi2YBHYzcAN2fpPokhe2xzmtb5c9FekpbPQxchUUxDkDQy18a9Y8NzRu63DKBNnGwXDJsakapmmmxARFyft",
  "key34": "FAwQNBZR1Sc5xbFkjQvmWpUTV9kTWKr85FjXMsciGR8z8YaqheRnAEP3yLckU1aRprvt7hWEf1RG75pwvCuktrP"
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
