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
    "DvFagn6LscYrRxc479oEu8JPMYdrR7BNTVhrQeXvEKrkg6LZmanCsQtFYJeGibtH7nRDGEXHY4ooAGrtowA82Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sohuLawAxYVPiiij5t3BB2DwFv3W5CRNh9cYLvNqGJxwP5hJSPcenxKs99E3cBkYFuyVxZ8qTXP2rvWrQvAMG5D",
  "key1": "2fsDTTAPDWbvwicozDYHV9BfW9rrbuK2qMLEn8hL3sedMnTD9NuPTB66F9qSMXk2mhQgt3aJ7f5kazQTQvenNhKj",
  "key2": "5H92GXy8wswjnXdoev4CaMgi5Qu7EPY13V2E8rFGU1caEuQouaavgAk8DoB94Zu5vorQ7fcAGHg3MF7CNctviBaT",
  "key3": "4wQKae8hq9FtDxbfFBSuk6hTNwWwUC7c5ZRMSJVei7GrwqB9TeYbkLwDPcFX16TvTHhAjznQtqz1jkt9RdAo2thA",
  "key4": "pXmACaTt1xzsBih9ovnHKmjY87atc2QBfZ51U2Y5SGjxE449R1LT4msbh2QumUVYPVyLeahf6gYkqmzASvQdnDc",
  "key5": "5J3V9XjmNCmnfyspJ4DUhJ5Uuy95Xz3mTdSSwaarhfrckDchszAuuFTJExzLBcgF6eRPJwstuxj8ixnpQUZf2nB1",
  "key6": "2W4TwUjFmz6mWjoGpAKUS7MuPv6tc4xknrgsFGc2UeXVfN9WqSMS4hWCQuYGfcHer3JTybamB7LfEERWrGhsrvaJ",
  "key7": "5YuXz8MxsZNUjS3RRNLdPa7hZ1MDYCNkjc1jk2PdbWoehjRY5WEiX4JKr1tfApcRQPbJXzAaHFgqpHfKFecmL6rw",
  "key8": "12hmVVHcm94YT7NQ5bsbYvB8JZntYfg5Mjy1ANijeDv9mmcfjsEKBXjVRcq7eFvKLA9cYFUFetNDKea8VBr6vtc",
  "key9": "5upTyAbkULu3oBMxQAfDapoTaENS9d5Z9uHn34aTuroZuPDpnahyGo7MSKkMKUnhZy7Ef8ZpZpnhw2aL5Cs2degm",
  "key10": "5eEZX4phSGdGsXgsyvbiRBcn7r6R8qoJ4bC1H1nswxPNphMMFJsCQ27GEVkRPn6MdX612dCR5pWUinv8Tzy4jLc5",
  "key11": "S5UyfzUveizc7YvTRV1cGevMFCBNAASWfuNomSzx1qRCs9rKY4WZMhX9xYgVgbEyqKCuzZsh23Udp5ovxxTiJD6",
  "key12": "4RvYsPcj2iuAFzF66JZ223VCC1jN55JVJSZbk19hnugyQKnvmcAcZb1tsUonvEjMfDpPpshpejrBDHmdZMxXMApK",
  "key13": "5nhQTnb67WXY5jyd4ZcDKPndBoesrhYX9e2tkBE3sMFkCLU1TgkN7hL3JT3af93nH5rry2WZiK9YXp2Y32ZAktm3",
  "key14": "5dH5bimbphdhPzuP89QXYd4QuPegDg8to4jNowbfcpgG5QpgeopEf6LPErFBNqb9cCVWg4L19vDvqEhTijBZATmB",
  "key15": "xFGDi73APS9QvKom85mmcc4gbzBMA3QG9z8FGouqM7RuxvKukCrHgZ6LXakgUqkJFTtxvfj1yJTqEiJZDyexxSU",
  "key16": "3NDdhfPwfF1xZZmMcxxkb57gE1cJZpH21rs1aqFam6b8AT3HAEfyvhe7BMmAjBMmPwr6SzdwfHFnXSA5hogD3y8y",
  "key17": "4gGNcSHVykfr2mzvrEHRaoN2be1RLbxG6MToaw6Wfmd4AtGwKhcLqLQWrscVZF7d4f9RL6gRgLNRkbuQyTkHxTXb",
  "key18": "53EudwADYuwfJTU4vtFeGPykKiwtHnvgaC9Jz64PFBFSq8iXvrrgr2eF1csrEfEo2zvPA8U5zJWZ4DfHsEBhbYLz",
  "key19": "6sue2J58mtMzGd52H2TvCBF2dJ2ikA9JYZY7gzqeEAboZsPGyCfXej3xqMaCkXvefvSNZAKvb2VdgRFT46t9FaD",
  "key20": "5nMCLU4tLRucHpjZG5wbKfYe7WDwDTDYcXCsq14EU4SUXmAEDgtJJXVRRt1hBnq16G8HoS48xi5JQ9R6eDY7rFWs",
  "key21": "5FRwPaf9HCQfR5jNahd7KjpcYkvBJHasRwnJBr3MsB5K8K18w1FrN7vZPif5QEt21EbTuKE9qkSEH5SLPsYSZCVX",
  "key22": "5VYZwTJCbPmQKCekiYgbq9jJJYECNJsJ3ZtB9QxqRA37MpNTLGbhL24mEVyMFGo4CseyGawYfDVFmgcvTjGPmviZ",
  "key23": "31uTnLeWjpozjeAiX5YjyDxzjKBQfr1CxvuNuEFFF5dDKY5pPXS42W3K1pbf8koKTEYQ2XyxqTBLLRCzpENoaeo8",
  "key24": "2UGhkS6nMnC7x1qAPufEnNnc83ZS3rhnPCh2EVbQoMwrvnZLnGq3cTrvkq1dHCimwy6MtP36CBkguyB1wAmaFya",
  "key25": "4G2hHHrJGCh6chmbBNFXQeC3KPgzpqDi9ADWGtxMN2grMoj92mCnDRfRMqRWAvxpnrvyBt2NJtZfiARwn45B5LJT",
  "key26": "43zH2hv66E9WukFny5mKsPtfNXMgTRDAw4KTMDKPsvN4Nt8ka1LZfSgCTo4JYT5vmDFnBmPjny1P5YRCDDJMm7x7",
  "key27": "627UqsCyeXWkAkAnDXJNH7UtYJt3x47Yx3ZKXNDQgbCYBHwrGU1ofE3MhxjehqboHenT5HgtxRb8UsoQpV4pTiR2",
  "key28": "2hj14MtWST5tY4HcQdbXhkrYRU79omSAU26QYeSkFvf4Arct3pgh2Kz53qwwQTejQyJD9mmbCSc4MxWAALC6MzAH",
  "key29": "uJQxBAL71epU5oL782eQV5SDyukBBetQHVX8SW4ALxSuJD1FoCnYX8a1aYQ6i5W7eQtZkCQiMu2QZ5nZqeJSi8V",
  "key30": "3rV6eidzt6HBJo2GD8RgnQsDAVbeFWKx8LQQdRqnWEKKcgynhCx3uvAaqLmohWFzatRK9rBTxHdii7xQq4pHoPjB",
  "key31": "FEirFwWdZijnkyf3kxGZg6epTgNStHctKQVn9KjkoND6oe8dmA8QzPsQVS9v8dDPTFicMNHJ6zDwCaxrRR1nnWe",
  "key32": "3sn3ir2k5g3aC2PuSd4bbHydktLnpt9J5XhL4wXnzw72yf4renc5Mm8euKEs21TQUHfudrY8Uaw3Jans5Yhu19Um",
  "key33": "2gU44Tm255mh96Q7Zt7ZakM8VaUhzztHatMzS4AzEHxTmwrf14Pb9ujoAYeTX5saRq8FcbB8U19W3tWV5kmucZj9",
  "key34": "4EpeznMSc5dW2JszpSSoGf9Pka4jSyWRXftL9keAbAdRb6gsDBBcotNXdQDnUTj1NxcGgt7ch3YrAcic2hPRwq7D",
  "key35": "3hFr6iNud5qCrWaM2kfcvCL6EQxHoKASxHXrPJutGoffjaQDia7xAoFJvrvQCw8XE4i3KJ1SkqyLUN2VL4o2mpyU",
  "key36": "27kZwtG6b8BAg51fkpki2SZxneeAqsGtePaekrMgG4xrA91SRUP6XbpiYPFZNxttCEYqNwhMRs4FwSoEMouvea63"
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
