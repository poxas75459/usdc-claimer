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
    "dAtMwozJNVrwZPspPPZgJTTEu13hpKrCMNjtLpwyfiUsr3L6weHZ4aiDzY1WXerGYzhfbqYHSYoygdQUVfXUskd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UYW7xtanWHMwDKiNiCisc3jEWvVn8M6vVdKwfq91yAQDMBEBz6RW53AJ3gqCTsQ1S5wZeTbkPvcP74ea5fGX8u",
  "key1": "3M85joXBHr1FY699DNRnTbfVzyEYtyLpykdJNQkUXK7Hn6Fv382LTNXi2auPRX7yBx5zAhUVnc9JjaeaThosryxQ",
  "key2": "2cLPpUEEv45XvQLvNeE22het5UAZQMGrVXEmREKz5378qhNQ73MAUysUHQsPatUBUWwc44P3rJeedPFxCviEgpxo",
  "key3": "5tkrP1g7t1kyerzHWkSw4oYoG3bGD1o8woHuxp9bXbnM7c65xkx78pj2yDiFDKvRtrystsjPWRMBU8GCaFvtqkSF",
  "key4": "3RMV7mHj2mLKkz56jeGXqNozHpAP7Z445v9XAiENCXjfqS8qaqgzkHz6t9zARY6BtRHVooi5EMiURMYv2tdW7BJV",
  "key5": "5sr7qCZ5TrziZxPPtm9M7qzJe3XA1XkUcZyUrgYVXDvKjNYf8H7bHHw9hSohWRAXHs7rBpikXUvB2jrM7ydMNWGg",
  "key6": "4A39rxyaf6DB1qZQzgERMBKjvGy6psMWSjnZ9XdRg4k1TF5HxM4oVS35hTQzcZWA1bWxQmGsKXmhT7wr3fiQeYEh",
  "key7": "2f2zg917haS1GoVWGF12h7997VLSUk9RcSUyye4UMMWBwHyajR9rfDGXE9JFZk2xbJej8NcdduDFmjR1mZUhzvNC",
  "key8": "5PzBM9Fv3aVDmk62AHK8Vsb9nRsVms5CZdTktbixohnPrdxf9AhcNKLbbkxUkYdfhw17K9ZcvCT8EaPQDXBsGjtW",
  "key9": "5zy5GArpZqeVQVX1HKxqhfPMAzeVV1tL9RSkLK75BdoPZkYcL5rg8a5U53F5eykRqFVdGTmyZ62HVv4o3BU8uibM",
  "key10": "5GzuupkjDomjLRjh67S6FJnyDiLLqFqqveC3MggZGarksfXVqpM5EqUMeZkSXPXAe1ZbHiVCT4iMK6mGH6ihuNMn",
  "key11": "4Ed7KpSUBrVsodwMoWmXMuMKAGc83gAhwrR4CbyDRi5nCxguPp4fyBogNFB5szAkK9BUd3VXFxnnukNTZLEWQ6Eh",
  "key12": "JNypYkDErcpkAmz6WpXDW7BGvqnGqjgzia2kVpoNqGACfe8Gq2XnewztBCq6ErhDm9PGicTTjv3pPFVQaHW16qe",
  "key13": "mGS5yYsot6PWHNcudkvSdsBbJc49B1LU6qJdWjq2ojrBtukAaPwBAWoyH4UBUZoa7Kp9QUcmJWBcenn5YK2uVLJ",
  "key14": "3p1qeXaB8rubvvQkJNFUA2oiwVwg68DMA2C8uw5WthZTu2JJD9zcZGUn5TWXMuUDm3eDneeddXcRsSzi8yzAnR3E",
  "key15": "3eHH1inTaMUvXNWcTXKGCAJVfUXNCFGhxbm7hxA4a4Xj5XcYh5jjNDrRSzbAabhRyyfdq55vVN923bjtmFUfZvrd",
  "key16": "DSPyK6TZTxPECEuciyYGxQ7QjLN7sQbsSyH915RttdmvFL4EBrSsNNPiJRU52iWZsA61yF5dH4hZ9gC1Nc7Up1e",
  "key17": "4H9UT7JzAhKXYnhfKKyP7t2VXzHewZ2bYFb8LXTHUveRvTBG2vhzW6FiCV5fdmvs3xGtEtqXsvZtM1h8UqtY4VzH",
  "key18": "41VV8NVPcp7u9LRobHEMeAdYu4e7Mwpz5mkKuMDkpxhNgkRWrSdchxgJw5QbaSiuRs6qoMqVbRDKbYySnLAkEar9",
  "key19": "4YH4D4aCNTA7YRfG8XrXmS5UBPKXkD85Cx8wrKVUJAP9NN2cqHRC39TC3nEPZ3He4XgDVEME2Xco6yqbJ9oq9imt",
  "key20": "43BFQirX2oVUXzuWJcEMK7GehaAyqXU1Xc2XrrtrqP4UH9GKgv6cHa9G7zJHCFjmif9vX5uTx8LNcU5hiqBdhJBw",
  "key21": "3kpz8XfPFBDCwsE1JMe8pccXHZjMvHQTiPMVyJxLSsF8Ctg1SC8Ya1nuJMYswBcDTSR5pfxGASdj4CtS8ms1ozLG",
  "key22": "5LC3qrFL4WkJL43oArcYJFevQAKgrZ883xX5goYZN8nRDXYA7YDtbKZWkZ7E5zQNFibuxac1cPud3DeYQRzNSz5y",
  "key23": "ENMJb2Y9VYD2BbV2XPCYoKb5nzmpMJsB7z5NWCsF2cMkGp3Hh5eRww9zW4bRgotyrLx7aPnh86tuMwKsh7pkSD5",
  "key24": "5Bsot5cC6soKAGv8hRwHr7ZHkTp8NT366eB1w5JenXksYXG7R5FTJokuBJg8nKT1zg6Dcaytsua3msF6sPExF53c",
  "key25": "4mLi8ypyUN7ysmj4oJttbTA2BYmnLHUbakSkEmi2GkGQVTyCBzhEYRAidVrJ2KBjUoUTkQnvAHQTD8uXngUNXAyF"
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
