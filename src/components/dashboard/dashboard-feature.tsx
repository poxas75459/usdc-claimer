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
    "39tCKNRcwqKj3fFeZMCRMbp4P2SZFuZNq9FrvWPRBrGiKPDiRq1t3QKaWUBJP7wdXxcYDxBDC4n7ur7Zjuo5YVdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "peksqQ4TZGxKkca1J3A5etQBJUckFEbSu7tWB2ciBS5WbJTZ8zue49CdB8aYvgMATbJWgY7Va2i3b4XRJcpQDSY",
  "key1": "4Uwh9XS28hgHEJTUycH6xJM7s5scMrco5c2RvgyQyhzw7ThKhX6rCGw9DLssVwNadkiteZCmCw8pGJvxUbUr29dH",
  "key2": "38YqQQPpQ92WsGNhcYqDF4JNaa3RWJ3Jc4phaCnRiktVrFHZsPafLsRFdHJtWiHJEkpkETKC2bi3GtH7auT7HMps",
  "key3": "5provKxMH2jGj8rnEjLMzkDKoDuvTfHF8o1ZzDBZsMHA1DgzsTvgNG2m5J1aef7jgWGycoAfpYuosQzFKuGFeriM",
  "key4": "5twdeqVBrgMg7ecAUKtMVRc7yGAnCznnu7NbdssDWV9jPjhVDXZM1WHkejN4cS5B5xSySzA76Vpjp9UUvg9iieeT",
  "key5": "3eHLg2jgxi8EbUMf7qWmXPFg72rJPBpYg6meyMq9YGiAf39NLvkb7sEGYArRrucUsPFXYrayajisCQBQejpGzjeX",
  "key6": "4GnFwwYkXDj74UyPZXthi9RDJAs5ouwyW37Yk6oTDzSabaZjSWr1Bmur1mwQwuXqQB94Vxp65Lg4dGLhGXVaqkvN",
  "key7": "wBXaDt8kQK3FSmUtBHrFRauzmBPvvKsrYdWxBoHqkz5W1ZafcfnbxCDoRTM3Q4faptMcECvwKoC6eqLx9UoS78S",
  "key8": "2BPFV5D5FTh153uw8ssmLtrGpHA4tw1jHeFyLGvSxg2tRnxDQLsH88CNpFkPFcG1fZfyoPnH7gF7Kh3dkEaQwN5R",
  "key9": "ZQNNwNdmbcbdgZEjLR3ZhZBJ8FkPYRQcS42xDqzhtiZjtGSCgD3B8GubKxogyGsxVRbecb2NTwKTq9HpmcTyYc1",
  "key10": "4iLGY9E6oYi7LBPEpBuv7kpvuLPLLS1gs1EKMwTssE3BH3GFtATgEYU71mVEWbtZc4LtPVwzPnTsCBov4yggpbZ6",
  "key11": "3LnuD8djuh2zDGtCeP5EnCRRUea4Yh3CBivkzwVHntxU7d55VeTTMG1EeDW3ph9uAXDoQSAPacdhsUMkP3BVN2U7",
  "key12": "2EvDtdpUC5zMJ3WQ36Rvhe5N3eXX1WE71GENit1SyRbRKsjqyo6UpLV3ebw6oDdZkBSfCeZFvbTU6L6EJQkmJqUP",
  "key13": "54Vu8Pm57epRKnWPaKphNjY4tVx6t9opE1qymC6zf6eKAhJnFcprcNgdKBQZhBccbmuNjnHNU4TMZGVgsP3nG2KH",
  "key14": "2xB9wTsBB7BwzuXErRCxiC1U4pXG6ZfSUG4ENnxenH9vxvbmAGwTunLReHWBwnvcr8Vpf693PDUsXfFmWiirF6u8",
  "key15": "5dcBdmx4m5JN1D16fuZPcwXWzAibhrP6LzuFBYQyWmh7V9Q5v7FiaKku8SmfRxGdARsbe4YSabkDwx2nCyqZHAsg",
  "key16": "5yaRCxURk3kWU6aYd7qNqtvnFG6dDt2XaEox7Dc8YKJNtAEPUAbBGy9nz82wWyXhyMd1oyAE8EJx7iNCSkDu4Qos",
  "key17": "2632wi5cqEeRaYEbdjFmsnzkfGjqZtJm61CkoEr3KbXPGrVJWYjKKtBXzrQnaRBW2vDzDYX6ZCffd2RJGh8kQE5K",
  "key18": "62eACReXbpi77VJDLp22aUzkeKsRE1FVuVzRWW9Fk4D1dqKQMYtcLL8iYPV6E5PTAM9H4YZL7FFoJHTNqcz32vZF",
  "key19": "3JTRWHLVsMknyJjQgoRVWCAuaUKULLAAd88JGsRW4YyemmhqTUK6zRQhRp8t2Vd5EGuh4xKA3Ei3DfMeXRxXKEAy",
  "key20": "2EQzMdDbauov6b7pgCh5HKw6gV7h7TzojonraVsVfwanLd2xFDnCf3iaWAsyjTA71ks7PDwxHwrJ79YsUY4RZ5dZ",
  "key21": "o19o5V7qruqmjtMczX5oMhPnqS2hgUmz9wrQkfb4Ka2ruQsgZC7s3shZUMFtnSxkPTrnt3h6betBWwDndLUbm6D",
  "key22": "5civvsUkky93xxc6jfsAy4Q5CVn6vXBPC4mWxbV5FBdeHiTg6rhz5ZnviYGw2ZhRSft5bmmRXPJivSk4hiB6Votc",
  "key23": "ff3fXbdzgauFjAVTyFqrLhd5iDzZJFEAgtsKsWn9SfWjoSnuBKnWHe9v3AP4m2LwYmPRijM3w7oHQG1XWNf2Tk8",
  "key24": "5xZxutEHTVFaXf4VZaTsRjwkS4ETqb1cTMmMLfeWcUZFJUkx5NyWjtT5ZhTzrVAjFPZCBkYM3jKFGoBbBcZwQXFn",
  "key25": "4n63mDTLXoCwXJuN83JTWDa1NNmiJEQ3qurDvDPQbJHZzsXUTAL8DTqazyKudVt6AB34QAEGcqqKvwNCZ3NHCv2D",
  "key26": "4XUz3EgusAMqzWYZtWKGnZ7LbMFjM4YkRwqzdL3pXxHZMqXENXetxHoYbNR4LTPBapxdaDJu13s374ng7Fh13Wcr",
  "key27": "3EccZSuyJgKKKg732PnGxXChA5JCZXUNRyEhaCzeN8Gh8B7bq5oXdZPR7y2JrS6f7MdBZhkHJYWTaNprTxKQos5V",
  "key28": "5qnM3o7P9PSy4mTjLEDvvBcf4yLg1Bvg8HoFbxjUYwWMxnBSv322hgB5bCscNH3sPdUMaLC9d3wso5k9dRKX1VEm",
  "key29": "67gXNofzkvARUtLsEuQckSJP6zK4Ceu4qKoMBpMyCeaL8xPJjQViC4virdPQZr6q5tEb1NCcVNDvw2FdCmCn2XTu",
  "key30": "2HVoXhaHAi7K11i8HD8fxQwwb9T83txVYRUFtpL9RGpGZkSQFFwGUyLEARfMG6zWtoSR6iFWukBRueAYbUgGAXoZ",
  "key31": "2UQdrGVR8pwbEwqtGgyGRNkaEKt9hPEHgRPoeEwmpLMF71oqQAR2PpJT2nRoL9rzcyczzMKu4YoYnDq2gqJr6X82",
  "key32": "2sxuwKYJ4o8cApMi7r2Yi1sLwNKrfDycQEM2rBkgs3kHQJ4wKkgBhxhnBmLZ47zhLePS1XAVfaehkXh16HufHYoi",
  "key33": "56fSheLLse8FJ7BAog9pz4WpbQ5fhMjTZU5221SWRDHyjFu5M994PRw3FizUJJKhREiXrMELEUagrNuMaLWycshj",
  "key34": "31KCVXg7nF1ay1Dh8eUsgNCDAvzZV55FmPtF7TtcddQpKmnPF1YYTP7xP89PG8BotyJuNVd4YcgMmjFuaP1oDy4A",
  "key35": "311amHwBmJL1u8289J3XdPmiAD11eoC5v2qPd5d9wrYGiScQZhPEKRztrdtpYn5uMh9RMfCcLXbA841G62AtDJdx"
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
