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
    "2TmC4K55CgQ38QvpxuFv1g67sSsLW9EdwbwoLnfUAaF57KmkQLUcWbjzA29Dj5doivV62dDcPFJNYvfmaVmnnvGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zqh4ugkzuFGE1RQpjf2eGrZB4vTW4GeTTZHHV9t5B11WRNjjPfyWcNugHgT64ahnG3sKqMuM55KwCrNXqFiC7P1",
  "key1": "37uuMu9CiU5172oUm8UznTRywjppuK7SJkQtf9HkhDBGUvM22fsqeNAVpUwiDxvpv5T4WHsJNsubni4js1RLmKnm",
  "key2": "4jBajxaNiGgFVbmnxKAzSYxujoyRSWjqm2XpQsL8ScHK91vnWBaqMdTcutvKQtUxEwoZsmXZK56MbVgLjGBP1xS4",
  "key3": "3C4qzDkAgb9SygMdp3hKqDQeQVkeBsW6qTsqJH3Rmm5HdgKe4yHBaEJ5aM3gpzFhwkQ86L6nvZZSzPx7T4vkaL9d",
  "key4": "2CepWi3CzNi7A33sq6ezVRnD1muUhFECjqEBvNNnQ8C4umwXReMrU2uWYPDXe62vy51MaHv3twdQw3hXM8oQEx1C",
  "key5": "25Rvdze9aMEGea5iWc5LTdKVRJPxdn79NQbpRRSBboq5M5tihykUCNpkdGNqpAoPgyrqrZFiSkEmyPBmtt6UcDZg",
  "key6": "3Lh8hE6mQXa1rcyULK2tFCCDCndYMFGwjhi9VcYTNBiYs4kJ27kt1931K612DnLkkBAzbjJncSKxRJNJeRN5niBu",
  "key7": "56KZwYGNjjjHgpNeSvwvkyqCCJaS1WgUm551RL8rV8F3iMhT7WNaM8r3YMHvioZanCpPdUyNrxe7mMCr8DNJLST8",
  "key8": "cNqd9NRDVuz13QrMHV6sUfoRtNHX8Sv6ujheWHm9AyUWFDmpYxjaqw3AWRP63VbZTCLZtBjLExJGk2JocCTJGur",
  "key9": "5enXxxgotMFkNobGzcUfvJyReTpRxGJYmzgSVDLefPrjnVB2RDjyhT9PU975cEZYkbL5c1Cf3t3mka5TpMZb19To",
  "key10": "2B7tPX6xnh9tk1iwEU481yyxovF6AcgJW6aYv8VThZHefuGRGoMxxtKPtRLmfzx1WDoNTENe41PY7Tu95SpFDA9X",
  "key11": "2D74cj6vPaoLPXRwPbRoryDb7zhomqkBG8qfZZUcHufUVgXeDjp5xaNr5ENWokCHWGHNQMenoxEBEMUtTHEQiGRj",
  "key12": "234tneFQETwECQTrQgHwBRNn5L6sDqPEsMVpgbk8XZ41KM4LjhLMMpgyQrTBmEBw8XJSiv7dgkjjSDPsC7TwDJTu",
  "key13": "4HApNNqkbLW5hAKanKkFbPyPHW68kcLwkDmTZsrimA39PjjVx6qz5ZSotykvWMG7xm58ggY2GR6vnF5k3RyxWy3X",
  "key14": "2spoMSW7MdUe4jVru1ToeN9FZ7MwBux2P4T5Utpz2xtxADUwR4oWBrFQPF32bHaE4dsuvksndbEUkLhTYom2Xk3z",
  "key15": "3hvHaVnM9HWYHsuHT9R36rpGb5Xz1GjEzHEnC8QAA87r3SfBuCAGLCY7qYuHXkCWSXv93Fm7ALK2tRDs3qsNJTqC",
  "key16": "5Hmjya2sjGytE4TxNnCMqDXwEL5whSccMp53ajiYdkChVSRKudBgF4RbcTHMEyTFpwXJXrXWoRfBBrTruuARkjEY",
  "key17": "4QX6d8zewfxSB8MGkCGi2biVzrqxiUEVd3vVEYHZoEidmeWN3APmVut3H2MRFhuVQTuK1diqk48JsCWpjVJ697BR",
  "key18": "4SGjEJUWAQEwNkiFbRa1sqjAiSBEt2gDwLL83KVmbJoGTfsGsd1rGFGaiGp7mBKg7rydjezVU1xDmHeskoFN16Mp",
  "key19": "33QrBdf6NR1eRPtFJE6D9cXSwi5WGcSLhWxyFch6zjduxC4rJfRbV81MUajPjZL1UEXQQWzkpUMcw7XC7U3VAK9R",
  "key20": "4vsDLuKGA85K9XFzNbsFcfTQWi3mbpDorPfjWW89mrvC65krwD39rzSyxXT6fKkLC1tAXvqY7NdrTJ4SgN92C5tX",
  "key21": "4Wh5pMAE3ZGJEWGtkfTX1kCPmUJzK46NsbUi1avZfxQC3cFJwv2rcBmYVLMoDsXk9nUR8NG2ZBRvNAvchLbCGqgW",
  "key22": "4siTSTp9Yvgya1KfQSVhzvYSRHWD2PdhqVehjwx7Ei5WPEgGyMqo69f5PhX3Uiu49yX2o3Zcm5yEfNoWADnLfBdb",
  "key23": "2aFjxRgipEesKxNZD5Tzr7iMseA9guu7VheQmenWxVtoESHF7ed5XphsY51muyK1S3bonEfDKUxKfwaXnu1ABx1g",
  "key24": "yzzz9DvN9Uq87ChLjG1wCs8n8rVFh2hgoJyHjtGXu4N1ETA7Urc6zb2eWgiWddaiCU2SM6SQsja1xqyx2KzuHhd",
  "key25": "4XoYd4T3T6VKhWC7jWNbaDPDkUGNCPiJcncbH7Yy5CuUQXXcJBTEc5Fdpncmgd8CV7uXhW2YEkKuw6hGmo1AnKJ4",
  "key26": "5e6vRSdFJpgfugu95NTvAxStsfGt6yEtoT5gWEoc5kxB7nFiWBifpqYzC4rRAL8iiiDqwHVf5MqEaoT76JBf7cE9",
  "key27": "5rZ9xDhSwcsU5TipS4NQggdZXai1jp9268U6WhyXqYaWqtQdcAgLzUXC9wb2cgkBPrZtL3FuyuK9AytSDgpobVs9",
  "key28": "2ZBN7m1yDureDSorMQ3xzXjwTtusr5iPHP3hU2AsAwHtGidg7cFD39puiEHNbydetS2x4J2YtrPFeJ5VsvPDjU83",
  "key29": "5Xqvty88JgCkb3ck6ABwhXhEf5uPt51dJukRLPGGUZkSV42ujmyW2E36MNvHLKWk9fwTFMP2CYeBJPZamFCESeSg",
  "key30": "3i7gquEcdhVsnPMCCJP2G54iJ2Vz2Zzh5AG1Y3XDMgaytX9ew6sU6q9veUvFLUzyD1prXovCy5aFETmoZQvQ5GC3",
  "key31": "RtXa1iqzG1kRhQPgC4WpgTYn3AsASUrhRiYXtgwFs5FrkteqwVM9bHzXkrZWqM8U8B32Q4oLrmBTWxhRyRmTmCD",
  "key32": "4q9xbruUasp9TQyFThkuPnjXjZT1KjADUTsyAgTCvUiwEe3TuL6V93evzaaP3Px4oB8BNfk4wn1647kdHNzFrYsz",
  "key33": "4GcfxF12Rh6xLLpojsmwiXN8suScC4SiVSMWYGCrZqDb87qEi4M27MPNCMY4G15VH95DRGGG6L8Lj5GMuAbZwBrs"
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
