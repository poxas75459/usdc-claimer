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
    "4eUAxBwt7X8FmcnxVoMQT6rjhJgQFbaxNo7YbPq4yCv3BPLPFpMobhqvWqb46g43a6n9TAbeD3FFfWj8wpiDGDD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9FskSA1vQjoDmXzsQZqDZn1ER9t85zeQcCMEARtEeBTUF8LETDh17GEFDfcTVHeJL5cCbwDqc7MftezTefhmaB",
  "key1": "57MB7hVQmDCPTjXXByzQhNmSEngiwXDoeZc5QVSYjWJqSyQeGnPKU6oR2AdGRbgtketCSeHoBdCaWF93S3nFQ7FV",
  "key2": "3BGN64SNvc6ppTi6NGM6DAGKdPWnAHxwex81kxCtsCKHomWnkNmibdSkCEJpqyq7Jf9HBxeALyXhB5fyEqMxxJ69",
  "key3": "4MbLV5jREDzySD8H9ndBVBqntDWidbqQ4oBNk45dztx3CqXwAYUU7ZShN9Y7jarb8fMaaZiXuem9aqC6KegJSEqP",
  "key4": "3hMCwaiYiDH4YnfatGSJxfCdMzDBcfx5ctJUjnEFvEK5NkNqRkG4ZyJbCYp4PbzQ1RkwtqLzYgD76iihqERfcpSp",
  "key5": "2Ld6rJzQFH4sHZW7hHtwKbsqnPty4JP5yHvz54tVUN5rGyrWhafaza2hQw6hWFjbNN9pMm3NWAopFnnKFNarYyAY",
  "key6": "3BiZZH1jKxTJLTv7EfKtHvV9C3ugT1rTfecykQYa6fDeAKiSTfSHw5oFRj8YQbERQYpc7gceKNdPDSwCPh5UaZFC",
  "key7": "51EgCdUEuAHE7gGyXjcZVzSb2EEqCDPuY48JYRAv5gpU8SR36SUEafwNeHn97GMQ7uRMyeGNDqTM5TubpKp49mqY",
  "key8": "2pNzd2Y89ztaUE6h4ryt8b7taaVujTnq4fmKoJrarcCkgazcUW6f9jLYgCeiF1UByZJYahsSuHWmepLYfoAz9xYx",
  "key9": "5ZVxAuQa9ffWVTZvFTwTZ7Gme2FqCmp1TTsoesWo3ggGcfBoCooXq5bX12wPgmn2wAphvAxXG1QMKodHB6rk257x",
  "key10": "4vnCLST1ec93PagTZyMHqupQn1sfvuDPpoiHMMLYreQ227pWYGAkWaEvLDiGtqc9wmSLcj2qJagiyAVayM7GdqhJ",
  "key11": "4ZtugbZsZXhWgcQt68YMgByZVrUWJ4RSUeQPzLm1PAqCRzypz7x4zNfR6XevSJiN9BFcYbqq6fcWK2d9xXA6FUK8",
  "key12": "7VNgzmrzzj4Yc2xZHypm4PnL6f3i8Nkw4ebuQr3ks1sfZhCuBYbPa8z47SGD5SSSUtS9FQDfVpHc5PcmrtbtWMs",
  "key13": "5mTJSUkYGreL85sYf4WvMKxQ4PCaGuQcLAkQvEyHUgSF2Gee5eJ7paC2kgX65eDKoy3U1jDDWwCt6FaCVc6XfYut",
  "key14": "5Yjc4P444zxHMiPPPWA7GA6qSGpFzpott8QVWjMRT9iuqofxw6zUe2u1nXh9UNJ8sbztphNxty1jrJ65UhmgPwjU",
  "key15": "xYXap8t7NHzoAtDn74RFZgPGi7AEa6umwaNanUz5t7sX4KdNGEx3KSkKJUzztwdcWEoiMd6eGSj61NpqC2a6gth",
  "key16": "3Zsu2gfwdpBUT1CcAENY4MWtoPmuUtojYSUvVuzUeZ3NLkxRg8W1yXWcdQE8PNC4YXcWcKgCAF4SMj3De6UTvnoy",
  "key17": "3kHc8MWJ1yTZrGkkFebkAhWZopgbMwu57dFdDsQs4XPAgNHA3Kuvt7w8tQ3RwVJKykEmzTsUy7JG3pfiUEakSFG1",
  "key18": "2VChKfhLY8vYZthzmE4Fv1JBkwYDPVQuGZD8NNixaTZbUcaFGwRjGtjnP96xZ8JJT9yxv2tqU1dDCU9KdQVUfNVd",
  "key19": "3db3gi7CNEWkC79LsdcqCdW8swnajtSdC72DycMLxmZoNFB3PQvX1DzWNGA622bfNC5myqewKNMYX4skKqq4cXBh",
  "key20": "2K5xo48eLzVoCSTPQvjuRmUqDrXkBxumXaFCfUoahVSKawUFahGbpseGzQimn57sDhcbqMi8S4uKD1J9CM64nsSJ",
  "key21": "3KPVCcDyb7HBV8k623uQdZ54tc95rnQ1F5KMimqMBMsJSVk7Ju7wNxkw7u6ie36rgtTuCUZF6t3cFBpqTgGa3yfj",
  "key22": "3rUGWS58kznyBE7vL5b7Zr3vBonoaAvbwEbxcsMrXU8ngvLib6AZDsuGyawEZVuHTfweS8pu9gggFRsDbG2ckbJk",
  "key23": "31doQ141aH57Ns8rLrrfcsWhsCmmbmAsChiAxxfMycDPfrv7ULYYkkBfPZcY1CujEgMeciBSPFbmD6PmsF21Qt5w",
  "key24": "3PDcp2jhc4BokaBZXq2j5A6Dik4N5JqoUtcUbXiiWp2XjPMvSroPpK1naqnHW4edUsCtkSWnMx2wqhyM9vjezGyW",
  "key25": "3b86wx4juAXFdTfUDEYfZu12nrW2BotaLFTYRikibvbGxB3Yk6YFSuqhGvmDPiiaFGABpwJzDhKpv4etxFVvhbp4"
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
