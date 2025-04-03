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
    "5Sw3cCZTjCbWb7cAKnwJRvt2YGdpkgV4aRrYLGSNg2ifn3SHAxsqxa7ZJfyRfscYFWsE69C9BA3nDNjVdbnDcL53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GL8eTRXyE6wiADF6n5ijEnQaD1HjJwu7mhwCRyGGwZiLZJX1b6z9GPGyYWc3byFZQpT9m142LXZdnhY9Qe7xc2u",
  "key1": "5fWwGimWubFT7Y97bth8LmY2vfY6SvyyUxYAFjwq7W97GY2ZiA4EkoQdtcJtVrhF7mW1ELWQimpPCCdDFuUJpQS2",
  "key2": "4gQR2Vb9WnR9MTp1s8umDS8QgSZprmANxWkZ8mW9afdb9vK8TVTxq52x2FhFCafrqDJdcqCAkEhEUF6RVTdJSGsi",
  "key3": "5ndXQ7geXupEfVCwzrGg8RDeaWMBBzq1RPBPML5RnV8T6oW7RfAbcQ4FC8G66o3sQXbmFuwtPbVEhrpvBr8xiZnK",
  "key4": "UNgbd1QYxvamhoFKAWTEUoDbUB7ESrTLgyv5NNkXRAh1FqFGS56iHDAHbGcYdWTB5RuWA9m6MNH9Hz8DkJzwyAe",
  "key5": "5VujXiZ3RRqtcu2RQBRVB3xZzssVMvaBSALnpW8tLUjHorco2ev1sa2zxbVDwS2UMuCHmaKf6Pg18wsaBbopgLvR",
  "key6": "49x8UPjDoAN1GU11bNk8K5vVFGgeLaRh5EfNwMqvXvELTmRYiNBSjTC6PDZXKihBgN2zU4FsduHimHh85EAKDvA4",
  "key7": "4gQckHvfv53uaD1kHX5Xv79W5bXP2NFdb25SE8DkGEbr1Ew6geoK6Fw9gvkbXsXXT51LRYpwX57xh3DDkBczaG38",
  "key8": "s9eiwE39zQCANJypnwJTsD6TWTqXAwXUrnmdWhuXjCh4fJ3zJGNBj48rW47hc9y8QURmDMcfoD2ZKF2FGpdra3M",
  "key9": "35FmGwC64b8wWAJM5euB2PywpVDAi4cdi7eEkfDawBgwnm8PXfBpq6cB15y9fV3tBdhEW68Edtoi3YJdfUQVmCE1",
  "key10": "4Bk4JCEdpirx5t8AzVmeAEzSo5NxSPQPNBNm54ifUU9nE8buN7eTMKWCpWBdnVhrAPp83jg73rzgoZp7E5nYdN1C",
  "key11": "3aBZ7P4qsD2iM9u623zfjk47vQpN2dqgZTeenNWmi2JJuLs6sDb3B597q97G7xPkcnaxv5X5jHPFhdiWNqcXiyhR",
  "key12": "5cWVeYGtCHD3gcfDLubgu2hVRetvMNFnAmrRNyY2HkEDUZ4v2X4EYom4wKfKR1JXKPRbPshiPUzxoruCPc4KBvVr",
  "key13": "2G2cCiVUPcUREBk7NdZwVT5sH7rLSQckkHyum1SvF5mzDmMsY57KmAjvbmgoEKgBc36zcxRLoLbbSGVQbgXG5Guo",
  "key14": "4LLYkB7HjPWbLYo6QTvqMDZ2kmfL9P75PLZkDBH2GEodjo1PuRzhDLxgmnf6LXopUcRdA4S5e4SDBdj5DsNg6cWp",
  "key15": "3FTjZKFS6a4eeb3MNckjwMt8DzG9xdUftbj5pcecpCMRt2Wb4SSZyFGFBHvxmFpdt538SqhwEmr6H7AiDpiRMrtu",
  "key16": "2FAKjfZVSFPSPJ2fkB9s7PaFL4nb56RpjQEPkrXdcqWQyZNw9jeJQ3C3Ekpi6cYigWp7y6zRan87YVXUCcUU6Wwe",
  "key17": "43wcBnbwE3kpt2tSdi3wuLrxE7YhuzNJSmmvh9AWq19vWoYGcynqCrccAwrDxZ22FyeBLuduaFS2xFLvTcyUCxDf",
  "key18": "Ep3AWvbcygKUm9tYwd8cE1eThbinE7z3GqQQAvQYUEyeXF4mqCtqjnAvEgEjASajQ3ghcmc2h3yRt7bLSy6NgyX",
  "key19": "2wKtQZpAMvy97hQZDUGmaHRYho9PPEPVyetaohYLUnpar46Gfp6vkqm8ME3nQi2pnsp61W2hTZDzt6F6aDWELDND",
  "key20": "2pWgcdPuEqrGAuheUS9A2QJGZ84g7bzyPkgUFGQj6og5cSRQ65Hn6tR7fPoivEaBknmmrUNZAYn8uZYpjyRogipq",
  "key21": "3rxrYTcVSoopwfFrPaUeFTvSSmY6t1LYZQpfKKEaU3UjPAdfsqsCPUqDgtkPiMfE26Bk8AjKr6WLiLZL9icmHCmL",
  "key22": "V8Nys4zDBAeU4sEaJExFbF9oyiX6htHZaaCCR9McXh54HAP9gKnxWm6wi2qYv51n7ggyAYiTjB14KKJwRTzeuEZ",
  "key23": "2LTPQNHNqitkbjFD5qkh7mAREzf2iapokMMyNJjcnVTUH8KVAHu9pTxgEjRqyB8cCA9w2D9vRc9YarVrDCTcANXk",
  "key24": "gbfAsF8rVrC3yF2TEXZ22N42PwyTYHc2hCgauFjzwtvx9PtqqV8M3P4DZiCYRXX34BHBgrpnn6nKG8RZznxRtDL",
  "key25": "2ncP7Xoafug5PVfbz2tVFjpzEcmN9uXDzcGUkgWnhQJdrpAdWiajCK7aQnSDj14QS8ed3mgHBnNhwDUxC4Q1SffA",
  "key26": "fiXwGXLmAj6cTydd43phdHi5uyBof4sp5TDaFBYskahJadQHTV8nCEAHueXLbwXpAndrecS23jmE6ST8xitFgxe"
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
