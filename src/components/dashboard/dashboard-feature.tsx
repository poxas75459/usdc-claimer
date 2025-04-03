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
    "5jwpXUQuKpnhD6o5PqYEi2ZG33fygETk7DsZRcKEvqcFby3qhawyDrC6X1UA6eNuoVoUe6aA3wBfVbyPcfUHF7LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K3fbkVqn8XcT4ZXhvnpAQGYCXPMdRee4rhFMB8c5xu8zVebjMw6dtyCHf8tDn8tnk4K5LnCNPK15Z9532XxMv4Y",
  "key1": "2oMMq56rhnCksdPKdFiTaYdbkcCGutLmjo78nb2rGY83gE8awJLmpQFTTfchVYgrjsgD8J4HoQMsK69DB96tZErA",
  "key2": "27mJ3iwAg7FziLgzdsGSSruQmdP1P97g4zn1yg7zMNiWRfV7GpQp9PhqAPgVnoF63fG7pDc1CsQbEbqtC7SMcwqt",
  "key3": "3yXjJt6mFKmxwm5hmT1QjyZkKE8Be3v7R518JC5296M6o3tY1t2rBH6RQaq5wbQ7gg8sjAMPi6KimpDBKNZNJGL4",
  "key4": "ZnzGvnsNAWu6L3WQr3M9LuuhUFuHbJvDejCT6xMJVqQmrcc4fsG1TmZFkpVyo2aGARyCLWxmAQpLcpgqLk6YvSo",
  "key5": "5yA8GjrSdsaPvoZs5dzyW1AsweyQ1mJSRzZ86DmX7UmyB8b6wE8eAc1HwKSmDeHjSnsXTLCCAxTXMFGFFK5eF2m8",
  "key6": "4XPbCMWtTXCXbs3NxMHHNnGteGSBxndwkBBq9L7zdoB6c6DEYXf1BbFh7niWU6o9SV9Sx83gm5uedP2G56qnhyLr",
  "key7": "aCYFFTQ1U3RBg1jxPT6RgMLR5G5V5eipPwDpkyegZ2fwM8c7rUWMERTEp6Kgv11hodZbkm82W4CHY45h1UDPYNA",
  "key8": "3QPTPPqZZkojRcpXx86LXav2fURJKXiTuEGN9fpuk3DogMJPW8iDzLA4Brg9XmSqRncsjCJTk2ASExf8yViPbS2L",
  "key9": "48wbRjPxzKdrrDXkZe5c7ZacR12eNiTtys45q7vPkVjuyqsovqfHr5URCj3QqBVKKU4QErYbd54vShVk4YVxKyTL",
  "key10": "2WZXB8uujqajfLwaRo6K2dvvacyGXRFWugnTYYgA3xokq5moDW6NGLvWr5iXAkv6EkVRP7Z9Kkz8HEGLzGrCc7ng",
  "key11": "3crfrVycKAbB3xN7PWhWvFH3ojM1iqHqcdjyaEcjGTBQBseF3Bu6cMFVydqxM33LVcFpFtquQSAqbz9YBXtN5BbZ",
  "key12": "zhh3zJkXUDz6v3bHmtmAArZhWUhtjd2LSc3JCjdaLgaJSFMLXjCi2i5P9gb9kwuRPQqQYiJxe3zG8gcn7tc4fTo",
  "key13": "3m8ZLRtyB63Fwcg3JLLQWyNJCQ5QkqJKoQB7pTYy3C8FGhSFjuG29R3djmn9vjSmQWTBNYaN2gVpUrfxEDnoapTR",
  "key14": "24MQJXVdo3QciRMXW1NRdkgszq1TivXE6t6YhVG2ep8o6rmPu4KNeK6GVA7U92phDx5piKWrrF2hatjAmuyAMJEA",
  "key15": "3tWqbnx8BKzvHVVn7xQXzjaGX7JgXbVuAZPgwg4ihec9tBeswF4YXH97dgWnmNRaahYt2Dhc4zM2Ld7xZidaw7hx",
  "key16": "4SwVazgPepU5wxKGCFT2eKqj4NZybuHE2KD9ehMRQKSx7Wy3CTWEzJeanMpDauAaqtNS3uqTpSpZbN4g3SLs79Dt",
  "key17": "4pCHVakah5y3f6woiZwAbwHKYuoZh9q5Pzm1WirtVRdQYJy1Y3VYNYdeGHvu2guhyBZi6ExtWLhnaWb1pNhqcwxE",
  "key18": "cQTJtu5epr3uGfZWcvQKf86j6DYA5zDTo9qzLcnxdHG5NorDvXELB18ZmwfL6tF2nsDHsYwkd6zHDBB17sAGVB8",
  "key19": "3SCuBKmREkaWJakXsiVrejGhNBz2btkqVCLFpSBVkjsFF5m4EdHMnuE5t6TgUnXEVbQYbJDNrRJ7Ry5YD4hXEHCs",
  "key20": "4FUGgg8XmgCKkjQKpFAHJgTyBHFjX6KfLySJX2hN5YCGsJoLyXW7ypFR5Lj8MrCZwQRaJVcgokJxFCmoW77XLyiq",
  "key21": "gudgCgMH8PcUmvpybyX8xXFwu3SZS5ttMkCNbzbig2AptGgWV6ysEesQF4SVHtTdXpt7xY5B3tNMh2ccapPG63Q",
  "key22": "4R4p997ezeM2RgcnWcFmzbbKYQRQWmRDDvAzPP1bRUXdyp4hpdqbq56N6Cj7bj3e4FbqyP2MnxFdfLnkkaCCbpPJ",
  "key23": "4wM5nj8W4nF26vMDvWRNHgzqZwGVZsLTfPbw1gzGBn1k7VodjGcUwBpDdnRdLKMdVJ7oJWKQQ9JFQtK91FV9QZsS",
  "key24": "4A1TAPxioJkBx3xtvC33inRzA1ecAyZ4gX2WDA8ZNCt954Po4MhnMb7C9jx97PRXKztNL9johoqvapB6zsqMGHNg",
  "key25": "5a6pgAFiPchM1yF5fNKsjJeStuHGgeBWVkpCYUSRzNaUSp1XsHVGZX7oFNDUc5YFZroxm8m7noqzHDQyYrgAWAx6",
  "key26": "8TmFohytdPM13vNsesa285f3pLNmHCSm4VzwuoBnbW1hopoqML94x4n9S1nYcK69oP1ddjmXgeVTffTn7EdFRGG",
  "key27": "3M3gUUAheGahq7PbFLxMp2eQq6iKTT6uHJgSt7615AMWhDigMpnYTiGDEzeah8et3d84yf3f4Z2d5bc2HFdgBEQU",
  "key28": "EQupYVft6FkyzfmvnZroCt9CN91KmkRnXuGBSmr8x7NeA9bXJi9EPLPRc81xireYkwhCL5wxmua7Yu5HrSYiqyN",
  "key29": "4imXb1rew5eA8ordEQGSwAkgPFDea1aHmP28Bg6XfPgnGikkLfWoqnihsNdCCCirQKGhaEjV1736bCJgrijVx8W9",
  "key30": "3MrdN11EW81o7c96zfWyhvWR32DNB69kJ29XJZuYfYud52kocJTK7Xy2MaFAj7S7knhh6dUoiix8G4R3mSpPVitc",
  "key31": "4NKA9jbeQsAsM7BJwqXHELJsmCfTVJitgAk6HXmFpszySxkoQ4YVhMZN63L7ESqwWdFDdP2r2ZVpk7GE3xkYKdAu",
  "key32": "5MGNP31Gbdy4JR921Zp3S42TskAGAhXTXBFBbKqetgWA2hvVB5Vc6SDEBzJJVQnRiPUFCJDqVasuYg9N8ZuW6neX",
  "key33": "25CyDFs1wCLzhCGQkqsc6x5pFkQgYqvbEGcKPuDy4sCi4zVAAzbECwbu32Y4tNbpDzYVV365BeDq8SYATx5gKdrz",
  "key34": "493NZQVPSPz64aJxJWwbrf1JtNqwsb3enxHNsWG4uUcVsejZ4Z3Tyaaxayz6yZnFWVGdRNdMQeTKfR3MuR1Mn9ue",
  "key35": "2DQvGvVj8B4uGgWAG3LNHJX2WDyiMB523XhKF25R5UEnrDd8ZH6nS2oDumjnDhco8PGTmpizJduUVidV5KxnRQT6",
  "key36": "4uYjyj2gRqaUAe5mR9m566quZygiTfw4yCroyb1fkDb5C2WNM9nK5j5Qxpmx6s9oLaC1qUmibLRuK2wPK5P7zvQU",
  "key37": "4dUSgyYK9J66c5MsB6frxmEcqUD1iwKmnPUKmWMQW6QcfXCybFXd2GHUou5Hkm728HAkWRwfuspQgvHeXETecK5X",
  "key38": "2W2vESGLzkuKXv6JRbfh3W9L5PxMQc1eMLV7cKygrHM4AKJvCsjKCi15PR8aZUugKxJJv7gzDpi4gSYtfUSQFbXb",
  "key39": "2dy5NFsj1ZNFxMMZVMXvMARGhrXm13nkq5a5FzmFZEhD4vuvEAnEL2ypvvSeGjPohUBkp6fARPVeh3BQMuLfjVTw",
  "key40": "5dAF4TzPhMykxYSU5EfSgrbzhbUgLVokboBgA1ZvWueCuX8BmgQ3csfWX3zoH178CUV4vtmWGJitkBNs7gSoEaJW",
  "key41": "5uQtwNj8mihHUFa4dz62EyZmmCb1ssckKMQyyJZpPeLzCjgTfm1zK4X1SRridHdardaHd2WyXbsBDUa7dhuttpwD",
  "key42": "oggnoQEX4UpdHPSGZPVTLBNWfSKXC9rjuYXek1kuXi6Co83iUfDYpq9XRzRSd7iHT4WeoPU2tgNBNXb1K93mgAQ",
  "key43": "5PGytDxBf6tvLsYLEaCaex4vUHziSFhfboXgQzEgB9VFm7Dw7hWvZrMDzVXvKbcmujbNf2rJLNLybtSPMLpGp6t8"
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
