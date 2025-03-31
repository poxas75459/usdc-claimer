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
    "4ibb9WZiHDDJ2fdPGHwsd7JZZyYESVRD5WWUDU3Y7e9wsTPch78496sZh7WdQtY94ZqZ7qH7yoHMqNd5ZTggmnmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkbfcwXqE6KTJk1Zo7mu7viut3mxgR9wN1NAjSeUQqEZDupFUYcdLgVBLp3HB8pHsZs75gqXpQQMWMxcW3YTw97",
  "key1": "ds7L6sJFwWFiPPjK7fPejN7hLcdeXHhhRjbdtFwbcfBbb8Wurcrz8cWv1KGFoNrdRDZJGdjaskLkFUARBqW8zYC",
  "key2": "5h6uELD5eXVSA9TXz4QXbKz4BKPZf3rgnbU8QCVaiEuUUjCLegf4Ecjmww4MUG5WUpUNBME3zka7pfycPDN3FjZE",
  "key3": "5orZ8vsDFujq1k6BsVdLLnp5ZrthWK2EUkfpSQFBnxJhNQKCVQrJz2ctWpBKSBFoqaEdpAtuw9DrcgmRGW2R4MkC",
  "key4": "4DU8SstnQU5QZqXwpNgBWDs2tW4FpVE2cFZ2caGiG2NjN8CeFLULoN99rcGqrse2Pq6P2hyG3BUX1DPrGGBvfrUh",
  "key5": "2c5DheHcCkSHby4ih5s6zjiMoiCVNXiobpY4k235Ey9aaLvMT1d7tMhbZRK4HVHQwULnFBZKWU6MnNcjSzA36FtF",
  "key6": "2meNvkdrjqFHiR2DAPjpKMW8VyrEsjVLFFJGUGnFhkb6K7obQ6UuPKagfQ4Q44VKxvjC1cN48ymjGE68z93xvCMp",
  "key7": "5iJQiJmSbxc4UFHvyiHrqiTHwCgu1jJ7oxi9xGERgiQKqK4Gscy5r7f3YHPoBcswD6p39r4LfHB9uhY6PsscaXH8",
  "key8": "5Y7P9AhgGgkMwqZdxa34S7Czfp8j1HtS8aFvWMWUttnJcsx5QQDJdPjctfoQaLLQcMrJ82e3URPpyh8AFrRrxPka",
  "key9": "64HZvP67cVXpudemn9GXCJNt23iNkZBzWfmy5FGcyYuVCWBMvymiCRfpwX71LoeYJrA4uNRWEwRCSbpLeRcZw8oY",
  "key10": "2PfotzNNu9iV8TJNdKG7QRzkhAJDhoWda1wmECXrkgFzB7d2aJycNzHo1cMUNnHTNd69vM8DPWre9sTQueXxa5YL",
  "key11": "2FkpSxQ9SsZQmvmnktKvM6GT3rNseSLotgkNUVsnBqt99oTg8dedibhNoLUTCivMj5qNfwjSYbPKpZuYPb8rbMNW",
  "key12": "3SnYRPv4VkMNmu6uZfxzKzuEQvhzgcEQgaNFtCxLaW81qFSWCcTb3EdHDTGM8p1cbhTbPFgdQprtRDqqqgF4bSKD",
  "key13": "2VbYpZFsBCLJWwZUDmDrPzGtsn1K4YMoWuEmLm9Gj8KWVW9WfGrY7RoTU9CnKx8fBbYqVJDNziVu9sLfg5gW3ZNc",
  "key14": "3M6quSF1PNtTrXLA6x3QAXxYAzVS9quWocjzTtPtLUKzhn2BKGBkXzP5YrYw2zVZyvxMEZhfW7sYZpViDHxoj3CB",
  "key15": "2gXzxSjiHcQdvNXfLCmW7stTLURyCqHKeMDBXowDgRFDZQLzPDFaRtwcebwUWfAS6fdhGbV88CQ3keff8nFvTPtd",
  "key16": "wiVHBsv9YqsqttLAqLZZ3bZEpkfr2L3ubStsTMoHVrY9CcjVbJYWwEL5oR2aUhhjm3RfNMwhNvKu8GNHMdQKYUn",
  "key17": "2uiYd9yjHf6ZQ4VV9sVZoUW9u59Hp8v6PYUdyZogue43r75uuJk4mXNjvX2a8iEYYzqa48esZ8qnQLRjtmW1Dc9",
  "key18": "5N68RRXvK56eBsT3VbrgSaNbMKcXFzVTjAePTS8HVe33RAzw2pgiJNzsZbCzu61LUKXaSGVXynkZfxcAMejWqn1D",
  "key19": "gyR16YMUo5g8wWHoBzKe6dqKrpMYdLMK9RjM3Z75nDgTB1i3zJqV3ien1qh76yN2KGR3pQbi9H47EbJWqdRbX4u",
  "key20": "3r8AK1rzGSp1FNH2f4GDqBq2VPxLvEFoh41wiRwQLij1LVt39ztDYKiAwbVjoUW5sANyDiU3qEy4JL8q24Wuhwoq",
  "key21": "5FoirqQoEJk1Xvp5TvKC7S57BMShvkax8Hf8UUi5d2jJBK8BRQn9B3q17ZhF7JUCQSBRCRbnx8R3Y37MrgjFaBo2",
  "key22": "5Yd6HD3q963VHdAkdypEnDQK54EjkDoFHXxFc3HiQM7jVkCvdPVXHx7nkXRWccrdeHSdn3E3HPoYwC4u1eAv6kL8",
  "key23": "5VfmFJKuPnFhAiSfTP2VZvMuWurBYfCuXYBQBTqmYFn48LCqwqo7pamQQxRR4SVU8ngoPYrLTesvo7VFqQC2wmN",
  "key24": "662AGooFFRvDSvsa7GNcLEkEbG2eptgPYGuhbVp2MUBns4kxPLSg8NFwz8hccN7sGMHohu1niC8cPU4Ls1zZE7rd",
  "key25": "2g3Aib46F8D7RCUzTt7pqXzLgbC5S8kQkGcHcTDL2tZDAa3S7srKUzDxt6hipYwuf2qHajk9kRidzfhXSg37ku25",
  "key26": "21TFNw56ynRYY8c5eK5KbLwuCRcqZXdfxGqdcNhcFvNJr9zr7cmEqv4PuG5FcXaCvw2KFjifJyNMZiXrFgWXGiwz",
  "key27": "rEnx3G6AEc45K2rNMt6vE858Wix81ibGLGoQyt3NZ3cWLY3mhHMpuyEUXstdXCUGZUMpXcX17Q8yiezixMnAsQv",
  "key28": "55iqmtr3rnm8oFCpRqVj7Qmrg3xXKqaSEdLS54TsprtsC9x3XcdaQ2rsKtHnL41v2s4C6N3XzDEsdeUrTbUEMu5f",
  "key29": "3WaooLhHatYYMrhLJBzvZyreDFwLt7ddKE4WrYgy95bKBEZAgovSmwnPtJYQT1cdCSpahd2AQFBYK3dxaoe2NiqV",
  "key30": "tQY3B5m1KBguXeckv2DVEMvjzf6dCxA5tkaMy3BFLb39X1gTrYG7T11UcSYuzc2GE4MFMryFvuD1b6GsTECsKN4",
  "key31": "4zJP1AtYMsUfuVWerUCExNsiuxPB5UYaxjvwsThJJRx5K1WjbMqCvXPFDrhZwMAiiV3hpdfvSMTa6AaEML97b6ps",
  "key32": "YVMFDJPdKVt79QCYofAJC6shiS8Hq19UYPK4ts9yxh7WWz8huF5vzYpWPX4zagpr39vwvnYfeyQYPJBscJyXSRb",
  "key33": "etpw8QwUybmxVLf4ayD6BDKSzYUAgusXANmVSRX9u17E3fp9oYMvgYxKDEAYdq579nrsGchPp5AuzGkEj7xAXxQ",
  "key34": "3hXbMyJRwQw1ecJdMhmFSwbUSxdGmN6govQZeXi1eu3JvqM5gw1GDnbQ7Vid5FQmw5HdMEEzXuj7RtyH2w58vZX9",
  "key35": "2bUvp6Hv2z5J386SL8gJrGrd59chTW5Mqv96ZQQNCytZf6p6nCV1rb3RExtakHoQxdgmffvtTEwYZutfuGmNygjJ",
  "key36": "5oKPuVdHQ2SysDonC6k6KhPYq6P2bWZyGVEAB3Pkwam4PDQ8GkgH82eGtBP87nrxSRgcKvitdo5XWTWVboQ11S73",
  "key37": "3YCFrNgcAhkAASSxGFmk9CBe9KTiGnZ8mTjSEjngH28b2fViwyHryRKa3XDEkCBZMnZufnPPTJDSBqncfFXGDXuo",
  "key38": "6GCkg991nspXbSp7aujyvQRVjUb6Bs3vrJmsSV1iFbB3kyH2ZHhT6pVznrpbotjst8PPpwLJqFPn7uAm7XjP8jv",
  "key39": "5uecQQQFwom99hHUvNA75gomSzDxANr678TTgQiBRwtA4mkNWtx9B4JbbvAQvUc5gyfnnkGWyCib4r9rge2XAbda",
  "key40": "5xVwLgL7m9ATaC6bbcrey1QC73VsULwxZCdQKjVhJMk7EA2avJqcwX1L93eL9s51f8h7FaT5C7rHcWzgCe7tsUhW",
  "key41": "4f7vmuNXYQiDEFoRHsaLYbpjEoN37VWDFMSZWQ34QsUHJ8Mmjykuxf9Yyfdh3u4aUe3DQRZZwDucRfAkKs1RfzgN",
  "key42": "2Uw6QmYBUW8ZbR6FgwzrATWGmZkfZh1uYcCgzdyTcFSsxZHrYJ1DTAenQWjLEhbXvsevaobEgLxUnyLc6Cj666km",
  "key43": "3tyE8pwyvfaEXgpF7Qrp6iWbjX5aDVnhkdauYbNnauhnykVVvaMoWeyP4C9G4SCiXp5s75NZsDfG1fmWpTiqafpy",
  "key44": "v2hECreE3o5GhBLmvQrLd7LdXvbAbr2xqGDPVY7qqF4af6gsFM8Loq8vjQcdhPEUgmRmNg6yVsvbpDwT2FSqENs"
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
