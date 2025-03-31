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
    "5mY494mgGqv9p8TCCxqQLrvE9N7UhGN3MPNauLuovJyLrMnpS2SV3FEQhqm3UKsfFCaQo7vBqmbQd7TYpekruipi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gh46bdNr8miN4xwWmQkT2uKChNLvzudDe6KnyS2zbYAXCHzrSQQSRwS55PwZmqtB27doRryqcwvYDAJ3A5pYXS3",
  "key1": "3PVPCnv8L8NqS1zPgUCPRanxFeBBaDuUcfDKrtYU9xiWWfEarZgnVeRn8ct7WEu2oqt5RNyEegt5uxhFLWaQsepb",
  "key2": "2FzUXB2F3J5UPpVCHcewcDtDnDTs4H4bWn8EKDAdCZVpQfZBvhYjpcgiUMzj5gREg2Lrcv1sj7ycG5Vo86irx7j",
  "key3": "251QS11vwtZLLQJDQya7cd6w132rK61yviTdZFSfkNgaeUWDAbaonCJMBH5EVXxz2wJT72PsEtXVbfDd5LACW3c3",
  "key4": "4MMkub2MHC9jPWDjzv5FkbGRNUki6g1EFR6qzbNWoobPGvBvR9Mwuj7FoQWsHpqGwfQ96bQPJtPWQpXpqyKGbTNV",
  "key5": "5mU6RorDrFiSdbwt1kw4VhhXUJyiMvZJHT9ZHKxohMwiD784goM4a5rCdGVeLB9SugfsFcGEytcaN9DNDGPBNe4P",
  "key6": "2PpMvUBwmENap5caxFTQcHJpgfGXsWM1fWQacCy4VpG5ix3FiRKXzpuCyoxsf2LEUWZn5uV2KeqwS8ULzqFJJo3n",
  "key7": "5kyXVGUtcSzLiMrK6ARC3h2pGhxg8Ujh2eCb8BsQrbKeB4svFzV5Cjskqqu4SPZbmVu8qWLuc6A4i2s9mNWM1Fwi",
  "key8": "5wTunJhW9tZDu6JTCG5CpNvruaQkiZDCePe7oXv1RwjkLJ7rFFeKLvJA8rMyLZk4wEZt65xCgo6UPVhhvm26pFhm",
  "key9": "5n7YDgitUJnmW4n9uRmcis6cZ8Yf4ASNYpFXngjvEYbGZszXBzw7pY1TFuTB1B7LaCpbfsL8NSsG7BQidAgAZVYR",
  "key10": "2pr29Wk2nVaHEvd9cgbYmAE4vPZ8tmL3RQRyBDif3RjGCepkNMbNuWJbxo51US64y39hEwoWCf4hTvKDMcR4UTip",
  "key11": "2bStfyGeRwkFfX4AQcBbSdb8umDrrY16io87JcRMUZm4HmRQs9D3FAKrdapiZ2y3MgusXFEAP8ZHAXtJC9dqiKiB",
  "key12": "5SEoY1dfTbpz7LDbNNW15Job7oZ7qX82QNe3y7KYupmScTfaQL1giVbUqmAb1xnmiTf8LVN6GTKriguNhHZXkGwq",
  "key13": "5dvhTU6AQEsnFea8JhVbmRZAVr5DVmaKPmUsNWNLbBBHHEbt62k7TeJSW6pN7Dmj1RfiJ2DBnYjytnh4q7H4VKbi",
  "key14": "5kDjvDRz5am68mVAf7cJJmCH3vh7qAL843oV56CpkxVifk8AHdynRTBbECDtWk8DPmzHhQTAW9fhkzneiJ68mwrz",
  "key15": "nEMana56csGUsdGfQiZjDvPKA9im7z3eM9h2XHUfTnZiD7F5eK2oHxnt11GMCYikAGtDxUtBiHSKoauvruj6djM",
  "key16": "366NbxzK4oTMVkSw4afM2zh8QutDzh9xdS4dSSoCLcp766zNiJEDcjpbNAq7dtnN9oKxj88vd42pFy5v57sFHY5r",
  "key17": "2HjdJaebBrCZHeMzHvHLJzbU2orzGnRN78ooppU4B7A6sWBPucmiYGFQJCSru7aBDTLQVSJMPBpj5MaDj9HfFuUi",
  "key18": "65Up163mg7AsoCxKVTkot9RPKgPpPVTA8RtN1BQFSumV7EkPZMBCwbuBpXMn3dx4gxeuWNJoUzY5ynXehMtGkFYE",
  "key19": "4JKxHd2sDnMqZDxJUdQx5sEQwM88J5whfmepWGJAQnmkaqPifWEJ9zA2vZUReufYtf2iQMza5kTEPVSZSsct8rym",
  "key20": "2pgjLhdoXU8yqH9VGmSSkteXMDju2j6S5YhAnajFL1pb5HurMa2Bkcqe4HvPeCvudHX3snHDjZiNEdJx5qxB3sAg",
  "key21": "zJK4ZVxSsr2DiL6fUSQtrrzjT1i489foEmUsPC7SjPSiHNbHUajJKvGhCaRedQAE2iRvwovp5vxUxCg3zphYxET",
  "key22": "25wDY1S1fzFoNVR76S6st74TBeTTDpToFbu7fumg1a3QKXbLqrq2UGQ9TKQqzoABWWGQSZhiUqLusNvdpWjVxdxc",
  "key23": "4GMGLXgQ39WDhXsc2MmQntH6mimcPTPCzmNze5UzQur7WYKro7GEcjfTDiT2o4fkkSsctfqMH8eefLtZvUuFrHBt",
  "key24": "4R4BEciXMLV7iXgdrCfJegzVaf54BvqVddFZZrsgyM37kUzrMdGCbp6nZKNkBFDL2oj84btK88sH7ypcNoJZFibR",
  "key25": "21p1o357EcVV4oPuM6YdVg8TR4Prth6ytrVYmgreN4UrJ1a18RXMAoTax4KBwQkPU7cVWfGoRq9egrGtahj1bpzx",
  "key26": "58WQ3evZtMe8RMjyjzRSAQ6SzWAtxfLLqH9uGDvRx8ZujaqA3GZdxMAULb4cbcnwJafRd5F1RfLsrVGk6H4jBH77",
  "key27": "4By3bpCXMh7hx3duA3tF2ymLfPkk8DsWdyt32ePnRZP9JhXbda281YvnY9ASxpLLuF2Fv68qZACjZZoNA3J282jV",
  "key28": "N8DbY5QuY7HbEyyDAcWbjV7Bbx1A5ibwZcytLcVTqvbk7ZHGNuZXTn4TZKPKmkD1YxetvPCu72t7enRKaSEPyPw",
  "key29": "5F2KNui4zRogbQ8F3cFLL5sn9ch6khJhuLViGFwjxpJNg3yzsvjCp29t8GcKSQ3zswXUbfNjetkiY4Y5MMgM6Tqk",
  "key30": "3PtPD5Wh1SSUkZAchMk85G4Ces4BR1b2ejdKDEp5uHYjyVc63ZxHKM7vUa8H7toCZvJ3kVTZbBAFtLVCX4zvj8Xk",
  "key31": "5Z1hq4zGzPvggDSudb7WqywEQ2MAoWQpur7g6krAsEwKFp9xUkwac9begYcbVZwkj9jNNaqsNYACwV6tvA5D6UhP",
  "key32": "qX8gLuB915v5wcFYXF2cTLRfwN5GTpRWatppgnkh5Rn7Y9ZWXEgbBpTFWQT7ia5Tjt1Suf9G53sucGqeQeNgHAp",
  "key33": "3AwZd9i48aV5GFuzr149yq8HxuMQbqK89qM95128zHdCiH94vvq1SXt6j9iRi4D85zE5XpNZZs4iaE1PDNPGVCwG",
  "key34": "sXxQzDYwdaEpvHHtpDNBKwoWUswPvdQ7rWkFNhJy1ddiiPj9XRViebHCuznDGYagRz8XsSCqRZvucteS5sKD7KC",
  "key35": "2ov3o5bb9uH5rLmoWwXhFu56FwTgyey9TBcE3errm5327SvwtuuGqnCJe8YVukxu8uUmwMJ6SyUM53wL7cT7sA4r",
  "key36": "58wTWPhjkWCzCz8jsar5JMrn381bGeQJCmXC42uECxavMheBfDaiZy7AvqYDPnZj6gN1717QBQgCZqfzop3ysfjX",
  "key37": "2iVm2xqjn1EZjbNzs1yc8riBfYT1PW8mVtWDSykq8ktDnvxZKW57KpYS76g8PSeNaKXybX7LMQaDYaD1Vopq2gkt",
  "key38": "nTQCufb1upgc7Tw2m1qMkFw1eZbwsmg4ZmUyQ5aRimUx8G1Kau9uu4pQa5V87ryc5SsVjaUV54GXMzpLSXmMgTL",
  "key39": "4L18nKFDQrz3wy9N4Ve4arCG6QcfKcTGhvwHa1WjDu5iwXkAmfaiKWnf84vx9qj5x14wRtU4EbfV1cvKrSq52qXg",
  "key40": "5gXGvxxgiwegrPZKDfnnN8oK96bWmbMfgcmWTXvzZYvJoJxEFztCYJi3UTZMgteqSaiWHVKFakv61vQDZgBBcAub",
  "key41": "4ofuVqaSLxFaGbFXvv9uacsPwNFRMV7qsX8dG2Gyqx8vErQw6VnZgGefMz3cXRwsNZNUBHJz2RnXTAp2X53knQ2K",
  "key42": "eygnqMRWUGqQi9BpVCnU9kS4BcSV9nzQWi1aiP2zDhVhsoAMpAk5Nx9harh1dgdBJKVNjcDCkmpAp3jUj2WNhE5",
  "key43": "2AtQv8tnspsZbawt8UqmB12MU52x6bw5vtTbEbxB2JFXUJfcamxCfkCjK8hQMRH5kMJ9CLpF1LNbpYoFXFnLZwVh",
  "key44": "Mx4dw1tmG4nUXTjuhoeScFssziZvp8gm8tMd29V3DZ6raSt2M5kihExCupvcYdTbKGm3R5qzperXH3sWWoKgqyU"
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
