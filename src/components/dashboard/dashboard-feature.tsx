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
    "3wrGumnPA2XPMZk8VWcLeFdiQY4gppx9BJ9SPNJ4tXBQdiecFDGrxN8PPmxCqJeEkir6qgV7vjTCbdPtAnem5jKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgNF83epQXm6LSzyHm3Djc6FfQ7hdGFiMStcdZUx7LGau25HWZUmQ5u1STWbcMDT63HB6egeongvS62SfA1cwc2",
  "key1": "2cM33ctKGTXVUgzzx8UGHNmS8NUQ2YD6HEwRnQrU2nePfBQdxZvzJwm8T8DCZBNnsBScdcjEBVYs6nnLQAyNFidE",
  "key2": "z22jVzbnA7nvy4fhDGA9iybmZcgitMmUUvsY7FhCwiXaJ1gt9g43Mro6Y8Kfep3GjCBUsAYg6kaztJbfGUQkRCf",
  "key3": "2XCKrqRQCCLnfkPtxbM9Bymzq21BrDwM5V5dvBhF1KbpmiagxowGmHcPPCsuqoFWqWD97q36XELnvxe9iuJr6PiL",
  "key4": "3FEMkRZRnN354MciTqDvuHVxuYyckXtpY5zaeXovyBUf1aBqcLLo6dLzwimZU7TemNPkHT4s7LRBZ6kGrBvVMyok",
  "key5": "41w39Py7ng3R4MTT7txwV4KMVqWgHkqYakG9WRssKEKqRfP7nyr67TAii73gG1LyorNYgDZpUHM1zcTQ2eiK23Go",
  "key6": "3337rYKeFKLKXD1CBfmQhKgG6egZbuu228BUeAVVb1tqaHYm2c7n7bzsQcUUSapx7i5LtXpbyUi7kfQW9bNp1k9h",
  "key7": "2xdSbYvkPqeQFP2riq7D5JVLQ5aEhxETf8uzwqG4GHggoL52wmRLYUTMKWYiMBcmkZwGCWf9TNMom1soydDPgvW9",
  "key8": "2hWEyYoqFjFbomj6HVzbnm9BXhspUDw1nomw9htd5mdtk13Ek3SmDBUqrH4faT9v3Syksurx79gv6KK2e2693y4A",
  "key9": "2Qs3PF8CGSnrzocyJF3KY9bdo1Ahzc37aCj8hRuvjPYNZAcqrz3DBaZC2cvg63yxZkDtX8nZ4ZuppbynC8aGAWHY",
  "key10": "3gy7ydhvXx5iPtJLZ469PhuXvoY85eKd8FnjuZwMEvecmeBeTkiWiaq7zV8kKyGPoSQZjzNaXa2wVDGQW4As94TN",
  "key11": "3duKgiubQg9obhqq3j4dAfEThhX9945errZpwt9phx8EVGCmzpWNpPXFScqcVoMryLn8W1ErXCJ252JLcHa3vJk2",
  "key12": "4PJa39HVWy4rsM8bJ3Np4UrHrd3q9iVCd6fre5axHz77r72PoXYEokyV1EwYfKFJzpouukKrib7Z8YmyUDpesV7B",
  "key13": "2zDjqMZJj5k2Vxc6Dmsh4FFysTYEJD4bmAKxvuRWt7RwsKZExESKW9cUS72X8nsoyAJEAr9hp7myzhUWiXUDBKEE",
  "key14": "27mK9ZC4nWcNff6rVoA2UEC39WKdpMzmYG4SSBDUctkbMZribZcUdBKwHBLUZYkiCF5iCH32hPmEDX2QZ15mxL5g",
  "key15": "5Mb1kzKjbKkDNhLKoyfcNDr56Poky7wba1mwy44Df3XYekWhkqvSEdun7xMuhekm3kfrvQ6V76iXTbhYB65cPozs",
  "key16": "39k9dy4EkqXc7P2DoPq6umJuQxc4b4XzgoYBXiEv91sg4XxBNkP33QYmasp8c9tQfLKocQ9hHBka6rWdHXjTCtmk",
  "key17": "V83nuEe2USURh7UaNfAZsBWmKr4MSUo2jThZyoeFytimZ85vw1b4Fm8uGNPbVK7h5xtP6j37Zkkjme2qLakFeJf",
  "key18": "3zS1GA7SXFY584E6i2erNAHJrj2C4ULTeQZDCsNKHWGJ3tXzCXb53Jfs5e33HyKVnCoaev9mArTNtSTFpHrYCZrx",
  "key19": "5psyEE3Zc5kqGshhVeVBhqZAg1ykxbFcvnXp3qZqmPXaFQ53bSpy3xm7RKXmhE2e9KJEGUH2XF1PefYpSf4B2F4r",
  "key20": "2QNL69fM6nRFmSusXWypJ36tRopN3QaXAK62oCoNUx6Si8tfAmt9fVXzgUMe1u92GCXqzQ5du7WUTNy2M1BdbtLv",
  "key21": "3m1pfHgUv2FgXMwQdYo3hazppLrJ1LkLoi2LsoMPt6ccKynwdTYWvMDVk88C38Ahdiz7gW7mCPKJzk2rmCXhJRTd",
  "key22": "GP7N2z5i3yh2U25YZrjtEutDTL5TvUjZNnKEUgFozDMKbxQifzjJJm9VZwmP2W4Qj6Wn4CgYbN7NoZxmwUXFmv9",
  "key23": "XJomdWFGixM7H9GaawUFv6cQvDujyZViX3oUVmCFkHJMJvAhKB1AiYKtnsU72dhG1yex44e2w1Wn3oP3ouViNd3",
  "key24": "35eWQS5HKJU725VJwqiSj7k32Ec8Po7p37ppc51nSo9KjK3WRDVM2JVFTcSVb8ToJ5xdmbeqaKXy3VjjTbcV3LYa",
  "key25": "5xe9BYa51w5aQVL2t8coEww4zpdu25e7YczNnWQkh38LFBfufXrwhzMEtTi2oMq31GYGG6rXFgZi8bL6nGq5BRNm",
  "key26": "cenZa6iGAZDfGhaiLwF4RvDtxYV7N65aByXK9CEgmEp48d42t7LFQNG6A7DJv4fDNPi7sfxbWrdvi7hEF4uSkZB",
  "key27": "4juN93F3jhnJtmDZnqTnieuYXr8b51jiw5w5ErKZvicQdK8b2iLxGDqvT5MQ4dX2G64Gi9Qm6qBrd6CS5hmoCNVZ",
  "key28": "3giRFXaZaNpsSqzmRDALcJY1qDcQPBM94fth8XrVj8ba9ZKcWGssGgA1A2P1TqfzUTfuN2efRyRrNPjFadXE5QfS",
  "key29": "4ZhQ2tkXP9piupS5bNKWP8nkcWUqnGDhuwcfS9jz6xrdFsgKQ3AtABmNje69UDY6y5yaxZgr6JsMvNdiN9nd5CQn",
  "key30": "y2wgTZCnwMogS2z2F1b5VTD4Zxo72QnQwMe1MhZpP57mcCnuZnimRQBGfKiWcRtjUdAkUnMeymik5iY4c3qDNcD",
  "key31": "3Pfx5ixDJ7dFU7opCqSz48MGvT2QqdtBrVbrse11yBpAfHmUroY2KU63xAvBeto7ySX1LbkaZwWWcRGEJh9K4Nm1"
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
