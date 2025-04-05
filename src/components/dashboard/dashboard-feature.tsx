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
    "uTfTsNrkmmTuUm8gKcetDZH6VDa4tu2sZRzPnruKb8ctXViVwicgcZ5vTz3BCyh5af8MDi58F3oP6ueCZBPuXhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWJqpyWBmUYPnqBSsr3BLgGhDgdFj1mxiGpi5FfrCHmwdNV4tbQWwhqF663jBeLi2Xra2mFBoci9Cb1kcpRnp29",
  "key1": "Usmz2gyYzt6iefR5mUE4pGYRkdYjxGgERN4NUuh2ayPqhxhKzqy5nhy2fUeCuvnuMaSKvLfAbjHTKvNCYeGta6Z",
  "key2": "BvNyL2bHqj3PeAGKiEoYfXjdTTdyy4QFZPv1mgbQJjBA6vSxk5n6mBXMZ5AMDYC4fyxQ3MVFJyNHBVzbCz5gvqV",
  "key3": "3UYuPAHtw3tPJ4bgvtKSxrwY1vbNwRVojrMgBFBX6SXBPS58G8KfSTuPgHWi3oMNpA6T4T6kMuQJvJb1PGEy8Pxh",
  "key4": "5Zu3g8ixsZ26VvNBGE3fDTMuKmxjmaMr6jG9uMZcPoA6uEcyg2TzMtryJjQnexS3uiXtLBwU5NVpM9jC8yzXmBGd",
  "key5": "6u2DqfaGk75P8MN1aBr6GNfvyaC3Pi7WybHNcjwLqcWeKjhmsg9L7ezpyJXF1cGb2fZT4BectzPiX5TVMms7xSc",
  "key6": "31Xgc3WtcmgwByH5iHveKmD3BnRg2L5KxHcLnt43xRniZEsGwgirQSYLU1a5ghT5QV3WPg2ba41yJhLaLWsVgYXz",
  "key7": "5KW7DC28YcAnAhkLjg8CSzWF3SZE4ZAmJHKsstzr9mVhRLk4FuWQQjTxk3GF3LxyHEm3buUCaruPsAt8UgYdiHuD",
  "key8": "4ZECuduipoT9Bzv54mm54SfQcdwpV9wFpXkpsBTHf1TMigWkwJsNRXNEqxva9f4q4STGCFwkp1kQcFb66iFQJMqJ",
  "key9": "STTHnfQ3Ys16uUv18irFc1ZZvYSjXDwjiBbFDMfSNWqDCTW5Hmn7pdhUGYtAmS5VyWf8PmhcpdxbefErUw6DbGr",
  "key10": "63RjWrkVudoSpQdxNvox2v8u3nPFyFjRSVFNqjzCU29LKjCtZbgZHcAdS3JWvqBnRMrWowvsqoDho37mqXPirndj",
  "key11": "3DNEw7o1qE24oNspoqiASRa2ZRAjs5ALHP8FxAbW4zvK1isMzx8mLS7LW9Tx78WYLxDrRrEsPUcPUjVhUDySn94U",
  "key12": "5GtimG6H5ngUGNAcfjrwsQuTyYykbAxTYkk3GGBwmD3n4sqvrTWESaDPjnZrZABh2Nptio4HusYpMM4fFvEd5Nu7",
  "key13": "2DcXiQaoukc6AP95Ht2PwZs8YiG9yKfarSk5oMawsVLCwjEjNSk8QqsWqbyg5TsVzkTmxtNE5D281AvhvgjRFuD6",
  "key14": "56Tr61zca8CoTcyiLRRarcmNYr4WB9NrLmoT9yidERnezpRmx3UxKSaMtCV4waWnEzPBApNSrmdqztNKfZu9wGYM",
  "key15": "mC9LQt6ipcL5UdfggXMjRwMR6vXUCy3NZ4jg6PkA6HDj9Ap9vLh186WpcBQ9pzds4xbpwZbvt7sdL9Ua1Yyzxey",
  "key16": "5zThnV1TLcWkPymbas1c4g1ZNBnPLaRY2Vv41ZovgjZtkMiE7q6DbqXSYcQZ4coPYr21A3amfvkhQoZU45EgRcbf",
  "key17": "2hxRLUNHAmdPVHoUpj7ems1XTBBWcWhf1XDw68EYvYjtcYcPCarc5seBJsohGhhqsSgpavoRbthn3NHEoPcMrJsZ",
  "key18": "4XgoqhrX4CoEKnKmb7ff4hWCj31teMcLWNN2MUyh6JCSLkVy3tYMvswrkMkfjzbSJnib8VWcoPn2KW1L2Tc9HJsw",
  "key19": "5acRtLyiokbkU2SR5B6nUFb8bGjP1ZotfuGcjzKM5zDobeeLp39QVVdUJnyAmRTG3nukajbFeQZsoqWx1khVyKKf",
  "key20": "2w9nXDoLz8dGUoSonBgBpjySjbirMbnoLUUcqU3aVQPSfDqP2GD6ZFJ5RTWBPkT6qGW9qXz6N1r2yi9oH7KVNvsJ",
  "key21": "2Dj3h9R4NE4sPFCV8FBo1rnqFsJZ3iuDKqrpeDBCFdphi7oQo3zSh22mj7UhHSNYF1RNg6MTyT8Wh6y7SmaoTYjQ",
  "key22": "22M59TdHbcChp1ZR3VhttusiiGAofx5D9eahsUAGNijV7eu246WBDGVJr4oK6jfHKPcEMrgirkaJArQW2Jynj4yR",
  "key23": "4D1FMh2V3xGnSZjMcDgYg8cJB5nuBykv4y9fLBfJm276RNoiW5Q15qk9izBQmpy1AHqcGBBukcKtxEnRjdev3DpC",
  "key24": "c8AZrjf3wFRDc4gCviErZsaNjcNuBnhv9A93447BeLku814H8nk3cPexBiz7zMv4YpA1ZhQdbD3yW9tFTqbwnCt",
  "key25": "ykCgB9dsnSifrrFjqjJChgemB8HPzBBuKJfBQZwBcEc2yxhTJ12DrL5KNunwypuDiScV2wRuoXFwzvbRHKamCwV",
  "key26": "GEHzzaWM7J9zG1wNucNSLczPbcavVR9ZDa5Fd8TFfmDrTPHAuVZXqCGaMocfKANoMmwHhhs8J8FFkSLZ2a2jegD",
  "key27": "5ZR3biMPbdmHY7byyvSfdpAwiRgFEggVJcgoUft5S621QMAJNHLtLQ8mG4R6uMHhUz2mwktxxDYYekDx8jzjNtAq",
  "key28": "jTV5LPBKragTZt4kzktVQm2BSzniKULBpofnsPQgHYXc685fT2P9CrdJSntJtab2sZJ6x3GXy3QPDfPCUo2Fmiv",
  "key29": "4BAy7VzmVtBSb1sv4cVKbA4MW93NiKXW8Txsm2Ewgi7HGyURcEbUewTfzFxSCzLjEh7vGXT3J5p7XfM7z2Nooagh",
  "key30": "5H2S1fJoMo1ER67d1HcTxzphyHWYqFSa5YEU7HxdVW8DZzvb1JuLF3mb8HCyhSKirYJqvqJYXWwWYUzTffbY2Pz3",
  "key31": "5uMzZnvhu45XU3QubCyMqqYVmduawxjEeFZT9ZeaBB1kcNCjBUuKN81h7UPE76CRc5QmZChdB6rYQSuPSxXqdqng",
  "key32": "4EZbrZN2bT6KA4HKFxhHU8JXYfrnogQHTfTUU11qgbFcrHmktcjpPLRbUoVbzDVL4wizUoWuHAur1e5RFNxbZmFi",
  "key33": "2EP9w8VJ1A9tisSoXoPg6XMTekveZXctb1hN7uv92Yy6HpFm3phRQkZNs62KV44GWgRmwxGYAXcUbzmeUBtTZnYZ",
  "key34": "5nbJ6t73inete2nZtXz2u6McjXnbDek4qQvMFioWL1nYkNnHkvgMxiGAywTxj6vVBMy9WpHHWTeH5t8LoPSrTkum",
  "key35": "3YaNfxyrzjzHRiUzxwAZBB1kPJdDo53EATSbVxj16TrL4NGytpBNzmzjFGyVr8PQfCx37eHX3srFUENDtgpPcQsF",
  "key36": "VskbGKB8BakfmR1DdRquYLC6jkjf3HSmU39o8rxhf6DzmmD5DDu4XYDjCrgWD9T2DcSmuqnAiXTpcJ9fkooS6UM",
  "key37": "2YSHED1cjh2qoxwRgm8zFD7r9XxWKDtkuPK7akyboee8QhW4cohUeVLJLjtY4GKQC9EBUagHK32xamJWkNhF1Jtb",
  "key38": "5s746P3UanTsGYUSqMUayiVgb3WMCKbNAREdtzbJkr1CtQRH1C4u4YidtwfY759hAUL1xGACcp8btZvozYHPawJA",
  "key39": "4SHpcJxNFErSLcfyQiS2pfAq9X1eaUKQU22LBf12o86T1E6gbJruaNwwWUiXov1Cq8aLvoHEndvNrqWEP7qB81ky",
  "key40": "2SxRX4ftxmVq9aE82zmWK2GD4Rm76sM1cY8Bz5BUu9EKBe9u4z5PBcjSHpCZcvPQG17cJDhPzcPYF4dRDsmVzNfm",
  "key41": "2FJPnWJaSgtwht7MCJbv62YFysxwnsEgaUpMnF236kydVXbJHwbY5GDzYJmqeVqbsFYT3ipPEkq9XoAJkGd4JhgA",
  "key42": "4MxBS9wYfWkmcqFkBrdMDwfNqYZFAae2hXg53tjyxDgF9h79nHBKdGCQLK4M4v8DU2apFsJJpJfqLFYNNtfu4HiU"
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
