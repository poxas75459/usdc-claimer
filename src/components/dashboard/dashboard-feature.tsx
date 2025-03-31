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
    "HqsgYKBUuUj8tiWEH1TiKRX1YyiqLnCuC8dmzDpdiBTdosixGXastbS9sVx9sAteq4UqhttsmZvSqg8m6jAi5s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJz9iyafyCHuCXBBeHiiYmf6U1fWyezDX6eNyDSxkAir7MkSnb9fbRJp94GSp3CCLWkVaaoesVPZ36fJ6NzSAhx",
  "key1": "2x4Q8iMvSoF1RPzNnyYbyWc9v9LAa1LL6Vk2HF7bwaRv7v4zgZbHfhirw84n7HDnkq1WCTMHizauHrXgb1nvkZSZ",
  "key2": "pVhxDmL8fBxKfsxcfK7Cphi9rskWHJ1pq4X9CrkCip2VVFojsBtF4YqsPxTw4qgx6T4TstUBoGF7nfPa6K8G65r",
  "key3": "2CiZJ5mcgsbecQFvP8rEMuVsMXxhXpy3Cb2h5EFQa1UBaycnmu9HS9aLQpMWqxbmb6P3AS6JdgZHCjrVGFyUsWc8",
  "key4": "54HkS5o4YeJhAA6rbgUWcizGNBJKTWuAgEf5WSYfkBuHS2NQA1vG2awpQREgdTrcAXbdBzheU2nQhPdxXNpZKZaP",
  "key5": "5mVJV4TTH9Y1i796eLgrXgEWEyjX5XTfmEB8EfirqwkBm3x3QuPrGGY6ck5QwGnxkXR7WSVV64pJXM8BQPsYDemR",
  "key6": "2Nb74VGjwzydeK1gHzXPF2siuAGrV6mSds6989HJHVj2SduGxJka5HiNoU6gXw7JZqcxbCmWouF15TfMv2k3HHTD",
  "key7": "4gL6eguUWDsmfhMx5SRRjsEpXZYffNynAat4v3edB1mNHnp6ATEcnKVTuhmnLaS6WExQXj8Q3PrZLZ2ivJn9jhZB",
  "key8": "3APc64VV73MXJmEXQ1x1o7XYVcoWeBYzV9Kcj2pRZuNHnN5j9gNafRLWDmC6oy3XnkUgf6XYjPGQb7FWuxwoGkki",
  "key9": "4cm2VwuEdzvioXbGt9Ki38ajBd8ULtLWpkKHTtzGsCVBizuUXXVNBRKi3fUBpseUv5injrwz8yz74EEXBoCYAtPu",
  "key10": "2r2iJQW3x6bKYw1i1sJDS3hViV9LMhoaLvJPSjEpfh1Xsa3GjUkShk9PykTjNVLr9QxhNiQ2uwCRubaHKTt5EGdk",
  "key11": "z9kCec437AnXfJUURE3arjrVjLL8L4nJfEL5tc4M6RG3WcAnbNY3BNxA4xjtxr25LwsCfr6wtQvX2FpTwatjr2K",
  "key12": "37rAT3Nb4e8pbdMvEUnGN7HaqdrUhybGYc37udCiepHCwrHJHfLmSmEKQrXSLaw81i2AojZfSpFUGdHV5EZ2x9Hf",
  "key13": "56KX6jB7GmnNQNHdwYdm4HRaop2rMBiMkyxTnzpLoFcQb9vQsFvASrVm1WSexofAJU63xwA4dcEqKX12vjTH6Cvg",
  "key14": "653jjFAH2pXGwsfVKh18ZobqiHL6kx9T3xtaWHTHxVTCUTsix3NfNEoGYscX6TE59jb7Rxn4Lpzue4NCRdEBGDuJ",
  "key15": "5FpCq6qJTkt4pVjbdCaMFxJCJ5pFR8bnEqKt239o4Kki9Dea4ThT2ESiX78PsWGLtJitzg9rcHMNNvXXrbg7r1Jg",
  "key16": "7JBm7cycLrEEPgs2MREaLFfbwqu63hkjSGDRdqBf7fapFf5WTVCdZD5KdCme8JpJpdx5fAGaE7Xnf7pyEiTzuZ2",
  "key17": "2Rrjf91HCmti73MEFmG3JQ3ixo5k71CJSRa9HYZBYYD5umdbQhj94vq7dkH9nbYwyu8ouFT9c3k9i7jeiCJaXiLJ",
  "key18": "3g7zCdFryA1fiG2gi55X2rjADp2CLvkAtUwz4ZPcdDfcd4yPBUApwhjeBhCA6RU4YuoNsxAYkjsHVKAHfwZR2S89",
  "key19": "4dcL477wzH5W3szxSCRuNG6juRjTMpjS8T8J6o5YwJhUJtRi3DkbY12mcr7TbwhTAKbjHeDeZmnLpPKLqruLns5T",
  "key20": "4LubqeDQHV5fgTtHgGGRJ5oHLghSdne2yv1hYLp6ddM7atP9HkbwA6vEarM8nnWW9XGNCtzwiK8PhHUVnXWsUdhu",
  "key21": "2sqgBTKF5agqPuhpyDWsTdo9orsFdgAQaQb8qoqDs1fUz4m5nbZua19RFd81meuB3VR2A4gfUcv11TcpPuBDs3Ec",
  "key22": "5JQw4Dznw9XAZ8n26EkVJ9L3xFt8knaKwoSqCAu1RPjzQ71VgiaCk5dN7GhocsEB6Br6XaPfotDA8EuCi5AZBrvp",
  "key23": "4CwfUJVtADR6EZSiPLn1BgvNPgnfbo9kA3vkMNBgC42pJNLrCJw2wxzca6Yc3fdWjdHuSTA4vky4tbWhCVqmvkNj",
  "key24": "22dJ5MZusu2wGanPYgnufftMTqYKEzgkKL1jUgDdr4uZCKNLQh1zBUVgnAJ8NhNb3uFPobGfhNAhbfGVhL2bxCeQ",
  "key25": "2GpmSS3GyzQKjeJvHpbX57Ry9i6HSHQMwqWUbC5whJbSBQVXRSRm3pGWnCcSDSAiDhKY8dmN8p9D2mBLLmcwGhuG",
  "key26": "5iuE6qo9qcSjTQ9xpZ7AxoQmvNfQUftCSXXtp6vYk2hnbEij2HQyLW6DQRutBurV6f7aM4iWQFwajbQcrNfKJhiJ",
  "key27": "429eruwnWVi97nHeJ1cLXLXHni6fwLDaSEsedMagFLvgQgPmC2mau3i9PZrRtt5j4i7bRV1zswimehJng9NgTGEr",
  "key28": "4fTzyVRWkzU97KKaMUZ2gfvShh7XVRT15Eznh2FYnqg4BU4siVGF5oTvicPUZJ3XMjveKwg6DPcVE1exaG8xCZww"
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
