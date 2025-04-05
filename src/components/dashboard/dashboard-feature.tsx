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
    "ioFYm3x4pPTo3dFfBpAMkfMaaDcnhh1wQjd6CJhr7XskBiA1GgYhqaZ3XFnEzRyYrUQ4dyFwVFHR1MgVrAL4jAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXTmqWWdQHWXZCEW7UHKp45RLoZG82ZvM6MFUqMcBeaWcBW7DbeRfFWM1KiVcAWA4GHsDYZsvJKNneDnxLbgUzE",
  "key1": "54BUzWdFYea2WL656y39yyAMYFhhKApKNprpPUfGA23AJ6yiYjaBMph5yK7tdQn6pKtc8u24fAEZkDwUhfhcrvvA",
  "key2": "4iqFzQmFSGEaxHpqjJrArqgTXSHKXXX7oKhrfwgeNLefCBmxygm6y4akKHKshJGkgg3DizRUVYumNcTaas3padHd",
  "key3": "5QbV3xfFtD628RQGHHwZeTWVq2C5KfkwmvwM5ofva8NP7hs3ccxBLdcieceQ1nPaV9uBBoM1dxTUytd33mvVqrz7",
  "key4": "3PMD6o8QREMjuoDvECF3BoebVNzHJXB2C7XbSG9mhfNHxXVoMzskMAeuwbyj78WC3po2pV4vjFQCCW8Uha8LgouS",
  "key5": "356pRkLKzenme4mgQVDaaEBYyBnUzsJiuBSswn3pseZuf3x2CS6KxgiWcqBjkJwAuNiuZhcddsK5MnYW2DaqwuL5",
  "key6": "5NtzzXNzEtzdoK1tieSBEgFUgyCMEHgSp91aSxPdDxcXH7vQ8e1SgdsYDYAs7DsPuBYWhDJtG8UpdwU9AdGDgek8",
  "key7": "3F1APrwEmtM1WUJpLmfQna2NYBDgioCMfrnjEUGa3nKV5BfEp55mGvHHHH6kzwG3h6nG9z9mJBbVKRe8DV3TSc1D",
  "key8": "598dTcDh6YKmrh3F73VEVCZayQxAuVHJhX8MKrRvYh1DV8d6q7ZXkNpYhjsBy3SdemX6UPuSB9zJXJcLTQnAGgjy",
  "key9": "44HnMXv7oiepQ8WrVWKNcN25qZi3qKFNg1iHKiCjKm43fio8HBaqSXpQ2f19Ywq2fNAdEcHLjVSDfNQMighhd43G",
  "key10": "2mos9w1vjD99kjN9cqZKHiodvEtttxT4nNGAxdd5LwP6XWkmYpxfWYCuP5szMsecYfscat2Q2J2Dyzimzu8pWs95",
  "key11": "3FgvySLbkzTfVphuWpjV49jrerqXkuZh2pWxz5aPPrAhEgYV5nErSicf5oFYgxXTtbiWhfXQec6gHdNfopkLCaNt",
  "key12": "2BKtFvdpXy3Jcg6jSpW3DrgU8kNjZqc7FzUbwQE2B4s5bc5oxkbiA5ofjATjpQhcgytu5WfYFsLAcJmzdGsZoJ6a",
  "key13": "43cERYBNpqJQTD6PcFxkdWRDEUh2Y6YrpWPtFVmNDbFGMNgCDJQhRwPwoTdGBX74UeD5UvNrup799bSQNsB99Th2",
  "key14": "3T1ENbmL8HsEi6VZMk6zEreFh93b6nnB3vgRdqpbQLUfA6VhJSeHNpruKxdBTnud6EjoH78K4KnUXeX8ECmrNeWa",
  "key15": "4YcfCiF3YPv98ugLkeNe8Mcp3Q5K8mo6S5MpUWbc94Hc1c5v2RWSp4bQ1xeWnyyzppFA6NDJoxzxyFsYMbSiYGp8",
  "key16": "2viH7q5YbMF18qNmDnGuwmGpLD9tcemYxiiEvhyHwhJnh2xhx8cEXerrGoCDZf8iprTSVXH4WL7bSqfZqZf24D9M",
  "key17": "3M6QTj76TXkBe1NyPrHpK5BYiwWvigrZuiowsGHS44KrBrj7Y4Q1DDfVohd39trCY2nX3XMgQdGYkL91NrTYeMLA",
  "key18": "5GJegjE22oPAYEXpmEFuFtCgBn8xxHMW823cF12gyhg1U68XrT3WWcF8BsQLzF257ipKae3LQ6LY4C5aSk1dZ9jK",
  "key19": "48SMKLUUk9dX81fJCTQ3AyHUesV5CBREBJPAMRQ8kggebpyJ4ntnuFxmiWzT61nLiKQ8vuj44wG8vK5werqor1xw",
  "key20": "29GF1W5Mn1exrJ2iVqhrLPXNUGjui2kCwNApVEYbTayxdtVVtan5E8cikbjAEDKdYDqU7prhvyJji9RApd7qWugR",
  "key21": "3XskdfGBwcAJE2b2XFWhj5KRUz6Ju5sTjyTSRRjyS9itwY6wbiHQTSyXKBhaJLETRzfj2hkJKrDYnb1ZjVYF7qAd",
  "key22": "RLHNp86euy2WkL9oum6Ly4Ye3M8vE9EV52FdiueaFmoBqE6FjGNXTiwPWZShajXtCiMABBd4DQ1MCjhodrXZ6J8",
  "key23": "5w6uAckE89TupUwGkHRJUg7hSkVis344KkQBzUFe91HfBfvyz29xFfWf5PvHFNo1RmVVcXr12VYfgomXMc8gGNZs",
  "key24": "4XKLj1Js9C5wqZGuKZ9494nrB25qYM83JwRNdpqc8VVyz1e8b6SSacFxqvguz4tmcYAhx3LAx8sPU4vMQ2ujWJe3",
  "key25": "58Q3ZTPAKcdk1EbBkS67mP6XW3PHyBFytrVoTgAkuv7nTPr1BYaQaf8nse7mugSwszwAdKChHez2TiSbnV8uKmtJ",
  "key26": "4UhufVK78CTeycpb6dxgXaCyhnfcKU2C9MvvwKP4NaXxnNaJbhsrwndWiRFf1hVb1zWFPxbQJjeqnPP2CxDa9Xfv",
  "key27": "2QYgZFEybCPYs2QhvTztdEzLduCDoQLw5WSdagy4vrGvbKA8c6CbcR3rJyEMVidQUr2kP9uz3oA3Trq2PAUGZRoM",
  "key28": "5NaorGYx3jh9dxGgPvM2RvbjVvfG5Vb8vk96xAVSbgGgLiG1rqSFPFwecPeY6Rk6m6VouZwSPLMr8EiwHKfCXvxp",
  "key29": "2VDtsCceMmoo9NTciB1StUswkcqXiS42uaZagvrNr8iwHvbtJ8SPa853SiQVRHMjv42p4a6HJPNsk3iJ9NQZ8Yvz",
  "key30": "2gnZnrE648ou9S1HjQDN8qEZYU9nq8UGQmE184qR4J3jeHiq5fDTNjmi4YBTrdqmpiBDenQapuNs7UPYFuVQpMAz"
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
