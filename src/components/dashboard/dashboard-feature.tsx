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
    "3xeYifTu4P3wcJ3WvKeUUkSa78cZTLfESvPCPcuNBkHQSWkanADXJB1rkxoLWQKNCKm3QkqsG5q4YPrX5KbPaNsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cEwxgs3PEoeQRfeNpaoLtq5f4p9WHLSfBaH21SAknHAZju7nLLvUh7iuN7qzzYkc98mbuufndCiWdohTw6aF39",
  "key1": "53Fpkacj5DdGfvHz9RfXzdYNW1BT9ZXr8ETmbA7LmSdSHLUnQkXgxoWX7ZrFfwRE7NRherTUBBZYDwfNzZNn1T7u",
  "key2": "5XVBeUzwKA5f7Fciich5KJNVd7PukrejRomGANT7WaceWyXHTAw2HmfkiUf3ZtxAVRp6dz4yDHCgkj4LTSECdGnq",
  "key3": "4SYAJuox9ricvzZ4NcpNuBmSJwyLdMSwKMgyLFLrA1J3yViq2vDPcva293k2B6Q4t6D63HbiDy9YNeTCXLYy75wL",
  "key4": "1KPe4wKUxcGPXyxjJGVuPRavygQoqyF8QKyxHTgCk2ZMLMhJa88oBFMD2E7YBbxeZuRgLtcMxctrkXCMkFSVmWq",
  "key5": "3GeWDukm5GBqrnNpWFRTGWjKvmReqQiSTh9yv1fVquJcDxXyKGzPxZUfaLod1g38JzQj6MmpwazgineiUuLm5nLr",
  "key6": "2f58agDfYhsqNeaFsyQVEVYSUHoo8eKq9W49bSh3DmjEgHkHL2YWvzPoY2AgoU2E5zZJzoXv6stfnvAm6uxs8SnN",
  "key7": "3RF23RPyY9PktqpzKKWYgRJaqXjeBm6RWqaqa369wiErpPJH66eBMSuZgSDXHg3UcNbN4wSTmZXBSDNNn5PoKgtP",
  "key8": "5Mou4demwbvm5r8imTyjZMYzwvNoBgeXS8XeD8Y2tcZ3NhXBiTF5PGnayDwxBRZ6uy6SYsq8L827oPL1FiFPCz1t",
  "key9": "3D65m5QXrk8T8qRUjfEnng7t5JMKvfju3VRi8tGhk2hkALr9k8gDVQUNCwq1eJKGjSDmTRGKQWQERE4JywsNfVfD",
  "key10": "5o3u4pRC42CnSkzFPuSYWaY6m3srJdzvuAfAne9CbjstBs9ifboGymDnjZNeCDT5Z5decYvX5LQ1kojSeCNzmbNP",
  "key11": "5RhU9ceD2Mher4L3ex4uPszFm1Annyc3udn8hAE5abefrqVSxBRNJUpV6QTdXoCFcCJcRMPParoX8R1VibsUPR4n",
  "key12": "xpJx3xqe9D718eKJfxmBEpg2kj8jFdMxLNW8weQhULzkHH924NZEAfY3DYxmt9VMs63Ct9jWodjYKgUVMmQnqry",
  "key13": "3UQACANnpUFf3EkgZvaHUMVJSgGa7bFuBVqdFPeACsCVZtEG9Vr6YKSd46pooUKoUfHUjaMN7MDRMW8EPxANPXBr",
  "key14": "5R647vS1MMcfnvd7ra7MVWWW628ZLqHKzyMVB31WuKLwmqG8j8wno7AYTYqWakkoY97ReXEsQFw2Q3NLKdWAECRG",
  "key15": "4R484sCmpHAYZkZMaDRXZ8cB26RFNRG7KfGadc1HUyUM5Bg6armnptafQqqhypeFbC9oiJuteZ33PDLbX6QK2TeU",
  "key16": "5Ym3XEC6rWgz57aWaQra7gmz1bdcN5TwVsaKL8uRUaM8RdYuTr6FD7cy6R4Fm9FQqGTD7k7vkrLZJSB12vNdvrRR",
  "key17": "pQMEYzjNGWM71USub4gWLnka8kPCF96TU93WDerhC1rQ1DKuCiZ6ETrUYNHVE8fh8qVfbsNr7XMSZ8HhgA414p1",
  "key18": "2JwxDwgi6UujVw9gFjqNjqEHBQQXehpZMgwVZJXmTmhj5kMNWzTBZQ7xzC7nvA7VFbZyfE3d2BB8hmMV3bpvG4c5",
  "key19": "4VBhdA5gavsRvn6R8GgWYDdtut1MV5ZX1RiTZn2HXwk6ggAsBc7MqXiDSTgBk8qB4F1WaiSF2BqbKMYxbmaEnoem",
  "key20": "AA4o343gtcU2tHHCYPStdypbJFV7zNh9cwHNjAU7JjYqdje5hWzpjJWoLNsSH8Y8RwL3E2QYkbbBYksFnvF1xiP",
  "key21": "5qCFQLcXFZKVhLtWiJj1fYtfvcbb64Xk5KQrvc3UEFntCnG8ZHjDnJ2pANEcfLV2M7krEbikN4id5HDYLmwhw4Eo",
  "key22": "QinV3DX2DbCzMYxsp4dQhtJUehokSwZHd67zJcLaS2Jech8581WTjuU1BKx9wXaLrmtYgB8CEiRHmDSNKk28ow1",
  "key23": "29tNsQGRMjfvWB3HGbLn9WLnF3VD1ftypkwmgs8qAsCV4KUJ1uU4e16VXJ8UhsMapQF5MpxetDTW6nYyQSN8GPYu",
  "key24": "4TnRq8AFzDT9E8zMX1kFxXGYBDppd54K69ccwQPaZMohGt9KNko9VihK8k9oJ5nt2u6PfgMkRKDN1Pr7C25aN5ru",
  "key25": "4aqMHMb2AjWzBRmnYGQcN9dD6F4EAD3tdjxavRogrP3FVGSLsTPBQVjsPitH2AXquWMr1aCNamKckXJ4VkyCNa9U",
  "key26": "2AnxtGwki659mVvS9EYYZ4QAyn2kZ2PxuYA7VeABb4GQH6fA3JZuTeLr61bGE881CPy1wmaHfvTFBfgwaYr8iw62",
  "key27": "4M5UswvNvkamPL4kc6npXfTsiAd75umZPPdJQijAJAkxYqYMmamWe594wFafQi6i2119qEgcXVGrSHmmt8nUR8pS"
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
