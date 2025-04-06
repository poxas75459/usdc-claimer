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
    "5zBjXVBSDNY27HGtUrWpi19i9GND9QAbaPZ8NFCErgy23teGW1ucUJ8bNK2vRU4jBJ8mkpsax4nRgDyyq3aYoQEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H541hXycoZGnP9v3R5ppXCzbmfZSq6gDk9gC9aUr58LpnmcHpZC2qREiWukPJMFNJumJGEoiKWA6q6y3fUZ1omB",
  "key1": "4VAKLdANPupa7GwPFXXLTtKWyQxuBuxhxkgBrGzeVZ3qpqHk3E58xNNgmnRQrewyuyV8P72siao6LHDeKhdwZpzT",
  "key2": "5KhvDc7VDVCwqPENizuXCfwywAz1Fg5AdmH9A3eMVeyeqSgBR1qG5LovHhooRgEv2YGetmExK6MkQ8oXH9ZUSsr",
  "key3": "5apujux7SKCSyoDLDNdpgt4TNKHVZnVQNDF1WwZvaBtdHYiHYKxE9T8ANvpDnyPGQ9am6NrDCfZTy7GfTuXiVvFp",
  "key4": "3Ck9NExmHwPG8ShtNQkCMxWvd7hSrwVAdpxraaw8W1YFxSTn3c3YJxux66yVAxqN8Xb3N64rmstemCXthJSw9gtd",
  "key5": "FZpLj95toWasqykqifs66wMo6K3A3AHivvLKP8p2aTbgBnU42AaJxtMCbp5wjemCjPKbA3WKkNra2EQ6cBspTP4",
  "key6": "4RazK9o2u31PRx5p8mWxqvoSTNEj2MTvVXjbd88grk29V9TVeM2CDYApFzHjw7DHHAk3wgqwR43Z3BsT85JPXxug",
  "key7": "3uY11c1Nxa4AGnsPPeG97zf9sgp53i13XHa6UupqK4oaJC4Km9pqQMaPzXpgDf5dJ9J27Si5FiXJ29JvvCeZfgFW",
  "key8": "33g8q4RCUWsAecaRzRK8xL4r7sQCoxy4XNryjqj12DBtKd81kskAa7k6WX5h2tcwgBPABYExyH1Q1sSxtrV4hrt2",
  "key9": "2JfNu4suJxPoaMxSXRKGsXoDWctxKqimdVaYRVRRQsiBFKB9iVc4nuKrKkZK4u9D9q2e5ZxQjiyDz1fWNUJ6iKSb",
  "key10": "3EmLGez6zSfB4EhEbetL4bNGhYcvxn1YXD9vt8ynHCwJAzMmwVVrRnxWhsFDuBbj3zjvzs8cEYgJKwZjWnZvB8fb",
  "key11": "2vSFZum2t5fP1RBj4wvnp2r3hyaGdQKWUDzx8AwK645AdDm6NEXTwnoDD6PvWcbf4JHTkbGm4YAcUkRBVm6gBznF",
  "key12": "2Lxw38dtrJ6bJAH4QMykMdTsA5vnYvScfpfqFmhkQR7wCvuTQVpirBfchqNHaosf6JYbWBEvgDPJRPRkXaoW9ZqK",
  "key13": "3cS23RYP8zH96pufGiPQr8CNKk7wgTb3iLXfu2XHPT2aKDFWjhLtV4an5ttPaSfFxBLZ8MQyKoPyU2GrXuTy215M",
  "key14": "2M2dqCDVHRvzT11wcHHRbN8WVK64iciYZeU8PxZ9ej7Y85qeZHLJd5C33fBCLRkMT5KWGFy2yRcJoypXEHD9xuS5",
  "key15": "3Cj6uXQPvfmauLqCTBEfpJ4r9RXS28P47eGGj4oACzjchxeS1PaXGj75XGaU3nozsgJPN7wbRrZLopibmcri3zjw",
  "key16": "pZwH5CGcmeYhELyYeHy7Wtjt29RGzeSyyuqVCp8T2toTyCfSy55LEPP1J8fxpG8zdd2fckYgxDKEWa7LgCuAiow",
  "key17": "4cwUVrbK1WSWg6vHhed2ziBFBB38qWJW4Y56SDMMatYZPhpKKeYM2SSLTc9tjmkcAwzioBZBPgb9r5ae23fRf7tC",
  "key18": "58T96iJ8BTHsqCp5zbTvArRZ9r46ZEY5vPtX4RyurzP5CNaKfxZmooFfmv8gbu5mZAq5ENM43gJP8WDLcjCZirHz",
  "key19": "5YC5yZ4WDWNqkjAugTvZrycXeW2EZ2vthtto1sSFBMEKsywDGCyQyW3QM5we1b8ZszSBUKspj5tKvwWBSfed2Yyd",
  "key20": "4wCov5YiLK2Hs8yMQvvT3af1aNRP4VeBc4X2E53xHsaudus18uePNQBeQN1AbPoEE5fo2N7a6MLujm3emGNTwo4g",
  "key21": "3FB12a4ZGmVkoiR8nYEhszYnCxoEbL1mJ9Un2ymZA1JitZBT1JSNhi8wqwcmy8cdy5vcKXQ5BjVWcbcsD4eWC8PL",
  "key22": "5htqB4Yc2UTTNRBa4sQ2N1zfErde5Gv2JhZ96kTz5yLLoQQmXJa3XHhfKnqGz4gX5EpLzQi2iDwUFmi9M3A17HCi",
  "key23": "5EmZWR68TZDfxXYEhPpYJg7vedT1M4WU56KYzx14sFYygiVZ9fPAcxUENuyNWsE5XNrBRQen6L4kejsjQTC5gBk4",
  "key24": "2fp1ic1mgLqXj8SZJEM8pTC2FPLnFoNYgev7AYReTQwEgia9LabmH4mPMY9hQQpcrvxgWpvChPp18cQPQuQHtVmR",
  "key25": "YvnoqWrKu3gxHoAxKDaJGgi2RkvvErf6JjwUvM1zoZKcEUTyDM3Xm8fuinuHqyy4i9cxGoAGS8s2zvQpvmrnUce",
  "key26": "35eACLqJ6WGHAATUmdru8rLoCMMMD2BiWMQSz9nHa2XUBhnvfGsVwn34ccoVTYBknmMxBCJhVnKnGufE3juWJyMM",
  "key27": "4jCwyH7pm4Kt2bPovi6vd4cdstWmezGYSFuLCttifaz6bs1pjRX8nGjKh9RRevPREZkW1azuQHc2Ldu48DBjStoT",
  "key28": "3NxnjHpUoUfyf4mad5xCvmsMMMB21dh33zPXribNSsQkaxpgUeYxkrdtZmzxLfNvzXQJvuJXn8GJsk6m411x5eyx",
  "key29": "4JWESPhgKr2muUruJrmuhsu73HKfMqejYjkiAD5HvgArsf5AnZnx6jVnjJkqsJtGpSxtPgCv1y9q4KzNaUg8vtUR",
  "key30": "3i9JiFVMJ4A9sURKtYZqXDPoDn9EUvkJ2v37a2CYeco86JhaR6hHC8gh7yyPCToGALrPzq8PVLpkpVgcGC4LvJnN",
  "key31": "4qggNzUi2CW75YCfqkgCF7SAhYD7dbwhqWN9LtzoMwb8pGvGqxS8RSTvZNxySARphcCTAkDUhutwf7x1TF92gdCf",
  "key32": "ZDMjWLe5jsuZDTyZAQGiN68rDnBSR5xDUuB1L53eh46bZZRrXU4ccmVzATjpwDm2ooQA8xCMiSS9PBvZHWZUSAQ",
  "key33": "51eLXZTGeYSXAUAbeRqNcbUEbLP9zYHo8zbZmXFCFrFpwuxrwornYxRyZE8EYbLJY6XmMN7C3rFT4ygEoyDxzisz",
  "key34": "2fDs8dRUHWaTCc5cVYvWUiUMESGfhCB5PU3xQYqa14ZHYN7d9aBdkVoyLGryohJCTuwpue3tnAor5XWvL4xaCzKL",
  "key35": "2GxTGkDtA9zcQjhzbhgqYuNkL9KwccdcRSTN1vSTkSNfhE6hGHgsommAsa66kNjSQPUFTRtnewZB6ZTSatyGduPh",
  "key36": "2NjjMTgeumT2PHAAbgM2ksas6Fk5MtYnXVq9SyQFzkfm1QF77J6zF51b9cERSFf8ZbTPJmaZMR3KwMV9ZCK6Z9sE",
  "key37": "4fHqbaCdXBAgjm4wN6p2uHxLVEaFLJFfV78xxQsxpBqaHY7ZaCtMU4zJHRANJHsZ6NpDgWnsMX6RWwjgRAzB9nDu",
  "key38": "2SuhiMHuf21unC24FpH6tzQAWtTCL4vNLanhtL5u7FcNk6VwHAjnJUg9GM3CYGhH9xk3D3eCPPxeAVaujSmA5NhQ",
  "key39": "4pRcMxRABRSgSdsfYCjMYB9B4tWYtT6anv8YAye9gprKbnFba6CLeSxMRzrp5eavhp47UNhxtGMf2mjMjDAXXqzV",
  "key40": "62CAYMXKcYrykKuYbVev5DjXMVUbQvLdDgdkHwtTgKdkqxDErZhawxjUDowYp4fdqkBpXjaN4Z6KQwmSvbny9iQJ",
  "key41": "2qY4nFvkWBHP8hR42P8ua16ce9iS68wC6PTkC7ELQX1L2tbJxcXqw897njUruwbuaQeLWvZFbDVaAbpC7iyq6CAk",
  "key42": "58JX2ywQuo1BHzApLDabzQqDqKmfjCA8JdfxLnm9ZcQB9FsUvzFHwicN6fGC25spm7NRg8RuHmKJnqYcs8dJgus1",
  "key43": "3hd4dfJ4FhYCAn9vgNgJUNBc2mrCLCCCmWfhWbimvprrTamWM7vPvczSRZwtt9o8QYnXgB99DXtqa7ngyrpq2EJr",
  "key44": "2uFSC4bSj7CAh3E8n4rZKwaRZTp77XM6xxMo4fF9HvzjHoqPfijGqfLMD8GJrFGqmzj9ebFAyWi6EvpCjCLJFLoq",
  "key45": "4GKige84aYXRMVjKaWMFZmz9o11cwipoXEMwbMcxxCm796x5zKXLGKUquZo9E3M125VWXhxdbpRmesTRA5zyCiKr",
  "key46": "5nbCPigfYyjRa6TZ5t19Cii1hN1j2G8vVgGN11af17VVvJd62WhqTStDVYsB9wyHcJQiRQ8ZZJbTywpN68V12zvW"
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
