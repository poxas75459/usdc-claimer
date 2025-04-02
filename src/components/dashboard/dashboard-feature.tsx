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
    "5BtmeC6LH3eGZeRpgGiDJDVnWuYZSsakqtk1Pnb7GqHEgCFq1eEj3DHoi3hFoworgP2Cx7qBB3KuDFTUaZfXFTax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqVRJ8Pp3fP6tUQEhUhVMzoNCdeQwZkehJ2ep1QMZnmPPpX22GHgg5GevosH9HDLa8Q3JvJdWdebZom8xemoDA4",
  "key1": "5WZ2qBnut8dHwbhvgS7BwDVfARDrSEtU6E2ScKRE2SyNJnj78nBdab65184ris9bXZNKyxUhLLCpwVD6fk1G9yRz",
  "key2": "4aRkvYeUYzEgABuCrtzVCYwzfbsTdxBnVArRxxuyVBWgP9gTx98cisjd9pasrRVMdCuhRsnc3cheTvsjRjBTM2Rw",
  "key3": "3s51vzFrYYGVmbxcmATzZjggePny6tDfYUaX3Bf4JNGa1vNsEDbwpqCvKuRwYeFAhWu881FtBoo4Lvogn94aR4WM",
  "key4": "67mFbnGFQaHhUQM3Z1H1YDqd6onQXkWP96Nxp8ACXZg7PsuMP6XV8JvY9oD2uXrEstmi7ZAgiq6jviE8yxxppu6n",
  "key5": "5TEzhzzk7vP9ohG5s3apdN4vo5ZyoA61kGVBqZc8M1be3QPukzzTuQTrcG2LEKSPucDZjVgVuZ6VTowuXAniNnb5",
  "key6": "2o7trXqj3XdwdeuAYxsnPx4Gx65R6oWonbPMUhPPabzTSfT2EX93uYvmhM1f3hCFEfDoBfZRugng7u4sWhSoZb6m",
  "key7": "3jpv4Kj2wVQpgarfmYyPzCze5f1LdqLb5ABTo1ryXWFX9NW2vB7u7pDUHE91CzoJnVtZzahfcE8YYCnuBhR9nZjL",
  "key8": "49HMGSfT18jPJ1fvhF4LDwcerrf57Ks66PEsFmk9EGaUsf5MuEx4pyEaPBYsy9z6hHy2dUDaMQhvFsEuDgL8mBBD",
  "key9": "39E6m3jsrzxDGXSyn1iptTiXcVrhgcgSwCnGwDrj8asTKXN91L4rgJgq19uGwLJbpNuBWhGHMEegtWgocMfXDZex",
  "key10": "228mEAywrXioWZ3wy7FqHPi2UwiqWHUAtkKFJ8saMjTawDUnbkFFqRaTLChUb4zb4Qy4nBYDBf9ZA2TE6eWqBNbB",
  "key11": "519UwsA8KWetpPqyqj31vksYXfKBQpTJ5v4zJaUhj7Cf7bT36DJRp8BoEvurUjnwBcNqe9b2sndDhDcUh6yAbJwn",
  "key12": "2USg1VMHxdfpL1AxW12YayYfsw6qnfCTW6791s8ouKa3urKN95TuAtCsmv3jufCQ62fwrpPvyZGJpnRmCxE7L2DL",
  "key13": "31TQCrHVAmPCbRk1DFNqJHYtVpVoVSkVA6QpwT6KH5KU33Uk1a8WaKoeFGb4PpHzAvBdvfUg95SxQSWoooMzmQbp",
  "key14": "5fxKynssuqiw3gYrRqWGv4Q1aGyspYLhmVXZZQzseeCZii13qLnQFbNujECp1y49DTPaHZnSbzHwswotvcy8qDj7",
  "key15": "2LJEqqj4dqzjYS53WN5ZXUhfhWRCitimVHfpodNpk8NnuorpjWNULV5HFhNSRd3avsvPvLPY7TpH3tMDRDDFUEdx",
  "key16": "5ZJ6ApAReLPdYSE1zf2d3kqbAGL4K1UQjUEE9GJTjKhT9sBNP3Yt4fAVu91k9wKrKnkxEteUr72aXqNxzSMcxxt6",
  "key17": "3QUS1T7nVWag8hP4AUGwUbM5CYyekSASYoXiKr4HvLH6poZfpDs8d3u4QQHjHwGKZD4aoTwJ8kn183piVBmbjk3i",
  "key18": "5XsV27Mj7XeosAs9zu33ocdAQzcqdHwS18kUXZj1QVFfYDQBoNngDBaSUDs43jpB26wRdkDn7G594VL4PGGqF8Yv",
  "key19": "2yDCbDHXbte65FGRHLMgbmYMU7xjzFMVRcEpxRfF68gu1zTCCnZX6vHDodYgppwkGcTGBK7iuFeiqV7wBPQsgVTP",
  "key20": "4mNUABdY1A2gkpb3k5JHNyEvJ49TasDj7WyYXiLFzn3E4RHRGNvqJvSukVKDBytRaRkbAFKcrf5qGSeSYjjdmjkU",
  "key21": "3PTHNRiBddNS9CrBKfzJT5geDUkfWBo2kiCcLoYnVeScGujiQS2qmZJ16PCEzQzZaECpBqE2WymmubdG9VmX5rDK",
  "key22": "CYdoc8uFaRzDxag1amF73QVc5HEb8LnnMh7NwwrSUURdAsmyxYCCG16c37aRcvuTXkVC5USJiBbJ6jwD7aPJSf4",
  "key23": "zfurFFpRy5BrZ3HZXjV6buVA8vtDmxpZqanY1WP65gSRrcSD2ZLXNc5ZWifuAM6wKjjSucsDzaEwpnDPN8igPRV",
  "key24": "5Ezd8sKD28T7RetTNj7j71nu5VfUN5VveAXwyGdj2qXtG7fAE5qfLT5vBbEAUYSKLJ7McrmPhyGPR37FZPWJ9awE"
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
