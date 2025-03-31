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
    "4zZVwQcxQt2jSpBmPdF4ZmnUsSBr11k4WqkzK93EnRgvubieqqfxnfYF7HSRdCJcXj2naS5XwF1BNoSh4F6ty3Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ky5fyzqLRgTzb3ex1iPhrK9ntN2JVDDuCMD6Jwz4bJG4cxNhHwzXNM7LsbNXSAmEaWawmYwNWdKFWEv28b36fo",
  "key1": "4EMqzZi4DKmS5tmNv4ZsmXZZZKpU1hFZ3gYSVwamVGoENVtFv6GDgAAtfBEvNC7gRhP2CLF4gkRUkYBjwQzHDeZV",
  "key2": "52fW3C7XbzoNjChaxZ8FRxuQGrDDLard5AiQpMjnsjWhkVb7MEEuEL1RGRsYt2NBJudoNLexppG7kwk1E6eiFQsq",
  "key3": "63k4wLppc8r9zJ6SJhWwJ4dxGGz8atdphBRUyinvtuReGZp5jguBqk46FHr7LnusNN8xk1DdmdvdUNSPMzWNU6Bm",
  "key4": "6ry3Sndn1j6Qc1zYowG4DyZZx5C1ZWh52p5PrJhU9R5cubvpg1H1Lzh1463hyMkBxqMQxipZy1ch217HbYcJ81k",
  "key5": "4iw5ddKMyqPkHtk5sePkegSgAS5t62gQxojWtmag31sFXvbmcA3XZwxNeQbRsmVNuFDJdsUbwBvqoRbTCCmzS6NL",
  "key6": "5jq1Wx3Ss3pdAjgBU4W1uAnG8HpetowLQUgu1755dhPAEnKKSRVf4niqegAgGudH8tUojT51RzDefNMoemorsN5M",
  "key7": "2KCVZS2dfgktXN6Uc2P7X9Km6dNG1Mc8NniViYwLwYShrMW9JQng4tfyw7yFE8AHe8voYhSKVaaSUVDjiayjaCSu",
  "key8": "4qghmoqEMYTvRYguio9XGWjxNyoA8xYw9cu9QHupkTWWoSLCm4m5JrAcKhPxnfh2swCz7eRPHJMGuK9dAGb6uTVa",
  "key9": "5DU9KPsWKoFTASqRGKuPZ4A97zwtbStL9y5j6HZm4pYJXcgJrJM9RjbCKyDNKgEXbA3v9Bbdo7K9o2ZWKX58JraX",
  "key10": "5hQcqKujJACsSHCPWooS4M5ak9s5KTRGnfFLd83rKNHzQM4g6i8iFKGaAnRCBEqq4iPbNTrMANQTmNU7kCffWe2R",
  "key11": "CKuCmSeNxP3TACrLwP77Uhiz4Yjz3j9hNNoxxDmVXJ8hiBbbxccHKikc5gWrBMC5b24RCeFUmPi5vnSjcBqzgsR",
  "key12": "5zu3U1kDF6AL3xJiUtkPdmLFaCuPpvBEURs2YhZ1hxu5W7mUs6RKsBFYyn6XJgLrpSkivEjHAoZZQC6uckzp8FmW",
  "key13": "4w84MwiP9UMN9ZkYq9y9mrwJAg3gVpGMdUCzfdLtSRmGP139px5gvhvq9kkQ7AjQWM3FS7wFZ8FvKC4mgxQziPSw",
  "key14": "5qUgL89r2rLbaP6qqfGJ3zBf9wLdSUx97izHeo9MejBmaPRCHn935FqvzJHW4VZ6Ve4sEkBKh1t5zsAt8UbChTL3",
  "key15": "3nvfKpkw7EjoWGdV8D4LJiWW2TRVXHnXkKFajD4qwCsyCm3yzWvVk14FEswkpFr2tRGy54pZ87pn53t6UjGpGvkz",
  "key16": "5NSCGbCXsuntktycSz2ihdR15Y8zA2catFCGbwsdjpSdBP6DxoCadk5QPgkT6PxFcz55v2itH8H6fEEGDXC8GB3n",
  "key17": "5pwS6xLTKRiXTegKRxM8ujZhTHnPdP8mhGgLwemAec5WnjxmSnaqhn6YJ4MgvkYbe3Fb5V8vBBA3faeWyiGQstFS",
  "key18": "2RJpuaN5C6hes5XaX5M3mNAEar4Q8M1peHbAzTzj2FgCzsCy6SLifpZFwhw5t3NMqwCbq1kEzTSaXpzUsTNXvZS9",
  "key19": "QwzhtQjind7YAneNZd6AShnGWS5TqSKWCvvF5NAAKE5wmWxt7YzNvx4QWbGbu82ntJfBpBBabYisTCw5hy4koYA",
  "key20": "2XJE3KinXjUqEKzoaqFBab67Nmf4f92c6ooz1WGbqm8kz92pqLwbobbGESu9PzTHvmvcyvaX5KmEM8Cdro64ckDf",
  "key21": "5y8Msh5YQ6ALBeSR8gTtEPHTctxpP9z2c3L4DiGwqm4U3PA1K6p834gcjzPNAp9TtJ4cGQNTWzTwwmQv5y5cbgTY",
  "key22": "5JHwxsLEh5jtAV9brfzdN5eRUBx7TxwxvF9dQBLoMHGARUPZ46FMAVsPy1FHGsFHE2hC2bAyZTg9PaWPDaQ8d9WZ",
  "key23": "2GtTPuXuQWdqQtjHwPxdUorutpkHKWmVX8a7sUbvYPokPzfPMdm2e1z1x7u6CUyfzeWoo5SrFK673UPFbfyVeyaW",
  "key24": "5wvf5p2cUbEzprJm82Ph7z6BWQgYxhh8xrQxLxj2QNnQN1R96ngmJQPPcCimbDQuvNDcdhLhCL9srcnq1Ep1RTWa"
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
