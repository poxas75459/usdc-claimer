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
    "42nva7XxzxwVdEvBwpAEMZp5wqbriXQ4QmUDk66jfzemfzJh2oKb5FWFreQJtrSgdd12zL62k1qbgyAFCg3mZ6ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdzXvKidbEvwCQfQBCrKVS1UTaoDk5s1SA8b2aJUMC9LxajAMVE4RqXtE7PUbAXXxKpSC8SzXBpXFLMc2HxH4hZ",
  "key1": "2XHKbJoMFyPcdEi9WCSe2yPosgroKJAKqdAFYNejpk4BBLZzzuGfUXa9Lhb4Zq17U1erDQ6k6ry2LVdNSteJd33A",
  "key2": "5fszsua27pReEdKjaEzmNS5ENMuE76HN1JRjAXhmv8qQvSTnJxvZqa6pj32uMCC64QgG5XMrRt2oo1hA828U1V9f",
  "key3": "27MtmquY5XN2L2iBkN4Q5u1ie3jDzqHdoCdJrNJuTJgQ3ppFsTDpdwBafLJsQUr7ibwAMpn8As3SvH4LGZoS87RN",
  "key4": "5E3AtEm89ZknWyhncKAVCBdCo7yQM3UmJsRJPiHjfX7u7v9FG87gAqp4gCSJSknYZ8y3cqoQ1LYggjso6ggotSK6",
  "key5": "TUtn6CeVZmSkezxsUip3YZwFhRQ9X999tKphH92LjDrG6qoijbMF8fZkDAgWkwT8UUzMoXtuKuCAnj7TLw2AV57",
  "key6": "2FRvRkV9P1Y594apRZYV2udCq8pwQjyC9rAxiQg4ZbsAUJMKbE3GTKUZkams56icHfWLqpLJEzD1tWeLaHaW74fq",
  "key7": "2Bji6M2dRnFTQqcWvf5NiF4mwrVogTGo9Z5u1PznPEwy5jJDe3r3LsKQYDKM2x63bLYspF8GhymXWoxD5xoveTGN",
  "key8": "UhQV54AEf7vFDwfgoLyvg1mWr3dXCzpMgiAFsbzZTDm4mBedVfmDBGeb3jZR24QynvfbvtXnfwv2AjkdJ6KC8xt",
  "key9": "5mF7m5wPS5PoBUqsk1BSWgGhZK9fcbfNZwR7TCA9i5vAJNtY7tQFRFRma8YjyFA6bMxGaXZNJkS1s1TmaqL5283W",
  "key10": "56KvrhDiGL9rmt698PzZpBBQ3uxV1JgiAdVwfJ7DVGz1f6b79GDjAPAVTSFgvRoWSy1UDjtdRnz94avB2erXXNMj",
  "key11": "5CkQQnBhjuXjLmdMqPXoWY1idUPeJr5hxXCBdXYWxWb6swSZf5YG98mN6MgTYsvEyHDBrimMP78TrJkZhoZ4UdTt",
  "key12": "2VqK1bQrfgAdT8p5cNMgfYBwoduAVcB5bA8mFZxB6k5Td3YzeU8zn69NFhE4yM7M7sdun2o3WXjFfcakQpbqpz8b",
  "key13": "5fWEWVDYseritncVy7wXX1Uf8enp8VPcLxTfYtP1PivT4N6pWaYgTNHRs9Y6bH44EFhv2UZBHAj4c8qchGMTSpm2",
  "key14": "2aqRTS2W2xBCCvxyDD4CDvAwu3tvHoNdg6N8puLVkNWzPqQAijpXgRxLXemBcTpq13VajsYVPzqYFAWQw5MwHVnb",
  "key15": "4EoK68yHLLu1p49ZiuhmthHCpd4rhzX4sZFsJkDM3p8CLa7Yfz6FmbAmZU3sSinQoXw6aYwB3GCk3TXSUwNTpKbu",
  "key16": "4f9gbVJbJWCcsC8K6gh2J5ppTWNcxkynG8FoahX8eefYNopCC5CqV61ngPGACx3zH1RjyS9RUmNTVWjXWdWGVFkE",
  "key17": "8YFYij1rSc4AG8dn7iKRwhEyLj518SSq8DAZZKZAKgSyqoXPUomFEVpPgPoquaiKZupwvxQeMZ1r1np4w33gQW5",
  "key18": "5JE5TKamdc11TqCS1F7Qzh7fg5amJ4PvVu1bK42Mz44SAiNo5m2uPSzzZZrBjTbAZMWzsNyBrkdNxW983uLzvyGy",
  "key19": "4npwQahFzP1R7LBwF1g6zGegJhoXBrmrAog7xRM9qSfCneATTQcqfuLj1QR7XZnQ2WqNgZTMy8xitMtB8CodvWdZ",
  "key20": "4iRcu8PEZu5TqeU5igqCkZQYmv11icym1tiatECE8uCozGWEcCV7y6cFz1AMBzCL8qMsohjCodwoUr9PA1Sfo5tV",
  "key21": "626P9FTaMbbZNjN3pMQw5ZKymMuMfLQUXVYXEoM2Z1bCHU5UVS7dyz5fWRbaWDokVhMDCB8GxAqoEWvhtV6dtSgL",
  "key22": "2LVNKrN6g5F5S3wX2SzZqQnjVVuHgF8tj5uwnUzuACddkyibk5DU8ssnKGf5DqYYohva4ch4pDhsEbcZdiU6H41Y",
  "key23": "65gjB7dPCYtrEQQyeeMcKdd3Tf6B9eTJA1NwdbHHhhufAc5Tg6rUQ4TWk5iKbhuNv3vJeN1Pt5DdoC2QzNYMyiZ1",
  "key24": "ocTAAE9QW4my7v9pEaGNrg2NwGWvEJnEhRzaW6UBh29fnYJqJ1DTbr43p7rSy347ompDGBo3DijK1Bh3QmJDtCu",
  "key25": "47h5a6BS4xD8FrHwu2jXke9UncBFahY2BwQ2eLXeeJYvz4nkpygPxTNDEpGLnW9pur5ie7hTqPaNNgFXJYX5tBjr",
  "key26": "3vBZ6W3KmofXk9c46XjiXvegdYajX31mh9g6fd4QL2pgADosdJ1aWR3zcDaWxHT92TMXqpPN9NPA4wyMz5wqkCBt",
  "key27": "5nbnGXtCwSCt5qjABa4BBqorf7SrKCUNubYJ1DbWaVwHyq6rkU2oZ5HkkRNezbUBB61mTcEUrNpqf24UwB6givmg",
  "key28": "GatEFofowZhWEJPvttXugKHS1ZbXaUpNfzrTomNV5WJ22cHWZHSi2aZ6acwzeKto1j9vmBsMhfDnmSKq1hMJ6xX",
  "key29": "5uBBaz4NbST3TxUWqG4u5H62DhNSAGpKuNyF1FoKVRvBHNAincsYc6NMjBEWVUW9ktNfiwNNutYFCngtkLa36SzP",
  "key30": "2oipzMjoVRz4WhJ7XTJ4zKZVFeNng22GxotPDtrS2uKPJGqpAg4yW1qx8Red1si75wiJA6uxG4hCQT3MKVHsDZ2z",
  "key31": "4Cpmjd7gS6zzHxZXWc6hfv176VTZohHzrSdrSpvhHbR1jVHJbtrL7VgfenDokWSnDRZzEowti17EvyHFgLVV4vuL",
  "key32": "qaPGJqdRTrU5iH61p8nen4GYUKtzZqMSqvXXg73QVTPyYyXdWgmA9YhBjJzPgKZi44Z21nLoAMXMidNttKszZMU",
  "key33": "3BzgagJzwSkNbMmAu7Pm5BiMGthtS63MErNFdGkR1uin3BNsAdD4tR57sagfYWd4qsdigSCCAuHUXoS2NmnRQs9c",
  "key34": "2mL4qJgzVJHC9XLwHhh61S6Po12HdkH6aDBNkA7sSMQe8FPSy5B5WoPBWqtjP1KSPweGkhCFQXb2stpQEbskAcRs",
  "key35": "4uunnmWNWiLGKbdqjTfUHj4L62Ey9o2QTSf5f8S2a6W5GwnyKxsATpL4zGRZd4QgZqtP9sDi9nGnNZSUqmKs5j2A",
  "key36": "5KzXTfuqemd68NxARLA99aTUAfNiA5oJb64T52VstyUkG8DJV5gTnukCC9t995Emvb9jqTo97ojDXw69sKECoMSs",
  "key37": "3J3ADPfP5Au2jJgNydFySkHvBRdPYmtPP7Leo5ZBgZdQvYRJU9KScJGMVEUKsJesEzg18s4otfEMGH7KLrAuDkoS",
  "key38": "45Zam5R4sjAp2wnmi3pb2TM3J9KMRLaT4Zqkbukh59KyKyYjG3rvxg6kqX7GeCknQNKRqMaJVZN1omoQyKsveW1T",
  "key39": "4mAFM4bkTsnPvneh3texkMMY1moFrezRbhp8bRXVyAnJ7iHwb7mytJVTr4kPueqtUoVERE8CnQ2tmBNHz2F4DRdL",
  "key40": "5UqNAJhxCQKZEus9mqZoh3EYXYDzkFCNhdstpF8TzqknX5d5EawMabG65Fc61QT5cDa37Sg1Pms1MvK6vpJckJCz",
  "key41": "5kNrnNHYNr7NSH1LmevqVs4iVnFx7aXgrQLCcBjsZpazxBUf4p3zVkvfZZ3hYkU1iWBznAJE9oFQ4bppmdVKHufh",
  "key42": "5VrgEZrpr7AwELKJJbyREVgGJHakK2G3e68DLERVQfNiJuehtJLMrpm7SkrAZtjKmpr7EhiRh8rncS7mpZCMsaLD",
  "key43": "4cp4BEQhcYej8eKqUHoJ7eqpxou8n7gjLPj5cjBoAA4rFT253fRf91FAjKBCAHNN56PHvsBNLFvGFdiBa677VChj",
  "key44": "4Caobt5wKKq8e4fRstu54u9JgTE26rgYFCApT5h8mTU3aguvvTV1Xt9HUpeZS2yyoDtYnS29BYKnXo8vCAoVheEF",
  "key45": "5LuqDuuq76C1NcwQTS3J2Z3gF5daSKJxpoHMBY7jGkCaqecZZSVyeENdxpPPvDKBKqas6fXp9HySEEgKuH9x3jZT",
  "key46": "4h2Wy8GE6ccQjbMi9nR77d7VETb9jEVHAiqU1DinMpzZUEChK2FZFprzSWjHgXY53XQLHM9gtPYu3KVJgZ76vguV",
  "key47": "LT94RKJBPZrWVTCBbLiwvqavgDNHwWjuTJP1eiYoFeJgi1CRuujCitn7T1cW4hF6JEQSEyqxXA1RmsSK9XnBjbz"
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
