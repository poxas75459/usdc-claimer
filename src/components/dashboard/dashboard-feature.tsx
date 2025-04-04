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
    "5QK2jNtcEj2ZfJfEstSahHczhvKo4SzunX7LjRwD9LjLnKTSj1Gw1BwrrRfafMcNpmtjULbBq6HeDZfGEGTkjVcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jv1syzKeRgYpRTDQgqGRmcuCqB68EuJs1tHbWW9PrzjkyEc3YxyUNTzixjgkgG5jFFFDf5qDafZG9pnCVt53Z2K",
  "key1": "3dc2DLD9nZ49JpGHs8enB1cha3HWRVKiZGoaN8vye7zVJFb4hSW2GzXUVvxEfCVG7ckv1MTkJfYV2MHDcDHX1oQp",
  "key2": "2hvHZZzRFuG9N2T8AhTD1bXkFsxDnrnpX7efZU9i52TQsahrjLXNyucKLzdWQJ5x9ELBgDjmLNR5EfoygQuxaAFo",
  "key3": "Hp8AqnbntA46wFSttx4e5qeLXLAuxMp8eVdSzUsGdXSSTLffCvU419w3bg5pJTQ1v9TshQuLAKm74tHxdbujiKz",
  "key4": "5okGFeDJeiENRsxLa1sv1PH2DcmQbNj91Stb3rLJMDcP4iGkBCeUyzmZpqK6joGq7ugrb1JNorK3nWKV74es1uVo",
  "key5": "4tZNfiMenPudtuEn7wyBYE8EWgfPKy6eA6UXMjNwqRSXJgsnWb7UEBwGGmJkP5AzbKJ57Cjd9xLtAZqFWu3zuJHV",
  "key6": "45yjNk4RhkmEBaPtZZLfaYH9etYbWSoztMyJb5hnXsdj7LZuixxT5k5oG6Bum7g9rZAwqArGWwkhaX6v4BSYYdwQ",
  "key7": "5J5XMMZTazv7rujVPftJ1C15E1jsTXTMiys9qGJLobX7wAsjMKmMVvKSLdENKNs2aUcm1cNMJsaBwHV1tGaaGPQm",
  "key8": "5xrKE2bytCkS3eusi95Fef1wVPTQAE8B9NABkRvTa8zoPvdLaMZqXRNv92ZLrjsLKHWA4aLmpNrpaYXgpxagoqG8",
  "key9": "2cVBcKtJ7XEKN2gVWwjbUuhpoz9wgeqxhntMzPWVx6AnKTvvtw2VxSbjoPBFZoxaZZmbfwRLrSd7GPJCeaQqjE5x",
  "key10": "5fXqaSc95Cy4bjM8DSew2wwFaUWrnSo6qziFbbRYnzbdEZ8rTqurPJwWBecp7vAJRpdbuaGHKZTjFa83m3rYAN3y",
  "key11": "5HB6JHi4mXcfL3VkyxtCGuukq3Y96eLHwQiXA4323NRgGi6A8G6duQiuHhbzJxU7Gqr2L4YVj2CupDDfUrJpKnPo",
  "key12": "3GZyY2tUbC9o3MvUJuBfXUK8WGdSTDuD1vMFHjWB4GuLBtjWnPgMrA5PpuNGM2hKkoqBUXhP8B1KMCMdYRjySwM7",
  "key13": "3vatL78c1bHS1g4dJjU4SN85gia9mnR72gZKuoge6ouDuipufsCKsWv6UMQZK3QEnExv992yH6TNoDEbBpUQM1Dj",
  "key14": "5VGBrryK9gX3d62JsCmVK6h9Q13VUQzuwb4Ngqg9K4qS2tW867kXne4ZRPnLjGMNNfwwFJaDgy1XSiqao2AcuTkJ",
  "key15": "4grs5zTdQvDk3VT5mT1qrWR1PcScXMo7rRsatqXK1GLNN7o8K6uWX5PcX91QiprXwzf9o6mKfteVMNHWrHitZ33a",
  "key16": "ySzgLs74aPLqAZWLNKJArJYGh1zDMg1tNLL9zKqP1x7W8ZWvbLVii6i1LoxLhAPkbW7X2FhMQawEnqEZfQChvv9",
  "key17": "2DKgC7puXCgMDL7GUmx4kQvSaZ7dLb8iksBP5vTD9XyMiEMYXuDdXeUwNqKZEdRH2RjyQ84pZTzh2Qg2RTiJebFY",
  "key18": "3zF6Y1CexcFs2jspnzPf6MdASvWSu55tW1XVKWBs4PiQKQoEV9a6hYY5hLzSgeQYH6LdwH23U47uVHjvfW8hFsjx",
  "key19": "28XnE6RuDx83hrzyXr9XvrMt3tppZvUvkSrK7x1Hx6ZRaj8YLJ3J7cQ9sbubXbmMhzCT4G8vvmVtFurBNCjjjqvJ",
  "key20": "5GvBu4FZqLKZSJNP3hUhE6R1m3Q2byGyQpftEAh6v6gNG6PvkGFjkMbqzm7qxnpbMfddaiVVZDehydg57wU2i8Cp",
  "key21": "idmbapa2spWooaZLgxMm2hDMqWYe8ZVVcEZ1xCFoEaLrxW3JX4v87CqdkP32puAVPNQ6GSskZNcx1fjt2WptZzf",
  "key22": "eJ8UmEqtyFQpaVdYq4JrXekY2Xw7ho3xAEtxQchcaKCCnc5v1cSiVARP5cdLYtakciTgwEKTFYjEU6BNgEaHjRx",
  "key23": "5pwajxMgvUJatNHyGifVwKSL9rvxadsF2bS8KuqnPpkVfALUrropTvQknNY8Zfh3xCjYTcHuxhTtvt5Ja4KtvaSo",
  "key24": "2SiTMRAXjbt2XE87V4khBcL65piaHN82ZRSEZ5HxtYWvDaJXmUBVQMza8c7p32jT7TXKRwmaz8TymgMg5sJCD5aW",
  "key25": "5MqaVoiKYG2enDUt3uSiZHRsLWTRpZJ4YXCVDJdMLnney3dTQZrgT6XpY7YETgEiFg9ZGXFxXkMxdhF9KaS56BBr",
  "key26": "4qSt3Fu33sAQUbezhrDupf7RwJshDY3EjGD5GD86hehh2Zrvuv7kDnhuzxEbJ3Ag7VRZxXXxwX4TU6ermGcHY8tF",
  "key27": "4imCu8NQd6REoRhQyeZXnoNR49Zpr29jfaZngkSM5tXsk1he3vg4BBfW8Umgyc5qiVZs1zPTcBBBzd19sNN7CopW",
  "key28": "Kah1YfuRQtQMaoV3p8A2SKccAPHkgWbu4gCo9un8YQD8vG8UeAqGdwQA8SSaUuyW1WhA6Q5fNfLZept85sz2mVx",
  "key29": "5CCAuNiGDExtoarWhFStE3AzmtvyUTCHMAU79CTxTp3KDTAYCqY1JhJ2waoJxX9hAhTWyeCbn6gkFeRCiecm5AcX",
  "key30": "5bbBrzLttPEkYwusCvZhHvXWUTci8UEGvFXKBwzqxS1F7qtVfH8gNMzmFJQwWSXHFQC3LPZya13NFgpUe8Ftpfma",
  "key31": "3xxJiK1oYfVPSJMxgX7vVqZiz2r5ERg1JxEoZ3yTQnXBbQkfSSWEma2uANdprP6X7fKVb629EZmNxtGkbt4TUDGs",
  "key32": "3YU5BPAbbjDPzwkeN4GtMFSrTBeiAsvVjxKg7vLPSDHNkyMBBvEZK4DUzHewkjGcgN9ch9MVef3B3Xmnfh1PwwDm",
  "key33": "3pVKQHHmH69MaVmxUEnU5kPuEn9ApA6Fr4515BzSxAQRH7gZZMX1Y5gw9i72WPx3SR8c9YPsveeppgDvemupVZsd",
  "key34": "5iqpvu8PDUUEe5NNS2kUUWAHoFEswh2p85oAEqgVa41zrmW3mGaDEzz1KUdTLiVbWNPf2jwU2Vm5eVg8mPJhLkvx",
  "key35": "4mH3SXjq5643HBcH7UJxEkJjduZYs1k3g9gUJwY3gP29KxaLu2WPM8cGmxHp1wtMwzq8goD8ANp5qk3FUesexr5X",
  "key36": "2ytXMCYAhgmUjdtk3ai3hGut57UFUMLJ8MLysPhV11tpqUAb3e4JaYMMVcH91FnEYooF6XDjmwBTAhwcvmqD242c",
  "key37": "2fWPes5oiauZxaXNod1eWmkebvJoJDmqrxyzEDgy68VonLSZHjPKWSzfiyAuKq4poD1dz6RaW28JCSW7ur5x52WA",
  "key38": "48EeyoxTF6JSdeaRaDSbo9GbwYZvQLJq8PVJDxLwhc6mnteBHGxcivswaSsHnd391cFywCYaZ3Co4ecSikiXk4E7",
  "key39": "4S9N4xaSVmH9ntpG9UhSLCS74dkseKAPaBHDSHvuJ5p8nr3HnsYrKDy1BbZ1kh6PPV89QApuvuUS4jXgN7ANDb8N",
  "key40": "4zjHJBCdicM7Gap94xoLWPQvrqTEr8HAceTqMCyVF4r93EH2mxoZknwfYJ4PxD1TcHdmtxg7WoRVw5zMNWcrqhww",
  "key41": "2k8DEHAxZtHidNpKUZfwDMJeRWLYKLQeYxoXeEoxGiUtC3y4sT6KyBS6qNGeLfw7uZoFNofs9TZER792NHEUDGLN"
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
