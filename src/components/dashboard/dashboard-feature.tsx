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
    "53AtMgQbkakzLveuUFMWREafcd1EeFemJe1iQA8vD814uEoY1eNAYv4MUoa4uBejFLtTTyFSUEQpcyQBXUqQ8MHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AP9oz4J4BNXvNEhEiK7RSBNbcqtrtTFpTpmTSJkCMtS1PX2p92LAvZtNDBBWiKGTuHPrPpoZj6ohjSpsDTunE1Z",
  "key1": "4C91eirgRU8SbKmRNdyS5niBKPa6NEx4mfVi9C9LuMVeueTcejhZuzg7vw8GfmrjrVz3hu5JKjxTyykqs9jKTN36",
  "key2": "2RdE5cskm3jPsKhRQNQQpJ1wnkFxh7TXxQQeBfd1MnpsycaoXXGDXrtY37W2VSNAgNPcNoLv26ctH8djNrErUA2t",
  "key3": "4XbUNZLm1XsQQjFgrTkbEexQgdnXAVpxxcYmZ4b3rqLUkQyfeTgFzgssgrD2LkmRs1u5818oa8iq5RaiAXL35oZA",
  "key4": "5u1qq36jSvm47Vec62BCYdsFX7fDPqEwsyQvTwUgLAUJFrtw6qktMZWKiyvMGUWHiESy2V3Hz7qabe5mNBUBEyvb",
  "key5": "3BJfT9UacyREhEU2uX2LMu8Zh5o7uMdfT6sZbjap3B84XiD9NqtMWCmqMUFmhDpKrDieeVgbuZJvHeP3vBYyUodu",
  "key6": "5pUoDc8fZxenyWvV8mAGGxG6rrC6MKL6XAoGgE3zt6KqBP2ukiVZmsypDDE4Fz9Bjyd2jSgiYktGsx3YNvJTrY6w",
  "key7": "4GRdTFs8w2HTLtGLRR9CXX3pyvLQ1Fz6Wo5rG9M9W2iqpigm9cG11WGg1e4bjh5aRLHA8h9K3FaHnHdbmkvTcXxt",
  "key8": "h4ahtgAgKZzr52jTSngX7DG3Uqer8sJxdvrYjJKjD9es5mBaVNRKTTebAwdeQ7ngKGA14Xzh5UZWy1eGCSh3D1z",
  "key9": "3uEkp2m7nWo39r2q9gGo5KgLWaXBDqYjruSfHivVh6CgieJe4XybZhfkbwMyZZfXvJKbokW4hgFygnPt6fzWH6xH",
  "key10": "471fQbctBddFWY6SmefGp1U6bq7942rLwjWKkEW4fibLGWrZ5EHGWXzKSN72UCBS1CoN6Ad6AFQJ6ovH7MxLzF9h",
  "key11": "4Ey7V8uvnZ2aEJGBbsUEnbeE6YoJ4Ruedir8Sp5kjnvvfcaRHndonRm2stLTFz75pVV3T2bwTtKYt4DNUHJyYztP",
  "key12": "2iN7aYkaWW3js2JXNFGgct5jrNPh2qcyuE8FSKUtFC9HMQBxrsgJm4iXi41xR2YFuE3SDwhZgjxSJ8QTbQ7XCv1H",
  "key13": "3HFewMzW6EbTopXuT3Y9jA7wJX1jiEUmhTKmB9bssqdiibYcXZuqeiJqFUxPu4gSd83G7Cj1zQqimQf6GuugUyuM",
  "key14": "5eoGERLSrw5DByACxjHzysPN6kkatwUr1TVKmGeRePonVa8eXcMrh4MnhagHMwQabnKR1U3kcgZXkS2CsxrPfPGo",
  "key15": "5UnA2AJvh6pB9TDxYW1m8JkX84Z1Fc4Uf4kwYSDQXJFgf7XabUnAux9cHuHdxQtMBxUrQcGxYxLQaPMxGQGh3fAo",
  "key16": "3fe93bV76GxcsY7AE2mPev9x9EtubKGGyn6aR6X4KfZUDNCyFxJL5yR37T9Eko6eUrifPGkRoqA4rk5WjdUqjg8m",
  "key17": "SpCMZss9GpDBZS7YzZp7Usm62pSNgJx26t8GHrKD7sLTtc1iSqYibcDVufgVFD6tumFtAVKzd8dXoGQyA4Dic15",
  "key18": "5DBcTVe77tThnr9taGaoBjZ1AHJwwGjbZGDFUuNpANW8z4p3UAENrQnzvQfZWZ9W9beNV2dkXwMg1c51aEGUo7Li",
  "key19": "5C9LL8bPmfki6opvQ3bGxttfuferi5vj4vqJH86UsXunX1xrNcAjLXgNaYm7Hy6QZfKGDRAiAB1HR5pnN4ADehuU",
  "key20": "2GugqoYNyhGgHyqdwti6SFXMN6Kri9v9LhvpdYqRZUK8jfEtGS9YQDcGHCfbRfqW8ktx1As6GBKa8t1HPeQvyCUP",
  "key21": "3CtERSJYY3wdY73HkkeQQ5sZRo6EQeSPcrjeTxXsHbarxLY4pXuPjUR4aeNRQptANZ9X5RUpRSieUygcW5NvZ39r",
  "key22": "3eEPisbk69FLH3g7QTRxV2owJ8FRHNcfzk8W3dYcicyPoBNPPz8dWnrSG91XfwLfWuZb7P1XLn7JLuSZBj5fnzLN",
  "key23": "5zHjNEU1wUoAcY3UCQLowXxY51ZxF1mCXSdqdm1tEarGTVLwT8PaxC7SyxVsoqxakb956HV4EM5QFKrDicvS4Urm",
  "key24": "3daWFErKdHLBYhSDtQ8RThA8dcDMESaDjRqTz6h8hFvbQQrFFrfdafPgpydH2EbwWxr9S6BGCyiwhNyoVKVEXGvw",
  "key25": "5FecrW546DxnVBrVWnUyDZbcHskD1EMKBnBcfz8zgy9SGr6CmC62Rg9cdSGBkVYdD2ds3tnFJGoAVRnYjNTCtQYN",
  "key26": "46JPEPAB1dmCjatU5YDbQuauSyZjuXu2urQfW1XUd5MZWpB2sE3kVzVn4hsfy9A7mgJWtX3n24CGdtunhs1W3YJL",
  "key27": "51G9jW1w5TfCT6eLD1f3E9VSgDbzXxDEi8F337vGWQHG1NEWeUxmtJ42oszBmwVEGdA64tnVEvYKCg6bYMNnMKj1",
  "key28": "t7dQ66mxGvfveYGxPv6nC7u32MtdNo29ct5aD9mmzeZvpEmAevrzKuzz1SSRxuMLGQbkW571XzouZ18N54Nt5CW",
  "key29": "4ixqsC42pNr1CFUdwjJk2tBHR96WuUgNgBjcYbD1Uv1Ec7V7SmyvQKofnFRCMPHqJHF3brEAnixdo5o2NhUwCKMn",
  "key30": "A8wuZUsKo7VueVLJoMEXUcfTGUkGXJ6CCwiMwLeJei5XvXViqpXBjBVppa9L12RVKsFc1JQXRUzF4uFy3HCgjGX",
  "key31": "2uHspvnM3UJW9w99JRRCBHrbSyiURAqhkaLzCuPPd8923NanUPnFducr2fVZTAb1bVKyK1jKDHcLn5254BTGgVgt"
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
