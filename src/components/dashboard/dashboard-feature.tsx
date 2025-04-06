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
    "4kgSbBNhv2ig2QnQF35owFqsATosgM5DVBxii944YhBBLqbUgLTEZQg3JieE144x9VfvhL2xAe2G7mqADzLDzFj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DD3JGHa8hRWb39sjnPtdPeXtpdCf4tyH2bZgBRowqgNnjazAnCEqV8P8fdnppEZ7Y69hFib21ZWF4ukWUSEBAo",
  "key1": "6ahBCKFXKWS75CBrQ7UCxCCV5YNau4gzJJa4PoueFmuzKXLqc5oe1WoAwZAUovym6irgaPxyLdDyPxFzeWqsoa8",
  "key2": "4QmdGhZkmMeL3g4aYdfRYsPCaRYxCe8H2vyus5pK7inbomc85yBed3cWKXstc2rUHyNzv38QFZMV42t3VfP2mkCm",
  "key3": "5ZUd6Vrk4a44wFSWaLBnZ6A9KKFoKw7c9P5UVwhxrZZW1hy8BCQJLuSYZ8TXUwYTuLkkWTX2wfsTdNrMTptT63M5",
  "key4": "4VwYBNqQAKNeiyh1TebFCw1f7LS1buGqLCkystigfFSUxfdxsMypcDr67DMJaeRfzY2SLDrjbJZ288fUf27tfrF3",
  "key5": "2yd4aDY8bx2t2gs4dzQaA4S1tZWDXTLA1wmsXu6UTLvwDdeyEJhvWiVgVXQ3nESoHXXNNX7VzrgLHHeRbyNW3Ct4",
  "key6": "e1Rg5gfU7jZdGV9ZQ97fS6jfACFeyK5euhtHtuwW8DT8tPfWB59impKBn1bMsZ4LECBDQ3AT5kN4ggKQqxiF49B",
  "key7": "3RGWu7HByeWHoYYCHw51aXrzowqTDW5LDK9grfDyAWo7vP1vii1Hrb7BgRCa774vZg9HvY53xXHP2TAWosAvVPx2",
  "key8": "3URB7HPy6yH61X6JLXFvz9WWZ1WS1VL5b15ZoSEujP6ofTq1HQkLfbhh3J6FBWMdtqbYF8XvkZvzCRhg6cEwNQWh",
  "key9": "3BDfMb5WrCPKcY4zgrJUDbmFKd7T8KKeBRbR5whQeLAruQeu3fLHc4Ku7cym2VC2stz6BcX219aL8PzaXvchppXK",
  "key10": "2uMQ7ZBj73YagfoSbGNsUViwoKAqcajVCw6HzfrZ2pao2sP5Szs7zxybqqC47YNkaW5GfkUkNKWjNBqcSLgdzRSS",
  "key11": "2s2vERkKFaXwL7A6XgMcvkwqMXvyY6DvcQrRFhXPnmfQ19HwG2v7v4ERW8TzjMog1KugnVWMZhiYdhgre6ST63P4",
  "key12": "5RhRDuZw6jSQZ96LA2dYNte3tVx8dJBn6us84ydk2uLM9scUfiNBKeH7RohoeMNmAq2QMzBhgw9NFwyks6ej5B7i",
  "key13": "5ovRazFaEKr7YV1MgE7fmn88STgffmjJx2qFsLgkMswGkZ6LMVcMR8hXmtFXJaKumjVe5d5jYjvPZghdvngcwKdF",
  "key14": "3bJqvhsQRmc9ZBY35ir4F6S4trbrpVExZicWNeyc7DpsB3GVDdqL1VstXQ5aWmTU9RocDbaxkT5Nj1CtKh7S6Mq6",
  "key15": "5rfvHagDnFaAePniG9kNwv9sowhso1iaAbzRv6iCB4yYCv2GqXMiLvKqX8ktjvfnFFY9Zdwn5rnsqrLdet64qzd5",
  "key16": "5xVz22FdWn6S9qey3dDznE7YaRVAs1Rg9ZcudNhomV8VG3ZUG56QXx9Jg7WuAz9aanDuyu9xgTSF98J5eu6tzkrg",
  "key17": "Z4AyFCuffCLDhWqQ3ruNh48gCQP3AFwoJMKKq5WfgLG2WPgLsd53irKj5Xq2a4YzsDhLs8d8X2cCWTfgoWQgWeb",
  "key18": "4hn1onYUTxyiMujBM6XiHwQM1Urj3pgzfMBv3hYrsBYW7V6u1kshwFRebF8hnoQFtA8YH6MvMHiDCH6knUri3hAX",
  "key19": "5NM4A1fcsh9QDqQTnH4JFSjdAJaoY3ewFTqzko9sCTcXUTz9HafbjoYfPqzamvKn3WgNx6s56QaoJGYHusfV6nR5",
  "key20": "1d4Q7LmB7mBWHqcBDNDTVqRxSaMCxrtCsVhCwHsMyh335VvDX9Beb7inGSJ4LCRdu9JDChtcnyDoZMz7Mk2oJ6w",
  "key21": "28bEiEpXHSHA8ry3rx9Ac7oP4HcGGg535EEA4M2r41uBrueFZsMnpYfgTsJHayG3yq5cZFAHsaoXvWvAQ1THjSxm",
  "key22": "45SkSMmZubnKxsKHjF9UkZCyDCRfUfbtuQNYjqurSzHf3FrmvfJCHmvLYWBfjvxrvxSyfDK2cKVDEEC92uT14iim",
  "key23": "2m2j17wJRFJgr6E5THgorzyXSzJWSY8Na2edWSem22HZoAMmY142PQnsQyyDjre6HMSn796keMXx9mTE7sw2Jqsu",
  "key24": "56Suj32oRjvNCFNAVaeLjNpimR2SE18tdUpVtWdWzPhrtxrMUDnqMcS6qQqccCHZ66eM4i2cBDfsnCQBUwQu7bKW",
  "key25": "5AU5aHQQz1AzgUthcvUz7PdEdFCfj5SkhWG1mtJxuz6zhCCNeszNbrt89JLmFJLLQtL5LU5wBr1Pwu8KFzpv261Q",
  "key26": "3grNwACrVqLo1iATPvZG82F4EzEeX967NPRw5CqfnxCeGFy6FYXxdLxqtDCbHtacBL1N99vhs9jeTh6rDWTP8wQj",
  "key27": "67pta36PLhqLP6gvmUkRZHEFWpgz2QrXenUF2mGGmbC5zXEN93NqSHDwSXEh6SUELCUkwKdR7QKWV8R7wmnhTxd3",
  "key28": "5Xr3H3J2Y4BFd9S6ymTjCL1vTd1UAqvCdYsKNR24wbyYvGAk4HpNhUpS1hWJRkiyKTqVTtVjQQKRRu4oi7FrVZ3S",
  "key29": "54TKJNQi21MBADBr5Ur8mM7nRvehM4JcKqN4XcJ4piLnsrpdmHE2Y8oTjktMBi6TvK6zAVK76drQ1vwStKC1e8om",
  "key30": "3WUuNTEX8nmNGX2egq83dr5dfcXyKV1LiWDB6r5jY4cy7xEbuVrmMUAbop4rHLBtgae7PmdWexiCXYXdwHqztCvJ",
  "key31": "x9M6dnETtXoP8y8TRbzJsdvzzxJeM97HAVtHwaQpbB6mxwstdQLzvXaUH18Ehgb4Hg3aMe8hRGz8yARrfkgGLbW",
  "key32": "3nQy94Zd3obCB2YqraamvYwLX9noeC8iS4pRi3mLP8SkkRMXYRBR57ejA1yeWH5YdfnmmJgq77s2yxvutarEyqTZ",
  "key33": "3PgawBpkCeMiGpkzyveFJpUJ6mHZuqqqpaywpVDxt5LRBwnkHxeR7xdGLf8zX8ibrajm2AEnxpCV6oKhR6yqjzPn",
  "key34": "FHPcA12x4EHKMuLyXVcUzfGQidwwVQEvxVwq3TxCzyes5kcbebbj3sQDwG54CsnF92tGfu8xUvUexd7ZmHmKpjv",
  "key35": "2Ko34VMJL4kyTQ4ubn2ZYJPG6iuejQjXkMZJDQwRestZbAiLaVCULxXw15eRpb5jBKqGyGtcTupqpLaUqiidPFWG",
  "key36": "5H2bJyEzF6rukhcXN5ijMG7uCNeqspVDxmKmLqb3fbNQ4tPXtxNpu3baEDLsrJqY9hoUhWyDrpbRiLobyr5VB9d6",
  "key37": "3TjjGAPXnsg33RfVHRFC2aw8LeUJgiJA2YUZa56vP34oWcGe9C1jcTdRTdpfGWro7FCzwHbGcKFL6GPnnA2FwtuL",
  "key38": "4xUSprSAoEyBod8ycLQa9cs5pqyaudbYZguvhQECckdvCqwAoFW57wvgzcjeUcARCLpN3AJXf3uNVpEsxht8nfxo",
  "key39": "5PjuX4jub7PvuJ5hGqSXweoBa61qYDe4fqxbm8i9UbZdy3kTTioxzU7XRPhbRNbXbbPoiNbjo2miz52t8RdDm18G",
  "key40": "3vCjsQ3GMSbhsFFmSYt4EostLww9Hst7onPeHa7fYvVhGg6EZa4hXrSgg3bF3ubKgoRiVfRBEJ7fbfV3s9WtAeEz",
  "key41": "3HTRjmghVFvtoDsbyNTvN5rhzbFVboGich8CkjMfYoRMrfRVM9HY47bek387H7csknxvmV3dWrqb4XrR3LXkbD8b",
  "key42": "2MzKvLDPHf4cM7vSQbK6N9e8Qh1Rz786ww3yWq8vCMDrxXpwxQFw1c6cNFE6iCLywWZDWNHBstEfub5V5CWZ5dCa",
  "key43": "5WbSFVJpVuoKc21Wy2C9VnRaEMKVnJgQKugkNMaC5TPSDunzpUhvibocAWyYdqV5hiNBmUiTBCrkLcVyM8bsCEtb",
  "key44": "4xRv9HPi3c62E6GrKnA7SZmd5AJ4ceCQVVyV5TaELZqTbGTmYKyeR6do5HS1B1FSPNkEnXxFsahj4N5BsyjSwZpy",
  "key45": "4ujByYYuoAtK5E4AFxMmksLp7mCGgYcgqgRNrzUSwQc7yvdb5dT8YCpzdzVru3xxMJuMACUWhPybUnmB6q87Ez7e",
  "key46": "2ouPBHonLTUYsxiyv4iV4ndVQ3FsYz3toqCPjNjPUPG7gcTM9iCNC5YCU2gJ5tGgDUj6K2dDHPm1Xh7HG6jzLUJM",
  "key47": "5W8rNqVyZUUxyDpuob7YMrVx7Nq6kXWncTV8SYRJ9RgNT8YerF7DxNwjYEZz7TkLJT4ARdTYvpCxxfGGb2Becryq",
  "key48": "57YpcvZPZVJXz8TSmURVbPSoA5gquvnmvsVRLVmtAQ3t65pwfJL2Smf4ReZfU7h3LicGRDJWs48h7eKwnT1jHPFB"
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
