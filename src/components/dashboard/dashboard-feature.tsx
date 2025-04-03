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
    "3kSGh9waRZMuzhnFzadcCkgCqLwcgYybuEJjqezp1FR88nszADmNmMsd8g5WLVqZVwtajyxBnbzaMJXKi9RHdqRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61zMVPSySXdjXzp79wo8nosPqqb1mbnvZeeZfC1WchmfRgD1Tvt3h3qxd8mE8KgtXanLJyLCin5dj9crc6tFBePa",
  "key1": "4AgnYbVfkUSMof3JZwpsCiCoZjcQykN2BY9NaeiXjbAE8SFXzPxVwDioXyf2ABj2DiGMMNPnDbtvGYhoL8XimguD",
  "key2": "4aLhMsgQgfEwcfHQrd7EvcdCcmd4VJMvF5ZWXxCniWrHaDtaoHjYet2mDYFmZ9vuuVC2LnFHyF6wGyif5EMGFrsY",
  "key3": "3hVqp56TMFLfoTqr2AVrJHv3rV32oVoDFHpEsCJYCFgqZfzm2ACAbA5fkno3CHBp2enKF2oi48znPanhvpSU39SG",
  "key4": "5QMWWBctZSiNwfF45dhHZd5gBH5Fy6yhXN76oWUTBAXCduAfYMogM3hEdHjZ1hPzf8nWCUyUP7aep5CUDmYkZCnR",
  "key5": "vZpheB9kFT8esvgEmSMC3ezLCVYsDFRrFDMYsijkr7JtNuhvWCgwFnXzRt5e139bZc1oc36EAUtkQmdcUnJNHw9",
  "key6": "2LYBuPrvbv2xa2tYhRVuGWV8TqYGWHUfs2jvzQFiTVLEWC14MCruDwZYVc3ix4vPvz8enXaDaGqG7JrAqPArmQ2X",
  "key7": "643iMMotpSyQ8yupyyEAQBKxYNaCZZ8Gr1JBArC3By6DbB1SAJiCmXhWCKCQAGD7gdrDQke1GWifiF4TWkGY9vo",
  "key8": "4wEg6RsUSi6ksx85pKRTBnSVwWgnNqWDLU7Nm2LajWfzokWcpDwTCQQz3oThSTFxP6omcxAwApXfqDd9NJzGf1K2",
  "key9": "K6uYq2kb1HAMNtcyGTV1QSGPw91sDH7sdf6AmyDzAM4e6nouWJfhWxpUZRDERiQTLj8SD3v1scRDqWPgzC7Qret",
  "key10": "5PZFt79QqrosmiJ3hRpF7Hz9QBhshabomFVNqCZDdXPR2UaD6Qq2L8U2avdEnLMvq3o6dA3tbVBAnipg4omjEQPC",
  "key11": "2CFLfRBs3iSN4Fw1V2qr7oMdMphw1kq6BjozmcneFamPpz4tWx2qqoYpdhpcY9EE7KjfJHTcueGB74xESUUJbGGf",
  "key12": "HR7BefcPA3MSiX2d4zfs5cW6eCjfAzC4CRtHQfbFZknZMKKWaXrz1MtpWqXV6f56TpXjxFxDH9T9uHKdWmLmuet",
  "key13": "2RD8i9AMVEgzWtKpJ2aetJ2UEk1ZDknrHerymvK3Wm5CCkKhTwxUcjGRKC1bo4JfLjwzgwRjYJAHpVDi2t7XfadE",
  "key14": "3hxq1e3p7hBzRWHmdGZ7KpAy88UcS9Ds5uyhENpMwi8ndZ49Rxt5XFa4b7KkSpkpihrLdCivBf3i7iR2wuVQpHhL",
  "key15": "36U2z1GqYgfKGqCLPD1RNZ6MDWFHQWR2mNPLvvUURy4UUgRxFMd4Hc2XnFfKA93uZkSeN5emWcsenUTeQ7wnc4CS",
  "key16": "5qaqqBm1WSvGY9FhXymZtmp3WWaaSX94D8UGWmZMRLDQWq39EKF2tYmoPuJRYo2zDmhckPuKeLSRHQGzUhdJh89K",
  "key17": "GpZDqR2Gua41pvwYvhKACtQC4YFUeL8H7GgHsKeC13yPd6N5Tp9XJBwE4qp6g8ByJb3JAGDzW5ybzqiVv2AB1vP",
  "key18": "4yy8RUYFZ4Pwp6o213b94KCxXq9GDZN8GQXV2nq9J2yHcsos7kVkGCFrSun684GMUt4PUWHTwKPRqc4Cvs2WrXNS",
  "key19": "4nrSFTJJga7UHV8QAYRMtMBdDPsxzXRfWi5c2szzun4UnPYXbhsPBAsGbEATV3wQJNLVZ7ixjp6otoMZqxuTURHS",
  "key20": "51g7j7L1wuDEvgZqrkXQFFEpanVjLLTpaDLp1o9c3S3ztWtMiyncnEA4QMQfHJqoThQk9CsNqrE7QnjuDeEncLD8",
  "key21": "65vFuuhUGpRNpPTp4RV4D2mKU2HKWNbv2UGu8XLRD8uo1jsrrp3Dv6PxaQeS22JifykN1pwZEmpPx4ajJZBqLnbW",
  "key22": "3B8Tmreuo3wuWgkjFJ9BYcGAs138YRQUWTegjXsAW9DFQ7aFeh5SAfMAsrndpMVuC6B88ELX67Z7DoGzmRuZGgPR",
  "key23": "5G9SzE2kQjcsjmBHf3p6HbtSD1KFTSARki13C6cv6DVVtfGcjYh9uKDwZTJHg7BbLKx7BWpHmqtDpP1W1r1jds4",
  "key24": "WYMtKvvbTT2z4R5u8rNoHytWjRTmUjdmRA1f1kZ1g9i4AVeYU3At9ooSjFoWLAZJVtPqZHHXpAVL1bGkPr22pjA",
  "key25": "rH8gWeC7mWf44pTQJEu5S3RJbuD6KzhKhaBfRq82B6xBhBgTk8CfnF4A3gCENVW7X9AWy3HWRMLGjRPuh8cyFp6",
  "key26": "29tFdAXCDLHH7QDz3to9tjwh8YRpt1eDxiPiiRV2Tkk11NnyDsiFpdTKBCvEjtu5X9voJ7EUqdgBb2tB5da6ZAjA",
  "key27": "2WYvfmj29xE7EqW8oAupGztZNNVqqixrRfeFU1R9UW1rWrwzpwmTrXKAPdEgrPZtdtBM2Wq6TeVe2t2d27brgHeR",
  "key28": "4USDkhX4BPT9MMXG4bmnX51pL1BLao3HYvwGeATPQc2ELMoK5Xco855GdVmreJRnbjubvoSsVnAFaDU5PxoJmrMy",
  "key29": "a8K8tZKw82hvjzMezs267s2xgxcsW92aCJhu3TLYBxjmh41xofDdo7Mr98yiKzm96FKdRjva8kLfJEEMCi4EhiW",
  "key30": "3JfQHkWAwp94BqpLbp6tUTrKGarxUHEYupLhH81QaSC2ZEAktu9a1KQ4AWmWTrVaCZuiRQoreWxGEkDgaG5PAr9m",
  "key31": "3ELrRfCMCbhTP3YpfS85tbLQuoTfYeQjh85MK1ydsZSRWUL7J3th7WGLV8YYNycB48W4cpafRbegvETeaeTHj5ne",
  "key32": "f13CezujSa715bHWhYJYTNQeyXut1QcuFdrQEK5ABaidczbirJnpKpzS4sDVBMDGS5ciRfWwGRpoPPgEbK2nLoH",
  "key33": "3NwVqLDGuAiWDYHkFVtwzJPZ5uLB68rZmDmLb2JNF3psmG5cnwRuaFzSN749vBCVnCw5xd3TunCRKJiEhyLBD3mw",
  "key34": "rpTTg1jGjDGjKWjux3XAgTgLp4krSfCe7zUf9MPNQFptvWuSVvfbhkxH89uepmdLb1aHFVcYDZS8yB4n55TfhBJ",
  "key35": "56dih1UNjrVDzCpZGzrFdLUpJWr6Qkqhcmbrw4Xn5wJPjLQ1Besq85fQvjiRK796XNbhZFVKEhWmVxpddmSts33N",
  "key36": "3QnXhmcoPS9qmqTfipe8NHyt1zupzKrFSM4nd2qvnAx4qAsGGVHwQ1m53s6RZyssRADy9Vdtr2dn79AbRHpvWkd6",
  "key37": "4TUjk2ZUrf9dR3E5hnjGTbEFSGvpzy4jDbE8sieYcsLZCd2KxpDejJbvbfqfJkHafQRvcMd5WScPRCAo8157DTNo",
  "key38": "547BCRQSJsCpRTgr4Jj7MhTaXdtwL9uGBEyoMTBzoFqWbeeQJfj6iBQ5S2gzUuBHw1xS5WFiQpAqG3iW6VBB7xDP",
  "key39": "2oGsgipK8QhCguhyiLcVp8uM7qTtCV9rSh6MBM2ypwHV6zdeatQWLKzjGsQdR8pg7yoweH6NpZQyRMx3R7KfJsvL",
  "key40": "3sk4mMiCb9aJveiXD41spkrotmU2jx1vpN5SzqmqbjSU38aYgBrRr1F5cXmnBGqfMMxoYmYCuYic9TEoDioaQxyv",
  "key41": "quaTFaEnziF4129WeoFxDPEEaGQCg52t18oQodiBeK7xUH7TvFfY6rGg1LAkv6R9M8smiGLju6Mp7b5z6CyiNCn",
  "key42": "5fPrzjV8XYdLvwz97tFWDiYVvGkZNXdrkE5J1nX6mQkC2RzjaceEm74RnLCQxR4g7jMuy9gaptEgtruYvvxQMa9D",
  "key43": "46Z1qu3f9Yb4CQd7xTZPc5ZL8nnc3LGwAngrV5XXhGXVKSrjEnTsevsngs8zV2TXQma84H7657QJEA5kaVEZ4TZU",
  "key44": "4uGaoKXkQdHA4FSTAKDg7nJjbZnzVovD2YHjtzoyCaojrqbZR2pgbgAQa32jXD5FEECzHcgxrL39QnN7CwZyRRP",
  "key45": "3k7HAB6md8XCeU4FQNzqPBUZ2pNGK9SN2bm1RMdBD8KZbAK9Mgg1TxPN35TfTxK2dMGQATAUXXqZZQsKH3DaTFVv",
  "key46": "Z5wmsLrnpv89NTBMsg5QFpu9n7PKDqWdTW4vpvmx7QJdD7Wf2rZji2Yv3G7HowZkzzKgfntVUaYWTyAvkHUs1ov",
  "key47": "3rio2D7VYNaPzGxGj6uoGHAR56ctDCwmU7ibDBB9qTkks2BtYuwNueBuHGVnAjoWw3SdXAsexr7H6r95ke5RwLmr",
  "key48": "41MVJJXdpRAe7jMeUpGoHC2Xtqy78dZZiBLozQo7uvLhyP2aKm3EChk4n7sdBBCt4s5kJNaKeGbemweSCwFWjuJ7",
  "key49": "64Yg3KpYrsnmtKASx4aZQkcMB2WPX1rmdCQpARSVbbewVpdn4Hf5Uv6UTipHvycPNUZaqpSWEPonjEVtCakS9Mok"
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
