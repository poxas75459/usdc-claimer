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
    "TpW7mEUwWp2ruVQM1UtZLR7wdqg6XjtBUXKJEkCo9Ko76PEBnGMrx326kQh9L8zkT9KJS4ijoXHRPTVtxdaWLC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSUSvJjoh9pugf9fscbGW8xmJ8Q2ZprDQ8sATELLAWzzVAbmkWggf8bRbyy9cRwu5TCpcwwdeTBvHybApCmQnq7",
  "key1": "z9V7GnA4EQBYmu24cDLBQ73XS1xt9VM2BPmpwsCKbuciSYhvckqnc2LyMD8ZqZxzKBa51KNCUkkHq9aKVy3uqok",
  "key2": "4cqRcEMGeRwUer17TAELaNBwUqrRessmvHu96Z8nPHL34GiKBPLpC3qVAPa9JMY3PAxWmEFY4cNxABaqtzn4VhZd",
  "key3": "51ucEAD4twMhXNp3Rb4U6D2rhDxohq4BckvJGi3bjx1kgDMcapok6KkeESyVsGm3R82kA9kKh1QkFx84U9cChU8s",
  "key4": "4Ydkb4HDm2wYjdKXn19y4JU5ujCuTKddwjz24sGNUTjuKVB5qBjmb3vYjsXWNFDJnt9xxQMyVWvs6AS2r9VRDFd5",
  "key5": "44Lxbcnr98GtzwyML9WzKn8GoXNe5a3iTHtvT8xNpiBEcbbyGQjWAqyWY6s6MT2zJdwoXjGgDqHhT9zCwvETnX4c",
  "key6": "BC5Nsib6LX15h1bcXZnYzmsvmgqUAPpsaj94ui26iJ4XzRmpHTir4sJgZ6uaeaKUb7jwHNUvrqEtCs8D1D7JGhB",
  "key7": "2GNL5E4SnkdZzysWTGLjbeyXfrTipukQCAGfyWMK8YVezsm4rVqjdgagg9twQoZjLSNMnxASzm5re7akLYMzz9Dh",
  "key8": "TDUK8M2LU5knWEG3AhGRm4WLiPyefqpZtdb92cd331pYwsYu5kWgBnNDjjH7tLr9eh9mSpLx6xa5HrS6PrLJ5yK",
  "key9": "2XmggK73GdiLmPmkqEC148ySr816KwGtsyiPZDFpkQibPCvZcoz7cG9hQWwNVHrVGYZ2S2u6rmBQGJAiriYKVszH",
  "key10": "4Ux5LYczpAKSygUdH3eEWBLPxsEEU2UAsipKaYPz4f43xixvHHSRt6CwtfywxgwhP7VQzz7SGShQT5xsnZdVNDQU",
  "key11": "5YTjRi8m6bgxiVkLFuNs5cyBNKWPVKRaszxGXMa4SshBkEvV6T6YKmZHt27KNaLi69ge5RKZBNhRwMer6N7Hu3mX",
  "key12": "M1tivnBpRCpM8z8wtYSAL2UGwd7rhXfgzfLof25yB6jMyjRWSPL8RMJNFJHwSHtZtcJfuZydo8ajcNFJ2NUsAWX",
  "key13": "MhhsYMKDzCzG3YoBRzHxrmGGuELtfNQm4kCWPoJT4zACCFAoKWPLypMJnGLgXYBuDLxh3nx2wCfM4k2jcfFHPGY",
  "key14": "cL6BsGW7DrEcDLTMpn1c43egq5JfEk2xAff67bTnWnED6sKJKek8EDedLh5JZ845WAcoTzje3VnsKiJaZeN9Jgj",
  "key15": "4Eku52WuxcCAmKBEuzP6K1UxBQWoqGJNW8tntJCnq4phpMq5Vwio2ivxCTTaqWZMBemC7e8g2jUCHPwtPRED2QjE",
  "key16": "5h5ePsmQp7WCWAnM22Unqcesvxh6C9UJQ7g2kbbmgxhL627mKYtbz1NmLgLyybc1Zbmsk2ED6R4j3queLAHHseJ9",
  "key17": "4mwGJZEwfNeVbxqZvhDX4fNdUQEiS4NG3VqEx52etCHvfe8KagCDE3wnBiDmXeqHHtM7DaCKM4Vnx5Br37DQhMiR",
  "key18": "5iWD9zwNpC3uTBmNUANAGDzwwdbk1TZt9kuZ1WukquH3xVa58KuPba17yXnxpDZKjRhaH32b7YEAszEq1P9Yaxs5",
  "key19": "4Z3qZtU8qffzZ9nuN2565PpjqNFN1DjdTev3cYZ6dMjVTYSGUNkTgSGALRsLvBv4uGeWYbvu49Cz2QYwmEZWVByU",
  "key20": "3nQcSR76orBUMtvFiciiqWBF4nkEbdCrBEpc9R4Ca4XRxMUxvQD5yNP2qEnnBGygLzFBt59oNdykLQX2m35z62tL",
  "key21": "3QqfJZeqpV4jvyFcMWjVojEaxxvUR5Y4mrDeUukJE9jFJ5KjKdcr8LFt5vZEXW4dzpRMFgb9r89arBurz2jHFCEM",
  "key22": "mhFTtpXQfZ2bhhrzMHwkjjBKMzrfimvdC5BX5UVeVgvyzEC75VvyJx1h3D33Kye6NuR8euN2TMXGNKhC9QAENyc",
  "key23": "3rB8nidZ14jo4ekxTvsvWYithgAXDbRyiiy5PSjKd2WnnbbruRTgbKwfeipD3MFVaipzVpFaxpHEsu7Kjnb3TusX",
  "key24": "xGZtWRcnvRNvTTGLjyH9Vbey2jYwFa33dCMugDAZG3HZ3zdrP38MSdwwvJRSd7EcuWxPhjvnarivg26bbi1oveA",
  "key25": "3cv4fv7iWe1GfspaqfChDnRmf814Hx43ewb64BXYFnKXUUbKSwE7N76KgrZ4HUghaGwfMGYFcETn3W4iS4estp3G",
  "key26": "ePBvTWsupCvVVsaSBac9RRHzzquhy9b4CU4poJJNqZtkNbeuUxW6zDQzEFvP2fYH45ikhwptE9CUXMVAzfmNySR",
  "key27": "G7rMPiFLNgZg9Nt8EUhjVpoi7KSE2VhCd4SCoTpMsXEbY476pnnmyXiBQ6LQJjsYBfLkgktZP2XZrR1Gn4hUcLq",
  "key28": "4YbNCX1iArvpDURT49e6WWbN3smUyAjPqtMwP8TJYS7v2xAC9vo3WnhzKcYx3se852YDSbmhvZAhZSgy3ZFJrsRY",
  "key29": "CBrs8txqWpnSJcYafXDpz2VV7qnf9CJUiNWH9eAbD9B48UZyVbK9QGXn9dt5rbR6hFhTZB5yvhnDwKsfzwuS43r",
  "key30": "3WibKEGX1VVNcvbEXuGi4ayAaJKnGAdqSeRECoazgfkvCovkhe3gXBWRT6N6P2Dypy7CvSZDgnm6eN3sTWTbMLjU",
  "key31": "4wG7oHmZb7uvJ4BdKuUnN7vsYdv51UTZ74cn4KdpVgf9NZS4wHKQhmiW8gdS9bWVUmdibz5FZ4dNbZykXqL6R4e7",
  "key32": "45vGLJXMKn4j6paBoAmaTBbPFiHiUj2dAM53j8FSeyFbwFXxFU4JQyE7qno4FxhNJNDyHqZMDBRFgsGbtLuoengu",
  "key33": "f7GnESo6oQbVXd162Z2Cy45sx1kNcyQpGajzLv7RNc4ER2QH7T1E7YcQ55ATo2x5JBH7dZtEcJ8sq5rpN6qDRy8",
  "key34": "3SvdB3F6HXJxZjcy4HEpDvDCBveywZ9PJGKRMzpp1Z8Kk5mCNCvJV9QwnCcUkQgjf2s7eCD8pj68ckcm1Zr3sNDF",
  "key35": "5poSgvotz4GyVbdpfd8iizMCffhNcNY5E837ibqfCj94dRSyxPjnYG8XFVAXLWp4vD9twbw5aC8uC3hWRC6JC2RC"
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
