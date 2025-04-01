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
    "5sNBXwfbMGe5HTk6LA9eCdFsDLVux3cMUpb3fkmmyZ7WetNWWQxNERRypTnJnkdYUVvSFuyRmU3r5bGkofJvCW2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sA7mYWKyZKRiUc7YBqMPCEpP2wg58ENt4xkVvCvapqV1t5bPjXbPqH51wv2GuQ52xsH9kpsbw3SEPQzmD3P42QD",
  "key1": "44v5fu7PapoquekW1XtZaUU9L5CMVPpUinuKLaQ7axBXLjALztU8z36PrmbvavnJtPY71Dj8eXAuXwx584iFS3u2",
  "key2": "2HbRpUwpuhDo9oMHHUnxnohkhcUzt8PbicPTQR38rRQm1A2fVTUBiBJYPFPJN7GbSg7xkDePWzb7bZVeBrCxHsSs",
  "key3": "2PvcAPcTS9XUr1PRK2kiH9GQUaYnuqLEsUxyA76rEPLWa3U8nW6Q4T6yzhWLQfWecrRzTMZQT7D9GD5usTcws6dH",
  "key4": "3XLKhs137pdsFaeJHkbWpirFVmLA5qXYRe64W71v5WSRWLwxBqqAoz4SsSEQY1sL9xWUz31YrrmswTY3zz41rchn",
  "key5": "2DWjjJkqLt8LvCyTueZj6QjtKyJFtSZbQUbs4QRKgt3nsybVKG3jNd239mAqJUhE4xMVP6QYvAo8m4ZXhCuG1woU",
  "key6": "FksfFqBiTkT3y3RNqV72t1aGfnxGJBrJRZYxQMAQgK5Y3FRfHU5QY9PFDct85yBoQcJXRYhuiNTbqvKThYgUmjh",
  "key7": "43amHnECgMFVAK5nrgAwa2fwzZHDwC9jtPGyX4BupxGqouks7KY7AdKmhMcDscANVYXYxsFCVGpHxrxFSptABvP8",
  "key8": "HWtLoMejVA8BY7nBg3GyiY8RSmHGF9dUeBbgbmsmpKXPosjzRzyq6dH5fstYx48Q6ZEg4bsLeGDj1R3EMdmbiUm",
  "key9": "2enMsuiYfKViewh8X2MUoFEGvLdA3EPYGBgsnvYbo32DPQnwRyqFYtUC478fKAZXcVr7HfmVjXhGbXkk3rhZpa96",
  "key10": "auYpAEiKd8JpcfAzaXBz6ztkKDBxPz1n8xkSfp7hHCG4HeeH9xWS4bPGjTbKpNdMKbKFttizk4paf7Y64hd3HTQ",
  "key11": "4BHxLY8vfhN5aqqbHJAjzYh9Vwj5GWtrzSjrjqrX4r2wW2RXXHPeszeWd5R1Z1ER8WcfSBigGTgT5uuCaH2BpCym",
  "key12": "45qPBV5Mb4T8Fc8MRQ6GYfoHz1YfY5EUkWr8BFZQYHMZ7aAcmKLFNEqKfa9JYRA5mXYFM4wRRxcJdX8KbPzBAPws",
  "key13": "2MXbK3cEipNTPtnNGkdC65gw6qjkR2xCk7hHnGtzv34DzCkNuCubqK9GXPm1iWSPYUwGNQ7hWhMoG9uezRPweyRd",
  "key14": "2KTVkNpb4hAD8fK5CcM7N7gKLX7aqcPWqzZwdPpD4bCZJWz6J4daWZEkM1WK1Mp8ybqSAMAjJvWSNeRAiJ4dVbM1",
  "key15": "ntfAShg4jucsCJoMeBBWpbqrEmwhMEvAse2479T6jMh2UTm7xYebbgmzyjNH5bsPQAp3FQNoy5zaKfPcdeHWbaJ",
  "key16": "3oEzUqGdsU4hRkCzv1yozkPGmcyc1q1Zb52R9B8tKNjfWrHMv5BUCGUWvT2ZJxbqL3nnEzRAJt3dB3Tu7HS1jSVf",
  "key17": "3HQm7DmGWEGgK8iZigkft8NjJAVzft4QoBm8XPaDys5c165yXirmXZb236oBKCvSyYT49D7M7pHiN9a5AAVFczmp",
  "key18": "47ejnwncqFTVJ46uktqWgt9gQe6fJ8j3FDouQrBvqi5sruVVVuHjXCTnaXR3H7hEfi8JeDvNtGmWrevN1iXc4rdi",
  "key19": "2zLBdUTCvFkie5YtAx99NwSvbMEJjcR9xaD18TJNe6eJo9UUsnCjkcF8JnB14CL3oRmFyb6Wu3VrS6A1kbnb1rL4",
  "key20": "4QzK9aBPjVcZ7Te5nJpKPvYo4BqC7pHPtnc5wFhXhqGEzoZD1pg1BEUHD5kh3VC8AxFAwz1jyDtv1eTHbKoSh7yG",
  "key21": "52Tnneigd7YvnmmUaKEfVWFcueVqaBBvTvygciwWpYpWWHz8KDNiKCmDonKPRuZiaNqCnkjFDoJvmf9CZnLQyi82",
  "key22": "363N8nMJYGxPEB5LNTqBtLRZgza6FTT4G6EQGnL1XjhPg2nLoZTYXrEoMuZn2dH2xf2qrmy9HTPd495NrreCRq3q",
  "key23": "2jpAVsjMWFXeQpY4bcoTz3qRqrWbBiRoepgyPKEfdhWuwePC7T37gp3SquNwTY2sxk6rfAa73kMhxEHVPSWcptps",
  "key24": "5bE7r9tkTiw2Fyai35FyHCfvg641EDYUbJdgWJuxTphtPvZSS1KcwCVuwB92RvTpbFknTxYBjLZ7vqLV5QaH33yH",
  "key25": "5cZjsYKanYCvh3nKFeqxpDdmBpFbHEiSfv52nQ4sj9ujx39B7QciEX5sqMg8u61MvYruxMLMxhwM6KfYzS9gdA77",
  "key26": "7Mdtj9WDNmEaf7Gg5FHi1r895D6DrLZ4Mt3irpnxN6czMRJPGMZ72TjEJMuRo59E5tsY1xqF2uPrAMRPVo2DLWY",
  "key27": "3A2xTJdLT1MaQcoM56wtbjWpiCC3T9Xsh1RzT4MNT3KR4SLXMh6PN8XSVbQDEgJj5B1Wz6d6iNvSbdcTWpZeKiPD",
  "key28": "3xrPu8LcJYGGMRdKsMGeLaDiwUUsUTGvutktEAD6PHUBqeecgSDE5SrCUvPB14JHeL74seEfnJwnwkaGDDCpGCKK",
  "key29": "tdo8nDGoLZEnt9wVJ1tievoAYeBNarKV3bWvgGer5zhwE7hYBgaoz54V6Cz6tLWT4unDDmjfmTYJDLhGeu61V16",
  "key30": "2uh9X4cBvzbZN1dtpGrrVR8ffzNfbxjK6paASEyWsv6KaE4rKnkXTPsGPGCdaenUTkpB4ppiJZHt7JBibK5jrpLx",
  "key31": "5KGywUej612uFQUS52EL2cB5dShFdqeKYowVbpV3ARpm2dtJLir6EJ7uYSyFw4ijxT3dpitqKyZqeN848GjpWVMB",
  "key32": "5BQseA3EGWTEzjabWTrbX6tD4CYeoccnu1Jf68qFKC5PNqfiuM9sBg7hExQ3PbgsgkYNQGXjbqPCw6xHExBtPds6",
  "key33": "EK2DQGwjqogrCgynJw1PCWdShcXjVwFAyZqNEeXVPBaHA85xQp9NbMdbpjiupbUeNuKDu3hPuK4pKS7ZQZB6TFn",
  "key34": "hfHodA8hjfajEbwVJZgSU1sDkxGLBoKNGz8YWPzE6Vz9V6Nz77FKPVj6K2ZS3HVVp1x67i2k9cMZF1GsszJfbJe",
  "key35": "4MVnvQ6bg5Ect8wg62WmYFoZg3hzmc5GozFeHx6SnSsivnpaGhP84xWWjaucKKEf93jvBmtPeVspBQguXwgVxFAh",
  "key36": "41ddCeuwEc4dTLHYV9jTpMYuS15QekQpb2RX8dpf9XJ5CFRvvGpaA5EpyRf2ByS6qAXPVv45JG3ZyypFw652EmYc",
  "key37": "3fCqiYc9mrSop6kNJGbhiDdLQV1jy5WHCUXwgzLiFqTWjVpx1VoG4kFHFk5RfsvShJ9iBpJbhxVZr5HhGtZ1Lr7U",
  "key38": "4iPsovS6tmuCgSdNRNSL6b1pQw715GiQ8ue3HvDpjNyQ29BkwDjyowMYwZ6C45m8sTZvidK9YK6yCSH6ZENuZ49k",
  "key39": "35kAmhb5JStoAaE7hS8kSir3AB49uhEpMDkfomEsmfmvfm6j5fj3qzUXEpaipuEvCCqaQHdB2UErQhjzRv9R4iNT"
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
