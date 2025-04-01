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
    "2qdpmdgFPjMxqHzFDB8Vi5EA7UMNVMQd44H52L9w7Gvb6yB69FwzDKp3iwYFZyPg29BzUaEx18A1XVcEaREYzzFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Zbj1EdjyYeGf1VbvaV7tVcvpDRqgyBVkWeooaWcktq3Wdqah36wpcMkQ3Nz87cBAh2XugJ4gcxmnRE7PhSp2YR",
  "key1": "5sGwGYV5BehN2v2As4inkErJ8uJjGVwjk9fAUss7tppTfqEdFeKMpnCCUT5EA8vtzUMdjixyuKYttyYbKRrvri6G",
  "key2": "5A9KC8rf5WU1FyTD2vKVg2VTypQ54kAkus3g66aUzyZEefEWQmnnuuVNnWrFvojb8oAkbSLN5kAMJf6QbxmFPR3H",
  "key3": "5XvNPW5KnLviFib4z3BGDNayPe8h2xTTxDAoo1APrZg32zyye6RMrrZZ39bVddm5QUcup2avefzPzbwDHmcrx2Me",
  "key4": "2KVzzqxc15WvosJxyVFx4BAamdHbvTcySX5ksM59WRE1TgCtCpLgZEhs1pucf2prkaDqBb47kjvb8V7rfVyhU7C9",
  "key5": "VukGJ4u4uyEfsQmbGiBFRtyek5oYxHiW9UDqgTjGhpPvTupFgUhVN5fXXzU8WN51rCtcCEC4P2EYvRHqG9YidpG",
  "key6": "4xZsuHfyGzWNan2fqnjCL8exCwzqh9qe9AwHC8uYVhr42oMWsNnyc8fJef7aEP1XaPfD7qrZk4aie3wC7KeGJiXE",
  "key7": "2JLzqx2YgFQSzTenNvtuuLUXVkbPQ9iAArxyj7YCh5Ckq41a9ip8hXppYvWqTybAnPN4Uo3tgnM7ajjxsgwsbtEh",
  "key8": "5bV47sac8qxA8go61SBWo47fhvCeZ97cHZZqX2qcNMGiqhHhiMqgCLafAWMnZMPmA8vf3tmxz9F45PVMxhfcEJ7D",
  "key9": "dMGghRUzfLp8aq8W4XK6AYbV9wFp5jdhZgmMdYtDx3hrBrrvRZsNGRfeesDYm3jxxBBVKN1G6yoZLrdJ1L8Rz5t",
  "key10": "3wHwBEJkNVxk5AoAczuXExSQSdDzTAmE813CgqdV3h9WpqRN2Lq9esQiF8FvmCVJjgdGsshBwbuPZbnVvz72J4sM",
  "key11": "5XhiuJoBozZkY8CmbxbKAcFFo9sc5sxj3LxgPs53YmpARCBUFBZM88f23e3sFCWLuWXA2g7pXjhfJ5fjRPMdGnbg",
  "key12": "8EeQ6pWJtFMxv4x29jD7Mxm3EwiWcpZuGeoBjiZbRSMi4JEX5UxD334qxZ7MiTDWsJp6s7vmSctB4Qyy1Mes1FV",
  "key13": "4qHp4CWXDNYDg3QwjWFJskH3rZCrxAWrhpbotykv6wXqkEuhz2ucmJv7TU5gBu5cQuhmWRM97xYnCAftjxECpghh",
  "key14": "3b2yDqPot8armKzsJ5wwv5w4Mzms7fqZ8M6xqiJwh9QC529GxdkBZGYSLaABTZZAuoUgwqfXzuSGQkX5S1t1pEaa",
  "key15": "2JWeaXuiTvzQsk8qDTaVzKEuzT4QUAhKaTqWyPP8RQHYVoqgro4WpdNgpW7aQqPGS8Yj1Acr3CvrQxScrAmmUEjC",
  "key16": "4xc8mzrH3JbpGT3CFH3onJmt5BTvrjndrcgwV7sjZwTNmSQUhouyLC3gYNiYNhd1MFM1M9MHKh5KMBupU46CRSTN",
  "key17": "AZW1c7v1h5agw4gJ8T1L1qNLGf2n8m8oQpj2kBi4dGRuka4NDyEUcC2qSjBySUFGZvw6iuqkFNJTppKPLkWmTRC",
  "key18": "34KWVvz9zocUTQW6qaMFr8CupGmW7p6us6XWT67UWqtRS2AroMSvRVRU6KCewzuZinYenGj6tHRNjBZvpQCDfHNY",
  "key19": "YYBAGhvKW2bkXoa3FHaSE4LkAYNTbGfaS926zwBuEeQntuSbNNAmzfd7pCBbWaPPMVGwunnywSFKbMJzvKkRmuc",
  "key20": "2ZSiFLcgLDiMz5nAXxbwjYcAMtc744LgYAkyLiDEvDCYrgADGPvNbUdXVtrVrS1MzgrdjPxW4Kms4Bc574wopch4",
  "key21": "4h3EVoQtpuq8qyt7qXczQVBgcMqHWw4Mq26ubmSKd7MhZqw9TtWgHCJToEcurQ7VkByUXso2nLzJKbBv7dJ46Rd1",
  "key22": "vj7DgqBfn76WeVq6gYLfi4yBM4UHD1a9w5UabeizA3JabAMRqp4mrfq373VvwwiQ8sNZHBQewaj8H2hU2y2pNxF",
  "key23": "5KJEK6k93jxyJUJgUjjwVw72q5nFhoVqsSeKirtzAABAqkSydNWPa3FUd9iFoNgVTLuXkUq9Hmf6pwMN6LSQLqwm",
  "key24": "3a4m14ifGvRexjoJhauUPUMbnLX1jSVrLsBhx2yKV2cMBNiReai75HPjNukHm56kF177Fo1rS3bHKCSr2LyNzQq6",
  "key25": "3D9kP6ABpCkwkLrR6vyyytFyxh7ntsZSwDAGXQEEKMzjnECtnMHym5kCHCchDyVLcGNVznqYhw5nVmz7FTxwatie",
  "key26": "Y6vHRpmk9tJ5PRaV1HU8N527UpxbE3wBzo9CD8fCS5sdeE49iD8t4H8NYPAJ7WyMtdZLWP8TBuH8oerPze4iuKc",
  "key27": "qNDrufuRL31q33SQss2gBWnn22AzQp9CEZsjQrdk9WfB9XVvKZHhcuEgsV37YzueaQxtZdV6aizkizHGFTyZCor",
  "key28": "5f8BnBwDjJjVaWFSDHFgG5g5cb6fyH9aL3gjxcNHapG7YvZKiXcyn8noPHq7Lfrb6wmS4tyVrFTxiHsJQ5me1no8",
  "key29": "8LMPW3WcDdnaAPGxTVfgpHWtXVyvnF36z6LFUXdB1njguKxpKB1m798phCq5oE5uhC18tJczJk3WnYyUHk7EFas",
  "key30": "2wzwaYxXAH1HNmeTmFAYseHKE4HdpjhU2XSC6aYLna41xboTBeqUvkyiRbZH2mDZBbAWH7Bt5BdaKsTwSKbxoiB3",
  "key31": "5rjaM5dCRnWMaQymYuY3JsPh8buR6oG2vh51YpW3C5Jojf4RxN33jrptar1cj58sbRULLg8gLNvEHGo4C4ykGLH4",
  "key32": "4B3fCGdgaQyx4uQwE29fbsx6WJaE1XQPtJjVGm14UZQWFWXnbgp8JrA5n1JPuZGfFKk9NfDmsNrs5m5eUXC34yai",
  "key33": "5aHMjhnYJohZg6CudmGGd22Vt25seYzxqgZJ4wt57Jeqnho3qX1at5usfzn7GEXmsBtfLfR4ZEHLdbVEEt2yVjPh",
  "key34": "3yaTP9mPTtKm5afCWL8pTF2A36Y256mZMeeVvfWqHV54M78Fh9jA9CA5GwbvYv6nSFtQxbewWE2gZ5nRiFx3p9eC",
  "key35": "2H4QSQiRLX3FvRhv3LpztWwg24UwfcuRiBLUnv6zgWWrspjSGWQ9rS7YWYQNoWsRZzbPkBuqDNNvKvcE9YmM6QUh",
  "key36": "2Vh6rPsWFj8SND1uDfXWYPgMTHChmv825TyZVFqH8HgZcCDXK9FaNUxabrJHvLi4yJK61r1yyEvStV7KfJ698uhF",
  "key37": "27vnWk5zK5or9CQ9QyGKHCzCcENJ5q5jwVDQdjmTA6AbJabGF8mzVCwSKdGz7pjX5zkryADGfqTcRkr4TuQngWEk",
  "key38": "rUXHTakS7aT8LgHsPdMhcok9LkNxo2vdaB9ukbK9ymc65dm2X5V8JLoRU7sW5TTvQDeX6CeDRrkTSi3bK6sDGTx",
  "key39": "2hziJaLh6oNBdNM61bDXqcKKmKyNtAG3Cnpbt8FzugxRBYYmGcSyCsdhMknVC117u8CScw2kd2uSL59Ds4tzvNDH",
  "key40": "3jeMac12CKJgb747wXxvZv7todecZC5ZMRgi9MLgGRZ3F6sLtJz2DMBM29nvdbeeaou3F1pCR9jYfF6JzZTuqbL6",
  "key41": "4juZqX1KzJRC7BfvfhsYmN4MgwN1b7WwtiaJxrPJRfHFsFwoZo6jRdcMZycjYM3RyHV3Te18mTwu72AoJTXH5VYS",
  "key42": "365PdH35Hz61F6s5BwVrXDE69F2kop83YhsKgfRogys2A6r8j1bVF6yGw4NNTxgi86n7ioDysvqEbu5PVVdMN8RH",
  "key43": "281iVbkoPREMowx2xs9kD7Asy8fXEfuoD8k4WFLkgDAp37ArB6QKeEuwXjVPBKgn3FpkcjywUTyZprW1rhZ5SbN7",
  "key44": "vdqevkKYRFygEZR3GXVezJKRqjs6G2n4UDWYDGLi9HaYzoyBWUB1X2cZ1LUq1LU9QZRuyKkFM7Hup4jMXv7VMfv",
  "key45": "5u75GdPJm44r1vRq9bkcH1Evr7ZDt8J1PeuNZo62tax5JTjKMAcTNSuc6Fwfo8h4tSzBY5XsU5QYsiW1fRzkcpwu",
  "key46": "u7a3nKKDQUqWNzqhXWgaLJTCR9R5ne4DqKGR4NTJ6phEACpg37EQuxAYNP11cp3S6aFtEuD8Ha1FZwuDDFo6Q8M",
  "key47": "3GMuvTV9mFHSnReryf6rkiwTEXemxUKFQUDKwuoxPWP3cdxqDuEJ3jep4dAJYtGB8bkXv8Wob6xo5Luo3KyhqbuR",
  "key48": "zhps2VL8jVvKHaTR3gwXDz5ratzWMkBmJmbsyssxb8gc8Tm9gZuJdzXfRusH97nhKAQkXV5MuNzKKHMGdMyy5pe"
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
