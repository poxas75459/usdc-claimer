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
    "m6WnkpSNcMFpBvFmCN4GexafbiJbGXA5N5XHTviCwApg8svyYdgjrhABo56NArTRUArFWf1oouJWmkgJNHV5hmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GL6dqZ6dZexDwpppGorXb5yUTDookHpj6DpALWGVYY3Xvu2s5utb5JnGivCaN12W4scim8kaxjr9uBXxq3XWLc",
  "key1": "MLwtQbKkJ8LNtxMZ2HP25FUr8uS1ikWPdRPBypAaqeqJaazjFc65PnjAaTvrS3VSmPuTSpzDNz3HpafKkD2n7Xk",
  "key2": "3z4oagknfRNWeutZU6BSXDKWVwUU8YFdZBTKzNMFHPnWZDELadTkFrSgphiR26puyCN8ayqw7MTt5RAQRQWMnjL9",
  "key3": "5b2HJBa1WnUQg3dN8kABQQAaSUqxx4zPPMzPKSJAbYqrWN5FTrKZJ2e2tsSiBbhsdrJ2s7PBP2rSzvg6Lm1zaepK",
  "key4": "NGu1acGNEtE2C9KYpYarHc3TvJ1gvABhc7tTs46zvUwbTdKi6FnRCJvv2uFmTFDGDY6wRbZ8pR2rQkeRVf81moA",
  "key5": "4pdogbEGqGfvCkfycVfMPYy5fcDxT6CahmgkL74LQAkxkedz72YNmTPzTCGbtwxLjwVvawLgrM1xYCEJA9dMwmQi",
  "key6": "39sQi9UzZPtZzLZZybg2aPkWbQQqHtpBY1SaCMAvyiHyb3acrxCLVUedkhZ6CF4ewmqtHGGoryUNy4Cy5ySdUZ94",
  "key7": "5JY25p34nByqRxaA6GDVBP4tukiXQTuGNrnmPW59ybWyaE4JCyzJXTu7HPRuCgP4c5v3SCN5VR1b3j78b1aYZ1Qa",
  "key8": "4dVxbqH6Lk81Yy77hzfR7jsAGzoBUFKh94fefoWNiUzUcVGgU7mzVpxRmJezBG4pssTp7JHNKb2GvbtdryUt8Twr",
  "key9": "3uM5GHHvC2zL47na2QcdYaVTziJW9qDpF6hDacGERufmizaqRe4UrVsVAvPpWiiS9PBZx8PKAZAv7GLGUHJmYU7t",
  "key10": "4Rf7FYoCsZBrSNiQdLEBwULZLiMJKhPUzxKEZVkP5RYUXrVwV1uxrjHV4JEwVWkMjPuQzRvmbFuoFL2Y3ep2wkCD",
  "key11": "kcxic9cudHJGtiQgLfs9AAG7gekJWh2PajgbakexZkiNv8DrshAyRZVMaRG4xtcm7fYeMZpfMLgJAuMRxJEkr17",
  "key12": "2QoDmpeXaErPQfYriqQqWcKZo17kUfX53oLqGRwrztdpstSYpetAYZtRt1crNekkyVSGqewhmLewzxqpThRviGJN",
  "key13": "3GbLYT9QS9nN1srVq3u6Y7G5zrr3kZLv7dGDC3EC7viH8pV27dfAe7qTwDZ32ve1DjhsyN24GQWYd5W9aWZVk2SQ",
  "key14": "3TGzJLCFapEj3VPMsFxFS7WrpExfFALwnLAAgJtBWf7MhhR4a4SUvELQLPYB3urD84zttG2scwTTtsSXHdpVduJQ",
  "key15": "2UgtmkWK8rcgegmngN8xh8mqPiTmVQspscPrVnXTfU84xtooYXtMHVidjUMeBWAd8qBJVLnRXq7Kz9bVHCCi33r9",
  "key16": "Ux7pdpDyMMcWC29U7BFrJZLeG23Q4TNydNjxs3JSjZVhTbeVdq58puDLy74tscSvWWwjK9DL71TgBYDyrhBSSZj",
  "key17": "63TLQJeggTy6eYjo1dyBKXQQwdNbV8YE5pPA3AHvD6rYQmNWgp4ERLtyFbqj7WScjNCTiuRfPdacEv7ChcPjpTU3",
  "key18": "puacqt5P2rsDSVqhdCmtVeK6MXPrZBhj5mWf5kjw3f8bcXsSfXtoPoPiDyrBquiV3UxH2PSSimxvmwbw2ztmcec",
  "key19": "5kgz59PhVqzJYa5HMrAsE7J9EC5aXGxvhPzvms3iMoRiMEESH3FK95CV7EN2cYP1xSX3veQDHorb19Tf4jtQugp4",
  "key20": "4q3Es1C3vpAu6Et8r96fJmBjbFFyzrJHB1qJhHVmAghWSuWoErLLt2SXw4cqSYtWkchFK4JdEsGn3FXn9qkjKBhk",
  "key21": "5HpYwtSLPCuppfx28Ujyb1JPVNvV49VUAMsX98sooaLZoJ53yKASr18TSkEa1YTVRWwF37ZwpudGu3XWGKypKixQ",
  "key22": "4UnoAfeSxH2VAsw6s73vN355E4NeFtKX826njEj5tL225tTfE2Fcz6neBbaUTKHTMjoGE3BZYt7cRAzhfcP6boGs",
  "key23": "2fzrPLBttnPVajTUewx4BGSG83RR2qzEPDZZsFdKi1Vh9jqMhvtXEGc3sYEmyH3YoNRCAMntAkG6R3idRWQMF4K1",
  "key24": "3KtmaAoyLXvJ1YxdFtbA7yUPWRLpcpKGcENF37LDBQadFJDYaWBMNtjGHfkEPwebxD36giuxXaD24HKHBQ431RUH",
  "key25": "PZMN5jt9Vo7sGRtCkLdKip7hKzTFYNX8s3a1FQvFDfjrKbUBK2F2KDaHT4UkyijGG35vCkrNDR9QBFDw1EboMVz",
  "key26": "3TbEJr2vCDR5kb3D5gN2hhyFPogFXv5BFMpbBrj7ZBFX2PzvXdAU8sVFEMY36p3YZDRYdkKgxioN87sShvy1DyQX",
  "key27": "4h3nHeaMiwCk44PPNGeAuCdJgVj3P3dZhkPgnHxio2GjbzKEydBN42Ubk8Cix1rhbWHwmVAyoCi2vZc8VHUrdZms",
  "key28": "5cKfAoLzoE9S1R7tktr8dF2bfg3PxvdLEmHoadRczwD7ZvkuARX59dT4ow5nzktqDaxHiJYb13AJQW668p9rycik",
  "key29": "4bfNaBACM9JbKPqWoHkVG7U9AmFJ5dzYipnfGUqtYYWwwadZxhyXUCKH6drrYeZQNRBinkGWJLVJYgkwA28bX1VX",
  "key30": "4y4z32QMWkTi8qpFaWp8kNhVmT11Z7aUTThwc7Q1bW8B3Dtf2VgTjtCSsEnZRY5zWDeoKW3upSHZ6Y5UDgR4Kvx5",
  "key31": "2uJfRm9agTkUygjrMf8hwySrmYVmdcgxnwM4qzWtCQ77rByTnosxLykz7vc13ER9UhNQoxX6Eiq4mTxgR4MEYTCF",
  "key32": "2HHdc94qVyr1LFjLdomCyi1RBgsEVG1cQeBEoRBhJ2UBWfhexsbiqipHaDQx9M13ZAkXCJV6Z77DYeEy4P82QyrF",
  "key33": "tRP1zHEpctHSNBJvmvtq1vat7CPNV7sgBGjZUH3VZYmg6KvLTCWxgxxFDvM8uzXPAyokezutLuWJvzP9PcRM863",
  "key34": "4bsjCWbfvtfizKsg7Sef4gyJ8Sn9FZDttYghCf1x3ZhzZyhAiuYmWi7dQMzy1FSMaHc5n4deLjSgYJPCfjUmwFbg",
  "key35": "3Wpn8HVFBbN5hxWeQyCNK7W66fUR7xkC9aBqrzgeioLtAMaVZTroYKjNcgZYUvCJuaBhNU5mTwrCke2ULUvzGFxd",
  "key36": "44gDuoAumsMZf91F5CBeFdq7yezHqTFiqQTP6tTFNGZxX3AfYghCzhYr6iCoNm8SKP3D4nWQNucmqTLtDWdGG6uN",
  "key37": "33r8JV8YoWc7b8HA862cfXbEbiC74ZhaLqAPT4ubRDW6Ri1iwm1rCrWEj4e8newN72WtXeFVbEHh4tZamVcpv96b",
  "key38": "3hgCpb6kcKLBZbnrVk79snwMX4x4JNMWtUxTsG3NUTL23g36RL7vbyBaTKb45Unym9URWJ6prpBP9m7BH5o2viMe",
  "key39": "4eQu3wBdWzpadCgVhL2T8vNk8RX9LFrLbTs1c5CpDFJSq6yrE7228LCotLptnJN9WpFLcjUr5v75Sm2FTkp2q3gj",
  "key40": "4jvD3w4LgHB98g4Rus1w8EgiEL75hJs9Getpn3J5UR2c76Crq37p9rbZ6h4KPWuZZDrcUJ62hZi7mVzYhBrrQhjr",
  "key41": "85quyjbVuW39R147K5JuQiqdtmaJYp14nBfGP6UxNakUB6nJ7LRZMva4PkrkxcSKDxMjAfayEd7FJz4bmWVCPnS",
  "key42": "4CpR2yJ3waz65hLokEtY4kVf7nukbZFbQb255u2XrCDaXN9X6ZYugPUGJjpQPzK2imrx4CaCtFjhg5u2A29ZBoR6",
  "key43": "4txjfzBLHrmrae1KqHnJCDFEgVPRBNW5G56QNLpqXrgyJ5NLydxUzZ3p6N1BSW9WmomoUtVehepkNHbiahzFHn3y"
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
