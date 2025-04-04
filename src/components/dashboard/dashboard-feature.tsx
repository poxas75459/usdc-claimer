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
    "H7ZH5yFDGRGruuNpQ9CWNLdBdrFsXfhupix86BF36pccz5XW2bAfuQPjHUHWzZkUu9FfXS6jrZHmTwoxUkZCFgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GowsjKKiiJT41eCLMXbVwrgJgeyihhE3NuSkKzadrPV4Hqz8KXTExy3YaTV8N21WW6X1Be5ZnG33cECpRHeZkY",
  "key1": "5aUQ4xAihubF9MaL6kzdBce2rbf6c3U3sG4ua39xKaKWXwyHZc8QSBHwrim1UGA3wTnJjLHh5PjDudKgomqP2J72",
  "key2": "4q3D5FDSF3gbyPVXDJoB8L8bz3vCwXH6xHQMwCMMbZFcmpPj5Azg8L6xwqWoNdFkAJhcNhFVyX8dFhsgBMgq7nhD",
  "key3": "3BUraCiUZbXWy8eGWNpkj8A4o291WXAcWS7k7eUgdRdxm4SjWkxVidUag9Jj7k22KnoJW1865E91RDEXstVNe5Fu",
  "key4": "4phQJZWMhv14jqfWRFDGQUJhv9kgJJvQYg2DEBPWahBByPSwEoohQ4qFogK3KmKikhWhUxJ5F7TgikX1d8Kx8Bnd",
  "key5": "fG6GLuKYJzDDaAJDSa2ht11v73Vf2HnPErXDHvnkbUfzrLkmpyjsnbz8yH9EqnN1LDXS5d45Xh1RAMe4o55F145",
  "key6": "4bL7QXZSs3wnomeQFJq4nwr9faCQYkFD4vDa9k6RzJXnFroaqCSSZgb2m6Jns6xVP4H9LQHggztSKk2Hk2U2MAKT",
  "key7": "4MdRu1fcwD8Ho9Sng9WSR6j3BdFzRdLbyMss7tRQmGWUdyBHii3A4h5ZrxuPrGn1arSJgL5ccu54LrUvZjdpFFgv",
  "key8": "GkCSfVtngMnHGzE2heTftaA4B3mtzytieWzgZW9woafkgw9RJHafNFBMLdAaUWk6NHxJvsu6kyCo2W5adzfwkCy",
  "key9": "2qSDUdzjA32B44uruM6VjrBzzKt8S5HCsL7rUwgEE3zfsp6ry5q1eGVyy3xhPqfrrbP7xfR9CerLVZFmZ5ePgJyk",
  "key10": "3QWU6CUACwECWkoWhUySbExtcYbPM1k1YQq85fH5ToeSJyd5RFSNFKGDMcLkD4Je5EW91hoJYPx15X9VdM7wptLv",
  "key11": "2kFzR41K39dZ6fx8xcUrhHAfwsaB6jwFYKvxrnjS59Z9FTRM8iLAKyC17BD6bhZX49jrLu9doXyJa7B8QacXjP1R",
  "key12": "ATGYAoGD7Zu8vQfrr27Lu2eVTq2H8PRPKTpCK2nxtyBdsFrGHoehDhG5vJynJyLntAgB6otYye4DR8iEvW93HKk",
  "key13": "51KFD91HUDUqLjCkQNsE5F6ogotfE3n4FhwFg3546XgW3NjetDUB8Wd1qpA5NoJwS3H1R6eDMFppZyNBReRx9vkd",
  "key14": "5UkNV4m9hC9V6qtJ1RCwJfyrgiHyaJXqWCbtsYRq6PRzxi92KgNLR6ywKdxxcQJcJrkwnURnAZYtuwCwzQdJGTFb",
  "key15": "JCZYMdtTgpvUQMERGfPTXd9RS8HK4DPQb2512Qza6qcTV8wzSvnR24bR4saotB1VV23B1Spgy9g7QmkedpnZV1p",
  "key16": "4cFjeUyQ8ZH6LPgwnKfm82bDsT28tA7UhbqGi27LUiFFBvFxtPfMQPqdmpNvsLUCQQbHsmW6mGwUxchLYQaHoG1R",
  "key17": "2A9y5FtmBvB321MDJcinq7QanBLP5oXpGxUTJ5qdpSjDRvUE3ojVMy6NGKudT1S2WTLWfpRBYwhNp9khnMoAHRMy",
  "key18": "63vj2LjqaRjAMgFfLsUx3Yo4q98XK8bMvDN8bCztUCbfHpWL6UP2KuhpTRp2z5AQxaEzAy6SoDvoGW86VqyzLeD3",
  "key19": "5AeAr3R9JxDCQ581K54XsiYpVA52hHxym4psi2Bn4sMP7v2cBKQu2rzHTWSQo55L1XGWJ7ckGyEw5zjYx6Vv8XVz",
  "key20": "5mRE6hpQ2KwpUPQK4TXTz1d4e2nNFoNAXme4JT4c7YqX4BW6PEPY2hrEspeAqcere28ib3rS6LbGH28WbBP639vp",
  "key21": "2cPS7yGrnYSP8xTxd7Vtqk89k7jmxmVcDgDQkXCciTTApMsWw3PJ6pHiUHwYvRzohpmnBUZuEMNKf5HjiyyTJ6CM",
  "key22": "49WiYA1f8hzsEbVjQpSFDkLnYDdMPzQpNmPkzxxJW88qxeFuKBRJrLfGK2GAPzkMwBY9pvSMPgWWCEJcsCEhtwoz",
  "key23": "3wYsoSsDyiE1mCReiS8DxLYt8GK5dA3ENR83WQApae72brstxRBDMfs4fWkGUjeRQn8js22MS5SvThWcj2oVdL1h",
  "key24": "5j7TnmtfZ4HWRfBWXVnn3zFT8G3EG81eV2Xwog8SDFyNvYRAzhJy1U9m5AvyCxVjH9BnHj4U4Nuwh9o1sw5mXbGQ",
  "key25": "4E2EEL7qHZa7Gt6TQxJnpndUyuAiPgf6peu4fj3C4AyTLHWeiybCb2bsDsdGkZhM8oV1tabhUUNDTnseDARvViWr",
  "key26": "627BadoQkptzZ4ka9JhXnPhPqc1itiy28VfrHaH7QjzrmeB6KzoY1Fe5Gtg1f9WcSX71D3GoDAYvLk3iYv9BoVj6",
  "key27": "5ovJ7km4YaDmM4GxVc3LkG8eQrCB7BNmzpSQY1cisUzQTsLFs34sqQJ2zXtMHNq9MakMH5rvQjZJgzFeam3XbUbm",
  "key28": "5LP9kQNpLGGkFv9inxKikjtbZFKVex17PaKixPtN4VdrdANpZFbP7VWKGFvz7Lro9YYX78FEMxxg5J4sqa8uRHFe",
  "key29": "47MUfzNx9o6f48BAYcZGFF4nG1ZP4npZtGdgnKv8ZXAHdsnD7nER9x72LKJRCgTtrS1v4GGsufxXHqGcA65iuNK7",
  "key30": "4oHLsy3CLXmWidP1p9g7Dc3FhYMBiULPLhBhZqgto2szPTtJ4hHwdUhHqSGAiefm31qf1pCzzqBUm1EhWT5LkyKJ"
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
