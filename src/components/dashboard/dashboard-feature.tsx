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
    "GkGDdh9BrwyHLQ3SdZUxpg3vR2y4aVGhF58L3s8GBxDjYbjVmYXbtvTYz9w5926jFkUxkjeng93Cm8PXcwAKjrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qYKUNAc94mKU7ErnriWFqFkk6CktB8ZX9RPzxsFxhCpHJLpwwQePpyaUXjTEzDFNwC26emYwNZhaewUGsfczCw",
  "key1": "2iqxTiE4TAFSPa3u6NCEu3bEMeeELfAp97H87sKhCBCWc2jYgJMn2xH5psh7DBMNifxoZbdFVVnvg71HP12Se4Sr",
  "key2": "3LfCgbVykrjFzgMnLuLG3vtxNfHmSPt5J8oFzswjDp5y5ecfze8oCkwhqhtiY5PEu37b3RWqNqmzyY7GWXBEcd6o",
  "key3": "71J1wbSvm1DzHJE6eMkSqiGUqh42FK74joDL5FbDDq165p36ZQ5we8QiaL9CPkCQFhN6HkL39L8iHdLWPYjnj33",
  "key4": "4MsFem9DbVgh7VNZFTDmXXSNLQt8C65EnoXXtSS3JmVbSgbe18f8fh3TfSdT1jo4kahJtrb8VbpNsVyBFNVD1Lho",
  "key5": "5c7FSZ5a47UEnGf4qXCSrxUgV5KUciJJshJE38uygFLTgKq3Nb5jWuzPPfaoPcaMU37pDrHYXRFyY5iEEqgsP9F3",
  "key6": "4PrVdcPFAsMitF4Ys3F9rjrMoVBp8qgAHjEVgYnPVEyjU9uBQeUSHpaQhp4yu8cWmJ8hK2W4fhzmrPtzAcw5PJ7V",
  "key7": "26tkU64qzEwWyN1ypr4Ait7DZXStjrrFm9YGfX8SC7yNzU3u4KoBPyyV1WuiWA6v6k7gJEvkwGD5wijKLn2SV6hN",
  "key8": "2fzXN3a3C3pjsYor9aXPUQcKJbLcHuqDyCtA3x439Tyv22yk7jW4YahWgUJRqvAEXSHPAcA78uoyFTx7DwAZT8Se",
  "key9": "5k52UFeAXPw49BWmKCh7scc5jq3VS2qTjvFwif37xGd6aDt5uYxzjKxvEWar3QwafXkXrsr4RozBzjJV7mm1U8TK",
  "key10": "3PmikZzzU5RxMd76Drz2Gqdo87VunsGUCPF52LBbF6WXzXj7bWLkSLLe5tE5op3CaDSHtgjuJkbnTr75NbYboagw",
  "key11": "2j4YUhhTdq5pxPh5TBwF5xvMuLMFKvUhj4aVVTLoLaDMv9FGXqorwAzSLWJaY3Y6xQaoYe4q8QCkX6gQTX5zMpL8",
  "key12": "29ceL4tqYJnam5cx8YrSjuNdRaj9xp15UgBdTEpT9pzFLUrA8wKMcd9Y4Jkst1KzLWee5USpRDbs3yrCv5iBAGsq",
  "key13": "5guSujjL2Xh3Ug2L7mDwyi1mrXir8Qsj4r4qSVEQdjVrGujMScbnL4UDnpgBEKRRsnwJDWNXEMEy59ehZTi9UxHn",
  "key14": "ZqKDRN5XwZDneFcNUY2ad9PPJbZDmyi1D2o9sDrzV6GQbfEPfVMBuWT7hcxHmWSfqoR3oufDi31uYJGwq2JUFEA",
  "key15": "3kuBnqSrmLzjopdcbgH1EJb5nBJHSKmepdEhDzhpcW6jBHVP86HomMP9uTwgXtszztTdxVXvRGeF8jNNwChjk8FX",
  "key16": "3pkwGtwgkLtvBtqqqGZVdWWzJxBqHxYoM5XhyyeThKz3J2oEQLHY6k64Vr3d4rDC2v54xoDvMXJQV5P6kzLqfywc",
  "key17": "5E3UgatwaJkJ3U4AyUCRaRGJsQBwoqAgEVzhN4nas4dBNANoJtYaxdeVkbRr6o6otbu96ZQQiJL2bHPcGAkciqUm",
  "key18": "3hhBkYSA8fBmXmyxZkHS1Z31wKvHD6hNxguZmYErrF7iPmeW4UkFuJLqVDacjo86YuK5DznqHxw5HgrVkMJLzu5E",
  "key19": "2A3KzrCzUvKpryCCArZ4sR6BFBvNWpbH9tZk81dBwhgkkSj5bfHNW7kpqYX4Fn2jvr28wwhguKQkuT6hRaCiMDim",
  "key20": "4SfC4jKiiviyBSbsMQ4Rn9rmEsZiaPE6JRshqED6eAX5KbL2ZYD1E7AH5cCSLzgvJDjVWkZutAH1yLpVvtCJs5sf",
  "key21": "3PMr7AvezgKQcr8QPMAp5yrRXwHsUrbpvhctu1wGZ1LBwoVPX8e81wAGBjRo1qQDSFHrEammtvvXTMWZ2WvkuSh6",
  "key22": "MkKzMLND4UH8bhAuBHWVhdLC3DnqhGBjqZF9xR8ktqzh2zLy4hZEMYBNiko4o7ERRgme9a7Y7hFtRAnumLPCv1s",
  "key23": "wcLUqwZp1gLhRasVz5LNWCiEh3Ph9cbHZwFGL43bv2fGad1KxRH7zKKJqmaLE7qaPKmJh22Afaq72zayRdCxdEt",
  "key24": "4NSBMNg44W2CEFf4GzHHn3JLi12v3SwE4kpuHqn4rhZwMwJMJKMMzeH7TPbUmHB2UWRELpQAfgmEVgzAw61QXXQ5",
  "key25": "59uUW2ZVJewiX3wSyfzZyhLDSYBH2itMYLEpK1FHhnH3BnPs5vr4JFu2GXHDLrc1SLxtFpZVVMSbcU16TNLMVVEE",
  "key26": "3ksZtjo9oEvkZ7Zv2Ns2Weomby3RfGeJaZS571Qk9bQpmP8k5K7sGXFwUkWMwjnXhQKYF6Dshemb7tpk93WxUiTS",
  "key27": "TRLzRt77UPKNehADdXeekdK31UJwH5L8EXZtVYd3A7EKqMaB9RPkqV3gg4TxQdrWEZEeyR2gF2XiKYsjZ5UpfmL",
  "key28": "4ZD3tJ1s1WD8em19pGNmKgivzoGarkcruCMN4vn1SBCzz8Utgdy6Rk2H8np3aEKuN9wKBjU9dRwFaZrb3xRU6V87",
  "key29": "4nbf4Gc3PdEC7G6dyZoKJCcwsre9d5EkgKXnzvjfJb66AtRpqPiU96YkmTvZRxDT5NqpDxGURSqDoUEXwG3Le2rs",
  "key30": "uFsVnRKiYQjA2V1m6nyoumgadHGttcUabWEgjkzVAf3iBT1pLVbayUjxpBXCenhbzjK8YENYwZmnxcyoz6D5bdH",
  "key31": "JajmBdQiXZs5dH86HCL6FT5SLpZC8NCs8W9hstETKa2pNaCGBFyMxb9MqLQ9gwU7SCfVznnZDDZRcSMtGm7AAnm",
  "key32": "2HBzrP9jMbnMR7ynafRKD2FgNFntAJrE2Pyje3v1oPDeNZGjWGHrV1MgjyBZhFcWsN5GMAExGywLHYM9vA3BhDyZ",
  "key33": "4j1Z6XomzYTGkXRYsgApBWCfBrw8AVLL3suaHrfFRXERu9mUFwUnGVEVNhknMfUjTqAtpHtCseJMZoUvZ3my6up2",
  "key34": "31XgUWZnrF6ePoyGPWHykneP8RmzqihsPWhSnkP844jscfgDGMgr5xKfPWEZeFNPvySwM5THvEhWc1gJo1trAW7Y",
  "key35": "2WMoFtoEoigFzkoS3wobqa2zS3dxxB7L3wUUKCSvgMsNNNq2kEqd9JF5mR43oZs3ZwBWTTBVeQamfKQRe8pbJVTL",
  "key36": "4tM6RykQmG98nh18e3NKtZyLAgijoaaQcLX95wJMVXDvZeFSKkp4jF9hZFKP87ZgPYCf82ZHzRXEEoUJ9GbBSx4m",
  "key37": "3kwT6ZFouLD3vPjfhyrbV298BwqzKdSU2WERSELinAkueB4ZZxDBc2VsA2q7gwir8xctZivaAxRAwWqbbo6arXPW"
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
