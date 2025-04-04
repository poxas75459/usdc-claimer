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
    "5uwVFtwjjc7gARALYfXRhdKAwLRV8d2CUxNrGchn2hqQuQsPLR1bKLzaVsWyTtk7ABMoQTrS3LWR3GLmgDAjcs85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EP8mZVCUD13Rd595Dr8pzVW6gs48dAHNFihqZaFMQwAQtNjgv7MEiiBCDm1aFiKCiwVuL7569fBvJrpyWyKg123",
  "key1": "2ehwsvk9YsiaU6u1H8Dv3FGvJXYyX6uT4WXZhDvHuFdK8dqfMV2XwL1eGx4Gg7Ds8dksE9QW1DRFLdgsrZa9t24W",
  "key2": "5Ua9bfruVB8ZP6m99LMJ88uUfb2WRhyJTaifFr5RvanzNPnqPt3yep8qKKr2ZZrNByd8w4E3Pop8Ldk1EyEm28GU",
  "key3": "2Po4txLhopah141RoPa9mfDDtgwzK1Wr5MSZh8Z3VUtjo3RttTet4poNmGkmPzk2yqryPN4USfcbW8pcpT2nkK3e",
  "key4": "5NsDxiTG7XUetjfmN1VMW3uizZioWD4jXxvvZo2VBLXkQozkuQieMYLxKkAXHRhBnq89wPiBVpf8uXEqtoEn4UVm",
  "key5": "3AGYZHYGxphXaPY9mVuJSGDGkTuLZ8UbzMcRyEGjvZvG2Zkc8K6dMWrWHbh9Lwdz6fpta1qLmUaL4FQMBbHo2yFT",
  "key6": "2jsX792z3pz4a8e7LYzmR2Zu5cwpXigkcFEvE5xQ6nvRVRHeQhYKgU18kmTDQgUjiffrXdgyz2cULcfH9FSVfgZY",
  "key7": "5ioDzokxhaBsUaUPAaiLdP4NNrWWxKQwe3mHzSJQiDkoRfkamthjXHyuAPGVVcKMkNZcj3hAab2zmRSDxfKgiHrE",
  "key8": "4rkwFPZ4i1RJ9RuC7pb2qxcfW4HrRa3SCFygZsLV7U7z2hRrprVKWczA58Ldbas3YhMFXC8EsS8scKpUfT9rvmdj",
  "key9": "2V2mTw1hZ7g8un6aQ7wUGJ9u2sik2UxCSKr85fRXt5AgV3QE5fnYSGxCXDdEHS8rJJn6ycWvB1i5pQqSauA9yPqt",
  "key10": "dqhaEMcpLvcMgTCBJwqrTngVh5XC7uvf3ecHtiUSieNRSprJad9NbTK8CEyr85sYhbYM4t9hEVGFognFNnyZYYE",
  "key11": "2fYujaVoYqJE2vBEKyjFshUtrgPp6UBp48ASn7KkzuojxbY1iZDAPdGNijGdNfZFKNVRSYdaiWtWxeh6RfLi3DY6",
  "key12": "642MVsCXBFPzQ5wyer2z4s4gKCdXxmybVMzbCwepULkNboosZdkwyWF8nHLvpzjycb2JU2SfYeiDFCUbmE1koLZt",
  "key13": "3sY52vKFNMEShVnNofmgmApqDmbLfBS2sBtoJAzkvW6RNg2Qybwcdahe4ensJhTz4q52xyNZaqEoAsQCiZBZ7vm5",
  "key14": "32bZV2HPZaKQE7q9tvXRsvCpxnKYjRYgtU1VkMWKyUXfEqaSWCJfpKNMdNZakBmPEeqFRoVybQ1UcmUgm4z2koEj",
  "key15": "28kGJ7RcrxoDebtpuJJaA924UpkjfuxANh4PuuemUAf7feE3VHPBc5KMqnqCHcmk28H2ZdxYSr5YChkMpBMZ3SXx",
  "key16": "4LkDyJoLPvrZnEbDQq1tpkce3LVriypmiH12BXh1bUkfQKGxR48suRHaXDfi8qNJcqPGphxvcAMr8ze5QkXGwe7R",
  "key17": "4n7BLqZp1bKn4BTcLC2uNZb3GyB3Fvb5ZYXXpopYLyewWcy7MFXR4QbZUpfVsgXwQqgun4Er4C43hnR2HC8Ku4bM",
  "key18": "5xbDpk5bpGGp8q6E4M2SrM794JMSatmP4XiJBAA5YyXP9zJDj98cP5ajoiuResJXTCSuXKhdFEfoqMEzsuvJQeFX",
  "key19": "PHAnRHj2xWyqfac5KAsdjnoghzXjrbjaQVZwr6AZZ6k3MUNyM1BLf2pzR1PZR3uwW7oaRxQ2hTnAKx315UKZr8b",
  "key20": "2oUyUzharXfySmc4K2vTvcbNSKSHv8FzSzCdZMMKboyNvcgtrSdKENVerFzrMYPxtg5w99dKBYnSZiKJvTbX5kJG",
  "key21": "4Gmj4JDYdVgHrqS2KSE3AcAQsSfkxQ4t5HZ3dBJ94z5RVg5RgggBvynVCsYhWL4vreEtwTjMztyzsvVJMEtaFfLH",
  "key22": "CPTY86YU3PcL6UJhXgDyT3CPAQ5Jdz9G2syFn5h92AVTPykjkarqHgf2fZ7ude3V2fB1HwYadXvPoD1bgL87wH4",
  "key23": "Gs4X8Wg4MHBResqJHUjbHBGHBZHWWsr5hp9HPbzRHfUGBpx8u3tG7cS2TKevmsnGFCdnycahiwL6s95LWm3bL2C",
  "key24": "2jrA5Wmgo63FGPnuLxcn5SfnquYGVheckmJyj46n4cNNitqwpg8xg8nn4pmhmybaVzb8JHUFVSr8BcJYSBniCnJd",
  "key25": "3NkzfpxrWDXZPVY1FHhy2wkhFyzEQYnbGLzCCe8sayGgyMNLKw4FFX7eYp7rpWoqiJem5MazBhEHrwZZKZUrxjtP",
  "key26": "4fViDfKVbjV1FpBnzcLtLxr9vonTWCEj9rRNpL6VoBszsbRedyu9pyJkCVcEiBeM7vUWeGr6bU3gufpkx8PjwNqx",
  "key27": "1HBTh22QDdmX1wrRMBCadeN1L7z4gyQ9TQ6HA3GJ3rWQ4odGKgZQzb29bHovyNqjcccexd41aPJD9dUD8qJpJFU",
  "key28": "2kGokMjEBn8U1LcB6qNJb22LjYyGgLT1gZSDNHgZHKU7vQQ5b8zqGdC4HniFjS8jpFoGioSLtrjWPcrHE5rsjd4b",
  "key29": "47z5wgDUqsb42EKmWaCBxyt9oJwyWtqfdH7SqMoDGA823HHX4Pkre2uUPqFLTmzc3CgKbMhnKeEqcSX4YytDzKWs"
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
