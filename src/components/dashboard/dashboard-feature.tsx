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
    "2ji6qFRxEpow1XfuFT71jrYEjJwp5XxiHkwYwNPD5bCmQEsrZjiENyFoMjJvATZeY8iFM7tXfdBCLts5bJ7ctF4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dDbdtMi3yWVuwE3YUoYjbbJ3RPeXgxS6VNdDd3F9e2tceyXHuNDB4vEdDbAyTBwZGCB4SZaMMCr9gBGFXJzdRU",
  "key1": "2HYJ8H1nTmKv7hQPDtt7wHdyWsB2QrWayp9M9pTLh7U91V9D7LFFwDKu8eRUo3hoA6BqkeBYGeEeNuYUgv2yn7Po",
  "key2": "36HfS8nnMBqjtJzohK86i9J9AR8MLTSekoDTi4xUSwiPA2AZY6zh9XsHm2ZKjExvWqnEVvDq8z88GyioBJ7jZkDJ",
  "key3": "K36fHm6rozfUhzeiwt3HNyq2uShDQSyg7KWgFUqNLx3mtaLrjLC6SBAGjh3DXmAAoa74oAeKpv7ZrkM8j7JQvm7",
  "key4": "4oJtyDTo6Wem9Px9SJxGJKF6K6BCV5kfmm5ZsYPsQ4UrydrTj2Nz2cFJU9jUohjBuHu69ErNVyHGV4erBeGD5NT3",
  "key5": "57vKJDMsBa39E1ugm2zNuXzAHgrsT36XTX8avdEDexXAEaV7vT1NoEvobhYoVGUNgtHAShTwe63kx4cTVGsFvxvt",
  "key6": "5K3pi3zAk4ypRU6XfPfcNyQC9E8QCGhA4smkoSqEJhmstDQYjpdVoBaUT8GCidSEbWDpboQ7esn2FcfzE7Gz4exg",
  "key7": "DMPjAcbH5VUzj2ECt8tnM4s2CJ5FPFrj4yhRaPKH4g6FhaWLpj2oc9KEcNMn21rRP6H295iz3nj2ANsxbjTNTUS",
  "key8": "62mvAMF1s9hG9SUfo6XBMyzDskKp9kQ1yFisX89Dw7cAtKEksfSkWY2aD8bbDXWaU4taadmK1Br1ZkDiY17PVhgE",
  "key9": "4NHv6XuEVknFUtP94zFCLZWjD5b9xX5mVGcbtoCPDqhjidPieurFjpML3ajySbEY2YZEDZYn7bo3FAq5wxK4tE67",
  "key10": "2nkbhMPskaNfwe7EjzQT9T39dJuGgwSnfg3D8NzwJ84h9mq5RS9qnBqFVuJ7kQxBpUzySoyeH9zfYu9TP3h67bK2",
  "key11": "4y564HXG33KMGnDXquYNvRSoj3rQB7a16eYkMSWTTMaBb2vqdveoU7nsAH9YHTQ7WeToVmMftsrwgxTTp8N59tPq",
  "key12": "5YfCiJNe9DWtbTC5e39M7hwrutMpoKeemXKds5KaxY6UgXx8fmAdxHQQtGMPJ1yrwfjweaUiPK9zNqS7SLSnkuop",
  "key13": "oHqBRPuhVjBR3YritzjrgdNXLvRqPSGnk3cvwzC5qTfzXFk818qA7X689tQYhsatdVtXAEeVwM4Uqs6cq2U1oeS",
  "key14": "3WP3u6G886U956vxNVbbkupgkkqXdsRAWaecAYqMpA9adYP9MjL6aPPJsZf5fmwjF4HE1CGrao836WnqVoN7ndYV",
  "key15": "3JKNkePcgDBts8YxyxujnUz5MoALT9hQ7tCLnoaaqfNaaNoQRDyo8YuA8oDiwxvhbqbGXJDPdoBnmWz26HMFvRQ7",
  "key16": "i6dqTxZ2ujyzicDaHhKdH9GwMJgJ27W6BRsNfnQWDWDGAdMbqWvNZm48Y1EYAKg7k5Xa9pVHKFE2iXrrtCv51Cy",
  "key17": "4fLie7pBGLu8hHhByPtvLpWGUUEShAjpAdjvQVc8QqMnySwPTjdc8CC3AVYrjK5PPfXXKsxr97A5csJLzj7YhYT5",
  "key18": "5Mayyq81pwdctnNU17ZWRXTrXJtn4YWHm5gnueq1G2Awbwsvhh1E6kkfpT9PnHADDDg4vK5Mgz3U7MQegFvX1j5E",
  "key19": "2iC2fWNkhDsrLU4MQxnEvRBsWEmkh6Uxkcpzp2iC588v3EQUQPySyqKfD2ApHBrV5EBBkWmy3hRJBqW15LE3eCWe",
  "key20": "2Wy4JUnoNBLFb7HjaS6QaWrvqVszAbAhgbpgGkTcereJAm5wfT4R9S5ZXfSqnDQWx4ga9yBaoNJ66FrgvR5fBBVX",
  "key21": "2rxNKjoGu1vryTseZqAowVonnJKeD79y6qzWR9Gjgy9YJABZxkLPNg7RfZTJoneygraTUYHUXuNxgwUZqpDmUmtc",
  "key22": "3taDz32o9Wg7huJ4s2mNuzPZnX3sgYBhDijqxoVq4ADN1YTxH9C1YcecRdNBwyukN8WEfq1Dg5Pvwkkbr48YhcqA",
  "key23": "JytjCbEQpctYoRrk8TxA3y85mh6X1dQXzUFRmjDvTjKPaPvDXSUiGe834w8xtD8Cvsp3hV7YrDy4FLofvuoK7T4",
  "key24": "3YoKGwHJdBs7o9vaLioPwYJEvcHbtvEUuWCTVFTnEWWnCjkyXJDD4CmGUfxh12tHXxy3AucuE3sk3oB7KkCjnrds",
  "key25": "ELFgQFmPcgYCY7vCQfgq6MuBu4oBNgQWKu5hxbNPi6tWjPF9dZQ5P55ukevZUdCBJiSjvw8NgNP7iyDgf3gafTk",
  "key26": "G1B5Zvu7UKoTBpcuXiJ2HhJQXvDXbavWSqAxCeh7DSzX33ZP6zekVu7gstpmQXirMrYcupU7ZCUsCUhbBLYy3EX",
  "key27": "5gN7yR7YqbR5GKzYEe6HTe3HcxAypZdzPW4qAxhhnaBiFLZtuJxT7fs5Udujkdd9ruD8QyBi3yDHK4aeHuNg8DxZ",
  "key28": "5xT77PWPhJ4Vb3aaTpqCgvfSYoa7izNeSeUYVq4aYXKgmhmAZF1GP46iaqKwwe5teTV2CEYpwZWc4wxhc3rcFmbp",
  "key29": "5q6TDecJtAiuvLui3ydU2venEouXxAktWisw93z2dY9Hh6K6jtsb45FxS5TDKDeDMZX1rbQX74LjEfCBTiYxepBs",
  "key30": "3PfMYnH6wZ2Peui7N1N3sp4XKs6wFUPcFnBULr2Ed7sKPbtqKfMTKVFAabx5EDQvgzmwqfLuXsWKgLkU4npbZyD1",
  "key31": "4XsEdBBugh2Ccv9KxseUiyYHHHRPwYeMm61wUVKnV1NE7uXmQi912yxDS1wWLJrb1JvsTxwymjThTeqwLhQZPyF2",
  "key32": "Yfu9kBdwdLjSxY7nbZFk1yyqNAHE13vcpMuzuxZkUUPZjnZjJXewHmNRS9VPv8o3HhsVYukcjQa8Ff6LKCEsYCu",
  "key33": "3wprjPytMkaDAQLUPcDM4DPsk88XNqpFogvBatWfpR2fVDFjYHXmeUMYr2Ka6tCSVd7Ctwv8yNp9VZbgAHDQRqS2",
  "key34": "4yT5zTGGHZZxa4HTSm6FCGztzVDjhhtoEnfJvFjf2H5F3LV5vSxHfgMSWP7XU5bnkJgFr2EiR6Cdv2eSkRZvfgL2",
  "key35": "4wK3YUssSrZbwLLELu4WnEsc7RhtPGbkxJbA9JSf9yJ52vmDDtvv5uhB4sbk1KohVAbe475tuhwx4nnDHv1mbtS5",
  "key36": "5pgGWMY2HMUfNpRa96omm1XsRxLq5cioRc2nPYcLU9EdCtA6kZd7D4WYvReazvpeJYF1UjQLN3jRtLpKs4tHL6rT",
  "key37": "2gn4pHg7WMY7Lsh1WsmFhggP521X4dQpswB86ERQgsDxd78vgTc8Y2R23cFFL6J7hAeJDtXN8Yv5fJyBiBkCdW5o",
  "key38": "2VinxCy2s91qzqcXDkod2mb288MqLnQcSWiBYEf5dvSwRveuCDitBraG6qNzHL1yT5Br5a1unbdnUm7epMWbVv1X"
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
