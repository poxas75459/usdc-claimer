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
    "2YaPKvdpbxkH2s7UqAnFnWGPCjDpQXcwtg5egxyHw81WxtAxGfhvgYVHVP2VyzVw6ezH9KkhPbABt783i8PcuuPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H3tiir1L2HRcVMsf2e4xQu6caXXo9Tmw37o3gH74rRbmD5iaeML4HVL4rJ6MQGhPD1QNaWHadPMQKcdiPeVqpbz",
  "key1": "mhHL423vyATCeydiCw85bWfESwsGcZV4ix3x4by7mcDNmEpCqLefCWVTTaCGgm5kzqA4bDxVPj6CAHdqfeERNo9",
  "key2": "2Jh6BtyCZnSurJdGErBFJPFQHB9vw9QdtgsmENV6RD5T9S4a6hsud1XWGHxgSsLe78C6ayqkrzJbNJWKHdHnaHPk",
  "key3": "2Yv6o1nYr3utztQCyFcGBUV8vTuLRnmvYUumbneivVUUdE7PGDtLByjeZvdjbyaTwU47yR7Lr3Gkap1ofysKb9Vv",
  "key4": "3Pdyuy21uQcRmJFQR8qMxJ59mSMku1E4aoJMALG7WsR1qyXsPQdBjHi44w4w8au4kDygmrtCT9Se7fzyMuPeH6ir",
  "key5": "3w3vXiJwUez2QUFukmohHk7G1iYK9GNNHDE8ySFpniYkxmyD1HMEFz8w4mBjQYf9xwY4b4bFpqad7hoCfnDsNvkn",
  "key6": "2EwZzeKXVCoojNHo2Ma3zDzz1FmiRLJoNorRmHoXSCtLwHdqt9SqtxnPNu73FoEzExR1aAzYCrF7gaydkzdytjBw",
  "key7": "3FxLVK6BxKPbXN7DoVHBCM8L9Xhr3yKboUGRjtojkTzSRScFuPRRzKeHeA2n7t7MNC3W1E9R58mGSmiMPkhqjCLZ",
  "key8": "4VwNibkF9rbDbKNhvUaKoZUddaRXcU3L5UWseqotkuc2rmqFaktdegauBK7ShjfSx42eum5ErdCvu1zHQMFFm4Dv",
  "key9": "4xk1aCPmZypQgBD2HjoXK9czA51DxsoiCw6Eia7T1Rt1yPxFCfMFSdrpYKhkjGQcq3BqvuNgyyZaKqntkNiTQVmR",
  "key10": "4qHBfTAzCWWfPpMdDq9MiFJG9WgFm3RniPWNr3KRgt9yFqrhf4SGeeCkKPL7EypMBJkvn3s868xLDnqJXVd2Enn2",
  "key11": "4LQueNwY5zBjivLbExv1SAmspLvFuJeyZ54AMf3rWM7DCesqtN9b4CEnYy4AK615nUtKAzDrZn67aq6dWkjx3Nq8",
  "key12": "G3gpJMxrJCJv1TWzykEhHaYvmMPeiwjGSBNTmBQhB6wq3eWQw1ETEtgbhqx1oLX5XAYTgqYPuYka5Ldr3heZh9H",
  "key13": "5MUjNoYPQw4XMcSMNFS6Kr76YBWn2PeyjnXbEnLU8S8rReXpjZjbkJgYsxG1a4sV53BiuqMPFpANMZd2kohJyup3",
  "key14": "5iTkUbwuWX5cBYAWmV6UQ8CEvKzu42MaBQ4cJdsLw5WapwqCA621YNBjBmfr7U3BCuvFdzZrVj6pwyBJwtZQzZTQ",
  "key15": "4MNdqK6wZnBqGGRcq2B42BJyPi2qtgM3236JTdAwuoLfMBJP2EyJp72uhp5tJ6L4H4ktf8SFbSmhGqWe8XL36jBe",
  "key16": "2B7fMaSjUPFpPsGMKgLTCvepYXKU68mG9LvdWJ1RtCgR3zRemBua3pHS6ZwGxymKBG9KK1xNfBF8kqiuZFpYNHAW",
  "key17": "2to4UNC49eT6zPCFyfnsUCVKVjgJdiyJHAacKobUpyRhpqnGghCiNXhGx4Yd6skjK7dSde2xrZfUzvCtHGyXt9Vy",
  "key18": "5VoziwyQUGAu3Kv4sUPVUmvdUurFobtZT54MuiBwRu9uo347Ms8ex3vq75EEXrdarQabBSRyXXHDvkdoNZ7q2ZPS",
  "key19": "3nRBg7u5HGk8mTdPS116eHfosd9iZh8pVDPwujPdkTkTEZwmSaguaGStZupQDKAKoVNG5XrpstnCZYRPk2bt7NZh",
  "key20": "5h3c8QCH66dmpqLDTyRnUxpuiJ62BV4qR4HmyeuTpCFZAku7SQB8namt9dqw1qLQemuXkuwyUs8bRFQHwrZpGwsf",
  "key21": "4bqtyx3htLWgBeLbn7ZLRaCSmqB2TUKc257xZ5gWqoXZzdgLX2sJY5TgosTjCT8aU1zcUHVxJiipNbTgpn81AJaT",
  "key22": "aTGcd6sZFCMoYTERew9wYwBvd8BzwDai2gCin9a5GJEtZwsQ8fzWv92umM5mTpqb6DBrHaKKjLEwKTgDKcb8T5Z",
  "key23": "35ZrboGqRcMtuJ64Qp6JRHSM3NLeK3AucKRFB2BHjf1zPsQGzBJJZNLYLhKQdtvNpeFQoe1iDNxFnLv7Za8VdQ4f",
  "key24": "3AFfyeQUiqRRE2f1DKLwy9XfaLWYnxAS9Sr2wATw9Fo7hhhgoY981k6VaAZU6ZqMSV7CoysTQqxq5fHUFWezdZSp",
  "key25": "5A13o4GNphcqH9xVkTomDsd9X9qzjXFGtjDVbvFViCDBK1Px4gHgAgq5U3stWbFLRzoSHBSoM8o1yvB76WebJJTM",
  "key26": "3Wft2EwCPaD721W82Ye3gKtkHNiWsu2M4fdvUmUBZdnnbaqUa2wN4id1faehv2Li4rohCM9DxFPh1SGQhR9yeJAr",
  "key27": "26fzSckCG1nh4WRBU8nZs1kY14KVm67YqgCkrEvUVYRu8zdEGYzyWVDNz5e3i7pYQRQNtcheECjyX4wL5yo5cAeb",
  "key28": "4AS1dN9ne3adRngeyGV7GWzTiJF7KrYVy6ZTTppYHDpPJmVeh5MJ3CgajRUozTLg4VWWzM8h5DUWtAKgThLzVrN2",
  "key29": "5fXsAxAfDapH5wkU2Y9vKKb7HcKYp6QxoEvD7jpnucrGkR5yBbPsSm5JGzLoY2dRdev31QXbsfeKhNmk35jaSJCD",
  "key30": "TVSM5jg7sHhTqLNoqatQkYGaA6c1A1yo5CzkjvT9WCD535Pa3P7cL976v27JoP9d1qnYxHHo2etk1F6dQWy24Zh",
  "key31": "4VpfnNxGyduLH5VmcLZoSYssrJhUx3wbfmJmqx8Yod6YNo5ZTBDDiYq6nip29Xci4NFa9dvHKrUfJKcpsiEjaTXs",
  "key32": "2kkh4LAQWkK6oZF4YLe7X8Lei4ti3NgekuB65EhzMhk5hAnkPU57bh2DDxbydagjC3Lb51cisHsdHYFdUZL2rzJt",
  "key33": "oAjBjWHBBkKQLXvWoDtsXx2DuWMpDeaLztemqweYynKtLMTKWEBFTLUvzfDA4Cauy8wG2dFsCN8dReYU8fdHCi7"
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
