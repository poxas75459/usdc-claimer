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
    "3UR9AERdPun2jUsfg1Ve56GFCgVdQLmusCYnfaSgmXrpq8A8LM6ziDSSWZsQariNRjJeXYr3HCmQwmE9foG3B1aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADcdgi3c7N8bDUUPs729jXciso2JDxGdMZLZE2mfJEkYj1c43sosdFuL7YP1HKkdqC2xnvD3myBWjqL4F1EchZn",
  "key1": "5sfi39d8Mm3xmZqrEEfpdGCusewetS1WcDbEPWYyD41QAbnUgSvJQ6wy8D2TqTefmaYEk2U66Jmhc4MYDNPocMoP",
  "key2": "4FKHYkPb88BfFAiMBTwFkwZxpYei4tfXf1a8AmNwoB78wmkVqwgY48xerk9N8c6ppmkPrisZEKY73ivDu5JfVFzM",
  "key3": "2FqAfmfMZZ1URHKq1vpaDRwTdhRQDh4JXJmKsz6JYsq6QMokvuR1eornyWGYKx83Xi4kx68NvVYWuKq6inSupfWw",
  "key4": "4E5qjKMx3UiBfs4AdS4is8eJGfpRQcBP1WYkjkQbxq9neuPZQAvLax4aHkPcJbxCxEPu2ZsQEuzBTYDa8x7XHuHd",
  "key5": "5PpytqvxzEs6hiEda7ZJ6ve7cYWzpxM9poGpQRzBVkstpCwKbbu1ABUiCAktpwx7e1Efgn5PEPkF4kmdyhaznZfU",
  "key6": "4w5ZQYqPPhKiczvYZLnp4vVtsAW17xphpXhJ5WhmvvaZfv3e6RsHV7aaWVS9WTEp5omDnMBVvXiZ667XhdAZuVyD",
  "key7": "3USZBPDtJP8r591JLVEjCmcqrnmrHUqbpTQ2p6uKDsDBqmryi6yzVhxYBBKJUC5zVaEMHpTdPWUX9QRqg8tVp78B",
  "key8": "66sJMGThSriCgpQHZRoRjE3r2HKTFEXAgu8HFyBtGCifMJTppzX4BWZU1ZFdYAWWmwKGuuadn66Bd2HPLQcaFyqR",
  "key9": "4mWUr2EEy16RviLni4ux5TYPsembtErdE78z7NXkXq79GbDh6QRP3jEiKNRgWVMUGLQYzC19q8KY4tTozQMJvVAB",
  "key10": "LqrprmKDYQmcipc4pC1sREJvTi3Yhv6VjCguufpPG8Vyb9Nz29egvZmyhc7QANJq8UfcnKNTtRrrKrJzN2aNmYp",
  "key11": "49BJJpQqHH1WDHiKDffytcXs6UjMvVTcrKxfaTjXDMiANvtm737t1qTVpKxwVnbeDtCPxHFNKt9MZ74b88QL5WFJ",
  "key12": "fiA9iLHc9WQUXh3MNL5kRtpZYYmsL8XHveHeJzqvUdH5dGvUhGiytpxPiqD25WvUw4anXUmvWnFoWnqo7ikXMht",
  "key13": "aUatTFQz588B5ye6QRtq63C1yegpcCTeEQuYR4nnJ9gFUESyN6gZx1xgxC9Vp3TNnHW3PSdRTSNfeCraA4tuTSe",
  "key14": "3ScdHsj3AiNvgtiYfENQkKGAQ8Znnm3d66xiC33gAD3KJdp6wXBGGFqe8XCssoeCSPfgVewx1wa7WRHHLxZcP2Qr",
  "key15": "568amwmQA6sfdyHwHbe8NEZ4Bur5nUF71K9SitrQKFozS2q273Fd6iczzv7RLvYM4bdzZ5J1TMzgJCmjBLwDfaua",
  "key16": "32wmocDN5p4fMon6GuM8KaqmkNvVgBoy65p47jUSAV73GH38est1zDp78paFSnVYS7kP7Yhi3Pvxoi6EPVxE37qg",
  "key17": "QEvtmDqHtY2CxaDY31jQJAaBwMPd5YthvDYbxBWqDMm585BdL6V48q2p7KLuq89VHA2xKq8PZ2ys8cW2wicjTaW",
  "key18": "3SGpuQsEhLoNoRRLDnaojE9eoMKpa33TuTAtYaugx4ymzbN6LGgBLX4eJuWqQ4SAeMZH2mXBtb2emRXg4od6Jwih",
  "key19": "3bteEeDv1ehXEc6hHVkPFnBVCZhw7baobimc9cQqSyUfPCvNLZau8vm8meN9zCMQJayjxVvrP9j5GJh1ivcPWxv1",
  "key20": "2UFj4sCRGzdK7kuUPS4f7MyNqYUtgunkKFN2fyCrsAPdGd79iNh9MFw8FJn4pG6fGWXMqzvtVpTZbN8YKTGdfnT1",
  "key21": "5s9ypPdy6qTCHejdiakgmxZmCQNDDrjMHAV2hPoz1S9oGDEf975qQi2MTE6i4bR83BmsgoP1v85b5e5Vj45AXMf3",
  "key22": "2jC5AoQWSNHR54CgvprfsyznHDvYp3AoxJfq4evww9hdVxfEdp5ZoMN6MAAfLWcpnWL1KFtuURu65N6nWztkNz9V",
  "key23": "sPVyGt9E7MCYZ5m6BrJfcapwk5Rxc9jHVNryiM7SNKjk2h7LAhSpcr9GeDbGYoWnYKRCLofu6TuVvXkFp4rA9py",
  "key24": "38TNTgtDMjQzLCVPy1xvNMoayy4gsFwzVv2mQ6HSJukThRAdVb1xGFHx5qPgmUyMUbJU5PzweDU61VeKFCocNmEb",
  "key25": "fJiHLk6vnNecvminNvFMBhj6ewxTXLWWJWAVjPpkZc1dxxxfSMUyoAbr1RitrS8ghNhQo3TSQX3k18hFoxdcd7J",
  "key26": "LHnrvQV6m3mxwUX4jc8oKEmghsJ46mbRPiczVshq8fnKCi3UPYzBfvZM3egSfrFqQNhZXVzrBGb6oYf2tJhsmjA",
  "key27": "33bkfmtNqx4ZSbfNc3iyX655CaPEdRbtAvu8iKNrQnJRxAqYnWNeiHcq8J82aVaZTpR9hPMrZyyQXQ2eeR2tLqiN",
  "key28": "okSaukgEdQT6ASuBqm14eKxXKiVYoa9QTqEEpcsoL2ZELWHzc55ZCepRW2kLT73WSaTaywxso4BLJCbgyv4SPaR",
  "key29": "5gZozNXGDvGcMYanJNo2pw88hXQvPPj4331otqou4KaX2HCppEie1CNPPiSgVqZou5aKBJMdPZB1swysDcKfEueF",
  "key30": "2vmShoDBqSqFVXuKkyUejgWeGukCB2j1vURZoSKU9RJD8f1t8JGwwshcPJgPyKuW8ZvrhNxu9gReAxEUEyAP8UK2",
  "key31": "4HELc72BV8nZCv3NxGwxN6pGSD8opty3opKgz53yPrmzcEZefMiD7yRNKsuzDDZLntCYFJ6wprYuXucXzGe52JmF",
  "key32": "3vWnFdBRffDfenVQLh1wzrbTmT9yLEShnm3vt55YEaeGPKu6cugHdcgoGZFK9WqhidLUdNiMb8gWrszn4DTgPTzk"
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
