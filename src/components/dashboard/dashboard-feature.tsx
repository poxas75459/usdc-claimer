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
    "7pmkMTdw32KUF7oGcYA4ZDxFug6dMLu5BgEmnotxRcLbMVR1fBaDBpXDYvGXPjopbtRqrBNMAsPSU914hatzWLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwaQpjogJBht7HLgBBQ3fmqkUT6jzJoApGYKRgRJKvATJbRdSfzoJ1BT7ZXNjmayhnwTWko76iPL4k34RtrPczs",
  "key1": "3Ep7tVAngPpyxjwVXbTp3qsMjTtMXXYaLDcLWnEEqtDFXRzhkVLRgMJdGLhEgTLg9mxNfdSeong9XgCChJEcpzu1",
  "key2": "4VmZVyDRXmqRhGFSHuQGxBZFmQaK6QhAMuTNDRFZsLPwup6eeALEwEgc1RjrFd2h4L4W68ePCCghixX7pXehZGeX",
  "key3": "4LYey5GzkRWAzruWjgjMXA9qDcdB1iEsZwuekLjzM1EA5tfkHzZaoUKzK48bUN9Ycx2BC7tkQd7vLdCaJtHkd3GZ",
  "key4": "3bter3JEFvq4fsgZ997V6t8y9AHsEHcY7MFNufzPVzkyZCQnHZMya94ZHsJzGoqnYFLBVHTgiHauBMo36P29zN28",
  "key5": "46bmpU8djGc44RzEejqB6JpXwKfMEQMvEdMcPDcdpVhxBLCTKJSEYC8oPoXU9pFXJPvrQLpHuNPQZ7W9pXZQAGa2",
  "key6": "5qjhy4jHBgwbUfUn69DTyP2Ruhsg42g5EysqrnFaLtKTVdAVUft8GDZRGkkVzgkkHVykdSG5wMMKpipoYRegqdrd",
  "key7": "2bm91R7bKX5CEZ5NnnbhPXPbWUHSTXMoEhDFpSAuF6ppf3VjLj6XWzoHkjYPf6B3qdWDXxTQ4GnB5bQpVLv6q7Cg",
  "key8": "65TiLnQamnJyboAjdARRbSWyJdxcwkw821pE4SH9y254pWE2C2m1zCjWvL1bMUyQXsnzt8f3P6YKB1y5VuCvBAAr",
  "key9": "4bokzs7ZY3mBUJK9SriTnvHyFcSrhs8LQo5awhYPCpSFuXyBNC7nmxPMRWwBVWGquv3t8BKvkwtBp3dMjvNTpjHF",
  "key10": "4pR59ttDKcVoqmJ5DtXbciFKrgT8eoL6hF4BDavEcm7fL15y6G9tmA3S4HTxsMaoDZdHA7oZZ5pgHzvA74o1k1sP",
  "key11": "54pwZimpv8ppBVnqdTVxp4euLMJp1exXGuALRAThoXC7UPM5BcnuGdTf15qXuu6bN6GD4zquf8XoXq4jAs7NrCKR",
  "key12": "2ftPo8i9PTXmJoEJL9xTHmKoA6VSpnRwjGQd6syY5kiLMfVW9114oWZctyrTwDtXdCgrwpbYYabfzXTTtrEpBnNz",
  "key13": "2BAqrM6Lon3toYrGtkzLJV8TZFsGUHgeMMwpdbHGDPVQLhtRQTe9bgGJFVvTddFjQQCgomQcMZiYkvccBXTaw4DG",
  "key14": "4zCmtiTC7c4ivzrQupV8BjZaxvcUVnC3TMoEvmbKHrGJGekqgjRvPeTT3wqW4BFpvARehG4CJrXSy93PfxiMoTHn",
  "key15": "4xzAp17aPE8wh4G6tNbyB3smcMKnzkkDcxqFUDDfNgb47iSeyC92bDW8bSvK1xqvNmYmN1Tj4zq9QtZKVrw7EWcV",
  "key16": "3kTZkA468gJa7Mx8vMemDsPPoCU2mUoqQ8KxRyia8JKYfu7kwRGkZTX8Zmb9TEoCEEZqUbUkZN7Ui4miJN1p8Pxz",
  "key17": "5jm4QZ8EqJ6aJGmuo91JWq1NY11FJ56yJkQ8GqwMDEUMPrE53NGBbxDGjKpmfxNEyQWc1GD6wbbx2r3VkTMBVsY9",
  "key18": "5wtmGPDVdFaj8XYEDY8GD1AJgfNQ8djW7ZnqacBJH2iVMPkHtVViTLqZmm2gvKr334WpwL5DiKdKrDqF7P4C37gu",
  "key19": "iZ7KNASSpa1KGQXRJ9HnKLC53Jn77PgE4ffqgnjoXny6RrJw6pEWbmbWM8UVf5nZoCvHJSSPFAoC4gUtyVuiU8t",
  "key20": "44PS8aFhSFUR53V2t5xRWSrp3cHTEAvUxXwkTsdHJVfnuvgVw4KV9RGsM5Ez9TUiBGBsfk8Dezh84spvNbNCrSEN",
  "key21": "21yb54m3s5qT4ZTdNTtGemoBeZC2V33ZwsGsyzfJxXtQqPpoVcbUgNvv3dnicmuo6ojY6BA5QpanJpbw17FPkiph",
  "key22": "5QJ3DzHCSkeaWq4TMiGTjZkT2cp6F6XHS7xRmiasHdfMt9Sy99LojKpcLNAEKLPWHqJ6mfjFSGsRd5PDGMhoYS9w",
  "key23": "3PrsryMJ9BjTkHCfeidxqpGqtRnsMq9Vw9SCuEB9vc8qqSvX52MoQvesdmhX82uiwAKd3oNeyvvJ2PjjmW5U2bU2",
  "key24": "5s51A1oqUJ5i3JWkHM1rstyN6yBDSYXojYjxQvPYKNVJb29rApKbw8rToSBN6cq9HPYU8HJWNC5Y2wcBExHemueQ",
  "key25": "2ViptqwcvEAn46SxmDTEDx11uaHzJAo2dHVRTkoMbiGdCmwP4i9BJiWKUBT4UBJNf5b2vU8t26WZt9R4x2waQbAm",
  "key26": "3iCEG3Uw3ZBW6pnBXiPAJbc3Wxy77m2MQ62M2hgXjgZCBfoAhGuqaoop7BK81Y3sP2toeq8dikLYRrxr4gp4Qt8D",
  "key27": "4LTrr7o1wcUkJWgaZX4hz6aBehANMQphvx5ew7J3fVA2NFEfJ75RQu3cn97xGign9vxBrnUc2hWhAHpU8tDzscNt",
  "key28": "2ceu99YFdJtgStzCc7K3fXyr9PZoyiYGnFBca48UWSmh9A35f3sCAXTnUH7RRmXEWt6SSmV4CJKCZEmt3W4wdUwc",
  "key29": "5BdP7db9xHp3oYjwfE71KCreEWsRLsGP339P7vzZmwRPQiohmM9P9VPZA9iKY9pJVeLeuwfHMyeyiWTs6pFDTDCR",
  "key30": "3k4kw6SbdaCtQPoZ2BuMwKS3rjnNmSQYZeZ6TPMbX8YQyd7wQ8HHWkTBob9dTTFwGqpbqw73fidWJtFeKP1s5hKm",
  "key31": "3qZPdXmtrumQBErhPsT7UjQ6cQEXMpHkxbxawwxYAoZsEJsiEAJ9PT9f6VmiTHqbL2q7hDLuQ2YcmVRozVvf7K7G",
  "key32": "4NY1EUQ2RowN5XqyQTXCKDkE3VqrNh7xNzfLmseXVj8Rmp4ZNgWbA7BRnfoGtbLuuWtY8Az51cYVijosc5G89jaX",
  "key33": "51YbHWbLnZdFJNmPBFSHwyfRe7WymEWDd8ZUNv4wkSvYfNmysbPydGAi8hjdV5AK8ZyepmQ3EGhCKDLq5EFDwx2b",
  "key34": "4AbCmZASntFb8BpQ3knt1zuiBdvNzQAUSKwA2pXj1nBnHcdc7yJ5UdN4puEfQ5zXXytP3CNJaHo1wNuKsRJPrUBb",
  "key35": "2svUC2k1ZgRQjpv6QK3Ty1UTPHftf2ksTrfVLPTXLK1gdh6Qi1FkCrKF23WCDGFvGR7avztomzL9p9WRULHig5vH",
  "key36": "3JkaJ9ajQpBGDXRpUSuYSxyqxntYfGd4B2G3Gg2HhMB3xdUp4pfNa8AjjtsX8iCbnXVNmLEqR7eYPxFBinRPSecN",
  "key37": "oD5PxoxfKcFwiwyCroQmKW5hXBJxNpMu9qye7o9CWM6uVNzTbFuboHeCThu5B896eTLHFAaykd1knCusPnZhUxb",
  "key38": "4FbCrgqbAXdF8D2gmjp9QKCbduojSdfhUHiy94fcNpDonPPQKiodBsaTkkQwEY1252WF1oZdEBaSZyFEqFCqwS3S"
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
