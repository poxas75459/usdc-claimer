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
    "48DoVoJmZMdCYtAVk6Doo7hrLi7yh3Hp8pgu8QSfSNVQ7xymGNvDdXZmZgpskAbPLUDWytgVE6iFZd7GALYyvph9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSdVN3pZ7jCQZXyhGqbhPQDBJjEU2dTKzTFRsPMGBuWjy2FnKhWmNZstPnydwLoebVGPRyP7AFjuF5syqxXZH3R",
  "key1": "4KG2UVTezyFhPkyNdhPMc51r3ZTvZeCFcUf4j9Ai5FCJX3kQVCMp7yEWyWknGQVQvdkyZ4yn4BifkE1emSLQV2TZ",
  "key2": "5M9HZGDaJCLJiAygoGW2k5twPcJDywzmmkMDv6jickxDFugRViaKBggpUofpkn7AYKduQjAbRmZb4Zp4UggpYy1J",
  "key3": "5C3s8wveKDKLoNMBseb37KFJeU2gDBdD1ZS1qZPzU29ncrBwWGPfds7QM4vjwEK9TYySHbnzpMpEGwfaYcf4TfaD",
  "key4": "4WQh1QYZr3XYqYNDGJ4Yz95YpGKQGYZvjiwTMgDwrgqAKcx3JMmn3Rya4oLaCFwfQiPJHmGNABa3yy9Vtn1ndDW5",
  "key5": "5FoP4FTN6d3DELMSE8Gi1XuAYPPVWuJft8zhFUDScEfFCLMNQVvSLKYFceRK1QFqZzHnQhGw4soDvFMGkF19tKFV",
  "key6": "44kEcdov4TmCVYpKF7VX4hSZmnHXhQ38JWeM26KKit1AQgj6BpbWV2we6f9sZCNdKjE2uBHe7GDUGCsxKat14QAW",
  "key7": "2dc9m9VwYmVkW5ZGAHj1GPcHoBmK1W36JGujwAD9emCeZmVfYdQNLu51NMpaQXas2gz71eSj169xsLokdVp75mxT",
  "key8": "UhimFzyi7eR9UJudjKECy44E42YgJFM7xHqKpBjYkkVtAd8gGNnDqEPXnTmVhTH6nXh7iRSq5iKRds763TQv6PK",
  "key9": "3LbKq5CemUq7fJDhrQ4Fwd1NgNnwRHQqr4ryft8ttT4s5NwPKayGWNE5eCSdRma4xt5o3dF41TFQpFuArtaPeNDw",
  "key10": "3Yt1G5yH274dn4mNbebphqJiZoWAhDR8bktCEXxHLogbaQ5Hbw3Zv6H4URvWfMpvre248UW1UHE8N7s9UTi7jRgW",
  "key11": "3CVAt4fy4AxmsbzQ9ha3kxXnrE1k5dFaTLnkH98NGXr4X4S9Bugpi3gNVLbscVhpQZ17p1z4hwhKechM9T51L3SW",
  "key12": "3WNoTjmVBzSqdDeUfCrLvrjDPedoZTrKVJMUXfpMhvbv8adFrz1XDcabE2eWfy4ShyvEgcrrz8YYkFviFRo5jizA",
  "key13": "5xraY5KLb6LXMv27sCrTsGAf7KN9mkRhCvtCLNxC9SrmXrmEMcg9p6WQyj249GDM9FTuJA1p8F7zQPGozJipACMZ",
  "key14": "4rH2Q5i8LEqKm9ZnFfXjaUJEbzqMdP7SyGHshhJoYLKbTW8XvEP52PTJoJzVqRzGyLwHniNhLGXy6pStVbHLeVpp",
  "key15": "3UL8vmCXe2L49uEVXiHeUpCVv1o6jVLXnr4r7Ju4EgW61aFpHek1jQSHANPMztpHcFpuDhoahJR4RVffCBW9fcZ5",
  "key16": "3X88NwDw2JDTkBreJEqG4zFnjhCYowvncC55vx6FTpFWiwqSHj1JLf3738pnKfMFgEXTVJH588J74r1iFjRFUS8j",
  "key17": "ZrqLtrW8wGGYdHYBowdMnX6tA6tKxry1jRhyQvhwenpJx4aiFAavWx3becbiNpBgcEsyhcNuVE5ZzyeEcyScBKQ",
  "key18": "4Y64rWUStkg3N1me8HwtZxZmkWU3NXY7JytjmxmyGn8LKiB2SFWsw5NkVhPnp43uX84fhLWZXBpGiPiVTY9WDJCg",
  "key19": "4UCGHbt8e26XS3pgAFBAum7KCxzPeGbBxug7EqAN2guiDWBVDr2VmFhtsesjx8weeoZFxk8DN2ApGNmE96nx5ick",
  "key20": "85yVLDvLzKukhtyqVxokrYeqS3PnSjqb29zmpUJVdJiw45sZ2x7qhK2NPqzqzziEmAw44wvGi6WLDCr7YE1o5jD",
  "key21": "5rmPdsGJMKfxCpgoCNtwrq8rYsuQYx9CBzGeZjuVBTUdBz8vFybzCZDum31CV6LKmREbEGaiT4n7qZTu8ubq1h6s",
  "key22": "3uuZyb23VqTJ3x9m6BjK1GRBrE15moHhndSZJVmTAeMfoYHUg9FuiERTDpPsHRernEcJjZPzFqWuWmHH974Pb8fW",
  "key23": "2x3NoZyLZYj4z152cD2Pc4Kc2uv5QgA1KqfQCVRWXMugens5QMCfrmmdwD2aVei6Q971aZQAiJzZPkVG3Y2Ej42D",
  "key24": "YqqKHDDq3FAMjjhB1xZPNGifR3pa6Vns9LnVmfedRZuTde9sXFg885UypGi8NzZWzxD7xYvmpEzLjNZZRYKeDLR",
  "key25": "2Zs1zYR2bp4fngMCATjmqRgX7JzhnUyUdEU8secG4jtAU3aAeqYudv3zSd5KujB6sGAzWJB5VETFS6AQJrqF2YmX",
  "key26": "4vKz4g4fz55bng9NwNxvkVpUrsD54XpZQwugGyfCxeviYpeznuiboDwFq6rkvDYykWuKP4A2KeDBgY5iVa4vSEPc",
  "key27": "4xdAK87kmqLjW7uHAHiVXvdKzDcSACNar4t7hvtodWgnDvZosH9VmD7k3suqSbhKC6vhdvfbyw31c4mpo3ydxEq6",
  "key28": "3V1BbFJupcnQLUxEP8riADThErc8R81yUaDYVev3jUN7KWJyAX7ixFMwgcXuv1nbfUhvUoLLc8h6C7CNZwJt8F2E",
  "key29": "5GPzt9nDE23ygu3EYbLKmAUsm2Y7hkZjJWDV2N4EM2W9SvmYBEeP5Cioi62qHTbohcn37mRT7xd8jwY1zArnwFsw",
  "key30": "3XpPWJyeb5pnDFc2ddaewEoyRMruYxnztZJZCEX5wNnCSzG6igoTkt5dCxrhWVBGhf96DndzL4n3dpfVNwcCZFfN",
  "key31": "5T1NpjRznyeDsgFhd2eQFED89q2h9DZMX6jfgLrvkSsUwe9Ms976V67cHPMVXhD3hCvG91S5BSjQ8ZXsu6EFPMq6",
  "key32": "1mUSZaeVM5wvh87Gh7tjp3ePq3TjzQkiWr55pCamqJcbQyretDwwjewgmHMPTT6a4fMyF9Kv4S727fNUdxc63Wg",
  "key33": "5PAMUM8yxj1BUm9JsHWakw9SpvcWYZYqiDHQaK9WghJDdG59WNYQWjUr92WVrkniAKvUHxPHG8e61WrV4W3kCxMH",
  "key34": "2Q35R6aHU6S4QkTxQLiWSTfzv1awXzBxTKXQgsgYdrz3wPjCju4PBsiZQ6YAUbCAgTAEHE3eLX3e71VoVBv9kb4Y",
  "key35": "3GxyRW8KwPGeTrVHvy373c1aFfYdR2zmXK6tKXFsUexbZz6MtL9WeEC6UmPbphq7RHWLjuXStBkFyqCH5Kfp5YtE"
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
