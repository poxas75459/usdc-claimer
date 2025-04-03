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
    "3418iTYnvcLE2nz4nJN8iPmc4qivZXaqTaDrK4UHexVFzzCY9jMgsvJgnuon41M8kjKgxd7STTmdrJyFfBhF3nQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmNwwPi8Dy7oSZ4S6PJ7R1ttkJ661dh9uNECqp7J3D2DRErL6U9JHuF8J1etpoYHsuPjjASamhkTaBtHh1ykfD3",
  "key1": "5iszboze6HBREkJRWSyUfiTgruwPRu1gHzsBWk7SM9n2r29dj9WNRCKx1SkoVEp4mK2ueT3QHkgHqGoxKLgrQBnM",
  "key2": "VvwHU8RUe2FtxnwAm6pRb3XhPnYr7LKMtC8yPGaephMkW71i1kf9pJ74KdRVTCo8C33bS4dHwghWJ5sfaknJWBN",
  "key3": "5TfovQeMPgJtet3hGF1ghy9dZ4jxNgQuizsiACQgJTAQ5xBKxSzVaXSFFmgDWY57YwND7jQeFyCtpwgWtQq15a1n",
  "key4": "5WwnrgAvKgnicV3gcD2C66KnUn1iDLaoUgXB13P2AXxWdBdZq3B9eAwez7QjFbNyoELwDwF7YhpxkgrAVv9UmRaz",
  "key5": "5CBo5JGxxQpeWmRu9jDju6ftTVK1eJbXpbH4LgPoZrxyCcdnGa1C87adKzcEjj2xX2qeNiP6Ju3kWJ5EBLUEfbjv",
  "key6": "4FcGhQgCwYpmKmQboFUPSc1S3UwtCkjqdLFCERWF5L4Aof9VwzYCrHYV2Vq1Hzf76BKH8Yg6u1GAK8QdiXfHmpSE",
  "key7": "37aJoe8M9PZL9b8RzCWc6MXx8j3B2F2VUV3WHMDJ61cm7j16t26YThHmmwQTcwRQLrPBbw1q5nRz4xD7fmfaqe9E",
  "key8": "2YBw5vELkBoh2DfnhvZbpeqyrqMYDhSvGhQx2qffA2nE28G4SfADfdUhxWXBnu3Dt8ibY4MFQrmMgnm2V5dKKdfD",
  "key9": "2prt97SWyiRkRPyPhCuSpWLigD819wsKd4FmAmwEwZm1b5W6kgpiNkbKJ7yJkfdP2S9UNKDN3DrxkiW6VQW15mLk",
  "key10": "3e8Hdyo2MJZ6CK8RY6Ge1tssNuYsVVPuCsdigk54vakuJxcfduBt76FLMZ62eoNHfi4CUoFYfAUCpBnC5iQw3hUa",
  "key11": "3TC1FnYwAtrKWgGASngSCjrAHonQL38FbDbweV3gwgWj8bycVbWWqEEsVu7864vdc9LbGaWDbKEcRpfb9xKtTuhe",
  "key12": "Eg7MwduJYFMGLaAEJFL2Seekam5VVBqAHkDAKjK6byWaxSeRCDQasp1i4YZnKprJZBQDv3YqEN7Kc6VAEACtZRv",
  "key13": "3uQmav9Uts29ZByc6KmySVe86Vbi51BBgCnMotutHBLP56E3CbBcssdeAt4id5h3hrStAjVZWU9k5cFZRxgzHibP",
  "key14": "5kudWGavWB75Mja8JKDSfw4dxww7BTsHxfmf6hnJd13pN7NAMSH6yZroBpPX5EUEkUGPVYfsaogKk4ph8ihCAhda",
  "key15": "3pbZcxz2GTMafQLUV9HaJ9r4U7fR16RZr1R7oi4snQBbZb2wvya3CVXZc8LEogdoY53Vm6SXNHb3SZMaenEgshJU",
  "key16": "3M42FyguvZ6VKKz6xakX4H6qv2aJwPSZVmZbRcS6NXxJXLvMa8cymSiT5ZyigytWS3fjfcXhzvQ9z9HS2NknXVHg",
  "key17": "2UqyjgPXV6df3BeBoQj28iX5uEzZ8QfEJLtKwsrsaFgrS5iMKNqsmr2ns971358e4YW6pkULzefTLWm24ztaZGxQ",
  "key18": "3LLNyxs3MvUCXwUCYNHPAoNJfM6euSjYBgbcaL3ACsBTK6HfndTr6vKcaFaf4NJWsrsCFRZvfSJGs9EkpBfKez6x",
  "key19": "RHapZ3p9CwWo7kLEQKPpTpsksChBgfazziJqq8EcpU17hHyM53taBgRcUxfWPMWQzRjZADkCXnFNchs3LxovQeT",
  "key20": "RhYo7ZpkxoP6iDKcp3swDRdonmiR2H3NzLVxDM4Fnp9RQK6yWhphipNxB7zkTDhhST8RjkvXZjKecg5qLHJaRTY",
  "key21": "4BA1GjxcCUkjRB1eDjoQZwW2egM9Hq2oywxXcJZDgTyk4uaXNYXJAYZ76526S6ovni288K15BZ1DKiERAATds15d",
  "key22": "5QkJ7zJBjxzrpRRMqKx1k2k3nugbYV8JzL1WNwYkqN418WnSag91Dxykn33ipFkPGaMMU9zrFFSU9Uaisqg3BA3H",
  "key23": "6xgTY7xJaKgj2CS2FHDrSLfJC1FRgVytg9u6iCWN7ki6MgjmyxWsXpAZS1jfAsynDWSgzDs7u6jBHFpY4c1DG5S",
  "key24": "3CJSuFpbCSq6FfE9PnbpGRuaCXZ4LnqLU7hKLnSKyvFGcUpfdsgS8tuxhhxcP2kHQxtyG33pTwugr8ygPVBmzmwj",
  "key25": "2KbwDuqMsXonmxRP2bHmExcCY8N5g6gsNrzELsAsqYXVoJFeUaVTFC8JPzvWLKd26b6SFS6v3LQiDspS4HGCxDpH",
  "key26": "StzwdNXFFMZHXJKet68zFDSHJppxkG1RK1ZpWFQApSTh1gn8NG9VoSDAUbb7FXrdGKqAaSqdpR1o5fmgMohTGKR"
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
