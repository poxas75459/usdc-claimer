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
    "4m4n5Ha1LxkwFYW5zDFjEHQPSXw5o31XCb5g3bRN6sztyzDHa1WMSjhSGc26pRAKaFbVsTdKASWk4Z1rcvgRpQuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FijdmQ6ri4sSGnkY9FdRSaumCXfrNBZAjvGmTU1izzuQGjJoGdpXkdno2dih7dwXxYCqM1UqUcgDBzGnQjhStiB",
  "key1": "5ZWuqahibviykxpXbU4ew6yowZHgumNU5KGSuAykaTHyCvSBNCRxeNvXzyuKHctbUdmKKoEy8CyL2N9v47DzN4Mh",
  "key2": "fwhWX7JbwyDN18J8ckAKxHB34soqn1xk4rpM2uxJMoBRHZwmoWJZ4xi7QwhysUZNFSkxodqLKPdRmAy6KesNqnN",
  "key3": "5odNvEhk7ZowNVkLcbp9aZbvsQ68AhUYJfE2nBHsCe3raVHCPUuLpGEE7RdGmYXG3dfpJ3HFZQVuagcbccWEFiXn",
  "key4": "628wejthszHeTksjkyMb7AfJpmY5Ejth3qWP3vLE9j8FLNa3yDAeKFUQCRCxgxqhqDoFFfbeo5BzMjzqC4to6rZ1",
  "key5": "4KjKvMs6GNgpSA584nNfwVudiohb7KzcDe7XmDLxzCKoFybJsiPn99nragKNi7QqDQCja8N6oAUJo7Lf5XBKd5EK",
  "key6": "4mAGmfRfaEia8gcZ8ZnMPwmfVsGKG7ChS8zKUUMcFu1CGWZYgYT8ETSk8pEJvKfFk6zDHyE2jQjnp152DQWWpwYP",
  "key7": "5vUEH78PtJ4tF4GinR9xDA6MrCjMXkJpd8pRWccYhbxYubEf3puzcg6gupsUqy84EyPA8UdogLvwwQDAxZgsxnKk",
  "key8": "L58vDntsSYphLyXJy1MBfgSACXSkZpVemMWkuQNgVHu3ZQgumtJE3MEvYY7EEENPsAaiy6ND2oK7M3V23UM6YTR",
  "key9": "3mX8dVuEG1JG28H84f9UzoebC4TcSNWXUhwkNJ4Y4smpLyAJJDEvyKxS2WESFAJKQADhvN51owDLghLgbMBCpcnV",
  "key10": "3Vo9FxN9nxPLcQuixEiJzqJ3MpeDJ2R2WQWNxYB1D9bDpMgXdMTMjD2zNq1qrnpB67rqcXaLR8AJ62SFfQhar2jM",
  "key11": "5MsPQXD5Gi9Da2VQjg4QofjqYTo2sgTH9mmKLT1ewyGTHRkEYAGuNqpZEhcA4no7GjtCtxW8AzVieSsyzp32zdkS",
  "key12": "238aSESSYiPyPQ1j5GiT63QTxhjW2cMcyNjnCkfpcv3QPRkKerAS62uvAo1mxnF22qh6QYHWKeRrEwWPZiTGhu6J",
  "key13": "2MrUSQBUqFkvxHcTiaASNYc12hs2sKY1vWsrbKJsgrfPuxrfvNgP6ivD4SqwYPPE6EAyuDfMbrTu3FdvvcHZboex",
  "key14": "4K3AoZYFdNkog6NyDERubUo7EthvbiLYFgF2i3tcQihcw6No3dt3fsHHVWdsKwYLjymKTvnsN3MjavrzgiNoEUCv",
  "key15": "5VobRPy18EpcY4Yr8QpfjZkbXKuWQxyfZgExz2mGs3i82rKKdmf5ygvnm5nQ2EdTfjMeU8B3ZjwrUAjZZH6j6o2n",
  "key16": "rZqSU284qcQPMtfz7Vp4W5qXp9xceUzC18ACeitWC4zR2zAi7M1akGsrcnbQCMgmvSGt5xmFG9VNAM4wNyUtLGp",
  "key17": "5pZFRBZnqfZjnNhqfzT5CzKxMuaNocGiziZgFDZfiY3r7jcCEko9K9nmH4z6Wm2qewCTm8CnrBnJWp4zmbi3WTo",
  "key18": "66KxrR1YfReFNGnKirax9AegDWYSqJ4rUDEyTSc4R1L5GG4dRGopLoKVE39mcxHBj6ejyRnijbQMdu3STE4M78cD",
  "key19": "4v2P1pEMQMjx8dVZZepELK4BceyW9eU7VDXrBJRUzH1551giTNwWrRNVW5NDCu1bT3H3rsPCtyNY7NXmdig3YcEt",
  "key20": "3opyCgY2p8cT23wDN88owkvduY1DQTPMEP3f7bg3vS8sCSu4URoFSry5syjSVEX9pvXT87VaAB4X2vqmFP6vA3MT",
  "key21": "2v8YhoSd8jDM7YMXSj5VtBicYbn99VdJaGVMMCi7s3qBpF9uaKPUNDh9Ht6tQp9sd7Dub9gfvn2r5eDsT6Cu3hUb",
  "key22": "2tctEZ7NqVnQdR3iaQwYVKtaW4mfoHpBehwwTr82aT6DotCURh2yiNDJz3QWLj1Z4s1wr8rVxSSzrnY23uD6T8eL",
  "key23": "49Ru6DhNHHrQRdKiiVDYAvziR5FfvgnBUohWnqBrZr5PeHkDvZnujcXs1auBYWDv5fx5iBPMAnxg1dTc3SZbvNrB",
  "key24": "4LKyPpD4TVHu8n6beSwYPxrB6fBcCgZBwyUg1ex73XW7TBAa2ZeyBqYzNwNcVFjqJ9nsXA8Z5LtCaxAK4DHoTY27",
  "key25": "2bShFADuEBXoXoA8w74FomFmSuW2bPVuPhVdoWrxoYq9Y9KHr7YnQgnf4UoQEiR64jJt9thCicU1kqN9ZZ1C3J1G",
  "key26": "2Xaw2Jb4Th59c3sRP5UfepjNongSqVTTuwg4SX7aaGcuC4N41ewmn2RyKN8SmRiBWw965noQvN9ywPCaSVt47C4s",
  "key27": "4ZV1rRuXnJKRWNsz52ksqxKAZuhase9bmtpK4Q74mVZUDCuHTxHNk9DkXWbKPifRx2W9tDCPD52WiE9pS8RBT33G",
  "key28": "4bwea7NFG6RSznqzdf3GJk6PyzKhoNSobhJidqLy7wiLMiHjryCZmPYJpmCesRRn5sSSfwVPwU5Tuv5ZAcAcDQBC",
  "key29": "3xJr9HojBVPWEc7TFNxdJYRRTRa3YhBUppvkkDBLhToPVj9AcXnVN8FKC83NkACJ8TYTP78qvG2fF1gqij9157wE"
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
