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
    "3UnqMx1LFtfaHoTB1k7ARks51YiSLDfc19tB1yV35UieziFaThCUpUdM5zfbuYWAsrjXvwCqHfqhF4BQhSzu2oFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sauSCQsLA1LYNAR45jmmdzhoDqEjNMKixraWxHEC8idLReyH2rzWkayG6JRzxyY635UNLWWBTwJRjqxEWRzpR8k",
  "key1": "2nK17WS3QYKvCuWR6er9ZssdwYong184HMgUAQsaCp7f72b8ogneU4JCvfRM9e2At7umT2u9qZqVhNPxWPSGT2yQ",
  "key2": "2Ce8mf2umeGTSzmGQ4HuVJ9Ez2Xc7TFabPHzM96viYqM11KqzSZP51BsXeFCRbPjxAfNDhm32J1TqyUqrafcZTzT",
  "key3": "2v4uTBddEBcvgHuZkZMmrnEf15Mjg1FtaLC1JrxcfaNNP8pJ5TSHgMrKQv6ngvYKja23JZvSzdegPy35vVytDyWc",
  "key4": "4V7qbz2TgKtAHkZWySZvgHuMXgiEGX7dGcqyvhUAe1zjVybVw3Ltbm4271m5JYcQ4mMFpERD3HTnpzYzct3K7nKD",
  "key5": "3nTC6kUyAsDLCbiz93o2xHBw5kPCyC6b4Fh519N3zDdy93iDtXhckzpcudW4f6zqNoRQTVQAhbjabqiJMBDYUC6E",
  "key6": "4SGKW54xFBmJ7eEcxF2mXXcioZFxSyWUfSBs62nCe3gngFbGGhPeg2iM9Q485o9z7xjQsKR5LEdpeQLw2JAC4RJg",
  "key7": "2bGQUNC4JF2ej3X7nKPfUJuXCy5HZzqoqJw2ZPjMo3bJGtoJNrUqruXURPWUMsY5iRaKzAGq7tRNHuVK6UmjsfVC",
  "key8": "5RqGKZAHAN6jAyBUncpkyXAVFzho3tm5NkgNLRVRodZxnBar8PTiQvDWemLTMfCQ64cRzBxKe65m8x9rzj7G24YK",
  "key9": "5uYXH7STJcpuRedoUh6kmqTtMiLMxQSk6jBKyRg7tPNLC3nMpwofBywepfH5PbdhpWUd8qCfFAGiw6wdxuZUK7ak",
  "key10": "2MaVjYZm5uiB366zMw72ozkU1ZgLzaj9vHmTdUxCNJPrHpyAcn3WPVxyT12pytsMbKajEYJJz55a58AWNBNHyK9Z",
  "key11": "3zfjj3P299GJLY6a7M4mZqnTZvG1DXnyFbbLCv4ppP5txpAmcYJpx9GFthgoRDYYQCnW5ioKsr4UVn4YXp4g8J64",
  "key12": "46HcgY9bwzf86jsQBLuTL87nUM5ryBiZm6EAQywXrBMSzWDfpcxFyM7g7bpCXYVgHDVHdwQc269KhcyHBTEeCju6",
  "key13": "5aqcYT25h3k8VnQX8dhdYQUjUeJvfv1HN5JPwStY47airvP8uZYzHp6MMajuxgmFJzRb1Y8tM8BPzN4RLWEHLBXN",
  "key14": "5mRgzFYg9uVBZDnykYmT3CbD7wTnnuDfjSdJxKH5Q5A6PFzxuVETXSWyv7Y5VBKCyDhwUdHQ3uxuzi6ekdYh3hAr",
  "key15": "2wrtpREcBYJck4vQoYBQ8ckt6JCcqh4Jrhnn65rggZZCqPfenbkh8MwuhJYSw8WJiZTNRq834bp9ZjJxnn4GbEDz",
  "key16": "66mEYJ4aoFjND5b2eFx9wyVu9JhnKvGwcYwSX2D95DCdga2kZdmCihYS2KqFDBJz16iFspE2NPF4UNsb3mR7hyRq",
  "key17": "5tk1uQVhommGR9rA3AGoB58BUWaUuwcQq3Ez87X94hv5wZq5bv9vJq4iYAVeQAB7AtA5m5on1aDLXdKbsYzKVaEv",
  "key18": "2g3yc8RzTV6z4YJEU2ht4haEKCymzv6EpUZ5aZiwX1dwsVyz4HehckrVH6mb6xU21tGRwPk8B5xPNgowauPFjDoK",
  "key19": "2WPYvFUXey3TPJAZ3sY9ufpCcFyhhDkRj7rLjedgthhufSD8wHBnvPKdUdgswCa26dhFGpBP4oaMDNkBvm7TfaaX",
  "key20": "5UZmeF41XD3deg1dK2Rcp45uejS9yiKqWo9VtDDoU4VASE4BXjT9gEAiDHPZcMrnNH1e742v33tm3XYMGiiSFQPA",
  "key21": "2tGwhQ4RYerV9ZFfrBBi2pJ1QLKhF4BuG4JroKqkznjJYLCMz4BKma3tq4Pk2Y2qG6Ec5inR7B7RyerogMrrjs5a",
  "key22": "62jJgriDgwdqmm3iStgwa388joikj5PRpEkuzL7zoW1L86mziiX2W77MZAELa1iZHABzNs7U6Jsr7Nc6qd98ewe",
  "key23": "3ZxzdfMQPBhAwgd8Arxd8sZuV85NhNrXRzwYuHWUxD7RNMZJFGd79n4WiNZ4zZsvZWRR8bRcPMm7x8hkShMRiZ3a",
  "key24": "3SShndAUoHeqwD9w2PL4d5yHbPirivmrgCiTrE5GA9C9Dy5vKYx5wCAgrLLMLzW2g7bTiFi8jR4xCxA193Wbk6U2",
  "key25": "49irCGv44qEurqpXqmL3e8j86hhmkird5JZfUL7Mt5hXauRgjUxks115zSW4HoVbvvA7FQJSTEGJ4fN49qcCTDWD",
  "key26": "3eznkP6adMGi15QSyMsH69s3KqJiqjaiS37RJmkB3dgdsn2EcjP3A9t9auAiqhZYH3EVs2DmqXgQBDRmdCsgnqiu",
  "key27": "3oYrwR8JztySpkDDwC8KDmoZSEzVmT5uvw69g4MbHtzYCs6fKoynAGWzparHZZkWFh2VjVkQRj1HySXp2uyZ4eJ1",
  "key28": "rbdddY7HdE9gA3sdexDKxauCLVA3evsvSXyyak6LKfghnnEWNruUSqM2ynXvngo6bADDRnvT7vAUtwXqazseLVq",
  "key29": "diZEtwg6F8x5YYBSm1ckNkehdmyBNAwTqkaD7pANy8ah3w7PPgxxr9oq7MEnYx2njiL8f5Rmm8iXDryAYne4Xzn",
  "key30": "5HfaE2EaLN51hvhnxVP2Hk9Jx99W43iQ4zC8ZpxJUtNoS3W5kGY5MaEi94tWdP6QVHVeWsES14i6Ueg7eVPhF2X5",
  "key31": "32tJF7KEyGHXH87Um8GqkfMaxSuoXXXvQN8N5iPFsA8QbPnkgMcK7EMvvuCNwce7GajeNQAXEV1P29dGtE73x139",
  "key32": "31gDXiRNVCVVS7R4aRSYuvZRBa9oH94Wpu3fScTLCs2EfDbvGdxMNX6q1GMnZg98XxSnY1FR4vM6RAjxuhjm8sqD",
  "key33": "2wgcSiU4Ky1mgSmWtLr9wqrwkHRn1L5PRKnMSx9ebTbDJnv61hTjWfVpaoBT61m4fUZpF8g7mPH84eRWdJHQL91z",
  "key34": "4QsoEPJ5SRNsd9JVT1J6MkhkXLacy4ji5cdzf7ujZACAJmHS56sYTGnErDxjZxhhx7GZm1DU86MA3uHti8jB6QzP",
  "key35": "3vs1bRHFvM6UPXy8VyxyWLmfeEmq6rHkeCq4QCV2f12xjrEo29RzeTJb4rgwuURT1ocbcJwfffrqDspPKwv9nv5u",
  "key36": "4iqhunpCaUk89KbRXgbXbH5z9zbgeQHCLxjKR352jEmseSHTYZPVjMX1Rys5KYQrjiHrNc2GDkmQ7hgZproccdiQ",
  "key37": "4xzfbVzmSNpg6Ez4a8MX3qixTLWKJsL7HRQBzJbzwNxgrKX4zNURdBfaoyGxsfegHk6muqrzPELE5B6Ywt2u2EHC",
  "key38": "2rYRxb2vtsft4yjpdXJe56w3CMt5ChJi3fGpdVp2fG8iEV7A6pS5KAoSSWi8Gi6PNwgW1CsQhBN8y52gBi6s3XYK",
  "key39": "3vCVLU8NeoYa11S4eLdrCTG7mkUSNjL2mfQoZacMiHjPdjpjFQjPPKZWoMUS78xhe4eSzWAjur4wwFtSEDwibb8u",
  "key40": "3tY7Av3NR6pFqwodieFC52DkRuGiUmKt2gpapLEYzK6Dp43zkmkBkHxoptocibYNFezghhrnKdTCky74PKKNEQsh",
  "key41": "59DqhxPWrbtSuwvbT2Bm24s1jvr7VpFALEwdT8ZUVGzHhGAZB7mQNmBTafPtMgFVWF1ATaNwHUjBZ1nqp1LWo9pp",
  "key42": "35A4FaRAuiydjWh2iigN3PEsihoZRivhuZ7FWk82FWsUE1uFmTFYLXUeuwvc6F5mCr1FFjUjnd2LCJLUHtztXqvL",
  "key43": "yd8fYtaSwgWVrNKYSVxLedu4vRAZBDQp1M2SZFZLg2zJVj3sNumwgFMM2wBAfTowg9sLC8VCf4rfz8QS7vha7K8",
  "key44": "42MjGAba578RLx4cEUxk4K25EMQ9bLjTQQiAvUYuwzFFCALjoRgUJ3A5u5e1czpVcEAxDBjaXtfJYsUSTpgJRkC7"
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
