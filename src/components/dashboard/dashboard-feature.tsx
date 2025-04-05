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
    "4cMa5nCvJqcXEe9crhB2A9bLki8ZgcwV94FFuDjR6UaeM31J4kTT4dLJcLZzsz5utRo3HHBYXRiYbL6S4Unxxq45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1FePxv3rmFrgMWENTxaBVwx1L9fTk9poNzkznjCgdLD95DUcnmbk1DnawFZDMqwxEGyFeBu4BnnAkvvzkXuGMn",
  "key1": "2AJkDg8ydBb6h8M5P84iqZEJ4VUthN1ATghz8aRtMdbNhkEzbQMu5GnL3WRj16657LXDLaTgfeTVj5KNqGmaM7Xm",
  "key2": "HVmguHdFKQLbo73F3haqAWNtHRaPvrbK3Wat3aLRBTbk1GuoPCzqA6MfgmsTsE7NKyoJq6gdzwmD3jqKbb3Aoiy",
  "key3": "63N3MTW2qPvKvTnGSKZgX1miomM4ad3e5UdQtCLKr26iNC1mEe25YBnXLhTGGQAPbqLdBtzYbKDFFanX6Q72qWRS",
  "key4": "2FstR5LFndgYZTv9s9FPZgiBmhadpurNNLwfRFxicakdJFHZ9XcqNHYScfcJZ4xCDXdPuu82oERxc32dwuZ6LzyJ",
  "key5": "561Pqpk6wgZQ1xcCBmLX1o4jfiVEnTvHEJGTcz4BjhcWkByypURTEzxEygmvtSRaMTASoeCm8qV9hUhkzG18iZfC",
  "key6": "qtM9xRUtaTYpkoBUGDjY8Mn8LWFe7rfexmQzBF9ejRXfQXuNcNsFtnZmWubZcCCk3gDeY8yjHAsTmNKqNjNFyQp",
  "key7": "3XobuSXqPJEW1FTjCBMw97oM9yTgf9xaiGsprvhzw88xFVdkVWRJd5i7ELAJzrYk8yEDV9iaGYaanT3cisyHRu9U",
  "key8": "4ZzAX1XBPZjHum2uLEYg6a22smyHvcUwTap3m52QhMo5e4uxXLSKTdBTMmBhdCyriC1Z5D9GMXURPZNzhR9K5WrF",
  "key9": "2bFHoPVRWJHudLcX33ufWooyiDBnHbR8qeTUYrbidRRiKF7r9K8Rsre1XxfkWwHRvwZe3aewv3E75rhSTEWVMspV",
  "key10": "2EqweUhsjoexAbkCaCkNS4PgUrXNNF53HpYAdiHvXwVLchhqZeacweYGB8HnJaFZHYbLu4E8mR9Dy1psYg7jYxjh",
  "key11": "4jZXrQ1q4tF7JS2A3EFv2zvh5TecHKFaJuuB2HHgsD2RHN628oNPQ1Zti9DEFShARGxBtzqJKnpq2nusyzSH3PZ8",
  "key12": "5MdrkUDKkVNEagXNSnSVNULpjdWSe4AAjaJSNVWHJCLLK2RfwWKJTEQ8Puku9gc2qYekYGPEvctJUAFcg3ipRq8k",
  "key13": "3zrBd7dzqC3cyfFvngk7KrVpyov8piav4E5xDwvPPYsdNsgWurrZuHA6WBCDWUpckfGsGL6X8vtGdHgKSjsJxv6H",
  "key14": "CF1LGBmsimQZ22rQFrKJ5SuAonxrCNFZdKrgjYMDZYicTwE1W9tNZiDmfVUqe4Q4tXA3RjyiE7o4iGW9MxZa1V3",
  "key15": "3dHdtm3XMPXz4dDw4Fd9XznYfp3YaYa3kPDASkoHQSGZf2rqA5R8b1n5jTv7dti89U5iNuHiBxPNmezs7DEYUbiu",
  "key16": "5S5VKhvrM8asAd3mfE56L1EHr4LeM77PcoK2Xq8E9BcPCE9cEyGVqVYCVoAnm4QvKJhvFvPTTNDxJFMUL2g9zwb6",
  "key17": "4j16nMyp8h2vH1eYysJRPXD87babKSGhGEpXB3GfffMDTsGXeXmM48uQEH2WbRMHTgGzAm2synqCx4h53uNpD8u2",
  "key18": "2AVoW1NmnTUsNVF1RBckfJPJ99N4PT6gGz9RPx6FRqigaQewyhi9Sus7Srh97zZcJ41Rr9UPKiCA3dsNgythWneN",
  "key19": "5zUDMGPtZREitfEvipfUAE5xdE1astP1AGRDohpWenfFkkDVutmS1vi7yhLALcw51PLv6bqD1vGSJydeKG92ZiPH",
  "key20": "d6zVXMozpTcjJ3m1fMzkHCH4iguWvgzhjNR7QYJVviLBcEEFpgSKyXspY6HhsSKz6dSR5vrjzczjSNxVDu599LW",
  "key21": "2L2P84zxYMduhLSATiPvbVosyz5CFfPd9zCQ7jZS7wWZWMbcbiapiuxjqoxDkZX7YXfb1UQt7pAXUaiGKMVCbfLm",
  "key22": "5E1boMkAS4cAC6zEsvQxjSfYyu91AhnSgyJtaLF4a927Gud3jpgk9uQwkMKxEGQPwkTxVWaNEsVbnJcYAExF9MLs",
  "key23": "58bkEEgLf1sNbcWzpLt8dAKeH2K9Z3AQWgdCzmAVVabAsdMCzQKTDcpDcqhEm2v2Bc54AWNfpCo7q9batknezSzW",
  "key24": "5q43B6s6G9nD8YFFVTjJeKhb5gfBMgjx6cuSfdFR8H5pTmkurMjwmgzB8B8uPbkRxTktpKaSizhF65YRUmpZk1sw"
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
