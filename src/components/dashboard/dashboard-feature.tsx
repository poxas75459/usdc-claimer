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
    "5NZ8A3QEUehwj6YiKxow8CGQBWZ5QuX4fF5a26kZkwHf3ZvZd8UpXbeoS9sKeAzoNpqLA9emL6JLkR1uwwtgdzkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pr8eHME4EvcTrwpZHsgbx4kgUKmY96h7r3u6A3iWhHuSFR9kwY31niy66VVCh4dT3aD2q15FnvrHrKf9uBVLVUC",
  "key1": "5F9PUdcbSBJu3EBfekjNfmVEmpmq4DHrZvJjRUjLs5hb8QcSTqAqZVQ5cZAyBh5jG4tJ7anPjice8koNJgPG6g2T",
  "key2": "2joythBZkx44kmRzEPfDCbJXg2jE7DdW8Yx3QjKZmb2opo8xnZbverDofzWNyHt96QAgnTaPR7bfo3vQaM5MmQjd",
  "key3": "3bARE98GeCPJm54JP5mCoEMwyoTqW93c1nZtuD6tTbgz2MZtmcvufJ2eRF8bzM3qDFbdjs2NBeYvJbTdcXeCLpWV",
  "key4": "42WwYy5ftVNLQvSSpzWCC3F3tbK1pNdZkMtAVwFWQ5VqmwKs35nmAserBxjoKSG3GFhr9y4zcFnTtPXMNBYCi59v",
  "key5": "MftFbuXPczEDXeNXPMYmNZZqLDUdH2t6MFBsuBb1oQTAqvo3DhB3ckaQgAyJ5Y1UFoeBfyChyDMc99j5K1zaVHk",
  "key6": "2gTD7D9p5wrZ2hAFDYEo6UPjQnyQPueezC5mQtfcUZS1Q9hPM2f8TNUwVDUTnDVW3JkmkGpWr91m9xaRCfisamA3",
  "key7": "5cDyX1CPi5vnh92iFpev4HJHboxnf4Vj6QDuw4d3TmsQ6At6XvrjySTRjY75hu7fHa8ajdjfMthp1MGCPFQGhLk",
  "key8": "26BMEgv48vanievAPPt1CMebAX5Jt4dgbpzNdBXCHtWij1HEuic9i5JZV9JQHsATSo33ZrwCaK67iYY9Crwo69Fc",
  "key9": "2k5nBMcNu4peXNfnrwDmrT5xndsxhfys6NvVW388ZuiKcjxroCsdFVd7iQLo7JjAJ9wZW1pwrHX7gEHpo9LZdCry",
  "key10": "4PWrYkQtYz7W5Lg35vxGH4892YRbJQPkeHsD9MfCkJdbA1aP5tRRuQ3xiuy31XndoGYkb6mT5VxtjMhS6K3J9wY3",
  "key11": "3AGzSVZ9ywZBgwKgFXqKZjGetVgrPdeSnyj3w4kiScNoirtg8ZmJPndex2R82A7oSfpwtkUGHecz9bS4Reu4kQmt",
  "key12": "zmRYfprMqBC9wVkbr4Mo5SKpYXQR7RnAqtkdgpohQHn3v4jzDUCqVSYi933bswxvCcUqd4VsDuU5aCZxJkrC6M6",
  "key13": "PwfDfqenxUnFjXK1UPTY5UK6dy2hcRyGbeSxofBYgMo71Hap9DnW5n722hXnsJFRSyQTnKyAz2t3R4djuyyV1FK",
  "key14": "66c7Jg56n9gdBwXLKpwkJhYe4nRK3Py3qGhtQfyRDhEnjL6xAc7pQak11hdUHgNpLsz9EmuFKeuuxec33Vkcgd5",
  "key15": "63qfgj8SybPCEVgx328LaBVY3ox8bH2QabPPgaAZMiQ7qMTaZ9bAdw3WhcACtUk6tJsYfhB4c9HqdG1FjL63jxH1",
  "key16": "3YoE99UX7UwjjZSQ5vPAF6bZ1171HtJ2w5XauYGhpP2fR2mhoEGYYWfBwwHqi4LUfMvpzu7GuQDnVVpds9pCccr9",
  "key17": "4G8airegaaET8zfxiqqKjgG2sunqqW37oqpRByEULvSn27jisTWdBtFX4n62Jq6ecub7UBTHB188xUDRmGTKGW7a",
  "key18": "3DE3St37pyZY9fjxSjhTwfmRjtntaexAUuRxa3pnRVDEpw4gbqyZSzy4evAHs4kMwMqZ25s6uKgqNPA157f4dYfR",
  "key19": "4QQh54UTKUetExEQiWgmnXtq4q63ZymvNRPGqdoJj7cp76obj93CCdEssesUK27URwbsWx28XAzKnt1Zdj4FW2tB",
  "key20": "3BGQ5d423fBDk2hPrrXNCeoNgKFbTD5Mvqoa4meHFt6g8PZAdWtiR823okyf5ayVAD2Znw5MV8bixAoypzCAF5FZ",
  "key21": "2XUjVjfpEYPR7Mn3LpXEikLtqerzqtaWB1KHejK3myphnSK6tPiLt9JUKsWDkVeUwpixdiSzxEzKsXQpcouQVeik",
  "key22": "37rpDsVXybP1h8xKWkCYr9JRsvsuyStTLnn2A9hvTQGyXpiwvhQXuGzKvRzMkNzdx7X17K3kusCQPRUENWwJswFU",
  "key23": "3skAyXrTdxsvs1rmiPP82yQbEwEPgKpdmkCmRNa3NNJ5NPkbm3ZgecjBKe4aDdwPKVX1XSK2u5rz7Fv5afAhssKs",
  "key24": "52tFPJrTNUtmHTZp4fjnKTPTcPZUzmb7fSvLFEqAawwkTVybwfD7kojU5PaMvERBqfGDtCypneDapwfmoMutB4t3",
  "key25": "4Tz18We3GB5RTzhCyoaiGuYNBjw1QMz91SMgYxt6smdFyUCJssREM2YQB1c1dYXhWTde7qjGvuR4cBPjZK5nBViT",
  "key26": "2aE7fnX1pFxaUq6TA6p8Z3xGG32y6gB9hMu7yA8eWDqW8eY9cu8VwDR6n3cXhP79txMus9JqGy4NXCxMqyqsa3GF",
  "key27": "3dpkUrVsjseDgJYXDDSXn3MRx2SSHBtNkS3Bo6JqtYdTpshqZCg5pKp94nHsnCoF61npkHox1WUTDZQtwNHMCaqQ",
  "key28": "7jHPUyWeP4GZhGkAJpYQnPvSMXCqvFepKwhYp3XWMKigigQ35Dj8uCMQCMFNwfTEQh6BzeH3KXsXWmoUbv3utTZ",
  "key29": "5215juvVjjWJeRpZ2aDnvt2iPb9AFba5bqN4ghMYHPS8TFod5MbbUj9CKxcGfEDEuZ7CxNmP9JsssrgwbWK5irQ1",
  "key30": "3WGEkFmzpiSAcNJQQAYTywQZ3NAhwHCPYdbH7JCD8hXSzyKnQbjf4tQeAj2myNH5q1uBML8GCcLtVTkrK7HT2PFc",
  "key31": "gMUQAX18SR3XfZ2YhVY1PkWXH1MuwXxQpX6rxiJixAPkf9kqD7wX4ek9VZ83v1M5nQ3n32qhtgphxr4Waup6e11",
  "key32": "5qWSvmvmoFpUyU8yQ2RLMfPSCEUVJobmcLDNr9bYqjrM4yNiDrCvL5BHu6YsH8yeKLPsjP438e4cfhhEtGjkzHxz",
  "key33": "5jAUdNKhrpEkPN3VpczUEB6N7Ttdt1jNkMH5HssgD4fEGQJ4BWaGaZnUTsPtMptjm74CYgFQGjzzJD6iX3M19MhY",
  "key34": "59BFyNBEsS6aWbKHHxk8EDztF7i74FcZd13nJgXYNivZhAUbx8kR2Q9Mycv8gJNs7T5g6S9yNqDsnaBuKY5Yuzrh",
  "key35": "2UGNYZAGJWHDQVvadnnT9ygjtYdmV5ssi4s6q7PL816NuRSzuFpvLknRGCWf868Zm74qK6w5NGbCMSFnYMqVrrg6",
  "key36": "4MftVF4eX5AbDTiuAFimKKp5WRhALV9eaeWnoNVpjSZnM2F1qsLrYxLmCaiSYDr9HDmsfnh2PUQbyffg63LAZrHc",
  "key37": "4kKDAR559VXAar1zFvuFgTY96CWKYfSqXj2vfcvfyZYFAkTMxGZKJNXqXFbAvxpZoAVS2cTCJhM4SPRwyrC9dExk",
  "key38": "4nckZqHo6Zp54AxiTjugqaYd5eVa5rKt3mEPStWTyqa3EY54vbt32t43iwfMHEr9jv8sv29iFhxXA7eBvZvUjz8P",
  "key39": "3Y4KumN7tHxNYDcsS6ZbD9etb9rRcwGnpp2iSSdWaoUiYZk7wtc5Pp89fjzVN2TqnftqZgeVgVnyQHSbocgKACMf",
  "key40": "EpFwLw8ajkmSzqKeRJ5wg1wyzUePSEgHkrWvT1hKEN2fGe6mqDskU4a7DGAqv7nC8TMQZZbEXUUUwcnczVjMG5q",
  "key41": "WhXAAw59GT5RzNwrrTaX8jD8h71jSPd5HcqqFCYSZQe55F7hmh4dredpQ45hZvjrSSoL6f61uVJUvixZVGW11Gp",
  "key42": "2w8aGUobALXC1j5Zz49MNTRPEw2fo16BLAPm4J4nMa6DVu8xYTqPNH3DcRNtdutxsC6zf5BfrFYtzMk7eGEup8co",
  "key43": "2HiGN7M8Sur4oCRykzCyAv6RzSXiS97X9w4mbSHxvme28Mpwt7NeDmRCpp2i5cFxG893ozczT3sk79tKieBQxq1A",
  "key44": "4gPASXNTfzEZ6f7v7pan4kJ24v4FkeaBEf4y8rrcDeJq6eS9mhYdD6euiqp3xaYwWA7ohRTpBQDh93YMKfN8rQ2x",
  "key45": "4YR9qSJR7u88EkEk147Q3fa3nuG4KbQ4QY7KUrfaPp8Zf8TbiXkYt8fzShifzjWPhEVoK5YuW1efAgZzoN6Y9jNQ",
  "key46": "5bhGB777iZvhTcoUvMjN5eTc7r8gUpdAV4S27wmUU9R6eQLEmM2VxAwUWPg9vNykXA2Huxoz9g6HZya4x4gk7w1X",
  "key47": "3aSSr2k9D4rLWnHpKHf3D4wxE7CAdVGGoqewYefS1gbA2KW5EuYr25AyA8sVtWZwei14WXM9NBryY2tcnASPoVb7",
  "key48": "5xVy7NvuJ8qXm8rq351PqcuKiYpNVziLQmXeAbzNXvjFpWzHV3xUgQV7Mp3PHvHUJmTrCzkTh3SUWByAkM6BeT6t",
  "key49": "3xZfPRbAtsuNzMNviPkF34ez8xi4YKbNgDV5U3aMPQg9pQBGG3wwqR9QJkhAG6mZ9Ai1b8MV7DA7dEHHDE7V5CTC"
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
