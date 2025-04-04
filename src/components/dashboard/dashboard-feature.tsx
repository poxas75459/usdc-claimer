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
    "634HFAwuRr3eBfpP2WtX3gtmqeLK84dySTvTohfd4V9mDPCsYjE3yHxRsWDh5xbpa9F8ayfBMKDCMDmVV9Q1xTar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqN66n6VTpW9VvjffGMJatWWgqDx93Y7DJsbuMiyiikYXAdopwb8U4H28cZcLeCmngzx2tEKiSnu1J8ArS1kQJb",
  "key1": "bHX3vR99JrcL81oBetnHziueyVQsxunjdrKUrLzk84DW5hGGYdtnTmMuy8yDTuB7XCJjA8YpGr4uGpPKTNdpxXN",
  "key2": "YRCnKygDjQCV7eQdTFjFw5EvtKytHe23NqE6GSJaGmf9eCeWvrHchqejq4HFnHxGgGmNJpqpGC5RJa8i1uLNANp",
  "key3": "559mCgTA2xXAFtTJsXSqySnELe9Pu97jRNPMC11agzPq74kUoMvpWkMEnBTeM34F7yGfUQaFZariJGbpVySx6g5x",
  "key4": "5NSvRzsnFNRKzstRrAcsExaXz7vrsmyYSHW1RJ3ygY5mvDpuZERvyqjC4kMYgt3E9AdAYVxAXqjir3E7S6r2r4wz",
  "key5": "3VYGzi7CRVfdjBRSHMRAhPgycX5YAoa9bVaBVNEerrizN7gL6JCAxytRTmMHKmLSB1BtHxoNx8LjJGqsi1hU1v51",
  "key6": "4nHcW8WVfBm8BZtAHB6CoTLfcXjvK63PDZ4nfM2ffSBqEb9gvQoDc6jp3xAkBYNLg2a2wybv8tDiTMPqtL5V5CE5",
  "key7": "3L6FDSQYd23AFU6duLfBScthTYdkSmEofjSG4aNMoUVwmL28ASxthLVF9bs6S9qFAAHxy2CxdFwFZnYfigJZ3rKg",
  "key8": "46ShCdFQq12FGExhQmxUusdLB8zT2FqUuz7f4MZcVK5LvjkCJSjpVWsP6xEgCv8qFfKtJ6nPK5nKMxyipSPBR7zk",
  "key9": "57RbQXu4ktyf7S48LnukfZNsTwyAL4xQQds8NZBpkFwca21pJShRqJxFDbXB9gizQFUdkEgvxWeB6yfm3vbEpJvW",
  "key10": "yiTxcc4oroMMxdmCAk1kLhjAwECFL92gbhnxrzpQsrpwe8owwc64BMARi2WTMNAQvFXesvMvpJPd2GzUL1EWBLU",
  "key11": "5RDrXJZfLqnKK62mF6nMLLL2xhRi6KChtTGmzJ6WUuzbpWFGEsrZAZP9Qo1MjqjjZixtuyYo3CgTReDEcHwseqjH",
  "key12": "372iCetTHuSzRQgc3LA1ZvMQJD1mCKTv6ocYDGznHJtLSZKFsw6t1TfrccgM55Z9Vpa6LQDpYhDwuj7BDtZ2hYp1",
  "key13": "55Gvoox1iQKBnLvfAFmoEnExyQjBoowFQLEsLb67yYTrdC17fEEX8hg9DbBchZu2kTAp5opPrLTCow9Jxw3tfKfV",
  "key14": "3EcWjqUfTsVksXmMT6pngaJfWvYgkUbUsd58oseX4zX8cxFbqnXujxSmJxci3WwmhGe1Kr8atMGxsYSTEpYr1ycZ",
  "key15": "3m7MBtYrYtD2fw23YcB6znHEzd54SrNa93x1AxtP2XQrxp6ks9oGqqof4pyqfzMyEdajTfts4z8pPJKHPghzuUqh",
  "key16": "5Yz2maY6e8a21kXZMJoj7gS1xiuF7YXnxV8DStQEuwAg8bALZ7iQfuLB4uah2zs7RtKA4YjBK2wK5NCwo7c2GY14",
  "key17": "5hEopZDybu6W9nGyThFd41XQLN6ebRUsTbq51GxZgt4EDrNHXmPfbDjYnDpXTNnBhQvh4fgVRUpkgU8B1MqFKehm",
  "key18": "531ikK3ZbAdTHoCKgTbTaw7S9ncif8bkSPQtJdKwcFH879NoqLBgvwsC9iqRyZjvLZntnD2sKEVbQcUSvUbeTuyg",
  "key19": "qDez84R7jTovD2VwPFJNnpSFR1hCgPZ2v9cifUNPDdZyvXnHAxzJ1JL5shH4w6LKThnCadMH2eiKU7Uz1Wqzq6w",
  "key20": "2CyDAbCrgekAgmHazEAN5P9ErzjVyFtgq1jFiPvoVSvCGyJXnKV2m2xweUVeArSA93QkA2vaLBWQFiGqSkR1WVav",
  "key21": "5BMCYCnuY9SPTrtWVE8bEV3PinXgBxnvfMdyBzPT9QQYThY3b3kDQ5NVbvhjJe2QEMUJJjeZtw5SXeVdyqUY3f6S",
  "key22": "2AdUccQq2NCZHnNf2pp5QRAvM1WRHcLNWouHZASSZF1jnSPDXkFbAKhw2fN5VCRZhiNPm3sTXbWsUBSH4DXo4U2a",
  "key23": "3S17qjhocdC68nHaS8TdhXvTEPe86Qq8o53tDvwrPm7AeBvfEz8bWZFVvQS4esDFEYHUQSo6Nj7NZZ8Wqgqc7MdW",
  "key24": "3WPur9b46JW9MSCM6f5YpEjVoFViYveKwZfLmaLee46ndkEQu2j63j3pn9379xj388R2LwTYfM6894Kx5T5Q62GD",
  "key25": "dDHCev6fJxgrTMUnmTkUtWXAoyp7NocxKo6ytCFLfft5815pbRrgCaKS2QJsM5pLj7APcrnvTHvtMeUi3jxvcs1",
  "key26": "3Dj8CWAbDYYAFbEc8JK5bW8uEcyeCpQQFSCdfEs7v1WdzGxweQZFNVk3cCobrjxe8VWeKU1AuiF2YvDj9vVX9dR9",
  "key27": "H1MKgSg6MxzPTm5EwjxVmU3K3oryuiaAPSwH6yzedTakFYJqiH9zJR7ekWNnWGHJ7iKnmT2YfSjurDfeUxCXC2b",
  "key28": "3NNfduHqe7MpHR7n6pwFjQPHCHaiZtTgDFwzUw3ddby9xxqLxpVgL6W8SUXZ9ztYNJeCmWhZWPJKLrZdzzSgpK3v",
  "key29": "62N6EmsvoaF2KSjUXgph6nhvvBLimRBYxLHeWP9ndHofbnAgp1CTSKNNADqFFbSSvRsCyrXngMRtPn2athHtxKJ9",
  "key30": "7BG4ppofZcRDeMt65dr6YG2EZw1m7RXGAXEQ8MRXpvcacmPNzY7VvV55Ju25URmFmHdGV6yZciwbf6oafT227uq",
  "key31": "3GmXmj9iXE2DeUF2nSDXLyB5pbcYzCp12nbypedNqHSQsfeDT4uQvkB3jEgAuZB99Wi6bh1n6WvfQZT6DFPwnVqS",
  "key32": "3DfT635qVSYUZpvDA2P7vvCpc7adfNHaKiSCfR1osKtN69e25SNrZM46Cy6CLK1k3tkMZ6q5C6qqG315LfvpH9us",
  "key33": "65dSq51jvHw8ZA8NxAYPkJ4fXzoSaZ1dsLqzuPYqteEscQNKB93NCUKaJoqDS45DU2tPGBVtnPerg5N2LKdth97U",
  "key34": "4Rxwz3EtaGg9XTx9xqxJMdFZ5MGkKc7EW9QRP2mjkwzjcXSYgFG3iWF79y72Y7aAfhTEgCtHYy4Hgb952dxvsxoT",
  "key35": "2uwTwsM4rZhANEHUyH2GxFEfB7Qxw1mniYUmCmbcyraZ7voUfc2HmgeXwpWY5y66EfkJvXBCCuVV1E8nYfyZVBW5",
  "key36": "5YMLuvmiYSf9zoTRfZBWeCbPHJrBDoZC9cw8TNzAWythqGQtXqiDriu811dK69ubAqcwJqVSJr33Rp9CLcLe2piW",
  "key37": "2gzJX9Wn4ftTgsgmWA29CTEP7vHa8Xs9CbzsPA7AgPZAguYLWBWrN7Nd8MYRTKift4A2q9gm48qEwjepQauVEy1R",
  "key38": "2NGmVsCbzfhTqtoZQCTnjgdAYb7RhiVau8eY4dSKDYeY1ZRMSN95sDuAQkDBifz1db4MTqHMQ5sdrHfW4CVMLtL4"
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
