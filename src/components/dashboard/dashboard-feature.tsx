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
    "v2hQreRHD8ZuHVvjhhQeSuyEkRh4xim33t8dLW1s6ZNPveZGsVXfccCsf7Ma97tSGmbeDFeW9AZ5PETxpJqB6zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMLdzBefiAP63dwHGehgxUEVmSrvMw1BMF3kQmEXDdpaW35MUjpeZZArMriWVGRswWwq4Q5frXoNPjxguHn4wWL",
  "key1": "3uBjrJr8xwBwAVThwdyBXHSVUPYnMFHVWQsGeN4LQf6HzJPFwdsBnhYjfyKeK3uMUCD8hwsmWdUrcPE2UeCGAL3w",
  "key2": "2jnMFA5QTMnucpPAYVafAi686FtnBEpipjf2oHPcirtcZDjrZB7hWDSBfNKNGVWf76HiNgQEtRxa1PZr461aweT9",
  "key3": "5fogvanSpsQXBgDmfjLuxFALuHxzyc3AzQT5x3KQquVRaA2pspL2b3ZrXhWHXHjQK5qXaTmySgJP5WdH8YQR96Wa",
  "key4": "499q6p7836D3PG3yV7Jvb7cbmggWPHUHWSuyTwwMvUo1qfdtwgPALkPDoHu5KnTX1e5KBk19BbQs6XrbJ2qjbzkj",
  "key5": "2Gcg6Ywq7nwH4QkCLPGfN5k4mbX4yjPfTeayitxkmVpss9NC7kWjwQjTH6byLZQYCvuyJuwzLf3qEXrKZtdtBpM",
  "key6": "2PbQqdRaMYdUqEqZupHh98XYfzTuHyDCkyLBhvb6TzmoXaNxtc9HqynswkPoXjrUqJkv1Rhp4rhtA4MA55aG86fp",
  "key7": "2skoPP79AuKANiqfNDnWRbDBir6BakP4wA3Zwio61ajyu1myD3bMh1b8PZJXjUJogpK1hMfp145naxedcTyeWVZG",
  "key8": "5hRhQnrqD6gEw4uZeZc9AAWAXzsCAPYioHEitBNuPU5mHfJsXvjV2gdxbuhDTe1XZZDLZTKrWAZG1SJjxd7W1BkP",
  "key9": "4XXdsmLajD6XuS6QHw1F3hcS5K6hX53ao9RDK45ZYWinBghp4Vr9243Eabqs1inDYWGNyX3X12Hx5epEuGtxQ4t7",
  "key10": "5MPBzsbbVjC3azFNoPRqzG4XTztB6X67zxvz9EcmviWSFGeqp1Mxg889hvovdMJhvpznk39Zgn2VD8MHjSvQk6iH",
  "key11": "4kgapohbxS8R2MjC3QkicHNyG12bs2dNoSUXBuojRVpEC8G1sfpGpP4VsDD2x9co7CSLzsjch1nn6PYyYKH6EXfd",
  "key12": "3KxsR1Vic15EJnr6fPKRn6CwaGaNgYtvbJwRw2u36eMvKxz7q5rqtCAcUS2i6zotJZZB15jDz4m5X19P46AY25dp",
  "key13": "4UNJ5zo3SNU3fx5S8rkicb7EgtyQHGbbCdZMuuzWsvcY5j6MRYrjZ5sJPwJUGphZGhWzyw8vP64oFpLPqhPohTrp",
  "key14": "2v1TKDL9Zob28ewqK4EC2Mx1dE2cd4iYgEuhTsQdZ8hv2SoUTFMCP2WviyPYTNGwwbTW7bYN8e9gj9SDSGKPwLfk",
  "key15": "2N8YaSL5PzyMTUzJVrmw2hATD95hfn69v2eUrwwq2Tzza1LgJB7U2sZPvWCssutuDwpS1PwbcNn3QHNBvRjbbjD9",
  "key16": "EiuSPVLFyGidffd3WRjU1J7S4oinNGbeCkmXx8PpYkJKdSA1tWeoRGkU8S5rXbwzP2Ga77Cppkgsa9sbyonpzef",
  "key17": "Es9jfQagJLrQ2686FSvJHDnUyXS1MFHgnqCDrDi6Yn474saYF5sVFeVQKpjBQVZ4Z6F1YRuKeyZijCyJdjxjd5a",
  "key18": "3jGCrUoZva5Sd7KGXQauDYiVtiCLzcRKXTQawiN3XtcLJCrmNEALr949rTHL96SjRjh4NJkF87veQnEjduKs2wRV",
  "key19": "2KEJZ7yStGZxEDjJiQoQJqvGmH1AF1o39VExBAwNs7WM4HvmoSezvL4PXri1yezBKn83FDKKZX1pZpfURJjd9T3W",
  "key20": "3oo51fqvTSSZLNozj1t2vpz7R8m4Eqi5C891LMGhiPrb67tUPV5cjY2Tn8HVSSo5JDDVoJ5P2gFKcvkC8cGzbpQL",
  "key21": "VR6ygt7fjxhUECD74e9XFCVRQ5ARKqFw4LR1YhkgCmAw8YDxx8wuGWgTaKcq8onEpFV42ijCULA3Pz2ZP9bpZAv",
  "key22": "4mDasvMi2zotYeuFaNYSsu145rze7ojfFXEtFdHRTg9GqTRZyxoEHbJADzwzo8TNBVENyggMufbAUWWwUy1qNN1w",
  "key23": "4F5seFQXkvuq9EBrEqhcddV5uC3gVnyQHk1e2sRRfNLYa98rSRBW964GJRBAvmBb4vtXWHL9RhcgkHq887nYnjuW",
  "key24": "5qtmKkjhtyejSyMcSKxUtkc7EBibQJzeB7csUFmv2EDN9d6SKnrusgbYNHUwQBQdxLNqZ3st9sFCGUenB8aqEinG",
  "key25": "33znshmYwwkLME81ueCm4r5nQhRgdQBR2qESsPPSQNoQA1iif9rfekfdqnpdpZm2xuYCgcQ6roJSxowvk677VgRf",
  "key26": "4aEgXqBN8oPgExFtQXVK92uduWagwscR2Yo9Gukkp1FQShpPQya6E9KiMGmLAs5LxwDXktm6SXNcNsBxCVoSh1xc",
  "key27": "5GLoDWEtFJ2nCQ8kTVd2X3ax4aXZHxSCm6rPbDcR9443cCXBEpLiFKj8BxzaE1mEmE9L5KXwTxuBsofroaNM6w1W",
  "key28": "vEjZq7FRWQTmbw4VsJVa2fuDgQKMwJZWjgtJRSrhoaWMY6L2aUx5wceEWERhJMy4jyVYMpCSgwCGfRTQqLRWaTc",
  "key29": "AKhxhCcduqkxVa4JoHkCVVMA2wZbGF3ifBqaVCcGp46vwHbDKidnxg57JEqcKwbyo6hGLvJ8har6FA4X7RrbL5S",
  "key30": "7hspoU17ydLzMVhvNawYeuZ2gwbSgbGZ8FKMuq1yHF1CDjVef9AvX8RG3SBgNdGKKs5i3JdDBizos76sREwUkSW",
  "key31": "3qtyeJCcng6JfHy6Wqek1TQzEyZYADsUJtPLcQdhTwJEErc4xXwEPoc4WLvfmAgtaGyHCRXgtyjfHLWchTzGD6Ee",
  "key32": "5duAkbdA3Egi3MPdeqSjoBaXfngZpbY5NyvwHUwngo55reNFMvpz4bjWHs6d9bELqJR6JmdNwskVBrt1oCqzpTik",
  "key33": "4ywANcy2PVy6Nv37aGxA1AMzncUU54r4fWEnaCy9HNBzp64rzJBudQ1obV1bFuMmAdoAqtM5s5GyGt3vLgQW9VBe",
  "key34": "48zC6MyfyNEKhVWVNkG1mzewcwyuxq5yMVKZ3hGCVwWxbPfNgQutSjVNy23RWDL4zJpBtDDkM3WHeeg3tnxDrgkE",
  "key35": "2Rn98DyFarqwrU9pUgmwNneXjwgGJ4YXQwpJyB6gvCZsiTmxGPqS5MauR6Y3yJAJqxA3TPwrBszqaGZdjtUVtC4f",
  "key36": "5QhoykGsH4YatnzBs1bMzosn38gJZQNxTZKAbLYm6ifE4NnqGBCNPsRE8NdjEFwGUJT4GJhSpdNhobNtARFUUJyJ",
  "key37": "47RMogYFqdvX4oNN7ZUERLghPiuqAZTNBf3ejXXETCzybtsvwS2rTh3eMESxRHnrUKdLA7mx9BRDtQEXDqYeudq6",
  "key38": "5P8a7Xjim7xJ3Ss3uJt3mhH9NEBWWbRFYdydpwRffjK8FjjXEwC9E7jNSDUxjPFW7xMxcajpHdPe83ie3frpVT6e",
  "key39": "tv63nntijxDvTzFQP5jeuWkjey9Y1os22EeZ2nrcY7M1bqB1uGqYZ3NojjuYXYs5Wd63bnfhTicaUruKRzu42uc",
  "key40": "5F3iBJzFcDJ5FCjoKKAzcGzQ8MqGdaWnCqQN7KbRjEBFj8eXZgkyWULrEBd5saCcx61y26AZDtTDVzcM87PCUPsU",
  "key41": "3y4YUhhTPjxnuNR6KArjXqTBuLcpL61x357g91HmoMQbZEknCjWigtKHAiWp5s3gqcbvpv9MtWzzAiQUcT3sTqeA",
  "key42": "3qyrxmUevRrRPnTtaJNnQuza89qs2FszB1GH3QvAHxARsVJ7fxX6jAv74eA6N7URZf3YdNqjuoEUcVzDa3wnC3rq",
  "key43": "24Bc9bWb3x1aooo3b1MmR4LuqemJMKYeLtggsEKgi2YtvkqRSK9gCdyZizx6NDuZdhS4Fun3TDCLJN5CAgri9ZtT",
  "key44": "3w8fgYRo4MkpVc3QCz5u5LJP5aLmjCt9oWN4KD85m18kzwWWcE9AviAkYZ7JATh1p7Kgtj8w7nSveP6VTkvh3Fxo"
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
