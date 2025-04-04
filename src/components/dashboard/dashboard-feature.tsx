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
    "5RB8aaYES6rTqsLeAuZ8BCa9H3iDY84iqFbggpkyTBgNsd4JwVVyXnvVhoeHS4bEwbr8WNGfrpguWxCaEuhLtXcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u14sG5Fcbks3rNKyqKbrtdt4syuN7jAexKdjGJZG9xYAxbk4adeYpp1N8w8gfmZmoHpmNoFHoSGMh4YrBp8wqPY",
  "key1": "32KuLdMxN32xaf2DBGjhQCom4AsN5EX1kAjEVs9KY7XTfnDzLRWhtJQbUWN4cmiV1xzQT4bVLyE3yde78PSXF3va",
  "key2": "a1ooZY7up6D7VjQG2xaYSmf63jgspfWyLkzrGSvuhwUjAxZN2f1RYq7u7baono6wbDA32duY2mgaZbaZ8SdcXV6",
  "key3": "eKsyTdYgM5J1mhqhfXEN8q9xo8x3FsuZxW5xxRYsdoN2ohSiXAxtL2TugKaU9peXdvHNyeZ9tjCUkXvnTtyFgAf",
  "key4": "2BtDYSPBG94TJfy3NHnhGkSP8eL7Lvu3MXbnqpJemnjLryQ2fowbXsqe283Gf1pesHc49oXxrwuY7tx4DLM5rpua",
  "key5": "sq5JPwGktsZqNCDCEwMNjhWaA9bq33r6ijHyF3nrpM8ogBNQgUFsY6EBq3dLPJosgE6BLyVSdAF6oTDdwVjDHjJ",
  "key6": "dCdeuHdGjgUTr1a3Q45EaxpEQSQQAfHx3g2rvvXfN6983NhaRdcBos2fw81nNyqdwdnAUk9uoVCGJrBADThh7yf",
  "key7": "4CDYLaCCQsKHYN4L7JtKJ3GtkeiUMdKGkbBmWZHZUnKv1oBs2tdfYnPnodiADq5Jk1X5AUjSRRBDSSoWsbYttoBc",
  "key8": "3k3D8iL2dUd3bwQaqs1yZLHcTRGt4egHJMWUcFLSFgzbbUaAkE4RZ8FqJduH14vqa6jmT2JNdHdv7JcdKbLe5xLQ",
  "key9": "4gWJnZqah3ELHBHB1vvsXrD8U3DPVgsDTVV8mAKQYa5Gcwxist8TeSDfoXdEqr5pEDuDdjhBednJqSx4ckVxD5rv",
  "key10": "4YagoWWna7CfWy9Gn219XCkDMqG2iV7sojjT8RD69zPwDdiwj1A1fnicMmpB7Akj94ejVvtY6SLz39KpFiVuRpjs",
  "key11": "GppxCECKfo2qiwMsxxP3HWG4X7mUEM9gaK9aq3M91KKxLxTCoHgwLkVvQfczQGfS7LXM5Wi5uWe85dg1SJ3Jt7q",
  "key12": "4nH4G2UATVczG16D9jyycsrymsVYAX5nVy3q9PCDNXd3ao42xxnYAoqUKvZ6fu1BLvQapSdbwzPArufwyuZtTbcJ",
  "key13": "5msyriBQnvMnVm23y68rSCdxxmcVgsJ2wSmspiAKso5FY5c7jeiYHAp6YN2xGBcRzdune68xsSGnNzoG2uJiXcPQ",
  "key14": "5xYtoQRyCH61PBChrAKGFK1a5Eb9t8UrkoHa4xHRVqqT2dj967hy2i6rUThCcMHgkPda99hDBrRgWyWJGv4ap4Zr",
  "key15": "5FmTPGiueg16uqf72J8WDF5nQTEwXu3QmHFaGP2de6sZZspHCYr6AikVKUQZtAEsn9iDrQ2zDYXkgTsjuLcg2HU3",
  "key16": "2fgzNpsdSUtjuC54QLcytTdCetVudgBhsaocvogb2khgDy1GHEbL43N6LbHRe12pUR6yxk7sWAxTn8gn8oLaNPS",
  "key17": "5pnHqs2oRCioRmwG9teYmsf6HEigzEeUEDakEymTkPkLLCRYN3VjSUo8qJSk4wRoFNoWG1hntiqif7T39YCQWYyJ",
  "key18": "4uQDNVCAPP1ohwe6H3C5apZ2zKBaYHzR13memBDPFPzgu4fKJLLkdXKd9aFFvwrAKVuNfLhjm3TqWNhugj4iZQfJ",
  "key19": "5KvD2e6qQoPmd1LEu3zEGiDKWs4gEGK4ai4uyWehUVQVdZaBdsg7zKQCxLUbfGpxBJvusC4p4Drbo3aVx3ipaH2v",
  "key20": "zTGzHFTQ1Cb3XcPYVedWWRzwMds1kekyjWC73QAPSEeCGvCSYDeLhD6SgMzBZRZ6SFQKrXNft4eo3iSpQe1rMg1",
  "key21": "2dngGBk5qd8hj5Na2uVjC1XiPNP3mKqYh7ZDzYxj1P2MwK4LoYBDzGiPHnz7nHVZkkwP8Q4TeKUJJNXaVAkxgRpq",
  "key22": "54dEk3nqekrQq3kq4DTgrBdFAwSjg2mdS8otnHGfPCSCgv8vygprs8D79tNQSBPQZg1jKMX35iXPaKNC6AjL2k1J",
  "key23": "2bWX2zvbH2QRMN5xG7ddomKnYJAQe2tAYbfMza2xNZZKscuLD1LCtjH3Q9rAoH3mobjZ93TsL67WbFVDxSsnJ1NT",
  "key24": "oSCHjHLTYePvewYmiJrTzbVgK9ZqAufCagAb6SpMVhSkjpzZkrb9SLUv26on16kRgwEVdc4sU8aTv1v5vgQFHyo"
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
