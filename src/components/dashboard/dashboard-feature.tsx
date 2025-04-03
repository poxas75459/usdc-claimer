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
    "35CSdAmuTfmJdV8mPm8c5hSNEyiYU2pqWL8uaqzW6SUoSuQEUwvCfrDyAjHdNKtKQYVhBvRpx93Tat2uKMrPJRb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpkd5pxL3gnGkHrWnstMojoGp2F43s33YfsvPXHGCdTdCTXRX7mi52gDm9L9umWFhhTZoTQ5cU3ZXUdYR1ePYmH",
  "key1": "4k32vC4XR9GKsG5FpY6f2RCxuo8HSEzWUasfT8pDgAN7T1LAvAyt5fsENKhRSmSadvG4dHN88ogqc8ySeu5yfh5H",
  "key2": "57DaW69K236NR6ipS37viEM9wT29iswABjB27ivFanpLxyu7qdA6YtBtyJCChFvjoJ7Xen4mfjf1fE173ASyqctN",
  "key3": "5EvLYztbGh2YyzcbLSmXkwDpycuX3wHJqruDGv5p6Nztnx6nNeJFppMWzHXVadXued1sB3hidG6wPv9qDVBUCwzm",
  "key4": "5du4LbY95HscC8XrT1pFnsbfcpxufKQqLV59Et2cthhdRfBZUx7Feq54XEHmPcTjpfnb6q8YtfVVUawMPhzdFzJx",
  "key5": "42mjoXD6VbecDfNCSQ3FUvctXsczqoJ2ujNfUPhepRWbdqHNopbVRqMJU9USCPCCdLmB8e7HWsk1hHq8V6FnAktB",
  "key6": "3nuidyneTLwuii3XUt1kWUV1gFpD4rrEstbeFqNvWatgoXdcpdQ4wuTCfHdNcc4iuDJ3kEz8C5rDAUHFigqwrkkH",
  "key7": "4AoUHfBtjPHY5mYW1yA7kRfoebmSuUipihEMNbRAaSe3L9qJ4SRzcybnPP4CuL1STjQ49CFpGRok5rW4fZU8oFNa",
  "key8": "cSqNsQuBFRLZH6iNVtdwWEV1BYDsKuSyLGLnm3DJU34zFyuhNBMiiHQCvxYNyvR3dVfuVSrP2YN21MpLdGJC9hB",
  "key9": "21bbV5nJkrApGVZPamLGsnB5YggpKJqfcNUuQsLvFgjzoqZ9ZW7aCQGHSyHAHFcCLBAa5bpeQ2gacs1amn9JfgRv",
  "key10": "3n3UbVKVjaTTdCBo9KZWmAgA7v1uPY6rY1xFNjeuX4uMY5iAPAGs2wPbq98swbWRh6oMdqis9dEgufZ28qgg34CJ",
  "key11": "3RxoFFdTPLimiVSVbjZwjq28AGw88qJn7ra2EF7svJZfhVxQ1QdH6E6coviKxkFVwLhJXMJdzF1h3EUGXBEmSu5w",
  "key12": "e6QGRh9DARCzoAwbHNdytQHG2r2qs6E6GLyuiKL54YPCn1BAYZqDMQvZ5ZpYffyZr7vwfDx26Xc2Lny1vDF1djX",
  "key13": "3H6ofxbUfgT8YHSSYmRidStPAxKCyQcgQDvb6qDLvxVtGBMFNJLryZxexdQZwLKbZpiwkLzSQWtn8TnGxythnnZe",
  "key14": "xkdUD8hSWT2y8NPa1XfCfVZCEkcSAQsTz45W3Co4GAxubsXqwKeHziG8oAZStT4qeBqFsFHcWKZCKyRUGqX4hBw",
  "key15": "48QKj5v9XpfumdM2aV7jDTAsJ7qbW9ZNRbWRMgA6RRZYRGGzvUqsuxMSsgwHn1mCQ2GR3v2nSRov5qDFXASidrT6",
  "key16": "5xZ7VaZzU6go926YPpwy5CFmzCT9JgrwKe4SHf7uPPtCL2Vyf8bkAzJJNoCxsMtQZJNNBtZJYKDKkEcKpjpPMaNL",
  "key17": "3qB4ZarrJRW27nNYNCWVC2hSvANc6BXtQXxUnM7HZp4ZNm8Ro3wGmpSicA8brAeobbnVuhbsSdw2VQ1FXcznfbSB",
  "key18": "2ZY4mLVBcgYcUyM5NyNs5JD2fqgxbQJEnEiQ5Shznoat5SY8ZVDJ62ieA5q8Nnfopss8DnHM9fw2tmM8jEbqEBVn",
  "key19": "4eYcF74cnEVJWN4yfND7T1DfgV6KraxiPxUDK9VRbPQXTXYvaaZzaC5sdbUprdEiRXW5YfmNfqELExuvVWjbWBwm",
  "key20": "UbEb8mP8VVXGwDNrJxabBWroZvTZGG5qm9GyzzHGkn7AvLK8yNkxYcCC8a6W51vRyexM4jfvE9qXs5wVdkyPbtf",
  "key21": "29eKeawsg1aqBdnCRYYsQDhSuFS3gAPT7PndSUc7PjcnyxArw3efpr6S2RkVntPf8awUfynQDnpdTn6L2tUbXLsS",
  "key22": "2dJ3qBtn4HadntCUFUqbxbuyWkto24KQJkjyq8w85RmZyejm4eRxcvrcJnTNV2hbuk7QDohSyFonZpb9KYqd2whU",
  "key23": "te6om8NLW2KxDkyjWivjmE1X5vrbNruKrcUSTRAZAJrPrFCUHoRvcopF39KcWpn5QeqK94N4u1F96mEKKFU9W8q",
  "key24": "gJe1Fo5LeCZVfRUjPwSkr6YRtdwNRTGPwSEApJBgX9C2yXV2ZoZiQNjEsDmRg5cpGs4DSPAZUJv7won6Dxb5ezU",
  "key25": "UcZunyxdYLHDXDpZ3uMcfF1tfU7qyH1hn6RkE4HWkMR6kcHaNb2AJj7nTAwMrqA7iwmJjEAagBCD8Mm5d5mvQUj",
  "key26": "NvSTJjhfR3E3ccYsdkV5f2bEJiHrRwQDuWnsXJKex6rTviLHtBdhx33iBW2YHA49sNFH7ozuAX79WGyz6CmFxhu",
  "key27": "3V2Gn6gC4LQ9GZjfNf2hUdd9ccVRuonQ8VpdpT2GqeH1x41Jj3zsD7YneNgc88JQUbehoPDkE6zxGay2Fga3CFmG",
  "key28": "3Z1Eip9XGwfVykZq8qG2FmJMBBPE6N7snsxyu4nTUU6VfEYD3Z8ys6XMH33z9yMiqHpdRzu5164jAy5hA2GF8te1",
  "key29": "4TKHhwF3LzFLvqG5SXTZnSZ5ydzpBqmwH2WrZTPSB3fsfEBeNvdnvWav37wYWkdpZUFMdLyxuzjt6zyCpt4zh78x",
  "key30": "pw2DqA7B3uEDAfWh4RQgAdGuCLXtSZh38akBPZwK1eKUTiT72KsVFg4vFfRgN78cVa1Whj4YarJhdDRBvWUg77j",
  "key31": "5i1WapkhppKCV8eD4bQJTRBAqDt3P2sWfcqZYkVpy9UFTMFwY85x1FGMcpLoeQ5fTCecQFGPFcwE1PG5U39cPiHF",
  "key32": "53jGAztgWhncZJmnX5mz24X8kXSDRTcGV7bTsTBJcXBPtZb7ZBPk6VAthGhXGPZicrSqJ1Qpm4JcEb5JayT9dHFk",
  "key33": "2guaJEbpXwAyXdNHsD6MxZMqQNKzgjhy99zU85WPdi63uRN9JP6nJQZHVARYScwu8swzqDaNQ7d6aTiLehRACPEF",
  "key34": "48rAU1EHsvb6i1iHsE3Y2PriRvMQqf6sVckbZd4UgxpqX4f7bRaa6vUGimfUznmdyYnaz8w8y7sVRLCrn99ZyLSj",
  "key35": "27tB4cGwXo55yMYNHEiGXjyqh9mJTbcKxJNceUpFFLES8gsmPKq486h3jcLPtQhSH6GKjTMSMzQa4f57Vo44sUAK",
  "key36": "2fkLYLVQ5kAVZuq8asS656KcZHGXzYnwZVRop6Ewpx87yncTvSxxYHgD5Ew1Enentq48N4NPEkfrgRiLAW6MVGKL",
  "key37": "QkcCf8gXLEWkNxAFMvRc77GBpTUnsoSXKJXEmxVj1BHPgJxhQz4ZGxTq9u3LgkawMcWSFzcwBsmgruqjipm7nPQ",
  "key38": "22PTeSsFFvEs88dC5TvAwgzWPWK6gT6PSXinNa81627Wy81i2c5bYNCDCPTAnREf1ivvC4fhqW7fwmqa6JFZq9xY",
  "key39": "sbERHpnBTMA3f1TKZxfQpeKHYtGiHoUK4Kt8fGJqytGKnLokAaWsQNSsseh7NQ4F6fvXw8TsADkRfJUWovVbWxF"
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
