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
    "gUoa2uAzcFAN2iTBFz4PwKmMr1M4EQJG2sNUfDqzpNmpjFumGK7m53jnM7mzzhzUJ5n5dQvWY2uMTs6XjQXdMYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BE9ZCMLnwgrR5pL6FTyHqHSpvuHKJgSKjZ8oUP3g2QTyjkxnzPYrmgngxRDQTeVwrmm64cyYiD1xAAi4y3iFfc9",
  "key1": "ecSfouYQoxTH65LcCEnW26Ko97SwBjFJkgykEFUKbafP7J6VcprNqqNkyAT2SRu2FnAPY2QUdhdeg8xmuopnW7W",
  "key2": "3BaceLjSA1hB6s6PtB8duEfWAYXWBmBS1iW1ksbFf9ZnwwSBNwierzhzTbfbpUVVq1XkMzYuvBqtfKbKdaefVR9G",
  "key3": "3cK2eSxuNubn69XtPGdXCjDPc7nGN9ygxgXVHi7sS9srPg2J6HkbUz4wnL391mBdqNjNDcBYZ6WhRyzwmjap57GN",
  "key4": "4HnpnnDHGNKPjZZ2bsMSoyRTKh4a3yHzTao5jTvLSECKzoRngbKsum4LxC5RvSMkaWGvSMF4hqXggyGHLz4vo6T4",
  "key5": "os21QJaN7FjBngfLLWBGbobjZG367xy877om4uc34qgWzgPmCbjrKxRSNpymvJjGirWcLWFvQ6WFoR3PwtkHUm2",
  "key6": "sZsBpt8yuHwp9hkVhV2QYmW7WwFEAvhMvyTZS1fWsC5NRDrCLKjBnFzMd398S4mAi46HLvBFdkgtHc7RZXbU8Gd",
  "key7": "5d4rZ7cGBeGXoM7J6kttj4hdgp9GpfVwRJpBXNx5BY9mH84nV7LxVu7LsVUe7rnKNNzvYTTXkHeAznmA8av2VYtC",
  "key8": "ZtbiQtWanZCicdJGcZTANFMjDnK6zsgHHvJRpTrU6p2dK2aURLFoxGrbiCV9GRyYPFN7MB6TCUuBTXsiiftPUW5",
  "key9": "5xALpkmYxn2vW2hwTyt9htZMo1LXv9X5Qo3oNngxwbeKs7oG1SvinQPB43mZLxsGhzDPGMPaeaMp731YVZQJwi4j",
  "key10": "4ohi7UTQ2EMyQyVsYySa6FaKMHvSAPfiTTKMYoTdHpTDLzwz4UZ9m1bJttE9PQ5NNuBiLjf7MtxQWPQxxsRFoabF",
  "key11": "xo1r5p3iUUcsezoED3E7g6AuedVxZrmrbKzzg6iabJLtgfb3LfCYUU2gAM46y9fPubi9NWj2h4FxJ7x1tafrC3D",
  "key12": "2Rm1y7ReJWzNUML5xea9rd5x1fuS5UrBmGQNRsKNiP5LXg1SfJthFpMHA8EonBhWVgS4wMZQ1v6uCPVT3vPw73Rv",
  "key13": "31hdyy6rpT7FzGEZA3wNFXToXiy4FdH7xi4PkepQrwGRYZcgcEsrw2uXMdmfoQjac837jYwjqeCVwswEX9v1Xc9S",
  "key14": "3KbaAmpSCFMn6RetkQki4z7CbcooiXAH5ExdMNBWTjtyvkGpPguLwXYeeUrBQj64pgp16JCgcWYLWEHoxhRteVfD",
  "key15": "4j9TEMw5V6FXDWuSpsmEGzj5uTw7JpmxobSmxXJGGDWmT9adstAWHDLQFMEw6hj6sTi6KUzhjiYWqTAyz7cnqvph",
  "key16": "4EqMFwScSs3dqiUx4YmBqZiRKzrgZxEbPVKZ4nRkNyzNhr9SSCs2C1wmkzcz34trsV7b8VkRHAqQMhunwTde1gaN",
  "key17": "5ZBfbQZFUeTaCacu6zPq2XHAodYbtg7n2X1DaUVcbe7Z37SwnMiu52DstynLiCbVBgAuqHxhFFZ2UhPnoXkRsZoo",
  "key18": "4zQbWpTSomicThcM6fMbVtQ89upJF6UHF7VSDM5TeFJbjKGQgMysp2YHDrkjpnwmjDyUDFXFygHJMt1aLsbou1u4",
  "key19": "2gfZDXbRtW2zKwQkjheJ2s5s4gkc1ijG9hEHX1jzyRGziLzU67XmbHfbf2BpfK8uWr1SSMYo5d3upHRg9WUSqvcK",
  "key20": "4awNEzLjjzeYaRRcXFKVGm5CKURJdDfQcZWUs3owg1j4M7JVNKWjwiJzNQdmQHZrgZi8RkgTUikqEA4HU9YV3WLW",
  "key21": "38tHvSHexSYwKZDSiJ1HqBQFCH59mMmjAK86AezgXzvfFPSA9phcimeaYkgaBSFvPoHWYERYvdcGBfNuX3NbFbE5",
  "key22": "4uM1osbda3nPxoCRdKL1UhxRMwQXLbKJcVMVVAXeLNVxSDK2HtpZsNF8piJuSvSQREEmnaPhCSjU9e3waYatSLWx",
  "key23": "3T8nXG8D2qfdHssqyUzoxssQs3yKwbtn6f7dvpftf2jKaxxJMpXvm9RV8CkfjCXMkGBSvLVBftkzYee2j1w8VHtk",
  "key24": "2CMQfzXvo7v9btBWXf7obRm5hHUrufYe8iBqEZ5WigKBfgN6BwQk8JKdXP1LMrhUJhPUonsAZGcWuoMGhvkDyiC3",
  "key25": "2hsTVUJMzasz1qM5geRH8FoBhwivKvV4tbw7Lz8swFnCByRgADTWUqb7RwZcg3tsQMrnyjmbKNPS4s1Wxrf1AzG9"
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
