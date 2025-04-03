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
    "3secHDmEY7KpFZ6DBcGHv3aPoXLxHHGj3tkiotT5fZCeo8VbiSsJeAAkwyedvL4bMd7UkZwVeURVJdzzFMDxvPBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv51bxaCwhGSBdHBdTRi5QTmwYkfUih9JUBzMyumbrKYMasBmHqE7YPbgHExrYzqZhUJJKipsgSx8dcAZMv6Pyz",
  "key1": "u6mywxLsaKMmBj2B7V7jGqJzkicWyMi6gApQn9kP9rXXpa54Pf3S23qHAbSaqfniFmL1Ke6Mhw5V7Lga3sQRJAQ",
  "key2": "54NzgcQ98hizS9u4s7dPziQ8WiDWbaZ22oY82bhtzddCwiqMGaT7owxjCVjBXwdquhjtN93iBJdLosnn7M6Xg4e6",
  "key3": "27ACZJq3VzsvmzrNdvoT4Q8TdAS7RvRSuETUJT21U11r1maVN1NLBMj1HjptHwWy4WYuznwkjas5ExZtMQcSvB4u",
  "key4": "5pVbrnYf6R5j6K9pZb2bpGKxjV63E8aznbzoCpH5psj7EJWZxMw8PebgU7CgcSF58Qxf3wezXc8Xxyjhcu76hao3",
  "key5": "5fQF8Hq7YuWJEvcwFR4kyatCYuSCsz5egzTbxoTsM3Fum3wGA2G4U7Lq1gEJKQgqTdPV4pmDCc4w8ALaDFs2bxMR",
  "key6": "5YPnJemYs2LqGfEomXTRwtDtntfo4pjRKypB89BzY9zakBHtVQGtMhBqgmfcLYZtSWgNunepvS7ibPrYMSTLSSEg",
  "key7": "63yHGPTywLfYgG5SXh6uRZRK7ZCkuDxV881ZxFTGyvGVmMKDfUCk2G7weQTTG6D5UdjUuZ4UELJm1AgXt58fAiiC",
  "key8": "FtwSWyVNgpUwDc1DWnim4B1dT2gttZavDVLSyerpatJKaYuM5XVURgJUst7VYzMYyaAkUBbk3qWRGFoWi9AdPjH",
  "key9": "gTzSqBDZ9HT3DrTrT1KcW5myDsF7ahU6QtLaTt4M3HevSTqqjWKYLW4LzMQLSTiSjTCSJKf7fR3kDnArjM1PdqG",
  "key10": "29tsDajF3Qx2JyigGV3Np63rsnoJsNJj5eQPW8YgXoAFMSZUHwpVBYjTB19qknjJweZRDnx7gn8cFi9FhJvnbXCh",
  "key11": "3UeLg1tEnAGDLVCeHjpHv3TcN3Q99ieYunFLZG6foCd8gEkAvgAQVrk4JBFFTXkrCUrmNpdK6L2khbGdcAgCzNB5",
  "key12": "UjXgEzefgtH5yhY6HMFP73PRyj6Po7aeTkH9n4kypjPnP8p7fwbjhMg39knf36xUHyVbupQBGZPo1PeWpiHmhg4",
  "key13": "67YL7di3c2bVYxAxYwRC6EFvWmg667KpCjAXVtGHvrjyR43LxWUdq9cfRfMHPY7AHDPGfHzAR7WxkvT7YmTqPe2F",
  "key14": "53WqZeAsDUSyhikci5Lo2Q6gedazRkNG3NXbhRN1z6hAKrpSigyC7Qj5rcXb1ex1MNht7dq7zJCXj8fudypvA8wL",
  "key15": "4XGeFN127rbmLW4yNTrHACM4x8pMghyEeJeLDp7Gp8SwoC4h5V5rCxmNW6YTEKnF812ksnQuVRWZXqdWpTxdZfRc",
  "key16": "63EHW48m3U5WMxN8Z6fi8uPuRa8QUZEn7dpweHZbLSELk4eZUD783PjRi26aRioN6ksBVbQyGhNZtRHN22R4NY7h",
  "key17": "2q5W4YMKqNsjJPY8Agee2n1mQ6BwZ84ugjQ5c7JSHCD35iB61sWEnQUcTtV99RojYwW6xxR9aGBjJVuNFncRfaQ4",
  "key18": "4uG8ZwLxjKczS1EsQpNStKhaxBcNoUvQHnkxPKGJpCWdg7ake6j5WazHu1JfekaGQZt8pQVFXBGRSNpLiG8Z7Cqt",
  "key19": "5rSDMsxGfaqShLDWt7CUJHdVCVsVmDbDC9GDDw2v1vKXtVVdUkS38YZb7jji2GSLLCKxSQm82pAi74YKmBqbRGtp",
  "key20": "3RoQKDvKrvr1yGK8xjmwZ7UW5wDmdBiXxMdiz6yQYFHG68d8zqqtoFEpr9NpdAK9o7kn6o4mkwwExRoY8Lug1i9w",
  "key21": "62Yq9Rs1uE6HXQuzBbngYzwWqauHVomJrv1kTXQjy1yg3ev3JuSWEMFTKAg9qU2nQT722hWfvXw8Eo3PQ4W7UkSi",
  "key22": "dLcTWZZF3apSWkBKKuoE66B1Q6Lovqx1mxyyNVrJw8U4sSdFA6v1KuBiRkWNFhxccuXvhcABFxdzjmz9oVjVjAg",
  "key23": "kHXy4hsEaSGQ18c7XnMVMJzgWMgkm1ZMs279dB2YwMvWwnk9pQtXjNLDXriUvh6BBCKsbWVFRMj5y1YEQgEYRuS",
  "key24": "64DxiE8LWRggnZN981BuYRrtNx5Swc32ADSveGAgad47o7Mhm3iz9cfLgDKrEFqtdnxNUzqmUiaBrghmdYLWih8h",
  "key25": "pQiMswQBcBy3SbKypXWfMceWGEVpnyJWVjMW7a9gZ3e15Aud8pgwYJWKqtHQQs3Fbrguog7QZcdRg6Bok6PyEM9",
  "key26": "2kJW4VSEXkQS2tii2CEAzQs1mAgcCp2QDVkY6a1v2x6FG1evipNkpFVXWjGkW8QMEFaJVEGYACTb7V8qcjYuj9yD",
  "key27": "4wAp2NVvv9c7KeBhBaY1WwYa4UNSm1WDkmrUAjg3EaD6Nmgm2qdRz4q3r6Hq3pYvEQS3Ay4yAHQLw39vHUo8fe8G",
  "key28": "5NbQK6qHE41B3df4fVoyAS1sZjTuQzS6DAHTLv2AuvJZ6Wne1QpHzRTAcba3P37CEPnjFkzTM3nsBmDCcsyovXhF",
  "key29": "4BPpAUkxiCuUBAC1DLkv5CydGCmHTV8kzJ9joMEvGAwh9cs7ohAJhG6n91CXSpKEa6qTKvuaF35LruuTbCuErGvN",
  "key30": "4LbP6y9MiCov5G6npXb7ZbN33kJQw3quB4mSUkySiTdZh1fi9wmJt59DcyrbMxWJZRUijvp7SC6ZLmr7Bw9Ruh57"
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
