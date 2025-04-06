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
    "4FmLQzcKiMHWYrj53yfSNqUp9AcPESQBNEoomgcBnYZjxXhnSX7ZnMDQh1dr8AU46s89UrZ4RnXakdkxh5VGLLKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FL52vrhmNdBTQ6pdGP7MNbKrzQnsvpy5ERTLUVYF2yhA3axX3RsvjQ77NRyLxLjn3fd4WwGrQcF7DWUC2t1PCf",
  "key1": "zAva3df9jR8pHkRqYw7jKa6TaX68bkfF127Gmh8UY1cAwk7L2Ytazfw41T7foSThzDtGNYU8Hz6rMHAdCnS5fiF",
  "key2": "EB4ebSTTu1642CZgoytFeXfp1pgmiDEXh2GSxmdz9X6HbAU6znxWuF1MGJDKRxfZNSGKJACYymLZDMywannBXuA",
  "key3": "4gYF1vH8g8XHsbwToQNhVwXe3iJWjRGzZbnXxfzsBvKcH9Z5yz8zVUjAYLrKwgHLCeTW5Hpjfx8pVWfgWs1d4Xy4",
  "key4": "5FYdH1YU5uU85i64cSrKbukcgD8FDpbd8WgzYP9eGMjymJHaYbx15L8b9TVGpZkKBrq3ETY1SaAFh1TJTE9CZUGd",
  "key5": "3xuMLGAvtCRhjV3fkJXn3z5cLZD2NUZMkgoktEv8oz52vVd6spukBHgP4qirRD7kZyyoSsADW2odnYgvn6myQEfq",
  "key6": "5Z9BKBwZ3JvEgu2HhofWuw2T2pfjt8KbtqggoexNk5NDaTji44gqedW3Yip28oeVeUHjbcrD5hUAfWhjoiHEVQg2",
  "key7": "3t4GJnrqwjbs9PQP5DDFiF4eDAo9RWmGNeALPgu6NopXjDtGWLi5CMrs3c1oQcezz6yq3ptfuVz9eDmdyNy4EeB8",
  "key8": "5RJvtZ1mNnFCRMb3CgSKzbGJgHiBZoKMm21aaHr4Yb8CoiuMzMx9hiron7fNhezWcGLvFomf3DkqWJoJn1p7F9bd",
  "key9": "4mrqugoLhKYNYKwy2QMBQefjHeJqdykGAy3DE9vKWWHfS4jXKnvDbaLB6YLtRKvSEdyMQNZkZpwDSiPS9ng6p63Q",
  "key10": "4eSE1BzLfYof1y7tu1t3F6Uztrgbxk9pnAZDVzNTeb1wVxRgtT3yb3Djhc95rkPJRubzxsXTRXhfa6NcZKnHpVJS",
  "key11": "4EJFfEJeL8tMkQSPNRkJUmJRKYub937mqggAdEAEN7JBCDsmsFitnegiKPTxrjzcKconL4Yf9qRdVKMbdCxAndpL",
  "key12": "3vKK75BmZGhitiXGSPn6NSYV8Cxfv4Afw46Gs4P1cdFvkur6sJBfHzS3AxwaTovKHYd9rwAP9MF86SRmufb9UUE5",
  "key13": "59uXZqkBCUCoUu235XNMvgDxq18Y4j2vSetuKVzBNU5wPoJQ7g1C3PaiNS6t8AwKT2gmUerK3LYcQXKf5Ag3ezvc",
  "key14": "2sLqEa78zVkVUi5eK6es9PZfGEszwXx6bJ1fSKUr3mpzwUeuLh47CnVRCuyMdQUbus8mQfjaVixTddpwp6WisjFw",
  "key15": "3oBFavDcYQ7BYLjb9G3PGwivBzrhPAMK1nEGuPPRe3ij3VwW8iSCabVURsd97i8RHPai1qZ2bVLZuRwUeyAkWAEN",
  "key16": "5yvWNXinJoW8WT8kYc2n4F58qMToyUQdHbg1BiEjmziU81UenajVGY5rqRkokbp3XcWHRVcWoUTnEHKNJ7XBiFc5",
  "key17": "5d12yVvTDjjkYQdo56Yf2j23pxex4ax4yBM4m2nXt64kL8HaWkrwvZq8hfi5sBVfQioqN8NGNXX5CrNUsfhaVm9Q",
  "key18": "2zEHcA7uiLrZiPgmDTC2YRxomofuj4aJaryx5ECohjKCrqo1RL9LjLWnaPEhGbnFSD6sDkyQN8b6UnSu9XjRa8Yh",
  "key19": "27G4WJcCyz9tTCYKHPmbVnWGqVLJ7YoVvHQXGiW6P6JueMoT5DD6EmLYNBU8iGhcD8t27zWJv8m8ywEAvP3273dt",
  "key20": "KyhcU3ackVS9jqmZ1sjLDEe1zggdouFa2KcuWQjNbcrGMv2im1agbYU39hZ19WvWUkM5ghr9B6n7NhwwN9pn2K5",
  "key21": "3836JH8zdafNifz7RjhiaV1sqvyc9L4QBTGDxTAYNx4XQdfy4twHW9Qxrn7MAhwDzXQWHahHcSkny3dspLQeLCXU",
  "key22": "3gNNJFnyz1k5ZuzMqcgZ163gYoLvAmcr3WcuvTfcv2rfL18BKuN8Gw64G5ZnFmYDCTesPjzZyQMukGrqF8CeXG45",
  "key23": "3fY9a25PsTi6r9aHMDDA8JkSngLQA2jVkGRDMF8YeyGySDi3cdHjbramaQDvWqts293pydAmeXnBAainixj2ar5m",
  "key24": "5r4EAvn5fWTNAPMRpKzjtUCA9N8axznR3bpX1ycshUehJVbWZTf1ZTMa3yLfsnnYj1TMfGhvExGMkjCQttSo5m7j",
  "key25": "4ptHjK5JZhCRGmxjfQsowQQPEW3u3rdwZjvpR9JbvLYQKTvwjYU6wfmHdMic9vJeNt2ebPPFPehGmKx33E7S9TXs",
  "key26": "5dpT1WXYQms4nDFMq5f8wEojkSezWxZkhMY3dQwycJYnyqJ2xbB5cQ3F5rPma6Ri1MdNS8HEeo9RqRfkiSZPm4E3"
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
