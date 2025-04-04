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
    "56KNyCY9f2Zuv1DxtZQf6cstcc3boGmAr8kZeYfHnKxb1bA8ZTGCgyBG6fCyVmsBQUdEqwgVMYk5s7c3CLZdwWu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K2KgbGs2z2Mcr2GhJAiDcD94nyPHgAM7X9tQhDo8xK5xD3cvCM8585wvLhDWF71cVHU4YNMwZCC9GTU5myXjEjN",
  "key1": "53aaLTK44y8T9jkwJADmT2xQZHsBU9ZoxHS89y8qF4YwQuBD19vRAqKQiscfmCJMTmwEbnxPudDb7pkWnX94Tgit",
  "key2": "4paFmrAXoTpB17STS1p8pp8dBkgdM8iqfjiMkR9MFsBRXf1bH5KzTxhGXzj5qftMXjdK8dw4VaYSScNNVyBGekJz",
  "key3": "3VRPDPxXrjqA9ohRndxSj1rVAgEcg3EuQCBEuLuNDMjA3PF3ET8TvnauvfhyFasHoV3x71apMrZmnqqTCpS2CKid",
  "key4": "3ofxVZobAVgtcX5Xy6dCpVrb6tvBcKuEXUT8BMp7VyCNYFtucJ7MKQUMz7BwYWRiUJdbauUzJQ3uFApzsJjBiAC9",
  "key5": "3VecB3CUwDS7ZmKQP5YywBRXCwXJmtYNCAm1ax2KUMKbHLcc7YEBPQodBZYspYCrvL2n6oumxj7p3pVLRSUR9VUz",
  "key6": "7qRHQrUmUYXu21oshKPx3sfVktaQKitVGouTNuEWPWBsrmGKERTQj6dLL7onRZnFehPvTbnQkop3iEzZy5PjPrf",
  "key7": "626iJksJFUQmGe6SfV6MkGMn5CWnjvK3BSzqYMPmt3F2FSQjHmbZWyB4AXYL2S9KVodz3HxJZS46sdkp7FuTSrrf",
  "key8": "cJg4QjzRgX27FhR3j1t1EQ6yeCCMmiwLyzyibhrPj9mBirjGPYtDemtT3eZntrRosJrztMDP3L3ata3wHtLfchZ",
  "key9": "3Aoxc9qu2DcAx2xsnRJU7aLi43b7Va5YuoaWyV1JxWrwUVuZVDjG3JSkbBo8TSzZkyCEsjLZtdZ5eir3ChFKnWky",
  "key10": "3p25FNimyY2rBP53nkyjs7Jou3X3rAZUb4SJTTKTvtpcrJqDVNN3knsZQ6mEP24Mpgsvyqz1EcY2rUJuEhmyiHy8",
  "key11": "uRAuuRfNUZxFTjYPmXWGGLY5cWdjaGXsT5CrZrYxCBY8egpKA9Ra798Q62k9yBF3Hs4i4PEYYRuS34Sd7xXjfEE",
  "key12": "2zCboLJgWyKwkBp85K5hqQe24wPgU7ykEiJCWGifiR5WYQUAkJDuieEhX9fYwbAgdsrfHCfs7cSGHtgytVQh3L2W",
  "key13": "3dxsgwY7hJXBdUfD3rKqKkXzGrASjovKaSHLzzJbYHBBf9TtZzZrdBU9jLnsbbeq9QEoT8VVvdxunZeFSCmXeCRt",
  "key14": "ouMqpakmF8HCg4G4cHz6jTqgqQnDpsKJyP9Vbn9BLQSTPa8hiXCwSCSGzaHyzyRjGViYGw5D48KKAYxL4mrDTh1",
  "key15": "4qgEL1JGLJmcEJLvxiAj6fJBY5qQy8rBGD3fHnPuafrp5DbzkNBCkpNSGakiYFdDmSPi11UZHY9y4Vwu1LML9QN7",
  "key16": "29wwahM7qYLtGyAA1HvURVskTMVsnwP8JYGXiV8zWxne7NNgYRCxx2mEXKdessZe85jHsRd2GmkUSwQmUSgCeozF",
  "key17": "3WFEWkbg3BAudpfKKUhx9VxvQprR8mRpFCsvzVJ42kta2hxuGJQcKfwrHfSGHAt9vADCJGLLMNeLVnahTQt1uGrA",
  "key18": "2k27tE2R7snbZVHFFmZWXoJsRkG6iF4pqgtHnnPNTqkRPt3SsAaC2YP4u1KBpoMJaBo9xruYe8Jm4BgAdKuwj1kB",
  "key19": "4jteLq6cUsHV2tNrYmKgWJodAGd3Fnj3aWYELzRS1AfXoJ8X2ZiZCxXT2p4SSHuakSKGuj8Txdf8c948p7iK5V8k",
  "key20": "5BqJjLtijzRwmBS6XctegmCa2TRjyTjbDN1DmgPRYzBubU5ExtyMpjHXxsNFvomk2LbxELvWVYYHZXkGEw1vxb1M",
  "key21": "2F42D4Wk932fQjkktxAZh2h4EPXnQAn4LgbKwDYzEUUkgQTtfjBcdr6xxFBfCNeciEtZG3dKXEEMKwBCuxSyixd9",
  "key22": "48UNFJ3KU3kDURjaKTxHD8yH5oLr4WH3Z1dskcpP7vDSjCUNMATAYq7UwGFd8T9mLkzEGJ7Asm4F7cQavn67yJ7h",
  "key23": "35iGFjcMK8RPJqdW8B4bErqDJKnVek3VRQA1XbZjoQsnAMcr2eC5UpahQaXTX1UgG5wNrZ9AEPZM8ZL138CiMYza",
  "key24": "23U5ajBwYrXbRGnwDCfLgdXvKT2zuva9BeDPTpA7HaMkbGUpwhXJbRM1NkKSR6z6ZigZH1Ktf8uDRjR9kMULGqX5",
  "key25": "2FjeQ5LzvF48BqmmV7wyiofZEYhc4f77KQuijLXJ2HEPqzeQcQ9nwkN2YqzLNBxNhNtMpzv5FgSTwamBeL5LwTvR",
  "key26": "4yJaJgZSro8Hn52174nNoA9GD11htHhgxNvbdCiLZsrxW4gHjZKs9y6DMHyrvuwwTnz6bE7WiSWh2KtpuH1AHUuX",
  "key27": "3qyhZSxJEtvSp4UkarEqqXtuGAFJX8xfURgbyn71htwwMdfT85TmZhkciyW3BuP28pAznPnPgTwS5DuQcS2fkYaG",
  "key28": "5pVPMt23iu6TAkVE8UfMqCoU3qbFfVJAm6haXCd7VRuc5Mn4VsBjcRDCfa9dPSS7Pf3QZ2GMjXtScJthkuWsQdwM",
  "key29": "4r5MNQ15oBFXiiK2ieUdLpUAjTTN8V1sZcmdY6cBYcp4Ra4cBg7GeFz6EDxC2yJgzQ7ekkyFRVfVdu8m4z95AHYJ",
  "key30": "Awir1VmzQCzwbzbBHzrX2vLAagCuX29LmXK8d9TYLN9x5kgxEo2fLx6ev5gJG3H1wE61CKr7chdmXM6nzD7xfT4",
  "key31": "31pRW5CH6tu8yhLrDw1nTyo2eH6UbSyiDDs5zEGEaopuHbAiniwLUqKXvxXamACbZQtUhUtxVJK1zJCZGWwmebwJ",
  "key32": "3z1VaVVH2KGun3EfszXyBvJaBor3iLybg6DzvhFn7LMpFvsdoQF2tAKZidNV1CfPwS7BbiBiG4jMDzYd5wVf1fW7",
  "key33": "4Ub1viXY8AFm1TjXuh4VXejyn9WXorpqUPfHz5vPBAzz69fJNswCTgqSSk7kjRydBFNN3r3bSrNDsssKFLKjrrZA",
  "key34": "giP1rz3KsstdDvwYfuqHvXwq7KoT952n1Caaw9tfqH9BPsu3t1oL3rzfNQBKGf1dYcnr9xTmREFWB79ZDdU7mQ2",
  "key35": "3JsGKyDatzMwR5V1vLtYJi4SwvYuTrMDJGRbF1CqR8KiL8gcaTbpkGyBPF2eCvfZNj7diXoGQjRpQPrtn8QRpL95",
  "key36": "3J6eHu64xApw7gBWMB1iUuKCuJwD7rJ9nmXWD8CGigtkoexPbjB8uEQDjnu4oscZRZDnL3EasMjb4b26tnsrjyr7",
  "key37": "4NZQXukmAbnswTkAzUjo88eYGx8LvtNDj8M2Dwk3LppbPisJsZekkbU1CnnhNBjmyi4wMwPPkrEuuQB2PKwjiSwn",
  "key38": "3gsfu2vMi5BwqhCYudfAWCWX38mfEwMFR854hq8GrvHJ54uEZR8oRgRaVuRMcGKKMywyVkVFkXnpWRCK9xFKjneg",
  "key39": "3sx8J6sS5xAf56DYXhBp4zAwwkegA6qMHXafXd6VRSHTT4BErjxHvH3GmM14SNqE1Bjs6FA5QBWW6f3QfwGie6NV",
  "key40": "3m2smyNPeHwhjQmMLhCzq2WFYHQZo3YDvMfAJeinYMJWDsTFwpvw9gb1k3VyYxK2EtSe4coc3PrzDpN87dUEsBVc",
  "key41": "FEE3yDUqpTK9ZiuEhTVphmzcKQJ8FRV2LATzDhoWKz4j2o4gRtFYXnSVPx6V5QqW1Ltk9ifgN9m3dgzap1cLhHg",
  "key42": "34BjsDRd34jFYyb7DPajft1CXDeubuo61orfVmNwCMUAoeR3bEaUUYgb4KPRm1A2RPqE4Uf9S4kZF1Um9TmS4Wne",
  "key43": "oKNbfBK1eHtZh6EVTZiimiF5kgj1oneYv8XaK8BhnXMNzkMCqoVPSHtcWdMX4AJ6epLordRDJHZpjUGzRk1Nv6E",
  "key44": "9JURUcoYedupyVZKprAcFYw8GW6DECxyqWz4uDTNRd4FjmDEEh3qg9GSgG3WYVx7ArDMmyrr5NpP29J5GJ9A5w6",
  "key45": "5ivHCiVdSEJJNATJ9UQUJxhzG8r5DRiRX6Ma5AJMN3ZDwsPfUHiDtJ7cZTdQbLJUgLUw4pAJLFMJAR2NXoFJVfZ",
  "key46": "3swWHBFkiixZS4ZfckyAJQXinTZBumTV4U15AJAQsJKJ2ZxAAJnpbD9XoUyq6mrUhHdpngU8ZjogP9Y6eSwwvwFq"
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
