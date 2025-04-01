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
    "4cys7YeFXbBi33rSrnuq4BMKXLATPDD7u59RMK2JyXXUs587Uw2EZPMiYroonNZRHpaG64WDvGkMVc6txKx2vj2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aV6qyn9ubE8Snar6yu18K3YGb3fFqcKUJfH1w7UYngL3YBQG3hCHokWEhuKYu1E47wF1UW4PV5SPYiVMYSinUbP",
  "key1": "4a6FTnjwUagrNWkq1GWDRC3yFqbavDHdWGe6S9C2GdmNDZ6hs7gdbiuKcgGayZdtAmFk263YpVQRiREwgWcbxR8n",
  "key2": "MZA5MEG4WGiSHkSLmphdWNqXZ77pG8z3SZKGv7FSbPGGr1XsYmTuXcjoPYvxobLrP9Me6wtn9AVbY5crhGt3nPQ",
  "key3": "5phwtMgyVnoYHWBkYTNFv8ZGTBpnpTeUXn69EgXHwMd3m28tZg9kx1g9BmKyUSe9uo1oEX6zmqrb2U9DKsksGtJc",
  "key4": "51i1nNEXsq1Cptskefsmgfozh4GbTqn73R2VuUjhihSnVZ7A9CxBrH6dFcvFe8xoTC6o4aRvZyzUxuAn8Xd3JV9z",
  "key5": "3ULW7CEqXHTJjvbzf15Q8ViJs4zFgFu14hrgXy8u8bdN5YKUAGqvrxtFjSM8wR53D3n4S6eaj5bax42vbztExGNE",
  "key6": "Qz5zvMmmjJwNfhkuEXtoqL4B6tUEdTSGoFH9Dp6XA3w7AxWfpBbn7nGaVv3kZPeRdoe16HpVcDVK8bC5N5LyEC7",
  "key7": "2tyTJpdoPNoF7NjKtikZr1JPy5KB7Muv9KX47Gqtwf5cscucjWWB2eNGFXQTHQyYqvocdQBFPZZzFKhD48PD7E5E",
  "key8": "4B7ULs4ZwxQ1nWsUGb9EWHUg6hUg1nrK7jpSEuBaVw4m3aZcnZs5rtKJyFsPC2xN6MEd9jaSFRhCbqN3kWoKtJ6y",
  "key9": "4FtRkrtpkCu3Qku3yyKWFVf9phJ3kbdLDWdibcJDuY1mfEi5bw3DxXBZzsikdZaunxRtgdj6nyjPppiMZvXDentB",
  "key10": "3MRxHmcebFkrw5yTKZcqopAUDcpn6e1hxsFuVNP3Utssi67m5iZxLGH8Epmt1BDEAEwYbRWg6trJexgyegACMzHH",
  "key11": "3naMXFoYg4mi8Di2GA9xdPjWCqXundU6CShz6n9GUDa12mWcw1tDotysirNg986gWuGGptuKZXD1FLY3KPhtsSeV",
  "key12": "3q7ptZAWBsmi4F4pfqQEm9nFesTWGqMMrXKk35Wox6ZCJzuqe89EogARMXgvVBPTpcDS7MnbTFkxMxY6fteymtwu",
  "key13": "3nFrRgJqBN3AWDTQT1kNSRDiZAdit9gSu4t8dQKvvRKdmLrqp8kAKsT5qjk9DJFe8PR3bQGsrkN6BwGvdL1BhSFZ",
  "key14": "5GHs9Ta3JEUV84JDDtYbvrQZ2AXe9kcPW6Q1v4jjc4PjALfmBz2PkXMGjibSJTb65MeGQHmMWJRBQp7gXakwyCEA",
  "key15": "5z7QvxQUUYsk5WD4iR9BDgoRGf613FHYZEeU97Hu1Czgu4fk7erxzbzBwG3YTdueHWRBitsg7Z2oXNUJEwrFrVZN",
  "key16": "4QMFvTycvRoxqfdHh2sY5isBEVSY1x8Qw1Ldh9Y6f3yMfLecFPHTc4ttH3ziJnTWp8QbUcM5AcGvX2UWmqB9gNT2",
  "key17": "5WwkXY1d2StZ69sYKsv7qJYVu7DHkCXs1vFoZbV7ExD3UnWZVyRpaCEaAYXUub8gE3wTUWCgYFsC5xp9aK6jSnSs",
  "key18": "3kh5JU9YvsBwgssiHDQXGzgvdkESqKKaC3K8zJb9mPzcDvz2H9JckfuW71BnoPNVyqskpswN2yekW6rF945buq4z",
  "key19": "2XAtL9nn8Ywb7bYajVLXeyN4vwKUiLP4YM81xXJNeR9uukE4V8r5zgKr685uM1ZUUXC5FYhYap2x6bCFn2pfb4SW",
  "key20": "nm11kLehdjA1Fm5vn2fATiXZn3EfkQLrR6cAiAG3B9K5VhzntkxJ24Von4M8vTJ5hCgHe5BrSdZMSwSu5WbRF9X",
  "key21": "37UWJz52WHDRVVcvRyAkuXYA44gwWRnfnmBMBy7icsKjBKAsLniFTKrNRCXGBkgomZBwHpLm5ZhkXvfNrpV489g8",
  "key22": "27CPxZenLyMaA5octewcE6A6Pr1ekqF74t84k6frBAyRHDCWMu6HBQDDgKUFhCFjQEz1yVq3TBr4r9ESRBQsLTH9",
  "key23": "5zQdrrcs3Tsed4n5rmoytC7nR6sxgkGmV4JY9m3ZeGMjEkrjHvGcyiUPZQZoYXXAqRywsi1tsJ4hghXj8uGD3vfQ",
  "key24": "5bkx579pQpQr4D7oSMEwEJ1rmv8T3DdMuxXRxvcQBGCb8FweMxTwKs9hQXJbRyiZWgcj1G3G1Ebxh4U3Pm4yqYAL",
  "key25": "58Ee67y5W7y9ZamRM6BvQWK449a4REWhM2fL9WgRNZjRZ2BkPKmSeSbsGsA2FFvDj1NtUvZUawQi5GmiLHDkMzi3",
  "key26": "5cCyUh9cAQZT3vD2JxwyFCobiM4TvXat9hAzZ6Ay5zyE3uNtaM8LUjbpvJEJWED4Z6P73thtVbABTSz2cFkJx8pu",
  "key27": "x4DzXNKCqjmsFftfvEyqfGRFEcPRH4rJg9eDQqMTWqUpENUjArp4Cis5hJGG49pyqMAR2YXSzabWVViRa9uCk8Y",
  "key28": "4nAFT3grRA4PsBVD6oK3vmxkAnxo8f4bTXCaRAUEx2M8qScUY6Yg1gcUqadapMbbsRxsmpbFAQnNAxjyMGrYkDTY",
  "key29": "1vwmatgDVw31rMTYGmTaRYft9FqZ8fTdACpXpL9NpBKojkxzfaejDnLt4aKfHPbbsbqZMHw3D2at4mRPcTtEWav",
  "key30": "2ggqoD1EKUp5auNJZSZLdarMnAeTva3P8AsvK4WmRYeKjxYbMSYDjhBEU2eRWEdQKLtXQuPMKrDZv2mnhGT28TTP",
  "key31": "4vSxg6reZDsJEsa911sdoeKDHa4tGT6W4MfG7ThuApFYL2uzHjvL2h9QkokaG1muSHMztRhRHsyW5CwuzUXktTj4",
  "key32": "My8Rw54xZJLgRJsDtyozyZt3c7iLtArUyvdugAxWvn5AV6E2FJ7FX533C8kDuf4thaiv2svfDzZozYftyEkEbo4",
  "key33": "2CwkyHurg4PEaoYeJN8R8vt1KnVFwjwbpfmhU4Qm1hTy1NSRBNfesQkFfqPZZKHnVSBkPEWF2YygV4dCknFqwPNG",
  "key34": "2yLh5onsTZq8voHVxjDhqe2ZXXefJVo5wuoAuuezbrGwBP6cE9LmuQ16xzkD8dEREFnWNRVFR98ygqrm3Zftkfmw",
  "key35": "4T5VdgVeUxW5MtTgUPmzzCs67gdVQwttWbmhvoRm6zhYRTgUY8xSN6HBxgdhU649e4cKnKJ6SaNBKESY8a12nzty",
  "key36": "5j6Myn6NKXTXngc2EMSJHM2SBoYN6QB8h7QdgPKWyCow3NUU2WzcPmnbWctHweT1f6F7yPCLAbBrk8b96Xw7GkVr",
  "key37": "5LQvWZcqnWmtDsZtJdQ5gfTLigbAdLymNK97USir4nQTaz8ZPVnKdXnsapC9Kc9u8wEnj1rrS8MWwjb2JXDXRVWS",
  "key38": "EjKQk1wDmhho445CHmG8CoskSDirww1V5kHTZ6j4SpxUGNnw2tx8XjVzbpWwDv6efjUL1D1nwMeSxwAbiBDbqcW",
  "key39": "PepiFiBpbYK7i9verJpY7QMf2Xqe5s29heRLXYvCwYWm12SghYEsA1b3ZB6JCiyadsZu7sySry3Yb7ALL6pppa6",
  "key40": "2nWMGrQyVzCdNjvDdDSdwAijLTFwPbksdoEMQh7TngcqfTdfTyYSiznwAM9cbW9W5rhtUPqKzHA1fJCZ5xhPjH8c",
  "key41": "3jFyHc62fJyQEjrK47hMcG3bVJefBVfhanaDBB2tvNcdwFqnnFrdYjst6XdzpgdGNV9DmotdaLpo1ofdH7YgAGQW",
  "key42": "4auKmt5iRAnxD6jrfniy93r4vhvTiL5ruSx1yRSpxkWT6WMMmRj2zZHhV1Nru8Jw5YhjjatCmwfQ9wSpDVq5pkZU",
  "key43": "2SDxFCcZi89YPDQAAxdDbcQBctayUz3q6t5EpSW56JQQrAE5icELRJSB2ga2PJqU7qAgcu2jfq6FUW3yxz7n9C1o"
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
