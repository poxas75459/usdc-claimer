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
    "2Z8kMhB2AftgzdU2HjyshpCixJcQENVgbrSLdPEo8B6GrLVLKZgFUQB8P8kng5dmpZZ7tzwjWPcMqNhNMksdZRgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqf5AxgVroaykJH3gXdCJZhBCpkXTipHz3MjeR6rTZiXeHRqYCsp1dH1sZZ68FQeUQ5gTnsdsKK8xar4KC2aAoY",
  "key1": "BwvqKxWCuc6CZ1AwMHskq3NWqkCg5eiQ9C6paEjg5z77Z5b2HetWy9GQm7dbobn8sTPRnwc1mDLuBURAuTWryES",
  "key2": "2x9wUP2fF9sjCRBj6Mn3n6cP5kcuU6XnUFG4CxSxnqL6nA65KAhNYs6vdxoSmq5Wjx2DMzkwD7Qk4HkZxbsfmc59",
  "key3": "3HqQy3yux14y5MVMNaesPdTw67u7xkvasCXxiGVq3bv8y8q3ZiwcQAYVagriF4wavZSmt1aWYGxB1RxPBXE9NUqT",
  "key4": "5pSF2TYuQ886fNuFXvpHRKwTtKTJvsmLCf9d3K7jrMf8yd2Ve7HDZodLCGsbvRrBu2UFRKoz2u8KL1jXSGfwWMMv",
  "key5": "5c6kGZ6sC4ThWMTv6jwetYXTqxy7aKkTwzfzpmsPHyGYLtB74tNXTXJ33XkDFJKwpbR5Uqxy5kwLvan4f4fvGAj3",
  "key6": "2sqrrVikkwnh5owvo8FL2Mx3gqY4x6vSBzoFB3okDrTXYQFj4w9ZzSbQAscWouUBtU4noNijko8jxbfiRLtuWMoC",
  "key7": "5GAAZpuNtnPus176n2YZKQ3P7PYYSo7vxUGPXxkvCrAud6KgdeSQz4aak3jdSXUF2Xd1J3uWM4pXEhnXTpGNEcVf",
  "key8": "4nyBPFkdKjnH65uNvQpt3exYBs4TpyZj1j1LPuDFWaQbJJfvdiChdvJLdVpGjbsad4DSxGGt7LU6unsPJoDrKzpm",
  "key9": "4Xi5p72v7rYpc66fj8kGGhMK3Kby4ub4sNEZBgV7AaALhdo3JVnqA8uvRSRjTGk29KirzdqheqJFadEXHvjDiBPQ",
  "key10": "3jBRCsJmUXe5URDQJNQ8avqB7r57MnqriMFjxDt2HhTs8Uz12Lefdrx6y3p8bedty4CYDTgLJiTefYckjxD84STx",
  "key11": "5TELnwd6PoyPV6HBpV8149qDdAQ8UjqxctvdVSsDDcuGKtfgRLkKkvtyt4NxxfKo8TLdgTdC8EmFEdw5WsNfoSpi",
  "key12": "5M6YTUdjPbxiQzAzyF6dN8dptE9Tyf3dhhGyDvqC3MJyVz7n6ZxHbFkSym35HCn97xFyxCJ4SVFf8qb2pXrE4vw3",
  "key13": "3oerJ59NnLXi7Yk27Q8pz4Mg1Aum2WxfsVVNkrDdcobnnx8f13ojiCkxTmRJjhhVAqp6btScsQFR65tYjv9WFLiQ",
  "key14": "64JKqZWhPYG13rz1BGiywGVCrQd3xFN9r1P1oNXvD4jYQBsx5q4CceDBkmyhgB4E5ou29yWmsua12GwW3eowo6tQ",
  "key15": "35QhmfrQPbRTkauNcWryEtUi4tSwoWA3Y5LpuWPL9zm4BhVsS2E3Boxm45VaEuMbUH8KxFH9Pzx8eYytYLfjBpTE",
  "key16": "aWdA9eWoWBmEJ2WfjXUtuqVLkZzoaG2cYFh1CsZ6wKr4szaW4BkdJrCFWQZQgE2deMrxMWV11vLnbwxxh6VFyzc",
  "key17": "2bcrCgUvySSVJeTsy92yrMPtR6iWa9N1Lcmx7fz6x8ucLJBzQcuPfjVDnzThYdEZ3beQX1CuJ9i3jWBRU1HVdtxD",
  "key18": "5nTinXB3Urp3YBmiy5ceuxni8nU49DV2qcqEvkCP4qstZBJkkFm8CpcEZd1mA2HRrdsbhndReoN2hG2zBqpZK9Wh",
  "key19": "5tTB5gLtKuE5PWz6WguxMh7t29ddSR2aD27z25AmSztFnJE7kCwHctsY6gA1SMvqz3W75gNB7MsdmzQbLSbFYPmj",
  "key20": "3wJ4NQn2kjKzVVXVZYBoTBomYU2kxiubbjKfb7S13tcqJ2YnZ5JAf6kh4ZTkENNFcMKhbgV1X86D7X6GQyXEzdXm",
  "key21": "4BFrMmjub7gdD5LHANqm5biKJw46vcNnzvkZ1BBPHjJPrbZRdXRsX6S65uyHV3zcYH5TCbCAxq6Smk7oXoCtshfC",
  "key22": "MmSBNTKmY45bJtmXoD6vzcvynFjoA3nMpRf9xMLfAyFXf22v8AHYFAaMK6TeY1jbES6egznCH5LzBosUXUsHdpv",
  "key23": "2KosvvuGbxxbgRoU2uj4Lh7grxTfHsrzUXoFUT9gLUYRZyMKhAcrNHMdmabtN9X7rVg3vgRALgaPDWzVLpF9SYFE",
  "key24": "5xnZBGfscb2W1bzKzKrqmcS1mzt5qKrWdowMLTZ189Yuf35xK1AZu6TNBbnDye3TvA8ox5hvPqWta4iJMGHjYzgD",
  "key25": "5cMNTK2CNZ3QfjG72SoFyZxhshxTy5GJHvHxcRgGK2rdMdU49epW1eFSpkfXvNGQkwk4kfE4fhD75nPjB3hvkHHk",
  "key26": "636b84i8hQSVJmd4cYC2HqdybW3hwpqDVFqJ5UY2hapohFPPwx5omCiQGD4qkFqhWBFtnZpcnn365jviRUNgZUrW"
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
