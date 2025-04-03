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
    "3MDpYYcwo14cjy3jD9zAGPZ4nd4oBbch2EJJA2kGF4pUxw1t7GQCFEehUcBi2NsRxmJt7tgtJw8DCWq41KtA2yKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qF3Zfqrj1JU9ptJDi5kSqFzy8hyhWngYQnuJbMFg1hXwjngbc2HpGjZMXhkkAxrvt4P46RJhk6Pr2YXyScbFiL",
  "key1": "5HxJsGAvN1jjXQCks9v1dvvg3r3A6pb86KF2MM6rf1keXTQXDExEA6Vq25nsEMm58kSEkyz9U9D99herLyDRkgjw",
  "key2": "5WbafJNtfU9Srk5zFmQMkyH9wb78JSr9kB3Xx25t47YNxn2DKH4poXdZhVKkqiKHqmrGN4L4kKaE1KGr6DFyB5rU",
  "key3": "2YaqZDdqAiGB8dHCGNwj2KY58xpiQitaP7dvCW1DaX2A34h4nzfULg7padH7ZipAUxRLP7p8nLENyHJ3vX8wGCvU",
  "key4": "2EpGJ5T7Ls2e1SfgqdzHyMJgFo2rvppKEVaGLpi7CUNgw3T8PcJ8WM7eku2U83497fNUPFQEDPJnRi7ZXQzzdysY",
  "key5": "cD3VPmcYgRJa3VTNAX6HqKxu824F5H8JJ69yyt7V3cNY3PMGZ7M9Ca44cSbrwy4SrU5QJtg8USi1sut5w7w7s63",
  "key6": "2oQv5orcErmo2a8AqVmuvJmR3khRbmt7mN9gW97eqCTuyt8vSqiAfcHzUWDSCRVga5tsZRyxq13EKhZmnhbHEUi7",
  "key7": "5T1BW3P7oQYCGe7SzCcDJURkWPUR2EdRh2UKSsQg9GBNLGXvs7wsYjqX61tRtyfBuPezQtzJN6748TrULBqBWFuy",
  "key8": "qDuvFjTt2xm5WxnmSjxUZzTzcTujMyKPSyNpcYDuFQRqnov4YwhC39RYZ3NR6ZFVcXRqwaXMLtAe5ZhCxyX8uKE",
  "key9": "59xe7tK8LjQDNrf8EWdPTHSYUVJUxMpJzTXqyQyr4WXLF8ry86vcTJoyzGzMHQpungFpgs6QTDVLEUXEJkZuzyXX",
  "key10": "4NDf8JFrcFWHD1hCQgWSbp18qaeAJ8YDJisk3fjEA7tQxcbX9h5pyGAD3DaQwqVnCF8jcLz2CBiXyUCYiJ3RB87C",
  "key11": "4JtBVNBkNufVGk3mBKPTFtNxKUrbRCrEpsNE2yjw61kfQMtert7DqH9GfG3Mni6mCfcbz9mkazNuEc21qFE8KeX6",
  "key12": "23PtSw61Pq955yNiFC8enKRWKyorkUSYf61yVT4Pc3hsthSryiFQm8jMAdcEqmWT4kSwfr7czBCDfSK8fdMkgQSK",
  "key13": "2M5sNVrHfa622Dwp4pyhGkJsLocBtrC2rJaDB59fZCBaqTA5UbStoqe7fyyM4ZDYb4haLLn2aG9xzqqXwLoNTZXX",
  "key14": "2XSaF8R85NxHuNBBxtDveq3KdKxiVXfhG9q7RLKPfPFhtBrXB8ebUQuXax5vUaBq9WovivzSsJVLjtr9Tvhv364V",
  "key15": "wfnQr6hrvjM4n3Li8gDxWv4T1HWDX6mtv4xynQuWSdXvsrF5FkV7qA3CbHkbQE9REdSBw3siJAuBy5dEhbCHREX",
  "key16": "2BRcdjFw5ddDJvc7rGRa375Lb7kDGgpeboiM4hcMdf47XfZsYJRr6WptMYGWZ5b7AUBxCn1k8eoy97qPWQV18W3J",
  "key17": "5gokvN7V1UPLT3wB9GR5spo2tijeGWc2hj4sx73KdVBpZu6FGXMNKoj56ddsgeBBA5nMwmTYeXb85snT1N8ukVuo",
  "key18": "5XiVucgiZVLcLb4eJXETTHKUXUSkgyBhikRpjuxJcozMC7mW4BPWNhDnSUvFEY9mde4H8UJR61X1BegWBWVvBp8Z",
  "key19": "26A4HwE3yBRWAQTwFzaBuX33jvfPMBCstcncJbYfijz6wwizBvuLaXbhzpkttMxeJydysQGALPyPDy96kXaRPPk1",
  "key20": "21L6dR8bQZQSeJ5vxG95ZkjPsXmC1CS1f2dE16p94JE9VzBpE3YvSa6xvvPYdR1KeZhopcyS5WTAUWzWrKFQoAWQ",
  "key21": "4kzTdga7F2vwBHj1WnowFhjFfgKZu3KfMp2zm3TGNECCE2nC62yMptkkUYn6qjFV7FuZwz5TuH9fKCZ8B15VuVmC",
  "key22": "3zJ9xvnrD6iqjejeVVqg65uY4X87UJdTFfsGoxrRairjzNYbMhLosnngm3sSVBpn9aPMjmH7iwUvihoARY8FUVMR",
  "key23": "3hM8ckejNd6kFzhaqCeBQ3Y6FMqTNSmqkPoQsiAaFtoVQFbhbPUZL6HuvwnAzCGLjY8E93uHJvaAu9dCNxBLheRC",
  "key24": "4fbcnDhSPzZQYXpuZGexzesbZ222k1A6pQ7DjeGb9YsKYV3oQTtj1QSUBFyKBcH3X1ErKJsZgeWJCqxkdGhYq46A",
  "key25": "5twGdSKYadaKCw7w8TK9hFjFA9iR94KgprZJTDnTajTQfYKNG2hVffDfGNGCg5bj7cnMg7WWo7jB9DeYcgMCZLKp",
  "key26": "5j3Pbq5uEhAeboqrcmmpiWPpuKQ3EVtAyodn3TPe4qSXLBD3FWiGRuvZyyrwfJ8iHxHgReMZu544DTFrsJTRjMz",
  "key27": "4ycwiME9cngat6VrWuKw8qruoh6fJz4qdtnHRtbBDDLjhUwyGBantKW5fuJLXedxEJaW5v6wcSVWkCQkZNmG1xsH",
  "key28": "3tpiUgUGJK4REGWTnKQcGQFMJuTt2r3yvuDj3rAZBvDyJf7uoJmRxX9TMz9TSZkxT2ZRRxP52xRG3s6dndH9LrZy",
  "key29": "5zt1an8XMAie1nrMy12Qzgow12Jd4e2ZMbSX2P9NXFxs12v8DeYtFj16ZKAsestTzambK5i3Nc7kjuG3zfNpN3rE",
  "key30": "4mvu1oeuNwy65oaVHHfosCAKe8baWPSXQ3jhSpuJoUJadvHfmohoevGKAvHq67Gj4eJt87RyThf1H8wmc42PZQCD",
  "key31": "3mkiNRQgDZL5qYa6Gv8qVenXz8z2RTZkPTmotwfPBtpPFfwttszFdvki1NF2jeYa6EvSFQiVwAZDvyvyP4TD4XEC",
  "key32": "3o2oo5YJxv81cgNdadHwdPQXTAyrMq1HpiQBaHFtHcktQJ8zJpPvmCbeZc9wxNKKE7Dtzg1xp6n61CSrrbFNzcGZ",
  "key33": "AhbfpADgTmfzif4LrxLXZAHVAZ68EtN1rTjGyJcqtcSNxZpAnfrdmduv3xjUybuTnBPoXjfpjaRSuMPsqJWoSas",
  "key34": "2vKzhXqrjeScd2icLcHHbu66g6Upr7XeSm8KNVH7WUF3CEVNQhoNJczoXQksLBjv46Qr5q471EUykroz4hxMvT4s",
  "key35": "3h99vZFrSxXUhKvb7xc4BdPajkoYtdYnncXdays1RQQ3K9z1YMK8LrgeUJevgiDRyeJZ47TG3oxk1yUxZWMgB5PT",
  "key36": "4hHz3ysQ78PzSELkTYsJf1HtA454p4EiJ1WypqDDHB5TzWfUmyLfiXWVZ4JX6vu8gy3pGrUfP7fMZg7PKvTzH5CZ",
  "key37": "61QRmbLhHzRwKLWeNQHSWtiJDBe9mX9wGBfRPDd3ecVAZ6XgEFMu73UrMoThX6PPxmMQwHEPoByVtb9hx7eczRR5",
  "key38": "4xB92Nw6XkDC9k1yiq2UyN5mP8nd22GePv4rqECKZ5hgh5G7nq7UZt1fNqd4gpWQKNerTa6tTACPL7UzjgGWhpfg",
  "key39": "3M2r489fUeLq5e3bkmQeTZUhybvWZYpwDWc3zpseWFBzyaq1XWEhbTrCW6tisxmudkmnRf7nd5WHB18mDcKMSujX",
  "key40": "4go1hTGWPWgXWGH7cmyRtY7boDW9WTisvvCJvJE1y3yVoW118fggoi1nY56wATpGgV5fuUTyh6HzSbPGpr8fMuNK",
  "key41": "3RTAb1w3eRV8FniDnPkHSouzMzGMq9Lg7yaV8B4BocyMtwfFCCPro12BwD6qodgJeR5ALTDU7nbzbDEFD2FeX67t",
  "key42": "4tyu35upSNzSSXp2AmhAwCvf9thGsGqrmRxYmUjXFGW3JZ8eu2PM38bPZ2Mz4PH7RzPCa2h4Lf3Jrc7zB7G9Jw6b",
  "key43": "52uZmEQxy778yHLnt3Fj56dqh1aPY2svbF3Ut44Z5GBx3stsbwtsBhkrkkmX7FUdbWBk956oi9ThbciLh3mZWoMk",
  "key44": "h7y3j3t6ihTTqczPKwAJLFWvfAG4ANtkeAVUfvu6QCuamJ94NTLoWVGBa4cveiAe7NAgeRqP6er6CsNnU4ry27v",
  "key45": "4tBk31eGJWktNtH9tmJL23w1qAWK5urGPXcZVmi4pHCuc9QmwwMsEUMm2rfbuAUJEFR7s9cg6jbbD3BC75MECFPe",
  "key46": "4Rv3DFofxdVzEgdmEvcQCty7jLrcYkafWbeZsBJTKHT8Vm71KuYqAxSdAZG7PfNLK2aA5AzCQw6CbEeR4EA5gMKL",
  "key47": "2mugPWC77sS1AmABpxbvosTimmhaCLyaX9RYSQjmdgwHDHRvf5A5zXuf1P8rB81TvFt7EG1essJ21kHn8TQr8mbq",
  "key48": "5aqiCUnYkkcwDtZ8vYp3JqFFupeC7pvL6VYjetbkb8QZcbVBkjQHJ5X3ZHcxyTSRSaFPjW2Ct1djCpDMJYoMzAPw"
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
