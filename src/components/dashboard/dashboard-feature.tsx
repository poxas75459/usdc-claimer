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
    "5xFpxEtD4xTAThg4SPAJj6iMCvy5m6a9NsSNE2AaTBEFURiH7NCpvv7TaE5SKLzi2DN4KwgLbB1HnTAeaswHpDW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z889EdXuuLwWA5LESDJLAhfYSKLnSrqAeMiP5DNbjB3zHDRk18wsAky5xVkbAxQWhogpprQza3kQWzhG9i2JFMo",
  "key1": "3ga5XhnVUcnkZ44T37atWjW6Dz8fv1gFts3wQW8Ubw6v4akrrMsDi1pPSCC6AurjgQBr1SRR37dTn4vD8MhQnWgH",
  "key2": "4bAmvRaSWJPs4ivHeAk8ZjZVGe63tmHiVe7weSUoC71B4mSmWT6xxAGiD57znLAYYpuM3653YVHDhKhv2TvihtSW",
  "key3": "635vcRXtKN8TwL2fQ7tA5S2tmxQDTHvGPkGovp1SXfpb6r9rhiEpE6XWGsoAQ4XXEk1zgaCEeaws3WuqSQeKdn3W",
  "key4": "MEW9aKR9oQbbDEgEhTKEGH1tC2sqX7Hoc9ywAp1PDiPWYfpPaAQdrrsF3pcdzniQ8MxWGgeAw1ikd928LL8bUto",
  "key5": "rtNz5k3uv7LgVv25KzfubcvzPbeXQyCVm6MQf7yHkfNWjxj83BLX5HmtenxDnvgZvh9U4geYAAmd8dx3TQZy4Wo",
  "key6": "42YgdrkZWLW429DURKjqigYrGdDA2WZm7KxnM8yBMtNieHcHtmBFaYgAnGSrcJQvYR9jqPJypZUkeYVKxdwNFHZG",
  "key7": "4mwkqHDEq3G6TNAciPwDHTjk2FDruPCv6RxUxDtZ1wNUxaPTj1Gt4Q8CU9QUnXjrqcJ9gMi6xmpaahQnYxc7tmAm",
  "key8": "2XKnEcUHLLcFi4dsLQPgUbfAGmefFGCEGvxo28Ka939iPhjuXDf31w4NV6CDUhR6dLPdBhT47QvTokKkkFhXsM9",
  "key9": "2NyEMk65EDa5njnFSURPgtWX3cVaX7iyAT6NeMHZ9DABpf2DW2h2pbNkjaJgxwN9jAUWoi1etHu4afuWXEjMFYxg",
  "key10": "3KZpENfyoyyZL9kj2cDLLZHPvt8txtuatggUvymNeF7PNdzUpTcmqR4DSRRT5JhueGaJzfZcgVMR3HxziFHpV7wm",
  "key11": "5xynYiSwvb3Cugn8izq1CqT8y7u1bt9My7sMJPt1JsTNVF9zNCDjpjxRKDfjM6ju95faujD2EY8P6x8CLyUJpR5s",
  "key12": "2Xs8hr7PLgsUQcFLMsfLXfsDSWB5zfC5rB3opZHBPC85SXA9b13S3nQ7VK2FyDs9WUTTxnLujHjYRDGyJgpAvdTz",
  "key13": "5nA7s7wuWJD3juzQQrQPEUTYJAyJtyM1uxKfxQjERnpXMPPyw38QJZZU6cWZVwgJ4KnQXYdgyzX5zBT9EycMRVyT",
  "key14": "2LxGXExfvRcoPX9xFSs2vGfYBZAmRSY75J8psEKkDJXEJkdrbjcqf5XDVsnrNjGwVwKhyPDTeSHm7nSf5Xze6zJu",
  "key15": "3vym4YFB3rUtUmX9q3AYARCs32Ptro3kGjAyKRZhwHrCDNUvrYcCJHFTkMKHLFFa3iqF1NjmGxYDH8bdT98NNWBq",
  "key16": "3XJY32W6mdmweuTh3Ujy1GWZhvEMokgEu1ZZqGsffW3RufnguxLr7zhPjLGoHqpzTViWvRWVCeExVricGfhjU8j7",
  "key17": "3kTDKrPE4A1tCkoM7fhyM55wem9Kx8WiLiKGBGwXHHdd1ByuKSpJqqiNorAxJeoRWx5ZhoaGeskBKHkpd9k6BHjv",
  "key18": "PfZDNyNU5VcA9es3XeFYCgypEt6MASH5mjfYuSsnrQEkt3r7FHvJiR34p7rsQmZtasDk4GYUjfmB7SZtobbTQKq",
  "key19": "3z22KrwTzN6nAGVhEpa2KpV57RSDXAyooZomfMUVJAyFHmyvZZgkWu2z2tF3ydwBXzxRgm5d5iEZqwVLxVvspDH3",
  "key20": "4Y5fwzSWA7GvXRnkQHZ9PNia8aEb2cTveZ98XyfbuZgx6FcN2L8fDV5DDiDLnxCJGRAKvFVpyQ8ZiyTZvsvKgvTX",
  "key21": "5UKgrfvD2hJrNKdeBY5YLBpvoojN7yWG7m8hAw3KvjSaNH2cxFJAArgCoor5jvNyEtxYAN8kfEgMQKvE19LG63z",
  "key22": "kVCTB41d3U54q6425scc1vW36aG6FEjbbZQoHSCGcescvyCY1jyEUCX8GAgFJbJjSqtNZqCtEDET3pgjtiN32q2",
  "key23": "TmGQcuAQ1xh7gNkZQWVifk64BHAcL7GoTFDvTjzUzn7f5o3soawFUVBkRGXWCUPTtvLU13doiEyK9fn5py34Ktm",
  "key24": "22rosdv7AqGNh7UWmM9cZcsEfBX5NbJTUWMPnv5kEXkuJ9oJF7Nao7r8GvndZDhTz7xz9cJscn1W4KL81G4haGY8",
  "key25": "5gRtRLWMwLaz6gU8cZpFtvtVTAuMU1THJi6drKxeMFURMafNA9PJM4nuLrRMW8iUiseBdz8DmDdPsDiLhjevwYQx"
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
