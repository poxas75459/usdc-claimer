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
    "AkKxzwiAkTbyGnGgQu4sfzWqDb2yZtYJKSf2ue4EHZrt4RdpiAhG2WsdPU9iMr4TWNkXxzvw6SCDqjVNdWDoQJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7pgaWFusVs9cjnbX7tzUMw8WWoRGugJbnkrYxx7GiS8azztjG961CS7WEVTJK1Qq19Pn6SYe2BqcAboAw2rMCN",
  "key1": "5NRBMtzKNLH2kz5FjFBgzRnBnEChuS3unaaQRhQ6dasBuqJcEaUCMkGFnnqn5qnjuzBeMcn5o871aAS8WeyspkFH",
  "key2": "47uh3ADHzSs69BSUfWhyCdjUd3NormfjMNYdLLQgiSivvHzxHpaRVJoVAKVpDkLmbxR1i65nzCTFhr78o8uWDAUC",
  "key3": "48GRMA7RFGnBuUASxKRUkLdcqMh9fJqESE7j7h1LHiwmWNY3GeAXpHWzU8YEg3WgMfBEUWS4XXQUjMC4kLJa8d3k",
  "key4": "3GsGAr2C5QgGzA2g2U6dEK9xuWdjeLaJBKYDAZqWfr26vNEsPifhutPjrFD56woQThho1RUQ54ajnYxBeTruE5B4",
  "key5": "3osbUVkDjTGkajKKjSV6HjkyyutsXY3M1g1Gz9GtjkFfzLMPJdTGjZLwsmggSuqFrK2hh8BU8aR9UqXZVaQaK4h3",
  "key6": "2Qvs9qBLFT13EBLqBhsWvTS7Rj2HncvHu5HnrLEo9SPm8UJJvEm39baPZ85Q8m6XMb3qcSeaCaMyMimMrzZTRgcw",
  "key7": "4J1THKxzfysiAFXistScLzRiuUjHJiyBtcJwxjDubDxqcrEx5YFgMkasCMMuAHpNbEoqkHJLsdFsdqimsgJXiobf",
  "key8": "4gipofC3fZJFm4hfUeNLiucHWw654dV8WVBcwfYSbE3mzZYhCGKxL2adEgCZhRqRJHRCUuQeDemXyrC8bhsyvUYD",
  "key9": "5BiQNmLsRGtUK48zwfK9zECGT5488zxDVRoHFXS4iDbXTBmiojcGJVnDUXfCqjJ1u4AbqvnYhBjMWgGLYzzBboYq",
  "key10": "wXHVc2btR6vBsuey2jqwPFFMBcYq72arj9NR4Z7V4EusgYfgqmamW3iU5BUDeawC8ctsa9ABMwJyhKSDgDhN92H",
  "key11": "4kj1e4d5GRCNfGunV7cSAJssSzRmvJoA8ms4rivocpKhUp6jTZxTqEgJXHZmaiSUbeArMGvxp4kYxE6kc5pV2hYK",
  "key12": "35XE3icWjCnEkAB8sDZh3btnaukUAcreTRyATt6mUGxFiMkkcQ6BC8Qi5yWwx3jfSmLFiWSqt6RHE1vZ8bRBDAWf",
  "key13": "5i3nH9DbEhEdBsVZdBCfmXGXmkes8vg4bHTFh9GaZrzrW4HaQAMquXA4epJ5TNBW2REPDBEDDRJadQutqR1UvMzc",
  "key14": "WJJUagCY7mynNtU9PrQ3EH5FFyQBh1B9nFtp7c7uG9gQy6pePE2E5MrHc7XpyoSrV5oHuCevQhS6hoY2EN57fHx",
  "key15": "262rdhfa2eWPDSRN328G3g6Fno83HPfVs6XjVYiK1w4H6bsFwhd2K7PrA2NpbyX7ozam5rSKKhsG817ujCHZjMyY",
  "key16": "5UxVosUQZhUR1WeAg7TA83AB4TDS8oVt3u8w3UPhmCk2ftkFgtMi4B9VQhh2AgwRXGESrtJWqMsFhTZjQUEE854D",
  "key17": "31TEbH1vxqKQcNa3E89pbrjkakUWYiiui9BtcR5YEyWE3Mzra7xTarnBT9GTTy9m5GU2k3jX6kx98WDgd3PV4wZQ",
  "key18": "9oe8mHi9MXRBiNKkq7QK7ALSW8R7guxNfJwfZU6eBwSPG9hvtJM9QnPZnPE8XAi4PWJAq2DCKN4c7gBgjR3GtEf",
  "key19": "3wWeRRmCXmbHZLTX1JjMtApcUaAetXwonXAM5ZQdHTsYvPGqVvjZqQ4nTcRZ9SMq2DTLNuiEjyAwMMMp8hZicKxj",
  "key20": "Cp1KLtvDjXC9LRAKG42Nh1zUiJxzCmwWYDghYsgKQgZdziJHcDucMGBGXaPiXDYwn9F2AepKgUZQ3F8K6gJzgr3",
  "key21": "1VdVwCeWXwLXtDUFps7qWteDjh9JxVKnzSEP7ZTc2jkS5NLC8QtN45mX1a4hzU7hopHLJUFrFQKEVAjEpTksPyh",
  "key22": "45TkmKJRDVJdQs1acggRouHEsNhqJVwgs6ZqBohDvVTKx3yNNkT1yUG8qCvLqtNYQmNvazQxntZoevVvY2V7eJGg",
  "key23": "5DzdrCqmJPWhDF7tQHcdNipuLMvBU6bfwAfxKSDSiTcvxMHH53w1aL4oUBpiFRc7Sqb8PNXntm5yp1XM5P2qFuVj",
  "key24": "wqMQpaKQ4xA6fsQoJCp9b4PQt6CRRXJvmmB3h6Z6zWsi4U7gA9bEScTdeSmaXJWgUMG8DusHbDD4YMp4gtWwgJU",
  "key25": "YH7EXs4hQvApzuZSZ69Luvw3sqFdgGqGvbFiWyrTozBEGYBvfXWnp2G8o83hg9SZXTejYycTQgFF5SA7QKqLAiQ",
  "key26": "XVH7MoGArQTigMvyKe1gpgaTnszDRbugMwEAzJ5QxJfRLMMWtc9m7762Xeyd9fnrjKQ7czoMz9PSPaFQfrPDdYh",
  "key27": "2Gc1T3HgvVcDtXmnDDEAgowAn6vEF6hBDx7SySy4eHaLA9GtZVFNV6BKZuiWEFJm9L9c1BLR9PB6267txKaWACvQ",
  "key28": "4R1KzLKaTS8qPxWf9QkzHqfkgUpYstadrUFLvAiYX2uwXk5bfaLaPeMtdnm8EZLsy188tTaRKDTSuoCFPUdY5ruh",
  "key29": "4g2Vucg2CCUVTqrgDb2kgnCnUm1JAo58bfUphRk5YzgJpJNgH4NtVTsUjNCDQEdQFWcGRJLhZvahrRLu5GJ77wh5",
  "key30": "3Ep3wdBCYitg46Fck6AZkkkZuDAjo6c24BD9KBqFnseRxM8e24TNWEv59cu72nHqQ9VPSbKUrGSWu8BaQfwvm679",
  "key31": "m12bVsQfWjxwUsNU56EHUeFQFCAdj5EmoFYopzozkD39rRADSne7862f98efKHXnQsKdCeZraSa9rNihoW6FW7Y",
  "key32": "RDumzKB6hgBifqFMghukYect7LKeih7jjTPEfctshopqUdwU6ieGrb71XTwx1wcid6JNxp2nhB5UXMnPHGLb5dx",
  "key33": "3qbvwjoQMBVHexgPBmbreh9KRYLEGgYp87mTzfEDaaCwLZF8Dmy17eX3yHwemqvmUCX5Ppb8YgExYPDmJresRWav",
  "key34": "6x9c4dcas2YtRMYfdVrQCeMXk4skDL3ukDjvFHz1pZneurKpDBHgG4jU5QzrNd3ss4s3csDjjj9EhdFvSk5jBfR",
  "key35": "4LFxaMZEA6dNhETTwR7xbj72Q5q6mcrCbfNXHHTYPHMBLLc1SyPsPwqc9QnuzuanEpQaUCrKfRvvebbfSdaHsJnf",
  "key36": "4m29nDCKkYNowxfSajUfLvgrhtizLjwPQLrBwEuLPVubDauigYupppiEynTmZecWtAdPNhDSk1D7tv51ATY3aYRt",
  "key37": "jUGqsec2L4gKrfQRnKETGaAj7Dcww6US1YBxB7zmaaLYA7697wP1cXi7R9iwGXeu4zBBawaUEVSwGETwEpQAunK",
  "key38": "o2Heoe368VWm4J7aP7JYfApcRxgxkhA6biFEQxWKUyYjVQw3MKxMB2cXrtncTT4Eyp7BqrqzSHaXHfGz6i8NCqr",
  "key39": "iijvqA18gn8WvFBkwL29fcaTEjNanYKtXtNJWpkZkrNAz9hAPKFN5N4Jrr31hQkeX49BmtWEHY7JVke9aNXqFAx",
  "key40": "8H7cyRMqoK1QAvWLJrq7xNkQyvScwMSJQF2vfaj1X5uCs8NaH7gDJp4ZBrTZqnuX4Nee1x93GTVEToPPNjWK2UZ",
  "key41": "2ZHRQMGB96qWdL6jgSrHwmD1JxqtK5kQgsvtxcba22rKSCpaCv1UbKgtPFMuxC4Un9khxy435DnYPGpYC7GxVhph",
  "key42": "4prFm2S3U55w11QqL2t5ckYui18hECtxEuzFnkXuBTyrbFPEGWvcoeFCqMwY7K1aT4nrZZdqjZyjqVm2mqXNzhTV",
  "key43": "2bUXYr6fctWN8HZDxZ7aKSeGRTBvFyyRCLt2tRtJh1ZJysSnCorBs4Hf4WaD9YXqGRKajJmmUhjitXrgup4HDihK",
  "key44": "kjBfwWuKWJsQjcgDfJWux5iKnWpKob596CqoYPzE7Q1fPwFFAmRfY3RBDWa9xkstdvBiCpFiXsxSfWA9vcdpMx4",
  "key45": "YFCmyVBp6w7G7QqYuiM2ZP8u8wANgTkM9dznT8wdmermhPHxosE5oX9eK7XVSk1ZnBn68SKLpfrheqeKmyfphQu"
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
