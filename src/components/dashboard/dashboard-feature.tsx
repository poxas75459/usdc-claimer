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
    "2ArXCggzFYQPaF2m59ZLd4QchpvGroTstTAmMs3ztDopQnESRZ9JTMSCG5yun7ZoBnUK24fRiZnAY65JFE95n4mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oRiyXRaAh5X8GzX41fQB2S6FGtGHgQojM21WLcoTvX3NubayzUXXdBfZREBjBAUbbJbhq1WfeYXzVNvzfhDadSL",
  "key1": "2fUh6W9xgTKZz58dJDS1PmSZbdBcZUv24tNvohLeVgr5d3HV63hQfHP4VJzzQFJUB3zDUJK8DKtqXL7CEE4tS1PG",
  "key2": "ZdSRvi8ghx5oGf68QwS6i8a39HFTzKBL9Eoepha2ZL8ArJWkPenVZNSd6XpcAmfu3Rh6WTdDc9LdQNGBDHauY8G",
  "key3": "5x3hCvXkhck2peRq8yGnP3UhDXRd19SXuhCTkpdvQzQU8jqFugcRgjxaz8LFX6bAtmNb258TH4YBRmD2XAULSXGz",
  "key4": "3qz4jYpo54PfKWBipp7XyX7QyGjdzpd4w4PejSB78Lu9QgD4QgJVUMmqRciwdyX8cHGXxNZ63bfU5jHLcJTXZiq8",
  "key5": "2twuWfjA8ve5C92ptf7cKk3VbWqTpsm2RVGScJBztD5Zfeptbkv5azR3exnd6TtGPeKdJvkU7hdrcry1xtZPoFuL",
  "key6": "42k6sGUVfNpGNFQYXvvX7aPSa753nsGA7JNmfFhQHPhJyB9QbAvT7oj8ixdGfcxQAYTkLSirXytgLSxa7VwE4LfC",
  "key7": "2H4vzmx53dNLwFbYfPrxK5txg2V3ZCdxG8LvqDk46Scitt7C2q586A7T2ow1ChvWpmUxgu948tPLRCCSuPUFTzpQ",
  "key8": "3hvjSe5Jd6kvyFVFEepquyh5rW1N4bXfPqmiPc9UwxLfxVDdwv9fjErDL9nfoCPHnrjW83AoyQ2Lm6yfeWX6sUs4",
  "key9": "3XTjbhV7xLdZsYDwrpeDxii4f1bBQnSHXaHW5mjbSfGqmnXYeTS3R7WVFJ9YcdFe3XS6zX59VUJqMdwZWaz7HKY9",
  "key10": "4HXpiWaq5AGSnu4gFAujwHg78K1frbNwhx4Ao15MdmNjohtAezCEPWDiNeu5WVwQxFkVBRy2Br4pgqf5LtWkCUPv",
  "key11": "4a4uJYYVYxricbJa3G1U69WLLC4dHGW5BfsADySCa3TnwvFPg2p2rziY6DQyupF22qTBbFpFD38gSDe66QuPhS2i",
  "key12": "46Ehz8fWfaZAcWMitrzhAFkqHbY41Tu2HbpDREKunY1qXbJAxz2VG5jequiKwbia2mAzKudk14ez2uSTvnh7GVsP",
  "key13": "5sCCL69e58jAi7gkaJdWVAzEWdDpcnK5qPGSAeaHvqf97xWYRKPbgCswN92tdLhK4AGL4BbskXV8HJXBD6Qzoxwc",
  "key14": "thAsqpm9bHs9bVoNMexFXVbxB1ykMzTANaDqvoTwbwELApyug9bA62BoWqk7Uh2pmsMqZRrERD6DYWuj7o3xzMZ",
  "key15": "4uWCAoTzjKpzKgs44Hm3f2SFbQ2yMEqR6UmFWkqFAQDB6baF7ZtP22GLYNxA9PRuFfiXFb5qwAAyBXAtuCbaBz7b",
  "key16": "3LHWc7oqHMKTRjcU5CtijK8imjwEQPo4yAimdhq5BZPeUk9RHFJv8WwsGZ2uu3E8EswgFKHhecUuptTqbYAxDWMx",
  "key17": "uDnwCc1h6LDCsibBDsB9ZohpXYxkjPnJXvdQSCr46RYesnvTozaG9gnJ9JCGacy8L96L4XnULbziCeavUCZi1Vd",
  "key18": "4CMr379hkJqrnAqRbirA1PHvMgNJTDuEyAiqQEskubSgEEXCG8CNAj6RUfZM3SyjBtyAFuKH6PHGsqEGWwxPghY4",
  "key19": "4W18XKu7GGSsLRkpHD5Sev9x8MV2fLxTYTSCmgQy9TEVPFHjjswUXztUyVCpKTrsa3Phs9bGMtx4MeAEsCmdaygu",
  "key20": "2yGGtzSfVg3dBnVpRSU2uQE2eydXCJAhc9KoWPQnuEmBDxoDB33tNvzV2xb4eZ82sCytR7aoQ5KiM6dcLJdDaEk5",
  "key21": "4C2153nYmEo6BLLmnzeaFJsoy56MhCTfgn9PksPDVsEgNsCN8CFRNXCpHkQDACN9UfZNT6LyGUV9vk2Arpwz76fp",
  "key22": "2wdHWu224hiKFBGerqowEfQkDtfp76Ccmw1tSGyuZv2e35GM24Sjkg2XE7MawD21wgG4DWvKceMsKByypGggV1Q1",
  "key23": "3cQkWUp5xdwGjadRNY8rWMeXRCph5zh4mmb8cNcU9Pp1AqnzvoUgtxsb9tKyQyLG18NgvKSsJidK2VgJbVLCwDD2",
  "key24": "5BLFeQrWxL8sPNp4MTHuoCve7tpvtFd91EAifnnRVsdJRDEJ5jEXodtCnmWuKrmrLq38btAEqj6WuMKUskM1kv5c",
  "key25": "3spmwd62nrCbmmGyY4aJTFT6FnaAt7bqwZnLMNEp8ns9RkTf5pvhhYhnTfDepkZefegWVxQtC2SmVkZKh3VLHx4H",
  "key26": "aaA83kPbG3Xvz8Sfd2fN4ihJq9v5ZAHMLyK7G7vRT9RRJP4FsK6qKWqsJ1Gj5eiky9nAf52SB6yCetgFrL7iKrf",
  "key27": "3EV2Ay91UQ41TFnBGWv6Cty1uwo47Q5JGjKx94WdT82d83GDJf7rVWn1AXo1LVUpfAo7oEfdg3CpuwEzucMhkGsw",
  "key28": "46YG9sm64ZeBcVua8B3FbZishqsdGeg6uAVWXwZEmaRXnXAgggjzze5Pemt2EP5yx4KxaYZu52N5YTxdbHZMrf1K",
  "key29": "48xUWfbUCvc82GNDmCsKkVxUFbv3rySddrfKBCho2yQqdDUxFcAawodQ149udpYcqyLXgNg2LaRhWWdGpFkqrXkU",
  "key30": "5TzHYfsEfsQFndVoTb8Tv86KM9uQi9aHwGjQMxPJtMqxzuyXoUbd14dWJUeC61PoYRJq4qU2f4Sy3FdL6yNxSg6u",
  "key31": "4wim9r7A9jrVrLQ9TqSz52mJWCXujaihcbmoNs5HXTDsdRYzMKu5UmWapWLHy31fC3e1FSn7kDgAzoGBUvqiUB6H",
  "key32": "B3fgDxNJaMRVnYoWKg89Z2EPBuGT6rCwGpxAjJ8MRchhFp5qNfkFghbn328fzoyRULodubyedYSm3mnqDqz88kE",
  "key33": "557HdY6hgRzaZPETgR4qtWoenvQq66me495cgy4AzER14gfVGLR7JS3WTNNHyVrMHnfgpLun8D61zwUrLv7AbkGC",
  "key34": "44UWbTWmavRUbYGjCae2GygqJfmPZBUEjYyBmdxBbmWKe4XLZ4cCrzNvkaW16Ux7NTak6oaYXc6wiG9tSsGRUQm8",
  "key35": "5wQRYbaiFVmaHxd2PfgEJGFtvDcBmHetGeTuuAhcgc1PaAUNkbHE516NkXS3fDxpfr621rfn34oqf3b7yxxKdYGX",
  "key36": "4n64AWwj2RvtGCf7V7rPy2dmLEYDAVrn4U6qHhVzakhLprjk366u4u2ZBH6dfpNYs6xYHnQVuEZF3PwzdvJnFVEo",
  "key37": "3m77oBiz9QfzYUVfsxiALy9UowKTJ64zE8BPktnAoSLFcSYUSh5dfHUgnF1EN5grcJhs86okYpfdRAykDkrFjuLG",
  "key38": "qTZAMuQRvGjFLHxEWwvJLSBpyF8ncMsih8GKQRhLeAkwpRVbrYJzH7JTuwoCdY5D2GVwcwd8536P51DBQhkKDjB",
  "key39": "nSFCikeyzkPVAE4fbGxg9mPeqg36bbLUWUjnYKneKBKrMJmmHD7MQxfb7hhZbsFFU9HPhS95QQirV4Y2F2h3X5a"
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
