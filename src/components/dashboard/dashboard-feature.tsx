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
    "5SsemuErRrBnQL8Ta7L1r4H38Zihp7vPPLFZrC7BnWCv749hgQuG36SfaCYx5LfKUd1WE2Qf21DV3cTMvstkF6jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FC7PFffEHhBtedw7ZziSfv5bP8TDnTRM26Gg7ARCcChpmWE5rm8p3BjRUYtsGTpUgeJ7QqSQn6bXvZY4TJUfNwm",
  "key1": "2CzDWVtQeoRVVctxJqsZRFZEJaKmtcjQyEePAqFUcFffpJwgwc5113UwErSd2s8n8qNcjaSgFYeTccKiVajdAttt",
  "key2": "41QPUEk6b4RxLx8ZwiPCc5f3MuFst114TcfxnLcNy7mjmrB1gwpg6n29ByvoisNcKbk265g4mJKYDuKZNKcVkhPZ",
  "key3": "3sdydpf1T4ZwBfC6MRJaHPkfDueuV4QE2GRGftfAf32GHiAtY5XKfdZdh4EKQH8deAD8u5MD6YVShnMhidWie4hv",
  "key4": "iMsEYxhJHTNcVzxhR2WY61n8kTv3RVhCqxvHGkQ3et1YbinAY9vW6RfCokJDGvS1keruPqYvir8C6DxUrVD3aJb",
  "key5": "3vuLzt6BmvyoTSwzX2nT4z7kxhxukpdCKrokBpJpFBgmSMo6WvhaunzqLeGgM6g5n5Qjud84AjxNEuqer5q8fA9J",
  "key6": "3TjHcTidhR64AJSMMgH5MusCHuaPAP4CNTbVvQm93qcH3EQZm6233d4715gxiJYdVkUuSzejT889ponoDwaKFSJy",
  "key7": "5tiwLiuz6WAtnK7LsRQCSdbb9K7Hw66YQNoo9a7wT9ExLUerinRQJUQfiGWZ4VBqNVMMkZ6riYe1onnFiZ1bA1M1",
  "key8": "5g3iEzBVk5YRv64qi3JcgNZ9DNCz5RX3Kg3Ag4yD7v3kjMimFAmnzKptaeqP8A3qnBxjmQHKMwTn7DLuy6wxd87A",
  "key9": "4XK9dAwoXXY6eTSvwBEFzeXWwMegYpQYBK9wuoG1umv1gGVkeG6BnxRi7K8VNfM3xqt97BXmJoPE4pD7Kjjmns2V",
  "key10": "3m1pu6LLnMJirYpQ7X8rEpdHWTQL8d3rAXURfGm4XyfSZCmrvNSdvvhqE8hvYwzMEnHAFxuCxNjf78YLo1bXB7Xv",
  "key11": "Y8CR8aiKDzFVmWU1puwMPdaVFwZkcQTpTAfEy4VeZFBqoRYvbgddHxEi8pFv1jdMwz411Unngq791rB7Cjyssem",
  "key12": "3zN5scjeWwh2s8AgkCseiyV4vnnjT4ZcbYoXkHXjvQgVzr43GwjFGQa99cAow5cWtZcwVD2NJeXD7Bb6Vt97omta",
  "key13": "5zkCb1AwKaDKGqxL8AxuiUhmnVXLGPVGth9CYo1Vv6G8vUBwjxYbkkAbVG3i9MupsxsgHyAXEVfMTWXDWTgs5TDF",
  "key14": "4uSq16eFAorkcHDHcmbhH7WzjNoALsnWJ4PWhWSRK3Dqrqa4bVmSPqfkpLnYhmJKr5WbcFptovDTeWS66xqoZJ9p",
  "key15": "5wnBHioT1rSdtXTBJm21FPEcMMQSmS2JvUdR2TdtunibcujGtespmTJh1W3FiUhW2GwTMBjWrQZtwSHCU34Fv3kC",
  "key16": "3uGuq4kFNj4fccArKcUC1R2kQvRs9uXZegKR3zeDuLFfyuriKZBoXBtZfM6dWsj58hM8Ao4yqMvHmDfvSYYr6NfG",
  "key17": "4fryXkT1nG38ervsnwhqSDd4JTQq5SnySiRr44C1EVGpoLjf2r5Cjs1ChrcaPHpaG6myj6DDytvLezTScx5ZpWLW",
  "key18": "5TLvpowcnrkrw3hTnEXupAFosLH1WcnTMvzM8TKJ1fuDmruieX546pNCKxPMKLCP8dv4wDG1oqSvhHhg7XFioFTz",
  "key19": "3rndtgziV9ZGUqmaYWtVdYEXBiFiM3nxBqokm4xskybSGA7BFnPGsvV9DY3Ag58Xse7X3x6RTBCumg45ubhEW6tF",
  "key20": "3AFqxmohWvGo16U5adrsFZJbe8jAa32VPKEj6qaMRJ4c12ntDiWL1hNzxXrhRmbK6PNhBYYivPCUEvurPMahaxuD",
  "key21": "38iyskDMZsBfh1Ss2ncC3nkV9gsMWtKQFKJZuoYu67uZWHfUiXCBUif3jykztq98TMsxxfPLQTrGTS9EAxV2a842",
  "key22": "2ZNZtVjdam2jwgZc8bVAQAHMavq5zVWw3e2Vm7fp675CHT3V6LcoAz9Nx96EKrZQVoqed17oxRHoriLJuKsF3otU",
  "key23": "4eMLZYQwATa7HmEu35R3GHAkKMRHm3ocKpBaX9aAcRYMHNUx4ifBFDA2DCi9VZhcqL8HvC5KNKQGwgFmDC8vUdLM",
  "key24": "2KJuZ2VnvnXzDw9PtomgEorpUF4oMK2LvV3v1PUCV9DkYaS5k5sPGXjTCwYjkLxr9pCne7WPF3Tp2TU4LX6P1fQH",
  "key25": "2ZRvvfusHAaLfddAPQdvrdCwJtpej7XaMW3AeZgHRv1JesWWeJuSs6AbfSiPfP3JjfBqJvEh6mWFj4hKd4hYguHb",
  "key26": "4bhN998AakoggKsWPdK9jtiFibPFJEpqyssWL7QpZ8kA4evBkhDVTDKcwgBkn9L3sdMQq5LTd8kRgJyonQmSLfYd",
  "key27": "4fVZ2hYQrXQqTD8Da2N89xBHFeDdfa4bQSVbbnEMjNCyH2LmKdXhHH68jiF7CHSAsPgur7krjtEKjMkTG3wYBS7p",
  "key28": "TUTZAsJSRR7g3rNnzq3zdoM4TzWTdHiyQdmj8Uwsa5iuANhzeu48yvUMTaDDbuMV5RXH49iKhnaMfKE6GE7W1NT",
  "key29": "3KakefkSu3eyPHojyG6mGGFRTDnYXMGFJHnYiSGraLuXro7V2FSp9GmUQDV7TXDBumqafmZhs2H7FnuFM6CPGpps",
  "key30": "3x1mjoQjVvoVhCVPKtyDKGvwWmV6Gz8Zv1T5KrCGkvXXv4AhSfCMxgGUwkH6St79Vzyhxn11vyu2S7GEa91SkACa",
  "key31": "32VvSkimeh4TyqzBmjUK163AH4xP3ShtovkcFqkdmcfhVJUVWzbmZ4jeDDxR3vpG12Fn2AcMmBHCnjXbeANkz2z8",
  "key32": "3m7mywpSdg1mkGmtmzd8qvhyAUCTSatDEpPkSbv3FiYwQtbaY4irUyyDBwx82rjmUzGtgpkrfJTnGqzxSyotsyRv",
  "key33": "gkaRb2jYrd6iM7N26KxTM6HyGNXgQQnHFJw55aiB7FdGpeaCjnWuTvY7M1PpH4VDFC4Cupv5bdgEG4qa4pottpn",
  "key34": "cB94tscxVMSyVr5idxjnrted4X1KJ5MAjjx2t5nxcgUCPeDXzJJYTvj8qJX5QA6XwtXLGP1TgpcmvxphJuLJ8TH",
  "key35": "56KXwKzkexuqgX1BsCAnAj1LavxFMcGnSSA5yv54319KibL9jpCuxV9F26MFVGLs4jxcQgJ8aiDED2GqenJPUPW2",
  "key36": "2jyhq8UySqCaVS6ZEa2x5TPu3f2nKT5fJmP1CpQN3CsarJTt5oZfensvvYwPHfiu6PiKYE2ZrbKfKN8bpDbixK6P",
  "key37": "34q9X3dtTtHPRS6oStM1Za86qiLxF2NrB1TuAfhAJW5HhtPwSYQe6QqhKfG2jvfkb8zXc4qsmEyj5gG63a1keFSs",
  "key38": "MNVKPen5Wxb89gGWqMaFeyxYJWhsWwGB9EGfkKADh3dMxfU5uPZrydKq8Tk3mnpyPsyUsqVCL9rq6fgD1rcvsR5",
  "key39": "4ukrHVR3dB6JoC8savQSXEomP8o2PmMQXCsrjEf6XxmXbigiadsKpRfdFR5Bh4i11o85gVoJRzh8aS7NfQJc4CFD",
  "key40": "PiVLEUq9BQ1oEEiKysmACbP5xbsTzNHjVyjEotRtkebas4JFy5kyXfewuoyJnMUuMJCyXyd6UCBirXMVUjam2MG",
  "key41": "65uL7rUxJzfjK1GE8thxb9wjzKHJXVDXJL59HXMWVPV4YECrY7bV2z1x3LKnLr8XkmGS1NfqbWPy5npvTKhqjSzF",
  "key42": "2761nKkTquYry4vpeL2KSwr79sRz5MChqfYiimkuJDckYhRTUfXWPBeePEx8Ecx3mNpfFpZ5pEfg5NpRaVfDEyYK",
  "key43": "5iFANaxbYsdUkHX2FkdT2P84E86qQNyCco7TfTJiXPgNy4HkinRLZT8kGNvXJPJ1oRC4b2BXJT8YHv67UWxigVUG",
  "key44": "4zCm14uR3CmULnUdVQiTDEmJibSuuZHwQiEeMcRxvs3ejqhEr9ogUczXZUc87bYHE9qib86vo8ASZXscfd98cCBf"
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
