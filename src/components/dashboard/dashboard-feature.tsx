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
    "iWzSaak9bFusCf76pzRCuCrRAmjHrBUyetHjzPNWJRBsmqArYKhEmfVjUNKjdG884wwkQpi8y7HZ1bJkXgYwA6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNz89anMFMewgFc8uAGBuLi2EouZFREfKQSWG7pZXufqvHPAKQCrCbTiCKUdXSeH7XCcM4eNC9EP3PKky3aNTKL",
  "key1": "4gthWhqGLSne7rkRJTBUZuDBBzUSugHvaozxJnwjv5nnSLa2TdBeio8MmPPDebosAE2wodbPtoowYj3y2M4JVwKv",
  "key2": "3L9jfoCgDyH6spLierCQJAcHAkmTG55avuoygXJnSyDjymFU11HZXedtPDYmLMhcUKghow7FKo7f4N9MxMAidJBN",
  "key3": "3ibEP9x2pjr3mExrbDW8c9gqLBD18rTpTi8KKaHr7VGnZbRPH4LFbWPyoJgD97gX56cY31x9441QZ46cFNXDDJ6j",
  "key4": "vXEtV8yjeMEYshkznyrjERJDdd2XQezF9GnjNp3bGuEe4eCT17DZHQRJSBzCz2JGn1CvtEksKQhceSrQRd5uYJW",
  "key5": "5zGhRSPwVZMtCSaxEUbqbUkVcbUebaEu7WdJtoHnataJkGmQVS7GjESEwTkbyqvfSW2eWKskGLozCriinUfJenr7",
  "key6": "xSmpgYgsJd9Y1zCBAoFzNzL3Tpbuz17hv3VdCkWVVFTfeNLsS87nQENb9nbfFVDQ55561Yabc3d9P5NNKtGL4kM",
  "key7": "rMM6gQ5CaoFNi1gixCGVUSXtTLBuBA95qcQRPgP53m774obuUXqdtEqkMxgagkeZXmn8Vnz3wjxAmnmdvb76mz6",
  "key8": "5n2SdqF8wBfT4vmESeEk4Betg1EDrJoy4Yn1k25BY4zaThhLJH7TF2v29dgiDp7tH31BPpMwnMBsTSj3KSJ27GHP",
  "key9": "4z5xDPYL25W24QPuLPeoph94qfwgQKB83zqm5h9sYXeDBoGdAYSaMawbhisDGdbnXsLN3ut26mpTbEX7LDGbNEnp",
  "key10": "5CskLyNq6xLVpyCqz2waiQ2YZBKRyeUXrhF9bbt9jwujARxTYAN7tXB22nno3Pa2q1XWqtGkjWvnhxhEYx5pipLC",
  "key11": "2z7SSdEboyG57ztBLtLMGt1NwowZqbQTcRJDwasvgrSrBcYo6NbhmZzvfiR9EH4mg9FBVytJjccKzfSJkhN9HcJB",
  "key12": "42cHp3GFbmyS8MUHf2sb3Z8HD8Z7cmP2GxkobKtzKcEvMnokpUsTeEnDteCX6e1m777hPGRAcdxQpd2joM1kaXy8",
  "key13": "5PisiYAh7Wjw4RqNd6JHN49rpurAxho7moTgnhPXNTa728JxEcWz96TAsGpLczbtuozVJYiU4SULuzq44UbXXgV7",
  "key14": "5VzVKCs3SVGnF3Vi9BWX2suUsQpB15jS7XFdLGhKNHxJsnrddQSL257bhp1xXb7ZRiEsAos7vgnXjDNfARVKA1VD",
  "key15": "uix5E2Pas9QS9tvTuZncvfpxwzUkUZ8mnM54EgvdkTJB4pH6Crg88sXHCaRtM5FxS5BLCNeGUTkQx5ZDsya191Y",
  "key16": "3uzm2u2GSpRxfo5BfuH8JWPrsThyZ5aBuQ7uqtyvDK7uEBft1BkLC8kBe3UEMUKPBgeyxa5oT43mpYUoex3D36Gs",
  "key17": "5fxgTkP6zCfxHaow9oorXi8GD3VbsPoJ54UBuKVFgU2txzJAm3HS9KvK7qhF1TCAZFQTTEUCstFZWB9T3xnLxcsr",
  "key18": "2YiMG2Fup4pRwYrfRm5n75YSLmHsSCVAJpzJxZ9ZwKEspGAeXyfkoprJjdHfXbQwVfqRx4wdUCN2vk4VMQnmSiTG",
  "key19": "4W5kMwTze7sEbEDZZasU3xhXf5yp88ASbKXF4maS8DjHKc4WPFsAPsukTt4nt5eC7ekANTwdUVeDTu9e7CLTLJNF",
  "key20": "5vbLVAtFeNKmPUvazrd66NDfsUUUDxvNV4sqTiPynVFHgkMExaufb2Ji9uEbgpw1dJkoj2AQjobYYAUz39QU4kHg",
  "key21": "64vuBTLW9daLR4qNGh7dLNijpHELsukAQsYw7jFcGHK3eZMtpUUDi5W2rfXEFZbk4AMKr72nzi7xfsmNQhHZ7vkA",
  "key22": "5dHVLjju3qfYtKEWy4b4HMkygiA3T81NBz2X2pL22bjmdRuJgYg7afhMi15yg9emJoFt99NPjjB3GTVT3kU5am87",
  "key23": "5AtMwEVBFt9yfeEuApiwBH2Uk5hc6Fy4b3LTTqYXUb6p1uaGCgLhDcoPo4x9XKbsEN1hnSrPUbR8ypXECJLP8y2c",
  "key24": "4okes5rA9ggU1J1opQYM6EUvzzgZU4udiCC4h6YGHwLv4xWScQ7hHFvzdKoxojxob56MVv17JWi8AoqmdpytZnpu",
  "key25": "Tvus4WDscm7zVhjuYJjrPTX63k6NHsbc64tBckSxnk4sK4kFhurQEPwHdstZpegqmkjAKw6BDqYPvkAAsXSVvZ2",
  "key26": "dVcgAabrsngzkbuk1ZorZQBQ6C2nwDZL5R9aBgFHdSMpYVUdQv6xL3gfde7sgS9dwbvpNbgTHhYiubL8eHjwAda",
  "key27": "4e8GaJyTxeWwqSu1nYk7UCX5DxmhQnZPVsd3LSUZSA5MpurNSMWzxag2fJf7UGtaoEF3GtNnDf9JnhEb3XroSNx7",
  "key28": "2BE1JJrPCTDZT7hUbn71jopH1CQQcgncrBDDeRAH8SypaBWQYjv7U425pxyrxDwCSBYAh6f4soSF5f7DBjkZA8Jy",
  "key29": "32Z1ymSUfc3Maz7QKFDsmpJNR4NNjTS5PyzjqLFqdVJiAW8qopkwZLbY8h5aPYr9N1vvtFdvbDNwDFSx8phpBAyT",
  "key30": "3i8Aa1D4JJpw5ubt4kah5jDCaPQTSLyKfCyYCwgddjA7FHnqnFZXyStQpUwxtqJGj9m3UScAt2XdBc9WnJms89ra",
  "key31": "3qSWcmTr4n6kFFzr9F8JLSrt17ttKjArMviiP6oGEiYAGJBa1r2go1J7d4rVWrT2P72mYnsbUqoKjqbYTFWBhVi9",
  "key32": "2dqNsFVfdQMyNWnuxDrUUESSD8X9Qtpc44VSFdKMgmi2A6duocybetetJS47tx9KVK9WvtW4mkEgR2kuqEvVrArL",
  "key33": "AYsLsjdWiePPkw9R34gQwQiVwvR6DwfvX2D9ffadxk3yFWVS33GXzqEepANPRfH5ZmuC1kmQPaSeAtk15Qicb1A",
  "key34": "vT6hiDxuWFy3j27fhstbFLJLcNwrGkj9uCSY7fg4qj4xYtp4ztAKoCTAVoUJHrhfz9z5vrTZsE26XbhwzSLaQLq",
  "key35": "5QNDGiFGtFse7sn37oqtrc4hPYstiyM4rWBJr6MYeMZGLGrEUgRDHiDuVU5axmUV7wUtFAtqmcw5Q4osNEWaipyH",
  "key36": "37No163N5soJw1EMeHs3JwBzyYPobSTsSeAWxMxWgiXZn9uSJknm8aHd77YFnUcnrv2XcczeEJoxUXCxYJucaLz6",
  "key37": "5uNhi4i439F15f1S9Q6EfjaN71whMEVG41jX6Xnb6KjvwXGTaA8pikrBvqeXXryX5c4oBWJ8MNCVctj9VLDwBU8o",
  "key38": "4io1KNMwDWS2vQrbwQZ3hmfzZM1xTz3gr7EUYdH7r3dYXAQd8jTUj9cTj2nrUiWQQaYarHVwr9TxMJKDokxYzB7a",
  "key39": "2WBimB945Cv5SizjrG9mVATn4B9ugWHQDwtrVSFh9vBtBq13cxHvKBCjHM4d1FoU77vRhycELN62fVNkWkPe9nsc"
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
