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
    "5ysZbjcCmibFZ413dZo8FoqpxBuEdtwd9ZerMZ1tkDPnVhXDq1YHMzY8X3tQNyBpqGnFTdNa9vdh5KAZfZqy3FiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRhdoypFKrtKB9eQEQR4oj8Ka4x2FVPVDc39rKj6QGbz8fSboyE7e7E4qM9byALsHEjTLUSkVtbFyxUCn794Bm2",
  "key1": "55J6gAK1uMU8ekkqFfN8j5Uksnfuvkhvrp8DQ2ZvRLpFNyw7bJGoPBuPQW4YChTDdW5JQnt7WhGZe2wpvtPNJxBk",
  "key2": "3pxSMawFFKJ2zCLJKr3DEXVo4dVaM8ik9dacpZ7GGa4sq53rDahfkktLZji1uKKPamCFL7JYx9vzTqBretggGowz",
  "key3": "5iMbheW6fobNEVioBuMXq6NFxeZxUa4mYhEft6nnD6wYNB2XK3ERKUBg3DNzALMRJfPYAY8tjRTS3wAqntiznfiM",
  "key4": "2sM19BP2i3Cm3hZCMxqyvYNdQmpfKV825hbo4ykTLkDnseu2gFuppDBFjZfSoQg9wNMdp6Sj8RRizaQfZBgTvAF4",
  "key5": "3NH5dTQBARd15xZUHc3jMUH6T2eGp4dKkJ1GvK4xNFK5AoVA8Sw6QSDQH3x4JfrsJY4TbboyZQGG2tNqREQsozhC",
  "key6": "WyoMUyejEBZryHkTUCZxZZ92fJR6q6wP1d2CZkxuEvzv2y7pQ8FkMASR5eearbQ1zPsYJRcWRsdm3MjHKuwBJSe",
  "key7": "3GrvSSmtNgaVg9aRq5cXLpf37ddadekrpSdhbuSaJvcALJ2LRw6ZTQyYN3XP8DgXTZ1nVaKYzipNjFRkaFjQ2yXq",
  "key8": "QEcwwknwvJx8a7nma6vheWap1tQzJaBL9WmxwsrQHf7Y2ffyG6J7BAgdJ552CMb2X3LKQELCdk6P2NrUCaFMzei",
  "key9": "3YxdiuR8LjUC8dAtirEoMwA5mYsbzM2eGMVyenBeBtT1harJttUhgtgzuYBinPSWmMHy1rut6cdKViyFvp9egf7U",
  "key10": "63BAfS7EEZLLQkGWsYWsHjBEj2x8VTv12pYUWN15WNJ4qyKMdv3Lu1NVCHE3hi5kLExh4SpeQGJeHXrgZDQMKWaz",
  "key11": "2SFZTbGLu3pNS1DMeWQwEKDSYMxBopWHyZdDjTn93LZgg3AGRoVo93p3DXQYGCiSohqANQD1Soztu3pJyb68eApm",
  "key12": "xwU1kgqcpefpanGCStf78njdWaTG8TdLzwukDufuE16DNitDvKjAAMxZbB1M6xbysbiBcnHr8iC8wNGiYJR8i2r",
  "key13": "62MCK8pLDUMVr34hNBvq3Qu1o2YnvYR9PNzz2x5PMQ2NKQAe44khCXzqMn1A55QReMpW7WaqQq1ydY3C2Y2LC5cg",
  "key14": "3xLr2TA8CL1EJeEn8RnBPyZr2hjowT5sYUG6HyvybyvLZtHLhNpnHRxzizAGGrHNf97WzStLUdkCPfwW5VgA11Nr",
  "key15": "4dyeCr2gyA9JUJ9chN1JCKge8SC8p2MoDHPByUEFE9QcfBZ9saff13Q4fcGgx9YTtdsdy2aPJ5oUrWoSj2Sjif3t",
  "key16": "2NF2esZybnkgr4CNRv8TBfyE8TPQaEyVYfJp936dRw9dJ56jHbS5EyvTT46TCRCd1uCgS5iJA5PEi7jRcSJzGTkc",
  "key17": "39FxNgWBMY8CgirEQ3amposLa4qL8A4E5A8nRhp9q4wHT4vP6ReDDnvgyG5oma2dr96cjjaqezKEdg4TKcY93zxh",
  "key18": "28iVv2TM5cJjwF8epcPQhgnm5MxHbSN7stRKzQWbQnnV7bPj7JJcbPh1MQ7VNjeNmMd4gpeB4jQFwGgEBzpRYirA",
  "key19": "nt2AHDxDRhbffCeLnPpPJg79QzGXzh6Yyy4xiYpFfZT2vEM8JTtdhhfnr6gQq1CcjSBTwUtkz7SEb8VhVrJLN3y",
  "key20": "3US9N4NrTW7AskvJbwyJJMrFxAXRQUExdspzfdz577tWFR4E2WHLXw67BJANGqQxpxsXkPLQn1FZTgy83HbhyF4G",
  "key21": "5UemHmTui7866tgnHaKGqmY7aDV2w9jD5ZWPoFhpsWyUub1csX7Ww9LnWmCRagNKNvxBszFxtsYuKN5cRTZmXrtu",
  "key22": "3NifvTTuuo6kQ71qPZbM9gWj4qJRawcRCo488doZVN6cS2WXcfH4JtfvbykUb89NrzGx7LaTuKunrygLzBTPpqA2",
  "key23": "hPfqpfLdoBJwC1eFchjnTMSeNRSVkpbYxn3QfpR7jGnn4YH4UfSUsPbde9mNXXd3PGHiEu5ZePZCuC3iDvqqaJa",
  "key24": "3vyqfzvQQdJQc6w9v8DcuyfXU6QAC3Sg3ZhfcW4FwPunLVX2LmpZFUV1DbCoGQhTVMnfcuogX94Anc2i7UegBgc3",
  "key25": "4JDhSudQz7ftpT4LG2w9bnsr9Dzd58F5dTy9Ve7BNTNREHKrCrKAxcU2L99ugHL2WUuuWPXaELpbGjnrGa5eFq6U",
  "key26": "2qUiZvArWN8oNKGoG7pDfF8FQojPKSKsVQ4Bvew84B1SMbw7Jm2hzJijwzby9XnEiHEvHNdi4rR1DMMDxBrT2LoU",
  "key27": "M8EkTF2XfgQQwPhEjD46NcCiiVdW9G9hWprdLQXFT98UsF28EXcRF12q4MTYPzaWLBKWu1MrMSe7rYovBfQXk7p",
  "key28": "4XL9gtJRLrBephzFYGLu88S3ofKU87oMEVG9myazw2eaFY1y6WqeEkSDTtT4Q99aqpGJpt3gyGDvyh9ZibqEkF6K",
  "key29": "5qa5DpQGuPjWV4sKfjuZQHqhFsPs9mzNDSHpTzm7vHE5er4LKtx7vU2bCruSTevScwVqYfqSw94EtJvA9hBr3HaQ",
  "key30": "iMpQBbrbdXCw8kU5P3EQVpE3jKbRVmSxyFtE2Ms7QL7C5n8PmfYVfxwbWmyKWkWcVdghhEeym96cwewjyfRHbQj",
  "key31": "48MUGz6atv39B9TeinMtznQRuzSTKBWpqx96FCYu1oxPBjXQSQfmvg5T6VQMjTE7SuzX3t6ZNUP1Tcwf7eWR1YaK",
  "key32": "QxZ8wDbrZEbaSYvDuWrUYcXVQbf2aC9W9n5B1daCTmDrQ685jDyXtiJay4pDgHMzpGQ6MEJXxLWe8HBhrXDYaQs",
  "key33": "2s5TP4ndpSTd3Yin77B1oaWY9DRvcL2PuSpz25dJ76W9AczKELtHnZeG688aW1SYpRh2h2uJmXZRgKJkWT25fYrx",
  "key34": "Zyy4vBqMoh6VrLQKb4SMvB8WK8D1qTAfW8dm4gSDbSBZ4zJquQwWmmJhtbmgTVbUYFRiSywrwDukUvd1VaBhoJc",
  "key35": "27KVXayJh6NBFdnRP4kti8zS4Z4JuRC86ivUsj52h9Kc4MGw1MsshGB7AywpzrtQxREaK8YWTYzxmzu7NTgT9PbU",
  "key36": "34mKxWKiPq7RVsL5mqGTSvXALbUzxGEFPfhWpM49qGsuFQSMNXeSU5Fzd9yivG5FuZ1RfVHZbzBRnUA2eRFWUmRx",
  "key37": "5iQfjTQqeRPEtknGVEVFdHf4faUrzmMdWRYwfyAyaF3pTFaWAavC62XF66tvRqjeei9S9PJho8xqgYDByaUCWEvk",
  "key38": "49iUQqsoqFdxevhNamsELJahF7m1RFa318D3knbXwMMjJG3qzTHnJPk2ePRTGntrYpMYXyCTcxaVLYEdeXMctnhF",
  "key39": "55heT6Cfor9PPm7vvDZucX6SJ8FoTbifsBDXDwsVojDDw1m6wLJadbxVzon97STTcaG3SMp7zVkyhD7RXN4qbrEQ",
  "key40": "45oNzLNqZA5AEd99usNnss1NHfSsyLjYcviL7spGn5onwvjSiA9atyf57NYbZqC29J3dfhzLVujnBnsMTbHAjW4p",
  "key41": "3yJuwZau1omnhsx3m8thdj6iH1jgy66E12WQowF2N7JJFr1VDQtScnNqhfJxms7NjKcs4twK8CAdmSrG12YnV64q",
  "key42": "2K5357da2NhP2kpZsvxqynR5evPL8w4uJEJ9ZpypBTC4zQTrS4v8rfHcbQ6KgLrc4drKw3x9DkkyR2e7ti7D4DwQ",
  "key43": "h43AJkvLz6Ed2cErVGTyRhMc1bhMZoD7SJhSiVKegUijafN4q75M17u3GGoLsaSzs7AoqSMTuR4ZGYaWD1sTfdD",
  "key44": "5Cwhky9KdD85mX5eTrXy7bnvowQCjNiCb4S37S1c9HtEPLimJN1AAweTvKZvLDx5xb2pHh6mJfUErRKxEdtbSwd9",
  "key45": "4VuANj8rrjtwbnxx6JinysJ1LaaoThPR8GMTNTQtBpvD7ou5tUdD8npgCi4hUiWecVQPavgDpLiMnPnZ7ruD1YZU",
  "key46": "3tFPZDPxVRVkGtzkdGYCWjuvn96Rrda9FbmV1f1tYnMSJ6zNMJ1L1bKFYQQgiG5sFDMU3p3LH4x57U6A3scaF21k",
  "key47": "3S3DqLHpY59gDCzNEUCWr2mkJ8S5jWYqE3suWF8eUTXp9m7xz4JaJ9UzaYYgqcitHnjZTRyzt4ZMFkWgQju1PhXE",
  "key48": "S3Ui7C1sjWRLMoG8P7bPrEEr739BbkZXxvbdgrJL641BZ51bdHchmrg98fRw8DQJ9E1De5PdLURcZvMhr1xJt5G",
  "key49": "5n7DYMFTr8F3Mu2x6Lwxwk2iAWeSZ3Zyvz4qAS86595jTP3UGQQARQ8zeMtMRQZFkMPoERW6saKPQGVQMjcoGGHc"
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
