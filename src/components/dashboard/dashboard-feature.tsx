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
    "5ToxSFP8uPZs7nyCbSQfgMBx1gdhMsdksC4nhodoAHhmu8GmUqKFL6oaiGMrydsD63thsrQJS1DPM8Tt2T6agUJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HLm1bYoMQt9i2S6oq7KkFnLyqS5gdYLesY3St7M3SdUUK9JN738iB784MBZmMkpUrc1bQbQNkFFE3ZvQaT7FFN7",
  "key1": "5gzKSN4T3CUdWTJ3wx7W18yc99tyKTZ2piFFbixaFAfdsnXamsLEtAGxb4VD5CvdmiA9Ey6aj2vTbEzqXMzKHuBW",
  "key2": "58BQdBGMMabf7CmrEVbP2mpNKz9ywKRBkdWg3urRrRicm9MMgV8VHAr2gSs2xFJm3v5Bsm4T96SGxzTYbXox9GZ5",
  "key3": "4iiBtV1XZgdKgUjwSeoMKiuXHEkNYvSJCPgoBdPJTetoTdnbA1SCYZa9AKhAiWAiuKinvG52Xje6D9dVv6sBiJwp",
  "key4": "59CGLncfkZMuZW2FoRNwwiwBRciF3Rs4UTXQr93J7UcJR3hdU838WeRARfRAmS1SxBv68ZygakTCZurYujFQYrG2",
  "key5": "2ninqcjNzweCBnVr1vZtirGhFmyWC8L79BYQphXGPwPaYrBx3ZzzaQLv64Y8D5kbaVHd6Z27MMhsKGLKfRvQbQp4",
  "key6": "2SHtL5iTHAjdXUYgF9ShcYrqemtD4HJSJrjbtnVGAeNw6rff8jg1j1n453rU6UBSFBBYnnLhkik6m7S9fVbsj5vy",
  "key7": "21dHHGzDVtmpyfS6gvBZjeWvuUaiKBBwa9EFLFPyU3kA17d3jLa6PKhMwaSfg2KbDAhGVXu6Y9KLtpyrLxHxcr4t",
  "key8": "BpmyVezeqyjMYuBKENsxozr3VXGjY8tJxMzLk9rcWsCAQvfMgYiYfqHC25BqrLBYURWA99RMozgMHs5fXYQGzrC",
  "key9": "42U1a1KuRHgzxqVsduS1wW6W61Piyd5Hk3Q58FkFztXXJs3n3GtCMxSCYVe39V2UC437taQM8zqMomogEqVE86vy",
  "key10": "379N2m5YwAc3YM5BBpQrKD9htNYdKy2xgvLA6ciydzundhsXZuPmihfekjPg42hchps8JQzsg7VBdpCrVX49ofrQ",
  "key11": "2jv838EBuYQXcX7fFUttSkfuWGZDhvfaNcJvntnHqam3yE2kmpSk3fWcmf7xnJQuY16By6mBx6KvGYEiJg3mD7bG",
  "key12": "128pVi17rsHydiVtVMPA3JYCLYPUPpYJhiFspAdFGSmbExj8NsjVaYpLGwmvWZCupZXZn74XyFsEmEDGQ6piF8cw",
  "key13": "49V6MjWH9PazwpTjQrPCQ2ygMud5yozYm8BCc2zLuUqTEVAQjTVBCDC4CCFoihqS9akqKjr4WpEZ2Jom2LNWYU2x",
  "key14": "66prxzvxTZ6LqZ6f4ogiimkDBkkvu4BD5yzLnmvkHPC24rvAeZm7dDPWtodsVEy1gYhugQiTxLoEY3cUSVvKafUS",
  "key15": "yq9LCUktWzszo77J4BZSQCCoHxzQTC3EWzGr5S1UXFk1nd4QQbVEfkMn8sdWh5YgL5nNVvaXK5FrGBHMDMii3BY",
  "key16": "3LHYepPurEJYqUG6iDecQzUkJjobxxa7GkX6aLo8DZzJ6GXT1sFz2KCKHiL58RXogYtoc6D1uK8EfeQNWS2sbHjk",
  "key17": "3ddq4h62ALa5KvnAWRrZmyJaPQQnL4Btv9PH5R7R6jmWL3EuE44ggTGp6zyRNKMDEgL1KuGodtjFT4EnmXSTfNpw",
  "key18": "5xz7gpHgbHt6jngaHtgosDMGGp56asiGzW2HGKEYqkPv43czhFDyNh6AytFU1wPnnWLJuZmyP7GYGYKjomV2S8Gr",
  "key19": "5wSsYQnCiuibtHH8MQD4AAHwF3VUKP69WXEwzjinqQFbbbZPaxdiYhrSmBVPckaT2wixUpTYJNUSMUDVtKGGgj7a",
  "key20": "5Lc8DhwmZwpAcH16pQKvoGc2Zvw2SjHP91FBF4ygxvV2jhbwSPK2oeg3VW3TKNtt4n2BsFRNsni2AhvmXHEPL2xF",
  "key21": "574HYkStQorq1exVo5Qo1uxrBZiSxMgiGCoMKmarwwoB94mygsnEekjDahHahpXrdpW6amsSi1VoPidqRNKK9i3B",
  "key22": "4dtmYNBnk5H5Cxf5Pke5SQHPVdvUpA6svhJfutbopbgJu7XjasUq1YxCKnPgX6gmJwKjN3vGNH3evMdAVkCks4CM",
  "key23": "2DpyiTjYQTmSquRPJKtSaZ1QtrrVfB9vCvZFaoZtRU9z5ckx8iRaPjobfWR6eA2jmKmcx5e9y9367EZwF1GEVppu",
  "key24": "5eRdgAokAxhQmRhakZbrXfifCK8MBzRY4nbSFymb9ZopmGPVgMHdQBpVbmAgQwTMVr18LEbMYxd7JBVwExFPPQcQ",
  "key25": "59yiBKRejQd4HMs8CHafie51sS8XnWhX58oyB6dn1HEdgUYkdc3uNP562JhX7wBJvzQTWfEFcwvJL6iuopvn4CHT",
  "key26": "3CBp9UUjfAoEKvtBkGadr5DLeV9ZLiDkgu5X6ChnEk7H7qqgkwvWvmmGFrHAe3HCnfpF1K64255dDkg2Kaei888N",
  "key27": "2TQptx5kWri1cmxQTu5hBn5Rzkj5KVwkFPk8t4tASbKyQXwDhSPgE1akRnHBhPX1cpkx4pTJ2pFpEQ5FKgkY4srd",
  "key28": "5JfG1qcZx9TbmGBFvJyYjGPuC27qka3Vnnx9eNmGuQF7rY9dCfNEeaFTY5zC5JwfNsm5tyy7FpmVHqnp65GxKUs",
  "key29": "4bMhZusEAEKJBCuGQfQCj79TNiZv4tJmwRp9ozbjXpuvUfBf5AcuUzAUkuN9AgsxYVini2HvgrnjWCpcE77Mdv1q",
  "key30": "3tvT9c5hF5qQVtnkhSwFVaqf2m2FEJf1N6h4nrQpTSEZPoQAHLNPbmiHE1nubEJViyyqX62QZ3ZnHe8XBgR3WUBA",
  "key31": "55WyCcSvcQWYYyMF3d1s9oZXKvV3qpSJoeZxE1g6cWX6coFkBam4mDcGBz33oDrEqKTUiifa5CtuVsCPvMnoERKw"
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
