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
    "4MZLqWZUv5PpjXNDVBgcvjNp7xCMhSHe5YJyuUH1zDJYSXr65Ep47Su2qvJvFQmVhZ3MHVG1E41BAKnWHeodJMrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brDp4JGcHxfavspUoC7VERAeq82AsRVaNuKoA1iXq7S4FcKxTaYwUG9FtsNbLkURE9sZowY4PUHmSCVuf9H782Z",
  "key1": "4EmFDBNvqYCsT3bTTvj2aJLegKbarDy8PxWqcFgX2ZJQVC2BLQXJ2vvUKzzKYCSYgu4mDvKhXGnDevSD2KT4rsZa",
  "key2": "4n7qyPp3vK3nVDGW2CG9yQNZWo9LixL8PAcJB2rd8RDtme1XtpU8VtfbavLz6PALxASTNuFpLeauP1XRy5gKkHr8",
  "key3": "3KKN2aQSFczMfLYaWY2Cum6F3KQw3xCpzyVVBXqeot2t9ve1iUAGeR7b6NSyuWAuqEUoFmSdH4Hm7R7tRoayXVox",
  "key4": "5ADhhtPyQEWQd9VeQXzGTUTMUAmtPMZbNpL4evE9YuLbZKbEKogg895B8xtKXRZmiHMkTztFKZ7asHj9rfeGEcpr",
  "key5": "5tchEfVpSW6MfepjC76fFvgvbEs98qJ76eo1qbXDvXy6FuLWmiGbr9vsyLsSvNxXpmA32LPnTzUn19YnsaaKYVRu",
  "key6": "4sf89WNNtouG8zsAaV2QCLzDrfzUSLi6YqosbnCFWwjJwNvMjrpZXhSjXekC1gR2kaVPHMkyfzYg7qqCNEYpG53D",
  "key7": "XW8mUwWYAuAkT7exiigiHa9GkBoycpTPvLs3wwspZ5fEs2rCh3AqHUauY9iqFiAUFYoqCykNMRvMgswLQtddVPo",
  "key8": "5szn8EfGpE6REAMxxaQ5uQ6xNmUB3ypQ958EpJi34Rrkw4oKDTu6jbRk2aLxugXh32jyNhE3134BUfJHNZXL7Mcf",
  "key9": "34cncroMKfeTPwGHdjta4SZ9MqTB3BiNPz52q5WUkaQCHTAVwza7emcNgnAMFCVck3WUwKnySq2QPnHXpdVCRcxf",
  "key10": "5gy6DHQrcqk74DNWABJAvNWNPs84xEwwUXE2bjTx6ERubH8trz1ViB3XCrfaSq3cfsRQXqeFd6C43gycD2zvG463",
  "key11": "4rzUREuJRuwSDhtsaFkPF5goJaFCbiFKa68Wnapmbp6veY3anGZeT8ikUPHmfJcb7vFANF8LGbM8PoJR9TruhNmA",
  "key12": "2ZAZAHU9DaN5gWNXVSCC91nyooQ6W3pqyG9ZDGYQ4sPX2thCZBvArrVAfDhSppqZksu7RXcRo5VEkt2mzWVnyELi",
  "key13": "5M9khUXFEo4Ew97iTkEBVGTaEE9QmvdA47ddh8XEPRsp4kDFzmMgqmrACEa95BUF2yKKuNxEvW3768yvVrot6YBD",
  "key14": "3bpaAMEYJKrw51oC5KoTyvkdYmTN3uNX5dbdBzM42tDqK9tHWHcJUYMrXMEB7t9wFejcNrM2ZemhEr7wPs5ZfUqe",
  "key15": "5b1UWx7mNVKHEQBwVuFvgj4qi9kZVxyML7cFARDZes2KWBnx2Jby28wYkLrYrkApCkXPYsaYCYcxcimQcwEWYaKU",
  "key16": "5bYkVn4KwZeVVyDMxD1jdSiK9NCEpVrBSzXhN9ZscjiPXSvKcGLiz8yDcer84gXr8QXFX17q4J5cG2NDzMGzSAwS",
  "key17": "UaNHC8F56Yty4CW4c4XrRyM3h1K1N6N5Pr49oy55aXCP2JghWo79eALQahfW41g3Eq3CihHRCTaBaagDiQYC1Ve",
  "key18": "8jMS5jgLnA6Ad1mntTc5s9MSp217KLpEA7NCRudXJtt6oHCCsUGWph5f9igD9ZLxbKgyES5jtVCttqowHyDDmLW",
  "key19": "4ce8xg1KPhJNvWgfNbNnvE1JxmDQSQfdZBsv3k1QrfpVM8qQT4EYc1UYXnqSS9NZYeudpR7QTASe82wMhKmY11U7",
  "key20": "59Ms1DVG3AudaCVaemBiAVLjruWBU3g6ULeEAHUqQkqFKuUAxwCMjaYQdCqT8ZAcES1JybbBXywRnsauUDuMvXvy",
  "key21": "sAnGB1QqM5m8hhu7969RxYBY2SAawQcidWa3JizhaQ3hzLLXtjAJrDaTCAgnFAcjDmbnBmhxzsx4m99PpyQ8inw",
  "key22": "x4qcjYxMYb7vciEPowCcyDfXpB3gJBAPmHdVfxN37cMkAxKPaoEy8zMMgqPx6CqmSveGsJSHpWddvbM44ZYBeMF",
  "key23": "345W9HpkQeJMFfzpzgHnTqUA1c9d7mBxdZ83NNbUn13r4JwuWwXrgTBHUJNjc9shV6KiqBTBJyxoNRr8LG1HuCCu",
  "key24": "3nA854qd2JJtycaAsrCZQD7L64B5qvpBxQCV5TuBwb6pjE4YZoBWfM3mhXgqaiDoUKRCz3wqwJ5RAWrYzB4FpuvU",
  "key25": "5kihHzNwmgyg3zf46vGqjWkpAqmk5KBXCukiet4srY1Sh8mThXeUSTLWwdcB9x2vGiZQiEGw3o2Ah6Q68gN8uErx",
  "key26": "5Av8jV7Taoe75PJ58PwcojY6fZNhYYJDTAnUK7tN6iHpF9pTujBp6xPtrPbRFyBZBU1HYAwdYQz5dXtR9vK9SCoa",
  "key27": "4dERDfyY9X9J2RR6GtaAJq6mnAo8strnyjZ4Cp7ogXyLURq7V7UDRNMAt3jMLipHbYzkzUguFGEj4uhfZcvbWCWt",
  "key28": "vDRNKuSNRExZzhaXe1t7Cs3HdEj1FqugkWCzRVdJcqd3JHhfZ72qUHa7i4t2v4WbwdRnVYKPRZFCQyzxu4o7yfz",
  "key29": "5N1djBAeQqxytfM4wVVrFjd1o4MqBB3yj3zpcSnKnpCuh9fyd5qQXLMb88v5ZEyuPA49JUiaFgxeLPTighP7Fkhn",
  "key30": "eKuz2NSzcCRQy98y8o5iuWTfbWWyNtxgwvoPp6PZm37b9iMXQKfJLubphdUBEF6MPzYzaw3WATcLs97Zmpd9xVx",
  "key31": "125Soe3sXTBqyFpQnCrPHkhb4qiTtVBjtaDTa1zrW3D49Qk5c72gNtxDZrrsN1UrHV94aBLvkqHg7dkhiwtZCJcY",
  "key32": "5hehFybHBX9fcyLn9vufEJCnPRAdc6npvXTTakUWbEVfigU91yHVR9QGncApazfyd69uyUas53aYZo2nmXcQdEF2",
  "key33": "4X84MibVj71t7VTM9UUu6ZWwHMoCic5vdE463GgaaRbXFKU7ifo9ND9PdS5DXsngGFgpH2GTJLGzKjAQTBAhRGyL",
  "key34": "Jt7DcVUSy1zGyvjUrecPjGy2kTEShWJi2SaX6zR6YiRXPBxKQVEGewmup5g6Qw4mnTLzVDAgbzenv8H6y4XFpDm",
  "key35": "2rDkKorQyujMJZBujH7puGpcUdyuqbaU94ku7smJcb3c39crX1zFtb1Lk1vuJrd2YFV22oAEWcKubi2AxBJwnddx",
  "key36": "4LBPPzdtaoGtMpxwJ3JUivL5TeYu5T3dNjn8vKdHQYphKUkfohkRfxp68WNnhuzqHoLdB3q7CCLyZ1qF29ZVnBsQ",
  "key37": "4NSBY2pTan7c87kfztDq3Xm16uyrLdUwES1xRfn4VD42weWPu2N4gJNJXztFnQPEYYngdWjGh6i2XipQH4AYfUJp",
  "key38": "3soQQwgxfDPof4G5XvT78RkUMQbhSzduZLFKgFMzgxt19N3Wa5fosVPfbp8qSEHhrwmaS33Rrd5FpyUipzec1AEj",
  "key39": "FLW6TxgEWxf2YeJcfC4PE9NWixGuWgtb7cYwFcm8CU8Bn4pKNb4U4bAhDnJPtWNbVxpgmA8atEP2s1hPdBJvf7z",
  "key40": "5K28oqbVa5oi3SD1eD79QQx1qLM2y3LHNg5zWPh4aAnQ4mKdzH3C439gDc62K5kHMtUd74pU5jY8w7xzAkGnYTC1",
  "key41": "4Ebr6ekWbrrhfEWVJKbgn6W1sgGhmtuH5htX4o2oo8hJ5iuiMUomZCM2TQdZrBgvKuewYR5tSdmVafZfuym3LtrV",
  "key42": "46SHfUzH3a6X1UwHTsz1Fs3HQsfj2dtzNq252nhNgFsFbmepGKXE49zf27mP46hVMYcrsgoDKKipSmGGmZNBzyAY",
  "key43": "obtv8skCg9ivCi5h14phx1nzfswaiTwednTU828oyPZEU2jpGWTaCXMjQjFQPBzjqv36jtFRHphcLR8GjS4StRB",
  "key44": "4rpyhJ4zzVyEA7wmfCBxbfGd1KdtSAL1CGRWHgKuxi3KuRnbfJ4hNghsf48BC6uW2V9gg7bQQpH2whBrQo2LqkYW",
  "key45": "5pDG9uj7ofEB1sEVxGjLoW4FPJEWY7sLm3SEBSEmvoervh46o5X38xQkMbtkKNwwr9r49cAjDvfktwaWo2oga2sK"
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
