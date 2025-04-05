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
    "3kNTAoTeyXSY39SVhxwxEi5junbfahD15iaSvFiHjemwDZxrsb8n4PRguzWnwRA2kDky8wao51M4CMtBbK76cJiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LMbmd6RomdXP8NBPZ482cXzxWARKZGuUzPGR7pxBhknBjray4oBoPZB8q58XbSXsNYYb6RjycXAxsaHQvQn3RP",
  "key1": "Q1MnGYR5qHLig6pFwfPdpzw4Nib1csFhV6L382gY83MEhX3d3S42L7KjzwuB8hdCsdGDAXEYLN62ArYqkCufPmB",
  "key2": "5SCHRwNV2LFraQceF6DczP4YGjqaDZxS1uU2qUiUQjLYZmgkKCh4DNryxWQP4koLQRmyire8B1uDF1U32bLwVDHB",
  "key3": "3Awz9EVhWoWGaCeyLBcj73Rpab2F5asndySkS3ezQPHbmNbsh94o6uhMNZVZwakKSotkbjn8nvbE9xMq1yjqzHNS",
  "key4": "4YCEd2pLBq77SsRYayFBEZUHNrGVxyYxmtjEUgwSwj5teLLbQwe5HXZRRSXSfMUrxuvcuzMCn3TnVPJ5pk1x6yJS",
  "key5": "3VbcX8Ch4Gz4irytZADfgYqy5THj8xckWfVG3Tddq7teC4ubjYQxszQX3K2nKCmSpzKAjbeCSxXA1Eo1PG4yoXTw",
  "key6": "2ccRuLM5cY44MdX2EENFCTijWfQfKkdmsPhHZhuDtEixSTiKK77k9t2ojDVXuCDg61Fc18RTRxccHU3tSRtqeF5y",
  "key7": "3bu9ajfJUkqWhZihTRyvpWo7KW3aR6foBaCWztTRiGSbE4QxYbGfQBUS26B7fv2CpMy98sZnt314XfDbDBHhMtnt",
  "key8": "KgWHkr5nReFkghnmsDuB2BHPTCHmURSm8UehdqnwurrkXXdkG4E5ib6cqrve8nbr1GWQiPX8ogrR4DiLNUWTm6e",
  "key9": "3BtPQVDpe9G8rRyTFhasrtDMaKTi98PZVmcJEHjN7tf3wo8Gt8H2NmgLMwW1eGgmT1WDwqULC5FVQZ3GKyP7J3yd",
  "key10": "JbQZnaKZ5hTrEw9uauB44w4hk2wBCGPtHemoRZY4j8XK3WZQqyyz6EdS3UqCtLxw3R9kaAJrbXbZNzvP3NB4fNo",
  "key11": "3G4NW7EijjSnEHdvdBd8BwD6ArEYK2u5ijwKtJ3SxgkQbvW2eJb4iEgqpqEEJaXjY6C5ezMEYD5scEYSEwFXd397",
  "key12": "58jBkoiAqa6eKW9jt5Mgjs9ms9qJWvjQ5Te2MX6okP1ABfdgE4FGQQncXzh3o6jPnuqBvtpULUqY4yNQWoz8fXkD",
  "key13": "SJmKCtBF7DjLQ3BUBtBgJQNRGxqhQx1o6dKCGYjXfDfxr9jgxyEiN86tsPrqwxb689gaWvd5eXNc53uKjVBdqJL",
  "key14": "3iP4DYwqyzVgvbPkW5Cg9aV6kPUkP7JGdbiaBxDkp5RiygeN9P4tSyujzhWw6d9kB6PGEDFnSLZh2zhFT7bptg5L",
  "key15": "3hUTuaHdnjD2LWzA4TzJZXrdv4e6xumazkDibZyaupyWKMztY7by3HJdb2MBXFsnH63h6UjgWgJnKAC11MAZYauA",
  "key16": "3SPFe9GB9Cj4XsKPTFCPvPBpGzVJcFd7fiqw57AQoQqreBSWKHDeP6NFRNTZytSXjTjpU7aqwU6ZfACAoWmzbokw",
  "key17": "35MuqGN2zjj4JmixjCwDSwKG2nsuo7nTU1urZb1ruNtpi4XHnaodBEPnWHSDTFaZ27n8sHE4s4ZtBRB9KSvA2AxQ",
  "key18": "4sJ3bsMeC3Y35Q2cR7iu7WYfWfAFzqLptEpKai791t6bBp35GUFnTJSLRssguAHC2iGCbcGsTXQSyjVksxYZ9siu",
  "key19": "5BNS8FBEnZYUhWTQe1Wc77VEzLXbv8ampL7CxdVcmkJCaJw4rVZSeguRVe35pAqGV8Jvo4jBzCfy5VVLaYGrCv6K",
  "key20": "4Xo76f83CsDpA8cWybcCpofCrEJpbGsPoQFXwL7SujGfBvNiNAkqpxG7mnWBFuQGZZ7A2iQWfPpHCBJgsSeWEuJL",
  "key21": "2w8D2CGYrPByQ15bqBdSUYg4BGu2rZUZ3LmK5AgnFWjfeohUTZDUCHzpbkCjVPLMuhcHXydjZ331ZUNEWoxLQaaR",
  "key22": "32tBV87a851SQm5YTPwp9VWJDwtccp1WWRPaWyRxHT5Xxn2FJigwWot8kAQuMHqHrR9NmWpNVBYZD9qBr5k62RzY",
  "key23": "4UN65siJ7iXgkm5eyF4Mjv9rFvSm2KHCorEsaX1Afpb8FVDNy7kEyXeAWVh8VpUX1FgZbU1tbSPu82NMdvQHRPaT",
  "key24": "2Bus3KH8DHMah2au4Prqxcy5orwq3FUhNqaFi4rUzLwtNrDWMcmQnLMVaWosPUUscKU3LuCETqymdNcDcyNjjEow",
  "key25": "4iyukLpwAqx4yN7SpiK8p74Wdjn8sxWbW1wmk51256XTGqL129U1JykAsWEkgpz3nBp7kknyjsyBMkET17gRjUje",
  "key26": "3XBHG2Ziym63VfPLSoCbsSFnz6v2T47HK1THCdPPpW3qEwsxn63ZhSiRrrhNbPi8kyJreLyZZwSS2F9tGhbD5iWg",
  "key27": "3ZGpN7DVYVqCusDR6UixHk4ZHFLGDu2ATE5tq8rgh4DL6cBBXzcJeRpVa2c41j3C9L4M79TXQ8TeWw2b9x52e4DN",
  "key28": "2gHwqCD7b3NQBy97hzLgSKYHy77ZZdS9HNpxriwhPGXHWFkf2YaaUtzXjXvG3FxRtPDMWZoSiLngn76JT8SVH1SU",
  "key29": "js9mtQHcerQm3HbYSeYe3VgPPs2Uh3bdTqjUTkLYQxudjRACbEX2kNtncs3FNbJ5zEQsZd65bh9QmPotTmrgCA2",
  "key30": "4GGN7eA5n3h2wNnNfRj1dCDpCixHWCBfMjr9BU3jshrD7iWomp7HQWijiFSC8HpgSQ8WyYxWsuCF58QQaACapihP",
  "key31": "5fkULb5mx4Dm1E1VUbNoZr1GtCN7DCtdnYub2Acgi4U2WCsWvdh1EefyY64n8M52Gjg95XV5doogw4jDndd2WAS3",
  "key32": "3PWBAn6vgWEDmkQgapseUbuZVHkgS65datXVqoSV7uaWaDZiCrBj7nfHqDwDvFYNnLoRpYek4BZPU2VkRjmaDr6v",
  "key33": "54aZzKEgdErEjb9dV2cwendqvGYLth2Q7SBpuoeGcj2fM6w7gkxnDXR8gypbAvv5HVREFK1dX2d46T9YUKo76HGC",
  "key34": "2K6qLJdZ6At5YtYH2VGWP9UoGyBm4YPckfPrbuZftFdtPWgnaCMp9H58hoRWUj7qBtdT73SHka95LKryVauJTBeo",
  "key35": "2FN1s6WpDkQrU68fy4teTZHYbTXGB4d9FhbXLMf6LLKRTJti8FbbZheG8bvg427nsZK8WYceqWo562h3YNRFQerb",
  "key36": "3ip8t8e4yLUMbw8q5AWDRQh1vMHco65A4HfNMs1KRHu11ASFqxy5wm4RCB3XVQQhHNa3E6HdNQVAYPByrMQnLkM1",
  "key37": "q5QcwY7ZD8TobZP1Aeddih5HHzFSEmr1xUD9MuLFhSSeKt4ZAoCNgboK8KjFxnSpfQCxvmgNGmHTfnNRcSbgbJA",
  "key38": "4pDY58aBfdNqHHGW7UB7FbSbbKQLt8XrbCtgZccD178hJQ6M5RCL1ftx7f6p3QiZZvJPPxi18HRJFG5e4cr3yiJf",
  "key39": "22oNrRmLf38hY9gWY9MbMtAxHZXF6YdQcerxannb3v5pQWUMwtyL1LKh1FhA5AF2XTktmihrmy9ZZaon3DK7oUbw",
  "key40": "2bR9U1VHwPPXhQcfuoyzLiSdcV5g8DZek4jfByByH2QxihmCYu4cdy96ghmrYvySCDWijJgxPttZXmEv1Y9Zt2JD",
  "key41": "3sKFDEYnzHVAz4draERNnKZKFMphHiXUhrejJeVtjyeGepaAuLhZM4KdRzoFmKXqiX342DckaMdTqb56HfAwmXUK",
  "key42": "3TyoB7s7WhEubuQShkTkuCWKxTgAm7hgiML2r2BKT2qAaaaf4RCLn9AsxAMcgwAWQAfZ2PhyudUr39G3YS6cLPPq",
  "key43": "4sYv3GtHfGoXxRwQLcWUaLqVtMgnwE3SyJcNhFxcKnsqKoHcC4ZsSrgHJ6Bk8TJEws3MK6USq2ZL3r4HjEhouRiF",
  "key44": "3V1piTGVGaJBas2U8gJ4Ck8vUsuZnqnH5hxbpnuxKjvhqLgecb2zN18e3JzN9rYKfWUhB8AU3thXxmQqR8zWLjXG",
  "key45": "2WMhwH1CXE3wxT8B6up6HybQfoJybuP6o8s9TAbwDCybj3VZijGD1xojYRKBxF2NsRSf9u1TAEPTs9edfKk8p27v",
  "key46": "3N4d66bUnVhrhStRsR1thdGgBJMpoDQD246ZkrC9whXmsAfrZe6DiV9uUBRH4tW1giy2UuVMhBaGJyQwy8z4T22Q",
  "key47": "2nkWg8ACRwuJLXheGwD9wDPRh8yRr2CUEPaCdoFr2CEGq2XZC1vgoKhG3ns6TNAsWQG7gV5mfTWxGvWNxNrYH6vM",
  "key48": "2DBNp184WEnnh77WUyREcmddNfgX9SF4mYSao7oPP7QknqP8YWQgxbbG6RsPqA4CyRvVxX5JHtbeU1ox3c58UFhY",
  "key49": "359iSL9DmqAMVNgFSoG3fPyquTSBXknccLbdcQKmrrqU2k6SXtjVsRRQdXvXs7JjBPZSX3LASiVe42N7iS35KWLG"
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
