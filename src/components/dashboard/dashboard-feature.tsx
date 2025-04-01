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
    "314eo1Jou9C7RrpwYprNT6uoUNH481DHRJsaP1YCsvs7bxsP6ECdM3ykW5baCm4sCqMHDRyH5Y9xmkLHUc93d6CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUXDMpJpmoGJBEbwdhfc3DDPpkDFLp6R26zJmzQMNbY7WhS8p8V7xo2X231eVuHSYt4WCwuwKBgstjboDcUfD9q",
  "key1": "457Zu4AEJYtBu11wKSsvthdZ88Cz9XmfQaCeYnx148pwv1rn3G4gN9RYYq2Xd9ThHNZLofvychzi4hC8b7D6V8Ck",
  "key2": "551MhEW7h7DdEB4f5CV4msgdMRCZ4wYDZ4TH2JrrULTrkHQs8hVtvqoSF6qNVQaopmq9sWwLh7CUsAsn25bHCE8f",
  "key3": "3bMDmk8UPRmsgW29PBbD3WFFWkmcmXfXpyJPvvthvYioZPY23tGqKAcwmmv88cyJfmRkEFx8uaiG7QMxbQKoSXvS",
  "key4": "RvDxr5ykBx5MZiEpfYMvpP4be4U7LzDE57pZaZQJk5hvTQsgFHY6ZL5pwE2MuwVMfmYgbUzMH7g47ptDvCb7j6J",
  "key5": "4xvnBHpwP6tKzMuBZPbE64vUMt634tgxqHEeibmmRH8QQiMcpFwDoosJwAEXtbR89p4MUUXt2GNKingXR58dHzei",
  "key6": "3tNiY25Kv2o6C8KS9pAJRyFPYZiizNrQp1iLXkAt5WubVwV7JGo7eW9prch8WRhyrCJ6xH9fuaChAuPh1T6hC5Y6",
  "key7": "4omANAyRMdRdN7jQ7SWJQseZi6EMfu8YQVMGoSmoX6aqD17vpF8f3iFX9MY6GCoafyb7RGp56o7xLXeVokHoARTC",
  "key8": "tiuZ5AwHSJhdDpDJQ6dtePfmZWeDeGJ5bayGV1JN7Hg9Hh8id6eLJTo2aKU3dEKoDr11iQjCzU39WfypLUojgdu",
  "key9": "2vbfWmQGrgow8ZzeFDWbm2hh2UD4UvsrjeDnKDTEo1KkEEcgY6mC7dKkVPerVsdF9chBgzSJ8mwCKq11yzcnz3p7",
  "key10": "3NdiVUq1mYMWCExVMvdgq2r7ZpqCXsWyrNEAtVJPcyCWJnTZTj3T1L7GC3uihyi46S52jZy9Vu1Kg5rc5NLorsnh",
  "key11": "3oRJmpehzQViTgXQ92rMHw7XP5NunxZm3KUC7NrM3b2ofGPcqHKWGqoiiFzs791JfKZvfWiZZ14ByZPAbrxYv32w",
  "key12": "3gzVu5fGzosEAsRbKUADemaS4xDSN4gKvqnXopfSCG9XQNebHBs9CF7dZKnPJERyouo79795YkaSHQoy7Rx1KQ8P",
  "key13": "2iWNPxVjpBSYDk94ErJ19uU5j6hxaQJ7fhCU5hJcpLhbr5Q8FWCr6T6JR72GxwKwcPGbEBPAFNwxoHMJqWNX1vCa",
  "key14": "JemwdVCPER3tVxETZKjKKJ5N8x3axr1ymm2jsozhD71dBgUb5zUQXZWwSu9UgGTLWXR9HkuRFRGvfijThx6NWtN",
  "key15": "2LfEUDkySSoCpCpomm7CMUyJ9s97c67GLSeb5irUqNPzS4nMFdDFwgNhvW4VYnxakQVohxXYcciDYJQwRLocs4uN",
  "key16": "2HjW7jYgVfq5yyUBM92yqQ614HrqMFRZ1XcKioFmkqr4kVK51hbebuUTwd6pXSJH1hmYxfJWpt16jB7XNambwr8Q",
  "key17": "4ZsKyYj12PoD34mApv5hCPeaXTUPqBXnJmVakEX9rHg4TwN5NXvaTnboMYEdWFpDq8yRSyBpLNrSJy5LYhqnndio",
  "key18": "2j5Ety9xWWJimKRKqFJ51VScpwpB7xiz4SMfRqWtGgbP8qkPxP79ZoSayqzEzdoHrP2HsNq67of3PvHyLGaG44WW",
  "key19": "TdYJKJwzit211XnC9R1iWw8REHqcWzt3QCbmYfqN271YJtdE2WqXfScaLaomHnuexAiRYJm89pBxnDYLFmdyacW",
  "key20": "3Ru7KDTw5YjEo1tr3V4CVb2qyojXgkurqWQMjMb8EZR3UakPSwcWPMmHGQadq6LDspXxDRV7GA8Ts1fFzwqgjFLx",
  "key21": "3DHwYkYq7JdiyPCsUL2BqGh4xNLQZmviHDbMRnyRmKSg8uomPeu28hctnR11Yqnv6VgDzagTfmVo2MXT6J7BFK1j",
  "key22": "5du2EhpE3uLFt9AfRMfcu9hbCkfCSMGYfYseGKuM4oL7ZPUp97ZXuE8uTYPHyQzMicqR1BGMivBMvdUX6RZLDQSP",
  "key23": "37XcE2WRz8ka5LiYYeWpmJVvaaWcnjG9U9xRjHdoygQzFXU3C3vzCk1ypatsWKMWfn3Ak2Z52kbvp59oQ36VsWtB",
  "key24": "8T9fCLemxrQrPFD79Yr183HgbBA89LMbk7YsZzcGdsNdpnruN8ShAMo1ibdEkLDfhuCxdX8zg6AeMPQ6vztoyjE",
  "key25": "2nokgAD9wDnsVChbSxC3mNjtKxdARuwuKyE3RAANj417rXXxst2t2NkFxGYD2fJ1QFstc6S3g8rKHhE8eJEem4bH",
  "key26": "vJJXkzcvj75kjU47dNaUWbMKAPntNWyNAjDHkU3ZeyzevTqsfYYkS7saR79pTHaX6uHvFkhWA3G6Ux6YEjvUkYD",
  "key27": "5UCtD1RkSyYfrHC9GWcdW5jaSy7s6dckL5HyvM4Y9EbnpahZZTt8gSEQiDYSgwWQ6jZpXLr5Cb8EDBACPNVdj621",
  "key28": "5UDjWZ4wVFDLYB1wx1v3x9f8P3ZkRKNUr1S5xCnVVB5V6u4mQQjqCzCdEa8Sfe5dCiidMA7kxwTDVpn9oqmuqXuG",
  "key29": "3L5QT57Kk9AnKZU6n1dwqHdmNcWwBTVBDQTHyYAUP2kFXFspq23YJPGi2MaHTLdFJWgspsHnTdoiSjub8aD8TMja",
  "key30": "2x5fTyj6HpGKFnFfFdmrQEU6cvBkpPKtqyU3ZFEppN7EvwrjUBi1Av6v9Ghy3jBXyWYak7Yxhy3iR33uy3kwrrgu",
  "key31": "2zztGq4qN1AEanNwvSh74AxWfQwx628T9bMtoStpn8Ud9w7KXYZrahcPGgCH7bDm1dWaiSpvHK5YqH3MwXGPshnq",
  "key32": "44Lb6MAnKqbqLB9oeP7KCjJcUfXvpBzYYiY5jRhLbSDx2SU4gGaL5faWqD9uQiCrjKvrJ8Vy1TezogTCvgstdLid",
  "key33": "3Vmoj8KaNfFtFSCpuTcAYdC5rxXoFPnNoQAbo8UnBocNiKnHU1Ceq72bB3DhjZRYyapKv8AgvPoaebSgjjHAQwS4",
  "key34": "3MMmepE3jdTMhCk268MvcyCVjdd9PHVcG1uhFxxLzKVHaX1dnruG9MSNj9idtS6B1QqS58njCdYssWT5unbq2myq",
  "key35": "59fb72HCpcSr14KjYQ26URgVM8uZHrcYvmzwdiuJxRAAvvDHW3z83ApZYZHR2S8x4A9WfBY5G8Vxqe1CCDNBqR22",
  "key36": "53GC3uvFWrkyvZ3R5RmyMyG6dfKnuozSXP2Eot6tZ1Jn1QVz4WkqYisTuJo4HMqHKJHBq7ykXmvAVUke6JHA1Tv5",
  "key37": "JMwY7oZyhEfbnZB7W2ZBNr1pVF22JjBjhuzSmm5Y3r85uUe9WwsNjZUYM73iWZieWZQXCYGqZbT3seKLDdszEDq",
  "key38": "3LW4phMhA5wsMkg7c5TXZhKPkvB75M2cadd8nkoBCXwZFJXy7cen1AgNrPU7qpf68i1oSXyxK8FbJtrrS3BohnXS",
  "key39": "2t1kmfwrEhnmxrYYmYc2UXuYiyQZS8hDZFvsCARHT7k2y99uQuUHaVwcvbdsihQjQJyCneYz5UN1cTgQHSrQo2uv",
  "key40": "2TTPcwxg2oSh6eBaLZ3Jgq4DTa8uXBeMRfPiBp1mSH5QrS1pJXebeogsNs2XX462kLLn91KS7dLbYd1Apfbk4Tm4",
  "key41": "aME6rVJW6wiNhz58ai76C2iBLyeJZc1zsf5T41MJFn14TiHkrAq3xf4u2RRp8CtavvnoKbpBKAFKN2VoCq86ZEo",
  "key42": "dGBAdNQyFYAjmxrjhk3fX4f8fxxgGFrpe11GhGpLKYE19ZdF9X3qZ975fez7Dt3daDiC55i7DV8ciAte6t4Xvcv",
  "key43": "22tmED8gLZAhyrnwy3oXeZsK5tkANGW64LMsshmK4XdXAQmn74q2HxNFTsU4mAAoGNvMiLx2HTb2M3m4v6QcoCtr",
  "key44": "KDoVwtP5zgpoZ6ujNBGrUamPFnp9UKLaBTNdLA2c4VywYSpmzWc6tCfjyuaWQPijVwfUR6VFEKU9ksTVFst2mDm",
  "key45": "K5q8vWAAmDKUz7fqi8sicxcyDX896LKkVf9E7jRoPCAArbaJycQS89moTcxUonDBChiwJ6ecX5ofyQx4MVYQERL",
  "key46": "633Ps36dBh69NNSSSqvnusmNzp6FPSnGYU3deiYxNe9K6nSaeLoL4qKu7Ame73m4c1pqwz87s2FhTWYFZ2nXkMk",
  "key47": "4UjMSdQWBxtp4tHPmz4VSL9W6Pobn7QX3WPRCsqsEE4rrHxEPJddAhcTXqW6j9QHhw8AvFVnzP9hUJwrXNHEaz1u",
  "key48": "2WyneADXX4XT7Sh5MePtBxG87u5HmTjW5J3schKQYZVwpzTFRMZF3wAvYJuRFNBYJyGy2NwESD6fKBgxU7RiS8T2",
  "key49": "5WmxJ7ksPPjUg1AzbTbdXWT1CNe4DMvS5gGRhXVWsdpbyswiKCz431vY7c4a3pQxmSE8inaX4sfvK77F2NEFWvd9"
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
