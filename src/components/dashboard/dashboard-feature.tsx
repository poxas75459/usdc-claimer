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
    "55AxnbMLBRQULPrB3tjAeqWHWUme9WWqSQqaxgWtKANdcL3TGBdPW3SE9KkGpVKvVdN2L64yp8iMEnv8PxdXsguS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NcPVB17NAbtNumGmpqXnjM7hJGzCuE6TWF35Tfwn9UsHJH3iTSqqgivFAbPjjbXycnCXYWr9DSUiuwhxoVi2824",
  "key1": "3j3rRPzy4MEcpjN7xHp49BG8xNxrqUZuEDvtiokSqvUBG4mAv6QRrxtjY5r1KczN8hGUccmRi8k52LqczGmp8C5z",
  "key2": "4vjLjnZPMT9h8ZKbCag2DaFUg9py3TN2eZ1132BuaN9nMJEHfP2wG8YKWB94sSVGR5DTcDMwUdN7DBUCGYNRVwVc",
  "key3": "C5YU8Ps2L6HgYfj6Zq3YRbV8cpMVrTE3NagaM53CgjDqdUZHVSXpA4AuRe9hwUUtaM5p8sxzLfoXMddfnzqme32",
  "key4": "ijznKp3ntGH8CHYXZPbLdGeTwiznScfiRogJwxfSEGHDY9mgDjRhuvFoQc8Zt3TrUSbpBVSocB2Qros52gmgNA5",
  "key5": "5evUvwD91NZW1wTkcjbtSTZv9bUmcmFdwUeCZYaMy69X2h7Wgd6a4MDV2PA8A9u2Yye49xhBU3hkiUxhX5L48xm7",
  "key6": "NHBuwsHGQZiUaVcPckBqTs6rVRnSpDmBqg8chAhZYt8MnqYEt2Kt5zCEmCjmgHqgc81b9jnYhKi4m1GKbb1ZX2C",
  "key7": "4BQqNp9waU9zZv3BVgjNyR5Wqta2LvBfdvx5trBtLxtqw3XzMH8pAM4myMkPJkunEsCgnoBdzrTu9UUmuvvPvjuy",
  "key8": "4ex7spRa2ezHVQNCWgvdNEd6FDsqzrM6NBpBiMD5S7tfJR4f1zbYAHibZaQ9EvoD8rwBWF8F38ddHSPMpAf24N9w",
  "key9": "4kT5JRyifWH3djawoWcz6kYyDkckkP56kqtbBSb6b3td415WcKVzeagruKKUCbkTX2JvC3jNrjFLEYCuemA3d5u1",
  "key10": "3fgWtVvgcXBR7b3W9KFcz7tc1gpR6NFsVct4VQpR1H83J8HS3fiteuihABCVB4KxrGaQTRB1wYUspEncrQX9hPgR",
  "key11": "27BjGTCzWa398cKWmSVExPGsHWuo8Htyx52utUC29gXgLEhcYtqQyRo549f4sSaKBBqPzf7WCiRWYN8znqmzvCpQ",
  "key12": "5dD4Syo58WBVinaXiY4KzSiYSnMsJNfqbfyZvyRVzdWszc12LRAgWtVR8FoHNcD2EWnocUFPbaQXxA8HXbA4pURZ",
  "key13": "22wMGPGG5GpNd1k286grQnHkKyCmYjrvQBkbniqfVvNRTgdCPJBp8z71A1MPgDq63kX7fiTKhcVCVx3kd3E6RZGA",
  "key14": "5fTnSBLPDfMzbwB5q8WqByiUDN5ugpSZGUM2uFqsJXWyVQLXBKBef7uvSanY5QeJdGftu6sw1znPnjZDVXP6QZj6",
  "key15": "4eamLkdTSUNCDTP7rPoCfwN77izuhDENNEaXV3DEiYBTzpqAVu1rMWVhfqw8Vv52U9Rcc9F1VQtQFwJnyFWVi9t3",
  "key16": "fjzh8EdHCHieWgqRDfzcFMebm87r19Sy2uGAHtgcQD2ydEhGw5NgVfwxxRVihcQRTSighWppCYf1km2PDLPyghD",
  "key17": "2kyVnbRFWiWbyQs1BYEwmtH75nWn2rowmdctsbVSqSpZhkF14RENBLjHZi8GW3zoekmqUTiLYE7wsNWY9YNMMoKV",
  "key18": "63tSnjfhj4vhSQRE5msi7HeD6AY3i13t1voiAhaeFjEYm1PY9whG4gitj73xqiZuH2su7jUz8oW8NuRrAJ2hpxan",
  "key19": "2DoMpjNwaoPubxFC3Qzmg7YmuxJ9BxaahMWTRTjJVWGH4VbQEwFPSmYpA1BD1c4sMCLHfHSjL6TMUGCaSMZz7xV3",
  "key20": "4d3fKiUu4oghgPz5i4U2pTatYLLbirAT4TjRUGrRGBAkJ1c3ZwcRfTUh8kkmJRUkM73qSnLz4yUVbWN2FoATjUWk",
  "key21": "4t4DW7sg9Lmn6Y5CdbBw14Nas7SmDLruxX4AWqDT6WT6zyDnSe3Pai7nR9tQ9Lh7qYBxCz6fxaYv8TmyvBEbUzod",
  "key22": "51KopT819iVY7TJ22tDsoZdvS99rFrVypBLCrtg5tNNryNQuAX8gShLP8Nueb4bbBckH7n5QGkpG27DVjMv1dYJ5",
  "key23": "2XyZWvfjUoWqAF9CUCgFZi8e3Pi83yJJKApF836DWiRU4bDYGWLz4sREXgSrm28rD7M3DLtx1Ksoz2F5T2i9eLSp",
  "key24": "332xJ7gwBC19PehtZHKpAiCm4Asa3gTw7tZaRy4VoEviD6rjmgFQ7uF4zJi6rzGoDfoyybQf1C7d84NrCdQBRNVu",
  "key25": "q2pmAY2QFKbT6WFhkUJCYhuVSngxEWM89maDPxV9zPMurjqjvwEHULeq1hGM3fgURXJufJ71qGcev36TxxQ9axj",
  "key26": "4GZeUpQng7vtvZ3ZnzyndkaEvBP4oYQb5H7BAqFzcZpGEBDzBAgeNUFwbvt3ZM8FrZWwzRcAK7fH7basnkYe2GKn",
  "key27": "3amc1T74LVQZUYm79NHBy8PH5iB7MXa6NMtG8VMvDsKCWT4vktoCgJ6JLagHPJJFhzcTmnaCSE443FL2g2XuSX4B",
  "key28": "3DtWwxxp6npeXPsuEz9sT9j1DyouY2KTNKXMgeGoZhiSzrvgHhVPi5KacuJqSWUwJpj14LNF96CC9hyxcWtcpPvb",
  "key29": "3U4sW7Lrr9bm4NMtzmwVK1X8DSro12Bi4FMnGUBEPwnF2hAE6PNXGdkaNvmSRe6JZSDBikbzzDvaBnnsrxMvq5ka",
  "key30": "5bCNn4J2aM71LSTUxY6qPMB3nNLASvRaecsp3MJg5qw8ybQYe53k7giR8Df4s8ooa2qucsr3rNYiEaRax5sViA73",
  "key31": "2x9t6uce6hozSyHxPUHSipVDWKVHqB83D7XuieeRSFjfhy6SGotjBiyF7vxgThoVXWw5jUyDRoHNYxHa8drGWiu8",
  "key32": "4nWYnP7UgkxpMSN3mME4Ag89rMsuGthEGNoChxoxYr1pvUe7dAkfXPjvG4YdtPrvzbTSJeEi3k8XtUg6e7BHFq9o",
  "key33": "FQTaJxg1Wy1PTXnFznZPiZyhkRAW6ArQ8cjqQB7pWxXiF2GLieYs6vjKb2AuC6tvVHgxj9KZ1xhDv5wSuc43iyT",
  "key34": "377MNb75whaWn8GWGVLDPEna4fn7nwzXdNd2sF5jg7pd7q4K7EubtekBP48mJoWeXjFXmNt7SZUBhHoNDzyStt1u",
  "key35": "3K8psftT4ddM4WBvP4UMTV4hXraRJ2eaHce4UFxd2uPi4s41jCTRSf13KsFAAjvFbbxF6e3qjDcUPe2ixCrTvkyC",
  "key36": "2Q7KY6YFWMtmex9Jv5GZvw4KppPXGckYexue9TzezNCAcZ1oyjAN4spb1sBWZFqgiHcoiMVYe7FxNSUHYH7SZNz8"
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
