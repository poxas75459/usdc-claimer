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
    "3f8VpRAs62my7TAfkvs3a6nsBD6qMMioq7MHEhSKdhHdyegKos39HkEBYqy4C86bf5WE2iZrSdehKVm1JnmEwB4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDA6MtaELU3pEmY65C9avupo2xJuQT8woKWPXhdEFvPsvbsVRzqbNWGJGNWWDkV8Rh8x4kC4RTnPNU1CZJaTppa",
  "key1": "2qKD3sxndF9cQiFkQTzkg2kfu6J1qUWKNe3EMY8NG8cnh4ZHoZfKibjkbr22A4YZaNy8eNDpYdZZkDdQ8P8cVSsA",
  "key2": "5C9jPW1mKSptFr3CxqCUJDJCwrixNLFyZsXRn6Kn3FAEbSGmXdAeG2Lhdu9GJFHoaosrLMsiqDKUaHJjC7kU6F5y",
  "key3": "4EV8d9e9AXonXng65k47Jox9epjBCjWYLif9R2vAANBJRSCFUi7XMaumcQZ9xbP8TDQbejV2dcQCbDg3XRw1mewj",
  "key4": "57gBDSHrzUuGrgAXiusxhdUA8FTvNyABLjM8V4dqKwpkaXd9uvFuvwF4d2VD9RqSXgMtzUookFjwmRhvgLh6QB6f",
  "key5": "5ofcGAJbBng2QMYZbYDefuamDZ7xU7bKyNA6sr82CBVWC4za6g2B5tTUzjiPrqNuSju95R5p4CbMrDEMU4vhrqe2",
  "key6": "5PRN9gPS1mHMaXv9R6NoHftj7um2swH3MPgppETA3EN5QP5bcCUfDb3YSKD2iiGRrwePwz3BNGngjAtanooVXnRQ",
  "key7": "sMiENDQCLbd3RZXDmtXYUvstejJHizey17m2PJ51FhagCikW1RRREUvpZFamEJQKxFxhGst1iLPbTmVWpvZmcTz",
  "key8": "5VjfFzEUenYXQkPTd5yffYHuPjzykV3wJBKvdrizu7GaVX5cg3jDHB68AyzyVv3HsHnwDukpN1AJRSjburjYN1c7",
  "key9": "5uqCrAKv6uJbJWw6RXj1cqguRxFUVyK6MUwV7Jz91uocry8u7oTdv2nUZz8SEnKMiNsFe8Zjwshz37JL23bdEo38",
  "key10": "3dT8FJUPSh4LP2LkLFbPmUx6tPxJUfqSLu4czWEGGp1itrp9d3kARQY2rRTeop86UVpKpBaEaG9s7rKNtk3RWrGs",
  "key11": "2yqvG9jNPhPE8r6ScdE8jNnr6fZDQqKpNg5VobajviAFNtKQu4JzVMWVBAoXDMFBEtcZHNxhw75phnKUxbPt95x3",
  "key12": "oqVRx24hC5GJksk9Gubcd1HzRyJmt18hHrLjLhvsorhSWnRNaUYyYSeFKEP3NPRQ9ijMm9UH3LdyqKCGtkT2s8e",
  "key13": "Wqxs4hqsUp9o7cuRD7hpVwFNBNZX168PPjruWbpwnAKk4tMubPkR2JAXknR1XWwvgYsGXETJr1Tz3rQdPS6vVex",
  "key14": "5tV1R5qehFuVuEFQBpR9v9oATPYcCVrRG8h6BgU11vqk3VorxuxZtezCcHMC8SryzhMTYE2qppXK9Qca5q4UGyWx",
  "key15": "usoyjibdidVbC7mFUkEKUsSaJB4acDNEttWUMZH3Q8MZPtz4esuRpDihjhb6gQFAMLE27ju1vSA1Zd2GfVaTr1A",
  "key16": "4b5C81ULPPyLBgTiTofKD2BpYm5nGdcn9X5i2S2LE2Wx19WZbczQBUTXK9sM47mbzBxL33dx8JRZocu4A9qvVqkp",
  "key17": "251qaFKg8BW5dnpbkMW1HFzFrPXxdeXhgFiwuTXxrps2q49B5NKmx7vetJjo8myhJpCfQbdjnNfKNftK1eAKphCW",
  "key18": "4kTZvmJ135ZzVmJ9yeLpCirwVz6a3cMoJjEcmm1omUMWgGyQpLBu3QWw41DwJYTavM94KvKkDbBpdFH68CEWFvpj",
  "key19": "2Vq98G2sjcBZihUVYNqSxyXWfcEgH9UjizDr8RpKNkzhyGsBbREMbMLpSQ2EYRmK6MX7XbtVFMmbyZNg2fb7CPsz",
  "key20": "K1WbaCdLCTQSBrtGK1prJGcaMbzFEq7iyEUj5MJzjM5WM5U7cNGzuS989o1RVytZdNr4MN5fTMGvkXjw5x7xmUu",
  "key21": "5B4XGrbTgqAXLu1aZdMTa4qrFBJEM84KfFQNLqBdp86zJqtqb7bRRUM7jfmbsydf239jC4R529u7Pxn6ZKujVNVo",
  "key22": "2vTs6Tu6EMAFmtvqnGAwUqxAQpyFBXVpVyWqWfSAz191Pgz3dGugABKS2zci1aiv3M8sXNX3qXYePYAvFM21cy7s",
  "key23": "Yvnpckd3c8zqtMpCtDoAbks4hMZVVSouRG1mSHkBvRB7DzVu32UMQC4nYkC9A57NxKQpgZ2Y3mkodpm3zhG6nRm",
  "key24": "AC3tC9bPubTQXw4fkM7ZGDEVUpeX1ywieGkJzGLdCQaLFq936QUAGWQ7DmfWSRepCmynoxNQPwP6F4yhXT2rcqy",
  "key25": "4CvvrfkGZ8SR97i1zKjWQZiesNiXimJH4peRxFQVBfsGovS6DC2J7Cv59vdSLt5XteKzKRZUN1qn7PHhEpNiKDh3",
  "key26": "2uhgojpeLgGyMbRvxiVjEoFct76i18EtK9jGnaxkrz26sUVXdkqiYs5joPro5bw7FQXoPwrN8XYKx5FhFW9XNsWp",
  "key27": "RWrsDekWb4Rn4sWkfvGcFHSUcxo6hbWp4qdcFTPgnuFdbYgEvykWvGEQGLtfGhxNrxLFrzBtYTMwZtmcgtyL7rc",
  "key28": "2PkLLWm3yXtNYyvxUE7YLsA8pa2Q85JyYtMNVE13zz758hyPARPAhfghuYUpkqa6czAzxDSGg2WKMKUgUhZeqn5R"
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
