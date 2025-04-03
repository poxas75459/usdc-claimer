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
    "datAkZerQzWvBXtx495snRR3AFELuxgPZ5gqvcqQGBi5XNZvuoKvYsY6GVPTKXGLpFxYHbyVmnPFv5xkhpjUSPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38K3dcyeY4AUNupZwE39mpaBQNkNTfqbbkWo19Zx2cQ6TUuEcnn6ucr9d3F7ActauRLG2FNtCEhAGykFfQCLRZFM",
  "key1": "58hBygQuoZLojNuBJzqWk61LDCCqReHfLfvk97o4Dyig9xaELqEo7FLJk2YvxkM4ijhGv8kY9nBnB2wKfGy1iCUr",
  "key2": "2Cx2jtJj5aiCLoambmNE1CktUKfS7MSvdE8SbAMBzUUwJD4Y51c8g81PxTAP21RX6z4gXcsfuTjkUFqZ1UsRATfR",
  "key3": "JXJeL7SwhFvtYgx3KsvQUtb4qXuppXc5vwkok2C2Kcypv6LqdxzFXJtPYDhQ8V5ERUauJLrCQ2mvpPXZNwAj5LD",
  "key4": "3ughDHZFRAVczCrU3zqpCvCAasMYZ3rScboAdFqSZhpkkJuukugej7E2NjX4eBqyrogD3bbwX2UfsjtQoHrm5umC",
  "key5": "3xFmSzUR7m2VQcUY8dDJFBkAE7VVJvY9jmW9qhStj1wbttbDdUgTGE14LG257A1gURkgFkH2Pz2z28ZYDHYML9cP",
  "key6": "42cM27xEMTdjMMRnwpVhdDWQAQjQcTienuHzcVV4pghiSWNWoVxF7vSsz1UJ2ZxVVZ3jUabDry8JsrTm66c7KAPd",
  "key7": "3nfveDHz6zMUGv4o5PCfRBNqwzUZUNpi5FNq7i5LoqJ2CW7vg4wzULgjFt86FUTNR58ELeUob2QTvfUUFcwh8GG4",
  "key8": "4ivvT1gi8QWr9m3Dntm91buZ4Qm9XRQyKDFUUQ5cuFdeVZMFvCqB6ZS557WqGQAaqnjwwgRGgTKL5xDjpyBjRihb",
  "key9": "3HfzuVwkgzXL7rrk2rFVG527oJ2U2N25ZX91jQwg2xWjn7PNbxhPAPCeXttU86TYbWwVBTdwTzw7XChx31dtidTE",
  "key10": "2xY5B5kyRta53bpxqJwXuNQnYgAL9B72dUkGXQeRJTLeUuciHPPibeWYUKhQCJgMUdnDDY6pvN15syUJm1oMsFKH",
  "key11": "3VD2S5FBKcRcmXhCJMgHVLymiS1dhLQQBNhcY8vdmvtYsattzxbvbW3uCwAPxCmGYdVeER9mMnN9pSmMrWmEyQzB",
  "key12": "4WYQHeSo7rcK3fShxaqiarRMPfQYaw9yB5nKwn9K6hX2kLidi3ZFPKzyWqN9oLTH6gn1DSTjEySuT83adySrgrpu",
  "key13": "iFPuBrnGeq6CyBn6x7jFrHVBsdMatzdRHzaxuhGnkNzanh2QYrCPRQvTFLYnQXR2ty3NHVGtbxwmy8dSwtgiUz2",
  "key14": "3h8mynErphe9bFaeKheLD5ASnTAbELYfocYajBWoy69E2iQjYeMKekBQ82ZzfMLy5cPYqENUZwC71a8HAwEjGP8S",
  "key15": "MxaKEUdmsHLL4bT3WPqYrYmBw5sBe3xXQLBiHFaZjYdLA4SXHrg3c4qxxTctGr2zh2cvNYWkU6C64psvzbZ5FrE",
  "key16": "967HL7tMYUKVCx3RydxBgsYVX4VLJCy2cntFk49GqnuEBFfMxV3rkqZkx1rwfvfzMjAKVK4AicH7DigsRuBiEFL",
  "key17": "2deZ6cShmLZdZ3zu5MYTNNUMhdFeNQQm4r9NJCy2GpVvmZAukuYnpw6gjZwiwWMgumCRsnznfaFS4Ww7kdxXEnqR",
  "key18": "3GBiu19iipuLNJEGRDGByEcWyZsQFDcHT19DH57wZLv8so9tb33jePfdHdKKTKcsYJTvYnMk5sZ5yWekZdCNFQuQ",
  "key19": "42B6g3kzeYU7WTuDxcQzG9nvSHBb3FqVy28Wzb6Qxi6Pk7DN1kTLrU3sY5LsyY78QYyez63NMcEew286oZxD7RDP",
  "key20": "2qBe6WMwsiseEMooyYP32n3qHhP5gSJVUTaFhMLEH7TLSPPL7aDYWSNt2qPb5NQwY7pAR1CwhPVbjALoawX5c18p",
  "key21": "2TCiqw5xCva57fPXhntxizAjWJZGL41bW5B9FwvrFD7e6eym3KoJTtR7P9oXNv8fdBLtoP6grSTEVB4U7Y9WYmhs",
  "key22": "63u8gd6dspDwy2KLVEWCpKpasstMbk8fWP6CzFEs5U3FCsXGY9W8Zt9G25QozRDwvf7V4JEXfJKFaTMnUZ7LnjAB",
  "key23": "QADJchxW9MshV3tNcR2o7DLBKBa9qHACtjofB4xFMnUUhsyc6fgjtDBUYNsDPGWgs2WmnQKntKKZRttFeutSF98",
  "key24": "2Ae1g6sWCSL8BzFiVL6rMPod3jQFkhYGW4uiJs5bCHJ7BF1eaLDKLnvjvsQsqQ4XcZpsGRFX2eGgxHbN55vqY3QA",
  "key25": "2uszPhmFcTb6MKKiTHxqwJXjpctzLFPtEEb2nAc6RRzgQEdtEhQPgLZkVrSXsdmuhQAbCuX51guHuzTeTioNGaRn",
  "key26": "5BmaXa5rEWthUkRK6vrVMVxuYUM1DJDqvgYbC8mDVJUzMRxLkmbWivkRHKYmbSyeigRMEP3ZHBXTm8b7RaKKMP1H",
  "key27": "51k17dohinxENmts3YawNaytSi2FpjdqYEHW26vxdHsMTpd3gudmbK69mBm6Jdj4HzHCMaupAbC3iDA7YtPtUvZE",
  "key28": "ocX9nfcEuAGNu4q3qkqrmbqSWAeXrK6oXUagnTnAE1ujX8oR2xB3FcSYPPr1Qy1AMpTpVfy5NCzR7az14aGwkmv",
  "key29": "4bZpAzjnPZR31jtgrYuKBYMAzCLux6e3QaRrsNM3ZuVNZWEmDyF1SdfvTJF6QFqUJcZhjUKys6tej3kSSsPgKYEf",
  "key30": "irUnt1ptxpmNYqH6rHzC6NUusQda5i68riEH2H4YKeVwvvoCSnoEQTwpFr7wEBfB9bx1ditwegNu5hXF6JKipm8",
  "key31": "sCohh8rzTDigD8h12bKV9RWwkRRm1Q2cAN5eoyHSSAgzZW7zujnEMNW7jRzvQaqRwYL6poZ2wgjSghW2wJEX51h",
  "key32": "2E9NZhQdS7rxnUcvhhu4QwdpUK2nKRaGT4b73M9iJaeTjJhJytK7K5AaoYTEznehs5RmkDkm3gysd7HoiyazaEbP",
  "key33": "4xzS6U2Rq1DFE5F3RmsJZJUvTuMbx4uxajBeqW3XfsWMxPUDRXMUBmAMebww7UNSkEK8CahkVDUZnetTCahCXb36",
  "key34": "2rMoNMrbXcSRGmv6TzPq9rTT7oRbLh6D494wm6QnTaKuPijNM8FnpzSzGjq1M9DDNESJRH3RTSYc7UX8SyRzhuvy",
  "key35": "5usRUsxhFX2e9vtmJuMVDz6e7p86HPnVTvU62ydthwGCqmZ2sNu7Lbsu3K4ZEpk8VZG5PGNLEqQLEe7TD4BhSnN3",
  "key36": "5d9TvW67tnthBmhz16i9hprLh4ozPN9CMg8qkfDESugUWWZjRCmDRicwwZRuVw366FfNKaH6W8gL6iVJB3fS3k3U",
  "key37": "61ruZsBsbnkqZgq7T5or86UuzUQEFx59RHR2bj8DVK2pZKtZ7CBPqXMkUJM3qD8JiPKsqqdcGp7SqFe6UDCxBTFn",
  "key38": "58g93xw63qUpaaGP1uZC47YiihXB7DwDrr5gB7sRyycwn2JzYsFSBdNWnrQp27F1LPz7bP7bxFogj69Bx4k7GXC6",
  "key39": "HWqerLH1kYcUGQhdNjLgKWoQ65kmEKvqtPCKYxvkxC2FcKBHUJ7G5RyRPNuAb7HWrS7cwBtbgVeu8nwLibjogEC",
  "key40": "3JJfc12q8xb7SQsYdwp7WJ2j9BKydmMQuBijZEWNFz7RtxqBr69CzbzSkvCcsevRPNUftNGqPa8weiePLFoTR23b",
  "key41": "27PwK49UVtZAT5Wr3Yjg8NyxUyu8RwbALewmjVQuz6z5UycZ4MnqXbALUNJfdykJSqgqQ8M8V1nic58xXAqntYS2",
  "key42": "4H4Neh852W3SwBVxncEdLz69uXExH4xpNbXxTHr5GNT8uexYfGHqwpmLANA2rv5iJF6ANrLXaGXkxGJEDpcEnmdM",
  "key43": "E3ayNUHaBAdKB59ecoHAFUTgezUB6yowj9ydivc8x6s8H4peoFvdoEV414iwG2q79FxMWQrnt4uTRetCXx15ouJ"
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
