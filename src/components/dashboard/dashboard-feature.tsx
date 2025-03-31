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
    "2B9Vr4anAU3oSAf5L1E1g654srpYoDi6VrhEjFnHTH1kBSavJtvFwc8j4EzipqnfCe1NUqu2djuBXqTrsAoN6Lg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t6vyUUhNffwzqmK7WYM9TbuPPYtBUfukLH7CVfD1iHUmmuZYdcQXmiehVinmPNshgykAAbmFJPZ6PdmYmUWNdmf",
  "key1": "3QSRF7We64uG4o2hFRe6qQz285zWgpdE3mjCZHfQnxccLQDUMHrsYes6oat6t8pJpoAmtLBpLHQ8piVKNDKxMgLq",
  "key2": "287yVxfFu71CPoJdC4hGVLARX73shR8nTDGVzcdnFecV5jgNhZ3GFD8Dij2Ed2cgkG3wU1do9iQV74weLqfDJm65",
  "key3": "4dLhuDrQoNH3o8BhmLpRREWdXciEHSQM6VAWfqgNNubi161ToKuH675mwqa9pfc8FbYL5TsC7azNTT6YvkTB3zgg",
  "key4": "5xk9wyEXCnZULkLsoiHQ11MBAwdVgsaaqpj14WKkfpNfY7go9CnvGbEoFJxEE2P4v2iMvFe3ZH6YdpEg5iKxK5iN",
  "key5": "3uRoKrsvq28fRVDnuRSMDi2UxNo4o2hAiTqXEjRK2adD7bEzEGGPdFQqb1evdtLnjcd6Wu8iZHFjCuKGS1y5z8Am",
  "key6": "3WbtQDHhQEynrDvK4tdLEsi1gM9wfkzcUGaPbngbkS8QH8bVAcSQoYG9G3pY5NVvhL7CUbFoMAyC9S4G3YnFkw1g",
  "key7": "319UQqB3mPQ43CS2qLh4vfYZmKiXBUqZ2khM3qYNcNuoUtyc2jCK3vYdawfRhqTRYmN5KkxH6ofHvkqXPNHPxS31",
  "key8": "2C2p9LqvVqqdRWkG8dj2QL9SH2Htbs5nn1PzBZguxgSpXat8JC7RWk4Tbmyu8Y6Wz3nsV9W4dpTgxZjGiUbU3LmR",
  "key9": "5DVvQzYaqwG8ARLCwzCd5wBJHihEUuFzmNdMqKJxgHSDdfFw184kRefwdhhpbYQzU5SgM9dUjMbxwHR5DPjUDFZm",
  "key10": "eSXUnTT7w6ExcKPifDmbHWjehmC2n9eEXjh1Rdw6bwNfpzv9c5eg7KRfZptavcxj57Dg2ghc24Fcguk4rzCVRFg",
  "key11": "5HwdjCxTcKSBteX3TW7skqnse8cQhmQeEM5kfJ8cZ1PCDNQf9i42waXc3FoLYUAGEgsFGc8Np4bHUWzhsS2CTVUZ",
  "key12": "2Nc3zFvg8wpZbB76cUkkuTYxNVMfxog4FKwD3UnRUxUURK3muoLQs5hzT9eeitiB49CpBwaH6bbJqquZRgmo9PzH",
  "key13": "5jZ8fRhk535yeQQmbbqzJw4b3UUNVw5bgyMPWU7f4o1biEstNdeEfd2YbL6h8qC8FnHDRwkiw4gAYZw7iMAgfye",
  "key14": "5HGbz1QE1ZwhnRjLAor2YDCLzR8BWbRnbPMmikRUyLFRAc8b1GdAwbzKXgRLHi885Q7cGZRXZFoHQbUhSG8XwXNm",
  "key15": "61MjaHaPAq9YHHwLJNncaDvgRtfgBBcVZrJbhWNp4zLWdBBTqs2HEvzK2VDsnnqpto4nG12DSP6UTkVsCRmMHoBh",
  "key16": "4tmk4kye4RZJgRnYM1jRaLRvFwubmJpVctDjQegT4s2pwYbF9HKsy7tdNmKHaY8nzuZp1BRmZ9yR9CmhQUQ2pzeH",
  "key17": "5QW2QfYkEtCiQMuj79e5dwP9EoQG6SfS6YaGbPUtzsyMiyTHdVcj1vMKYoeQWqVXY3UJSaczgZi3RQb24yiF1YvP",
  "key18": "5zXefJWY7c3MRAN4QvEfMRsK2E8CCinTJBz33daxzxop5tEqm5gJkXpgcNpwhF7ajT9BXrY3X7g1Sij7bjVPt8g4",
  "key19": "5z8uRRoViDn28C9USeMY4JTKLkThFzQscqde31XLJB7z7LDYKWGwnb17RyrFf54qiCE55n9A9qFNFyzUte2ZmWfZ",
  "key20": "2pATn7ByhvL4ZSLP8TUsmN3Z831sY5CcXGzp4VHdzjqgvG2truVmtBDQK7qESH8DUKqnSc6tFtJQmkfayRmxpize",
  "key21": "641rGLSJqeAaT8UCTYxKC9ikw3NjCGU6sE4UwcfsWQArBRYnQmMuuUfR8teeFK3A3Br7XnHCzwuBxrbzJXjCDW9r",
  "key22": "5zEPpnow5MrzjrThPj5rBiBkWXT3acfMSJd3dShbofpuhXsoSwKdDrVW8aWeKk8rKuEtvXxo5BiZamyecs8sNwqg",
  "key23": "4UYL4bx4Ud69J6v9cGp6FeDyJdMYRc9ymrPdwXs2SDjqAzcH7ZCya4Y18p5oQyHTWxo1rziFC7gNCZt5U2HvSTN8",
  "key24": "4gUGjnQh6HNJkChdwLSRgeuwYiyqqHrERLhgamZ4hMbJzcZc5VFJsNSf9XkJAVyaW55nU2j9khYGjXtLLuzVgJD",
  "key25": "4MHvTczBk7uoH32ikMgKdvUKxnE4nLoKukCswuxNEnHX5tu48Xsuo2hZbWRn8NhQ48toiUFEhRzX7YHSTfMjgtKy",
  "key26": "3Bk1uuPmYCzY5rga2uzttCNgW691C4na3QVCxq5fAoScvAA5tWFKKkxFtgdx3jgkLbmXLbu1MKYp6czp4z4vYBqD",
  "key27": "4vr3Ga2Kh1pXtdebNkcKaP9rDFQ71oMXLpGDu4ScLfnMqmEJaAkDTEpCZL1Qd6aqQXLkLQnBiyjwXvJ5TGG2PfmU",
  "key28": "4UcPPsBU9wSpeFLdBxeorrF6RZhKEvu2SJ7QBzZwiK8y2UhPKThW24ELcDgiRBS15pyPdn6ZQQAAWyQXibAVrc2y",
  "key29": "57viF8pEC1Mbmint2hoD5WSMAR4NrPwEBfhHvRhPvqX5kwpn6ta8zFcAWMRmhAhrHgY9HwpYmsAd6mWmHNqYxcSp",
  "key30": "5sYFUKWfnnMYPtHbULJVFEpPSEEvKG6LftQEgFnyhgUk6651ztQJfHSF9dcmxyuiDQQaue4kYowCqigHirQeJoi1",
  "key31": "mLrKHDSXHHRZ4uKQKWAh3Ukbdropp2aTY47hfTHXkEoV4qoymxsPwvTdVyubmVTiaH2KV8HkkRdtqWnniGA3P6J",
  "key32": "4nx7XYW9HeX9QsFvwAesKJx85Wyk1aPYkehRFCCPBFHQagxz78vDXhtaxKrTxNBTxJB3FGyQTdSo2R5RjaRSiCyH",
  "key33": "cXdMtvFf9A8DvbjfcHYQQbq3CJa9Tvu5scCUT9NWAKzxjXzJQBx4uaGgbBxYgWTPpPm98tjrusXRbjKauWADu5B",
  "key34": "2E2SrPFyGMWk93rmuDjS5qjmAZkCRJbytnrL5TWdMJ2ZtUuhYKHa3aFZpLy9kaQqpVAXfcne42VTKCJTty43yi3x",
  "key35": "5jesYkns9BWz75MCPN8iJSnoY6AqRaicvjFxCZjm71M1WSoDbgZJ6SMiFsCpQFpHqPPgCt7vGmRAjwCHqnfifTuC",
  "key36": "2CA3Kw6D4pxBMyuTGPgc3NH1yJLTYT3J8AvwDacJ1qrbrCzLit8JUAG5rmdfwGmgr5zisbx8MnRms7Gwejs2RGTW"
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
