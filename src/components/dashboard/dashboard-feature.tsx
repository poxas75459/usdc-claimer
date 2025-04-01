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
    "4VF73xFZbYPkDHdCeaA9m7somdGr3KUUXoHnZZrjYchhaoF5pc3Ln5VwbJrShJ7efBYEpqCo7EhZfE2Hv438HUh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgk58kEECoMdhTJgYcqUDdMuphHX7x5wjt5G2XGP7pGpW4jsBH1xowwQFUTGzusRJyZMbdK6qEwy8AcobQuP1Xm",
  "key1": "4fBFf3sMkMKK4BqzQR9KfGxo1yqKDejreXy6r7vt3kWEZSoumVyjy7zZrytHTdxM6ku6jCC4fS2hZW4sEVSv8MJH",
  "key2": "4mPVSqnNK258iXUYkHFRvC2hmy4KA355V2eTab37ypsBafLYeFVdgpHCsH9gVcmwagHx1BVgLJ65DnbuU2ZX2bg8",
  "key3": "215Myjp1ZotZP1NPLk1NTZ6Qx8u4kysp66cNNBiKByRWKAGXe4jUhiTQGEYyhZMUgs1a1zN8bt5Vs7Tj7SrSxSzT",
  "key4": "3VudESEEAwiuPLGari81nroMdSNeLJ9s7APFDY4TancwmX8aySFcyzYn7YJRgQWSNErzHDShycMGaoaAeDYTs6Ye",
  "key5": "5XnmnhxHDcXTY9ZxkKzH3psf39hUrsiMfZVQtJLdLnCvXkUc5YHwHpCnkXCxzEzCB5qN1ZknR6k8xepjPTjBqnoB",
  "key6": "4pWzFq5wkjyk2Wd3BG9MyaarC7nT97GMhQyXBacjQ7ebNywqQxHjurbZyLfyRWEAJN3TxmUsF14JAjCLPQCH6wyk",
  "key7": "2rHH8yW7KSU6yDr9JBkzEcfnwgRt7RsPanfKdz1UWhZGLy9Bku7Lvjx8M9eZirwCjEvoVwd5LGgPzSpsJJVyNKmw",
  "key8": "3jU466nwpHQKYw49KkrvxhUKozvrQ9DkR4ygxRe6koS3pJ7Tthcdy1wcoHXTV6rJDKqh1QioszK33b5h3qmvNSJ4",
  "key9": "21RhQu5vGsQYWptoNaTxHaznPnYEWZEYpHpFzfjRWiscQEFkXVV5jgjn3UcxTYAmRhHD4APky9c4j2NABYnCWkDg",
  "key10": "cSTrgUXvJ9uukZLvcc7Nso5736S5ZGzzLhi39ufkoWMj7vBPonzAnvwm1norjQ8nep9t8qhQRFHwLsxn7bxx4og",
  "key11": "3WBrMPvAcVoymENov2QvKbyed7QGaGhmLYzsEupT4KkG5d1EwyNh661jj7ymBP7aW6vznXUDVncHAyYWskiAdX5A",
  "key12": "27G1NoFkSRmDGPFhFjRs8zSjVGbykJoQLSwT89GQEY22kB484D5Z22QyypZFBTyCkdBkifmPTo3Fz4fTJkzfC9aA",
  "key13": "3VNt4wQBe5V3pV2jWZJPxaGVq7dAAfpdszFjdA7BVkztC4cjsWweqvaszHeZctbqFTqYjjoyEDn8LhMBeCVuvUqK",
  "key14": "ZDzNQb8borkp6TfDprkLyxtbpfxcgwZb3Dh99CiDKFtrniEj8xcJWhcKei2KedRi5nwQztWKFDL9nycxwjXep2R",
  "key15": "26X1ouTHpt8WhgjX8JBovtXTDRcCEqB15skrY8FjsEJduLzsQ4gBNtTooAaiTL6shjAD5PHx5WbnCdbCCXJZA8zb",
  "key16": "52Wv1gVsDbQU46H2u1P9mrprPmsUEsGk7uJiy69rVRMEGQyt87ydTXmAM7xiApfnaXhH3neQNbkNXT1H1BjXTagN",
  "key17": "K18eBbcfbxcTJLbUpnRtuNTL6yRjb7cXAoTgk3bT841NQLcGqysBZ6qGUJgwufBL67chhxX8jKRA3cR2qAEzdcS",
  "key18": "5apmE3J69NLadFW9vKwxkdfnQ1Yf99MuQgmqg9M7Y3RhmsUxEuvDzzbZDwfYd8zkotcXfYgDXE7PweYiyFpJCWZ8",
  "key19": "3BCTKHCT5r6heXsjTVoE6uM2PzU3HRfruecKw938ACvcQJf8Shk5AHp3Y7JTrk4Z4mL42LmgA3vuGjRdcnijwSEV",
  "key20": "5G9bhXgVxDAcz6wTcRgUpqMwNK44E34QFcuoVmkxVLRJnto5xKHVtx5kArwmNNsPBhs39Z7uijd5fz76WKSVCANh",
  "key21": "4Tq18AJpNAfGcx2zq9ZJdp6uXTpMWT6AgyhcjytvbxFfwnodfQibyfGDU2xSdH6JazxCEFsgSNVbvs5zJGatrxwo",
  "key22": "3eQfS6Ji7CL7zwNHfVJAjVbyfoRGU7b4fLiBBNjxeh6jrHpczTWS7bLqzyPJmYXy5sYU4ea8JofywyyPvtJBNqBx",
  "key23": "7wn3HgaHoeJXRWa197RxWLyqWBxRNPFvnUBKM3ZmrzEBH4bmoFf1S2vuRvSs6TiLLdnRJxZv2za53SQjPHWzeSU",
  "key24": "48LmibMEDu6SVVsdPTX5bs9dPJEekyuxraMof2FnSEv21AV4U1m6yNwxJoRxrvAN1jyQdWt6ERdtFZ7LtT4J2u6S",
  "key25": "5HyCLwL1DyuWAPn7Cmb2qpJ5qpeuS2e77dzUUY9PDXb7uN9uSbXsRszNpFuUoqojsui5XpMz5Ecn2cwEf4m6Wj9A",
  "key26": "k8TYt2gjH4BEwxX8FBAjjEiQ7gjM4D8eRSsBovkfZUFWAnN6JrXUbayhyMHkSBidPPLSitLRQEKRgtNiH8vBpo1",
  "key27": "3BsiMe4Nq35V2HcpuDjK248KqenRT2AqfCrqTE3NorQA3rssKpuZTfREszaBFaY4eQvtcSQD1fUr9yMwT5TEvX84",
  "key28": "4k2WcpiV1iDf7JmnAwYxwXqX3LXxmPzSCV8KnmZPqvuxicTsKcznYnWZquz8HSCFdr4kWm3wLdycBXK68jjWisnk",
  "key29": "3Chk6qjSNuRmw1YfjKNf5jv9gLdHV5aEUo8QG2aXwAbGLm3dzGM3JLxtWTantesC8A4gyuH6vUVoQ4ee4YRz96fV",
  "key30": "2CsQV8cccfc6PuVGFMzZ4cWeRHHSbAWhTntoUsXSpY1trp6pT1qtc7km2vVtAbfiV7nPBoE38W85qxn8TXD63UU7",
  "key31": "sN7F7NJ9FwuJhhWsF7qjsfRKGhNMNoFLb3NdnynmigAYm1wST71LWtPcJtCw4G1UXPXQHyzyPUVWTmjcTCP2TCG",
  "key32": "4pWZVgpJc6ndbUp4PZkPAnNzmzKJJtUDc8DpFPdrsn2a1QNnT4GdKHP2Lda84wZxuCF8StJHURXFwro93AU6Z8JC",
  "key33": "3aPWif5WYKBocxooqbv8e3LS48YcEbuE9CJKrn6XnkJee8rdvFdzM5CnHzRrhtG6Cz5bCvp67PG8oLLY6wqod5CB",
  "key34": "64Ap7unabAwNUi9YkLzUZbHVFra7qtLVY7TQRin9rQyffZzuScrj5ngsuWjW1Zp4GJfLQWP2g1UqZdgRisMgqgNF",
  "key35": "rkG8ynvW4s1xzUrcmodm5ukkpHMquuTXmfBcHbrYNSahUr1C1fe2y44G1UQFZEfd4iwWA6HqjaCWpTQ17gC8hp8",
  "key36": "5yPVCMT7nFYuLxNseyMqKbhepwikiFBaKZ3od95BicFCvkPxZ7aT4UB1YXEV5aijS9HKBXhzBPPP4Cps8qiM9YpV",
  "key37": "61tGjGWAhkhceuhbxjXwwkjCF3tp7ZCuSx5WK6J9fVBthuDznjBYiBq1FnJFUCNiLJZCa7EXmE8KyGgNtE7aVYjS",
  "key38": "DLsnH68KrWV1bzTLhsiRdMLwVu3En1uWjiRzpKyUmurcULL1KevgjhEGZvCFok3fCL9Lke6Th2yhLVxE6jHBDqU",
  "key39": "CGxrsiXxsbxmZ3JTXsVYp8XTigw1eLbb48oKHTtbuUfcwiKNPqMHdS8UX76FR3DYZvtQsrUb7VRY4tRufsZefkM",
  "key40": "2h38imLeD2syhacbMjHvCbXz7SDYBt4E8QYCNqb3cxQWVbSM5NkGj7HxBCEmPr23eDpVJtv32iQVwrer1HrjS53x",
  "key41": "4SJUruHTqLAQyCcyDGnU6c6oBcGjMN3ezGAwLdNNpUDU3ureyTpUoqx65A33v2yJQ1QUnbmd1qU3oFkKgi4ifXTK",
  "key42": "5CsDj4mkktr4MJ3tzYck8E58s8DSPZh66NQrzCDd7cW57e66MdVynyZKi3gmgi6mzoMVS7CfNeYPoodsmSXzc4oS",
  "key43": "5K2kBjwqYVjGzos6BdcnBRG6z5XXv3rewzSBc9TroQd2gEFxymgj5oxooan96zYChVXxSkoGg5HCjvhEtqPsGzzD",
  "key44": "5CqWzYEcqcawkv6J44JfyBjmSu3bFQTbfuh4XC8zFehhuuxkB8GzEBR8zkZFj9xPywYxBA9yMFfJ7MJdqLuGh139",
  "key45": "44EZpoD5c56nmannfnLhkSmboisVMxSgTj5Lmiy9N5uHkE51uu6N1wV8RjCFyeKkEY9pJ4TGdgyzz8AgtQz7oQdd",
  "key46": "2NRsQ8bWWMaumhqWAQFBod8aetKxaJyzayJAQuk8yC1pmRPJqxDqszbYeH38wyqokCakpFg4uHi7h51k8RMUiHVY",
  "key47": "TKDMJwmQaTNHb6XUUJWuicwT51usBxq2bC2k1czDrWm7xBkNSP6bE339tV39vtiVA2iYNAbX76wKE6QuMRFr7qG",
  "key48": "2aYFSCfEYKHf9nA2XTwesCmoVnCqpX4EUhrTtKNY3jtwMjFL7Uj5U4gUwGYM1Ku7DtCMsqKvvXC32J2YZCpKzcoW",
  "key49": "3xzEahfJ71Bm83aQKzaPy4HauV4LUiT2xUes1TJq1UVtRW3ZZvcuN5pVwEXoV59KpjrPoZK5f6kdELTS798w5yQj"
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
