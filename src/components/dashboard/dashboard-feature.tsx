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
    "xmgFsaYgC3wte734UJkERUcRP4NfUgUNVaHqHSnwgGgKwHMYJA8DrHck4hQ68mHQLM6TLPG5tScZb9ARBAcdP9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEZUgrtdMbDTYTGzVsr8ZspUV1Z6wjKmbjtWEH9w5G5pmDJWja7zbUtGQBahiKgJTG34VAngmu7baXJffgMW7mp",
  "key1": "5q7CTNV68ojevRUr6YZGG5R14jChc6QwQ2AtkqrVMeLhtancWeL8QPyA5YUubQX9RwBTGngGBdMP2CopUKE3wX89",
  "key2": "3pewxjNr6TQpzwvgtqH7bJf4mLbPXbE33X3XRWo45HJjQWhAk3F9wBcv2ynemUq8Qvj8JGNJqZbiokZvZYQnXd7Q",
  "key3": "44bzyQvKJ6eHkeDLkpR2FmWo9RgLKoFnZb5C68G9nwETseUE6Wd2a1udBh7syA17ntLb7ZxF9agwC3w4p2ZY27aw",
  "key4": "53auNU4hQ6ACqqC4xbg78RhWLoAjxzW6ykWfqFY6RaQo4WL5kcgDEhJk1tWn74HVjdrzZQ1P38bHtUpYzDEkCtuU",
  "key5": "wonPwuUhZdN1PQYPenTYb6uWyxvkWaXbKS7MRmyLuFZUuv39WNzMkT6kvCcKQRAY8ShKqqdHtJo6PkVwozk5TYZ",
  "key6": "4EQudm26ArYtDjUVuy6WJYMgkgdtDQoLqVMdtgSN85tZbxt96nvExFaD84KYSFLvPoAhdaYXHMAwYqR5WG8nrhn",
  "key7": "5vExTjoy3ky7uJtjRwZKGJAtGEJRqTnzcuueAP2txQpDdudZCzi6u7EGdr1NFCs3dUckj2aw1o7F28jc61KkGyjq",
  "key8": "2tVXXJAtuC6gjXkGgwoMwWysFpwn6uD6519KTq5HMkywKCya7B17s3bTueLivTdRkVKVrpwsbyfzsLkHyRPSFMEe",
  "key9": "2g5Ku1CVYFsxYt3HaEWGaFKtsc4j5gp1N33cWeprz7HrNCtSfvjpUmJTpi9MM5arxJfuVcgEPSK487MRfBvUR7hh",
  "key10": "5rMmmcZFcMy1KXgaJtsjM6oo8rXH5NweabGSVxDLsBgYyM15MqR3qQFa5eTULLsi1kEJyT4ibd4ykp6XUecJzcTo",
  "key11": "48aCNmnsiDApFuwv5GMChwpqisYEsigk2eRHo2kM8yn7cDH3FtWTvaeWEfeJG1uHWY2ZzoN7wLU7Zss3svfvx3mr",
  "key12": "3kFPDRcyQHmncuHz81RDNM1AzY5WRKbuogrjLzWJjmLw2y9WLtTd644D3YcehcoFanELawEVALBckFC82EH1g4ub",
  "key13": "2ztqgfuf5P2nSLB1geWyoHwN8VFuqjBtJTiiDH8vuP8JkXvVwZMi5eqzSxFobcqKiDZRUNgSd5puhN74md9otbBX",
  "key14": "2KHUyLR7mtSn77MHUcn8t5RddQjgGmZnvhBnfSgNQacfo1NLpwSYbcprq6ivMWYnPThc3J17WqbqrFW93TB3LqBU",
  "key15": "5tjD1P1GbohAE24CccrznWEQBAJGGr69ZALrMNop1XDDc1Kk9TpRuMRVuGaP8WPwkcd3EbtkHUidYitBSUPEEYKt",
  "key16": "4eAfi1FWddmH3CRFcKeJwHHaRDDH7k9WmYnUbgPK75Zf2GcfKAkDn5wSWowD8EPjYNtvAKyTVxrGCokQS5DqQjqW",
  "key17": "49Nt8rd3RJqEbHzeAWXRg9FewHQv39jeWd68JyXV4fdUJEHXNBHMsAMssMgavtKgkqCtYhWp7cexVWCLKBUhMqfr",
  "key18": "5WgLRjUZyW16qXpSGj7MTCCXp1Y5pBKa4NSxkRC34ekTZiDxHgX61fzKwYjabJDuix9aQC3Vm7QKQZunt1GvTT93",
  "key19": "54pQBGNohoFGiqU7wCP5Nfu3z7BMJwStPbrjx8fvv1rXHSrKRnx9KktBDpFLTQjq6uhbEpCnk6SgrKfn1egx4Vb4",
  "key20": "38T3T8XmrRL5jUTJBGGuAvrG2VBPxzoV8VY41oMnsWnMkAsTGrPtmoEA6ae3LetNTF6AU27iALFpU9rSe5bnr2Y1",
  "key21": "2TeAP1PiAm9BBNEZpqefVr35tww47DKfMNUZoELtqFoW87HmdTPAuAraByrxUsAH1M8cUa8nMTwKBSzJLzmAFz8C",
  "key22": "2Up6ejYfcEEuy7ezpiayvggTSf4vN7qvnqg5ijjFstxbHrmPZ8dvL6sub1fkab9xVksmTpYtgMWEwBHsPU5raqtb",
  "key23": "xaGpgBkpSs1rwjkbXstgmdNQij4eAUAyMHuNJw4kNwRi88v6UrWdx8ceE4rii6RybGEFHjpHcWMoAxtGLx44tgx",
  "key24": "43WT9oQ298dxkby9R3nk7PrVhkRj6tHx5bkoh2hgVcKFpAR4HZWSg6aJmi49WLJLpnYRKcryKkYeWX2npePC8Mmb",
  "key25": "46aGRuEzYpb3zp1BLESRmRSPH3RiTEEaLjJPNhztDWXQJmkUNmrU5nvTcdBPnMoxjNfNXyggthPFUjjFhZ8fLghi",
  "key26": "9jsSVbzJjpK2AjhPfLGbJyC2gprKJchTij7uC5dYn8QuQ1ksAw1gtGjGG33NCUnr9i7ysFkTmGTMXf4GE76NhRD",
  "key27": "3YT5LNK4muGhNbG47BWGZm9x8n1oDMocFh8yfSpQpzimmvb2WPqttzvBvHPSVy3SXsDZCnfUWwTwSGAHHAVKR3gL",
  "key28": "kfGJqMGv5dgEUwSmu9ZpjtxrFRm8vYazYk8eHwAGehgZND6GdTzhw6aTSGQmyqvFt4WaaqRZsp5dLsMj6DTXp2E",
  "key29": "asc957k64xWCPK4n1RrkTeezeD3CqFxWducDJ2FfzptZhzXmxsNZKp8RiV9ktfwMsEurAt4FJ3xwj2WyDmuhfYN",
  "key30": "5Wip1T7b3mum6tdPLB42ybxYgMotR9KCL6hKTvUyntXrQBJ6sbcoztJhZxKZHrrNqdGF9WEuWr8EqCeqGd3ZY7cW",
  "key31": "4HKqWSHYWXwRNF7xWkhdAQBLg6gWNCreByfQgyuymP6WxRLQSapcA3b9erK9xFgmZVxqCv5h71cpikDU1ZuFNzhG",
  "key32": "4fYkzqCDS5bDcMhs74CWpjcz43JLXby5hdCCA6GUdTkvaBjm1QjM5wQhe2tJWQy5iMtEumvv1Z8eVZgypepQi9tH"
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
