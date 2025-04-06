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
    "3w8YCrgVBidEHcSLg5NFHiXagEVMDdrjwjtjQDCMyqmtJfuezUcN1L75RpgXYKeB8cmhHqX7uHSXVDQZTBAFos3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtFnhZRNhj1bu1Q2AVtwgcWQwF8FEt6HeCAw1psYU9gijeGHBXEgWpiytWSwdLUf2Sa6aUfELDVEZEYZSyurqvZ",
  "key1": "67StvZXNJuGRjEDCDvLVP6gq5UYJkxer2FtS1iRjfewibCWUCmQKqQgTJfVJnFxc33zPwuZjgJjvSpEYxd9fxkhV",
  "key2": "35E5VEi79uqaRYkzb42WzT6iaopextxu1Zwe1mwzy2j4WLXGy3iAEbAXFbbo1QYRWRgBZD8qAwbRc2VfmBS4v5Fb",
  "key3": "3vTfEKnEBXc8FBM3WTTJU38Hjdkgyd21Loet9toNHsa3yfrWP3wURv5JL29YBpiTZEZuteBywQ27GpQ2QbJ23hXg",
  "key4": "3NegdBwAncpQZFP2s6zVompQDZCmoKbyptYP7oqvseqy6WR3paDcDv3HK2Hq2DgombvyaunzixTpKTkkQYsyb6LQ",
  "key5": "5HCtPzBGvWh7rm8YcFUiGoSKQ4etx1hMVEZWxG2Zjr7MM7rGx5uwXV2VBiUVP88phiPQwWEwmMQsaeGayWhPgU6L",
  "key6": "2ZzvvxuVr2Vwf7wiSHWJZmpsYFVVkPUZ7dTS8gobrqj9FDyU5SPPCwY812XQXdWah3WFnVAfvxvxWxDVcvPu6NPB",
  "key7": "3SjYKYynEPayZVKqfBdPy1CRzDEQ5JnMvtXnzyVwHAQ51nWxcGwTbyyd3pT3dR8N1YkSrcr7T8iFDMQEPVUpW9Kg",
  "key8": "4w3gwivPoJMW3rCNLe1SmLpUVT9wkvPcPiGm9B7YjaP6fKuA4Z76SdheSpNgxDuHb69c4SKZrQMLKWgXd3MFowB",
  "key9": "4XgzaaSnpoSuJuiXX8M9p36ftc6eiN1wifGSbjD2ULmbMMkHJeExfMGskJpB4PptT4vz9fqfWkUg3wdqinGTYNQ8",
  "key10": "5oEH7qmi9k4gRLHpT87TSg1NDdtZ5WdK2c6XcF8ZCbUHExaR474apAYwqy9umMK3kmkdVBaTuUe9WgZw8sh8KwHh",
  "key11": "4U8Vo8YvJRXf2rMyVs4hDmnL8PrJ7jDFqwLiniBP9EmdKmEa6U3wnpd5z2YPe5MTr4JCEARXR47HdTx9SkqTNuHz",
  "key12": "3cw1ai6KwYH5UmZ1jiG36xL1qmzpkQmaH3gQJEETxggMJ3Mqxc3C2x35RwoWXMBtCm5ACTSN3DKRu9rvUapZmYXv",
  "key13": "4wXjbdbtvYTzjnWhTBKJMPRtuTLFQyCiuFxxHDKsbbKBi5gq5hnBMKkMCWtc2CMjtXvRyDyNJCbm2yXTZu5QorWC",
  "key14": "4cMCNvnJPaXdeBByTa2YYVHfyWaJHYbrzXTXwjUwcuWVyQQaUZCFL1xzBN18ppMg5kz5WTypo2oTLYJm3zqk2vzM",
  "key15": "5gatpcqaL9aSo4h2yvpcRPMUEFLhP2j2kPh8HeycXgvaGrVvc4isJoSi4n6zMYY25Wx9y81Y89T5vd5cdrYVCGQe",
  "key16": "3uFSw8Wd6GabhjvagozVRBYbsxHtEfDqhXVkd5evD5xmndVxudspsFvUhSjhjXAdqS6fqBaB3StsGuu88tzNhgzB",
  "key17": "bJuZ9CSHcdf4DtMXEPBfnrW2T62bTxySHMknc5nqubzvzuQUFfn7kKHuisjNz8QxAKdRiffdbRtJien7QxBS34r",
  "key18": "4BENX92bhvyDoA3ceAAH5AqbeRRxUNwB25uJ2ECZp4HqYdoEZNTmovhaGoDJjTZdvL3936NJ3HXd8ckUe14MTE3o",
  "key19": "4DfCsrdJg2Yo1HJru4KSwM2xuHsda3LszcKH8kLYCCMyCAHSqW3Gi2T3evrVGTAvChU87Yu4bxaQHHBkx7GRbtJF",
  "key20": "2DBB7HXQFtkZLmwpzSEi5dw5Lsf2Vej3yYFESCADsDybEacNrFJWpyp2mvXLwJPRj61inekcLgbsrYfmLDi8rUE1",
  "key21": "3N1gkMYw6s3bT7XnFqmetCM4tHtJJEiP38AF5pqeuUpsn2QmxS88uVF4BfDVES5p4bakAC9Js2Bmwj8zmoUGkjDJ",
  "key22": "2V3JWW2XV9wq1LnZGECaMZFW4aVg23xZ4zMyqM67nDpmnB6A5yzaLWkoMYRjopfRhcHmLniPQX37mNBU6Bam9FxL",
  "key23": "62WJ8t8gC6zmeMPego8ShuW5QqjGKStckE7HeuxoRPVqhcLDjCc5oYbQbk7JfoEPhYnKC2QDqAocQ2fDs6GUZifC",
  "key24": "4ggq39yKDjRYoDzkxuvU3PmRuzCXkJx6HUarJJpceBqdrsS2A13eaybuxp3Mej5tdVgK1CPLgsciJcQhhbzyrBcC",
  "key25": "4UWBmkvDg4ZaxJw629RPTezz89CGUytBKRYJuUdqZTWqaVdVKKb47xNhbFTijaCMwqK4FdaJg9MQG6xFKGCreyQC",
  "key26": "56wbWjNY3BAzN3i742QpvjhqjPS3ZsPhW7BtQypbGf9j1kKDN2aDBaLb5x6q3Hjb1V9YhuXDobzfnLEKgx9bFTUv",
  "key27": "SVXiSNgUamqnsVTUewV2gNtfYc6TbaDMWoau27j1DXobQLk2GYRSzF29rjo9o1FYz2JiKED5EXoCyomzijJsQtV"
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
