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
    "32CEsUScsxhoM7dXnrEKv95MnLSK9Mxxkcuu54UbQXGfYrLwkJpLNvbu8yPf5SDXvWZAgveF15daCs8m8EKzRbzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvUQgG7exGHGnq2h7BqMsAg9dFC2bzyyQfGdBRBhDGxRQdGYNrYoAkrBpZSq6KQhgUWD63MdQayniDHk7DnHg4f",
  "key1": "2WJAkEBT8k5RBq6h9G5bQeTfa3qh4zHvAHExPrP14SRJpPMwB8pKnDtv7spy3RW8mrBiyE7MeAsgRZYAfuL4cBNE",
  "key2": "45zQsEysWWebLC9y1rMocteZMB38rB1Dhrz1akvvTRyH2pC8M7FrrkarHeBp8GDspNJ7G1obJPTQfGkxP7ow2ttA",
  "key3": "3JEKB2euWV5fnZpjyrLkKzLgVhbPxr7DFKktaM53WWWG3KZYZuozaKFgZrcMrTBQeuz443RBWgohgcQ6RKamcmKF",
  "key4": "3JuFftvUEpvwcwf3MeXX7uSQngUiykd5bc5rRY4Sm5jjdXovsZx4LyGjvAETsahWnWCZHjKhys97hsufVU8zUrDF",
  "key5": "2Sbx8omBLWkGUhxD7cWHZbi2F5sV1LvnxpBmHLV1X9omHSkati4ydpLE9hdU9Jagyif5wTZSTJqSMwQ7Nqf4JXBG",
  "key6": "3x6FaMMwRW9zSVnJZzjwhKqgjdqKUSWdrstvUxkkGiRRxme8VEvbNV1AYGLQQGEP4SUfW6gM7N6oTYpBprFxr6AU",
  "key7": "4yrd1a8myL3w3nowHoQK5cHy4QDf6Wym1K3b7J73JAxjsUtuwBynAPXNpfVBEo1wVifADr9mjLd7XVTVBbubwFFH",
  "key8": "58vwtCcnUaGLFtLn89EQEqKmQp2T9hhGJVqcrFkjHN1Aa1DyuGZrig8zJb3A48ChmiVekYYiqHtKeFUdhcvLmKYC",
  "key9": "YxphVtevA6aLRmbJPuPDhCNnnge2RQDs14cHRR15Q966n7buBN8sA3eR2tuQfYJKtGqzu3hFKrrPBEVzsUgVaXz",
  "key10": "5ZQ7GKZqxcbKu35Zk7pszP9vDCB6M417tTbWJZzNoL3RV833Krz1FrRKYn8NxkRf9adTfN2hJK8x1UcdQmsWoE83",
  "key11": "5R4GmJxVnzvqoX3aYmB9G4JxA1uhKG7yj74xEvX7rPt9Hfwdh9feUxsScTj63Bh3ZWfzhXsjJYkRXZYkiCYjVrGm",
  "key12": "5vm4s9icQGmQJcUAyHK435ikUZT8abPMB1qG4HbC3ba5vC6U2BTE41ixwQLAynjMcCzySUHs3VjUH1zyoMgWTcRQ",
  "key13": "nbfiPHqRLcQQQWwma9KtvUueYhmPHc7MKxJtBDgiQrho2uyRpFuj431APooCYytcFdsUGUR8tyb2yPZVW3f5EwS",
  "key14": "3vjEEJP4bRuBinAvYCLwFcae83oG9vPMqzkVxjS1kim82pEtYadoMQyUQF7Mi5gtX4DZq86euij8dN1kC5rVmvX3",
  "key15": "2piz2pyQ6aADCGMsKH8s1F3MeKyZNJR2aAyzQZDvkxsV4Wf9UjpmLY6GiMrSfj9m9kg7NB62HrvX6KSaW8BXQZ9C",
  "key16": "4HNUfQJAqxVRaGVPZMNEGV6qDrZvnZtCud9P6pMxG3DNWVBQiZbwnGxGn8bcN4qqkoaE3k5cV7dMtBtVBJTKEXuA",
  "key17": "uhD7rygP2iBZ6anSbUEb5itRp5RKyfdnqn1pfTZHCUpm4nZctFGnQS5prmDKkJwZLzyx7DzBggp8NucadrhW1g9",
  "key18": "3zckqCGtTDMoQVeYFTVcUG9B8iR6tD6YratBXwiMzFa7eXPkPruUuLeyqpZ6i5E6BwAngKRAVmA6DNZP1RuigDyr",
  "key19": "33d9sZ5LqH67zZxqm1cirFEYFZ36N44f7GBP2gDjmE7eeEnPQf1nckLqmJMWBreZYqpCk8PdJqFt8Jc7yCDpQXno",
  "key20": "2sp1WRZtESuAfYLGAnPuMJnVS8vDX9wE2Qy7bL14dRMDqPFgepqQdnrE9i1ZRgUc6amWEEFsWz71SsxXp3s7oLvQ",
  "key21": "2BoHoGKoHXXiB7govjzogDJaHiW6bDgcZayeKrvXLfvwaZua64FxhRnbeX2JDWTEKFVg1thbk7PHVRdioMFtaKrh",
  "key22": "qdJ4qxHhd65JynGKXe4o6HjZkwgm2FfdpRF9XnsFixG9WkHpbXgvXHDBcNBh5wcLBccekLSHyTn5k4r2NgpuPzw",
  "key23": "uSZpoQM8Aeb7mPYkh1W4rAg4Ujq4p2VHeRSjKnBXUkti3bgtwp5DueVLU6JBybfQo5qbM76JbnHEqmRFPZ7WaSF",
  "key24": "AssFNa3cLHTij3oTdjwCpgqo7vFawpkJRJD6A2K5Ch9pe9wt9eV5ArbNqjTZrj1oJcnqfkQGtYm3jzXd26XZ74e",
  "key25": "3QxrPtnRFhNtm9zf7szpo3fGWDn4LqobtpjR5SP6SqxG1S9y9BV7CCtDmU24u2kRmQq48BzetVZikEczcUJYqfa",
  "key26": "31yUFq4uVdUq88Gzhqp576bASVGxNkgUqZg3q9S4EQA7JP4NtM21EmAkjY9tPoZ2TWTvEdAU6j4e5E8kiTQxDRkA",
  "key27": "2TC4tjQs3J2fQ9a3bPioLPgLyrzYNfppk9SnNCB1DqKvrtsKjxhztwrmeW5ssgtihwKL55HaUwd3LJGtqE3G9oRW",
  "key28": "5JL7RLzV8yti8JVdPi5mSSuxruARUEiNKxmCX1GDJUNk8gYFDMWAWitcz6ZuXFRR39utkecnYf8DbkKqL7mJzSiP",
  "key29": "NkkDXbAQen3HrxTGi8GEmg55fhLLHPzr5BECvm5dHZ7oa96mauLWV4gutLnb553d8wqQmPu1zsRrn7UtAmQB6i3",
  "key30": "jcr1tS8UD8wobouGnkrGPuT4ruN4dSRrCGh6tA2g9trCAU1N9DX49Uz9ffZkRLfEAhrZS2YAgZ3edYWsqsnR5fT",
  "key31": "35adM4XiC5e71F8e8Psie6YuHTC9JBkF2isiNgD3S1muuBb2pJ57tChvRkBYXhZy4DWA7GAsp5xyczEf9SYZ2oRE",
  "key32": "u2PjFFekeEPU59dSioABUo1musWt8yymj2MdPxWdCCXes89ZXtF9NX3pVaiSZUTJD6NLLAuDNCdyRgPByuojRgU",
  "key33": "3zsBwL8baUWFXfrA1s6sYjjtJ9YsTVDrwfgV9GQRQjsULRqeRRWCVVhUBSXgpyYsjeFCowHcC5KccU3ArMNYaBEk",
  "key34": "Cm6CuiQ4pfwfj9YZ8BfqVepKtEiyiA1seQYnFejTTc5QuGR9FNqdFvjBXT7fmgUXJuqe3Jz7frBtXyw4zX1EJpL",
  "key35": "33Lyf4jUfDaepy1rxHhd1fMLwva6CcyCiWow9uG2kQNd644TTvk8CZ3zhMQSSZTCmTAHK4nHmYK6MT18QyKdzndJ",
  "key36": "3JJFo3qaEAr3Fep8tDTRAPMEto9kBTdoLUYwGDxCUPj47p4JAqiLn5DiuZtubRm7LDNoXjd8Ceun53gPGeH25wYd",
  "key37": "32vaWUtDHdzsouawkreW5eaGkMRaByBua9AB69MvVQe9ApHts262BnqmSSgn4JWhnR5pX8FQCjyxJ15cFsKkvy4g",
  "key38": "sVwCCP9reyjhQhf95zuxqyYHvmRpbokHVMQFLBPo9x81Qprn5ZP9BPaSu3GJAaNtPLiYMg76RW6WyUmMwUtktME"
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
