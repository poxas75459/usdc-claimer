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
    "225gqVYcVQWhyF96u6vk3Abzdw16yh9tp7CiLG5KGkERF8NaywoByLxkuhFbMJmGYcHk6fCRGpjoqpGcC23rYtVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxtF9brTtsjmPmz8Z1Gjzgyt3N32eATobHjThWBqmnXTTPh8L17SjGZKJJ4MUZnPtToPSaM3db9iC7EEr1k56wj",
  "key1": "31eurxkvqPgdQGHbULWXVS5rbFKh2DZUxMa4w7gqHp3rTNNQrBNJLgShWvyhF4S9Eb1HDMT676NbvgUSrzKgZwvb",
  "key2": "5ymRAK7z5FdRUP5WJSzY16RS6Cjp84HDUjVfmR11p3hQ6w54G1hWC33qKHfjsTehst6179uvvjczPkuYrmT4pAyv",
  "key3": "ccMnfLAT1a4CBw9CxzBb73S2z73p2NfKvxXoM9egP8ZM6269X49VtPM6ooH2dUBj7sDL8cCxujM9ueDt4fbyFcs",
  "key4": "2sx8uomj5Ha5aMPdsKUM3JREJECtFSBHuMiALo6AidsW6vAhdsjGUMosMWMTzbVyFFF6FrTjkdxEGRJwunnnWZ6r",
  "key5": "4bwscxwpMq5codwyQeDah9WkY1oz7aqXBQygqDBCBiH92ygBQTJU8cQwXdyqpwLNqqyNC2jLGy8LB2v7zLGQRB8o",
  "key6": "JRZGZRy9NkQj8WX3yLajzByKzt9rTKzPQjo4VmSLhWuh2xgUgV3f7g5t3kfsya8YLmVdHsrZa5mXbQridQcS5zQ",
  "key7": "4qoiufbKJ8VfAdssWN19skg3kykQLQkXaeu6pM1mSA9xktbzKndjNE5FVHRZfrzXCBfTj9T9DRVbmoYidD8nsEEb",
  "key8": "Yn5NeMnYYU5Fjzb9dFYcmjXQhbBAvNoKy6shxF8xsswB2cEdDb1inS5oyB451aZXyvLqaPSRUbqr7eAAH8zJqDs",
  "key9": "247xPpAFkKcjeUHgx3gCEs9PPAR3boBnCqxpMMVYhRkmR5uovpAaxMrSoJkE2WY36zfk9GWQ8zjQTcp6aB63yJzq",
  "key10": "3ACyZP97YH61SdMbpjWcgvgNWoub9FAU5DzxUFqUU119XvRLr85QvKzk6z5byL1Sf5ivC9kW7nAjA3dggfRR4LSa",
  "key11": "4krVXpXEPX3b3yN6ytbh7zVsr7Ybq4v6xgqA3ezXphe6nG87HxacPenLj1UTqTEME5YKZntN6TG328ffMDJZVHCf",
  "key12": "3dSSJh7aLaKBqMVhvryEi49Y53RzXQnHPmFqRd616Quwz6XvPQJUQGaQHApbusk6hKdrKxFeWZcuXpUBPK57Lq7v",
  "key13": "3ozMWWgDEyrKfJxj7iwNc2bfu73mFEDmaWvYm7nuCgyhdNtF4tusY3fgeZKXjaLWB4ewyZMiWG115cgimLpoorAf",
  "key14": "5YkPoFQTSnV8uz8A3UDapzn2TewYQGMU5HtMHCoX7MXoS5LWTryXHnLjR4EL7EGkTCeKn5NywwX4FATxzbok9gE9",
  "key15": "2WB182v4xBCTUvi5RrLD88frjewWkb6WmCVkqb1u5rfqsU13BbrcHuJWT9JkkqR6UazxwaUorwu5GFWEpqQrr1n5",
  "key16": "BZQyJ4y29jP7iEMAUByijg3peNwq1tk4WJvdES2VSFafFtzbAMLQZS18y1K6rYJsvizdMCjp2fRWAXLanVuWkxX",
  "key17": "3EDPUvaPrv5qca9F9GvCt6V7zkccbXJk2jD9uvFD6q55A6dzBNRXXQw36Z7LR1jgQMaHKLbZndpP4fqXmEB86Hcg",
  "key18": "4nYobLUFZjRNkCj73nbBZfjhwQW5C6MT1Dn8Ah92rdFPvmUZc1Adt3irTVB6LbReRtuMzVXHkDtzxXKw9NAoWfWm",
  "key19": "5dXJZur3jJG4XmHCLRiZyt2qbLF61xnbuzCh1fWn3taTQrpvpHuHRjNv7UUB9SvmjBSTd5uPL63bXzyNDiCRBHvw",
  "key20": "5CigEKtxNU33xHFwFYr6sUa8mxABZTEAJK75aL9Wzi1Hye92Gk6PYpzEK3TBSf5ghVYKj3jVmnhnVSaPXnP7NMrY",
  "key21": "4JooWozee3Z2kHNLwDqAw5AJ5UsKLSv4GJWVkGJstc5gw2VYgnFwx1RPVkxMxEf59kYtMWd5uEfJeToV8wpr6pi",
  "key22": "4XHHeoKEu65DijRu9znXtaoYETbdf1okGEJvVFtAxPHLDnvCdUXdpVj34HE3WB3AoWUWT4UAQY74RV4fmcSaTYUp",
  "key23": "2HV6ybtU34Dn1WwobWugR1RQ2vDiCTFpb7fmFvVvBDD43UWZwpDAoLsNwqh3pZUqmQaYvFM3RgSPqPXwScpkaHy",
  "key24": "TXG4rLKvfdDbfX1xrQfucwZAm6j7ByNGiSYzCbRcUYuUH29vtJ1ynoDDpjrmoqnzm5Tx3dW8JYTudxnkp6Xr6WF",
  "key25": "2TTx89sDkJm5dtPGaUu47j3myjenVqjzRU54Y9uPgzSoBBtsyZqwNsDCQV1CDvVFdqtK5iJ8G2yWvYVKPGUUJ7c7",
  "key26": "2t3XkQWU9zbVN5ra72qkb5Yxojf4SabGKG141yQ1suWY9jp2ZfdKoQ5rRDHiednXrMycyRbVYuDy6Xcn7EcXCVow",
  "key27": "4shTyy8uBPxgqpaZ1sjBMVD2xvqmzB9ELo8coEufURt62gYrhL3DwfAkG5DgUaexN9dSu1fQUxGkb5rsMe2Epkjy",
  "key28": "AnTe3Nkx1q2VLrda3PtMLuUacTvnuyBtQ4nRSMVHjoZ9DQrJwTCPMnqjz67tC5E89H1sD4okU1g9FQriLh7eBPi",
  "key29": "e7e63tAzoyVCebkZmAgbBjfdTftoe2EX5ETEiDxGJdXnKa1kSUJRzzU3a7SQWEPDfx4pqbjkZHSAKy5jFyKKVB6",
  "key30": "3PQXutgSeoVupy9tYzYh5CwhKueiASHUH5LGDLh5udtLMydjHCMVd1yBe8MY8eCopRuz8TXwxbr7PFMgnd4g2zpP"
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
