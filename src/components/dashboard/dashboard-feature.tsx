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
    "4XAkHvvjmG4QFjobiSP8rhQda7kTzchZEWDQYbk2sBF7spiEt42S5fWgPwvqg14BcPrFz1CZHbkLfjY5JiqcjMYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thAejwgr79vZL6M1B9SEKweaBWFVAsQoTjS6SWm6tzg34T6ivjpCGKsKqYBjG1vRMdUfEHiBjft5JWVnRiwmakm",
  "key1": "wdQNo5NLMZnTTGyUyy98KdcPa36c1ujvJ4DUFvXB5CJHxVvVWjFBKKHw6M9vebaHmFSTJJzJyuT578Qead5qBQs",
  "key2": "5b9Bf9wSyoF9fYSkoq2nT8Knm14Mv8gDkUjmKmHZn6gu9TiYjRdZLzELR6HUs7pSQsi8idqVQ9osPjaS2vUNtNna",
  "key3": "WEcWrzS9pVnbLiQGeQRq2saPXcakgckvjsTFBWMEX6BgRmZxEekozbtShxP1HA4spvAQTXwphC8ofqcnkmM7Rxq",
  "key4": "3jSdJ6SSuJtuLHNFuyxiLg3y1AY1Dj36KkBDAD2hUDmMM4h9XFQoqmSHXuugeizCZGwvfBcxQBQ8phm6hMM1E6SM",
  "key5": "3BisnhHL3PJzBTqUieobJFC9TnVbRZeUrZd7ym6pWmgXAVKhw8WMmXPQY2Nb3FFdH6T1H2pdYvy3q5QcmCEs3NCt",
  "key6": "12VijFT7fmk84fs17xKZ7hamwLRKo8HBXF3stwabjqVqh8gkDDSgPcDpdX6v7MJo3tS4dEVVypHhUCDxJRxYXUk",
  "key7": "5MwsWZDLo4wnJtUvK7RDkFCsBHh8nHTsiYx3jYiiQJn2v5ryrL29rBunKHxVq1aS9x1Eo4dWjbLiY8UpSdktDNwu",
  "key8": "3MkqQq3KCW6L5QchMjFFxig6TNzVwDmszvMRbQ2PJ47JiMDf64XEcQM2cHzZqjopjdQLZDbcg1osa8m3CNwuCvxi",
  "key9": "wW735n31jwcTbWcxMYE1czXz7bD6CaT26y2FPigma3LRSugoeurfFyGcr3XAqbQJ6kCzZWFFi4ndCvr49NhVz4Q",
  "key10": "CMihS9o6qdUFsHGF3qsrowPMN45PpGWdbWaSE1et9WyNtfhP1XCBrVAXHsixyNAetLPwkJcYa5L8TD9P8dxuLRT",
  "key11": "iEoPeYcVkrojFL5LgevKe4Q7XLCDfWigNu9C7M8QEuDJuzk5fDNAVw3nvufAASdyR1PY3Hy9Sx1ztYJpAh4fjmL",
  "key12": "3JpUjLfRtG4hJ6biMD3yg3X7mx9Rm4ynBesRrFN8hNkqAaQ4PjQeD38vUw7vbpupeDgZmqTBcSnhEpGp1QnsHzzD",
  "key13": "2zodt56cxQQBw48iHczJvqzvvc4TdRhioMbXfGNAGQNG36P6ViyaLdW5yD5wEirQvhsBunvVTCn1hyuM7UewLo9N",
  "key14": "3isw9oECjEMPjQa6vsF4Tz5kQKAjKuPmVHRdepkSLM9yGkHWFGGVMr1UjkJSnnZNtywJBsKEWd6Jvjrt7wQVBhxc",
  "key15": "4p2BtN7422vcVvYGRp7BZCgQSa92MnXZVDR8XeKNAVw4yBA2DteHk6oy3SRx2zFCmTBj3F3zdpFjho5J5irSn9LA",
  "key16": "2aEA1EzCPGiP3BmqPDJPbZWNGu3jLUjMeZBs69u9cqajiYBgkRYVu6uMH9nVb9qRZRzxphvqYMhASoedMeFgkih7",
  "key17": "zS3JsS8FjayLrjzyxybfFqCycWq1pW6yBdoZoa17zMXbY6EYidfcrsvxrC47oDHirLkzSmeT8rp4YQCtNWyy158",
  "key18": "2nJYJHS9gyZSpV1GmEA1xF7SLCHZw6UFbk37AEjBnZwCMz5j4BqcGDp8gAeEYRJMjet32PScCizQiCbMWd8UqRNm",
  "key19": "2wTbfHfKDWRmzeSbMCLMmqGwxStKVSRWZxhSpiP1BNPH7mMg5HvLUdhU34KSL8zNWAGG68SNV8PFvYJ9PXCwdDMU",
  "key20": "5VbBGxqgQju4KgxSuGstfQM64cwLawUSqzEtDB4kS9QGAEwKrdk6CeMEnkwCgivNpuwUB8vHhBFEXJQtwLc1MYRa",
  "key21": "4pXw2wxmtCpgwNLAAbgKDsUsaeGxNNUZjjzZ439NgdgBx6BZFryS3oQ63JDQEvtPZnVWDkDXy93HTzSa4yALm56E",
  "key22": "4e24NGWaxNUxSvJh9SDTTQrreawV2HPUGw66HJk55tMBGeLPCMMXGmUqBGAW3jTAUXEBNYp6zqtF1jcHaYjMXiGK",
  "key23": "5BxfS9kpg1N5QeL2f9qXCBgbGeq4jesapz6gApgWf41g277Mk15JX3WJjDFjCuwbK5n3QcxLcY8RFWiJe1AKYz8G",
  "key24": "PfkDEdFt7ubY33HYpSSTd1sEddq8tVeBBHVFmr3xEbMBCSHhauid71ajDHwwZ1K5nVhmdxA7WV9mAYgmxMefDiF",
  "key25": "3yCjuHX8GK19Ri5GTVWj97K3bbffm57otr9X3KMSyhm9KPutmz9D1nrixbs7bg7NjHvHEDRuwgcGGsAQPFmvoktU",
  "key26": "3CAC2FMae1uEvs393qZCZGTBistWY81JfGcpQJfW2pf5YQuVLFmY1YUKTaWWsXeu6SYrZeL6wqBmGDUwMhJETzMe",
  "key27": "3ZsCpmdiNrSP3onfVSLBFmgwBEy6L3HWr5dxgqmDzrJ3Q79Edza4DnsurPE5wZPmvQbcrZgNhN78rFoqmJL1rRPs",
  "key28": "tew8XiJR9E1UhrU9Pjtm5Dp7yGWUo6uRajUDnWUmFjVyatwFULt1mJFCpfBWGctrWSiqq8SQNNKedg5ZiyL6uCT",
  "key29": "5WQTxBogFExYyM1YbU991XRiFSrqR7im8sxjpcQFRU1rMmeYqKM8RX9dpssSbCeB137wzv5naL8JNmDh3wwagnaN",
  "key30": "4pk3GD8BPVbSAuAboMt4bc3n6JiBCH9jJP5LzYpJXwxPLA7w8dXja5wn38DpgqjJ5fLyg1BvGnY5mn1bVUoVUnFv",
  "key31": "4sXvsysYAbYZirxRLk4z7qBCs6H78GVLfWyC6uj7G6D9yJ9wv36BX6eLyD9YHTugpezFQvAh5HkrUaLcQNYotTTy",
  "key32": "5vhGG1cPqbztmzAjKgS51HgmuJoVu6KLz8E7igTRhVPWebE8txciU3HmXHR7PdFDkas6M8UtzoH9i4NVK9yeV7Gx",
  "key33": "dgTVSUENtrnZi17bzHTzNCLgrGSjHGJ5K84Aj6hV3PSUNsxd2cG856SHddw6DrGiV3GGy8a2xBT3SgA3NZraMP7",
  "key34": "4S1k1cc1cvUftQc3vZPCSvAgYe4PY3zHmyc9PHiAYMhzZVoZfsPDNqV1yfxQXpK95ZHtht4nbwiS9Fpp8yNbgNCh",
  "key35": "5hT6UfWNkEBWKt1AJQH2EZ3bBJvvbQwTvzDmQAmvHJnfPHh1D5tnobSjz6GgSXCKs4kx7Qbn53KnSrMMTRjeNCfF",
  "key36": "5YW4EBr1CpdveQHk8Rv1KspPhwpR6XaNotCy7kYZ8K7wsZFJFGRu2uDaC4VEAxQejApFSXiWuVHyLST4KTVFZsZX",
  "key37": "7Xw55SNffX6aTX3Vwrshup6ncSfd7m45sF48WzY9vJdqBbaEMmLVPUU5DS5woNgovaKHwHLyVL28JjEmFNvdhzH",
  "key38": "4W5xwSHmD3u28FiSQC5EifaRD81HsJaay9K8LC2Wn1dFYeAZALHp3J7qme9ZeigKe6Vne1pKtsjKxfvHo8fQJtG9",
  "key39": "5SrNwgXruUMWBaoDPTmsPGVin2Bbkhwyovm9pAs6FEAq3oY7cvgU9MBQ4nN2kNjDCTxFgBP5RgdwybiY1s4GnnMD",
  "key40": "LtMoKcT7zouQowYd6G5FnbdyBVweGBS7fqjcAHDu5QHpfpVkzhUFFY5S1tcieNZcyZTjEuyCCbh9RjVwMSC5Kuc",
  "key41": "ZebwJTwzJrwyeoHbcB3yHhtmHWU5LgC5sZwfGe697rWh8QzrX6S9wwbNRbrP4DR5ixBuuN8SugRSU7nbULQFyxS"
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
