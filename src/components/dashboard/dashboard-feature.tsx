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
    "5AGzw5ih7tsGmLt7i14dPR8HQNiUdekpj31VZJaJgBZryQGyM7t75sdFVjM8DWWFw6b2gpfsevKVm4d8GNFii4Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4TQTaw3rUkbtdChLjTTbuNPhEtX5xaJziF7vmAsqt9bCQcJw5Pd3Qps6o9H3SgQhxt56CDEk3Cwksv3rvigcFs",
  "key1": "3TKdd3by5J2qXo6avd4QWwUUAzsdTZk1Ab86dPPafk78y4a4EWhLaKN3fGudFhQ2eetWdjBopHMdUnLW5dgCTMwQ",
  "key2": "3z1bgfbdAZJKhsxLyoVrFX1DdU9XuYUV2wNDfQrcmos7HcryEMg7mx7URrPgoqmLJkNYW8hJ7CGoiyshk4fwKLWr",
  "key3": "45HQkgHtj3V5X1TXRUtFgMc5PPqkrrMYoTAGj8k3hVjTgJ4VXa6rRKs5PDhQ4TK3bKgs8WG3n6gQictG7YHN7EnX",
  "key4": "4MvoLVGxJVoVWrUGGqJu7yk1VLpiEF9mozF9prXusopNrxF2QDoyGxU1KJqncTEpFdcuLvsUyhLycWDr7mMVf4SJ",
  "key5": "4wb6uj6GSBy7R4CLJJnNUC6j3wkA4y973LCoFecZZ3Gfz9u87gvTu9PVwmkfmCbUeh3mcm8DJx4vhqd3ZF3xAfWz",
  "key6": "2JJMdfh9CDU59grwaQVWu3rYdZmTSvoP93GiQMH491F4eveMpdmrR9L4DdtQZKL6497h41w7vh2Ky9viiW3VpGEs",
  "key7": "5UwW2WtKGogp5LG67AxDb2yAB78z9tUBmJXxKq3JE4BbftGxyJM96FzaM5GeQAnfjS3FXqo63cAaVXoHA2agF818",
  "key8": "2UT41Ybkegx5FAVhmAq2n8p6MSg6AiK13dGCWEoP44qELoxBrKps3AVqv5qD8AtHPk6F4nMZhexh1jfyLaAks62a",
  "key9": "2L4K6nTWNaQF5wo7Na5XsxeGuzQMsXHoFY2SbPYQ81So96cnraWJtX5sZQeH5Pjff9Vv4pv28NPXTyW1zVM4utVt",
  "key10": "3HPnA4yufcAkcZNkG6PUQa8pJdqnDR5kkrhhMPuCbtXvVCApQ8rbuutMucYn2zZ5LJBjxPPoe4naZwjd6omwCNrU",
  "key11": "44MEwDqZgwCX2EZsXLm174M4NEJMygSZ5NQYK1NGE9ezxUyHmnT4TF5WwZzXZBrC9hvoW68fKBH7595MdPxNGBzG",
  "key12": "5wSnYawkXmKhWXPB4XuVQgMi3YmQm7QdNfSQC8YPoM63nrcNP5Ks4Po7c7UjZn8dskXQwbweU4RrbBmfUERWqyai",
  "key13": "3abSjDPAKZ6xVoc89faoXrB3BpLaVx9SfjB7YRKP7J1rS8WWCvpREBrJFQZzyvBYLgUmsNYUothQDUceeh65jUCZ",
  "key14": "4yYUxRSVcyBcwqhPHf1aRoMpMRJpiExWwQrTTcJpm67zeJYvoiiJMp9ddNAYLN7n9Rq6YGboFrzLh4YJuYSTWSYD",
  "key15": "2pURDkfevxHs6im2GdQRHZqrQW4ZDAoxpRN1jhd6nGngHLpJe49oW9JPNHLMxczG7n564HinMPiEZtauXWe4vW7F",
  "key16": "3ub7GTAkYXKshpmGhvHRNWzBE67JCiGGo952rGQYkg4i2jK3t6YWDpfLZddLDjyXjCESqNodQNV3UtpibPMhvzFz",
  "key17": "nSPXuLDNP8zYHTHNFqzEpxpy9TS5cqWZAxRZc3J6fSWtJ7p69GvRa2n36feW6ps1qjXANrG5RRUWZEeTi9sibT3",
  "key18": "X4mdJxcvrVUEq13GMSxePyYF86oddK5w9n7NwkLsbUrtkgERjy2PwjCapRQ6azMroWcoPFFWDWTccgkBios6ccR",
  "key19": "3XDM66JekcHYNr44eorwxrhJJ619JaHo9PazL81yfjL69YDudoMVhqHSErYadynbMxenXNK2zpZR2v4rmLy4i51G",
  "key20": "4BG1wBXSqDd6gUhuU8qdEN2kporjUW64YTYNuBjZfei1tbPv9XF9Y5XYG6ogTxnkcVsPKj7KM1JsHHAkvkRtZUkN",
  "key21": "tjQayGcgbAjcNXUzBdP3JPP2CuXP2FZA9p3sZCiK9u6C3EWQP6AbLe4r4RTiJja4jkKmYWoHBResdyDF7X74MAq",
  "key22": "5zU1VAikNPx6ysjswXuZWG4qCrhiEUZgCYo5WSjJYWArFB2SbooNudzFnSFtQNd2qhmNpgYJy8mbeGw3Tkiz3jYa",
  "key23": "5N6uHuD884DTeBXCj1Teeyt69A6cXSSvUDBiBmwkC89YDCNFag7LuzMP4G4Gc7sXJPBUy4pa69vStKKn7G3YqzSX",
  "key24": "3TzNFSTYDGSntUz3RU2xQviqXRRo7UJg8aydj49Hjx1x9XA8La6vsKVZFVSgi5MFtjzjrVdLFQbqEUNp7asvgdfu",
  "key25": "2EhGJ6ifUrSe2PqNPHh4nZ6A65G5UksdcSDrNWHnyiU9CV4yrijQe5r8if2zDxFBXfw1b4Vs78gDgKXvQFWcsrpj",
  "key26": "2gpqx2nwDHgLajGPyMHvCkQr3SaZHg84V5JqEmTxoZcXTXY5oHETupVvK2mkj7Drd44YWRPyWicawxaLnQniBEmB",
  "key27": "32Fc3V3FhzeTT9Yd3AEZTJ7MAsKeb1PLP6tfpCqcWBeMbekiowWNc1FUfTvGy8ta6mrhkAzgRgMKwanfz6ormsUy",
  "key28": "539tUxkSH3xFX7oqknwMpHH6g7emmp56Q5WMrEntVTDzGyVz8a8KmaWvQfXna77g9aWfMftzZUfajTF1r4NAieX",
  "key29": "4b1F3sKEEFB8P76XTbPgbmKqbMNCziUwedom7Ta4xNeCrb71iKTPTuaqnm9sG3yfL2NNY8EKSGdzVZkgrqNtt11U",
  "key30": "czYAFsArzpoRMgVHcjZSqjt1gdbkWgpRrbrDeLh7S5tg3DrC7Gw4tUmKmoUxK5gntWE8qjnhc9CWsCqxcCzYoGH",
  "key31": "2GZE1US5EKGPFBvardC6XMT1vtyJfE2AWhucxSDKEj2MRmHg8VYTN6dHp1W9q91wL5LNjBg3mgCQLRxTeJ17YRqB",
  "key32": "3NhfFJGmwm8kv1jQTfXPUTbzvZvHDxhw6zWpshTXcDWf16s8PbFAbEqSSvX5kMuJBdphYi11JUmXp1ooiuW4P7rJ",
  "key33": "58kQY5B1cMV7pHpe83dtED8i2KbK1fW4iMMuiSK9V8KyKqC3dYy97unrPZFjKWXjYjRUBjGnLrqn3edceJck9c9Z",
  "key34": "4hfSLNAbA9V8MrLBei7R1zmX4D6JRNb7UT3sKQYHaYCYN7322cA8HxiEkpuCQDnbSQ1fAoZBy3iR4px2KWzy65oh",
  "key35": "5oED5vmwR7G8A8Hb9SkkZN8VCzXBBfPxsqdQoSP3S2chPxVKbxTFVoKgjSB6eq5os6weuQ9k2P65q7Lh62arHV9M",
  "key36": "5Qs1YzX8ptEaAsQqR8rYiFh32P1yWZauty1EvwqggvmTSh16dromHcSWiDjKcWdKZPUcSF1LRNMfWQv3Ys7xAyv4",
  "key37": "3J5RbkbW89FHcVNpjikoKdoTTkfEfWf7LbgKhVyba8QTrUo6kN1fiNvUEDAPcELqccs1WAyQo7XNSS67MFP6F1Ud",
  "key38": "3zHcWvobzb6q8zxQ2LKRSP2v4xKbKoWGUh1yJomjxGLUEkcpQ6Z73oGMV8r1yuSDbAxMaPpHgekGTUiTULCLNDwh",
  "key39": "5AkL4ZshMDQgTufvPFbH6NAUJaCe29wJjc3Urv9CNWrcHyK3qJrEyoPgok51NR6idBYm1PKbSnSX9fVmkuRAgDmE"
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
