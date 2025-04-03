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
    "2M4cq4RVyqbMqwQARWmAKgRTY5QQiWcXKueAyrfNLmWcCJaE91LqdSvKPB3kijCTQSus5PwkBo38qF3NY2xtuNB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raebHXiv3YManhs5CET7ArNyL4rXHUCjd8bLtUVEGwcebSN2wgyp3th9FWuGiQNJT5D4Stp2yJUtDyd716sPrWQ",
  "key1": "Um4ruYTQNhrbjp668jzq65PL8frjePuhy88uYCS6N9PqBkbmBai8VJ58QwRCftYXbTBQ13crEvfkQQJ8QS3vRzT",
  "key2": "AeksUHffEC9d2A77K1NrhYPpRagbSuFaARWVf3FYuxcf2gtztN78GYEUuJ7yFVbpPTeywjmrWLFqMFtopXJDc9C",
  "key3": "67VKyRaGiogbbtX9Gjh8xnANCfkHDJqm9nYddRhYFXriFH4J6F31sJUF4cxs8hUmvVj5K3UgTivDiCkFekkudhGt",
  "key4": "2Kz4G5FWrBN6X7Buw1yFWNBBKD1tstCSJ15VFKd5YQRncTNvPF9tEVs8EU9FfwSX3x8uzuaJFM3Mit2336cfnXVM",
  "key5": "4r6QXnGjU1LdvtFp4NUvXec5UZShFNFReAq8iLmUrYJJXHpyzuK2nTpunas5XET8zX1hs34cxtbEWMrTQPwWvWFr",
  "key6": "5cNotpuy9h6hTA8bSd93y43FPUhueQDxc2r5qWsF3W1enJgVMhebypJPokYFagyfBX4RYRoUmp7eyS7YTUFd25cL",
  "key7": "3DCrdnApj9WMwKzgTSPzBp3zVVzZqtTkAV4wR9tDobQxjQYpNmy35JmajRRt9FHHNDKpbkSYocrWd3ZngqgEhrJj",
  "key8": "4LiAeW5fcbPn6y2gxDKVYszEYzqKBFQ9gdsYEY6cK3pkfRcofwWSB6WomrfGikfZ3CB6Xy6GZ7gVSzWYFaJXpLhR",
  "key9": "oRyJqWffM4quGQtKwXf4LDmhsC7LUaao14dRr9oX583PHfERHrVoxnpYkeA1kn8efeDoGt6VENH7bxAtDzpBw6A",
  "key10": "qCwf8gckJuXKZs3EHPeHme7Ai2LfrheEcQPwYhqobAkxrXRWnf6JthAZhXTMMrFQqgnHSuavaQGssZVsVqaDs6L",
  "key11": "5hrwtaSCLUqwDcz8ZJb3ZDQKxSiSE2ihGceeTkewS8FtGMopB4tQvLe97w5BmYnU9sUjRsnnoJd2Ui4E27Fvm83R",
  "key12": "4GYKXgAZkQdksBEkby7LG95S5YSKa7gyBor7KTYzgxfsubeQkCsVAjoD2T63TiUv6GxLQT29VHXfCMzZXmKQL5DW",
  "key13": "NH8A6Q3GkPh1Jy5XyVyaHvmVuX1K3o7MGsp8R4XYsyvNWB2sqS2r5eoSTL7NAsAvzMwGmPmMXim3btRWjqQkAZV",
  "key14": "9TB8Dtp214Z61opkKgUcPdwVF7nhC73BmapfVQjQcAePi12vjf4PcrCYnBg9Dz9MqXnX1iUDY7KQfJWperi1iiu",
  "key15": "3XD1AD3XN5LwGejr8uyzCws5t172KGTpabkvR3iCPAF4dENftQamavGqqFBR8LaTrASnqcJ55VZoT6hSziyjB6S2",
  "key16": "3KcKgE7CriDScqUa7jyDbzMca4RLaViSEXRH7E2HXuGer4fVFdGQM1TEDZSm1hyEu1pFYcZx4D5Trw4PDWuKG7Vn",
  "key17": "5bmDozjqXGv9NJzkA3JpPe5Q57628jF332Tucq5PcUjni79ziw8kC2B4Pw68nJfQmgY9WCY5PCfcYtek5GxMuzNg",
  "key18": "5EUjoKJpUtbcoauTmAuGNthzxUz9f6v4q2bz86bFu9LnQk3v39MY2cfVMC5crN8rJxSaugY43wqRsJ7PdMQfoKmq",
  "key19": "3TJ2Qo8QpjVwXWpWh1UwktHfgJDSFhhnhfWRU4PS6u4kSWYQN4hXHx1QtwhhzsPnvE639fVfmaSdq35CDpAE2X4V",
  "key20": "ZTSjzq1v2TkhphTLQD8pCbr6V3PoCk5um768qXjmk5N2Gc2hoBzJ75dKCaeAZHZPrRW2K73rXAEeAZ3LBrF4dni",
  "key21": "5VUbA3FudR9mdrAxVKvQzwwhZFFVzEyLuF9Nqc1XitLUU3F23vGi8HRU8HAFNN9Q6pUXTorTq2bWn8tMm1rLeZcG",
  "key22": "3K7JR7rwExhUgijR7Q4eQZFCTg6L1sur7suxLyum2n5SWzjtS5i16KuSAbpUTUUgBYFbw14unDZzjuBtz4oEnaXh",
  "key23": "3tc4h5LN8dAXnf8yxWdLHDJ3hSGWSXMkkkihB7RiYDqkdSd22c7eJBeEfoGCtaLq2vdh7imXgjcYUbDmDFaAmjsH",
  "key24": "4miMW8J2SDySudrwEyBs8v6frTJ4ymcNz5jg8jGuW2ayuSvFTHtBtUAnfpteLzRDSpD7ksEPLF2hCcmwVP2FXuwB",
  "key25": "zXo1Y3rb4tBgF66JWtm9vt6RE3DyHXMseWagd12fucd6EXzrQkdZHmS9UpLcZWWVR9s65zC2gWnPpwBvHhizPFZ",
  "key26": "2demDBVF5hpRAD4XExF9Gg59jgdvzzDRa1xJN2tiKNEPsePCB3iKAKGZmvgAu96CuhwX2QDf75Hn5E6R3U7Xq79s",
  "key27": "5Avy94crBNAagarND1mKaEjZQm4pJQrdxAgYaqkp3srSZX8LYjnYQsmi6Uct9CThyUo6nW1ufoEt5t3WN5P6fUBZ",
  "key28": "3m2GDk4NFbqNd8LgPsaV5jQj3eLcNSthfcGsRXCaC1jDTKfgbyX3nELo8KULfFvGxKLJk7GAFpiMcRub11ZHgvB",
  "key29": "C8Srg29hei8bFXHhSUDe6UPBfVYRyZG7FoDtgCcXJUQ1Z94efEWHv3xULWGRDYPtF2bn8ssCT7sWMt7vLmBbkCH",
  "key30": "bTxopSo7BjJqHNgPkU2EP4zq5wzkpHZzeaXtLVPuWgdNxu3Jh4NPwo2msMVogwcFWAqwuvkZTcBUVqvpEiWyY5k",
  "key31": "2CZehrN2YBH2NMjnMYQnZqKQgNBG9G1qgtmakkzqd9fyVAvAFLezYcusirHdLBnnooHKUj2PxZxzzZuDKBe2mA45",
  "key32": "Bj92YzkX9hfQShqkg2jRUtcSgRhGaJiPBTn8WrgfhyrKLMXaSCvTKumgwDv6trGweH1xEVX3vwXyVwHmd6NrkkS",
  "key33": "26vEKnxsoFnsowAS9xU7Nwuk4bQdBKt9WyFMnNrqdqpfiBrYTzeg8ctvuTkmfMwT76A4zc5HbvGFiD9mZ1B4uanM",
  "key34": "21XKUzaWN6ez2bDCaikaQNDWBeVXgxAQa4cfksVq8XQpBkkVVVYdF8vAseF2gRzb2sNEiEBPBHnXeo8P756DewjW",
  "key35": "pSrr9A9y2yMfTPUugP63a5NwpqgL4nB4dC2Ai1WLYztsDL9Trzw83GBXtXMon4vRafGbqr2NNAAntBECoDnuccF",
  "key36": "EBEQjzsRs6wx3NhxMUd3caXpzR9Z2nYvwpFSF78DnN6s82dmwrE2Ewv1UvA7p6Zp38UeJdC8HRwSME2E1tFSer5",
  "key37": "Mtq2SNMvkrjvRVH1CVVFFbqkJYjHLiX51NvwwVf67uSyHq4HN6Sx7uwWcsddCpjLNyL9jLmjBhWnqo5wzcHeeL1",
  "key38": "5CFDagaNA7t87VynANkZUh5kFgmCa3MxS9fmGMdaHXEwa2aw6Lm6VbEsYMJwcp1nAhFDB6ZR5RxBkQo2hPi9rt47",
  "key39": "2imhSYMsixetBB68iQQnkgwQWVPXa6MZ2r7Z5pTfjRRZb7g7iwNTnd9UMHsTL8FoCJEqjUcbs3A9aTT1mEQYzxag",
  "key40": "5mbSdB9F6PsxfGYVGorE75ny7PDpon8V61gbCBrJRfKFYpXa1zKfGBmURo7G2ZJXNktSm4qPbCC8ynyT1wKMU99B"
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
