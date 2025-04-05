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
    "4WoUhu7nbLMBDNTbviU43kviyCrAbeAZDvyY4ZGahbiiFiQjDnQw4M6jN4gpbg4F2BB4WUw6xmhCDjPWyWtpGEV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SJb3cBf9L6q9bgFW7Z4tFcWdBhCmYRDvzKJEfscSHmqwFojbdXP5n9k1yTs6CpJ57zkedjtjsqMztyoB4t6bot",
  "key1": "3QK69hAkZVLCq4fAgjpFReG6T2F19ZVoszh7conJxgpfypBU4PifZBWfqSQk8E3Agvgq5Z1S3LcoEzc4UnFDNBKH",
  "key2": "4y2GHJtDV7QJiBf6Rp3ifY53LnXrNdc37H5dSKU9zfXdMa5sAhAFTUKBw6hyRMT1PgXgXD324kWZAJ1Q9Nm5B9Nf",
  "key3": "32bUfimiGFjh8V2BzqZ9UyUm4kijRWjG9NucJk89Duy2C6YkaSDC6eN21YUovCBtynRXTv2SsQ3Uz3shu5eGGd9Y",
  "key4": "2jGjaeiFzfPGduLGvzZ2FWDqGdaEUULFBvQ9fsroZQa8tfJJY9rb4KWc1icCgPzKX29ELMMMUMg6H2ZQefXmLD9",
  "key5": "5JaQqMqNRaHmh32xncKpMja7mZJD6roUYDsVimz4ugT9VULU6FtnvHmAHYc8BXCaZctvThJ8aHG59bGytZmgRQXn",
  "key6": "2jkefRX9Y36ut7T98W4LBdqhWUnqsvQveYmQqrrLk7xJtTvcVjRX1CxeNWdFtgQZs7FVZzhXvks6fAdtAg3dxN49",
  "key7": "32fZMxYSmAdW2e54Rsz7JspWKTmoXZ4Yu388Djq7mxF7yLdb3vnPQK3qaGV4jJqZXSCuvy3swXNLNuUYrNFpKfco",
  "key8": "WC2ZGZUD9ZBHw4hs8JwGF2RYWh1HLU2ukJdpaXRSe1P3R3kkcdqgZKYWZAE9u1HhUhjsYQSzp5GufvLoPqBgHhA",
  "key9": "4cAL8fDCbK7wGbCGbdpcHsrtKipznkH9rAxANHLsadg4PMTNtbDPbptzPGdwwL2gqnocTcGnMQZacvRYLiNHLThe",
  "key10": "3huw8y4QUoqmPm3bf5FaTcw4aXvw92MyuCRcv6GuNCE6HGEsKTemfy5aiVCyffpkeaJa9dby95922DG6ZLXq7FpV",
  "key11": "vFS86T9RuMWBgMCqsteEeRF3zFfCaViBfPdBkVqB6Yt76wynctVTgwbpJdgC5GpZsCVp9AHDDzbbqAGpwZGg86r",
  "key12": "CUnM1kqptouqCYPnQHgrhHa9zwfbXAsa4vvD2aQmgxDJBJdwSBkibKmSZThGBaQCpa9bNoAB8FMbp3VxgjkVZck",
  "key13": "4McngHpeq4fft9gabeJMidoP3zXUyEieuT5nRGbnTH7zjHLC4RfZeBA1tVgVvui1ipqqv1ucR7QtbqamppKzy8tP",
  "key14": "3RjYsHCrozV4RdXi741sWLkhr6zf7FesdjTJFbXrkspn52QJDKDvBpMBq4JtPLjSCiGjr2LpandjGidJRHGjqJ4z",
  "key15": "5DWqnd6XupguHggaiGPvoiRugL4Bw5AWZfc8R2ZRGqUDVyme9UtUohuEJLBN9HKAyvxKJMzm1vjrf2Lz7fx7npr7",
  "key16": "65TJN8v4k2TnDpd8eff1CW7CJoAAh6CuSiGzhW73yGHjjfbCYwXwrgD2Ap1e1CzniXn4PskBogaHLDJWLuuRJiVj",
  "key17": "wmM8KyTJacEcNNPXz5xNatDRQn3DvUcsVcyBXb5iubf3guuePfEAnzJkdQefn7HMeDwEUhAT24MvJTYzzLJzwgs",
  "key18": "4JqaCRdHGFkuPF4aFeAYS7khsKdQsGPkP7tZg5jQdLHvrpFzPKrBs6GLZLBRhEZ6mE8XRia8B3BwikLcWepP5W7B",
  "key19": "8rbMYGNc9tfXZuzYTWEEyubPAqRGcPmW33VkvWHeHBNypXnP9DGkUY7Um8wGXjpjLB4JgpC46XAhzDqVik5pBHG",
  "key20": "58c3p9JUwMtW9p6koMUPxp8tctm3gkAYF9zaTcd1eAg7un6ZYJuntHpLekJqztvvvU4oZcAUZWRWNJdbsU4w63Mj",
  "key21": "2Rj9ATP7MWaw5Do9zYy2PWvaxb8BhP5FJu4BT4Cnj126tWH7AB2T4R6Dz9jPP5kZJZSK6U9Yfowd9qpe4TohUdbi",
  "key22": "2eQXKDmPRZdt1Ng4W8R9iJVZVjWVxoFwLLg6v7mJcB2q6NAasqcas1JvhQyixBQu1SEkwyZjPxPU4ooCmqTTLxw2",
  "key23": "5aXx7EiFS727hc7awKVbTQ6TXaP3M8pZXPQJRqC3JPN75nLraqfwVS6Af5YAo3PX1RxAcfdzQV6HZPYgShJ6HkYp",
  "key24": "eyb4sQCgpvBitX2FzjjhZX9xBx6NbDFcVpZysmvbC6U765T7ZNJbfFYYVBAAnftcnWiJdzUgV3ceHEHv8eTtwRM",
  "key25": "u6eFFgdGHYyUbjeHru7MBFiS9CF3BzqzKDMA4E1QAfWKeTqy3eSHNepDAQXmrnXcNTJewfMqDjBAUKfZxV5x9Gs",
  "key26": "2ZxkqkefEbpi7DJ8YGNKST5teo9Ay7J1DtaFAfjrRfHD3NYWWEvRhK2k6drGxM6Sgw4gPu1zSwfcYEQQKzfFV2k7",
  "key27": "5hNQhMhpx5uQgwwPhp22pSVbzhjXcgFcfw7NXrXnLandME8ZPtRHB6okrpMq4raEzkgkgB1XQaYcNRxwf7PwbgdD",
  "key28": "4vzm6H7sYrYBVh4XzjGgh9aG3a9QaTNiySWGvvXx4b5qMRdmpVqqn68cpATkWGvpDzazN6VDtrnGnaPeM9G3KUpj",
  "key29": "5ZPn4nWop4fRV1NeDwyApcmoqExd8qFsSoHC1vvjsQt8QChKVWq3uJ3PQ9NnJAQYGN6hxRx4dwWhacpoYCQFnXw5",
  "key30": "23Pdw4iwWpvBRh7sQJkrKofNT8cLQtU9qPtjYaauamq5vDT7gaWtr2LRGWf6WJw9ZPX3pF8HRsG1vbBos7tNhei4",
  "key31": "67buKrbycBcTK3V7jMPTt8SFX3KdhPXQzySrUrKjTP5z9kJUWLpre7GsKu8k54qJ9xnybJEoEr5p4tmXm1wEn1fq",
  "key32": "XGQ9PbMnLpKAHd1Gt2fne1FtNiMzb8VtgNaCsMZxxyuQXr41Ywr9s57NmNGbNuHxFAhMXkBLnUBUSHNGkZ85KwW",
  "key33": "4sbJzCFCDZxJDvk15ADX8TSUqbZrdQBMbXZ7ekRD254yMnfrz8mXPrgAjscWHSiWHBdgQsCy7pztruv4Fn6thqeN",
  "key34": "5nXzs5qKDo6Q7mTFXH3MdqNVvgdd7DuEMUmxVWnXjoDYaTvm75pwY3HsESYMopcrkQNQezQq7Wow1vgJfkYPftxb",
  "key35": "5t1KiRJTM3sbVwEcmHCuQ1xKGhLtQeNu7y3FqXVmtzC9593k36wHTVMWH2yfc6UnynaDqgb8KAB2qcLYEUWR78K6",
  "key36": "2VMPbWMJG4Tmn57qNgqjrSwoq7g7m5CRFaDBygx45sjUghZGJ4sSZwWucR8V1SBwKWqBXnhm9GcroHefc2oYfiwR",
  "key37": "5BzN6e2iYCGLC8XLc8ouwVmpYHdGCDWi9JZo6EExXeUvoJdBsviFgMHoxY2Tst14MbsLQaBHKTcXUBKCwZwn1Yxv",
  "key38": "2w7C8XYr5QfPopToL1ZfUaHUbvzPAWSQjAksDRJdqPTJJU9HECaBVQhLTog8ePhkgHoftLC4eVkPm5XVtKtZTVqX",
  "key39": "4Ztcu3sFEKXxWQDbT823bPQU6j5wL6PAswfFSA5sGB9HKxF38E4qkQMhy34zuBv4RdyNrAgBDFcap3RU6m7PLmnP",
  "key40": "uK9mnof3MedvycNjbAznQyJjo613FBRABeBwVcT6mr2ZRJkUDXBNy1VsRobqtDtb1AK2dDSazM3AV3DmyNQupoV",
  "key41": "415uUiwacfyDpedc2HvxG9fQgwb7pWMinWHPwHFpEYPacqCEiZXEZxmXk5LwHtdKeK94YhtX6zsGyUVNBDmVucnj",
  "key42": "gc45UWRDu8VuFZsyp2es2MVfKwcAFrdfLdxCCRFYQ6Q14jtH7zgzrqGNovBk9pRTWZ89dJYryZ11tv62JkjrDdg",
  "key43": "5wYSb8bg6NEkWXd7oPUkB2fpoMSzMotdz4qTxmeNm84mWxAHwGPcynGtXXUi3BGfXZCqxsSnbWcsMiDy7h4TtAvn"
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
