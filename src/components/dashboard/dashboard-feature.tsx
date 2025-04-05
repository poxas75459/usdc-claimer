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
    "eh81roYAzLYhEHNk5zXibevC7MGvvkAExB334UxY17Q5QE4QfeN1DWfrmKaBe4xD4oerZX2hTXvHxMGrZKNWQ9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrQtATwKodJ8WzQ2ExTYfVgqU2CpnbWVuUZxTgqjHdqje9k21DUcGzCu8Jx9vJ7wPLLi4N9Q1V8gkw1kUesApqE",
  "key1": "2yrLKPprWmM1v6BU4idxFC2GctSyFLBPYc3bv4Z2acHHX7Dy21b76pgnjGbWjrrFBb6nEoxx8WeKv4jE9roEyVJg",
  "key2": "4wAz8qs5LmZyk29qZiSgAK4PciDYcdwXxB9e1aSLm9shbwWUrDmWGVFmrufEAcqkVVKExiiC4oqU9eg9gAfYWzF2",
  "key3": "iXvvUm7iUHxmheLcdGMR1Z3fMuGcmk3Lwi2W7EX3HYFC1Fj9exUPfjcvfhArUkwLxp4ifKsDPJB9PuAXmiAt91Y",
  "key4": "4mwuhVAFSf74DAoo9fNxmhp3DZHjMbeky2MBXmgGaBnjbrKCwgwLv9e25qbRCcKDmWdNexNLHgGpgQ8DpjzuSmur",
  "key5": "2byb5V9PA9pNfbKi3HRKFQj15LWkj3E6GiaN6Xc2qVQkmtxevmj2qZ2SBgJuuZajquFPwaxgCtfurZgB1PecKHV7",
  "key6": "5Vz38MrCdE3WnE1msBPT1JrSq8Cw58udKqskKNSEFZj264FHsmrJC8qDPz6evYcqdSk2Qedh9WZAvSh3Z1RQWP3j",
  "key7": "2DFxWye4h3RoFS9Ns9pNU6U4SRFABbRBrPrPXg4oBiVoLGw68xs6ieGUHUUa2zS1hSsJEuWuHxHWkiTeQAo9UMVz",
  "key8": "5UunHxa8W71D2WnJXxyKz7bFhBp9bPEAKvZPE85QXvJjf5hf5h4rL7DaNgtpiVK443JK6QjmkZvo8qHFU154ya7W",
  "key9": "HTcWFKCJ66Uv8wkdcF4CoEfjfGvikQkLw9eSRKmDAoXWn5pvh9aW63TWD2mgYp4np3T8ySm6miYecpoXPS1mvoX",
  "key10": "46X6cenZqvqu9H7pwMdXDWNuf4fsW2YazUJhHY35AV33yFyGEAMvZhCgeVsxD2TTxck4h2nHsKCWufWCPTbJpagx",
  "key11": "dyfeLXT46C3wvbQpgPWPBdUBgX2XrJoahGx479zSnu3XXwZDVHaUF8ZpNUxC1Y7t7kATa6wPSrRHMvmAvPt4EXj",
  "key12": "4FzwVDJgvVPYKXvsDnkgvPssJemNHNeU7Hk4xmnchyyzvuqqV3G8uaXnELcrJYcR3m6bybA9rHU8S312gnwon158",
  "key13": "54DCT3rd9kxPtjBpcgv76waqXQ15UUqUnhsg6hLrFPvFvCvZLvodhrGFMpAVVPwDH62wJUhQDprFgFj6p8EyBvhr",
  "key14": "45wtkpsURXVfD22LfNgKyCuhgTcstgWpRRMaH8wF8FLZQRPdvC3ndVkcqbRVYnsGdQskt1EKTNX2X8FE84DLnt57",
  "key15": "2mfCvC6nuURi35Z8hoCzqyJLAAjBuJrFua3D1F9Er5yJ3YrFUFpPJ4K2e11iaBgzMMdDFj6W5Rx7yMdDaqtkeSJ8",
  "key16": "2Avb5HL6g4br8Jpb2KydiDZaqjsUaZAbybdxazwxcSbHJu3pRtz31mGv3Ba2Ch6DLXcAErcpQBM56u7756mTiEpw",
  "key17": "PfsubLD5VW1BffUKoDuXFcgYFcXcv9XE5FJzji1wgTuJhf7ddMYsf7xcKGzULzkLht2vt6XdXKyMhNJEJafrhcF",
  "key18": "4ipooNzuzqLschpcXCMMBDjkxkdFv2pgzJ4jeZZ5tNX1mTBPH5oBmJfpanq5PnQkBQLsMLAQggjJ9TGyS8UmWRYb",
  "key19": "tE4jbwGipYjKcd4mKou5gtgPDE27yfqBxfpBCiXXxnL8cHqqLCmgruwPuN7tn7NichEjmDvNHB2WQUcWWcjPSoF",
  "key20": "3tNUd3YcwGLDcMqeyJqLMC8Rf18iPQnPTtEN6jWvUBoamVQnyfwGs16mgxZiCmcYWz43MStu25Hy5DPuu3QdkAAo",
  "key21": "2wVLVBeZth2E5T86kaz1nppuXpNvtuSfc8qRZDswBkNWRGaDxkWyBsFnVwb4gmQbVkMtyrRTWKcAHAFUfVqo3dvA",
  "key22": "37awfdwfHrTy6AvDmxGDQ87H81qh7SUe3LUD5KnzkxVPNMn6SJJ2uZMtLZeM4xe6VnfgAn1FbFBSE8ZgsGpECLK3",
  "key23": "VaU9k4RNJRgJaGxE3RhBbab3HcZzUQM7W4AchKCG7LST8cs5fF7SYFSkxySfXMBty91tu7pQeKX5tVT6NnTUe9V",
  "key24": "2DeGfJPqoJwxjKifkqpMPK8a6UGBBhaeHuTDUpekBbAeYwJ7MrcXkeJGag9zCC3DXJqPSfqzzyr8WPshL6hFxgAy",
  "key25": "5qmfxhHi7BqCbk8sNpiTAZiEfD84a18eEqWDom5xnpEEiu13YKroriJgjyy5ipiNuJi8cXqPxra1T5s23vhNBLHz",
  "key26": "5hLePrDXrezL3mJnSWBdcxaZNPbt6mqMGz9TemMz3jPC9abobGwgeAyMen8x18A5dK5M2Zw7N73NVvxFMNKqn5Eg",
  "key27": "2UKxxxeeWxG3zcpTVFt39KZKdWDbaen1bm4eLcunygAb4CZT8dLkw2exUQRwTCGUzdngofQxFvb1fibSarEg4EDg",
  "key28": "5PZP2S2VtULzHAjEwEicUKe42rsomjf5qGAMf1xJ4xasYu83wrXifmmpKoAWCqjBvNwrmCgtaNaJBj439aUUwYTA",
  "key29": "2nMMHKSCH1pExCrCVDVaMJQESfe5qjYXjBn25AdUtVYQ644pNQckD93SCEAJpEeh8XaKMxcJGFQ6cNgXunk12QBE",
  "key30": "5i3PFi8ssCHm4wJNMTa2WvUfMxe952Xrh8u4TeBvVQu7mQ1LTL2mEzw7nL95TLQJr86S1eRJz8ya1uoNpAxHunQE",
  "key31": "29xuiuFQEfiAJVnTCuDMVYWCVzH2ZQs52qEmbS4U4N5bNN5tiE2xYa8AKCSfcmuYW6yQjXePu6t4E2Ya2HmyLFt7",
  "key32": "57HUCfuDwZxPnxtz6tPSyEFHejqYKTwdYW1LCFoSoyRi6Vt1tvsBaQsYnN5ULoQYTgdshst5WepEKMDJJsoMoABD",
  "key33": "2DvfzRr2VRjHKpE3MuCwJtyjrpQiKkMHDKPPH2W11gK3cVmRn3jAczBe34yMcxCQXDH5uAVVguomfjzYciLVHP8Y",
  "key34": "3QFCKjK9zPQr5F6Pa6pmsjqZv3j4uFefDMm2crT73NRoRGQdMhShP3LvATs9hRuGXsm76TeP9jXiPdB3Wm27sWz1",
  "key35": "3qgq2S5NMBschrBBBsC2CixB8mFx5U2ZykNsGysEsZzVLwg2zNNUzS2aQemoEZMRNP1zNitYUmXtTuDPWxLkVE5B",
  "key36": "2Ci6BAufm8GMqMGvBbzcCQF9LUbvuJd67UJ6LuWJUng5vHaVVF9dztdbkKvyW4PhZ9fSdFgJ1XjvukkqWLQKNsqY"
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
