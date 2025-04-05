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
    "436QebfA5hooE8LzsjyohC2LLq7UpWNRgfJxPkGUxFvawkpz7EKkSYupCn6nC5hofhu2Ymu5GHffdrngB85PBJGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6UHhVPobUp5hRTfBokRKSPQnKzuGVpAZ3vRpvkBuWPAhKzfSCo6PRJtQRUF1nErPZVS21ZHj1zWV7TP9wJ4KEE",
  "key1": "2R6U3TQ1E7Ughs2Jd4RYeu2Ji6WvsWsGLcVzye8zNeGJrGigQCrU6XRkfxP4gyeYtkvVNzC9tRJ8StctrnQGMMg1",
  "key2": "4a1a4HzUUFxoA6H1FRdn48bQzackcK39gTqghfhtJvoXThtPZrUWtvtv9LKNNx6spdUZvDpemL6qxXrjsNAm9ChJ",
  "key3": "38Assktpyh1sELR9RXB64YgZ1QWpb2qLHwKU9FdA2TV6iU9L4t1QQkSuBvZDjuEabcWgdknbBdzEyvg9vNMozhrJ",
  "key4": "V8qSfw1JdD1E1rrpJygUbty9Bga588dBraCk4j2gbvSBP7WGSNnbQGxRNfeaEyURjKwbhiCy8fRcQi6hQqd86RX",
  "key5": "39WFgfxMzpSY2pa2FELQMR6Atrsa2ahy3AJewB7PX31zknQgQS4ZkkNk8jDi5mzSmJZCEKFnbJpcLPyBAbzukRXe",
  "key6": "5RhUnrcf4BPnwntgwnuQjvdFGjHTXqeXWVzNwSwUExvrsjB5Swc1Xt82xL3PeZ2kizLtb7im8bgMsoJfp1KhSiAd",
  "key7": "5qjo9EPfH44gTJ1WbVBCuDcm3VEeycHnTxJettzCYZDR6neEWJnHGxqiwvRoZ3bUSAFssDCMWNp9DTRTN5Nx14MA",
  "key8": "3DxbBg8DJcRxyksj15o1RWzQAva3ARuhMeUVdUVmjsvH2BHUiFWCErS531SPnizHVEHYQHrUjoKLD8xCxBwLFMAT",
  "key9": "di7H2UuVZy3VhSFD4peBh4qfKQv3kx91hpDoTr4wi6rt68DnBaz8wY72pmjS1Xzx74EBhLNEHiEaJYBCSqJmZ6v",
  "key10": "59Sr4Vo3VVZj6TH8f92xinDQ8YHdcpmtimR4nX8Hzj4jixcV1DkkEdwfcamxsqyo4uFo8QuhrvC2VFpJi8eHN9Ck",
  "key11": "52Kjor3LoCVqyZ65rK5YfDeGG84jaTfafyZFoV8vyQVrscghAYuk3ErfNQ4p6Ghq4yk2KGdtppEDcp2HoiCTQmEL",
  "key12": "U2U5fXiVsuVAERFra93zEynNzVezXhD8UZtNNCogEzy4XuULQoQZ2vmAkgs2PaMaM5oKUetmQnGctahmSPh4yyD",
  "key13": "oFpYvei8JSPorgTtxtddNt1v6vD9iKqiqKcrC3oDx1mJeK8kAA9gSYRgRsLa2TaX4TtnGqqP8ckB8GrsXd17Atk",
  "key14": "3R9dZv7rhEjDtGxKWck7ibSm9qMWkNg8q77zUqZqbMCiv4KWQmwqEt2pbRnQT8tP2XYVhyUxMNqe3xEinJ3FMCyL",
  "key15": "Dk1qGir66itK2DzwtUwxnBQCSz6kY8EjpasgDHKLanLPStK2ho8tJPXmXBXBk8yPXP55jLd9hqdZtkU7BjMk2XC",
  "key16": "7qMeZ4ojWLBvGiFwYXEpy46NUNnrJEzy5u2zVA432gdGCwqbvakbxHc6zJL2aiH4mTZ6VEyntiy2kgJY7kDN7eQ",
  "key17": "PD7bwqwWfxe9HQ9RRrks3JmKMZiwP8SGNUhYqu8hBjwZ8bxsUuGFNR4wW5HDnMmriDPR78LAAnJNrb1M26VgW6o",
  "key18": "52EJKCBz2petLJLBzR5dPk2jvecMTCMGfGFopYJDFjAikZwKh9iYfrVCHihwhJ1kyXtCwitumAgZULWQcezE5Dyh",
  "key19": "2k2vKqbRrvoqqP5sF1zdqzFu2wmQ3tvFBajyGiqRJq84V6U2cd4uAunLzLFdjRcSZGzAoUc7KBP6K3XYTDzcmRVU",
  "key20": "5cigGe77vRBxN9AsVV2oS5dodC3MobQf75jcNSS4WZxboa12EZvW2DyFLpBnyBw9M1BGEDd52pkCVo2HUbv2Wzm4",
  "key21": "3e8yH2fFKbDCu3nsvPmj6QRfeopZjLL7qzu5naD92CjoSjijTXmzmAkVMEQTn2z7BDP9U2DZ8M1DhGQu2aNVWdzw",
  "key22": "BUXRw1YzuTFZn3JfAbt4NChZLK26z1zZthUH9GrNacDG2nitzuTLwTThnDY3MyTEEKdEg1ZprVB6EBEp9wSrXCE",
  "key23": "49njKhVXrWV6KUFPKLYaC6fmDCioGNobSLykFgDTQt1KbpbxZBjDYKMp5YLi8fwg7nLqxNLEaV4SJze8Ndbp32w8",
  "key24": "5jD9AVn5iESGgSzZgCWX4EFTyieCF3wN9uM9udPtJJ49pFtbszNzqfJivUCq1dfbgja2B2Zfgmog6LuBu8CpKtwz",
  "key25": "GbE5TC9QWJTheUPiAAZRsKLJ5cSrbCe5mwQUt782ZG51DZaLfJ9ezLsLY74vadAyzUvsLZrveeihfay6x8Gbibu",
  "key26": "5NVn1mzEHFmTwnGHsCYnyQa42hCSfGVFMH67KgfUmzHeTodN6nqv3CAXXeJXbkjMASBsQMcVi9xsrEAvCx4NTT47"
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
