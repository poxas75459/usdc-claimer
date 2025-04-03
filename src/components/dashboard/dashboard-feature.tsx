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
    "AYir2P5YCdmsi5RM8V6rEYnKCr5E9WHerMJBmi3WDbCy72UAkQbV6f8JRYixD2GXifdYoW1VSQVoB9iiPMjcEy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BrziazUuWiybkSPmtkkEzsL2YCrTP8SQHPi3JmnyxDjARnMKWb9hTzaCT1sn2n5qM6nyp2GzBZ43oxF4XG4fTZ",
  "key1": "3QmPuDZqgqvP76e4TtpeGmuCGjS6avWbkFqwc3L4PLzhtASYHKyeMUXjRq9Fzm6FaF55RMa6Hn4sf7Pgy6VhnzUp",
  "key2": "53eo7k1aJpTfgZ7G8jfFUvhy5gebnPBeRA1gqQXC751SbpWtv5fAR97RzBYbUuo7cACRVZzkh85BK3N6XA4rvdcM",
  "key3": "26sXA9hszKnnkrLCpb9GmBv1osWzgC9WcQn7Exagq3Ds24LVsKLMLtVZQgPisuuMTovqZtLK1VkAaho98EpKNHAC",
  "key4": "49fJxPQAXsmxF9ZJiFvDZNKRPpJhvdrKWGtWmDTRyY4bytmzB4vaLifNo8bxaMPFkRENm6rEt46ArsYJHgPLKdrh",
  "key5": "XQFK7PtWcjiy9x9rFGfCbW3wtEiUHrtZS9ndyDBsqaBtRVkCPLHopYmnebmF6cgAhcYKfZdEL1REsGUYPLLSf9c",
  "key6": "5K6iqkxRexn1ErUcMTxkWFh1C9xpBCLX9r1sLU9da9AWPQMohCm5eGWpn6vtPQBTSQbybUBKfVGjh9E7VvWKEc1u",
  "key7": "3873gBgDwir2Z1svcaZG1J9BjzjLFM75TtzTAWhDojRgXeXAytTgpubiDCncWXBWDBDMJhx5gdVyVGG4AWGcoTd5",
  "key8": "5DEJNX9n4fu76HMYGvfz2GbrYErjFwx8p2b1jFBVozeFCYKCh31Z4uKqKWtAoaejuwekL6MVMbrNJfsTVJbj6888",
  "key9": "3tGyrqmKoLSqHymiD5p3QnqQ8wNxM36f8NTbk5jUhQZBi2JrNJ1ZdaTxbHVi6NQn1CzCzQszxnBS72C3nZFbnnsj",
  "key10": "4ce7QmbWRaWDTM8R8fLQ1dHk9AbgKUozjdqybUDTzXhNRckXRpntknvzYQR2yrS7FK3Uv7YSTMWK9pavEUKq7k2b",
  "key11": "4QLCsGaNdPGKknoTq7z6rdB1ecmaceqsEoXXMh1jM57uFLHJGGy1ydyJFDZtePouk6PsHhKyRJb3wVDgrkfemfoR",
  "key12": "dKwowco75W5knPVK1tf9WzYRNwSnGz1yJ6B8Ha9vk5nNeYbfewmUp4ZL5upczbs1Axhube2YpbvAUE4JX5c73iA",
  "key13": "5G8R7UNsrVDnUiZH34QWkdb3VCn4wKx65UaDoaUByARYFgLvMHt2n9KKXEXV3Dvh6P1pxK2tpq9KiHDUtRN3say7",
  "key14": "3dNqzdeqDUV7Sk86e1VhcsMG75N4QWcpvfcQvMcSeP7mWJGYd9cPhy4eBQrTT6riz1esTh1Zi1pXTXgDRCZJ8MNy",
  "key15": "4adUhPxjDSPxNjuWFsGtFj47TmEGo6e1DtZT36g9Y7hSsgov9XTurYNcWwtb3H1V5x1xLZwgxPqtnhKvQzxpN7h6",
  "key16": "2GBnXsMJwJLEk2TgmVSczhFNii4HiKqRatLXrMmW87dTV6N1hrrUacsVnWcFb9pozHT4A6aRGWjqD3oWMUQNT5Gn",
  "key17": "ePsYQd83iSx2cUYP8oSZeJTUMJtfP6Lfd2HyD7ePkYw3Bxhs2WHkcMqJysu4isJ3ZPgSfpoBqwRMbAtvqpX1DS3",
  "key18": "4AJ3e3aKFZQgjpoDiLCL3j9kV1EA1Y6t3QJV7y4zTANVTF1GqkLNNDXw3aqqx6jUvixfa3tEwGn5qyAddY4EbHZ1",
  "key19": "3qtfEwVjoHf4ejRiBqd9E8SqJAfKcSQGmDfztYReUiAoWyVaGWKiZmLHz68i9YS5gZx6wFfDoNs8ntEAhrfpAE59",
  "key20": "3f7zuk6Fxz7n2c7uLX2Nt1KgqNh79ZJvCfQSZhaqsJ53ZnMqeUzvh92VgU7nPbaseuxQnmjWUGyogX494eo3zccK",
  "key21": "yimyTKCyj9FUYqwi3Gbo6AKgn4EsACkRrcfypqskTjHVWxSbAEnhnM3LUxAQjG6ySvVLT5G1Z1bX5d29xKYdc3v",
  "key22": "4mde9Y7jotH9Nb123Qmtf4umVBMZodvTCn4DeCChkiCwe4ireJwMZhVhMYJHxp3w6j6kMSDdc85ykACVTxAoqVZ6",
  "key23": "yrcBHT2goo58RjxZQCbMvDVcbJ7pApcRqqTz6x4Ud37xn1q7Z7u8xoWZfGNbEeogzUGdeycdcB2JvFvGVhTNBzq",
  "key24": "2D1jUeURkeqB8QVSGXwip7Q55PgA7z35p2SD32snRz4nevDeKYaaH5XWW5oy3nhCVLwbQZMQJda1u1GixcV3z2p1",
  "key25": "3FQzxqe1mjiVvB3KdyKuBJSyDrPQWvjbhSo9D38Zaa3rySMUrGTmqP4jqHovrdtJKWX3vHpDExWU95Hq3TxRm2b4",
  "key26": "2pveMvCLoHLahqUS67zBiHeWjyJHegwgEt2HzRghQ9SxzJQkPFNtTc47RAKGrQxGQU5Z7J7dvqBdb8jfHxS57B9s",
  "key27": "5SLDiY3Gecyrzy9skLA3fUyv2MV7fDruL9UgZZfs58EhPNU3G4JEMUow6GvC8a4kvoruGXaTFihazLAWmwbBTxab",
  "key28": "gVQvN8eM9QJ1QrgBya7Ri8bdPUqwq9xqkivMuQ7v3BkwtMv94gFqEJ7P7iFkW2rSRJm71wwf9ysD1CCcFh7bTZp",
  "key29": "qNWdnH2E9NQhs7hhiaraYoRRyVc7FueixTedk3zXFEN9uXwi6GzkqmJhPqRrmDu28xqJCueKwS1GutzFBeaj8z5",
  "key30": "5G4m95QTKAvthrfGkVPPkRr8q43164aSxipkj4RsP6zpBRCfKxvXhowgfGUcSVKMw3uaghrpLVJ1QfZr23BKCAji",
  "key31": "QtjbvWt5REe9E1yJh23ykunmgSpYrh7tERyFckZgTM61GpfH8FqjtoZ6cFxztC4RbzHb6NAtW3j4XLSoMqJNh7K",
  "key32": "5wsSeg3quR6cH3XPuAbFL2R84p6AG9TyYgnw5ZBL2iEuEtBiCx4v879UkHHeR4nTDwYm5jW5necmu4vDc6gd1SPL",
  "key33": "5ZrkXLA8gyabJdLyoQrFQcpeKeWav9CoGG4WGt1VfV8jB9AGZsDreUzyaztk7rzi4thkHBzxqfeprBDNmc5RuUwg",
  "key34": "2KC5AkKkPHWRfchgsaZj5TG6SEwEYNbmW2DCVbgnSKa1TZpW95eS7nR6q4eAHmxdmcs6sg39VLccdqPP3Q5V8ua5",
  "key35": "5QTjpo8uFFudKMFbgahtFoy69mPB9hmmY3hGvsQZR97MDuQWDRN1trXtxjiAaKjZJhW2HEjtm91WfWzLzXGszTc4",
  "key36": "NeA4qhJicZhLXYrUaxh8tzcdv1V34yCXo6ihRyCRrB6cTwZ58BM9CdvZqcsFsQGf1ndX8gakuCn5fqDbsjUpDve",
  "key37": "2wWnpdYixjcZYrizg13ZuNphYThwRTfEVczZZQrUdH6FfEVuYL1TACzy5ULg3vUSqzHVM3ewhsTLVx3eqW192Bsk",
  "key38": "3XP1N1c79XkVV2gU2yZrH63Se7RPkR6aNFvJNbt7cdz3vvsiM3jNk4TRiEeuxxSXL4AK3KeDun7J9iwkeHugECE3",
  "key39": "2hsqoUk7q5GzYtxTrZGKyHC3aWbTHo2A4nq8yrCsQWdAS6oEMqXoFmSeVGxuGngmDV4KYZpHPHhTfpNidjKkfm1N",
  "key40": "65cbh9tXQnhxS4iByhjRiP7YskUeLQiqWaSdi899S5ZzkgdWghpakTf2ekixL9Lk9gY5AX49rDQGXzcAfzH95GSw",
  "key41": "gD7YxYPSc94hGNZt75Td4SwVQjrMqGipHc2VzMAFdjuN294c1btLTrPe9UZZtUcP8PJLStsQ4fWCLYrCDUqZ32u",
  "key42": "2HpwErbNfqYgXMxXC7kkpZnjZyjATxV6fe5wwZDbVPaPwtK4XnFRVWavU6fbGMXuRSMdn8Jui7sDziFVyxihYTFb",
  "key43": "3EffUnEo2G87of8rJKZBb87WyP7fG6Asofz8qGTFQ98Xg1te2ZcZ7TJhdNp5p5Prp51jQVakRS7NCa3orVmFaCis",
  "key44": "5cBc46AVENuwFSkwNX8K843szxF51x9EFKsizUzJGRRdf7F14akGxkiVdfFuB1UiBUKFqYvZxeHtvchMYbdiPavE",
  "key45": "31NQYtZxabs97xYMAMZgpaBTDtxFoZMByMe3UhFQT3zZhZdGaPmFcdoYytmVwLr3nK3334rzZ4WXUxiGpsbYXijE",
  "key46": "3X2STDDVtaupGZdRaTorbnBWK3kmdQMWuwk9vEa4BLc3LLjsc4hdJTdNqgy4LRvAKvnLqtDLbLmt5mxt9DkSZ1tH",
  "key47": "3WSs8QePXLeD1cSVameR5SobgSaC6gL4BYquvibbdShpVgzsPzUL5u2j755PcCE1GYYgheZFYiFktsvmDFcd87qU",
  "key48": "4Yt2Y6wgot86idTaoHBvL8Zym6U62HyGmMSQ27EroSgrAgmcpjniRLQELwNjSWP17pcZ8e8WxT8xVCjTvqyYb3k7"
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
