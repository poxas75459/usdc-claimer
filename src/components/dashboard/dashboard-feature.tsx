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
    "5bBx8aLg4TkbkPT34AeqAiRsR8jj2oVxiTfRV6Fdvc6FZNiUkDkAiRxsP7bwX24VEq8fsiY41stxbkw5DT1jEMRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ByscPxRFFUnv59MdAnZuXUzk2nrLjmbfJF5HbgcMvbetPpY28b6E5R6YffzcEpERGqQMDhspzD8rxFe6KFMXTss",
  "key1": "5pLY6LDz4H5TgGUcGhcwMiaw1nBMSqFqzAmP3kJTQojQMU1mcE9NbpWBF7CztqYwNne8dv4ASWBxNgAnX5GGdo7L",
  "key2": "5Fs4pKpYmLuuiidhALqSJfKgURTUgpVC5pRhrxniq3RNcH4mERLAWFayzwTLy9VnshQ9DQh2cqBA4ZU72CLezY53",
  "key3": "5BxiLqHWSwExEsDryRP4qMAt7EKcMK1pYxNGqQdTirP9cNVHMo5cYUA4GHkEHBGTyNPCmZAAq9EFWyC3zFUQdJTC",
  "key4": "AuYFS9fttK5xuYcNvu3FS7hSVKC2bLq2i2EtavozU1UHbRqBAfB4NMwZXHREPP9faAvcPd8GNWotLiWrSWaBfGt",
  "key5": "35VAWr5mwauKuS8w5SfWYPgSkeoasfnbiZvK1AZrWeD9r44T4fM96kiKLDaRahmWSbV74zCTuEW9oS496HY4yMFA",
  "key6": "3ZJfr52UVaaKNasgWEYU7JPvGEbLL2MU5nDXLGbz2unxYRUu2EVBEztkKH1nF1t22iQF3TsFEFrrCzDkdUX8BG2S",
  "key7": "5d8MW1uPJoq3gv9XQxyr3xdNPfySuy4uzXdCn4AeRDH1djkt18FSfQMySmjmPWSDMysqXvFYjsgtSHSn1mPWAZya",
  "key8": "63sgui6z9MXh1wGCLrYBVraLivKSZjvXHhWU4XFJPfQRLv94YQtM5NTb4xC4N4p8rsF9eKcBWFSsZ48xSCAmAJNu",
  "key9": "4j3PMrce4q8Hp7YWtCkVw2kbsnoNMPZGwi2CGtc1F4fvx1PEiaBoyGJ5fuTqoLpGE6MEJEK3tHTML77L1RUbq1oi",
  "key10": "3YNx65AYvMHc3A1MSvAwcbxE349YkppjMYr1dF9FdNzYG8NS1JDpK4QHnT7CMZtukNWbFen8RiNH4o3dGm72QvLb",
  "key11": "Z4NRiXS7tU1Muj1YxZ2bJUP7m41X7N7v4zJF75oaY1h8Pc5oUDjcQDCrkP1Es7uaVCFQfcXqq1bZpGTKrRyi6m2",
  "key12": "mD7xUssrTwF9zs3DjqnSiYJU3oHjsfVQkiNzh23zqstKuSsvx1Uyn8uzJL1C32aCroXLsLfq7Y9ddEUdtSaM4Y1",
  "key13": "4NuvuuuHNbgAjfRAobUH9aW1aooAzPZZoAgfPHYHLWWdYCYwZnBf545mGFP3jMkpvjHWEBbZ4hdJbVuUYyw7qxcx",
  "key14": "3dPqDkkgMZ84LVrDJmseopqusZfYMGnrqUnJu3agHb5G6SQDBgkGZDcHW6y5YuwDDLJYaBW54HmQmez66wnXVy9i",
  "key15": "2k7d23t3D1d2hEdFrUX5qwsGbuS1AmYgnfPtZsmcS79dtEYneN4M1G6ViF1JVNTgE4F4WhYbqpQHvHZccr2Aapmq",
  "key16": "3dtQhncYzp7PoLa7eXqVDjz7J1WJRMZx1CBGmBTH6vunjUz9f4xA66PZLv2PLg8kGa3RhQ54eUyQZLSKp934GtdX",
  "key17": "2rdbggufYyAJ2BfoaSQYDz8xvrgmvSWw66hWJFzS17SX3U2svUZnXMADij5seAFTFkJEG7vUoc4VFbYCgD3Mk9eb",
  "key18": "4WQZ3NsBzzdicdW4LMrseBXR9GKhNrdkNiDGi3iQ3KQm5PLobzjmpzjuhRu956zXSUg5s8eTSNgMy4KEoCi8m54S",
  "key19": "53tRuEGY8Q1N7cEVDR2HKdeycm8MamACDaPVQXCk7xqgJxyZ6DEZHHeX4thg2oX6nYFaWveQFy6qqxyGwU7uUNas",
  "key20": "MmKeV4o6DXAedkrW8BCfS3mbGJjEkLieRzDGGwQS5mpZcg5wAmcrDWEP7AK5zXAc5eUP3fzoHaScxir37QLtAxE",
  "key21": "3Y5r4mn3c36YBBcYgpQSHm36J72aoxbd11AtZULere3Bd1FCQJSy61GxspxzEGYvgNKR9255yBnecESENRAe8reQ",
  "key22": "3eJsQdojviGRthvFRCQEvx4xCbfhmUYFCh3M1ipXGjGrkjKuBMQ1rNw7ua7LhTwUKwgVw7SFNqjxrPdwQFAMjtfD",
  "key23": "35uTe8TBah4VqtcPp8V3LCMq69SKntcyz3jcTBUXV1Ca63dASEvsy9Vy5H8N7vY4Rn2UaFvpu4kQFySAwine2RAx",
  "key24": "3d3URjSW8G6ouNcWLaJdNXTpH6sgYiK4px9tLndgc2YdJCu6FnVEihmaxbfuz19NZhEaH2GWFfasQd2U9eByoZZN",
  "key25": "4SvCwG8d47G5wg4JNx2qPhNvTbh5KEs3L1jA9wh4kyqBgGN614vr5p9FBKkc7sym4C789uKqk5pKLiBR5MLmLeLr",
  "key26": "3cuyspSRuoCRnSJcZnfzWEFWXjjyb1pkeJwafmaokS5Vbjm2gScf3d15TAMBnNY1Sw5ZiUCswxvrJEG5s7MfdtS1",
  "key27": "3pe7VtusKWbrAXBtWEz8piMSfx5hutZWQEQrwMNThhhDA5W1w3pBqEZBUozS3rfWAhbEhx5WindRQXWMyFKFmEFh",
  "key28": "4P87rfB9aTFADvKGV4wPzE5H5fgFepi6sYzrXENi5Xn4KmNqJiv8MCvTLqLUv7nyEaekQ9evgEGMFwCvVV75tp7J",
  "key29": "3GxADjRK72876Cu3K9uH3d8fqjQnpPcPNhJQFN5MjwizywYndLMx95dBLAd2w8DB7oq4XHJrq62Jzs1BwMbAJrNS",
  "key30": "5EUo1uLdByYjue7TsxQdbJ7ooiU6ZZ435z8WqVrq1NyNtD5qYnMotv8pkWed5j3DejMLV7Vvn2cMix1pqpRfFjew",
  "key31": "t9DsveJisDPRg5Xj9kBHdSDRgVzNreF6gXr1nkybhY4hewnyx614bt1nQNNebxydRWBZacR6hyh86i1EDWcEcdV",
  "key32": "51Tzh381xafyP8vdgjNEDMpKqZoYQE7zMj1Q5BvNByLyJw9iF37nzvhrKWpG5kcGMvDFJCTJGfKekaLozZaV4Mfp",
  "key33": "4PgjbfeNkqxmm5U4wVEH1kgTVzskbeuYu5R2utdYQwAF7eZcWrndcFE5PGNeUN64kzULyQR9QEuDBqTb1kf9b1it",
  "key34": "65rDfJi6ChrdPdwbMyTYiutSaCKBWV3MjKgs6y93XM9pz4MCPUrwnpojp7W6nbQe5ehAWZWuip7runuWBC39njHw"
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
