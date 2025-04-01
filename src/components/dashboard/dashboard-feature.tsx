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
    "2CW22yTNfcsbYgew6dnn7kgheH72egajZdjJ8a4Ef8pUJ5JaqzBM2YtJnJekAi3T4FCGuwysRmb9jXMcgNRm4wSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRgFNY9Uq8vKnEBshJPsCTdsZ9dGnj9YpZkxehzspxyGsqE4pLVTLNraz9faRRXwdnToUuWa58jFbSj7r9DiLWU",
  "key1": "2Vi32ApQwSFBrHijazXeJi3rAB5UT5es8ySoUnu5Xrp2uNh6QvBu6XqsH8GniAY4RotDuHzmAMA5oaFsxzwydCLV",
  "key2": "5ykDM5zWYSn9ragseWeHjw1BnczH64ci7cHgHPJakh2P3EsTFbSVE4Yt8HW8Kj3H19WYcNSAi47aQN887UcSMMgU",
  "key3": "229vwcugrpknyUiF2AR6WSM3jzKhzKKwFSmBEbvJUQoEmiDPPErTPqS726CfHr6KVUFbuhr37Qz3TUJRZYWavFYg",
  "key4": "2PXYR8gn845yEYuwbwNozNGr4Wwz1QPLyPmrpqThKxjhDWhmR3vTT5HpRRrdhLfTehcWyowKYxmvUJLME8o1ikbJ",
  "key5": "5DucwnvBcqu8aHDr14MKVfkkfyrVQKDpNU7tZF8NJ2QkmZkesfc2XR5uaGpVSexWBUaLtJUPiQrr6YT1PtJ8Ffni",
  "key6": "5vemk1QYey85hUM6aV3q5bCseUXvL6dhjZLV2Qn3i6TGh2xGhi21CpFpP9vfNW9d3ySYC95C9bRw1H2oL7VgbrPE",
  "key7": "5wu8j6DG88h5iER8jCvgyncjYv1K5b9TGijPTFEr1zTjbQH13AoPK5smHwupFHGhpSxNvGHDdge8KevBqc8UAf24",
  "key8": "5gYdVdTQGApyFKu28JeVWbLBgSjqR2YdYPQnoGDea2aHRhKs3BjKyc8TFDMMTCfaNeg9jcYPEcKH624HGaogZMxF",
  "key9": "4oK4X4Y6AH9YYgHkHNpZFfbt2hYWx56R9Ttd9ixA5yJ1oRsNXN1CJku6EF5Htvc4EbP19V4oB9pGcNUYfE8tpeRR",
  "key10": "2PqkHPh9kmmSKQafT4udGiicto3Xm6fJYLvgv6zJTGTH6A4dD4oHYDywEMDGSmumH54R8zpxKpYR5NcGEdHwXb1H",
  "key11": "4KgcsnbGGtFaikhXbd3suJSY7o7R6cM33AM7Lr43qpDkW7XkAdrrCWvtXvMgqwg9gHGE4KK7NMTAtoADbWpHoL1y",
  "key12": "R5DDoJst6k4RVm48tVnmeAz8r9aZRFK53SitQvVido7Tgmz3UrQVKGyv7tauqk5EubGTTbdoTZ4sA63t2ReHSRy",
  "key13": "doWnzMHokS9jFFzPAe3CPQFSRkR9R6Yj8b6kyvBZgLTzrRMLk2b7x4KfRRZHzBHgZkTpZMhdUSzZ59CRU4fnkkA",
  "key14": "4JDWxxMxW8czX1LQxCPJ1HJGa7Q9Es1Nn1ztVvXM6MgQW2PYtMi53kXhkMALK2eczNVqXkftBZJsSpHD158pdn2X",
  "key15": "4YcFEiqey5kQA66HfhqvmYtxjm8ukaC2HJWB8kMyogPy1dUWuqW9iepRxr4WmKDFzETJxTVZ1USwbX6SJoHWrQvT",
  "key16": "3EKxcQQmDGEN15Jxo12hYfKs8Sv8PoB3VV94QemcRP6PETRY2zi4qVZxNhyZeJyjx9YdJnZqvWqDEijU4Nsg1zGn",
  "key17": "2o6XXeGo4RmPg9L63C5jpoHdrEjBXQAgshPNCtXxUzJC4h1e2n7Q8J79TjjJJFsDkCqGWTKSDTyiE7UJT1sPFNSA",
  "key18": "5yAUHEbubUYEoUdBHgeWWs2jnvQVPEp68whHv8Ty6d82g42VDhAEEP5ECB1FXjRt1VkzJBZZdM5pqBXckXb91r19",
  "key19": "5iBpFbcPwkErcujoeKECotSZ7k811WySn5SGWEsSJ8i2wdJ5rU8degqYrMbWE3bhiQn7h7RKMf7WVYkZPCZio4L9",
  "key20": "3x9XRg5g1QvnCTpnmzThUNwrsp8LcLdKYu4P3m9M6b76ZfqnYD15KBWC2XdKxk7C97XE3Q3C8cDeifSxAKRCTEFB",
  "key21": "2pMYmrpr2orAkc3ndVsWtBpQVWoYbtqUk4Xe5fhBaE9ZuhFxL6nDYGW43U5vUsSjnUx2ZhtQrW1tEkAhmT9Jap5C",
  "key22": "4pvW578cECyTEbE9qgMxE244M9e4sE5VAt4s5A93xdQBEv2qczwXGoBpKw3jERM9pkZbKBq5ZtJTLTV4mR2HK4R7",
  "key23": "2GZqfT7g9DDsgFEvycNL1diu6wCEpa54aeMeE8m6SLykTL5MNBCMyjYVwHqYFkpEZjJYJA4n8UmKeTcLMSRYvRS2",
  "key24": "au9CFmVMrfSoB1TiZF9qTHtanHnzRmnrJvXb6eCEQyY9wcf9KHHA1UUkwFwhiRX6uXAJyjakfvkuSCq2WF3rL1o",
  "key25": "5xnr1r2Tk4mdybJu5D1pXj6zstu1u6uSF9mZgd7wtX78ZFirgFLPzoVsKsPoquo7XPw1cHqVxcLBDTp1hXUSK44w",
  "key26": "2z3t3XsTXL4zshz6v8JxVjbYrmakbm8TXwWrAGeeYCTgN9Fns2cjpd85NhCQN6mdoi8Buq3gLue2AzYXhjCfvojv",
  "key27": "3Xvwe7cjAADTM8SyJRxqigF1H6q1QcWdp67CNso184C9UTWPVR58kgezuQVejxZW7p174YmrnXjdjZFii8xyQNmg"
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
