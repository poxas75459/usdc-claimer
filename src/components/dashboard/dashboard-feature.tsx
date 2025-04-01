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
    "4LyXYMkCoTLVwVnCdkz5RCA43256SatoEz6uY23ykmT7NkR51vavFYYNriPuhiR1LxYqf3nXb2D25qE3Mb5y1hbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkPDky1U8EnrUK36mfWHtdvNZGi5jAgk9nV4QjCxAk25zuzVQwYkxZpYFgCkp5JgJssbXvVf9zm13HA4NgFnpLw",
  "key1": "5QhNWXnL5C6LNJ45jmH3hsTZHrvkB2ZSN8v7aT2PzZUkwMBGMwJU6syiyUiCfMNiTnmRPmBAMxMgjTttVCPsJ4jn",
  "key2": "raWstqF3nbj2tZwKSdBJhKjAQgzXLh8KwSpPXRVeGbHou7J7AgbVhJmdMnrphHqv18Ws3tvhzN1s7Wjy719Jgi1",
  "key3": "CAsSY9umAF2TkKSmC9RirVE1gNKVV3DW7c99mgvFRh4APrihy9qzeFphLHb3pQusbjsRXiGotYsyn3REiCcc2oH",
  "key4": "besH5R8z6UoZSvPhRUCTfnqoQi1xNCC4rmo3tg6RiuEpMm9V9jcGpZbADhRvxm8b4dWRKkY62H8VZUwUr22Q1NR",
  "key5": "3AJLqPCH1se9ScYctUxuqxBJUygr1KJth42JnDVjYWDwFceDYiBv8Cn6CAzmYfXNdnqhXkJmiisxbZATWg1ZK9qP",
  "key6": "23itLsgfnhCty9ie5PsV2iDMVxLgUwkGAVUGQwFGYyUokZACXC1TtewVfN89y5UiEWE9d9EDuUd4RYzrvDLmPnEh",
  "key7": "4NBSU2FhECxM5Vxh886wu5PV2fkVTHMsorqRWZvSPEvRkCibJpUUUVzJdiCKbro1AB6aE1AiuT4Np9sgMGMctFTc",
  "key8": "3QBNpWEM4G1Pn8YayjWkPWygv3oJmn25sewCG1b1xz3NuEX1b5evf9U5Ja1pvsVucFsjUGN7EYRPXkof89S46QV9",
  "key9": "4F4havWHQB6eX12SVUMT2cyuvaArxLMfPhHKohZCgxz18EGbkm2cSRGcD8iwX3Fmbj4L3NMiYbYvdGyNLRY9XAwb",
  "key10": "5MQqBavD8yR5pUs2eyfePjkXEgcooV1Q4AkZ3dMbhDkjHfBZT1PEEQti9BXK6xnm1Tobbe9XEJao6FuUezTSCv19",
  "key11": "5XMEdc6DWqVt6cpJPos475a2R6co3J2HLB2zcBanp3BkUg1V4YYx3WQgGco2iRqm8WAQxX5zgDR5PZuVDQnm4ao4",
  "key12": "4XPRrQF3eeztM7yWvuzR9U4sbPGoADtCEhAR2K5iVxFfbDQ3c1Tp9qAuuGiZELg1CRpMYoWKVYpa6crtqV2Ug51D",
  "key13": "3NhiMJKqP66VMhV1Lqma7uRWRfWBJBX8ccg5chvtuSL3oBGQVW79HBe1TuMoe8rbBYRYV6qpftZf1TBNPqSg7Uzb",
  "key14": "5YxqKvmseKbcKVtoMmDT1X7izf9g84bDoysmscuKn9iSyUDvihBiV9DpGMb3UN4crUVVzefHQ4drCsvwhnZ8hxMr",
  "key15": "T1Vb2Zw4FJ2jkheUWfkVCmEPc86EAQQqovZ1a2d31b3rXU6VwRRmpXSu4QuzfLs259NW1ReNeZepGgkZot8kqAw",
  "key16": "3pQtAq6yJTW7r8iPwuuQQ233EUMxG2zMiUWSjdbyh1vLPHAwY4CznMBWdH6ugxpiFtrJamNjS2ryXieHfRcrqBQB",
  "key17": "pogNjbwF6cssRxHb3XMWpKyvvR6ZWvaWfVzX98XEG2K2sicQyirRJusJBjTAwya4X8XUAkaUxf1vMJW9ZAt5QDr",
  "key18": "32WNazqo1G2x2gpSNNp9aZ9YJ17vgFD5dmBn6eVGtRoULTfHjC2NgW7Vy1KJQ9hJ75XSKtSRZnsVhDL582GD1C2k",
  "key19": "36pGpHcywLjuojdT2RoqUAxD8TXCvxGVMvGX5sUa83T1Y58q2Wb4nTUUALoju33SgwJNTaywpdkMNfpwK8VLtky8",
  "key20": "5M5b1bcXRQKP6sTDgKBTe6eywRnL5wEUcr5emFE8tMtZEU4kcmcWVGh2F68HkxPxphvx3MZEw3CDuMpLsXS4W22i",
  "key21": "5R5MEXMYzzrADePnWF1DyVjYjHvPHP4p2QVNutNWfDvTi5ZJ617iGgBVwrtTBNWY2KbAdEBdp2ENaxV9wW86NQUi",
  "key22": "5qc2QQawuXArrw4G5DMn1ranPnPYz6LDb2jsDhaUyp7Y5Msy312K5LaFgvPTCCyje5oothqoNU5iabhZ8Q42uJaQ",
  "key23": "4eezPQDpBsaCX3Nb74rVrvT5N6r3eCDzcSyHttie8dTjKkiEB4KcS9VC9umgRTXJaJXctBLKHd793pEwAKZHHLqE",
  "key24": "49SfVp6iHfdsz5VqbVuSmXL7N8eU4mf6sMtnc5B8dNBc3wJdhtr1SesJufFFPeWinjToMcaMU59gutJugQA3pTgz",
  "key25": "25xNuJQDir1oeQL6pfERGeJwJKqYcJDtbf9nFmWqrFNXZt5mPKq4VTHxVuFDXjHxuaNB46ZtpwYVKNJKuxCjvJwR",
  "key26": "3HqdjsCUv3t3uEzHBCN65QH8mKnZM2mzXBN1ejPDdkRvDxvqfrS8XNEid3h3q11NiFGHroyZ1WaLkSm3hrgMKGrZ",
  "key27": "2X22pW3BksLNQUjjT6iCJ7y87rsuhJUZLU5d5MWbZ5cddPfYgx4NhTZfbFavNRFhSVpnUCydZCBxU4G5NEZ2CdN3",
  "key28": "5etzq27g6onAWgPvYckiJ2vRS8eesnSzuomD9Vcm5hjjNEiSPU4LJsJXX7Z54vXm5pTt1UaWKLzHiKn1uTiNQr77",
  "key29": "4netZwzGuLA2mgv8A4DRH2wZWnS8wdZDqEsTFi49dJYDUuKh9Hw6WV99VSUDu1ceyF64X6yDfyLzKQwz5w4C4TrR",
  "key30": "MHEmHMMMirphyno5wfCbAtZ1SAQLQYeAy9m5hrFgGsBMnBkbMPhsuiGJneMW9opNqyHMCSGUxof3zxSAhrpR5fL",
  "key31": "4FVgFejW1aujRxUmBcpRVmsByk5CrboeiuCJZAzP159F4zJb54pKDL38HeXnXTHFxJJ7GsDQ5RbUbrcbPZ6zW6d6",
  "key32": "4CLbSJ3mu7pSWoDJu6V5vhZNf5HVm6sRg4ykzmZpYudHPhC4hVhYkC92HHRht2zwKzQaiGhqKRwjgFdnDaUFZFKF",
  "key33": "uHqVe12tRVBnhLjwAhVwsqbXfLhzEe4xbubvJPUsRpec165C5xqW8izTEsKYBQVBsUVRGrfbvBRQBbFf74BkzCg",
  "key34": "XkDxHGAXkBxAgmsmqCxNeWqvPQ9kUi6zRthPEFydxWq3iadjizdaeLtGayVbPJpsbRM2iGXnfkySmkgyWrUP83j",
  "key35": "2tpYJJx3W9Sfr2K4uKd4QZ1zxkbcAccxYhkB7NJ4zqEfZVEVFfzEENSugQXDEwX2ZmgEaFHn69igXvfyuLpkkLBV",
  "key36": "3rPJGwegchXHbaqSS5BSromBFpy64X8RBcUDmyo3ftJZ6iFSTbJwoFPJ5hrC8NYdL3G6mZPX5AwvDXb19zJYETSn",
  "key37": "XD9X4pBg9pVUuRx2rDE7hSGJHhi37uqLyHGuCW8XZqqDT5NpZHoQs4S83MsZjnUg2KoJ7Y8pu8viymLRoAu61tc",
  "key38": "2C1UtSAwTZhevMRDC8bJYPB1mcXzMDyDyTgfodEtF7AGpdbfvjZpFsBPxCsjFr8uLd2k4f2MFro7A4fPHnkaFPuU",
  "key39": "3g61c58t3veXNUSsRpu2W7PWKxZA9hh3EQYvZoqiEEDHEdFHHYraLgkzeZ7Z2UB16TyRXjNR6z3y6mTnSfcyUTQv",
  "key40": "2edbJnHgZXo8Tnyn9G3uASz5QJWZWeKdWfEiGxGRrgZtUEUA5ujwHKKDBFAPPwbn4oBtxw6p4gDA6YVMXaX6AbNY",
  "key41": "52TjmXxnVkHHoKhR8uqeTv8e7KEuovnAV33HRYoRW2Zic9AZACzub15toiv4M9E1SVzyvq7CX6Y3VVMae4rCmgot",
  "key42": "qwvfGvYF46pockteKXRuaCMTLU7bntTA7K27r3zSuYmK54QJcPxXdgnefJU1Bbr2HDReY1sffE33q523kpV4doD",
  "key43": "2NqVvPJrXsWgKBJ2WMmHm8znVM6Szx3XngEiDKUv8UsUXX8ay9PZdvQxXtTnQGJDVfhzcmzRDGyQ7DkqidMSTMsw",
  "key44": "NZLFMRxxvmEKnFa9hFCsaGJPvPXp8RZqfRnWWBv3gjJ13T6HoUyJLS8cgQYmziaozCLheVwxmAVx7c4Z783fPrT",
  "key45": "5qDaR3o4NrCqSEWwdpYV1D1EDY1b5gV9tfRgd7kHNBSfrGvueThYuMNC1mf9fVeazZTs44Twxdc2Pb6ZoCBkLnDw",
  "key46": "2gUVEDvPmdq51N7iYfesvr6GMVigiLp9wyHUtC1cXR1CSy4SczYQpyvfwoC9C5872tQpizJXJkTA6mmbnAy4Hogt"
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
