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
    "4FCYPcpA1kzHzbEkqhVumthUueWPB4tBx99MDDgLeGKKiEGJVwGTWK8ybSULUCL634bLeZoxqcsvzQ6VgJEKY1y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Z1WeGPZp6ojvVTJvUcPLFQkYT7BWURWj8Nnv5P2icVujj1TVLmSuyGP4fbfc6b6fJzZku5w1VF9DHYAwjLE1FM",
  "key1": "3rsxjr4WUNymEHa1iB8xBUeXzMNxXVKJLkYAHTZgcKYDyhWgeoZ8VdQ3wNmjyarF6Z2ywMhmbGXDxuZU5pDBbETo",
  "key2": "CaQBHXWCvaQY9mMQXLTaHrPYaXecU2mCKzxXo9h7rT7k459pXTa3hEL7SLHgTSw61nxTeuuSvA5PRMAw8btgQC3",
  "key3": "4t2JAmcpzViKmnGK9naEXZL3hvRWLxYiCpZDzGqyuGauQxqqcxNAfg6MqocWtaptQS4qRNBxc1SJ5fSnLVfEFn4n",
  "key4": "JxxLJxrTU2B8s5TkpKMt2SDcsXrLFT5q8gCn5DA9hVrCYvc2o8GYsRMYRiJhTywTWSBQ3kDPfxA7E3sVbizrAZJ",
  "key5": "8H5aP3Kp3xhKnJK6vUAb3W8oHKydX2tu5ZNdmFNySwKLCQ5E2vmiT13xHgcBEvMvLPrwDvYgvDHMpqb6RUJxp3M",
  "key6": "4XFWdGZzJ6nkAVYhtS9dWj9r3LL9dnHhZryjQUpCYgtfqDBTzB2vgsE9ZLXSk7JPoZReK5VSPWkrRcWfFjGYYGdk",
  "key7": "2yEjCDTzgcoLFQzWmvD1GguvizMW89NbYonWRxYadStnDegqVibBam9FLnRTKt32G4PeTZ2iFFnWmJgCKJcP4Tpu",
  "key8": "5Jor3DdMmqRArvSgLh7RNMuhJFYnkT4stYATrH4ytQW5Y6dAsfy9YJstuYW4tYSW71dt6qtFYxegWCJTNxusWKhW",
  "key9": "5HsQkexFy9RBc8W1i3iVeBa63z6dSkQzi8DtXZxMq7dyrSjnzQUeuxWDELVdnPu8FJkkfF7MsHHMGJos2jR76pyz",
  "key10": "2bmsnU1R7SLuG4oX8gLQaCGkJFYn11GJ8h2Saqt9WyoDr8Rq837fEAQaSGCRWMBDXdKpbn7zrg4rbQTvpmtmNM3p",
  "key11": "2pTtg6mb4eF5G8y3DLkosTzUd9FkEYssv2NkkSqFPhVmJeZVZdbJSQFoU3HMPfBxgryykDVNMabPQerCBv3SHJUV",
  "key12": "3fssCrEjhynngWRu5jVLjTpRWWF4bPeorRsqKeNb9hTfSnoK3wPsViBFKb4pDYGmGjyHZrnfkfxxe7qieUePm9xq",
  "key13": "5AWveJYr8txmJvWZsWCXpeicN1DpgPUNiiPCjbhFdBA3iQ2XA8THxu6pKLUhKH6CjcDrMSXdkoC7oaQGfcLTJ6WM",
  "key14": "BhmF81pjYMgddeYxZQz2agBe29XTzzAexnxszRVD4CjSR9rtbSTrZKM6ymQpM5Tch32iafdMogeSyyLaGmSdSkP",
  "key15": "24B5cAgzQmhkkY6xuHe3HsJkipxtFYMTdCCb3KnpvQUzDUXHxx8yfhjcC8Ls6DALxYGrKpzwaZAzBNZF7bErNk7b",
  "key16": "3i71ZmcUAoE7KccbvpL2WB3wkQXWGAbXGJbXjmVemXZTYdZaS9vVdAGqcB125JUpDDMA83FpjA6fQa2KN8pMR9Ww",
  "key17": "5WiWoncJCZEkEo8bHythSHBs9etB3iBYPnLYmXDMDRzgQ98E5EZsdXsyKGsrncbAKBqeRX6X7DnMvPbUs8a9w58w",
  "key18": "n4dFv86K2cVxQf6VhKhPkohXt7WWV33RbSAkeq6CuKV9FHUqQSWqdanTLtSzK6Lta8ZmGCtnDGaLEnuaENKnkn2",
  "key19": "47jWErxqnAnzzWwEAeV6eUbYCzuqw8Wr4FXmbZGGmPA7dpm9cakQKRLjSkyCAyPF4eAkyLkUy77EBXC3WBpJWQym",
  "key20": "Hn6UhJbX67zV83HSQQSRGDn8rUS42Eq35daPEgn9RsfXzQRwDmLFMSg8tFWbr5xQs5qBVR7v9K3U7GGLVkSKEVN",
  "key21": "3xVNH423oMtNhuCKquqscVtjFot2sALBo2G9Y3j69DYhiYnkbL9iSiyJpR9ReJD5EHrrmX2PsfuKxSd2yqeYXU1B",
  "key22": "5JvumAJ46vCkmKkZDTESsNteDcp1cNSsKY568XrqqCmaWHXjTV7FmYM7RqUT7Qj4jo5NHJ4gvrzqRz98PH2dD17F",
  "key23": "3ZtB1an2SFtvpfNno7qptGFCzoMLxysRJjGoaJnvrnrw1DMmV7CXLctD9TNQScYSujZQzgCNtrnqdBK1XUUpHajM",
  "key24": "4e5nPinmjbt9jaa68YA9KmKJGTqusqzgeTcopw9szU2oDMAD6NEEzC9BfPFJw8yPuKvUymSdvVmEUfHPdLjC2pVR",
  "key25": "5Xuc3E8KmELh1g61Nt4uzgkVncGy1zuPvqnbrVVKsCaes1VXPLjBDH3DV3Rf4kVKHhhgLdK2N1ve1ptFrGf4TTWH",
  "key26": "4Ehdf3tLUKaX3ik4TZ9VyKTF8NpnJd3wRK39oPu3fNJGnrCScVDGzXYumYMMmpEkC1cptyfhJ8RHdLHYaD48KjN9",
  "key27": "2rz5SkFzZNsE4Da4tx8J7r36Us7ehLAXUy3L5tUqhH9ovCw3ugRe5Yy6NfVvi1Dnj6nNxq51Pfy4XP19bi3wYYhE",
  "key28": "5cNXHg2iFznyuAh7UWurASSaDf5jBzpFg1b97FNMLVUECooWHnSyphGuSgaqcjZ3Hiw2YAtcgreJDZhP4W1N8fVh",
  "key29": "2D8bbWKN6y7fGhm73MimPvNX2Cq9zuhuyy1iwEsFDRJWWUTmnTNgZqDZeqgeDX2aQRoNoCwv1aB8xEyc5MgqhNeV"
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
