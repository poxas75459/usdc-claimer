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
    "fFQRNWuYT1CUMyjajXuF4HuN6qmaPPg1ozesadh5b4gqqvJzPh6vP5bNnPDEaHt35E6bMbCSFG29Dmqwp9CQ5kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ErsyrdjLD3E14gbiSEGA8Fc5HeoDsC9X1ghaesGYB3PR2ZFuCadVJhAKsFxeu8gDK536YMuckHuTs5S1EBMgAs",
  "key1": "Hvddj7PWUDntVz9axZWiYoWo7T7PCx8rqtCe79oWQsn9fPCdDkWgbtHWVaXuYvn6nEAzfBp1C3EnYvKwqhESWUU",
  "key2": "4XFdSRnJekCJZkwymn8Yo9L6BxFWbTD2nZ6WRycXjy5oVGsjjrBvtpaDkngf3waGHmHazN7h1iRvpiLNe1pbAPoQ",
  "key3": "4rEDAGw6tyN3hysbrTDnvyCEpuLs8fxvdFNKejjUH8NeJpHwBnBUAzBA4Lx8eWJ3jDwUc877RnZo76HV82kvsPUJ",
  "key4": "2fA6rgfj289pvxcrr6NsPorZfR4u98Ys6tB1aBTyQXrUgBds7cH9JNJsg1mhL5snWq8kKhnNk7G5pi4teSHNtG1U",
  "key5": "3ZTQEd8udrgz9aRiu1QMEU89xdY7G4XoXBZFCFgykUnMNTjhu9zbzcNTW8ignr6pGxwrMRpr16mT47x1pRngsuQ5",
  "key6": "2khwpmgzBCEDjc5F3VcwBqDVsBTrSn789NwCSqo4Vod63Ht3P3Je5MkAdWKn92p5EQv6f7hER4Wm6Soty12fzxn3",
  "key7": "3z6CHbqyj6juYHrVxZdAv71eJbSo4pmBeqkMh2WhYB4WQSS9Ny5Mx1pPN4MYXXNXKpnY2oSzhAK7Ki5Kqwbz7HGx",
  "key8": "4EbbsLpJK9CLDWRWRpBhc3MB6qDcGJHdbiaW8NNSELVQohCN8Tepg8QBub23kdKqTYK7RPz1ZwWXS7oWiAMPXgH8",
  "key9": "5Rgtow3kV4cCA5v9Q7HryU8JAY464BjwWkbSaRQn21LctNMjF3bG6kT7bAwzm1QTpXke3onL5PFEfoW6mAJjyXwZ",
  "key10": "bdmBP18r8MGBe8yzgZPrWLXjuvwXy2CJnzyCBT5KRWWnc4Z9LTvD3E8ummTGQLDTxf2w5K8Xkz3VS1hz6pW1ohA",
  "key11": "3eGXbrjiM3B4MinGiuDjPwH3Q28JRXy7nW4vH1xv1Mya8yFW6VTcpksGgsHvWwHxDnN9nnHXWviWVnaVjf3vDmQh",
  "key12": "4JgrdxvYPrqMixRkKomSXiKNPWbv2sJjZU1GXjWnfafJtEeY9fcGWhNWQhFaKRZAuW8eXvzyqfcteawPbDsmS5W6",
  "key13": "3uvYjiHZLPqTCFVuhSEfw4rPNY8knmf9PDoJU3JSAAyYBW4bh2kTmXKTJwNJNrmNTVfC75Fson1RkYidvuLiHmdn",
  "key14": "3g54Ee8wAGPcaDdWvVf8zCiSqN7F1pK4BB9tiWVazwCTk36gpbnk6TQXSGxPq4N2xC8Pui3BxudwfQMA9PremhQK",
  "key15": "5PZCxoHXhjfbzDzzVYUQSDj3bpzkoAo3TVN7g8wxYh7HXhWCG5VAj5WBpbNieW6GDBiFm924EjfnGVWErS3PhSsT",
  "key16": "5BhPDJ24h5BhTERBnMbHpYaMuxvJCijwBTu7sBuPz3BRHwYhLH4gopR52BcxjvTyCv6jNdk4agFZ2ueSZehABAFu",
  "key17": "5qHazZKtAhVExuhKAshTkXEFvcHYo19sJ3nkbWsfPDQ9jAB6nxwMAUBDacsPmVpeyfWM4vCgT1RgKKNMqHdBXugd",
  "key18": "5mwb6g8vU7nmioBhFwjmyb1ndim3cgcksx5eW7qc2HeWASJuuC2w9DKeSd24Bh8S4sAJ9qsjrsbxdM8NA6gTojbv",
  "key19": "4yHDBUxK4GGkeRsY63dZ57FrG5kPkZst6ssD6EHxDYhnyUtzvpeUhvs6yH1k1Ra72g7qvQgJ1pvg2LBpQXVWNQKd",
  "key20": "3X9rov7JXc9SH7WVMaaNf6UPb6GTvnuBMsDox1XgbxbQdpxrpVmaxjESjGsoMmnPrgGm32zQFc8tTM8JM34iMPi5",
  "key21": "3b39N43kcEt4BoH9H6ek1nZehwGjaMkuBE8gCzRLSf6bkHYstHmV6n7sEU2n9wym8uANVBW5EDLPnJ3wJ2PNrLoN",
  "key22": "2nQQWKZ4h1csDXC3JukKnc76SFsa2ZCoQgptZo4CzdHbQHD28ryCZVX8mSuAXnKFDjEM1eSRCp8SjiQCLMVyQHGy",
  "key23": "4ky3Qis31vhr3b7Z2g3QA7MyWvdAhTNkNvkbsh31QadRpBxBWRfmUnUkqzFdr6ikMQtSXbg5Jav5p7JZGhMz7tpe",
  "key24": "43w6TMGGim7s23GePvGSCcSMqRacqogzDLoMz7AeVeX92bmn7m4it2VTAW64dr4QQBXfsnAdZzRYLF3TmHn1QPXq",
  "key25": "2j1MYbW3wtePuWSc6CUHrLBueQUH21Yh5fm7fct7LouJQJzXybBTAY3m37yknJPhKUcSvhNhf6ptHxcNPGCdNViQ",
  "key26": "3F2vqj4DXT58Xpbuju9fnsCghzDnzuLUaftThrswpHwW9UcZ7ghoRAebmxP1LxGqtsWTi1bS61XC5nECc2BwincB",
  "key27": "5TsywDExeQRPfJd9fwMTGd587nJzWLcJNnC1r2aTWPDHYT19pvQVfZNHpAkYnYjN25vhaPguFaL5CZFAUk4sERv",
  "key28": "2LoLMZHinVKRFpMkJfrfXfsJBg3qEeVUAJm3LfsAPpNhzkncaCmkgZtaqCVuEcQMKhnYyGeengpoAqz8oFPDCbPC",
  "key29": "4sW8ZDLSfkDX3CM4PBcEtXShAyUW23TbSe48LnhFSbCEZ3X2Qak74f7pf4xudN3T1Ur461YuFPwVY333WEXUAW5S",
  "key30": "62GhX2y2K23j6sJ1XgjqfWQsCpyezTY5sqwrJz2i3oXH89a331sperv7Uux2wcAx2ayTTyw9LzWrJVNUxUaTTPF4",
  "key31": "2LmcC8cc1YGpjogcmvyGihU9ZSAd8xHMsE7y4rRkFjwveXxCBeKqzrDbVn1hnHKpMY26WBobLNQyoY26TrvKeHTG",
  "key32": "5VdmUTUXvprSpR2BvkgQjrd8BXnUqZ8oYnUERUMkaEs491VPTq5rdS8FwGG3XE65hCDUViibMbDRJ28Ue2o34akr",
  "key33": "5NqHW2gcbRJ8cGZ1jLENQxXjvZ8hDaCPhBoBjiX5oXZS419VUq4TzvUSiCjXubWxFqz1FDsj5AvAS5DcBuqwTTj",
  "key34": "51hyRR9CoYJrD8ggvRg1shkBoCVjk4Lf16nvFjxZj67LwPpjfecjkS31Kz3TSZ2n2quhxDANxGYHRUJCgk4mK8pY",
  "key35": "YgkCMNz2DJCTjM1gRQwnsfpUUX8AAS2gL84kuEQyY5jAcJKgbqLm7hCEwGCq88A7GYNcGuV3ikLvRT1acqo3k8r"
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
