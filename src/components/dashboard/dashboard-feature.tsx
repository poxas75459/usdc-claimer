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
    "34FaxhZ5xjJPCAsKNNbUenfgaTZDBnsX1qSWa3ms347PnZTxYnmzDgZKUYRJhX8AUhxzND4KcAQqDy3Ctoy35VJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tUme3fvbfd9dES2Zk2r23YcgoQwj5x15mvs1SfeWY5YjKbb8xTzruoQA8PPkpuD6CExEQqtBZqugFXrWkzL5Do",
  "key1": "4AwfQtjNTtzsho2G3nyB4C6N8DJN54nw1ZPiZ8h1GGsvswytiQPLr8gP7JQahiSUo2yxEDRVAorX7sxWNH5XyT2Z",
  "key2": "37AkZMmhxKh6ef8GQh84YqT7shAPWyAoJV6JNuQZpvpW2fhDjNEzbWyfSHCVgW4jX1QvdxPLxjnW4Wtuz18HAF3V",
  "key3": "3jTMNkGpU4jjijpY7oXPMCqPirQUtMEAXWjvTMoRdP99nZV1ppkWnjFMi6FK27sksuWb13vnZa3644849mDuNxXH",
  "key4": "H2KCTKb3PZNQPxVH2PtLNHDMma8ZFXTxnvsPkYcHWG3NJcMmM7TepSySAXYNsijgBcZjhf8osdx7S5knHS86PgA",
  "key5": "45fGbPmxyk8Dn4yYQnCe1SaxfQGDpAHujHFWyvzjoa9XACAyCiE3PpMMV7smRR8Fi8LAYncn9cDcFZNRYbaTDuDk",
  "key6": "DTx25ZzL6LdU4EAg7mWs4YSdusHV7aFtze5j7yZ5rJxVWY8gQKW32TaFgAN85DcWoBxc4ChmZFrkZktKE6gbixt",
  "key7": "4wkuv3EHcUHmZBeXqQ4QNiq8RzdXB6nmU1JbAGMgvdKKzwGaSPKJA5tn19kwhXcHSdaRJM658b6qMgdiKYbUAvnV",
  "key8": "381uwB4Ck3ijpXax22LTUKdWuhRCMSj3fneQcmTiwyg1dGJzrAYoM3d7mp7hXdLREWz1B9EP6sry5DEyesLot9p5",
  "key9": "3k9gLd32REz73BbnNurZUKiinbL2EYiVmgxuEiucs5QXvCwujGajNgWLAowc7B61Hn1Q5EBmDkohSccscPUzfy7B",
  "key10": "4yh5jkSF9maKGEmym2QjqkKganRvCoNVhUmYraoeLMDmKrhag2jLNmeMRdkq63KPrUPpEos2nDsR7snh9iYz9sch",
  "key11": "5VgTcniD227aPw9XTbaa4tAWG8XLSEiPsJU6xYFWGidQMcB1eDsh7BoyLctozZqGHhnEMeQCQELK6r5vnFEt5cNY",
  "key12": "gcKpLwn5Y3YsnJZEAZaaFigbrt8quJhLogMKrnxjyzgdhWLmQQVJZxDAtjckr6WyQb2qsTdrxMd1K3AYgUbBRGN",
  "key13": "q89Bx6nstUdE5RMLg1RaK7dduvnTZUJAYRrv5T6EdqBSqWjhaKNFBmX4qw3t5FXreRKRBHEKHhsA4L2Hvd591rt",
  "key14": "5HJSRjRB7jqUQfjxY6FSfBhjXdZDTd3jSfhAUEVTks6pERte22Sb9wP6TbnsRv7KvLH8VHbZGXYueiAZrCuBAeuV",
  "key15": "5rfMV8DZsrwLrDvn3pKo9Lw8Rx56tA2oNKFQGW19dc3p8Z6mA8WwZyNvSAYVWR6fHB929CdqhKbzA348nJACHdFT",
  "key16": "3h6mJKr4E7tsAKhWYd8kVZHYefqZJQa2wNyhL6hRbisM59NL3Vh84YecSmGNwH4LMDMY4xJc3ruTDx1WmSbnGdwU",
  "key17": "3tRf7cUBa7fuMyJXeAB5QcFkf6notTeN9BBb8AW6hw3VzpBfBkfCV3CQD8dL3jkJyiUHEAdkt6YQJwgASxwXAVQA",
  "key18": "3HedsAbdnVkN3Wwj4rwgDJYx81StTDrCrVEPfpUzoRp9cxU3RSyHRNvHYdkCMCXdMbVgQ7pdzSTZHrht8D7S4ACK",
  "key19": "3zYvqyYKQtJa487fLCiNm2DuNMpSc8tjUkypNRb1NHVWpaDzRUFmu8bUQUPiojUUSNXBS2Yefq2DpvFpHYU6URvs",
  "key20": "2kvBC94pdWZiChTPhy5Pos5HW6gwCjKS9SfdrZxpH7GtCSVvc9CGdQQEnzyhywbZtmvA5iVbuTPk4pFq9Jop42z",
  "key21": "QtwqxGJ5Xm74vJ314NroQQx7B84ufSrPbqxfwQxRSvjeCpyQMYehxTH45oNogxe84YsBgsA6T6gew5Ln2hKdoSU",
  "key22": "5PrwPcQN5ozdaNcVz9L5PvKHtDLUzgjjWfsjxCtxPRtSmk4D8iBmGZzRb3yUpUDuL25x1ws1d4qX8XdCftddnbw8",
  "key23": "YhpDadmdoJXi8uh5DbPBpg1jxPbpHunz3VtFfr84HfkyYwJMJjdmZbmbBLKHYsfLdNL8Q6xzJcPFRdKzMHhwjkd",
  "key24": "2vahF6bTLmBLbXpPh4a2QVs9JwsGDf1kqVwLt3wKpLNqRAYcU9k9gW3AMy4SWdsEsaKkWhayNNezE2jhFQb7kXrM",
  "key25": "5d2iWqbKyDP2ED5Z8jCz7aZHqTgmfh4mLzMe9F4Z86to9uP1P8TdSRPL2jQqhLtDnaV61MY9EdM9bDu2ikLvuYUB",
  "key26": "f25dx6vqPh5gUU1pX1xeEGTNbrYUUcNyQQdD65gGAeZMwAs2Fm2D6rh116Yz1m4SNBQrLTNHHFneBuxnV5dBGWy",
  "key27": "4Nzf9FoiB8TNE7xsA6YYLdJ44R1xArARRLkpwEBpDryhQUehWYrsPcRzj6WsZhoigmyWK4RzSKdkyuNqHENBkmRT",
  "key28": "5Yzx4B4oMPtDuLyYhsp1Z2kjHKaN6Be88NQGcbCD2NigLHfzbqYB6tvMGJNxWVPpdwJyHSBYroFWa8epYx4qBeSh",
  "key29": "3WHAAg7joFzeuKyCD8qYjcTFppy4MUtesohZdmkJ2LyKRvMts4Qvarvjb7ohHtgt5vBTANZazA1ZhK5gPrYDFsbm",
  "key30": "534BVqUFP9b21prJoxWrkyZ2JXVZGiZFLZUhZpcpvF766cyFUZZaroEnhed2k7kUmn319ha7AasMHdEtU86cdmn7",
  "key31": "qdVhgj5nCuArmcnzC6s1srSyrQdKo1xVctsqgr4jeRNPF7t56KHLA4q523WwBzLpyV6mkUgPAadUXBjj7cpfVYS",
  "key32": "f73CrqEnqKpRndicMbjHywQYzDFNQVKSwtiDtYSFrcPG7Pwd12tkxdhPqdsfYDq9BPM823QN5JQYr52xczmBEjk",
  "key33": "3gYbLfBW8gNsaDGXPNRrUjkTfPxcbcVQpFxX9esUhXK8mt21QW6L3ETSNjcaB5pqwZgL2B6bRvYmMFWWmR6p8Gv",
  "key34": "4b5xWqd7QqnSMcnqUEPVWbptkh34XaBiFhX3fjY6u7vpX9MCoVbGib3JpkLTchJUpjJmYvqv446KPtHZw9kMDiBM",
  "key35": "mSeLBHUfZnfbcbddDEWhB7QThuXYWUv9BFEq6oYR1S1SwJ6sPNTJTGZNApz7WPAEHG6QXPks47p59u9nnoHpVJj",
  "key36": "3RcB3ZrBCnjw6CrWGBskkbMnugNZ1r7rSPyQdPndxTaWzRqEXjQBaMgDjSxQZZ3K7jeepCKos8kFGjetQZiv9bzb",
  "key37": "2ecjQCM8owcVmLMJVoRudS36bEAQCjNjWp4YXg7spJ6CQ3jPCm1r4TPTMLaiNyCu8ssRaDyrBZhre7fZGo4Xw7sa",
  "key38": "2Aos378RR97B5wWckASn7ahVf7Z9CCktFBpnRXnbNGXxnXngDRX9HtB9E7ofsXmbs2JnTVbDScz4rL83BF3YbBxz",
  "key39": "3x6T9DJR1pKQMbUrKMvPJ9MdQDHmee88pQSyQkqCDZkh8ocBJgSR1akm8UC9Wg58MiZwJB6Rtu9fgEMTLpooA9qA",
  "key40": "4fs6DwMEzFyZaU1BNdewnq7RPH7gcLhyAkL3E8MpXuyScinenjCtigukwDGcW3QbHSUBvDB4ekktkXbkeMc68721",
  "key41": "45U4obEf9Sf3fuGmUiCMQcoBWAVe21LegTMfmZpihqGPbne3pYPMATRmR4uCdAFdSm2Ks6QCuRK1Ca1xoGD2wAnR",
  "key42": "3fsSff1eBLYxzKGEHw8n9H85WZotHrSPEnp2ZNhFM2zmqCZaxPRJwmMAsPVdEt4KMgrGVXM9LTq9nnwwpx3ZfZnm",
  "key43": "LDAWQsQmQKVctMNZK1Y7RKThM7vNcy9vQkaesYhc45NcanZoDfcTYdkNzsD2ZURyQ1VbRwK26RYxMPtUHPWotv2"
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
