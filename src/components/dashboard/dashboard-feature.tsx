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
    "5ABaYusiQBbiSqawB4xJzcFQWDS3MaHyGkjUMFMbDX76VpLjE8iCGRThDKYPXwsbDDf5gYYf4Um525zdTeFpWhDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFXQCeoVsmqn1E8XCrFiMfSpSShU9kF2521J2M8jod9ygxQqa6hYQHsmvK2465BDka1TGucY1KjJCmT4obkKEn8",
  "key1": "ueNTc6Ufg2WueEuUGMscjhtsuh8hUQTDRbmdq6K8aosjBx9LUnYoq7zhxEqJqVPhwTJbDFtmT4Za94Hokmr5Fmx",
  "key2": "27jsJq6WGUBRTmZZXjwHmcuVsirHigRGMBubj2DoqHZ3cyqQFzLhTA34GjRpa71ZKCnj5bSqGzXrZyoju8YHW6b3",
  "key3": "5aU4GJ5VoSw2gFFJLvpH7A18zv8oP32ermNk96PHiZwa1aQDgW674XxaZk75LUhNLDhbxgQtM5Rps8Sf24q5dxsu",
  "key4": "3Q4L4SHngQe2rjg3bryrepFS63bZfp6AfVKvbVhAthh5Wygm4qopSR4gjQqzMGYsUtzCJxGUrgshjfoYxAnaywh8",
  "key5": "5sp8JA7no6DMQtkQghPPezhoinKjyGUuYwA2B9L6HYx9fcZZxAirepMFvtjjYMa7AaLWStVn9K8rB5o74A9UwGX9",
  "key6": "vUfKrmukfDo59fpL6mG7JqM4pXANvaZL1S82domkq1bPqgP31MHWdqTkq3nnjKzGMwQ5AP2XEngs1LAPtvsM5q7",
  "key7": "2DKYrnu7Sv2jzP72qjz1Y41tPdm4hLmoKe1N24f3QhR4tMjgZdRxKL2KoQrsqKw3yyDrNzD1Wzhr4x18BJGFXiXm",
  "key8": "4JaEpZdxZaCqey12fqeF9b4pNwBCw6tbSrCLzKt8eFPQPfMC2G758ByzwyXXTQKrEYxAC6cpBnvVpiik5BXAkuQ1",
  "key9": "2zKs64vu1NvK1WWvbBdQQptxbxHkU3fmu65E7Lx9TDRq1cUSdMJYP5rQm2HfeEN384pUCeZPVHrLTsusMxz6exq3",
  "key10": "3Uf39Xp6kby3hKnPzbtYmfC7bUdii4PzjuPLZrjEL9cQ7j58TQJeqan72SrDQvPKiZYujJpmwh7wVvM7fdoWT33x",
  "key11": "Jkkx9xYaudNEQsfdw1U5c1w7Hp1VQ4XVbFr2eQNXZQKvXjNQrfw8r4v43Dy6pGfNEBnwX3hhJgbjjh5GtBwB7eR",
  "key12": "Ydhj2Vdh5SiycoNSMU19LqJ83pFQQSoJW5ZywhF3Txs2DHjmyFTL6RFgL7HW5AVvhNdn5KDCzCckvpmh3Yusvnk",
  "key13": "3oFLciVs8eTnbXfuAmuSuj1ZyrALtCGq5kq6nsLc73i7MtTzY2YnmbpF74gFXV4stnot8Paxhp2YZWggAToqwX3g",
  "key14": "41BxoFnD2GMLWiJBcTv8yZ4rWJdoHhQCpkJhBenBntyS3Nrq3LjUZdpfPdTyez43x8W4pcpJkzd9b9cWiSix4t2v",
  "key15": "4NzVo3pwwRYoskojU4PBJ5BAzaP4BhfXC5JosbxjaFhPdMxfrQDCxEY4eB1EJYHJEMse8kYeP9vothFZveAwsrCw",
  "key16": "2FBy3YtpvzuTWm3SbrYkDxQ9tbS3SNRUbznRfE9s1dkc7xZGe9Y1oHqficmm2DKWMkKeVFuMB6HZRURwE7TLCMTY",
  "key17": "hRaADisc41psbjf5UZwUU9sdaRL4EvkYC16HyKG1nw8yFjPBFxMv1CgJzHn3Aq3YMmHF88HLog1GJavPSnNnGBJ",
  "key18": "3ZEcXekTcpAkhdQaqW43gdVUSXUbTY6o6Va2dBzLcfcvv8fm2ETNCPFhnz8j4efHKqw7cQeQaqA99DGxJcBubwSA",
  "key19": "3XY5YcTa9pQ7osZwYfV7D4vk53uR1AZs5s9oXoypLWtv8R57oaCa7HZBbMeHvroYbsVVAgeF8Ansb7WXrdHCwhP3",
  "key20": "2guqgwpxXmQv3EUgEL3siawYdpforE3ZthDAesu8GyA9EgY49EhQgTc5TbQqvAkAMjB6ysbGzj7MJUeFoHrSu285",
  "key21": "2CBTerJbJoezY8uR8DCX82doS4XdXG9XToNEdKpmY9HroYwLrJLHUmfkkJTcR5ArvUFShmeyqb9epS1cYXeVqUB2",
  "key22": "4jhz2iSaWgKZRGaHJRVvjkaGYjSy8gWoei91RRCCX28q3VoKKr4JgRwWRqLyzoNdEP3ve6dS6RWD614E3a41fRff",
  "key23": "3EAdc5bcpNJ57zYC8PHYdBrWj4qx96Rj7jhjasQE2rn7JVswqa8iUuaoGyqN6Td3f7BhTGDDG8pdUwaqZb4z7uYF",
  "key24": "4pZ1i8gQ6Gr7BA4Dg8CQFf3ZDYu1zuxQ4uKPDhoNSRNMPAHVcFkP9SfzNC7zhuU4oM3DvCYAZk3rnJ61zQfJ7MkP",
  "key25": "5GDGCAgQCtwpfE74MhKMPBCHkHzTgpxLse4YZR3wxKFR17764q7AG9FczzFGEjEVfXn4FhjMrdof3aNoTL2BDk7j",
  "key26": "3BzGkxnqQUqJkt9ZiwxFvgc7qt2nBe6BpXHrXFS3u3P1ySY7b5hs31TtjkDPExrW7rnCmP14UKpZGhQa7qQcPRWK",
  "key27": "4FQhR1YEGhPExgQ2RsBAzHQsHxLBNEnRYVDpAKNTsQVDLAQw3afPArecqT3QmnfKEQtJSF19AaUrvfPGyDyr3eMZ",
  "key28": "4zQfeqgawto45r8WTj66AdiL2jcgASzUPfoBmQetADrrED7ZyANgXB45oNZaKWg56a1o3sXbCVDh3gGVpZWg1KaY",
  "key29": "4ty66Db33FKe3yk1i4ZVT47xVobNqUcae5WwUE8JpjRocm2VrRBMQfqJTDfaGQcoRqAsdiTxrDNDcAo2eMXcMpUM",
  "key30": "f3GAzmLhXSf6rNquczzUM8FMYFiwyAvBeAYmNZAFpJHkwFeaGkLhnKjivtt3PQzLot1eqAXvPsddoMeLjkwqLUB",
  "key31": "GbctpgEV86nLhfMSrxYEsQVLDeye7Q9Hjv2qkbAh9zh6QJ2gmxpstf9kEema7azQRcxQiV5wPC6ehJ78DLEERjX",
  "key32": "67bNwDgx9TR3iGrr2bmirmSXMFN3mn3hjaQoEsDJ8yraXAk8RNgvu15GqpweX7E1y9sSYHSArWjyTfyg1sjAB5Zf",
  "key33": "7XyrA88GAJD6t9o3M7rvnHjdKtkdfuDXr48BwtG3RfP5PCxXw54wAG3u9bjCkfHYYTif3hzsBQmvZryAk5WUBaP",
  "key34": "4LS461HyvjTZuUo3rRto3EpKNGrUh6M5t6bWcm3tks33byvKp81gsBS1SYfkrhmK2P7AvDnfwwvRBhiNihadmaPq",
  "key35": "2Hqpce6GdKgCb4GmB8AdhjxYiq1vBBj4Nia21hmDYooKbb3W7Qwqf61dZGvEZQP5o2WZoyJfhLkbgmqKj82gryoE",
  "key36": "2P8jbF7ZJBJ3Rtu9EegJu99CLSWD9Wj5LDhEECMyHRXuzDHkTjaj4k4dsgPnYoEBLuL14gtY3QmBWQfADhs2tiK9",
  "key37": "2MBd5y3hozaLrJm89B6nwbAVvtrafTvCD2m9YsPdQeTtTgJeiNAKft74kfj9xeBAoemj1cUH79hDLPNGoy9XqbPB",
  "key38": "2dayy6ESJ77B13qCkxLWQyyFL5Ufj12iuSwrW7uTqihspj8wefpssTy9uMPzikD1S6NHoTjz3LEBCgP4sNLqbD6k",
  "key39": "5cChuS17ZSBnS1KCepfWEZtwM2SxftEqfLB63beEnrSG6xrhz9csUMJ4znv8PUdMkaBcC9EZXAqHxnARLichTUgt",
  "key40": "3yco2JRdvciGuJdwmSkPxBoMm8oXtzYAAgGf8VwX4ZUY7Ems7kZs6io8bKysMQeNywTNm4NuWsp2PqvpuRu8xq2Y",
  "key41": "3sjEvWPqi2bcMiFDVagekoa69BK1XP9jpUDd57FeysQZyhViVcgESaaaXbuUqMX6UzWEfgnnnUCyZ84xgvKCfWgN",
  "key42": "4mJPG7HHNBP7j58rBtAmcTPNuvMU88ebsfpi8kWoZKeZaocuw4pDYb6Nofkhfmb8wJeiCzribpUhpusAroWFP59T",
  "key43": "4zB6pQciTfnqgRisBffRsUXEo6X9th73SJpGe6KwEpc6E5es27wXZvigDYoxJhBMeuHCFNQ7wDJn6N5YRTvXrmej",
  "key44": "3vqvKWNnu6PCnNgtQMfabsw41rgXNysmdQMSN8UNKo5cisgmHps8B7ZKiYUCr4FwVMRg3qPYcPRprJjsR9rMH7xg",
  "key45": "5i6eYcYeA3b7BMBf8pj3EtoxSa91PDE9hjkQYVid3dHTbSXPorP2MCksjzfxvDtDjw6qDN8Pe47buFDYFZpDbwbN",
  "key46": "38tHgbyWQQqh4vHrNVXmhpQ6VjWFYBdCvZaqprErq2iQYUdDAvAMsSFFS2EEUBenCTKbuFXsvMnSv1mJWeQrdhLW",
  "key47": "3oRQZXQ9zfHshWSXpRxHW3dYr8b2NxDaPWBV4oeB6DE5BtT7s5bedj2DcyHmckjEDVdxCWFscKsRZx9gRjRopeH4",
  "key48": "5KyjFV95sB9dhCncHABPpgGfUkr8ka4pHyVYgcWLxgTAjYRTyCT4xtutPxqm1iEHmgrCjQDwwHS9umyWZKG58VsN",
  "key49": "2wDc1m62xaumtcUxgk3Dk3bq6x1S1DyrZbZNZARNRyuooKAAvFNcyMHsHFzxbpZUctW3yqmNLg47DAYLQzQswNEW"
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
