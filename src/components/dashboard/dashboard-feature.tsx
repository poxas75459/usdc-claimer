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
    "3H2CAvVSE8hwTXgrWoJkmdBmYutU2nmVnJhA8EtCyuivEX5vZ55gBUi2R1t2yijDNGUzdQ4kNU66D1sszStmdsx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SEzd25LywN7hJRDCCim1JMDKfXUkzMSLDmRVM93JBwxd328BRxkTaeqS3UtixSfePGaP2YoxyVBTpkd6y58oSX",
  "key1": "Ymvcxu9Qw1mFsvQQmu2APEgJ8DP2hZeCinG23gGBuFnJSBVwPip2RH2oXhGkoiXmnrtUfCUs9WETdNRrJnmKdda",
  "key2": "5AS3jJxCN4m2tx3sdk16Ti1rFRpdRGVSyJNwok7YEUqSBncKKcJGyZJ1WuMFWqRhbuirPKEmXsw6FTJv1XFBhR48",
  "key3": "2bRceDMvR14DAWzMiDfidY2bF9FwKApvLmAZ2Fvemjphgn9zcVqouzf4CEmvNN5LKrapdDdRo8rEwiuTFMz8FvaP",
  "key4": "5pzvwfTK24KH3iw9V8VQxoanLHKLavR1Zuny6i6TCRqk6ncfxRbFdKJ6ksQauuGbvz6pFqgzgnuncgQTbMAv4Zwv",
  "key5": "8ty3uXEKrLHgYGwam5H4ywEiSi1ZWESsyK7HHjT6pNE4QGnBkrRjSvrwCbDxUkT7NP4TH9wbt6vyHVrkV9mceGK",
  "key6": "5dRwTRJVyZDohBt1RHpqNHyjVy63ZMoAawinHiz4Awg9kf4rxGdQ2V3zQdd8GhfAZybuoLDtLPFZUzZhx8rjf8Nc",
  "key7": "2mcHEi6XXBjbYPtQaQQqQUcjakQLf4N3wC6ceBymoepEyZKAryKSE5BqwfR2QokfGVDRwkUrHyA7x2YLo6CepNWs",
  "key8": "2XrhKAaAoG6UXCm2ixNfMMynAma2eCKdNuF9ZKdGkjUaZkvQXm6iyrF661igbffGUbksf6HjNpbif8s67bwWjQME",
  "key9": "5NytfL6j89VXM4Cv2DSBnyABdVxZqDEDq5MbgdHKLAKYur9BDHL5iQV9gGmgR1uLXsMKzFAT83VsZucR5FgRnUi3",
  "key10": "3GXEZ93Z8Aqb1JGZ15HYCGRBjzwEYvFSSSx5EVXd3Ykd1dsAhHz9Q4XDcPphPZsvNW27AGoYBeLSdKRJfS7U3Br",
  "key11": "3nDTXmgedCVfRP3PE3J287J5TXdFByY6bQkdkvNx4EfNpaobAaZ1FfWzc3Vx5GNgH5w4pvL7dZjVCqf3qcEu8CSc",
  "key12": "4U3rwDoenV2LHoegy7BgWgzSJQT8Nahz93fXUyjDUR6gPM6mE1V6JL43FeG948RKsRp59tN6miN87YWfsRkjeq3C",
  "key13": "62FnnJXdZrJvhtjWxg7RSCeZs2YEYzceThCJFiTHboVQGjFnB121xP1jj9tB6kGCxsPCtMVFTGHShgLmw93nTUbY",
  "key14": "4e2uAsoXcqgtZgpPsBXNvfeRvG1CvazF9386FqbkCD4moWGFt2dHJeHrWP7ATBLncvujMLHcxsUwX5SRS9N6rFDV",
  "key15": "4ZE1tWqKNUd91JbUZtKJ34TqvRNHNaecMABuNi54m4K8F3aQjzue4xnYuS2hJXKC9pcJngtib2TLAobK1GCFr8fG",
  "key16": "4rdFTJg5jqkvsxaqU6XJpTEPUkAxVnoq6vSNMmD2tgr5sFPhpKFb7GJRK6614wnDAvS7caPxGM2svCjwQ14m48Wm",
  "key17": "5gWo2ThHjsDYFiFySMRsuJ41vFuNHLzBYEcdf49KUCpfCWVGCjhczTto5edreC6qFiJNEz9fEJiZjTJAEMbiXKf7",
  "key18": "3CwZBU2UZU5e9Qk26Rw1KRay5w9pHYLGojmqi3XQTQMQN4v5f52kULpwTvH57SzzfNn3XBXvR1p4MaY2ovgGEpzC",
  "key19": "4kDKCmZfAsfFUBnHZk6f6eqZ9i1oSJTHv1nZNZw9b12d1S3j75prBqm4bnz34xjhWUdzTWbV9EPx1wxE715hf98h",
  "key20": "3m2JSuowfYaKia7E1QB9YMhnLgKfuWEytS3iDwt5bXN8vkELCRC3ZeRzRzWK1BqEyMn5xezMhbaB7MzoFbsTqJBW",
  "key21": "3X7ao2b7FMSjgpES82RkUCSh1j7kuYHBMzc9pFCEcVgSW1BJv3qrGWTBbDof3JV9uMctEBE7m9tULYD9uFXc4RSb",
  "key22": "9Z62VcehD336ozkDgYXEYDAJyhv1PK6Fhz66m1KnPJXdTbCUQt7tFxHmjAtSGvFxkJEE1ReTRiKuvQN5Bh5gAnX",
  "key23": "3TZUiigMki7TLweJB9KUQMwCXvCHsnj3uVcCWcBduhi2UVAeWFnifzCJxQ6Azia11Sqt4cGc7bFnFkAt15ZR3SQ4",
  "key24": "4vsS8uKpuSCKTvoiS5cbaeNTuhoNy8JK71o23HKH2fCptWoJGgR3jQKjCoVJVHXRc4ooRhRcZ66ZHbDTmovaxtCM",
  "key25": "VQeKQFF41WJA8pUFhQL4uxGdepGBzyQJ71y56dgKzPFymMQnMhsLpyen3q5utAp3NzvTSTgHjNPf1tWm1scK8JG",
  "key26": "nty5QV2VDEGHcDwkyMs3AvanL8c1D91hSkPRraVYP1Gy2h9dpVCmRnhv9AugBao5xgsvcsiDcttzEjZAH2VWSps",
  "key27": "4jmCfGfjQNBCStB9ceHXY5T8Zmy3xo1FLiBMixQzcA1aNX3UQTGAGRwns1amP3oVDbpw5ti9TYmHKAgLFuWJiU13",
  "key28": "46XYoV4HpqiqYqocYfP54P8UBY8T4XXhc5FC6e7kmM934d5mmbSvzR79iY4CSDHAvbe3oehKNRNv23LvWJ1W9fkg",
  "key29": "3rgqFZoHcMWLSxsUGM7RqrQvWNYjyHteME4rDLLD9vnbaWaqQekFng5RnrycZbhb15FKtVLvk56K9MsnN8zvMwHd"
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
