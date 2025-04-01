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
    "27AQn5Dnu69GEM1ahu57Tfgo9xuY4etHAZH5XAz6QChMcVdm34dRS77RxqeZEELtcqi2kRACvpu4DbhcAdhSx4k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRA5LJg8eRugTkeTpZEDkyQNm2Tg6phZ6m22kD5m6qdjyQWRfY5VoU3eHFDh7L52tE6moNKt8PBoRhLaaBAoYkS",
  "key1": "9LLsRwpbw6tcgZK6ACGzvGHxnhNHxNLdryJ6PM91QP9weCiSy9LfWzGcCG63NFKsxT6J3R6dnrhGBtKj24vRQTH",
  "key2": "JjeuzB9TYBtLk5X82uJ9UpT1hbCuA7AELVxNd1iPuNehzjJU58xXj2vwG8zaYSjn2gKpxRm6E49hP7gv5z8LAKi",
  "key3": "4Nc52jgspfm5tH8sdMPQmM4KqjhM3w4DQpPDBD86qoqe4uFrDLoeB2YRokSyZEFZkgLZdT4XHKnJa27cvYsHvSVU",
  "key4": "5SHDYoYnhBsUmUDtuKekWMJtYYpY3PUKYJDqJCb9xFMxuLpJRLUjRqhZVAwMJ8eqJX7Dn9iE9p4GVnt3sFuYDArD",
  "key5": "4WvXn9vCXMRS8hJh9XncKA4Ysir2ik6AdebGRBHcVEQ4JMMHGqpqinuPdcTTFf5xjo8oePCwhLTQu9g74NsfzH8n",
  "key6": "41Bt877DwLpFTafAcHzKoEwiUhbNjF4jAKxUymzGG4AYS14bow9qwhUztUm5VJLALpyHR9upNTCtEchHptGDfSQ",
  "key7": "4f6vhEkciR8sk8EKjc6Ete7sNRCLrzfwdQuq94i1oLFCU1RC16kak3Wg3eXD85kXu6sE2G7QHfZD9HnHRDEgoc4i",
  "key8": "4x77AhqKyjB2C3URkbvg7TYvsjr78DQ3oQ6D4g3mapZExrgHaZUEsL5obZ4bYgnUtnok3ku8iMSCvXwXoxdSZDwk",
  "key9": "5C81aoHEZQnVDmgvx3CzW232fzGTswjom812e287zvWwKvcMh2obSDxkxMurwebLPW9Eh92Dp5DhJZx8jNPMP7zp",
  "key10": "3EQxLXtk88uXLmewqRY7MJ5y6dTNfTX9T9PpdD7VutHHA1zEQ1FrxpZVarsXFzEn7KncJUjRxTQYc4QanUpW96xH",
  "key11": "3VFE3Z5LyXspVbSP63448EJMVZjWNJtum9Ae8G1gChVnNhojwpW8qoTGKjeKCCGUPBS5bGWqFGtQtQzdeVM2amXX",
  "key12": "2cpwoQcGPJCT4bvcYQfDCxkhDvmq5uG9heCq1N7S669GC8uifX95NihTzd29cde3XgDUs8DsvUsgneu6uYHeNHWa",
  "key13": "4cHb4LEg9yrnrnCh7KUCaRS2TWs1xCBceEYHdYbmbkfsCvwvD6ukw45UQVi1PSxYQAHCqVwhbyHy3kF8vSpy91aW",
  "key14": "21gg4c43PYXBK3DYfyANjU8SWEjQr4nEEgufdE17VQbmbrgepiqFbZYHx7xqeC52Bq1wZE74iYgiVk9LWvCmfJWb",
  "key15": "3YaupbeizuqC7SewaPNFoo3K6d9eHhpodw6Z6MjTwY7U1xqQL8HNJSpXMSSBbUNHBi28kK6zBb1y5VnsvngoYFnS",
  "key16": "5CfTarMcKzvL3EmApexqYhZpV92PV41V89bk4TXrif7HWtL4egrUrimgXZvoSAWrngW95w1pCALseqqkJzjp2qJo",
  "key17": "RRMKvQWtBN4cbKV8DiKr1miXRnbVXnCZQRRmBo3Ei2K74QNQYgkBrKG29JdiXGjCjUxaW6m6m5Sq7YPWxrRHso3",
  "key18": "4YXNvZLTHUJK7RMgPwEn7xxkEY48f3xMXZCMhghq9KNMJG3V2Scr65WvsdcJVtghefGeiuXmPsa2EwaxJVKeShuS",
  "key19": "4Ba7sdbmK1NzAqC9QgVzNszHYppQj5QKwR97RqogDfMNLnbCdwJKRGVDZvKcNv3MmqTuLYoE7faonqu9gz1CGxGD",
  "key20": "66uiXg4i3JjhDe4qGxYPrJCxLPeg8ULaxMMQuoDDeniDZrtQ1aRBSqaopBLzn6CTHsoGeN7vRyjhNLzJY9dPsYeQ",
  "key21": "iWcggz5E4iPnVZRDL5yV8jtLBuzT45U7fR51tYcmUuDyrF622auBqvf89Nt17tpTyxjjA7NZGCs1yufiqUpbYyT",
  "key22": "4CK5QriazmQTEHtseZF5roBSyPZ2wXJTiDju1G9UyzNq7NseP3UpaD3ZsaaR1VCkRfJF8vPYZ9DNHP8PEGbioKjD",
  "key23": "25Kk5aafDBPUfcwb7DHZN1bPneVAGXZtXYGcs7m7bjx8xP626YxnaoiDDJZ4HcS6fniJoHCVsmWeeMttYPQpY9Vq",
  "key24": "MPzJV7yecRs82SeYgqrTsatmQAC39gEzH2mWmpjGoyZZpictS7mCn9RGpktTGZdFQFtuBwbG88jnJQf3swHcoM1"
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
