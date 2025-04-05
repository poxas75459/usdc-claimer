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
    "2gYKVHuKnpNYX5a1HYfX23uV6mXxtW3pK7bQR2oEUMjnXLo8uLNJgB12n5hPC7F7VEnQhtitGe5SmAuY6BRw4DHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtFeZZs9eCPY9edFqP2tsVd15xqX3ZLVjB6YgnvPs1Bemue7qAzzn4H49L6t1d6BBVThuNCz2zEea29tLv44xvu",
  "key1": "4JMyc45RjnYkKVKsZQ91Vg1XpdLeqWGGfNGc4nNqkiGbF45FryL4Qa8iQkpijTRx9NRxyMpT8xv43mXwgoJEZpq9",
  "key2": "CKX8CLRYzJWYDVCMUr6PGGGx8rnNNn198PtwmApdjfnNjymCLn2ppwNjVcu14LULqqmeNA1g4JE4FbRFQFKiG7d",
  "key3": "MVoG9ZxTWfxmyn46nVWsfriBGyGSRxq1j35VNFcx9KHLMoE5pqpR3VRKb7pmxGQJYUWa9ef2nXJ1rHYU46JuBWG",
  "key4": "4n22tsMFhNwMDj1JiXr5gYq7JgJtGEjqsZo5uTNU1rPdnHRAz6476QGc9fCAwvfxSVkEpv8d4HYjQdKgXkzSB2XH",
  "key5": "3HuYwD7XXnYruErPfCAhsZ79yfFxusgpfrKFvrtN15NKzWgLbmFgGmMtjkVGx7LPM2oFV86bzbeta5armwFyU2tB",
  "key6": "66sQyqcwCefVKEbarA3mQmLidBbwutmmTmpyoxKvNStW9iPhsPXgcYQYcSAKaWpYxHiXX5Q8aCcV52SioTjeXrBZ",
  "key7": "5R328VidL69gqNYR9dvVfapGtX7jS1D9s4LUjr1ouf4VGJ8K4GrawyrnPhh1UMjix7GNGB3ausKHqw2sn4L4skZU",
  "key8": "5n1aXfkSqkikupUvXLdTRxgar4Z3QqpiCRtD1efpryoLedkywrCpo31fsgY6s7BzrXWkLUyVogFLoUWvaJaKHxgn",
  "key9": "2NrxVfzTU6FfL3fweAP7skgPNzmFXGM8fuivWcVYwtEG95A1pbA1acrBad9WFgWSEs9apjCrqbMT1GZ9Piq9kWcN",
  "key10": "2CwUWT8pgqfeVpaFWUVhkNUp8PFXdqq14mXq31NEMkFSN4MiSkhrBMEHNLBNGFr4rukrrWXEBfK87J55cr919C2C",
  "key11": "5wUnqdKqv4PgrBuMHqZn2ao94UpqqLS3ykNxwiwNN1bEjAUCdA2TibZoAet1iPcF6k6nSScu28o3Zic7Q5eryphA",
  "key12": "4rtMcA3rEvnDfaWj7Gz9BZEcL5TjVfinTv35AiwqYGquDJHvsrqRWT49VfHjB46381QapPAnbr3sGuzzzsd4uBZ4",
  "key13": "2AdW1s5xG19YVzrSfmSY7FRFb8GBi9Cr7YcnfdygwgTpMauSSiESquD4Sz8n6dMPcXFZqbj5g5U8nkWKREjWpo4B",
  "key14": "5AeQkuHwHR7biD3gZ9n72BUWLUoy1sNn1NPWVHREYymHsVd9yLKJ3M1Pd5SHysGAXoKnJY5oGzX2GrGDN1e4Fr2s",
  "key15": "3ETgtuY9KwZjsAtVncBo2hb9MptkyipQDLKqtkf4XAxPVCGAcq2gvATJhivcyjGxEvYnU7RpzFjLMamkYBSHhH9c",
  "key16": "2p2DwTR4YmWBB2Lf9sf48XXWmYUEBL4gVdthpeJPgr3hcy8KQeSAPHxqKVAPpPXb8cF1KcTsfDdGqCpmJyEENCye",
  "key17": "PuC4WjD15P1PLc3rVb4dx4BNVcWMRyFk6XzrHS3muzrYDpbyXzKmKtedXB3jDMfiXLBYHiB5B6iyb5zoSzWyQzE",
  "key18": "JRCA6Bd9a8oH3rr1y8nWSCBwjLpkrTKooGFM17JNP5xNZStQEEtG6jMtdVfgnN8kwABJaCSRvvnVsXqisXzP461",
  "key19": "4ESjuSCtay16g6txyZmRz1Sfkv1q35h6x9Go5rJq7DhtiCjT5KZccgvUwRMTi8ArvPLAkRvsfafDW4JY3zuDKNpe",
  "key20": "62eoz4pBvrS62ay4oPtStMaMrGzqdzrSFxnkXHSkzBU3qjVhkZbQGQRW3qub4bovNQ9zzSQp92jgQ3f3suQARqpC",
  "key21": "4duzW1a9w5bhrtXNGmzgC2sf7mZUBxfmq3PG8ZfxRGy5ZkuU6p9FEWCVmxtkDv8nrA4sbBYUfcfDc7GzG9B3hnoh",
  "key22": "3Ash3f4uJhUMww6XTUHU39Sr8csf488QsMJUcQ3Yj6XWbbdEMFArp7VR3hbmhDCifQMCWUYcHrjnd1zLmdnoGxXP",
  "key23": "32bB8JRz7czp2kHwSeLhyxu413AcX7G4wY9iZXm8qM7PC4VRVbN1ub5BiRGjJwBeoSz8F7JBRKdcGHkfc6vmLtmM",
  "key24": "4SBWZiqDrmQGJZpE2vHNRoKRV3ZpTYF6U7K9EAN5a6148s5afgHt27vH5fusjZsvHU1tRU8n8B1ezjrMeU3D57uf",
  "key25": "4d7HM8F33NQEyEzmcqmAyJE7LmMvW2ErjKzNgkJn4JDYEcMzgFTVjzLXKja25ZuqpKrFCuvLXedGEeVkf8w222Wk",
  "key26": "3vMUb271GVgMyeyqCmE3jXCw6g93itFcTLe6anGxjWzy5XmqsJejrnY49yYsVtRfPCv6XbNxswdJsNGSyCtt8Kuu",
  "key27": "3Lkxstrf65z3CyAZ2PgsrWZ3X4LWKZKuwGUBoUJrxmheM9D46un9tgv8HVw3YitJfwPBk5HaSnorbzXtUB2mtP6o",
  "key28": "4ZZa47FMaNf6RP77ubxvg7sgASqTm1ncXKfqssFRKaChs9NpVcxFGNeX8MuN2wM2h6umDJSochC3kiuRybB4uHi",
  "key29": "5qLEF7GriDHWka1MC7HbnTnqr1tvDKLg4o6dzJ6B48AUokKLLSn95mGwxdu2uH75SmmWJhGxi3ui334Gaawgox2R"
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
