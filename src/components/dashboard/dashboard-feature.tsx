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
    "26gnQgfn5NkfCWjdnc2yq4g9KD3R8iR17Uxobsi5E46bmXgDLBcnA3e67Cow7VT757cxVNoMx5SyKRnfEcSybhgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDcaSdQLW5eFQFbywsDg8unjP6hEXsfvZXDsEsdUu1q8HpVkg9g8e5zFrma1HBjJSaQxE4Q54EtbjG2e5A8fF2b",
  "key1": "4d2Zju9HZ76ZJReW8WvFaPXz7oTZWH597LaDnq8fZg3Gzm6WY5JjW73D9eAxraKvLEynS9jAbd1sgpxhEBxndgKK",
  "key2": "J9CB2ueTt31Nz6VhtgsxSQSknxXPGs2hUX9jMXgs3dp1tRJV7vWDsnqPixZ349pxkMQN4LBgajNY1HnD9xaQ12q",
  "key3": "22tt3yk9X8uXfLccGH2xWfcb3wJuPMnNcDzieijAxtT2HfMy6cyMc34VcAJ8RY4PhCkFRwa77kpwcRBdt2fs27qt",
  "key4": "jcCvEWZ2Sto7gDB2wS7B1Ud66TkvFQRBsXEpZcrVVVoekwY53UxZfpash7NyNMczx4ehJsgJSEXYjfMHDssRxor",
  "key5": "5XRx72hhu5tL1kyeb5LDNrQPcaLm7Nc9VJWrydATzs3NwaJQfKxeaqdD19ZAAwgQzKnNKpJxFL92m6Ce8Be1j5VM",
  "key6": "56w2G26sG5w5i4nDnGBVdgvn1Lg95vUKS3VvHnh6JqV6xtUskpQANpPfKtfRQFePaNszgqQ6K5UFYwk7F4PiPyvA",
  "key7": "5XfjxRG6CMiP9Bc2TJqZjaC7MZPc6mtSnaGJMahUoNDoR42NvhhJU2hPiBaxtKYAnpcbEyUPpiG6Wrycdk3WvpPB",
  "key8": "5Bouy4rngyU8J4Wt2AuRQFj27bFybRNavq3AhtHaHZGtwRWRNjHyov1nyjA4eoyrNR5wtnfhNRHQNYwi26BHVYSQ",
  "key9": "3uGNoccBvKu8YXNL3V9HSeYoorwd7QmU2RaDoY96PHikmm1AsRBe7YHitiG5qPzvmB9QLTyB4J6LN58oCiEB2RkB",
  "key10": "Q97ekd7KZJUhJLZcR7FWF1YdSK1HRcNPZX1uYUjEqmeNLGZkBEWFPPrdF121stEM5aPdZuzi7GBfo6ACtWuo9AQ",
  "key11": "3CLkhfV4D4iqWf1LecknaTYZ2CKJahu27Dp4CXXrh71RTehyhQCAGc9R8z7Wgbguw8W7quFuYo4zCnSFJ7K741fA",
  "key12": "4iZES32VFP6aeyvhNtWG6WCQE5u6AWMm4RSUavYp3dHeTCEy6hMqvZSLVpjqKB8mxc4TFvMV4DKd35TYjRWAvWuM",
  "key13": "s7temfecEcUs4YBnQspVkq5p4rGH99hEM1rkBjxfVsapwgrvNQu7WjmCJ4WnfeCM99xjCHSVpBTqFbnmurmwgoF",
  "key14": "3pM9BqytVKEWeXhjFawKTnsrtYpjVykEq7mJpyfizgAKsMJPBweUTZ4u9ff2HcbiHKz3orJEAAW9EpbGrKUpaSpy",
  "key15": "3NoTUirKnYneEiPDNF4JW6wRhKiXCHZdPXrDhZq8HvcZmZ9vHqoVeEZsy5t5o1qPBXYkbbA57N5iTaUEgH7mydH7",
  "key16": "uqyME2i9AHCPfppz3exiKyf9WM5zQgfzaQr51cu94jnifXxgpHds2adaMua1GVSB2bYKXfL59Ks3dtrjiZrqFty",
  "key17": "2Ysef3DLqkVTwRUkE3o67Q59qRh5W6i7yvrKDmWSuvGFuu9JmSEkKdYv6kDZMrr58F5yUrHYb6U43w5TTCe3W1qE",
  "key18": "4PFXSZFM7aeg1m1JSnEsAbLEUk3juUgKBuzroUwkjNUG97j2mHJSoSdBAQ8J7Q91SMxw2t5LjGnoSDRnx3kD2oYf",
  "key19": "v2QiUCEpWVww7iGe17RnBjK3PCswq2YHzPdfDcMLU1ZMWttgEdqus7NBCmfY6s4PSiWJTCkbjpzYaYoPAUkwDde",
  "key20": "2TtwqGyntPSYa6Bj8wJo5NCj94eVo7EDkaX2oom6FdU3dZxgxsRurWbzQ9ZWhUuV666beQ42rnP7di6wgJyB1SvF",
  "key21": "3n6moitE29khrvveUXpkFkfcJJBi1Tgrgt6qbZ4wtMZpYSNJZPPNt3GsPrTZnwFZnYDorDsDnSqGFpLGHQK1F7j9",
  "key22": "2Gg4BbLdB4KM6Q1n6tCJ6F51aHRDmbku1W5f457LCrNJPGsLHsUFKrzPVFzuXRtNGTueChsUC2RTr1EeUHhEQZvU",
  "key23": "5yFZojkabdqTgLzUonPMeXEgzfmk9t6QPFA2LuG3Rb4RdfvY9Ca1np2g46yqWbAzZmekTa7aUN8reMKaB7G9uNmV",
  "key24": "2dQBbdrWyjPR3WGfdmzJwNjDf4fhrzoA2qizPi1EohmiC4EBtZAdLN9CFSZ3erkzT24tPXixURWwv8yDMxZ21tKQ",
  "key25": "3FU77AkHVytsmUtmYBcVyn85oqJMwGMeDqo3wsTZoHiktiJTieYrVFaHdzRx3mLgCBJeJpKFhRsk6C1uAgx9vndn",
  "key26": "5Dp6FSxBD1reMrXDTociJtWtgugYdqT3BYabS63PmS7GwUo8FAABSYtMvvNidfsGnhCq2muJiziTUQ2qC2XpWDM1",
  "key27": "38sdoEYvwoXk4hTtG86crS4Qqy9Dn5evHVYrqm51ChBDXZwSq3Lw9xDPDgSEE9a3uej4iSFAK4sTzUrLDMCLKYNs",
  "key28": "3SKf2vPxZWopu2hkmrbZ8Xf2zeSP3W526pChNSirKu1GBz9Xe9wcpjP6X5z7YvY6dh8WT3DXrTLFqoZsQ1cWouRV",
  "key29": "4BBbgof1jgPVcbyujp7jcYL1AVufBMZHy1kQAphtnG2aCDSwomWJZtbCgqtGk6ctktrBmE4fnxQYdzyY7xoWo5rK",
  "key30": "37x3Fwxu5PWYBviUupK6TSfdHcui3hwzW4YNwTgCioToDHPQogaBbzR33pWwaLRXexHR7r7GUwXfYhrycZJedmzo",
  "key31": "3CmvviYDDZWQeccPWBZzzzTFrpAqTSNx1nkvNdSZ3CEiZkK4d67QQsqN1LvUDEEZmfaW9y34WFY8BTATpNHvh3ZP",
  "key32": "32bSqVYAi1UzJgfWVgbpEaUC4YvTHx11QZWuE5eBVGYgwRzLKR717WjZrCKL59wSz9Qrh5FRGiEemEZ3H8GP1epu",
  "key33": "5Fwsrtnj6JvRNGo5uqTXDWTA3WxCrtWaqP4ycZvh5ujze8hkHk8CSs7qT7Ddcexk1FzPUzpR9pL3E5LdLBHWusZ5",
  "key34": "vLCH7sriy1MJbw6S66Ek3dYtvvmX8x5PM5KTfiqCBSS3wrzwbgXuvZ8Xs6n5AAGocqpCzGNYonHf598gQE9bNz1",
  "key35": "3RiK1FhFsqWTJnkoychfnctp9PDh7KPUFxiw2FX9nVmR19HeEh9qNn7oBpKCcd6D4Cg8eaQuCumVf93CP5XCQP4w",
  "key36": "JxWJAuPJmhrvSfnx2WoTqAxnzLSpZ2Sz3xmw1sSECtK72ZAd1jmrfMotMbrwD1C9ETbrqCoWryEtbkuPargVhA9",
  "key37": "bLhp8yErRkYY9VEk12iDfcrAXkuFiscuBVo3WfN9GzWC5Ekapc25HjKUonf6p3imsYPBbqSgctSU6oWTadfXQmr",
  "key38": "3F7WgQ56fdMyYpzUAo7MAMiAE49HRT1fSjbXZefvTYetgyGGhEmndhyx3YfZbqEEQvyqh9iDDTX4QXSRMZ2fozRd",
  "key39": "5Atu2teUY4GcYKQ3WonBaej6BaKJhftsvfY7SWnXsSGt4dYwL2ZmKY6E1WAqZXv8zUhWBAcAGSujry7UUSWvgfsX",
  "key40": "3N2aDWszwmtrBTusrnYA2QkfTSkmaoNdvFxr5NtSyr3Xf4wsB8GzTnNXxMPf55Gm5arCZcwqqYnpg2PsaiVRCUqU",
  "key41": "3pxHnqxRhkRn7SyWDVmZZDhSdrs44iCpD6u7EnAia7xe2yCFagU7ydRmsjwvSsHTXdnxsCaWtHaFZpLuF8r5QnBN",
  "key42": "3qTFDgK9V4bUkpmyWD2CsJfFRT82oipmHn8mHp3HfbFBf2YPjH8NYdVL1DSH2YkoDqbyCjPubcNH8rjndFPMgoqH",
  "key43": "5jFLd8KseVduZoAXhFpFfmSdD7irNaHoJicAkFpqCERx3LuCeJoMBXMC9GzRjeAq7ZJWsVBccCmj5RajrMZBKBbh",
  "key44": "2QNnQnDjMhXk6GYcNpQ884MtEbVoMt9ht8pn1FMyogwtzRRPBhNFZjqKPE5NM5ZX5dgXj4B6gPxMCTuRR8qtjNJv",
  "key45": "2daV1FZz8zCtqEy9uJMJwU3LcLpvzevrVYgYNTqGNGseFg5cMJz8LmQGbwgRx1xDCXBVkVLWDU8PNpDupytmDy7d",
  "key46": "3kNQAZeAiP7JrssX6RmJWJpoWCBJasZcGAMTS9tjCbGjthJHBFzA7uMAk1WmsjMLbYPoJb2nmCcaxim46XY2JR34",
  "key47": "4vte9AowqEUfRteFXDHT77nJ5L4PwvHutLhxegsTETNme4mqvjDP4wXgXfPmJVzQTWcBsKohDmFQgGMU29j1AJe"
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
