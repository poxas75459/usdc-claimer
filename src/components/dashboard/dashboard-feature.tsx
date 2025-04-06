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
    "2hJoYZUyy6At6qMuKHGDF5f5SM3JsNZGb4fiiG4N2G4yLnF7JjJeC8Sda9bdQmdH5njMwQDt1vY4e1SVQ9nCQQQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cv7U9cMdSG7cLvvq1eUU3PJv7DFB8mUJmUMVWRyfAafytSwtwYzq2etV7MYozNiij6x7v3E5e81vQv6zbysWkmr",
  "key1": "29LomTEiS1CbEVre72QsGkmTHfCibmFLLi8LqHQLpg4P8NRt9bky5AoRVqpbm7EL28Bq3gtYuuV5A6DWPPNmkHRY",
  "key2": "42XiaV27p9pFrm5ZFtVC5QX3kxC4jUrCdzZNNvSrBiHbFru8V2cpZ7btcSZfddgF9Y3AaUnHVYS17VWPr1c8oCCG",
  "key3": "4rauBYwGoxrtZeBtjtwPz6AHSE5mQMi5tjPjZjkgnz5BPG3koG3tdyHjFa8AhimGo68PojLyd4Px2fWwrCgSxihT",
  "key4": "r9EUzdNv2XCTdseRDe6hmsKc3xydoQ5Amsx1LCCjp1yUnYwWzQnXNQ6rCoiJpC9nQRRHEvwtoZXWtjfXRHmT4AM",
  "key5": "5ZFaUpy9Foj9LhNBgPrY4jhAybevQF6VLufVcaZZ4n9DaKqArvcwFwYaTBbQcn8KrByPCYUUhB1rJvmnNzPzgzDe",
  "key6": "VxrP7KTCXd95fdx5ntN1WzihBam7wj1vPnbsQGtK81oJT8EE51KY1T7swEMf8S3N6dWCMN52TMfwBcaY7h4wbnz",
  "key7": "GTiSuG28uMhCdHVUkZp7hWktkkBJ2DiwmhWeUG3kAKZFh1dCbr9Vo4bM5DxfbbW63hXSqMrm1THgrkHwkU9TBHw",
  "key8": "4eyRkHbiMappYEcE9ZV1YgN9qLSmP4muavFjRfgZqGhuMJVQHgaNzjj5RE4uMa8LrS3krVvrgymUY32ejL8GSXA1",
  "key9": "3awUhPNXLAqNTNJ58PGEy6Bh8FAvTVKoJvropxUTqABKALxFqG6mopgXHBJYX8996rfVvvcTq9PrDx7g3zrPjFFQ",
  "key10": "2MU9ov5isGNPZuSqiw4yf3kRhydNoDYPXgXdSdLTwu4oiQkRa59AUJNGRWzYbKGLYqAFiyoEaiUCET58uh9cSZhn",
  "key11": "3YiRLfKC8XAoCuGwTdAP3MZn2o1sQ42iBxPk1f6dVyZU37NYToaWdtro9PBmAzd6VmvRzD1Taj2KWFfbcQA4Kk32",
  "key12": "45LMeSTQNiULBFKJU3gHqAjcsiUrNgvoRyJmgLZqj2pC1yCKXGBjgpDGHDHxpy89G1S1eYaTEyfEe7e5NBSZ6qgW",
  "key13": "2qPfDbtirS187ZNhMnrw8ZeXSHBJoFMKx5gqbYqbpr9a1WCtobYxvdordmi5W17HRiegXGzQC9HXVXXER9Ksqe2U",
  "key14": "MJxPUsrhS4rZPQz1EmS7YtRxjvm8ySdzamreNjDF7Yad3hGpuQ32s9Kh5PYzrrUqqDUQCJc7rTszfWRP7vQhzPU",
  "key15": "5a1FWJHGTKWKc2LdVkK3TNhGD2Z8Vypuuh2UHk7WMGZGoMjL19bUS2aRZ59QD1QEeK3x76fVLhDwrrG9UCCSW4Vc",
  "key16": "5Y6wKx12wgvbu5L9JCTxuvxiBcgddmGWMGWK5umR6fC5U7ThEb5Es2MKufWJacJ9ub1PFYg1JNPzyeEHdJjudBKN",
  "key17": "3JWco4R67ARUid9JrYcd2t7xeE84uLFNyLD5ec4K6cGXmJnPth1996ub3JjWWDvd8WR4xWEhdCCSjvU5TY5wjyjz",
  "key18": "2dS7tXpJUEy4x1rcZPynzvuc2KVaUbAr7HPbivvE5yCqmzLWmPF8QeGggFUTL9yruBbE5X9sh9c5nZkcADjqzXQo",
  "key19": "2FFkiFXdhWSya3M9hDDXaWFZMC7TJJmCkzx6jN6qeFKccMWbPJgPTbwLZ1QVHJDZ2c1NJ9q7Djq2xDzWBaFvvTDB",
  "key20": "5CmwMCa31zPGajw3ss3CfQ8E5m2FoeLo9UW1MKcpssAdbDhhC6f3oLYa7LsXppsFU7koAzawYiUAa1acK9SxNTrE",
  "key21": "2VH8tkXHd6bxcKemkcj2oCutPJQP5AT83aHdQRwM6DDtM6RKxRGj5oHhovMMdvMzDM9mRVQnfh22AbgnRZybmm5n",
  "key22": "3Prwdu9ynzsgZsHGsrXYfvq7F8UhtRcaAuxRmMZG1rRnoddpJfv7ETfnkQTvC5Cbi7p5u78D3BLcvG4bPC8MM2aD",
  "key23": "EUR1JsH4Pka6w5QfXJif8JjoXPFiLCMYHv8eYDNfzKfP7Xo2G8jbLLfxX31BRSirEP7kHnm26njHDF1WRG6YwU1",
  "key24": "3qVhaXUDANgssMEU5wdmmq4UfNtr67vYgffMwqr7aASu1QKcmtA5kbpFbptHauMP5wuf21oWDpp8bb3Z8vdckQtW",
  "key25": "5Ra4ukV54mBx44L3BDqxwQCJJSurFeZ5ZpbRpa1VnXXYSFLQh44Nsv25nE3Ce8uhbvjdFJUuM6miW2nkTfuurnuj"
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
