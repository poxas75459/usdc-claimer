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
    "3uXcRJrHpW7b1bgji2ZvmjrNbKNKozQjcvt9WVCtbcA8C7ZZ1Ax3rwnfC74NCtaAbpDDb78C3Ttt32eXSafeiu4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfywhdTeBjj57AL5W5G8y28LP946gh8qfTnMdTca98atNXyPAYunDpWeAuAckc1eee9hXAa1bhaS1FFdSiyfv9k",
  "key1": "3Tn246kDrNBC92gMkz8DzRTXA6sDVMw33z7xUSUXg9VLPbUSVzJdsZkASRqXvu2iL76wUS5UWMoHpPDxnKuDLjD8",
  "key2": "5Xdo28sMDxtBr7PsJA872oVKQe1TXb26HoJsdFUtDq2EeH3qBRdzWPc1etA48gvidKaJXQaipjQAqRueBGZs7Txs",
  "key3": "qT6ntLF635nWPJDCekZpwEx39FJ1HitY6EZTWpg9fq2RAwZd6mRRy6HLw1KSLQW5iM2WGSAws8gzA3WLQoFJ6Mm",
  "key4": "37MvatMVbRkH1By82FAu4XJ6iPKRUuh4xubpc2cZ44Xq7bgm4b4AeeZDtjzQRzBjFyriwz9XFy9FXAxw1Hj3w4va",
  "key5": "4iwi2DqL8wGpPWVHdcvPU5jMeMxBZPhKHsuvSYhDDizezbUQMkeNTGXHdis7xhDjiGDWvDDYACe2bVVCqmDFkQky",
  "key6": "5G1bMRY8N9foNBYQn9Sv3ngQoYi9xKAgRS33M7JHfCPHkrER9hFEDz5ocnqiZ7MpkaTdZzX7Aizad9Vude2vnChv",
  "key7": "2ehk4zwdKvV7d9JyixEaoft2vZpHU5fHBo8JzqSYmVWGuk3oJ6vRzbeew7QmjG7Qt9vrSwdiP4CjsNe3imCAUD9P",
  "key8": "5oRTTXTH4wts4TqZViM4L7vTJjvRZFioVd4cCyh5FSUaFCk4UqHGokPRnFuNzftutbbat2RTNRDniXLYfp8gcXBg",
  "key9": "2rbhTSPMrZ91J81gA6iBsQdfLgzuKkvHmYzezbVWcxng9V12HLNijwMj1LGYUxQChm8kt7xnWRSuBAcNTkzCJvAv",
  "key10": "4b6RbAzwFR5H5zAFMEXouLJ4KwyDKx1s1osXeqjEsXPiX9JXsLAbbCeEAjLEN1RRsKo69QwqtNc7XyaH5i8wUW86",
  "key11": "4ZjKneozSZVQreE6Hm1teHKnfXeArwUumAjKzcNcZNsAgCufCbwEmB7huxiFKPmvcujxvnHVhXkdtV6KqZTBm85e",
  "key12": "618XJYEF7oPm4NTqvqWykWhfYjU2rwJrN4gAY1wuBV2AfJT2NyfTiMjWTxq3YCMsqK6EGiVX8V63PWajVQb3Gsfc",
  "key13": "2kgh517dqF8GginuBoSJa3fqb2c4go3XhDiCovvZbowNFD4K3nUdzkmmhqxn21wmHNTRGK6bSmvkV1ekhYZSaHjC",
  "key14": "4yZR8PTi7gFzkxmcunSc9BdL386t5oDZELtdortF1gUsvER95vTsZi8aanbWaVq3Kxn9Qi3hJYCMR4QiQV9U5Fsh",
  "key15": "2V1uNMudqVCfQZzeqhN5oofSgMFku6tX2aoeXRE6mPDxVb2SeqpouPNiaVc7mCQLPJm7nDHFwbmpXfUJGseBGeow",
  "key16": "5QKdDAytFgBp63sc4GPm4FVatWAGZcFfvawdfdomHdqTxuKHhd1JARmjRBQjEY9228EVAryxNF51s3m2kfAYEfbQ",
  "key17": "3VFUxxYVTk5k2ZJ5Q9tYCE1zKvdA7s9FceS4MGqViNvfZENz2wd6zUEFTUXDD5V4c6Cye9LL4zvZcZbPPinWtXi6",
  "key18": "2NBEaeknHAWo2UMMEyNyzJoKhzxeMV4tDoMm7buUTH2i19cr3dHnryHaF4r9qevqr9EmnSoawqjMTdgeTzWMJsmv",
  "key19": "XcJAnAwJtFFGKQxav4pntZzkeJCnUF5FDS9hHN8ii5srkdgjGAF44mbmsLKWwCmTNDeaYqBoi6xzsRYctfN42yS",
  "key20": "4VxhrN5QdEgSN2oTE9JUAa8QQsHEZfiBWkyfqN6j89AUvnsRNumzNWBGL858exq6i7fnU6aBFHJA1NHJaTP9kvZa",
  "key21": "4si9ADG9wbiTKRoyP25ycX3heaZraHwX7ZR3PhnzCZ5uFi9eJQUggoXPppGmNgbFVqqDNS3Ayu2LSABENLW8oBst",
  "key22": "3CrNgEpgze4mcpNhviH8BUoF65HyWbieqV4acYkMNRy1a7kZFRkfjZ4bx6NsH2cdkJham17UNHijAQMknRyBSbDQ",
  "key23": "4sJm2gnW1ZreSsnCYUCFtvoKsSoc24XHCMV5vjgNqjGeTNkX9r47dTzW8hpYwvnpYkuTcEP644R71upU3XrRkEe8",
  "key24": "454m6ZfvTZaLBBwwSRewVDo36ivJqiA9AJvGPENEoSTE9cr3pb6Qb7svkmwgBFLdNeaLfC2DKk47F6ohjrxgSt1J",
  "key25": "3F4NjGnG9wJbHcFRPmdDJQkEwSfNxgjDaaiSPdX49xaWWnUhtnfHuTQyUoWviffZefvRJ82jEPidNrnemR8wqsWj",
  "key26": "3WoTR2BbfdDRMAcLf2dxGHQTbeskoUu76uCLHAjKTKNYaLyZDdmVruZmx5Dh1rxzEcWfewUkR8p34t6XixwUVxDc",
  "key27": "4aMRxc3hhgZtdv2EcVdF1xXTKQG7iMTgHrPu3BKstBnShyW63Jho4w6weMQqwGkafVPo3gf2Cdxy92GPxfL1JAcR",
  "key28": "fysbPDa6rRQAiSgBpQwvyPuGBnMVauLLCpizNgdQfFaRvdTNTvi6bz4SAQtBFxPTeAHoaM9g3CRMANVjozZjwMp",
  "key29": "JxDBvLk6Wxw5gutPD2YJjf8R7tyrBDEHuUftevG5DQ7FFzCqVkksSY8jacDcBhLZbfP3rFFQHBMM8rKyrL5NjLf",
  "key30": "9HBuUAXB65TgdikZn8Bnyy8bBxzVknhhPEXpw8GZCtDpCSgWuakU95Qvq6sAGDgPM7iPXbC5dDNTetEHhUz4X1g",
  "key31": "36x3PArX3EhoVAphPYcYtE5wJRomS3HoKh5wAo8DqkRhhBa9aEkcKAw4bmLFcYvvbHuoho5Y28t47CMmArSxcZBw",
  "key32": "4QjtC6AEr3zomszcLC42ANb8DJgfRVPFcQLeYjF5cKCsHWCPajgm33PfSte5feQQyKfWqr2GAbtVF3hwXfUFE3jA",
  "key33": "5Pssd8syY8qakQJiAS5U3jcKU3etA8KPDogQd5qEqmnTi4Fjc421Xu8TYAcS8ji2muoB6xSj3WnryHHPkLukooah",
  "key34": "532fzM9cFZAaKL12eD4V1WrnCFPgZQSRHnnpDm6eex23SHZiHUYbDQS5xDbGyiPT4UMJbhjho3LLuFjHiNp1mJcB",
  "key35": "2ikMsb2iB4eRmM2BDdd4gX4gCCmK3F7zYanwFUERU8NS1Rih9kAW4uw23TR8YZCnj9gNUdWWZRVmA6StjK5niEKE",
  "key36": "25xzjRHMBgzj3TrUZ4QGgGojyk9KdCCvGMuSJYTAJKKd4LBdGbwGfSjtiMJyQZ4CJVtCBatydY6EkyxMD3fYHFcB",
  "key37": "C8XqBKUvheNjAArRWjEFEiMFep6q4LZPmzDRfg247ba6sdrtNsLDAGAEFXGztfVPdMPaXGb7n8CjqEpQqJTTX6h",
  "key38": "5cw1RHfrFG42LtTsaTT5Sk2Zb7L1dxkzWsx52wTVJzLx3utUaMn7KtKY3Z5JeSnjpGhQq5cuk8vHFELJbiLVs1wr",
  "key39": "2Wb4TtC6M5EkCcCNojwJF6igheHxLFTWVDjq1hE9V1otEgJ3PQuz9eacyu21XjgrFpbDLyufZYqq6PwU55NgyXe2",
  "key40": "5KDMZZ9386KCYUHKw1UFGVnNxDpAy6sFhKpYGAVxqhaYt4MLPV6scGBBSZtM3G5s6YVF1D1SUnpeRBRL623NAdN7",
  "key41": "34zZwL3xJmn2vzJx9WRksyiWMgZ42w8nRFxdWxrNdnRCBohvU8dvJJRhfcouyaXVXsVLWgo39qgcUkFRTse5ueMc",
  "key42": "E1qGtKDYa9oL69Bf4jSQWCUzcH1U3bLadkmgwGamsQ3dyjg4ocdyDYcdSm9YqTkvfSUNS7mbEvHJu6gsRzX5uPT",
  "key43": "2RxTnwTtWja4SEd2QiqKZgVnH6nUsFCAhLbN9wKoCR5Em443ANHbFqoqJqd6Eg1rWbQHTo4kjPDtae7phq12jPq2",
  "key44": "2XSWWS2UqLQdgTWu5GdPU8zFtTPsMNvd3hRB69grRjujKVXsCjtnsMcPSXzetmpTCYKjGjfM4kyNMnegPmUjL8kR",
  "key45": "BKLSodfW1uwoU5NxfkfnWm5nRDxbDZbLghQUSaEnRVEvyie3rCckk3F8TEUHoHaiDA7bTziPf68KGZd4Xn7iGj6",
  "key46": "VUzi2veDPn6WEX81ZcnEgMcUsUkEdNMuku1diDpvrBaY72k6rVX86JCf7zep8tGeU8D9KMQaWQwxmm2qkbLqvJH",
  "key47": "48cRoE5Hqzn8fGVP2Sa6hHtETForXmrToJb5sqZpc8NCyUApA7v1QoLEv3ryE6mFcYteJ32ggmyzdykyyN38rrG7",
  "key48": "zMgdbhtQtqcitDBKF8uthKESyqVY3oysEnqm29CfWBQ5jVBk8iirPq7tF1qhMMj5awwe543AyUERUdCDvNwKk18"
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
