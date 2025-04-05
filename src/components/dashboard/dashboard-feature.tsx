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
    "5JGJQ7HSNw5DnU1kfKTEQturY1t5dhUM6ujoaUb4LtgqUUbG4EYceQrTSQ45MSS7Ff8mFui13ijjvByevYDDXLeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUtMo9Fc95EKdxRWWJiWMKPWc9uUtQxEqWNpy2VpLfUpLr3SYDHENLJGtAexaU2r9BKPGy2AJkvDkE5hPQGTzMi",
  "key1": "H3PX33FQdND8NDY1WQoUkfmCz7yps38hnfCgbsozRHJ3ZzV7KrMQKRMErSe3LWRSEHpq5xVBMj5VfQ2bJgfvhpr",
  "key2": "2McDGuq669V8mCnyfjocM5KdZSoQTEcD3iApibnsUVw3PToZ5ohGyvxnGz2fFC1XYogSNdU4f2eWtycpxdqtPBc1",
  "key3": "2qjrbvK765uKwypTj2hua1swzGL7Mp88cLYGSbojNMdGfjbPoCd3tXdLKHDvmWimWeZgsGdR1QdCxBYun5tV5XAf",
  "key4": "4dfwgbUJ2smAPvuKuK4XWarG1tP6QX3jQgvkqnLvGbF9MU472MU4JmXNbGQYWJerJKX7ZUWVKsAQvty5N9RtTW99",
  "key5": "7zRE4fcRjoyDunAs8mvcCs5R4D4tS1ihCxbNmvDwetRJrUXLxbCMWBUjz3YoiAw68sZgcusD8LBMn52CmHdCkuq",
  "key6": "3pMDKc2dzwzcdJf6W6gMrMtmiHmtb4aEdmbHwmGHdPE9cHGMoRR3krxRrAuVFdrDHarZiicUMonN3aqpr1gemfxe",
  "key7": "3HABqr752BDbXGMtPmUFUnfTSXNqA7A23jmCPV9ckvC6qdnrgBxVRjasjvfmpwLGeB93eVqdeHzWRxRXZP7RLqLR",
  "key8": "299TLZWzeikSeg2Uswha27bxjTwhhG6u4sZDvudzWQPKZyAewn7K5vDKjnC1PFdX5skjzqACwc7WdSN4VqVeq2tc",
  "key9": "5HTe6PNjKDaY4appHRpZEs4zuTtMHdNGUqLMSuw2CeSzDnunugHkYM2wBoVVogqjhh8P7QudBmmVNX1GGQzPSRZ3",
  "key10": "2UPd6Q8Und9MqmU3RsMinpazWsSyHuqHvDGPGC4Jj7soenA2DxJ9Nwdvq9BunbShLsWXPAV2jjQjF6etuwJzem12",
  "key11": "31yTXfioh4zN2etgvnRv5TjTbAUViEp31YLyKdpsMS4Lq8XGkuD24sC1L9ecQ77uK5PErUt5A4kKFDopWLLny9vr",
  "key12": "4pDeBUDJtYqsE78wdLP9ZUVfqeac3pbxECTcVyPebuy27JVX4y8zhW2tDraEHmdoMx1w7fQcwPfvdVWyiD2NfNTw",
  "key13": "nRux3GEzH7sEtXZeixeQjQgyeWUWWqDYLnkwYNVtmGxEqGtV8rAVKSQDDRpVuQY54FseTr3vh4qVRKx9UjKD4rQ",
  "key14": "5hxPCx6mou4ocyaWuu5e8uD2EyKwCyt2WTGSdwa38KorDvYVvDMx7VDB6jmNJCTwbUjqimLqwYsRgH8PBaTtjLzv",
  "key15": "5dWq9zr7B5sJj7sgjkjv9mA9oozkuJHK3JGjSjtjtbxPYCaJQKLk2F5wDVxETHuX5zBoy4fTd1k48y8AoN2hDUxn",
  "key16": "3Y6VbMZNxnoMJJ78yt5pwwoVKR9BA7CAJERhoxZSHrMNBb2SKMsmcACrFxCxKTo1cdhU7yY2VU4LZynMM195r9NU",
  "key17": "4pjHF8YG774gpAgr3cr6xHNVHgoCHx4hq5rDABED8xKP3ABVapVCgBF6RgNZfCmFHBrLHtYuwnnMUxyvucQsA3WD",
  "key18": "5L126JvcRjF16v63GEJ4fA7NDVfTk9bymFH9BeCvF5TsB2NGtpwssQWpUPXqciaVTyGPKSuiWHiZS8uvpNL4bDnb",
  "key19": "tDfo7Rb83pV9sVJ1jAsAp9Bn5HpfqpKwGxnMvXa3tKfzHxEDzBCMPyD8YP13Pxjn8yxvQhbsDXuWuvbrPLv5aDc",
  "key20": "63fm9PvhH4XmFhNaCvM9d9xPcy3QdrA28nmpmwFHkNvoFZC2tWHAgzQMsmSCDqjPc3tyroiMppgFhR9BaBqCCK7U",
  "key21": "Try142oTvHDiRRkUP1qiYjG7QBWpkcXJ86zqbBWAJ2FfDtc9TvuioCwYSq4RE6veLdDqYHu8WDwZLi9ejq3czQd",
  "key22": "22vjQDcaBBdV5vWkottiwNNYSoHjd7xPN5McjNpwTSKH44zX4jmBGqfKrvX7zGSk9UbqeBreaiKMT1aRoncxmxLx",
  "key23": "4VJt2BNZ5DdrimjnpP1jriyy1Ta8DMziF8AX2NPWtz6wUmAgqeHs4ydpdx5TsV2wWYJiGBcstMPGvYPd2yPd8GzA",
  "key24": "4dNe8WD35bNkp2erPoXfGFqi4APyXZLMW4Ru7cnjqeU6Ejj9dgFaWb8vmbvb2uMvK1jL5b6kD4QRJMpg1b25TczL",
  "key25": "5zgzrc4X2Ly2BQxdCyHK3yTaXPzCe5g63e8WNemArL9cB9Tf9hcmoSNN7FZHMEKRbkp1WcnCa7BryuMUDpwYEzk7",
  "key26": "UmTJuub7f95Bxvn543nR7YPRXx9o1xZvaaoY11m9v2bEeZNgczRxjeqxYRZzDVL6irsWte8QqP5xXJsF3sNoXSA",
  "key27": "2kYRErVg5C4RqZmq4yj2jLQNPnR654oDooCvTjrwuP9jB8mbajfAoLkP9RNex7fCGMGNAz25cqvdB4m3Phqaybso",
  "key28": "4NNVjj2xHXycJgxVh8XanUWeeZeuxEkj68PbZadJ3jCY4nVDNUemuMn4oVT4xMTPoDNj8urSUTbrQGRyDi7fjsdL",
  "key29": "3UqD6QrHmikWB3xyJiJDBp1A1Hfu9sAQprd4GzcXtZre3hSMUs3naRpV3u5fi9zkEiJA5kAbn5WVvYLgBbRQ3gTa",
  "key30": "5AcaBBykgod1HaSCioPLuegfdnRgBFvPyCB9Y1McpLRpWFMPbbDH7tJYnR99kF5DXRJmV8qvAkVrun1HubuJkBfY",
  "key31": "jgVcrxypLtxEMGBDq6vJHZpMu2Nkqvx3RU1NerP41qjMAPZ9QMo2ziPiukJ675LhtjUNwCnfNRnMXpWZ6NxuPUG",
  "key32": "2eoG1UbXP7HZoLXxinUwASevk3irEPK9bdLAXPX3WdnQxB9pqF2syJzXX4Xd23Ts5iiPfAqWx6ftgmdF65oHeRLR",
  "key33": "4Q2ew7D29iBNxP6gNq9Y41v123s4ZZaLYXmBL4h2dcugKnyT4cwsSruUvmxdW3zb6xSSg3RyDadHD5DBq6btoqfT",
  "key34": "5ivwYKgmvLZJvsGdwX2qWiT5rmpZd3ZtCTHetJeEFyg1AR4nNh1UoSxeNgcQcSUBzV2QQNCD2pXE8LKh4jtnHuzU",
  "key35": "2q99EYGd5TfFZSdUMRUYZ2Jdx2FztzejCMbPametaNEJTMwXn89y6kPcC59BKJUYSN8nKTqQAJKEpCgAhaME3y5K",
  "key36": "4Ag3xuVUDsq58jcUp1gXBVSTMYXAGLNLpzkLBAJms26JthCvD55V9xJfXQvENTAAU8u7QAzK5j3JYBe5BYjXrcXM",
  "key37": "2FkJRz2KVW3WCWaVYhzuagMdaWFsQkk5oi9oFxjnKv8vRNhq9iX3aai8PqntWvTnGrjzeM8xPcRFgw2T2WxC4tUW",
  "key38": "SGdED3urwe7SvtmNKQonva58yXPrxoBG2VXuwLbsQF3bAcSsoTqdHMCkt2yqcdS419oaxtheyk4HWWquors8cVM",
  "key39": "4eMdG18pD3Hj6zcqKbzbKhsdgBUtezYqiPj3YL3bEsxCQAQdfge4ZXXJhzTdhZkzYTpVbvKNcokfTuDtxNEJuF5w",
  "key40": "3b3bNMqPctY59yXBsfjdzUR1VCP21itha4AkLAms3EA293t1SPmGUtuNg9NjNAHjv97j9NmVemFPMvu4Jht8DG98",
  "key41": "2UszkqgJ5yWvAKaAaNceQytoHf4wQUxiXeAU5zRDGvtpJceoTFXtwYnxUx4MhJA62Z6oC3Hiw4wUT7yaBrQMaBc9",
  "key42": "3uPXkmfMwGuMRsStR45uJK4NjZNpQZDKwQysA2dadhhcNGDvaxPj3JLtKx4AuC4dcr7RgWzwFtvhWScE5FG4Y5kY"
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
