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
    "5zD6qJ7LBCT6nGC8EVjFGkSi7pqo2HmnRJyvn6BNkGQDpH2ox2v244QvZ2Ro3vjmx3EnVEnz6ZGQ29t2npoK9tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JC91P8hb1BV4b8ZfZBjEkaNocAT11NykYvbedhPhdbxSZJpQ8PA1bRkGX7qtyScrzMBwZx2qQmx5q9Ef3VsYpwU",
  "key1": "5zggDEDjjyGBcfNpJGByuge48Yurn2CJNdnd16Vg8HtP97CuNvgMsGSi8whcHSQKMn5kSzJd4dr8C3Bm8hJEwBB7",
  "key2": "24KLhzDbjRZftCcx9vdeWNVV8wHDocAkatMZkg15LmRPpS6Ao18tmq3PCUFgxrp5ve85g1WT4WLtKjTUmHwJG1Rf",
  "key3": "3H2VSGh2dj6nMnFyfAqkQ3c1MDnvqCNAeVWKWN68k55bXdby8Rq9FMYH13kuFYmWobERndwEMgnNWbzrWQMVbBM1",
  "key4": "Dft4zyQH9SJMRerQ1NbFCkmQEMLXF8zUZ5bjZDCoBoQUEFkEKcPv8pmLzPfWUmynGfN5KKB1XUCc5ZL46d9iwgo",
  "key5": "5Ccs6nZpeM17qe7JKDnjYwYRconKSE3GrzozPHTtsL5ntnN6HgDwftSrT6U8T3VQAW1TjCT82zbTRtZKexURpgTg",
  "key6": "2D46PxgiEitTjHQsDTNHwCx5Qw3869NTfP1mi8NEusEbttDMWiwJCQu8YWepT7747jwyYppG2b5u8AdWspVx1qJU",
  "key7": "3PLWzxg3oV4vtLJRLsbyTHb4CdZTLDQ1VPzjvyrCihFGtc55BP4sJpXeZchWwwAhf3Th5iMEJo2PERVpYVFrr1HZ",
  "key8": "5rHZWmEGNWRYrn2E1Vqu3sy9rbqYwXeyk38AzyNvVxDKZK9bYbXfxrw7w2ffcCrqK3sBvtKfDJqdjyzkGRNTtChV",
  "key9": "2gMoo7WGhApGhPmtqUAPboWbhiYnfsUeqjYprJMsVrfXopbDSo9VqhH7CTLVS4kcsnhE7a2dzHqaBEJzu5xvDZqL",
  "key10": "4ySqjqUGZDcZB1BfWVnURNpfsfi3WLTD1a8fYy6qDYjLFm33KkHPniTS3otYsgBYVaTDXkBHkE3pQnzc8cAgcVEU",
  "key11": "2yUaKpSeR71T3BZqRbAoxnEWUDvH9h7upsP5bEkTJQJMQL4iL4dSxbyW7xfXvTStvPSybFCitUFkrqKWotQL7qvC",
  "key12": "54qB4J13HPGZnsy8goWGtgKFX5fJvujvAg6rLoDufikpkrDo1baVYgy8qSacSExFU7aE9LJqBgHnUWzC5fhihyMi",
  "key13": "5nvqUoQoodbP6KGNwtiQbft3CGaR4NwpDQnr1Q7RwDs2gHcK8SmtT5vwbuxUCLYGsTRCgCDLj8SrmqNXTXSBMJ1C",
  "key14": "2KzZpH3moXtLzCbSSidnjAQCq8ph3uRC6rJdX1kegAHC9PtZjT9wmfwsxcREUgM7wDfiqNizTG8TWaorEwjDCKwy",
  "key15": "33maBgoFkP4epx917oLqAoR2XF29PAy6Jsb9NtGdmHHLRn8SHoWTRkECV4gLMhSR2K3rVGeXVXAimSSAXyKhcBGM",
  "key16": "2PVHRoQrTr8FDEKHUc5CKx2orQVD7Q9kc1rF9eUvN9a2QpCxT6mTkpuKNFaZbWEpLU6gtGBZz7TtB2eG9xVqve3B",
  "key17": "3s6AJQ3GJesnXD4vMG1tHoaTRa8PvNWfGEJKxeDwq82mmJUXxDk7kWHBVyZXjBf9DKpAvHC6ih1WN38hXGpjGwiK",
  "key18": "3YisLQ2HRaCduqcCRFaCwNKNcaKFpMLEQpPqYExpWRTXdKRh7pfzaYZLqvxV17iebw4RAVwg2bCwXoRRH7np6AUt",
  "key19": "2aJgAr2whuQdZK298SpdMc9W7jW5DsfihWp4xenL5ABgGvX6E5i8aoRtuhAhPUFJUWLMxZsm5bvAGYYRhH9JMMNZ",
  "key20": "2UxZJY9bX57s3pf775yN6k3jo3MY5ACEw5zFVLtWW5rtjLdiU4VzvcSURSnKXFpUkXpcd9Ty2uec3NNrss9Cm6ZY",
  "key21": "YYinwP5Mdzi9w5JX99gaSF6BBA4GEFY5UVoq7rZczqXz3Kk7QYfUYoTJGYvM1GJrDydZCLf3nhEwgqc4BnLGZL3",
  "key22": "bkYMarcc6zVw5whpg9JwWMS2rsP8696WLsehMoFEZ7grBzsd1kdPuguXUJiVstN1PC3TgEdZFunjd1WK7CMhNy7",
  "key23": "5AFUrjbvUC75gyTA1veAddBsbpyiZfNEt7fUK2YE8UgNhKQqpdPGbioyVQ3w2M6z9PnMBrpRyCbugCBEA8613EYb",
  "key24": "3QHPCSZSF9CmmRk3NYNMvGdzeYAvG4yxC2M5oE9MFmQRYaLodULH3xLZ7hakPGTYgPTeSGWYsp865Sa6pZeDDTZ",
  "key25": "2iRUnZfRhgC3fV4MsFVKAMXhq1Te534dRtfVzBik5YT4VzqBTqwEuz8odTthkMR3DUk6TzRoyPg7GtDQusV8N5n1",
  "key26": "4ynD5BquBW9PzcSf9naUaRJZPk23XGtLz6B6XC9ZzzfKoEREngVGwmXezZXA5yQdAGf1DcnFn4P2pPVmaf6EDNaF",
  "key27": "ESUWBjeD6LQCBzpMQda7YLwZ4ckjX1YLk8kvQy9qRKY6uzQkaKswALY6uSK8Q3Q66xfihEpgtSgrBtf1RB26JhR",
  "key28": "2hvxH2fytrPgKiT3SDu5ZkXCPs1aCpMDRyY5iVRzM1W9Sp8WFPQfFcfF8pMXNjd2p1HWGcJQyFgKN5T7cH5o3W6Y",
  "key29": "3b3eakssTvVHHY18AsMd3EETBbFhRMuXtWNH43RqRf5HPn8kiZsmzQiN4bscBWdTCc6BFretjSAAAp7aSFkQgw3C",
  "key30": "315EUj6BVUK1j4uuDp7odvZFrViqyiHBUUg5yXPePfjdsvKeqgtjoAK7cvMAQtgwMTQ1byZ4wiwUVuqkjw4v2jYc",
  "key31": "3Wy5FEfoDZKKH8rFWpqsmmuNGeCeqDPnYdhUfFiXS1BUSKriHVeJGiUbfbeuTFg4zvKKRXQpnW8ev3mUcAazCPZB",
  "key32": "3Ks1mEWjRp7baqetihnZkxgd7HftagVDGgEjQkxwcxyhw6hvyW9ybZRNFzpM2rzYjbVwHM8ojKuHcqo4WctUx1cj",
  "key33": "wdnBpVyVShSNcbWSht8GPXX6So6ZDz7cirsBKm2FGqBCwQ6JjunnrKGSaHHiHCurd88FKVefLmgb1CAHUq2dham",
  "key34": "3FeaTduRHUmiwNYSdoGsakidyaVW2Y7uJTvTzzyWVpoXiFUusNrmY8u1rWmDPPR4P9sTHmqCEEPUb7wXTQcD5pSq",
  "key35": "3wMo5UAotUTfwhAVbCa5aDV7hy8qpGzhBCLYdAUTJ1hSnGGjjk9UwbitCydLXmfjrtCGvGZrETEip1orAme9J2bR",
  "key36": "4iaBhL8282bcVx6ZSFodrnaFVW2uLcC29XPys7imhMDM7Tpg2xW7EW39UQpgyZkkzttJctfTEoSevAZJJjeD9Va8",
  "key37": "b1ndmf9TKz3ck3zK1CorzhWcNmq39UvQd4EtjANHHLopJrwtG4rgbbTZrvcopjh1n1hviBcroZe8o9Ei5TSig27",
  "key38": "GnX1vpExhFTHLh16kMXj2yEoUAMCiQHgYxVNjYyqscuz6Z1kKDfCU83NdzrpyuL3zkFW6UzUyaJqmyAaL89BGjK",
  "key39": "4op1W3dSFeSUJ7FJbBRM5iQyQAQ5mqMcoi5Pkjh3af3aeaNZLJHnJ45LjRoruq6Qem72hdib8ywSLkcMA6wnfa4i",
  "key40": "2qG2bpQvhBi7rep76NoxoYFzMGmgQ1tgeU1smcUmY6T1kSv3ttJmpPVatasH2AosiC2aTCg3pDhwApRPfxgH3tLc"
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
