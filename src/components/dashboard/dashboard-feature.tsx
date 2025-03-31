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
    "2xFQiFrESKVGvJBfaRQH2ejkJgETYcj6QX8dbNM5mfbQBR7mKMHSvjjf7cFC6YPmGQ7ZzKdaYQ2Fpc2JSjGmw7Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrhgvzwTbRbA9wWB2hJHEwyPLY1HHMgAp5AcWLqr2Zm8K1o7e1Fn3DzPk1ZTL2pWijorFEmwz38RApJv2Ave81n",
  "key1": "2h3d6Qb7AeySfi2kE3W8UNNBR2NwhJxe3j9HL2c7CRFHeYkxcGwFGuRpknJRZeng8uZ19g8FfFNYPZSe3ucrwtkT",
  "key2": "57ZNXBa9PpxFjA76jrDrRjuY6fpoqkbjVwmv24n4ANGGsHKKy33vRf2tdWxe49dnVFv1PjTTT4CxzdjACVYQJEKm",
  "key3": "9cF9dydW62hCuvQAKd4YYqT6nvcgvkM8aSdihvuJk73wQjonEwehFBDzEk7Jjk9q35c3tiW2gHotaRMj6a9YfkV",
  "key4": "3fbcmarSUxep21yUxM4Xbn7piXy9MzqbuoC2XyfFW8hvZCYCzrAzZJFVYknpPPgCGfFswTLb4N2mghnKK4H8uyin",
  "key5": "RY7BBWiQfEkRxNDKeuLurZSvCpL81yJRojaTdbNKDKBk61vcGgtn6nyiMMqUqxLABLHoNRKKwmQmsCyxVor49SY",
  "key6": "37QZ81iPs8MFvTWXf9PLFFFy3rqkmyKRL45skpzfhGD82yZkuLmEsoBDnALoWFHLPZpVZt1S8YdQYWvaL3yiMSW5",
  "key7": "2wsEozmHanCKKaZ2bpHrUHoxdGmgCVB4rKiKcyaUTT9rwddRFbAw4MwCUYdcu6CAeA11oSsjy3PnTUCvaVsVyFj1",
  "key8": "5yP1TkvhRGrGocdzYFkdtuULaXyFkQ2NXYXYXPodgiVjVVTaVKarvQTeVqSHMME3Rcg1efCHq7eZeqbhntMKvPSD",
  "key9": "3n6aMhgkgdd5GYkUXdBVabuUP37isNo2KUAbBiqqT7h44Jv6VLui84r67ocjYWLmPC51uPZ5MiAA9qNwJhLZnBCf",
  "key10": "2mdnGHVnMvKXLK89zYg6fgBoGtN29DG6CtkPvUc6RjHLoqTMrCrSHLjPgrKyzfB3KvzsMskznyoyFjACQYjK3eLM",
  "key11": "5Bd9JVVKJMWuFFM7Q7562cVpyFCLb42L78r2peyriiAwjvNDsdLTbhnvxs2svE69z8SQRHdWCFF1JgXdfMYqrcz3",
  "key12": "4igHUNjvrzHgouNo7Rvr7YqmJUQqLpz7pYf7AJ8UQfp9vmKgQ9EMkzbtbkso8nAgPzY8EPS7aVGYfUcFfUv2paeZ",
  "key13": "3CKLHvpMa8YqwXCZPudV8M68s2hpaFsxGUye4JbjkbVSdor548jBYw3YwiK3Uy2r12QjTCuTchS8PqdCXNjpeRxm",
  "key14": "3gu2MTEGPEphySVd6N4v1vEieDkrk8gcZyxAtViL9USWVv5Ja9ciDSUWt7FYJkDAzaU41HejRoMdsif41WKDBaLc",
  "key15": "5KbBHgisqJ5v5zY4gBfqtoCPodfk4uCtvKdJ7dSxKxS14f7t25tr7z6ojxBuLR2hornLJw69t5XbmM4xDnkPeH4",
  "key16": "5NxgR5irA7FeqKrvaZmmdaup3jeZDzMHMmqpZZ9aSkaFCSoxWovkXEiAadRLHix6shpNa3YvDqgjhgkbNTeG1Dj4",
  "key17": "JKad2ncfTVhNejKiJiPJ7ZoqUvfLbnypqwFtQMXLioD3TKoayLpadPCfzHckCP8EK3X89Y8Nh76WyyfvVtQhSJg",
  "key18": "43AsvAptTuBydsWkDNCE7h3nG1Tx9RN3fu59ntR1GHB8yiWbANBQdqCEwAsWZsrQ8m52YDNLnfAThy2u7BPA5hsm",
  "key19": "4R8hJKQKHC1usPWMaNFmhAR82gi9eCRcH9msBz7odatuiZhQKYN2F3t9eWQZrJiheCTBvqyZ1X6ErLec3paTVExX",
  "key20": "59sAn5iuYNLcN6BkuAnoh8n2cZzQ56Ey2CLxqpCkjuwgkCE9Fis78QyWbYuGSmMNRjbgAhHFgFunJ9pxoCBPpGsF",
  "key21": "5avp3iJ6BcEBoTbgBhfH1JcN6FZvWGwR4pdfYfJ1Pe34QMwJycZjagTB784caiH9bhqEWBQjoRvoJYaq1V3ucYg1",
  "key22": "2z3aKoA1boo9zhthtW3GTxeAvjgHKc6Twz1rhSuxAPR3FUpMUGz4DZUZ2sJfHLhB3MUvVwZL3UXCHE3czj2CmKFJ",
  "key23": "3j9PS1cUcRfHYwmsUZq68fgU3vcVVJ8oJ3S4v164i1H63e6VDjh7wkoGYyhpuy8QTQzvei39YRkTnhoATc4ETsy",
  "key24": "2uAG7RyjU6jjf2oGqtknti1Yeng5DvbptWsA8uEabokYGd8Ng81AB4mJtA54zZXb5ccck8PSVrKPmLKdouhsuYkr",
  "key25": "41hCnsJvM9xYFGTN2BwzeDQzvufrLRkKfgQDwWVnajCtvP4sMwDL6LgKBcTvMf3Fxq4utpRTtUekSnfpkY9RCzpH",
  "key26": "5R5iyGN8H4ipuFmkoNpZ3DcytTAqRbZFXxeRFrKwNuzkKnbmTmRrEATTTAN5mwfuwtMK1uad6z8TMcTm1Re4o6d4",
  "key27": "nWjPWyzDz97BM8CD9rMGXjP66u6WNkSeg1sERdWtDab3EriCdHD8MJQDEAgujMBF97bKgdQpgEkAoTu9SCx8t6y",
  "key28": "2dnmnoZqqktxBMRcVYQmNPqNfN5XMUnu6xuo3MwSRUGJmjKrnxHiNQKQxTC3xWvwtDVq5TZpfekNcXwjaoDnH21J",
  "key29": "39xs63xiUGeSnVS3YymqRPqJcwPToaJUPtd2BkmMjQ2dTgLVxozvmN4Lt1oZx6GNSS9J2aMm4wCUv9BCMpMpfQG8",
  "key30": "btCRRmjqxg8NizbZYk8L9yEbnz4XN6p4nhjMYZfNGpfdP5bAV2uaCoT2iaKuU2RKw3UBP2QDGSUFiyTs3794Gka",
  "key31": "3LwLhr7Hq3wLSsXtE3u6Lx7AVgHRrvv1EuMajDgteac9pcCzLQqEnsq2vcvdJugtL1DKvK2pFhySb9838XJs9HNg"
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
