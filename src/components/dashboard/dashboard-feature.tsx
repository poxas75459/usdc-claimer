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
    "3TPJiFCutESkpMR7uwCNV5g9f5XpDyoWDAgVZWz7o7A9rKowUmsoyxfg4MbvvfnxCiCX12dSVmg8WtAbSSoshdeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oknvYNremLHcowwADcSzDukK7E6FWftK1ijh9CyjsL7mdCaZApvAfcHpyVzV1YDp6LEsaDz6WRdpjbTtKbgrmja",
  "key1": "5CWijD4Jqr3Mms2biJysncs1wWGe26f9CMafeM9fNEsigDUUGh1Z263TT689H8qvgPn2DgxKJey6dXT8DqJGYByN",
  "key2": "5AfCKFM1avRKV91YqWM16fd4M73ecLC2YVspbFq3XjtxVvLLQ1LEaW63bkZGY7HyEvxZoP7M72r9Mx72jcibfg5A",
  "key3": "3kQPwPhTxCA9ZPyoPBW4LpDxBssBWpGUonN8Q5MqBvNHyuacE4zHx1bzahkeT7mbiUoTrA47fwWu4Jeac24ViK4K",
  "key4": "TouVvKQRugtdaxWWMbqymLXPxDizihkAjVMv6SP7ZvZsayxvQGg7i15EqVB77HsV9ygSsaA1uM9emMmQnPAnPJg",
  "key5": "4Dy6W8934V4Lk5nrHEQx145LdpuJmegJNTEKTt9Qc59563D4GTRBXwcAoHLTHcyxr2rV3PER3JQ2guY7bqjxmnMF",
  "key6": "4bhhhExd9au8dB7DfqmRnRt2c7TZKJjt4GDd92DmGEbxhEFvi2QMyyxH136MQDQ77MCZ8S2hPwqU7tFd7TFBSDmc",
  "key7": "3cWL1BnHbZUat5T1WKiwfXtJZvgJGg7pJBqMhWcmhyEgaAYyiATsp5QJCnrKvz4TYL8Em2bpZKptQU7Z8SNVrMEc",
  "key8": "R37V4uAvaYrQgsmohXXVhZ6UT8AkaPpxXoMMtxA43DUredzomG26PKVe1cbSSuXCiKznGcdwistpNak8GniwQfC",
  "key9": "LfZBWvgKUaWzUaV74DhzFYH9BS9bEr45ETT3emFo2izUCFweF8ApdpdMj59sShr6dD87dSNKBd5HAkyNhu8nczW",
  "key10": "5ig4C4Fo1K6B4SWv5Lrnikhb53ksnHM5EYUDgHCoX5XoUmkKULXToigoavBWazHxr4hk6ojQm4jpkRwCxFros12s",
  "key11": "3k2vFaSd99PGbhbyU9Tikpy8WeYyv7zkZdMr7YcvzFhkRQQpRqZpExKW5TP2hVgmpbZff5aR1y9BDStHFkYy2WiT",
  "key12": "xAt4Ktu1Wymbnvk6qWBBMqQGsptgSABWdWS2jPK6F39hn8VJqJfwEByvASqnypa2jFjdR4suz6aAQ8yjZncEZKv",
  "key13": "4GiUUEUzTf5iJZrBShZZW2LHdq1hevAV8Pp9nWH4BmeYoh7ksvAM3r5aM45BDLEijhpE1Tg8xbKjCUt5YHcFrSPL",
  "key14": "5gjN5BGsRH8YkWVE5SxYFGXeDDd51LhvzvwpdJJBYjaoMDJXtzyKG7EdiT5Gh6G13AmbriFZdoJh44aUNqSYjksM",
  "key15": "Kj8bZ8veGnxXeQBWyXYVwrkj9NTq6hpypnUsep2BWX7K8ET6Mft3reyFwg2Sn439TyDNk3fg2b3mFtkHRdLVRgd",
  "key16": "2tkEeqnB6ky3jSQhpefoHhuswiNKFbciUyhU36RNJNKFHVRm6NLrTMzDfJN1bpuYGxPGccrnFjKupY5eDpBZFJb9",
  "key17": "3ofBnj3Xf1FdRQEtNRYYW1qqn2EZ44qK3Gq5EmPJeg7Jct1A7yHTKHbQaEh41rTaC8gB6DfudEySfX6aocR9ywW5",
  "key18": "41voBhcxF4h2pY6yVurWD1czXVt8z54Djwq9aHwtvhwutGQzVuRzASHNYKA6N5Te8fQpvBrUW2VKXd5Cw7C4TASg",
  "key19": "5z2kMBGL2S5JxwHSVD8MQvFaK7pAie8TftWQfVMuEEXnjpTQQwB1zQnhtmKC1pnU1w3S829YeDVmip1U77kfrnT8",
  "key20": "5LSXbDwfSLjbxbTeJxmJuhSeQQRAn9wMaL5i27cbPSK5uTNbnGKCAAFxKiFZP9aPx8gFh79s3RgHBYuChDu3kcRj",
  "key21": "53H6KLanSdLVrf8rK2hcN8eMzizwpKNNAKhGZ7KASNcoDbtjL3wSjZzJ9AfhFfq1gx6uzAkxNGa4wHJSacxuM1Dp",
  "key22": "2KSZH3npSoiNdhHxpu3JAoddRR2h5sTGEXSrHbipUGX22FsPpGqSHps6cpV186T5V8ziQkdGkxHwFYbRaDTiisgY",
  "key23": "3UWRvjsp665euWGiikZ8uEVn42nfz3kwnihYyRZRAMwXiMjLi2UWM7Pc9zCTjWF8QLMaT9i1qRVgpLz9MKjWo4e6",
  "key24": "3Kp9B1Qa65d4VDsQPBy669bU6Y41ky6rekpUM8iPMfPqC1AbNZXQG7FxSPR2TCa8G4TPzFD4TKu5hD28f9qK4qft",
  "key25": "3C3LGsgHJGxLHns9BPLzx9KFq8Ae7mPLwdxbiGuuYajnx3Bqm8NdhHN6jSk6jTs5SegWDVxMKbjV34i8Fhm9FXKW",
  "key26": "4Z6qAV6wTZR4bCooyHRLDsUq9byGDR9V8MtQx5U49WnJQrQL82LSKf7Sc36V938XPeBKYmrNY7XnnWUCgtFjMKBi",
  "key27": "5UNUJJ1EwzXErdH3Dn9iLCFA6Ay7s7GKo8LR1fp14oBJdmo5vuHY7Mtwr7qgmqps6XkyxmGEhJBEXffHsqsdfFvc",
  "key28": "A19iRAM6gCNv8heWH4Y7ekeEphWgy5G4bfDkdvWrLYRiYFoSdys4cMaP2zdjzetMSZ8DUCW2RFztXUXbGXfDitX",
  "key29": "5QbiA8MqRoPGdxoLe45RmnCwf5GjRKcye44rnNK8T45knR9qSYLmGV5kJn1jqZe92ahiPbsbsDkF3t34LTQSRfcz",
  "key30": "namDuDXesWQAo83psqbd9J7dWNX654Gezs6uauDHCM6VBRjRCJJJLJP4NXe6dZ2LPXfW4MbLNc73mgRaFgeYuNB",
  "key31": "5wdRQKe57qmSA276NBau2ogtzpDJFgfCUpGtomWWQaVa24jhHs2nys1uzHkZX427RSvzWKytY9w9PKCEhMBzqAbE",
  "key32": "4XzAFzFjabZ8CH94UjdM9GDSfUxVSJwmdx3RNZShpcDx8VgBHkFkcnxyNMSe9Z1xJSeYCpP3TxKJVHtsMn4d77VL",
  "key33": "37BaTcRLkUDF86LpfYm9UBJWpzRsR4B7bxoZosJCenekwjMkV9xgLvk6WR43LQAu9RxoaBuaYvdReLUgqvNko9Tr",
  "key34": "3hpJmEiK73DPKQrFr5pcR3FW9uNUVuxWqRkP5k25LpRxraMNy4nyMmZoyRZ2kd9LXtA6YRkFsb54Rx2BtDvPJcMt",
  "key35": "4dEySa3RXGuKGFyfAVxPuWzyT3NZ9gG7Z3sMfgwdz1DmPaBgXwGNbApx2dxZQd8LV9LbjM4U9NwuufkUnr6nAf8b",
  "key36": "2bJ1gTeksSuvM2EuuxubM3LFayjcTTSVWTHrDDCSAN6vyGzDKjN3p9QvGhJMQUoDebvjHRDMbvq1rhhb4tqFKMbV"
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
