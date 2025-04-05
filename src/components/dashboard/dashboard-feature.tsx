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
    "2nJKhAcPLbSrmC9SeqDaKMNzwz1Qjt1i2ZPXnfSYcfE8UDX5PWE3oYiefKZ5442Ep6KkpbCp26tGmZqLM93b3D1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvGKHUvq6te72eXXwiT2t72ZDLsX77WvMn4LTwNtNrGCV3scVAoFwRyuKGQyrdwYtmEviQ2NJySnTwBbJoipm16",
  "key1": "2CcVZwwkyTsnF4KVcD1QDt9AuiPBxe9Le5GJo2mXTYXqeiPdsKcoGmeRHUfyS18fmVisDVdGUx2QryR5YoJNcvgP",
  "key2": "3RYdK1vjtr2qwM3UsQutQrCfeUHY6TA29Eo8E7Sy8Xa9TjMXtUwjkkFzaLHM4Np4Af2oKZWCWsAq2MWEg6Kj531N",
  "key3": "6FwYx2oJiNgLGoWGeJrHmbMireZFkCFuiVYrFkUgsxm9EwqpQTCdUuXq6vaG7UsMzy9yudgq7JVWRfHN8Tt5YC3",
  "key4": "4jKUtwxVyeXvvrZYrMTeckErfbHY8JuYRWmhwLAuGDATneJeCYdgMw6ukzoUhqVZr8Q18QkfmRQL7u5oc77AJ8vR",
  "key5": "63CwvoFwKrzDrxD9rsBKrtNrRErN25hep4vMbG2o1YF4HBwpCbWbKRwEFZ2TURcxmo1qCGP8aA4xsJMZzB6pKFaA",
  "key6": "5B66GtCCnoFFV3oJ12WNGVRF2raR6DH2LZXzpcMPZNkwh2aUqy5cbdVcAh5GEVBYaFuHEb9aKXtRbubDAAFMFUnC",
  "key7": "2h6UPkgUYo52ktgJpSnY8RYT1pDTmuKvfBKF3V34dhZSZFVLNF7Wvzdj1Ji1onda6VB2Bk76nzSFuzF3u9EkvriA",
  "key8": "214FFPebQdS5s4DqaoG5dv287yPgMKLyCPqE7xycYtsDCLsaKVGZuCvKrgeUPfJwKxSFaAZ9t7XBu8QeAUW1EWL4",
  "key9": "64yd338G85Hga8NJgCVXL8iPqWi68TuKHhwCSWuu9dPank8PPT4gEi74MKAakC3vSBAQjCjdgusaoi1ndfNwMJya",
  "key10": "7KcMjRokkNuiqgcJLhzsey9Ai4At4X1DyC4Qj2HGgWQuqKrJNXmGwprmUiVSPRP1eSGpeV3Qf1CjrpnfHx6vH1b",
  "key11": "49UdeNSDnz9oQhK3KHiM1ETtXYMi43zCWXHpd2DBkZRjj6a7bRTQz48t6bhkEB9Z7UKaLc3vTomk7pDnzp58qVRM",
  "key12": "RMMzXxhpxLvRtphch2THYtJQRuFH8wGMB8QnopvHiTBayj25i4kVCR9CFb1Dg18tJYN4RwpTiQmRHnTM5FwheAW",
  "key13": "5isBaHzpCnmAYKzAzP3581NwoqCCS6LE6rCrG6cnWvtKxiZ2Jd2nfLN1kK7CB2qu4jtZfCRrKtG81PhQqprQ2nFE",
  "key14": "2eojYRoJ88SpN1AGYfq3ADneb2XhjCBfaFdXVKXSFdnq7EDc3UhJapbpqjEf41XpPrSStxKmFMuxhjSECDDqmCMu",
  "key15": "XM1hi1dcGQtKmQaE6s1CUS3XdnVzUbTEmjoBdP89PrVpMmdLjVbLSpsRLmbGyqJGgNvfDAZaFjKxchVhkTXsTBz",
  "key16": "5PWYkSgK45wk1PnXWY6t5Ztz6Hx7ktLXBYu8p1wUj4qA3qyhhJNtZsCu4ebZzNVi13qhCyAWkABDhfVFircCSjMe",
  "key17": "xfvW2Cf1wXkES2TZykBerQETsqpvmYWCo4ciSuHpJaASgeE15kFcCHksURshVLFGXVZPSptG1nfyJjUJPS9twjC",
  "key18": "5KiMiBiuiij29jS76XuBumkSj1PvQb3WazVogbtayJ6X91hL5nhvsmH1nTqV7XennPbZmqMw8nQ6hE5H5EC9RpHo",
  "key19": "4RSZgt8vAwNDyJZ65JMzwXpMVeokKKW2wCTaV4H8gcqWRVpym5xcBp6ecEJbg3F6YVAaYPToFmCCiDcetLB3N23a",
  "key20": "Pt485zUqr1PJAafPi7h6QMBUXqWPfEaWdk9AUknkWwp3ay9BUjn8eDRRXAKcwD57WsFLrLYXSw18bMRdKSzNceo",
  "key21": "2hhfvAE1QcHNzwkHY6pqKnMmN8wwMqdBiF5ZKNyzFRUsX6KFBtXGpqxTGUBZP7LouFxdkY2RFjwE3fgNy5AY51kq",
  "key22": "2A2N4ZwMehiXWASUBtTN9U9CEmiEj3tdhR3Ljx1zbMfjA8wnpfRR4vMUbrUtwaQxB25mYyQSTW8gNZcU5gzyJ1jc",
  "key23": "55b6LDctr7JyujTar12jHNigk8pUdwEULTcWUZ8doyZb59zduKqXVCtfG6Xnd8xQbiwdtr5j5f6uxxoJ2yNxRa6i",
  "key24": "3eLRfQkX9sfRmm4tvGSWrbaW35XqtfupqUAWxeQhqFMeHGvcXXSjbUCqpa8WGAy1E8aNW7oEqPdAPi4715bksyE6",
  "key25": "2LzQjEEcozmb1bbBc3BVrgAKBP3BKaWvbeQFKz5RbFikZktSFQm9xoAh583FnKdVSdpJcNfF6pHNbpcn6gF3YrP9",
  "key26": "5PWappXeX9ymMRLfERdDSoZsuop9Jbzb8vAiKRB9UJU8M4iVZ2Co4ZfYBoS24Jcb4VYQyRwZtNiT9huMeut8ro1X",
  "key27": "4UgZnSEj5TM91qSvd4V36Ha9sWREJztNvpNtFp6Buu43HKRjrc6qNmLUjZKMJAmvbfRDoCojVLUAjvUA8XWqA9B",
  "key28": "5MLSkoBXqLukycuWQiEkPEmacntL6qvSZc2zpD8TGCMUcjXLMgEMDioKXfffWyV3t94CppmFD5e3sppvMVJdgu6L",
  "key29": "3NJvheH99YxKBsVW11Z2UcsBf8br7r1zqCTysvpDQhQKhfyTpr6Vth8DLJw4J5wCBV6H3jM3A5Hp1ZcCpTLbWs1T",
  "key30": "s8Q1H36EtNDRunaekoDgGi4F9CPsRyPsLUgppVdZdQxYTfnLrNWeSA4h2i3sBiVE3xsxpdkqAw1WNgg3f3NucyP",
  "key31": "4hXhVF7pzQfbvxDXU8FSTpXvTKn27KuLMruS2JKBqGd4ctPNBbxkK3aQTU2ozRSAxSG2dRVsyyA5UbPisjwMwRV6",
  "key32": "25FxLzMqQ41q6Uy6QYMzMxDSQvZ5oiAeXGLzugQmp5dpZJqtaCAAAwwiAz8iePJUFAo3oHBEiZofxJebwpghTpBy",
  "key33": "5NpD8R34krNQ5FYuRJeqnMWwSFYGzNLWCAGbnniDHhdKigDt4DSwLrPmcfJ8eJ6eywFSGfPFaiac9fXT9Jw5K6W3",
  "key34": "5UaEGn4L9SHB6mP6pZEsSoGADsphjUZpZApYJYygKenaXaKjGTbo86n3whbtEER9SE7TMUey2GaXr9s2dGqBRf4x",
  "key35": "3iQfz81sdjHyCPnZGTMXKFXML9uSu9e67jv4h4zhdeDmi4goHKuFFPY6LMS4Ze3wgoSUMEeUkbxDB2tbm9B7XQGE",
  "key36": "5qFo422tQWhWRvMN38UjJAy8pFf5x6hEB6XwUpVoh13kSSRHwJXphFmucrREiZeD9KdVRXojM5jJbUKWjbQTT2T6",
  "key37": "Ef6SpEUjFH1HGzBjpn7wFQRL6VntDVFeV1a4RsruWdggdC6593StMrsizkBhsmDXgZQ1txuMWcH81TRTCti9ofi",
  "key38": "3fDck56HRm3F92e66Hsgi36J2mxydVkREyHmBoY78FLTCn6FQ4tvNeTU3w3YacaJQR3h6CcURNHUViWo44Wa8Jgo",
  "key39": "57v4xzbfsNdK17K3UrkRnRj6xES5mGCCJA7x8qz6ZbDSwawnfmvfFSJaY1U87UVjiYNmfLNKZUKwCwGHf3KEpu4P",
  "key40": "3dkjAGkCni868bhZgTZYwUwxLorhXX7YWMihpv2ppFKmARzYPGg1bFhDhjrvQZBBRcZwWaNam9MLYj8Hktjy83tv",
  "key41": "3D93LrJcpS2QCyagY6tbSBHRbLrsxj8tu8c8nZ5nRSVFA61i2QzUzKKHWPXzUmK4odQmPPD2TMMHvZsvxMer2T88",
  "key42": "3ZtsyMvLsrCrvkPuUrLQio2S9dkPdVuw1iGwVHXbknD5QY11UPEBt9Ltb3ENdV5oepQ12gG9go7GEUoTigWSxbmW",
  "key43": "38eqvMq1nZTfP4tkbvDFFqAJ3cy9WhHKXsCDhYPasyvpR8JMotm5mXzZNcVEpjQgL9VWuo7mnZvHrx5nBk7vWfGi",
  "key44": "2mogN6GLDYBFirJx4tFHdN8i67GySshYoMqLAh1CQE7hBfRPeHrdcWyhLY1RBxv9XN1qeVDJq9RHuaT9hGqDVK4Z",
  "key45": "2cLX4vGtUXtXLj35wrm5fZBhHG5KfHCWMgTpsPkaenxQAnHi71YE1cCuDVnrpcwB3JnsCveR6Cwx4cxyUtDZADRw"
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
