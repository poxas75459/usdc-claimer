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
    "4EK4cjrTYVuaMqPSNa8yya7y5WC7gmbrED9uUZB8dtxaDzGtVKHSpP9UGBNQ6R2o2YVWbUZ3ms87apGHUm9ut7Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2UgjFKJBUtMG72ffmTAmQsUHGjKggAbgwkFAUGXYL1ATbkb516xy2G33HkFsCveERZwzwuoCfducZ3y8g3kiRZ",
  "key1": "2qYumE9sf6PJiGtYNdcCRmuL7APuGzvHwX7qdBq4RuPg4BcDtLhQNGynRzHM3M4NVA8nV8CiTbKmZXTsLLcuiCy4",
  "key2": "2hQQtMpPeU1MrKLqQy6nsH4ynQCQ9McHAPtJ4VMa79Et1Hga7VxLVX5YGfY4tnZFS71bNHinjPGU5d8aNhAjNDVz",
  "key3": "3LJANMbs9xLm8moNjSbnG35nGp7iezgkUoTAvtfX347DFee149bACi1Y6vnTnFLsentqeCd24UvYuqvMRPvi69FK",
  "key4": "jkPP3jGHWy8yrGWdvQjDVAwBB2wf8udov9Drti3aZ3RerKJUWEwqbnPazhtMnvXWW5sJBxiWtnpaSzXwkL6pNRM",
  "key5": "2b63VaRjkRjh6vxH4Mqjj8y7YeeCXXaebzoB6mYPaSV7TK6MXTBu5Pwf3rMfWwTnYqxnD5XV6QcNHF3ZCyHnBapR",
  "key6": "3iD4yZQCM1UftsfR5K2aXwBbSYatKkjA9jS3LY1LdsCPRmqNU4SCnKoDH2TuDLUSx1arkdaxggSrTdqyh4KLRq6t",
  "key7": "2szqAH1KuqMf9xk9eiiaSY3nBF9rhS9pCF7ngh7JboY1XfxfSsM8wTkvSVysVjDE9zWhhufgB33Q56TW1KEE3m3S",
  "key8": "CfukTZoidt8JpgYuKdXnCNw2vqJAiAmkAqrHWA8fjBQtw581PXXNypsWwAPGJAwSD9E6NJoPVV1sVWvPiR8PYdZ",
  "key9": "4eXLTU7Z86VuLfzmEkYy31zeyKyZPBcZAhcEhLibJQtBeJrABJMc2UiC5dibBpEpbK5unx12zBEMrWqbn3oWp4XK",
  "key10": "ZSiXHQHmWK4NJxwE9MRmhh1mghLgV2z6znBxLMEgpUCAmEKeoUf3TEWw1TSM8xqgL3GPmogqcc25qDzKmRHdzJ9",
  "key11": "5aLy4c353yZVsh6fMkmxzNougevhYLxsvuvx7QbnJfQ4kKXLNHzmymty24YYahTYrwu8oDpCQiTkUp9jxPCSfJGe",
  "key12": "4N2MHhYVVxSe6KeDuAvnF9M8JVV7DCyzFRufxhWkyhTeyLbcK3vbc6kZWMiBGzXx6gUqnUqTofjBi5bY5xw93UaW",
  "key13": "2eaicnodRP3rukscgy5mnHRRwgAHZcGX1D6ACjuizT1fAkUHNcMEZaafjhAAWePLHqucQKczeLdsJTqiRiikFVde",
  "key14": "DzrbD2wyYMEooCieFwzHeWbfojeTwfypmjGfE1EkMCrpd8tsjhCX7z1TG3ZxrK9zjpAx1uzwH62rveMidbggT9A",
  "key15": "3RZeFWzKojaYVcwvbZ3ENKd5TvF49nDdJC7vVy7hyYgCRMziEcDnDmNYxV5fF7qMd6vnKAa49PHsXQctZ1PyxkVa",
  "key16": "9UpnBDiPhVSXndeUR9T6JYPpdBfcZyNBzXffdQ6qqM1psPxWh796XG3aLPRHCex6mUgzvSyhv222UtLT6JdRE1N",
  "key17": "2twPC5WJabhekVyq3r1TViqi31YmMZpG4qWVzX7hiEALytRWM3duWnZdpwULErYRo3T6wzoHczL4xn7rg8gKaYhn",
  "key18": "4bUzvHwktoN1Tqe3kV1k5866ak1g48t6BJRrmh2Nesx9gtqi25UEz9pQzvdPSrTSd9xRdcKxkmCBbYMvn1qgG9ji",
  "key19": "2s7heKQD4xeg8naXZNiwA6FFyghHf3hPHurgG8EwnEMKdig2qCrUD5iAsTG5khD2Y35vrXLa3Vg28By9sEgUMcr9",
  "key20": "2kow8JTzrVSBpu3kDP5LEeAHjQ28du1JrYU5MENsAizA3uPbKTSkiFUKPHaiiJC14FAoZZvhkBbzYJMZgDTof2uR",
  "key21": "4bkF9d1gBWGAhL8QErVbskgh7BCfguVr9Hqe9649KpuAS3qEjNc9QG56AdEwvTZHHny5sZ3www8r2AfshRgYLuYu",
  "key22": "5P9J2g8NFKqZrPwt6hr3PfXXEPoLowNCGUi7Fzvt4Z5YCQ9DZJRao7xFTaiFsCSBUUVMXnVLYhsfzarw9TDXhCEJ",
  "key23": "31CinZhMjtAM8n7L4SmqPoTCw7J8N57hYxtHNvobejpn3mxVdZweHLrAmzZKrriPCzjkPgmR6Ysmc7iPDTGeADg2",
  "key24": "3pT2ZGCmoFBNbzFkMar3TEUB5AXjca1q4MVjdXLM413YEs58ihvH2qjwURcxvH9j5z15wnYopGtJEBf7qo6eT6p1",
  "key25": "iWRzigyJUXxJnMWbS9EeYVU3qBE1HcsBoteAjCvVw8oavD4jS4YHXGym52ps42nF4KhkZ3drF5RHxVJzVagQrZu",
  "key26": "2wUFZkRSonR72d1owx7RdAq8tBUZNanpH6RHW6nHhrWnTbTv4EeVZj4fM42Dy2EHZC8aUDShdbeFsrFFrbJqzxTB",
  "key27": "hKfF4shK6ieWD8F1BrPDyrz1MrdxCDkA979n42QRpKhtTBDoi9NrFjku1XydZFKFnpryndC4ReidBRY6SHQtd3W",
  "key28": "36VKLAR3wFTaMZZExphJif1JC2Gjerje5p7disKc6P1s6LTHqCDTybjQNvE9QQB7NJNrBqJG88fQGy5hbwZ2LFfx"
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
