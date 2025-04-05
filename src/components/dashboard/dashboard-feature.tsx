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
    "2LiKZLJV3cSDFfXMYjEFa7UUKLpZx6z3bTDQ455k5Kky7nnBDe8WomfPDSrAHTV42RrmjuW2gupEbu7hAzd9HVGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCDTEaYmLNKSTpQPN6hNBJioepGLVUpts8C9tpiVFr81qVEGwkdqvMZWoiE39yFLjuGXkdFr2zDcXXTEGRp3536",
  "key1": "5MYPcfVvBDon1zkCMQ5DTVac5L5hUYn92KUwy8hQ5cb5M5dcBAkvECx26Yu5RfpVWDQouS1vjYpFVvATXNeNJigU",
  "key2": "5qEVU21dxwFMDirPUhNvEa25vMpBt3XJhJ845Vt4QXp2SJiYoPSXuuQ9guAc9ZagGegegfPAkhTtWqYUaXqijZTh",
  "key3": "4M27vsgLpzSWvoAmBTT48zcH1gerbzNqnrtD8oq5r1z6tUzFz6PNXAVbvFuFPPd9UnB2Se35BGNKyccZPBBNtrBB",
  "key4": "5xpdMdwoeNpqgEC8C4i83E49kfB7wPRcZ23RCW4pcFQWioSvr1a6mWQqpnByYSqT1mCm7pWk2sSiGbs5rvarbpts",
  "key5": "5QPcNSPJQrB9zZD5AgbEpiK5aGv8WyxysgyAL3FUqQjXYGU9riBoNdLMGpCaudeP2rUjqqDYbcgU6uR7MhuUVH6K",
  "key6": "4TbTG3kzk4XKNdCpPJCioUWid3UosUXZkrurftNLTDBiREhiHgXAXw7B3hc71fKGK8Qymq7Fw1QUDzeUvmTtaLMs",
  "key7": "2o153aToktBXMFxmbfqkxwnUP8MR3ytrnyn1fz7Ur3ovXdgLR3Wtz3yK2kNudXbZJoes7pwvkMTcSKRrY7f9e4w8",
  "key8": "2bF87Uk4pvvFxkonZUMs4gCPaAEio6K3RXygXxz4KAbNRpioP6NfG8rK9vstt5B3miYMuYQq7rPghSxKfupAq4AW",
  "key9": "3URSnh9bEQnDdSoUYHtTd2k9ZMhx7HjmrKWwPzbKTWwSG1PKfU7E6mYQvuBK3RXPFtQdxBoTf72NGobiRMdir3ki",
  "key10": "EYKudHoYjaKkQzFQn2xL7P6Kp4A8cRJEQXKyJfzgfCXy4Bki2DvHwaKhv8k53pteVP2kcoDonY98qnvrNudEjkn",
  "key11": "2MX8ZhPRDucGXuNrnKHnDHVbwh2vrUaB9NESiA7mNmEJxmnYMo7ueYJhshkmRbyo5bPFewR5U5hUHSMruc7tY9Tj",
  "key12": "56XcnJd7Ah9acf6eMCujH1ozAgmdaL6m6dCAzF7PLgg7xTgdiCmrcG8EudrSpN7T5fbwF1zNXg5mZB44SMgLxdM5",
  "key13": "2WrrwR6txHSBVHdeeEn3zRyYxfb12nigaEMtvHm7zS7rPggDBxUo4UeuZ4kRaQNVQrbwrZ25tKhJSkTmHyi7REoA",
  "key14": "58t1LYBjsnZPwT6sTd7sZejLy8uEzY6JDvBCS6LvUgpcaZKfg68fMtees1u9R8r26vYAjxnKyAoRRMNthH7u733X",
  "key15": "3tmDyj1CkMNykcbqhqacUTp8bJCPuCxQNtzbc6PXyxWebgNgvQArGw1SizvX3sPWajpSiRBYomigyDQ2bYDsFqJd",
  "key16": "5VXFvPt4dyBtDQi677GuJXNFKRiwcxjuNiyoeeyfabRdXufeZCHdBwTaB7hLua8MPyNeffy75HsjwpQfemFkNgcv",
  "key17": "31Avz3WpzVu6Dg4SMnk1cixKxLoCk2r1uapt28ek6svcnUewUi18dWas13nyTwNAJzs1vvi5Ttq5YmbYUwsL3j6c",
  "key18": "5HGLkPcXF8a9eESxQDTX9yQXpq6pd5Ss5ZTRQsz3rCcvjckrgeLrpsXWeyGZrfXJDqTMnTvNQ4XqiEHznLpkcy24",
  "key19": "4iCbuqKgMAAAhkBvgco6swXiKtLZL4VTtc87f7Aff3eiyUXV5omGcDayUfGpBTPsnAssi3d9eQqPKj8pULfEpCnA",
  "key20": "vnxx9Y1sw6Yx68vFcNbr5Cr2e4VMxsMZ66WSEFVUdVwUU9Y1qez65oY2n2Zuw8fatLV76vVa3wyYragUxEyCw3K",
  "key21": "2G7nwbMtopXGSG8y6keujMJijkH94UfPLsJr9wMzbp3pEPS9n4VC42vKb65VDS5gkha5s6Ww6kV5nrckRWBH55hN",
  "key22": "JWAJCV4X1TBGfMbzx3J3WnByZKEuvNS2YxGp2odbfYbqbggthmiSynp1MJL39rTJQbnfAsGg43t5pqATzgrqL12",
  "key23": "4bSzg1xNVK5QUmG2EQvEMjsTU5x1mih8E383qP4tsjbAGxNkC8QW1McRgbwyyRuHjsGusBXAFVutDpkZZ9FhhYyp",
  "key24": "3KwsJMTHgg8NbjqY7adaUrRyd8uQmUWkeu8L4fGckzoHxG7ri2v1RscGyqcyScSosFYTYuw9b7Z6jUDxh1GPUt4N",
  "key25": "fGPQWUmdYGqcz6KqsMAk8kSbWvacRpN2JBkScTushWsV28yK74VkvkQL7TCVtEDLiwRMQb37bmbcTyZf8TrSdF4",
  "key26": "3Nn1hmSLj7jwP2ZHDHno66FX1tGmFD2tvuqAALA64Bv5HKPcZLVKJQcZg8zXtWXfH4regG9nFJkUMWwye8Z3JTCV",
  "key27": "vrK6cRV3EbEeKTBv8fZnCo8dre5jtUFtctRZ2sc9CwLEsmHdxYajBQc59Nrm9L8k15vXFZWGPSwDwx2qf8A2RWH",
  "key28": "4VmkwKgNmEVsguhBWADoMspEXUvMrxFKrv7Gf8vnnci9A2NVnjNiRsng1s9Qs4HD8Cpr32pQHgJT7GvMj7m3A9VY",
  "key29": "YqJHwRQvP2A7eKzR2ZsyV7o4LBCdRsVPjKytaRFCWWo7dPqM5NTLN16PMuCtzBEV8mxtQ1uqDDCL7xYsQR7dAGf",
  "key30": "3aGmrKcVLTtiLmrhgFXnkfvseQQ8m2ac8KaxujEMzCwPQSa14RywZvge91Uw8XLA5dXm8kC9b7Zj31ZeQrWcssDY",
  "key31": "2qLULR9LkWNkPYY7C7x7aAd11P2GK3M7V794qjiammYqoB1mqaiLuCfej94WARGNsNPeRPgiEVqxBkUpiaCmVxhX",
  "key32": "2M2uZ8HiYwbDzE3WvPAkVwpUwg6E6LNEiyXoVgh8Z974TcbAqd9PoyNjjvyvMx2exMkYN6dxBtRTnQzHG87JLY7T",
  "key33": "4B6F17p77PDD8L2h4ZfUZE18p2tfKZ684TbNH24Gct2mtiqUU3CKk4vYwQV82Yh6RF74a4X75ZiW7bJQRgsGxV2D",
  "key34": "28rRBsJyqp6YXMr6cUZNtLLwHZPirBwfVhkn7GTC7tiZAg2VzXt5XgENXt1Zjw2FLHnBRH3o9piCxgTtooby2dNa",
  "key35": "4UjGdGz9DiFif9yf7MCq1QD5yDMNYL5pYaKvi7zXUGSXLJwmQpJZ6fYw4vaoZs8tF8QFw8bkx3Suq4aMFnSsHsQu",
  "key36": "BprvDbocodxNPuVxpezv6Efj6wa2WdmEjDt6diuF4H5fAKjcMiCXcyRpviPa8Rc8A8xuo8himmXLny8PnS1nE6h",
  "key37": "2NMHoQimeEdAmAckjTmXKX29rtvfH1zDivqkREPpkqKzgCVqYDgQdv2h9Jsgm38ghhNqPJ41kwoLHz9g1EuTqvVr",
  "key38": "5xZbNPyH8i93pc5KvrJXuRdNjnRcvFCMYGyifb4ocnjt8oDhBRHLiY8MniMdWojtbHNYbmqopaxLPk36KaU64f5d",
  "key39": "2DnqrvJk5knW6zB3xnrJgsk1pxWYKK3qzqVRX7zAanT2D6t6VSPP7rmJ7EiVw7TqjWqf5DFKgPRYbrTVHp5V9eDY",
  "key40": "5LZkKYD1UfdBh2TPQBCwmZ4GRcAatJ5D3g47QnwiN279vuUWZhLDghJigoQuY8jr3xG3XRnBsFz1FdNSg5iTBGqG",
  "key41": "5X5mDJqbURKGxKjSsHu6TPJKgTgKY4BgXxEFJSi86nmPAoGJSXVCQEAjjLkcucypUXG8hVVqEjEdDrndeemMLYqs",
  "key42": "32hp1SqMrCkTgXq32z9zT3QwLQ25N9LMgYbS1xggwnPzykYR5NFFRAWNvT1m4a2Z1BcEkVJvfFvWMzVY6mDWV9fF"
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
