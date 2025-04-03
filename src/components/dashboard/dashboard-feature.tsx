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
    "2GQdktu3r1PKDwgFoS3dtoiHxS93AEf3TFCGHZ3HMPx9EQsvoVjXZquchqszRVM4mdRjSBTiw3fk439gyk1T5duV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSbbvnLBnxFsP7K8X67fw1ooooUQdVdCJij4vv3KwP5RaznsvuLvZ8ccp9UwwcEKBWujqHUAftuKPP6aABDdBZM",
  "key1": "4aQwrVZx2EuCkpDiDF6J5g1Ub33zXAAcNk4NeVekDbNvqGrhCLUAjSeXJoq86vMfviByGBFd1Y9XzegPKtLPyqpG",
  "key2": "KQL8r43XCRAQbznpp8UfSmHZ8eu3btmL5xVFTmMgmYz7z91FGLhYnuvryPH9bBSUBwJScJHNABkr8ztHurh3mNZ",
  "key3": "3JKDfaQNioweogZH2VY8NLYDgxWGYi5WHPQPh2WBEQcGm3eyyAua6n7m1GWJUtcmXNBtRLncRQL2NsTaXL2pNfcC",
  "key4": "JHf5ZiboJhPQQzDghnyH1uLT8XekvTbUKdTxNQmN8HZH8BiGwxZYg2gymBZG9utdR1kpHU81RT7M4cfU9wERAu6",
  "key5": "4gJh9w2i7qd9SLprqAoaTKLqkerwSLMFcE1xsKMjCUdrcck8fGnWma3rBbXVmmZxFXF2Nuze2VXf1cspoY8ysGX5",
  "key6": "3LvSwNQF38wu9A4bmxDhdBsnMvAhPVxmAVG6wQneLTzySAxfHTugzvjQdmw52yV9fuNBuWf2t4YV5CojGnAUeN7i",
  "key7": "E3snGuENM8U7EPufKCXUX28bnq8s1RhM3BpkXzveU9PWqJ7mXF4bkvmuRhNonVaHt7ruQx1r1EvisXncfaQSi9W",
  "key8": "3ECMsDdgRgEoDs45i6ddEWJMsvM7JSJ7sYMRKaheCKQsitgTC9X6KzCisFkHY5YRbecWbS5pNt99Y5QLpsjCsYPU",
  "key9": "5uPK8RF1jMUsauVtuquuv7MFzyQ3zzUdENCSB6X2KU43t8HTAWSirMPQn4d2z7LP98m3CMkxTQCDdL38Mb3CYef4",
  "key10": "3oJ3CGbj2DkjZVpUfkyt2VLGCqnehbX4krvp9geKm7o7U3CEWT33XzKejn4myt1JbT2FLJFBqKSXEgDEG2M3rzvb",
  "key11": "3dYpcs7AxvPDPL41pDC88CVRseQhWmXvUYLbFzxPQeTUNDbYCDrVZN3Y1Tdu1A3RGLcBB1Kz6mk4qu8KYYYuSety",
  "key12": "iSzX58MAghF8VRoJQ5or3AdTzFFvinA6jaZEyk3n5L5ETJGTsZJcnwqEBUUGH7iBFbNSiiufBTXmL9eg5DN6DbD",
  "key13": "5FFuTqYMrUBRhRgujbLLePPb2b4iGfTvos3gAMnoMYoYBvYUfKPHd7X5TFA5hfiG1CEK1m1CMF2L2s97vyWU5MLM",
  "key14": "4mK6mrdmg34UXujqYPrxsjzXjbWaKytkAKF7P7WuNvsRnW7Jyv9khniVL435p1nzixA1sbF4eaJqw1VVJZ55U5Ji",
  "key15": "z9j8yBY2LZya9zVSvR9EMYwnbkd56hgXYTYQkNNoanLB3R9FeSgG2Hf42GdGyh2aX94Qnb6Zivz3xJ57YFtTBDp",
  "key16": "3MBgR7xi9KLyLMrdRsU5bye3WP2tuRPJZshpkuaYqnZyVVVbEsAaRyKNfBNnQ3eeRKNnVaC9ajX4a1jTCPDonFWN",
  "key17": "3FMWrccXKzyj6ptcX4sxD6s4pyGxrSV2RhfZDniHx4f6cwttcPaJykPL6u94YA4DVr14yFptPbekWVMqtTXCPBBF",
  "key18": "5uwuF5fKF9DxZPUHK8BvFGWSV7ZFYds4GsiH1U6obtN4LSeiaeHytvSXHA7wKSW3TMxiuJNPnD7NZvmM2bhxBHgc",
  "key19": "39QyyUbYcWRr4JMMWwHT7KpxnxBvZhCsqQVhWWBsSpKx5x6cxpsyWAAcG7jarTRikNtpEHVJNxkrKtbpLmhoHVG2",
  "key20": "2Gj6bZUnyCVfy9Lhr2YvjcAysEVxDpsVAB77S6fQJkqtsJxeGVg9Yc2THQGggPytXcTyozFaEgh5dZbifnvw3y1N",
  "key21": "2uwCtRT2kwR54FUpAC1yQSuGSmwSuefuSZJfgBoBUajZc1FMVWSNXS4Ucyc34pyucC6pSAv6fJPemC1idjk3Dy9F",
  "key22": "3QdCgVaTXttB31caFag5kE1kiCUcqT3WdYD9ENEW5uhCqjKDYZFsdDpgUyJw7bGbCdiTsENmUA8EVqntKjJPGZga",
  "key23": "3A2VA8HFck4w7rYKCVRU5L4ptpAvT1PLe6qJcdnNHsughw4Wmt91eWPFG2jmefzamuq2SvRxPZqHecG7QPVRyeM",
  "key24": "3w6hJn1Ye6yKVcsEYub2UFMwb88bwKETu6As6jtv2puGPSozKc1S6BK1XghTAB3aVh46526RARpMKMK3GVkCFxjz",
  "key25": "3vVCkVVQswxkpHBUNDNMhjA9KYEFy9pp2sMWoSLjy5bY7uyNDhe9wTrZBDGHQQrEwURVXGn39Jzy3MBcTvqgZpeQ",
  "key26": "5pRdCnMdqtwf19w5bcuFax2FJKALcgmnvHPxcShzGszvThugACq6dHhMbSVpgRASmy72w38HGAuSf4JSbjZxaSUh",
  "key27": "tcNvm48GHKprJkhA5nAS7sFeD12NcgcdCwRCoK47R7JZfJinVbTqm15P3tKtVnTaY2wRoj77J52Wu5ZNkbz9vkX",
  "key28": "2BGR5N7J3h2wMrYELELDPouNhjU4eAAJtoQDXZnDyyy3XvD3L7jtQQepZRngwJWGfTVkgiYrHeaZqdfHTi9wk8tV",
  "key29": "5s5bAD59BqumgknCePF48DQ6sxGeWxF6XXMLNksTBGHdFMuVxBSBf1HtzgYsDpKt9jGawZtKNBJQXHsd6DEPgChB",
  "key30": "21BQy5jcasF9nBDGQ3exJvbg9b4UdXN8deop3EPhvhKPoBigub3oR84TPzuybRCzUBrGYBWpw4LU1v3gzZLCpzNg",
  "key31": "5DSh6tmCQZBdBfbtaCu51XLkbjsJmNpnX44Wr8XWopxZubjFjToRvwtyEekR5LB29dvaonmYBVP9SM42GdNL1cB5",
  "key32": "NpiWCZKcJ6bdD6MgyYEwPAws6JiYfkiFXXdUZpk1NNUruQ8mN2G6K9pASMzdjMaPxtza6WVvEwa95uyB54zmcWo",
  "key33": "4EcJdmByqq5HbjUXWoFzgyzDoveYGNV2od6K7nmuerNzebbqyzyxux4cJDti4Uo12J1MqZsmkVf5ZugKTwp4Gk4e",
  "key34": "234JxdSJtFUUYTFDxWCw6nGN4HXqLJ1LYP4UQeypcRTCMojLSkkZZcBt1mNJNGc5csxeMYr4qWiBjq1VsdZJCH5A",
  "key35": "FAqEJeMD3XBv1n4Ev8W2WBo6xwAkkYsyBV7aPcyYRLSzpiT1SgJVpcxk2uZYLGc8ys9kEX7wZWzkiVejHvuc4oV",
  "key36": "2s7t6Qz6x26VUfh5SrLvPL6s14bB7QmFJhB4mpL3p2No2i5Y5Rp1KfHrj1tUpna6V9kYys7nRG2bvJmPTodQRkMe",
  "key37": "63Espu5uswiVqriMqa8qG9kM61QZz26tyrgnqXRjkgZxNdhQw3GPxvAreQA49punMPpwsmXqo6gSiFuodhQpAx2",
  "key38": "5cW6KJBgdEgvW7ccTjJA1iCtu8MKFQkGccYuX9dUDTAPz1n5zyy74RRSwcsqHLoegrNKiKtEzGHT3bKUq5bwkaDn",
  "key39": "2npyZp7NNoJ1166t7BhcJkQxxxQrmkVWcGFsXNgAqPvp4PZ98CYotohpAPHwZWNaMbeUYL7ttmHtM189ekoP8RWU",
  "key40": "4fZxgSkA9PJJYrbQxtmoWA1WzFw31QYaSeEas3TMPL9RmWEENsghcBwLkjaP2HDnDCPaY4d4mmEtYWwVABtZKcQ4",
  "key41": "3oZv1LYysqsaX4KJtdpaTurJiwSdy5GhXEh3dzBZeYkjKXi1Yu4jBTYRTiXYPg58v54gY7kN8YRtGMicunWEkz55",
  "key42": "s4KotmynvvDRskmfsEoAgGL2huyXkJviUc8V8C2MMVqybDvAcvH566w7bK1ucs1HXsMYqBmNjtfC5oB2aer8osi",
  "key43": "eukvNaDmiY6DqENLsTtoHTWGNPf7Lguo8QSu1jGn2Rpt4wZraMzjuNbJBWRf51giwwskDo6ccuf2WT5cNUyFshJ",
  "key44": "2kWzHiLB8sRintAjJj9T4vdWLoaAX87KMEmjPENDBrDzLHdtbCKNnSsmZjXCo7u6NjvVE17rXh4CHDAsiweyxL2h",
  "key45": "5Pfqa6aQ1WEbyf8soMGsiBrH2xwfuAhR3baadLaEQkW2MQy91hL3MRNCqhZQkPqdSH4q5qBs1s2cEXYo4gQjFX9n",
  "key46": "5pFgDUD3PTPAEhKtaGeF9uucov2huu3kQQKQ94y5yuvjLkv8nzABCFbv7hDShvcxWMAr6vc4jRopFG61DF6uxgkS"
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
