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
    "hUsbeT58WumZrb1vMwvzYNzTM8KXCQbexuBg8fPQN4qMeTRaw34psNZNPV5icTJj17G3u2j3rifzhqAQswSWfPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sngtYCcVbHQRhKm3kJ8fRcQxyu16bYMbKbg4Ahw5hbmoaTrgdAVtVZmB8cjJMWBDhthuxqv7uuP9yDompjLBtLv",
  "key1": "52NTibChbtepHHSZu8DG4sKmsj1bMTKrvdXYJDqLUCuBtu5SMtYTS7MSAg4wVCpLU6yh2C4QuJHRRc9gy8tdj1yw",
  "key2": "2yi55ot9nxn7YxaF4DdZr98Ah8rjQAe3N63C6WTcLGT3zBzERe3NwnceFZZdFLeEkzcpYhQpPTdVcwzvMMHMBZ7h",
  "key3": "m9SEuEbEwdjwyrqdZkYYLELyVrAxxZBvcLc3BcfJtqrTHVRYoKrWeJ44f57bqH3Wp7XvVE4YvQ5cN1qEi388wMG",
  "key4": "2hiD9y74YqvWWDdrBYbrjSJhFmuoySkEp6ikwLFsBHJqf3HC9P2ucYo1cFZR8frc5zyMjVHbCZh21yMCTv4GMJ2T",
  "key5": "vSZVQpRPgwFR1ehC8dzGrYxLi9QJ6Jvc6yT76LLNGqxan8mSX14XAU9zq8U6Q8g3PVBEzHxn6N2ZJirg8nCmmZo",
  "key6": "4femmuDd745rKHgWuPxiZmtWn4UzEYR3NeAWWLkAhyFA7rGjimRz2oFdyiuXDKFHAhna4hD8HxHGTFcxmAiBD6sx",
  "key7": "3qe79UVAAVGadhCu3NZZ8q27PmJqWzNcEJYQSjw9YbQfc7Y4rGoWMMhG17s3z1Au5u3Befe7sNBjbNEizu7x6GPV",
  "key8": "3FLJGxkksdE3V3idBFh2L8k6pbJYEb5zPasWGmKBVaajj1xjAje3kn84dkte8Y4P8FTR15yjA7PRNJxqkAJYS46y",
  "key9": "3WywSWjwQeRfqujGkSmoWtxZ1dH7xXythRpWAewzadgm7jceduqA5rXwcdWSzwg77kWe8pSdJBC4oV8kpAzm4Nws",
  "key10": "WAPreEitHNmnq5ddGS9ZQ3QmAntWpRGehSwRipHPPpABQrnLbiF6B7KB1fsNKxmkScnYViBX2JNrTpFKkfdFNav",
  "key11": "42qNRjkJRvUU4aLf15Wgajrk74ydrqqG7RwKSZUC7FP4snkwcTM8kPE7Z4zFiPMRhx6M5zUe1YYARGEvXtSSYSdu",
  "key12": "4ucWu2iwrdmMkym9Mv4g5VoQsmvYF5BBzsWqizVPgGBFJf9Lzse9nydb7AdXvwgJta6dgtH7Xy3LTdg3Lsbs3fmF",
  "key13": "2UBhm8KbPKKp9kpXzvS6sUiZW9iuFo48gL1DjfxHrNt3rjrsMfZqnmGjpgm5goZY8TJaspnd9zPmrx5MjYKhn4Pr",
  "key14": "2VyUgtD1GoUJHWnwh4DzyGMgVXE5oGij8hBQGaaxss32fpAz3F4xJeLnuv4UUaEy2fsKumi9PfHzTUshgUBgqupS",
  "key15": "4UfX4vSbpm96UVozPAacyEUSMHjRayWboQbdXFgsRcbqciX3DP1pnfKougaohpqE5ea9N2zGsCJoSVNU8PNiQ8qa",
  "key16": "39uSutop6orQnhBYkd1VLRWtwgS4UJJK627kk2A2s4BPdgbPdHvrepUpbcCBp6j4GF2o5uCZBfPo73kxZmWo72xr",
  "key17": "4MiSEzFGEJyRQLp4ZtkCxL4SkS5ZAgXk5Ddi2xkDqZDjL4WLwjSwN9QUWuXaJzbTKQrjQZqMo7nT8RhBG7ci4aLE",
  "key18": "4UFkagphax9mSvJUmzGAjCkLmXCwuXmaBJmxYJDyNRwLbWwE7mSCbubU9DTYAy8d1YCWHT2RwvgbP26a5PBxMeHW",
  "key19": "4qF289zT6AdDha88pb6p2Mj5juQbCrjfJN2vTNRePg5mJ9ViFkdgxyyRgKUBf3h8WDmuYfBL5Kus7SY7dJ3Z7bst",
  "key20": "3DgEeAoN9FGb6iebQhAPuxN4e3t7YDL6iicR7edZQv31mp6jQBDwHPnAocr3x5VYFJCSTSEBdJukXxcNBnQqzYM",
  "key21": "46hvv6uUPSybp1C8ja4gYqF9wzwmnLXHpKBeB6PAXHmo6p5Ncpst7U7SLbSsvXreCrKZZLHAnJnqFFxbrenF9qWx",
  "key22": "3tChE5rc4TcWDWqVFUhKDx83EsFu7zi9UsMghnneVP38gLyWwzqYD5AcQhjvEK1z9aj7E83QwRVStSJFMzeyevbH",
  "key23": "5bEFDXzm7gLV8s4GQ6u8qJdScN5e6JagwQpjZ5hq4CutdVpnYR7yRGtHqzMrYw9GRjtVTonSMWLzr1jWYxxurxH3",
  "key24": "5tu18nSyRe18hxdQWQzKvLYkyAQk28bPEqV3UFHWzXqAGygbVN3N6QhzVAtcYNmupCTJJHDJQ5BQDd8WH6N2eWvw",
  "key25": "5qeKxgxomDzUE4fsEC5bxfxcVKMXsLh8nJGMFbfEsvNKkvr5AdLHJPUiE61do12prTK5kRKbv8XQirPFk9rxqF7T",
  "key26": "2iT8oJMFU5zwagjipgiRJjtkketycrtUgnxWbz2ypEZnQXHXJwZeTiP6A3AzvRbz6iEVoqJV6SSM6pXEinnHj6qu",
  "key27": "5sLU7xASiX2KJ5yAB1JeWper3HZQy8qBA5HX8jJizBnFQy6S896NSBTLDj8yhjYo1yebuXMnvdBjuYjVWzHLfxeU",
  "key28": "671yiTvhTSrvxuLNhctR1QSEQdAp2hh3yxkHs2nopeasS9rFif1chdMwsjFLn7oLv7twhHHkPj1VNgR1rmwbPoU5",
  "key29": "5Dq6EsvsNxVqb7Ue7iELdvT6DQrxWmwki6hhfDpmR8mhZS1SWoJm7pZtxSbdzuho3ofnCHQ5QXmDQRUMDj4u4tj4",
  "key30": "k41X1v6iisqU43TochVziJZ4p5r9cbtboLGA81RmR5M7kPKFpbDccAmFQDVojQagZHPUcy2mrHzu2ac4Nnam116",
  "key31": "3SybhCGnG7L54gdJ2PrFMaCzeawskE2129avA7JrucTYzDUrYVjZBfJAQZRGemixtRrYEn6V7YKYVswUCuLWWeqn",
  "key32": "4672hiq74VLVsVxXmy5Jw65UPVAc4stRQSRVBJDtupeck7jCx7zuamoPWXS6a6sqeRco49FmrXPApkA3jNJ74AVS",
  "key33": "122gmVDjx5gjQLBurd9YHuraohLuVrjpBbnvEPZq6Bd7iY67LEYnpyL2L2oekGVXF96rp6q96Ns77w5bLNJ2Tvt",
  "key34": "64E91Hys7uTfGhXXUD3hDjJ4qt8cTSYRWcMxEUhMZAKG1bAUidas9UJoAMZh6yk9q8qRAijv3Hsqst6qexftgZhQ",
  "key35": "4EhysNYk4AcEsv85UTTinC3Gob7osBUs2RU9LD8H5ZzLQSMF4GD5cFupTNNSgJnLbwfXjVgN5x1HxMzFn9YJu9c3",
  "key36": "2QQ1jm3hVsqWmT76dXpnqCoEyJkPqcdNVGDQc526ekrYW8SGDknNJPae4uMN4HuA5Mxuw27awisSkEoj7msCcy2U",
  "key37": "2Kw2WvadhYW8SENJSKnaVSKF8HCMdoxS5vFHQkUvoq2jQBtkxFXJ8332bnGPKwFXiFTNW8T6ghTwvjPQQhCZvNeu",
  "key38": "32Kq8b1ScyFkGp9teRavmv9ergaddxLztdWmLkf8G5V4MDwHWTwrA9y5Y42TxpuBwfMsp3ePBEeVP1miZnxViMJ8",
  "key39": "5oXF9449vNCA7zQPLqFVJww7KybM3rKMyqc19AAfwXvg7Rph7HAAyBDw12XhvXCYsrMYCb4LBB7stsobzJpUHMbm",
  "key40": "7mB8ivwCdsPP1ckGUTdopBnTBDj5MmoDu1i6gopEA6tbNBrTKncCWa4F5u268eReTaesGSzNdusS6czXBeGpD1e",
  "key41": "H68g4XPy2v95BjGdHjvYjBiDCT9BqEpSsADcrZa1mCm54vgMPS1vE5WEy9EUcnv3KgbUEGqX3Vafgd2MYhGWzai",
  "key42": "2eiSpAXBykfkQQsd4XqxqT7AfJUs18paXTK1paVBzxPGVaEYeGiADn8T6iqVFyLs2gsYp4oypG3BrDPamdNZFcUm",
  "key43": "nxRjPMqzH6i29GmErxoAoXxiJjmSW793pQnWsPi7c15GgfmeHuWz2LwkWBR31UKPQTLsav1YZKwx3P6EJkqJrGQ",
  "key44": "4tcQpc7vD1YYZZYszN6CMNra24BjfwqTwcnTJNaTkgLWXEmuvYt2x8ymu8fHsLF1CsAoa12QsenhhTS8xDmYC3Kw",
  "key45": "4Xo2Yi8YXwBwU6Gk8cHteXQERgQb7KsdtWJPLZo2gT2Cvfrfy47PWrWsXDNCdEbToTpkM5Yz2xSK5LX4yutyMXEv"
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
