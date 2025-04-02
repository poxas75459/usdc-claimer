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
    "5MFm6Be2A6eezrfGHjDAgb7XrWkXR5mmu1KuYorR9XcqbBNeY4nzCg5Q89kThooa476V7uoefstZ6DGBPfjVWFsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWx89931a8JZMCSEpjYnfakPQKSPWCNmyGMwHk4NUUKF92ii8mGsVjap1jVptsQHTGFE3cgiwYAzvqvjSb5SgkG",
  "key1": "QJDmbtcgB3WMmuSiRbxgPntBkco98xeko59TBQTU8ioP1DGQV7xe9vb56Q6MwZfLeh8ZRpDC85pNYpgA81TWc36",
  "key2": "63vE7SGoFckfDxjSwgT5gzWgPyGxEX3BMFJ5r1LU7JSXTgnmyUY8neWwu8qdBe9UKKs5tTFZi2ABF21xmTK9i8Ha",
  "key3": "48KxX9A5JeQqmgrwUHcGJXVEYb3Tv4mu7RfYqS154AFPKBVXNTW6DpXauxYyMDbnBbjVQosqLVBPTD7uUbXLFDX3",
  "key4": "48DySssgLMBZfZcDXUzCbLxu2XRYqrq8Q5RsYSqknuneSsH1zPNP8LDvHg21XE8zcGDWW3CQHrbvQHDgbghpmuW3",
  "key5": "5w6LmAzWpCDg9XyNG2CNEVkCuzybsELhHv7taEhtKFCdFGt5K7JDVK1z561887bgEteofeHGMJ7jqEZB2WLAHkzS",
  "key6": "3kHHGmGjdxwDndcrS676nagMHmdT132hV2mdwTekus22Gx1Xvt7hSDjRLzUDXPBDNARSJGkmqXXyY5xbzQHwYgC5",
  "key7": "5VZ1YBwJmEeprGsGou6aE8axdtcCQwypqKNmtyzZt4FPLGr6MyRqoBMLJ3ejBCpUz4MjHpBdEd7NWpDsJfXJPtY",
  "key8": "4m34259CNQcuU5pkeqQC8tjvFZS6mArjnLpqaMPtS7f25Gwo1yqoCXcuimkRvYzQ1UkWscPMoM4cx2FNf9sCGH65",
  "key9": "4Gv2PMB3kcMvDjoCdMSEnvNEAsbYXqXPT2r4bsPwANgb77M77SxaMzsvjJj22rxiJTkhFgpc63F6jFxWENUxtnaD",
  "key10": "t25SAyQm7pFxLo6SyG4uvC9QidMkKiHzp5tNy3e2zi2jTyDd8DvwPYs2gL7TPdcRVvvamzHANv7sZhMuTcZoCfT",
  "key11": "7Y5JnqGc62t6yB7Mf8KanV1awrKHwr4Jz8xK7a3TfYRbMiJgEKHDQz5ipYoEPPZ6ofbPLLEWkRMrcasGa257MKD",
  "key12": "3GZBUSSkHbMNZfR6ccj5BTtRA5oYjdrDfgMoh9maMqqyL32EWqydFBAC5i4dmAYfCCzSWNiRgJAkG3iaoGz8e4BX",
  "key13": "4RQxBiZiZJ1jhQv74vdk59Pn1kh32k13CDr8ms3Vzzp7Dgbn2tfgnstzmH1pftiGP24JP8mUbqDfoTH7pjtjDten",
  "key14": "x4vstftkvSD5yqkb8hBKwUyxubgv7zGTpMixCMyGUHJ1R51mgHGATciFEn814WQ6cKC91mp9VaT1USakZ71GRu6",
  "key15": "4uHx9hUYwhauKbvSJYqFrRFCSaqm66qE4Ekx7GnKAjkBen7w4xSpnZgTQwVW96h8puTFBmEY9FgT6yNczpjkW2xo",
  "key16": "4hxrivRu8DuwWdYk4N5chX3BU6MrSDb5igYqWS2x3y331Uhd68wRH6BdL3g9GB1WCcSnZBgFAUcS5oofmUP8quWi",
  "key17": "FeoXbdv3fqufo2pgwxBDnYWnB5t7FjNrLEnR21C5V3g62cnUzqNPwQ1U1emDEb3rJHNWQpGbJn2FbmrnkgYg6Gv",
  "key18": "SjxULaNGhH1JW48yup9zQLpEYa7p3Y41j5BoQBEBq6BVXBx5GYTN4qr4EvsRm7yPoSywmqVCqLQR35g6bmCW8TE",
  "key19": "57kjMUvzCo8onYYVSHTwB6QeCfiFANyZHz2eqYa6Vz9z2fHbAjFdCHLSk7TEtrBbgyE7hd3Swu12tgrcRkDSt3Fq",
  "key20": "3VCDRDwnEQHAhv3tvv4VpbZAeS9oSX3EAFZaGDEqinSVhFgG73xqGQcxmkd1n3oWRLmPe4L2Dj7mry9Wpy3GYN6X",
  "key21": "d4yTidGLhC4w7p8GhghZePqpkgjbQKAzra8zLWPkPi5A3gs9LcHVUjRxWMXAR5HXweC5dBu29anooEqBpRwFcgv",
  "key22": "LkiAZaWMv8UWqq6Gdwf2jrBTVhFSdkGpSHgzRDTcqs6mrtyV2Y52ieiVxkMpXxXX9v9KZ88UaGEHSdKQH3DCWXP",
  "key23": "uGQBdtJrXavYCKB1yFZHsyQHJKCmshW1uyfopT8fyPP4FSuNDwUQj6fk2pXHW7QjdAWsfA4r63jH5sWnXwexnmj",
  "key24": "5PuAFTLq21eLPcULV51LURv67DHfEQcGwyG5ntgYUz5pn4GRxyMUoVPSwfhe74PHvsURWXXBcHF42PJCm3LdrzBk",
  "key25": "3Eo5wp7BLGBaidfdZccauyEhP8ibuBtJ5UUeje29S2bSfK2bfoVXMbjzcEHQZDoauVDs6MKKwhQYB4QcQeQ4nduV",
  "key26": "5LnqDNAaCCtsmvtEyAhwJXCv46fNaoqXPaaf8f6QinWUh3rQxNpr6XLQWXydn2296rJQYG1mG7ZzgkT9x8uU4e26",
  "key27": "43ojQ5DQBpcvKBNGqRdq51TYWTLoufqqyntx3C6Fs6VLZGfWhKi6cQu3nFgjK2i9t3pVfK2vbp9YR2ZB1ABXwKff",
  "key28": "5FhhtuAoduwBVFCxT4akoTKaPVqeFd5tNsozeJTH5RBfru4mk868KrdYekcJ7HBz9muL8u9s6KKwDfvbuVYdTDES",
  "key29": "5aJ41eGYsD1d2nonwmaTyjprYQBNmyZjnYTsvpPnhBMRSPZUT69j88vPFpV8AJbQ745Ho4HZuHEbbWbGVAJQ7FMs",
  "key30": "3UpskZNkpQjaviBzUqeNqcggw7HQznPtuGF52VweXGiyPFm41JoUmFXgVo65rZjd88GMkJkiR9r35NW1rqTC6JbC",
  "key31": "wLNaR9BXDUrnmhRPNAWw4YbTt4ZCcRD51CQbEke5D4JU4bgP4h3bqSRqJSwvEUV8ATHrwBs9WGX1Tgn4edbL3Hf",
  "key32": "5zJCQ2aMTX2ArG4mep9nsccj61UPVbmNKZ5VJLympdHJ63AiGkz3S3ujESqJubEu6uPoE1RfjTd3wE2BnU3FTEte",
  "key33": "3U2KSKB6FtZ8xxBJSkjTBHRce8SGJfbou478dG1DT1yiDb7j4FdfrAcqQKsQeUpP8PWWAtMpRjGnb4omFW9whCcQ",
  "key34": "3WuyEbydPySBaG73V3NhcxBpyKf2mxWhzbG43XaY3YXyK6PomWWDD8A4LNQs6Tfdjm8UtCcouAFLu12P94WMtwkp",
  "key35": "4wqHEdHZ7GRaNYcj3g9pAXTJLhUqwcWpZ6hFyUvEWCdd5fHVvjjXK5a7TAZ6PD3zkvXMAAVYSNF24oRYxQtjoQ9B",
  "key36": "detkUVU9UqmivwgbA6NrgMbeSxc5RA5VsbCqtiaVWPxJPNFH7GMNnGKKMQczUV2W7Js2cHvtNadJFKnPJgekbQi"
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
