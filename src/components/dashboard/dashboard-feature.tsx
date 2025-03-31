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
    "3kkyLi9xmVyoFhGtL6W6kLbTFcppxqfm6LuKBWBmEYfQfhUzT2E71ewAnALbLJMMpRHjZEFbxFuJpK9JndCPg9uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1epGDP5g5BzKS7onorb3miSUE8yZV9ELitujjLZ12df9KNdnzqadvQH98mVk6iRXT9mFUya9ZFykZhdCuC6H8g",
  "key1": "3spSYj6WQNjD7ScSMYxaCTn8JKx5ZknaK8rgh9oFfhNNEXKXi7HpGg3hqq2U33ePtE3kj34cg2RW7z9isUPzKwWC",
  "key2": "2WLDnvetFwzpac8tWfCZoaw1ymmf5vvjE1vekLdDw3qEDg5DxbNWgtyzYA27xG7t1YZktVDzw6a8gAsvpGjiPZ7D",
  "key3": "5zY3TdmuqWfwjJSj4ep557JeoEHjpLiEbECFUHAX7WPrJicrBd3DUzHcvLXFqtZaKJTKKq1BNsisnQvLc6pNN9Rz",
  "key4": "4i2dwsz8NiF4MEjrnr3soAWus7fMtThEDmkpMv7dx8d2p9ZxtN7jfZQNuEAYfmVeiS8i4ds6wgJhCE23wYZxqSx1",
  "key5": "3EmAnzgqcj28tqHnZxjJzTuCzBbWNe53tkKAg23fehbcN3yjebiiAkjhsv62F4KkPYMWy4FkZKNxG8cHK48WXpi",
  "key6": "W84aQUFWj19DNAupCSRKPPqt3jowiDWhLKGy87dHviQ54vof6JeUGCdmPAvgyqtEn7UrzXhzFL9PMTPkSYwLgj7",
  "key7": "2zvSMMnqkZThX5BLBxCgHJaxiwEvgFdvDkJCBeJbfSDcW2X9ggkXkRKvMthYzNpMkJNzmyhLrUgN5mJi2M1nwwjr",
  "key8": "y874QRsNYngdr3ixGHnq6Kr3LRtZZHoD1zUxYFA56t7zEudvkzLk1JRzgciashpNSd9rVu8c1smM7aoUrjz54Mw",
  "key9": "36Me4nV7JJDcXrjead28H8gUVUXywKY4MEBZuDxz1BgGpHNtri2TE9oxRCPm4a7khn2wAWFAa3RF7HKSRqyMCKD6",
  "key10": "5Ji73QfqRvhJC2m4mrqcW6QZg7GmDtrz46wgQywKQBqgJVJUoR8bWRY8fkW8ZCXxi58ipX3bVwAby3ipZrKJq9fp",
  "key11": "4FYK4W2dDhUPKhepH2BUGs5P8G2LiD3eL2WXhQLEnidJEMPuXySzo4w7Xtj7RYPxZcDztFj97X1FNuoUc8PQSC3X",
  "key12": "4m1JeYVdKruWaw5YmZef3DVWbPdF1uAYfTu4uvuMsLpcqBVAMhrkgfh8YPzhL415L1N3wZfL1ByUtTx7K3yue2Tm",
  "key13": "2Kbj9PwvoBYTg8bMw8EiPsTC9VJKe2rbQsxXt7mLxj6m2KRVUi8UaeaFbZFgqiJP3DscFqTLkd3J1KjPY8j6CasH",
  "key14": "4f9bxpcF6aYuvzw2v8xA5TEjuNwvuLJ2nFURVJdKmyyr8ff2arV1cpJCu6ekPTvfY5ECH89pUm7PWhjd7GrVCxAd",
  "key15": "2sYeAELeaHHGBQWJcWykBuRmC7okJDtyAbdPfEBGUWNL55X6TsjnY5ht3FJTsr5aqcafbjCjLrZZxgEg5Pv11f2f",
  "key16": "5KTzgrhoUj2iZBRFTQf3Tuc5r2XHZDaoPdu5hFsGRdwsV3hCB4dKYuwpRPUKtULygSi5V4V7isboXZRnG6Gf1RW7",
  "key17": "2wSdUoZpBG4WUm34sEEytbrfqVA2qtvTqkEKsNfiZivQDcQM1X7oiF53bVqUm9CXPzcympiMrz1X5A73V9jPL6hY",
  "key18": "5uJbPoSbnvRz7RGcJeNMK7J1jE83cgULTcT55MQwUjwmnme91TEgqJtrRvk1sq4KyMZuBy8gDomoFFy2BW2EVoRH",
  "key19": "5aggFuJVXJkWDrZUmhX1ZRkSkubzJN1P8Hcf7Rb8xhXs48kppAeYamoeYUCS31AEHx4Gg4mTn1F67jNjjv2qcwws",
  "key20": "2oVYSXRpMHXW6qsLJDxmFRibp6VaRZEkoJc9WgDPGAF5rtJFoFuPCUS8HRPapeNscup4T1Dnv1cC9pJysrSThjrD",
  "key21": "MVWBhLTGot9sqTBZVRPp5cZ5tatK4EAmtTHn2aP1w2txY8osscai54YPzrR1F2mJUt3cHdzscW46Z1tsqmyLAnt",
  "key22": "2hMTDG618DRmhEhffEnT2myVGgMsite5i8D3HfokyvkaEXSHCPiDBrfkZYVUZeV8AYymFxTQg6uXkfQKWBwEMA3G",
  "key23": "2RHLwSHkQLMg9rAWXgvLsYaSH4nBuXL1x8wrhoDWa4pioLbWcxC7JkEJLc4MFB3jmBe3UY4tC1vkXQFxvA1j3AyF",
  "key24": "2xEzH8iqn8jp6oGXjBuf2sZ78iCAgpYHiSxUDrh1JRBeXWEooQYXMQYthFTF4Uo26t5HEahxENVHyeet5ffahdZ4",
  "key25": "5cosKm9F51qEB4zDztuArMEgDt1AXbQeoC256uNNsUr3pKu3WxgkmXdXge25JQyvRkKSaGzcP7sgoxFpqHcppMwT",
  "key26": "2oGvfDEucSaQCNqybEv7gS55muK57QJn1z6MoHXWNVrWUoLKkMhV9CDKGuyVgC939jGdFxmoL4tiUdCQEUEvRmaw",
  "key27": "PAiGCg7WZzCqj7iKJtVHYzUary3349PkQ8cBRgvnYA8WRmZ1P2mTjVudaS5Xg7sCuHs2iMJSEnEqzc6zR61qusS",
  "key28": "496LuKVbwd8N3SeRvYVs7cYyJD4r9fzahEVG5BZVyYGmLjdh91nWWmNbMmFuMtn4FheN33AXBtSJTatyA9XYpmE5",
  "key29": "51RePc7KGeYN9H23GQ2s4D3Wx99Zg5bcWtpog6cJLwrCBo27SV2UzM4KEYaHd9eUPnfdM3dC7c6NSQjmcHZqr4Ym",
  "key30": "5DcejMdX6sc7Y1Xtv3kCwwejCD9qXefWVUD5E36bVYBdn99RW1uUMrNtyqEVE8GemyRumh8XPonHSicVT6JTzEg8",
  "key31": "ZaWaygqHLmBhXzQtq3aXky8Bp3mbdFzJbArdZCBhshqigr6DGzSoUFwfjvEsRz1mGW2WvfbCwb8PKENzDEaWfqv",
  "key32": "57gLehiFmeQnsf8Geh9GRica5nhWUp2CS13fRzqtkQA7vocaNbduwAoq52vL76zJogVs4ctfKTPd5MpKxkaQkbLE",
  "key33": "pEQNqbKmDf2gffqvC1ruXmDstvXnhyguWCG7mV8HNDEc2MT6bRyJ76FLiLRSwN6tQr6Ed6txFkdMgZaeButabJd",
  "key34": "414uYKyGWL9MikkspeaFXtLxTRvQLo8V77f4hHKPiNDyjji1eqvCCNbP1mytVMYEewgnK2jJkWm923ezXncr91TB",
  "key35": "5Lg2956r7ksj73PEqL79kCgZtauJXfq2sYPV4q5SGYrftp5VBf9VKZNSefpF3CrHYy24TpyHXEDCrgiHBfmUu8KD",
  "key36": "46VCk9CqcN5AbT63N6JVJYF2J1ff7zrUr5XjZ6FxZB2HcjycTcGtx1fEzssMC2HaTcKwjbRC2zYgfB9tmaAb7Lco",
  "key37": "HYAE3BZLrW4yc29LbC53c19vpGcMydMWrKm41hQmJbaQTK9BvoBnY3Y58K2LXCf57n2Ss2kxrAyouf6pDVsRkFV"
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
