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
    "bEFLfFYgVzZTiuUb49nCDkm3mNvvLfWbxxydCpLPEf5b4nfn7wkw2JAZV8XP5oWtgEWh737aFh3jSyqQ1KGbZEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aooTgHzDUPWeHzRXye1C5cbNqaE4wAAMXaKpfnHw2pz739Yuzxsoma5ua3uvWggtRgLXNZFogjP5yzsUFTeNUks",
  "key1": "2AMZQVqmgH8HPtyf2rj3YRUcW7whRpXp8mzSSpVruAyeYijK2EdF6r4181vVG6E5pXtGuVchtvn8EvNvQSiMWzcs",
  "key2": "2WZrtQSF7PbPHYKun13QMdR5FoUbUcdcuVa1WjM1VevkfFd9VtUJUzkWDAt9fNHaSpLvNRqVxwCKYmKg6DExDvUR",
  "key3": "45pCSJ6wRVgBmgKFdVV9N2HNJvtuUzzgP1gRU27qJKCQWyixtr53bmD8rm5Q84QJ254hXXiafZe5jcGNLUKP7w9Q",
  "key4": "iAx5YhoMuSUitbUgfyrDXukCUE3h8467oPzCT3DkrbprgDnc4CE79jvtmG62GKsrMQXNDVnzxSEvze8owQtfAxw",
  "key5": "3gdp4sfo3vNNxpAmnGJvoZwpcSPy4BbK7PzWWF1ZH8HeMxdZqXrRMSCCNBFc4BcAntrva7BKiEUoZFszD9AWiLcg",
  "key6": "64nhn4pw7kE4398t95SmdxncmZjDF5DhmGgem2vuCuoee69zm8PPnczY4oc5qGabJKg8k4gfpjG1tDjTgqhEwRfa",
  "key7": "3CXqD2xKQMzuwzQyHd6ZTRJzkhS1VNmCFbhid9YAno8QEeagRUGCR1WVqUG88HLzkzpk3brKnmxCDsqmgDsLvA3U",
  "key8": "2uK8cJyLFQFDKKqe9JtGSALg4maSeXyXyUbUi6fQ3MN9rbfAT3P9M4xv6QALedUPZ15XD1ByU2Vyeg2ZMx6xFZVP",
  "key9": "4g5Bc7mfkYr8r5D2jYEqT3xyPh5Le9BhiN6iuKeyZw1YsiSVtcWxtPB5chez1aicS5E3DwKV8kJqAjApwLYyhW2W",
  "key10": "2Tjo6uZhtXLbMmBdiXECgGGq2GkR6dLgcDBEcRXhXKLj5VU23kryurD55rcUw5UynBgspu8g2Hf1x86m66t5SJTd",
  "key11": "3ttHEZE7dXMuTBrPJFDZUMwbQ4jP2ehya8mG45Qfj94AmpBDa1qZnW2eLjZtxwzYq3FMjB3zDSxUbgXRpnWk6pC9",
  "key12": "5qoAjDGfXjRs1criWPWJWSTftJbpStxULYAmp3x8sV2E5TNx8f76xNcfDU9eWvQSjoX4Bv89Yj766LHbWFbvUxr",
  "key13": "3XpVZ3RojMkNM2pXjk8GkyequFtmv447X5U1Mn4Mk5BZLGzbBRCcnF8aEGFhNckmoaQ8GDcewDQ4XmPcKNtSDHKr",
  "key14": "4Bs8sfWGBjSBmdMPjpRpUgY7KqTmoqmZaEYDqQDBzLz8puv55eRC4tQD3FQtXZZX2jXA8zutV5z6fxvygRQEA2wB",
  "key15": "qFWjzqAngafPcCNv9zqEKQTyzEAGan3wrL9hQUd3zVGXuFMFP5gxqqyoJrUGYXFotYYDSAojVKjvBtwFtcTayKX",
  "key16": "2ubUUL8zDDbJfDRq67RWR59pmLJZ82dkhMCYYd1teMg9bbDwtYrLv337FZHYML374kKCwA6zh6wWrtGDXp4Yjw4q",
  "key17": "5ZZ9Y7pkdwKWwWSV5KqCh7hVJHXqSHE2Jtm8c88nzFqfuJM11mZewFQRf88tKQwWQsewLZrxge5Ru1gCCon92Qs2",
  "key18": "YqdQ7RHELmY45Yq5md4cMs7CLPoVVSuFGEjmmYGVo86agMsLB74qPbp8TF2x4WFC3q4p3HJT1JzNfP4VMqTYFTo",
  "key19": "4cXY17SnVwWuS79XRvgJhH5JtVB8YQnQVckdxJVSH4hLbEeEac5VAxYf9DbNJhcJnmdXWpiEJwzXeRRNBtm9L2Wc",
  "key20": "5AuRz8ZgB1ks1ZJFszUeHmzDuNpsLLvJNKdgx6YzbhoaUqai7E37s17G2H1BM2CTer6mTGe5Vh4wp82vuGzPemZb",
  "key21": "5A1tEHZf83Psg6ovttAZcijgh18gbXuWG3QFUPTqfEARZLGHH1aQs2rcQK499hdadasVSrs4kyRbXAjGC1NCVAQg",
  "key22": "Cxd8R3LpUVf9N781e9HUKJn5NJd5yuEHRz1uVu7HQPYYHxCQr4k7qwuZQzaDuN9oNLCAPcuqESdNRxnkBPLekPj",
  "key23": "2gKXtk1WUEbUAXSPjeCptPKiHuNYFaTZqGarRV7d7YrB4NtXPrsGHTnLL7spZcHfwtSJijVDtM5t5vL2spezwdrf",
  "key24": "4RJZoRaKXDtK198j78XvLveKc1jeQ7hH2gZzX5L9Mri7ok4eFnHSU2Yp9xRH7WLsPw9Hu9cMb6VoRR5yfNgJhs5v"
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
