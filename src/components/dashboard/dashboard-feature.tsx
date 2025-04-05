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
    "2Z4U2HW3ZnV5nCtXEGtkD7iADLisSdrs2Z526NC1KmqJxboxzBjidtPCdxBrpjKxn71fGUWYiu1m1jBYR56QM2eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duULta9tuUU1eXewqkVtCEKAk1hpUhDTxzLTpQmu824K66vkrAVASM2jGghj6PxE1sLfb7Fx7QqnyZNZv5b68tj",
  "key1": "2V6qugi8zKjZ3SEomsVemHRYDZuj1JHZZsr4pNu6i3HLdPj5aDedvvzDPdcvS8x6CLQGGJZEvuPxm6AomN1L8KLD",
  "key2": "2zDSPeMZctysLPRaFRrTy4KvLEezEH3mifkkKfUPCj8CPFQqWRpuCWCGwx7hahiwuH93cSXh6AR6oFMHDGmhQ5Zg",
  "key3": "3x9EwTVXx7zucGD94fDUWYqByEZQ8pfUwdGZquD6TZnrRs4Bg4ueoz3ooQKLDsS8K6ccwv3DWdoMS4MKTpFH8R7a",
  "key4": "2k1uBNQeydKXvg1bzcoaUR2dfzHNMQ4vNBNigVteZ42c6Q2jJyRzfvKYv2wPZM3yxNiq22JyHgQeqVSRrNmnMQUt",
  "key5": "2WkcNHBi3UkY3RnCbEWKTXsErxmef9vVstwx2HoPDbyKwXQwsEgPAtceCXv3CT39KtY9uFJNybNXAYYjtSx3yAdj",
  "key6": "9bpKaEhNFmP7YytJ9GRbK6ArTMTLcxK1WLSjs5t4YRiqiULtfLg9RNvvv8CtJGpo6Z7ZTMueC1SebBBBHS4yNrj",
  "key7": "2AZZMUAv5THoU5XZUNsjFcJyPHauL14cr34W9aeQQcH9Q2DqdQ6XaDsbMMQweuewFQpnTHk328zR1MK5pbxs4rQ1",
  "key8": "4bkn32hgUDosCasLUMrG36YFmUhgSdCDCZBMedVCKpQEnQvm6A3JrovVtXNWzrXYKU5f1jeaUtwy9DpZDpPzrxdU",
  "key9": "2JCcoS6hH7xYNcwhoG1mnX9FsCKj1PRiUxJFMTz1PN4e6nzYfWK31S24GQCrNbcD3CKmwkaW6XR2iAYpDEDWjSWu",
  "key10": "3LC5w2pD1u8xXNgUz9Lm2MPjkkERSqUis2P3mbrPaHmLC7RpXpZhCdSaeEbb4YNMEhQGFyCMkjnAwPLUQJysj3zt",
  "key11": "4wMD9x4U3pk57DbrF8UVkaNaF8GvptXcsJTVk1RNWMManjav1QGyKzBiXyuLcm4E3Y1r6iYF8uiyjpcbfc7GGKZk",
  "key12": "2WY1jhZbYigr9CCRDZw51hP7YjNYmcDSbJai77q23UF5xb8aPcotBgxw7SLwZCRBQgSsB8rnLRiAGta7pYeZDbLR",
  "key13": "43mswAXAetwB5KcYzpmNJZXezQsiAcrEXLgp24JectQ9zgMN5D7TR2hetBNuU9sPRNtPtqwkzE7UeS7gtXGMEvrD",
  "key14": "5VEVWNFK6jHj5f1Lf5MVaQtQGZS2LDz9q89EKtv5a6oFEJm3tpSJMCG8TCJShQ4VBkbaV9Nhdkcs5sQPg3zQur9h",
  "key15": "uyCtPRm2ihxBKKHQzxPeYeY1BseVpvJ6rBPdzuPwpoBRBHoAXHXXWeuudMYC5jhb2yUGfGKaPDM2866c4QUCwKw",
  "key16": "Q5ZSEoHpCJhwvH4BpSAzGvkJ84QbFwQFfDP9pqEMic6Guo6XMszQo9PADAd7PqFV4dH9PxiurXuvJUNmgYgbHJi",
  "key17": "nzHWCJRDV4GkWsCjrhPXvJ7TTbNssu1FzZK5YFxPMyC2jFzSZMHFhiBH8ekG2dTtwUGAB9imC1uoTwCyJWrzVNW",
  "key18": "3kXREDLfx3bWYhG9JuZp7bJXtDJxZZR1sGYC8sMNfuZ55nQNnuhGpAMFAHaQZTXbmSvumZzM75oh9gfakL8i3V1D",
  "key19": "26vWdzzZHZWQ5z38yfWSSioq2Y4Mmzc6ANAY52MpWRLY8Fv19hF6dqrBDfnnnr7FLAVZ276uwpefZxJMEVhHqQwo",
  "key20": "3bX9zBTd6erp2LP5ZbzqYHBvjDHQHW7w1HEVyLrRfquqem1UJ4eE9QEVCxJrxzQnjT92MoAgDWuCPsb2bpuGWNLP",
  "key21": "5uTYZMKcZUELCFkbcJTbiLf41dDW7wVp3HaFmy6BXUEYFcDUKRSsDpxGuHdfbrVUtCTk9XysMWp68rGEpwywcmeR",
  "key22": "4RBKbBYnxqkeGAZGYE5DGVFW9DssUdszFtd6vLbQepKEMQs8iYKWyYic7kmA5gTieQ1r5AXie3ifLzbBHrZckAya",
  "key23": "3CRn1VtLM5i9miL8CJh5nDBboF8TtkWNX4gqFoFjSrXYuapRrYbsaAEHjjGamonbgWgHGnEFhpNPgnwkYZm8hQbE",
  "key24": "w4s6qBRngLoJDGwHnp9hp13G9cjep55ebWoKtWTGVjwMwHxirxsZBZpFv6eYYPfXLhvvf79UdC6zRp7hZ1YxrNM",
  "key25": "2h2VFmomRpGTLsDYMkE2RnTF73kWUHAt1yh5HkQQTF1tHTvKNB1guhMDZ5eZdEzYHS865DzMga7JsKg66dWJiodS",
  "key26": "2qPKAqoXHCyDyMUgCGUtZquJmxKbCZZBtgKVbpHM8nra8JaAWPY7hFXSA7neuuoKATDxdj7EdG6HPcW8cZpyWyWi",
  "key27": "3iwCZ6MG6x3Y41gVeqBfF7HkBNWKxDCWmMj9TCksKjW84AB8nSVKRSN7XfvbEsDCeV1a2cNnqYtGYbW3hqxY43E4",
  "key28": "44ZgMY1mZ3Dr1zrW7CVtsA8bhRtjhpfs5ripSFEFBKSPvbDrGHGGDrrSE9bZsFBoQZkcf8h2AK1WVtUqhghErsaP",
  "key29": "5R1ZPqEsKUg2NxtZ1TSA2wQWzQBxdQuAHcNJBTQnKrN9WyhJ7QAXrD8ftcQmBdVUstCGhPCig4wJTN7sqBQ7jRoA",
  "key30": "3cMoK129B8NHxc9BK8vZ8tyGcBJhLCGWCY6bXgwGXTAZRG46YeKmC7JzhUwL9E6prbYCJvBXUGwFGzRrZvMfgDYP",
  "key31": "2Zv3eR23BnREUhZtY4YKXC4pkgFwCopDyUjTvHrFw2aNfa1nYh7pX8TfUTRB2i2GMUTu6GDgV4ZfM2AqVfkJ9dQB",
  "key32": "g1WLWKr9u7PSB9NSxs2ePDMcGBwqvdGTuALGDaLE9hd88mubH1bP31PRgcSprnLQVBELX7v4y7QDYVRLLVJ1b6f",
  "key33": "3dRdBxbsBnr1nYBU2uJpfiQ9CueSRdpsZXFuAHMc4SRzkQaZq4R4GYzgFUJPtEdiqgxUutsMEGZXz2smfkczvtr4",
  "key34": "3ZTSSuhDpNdYgDvQCX6ajcAoBp5tpvrBQzsUWUv3jWiHkMYQYpcAKYTAkfT15D8F9EBMevpHhmUt9wHZJvd6w3TU"
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
