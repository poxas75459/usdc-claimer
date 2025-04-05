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
    "3yT8k43b88WZv7hGUfMrx3EqmwcSK1SnhFYzV2GpzR9cAof5733oRrU4fbo9ohHCgFLrgCc3pYH25Vn4ZxSSasLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVB7YEY8otm2AQBs3LJKTtQ1cZFGKbxi22WV9EQH7zgpVmDmYiAtNM7ZWbxvESoUrA84h4TQTaLaRVtWdqFMgF4",
  "key1": "62BqbNup9X9NSZpL8nnAyorAv6QbSS7sA9JH9riAjLQdPXgb9zjjy8kymyBKPKVQvS7hxrhT4evc2MnWbsTQCxzp",
  "key2": "5cBThjroLVGqMQ3GvSPbHUJHZZKn9cuaxY4d5Ztu6owZGnhkzvEWDJA9b1eEuu22wjFvwyZ1ibkFKePF2JHQBaTC",
  "key3": "3ZCUy8SrTrAFNHV8MRXGGJJNbu5ZZgVcHPsvXgx3hdgaiG1eT6k9nVd43U39wkXNpVaeUWcGiAfKAH5rhJqhti8e",
  "key4": "4uDPpCAimb4mnr2sMijVDjKVVgtajzJ3EsUFA4kDwoqruurEVpNdU6qVTwNZT4yhT6XSWpjGDPX5mCreqhVBB9UY",
  "key5": "hJVD3v8JfA2qkLTQkE8HDSgcog2r9wE1p2mxVa3kBncPtGcZY7whHbB7QjkqkHq65ZAmEeDkcRUoR1zAv3TexRy",
  "key6": "3LamGFDCqJX4Vw7LtqKhcTbPtSinvP4KtiUAQpFLuBSM1d7wF2iSBsjLM9j63vhNkFwohZ9NdT1a6DffwiFWo9qE",
  "key7": "3bTQTppyQmN7LeoXJUR9WPeVsJ2tHdU5eQ5Dr5UjfLcBToesyARJKEp7ayau8FgGd4teLrHEpzsB9MbwDhBhEHuZ",
  "key8": "4ZiXgfyA9YVScrYxyBcue7Xi2Kpe5WfitWSGKwc2n7iPQ2PB2BXMAPvedMVmv693Dqrd3Kou9qnk3VdWM4NU33TC",
  "key9": "mi3bFUTdKV6mfg1ETZ7s3v7tokFWC4c5U93ENUTB37SyTmisp9vjfAqfxKnBr3hbC3ApYwxmbRapXKow6NnMZTy",
  "key10": "4jSrkoTnn8GVxzprNHKnvzh1VYcxxQ4brZZvanAq7A6F5cwYjAh4FW6Z868wUqZ7iWkD8kh9dXqtMy7FdYgt1Ddf",
  "key11": "59sB3hMstEq9d7sdjy1ohvv6vkiuEnHusgEfcDPraoqGmciZKCokyrzi1pUdabmbcz8z7cmVwkZvUy2BLcUquX5Q",
  "key12": "jzEbUCLR7xFu3aUmfuKCtsiYCugTgMnccyeiyk86VCVCdKvPUEbpKYRG7AXAvWDrny3xHfNS687vk29BUmqTyRJ",
  "key13": "2M9Bn6R6rAXgkasycYgXhjwNNKYQ8zLgaXuQWwRiAur9NmnF9PfjKjyAFHFu1bYSQagKx1JAfumrR2rDTwx4y5xg",
  "key14": "4XUjisvXSDEmBiu58SWqp6TYUnRypiBsvcxobJ4EPoZNKS2ikLzC15xvPjQNd8WLjs1zhW7zXMYbsLYtp43oxzUo",
  "key15": "4oMrPw1GsdJdYZSXRjiwGHhWv9qRvd7kQK6q5agBK81kqPrzQgMcxnHcsw3EL1Xo6sbuxjuotPRWNmSnRXvLqvDX",
  "key16": "5sRb5haJwoNwpqA1S6NPevrPtFC7cWFbFR29ZtfoHgWMy8t8TPFq7HCov1yX1Daso2pqKaqgXV6aE8UZD175icjZ",
  "key17": "4FmB4Xdrj9YKQkYNqj1MSFTSn15W9A6czDwtUGpjNESBj16iR5F1zZ57biC4HDDZcETwwQhK8E9t3izGoVbsioTN",
  "key18": "3XznzkYWDcvx9aRoKogdZsRjVEpeX3VD5tZAzUDkGNcH8scTG3R2QXDE5PQkFN7sHYSowKBjq9rpvG6E6h5fSt1",
  "key19": "21Azwdn6qDGYWX3ZSp8biQGbU1E8Dok3iJucXApLJk7aqmxbbfaySMBkn2rvHN87tWB2Fu9RiEbot1MQxPU9RDSa",
  "key20": "3UFjroezUazhsEsopoRQA3w6Fcm3LTUyaTa7g6ibUBSgquk1c6Uuyx8xR7UkDgt1yJEetsXGg6ZwXnaKfqV39pfE",
  "key21": "32ynkjhNzWPHkCwEaDN42A8rxwouLzqZfwTJwoRKHp5adS39B2A4bDD5xiXqJZhTkNpHdcGZRmCFHz6uHdUMi5hX",
  "key22": "pi1ikZGLQa8hxZvovx2Kh5XqSZjFiKrGvga3DKuocufvhZXnUAYaeh3JQ4Ai8T8JvNR3yNVgYZ4AN1QJ5uDX8X5",
  "key23": "jCSx5tvYTaJwQeejE7oVAaFRAdZTnWRKNPWq18Ki9Vx3ooRozj1WHEE1nKK2AnZ7sH7fh1NCCHzA4qK315SDQf5",
  "key24": "3HRiJH73a7SKAJ6AKhWGDePJZCoefHF57zUWNW6LJ3JdVp98CMZFJaUw4CfVG2sVg7JAqym55ieZ2xoeLBmzzFtr",
  "key25": "5JfPp681DPdA3VhghHL8hZuyYeYo2NZPB7A9bKG7xhm7DLYE6gi49oHhvpASxXFSrVQGBJoiNjT1h4x6fYeCFYGY",
  "key26": "63CYTUWMGpEJW4bpbxdnqDjEJLd7QoDaeKVbFKbVsJaeiXiZZVwBoA6yJt7DoxuN2cu77oPhXPtoAKRSxqjLqi6N",
  "key27": "4JaMf7m6hhuXoZwEfXE4HWXMYxBVxtgVy2QMMwZBwQFNHCMsYeTQKi78o4oKWjy82XMQDhwjJQLiuCm74DXGRgFX"
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
