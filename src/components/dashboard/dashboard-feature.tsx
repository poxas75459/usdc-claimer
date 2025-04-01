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
    "271CmFQSDVDugyj62eC9bETR16BptpbwTrsSQQfv6Zr8mPc2apig8jZKn4dG4zMvN3W1iLXRLop3fuaDMgofkBiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yzWw3vxPaSJHNw8kKgHkdbQ9kwxZdF9MfNz58x5vwER2bVCUukFb157iZpZDVB86eiGvEEE1aZgX1VbWm5KDctQ",
  "key1": "62tuzcAVKt1WzH7swFLmteWAKzTggL6qYDUVfkXkhxgAeA1bEoDRSvnNjdP3YswefTDSWdCGcw7ez87JN178QcbT",
  "key2": "Ab16Xwxy17wtTgmszn7CFEipmjwGdPM1cBwefYWMCw1u2F7oWkv2m63CrPUUBTZ67tuBSUFyyevuTdr4aS8X4oP",
  "key3": "5K1LAkHuGJ7txgig5k2yWukQJHgeZuP6ugJRiivq5o8yojrYDHcbChoSAHumuyDpp5DSWoFd81Yh8n91fbgvEzR9",
  "key4": "4oLCkqThXm1fRx5qAk4knLgzfEDsru2swh9zJDQMTiSoEd9ygd9UA8L9BySx2semAqBoZ8w3fUuSKqBPhhWcg1X",
  "key5": "4mWMom2Kg3ywbh3QXhoKafBCTHuRc1XD1y3Ry1VxTBEB9d5p1FXd4mQibz35Vy57LVZXWqCtPVnC32rBtf5CBHQc",
  "key6": "2QpQxEC62nKU39YuEaMaaNvj5FX5gDR2JPgaZAn44dWRwsq2qXoPSygLfudo1bfWS3txRyiZ8phC4Xcfn9aKj1Uy",
  "key7": "4oe4RfCHcTL8QZv9UURvE2Pyc1Ljc2nLKvPU5g3QuC13NG2LZkfNMVZPLV3rAtXijB1kh4zvwVzAPpg7G1D6LPFq",
  "key8": "3242yjVuatQ68p6EUYtGR4Lj3yBfzoCsdnqB5i21tZqVNtU2SJ3DUysHpYkBuLeKxGCoYmzw7vixqGFgAe9DTvnX",
  "key9": "3zdfiDeybi5ZJUxR2tT2KockhDEHnsCJJKePKS3LAKt9Dm6DyP8zUH89FrdK6VAuMcaHkZyo1ouvjFpSJwktnmzA",
  "key10": "3ZbjX1r1m35YSptBydkWHGqHbLvsVSpAyYpiFQ8uyorLyyA1GnNhNBT6aqyimnykum4geSb5FjiEceyhWzJdobcM",
  "key11": "Z6qAPR3YhRS9xLGqJdLM8V1as6UUwZi1ivcdYxjpnkV5CvRd1PPwARDtPaSjY7fhxUaZCig4hHQ4T7t1VcFDnhE",
  "key12": "3znMP5zMgzVwnrKfo7DmACvZ1sU8Tn9EYBZ4Tv6rhwG6U1ANSiiaAhMhE778YX2Ki6pADVPAXwAEXA4bw9y18Y4",
  "key13": "2xeuuBpfwocr5ZG1dVQFgojvFsh3vViYSKjzMV9k2LiCmTxANWdmzf8rq27N4JrFCd5beDvSTRUC8GhEp3aGbpaw",
  "key14": "5QMr7rfeqTrrf5N7xHeMTQtwjNwUVi5A1bAYo6DqWm3hUUrzhSY9rW45GviZZPNoXLxuEwv7bzNqJjGzZ6nRJpgm",
  "key15": "1mhVFYURiNdkwunaCeKQUxoCyDVHqLGhsapnY92w3QZbJdefNFPNEA9EGUAznduZA8boWMa4vM69f8cLKKUkZB7",
  "key16": "FdpysfNSKfEELpjtTXhucUjUov5r88fWNTwYTKbHMxhPMG6oxf8sKS5FrmzNHLK3E2e4URUGxy6v5gb3sRE624E",
  "key17": "4FccBtJFtzxaYoRMYa8HtfzrauQVV2X1wTXXRZUipMGu1Muf7jsWsTkmeqoxWHWeeNadC8sPsg3v9vDk63Sn5M7M",
  "key18": "3QaFgZENeXoXFD5ZHMZ7M8rbFBvfnQm89RbwRVyaH5XQ4hbo3LgJ3qkwa1Hmg8xBFZ2HmX9vXSVpASYoSpnkqZuN",
  "key19": "3ZUzHJRHuWnfWWRPGjFosqFN811CnGph5pz9AQCmcY3BQQAzhnw9X8dyretnvjUL9MBVTcCzFJQifVtvaaYwirfB",
  "key20": "4m5Zt3XLJB8a4rzQQNoQk4aLvr1SKeUYG8NGK4utjMncTKUqRvU5j4WqYxvSqGxerfLzKqbaVRcjn3Qx8v31JbQf",
  "key21": "5t8cHuVB8yxc6tyuUiX4N4GPxdKWHButPLhiUQT5i5sL5z7aut5krNC5ZMx6AUFuoXEqU6efdmmR6TtefMoK8Tc1",
  "key22": "5V3ZxXVvb96Woucmt2sHZQhfUUmLd9xvbrKUawLGLuNQXta214fuegs1RzAZNj4hBSF1yrFmWrceLeEyYW1j7Kim",
  "key23": "4UpMcnbFZajNEKbaGysyne54R9rfpybptZRsXuHpjxbWxhuYVA6ew42fgeccSnrPP292CqCaGSHYgebmYnT2RZEx",
  "key24": "5UCGqbWNQTifFSQfVTgCNXbViF4pZRy2EDgiYR3n8y32cJ2ACngt5EnjE4objfehW8nSKj6WxBWXneXd4XSmKfCQ",
  "key25": "U7MTq5Kq4MtioSz1is8bWjhyC3AGxuCpqdQhwWU5aZUXt7TMo1oWi7c1BUbpTx8ovT7R4M29W7CkwceyZBWNGqF",
  "key26": "2dwBF69aUDfSLLsEvvtF5nRZntEMQ4XFYp8LYzqe2aqRwcwgHU2byMxuw5xbCNWTwHMdcRRdKAivA1B6u3iWifZE",
  "key27": "5321eDd8yVvPeh7GgPC9VGcUP4EyD131MKDGqgewQtpXmEJUC7WCBPfZ3CEM9n9XQMLjtiMH5Cq7kC7H9xqueRji",
  "key28": "58g7nsbfFW1wzhUcrejYmi2L9TTQQ26Uj9YQna1aXuW76kKhnMneEsrchmQKBDyiWFoWKNybRKbtgiSuTozR7kBE",
  "key29": "3VjcjiaMrBgAUGTQgTZPqmpm22p41AsLcZEQmbVvKh4xcAiJg9pEhCDguhasWjn7buoxSwqgJ1rZYfkrZKCdjjHn",
  "key30": "4XRQyETduzYAK6GSCfJffSA7SycktAwRCpETmmZbSUofz2JrLHnCmW9Bvr3YJPQ4AyVdLyBoGSGWAjcs9DHj9hB3",
  "key31": "4kbufL5dZbiAhvtj6ZykbxgttHkCY9MsQsXLZPze4FbG5b4n87E3sLpUxEWpnUeFJJQGXb1tcndcpKtTCfNMZtok",
  "key32": "5cnset2dVFoFSLE1RmYLGtDWxF27zpqGRDcgd44te7iwfdnUzHFG55EHS7QYvmygUbcuYxG9y8mzZyboUp4wQS3a",
  "key33": "2yTX8Q4SD4z8bDDLURtzkA2fUELodQp6DVuAA25XadjpjdxjChgC8rhcQB6QPP5PhXCHqXTZLa8vpjQPGHdjCpkG",
  "key34": "3JDY15bp6DmDFnEgMKP5bqMrDFwxMxoSCNv4yH4eS1JpEy5FvwK7GA4i5Vq4Lxg4Ln7kAcppLGjNYoQ4NVXEtWei",
  "key35": "3pqakkg3jNA3WXQnAws7rpRctB51EK4hjconMyMFo4yc28hzQaHd7hnHdD7iKTNhkEvz8eKt5x8JxfLGVcUkdFTx",
  "key36": "SemfzsEZujjHhPLRJj9EdHpfC4y6Gn3ysJ1J4EwC1yP7EZiUK47faidbDP2fHTJxsEhd1ARwkbd4WTRfpkxxjPB",
  "key37": "4HJiZiEc2URaZa3tHGrfiCHtMXHu9gyqNcnDcNJrQdAQxMPiqBjUn8zGHKp9JaWDNvdKqmUFGtd7SNK8fJKtgtqJ",
  "key38": "3RvoYeZuFR9p32uF2K1GF2rYibmzUankiJpFhSNvd783iU3go2PMk1sMhTkH5zk1ez4sGacojQGuV7xW96Ewr3gJ",
  "key39": "3Vi56QcXiUaWcZ7YUw4Bt7F25hVeoHFMSdz77i8eFXhHy8tEiNHhGM9j3xoo6P452qpFCKdk2Fzd1nVAYsT18mpz",
  "key40": "2miCYv55TzmuxwK3gRfTkJmCb6vLaE7LF7PY2fDMvYGS37NYTh4xRHZaA63vMSUyio8TutC7AdmZio9wTfGucF4j",
  "key41": "5TV74zvFSFb3DUtVXaLVib3s7D57Crxk37d2nmEYtCupdUynj5VTZBF33G4kMWWrnVJdFbeBgKNKt2TMvdRCfbd9",
  "key42": "JFjicHjtgpXdepBaJkPpFv9MuhRNR82KCKD8g8bft3U4hKmswS7jeY3Xwh1HWCSVpxHTmGEnjRhjtA7ZKHwCJXj"
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
