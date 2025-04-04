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
    "CFsced2PwH1TcZZnKVcRxFwzd3NLCcaFni84Hbjof38EBJqF8nnEpE5nHtGttpDFMh663HKGGgbWR3EuLwfWgh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574NWrkDJfZuBTNhQhLLjQh46xMnpBG35wQuefwaYN9NZxoc9wPA1vssG4cdZpyE1PQkyBrTjCNeNaYQEGvs68PZ",
  "key1": "4xU9NTJKcC9t9Xfv4Zsjr1QTBDPoR29ckFrxqEqoigJKbUPftxyMQcb3xwHRFKVXCf9e5mgnpHcCZ6UMCeicnJrC",
  "key2": "4KhSKRuvzhRn1uk2WufuUabXZ4cudDvTYgJb8CdFn47U6ZmoTr7hHZhdyWyh7GEyj4DK8UZeqkQL88TF1hVUMVen",
  "key3": "46wSQBLjKwcRT6Rvie1ji6e3An7bEmWjvdqZmVPvSnARMvqLok1cd5RRyeiy4LVnYLAVitrZU2fbNxbauDsyPwW7",
  "key4": "5syvVy5P4Ngh1pXQPS2qVTfDrU7VRGmYVvRqV9Z6pR2vqfwX41UZbVMKkZs7h3vqUvErxKYmLUPdSdvjU6BcN8yU",
  "key5": "3PanTnVpjMcdS27UKZ3HrzeoC5s3m1AntyQ98Lwp5QZ3n9Yd67tJUWHxgmCbk21jsb8Siq5SGJCqmQdBtPfPSAhd",
  "key6": "37fLNcaLrUmcuQ2bJCsxpmJrsSG1jcGePAacWSTLJpqwy8SHNMZnJ4U7oMLq4unMSHnk4qjMH29coEzGP1gi9ah5",
  "key7": "4uKddvvQDk6k8JHDjnY3XmPLtSGxLNDSUAWEKEPQeAFeYLewijC9HLcLeprwYYqmgtPNdMBNkyikXPiQyGhDhMuW",
  "key8": "5HyjBNmS3GaNZkHmo1ZgSygzgHetAz4eNWEdwEHUfDysx2oRCiwwW4nXAmMPNAPFDM1UqaWRSZL8TcFJDMNPagJ3",
  "key9": "4mwniB6nBqcyFtHKXgKPic8yDLmR1i77LawrrkoLBfhRGcFRw5mjdfXznBXE9VsWh1Bx4FkZTMyGTTZVoVCQ738X",
  "key10": "4cW77HGrFoyuDJDMjs9jP7oh44rpAtQe5YFdpgcfqQowYk58jC4KPZnH1piK3u9r6qebeKnof1eXryk23AEPqBX8",
  "key11": "45xuNMMMJ6nNWm6f4LgZXUYkygubXvJBnRyJ9zcsWouw9whDwoetEYAC99ttP9yra5ozeffJ4zo1g7em9bMzRaKq",
  "key12": "3st1YbUybWm9paQLncKssVK9YFKw3WrhibXmCmjLUHAusxXRkSLdCAkX93XXfMwc5cBWChtWSw99WmoCaWRreoET",
  "key13": "4jP69webzTE9xURW2Gd82WtkseRVRTA6GBCzC5MGZEYkoFhnCvTDk5ATnxpN87Fke4vKep7sVA8udAJUxdkuwbnj",
  "key14": "46wjdLebSo8m6iG3RfK1bumGBDfiW6SgfBZCKhBHXTg3PQ3uNkv4tzkChpcSiShGfyohR19gVhM92FZWjZQeo1gm",
  "key15": "35TosYjn5WiTNjzRkcq7w78bmNihdpMsFceAUJXBCvYwsFMGbfxo6W3cXbXsWD9F56PeS4kKeajvLNqkgrZE3HWF",
  "key16": "2Q6VQewotrXhRBjaVconiiRNM6CHKsws72xYT9GdeBc3NJgKK8Z96aewmGuQK1yzhYcCmXLxr9Dk7KqutWcrDrwi",
  "key17": "46v7kc5ADhBkmtFbDFD7XFGRjN1oTSdem9xmcfQQM12tjyAW74MehKdN3E2CszZBYPXEKoynndtSsxpuBYthJkFX",
  "key18": "3QQEK1gk8H5RiPjCzVBHtadpj4PxbpZEGnVVF9gweFEUgmFBgAKhtNTRApN6V2te4QnY3XsMAiHwVRaRnZLUHmJJ",
  "key19": "2kwAsuSCGcm7FQgBvcBo9mbXuzLgKaJtxkzkQ5d2wNQiXCMXUQBjQL5pTgCWwWyUJJJnVka9Kxe4crtoSoNVMEyh",
  "key20": "2XmQvgptGe6cN9wFD5jarYkkEFCv7uPot3ihvVVZhcXrdoycJhe3QoSRBqDsdZj6mNHV33qWN5WbQAE8xqCoGP9e",
  "key21": "FzFYV6EpEsg5PfVmSn3d9zq8JwDApAiVCdgqPdxSLMpPyRGzuoPceuQW8MhQAG8z7hhN7q5N1c7TZMjH4JRG8fi",
  "key22": "3iwXHyhscSQm5zXpHN4AEJifgrikVtW7pe7HxLyBHfsYFYkTiBXvtGRipkDft2WsBE3tutY9rB7omdv9duvQjicR",
  "key23": "3Yo23MzweGL2sFmPKGgR6Jq7zHrfxDB7QLi451mKQEXChpupYyZeAHqdrYoSVCf4XUw9Vfs1UANGFyrekAg6oAZZ",
  "key24": "XqEeJtjpSpHMawBcLvAyLa5mgWH4NZ9PAptqmVfVr32H2Km6Ww5n4zb4SYtbRM13wSfNHTyadSCeJJxajAp3RJA",
  "key25": "61fDT8SCVE4Yp55WUwfkXXWiKvnLoarxZaFAN7ChiWFWdq5utFaxmx84aLLscTajzbgQfSoPxPkQQUCrfXA87a7D",
  "key26": "2S8BqhDjm11mUCXvhYFpFvsqfcKNT4ve6juTeJdyRryfFY35nznTQWopXw8LqxkexQBHXQnCBvKdAfSfaRfLq6yX",
  "key27": "4PFsf4y7YJfMvJqfDS2Fagh6CS3WBFciy6Kp9qff6KTQXj4FkfLTf5vWZhP1xdUQ55NKwW8wKQauLvQ6QgJML2qE",
  "key28": "Yzqby86FLMyvsKfUKQW7fofMe2CofiMP9fbfxEGm4EyaLeRAJx48G1eEvyHuR5o1NeV3Zg1Fu5567e38U3byjju",
  "key29": "3oRjjx8AQyDKVUX1XS4qkiLNZzBtxDmHXjLF5ZesKdZvRKYEyauowEMdcMkCNV3ELcLYVH2S4kFmbjuzeBHm3DC9",
  "key30": "459B4x8JKcSKVRcmsk6hLp25w3PEZgJ3XMXgkqr4DchyKt8jDfMotUJXhbcqwHMQU4Tkd855UZ9iPNunEJLP5AZd",
  "key31": "456Yh4wkTRn5jauCwMLDjAUrVxRU5JZ7BZZbSuDVQsJsLTNia2qTUmtKFEjf4HybXVwnh8GFpFYur5365QsHhWad",
  "key32": "q83EbNKzEi1Ti6BwcxS1nR9DWYXwG1WLr3Ruj5t5f1mLkH6d27qdXNywzoFazRc7ndA8gCmx1hXiFA2tUSkFakH",
  "key33": "32rZnQnVjCbeHk1ssoVBF6QxtxbjNnmR3gCy16fDMezmsYYywVWyyYibHbNq1bJcrN2D69jMvTCkcszMt3yq7y2z"
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
