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
    "5RKQGj6t5rj59xYVxj3xuWAjWS7z9cb86Ybv42hUgiGSz41hbb4sHH7fTDPUjCH7qm45hsgRfhQYTkK7uPkYFZoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5FLCESdjkaDytqTquSAUyNACGdzX2myH27Zyd4noSydGsqo5DDimUDy1znCBT1L5gckEocqRwSQRXySS8J7m1M",
  "key1": "3XicwFbVtT98aaUPxKNM717VApbv1kvpfzGRyDrLQRbaSJdYri86rQ7pojGag7mpadwmBhJYSYEfwjVGXD22UxtR",
  "key2": "5SrgjX5zRfykzLVywXaLQygKWR7eDdJXQy2CgTY3aDztaFUciTgMJtKkoHfwk54fUKCZoqd5HmuAhhtN53V29Ftn",
  "key3": "48bzp3bkLadipSrVrGNyvs7g1txuu6Qn2fyH8hV59GsXw8EnbWLWXx3BEU1eSNYhZWNq7HBpALvuinWoqrvNps76",
  "key4": "3QKMwzor4p6LZHvNE2M17WVhoimvyBbbARwnKWNJgFBEeVAgifWMAjVtQNtbFs8S4qeJi843ZGY2WaMhEhc4HbLd",
  "key5": "4Hgbao5ZLGqrtv9icShT249BWNzsRwKgPeantQemAWsz4S8etuSpGVczvYJPtSYqvgVDFapkhH2RXYfhxbFhe7rM",
  "key6": "4dGFWaR2ocmAgk4bkV4cPE74LgTxBRbnnJjATRQpuAbL1VLSNxcQ1rHrDz8wkEEX9WfSgtyfUjK2Rpdt5adth4Db",
  "key7": "21V6cuk1Nmo1kVwgwKPinnZRCoFes8StkLfbMULm7LQcWC57xLAn4CCav3bSFxBYnvHim9aUnSmj5hy1StVTGEQw",
  "key8": "4EfK7WWNY7oShueyDMWAoacVeUzx3NrpfdPDYankoXRs4opCMC8LXs26ovbgHWfvKcwaFGtdYs8pfFLZepABVH6c",
  "key9": "2tyF3LGgk3bUd63k78nYfVR5R7SFu2EKMtwYxYBQkz4nLe49w3EBBd6GdFoerRaTfzhYm5QQ6bgsDaCYmWFC1nCu",
  "key10": "4p2KyvYtQUYZAGTnoV697EUrtLftmmtEDtTLCcHCeQj4WqX2FLa1cbUBSGLpf8z7R7eEp1fBT12P1d5ijWBVyVP4",
  "key11": "4jx3j2Az6Pu2cCEbsT4Lke1KgDK3cWnCqw96cRDNrw1DR3kKHZH6GgvfUUR3FSAbhuy2zsP27FDjkSfDwDW4bQqm",
  "key12": "UYd1UVm7SvivjQjW1gLFGnt5t8UnJ58A5xV3cjtcyYZiZakaJLXmSU8XWFzaPBjoXDtuYECzAXfoTzTXYZB4DbE",
  "key13": "4GejmaP1Vx4uRCcZGUkDEZZ894zzrptbvUjMbBHSudPsYMumFnbw5h6gPXs6e1C8LLb7BiXEG8ASqwRp5rfP4f5c",
  "key14": "481HBC1vCN1ZXNjbhiYMJJQjaegUS7LY92yQ6VSGKSMiKyaGfUNniQ78KxGcrnF55CPWJhtkgnRC7bdGcMtchWrs",
  "key15": "Si4EB3vv9jZsdqTLkLtjawpeRokQGWzypypHeGaqNQpGJMbfoSoaEmChfsMzm7ZmDXuaSSFBqB9zjL9Qj8nFwyo",
  "key16": "4jKAiDK9bkC366B6yXpSMLwRZRRaxYPL4qbA4HEf6v7fRE127J3SfVULPMU8R6ApMSQARCCjsUiALHfj7owNQtcs",
  "key17": "2KmGHNnfv5ESr7a9h7YHQnGJaZRDAtMWhMG2zAucv3vcEcUWDdzZCPFh6KAbfmiEGNmMQJXrH8baS5zAydowwhcK",
  "key18": "2rkCyEGBDwjbbDHqhGpuVZko4B5WXwj81brhfiC3cPPy2pC9SfYm4E79XcDVrf4t2ZXpmMhRVWevsr5dAg2BTT9V",
  "key19": "4AcKNDTHAX4D4Ftqx2cd2jRGCAqTpFiHd4STctd8F1NfYYRqNutVwGXvES5AHyTfWFWnYGWYfigJH7zuZkVUCahP",
  "key20": "4AeGGM9kRn8a6u3vmp6WFKGvyiMQ7UvKFYWRExFBmMgmVD6ZPbdoC887EPgGdVZNU8ZJLudodWtmmxcj64e9mZzn",
  "key21": "3tBidKycmLUYJWQUvDoSmcC1ESGENPZXLJ3CF4avJrjnVUxje48oVfGKCmb3tvYjPdnVT8qg6UQV3cHZihBVdo3S",
  "key22": "2ZFRwpYLQddUcuy7BxT9q3yGbhpbzepAz9tdw91eLow7j81vNpoSM5SvawSN3uQmYv6ARXTEETximxcqK5LApG4a",
  "key23": "45HkVQTgtuUkEJS4vfvZmASpNFmcH8adYDWwETkfr8Vb12FHwnajqx5j2LtDWriPP3nmgT7fn6fDAY7yLS9mRxxY",
  "key24": "3mVzp8HDo2UxhZTF8F92BxojiJgKX6VWJfHBoFymtSAYWEc9vG2LvAK9RdZ8KZTDjXHETkHeGJs5HpaiacAMSX8m",
  "key25": "2oCfaWC8vveWxBYR9Eu2cWnQYfcsohgUSbWxmxeLvykhWD6oAGK2ZBzEifDBNRLkcKBpHuGBcCABdWhv8DdMjfT6",
  "key26": "3LrEsNTLg8DnJNApmUj9dvhyx4w5zigQiFa5NKjFkwF9P5umhKp9RF7ntjGZ73LJEKuryPybCWBZ1GzMnukSxH8E",
  "key27": "3iX47GhfLwox9FUSKUe7BXVEZoKBJGL27mcpFoR5byoTVY3KjGvFhb3MQXv2z4dPrkRY94xsCwbbtmgM2PzLuNzE",
  "key28": "3BxiqeYtboWdLbaT4WAASpCLH3ciAzLxUcvwU3mo8ZkgxdP35XfrAryFhNjWnyo3LJR1vFsLJA6vCp9LZnAfGkri",
  "key29": "h8KbyLw45N11bTX1YFWRoFvXQVDrRJfRfxcHyguGhffNhnFJR9MxnzQQz8Y6zEaSLCfkSayVcVrZqGSnwxMsZHd",
  "key30": "drnQ6bdhgwZHjD2NFFcUxDy3S9Yb1PX1FJVxjV7fbuUfSFSmCx4JXxVTrmZeyhQMdh52PeAgqDtMAqhE9aMCmdK",
  "key31": "63LbLhPxTbj16bVUgrhpQ9s4yLGfNxRHtZTjy1xxvD6KW2vyLynGSq26bHqADxqRxA7sLFR7sbRfnBrEJmkgerSS",
  "key32": "2bFGRC1CSCRVEDZFViPzFr8VSpSt9wMujDmdSUAaLZs9b1C8VPRUhvZqL2WFtscmn4ZqFEBqq6sP2ArppGgAijbk",
  "key33": "4rYnpMhAMnTyRcwcnXHS2848f9M2nj3ywdMNtHU8zY6vLpwv3giNWuSPMdCQTSCfNGxuXgh4XJgiDi6e8mP2L9N8",
  "key34": "22Zv9HjHT1UtBt34Bq66GFxbTgAcYQdaWpurHQMLJatZZXghN1QbUcaE94gwzGnS1SkC9hGT5xZRwBLi3gYkCDVp",
  "key35": "wZJowXpFvnEJU4yKtVMEc3CzKV1e6A73htgxsTFKCHXJLjSmqrH9UPb5AHvv8ZX1UZqFVbSMja5GoV1rGopE2dt"
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
