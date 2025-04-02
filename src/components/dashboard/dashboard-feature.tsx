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
    "2j2qzVozDPJkujte46e4ds1m2nX7C1VKqK7pAFeWPcCwhKg4ytrW58Xg1GPW2kuxG4Zc88BcwsCt6r1s8xa3ZXCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUtbdNLu2fc96BcqMyyUboriuqgEaqW36sjmKb69g1Y2Zb6DsiJp1K1zejnG4edjWnWYqfdcTwJMSBRjMg9ZWGf",
  "key1": "66Mmf9sv5EgSdid2vZEn7GGLdR37bHj9QP3WhmFdqT5KgsvsPPTKif733JvLfG79WyWgCSca7uBinUvfV3GPBM3A",
  "key2": "5tJYsTHaaobH3s9DV9bcCtAEQE4PT9FhbP12Wm4rPPfZUwkv523u9S1ANWXWmGTS4vjSQKco7LqQwnzMTJ3RjPcM",
  "key3": "2VkuyRbFXbmFDKWdCM8LXNpL4WbwKqW1sz8s5776fNjzY6f9NjBrMLnumxFGQhUV89rB5dUybHHJxNmQSw9EMGco",
  "key4": "fU1iDZuw5CiLZyyV1ZwuhNEdsoNgdK6idUSZNBiQhZF7EgZwVXBjbjiNWxEyi11uu4EAA86Jdsmsux9Bq3FC4bW",
  "key5": "DZqyHySTum9takRTU8sHFbyfyupAFENYy83Cyy6ViYQReJRKUKWfw4WTVHqUJ3wz5MSSEKF5o591eVywE4Y6qBb",
  "key6": "4toUDjmyub1YRZuEdJZzNCjxr3kRm1CrDW7upfwgue9EhTxNwN2fAe5x64uCdVrAewaucFoAE4SKQrKEzxv2fJCZ",
  "key7": "rntUAffKT4ELs5gM34j92hXRYpGtqgbgEZofwEQgpGrrtMiXkpNHBNqq4rbkuwjq7QviBUDnjdxvrHbf5Y4hcuv",
  "key8": "65xuLFMUYVLXX3qZSTT9aStfQTLrQF11acHriwcMhcyQ3KmLbW6JA6Q6gYqjGKahGSBgPs8far4DwzshX4CwmJnj",
  "key9": "3jDNQrFqj5XEKd2g1WojD9j3dTqvFujidcS8Y7FzeQHamRASEUhP184WQfbGhetHdDfp1Ksg5dv7g9hQBghJ2rXj",
  "key10": "3MPyHXtCkAZh9iMsmCvu444a2ro8M3gVEtEyZq9cE8npyfp8RJ5H7HjeBHcvSeEhtLFNisb7EAwZsBFjCuFpeT2T",
  "key11": "KWrmB33ta5H2AF3hCAzdPAkYLTKigfH2B5qDZN9swopBHX5TCB16sADTyx1UYYUvNzhBYYfdABbgbfLs22ycaBZ",
  "key12": "4hm8Jke3867UkHCBtYcKDEbyuCoWWrDZcypyftdrEjpbrND1QEaVvGdm2oZdjVyvjp8Nxnwz85KbFvYXNseu3K3S",
  "key13": "4J9DtfoJgsUv8DZoA5bGHtZCJAdJ8KA7LFaCZEejNrmq2b6c2ib8n619nssq7X2QCbMvZdRB3BDQQzHBYe8kHSV8",
  "key14": "2FjG87AvqqZHPRxykDRTqx8Cg4UUHMiVLkAR8NLpD3DiF2Zs4iy6oZF6w1JELFG3JGfubEFnDNRtcsPSySDnomKr",
  "key15": "2aq7g4itTLxEYeRpKdBFAp8gFtya2BM1jfsa4ik7mTnya1dvCzbfVJ6yfVCpYf6Wg4wpvfqwzfEHMTzpn1RHZi7T",
  "key16": "5EvdcBiNJPZRaXFN4C3mUXxuB2h29CdNxuULYJcLvn8XjVZzn9W5hz3wTZRdN7eDPxCYKD3cAfWy5tymttpY8fxW",
  "key17": "4Fw3Ji6owfG7Zp183j5DPfQTQx54BR2g6PBK3FQfq7eT9JgmPLky7W9EEQidGTfxvESS5srzyu4ZxHJ9kGDin1sr",
  "key18": "hH9kkmx7eDauzHeLcGjt7qN8zP1P4yPyT1dXp5wbfdDRm1N7TFEYYaQ89Y8BE5cvMkvmeeqgStD6MRRzHRF7Vuh",
  "key19": "2BZc9MGaKyGR5KU8t8HfuC73BLVDVYrwEkyVDBfE4XmXHRnhdfVZhkZHiHREAMn55CdTRjM9ksTjCRwN7qtPQWz2",
  "key20": "5jQjoufe8d6kND9utHGyUmrsAewRA2rWGFi43R2F5XcBjSZp179isbapex6j3ci4kLNjhZV3sbp3H9t2nSvUAmL",
  "key21": "5KZpYvC6sLYE6Cpg2b7qJtWCzomp55jxncob2AQXJsUtZs7xspWiN3Sma1eeYjntbm3pjov4K9iY4TfMyX9dY9Yq",
  "key22": "56c9LNg3rJHyL1GffPTiybo66EDKxQtFwdTh38reSfU3TWYrSKEHwFDWA2ozodFDLjuHqEbNexAdMpvqVansNKo3",
  "key23": "4ZGhiraTZD3pX767CAydfkhtHRBjzth4WxSBT8136gQfzztzfmes4vPiRXtBkbPEvjT3kbvmC4yACif3LMyFbQCy",
  "key24": "4C59KsyDGKr5148EhKd3Ty1WsTsMJ51ZEakwk7rYTLEdqbjHFZN68zhve9bpCy5ed9BSVRnUJKv5wyBDDraoZWu3",
  "key25": "VCLAsknWLXdHpQNGvUKzvmeFQmLJ72rsYHQG4Xeb6XUw2MhaXrRrrcqqnE1nPAgz1bi9QgFrcPacbNhQrrUmuC2",
  "key26": "5eCckwgMrEuewwBtR15uTWPnaenueZiuQPcL3aNtb9sDW7ekuf1Y4krLXVomZ3vn7NZVv98sHzC1WHS9aBT32hHK",
  "key27": "3UaDkQ3UJ7uod1XVmxnQZcwLRNrCDtihjyAhHBVLESiKec3VoVdSY8cGc9odDxeScV1QMFe6Q6eaxmYFj3goFkFt",
  "key28": "35z5GNujdMCxhUiz61DcM5JfUtzXMAgbFdLAPiuaARXUFceRHDuP5YkAdtnB6hQ9wmYpj2Jp7hMbfHWnPPGkoP8k",
  "key29": "4rB3V5KnGxWELRWn9wxgss8Nxtfj44WhqiHjAvHadiM7LszcUVvrpaJN8RTsfPjKKikq9Pw8xSVB32ZKG6QYmFfW",
  "key30": "4xMx8txQTSPtqKCcGYYvrzNeC983mcdqUTN7rjhTM4uXjTo7S8tQ41hMFm99x95kJveVYMoAj3jKfLEYVMaWmKzY",
  "key31": "kRm3SudL3ddaKYpLdKKgA36miHd3Y2HMxisKBKkNLDcGkY5YgsFPN2NyQjBggLpzGLcma9pPdPaYnoBC5od7VGg"
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
