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
    "5g1YJFLsuothRH7BwG2m65TvwUERhTCkxsigoUfNjbXaA8KEs6QP3kKSSQSJRLoj2bqossSDnk67Q6pZqxWB6RzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r3LngDwfwi96hspEm78AJiFMaKQ6xwyizkUFsmGB5my6kbhG7ZM85gaMZKUB4DZxfh3pVNXivewASR4RxvSLxE5",
  "key1": "2SBuahfYBmvqrfM336xYpr9VDryuwRL48vgbVuRQdDA9DAcQ5cTV8Jz97474NJXVwh33y3uhLLHD3GjPuF8fH8pA",
  "key2": "3eB6qm1hdGgqq6SDK1ZbQ71X53ZVZGjFwsFJAsoyCFdTF2TGFgNLPoQgdf9pcBgJN5T9G8BSirmeEyDkFap6Qmwi",
  "key3": "2WjU55jz5RJ871XB4g6YN7b9pDqMWotCbyEBg7Zfc966f4angxYfsWDQvPAkqgc6WAAKPKHsu4Y75dVqaHUr8apk",
  "key4": "X6J2QxMhTbqr6sXZSb2TemucgRv2mteDWak3HgrZ2hnd2giPoRW3o4of4krmiBA7AGKmNALTMQtnozAKtXujniY",
  "key5": "4HAkCqjvQPdZ6S2Q9JRcAhEPCGkMxCn3Xy45tpFqTZd963fTpNv7mUahvDE7zoQkW2oEdRuMyjUrg9X2kdX3h7yD",
  "key6": "3a31pQQiWPVmxuTcyRnbCgqtGjCNW2Yvyf6oZU9vB9gNp3UvHS3EVDhYimC4sVwWQ8bR11N7Wta3SvGKnszdDyUT",
  "key7": "32MjAtvRvqwvr9SFVXZrfaofPYXzS7uNFjaotm2fKiYr7U7UNGiWNRVjefB21pSxh7h1THZ9xuH14qnoKZN3TtBx",
  "key8": "511gfHg4XqxSA76Ez1TTkL87WtS8NkpJqboYxWogMJoTEtz8NHaQU6Lirzq8NbjpjaPPR4wEZenvGYszCd3JCtHE",
  "key9": "5Y3mmHRZeWaMxacu9N7rBiN4qvd3UCGC34LENZ8MshgYakfgS1womhMcupHMtyoDxHnkts8CUhM6vJDwbgg2UZmJ",
  "key10": "289ogWh9MitKM6HCMmb8Y2b1yoLRv4B68MrYAbXchZaot627i3WmxRwZTD3BeR1JgBvv7BBSWj6EGMpm4DqHHkbF",
  "key11": "3EDFAzg58Vo5QVVrqghxntxLYEnGQp67nihsoP6pn8V9rPL6g25YYEGK2cL1cTxe9ztiFQ6nr9wjv5rxBGZnxTdp",
  "key12": "65iRH5JwHxwJnvgDZi6Xpki2ELuFiFc1EEikK93U441bLGkoMQTP9XLerg8TDwDuH4wCxs1aEWhRvHBNfdQeb54f",
  "key13": "toHUbF7Wfmc4XsHLhPgUVSghPyxhLWyp3YjHTjAfVyBVpTb3RZjGof8pwbpvv3wRY7gMp2ELeXwWsqYewZBk4e9",
  "key14": "JwTL6pmFcXADEq9ugk11397QA6GWGYicJyLZoRcZMVTEchzowS6LvSxf9Y3gXzA7ao53SfnMKW8jEeWmqgKGvZy",
  "key15": "B29onxMB36bv7HqPWVjd8fFtLKCXYXR728Jeg1Vpn9HucLybNBVrfJ8MLuu3nng31DSFAkqR7Y91mA677qrECHY",
  "key16": "2wejSuD1BQTb4iyhfNLtPbPw6qPkVD6eCRzqGwBnsApV61tLG6FUjdxpgckjfszosYCQPRGHMZ3uxHJmzBzkvVSU",
  "key17": "37ovazAwrzfo5R4maSje54TiQwhvF5qMPtYk7uMUUhzNNKBwfJYAn5veZeKGnz1vwJ6DjjoQ2o9umEzGXYZrVWqL",
  "key18": "5fAGkDpXdTMtV4H3T3TF1m94926DXhuuXTRULPrur92KWvFqUwqegYpK5RLC2QCsJzGTDeHV1V3eCwuxgdnSgHDK",
  "key19": "xVahz1v17e3276PabJgCwoMHkxjkywB4KGjkHfM1MCjLBupA7TaqJcjR9EG3SMovRaoQHgLtP5EQsKPsK3ovgRX",
  "key20": "2JgvjjScjN6ZJGqcKWGR3BWrZ5tTEj9KtirMLeqWZXN3811UFybdZDxLbGXQvh6AUnmsJBMzZW2aCpggZV8aftN5",
  "key21": "tptkpTRsDYsHvJduJBZdEodxSz9oVw5BT7FnBWm8bVzMmZZ1aFyHmFRtsrAAjM9i61GJ22pEFx9taTLywXokJbU",
  "key22": "41a1tzRpS1f4PWXwx5s3xuTux5PrMV82vGctqbm3gMAfrNy8eshJ9avm9A1ZsbJLATRUN4D2j98xCChLhLR4zbL",
  "key23": "4S63Lv7LF2faQNJ34AoETQ2ajGfEeHXrDdH4DrcL29K7x2fZ1a1Vo64N2mAs5fYnRbu3FBHy5sqMYXASVLvNHfaU",
  "key24": "3frck6xajKJQFzSj71GwcjWYavYBWx2X4N8nDFAE8LBC4eEaTAm4n6rhBorQWjt9Vh9XduhVu2fDGXGp8Y2bvwi",
  "key25": "4xqEZwj718NmcEMiBp7nW1gMJS93FyCZ3cwo36qVtKesZVFie8EcMx2xG2GRBUE5EP7XrrD1A2zzsegAqpNCQEYx",
  "key26": "3nu1ggv7S2wBx7cCPsVN3JuratbeXbiW4oBEqF3YsRdnkiHABkP7ZxxLcN7HoptZsYzergjtRmxn1aLDSyrhC9SC",
  "key27": "3xFy4HtnpcohUN5fgDpeQ4HrPjKdkxqMeX2fzPE2GEVsa6KtxV52Bb8qEzPQJa1sZzi3tN3zMYeWF6MCVaa4WxxN",
  "key28": "4AAE3cNKspi9fjk1wDLkMnzLHQqjQzDagWUCYSfFu9sanr2mNP6Ap29eodZ2cyG1doQWCxFo6dbfAZdeQkZW9y3d",
  "key29": "A44XwpLEN3X1Y1PMcej9xbVaCdkPc32qupFBaCEm45Sazu1nU8Yfb3TjhRcqBo4pHn7x3SWD4XXLXLmfN6dJTY1",
  "key30": "28LEWh9rxfgXjuMxPkmoZAzK2seZM2cohx2znghY7jEmCSp3MVrTCgkyZ8MET2CGvex5Cvz6t8viY99MMLpyvypo",
  "key31": "YLhYbK2jgbTeiZkReLVBW2G7a6ibfzbFuh6qW98ZtkRX2nMCUhKZbotWvaoNULxtuHj7ZFNdPAqDwMLHWYidFvX"
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
