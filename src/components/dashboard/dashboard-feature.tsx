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
    "5BGg3LdjNahg7Ab1NG6AjzwZahEGMMmJAjoFJypkjja7Nr9VFEPZEt52PDW6B1cdhGteiXAvCyBzgFx2MJM9MzBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tctsuGWFcembY61HXiRigoVEM1VoyzGkutzNxSag7CUcPS9yCNmyEeYgsrxbkRPhx8FtuGN1peY97zFy31gQJvq",
  "key1": "2ozt8ZVreykrVLeEJjBWbZzx2njwDvS8RBhEQ2dq8XPgAP7kHYFf9ZtbyUuuZcsNKLmNjy14xUBvXH4qM8TA6tFs",
  "key2": "4Qn7hTK5CM2yC51ogoy9xdzaZLauL8ciZpCvvFCca1dFaH5M9E7H3GVtuJC8CwZN6ggKK3e3KXSXXZXNQMk4Fi5B",
  "key3": "2sYc6Vz5TbfxthqcbMwNMiEwWiqSK8v5bgDQjTiB5VKaoyoSUWDpkHqhMXAUeVA3zpWS5nBM4k8nT71zcwpXYFeP",
  "key4": "2LcUaL24SMWSZbrnrqgGjXnVZgBvWDQvSaPG9AwDDY9PRTyyBVi4HKuUvjaTdC4FMW5Uhbq7kesyiTDxLgNMte7p",
  "key5": "5yytPpyNJogbDpaxoAzeeXpk1jhtH4NqYWj7DBkX9AeevQMiFkGGt4LppZf35iAJ521oaff1GLZndBWUXP3d7wcp",
  "key6": "4LdgPBeg5aLWHXgydZcih24JFnE17W486PuWFMuKgEpZBuRTHEtoscHUednpBobid2KMiEZARUzKZdakZLaf2YsJ",
  "key7": "3U3AmBqqjjCGnigzbS2Vegspj5jZPL8AW6xRGS8nF2tEu7zYj2wwXUKpCFCzfq7wbp8bx16h3K5vJeVHFGX5rxfu",
  "key8": "U9Y5mqyTcrYvZ1EzgcYf7cqAVnh8GGVfCmBuPf2RGvCP1SjH2X2gvmrcGEFgo2MP7pvEezdmMzcpKHc82rMBr3V",
  "key9": "HDZbBKmHpphb4DEj4Nc1j4AANKBPssfeiJxShKUVvzcAcLuEysKBzLGJq4DK5vi8DzzPjRFzPDyP7Wt3m2Zqi1j",
  "key10": "4bPYk3LN7p2vwTdt1Vaq1L7PiMaCKipS2ZYT58aZNvP1mCxfeEhmLfFo73K248cacRviW5xGLqzeD3SJEHymX6G3",
  "key11": "XzfMNRVgEBBLV8YfQvfhVh6tfpdodDFGZ7NpVVTFifjWEyC6PzfA4CZs83HrPAqXMBuccQYgoA6irjmzXPy56iA",
  "key12": "5LugJ97qUXJ9ayRAeG5952DgxaDbk8cVJMbLsT8Kdtw4P1FEVYf4ivUdDMbW9p59hs9rRxZDvs2uxjdunTYF8nFN",
  "key13": "2PMg9TjsX1AGL4pT2gNXkjc8wTSYenm8oxH89YRbJ5pcxndQSZkuqkTrKM9hVKYrqvTYEdyTbe58Up8gkqmUSz4s",
  "key14": "3pPjH2CrHPWSAvi1HD2XYyisPCt51b55dm5FyjR6rfg3KJ65tnQhSDSVNxXYzVs7HPWPgt1vwvV3j7raHF8AeoMe",
  "key15": "34ot7cQcHbbFhqh7A5Yc6BMjrsgkX5ExuA2bJo9zhS2wZZXexV76is8w8vDerBtjrMwtLofxksW1ZwbaAnqyRkaZ",
  "key16": "482TRfUJn7TAqBrM2L4noKAenJrkeKiaDuzvyy5fQVtBjyB1ojEfT5DJhGnrM1PBfp1WbTsD3urTtFx9QFf1VsiD",
  "key17": "3mYxH7KiPtX5L9BWvNraHckVVKuLzxgRk8ts81unAYxWPNS2j1F3NZ3HbxdbbnEiF5tPz3CnGLwPcShGCNZ8zmi8",
  "key18": "5Twxq8B6H57cXaVx39oxaovZoE2wytTnyWHscn57Vkdm2KfFCxBmHrmkQgVNw9gqfdF1mYodMnRZv6gRHPrLNMRK",
  "key19": "3zjHLkqaFfALbJW55Zh4zubdrmxvQRvBp9Gs1ug4axHWugP4VmRTZctNhAVJRYRdtCjUbKXeHMbfFGShCZKCp8AB",
  "key20": "4bEYLpgH3CD9Hq84wbQuSUyLcaGsbLZygv4EZpr9DxEqUNDAwFNdD6CSoCAUJmkTmV53tZ6YjcBnDJnGQr6hp2jf",
  "key21": "rttPWzhMKN6vXCLe1YG1FZx8swZTxMzTFmmAgRNFmjTVuBhpK7Rkx5DSwuByonmvxrVrHj7eN9SJ8kjZJS7kfyS",
  "key22": "4dUjRH5B3cUzz5K5XDanZXBLcfPWCoxvhFyzzEvrVVFX9JJrHQewYCkHaHZUv6eWGYKKurYJDBEFZZXZEbumYEFN",
  "key23": "3zVbbCNMm9SGQr5osuad2KbSJ39zWFgPrUAxgvK16NF1TEodJXXVmntug5EtHniZrTCFWsxVvqL7duGLrAqTKB38",
  "key24": "4mURzphQqWLStmmJs2smaAXa8ktKT1BqNiUxRqxuxnGbmfCydQfJhhfLo8hCzDiViT4kMJiZ115TuvCmBGYyTUsU",
  "key25": "5PTzesDaFdHdr99dHhkvggo3FkKM1voxFq1LCmsJ7GZfzPh12P99E92WWsQ3A3SuoNaJ9GrdKFhkkciVb9TsUQ9u",
  "key26": "3yvhGgVwQDUb3MyNGqC97A5yeQDuK7tJ9Q37qfEMgPYsG8o4CNrApgqgbQesQSgw1ZNcRi4fmSL5TJtSjzHBU4oY",
  "key27": "3hUSHDRDcta4oN2AUnKxWqixrCpNFWFC5J2xaCJFjQvewQ79zJYNnkVcFM2JTpGkbP5DYvjWmQDsEnS1YeJY8zuq",
  "key28": "2kF78Ftahsgfsn4jWvJCNQjRyKPaVuWsxhiianAMV3mKDHSpTnGRWuuCbpYBDxJp4MQ4V2b5fw5HEVPWhMntNfTM",
  "key29": "2bnrtrnaDjpYR6P6GR9N8NtEQ4bLpgGZxTATuq4sUFrP1VYjPaDiYxL5LdJNXm7DrDop8AWdxeNGQWmqwX7oRDLA",
  "key30": "5dWDwhcWvRPyDiHMiJGyyCFtAExD1tUdSHaM4KMVuhjJTuQQX7xZG9752f7ozxYnBGf1J38tmuqMBXqDYv1duHGD"
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
