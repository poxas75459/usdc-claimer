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
    "2AGGQRMvbrHBpxVyXrHRJF1rbVi4U63ZTgYmoZui6XLkUpcBYgUsacLs1vW7MawEufhabGyxq2QXUsHR4aDYx9No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZNUvUVm3YzWyGzwVKbYTMkSxgQWcomU6DEmYBD4hF8PK9K611MU7PbqoXBAMiWSpGYDiGtSEctzvzNSjrNu98GQ",
  "key1": "4uurtDKShKYjhBgkippeUNuHVL1T934yAA53r5sbc6eE3UBNYPzt4pKSwZFTg8S88xSBN8QP26qmBxMuug8b7sK",
  "key2": "4uSiZT4MmjFGQwhJULUSnAFnJG9aQHKLaU9kvuWmEvQkvn6Ac36cD8qHrLpVi4VAbF89tUZd6PnHX12DZvcah9t3",
  "key3": "8GCBhzHfrY5xgDyKKsvXdfcpFfjJTtHFYHeCcdTrUnNs8a2nbnYvANvRAJkyf8cgesNTh9S4maqHBxz6Zos8spr",
  "key4": "39UWtopsmdSPap7KQ3ukKNJEm9M2rgo7p35q9CGJMYvx1paNKF8deENabgAAGc17corDkNJskvhqGXagUXsEUZfP",
  "key5": "5fAs1EYmV8iLUKMoSa8v5BYAcMF3SETx1gipVKCd4bjH1pMoLDhHFHtmZQmeUuWxDnghAD83bdroxUTqU2C565Mi",
  "key6": "4HM7Lr8gn7QibNPkaAmrnezqiBLug46qaxmhSH1sjUBqpyFndLe7vuHVrkJKdvWKK6uGnrDgQUNgNXPQ1T5vrLHo",
  "key7": "3ivNUrUz56JvpB5UnQbLshvnMcT1exxWgmQFVxhVZVSpt4mRhJr7Y45U2FqGrLc3PBDFDb7ZzX8rqSVXZCD9acxm",
  "key8": "58kMNL3ZwanMD8nFBRYdHkwMoNd6ogcpK25goKQUSJeAUZMDTwAAcRjv5GWcFLFwCRBafRH2ttiqyqRArKdhsRy2",
  "key9": "5iFUVdf19JL2DUWEKZjcGt1fPza2gqLaoC69f1SG5RBrpJMesmiRvNwFjBsZ1xfWqbntiRVJxbBTzP4NgbDGi1eb",
  "key10": "43rUxA4t45fohRhUAfZvnVzo83qBVPoSDkMVFJ2b3c6abgEBiKdWmfVHmsUudKzyF246fUScaNgEB5faXfmq8Jqv",
  "key11": "3b6FgamqCQ5H5xsLNRThYjf2g6M59piVxTnMXHtVAmcHhmj3BVWzaUfgVpXFXRqnA39aBs7FHgg57nHP8ycjXGCL",
  "key12": "23o7eh4kVbUQHVZGQ5SCyoud2viDP4XTkgFbqtQqAfSRtizERWYk1u1NPzW9F2R3S3MGisuUyPZA5baMAo9e9WWR",
  "key13": "4tYcDNi9DoypCEkjyJgiYjhuY1DNgnEew2RQPg6DBv5ED1q8wJs4CWneKTUP9bqeVq5bNi6rfTQ9z5GK7D54cviv",
  "key14": "3r3bAUnRoMreUD1oTmgv1ZsR12KVp24g2U6tSBYWhhAdGnxcGudAJcARo7DtdQ3UK5K3LHXnnoNZchXJ5RcMBqJs",
  "key15": "3ddMS1ipRWujP9gTthKXN6YP3hFqG4Yk39Edbg9Z9zEpWPybbSbqDDFVZaXsAizgfN7CEf3raTP37jn9w8YMsUGZ",
  "key16": "4m4Wy8T1Vj3s9VqRp1gnrQE1vm8nvPdcXoxbwkq6TyXdDhcRgsFdUge2CWMFqc6gWbV1G9rdAE9TtgrdGoZPe69U",
  "key17": "3tm9Uu8sXphoaUQLUQqwYGEm2K3XkpknTjDCf5yRPe41MFsnv251D4KQ2pSpqJ1N9nWQWUYkma5Z59KCKSXZYzyn",
  "key18": "2j597CCSQydWrB56CXFUkV9ossgVyR26QuhoZUEnhrD16JUAhZXF7E5aSW88Tr9vjfsYk8fTodMHnhCKVC4Z53nH",
  "key19": "2Uz3GJFNhz2a1hmrGuaBPoKdcuooVKkpNuHqaGYpfMxRVGVV36A5kHeyGmogzhL1jdZaCtF4xS3ffh1qEwHuhU4M",
  "key20": "3P6YcsAfwgL69DrQPyoqpSEcVzT2dqXRsxRCu8puB3t9Tb8fhM5zLL1uS6K1qKjN6oPtHaDPNrgPQzpCejTKT3QC",
  "key21": "2KLZhN9ZeYPUQhfxJvxmEUWgnJEWGLsVkhzCV6CcsHiESpx7STGbRxuHEAyiBHo4dTMuMtGbjRhvkZRkVESUUS4F",
  "key22": "5LyHaPnC8T3GG75KmhoxMNfQwZQ2UUnkYHwiFYhyP6NcXNPdM5YeS8HDbZftsRTKoRJKpUkXkmvuVWmC6WtgLvsR",
  "key23": "5isiQ2unNo6YacHAii4vdDYor4H8hSSm3bEh54rMFyrFEHZvKW96si8pqKFEARykFg8Y1tAA34KFufEGJYhF8DUF",
  "key24": "5Vums4DCRkQNBU1fyWcdZXx4aurY8hoUCgn4rxwuqENqEqFnngHXN2ZW8paw3i1Aodr3yBMxLmujVwaVfUqpy32k",
  "key25": "5TW7memuwgriUeoL4Y5WqvZFpRncr3N8hq4SR8NRMqMTqw8JpJq4eZJYqSdRpKx2Q4AmQgkKspRoSujooNZ8aNLf",
  "key26": "5mtCCbfRtdWv1DiurxcFdefXn9uVmt6Gdr4Ggg4m4Z1iau2y45ksBCZ23jhUuWJkUPjJ2fscoUkd9WRfNzRc8sUG"
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
