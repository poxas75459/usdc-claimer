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
    "4UTjYuyngDw6VF12cN9sXPR2PNB3G71LEc1W7pUBRby5foaByjGCqwqkv6nB2KkMGi2u2WrVQXs5XAksNBvPpRab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7nyS7GjdXXp5DqUGxJupmG8mQpyXWA2zWFA7DZCpE3nqiRdm8mBhAeszFTtaLJgtZoiEC5w9vQeSez4oUZyH1j",
  "key1": "5UbkfyxdKTX8eq2etmvAAPBmKgsRsuky9dXieDkVRViZFAbZFtgLK9dWAhYSjXkKfsG5CK4NoHx5MDRpMPUAe2P2",
  "key2": "5Z1xMz2zUx4FipXhWHjt1pjFFfy1DfbJhnWSeQRPgpodStA9oJnVt5rbZPZCnNEEC8TgXWcX58SStvhR2Jmjaj6L",
  "key3": "5KFPRsC9GJ1PBfuZLDTahriHyi9SdJa1xxU1sygFvXk4BSnJWi9fGMyZKaa68mAzZqgSXBGqwUsAv1sekwFFwWMs",
  "key4": "5cER2LwwVTVmdDPbHsD7HmHqJvtk1KZpnJyVhGJkqGwG7z2xWpDqYcbZNXdD42pBudaaefHcTG7ygSJGnK8Wz3pF",
  "key5": "2v5WTMEoBwSwwmjDxdD5Gmbgo4i2fLsPASSjPdkx3GXWJXbFcfC3shFTxFEyKXTZLWH5vxn5hTSNAhZEYWFQV9xu",
  "key6": "46aGG1gb8ub6iaXpMwXLfhUSZEEzujUsY79HVdzMyK2GADMjVUYHkWrLjrcNJQCmu2oe28DyVKyMmxN5g5UjL6Dw",
  "key7": "4uRS1P5mr8KqgAzex4Rh6jPXLjcQgdbYtdaYCpNtrZYL89AaL5jsmHEwcYFtEru6BmbgutyunCXUHTCX64cmLjwi",
  "key8": "4BKXweAoP76E4eoRRXFxwVnrSnNtAgRaSHeRFA1RrYvpnr7HVrMX3nSD9PuZK7j2nPaTwBsYdrx6rEWjZuw88sJw",
  "key9": "3LV9FjwkizCvfgPNyvGXbQkYdRhRYZgxqbU3X9MhPTJoSY41qL835gT9TB2qrpnTsZcZxY1SgX4vkFXAS9xnvTRp",
  "key10": "5FBMuN9UoRVnuirx3DRFaBDd614A4T16JfAHsJvXEd2ZkYb9QfVdSAiZNtFqUQMqRrDfs9M4EPaSMYPsHxZaKK7s",
  "key11": "2X9eGTh8LkVBZk9EPeo8J2awYF14tAtK5Vs6cTUXGbZHGCXVRnHwpfZXocdNj2xyg3xs3cLBqCqLhoto1vqXdudF",
  "key12": "3KxKnbugBQUFQG5h6riJmkt7vfZ7rMRDEWyuKWZ2HqW94kCbud9LHXH3nFjQHid5tR1XmSjN1gpaNGigt3aa32UN",
  "key13": "3zU3NNC7FAVrNR2x2K9tXcHjnDmdC4nRKkA2siWUKAdZDUB2jQFWDFzTfKLhRNin5HT1uWRf79y6tDmMqww3zjT4",
  "key14": "58Nv4B3y4Yriu1uGmDr357ue6MSCJnk1MuroUw7rU4ko4SXR8fgAb5NpBCnw85YNSFbRWXeDq7VXeLejeSacSZfz",
  "key15": "4hWWZCEsnKNs6aymgABZt4Fq4QdEchtGe7xQ3o4qjVNXzBk4TCUurktCoxpQ5ukP3NTJuUpwLuVwBARMTKbWTAxS",
  "key16": "3R2E6txvbpQzSsBxsWriUPQm48dz6mb1G5SYDAY8aobZXUp7cvNQpmLYLF4TuAoo4QnkuGT1WNUdRrXJoA5MChSu",
  "key17": "ibjwMwyG31dqX9kSJK3ADpX2zUAbbfLsDKMUcYQMJ2ukx23mroBbNEbo8tmXmj56AwrSBT8wVo85uf3JaudfiKz",
  "key18": "3Kq1eU7t1iQN6RPQXn66SVWe6ySZugNN28CoUKL8VdoSRkFjJW8nRQWduvG6DnDZDcmbWYhYety8UdwMsSPuv1Vv",
  "key19": "2y1CNAXuy1923oqPxkQa6cVt2Kt9iC5DxmxmiwsvVkWaGN7xbvQ3Wz9ETRt2dwcEoAkN6zPtGyGZqSr68Vkmc52E",
  "key20": "3dBh66DvbJ7epSkKwvemWpqAVrwpaUmnmeY671EYYABFDiRkdF8PfrfU2RJgnmPkdizgAp82YssgNuMTfxU2jRes",
  "key21": "3cXkKAQPusLnGFxn6oJ5NkQogdSnxvCEFXQVfZqNudi9H2WrjA72T4ZYqLjTp3CMEocFT4SoBXpSmXE3VR9XJGRv",
  "key22": "5RCfGd3mo1KKhKobicYyPtAVWaJhSZwyHn1vAY4ab27vfzVS6WNwUexEAQ4yWoUssVAb3tEDENqtJBZtwwBVNnZP",
  "key23": "5AbxgBdVwMb6DyQxuCkuFMpAQ7BsddqTpesq5HyWDoY5JZcEktLvun9dmWqZNari3SZ52Hq5Jy8Ver4MfmoAtNNQ",
  "key24": "5Ct5aWQVaP5mnG1vxipUtm5Q9EPw3RYL1KDV3HstE1DjXRDWcBNSLPsTeLBy9tjgT149CvEADH82rr5wfVZxYC61",
  "key25": "8F89zwbbsBPJsqyU2gGoLNxmTbyUDzsCBQ6SAYGxtzhWnETiymeyinsjmCanyKgKvcF5TAeY4RXNc4tpmAvGuFG",
  "key26": "4mW3mawXpnKB4VqDdY7af4n9D3MwXBmphKjpKWBGBq1UuunaNC9HEZDCoXmFz5Pokmug1c5iiRKoU8mUzmLq8LJB",
  "key27": "452qTd332ija3ogUHF6znwKzP7KdBXuKeZJWy1eDqwurdMv9AvK3v6Wsg6Hbv8fxSoUZqFLSZnzLgBzSMcKtsqLT",
  "key28": "4NXB98djVanG2ZV98USPFTzpvNu49kr1CzRaF5uWKp9Chy3896qXhrXP533zijBW3DpVaFoyqAd3kPyt4K2Ped9Z",
  "key29": "2iqHJFmgnJEmeW94L5HnLfVhzRVu7Wc63xGWL1oGTpg3N8DWmDK4PnAZVxJbgMvxQdRwppKZPjtFeauGNcH8kuM2",
  "key30": "4eF3WDWJjf9ZuYNuqJKeC4XrXZAuTevD3KoVGWK7xwbTczRaiNVxE1zVr9HKzfoSZyUbRZFbTv59BHnWAdGyU3Gn",
  "key31": "4BsDfdcbEyxTQYQEdNCPrPieQ2DN821JhfKxZLQKuowhaBnFuZjfXw8VwdHWtKv1MYqrJTK3u1sSUY1jLHTQzuJt",
  "key32": "23tjdLWjEbpxvE7hMXXrjjGLbd8WtqqaiJDGSxzaoNiz7hLHJ1KfvjQUmDnL26odNr4f6Rrjom6n4hjpQ8kUhRGx",
  "key33": "4p5Yi7PD2M2SZNFsZUnhuax8taQ7mhiDYzy7na4d8p2fpm4dEki8UAGaHxEzVwUKGkMHKmrh7fUoQuDu8h74T6Yf"
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
