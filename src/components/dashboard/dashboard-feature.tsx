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
    "2A7HBfsx3vKH93ULCNneMU2jxoVBDYeku5J2Lrvky1sVX8tAnggq5sqAMS6AsRUYWS7b48EqW8fRtkLaXTDw5cBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mp758Rke7qjqcYgmxUpc7QjgJEL9CtfW391RRLjzqsChDbNW2FihcMfifHED3sJowzJqcreDAa2ocTQeJ4ggH5m",
  "key1": "vR2WWgdChkc45TQRHCTVvwHwLsdvMdDqyWEBFwcZrLSfAiTnyMcSWH9xPGoHPcZdRgk39EHxStxDsFthdxYDja4",
  "key2": "2XGwX6gLUvF32Zjhq3tEDNnPBWrY7ijw77TW8uJz8Zx44ir3VXTiqh9VsNk8zkPcpsvDBLq1xUDpvqFYNkuMbMoA",
  "key3": "5etSEcjDRqVukeEwZJELbYsTZqvioHzzQmNDaqkpzQ1TKJzCkMVVGXvU6Nphi7AvYW25scMjfK6c2s64gkstQJ3P",
  "key4": "3dV4qGC6CEAFWBfrdefQBPdmsgtzJKtndpsemTXSuM2bs3VBWjTVFmKVnSSn3LFuZNyHqHGfi5TQG4aogB8pxsZA",
  "key5": "2EBbwXSKe5J2tDJtBm43N1xkXAWyxXLT7B93dhpsNT4VpH92sTi5NDpA2FcjSBynHYUDyApLxDLZmzRANuTjRA6p",
  "key6": "2kSK28vwNH7Wdn4sHVwHvVu3jeZGcC1DDEAjFL51dtj3YFAMiXhkpgouHC91RzdXKMgpJL8fvFB3GC25RBaHzjep",
  "key7": "d3ZBxDH9gCHGT2vV3auzAo2n6phULrjiXPZdiunDJfMutwKETykLv4hLJ5X85aRedhzX9URAa3nrEfCjBANJMVE",
  "key8": "5mumdQ413gaKPHRVHTrwAhA6Ywh2mYGKLKSpkkTpze5J2SgjYQfTpWMMMmiHWgKKMs7ibCFR7kh2A8KNgFJKFK4F",
  "key9": "2oefJ9UsqaVFs7J6FXZndSqJMXFoLiU5A9oTBtsxpJMYsYxTRMr8i4NNHSCPYf6QvVKXFhE2uWg2RrSvqWK1LKBj",
  "key10": "4A635nZGGZnj51svY4f89JEshLv4hZrXi74usHZJjrSMCNL5CRxwpACmd6pUxBum63s6WgMDuXdrnV5YFdH8DDsc",
  "key11": "xYAdG6BdFiBGi2hQbufSd3z23txrdZYh6mXgSekLBmeBa56kUEeXiuGvwaK2xjgSrpbqePWi6DkeyiYHL4dWdhC",
  "key12": "3Ms4ECtSuXoNhgP99rngzymRQskSsumWwTXqS7ge6hFibaxAmrWvq4iFFSpWBLbLAoRGNcgt9R8ynLScgNcSA2QL",
  "key13": "2pB9SmEPag5HPEZjMx8c8srZi3NWXmE6oNpBSWejyp7Mcw1cawuuwyupYDQB9s4a6dD8A7wWg7xkkSPjgHSKFEFB",
  "key14": "2Erc6VpHkdPqPSr9Wf9VTGbqzhJUTfyW5Vp117UEh8MwxAHwdRVPBDmCNoE246wrVhd7u4oYjsqj9kHXijeNC66E",
  "key15": "2EuaiQM79GYKuffviXCTFCjdtGjgWWS7UAA9evdUVf3JHUYtezjCHC7kKpVJ5riNW8qZoUdJ4sAYMvL6pseJ6BiP",
  "key16": "3eRbQM2R4X2xV35bcjZyM13P8cbYLAMGgsvSMc8CChBhv5RyqHFQENbYQaqARRcjXvjYVPh9NgU8K3wqmR4nUjez",
  "key17": "2Dxe8f21J1nLf53yfrawtyty2QiY4vLoPCQ2xoz4hKok2W22tCdXFQBuyPnz5GYncqZqMUKuF3WDtPf5nP1GjG2u",
  "key18": "5EoZLYMJWqt1nmEwptfu6QdqSwSfBtAdcChMLNNXhqF3Jfa8PLUoqaihd5wpm1XzY4vWb3KhXopCFHkoHgGXPPTU",
  "key19": "4g7HvUZD5uLRXKqAe2mjn4pPxzUsDCMTiDPzVzU1bRXK19mMamfLBYtv6XPnV4eu7UA47rjCQQAxMvfMqSuADkXb",
  "key20": "277jfKB5UuPNWe3NYGC1mztnJWapHtSiFfxN4Zn1WH6aKvZ4nAzhUDhYScwmD4LH3iVqGj5kHzo26TQ7dEmtCQDY",
  "key21": "43DxBGTWsFGWv538enDryqwDX4iCugnfMYtTFXSz8nUcLqdWeV3y8pBovJiTT3exCYv4tALA94QH27wgdEFZkQsN",
  "key22": "35ut9NisjtBPMJkuj9qhLLkmppmWJJxFXmungGhKXooFbGXd7seavRuziG57RyCJXD1xMJJp4ELmHAFCULMtNjUL",
  "key23": "2mfij4fBDMA7gP4k7RTDdmbkcrsSoCqFyZbU3gKPgjwkLpwUmYaddN1oBvWXjFUNMugxn7HVbUUtmQeKwvATHN7s",
  "key24": "4e37nLfneXqpwZLxn9pK95aSf7YaqRxTg2ukKbnSLC33jbYdX2CELUL4TFqJyStLjFqFzr43BG744JU9GTuX1BUw",
  "key25": "4yGrcXXqv2KEQwaTKjJytydxtw1DrTGGskato5htePD6DUKrpYBWr9W52Fwdv3ACefrsodi8PzFYetK2AK153dn2",
  "key26": "LxyW5wNS9wnu7ZcQgHhrExLDcSBAHZzJPhN87iKsJxwYFMDsY4PCPN47cDQRYUEoF9cnLn6FXiNs8xaZJp5qvmV",
  "key27": "2ibpJJxhRxdpBuTUWAvuqPweWDUcZoReMriuG4g2Y1eVeif9XQn7yegpRLuyCkWJNnngp5rUyrD3VgZGRpzjnxos",
  "key28": "UZ73bNdt4pnCbXBoU9RRPe7S2vm8m3N1xXXUF6UH2eVF2g2dgRAnjw8mgsAjaxaJ8PvU9kmMH2R56Du6HzWdQh4",
  "key29": "2ihm4Jf5qc8Yg83jfrN2dK1NvXxVu5TkasNEfGGPqtZsa4VzS3nNe6wP9dk1jWa2uPhCotKMdeXXEh8yhxnwtzMG",
  "key30": "4uUMY1Gxm5JXL44q8wFMbgJnr2FLwogMHVHG6UthfrHvmA1yveoqjVCEoVmzUGtUJZ9XhuMvGCMjwrjBpCxbT4Te",
  "key31": "5u5gNe4QwGfXMW1KhnCNWeFj3DF7rs8Y1k3uGbSRTyVwP2oF6MvFGN4JZ8Aq3JYxBkBawPZYTXJ2u1B33kHexQah",
  "key32": "4hA6bA4wtu2XLjEUxTJKiWCAFpNj1eVftgsLwhycfCEf3tE6anHVc9LdWSDH4PyNELKnhUHLkkcdXSPL1JBW5HAv",
  "key33": "uKcYq2UJwxLeZdXVgZ8p1NYFmYjCJKwz2jY1hHvtP1CdyUPBeMCj8MgaYp1gsPH1pch85AqTsh6AaESY6pD2S5N",
  "key34": "5YPsZvwgxBn1tepbTMy23iBnecTFhVcvNeHPcD5JuXNTnFdi5nCQRz1y5K6K2W9C9DYNpctcTFq5o4xfJGBEKgKh",
  "key35": "mB1UdS3w5Ufy169oZNMQyJCjTg7vossb6TBMBQ1fKkKN1hhY13QHPJR75pAMbMGM6nxAbTH7cCBWCZZEM3UZ5y9"
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
