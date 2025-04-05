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
    "3Sc4x1kE3hqcphjYz3BYwPWM3vEt12VvT8eeRGNM1UCCeUNFXoggDzE6zHQtwE37g7Bb8PLFsU89QEU5ajqkc9Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ro5Jzf15VuXpsESGVcPVLPuug4NHcwM853CUNxZc834koPWd5WqWbUNtBetshhAD1JVGRkjNEykVKkatpArPrqZ",
  "key1": "51w6YXkjS3WBJCuVdXHhNVC4aPJ6EgvhWkmagCENmxfBjocRh4upi5GkR9VTHWH1combTsY9hWmAgYDwkPDhHAsg",
  "key2": "44NthentDSpRjd5JxmEDE8RYBz2rm3bJFdGczW1K1QcaqHJE5CnbgCgG56fpeTcmXhz1h51XCgAjVLBicjwB1g1q",
  "key3": "hHMYrLytnNArnqvSvxhkD5nKX6AQkG9GwA6gbH7n8ykEj4phbRA6TkovY2nqjBCxHWRuGhXrm2yscGTQK6JMTgT",
  "key4": "4T8ryvP83rXcTUBFRv8dszfv887keQ8WDjzNHNiQqmMKh6WxQ9oYzm5SSL4rwFzL4SAesjJPU2DBwYDtzihEUs4w",
  "key5": "5iuNnXejVPtdHpbDqKcWWvPqLr867UKjLcC4VmtTi3EJr1X6V4BHyY6vbFwRfkawF391aQzMsQTqofjzhJ7fFmhb",
  "key6": "4h2oR9ra42ej9SZQ56Cq8UC1EM5j7c57zhDg5ZxFW33t5oQiCcmnKmLeZQdpk2KLSEDFB4SbimgQqnYVwL4sZw7b",
  "key7": "3xEbhdL94GYcJpGZf9Z8jdkEV4c8BmQWp9s5wEMgkVygPkMq6cn7noSNtQ1afAUWZdW8yu44iti2zTnt5JP6PFcx",
  "key8": "2DgjqJiTD7dd5XpPwYiKSRYGYGasKKeRCD1YP5NJzd6jLMZuqdmhuj3xPRQBzND9rhTZNcwPqodWDU2eitZpuno2",
  "key9": "2BSYnKDbEm7HhPfyeMsXZxmHxtr7ZxgQX6aLivVKXvXwPFCtwBqTcGio6z9MQniTgu7jdttvwE9VCGGgv88fmj15",
  "key10": "9JkR68zNNp9gDviUrR3aBa1ArNvtTixCLtZvNNYWBjjj1pDmLt9ZCgg2tqAjhHe1mKL8bJaH2J9kuUu6L97xPL6",
  "key11": "4g4rn9VkgyGYLonB484gp4JfH8krMvJCBSpuZ8xV2e8DvsRStrjmahRRTu7VAF8zZiiSF4ivErCtHzuqYnsLad3B",
  "key12": "3V3yRUGUgNhWRNVd9f6nu97heaPsoV7E6kQNJbBundVALGbYyYwNw8aM9thPGMA3AzPbJ4bX42c9yG3AvzqRiDbe",
  "key13": "3BvHNJcVzJ3hja9pFm1JBwmjKAT5CowGLXtmJShZz9QXTFS8np3gcWg83af5BkHEh3DvkNnewRdvobkyVyuziDxY",
  "key14": "3FseJyxPjjeefcFGCi2XSiK2LrnMpmC3oNNKRW1tbkbejCkibvC5SVRbPRnaJbnHK7DJYZ2aR5hK1HxFo8rTpW2C",
  "key15": "4HQeVLYHPkbchiQmzW6ApAhSJpqCvJmDftNPBEGY62BJPNRaf2q3HMUhJqMuX3v8sEShFxcrNznia3tgkJS1Zkxx",
  "key16": "4GWraS2vov5LCAgBzVhpZsnVMBLx6hPqLw6pwHwAhL3WGADA24bdt9voWTspecFhb1R7EptT6PHM2tKTL4F5CMj9",
  "key17": "GgkibkAeEGja4b7MTLnmPdZGAvsxWmtFZD31sbo2FEmH72ctaFhhye8F18877rmHZrtRFZBr5tp5P1ZaCYUnski",
  "key18": "35UJuTquRD8rUcucZCoJz6K2SMyxhSHXnFsghvnyChhJHHY8uTdgwn8x1LDveNAita9TYhvowJXQGNjpjc8SNH87",
  "key19": "5F2rQHWaYyE6Q7CiWsyBi6BYed8rvH1chNwozj9Q7vT8XVDUCyUdtYgAPaXw3fJFm5MwqMdqZ53QETaW3SZ8Midi",
  "key20": "3hqKNEXKTTQAncuPxkYjKVDH13fs8bzjxmzn1JdrxrTsmydhzABfAgu4c8njxW6WZ11hgaY2PfGvnJNJjkktysik",
  "key21": "3eFm43eE31A7YNkyr5qMZkwxducUAEyiNE1UwYaGwdG1Yx8U5tWXpPLo73e6WiBG7LDcivBkxhqe2AuDWiMvvUPF",
  "key22": "26VSbp96pAsbdFoUZphMaSmRjLZWTQv9F3LDpm7sH4cQZg5rAZiKtxzV9Yb5Tzwm2jeN2myVsWDF735pBX6caDrh",
  "key23": "4tL3mBXb2Hx1sCv51ZxZQorL3pK4YWPCik4euDD7WqFwW7s43Hbpeg3mLebnCkW3aXLVaD1qenDxNCV1FaqaP6ED",
  "key24": "4d1ndtxCsCSrvTysvAt1VGdX2odm3HnsMqtEXM89F356YB4pRXuGP8Zy6JKhKsfctUekzK3MnKdU2WPiDBedo6qT",
  "key25": "5ZMALm4wY2uFxkQyLNm8Qmi5YwkGKuSZAiY8mndodBRWJEYXPxP7bXoLC28m6bLThaYgBbc6q83aCkhbPrfhTV6v",
  "key26": "5q5ruHhBsisfnrTwiMM3JTpn5y6mm7d3n6nCW145d4dcE42XRWag87HzrTSaMdEu59mYeQbLFkHfUjMawsAzNC6H",
  "key27": "51QTj5FJjuFf1mAsGtH4fSNTeX6erySjoLv4gVPDvNXiSB7NvAvg35GZYkL8PqfPSr5KvM9MrSpDyotYYVjw8WHy",
  "key28": "JRqX2ELtUK4eCMXBxkdTN6CMLizHRffGCKEJrxyBCi2LJBJ2XhoHcD2mPRDizG8q9i6cs6RRDSRpErmhGpk28rh",
  "key29": "3WPfAyKaKjas41tRg4yueZ7gPfD8UsXRniaeM8u186uS69vLYCdTn547feN6s1Qs4kzKLKJmo4949uJ6u9wJFp4o",
  "key30": "2NypXSbFdySqFU2xCbkLdmU1N2qBydCvcSvumUY8oMx8eJBsZuwf2K12GD2QQHjFBxqguTsRu5bQJ8iUrtWfXRUs",
  "key31": "ibUsCBzEz6AeLgyNkG3u9tngEApsr9J4y16WLx8n2RymxwrLKa2vgzEvAJAB44zHBPNZ6TQjB3m98LsL1BpXKrY",
  "key32": "4ratxbhzd5eEj5uWsZC5wxEjHU8Dx2wwgn4devDn21ocgmGtE1Tb4iGf2cArz2U4RwoWTEMiYA9XsbmEmZSA4JLG"
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
