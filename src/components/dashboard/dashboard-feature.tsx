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
    "481fgLNUcDoA1ouy4dRW7516Pxo1yK7ugmY2fDW3ibveuwuzg41TaiVkkZ1NcmXv81MgkHYiRfvvGpVUf6YZawwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqNM7LakejuTbdk1UKmPYL4WWN1CqYAzXCg8abfBxvaf1cu4PqCvGoog3Lh8PWYNh5AS8uCWYo9fr3R6tsJnTof",
  "key1": "cXp1yTLgccLpf29frMo5ty9B2uiVRBQjuSYDA9HswcX8TebH8zyB3AJgwDMnzkUA7fhMdQDbHKCr3fMZa8hCADB",
  "key2": "2JVUbYtyvnfF2SoSiyqm4QrDZv5HXZbBhS5VVD38bLK3vdHrG2uxY4H2bak3Q3wGYPoCyr6SospRoNePaRdtdNiV",
  "key3": "ioCJL5sfYDkP4di58vRwUuk4jb92jTTNrPFpDK6sfLBE4kTCXgmLonaJdPgD3n8vGqoKZJtPG44rdNCJ7nCMsge",
  "key4": "4DiTBMESY8uXjBHVQWfozx8BZnxceb8WZLLByzjrjwGGxmZEyHhUGZiWXhBHTzJx243VSy4oxStqHo6GdcDfGnQq",
  "key5": "5MugrHNfXf3mjw18koecaKN8gPf1P8oKFQEw4hz3YQKwD7XkgAqmt5FCRp19w8yB5EAXpGzgBytVCXpKvAjR3FRG",
  "key6": "2K9d64dzZWMHZYGZ6nhpEae1iRQ4fEAnA83rC8ycRKdYg81d5DGd88hPvFT5B2RPoxdBjdWxJrv7KwTbB8SEeFoQ",
  "key7": "YNB7hB7fwo1zgYuAodiW3qjgboVrE4nMBcpYy3io6UeBY3aVC1JjSk7hKKoyCEDZJskqjdQ6k9ZpwS2b1ERccDX",
  "key8": "4wdSdx4BF2kno2SSvkLAh7wrbnZgP8FqWm8iRaHCtWzG94rh2ryGYbFHzQr5vYK7CKaV5Da5MG25WmRFLifHMzFQ",
  "key9": "4akjvATF3nqGm9Wf55yj5RECtpMuSbE6uhVnvz3vTPjkxs5Kj7gj8XRoa1Q4EmDoX5BnSt28EbsKdfYw7AGFSsJq",
  "key10": "5rPRuLmfaPpAKDDTA2SA32pafjWoWvUNGDfRwWhSHcdP9BDXfx6hSj75hxL4iuVJmStcsVduXfeQzJjvh5fEaqUV",
  "key11": "5VDWmDT1c7nzGH2DahKEvhS49TwfNeQh5LEBqzxWKrAX9kuYY4Sw78wcw6RpB8Zwp8wJs2M4vuUWV6wi3gMuKXFp",
  "key12": "53NJJQhNaAbRwvyMdut8DhU2XjsvV6pN6GS1kEQxgcCXzvkkbZHGMkyD5pxJLUwFexGCSyeUPr26vvge3EnFbgiK",
  "key13": "47AHUmMy5xYaoYKucyUzsNWt1M2eKhvvi4NPAPfFnSTitmYN79Bxm9sDxEJGYMLr4fddLsBar9WWpZE5dZCqeBXX",
  "key14": "3uV63jd3h9Py7JBmeMCHjVMydJo3jfeJPQx6iKvJquVtjb1d5noLWxjeUMJFnPmiowhX2wWZhtAbwMax9H4oQC7h",
  "key15": "AmkfVW8HRemaDnEdCdmyGygLQCwQZ4PPtQzT9aXKrta6nWWirVR7HEgUWa5GGzJmmJ8VEGBKoH5fpVp2PpnprVW",
  "key16": "2ADFQJysBCPkz7tWeKNu2kEtwihMWcs3jby5vMrPMw2AxCch2TAFYrxeLiosJnj7z9NYhgycfAs9oodxw82tj7us",
  "key17": "4Djzy9FYQFbZAiPYW6ZA8szFbUVZ3ou71gv3TE2b63vhh1uMqPHQB5VCZ7jaZsEVtVADdrwNJsEdPciDjjCS65RQ",
  "key18": "fGpyLuTB56jT6jFPykcKCCwnFZbwHHcK6crkm2djULeZgoYFuidHL9qaWUhnPozSrrRxFWhmrxDLfLjswJPBUdo",
  "key19": "houSdY94tiMos94Q6WF7mcD3cRDriqa9cwicx26PGePc7xgW9UShBDEQ2z7YFEG5pPW3sFcmRrRq6TLc3nhP9KP",
  "key20": "2eBFwHNChdbuYBsTmBnf6ogUYSMjLV3kegewKJpvdSukReuZ5unkGmJarMemjpA2CjjJR5th11X4ZxRG3bR5KRyM",
  "key21": "25bX5pRpytnvhfo2m4ksWp2vdKrZd1PvbTyXcy1dBgah8ohVUmmNsMsfRxzvHPvCEFtPjgmowcDEEAgb47eJakjf",
  "key22": "22WTgezxVHdUCcq7ibUKWytnDFFzYeEkaz61DSs4ZDYFMLmqwYdtCKpJiZGc7mrdtUztgWocCKZz8xVYNjFQjWtS",
  "key23": "5SVqF4qs4xV1kW6F72b6C2k7MbqSm8BmnpY8qhfgMDeZesmWFyerHDykUrNr3KfJ1mmK1eYP8Mrn7fnUDHn8gXX4",
  "key24": "32ASgmZSWVAPaYhjBHcx688EXmfs11RpKsApFhUSYUhJYFTTHQyPqjDjDKvsmJevwef2MnzQALYJ4zWJA7vPewYd",
  "key25": "3dKpm5uaURaTTWJdBUYzPNjsQYYBCgyRUB9XCM4fFHkL8sSMvK48FWtV183AeV2DgrDAfnNbgsdxMYT9kPE5VUTs",
  "key26": "2WKqcbrQDUmssocPyducFyyFZmAfAnHLao5AgUwxSCkwwgasFDPsqLikUH3dGx8b6v2cV97TSHLniT4ELi1kgKsZ",
  "key27": "2etuqorSsEv37HWqG3muoCH1mXwnVHS8HfwJffLPoUzw6mBEmFTqFuPefFNg1qGuXmeKZraDa3jsCee6QJmNB8Qs",
  "key28": "5wp5qCJvB7vG899ZdbMQVPfFZdveN4xv1iKJfpS41ejbQDn4JJbZmZYkhUFTC85YYkLtPEUVNwfMPcavjiJ1DYtu",
  "key29": "5uLWP7CXh4nGq53teUiHDSsRDZH9Rf1eDMkN6Bsnaz4Y4R3J26DABqGAk6D8dwArDYk99j2BXWUKNa44TPYC3bF9",
  "key30": "5ju4Couduuw4w6Gq8JCscNVy5tebhcmNqkRCPbL6MiC9N8bY8KrSUAVuLmq9bAkKPzPGSaG4CXrJ75TrLkDJufSV",
  "key31": "ZDQFZJ2dWg5TCNRMRsocJ2ERagNCdxmUBTbKv2Z4eLodGJRUUpCtZkepoxQQMby8BaTQGGVHejtGKFQeUW2pVWm",
  "key32": "6431bj28SHopE8MooNDSNtBBtF5nc5UKaBXh3XcuyyPGY6pdeG7Y6R5PWfgLJjuvhCWRsTCKe5H1oeyaNQ8To6WZ",
  "key33": "3AT24aj35mhHq5ScTt9xQF5Nqrd6rYEYqJwekVwHuxUwLAb9AEfTt7A29grsg95tXt4W1xR3FYK6vE8R5WbxSKLp",
  "key34": "54phfrpuaLVtWB2yX37s8zmJ2Fti89d8p4fkNUYRAz5uY2PzmXETu5gPbWwNt1BeqxxvziSJKX1DVDqcF2oyceYq",
  "key35": "3XPfYm15AGH4HDNcWPFyMiEYzWoU3xLgZYvjEjvetrichBBCRP5hugHqcAsxdSBmBAWi2DVFH1RKKrX5jZzyc24z",
  "key36": "5T95DQzfTBqzzovcUrYFAW2h5jXhRDxWdP6QgC6ahKXJxyE2BE1ku7T5UCE1URY5F8eAb15uUs2FsjkSaQDFUSNn",
  "key37": "9zFuuTSVwBsb3mVKw3JEsmXNNygxXYrKw2D9mUJCHwyKrvw3RigTHtar1KQdmNmTvS42LNuQhAFoGaDVWHzZ3AT"
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
