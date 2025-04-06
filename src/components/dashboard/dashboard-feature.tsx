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
    "3m3EP7cYXdPjwVNedpPhdpvbeXyVL585CdMdowiFVRABPRGPwWeDBJBDivCSkoWiaM9ZUpEDMauJEToqHZWgV6r8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zH74YbM5DMJJMi2DKpqYEyL1rhm9JLPqMkwQjCpntZTgdwK4q89gsj7aRysaE84CYEsQYVxu5mwFW1xHWFVSkB3",
  "key1": "58qsFkHvGgy1APgq3DUrSe3JeugoFHsjagD7vpLdiCVnr7RoBywKg3YG6mHq4i8RTAJjxdgzgYAZCGkesu84wJEv",
  "key2": "xK5jgeW9pBKf9D8rFRN1ZEftE6oxiTAEmxzEGKisyemrkPGLRckVkv6FgC8yH2DyGkresiX6WuepTLtNKRgtWFQ",
  "key3": "2LepaKcdQBJLPre3ecgMBa4Aw2UEq63n6gfY3C8sbDNqoypJHE5VbApLFJM3zg52qH5Vf2coctsiSmKbJGBpxkY9",
  "key4": "vVeGnbR5iXx9LtJvsm8NAbatM7hEvjzz6ysmtMgL1JECwu8qfLwmAFtBWxAJX4ete9rK3MUEusxY3jGZ1vTwFzb",
  "key5": "5CXspyxWRD5941qgC5EpVBQwB9KrnD4JhV6cdmQ17v9ZnHS1MPHKWJnUo9xZGLzjidfVNSEs67Y13oeogDdPSpZT",
  "key6": "21EYkECdx7JM8mZnS9cuVnWwkAaxkgqh3LyaHrx8S2kW7xpRYxgvGY6CniVf6gsAAkkpbCUYp4ei2WeF8N2VDBud",
  "key7": "3vttJEFagMAHecdVDotkDeotGXbBWsRmLan6N1jBeNGtvStwoe3RRYqLQoVuN22nBYgNfKWjHyqcuUqypss2DCR",
  "key8": "2MgdBTa3AYHq24MMdRqYfchVngFpWgUMkS7sDqt7Qfa2ZBt3nrdu7gojyZ3PNXoYYfCTCak2KqXxi4CTdrorXn7",
  "key9": "4W3W5MLtqAWZLpVzNnTd8gYLZoDDsty3tYRSTXqJxnkEd39VxyDwFr8e2oYM4NNFwwiMLiSNX3M28PWWemTVzEdE",
  "key10": "2LEtjptP9tFkg1dNRPf7Zz2rMPfuiwz5voTYbqVUetX7oKQrp3pii6MKGT8rEhMfnQrZTVnjt5mRgLkHv6DxYzjP",
  "key11": "4RnnYLt4FUUgkuGKWT81dy7NWYU233NX6APenfjRS3aLSbki8PfTuREPwSx6zPrwZeYqyneJozGbvUpgSG2YCEzE",
  "key12": "2kw7st9WYcpLageedzTpnq7reHNq81mNTDRhnFcLJfuAgTN7PbkVZsSM3aKGCGRyAsFGSS16KmYUT32chpeRvfBt",
  "key13": "4wCzjJESCkDiLNsCW6Rwa1t8Qudqh7jeFyYvFydfoP2XwtpjS5uXhsfxecE1DWdNFB5SYnaGC5SmLVDy6x59TEP8",
  "key14": "5Xy4hQjoN9DsRA6FgqoK7vptepCm9Vvdv5HWNM8YdbJ8fUeK35NujQ4krTX3N9r6xasT1gnXF37BqBJEB91wcALZ",
  "key15": "XffQFa8KmkKNG8THgU8GytgtSih1JEeMVVQzqRFchnJZBWXoB1gLEWq1tq5a9s84cjfd1PoSnX7iE2wATbKscJ1",
  "key16": "2kFep5fh9gAeEn2rfCyrw49UkdedNNuTnFvmfd2Qm8qmugCy1gqXzA1ih7WcaKis6DrMwS5uLUUFiAUL5f9CEMeX",
  "key17": "4iGFvb9gTZE3DBBZUAEE3Aw3sDxSkp5evtAdwG5sq5us3AkVWEUiF4MmxZJAWqTn8qLxs2k235GN79MHBtHnbVrm",
  "key18": "2jJHa9uMT1WmQd4aVLKeErHs3x53oLyWcEHsasZ57jcNomEB48VRDaSdGT2wH2tWisyEetQanhGAQyEtH8Sd2bjK",
  "key19": "AYNiK2LP4PPhgW6L45hw1oVyuGJypdVe1ABUNdVuTZmhJq3GTZGGrsV2SeKNG8PvonULGKGaFdjqeWqmg2poSXy",
  "key20": "2CX77T7Sd9fMMAJsmWFBM6SiQN78uCZp7GdZoZ5wLiTb6Xv6mCpX15ZippMAWDU8Rjj1fYAYk5VbKSA81kvuHTbq",
  "key21": "4eY7gv7vwiG6iFQLunwAFe2djWARom95eED51cbnbaTvVZCgWAveowfnYcK6rdnzyXZRH86NEHivJvVPwxuSFQB",
  "key22": "GJ8emJJB3uHqHVfMJPtRUqZDJw2R1Mj2AH9X8SkqHgrRz2he4mgGdhabbPqsGF2v9dp4xPsoUiMuqLDAKmViZ1W",
  "key23": "rFP2D2TgUiydQ5Bq6RwkC8wubANPVoPQv1382CscfuhVTaBab4qHpiqBQV7Juu4H6hVQvKoEJ5aqrGdNYCaNAuP",
  "key24": "4cQx2suayQUnGpN5uibDaTcrPaVNssnojaHHVcgcbhkYFPJK6udggbB12RQsPA81eoGryG18bwwEEt2fosBsb8Q5",
  "key25": "5JYPRUZ94Sob32YHTnCroFt6H7zMZu68kxKGBsZNap5Jxg9FduPJoyHcWBzvEHW9Hmi6tVZzjDDqg1NW4dUSSmkN",
  "key26": "5M8m4kBzMTZTRsTjs2AAUHbad8LbwSF9YVdGWJCAKCHppT5wop3Pg63xkvXbHaN5dQ1TAtD9Ka1c2R9bEQJ5M665",
  "key27": "2W438iXfzbLhXm6wfJNebrN4kSBY2TgLcyuMfUeQAEH8D1JzdqWaFmLgnCZsRS7mFjCVw7NiJijGhSwt9MoVHUoC",
  "key28": "2mBZoN9zzHPfTjhZBaz9nSvRkDveW9RSCtJE8p3CVw2x7wohvN57JZ7LG8W8yTN2LDmiTdGV4F2Ay214ZJEaUB52",
  "key29": "5ndHfGPuXq9G1sMgfmE8SJcRmqsb58ErE5Ez5mrhyVFN4eCnPicQPyqhdNm7r9vHnxfP2aWPTeDoyDrRXKPxoQ9n",
  "key30": "j1U9UQhmcspq1Z8wfAeR3vKumBpo5uKgXEHYUfyfWM2WfHgnwCWoSJvk6TtjrS4tWeogie3xa1Tka6QPsBvc55r",
  "key31": "5V5BAwEif4bUTY4dm7we2BvzjG2nveyq1cYD6Ug39uAhF6r32TnXbzmRrVw7vFPqPeCYR7KV8awaBBuwWT9S8js2",
  "key32": "535WW8KAMa5kaXRRWvTuNaR2e8kEn4MQeyYaw1uhUEgV6B62gHL1hBFj5YoYe5B5ucEYf2LJF5HZLM19tyeSX7Au",
  "key33": "2w27P9qGETsaKiTuTK29mC8rK1urVMSfX6hhfNYzWtBUDYRBP47KMqbGvRHfoMuzKPmtZcDwSyXcuRjnubzfghU",
  "key34": "Nsq2c1TQjgbFM3VugePmNhwMPbsifjE33NntZ9gmwqwLDDzzHfoFoYXfc4NQVqRzoZwwAeCV6UFTwBTNLewkvh8",
  "key35": "4YZzK8z1K14VLddJyR1FYEQDkkHx9aU6QUhQB6T3sknXHokayUw7RLRLdg7hnU1Lo6eda4EGiSGcYpZx2Fva4QUS",
  "key36": "35Nyr5i67mTvj8sAkjCFRg5zrWgjVDqrh14GdC9af9GNEDogUDPGZSxAQ3NCPonaKHdP5khQWrbLF3edbxWe7K2v",
  "key37": "2hNcYNjrofEGzqGCtR8utjSbNcNwN79jXK69JHQhbqj5NDNJpJAb9WfK6aAQMEb7Zfy8Szgpid4EieoPUVk8izYp",
  "key38": "67cmM5mZtz8qQQzC5zgD157wPRLun5XndTZYcuA1GaXPn9BLup9qyn5YiqYGmRvjvGdr5AAakEvMssZty22mY3Zs",
  "key39": "PbL1tDn87mB9jxfEptPJPX6vrPvZY9TJoinK3AL3ocRUUUhb1wK6ncg9nRQvwZTRWa8Qo2d6HE3iCqtodLC4YKh"
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
