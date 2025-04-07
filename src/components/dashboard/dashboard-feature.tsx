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
    "SX94R8M3maHGdnyZ2oRtjpjMJE6YdhcMZp7UUgBa2586LD8gS43nrZFJqB8ZCa5dMpwSwHmkio2tuPsAun8VTNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQ89JMHceXwHDm4358nyWJSWpVQEorRxHc26P9mxJgTbEPbWLzDqyUccLV2gBvrMNTQsMVuHfaan4F4z12pyVok",
  "key1": "3AqhaCZxBq1KRtxyaoFCNNJ4xKo6uj4bDFwXJBLMu8R3mNt6iLF27FgmFdLT731DsHvdv2HE8BGBfa3oTUnBT2eP",
  "key2": "2zneJxrCzey1w8HoCTTA7TGKL4uHSfiVEbpeTBA5AzjiBsWH8t5ytK7dp1EE4GqG6TmmCNse6ftD4VsBTuMfe1VG",
  "key3": "4NqhnA1wgVcJuRyEYivPkLiuMg73WTyLr1abN2fhAqLrf9yjBbTJL8DgMcAXv4Fd9nC79XJYxvYrTJofk4P1635z",
  "key4": "5v5JAQzcfRmPuvfCfCuJ84LMA8fzgYy3wfBvmc6zLyeECKkrcxN8wgdG8587k1q9HrBJeQQSgFqPGV3MCwkcci4s",
  "key5": "2M8tS8EZSfksFiKYsAcu5qdSmh8vPsN27xVnVhwDPqa23G5do8d459tyC8P85zpyDdGJA4tkLKmnyyEqnRhPPSGy",
  "key6": "3fZCZHaWrqKbqZRyZvhxvdHGFLCzdyk4KPrL8niCA2NpLLv1Tv5U3NxFhgujpp71gHUMvekHGXChdvCK2TR9dua7",
  "key7": "4XTc7b8ce1Sjpo4iTjXMvbiPfsabwmyqtjSxBd3vTvo53KRkEbJRu3FjJ1a3jp4kqVYakioa8x8PafqUMdE6mJYG",
  "key8": "4cBmHh4muvbFL2Rw1omCRjUEZxE5rHQPihBqnJJ5ECUamfci4bSg9hJy6E8Xut2cTnu7dsJ3fE4DiEWLsSCrJRmP",
  "key9": "zUopdno7sSpPL7gVFjXeNR7XBERASsXpePKGysNwWJqhE4EwuudtwiktJNvjXNNn31pN5hhLqQ9MbzFn3GhDR8e",
  "key10": "6DRASscUoj6nVndKW4TqUZWPz14K7HWvN99gLze7jfoLdcJsgtiNsRHzmoDJ63CjPsgB6fTvWrN9WwtpF9aRRVK",
  "key11": "61oEjhenEwPHdXA9bYGyY5rrGJj8rwA1DrVYpAANweHNHvuJFkMfSxtgcm9zdJRhw7KvBUVQKFKLrLBDBHxAjeZ7",
  "key12": "2bW3wtik4jQSf1jGRogJ1zm8gbKWGvf3eSFSmTWFPbh4Em7Da3UTvA4ZGRvTjBgxtf8tCZkWDgxCC1Sd4S8fgbjg",
  "key13": "3FjZbRbXeHXwbQYyfuvCP2he5FBhz5uGuShz6y23osRbio78TEc2z7yhMHw3LrK1Sqjs5mARmkhRNtj11TsNf21A",
  "key14": "5gFbB9o9rpuWWxxoLEk3LUSgGBVWvk4ppiW8LYzVFssdXBvkyhTZYUXdJeFYJYvhsWFqScUPJuZ7wDpEUUEfQZgW",
  "key15": "37iFBQHHq3ZBdD1qc6B7gq45JsSUZbBZd5kyimc1Hhh5qK6WExj156npDc991rs1RAwMmKjRjPrLLAJRRjG9j7Jg",
  "key16": "3vk8gRTskBph21zdJLvznrpedSLCXkHSG5XkFdRmVrtJcAeeBxc57G78hDdkXwJKceRQPCUE4Cx1r93y1V6DY1gn",
  "key17": "2GVgoZJX5qP7mkL9zeoeAj8woryRGQwvr3HDusmdmcR2oQ2otezUvcqf4ZL4W3CUtr4nuKc1KX3AAn7wKaTLruqK",
  "key18": "27Ju9q9D1erfCWTG4oAE1MAZV1KnY2Uht3hG2hRBEJxBBKo321da4vNa7aG9rUwjSwiSHH2itgnsRwnKRUfFyJ8T",
  "key19": "KHEQ27m6u88G2xbjykb3ic8UzJY7MG7KA6uhJHHptM1aM92NgtVsTXM91cYaL5i6kdWeBAZeGWKSA8wA2NMovr2",
  "key20": "3oCrJV662N2f6qm5K771U7xJEz7Hk8Hnexver4hi4HTTiitQUrW9JZcjh8x5JkUMrJXysEYb4TgabxcAMtHmYrKE",
  "key21": "3kA8Rm4vQ5Vr13B9CRPKVtwxYKpL3eCgKRgBnjweMXxvH1quCTKfDwS2fqJbCxBhbeU61u7ZpTR7JUuJbfx62nnn",
  "key22": "5ugLPeYqVyytp48WGoFxAy81zSThCkwMVgGNqHVuQM93g7rVo9ETzpf4D45dPXRLX5rEY2yZQ58MtGfsbJqSZ9Vx",
  "key23": "5HPfFxjZjeJxhKody8QfHTbBat37SbyMiUhBebFXDKU81Di6aKQzSi9D4bmLv2b8SJhJgR3vyNArRsR741uTW8e6",
  "key24": "45SBADRY5uhbj4T66roQDUAXx5CfiPEMBzZr4HRdkrPb6yVPPLULikN1YCCjiBzCHnKzwQrT7CYk8k53UNxKYUkt",
  "key25": "2zMkbAXXsFrd7qzHbPp7H8FrZFDNF2GDicyGDKkWhZVDnygDPmKn34qdapYLos1ajgA6UiH1VBNgrygziNYreiic",
  "key26": "4tQYhivRXRYgDnbt82DRdVVYs8rUo1sKurojudvmMyxpX8deueSaYa5ewQ4hWiRmJqEa6vTdVfwoLtkrD5nEktUg",
  "key27": "3bkUyx9BqrDKyzq6LvFzSU1H2RmodbPGaWvSrK1rpxVHCKxgCXNvNUHn5DJwuKBGzgjdC4demopcFKMCX1ZfVg3w",
  "key28": "4p2GtbTeLYhqMxiZTQi9LFB7dDsdjEv5mcVepvCubUZRpTF8iPWVjUiSUZEYDQLwC9jVGD2icjD2J489JTbEpN7k",
  "key29": "3J1wfSpSkucxmYLHF6WWEDzkuNwQVCEEdaJxWUwbiqvDapRaaVtmYAsPh3wru741ijyk3ut2vmmrSHS5Wcnq9E63",
  "key30": "4F6W46R4B9XrR4821TnW1DtLaBVrNptiwa9xe4zYkyQa8gYmRG6LospVCJJtjnXuimKU7nAY1MruNdQufvsHfVvk",
  "key31": "49RWqo8BajNjSN289imzvjPJRodHWKhYU6CCFDAyUvNqhBxf8HHQZigFGpDg8b8zebN7hDgikGv4wL2999fGdbAu",
  "key32": "5uhKdekYrxRdKEfK9HmTJR8gHyhdQ3Up6d18Jz6d2uMmCAsZ2HUfBwoNbGrYZxhdmiEPH7WPqgBWS2pDgxUF13ry",
  "key33": "5n8dvzvwtJtuazhtnABZfuJepc7Jvbf2hFe3r5n8cyHb9E4ZjTAXUJpwVozTPBm8jgEf5WNN2cgnqy4VYcQRTKcm",
  "key34": "renVVGJy9qq6BnNkoc6HQ9Mhjy8Mx19RMuAhgYSxRP9FXFxt949t7XF9jfi5cpZnCyYHHR2jtZXuj3SYn3GLiek",
  "key35": "acdFEPJVkw8uq85mMfmMUk2GmigsBoyDLsokBEmiNbjtmYRM96qEs3dzRkF3QWPJ1tD7x3WXfnYaDYnSdpbbM72",
  "key36": "5jTj3fbAvJdchzKGYDAoueTrd2drufpHMdX6T8XXhWrPL5chef1Q6vLgmKwBDUBNhDAVns9rQci6DtPA7avaEmhh",
  "key37": "3mGif4hm6RoFkAacbzMn47deJN91MVAQ8G3asuZp7qNZRCH8RDkkSKKGcPrBQTu9Ch9qGbDxCNF5teYafuQDq4H4",
  "key38": "5MwLrinxSwkQkkPtnbM8sp7owDDh6Y3oYzKPRMLfuHpTaU4DDfYhNs6RJQawTqfCumEBQaqqyc9UoNdgJQoTpXnz",
  "key39": "SjoeDhMorTwbK3bCZsEh9VDeVFgeGfjEyxZ9hHS3YQTzx7wmyLtn7jPWUgBBNYk2WieRHAEUbnFMq9bb2NMgoFR",
  "key40": "47AxzG3oNPktFWr1XS9XNvt9KoeuY9tKon19vHTnPmkJtaRCbLBhJKKQkMk8zufbRQ1H1JGJgmvoKHTzrWpu1TBQ",
  "key41": "2sQYp6S9vkN5cSS1PKJiffWhHCztSgskKzRDvgYRmj8PrY1t5F8hdvuCozUpu7Adq2LQ1h4E7ZXBxxFaYue8y8Td",
  "key42": "8cBcNthSB77ja2uRQxjHNzPvCnRgKNnzrieo67xFnY3qTmQo62F52SiaAE6nLa9xE2vareexE8DpAvhQCRKpo3g",
  "key43": "3sStYsdEhKgv4tu6zoF6LHi1FEjDgAdZJa8udHnRUivWbm8SWQCMfrkSWBv7tdKc74k1mRX5QCpBib1PzioMUrKP",
  "key44": "3bbK1ZpeaanCUh9GTwvLis2yEvPnj7ARVTFfB1ziBenRiJ1RmTEZ9uMu8tzH9H3VkaatD62CxeBav4rTbtJhJuBw",
  "key45": "3Ju96Z32unsJPfFcyaMe2fs7N1JLEfWFT139WVrGcY5oHYnJhDdffCjUyTrzoWuuT3sXtCgt5wqvFeVvKKR8vcKe",
  "key46": "34bSLN13vHUruf3dSSumsJpWdk2SqZ4eUL1NG9jgSfBFpicP65VzKATxMCfF7zJCVZbHLbtVGuDXMYGfUcDVcLcs",
  "key47": "2TzxXc9kyA9gKWVyGUABFN6Bx7XvnaAJD6sX9xDRaDP2QGejxVD6zoioXnf6K5mp7m4j2rhFCaU4mN5N3xkUkJas",
  "key48": "3fB2NxJZRwecWDMddWMxWYtwALtGRLNLEbAoxFQRjCP7U8Z4kBTfAZc8H8LRjZUEn7y9YhLMDduSVQK4tEfSpb4Q"
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
