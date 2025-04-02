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
    "j6WRMfFgbDzempskf4CB4Z6Wo9rNnq6iznfN8y6nvHW6DrvHPoT4zWyk5TpwBpekjNHb88QV1odSgSzz22EWLKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56C3RdEtyWq3PdGLVYBNP2R8A7WzXPeFVMFYLQR4J6PwKBVx4GFFjitBrHgEMLFVDhPktpaYNXPqy9o68NaZYK2k",
  "key1": "4YZ8oFEqZFpUUoJwXrj4KRyg8n3PbBNNVAhHiYbiBRfMCYrkRAjyDGrVmj9E3sJ3qonUrv9SSN9mpNURricrtE3S",
  "key2": "aJWYzkreBd4B2jRa6s44an92t19UTejR75EoiTBxKi6c25GkmTDEaUVhnUibSCdfkaysDAEGC7S7U8sHBEzR3hR",
  "key3": "AF9atETisAL2CxR7szQr3GqxAm5VDTgVG2Xh1C4hft32jyY2d1MpLoY5QWyfbp2X7fno8heEsyUanSFq4ai95f8",
  "key4": "jMNAzQwAF2wyAVLBgGYw1c9t5JgQ9W7Puu96C53dGEN6C3FVHzinC89HiepnVfJ59THFgKvmaBNAQhdRTRE7pnx",
  "key5": "3FAUcHN2cDVtBchvtcPpwVS3ZocnqAgFVHBqdSjeL4CLmmq5M116XtC9zbKTTcqcnNXHBzxkwnvDwmQTVej9GqDT",
  "key6": "2RG5eHRKW247GgWYcUn8GeTEwc3V6C3JrpJqKXdHPvCds32ia1jv8LD7KAoFfzPeWbLVkvAyUXerUD1r7jZ1bwst",
  "key7": "2zfNqaeV2hwSw9TxiSpgNtQ3DGoaFf4SHQThLsJDb9ivTax3468nLVmUD8AwD492bfnCdbgHkCXD8eEvUjiLMJbU",
  "key8": "24W8zuD2fHe4EjfzSGPs1UmeZu2UBLTWxv6BtwBnpUSUfhSRpZFaTsW5ztdTZPAj114cPRro7HZmUzzfJNLUVQwN",
  "key9": "2o5CLeQpLZCJ6H59UcomGH1e9UecRSsQxvKAL3EdPFfXSHtuFQbxgWEqqjPqjFZy6udZkbhzGgFHNodw6DdMm8xQ",
  "key10": "5EZajrgSquv3NiaVwxEuVksFjoKXEtSXzu5oFSm58aWVLqTKbDThLXDRbpnRan3VBiJ4RQ2S9B84tXq4jJn7wNPX",
  "key11": "5RAfd1kz6DvqkzzZKSg4rN1n953MRbkq7g25y9DDpUr1xpifqWrXm1sRzuQCX4mXLokWygubFq9C5PpcyFLMRC19",
  "key12": "3QEN4jBhUtnksPUeFSz2kf5emHTW6WcftpoMMTVzYVeqpBJTnm9YWePw5AhKDiS7VukpCo4pU5qp5GNhvqBsSoax",
  "key13": "Z1d4TXpXY1nB8zk4Mymt7qhhEGktYWyUskFqtjntQaJQ21ZZ6ivVAEWB6VVkQHZMYXvVAfEDTYnfctW5GgAueD9",
  "key14": "5DiHJcV8x6XLCATANb9VuVryL3epF9tnEu9gGwseWhXw4eqjBJYxabGB1Lagd8i765iK5z5wLViGFxSh1JzAWaER",
  "key15": "4cLy88VDzEAkScmh6S7TJzb14XT3sqKi9ZUW1d43nsY4GaLvfjjgvEYU2uWrUZH6BDTkEjgoDL4fJ5KP8z1YiCbg",
  "key16": "h1BAYBPycENum7mSmjMf7pw9T52BTQbTEdjMWwDhXWFamRMH6kVqA1HvAtG15v8rEyatnUFcJSkbzGyx4EKMGSu",
  "key17": "65DmLbGChDd7au22FmGWqwMzK8SWUKomidvw2b7vkhURGhqBPcfrQjvXbqnsjTnwyrQeKEeMmpHgdw2Lp9Z8hZsm",
  "key18": "5q3L22zVwUPwaKhmVYGrVonym8KityJk274qnPn9NVzjzLoV7ojwwfuACHBVfCHCS7gnqYgBUumjT7rF5sgVuVH2",
  "key19": "5eyKYFZ4kJnw2QQTDj3gmZLDH3ydQUZk4QK5iLjC2cyYr2VbTcgLrCfuVufs9TvpR7BCFMXYhx29PAvkoCb54Dcc",
  "key20": "4ymv1L6GuRvfwZ1zXZwVs9y26dYdZNjzCov8q7thqiJrrE37biVYspivhuxCjLbJCwePhP6xJ8voMWRWTuiHdz3G",
  "key21": "3WdRwaZBn5gD4UMHgHBUVr3ZwBF7AKPgcK616ZjmH8nC3T25eS9ZURDktuYKuRmcuJwk9udNpmBiFrqqA3JX9XUG",
  "key22": "3v4RdM3AQcexTZojZWd5cVERKbdMYSGg3kWZoJgt9nNab18TXTUEwBxdqKp1HoG3GzyGZGqSJMAoRsQMGrk3qdvB",
  "key23": "4eCgUDbaaBDmkvEZUEdjbsTikBxr5XXAPWAB3i8HiQn9iGu5QqMjmzJ77Qg6efTwi2ZWHCehbUmBhnjwp6K9Di3k",
  "key24": "66xfYx9CTrAoKZr16ULP5phVVmqBZ2xFyiRywMBhuReSW74h1kM89dqJKSee7U6ZzbBd2vT7gD6aQebj9184TaSX",
  "key25": "65gbvnapxCCQ4MGAHW2UEay2Mt59pEpAc2vtMFNgFfBU6crSKMmFdnTRogTTr3k1QGvhwzYQnVYrtfBAuwMUdpfU",
  "key26": "3mGSCsyp4wQXqbaEqHiBQHPESs27XMCkfUrzPjHgspKacD6PpfiRkkDYCubRsgxUbCxkYDYK3S2TgtearG8qsBWp"
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
