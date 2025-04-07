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
    "44N4zZJUoRbNEg5cRMcTk1mNKCDSdCzs1tum8qsNdvkELqG61eZ6P2fbJvfjJaXnXE7T4rz32PryzNVUbC6Af5f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52yfuoXoBbPacYYhU2RYtK3ucHtqajkqRQHi45vXB8x6ZH6FMAeizemsa5We2WH6kYmenP2vqgAqsXRQczfQF2Mw",
  "key1": "4fJSpgF8zY6Wq8FS4LNCarwTm61zouMESikUbEGTh9CCikmppwrqTqa83ybVciKEheBEZGd7ZE5sJ2w1VDiRnLNu",
  "key2": "3uMk1JHZHFV5SjRzkjXgvxJjvaiB2eXQ5Na9bXWpDVTf8T1pzFMgcvoyEc573KhPyV29UzDyWydavXeZ21RTPCuY",
  "key3": "4pQQcEAoDPE5cuJ44nSoxytd4Kp4yqjSKHxBW5QHM7CY39JyKTgQz8yFgG2kv4Tjff5cWgjLW3fpve5rW9RvrsGo",
  "key4": "5yjYmzZmPwaWvpECaC9xdrvSkqc9LRowSUy4GyW9YtoZGSKwuBwBcBM52r88eQzV7ZqozhCNEui1n7uAXT5NZbQB",
  "key5": "JCV3i5RDHYbYgRVbGtoNj5qoJVFutaJ7xLGFqLXXUsGa9zn6MKCgjHF4TyaWqtNYBPE45weKYkFAYY1HY7ftpks",
  "key6": "4hZgCcRHUtQQUC8GnjxvC8hTPcDdtAXiFqP9nqmDpdC5vsSo7wjiirNfnbUBAuLSd8nQns7ipJ64ot5uPMWPU3rJ",
  "key7": "2qi2gomAQFSkLrHxNYfvbLQeHb58JWDT2ZzZjoHpBZoLkiHw2o5hjmERHkEWMf4Mta8y6bNnSnvd9d8eA5jdSrfE",
  "key8": "464YB3HVunGtA1GJrHYeANXmmhzgNq3qdJaFqFC5h9b98NGwY6peALuEuzyxbbRUAyTVhS9DVq5i7RuSmvBYBoNv",
  "key9": "2RDrSpW7BQTWBjbjyvCm9paVaH3KtmHqaJnj633a7fMfbt1i9nvXnQeDfyu9sf6GP9xtF88kNJcSk6Spcn8eZy1C",
  "key10": "5TEH1NAac8QnTZCKvKGs2ZUfNnkHhpQgDhErTLaBA4rZSsxXAVT78mFPdgNN3Y4umbMUcmxfGQyFCo7L8rG4Kado",
  "key11": "3KGQS6HM8XZfSTzqEHtrTWyK4YAk6U6GxX8gM3wbrbN1e5b44ZebkFczoPAJdvSPYYY8KdMHXE1RPHZ84fBJbbNy",
  "key12": "4HY55AdzNbgqcciu8fAP1WCchQiV4aUXHz1rm1shgwjQDrCckB5Q45wFfYT7PQFCZtEYYBWkMpkm5GSRRrApKnJW",
  "key13": "2PVkXLFoVRnosy4XX8pf9RtGLdh5TRRWLyP5RACRGRqKMYNXMHRhcb8mjqjhpivNzisC3bGdhfRQhssh238rDMpz",
  "key14": "5ekWeMQXiP9ysz9rEayBx2Rjf2LBfeuYXro69qHrmCByu8GSi8JZ5qMs9dYb67Ytgq6MM424TgapD8guS4PZ72WU",
  "key15": "3DzsK4pqZX5qbgoCeVqeaNAJVpGthzfwfvSEXD1Wam636A2qqGx7QaAbhhUQvVMkdpkm7xHPx2bfvPutdHrWRtia",
  "key16": "2up3kFagXVG2iASKEkeDdCBoi3pkYurkZm6n18MWRTAqkGibZgdq4QUPnM4PbxTNyr5VYfs2PPGQF5JaNcVXFTBf",
  "key17": "3SNqhtbETZNNFG9S5x9o67v3k9c33qe84WfCUbeGDUvfqznvKnPbfUsGYNCDFMzaEMvmcJXvd8ckeZkbBr7mV3Xx",
  "key18": "3aBivwT2nstacdcLi6ZWb8nAMukV2sHynWUP9K4yavK2B5bhQnfSZ9GyJcs2Pwo9deZT2VAv6LgYhw3ziRx2Vfrr",
  "key19": "651onwusUbCj1gi4ntfPyDv9ffq76f7PEZUcJqQRT14eRPuDcpqVQ3iU2aiAxGH8rXwAPkSTyGXdouy7CdwQzRGY",
  "key20": "2EfV3HS7tVidMQNQd5yu2XL9TAtNmQYLXKJWSGvbEuvizHptfqzFHvuDBTgcAUSaoWga52fEkFomFUPtoTb1Jngx",
  "key21": "2aymNTPCUq7i7G7NgJ4omQ2gN2zgWDj9m3P7Q5Z3DbT6g222dJXMU3GN5y7a7gzxT9tVQLby8YGeYWAq1B6syoa6",
  "key22": "4HAQRe2Lhi5YNzHMWtuT7AW9FsQ4sS6tksWyuGBzsK2nr4PLz4YMArEZPJXL64jYjqTdeghSbX8AzUDyKuyPSP83",
  "key23": "3i854X6oRnpjZLNxa9kYmmzdSZsokQ6VNYK2htxJCX5fzfJP73R4KGpZ4YM4WuHEX7sudLuX55mpZfeGJZxcXjm1",
  "key24": "oj6ec9CgfgqtU16RVNU1vzyz1pfYGxRrk4ypEtyKza2sdjHUU9UDCCeTTJWWxy8gCMRBGgjeixAePpvJTe1vEq3"
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
