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
    "3PqpcfvcLrChiRdFJHwKQhqFELDYh7aQe6p29KTWHs9QnMQB99LYbR4QfePWjMyrzV6f4YdJAuBZn2JGz9x88vYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cP9Co2DkxTLmnKRwtgZJgnwapgKQBRM4aQYEM9YBBtgLWTimsVCg7v9TNmQVTkgpjZrD2iC7WRS46KQqkdQ43j7",
  "key1": "5p89AHNEcspYh3Yx3Q6Muyov6qg8i1oMV7KMKaNqNiC9vVsz2WRbbuEHt7TiwSUww2LZfsmzN9h1uhLawGZihiNE",
  "key2": "3snkVa3t3SBdmBtVhUNAGThv58iWdghFyMjnWNdj7EmPLHCuSz2Jsp72f9EjG3eBUFCJU1kinfZRP4BvD7bwvrt4",
  "key3": "4KV5LTX35gDq9beyhUgL696BiVc5nkBnhJwi8M5EAVwEti7S9QehpiKUZD4C8X8rhN9c7G4qYvTfvBgfMhTxciFc",
  "key4": "2KeyMQQzu2ahc1BUxNgu9RgxktwDwdLZ4Jhb2MNd9E9iT2xWpjWQeWhWEBDSY9xkZpZz4qj6ejvV2Butw1o2EfA9",
  "key5": "5tXD6Fa1rHEYFSN1JkTzmqneH9Bgh83Wz4fBLWUoUCZF7D2Fv3dHghLmzwAdXr1rwGRLNaU2DExYFC8pC4f2JuB4",
  "key6": "3AePEbB16CciqjTjfJSc7he7sWDM78fvZjn8zwfyFoCT6B8iS67WEvwGw84V9i3xkxCW9wRZBni1bti4edaJCvJR",
  "key7": "57E81xHoZyyWBkrkkCWagi45TuptFp1t7CEM2Laffp8XMjGZK1MNQcwsBLb4gESbJGY3PFdRBqps2ZfSTUdXzgRu",
  "key8": "51Si9pjQRFEdnqMaskSycjPF7XHvyWSVRQS5p4YApN5Mr22c2ZyxePhMWpgjuEJ16G8akvXbL2aS3wRzZCh2Bsqf",
  "key9": "4L53U1ezRBKmqrAypBnBw3inmUFeJbtJHypRXTnhwFf3R4xfivAQksqNHUFzDvFfoRk13etqjWP4b1oQQzQ8Lxf1",
  "key10": "W25najbUnsPjC58Znev8gbCAKJKCMrWJAvz9AkgiqDetMfrn8FMxXCXZg2PqA2nPo41n5VCHys5sciHjetYLAop",
  "key11": "4tXeBziaErxbMCyc8ERT7hqhs1fdAyUHseLqCRWDRjXExBdHhpJV8mV9ZZWuvLsZuSFXJ9KRkGcxySGdjdgsMCHJ",
  "key12": "5D3zyiLY6M7bJr5qMoubNENLzNV9r53h3kNhG6vpP7TtsYLQvCtXkUmKs59cDhMxYbtSYNtFei5tWmS3khNq6fsw",
  "key13": "DVkTd3X3v72UNwvLqLEMGdie2Mqfh4nnSkJLEv3eCpqLu3e9HV5vnaycPKfX2pueXzWA4sTLVdGM8FGpxxGpvv1",
  "key14": "635DpBC54mYa9aHJ5P5vvxG6VhvWpo4J5w9yib1tRvEdPkEUH524i6Zg3VhXz8n3geAfFeqGiuMnBzP47oxX4Xok",
  "key15": "DMSyo9dKYNjY7mXHuoDZ5ztZwvWtfC6n5afNjvzw4sDLJKUD8hZWDqFT8RzZ3zzWXKBdkNEyUCxgHpnPk9HJUEG",
  "key16": "2XTkv5ZqBmNtfbNKaJpHP9JPV53wLmYuYeff7b1X7i2tL9KaYnpD4nBgX3gSusRsHCFA9wwEvYjKDwNzWA59Fqnn",
  "key17": "4s36TFX4oPUdc9jyscqPu4FxXHYsAVzuXDGJcMAUDUnixeVHiTAb297jdFzgfckBK1njkbsn9PraswKaz9CPbYvb",
  "key18": "2zLkaubcWBEadYAJL2tYHgN3KUTXF8sZjzvfX8EPfEY3ARr2QsB6i7qxxUXkgxuqLrSTiNQ9QLvgHRzeKG8v53F9",
  "key19": "5ApgvHzMwDMXuSSosmm8qsTyhtmdQ6cuPXve2U9oo8QoNzt6HzBi9jUNpFaP3u2DZXYLBSXNotSuptf8m4vq3fS7",
  "key20": "3GddXr7HE4DNZ9onpJwum6v6PeiVCDDuRtcLuWhNhN6h4o1BxLMqpj6XjNcSLFgRvLJXcHtoWyNURLXBQM831Mwj",
  "key21": "4mfYcRRQ9TixS8D19zrYx6zuu87JFWLUFJdiCmWNw8W9gneaMuQpvDKGC9KhdVYC2KU5nU99ntnhzfvASimyQPrB",
  "key22": "314jeYampV6h8zpGRkPETapTHzGMVhddt15hey1yJuai82vN7Dq124HktW9adrStKBvNL9D5hN1pKpzxjRBk7Q7p",
  "key23": "3Zu59CorpFqSWBUZRqvaoCyoNiNMchVv84KhXraQnU9eyskfMmp2eNwy6ArFPdtj9QHtUJvj4yv8XV9WyJs1yVPp",
  "key24": "48xaC4vk4dyLh8n926VQEUD7eYeyqt5m6auJdmbNzpCf5MqeRYaduLZZ8W1GxEVyiZECdCzZGPhoAH6JuN8wKWEs",
  "key25": "3tN1pvcDcQx2v8zqyptC66RHVRTPbtj7VCSzr3MY4NbKyVU7gjR1VdFuERX6dzJQPCwqCY2KZrQ9uzkNzrqGqBEx",
  "key26": "51yKVArF1UAgr7kLh11pxyJdyGKud4dsi9Sw6GUqndhUgv4LwCZmdScWAWeBwfQh2YvVV1o8oFAiw1snmmdGKEBh",
  "key27": "4PFVhLCppSwF4VntGdz14dX8b7HebCJcr5nU6EHFpqmEhbDsW1X3AxgjdDq9F95tv34sZVDhg6spAfbbDQYeG6jv",
  "key28": "4RciH4K7F1WBh8gFMjUTrSq5ncBz57aNpfYEVvMM2bnYG2rDqq6J1F6ieGC5UCLMMCFu9gRWMFbX2EUvCoLuwu5Z",
  "key29": "p7PV3Uq5a6K5XntuKsBmh1jN7V9hTmKTgFdo2JAYTv64oLW8gzMA3NnEQpivNe5Fv2vUqUTkCrRqwgnknVXNByq"
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
