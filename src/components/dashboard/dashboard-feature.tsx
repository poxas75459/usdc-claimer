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
    "23MAbRGz6FzUL8KCxTdVdkgrsAdDGLzHqa4HiR86u3hboWiKQHHaS1zaEUZBRnTZWzcwLVAryZGhEqaXmuhapWSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUV2UKD8m8dsu7jjjT8M2yQT5f4xFYRS6G38u7qHq4JZWp5LU6oWDbbr5DeLuyMd3RTytgeLTvD68KDtcQWjNY1",
  "key1": "5ZnSZUkbcwAZj8XV4p7B6ZbiR5vu1Qr155eBv9XZotUAoQUJMS8Zztw8zsSKPxUDueYMuGFSJVrV8ymyAbTsL9tR",
  "key2": "39ghRoXtiMSteVUfTFPPiTD583Rf131pk6wK2Yr4jjiB8E7HkdsDAsFj94BM8NB8nMXCgamcv8CRCfSJ9PCD3v5h",
  "key3": "32HdVbeUiNr8DZYgpc6GREVcnYR1pNGNUAD2bCSZVhcHWX9adfCzFMBsoHvadhmQTh5TAYHWa6zirU5vhw3CoMnx",
  "key4": "9zWxZjA3yVKGectD1tgZKLjdK2EJfU5WR5XSTZ6HwF1z7JZ5NbAc39bvACDHiRhZLqtZwwXGaUv2GewjtUStSmt",
  "key5": "3rGTKw1XYw328jMBJyqcUJoCeabcgapRUneiDBf9zTzWaHC3dFkHf99sUTRrUErk7xQq5nBVN4xuQ9jtjYMdgXCn",
  "key6": "uotaqAFiSwE7Qy15kGNdgVFDrdBkTqizQL3ku1qnHdPQNtYNemBZ2BoZZZAMpLeZb6Z4r6h2UtqpZuCiBidsv2B",
  "key7": "5YsRg4nAbYYxuS65yayR28fmgG17SSTr8nsMKtzhuWkdnjXFgfixYNrFJuUqGFG4XQzSiwXvFPGHofWJoF3HqjPX",
  "key8": "5Y5QWWrFHbLkdjxZEAxDDBatBFF2gp8YJr6dFjok89hxs5q1ALW933yHWKvoN5jVAs7L9H1dpVGXHihSYkMUwdsR",
  "key9": "2ZMsPFH2PGLyhuAHAePsz9nZiNR2Zid1ZEQSrVXb2DcjCBMoVcdf4wvKSk9VKzkST1Ks24gF4X9ZGz3hhqcbmHW8",
  "key10": "3hRAAxTzgf3uiErwHL5YYNLj7qZowpLdAFe67VmYQmoXRi5Pc8kWFeb3m2xMxvjWbTfGMteNJpu1BtFxbzfert8j",
  "key11": "3rxYBXTE2goZyh1FZysZPtqduznDbCDSfaFW8PAtfATGiuvu4ByFhsC6wTMSnMwsSF5L7gwx9uVjF5j5HmsPk5tu",
  "key12": "3U6Qm7QvaA5Y9eCVDzdoQEazAf39NmrZdWhgwwVvmdCpXp3Q8EjekPAz5tEnu7ormT32pn9FArAVAL7YZX9aGcDg",
  "key13": "4Xy4a9XspEz97guJuX5AAiwZeKeTCNTWF2fdSkqjzKWDSTi4Hn9GZJVaakdSGa5BdcMZwMeWij3axAMR9X7hG1dm",
  "key14": "NdiBvVPS7nJ894haEYf5XTp8nQvjmwnuz4QAtnfTtPTXHrM5doomV8PhSAtQvumKkv7DVXWYPE2wBUuanfmzxqA",
  "key15": "5HEWXHq6SxLNDyAEJETTBdjUpSyVDipNqQWtj8gSsMfg1fPUbLF1KKq8YLPb6vc36iKq16i4NBgXmVxd41q6qLK8",
  "key16": "3z3j8NRnqzaLiKW7sdmNvmFv7cMmj5grEYwQ6RYqn7AJ5mMqn8P7HY2xHjNjxDx1xhHMVNLwDBGmJ69crc7yyU9A",
  "key17": "4u4nYzMzt6Qrj5ZQWf14T45raquHiDEtYLtSVHYYtyK7oWS3bMCdfa2efdxpRmgnEcyWgoMgvKED5Q1gLbzuYCea",
  "key18": "4mQyNQXQtHfi4rZnuKnaUHtniRCv65Lvx5RaCddw1fWg4EAU91RnJTRKv4EHSJvHUoQLH4ZJspiQdkAudNjh9P2f",
  "key19": "4TZXwgHsHrX7AjB7UdW6QZBcqj5A1QHkUGYJsYNiv7Cet2r6Xt3XANwoEUB23GsMMH8qGRXAMSRh4Ds9Yf3dSGXu",
  "key20": "38TDvJpzsskpXCqU75YaHonj4FGmgwLF2T5AxzEZGmAvKBFSWoZ8YS8Q2xMFRNArWLNGrzWYGJJKiCVyV1ybrX7C",
  "key21": "QWuXDuktAmyPQ6ZwDxwYFbZVSvKgiA2pFGEFVN8JXNRBp2QqxmRKaf71jcHtLvpHH9xzDnG8b1oRSV6fKd1Dd5s",
  "key22": "2ZqhpVBy9MRB3HvGSoR2uwmLQt46dAGNaX7Q1YhqZ8UjvDpHexJLhf4CzLv9UM92SRWr787SAf19BaqoJFWUKwBN",
  "key23": "4dzhYg3T1hEB4uG26eRUkkEJ8UtrFXMjkLbDEZgQRyP2JpDcwcxwZPkwFMupGcn3jNo683HEMijQPSzYCgKrEh35",
  "key24": "4kEsxyx9kDSKD2Pm1DEysA9infK13zPdSjtkaFgkEq888QKCzFvmk43VHmi2NZ7CocrUw71d6YZzZFCaWE5shZb3",
  "key25": "5JuUVDJH1E5G6vdEncwe1je95P9qBNZ6YAct34ETvkawSpS4pShnFDautREtGHczBZiAFHtnpYQ79zGjUKGB6cEo",
  "key26": "36y3NYsTvvkpwygUyb2nRTtRiZib4b9nyY5g6BWXC2BMTUtLuDgKeVrar5SecaJ1uHxDGmQavjXcUA4RFUhCVCdM",
  "key27": "31XCFUq92PQB3zqbcPE6s5DMW3JxwPCm1prcU4btvx6fRRP4wFU4d11gAP5fihzR9Lj3LjTXM33ukjYLeJ5BPmgn",
  "key28": "3eBN1hwyBsCGbLh683X1GmzndTjzc4pw3v1bnkem2ZJkgVCy5UGY7MBdS4zgyF1P55ZkPTPz65GBDj3wRSfhguSZ",
  "key29": "4zUfkjQTYLoqxPzHnhRiv5ZtGqYXyk9HP3Hx6DzMkicNYV6eJGWSLmQBQa32XiFWtoYhizq1fJLttRvG4nZrtB6J",
  "key30": "4nNEBuP65sSJXREjAvoagZubryao58sjw56iSG7fjxgiK7GiW51sMBAgFgBQzUjrx7XdYeHFduRv98YonaWiFuhg",
  "key31": "4aW21TRSUY92N9kQ1cro9dsTKaCG9LTWF3oetuxg7jU5MQZh8PVwTDqA7hXDbDC2k4sHGwEqNF9mkpGoACmoCtkL",
  "key32": "4MSL7r5CteBVRCzpkgtsL9FeD7oh8dN8dJ7tTCS11TfrfRUktxGU6wn8hBJxtfNbmM8KQArgsz9yqPiuXekqG6Sv",
  "key33": "5kcZk6gqs18UfHbS6RoLWEsEySpTyWDtmQSsiq5w4SaXdkFGT5QxYJz1JnDDVsph4SfvVaPfx37Gu4yAEMZqRWUe",
  "key34": "5c2ruFDZ582wJhZbgdTpYumqHYyYGUVLPrQZK95ytRT9AmwWwVqhK5yUbsXX2wMn3c1gp9EvNWiDX7grXH3w3UBW",
  "key35": "55pRWiLtpXWJ9DuHzpaG2b12nMgpdG1ZCFPE33dvLUouAsLAFFr8erk31TxKBqYgKEZF4PZNnaHGBEZ9CmhmZCTD",
  "key36": "2jjCCSnnfPoAMgcpqxNAAHPssNkkND4XVnzoZNbp6oeQQqRtZDm6RKaHmwXWzfdTB1KjXmG99tZ8eLYBnQ4h5YCe",
  "key37": "3JfiknzRQG2XdZS3ynSSJykQQybjHYcpyoYCUmr9df3nR2VENgHiNRtYY4syYZfcbTLe572Mu72WH1Zwvy2XCdKX",
  "key38": "2z4YrF9LqLb9cVvrorTaiZPT3p9j7rXo1SybkL9XeETZbXM3E235FWa8bG9KsLwGe7V8r1MHwrRcFv7bqToSsmiW",
  "key39": "2AzQvwXKcbGKifvVgSLzCJPi2oV4y8goHnP5eLcon88zUeqqQQdo2bNZat43d9ZYC4r7bxDeqp74Yc5wh389Mak8",
  "key40": "E6CFid7rhnuKNbMtT3T1GrCmv4xq6GxNsCuvfYtzSyi8KKHKFfq2fhqcU3P5ubsN7JPh2D6RCJiWJqGfkx9x6TX",
  "key41": "33UuJ9FsAMjkkJNzXn6sQ6XDntmsysQr86iRKh3RLKFdd1nyHbepUn5npYPX2xdNxdxg5SBn6RT1RgKfFeH8Eb3A",
  "key42": "3Acj3z2JZXg8E4geX3xcis43XDQThqD2vJ43vuSyPya4yFaivJjoPdUSQyyhbyfs5f7vGrDsa5MHZH1gsa5tbEoA",
  "key43": "4MnVdLWMFcbrAa42D5wwZci5FifwTkeij8aPXyz2SerLqHzBD6hBmpXPfJ9Rt68WyYJ1Uq4BCvVyHfssKfq1EdbN",
  "key44": "2HkSg2nCdpqrpr7eNhL2GgdETv2LZdjsUSXi1rjnxnv3ricZnceBP44UNAfJh1mgvbyMvzYV6jkCokh3EYUpqSbR",
  "key45": "3Fbp6vgw1ePZ8j4A9bFZjAMrTqFXmBKFLEbWwjEVy9b2NUjc9Xnez6yvgLHMRW9TkSxTFyhnXrYdyMUYpb4ph8za",
  "key46": "32vSmpAehtxewJxkYrcsM5mEDv8oWcWoGjveZZqG4nZf7VoHVgpy4pHyvBXBPRNjRWFmEaPWsvaJRh5GHfKGqWqu"
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
