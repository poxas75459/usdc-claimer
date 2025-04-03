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
    "4VvPhzxg8dHDdUn58QGPyo9EX3qtWNaEyV7QuBzFD7JQGqg9y377yi8fuTmYmdmyK8kSC7bU2xndgLPA9KYEiHsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36MGCoRhYUAsnbWRZ94uYBXoGoqBDBmavMANhpAuTU3vt5ckmB5yD3XnqbTvUavwURTWuDbmr3uNz7RpzAR6rSF",
  "key1": "2aqSXzu2nUZTCLvPfKRUURKm6ECpTuboGZ3F8cS3UDpMQM1a117udXbFWuWoi4wTg5kjH7ARnEcMwVtinjMC73F9",
  "key2": "5nttmsCN27YBJat5KKuUWEXaCtUJCgX9RTZmoAadds3q5PkToe78hoxdskEULDEwo9eLBeVpst7F4LXe96gAzCEr",
  "key3": "2SuJQukbiKj6f1dLe9kW9yQRmPjBRtZkZ8BTat3HqGSEjoL6EWFUCZsrpBJkmg25EJ4hYWne9smrPBaZgYfTM68Q",
  "key4": "tMTQPocF3eXcSLEQeekdmL41uHUWJfAkuZzMHnz94e5d53uWKqAA14vgyof4dYkFWHQ8gxWHxs3RVnLFtqmCk2m",
  "key5": "4xGrEiDtaS3tQjNVaRg6eQisz5A4CJaPWm9j1LxaEyiMPSseVSAPpFZn1kFAK1kjTtwK87pU8RQazwgttrh2kaaq",
  "key6": "4txjxfyqJ8KBiV35ro2yi2SHkyHQiW79FmmjJUGMryYiJxjkWYkTYK6FUbZXRmh1WSX5XzkjWgPBUpwdxUJuSKwp",
  "key7": "5xCnSLb7JUpHgfsTbDxCBBuQc7z3qAc4DK8buv2EDMxLqNwPtzWWwr4mC2DQfu8BCQZqin89pjfwhcmnVNznaVYb",
  "key8": "4xvDH58eQy3ZDVUwvNrJ6shMUdypNWrbohhYLTGa4c2vqHZnSQcZKWpaVrLJG8Duq7fzY7NmUctrdkzLnEdqRNRB",
  "key9": "38vGgtkqortvA8nzwB7zep7BjYdDrMSzPUoa6CbC4stdWzKiD8AjXNYbm4ip64bY9dNTE4vYZuwSZU9QzSvWURsV",
  "key10": "W4HpFSBw9b9kwzrh8wMid3cy4XwSNeA52CtraFSZ2DWxd7N5XZXQjBoqpir3MABrgepG75Ce5YGQVuPu7aBZGDg",
  "key11": "49wJhwUTuAXkjf9J2gpRkHCxPMFzUk8xSnHcBvKTfMEDCrS5FoUUo486VGm6eG1PZFBXPqaDgqbbnnVZPBciCJKY",
  "key12": "2QcNPkBjBCpMEtrvtZxwZBMN9sTViENtpKxqGXbJDiuvvA3kRT2H9hPVAyjMKj1bCuwKjxnKxYtx4WBLBZwhk6XD",
  "key13": "xAuaCXEAhJ1aM7WnvqLi3qyw9K87NkaKaforrtWs4Jx3LbUbbiQLyk3U9iU1sPv8wpGPWYgQRgG7sYAbQMwzZcP",
  "key14": "5fWw24JkJ3h6xN8etfde3k7fguhBHkbWEgW9ibsKzMjUwmL5uJ5VoUTzT3hP8P8boNuTvpbWnXt5emjR6rxXoGdv",
  "key15": "2dFX57JoWZYPvU5CfHrMe9VJJyjyzwszTRDaGvbaUTMyQHUckH6CJAqeiNXdMMCNwmpRXVign9kT9S3Lxe3KonXZ",
  "key16": "5WEYiEpdyeZ2bTu5Rge7ap1AGoAC9QqT5WPcGRjKD5RKeqRTGE9ZE2DYuwHdvwK7257uitFBrb4bWqXdmJkxiEaM",
  "key17": "4g69oeNRbWKDY88MTuukFqXd6eKNwb8dsj4SQKkXHaaomQSs13UCvfBn4119GKhzrhHWe9NZBxYCWK5jwXagP82z",
  "key18": "3ee8xL5G4PaTSbUY5fshEsEeaZKPwhV6TqHT2CuSrSC2HvW85v3zVhXvzxy2fF5m368ziW9BKzJ1tibU7KyeWqA4",
  "key19": "Mbt5ydHUGHzon7Z4j7py9XRjWQWs8EArTycCRDqETEbDZwCSTz9sQuu1SvSF2p34VDXBaRHTSsrkbZNgPJAbGis",
  "key20": "4Wk4DHz5UHhk3d11nAD2yC4peizEedi9bJSQkAYeEdi9YackGrr5dN5CKYief37bnLsFGhaDRo8ThQ65qVdCnn2m",
  "key21": "C7K9a4Bsah6ctsvubFtGanPccpGFzBQ8RcfrHoLmDynZ4JciRQu1M1QvHTrGESxiMiL8Q9YTfubrg7QjekKtjtB",
  "key22": "666kc98V7V1FN77CbRxgarwESkcVtHBpqBzKeVc34obKjw1snt6Locmw51ys5ZUY7vmUWsAtWWQAoMjBcfGuMYvA",
  "key23": "2VmU471pzSZAdoWPd8tFSJSArCarCeL27yKh2t1VTXCGwcarPfcQtchYn2nvzYmp962K7CvPLdTsavCLd3oNufuC",
  "key24": "3XKhJh4ugtHw3UvjAdBvQpzJLVbEx9eVXjFR1L43ymN3iTGFRmLqHWMxe3Xa18ftfZHKiKQdccKf4SaXWsqte7zn",
  "key25": "5qAyRvYmwGUTXKno123MzQnroTFZmFbD6rEpPhf4MqQ5HgFnhGgYene9gEAjzFrkMRwE9n8TxBsxv7C2xn8F8gUc",
  "key26": "2yjuNYirsWCrK8Ksj1TQzEE2jXYTbmTW5jA95oPNM2JZuqCnrcAshPDtjF2qJegYnoUjip1KiifhjspHcMMako8S",
  "key27": "2y5JFknp6aMm2qDNmWNkMPQGkfcG7H5kKAknYgVMZ8WdfYGvfSfaSnx4ekbBvv9aF3UtvrJW5i15bpzfqBApGe7n",
  "key28": "47X3Xt4UWw97R5SYnJhndCfd5zHzniGHTrbVgENg9qt1yhnb3YqzpNqqNCqe3FdYf6Zdowd3EUb5WPzZiDGETG3s",
  "key29": "4PHSx5vrueTj5Yr9vLNKzKupCuu9s6JRVoUXruSFCyFawoHrCKP6RMhNJGUgDkJyJJh5SDJe2dhWrsw2SPJxgPRE",
  "key30": "2zbkSj2SaZp9EMaHK3NmtjUW6C5KFn9xnDBGoXbWMFNFJsYHeco3h7qbj6itXtV3bYa2Y5CVL9YBAFtJm8tLaige",
  "key31": "4AAtNsZzmzyoDNRVJphhwscoUSoqQTR4s5x5xsCxVtw8S3EHxX4JQpvayHu7PaJQnYVxRAFhSwmCzMZfmyxGUiix",
  "key32": "3fDrNLRd21vjwAecQkaZsZs2YKdq4igTn2jWdHRvBQ5xD3yifE5i4w7PLeTYYxnzj4yGM8Sf7oGSVfTbizMHsCdX",
  "key33": "5WKAJhoWuKHu4pcX9LLrFxfny5DkNxyeJeGkJjqFVDxmx8paARbdyGWMFEEYxcNrEGv2WQYxcKD6uqMfgRMH4rhe",
  "key34": "4dh8CvnPf9rH5LpjLgq5KCRuEzMajjyddB9WyjhLSgCPkNa4b6qm5C1etZCKcHu5xpgZV8TXAtppNgDWDCjqNpyF",
  "key35": "4tHnCGCYPfXcMVEE7kaTEiSpgABwUnCkpwn1PR9Prr9AQkHh7vKN2RVWjPVWYjDdcP9VPwo6paXRJMq2gG2zxv6J",
  "key36": "2eZCaxagpy1RhxqSXMBaVwKdAzqosbv57mkvjJi4n2iHy65niRN4KPChMe8yNs761FcMbSmMjnGbycJ4pSXBtA1R",
  "key37": "3QMW3ank4MRBo9Y2U28tA2Rqtq3KKXaSA3947iZwG26rj3kFr9Kgkei2dqTTRvR85HqZzDBvVShdxUw7FUfrzbCH",
  "key38": "4WUpJ6oBuapeBoA8jVq3ThNazF6DNJUEVkiqfEKAFETd1wLuVc1Ns19UWYh6bPEympc7perp7Ji9uQYNmhLJWQoe",
  "key39": "675vcGHocTPPQQFd9MU4k588iQC3vryQqqZraqhRWTfy3GYCo1Va41pQy58KVPgdnGvpSGRWkn6B6XezcYzS6DMT",
  "key40": "3W6FfmkFv1UCJceYS6rfpG3W9hfQC31mQB777ojdDYcgxvZwyqGSKtkgxFEBHYKESrYSCZnNqW9VqUjJwD2WTCF7",
  "key41": "4ZxGxub41kHSXcRpNtKb73PMngCQM42pNHotJwr8hUDnYpCFYqnQ1GiEPFydsn4GAft49WSN7k1gfMP4eiB58X9M"
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
