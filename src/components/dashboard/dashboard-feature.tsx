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
    "YF4DVHQSMiHNbyaDBEYG3RjBZFPvtznR3CxcxJ8qp1QehRg2fDjWuDFPBN3onLASZ1QAQAsBDhqEPhwxMFKG7V5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EwSoHt5pcdJAs2SThJ6wqrk9EzSPNB4qkwpuxiF18CCr1SYa4Pd6w3K389BwL15LAzAd7GFWrgzpzWYYz9wP7o",
  "key1": "5YZLJ6QkcA5GhBnqgrkk6WVJreLQqdBbCytTBP4HA9ez9YWtEfHMiC1uhjidMpr7eWcdqTZweNrrkKvq93uapn9J",
  "key2": "2hoNPmT1q7j1tdHeN8UW1qEUbzTpv2HXFdxPSkM6zUQZ8iRabe35xnGHcncZAwpb169CjtXNTmxHeoTJjab6RcQy",
  "key3": "PKUxB2wYiwvtp4nzEqgnKr7cMEJ8d119Z3cSKZ1Nv2pHw1YcrxaumUkUj3wMaZsseGTca9NewcXk8nuWpqXgGwJ",
  "key4": "66NgMA3BpMW1jUaC88digZ8wQ1tN8tUHeopCRc944NSRZPSWEy9G3xXd3UM2EwSQWSdxwEWCGVJe38B8cE2Lt6fM",
  "key5": "4UwRybDPdsMyDxtt9yVUNYy7kHxzEX56JMLDNSyGvBbKViD32Apn9XwVwb2ZbNpjaGP15z31wpB7gHVrMrwNdSVB",
  "key6": "3wvJrYTGPfYiciLSQiq8Gv1acBN16U3RTawHUAw7fzqCdZ8Cv1xZoUc8QHkkLJ6fr8kimC2cnGa8PZPQrU4Vnjbe",
  "key7": "3ojdQAkzWPyAbczSvPRqfV7sWTS7UG131GXXK7TGHahWH5bfUkm8ndjnUp2yxGy94ZJTGPF2PQKYCNgo6uZ8TiEg",
  "key8": "KRhSXEge5hkmVyqPsNtiE7gR9miiizJF9z9oN2LLy2ib5DPfHrL8syCo1J9rPpjwURbXpe45ni7TKbQM2zXGKiw",
  "key9": "59cZMRWgepjTQFpRRCHTLUfvHyBfsrcbtDad8gz1opNKGgzg7FS37Yc8EC7KbPyisoKwMbcmex8eUtNMi9DrK5p8",
  "key10": "231pGDNpB54R4YrjP7vNEUDfY7d2Ut9xkQ9121einUvxX4GWJ56bekR1QBTRqTfBxWiTW84dQNoXR8L6PKk7iD77",
  "key11": "4qRQwxcH95qkCNcosz8fQ7SZCk4isU5F8bx8kEgDMnENxfc715TmDSdWxZN2vCYQg9BwMYrZMT1Py7seJiS6NNpw",
  "key12": "4w3vBXSETjGUwUKC5Jqs8ZnCRpYcXhmni9QNPczoRP9enuXPUMvrTqBjbniGqDHiTBtSV74EYGqT182RrSSH9xUN",
  "key13": "3S6iqNHXidLPREfmUugedfSLxucsXKFb56XGpLHh5VcnViF62fu4grEp5otRnTcMbLoQf7DsZmL6jM7MkoMvfpQD",
  "key14": "2RdQ2sYFX2hdY3pvdispn5r2SghzHvxPa4E5kD8KuTbEB3GEdfY73fDAhTrYbULjWTemnfmxBdaH9WTEcp9pGC57",
  "key15": "2nRrWFST4qUFvCrc2ngApy4UF8mszU9eMpuWGjJeynnaYcGd5EHigYTaB8bee9e4ECUQpZdjyBrJ1CSjZ34wWtm5",
  "key16": "2L7JWFTaXQ7CZVVRrUA9EvLQbE3vRB4W3yAMRWGv9ZEEqtfBrcgf7cPX6vogh4kzTpeXwGe8fqKbUn1CFfJiTnsL",
  "key17": "8ikpZtoK7xUSu2eYsSiNUU8bSgUCb1ZY3bJbxwcGpvuz8ff9x5nnXo6w28j6cN98muaMnk89wTxuqzk8oKyuvRv",
  "key18": "5TtgDKHrHBcME4X5QdNrfAKXoFxBYiWfpFF4xGcmpboGsfUDKVN96HoZQL28J2xr3r41pUXuEy1CJ1o4mxCWzePF",
  "key19": "5wf9q7sCHVdYgqRLt2mHTPsQE7puGajqUDXcmB7fEFBYR2pYXEgfepNqJMFRUe2jUZ4KFox9e89tDzm77KepnF7Q",
  "key20": "55WwbZd1ubtrQYaif6LCao3VwxebX2sHB1PG25dKF7UhNxfpupBnwp4XT22FZSa2TNpmRc6bgg7LrrxdevihGjtJ",
  "key21": "yz2rEDXqruX7q56hB39Y8y1sHhwGSyxFpZ1eANPkyHagLeKPuTBJCqXTnu5SgVVp3yHkEJL3bKp3QVqwJckP3hR",
  "key22": "5UXC9FXbMYjbVipXHVeBbwRuLLmu9LfZCrJG8QSvCKUzC3mY2YnJrvvfayaeEDz18vmzCFjNcXnhnMvmu8hurKa2",
  "key23": "4HmJXd6JtX3mbZMnMCyLjXSCpL5mddrX1kXDCr3rhMdiPRRvtgKi83KKzXPx1Xk7oX2aN5WNWFJavsdCFdaAB16b",
  "key24": "51c3aws46GuuamQZZzncw3jaA6fZuiAVsbSB6ajsM3kjzgmWLHTKaPVv2dQvCPBV4JmoN95PkoMvuk3A7FWUbM9s",
  "key25": "Fz5d4FFVyAVm7kF31zejuGifBDLXj3NhyetMFszDUehs5uBorxJWttCLBPcFp8ByXxf16WoX8Knx3g83HVhafea",
  "key26": "5ctgbDJyqtygDLNwE1QNzAnGbC3a4R25k7U8Di3qRHoRHU3qXzvLLYuZDHUUdB2m84KrhYpaqvvMjQqytf1KhGuT",
  "key27": "2YijrCXz1QYj8XpR96tap8LdsqCFZUKJ4oSVMYtDMtuWE2gPZpSXB7czG6dBNYZq1t87YwUgwL9FYHEqJ5UKGtR9",
  "key28": "4pghho6VSFvVZryQs3BNuzrydVHHYtnXHdrn5zFhUqhXRZPSaFsFvPaG6gVzwg1iH5YeFH8LRDh6tTwJUfm2TdjN",
  "key29": "5JFoFybMcfpw1wefJUL9WFnabrp4grQ6mJzT4yASPYFrz6JUhaRfH8yUWzS9rH4FLKvnhEfJBK6NNdr5VXR43UZY",
  "key30": "C9ccLYZDJ1tQPoi8HiwA2MGxXVtsBvn9s5q7fA1F7sRbJqHREUFVko81trucHgobpbNPSAhkwS2tJVX18uUNxmF",
  "key31": "3XQVy4MkaFncy9EXhKTiAwBWBF9F71Czj4L5pG9f3r9NNc3iqFVEd1yPFqtf29vVc8KgfqgM4KzZdBtWgyCpKZ1V",
  "key32": "67NXTA1ZwYVSsTBQqRpQrPPxckZWjoitchDn1KpfPnwhp7oDFYhVqTGzqK1b7YKnWrNqtqVKdvoi52V9yetx7yW8",
  "key33": "3hJxEr9KPHhvm6YFBsni1roQi9VJe621NvvUGhmjnjCT7a2LGTdbydM3G6UuFiyC5ueRM9gp9KkQpnZJ7uWXsBgD",
  "key34": "5NN6KYd25xF7Szp4to3J774zSktUeG3rUUdLP8iQZnQvNFb7VihgQu62M4U8gTqPhh4GPYygDevKzTwrvixyU45M",
  "key35": "2xq1WhjhhRve4fVCktM49gLhhgsQJYcLyaZpMtcGksJM38HtSY9BLxAVT3PrZJVUrJecGh5BiefxAUzfuNDi87CQ",
  "key36": "48g4Mhy8VMeMdLnjb11Y981iWcGiUAAqnNsLDKMZMs65PPsFsszZsAr8utcUmCzpn29JqueE3AgyntL644PTARSE"
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
