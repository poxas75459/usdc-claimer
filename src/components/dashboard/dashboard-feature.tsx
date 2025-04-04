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
    "4TBkvhSb1tV2m1A5WSBYY9vi9fq63XG2GnMbVvvf9GDzwB3XWT6VfSZh4NTWQpTv4QTKsb4xamnEHCH9Cbg47bqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PzC7y7FtcC8fSgqi7PpNBmqE2RG8SJTmFo3GNR7uXCcpL9UUvxVgfFFYnKqo55MqND6xvEtvafTMR5brpgcve9Q",
  "key1": "3W4zRyssR2RgeTK7eCft366eiB3edS8iQtNR2TUJK25TietK76rAo8t9dMDHXSQLMPJgWxcchic4ZioUMKMjrDWR",
  "key2": "Gzcvq1vNU5DD69CDdtTpk38qtgvtNJ6srtNtHR54sEiFG9V4S3n5xgEx2i6fGovEjrvdd95g5mhy6TUyGNiypxQ",
  "key3": "p4DXx8Bd6vnVuRVWDzqFAwgW6mqM8qQwzD245kmU3gc8mh9AaG8KLmNYULQnVtirAMMew4cZEgXoJ3voqe8gXoe",
  "key4": "5xwyNTi24gm6mKCKp9dThu9mWBB5MsFQ8DggGJB8vUuz8CizdkWSWvaoK75FDhQrvTag7vcEbSQUEZSFZ3VXhRxb",
  "key5": "4gJqvFYj6Jj5vwyywcyXZRtp64ZLW4s6P8iSWngRzbpDGjEnmoz1H2Chnps5QWwE5uWQnGw6h57DjnVjMqnf7Ygw",
  "key6": "2XPw28XW7DzcjE3hGcAiWU7JWNm8ywNdBfGxKUWbkFcEbmwaogyHhe2ZXHsKc4WJSt6kByByN99KQK9SYtVmtWow",
  "key7": "2zv1sWY1gDHqjz6Rh4HdWwoYG95bD1fjcbJbgyoNVFTo2LLnoexeVYiAtNQmZADvG9MdcfXWn9Y1oc5fizgoqgvG",
  "key8": "uhnVWMZwfAjiZ5MjTbm1w9AAzXtU63FDyew6n7PyHUbbAPnkbuVRK8aaXD16fEydiv3Bc2hmc3bpJaVAdhpsTZS",
  "key9": "2BsWFVV7G6vkDCrgyoeB1jj6qWiVo4m7B1vJSGMRbbGEdQUP6Vj46EQjYiEzDZb58DqkxmYfv7tbLaTZ8AJgfwAr",
  "key10": "5VhJeNjdXvQdCZxd7RcWkjxxxYHhicV1UFL5NEVLt9Gm9rFGat18Pg7yCQMxUwJiRUyee4EA41KC737dy2M7E9Tc",
  "key11": "4c79fThjpc1G3JPn3uArGMuHYEJ12ZBFzneb5Rf2WuyqyLXZJ4myhrrbeLhLcbTZvJhEVjV171x3ko2FUHJkLjj7",
  "key12": "2QMbkZM6fZqabnW32WidsogapfFmkZe1rAgQgtK2A6boJcidCqBUmJFBWwJxMWWPjS4RsCe64YdYZY2WF6nFU8Q1",
  "key13": "3Ub2T9hARKopc6TYekC6vavM2352Lajdq5xxkjQ5M1QGhqdRd18S6v8rpj2n6B9TzooY9ty6k8odWEDavgPWoEz6",
  "key14": "2E9n6QJmN4PwJtjdWVFueQKeyXAVgyowZY196H2f1eQztoBQdokhP3kLJmwri71ZUt4vUMikqntXR8aZiP7XLrbH",
  "key15": "xnbzHYcQeWJWJ7g7L9MQJtUwrcDZMndtd839vMMZyBpcod8mHjnpvzRtQ3CcXZDVmY9UENxGyvZKGnejgC3Awcb",
  "key16": "2xSYxfzDe48DQEj4vkFvturfLBfekqX8vhwKYHRRESgRrWKA8vpP6BopMi3CfFTuMCyvkdu5PeS9ypP5Qs3rXgn5",
  "key17": "3nhKCCpMmohr27VfQ6nwCjYjzZA8iUN6UdvWnSwFyQCXqGSvAiY8KVUYjNCz5b3v77iJ6Xy6ekPFLdJcL7hEt4Qi",
  "key18": "2XR1Cp1M6ND5Y24gTUTVjmZmQAeKZ6ta5L3CQGFbgXxkHtWvNHXXLvYnQMeHiddwUfHvqQTXu6k6xeYHPMoe13ig",
  "key19": "2svWmynpbbCBuAG7DceZpRFeF9vuwvHuko9eEFHPbmSNJZiep9itMxpNzKggSs1gSyP1omCT4mQwMwcdyfRMpwQg",
  "key20": "3ze2bsiPztBEq4buj1Hcd7dXfneVr9CEXapqi4UpBeHJdW9CRm1beSNDoT1Dw9o2u1BpbYLqCwu51JftMmuR99Z6",
  "key21": "5XzXFG8wAQWe63biDg9PQov9hHKpR8P4LFiAbBUoRt7VSz5saZ594TRmCz1Hyntm9K5a9j4WBSJXQVAG3Zhx9hg7",
  "key22": "4Jaxmyg19cpp2KDR9PMrnX28dcRwJ8CToWEWBBHD7w8CAoPdummRizxkbbvSJ9ymFzALyjQ8VhjTF6jW9v4N6don",
  "key23": "51m4EVroXaZY2tqenPD9KyEWk7Ch2d6fhmrYtHqmiswxN2g7wrcugahWFKqqy49hJqV44xqg9mPoZnXJchHcoyXZ",
  "key24": "52FRbtiR7qXwqwwUQvYGcf7uHQfHrKdMhoYNEbTCmg8RfCWtB9udHoa36fuxYnF4KT1wBera5DSLdigY9BR5QZUX",
  "key25": "4GBKdxAWuz5Kru8AgM544iAjTjifqKTVV9maSmcSNDAvkB6s4wbQXq3skankaCTX8uuCvTjjbKhpm3kRYpx6cjh9",
  "key26": "4JpeU6WocoBnYNGqn8wd9jgiYhnqDNGJscrSxoA67XvhGAN7HjkwZs6pHe2EpDbLL4DrpRnY6f3eVYyjrXBoUpot",
  "key27": "546T6k7hwaz5LFExWRU3AEMymE64cQvGoFMN6zaxBZXcLw4oDEWYi3FS43BqrEVJwxBZZYWb7GDDWoxF1NVXU66t",
  "key28": "4yTPGdfatMyCSyRcbjWWWfjb2iThtiQbPT6irj87N73dL3RbW3BQEx7Y76icZZYERyzrFF4CE43HXVxyBRzs9GrA",
  "key29": "3mDRjvgHYmG2aHHPhfwgjfGJj3yqBqEKWFSFSFu9WVbYEDmCXzcGddjtQkGL7JCnQHD5wm2E6SY4sM9aVC7qhLEM",
  "key30": "Hz8jxEzDF8WWTNAMYwt8HWu9ipRn7FWMkELA2sjGwdgQ3pRKx1Pq6CHuXHDCVmiqgNuAhQrZU6rfyh9Tx6qRzes",
  "key31": "4oDxKdp4P31WGZ8W5gjA7pDKfQ8yaMpJT5fbjfmmfa8s2dbrB6CP944PSaHBFNK8xstR9y8X74zmnNs9A2qMqjsR",
  "key32": "2fDf8yeonkAM7HQ2Mpjm6P17wRK3nLe9tFox9AZ3HH8JfV2ggfAvXAttwHg7sLepkjsieKGHTJQRLFsU28cG5etz",
  "key33": "2qXaikHT3PMLfQvVeh3q142WtYx7QS27LWHm2G9ec8hpLdM2H9HjrZw2rSb9WhwCqhnBkPT2Nad1kk3b6LnukfKD",
  "key34": "3wKf1mucbzcaXNN1rpkbJ2Eux1uu9Peh2s2YCr41QDZ48ahxuf845W3ueQCFHPc2PaUfW2cXWfe2ccyDFxw2ZaVU",
  "key35": "3iuPGYYNrnyUdPZPdSS1yiNpVxAc2DkwPRfAJUXDaMcyKYVck2Qnv4HAAxk1FM68pHYTfPAXUWyXgyYxJFY6hBCd",
  "key36": "Y5h3G2xBstPzf1HLaGWszw9gHZQ62QvzYpriiG8G1b48v3f1kDP9LayxpmKK1J8PWhBQ345Qm35JPXQmmHWAo2e",
  "key37": "YuZ3a3YDyJqfAe88JnXrnvofTHouvNcpX8mhw9RRKcPayzaTdAm4QsHtxWRUqDEpSeDthcQ8Pi58NuazBNeE2Jf",
  "key38": "5FWxzDwt7QRTG4au2fJ3Q7tHKJwpiMrL9gMpQSrzCsoe6yXhiKSTSznueDNv2xMzk3dAgjKMYPTNXNMWh4MqeMDD",
  "key39": "2FTmmAhd7is1JcCG6z115D2g1sVKzKchurPWWgDGmdDDNWHfgHc2qzHQJgeJXV8CVS6zeJDE1zecQgDEvaHkkBAp",
  "key40": "65cv3q1nQFJbKi6hKSsPhKoxyLYNxbdxX2CSxYMzM2LnKfVu49xumYNwy5s9U7bYVdQ2hLAHbA9HRSwxXepnkBsx",
  "key41": "3krjv8tAtw9o5j5TgG1hF8tULQRPfWMUW6m6hvQ2jAMEwWoiSAJcfWrk8UoDhroiArHxkXaEYtQV9fm4DLB3HQAK"
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
