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
    "GpHakuzLQPAdTmZUqUJ4f81VwhNhtB95T7D4fCkBQ6aX27J1UdoZ5exsKvscnFAt2XXEYHcDgk7ZBJYkkopi3Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmBKVDUU7PAonnyCmvPNYEuBrNHEr7jsx7J6gTkvFGRiCmYiLyHrs7ZXjyRwmaHA7GpWwvpoudTZ26manAvvhiC",
  "key1": "4TmsJ2q7bDsdRotcsCQjEQy1DxzZvNFFA4zpBbJxH5DuYsu2QswzGN5SvLRu6G9oT1wJbNjB6UUqZstQoTc1cRsr",
  "key2": "5V9F5Zo1NgLs5XYwkQoxgzgPMhtTfK6LowSWUDj8v3ucdNtLHL4TCozQVL3TuZkzMYSbDLXycxPSEn698gwzNXAe",
  "key3": "2UX3EXWcjvFRhwKfdEDN6wxBnzmwjJ77qjUdDsrQBviJNvC5dwqiUFmGsBWYBLZAyZFF1h3g1x1PUnJyZQSVdzXw",
  "key4": "5betjRKQKWELB32Xuoa6MRahmhCRX5neKMCwdwFHAN2LLwaNcBr78LvHWvYRHcho7thV65P81ExrB913LfKJkvY5",
  "key5": "5FwuMNd3QKVYeptC8sgNdcoZjomu8ReXrhkx5N5t6L9kpn5E3AkUozkFU2WghbFdiqKUyZ4q6EPE6fXxCsgyPbGd",
  "key6": "4cXS8PNvzesEBkW6wxNtFjYQGGJ1vq95GxFDrLFyKdarJwCnpkzXgbJYNTgzaTEXMxXXSWuhfBJ1TAWTm8pXLYyj",
  "key7": "4mt5WR4rGGQPQaif5TEGmRPSjb3oUVLSNvAyxG5BSwhNQuMLxNFDctpr13CDTPZW6GdY1a94T6Jg8nJWnXnd567F",
  "key8": "jVbTbJFuS2AeyirxTf33A29CrzVeoPwdwfd4NFfSLQKdUocSitJaP48ZiQrEVnJpFMufaeHuYh4T5s89rxenvcZ",
  "key9": "5gcLzdiVHWKcSFNysEuAfTvF2oqPeb1yJiqJ1twwGsRbPyqa4yj4jVbhwt6C5k8tX8LRmjutmEnhnisi99GrgoAj",
  "key10": "5c6K1bSxEbwQts6dM2wrJMc4dYsK1qUeaB1TaYjWiDWEY5JCGGhM5ejsV27UXEZm6LPWDwiEFCvGq7vYEHQz73D8",
  "key11": "3sq3C1nFo3jWrimcSNHk6BZxeHiDcXMss38JzuRTpGefFpoVUxF7C96xW5jbLmFFmduD76d5FoBEZHhRsWSB7upP",
  "key12": "2X5ump1mhu9ZppMyWggtsvNstVsCCcaYAk66NyGoxAeTtiYyxmkhL4b65ayRqxseZvuvtsJMDPpySovvo3vuuSkq",
  "key13": "3y5x4BtV4fmX9r6bZaknhxgjoNqc3NwKJNZbdRr21iZi8cnPkxqpFJM7AjVYiXVw4PZbRkFd6g4iMF6VP738uvhS",
  "key14": "2fHE38ZxGxX1tAporUV6DhtgXQYJ8y6fM1bukAcvLfJUUy2jjawRgGW19QPVLwfXDA7trDFCh4zJLdzEPTSYXSAf",
  "key15": "3djLJEgjALRuaYJ4UdAjad2PAfcVjXnf83hSarNFWvNQVCk1FssB4SqCrW46BqWRMQdcyKXfamsjktPSBU2zLmUv",
  "key16": "5Aw3USqbHmLR5iUnpJAuZR9SpHWKt6fn4nZDqfx2sgxK8fbUeH5FDoyfcf9WachfNsfAYPdDZw9EyJiqqDquvy4t",
  "key17": "3v46XdMP68tf73yTgdsDUzbn5DK8BHP63F6zQjr6om3tUxokfnksrFAy4qtmCnTtK8WjZYYuaVhMfBdkA8PuDruu",
  "key18": "2HS6spssjPrs1ntuo1RxejSbYNXqpkzkunj1eZwrXEEPkmmPiTBWAuwPLrZuM8ZPWdQKYjJi1FnLxKrpbtkX8ncw",
  "key19": "doaCyLH4ZiNbYTzQgqKRPsDQsKWQwjKtPGU3ZmZLgsvZWjhzvHhBiLLNvgMoEfY85yUNDNffJuBMbS94LSYY7Km",
  "key20": "4Bu5rEpMBWAMxdjXCxbMW97YxG3ptDnaWNN9KwpQPPcRcRNzw5o4eLxi2ELQUssAm87u7PP6wLESDTfZdtEZ4yb6",
  "key21": "2VchqbdRhSxNb78ui3T23NtKdbxALkFJp1FDyNhQVCkNrhXtabibszDhapn6VKMSiU7mx5NCTEzyV1viZnnhTcsD",
  "key22": "zj2ZSz7Ao5MccoLxJjt4GbsW7iF5GA6LBVJKjPtFikmTsgvUrzmbu587j2TcnHezvvigxBAXCoQYXyZnGgqxmJS",
  "key23": "31ZxdtXKMT3FUzqNbrAyx9uK4GSd2d5q2twL9rxFhdKcrZyeZGzipiMeRSk2MbBeyMfHviCTMLaxVqQmYeJh3d8a",
  "key24": "5wxkP6wrCe57uGjeCiNZueQLWouro7mgQxtmDw1PHTfthvqzAC9pDYAmycDwzJQ9j8MsbPwS9f6ELzVEtmSK3rND",
  "key25": "51rKsgbRtx8PycNRGTZLapCFh6bMLWKLC9E5SwfspKt92t37xT9ec9RQmbVWFexGXcq8d8RgESHe9Vqn1NZJNLzb",
  "key26": "2gcU8FkMgeB8uBzbVKqbsmYEcxxDhTbzW1SwQSXHN7sqCJ6fPyEzVQ6dENLNnhR12ofYyANcUcMiYgYtq71Ckbiv",
  "key27": "2QNeEZpCShSLZrXC1CJePN5zghziRWuMKpcRaYUPSjn31jBaFtLxhydnaa4LMmibhojiA3TDDYUV7agPE4xERSVD",
  "key28": "5tcGYwkKoZfVcPwTGwX2N1f3jtNDSEPaNfTey9PGDcWyiMrKdyui9uaSWBDU8gBF5XvWjAgs6uyxp7tHHBk4vaqT",
  "key29": "27k3pP78kuDnR3aUQ5gVSM7328fWy4pYcE92pQAAdmjt1SCq281Psq5uxfLt4FiL4v7Avce5MnS2Aox9Zeow9AR7",
  "key30": "4AAu9AVAaMY1FvffKLVV1rShj1e3B3FoPab28aQ1B9ocJ2mYQatuk5gBhPc4oSzohC52xyvT8yJ4ehsC5spex4j2",
  "key31": "67edQW8QPrG4NPhE1HRMCdc5nTAtkvwbUMMejP8sSxAsRp2gJS8H42kj3gr7TDU2H1gdddMohjtx5J3eraS8xrjX",
  "key32": "25vP5WBaD5iBMxcZQ2Vi4JviAi66fZEY7rrtdmQhFEeGCKndGe7g3ftJH51LtKxoTJAQQuwEAManHbipy5urFTLN",
  "key33": "4duELP7hXrW1dz93aR6vBPVvVbUxNWDWBMauBiQAtyXVnsDnHJ11N7fivTXG7riNDZqHQ8L5TutLWQJGBHzAqrQq",
  "key34": "4RWSiAyCDqFFnMNw1ktXZUVTawyNs8wHCvNsGsiBVwVcXtRvfpr937WH7S993WFQWESD4UgFNAeH5zz9yh8XZAG1",
  "key35": "3jiv1nf4M6YwrRYKefAX4fTYZW1dVheVVKGu6uHHk4B26Dj3VrjFTnH8ZWKsNzHK8YevGkDrHXNy2QeDCMa7ndCq",
  "key36": "28rNkzwMZ7MthmrVPTkGvAdutQuovNUsgjhAKWe2TdXuwLKpfoyW5LkR39DLxSMJKCVzKjehjHjsuaY9SgLwparP",
  "key37": "2NGyeu47NYEp6b2MuJVtMPhgiZy2qCBpAkmLWTrdq3E69Cn3iWGQYL9fTyG6A9cUiUDLin6d5h3WBcrrWKfcJe4Y",
  "key38": "4yKevGv74kmDNicaumRAZeE8ucWsidtG642bTDFoaqH9rfKgTA8GYrsjLsY2ysLYdkxBgCV31Z1g5W52q8FMPG81",
  "key39": "2RBHs8fhuHhAcs2WeRfPjfcFBQqEpasZdGZSuN4nohoiXTScrBtj5N2Qw6GR1z9rtdrXZemZefp1uS2z3RavT2RE",
  "key40": "PoabhcaXc4PcVVGtw5TY3wZvEDYxdCnovrbiqbVyL6kDsSbAjW2zhsLTJZ3apxwcz4JmNsvs5PvbdGtjEykFP6w",
  "key41": "dvJhY1wLyGJ9BBWd7qtPpBHfkuk269qSWXyFgmaFGNVvKyuciYWqD3SHXoxP5yPintFji1GByazCmNJAL9z5iEh",
  "key42": "4kWsZq1NcHTBKdyUkKxLBBJuynGRJKiKjxSvQ3EvBpFiPjQN7byf4xsWWSsmBMHi1zJGkGjhyeUEqiufWhGjVxFJ"
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
