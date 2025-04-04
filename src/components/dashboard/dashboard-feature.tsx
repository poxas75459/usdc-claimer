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
    "2b6P9hZsBf1BGBNNvX98itUScfK6oTMRkz2XG1rsS4Whum5iGap4AcfiwwxQ8s1XNovYYw46S8GEBq7n6Z5FeXcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7sVGrV89vXnnrdyyLgoCSaZDaQ8t8Py89of72KbvfupD88bqEjt3DtYNLWw5QJKgptdc7jsPgwxjHtXBCBa2B",
  "key1": "wee6eA8BRAak84v7poEeiyPw9Dp6H6wDqyvRSAw55nS6CGkseb6pewZb3fRwkfyzwWTSa68ZzfBsnAE6jucn1Kr",
  "key2": "3vTeWV73XEBkHVZ2ZdEUtkquviGJvAghuUgHH83EYSRhJpXT6LSEeDCPsvT7gLTfPi9jtaMSwbWPdai7KCJKXn1F",
  "key3": "2bRmVPH8uoRdwKcQSKJXDSPqxDz7tjPEBAFhHsnXvQMcVKvHycG9ZKu9ipmUu9Bx9h2L1wXcg868pzG3fXrSKtQN",
  "key4": "5Di9rVYR8RxMYktiBZEbz9vkiHpw9mEZVYWogMwAZUUCvcdpV55fFM6tr7bLP2LKTttRBy9U8m8GshBsfJavtfMz",
  "key5": "46k6vpvWTms3hLTCNHKdeD32pV2wNDL4cZs8g6tYweZx8i9qWN6bknG9FdPsayT5rnVSHQG25k7exs8irndpvoQS",
  "key6": "qL28ihAYWzsWzzVGF3iU5svfe79hX1VyoAqixKFtLZrabGL39bTcgdvbnfXiCcdvXS64Fspgu95QqP7XRpnm8dL",
  "key7": "4gLuUG8hxEeiUdYicaF2yok85xjC2DH7wfYVRrcKcgtqJowKTowwVSQiaxtpaEkZmQrmjna7NfdBWFsHLv6FhQ8y",
  "key8": "23JWtBSmVQgwVB6AvVFFphTRjxxPX6E8bdgA3LCn496LzKSNUo9iJUqANN44pwYued4pGSDEvUaTHboow6jVzCKA",
  "key9": "4bkqXYbL4vMUYDLPDCoeQBHmDJJRb1wDBbA43wD9utYJDkabvYuWgmnzco5UWNoPxL9rAvXboS1q4k5AfoS8MnYF",
  "key10": "3SmdzvtssJYouN7PjFGceewp41ATCs6xSA6CXrU5UhitwoTKVmZVNLQCQ4X2z3ibdLEbexNURLZHT12Lk2q2WKgH",
  "key11": "5SYUVYmzeuoaacqnpbvhU2RSprhVZpVWTq9ToNXJaJJX6gYys1KDWdkqXKinsM3nu712SfSXRGvQatcsCx1Cs2oC",
  "key12": "2sktzKJgjGLPrnyxzAY6EgKGDANziLruqbKT1FmoVPKqark7vK9ME8ui95z1mCXS922Nh81DhQaGq4Eyi3fKxLk1",
  "key13": "2RQGHmHRagJYmg3buVw4HNR8ndQfGNFBgzd4CakS7r7Btdpvs3nsMScJoXa4DVf8vy2ivWER6UMkg3vonGNBEAKu",
  "key14": "5WQvVTEBthmLWd3YeMsJTm22mnwnBDBXuqqZpN4mG5qpJ221LKBkHU3GWX9yBW3Q8TCroMdnr7kLz8FvgzhQ3jES",
  "key15": "5cMhxYX1jmaxTm5bC9WTPSjRax3L1ureuWYL9yZsrynNtbMKehq5wsBFyULSsc7zF8kkA5yYwierbjRNYsqwpdBE",
  "key16": "66jSnFhAxXFpiL1pUfBDzUR9uCaU6pyJrqGWG6GJezL1f7qDaMz8HjdpbP4qpCytELBcx6ifGN5X4LGZYeQqiBFE",
  "key17": "3GdHw2piJSnRKPJjh9TmHqcZGCT3JL12AwxKmMjFHN2JR74hDnMviam2z2k7ax7ysy3G6Jt9XDTsAuTXFovDh8eB",
  "key18": "4yUagWkBsjKu3DfHFsbfjMzoSmsAZ3mGMrnt6UBSMftavAsdtUmxSd14XJdrbnSidZ5xEY9aEdwq4snpqKooVe6h",
  "key19": "3erjDWP6DVMZ7QQ4sbt2jYjeTJNkuCM7AuoCB2mYPdX2ZvpKY4xfA9BEVE4sPEdSAw5vLZmKsSuXm4YSfiejARtM",
  "key20": "2tZFRPbCPJuAdya9ZauYT4Xsfq4oX7uT9vwxemVps8HPi1vSXFZ5buY1ZZmnGbWA1W5acSCDj97yZ7icty7bkM5M",
  "key21": "4M52uJVUCSp9xpVMB3x6j95SddDC9riQvBkZdEQq55qWtGn8uuW4XUMH3WwbthYGj5FygkYm9TrWXxxRJnCuHfBa",
  "key22": "p6dtUhceyvdqcP1QNCF5ZeUcKVQggVvykLi7e6aET8DDv4p5rUsZKMpbEDCwYJbdEmSPhNpuxFV8UyxgC23NQSS",
  "key23": "5o7nsewja76J1dq9nZzzik1DHL7DkQ8BSHpNxYMLyq6ZLxt3BEucbYemkGadorqbmZ4kZNaz6tAMCXRcVvn5SUqg",
  "key24": "4hnWVZpU5AgaJp5zxqPjomJeMvsZfMWxHvF5RKQqo53Li75fws3XUoatwquJU4YThyiPL4qz6eBk4kjKh8xjxxCY",
  "key25": "FHNEcT2CFbm8Db7c9FqgwmnyYLA8gsutCz4QoTDFszMFm94xa9jTVE1Moy1esLu6NNg54iGk76RXtfjJaM9QmV3",
  "key26": "hHpEJFawp6MFJfkPtNv95M7jiypFMjGEBkBSGMgckDD4oZxypSjH1ge8XRKJ9crDr7UsruVXFH12mV4LzYND5HD",
  "key27": "5mYgrn2WFMDYFkeAXNq9Y2MqoLmz3qtKdYec2mJq5ze7jwMGvLWTw5XAbsWER6vTbkcFEnak23augbodf7XqdHVV",
  "key28": "4iG8r91Fp5ZWvP8y28mqKVjK47ygnRhJvoAS849XNieE4DRmbcWEfqtN1X1gkiL1qr93kqQxE2S825emRgWr89yV",
  "key29": "54m3SvmNsXGEcF1RH1ZgfHeu3vZiFEdMrRxtAEVK2E4AAxuJx63jAiUXi6wcyYxJCAD3hQA7HuGSA4dUKAf7mx7o",
  "key30": "5CSHPfEERqeDba5mD2w5FEV2Aum2jvdEvhWBM5kEV7PhJ1CUo7LyomRR7KEsxM5ELehUptMEPd4E96x11SMRBGCL",
  "key31": "3G18nfErA5fXSwLR1S9cXayUgtN1hkWgwpUtHXKMEjFaADZhRdaFMzVzAoCeVpSQTTMc2i4JJamBarsPJuNhr31n",
  "key32": "rWvNEAMY1G8nyaTFwiWYg466xAXvWj1QCxUxpNTwZG2ppgifxrke8WbUiGLDSDZCuePS6C5FVo92pp1ZZ6HACyx",
  "key33": "5VHKbUHZJ7WM1ZKkszde8TZDJcLZDdx3Pd52WJcdWCuCqv2dnDaujym9qeApK4JEaSHSuhHG2m3PF7betUiBoY9T",
  "key34": "2wuy1H1vrwPvg1B6re7VwHmCpRBW41mzbvtiUjUAS1cExyHsmnC8ikEahdMLYzm3nXj3iu1SUrWCvXMS2po3zt1g",
  "key35": "4PHHuGhE2jV1r3hLYRLXBch7x3i4dhUgL4x2bU9U4cYx7WYVwD4tkRyzxqyZ9ZJYd9RLzwV5VhBWbDzqF7yToRrs",
  "key36": "2nB95U3a4RyMqC5H42Efxwq79rEWrnuTAQBDKoQLUDjt3JY1L5rmhf9uNqqpT3AMWgZqsUNYLUa2zhgqpDZHjb5B",
  "key37": "GPqZw3JkwFn7mUnuG4bb51KXCYZtJtFhESatb2L4dS5XcNa1g24DgroCWHVVf5E9mdRo4tHbmxVeV1z8QY4PJNZ",
  "key38": "4sagvp1DQvHMC1p5yGGEswvTbaT1wHKVqC2dEReBWN7kyKWWwjMUFjLgSjvSPrPqHrwxEJsm6jGddJ1T1JPXnrCz",
  "key39": "5v7iKeSiMPJaHDj71MTjg4VnxFEPo6f4ANz4v7eHm6oDtsN76UxLpLiMnsgNyj6rAw79iWa1QLJ2kcyX8AYdYAaH"
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
