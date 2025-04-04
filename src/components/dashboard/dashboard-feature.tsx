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
    "55E7zXrwLhTCMjE3pRNgd8QXVUBmakkjTMUVoVFBRis7DRHDUZRKz3scVTZnREqpirL4qc8MVoEsoR8wCQY4gZiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45cy3s2ZBrn733T86b2EsRPonppWogkFEPZti7Efn9UWh7BX8fqNDM85N14GDJVz7fqJS7W29L5kmoheM3BACSR5",
  "key1": "3NNwAHqEYSqfTndakGzbnub2Ldu6Fjd9QZtSaGDwR4D96Nor2Dc5w5KS4hVjxwH6TvZLttb6AcQYDbGjFdeV9sU4",
  "key2": "2W8qhGeUNoQjM57KAqpwn4SNP6FUuQzVuRtnLjBG2kP1BwXrzdzzye7mt5RAB825Ruh5SYSXrAz2WgWvGofLMBWM",
  "key3": "2Y2VMBBYEyAkCQdPAZBnWYKMHB1fNpEpAaPHRZSxp44cbzrwnagCMXSLjg5SUbrX4vkwBgYzDjuKcxD2CyR3vha4",
  "key4": "58vhTzthRwXz5enfLZkWiSgiSFGhDwsvXXraeYvWCBRFGaoWN6aAAjPnyUiSdRs5Fbt8uLGQoUyAV7Vm2U3aRR1y",
  "key5": "63mXY4DsDaEbcsGJRfZ4ukR41jbMHsCHRNPUpCix3RDGjj7NnU1sDYifr1DeQvDRtWxz7PACSbm7XEbg8p94MoWK",
  "key6": "2sUH1XDBp5UjBjzyDHiNHFuzYgmk2ui1ARqmqc8XQsLPCeBqmmZwtUfZ5hCtf5gLzWcFdKWsfdpzALNZR53vQWn",
  "key7": "5kvb9FK53ckfVyPDdoXosPNiEgzohruciJALEYyGTz2oMirANt6hi6zqPcDFAskuVpcfDtj6Hd1ygWssgoMkgCVz",
  "key8": "4hiTR45QLjZFVfk3z3h2hJ1G1MEBhGZdgr3SJ5MMcy4oWQ5nWhBaEPnodYJB4ZfLni2E99YHCcujng3YUKdTxVRa",
  "key9": "2GuME9MN8LnERvtLUBbJXr77rtmuH7xRjnzqiCwwdT3U4FCAUrNQtbvooy7Px4TVrGTWvgV1Gx13rgwwWSyRaQWf",
  "key10": "4ZnCX7c6mtDoTBFBJT2Tnh5V6cAofRUSff27uMtLKQHXqp8WuqLP23ecxhya779CRoMYkPWGqvSszAkVjqoYidtX",
  "key11": "5cyhA7Zf73KKZfVX3NhWgdqKkCVim4yYMvfJdL4AqaqLTH2mcCejeSiAV5SgXXZiSk765dDQvJ5ANHn1KWw7nLiU",
  "key12": "548o5N8FVvNkKPYnvih4Mk4jNpTsCvZeutXRFqWuNNWcF22YxbwcCAXCvXBJYUSJS9nB9dw9rQvYDwDijP4rLEu4",
  "key13": "5KHTAuJ14woZDL5A5deuZfLUuWqpn8JwWhFQoosiVPuJSqD3juUJzZ57MxLqgV56Eo14ydBUA6ixBW15qpGA2LHB",
  "key14": "4Af257mMjw1d5RTK7DXCSzsMJfXmpQ7nrtf5z6PJiUorXJKJHWmKTrg3AUGmaBS5cSnawvWN68v6ZF8y96hqEkJF",
  "key15": "5Bontrk5xB3ps9czKYtQEndmHkbKi37ZCGnG8DxmMynifvbt5rLquw637DevRkUQvAz6QhXmv9gS22Jw2gdNEYck",
  "key16": "4Qyk3aEZu1b7AwRJWCtqzM5APppk8H86tvuSzKnDpK3RfDFcM8zpCpXmAhGy3d6bzuAeC9bpTV5SDgiitpEJHtP9",
  "key17": "4SmkoqJG6rZfpjCCKQKyS49HAud24ZS3wxXvT3gc4rjiemyfAAiP9T8Wbs2ypjan7sRudkFi3rhBpQb4jEoMX6BH",
  "key18": "w8YgJTEvykFFttLaXrLLnCLKr6gKmykgkgJhgJT6o4CKFDeUvG6GZG4aFqpRyXxgT8TYoZFtn8LkjasTET5Ej9A",
  "key19": "5TyReKkRMjYwLdy3emH6D2YkK7khq9ZRzhGBKX1H9NFgX4P1yCPpuPFHM6YG8LDwNqWrg92cYQW6jPN8tiowrGUr",
  "key20": "5rYnnU5qAB43RGm2GuLkgDC4Sj2nk9sWieZGoiiBA82nZysyzjRX8VGZbqX9EYg2sY3rwQD7wk2KqBMctvjmC3wi",
  "key21": "5KtWnvdTdy9rYwxjJxJtpb5T9pyJy6AMooKvrJcs5FjGyBHfaaK2aAYqnyiPLXjEUYVuBK5zLv1HWVVFDB55WYdr",
  "key22": "TmLVhr3iTUN7prgkKCUPv3t5aikZyhhQMAQhh2Rj3yGjb3AyDkxCpdScrwHCjCzPBjvUmRvN1bR9WMV6tJhPqGF",
  "key23": "4ZfcxgEA1YtHJYT6HkHfp3iGDqUxi8XnhdpcdXetAahpPc4MxEXVZMMqrBDtkdtTDMBV73wiSs3bJj7w2yBsKRdT",
  "key24": "5mGNGj8i6j9M4Vx2Qqee8gbxyRarryBbiXQXMur1F2ajYmFFRvcVx8BqvveRnaCCdnaQiHMZJ1iwc37bX8zXcp8n",
  "key25": "2LsKiudb54teEPGwMQWe3DFUanrMAWcRjB3xFQjcKi7bY1yCatuiXL1tKWh6hFfL8eAobSapVSioWG3r5imNPY4G",
  "key26": "4CW9j2frR1xbNrsfkATYxzg5tm5THgWGVHHDHSQGsgnGnrCjGjT6E68sib5EBqEUYEkxjT2Hv7T81RdVhCmm5rak",
  "key27": "5f19PKmgpFsfgfaLz951kZ6n6oR5p9XzmACrmMR5jSRxbrfC3nvLoVMHBbDhqR3bEqBPWwqKgWxKGrDJdfzdkq1M",
  "key28": "2TRm7dzZiwZeYh3ddpf1cZi9qzYMrdUW48DPwpWwLbGJus1Yb5Cyo3afJ3FqRSH8g8TmDCYTEvQubn63WbBKs4XQ",
  "key29": "4dWuzdrHohG3tms3NrqxEUXnk3YxnwLPm5aHFVc3m93BLSbnUDj2WEPUpae98ELac4iacAsTKMbuXDLbkRosEpPo",
  "key30": "fhABr1SBVBfZAX3tCh5TAHAUpr755ZEQZHww9uzQpkzu1m5WMTLcH88xoJMBnQCnPht7bm9AMBDEXQr8MRPGkBh"
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
