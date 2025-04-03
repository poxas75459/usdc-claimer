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
    "9KaSAdUBGmZUtZ8QUuKG1dS8Yq8bKCfbfkcAnnNnEY71wsy5e6xUb8NSLuKUJuv1SgevwQsHPXEbCD7KVMLwco5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUDy56isrH5ttERoxVivH3cPe1WvzMFDdd4fru4wB92F3YtCDrCXW3n8AyAehUqPJBLxmvyMDriqSWTgoYyZWrp",
  "key1": "2bXkxP6aajvH2t1FRcZnRPVp1FT6Um6rW7cUvBMovGvwvWDpdLBTLJgPAe3HFNcSTbRZPfcqpPyvdcLRdR8ctZ5e",
  "key2": "3PByJF6jJsp5sbvwQAj6NK2XPmnM1D3sqeCWcq5SHkf9wandXjjcxQ3V7GPWtq8FABmuhACs21SuL4G2bSCgKh7E",
  "key3": "5pK6XyzTMKdJqQrkkGzYxkDZxMyzb8tjVdVxCXGKbx6npb2GyqBjyNMDDvVZz82DtK1RB2MjHFiJyEg3xP3UmN9r",
  "key4": "5L4hJmAjWayhrnB3hj7PpTbga7VSBBKXr7nsYhdZtQxQ44AhTwthKECApGpCQ7YQV7cVcF1HA1CpCpkBQUQ5zHbB",
  "key5": "37ZqLjakN86uCpd4bzKV1776mtQdFMsNWbpaZRvqWgGDgguEoTnXhqcKtY1Drcaa4ycYCUJ6K3KdTpzVxq2uctZm",
  "key6": "BShsr7LEftNGb2F4QK4vaSfstfg4xCo78LSqjyqSUQs8HzCHmb89VRQgJTYwBHGyzojViVZAXKF31Dn4nAHz2HH",
  "key7": "3c39h8ghUAbfSzEEgQGDi9mKGt8yQBEQsDsW7P9uT1dykycHfchpUXzuCbrpBpSPJkhZ8R5HuTQLYYRy8Z5tekgS",
  "key8": "2Cz1knuEC23n8BmzJ2iJcFg2gPDpex5NVgcERS3VeSqjnP2Zn2PfGijK2JHiEeirgia9fypEyrwm6YZd4yggoGYz",
  "key9": "2f5QrtjzE8dB8qAf6w8xvvMgrepYTGPXrs5oLXyFXj9esVmMNNG256ofLFYy4j7JVXz1hbbNH7Fvh5NzTJWBESJr",
  "key10": "2jbucU93NFHA5rr1oZTVisSNEkAVnD8KyxwFWWgynx7YYjCckhLcQYtL83eSm1WvzEsuxiF8b8x6pzFPt2Qe2PDp",
  "key11": "5cPeKVL1p8Rs6ajZ9yZMNEVGzRN7scJx6yeia6jCNp3XYpb8B69ZBFF83RdgdYByHgpmaL3ZF3xwsb4EqimgjRYU",
  "key12": "26DGt5AxADvrTJtjC1XQ72Nvfqwxh8wZvj6ZP5Bfte2w6TQbenv9VwnE5wuyqMg9WcaTmDt9sUMxoTNuPo1mTyWP",
  "key13": "nhSEN3ARauXivbmdcY5hpNbtnfMo8FySyu6QoK3sR8s4JVaPzbzis7ii55bcTKKMczrFpJVmm5JKRn5YMSCk7op",
  "key14": "3YAinPEfgsASZmwFARxemdrC5YiYfvov7WHEJANE71DWndaw9uMkv9a32ZEXZf3zX9MdawsqW78NPmbSWUQEP7yv",
  "key15": "MakcmFFbjnVkkPCqBbCUGzqpRGgJPvisT154f161pEq5c2f6GruamadY2GgKnHe4dWfDQpEBiVXcuUNwFsxq2vu",
  "key16": "2BaCEsEkktEEj3DRFjSRY3KzoexEqvFrmQvryFS8swBXrKDWJ9uvfwKJ67BsaPbZvPP1ReoKNspgBASeLvvK5fhA",
  "key17": "36GyEwWbv4SpFxiUrjnUhq31UEBbpzuV92v3wEqQYuM1JNY1BEurEwxS1HuN54dRiVRFzefceHeEHyMzXEtCHLrE",
  "key18": "3a7b39QdW1pmoofGkw6Np4vVc9hCLZPTcoxZyVJm3Lh65ZN8i8ebw8jx8FH8yEvfT1p7RFPe2qsqDvuT2WTKQsse",
  "key19": "5xUc9KwUFKRJ6teJS87EjMcR2MbrHNnxoap3cSpVv6qDegDaHguKbtcoGJm6A4qoNgandRv6ViFvzNqc6bLmEENc",
  "key20": "8nh3sFVE553YaEKLVqBP8YskvZWgEpE4hrAACgBa79jVM6wfUZwNh9PyQvTRqyCCvHaDpXbpSfLsu5XLywFvaUg",
  "key21": "UumrvYbYFYLM1zfwff7iXbMQ3ujFGu5U31YPjANDBsnFGr5nGG4zcLUDtAYLwndaqxNhM2hmnunbGvANdvyMqTQ",
  "key22": "4nPU6reUySUh2CEewm9ifSvFEacYxStnBBAFXyXQu9XRvfcnrZnreXoYantwevnWNu9m3Bg7oSRRN9uUfP4sdYxR",
  "key23": "5eoZXoP3d9LvtgxHvmq2gHUPzkUVq1TKGPfQ8v2P43yTjKNKYHtVrSv4Q1sqj6fQ3aUTDruEPvhqRWntdf3iCpZm",
  "key24": "2QGVCn5gm8gm14xz696RKth7Au9YjYymSFASG4bnLNG3x5D5kVkKqunw4CjQiEb3VR7sZ4C6XeYv7burXnUPgRLB",
  "key25": "3q5nT8Bq7zQjjUwk7eVU2WdppJ1Jwi7MQVEFCByKEuFR9oqYnnhaEAxBwnkYQPpCwfXG2tJ454s9gNzh82AF1DtW",
  "key26": "5vGNZoGkSTn7NgGvDQ57g1LSzCvbmG7EuqLQBbwrbqg4yYGuniAgpuuabNiXrVNuGaaRVsYEaXhAjop1izJvG5mS"
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
