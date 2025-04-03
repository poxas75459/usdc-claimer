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
    "GnzJC4jVwhWnK4TvcTpYWqRErNnjqVJzthYuSEZ5yg5sNMfmqvP2CCPZCUDQrwm42vYDDsyit4c2cfs7XcZVbq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y48ufjoUNcXcsNHHdpxN1KLRC9fmSNwhFQ7vkyukque7gUEv16CC7QhbDtcrKRUEYzUnrGWQ9Mifnc7DBcWip7k",
  "key1": "5c8sCCkjMXfSWPB41r7K8DxhRJAaA2oURuNZZogPMdyzeeC1HX1Hw9pxnWgHLigcPVD7E9pkaQLF8zoufBU7dZpc",
  "key2": "5eS6yo4vDdSAnR87fyS5JhgaGfEGxZzTUL7YpLBhZeTewysVj6Xik2Cv62qzDHcfcfF4RPtxL1htLiHX1hiuTjiU",
  "key3": "36rtWpL9m9VMuafyESqcsevPEZbLBy9K6FLQSH31DmxFTZBgasqh3FdD2QJMPQgtJtaKTEP7fkzkb88kcvDpAw1J",
  "key4": "3tNMgrYeEmcBL688ENNMq2SJKYc66BoCZLqFzACiRi6apteePXvD9QESYrZtfpwqahkKb4qhfmcaCeenakuuzQmF",
  "key5": "4BPApB8WzPBnCx9AKYewk3cJCcuahAJ2ecxqYLiSqk23gSSpoSMSVhVEhMHXFz29f2YXpFXsYfMF3p3NypT9LQoh",
  "key6": "2Sg47J48nJNjD6288j2ZQsjwBfFUUC1SyeJDUR8zaYuEEh1i8d3dMTXhUwqiRRBSuCY8ZaoXoWTN7A9UcLgYABa7",
  "key7": "5FVysCTLDbPXgyzHn8J57zk5doc4Vedwz2A4FBVhhogDFt3V8xrMDvdWT35d2B8X8PJboApqnhnuohnkWKcuMari",
  "key8": "DL8qVyZbu6aGGu8sdHWzhzGPg9EbFSyph82WqpNxvnCoAxAFntdvFc69DydkEfHUEhm2hiSM5k7Vw2HJqBaUzfJ",
  "key9": "55HP8NgKN7VRiuaMZejuya3NUuv5Ts7uH1Fda54GjBr8iCa7iUESmadTURsmWzNfCW5ENc3DBg9D5vCHmwXBtCS",
  "key10": "3uHTh7RLYAGcP1AzhcWqkQoMhUShdJ9dK2HRbR6fQ6yobA4scWohr8v2sdriAQ8qpRAGhaxXRKJh1QC5DtVjY8V9",
  "key11": "3tHwVRAyCEGPwqfUZfDycKSag3LoATMFAR4THSwFYKuk2TfN6cyu9e7H5LrC8uH2KyrmBBk1dBWuJhRkdL7yjTSw",
  "key12": "5kQb3c4VvUtE6xKd2r92mN5fNwqVoRHbKXySnhe2o1WffUtGELPkJ6aGzd7ws12oGzg8EnDmp6gGhdiq81fAufcr",
  "key13": "Kxcpm78w9j7VHushhSHF4BAvVrRcyoAyDjjCtGbB2wqtTN9hpF6K4Mnv7yHhjMBbb7UTaT3igmmfE5b3zGzzWHP",
  "key14": "3ADLiEpXb3i4c8cRw3ueic7UWCiQonRAHXbTD1cv537xUp4fN8GkMf8S7eHjkvTnw61ixzosQVDfjUU1RaJ3mAXT",
  "key15": "277GFhjm8mdgRmcwfa6R6MquMNYmGWQCUfTyEoiJAydECypt9boEtqbqXSbWWiYYPkDpx4mNwuzXacMZ7RxKwHzG",
  "key16": "5wpEtB5RuGpofqQifVmiWGf76N4DFR9mb64UK6sfmEcm7fxndv5ybPr6yxkCi2G6Lof2VUroWEJNXaczUqc3rD9s",
  "key17": "4fgt9zGfnYbp7aDqC24GwPSTcQQY8pYi3RxEpa4sm8u65jJM6JL79bbFjx8zWkBp1KF5jhC1fp9PPTRc7LAfGSse",
  "key18": "4ib8dqVcg4cdUA6Qfp477gBxemgNG9E4XAxM6FCSXicnKKYgTn9cCtCmBZJU4e3i2oqEwYUEBhpnxCQJtL6P9nLv",
  "key19": "fjmkoQHMo5GJhYd2LxD2kMUuWq2vDVEKhwG739n8PZUURmDm8jvTLZEYoSx6N5UZHR9UGJL1HH9nCSc4qJLjXqj",
  "key20": "2DQHPC7LAZ7vY1xTDiiHaF7sqKmSivoCEYZKTmwn4oGVSwQUyeKzbJTxnEVH3tTRKSF4uw6qLPoGeXLqoZB4cpCi",
  "key21": "3fNiSKT4BY1oJo3L4n9Vbc777oSvZACyDpZzyDXMFa7ZMbjnUmdxJzE48541Y2GJS7TySJPhFzmnXucb6QdgWLkY",
  "key22": "5V6ndbVKRN6pK4eFFJmDewNQw6Ciu97sQY3pLUD9Q65E1uYt4garhWp8u2BkAZkcuuHkBEnxVHfywWzrVD1cwgVC",
  "key23": "2o8hjCba9Lf1d4gjEnzvQLKNAxsX65M2EfYtwnZmfeRy1JV3UQKbF9mEwQ2hjxoZiTPc175Rm3W1AQUv7Hw2zBbZ",
  "key24": "4C3akyKcjR9aVYjdHDq4LgUYHawZS4yEMpLPijQZjn1jC9Gd1fKUXJLoQbXgBUt5getnkEqjCAQN4xPahTud19do",
  "key25": "3v9vWqgpHuD6whLm9WL1GJTLtV6KcV2qVzq3o1dqmkLTrxTFbcfvUr9o4QTZDpbRf3Ehq1Eo4VTgGopB2VhHhBqJ"
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
