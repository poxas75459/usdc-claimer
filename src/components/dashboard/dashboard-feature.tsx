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
    "5DyG579hvki57Cj5ewU6jaxaAEvzmmaFhekVgLSn3V1WM6GtSAGcA9kJ8cuhVebBKLMKoHkBSQVW6DtvwnrAcuMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXAShwAF4ASSBzbokTkANxgYiwwnVYERogjyf3xr8qmgtgJ6aNZEuuJwozf4ZL4bZ8xDDcQCMFfxwYiiiwV6sMp",
  "key1": "5PZBt8RZ9VkvjdHv6W7u5syghvNzaGRpzqbWy7oGoicpdmEBTKPjVcyV1WsWepBwyY8k85AmMMSpabqNj96w9URi",
  "key2": "5DbZmeuSeJ6USkiKismAs1kQopJdNs1Xq9HeSgGwZirtxpTb9d4rVEDsmMuFxM4UYNEtxHYeKwP77jcEv1Apb5bE",
  "key3": "4Tj66K1Es4negcAmrnhNibVLer9uJXNXC9St9vUqXL4df5peUQ8TVrSXVUYco7igz6AycpUzZVkVk3tYCnezXpY1",
  "key4": "4cz9AhShz27x3BbducezjtJZyKZW3bgn6sswMEafiYFXMbwFqghGuhEpm58wDEfBUAy5dkcFU6eJPLRwEmK612Sq",
  "key5": "4amQPYUDmHTaobRph87ZqXZJcRE4jdW1Y6NqjBAZm5PVME3sUfr4uQ1oDPVibeuUTo2mR588hV4cVqdUfbab6nRb",
  "key6": "5NHmyTKozD95So2kcehmMxj4zLJK4K7tx5vM4CPZBzZKZPWcSg9yo1EdXDcLvD5HPStUKeCgmNzdFSXB7brhYJD2",
  "key7": "HnntmhAHAAYaNZ548shTGsZ1k57nSCQtL9eJzcEqXTjK1SA4aDBYNk3RaPzrtz8Y6RPy1KimeksCQYept2BYbG5",
  "key8": "5tT2z4mQQGaAzYHNwLgyhddGTUqNUPNkqcYYZDFWqhPmNWk4rcLbkU4hoPD4KE3GWo4p854WDTWGpFLMAQwwju5",
  "key9": "WeFMpU9a173xqGcG4MntTUogRw8GctwqoifZXkrZN4t91owvrDy5Ej33X4ZQnRM6Nk2SderSZRU2ZAYYsJakhkE",
  "key10": "4iNDnXBQEzSgtafJ1AVzheCx4k2iKSPipKqcgtwMhfuTWG8Fd9bnLibu8oVDL2nj1z59Mt69sT48mcPQToLTxEfn",
  "key11": "MBjyDPnXqyAGchU2S8XAd3WjceBrgMBVxa7xvmQhSRTut61ECkVBG8ehmUkT2Ht82EGJuAt2c6kY5Dk12ZDJtmW",
  "key12": "51UUMyNa6kPZqRtFhCqvZG4DKb98At7FCWu7F1Pkr53pGuUg6FUPZg1m44N4HuKBfHZmg9LqNfoUeaBa6kPmwrBE",
  "key13": "5buqTq7prdqVTAeBpEpVzziSTUdrxEwKxsJNkiKVF2E7G5jX7LwhR7t9wSoLji47rkBhBrgLp7XnPMRnXYy73ANw",
  "key14": "3XatwcRmrBnvDZLji1CsPKgRiquuUxY5GmfLeDb8ey7ZcVe1boc3NS4Bfd2c7m9L9XNYnsEq8r3y9WAUzmYhHFE6",
  "key15": "3fTsZq6Nt6KAFozWYf94JTjbvQFkKp87Y4AU1RvA14CpVKVf4rMLA2ewNNFf7qAAGcrw4tfsuwiWCwBiKsrjDSYh",
  "key16": "5tuFPtKnw1izU7hXEitKBqeYyL1Sp92UDA1EfXfH8NQtVvMdveCoBF4ZViaRxqC5KDdvQ4ser5AUy4eTdDpSwtxD",
  "key17": "4UHJ44jYkUxrtZsbd2zbLUuQ3WzLMgZsskpz2nXYzuVKsfuECeuiiYQ4j5KhhCVNZAa1E2esbAMnRNqRgQ3ef6JY",
  "key18": "5XY7nqS3mP4vEwSmqqC9KFy59VQ8T3A7PUYh9gStPVhXhHK1f7v6zs2oVJENJCAfnjjj4E1qz1phQQDFNVBgNps4",
  "key19": "5cQnnt12wXtakmkjUpFLFyrGZ5katLP9uNHFfhfkqYaboHF1dtEDY8k65cBt9zVMhapFKdruEhh9pLZrarkJ8hVn",
  "key20": "4HBnqJuhpdcSKsDumE4bi6wXtQmdqtsUXVPKFCVfVUZbwKEMt66NH3KFEjwyVGXB1fdtWd9vR9akWKXzZLDNEUA5",
  "key21": "73NtQH2xKivApH4wnSdPAfEQrWVwYqVVm268rYVs4FAEDNLq81eR95iGoVqnEvo9po2Ksz8BDdv6ojqk4YDzZ2N",
  "key22": "2hYBeSVDnhLtnUhvcFdsfBrAMrg6FNam7A4y4yfv4rWbuiTteYgEzm9z32YbLnuQzwrNYvb3iACPwcMfon4LoGn8",
  "key23": "658NyhHKFg4N73qdgS5GtgXrLddRtdwcvMqG8ZB7UhjLL2G7CYWpx2RRMFi93NFKsNRueTg1uRd7my9nmuN4gfcr",
  "key24": "KFszAKtjSxvDAYtog9wL6fTaP7Wd2JVnvpcGagmKwyrrTmQvuSGzmz9J3rAP7F7dYHLTzCK4W1w8zqV3rh1Unct",
  "key25": "3kWf2bjDagNEmbgVJnf4NLscE9MiZ5nyXyYajm8YcBaP6tURW7TviQBRNtAUwGpKhx3Z7aaFcv1fdfjHm1P1zGmB",
  "key26": "UDDxYuCamwj2g9UWM5Gyi34JWZGtzeewztuxqGjcnyDgiTkXq3n6DjWTK5bpyzFKQLDD2ZMjFtuovuqC64uUiar",
  "key27": "5h3A6bwzkfFoGDPz35WH7nsUVoYhDzMDdv43NSr1wH257Mr7bbKCsDpM1qbuPoDaTZ6Q5BcXcHdXCmifcioYNqXY",
  "key28": "49t6edXjoAiUadkZ8CpbQvSwqBf5zdFYCbibAGeo3QhrdgWuJ8CGjRUdbNtVpG8GHxoUNrVfvm5f6FrWFu1AEGwE",
  "key29": "35r8CABBJKZ4bQJLokMoatcWoAXGeuq6jD5Sc5QsNQrjMEA1zc6hG8Powwt22Tr1jQKEWHBu7N4JWcQz56MEQZ8W",
  "key30": "2QjetBtqgzEKTLLFyMsuiThZYnHgosgmXiBZDHE3oWUAu966LgJ7zp7PyeCkj1PqpqkLHfzbZx9LKtVnqKL9eRxu",
  "key31": "4aQL9RxbbD4ddukJfvHpDyZNFrnxxJBMu5fcBYozyQhZiBGkBDC2W2QR7rCymaJAAcCzybmZHTYPfDJGRAsXoxjV",
  "key32": "38MdEu7XDYU6gPMXp1QDwSfRNeJ94VQUT1YaQ4LmwqyheEBtcbfi6VHvhJBH3N8Zi4i4LWS2Eqcf1JwJ52Zdx2nX",
  "key33": "4XXT9bm6tFvBrnpefcxVxtEP9aMPCrdDvMq9wWMmJEA1uRyRkVaP346S2KV8KP4Z7qUaWQ9ESdR9u3s5KPAtqJQn",
  "key34": "5zzeHJoAp5fFKKuqNj5TsoucX4gqBg9yL581F8GwbYTWDV7B3PTXy9PVWT35PBFyNUtE7xnZokGg4K8FGEGkPZMF",
  "key35": "5bByhFZACghCWGFe1WbVRuah4iuSaJzTdMGwAcoXWorudoLLwr2k8Q9RAppnQjSJhuqvBvxUVMaqxjijNBE5iby6"
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
