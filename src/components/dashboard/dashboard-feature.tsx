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
    "4zhXGLf199pyuD7SPij11oA1wo9yKM4BvVJgkBz9YqCWJ99n8Y1KTNCfzkEJ4U6CTskyq2tHM83DjoKw6v3Uin1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24U1mVrnnY44zH6kCbu7mLrMjR3Qw1paafgjnCEyRCngTowRyN11H7mM7LaDhC7EqZb89E7i1qPxT3GUpoY74q81",
  "key1": "4WnZPK54JQnCTFJerquiQBN2hoPPnt4UMpZTscq5scx21QdfyXvdR6kiL9V2ZzGcZD7uM9SAD53STxbkpCcSVHu5",
  "key2": "38bQH7q5fYWBg6DEBCDBu2f2L2Ka8angJLuG3CpbwaSPC9JhQDM5vqxstvAgN4iz3AwnT2mbfHeSjDV2tca8RLXG",
  "key3": "4WnzFDrZDJCcASZGqPfwWNNWX8f1hM4UBuFr3AixkKDESXeWFNipcobWSzSyyLpzNbcQeAaPLWQEMPEPneYKkrMr",
  "key4": "57BigVMLtbkuMZpsr8SxvDLPZGafqLegpeMgLQqT7iZGNQNAu3J2V9QYm6xX3hTkeGJzY5BQVaKtwSds5Lp2Q1pb",
  "key5": "66GM8NyWxucRYbcNQPBRaA5cEzEBAbCodKQaxbi6Quq9KZqZGa73ykBwge6p5KmPihvmcvppSLPx5jFSfdJC1yKN",
  "key6": "3hwwupWJiKqF1acYnGxUPaSSLZ2LJeDSTKwR8jMmjvQUTSsM9aA1oM1TrdtZ6FWyrFpTKrg77uuJiq4zcp1B6Gu",
  "key7": "5G3Z8YwWcygeJmaWdLefMSJTdUozywghXH1K8WCerxXyscZsD2ezEPpN56G5LPZKoVoyxsa4JoaKzJf36NSchnk5",
  "key8": "3Gka67sjYqD2CazMydPGxV3Bbm8UNpaMwtYg6i2VfsjRVMzuxAMK5VyVSDc65zF64kKW5dCMTkgqZdqdg8t9uUUL",
  "key9": "2XdMf4Rw7yU9Rea6HG55vydYVsE1MjEnFpndRjAS2VZkMZU2t7Bcnu3cuDVzspefCCujHo71kzM5rEMEogTeDZmM",
  "key10": "8KfTmsFTXYg2M4qJww6BArRBL2rqUqph3FJQqVvSZtUQTqDm1dgAWbsLY2QLLmKhyGzjZtX9upmMYzM7rdti4D4",
  "key11": "3NYHLU9niizxUmpLKfxcaYBYzFhXz18zo1gjxLEQbT5jX3GAC42RE7xrAAgjevLxFATrhSJyRumf4QMPc5NH2WEv",
  "key12": "7AbmXN3p1AbsKDX9JBfnde8Yh4ntqaq27nbjp3BMaoBZEuvrzsuAtktpoZdyBVifueg2ovQG4wPfNDMXC3M7icP",
  "key13": "41C3oud6H6Xedadddq2zyJGHqTYm4T2xaYGjnPb2n6q1psfwh4D5XwJVM8q5GBawqYqiTxpiEkwCvZ3B19jEirVt",
  "key14": "3bsy9nkszNk1aadcZ5nAW9qaScM1NA6qzsXRjTEHx1StbW2iKWk6mQa8tPmXW5Mgs3ZJfCnQRGeujwGVjXuHWZMg",
  "key15": "4C43KsbQefY4whZzbLXJ6x1qgM2o3ayKfrpSmvWqhZZ2WVEiun2Rh2Cx1EmYdVVrcNCjNiaeTwrsw3bSYLkYRhCG",
  "key16": "3Cc8uKEPpqtLuzgazCBzsHA5gM8XQqhgyq6Lw1nsra62aggjut4wikAqtWowzVJwmPUQq1RTB2FJVuF9jq79XGYd",
  "key17": "2JWtLY4gauWZZH7GVXgDUDicmg1PVrqANepBRDNmYneTYoGnrmA9NMJ8CD2vnAnghi8Lrse6TDxoT6fxVphdu1px",
  "key18": "tDavtEQNW11Y9B9EtWMNgZuJDsnn3EnPbyiwmsc181zy9qBeoYrZwTJT2ZKDgm9QoguXJTtrjjyzp2vMyw39X8r",
  "key19": "3YRStfHfmE7d177BTagA19RjddzXmjgMjHQhuUa2AN1SDXs28aiDafBtReCmqpKXxt8i4vdbvgTeBfEPuP8z1TmP",
  "key20": "5R1i64AWdPJhyC8odAhuC3Ut2Wye9iECtnoii4pGBpQWknY2nFsSPnnyNXZUKsfpQHz3REuqWrLQ5znBvvxwkRz5",
  "key21": "3LRyPrJuP3H4uKa9u4VABguN57XPa8bYbFgWH3vEX8y7yM6KRAbV7XmU4qPgmgoKcgiKwjq9PL3D12iyNQ8cVNoH",
  "key22": "2KtcFUZv724sYwSJak4RdUAar9N1k68UicUovqaqdGLf6eAV2aVCbeH9hMbcehx56AHLx36WAVsvkSVp7EgPvRVr",
  "key23": "4jHTvBDpTcgVxEfuMZQYRQr9wvkR8vkDtoTLyH9Q4kp6YCisNNiuvjvnkDSrBGWftd3W7pKpBq33e9ZDJy6CcvEq",
  "key24": "tnXcviL4gxUN8XKyMbCRmn4VBGzi9Ha3uBeWAzQKrPeBAzhApsGaDb12Q28xcbPEKYM6Y3mnNpuuX3DHRQnJUzw",
  "key25": "35zwkmRD1hde7gLGYpkhsQZRrcdcPNmCyFoqHThkSHGfteK6GixmyyCnsdh1sW8pSKbDC45cjd38uAWVycfU5zw9",
  "key26": "fAyT9U7jhQMjzBdiRPCr2WxFGb8Va6QNEeXBgQju9MReE1Fd9K38FHhrakjPVixLyQXFrT9ipDkd6PuHuiQFWPb",
  "key27": "4bL8GoxZ2YPjPys3Tug7vs8Adx5Fp1hGCQ4YLfUiPrCrn5os2mpD37NcxbSiKAA8J9zEm4yTaCAE4sFyZ9VRngXn",
  "key28": "xu4nvYrQVAS4FqWiBAX4RqAruiHzw5itzVwz5qYYWKGcF4UoFZD2gfjmeRmbiJKMt4AYLMwwtW21DByE551Q1NR",
  "key29": "43F5wEtdHyHLjDHBh8RXNaBaoM6Rm37FJa6aPWBZD4NBCsyDvqkmUabLSrUn9uTWi2qhEVcZCGfYiKoGwwn61Z7Z",
  "key30": "4MHHy33Qzw9uXugjgPei53CkYF6hVj37gn2JZXmgDwt5PoC7WFncjZnwifkzC7vyEGHJdDLAsHsGMX5eDSBkWwBr",
  "key31": "4KFu8T8R6tZZZxunnVegrrThAeq9mppQfNHuyZuqemirSjvyTNPCxkwDBsddJs1jtSuuBanbdcZLNb2JT7kwz4SA",
  "key32": "38URof1YmiUjrBwmnMMgyU9h4eb83uJiVtZGw5grefuSTspAScv1MKpPR1v27qJe77QRQJiFKMA2Vj9sZjbsj7qN",
  "key33": "5zPZeU56vf54tGyhVuBP7cHrmWJDfBoL4ibrui4ohewg28vJvQis1bFpyYev4uZvkowEA67bhpcJRKt1YeYu1i2A",
  "key34": "3cqFpscPZuyTgeAxxbYrG6ordknozztLc11K8jyPCJJcU45zSKDM4e82EVApyzbHMnPtwiYNAjDH6BpT1HgkcpHz",
  "key35": "4BWzjbjtEUBFJtgTjjVQ61omE6nRpP1nt3HBnNNx5V5PYyYD6DE9eFNSkEmaMMPWXs5JdGC9nHMtZD2qoDfS4SLz",
  "key36": "5Kv3Hnzeq2SMXxAumREPYAGUHgy6Pivpyop6LB5J7xsmfW2UePWzTtjqNG2z81xVxaZDBB9tDUNfdj9cnGaCm1R2",
  "key37": "49BTdCTiS9iavLNDMpVtzpaxnDuNE3Nb4yNfhGywaYbE7zoQBP9ah33KAunJ4KwmvYsszRoih9N4EGQA5zg5rffD",
  "key38": "mkh7iyQDUNoHxqCyCaTJ5YXTL7ws5GqHDY8ZtdKbGZW9zYdxmysCHSzsycu8ZzdsM7E3TbjyySEX8iPhC2yBrr7",
  "key39": "YoQ9ZYW4CdyEDft6j3wpv2N76niaBDJMxattN9NXMsTxCDjgwf9PyWBsDtCr9thcqjfdTEK1yP1ti8GBcBtFkti",
  "key40": "2joTZ6AcZbFReFmmYzRyKtJ2cfHyCWhRPmS474wRbNBXpDK22eNPcaxZVLK2AnMaNyGU8uqXsbDPyx4mpdpLUjmi",
  "key41": "49ni1GrBEfW8yQWPN328FpzNyVcWbbkhEn44LPx8rjFhmeizMKhi4rkpGbWE6yppCW75WFi8UQcfFR9847GJhATN"
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
