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
    "4U7fBHG2xdXSFkARMJmTYpzph1hSQykJAf4E7f33eSctHKcDg9ZB4Xjw4asJ8yx4BkEMJSZ6zFk1zH9vpXvJBV1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J34CoMcUdZTyw7vDSsaBCrNV7L8DtTGjXDeLM8wiBh7guiJTC2VfFNAux4ZeKQn1wM39LifkYESWxDvwjZnCp4F",
  "key1": "5evJRUPV44wJfAzL95hjZK6Emy59a87jKaHPUq7ndiprj7jvg8f88av8HRDmP1oo1xwiU34nFJrh6PU1X3LwZYhn",
  "key2": "57ZGgMPhqGZwueKNmBNgr5PLFLgYNjWLj8hTC9hsa8918DwZP9igAgF396EBuJPU74SgS1wjdwAq2kiEoc2xkYRU",
  "key3": "2cax9sJEdmcTZMHfYyEuENqscV2f3seMrS1tbPhEuDudBTz7avqiTJ3RL2xbDjiM3hYN4FXwXDwCEWQ3Saf7QipH",
  "key4": "Mnzsx715kqrVeSAdEG2pgNtvFp6EDwWvAV2WPAKGAECoaXucWw4L6wQR94TTd5FqjP6m6ghcnf1CMCExMhxsgxb",
  "key5": "5QA1swu1wdAXpUaUE4RqYbUCBE1sRm7pWEqDLmZe93vzQNJ8JB2RsgRMQNxwmkELgPE5XcHzVHaXtKsSNJYhzpeG",
  "key6": "RrATEksDuGKrDdLD59sifgLRRGrFBEZcYHnJyZJ7D4WAWG8TeMQ5udBGLHUV3kGzM49Js9cmBGsFT4amFsBn6xw",
  "key7": "BpCx4W8mHvoMRDtncCocEJXMFzFpJnMs77vCRPeNyCqA1K6ZS6CUKXhsW2D5ZCrNQu9zmCEkFsAs5xdJHEq4ZPo",
  "key8": "5kSaFERpjiARQ1K2Tv61DAuMGUkPhUSJYSrzcyYNtbqLUJ82wcHxWH9hGos5h7asMnP24XDP967MkS71LSjnEEWN",
  "key9": "4x9GAjme4eMToxkYCTbk36xJNumjwSQ55kQ7CwMR1M5oPz2ebHRaByCXpvqmy5Pfj7WJViGa8caYtrmGJ96YQ2V7",
  "key10": "3L38zhym49byqXQE4rL6vAnTp9pkfuPsBHH5zgGxrDxphhCG6monKrKE4kPp1TkqvgHGtJMQBkpF35bwbW2z2NPU",
  "key11": "4UeQmyW1jVHesXP3X4BZptFGSyKVfCy151DqvqZGeq9h4F4HxgVV4YCrvkQ91UM7BtXFjfyMW88B9c2AzKg3SDi6",
  "key12": "2aajmbvC6sQ411ZsdrJdADhroNDHExnxxdkT65gCfi1Ee178Gv3GEpXjeAU38yxLCtA6HJRXD4coHzX9s1Mk2xaP",
  "key13": "4c8jKYdXD1EZT7QtJ8XYuTe7fQvH3yRaAeSz8MCCra6r1NjiadZ4xH9V81AGFBoAqBof5ty6hp5BPoofcxisnSHQ",
  "key14": "2nooYmhAdYh5p8LaJU9vP3frjvEkeiq7a1CejVnQ9U2jCsHvzgCdaE7YdRC6YWvDEqhVyvS1SisRojuUcD7dWZ11",
  "key15": "2igBzJxTGPRTqDv9JzGARPVyWgQa7ipNrhUEsokSNTd1s98cadSpDc8V873bMTyaj5cfux8NBz6Kqo382CAuCqt8",
  "key16": "5N7YqDiTy5Wiucz1Pk9cpBVQYjPH33srNm5NVGN4g1uwWRi65yoMzfdvNgGDBTJxc3muYq2o5LmCDQmTsWjFVF3",
  "key17": "4WN1bVBFsQXN76CfHnTqH9z39Bp7fZJvTVpEJHndmF1BkKApBvaa2Szd4eaVJrTTSCkNUv3QL9Xgodp8h7zuqXxq",
  "key18": "5qDD74QFRJwEpmFVdewQR9mSBfX8hrLG7qavPvG6wvdqVfVsdzMS8tLm5pxePsgRjWg9XKASYt2tzM19dfn46M6n",
  "key19": "hgq2TYo7M4NWvReSPqE3HQeRBvUk8xfPPBnsBuN35ETqcc76bceQDXADTgaJP39GLf6Ru4RjPFAC3sMc51xAnGR",
  "key20": "m8HQvMRjSb4twScro8LkSaGPJsn79XNZpoUw2htFVaEwLRmczhEcheTu5FXU6aX8jKeeZkdA9z1vbpMGiKRLu2p",
  "key21": "26Ec3Y11vMS3iDN1HCZut2W7SKG4J4yG7ae5x7H8pCizaZBPFVpkhJp7YSQMDssESgRfS6EHeREoKQmdA12GrcVZ",
  "key22": "4Li7Nf4BpLeZniEzTU8U2xphJ7bocMD1P9xpKgVgL37aaFEYFrPxSSQ2h9GkabvfrynipsVYeCSqMeJr5BNVkpkE",
  "key23": "4M4YB4bRguTmvoziivfGz1Wiv2uxX7U1H84aDt2s1QyCLHrhMp7AD2zFZ5k8U3zYdjUv7Vo8vZnwmdNR4hLxMC28",
  "key24": "5ufvkmPriHvLF8HLNhwxakLHhET5LZezHTXQ965gTKmwkCV1YDMmT5NqsNjoT6rCYcifYJH4Rcwe4axcPFVHzMbx",
  "key25": "4RQojryjSsNhGD4286Z1zC6XZxSkJDh8RjsKWAEGF6m54vyDu26SWBJ6moduG1BnMPR6oVVRmPHH7kmBARt1SfUs",
  "key26": "2NmU7qEum3joepwxchqYFSozW3P2bPaDdekf7hbXt42JoctbFDTut1DJPyU34uQ7q5KRxb29hawRWNpXuBF8R3nb",
  "key27": "iEsGF5zdqsrpTfjfRJ5AYrvv6zeHhpn7pC1iE3e5RrrJCuboSJNYVHT1P4Hu77tYx3EAhnXES7XMFJsGJ5nzpVD",
  "key28": "3BHegGwsYuu1eVWUb2ToV2krTixpUymxxokT516bobYpJUb8k5A8ShdQ7ZBCbKvRmJNJuerhyLUH9UUjXDyeNMT",
  "key29": "3phBbPK34Sa2U9pnwz9i2jka6KcvidVDM4U9CsgdG65UYsgiPVdTeFMqbpyEVVjLWM3SZi2kVtRv7YsELf8ny3gW",
  "key30": "3VQSjWzUwLfniLRKP4485uT2gERzeaycuHQ6y4hRr2yDLgPCCiqSfwNDYKLVi6Vx5MzJYgYUxxveJsijw57z4boR",
  "key31": "2Ds1pMNnS8NsvuyGiorWv2BrGxs6Fff9vAXrQUuojZYa33usJEu9yLyYtSA6AJiqdVpTrFbWXJR5xrBvuyigWZqu",
  "key32": "5MYoRc94MrbscHQcMZrbVLLe8xNV5QuzMQqJCGXyN6ZRfAbLeNei4hrTP5X5wAgYMFHyCtWAwAFRPJFPU98Anv4E",
  "key33": "3bg3yGn9LidM4qo868Qto8VdL3YrjdLvSUSggPy47v9ZnXoc98vT5RXdjTEUwZGE9AexLwVAaG9rYF6ytmPxmm4b",
  "key34": "5jHceFbKaxNmw1WrvZciLz4kDV4kUYwLF6gHutihzLF4NmCAXTixpt9xNgsNe3qCkEjgtcFfxydsMtYnxXqn7Q4s",
  "key35": "2pVncuTgvg6QXxgTcmJ2yDgdMjaqdCzfYPAeYPMMEELb6rwoXZQBUXPfhT7x2uotR6v7aPca1Xia7DioU9NtebDE",
  "key36": "3vBoULV5KTXNt51zZy8eXvi2Qmro1Jpjd7ESkMQZfNSFgPPiQhpLpKKbTXRQncfrWJeh8ahkexRzK5chCeKXaw7E",
  "key37": "4pjHnAuPf71xhTdU5KARiurLiBsbT1UWoV3Vbzx6CqWCFaqiViidZedJFLDLJ7C97CGNkLXU6SJnGK8txkBtDHXe",
  "key38": "3J6gAv9YtKkQJ6axkHs9waQBsffguMaMijk8XBidt7gtgRS8j11vDpHgEiquj7R11Tu1uoyscN8hNGXPiwuwQDfD",
  "key39": "3n754nmjPG753dnNkqbMjHjfW65MmcwdQKKfEaMCc1qvE1VhxjTe59juEespmgtBQoH1UYprEPuRMVgXExzqMuzH"
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
