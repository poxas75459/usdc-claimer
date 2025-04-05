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
    "2JvjFuKTFEsfTuk23H2WE7cVgrBddw2gVb6g2YocqVEJ5QjVkNjMiwM98LBQn7Z3w38FvXT4VSrUorjzzB9tgLfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEePAk3mkrvTS1FwUjX2WybrfHCTkzzpi1e2qHRWpcf3fhwReu9zeRJ9Pv3sTTqsEvBBh6SgBeBCiQgbPBbYyeq",
  "key1": "2EY1x4EGwvGwCSZfA7VZovjXavS2fRZcDfLWp8wUw5ZBVxZDCUGrc8sg2FZEuakMXbTsqewBUadfPBSX9XqMEZYV",
  "key2": "5sSQBXTqs7dYnhnvTrxV2noQpF3cQHMzTjAgMZbfdfDURvZCiN68PEp7cebLAP4YmaukyY7sXrrGjPehbmdyfRSt",
  "key3": "3kABsA2hrUsaxJpRjUmghX5tw4UqdFhtNGfmJPp6AcAAqhiJbYqeWQg7KXE2WMUwk822nZB9uAwEAn1iR17R9ajd",
  "key4": "3kTdwFnwvem35qmAcYfvoDSXbZeTppMX8Xoed7A6YxtvJiuAtbY869ftggdFcyZP66bWuAvxsCPkJmNDyTcznY84",
  "key5": "4Gp626rvEWghhrqqtnuceVUPebZkBGM28gmUkhk3SjaZ8LoArPaLrViGjHvQ2etZy1HJRSzowBTKQP2B4Zb8f16n",
  "key6": "5ECSXQjm1VRiX5JDstxHp5HQyEthf5UCgsptwvhBDEfKHvqr2ga4oJTgrZRzb7rSDWL6y9hQqbZmsNYAQUUMvHJU",
  "key7": "5hHepx4R9d9x9EApDiV8P6suuwBTEVjseRBkA1aXhwkQw8q5Vq3AswPKxnMkC2Amsb4BKmpxc8AeRuBtgRcLjGhs",
  "key8": "4ZaWRK26RJ4mu6wMFu33Spbm1qphddm9ucJnjCnArFKYLU7uJw717kZgU8k7zNb2tpB6eJ13ojcAdsWMDuFwwqPh",
  "key9": "67nKYPTUkT6HMCCA5BRaFvGWLxY5xMebEfAq4ZqbX2CmrCTofWuwrB1u7jG6hXSYBc1kStZTwZUwbEGT8JCi3wkH",
  "key10": "59G4afQmuga7n4HG7WB7hbdJAMkwiAmxdQg5jGmZA7wkGiJcQVPkBxPKnwy2RqNAwrjbns1v7eaCxQ18fr8DM7uD",
  "key11": "1EMGB29oA1bkivGXUzVaF7Z8fVUQFcyD2AGHZqYepof2BC7SGbUYTz8Wy9QAf87aUmwtb9NQDEuMjZzb6p1MLod",
  "key12": "HHGE67onMmsjCubKNjZ2vZamKRJkYYfpHvg8LWgFRN9Qpp4PRnRXWRTxygM4hLuqeJnYtu5CV2r6giL8LVncQqz",
  "key13": "3iPb7qo2xzTySns5aBiqxGMVQxme75DCXAh46tf5yiPkn4M7UnHtnY14bGNeN9GkHvUDDXNVSsC7tjxkmftf81t7",
  "key14": "2LRvNQ8RkfgvBTqBjnJqJ25hQBCyG5ksqvJgEPchWXbTxfuqKDwQGJYwyHt3HzfzL6iKMgEMkFX7KBjgZses5YuE",
  "key15": "44LLLwMxCNa8hQi6gPTgyhT4Ho8zpK3WXi16hugSmXAAhqDerxnZaph9YTU5PyCA3ushpDLXY8SdL4xAk3gkf7kM",
  "key16": "euJJvQ9cWuVNrVCJ2WXNzvAfyLuqjKv1UnhfaVrTMVBxYFGD8GbuCGa73HyK8jRwRCvekaWiu9wLqgBHiHPkuLn",
  "key17": "4ZJa4mdjumGVGjD9YNvLgsCB99KyWHpGgNyAvCiMyp5KcXuLuDhXsU9JGFVBhgAZQyczDNdjV5HkJPEdMcB7hTH2",
  "key18": "3sr2nTd8MaPS6gSj7bEURgVGsum5FVPJjQ2pGbPCWFRtXATZ9Vq6xVJ2UKPrREaUEPKznwLxJy2DxdDm1NYxjYbo",
  "key19": "4Hhs8ofhUiofCJk99TdbC2fKAi1KWBkCU9kQvr3CLwxwSBgB2NDCnj4fPoFtm5hCW6iqbPozUXstQ1xgWCGrjuEm",
  "key20": "24qdzEQcfRafPSatQbz3AngBndynD2maSBjQDcnxxKf49zqhkFpE1Ydk1RFqeA3SeAhiCgv4uXv4rny9yrTyKCvB",
  "key21": "644az5xtB2QLFZmWrQt85mreUXxhMna9TsjkGhCgDj71TkYNgCyMXr8i23eNWuu5wCow8AceME3VYgPhHoEm9Fcz",
  "key22": "3bDXGuUz5rjJ8n6k7swArQ1Eo8ubZcQqCCnZ27Fgdd7owKAJRL5ziMpbN2DrDn8PUi9crssP5Mp7wA8xiNLvmHut",
  "key23": "4Y1YfR2eJ5tRGFH22XeqAgKbv3E1XL6Ld3n19LvP7Qz88qZZur6Vv28Y4RiPT6hz7oWKPXmf8MStxiaL2mcWZ5wv",
  "key24": "4homTuyBc4Kg7ean6fLrYHo1xn7PrsQaARo3YnCfHbBBs7rGBUPoGK8GubGPikoLjAfaTy4wNpwBr2EymJggwtu1",
  "key25": "4ht8516KPm1JGj24NpwpoUBSyMAdQiGHGrhais9XgTGSHz34vvasgZp7YDPmSiXfaW4GrGaDrm8s6xr1v5DwxTzm",
  "key26": "54yoxKVHW1qwMiNr8PiWoSiEBzJugHFZX9PCYaCmTncVvADCAi9NWuTXqsW3CT2T7HHSnTn2aNhzJF3fASsxq9JD",
  "key27": "3ZA2fCZW1vYXHDEzjhSbF6BGPuoWE5GWuRHHrXvcofUiYvKGHU28bxoVVHDMxTuSUzg5w1EpEykcsVVoTKsRjP29",
  "key28": "5hSMoGTwW8udhK5uzpgZ4qrcPp33ZHMFGGUbNUkMhws7mdXgkEiyWsw2tUMFpnD37h9NspFf1rX1HtLSWC7nWC5P",
  "key29": "2aeiWqGC6UcCc3Vgs72rbCgtzpw6oyinJewHg7sUdKLk5jq9bGi9oroD27gemVbMfj6MSJChaXXZjRMpYozLonmh",
  "key30": "5CPhhHF6wvqnQd9sN5wQJn3nKhfPPRoMmFYbHLP6e8esc56mXngxFoehC7YQnXvAxjgNSAdPwpTo866KGZgDp8tN",
  "key31": "3dybKqjLgW37DEqg3wbQdYVomwZFyEAheJKGdqCwn32K7YHgtT2rjPEqdGmr2b1mz9CzcPudmuPnRfKdZSLxJeeT",
  "key32": "39BajeVDniUrhpn1b8fGGNNz6N3WFyNUvYSvb7hfUVbRN8aFzvABjToGRH4vXGKACX8c4F9qoAP8scUH8GD7W2vs",
  "key33": "3AmEz1qDSsD4XbHyQrsLoq4h4mgEZbHH12SpPbaLcMj4nWDSM94fvhhBUwcckk7a3BLoiDpvbE9MCAQXtDA2AFtA",
  "key34": "5h9WLZTpDwDf6erqsQJkzTh47EuYfHmBXeFiUfbkMRULTVQYSgogMEVDWCUFAqQSChytTdFhqhTnVSxQ8GVGdcBM",
  "key35": "2xo3739jFRnymM9f6er4XYuGeGuC1k1X2NEoLbWHe1Fm6bcVrwFUy27zWHn44vrofkMdmKerLVLqf2ppGFiVx53Q",
  "key36": "4sfnDAVyL4hJHxFs2CWJa7Ra3yEjAd3ukRvfKH4Mme9mVx4yKLQxtWrBoxGCgrFpaW9BDnq5DLxvi3wxSmhXb2iK",
  "key37": "3gS9dCHDZFxsNmTMcaV73mEv6SUsBLVhMhnoNT7oiJERhXFhU5oSy4jtgwqGccbo5RXxq6dVgWTeFBSF7sjv1KjM",
  "key38": "2hbaZj9mQENNuyLAmxnvpgtydK1HhBHaKExmNAryPbewsiS31aa7GbZ2XvdW5qdWxu9LGPKmPGKXkiH4wvkW8wmG",
  "key39": "5yTY3M2ieeLyReesHBh218RdJVByR69LoDtNBvMasVdk8uis8CJmwcqmQ1umLusPwEE4MNokw61MB7EfgzvZjoGu",
  "key40": "5PC999DjHHxqsLrBQwb4YYUF9K8k54Xc3cT1myhGeLsAcC7q3xtW8qZkyoDYCLjEmjEX98mvXhL9CSKaZwCW8L3i",
  "key41": "22NuXEPrGjR8P1n6YVz14F2Ni9VMbRh9X7zn2tCMV4S2aLJeVGSLysp8EusfJas9igDG13a3fC7qpKWRQuDtB3Jh",
  "key42": "v1zjju4pqifue37ACwNLwWFSx3G78m7vJsJUwQPjnHogviRzpXNtMZXtHBcQvfrGEHsbzBC7NysoxjV1x3dLLco",
  "key43": "5KBkHMX2aDJ6rUdY2ffTHzrpV2gAcGDLjhSLAutvYH993eFfCdjQbZwFJnhbzutkXeUxJsovNNWy7ep4Gs3sdcnE",
  "key44": "3b5yBZ5WMQgZCAv665ThSFAAyvmCee2JAimujZn1PdsU9dN32DpL6579qax2Uc8HR3g1SwUAqDApGsoB4E77pPP5"
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
