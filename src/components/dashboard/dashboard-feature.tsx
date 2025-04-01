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
    "367y6zc4pTLpqrYQhKhxV8Q99QghpLnZksftWtDArVLb5AiNxfryJibrtZ9951DXhMyaZ7jsM9A5WTNJvmY82nAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q927iUZLHj6vBSH72x5thrGhru7tyi7qSzf75uU8G1bD7czY4HRgzurQJygsXpRJKsbww86LvZeSKQ3zZHhVDoW",
  "key1": "2sGJdMmAb7PYbRxKVujN4wnvY8znvMAhHTnmNV9UNAXmUeCyYStN481hyfpWmpDnbkZZy6ngiSftgX6zmm6SEtnp",
  "key2": "3asYLfxK2JmPUyGUGQVdJk58UNUdgaTmgdu6paT1owBHMBHvdeUUFmyAyNyK9NYiQhh6mXgbqEkNe8eyLU3wgNF5",
  "key3": "5kXtM7m24mfV6WezsWbDFQAhtNSgoF5dFghnVdiRGtc69YAsGkW8PNYo3bjm5uhyoPV6m6sYaj859VGqcy8BUbDa",
  "key4": "3vA6fvCLWjC97oJqmskSCVqsSVCHaV7D31oHM2H2m4xbW1pndcN2cRVYu7om8u8eZWkwysejyA4niPSghz5ePCG4",
  "key5": "66JysJAqt5USWxwp6HYRyAiN4qeA4SvYuYvQ2Nn7PTHVNi6Q9puVPK1Mr63rm8AUGQwb8hPtUEBDUnoBSF99jVPE",
  "key6": "5eWYvrQAho1Zxcg2jtyJN7behFjSVyYerFSL6ZtTyTEFJcXwppSVb5subCGgfAVzU1zC3sZGwB8E7x61e8ge7H54",
  "key7": "4xxM67fjvyP25toppxhg5UKETA7QxtsxHGpgoMU6KRvr5ViWwk2HPr8af9hiA3Kak4wKCr3nLN6UwLtNqSLpxeoH",
  "key8": "3pGztPWdn7Tvudghqwx8Td6yaZh5qN55QhSL2oBbonCLfovs6YgpLQyp8bUNAUEWG37uCU6D7yUAhwm2xvb5cjxd",
  "key9": "2TRBckzhfA1ENGHs91T86uZ6ikph9VqPfF4tNPV5HaqWCvnAAfNaLsEH2B2bG9ArbfRUVx5u1TER4bMYSm271W3X",
  "key10": "3oggECvk73LYPUrYp635CJDrxBYpRXJsQSKdKSr9RgHhh7qJGYmarwToK3JcqJEZEjMvApe7NexzGyubm8vyfcGy",
  "key11": "xyNc5f3vJuNPkajxuB5fQ4LxuabdhAbc34Qx6m7gXpig7LeNkjKcvbhkqmtJPskv9cnHw62Dgu2HhaHLQX4Q4K2",
  "key12": "2Pbt1iLHo1N2tFVPttxzGTJWN8eX3bXzFYNhD5xB8EZWSSpvmq2ZUB6yVr8miLfqRcCVTUuo4bHuke7FiLtZWBfj",
  "key13": "3wGU7G4M7np32n2QhniUegaiesmN9DE2bWs2yjJsEqtJ4hWMYdAVi8LJbEN6A5J9VHx9rQVG2Z4vD2XKmYdaW1uc",
  "key14": "22Ny4gB4SLqcDoZovPnGCJRYmtqhF4L85MBDSp3b3zgmZMDumQVcCxShsiq9gJA8VKvNxvdwygjdiYWpd94RU9MY",
  "key15": "xe7XaMQjAtYD1TQTXaSh8VeUpp8mRwnvm83v3M2Xe5j77AkZCCR1BbLLsKpJD9hzG5BWkZw5scxwqtQipLeFYzu",
  "key16": "2wzXdXw7xk57tcXKXS43SY1pYWMsXArhvooCaeG1mKnMkPhcaEFBb9Rkq5SYTC1mcPjvdRVV11NKGn6gzxBMU1HD",
  "key17": "F6HyCNCpGhmhvNXQZD2pSZ4nBHKw49tX17ZsndwYK64bCeVKzqd5W82e7Hm5hcSZU2KDhyeQMKZ9K2QEd9wVotZ",
  "key18": "2kaZB2iFewkZSrCbVroupCApcDUqNMsPTcL63MowKzDmXVT5VrVdwxjHEMUsobtMNRBXgohhxuQysUxPDNxw7RJd",
  "key19": "4SifaY8JmXr96VdAconS3fmCW9Am45wfiT3HauaHesWC1WH13rNCAUPUJHcExMYQotSPoLJ5hyTiuM6FMGbWLBCk",
  "key20": "4trFWj14p1bZfkqyCvA5Yzin6mxsWisKPo2sAdGiLpUhqnwzWPpGVerXQyJM2wxSXTZT8iBKKhwxw9HwBdMuLpRE",
  "key21": "2PYpsZ4hmv6iLTKberVVY7UcXEd955bsfYWaRyhLdzKxZkKADLHsWhaWhGEF2q1h4wM8WqjsGVV2SDBcED35sYhZ",
  "key22": "65GtK38ZNcCLH7MhasSb1LKMztsUi3uQdWv15ko49AcDY3taHrt4WyZrbbMgEhiQDKyuiuP4BKb4G3HENP887cxG",
  "key23": "33oFmZRREajRSs6CkphRNKwF19achhPbnXq9YDw64EzW2cganFHezEL1kgdPAASvbUxuUSLzreoL5Lg1WSJK3gJo",
  "key24": "w7doT3KvugJr7gjVaTHfwne5zxqTCExGPHqqaisVMpRG3zDV2v6LMnqVaBWxeMJR9TAanjAYevxFYEsEQhSZRT1",
  "key25": "3TtBsuX8jvDUrH4WGJETRRwxp75HjT8t4AsabGLoMheW6YhtCJccjqD9EDY1C19frqxt6wo57Kpe6FAatRt9fQZd",
  "key26": "5ohqs7r4RgbU4ywnde35V7QfL9XwLAfnsRWH81KLX1ujKx4UiBEmDWbydtjS5ouBUwdxCkVXFxbkqrfL3mwuQe2f",
  "key27": "3mLP8kVm1SKtSfvauTibytBo9Jop6fvcL14VyovzS8F4CofBcf4PwebHKKnhwWGuQpmTXWaTHKiXVAhCJ5H3fugG",
  "key28": "3bvHwP3ouJEchWtftvjuXaV8oz1Z8gii93WXpfh533U3ep32Ddo3ThpPQboCi2arFaDXWPtyh88eAQinCTNHT1Cw",
  "key29": "3vGVZuMJbjDaFCZAHeY3EAhYtmLH5kzWmBagurxzW6ss6QE5uDF5QTVnFQmurNPfu9MbmMxgtR7YragU6xRqGLBr",
  "key30": "2BCbjNLxm43CfB3PPXKFmkzT23FRP6dEWMx5FFxxD4vT9ZCRxeQXMVh56emLrh6SyJhgnUxJFqdisyuxxm1zQDnW",
  "key31": "4jWg6JvQRzUbLo3WHAtj6EL7Bsj5NoftDem4wh4VqgCBfGgHgTXqGoEXC6x7YVeDJ1HAsTtBrm61BPCR5Dn61vh9",
  "key32": "4nVWvooxQsK4mT7CqaWQrLYSESYiibSEAwuhvedhE9hMUJYViavabyWt2XxKgMgEZg3jo2iJva1HSCwhrMtmGZKG",
  "key33": "bVpKB9aZiFYbo8ijYT2X1FSsf7G4D3Q4vmCtmgDs6NEyDSTHQJUcyX7M3z1aQxmZQtzoGzSP3xqoqLb9DfW5pSj",
  "key34": "57gAenuXLvREEL477YWL3sFzUmG8UH7zzTnsYNi8TCCTWvTsJhhekw9BQVeBMy8VmhnSooXReBbBfaTDpkwyy8fq",
  "key35": "2CVYM6HikgGrJaQXR5D1jeybfwicExdiscDJuCLA3xi2478nVVjonEdkhYXeEoQN5VC47ftRAu5FT3HbmJc3bW1H",
  "key36": "38dZi9etqCDyLtZGPF23TRBH7QdSZDCiw1JSxbBtJnqHYV18Qk5a9VFmznTqNAtBZ6rcSVWWCNVHuVnEnQNNhvnE",
  "key37": "1mp4gWqHHMPtdegDAM44fSpGQ2evSAs4HRcqC31SqPAdnJJFhC257rrTUVf5Kcxk8Z6Y4wrw879AkmwsKoCDNZz",
  "key38": "2oTCTTz9GLwr4mHK6EoFzSsLWGY2XwY34ry5hq7KBg4Nn1FTrkqbdbVUD6UPShsTsBAozaiPnPVAjzZU11DAtdna",
  "key39": "4phr8syEM55zS5rQ97pmsjo3BwYCSzMKPeAK749G61ueZmTrT9XngxjfjHzu5EAybhiJ3jPvKzPehvgD6W86C61e",
  "key40": "23csnXi3CsnQ5Ea71N6QX5sjHR6xBcPSTruwWmS5nEhjXCYBNVeQFgjL5tjvoDdvmGNp6NUE35hYsJ6JqavPRqFe",
  "key41": "28mDoYtNsbjnqssZHduTU2U7R1PAoiHzqNqqPNZjzMidUxVDGR2GRbA6ucHv7fCveGGnzuye22daQ7QAQva4Y3D7"
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
