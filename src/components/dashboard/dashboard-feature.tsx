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
    "2TPnNFvQBmW9XvcNajjtfcK4UuzjYss3UKb9YmmZThjdATHHHZQb85Zw6ufj4gxuq4BaxZFFZoGGKXzc8ATu3g79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XofnMyDGiTMUhtzKi9i2WqFBqpWbVM2izsBm9XAiu6hTcUVQMUwfjpeUdZg3gwMe1dnNkQmGidjgZmamtw98qv9",
  "key1": "2bbP8bV8cfHxQgTkFys3g5CsTtzU4ZNNSmnfEFrUCQjS4pdzvHxbRS4PdKZFr97hp3CRn7v1jhMDJVML8ss9e8UM",
  "key2": "4n1RRcKu2kBuaHaiP9WDHvQm1EjENkWuGXBUTYZ38XuEvZvRAQLNv2maLnAcNfhk6RZ77f7EEkMYCZL7sxasP58M",
  "key3": "4UL885rtbC8xQYMrfFobpGNx2zzZoHQ7pk2jsCwJJaNJRBQS8Xwm7Bj36zEBu9qF87f49cq6Tvn7ErgvHHZmZiWn",
  "key4": "63JFDyyRY2pgw3kemEwmHT92TkUa3ZQkTiXYJXMuxMTYfyEbgvRqGSqorrRwuhSr4Th21EaqNNH7DYwcbcproyQU",
  "key5": "21jtWdGaGaDPf1yncPXXPAjsSgoVoUThWttSkq54U5kFcjk5DFe7EdQTmygv3q5aJj1qZeRmtAXTR1Fz2ZCq1rDt",
  "key6": "2XwjhEKZQKsMkxfCZH2UJuPtfyiCsTE9DB5aGnxvjiKWuGSQQ6oKBX1UaHD2SD8pNsbLaoynvXKWjb1kgnytsPay",
  "key7": "5EAfQJ59NArrFZaXfCLAjHjAEVGSN8naAkD9xJfFMmmk7mRvp1otcPPySZkhxt8YoAM7aPFzDvc7hQaEVrrTyRD1",
  "key8": "4FHTJyvg6C7vhNkVjVComqCKfR3PLUrMe4kQFBcJusRwUX1qcGf5zPGwmNKqAAgDuBMaDQ59W7rtohiC9RNSEiMQ",
  "key9": "37KynX3GzkaF3spZyC3Uy9Qq238co3dM9FpMVzMCgJQhBmBsH9ZkUtVwu2Z8JNZLzjwaAkf5Bc6ooCRCyRrSqwRu",
  "key10": "qKtJUfGjEmL9NiAAX5EQvN7MP3a4ozmbEPSLGdusbAnLh9TyQiXNtNfpuhp8drymBZDcwKgRFjgAWiwY5BgZxc8",
  "key11": "qbMtYu6AuHUCQCjdQqnYyEA47Syaw3Yb5QCjXiRZeeUn3tFVavbncmkJ6Jj92GQ5idTHuQK2b5YTUiviqbqGQp9",
  "key12": "4xB4jpVB5q64kmnFkKPG37u6yrUNc3nDwnVJtSvqF3chAnaYXqMdLX1YrbMPhQMfbsW2mwUjT9CHQGVwu7BEESWQ",
  "key13": "4PdyNNPAXr84WtV7Gb7kAijbLuWUUJ2kF9SRTbj9bfJ1tQBPYVJsP3C3yBrx6C7tQMgZv8JbqUQGKN1AvjeiSvp1",
  "key14": "5aDEYLqzhNJVvd7ot8hrTWzaHDsM15tQMit9u1fVuUfLJ53SG4krKGMy3M1bqLQXaxAVhibcJeUrxK3F6uvutFey",
  "key15": "5kVjJG8BiTtTppyvCCwMcehrBn8LSBvo2heaUDBgKcQfZc5bNuDtKFi1fKiCNKdfsSWnbdSxBet6AHvmtEHXu8kW",
  "key16": "2F6AdWw5T7gMMYL7TYiHas3a4QN9PsELPjBVbsA2pstoWvvxCbAQ3wEtposi9ngYboEAELT8UEi9APPSZvdsFXSU",
  "key17": "PBVJWAKPidaac7WjrhcyMXj5YqT46jJNX6mkPopTWgcafHEau4Uf38P8rLKowushMHr8XXeLZ9WiQbWrnVA2jtW",
  "key18": "2yiPjE5sVhGEHqdePfswk99JbQ7jxjM5v7hMdDMfHKuRRwMFM9nLj7hShPTxurLX7ioD6ctD82fmbCMqyqDFCyNo",
  "key19": "XpQXZu74kDh2h2ZscHiHnyMNLWg7novBdsMPv32rKdVgEKVmsGegXtei2tcnAH2krv57KEoeB4nJdkgCsXVrMZF",
  "key20": "3qpoNVpuswi9VGphfrKqZXAH1aPFzPnC7zS8DyUN8ob1jL2vH5uwB1xsVwm6gAzYGsH9KhWu2AySR4YzMombiUmC",
  "key21": "3FsqhB3CkEeWvT19ujLQCdhyko44LGupCpAcNmdMcmbcaARDSEXJiV7o4zhEke6EQtTiYeBqk3HeHaUKVPAZEHUA",
  "key22": "5iZq2RfExTDBH3CXMkMsb1tEzB6MTPjEhSaPGWndFZtrUEumiFQtsmguXxaeULEWhkhsoNsw7RzPQvkLV6SafhB9",
  "key23": "3aBcgvESx1EbhBTFXP5TaAbtHkSQM5WZgsSgJ8PNeXfm6WqKtzQrWAQ9Gz41kwdjo973pKvHkZCnMvXjZMyrgyHw",
  "key24": "4ed9AMRRrhMFgZxrCMc7XfyyCTAe655MrztHeNF6QSSA5MFCjf9aYxbx2cQ9tayQePWx8rUSvTcWU8EbGsQZvXpZ",
  "key25": "2fLiNCrc9HXstGVXTAT2CAPUBisBSG8iBwX8K84Dp4pF5wgyVoMhd4K7ZZyKFxASiK8eVwEcuVyCP4YMTLDVNMpF",
  "key26": "5VfapJiU3HU2W1wifadL2xz18n3grFLj7jfdNUZLcNLmfURtYnQHAYtX31joYkPW57AB9NJwP7dypgvtoMV6Lt4W",
  "key27": "5Vu4Kh3dMyNu3hVuYpTtRn2czjegFNaLkiA6BTs5vxWtJ25c6GsnAedULPneDEy8ZfLAXWQz2QhfQv3zTg4FdzyR",
  "key28": "4dEAayBr2H727TJntJ8635Nneb7bsWejg36paDG9aidEK8z71gkDUAfz1xd5BpytJkdPvqwMDZapRDNGQRfxDVJW",
  "key29": "2ujNQjCixXhs44g5UwXMf7cvi4B2YojbVx8txRo61iWroHNBAtguVbWCWDp9ieafmGJPyMMhJZ2EJ4wRJFMy73CT",
  "key30": "5TfodDTZrJPnCbgFPHm4Rr8hWwuQurVH9jQxi1rZzefu4skCBsD5gX1QwkMLmtyqE7oLM4B2azLHeZcELPGLeHSD",
  "key31": "5eimZR3qsLXA5uc7fz12sEtqaWgJwn5uXhAf6BW6VxcK4vFLGhw5aCWqgT2rZUGkqM9BbTpiSfBtuz35fwEwxTL4",
  "key32": "57fKxvK494JgBsM2aXJ4fKVYEWdG8iDJQ1fFkCMdgcAPL5U2DbkaLCQv8unbvavUMUBsnpgtfct6goryRGBTQD8V"
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
