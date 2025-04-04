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
    "3NiQtqYS3FsraprxdUATqtjvQqH1b78JA27xb6RkQ82EPc6UgN74BHEK3PU4jF7PK4TFMmayHr5AbxzCcXxahDcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cExj8NhsmRZEQA5toVkXAm63wSdBwnSKCehfvcKvAZWHaNaSmmVfbXKwRn8utwqBUX1Tq2xGqKSNrstE2f3kqJ4",
  "key1": "L3UZBAFSqSqtu7azc85XzE6MgTXMPVDmbkaf3VqrSuzRcsQeGFaeSPGNtJXm3ud5hnbTSv55Qb94zeTY3ngWT74",
  "key2": "46fSmrd9fwPYbPyW5AubqjPVd1wsUBpKeQXE99qbL7MUAakN6vAbhrdNUuW6ZQWhYGqYqvN72Emt3UJMZVT2oG3P",
  "key3": "3DPVvLfoZQCJjNTdyiQ5fVoXy95vzbFZxNmpiFkxpGKaGmqv5M1nVqnw7BV3qKovCmzZGrFWur1BWrb75RfujZCj",
  "key4": "v9JoAZYoQ4vsStaEVPqQM6g46RbMhzw9kPA1JaBD8rNdeKvJXhyZHUM9S4a4JDo9aPdiY1RyXMaNajkTiss4vqQ",
  "key5": "2rj3X8vAfADScF7kuiirUV2xGS8TG4EpDffbaeEQCbVa86acgtdPL2Ejmy1CpjQYHFR6qNz18j5knV26wsAhdv4q",
  "key6": "5iPjdVEgyKXaR5H6cFX1AfMn4kXZqNYJMstcvxxkGgAeno8v2BsmVaUd2Wnihfo8FTQajUyxZaA8HzuDrVKUAL3u",
  "key7": "28k3mvEpRyfsu9u1oMwX16in1svFjVFXuFDEHcynS8HChNd4E8tgB7RP23uXHkizjjDFgxoVkAePLv8c4LL1qUPb",
  "key8": "2faq9ovHt2zpqb22FcguN5Z6y8QkxHXKFrtzUzEozP552Tc3RYRodTQXtN9kTmmyPrKcRWMRpF5F3UWfNBtvTv11",
  "key9": "4YsPBiZbWMpsA9sYgVXkSpoFELaauLSta45jQDs45QNQkG7K4yUjaujY3QYGCAVqGe8zx76yEfptaoWr7WPqpZAi",
  "key10": "gccqFBx9zYay6ztFyLkD6ZqZEjgv2sdDCnmZDMEGFXGEsCdBkeCYRja8QAyF3gPS7xySBEhr6P8zPxy2aDXwKTf",
  "key11": "3MhiFCBAtqaVjKbE4tud938GqsdwWP9LaAXHCxdxxoTwLu8aJLm1qRMy3wrwqQuWQirnbsCknLYY6SsLwH6Cmkn5",
  "key12": "4AypiX4XKHpxPUCoeGPnNAP3K3RXduvCP1BwXudrMNRSV6ZgGnQAgkA9qvNRxZgKYPQxBoa2kjkyeaP6BmUFUCSz",
  "key13": "446uT7w6fxKgnK2rrYETnPxG6KSxkPMjENLuY8jt54KjAdEC2SD5tdaDdahd4ZpWGm3fTmXbu97tGY77qt7Sq6zF",
  "key14": "2JpxoMnwQg6ZkKMqeQ7dtNEqVhKDQmz5o5APyaQqHk99JYBLMQ3kz9WWkru7motimoJ4S5aX7FgaAJS7FoQxbptw",
  "key15": "gyRMpKwJdxN2cRV9gD3fk7qrkcAnvPEodvHY3NZowNQoiaSfNaRMJ7cC7BGScBeWs9E9NVxsHfXaH6i2i5MNaki",
  "key16": "2Xjm2hdbpDnYiCBZAMYfXa9UiG37aPrZc9EbNnxSBqLjjewawU7HoEHFATUCXbGbDk24yum1vRUzYbcM16pYzTFn",
  "key17": "4Yr4ycZ1xguWiJdyGVB5wA4wDF8MidArai9wESbRbHjMxj4Ek81fQeiA2LjpzDNyqywpuuxwTmFfwj7NgLQYgRfv",
  "key18": "M87ucYdikVHHDikSvXC4Pogr342PNEANbvEesSkJs82zcrXCFBM3YhyuwT1YS3Mrsr6bBiLroberes6U8Dz9NQw",
  "key19": "3oeFjkyVjksh5Scg2NuBLKVegE1UZVMf4NHfbavRbYUdJrSSXPWwCbwgEgekSwvmnZi9jgh9FZnLLMmzDffkpQ9s",
  "key20": "39Pymav4rXHdGyU8PnPzKHmpW7nnF591DPywWmv1zzRitGDrBUFnu1HpEdCpCCsBGxXV1xrJcLMZFf9eH59nfHM4",
  "key21": "3SmCJNJDq7uCkwqz5jBakcDfUTyKKtcNtduamYmXYfxeYzx3k6EWGjwAh6ogiz8fT1UCw1KGyHMQQURjaEZkAvKW",
  "key22": "F5zriLd1CNGpifMuhhSzk5UhqC1RrGQFyhJc8ZoCncaZGPbmdcihJeQMZzuhaTrks3Erss8VfTY4jpixBKDfLBr",
  "key23": "4NforRt7cXFDFtADTFKeNFpo8NjdGHrnmFoyX7xkWUsoUGLFwGG8xBTUiKAQ6fx1dVxaihSYiFS2Jm2LmxrdjNu",
  "key24": "kqoiUBMEiHMvfEHeiqh2bmKSiiQKABjXNjeScu2HWajixfu1uJ3VxpT9NaQ45EPuf1YQBJv1qhfWQ745U8CQNHb",
  "key25": "3AuszV2Uv9jxdSXPDKGEdurVyj8jBE3Mecj8vYUL4vGhvKohS4mXT7vgyvhkHwHFMLHG7uje7mXWLkejoH4XPNk7",
  "key26": "2kNXqVPMcJmKYs2diBqVHvvnS9GNyaNXhXUtFbp2jzaQZfeDg7jCpf5DCVRDrzgrNDvS4vdwARVYJoN9TbvxAKAg",
  "key27": "wEYmddhCeVB75sHBUtW7VQhWQs68dxtYaJ8oXirBzDgvdoXFxbYvF7L5B2mSCW5vLXPh6diMUM1RjcxJWVBMTTa",
  "key28": "3tFPh4n4fYSCA71g5tt4f89xSn6DbgDHu4hZUDbsEqt796okfQxH9P1sFeAoqB2G3sAiopK73PKPBbzjkK2ntpBQ",
  "key29": "4NB9pdny2Rdm7tSEPU5u4s9dVyG6MLT1cYoNnMo7m3fJ5xyyi4CqY6xo4eoRNLJ3q3pL2jWr8oYNhyeWi3svnNsj",
  "key30": "5FSSo3Co8eqtfEn9KPNX6LPPSiJ7GYeT3xdPz7XwDcXJ9VuzLenLxQKLSn1jFEV6JaVGqFb6wLxrijfP3pDQ13Gz",
  "key31": "VcT9UfmZ4nWVFXBtiW5Ep9duVU5zV6eFtpaSCjxmcUVb4bqF2y9LcKPoPJwBwgpYeAFcSqVLyFh7N1SRmKeDdHe",
  "key32": "zVLNZUKokJtofZeG6vhQXmxvn1qBVMPP36Ebxa65tU2edc15qgkcvkvbgsTTaV1EznFgjTNbw8FMUwCgu27MiCW",
  "key33": "2utH4Qp44b565k2GmvpMcHVTx9Zs3uw9wQpdV7NmDRgDC3wjuYzucopta6WjDk9juhFbt7ELe4xNESLp3fX4RRwf",
  "key34": "5YWfUweyyW4P1RoBEyhGCZXjhLYJZNaUWSBob1UuWKhTATisc9a9RP298DfLZyZ3y1zkYg4FeuG5iwnHRTbk8ZT9",
  "key35": "3Kpo4wCKozyGYgE4qAefSwnHECJ8ZtqX6STVDBeKxxuQSsDwCQj2DUvSZrqPwJvgYUqy2JBGv5e2idtD6m7yiPZm",
  "key36": "4BVD5akKwTPYXFfCcGMSnM8JiE6PKReeJGhVVRFxYcknxv79Xqbz7awy4ghvSnsJLtyhwrF8z27rmsP47njLv5mU",
  "key37": "4wGtHpCP4UjuUtqkHksPKQVtobz71t62cZNusWihyohFDNY1Qo4dTaUjix6478oXJ857RMJTBFtr4mHYzLiUwaxi"
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
