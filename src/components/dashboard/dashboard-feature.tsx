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
    "5zGMJRfWxeFH5hhKwWFgwEPmNnYmcCwKNFu3HAHsAYSca1QXkmv2kzkiSyf9ZFzUhH5jP5XddjDsqV6RRnVqvkXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcyM5u8bFAk9k5zQ1LwU9vBcaaYyuFvij8ET7tkzuNDvh4VNokxSqVuNUNZrazacjqPr3mrNmWEd6ambF7pTvCq",
  "key1": "3JVUqcoNCVRwosMcBpk8cDAZ5DiSR4N9FJ4KjEpRZZmVgNtrCsBmnUMdRkcy6yVtaVRfRLxRxGPXKhzWkTmtzFYt",
  "key2": "2UorW8eWjJHEKVeJobicNNoyKrdu5Cd75RAF3bbjuaRTNbBuN9Au15inTvGmyWB3T3TGVeC8JZPGWUeRg2A2Spwk",
  "key3": "51pQ7q9enrZtPWXSuauPoYvNHGR8VUp2KWyyEK6ScnC9y3VAFdfEV1Sji3Bu8JPU8zba5Py6qNNcpZv8ovM21uX1",
  "key4": "5YXmPzvD2NGoQBEo3C8pqmNW3UWGfd6ErDqXaC6MJ5SiFqUCHY9Wr7Zw29aq5W6qHfawQBggSXx6pZ3DEBFdVKc4",
  "key5": "52v33PeS38v1Ma47rTJuya6mjwxLF4JoZE1GuXawYXtuGRAJdBtiNwiiYyvvEcESFsafQXJXgCUkWJxHgEGZGHJg",
  "key6": "57h5GK7QReL5puEKWpDX3hPbTdfZCqcRLVMsTPSSSqXWqhSRBFKyZ88CnWq5eZeH59rux4y2znjSWNuHDaL98ztN",
  "key7": "4L4sqHisBS3Gzv3tLt4amMzw9HvodmdS2Teu5akdxdfcm9e9KUjw6jCFqwRfYtATV8JrgJS8z12PindzAmTC8E4Z",
  "key8": "2XqKwXb15RpvEkrXgNFFUYmHMLphgzRdXLRZyDbN3HLs9t8w75Mr1QmnotEd777pggTBUHyWjUpjMSfTwsk3fHHp",
  "key9": "1j9oVF8sY7jUhTQHVxjjGEMLbMVbe1aYYxPJA5P6TJd2sqovJVThGEsj7g8qcwrpexN6XsGHGwZZehpyJNDutQe",
  "key10": "48ZEjob3jk3aBhabj6LUf3KC9oSk8dA8aF1k3X9K8ypE65FCoFE7YgGMC49DhKRwLnwyka3b3ZjFEBa8vnrnc6fF",
  "key11": "fLYokYiiooaA5wy5BvsoYd4fZZzVUDqWvdLyNZgpekTixQaj6i5NNApnuKvxGXE7wMWH6YksvhHuZmnEtWY76XW",
  "key12": "7k6Sd4hgCedTm9pMMy69cJXLp7VVdmkwh1b4GfFQe2LWbPJK6Un9UuLCui66NWtGF5LJ3GbrL7hMKCZDo4qbU5a",
  "key13": "49hAikybE9P7TFz9d6qiNx1uPLQuacxb5UMnCv7WZWT6QsdeRyS1qVz9vexusND4qt24Js2CspGvAXUAL9BMcZYn",
  "key14": "3MpuL1iFRuzLU8JG5jCwXDtQxgpgPYyRpdtFkJRCTezQt81tuMNX24WPua3Jf1vfM3hv6XPcLxjoCww8q31v7L4L",
  "key15": "3MKMwE2e1oRyvxc8YxGEMKLVECL1RkBok8UiMzEwLQxiWFbWrsmjDTDES32d1PdyL5vbPWMCbNpjDAi6bZGUV1qo",
  "key16": "3aDumPfJT7jhEQkfjn9ofFXU6Cs3YbXTb5ntTjtBQLovtcXrhHB2YdViw1xgkozFVGhd4hgFqM4gxJK62rYTfPem",
  "key17": "3vMLuKpzkDTABfWNGR8hTuyoGbdEDTfTCKUbWhE99cD8Fnnh5oNCrVoeorAnC9HKKA2pZ51EgJLpBM2F8dafsz9g",
  "key18": "5ShcccdbxP8vAjQhJws7xt1K8qhCoCzUReZK6HBZnH7nQJArUb7BTwS9ErPgZQDJRWr5K96hqQaN7PBWiGWwEUzq",
  "key19": "3GNZeoJp2ZAXZ97rQASbALDABEuLPgBiM91Rumtvb9HwmRU4N2Y3PhHud3JBoxhT7Ln9kvCFDA8hUkRScxJkTKW9",
  "key20": "HgiTHq49kSjXurr5bVs64QBzM9xTt54wsX8mEvDSUMUTdCk2vLr5FiuxD5YQYRQpjbmdYeqFnKv7TE1kJoo1wvr",
  "key21": "5FfHHxQbzXxPkDS7j7E45QeXboyYJJM1FQoQTcAjXw5UmNxYFuZupNpfEQQGTE9CCPRXjmSnby9W8CLayxMxxEga",
  "key22": "3v52WrXxkLhYEbYfHLuWsYrC2PVs3QXuitsd1NrWqzLhrwkq4CE8jgsPM8pj9o6515AHtujomaDDD1m59c3bBZnv",
  "key23": "4fVpvv5FymvSCiubpW7XbvtJd3F515nZZCdjjKSZrdQhWiJ5KvsdaqJwMqTuSQU8nWDXpTrKWXA1Spoq8pzAhqsn",
  "key24": "62jB29nmfv9PLqRwCwQvyqpBKJFbNKZ5vj5dVWwbPymG2q61JHRJjixGCzhVaceuyzqKxaPwnhNiioXe1TK4wV9",
  "key25": "51u7iQbRNj6R8AKbyAdUh6zmywPKLdwNuryZMRtPgztLXwdEBeJYe5ZyojkZyAzm6KU96597YRuBbNWidAdipZNQ",
  "key26": "4TkUT5xSWimCqCjjkiW78CJZ8nm7ZDNSVLTQpXMkqHtxmoWna7sFf1Rgs3W2Muxdr9n2x8bveuzadZj9sNoNGWiw",
  "key27": "roYeL9KqfQgSLCzAjRpT6VSaqkzbTsAFDkRrr52ZsAQ5Y4pYN99kLN2p5Rv6kKjxXsZj9fN2wrF8GqgpqDFz4hT",
  "key28": "5GCP2tKyDyexWjrqpVGY17epp6t7Y865Auzd8Fy1W66BTC1urMm4NmKRiKLtjZcMCcgDNhBny5qiBfnVR8FfhBtd"
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
