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
    "2mP7zjudKjRh3W9rYwwPKGWH2Qota2nBP7DNP1TQGVwo6fUAJQBtEHS8q1LPb7qMXxn4GzNd9FDnpSrCSDCjhxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rx7N8UeaQozztNWGnhf7xhBCLEMndxFNRy5uidJFws8ipFsyc71ECUH2sjStj7sjQFAmrC4wDzbxA9qyqZG9xfL",
  "key1": "2seWqxHmCB3jePLWTCEcHQEegCeYgSBT27HvoGWNReH5DnpJw2Zs8ge6jrTSASi25nL7Gb5peyKcTypWhvkHZ5UU",
  "key2": "28L2WCuUaCYYXk6de3yN6uYVP8k3yEGR1DuoDLP6QsLobS4Vc6ohxeXz5fN1q9p8mcDsHWR5JSji9GTv2ierWZVf",
  "key3": "2cVw3mrMWpSusHj1AKEcCNBhiD7RawHKg3yruxTjg2dGcg4hwEUFH1CnCrU7SE4X5K8hT5qku7wVnJnp1T7QiQqV",
  "key4": "5o3yaVdgfEG61ewZUBvBA9oMYoAfupBKqDBMMNWqvTjCuXNr6JFSExQiidFFFaUisMo7prEw7CLRgpP1YXhkz66V",
  "key5": "Nf5vhszJQgHNtvdUcfaV1hV9wASAdseJBd2aamnyEqk3jAptdrW1HHfSXn8CP7isdJiqWBaALA4BxE4wQSCitqP",
  "key6": "5bFRM4cnMXLDzF4S68ibdoTNd2j3etcPs8iaPxRrdtLVDLSJ8c2cn24kxHrL9tQGSn2d9WabwqJZUEQgrZynBiS1",
  "key7": "qaTeNSXQ2KtJwYGZXGG4Uj3e3ecbA1KkVaNzi2jxmbMqnPHRxXXWA1x5tMEJYNBAEsMkRyHimSJRe9j2sj2hDHv",
  "key8": "5mjmr4D6ehnUV2nnpfE3hwpgQc3vEucPBJXMQwdVBuRcP5T2AzbtYxEPmBe8uyybr7SZvAkMu3YUgMVUJjhGYMaH",
  "key9": "5s3RUppjXTv8z5CmoxsFVmaG4uWwkbKoNVF6RNPVE4PK5fA5kfXwrZ5Z3mS1tpv6fw9FWr4U1tFZff3847KHuXYK",
  "key10": "4FoAe3CBwgGMT3itQLPBVhxKVianaCZyk8AsUyPyRff592eApU91MYRNG89h4SSNVsBYRNS79zK8gMSLjwPivEKT",
  "key11": "5eQukvDqA2xWToJSbBKXRP5KMthemFV7zBbNNL8QAVoSCoJfykmp1XyTnQ2bCdCpS2PUzfgGE95DPp2YpLPLEWtx",
  "key12": "aqoCsxL4XTiABVzco1ASxXVAS15XThAeMiptJQ1De7MemwBGAnDQUkjhrGyptiW83crssp61vy4Rd5GoNDBeKj8",
  "key13": "36r3WxbDPs3VJQfhJHS3WcTKvatALqdQXKUu72WFF5iEaajhNbnnXCpqgw5Dw8eSkbGT2uHzLj3gEdBTs7jmyBBm",
  "key14": "yvP9M16EBnh6wHoX15ovCxeEM875bTGkWTP9WGXZ7M61MnVqBamDpdfPpxKYzLhCXS7fCWJRYxxwLD5wLuMH39H",
  "key15": "65mKhQbAeeGQ9Fc4zLWHEVeEk5uo5XcETffLfdho4SRZvUEYNdr5H9ExA7a51uZGXYsXpuYrnz3gGn89D1ucpDJK",
  "key16": "2AZ3XGY1yje1j9h5mnRsLhS1ZFab8wFLoXPyEnVJZyKTznCN4sSwMAUD3FYe6ZfxZmtRAUL2BZUfJr4kVEjUZ9KD",
  "key17": "5SYGiwj814m1BK9yQU63KuPpqdkotsEi4YW2SdNjGHZkSssLL22viHdvr3VE3HhDpS1JYgLA2qY9zw3zppMSiGXz",
  "key18": "56mcKDod2beCTdSWMagNxkX2TnPhw8w1Bndp4F7P1q4mpLmgBb9vYdZxXMu9q9ArZcAmdZWbWMMFvcir2BipvSwT",
  "key19": "4GB3vBYp7TwaCRgSZm7fKUoKQ4rqKYatWf4HL3LRJ7hSoZJUy4EaomdA6VWheqJGdWXzXGf4CqBKRtB6wnRgkJm3",
  "key20": "49U3Zhsb3TaKA8kCCz6gXKR429qGwRzWUUhDNz4PCACA8WW2PuLWzTYNKeLhCEvKEUoMCTVsTucSPFg1aXmoRdci",
  "key21": "5zZYza14oZnpJbzxW4CJS4tFjykNveAnzs5dRF8QX3QpAMUoFy1Aispz9GSa63tjtwahM1VhMMTmoze1iy52Vyo",
  "key22": "5NAPq3Z5LnpJTspgLJyTGrXDQuzFa1TydX8cXAddyFXstTcX5tXRxqeR35Wz1YDZEHQfZn7bM5MbGwfcKfw7MbeX",
  "key23": "dxNZHMb9hTmXGvDxFSCRa13B7MRoRHCgmqgQaWiAtkS3spafdmUBtVAj8jqvEqd7gpJWZNiTYV8RxqSfiX2efAP",
  "key24": "3ArjdcKuvWb6RuqbYcb3E58B5ZSzN4atJQ4LJKQwjQc2QeiLZc33rzDmWHTLVd4nyadXZ3DfaSNpCYBDUErF4aG9",
  "key25": "4MTVdTUQFZzFBAjJAmBfJq12i2egyLhrD7Ba632G7i7ZHvs74BZTbtMKsd9csvEefPsepmw949xnQqSdPm4bYA5f",
  "key26": "44G7kFD7NyzkYs7R5UH6D8KPBxSsR8i3YNq8dNCoaeAU9nkkP44N2Tb2qJRiTsQm1Nj43iaMDgwgo1VNRkbSuZya",
  "key27": "4zVS3uFPL31VsL5jjZs3vAhXzFtMJusaLH4QHLeYfQn2PwgHFKEDTZtga1HDmQo45TxvLGDm1zA9MnSD5ceBsbZ5",
  "key28": "3ER54U6mBHnHk4NmPUvypobbh7nS1CUq2k32TDFG3XcBNZ95huJjXAak48QkChhAuZSPqxbX3gMif8sJorhnMgWd"
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
