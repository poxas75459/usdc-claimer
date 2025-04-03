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
    "4VcosU7tZEhm5BjAgxNq5HsvDm4uuuMXfY4SJ64PFBwa1a6vAaKukkDJAQjPHoeSBDHvCKuLMhk7TG59AfcZ6LNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfZ7wGQN6DQqakHAJaHKfftbeM4YoWdvAnFy2Ynymzyr42fwM4wtieM2Vg8awVp1ZRx1AEwdNiyZzBAwsTdtg25",
  "key1": "4B3ARdpVGTZy5DWUHyUMUXDkhH5dGqv2gWo6LSoRvuthC919iij7Q2zTFHPMgFMw6rhRYrK7awHVcZaAGLTEHG9",
  "key2": "4Yzb32CsP1xDDGLAJc9p8zNkzxbVjHUxikEv5okrmoyff9cbLFA9CdD8xswf98ST6RHiCyU1sDjPjAdfirbMxawT",
  "key3": "66ufbWzhVr4Ug22wqvztdZB3adeBEm7MGh4cFNrFoxJZXayoNkDaTRbt47m4xUSWiG9EWspi2iVk89ofi7ShDzUe",
  "key4": "5kDmgGC9paRF7DvzVwt2UrQnAANqxiLAZkuGe6ppYv3Hj79zx6mKkkGwn7UmdWctnpdJ12w5iRyvETnQ4ksNXDRk",
  "key5": "zZn184uTngwF55mWEf1sqHz9NDFi2u8eGztnyVUq3HJZfaE6uoDaFxzYKi6bxq4rEPTM8Cmt5FCeEeeC8ErL3hB",
  "key6": "5fab2NMgoziQPHeyPVrteezrqaPmvw6N6Zjg1yhHzraQZaxzxXGaSFtAotZNrndAy1DG1G5mg8DRL7KH8mFLmEyQ",
  "key7": "c2VFBZRr2eb7nSHd2YoVB1fB9QYMyvAisSeGy3xSqm9E5sjUdPjhy87s66R1JwN3EytnAew4GYmF9GKpGtYrreK",
  "key8": "3Do59yEgY51NG7TXNzv3dGSFexryny8j2yAxoTbtyR2LCkMA9W9kXizPUuhbyrLgq5C9qNu1sRBeBwfgxf1sjDiX",
  "key9": "bVmpsoswVfb3wwTCvPi9PNNz7n8WKoCdNjC2STN4Xq6KadnWrQirhFZyZdMvJNR83NarzwHc1XvSberGmZexg4q",
  "key10": "RDpYJMJSAjHtDEgWary1BM1SGMpSDWQYpxreh3VfZNvmVCkAZg71UHrfxfsDMbcngEadSPevv8qVEY1B3jUn5xS",
  "key11": "61cr6s4W41QiXv4HW5UJBdEpdpa1RERskooL635a2KvTV2g12qLdTmqFr1hhthkKFWajCrkZibo7G9S8bZrwWNaF",
  "key12": "RLCftdaU27RQfSuQYwAXEiJghveaigwho8HtUSSUiSARKAueSJf126rUHqSjwDMQks7Dz8FRN5T5LqmBquLHW6F",
  "key13": "4qh3AtgporMTUkSQY3NjxpHmdn3zfKC98GKam4ewccaFKisHKRA1A6P3PZiiRHNQsofuyCKDDkeCS9zZYiMJWb4T",
  "key14": "5NeHfM4P15vKsLzXRocXAzLM7MgQUfvMEQNj6Afc6vjLppRPyuJiLtjUmfkS9Hdxnn3SLPJ9TV1R3x4qoWsfU1Zp",
  "key15": "ymb2WQtrMcfsbhfB6kkxVfLiG5Gp7kS8GJn3YGSgV3v3aa5129A9L7ua9JHGPZM3KE7jNazbgj1aWZPUsFn8Xae",
  "key16": "4M9GLs8dpnJT3H71d6gBesNG4rGbTmSN6NA9Mc9VvFg7Cvj8Sh6GNinB2NW2a2bc2qeA4qT3zsBWw9qhezdYcNNu",
  "key17": "2yJfn8J6XztBEJ6MVzyn3QekHRjN62aqaaU48DnEi2aPvmhe8QM9Fe1MBgx2qkhgUE6fbc3nCoWCQBQb7b4gcGdf",
  "key18": "RcVBiFAkEW1tEvFvDntUq3pWZvPAwmvJyddYnLcyh89VT1NXoc6k4ZJmdJdRgxioUUjhFEVsHPPsK74j7XpqQHL",
  "key19": "2WFseU7RQW2o8AvQD3DmEPDYCKm6zn9K1vEK7XaNfpnLjgBqEb6qFLfpKHn8JxuHCdKCFSZ5fbKJ1Lhk49ocRUUX",
  "key20": "2dXURP7vJ1fMqXhqcB4Ch7dHsmULmczPYcLyLmNhCV6yQ2h53y8Exj9tgfG4SQp5CdLD6dXwpDLshSPvpSzhDNQD",
  "key21": "4PENWVSWonrowwygwpaCvBgEy25huuP3Ct4HST2yVpKqBrfbUXrqDA15WxSZVpTQ7oCoeBAXPjJYstzP4eP3QpNN",
  "key22": "63d7RhH78qVMVLWuY57vKv11AknPY9voYQ9vN2kygnu7i8Pj85Qg5sMRAMdJFymMvE9kNMHUwKf5Ls56TKLkJAhb",
  "key23": "4kH97apSmHjwApjbVF63KEEWN38beKXBVXDVu6c59Mww9bjxksEruvbQ8WSaxUkhcy6deqv1oP7fNRQeyJbiwepS",
  "key24": "4yMUhnAtg1ac9WE5qKsaDLkHJEDWonVzz6TzCQjCmbNrbrDUxNtodHN9sYc2F3zzAbFi8ay2e7fxT66nZ7nAo3oz",
  "key25": "31PPyXkoJNEyfovB3nHoZ1ZGRc4mwzpqAyLXBg5K4EGjANUq7o3AXDuU8AYdqEdHQs8KHp7XWwEw8r82KNaWt1cL",
  "key26": "5REJqjuuuWaesNsC5x5mKANyosyDWjgNz7cotjXXib1XYBZNi89AvEqHWhSJhpsfZ5Kc2ySwzmyvLgdmMCZLEA8D",
  "key27": "3fi2mjJh9ve3zDrcWAWbJpwwQjscgmBDhJMPUE8VhYnhesGnsX8kyafm8z9nFtZ2qRtTbucojf4h6b6dn64nBMVG",
  "key28": "5EGrASBkPmK2zKm28gGJNykNE5JNoiikyUKUM2MUHa9wC2F8FWXdfd9sQES9dRF71iufTfgFM2sXmt2eAS8mKhu2",
  "key29": "jEar4SZknE99zP4yNqoxGUuoBGpDRsEGj7M7Egu1rAhLr4SCBZy1bUWF8RowtVRvxMgd38Xn6CUb2x2nMHwjEmv",
  "key30": "4bbMPs2rGBnRVnqRJcvASkqBXhYL2xqJHA55z75odpQpxPhj1VoyNBtjqdhL5su2JbStUFHaFwjaJXECv3jRRrre",
  "key31": "5QXYjcsSgSvbXFRk2XC1vEh1s8xUBrAbNYzK1iVukMRYWvwra7aEkYXGjXE2yRGCqC4knXg6HdMFfHPugoLArooh",
  "key32": "3HqWXZzPEPCLntw1cDCXYQZcPoxdKfUPwK1J7dWXNefQcvDsAczRFsT8XeA84HTfmzMg3E9M14LLTeyH9mmU4789",
  "key33": "En6n4yuQcZsEnFLLyDrvvZA3uBCi9eoatMB8uADGWDya64D5wS6bTDJBZzCwahgfGFRCV53Uu8FXAb5SXJ194B9",
  "key34": "5n9WzJtjNEQic8Lgnzq5yToGKPUJMBJ1Yxta1nbHRhRTKRMtnR87KvBytdgGKZqoZCBw2LaCk8B59ByAUhx7rHg6",
  "key35": "4ezCVautbNwg7Hqc56n4ZpUCXZNKtb4smDFaErWorGhmzE1F3RKVJsSFLz5QXbad1ssRSYBPSw5eaH3RVLxX2emX",
  "key36": "hCzANBjgHzvhrtcHaH5ySmtyNNegvNYm5FJDHoDaSssn2PCQvPgZB1CuPKNawin4fcZwYysJH5s3XxvttsmkB8Q",
  "key37": "3Vp18QCgdviU5ecaRPe2XPrbbDHNzqhTchPiRoSyGfRf9aiRtgbHjxWB6wAegzXYteFoDqQeTrb5ztxmrYWHoaDK",
  "key38": "2Si5SVTo9Qr8suRbr8KtimBvvGn6gkYn71d2rUsRgbYShKmA2D9k2uacyrw7Bra4r8dzH6jRPfzUvxzhk9k4SkZL",
  "key39": "4arNX5u1dWcC4QusS2QwsSBenBiHWr9iVEEgTB3tQvoBrDPzCz2AmFG4XZHwQWs4BVyzKiWGmYdeej2ok9ijSyft",
  "key40": "4YYoUW99DAEYpRUicJJHaAEdWMWwFZuEY24ufnyU5E5tUUu3ykZEHD7PdL2FAH6aAnJv51odfaqK4RXofEZtnS18",
  "key41": "3WKFa1FpJ1dd6iMQohQRLSokmND57KSAKH2NsWBV9Py3fW9AfskW5foXQjcSV3x4QcdsuHdf1CBabFhBXWSikFik",
  "key42": "ZWDpVEN7Yh3U6D1uyNyo5sjyGp2dzNQvrghzh7ZbBwxoZ6svbKs72f9zbP8RJY3iLhxf3iXBtgDp2jorLPEwg15",
  "key43": "6Js5sVMRkL8oMStudYSnjbTViYJEQy3nByrLJZqVs6VjBNVZ21mPdVPAqvPoWzguqSxaqJfMmKgVaqDRkhRwAoo",
  "key44": "Z8rU1DwyWf5FLQfPd72kESGXVCHNxCVamcW2wxWMz7DHtjBPgZm6qJDhi8K4RQ1DXVpoKtFDuyujD5bG8nY4uPg",
  "key45": "xEEB3e1WD8GchAEzWkYR8FzaL5ZZ7nMHAfCJPorrkwB8FRGVnj9M118HCgRGoZF6kNM6zzBqa55MZ2QKBYTkyHc",
  "key46": "5gws8gBTmXMb3dTq8uCdfStoPferu8hXbXxu4eY7bSpvVJnpHT128mPnbUwiHUSkbSJTCn79kzsaFNTuEPoaCERY",
  "key47": "BxAav8BQAecUJjFCugy9aZDwfJ3uEbkBMFhWNgEm97uBg5i5Ai2r1uwmvPDPEhd51hHT7mUPrYEhDwYixeWS6G4",
  "key48": "3Buonch7aT4JM4uJKAqmPYLKq4W8zFXmt29omqwYg8gRFVqaCGFzfqREJXkXhvZH464MxjUhDaZ4s2NzVis52UEF",
  "key49": "3dHkBGadj78FHtebtjVKxAq4uYUZQ255DWd2wgNFkTS6975Yyfq61Pcf3A6Rfqzee7nCiZrzY5ZFboqrd1scxzWU"
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
