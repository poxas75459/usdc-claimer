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
    "21rJ7mtscVHrwFVhpbzMRpAAzgKuDMpbg48GUxJjckryTuc8nYS1yAzzXJXdtfsK8WvKZTfF15jJyDTwWnRn2RGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axKyg6RDC9rHj3XRayk8vWchhSGysGF2geY3YMmLuKkWqbkHkSZfWwmFtPCwnVQbPm8t4LH37AeAn3h4JuankmM",
  "key1": "5gpgzBnKzgcVjowbcec5jLPYeHBEp53yEEjUGALqgAUbUNWosQfeGG1Vk9aJd29ZNbiRypqVko7SPd1wKcn8XTzG",
  "key2": "3tdHazUKjGxvMZ4eAUsnDJ82i9LSXnS9CVUP4Lrei4TBZqQ8Gt8gvjJjgKeWcBVdHE6WvjQYCBFRckeSJFdJF2c5",
  "key3": "iKpNJB2zLg55gtx7K3MCYLXf52Y6c4bZLUWAxddyp8uBNCSP326ATcvqHZUnuwisNCCy967gqCeZPTJRepTs3Zi",
  "key4": "38kvHmoat9mPZBhyDtDQrkHE6V8Tzyo7Eg8XjWPd84prJtFQGFbq5p1cZXFZcdWhsKLD947jmGd1Juh2pv39X9Xp",
  "key5": "EiK3sXhtFTCtWrSfdk5T7NjJ8Dwhg7Q27bNeLJgobFWaG2AYg1RczFBuarXZrZmhcyaXaum3RftMy9vSHiHZdui",
  "key6": "5Lg4TTKprWBaTyGFP5KXcvn8uFbtctJhYeYZgg1Y5nGP3GgDNEy2mwuenUhPiFHSrtEqMk7ueQ5A62ZoK5GNiisS",
  "key7": "4eprXaF5nxosXSrF8JxzdTeJ9yq5sgHWcu3QfQ6eexrXmDDwnQz9qX4nY3PaBCeSHpvWRkLiN6r3srjS456RDgVN",
  "key8": "raCYHmqT5MFLHg5RMKV2qsmyjb1aCUe8BeXBqDXezh5K2sAPY77xEsEC6CpmJG1rmCJ4JKQruXGGxXWDfBuzqvw",
  "key9": "2ox38zKWN6TZvdPMCRNmmnk2n8XBoaoXifqjQD97888Uz7XMDuBBbEByPwQ8e8o15EztHS6vDNukKinodT1D2Ahi",
  "key10": "5fEKFXKmnmfPfhZ3AiPLBCuxqCUoUKvpqFmQScxhgFFKFfGtiu2uHSqt2FFog5SMPPNTFxUPy5FBx7PikqZdiFiX",
  "key11": "KPFRkgKYJQTrStdbKFe361iVuuyzWWEZQoTZBix976RnHT9tK3Np82LBLFxWGzc3vNQRksAs94YnQC2tdmMtsg9",
  "key12": "JvNNdygRoVBjQcdtjphJPV1xE24eLbPP3U38qKVp6Qm825oBDVM8Ub2gAck3XjWExm6iqtyxGDE5e3mN4oLaPyy",
  "key13": "62YBTcw1J5Ta4iApHNGyqLxVMNfaCdhNXyvjXN4mEaBVX5BuYqk1FqXrkEsXioVvEDt7xvfNB9BQRUcEHMGPanYG",
  "key14": "5gATma4XbLgyThGABdczi8ELEV9KMiFGAQxW5Lux2JhYteZXsqyZpQivLNAme2yRBMfcoKke8rzABJEWhV6RMNXW",
  "key15": "48PkuB1dDfk9DJh2iNDLmfxjNWL9sGVrzE8q9dBjsGVKPrY8n7cJrQZ4nuZJEF4ZUbyRbRoiLkRj6U3Z714RGr1j",
  "key16": "5qesp37YQdvcneiZtDgZmDdvDrUVGBstXaentebSdKiZgLnL7aCuRR8QbRPZKKZYmRmSrAgfEmhsgZUW5qA7dptU",
  "key17": "2wfiZvDCSQxuhPx3uEMV2ib8aGR5miDkCNefv7szyfXoFqaFL5RFHyoiW41h6xnuhhHzyKYxUdbxMoFqgTwUiSNe",
  "key18": "3agRiYCbkmJVaDfzHHsLcFn38P2QtVxQMYuPyi3oc6vLoL1GjH8yiJVg2XHWATNGvZ2JyuZSw1tgfVB42U1FFmty",
  "key19": "4EkEXwLR24Qfz5PGeKXmKHEGoeVqv1pZSkdhX52BJiPbJzpXzVrZNAsENAcGtVDp4EYrr5ARL3o5HJfcJMJEFnom",
  "key20": "2CUNM8B3tnEht46ztrTiNHtHfwphsovfUqv6pRWDa9komytEH6FbV2B52vu1VVYPHtTQDqTZBX1g49hhuPmhRT56",
  "key21": "267rsnCP8kb4wcaDX7AB9UpfGjf9hXQyX3LGJwC5XTr9DxQYfBmBoEqr4ykPMFux6CSzTadGb2G8PYgMXWsD3riY",
  "key22": "3nwLvyTjdSs9FDgmRWTDpiADyyjhQcu6HSsqHS81qPDR4AvJq4GBpe4f1a9QkdGULD96Zyg5ZZP2SufiXRebmdF4",
  "key23": "4Z6CpHoMFMVagEniSD7iYPFMMnJ4t8aTx1mXg2kiLJL35VH4xN4LitMT2yoQmuCUtfQYKASUjhsNjwT8xQBR7HRb",
  "key24": "4R3boh52Yt4KWCJ69nPjja6738hnUTDpNcjCcwVudDb3eugHf4okTkgKq6HvYPHr99E6KBPBfdUzigRJBk3M3UCC",
  "key25": "5rRc2kFVgF6Z8BGHMEc6vy4e9j1a3j5xz4NbLufth5dc6fnhJkoyAsATNoQVxHCcRLPLxKjyf8k3ZFqSxJ3UBq5D",
  "key26": "4EroExhR46nnVP4azLeJCU3FkgYbtty4BCYYrKgcGDNfvkmXaLF4nra8umCrHDCCo5rojWN52YWcHtq8Ddiud6wL",
  "key27": "641vtKg9vXPp8L5VmwBo2tTmDZ2qbKEKUmPkemnB8cUtqyU6JBFVDFiavDTfB21cbcEE7THZGcZjQusaTENqCNEg",
  "key28": "3VtjnRQQ4v3ewG9nQ7F1tqqhRXVXtZipzFCuuMZRoBit8GnLA2dxg9KXVgSaxKx6joPcEQ3J12WbudVWBHQAA4vZ",
  "key29": "garUCfyF1KMqj9gNKTnQdnxB33wVmzBFfT7gFgHnXwvE8mWfMfrBggnpkx1NfoxvvKTxJFeMHD3JraJkNKJ8gvg",
  "key30": "3UFaW2kVVcc6ALVnvQhDuWCNrBJ2xDJJbX8PkrXYbttEyuNk1hHgXAzbmA6UC9dcZtgwcCeit7jMfkbQC8VghmWE",
  "key31": "sUVwCtyiVb2bzYvtmhc52ZciZRYyoJdHBV6xiiJHKZyAkctSn6YcmfTNGchyFfxMAWyhdvGNL4VzgHKMBeFuQq5",
  "key32": "4gtvphJLuQKcNhehViDJ6JNAF9Qwbi4yuSjCK2Bp99A5o85t8nH1ddSZRz2Hhm4knBeHMaLeAvmpK7JUVxtKDE7c",
  "key33": "Aaboc5RBRMZGQhgPBAEya69LHqW9V5uJLVvWyKEjBAMwqFmCGQxo4tqHeFiBJyYR3WMPmj1xi8wTn6covhDZQYH",
  "key34": "5g67ZgMzE9Tn6wSpnVLMJbyTpn2dtpCKJgiMakTcm6bvrn2cHH3yhaRPrxE5gNRBapQGN1vWaQRPKF6sXVz5Whh3",
  "key35": "5GiV6Bn3AKh4Nn1UeQgGiFBn5Fpgf4pi1JngCXNpUSjVfmn1TrcxmXaWujFejZThpGPhfvpeaX2G7wgchUo9cGbN",
  "key36": "V7gBRYj7dStGeS9PWhUPHQPW2Q7b5NAW9UJStPLVGxdwnkcAk7anxkmZQo1tcVozh1QVRr6pDNmdpBUCLLgYQfA"
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
