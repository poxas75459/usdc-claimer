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
    "8VUscbMn5c2a17eBJejjjKAkL2yRnyvzyvWpVBuFasBhnT584eNTG9MiYdjx2FnSrT5ANABew7ebzJ8yZEQAA6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6KdZ9Nr8RDUrYpbDGf2dVWg9tETKLbJYDpYpaF2HU2LiJaZZ65AmCd6XnT7uZTXoV6Kb7mZmaP1kqVJY58Swm9",
  "key1": "4jj2ydAacCzqiX38bgQub8sMJ7fSAR8q2D6zsNu6D1EtovvDkXF8NionqUP7ZQ73gSNJ7i7d7W5PP1bYiKPtvpt1",
  "key2": "5VZGSu331PjeywJkYryTLa667hNo7VVXAPdTM2W7R5Z1V5JdDBCTC1RFvMMdda67zDLgUzCPSeWmZ9NY5J9S4axk",
  "key3": "3pxX1Vv7N9u4TMdZBBYejagmpPY3dnossSJyD17qQzRewRcvuqvoLr8h7Ph4JGDNxMP6aD9HAfouPpJhDz9t25qD",
  "key4": "67BZAMX865V4XTL2vDC9wyrDBWANB7vBdVN7fptc8eKvyUdBsiRWQRhUSo3hHULeTXBgX9u2VyEpswyLQ8q19CWE",
  "key5": "5yP3adS14BWT4FBc5AvNjuA6paE8cno6pzSCfnL5xPrdf2Ww3vEZKLrikYpgERNPAXxaiKogazig4bA2iuNiVRF5",
  "key6": "2Tsh9oFEoCTUnve7xey26S27oRi9ExM8FJA25dcyTuogJjaR2H4hXxei14kh6xY1ADBRsJWoCKRSkRaSvAcsCHRx",
  "key7": "3nRpzoSbLxAnHf9jeYtwfd5kiagB6TTonXQp9JACEtiLYKPMnV6U6FoBUrzKSZhckm8Uqm76ACCzQoJK2rXjh5zJ",
  "key8": "2Q3VB9n4dAknA2sUk7tcf4eu4ua8QueajPN3prk3RAchfrW1qqa5CajSWpACiTSDGBPbne49VxMFwdynG7VYS4FT",
  "key9": "5scosQcXdSZqEG2a7UVkW2gifNRjMbBCzm69JM6UzP9CyeEVaMUGSL8cDTrvzvddTED4yGTtgGV42zAzBQp1gLoV",
  "key10": "eBmA4j5cHFWf2x4ECdLUvLQ7Wqs9AF5s9j4pGkmLF17Tf7m8mZg6cmMC6qWk29jtpPn3CktmJEKr6qPwbZYkdnP",
  "key11": "2rVK9iWzkRKedBHDwcXtsfEuspZ4vxj5nqKB6j9fcf4KXmV8RsyT4TpN2SjDpfzoSJVLbbQFchYLtXbNzeUhZ548",
  "key12": "2eEL5XPwKzdFs75LhHirm886NrRNyznW3rXQYS9bPYWDsHFa8dqnJoibGDp5GC4rtHgiFAGwzyZfbRFhCyeAQeL2",
  "key13": "4ay415ZxWNKrLWCoo4uLa1U5QFAAbYAD14Q38g2DcCPTiVNSUydt73GrXXqPhpbGBX9nt9LJWGVwex6HPzZ8LhTX",
  "key14": "2PNDi64qiSzL1R8R7PZ1JiA4qygeLpaZm3eF7fcdg2HkEp58kbho99xaBjCqeBF5pwdJZ3Mz2wHaze3BBXkZ3XH1",
  "key15": "4kNZvuifADnsJw3xxkgzYZ5ocHNtiTTTRcmDMy4AARLrMfi9NiULZVfKuWeUzM33EZiKCTnPRU3LoNMoXYSzint8",
  "key16": "5Xj4YrWEHnqSrHmHyk8oTX988Lou5aWxZpfjtSaNAUcB9WWhaC7QuFJCPS7EesPQusWGaktSnixXZ6adgp5A3nzj",
  "key17": "4cKW8gisaUZy5YMTkA8iUTgWXLPsA5nk32DfMJbjmC7WBmRfmzxKMHFdZk7RFodzg9aZQ46fu9wtAeoAqxFnPjea",
  "key18": "2DYSDnpRuof8wMpev513xowTwBghPViKFg6tGTnHvrhqJ1zVJoE2GKUBVyjhdpCHGvxr6ThLegHdPoGAZLbFMjWK",
  "key19": "3djGfRcmunfUF8VJwv9kUr8u5kvtFZqTt61aaJH7HoeHLa8ym8EJszvhEyba63zCWY3ShRELy8gh7hW3jcVhw8Cj",
  "key20": "5Nna58REMmB6JFCC9D4DZBiqvWhsuA1zrc71wXqHzF4rvKwpPZvTuNBMtk7LxBE7PrH1JYzuZ7Vp6YNagMyEsjMX",
  "key21": "5ZRMno4DPBB1iQFyET7Ve148tEyPQNhUSKcsyEr9MojsQNkH1mzEG5jzMEEu6WyoqPfRsKxtMKYYtQuTeygxENQV",
  "key22": "28oQteujxNBnwtyoCXN1iK2EF9mbxC4enrbUSGd9zhTjbzpq4PsTM2fypYX4NktPhBXSU92c9wxbACmbyGJ9PVB8",
  "key23": "58EpvJGQYkdzVdnyyZVpuanaSbaZTfBKv6VfA3JLzeXnmQ8JNgWoTfVeNmpiX7x8G2BxQUsQYAH4dWuarT6AANjk",
  "key24": "5SiQyY574VzFWewJok6haqiybx559FNqaSWiWBGzGGMFxZUnEo1VD9DgMWGZwMiwqoJjVbhviTerM6MRUfjCuBmh",
  "key25": "2bzKxt7Lr22okq21B81TyC22VM78PepQU4vD8G1VSLaS27jRmbSG9VyJxqCuaPdnojDnDQbd7JWzo86E6aCCfQa",
  "key26": "3AHDnkkNsW3WGdLE2FTDUgVCN9TbHEfNnQDEft7j7U2cSx8ehVpNNiJprQnxVdmgSLqPCw88d8ybsj5Ts11Xn89P",
  "key27": "2xr7MpJNizz6Xph6YSfJGvLu681YXBy5xP2VGKHE3NKAKJRAqNfQAdcBKJ9VfVsNPaQoDWwk13NHWv7xsi9CTDta",
  "key28": "3CBvAXCopTBUe1PAhcpxzhPRdqkxYQ9jjBjkerdGcbonssCacYH3XCDVHtXN3ZZ6Trm9hbiKC6HqDznJf9qDotGt",
  "key29": "2KZuNWmX9U2TyoX7KxeRn9xEYefda5zeSiWz39QnRJwDsCLekeoqezReZyW9djcGEdtnH4Hu1NsBDvTSS5gSAmTD",
  "key30": "nfd9sK6CPdqV19A9i6Ejm739zV1aQW2XPkjEbW8mjzLWxLG37QsoMZsUZJbLfdbAs933gdhDqASXdaV379bV1NH",
  "key31": "2vsDPBosoWimtaDVhdyJERPBcYbsqP8JDP2b9SHSopXS3RpUMkYPXW7GbmjoAhJkToSbzaNFZ39fgiuUYbctXn2i",
  "key32": "4XmmMNX3aeGns5uVkpi5inEX9NEwZiVkPvnQ3jTDJ6XBa1LGdq1FFbY2mcF7h6McPpaJ4Nwxunc35ZDCAnJHqKch",
  "key33": "5BodeT44VT2PkZZ4cgFvPMwqkNTgkHvDiP49XuevShdZTLk741PNeveRqdvhNrWstmydLPufEC9gwzZjXe3wHWVo",
  "key34": "TBrAb8cJsVUTmdKhfEGSxS8rXefHCfr6K46K95q24TJQp86kNJsPrJEUF8g3CQCSxBudpuFCC8HDcUXVDdtRVBH",
  "key35": "aR41y6M2KtrZkj1yMGUyqdStHxVusHH25azvaVt71SgTSJCjqnBw5wwvZ4KPRsHddj2SdgbThFbskwLSNmeRmiM",
  "key36": "3dRDUYNmYcftbBe7PbphtuPV6k6gF1NTvfwvrhTHP1JbcvBkcfm3o2x7Q2c5AW1XYSADtLHhgZqao7UHKoqHMB1h",
  "key37": "PXT2qMGBpeBt43k7LyyHojkKmYGRVeAubCzxkeArGjgEvnpTHmAgbQSQuUavr4iYo478uca3aMCjn5A7hjHKVyG",
  "key38": "3jd16rEkLhz6tZCbrfkzsWsj5EjNnyZz3mbPBVbh6H23jHmF34JE6U7JCWVvYoAHDjfhTvnTrUzVJexifXnPUhHZ",
  "key39": "26cVzLGuzW2gKcxL7vyGCcPk8YFSFtGUzjXGmAutJ7CASh6zuwv8hVr18kY4T4HwVPxtG7KoMLeL7FwTo9EiAazJ",
  "key40": "yrHart6yHS6Ui5JP6ib2iBNjVvfYkVJY7rd8EQEHU6myt7ZRkQ2Q9EfeEpK3UrVQVjKDRwRWa1mX9DvX3SRAGtW",
  "key41": "RA4krm4Bm6BRRtE71eJ5DgzrSf1YQ8uUaDJy2UocR9PF3shFEV95TZinrSykYjmMDxP8yk5hzb2xGR5gEhD3isn",
  "key42": "2RMAb1xmcxGoo9jYG9kQd26KAG3M8WmvkFPVWZ9JXoYxFRkAfoUSnPWVQmDpHN8ceoTV57ycU7nUh38TfV5oBurK",
  "key43": "39PSeEqnwFDwjioxaYjR8wYHiuYaPFUq7SDPrcLVrYdQfP69M6N5D6quezxbCtz8wQkM5wQKgbtXto5Lt5nAWPy1",
  "key44": "516Y7qMAzEWhX9GCbnZQp38DXEim8ANAzV1NQnpbnUPKhsXzWpt1RwGhFkpwTTKfyLRb4QQe2YWcfRiv3upJivQn",
  "key45": "559UrMdmL6JSwCUB8eWQKEzFaBmXGGDkrbqd4ctxGrntKQ42JBxvUBKQNgUudqQ6xAYVacAe2H5fkHsEmycUeiZz",
  "key46": "cZSHejo3GD7w2Bf58tXJ2szCUbyZ96yJwLYQKP679iZ9PzNwKyo4j547tkFYjmeq7h98DUJPmpxDLGWPsfkcN4D"
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
