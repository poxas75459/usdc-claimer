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
    "4cZqvEUNsMivieDNakuxoPzBGd9T1Ac7vYepWVdy7UGot8gq8Cg46z4B1y4Dsd1gJdVvbMhTJg1rGpMWic3v5AFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pffx75SpWsMUjdS7MYNXCJQgLkaZfKnfqG47PawRh6HnqYyFTA7TEJB5LwdA3rQovv81wU9pGsDG9QauJNsXoNz",
  "key1": "2ZLvMe5Z1xTRiqQAmathGwNcLmtLQfDhYgCj2HJHv5DyPEFxfZUxijaMfYPhwH4TaAxDsV91KaE67u8pqFkumE1n",
  "key2": "64oYV6dZeGqdpNdgPfuiyXozQedXyGegqeNwGyBc9FnDQAeZwYF7MGVoExHAzHF2dE9u1QWoHzqzWGVuWwyNhLq",
  "key3": "5HL73kAJmyMrMX2XJtVhQF74Ho4UK2C352XQWxaTdZJJ1SzrEu6LkZbRzUhikd7v28tE13oxGBetFQu5ds1prWvW",
  "key4": "5VzexMWNCT3WzmbXapfi8xasUDa5gAJUpZixQAnCkV3eFtEJSsmJbbG7TA7qX9fJZWpJtoYk3JGd9d3FHAxyZC1H",
  "key5": "j422zfpD8EeUBQ6jMc313Fi68bRBENvNe4K6KLaGp2Y8vzykrfravkHvX49yqRfLYkh9MeM7WbN9HnqBnUtKM2s",
  "key6": "tPsxXRvSbSsvrrPGKoU2FkohXu4jV6UHSvKQZm1g9hyDYyzgsRX9bTkz1w63J195yzoo43ERahguj9zWsuN8xzf",
  "key7": "2uaaztY1iPvnWArkWAbsCkVgwN19TEYXmPGdeKhU3s7uVj6EfGdDe448LMk9q11JXm2YG565mu3ahoDFLf68JWaU",
  "key8": "5LJv5rAag2eSrfM4VQSXnyRbx8qJUKt5QwUAFx2rEardQXKTsJaQo3LssJGqV8cwgsoi7B9emiqCAv2He7YJ4owy",
  "key9": "3Jd4Q6yij8BSgyZHqoFimMZbs7ZRZDzsYCCHwjFuwBJ3PTPhk5dyAmxiQzFNM8ui9RKp4o8jpKiRzfmvvbrpjUqy",
  "key10": "5vvSD91Y5F75f1Me49YSq7EwZBiB3AP7JnMs6LQ9YsQQjTbXqvJkqrdwVeS25WxYT2cjTd9XDgzoa5W2cgPtx52k",
  "key11": "w6h56tyTyaiQGJe9WF4dypDwVRRVsvGURN3jSU9gi3X3WXWVmcdnqMb4od77wyTpNc7FKGVKXr1xVoZsyWF7Fui",
  "key12": "2BkLt9EFfkLj4okAsZfVbRS7Zn135pg8n2F8y47Pnuuye2HQ7SZyCQA1f7r7Jv4kFHjAY5SRaknWQYMaDTKBmqjC",
  "key13": "h1cddXaQrpHeX4oQQQ2vsyVRR8UzZ53oSXW4Ky9jLk8a1XepVN56tBE6aWYmwAfP24huqWCdCqS8Yw9gDJPQsWV",
  "key14": "5FD6TwcCNfie6yc7y2eSzPiEACMcbhg6xJzGe2L9HYRjjWbfqBGWHbxSysULspVHL1hvr11j28bxWVxxwZ3VHNrU",
  "key15": "2L6XPHSotANVfhV64kAS8NK4cZ5gNUBK2QYLhUf6NQDj2z2qwct7gGtWaGZkLXgwBrejVDbQFN4tcqo9EcJEun7X",
  "key16": "2q3fL6cjp3k95wYiNZQuWwExeKe7VMmgmAe93aFtWiH2vGVMUsHuttBriYsFvp7sfzSzZUFyZkhPZatS3VRrVVyB",
  "key17": "4Zs6tbrY28xBF4GBr4vzZuT6B4Rmtfr3vnEFVTKmHTvUYqxTFKEi2gmPJsuQ4kzohZSua8nKuPqJukJw7Q7e4a8P",
  "key18": "3ZaUWoxzxVWvR8rftCAoFtCGEZA88huHsK6hmez2cia6QCQFFcdMgSJKoCHhG4dVBfwtzugH7JSZCJg2Ue8F8uFs",
  "key19": "2C7yFSNU8KhUf3tLd7YonC8pxJZSgGHqvW8kuRdA8sj1hcBPsMNBjFDXPenUenQyzYZhpY3oKkbUQ5kejuzzTXq6",
  "key20": "mmBNGpQPsWknarLsYJUoKFdrPhFskn1rHqWQAdpqBrUnhMXLmznv5ct9yzGeNUcN3uWCmCCfzgbZs7XfSo4MwT7",
  "key21": "29FRgZnK5kbgqDhw2pR8xiHMu673DW2ZcVSKqZZLoS2igASvNA8zGRd9hoJzJjJSqZCaJwAETit95BSKBxgvUowY",
  "key22": "5sLPtGFTqfqCmC19xxcrxVnZyb9YvzKi64RyhBUs5Zp664MVPM74TvJtsoX3rntwMR5rfYREBGXaabBsgF6yM5TN",
  "key23": "5WNUq44seUeWYS5rPwSdEgmQ9qewpTk8t4WJ9mMLf4ugdBW8n4J9oKYHw8cuAAzMQgRcyW2CWNdQWEmZXEjx7Hi",
  "key24": "39qLdaxg5aWkNSMaCCkxNSMFstCVNVnd8SBVuxGFaBJRbGGE5rpNVuC1Bokg34JGByCvzNhAkCnLtBxyHviNphwu",
  "key25": "4Nxv8obwba8cmQEUhW3uBxHqCSLYERywhVtvqBzn8sq4JRXJunoRCgUZkhRz1PjCc43tY1CquqxvNz4G8BbHV48T",
  "key26": "2hEUU35cqZi3CQf2Xk2kFPX8RCscYsERPuzWRDCPPdMgawsFU6HkQ2AWytmMYjUHB1WMRve5sqYgfJsk5KNNkTXb",
  "key27": "3MTN21ZNF2MKjJumNLEZAQDhuPhQBsxiKpT7SViyxXx5t13SNL9DWcstUJmCK6SP2RbSocTPcPY3z4HmuR5BtUHW",
  "key28": "4Zpqowg19P13XDi1UuDXocg7WmcZgrGVupMtNCWcJBXT4C6EqNg9ASzjXRXxMtM45TTyvSXH6DjHwL3bU289pH4o",
  "key29": "5nxCXZtf5UqKFX8Bymf5xPcqDiBzG9Z9cQHv23UPHsDGzh5G9Yz38EV2DckvwBncMHAxmuzsUZP4PW2ve4s4NTFo",
  "key30": "4W1BCoZPfzTCo1JGPiAWmb3wAnknCFguNoRmTveQKVYyim3XCUjWKXnhPfkDvVjdc35fzGH6Hef1sf47CyrioVq8",
  "key31": "3qDF8ZchQ5UkYYsk9egTjVvvsneCyVekguQzdGp5CcDbjUuZBkvBqpobEApYefvrjRhMkU2womXk6cpB4KsfCo5H",
  "key32": "2uwhDCBpvNuNKaUGKPbNJBGDnWjwK2WspbsMY8z3NuKTAUZbuyrWTXHSEAA4kk95qM71Qfhpa1p6HdRiBJULLWPw",
  "key33": "38kddW4Qv1uvB1Ua8eWPfEhYwk2p9GLS6g6NdeRsx2cx8EPBNMQ8FUym7mUPuRZaRzu9G9vonH1DSFFHBsfUuzam",
  "key34": "5JfzghWuc5KDubDLZ7F11qhMty64BJb17JF3QZoiLbQFqxsrf6QBXfabE7fNDghss9S8hX7QYTMgv1mmCAnS9w81",
  "key35": "3Fkt6UBuFat7DvuvfgPjEPM5ksRxwxWye4TaH6Xfx2CYJ3raQ3idVJCzk7Bxidm4nX2pk7sFsv7cgmxA1AegWrUK",
  "key36": "14uFTvwpo1ZN5BR5t7zADQUP8KijcrfzRwHWvXMn4AYqWgnatrr7qsy5tDEfbmAKPiDvLfh5ap2VfhANfjbXVgd",
  "key37": "7YCzXML73YgQsM5iuaqbUNxStLZZ4wy5wdzsQs41fJJcZBuHNETBfwfvAkwy3eKakTQsouqdsvXrH1qeLtdKaji",
  "key38": "4yArSgArxZAnNAKEmbRrpdsjkbVn8UjeTcrCTGe1ikaAvuHThSGTBS5xA7HkscAjaoEob6QfYHTo2WRfh4Rjy9ht",
  "key39": "sRLGY1wejTaRvxgw57Q3z36N88p97nfgFFxYAJf9aeVS18GLh8dvNVbgKZwdPXWp8nUyv6c4Pi4Wbdzc5sB4QKE",
  "key40": "2bGtTwBLyB82qV5DYbmHohNshxoMf6wPVFGXsWN2KaykCifGhX6TyQFZpcL87XZ9Eji9got66npegFc6LJeAhDmE",
  "key41": "GTBqja7tUCMaGSJpdKXXBWFwXqjw3R8DB3NJk3qm6Mi2UW1WxSkdyFFudyax7eDuNL2ZLncgyCXRXxW4wyB5dWz",
  "key42": "2m3FuQxFH44Ko9UqZTEUiQioANMuvhHS4qjFVJ6kW21bqqLwr9PJwdiy3LpfNwKDWJS3Fbt4ezEiYxJGxprqnVLt",
  "key43": "5awvuZZDQk7rbgT8d4eCY1yQj5n85mNjqMnFRQjNhBqZUfZN4nHSEJfaEUT2NMhNfaiJaHbm4hfb1EGa5kNZ9HHJ",
  "key44": "4QqN9wkV7P4NuKEDG87e7gM11wUxQShHJuZ6LL3QhfRqWLrnWG5xm9B95YuMoP2VVBT4oUdEMuZN8hSSzJGbtXTw",
  "key45": "4qFRf5RD4ExcwGjjXe179F8rYkray6aU6aoYWcD1idoAtPhyZ3gGxdP7iFA8mvLvE1jbDTTsg1uuZW2J95Jr6evK"
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
