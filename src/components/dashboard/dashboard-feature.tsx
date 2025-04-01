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
    "5BH771TaRDtUf84F87jZF5xZBaSZE1jEFQRgMyydX7eBfxDzHcfgke1AgqC5oweR5zTrYd2ALfg2sBVbrGhasG9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EF9iFFFMVose9sfGBgFyaY9rTi5gaJuRUTyrAJLZwdkzjK3tZ1H524y9MBuozMfYd1mQ35xFBKkTchKb4gHw3Ry",
  "key1": "52wLCT5wjLywUtGQ5z3qL6Pm14bgGuqszZmEBLNGsPdP3R6Lk7A2GY7ddoJXsER3gj11aX9BbxVL5vJZ9Td7hGoi",
  "key2": "4bR3g7At9Ao9W1VQuuVyagUUpGnC7tdG2R91yTHDetMXc3WTwLboV8Gf53RZSa8tESALP1Cvh163LR4gTcqPbqJJ",
  "key3": "5z1yVkzjDVoVCPubk9qDpYuU6KQz3eizmUH332soNGFPm3uKnSshj8wXFxQEYaNefF3JXZtsDACdmQ6toKGR2wvE",
  "key4": "Vq45f4GCyhfbeXMjgopMw1fakStFatnFJJVjQqspwd2QWqdUkF5X4vefgxCujoGymzqeNehvRNtTtfVtC84mVFk",
  "key5": "2g4Gd9XXn8GWnztCvi5XHVhZHCYsqnkhYgzUYN34H2hHSReV85YfNzidKQZncrUxCAUbjDZdXF3bFgwzuGxmuEeR",
  "key6": "5zckJtCUKDU4UVkGfxfo1L6m6xbgkWJkpbWTEo7q3SgQZXdZmjTDnCjbwRBw1Fe3hPUjtKNEbraXcFeKfYz8mCqd",
  "key7": "4Gn8fm3TTnLwVWZTtHRJC7w7pqk3Hj9D5ch7T4ARc58C49up8yq5whmLJuvGQp7zzgKLzUY3FzczkeoUtfbNnRNP",
  "key8": "3Lz1ksoJa3M68c6fqCquZbg728BtxeDWRUrHydNC7T2hLNB8KkkVG1o8ZowuVe9xHrSHWxAJac8S7ZeDtci9Wwgq",
  "key9": "5Dj2uys2Y6qhsH8kr4CCyGuxtacZFuvjrCDgm1V6Mdir4hLfnhHS74jMwwruSAHrgCN9hB5KY5JijH7JDQMKiKdV",
  "key10": "4NAPRkVSagiz9tatNgGMtANmHtgXGatp6HN2FJvSvSN4bYdGQFRASmdYLsX7bEN6LwHCwF1QoaAB9po3T2RTpYEv",
  "key11": "524oZFmX2QZ3nzWSiYdVrL3cDMNvJucLZ2xxv42nBfkn3mHz12khdFrGvmByHJBqnQZ6QeQz5qWUVcynBYYZR9Vk",
  "key12": "3XYEfnhBvoJapCCrduM8vUCH1HaY2x8WgvQcxKTmr6Szq6V41DjkubuNTGT1YU3BX7rpGcVEnCMHzkZZPY5rR96x",
  "key13": "36UseugmuUXEUy9gGUic9D1VmooNSJsnmkTZDuBm76rJ7W47wYjxaYxY8bod3hV3Ja8QpdmxnH5YRU2bR3uaLDvo",
  "key14": "4EVzf7WkDhgfJyAQcNCdURKYEXy5YzyJJzYTixnVd5vrPzSnGDvQ3J4iea4QpNzi5eVW4kSeQDYnga2huTDeGJiD",
  "key15": "3pSFFL7dZpReGvA1jgT9rL6hwVLrucRByVMTvwm8JxbEone3ePZ2tvS7B7m9aTCJ6V5ibY1GdqxxnW7ekjZjHJ2K",
  "key16": "448zaAuZg4qiwR9pJuzcCTVgDd7PtJ1r61ccrCQVyNX9sxUGXStKVtz9wXzDi47PF3CZCAHVC89cazQkzFF38hHg",
  "key17": "2txTRXw6Gmjyw7avsvWnyfn951ndKHvGjiVmKiRnRem5QgUbniZkNqmLZ5XeWxYaxLRTdZJN5pWB848yq9HhL5vq",
  "key18": "2fCc3W4Gaui6n8BRMtCPbxN34A7tDF4vU1cPaJBxBk64NKCEBFejkhFSCWcZ149JLpEz3KGg8GVzbvpqprZXHmku",
  "key19": "43XxUqEBtzTgjXCLzeiwkJifzG6R1yy5rvcLXXePx7BBbiTnKMQQGd9kKFKFmNzj4WtuRfEJtjGFNsaFNBAoKJeZ",
  "key20": "31peHnbuEk7MwUvL5s4jqNkg4ujkZhhLpXpzdgVSozs3bWE64wMpi6kW68FDP2synVgATBugL3cqLagSct9RL2zp",
  "key21": "3gKcmKjgDW8uXtSJk5zyxXuDYthHfwAGHpLYis57poqsRVJ77FuBmzJWuoBB73v8ypTkzvJSY4rCkcMC6BEoGatm",
  "key22": "2yucNibcUwJNr6nz9ugn45AHgdjM2j9qraEA95u2g3YQeYbu2xW1V8o2UiNNWwnSYGEgF9SFrVbSGcWSKe225cdQ",
  "key23": "4yNZe9gMo8k1KhoGVY78UBEGTMp4f5LaFmca3rMNMoLHtfC2T6i1TBFnjXfZk7erH6SCPbsnXEXA1iAAdBRvpMpH",
  "key24": "3DmyF36sVdT78gtwyhxJiiiCtmGsXXqXsCg8wgxYXRiYSZrEQojhHkWWgjGrauQ6rmVftcXPa4ujQjVQ4DkyZxr2",
  "key25": "5TSuAWoFEaZRfwy85wmLY67m2r2Eifkyjo4JwBirkpPDFZTTfVUBYftgvP5L87eBTSfXJqYRKN7Zy8qENJQdrNso",
  "key26": "3vnHbuPYFxEqmr5FJQTAbc5gKY4gKJMMeVspy3U9UuJZkbcSa3tikjWS1ZtXvkw36K5rAEnmBvHDakf9F1mkzzu1",
  "key27": "4oPGXRCmtyzP4CzCk796XkcHHLuVZJ54GGkLR2GyAgzBtKVHUTjMgiy1SX2xQKVRcx1GWuDXMNBKCK7mGGhAABA8",
  "key28": "5pAYKqFYHpqr6k5wRLDyQ3fJ7NPxhyWzLHS5k5UzfiZtrGqVpSmNJSXPSNgVWNSHZMcKapVTq7vAeNKLQdmhVtR8",
  "key29": "2oQX1wVTNEtF7dmZMZTUMSfwRcfGWZQuayPp3xUa6agXKs3S46qMPQ2wsWKtT8RErHf6uW5eigWvKPTPZMV4zEVn",
  "key30": "5MtYRS1VaFFUeg4EFp19DoLX33xg9zQ8aACGJ8ZaSKwPPj964bLjoL4dcP8xSt9A3mHFd8ZUij58QkpiKs3KNsxZ",
  "key31": "CJMWaGvwbtcVLWyaF6s583Gh1awVS1hWCTcLXoFZFH9APbExbbVyN47SEUMo31WVVQSitYcwqBKMM7gJ3ruwuJr",
  "key32": "2YMk28yQNx4hg3u3gegQn8niPEaHSEFGDhAxDoH5gqGABZD13BHjoUyWyorMwfrdjKJE1c3FnhymM1kvbTYSde1o",
  "key33": "4n6aGigdfUyHPL9f7PaWainjXUuAJhfUELCWA2vxdh8oX51Y41FCo7J3DcRXcrM1zscz5B6YYduasdZ2Vw3msjKL",
  "key34": "2EKmKDPK3PDbZ5aXUizTeJVvdEhCBa4mkXofYKtARpbNyRK2y9wtaM9LqdKu3Vjc8VQWjdR8xVryGmWKjeRog3uo",
  "key35": "5FmDyV5Hkr4iArTP4bUHGDUbJvCrrQ51Mbcco9uD7ofMkCuPtwHVxwnAmmwJSnqSFhjB8U6WqQN2mhK7w33n9mYG",
  "key36": "quSxoEfksdsNt7GcEVofDvCkg3EQ2QHaLK59aHDvzYSoZJY9N9yCL7TfrYq3bUHmWdM74r6ymXK9uKc5f3XJoG7",
  "key37": "5ar9CFdLxi2HtfPGf7BZ6uJp7vD7qhAAVMSFRHaCEMtyza9fZzYTmga9HeYmo3EsMf4CE5r3xEBAkKPm9shWGbj1",
  "key38": "5mJVe9Fn7bFdNFbKcsAgiihSJrEjk1QfWKA3axFp5MjtuhurNNXFEzAbpHU2BnJS3oBaAH7s7yTiRT2YjrWuNjm5",
  "key39": "2AL4K7v33R38T5AavxT1hj76S5jAERj72fZDAGaq1CyDwoNVTwuCx96jmHQtwny3bBmjcPYuuMhGwhE6KR7eSCXM",
  "key40": "3wkUj3CMPQ9dsmNJiU1KzhWAiwQ7PFaaHhPEFCVTyZNKHXA6RQo1DpuGpXDEjeuRrC8PS9Z4kafR6vEjKrxaXTug",
  "key41": "575Hm7NdscorqxBfYASumiQdPWNiHY7yvbXAZhpXHFbvRC7fw3kzbrbaGu6ixPD4dDUiRbvM1A4fkjZ9ZRqnB2YQ",
  "key42": "2Js5c6vhhWebqTRxkktg4RTfFs7UPNRGrC4GpVPCJ2bG7maiLRDbJ5dLiHri1HEi5AUcmfFEBTjYuoYJYwnJVvHa",
  "key43": "4LaNpA6e3jZsJaFhXvz9NBEFoVpKhiGpbWzDW4TNe3ceBueWWYkKTwLYSDkxHCB5ZZMj4f9FcKr6N7notxMfxodU",
  "key44": "RL9tTwVi3qdqAC9Z9zxbcBicjZytf4mNvM2825m4Cwg8QzXarXECxx3E8Cb22DhihMVC32FEmAMFgWdjhy14Wpa",
  "key45": "4oN13ozeyPMS54EScCYyFjKGzXHaCyx7c8RZQ6PBGiWvYeKrRvNibPBqUWqWr5zVT1wCAaDvUeSRgggZCrxm7gWz",
  "key46": "3R1BH56q3As5synjkjoGPCKa2YHTzYixjErLyhu237Uh6zQZz6p7vEXysBvnVbVtzAWC5xhw3EjRa6fz2oAyx4Az"
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
