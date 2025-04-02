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
    "mD8SbiFbnABU3ofDU29Zz3hRDHWAAtZFkU2YLLGhv8jxMKuHYcTXT83xJucddth5fJ868x48xnThJkdjqhjWUNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GX3EYmRwB5XJEHswn6SfpUzHDCB7FB92Mf3dCZxHdGa764EqqJTqqD43VWF9mpGyLCMRXNp3RJP7QFqaPEdXKVd",
  "key1": "2eRjUj5igkNV91gyBf1D18WNmVutgj5QoTLxoBVqoGTahN76kGFU3iyJrm8E5dVKgMk7bfFr7gPpoYVMFw54kANb",
  "key2": "4FVczFAitA79PqqzKH54dzntCU9EHcweECe65HLG1NDdg2WHg7qiRDU2udk5FvLGAjE89f2X8nQDFGjDYz4vPtPA",
  "key3": "2FS9ZQXnQ8VLu3BRDXULjxN6hGze6HjMJP7kMDqLZktPTtfwguEmYx7mnzz1pbYVn9fWfXqvTDdT8CJ3ShbVrw95",
  "key4": "61JHFaF5ha67WQsQKXEhcHNwTagSReyPpBb58r9LGHPmNujrYWSx88haCryUos6yHQokrefttoCUQFbAHE3ukuvG",
  "key5": "4tNXGdmjCxkn7qRzBKzWQZAfoKPo3Ck8hKzdJYjd2CQYVUyUbd4ibaa8NJoZUc2nWNKnsmLpeWtVHa7ipg8KKEJu",
  "key6": "3syeoNqqRNX4ExWfqZuNjMggctCFehedVBDvFtfmksa7NpVki6A1JDhiprhZ6BAW2aYkMtheGSzpttuvq8HsCUGP",
  "key7": "35zhoek2eunwsQyhFFXhXn4KRp1oe4nxtXFLEm77wFX3P9cAREA5q9muPK7ctqwbQcnKbYa8SwTbjWMyceT5gzrK",
  "key8": "3jE7STFzd6JM2qK2iTZTsiXid3bCYQzYcNLRw7j7uSrerbnfP7C6NMZqYkx8UxVk2SdxEbxzVQAd37NXQkz3dQMU",
  "key9": "5k3qGN5gr5o9uTY2M9r61h1eJ9t4K5tQ23pjQHgaWoCLny7vzqh4zyCNFCoBK4bUwrm918nNozaoHGCtphf9xLPV",
  "key10": "5YqtwhbFj9nMEa5sdfVn38DPTRXzxi3t8XBPrEPJ6VuezDnrZ2aUG1iNRsfzrhTv6sBdTZ1qkJ8KqVoaVaC7uqp2",
  "key11": "4Pb75eqvXKMu9zoPqar1mHWSkQ15SAgTeUKCrd675mxVtUo7c3K5aeaC7PfpZZUAZZAENEeM8LHpJhfDa9RoDBpp",
  "key12": "2dHr5VjJ2PAYqHUo4qqGsPzxzyEzMp8ayVgZeoPMLGUkVANUrep4BZHy7PvxhQ7N3kdEjmwtQ6m8BsCNKPFhpHNu",
  "key13": "3doAMuuEuTk3t2wzfGkQsAGFPzkWMQereGmznS2wctzC8aaNsYx6jBprSN9nnVTPgy7J47DkgjLxXLPf8zg8gjWj",
  "key14": "3oeyJHQKwzdtzytZaEpzTSbGvraYfouH8r3xG8cfs3QRZka7aZnByBJY6xFt2GE13sYvZ6eUULa2ZA8jEiiNw7zy",
  "key15": "5p5xZTPZBZNvFiVm6Z3pkXZUzNPtHg3N29sB24ha12jqwq6iq4ePzKXVPc3MG4txnfss3WL2ddTsEfsHatbkKqF7",
  "key16": "2VpaP7znvjvGER4wFBpkjdugjcM3yVqVR7TqmNJm9PPrrdJ6sTeTGd7kGxXmeN3k1nR4KHC381AGtJmziTHMdP3c",
  "key17": "3V36ofNrit1expMmfCk3y1yZWpzrwAcyCCrAS449XkbEUXxC5nzyn2QKyuCReyXWLZayXB5xJZ69rgnKH4uCYEd3",
  "key18": "2hDMDWbUjmK2SwvoyxErXzgvX6N71i4Mtkbo2rhhYQAvHgLxv1SpT1QFTc4RnSYxXDDthjuhZDrGkvyQ2pPskXPw",
  "key19": "3YQs5iLLfXM2K7fvaj4LMy7S63ZysBPFFMvhSgcbmnacAv9cY3JcrF4BuwaQGvSQYDnRZaNPLkxt1GGFVYboS8uC",
  "key20": "FHMmX6DfuJW6LvcfxYnH4yf2195harPuuKRmW9odk3ojZ71dPkYKXx8oC9eGTVsNvec3tH2AKjFoY1Yx8yHDZMK",
  "key21": "2oWscdLxb2FXqs9saPR93T9R6psaFp4cmn9DXNmjpxxZenPJbHqy7CzELNLiPKM4RnX8F8GPgYA6vrV9tHcVzmPv",
  "key22": "2HSsS2VE3zFu3LbGsiKkYTdsLTSX7e4vk3cTEnGJb7KqjTbMq68d4K4jdgqUr7oXRE4N2nmaGxjDrqLCAxpaKJnS",
  "key23": "2EQGnHFWzLCCTv2ypbGSivdF8hxeoYbfgLu7FCDNmg3Y3r57stPeBs8pCwKtHfYqbbEUX1ojjxakh9fpPAxxb6Du",
  "key24": "5xG3NQFbSCsi7zn2FX9cqhagvNmErkqVQaUcnRCeNPFgZcc6ih13TsBkKBQj4W1dqmo97baG8DPwHNx27Z7kZVd",
  "key25": "545CdmVAb2va8tqQBAWCNMTvCEsMACZEQ4HPeD1KqEJs1cVwzHwCaujQi5tRpshxDovfpakvvAHXv9Aw6jtcQ6w9",
  "key26": "3FGHvxjP11LGAK9otMKgv66EJGEMj2iTvu7FytkXhwTFve7Q1wm1yAAGAdf97tUhZypyTfK982PHHgWyRDi332nM",
  "key27": "66mAQqrXyhwYdvJcqheY9umviNJc1QFQgPZP4h6w9Hm45EmecGtdvDtY9vKo12cDuB8jCb6Eb9jWnDc7xki8oa6H",
  "key28": "tE3LGPpF8gPgyVbNFGcSGQHyBD1v9zrSmjxC1iRdHsP58FKwZD8CWq1LDRv81amguYZZezD2rkQiSoJwDotuSbQ",
  "key29": "2p4bYETsMDRpGBhZse1aaFwoKcRvQDCAWs74XjRnxfntaExQrAybCAHM9LVhA9HbfNxZLhndC9FsKGBTNenYjd3G",
  "key30": "48GwEuzLKXdoXALAruYiT8Feh6njqQ7S6umM4ZZGZjLQ2tJsHkNv7dvSUCdn7Rsg4r6CRNE1sZaaeFEJTDBuSqrd",
  "key31": "5e6YxxoaR5nAdboxxJ5NaMu55rVpRF3cj5zUYsB3NSasA44QTs9LaBgKAt5o8nvfFACGeP7q9wCnjXt29PLUef8D",
  "key32": "5meusmipvjoV1wpuJ98YL7FwDT2b4bS8x5rivFm4DKQaCuMxj33nu4bHVd44wRmjJ75vX8r1eHGpMdRwZBTHoDPk",
  "key33": "38D3guKxWxAYMKhEPN7dNGk6TZKiEEbzFXXAVvSn3DzmP3Dk1wZav4qj2hQxwVwCRBVFGiB6VPQvhgf6MevnviGt",
  "key34": "5qpgEXpfuZDUyuDkaH7N3VdQpvnfor6EMscycsxziTF64RSfXkDzMztjX7eX3ZmpEDgPxpj7RRpavBAsv29BWDVZ",
  "key35": "3c2VVGJSioRmEuW85wY6Dopu23fwfNKvKmgtnxCnhXH4Gm5XAspjiEMZwZBkWoeUzPbs2WKUL13D19nTw7yUwWpB",
  "key36": "sCxYKCQGB9nozAVUyJSQZawrcD64w97vayjw7LZ85kt2NJdr4ycdix5Rk5yRASTZeDU17EPH3CDJon4e8vHgoBd",
  "key37": "4qfVaSsvuL8QwAwtnc5rBL5JBzYp7YUWSbVHwbDftLmfc4jSDfd2WQu39qMQbDwXpK76dnFCxYmYqg5csw8TGJ7c",
  "key38": "61xavCV1tD49DoxqunzJi6W7BJzxzRg6rzbhtbNPBYz81svEXgmVBDeqVqdsNftYqRKpJKBqUcbvEnAdKvY7eWBM",
  "key39": "4uiu5nezHibyZQXyuB9zbaNJwfvaQ2SLTWe6AnWttufiuVAofCzJwm5JpTvD5x9prTC8ZYm8GGCEeJjaJA6bUo5v",
  "key40": "44zGik4EZDTG7TYkvvhaC6ynjUwXNuHqCvETcAd4PaRSzFXWebLGcuNH7JSwxaaD11V9Kgo3SJXHiGiW5gZCTWGc",
  "key41": "3V2xrGDBbW8rjSuLwx47q5pL9XffAJK7VQqrsyT73i14kAcQ371QdzLJsq912vYHbcPbmjW97CcZAuJ3Dv5L8CCj",
  "key42": "3h625uYTLtAmiAByCoAXGzfzTfJvdjeqbPeyZ7aufab58Wy8y2NxAbKWab2aBh5rQkWcdfAbNGVfNwR8GKNiNRyt",
  "key43": "5zUEMSLBudNYQK4cbqLPpcCZxUie2LmfimBoyPPrDrcYYdCJ6HJVLChFX7SjnusZP3o644zw2gtiosekQdJGz9xJ",
  "key44": "2RESeB1o8MV9yKw45nqz57N27bGAzT2hZNKLYPnsuLL6rTmdV2WUzs3xkzQR5XyjNyYHqBwTrXAZp4iCAdsseBxh",
  "key45": "2mQ4ChqakoDNamEXgRYiF3UmouxZurf6hEHLDE6NvfLL2BnXkMSkSR3H2Qv2XBggANHue7xexX8pja7pYtZCbQ3c",
  "key46": "3Uqkgfeut9p1qtuMaySSDWEM2adGE86m1uohXvBRKwC5G7LrSDYkJ3wyhCnUQLWuAfet2UwPohPGLBideJFeejo7",
  "key47": "5HU4LfpWoz1smDvtpWQDqrjyTsWovrRZNwTrfvt3LTvFZoo7xSWBa9UY4fTedbXi6Ddtz661B5iqbvcxDiiQFdGq",
  "key48": "L6FjT26G4gQSxvXnKCvwjnsbyQAhZUkybZM5yb9938FqFAGT1N184VcgmbvizVyEzMYXFyBnbJE6RGZ4wwcHiNL",
  "key49": "2HA2djUWjpUYsdsE23eAdgvRNzM2PXverhekgeZ5rRCvKrroMNEBCcVnZjmTpFFksQfPfkiQGTG8JgjGbdLH62NA"
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
