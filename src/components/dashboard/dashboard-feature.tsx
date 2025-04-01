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
    "2hhNSYxqbYNMUzVDv5T79vXLkm9SQ7eMLckGr3GfyBpw57E3FH3htJk17AFEVGtyVLvjCwNAShWAGRPEdc5c3Qpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MvcbvNEJ8pRU6MHBVq6p7dxtWYeXd1Cm2W8qHBwFttK4yn17gXS7owdfGp7pe33J88Nt9vHk6wXYhBaoHbw3WLC",
  "key1": "5hRyCNZtmLRPnZJYTUmdNZoyNYoGzbYNnks1Db9E5FceA25qE7y7nBRvRYVFxm4aaeRbQ64XyqCuMA18Gfkr9ATs",
  "key2": "M2BRFfiDH8uQLKD5T9RgtuLU3bWjEi4r9eXPmPf1A4159BwEsHtM781FxMWgzGGymdMjcDkXHMjvRCGfXvAQeE6",
  "key3": "3rUEcPvjNvQRzujCv7psjRMLtnrb3sq5TMwPjc3LJ1rvDLQLrj6VZbd2t9CYTKCLC7NzQcSbgmoVscvKCNzBk3tB",
  "key4": "4YvzCYCcxiWzu5mKy86ZuB59xqfJ2RnBSDp8nk3QcxbpNKveBgm7Uky3BEVpzHjmZn6oCSZmbMDa4R5fFyadTn9j",
  "key5": "3HY7jci4TisKF6thHtgRrCREX5gM8TngqmzZGb7gPfDDQBtB3fBU3uv9YiF8TwaTVM9heQCe8b6pZgrLBNz4Ebvn",
  "key6": "299JKXuoSHNvXrviiSSQfmPkx79LEhVpMEcRFoqfWLhwVozhtjdQcsyqYrNUrRi9M4AGRWAZnF1Svs9HS5SwhruN",
  "key7": "2tA9dwPtgtePF4Y6DrUH8WB8nehCSZXgm65fBXEZhuA66hVuHdfNodzsEen1gqDyDQnY8RqKRL8JKF7KiDdEFqcP",
  "key8": "5Dxz3pWaeHygv2HqacNJTzUgaayDAW3U48kpqXjDqK4XQthYhwHRjXttoBQnNQCfMqtoQCaHN9wSnrkcZbTop4Z3",
  "key9": "5ej5e7uMCE8ovrVLUoxV17TFbxDW2fip8GB7QPqjeBLckr2C54KAp3f7ipszXpnYhMMXuJpr9hNwWajQf6ddNnhF",
  "key10": "eSuTBB3rimypvuuVMTrsS5kmtXBa4G6UMu8GdieahYWsHv9NuzKAQnNL5yBBPUFi1McW9ptqThJ8DvGK8kpPR4V",
  "key11": "2LPi6b6NinDMwAvgA2kpjcetB95sB8zWvNeQVMJdq8HubXLiQ9zU6xG5cC7nw4XBgPwX5rAT6XQrcGHa2qK3oXJk",
  "key12": "3knLBs2JuKwHZMthVzA65mM4Vz8jNkVhathCcnseLYvXWn2tDaykuUW9CxV8KjRcGvn8Etiko5h2jHz34bJvtBGL",
  "key13": "5Pg68NCWxNpJZGy2wjQsA1G5zgo2TMtNRTPDpCCuY1sZcWxPQ2YuwtGeZCvrkZDoBrLqHNkVxj1QMyHsB6BNpp4i",
  "key14": "3AYRRuxbNsXCgGXR5GquF2VLDP25r7o13f1y2F31senHBvSeah8AfKB799zYJR8BMkH8wBbEoiAQGfo8ZGHEif2Y",
  "key15": "36p6yCyGH7N5VEZKtkH6PxJybswWuBw2NSobBQHbhyqM5V4AfEHyjxP6P5w982NrzmWn654cV8Rf9HhCTuz2t2J2",
  "key16": "5mvMc9V5gtCLjd4GNARfHkMKT9irud1ycWb3M4VaR7Vhz9XwXcYr5Lg9BCY3Bh4U9pKraNAHrwgUWXURzH9D2Lho",
  "key17": "2KoKwRNNJhintaSy4ZTXwg65q7EnAafUPQW8665RcK3uDJnAFuFbFKXJ71mZ9XVdcTdTzMNUio4BmPuBPuQmvP9a",
  "key18": "5G3pLbPFE2jHWEoZyN1kALn7bpXwi75W74GdZSNyzc1f6dDYd7g9wYeJoot1Ft7hM1hMxUqg8wLs6uZMraY7Yk6F",
  "key19": "5gqzdk9gTFYGv4eMynNqBjHqAkue23fUvfsDuTCYdyuRx4x9MHKUNju7VPzdgBNnuwGAZe81bNPa5PkDDcTDs92Y",
  "key20": "2JT8a8WMzd5K8G5rmcc9Pr3PuiVvrzSFE8rqgPU1Txc1bhzbt68efk9s54wDhNbShDy5VTs4v41FnuCQNenYMd3V",
  "key21": "42oAzVL4yf2tS9K6A5eksCDg9Sg3yj4dZ9ZsXTT6TWUjARhyXG9ioLk7w6v97wHc7827SiDVXbnm8XXjbPb8kRG1",
  "key22": "qx7vjkPFg2jwDUhGUn7NDGW6uMVG9szBPNTqcVMCrJPkv32dzptQL7uezTcTKSCjaQafj8tXwMVrgTjez5TUndp",
  "key23": "29jdJmo9RzHhRYwUMfcsMyhqPMDJ7dRm5PNAWJpGkFd5yHXFK8Q85FDboLavmWp9HdHGQR3RCSVvDZUJBn4F7d9z",
  "key24": "4u8w4ntvNGiJzCGtkC9mQjPh5e2MLBx2tA1n7zsBX1C82UnAJPJhRgUk7ioHFtsaA8xmS7SBrr71zQjwgbsVAGEs"
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
