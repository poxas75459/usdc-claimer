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
    "4Q7KdMvDk4Prer6iik37B8YJ56NhAM3jiCmb7NqQj1rVcGFyU5J2caFCzuWzbgEzRKZ3AHxHJJXBqLYcV7s94Qfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "emnHXBfhu4JSiq96NQfNapTFUZL8F7JVh6Ddn4oW6VHkuxKYpppjdVwE9zm1xeoib3Dk7Eu5DFKbQBgQY99ZhXX",
  "key1": "4ur2Ay4YXDxwrYnYkpd2By9p2o8hPhNNcwYFCbgzgxc49tbp1GMaK29KqGjVYTDGo5Jf3oRWFYnLsw1LGWs3SiTd",
  "key2": "5kcbWuNRUm28pY4RKY8ND8Ra3s3XbBkeGhssAcGLVBiXwSJBYqVUosiUCfc11wTY9wAjj72DATDCjFA6Hsv5NEPw",
  "key3": "hmsZbuxLoUdRD5sqANP2ix4HfSz99dhNUCA4m79Nzgx6k5VKKc8RpJiL2JcdirP4rTRzChCeC85EZQ9NHZHpCpQ",
  "key4": "48KmSPdjanVFq7M8dixLz9Wwwc1oSzinmQ76aCXcknT9di1St4iszUu4ZEckEdLw842BUqFZsg2KNFwb8Q7ZAF5q",
  "key5": "2hKcJPrN5QQoiipykzFQNNYNstrxGJxMVHNMiQAKhw1EU9sC51EHLra1dLoTxg4ESYuAaSy2kLPzRm53ugQkg8hb",
  "key6": "2VFPPJaKwHDCvGGBaWanxQMqeQXJAavVJg42zx6yaHKjD5vyRD6Lr6WnrwH4YmFzNY5pZxrPLVswRT7dtWLT5WpR",
  "key7": "4wBFx9kG2zXQxBGLMzzx3jwp6t7SPpJeG6M5iJNYpsLqLjHmWhWXcSdJPhqw6BBZiWWwzdmtJmQ6qkcEoEx2PXiB",
  "key8": "2zbYkA4wzB2WeJq7kXdn6z4KppbcGE5jJPSsKxYjXGK5UHBrgyLw99Ztiw7g8mpEwiPPQMkzf7CEaBR95qDiY1n7",
  "key9": "4F9xzX5NQ6cbMXg27gevREzfsTWy9vxvWYwdjjQeQfNDMy1YGGtMqsnTD4yjNCBxChBfBY8H9qM4DDTNbhAb12SN",
  "key10": "5vGmtGqRBw19wB2HRrSzKdi6MngdFNxHeCfy7JnsNBxaFJChLXYRtJLGNFX2aXpTx9V7TKRm3bqJMvk3wounRk4G",
  "key11": "5zb55czf4whSrT5pFjVFh7TorE9DCYhXsMskTYNzy7JxqLSzLvGzA31tXrLYVNNVtVEe61YubEvEpKBun9aFGpPf",
  "key12": "4t4PNNX7mpB6oQ8iEuPXCsxPUXVMsPpmtEAZBMysxr9Z8HNxaJtFoVHsE2J1Qy6Q3WMa8dJzDN7ghN6YwapkgwRJ",
  "key13": "SLz3Gm2nikn8zrCpJnXA1rEJxWyM23Fh9DQBe8cpRAaWicw7MdaebaJLNiHo1ErcULqcvHE8fcMHuZPMM8FKgUm",
  "key14": "4uU6dAnsSXAxMLfwHecGnTEHNC2Cg2KunhwU8syAvWRd6qQ14RhCZ1qgEtV7EVEdeCgoCd3QGy3gnycsGjPzVwXi",
  "key15": "yYAeGS8MxzRyKBoZhZfth6gGGrNkvhBNdPALVC2RuFKt6VMaKQTEn4D5RJQ5gzM5ZK7m9TenosNj1drBCUA9cwB",
  "key16": "64Nt5PCZ5L2aDcaBpiaAk7Y6Hwtb5pmEELvHs4wh2Kq6z5CKhF7ZJhFRAH1M5JGCGLLCbCRL2ik9zYymDu8eR75f",
  "key17": "2Ucso15J8Do21ECfpRFJ13gM1v6izioeQVL3KX2ADanEDqo38p3erPR8cVgZHaWL7ZTjNVoxgJzuWYEHuuX9VqQL",
  "key18": "4GAGfeR7y5v27WibfaptLKEGPZYNzV39MkGzGsnqbMAmK1joz2HfvNaJRsL9FSxRHCMJzc66TLEnYHNXdMDQvBty",
  "key19": "43rdWDL6JHwnktPCoh7xd5KyoBswvvsx6oaHoGMVbkbzLXMSkpeegNZEXSwHCwQHJgsMJNHJyDDULmxyWK52qwTW",
  "key20": "44gGAw1KgfUFQCGeKePKjjTUR5DJ7k4hc5pqh8Qr63911Rg4Rj6kUJZw8WWtwSJmnThjnJzRBad2SNLTeAn4z6ag",
  "key21": "5bwDVtY1CFFaK8CYMWqqs8HKL3ztRA2oEmMYcXKSQRt8tEYzoXB8hyitzxFfV3ErPoc5HMjA4AdDhXza6Db918Ty",
  "key22": "39ytVJcMAyVJohdMpSEf8krTxWSDFSMJvRnqzYofeBAvrenjzoh22Qbf5xVu3uSTAeWZHRYxkeCj7CAgPrQkhk9y",
  "key23": "fywq85UUiEsLdHgKxPtMZvnrfP8tpTjdU4UWwgxojHTTg5gbUpBuTzoAsYtSZmYQVVtSHDNab88FQ7QqWcTr7tx",
  "key24": "3rV5atv71yw9P3GzhzAEvPvBb7LE5gcGVV17s426h5iXMJWayQp7vD98h77CqvYLL1S1S6p3CEEX87SAPZVziXhW",
  "key25": "3AkZx6E32YoFdScc1xB7yQYnPEk3NmTDsPW3KnUgR7g9gh5vFSZycP5BNugK6H17b2cZPawWDrLzFTBDLrNewt3s",
  "key26": "3e7MW4q8e8G26LCdZvG4EZCCjYnFjca9Y6kdKeBkhzcTWcrA6jkwhG8UCPt5DqmALB9PCN4ZcTUwyKst9DSiqFj6",
  "key27": "5zNuLMzBxfVrMrTKR5bHWPn72qqj37yMVsaGNzrSpYRp2JLMd23F7QRBGMXKgFPfZzQUU5thGv4DqeGAXGYNJGM9",
  "key28": "29AKkcrHUvde3kMwHo6kgmSkMzSVGBxBxNgbD2yDU2dch2g8mCEvF4J1ZPwno2FakHKWEizJK1NWf25E9A2SNorf",
  "key29": "5FDwsSoYoE1mK8Yun2Wga1Ze33EuNSno8dA8bbSWtVVZvnQv6e14YKs4gTGtSxUhSbwAHRW8oBpQHT3q4Erw8H4L",
  "key30": "2fkTUwMDvzr2vaJxS87SxAJCgmsa5G8pfMcPxWqdsPZjLcBiRUvZehphL4cQt3yBcJx2AeyHwaNNBuSauiwaB2E8",
  "key31": "jCPQZ3DZWwzHcgynJD1iHbxX7yh5Tg3FJLUVHYZRY7SoFa4U8X3dFEFBvbTCKub6YiLZRHoRCSriXZeWFNEfopA",
  "key32": "4Swo2nK6WcQxGvm22jnNqGExMTuwPuGrswvUXPnVAc8Pq6tjWGYkjuwEPJVZNyn4jtEEpgVkbDPYCCKTM9V8goge",
  "key33": "2CmmvQGc8ELYKk5tzzgKP4p2UrPSbArZTeZYePRBMvxkBwMiPiyVNvhfoiGznt6PTfcRW1y1HT7dTVXcasrfscEs",
  "key34": "3ke4FXNQujqVheY5RaHoy5MkJKvAKsr6Zpg8XsAifPgMfKWY6LRHZPRua7gFwQsPUwusDsUzLbpULZhfzQVoBj2f"
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
