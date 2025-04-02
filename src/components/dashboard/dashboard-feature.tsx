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
    "3EKH2P42K4XMBihTpTK6dyjgQS7boeXNSudsJcdwf574ov79ZDehVEjJws8bzBxkmECkQBQpX1saLVtYLHx2tEHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqYmExKprnhLutdzCVz31M7RDRCEKKni8YPA25AAF3L8QP7Q7Ad9v4FB9F6rwuYnMnoB5QnHJnWv9bGsDuP7xis",
  "key1": "3W15sFo6uzQCCUHyJVYfwW4rVmcSerFKnexgDpvDm7EkKartETaaNm5YkXtTPNJSvMMQ98KCsLg3qETNh3Ajy5Jw",
  "key2": "28UHGyZQ1mH82chDzU5yfre5k9XDRKZHdVavv9CvpJrak3qT1qi14pbnwrbQmGKRKGpxeGLBzNNZK5qDu5g5w92V",
  "key3": "5mnjq4iY8SajtnC8u7KAJgPqTqq5Zv7zTcHEwfoTVTuYmAJDtiXZNWSi5nDCkKf2JSwf4mBQNGwtVu4E6TTBDv2a",
  "key4": "2nS5EHqNX7F4V5J8ZZsEnnbHn47Pvydsngacb81VEgSLboENVmMP9CvLMDaWePGSXBh1mjX8KvJs6iFXM2LRJ1Vg",
  "key5": "2HqVNkE4MY8VXpET4z2ej8KCvzf4G2JPk51iEgf9YodbcfJqDwLmxtqf4mPFiMfUfnT85TXKpnVG3FnYfem55cZc",
  "key6": "3F5Wt4RxyAr7YDp4jdVr2Xwq4JaSkfeMMLgYfNPkFA4kEuE1rp7kDJbQXBXk2mAevt44HQRAEyVhXhCTZbBMHjuq",
  "key7": "5VxzDB5ySEGoz2FXLwnhdXvvAko3yAvuxvLj8kMhKs51jTgxWeo47M2jUDJVsFpjfx3QhQjR69VxUx2MS2Dw1Csd",
  "key8": "iqYpQEvRP9zVzCv3hjMbCn7HTA13FGtAMKG344KSxaXzYTVnqohBmmx3QFpb4FxewDUjjTeVjdZ3wbFcSM1uNM2",
  "key9": "27tz3E522fWmNDURzUQKKJhEV4Agxs9eviypz7rcr8iMdW6G8aBPbX4dTiVNm47vdkgMJeqcDNpSVqJayQ8TotRU",
  "key10": "4P3VSyBBYNTcxTgv7zKgCNmYapPniVFLLo5msQi3iTBYr9QY1N89HYqp5c1aHW4Y48E5tqrhqfnhWMTfUWkVJpPz",
  "key11": "2ZLJLxUDkgsyXUt5kWbsBuRds4ExU5XtUv7veLaCrx1qRhH2r917YgTceQCsmZUP8z85S9KBU3nXi2Nt3FobDHeK",
  "key12": "4kLPLDR342h7psrHSGMCh8EN8RYWtip7QZ4QEAN68dxsr1aXue2tfBhntiAAxAc6hXgJ3ZKUX5ANAEZDu5v3P2e4",
  "key13": "58vdmQvGJhr9exVmubM7XaiKy8EMWcmp8h9jyrbaP11TRwfZnKqRKYgWxXhgWXcaXoE6NgNEEnDQ7KXb4awnkB2c",
  "key14": "EcjMBRjfRWAGQBSX7c5g9jaxTQkP7BPYGFp33j3VqiV1hasypoGJEkEvT58V5cUZqdEbjur56PBgzFCvBb6Sg7s",
  "key15": "2VrP9rWNi1pgDdKTbXvzbQsYRYtM3bs68JRsfMCGsYJCJGzhbsao2ZVvBFqraMe7nkHC3e9WVHVHhBdG4c1vB2Rj",
  "key16": "3xgTjBFd22Cms6z5BgKNSubvjM6TFjc5rZPqqVN4eGp1DLXiN2YeYfiTBc3LbanhZPDzJjJEwrHFz15QSGDJ826N",
  "key17": "5Ht3LmssrGdvSqREnzt2ZxEgiTqwb2UpBS7bUGcrjR6uVK3Mnsq7zRxKTVG389M6CFBqerqqGkBQvp7ZrNkTkTyN",
  "key18": "iDcBm5TdGNwdY8fDyXz6DYXbNN5HLpxmjiStibkcL46sPQ9sYXiJ7J62HqFx4AExL1LcrUotej8D54pxpcYdd5V",
  "key19": "2r7ehJo8tc3R1nXTDZ11StNj1kmqgJruiQn6pqCfgFMzTUDKTp4rwpYduavRTKiVhjriah5dMSSu4hcf6mEqTzkf",
  "key20": "3sN8sZjHbnicYckttafhHutCnJ6uUvQAnMVH2imq12XL87gThicEH6hmQs4LbPEZxw13gtusCAHetXcJ8Kk2Uvfs",
  "key21": "3hxh7UVX11naRpAmmQQb55KbDtGfzfv75yk3c4NzZy3kP5bii9R9aj7C2JzDsunefL8NBq1GngUvhVVEYPBgDrwS",
  "key22": "2F6ebRHqX1ijVYbFZgUmtMs3HPmb9rkbZc4JoTDgTEQFqZiWbaaVbT5kNAkNBcvmH43QAC3F2x9ukybBhUSYsTB",
  "key23": "2gwkJBfk7Fy36SsGX8i7GJMRYtGFRXWYCbB6N2dks7JRLTceohitT4nAT4ZXQTMYxY7R4yhfhiLVwj7Ttmm7C1Y4",
  "key24": "34aJqAtPybrvYhFHB7tNtsan9a6QhrLQFM8wXH1XJ498pYTEwv2aPQuruR3eVcYVzaHEuPBCfFpTXYe5UzYeoxaz",
  "key25": "WY25cSS71FDp7rxmuBLWpeSyFRNNhjEjNKshvJWhwSSw6pPg6PYNCqz2faX67dPDSfMNvUKfPU6bveoZeYgdP7i",
  "key26": "57W5mqwSzS6kTPvvAiBDZHLkShBTRcPz36gGkqUA8PtM3G1n8p2kgoDbQoyUccysd5YVpurkGV878nxrT2hEF7ej",
  "key27": "2mEZfW7o2iAtuL4D3a5PS2X4Vy1tEZ79UDkFLSajmMNrqzuNPiyrDxgtZaW3QVnBwh2aEqj16fBbpktR1KMg4X8v",
  "key28": "3GjRDxKyDNJZUaCZg4fjPUwu21va5KWusMyX9QxpmYBZYmJR4LQ2QziZvS6Qc8yycHTRoxWXw1yEoh6b9xn84aFG",
  "key29": "5LcME3KQzoGPRdz55EQoRa6FvhNgxMYMpiyc1qpdVAW7con76V2KskyGe9KP9zZBh8Sto61PXVUbXFW5S9vHaak6",
  "key30": "5YBMNpmAetY61i1CMAkFdxny86QVMykp5g3WRPn9KGv9QUTmYhSqe5wh8phEnhiCa9VsSDYAw8ghvnrkZvTMsGME",
  "key31": "5q7xKMpcxExkdQYevWukcU9FXDib9hJP7hd8cHKAsVF4RQqULLZQBdmQkZACKGNnAeFNP4KCFEyEsCe3Sdcs1V7G",
  "key32": "3u7tjegx4Rgc5veCdb93ZJoYF98bY2qgaPsh1w9raKEuXDoDZFWd2gWFsTmpQArS3aGCmGva6hDjL55z2A6TpxU6"
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
