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
    "4TDUrVVrzpom3cXinHEnJzEr9acemr6rTJP9EaFjaHtBVGFCAhfkHgjD1CodQa2exNnBGeBMfygZk5MC3hLuophH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuuuSeduRmRwGAcc1qR3z8Jt6zvxt8XqvaepJHn6cpJX4mqYKDZygNa7vg3igAT2ToqrMDAfukMkTQ3H9Dc9hQL",
  "key1": "3pCmjdAxUCczbundmy6huyWS4Vkt7M1YnBr5kfiTqwmNR6rXpJMqkRki1iTVQ2w6jdhvtZ99YuASEY3XEuHtyyyM",
  "key2": "2BjHRDagzwpBt3aX3Qb5ygsvNnocbVtJA74a9WYZDSNvrD2Rt4XpvaEx5sEuuETRhKjJ3bBsnPjWCke5QdWc861d",
  "key3": "tCyte9dc5gENHCX8UGeW2khqNP9fx7vZx1R1GCUsdeJ7YQ9QnsRwbvn5nMh87viEGADSExDdKtoKVUoXA9uxsNn",
  "key4": "ENiWexhYyCVW2bquq23dddt2SBpfTVGRFRMFDNEVsUVjh6Umz4SvZFf8sBJ1vWabLFHecSpKbLTBvyJCKtKChcX",
  "key5": "4b2HAzw6szVWesLvDTSZ74eCQBbqwp3AedkdEsCJF6MSR7HgseonfLzewGbRLYHJjYBhkgRXNPc5vUqoHZ65mps6",
  "key6": "22SfaTkup4tNQQcXoJsym1HmabUZizGHk5qrH5xKfk4L8eDeFHguoUwSwBRaMcqouMxqmaDwisXSAmka72E7Q8Us",
  "key7": "4cNFygWZCFFcPKNq8B9khqENHKsLYoP5YvsHvF1SHhE7Xj8owLDpqYmTd9GKegbWtLKpasE3BZHan3jdw4xtrECt",
  "key8": "bFPf3kvc4uHqjF9aPaixvSG2paYbAiV4N3f9GuZWTFKwFeu4XPPcj1qpH6qnZUVB1pULn9Dj76BGCtRBsFh6oJy",
  "key9": "5xKn7ioyMPZ9LmGZ9gZNy1ANaJkeGLoiH754fbbuZaXJEA6w99vHwyqmg58265Y7HCg7X3ue8ywuzEDw7jDyY9zo",
  "key10": "33hrrGy8v42owxLAGWS6Sdy4Ar5gSZG9XXFZTViQR1DzASpR4MxDoNsx1bRN1CSxdRHjCpPy133Pj6YcpSF8eMY5",
  "key11": "2i88XPMK7pDa8nf9YKywiMLdLv9qc1MEff4wRDTHa7Eam5g5C9FLHPAGAXcVLCpVhaHXPDuiY2e53EW8vD2ec7Du",
  "key12": "5iNu7My8btMFqbtEBQd3GiiY4YuTV4TVmZ5G2h1NTYBvDZAENq2qQLFrNwjxtKF4jQhcYKd3gSbJRFqznWKaAivS",
  "key13": "bmSjbVQFRmxhWb3pi3dWjNmwKrDgnkMoxnZAeE8vsYfo1M4dpe4UMr2KJxUQt75QY7i1KGYdcbNEFTTcUZKM29S",
  "key14": "3EJEbyVAj5KoHFerureD5RF9riCdYhyrdonyfkUgy95A3L8UdDohwzgSkpaaCFqDeYn3Ka8ZrzZLrFyixTPMysxi",
  "key15": "5zSX3JVyqM659NzVxNbf8tyQVzTuM2s3zbUBXnPA9dpbi8Pa3MoPNSnboDfSmNwJvZveFeWPd2hGkqsfohBnvynw",
  "key16": "3DWomxNXJ8VX2gQv5pV8FRPRYRENonX4G8bwMTnRrAuWSaeox2B554BNJBG21emyZuc6Vo9qzFswcbVaioTuc8bM",
  "key17": "4hCPAS1FzisE4tPLh1zYHgAFHB6ZgxgziovHPmkLLSWjeWVbv72jLH3sQ8Aaintd2E9YpdGxayATgDZmoJ3ZGqZF",
  "key18": "4JXpAffdrkn3kdvtgrxkuK5r2uq4pPjYfHfJPFBrqRWRoEysAxs44SxEbdHSx3yqaoRpTQezVQocFU4tfSfS5tTz",
  "key19": "2KR2DMFuGRt1XUAzPrw6JKhewHh85mwhK5K4Lkd4dCnuJu9qegUaRRS9gaqom8BkFARzTsbV8kWE2zusPNgZP38j",
  "key20": "bwCtz8sGF49SB8VVqz4xDjVuLqgyELen7ZEYxrXjjexs38qvNi71CwTJVMuHMxwkFYXJACTS4hhzQpY76ZMxtMk",
  "key21": "3fQkx645YnvgaZBjHQJY8XNGZuxBVpAZd2FmCT74YJZ8QdV1kXS4oWumghL9aw6FwtvkeyZH3mNvg29LW2PsWCeT",
  "key22": "44q4NSptjy5Pbco4NZRYLEei7BoNsbUoJz5VUqukfB2gjS6uFzmGbkiNj3tCBcKPsDPkJzACUHXowEepKppL3fey",
  "key23": "4z89B5B4Ldwg5B4PYxagUULbojWMTqqvf3ShvGf4sLSViNuQ9L1Q7BJMNAEhUcUwCM6hnREEr1D94KwqaGB5tFmF",
  "key24": "MpG6YrRqjhbJGmQbgjPJf1XTr6HD84EkoYxLbntnHCTzz72WzSHbhVcKjGiaeBHhwLihtHyvpDnHSGb9zuZhHnA",
  "key25": "3QHoW5zKGZG5r24czzC4PUeHWPJgxPngDq8crvD9axgb88mybU9zbgaZx3f28KW7nKDYbzMVLgSYn21dNDnxeRwz",
  "key26": "37BrNmTN9dTxu6AAFNJrGJC5UUwvDs9ZHpPBoGsm1iLe6c1622fv2cGaEuLtuaiumNpCfRPrnRtxyAxjiTT3LZh6",
  "key27": "4btXPp9PMgR147ZbVzMduBoxxgV4Ef5LJE1YUy1L5tquSiex1c4MyRo6gdoJvfMRyxaa6neDDDg1PNxTuSPRhNLL",
  "key28": "2sEdva1UvMrHDE4ws3cjpkrYVj64a9Py1wBCnibba3m5NHg6ziLitvssgU9C4VjRuPVuafvAyUnRHdY5rXXvQf5R",
  "key29": "3wGeKpJUR3SJi7ELEcshe61G8Aq8eJ3tQc9fzsV4vDBrwMERNz27HyYiQoyytqdGV3GeUJPcyLyMp8L15ctQJUCF",
  "key30": "2Tn4tzsZqE1WnEa8F249pYGMwQLfSEsB6wURS5bGVS6DEb86Qp6qZMs4GSzoYmVd4nF51MYoeBzBh72xtD977KPF",
  "key31": "5Exu7YMNiJWCuSGnGxS13qxs4P8ueyqq3aiwqy24gUL7PCrhNn1D1apYbFdgR4WD15BAokf8fHe8JUWMjDYuDysa",
  "key32": "5YJWrK1vDJb5E1prrRXhiSMLYYRzdm5seYquV3szCHHjDmQ8UWSygnWx1RerZ1eWgE4enNSxN7nPaMzvobyv97v2",
  "key33": "2kSqvuXyFi4T5GqdNaYsZ5CRJh7TetH4bWaa2TMYMcd5LRW1kQ4hfCh3mkoq1kfvkFoGuKAXaug3UAfRDPH2TG7",
  "key34": "XXnALDY23HQsd1GC7KsE6GoiHrgt3mRgS4qFYzh15PkYVY6wKMFZSQGKFKcQea6mHmh9wFqfennGvADHoWmWkaF",
  "key35": "4cyHAdQmL59awKqZL67Vqafn1Ewv7ZheNy6ThCQ9y41vU9Vi9CcysuZDHk97SLNpNS9qwvEW5X5U6joZUwfjY7hg",
  "key36": "29xVqav4JzLAe9VpasFAPvWb3HM6ZuXGppa5593tjJMvxnzcVYdLkcoq2SmVuqvNQnihLSN4DPQWTgKZEkY8Bmri",
  "key37": "3Mz7zt9EkNEHEXG9W4XUMtRDEUFH8FVAc7NFK2pVcRxe2cpF8if61kRbEx2VMxJk8fEpiHLNifxF85C7WH4ToJa7",
  "key38": "2x2kSqU8qCsaY4q4UFnBp4UAuvTRQYjmb1z4h6j9jpZDhs17C6FHCt5avGazpEJkyMXF1bNGMivanT9Z46PmXryq",
  "key39": "3gevCtfZiFjhP8qsEzRaBfCLwSWyh5P1yAVXWz6KDYkGKvBJSUG615ZCXw3tNAX57GBeZMUjg3g9BRA3N6GFYMtb"
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
