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
    "5KFApbnRaKzT8MBWd9NFPN1f2oephisUXfZCBC5c3GRXrmgCBgYMeyYXPxsXCxXVaZBhf48YqzttZegmHRsRjxnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GiFbFSmSnrtDJVMwYUKuoZazLsJx5KUvdphiL4wrAi3bZitzpFsQvjYMWfBAhrdyoxoNvHdafeZqBhjEWZSB1PN",
  "key1": "4BDghR33RjoUARphZUAxw9zUb33eMG3Rxv7B36EXoRSFaxn3czdtV25BgVR168WRvd3tzF1MNa3uBjb98dQxckmw",
  "key2": "2KztduBuAEpmgJzN8RbMAV6xg9KmC1DCMABhkHthH7pgUC1A8jkoMZv5Y6wd3kve4hjcMHbJseZBX7ora6ezTK7m",
  "key3": "41WNuHLf8YytkEkFrfpaYGfJmhnc8ep9ZXUK3a4S7oyNeJfG8ykefy9YSFGFJsUGY6NetvJkvDZz5K8PCMEjZQ1Z",
  "key4": "3NQJEWuRqMWcjWixuVYGcedoNf5dRHGH1vAD7vQWHnny8gioHpSeoY1LhPBtesTdS3FKAaMLKB7v2GwzwkA4Msqi",
  "key5": "4TRPhQcReRdUkwHKj2mKSnLx7Lm5ArKPuwXbG6rkjs3cYbDkH7iup6APzocUQq8fe5RQSwnu4rLsWdM76X3GfGMX",
  "key6": "4sa1ijaRAiyXyLPnvtcsdP3q1quKz1Y9QC4hkPdiWtKvWCaukHBzYTPNW96CtktKWRytPw5m3GxXnNQ9CNP3XEZe",
  "key7": "4vsoAfakbPU3Skb3YLShutzBcwNg4Ccyjbo3eexfqyuJsqGatP7W7Fve26MSGESBditomrsFg5nec8Me3PaYPsjs",
  "key8": "2zizgTJMWfTPYHu8tCqrfajLb8Co81aRaJxa6xL9hfbszqQeVMqDgNoSYeGGHh7mB82jkPd6f1wXKGQaigLgBYgw",
  "key9": "4UseFseUw2NBLDRbKLd1KGZYPouP7A8nEFF5SsPpPpnE6SNivm74U2Bo1mgJDj671MRdwbxV7jJqPMJbncF2SNUB",
  "key10": "67pyiajKMjzNAxD1E9DJd9wS9Mr8jHzTkA2T1fSvCTfuhJwfa3DRHKc74KkiBMyNYvYCdPewDg3ggPELhy3x3Ndd",
  "key11": "2HRFXHcfJRbNFCKEWUFwZNqs8T8hzVmmUtHZE66JpVkjSeeknTEiGZgPYg5YSrdrnvzQ5CBcZZCF5RYWxZwsELzd",
  "key12": "2KebjF2PD4JZq4ZFgAD5Ut6NV3C8pC665WNRsXRTPuRwMfYuzeRL4VZxEPUpcuaYuBAasBzTvChCXcydQxRJz6pL",
  "key13": "dTp47GfWR8gSqhYAqYVBT6f9X6MVye6U4Zi8j1bLW7WKc26g8To7NnzjTx4vP47Bi1ikGhkA1gAx6zDgCTRk1kg",
  "key14": "4v8x9bgmbKXDtUowtxXUyauWu3FBC9Ju35Q1UCYXQCaEc78QMqR1ypaG62U7qDTo8PmDp1t1TggCKGjEGHjobm1d",
  "key15": "afHzrj1w4xYaDYfMkiCmWTz9pKhxPXKHnD79fDnK6PJgUHxwFmMxJCBGeUmPLjTpJ6rWS5akdv2WxN6tJrqUSEQ",
  "key16": "4xDSnyrhWT4czxGrZ7Vi3giViUoybmgeCkgRKF8swkwoM7kaiNKrUK1DXGwqtc3a19rrSKbrF5k9bSbL1MBGxZhZ",
  "key17": "3JkkrSmprbTtrwkhHMYhk3kQa82xJ5nyvYe6WuJkbiCtEEy17HZrKKVMcj9GbbCXG3aZDbwaUhcjR5KZd9PTMJ7B",
  "key18": "3Y5voRweYgV7fQdmfGrgaxnmBtZ5XnCAq4HPF5VNwGxfPcc5t2ktKFrYsqqasj3LE6kUxLXesv5TpP8BLNhBCKeV",
  "key19": "5Xm3U9PDRWa1Qb1tfZgC3wC3Yn3xyJACjujrBjkJpb9N2Zb8wsdYjRB7MSzcVsvxYmETrXe4LP5Y4TqdwcEc11bm",
  "key20": "axaryFKm9j3re1t3B8D6TVWw1oPWw8kzfV5XU29QpNDKdXpGFbnN1ojt9c96TETm9Z1bbr8p98vke5SxuxyLS79",
  "key21": "4Vb1VKzT2ULrUxR3BT79caWTWk4cL1rCzt2rc3ch8ofuUu6ibbTAJ6PQrZ6X9t3Q4ZJ86pZfjpisVj5SmnU4cukC",
  "key22": "3xBbDGu2yTEz1DX2kQaXfbMUvZmFmCTauq9XnQmLCuQzmbSmfAXtT67CSfg3qq8SHVd8iEGRaCbqwQTQyABhP4zZ",
  "key23": "2KJEMGnh2xe6bXYNAenWnmhEaavYgtVvPEhQCTHKZKGQtuedGC12iqJdRvfasa3mxdkjUfRMMDQ3bgRxG8bbsBFn",
  "key24": "xEruANLBhqXWFVj28MftY2UCTWBNvNMSZQTfYa2bNkJ8zddmjEVFYiisb5ks5g59neZXDxcjLdt4j5n23QeKRyy",
  "key25": "LrNQoQJTWW3VwJc7bmYocWRvNC6TfAoytTPQF9MMr22TRMYTpi3EV76MjWwyHYfz9YePkDk1XJdhVG3bhbSLaLY",
  "key26": "64K6Bq7jf9A5zV7iDm2w9Lpx2ULxntypVqhntW6NuPiJ9KFiEvT4Xo2TwWBwGc3M88P68iYHr4FozP663gStvyZM",
  "key27": "5JRNSRa59z6YpxZhE1QHpHMimW5VR7gLPm3WBRG2aa1JvdsrgkS3UrTaAVTRQxKcGSsUK3Us2YsuZa4bWuZDFUWo",
  "key28": "t8otWhYHzGXKxUt9iXH9b3PtTsCaC8ScqK3w3zUxaVapfYqjG7nEPavQdumHu4CuSP4KjdjnC9nAFeDrcd2zmqT",
  "key29": "fNJgWugFiy7u68Fa6WXZEm2VNZZqdqHd1X1FTASMoEub16MiWEUEW1n5DTfK6jEzEcjNaqq1REca3zqqsp4cBna"
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
