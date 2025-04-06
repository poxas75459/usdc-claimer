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
    "41XtoccHHF7C63Pa6dNz8jMsR5KZJ9569T2PvfgengX7uiPMP9J8rc75FrXb6nGdJ53QaKUgvKXD4QsUbCB2kZhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22R33eu5ZJuEKXTqMsAusJzcfixmeT7RArJ7szJhBheZrRe5VEe82Bvaf4yzAeoYbXr89xUSRa5ppT6nKjUMsoim",
  "key1": "38CJtJQMJQCdu2S2KMWd9PK1NvJumKaJCYvebTUE79RXd41zx1ntt3FcKqqBhRtrAgkXEKcFyx1U7WALjd92dA5H",
  "key2": "4edBvx6WQMQoBbSoW9jeFCvyPCjZpE3TnMAzqZQWEJsWZjJD6xrxBFETZURwenCRAViFGYyegM43xKwGHzEj6YN1",
  "key3": "5dUFoSSP6axJyu8mXH1Gm4SipRNyMdK2mFZcWppxaPwP7tcmAsqf3HYeyPipV5L2JCwKiEEF3AknZkj3NyJFX6HW",
  "key4": "3DqPhzLSAQdBix5X8BAgNFDUydf8fG1wpVimc2RQ9uzFi4Fhbr1MeYNozY5o4p48LfNdmaufzPKfvxodfEciuxBA",
  "key5": "5HXS7mxSU7DjHfivpt2eyiPCFsepmypHQub5Nx21xAAzMts1y8haGBfwS99sAeG4gaw2UHhrkcbzcUgU9wi8MEZr",
  "key6": "3AvQMqVWuJb1awr8MqDazyZGckykPunextLEtxuZppDvW71sCTZ3TKRWZWSf1ZmhvwZb1XA1c2RUDR17zY31cU6s",
  "key7": "2W1FmjfJdFLvN21W8ryi5e9iyQSa4NXbjqJKEa3bmzponCLPzC4ogQ5AUTghoASeNZp77jNbx3Am9FY5EaXsNCCr",
  "key8": "2cBLtXz82sNBzXEPaQFsTkncQAE2Qei1k3QZyJTTyV1fCan8hzdoB3qmiX6asvxWGh6ds2TU7nzavRAcoAKoj6Nx",
  "key9": "4nDLkgAqJixbf9LcnzvPGXHc1kMgSYVdZZ7TS6hw64SBSVfyJH3A1ifbJkXuPoodLghQsKpUNE3N1SPk5CxsP5DB",
  "key10": "2ajPZLAHvj4UUeGXKjXe9uejEzVTULLT2CWoxvCgHkh2yVBh91cUaDobKuwQbgoK5FpoBgRH5sNRztKyFWzSeZvt",
  "key11": "2Asb9oNmeoSr7siCpQtZWbh8W4EFVyJ7zjCYYkaasQVEidthxpWTtDVxDdSZV2ohPutXGEndPb6cjb4sCRm2E3AF",
  "key12": "PPYoNobJ3psF2fsopWsUQ8ifuomqnKeuYMkANVm4GjsKKyrviKzSiVbJAgdfScfjNNMBPH81LqLVYPdWr71CJRf",
  "key13": "4KUMgqzeGMZxXE8CQNLS2Q55MgDTNhkVXeS9FfydvMGH938TuYB6u9bcF2cw8UYS7ZwrHwfu5Cj4cuUpyYNc7hDM",
  "key14": "3jCesBVxihFiu3wfZvURZwiSYR1uYKf5FthM8wsCVfbUvM93ciCdH3q96j7xN6NJcSYXQgH96RtGjQB8fc52YwYK",
  "key15": "5KF36n28R3pgXPKZfbpeptLF2Y7dEgHo4Mpf48s2ujX44yDXVwHg7MtZE4GNdjyDvQiF7zxsCxiSQxXiefnq8dVu",
  "key16": "2RJFXqj9wNrkAzVxgFWpWtUaev1nmVVHNh4hnWf1sdcHngTfr4c4rVyfzbYkhjexZrp7AX364xaVV7HgP4QbYhRX",
  "key17": "Laym3cqmYYRy71djXcM34U9Qn7iw822YW6zet9MbqojbQragFxmky3242vHBXbgFRthKXP1YchXvJAVBzpVDE8z",
  "key18": "561e2G8kYrdnJzaC7JN8NR88LycS16Z8VjzKHBzWdNugXbu9rFkNiJxMccdV1dWS38PBZADcLL47dEeFy7jtHmyQ",
  "key19": "3EGYVsuFdEh1APMb63sTXtz8bfyXnjNXGC8UFWFHb5JpDahgydoFNUsUiMx3DnhaL9W49VsLJG6YFZ78qENK77Ch",
  "key20": "3PNbH4UBU46jZF4DFdmgfrJQNnu6hNBjELyMn86C6UUq2pgXGQC8h1sE692kCi6QXeUWwBcKaXj9VW76cZjMteYW",
  "key21": "61QM5Zdab4QMBNdfdSD8MpXS7DGTkEHwC5VScaaeMECjg1SDC3BTraANDpPVQEWbBkV8mGq94JeSergQVHoScYYT",
  "key22": "3WzsWbgadvRHtoxgU1im3pB4fxyfwtdtgsM5SDi13GMGHWkrP71xxXKdBdajRdsBfZ7QU8Lp2MGRhWvdNv5kQvtr",
  "key23": "51eb6uYiaiyc5Xe5yWLXohLxHEcxFx85WvXjKLVRvhAmbNCRye27rVwhV9LpEwCtxzhY5VmUmTbr7bNBLFnkeVXM",
  "key24": "2J1XKW59wXMAqLHxuKFKNUFgXaP56gcNqrQEEZQoXocUj3x1XmoNkxM5t2kM2fj4zZCq9E6uP59vfz4zeS8Vb62V",
  "key25": "4DjV8uBpnAQ7TaodEYDgSPEXfVf86FSu2DgycBMB4SjMdGGXQ5avjQVdCaGwHbhu3pZYaNv9t8WADsG6Zp743pFH",
  "key26": "3XuE8uiSnv3Lvj9TyJxCUxCzF7pms2McyTCqHpHYtitEmVGMpdfHnHSy5QwHDyykTuDCngJi3s1RfKQKNc5DqvK4",
  "key27": "3PV4Q3cbSddFMSXGZ1q2iFLjoaM11DQ5Scga5ZRgFFMiqg1bEdxWeAvvdgKkdu5QUiUDSLTxFi2EdXtfn25htRiu",
  "key28": "5ZdQQctH59S6WJrwYGMZyYQCXAnJE3WGnBiD8SZ6RdbL1ENzRuuR2ofG3r7cC4PPo6d72eZoZ3NZdZUdwqog9ax1"
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
