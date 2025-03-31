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
    "5S26n2h5iudDhmGdV1G3R8Ua8ftfnBeeyjvz9VEJUhWS6ibdB4bYFYAc96FK79b2a29WHcG2dM5LbFhyq3wBawCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzRmteveo2kq1YNLaffBgDJiS5hrTXxjtFuTfM3k91peKohUKYjfAKCvXcsJnuAjrrGDvBGr3nkFec1ACdZUDxa",
  "key1": "mk8QDZX5tGjLr2ce2LR1QmvyVzc6Fe32hSdHZkjgYdd8etvyyWGYktePGKnLwiEvqwS3A6kJ5XcKzAuYpMVwQ2S",
  "key2": "4Pz8BPFFLaxoxHmxSzbcgHAHsMKPJQMuwfJCQF1PjcgqHGvkGv4WxmUD2mtwUG8WDJcXTGwgWb6Vp9NuRZCpwdLK",
  "key3": "5MPp5Tox5PjtiKT6vB47iCB4qyRSKzaTNPJtZ22i99xn2zkW1TT9DtUJr3GzZBc4vuyQejFsEd4zjWJPtwsistoz",
  "key4": "5AmJFnk4p9R78yhqYC8VGx7CB9jCT8NkAxVGMXDeYSmj5WHBi8aYqGy4DHtCRYRmeUmF3fSuZeJiNantAqfVXDhF",
  "key5": "Nv7aasmXpAjqo81SegapySEtFVqhEKJFa4YDVevip1g1ScYzoRf9HKerda2j5ts9evU9RruA5guLJxMsG28y4u6",
  "key6": "5v9HgTWr3dfptR12RZPi5KV8Mw9SFpm1KzcjvbmRgPWZytup2iwmbm6HFNoJYyr4J4L2pHqTEyHgqN4vAETfYNr7",
  "key7": "5X87aWUeDJEZ78QvUBSrSVA1eVohnZ7KSK7w4SD714SEHsAtoBoQkYA4H7L25QG6rLvNzz6BHLptpfsDW16tNKPy",
  "key8": "r1T3vE1XPyNqGZDLcDUBYuAX2CUVJK2gTbRibcm5QnxE3cLizyu1p3SAAMFNgM2vqitqXcN18qDv2Nrnb6SeGes",
  "key9": "5kDX4WdqDrMHotncg3Cz676mX7MfJfc2So4rCWNvHYx1grB6uUmfEHFibZ2F7irnVZyWm9ysSnbdjvRJ9Wkfd47J",
  "key10": "p3picouR6aFjUs53G5AjTcK25PKpThkYrmD61z7fAabeYZMwjJwg2HggHXs26nodvhfLzKS4NZHn2AqSYQB3sg1",
  "key11": "3pj62n1APdQ2aRgnu4ED6JZZCdDbCtm3fRrUtNqUQeqmoPCLFMtWq9aNABoXQyx6couWJCGdTuC9mcxaqxVgTMF3",
  "key12": "5VipwwUCpJwYW1Cwttp145Zb1erBDjemKqGuwxF9KXD1bM4ARhgjcnbSce8NnPfbr8uQmmVezasBPa5fXCXcpnUU",
  "key13": "5iyouo9vkq7tcJkgAMiqLyNnmj48tyYcD2FZrBxLc8xzp7hcTjoRRG8kDz8aaiRMZvU98dCyEoynCQiNNbLrGm4p",
  "key14": "4BYm37CffRPAQr7LEu6DS2b87JHtzTr9TC1GYkthybEsnfP6wbtASxpMvtsY6yhm9cXimm3yb4u6ednbfzxNrPer",
  "key15": "434z6FrmUTnxiFjdUWRZr4rvMEappsJPk5c11tmhdSPb2aiSxw6ETYfYpt4BLcPP7c8FotDmLazwRb5f7K9384V7",
  "key16": "5fNmU5f9fmVSdQuZM2ghSgHyNPtUqr2qnzbGDFzJ4xvbyuY6onPD8Vb5EFePfZbpU6ChRyKwXFP1WaWi3Z1qaKUk",
  "key17": "3gyZSGz43WaWYL1W5QXqg51E5AfuGWFtraNLiathmm9Ue6cPrJYESBKNUi35Vc21feYW7PSnzzFgs9Uu9En4QW1v",
  "key18": "4CQrbEBPxVhtuCN9Pu3uNaSW3i3eWezSUpRQy2JosrRmKqrNN8pTkvn55gsJp5DmsbTDPAE8oa6cnzxf5ZpuRb95",
  "key19": "4biTjAhpx7g5igaPiP8vKH6GGxzRjcYgrdznV76Rawh9kenJ23ACSZiX2GvsmvECAEt44VUricSS1RzwMyt6qpLz",
  "key20": "2A9Rm8uoayMFgQUF9zPyKmQZYPjbpka9aRPFK3rGdSikmhoaxSosZboxhRoJhUeMVY36Je3e5TZBdKMMXsGGFUmH",
  "key21": "5uz7RCg9RrT1zesGRfT7MHeHsNmt5XyqGmDpwYcHsXRg1d4PPdp6ECe2yUEnGFJiFiDTwBfoJgkZ5A4RaaX2H4qL",
  "key22": "51CS9c9wtqpLFAAijqPc1WJD6YCiNsFK8oQLxPZrWMa2Uztv181xKc3jdbgjBP41gjVo6r6pCpf6vGszCV4TsCqG",
  "key23": "5E1a4UFRZwGLgb86NVFRzD8ttmCGvPDkTcun2XYhArNqQAeEuzXU9aTqnoJ9xRhvum2ner36fHo5iSEtTpzzDaMM",
  "key24": "Yxe1Y7AQMxHa39QNNFJQGt4WWPrdivVaaNPvhawhbHUwXBDPrkR5Gb2pu9y8dMQciBt25sYdYAGdxXHLPVZeVti",
  "key25": "5Wp6CLX6DnkBHnrxVincqXbtQ1rbyQoZme7Lb9TzLTiDN58wXgXrXq8eYBfpFFQTo5uRuahtCgWb63AsuREjLAsR",
  "key26": "34XWXiUXMmnznmN2Nc5gWZBW3sKnjVtWwaPSrwgMXSZ6z9gNayAnxK3pL2SyqM4YRNkSWvcaw1kJhyBkt6cnRNzG",
  "key27": "mg1kTXdiFuRDx9rqdkYZ7L8gNU9EqmNzNgrb3pUrN6rGeewzisjKct73Z1y7coRXUEAaCBqN2hSsagWS75B6p8X",
  "key28": "39UvTwaqPHs9HKtavFPfSQhQapDUudfHtyoCgZF2vjnGz3XHHMqvswY8yVNCjtYrhK69CwUc6tPr6N9F1tfrkNfz",
  "key29": "UE3sFpjaVv11Y3tqNfPX6NGsRhq3DMfZhiDkP9Ng22WfZKYasTY1bdh6nqrQ9G7c6doNjEpR677C66b72QKERuk",
  "key30": "E8fbaYjEZQKLbWyb7JnHQJ9D8tBFSTJM4hPxRTzof7MvGCGAT3U1cNnkZuMP6sx2apt15Uptoa4YgsMraaGH9Ac",
  "key31": "34vTotjuGGDQzrYPYYxxuKoDhZwbLsD7jF4NnqWLFrugXsruWrpbYTxxaYkhSmkre1rRdPwaY2MkJF8BweyEuun",
  "key32": "5KXju4LjfEaD3aLprvAXAbM817oj4JsvKmLKvtQDnVat9i9oYhnEzTQt8sTMYQrYBomvYWRJQuXT7DFUqTGk4PMW",
  "key33": "3dUea7r7RZn5reyMT7YWYfvxuQ4j48N4XTvdjsz13oh8UmQQBxWyoRWvnmbxAKe2qHhEbkKJs7xTto6SPwusfn1u",
  "key34": "zk21ZQ6DbSoLtpAurCqA3o2CKtYdQQ6d66YVfkhQZZ7KYmwCAgFBGGcNfSkCDn2mrM8oFFu66axaqcSkUVoCddp",
  "key35": "4hDkVs75C2WkyKbxiRHmqTDfbodbD8RYPDBnfoD9JWvoRzRowGuJ1ettgvA4XMs18bp7Bi7Xau89QQFmxVcV9i3E",
  "key36": "258De9qSSeBQA5nENhB51FZGHHAanGpEaQEneSt7oU8dYhJDbvTrLssZu4SK7yY1dhLaymTxnDyxP9cL4Ae4epi7",
  "key37": "4Ff7w4Be3yHTxMBTwapJX1MJMb8yFZ2V6ug53goVHXWh4fccdLGAqgmWKVFmfiqyS2A5HtZXXqko2hGatz5YBU3W",
  "key38": "4Qk6DeoBjSaRP9tj7qPFmhSef68qV466ez1vNRqYd2dUUpCxynKvoq6uQBiRo4QuPxvenpYDLuu6JDBentT3fNDw",
  "key39": "5Ej1TgE1GQWJn1LbBjbqSqTDntAG8k7NKLAR8xQ5VPo5Vkg7e1DkfUzrU9n6LLwf3jwEHJTYtADeL7CZKznD3Yy7",
  "key40": "4Xt5FpbHjCAdUK6STwqCJVWPGteY2HyyQJ6U5YAYkEVQkyF8PJa3Lri9BeusdMXJZFaVosiK83cHBNyomBnXeD2v",
  "key41": "5CNBwCoxVFhVBo7CKZaATYLX4qz81K8QtMFfRtRrTzt8VqJ5tpU7KjKYqW5PfEPtgK9iNCeqcGAwhL6TviGVrGNJ",
  "key42": "3tP6frSyCVYxFJXX1V8cw9it1ZjYCtBRRHFGnPqgnTZq5CMDFfopniSVbnUZ77UobrkX18Lqq5Rq177KaGWpZUNZ"
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
