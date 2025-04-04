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
    "539AZDFfYQNS7D2YdhS7R96DwD32udjTKemSKGCmghnT4PmLwdaABNcoxPF8pd26AwXC7HAhJrRtij3yVmzxjfRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dupYA2PF4fUwaRKVuXVVmqUabBaihByKUQjkksSYQMyjqp8y6g6SgS6REhYsRfkSkSJRYViNZ4gwr6VH1mXdfok",
  "key1": "57fUTGS2i2aVNT5pZ3aTDMCXjAubvVfTsNLfuWJ7cEzFmSUFU6c9KV6V6jCvtJgK9UndKceHm8Ro9Dg7jozn4Rm9",
  "key2": "RiPWQkUv6Bhxor8CFm3LyUUXnQZaRbS5hrAzhH65jrPLj9j1d6qX47NwaHdNL6fgCZQmZyYzPMTQrQmCPLpcHSA",
  "key3": "498SCYpQ13AaBcWY7tH2cHYo6GY8jsM6TipXKmEHSMj7fxAyjsy23LoST4nb3FSFCtwFzgTGMnLUvzrBnw8PZtDm",
  "key4": "MGosHtVTWzTLgRANvtdAL9kAnkG841hLnd9azwVCwHSAvwwdEinPbopkAhsKk8BSnay2azJFMo58Au51ABUJpCW",
  "key5": "5Vmn5K5iQJmbVnQh3LxBdYsK8dJ4LYmcsFMSECMU1R4SFts6bqVPyJf1nZQTkTCMcFGEqA7DnE3Rt5KwY1v6nCaj",
  "key6": "GDJSxoQrBPtjUP7VCUR6HQQqmdMv5HHbdYwWw92WPDwcALJJyqSRNAhfG5Lv1t6qWr2tgDQ4DVpxhiHZC76oYXn",
  "key7": "5qM7Y2YojZAQ8dhyEf2Zomjq486ASH1SsHWMfzUiWxDn6wKUWQXfKhub6s4kkXea6AdKeUU4fMZCLXKmniWvFHdt",
  "key8": "3nLvmybb7Xfe2CEe6VazH7RSb8nYYdLptpYoerCxzpCqnwSF36dxSMvjdjXPe2Zr2XB7V591vUT93vDWvU93w3AD",
  "key9": "aAdG3P8CxpHPzzFpuLnjeyqv7Yv6gttvfS2AzWZQpXQXYaHexhqG3Q1QgZ8Fa3w2q17t4pd4fqSoegeGk9LdsqK",
  "key10": "dF23JXdqDoACwVnzL1HUXhWswZUxttB8qaejxEFFQr7LHvHr71vM3MNvdGC6LJC7DNcdFVG6exdrtiJnDZ2M4Q8",
  "key11": "42hNzE5VXfEDAsteF9D9gVwTpNJQd2CeauJp8ubZyx1bAHajPTsXJzLSGw3Hx3TJxy4ybajB7VW7p3EvgTiKkdfM",
  "key12": "255pyWfCQcDZDrx8ndZVa5hAuG5xFde7XDAB2Ptsj4V7ubXRqHtwr4YzLnjwfpFayEDh2vFiBSdUjjrJW9VZrRNx",
  "key13": "2nAW5yjULunAaVXtoKh1yZ5tnv1u6mNPYRc4cWRq9j1wG5VmmVmtYUb3yW5dPzDkYGd1a1rCHmNgNYaL3BYmHabc",
  "key14": "xxYaP8HiNjTRRHAhuBp1mdCzUSCroyQuTDEikFhttS11uA5yWZcZ7d1ZbyqRtwVAhWd3DFPnGpwSU795J7U1Y7f",
  "key15": "2ediiijUXdnM35QLripCotHiEoAzSAE7n3uwssnqjeMVLvCj18VCq2r36AMwRoqjwiUPEkJo1bZhgo621nNVktRn",
  "key16": "5YVqFpx46Ef8W4itSZyLymt5bMuDSuv3k3xmcQfE3x2siDQF9Wsvb5gr26W1FZAA3a2WcZQkqEip3nasbM43zQ4V",
  "key17": "32FJUtXpbeWKccQeKGgSVRoejhNpSFhxHjvnUGPTAgL3j4JLe94eyXCnVeEMSWkimgxPjap7sALbnVa44Jv4EAqk",
  "key18": "Mb4hGXoxDeW9nMzSedK91cv2wjxBTWHoZf1y6jckYfRXfhL3eSkPASZC4sEUjJ4VFTizTFeiJMU8WLxajwZhubz",
  "key19": "5zTfK2wnUAsnAbJbHCmuEnzQqeU6UD67jZSaZYPfmJe1Av3X1gVW3UqGSEeRA6PY2BEyUACG8y46zhSAV81hthUW",
  "key20": "5RNPqSCoNWRD9REAzBBYLbfB7fegVCpHC2FsceDgqn8fYwFSPk2cmiA1RMZpQCrPgRoLqJPLNao26SPZ1vzAbcBV",
  "key21": "48KxNzqLn9K7WHCgWtaVmEVU64WnVMXL7NYc5Z7Go15ESEALKDTJe3M4xU3kJoTmefPRiLgDufrhhe2Swvi6UUdU",
  "key22": "37DAHWgsgYdA94PgGXj6EqRSJtFr7RHcdVUx6NBDxNTKG5USNJVPbVVSxbhmUxPTdPRNTiARNZbRYAQvwmQdTA5x",
  "key23": "3uXy1mcxKuDy1eF7yJbrdW52fUVcWPFt23K5gkzoykRHJDz8ALme18BFWkLx44Rfqc5Zwihnoyfcwa8XnbsmsACb",
  "key24": "DGGVZifK9RXuUShttDi4XxhUhBiSwGRKwVKZtpBYAaEbX8TjFkLnaBw15S3Jt9JFRk51DLnu7qz8FpeC1hexmoW",
  "key25": "2VeJpUFB4je5PWLUE7P31kz5e5Bz4XzgriCETYE7bvXEuygE1291iCTQa49D4bGyCW2YCHBy4CiUoU5sfM1a96Cr",
  "key26": "4t1AE83GwphS6DgMkZ3mKTfwjr5EgtBKD1LyZd3acr5ZhH67e3XNV2J3kqu5bo64ZHx2tUPAJRidhLs1st2Y1n1S",
  "key27": "3b54gun3ujS7hdkxRk7wETChG6yJs3AY4Y6hHGAA3bYusa32v7JKkN43D6DQ7PhccNJgYEKaUZtkR7aEDhngikuA",
  "key28": "43EUkdm94cwsiXbfPza2GroUYPNnfCh62XyU39o3yeJV1ucPfxjnHxZhMpop8N4GdP6jf2DCajg4JSN1SGa8QjjQ",
  "key29": "5CGsHtKKqbeywdpSX7mLA9Xxr9oujscGo5k7kai4H9Nt5A9eSN8WNmVFGL4to9NiRaRtcWTJiRSbqqiBEc4rgdsR",
  "key30": "5tLa1MBAStycAURPSsaheoFAx1kQAkVqv7F53vg4PBfE5ZH3SBgzzbKx9uNX6BkcrDXFmGfUgVqukm5JU7H4yLby",
  "key31": "4ypkNUahDhwRb24kvpesRaeYdDgQusbJQkN6XqScM311cQMhvVy1Gu2trGJeEUrjKyUoN7PiPHrS1czAAgBS4CPR",
  "key32": "3JrjsVoXbiFzngVrq6aTuVsbpXaBMfb3SzKwj36TQBmHvofLvYvJAhWcBtA4Lx6mYHq1LA5bbDpiFFuHGgbWTu3G",
  "key33": "CGH5ob8H7tyjyeWanH3TBoECtPfgNTfzssjK1LgmX6b3stvRPnamX27qBvZaCRTkC2eXHUcw3xZZ43puE6nzpeU",
  "key34": "2Mjf1fFdDr6nEzJ53cotF1XRrbv9ESpCkgWKTmUcef2ernR7cA8SVnauGeQ8Q7C6kx7PEmiJzqb9cXtVy91YMWMg",
  "key35": "4gTwZKuhHDZR3wivX9hhqFPRcKjiY2t37h3HGxcYSk2yxpmgYvZP3av2XR9P3Spfcwd54C5zh58VE2jSxgpRtaGt",
  "key36": "2taHrZmhh4Y947p5bB1mKaKSckUwFV6faN5GGcRFH53gfcrUT39oDcnsyM5jKcdSEK2xFgYnmk461ZeLP7pAXkq1",
  "key37": "Gu3tDqNJfNKBgmSjBauhg4swU3RjjPf19QkFcDSpBPo7hJewNXsFYCFjSa3F7nEbfhzaBAwiRkgGeZSAZdDXL8j",
  "key38": "CXuMgnaoEC2et8NvZ4cgJwW82vAz5aKp6faYWS3xFCwudDrYDKjW1AaobTcK3z3VF8t15NQ4TdzJ6p42qKQH4WM",
  "key39": "2gB5tzwktyZLqPUftVkhGBrnyB6jyiixCM1nD7FCFsceLBW1u7yFTCrd9K4TfpWyHASy1za2pDiGYRbnt8qGC4ce",
  "key40": "4f6NcffWNz9UVgbSES7oge72ooJf6rxZRYzctbMYT27UcvxuCDk8Ld9jyGjYeZ1V5h2JNV8mmHGoH5L4wNUt1Hbv",
  "key41": "4CuiU3iM5sEeHSy1QLHyZV7Z22cYyrAp1XC5p38yUmxcP4ZMP8jZ2GfRjsUeFKZyaqeRBCGPQQsXqYwimMSFScPy",
  "key42": "3ywN7fpJi1MTZskfq2uTEHsNTz2rN2CmUC5XDNNdKfDLdDEx4Cvz4e8kcgURELtFX6pVtbSkJSWtYvRdTGcfpcvC"
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
