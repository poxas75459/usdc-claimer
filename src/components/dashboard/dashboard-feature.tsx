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
    "4TZBMadpiowZD2uGEoWpEscuhpL5J8csggLAs7A1yAnwywba8dbTCDc7bo1yCVB84wmFfdnfz1soW7HPseXw7vT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zoTp2PQRuZRqnJfZW1qscx9eET7XLg4CFYXDGqc3yd5QGfhTTkbEoWePVn9Bx2LaFaKNNn7GD1yRpZF9sb4Kt5",
  "key1": "5c1PWkfPuo7T8VJgLFHANbyUjbbihdTUkVpGCRgWgqTsVxXRA7AEj3ynNBQ6b5gFtex2MuX58yEpxgeXNaz4YafZ",
  "key2": "2vAfp1tyEigsVfZdPEKuyPpaiRb52G957xdid2yxuAmFQbbFszRYpawviqhoU6F9EymWp4svLjbp6Jd5Rw7c9jtd",
  "key3": "4ehhnwYU3eVG8tdDLuQs8knpGzprQzjqrHmTgQ2JXKrYabBeB2WfVSztQeaXykArujB7JzQWrsaUdTtZNLzVEjJH",
  "key4": "3H5Z3XXRWe2PGPJmzicnA4TUNKdc4jCUPzkVFrW5d11NDteHmHU5yPzEorKbzWAJALmRzutxESysdP6yroXAQZve",
  "key5": "4XxmppCH456RD2zSWiFzFnRLWFRPHnu7AiiWaQXC6EbaCfTAQQkztw3KoghwPZN3hnVh9ypoiwGwSJePDeotHRX9",
  "key6": "3gktsq1fhUYoGACt9oRqJHRWBi7XSQRHKnW8iVt5aQXNyiWiHisSBvpvCVycU6wzYSYM5TxHK5EEae28AoZ4xaMS",
  "key7": "3AxXtZABuwQcNARm5WUu7svK3nxuTFhgYFQJYySioNoxguXa8V2NZxaAF4v46qi1wkGFae2i19DazdxFj68zJYPN",
  "key8": "868App3pdkM5fEUWcBuRt9Z3LUEv81G52uXr8qXuXErfmZR6Ps3pGdfUB1mwgRK9sm3Gvmey2jeqR1WaZryWMes",
  "key9": "dK4siEXT8zJevnGkYYuXtiyb54pSWXUyXV74PJngWHvMW8vQyRUdFD9JsrK85v3WKLCsvhcetdPwEzfM3JzJJJa",
  "key10": "3bEPLuGwF7nN48rYhbbT22bfiF3w5LRnaAZkk8jj1TreTarSg8LK6ruEqdEGsbW29ubsvMD3rHNQ5jqh6BetqxGq",
  "key11": "2kAV9T1GLM2NgTnqfoETMSNxjJY12vMmovjzX7LCXSWsxFuTv6YZHeAVJaftNX8BRw6muJFtcCGChRf3p6TGVLJJ",
  "key12": "35rerkHab7FGcg2u5Zczb7fnxdtjwCjAGnzdZbaUU3Wf7pGhF8Z1BH1RcyAtEE1LmXvc3REcXYTQ3bnXkk4R6RZ6",
  "key13": "5bab438BzXxMvDWZLsDpMECEECyJ81LJCynQ3EeEKufHBxrBCcukoyDvwECzj1NkBQo9CV1UBzd3S2HbU5WyBpNw",
  "key14": "5eeto3ig873pig1qyMqbaijDzSwWUf2PtAY1VpzsNWtNofUJKb6zVSnaoeGzDJ2jis32pNkqR47Tcpn8hz4b5mcD",
  "key15": "3J3JxmGfzFWhnTFiizKnKCGuwqDFpSbeQQybyCv3uRNqFnq7tif4QpQxPzaNc2oYqQi9dSSWVrDtoAauBNtWQS9B",
  "key16": "DUya77FCJagZ85hU9gr9VvDirNfRyE3d1MSxvuDs5vrKY6Ssbdwy5Edn1U56A45MVQP3oynav1GfjEP8RWRc2bv",
  "key17": "5Ai8guNwbDKWxVUim3JMu3S4xK3Qw8GzsxGBTf1QpSRjmZ9qQka6hgDj7a5xN2jipvovP8Bii1KD4xD2UF8MXVgn",
  "key18": "45MkXzTdSKUYNrnoa66i6JiD5JUvw4AEY97ZdDmdAwvDU1ozsPwjpkxsoM41FjqfesPxCpju63ADGXNrqSJ2aiM7",
  "key19": "268wHPdBWbNN89MgLqeahiMNtjvSRhpwsprwsP597CZy575qiBrRjiceNPSAhV8VGYPGHYiQYN1V5YHjco4eqZdV",
  "key20": "24tqN8ibuJw5oLJKs7YNPji7WNHJq6hAQEUTDzKr56u8ywWdN3wSntxT3knBr28DpinSX8sHKkMWaffNAEKUfeh6",
  "key21": "4737MHPahofMXPSSg5QY8GePwi7zdpy6C6tBg4exck7KB66VwR2htVZzJsyDppMCD5vRKiHC2QxoZq92qnPEJ1qV",
  "key22": "3gKtevT2AZHXSr4QsbhEr3MvRFxRxgA5A1BFJbCZE1ycFayJgbxdGcqZ6XUjSC1e6sYEB46TDewptsaWJ4Ah5cvK",
  "key23": "5i5dvRkfBb4rfSEAJKhsmcfUaG31kmZprMKg7Yjg4n2JLyL5YDQFQUu2mrLSQ3Mi9CMghFU8VV8to1bpK8FrUELW",
  "key24": "FGPwpXDw7ZSoac6J9AhieehSNWFGjh3vqv2HNRiomYsUJRttdo1Eicx6kdMtADmb2YRRkPvchdZ8oKxCgxRMKTS",
  "key25": "3FZV2Qry6yvpRqvnptuiiLqNoCoT2Hz6MTaRaQuexdQAipBMhFEcGA5P1iaTTdF8sVTeRZF7mCTmYQjTxWpigUEY",
  "key26": "2Du7oj9oS6bSY4U22GzWz35dD74Qk24MuVbPpGkNkcXwosvqAukM7wA4maHMymYCVc3AAGNRxAYhEo1smBwtmp4e",
  "key27": "3uQifWNeXRJcDdJiXwt4ww5uYf2qyMAj4RNDqp3txHBeEBsX9XgzvCpwcuajNUaVDoSJH8YVJdVmZ4o5JrYSVDr4",
  "key28": "3WUSzyybK2KETDBTewphhvPhjUB9PmeCQxArbYr6bjW7kAZVZuMy6Fg9hBiGPz6zFpTtaCfexkNXwkfmzJxeyw2s",
  "key29": "YAasQyqgoGdtZn9bGyLfAs3snfh4PHXj19xwL3S8VzjDjWPxfYFLyY1pwiqztEnCMxMYG2YvPFTZUCpVYRh6jJ6",
  "key30": "4huVmR6Q4cnfaATp3hnYhQ1i4uqmfwfpAgdtiscDWRcwZeVC3aMNLR4oNVnJXdXJLWyawJmGmsxmy9hBvTDi2Dfq"
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
