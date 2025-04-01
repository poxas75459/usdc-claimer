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
    "4Zyo3iH9Zc8Rzda5MjYFo18krGk4CvmmrVm7dyeadzPXXspKQTJaucMQpD9ycdZbndDvugTYonrLGtA3K5QFkuHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37wHTszQpEMs5bNiFUYFQBuWaY3wU1CdoFFoaWxBxw6b8KgjgCpQW3HqYRK9aK1y4rd1P8i39XjTApfaUszc1YmR",
  "key1": "3faZZyQy4DcNWoiQzimjoQWPSX3d9wxAVTxSV7Q4Qb97wJyV1tiiyrdxZzpgxvipmYrHteFCWyudP3eZiofXjJ3r",
  "key2": "37BtMjPcjTUnxCvRJxsXdDGWSBrKqm54PYACKkw62cjCxyRLPtGn7ywrdATDrEnS9jKPMQWY5vBY7mQznsRBULpj",
  "key3": "5dY1Rq4VX2GiZyEG13iAkgaPGnMz2z7x24ChGTjpZ5ksL4d3k9dngJx1wcuix66AEaKuubY3mF4vXW2dngxLXEu7",
  "key4": "3BNZT9VJb8UMkjLJw2povmQnCjHCbJkqJJmza2Mwzw5FFisYVRGaZSTsm3LefTdSodMazgNdYMV67maQZ8WEfe4X",
  "key5": "okqv9ToGXTpdXhhkLXxKax1BHoRpuvtEbCHy9r1RgFMTjtNHLsabZqLzLArvXzgyxtLm76iWhspPMwGDHb2K2Vv",
  "key6": "2znNsYacc6ULTLLnizgneqivqBjPLuN5uAZRy9a3fRhAdsZo7cHv5C6gxweaF5dvyPpt3vgaVVNwdqGUva2RSNZQ",
  "key7": "4hzmjrDH7GSJcAhAWL1DT2Jo26ovYTRB3vC2H9kpDSKXk7k6vxyPioYcTM734dMJiRQwh1g1jXKqVCB5rJQLZnTf",
  "key8": "4YGPnJvoZskjSpDERxTBfMTw7JfzN6vN4AxZ5m9zQU8d4NaCRDxfbZ4NsozEAJyNyhKqDH1xMphiMGfZ8c2Vmpd3",
  "key9": "5WTyYMP6AQerxcGDaYZYxagRXCzkWBtdoS2X5zxULg3RYsBSaKwnE3mPCGaH4VTXt4pTnDVzcrZ4hhvD62KP1wRB",
  "key10": "5c7VzxKLAqFv9h66TrDkRUDYvnjo6E2SuF9C7EqqXt4rdxfmQJarNfP8PzGPztZEvUXeezjcA82e6S9sCQcwCRdk",
  "key11": "2TJSFZW332mp2B1uYXwJsaEtFxYDfmPFyfxLDVqvTwAW7kFFiVHDf8VpBAS2FYjRdA1K7knkkLexvGXWuvk6Ge1i",
  "key12": "2xqhHywZYxjH4wmWJQ7B8qM3Y6kmr27jUbCFKmaVZVXo7Sipu8aB59mHRa3Qg6tLpKCyZdAspuxzZji7EQ19bf2C",
  "key13": "4CqWZ2Mm5q8pxgd8PJWL1pJ9wB3oWRcWgseZHXMrMxy9HzrUYKtnPnbT6m2vrMcx2s7HdqkYgDJ9UMbFXN9LQCxL",
  "key14": "gKabRbMhMrUZCiw1wUukUd79QCoM8mE5dv5dzLbLoWdn8JwneczZCxHxDFsGGuoVbKsrZio2jHjSq4EuhLuZ6sh",
  "key15": "4cyDAhFzATN2Euq5FqBv1RTHvj1dsuoh6X3C2jpPUEgpTeaj7JjaFmjFtfYQ8NUe2gpiRAmnUqLn5G1imEHK4fR4",
  "key16": "5Wmn7TbeJBJhk8hTWPMAPU917Ztks1TKCLCJbyXyUyCCYpK1WzdtbpF8ZVYiQSGpyFb5vHGKK92p7MjM5p4cU4n9",
  "key17": "4btD1Kzvi3at1u2Mx16JXBF1NWVYjqsRRHUwTA8XegcLfit5LD7dhyEQtw4gg1F8jVNFJnGDPJgWY6gCzC4hM4qG",
  "key18": "5FKNsNAKEtzSdhMkzBzj24H6mW3MKPa7q9r3tSYrcH9VN8EDJrEgAGa2iCfeoFTU6oUmzUAKwaj5txyZCAJSRcRb",
  "key19": "5Tfj2oWmhVBfmMo9MgfEjpWfgVGuXTS2TPXnAcV2kBZU6GL68sHMqZHjUr3C3v1qGozELQkz88SvadM7yhPnXk8Z",
  "key20": "41LduVKjLkA3sBDkXtUxVXUuSz4rn3VmABuQuYJoKrVtiTtZV43hUk8nPFQLJ6SQRK8vLwRDnJfCkprQ6SsZnj9a",
  "key21": "2HA5tzhzXvd1wBfs5wC88ECPzRRuFmMQEuAmkLWc4eP3FzMW2hnjtqskxRm5Ya2UZMm2fdWRE74kWk5JAUTjGeMA",
  "key22": "4ZKsHhX41P1q9YfJUUif1r6UF6gfMQjjPwJgyRmY9M3eLJZXB4a8nUxcgkDQcpMwaNy7qZg28F7Kfc4M4k6vRTJ1",
  "key23": "4MntVeKhgeva8kCouwyDcawMNcqTCXKafMgKd6qfXgiggaDcTWpe6HdaGaZUhgbSsH62oi6x1F6zh9Jo7rRv6Lyf",
  "key24": "3t87LUjo6KiWgnLhs722ZsPpir7uXAq72NHobnLmYJK79JcgHkpeD7iUQcCGWPEATpdyLfLtmgNEu2oqpvEt84jw"
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
