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
    "5fwye3YXoAwrd99o1P1Wa18Qux2gqkMmpgKe6Tq7mcdxWwbV2SEcuXtUfq3Zgtecf1osh3gECkC9c2rngcbrif1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTw7LGy5Dxk3rZqd9CTBmoCj2udQqmC2SnJkVySJojMumthpZcKUrgKfCxgaVD3VzNburfEZg5nKxhdLGZQxDos",
  "key1": "53MgkkW7bABtbwUi6VSE9x6xhYmqFGKURBTMq6x2LnNc9QT2z3xYL2W6EkCZfsHyD2Lu2XFQcBE81hKi3Vn9J6Np",
  "key2": "57Ks7jmnRbJ4otgwCH7iwUnH2EKzpSdEiHSht7rAMd2cLvxn5XuH4vjULqwW6DAPs7rdeu9FWT9S45DUEwmvQMpZ",
  "key3": "3zoWFs55kCen2tZ2wHqR3A3xaEfiU1hPpMgQptNu1XkpkQzUGHed2nQFjB2uzZUBe4qtPv1EAP1ZE8tAZhDiX5b6",
  "key4": "3Uhc9SqioK8uRkp8btzTC2jD2DZ3Fir22uzqydPq58sqG1YLSQswrKGknuQSh4GdD2Tm6yAnPUtNEFWG179s2Um2",
  "key5": "CyNweEPpuAEEHDscqkPd8BHiTKnkVopMXBixTomjXNFB28yxhkrZpLERWBb4T1EP76zwvkN1BBGMzEcy2diXTJX",
  "key6": "dMMibULEbS6cXJ3gViaLwaDWdWSicKNUZyPuGRE3Qrfu7VRemb1ncNSyBf1xMx75zFPoCTDp1dLPVoUEDenbhXs",
  "key7": "3Z9ZbLAZ8nRBUDRTExMVAYu7ATDS8JsSbd2PEMh7tXRn8y3bEWfHeBP5Z2Hcn1R2T1L7PCZ7YovUARax5QU8zTgV",
  "key8": "5CMVmHuv7bzkzg8mMn3Pmi2r2SSjmg14BU8sdk5LFVySJRhzC8VKQ2Y6PsjEZismLNiL47dGhQLXA6GJgp2jMJNA",
  "key9": "nFZHrXHxoXAssdjtQH6LQqZ7nsoLy4V24n3XSgype2xUydxve83i8kiqUnxno1XL6mrHANrtMvsaoyCAo8eaKwD",
  "key10": "2pwaETJdvZ2kgocfSAp4yQ95pm5pcirV9XbuxvAyvVkby2U4V4L1nGUNFmq6xthNCHo7xJdQPk3JyLaUhwHsCSow",
  "key11": "3fvxSonAnR2MqyTdpsM7zdcL2QxSeXAp7PcWSk3MVeLo6GqTs5y9JSc8EZPUr57A7xGyzr3WBmZY78qbQhZ6j1kh",
  "key12": "3Rb9C1dPijsNdmBPtQVvHZAbCcQ7AyXa4bKpmL4c9JMXRJnFyqw3TLcghmeknynLLsvEjew4dKadGKBsunkHcThz",
  "key13": "5pESNA8BWczADe8wqCbjbuoenGf1fpTEDj23SjBKY9CiN6XucpwWgaWwQdwMRAHBBNgzMuRbZV2WgpTrQZrWY6HZ",
  "key14": "3EtAE89ayg3aVfdoZMYhBE3WxMuVJUbJPWZ9AbxtNsCdiifyRuZLCEQ28JgbSj5fVveReCybXvLXq7ycWir8DL1s",
  "key15": "3LpvDRv5hudssxpRryUJbNvEa9zCU7mRpy4eQLVK57RTnyHhTR5YXxVBfBP2FuYKxFQuQYMnaDmA27YGx3eJDcs6",
  "key16": "EKhAdEHU7Gtx2xmT668TwdPUVxb7UBAJyVheXgK1uV8dWS1SzSRwyy7gAAdaF8ETf8YDmeMm3ELHKad8GUPtjTU",
  "key17": "3EZczh6eDzxN83YzfLvHVTQgmVh4ZNgJ2KUHYQBvQR5EytcL8BcSbecTsHXAUaedvVEZkLkuevPJmHxYyrcAVqdn",
  "key18": "4ToSo7sHEitAn8vuxNzjzuahvNKRVxm4E4CHnESdfWU3gT8oDbXWzg8yLPKHeWao5suT3BxrUwp9MEekVkbpeSj1",
  "key19": "2mqGsJhtg4NbZQZPRyCaFHXx7sCKNyAagE49WijZg7X4u9sfGcKcgzGcRSybDUV97qDy9g4YS37Bx4qPKuPxe4dW",
  "key20": "3wRAsRDakNq4gM5M7z8BgLsQpi5N8r4mK9V1AikMLBrzn8vpYCdaemXEMwtqKGR5pHWNjPcgiZ5EtdeZjycqQrjB",
  "key21": "3PGRj9jkgiACr37W1TxtcL8q6ifE4npXf8GhyPViaZJbFjfPQAN8gkBCHKQKcqKPKmgNPXbypCz2Q9MVddgbbmDs",
  "key22": "5Nf1st188BVPZZJWwpDNmPH9TMWjBsHvtLtavTFzUgEkRMTaQrL7iphRMQimWHCE3swW5KVPzS3KmaoT73nkc9wM",
  "key23": "LLfNq56TikYLzoDGhFCE4GN4mWXVCqNtzv7ezXyzuHJ8MWGmErKTj8U7WcFNE8uaehWmqYahrsaK9xdyHUzNPSJ",
  "key24": "21wfMjXtWUuAa77DhBpKJu6VUnsWBtzpCGVSkSyfzV1XRxK8owtiM75W4hmey16H2UER6NHvvSA5jciRi2CUfGtG",
  "key25": "cYhrZ3bxbRMLDkXKNx9NVo2pRMeXbrzLExxnDbvoxRobTx7Gs4bJz4vLreXbuttn8duAcxpnKDAHMpzA971dyks",
  "key26": "5FqfKMJA9294DMx98qcVdLX79af4rwhq4zggqoRQgAaTrzq42bw2jU4iQ3r7QXGPBUrxZTktuXkNiWZj1nP3U8mE",
  "key27": "3HjmcZpAyoksQ64yH2xkqUucZbZMcVziWrVUHjbZxi333DE4sP79VpJYU3STjY4ZVvXme4EmX6EscqvNCmak6ZAb",
  "key28": "asXsvyoAC4ZTvfTC9KBZgmbPrTWWgXr6QCxUoPQpB6h8rVLrktt2nh2RauSBLbGza8k8kpHPJ1pord8PoWkdcwd",
  "key29": "3NNnVDZcPFRGfkFwoTGnRf5H6L7Sh9DimXaALiXXGHXRaU4B5ktTdc95FcWzqiZQyjWRp3CxhkNGCVokVzJDRJSM"
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
