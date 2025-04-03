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
    "2uqEnG1sewLGx2QCKBjeUvJpSqEoGbtvUHH1gdPrwM1yB5ZaRFn4XVtsftYd5QtMwEEj613RTP4f7N9b9P5upQ31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMRqniqLwCcKdPEmy3hQD3zjAoqdia9kDeqNz4tEVmoydLp7GWGi6prxgSAV7wduB64iw6hBcVZhf2xm5mSjtau",
  "key1": "2XCjTVttEKQ8mR4xtbLpMZRBAT828TSTeEvT8Nr5rYseCVvqtgVZRbBHHeZrbNi89V5VxaB5gxsJdZRfdBUBgFkb",
  "key2": "2UPpnDBTizZb44wF8RBUBWJmRtL4YPLGd7gTyHdLuahAift8NrF8dcX8AmWdnTrhhzNNEevddn2sijvAnfLxUWoT",
  "key3": "15JGHGn18EyzEw5np8RCRnJDQH4wDTni7poA96GmrPBAW6VPZQbGFjaNTGnHtfJv16Gww3E4RAHLNmhqhz73WRo",
  "key4": "5VrKiHEkQ5nXe4VHrTNeQM37sq1vV4BQ4q2puDMuhR7jDUBfbKXdtv71v2mqo6pimcMeZVPTCHQTi9UNqEPHiTwK",
  "key5": "5DksJfbpXevVVoq29ZpC5ToX6Ybwo8dPfoXESHMCgQ3vPr4yWHbmuaYuZHkRmaaKEB2JkdSb9WWopFrWhod6frmm",
  "key6": "2wEQY76qJ4aaYnoYY2wTwBmeG5JzgCpXRUH423NKyqbxFKZV1b2UifTki9TZJhaokMzDDx9XJSc7b3cwnib9TgQ8",
  "key7": "2mMvt3vSaunqyhF1KYFJZazV1PsZnuYeqVZGKRKJMxSHpPeVbrSZovVu6UM5UL82a1DHozMV4ZDcvjNDAELsVgQ4",
  "key8": "3PC13ttZcQqafm291LURBkh9LL2GCsQLYgd7pj1SqzLpm7bfD86BXxP9FwSaTBoax1B14Nv4jSEDmjvpA7VEPrYS",
  "key9": "5Ck82eY54T7fvy2GXJwE1BR8c1WBWUBovaUq4xeTdGNUxoKSkDyGpwQurXUgQzCjYqfosUMVVM5uXKpEDPBfekZQ",
  "key10": "fyckHQ1XNTFN58A32WLxX6jk5hLxkKHQfd7RCHiRoMh81kTRtXuKuY4t8phjFbFJ7mNq5jnkpqpL1V5uqtELPKL",
  "key11": "46NXhhDR9dDqePRMo21jDSqM8jsKAxmFLsR5vgBLFr49MnvDLfT1BpWHxgFNhxyRfTxkzT2wWF8AEW9peDeJsPHa",
  "key12": "3UiT3VJnF4M4sjjRGkv8jSKd8GjXkD3aR7RUwg2eafqSYRFpakh7m8PrBv8k4YmN59ZpTzNNjdb4QgkiyY4fEnjv",
  "key13": "wWAXpCSYb5Asx3D1yCK6QSDc7kXPWctL1FGHasf72bbAQkG5HQ9udFN3ccjKbNJZNNvzYkB1PzLA2CGZDq67zSi",
  "key14": "bZjw8tvinUQ5Z3z8g2Uc2HcK6YQSkg2PYKwuJdzJw5qLoDtncaNJCPRaAMZoZryH9SipXQ8R3yhqqe1nkksAMvd",
  "key15": "4dufog3tFisLEy6iwMoH1HgBA3TzUk2NhfMizbr6oXHnLeUSzmxEDMfsJ1XLtheWoYWUriosrzB2txJbDgAkx99L",
  "key16": "4ixGmLW6cSyqC9nz2EfmTGa97ECWxR9K2VtJT6gXkfWP4Z2acEEBfKy238bpJXpbEdnL5qyit4Zpj9ophx6rqNT8",
  "key17": "4Wc4bUExdM4JGY1nsUcfaAS5vuHtuYmghWBwRsXCYJzSLMWD7Q86wHvxESwPuBy6k6BXMz2hiGdkbVk4r6YWwr3S",
  "key18": "5YSvcEUn3GPEAPht5iMc3duzpuPgFTK7UFSiYXiGJrJATia1dLLnwfSYjNRwwC2cV5k87q7ueRb7WePCB9wC58Vx",
  "key19": "5zg3tdC4wh3b9HQQtvkDRr6Xdx4oeNWPJww9F9CUYSeW11xamYMN67XFFnocWL6q3w9UFEb1nakU8YRn55rU1G9i",
  "key20": "5vPTPYJrrvGT5XZfGKh5ya1ZrNcZzBF7nScjNk14i74VNmbXEcQM8QDBAGEkAV5bTeRE3rhwCzn43kztkhFwEJiZ",
  "key21": "2TcaJY7AfZgLWopUZH4rkzZb5AVBU2FCVpxYVm4FQJmFFPSnDXU1KLBG87wysn1jmnrVekBb3uRAg3orWMNSPMSm",
  "key22": "37ZiVcx9kX4AB1B9m1Bon8WeUMdZ6fLytHCfY1D1QFpdbXAuaLFeMsj1wnTim1Go7y2obevTfmeB5GtbsPo7hPvy",
  "key23": "463nBEk56ZStFdAaF1uLypQpqr2yA9dwbvbWZqus2GAT84pW5DEzbLjZ99KPHDvsitXenFe4muhA8q7KrVVUdPj5",
  "key24": "41cZFfHAu83mqE1QmmEmhUFYGeTqXonawgtYmi9MX8bvgtUCyDWoPC9EbGLHVDY6Dr3JC1ewRN31KtVZB3HNiSnc"
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
