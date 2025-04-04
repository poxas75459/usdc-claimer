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
    "7Va175HinFvAPAVAf2fFkvTS7ESDLCz7y1SDvqZJrxu6WWTWnb2FBqY8EAxZ8z31ap63nCETyE9MAe2C8mwFCd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31k6EX4TgR8BiJdLYcXidkrJqvBMNAM9DonZ6kT5bHSNVWsPLvGX2t2CS8LttYAgddvtnnxtD8JVRx1QzkRsDA8w",
  "key1": "3v3LSXZw3GKyJ2xmQXpmaSuGVfEXgCYMNa5cj46S4nLxyg8z48Csy7RyHXLaefCzEiWu95Zgct7SM9J4EdSjTHvB",
  "key2": "67GRWRh9QD9CVC1msi1WSriuxD3QXFrXecjBfmCEi77trZgGTTEuPXyDwQwtYFH8QJAYTgp5hRSozWFbqTLXJrc3",
  "key3": "5gK1rVPgJsj23qVw2XtaGGL8VnhGCkrggjGskWBWzxFv1iiB4vqMu6cJLhFyEWVH8yo8fKQ5QFww7D6dKuQZEqCr",
  "key4": "4SmMhjx6S83qPHUGzGxwn1StykTASaLsXLZFgsHn8tmZVFWgB5K8fPeA6qjhqmthr4TiAnaMFJA7sivRTraftKSG",
  "key5": "2s7rUJdvH2FidBfbEhPXo6n87RzEj6t7UcJKEktA9wggttRjh2yt36rwNSGPwu5YPhsw4kVUKuKFFET9EvTnHRHn",
  "key6": "3PmQohK1XnKh8ahoHsYNd4TV7ckWfi3ZLHSMpKHVuQQ9qUjdgDDECNC8j3civ6hrARqD36DMNDYX31aNH3Cx8m3Q",
  "key7": "66cK12vUZyHDxHmYt57EZ24tqhYG7XZZLoBTBAWvq1G1qFDWndmFoJE5TxbYbEy2A8sNV95otfCg5eHBoASUU1LB",
  "key8": "4p7prybgc3BJZb2ZiW1zknB6WKc5qkypbmucb6CqtWiAHHtUj8t4HbMnatfYrS4Q8nGWDmkb7DDTj5wc8YyGPeGq",
  "key9": "5BU1vpUkNRBFmJUKJ2JLxcUfb9zvfgZYVUigd4w38NTxekKw79jVhgqPgzStayvo4NoS6RiAa5MMrL6MuJHFit8m",
  "key10": "5gak2twbdL6yTwjGH2zbCDCyUTsd15YeoBnYhbwrPz21GwBtRucenwcqiap1weqiDsGXrzTwimFNJohbJr1AH8Pn",
  "key11": "2mhHjiWUWtYxBiA2LyWofNHyGz51vJntPNHtnudrVUUBALBNacovxArzMubtWLErgTReDpfF8bJnxQAsaCBvr1Rw",
  "key12": "o7GNUS59udSiFXUTMWfry1qeT8hnUXL652Hd2EkBPJTDo71N8azFcrcRrVof8kXQ7GjafdNTzqzqgPmmRETG9Bz",
  "key13": "5WHLKmxknQzdezyGd44WwLmfceUJtxchmh9uFsXu7dTcoozTBAdbCwZZPcjzgukKB6PC6RTKodsiNhkpBN7iN3mw",
  "key14": "4GfGcx5vckQj3TjJvxwXX5qSSPAnGM8PQDbKB9S7hVNEaotQtEZ8bZtsvnU6QpavvoSW2PriZrXDhTHASSnzRF7V",
  "key15": "4nMbfnShHLPiusDu1RydzX9m3T9Cc4cLFPi5n9L75KP9qNoT58gUdtcL5CDobtv4NL6VcfPZ8pKJ9sx8m2AYMYDJ",
  "key16": "5V5aYAH6QizisvH8LsAmxX13j3BXgBYBcm4LtKUjDSFECzA9t4aFyocnebzx5JcBFWsSmniN6PeQ1NhLZmx4NPDu",
  "key17": "Gcka9VYAAD9U99RZAYeogZaMoB7gnuwD5Bsi8CXfe58PtExZDhSUmKCLk2LKENthh1FHTLiJ6rEuY9pwNoSAkbG",
  "key18": "3ty2ZhMJbVpUgGXHqWjEM5CL592CdGNU4aeW7aJDxUWVz4Udj3SaKjGpgwJqC1gEcQEF7KVmS4rwsmTy28AXPJWA",
  "key19": "2ogTKRDFYx5viC3j4yutLS4RSfN87qnDo6LwPwhbM9aTcsEaccBzhX1qqrxyr3riL8v89VVsJKxexKq9CMdi71fw",
  "key20": "GNtGGt6L1PyXjiUtL73aA7LQqQY5p65P2GQeo7bivC7wYwFRB3rT8VLbE8drX6D3wFYDokpC1ir8Ma6LWSz4hKk",
  "key21": "4YUaorF6Q5izJJ5pADHD3XcdBQno5sHkJt6LZ95EESH4on8T3xNo6hnSmDgWWF9ZSAqykYt4zRQHB7AUVKW8hm65",
  "key22": "MH5HYjdtMkTjQtbdiDFZBKTqkEqnJAWJ9ZcmmhqVk9xyT4L7Gnni7spuBwthkF5YmnjXBKhZxxs82hW2mV7ZQwr",
  "key23": "4pJxGccDEVEWa3gyeeqW4NhuY5wARGPyv3akVdWaUcTC6DNQq1N83azg77cnzSEnf1HRi3Rit3PiTcqTnsn8xzLp",
  "key24": "5PZ77PF4LVsbTnTH1bvZYd7VeLgff8ZuLBXoYi2y4z3vvtwaNWioFg71fu9Rm4zYJMdnzSMmyJxDNkjfie1nVWo8",
  "key25": "3NXnfmpYFNvJxhXjPWoDBPWhfXCXee4TegqphD8HXWzvDsGsztTNFQVmpYmjojRbwZwfXRbQR6MZMsRmtin2SFKN",
  "key26": "3KpWZKgKLXuPMAEkQ14pa2SBuRgqYWo3FxoAMXi8CsDYNN5UvDEvpmDVnADre1yoxDeMwR8f7wBvSAGwLoZs29jK",
  "key27": "TxjVTYMzdQZMEnAc3UXzYF1u5XiiPPc6TPKsvTDUhwotCR3b197aRNNNYV7MufB8xtNnTSQm1J5qsi21A9r9e56",
  "key28": "4DvNbbcFGfVXwC537hqccMMgAkmLmjMF58S8J5gprj1TxR44umc4mHFU7Dmr2LuqUfoGN7Nqtw5bsiVTJNJTr4Jv",
  "key29": "5vQGN1Q8qPvDfMyT1xbZ9ku8snDBhJKCNdrcwM5YJwFLd9c3Jgj8H9aA57FiVzdzY53kz3mv1jHMNVGupW4tFS4p",
  "key30": "uQbr8z75tqG1rBqY4D1XJRP9GZZT7oG2nb5Mcd7FGc9dqY5xf7rY3Ac9jaCa8kyY3CC6TY4n2BxYGEYs6iPpT96"
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
