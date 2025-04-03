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
    "4uQ2xhmLZrX3TV5DYLpcDoPh1rusFqkDjeYLKdXyt3EMRmUZi2eotXTQ6P6cB7hb5gDSdjxtgp7T59XTT6ZfHzQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmKmqjazJA2DgxVVZfPaZF38dLYSr1xmtxC8yik1aGVsGx53sZyo4qYPHJPgSVagfTpXMFFNJBTc78zmwVfRZTr",
  "key1": "4Yrx1XaxeatyeW9y8F1de21YGbpqPhmfdGhMPVfaKmKqcLdAmo6sZM9z9EzNiSorNvaL4LFuZivytvTjvuSpHXMB",
  "key2": "yw2hg6Epq6YKZDC7KVU8QZcRu4VJxr2ZUbZCJDcWYYL2RnahiPY1CgVdUxkNHZ7usYcPGfSR4sjKBwzReMQsZGq",
  "key3": "2TYeuRRMY6j13fk4Qx3RcP575j2FKkjM2LA6qQVyBXFCmQR58CAHprhrwma91KL8j3u1rSoqFiqxuMyaxz6zKbNq",
  "key4": "Tw8GLScBKdT7SQH97qM8V2EvKApZQAFwqi3jm7vVLqfWMV56rVJ1VAwtrYXzVxXQw1yFCWP7fGVQpgmicJyDbZd",
  "key5": "3TxWVJQuBjHtLxkEiUni5CNGjy5d975pUFrYwRMppVfiDNdypJ16AAo9LnEAmuJab9MPb3pJPoj6aLMKkuUCyVGz",
  "key6": "3snpm3hxnACg4GRk3pcuFfRJM35p73o3CtxdAhGrJSw9pWVT4ty3dVdfzwZ14akZ8yV8WJgJGj8Zbe5L5N2sQNRw",
  "key7": "8WCduU4mJcs4Do8HCfNUSKzDB6Mv9mjinA4hrYZSsbQTVmwEgFRKP5w8KMFWiumbFURkWfDKfmZ3hY3a6WKuFzB",
  "key8": "4UkXUDzzQZQRVdwwteq1haHus51XXT1NZdvEhZ4uLWEwJFd7TmzFutxBNCuhGdyaMdLA4qVnnNNnUysLA22fUiUE",
  "key9": "3kFMqefv1LU6e2B83qdqV4VH2axUez9GYcd7EEFZznL3DToPhBvpKvSDw3nQRKoz64GVuuiYm1QguigeDmQf6XD",
  "key10": "mbjpCv6Jz8ZkYy5J2aA4Bbf1wAMT93YXmWmU2YZvoYXVZWSjoZibjr7c4AALmAfBzfFzrH5EK7uGZ95Xom4dRDy",
  "key11": "4AkvC6n3xT2fiGgSzhFmHbXZLhVk9KUaTmaaw4BzQx1P6UdwKdw3siQ2RSck62RufBNh8tepQFc5G9NbpQVBDcMF",
  "key12": "2du8jqxC9YPJpLcjq1jCurBvhcjft49DRefEa9HE9ohpNmnT2cg1eG1B3Hv4uVLTApmzSiMw3VXbuGYAsX9aPPgL",
  "key13": "46vbNMD6awCTtijnKFRPVWFSyyFTjGd4xctonGqVe2KcUL69cdzPrSE9y58vSogLPKaFeE9c5hV68xZtGxc1xtJF",
  "key14": "5soVsHxJW5mMLAoFssbbMbZTXCYmkHSYNeyMvsRimw7rttozvA87dKVAJ3R2jWF4MtTHeWpGL1vW41Qip365WEw1",
  "key15": "2TGft3zeNkvVgWdkfV5aGJ8rwkYQymqd7oV7gMEuc7vh84xTd4C2j2gWiKaPNBTeAb4rG6S4sk8kWuCGVrd8SLo9",
  "key16": "41AoFDT1JwAQvFA16HqS6q3FA36VB6frr9ZdA1TtDtb6HnuqWdNnrBg1xVbPUaXDfVN5pRhz9t3a8ogfZT9tTQzj",
  "key17": "YYBFchCE8VA9sfFxnsZ7jn1g3zKSjdnn8a2iaGqr2VDuzGZh3KLajLLBH3WFieaeRoHvXvhbwaDrAgtkP8iKEob",
  "key18": "4kYERfaCMJoR4qHMtovJFX7R2g8xumr4eCkzAq7uk5ZGfQtAqg2z5GnjjdGymijho4NWa4Sg2jHymF5HUGSDpPE7",
  "key19": "34pmdWMM1DT2Z4MUPfxbXnyL242Yzm5RhmyvtuuhDSXksosCNCGgTDkP3suBR1saxsgSYxg6bg8SFSD79dGqRHks",
  "key20": "5qL9JAyGejCW6zxYJnBnTMxB4JW48KutPdvruFzMJ17LFYDEJ8iekyEm2Ag8BhT2wQSGAGZH7eBiEWQSR8jN56q5",
  "key21": "2swCwQwGwf35smjYMHVvVHvuqrnXNasSTAiFCoZZdNsDapCQ937WjfNnpqEKuWyPYBbCDui2GoQn96smc44enVQV",
  "key22": "64ZifaL7yJe5feTGbswbJv48ezije2ARGwQyCtSCHKbh3pMpmdkc1PigMq6JBdjUjpDGCygggk5DSaaaDPnZzyp5",
  "key23": "XMdMwWGAE9f4mGrEuRq77JxgCNPG9e56HKsBGR4H63A2Ni44VLs1PzxH8fKQRjnixKpbqbLK75rPNZKZik1X6dJ",
  "key24": "2Q5Y4PZEWzzCkTyR6ZgaSf6DLsQukcqCj4Vg7aCWAGagNShPMXszNTxSAJ8DyRD2EoL97ZLpmAFYnX7GKCAL2oVS",
  "key25": "52S5Kcu9hQuGbEJhhs8SMNSfqfVa2eCXmN3Np2Es3YSm8dZqPtgkKmYWiddYthWivzmBZdaq8iADaXyUgmVqq9Xe",
  "key26": "3Ct3u57vTAWQ3eANnUbTBXNuDsbAL6yhmft1ZNViAjtxkZajHLJ1EfDTzU6MdhP7BjUJncJBG2k4exTDYahi6a1",
  "key27": "G8veXSiAuWCUZthL8nuXykkx3R92EUhey8cSDqchRf8hNFbokdZZvfjnjmhADs6CLMQSwhSuNvhanXpTPZ8gGVX",
  "key28": "3exWeJbDm9qwRx66MYMxKEG3kfqksC1JurV4e8A665XLanFKEgjtNbPueaut4knrqjMS7XSY8gFM74iPKX4sRE1H",
  "key29": "ZdGECx6rcMR7FoidaWhk6hfE5Y26ZPKfpGGha9kfYZzFaoZWattTb3rXoDjsJWsFncKCtTVm3NEfawdAeEejMz4",
  "key30": "2sq5FtJxSwjwXJDeM7jA2JZycKuYKseWMnbc4qqp1SzapCA8x1opRCvoBfS4kKownZLhCEzbhJXm7AQekRaKR1xT",
  "key31": "5zbeaycwr56CGpSxAxMV5nkwz7PffPe8cE2tgs6q1Qx9erbUeq3sDb3sdXqsky3XVnqK7ET1rEcrHTkzPK7JHeAe",
  "key32": "98qKX8TPcAYXW9SUYLEwhSxzuxHxbBgdFbCUNbmTBP6rRc64rVJ5LFy1zKxm5zhLe8XuRhFT9qCDGssGcyBVvHD",
  "key33": "3pnYGUf2P8ZdCWiTV9t7YbusZt6X77nTuERZ4x47a7B47geHGmoJoADJnf3YJ43Qr1stNAGcA1biAzTXZi4o5Am3",
  "key34": "3mVQpjC9rPoD5ifWYCq5Lk4wqN9ixNq44xnGUoA8WpceWpqRJ99PSq734rybPmbsBT6YomfYPbqZxcAponxJsLpr",
  "key35": "28Za9Gm2uMTfPVNihWbdzvReqLpHtDjK98ETCDihzN1xV9o1mCSw2h26xxCab4nV9oWKeYyh4RMu4NUP2NuCJoLN",
  "key36": "wQjyoJYLXttYzQx7hSSNnrUsyH6yTzpNtrz1Y14SKTcevy6oAMu7ZgbQyNsya46CMyidewev7BNJJf8LxuJTSrZ",
  "key37": "2EGqAZcPt3tL2xtFmioBBJecAT3iqqLsxwVAmp6ouy7mWW9iJ9KoB5NdbkcXhVRF8cUKRT812FZoAk3E4JxTCYGv",
  "key38": "YjWFcU5EAkPEpt4h4JH5hskMkFXjbF3M3zaZv5z6CKYoAkjKv8cnN4M7Tp3S2fJn83SVEDVapKxaPHR614s3uLc",
  "key39": "3z4W27iLQSUL2XSZsicMWStcYbq1x1DYM5U1o51JznARtMF3D96RF3i8ywcbntKXnzybmPR1fgTAEKtCBJ1zLdu6",
  "key40": "3aQo993JxitNmjBczbj4YavmP4g8rRd3fP6HPq1ynE41G4q61nvhuDzQJDSoCTGQTUCsfKGgWKTku6rAwM9sj7mg",
  "key41": "58C9a9reSwQmPZhrnscodz3rDwfkxf71HVDMCc2Rktwkygtyh9wqxy76jb85bdiwzM8La2JX56dQYbx6wfMHRXEJ",
  "key42": "ZgGBsJDHymwZVR1p4izsLfFbMkhmBC3ERd8KcarDpvxYcT1W4YyVnqqtGuqKg18kUpqndP3pdNc4pAC77LJogqt",
  "key43": "NazedcEdiYD8NDCGghxdNK6wQgxe6BV7caA3y9it9BWz3Ur8qZ5LViH16VBeB5zMu8AHRcSS67Zic6refGmUoFK",
  "key44": "39qqN7zXJ3E7drsjqpqMCgdgDiSytRH4DocX3eEuSuZbb3DBASaqb9QqKuiWRFmLP8ssTbjdaBdNywYXVRZaEtZo",
  "key45": "Zu78qk29jBujmf5NRhQLn6C7n5KwNxh8iNNmJLb4RnVnkvHqp7XMqJ4euHogEkpELKCwrgdCiP4LurwqhN4Dqy8",
  "key46": "3Uboh3Le2YFNuWTUMWCcURvuvbKeEpDBTYkym48JsmsRGvFxSDaE1uYwp7ypcXRkR7TnC1QFPp1MwAiqawBAKs4q",
  "key47": "63A2p845mZ2Ph5gLynrczhvYDXw9sMC97S3b2nBbV7ftWBEmYHLAjjFLKe6fbLTuNpLKW1ziWw2rUuGVUbk34pc"
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
