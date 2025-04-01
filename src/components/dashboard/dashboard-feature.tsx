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
    "3S2NBW7SDursFyVJUCUjrdSiiJN7Dw1bV5xi6neiWZGDWBtDAea3VoaEax5JZnsBmsr3TiCbxmKuPKkb65VU9J8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3NPwNfQq8Ypnn6D7vd1Uor8JDp4KmSX1DqMVYBX8GqSYmrqUxnABybtSByxmE6xjjehsXUPkiumEQV47FvV6U6",
  "key1": "3AFh8a2mAVNDnwLdtAWDX8SdJ7T7iQ8HW2EoG1Cpn9GTTMFUwercMHAQ3TK6w3XYRqJ7gAmowSRsZtJK3XBuvFY1",
  "key2": "2BhywtYKsCJapKjk7JUx9epNX1uKRmzwsemPn1DGdDBtP7GENTkikMibajq636YqngwbesefxGzvieuH1jbHbyYa",
  "key3": "dKs8xLQ1kySa7Max9TKujPLbAtcSGc13fz7FRkvycDpfHtYj614Je1J66RvEL9UbhE3TNQPVixquaCKSgg3Pdcu",
  "key4": "7bhc9YPU7QsM4miF7cSSQEV1QowKiou91tHcV1xekqRTcMQ2QSpiTtZTATduo8XsBburDwq3TcWaoxtekQyLhKn",
  "key5": "4KNmhSQXykTEoPheWq4kAqqaXb9dS5DhQzWtku2tPtqsnMKZTTEbpAYLvAvTfCB1NEoebSGw1k3LEnmVCQbdzGua",
  "key6": "3udSWkXHjgZnLVCt33YW7r6ra63J1xQ5dq1vrZCqD1Txnm4kG4gAfBKsWX6vqFWFwsoQmStd6ZNRUCfeaqqFqq5S",
  "key7": "5obkxHKbe7fFLNyYUen57Z3kdwU1df2t1GFvREiSYwnZoFK3mjNTn5Kv3U7ucdvMaMYFamNeVF2LViFn2Sqom2eY",
  "key8": "3Gy95191C362o8LDKaitDBEp1x6Qgt3Ngi19iFz9onMbkhvfAoXQVTtdrfr6biExQX9H42FZurBeuv9Z2UE1mKkZ",
  "key9": "2HPnc1Q3niC4S8bB3LZHKk8TzeH4siR6TP7rDijrZLMczYogDMRTGTjF5X5JHXLtXepirbCyfGTGzSvmSXFuKTSH",
  "key10": "AePznBnZ27Vk1YbFPGqwvDVxPyRTAUdUMQX3PzKY1SPyPRp2oYC4s67e9GQMcPHzAb1J3PB3FWMpFqMrMGybWjk",
  "key11": "53dXKhchj1cFfC3oKTTyNT9MtAu7PiWP6QANxMZJo8toRxbe7TY6YGepajY3ptEgFjhmrqiNQ29pDtBvKNcJKYTP",
  "key12": "5qZQNhSYicjEFFYdUNw1Gbgpx3EiZbNm3Kc49EuuA6gN6qSrE3je5drU4jvpkYCcc42BB2xRxsMcdDXARkX3F7Jh",
  "key13": "3po22mAwfqxobvNvk6doCnmC2MF4or2UqxsrPWK66ahSUrfuMjpwnxfZadsDKpszWCXYSeegMFReFh8ai7zYKvfg",
  "key14": "vtBd1H1gycQ6zKJfnR58k44BoCqiCgHQZXA2WXJrBjiBGZ6BdT3F6b4cj4VrDVrCiam542LzLEbw22BofXQHEMp",
  "key15": "4kbY1djeLihkDWsFqa34W1qpf6Ux8dB7b7jnAcHbbBSjGTuENhTnspU8iWAbniz2BkYeHD9yFh3jYPiL5yAmL3G8",
  "key16": "5jyawT4cZwoEk2Xpty6G8qZkAtzrMrXmhMtLteWVzWd5jcgMVHvxfTivvQFMqgUkkL8iE2gfN7DS5D7v8D3HPoga",
  "key17": "4FzQpEVmQkGiHxuFG38bJwx2GFwtK1e3TNReJERTTKJkwevods779M9A2bJup1vDV1SuYwsvo9Y53ggG4Fe3jCLc",
  "key18": "3Fc1xbdZg2YTFJSvQ592RsXBkVctVjAHi8JoibsuGur8PMCnZsbAjRojQnubQrGzSTeREzNZHWyutzkN5n6iQXuW",
  "key19": "2owHeNf4CtFP1YE26NqAj5byqCGCkJRHjteJ92WitvJkG3FYsNMdwk4UjgajVw2Z1359g27Lr7Y74ABPuGsDUepB",
  "key20": "Fx3NmprG1Bu1rVgVKT61j1GYgx8DPHSUjSVYrgAzUB5uWL5VHVhi2qxEmGRnvYYcD83SbPAHVgKuf2qbns7w6R1",
  "key21": "4Bk5JVwL7TYuPqaGpZCM63an1a2tbD1h91KHqoD2o3AiTd5PuYUy3zPF6Ra95v8gF1u42dqXiNtvjqwAs341ee1W",
  "key22": "3odFRk9dpqae9HJAbwghBHTc2ky54kJkKisbMLcUU91ggyuxCW1exHTLRaYPhiJ8iiqMRSQQqKspQ4C9NQTXEgfi",
  "key23": "8Civ34rDc2Bmr9w6h6TBZKW4ySrxtWXgYf3DiSqcSF8VjkMEXEko5ob4oP8Q9h3EAuoJo7GJ2GmCBNnGNprc9Wy",
  "key24": "2exH62HVUr4QtL4Uc9VtecoNk3hxDtLC4DgRmd8ezb19Y1guRHpavPqoA6Ven5UCraEPfQNBaEZQyi7GG5wjrBhS",
  "key25": "4GGy7tZbfEsqmGxcmNhTQ7iQAZgLi1fX33CrYAhWsSwDPQjruSUwnURygpujK7UUi7Bxg1ednAQutXyNdr3AFi5n",
  "key26": "4mwc2iiqt6W2hYQBD1SD4fHqp25PqvSPmJ9pNLLUpS31UGwTb55pLXvosPybeM9dbzZxfVX57WvwaJ6UHgjvvuDr",
  "key27": "3FtR7yX7gRzU2FnnoYBUfPzdAhqWshde7CbmDq1q34kfWx9obaH7K2UipYCVLZBkcbVNx78ET7UFqhkhmr6pgfz7",
  "key28": "2xmB9J3qRvwZ9EhuWd8iRFsWPWXJ4CcdPdzSDHtbeUZdr4jFhmtKYD8wHVqhA7HpB5oHs6js2yKutoVnaBjuukch",
  "key29": "4pb39AUW3i5jnsDAM7bZcJVtHz3PLAzgmJX86QN5RAMAFqt5iTi4nPwuTLS6xo4HfR7c3wmLz7NXEwtJNNtTES9K",
  "key30": "3fXrgNg4HmXvFggGdXVHrNrMXzzgEFJVDUkmSEuSv7fWpP4TeHefR3DQkVKzym5ewPYThJJEKucDi1FESCr7uQG3",
  "key31": "4n8sg9NN9bgU195HoUC81JCT5A37A83VBqsTPgEP9B5gXA99PkiqJHJxUM4xQPJkhmPqopnpiC3HQW32DngTnWmc",
  "key32": "CiMr2PfoGx5uPM4E5hYQ3z5PrfACSuSx9UUzNxKBgiSqUCcuPZNKioCvLf41beWnHw5sMshpfz8tw1uq61quxop",
  "key33": "5wfo8UoKB6at56qMZMPbuqG6TswfcRnYe4Pp3PeEKgv4xynAhNf4SCeATiYVy6mzSvWEkVmtf1ZWxys2fY25w1cB",
  "key34": "5yanMQxrEHm6VByYiQxrSaijutZFDBywgbykdthnhBAvfwa5ajv8Ws6TEq8oRurA2L5qsnUxTJ1xg8uMsDvBs1vz",
  "key35": "3xDF2zwvDSMzbhjTaWKw5RxHRrVhR5JoywRfX2Ge2hM5UeA3j4cSr8tcS5JWuRLtmYGsQMCXbjzSEZZa6Y1vGhps",
  "key36": "3xfx8y6Phs5wmrj6iSCN7xhekcUAEnmKqXN1WDcRkZpRZXuobiYM1MnEs15LFc7NyFNNeyDMxwrHF2gSRsD8NabW",
  "key37": "24fdDcSRGmBVDmHCFdcR34K9hMHsDiEYnDBMjTqj72jDmespAB58RZD4dKGKsftWGy4XbUV9oGuqztznazyQg5x8",
  "key38": "2srTiTCVE16NcJt2UbJ4hru5n2k85mvGNDe7AWnGpqQdcWLsrPFAaSSqkFTfdR6ejZeTxST9BbxvGFZpLZogPFLJ",
  "key39": "exWPEZXxGhUk2FB1Jb38Umg2AoMb6nptHFSs9D8VBvPniYfdMLMAtrKd8AhBkBSz4eM4LAXikrHBvSkL83oqas9"
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
