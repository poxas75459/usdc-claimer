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
    "3CcH3war16wxdVJMprG4WszmKNNykH5x3vdJfEN3ZBeamP8U9AYFix29iHwiBADcKiiGdHsvctPRwFu67ZxMU27o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaQBJvxWf8ZZEFmwv4Y994Mj6ahxkcVUKnywwxTN1Jq2hC8WDkDvAxgtFeVYjsgnCkKr7gZzdNa6S33sAbzjMEb",
  "key1": "5rc92Dy2AnEcs7GqpHMaFNVbUhuJgjfcQqFJSbQruRmVwV7rqstdZv6EvTk1XXy8NYqfC2msHMHWSpVQBhQ32HEQ",
  "key2": "5GN5fqHnJK3Y4jkU89L2pbmXTzn2dWMm1Q1j8DbE7zwCiQ6MpxM6iTwUxs3ACuNWEDNocqqBe8YCpk62tDd2trR6",
  "key3": "4U1PYFmpELJi62uH1YWMMDahX3ib6z7Qz4ZkHYbPtbcnpWnNBJvBJuiABsqU5yfq9mMmkkzeecYmnTe4BJSMYnQq",
  "key4": "bcvzeyEpDKWRR9Y5HV8An23XRyUxiVjYv4VuMGTHnk1yXJjqXuQ3CwFVFXMZxagU4xGsWJ5nLe1AzjSbEaQw3T8",
  "key5": "3MWVccgVFQCPf3qpRMW8uPMPcBqfWU5hP4am8JH6A9jZbAvYkYKnVByya6KSj8qqBtWNxipi9maUDUAQ4qyeT6rY",
  "key6": "45gSquhBFtD4UVybH8nZWQum78fboLnhu3cPuAMmJghJstnAUVHc8FCpEi7aP8oBDRPu1kDt96WaBcYDqVo6ymFQ",
  "key7": "49TnEBaekca6GDbYmfWE7ERJp4jbHTYQL2V8Ku2K5Mw2c9P8mU1jbhBnNP4vdL1aEJugdNFapxd7sVQR8VmqpacZ",
  "key8": "3fS9unpFQTcnGvgJoYXGansxabWdqBzDjsUY63kEJgDYnqyqzgNBo1KM3B5CzVJRb2WaNfhTYmdVZNFtoH9MaBvN",
  "key9": "5QGvbyMejBkWKFvifZLhwTJjmjhG14gmxMW4xtrvWEwFhvvwz6e2Du3YY23iaAmfPDLr3C9YNyBKTZPDYzqsyAjh",
  "key10": "4Tb8mNhVkqTG6s4t94oiY5A3efv8zW1Z6CEZfNoLh2z3aHV5QinzAzuyR1sFriXszCDzMzA7uxhRXwMb9tCELbhh",
  "key11": "4B7ndQVcQUWmaWe6m4pb1gZFumgAS63Gf5RuoM9QEEv4poVUN1WeNfoAyN9LfaPiNb4sJLhYzBEX2WcGj1FAREsu",
  "key12": "3jcYNG1CFzL6yyEVwVQTqWF8WSDJR9BAddewKhBDt2YKnWRx8R7qGkgCkdFmFwg1JVrfTiQXdkNFrKZUvztP7Wxj",
  "key13": "3cWAGDDgYR49hesW9aXkH95zwQXDnrxtF3bt7te94HXydPbWBPKmph3MNPmTtr3EKpZKXn35qwFP4jfYLZsYFtnR",
  "key14": "tApzSsa6mt9EnwAPwWuzknhCiwCHNt1Sv79nmHX9EV32ijxseUSXzVKJxnGBRJShZ6R7KqnfdHeqVMyJEE9vTBa",
  "key15": "fNfDbqMbd4EP4gNrNcMmEeXDR6eYUVDD1TTcdZ1PJiuF4N6mFbTAdrrUBbqTMeUBBormzU5f7Eb516Wd5rd74xV",
  "key16": "4Ybz3cphHGkmHvzWDDymESUCJhpYWr3dHwwz32ws3mXSGEibphDUt1CiwJLpFaNVUbnfjkdQToTLTxER7RSWapMq",
  "key17": "4RuhhinJCnYFZcLiHJHeDwnVXYFhFCicyMEE2M3f64qDwDREFsUb7dGQjizLzR4b3kPht2GZVtdAJtkGDGkEsQ8y",
  "key18": "4wXvZEJ65vYLZ8YQByZf3RbovJKRusVLj2wL2TRJCjKywwZtc52pF2cJtSpoBpFybyWYgBFe3UwF7t41N9QWqTPK",
  "key19": "3vhdRuGrkmygJS3nxKT5SMG2XT7Lnv9TrSzxJhLGUxhA6xUQycPygHxa3EC1u66HUAAVFPWHsKof8Z9VchAD54wT",
  "key20": "5dnLty5vXVZ9SNYTL5vxFE76HK3WnWdbNrD4BU8mrmEWheoGXMNXMnNdTJyoKm6coThcRKuWpb4da2WHveRV2MVQ",
  "key21": "2D9hte9x7fmWD4HAK5jo9HNfHSq1R7PYDavodY39P59GaGeM1TS84P45m7VTj4zcy1Rzf6jjLJBEEZp5fSs2prHN",
  "key22": "3tn94uDWkyi2rghSK4XcgdkGcdBFo4jVarwouUHBMCT3XW1LjuriegZJwAzi5FKdEtADNbNYGRGAQ1UC4pU43uEB",
  "key23": "4DXSoG4iVd5JjvWoYSUwUjfAgr8NtxwqRYda1w24p5nKttvB9Y4b1hHqii1cmJ7SRoa7G9oGV281p9ThQinDgPWJ",
  "key24": "avyr84mc3DsMRRd6REX1ju6e2D1nTZkRPmkLYK1QrFxueGwUVJJ7eTrkkhvWXN1Efj8aiUveQ2ovK2fkp8DKP9n",
  "key25": "baQtb9rHGhbe53eKtXJwnwTsSyD3gDTZNLW2teAc5PfVvwFf7d8xUfZrxCkhnH3kK8eSHU77HyjB9YCkd1cTKvX",
  "key26": "Bs36bpCm9tnHSNAGB9gw5XuPVw3EKKsDwwF7KF59e5iD2vbYMtbjrDPkRgRnG6fKzXraWaVSiaWGCVS2XUUGcpZ",
  "key27": "5RXmCTWHn5528zp7HoU4mNHyMXtWX54prFauCYVa9tezXC1dYfi3VHHhxU3ksRCDB7pF6KTdhmg1hFyonHwZ81a7",
  "key28": "5zs61sVQymqW4ugCYNfP68FqR2b3yb4CNHFGTV8WmiNPW7bmNxfPhAkHyFNzNPMUBFFXqq59KDDFYXLCLjHcbVSg",
  "key29": "659Xz1qxjJ323Yx2e6i6RgqPh1ygACVyamVWEteyoASWqYUfZXftE2QFSJVUAfyM6noAfs85E8HbYGG51WTKGjHS",
  "key30": "23BMS7E6fCT4sz3jrvaSa1YE537ZoJBRp7uUfQGVbMeRoTfdW2DGpZV1J6JrdwU9EstDzB3hUtgm8XB8i24Du6xC",
  "key31": "5qjNMs241sWjXCsYDbdM3ohHyhkjWp79dfXNnKJ8uxmps86DGeSossbpvReqEc8iECTXwu2NHr43erKu4Doq8QuS",
  "key32": "muxLeCKVXPab6oV9JhFzrZB8G2NVr3QxbuZJ7BcZs7DnJFQPKYF99mRf696tGSPjWNxvfSJGrCHYsvZQuDHxVYs",
  "key33": "4oDH3PWTTG6NoKPR8TvWfHD3jeLPEMZDbrKX5EmY1uUoyPWG2U3EzzKjFdmL8YyV4VLGAEZRcCWEcw1zKHir9KZ1",
  "key34": "48nDJc3dFH3iyGQ8atxTe6YLKesD8t4gtf1juma21Ah9HGFynKHE2BRaotYyx9ruyKJaigu5rkqKF9vqLMMxBpsv",
  "key35": "3Hocc4mZMSfgoVxSyu49LwBFr3gFuHk82uJPaY7K4a82n1GotJF5dTbZqoDGACega3tSRz4MDRDAJCo3RoBGRHH6",
  "key36": "3eeYVCHRtXzN4RR12qtifkBA6CsLYSiEVyzjBYjhnyGjhmwFDsdsUQhyZaGbs7GARynKuULSzmtsJu5cbNyg76Sv",
  "key37": "2pVPFW8Q32iz1KXip4Trrhyy8wLHtTcwmF9jVrfs1xZ4E1fvX2BcaFwnoJiLkh9EBa8zs2kEx8nRvAZLazxWYPW4",
  "key38": "5ZbBSnF8gcbofnwVb5eoFeRYwEY5qGrwsPML8GsC11w8x6yordVfsd8gNYFbGQt5aN3cgL3DREMLmCyfaTqKYUF7"
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
