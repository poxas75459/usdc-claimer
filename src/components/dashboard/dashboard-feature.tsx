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
    "2jaquBKyvK1aV1EWP4LgwSgfvtgT1Hrk3tpqm4PbjaFma1RiEp67uKBarH8QfVTqiVrCcUqNsXERyzJbc4RMvN4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfQu3f2NKsGtAXixbsRH81KvApUcCNgzsrxQNgwjRqpYPpKgFDdrgNagfJFppBjoP1vMxcuagsvWadMbASwRScJ",
  "key1": "3i5Kp2mphSfkikqVhhwsHTJaQwsqrKQxrqK6vLah6qABNhUgZob97Pva4Rd9bCXAa81CSKFQzodzDQ7NubjRV3tM",
  "key2": "DrYVdpfsF8KtE112QJmNQqoKshYx7skfHvUokjRxRDzUYu4d6g5rggYusrZByuVdUYc2qVzC7TinmfJGR3vqfLM",
  "key3": "27NhKY6ZErVp3qHKjJumEuFiwvanjUyuYTANN2Maqd83GYyn8s2g4RrbZ4rM6YfksmNU96yxfHc6pm9HzG387RNB",
  "key4": "3tRFhxAzCQDHENyefg9fajUYiG5jBT3ELUVQt2VPCLLTGeJhCHAX2HsF4QqfFRky6iK91ssdCXDQRzctSLhLNCFS",
  "key5": "CdosVjzNJT6mSDis5DbFYqvYKkKkRGFi1GV9TtWnBFoYPvgPpTyDegHTEcpus4UdviJeZA3peVhSbY5NxDRPUBg",
  "key6": "wrcPrEWXr91wRhJfNXjeLbJebn6zdLk4ktiLmcfAT7YadJskzav1ibYUDyQyztTuu3ESDEUCkpznSrdiQePo5hT",
  "key7": "3cfmnqufSNNgaECtFw4M35eA6FvVsF7HdVjbxCHyf5rW97onNDtxBsKr2wVUWbq8KX5LEPwyzYj9fBQ2Xdf7UQtm",
  "key8": "4HqWYitFixbDwbjhMt8n4Xf8tqJEELUe2R16VpMQtBXjHJiutPNVXBVoBJFLpzgAKWrFLTuDRCv4FPgdQ79AeRiN",
  "key9": "AZkgVgYv6F7VxaHtx4abGtXGz5x919iwTxEzxvxzpt2nXv8S5K5bhsFrtmzKsPR31hD464tkhNNtwgF7NBkEFSc",
  "key10": "3xQNiM4KBKGe4a2H3repYWBGGiAqUXCivkbiXUR4ehSn4jH2Pa4jH4YcHeeo9NecsCh23nwwkvv9x3aieV1v8Edf",
  "key11": "5gheJFyGVK1ViszGrTmRcVB5eUc7P52v6eHdPHfPCUbyNebyLPTqSLba9oN72mWire51v4RCK3FCvQBCS77fQTKp",
  "key12": "3WHb7MjS1V5bTd5srP94DMaLZMLR6vhXqNrr5CLHvgJ6niQ3Yf5RMy6MrfnAkZeS5QaD5WaEr4U8xPkrHptaJhzR",
  "key13": "5FkmvZzNy8Rghv3RHFfMAgYrETBK994Jptbk1D6qXunn8weZSixJqD1gN42d4AkAr6yato8TgJYpzbJugTpqNGrZ",
  "key14": "3ZbbiJd6UejKSA1q1pa4Bya8cpy4MomoiWnm5TN5MexQoYSapMUQhsjiCAVLLRqymSvgY6bSTMHQkFxp49zd2Rt1",
  "key15": "4iV8jpqfAXrbutogtuHbDTyX4rmb5iL4gp78hseEsxmXLHXuseAU6RKGPMAHc6pXMk4Wv73JcGfTkAk5cndCXr3F",
  "key16": "5bnbF7gbmCcj5TcqRhcFfPwHGYAusdWk1Tj8DWWHZyqUHQgEbKpWvTtkMGBeB2uv5J31SJo4sZQWP4vfwfBU16Ko",
  "key17": "5MacRpGhGnpo6P2fXmi3FNcvVgJgP557ok4aRF9cfoAFgaAQTKMQQBuEe4PGDbHcWJm5MRMaFfTuB6TwWfpwWVbB",
  "key18": "w8QP4A3jv9Pk1SRjwoLsLn8UdyexdPMgoEguYbn6w1Lzxm3sLcHHJfKC3PgmVkcnSXABhSNBgdtAJd4mb1Wtqhh",
  "key19": "65i7RP6HZRYBnBiUwcYG5GwExKJL799GS5YGVq2XutVAafxnZroUaUTAZ3EtvckJbMeDWfqKjDVcvuEu2BsmMoTj",
  "key20": "rMK6o291r7UD3ExgARvZpUYufFzLXimSHiQDj2i2nEbPYub9dAJmLASCUG6aaa3QucLi2UoSKLvYACVSPwBwQVs",
  "key21": "4tG9ckqNQPW9mvi4Ehq2Uavd6jxtZ25GkUJ2PsozkH4BspqzRsBhCEVAu3CvWq2WWQbtGBwCQmLAdTPXAePEAckH",
  "key22": "CdZQbYAc734A3aQeAXuJYmp4WRMxQ4TZ7eKTUQkHMVhHXwVA6QWXnF8ZrrxoikEdGxWSrcvSpzzHaPNTTkCGu3e",
  "key23": "5VRtoHLLmYWp69tA7Fkp5ZKgoqwKpqC77yfuorpRCC4x1XyWtp78x84canyAH24dsjwMfJdUoDDeCqq7wX8Pquc8",
  "key24": "jC4GMXzw1ZZeR9FubXEsmgV2qXoK8p8MKoT6y2gsbaQPx6WiT1PQX49MTvzXsWM63uWf2sPeApkVUsv5k1ded57",
  "key25": "3v6fUH7cKhBg3MRwF4Td96qEQAeo5cnadcqwhViTJvfaaQZmshePkRw2UUwXLVmKUGUJ5wNzNVKb7fJPDZRaQ6Df",
  "key26": "63UJ5aRHrwS4xd5KQtUb4TDoRJGcrNE4KREFfNGAUxcqUV92Hc9EyRD8NZ2uqPBpi6sV58dSYTyB3KGgfqgGJnR8",
  "key27": "5P7x4vvfWHmoAzdnaupdNXV9cfRgr5TXRuTqFziK38M313ENPBFym8B3PdP6t9ZDUpTKXcbVdp86Qji2eZjNyhv1"
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
