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
    "4eJxoZCkJCExqdhewEtQ46gMSdELqJt9b2zjsLRkVQ47FkC1eaaExRixqvxAUUxPHEWTXFm2TwGUdjGHb9s5xh23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cS7Qr5wupwZJJP6SZJKymziu9svCBPjmUMAMK6onn5dXhskHbbAMb1oNa3QRZpk6G9KKRzzBeP68BqGKhhD56X5",
  "key1": "2jYEHGxhBEo6BR3eJysuCD6Xsth85UGoVwtNVu52D8YbnUDd3fZsSA9gmGczpm9h4BU46diDmpdUhLzvNPEJnujj",
  "key2": "3qPkevWj9zoZxR3QPxeMwJ2gdbYfbxC41zRZ5rna7cRHeqzCBRRUuGSpH9a3tmnyrkrH4udNGvnxKN1ZARGEfRC",
  "key3": "473BPPHsjk8DgadEh2Ef2qJnjq2Tw381m5uZwHLVMSSpUFUZJDUJL614yMcjUAYCs7cSyLyLBm9Qy1bdbVeARZvB",
  "key4": "4PgxnKuh86TH6BUBXJFPf4DoMsVXjhtcTiFvGhLSvgMhXfguVrBVcnhegZ1Jxi4hAwq5qnVsjx2KziA579jBWbAs",
  "key5": "2Aumwy4eZcb8ZXyx6heNSA71tkXKxWLcp7nYgcBYhgZBDQoCKdUzW9AZ3YstQcJsmSScAA4eEjPpQWuCvrBWziF7",
  "key6": "2k19np9rkduyttC6c2RMnNaHBkGBG9EABLdx1BJ3mPXZMu9NUJWJHUKjMDAygAowN8D68dkqL8pC9rReHkYYitHC",
  "key7": "3B1YsJgtm2gF2sgHAZY12hkw4Made8JWa6k2rscsonfdMR542Jsu6gBaxKhrMZuzJTBxHCpi1ABXyvm1M9xMy9Qg",
  "key8": "tLxLMpbMA8N1bAo7ZBJzjAusiJ9AhSHe5FpoV1p4yJCm2gkkxrKiRmNwets2utzBGfYBTTTvq1a2BHLe9r4sFWD",
  "key9": "4cpuaXPLqBjuXV7A5CpMUQPopjWkVvxP6BiJDcENto4DgL8faqGMtZLhCbPHDqPz3yCFVoprM37MAy5W93FZZQKn",
  "key10": "3Cc3dfkMm5yBdZykkoG85X2CUP5iFu1KEB9MjJF8QVcN7W99y7gN922v67zByDbKPaqMSpocyrBdNT8aAqeKT39c",
  "key11": "2xt6G895pJhRiZEWAFehz3PXKUwz6iwkTeww1D7zXoeed2NCAhXGYLjo4tHNdecZiwhz6qscLVKzvnNcZZxtRjt3",
  "key12": "2EQsrowqcTbwswFZu8oG3fQgi7qvP8LHXyiALW5CKvTpDkNZbZDFAJqPJdCuT2ftDBxrLwNmd1vuhG92dmLZRV1N",
  "key13": "3f3CJYgihM5N8AXg6nnrnX9zQM4RUJrDQovqjyc2B9tvCzt6ANog8o7WN1zHXtBYBuXjimA4Y6xsvdY6iCvVhmFk",
  "key14": "2aUg8umYypNR2nzkxuXJGZXnG8xJCbH692J56rMWdzAJRsxYRBVj8RkH8hfreGb5swKCb7tZdJ9SqU3LR4hpwoGF",
  "key15": "2rdApzTd7qBR62wBB2fTwZd9umJNLTJfJLgJ32q5BQe4HPGdrKnKagcFUtdC1ojeWUShNKdMpeP3DCyzUfCsCG68",
  "key16": "52CMDNQSH9QBkmQX4e3NthB9ZgG3DZoofgh9WKLQ7qBWKC84yXv5YSmyB18PW9pJHp2RCippbWsh5gM79YV4UDr7",
  "key17": "3dpiHciasoo7GDQBfCxcyKqPwWNwSF4xU9XDzq48Vs9tWSr8KoHPZo9vA3quYNrQBrmagD76NsZqpMHKUeto1J9a",
  "key18": "59TUAPtDf9W7Mmz12gB49kwNw3rfqpNXyR75cWjbKPJhR4mGpnrec8A7zfSSE8BwsPEXwty2wxJ2qYJ9FCSWXcnA",
  "key19": "5SQMEk9CV7882Hdso3DDVaK9ho7HTBw9xiafAQWknQGveYyxwrGhZgPxFhfLNXEmsKMiZSLDN9Bd84DCagFD2xFZ",
  "key20": "33UUY5qQL8aWbSQt2yNMqHUHfdrQV5XhwUttPJuoSmuuyQcUo7BVSEXAxirR8o2pfgeoWUFQP19QFSopJZptExUt",
  "key21": "3n1FS2ahQmv7xdf3S6XNyntVTSaRD3wdm6DpKowMLmbS4HunvBJam6cEpE2jzZBfy3hNdtAhUcMQGxa85ZTFVLzD",
  "key22": "sz3AbYFMWYVVDbbA9r1134Dgyu24ewdV659th7MWVAs7KkT5AF82qfYLRc61skBGYeqQWXuXt5sMjmzYP7fYZ2F",
  "key23": "4n53AVEzDKw5qkYMomPLNEt3EYqXCPbme1pfmhc55pTE7eLLNa8FiYtaY1WtFSE92TcgZzkdW48fNNuZMoaoYKsB",
  "key24": "522kbREmKEpgwpj6horbKJWAWP82sEUSpKEYAjdUMcQhBA71fPfE1v4UdjcVzTPrVSqwX9uuKonaH6JNDPpxhct4",
  "key25": "4TwX6xziKAeEWZUtf8dUkV9fHU6xzN98tmjdPSVN5UKYjNkD3VHV8qQjbiTbcpXJw1HNNWuzvJJ7h4EU4izRaFsg",
  "key26": "5BHX22HZEvJ14ovdGb2FfBamdqt5xTCbppnFC5tqrRotc1DqnpvFk4m1jLb86QQ7EeMTs6eDart9Gu3KG5vjJHD5",
  "key27": "2gCJh46MUzM7pc3AB8sGALr8S27JizxvRJM7kozKdHLdjd1PTE8DqB3u4J5Kz12PbdsYnUTMrofhWuVdMYAswXjy",
  "key28": "226h9vCizem513yP7pwKuk3NbzDmUimTyyZZp2LkEKw7hNjN1Luh9zV48KWcqPXGNfRQkoQDv7AGDASEu6un3cvs",
  "key29": "4NYgGfc3s1ixU3rFYvoBuQbwX9D5zHr7sifDhtBKy1MWRZdiP5Gxg3MmEuVypf7QmfoZ7prFdwdwAaJxHtE56bZr",
  "key30": "5zxi1SYNxJ6W3KwWWWUQZ625ytsTTXQC6cNmYrVyJ2rK7LjQxKyK6V1p9faHHb72Ziq3Y97PXba2uwYgB8kAmy4",
  "key31": "QVg9C8rE5YPmKyzrjuYmyZ41QcsPUaB2NriJZV73qJLt6HBJYnjP5di1QPPunosM7ZDuTCNmDtptsDvZjeajyw2",
  "key32": "4kgjjzo49Jqt6QkcdY9Euvcs9SfXPutHnnbU995K9rp4KpPcLRYLks7Ut1xaX3WLgHKpdpVQc9bpiMU8Qrq6EmUh",
  "key33": "4RNd8Y44GtSdi6KipVokCFG2dS7yqEXuTvoTscdeTd6BW4u5DPwEwhbCi7XrqqMKxoBNitTrUHJefM6QycbTBYXG",
  "key34": "418Rxrciz7by5R66uK1nJ4YctnqGry9GH9MWksC2Hk1r9bkMAg7pWvJttE1UWHEe43WTWfoxu4uqNjqH4Tr1PDvq",
  "key35": "3cWt7pew2QM88evk6CUw9VzWaeh8LjnhJk4AcaLHcMoMV9yerLo1hB2f5MmtbMRxUS1ezokdy1axpGiXjixPY9rA",
  "key36": "5Q5K8JqQzAc4iRErnfL9svkFjZ22Tc5x6bjK6HGCuLrKK2uPAn4JmaK9qtukCwtCwGrnMY6bbzTBWcED1RmBn1JN",
  "key37": "3JvJpQDBQbmj6P4yr3muEKMNq8obW46npY3vebsS4WgRtKY6h6kAEhrDFAFPuSiVBx1aDScKYd6yurX63xkpLan8"
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
