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
    "2sWr9Q1mgxx13pnWgtCjowJ7NswGXytdpPGymomwgurWNvsuDaQEXvAph8rysVGj5BQw2Kj72yn285fLvqV2vnjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwqqmHgFtrZStCAxx6XupuS4zGGRHMwvXM8BJkyFxg4trKBwyWqof47TBgT6afpc8e8urUfX179zrZmvFH75rgA",
  "key1": "5beHxrxQvAXQX8nZ8NsBTvf5TkhmmV1nyi1tM5esToe6fq2Kv4YcaxpeWEnkHwjVWPA67YJ75w9XveXXDG1GtNcr",
  "key2": "2P9E8qujaf9pLjqCzBm37p5upgWDbsKHsJxAXgz9LxoDpkzXwtWbU4e1AkB8hFF4ortMv5L5QhHH24ZrricMScX7",
  "key3": "3fveH1zGCcLD8DRrFJFTcMiZG5i7JVxCEEgdo2fD5LBzXzWXbRT91R1EotezVW4dsCPv5kssLeK9WjxBvbBZxdqN",
  "key4": "2JVWjtN4f3nYrc6WVK6giXLGQ23Wq1gPNUX5Bz8JGHNS7NU1gvZXUhCDmnT2UHNiCfhimcY4Fr1jiyE5WriwuHMY",
  "key5": "4Rr9kHYjDGLsvTRETZgtq64kMuywYzSzvnna4nM64XsXQERqbAxtZNvhbLJimtYRRxNibFNmyTySPKmKXwJxRBHE",
  "key6": "QmQUJoBb8eaV9KtLYdDSF7BcQHgE35VYhbxfDcmX3GMLJe5Fvt8eA21dgmucodRLMdsGCdjdeaTHu5vZWyjPU77",
  "key7": "2WKTyfAF4eE5SxFJstX197TpgziBKtoJyp5EbjJmsjMZuZzqmsjZGXUfV8SQ8wxMRSBFvg8KK3sG1UBeJaHM22n4",
  "key8": "5d3c2RgkN2gXdQXei8pg6zGNj96CUwbborsAXSwE7PWr8B85JZMKB2h6mNZ1EWHxk3i6ZeDXkD3SLLf1fpqaVTtt",
  "key9": "2aCWTy37u4Gv8Wc8R3qzfSSLngDWMKPnaboAw94xZAcG6oeTcEWiYRzHDpkpekyfuXfwkJMoNUip1hU2rtVihr6p",
  "key10": "58vYH1rnv2c956pU8RXdPa9N5VmBGZDDZ3PVm2QWYE7QACBjX4cz4HbhdCwQPDe1TNcqmpkN4Pxuar5jG8S9Bk4f",
  "key11": "2MKb9W1fV4cNJYuLkvjh1oSMryYVAn4ANxAenFDJ4BjrXAxy7MgYxmT1kETNVUMP9e66H3PgrButM8ZyB2wcsWdP",
  "key12": "3V5GriDgdqJzhH3pdJjHMPd95KQqb235KwVRp3DLqyJed5yRqBUueYKzmeaT3yBFVHfd28VJTRLJrXQU4TzEw3tx",
  "key13": "4Xr7eSAT1twUjFrN58Npqb2e889uZgPt3YJCfMkefayEjAX6hRoASDkrt6y9K6eVDnTXUXmrdxGAjdsrjdy5H7hC",
  "key14": "533ZKu7Rzjwm747ozasxYcM7WMd2ohhs1Vp4JozBxpPhdAVF6HkvCD7Bqft4in5BHQtENVFg9JrRK6gyL68vCq6v",
  "key15": "3YtdBd2CjdShcT9bju9Dez7mQXr6zfekR2cTYr7wzj8XZiAPsV8Lr18bwxcDSn86bSikvQTze1XrtgN16yFYix4E",
  "key16": "fPSGCyWGpLQGwFkUNWAEgbCB924SH9ePeEzpyhuKRQqTyXjBDuC6uEWXiPZhvTSHBT16XEmkocUv9dWUJFJyRUL",
  "key17": "5R1E5xuPjZ8rBH3SfJpBQJzZaWF3gwDvqVDC5U1bd2U3k7Guedmf1D7MJdjhcZ9KqiT5pGLDXeApNbshLdamdd3f",
  "key18": "qqkeGpeAWq7NoC4vwQPbFX1KZCbrAAee9YQVLAPpZLvUdzbW8tC5FC2Lqs5v7r2P96Kxt5Qr5UZxi9DtZqVBcea",
  "key19": "3qaERt9xMxY7jEX6HFaBM8r52Z2MSXnPY33TM6gzwQnwh6Nef8NvV7dd8CAfJF3M351361At2nfmgbjBFUZrSMAi",
  "key20": "3nKMYrDoXkQ3ui7KMbxEKcMc96ndE9NYN9uWExfZa3eEMsNZtvCjpcCRAezqAGzZ4gCvzRWPKNWds7EDyYsg1tac",
  "key21": "2UdGrGvQvJzNnkzhvsXSDowBuZJQ9WV2PFqNTHAqe21Aerb87k17HSnYE7JHPrWwNoB4rpShPNamJyHBpKbnpVXU",
  "key22": "2oSyDfrPL1wcVz1ynnREpQWomcjcDiTdJ2DvUBx1aYPvNmwbjQm9mfdE7XxAkecgwYfJ1RRWSaA5QezhtaRysgYp",
  "key23": "2gTBiRupuBMMyNUqRjSzs75LyoBoX1XWMrh4s3fNHqf8BZihas7oiqc3J227oEua49qxgWKJzA1HM9jsQDzrxxq8",
  "key24": "2K1GXQKTFqVi9GoV7s3euTjCSmVBz9SpMngUfzdkz4YHJqb8gNsAof3WmvQHtZkdx3JkQWS28yAeG1ueK6xLdcLv",
  "key25": "5yx7v3oUtcNpkJzx9ox6ePPUshZY5qjYUWZzvGsv9GPUCVVSFcHeiEVSez52rw5Xn6Aa68LBndrPFYKvejq6QG2c",
  "key26": "2tor7ke3tuSzWGLPzc7AsJKQhPT1xWKaLVnKhuJ4AwT7gAruG77bN1h8xoXtuSU9bSLMFvmVuZNtCW65LXeB1cx6",
  "key27": "4DambbDW6fayam9Efzjgz8Y348n5emphGJEu3qkH9LuX9JCLmv9AApn44Ho6fseL9AcWivk33nNzvUPwxtQnoyME",
  "key28": "3tzrSfuKTkmvPgUgpRoHfe659igobASrJMfTGczy5FiG62iZsXccsovUjAedvUyGuokhFgJ6cyt84fXFcvWcwL2W",
  "key29": "5TAw7FTxv4nWFnjdnhpG5qsEufZ11bd9M8mvyjSUKgYkGF7uzpM87S9WwCMEHwFwARWroCYUcBA5tyEqKeHNkxiN",
  "key30": "48QSxq3ubWTd5uwG3FduPb3K2L23AYQZ48GVMsco2bT8oKJLovAEQtCrUWLoJYuFzDBgJ1wTBtNJvWVue7XapDKS",
  "key31": "cfpQcYAo5yD1LmTTgds5UdLxQJcdZTQC2vzaLRBDkdx72fx4x4wNMGF43zm9bzvvWQoUSqptzC6gTWvguDzzEfZ",
  "key32": "4e6EL9fYrEJ28Ron53ASt3ZSKpzHBq9LFZnYfJJDyzKnoEbTLveHziRjmutqAwXChA27PH9ZmytAxStYtwHvBCdZ",
  "key33": "3k543aZVZE7EVJn2dHozaisCAfTGdMzTWKUWwXbP5jNTZ1jRCJU6eoL9K11o2m3no6fUrqsauvvLvmDHyst1RMzo",
  "key34": "3xRgknML2uuKN9BECR37strNTnbDySa5GigiXeF8YtoaX6B815LCdQ8k7CVaPphtioa9GjAzGJ31eG52C121FdMa",
  "key35": "4qxeUNg7DU2ezZggYGj26RDRL1fPzELigH9s7aqC8wTqy8roqtUhAewKhvfXmQtF17fhcboP89YBKs1gZa2NzCB9",
  "key36": "3n445de8QASTicQucyuv9d83SDe3zZdLVZCaDg3En7gTUUPN9J1eCEVB88mkiKsaur72WjE2HufNMQ6Aoy4N5noP",
  "key37": "S1F7qW4ui63G3h4nRs3YUhq3NooTqeSPHX64MAbcgfsEcuAJh8qwePrLdFC2Xx33a521YkVXfbED2n5ZJYTAqWH",
  "key38": "62nCw8p6ndaZNKy1gPNUrS8qYLvZjhfc1xMFchtw7psJhvoMsd79WDf555HzHnA92FsbbVymB8mYrLJT2KWjYqdo",
  "key39": "5ftwr1gUXqybeb2CZWsbCVjtAPyBwjCELirLbU5KhaPs9cmbx44Kfd9cej2ASMMqzYZDyxAsM5VyEHT1LJ756iM2",
  "key40": "pDMBc2kth71AYeA4U2r7t5wbkGZyDV9acvrp88WkERMaP3Yj4XBiDpCeKThpU9grXoDMfZWFFqPMxZPnfuiX8pS",
  "key41": "4jf7ToLWZdwNhQJiB1F6qCvQaaKFEicb3rKJSNRHQceQAVtxdFkBbgxxsWYwk6qMiiQWJ77Qc25dwkC36QrbEr6T",
  "key42": "4UFuCLqNa9Yn8UkgtuBBpQpv5dom7kqhmm6FyUHSfcQ2mNwkA5XYRkChPs7iN4ZeeqGRpnv79GQVNsh7nQeuMby3",
  "key43": "2cCPbhiD1H49BLK7u2mN9eg1ugK7BocJkrhjt69nRYY2objCKYssB2QTWEea61BScLJNwctEqKtK76nyMiTtTYzq",
  "key44": "p2p9YV3w3J51mLmQkr1WU7jzRYYug78P5gxQ4HgqYiiTUjhmJabdxjaJxesH8XEsrJEcMBGjfPcEoRgZ3sKknKE",
  "key45": "2WGHWo9GndfvzB5Gx4QaSCUWchAERjS4CzuyarJ4a5DymMqD4jCpE9JNbbpc8hMvzUb89PH2ErQ5W6orxppobPKM"
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
