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
    "5wYYhaVkQmh9oSWqw2UjsYDsuwbXMnN976oCSNAzYAHagkddvAiWiPCx4Feci7drMTip84JVwCpaSZZLrtkeCtvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDcRxgi5wASXeneBxMa63G2Z8Ds1Vvxx3YPZvJdpnrqLCaeKf391ddndGPJfrwk5QiiPS1BKBNc2ZPVfKBVqaac",
  "key1": "4J1sPQNWm54KqLRPCTtWFvgkQjJo3m9T3NDauJAmZ3wQAGxeXV7yo5CTVpAFnvsppZEACf4DBp6NBzH8LTgxYBwo",
  "key2": "42cyc3KTaFwE62s275atotjpQtbGPG296mFEX5KddrhWLjJZoq93bSqHHqHDuCYiEtN9gMEwiMqYww9TwfNJ6dbJ",
  "key3": "5qxLr41ZSZ1cx1tdMjTjTKrnJJa2Qbvom7wQhZTUfoUSKpen952cY6hBsibfjH4avxhWjsuqNERf8Wvw87hUtFdP",
  "key4": "45JNdYHbHqEG8MTnqQnyGx4LXCfLxryZ7ipV5MH8dMdZ4J2HyrzHFTYsM14xNLAtVGsnJFSsVp5QviwoSFvcRATt",
  "key5": "2WQg5s9Sz5dhFv2cpE5eNCE6JHLWuKH4N6EnScdiKxneCzie8o1bjrTYtNG6iPUyzghVmm1hkVnaQCjMaQFaHk2n",
  "key6": "5Q4poue4HfnAbwEM43pokCBnSFsYdT9fNT4qBiYTa95eHif7jiUM9bRGwWKdgaDzJsoUrkPHUkRbtghepePG86VM",
  "key7": "wdJHNVmogJymqXPmoXvBgvzD65HLbqTBvSSt8XWzeqCEcKwUFLCJAzYFBY4rxTL6dVDrnCWBZK1RtUNGYnfcSJw",
  "key8": "58vHfWqpFFqvCkwZkSkmVPzYKWYy2QPPBxxLXd28gbMkofUeWPSn86gphFxJwbRxPbjRQG8iViAcLmyBtDLazsQ8",
  "key9": "37gLWyFnPbdW9MGKkRxPuJvgxSuzDv72Arp6vSFgZqsQ45zHQStzP1Ayv6VyBbnvhXF8caFtToShzLEXYw4SE7Fc",
  "key10": "2tbG4mNi1jjbH65u4thhyn2YXMiXmtzL4R7FWTx6TL2NfgbNrAb15qEPZyze7mwpPxhvuF5v1oe3fHwFz3VpDWDf",
  "key11": "5f7z4U6JPCNW8hSvjbb4ceMhqm1qviwsGoWmGgXJiRvUdrawr7C5cuoxhMU1JdKzEAwMEmdfGyQ9kzrbmpekcVgX",
  "key12": "3kyuzQwtPJEwoCep91AWgkZhH4Qto68bcDK5PKQjXHik1SLM3hzgkkbdNyLK6dSbANnPfVBiGUM58GixR5CMFmWZ",
  "key13": "5eQHkbgt9jnf9wTRjQpT3sDZUaZxSaK3yomZ5YMvPgCMwDpVbwhPFiaTdLXaDC6iGEBXigrbKmSdoqGN5LZzwPZm",
  "key14": "2Tkyd1ty2FHahrSN7gLwbQCSBmnnFu9SMz1ns4nSTa9wWwPMaMybS2tgTDSfxyWx4ftgwfmLRf1BBkpZ4j31nnZ5",
  "key15": "5fy9v7zeZCsYyoXGa3qAC3oRHKDr3XVXouj9UpUUQKBd7cmtWM15FMiseAbJnV9ruD5XnASodXmkGWKXWvu8HcfK",
  "key16": "4hAqhtpgnh5wGpdkQgdpKGkeJTwsGpTCcjRXob1vVtfpMxsGwge4HL9mtAPDagRjuFrc8o8RwQzR5uWUHU5d8o4g",
  "key17": "AYcHpqRrsEqajP5EAPgvKqkeQw5korX9395nPQ5WjTKFyb1xJUjoFzoJiQE7Y5bdGYTbbnTireY8TPG5M2shczY",
  "key18": "2RUKvGvBJzhChJPDrEd2gp3Nd1PGjohLQ2acdjB9bR1wFgLrGznECTAWoDHqLzpM3ZRrbWLvvPEzoFAWkVsPYbxa",
  "key19": "2tJWuHrHkGRomLpecZDVu2Wd6fiTUfjazPdbcaBJ8Fbsr732W3vMM6v6DYkzE6YHg1x5a1vQG34K3Sek5srMjYY1",
  "key20": "3QpZ3vhdShvSMQRGKjeHuJ9kkoeJJg9aU1A2Ue7Mr6WZzwYngQy4LSVop9SMWPySgHTJV1db6XL8JKZ1yPdh3Axx",
  "key21": "17guqWL4SQDjQWoffZFsukLt9fZ1ae8wJXChdPpKaUs1YkFRd8YRgJysYicfQ75B8DVxGQeosAH6HE32bweu7a3",
  "key22": "5TvDzRDZRVs6ws8vCWbjTx9f4EkS78kJoTqqjSbTwRSDpLEsAQs4qgzb3SznED9TGwpxfmRmgpQnJRDEeymj4hbZ",
  "key23": "34iQm1RGDL4o1QXrnxgRtraaQLsKWuzvtpqAtFQhjmAt4WUBCKiZeYBCp2vvzR9wwZf3hr6xgDQVeSD9YoZzrfz2",
  "key24": "344k6pNVZiaXTqP1uhaMC6pVc4CGhey5mewh8dB219YSQBWHab4SqoP8vepFjMpBcoUkqZ4CXAxK9HoYFtvmE6vF",
  "key25": "5rP11RzZuuvPjZ8WUjXTVpMFeyv7oWRmYeTtbDFjADT8JqLqYrXdCkSe5zTQNT4YaxBrqjABP5bhKmjBqKv3bSbU",
  "key26": "2nau3uu1vdLF6r39LBxEerFDd4iCxbmmaV5So3ngoMgDuY7qdAzgQmvjban6dVKLMtBwD9r6hwT1gETuwRU393BK",
  "key27": "2nBdKkHGrcXLQovpk4vo9puzbfQDzcGtyRocKdoDuQcMGQWpnpZWjgQi2Vz6jQZPoM9WwzRD6Y85uQ5hGB5BzpZU",
  "key28": "3yTMybgUzwTDjC755fUT2JmCFHsJpiTGKncyP1bXvG1N4uPL4uQVGiphFsRkcJ8JHfYoix8P1GzwUNEhnrcSot11",
  "key29": "3ue63TStbh7DwKrBqApKiY6cybEsEDv46prb9DkXiuUFbm3JgdQno92tqNGvDFvqRrqkG5Ffu59af4qwuj4RGCY1",
  "key30": "5EDLfgFKyWy5t4Cq5Pu7kh8vHsJixJmRPsN62cmKRXN3HhzuyawEQu1d9pXSRHQBqxv8RYRFmKtsmER88ZR3FADV",
  "key31": "36cQUJYkRG5nVPjB57ZUYHrB22FfsXm4UzG5Ug62BNpdQ54TQW9sEQ2HHB8YoTUP98rYkuYTto31ZorWGgowYYUf",
  "key32": "2rzosZMFfnf2k3LiyUqD66xdAZjYnucSG4NKnqCnupRKp7fd4rwqGB4M5DNSia2kfh3uLKS5gZp2ZNagLgKBhn5q",
  "key33": "2upD9mr4Y9d6x7TXd9WQdhzvZsvKDEy1K5Z1zYXjpcYVWB9Rz6q2TbqaLGi9tVGmJYDniTDezrA6JgueVUe1f5MJ",
  "key34": "2Vez9Qx1Yj4LucHbBLjiF2k3r3tGJDwkaEgbTfcXBnbRJKHRQHwqXhb1erwjubUcvWf6YQRHWjdwYKdvHemiVHvV",
  "key35": "2Qm8PVGgNQux5Kvmzts2PKNeQA3jvuXZpY4sZSPLLvQUp1DRpYgEPt41tfVvNWisBeSK4pNYivN5TF75Yo94hgbh",
  "key36": "3jSpJQBhbxtjxzKK168dSpW8HbeDRX5BovEy5JJtj29i3SzRtE7jzEqv5imS4cj8TocGLs7vmrCtfBYdriBBBqiR"
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
