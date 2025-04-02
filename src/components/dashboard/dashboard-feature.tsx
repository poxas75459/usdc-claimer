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
    "3SQMZSGQr3jfUvGXW3ezqym9scU2NL1h1oJW22CnQ4ijcyxjSENXTXt8JAFmR3XvNQKM4ejZ3igsUxLPD3ZgC2X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rmsnxt5ZQwf4aHrK71xaVE7M3oYUrjKR6Ccmpd3yN1EYsmD8MvFzi1Ss6ViRMpebHsXbWBeStPgTzyDYwrQP4RS",
  "key1": "3iPGHEZDpwDA9cMiuLzusW3aGA3DYTtaavvZsu1RGNMxE6BGE6ScPqYkrUxfdXLksQ5ERGfSHifXZ5wh17WedKCM",
  "key2": "4HNjogJzD8yqnjVwDGETsZ9ruGiwdezrmyLPGfwDaCGTNy5c18Fvoeffq1b9oWGisnJzhCX1yiw3QaHNDYszvDyu",
  "key3": "jht27HsAcvH7J19dhcNDVzeD7BUWJQFCajcghAFRowSe8iEhobiyvKLEKPaMWiStJ9m1yUUAafnAvZmuUnwN5id",
  "key4": "3fEFhz3ahsXrjjXgFWSwwLBeudQ9o4BwtMU8oyhny1w8PxS1C3bvHd61nuHu2Aeb4DfuWQBYy7baDy2vJCq3aTyp",
  "key5": "44aLF7Y8xPTHFb6GsU5odDAsLZmYeVdqp9AYVPw3jQcmqdR22hWSe9qM62ZqqbiAifNfmQnQRnW3zw6ueEZHUK3Z",
  "key6": "BmZhajocnrmRwzhM4RJ8UJXDaJTP8K8zX5P53jDuRJCtfgm4T7yvF357ZxajYMh6yqs7TrSocMvBfkd2Y5Zugos",
  "key7": "2TYKKAKKYhpbYZFAHaheyL8FY17qxrBKk2qybSDaAGbCCDXbyUgsLaKDkiCaxDsFnGmdFBks8EZWuHB5adHdDjDC",
  "key8": "3a62cindpGnuzZZhc3JcssLveBSun1g9nXo3hCHKsJuwrADnGQBA7MdC4YoK4DUzTbR84tznnK9J3tYGXY2rZW1k",
  "key9": "4hsgK4tweUy1kwBmZYEeJqkAE6tpxv3TRK8myE5bKDsJXgEVBcEdtFAWhKnKW7umFozAEwNfbpQpW4DXJYutLGBB",
  "key10": "3Zac1D1E4EhAX59PZXpaZjneQxV1MezcvkxmVaEMHPjbHMHUia96iDWWU2nJmNBgjYqhT7XpcNrymAJNnNjVHVCF",
  "key11": "3Qa3bkMN6Z5zbtC3q4sMYnLLccv1tVMnAh1v4puZrhQy4ch3MgrnDYC1H8hnoVAVDLF7eymrabZYq4dwWpzgMkTm",
  "key12": "5Y5N72bp2hqicLL6SjVLycZsDXS3x2Zk7jQmS3VcaLqv6nPfLRtCgKAUXbY4ThvcyQhpQxGpgJdd9S2xRucsKaHM",
  "key13": "4FwoX95iwadG2TquPbSCLUhe4Tgx9ocWE8SYLjWbeBf9LJPbkL5fyDuuAeNPfg9TUS1Z5GzznJWmpiGfyatwkuyV",
  "key14": "5FmsmwrTw5D61puA5UamTwD4Z8NxeRH7tWrZShYV6HktWmd4iWApo2bZgtqMsk2a6Kje4wX6sCz1i1UcPzR6gvX1",
  "key15": "4qwVAfUdAm1VconPvWrNDrhM6rk95t4r2ygoTkZF2Yn7V94Ek4gdPrVUkPNo4QK1oT2DfZ2634EioDxKre3tp5Tm",
  "key16": "3zGGJ6cdWVW3vHLiS5GCujxA4q1GyPsvWaNNPAzXgnG1svCFq6ga96jFVRnpgX98PRusNWMHHuWkPeBuNxGUAHoe",
  "key17": "xEwZD6j9zsVo5QTrTjwUnbHPM8TbMLBmcB7YAo9vzWRZQ9SRFfMTHxLDmvaogfh2MpfZbsbKZ6mhHTcAcyUTapE",
  "key18": "2EbpGkjeT84VyHb5ysF7AZqfrLoPf5NUgR3PjbMwKRoFti9eiKBPpSkKkbrBWdPPtXTnksPM8E9S4vz4L4T11CTz",
  "key19": "4HjD8WRb62pMHZSGRTVq1mKKjFxYLZAGNV6hwQeh4xzmnx8YKnNMA4DXxvxcdhAwr2at18sZMf16ix5Phtgnx2F7",
  "key20": "5ANyEHxX2EAihbSjnUav3kHSL3a3VpYLh3DPZUwMGYpijWfUveGrozy27Nd1pcrrbxn6S6KaKj6guiX4zxa5Mk2X",
  "key21": "5zbwgUCYHrccNXmEnhrXcjC8NrUGQhrtW8N4qgN6Gj6HG8E1L3ussWVTHPrxNe3GwN4EFe4FoesDcXMEAckZ2FxU",
  "key22": "2V6g5qQ5UDsAL6Cdwpw1axB5mfFcrB9RqfM9dZnvmwmzpC9vRn8KRjYYFvrPbYibRE4ukQxiA59HECHzk1UJbj9L",
  "key23": "3kFo8dnuaxRp1YcJuR1D6jZwqt1w6JTPhjJpRJWuZfdq8sf7SfzRLui7yUJkoceLaoJmPX85enATJqMj1vWCr1ek",
  "key24": "4obGFQ2A1BzoVsyyuyJKT2KAHz2DRQoaLsCDsEyZDrdY6topzdzp5aSk3hvpxvMuerUMJMY5Vhb3XYZavemqnqCx",
  "key25": "3wfKPWbAK8Mu1ey1kKr7dEEif64c1bWAtKJbteDz2jCC5Zk4EzcBWsGYMN3hrqRSSs2ftzqb92wPGNDmfNc5qq82",
  "key26": "3raggtJ9bN7BDJe67n79bAszZ42XAik43Fm43qQ6YRrFCQrhBqrhVsDiwELRYc1MdPUDgXZaJskghpJzv8tAKRNy",
  "key27": "5hHiV792TrwZedudii4TyuSQsBQ23CCzDo2fvDRpySyTDAKqnzhnX92oD3ZtJEmzT5JUuTTVpbiWbBiNRjExDyeC",
  "key28": "2k9Rj2FgZUCNhDbGKS6da2NaERA6KWkcR1abKkBjxx8e5HDe9F8gdCYQR2YaJSa5VWbjTLfEuq96CVDFHn4CTCKb",
  "key29": "4pdwooWf9Tw3jr5WJfUF7FtKbL1JaW3cf19ktua15Sn7sF9mf7DGgufAjyD6zWzEJew1wpZLh6VXqHDPXdrstxs8",
  "key30": "5THQAPxdgBZMb2KVrXZTkRptyucY6Y5jp5Zv9ma4evG9TJRqtG7eE3wd6XPScqWFPHVU11hdiDvSJGxFDPXvWW19",
  "key31": "58KR2JizF4D6Bn2RhZAvnx3KnxaS9krdVeGuDs7PtJxipjjN4ehAgiA9ZMzUtufzgUwCL8YxRESCi7CQMrd6L2MR",
  "key32": "564taWAZheNK86LQAoEEufaGseAq3m3DgAxQWccXfLLKGvRQtmY1C2Lm6Lu74WfExRad4WFzmb7CamERHsc6QMys",
  "key33": "zAgMTeGk3D4MtLfYunQSt49CiSXtYKH59sR35PMKRktf4Vc6MCX1ZQrMGqJGdkaNpCzJ7mCeC1doQ5ZPvwHtYtk",
  "key34": "zx186PQKYWTCELmqYgK6jpRcoAjKbaTGbFYjZ7SgzXug6xVSYbXVWC6aXtMHjDRbejbu4x6h3VchbBQz4aPJ3A3"
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
