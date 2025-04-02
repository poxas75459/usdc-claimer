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
    "2BaCkPpcRNK3xU2UuYahm5vR7D7q3UiECmqSPFR2ikKLCcrLKeJFRTvGv41zXh3hr3BukDPiSU7N1849ieSULDj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "toV3JuxvA4jpp6yeHr5fBG1uKaBw6PhTHdRWgnCwRe7KTdEm5yTxB2w5owNrue6hmEeYqQYQCjb42ZEU4qxiPhR",
  "key1": "2eF5ag1aFeTBt3cNBnbFw2QJHp7gLfgtXpCydvijB5JBY2SQPhX52qWuxBZkPk2GvaeaGPCBuWjUGDirVn9BGN2F",
  "key2": "4hd1sAZd9pzYeKDsjsQzyKYXetCRGpy8Raoxj9ZQe3n19ja7LNzmrjnhEUepRykhzunxSzw2T38eWkK4T3peaat9",
  "key3": "43sFHXmcLGyLJyDPbN3HV8U8a1KWaMfXGvveTQp6Jg1zaddKWKgjYfNi4ddUtnDBGVSQHyEZZoTWRd4z1kXBGf6",
  "key4": "28caieedLjitiHpbrKapHZvtXUe6JTyPEFbSg9etndD61nG8ty3kT8Ypk88a1Ket737tFB1Jk3NK1kc3H3RzCbE8",
  "key5": "3SjrAKKNHJoEX79vfdB2gXQvMt8yT9Cju3HGKBqnW1CzjJaYmWbqmXTxJc6mLk6q8L3k1hTfwTM5Ro1p1mo1JVN1",
  "key6": "67mJeyhXUf9fpmeUeN8QJV9wmfUKHqXTPavE3EAsyViA8FsB3zYxghVUpDL1bX7uVqWCd7CMgv38Pne4iWZ24DJV",
  "key7": "2KFkHNXAEdVWLPaDHms1n5xapWiynooLcGRXVeLub8fTye7bFLEVAmBddiyJEVqAX4WXxDu39hAJsikXd1RYjDk3",
  "key8": "5vfe5KjMbLb8stNbw4Zk4DhZKRzYKarpPJ2D8vY9q91PoCr9UFa8NwmzDKJDPohRz8SgNgUhdFzru1iu6EspZEpz",
  "key9": "2MYi9e9617Xfmvf7g1XfgCcCu22UhW9NHfwYLin29jM9R5fW3T4HfQjxzUeYp7k23iG3puCCsM52KtBrmew6qfcX",
  "key10": "4ZHb9kwtQ62G27uPuoaVmTpo1YK9kD5TXoC8iNtfVoGbk64U8C4BTeDPLeZ1VuG2pG1HboJ9hDfGYHQ5TBwafa5j",
  "key11": "gcmBnRv4dA5oBfNLfxg7H9FV25vTp5xim6eHxPLcZPD7cQu3UVDYonr5hdGK6GyAyQvrncvyDP9QVo3tu1xjLe6",
  "key12": "5d7z6ZTj3vf1LgMJVgcu6aMADpsZXA4QQT4w6znumBvCFoz1ChNKpNiSXVPCKrEwR9scx9jMEAkYfeT4wSaFQRqi",
  "key13": "2AmSZ4C4CCcB2KdECwgzRkW1hXm3DnDH1KoMjbAGubnBEeLmcXSxP541i8QcJhUv8rfwKyEXHXH1zfusxAx5mijB",
  "key14": "VRNREHhRS7onmrz3w49zZ2S8tKxtq4LYRpq7zAQ5gF8WZTjHGouuMWD6a8Lcnk9mGNM9T4YbG61YqQs3q43KH7m",
  "key15": "4X4Ds99CvgBVAm1qtxrATWtvXtQTkHrySJPxXAeuKNXyamKCMQ7T4uN3hKCujNqyp4LFXjpKVmJTTRmuHHExyb71",
  "key16": "mLqwbYJvEPx5DDbD5YZqEnbYN7iSESG2LC9VJF8nZ8ZSepirF5ANmRe2rKcF9y8AxygDwfxzTkbaecbRRTiQpBf",
  "key17": "29cmr3xnDxH7YaJhQGD2TkpGEuBsbuydSPaAZZCVnCG7y4pUK8ebBnBiy39XkxdmkrSe6Q4C5kQtdTHCxXghvAFx",
  "key18": "5uCfxKiTSNmqAi1qY7axAvgAPZVFEKTHGexDgNQMDy6jcZGKERysyuZSiZ5pDf3wGvNiN4f27XdRvWhoKuN2E4tX",
  "key19": "2AkddPrbNeF7ryu73iJRZeiLV8w9rAnsK3RJ8MQvwV4pdPQCto41bDdPq5Zj1aCNtryvqdosihpYu9xjYdLhZCF8",
  "key20": "4J8nCa98jDX7f17j3inW4jAhPuU3Cv4GaibCRKt7cpy9koUBrUwwvCNAKsmq3gTrXL6ZP2Fp7uX99nqgCqyqkc6w",
  "key21": "3ETNpgLGip1tmtyL2TyQcA2hRyZxf5JbKxhf9QVp1DHgPZi7CNhF2P1phuvdZ8DMA8Tp9HsjXcPL7Mxrsgmey9Ug",
  "key22": "2UMiHDQk8yqejq6mQA2x738HBWMwdarjmM6VWkKQSiafnYhAsPfA4AzZqScS222yixQwxpyQcWLWUFGj43MrpDt7",
  "key23": "QaaXuq6VjFRX7g6E94ifNvVgH8Dhg7ekHcY64uuzru6xyUm65s2WvxxCdAzJvdvct3uZRfRfL2nttca6PKWK4WA",
  "key24": "5NY3mMTHLNvt3EZk2K2DbYdFjm32krSXebVmNbLbyGyjfUPN6m9kfJnELDnn3PwuMvC2LpM675wrWVcei4Cu5XCj",
  "key25": "91B7kCZhfLvqgvYKv89hVo7VLvrDnWhtfV1vAa8ypRJjvqKV9qSskKG6acAYHHhEfHV6ArRqWBqhBBA8kkY8vUH",
  "key26": "5XoB3MQBLBZ1yPXzsw8TRGbSCYjzr1NXYn8TX1irFJArXS5hGr4fepezi4PaADsux4BkXTGE271UTssEHzWM6YbE",
  "key27": "2Yv6KmrLRDZY8nLqvWz1E16SL4XmkrqxMqJWuqShGLec82fwgAiFLsmV8wt3pQ827QwpaQHMkDj2v11sF2NZNQKM",
  "key28": "4jRkhg2s72aXR4oTMHNgoPZtqwCvrnUdKQPaP61NJh8RTfKJtmXQtqYuwen7C7j6HRKSQ3NZSNQwGoTyP83yn7Rn",
  "key29": "36jHJxdcCUjnEQDzUfJfQqLrPeQxzB6vv2J8HUmANtrc1p5wCGRneMWkzTF3Rr56Eq3TyhRgUYkHkhja7NQAecCD",
  "key30": "4HEER5wQRGZVhZCj1AZJ6u3FNhnP9skh5Gsj8ZF4fdA5s7ioZCxxXyhu6Ga4AH3V8FShSCenBXjBETA7qPtTY32N",
  "key31": "28nz56u1ubdxV3Qi5czrKd6Z7EgEoxGAmzGtdoUAg5px8FQGUw4hkuHFW8AvauqBHwEHAsvR8ZBZYiiwJXijw7yq",
  "key32": "4Mb8CGaSEJ9boWmrgSh5RD3zPmmPSefSUEFzrvgasHZBnCE4FFJThpBg4fX37aL2NG529zy7dhwX9iShunSpmUT3",
  "key33": "3he1f2qKhMMbMjLVW4Wjc2bqrFGeoKj9zworoeVpXFk2DPZSVGrQGtigh6EPpFuFLHGE7bgyEZDFhq5RWJCJ9iQq",
  "key34": "4UD8AU17ppFsXEAUrRCm8Uum6P3G8jQSmo7u4xErrvbJLsMqacBpR5gN98sJDLKMKDwqHqcDYymc8gucFLTjBkxr",
  "key35": "2SYBQ6MnRQg8Mn7pfp9h1kuPjqdNWsxVWJSNdqfx3tAiKMkECVZo6ibcoGy7JsJjhSvkAunbBjaNEUC6LkBo422t",
  "key36": "64PMKvdgDy65RY4ZQTBjKGiXRjmRkSMg1Jo9Xxk23a23mV7U5xG7zdzgJg7BRbQWZ7N57hF42mXd1mz5JRFhQ32e",
  "key37": "5ymJsPFMgpEHWXxY1Pa9c1tBzRGPnmANZQVZjurj8qVNqrtdPrKMQdWFeWjotXWgMToSyUpUSAmUiLe5vDqihrm1",
  "key38": "3ESkbJqAp1mduUh5kVjGdSAuRYpP2qdmaWAY7j6WpL9CQZcsHGD8XZs3RfSTmDf6qrXQ3AfUhpXJ81HywrptPwWk",
  "key39": "42G89UyFD5EbzaZhPkwcvmyMSRBqCDbFCvRTpqMMwTnXdaG3pERFHcaerDpJ6AdDZkpaoX4KdHykkmRMSCfVbQk7",
  "key40": "5GpnP4BkqAugPBgH1RpmQYPjmGhbAf8v9fafAPwqmtWRtsBzHo4BiK2TBxmexshvijjHBeBfe7iaFSRWLCpUKFDo",
  "key41": "5MAK25NJ8nTzs2hNYWBB3U9PCntub5GjjzvWkZX7JzdiDygAyyZHN2potpJTRnvXogTAwVVx9g6QUvrjY9QSuBAY",
  "key42": "5YgiQSiWQ3aL5j3trz4tZYnxLz34sPyTJc4k7gaKa7i89oCiJbqtUb5fNtQbxAg4rkL96wBXqiTRt9ohzy5ZZBuK",
  "key43": "Nav7TyccSUD5gsB1MHrVatsi13Jce4AYfEALyLQ7jbDMZj1CeL9NymM9jZUPZMNrMXeh3zfBJTvqUChdHdkKQmX",
  "key44": "5sPRGxvmqJiwv3apKcEkHmkBwohVVNWhdrZ62zZBLZiCph13NPa4xE3meY8Ltdte96aXABb8TJr87JaKxWShxyFZ",
  "key45": "C5P7HpfDzej9MYWTJB1FEdfTEeB3EStzimsq6bRbUroLAsK21HrbXMUQ8PgSGVsTqxQLyAN9cRLZCrLXZ37dPTe",
  "key46": "3TH2LQQsR1TkBD2eSFeB3nN8AkVwLDsHnsMDhToQu5pw176ZrmXwNTzmQJpb9omv32ieomSEG8UikdC4u571MJtG",
  "key47": "5E6BSN3kFC4zMqGWpygBpQ1kpB2Q8M4DyFhLWzBoTttcDJvruK65HMd1KKCsVjvkzcNJJCvjkkAZGdP8o6dcW929",
  "key48": "4mzvutVKyrNpA31RFPqFFCnEifQBmaTrzicRdMpN917N2sd8MwH2HPEDDwBoJBZ6PwMWfi7FgWP7261Dc6qsTkXX",
  "key49": "47YXxSRAwSZ5xsamY62k2b9NDv4y2viVeZUzmQ9PNZYFeBdMXr4dms5SWPxVUoi1nF7HbvGLzARp2LsdD24SuxNo"
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
