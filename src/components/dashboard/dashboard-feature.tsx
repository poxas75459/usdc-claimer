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
    "nJHcysZohNmnVXKCdUhqSt8FptJfB14xAeqCBa7d4reBeoJxNMi6bLfwVYdxVuXvpuqfPg5AHpx8ENhhdigXAeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iwbDksuyw17SFqkz9uaZAK1QGA2EpgRTt59s6PuS5Uk36kjxEFPrTghBVDQQggXzKNCDZKzWnohQKHts9EyZTto",
  "key1": "5Me3GD2gDTgTabRab2pYQgBpwmBdqbGa2utRwmj3Y5usU7PA3kRVb6n77WvSVQ8aq5oJ4EANNZ3jaQ3srEPQ4wPj",
  "key2": "h1HUvqtgunw9EU2SuTYLavrF85hhQmcJyWMFsdHAFTtht6qjXywKQd1ZHYMdYA8Cern23uE6w94mnP2xGiwyEP7",
  "key3": "kHro5e1HfJ8UPSNmEEypV5CpQQMSRLc713fhmzpNJQvFLwSVcaccvMdLGeXEXzaosxrtbCipspu18Mfutcpixq8",
  "key4": "3coe2ES8zogyuDZ5UvmUAytseqPHhFpCi7AofetTg4h6EvznsAhmsMsiptQ5kAgoXa7nubk2ChcSTPFaNDMbFs41",
  "key5": "2TCHz7L8J7c7WedZcGN1rRJevMY65ZHgEsbgwotjpLSbBTM9RogZUrMhSRo6ceukkxbrRpkE6HWeKJx6vL55QAKd",
  "key6": "5ZhHLukcPVoqzpxfn4EqGceAR9xFQNKCRuRCyrmADnibccHYbpk77SK1dgTbZL7VAHMWmiyytMs4AYcXjSTHW7Xz",
  "key7": "eJuyRtgUciSC8QwRKn77DYqYDeSxBt2GNYtZnFRpGQdroptx7VkKsYyrKgtvpigNYVfdX4VseniGt7KLmhgfVd1",
  "key8": "2H1ini1CGmV3B7ppoHFUzaoHya7xY3LRHpW3Q84hHKAqZktdoxcZVnFP7c556isa2xV1rXPhZzkdFjJPRjjAoNus",
  "key9": "Rea5GUN7UHkpz8A8LbV89WzMCFgCtkcWrbPWLAY9KukC9F78CPYmgQNrC9C2nBemG1faBnWb8VTsjxqpvuMhWku",
  "key10": "32Y3wEA1F4kNLiKaAtkdUFu8JE2c4x1TXW6ENjZfHrJUyJWEMqeWrdwvpEvA2fJCBzK26jGgkebjx88Scgp6nfe",
  "key11": "3oHa7g5ciGPLrQFoefBAEAus71hqipXw5ThpKEfMUehY2L84UmRutXEXLuKrvTfvyb3r4Pipg1T9xdLJPEwNX1DH",
  "key12": "3ztF4i3D3ZoUDQ2HaVWYaF9CCwNH2UPzBWCTGRhXvTz2eFqsr18NshhRN9CcGmEQATowKGQiDbitUrhcgLdgjVMX",
  "key13": "KnUy2CPbHURfSn1NMRiviEnMR8HsVpFkfzMr8UqXDFgJrrqGx9DYgNwVbgwJ3WTKrsC7YXVbszvZFHHjukqA1fP",
  "key14": "3s3sMMy8ZMMDWvnZv6bM8oRQ1gFkupRWyLvEFncAA5FYZ1ZN8nxuZoBrM7YbyCouXebHmAQtNncjeaNYBQnSSyQh",
  "key15": "4b2rQhw8Mj1sZJ55owMDFdbVCVLMs2ij9XiUZzpJb4s1iwsV3UjhoXuJj7xv31hLP7doviM8NVCzcx9HemPfXqNT",
  "key16": "2L1G5KHTTeXCCimSpyRwEaoGe2mNQMDFoao4nofostzYHXjgRxu2sbjKvrVECEchXmLzNX7RcJGSDgduPm2qFsQi",
  "key17": "4SRrAPAacE2b6eXDTuyhwrAYCgajuvghbRcZxZQEoYMXdGSiGTNPCCk1X6bvZYWxKbJasv2GMenmdJU2BgvnZvtD",
  "key18": "3ezQ9uSwsn5q4gx1dh2ZvqpBhi8cPzwiZTSPBBNqpqQrLYsWyjmFm233bYkUfjJc9ATyp3ggFVeEzUdTXn2S3Kkv",
  "key19": "h9XNnYFsFKDkGub9JogQR6T6cP2SFH6ekv3ko5yaHPuKN2onrf3A553pDEzEhdpC5wrjwa7d7cVXFFmeLDCnocE",
  "key20": "5GrugpKoGSmAiTKYxQ8yohEg3BnQkHkKAq8zhYuZatyftc3T6mWCdXL6djo1V7bdSk6LhLjNsHy1F6jfpHmpeBqa",
  "key21": "54nTB3uzBkEZy9ktdFZ3Eqb5ekSE9QjFFKwkddV9JeqMpGdcvJpaguwS5nY9G4PR5hYfd9hfg8PiS1VRt1gsa4B",
  "key22": "yyV6wwyWCdy3CFfp9oGgsvxUejtiukk1NPaGd2AWisT9A4xtcQRfYjQ2JGTFDrsquPc6NLqrn9grGoUBA5YjK2F",
  "key23": "3CujMTkXsyJWD2RMJNrruaC6TWdH3nyEVGrmQUwHUtQXzNvu1LwbuudEeX2SRqQnYzqqqH9v6FbNkk59nh9XBMd8",
  "key24": "2rjTqRMYGhmnisKk1aM83gANxmLBx4dB2W9DLkhMrzpXfy54W15HbvQJC47sWgL8g4dwCwou4qMqBkHN4h9SN3BC",
  "key25": "3gQuaXmAVBqBboWLnpimgctvu5mxRg8tWYdTm2xg71Vz3j16QFEsKZom5GPbrsR63kMyjFogKYho1aekLxqEE8TZ",
  "key26": "xzbiTUoUoWzBcwgbQkysd2JigCJaDEvUVHhvD9RKYWVqvVKVcN9uMZFBJzX89WjYLvN66Dqu6ZNhcLFKzyh2qWe",
  "key27": "3nejmCZ9NPt53YJxyjbmVSYNMGbh2P18VpVrL7HnxSYjjUByL5LHjWMP4EUwKYxnhMe4BuuGbK24iWQkRfNp58vr",
  "key28": "dqVu69XiHe7ix59zdc1DV28Q1U1mXoCyCDbKT8tfHEpok68rfsgAqpMqn5sKQbmx3fJ3FQ1ikDJ9WqST7kaobCn",
  "key29": "B8qgdMpNd18bzFUYmftAZnXT2NMVt7MQsfYoNY7FvJ3Em7CrYBFbxVun69utjXEzWPKUsXqD5DnDBZiPAquUt5v",
  "key30": "5BaewDP44YDNQ6GfCGMNPaG1zKe4odwkUxLHzFHakNWvwLVqgsaqMsUMCQ4hfHFyeo22wopKuiikfHZbbq3K5qKF",
  "key31": "3adED2eSuWDraqAWTXBMTsJBFxDS3tpRsjgE3JqiiXpA48dBgefbtM8oaVLELxfjkqnVdBouYmTqZyHutzZ6vVhJ",
  "key32": "24TyhxPbZNGUfyesNmsvP7SGbxYggBJxVWEGATNzf9CLa4Ek3wVbo73xLAdVg8CQFCrtov4PfXfLUkbYGyEjjh2d",
  "key33": "5sBpXGvCqK3pkfv59j5ChwHSCfX5etv3WDibMNaHL98ZjkAfjnmxEcFgTjqYCRsJLYAYukpadHJQ31m3pM4uCVrt"
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
