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
    "4KZyMPzEDVmrMneu1Wa8pG3mme1PPC3KzNb3GxRgYbBBdvcRWS16Trqgoh1z3sByoDdSmDmFUuu4cp4VShsRhZbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjZyZ8A1icsTQZsZ8XGrHV2Z6Ac764YqsWDXQWATJXUN8YAAcwjgyCH73j5pohb2e3GihCq5Yfr8JU5pSbqnKZT",
  "key1": "dqUkBqqoY4vkZMgpPVtcYGCa1ZpkWgQxkd6apTtxyas6MpmVuNjHHTAX9TqRs2FQ5gGsTvKwFkeTHjCvfp3Nwkt",
  "key2": "5Snf8Ek4FNaxdK4dZjrTLrhBvk4hbgrGQRMkpUxQzHojBAbZFbEko2HQpJeUYZcK9o2Z3Vjry9B2jAjUAe6MRtHJ",
  "key3": "3EAGgG1dE2T8j5yDsCT8Q4bx2GGj7Gz2fzR6Sy6YTvwo7n8wf6MFswL3zM84ugSzuEQwRMJYjzn91wRqcgLA9Zmn",
  "key4": "3GJt3uoZfiG2oKTxBzhDnEeiXEkPLqbVkob87xDb7jjvttRvqzUKtUvbtVk2mNvjz6oSs84CwoqAHgsNcpdGawMa",
  "key5": "3BXDEtiTBt3A7GAUFN9472QHAZNR1df64pX8W5pWrXLGd1GBZogj4nQy9TuTPfXqDt4bGVv4aVsYZVrcywyNAQdb",
  "key6": "2Vpb5g8jEDmgwcHDd9cSp6xEchCHJsxUx5C3LByJdu7YceBz23w6auBV6uZ5H137DhXXHfV4UYNMShBmwr3TvS6h",
  "key7": "5RUqWZovaHYWaaAcUg6uYMwBR5iwqrrMimQ4UAeK96BrwbsKAW5m2vj4UhJGtH3FriyQ8T2mxLaqLrzxmzunU75k",
  "key8": "AfjybzLLYxS4aysT8paad4f7bEfoMxtZsCk6Dcp2i2TjJ8h69crnA8tgbTndsPogRDxGbm4WEPexM2ttCMfnyMb",
  "key9": "672srZtLyaEwxadGy1po7Ezv8uU19yCwN4m3AZ7fnggf9otfwywsaMQHyNdBZ1iudrphigRHwx3YxeuTc7Kp7sx5",
  "key10": "3BB8UYSNhni31RNcNGqCBrzGgf9Tyqca6k2rKhrnVHX2bhfQA54jgWaS6p6nHthKXYgyAW8dT2r8ZgM3qijrfSr2",
  "key11": "GLHP46u6SQKBfsm6FskSQ8AgPv8GAddvkb4dkFisGDPMQ8uCacGkQqqBHCfP8ZPb4yHyYM2CoWNfxdNJ5VKCzYs",
  "key12": "2q9uKwiiqhba7wQYsccrDhE75sGKbp75e9Vkm4u8Ktp2Bpd9T2b529rkhBo6tM3CqsumAnCyPhBbEY5yiD2s4Hav",
  "key13": "17Qi9Uuwgu6eSgvhYaEHcPQhQn2AFfjdfHymFWFzPW8z8FfTLz4Hrm5dDtegPAgZiB3Hw6MDdaK6dc4tKUq5oM2",
  "key14": "44XTQDfLtcqU77hc5NKML77NdDHtxHRqvpbFTwULMr3RLvpwUDJwdbqDg2dqmR4dsQywmGbnaTcgMRTaBVBcP1CY",
  "key15": "15f15TAnEgdTcjrDo8hgVkkUP5ssQhF2r2ZzND1XreJJdVtA5NfBTGEhYA4FxTz17xhSKwBvZsPzFSX6JuZMUFn",
  "key16": "5fvEiMf8RfCygyX6puk6ghdsKyS2ZdET3LUFzv6qdNKTxbV6YTTnqc1hwLYHnq3bRBtZbxooLYmFTkYr67piRnob",
  "key17": "2Ki4u2ajaUuznZ6QNYER7HDock5KSSdn1JJpqx5yhFjWRXdX9R2xVC8eaF4okunnfLEMsCp6Zy4JvsMm5JnMGmhU",
  "key18": "25zaoJpof4hzwoGxL4GmDoJxDPt4a75Sv4An1tYPrXqPR7oojyejcKtS9yewbDrGhWKsiCU1mZKQ1TY4E9ohVTgt",
  "key19": "5pnEyyJEwM3GHF8gGmBXGtjojhC9AV1gewCzMREoP7oE6hza2MKSxdxZDn6NEu4Q44augBpGdLDTuQ63YWAXbptJ",
  "key20": "4rDPJktBTgheEJBsPTzh3guhLRe1zgjfK2NpKs5V3fHBLFwJQFiqvSyTZUFKuC58hYRUasviVVA5TxyKyhq22MmF",
  "key21": "3UmyZjKfvAbX4PPjPf6cNMfZULNR4U9N3neHdPcLZ2FyyGPgE9RQFdAx2QJkfveT5Vy7vhaVyByMcSMb9bDk2sJZ",
  "key22": "4ptzVuZJ9CTgJvZbyxLDBu31w4zA5k39ZMYhXAu21iBMAhsx8sKoUnHm2WM6M4BCHMEfP6RGHhxYqpnBwLN18a9L",
  "key23": "4Kdxm8GUJzg65Bu2m4qXNhofY2s6Pxefywitcpit7nnTAWdZ2gbMMLF9GQG7w5CUSsKH3cBWQouU6iXKX65Qskko",
  "key24": "EjSGEhzqZmi8Yd9XW2MNCSCWbQQhVm5cYi41yj5DL8gUAJT6Tk3Bhm5orfYTuPByHmfZ5KGkbfANsGZhuFr3NDD",
  "key25": "jjVxUcoaJ6tjG2F2p8z784Svtbgoy74z9eP2CpyUCnuquY5tbYYXqzSJejQgDnssBvWrn2ra36VovXTCAkyZqDD",
  "key26": "oabQx7Jts6oQT4zwUXEXjzazPUzUX58DGGJETVms3AYy7bhKFbonrN65n8YyVre7PnSkFooscPo8KcMvy5qyVpm",
  "key27": "3Z6cCBdCw3491Dzem3Ztq6iZsjD9dPmWuBnkxMXr9ch4ftoKVXN95R8MQv12QaPNrdFNn4tcF3zgWpAY7WRm7j6g",
  "key28": "2M6BqyztzBJUhX1gHRADKh96bwmB8Z5n9Cgbv9cESiSheEvf2ir8rUhzrzF7PaKS7Lq2QfhHNueP2JsA3DPsnfpB",
  "key29": "5p2Tip95bPProZocpSgnMPMk62qdJ2kgNh2Js9TFKgpr3JCxgPdEkpSP9GBijkmbMM6BHCvdFQg6MBwksGgjtrYS",
  "key30": "5BGxJ6SgeCo8148qeTBS6JrZf7KZgmYcmXFhGFSsqGM4xL3vxqbyVkh6GLw6HpvTMa8YgTvpTWzEz7aLyXv7ESGX",
  "key31": "4bQ7MEXSa9nVJ1paERqqMKxJe92BYk6PQMy1kQ5pNBZwvQKYXFwnRnFH7aYPZUCag1pAmPt5Z962tw5o6YYjngxC",
  "key32": "cjiC8onzT54DeNX7Kh5BvGah6DPkQfYYmNriE7gWEkvMWyRzpy4BepMGuXpNJk2SD8T9TXuN6tB2yBjc872jE96",
  "key33": "2ykc4zke6duzCEpvRDpXF1tPmPAxf9rfCRr1h13jYa8GpEaCduTHcX92f7tpXRXBoBSNMah7msQP9C7YmNWAEQkH",
  "key34": "3cUi1NHDtYUkjk9ifBHKY7zTA9Xqi2K1DdrqgcZg8i1T1oCxSufaHAj9JBmFfKRX1S3cd7yRD2GjBwy5eQmsGrqi",
  "key35": "3x2r85tfpPUb5CFgVeKPQ983y1kmEhc3RLJ7AhJWYzvdpGfBSSCzePnncis9oLYzfCYmX1HXZNWPDixnrY51onFj",
  "key36": "4S164gvDmsU8hwJVGisFDeKEDtTAaZZkziQRMoJ53zkdasMHZhyuPFhmaLYtNmRWqGq7oeLnSe5gKziKJzY9W51j",
  "key37": "4T7CuupFasZBd8z7P2xxzoGqkZ4vuSXNNR925JjFFcNvjEhJwpTJCJZVTZxbAy4n4kPZ1MWqC3C1Cn8qghVjyHvm",
  "key38": "4hQsSQWgBg9ELyE3pAS8QfmZbACKRrZPX2PEa2w3boSAo9L9JhHYqPu9Fy1SAdVgobXdgPVTMSjTqqE8irY39Uz2",
  "key39": "ovpKUuUxzfZFK7kgLdVzqoRn7RUy5kpydsQPftUUdrVSqwVmPmhcQq3rcatKZ6fdeAgD8Rvq9ZVQ34chiqmQnHX",
  "key40": "2rq2hyiCig3NEyNZGRFnWtuye2AGCrhfHE4TMK7DuqtJBdn25rhrULjahB8CU9KXqk7QQf6AexqJsuj1eXe1GN44",
  "key41": "4P49wwm6ReFDvp7A18zNgZwsFU8mFhjaC5ueFemzVhzHWNJTZzNMUZtnn1GtEuXTNgrwYvbemqUkDFdpBSVX7RNH",
  "key42": "35qm2scdREc5iniNVBVn1dtbs6n5CKBnT78vDVNvi1k57AVQMwzq84DmdmnDZcf4YLV8JkAzUDGVASU9iKtp8GGV",
  "key43": "5NGh6J2jZpcpJwEyuJwHgfApCvCsYYjc9yQjEx9AMkeNnXUxcNsjatP4A1bK6tLZuzHGLfk3WNnCj5TGfKsr4838",
  "key44": "2Br49HCTevUL1hsZySaqoJVDQh3zw1CTCHu4UgaXpgW1WeAhTwhTQgLox3Q6uukGvRvC2MMaepedrMqu2qorqA8X",
  "key45": "RQQE5W2RmvNc6MHrMVKLWxApjgjxkocHRQiUMJDK5kP5g66r9Y3hAt6dpQydVD8hBkGUukHyQQFgHxMYjTihjoN",
  "key46": "44mnBKveMQ7kJku2MwxxJLoPShUAPmCRgK1jKmRdDrKu8ddQLbAUZYbN8Q79DaCaZvTkSg4QaXBw7HFsbkZqnKAH",
  "key47": "2xnSLJh2kaJrS6wWd2Nfca4z6zGZ46nPzFrnefvNXg5PtJARX9wukY5babh5ZD62oVrG2z3nfausBDgx1NNFpAcw",
  "key48": "5YntMGm341or1nBwVKQpmwRjLfgZ3Nnuq1B1DHiwaSkjSxAiXUxVLxM5HspMkApSLZnsKsX6QUgcKXmysivVV7Y5"
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
