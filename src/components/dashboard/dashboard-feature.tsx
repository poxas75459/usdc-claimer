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
    "5KLDbrvrCsvsdrGfH4ecgvUMnoYXbStNpsa3PH25UnknHWWcL4BJAueP1tNqKRPSGcRANT2ReVU8qqb2LnAfd2Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHNmezxEiEDDtLQGzVpFcwKZStg1u9fqZm6JruAAdxYEvMdMjTWdozKXKByrhzeJaE3gJqB4MjjZoqLnBSzcfWr",
  "key1": "kYFtS4NrGj8T2ZsDcKqBcejWzJvixL3JB9eEL2GNxYzv73PsZoNVziqvDiMP1Z3pY7QNmGThMmCgC42uBj6dRjy",
  "key2": "5SNSRxVPNbCvvYQ3P1M5YLnUbpnzxwuKpu8DKubW41VKp3pd1Y387g1hywVENe5nAfzrSVGF6SgmjzeBzxBjFRw7",
  "key3": "5TnJh1rLxFgv6CE5b117eTXo2gxVn6FKSKW1XQNwsozDxrdr4FPMUcx5fiVdZ8Ab4FaAVYm68Y5Mdrt3jQ5HztRU",
  "key4": "3TwyHhGEvidxokQmYuD2vx2ERuuu8co1NFtmcJdMSXwDpwTCPSo2UhR7mZmUnTFMAtmD33UV7zWQKjTkF421ss7K",
  "key5": "4ZhnvGd5rEASva78eJRHTs64hJrMbruNWJv3uXNydr5u5URf37aGAwPL9BCaN49L5smmGUW8Wrgc7doko82qsuas",
  "key6": "4ptKncFxbCqd1DAVrSwpDJKHvmsYjtBdNdzMwkM8BoqUcMGTz9Z6TajBk9fynF3TFHMFDnwJjRogN3q34G6nYnab",
  "key7": "3vfMNEScDaJ9Qv3P9QZRr7xe8ghp9m8k9P7mQf1Pch3PTeRqm1MpYSQq7hCyDAjQvyijEf2uryrRfkJCZ7aLpXt8",
  "key8": "2AFDXA3yuML2pHmAJw96snXzxXb7PA4e5V4AGUzrrxS5j3c3yELLuPgticz2tdBnN3HsuBJ55SNcyoxPhvFUfEk8",
  "key9": "4ft9jB67fQZCuiBaTQQmKRhNo7kkMjNvc9qYNSBtUM2pysUo6EAdepu2yPH6xynEBXRzEuDBoH7w1Rx3WX4QJjDZ",
  "key10": "2691mTHrewpTsxsc3ewfPCkgGsggPkHYm8Ht6Ux8J2hMyVrjwsLeHMJT1XnQWj63Ay7KtGEaSsqV7wCVoTUez7cn",
  "key11": "2aWxFL3BGUKLbWK4ToVtHgnEuMm4pmCieBKMvWa1t4WUPXrH9U9xhY6JvjNsqy7tBExqDwMonQgmTJnWuyESGc7R",
  "key12": "3GHKuW1zZQT8REweQETLzPsgyPp5Xg6sy2JbyAqDXVEBEjvPtdeHaNdgD7kCktWyoKZQhNmDYu3cQtxfWeTCPZRS",
  "key13": "3N6gr6S59PxRUr6CyjkNvGk1Qvw5WbaSzZPhrSV7X6za181jnnei2XCoSUwQvYQPLXkzPT42ZzFbnPCZuLCLu1oe",
  "key14": "2jQzyPgGk7rP6TJxSEKVngyJ7ucvnzXENg4JYxXY9PSNkNY7JiVy4fg3BKhbbzuuK8NyDW5AjCT4PsUwW6kYc2Xm",
  "key15": "5kDgFztitbiL7vYccrGbK2BKse4RNPhxfSW4qWGc695eVYmjoYiMsNGNDQPtoVRrvUbRKkwNDXWxswzNi1fEVzez",
  "key16": "vzakiURcVYRmSdARi15xwvCWetYWrjoT5qKwLvkHNA2BcEgNxVbnex25zfdJHRF8yZ57gTxqHPXTiMVJ514aEos",
  "key17": "ULxQeeJfLTfz5XPJxhRoYmCZdvkM2KyVo7zhYjJFKmfqAZtQNZuSfxTauVsXYxW2i1TMVxmJoAfESY4T8SiXuyh",
  "key18": "2f4QK4fLCsLvie9vm5cwLmMstohA2XPXWycoJrRGSZkidbTMLJDvjfTvF7Wp9PnVnGFePHx27E8HcLoZz8cPiL99",
  "key19": "3YkQHvwkT4KSYdbfx6YarSwCeGvmSBEPVLVZQSFbCed2FFjh5RNnydEV996tWE6pD6PXYexHuMsAXzeP6BT5ca4h",
  "key20": "2LHvBK3NGoKYrvFhxDDYesvkMZPWPb3xUbnhvmUCbJihsaR1rLDjBJ4P6SEsm5NXHJ2xahp9RPyPg2fBF9Gqy4cW",
  "key21": "22GMnekXua7eo7UYREmnUwAuSPsTjdkEm22jyAHcVszxW1MSQB7dZQkwucxvFVRe5sG2StAgJvfaWCnWePhwnfRe",
  "key22": "2qA83p5cWBwqB6W6FRLjHTZwmMgLhZrJzA9YnxQ3Ht83ofdf1jJHoqF8BfqNv4fN2EUhaitAk9MRsDGmEMHmAAUo",
  "key23": "3FX514L3uSxa2hHkx5VP2PLd9vHKmYjjJ6GjyoYu8NpHXPFf99eiX1N72FpmbkR7ssLo5bBkhSmRVzMSbusr22AV",
  "key24": "42zGf4chYJBc5QZazYWQbB7B85KjrLPBMUBLdcvwhzcGCxZPwEpJmoM9agtVY3kYJZyHFhLfS3oMztcutwnR5KP7",
  "key25": "MwbHx57sA6Jo6u5txiPZqsYP9GamFxABmiy1ezqPxJVz2kSmMeCxiae6rCRZUFaFB9PVKy7bhd2T47n8iVLvf54",
  "key26": "5JVfWLhnhvvBj822Ck4ZKsm6ent4S5dfqHQdQhG3ga6nA2NBqCmecTFHCSd1nVLGLHNs7qr5VC3gRncbihCBo7W9",
  "key27": "5jN7XZ1SonEwuyWmF1Gz1kjL8i5ABBR3LrokHZeWxptdkkoZ19T7MRGJAcmrRUYgt2H9DETr69Z15DGzxfnmDpNe",
  "key28": "2wgLJbHX1nopFzPcBUmzP7mXe6pRspC2QMgdnyy4ZKKuDNS1ShnXQc2P3xtyFSM66NuNZBvGBWqkaAqiqTkqkbeb",
  "key29": "4LNnxWZosiYaEfUgvknTKQuF7NdFHyqr21GEcmgZ1LwwcgUHusrdgPtZZpUc4dAGeAMBFgGvCogEUeBdR7K72aeq",
  "key30": "2FpH1GDBMchm5hVKh6aSd7aE4RgrGYJBStbYK575sB7FNW6HxUgunBws2RZ9wH96d4R1KR98QL3E3aaYe4ucfLDo"
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
