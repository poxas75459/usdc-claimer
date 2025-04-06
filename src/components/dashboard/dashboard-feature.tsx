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
    "7rH2yBQnLo9pdZin1PvL8fhrUu3zYLmhcbkxKy4B5yQMNbHbX1Et3fEHDQP3QDWQHLqy7vbYqbvVH8BfhmavcxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEPjFhtmbjeFXodDTA77iajQvBTsXZvNFbnkM8k2zD9QVrxBN97txQhJqUUz34LEpjeEZMnzF494amomSLyv8UN",
  "key1": "HxXpQtXds6QEpBtFrtzcrRnh5owsgHnfJ63kAoKLjpa4fxcFKcCivYMAskBEMrCwwovhduhdXu8oVV1PBRmwAqW",
  "key2": "PCzpreQzcGFhsz48VEz9eSs6DyRChJyjEEp1Pm2Cs3KNBx6vkV9VTbuUPcoZAuoRr2ukGn1gpbHVs3YtoWY54iN",
  "key3": "4ewYSZqQeNWYFPvHzbh3fPXtXJXRyDGbKzxX9PVAa2iYt9jZmmmbUVta7DuXRcWyMqSQW2gFEwfzjyNXLqaCHLmt",
  "key4": "4vyTPqc7AsdaeiTxjm1G62ajZsTFUUvZyXPqTGducTCgqexrEfqUENYpeyAXngmSBWNyaTyb4YUS9ggruTq6VjUY",
  "key5": "3bt1twJgPyXXrnwJhxi6c1QsW4JWFuwZVwwmxE9KEkexFmxnrVebhtPMGu2qPYtg7MrvTMCLh7ta6Q4MoReWNrgq",
  "key6": "5taqecHrCCZwpuix53PSpSAsP1PQgom96cSm6RJFGAD5BKq6johrxZohY3zM3x61itYQmaX33p4BUqXH4BaJBbWy",
  "key7": "5MqYDyqcy8L6B8LJQrF1HjQwQkkDcZaeJJxSaXP4gEmaDF7fsDwwodiRxxVBdgAANfHyDNQijKtcn2Bcy7NBwSFK",
  "key8": "2YByDhkbJeiYCv42NY8A5RAhnnrE3HWWxtqN7rMGYxnHcv9kRsFhrfhKFFrtifhSdyY1v4USPvGC76nU1Qp3wPR2",
  "key9": "4tiLpHFczWrN23iLT8RzkhxUSdwWpWpip3jsuWfKQqSsTks2Ps72xSSbJjCfhuAJ3huKpBkFHKP1Xrw5qoQLxiWg",
  "key10": "3aLW6ZdcS3igJet3r6Tmfmem3SSqgifErCHfULesvcdFFPLXvkBTEtDvj79MD6SDSGtQZjVx2eiv4eCycfgURwrM",
  "key11": "5y9aAThZgfkKoHL1btZTGjg8hJJC5okNPTXrQfKprwt2FEwVu1d3xyLy1sh12T4xUV2cFKueqemau6ZdHgBX1Xqi",
  "key12": "TYLbN5aU8uzW67TkWbX8jxLZxtNfVTEUQu3uzWUEad8yeC1YDhQheJe11ectP3dukedniiivuedwKEet4A77iNn",
  "key13": "3B8EcssyTQ6EjzcXbHXhyKXswYr4nDo59hCpsd6yoT2n1knQUGMWTr6WupfrXz1DexDrm7kCbkBBudiFcHUEaLfW",
  "key14": "2Xsbria9LR4U8bpZrKtoHyWwHmca5STXcmaCvwEYeYCkb5k845caj36uU28P68BCnmMHJnzoPCY7xpk7oZWaUbCr",
  "key15": "6hFbPZDDWHUro7po2YGKsjoPYxpkBLmKXL6Z6Hq4dDTteyTYC21DFQFZyC7q5EYAdA6rF8EmReATF1eECdSRk3Y",
  "key16": "5nRX3YrXmpFX4BAALr9CuzhdT4oKA1MNBGP1EwYxaKkxTW6nR7JvFdDu2SkErqXuyERLWWsNBx6h9PJLbU2T87nD",
  "key17": "HeDJ7QGwPCeenPEvVAxp3gc9WRxbhPuwFw8WCrYgBxd1dQGHHnivcic8MqL932MisjSfpoAFRaRjpecqhxa4qUF",
  "key18": "3XPPcbWcbeNF1ViEm4XhMeGbj3hUWMKmfXy3zXUYeLCndfAEdJyf9hp94y5V31JJzm4TbYMSpSHURFfYAArdF77k",
  "key19": "yjSsVjec7bspW5qn8Baj8UBpxDFf5f6ndq3RQfWqdMsPZxXWgh6cA5wkbAEVR9y5XZAsP2xhoqcGnoBfS28hnAY",
  "key20": "5JXDf4o8M8Rap8eEBuM2Rd8SEk3zMprBkMiQyFSBjoYHzzVrhfS5SRgSpB1LLySLsSZ2e2BXUDgJUJwhupgTTYJF",
  "key21": "2nYfJTCk3RFYiPrA8H6FZT6T4Pv6BkZusCsUX2agVYNKgYhRDDmGGgAGEE4mmJAq26KCqQuvA4q3abUf9YyCHSj7",
  "key22": "wn4oFsr1r33VzvAYZZA5ZF9X92EPzZisermYxR2BhpbMZjiDZR1DssUWbrjfoVPhD6EzuWSDRRNr9CVu1Wjsj96",
  "key23": "2y4CxJYLcKqeXGSgTU4DxfBkw88JdHjvkYUMpL4nZXcH8GkeEuggrn6AUUdz4s2nCaCeK1j4LKnB52wvwdnWkSit",
  "key24": "4Sp8WqoianwfcHGsTsD2UYHEVDbrQZVaf2RH4SX8q9wBqaGC1n4dLjGYgkRWUPfeVEHKfzR8RUTfFiPW3EYkJzkU",
  "key25": "3556YqREyiQn9hdJ4YJLSok58hPBNZsqqDbDT9Fjm4upWCUgjwvqhK2SY1GDsNvWa76YegiDikVu1Rvak9NVye6o",
  "key26": "4Bf51rrYpKDNbmo8DuYhyu4frcDd7WYGk5PLQkkPuxhy1Qu6EGUJs3aGUTRSVi7QLSqSCggyUp64ZKwwDzx3maMR",
  "key27": "4tW3E1CaEKTBD5twr6AKzbXpkytSAA7mAAtLMjMWRPrRS9zfWcwnRRuhJNqFkxt4nP51d9QkHb1S5FDrNFZNWKtf",
  "key28": "4uqRdhENtUADYYokR2XWkBe9qAHVKjvNBwxctxhTnXEUCkkh9pfkUbs6PgyMEaXiT5YHDqT1Tvw3SDMtNQJAFyam"
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
