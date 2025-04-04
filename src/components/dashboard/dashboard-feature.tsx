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
    "4oy5zydhJZ1wt3Aa8aJpUtgq8jsXwYhUx6WcANgJHMCBFdMN2vNncuQHQquyS1DWH1ejbuZqVYAzW48MteX96jYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JModhsToabznEnuDAJEkkYB3Td3GG3ULeVMNNVq4aQA77Kfuw4GD7LNSHFb3NAb6sWXFQepU54bBR7RxnzMod6j",
  "key1": "3t2ngpymhukzuKekMvb5ZN1tXTXZCPsAgfdmHHp4yqNTBhgmiPA2DxHtVYYKHbbQu4RMRy4fsWfrnEJNt5KfidpN",
  "key2": "43tvKkgk6TipBUR7JCTgQV9hn85sZT8d8C2QmT5xbf4cv4er6FPRQmJost1da9CWmMT3DtgiWZqjf8Pisn2qBiZs",
  "key3": "4bgnRJZkTkLKbmkFv7tiRXDiUtjL8aymsx2bHNeXuCYocdaLsAcD4ZTpcwfCKZnNeA73nxiRbSDALfEYu6ctrksY",
  "key4": "3XydVXv42sqsp9QEqR8wod3duQahrXdApRU1kp3JT2mzsyTprLZuDodLFDVVdvv6P4N8b8Ueod3i1XCx43Wx2r69",
  "key5": "2azHKcXJUFmSGmQPe2EtfAqh8HM3FNH4rUUbct9SgMDqeQJ2wVh6zAn9bQHY4E9yb57JByH3TLYDciymmd6frvNc",
  "key6": "5NX6RvQ86hfNdvLueNag8KxXtVMfnQRZ8XWTiJHz5rekSWw4XwMTfRnrB3zkEYYzUgKXqUvnkedMiWRxy7JMyx6H",
  "key7": "5DgyNF3bagFsx8EgzLGYPwD1FFT56t3phXxLKzumc7hjKdBAVRAHAX28ojJZGZUJZ7sZRu6WCjpSfrqUGCHQfj22",
  "key8": "3ebFmJF4npoWSkYaVtT32STKYmH3ZTGDSdNoNBxEPJwT9j7rksZaABEWM5yvSTq2wBBQRS1FiEqxnAwk2Aq31yWv",
  "key9": "5DJ9DtxsU59pFhYWK8QbgwYQZwggCsmAiPZ9NDJA6xs5fAaCyQqeAt68QypoNFKnY8cVfCrAeBFDRaeH7CdNb2uL",
  "key10": "N9muacPKZCPkCAxYvU14kob1QA1rvHQuRmKUYA6PBUqtAb53RyxAUCqqUiPbCyAdxpYaRuiwtXuiYkwMU13GchN",
  "key11": "4HLjpBpYEgSUy41A4XpvA95pRpKwegZDCXk6StyBeLj5xDsMrRNMJNRPe9w1GN3poMF2pt1KtZAPjPQsi6PD4cWg",
  "key12": "4g6M3xTVW8FSvjqD9WFte2KkuftFdEgfrB6GfoohBJQWT76XKVU6Dd1NW7vzqoE9pQ7od5cT8QYFu64JVB9roEAt",
  "key13": "2iBRNgnBCMpZQeyu4ercoHCsXZCJi9mucaoRCYk1GYGKkACHgfmuZHWX5skDJ8vQ7g9WmXvTgP6Q1YAzFeAqeMak",
  "key14": "357x4EHBPZ5xfw4qatAfwRZ4Qm8v4PKCnDVt12YgYfj1TsjNQtPXy2FzC2VDmXEkGvjRFFz4f3jaLEHY697KqT9a",
  "key15": "3RWe9TWs94LMD4RSoweZHBDkxsbaFyxyRCPtYWNB62tbipDLpWTNbsN7im9Dxk4DuFZKRScmZFwrC5XghSRwm9d5",
  "key16": "QCNBp8qMMofwPBQBS7cv8NiHVnpZbb7wkRhTCYhAMnGVWY9PS7yfECoFb3P4DyjNGNx1mfZ3G4sPCKk6LrJu219",
  "key17": "45k8A8UdPQPgsLPQg3tBVDbeJvFHGuFgi1mgGmYfLh9vchi921W9STJwswjEGpFW3pS75wKWRrsPx4SBVbUQjF2u",
  "key18": "2SgQuBqZe9hNR2uqJ2uz4cHsBFeTMrscFt6x1U1GzYEPXLFsXSw8MWFgQtM3vJsoe5TYf8n8M5Kdd1vhbKJ9kkbB",
  "key19": "4JurqzmioChWxh9xPDBNYzbr3314ZjM2KLWg6jFGjBqeYaT8hPj4aEnxW9Tyi6iwdtT1QXBVyG9xLLKKAvpa1Xjj",
  "key20": "216xRbRPUuutmc6f21tLVBoENbpJpZtFMghiJSWZJF6CtatFUbg74ctmhUohg6rtWYv7f5Xz9myactJD3wqu2wGW",
  "key21": "42Td6YYRmJtMGiqMj19RkX1a67pU64bVMZB2RykdZchNXxW586kf9qXUAEeMacMsydseNw4cxw2sM55Aegncay2C",
  "key22": "2twtDWKpjc4NGL3YznkVVnJ1tjsSXJcUTQQxUgwavuNpTHNunVuL5EqNck56GYCsNVuvC1GgDKiToatQK7qcdqjt",
  "key23": "67SYczk9CYRnB8MBaeL8EDZ6pEeR8m44vAK8f47jUf9463ThDPWSe5HoVMfypi7YsYxtMwTu4Vtf6JQ9ZxEjXcGU",
  "key24": "61zZacdbcweMWhknHv8Q3GuhqZeK4A4UgnWxQssrGEnfFAU4wD2pbyXQCUFcD6GxMYEVg3XGDEuHkosdjAiv65yh",
  "key25": "4CsD4dwuwAbWUoiLNVgav6nf1F7ihS3t6Jmn4iyo2cJT8GEc3jCmXg25X4cL1YYeCDLECWB7qBuoDbMfb3UNMw7V",
  "key26": "4y2YanL3xvNFyYXtLifCVCjgeoa2asjvcDTiumJhXqCJ3K1exZ6Gz2EmBJUscW4dRFLkSaj2QLvRkCuBFmvx6yKZ",
  "key27": "2S8KLGoFF3HETgsANKVeQDVeUqFwmJjiYpdiY3y6w7pik22Bz1Q3AqxxZc6ywdoVNSPYvfd7hvHyTshsDDiJRE54",
  "key28": "4d532XPAmoCaxwqGjhzU3eb7nkzCpn943ZE4nTB4McrVEChQRJXh1PDKEgKrAoVYAyDGMa92bCaFTTr8bwkRm4F9",
  "key29": "3xU7pWZH7mxbajMfY9EqBv4WMfbVmp6LoYh7gSFg3uo4T6EhFW9EhUuDw4b4nLPwmVeR3yDmACGp9QZg5SjNyDLq",
  "key30": "5pLgTrB9JaPcBxwiA4DxfxjBXA1UqHwgh561bHxaLPRoYei2XAH3WkJvWghDbXxRBtEvNH7Djd5zH1e2MuNms79L",
  "key31": "5xZht6ARP9dWaXK8ma9o3GHP9tVVFzxCJuqCgbpNWn9nqfscwFpnzxYkhcnY3svzT6wBLEbxXAhSpziAntKZgm1V",
  "key32": "5oe89F3xSywauV1uqMPD3179BcXuoAsdzBWwyaYKDsF2vHPH4tFQEaiRvTwFTMZG6R5LMr6nK5c3JMyHZzLEYgcH",
  "key33": "MThh5EkASPKH2SXGz5pdWU4S3YwR9PXtG7SJ979pfhZZAUwpA3XDoKQ7UZygfrc8h7FCiVwoGcpTf3gzLE9fXub",
  "key34": "4TuYYucgDpkBpK4VoZ5j9nfPB9HpL4FA5z25qJtr7cHQCMFaYFQQRoVp6EVz7cDZkgYndPNAAx4mCq4mFrVZdpnf",
  "key35": "dBYwwRczFuZSarLToPgM8dzANxxwobxHCBcYwUBWUpSZyB4s8Z5BAy9tBfARcZxSwX7e8btZGtmq5jgRKAviCg9",
  "key36": "4KPz5km8N3LgCy1dGnQRi2J3m4jSHu7bFTCT15yx3whkAto6KVVNpiWEiB4j2epRPxdFdC7PuNCMa7hEvdCDPjmt",
  "key37": "5RoEBWFC2Z3X6EfkWijgRMiWpmMJiMJ8k8NVfdaKrBpAAsGTRqTyX1QDcVZM4Pp8xgtC8Z1LUg4AyEdMLgnD3uqa",
  "key38": "4Rt8PvDR7YuxbKXGT8Nyw9JXUyrhrzCz6pTBMzcggAzCvKEy4SpvbYJ57Y2sszZeRPTdJR1ph7wYy65mto4zQwzg",
  "key39": "4uzQPSiNJcgjneXJVfJvD1vyBwncuh2b6iSsdGoQqoUVrLAYjTnyqRSaZCkthd8C7CK9T9sPYCS2oPCHWYCdUgw3",
  "key40": "sUEQpLTjG9My6GUPyx6kaQKJhLqbaKLuycapt46qurEDuq1DG9fsfEvKtM5FpA4n7xPw8Q2MkGBdR9BD78txnV5",
  "key41": "MJBz5hnZnpdu4fJxXAZztG7c8xWBeioogRagDfWmRJc2n4Znf96x3vG4rasgPchgRrkrRRvXuwWzaJSrGvfBFLm",
  "key42": "pz932Nj1YrEJy5ojw6suaCTnwRfJ7smTFaC3KEmJnKpv5Ki4um4ss1HZQ93WdpB3SATbfnmtrnuKUWjssepdLBW",
  "key43": "2G77PMPTFdiJZnNJeSf2z6ZVxsV2W7Fgk1YZujqUj1iMmfCKyvsG6X2EXUDrPR2vx4eETudCxC6WcCBJfwyrpNb3",
  "key44": "5KogumqvCMuv3Fieqd22M9RSek6zd1PWrBZV6amhPLqw5oHPFxFUJDktnP2nZJwFkQsxLqtxSpuh2GeLG1PMndBB",
  "key45": "28oexQeEWLht2MzbGBoT5bo2ABWNoWjZvN3Z5AaNX16eaNLEP7GihXMfMUp1SjkVhaqbPgPhpqstFWrZjtLPpmMo"
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
