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
    "5gJu3FV17DmK9ExXy2oNkHgEgWaBMvwF1nHwvVA22Dt7K2zNSiPieUUTu6APH3XmWA8DKxqnM99QFKVhFwcEG8bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWtjujPgWwugKrZcRe3A7WRsYhXrUR19tQBuEouMkSwhaZTEb7YbB6rdjkgLT1jDntYdNqpQCQCPFd3uRoh9tdo",
  "key1": "2nZoYrhweU6a9cRv5ouuQC4ZU1Bf5KTHR9LBN4bhywsYT7CXe2Vi646gCo5G5v87Ny7rqYmbJpt81DnLtb4ykJTU",
  "key2": "36ksndSfYAYF5W8cfUCu7hh7jUmHPTMQA7GfqFbcgQdWACp7P2UNicCprYFzosRUatimDBwf3PfwdEYAqqHUNfLh",
  "key3": "2ue2cA7QExKuyxdwroV3mT2qpDutEDfAVsiYX5oUkC8KSTUuQuPidH5ogswQYP5g6A2hnvi3NK5D6ckUFR61sPYP",
  "key4": "3fnVxEpvFmTo9naKgc2GbH9t5LPgHDCMyZ3k7Rp1K7jxV6Fwn9bKdx1dksqZL1umfzmRgWm9M2jJripZbyziPGCK",
  "key5": "3ZvcYjabinBWS9P6mv9S5JdN1gs3zZE7dxxdNd8iTSrRhngoPWfSVpFqBiLSJkov6fYYPqiucCmXUBRrU8UdHSKN",
  "key6": "gRUMd2PWogvaKFd7b4vKKPkRoqDpZYhjvoURdhbcvBSu7kuBuSN3MxGcLFjDqEsTaM2xntvqDr2yWHfEWjNKTdF",
  "key7": "5VYxh4YF4fYTdkYxGpLnVgs1DHLTA4BZYX9G3gACHwGScWrHRsm6Xn6axKQFYMi5Nu8nJwVanQRL9QNcBahqMWyM",
  "key8": "cgwWmgrnxQQw5nW7rSy3J6FSNzqeBJwJMZXKh7w789XJj5GkY6gqANmptdbpcyjHRRcknshR4nST7w8oB9KUi2D",
  "key9": "3EDbBRjWJ1GsT6NUXK8CsD8mVqEpFeLeKoEQYFdyNWfrwrM8PcH8wEVXFw7enacHUpzo5EaPujXGrrsHtvjRP55i",
  "key10": "AvUk5F142rHdq3GCPz9p7UB8GRwrseeRNML3BnsAKRYjvDkRroEAnFyj5xm9AmiYZezN3MsxJape2kURNTT8pjZ",
  "key11": "FzgEqmhzqVBrkdPadxuiSyp1o8TXgp9T71ag5a6ruMSp8X71dctePQRKPxtTpv53tgXmJtQo6yUkR9XAkoG7QNN",
  "key12": "5q9r91mh6rX7QCsUfxWEvSbRHtKiGBXrXNRbgRLEDKyvm2abSCXFhJHcgseqr11DoGxvrwddy3Ze7knL2LSbZgV",
  "key13": "5h1MGyKGeoYvRRc6XmF9qeetF3ai6hqw3mjf5NJqGPjbMDizfhFKXNrtzC1TPfRLGzvdkEXcpQ3kbjgN9be363bR",
  "key14": "3YTtcSvV2MpHa8GSbrsHoHft3EmNtKCW7Crh1sxbG2RXXYAyHGEAxQmAzyGFv9M8Hk7FARVnPG8WhGyYWHQQ2WiF",
  "key15": "2cFTc19LZMpaJ3SCFufvCk9rKdqUJbxTEMKTrtjS5ob8T4WPHa9kjXu2po65L1PWYskZhhgjcSXmCKn1VG7GsyAJ",
  "key16": "3i9K3fAEqb8gF6xV6PKGNZFxfvLnD1DfyJc1igmKbiqa6QfyPrzLnH9VyGsVvE27MtyzSWns8QwGf7JbKA3WtUSM",
  "key17": "2DLDMs5BAy3B9CXNEbU1SLvoA38C221ezfRffwavSiTqtqEzvWfDdzkYCLXyTGsb8e2PDQZtcqyrJZGhgPn9Gm9V",
  "key18": "4eNKScormRFuQfEizVqyRBDuAM6R8zki6jYuF2uheLxnPG4jCHAw4q3LfRRwmJCLLyxPb6FsPXFrKXug6cwirf2E",
  "key19": "4aA2ym8FPDmn7CetkxvRW3FjHY2L56r9UHscoAQbrcsWkQ2iGj1KhzvzLaVbG86YdjrLUnuF5TxkkzAyQ1WdZNDH",
  "key20": "5VhGDiAKq8mquR9RnZ2M4uLoRWFDVwSuxqJqpPu2nHaaxdUF8vrfvoCkMyAeuBTWbHLpj1kQAxCzDyF6wHhqMchi",
  "key21": "2DAw3ghu2RecSC7okpM2GZHsHd4MGeNsESLPnShqrxUXPAq8oCaj29rp68bVjL9X72Fzk8UewHgoVzwaTaFPNVQU",
  "key22": "3HHx99YtmnW9YA5ysnmJYVtj5Eejno2VR6iqU1jSdpDJKj6cZMjq1GYjEsUBJVthwtvivCtY1fgfp3GUB2wGKgBC",
  "key23": "5iJ4KrfL2xoy4WU7cCFCkybxKDKMHhNKyops2NxDPR8zeSrjeMF1wed3osYZ2DfNPgecx5xfZb8hiNQ1Tci9wkDL",
  "key24": "92w8ZGXm6P4wmTCT9N3niHtxHjfraQS35XhAC9WdoqjBSqLyVMCCGAJynAQvvMTiYq8at7CneXpT942gLq1yRs7",
  "key25": "4WWnicK83C2SdoeEWe9qe7BapfkG8Lebq9bpPPEPMqheQDyEkj7KxNXaKibncESa9cgioPeUydVrwjPcJgq2axq3",
  "key26": "m8nN1g5U4d8WiPEjQtGWHYaYirXyCeiVzuHXGqaai7NuJzWKWJz4tNyXoERyTq87y6cEXEfu3ZYwDQDzKBHWqPU"
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
