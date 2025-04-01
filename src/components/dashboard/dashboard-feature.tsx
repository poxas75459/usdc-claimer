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
    "5zzWNzYHYk2WiEgZ22smuVcX889yBtjWnBbnE9MYFagN1D277mDahu9JWhGVrXC3ZwoY1gg46KSTwKBnjgCjsX5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "587AkPcjcEBSN1ZcsY34dHN5VJGTStnvQLoN4Rej7TcJ9PWGck4sCpb86DTQCfzXG2xQgrSyZCCf5ZZf78AsvURR",
  "key1": "4xYwi4AkfbAoQEB5wSqgEKiniqXquPuG4prz7RD6UhX5iojZAuegqW5vrF6zpuuPnXbPdTem64quERkkktZUJE1w",
  "key2": "4hUTWszWicrJ9W83tXAMZQiTRmpErHNGiCwUeYZVbABBgzjD3PNwkxYyeAHw6sCTcZ3iY45C1ashvPiVsbCKS6A1",
  "key3": "64geTcXXLTP8i7uHL1osEjuZqoCt32PKpziziG6wET5vHGTfCvX4nBnBNn7dSRCGcYGZ9k81K8MepmeVfSuz7f6o",
  "key4": "654m4g47zmTXGRsRovneXHWdeBHTRtqN74G8iLRMXcZ1Be8kjEcphwoSDjiXvgYSN7wyiyze1VLS6bcLTAppu7WB",
  "key5": "4RR3SixsEZCgjtF1hKiNHfnUQSb65N7en349P3uVqb5Hz7oBrA521AFcn85CM8tvVsUacYq4UR3RL2iHif4JXhXd",
  "key6": "5Z3rnP5bGXqBqAeSHt1iaHo3T3d86hXDs9Afh9AwChPvkZofGUUajUCf1BmncMTDwC3QueBPtNdSZuuko9Q9JvzK",
  "key7": "4suca1Jfk8TdsTfghFsb9CgXeAxDzcuxMwj27Cod3mqb4o8NhFSVKYQhvykBRJ2RuCxVrC3aUaXzvHc9Yzhnveko",
  "key8": "zPEqjpmsBLPn6pHnvCwzzcBmKXr6rkD171uexpv2cxcgotcoFtqTNCD3zpGvZhBXpTDQfZ8XaN5TRU5gdvu3YQt",
  "key9": "229xof2v5nDmCpnqUj3X6YWrQi5fUzknWEUmw77UPab3Uy5WxdpVc4xUuE8pg9k93ANPRZKnWUBhH8wpS9CS5SMF",
  "key10": "2Xc4qCdXyRbBkSGyZLBFNCsRp6TrKxHLA9KHTKTkJrfELLnNkEFXXZKWLmo5NozRNi2Pcoz7BhGfUFXVdZvcsTh7",
  "key11": "5Sut3zXXTjPTQXZejSKjtb8rLhNR9DHyEewVPKfKUfgpJTxwVeoEfijWjbnsuTvPZEthGUbzu14ZcTuowWv1Tu49",
  "key12": "2WJAAQtdnQPNnmAEDbSfUx4im6MRkh3xV7AQWRYt2NJ4fJDr7bA4yqTy7mXK1v31QXta5bu3UCwBXiX5216SMkne",
  "key13": "3xdFNDmtG1GgY18fjADbQtJcTndZuPr2HUaBkXRUDrDTG4WHxDt3yLWwYXe98fi63axvWpA4SQCTReT4v9a3mq79",
  "key14": "4EAsiM3Uy4dqoGD652RzrhQBWLxhe9KqcLJqKKzUQFMj4Jmo1qEkHgntHsrLX6TLpWzayJmjdHKRT8v8BCrKo8oj",
  "key15": "4KEGZybtRSAnDiMKPFkZQxmBKYeFs1gvxsavd7oVdEjJ36ab1bjELwTxv1fGrzCoj7xDLKbWtpifDievVGmiB6GK",
  "key16": "ZouZGPGyQ4xk86ZtjBxEz7egzzpfBwYhEg3dUJ12kRjfXQMtf84YiFwCPTuR1VDQUWUQByEzbKU1QaFDgT1zzza",
  "key17": "5WRxcfUcKUW493bd6BzMBF65JxNrMoQxsRzYorNced3sEcwJPXT3GtG6QP7vVXd5cdBapefmhSwKgk4NrNFMHJpm",
  "key18": "KgSzytuPvhGPHc7fhMYRY1wBCh3ACwZboQPqLKw3wa4PH4dGcsxa9HvShP19pGXVFEG5YNwbK3weUCJxo1FeVnv",
  "key19": "443xxvuKNHpYEQTKd43M5WJSTDkaZBkF6yMhxjRhADxcNwSRbwUiXxVE83vWBJnuJhsA2vhWiBVkA5pPgWHR2F5k",
  "key20": "EzXckNnjFbnRqXGkphKauoBXyxwuMHu2RSCt3RUtCfeUAz9UUbi2ziQ8bd6f95oRGSY7jhWvQcbEaAm75G97XMV",
  "key21": "5FPXSxDekW6TFH4qDuwdZGWbrEfQLpJbA6ZxnQ4BwW4Fkwzwc5pjCWC9iSGND8oCwhq9gVBLtQeW4tJCiCoFWpfh",
  "key22": "2FUUQUrga2R6cCfVtGeCEUXEK3UEHv84uneR8JaaeeU3ZqKkiwr6wffCwpfH7xyc4nptGUJHUiWSDtJ7E7WR31W4",
  "key23": "2ZTSeTS67BsmMsMUVjrVFhPpHkHqtoNpaEhNjdpArEi6RZh6QXHj4YNi9akLotce9cBvx7TAm3QuwDTvcWTadaCk",
  "key24": "4btJD6bjSQ78EdSUkdp48T25BU4fa7fLxjLERwPRC4HEUrmZBQKKoNCuMiDW2h7k5imzPWxPxpdXSb8wDoWH3BLi"
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
