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
    "pkL6NHgEVLWV7FUJdHFwyh8oLMqSNEjxkXFYWadvDSpRacsrwRhejEvzueVe8CGCB9MTFtRNoFj5V3mae7Ku7LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btpLvLdmFDnaGbefVF543GdreozYyJGeHHDiYgsRyskGjduchGwkHqKux9p3cz6vzk5tShKKCw3X3iqjQumhNhg",
  "key1": "5PqZfTZwfBumBMHZ4SLiobjg7BT6FRR2ogyxWRaSg6gTfQwDqE9RMoAPexcZqUMpP8WKa7HJN1qB1LSZx7TAZ2if",
  "key2": "4YaYHMNXQpsD31vmPHMNDeSthqqxnkBUF9cGCj3xRHzhJ14y84iiRouwEXLt83ahFrMU5krwnomiByW3mqtHwcCd",
  "key3": "5MuhYPU7DrWNK8idQHhxHqdrtPXeEgJN1LRpu5tTZuwTVdEFSkBgdggYA8jY919Lph9BNAxpwLBMYrTYtyk7P9kf",
  "key4": "3xVWu345YuYGwwg8PqW1HvV5ytL3esgnGpjMMMEj2dNoSTM8ugyoigRYWjhEuFMmvKDeEaUUcNx9DPNFheJ85wqU",
  "key5": "z8Z7dJDkRiPuXAsP1B7SQdgRSXzJZKPYKRNDoi1xZFdkbk7wqNSoEpFv95NwYvkRPUsvATEhGYKxdu9oP4fK47o",
  "key6": "3T4uwMaZZsPGkYkFbqvr1RqWfFuyjphANgRyCqT4tUKftCPssJL2zkni7jmPBS8joxu5tY1rXDUpfoGsThDaPVT5",
  "key7": "53LifMaJhSNzRCGCpf2p3z347c4bhzK6i7Vhf5yAyyWdMMaykPd7tuvmbf8NbKUBDfJdf3cDPniHU6sB8m27sXg2",
  "key8": "2DNyvDFoaQBq7iw37SiYT3ZMPexvFrPo865wmm5w6w83JWMNPctQASMULieF14JvWNSLrafXoDYZpPx6YbqD4nbT",
  "key9": "4wSz2ALQZx2CmYmjZjHZnjAjsxuNRg3DjKguWWGNm7Y3ZZdbJFxLBofoVxDTwwWbTaEyv3YxuExjjRt16smXCFpe",
  "key10": "3tEsGD17X8ozbuW7YFhrZXdKWKtSZdVe1Ju7TtWY9jNQVfAgMVMES97QkZmebzHDiCpWma1PL3LkiGdUtbipDb7R",
  "key11": "24EAR166vRUSUfem2aZMGYsmj4UCg6CedihmnhYFd8ZMm573gtuiiAW48PoQ9XMYRaN6nUPPPpNaMKkz7Avo7Md8",
  "key12": "3bFae2d92kS9L6pWruJ94yEtGWgvfsFSyhY6ksokVzSEH4MLe3nPKWCSQQL9faTSL5oijRBNj2xfh5pBaobCTnuT",
  "key13": "3HiTpA1b4eR22iEPSQdThew66bLPfqd2qVjzm2GzRLpEybvaBjbWyjTXUW1jwgoP3Mp7BoW1aMaqUHkPQfSWoxDP",
  "key14": "3EgRK3a59PY5jVLqcG4httDDz7jM2HsjntW4nRo3WaBk1ePzVRBZ7tKNKExzG3X1sLas9fTdXgePJ19ozcj4bKV3",
  "key15": "2vd2SFfxoKDr8kmPmqePsfPWahC3P5u5wkxAmHgxQZ2dsvRR8bQRarxy7R8X2UEvbK56kTA51XzPfg978NifCyjZ",
  "key16": "4d7c8kB7U5x1KGnRqgxrhY5y2Bzxgj73vncH3ydCpws245LkMC5mBic34uAFS3T67ES2sEZYLotJacSLx6eMRtY",
  "key17": "5QEf6NBVipGPcZYLv18Yf5Dvgg2tVvz4yGf1foFE5L5zK8qbZrQMUAN3wCX1KBVDQ3EtZQCbpYfLTWV5gV3br7d6",
  "key18": "4egd2WPWuhQEF6qowxXsRh2yvMzCzUZGUc1sALcvv4jThJJcZbRh9wo6BFjgdXrWoiW6PgamHjUmXVi777Ev1AQt",
  "key19": "3cGWSqWbQ2szyEfmq37irAL1YDWyDcU2PwNzwU2kSr5EV94uFziP2Z4Z4BsRFZkXHDFt92fAs3Hqv6yZMo9pa2SQ",
  "key20": "4Bj4SrCgxHPsCtpp3XoXv6WtTZuG2a3NyMBQG5WFTMeWQa63Gine5kEAM8AjCiKRP7892GEGuWGngpjSfNMt6AXN",
  "key21": "gL29Gr7P6sN5X9kFWX84aNTrNAy8Lyxwp8mAdZgf9RrXGFDHxrtAvdRgowayC3YHJuka2qQVbJmD5A7vtNtcxQF",
  "key22": "2jAmGCfCfSypoqLAZMF5nACFWMFfpeaaz6uPabEeQMmVvhgQ2ZNa23faKhg3dL2MpRqog7eAdQyJq2ViS1APmeeN",
  "key23": "24Bka13KAZZeKrKPC3DWdAkCD1frwkpNEKLz26CwJR8Cp1JgHnpvME6sAp6BM9nbeRFzGgojKfn9aWcMKSYPaWFq",
  "key24": "fBma6nMv6UfGZTMLWSesm9Jze742zrF5iEFsCYmxMCyeKDju29iEL8VFLZ3p6SQF4CgiWbFw6U8EjnsVutgjihv",
  "key25": "58aR4WMdZKf7YCcnHi7PxRgwEtU66xZqqSxEe6KuHjLmhDD7ygjEuDReij36JVUPZMHTwnz72ZQisHXPgajGY8H8"
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
