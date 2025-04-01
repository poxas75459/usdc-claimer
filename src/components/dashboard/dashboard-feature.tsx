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
    "5Gqgu8QyPsjjNUQbX1ipBA9DYN2fMDRhf3kCjAMyPbboSePs18QjgSTE96f14s9H2HJ3dpP4sqG73uAq1jXSBkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nMZsBeH17izPSYzk7SsL7Lbxk8NmC1k2ne7VAB5AgRijL1qxjhdTVS66x241hJsirBfpgQqxBqqbGYeEBxMmaK",
  "key1": "34KWmsU7Pf4Mwg3SCaawqHhaXCkv4dBJiJ6q7m58nMsf2TYT6QM5o1pYQvdMqLkny3njf9f7N2scmpVTYFMWgGhw",
  "key2": "2a4C2fEPqstV1ecNzfxyHWaqTLa8ikWPAwKSNCms1QLdg4oaPaZBcY6k8vnp5MmTydQ9JMFHjNBud57U8zQS826c",
  "key3": "2BdgiaXA1V33FyWC65yUxAehfgEHHYg6QGTCXfoxXjfwVcC7Ku7SfL59ThdhwUGwzeJSZsx9vxqSVefaJCjmsVc5",
  "key4": "iMCHGCnP23JRpSwAJAFoFtzDRpzBPXtyKhcgnfCYfuvedBrcd6KN3YfdjTWVc4XA19qiWvSLuE9Tb6enXdyLv42",
  "key5": "dJCb2nYZjVux5L6phSEcws2oq6Yk3q921TKYN1YT3oPzLso1oynYUGnJKGE6Tf3VsvwS96rUspqnraTaySWBepw",
  "key6": "3QnNtWbzJAWbujAWPxWrrEQuma9szcrcoeGvKo9uS5Hyg59DeS5PRJcvWujAbPYUYqqfYkvS4NM8ucESE7CjxbcY",
  "key7": "57cuBQezfEqKrCKqbHYCHD5j42skVU7y8RfDLEW146qUGAVx8oyZUjfDdvFiHuk9LVqagdM5YFyvvene4AHoT8P3",
  "key8": "3AhAmYiSkqmMnKnaHg1xVrnBk1Zf1mx6bVrDS6xLMcWYnzuRemLZHbzPZXQHm8VBc4NqNNiyTF9gJz629wga4h1d",
  "key9": "5XCrD1GTsJeeT36bR4vgfgu139Dbitdh76gEwHzZtYq9Rf1pNEgn5An2oBAmswmpR43hjsBNfNzpj2qsXNHPW5uc",
  "key10": "5EmpfL72F327B1prxiyNs5C2WC69x8H71zCyD6MtZBAz8NQa5beGNxoXim7D7NUanLrvvC1FTPMuyoSKqQfThTVy",
  "key11": "3jsZYN4pN8cVDEsVVDySMmzcTUzpSRTN9SrJGJVvEET7uBuVVdoKpxT82E77yoJVmmKRs1NWX1Z6SDds9PgGGxNb",
  "key12": "3ztWviQYVd33DJtnpYrhcTpHW89sWimNgxPRJADccS6kpb4pMNDMAZh3zKHhE4NEjfunsWgB2CU8fCBtiEbgMrjQ",
  "key13": "592rvBfSbkxTrMPDfLycZw3UNYebPHVgerAmBpHJP8Zjniq72UUgKHihGHKnsjdFiVHe2AivB7UEvNxf38xdNAYg",
  "key14": "322NEuPQWRDaMB3VuMg8efRAKE7qPogmLY8L3zRocPaH59vzP5DXRG161tuehztqyKjZiZbAUm7PULUFds4UvtHc",
  "key15": "hvMB3hnSDQC4p2DKnPAqMc2bkZKoLx1bp7dGtgy4LUJc4iJsYVHdJ7pNLvtiixRKQF9Ugmem7hig3hcVQdE7WPD",
  "key16": "4kxi9sq1iZMi5sCk8F5mRJ9YnsWEmzuvjwPxzX2S3Mps9Zwp1sSD6TUZEaSwmDKfxx7rKC4jGVAy2hKBmEpeJxAF",
  "key17": "5G8F5TrPc1KhoM4v7QeoQeYd6UitBsPEeN6TSb9zndZ66hVKWrhmws2rZTaVb7j15skL8HRgEEshzPFKbKHXTsgf",
  "key18": "5MWfcJAG2kpmp67PKTw9uoAheGauLkCMa81ikjJFemAm5WZ17HS7DMdMQ3qFq3boMSNDC3CUEZNDyPytfzh4yAno",
  "key19": "5QVaZNN5kj9j9YMvFjWXjuarCzLVBFqxYNJgLG7ie7AQHYiZHvU2anYZZPQVwtvXwJ5KEMy35pAvbSUtj4WQSA36",
  "key20": "34rMvARvC7nQGoC2VFVY59mok9PanUCHrjtv5BWd2S3FU5v1eTnEFLAJ3Nw6iHprckZywawKsFZfoVQtEqQGxP6a",
  "key21": "23FQoQAvQCZ2z8tw32Lt5QHN15vE1ZCCXSJrBRiYpbTeAJSUdSsi7oozE7aPBtvQaWjM1WZGQMtTTe96TkgcpD9W",
  "key22": "BUYRpSZKDaxQBAJujRFhcmXfTbHm7v75Bm9zYHob2Qnczd5iedHMndQF9PJW74ppgFBqtMVQWcECbtU5v8zMdY9",
  "key23": "3WC8sMvGFrmdW2xfNhr6Xz2Um9nWfq9ZEVpL79foxWafqP2NdDBhtcAZzmsDUCJyoJuqKC8dV2wvLnw9W7YjHHb5",
  "key24": "3NgrHRAfSx6Gv8qtqYMQNQZGZXr6P1Jk6dtd17HXmjvVi6rdnxzdcP4E5jFtfM31dnUmqW7M4idiu2jptR1CJmKf",
  "key25": "26R6QACht2Rw7Re6jcu1SWHBVtGbkrMSZb1BEeixiLAo77Ro1P31e7xDmWQkfex5xFZtXnH8jEwCKr8vp7PaEGuR",
  "key26": "4U6giQdm9gixPZoY8HjaXusLzMJKCC87r2CcQWSWigQBtWBd7nBFqahTo2nWMLLnfPcnujjX5p6NWCtUX5hf8pFX",
  "key27": "3eAdc1Wx74iesXbEwgRHXj14V95Uyk288iRXWdp5VkthWSU2ZUNm4Gmj4HZcEjsq3q3UWF4qUDadki7WCArUiAmM",
  "key28": "2GUhWyKbYeDCkEemUB5pc49Dcn7HCsKjd5HZq8qQGZuMWeEQetnLhwjYaNtZBN7ouU3Q1v53MbKZmkUBtfp3jCtZ",
  "key29": "4dvR2JcKmdM8UEmnTMobzocYLYSkHFsw4r2UP9AVUriXSPUHYTjAyE8V1gDDjyBva1CC3TTbh3u5JHa5c4TtMBYm",
  "key30": "35bCD7fz1e7jamdmAYfz5sj3cBZFDyRdXqSgv68YJnNEFkvHPDQBhEXLzYrdJQuKAmwGtd5tf6bjiF4Ws6hhXrzV",
  "key31": "5LS5aUSWogmNqQgmTJ3v1jiDT3FquR3dRoWmut9qkAH3bKmJUcupgwtTcumwxcCYnEk2LmhCyu6KT2F3WHh7KL1b",
  "key32": "3MM3ewSvfqunEC99JME8isCf19jgqKn358uUi36z8Yoq3tYEKA2Sfws4hiHG5ZFaoMyVdYYbkcMZNErDiQExkHoy",
  "key33": "j1MsvwkjH4Ahh9VCgpFqkDggR4sBsVyfNpKjNQZA5qb6wPxM1sRtEKskBgUiB8hbXVphQZaP1SeDREycC3EiZvN"
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
