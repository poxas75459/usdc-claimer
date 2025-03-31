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
    "4ojZBMD3e9G1mskQtPwavUUgPVkQCzwLnAGsxtMWdnvyoaR9XUPmpvDXxtRPfNMgeJAn96uURUek9zunVAexyAwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ptwe2kpzVAMNeTotqWe3pbbCY68ZqqSyyD25UxAAKVaZKToavJtmAXeTNsVuScsZuQYWkSzyk779fpPp6QiJ3kA",
  "key1": "2c2dGGQoMWy4w9SDYM9czQK8yQouo8dCuLfE4WcHB7DSPZWgSqTLbsRfcFVjgEWL3n9xNFaQaydnCSEzwHQo5FFA",
  "key2": "5BCyn14SgXA9gxkC9RzXWeNNgGqNMjEZ8PayJt2tPfXgZWNwgJ3Nd9akie21nx5mBN4gDfNbbL1t8WBX14T59Y5W",
  "key3": "deFVBwwTBuXqUB17roFZFz2KXS1QjHXmmt4wPu5hgHMbBJ169Wj3QSw2ZoGCk7fLjZMQujqQKcG3eW5Qy66KNrf",
  "key4": "BM1NVUtmjMYxLqA1udvYNapupV5teXuadBMwDaMcgVeekHhm9ZpzF1zuusiRkuMggo711bi87DLV2zkQ84Ge54B",
  "key5": "24bwcmoJsb6NL9QsZ4R9XvL2UDjJ4NVZZaF1J7687Pua1TtQDE3vBSCcJJRFUwdixdxjGMqrWTUTXpAnroWuRR5R",
  "key6": "64aLj7q3wC5UDjb9LTNrxpy15j5WB9FU83EyUXGtk7KywiHDp5BDe3ZtL93s4T73eJifpjTowuAghtAQEzFyasnX",
  "key7": "2CQgBYjVXuHJRq1JN8kHGHsn4Bjj4sm5JLL2pVmm8RjCVyvE1oJfeQFGAcqbVrAtyWnGodmcuBRz15ynk388VTpR",
  "key8": "2aG3f1qhQVhqb6qFb2RCQNYQTCjadppikzGmsdLpNsbNRop7r8PgQSdawmJPzYTdmPRWQDLMAZHrzPseDJ3HHPtN",
  "key9": "FD9CdxmJs8uCLDngah8g5Zg7WQPhVS2PF1EHixpAXzUMEWDBRcbCRDm7CNoR1sxiLUJwqUK5QeaySALBtsp1PzW",
  "key10": "2xjmfZ2uH1aDwRn4TKPwV9UfvifA5bYhoZb1LVzYYCqMKwHg8Hkwym7QuCtUVMNDpGJW8dopLZywN9jdKsifx7wY",
  "key11": "rqpfNcAuqrWkVHMuX3mLoHNDvXipqSTiLyuKK8RrncNLDpB7AzZUsc9H4kpHYMhTrsSP3ZrQ2m44xuF67ZRyZvn",
  "key12": "24vVxFL76nSebfwXBvdBQfVm9urV44JL2EGMdTQvCAno2uP7iPiZsrraa8r7eCGyfr81GvVir86fWXvCef8xYZg4",
  "key13": "fN3jDocY9PdVoSwXuHmsfHjT56whjh852Zas4HxfvQap97qNjsbf5tQqPmr9Dq6aDppWUasGPH1zw3tssHwrdmz",
  "key14": "5jJmbXYG3y7USTZc3Fqim6Dme7nQVTWtV8tgctvRQFzokg7qS8LKxXejHWqUM23QCj4KJNXLSRpYcdZ3q6r2NJrr",
  "key15": "43swCSqA8nLFXEVmx6LsKiKA3wtDPpufXXPn8pGrhYDNfukfwSfbvisy9d8L1JwVLBcmqQnqteEae5XJnSqdLJJz",
  "key16": "3aQPPBzZijdwasY5FDns1KjsPy5gM2rqnK6R9SYeXgSfREb8tzi5EGEBwdK7af6zumPCTfaBACp36GfFV9Kmqmsm",
  "key17": "477ZkxPTmi1avigYytWvC96faa9fYqwTofN4FFHYDHFMAgmKYQzkCtfN1dP49txdcLz8nzVqW3k93559TN18vFqq",
  "key18": "QGWmQed4QbowJKo6KXT6GnRFaBs9KfHXSt5RQxZWo3gyuAzKkdHa6L3yEYECo6gaJqfx96pkg3KQ5PdeEA3hhSh",
  "key19": "2FF4DT1cDi1Mhni6Zr37BZXT73ceQ9GAuH4mcFs1WkDxP9fadqcgRWsDZULszRPGQkR81cBNJevdfDec6xA5BF8W",
  "key20": "yQkQ64MYWPXikSa15eN3myw7hH2wB9VgvdQ4WY13k7GtH52Qej6GGNHupWRkmer9M12E5a6wgmdTtqvMvaBfQPR",
  "key21": "5okpdn3SEaU71uM1hPAqWDYdBDfnz6JV1cTcE5gzL2wy1FCmYEQQhcW8LBzzMWqwNnkjFmjUowntj9sVh2fpBsfd",
  "key22": "3JPdj3ayXxQUHNjJbLr5DMVLgdrygPZPjoyreMgHjNcUEM4G9zDo9yEosjzieffJPCDGwoiQfpkbZZwY3UkFadii",
  "key23": "4PiXcsgngf1Nqt87AB7LzC72k4BiviX4LtFTyfGqeb4rbitiCxaobCmQJHjNuf8G3xkcAc5rBxSyaukXT2BMgXg5",
  "key24": "2ViSxPeWDRKFD6ETDvR3Uv9X9PCaEUTVgoBoVfzeYsw9aqx1CCrJ8E78odeUh5i1tedFBH7JUKq35XbdeGQhAstA",
  "key25": "WwQEcedemB3NCHAwcA7j94cVq7cjvWLgGkzuf59BKnXodHkxTzNCPbJMHCtsD8nkk1BEwhmV4iinT95ijv2Kxza",
  "key26": "4kNbYiwXzYhPvMAxwkargx5y5TZzenqTVQBrsP96HcW5XJUQehuXCWK4smc1W8BKbvj1DVSJveg7mGH5sUoAUvoy",
  "key27": "5Hy165ypwRKmSbBwD8mrMJU8qdG1qbPYweCKG4uLGQx636wWfwjyjs3MiHRtckVvy95W35hMzEe955Ct2zYSaaCn",
  "key28": "2aPYmijEBLSSadojvfEyESEDb8XK7fkwZLNkyuHhKjZfhjNPYzgQPdmDxTwqdbYNXFEybMZwYuu74mtJdmC4BKkE",
  "key29": "C34yW8e1Fgyw42nrn93GmtSwQ5UBYdsUGfgFBBZwFGD4xuPZgDiVJWQUvyRawvhVh9wQ9n9Cjw4fLDFWXCHW7ES",
  "key30": "4M5rKDCsoqx4H1MHjKhLnY6W4jfcNreeUDtovnYCiHUcE6yYVs8B2XMPezcsVBnEurXP5rHUMwcThpkYkg3oVvSM",
  "key31": "221tViKMpW4zDLgfcyXS7BsPBkrRr5yZVUJ4c8MsEDGLaX3nAhQrBqfY76S6psmrMLDMRzxgx6E7Y92SVkAGYK4z"
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
