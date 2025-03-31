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
    "5ZbdDk4FxU8CsfVZMC5GGYkwEi6novdocisQyNJ6sfVv76CzHtPMtiSVwEk5ei8yAuFrQoWERVCg38bZ58qzUH3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJkwLR4YL1DZA69fxZFojnWykLJfWbkKwxc7cWJ3MKNDCfufnbHt2CsXffDyXMnk58cAEpZ1XP63faAuDP52uT5",
  "key1": "2XQrLGVz9J2RWLiTNHGRHUq99Z6eQ56HUtjG1bm7QbjmxN5Y1sTTncLU3wdqErus2Ev5ikZ5Hg5NfGqDvqD283hz",
  "key2": "5u3WRjD6owvqiCCqvmPr7A4ipj9dRjEkXxyBEUcgNAip74NYXLEBQEuwBcbD1U1W3AXD6EPDxAGBmNJjx2jNCNRV",
  "key3": "2hpmTwK1nRy5CNQXK7gD8z2U3swX1uWH76JF5sen21ECKyfUso5euQDb2V5qMcFz9oJVk8AT8vZDgxoMXrCXzmK8",
  "key4": "62T8QhEzUXxf6QuzZVSZFKtM4kzFo8J2HqH4ns2RMXhkjnHyZwqYPh2k8uVTMkKnngcx7nctbYRLALKMSJk7gGLn",
  "key5": "3udSzRBistnVDCU3wvZMKj7s5ZYvXjQGFfNXNFkCXnrx9tBqCUEnzMbmTMWdRLQzBcacTQFfPyHRbghF7ptmsHyN",
  "key6": "5XZPnY27B5pXCpC3TzU9GP9xPqdzPANnMHPRaFDv4PqjZK9LJEeSk8PhaskKeeP8ZK23wA8FJkRrPKkDL5CEWTqc",
  "key7": "2XGf3VRziwRTmgLa5x2PjDxiCKA9UmRgDU87tmW2xYwKpMT4F1cGY4wudjxtwkwAAgVpWtrJGVK2sHHEJRniKwsA",
  "key8": "RooPTKESPwhsqXV4wdN6ZAXE3sxmjcKjQCZ6CFjcdcC4rdDx8uZ3NoBouutia1BQ7HiWbaaaagVfjPm9VYQc3Z1",
  "key9": "52BbFGKawcjEbrhCqNkv44YbixhKNvbtzCeUEvrf1CiMb6ucLdUNhDeuQc8gLEewf1SHXSGbnDfVpvULeVedQycN",
  "key10": "43g1JiC5264AA1CuKq2cMVnWJZJoZXqeJ4PLxVCLx7hMYC8c9fJ6qETxg8TGwUoycnuZjdd4amrVDSXxt49Cf4Va",
  "key11": "4pFsdWDfinRHBc5MurGtDXohfTwkHicfrvQsePRF7KjyMQnCJPRBWmagcSrN32kwvU1hGjSQ6aY7JL7BpEHxY7he",
  "key12": "57MajamgKSyW2vpsh9aDfw5L3yGCduatK7KAyjkz4fntnhwDwN7ShmBqFwuKfuFEjcJtxq6xnta52DxTPVUvQUkY",
  "key13": "pi4zZG8F4FhRQazLsAHJmKF5gzPVXWsMqEGSk1fxn1ZTTmAYWAVh5nzLUFdHsBFcKH8yJC8Hx8tT5mVqs7o3Ugw",
  "key14": "EAp8Rrf78NVPsD1ER2v4yR9HVyhmXokdkETgEWLBWfkDgdiVSo6SzohMed5gPptF5ux2abheeQWzdu4wxpRgPGp",
  "key15": "3qTmBgPtpiWgJKe3MVbeBBA4QHWmuucD9A6uoFmc2Uny9oSV5fzEkjCrDSNQ199QVXGSZjDrpCxaRffuCCMn6dE1",
  "key16": "4uWMnr4szwKwA6FhZRNgvzRfggDZymZJo2wk8nf9R2rmnoZA4RcRsuNNxdLdk2Z8ZytHLtpMX2TokeYCuJmkRB91",
  "key17": "2JpwzjHzkDukgQfyFtCZEo2QzdnSrgJpRQJywrF7DnTTH9xGLXzYt7PfLobnj4UBi9EhZAwAzz4ZKxq96oCUtDA",
  "key18": "3Y9KCkK3StUBZo9g7RsPkn9JTBZ2sh41eQBps6mtbYwPknJBVqBSbPTJPUDk6TY959SjpbFjDEr1Ju44bJYiuHtn",
  "key19": "31Rpvrw4ZjiqVkV4iBQbTyozWdiGtKRz77FbV4PA5F9Ro8zy1NwJ3dqLcHxcbf7hrvSbxGHksnojAW2jSjJYqcp6",
  "key20": "4gbYoMt4W3EezyaxX6BcjQkisAYTuK4yNKAxX6DvgBKUmD1vccYDejeJe7psjhmavccfnPjmdDJfevgxzQcgB5D9",
  "key21": "hpCPYXeznpx3gdUenkSvbpPKL4ZgA7kmcKsVn5WZmgo8tU8iigZvptvM6tLYwAxvgbSYrWAtUh7i2X3kH1ejxZo",
  "key22": "kxWUJhPhg5GP6QJPNQimiSy3CoBigP28qXccmd2CrJieG3RwN2LkSKGQbDap31iX2JWooz1ppwibP8QzLo9VU3d",
  "key23": "55t2vwZEJaYVJj3w1FeGhvcMEjwthR7fhDFYbuYiZFxQrEMAbV4pGqrNwyA8pMespKqCcaXDmeXSRMj6p4VCw84C",
  "key24": "5yNdBi9EwyY1y4EoMCfYHAzMrsQweKfq4r6q2SMv1DGw3e3UwwfncuMiQezp9GejkKToV5LNGUbrRoN4YUTfEX4W",
  "key25": "2RdUd2GdibXWH7xV4uXxXzYMgTUHPttJqoJgYn2WjgNvYKW8dj2troKnGXN7VDnhFqCzo8jP3WHAFPgwTFKUyNWY",
  "key26": "kSRD3kymdxQig23yk2CxP9TVRxwZhhShRc6WbEyPArdYeS23QwVj91vNiDrrfiMTFtLPQBBtMjq9N5MxVgsuYiQ",
  "key27": "27QS2J5ricvck2ptKK5721aFzM6SNLCBtQjfqwggDsdngpWFPfsz69vo8u6uQFwv9Rm3yXqTF2wyhjHhYVYu4Aj5",
  "key28": "4DdwAYAe9Fi5DSyrTe1fxHA54gMFGWSafds4PQmA576SfcGxPSEkbPfvfQ3cH3uynBgFpZ3kjecKkdF1ukBy2yES",
  "key29": "2p6koqZKJpkwxKtF2CLM9CMaPLNogDMoaPqoYXAHMffpeFCmhZcpPK7tf7x63ao7sU3BW1hGZCMjsmhp1peqkgxX"
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
