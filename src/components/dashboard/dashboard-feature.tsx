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
    "boyJ6BGLqkGCo1uAJVVYiGMdWh6z1SytSdXfkiKiDkrF6LABdFKVb5ST4mk2TfNf75csspKxzTD3eoebmCmYWQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBRbw3B2We73Lwj15hFc9SYG5icw9YepYNn87VQbBFfHMfcieVKrGqEWuAG2f2RUT7F6m8sw5gSNkQRtBN34dkA",
  "key1": "3Zf8fwB6CFjsKpeRhuLSExqcEV9x9Pdb5QKnSiyMvqiLu3rCiaAvmdqZM9MxogNSCrkbdijsepEZCZ2RVseNEvp4",
  "key2": "32dYUAMP9ynNMSXVJitH83R2zwZXKN91QgjfFZwrtHJhEWYapCimyemRC181AEduwBDcEeasZG5Gq1EUbsXSdsxC",
  "key3": "5F2siEGfgWQtVbhaYWGJVdtL4FmZujy3P94wQtE3GFaLEdY7DP6E8KawsKonC7vpTGF3sLK8z5XeYYWsAeqJyBe5",
  "key4": "5Hix5JpsYJ6n8nMANYoa5s9UqhJhpVfcG4buzxApakaYAiMFKMfjbYDTyFFQwBSwc97ocVX3xrR7Hs7HWukmzAzy",
  "key5": "5RyYZ3Y7AJaMtMEzW27aQ9ukLTVFijbGzY29N7dVVaGgyBuSrjc6wW9U79vRF8ydRMA3cgRcPV3AhnB5YnvArMVM",
  "key6": "3G3FLpuYNQt3oKZATzj96Uwh328eQ63YHoJYfTGy7pewiFuTSZqbqQvSQY8aJpurpNNf4g4XFAMrZfLN7zEZZiBT",
  "key7": "vbSvcDwnfuTpzjYCVzEwHwF1XLjrQyuPMEsA3rC7owMVSnbRfpYCH51r2Vz6CY7MtdkkQeMcxWNHReqNSkC3vc4",
  "key8": "mnHFxMG8wCdhiwvTTieoW3csE4c9hpNskbDTtYb5pgLjgrnubxaSB5Ejzmw4sP5Z5aiQBBtFgkahGwxW1QEYjTf",
  "key9": "soEFdmMipzhP2KCiVxvYd7R9c9RZv2U7MFCxS26BPbK4FFHaX3W7mcQUwFGX9sureoGTrCYep98MnPX4xsEKYBx",
  "key10": "38GENA68YGQVCs4YQBiTcYXTjqis9wxknbxunsLJbo7auzDpQmnbpAQy4XD3wVMUHtVtqvieMZNdSuTiWWqygUEY",
  "key11": "4LDDVAtWoPbxVPBmpbepRWZW9XHwCuu8ZHjR69AfZrNRZae59RLXEq2dEm5HJnbMZW48AVjibd3Xitv7J41KgcQM",
  "key12": "2jGQ3BjbGHuugGjXjzW1Tr18xD1U4q7zjogdZAf48dv6H7i6BK7ZhRxm7hqHfmJMb4aum6aNoyFY2FSiYQfPUKsT",
  "key13": "JqgTeXgF9FD9Ma9JonC1sYhei8MN7GGdrvZgn53CxDHQ5cR535RGSFx93Zhbe4vZDAidWmbSV3wBeima9RNTsk7",
  "key14": "23RuRTMPahnouGKpXngeaP6HiRn9W9XoKq4wKak7Q6cj7YX2MrF6WFR7VLKdQhHmhA43x2pxDHbMjfYMnzo922xa",
  "key15": "5XsWSYouHuNzamqh6AjVqMWhDZPm8zk28UoyAVgJ9S4NXAbifn76SwPZ2XtSMTcbbjjcaL2EuLkV4ZprwHa8emjp",
  "key16": "4pGizEmjtKyaZT2w9rYCrktyiLvKnJD8T9zEkSfdqVhKQ1rotk57P5armLzLSo9Ax3TMsKvXnFYiWVtV2uZYvbfJ",
  "key17": "PHcGza3YUGTUrc29fXMwA6cG1hdRkbEaJRFHDwCbgjPb6wguKbGY9DJBNefc2ynyCFqyBAQxwWYg22ha1foeCwC",
  "key18": "5WJRfYz7F83WGi7bYC2pwbXzW7gTC7FatsW5x5xcHnGNA4JmDKWuZXRjmVu7AJDnmgj11YMDd9apDLUdbQvgBpUF",
  "key19": "559MXS4yCoy9YPjqLSJ5sQPPkXCgHjBeDa83VzXeweVGj7P1oHJb7NenQN38RZrmurS3wn4eLtwKL6KBvLavi9Vb",
  "key20": "4MRe9kXsGD8WozC7GKbEtZv1NtTMgAx6UYXHFfv8SB3FqWbBsdWTBWiGfmMMpAvqpdDwar5TXmNsQTpuZLVQCsPq",
  "key21": "36XUsbNzAhcgRfaZZj4LY732CPh1FM7SRyJQeaoAkN12RXb6MGapqEvN4KT7Rrz8MLbjVPSaRm54A9Q7KWWpRfPu",
  "key22": "2EzTPqb8iHk1XgRWqa53HNmaRG9yooMbGGPHkYPCx1QA6gz8FLdHLRZRiZRYhX8YdebbiuChEhCa7dRR75zjQ2b",
  "key23": "5uDHYWKnxf2n9JTv3acLSEAxttMnzUYfNBpKgJK9uKHT9iQPvRGxU6zHiau7z3E12JTbVSbJwvSF9FD6NYYTAHfW",
  "key24": "5YHPzCMUAnsX5DfGekkBnp7PdRPGAHE61wx22M9cetMFV61KpkspqjuEFqXNYVXXtCdNJKJBw3Evanwp57UqgHZb",
  "key25": "SMrUTn9Wf6za6MCB2VegcbGCrvqpL4q2bbJZcTcG4a8pLEVbG6UVQ5mAvQBtmHyEpUYyiJ2md9UES1oQhuAUr5X",
  "key26": "ykiW5uuYnbtRq9xpyiW3FXQuuK4ZunzWrreobvKRMgFxkHKXaBNMAZmJ9CWDBqLEoZE9taecFnN3FmMZ4qRQLSw",
  "key27": "rm4UQWEqYuAB2pZtwhZobEHieF55ZHWPJtDY7DzyZge4okMZdy7GvuazczxZ4uFTZTTQC7pp3VENYY3tZHxDVBv",
  "key28": "4F3Ck1JK1jxiTxcw5LoZyKhNWDoUFGVxb6ivH9wggwyezuV4tTvQ9YkK1f299EhvJiuBdFagNcJmC2xqHrGpeR83",
  "key29": "2heqGpczVhsE4SCRePe2MJz6HPcs3N8Nmg6SDhKxnQqdd5N4C9BdBBr7crqSZvpJc9YvTAnbcrhh1VyVQJ5YTha3",
  "key30": "4KoDoYMjBz2X4um5N8kXryghwCq2fiizjU1n3m2TSfMaUHtmk2HcDduXeSBtVSTgHGeZS1R8oAWg1bVJFyEiBiqG"
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
