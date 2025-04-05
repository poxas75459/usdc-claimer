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
    "HadsboMerMcy8VJ7pWbivdXRVGWqQP8hhEEAuypWS9GPohSrDLwFAZF3ueWhYSKZ4uLms1pSmMFqA1kwLU8T25t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdE3H6cogsbhYwnLFZo93QFkqfPezPzmGT3CjWbibvaGpFQ3ZU2wAkh6Td8rGscwvyiEzv2RKmZrzQs7GiKM3DB",
  "key1": "58hkpTNUxE75AVxo1HicsUuoZt2att7TKkfgtJUHeT5kerKsZVLNiFFHt3vXDUZqHHj52Km3d7s9Pvrh9g61CYTc",
  "key2": "4AewwVELMr7JsQcvBKBpnD5CKc5d5w49cqF1bvrDBC8Ef8NDL7zX86vrDEsJMhY1HWFiajGoCge35SAAseBhBMY4",
  "key3": "2ktSyR414QvNmRe2d4t4jYqkMoijYwSCWJCC7bSmwLiwMo9F2KHCDbQ8NbJKXUGSYBLbuCBCqp6ePxkV6kn62QYM",
  "key4": "4uFvXBdCVNzY6fnZPAXonAucdANSrK74BTjbSNAxjN2cGxQZ6Hn8LP4Bdg2Vnk8EAvkbomxgSMixSsc8syxbX9wo",
  "key5": "qRaT3My74pLKwQ3erjQghj5GBcNnup8qjHut7BhmvjWrsBGjJDER3bAufYpKJnpBYvkM2DpqXCTKLZKfFLbaKda",
  "key6": "5o81ZsSewQbt28dcaSFM1rqnWTeRYf5oNZigVHji4k1N6PzdANL6k4H1FzoTmZv5GCaLJiJcZPzDssP9XF6RiUWN",
  "key7": "58Yq6MQ9hssru7Ed9cdMGBPP1BRfgjS75PnA7XYuXdpgo2mhx8MxzGNSUzTZ8dNvxyXZjMwcz2ZWXrqqCkntymAi",
  "key8": "J9axtVzyxuMAbFYZx3LRZioy41SQJB85mY6aeEp2gE72oJhefkaQJbnpMa7WVG1pnXJeUhUH6NTyemf8xyBkFBg",
  "key9": "38TB1T7PNjSMBsmx8dZ8vNatwmLTPxCcLSimBnPSq7pLoqxY7YB8CNSvoynogsZJGYthJbeoAGWR3LLJGEuRLjwn",
  "key10": "67XBR7AzNSoDkLCtRyaJPP9XFgup3AMEfzWhzKoCsoKe1xU6AEZMv8kq3zBqK2fHvxGzAUUW5n4G2ThRkEVCamV7",
  "key11": "2AW8RE69ztqkwaKp1v4b6D2AepbSQZ9Zi77iWYYK3MZ2U9nHRginUAqNvMLACmAdPWNDfaprtB1UWAst75vbKUk8",
  "key12": "AuBVcS55Go7ehZqQJjZcphZZk7HeVDEjnJtZSDKb4TapEKPnKUiAVYUd2qGvVQffoDb2GJ7KaQZD9pUk1i8w1NV",
  "key13": "3krCcQnFXmuHTKx3e6Nxe6VgQgXnF8j8DSzbiR5A2sownb5EZheHGgMpnKAaWpcawfpvHQ34KaHh229xKrx6wXMn",
  "key14": "39PJSraXRuHUR1oFhbFd4bw5gA6gZ1fCaNwFk6qZv5WDjJ2vaHbUcHHBvys2tc57xqTiV1Bj7G9Ls1hKGfap3CRF",
  "key15": "2CH8tvrwP6oDjV9EPSrws4zJ7v62eRqvdGutKriVLZkgQVb1i6s5edetSKJb4xoA56pwK4mT2h8SkGeVhJvWBurd",
  "key16": "3ME1hnk3DVordBHUqHqoGXAJqoyrYqP3BTRdsZV1sFz7rKGo6RMmysTGvWPWkbgxDQCHuKQksjQv2cPzimV3beXh",
  "key17": "2S1EJ4yPvS68FaszcdETedRKozkUUCgCB6CYCQqkuHqQ2DnFvGk5Z1Y4WzFx6wjPsLYHTg9rcySDpaSQQDeUG8Vz",
  "key18": "5CtSn8jGgLBGcVxKTGMUQA3JBHXjGKE7spewXQR8pRNy4YpbHxTMxg6yGNhy7LhCR2nrYwRUHXkZjXFZgxRA21KR",
  "key19": "5snayNRbcsdiFg5Q17fL2qFrD7U9rq6cwJdiNStzk7ZocBifng8n67R6dopefFMfxabfQuaDRGD841W8m76grRHM",
  "key20": "6M7cgwdq7w2LBWHxSzZ9rhZtokQqdaHUScPKST27coRJz5bHHcubxjR3dPfd9ACxDGg67BMa3TV9i1otZeWH94K",
  "key21": "4R55qY7Fe6qP5MM4BFh1WcrRnmK9A9ENhBCVvpit1Ad5ZqzLEWEY5KRqB6EWnD8zJRkafDKvt8n2gtJ8DpYbby6x",
  "key22": "4YHo4PKt2sF6b8F12FnwAYmavm4UBnhBbTEbtPbuLnWBxMSCs7aVMkfjuhgqBmcSBTapaUo8HR4iU4NathbzEjfY",
  "key23": "4VAZ5GEfmnJerti4kFuVRQzTbBuy5TH8oWyXher1Sv7UiULu5xkTHRcXcaGxb3TbVbR2f9mBt8UepYS3ehRD6vU9",
  "key24": "4KZnFhFgbtvR9NnFi5h4KovJgvFJWm5bHSSx1MFMiev9zHTt6AAtkoeaDRBPy9eC17KRABxwA1ApMU9eDK9TiEWJ",
  "key25": "5bQvrjQr2jSniqWwwMY9HhA9Fg1JwL6bNVtK4ERpR89i35oFEC4eEkwzY4AesZ3vKM9PuxuShwuWZQFCDSNGq1v2",
  "key26": "5N2oLC5R5aaaq5uDzUUcWBB22qEFSzKRmAr5dVzYNossnyJm2EUHP6YAViSoXqeM5EwVG8hLD756x8rtuKtasEyA",
  "key27": "4A2DLCsoHJxfjxKXxxHmgfVy9Q5uyEoHLWH48ybdY4bKAAUUU6oszq9PQcJWTTvY9PNdBb4KQdHPgg13kDCC8DPZ",
  "key28": "4pPSkmboaRRRxhMvdth9nu9p9Wy2cFQTCqMitizuedoBZjCBiZqDuSFuqfpc8Vmm528TgzwgZRqcyEiuAWutJHUQ",
  "key29": "2WFkoJJdZBDFhhhNgprpiS3YkLFqqr8prfjJi9m2CzYAnQ7CwmCKmCwfhrEfHFakQxPeXnU6WhBNfiCvG8EgrL91",
  "key30": "5wgSsV9kBtUr64xP7erdex4jH9i9XfhxZjMbG8fQgZhdXYFzNUk3w5y66cpt5ZVY3PhUiHFnxDWxB2CmxHRDLPC1",
  "key31": "21tvM4TQSxX1oqpavgnju16ozAeGs8yPb6VQ2TFL5W72nbJLm4NH5HWz9UX8FzCrBqtyhsHbcZ3HzkN12bAy8tnN",
  "key32": "4Z9kj8VSnSPARyerZ9UcTenFv9LtV4jgzncjVdXAapY2grsH9ibhbfmswZx6ndKtC5mQYrjnq1eXyhoynbnxSjxe",
  "key33": "5NJNGUGNs3P1fDJP3ZUh1wh9PttTRMgZZhcMtc2feR1Bet2z7NEzY2NNQENWZk7t8P4v6N3gw3vaVgXww4XdEPME",
  "key34": "KohUbTVKDiqcMvm748XF7KDpgbMg68VMX3TfvQLpTXnQQcmPXo1t8sb2quhW7ZnmFhuK9iTNkYsM4DWy3W83JnM",
  "key35": "2G7YdkNPKMBPkwm8DdDqe2zmc7mLMRiXVWxExHsQsx31mGoq982VURhXAdjKG2LdtVND2YhXW6cQtJNgYPQniUWx"
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
