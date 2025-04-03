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
    "4NEfvh9jSzCQu5w68UrBpnvQva8bfb28c38DEPnZNsagX1uzkBkdyTUEzqNQENUx9MYKhZEC1gsyLHN5QEHkghTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiWZCKMFEjPtdyxpJKgaTSrQXuVzgNhc349mJvkp7n9j9ea3u7W9EXEwM47yRdjqbDwq5u5JxZ78YRwxZyDmxwV",
  "key1": "2L728j3bvC9Rpf75tLJ7RUTpKmvkq1jiuQJagiBCFvDAGiZSWj5bgPY8QprrVJtcbTZNVa9ks8sjfKEtWvoQ65Dc",
  "key2": "2T8wxihzWXXBkichPjNLgBxkEEJQeJsszJ2pfVYEWibhH4UTTpdvCuMjp1hrk1zErQs7cXeJ8uKrtFCHBPkUt6Tt",
  "key3": "2vEYmXYURhM7wtBK4pSoUnyhAZVhQyW592f4VuLwkTGtrkFRKG1GphFzNWpUSnUdXoVAmDVckAGgzVSU5HzWoFMR",
  "key4": "Gc8oPyViWPFdi7BZjqaBWK1jo19Uw3YzEbves3R1NdpwWp58bWPRTi8MTMRW1L4dMpC1CieU1s5UkrtEhQbmtiT",
  "key5": "3bGJPVXYpxuaKzPZ9GzptuzQ3gPZBvtAc3TZt4RGrQQqfo8ExfxMn5MNfW1Q5TePsMB9X6DNzwjh6TGUr348B5dQ",
  "key6": "4xy23woGgNVPb349QeuJ3rvf3sxkuYb5FfhUHsor2Ac5YzZtnLcR9SRYF4cy96bJRzjrFFsYxn2MCBGTwwj1SbCr",
  "key7": "4czr1gbBTETsZSMWphL4EqKCb4HJxAUEim1xJfodt8Atbh3AFaqChxBVLFoThKXfDwc2zFYE1G1bNf7fd94u64AY",
  "key8": "2ywbm2V2XjPtUpeQ7iaPT13JaRYMHRx6xEoF7QCq4JzJCgvpEiySvyjGk5tRJkzEwfnNp1cQm24jeDFD2AWQfY7V",
  "key9": "3s6jTfHNpNfNcHskt7Umv553WKXs1VP8ZSsQ9x7yVaDJvsKF1MfZ3oFQMVDh67C4KmAVc3wCQKKXEHh7sVoDRsWh",
  "key10": "5KCBiJxH3fWdMzK8cP7D38B5eo3f2Too6bU3hBmdKc3qCn58CmJtLSsGPrNejsUEoaF79eTXaoAHW92qPzVwmknu",
  "key11": "66zWJKVwitBuPAVK176oKtVgBiwcWo56pZxMduM38LoHPMXi9EybkGY8RQxsjh2HVVBJx5piMEhkhQnAkx1vHFxQ",
  "key12": "4gc98J88eyvVS5ccuUQqU141YqLhcWWQLYWfgXCdn2ogjWyLxXTiMNt3C5d5V5EH6zP1zgcEfVDG2AdqoacKWhfN",
  "key13": "2LNzWeeedjNhd6CwqZLpdxe5QYzB2NjSzb9gkVNdj8iKY2TFKMrrX5wys2PLgKZwk8uLFXANdR6f2a5EcVKETxyr",
  "key14": "5u1Ls4UydgzaqHqN8eZ1DKHXbaLv4TXUTtV7hcUfmJ3od4i6CXBXrojtET5AMwaWSyZFBUqgPUe6YdcamXpnV6qY",
  "key15": "3o4vxE4ehG8Xdyet7WyNF2nKb8bZ7czoe4aptv8SNE5gHm4cXhTD1zZT4p8vLqvuffZhcboAvujfxrRpNFgTp5zR",
  "key16": "55UD8x9XUQPUdtk8rJcCZFEdDbYuA4GHnjir1VZBwDT2UqwrHGNdyVS88cwcpQag58nKVT3QNwmz9y4QgfAfHHEB",
  "key17": "2hcrJeSGDUwbTtnLHoDJA1GeymZcnWbjvFuKCjPMeeHQ3g7S2zYNk9x4WhjkT1ag8DyQnz9d4vApjPsNHntazMb5",
  "key18": "2UyPPwSVDTXfZDNv3eXseier9v7LbKaWoAfDnc7kntN77ytryHgP4ifoZwZmGFaLhz1Afmxh7NdN9qLQXKEVDUJN",
  "key19": "4mx3gzou4L8avJi96X6pcvBARzcgRxvkqi4SZxjBs8reaxLbS8c1o7GWDemWNpsAzjaqacWnd2vJpLb3CQi83VdQ",
  "key20": "2nyoUNipjgYgeQHrABxPbRs1ih4UJuUmXC1qHdMzUdBBS7c3h2tE6kyWuurwLgyWytK2jZNdUVerK6zfo4Ca2vzu",
  "key21": "2ySxYPd5YFmzT1BLYEPunG3sqvi92M2uA5jo1R79QHwfzoS6BQb1anigz8VZydBukFCTrpR2QsFAS7SVoAGjNPuD",
  "key22": "37atWyqXsUXTiCYxvJ9CHfcFTzN18aExqUzAunppJfcr9qanL3wiAmYEoMEFVf2psbzsLNfvau557PeZFJHdLWa3",
  "key23": "3qHZYMwhGfhspfTKEZLGUzfMHT3MJzborrK6BaRikoKHq42ha8wwxcZuAsHhVkWu5ozpW2PgSf71pMCdj9mwC7X9",
  "key24": "3AnE1fAjXnqf783cKQVxnw3QS2hHbNTjRJZTzqbkQZrW4eFChqaKycUXHcBLqkPBcfV6cZPQ8h11UDJvxfYbDK2G",
  "key25": "3cLTkuLpJfmEtk61VaxDEuXRoNH8XKcD9HU272ix1X93poV7Y98e7az6yg3hMZxaurDiUVwwiht4g1C9TwLVCAf7"
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
