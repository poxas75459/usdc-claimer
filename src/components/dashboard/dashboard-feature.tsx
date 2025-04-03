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
    "4PFhhZop73j5X1bEpUmmq29oASzqGEKdZnfPqJB9buG8vnaVZ5XavPtHfm5xRwqwG53wo8qgXzPtjJtWxzvGKSMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n94vALfh9L8Wumf2gc1337xxUJbXUtgxnYAqP3rSoCKqVrWnjVCuSimSA4FGDAQQ6dPFruf5YcX5rBuLB9hzUKA",
  "key1": "4PjSS8eVupVL7APJGxG1unb4uB7hYUbWzF5bLCNfC9gzfUmPoLhhSYPEF962yLGx9LeGhChoNAvP8yxNrLLPu1u3",
  "key2": "NhExu4uaonH1JHyuCyTzCtKVr5ULtAboiE922ogoNvrpW6Pm4BPPkQv8auiGrstMKEYRH3ZBrAVL6F1644uWroh",
  "key3": "Y5PPbjSt3hAcQAtw5SGRJboGEEA7eq5rxTvXbm7tUWnBk5N3osWMPA7biDPG5Pq6XAbHbzXXhAQndXSA94WyjYn",
  "key4": "666cFJZbxKNd3voYFFLj9wt6PzgKP433dbU6Wzagr4ggQDaKtcV6gDDy8ackcuEkFdRjodatvGySHz8cFaAc7uQM",
  "key5": "2LmdHjaS8jzareYshpTgHkKGsQDcHDfSogMrVi9cq4tr1GpRGqgjnT4aff2fs1wm3Jejkj7C1CGJ4CPAB8T7yVom",
  "key6": "3qd7hiBoAZsgqcXz16QPSeSuvd2G8HF8qrKHJdkQyEQnWE5FDswem8mVJdQCfCw26c8aAwjzPzUokwVTYMw1NXiA",
  "key7": "VM72nkqLLAQQ4NVc9HQ8b5XHadZ3sejuVfyT6Hg7x6dhGMXK3tkNNdmRJy1dMZxVEfixWFCuWWvh7GDUT2H2oMJ",
  "key8": "5g7nehzQW3x5fkUgJ8upRLwpKgU71VNYtmNtDfK5joTGtB7vGx22mgoRwarF1wwVEZoFBzrVeLHh6wdgKeTUPQxT",
  "key9": "3QAYXUnGcx45MAgkRMA8DmkJcX8z2ZJ8VM1MdKUvhP2DRCvT8hCmgz2SsFiZKUrgniWDtLexfZwXubyxvRaYJ1SL",
  "key10": "XBnviitZn6EC2Qqr7n7F55y9TAC1nbKsd6WnbnevB47p2cGwkKq8o7GfRkokfFrEpvXRHLg7WrQ99ssDGSLDiAf",
  "key11": "L5i1BkfWdwxeC8XypN8MaX3aTJT1rYTFfUKSJjyPSZsnmwE2eLvCuTcmVTTfxbpPmSAgrate7ZZTUcynpBVZyFj",
  "key12": "2YaGLZk2KTnyQGeo5jNGGaN1oWHLCyAegK8EKmu5yWe2wUAtMKjBpAAHgKu58MHinoNtjtwJwdpKRKNTuQyAnnsf",
  "key13": "3EQRuN6Mq64kCWeqrEqpMmQhB1wtLSPJ15atC5eZfoJHD4JkEWLsv5kXQsyKVzeV7Q1BpHPHue1s6iGRVtJ9gUME",
  "key14": "63PcaxeSjPkXmzDC9LLcr9tfup2H8HYXfPzsGw7BAcY5G1pvSMvwqr7qvgXC5rMiUUUrjrex9WoMmE37H8VNY3Df",
  "key15": "3qup8Z9mheAZvWS54KzU1BjdrcYu3hkjxZMy7L46kqStZNFyw5tSW1XgxV4rZoxGuDwgL139JfnrL2CnUdNzYWx5",
  "key16": "7pykUsk4Dz6Pa4tkH8K7bGnWikdnAfkNksDZ5s4X8egnHTuC8b1BC4XPijsvZr6EpYCxVkkpRYbNf5Fuw3HUJdb",
  "key17": "mZYzYfobJh4FkmLoFyMYAdnx4c3xzht12G8X5AHe5YJFiyS3HBvgSMobGeVCZz7gowYY1w7vjxW1R88stLp6nJz",
  "key18": "YLbPv2K7B7o9Mvf7tq16eyduSvM3fMr8XeafNTDQLJKGNRizLKKse1MAVaAJybbcV1PLotwEmKmkHgTXzsyAWNJ",
  "key19": "Wefnf6e7rW4qtVA53d9WQHVAAdTU4duHmkFGwAuWrSwoPypHXudkGpdbAcKcYSbfYfh9WNwrYh5VEwSDrgvQgqX",
  "key20": "3Etnp5az9MESrBwXBagBJiUN3va17CLfnkMVC9wjPtf12XgEXdGu3o6U4o4fB55eRRJ3no5yJZExedsQr2LRoe9",
  "key21": "CZFzShMQ15x4q8oSDRinmXLjhXrJdCrHYxAm748eEPz9hXcURpwBiTeWqvsv6XZyk7rGY8WsVotSEhe5H6C1UZV",
  "key22": "4njrTBk6GtWZRc9HHXLGYLgeYEDnGpqXigmbk4BmguE1FzLSSPw1u5HbpGSFMuewMEN6YwrmC5WmkAhAXPTDQjgn",
  "key23": "5FkwfCmx6PTBpy13g2ppLriGXhRR1FaEzh4RmM7aLfKNVWsXLUDmqwTsw34C9dDffRHxLUydLgkDS2a74JWox3So",
  "key24": "38VrZLZtyfySFyupFc5agrvnnkSPB5W4k8L3txuaHt5NiS3e4QEBbonaRG3hCL7wwBUr4W2BFuhmi1nzRnMYSoJb",
  "key25": "2UGie8ichHU5bZ9A8jnt1e2Wq7Wd5TwPyTHjEUN4MnB7agpZDu6P1NEKQw6WAENHbdYkFHnqZeEUKeP8tH5xBsHS",
  "key26": "2f2c8TXzbVRxUSRNQg4zT5t7Twrxh4xMuG9oifzkUnESNosgUX2pRCY13VG98CN89g93KeBATwAUzKZWpugSNZ5T",
  "key27": "2M9hamP2xQdPY6kzQCgqvm2vUsf87Ypsr8iS81N3dWJ9hnSd1muSHGhg9CguSR7es9ZRhpVhv7PbGw6hs1dydimh",
  "key28": "2W8iDAeaADD1TSwo5G9LHCxvBVVgKtVwUz3bRpL71AZ7F7y1QBqq3fFTgkZd48v67hU6A1B3S3wxoN4mgx4QfX5r",
  "key29": "j3hE6hz4H29gB9yZTZbLbbjmLYX3XZi4HnmqCk4P8qpbqoPR8MhmTkGha8kc7feTRzFV5gAweZQcMr639ZjEu9R",
  "key30": "o62eQUMaGif7KeLMthDSLAyD5czyMCjzLX7FEvqaCAg9Z6cB88tPXeY96Lmy5eFfX59bb3jWPiczZg5RUerEbgx",
  "key31": "2sQkTgbQxFJSupdrEYYv1RTCZ37u6ZsgS48D54r92TR4V2ZJekR6uTsYCmtkt5EdpKtYEmr4UL4Aujwds4KDVgmW",
  "key32": "54xwAiNrF76TCLxXBVtwAXybV17sMX64zGfUHC9oEVUP38ynrfhEHK85cYpifpSPF1PsCYWeF38ykLGWNjNGGysn",
  "key33": "2U5h6wWYCkRD3g6EAiXncF6Nt8vDgwsF8KkQcWzNAz2UQ4TukDWf7jmBY2LYmFW8zhHaHyuczW1jMEuMzcxfaAU6",
  "key34": "44AUEF99uX7cE27Q5scS3SWwdtUzonD9Rap4gnpNdV4pZKbdsy8oQDmHxLgyFaB7P5nBPdBYzP7yofgfjCVGQ3MW",
  "key35": "3AJr7vG8nwceJTTPTApPZx6XzwE9scarb2Lk5LoHusdj2pN5Mt6DxpVtSxj5SARmTiLAw5hCEBQ3YvzHEHguPWAJ",
  "key36": "3Bnt7yhJeUCQqyak33N9GJxitDBk3TpHLbXTCx5hZR5diovk11QyibeoVzqsVfn3zt47s5pw6DRnnTEc2tyZR3vV",
  "key37": "4JiDiawyZYc4GHYm4jnmFvAavGW9KYfakKH3WujCRd2JnG7rCojdUYc9faUfSZehmoefdvD2SFyLuQhzcFHaQav2",
  "key38": "3qgEzygEAAjG3Yty3pbgYbnrpXpGUukCoqNnpWTkVEjyKHtWJnQxZNbs3vnHrzVuhhfTm9w3LPZYjVADxXE3d3e9",
  "key39": "5haNfz9P4wnNfLmHVrnZr2zFFnkLDvbcY9JafyR5Yvkqi5GZNfHeSyLVrybzmiRnkNeijETHzGA65XpL7Hi7NEbN",
  "key40": "m4ccZkT9cPGBzjhhJa2bR3whqGC5iFXu3FHW62m8qiUngfsEAeRMppuBVma3RPKdvHaUyngWTzWyUiPQ6Eqj5WK",
  "key41": "24HpbfZKPkXNfay5Gnvk6J3eV2RhobbETKudhdSsmhMBxxMP5EdBDPMXXeEjovxFjhPDtNDuweDDCnW9YVF6MrMt",
  "key42": "33tynBhG7Beh4h6rcfYZH71TnAytdBPPAyTGSnyrvfD2eAayVUXFeAreLATRdc7u1uSSem6qP2kEpakFLoi71WXG",
  "key43": "2KpcSztuTTq3NYfrBcKehpPNKvH1qScjrZuoiGUTzPr93ZmkQmwEebuaaywW7ZB5AjjbgPAMjDSSNt6mkfeJhxBz",
  "key44": "v6iBEX35rsJmxHJoizjf1izeJqmWqqSqNjUz36w8bsC3RwV8UNgVpdnMegYcFEFzTWTbrHS4N9PnvtFjXnLQ38m",
  "key45": "5XRH1GV6WWvTdCTJr8YFhnKUm8jdhW9c7ogMYR1W9JzG73HTr78SydY5JEsMfFgTnzYHt4SPtFHUSFwzMSKkvbXh",
  "key46": "4sADgDNnH6JLhFXJ4Z5fKovFGRMz2rQm9eb5g13x7SnJDAk5jzMWdrbLxtMZSfBS8zgWu73xxpD2yQ6Tq8WgY8RM"
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
