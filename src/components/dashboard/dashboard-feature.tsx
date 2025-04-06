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
    "yQQLMNqGV4G2QjYix8iw3BCDDvm2EUB9VAFKYEobCW6epRM1BN6hd3cdv3Mmkmszmu2smB41grWiygaX2D3sSKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jo6rXRavP34cViFTXCk9r57v7PXowTZmhkjFSbLtiVp1ksPNhoSBFV4782yZgrU5XAcWdGpeGcqFo27reDtDLxk",
  "key1": "5D3KR1WGoV4Gm6Ay5ynRrAjYaaHZmENjULz6FBw7UiH6Kvi4cZ1a9AumeDqEamAFUSq9j3eb6r4LYzEfxvVfoqAS",
  "key2": "3wnCTBL4yntZhb7bX13hMvF3Wybt22nQt7oAp1nnUdcfgoHSU4PCTfpFUZp9Wo34NVy8htupkoUVSy7FVJBYcjAU",
  "key3": "58bri9o9z8bexsequb4ArPwaCY7tiu133YpVVoA3qxU5zvuALjTq6x8Tq78o9Grzzjw4eUv6a63DBoJmidCnda5H",
  "key4": "3sPSsLccd2sgU4t8o5dVH3SD1rZ1jaHdGLXTTXbhacPVM9LJV6GLFpCFMz1SGcGiHdcpqEGuEimiTd5CEWdZpwkM",
  "key5": "CcUnFQ4DiLpQX6hBYtcHAozPViiBxYPRZM6jUgD1AHHmhsSC6dmSPRiKcxuNPtpfoDix2UerRN3up3cba71AcyD",
  "key6": "5LCCJdcsRQWAjn7pzFYtonMsTPoLuvU39APu8RQe2jq1fJusxUHGKePrNfnGK1fCSQzb4KqSQLsLA7TGtsHxx78D",
  "key7": "Y9QocJe3gkGttvFVJizdP32UDj449832bTJKUZ4gm4yJAAmSgpohbeX1dKfVH9c3cjM65c2orRyTMgz4UUkjVnc",
  "key8": "HrWGcMZEH5Lf74tdHuoAATvvmVMbmM4SvZn56UkGKoPbeeuegSCpNjzNCqDXhYnEGjLMWXWFVd9FDSj2ntennSX",
  "key9": "3idhgkcyAaP6vh71EgCRMJWNAiPWmTmi45e4HMBZqPtin4aiqt5PAjhLHNW2KRozujFSgbQfhWTGM36wSoN159Eq",
  "key10": "4bgJeKGR6imNwiuaYzQdDs2UnW8ra3NuMPYbeTPchu16Q8sgCuJBATynygHQ6HibVjvbmx6DZyhMpwWSgiJUHWYN",
  "key11": "YJWPFn4UiqKg618ThF5bbwvToL9bhHXU11nozhTYju6un5T2RXVeQrF6o1fgRxjaJP5HwUZLJ6fVMk2ziWEdCrV",
  "key12": "2Z4HdPNazv3H4GTrga7oLWax9q1x7AmLGqD8iJRsUyx4x5siYPjyQQUTr5viQqsSdCDjCVzBQF7o2BHsNHWEKmVJ",
  "key13": "v4djbeuFYSGee94UQK1kGfsFiEQjJPxVbfKJb9TPkEUQrqork824wCTypsf8kNoKptdt27kd3eJ9E4CjQSM6Me1",
  "key14": "5uZNcUbxU8PECb4NfT2KMcdwsDZrv3Tf42q7oq4tYqSxmg8KrTuZTw7YE9keKy6bTF1vuuq1f7PW9ho68uRbP6n3",
  "key15": "51XFBAg32ubhM4VBj6fE4mjvJEGpyHd6PN7N2XSBVfbZ1u33UoBNiJiFpJ1rFJFHKgjVC9pXrmjcLfVV22rpt3yj",
  "key16": "FDe1yGnEU7n3kRqw4ye5wmgMqFzyPGtEFq3jeGEJMctkJbmZS5SqpPd14ZLnukFoBbT4ZL4x2tQXZTZK6FtxaxB",
  "key17": "axJHYgvjtteL4YpPQjzbH7YLzFgMicnNPjcoEpgiBtmW37gqwTiuBKfyQwwX6pGkxzjPoNAZTNqwB8QBFB7zAV6",
  "key18": "2dATNRybKBUbhsTMygV3SCeKymwM2mpdCYp8Max6UZ5PYGoNtVBjMEpWGtQ2kJin6CFwXLseJrdYKqtAAD1ja9xR",
  "key19": "2xr7Dnc5a886WXmnq52aYScEsUcPMHp58GTp14UY5iTZKKW6dgt2uZDTADosMig8JiZTtQm98TQKR4V78t1UPgTQ",
  "key20": "2wmE1yGFgBbqeBEM1SrW5haNshpyAMYQgadtF69wP7H8dAqTT4xqU3vcdyfzkZbA8tsAdFxkYoTWfoDcLtJitzN9",
  "key21": "3dk2HAs4bqX8DzphgbBxxWHtkQ767RSWyENLYm6dCcZqxjjTa5F7cS8xGSXKaeXggKJQcskRJ9K2JbMMo75zHS32",
  "key22": "2xeW5iVTu432EDQ6n5gVisPhRB2Ff7FvD75DVMZi8U9TMPugbxnVuhp16uUFtg6eJrWFPj9mwPFGEJF5Kn17tCLu",
  "key23": "4vSrBhvjE72fSZKmiXak4mjLxmZYGfKKA34jdmi3hyHAP8AtFHtBd57Xvq2RChSMr7E9r75efBVxKzGQpfFZD7nx",
  "key24": "64JRj3AwPG5a6JRFT7MapJQz63yh5MDsGmFzW167A8ytjb5Wm9vRMDiC4Sdi7jFqvVhCn7uzAts8VV2xt8aktzD6",
  "key25": "4BGpMN9jjVMU4Ecra5FZJhuz9ByiiEwjUAFcpRDYguR63V3pBdCVMG7y5zditbUCoiGwyPJ4uKUVh8SdmSppa68i",
  "key26": "4oGW1XJHwzaNuPboaq6SneWemmRsNqUz3iDL3RgUnHSFxoJ37BmceEJt175brVvQkfm1jhSSbkdtHqHqjBmLAp9q",
  "key27": "2HoALW49LtS2jmLSwSCskC5BZYuKVk65YaEN7vpsZDRwdLyy4RorgNq1y1wecJwkSdcXyjqXnbCMvwvRDxn7GUNx",
  "key28": "5rD3qMJqgMxWUwM2dCpNHYLYW7BCkx22QFntdKZxX6tbh8cxFWesto2gnHGF4FmchUiXbF9ikDpFrS3iDaxLkVwC",
  "key29": "4D6UZUcxmXb1opCY8c579xhWstJtoeYfv1xTFzHvYnrPkbSB1pBeJGiqekWi7SD9FG9LKB98KoAGhctiaz79WJzZ",
  "key30": "2NAaRXZFaSNi1LMWAdpQpstncQW4i4iL4b9X1AXJF2hJsHxKWxqrktJiyEXH5yGgxDiS1bAqZfop6W6MGDhqpSPL",
  "key31": "yPkcVRd7ha31ZsU3PXJoRgH5rQkk19sPhT18wuSkxod21j1XFEg8E1W8vi4z8QsbdATtvmWAPHvcyHVYUH93UPM",
  "key32": "3NT5MUaxxfhyoMYEhXcBjcEMHXovYkqqq135knTdNBJHXeekfa1E8VD8bqeBpL7i8DXvJE3zaiAg3uBpRfufsS1q",
  "key33": "2nusMZKHnc3xDs223ZJN99B9XA5SokNcZf7FtVigAj53JuMeVefir979kuiVMr5fJJxStrQnfmVNu3gRgJCB9Svy",
  "key34": "KETEgbBAS1iQEE8RexeCVH4fqb2uSpopDVkpoveZWSEgh6kvRwDL8bZ3Vqygr44ey5MC3f8WPfDknvefeUoRNBA",
  "key35": "3cDbFBUuAcy4ti5Lct3RjrEzmf4s3mGwqqurDfrRRDzgM2sshTrwzNc4ij3vj6Eywo9HVwGAoWSfEozU7bQZMN8r",
  "key36": "33BqxZbta8HECR8GKeDwnqkrANdJNwKVozHr5kdnLJXe3xq37CHkVzpcfSvZh2t2znogPQjCQgfzSh3kF7KL9cMh",
  "key37": "2cp4ZzrDx29fTYD8UypbAc1YnhpvCxKXpBbtK14KKZYSAsYEY2fZmhzngrhapc4qZUk9LYfZGHZXeLjb9hhJVCdz",
  "key38": "BCQeBP8UBXnbLqKEndNDGmjN4Sceqa8YFWHoL4RGq7aD8NgZY5NzqkD1RBdpRvwW6ee9beR6ZoHNxN2W7ipYLkX",
  "key39": "4ueRguSGHGb2kk6DnGXkxCGbnuEzh7qe9ZPqjFiXHJuNZeQei71NYTaRzWtyjYBXv72WQwvJhkYEEgFjGzuBhEDV"
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
