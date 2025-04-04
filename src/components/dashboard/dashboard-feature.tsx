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
    "24zsyGE4Hos8Mn5vUeewSazGUFE58F6dVBGLknRnM3jbcwdzXKT5YVYLhXUGa3AjthCHrD7JzWmaKu78zrpmBqgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDKzj19pnnaQJ2hcRRLrDPA4cdSN34PAZq1y9yTkfz6UqUXbQxTEiLZNY5k1SzzdNK1os1sFmdeNgo8UDS74mUe",
  "key1": "35AEAHE9HdTacY5WvvjpSFoZctZT6WGxFn5t9wYEr6vUSe41yvRtA2P3JJNbZbja94uWbW7qmovUw2nUEMStc3NS",
  "key2": "2vwGfPipiozqgNgdFeVeteKwFbxcmESmmzJX3XRXzmxLYiuoMgQ2UjUcaMUU3gJo8zvbQVsLvTKDErTTzg9f8zPm",
  "key3": "4rqtwLJb3rYGo6geec6M2Ei7NzgpENmpGGRX3gRsX1NX5fzj55j6DoTMaVNXWpFyK8keaZUnEDRpp6x6UDm1NLcu",
  "key4": "456uADpD9uk4FYAueyJwCXMo6u5QyrR7Q6GYVB4qwbfGD7Xq8NQwaJW4pcz4UgWZgYJNDeZBpeGaca9HfYP4Xc7s",
  "key5": "3M1TMjVWMf3TBSACLUDbc1zJHffeekPqn2M2xFhFgqfaVwpUyHKF6G3i8AmNh3rch9E4GNZYGrDqfSK9D8vLTWuP",
  "key6": "37Gr3hXYzNqNfsPDtypAbJbUCVgUsAfirwKjJnstQhnieprpKDqPHZv64cBAf79qNQ4F81JAr8wQted13uz4VFTJ",
  "key7": "4hGc8Q1fxGmajVWmT6uU7QGW53mQB8f5sC7MQVuzHD864tZP93xhdrscfJBpH4LSeaZiprXGd7W6fWZBJ6fuYb5X",
  "key8": "3xpadgd6y5W61eAxvNzkwbC6itvNGoJL9JB8FfuCeEHyFEHeYVwnNvnUi3VLZyvdUCVvvpZYGvQPhxfmmGXFiYCz",
  "key9": "2RWiJBMXVYP1Um4CDREJ6YpwB4ckCtQbmLH7sGMV2cRWvqXgqobkyfFEi8qL6kM2uznPVq1uCerBtLnvG18xdJAJ",
  "key10": "2Th5bki2JQwX5VU19bnRv9jzoeZqNpnhdof31f3JSaXFCi8gSpD7DtoqAzN1NmTx9328iChmm74e7AqmYY6kGY4H",
  "key11": "2RUD7ZbFEsC57gAt8RGzKYgjmwyc8pEfqmBTGC8mUfBCrhsVT7mdR8q1A6XKjJLmwYpWzRWwWfh9ZPvGqP8EGNf4",
  "key12": "4r4jFBGnku8Vba32zUhG8JaXX7E2SAyEx3su3EfLuq1UzycutL8trqBrbPKo3v6qeTvtbCQMfoobp5pnS5xK8C9y",
  "key13": "JyxMffTd8amHoXsJTxoLRAHmQNk84tvfjwt5wMsrf3ynAcaEAJyHPKAdwpf4ekUAHCuRMuuWmQejy9V9iJWfykE",
  "key14": "4VLdzKDuqzr4fKkSL2gkSc6Zft7fwzN6mpSRCmdCMXG3s9TEAjXn45TeF752YovUwkH4D7SMS7bP7TYQqDGm6k62",
  "key15": "4LwJPYzhPAgaLUschCdRGyE6YoKDXRgsWju2x2VELWwHPa7CQsKtK3g4cjJpcjJj6LAToMadNWavYbWFPXdevykR",
  "key16": "4UstrazipMViaCFKpQswXDQekPeYixG9h6iJND2wZiNpiiq6Q3nnJotc5zojU65udqGeGKnMJ6EKTYXETkdM3LXy",
  "key17": "2SManRJJ3DjoDyXg7yVJ1nzFAjN2K15djcBhr5Uw4XcLAExpcqswZbvHVoz98r9AGBi7zRPNjatCeMNVeM37s9yu",
  "key18": "26n7x4KPKAPu4nLdsLBEJdcVypmZdFjwk9FeGXXkDzp4CZ3vYcsq9aW3PGq6ZHEECf9gUZC7mM717D3h8kko2BAP",
  "key19": "34prSm8h3icbXPpWhurBpRMaRBzniTXZoeo9UGviWWq3epfmXan2Ezt8v7pSirsE6AaHRbDjiEwUFtsHBroCrEyy",
  "key20": "2bixQ9BzpbUTWMqrGp7BVWWDfw9RCJrEHE8aCUMH9BLk7rfBSeF5tkMuRDqiDJBefEbJiwuBcfTrbcPTsEQgJbdF",
  "key21": "HEVcrr9EZst39JPzJkoAwXxKGQmZDXuVTLVQjRjWTTWmLAcSHJf8NJBLt9vczo5MPANK1JDpgyK8HN1UPPqWZho",
  "key22": "5ZVtgMxf1mTMjJJek2vkP9uH8pXwesrrCxDHx3iNEFnVfvfxqe5RwWZFWnWCc8V76qQ9MAeXwsh8S715ej6kvcrW",
  "key23": "3Ldjk9GQGDhazL23H8AHTS1Enu2ZfKSuqsMYmVFZ26dtLX6ER5R9BbwttaenHE1JMYuPpKWHCz3GD7pSNSFeTRo6",
  "key24": "4MXcbfnDcoHjVCLZJqugd11RDmcuqzp1D4Bf8t5adiqPadW4SKWd389szzWpS6H9hCbtDdL7bq5vMC56JxeZ5Lk5"
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
