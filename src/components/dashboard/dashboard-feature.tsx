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
    "3XSin2p9ajUxgBm13qmKXh8BJGyGWF7EDZVXyXPDavUZ9Kdof15WdmgybfjY83dJPmqj3cV2oCBWnLXhBgQNsjHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMGaPXd2iuFwsfDM7yEmYM2EFSyuX8SGFMVRWzRsTq6ds1DFrjHw4kEkoCtc4BagWXcwNPj6WkH32cKtTT7FjAc",
  "key1": "3DhjJtcFmab3aYCyjNHBszMX4bL6viCtr9a9LAeueGj9ATz9M4feXohDaUfQwoiy8Zo8GDHMBw6k5kuXHSJkwGTx",
  "key2": "4fD3LCj5uTQFzAG5cmsw3JyuCkGBA6Y9FQdSkWc3pSFyB95RZDCRLWswdBPa9QHFaeCJh6hWpAhwoVM5qDTx8sr5",
  "key3": "5KRMrxHs8nSm3TFhkLawHBUWZmqYnwyZkobXQDpZcdjo9Ey9naUtPK9hNicdmwYG7QBeoKTs3NrY98zeLWcTarSi",
  "key4": "4gDBjcmGGn3CcokJyQoQPjJaT1oP5GpnYXZ2PJ3diFs3uNHmKPG3rHDM34Lpjq8e72R6KR8cm6iWJapx5fb3hMYU",
  "key5": "3mLVgX9U599axGT5mBRDnjWHcc73g5Qw5z8WYkhTDJ5TWQfzLWauuV7hXX9YxLu5KBNo8hUyJpCZruj3nBss4NPb",
  "key6": "3VmHZT3cdNrCpzQf5C7dZo2YYGwT8kkFG8HhHTQPrto4U8hisojPxezPo92qGxa6H1gFc44s7sWtULKBq7JvAoyH",
  "key7": "2SZ9QJNkgmceHuuWwrwqp6qVyHGcNsUq3qyL5ZivbCq1oCmAQqzAYJyyREsoFHRXbJWKzQgoH1RofBoWDsvoRoXm",
  "key8": "TjPKpnS1SkyCeYY9Mjqv11gs1Z6HukeKc7FCLZLBRLxBdMQbeNnPk1poVXjjdMauhNNE3WWKufZyXptqYvKcKBy",
  "key9": "5ipfdRQhMiN6Px9mTLpPrHR5ip6NmBXiCszDaUj6FHPxCaqk3yNXso5MDfyz6WDbECicHrVqb8UPcwDmRjx1fyLx",
  "key10": "yris9jWtkgu5ADSV5JigcPz3FeXVgkmwJN1W8NnUkf9P68n52vX1kn7Vr2LUoZbbNKaYQZ8wSwvyURCrTruCGeu",
  "key11": "2mNUS2gyaDWDLxnBNkFuzSPy4Cx6pEFfxNSPj33cyZGPh8m4SkNyXWLtTnux3Y32rqbNYwdd4j1gSCwddDBC2aG9",
  "key12": "3fWvX3ydEnVVPcsBtkkVQtSFTR3zUzc8fGh5G6qCxWySAWGTnZoGHHHv5reCJd11hY9SWBPC8N37iGGdHsk266kh",
  "key13": "21zoox336NDFdvLZQXWJJYJM4kFFF8Qu8LyA85EHEd9XADAkhaTgGjBTHzsV6ChZ7ALhjLSSRw4Z3r22KqdDYkqu",
  "key14": "3qWsTkyX2RHJXqtikXKoT3ghGLk7YYW12mQhpJgxA289qNXeHSgZTGzNKGrtwFFspwVhDKgtRLjfK5Cg3niZgtEk",
  "key15": "2YEEe4CCCNYQJZd2JnHBPmVYHUbtxj7iR8qfKwnviUwjECD64TepaXKukYGteSo94YZ71xSgATj7uWwDrqDzdccB",
  "key16": "4cUWYBSbU1CZfSvsKDtRFCp9af2PiPvc4Rk7nhJpw8nApYweRvRuGyc738Y8925FeEG7fD2hexGUiigwhYmeJrEz",
  "key17": "4c7URAUFofao5E4St7FnYLEU64HmcP5MWgE6ak8FE3DH3CUwymWUXn2dJFj7xTr6k8tsT3MvvQwpmvVYM8ppj1gF",
  "key18": "2YAhbLx2UzmVfj1HtTDVDm71KNA5pPJAoLhXnSmeBNQvLVNhtz2V3Yx4efFWc799ECzbh9UGLfL7BqYvi1K6A9G2",
  "key19": "3qsJ7T2KRYQFJ2EG71ePs6Wrch7rTwjuzRagSVA8i16osqsMdYdggemf9Tmwc3orAKn2h7hXns7zxcSTZaZ7ag27",
  "key20": "m62KnkQcrJ3Ae9ouuxLPPPJnBXh36frpi2qpQDkDzeCqnpGtdtewqdHpVHfbANQt1vAocmEYBXcdNt6SWEpJty1",
  "key21": "4iuGZQtRAgqDuQT24vdYmFaJP7S1i9TgaASxpr7ZPZRxDoub5c3DBqZBgKkYvX2xhMSBP8CBC9Ek4s5e8K6AwhXi",
  "key22": "4twdXF7ritsTMtaR7zMSiKm3wsDXbtaSFmubrciayPM72ixznHZQRwzTS7PkuJLZBTFh3PN3Y48w2aNZ3HdrxJ8G",
  "key23": "3VTcS1GTAanh62DV8uAEsvdYo8kqgCukkyR7rP9rUrZPAHebFpiRHAgCJ3kD7UHeoPVwtkUYghtjZx8vCPkBoLRU",
  "key24": "5mV4ve57i7bnQLJSNymrcx6d9r65V4cuxSgonYoenrYQrRCdCGjk2RzQ6g9geupca2iHum3pqtNqAJ1SaGo19JPA",
  "key25": "1sYs4FhAfNRf6hWg3KDhURhpVtHxHPKcUbxEegp9NEmmwUuerTHCQ7Csct8EX8P2ZSVwLR63bz9FtbEt4kT2WTA",
  "key26": "36fKSasgdHgAD6FhuHPDCmmBvhGu5pK2tq5ND1NkrTaepo25nPgtyPVvcKkxPBYUiByp9PWm3bx3qx8zE9Rz8QbS",
  "key27": "5ANH8DfikQuP3qhbtPcT2bx2V1ZCbNdoiqCdK7K8hsKsbiJJyGGUL8uZujJTQxVGFQWSvUdscH2masrvoL4X9vvw",
  "key28": "391SVuhikZ4wh7rddCDu8rU7E8FAWZ3sFCfWWCgwea3xaCNBw57xoQWP6DKp5XG2r6n8y2w3Jch5zKWjkC7ZepkE",
  "key29": "32HWnF2iHdRNvTWjJWM6UBpGCZW2MzAjRkjnHga88559RULpe28YRiZeFKoxVLmdhdLKEv8rvCEmeuKSAd9GLvd9",
  "key30": "3f8hGZJEjNhi5ajzbEQRPwBDDszEm32DDEJQbDZXHafh1soXaxACbsmiScG1GWrTP7nrMCKjuUxKxGdZoBZ6sacP",
  "key31": "3HqMnXDyJPvJ6bATtCpYWUq3vmgRkpigcKrF7nizXCbzakrRj1vDPFSzorVPUoyqGhQkkXz1Q3tDGzs9eh46EPhg",
  "key32": "3ZPxavvUeVGLvGHph5FfQpGnxa4F1AympNCeq9wkgqQEpz4DrbK1NWi37kmTtbxDxy1NPVGUp4yhcs4P6dYJAn1H",
  "key33": "2kpMKRnozip9d8kGgNp7b31v5zxtUw2QZxU7YRGQfHg8kEwbcX7wkFJPubFnhBBUEHdtuqGXC8JEDrMRrDXyjhiM",
  "key34": "3XFHtscjKX5TSi2HwFKtZ4UHRQc4fFfEKPQWmdvfQ2HLRys37BDDxmPDm2k9WiUAKqT48kqrQMkA9TSZjcDesf4c",
  "key35": "4Hrj3SMXmL455ptMH9rgQDSBmuVUSQ1yXzNVGYG516tKz9msnWgUdXdzXn57WcaB4Dw4QtUh8RfN8gXWyDU49f4c"
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
