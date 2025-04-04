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
    "o9trFsZvyh6oZPEXncxYfMRnLqgonwCRUegWz21FkR69BqadF72fffdbz3MVmsZbJ2Z9nUTXUqRxVDMUKohoqRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh8Kzf1JhB556dVpRgnV99sAEi3f7Vrrmtapz5baXHsjp5iEJ7mKEJhfpMTktxBN3qLBBpD5UTBmBKWfPSzL9Jd",
  "key1": "2G7hD9DP8BXtF7Fhs5SrvnwH4Lf7iwJLkCQrXfhBhLJ8gEcvFKf28M4fRacTbhfHaiCoiJnXFQ6UKT49puzwK58z",
  "key2": "4dth1z7qgp3r53jhiUpKwdenw4qmRNSFvxkfrC6zz5rPBPQbtaBUbbDCMwwvrzf4yQ2gJMBF4g8dDHUJVXowMT59",
  "key3": "2W4aCjLrcbYofst8g6eu3xzMwnDXUwUX5ntDiKqaFxgaw7nEEMJG8c11mpuycLRtNGkfxSTLshUVMiRnvKnVydiR",
  "key4": "4ZGSp8824voRdmkjymHSDY4BsSDQHGKvCW5HfFDmASugf5jYENctXSSfJfY4q84nRkGZkLVDHtBQrKKBNXAPGXne",
  "key5": "oTxFNYAwHPynduNiZp4UainzsiY1SPX1fnhmTWFFNAh8nhdPvDQxHh4gMZ6x1ywsL6HsJSCqqWE8anrcrfMxoJL",
  "key6": "MyEzeHSgQ9t8qHJtRrTjjSuEnQKBd9ywb3o3WDM8Vq1y2oueZs1ZDdugcHutFr6s7z7ctWEX7XYciUe9NzokqDf",
  "key7": "3279Wcb6tY82mGQbL91CCdfeE3EHrShN9xWorzFmkmKZoh7onoevC9XH6ZrymHmxopW7BDwXYmST42HFfqy7RNyF",
  "key8": "3WChxMmS9zWh8AwmsLeu1p1rTkFEzs8RuQjqQ1T1rvkZRfEdbFobu9nw7rnpAReVHtKq9yPgwU2G9BaGpjUYfW8e",
  "key9": "3wneDKpz98nJ7mv6uYggP6URcp829xC5D99yLkz4izhoE6MwVNUe8gsmLaaAnv6jewEYUHnL3JSd9uzJR8agU4mB",
  "key10": "3hLrJtqwCZZzzoDPNsjPMGiNymXhEHovuNdtVeUpqxokQ4HAg5SePrKTC1d2gzxtde5fYVstV7wZVvjRPKC3SgsM",
  "key11": "4MMTEWdnpELmJPVqQHvzGsty6pqgW4u5tvqpoGigpeA5a1wrxpzgQVkF7v3Si6aFx1Jz4zygn8syvBaPBoqXNDJy",
  "key12": "2DSzCNH6bDqqS3uUXUn4q2Ux8nw9Bcvm6Uenn4rFMEPwjBiDmPL3S9PVVfTC9J6wmnVvoF8mBbHEyDuHBvzHZ8PQ",
  "key13": "4zx9QtmJYNjJc77FKxiDbJtUeWUb1TFnPmWcZEjkn49WCw5D6tw8PKBiKvmRFr8zP3VKdDaV2w9Gab1hv2mGz41g",
  "key14": "2Jmen8ZX6GhdFW1WNVt7tAd4SEn8fuMXVhovEeF3j2zZeP1vD5XNmM8FyS5mSh96QpQTuw6YJ1F9bnzqX1BTkXJX",
  "key15": "4SfxXLTtp4QLGzerGqrrfJ5fubH3hrz5y6DVoB4X9Q4dQfsbWeE2ZhvdkLaopKEbYzLszGCCX3CMTS8g6dt71ZZC",
  "key16": "4WmqKdSpsLuzTHF7eLjvkwMbwF8j5H5wnaErkSqrZMYV2NirNFVYQbQi9P4smSKgJonwbwuiSa69uWe9szoYsRmx",
  "key17": "3STGBi4JCqLMDqhDAoHxA3Xchu9eAYF66cvj7ZG97HSBHncqzUDsgtCUx7e2SJ7phRDSJGDvKnfAddr7EN8gvZdk",
  "key18": "58dYbrZhfL8TcdL6sFv7vKdzC2GeQpwMNNm8T6QuJwfSFYTqbV7Zddf74Rcxw35grQpbK5suo7MPusaQCkRodjDB",
  "key19": "33tE6iKXnNhTrecUdrw1hVu2NkVTSv6jMD7obJX84ZtY8RMFqPDS9YMwSA14L3YrXqch6WhQWj235ARi5YAwkEg2",
  "key20": "5ojwRSNRUnV9vqNfpMc7kTdM3WAa4jrBVxcH3wHP8VG2n6sH71vgo4LuM91SnVfPPBM6Zy3iy3pP6X5Mug8uV1wv",
  "key21": "4J9dFai5hgjzVEcNqttW9neNd6mt1mU3siaGJLKBVFnC2tJVyesUMQGUe14S9NnSTgKcoc3M4LByYPey8Deu8iuA",
  "key22": "5sFPBasYHLVzrAeBT8XEMKStk4sqLd33KYwDw2yq6UHDQPY7cECT5QzzH8giKfPDRNEq4uHrbBfcoKSHzGJwQdwF",
  "key23": "5rPgXUHmyg8cTu6r587qDSaq4Na3iiD6UttmNoWB75X1QAwfod1N72U7gfYBeBqdUi8JSEfcYevHK8obPo9Y1beh",
  "key24": "2ncSHxLu7ZBCqGjQ7dQU3QDqouJhwrtzPSWU9vuwNs3x19FTaWjADEG9njXWt3FjnEvhdJj6HTmhCN33uvUCJ7DU",
  "key25": "367BCQEh2G87HgzQSzvX7VraCowLrfY4wFsfX8XV6ZyE7BL5wepDYZ8Eq5FjCGTk5NJFXfix2XQZBEPHcvbXBBFA",
  "key26": "45CEdXrgH5xKEZD6d6arrZcicogqhVGo8nJui28kxmRdAnJWS6nBCURXWohK6yqbGegjTRqLD1xWy84aJDEBYpnD",
  "key27": "4QPL3e8XDL1zvUdZmrNE8Kj8xbKUV7vMeYUEnm8uJWVnvTtJNLLJMMWXw5PtWE7cJfLfdKMCyBUDC27RMa6urhAk"
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
