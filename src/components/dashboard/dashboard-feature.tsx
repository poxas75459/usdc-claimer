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
    "4DPsXu7ejB9b1Aoj7VzpqPfK27fKtKxsRxWPvSv8XpgtmtmzVahRRcKXkwoZEJdQprnSKwKD2x1SLW9RqqgEXjFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1SAZRS7fYRUSQmXTWnSayXLWVBz4EjFBmwwDZTG2xGVWDmXQSYrfYyspo5awz5FDbyMBNqHVzmDyQsnsxwNBfY",
  "key1": "269QMf7NL4Rsfp5WRD9TP1eoUMbdmr1uNML6w9YzpTKb5uhsEnTBZxVBTCMNxzq59fRTGBMCUuzzmvs1vmbx5W8L",
  "key2": "5dC62nqnmA4QyLh4oJruUfSrzXGLL22KiXx8A5VevRmeMzefoCaTmMcYY52FCLzwyEh9rKhhxi1UDvx5yjLgAMna",
  "key3": "2st3yuQ5E9VnBB6AJwNq2tZVu8uiW65EJMNBpYzBSfk5JqzncyFkuyhDqfbg19D18d1mv6JTHHrTBEKrVST6X32T",
  "key4": "b2JvAqU4WkuV9PS4h61Y1VPHokXtdWxoy625Pv8WvKcUCpqachAt4DAuxNpv4moEvmptVRadfewU7XgMnV2FQ3k",
  "key5": "3aRBjbc9CC4JXHo7SbmQidSVzJ5xJnuK39Vdbv6uq84vtVktdeSZc4RwDkqQNPhKkxjcMaLKbn3c4Pdh7DHshsn1",
  "key6": "2dpQWUV9AazrhrbVThZMTBuBFta65pU6WtoAoNGqBpiR2NsMZAc1Ryzp2DgRUu6oJQUCawUzfy6KLuqwfSRPge5X",
  "key7": "X9LV1UgMYc6W57ZvVu1U453rGujTkUSne4iLpCmSQ6PhJ8df1b1uwDgsqj9V2z826g9KyTTWjC4EZ1JRMQoKXBi",
  "key8": "JZvRnxvGm7Q4Uofh8KsnBdiC4jiQ9WhJJY6jL9AtmN1U4xDTaT2A5wULkM87QXrGWUFgSLp1MsFynWgdjEF9di7",
  "key9": "3MijQVCpspAfWYqhUVbYR5ZJswPtErggNHrwCfFNY6dNHng6YNAuHiecLfL7atEUWJ3Pwz1tuLCTPpshvUsDDdWC",
  "key10": "4KZNoN36cQCmjHp4zMiDz2r9tkJ5XpxV4jYLoD9B2vtLoTwHHbXjiJEY1LHzJLJB7ec7Cai8UXhabQf5kJEuQdhP",
  "key11": "2oVitDJX8AFw9U7ALZK8XTh5nh9tYFyBnZc6kakQwEkM6pwUEEgVcQPyYzWoEGavogbFqM82g4o4YPM6ZM23GVB7",
  "key12": "27vx1Wp5Yqt1x4T5GnEGnHqM4eJrm8dC1WBT5cGxfKhJMEKBSDxNhLDxUkUPUiTVteJ2uLxJ6Fmp8yQsgxWhQ5D5",
  "key13": "342a1C64amWfnZakV6DYARu6Gh9bome11aNEfhcbr8c9GeJmWskuVoXZfiGG2kE61wZnkJjQjPdQqhKRgnbKvmZH",
  "key14": "Y3f1o6JZ3MpkYdLyjM7stnjaGnng79Tf6g4PeCmnGBbeXnhVvNK1wfrESfxUCopLDs21D6vJR2gUqps92W2XrWB",
  "key15": "2uNxs2u9EChCL9BUDvbPyjVB3s1EH11QgM4gggTgZnxqwJ2KAeD8og9rZbZuEFuEsdTJKUi1A8aYd8g6hELRtpvh",
  "key16": "54cjy6TdoEHbuZuuUgD8d1CJ9ZL4VFRuT6MLt1NNmUSGhng72r5Swu9okUUEQw9caNTTsAo6xnfpgsR6Qj7hEV2X",
  "key17": "2Zpshj5Zq9bUw3xc3KmBSVjFM6sEtytzx792L9adREwMLLprKDnHfVhZ4Vh4Wi3CB1be4W3V1KS5m3Ec1Lsxoytc",
  "key18": "cpqzVAbpGXtT6irK8BupfrvMeiRwnth82xxPGRxJifaGQ8T3eHt4tLTSLB11eMs9QMHPeRzd6q29ctCwQMaAbo7",
  "key19": "4872ySCTQudfvLQwgAEDgnUwFLorV89WicDz2SM5mbNq9oFwPcaTpbNHSkAp9v65nARr4kHjQZ7E3d9aVm4rGGiT",
  "key20": "32KzzbCubnCRnHr6BpaKEEAH5jc6zW9ggehrQfsw3XsWVEc2oJjSyKDPteVPDk1K5TDbvia5qnHAn8NpF2H8pGQX",
  "key21": "4Jkes2PVk3K89ox5ZeZpUa2GzoigXGBdzfikZQHeo8EsVCfwLLhZicnX11Ktm7wBMPJqvHjxbTKzxWwVsxNqh1Zp",
  "key22": "mucr7mcNd51qa5L8MBg4Q6dj2BshNZSqtSpx9jykdRsRdNyL9nHxATnQ2x1YddfXekh69guLdvH4eje7AL2srmA",
  "key23": "MyQb1hJ71MypcKbc8y9LBRPBCLR3F38UdTNtqSMFRCLFhfMK7WGSmda2x1HV2xbjH13Hm8hZwYpEDeV1hjhbSEo",
  "key24": "5DJd3EJqf2k1zyk8feUWq4SjkzRNc71JKmTHH6TDwv4iomg4i6gNPeUDSHSpTnJsA7j1DwZxJayVNrqdWc19ZSGa",
  "key25": "56tvBNrZL9qqY2buvUiBQESuLHyybDanLTBnuJH9TeBCWk5Sf9C1YVvxTNZgWGF3MynzqdsgNfXACSdW99BSW6Aq",
  "key26": "S4FK65GZMf7WB7194XYyngAHhCK7mEo5Rq2sD9eLChU3Q7teBXnjGDaonYjd2Pgs3uDxFTUbWi6rKCYq3jBEfCs",
  "key27": "3V4YzUaGzwTYRnmueAfdG3S43pg4qcsgQnhHVgin6NRXG5BWRbzSaoRsKYnVx2hfHEvKF6snWScfUuay2sZ7omeW",
  "key28": "3FpxcAvsfKuwjCKr9KBUp1cwWdC7wwyQnJoKWeTEFfWbSbr7FeJKh3p5ZwDHwhuWq7qd1VumvjifzGLJ39RSKP9C",
  "key29": "q3wChv2t6Ak22z3gH86uHFWEbkUfKXty2LRbyfkta9Qw8buq7NjFzzNRegCHcvXpB15zVJ5rdftRFVsNanPUoQi",
  "key30": "4uD5pngvLUQQFFQWtNRNMDkFzMCudxTrVLkNRzkb5feLyAw6N7MK2EtV6vmPbJhz8FofqRAncU1G4cMYyTuBCUHk",
  "key31": "4kWtZ4pwtPZYXsn1FeQTDLQ1AxwcBe6FbMUqCTG957ZGpveuRECRYzUMcLxGHdUwaEMMdsAz4731AJQpc2LDwwpK",
  "key32": "5QFwwY35x4VVjF1NYe3pFoLgvmc3Qgw4K7YaNuh3enSAtnwf1uc3i6Hzn9vSqpYnhLjTmHdcrDgnx5yK72F8SSfi",
  "key33": "uuwx6di1RmEFvvm57X5iSms8FvDgX7RbJMVxb7Tm8UJqVR3HCsDpmSCzQcSyJFV7cdVYfcXAZY5QPzHaxswR5Fv",
  "key34": "4837WmZ8DKbR8nVjuiHbW2HHW89jBTYjuhQKU31AVJKxpWeGXXkwSn3qe3G5fhyqsn1VrARGS2GRMC7vPaUJ8zHD",
  "key35": "5Af6eTWgwWX58rBnp7p5TPNqxwxBQu4rykB1CBNzMUCUNLitTF3VeYrM7FBQtYLm8rjBEqapx1p37Fzkv7EmpG36",
  "key36": "2uACwMA6t4utsgBZBUYfNthvwc6RG8CDiYAqAZUcGh85UTkidj5tL4JhwfkL13J5jCTiK1HYkLbemXALFQQPBm45",
  "key37": "57Rjf3U3fMZNbsobg9PjXVKXayDLzUVvkchVSMw9NUihvRc8GswERJX1c6LyqGTvU3GBs5HFEDoNXkSuhxBFd5CY",
  "key38": "614gis2HBZDYQAk4xWUu8KL1osn7eLQmcwZSDS5n2G9hSWLzgicggCibGTV2NJys7MkmTyERLyAjyCC8gKWbcuAe",
  "key39": "23X87bsiVuhWnAsPQc1QpjwstSfkkk1dQq41QbCPnYbXSg5gRxSvvKMNUa6Xx1kuvLSoVWpYFEfYAGKqsEJGgs6u",
  "key40": "3uJnaj9GNxkn8WYNUWQa6LM6zcKRsRhxheCpFcHoNtz1tjn52hWbeHQomwgDSwbd52MnsGYpwXaLnf4dd2Q5bik7",
  "key41": "5HMtY4YvUpnnJyvFSCqARWDN7QZLrsPUYTVaxNGkkezxSPigwMetE1S6boGmZQEeavMZhHPJv9KaoBAbB49C6zcp",
  "key42": "4qrkxrdF7UFmDPp3PGeLGAyyU6wrFAaLLdCkPD7wyVgk7o682x4q973u4SoBQiviwUunwgMS9iZ64HgP9WwtibH4",
  "key43": "56wRNf6vYa1fNJPG9XEcYuoTBDVttjWEF6L5MkXkRqh9wq5GTg9fq2oFPLqkcSMrnC2YrQ8JA1KVghzGUAmqzUAp",
  "key44": "2Tk5PnaM1Yyku7GbBSkbW9HGXimDseLE6guFrQ5MzFtTjVNvKZzFXpDS4BXtyTeNC22SAACAv8t7rvETEoa1btto",
  "key45": "wDEeGq5R4TaG7JQZxAVyWLqxWHveijT2AMwLDfTDTsdjTpx3ieR4PUJWUzL9DwXFbSAhWCUTKFGvwmav5XHT9EK",
  "key46": "5JF7NQ1setzbYQpyH8W4V3Y2wxEeMjsfZ2XT6FPm1BDgHii7ZQSHJfjq7GSM4ozeSQpQgude5uDTGqJXDnHZkcL1",
  "key47": "65kWqnnqK4KFadq5Y3Vp3dnxQRAq3BtwnQ677apbVtDcDAju1XsTQ3G4VCTru2XUY2jTMb8aEDTmEaHWnjeUpNG4",
  "key48": "5jH5bxLMw9apR1w4Zh4hpwx2jCxDcEMZkPjibfRwutUD6bqZkrWsgnppEdogpjprKfFMDX9xocUQwcgqUgZ3oZ3J",
  "key49": "kb7An6anu9tF7K4CehKi6RqoqndnBavjgBgQjedviWYLpLddxMA5Mpzvs14bbfibVu7AuSqP61ggAMqZiFTeHwm"
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
