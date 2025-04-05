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
    "wNL8UPCfGGaouKSPjMHPhiuqyggt6LcoBcmhYTtvGCkycAxJi2k9ToTpzzZ3j33TCiCUxjDAP9gwvtXi2QPvavi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RjkawetkXpTjjtTDQMUb9jcRGNbjcSJ1GooiP51w7dfKbBBTH5GUHCLgw15oswWYv3NQdQtJFAQNckC2Jn3mJp",
  "key1": "46aaPsACBU4ZqFc4CCoJqk4fMBQbUut8secpBqWQS1cEcdfCEQJtuQ4U9TuHFbcr2CbXWvwm1od6myHaf2MztnqQ",
  "key2": "3tb2U3GrUAruy7JPhvLgr6jZnNuubT9P6iH96gQRuWr3erwTY9d4eBTqBk71qhsmkSNrG9NMMGLzdU7PSd2mmZZW",
  "key3": "4BDyPJdb4TrP4ATZB8ta9TfGY1UeG9Yb6JVN8dbYTs2JtDnjDppwfVMKKCVuMq5jVYdzzSn3JmdWuAs51ax9yEuz",
  "key4": "3spfj2vQQ5XEJZXFtLBrNT9udeJY6tuigh9zMBG2kw6DTze3oudCmXA5VHtJWFBmWUFzBqBFgGyTsX2QoPMsvnTZ",
  "key5": "4PD2u4cqPk7y6wZ4h4A7x7XwxskErBdhG5A5qYga45RGg2aHGBWHyfvACLcH2AZj51Jh75nNB8hf12cxbMG7z4J5",
  "key6": "49ghhbJ4k8oUojjM856mQiQw3FSeTuXwAqb7SdaHfqgYS5X9t9fNiSWCycQwkkDNDwbek8Db5WuoC8bs99xtE4KX",
  "key7": "2niF172DCnGsKv6qD2AaxCqRHs7vzQu4HxSP4fnnAgjXFuPf1mrrupVV6pnc75UMHtDKRfBNt1y7ETSmzzVNhvQv",
  "key8": "GvnzcQ61ThJTbgTLUKQh7G6a2o19Vzie1tSGDopqkhXu8XsX1KWzpnqMhbixzyfeqPuNyaR2QJu2rWDp6TjSJLQ",
  "key9": "UrCaRuXwAUzFEVHZnMCiaBy3vuB3bkzec9DSJq4YMmYYw5C2SZrBVRrCCx42Gp7px3ySt2Yuf5QPchnwGych5yn",
  "key10": "2K5DT4VsC8W1cD2KReVH7pPy9oP4m7Ubp5JzVBoPWMWRtbY1mgU1un9fN7yQHceH3C6SjHwgR9MaNqtZdW9Fpjbg",
  "key11": "TZ6zdRbrF9jCjFimNPcXh2NCoKY75Wb7aMWdQELVBpAaoK9enWKDnJXmqyCR8yGcAv1KfqR8BYXnSEmNnvsJnKg",
  "key12": "3gaf9DtLMNzy3kbNnCKhsswZ3WpePcbAknBhBoW8M2AY9GsynhiYEwp5BGgi6jNoCQAi1XJCYTybaZ5rdMJG2BpM",
  "key13": "4ubRizcVxpcmdLSqDE1WMPFpbk3cLaWhAQLpByiC1qdfC8oMnyNA47MdgjDTe5dkeD5JeF65mYA4zCxdPWWwD7Qw",
  "key14": "4hxZqKdfs6dwnWeQKcL3cpi8FED6TD74KdWcxdmkhsn8p496L1EeJR9jqfPy46rnDU56YMwGiyABcWsAJWiMAzDZ",
  "key15": "3oAPSLr6CjU5r1ok7oZ9PqnvBgLG1QJ4gNyr7T8Wp3vGKMfCWWfDfBCKpBiieDisU8qWqpi7hcoAZr5RmBmwxdvM",
  "key16": "5y42R3SVK3xBt87Jcbzq2Gig7kwfs1GUgt8MCEjPsZfEEfByQGtXJcHmS5Z6tWW28BRc1YTZGUdyXALf7LyDTuAi",
  "key17": "FjYjULdfSBdRzheqL4dXjSXDyGShHF5BncQ5z9oeVKpc9ChbFpe4GVkF92L8MTfntaMpCYUBoUbgg1wkB1cbszi",
  "key18": "3yqKXGoTGKcvsVbCrDCH2nAkot23ZkvbE7gPDgtJCuzEpQZ9oDitEr6UGYcaTijrBGgQMPd4YK2MErToDKgWoaPr",
  "key19": "2ZvPLWG9UJYWsNJCQesJrpUQRGTKDu8FRaxUb4oQg5HYNoFJvYMTuWqyTxx4tgs8RetEwQRU8Jy8qAHbZPiH1NVf",
  "key20": "5hr3bLjEtbrQRHSwXrpBYe8YGzsxqUMGT1HyY1opfDHFv6JExe638aU95PYpLN81ybPeC69v8sVMZXKs4V1WtrK3",
  "key21": "5pyht1DyqTCuHAjqgyJWpcDFh6QpJKs1zMuf27rDicVhLXWX5zMh1oUBVozYwyWZgwdZeVoxaprfQtXjzHcvZYaK",
  "key22": "59UMJjLspzezzgUUAAFhfh53Uag9nVLx1Up4MTQvzsvumTgj7w7hMDJGXknZUFwbgRAMRSo8s8UVei84X3F13LsE",
  "key23": "574QNdB9a9pUVQLcpHhcG5dYJFajuUHnYZ6f6gKuiL3DgBmJiPyytpzgZNmG68Nt2jwGo3UXaWh8eb7NQ3u8MpMt",
  "key24": "4R5Y7mTjvqUEbFXNZL4DTch7cZfpPW7YAYMsjNL5VFMusN1MLtVUfhhfK4LKQ2v4PWixFZwJiTgQcG7kMnoQrD4m"
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
