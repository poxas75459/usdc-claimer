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
    "5fhHwZN96ztDTD7HbXwiJaqJs6CJNm3kGTkq9xUFMs8Yd1gYFFCZaxJenBroVuPd9gJjCrQW6AHJRNwNu2aaCfyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxjSXCnpYYCZyUsisiLHKtdomcgF4QPwWUBYan9q9RYp2Vrfn1LRFiKAY8fqDEc1LEcK43uwT2dCSPrDTTbo47k",
  "key1": "2r3bJh1caowV2fPWuxZyZDeMDxEKxAHgYvz7u2Sh4ZCZ5VFgx8H2WF5ZGUbuPRTYvnKcPNa4GFrgE8GALrBVPpAu",
  "key2": "27pgYKz5BSZMp4A8cZkWLF4QENfVobX5ki1queTjm13HgE1LYqLuTsVD7mSUJSTuMZ1oUrToEj8JfivoyXKCz13x",
  "key3": "4nVnHWigqQzdY9opoh43n4QwEMkhHyReHmrHbkrENyT6kHrLzmF3fjm8tBpb8sbWQ6GYSbC4XgfJgmz1zwiwtm8t",
  "key4": "2NbsKmk9dxCVKzSHc5aszJM7U71jfAYr2v1qHJ1sQ7YRLWd6nKiprXLDCnrB9VR7S8CFXRbwKb1EEwXLsxHiFMHE",
  "key5": "2K9YSM2Y5SsyvF1HC2MikQu7cHf3ZBmQuHwTzd9pLKurxtDFcAUNfSmBhw5iu4iSZ6P4gvMM1tqPRv2MZGn7H4Mh",
  "key6": "2xJwrna3nQzcz3Yo4dibhqNXNE7uDR13SY2HPoG14morGoybQVR4op8tdRCEdY6AWRfbb7ahSkgDw993ydERLkNS",
  "key7": "5B9czrtHsKyswPyQid8sfxCMKWfvaZeQKCkvxKzVM5iBHvrDpkbtx1meSSg2MJKo1ndaWCHJtmEHWFCHx1Zd2q4E",
  "key8": "9Y8fuCT8L7yUnhQq7KzQbr83Hy56EGW5oHvGjQacQh35frYSaKXBNK1f1dQLmokjEc8XYFMMnoZRih8njkXTUe3",
  "key9": "2jNrf7u5PWijqdD2ogDpoQzM3TVaAA2sytmioNPkgzkLKRLo8YHwZWxvC3g3LAqyZU3FNCLBxsaKAbEWjroxeKvC",
  "key10": "3gRWiNkBqrKVvHJYEA3hYTowciVb6xWPLS9fGAXiKug7xPyH2HMv6bdP6aD21W45Hgp4T7PcjNf7R1zkBe2GYKVv",
  "key11": "49Y9BG1a8aK81Fy4prwuH2z7gGEZYNcDb7YPHSJTh8ikWdBN3DsDP9P8VGwUEJBkj5TALFjDgtF9Z5zj22pEQkdb",
  "key12": "RYv478mPPd7XAevcoUKoBVFfeDat5kB1AnajpUeYbKDkTMRCFdQpAfHcWHHde3j76xfRKAtBetYcB2o86wY2tD9",
  "key13": "GBi1nucXi4H3Gzkt3s6gqiQ4Mcje3uopotTAE17L7DskKQS4v9uwmKXWYUz4yGkPcoD5zFzWkJVEnRxea8yqwZH",
  "key14": "3Szxo1yGPgMufifpG4L5ohc9ZLqMdsGYBQeXF4Hp9vuyGB7YVp3D8LqBTXjQvEd57ZBDvkCDYX8RHMh1wHWbFpri",
  "key15": "4McY9kGKJ79sE3MkPVhmxBWvhgbg6j5awzwYkrp9TZ3cDjfKoDjCMV6A1idbgvL2M84nP3uy8cJQBiTfvxL6z7vq",
  "key16": "4o4xkAWZrb6RWeSaah9qewjvJTxY5sDNShuriiARQMVvkZFNjzMKthbtCqXNRo4bbcyZUKnKhVMzfspz1FZ4tbq5",
  "key17": "5PhddHYu79cCECRJRPU9zYgqgxTemuQX9grcHsTKQmn66v1NmjFgPSS5RfEzEi6bLerH2drzs3v2aYA3qWqq2qag",
  "key18": "5nkbd2RkBcQfs1B95QS1qTPYnxcsTNZQe6hqDXa5miErZgiZmoV71eZwSquzVRP62ZgyeNj9p4UKN4mcVqtSKm9b",
  "key19": "4cREF4a9y94umPnPj6uMdj75DxWWNUmWRvmhQHQngiCid2mwhF9FwqePK3gwf3EEaTHi3z12L2DpyxF6T3jeewLn",
  "key20": "5vsMWFCzwq9HcKiFWRfpGV4GqzHHb68YEod7PgVT2q5E81YKyvhgSv1K6foNowRmjh7et8nD6seMHqhqSf1sMjE3",
  "key21": "BdThoMHP48LGkCZGxqzzW8TyhxHtmQ2UNNTbax62hXQWHDR8o8ymhSJA7fyR3LrSzgRo9v3rHgxHQtL66qQLjfS",
  "key22": "37xqU6CoYMVgXTMAQfyhV3C2VzWwPGDxpQhP1sZ5zLB4tT3yXs4Cf9ZXAsmezdN2etNZ88qjongYUrK9Eo4UuVS7",
  "key23": "2iVeUZiCrqtu9wMdQZB56C8jmEwyVqMuomdCscf6qaZhdphPHZuE9t5eD6FJeVwj4iy7Nt5vMowScTbqQWPjRNkq",
  "key24": "G6eUdnQRwDrzvSQRMLF7fA9uBozuuhJDZUQvcPAtsjMBquf1DjUibBj3vXnu4LgmF7pn1i1q7QqXx9f6gYR9iUP",
  "key25": "5EK8M4qMRSzTkAzC2HmGJDmFsmKezNLM7qquHHskxXajZHpaSKbQof1S1H5ty71hwXzqyBhjWRGY9n2zKrRf7SQA",
  "key26": "5AKWjHMCApW7jws1XvesUZHxXFSviUXiSTzXQLhdXxppGjGLtzGoPbsEMZPTwB6F4UNMGdVHgTcoMSdx1Z71i2yu",
  "key27": "5WQdiMPfGXpaE2vPmmgeWtedMz6LFDAjKbvm37QNzpExaCr7VgndFdm2W6v17AdFsRUaQZ41GK4k7DK64pbwR3SG",
  "key28": "67TU1PZiFVNi4bNW8FBeMHxzEWoaQXXseCnnnMCWQCpLPtGHvkqcZSu33k7onpPwoum6Lq49RwcQv8F5HVenryrJ"
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
