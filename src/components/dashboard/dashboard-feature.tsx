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
    "2aS4kmmah4269A2vrWuvk6tuMECExMKGv6EJuUsv7zHA2w5Ge9pfF3cb6fEHErnBLKnwYBCYwg6XnBhaRmcoRZgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nM4TyX5P9GCvpDwq4pEgDdhGpV64ZYJBMvbcPX7w3n3Zj12cdaCBuVJi3GkuCYif7QhBxHgS4Eukm3iXdaMZZ3S",
  "key1": "9SNUMD31Gf9QyDD7BPicodmsq9FkccvqNp8JSA63yezDQe9J2haespjaFivpP1ByB3EsQ3Jn4dq2Q45f15mSrBo",
  "key2": "35kz2645WA26j5ohokNxuNcM6TAK5iwMzhMmraA7N8Kr12QyRukJTdysHgMibWLTbq7S4KEHKdTnBxRrVobUXSp7",
  "key3": "2f6La7nVAGf8NP4ycMkwibQsm47uzFGvMa8QAapipDY4MGtfQefKfhXkZYmPE2Md3q4UqjayCdVmabPoL9bpqcD8",
  "key4": "4iwCcvzPhwQVfnUZdj4mYkYjBZcVee2zFZvBtkAnBPBJT7CHkXmBRMz9nGt2ek5QFQSxwVXxVJpKesUNArR77mtg",
  "key5": "3vz5iCAXQCFGYkWWg2F8XdM3CYaPK7rwL848dzfrfwe3hRzSFhUqQGby6RJCkXtND4VtU5mQHGt5XFX5qwDhqSDj",
  "key6": "3YiZMsi3EtZCxSjas1qWsVaPpjGQWdeMkoMDXRkVKK93oZoFVYshK2Uf53ccJ8ojiphixAM2vHAsC54XNeGt3dWy",
  "key7": "2WqYmq7ZUhGnD1cesYE2gdAB2Ta5aJFXmrYmAaq96XkRQfudfNNVAAmUWZf1gVrmkCvVCUX4Vtv1fTWTY8fZACay",
  "key8": "5bHtdxHTtzybUspMfbWEsy2kmQSYbox7sPEBtQM2oDogqu2MoZ6m9GTG3hBXHNpAjeaSgvvQ56745KqMDtxDsuk8",
  "key9": "5snsPC3A1Bmj4nnvvwvm3odgdBnQSVwSgLav2bVeyMGW2YCZ2y2YAeygTuW5oiakiavh2BxJg7nAVkHc5MJL9nxF",
  "key10": "NhEB3au1nBdBQp5fvVQ7zufntewXfnxfmQGbt5EQLJqNkR8irWQbRMirEEDC3qaGig1uJiRHUp5zoffQzW2jP6s",
  "key11": "Qr1o6NUvKoKbt463txkG91BTh828aCiCJnem4CUE52j3W1gU3NWNoRYRpK56EyDzZ4K263ersXJivDVGtWY2To2",
  "key12": "4KANtcg7SaMMjNVcqPqcZv6sSnkf8k8HF1pLQZDA8FL31H68Y7YrYxFHn6168uBE8tXU4iosdWcN9PFuioisfnyu",
  "key13": "2rodD83kr4nAF3yx1SKgJaHUBQ5XBrNvFq3HkceaFHBFFFh8H2bnWYEcDmQT8CSgjoFvc1bXPiasE99yGD5GDbur",
  "key14": "2GNZ8QuvhVw8bUbbE7Nbuurx8RxUXwcn3VQbNYPDtJvjq4YMt9abGZmBwFkNhBsQ9qTmSqWmrXzPokx3fDM7gDcq",
  "key15": "5Hd4PfzAaF1cso3HCUzrhkL6WEuhbjqU77LGydABtJyij8abqE9LJp5kprgT5KL2wUf5CtZbVxbB3DxDQHzzAsnG",
  "key16": "4ni7tZSGa3RuwPiNirNPBVSE6ZVu8K2YANHQz5EoGuh2Szgoujbf7RmBGR3uahoA9WcY9j88sjYX6WwJNdomqoo1",
  "key17": "61epfHFq1fVTV7Lzv1o554d8itssV3tSDx2ftz5n2Q6VatVTNCLZgkM9tUETmf6gFpCte5JuhyhsMeU72A4CqHmg",
  "key18": "3oqmnSZFXuUrqqbEexaPo2GqMVYvm99uAbqzWL4uXjnTG4iFLjJ3nNFmrtyp5YUSiqX6MxKrm6GkGn2ugtN7U3i3",
  "key19": "52BaASGiTK5rdrcv19oamHkgtZR3DiKF6sdY8Wi5M1weaXuk6xHXibKyVpGg2ueYJgULYXkKi72NjDXWa2FW4gCq",
  "key20": "3T56T8p1vdweuiRBSqsknsjMXSKcjgDUsKomKDaM3GNMq7YzWdtxAWay9dtTi2juRUL1nBC3tLFzJvgPmT34rpAp",
  "key21": "369T65MQZ64XnAJpBS82MeK3HAXCzGdN8pXxD1fxg4nwjfPEpPdwMzBmLqUPabRzMPtmECYXidoLduxeJ4JKVPUv",
  "key22": "28UxEeFJYYNE8BejD7PP7SQHzRgkdSHQKxZEb8mXpPTizT6mpJc1YMK2tXu2P7rJVzwACBK3Ka2JezxWDcb68pxh",
  "key23": "47msxySU9ZaFGqPa7V39DFX9w3dVX4UBDDkvLUGU64BQ5SGLBRMW4Z1SuujSCX1ooCUGdy1NPmptPmAWc97EtAzY",
  "key24": "5vifwE7rtQrxVVdP5GAD4THNdFa2xRpzrSHFhHdxc6ZCuuUeic8bTad47MAtikkrJDsDUGJPFbH4SiduZpWAciNA",
  "key25": "AKjECuQez6uUuoQZYQ12pLTfQD7DH8TfULuUaMHDnzrm16zgexQ7sBYtZj8D8oncBumzsdqR16kRoJ3PkkHktTS",
  "key26": "64TVEm7EV4qEvb8jwfZdtZN6f8ttnaYeHPyErpCQNixDvcvAHoPW4svQ9fAAEvdQzMq6tQg8BFxEVrubsRZiHH4C"
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
