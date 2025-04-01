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
    "4CMBXeojbSpTG63XiJ23FQxGSvyS9V6gSDs8tJT1HXt53Ffs5ky49qXsxRQXFXL63QQJryx5nrcHB3TWsr3ruztM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1J8YZdBFLSZ6EH1Aj8YTC8enHxYSU2kGzgAbZHiGCFr7TNjzgNeQZFP29EbSDZ82mLsDfH9FNcVBk3uqEb6ggNi",
  "key1": "28n95pwMVj4zuRw7ZGeKBDiKyEYK23AndpBue7yVLrQsoM9q1UMTJ87wCi2yP8mzajsfgXxwaFvw4yA8sRoMKw2c",
  "key2": "4CLyaEY5rr3sXsZDfQh2bLXaQrmPxzKeWC2Xnb2VHWfZ6wFwtzV6hntnNX3oWfVxnJQUKSjhtaYs9kn8ZxU5REcb",
  "key3": "2dokTizY1KoLMqyWEoTcZqD6BXWAcdkKmDmCBTgYQHpGB9fEbVFKusa6bz34vzQXakegqRAvhsJTm1Vbs6oZv2aP",
  "key4": "3MX9doqzHWpqkRwcqwMuAP3KKNrmABeRWxGBWNeoMsRkTjzPgh5QYkx3CLGqv42cT1Ub1NPJzBaDCTkXNcnkf6X5",
  "key5": "5TRw5ZDqo9UCN9xd1YUCVaAC11G78yD5jgCxCLof1gBhbJaVqVvF2e1YtPgwnC3cnbXoyX35skkVM846f7Y4QjA1",
  "key6": "5tX3P1j29RmvqHgvcvecNoSSd6focdCX3gHyVs2xQsTKCPD7c2oGcnQ1ALdTWoFVz7mih3TaSjrLkn59dRQHUupi",
  "key7": "57X4VWP5qZFQx3ePQeriuhY3W1ozi3JmeDkQ7hPRHfM1MwpW6FfxYcefA6v82Mt4ZSEWkpVnTxgUj94UQTBWEt44",
  "key8": "2zvsnBsXideyDC3mK1nYqHYbJEUucknymsBNX8g5oxVQuDn4YeK8vNvZsypY38uWB3ZJk7c3DZWoeRaHMLNYMNXe",
  "key9": "2R2NZpbm26fxZnaRYL47dKLnkLFXySuPiLaU8xYoenodjftxfwtckNHydNVrdeTdgCkNGCLokyZw3X2b9PYrQtu3",
  "key10": "2HD4zi2kpLHLJ1VigvqGAvHL9Lf954gd1YKxui48VBSC1WHx5G1TKu5TqrN13NmcxkVnu9pEMuwb6QVq5iDA3NTe",
  "key11": "DiCZuBgpmYPuLbZb1nmttK54AYtZTRKGLQ4i1ZbcPzdSfGzFxwkT2ocrdcJrnJ7AcupNZ4LDiQJALcKP8XresoQ",
  "key12": "3GusLbosVDGFtRjuWekCZyByyUeCfzyhs62kvpHKLqc6BAAfDwkCfYkkM7oxzcw6dDgabwTp4rQR6nNVPGUM2awY",
  "key13": "29srB694HpkffhmgEcDTQMCDMJteoZbLw9swHsMCZDLw5LNYE5Rx3f6gJTpYzUNbyXS8qeYvCtoXSDXAkNYxM6xu",
  "key14": "2UMLfucmEPZtbdyGxdCQKmjqfzkSooUVsH5y1TxbyqoYnStZiH9FETJyTHjEXeeznRD5WJsumAK5FH9EfQrNu1E5",
  "key15": "6CZLBwxNdEBsAyG8cmYRdPzE2eNYTfPiU2TmSbdMuaW8mMZc3j32RqbGky2ULcMC4TtnuFhqaPQjdFMSNGrAVu6",
  "key16": "5MRmp6s5esXnjjR7yGSZHPVpm4sA9atJAdUeSRVVtz676ry2Ra9eMisQAvFk3DuDxPkyTQJTGTjDxCgxM7aWCUe6",
  "key17": "42Cs5d9iXWyyhGcXCS7T7oC28HqNQ6KoeZYFzvmmgJ7jZ4QLdZd8XLQTwyq6ssaEnrscd4UGEy8X61mAv5CpjqHH",
  "key18": "ecXc3hAfzd9oBboKQCX9wBLiJdx5gLpQbThFjGJvyu3mQYRF6Ykid6wFJayRRfu6DQfnfohEz1CRzjCMVh17VRt",
  "key19": "ktneJBruekL5HMR1AHpLZRdWsbjDQ4Cn1zx5Cc3rK6Eoj4dnvr4jxGbn7zrsDv4u5ZxqWs8cDfizyA1cDw5hYVK",
  "key20": "64C46DtAYsoZy23dUfAMF6QZdSnokZqdSxDfpz5yYeaDBwaNdyBBPHdXqQSVjuJmRbCvKquxm2tE3KTmRQRfW94b",
  "key21": "KnLpSbYVjSpNJyYMPLstjv8N3wFUJ9SyUh36JKG33KsdHBgGCvogL6mvKRKMBVfKMQYfveLgrdge2rBpRPvk7H5",
  "key22": "66EiLXWv3QVnKe7C2cdXxgeaHNUd7mC9snk57Vh7HSW4EStvSxMoAFe3Rqgi8S7KBpEMxboD4WmPH3EpfqtSgJBo",
  "key23": "5wBiMENL8xx2NkeyW6rbX6wh3b6msmFm3Sq4SqdoTbyLNcSNuZmJ7uhdnCTb7pq1cKVHcbGdeWB2bGk1mRjZB5zK",
  "key24": "25u4GZkYTSzBGZhUqN9LVbv6wsBYCbaioCQSoagDa96kApGztqdWWT2HGjSFxgxyqvfQDvJzAJcYdrvWEvqTzd94",
  "key25": "5JZhsWbKL3pHNW3mGzjAudx8mhPx1KxsiJKf2kGZwUZ8dPPehGh17dDVVngRTZ4JeA7tYRqQU4ng3oDjCHG47FPn",
  "key26": "2fC1cLvAsXtTLLM5iX2h3HgY73285UxwEiDrNmvF2hZkXPGWciTpCEpRqHcmHtV5DRuMA1gQJDjNstMJ3FTggmui",
  "key27": "4t3rK5y911WppqAMYT3xEiCBVTCi9GbPKnGUk2Dd6XVHDmvHJeGNkrpFh8toZLoxXvioAypdQhmG58yTvNg6Pacu",
  "key28": "4iw3H1vtw69smFbe2d2wFCs1dDt4txYKBhGR5FYs2txQhGLLmPP1maAFxANdWfKAC3txBRM2mG6mH4xQyEBNrYbE",
  "key29": "3zLF4gqSxCXCR46b6ogSY3RHGYB7JSn1BoWgJVri1jHEEU4ckcFX1x9UxEgfGUtihWRpf1yKH8Z4WuGzpE4VHCuf",
  "key30": "2iZGeKvPbCR3GkoxdCkHo4jtCLv6WfaDhG2qaGsRGUaVk9eVFLxs9eBLrdgUGU92GsrhUJq1De4RTAKkuVawPbPV",
  "key31": "5cf5ALxAvbEcJvnb3ugfhcUWwX3G1wxCG9p8WH298FwkAs97hzfLYgHfsaTLtMJXw1jVJ5Kpg5h1qdy5VnR982gj",
  "key32": "3hH1Cwv3J6wgwqTFfyLzy1PfmnFbNdcxsZ4j4Zf9cJ2inhwrpNcYLDALzkGWphP7dTCxxeD427KgsNWQAp4mDD8u",
  "key33": "2tVqCFPVAutFJjXoVcYRgdPLjUmYoCs8dpD6b2xW8s4RVdjqM5QzHY7WfeRGw8YVcb8vtNrxARZKwN8E6yKZ21Rf",
  "key34": "4GjZFagvnzH98JW2DFQsMhLn1Ek7gA22Lavvcf7K9b3pkptxn9KcQXYYoy897NxYrGKcmrBCDatw2MRKYtic6oB8",
  "key35": "2PdHdVdGtSuBqpddPsFB6PUUNBf3D9twxqmF5VNdWU8CkegDDQSxZyZT47oKxymDLuiW3NuZ918ZZmr3H7msNWFm",
  "key36": "4NoshdrPvujVNLW5a4UCvLgDTvAXMK54h52ii1bPZ9QL99Hy5ocS6b6tC17dNShaknYRPH7hkzBzLaz4mTmTh7wK"
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
