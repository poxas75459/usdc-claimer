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
    "2d83AVkQPTtT1MRiWvD2k1Ff8hnAesT9LqGKUc1pgw9X9JrU8MwrzY1U3wJHjq5bCJmtRhQ5VFS5ayHcNNvXmrYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzeYByEF9h3ikJgGTxh1Vizm1826ATmNCpgqAHw7tgxFcft9hXa94kyFt4LaN4P6fWbx6ekC2EbL3fv19M2joWD",
  "key1": "5XVrvuJtxsXLUDJJKLMt7Y3mttD4BcpEhpnFsrq4pGBr7XTmKUHEF8bMjsksUrKvPQpNvkcb6TGBRuR5rYAb9mTU",
  "key2": "4FFrkJ45UJnkUXRtyc8MjSpNoNHtpxQzNmgyE2wUQe2ZVzB5DMvQMnb61yj7uGyG4NWLDPcojbPwQXUULMFn2MXs",
  "key3": "4kLA1cJPFJZ3kVrSRKMxDWe4HRgWZbhbhdtSYRKYZsVHLtJ6poJVwqeeAu2cdyX1QjtoS5TFTBCa35iewtjvkbB6",
  "key4": "4sXeJFyjWp6XeGBL7pYDvTJ19WX5CPZA9A9sR6KnimiZ1CkzeAd2d2PggqmCabjNduffa8f33ZB3Szy7aZL52wmh",
  "key5": "3wXhwKvASfmc4xYcwDSdSsDNKfVNc1a3aNND9XjfSfrZRaFZ5mJMNTk7E4BwBWPfNHvV3BRiUTjoSyPKy6Rp78CK",
  "key6": "5Z7MQ3YoL76xpfzxLMnbgJJDZkKvQYg3arvdw1H6Q9CbBytQzvhMTEW6YPmhxsNFcXqnVv7mT5zSgdde8BwA1wPr",
  "key7": "52XB4cS7tYyfpZPsCVeDLn4JgVv3rmqU9sPZ3SXjt4fPLVchWWQi2hhq5t4LNtkBjaUFMJgNSyryQNKT16CkqXyu",
  "key8": "2smv3c62AEJNS33iGayD9hoqF6rLDb7as5oscW7LgZ7RtVLDMcpVydNbiehKTtaHLYuMQN72QxeZkD1ZViKqBMQn",
  "key9": "3wZ86feAX3HKa9PYkP3xpHe1D3XVdMHVrxXFahE3MZ4d1czfoPcx6mMeDoCgndydMkdLMTrNnfnY1zTpGdDvFK9K",
  "key10": "3NhCGsH15Z5MTjGfDUtWjPJdrxTQ5VSs1iJRwxhFHFc7KvVHfRGzXur8koRCARzqSgSsizuzdVH3inq4DhAecBSn",
  "key11": "5PgTusZaTghuvx6uvafjVyUqMXpfiVXNDtrbZ5tRzNxD8RY1LXqRWuDPDU728A3tmy5zdVcUZi2YSNuzsEBBk7Qp",
  "key12": "2CxbAeKx1Ga3XyY3SGh6gqrxvARBuvp4oG32MAqBCyhGUg2Wt9fHZTsGTtV3KADn1RxRjB6RuLc4jEzH7Z3x1wdj",
  "key13": "4ijFHPLmZ3Ld3NHeHJoZZzNZH2oBmx7GZLLPhFsMMcnVcSsgUAkN8139qsR9eSBHyMUyjDriUvAMnVdxNhUFaqka",
  "key14": "S3qn9HQa5rSBsqtXe8FjvxfUXDBQCePQdWs33ucFqMkKJByXPSfhr5QQu9ZFS4H99xNm1NUNF1ZRPB2R6nWEumv",
  "key15": "5FcCYua1jkjh9yWm4YCngzn4Zc5kER72JKKrh7FAH7cVRUHHcCHKinUMLXG3WkLAwjzr1LwdgjmVKacUpPLwJhTf",
  "key16": "k5fnfFDfDicYT6rEes5bgG62a5hB18PgZTwRjFH8WqJwjSeeuSap6jdR31a5BaRJXcK82nNmaAdxkfJspEmRGX7",
  "key17": "4eSE9gV9d651d5fNeYazwwenGRGaJ9ZLTWWzNdpYn5NMxWWeRo7ERUDcptjydBPF3WZmCDcBHtEMhit8a8TPhW6o",
  "key18": "42fDQkqNnLigRDw6tFC9ZTPRmwvNGzmQFfmW79pZmSfAwHMsegSB6damqqYhu7AZrf7sbCB6qhJbL65BNd27VaYi",
  "key19": "5d9WqyWWig1GHM2R56ZMSpsDYXeZXyXsw8TxBJe4hGAcdXxQoBLaZPtFbE32iUnQZUpqV6XcUuEuhCyfo1x8p5U",
  "key20": "UFoZrg2SfJh5D9XKs3jxLRBq1y7eJvGd2NKU15AeRe65bLPmkovKkGXNuUunvhBWYiiPFSy8oyZ9EqE3pRbgb72",
  "key21": "24M3N5dN89RMVM3miKpW2RvzrbgbWiC3ABcKdnLRUaH37AACcCsXK8KxVhKvFMWLiNQNVBosJGFdBJmiY1HRts3G",
  "key22": "3KiX57o9BVD3PTZnUU9XEKckKnziovzaABnjGvamBweGDpYfKHn47UXboVdd6b4CmZNg3rG9Nm9QYa8wGE3Q1rHn",
  "key23": "2pfkvBoQLft4AsHbZoLt8p5Bb2pUifNqmK8Tt5btKRptCo1g5buDRhPeiXcAHCwL1kxjWU98NKxnuvZrrSHsVjXg",
  "key24": "3gsYvSKKQnsVrnN8eTziAoQhNnvsW1xYhFetaoaiYs88mWZuniLhfQ4PvFKZafhoMjWLcXyLNppykFc3BfHyRQ1Z",
  "key25": "wQUr1FihECWBGXB8SF7ofG3jy6NKmmVyDUdKdjx5MT1D5tWBEtmbxDtjuj5sKVYUB6aNqUX4YpviJK1q2Yx7Hcz",
  "key26": "5L8V7TfoVazpRM334UmH6cmvnhfk6u7b1yrVZp88sGwbV52upkSis9otK9VpSGmr6UiyzYCGxygA4AWmY7jNy9Qi",
  "key27": "tW4vYeGAeY8PY8oKCrzWKicLHfqg9AKRgGoeQ7a7vLCQVLPNJYq1Da9yw4AqYPkSkY9L5zA2U7oiGHXjZgz2JHv",
  "key28": "2Y6ViZcTm7yD1gTUifHWpvopGDCbH9NU4NMAn4y5BtGTqFuXrThdrF1aLBy8Zoic6UD35y7S1bwAgTwG8Z85DUYF",
  "key29": "2h9CXHZYzaFfWFPvv8KS4F1aw2xxF3HEUufiRG83TDbuMAVuMiKUjWySSJb2xfBDUz1aqNverTxQHCqG4GnLeVoT",
  "key30": "3PUHc5bU6ay28N8JPB93SUsErfqqKMa3qwcV98Dm1EaoHjZPf3j7voaKRpuUhM9kwiUxJhbvzEQui9zeeQJ6toG8",
  "key31": "49Cgg63hL218oy4zHMeJugXDk2GhDQqYpWoxY61LRX26zcBwn7JECHe1KWQtBrmeJBkkJgtgQaFwB2dk842zbUpn",
  "key32": "5c9kGYu93UftDaksbZftjmZzYCUTJyHmow83y9ReiHGrPn4WMnHTpQRDigMJWSPfMrnmD7TNXANR4eMUmxfHi358",
  "key33": "NpiLU23EXxrrhehPgkVrdJY9NNVTPyhaJe26v3Nw8To2X8Bfvt8dXDubyS27YSDcFFN6sHN2DuK5iwUdjNzmdwi",
  "key34": "2q2Y1V7TcnQmtNENDQGWWPMSqEQyZ4jnKGmtQm2XYFqf9vvkrcNnD5ZzDytKSjFfuDyse3rHfupovtjXeRbEzEQU",
  "key35": "4bJEkffprLn5uHpsHcchTcoM6CjB6GCtQWQBEqA8Vynh2dFJLDywdb98FnLU2cxMjRvVEFKCiQgDRggfADuQakXF",
  "key36": "C36e3o4jeNqHAtufhY4ZHezw1XrysAZMr2wCDj6LWy3Cik2jW5tEpxBtDvKBGSgZZDvegD7h7Y9sbP6pqvBKpKH",
  "key37": "5p2UdW3qYwmpshb8fYyZqKdrmfdWvHE3Pyg4CvNJN9g7YfuG1FdaxbjvWbkmrpfiURfXqsUe4UUNsaJiR5ukrvZu",
  "key38": "4iio9kWvQAWUkiXQrFk7M83gW53oNEqWN7kE5Dd5kY8A2mxNGb5UQDbqn9RzKMBfztdqV2Ms7KWk1SukeXfk5Qgt",
  "key39": "3QJVyrrFChX6hDU23gQfh8gM1AfDRC1LXCgCCzm8LKecEkLdutvJQVZp7G27dFy5i3TkAXREkfdbQNxndwao9u5r",
  "key40": "g25VxgQ63eSHgDwf9DF7QKTqPtsau6HtADZ3H6bBm5GXxfCTA12jgB8rKj5CS35S8j6B49rr3swcppm3ECAQJ8e",
  "key41": "39DxNMegy2dke4fpb15gwYqMJTe5op8V5CJcbBFa1dm1spiauAsEqgdqT96KWqVTu9SjFJSLVCGCnQhC4MR5uCnJ",
  "key42": "4pQxoEe3YK4CiSmcnV8ttTrG5y3GwiHMYb14EkM9QP13EVgmxZ7yLHefG7T47n7FNRzazR2Pycwqyz1PTJVXWB5R",
  "key43": "4sX2nfFVYUtDSoHhtUp4hraAP1C8bwSnS8sqvEybMQQRJ52ykyfmCpNHbpCqUCZM2ruBfpagKtvw64GdED2DrHDe",
  "key44": "5TpLu5CbMVrC2rPXLsBNY5ksugfC3QxPcTwV7qGj1zBgBAZ1jXsFpYmZGJjrDtKyZonNn46rWcyLNdLJ13cg7eR6",
  "key45": "3WxVgSZZ6dg8bsyMQbXc2X7YwzU7kFpz6tdyLbuT9LFvxHTVqdjYfWipNEnsA4wUECkQRvbFiVtuyrRkTKhAGXxG",
  "key46": "zvkxNbE1yRsbXysi45uksY31HSVNhh7ZYGL9A6fzifN4WoVmbXHhe9VUAPVPAFdvHpD5VG3PCFSrGiAhTsYLUvv"
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
