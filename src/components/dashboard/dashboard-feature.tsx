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
    "4baFkTypXk9pEcCo9rEzhrpX44DHawYFiZHnuaEVBj3goXTKJA3DntHKj7UZE7VS5xHPt46FWZXzo7YHvMcTDGv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3NmgP7wcQauSL6XVWzRkMdMjPNWmoK5QKujDgiT9D3BL822R3fKnhZjR36uZFFU4iRhuaSZLX49CoGNok6CR9E",
  "key1": "4gxg9MmND2xWrZKfiPjTY9QTXwtWRg6GN5Zp7WMdxQCU2hzZ5VVTNqoXLtZTwj3C3kXx2fEzg3yF5FnQPqKmKw7b",
  "key2": "4dNKthYvVcC7ByZC4e3RmzK3TsG7ibUrE5SiYFpy2ZXhn2i6ap8PS8qiFCegGm7hqTdN5wj75p3zprrA68TCkW9M",
  "key3": "21drCeqTF3Gggg36MkGfeHjctxnFAS4zy7uvjGbh9CjWwtMVHvHb1xf7JtDmBDG8mQ8dNPPnX6JxUyA4ZpJheXKF",
  "key4": "2mNZeUFDgyZArJEJvCcRDhMsXfgJXVqvhyRHzXLUi7cdj41M2ZiTtJ5uaQuVf59kPisnJbTYusx8zpXiqHcRah8y",
  "key5": "DNxH6T985B3F4uh6vHzYbRA3CkejSngZPmquBMu2PyrqA5Yd12TNJbzy7JRMKgBuku1AMXtERoUm2YDSSM1XXWz",
  "key6": "4ymLcz7v6QxzLgiHKoZ6cG2X8uMEGH8Zn9mG6vFjkFCkNnnsRXa15ATZDCjJjSkNYDJCv7ZPfWFT7svCZe4Tqxir",
  "key7": "3MJDez4fTAacd4C9sLPgpPqsuYM1q26quh4H6JWH3uogSG5isiikrAoKdzCssYRv6nHzT6uzgUo9zhdp4QM7VrK",
  "key8": "5bYXvmc3SNGzWAygjF2gZGjffkMsBMeyc6H8gte7GXZpCLCipXnXoDRgKjhjrAzHawVhjDPJjRJ3J11vKU3pTTun",
  "key9": "tWAWFuPoCXk5kcxLphQULvFWRJ5BTGsKTHLVNiFGn4Z2WGMqfi8w9YYgjuyjNvnYMZzSq2odRU5fm1pUzye9tJ3",
  "key10": "3LwDwmifQaEn2axdVoYnRQ87DRQyyFv1S8X8uDkLFaSq4sEbHqCrALi5Fo4suaypktkjdPzYgdBrB2sUwbLy54RA",
  "key11": "2WVDUXnfs9QcMomZiwV26sP5dzTnXLxyzP6BoAzctadYSxxMFxQgVKk8JSiJzSs1psuNhoTbXTHPT73vhKzMekFA",
  "key12": "cTkPUsTgeq6fyZSF3DpJGKWXRztVXTsNHDTtgPD3isHndmVdi9zUjPfrmdjeMUc3TBq3QFoAHNx7ourHbWUtgN7",
  "key13": "3PGWGYuqyvq2HDpeUiUnxRz4Qm5qd1j9AzVJhLaFJ4HeMxSbDpKWQnNF8n7LjCvYm3tV8Pfz5MTGDKjqrU7Q6vBF",
  "key14": "pkFYEBRHZMTWjCY2fRjGjHsa2wmCdEgv4nTQ6JRnfcWdVNmgxJMaDe7DcKTN2zC7G6x9JvNZVXpsTdW6tHKyVAE",
  "key15": "3AHitX9fzgT71vZFuK5VLCtCpk4TSTPRXemiW6P9CqVXsDVkBZzh1HKX3oRiaX3KvHHR5ZTnPUkvB5tXSBYmwgtK",
  "key16": "521o4x3x96BT4gjEGjKhwU1v2yjVUyUaELJMnLE6iTNBa4n5j3igGvLr919UgzzYTRATL1B7XJdXC7ddEQFf7E45",
  "key17": "5Wu7jBAU8p6T5tFh7rCktz7g8rAjUUbs7XZnGA15Z9iWEep98jW2ntdiD1SxiTyWTnD765nrgkiUY3SbzUQVFUs8",
  "key18": "4BHiX3d241ArA3FnkzUq3MiY3v6SyJqXYFVsBEpDeiAJ9Mdo4fSsUbUbAC19ngjLyxttxhHhv9PGiqWephKbka7f",
  "key19": "dVfyGxV5BoCCH5pUxuYE1CkLhVL3M5xaNSb9VFt3CHPUjXv6VLUmVVTjJSFua7qzxPX2ePNPwWb2mXU846gSU5b",
  "key20": "2ogbijH5rFLW6uxDDu4d539kgk6norUSyc7xF1gY7MSy9ZkRBNgkb4vR5N2dMReThD35tbJkHtaQHHPEMhyqj4kV",
  "key21": "Sih3SwjD5uN2HXr8JQjoTWX3susss5segPgjMxGW7tqohK6PeDCGwEuuZqNU3NvcddsctXjx9zsth1ESU549AN1",
  "key22": "5unoEJbYm9u1CkGMU1grY1415i46BQTBouxCGa3mUwnjTU3iVypr3KtBZy2TDFb6QKAwyR13Y7xCr7TmEHe8gS1i",
  "key23": "3tAge4gGKjR1VYT77Nx1SBQAa3Xa3MLQWdfrgx2n7VYewhGub715jQ46CrTGpuXwKxKBnYatdoTnFvKLjDJ9MWqw",
  "key24": "ujbjyqpg5fBrd6aiQXrbnnvQXiPMg6exSp3bTiZPuDLz6xW279RYubJMemcWSj86ixfd9oYYPVAvPZrpqEcMXSf",
  "key25": "z1Ketx3DvWqPgPCCec7rWWERwNhozB3SxuidigEWmHATgxWL36YJJRVR3LBFeWwsooJLHfMJTVctM9R4P8Zom7c",
  "key26": "567VVjRt6qTRioumprPAfLxZTcjHQVVV78yXphbcPc1y5azMrobm9yuDrusL1MWVtnY21cV8J6uzfzLKFCrqqxpM",
  "key27": "3ybBeL4RrcKUdh5qdBE8NRsXWVLAMjP1TKmQkDRLvQWfcL1jKH2MVZgn2UzKJmKQpWogF8G35k1C5CgUBic6KXBA",
  "key28": "WDtVp7EUE543vVecH5pSUXEhtpMjjABcc2VYcjbR3GXCgpqk7qdqgL8x8YbQa3cdtFwQd4YDx8b8p5NmZGR8Rsc",
  "key29": "4qGAPGyJtzoDTU7YoKb927Ww7otCqfeXCF6SEa9C1ZQUCViEnCkD38JUi2s76JHT9DuRZ1Eb1eeeNNRyK3GHzoXE",
  "key30": "XPngKWEd5uQwZe9RXTmd2w4gD9wibEMpXEfdTFwC5GkB3ubkYBnxWVKvwanu18GCegwZ6KnY3UwWBR5UgzLGtLy",
  "key31": "1LouA9yTPPPAoPpDtu2H7RNBRtkM764gBwpuchVgbUvEwPSeV8gEan5B8s453kENiCpCoDLmxdM7XyrD4VQgohn",
  "key32": "5ehtdydVaxQ3gncDyxCerqtU1cauA9YHYnttS3XbdVtKQb8yZ7A6mPikjBAxvt8URjHAY7wK1dmUNyJDReLPCUYx",
  "key33": "3DpwJX39qipP8zf4ioZFjWZgVMb6vAzMdnHaFraoQHSgi5RZBpjoz983n1pRrK9ecnSfZdtLMK9HXmrxouDLvggg",
  "key34": "5iEWvLZczcxyFUVN2nn5gXJeXMrUxSe7J5aSKDw4hZFa6hu3RhwmK9D6aYbPgpDFygEzkgyAcmyqrrNeNrjB5nzw",
  "key35": "3Un877QvdThyszUksoXW2WAyARV7T83yQtbxrKqHFNDodJk6j1xRD7VzZhMa8AUywUh7n1DFAwZD1kVm14h9zUX3",
  "key36": "4Q9XJ2gLR9eKLtbZBUnnJPAmPgmz3E3K9aeHGjBTSj1DbnP8kgMkBKxQxyNYYUxaK5GUTAj4QLHKpw2wgKSdmQ1y",
  "key37": "53Cz3zTU6HxXwXvZQCS46TbM9p6kYE61kRwBgLn44SW4NegrAMYeCeSQQT8KFLkfaY43UcsoQffHSdovTUZKNst8",
  "key38": "2M5Q55yUJ9kUueeLVsk19ERGQ8uQewrzQwZDXZKL8JRSU15pAxh8m3mmJNBG8hbpzmA9CXkpj7T6ySKGBaiL5AFA",
  "key39": "65N4mheHcB7PsdhhdA4QDtc8vuuJGdJpxq69yRFXfVXseoqPyRf8hqPRLPo2rdapxr8T2A5of4gqrQacANjD6B3M",
  "key40": "MKHY3eSDCDeQZRxCVnSnjQLMHCv4fUFgkqKEVaNvVovsiw2sc6fDiyJjDD8ZWg2ksZQPnQWfnMAFEH87E9Rdv9q"
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
