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
    "2FDJeBLWcgF954AVRrp7vSUpyZGzf6fkaYhjz6Jhfisd9TBW5ScMvKW4aNDJ5vDFXmZBQn8N3zhmErJbSJyqQofR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aVfDUjTDkw6eAhXNXe3naTyUnhrLZSEp2N1YVBTJPbf2XTt7C1DnZpZfVvMJuwk8Nh3iJCcVTGT8jM95yHJuGJ",
  "key1": "23GcBFHnjfqiA9rC94wkfHTX4WZHrtpG9oowUk1YubkXhGwZART3ePbjXpdcL8TaPD2QobV3LZ4dp6BJStR8bVy4",
  "key2": "4cwiLFvQctSiqVbSKx6JUrbrR4yrUrpQHt14Y6nFapBsp5zNqPZFKgm5GPKe3ZhidzDWK4sqqTGSp7Lht4AGJLzE",
  "key3": "2d7z5p8NifwszZkseNRZhMDafh8t96MWc55SPhEUmpPEa6qNQJe5vGi3nJVzsBf6CRUKJsBCxMqPf9nDraSmM2cx",
  "key4": "4qZjaKwL4HfpCxPz4m3bgk5K2Vv29pP2Fm2rFRDo4UGR6RmyNWqxAB9qyQTxKLZS9JLoGZHKxb5ZZGwLbHrpKV6E",
  "key5": "4AH4LGqQ6HCPRonhniz8z2ZTw3yGXPaZyjkPg1RiNE7g9Q5eZ1RMW3JyXkiPvMCrqvKVwkZU2jajxJ4SEz4BxJg2",
  "key6": "3XZPCC1cxSjGcU15g8mNgsYDswxBrPV8R1q4RzCVSotcBktFjTzaigHd9QBwiiSYHiSjd54xBvgrpHCR2U7pU3o2",
  "key7": "2e4EaaCWfH56LSzDUTw81XkZf6TyNm9yv8LBoQmSHUp6wteMaQ5ZWe6CvReQxuk56UpisAj6dXyfdwK6nW14M4Wk",
  "key8": "5KzvytCvE1Kecs1mWmHf7XaGQnHfweQRBPBFg8LoPwfcFwyTLimAyG83EDhT659PJ5g5hcCEMmLCKDiZmKdsu2rp",
  "key9": "3syfeGUEam3F7LVewABTyVriojszc4YeCFgf6pHjTEP55YBDXeRhNLvSKDVXoBLwKbsn9eMzdtKSk595pMdGbY4n",
  "key10": "2sUa1BCFav5QUV3zzWH9dHo7ajbMtawghuDxSsBwuUrBka4yiTJTB7hhh9Lqk6wBb5MYiGN2feKDB7YBTHP5aKmb",
  "key11": "25ccwjVkeh34wJGif47sQNSMWJA8A9j3zncVG4s4Sr5f6k3e5mwLKC1ygePYJwRzwWzwyxEqc5s95rkS8AGKgKXN",
  "key12": "4Mm1TEicEd9r1epwTmNJdcfehUWir68g6DHEtw2tLuwhJyc1R1SQmAUyfLuyA1V4gPWMxsHppiVcDUQ9DggTjcsR",
  "key13": "3vLJVgKRthshDQHBRCkj6CXWmqDJ9SpPLh2AhakQvesfCiRxgdV2ExmZYiQwFhzhdKQM28uWYp4vC4bEgyV52mFn",
  "key14": "22Z5VSC8N9toPKfMuQAk3qxt2VKAGfMMbHgE4cX8jvvnvtSsMhuVmKKBJ6u7PRM9XVCrVPMdjnJ633H8RApXnvQE",
  "key15": "3UUSUb6JarSymBTXJYixk3sd4xq5zgwr65dYEDhj6uvV11j1zU6xkMpejTQX2aFQU2HA3m63UN5EF6FhyaYjqWhG",
  "key16": "62KQaiDMWwxdc2mfXGMVdPJtwkNHDEURe3xDnHkQAeSuYA3x7BFKf9WPwwnQRsv8xQMBngDHBnEQqvYMqRfgYvz4",
  "key17": "4LUjdyhW7TXjC1APcq6UYgf1wPSHigSreG5fnDrjrTbQJJycP9PsJAheBVjEmoqy6LSftMPbnrUZdkSusKzfEsDA",
  "key18": "5ZwYPKRUTHYuYZwmsgnBXd12RiDeqbrgPrZ7FXcqP51sS238qRK4TgKUdUVRB3QYCJFTKPZWHdkbNKem9mNbiv85",
  "key19": "4ZjWBvqFm5yXWbWDuuWs9LNPadEMjREu9fU7fDtRrppuhhZMdhC6xUZqiZmAMLuM7RMPMeZuV29yar4xgvjrZtQh",
  "key20": "2YT6iT7zwGHUbDW4a4MEamEzrPNDBL5GKDfs93rFGUDZ9E7yC3X8xDv6tEbbPAyWdyj9WrFAQMdHXawHwzkQzFg3",
  "key21": "5FRYWRwtKC6GpBsPa2dXkg1hMUbEm6VgP9fdu1r8DtBWm7jZoYWVGSNhqAWc7hw5JwXNoJzhDhRasDCMdyDkF5qn",
  "key22": "4LHU5XK4zr5ghUbxwneBgqMUTqqaUeeLDH7TmUa5ismN5MGijQrWQLGn2MCtBcet5BLWSn1USKLk16ejmAg1dBzz",
  "key23": "o43oX2qYLcCBZUqmrmWvrDfCbp2JcGiLUTxCi5VAZfFMWMQmAgveuGnMXkBU5eGb89LWHhpSavpcJ73YDJHzmst",
  "key24": "5A4UDLA4hJ7tZne34Pnh82oj5DNJAaGbA2rwL6LNkiH3mxbxfCJgnGDqGPpp86ut36LT2FKzbfzZA7U8kwB1f5T8",
  "key25": "4qSW6BBciegixLUUMPV7XHTRHeUxSpwLJZi1HW2MburUrzn1Z6XNXsBixKej66ha4RpPbq3JrEDxWRfKrwqa1KKz",
  "key26": "2zwhM4gEAMust4WDLVTfjiN2UpBkZRXCkd4MncWkJ4c1skeec2fD2ygHLVjHKx7nAwLLKofBLnUv6BsA7suSuyec",
  "key27": "3G5zScxg2vrUVFwBadakxYzjkiCFYgdaoQnLeVrPtBwLnxrGQeZc6uidfUjireGthEtokizcbnWHJJX8MTtLLCVf",
  "key28": "3EDGhQo7vGM5YEjPbMpDp1U5Q37ZfPLJMtTir9ZjRnapLswccDtthtrQ6niXf7npWCnvH3K5rsNypVn4QU9B8TZP",
  "key29": "2d9tNA3SVwCNAdQTdh3WWJ5Ycca6Na43tUsZy9MP9mH23NvKhrRiACjzJp5T2GKgw7eyosvxiiiNk8HiFCNkj8he",
  "key30": "ZzRSwqpF2wt5HoXUihJFqcDCkbEYDHK2nzMBpqZLSUpeuRibf5YSgoMpFRjMK8NiMxQoL4HNcCvyMoy3hFYaE6b",
  "key31": "5aL8r6pZyRT61bSkKb2jmpgFc65MQcqSzXRpudtQYRMrTk9Cuerq2RJ5bH4bTZEdqgPjBrTQ78XU6TcjJau5Tjcz",
  "key32": "2SAVsF3jmSgB6Qu1khrMWiLAwgMv4HPH4Ju2Tbx6QoELNp8XeH8DuJJpDd3bGGN3rW6hhgcGPjfNEWv7ju551UH4",
  "key33": "33o7ozZBHb94ApqquoWRTsao8Qc5FeDis4G343uVS7VpPz8yBjswY3skdyuvN8d8ZB9JZLU6JUfNXFFimLMBxuX3",
  "key34": "RZru8bHb2u35kf5ZSKQiDqkAzx1ng3CcCSbw639RNMwk6LsNeDyEiViWkLVGBKtkyL3cNb3nAMsnFSNKzE23CGN",
  "key35": "4cseVSZQaHCtczpzMwBfpy4LNatDjavUh5yp8vSPUyM219AsupukJWkS521i6rFv81kRLfs4NatTdmYBy9ftS8LD"
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
