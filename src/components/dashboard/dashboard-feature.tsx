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
    "4S7y5FpNU6d75DMTTQDjap5ciu9guMCkAR4DprFV7qoCv1RCGBiEKir7zqrZhQDEEwH73EfEHt8tG35x86rHzkMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3td7M3KT7RCYytz128g1erGgfTeaKzZgihsGR75ruQ364en3588uhtFycci24jpCWV1JMmS1oaQ4pAXSvDuja4Df",
  "key1": "46Yuddg6SfWKF23e6gcq2THpDLYU5jG8D4xqg3bVN7jMdEPbEmsRUTAH1BpCXbyirHe9qNsrXJiyYHWQKqnvzEWZ",
  "key2": "29ZGzcX21m6F4PqnNp15CYyqNvGpA3XRuvr57qWNf8LQTK5h8GAFpRxhMARmSckSqBbZSVLFpPw8nbqSVtwGsizk",
  "key3": "5skzFwEuDYaM32WQ56bab4VaNABAD5KpREgPxoWtk2AVCLsa5avL6LJLGiAcsU6CCFeBpvh36hT3EuHRd59rBdxL",
  "key4": "4dbSRpKb6xntaW6abKcEc1Jx8NHZ2P7et79HB6NrbyppCkbCpLEsCjmrA9wnoaRkQhzeyGqDeqqN4n9UFHmDAGHa",
  "key5": "pDoCVonoSURYBxYcNjp29uwnNL5fkBUVcoAMfsZYTvCwTaAsGGPm9k89ZTysrD2b4YpgBY6DDHxKgqAsE3FZ81W",
  "key6": "MRGZwCfCfJELZ3qwSHxiWDgwhnU8EBTGo15P8w6ao5ib8WAMw4bouDTQDrg9xQ6dW987uGqLszsG9F2gdf1c5aC",
  "key7": "3RHskp5RdxDWNfRX8Ncbyxsc5k1MPJRA5gtT7NujASwhoXGTAxAFqcjW6qCtd1DgaF7s3x6h5h3QD7SrLT5pbM7g",
  "key8": "3K4EZo6JCuwEA6cip7rvN2pMQGT44jngC8UhLJ2pLUYJdy72XpkiSmfyftsmkQQ3BWiaKicbxmu37v7UaSQrXics",
  "key9": "4giT4PjiTW3ddJNQtHhHxCknHTGkztmTVMzEisRk3vUnWgkQudwTZn1xsA8E5ZGpWwiqNCaEXqWxhQewzLFsksDv",
  "key10": "2rRG4wf2a4g7MWz6NDSvkUPrVqBLD2V2WjAv3BePLa39i9WLFYhL72jeC3nNduHyqdnBvnqdhAeER9PJ1HabPNdU",
  "key11": "XeFrFXHzTNUpH5zXwA9ahDDS6QfeNux4eEGnjVNw8xZ7fx12iZdDpJ7Pp78jNu2J7QNKz48FWNu9NMERyQ5uVgT",
  "key12": "5YN7S6nqdrntnRf4BxSpscxMFqVoN8EYPtZGAD2vcxxX1Caa3FvQb7CoNeeLU7oJcQFr1bBxGuvZRHpNpN1Yg9vr",
  "key13": "5Q15Kc64Nn3JgCRnFvaAd4To4ZT7ZnmbYzF3AASLX2HqiMjYkx6A4Z72j3zPfciwxdKPFc6s7Q49fEStFBcqjiJG",
  "key14": "ZVYFioYAqMSkcnbFuSsxVE7niV9zuvQH3YDCrpDW7hhePwcTRFZRBtbRsQ2DvzhwqwXidKJgLcrB76yow8wNrkX",
  "key15": "2oGvJQYL14R9cYH1SFX4T1qzmmW6a5aRs6Vr8VpyNrATod3PRqKbtDfW7GGVbfV8E7Mq3b92KRdBo75tiWhd3546",
  "key16": "2R88pSy5HvvefAbJG6rY3oVR6dkRhAi71mfTHsDc91GeUzhUzCnTBCQ9Zp6pr2zkDpXFYidpWyWJKkLzpvsJKPGy",
  "key17": "5EmZYiLqZAJriqGBBKW84WCVHhxSkXsZi3j35RBJYzpt4S8sBsX1Tmw4qNbc7UFsPbzpQsfDhtzMyJT8hgjreHUN",
  "key18": "5C7uKZG7JWhVF5SGRue4UGe5vQ4yo64cJTiHuWXS41H7A6a4BipDKjotxHSFQefM1C3rVkkwedojwnTp6agjpXAY",
  "key19": "3JagKDktrmrAnRGrpLUYvxsEAFVdmx4j1PLuxjFiLTArTHnV2vYaKF7DKJfThoj9LZ7iiaUsjxPvXYpkfEmcEwWS",
  "key20": "yk6iYsWP5PpoXiQ4SxiErYra3Lws5WRYcnmPa4PPeE1BBbijiZBvfPaDo7YcUuLTA7mfbgxTG2KuK8oy3EqHwQG",
  "key21": "5jUo7PT9dPg74kU1RjKFrtmBcJ8HbCkt7a2f1KN9Wqnsx5wnZrzhtY5ufxqG9Yvy4cWJeYTGJqNY23kT1uEz6J1D",
  "key22": "5ar3Y8xWCQtGj5Jo1mVPm7X7acXL3VKQNruiW5YT5aM9AFG9ji2Bq7JuRXBk8C53hGhNz6Qse2bmkRRon9wWFwq5",
  "key23": "3GKiyzvSwyz68ocZnkTq6C9DsUjoZhBqUSQpYJ9ryA4s8cTeGxV6C6pdsDuff6GwhpY1W1ubbsiU15FiSWyUDQRJ",
  "key24": "543D9ppp3NwWnqZMzHX6MDz3ZWi1puMECKdEQB1Z4xKx5jYnR6bxyi6wdLSohSsac97fyuyNH2HeUsZTnPuL9j1k"
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
