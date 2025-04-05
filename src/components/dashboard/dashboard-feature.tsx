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
    "qDiBz7TZVCULhiV7eUNzi2gsRLvgHLf5goraC49dNzKyKEdgSo9yVCsEzrV7MaDnytKFcG2s1ZTsugixDdeXCZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MNUNdmnfZDS7X1DTdSwTdNzEpcKcpxeCF8jH9weE7wTXC4tNVieiqHb3GVsdapDvjnQcYDNnMkorrMfPoBqYwD7",
  "key1": "WSNropXgaUcUTLusa9Vgwm4BS7UmFxNwnge6vuYD8Ud2ZrWB9oaGLRRnKi2WWay1vJAHcLH8TEhqHmLtYKFPFPw",
  "key2": "8nDUukGG3WfxtWg3sZWnozSxUfe1cieDAncxCXZr1xxZcVfQD7RS5Z3viEx4ASWbAjgZU9Cyr8w6XMqMLJXZZzU",
  "key3": "3xGpM99ZzCvAZ9xHq6gnWoRbvdNDpDvFGdBtuVn3FLc5mQDYva8rmf9BhEMbEGv1KMVSbnTzVT1nQ87RbPkGfvZo",
  "key4": "5dwSX9depC9dkWR7E7rUMs39XgUJ1X68Cz4CUqwUBCoZG9Wa1HHx94ssaPAMunPFVNr3ZXyKmeFC9k6dZ6NWLrQF",
  "key5": "2E12E2NF65Bs6dsaTzaJHduEAuMoTBsbnseutLkf8EKKtMw29ninjF9KHBiUUpDHzye9Dm3RxL1VHhdkSHu8oWST",
  "key6": "VW6yWjcztnmi2fVda25Gk4cgWezTH793tXtmF9XuFuMyHtacxMomb7tNZFjRbYYPCRfhkbKoNsWBg3Zmt2j797H",
  "key7": "2gUY6Xh2M8uf4JnaYBm1JwrTQsfo6rYhGJ1Mh1LCXwirE3mHyj9odzo7HnhM7KyLD1imnDeQNSJNt1vbpLdXivEp",
  "key8": "4BH7JQPSCf6TX6YDFKfRQp7qzbqwwcdtHrGQvDnFZv2jjcR9rciTqmngJoq9o6wL264ReDAw3WLu7YWFsaSFvgRD",
  "key9": "4DVeyNw5fEf8oa3LqhcfBcbN681KQ34qi8b8MP98McgNbc8kPNFD1g5Z6vHNktuMJQi2xQJwvJeJbRfvWaGxp4xw",
  "key10": "DYYFqBBdetkbLpkZA9CEqZ1qhxY9Q4tdJ3z3Ejb2JeVv1BEGukBEgyK6rM5VZa28Fya24U41SUX9MDkpUT2UH8f",
  "key11": "2pzePHoxyUhVwPxXjjte7wnM2U3CkQ36pGtVdkcEN2Ef9ZjXCHfGfkYotKupJv2ZuE5AsfBUkw6NiHmp3q2RwiAT",
  "key12": "dvEmAWKDezYSGbB75ErYGUFMwRujAPNirgCs9pjeUgaYXSQss4rucu2y9L7GwF2W5NYLwh9DQkCqRkAfz61DVt6",
  "key13": "3ipEkNaDQ2ARP3A7YMe3yK7XGZcKAEwkuGYnU9CHKCQZLubgammQXh5skuQjwu8yaX9JNrGahSM8sF915AUvE6Fs",
  "key14": "2PUpVt6a2c6j1GrT2NRtUg1n7EjcfaxhFoQyCzjXgKan2w87JMq1pRHoMyrsa2jJWdZKhxhiRZ7QPSom7Duq1ZdL",
  "key15": "4BJZQyKcENoa3mD8iagjCEav9yUXWJ2CTSy6VY7BGfGHRSe96Df78vqLu9B6wSQfp18jApMbUFciTouDQ1LbGFZa",
  "key16": "4Fd7ttYKKTaRrYxduXyUg2fhjx79tQaRCt9Jv5zFsVKJ5DybDvMifvKaXQA5DzhzttBWWtx5vhPrV8grZivLf3RV",
  "key17": "2xUDi4B4X3rpM5KSXwTz71oca6onD25FUMaouK5eQKiqmugajgifUEW6NmRJAygoQQTxyVG6EhMZaMJTozSrhxJh",
  "key18": "5qyevTf5pngxbjHG583pCBnNkfBtwCXMhEuuMGN44H8yc8hRjFggXftWyFfsFwMycdxesQnDQdzNZ2opFbXifFQr",
  "key19": "3EUBKYL6rggpfvfMmhrr166BJNfhoQqkw79HG3DTudyoHRfTWHf4K9Ra4Ce1oLHBXgs5ZvBbv7ti3ZJSaRTajvL1",
  "key20": "3xTSjDifktWejX25wQbpbSKaiNJaAyjhkgQbHjJg7YZfozUQFp8fH2KgPxe9JnQD8Hdg44Nebhf9nEVU7HjhtNpb",
  "key21": "65vga21HRKUSHnHGZtzPGdyGtgsJxPnaVe1WF3Wk92ceH7VHgPG71xse37PGNYnLSNyYVcwFTDjxpYww25cF32jA",
  "key22": "2uiw4jng91Zh8P4CxdE5ePND4SbBsNq3KUQonyTydYLMMZnKsQhzHiJMyxiUSmXG1FVoabcB8LXPoaTundgnCKyT",
  "key23": "2SFDessakJ1NWyHSJbk6mbgQ7zzYLcNjPeDQ1zfJqhQFgkJLtus1rBjPNcQjc26JYRoWp56GSvZtFKXva1eZCjbC",
  "key24": "4rCNuGZkgDhPGsBwy2yzrHeDeCXrZ2jVM74d3BJZAgXM3u8uRko2Aif7eco8DFg8bc4cbejhwmf5tqohfLCCuhWW"
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
