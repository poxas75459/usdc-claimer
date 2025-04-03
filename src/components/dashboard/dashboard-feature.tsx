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
    "4vutE8rSWFLYvmroWSD1NhjVksoUpxXvcRPW9EtoP5wiGAErQrsbDJa92ph8HhHMVZCdPtNVQDLXG81YyddZGesB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62obMeX77KZWTWn4q7CWvDoduA4C94omi4ZgR3g3wisMMRGMcRFZX7shjnVgzBBj63koYfsv8JTg9nX7aJ6BACy",
  "key1": "DpksGyvAS2RhhXjWx2u2ZGt4EAv6PYw6HHWCUomKABgn4trxxMovfRvxTCtaeZpAVuEfoy8QSqMKEXUiRCBaKGV",
  "key2": "3EUWfn2zM8WZ4rRa9GReyNiARXdiSyWzsDuoyVh7Hsfhm6vowkMkF2GpGe5b16LZyM8ixCW9jCuSe9B7iTUwfLgs",
  "key3": "2NKiRjixL71x93MHoMTkeX7oEpYVYL2bPWwo3KE8y7QGxiDrov4xN2SVz7q9EkVWuf6at7zNKErqTibMMCqNKYs3",
  "key4": "zBcSfJQq92ubNZfqhZwvNydWZ1H4YpFRjUhTw4CpGuY9y2Bp2G1NnX3jcjnKQm6HncD1Yhk2neANL375fzEEBNA",
  "key5": "5xViHbHGkhonePc8WVady79r6qVGXZ29CeF2kTWAwb9M5sY3hqJzZQCXE78DEtcj4kJtBFG5vVh7NsC2pjETKPY",
  "key6": "3fSDPLg1u4gJPAWYMu23Dr78G4yQEwXHLbkzwb2vZrDLf2EeR5iA5Xh4YBSHmJUk4PA5HFYZTVFfNnQqn2WkWzyU",
  "key7": "2jqb3Uh7Npyja8dK6Bs4WAP6dyUJviTXNPMGS3bDEeBr3ZT1fKn7AmCJyJyJRrgsUKJFZtKbHnSUG3hcWtqpycnM",
  "key8": "4q2NjbmX1NiDZjVgsVDm62uF4N3aYtS1qxX8Xg2K9CZ6ta5NKjL6GvM9BVA4Fo1NaEbCLHW7j3r95hpmgfkjek3i",
  "key9": "4q6NpEUh7LgfzxnoHUmBG8Cn3puUB2Dqn2EPNpHP1o5Aon2B9mVGooYaoXkXWYhSjASHqDTfV1mqYGL3eXxREtCx",
  "key10": "36PqUvvLyyw2dM24cknRPeH5bJp8iUSYu3sXHdq5snt3ikpjMwrpNdmifkLjWMa6hzjSWgeqhetYKkeL5pJ4fmEQ",
  "key11": "4Tc793bg7fbD4dXQK8Z67VzTfxXuPXMTeQQkoGqXnihccoYcU1L9zpbf1SanJBsAGHWZkBST89Mbb94Nmowp5F2V",
  "key12": "4eMEu8FFN4Zb22LAFFiYhExJdd5NfZAu2esKC1F3Yyr8DPh9n37k91DkW8uKhXCHA8bzLkfuam6id6L6c3DYK6FK",
  "key13": "22LFoM7KgTfNgtfDyUEk19YryERr5QZzJFd4889iv7haJ94prHJvhtT2Wu4sMiZibo3Z9Vr1XkHjLQWYq5cmoNJS",
  "key14": "37FHeNiTUohHYJ3TFxjVpLyerFruPqVwDXdavX6ztsFrCUbtfwxqnG99WdTAWEDShCvY3Uboece3bgXJuCzG7HaM",
  "key15": "67X3Sx2yFT9pT3n34pbfzFSYjjjfVxtHpoMMB1ep3wMZJNvWg9VzP8dm1gTmBbDEzMf4Qf9pGhXSyM5ATuFs13mA",
  "key16": "5rijyYgvoCLt6dZdKiAV6QFhF9Vf4fHmN1NNMQXAM7bWhyiF9TYYMm8NhCVy7LKtFJAEh77cREcBiikdUjK7uEKL",
  "key17": "psg8kYYEpWvYgw8yqWKNdVCx8fo3CK7jV6uGFk8MUzg1owD8n1g7p8TFfEWCGx36fE1SKY1V1XFtiNX2Cw1KNcX",
  "key18": "2VVdRuWACfpivEndLPs924QLFGDdMV3fweumWY8TSybrZdzN1wMRuXM1vU3Lyvx4zD9mALjhUxxAmAP1DPJysjx7",
  "key19": "2dDGB2rYirhYft3XMDuZmBGdrJCHWUYshSAxYsi6QV4yV56nmjnVD3KELUM8xo87TZw1TBrPx6YfMGZVaMaJav9t",
  "key20": "3rmGCP3F8Un7T9FaJorFQtxJxXK9cHPgzWaq1drcnSo9v19gBUFQo22hodniGAtq64NVgJPUp6YXhfKnZu6TYddH",
  "key21": "5Luv1syXFycazdA2U5fWgT183GxEfryZ4viVbPwRCrhfwpcsnTxgYaPdVxT7GRJgbr6P58WvAxMW7TEVjSShxgXw",
  "key22": "2hu7hhrwL5rxv74JVuLqp2nk4PevESPpsfk17GDKyiju43TPfkJvD6UtNm3zHys88eJJ9PVghvHiWTxAMGALDThd",
  "key23": "6oby1EW54U9ZNgFd8PSqBJ2v91jRqhJndiADXs2xf7CtJSSJkR6w3tVrkQArY7TaX5XAGRKoisWfzB8bTCxrXtA",
  "key24": "GTKiV2LYCyX91eQYh5yUXTCAMc7NGZHFnQx6P6esJmYQgZpMPRTLwSUFDwQZqLc2iLToWyMD4hJoJHDbAJBNLcW",
  "key25": "VmEsZ8tsAZoZcwbbSfmv2oHQfwsQ2gAoDt8t4B9S2YkHDaNS3MpTruqH2KiiaGEsR6L5gsBbUqT5rHifnSEtvk5",
  "key26": "2PsDLzLu5iUnckVGJPboXxabaKdPnSgQTxLYSbYSfcr3MgtfQfraxEXj6Q8grampo2A6AFegjh1mVa3BVH2WEqm6",
  "key27": "63WYB37p9gc2tJ1QLAo66QjEhxr9ZYVoHP4e7abromDsMu5ZMBw3qnYfVxYJPLDtWVvjJPXTjrYQiRBC3pN4sfBB",
  "key28": "VByY32CtNm5N9mFrZVN19DgZuFNfpzrErt1Y96xaiextH8Q5MhZfpdSe53JBybR1c9Bf825PjEt2cK7yf9sY6Kt",
  "key29": "5U8ouCbcWH5kXzVjhoiUvRZGLEJuoDKSk9uw4pLT3QVE3VnJ7rGcqs2nogaHL47V9fVVcEeq1EXEU5mQ5uZBTH2U",
  "key30": "3LhmuaLGmdQBNisn7LWYKyUx8zk1BZTGCzwiU3yCnwHQ2CdGLCRYvzaRhnHJG5oXBrpF4NkCzFRRyBVfP7jFyqmQ",
  "key31": "2vGqKfquEgzVeajUkDrgXZ5CgDJPf99wauUTa5vEBSQcdCyYMKbSwujCeZgYpqHvcFyYwG2b63ALM1YuosDjLy7V",
  "key32": "4hEZ185bbkzaWBzhMVwPLpnhabTXgLbBqrBAnvhZxxisggr5NBPzNaU6G689QiM7NGh47k5NU8L9ra3ZYXkwfxRW",
  "key33": "36gQ7Z81Egxhzb3yDeJ8vzqxkonDMDdXLS1Azt3pC4DY2urUEkYJvXuUZHeUPgYzjZV6RYqFt4mhSMcJLsGS4yCK",
  "key34": "5WGmna4P6oGxkvd6yw3LrEy2kW7encg3aXqvboceaBFsHw4rZjZX8XN8JMm6BMRtFT7kWhZpFhtJfS2qyrE23g57",
  "key35": "542gXGmviZDNnjtLv1GDvaGKEeBkBJ9DnfkrLLVs2VgaqxBJugktWCxe4xcJjRYAx2CtLXJL3yVfVyDp8bP3amSu",
  "key36": "2M7NZEYYMPRbMSNRfrJ6qGD2VJ5rTi2iehDTCyQEDhRwQj7SBphM6hDGF51Pv1zBiFrzita3hHdBH7YzHtYBBfbM",
  "key37": "p6zsWVvMwVxkzC7p2BnacRsCPN6PM5Wzx7sFpUifgwarxobtwaAwuecsUGG2pwWghyAHsoEnnRzCmJfJ4DGNJzU",
  "key38": "UZFMic5hSLUEyYsBa2jBCgudLMSim7n6F8G1LasnLpit235XTUuPXuG8GiLpAbuLupgLPaQ6Zrr6tqkQawsSXaF",
  "key39": "4V42qdmxDqid5f3EG5q5Q6ed6C1w2cKV8LwaihaiACYcZK5PdXGzjqBeT8zYAoxViy4WSU7k7wt1nZmKD1KXCReQ",
  "key40": "4gbnYxmERKdCBZGUScHeT1jWUeBNSyf2bzueEXQnyKTtxCTEimWCdGUxjEVqxqAp3Th91hEMuNpxUBeNEKcAb14t",
  "key41": "56CHhfC6sXsAhRuu6uvebzHVQoS5ZZ4nS8TyKb5ciCCxTHoE9NBq5Vn6KMYNBjkRyhx6bajYBYEqSA7yy64yZWTR",
  "key42": "2kaK7FJFoZekMzaH1m6TbQK5rwAbchdxLQW71DcPHVmaw3AYjoUXKtnZ3K8KmzTVk66wMnF7ZMPFxXeX1o6fsyer",
  "key43": "3HNkGJ8HWZjrf98PGdB5L6QdmTYFr1116wdhQf2TNgBnHDpS8Tk6iHMzJrGZj1EA3MwQvdbrqRkH8qrY3M6PZBK5",
  "key44": "4hakUDNSqgAZ41LnX2pWXeg6wPhiDfT97JaTBUbjSvdbwj2gDGfkP9XWi6CxwL5FYQrXmQAm8C7KLcMtm2ohdFMF",
  "key45": "2RLg2gt8PtR2RUE96fmQx3FAWb48zajgWRHB1DjhRiYYY4AWSu9ecfaoGNFXbmWbMh4BdayFoeDiqGp5ksYv6GiX"
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
