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
    "3iXJMXDGsLh6x4HxzmbboUbM1QGneCpPUrnT5unNcfYR5fCD6hCPsRAuxG7xnpdv9LvFybBWhTc7YngaqGi4jvB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ndwWxm7tVv8Zz3TiEbJ6azRLWVMCTxnfUgTmfk9Gxj9U9J6MHEMwwdJYtrXGdNhyFbvapRaSXMdWhSPvm68D7H",
  "key1": "5vZFeK6J1Jo8uJTHMJxsLH9KxzcQ7cZB67G5We9zXKbhoDcQSLXvvtttPmHD6zLUbGC4Yj52WbXkKwLrDGCGXRHm",
  "key2": "YpnNrpNRytiw8CF1DxKDduz2egWwzrXwCTkJGNghjQ3nawCjbBJ1abwwuoVvokp4KQeH13S7kQoN11YciLHFjiA",
  "key3": "4kUSZrEpUjLuTwbc2rz3m4HwvfR41zvxebBbrtNuqWmrLyFeVVou8y5NJhEePoUZSthJCDq37vEy54ho7Yg84frt",
  "key4": "49eAWvSJKTVHDgztUk8rYwa59RiWS6ZLzuiGnKqVMnxBiZixnkEDkYTgGaLULmX8q1stes2jr3aLFnA8Zu5Qj4a7",
  "key5": "3WDdHHLJD8CfoQ2oErWUeeZHgKUxVbFByUku9uAPKcShAtzn8anfQfvWFGv2MMEY4r9DsV51pfwnReosoZHDCRNa",
  "key6": "2qv2ivyBU2LvnzB71ZYEmAxxv4cw6ji1yiv8qeFYaJY7ioAqCPy8PRGNuNWFmBPF6XHwGv2vTHeRUtzAzahjGyfk",
  "key7": "5knPT7RCRBMnbX2uiUwj86EETefzS4SiLKPagJSdg1PeGTwt4rQFh2sadH2w3jFxxLVtW7Sps4UNCnvtZVtYufPT",
  "key8": "3hf3Hjacuj2NaqUYVP3gtj4vcfcU53652zzdDSMijNCZMix6ni18YWXaoNNtctqbnmbditckNRfi3Yk8u8HHDHuy",
  "key9": "4KMmJs7UpqR2GoVkkGsNey5zKoNK9iZG3pynQywcf8p4NLqrmA5bNhsSGDHdHyebycYZEukRgwgjp9gP8jB5jUSD",
  "key10": "5JkfsWvuq3nBnHxUJcykYQFZPi1Ejnpvwt2D5v6igTT723QV8bxLGNDVGSfJnws7J6kFeQSSC8eKuauckBHz34RL",
  "key11": "2YaV7ptGYAEyTtEFQMfgqQUKVub9gkQCuigb45yZbPHVvwxTvd7VvGY4tY9qeFQs1n5zowHwhvgMFow5szfgyWZ6",
  "key12": "2biMEPctDo1yX2Af575xaGmB6UtW3b8brp9x32fni2FXo6um8k2PiPDuX2fsXzBTNsDGiEU6KMxrULFQo3pdZpbg",
  "key13": "5cnDqCKHnWF5Qz5Nms8cW9uz2Hfetvc1egCmLpHExW3R69L5ibLNPiCSPhZKyynRcn4jHyoYsYZ7gcpLGiynBajP",
  "key14": "4rMNGv2MYzCp8CmjEk7Co3BvUDbsJj28ih4n73EHDzEKbKtJb25nxiP3inCyQBjmqWPJBiF35REbyXgrihnfv7EB",
  "key15": "3vkBZuNxkSs5uykLogzCYuaXrvVXZGhKV9KhPunnH65RojqoRAiVgRHLKJ64KAjz57Na4LtGf29k7kf5NyZQswhi",
  "key16": "4ZjUiECnZioJJFRVneHLzv5Q9qgfBS3DKevw49VBtjgBp5pkQ5h9eJxoRnnjb89RJQEc58rNZPQDU3DNs6rkqiL3",
  "key17": "J8X4ynDX6ussCeuF9txHtuvdBHRQ2VVG8r1rpo1Ratu9BFwa4XhK2bkLWXaWNSqEHFp6QjBdU8YVHQM2xouTWgM",
  "key18": "4LZtDUiXMa2DU2N8dgVGXaJGH6yRisUiCoJCeS59kV2xPZwqDAf4PaeRsi6RM2GCdaLZ4JdawVFdAt4RmzHo2UUJ",
  "key19": "3mdTSnHsqgcYAqmMdvL6AU5RXp9zyWw7r9imFTpGvtPZiPhQzXDHu6qcRUPzU4Taq4mPwmXvxxAKjCuY1VAKVzLo",
  "key20": "2QtJuYnsnk7djYx7APzu1g9CeNNU8bd3BvmLA6jRqEZE6b2ZsCihAmQDMTrR43KSrbnYXXe4rF3ZZUwpYuBDDAzi",
  "key21": "2PUYTfx4DMLgMUZP9WQCL9RR3MkxmUQZwktVVvvc8TqodGGXgP5bz1VKeFk7aFBfgLwq1fKQMUZnYGC96QJeNfz6",
  "key22": "CfZdv6q9GwQAAtDCdirRz1P8aWGrWkHfwPBjYx2xkN8Vvm7aksSSfBc7bkwMn7SyggKZTeEmUfQ32KTkQn8nmag",
  "key23": "4hB7EpQxcnXCDjcABXffqDJ2hczADYFxizwUf984vjAtSCVYqjgrotSwtXEMbWtxhaSLhz8w6sdXFhmnP664bkFs",
  "key24": "5cxkdJMx4JSd3Ha55NZrkVBsXKfoWbS8qsxkmDTSV3ob4B5XoQv8yP2b6TFMHG4iCiHHocAkbS15dJjmtVgrorjZ"
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
