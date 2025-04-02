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
    "4vbtjUMZPHTj8SnpA52h2qdVmCRrDx9PWZscNuHNg7xJy1erzqeBEjL8PBaJRegdRJWKsbDMxyh5iKvJmXcMF1B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VoE3F6pRtx8rGFuYWpqWzremXNJLYmQcMcjefBam3CHDy5b8J2APHR4iEvvLrzkvjeGUTESytbdipZ1papJFaC",
  "key1": "4HWfrZD7xVZKozTr22mrNkwtew2KjekviLdYsKmMRdW49Zx8svWB1s3o9WqM714EeBva98ZfFTE2eenekVQQeyMb",
  "key2": "2vK4rFJ3W8m94kXFTHJLm8USfmYmcz9S23G93bRcKT6ywDLh6DYjZCKQWg2Zs9s6jspfdqP3hW3Z2io3voEN4HV1",
  "key3": "28iLYP9mJWAFTbnS7xy4JVF8GoUCh8ecJAyHAAf3pEgGhAHyvY9NVMpUimhPf6TTHW17u7yH9PSJ6oKZFynomcWT",
  "key4": "3dkELUYY2ShecyP4ZaruX99DntahntV2UHwFoGhWKMGhbJBdFpP9D8bvDBhaHCVDkyt8AXaTcRUeqvdzJwDWc3Uf",
  "key5": "xhcFXvFNDbfx9gEEz4yQAd1tdFU3mFQznqw75mv4j5eCz7RyA1g3v2qQ2RMWejqKhnpiSyh2ZYBU9jNKVJ8PgcU",
  "key6": "5kWRaFHUHknUbr777hBqyUJKVkBTZA58EroN9xvsF1fPsavt9toM7tg9capPn3pFVcGZmzUo6N4ZzxMWasXs5zmd",
  "key7": "4DB84dv8yA6SMgGErCPPi4vXJAJwniXAPrZhFLyEJj9MeepVxqnFswHkVmgjieqGoAVJRd3ZRhrAi2Pj9mnLKSor",
  "key8": "2jhTUx9vsBbo4EymZX9icUsdjMoA5XGXMsrxgzoXG9KYZ92vi9p7pdu65BAnjrydX6ot5pd6cUB3xw1FDaregd8D",
  "key9": "52g2E3PQMeKcx3kzJUvo7G4tut4EsqSmvWxDocJAjeCAzG1QwGECQP1TkNGh1YHKajH46YHp9d4Kdt51fjqBf8nN",
  "key10": "3VY4NRounzW8quoHWqU4JMWNS47Jb8XVRiipaDFXM5eqGAXUfzip8CR3hJE3dyNDYZKyNX3gJfyRZgA7dDTh6rEi",
  "key11": "5N2D1qvSDisfdK4kNV8xUHrBFD4Vc3T9ythWzEVsPmTuB7xxsQJhPG8eA2mfwqtXMCfHi2HJ5ZK8SebHiDFWeQbC",
  "key12": "4j5LhrA9rp3on8FnuRfZc45eTbbqKCjTtGSpYLy7mgLZXaAMdgqgA3vCTcyh8bHkQhVf1SkuG4oz2PtZpTwXy2o7",
  "key13": "4tbbcTbPa6rojNb8WXNbVN27Hvviw9BoiT2ztbPyNcmXbJQy7nvZ3YcCszuQHvjbqff1gkNZ99D8VF7r2HhHRg7d",
  "key14": "2DA3EDiGpGNFvXnoNF3PSzQCqGNwQodBjaJZ3m7K9NemwBtD5e3narBAvX91sFQVGjgKkx1DmWpRbLbNN4bx2BHp",
  "key15": "273VpGXGQCMgot5SbBpLuNthKVh7ZtymXucA9xJ1UACYNspwAAoCdHPNavQFS1owub2FVsxyFakCmcV7B4HU4s3z",
  "key16": "5KzaDeNtpMJiavtMKt2ZUo7aNPEoVDwBUrTJNP36Aveu26XSpL5bjHcuocac5BcmMWpiBRHH2Pw9GSKLLrubjc6C",
  "key17": "5cC4FrhVJ4dR7wWJt7Dj3CkyzFTV5LtAwjeZpFe7fKScVTqaferzKTca4hi9DgApWRDLkxxYQgmJap2DHSdqFVEo",
  "key18": "66XChNfvpSR3BKwzkUvYuAp5E1bXXGRidfExVhtMByGuyKyDkXP7JkczoTJtgJYA6WfoF1cRe5VZCJiX7njD4EGK",
  "key19": "2RXgQGV97ggafizLVsdtHj5pUDDYmNEqo35JwiVtnha7RQgBeoGnhbRc8S9JM9sLzgz3gFLaV3bYsvQsz1kSEj2m",
  "key20": "2pU6aS7cdyXQ1yqbLfF5yLrxcycXWc9MvBFdwLkFq2XTev74iHaBFxaRKsqaNtXqv77pGHmLymYnmMeiu8vNfQb4",
  "key21": "49zeEVVe67Umuarztf4Dphp8y9aNYr9TycxhCitXSScjNyUvbFv3QCCAQ3SMVrWxME33Fr7wv7jho94kcL2qew89",
  "key22": "3oXHDkt3AxujF9RrLqoiWzpw3YsKw3sp1LYHKfB6zHZnCwXBLi7Sv7SQ2rn2n73L2nr4yrhRNx23GnK9BdpeBuLR",
  "key23": "wXQEZnhfNDXbwtJ7ZqGFhniSJxPycsRHvr6AcdPCSbVY1tZCeWavnnaCLRicffVB6kaZLQC5TF839HBNJkj9ZYT",
  "key24": "4X3QdWsU29Ttuu1gVf2VhnKwVCgsL6YU3j1SZfnpeb2VEX9SuY1iUXBWGqsrJMj896jnBVD4EuwArcBAY2tHuGW9",
  "key25": "awXa5vT1UJVvGm8R7xzvar1jq5xVDDqrZzWP2chx1D2tYU3WEB3tBthV8y5m4go8Hy1oVy1rDSX35tLca8EqnN4",
  "key26": "29WXjwW3DkgTcS6AstNH54Y6RQqjQaF8qp4Wbj3Vc7qKG2pFSZwBv8f8vYToXpqsRHUvKCqzua551d5PvkbAZzkn",
  "key27": "5vpvHwKGNezuNFWq3gpKJAkpYQ5Cg1JT42yKqdLyW1fSvyiNRnPqt6D3cN4NsymhWWWEb4UJztyEyF6UnVc5DZ5K",
  "key28": "MwVs5Rv1j7aMLxbxT6xkQfNrpKgLfRdRNCHwrb9kHXnhKcFkByoLGTpiT4jdahkYochkeUEwAV7VbxJh8jJX4PV",
  "key29": "5C7FkdkyYf6YaX9aVqB49yePgoNfsRtqN59Six7j3ou6f6V1bbZvbkmbZ3A13Qa2FPHXZJ6abueLtdnEG9udpwzY",
  "key30": "3NVbf427zpkVN8DPYscoRj7c2ijcaCHNDKB9dBo13fvXGYTjbU5e1APBz5JNMUvE6wxPYVT7cJ5CZWxYXRe7aP2E"
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
