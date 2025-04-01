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
    "NYjwCPmeWax45gEQgmbyejTUL1NUVc58oWCwtzmXosbkuwrz7AL3SsHNpAAzx3wRHde6U86rWeV4zGaPa9j3kVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbmM5pMQJkfTJCFe5kqkK1tdmY7DTLUrEhzgzqqpExwsjHVVfBxkSXoCs3Vz9Zn1K231u1BYGpEGSBcsJE14d4o",
  "key1": "3Ay5sjfQuxaH7ZByFSDBcNATMbBqjR8H14KQGCMwjmoH385rRBXVtiHnGKNuGp8EWe1ymfC5XnG4rL6MmDMN2HXa",
  "key2": "5RdBqdKkr4UMg9GCpbBGcEiurSwCGF1hemuBfyGZ4nzeAGUxGBEm76qaH8kuS5dgmfmEe1Sx42YJm3tE2vLPF6Gq",
  "key3": "3dnemzbEFgTgSoTHtX5C6d6dPwESWK9qeDVE4TL6kT7yijv5iw8roehdNHUL555iWUwvWpYXMCxACQPPvazjVMj8",
  "key4": "28RPtSvGkWMkrT73vuDuggTHZU3C5nSywGuQNrNCnHwZTZVJ6psf9RScZ5ekWfyUisWpTa6g4RJwPYV8xxGgMFrf",
  "key5": "kenh3R9Tx6cUR8JUUBL2oehzq7GuXKAXDhdGNJ9i5DsujCzraxy3YVUQ6yQp5RoAkoNFvLpy6uNRVCrUv5pxnDU",
  "key6": "2AKDvsGKNrdd49MsYQWsrY4m5fdd3bPRP4mwdz8RRwiStMHG6JnrsTVfXRNgH4mGL49H7WB194zP2CWey4gRdNFz",
  "key7": "2QCczDH8EZkzjKK7V6XYsDSHRTKNw3N9f5rpRYrFi758g2iuUpXM3ypPgczDezTHYtsoJksLaAmTPmJunCK3T7Wm",
  "key8": "YpyzkNyHfFXjKuhMhLFVLBKVaZ5R943FoCMW7ByBJ8AhtB16FQe2jstFABqztuzjTJr26Wy3PZEuxq8S2K6MktQ",
  "key9": "2jNpyQ9zYm2DanKLqqJDEPwG6x5nFhyag46xRLmBp2uG73612779AhWgGFCYfkJrGzjTpGcBHMyQ1riQ7gSXtvzR",
  "key10": "5qKMiyFCc3MSh7wzrTVjjJopHCwMom2aYUEQk5YvF4sh9zGXVz92s43N6E9N5YFuWurha4t9A3PXkou4jPVf6RMh",
  "key11": "3fnf9JfnWpCQj9c71J4fonQ9G18TfVuSKmYQbZS2h42Xt7EtGBK8Pk3bWuqxRGUek191zLKuC3d1EX4Mr3BRABVS",
  "key12": "21LAxRPBMgjUvzdSxf7dJjikeGjo9ZQBrHdpS6B1QotmZfPenfiP7RbYygp3N8jhu1Cf8SgS4DRgpXT9JUQsJrsH",
  "key13": "4Fh3rumqA12WnZd4hX1LeZ64eWx8wC9DbBidSLHHoNErsSyZp1EV9c6nLozbvxEoZKKbPNGfzaTdU6DjRNdbsREF",
  "key14": "2KEnA17zAUAnjmrjoMNwNgNseS7tmpUwMgscCtNNw851kgutdyVhaj8nDiEuvb72CNdYuQdhxpbhwkvkiPavEb46",
  "key15": "buu2SiC2YeaPRFVse188CjSYXwx5ZWA5aX6mbTPR8ByTyKZKwe3cTTzsHtoo553X9pekJAa2YueQiV3QMpWB4su",
  "key16": "32u9J4kczAv81jCCA2W2ifveF2w51GqojT2Xg2dnMcVUC7gF37cr24EduTFbrZhrQtvPPQrMdZHrWj7AAnfJhLbt",
  "key17": "3GC5yQWYJT8PCTnkCqG9gEnKsrLiGe89Nf2VBeHGgdL5or5CscD53XmTiXDtgU8rwM5kf2X3jHmnEALrnx78CMcd",
  "key18": "66KPvcmKh7B6gV2LwwuoN6Vgjw9VyjDxEUh7LnuH8sJqNooGgjES83i8qpRjCSpCHku56o4dTg6h6YNJ1PntN1cD",
  "key19": "2K1RnDUwU84LUKyjrJhpcrk1c1La4eJJYUw8yrNR9fUxtWsfksbXjQmyBTefnQnWcR8bSsM8pGQUyCHSF5bfNLtG",
  "key20": "4MoyFSKDinaYCTPH7jxpGonm2WQ2KgxsNKh74ySmGcvFTxYmCjfvncbV6yH4ge6rwJPyYzpEXwYu6Zb5o7nYQXM8",
  "key21": "4m9GZZboUN2zSRzkAPAJ7q79mnkN1yyYUsjqaFj5rhvp82UQ2yNxA2ZtPA1tNrGMJRUBqTygMZ3S2UdG4XfjineD",
  "key22": "45gYyQduNZFxyj6DikkRCoQUG99it9vFzfqzkP1HTYjdnrr66x4u7L4u3hUXvVXSa3vZ9KtkyYuXG8T916psgSLC",
  "key23": "2dS7rJLUeBjUva4RJtZctNXrRHoYVosbZgt9krUEpo2vaYt8MzZeThmbkEFSW1wJtGuantMD6mtwUsCKzfa3hQ7t",
  "key24": "nM69YNx5EToHoFov51NYEDE5yJhBXSj1zaLm3Ja1Q1u88hHMLZ2uxEXY4cFexWWc6z4vSZXBmQ968qaSvshqwkh",
  "key25": "3Q8VgyVLQLc9b8WiQr5zq8tk6JrAaYEhZr4vro8npjukMRdcLL7h2zeqiPDSVhtTd8pFsfgpqbCYKGhyUKmPek4g",
  "key26": "2kNBHxvJix4otGPDKVYETHgtSqNsRoT1pMKLA5hGrXDfGRHLzCT6QPmHXrxeaWjvWVNMmbH7PEFsK8gDFPpjHCJd",
  "key27": "4MKoq4zTEL37drv9cafix4RpxLY76yFxda7qcnR1L3qQN9ejxfEtPX3s29Wu2QyLU6B8pzKUKwtZEggn9ZDYKAJN",
  "key28": "2xUgazC8XCqJCHap3XnVwh1XcudoRykBSKH4zwjmka9Tc9ochwQB2MmfUUZZpgNpJY6a9pHU2CCMegEJFTSSkUpD",
  "key29": "6y371Ra9aWTw9bL1gnCnRudLZCjzBjVCGdZ6EedtSbq3Eqbq58iKvTCPyWYnaVt1rvrvtZd3jSmGv9JJtkwCPE5"
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
