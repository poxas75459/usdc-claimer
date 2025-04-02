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
    "5mp6LSCee9Q27yo9uEZAuawVyWQDtfqNerfHvoKfVCTZUUWtVTyyduxaKZERgRHUnxwnpWzkMeQbj47voQD2qtzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UUjF2vMMQmdW5ieoh4zciw8QDMKUukzt7C79gWVQsAprDZhfcFGPSvPu4jXVmNg8WqJsiXqUW5ECcgS4Yy21BF",
  "key1": "iS9GiAWQZRgtnE8b7bGMT5YnFAs4zWa3N5bSLNZc4azHAixj4cNA9SpPxbMdMDHbzGMZ65i6YiEdZyXVpJYiNCv",
  "key2": "5YA456KAKSoQ49pYuzTycsQrL8Arbu8ev3TrRteBp62P1ozx2F5EQ1gq9zzgybjV55ykzAn5yH3G7cBUdR29aVEt",
  "key3": "qXEc1H1LX2NQigwSSqgTcpN5evtkDSYSZssXBtn5pLudFKjbvFAYJDRi9vqc2VEnhbsZ3BGs4ZWzsQkVUXMFXnm",
  "key4": "rbyUzM9NBWrZk8RD1UcR8jo242vcQyzRYFxaXkLA9ihxrfWZ4SLprx6NLDCqAuGHGEdq9XR1jVvLhu1beTUxAMP",
  "key5": "51GUTULxR1e3BTPMknVhzx9Dn3RUzBzSdWHDytkGDPrRczZFuuN9gugJ3JZeNGwx7PBnKVd1sPQuuMLpEbupbCiE",
  "key6": "5evXnKszBx6eBna8iU6K4GWTHWrCajwD66h9Rhxz6HnP1bPdfDkj7HMdEeyU9PpFH7Nmr66VmnaV5rSTK3qShLuo",
  "key7": "38BNv51MUx6DV1jwvb6w3cM6m2i9zsivdJVfJfyfwf9VDPXHo5fPfHMS7Ab9vEgRyNPQVQmtqVJcexXBxVh4MCaN",
  "key8": "33bnWZ2qS9fDrXynXUPf2ZMj2xVccfSceGcqVXuDx5ius3tVBJa6uBTKmznBCejUuePaFzZSnS37iQ2rkBGa12tF",
  "key9": "4SDtgsgEDZ16q1YNKQ64Rrx4b1MEw5sC26U8riEVKUkkhNiMDzJdvJPU4GRvn14shBmHxVxB3Cpc2Jt4Di32Gz3T",
  "key10": "4yELmifsSJbDAKw76pC62dZBtn6QL6AmLdUos5DyWQzKWM9g251hMSiLt32AFaoFHiq84D2uMShVpxDqmLDRJ2vF",
  "key11": "37vgGQSLoFemBXy8RrenmSqbdGLZR8JDPwTUB6km3MCRccMTNbS3D3FpZQZGp6f1WLECqQU25YUPN8Yi3opD6nUP",
  "key12": "4Ad5ARgEAjWSxQtSp6M1vzFQoS1ZS2emE2QB98WY2qnTgWNar6jianaYjbfwmKpuzU9dmwD5854ghUpr2PcnUcuq",
  "key13": "3NZLPtuMHFXByKxLhxmpZXdb6tMGA7Csydz9doPBSGw4rTNejsuhaqkW8F2ApwBRzHsQZyVC6VU5PPp1jzi2N6an",
  "key14": "4Xk3w1vfRS4aDivmZrt7KrxNLGiFkgnnLoDK2FJtE6xLVKSXeabGKac2gXfjw5W1TVwgZ9UTtmx3PPkPxtitAkKZ",
  "key15": "2HwTSAAfozAQhWmyuxc1LA2P7FNz8E21fLGC8ePFXvouxF7TuQHjWApzjcoBpB7rStBGJ3wU77tEamxf6Rm7BBeN",
  "key16": "25imucySbsRatGSrcNGpm2E7CixtMg3bf7CtDEKDaCnZBpsrASJSatGGFvvMCvvDKJCpaBafgrTm18pjWBXtxbCv",
  "key17": "4sjaH5DWvzQkjGDKdrPuLBFQurydZzRr1Sshoq8YECx4bvBKXmP4M4JdBKtgUW1FLsapNfNfaETweucKbA8zrpsg",
  "key18": "3G6FY2Lwsy3Tg1J65cib6sMW7ayUVJCPoLTBjSSCaJnt5EfksibcKQsmScXeMKHnGYhKwR8B5pLh8ffmvqwWgbY2",
  "key19": "54avXn8AmYQW9ZHhfJrRkTo9hTpdSHfLavnKamPyEjhd6V5Y7g9xeNppKXYsMVTs6kHn6Yq98iFdRCHAaSTtA6n1",
  "key20": "44mBPVjaSxgU69FJkUAYC5XR17MaSUnddKEk7rEomgxPLPhs9KrbKtiSWgioGsfeCRXEyas8WP7Y8ime26qMH6C4",
  "key21": "3Mb4SQyUD4NXwrRXuPq85o8sWtdBs3vGRzBzxdvZuNB5KmFNqdK9fUg5ZHeNrgxACLGbKj1WQYaMnBtysAPRE5Sx",
  "key22": "5cVTep8UzwCgA723JDBofbih695Cruk54mHQxknpaDxuVdCqjLMcynR64rjS3xNbsZdrg9ZngM5U1ycueNkaAp3L",
  "key23": "GMdHMCGxt6sPS6xr5KNGbtk4JLBdhzNRSF65oLtXJcVMRUE8BaLLS7CRFrWTq5FSPJaTrx4txi83URqXQTFuQVc",
  "key24": "2KacvP9spMxeKgna5qD9HfpP5BctxiXWJNAZDeaHjqEGUeMx1Dk3U6jMnXiCHCjFGrJV5HpoqnGuGTGWdacGipcn",
  "key25": "mEoXbrBfoih5BTvcYnFSHwkdcVHBte3hHnMpoV1Vvwed2mu1Bq3Aj1U1uYQ641iZMGRkfwFu2HH3zkECNofTzWm",
  "key26": "2XYGHfEMNF9w1ASU1pfZQszat9joZck7Ug1zEQHprPe3abHFxpJZ9HoT8vv5mzaqVvfE7sjWSZgCF31Cjg4auoyK",
  "key27": "4MSq55dWGLWYqX5GxUdYEhryZs5ozzsQzuegQmjXVDC499FDo7Yft4SHcjxJ4cPuumzZE3w2BZJzHvv88eBR7QAf",
  "key28": "2vhPurX6H6Z73bMF7UR51HdsYCVmnrYQKMee9fjy2gZeFyXwGsuRg4ULfzrMSJVnx5dahxkzLzWR18ymcBr5xTPA",
  "key29": "5WUpPAAxt3f1NAUCstDgxSRAtBohoJnpk79aoWusFvMnieYx3UaSZSSiNaMLcZsYE1cajebUJeLcniVvVyxFDvo7",
  "key30": "2WTUpbpFqCdWNczbar4vmXsP69f5uDpi2EbSeLK3qF4y4nbsobqxn6wzxWKyFDUHt6L4cjtkU7EhKuUzowzYMRyZ",
  "key31": "4tt4gMMJjDdxZusysu7GEpzLVbXNz5vBAjKjDv5tB3PPNBjFmVgv1ZRyGrfKkxZQxP7FqvP8P7Ja1EsKNVmbBZhT",
  "key32": "5TEmgZPfCs5CYyZEsLWPUiip8XChGn4rBXYUxzMXJKTppnBMGxoSwhK3dKaoswCnQAEXRpMYYNQJq46VwXi4rNa8",
  "key33": "LLdyrzs5M8bSb59D8DvbZpetXn4juLMuzq7Ta6wc8cFvW3yB6EVyPRZqwpD1guRcpmnJUz6hwa586zcEorbPz5x",
  "key34": "4u3RiYbdaa1RmYhpxh6tZQQCJku98MsCEhYEx1bLoirQsCw6Y5M4H4FFwVkWJxTZnvVeWDky8YsHdcCSwMS4teUb",
  "key35": "35JRNRCNS4tA3ZY5UN1yjRiiifKWoJLdogRBkTAELR2aC7qChLkGYwaPLKs4wCWKxkZzQkr7uTXf8fzCYkZ9SUjT",
  "key36": "5gNPb3WcsFJNUGm3NDrvdUz4i31kdgFkrumSvetem6DRUSZYFdjnXq1sJYsRkFZTLqyPAeC6AiGGy4LkTmEk5us1",
  "key37": "4QgVGr7kRYZTqXgSB7sWEv8M1GhKCvrtirh3vNPcb2GtpgZ1qVZ2vW7fpkUts6pbA2ZWGAJwc4fJ7tGmwB3QqJpP",
  "key38": "26443HMP5WME6QPS9WMw3aZke1gEVSdFyp4Q6aDcgcR2T7AkMgbLikmy6J4bi9dwR3VA2ckkU1prT7jJUd85PD5q",
  "key39": "65QzLSDEpdNAaqtCSKXAeHhXTxhpnbeQ8HuttRQUPiNy6kSuxP12W32dAURvXhw5DSThcCgzAU6rJq3KtEi18iAk",
  "key40": "cG91rmYByw6hWBSXDZGEUpRpVHqK9WYZnKYYhL6FmbGAbkP685cWHGa2PPDrW1mRHD8trSgWjdhuHJ1XELkwYj7",
  "key41": "2bu8aPV5Lf8XjmDYGSNjDcpMht3GVmGr8VSXngRNukgMazEaXgwZuWikRFT28FfgeWiBBezP4xunWRi8Qb7pn4Ug",
  "key42": "5LB3eD5SfCTX8C9CbCT9KD6sQ2AmS4mnJPZZFaXDnpuacCgpDpanrUmt16TfJP8aYE8kaeeL5u52s8xfa2kjGJ5c",
  "key43": "4fVcm3P6WTLE7pfvocidJvVbZr1v8ziAQtP6qVFvzpRKJadZ9MV9qWYuNzsnnzHqGBpXCw1srGVXuifpwQjGsvMs",
  "key44": "4oQ6J2fNXxJDKGkovXdajDiaunW7Nn2irK49Eqs4JxjmG7sDZYSduWQrprAphe3sdQBzAzbMxvmLTVhde3hgqbR9",
  "key45": "1fQfScJQf9a9VEEHRvTffN9ETy8G1kbEnZ1f8aZfat3BYYo4BnKpkkzQQsk6kmw6Ka3eVGn4QLG2DZmi7asi3wa",
  "key46": "2X8VW1Kc5uTp6eJrZkhnjuPnqCPfPQ19RAykTLc5cB3KML166gzuvMyMCFYYeNVoFrnV2MN7SneJZM8QE6p3sAa4",
  "key47": "3PkXD6oxyyJoYYMiw4Bnuf9pGVsPjAEx2p4C8WqNLjYDgmz3tV8s6KFwRpRdPSFr2Ao3jBMubRu8xjTfx5iwkSUx",
  "key48": "iWFWw9BPi1Q4SzxqCQBJf5jAXTC3nvPLwEG6QxnRhGJGSkhRmAqdzGcWUuMxzGkuNCSe2Y4KZn3xg7azwAozmK6"
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
