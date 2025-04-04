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
    "32pf5mGNMg4G8FH8TAGuSmUqLd14R1fdSuce5D8izRRiGSzxkQbuoqzMmVie3qfVNSVJFTkrEdDm2DRBEKUpGHeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hvik2FEbcART27BxwZFRF31yC3cNrykjR448NjCNgTe5svRxK6B1A42Afdmcu1xmj1WsMT3xdmNCmAPJqWYoeZm",
  "key1": "39qCHZr8x4hXioSKoQVuZ7JKiwTU9VGUvCMhGrizTy5DJmvrUcu3fNdeEyjq5bUweTan5RDZfFTJTc3Lqbak9j1p",
  "key2": "3VfXtyddbestkhvBBbJDMUe7hCYMfTsisg5ncWCRsbuXbCSAsM48pbh9QaJ7syb4pNXfipEP5Tv8sipqvCssZCPb",
  "key3": "4Z9inMhPMXohykWReezmn6oV9Qf1xzVtsEDSDR8qcVVmb9Mj5tGMR34x4dSejuTGSz7M98H274rSaoKwJi1bWXib",
  "key4": "5JsfDYDzVdyzyT3uRabPaDeu9P9dNemYJiFtXeZHDFPWmcsFL9btvjuWj6og5wDenibKwBEjD3kq8nY7rwrURBmX",
  "key5": "4dhBW5XHtQbaQY1QFQkB3kYSrtgM7nDBFiQuXGrxznjy3onFXvYLz95HB2g4jkZeZe4fSub1qJwR9fCm8VahWkGf",
  "key6": "8DGtzAt5bNZYpztPpU4gHDB75GUCLUZgKJELoQST18ULtEPbhXTyfk777MY7v5Qqi55ff7AXRxytUWqaue8b4eH",
  "key7": "5aq4LQ1CftW4pSmTFBB2BuAkGcTKuTxmjKmYUhiNBem9pstoUR4b6M6rKWuX8B2ik7XrYHhKVair7upWsjoGnitc",
  "key8": "5BhUxFbtSDnEmiabwbkVKZG8UdFfFXSaC54CMFbykaqWARsjHhoaXdJDXchf5G9RAPYXhHkSxv8PykZvsi3GzTxh",
  "key9": "3nZEYXPjAmtwFyRDydJSYRkutj1XbrCCPB71FNBCGvWLNNsETx329bMJ45Cmrpszn9QxvabP457D8FFCrcNjnGgF",
  "key10": "pjBkaPDHrDazgPmXoRkfEes37Hw84TgFT6o2XXz6kbJQrN8HsAw6zTRqCuB2zMnWEBed2aAcimenh4bE7RS2ty4",
  "key11": "5xzDmTJN4ygzCjxEAE5hXSAwdFUj3pzfJAaVbAEWC1sfdnDQH3q5JotBap9VW6mSDvz4Tt6aPpusWWsXWKeFnGLB",
  "key12": "5JRTXozPE6MKAjAHm3Yi5tufYGH2MS4vfiAPxqFipGwJMGeBYXusocFeU3y22h3Bv8n4qtxPVXePVB5TZqEvrqKn",
  "key13": "2PozDjsxsq5ceiWes79F3XHkkVLtV4nnEqEJXx1puGXUpkUvxN6ddubFdqNtj3gDvK2HsCJ7oDpS2g9oe2Tcjszc",
  "key14": "2oNxH57VBzGTcjAwdUQVQwaeR1gvvyV5tSoZRzaNZFA6z2tabek21yCchxT65GiEFhj25a32i9SMA7pbrNPQbtn9",
  "key15": "27RvG4BHtFLYDhcFS3BRYcMyUAyFqWWcMaUu5GGprAAcXVr3cuEdDP5gmRDtdXEQLc7PDWKNoxiFYkcdjn1Ttznu",
  "key16": "5F1U3JxucnoUgS4nThRt51SNFdD3KW3sFv4qehuzAub4Tn28cfQx1BUcHX4sjR1TZEdjpkbBqcYRGwj9tFhmNxR9",
  "key17": "1Be5vsJPZXFJtUnMgvXgNh27ziLGhAGCrB7mgJ1B9gvxZKwNyRhuvC5eY5c9sfrU9ShLECo7NUmyEzC3sAQUD6Y",
  "key18": "34xBEVsLBwiSTazJ5RjxdhKHsW72dSEzvTHCoyQy7a86XZfCDHfG8pWFrtQa1b4J8rN7y144c9F4N2jjx1on3HJJ",
  "key19": "5gDQ7vBXUH5FqFwGECTqG8Ljvti3ZJd1NxyFjb8mkveUUMdnUoVG5d689QT27oxx8tipc7nF2DvVKrk7BGaYQeNp",
  "key20": "57SCcXDsP3UQo1vFn5NeRJ39DdYeFfWbtpzjJh2fw6DEQjDPpgdiSXbANNmxyHn36jduzfZoBjdq4xpabhizCtfR",
  "key21": "97cWjyyxFNn8ZXTnng5NvkuvREXLvWC3VydbAQDXar8pAM5iR6SqYBz45XVQJVusxwxhLQ6qUeR1ACqUHLCm1Lc",
  "key22": "5nwxG7nCoTWLZRG4SyGkVC1K7HPfjD11e5Yp3ZqwEAv8aEsRqwhiyEQw7FUBngrhg6bYrsLCR773vif8ome3dP59",
  "key23": "3UqALjx9Sg2iu6UEKFMi1UECZNie7Z37kkuDrMt9YabfcpfWa1o1GDzCzEwDkfBzbq5PokGu65pSiE8eQfrZexHV",
  "key24": "2JYRwUiojdM6qVNuFSkH7wgMqZKeAsf1XZvzv3RwjQX6t9m1hzCpnDhTxPUmM1gBicHqTSgGcxnCLrsZfrhe5izL",
  "key25": "8M9oTtiKQSkD3QZaPnS8GxmxvRzMiDaeU8hevmv4CCc5CmwwwixojwSzrstR2KWhJFm81qToh4adqBSviQwecK1",
  "key26": "vDvHBrMBAaXdvnd7kBnGVPvPGN2K9MqZoPuQY6NW6hKPuTY6zLHu9QvfYRoqFYAUqSS241xTjYGTccSWParvY8h",
  "key27": "3UEQ93ZiwDu82RiuWnfYEahbuVB9sMEFCLwyLzM9e8N4N9zvvZZj8tfyPn41VMFtHAPzBUeasfaGyLi8eUcJEYXi",
  "key28": "cHUSEvNm7s96ukB7PPuUe6yVqicZE5cJpwnn1qbeKpRsNW6Qwdfiq1RVLyPGYJG9cWoveHnVEpDmcHJazdUcCd6",
  "key29": "5eFaVmfDHbbjNUbXLdLq8XNPmbK1NvHmW9GzNHFHEMwCjz7VF1kfvL4DUphTCksjeHQVCCVnePSJRzsxnAC7omYW",
  "key30": "2Cp228KQUkWmUpbPnGCExiwfCZSWZrXDFfmoB639YmTND9EGc6K72qjeBzzSN6T5pjioUUkfzvjn6EVPf5sSZqfd",
  "key31": "5MZhcKTSaJkTyMKFGwXdN9jxQq9R36pvfX3JmrmVuckSggA8doGWAvNkjYHMPMTAT4zhbhELTshXjRKLMGqTrysL",
  "key32": "3ZjhwFuhGNTBNGxLC7zVJqugSECuGPk3ckbcg5Geud9WnMJGL9DRD33B2gzQMdP5CncbfSAvYdHbh6buvaUi42zu",
  "key33": "2sLRoe2DJhkiwEjAxzyNZxLkGYrkGLHwcguhvjv5ErGAfrguReiVLDibxTT1Jba9biPzkWH4uYfFUMm2jJD8GYin",
  "key34": "3NvJQxPzJBZ6bYUtTXpzpsbj3dwVu9U5ofFNgztp7xpx6WnDNdeEnxwnjHHp7aydgjGrJGa6odcrnzP1uNPWE49W",
  "key35": "51DxQCW9uLTX8iVborZBEgiLwvaF46ouXyzMqUkvfEBvRGcFijsRjmJj4nGYJ5riQCs3wNkNJsTFK32VQpz9r5dR",
  "key36": "3JD5UHsM4NWX7R8pQsDbnoq9trBzZgRiRLvZFWvKmM9oehW9ehWvYs6bP3zCMXheMzCcYJ1F2yz5qz8dTL4DVmT6",
  "key37": "4RTfHgqADy1W5zRcRDhyA9SuUhcZvCSY4yPbn1Xgz2cqXACD2EicWEmWF32joJjipyJKyQATdtjYnVyomZ7ghEHi",
  "key38": "4Vs9LnyGAHqTVQhRnf4JoBycC9WZVUbHs2Q6yLdSTQRkbPRXv3HtQQ7QMJXoW1bKdtJeCPijGJpJmBU2SEfmWVPx",
  "key39": "3qnWB1zjwjkThMWMWs4bRA7Hk5Rj7R2SPGk3GYnHgZHSZpjXQBVtb1WF6VjNbpoxkvj5SpCBVJuE8uvzHu2o1aV6",
  "key40": "4QftAd3eAieRu6DFws4aFXe3d9XYcm94iTqdHhMZG5VXSHeWqoRXDWbiR8BUYRJNvvfaA9ZQg67mn4paqvKN7SLv",
  "key41": "zPEhTtgYGngKn6JzQ9Yzz4wVtJWbX9YvDxMgErsvqtrfPp1WuwSzhZL46pAAHerAtzff2kixSXTX9nDJxVTSMz7",
  "key42": "4kYSRJSC79NkHF62Rhw8wQ4jTMYFt9mVnRGKxUmc4BqkV9XTpEcC4jeh9T7jtUNHtuNPxXivvY2vxszi92j2FXwx",
  "key43": "5eDvaNfmNSuPpivXiiQhJcEBp4cTTPvmpc9MMg2MULu7tvVZe4jysjg3hXTG3Psbc7WKkj3uMfmGVvBgntCFCe8g"
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
