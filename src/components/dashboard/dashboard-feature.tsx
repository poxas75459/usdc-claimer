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
    "5sMYBhztVhV7TneJGXdjB45J9JSaBNBzFHw4NRirpq6Mken9nhRV2ztLafpsC64i2yQBeNtYRbZw3SzFiBmPT2hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUE32kxwVoGwpVmYotezjXTWUJxkC5FQfX7iwcubJqhV4erzcANAdgDYtQQjoyhfyeAr95wi162ZXFhLoVo1s5i",
  "key1": "2b1Mpg1ffMfxxaxmBy8Uf9tstzguHddZeDDWL7DnumcYv28xrWdAMVnAaQRp75FXTQXr1RRg3Hj2f8bN7mvPjkJv",
  "key2": "4fUoEJUHxRTVS6qcmyh9SKo9F1LePFNahP8SF7Wstw8QbwDi1ZRS85T6KR7ZMd6y6zyd4Gp8wt7YysLjYQFu2K73",
  "key3": "3iBp25LVSpQFT54ZQWoJ91urGtdt5qD5U8i1uk3dAXEdcWEYUXQSZ5VPJATTRQ5vHMz8AZXDPMSU4LhumkxUV2QB",
  "key4": "4owJTzcF9z6QZMLQZ1n49L3jX6GVb9tdM2SxZA8ZxzfFmi3D7Y5neaHfweGYMaNfMAXkih2S2wQEsDMFJCrc6jFj",
  "key5": "2gNQ9Wz6MPGLh2mveztWQ3Y98yDxjne3RkBnEEL428YAKE3PvsWnkp3H3UHTCGH8qSZBsZofz6Xb1D48NLTtyDvF",
  "key6": "2evUbA6ranSc7T9SejmnaiPnizwjRshiybTeqbn4Y2d4eJBmtpS1HG2vXAjNgFNLpvfk4tFFGjPiVSRzcdmfqZPr",
  "key7": "3zdRc98N6oSVcuZY7jkkKk3vmoEKwXzmPi6KL954iTrR3cdiQd4zRdbSDZP6QpJmYcG8Fqhq8z9c8kHYzM38Dczd",
  "key8": "3CcqBS5LL8JNTNX9oHcEkP5gmA5ECETntSzU61jYj1myGzPBvAiq5dj9kc8ZyoQrqakXHXkK46PTdFLQRobkFz4n",
  "key9": "4MSGNJRuUJPqKA2f2h7GojLEmS6ECjf8zE1WyXGxMZsxKhbKdifDqRxzFiVujEWGGKQhguin3whbLbdagnzwPkr3",
  "key10": "36Auz9pV4HVbkPoQXowbP5WER6NSz9WkofUyyPzxEguFbTHR832SF4qpgNDsRyFPEdup2dSZVRjQfqfRaQMs87du",
  "key11": "RUBhJVNz5516Ar1bmoC9MNZ74xKtfvStJnoCHqEA8UBtuZhkkkohuXYSocfR5vfr6B7ts2hwFwWnNejgzica1Pm",
  "key12": "3dtinEq1SNfRCy6yfQWkFYGXegmEuwcMsguhTMSXo4mfpT38Ftz5XifXi9rY5tcB3chr4JYzHLVrRwTqEiZM42Vx",
  "key13": "3AxC7sURbnRNDmikpStJADeYdGX1eyFBmGCxVxbdSQMR3X1XykyEoZRTABE24ctJxxtFhn6vZ8we47kTrzXfL9N",
  "key14": "5nPX7ep9ngVk3JrJ4MFSgnnYgt9jTKbENRFL18dVqdcvD3KfDHVSDAvqNW9JgUi9pqfTBWtedqo6b7NTkmWT8UbG",
  "key15": "4GB1HeB8U7Y3LgKuwRV9NCnGYpzUQkt8TBfuBvv9N2JKhpZfFHU5v4fKPBSbS1ZWjvw895s771dw2RrCASZYTgyL",
  "key16": "2mjQpJNoCmdkSQYGB1scw5L37kRQtEg6BfPj1wBUn8cQiyunEWKpdGzPNV7q4vpBdT1qrhPfbAhYZDz8Wp19FL52",
  "key17": "7Vuo2H9dmxqUH6ekBf3utnzFuMtMENLgnQVNZnE1zc76hcSnaXKoA4f4p3xwnqR5a3EvWGHeXb3oGTzfS3ZhpeD",
  "key18": "5QFwirbDQNo7dvUaWDjCVjsmPC956rPxm34o2EpPrvtS5oQmpnX3MyYQYM2Nokrh1ZvfcCHAiGgCVUmMhorUE8GX",
  "key19": "rAAoDLX5cjFkvyAjpb3euXHsRGCsGdGkTHw7UUozJdyT4T6py8xzd33gHWUypWWF2rwJkD34b2DpM6vZ4YQiQBB",
  "key20": "5YdQC57FVMgo7d6dGTpQBkCwyatGkTAR8ke6YpCwzY3oW7ogVPqc79w9szC9siuj8drtpDrakuJnHcBeKix1h7U8",
  "key21": "5nAACMAXPm6zK8zoX8xMvTz1SBT6yPuzLGoARgsUZy4GwQQpkusRSmaCDC1MCyZJhQfJkwAgF4RDhUDcB9LupRQt",
  "key22": "oevRfCTxi4YZMyFj9zNEir2pfSAvvoYy3jQBJXYWxAcerdoSa9m3diyMZPhS5sQVkDafRmLrQVUTgqB9DhzVbVX",
  "key23": "3NhcHaycZStWJYoKjNaqfdW8wpWaNH6ZhQeEiR7ehY8g7n3P24HHFG5u99fL2ScS8p8CaeBzzQMCT5ePVPz52e51",
  "key24": "29TmmuKy5Un4K5fXUYkJm2BZYiz52f6zeTsA8tAvXJpyAPwLn2bjhQWBhfwoz98nypXXd2z1s4hmwTYDSB8mcepb",
  "key25": "52Q56JMu465BKVWsqQecDZeVptgCb7CJdfcw6yiniDZRkUBHy6TMi25mnh8AiweMnJaiQzr5CppkBi121YKvNLo4",
  "key26": "5vLDCHYCxVa6zdmBmJF7amCdwTu3xztTbJSr5U9ahq2Dadke72tGWpUk6FFUqDukwkUe4YXqziEhqKmkGzBwxr9b",
  "key27": "2XuoZEHmvdbWbLP7Bczy99xEw4t3R7pac8jx1ULcMrgnzukcpFiUwnbcDBxoXPyD6ZvbkTYSfd4Uw1H5mWFz9pPc",
  "key28": "4HEsoLK9RmT2BbdQVvBqXWSBJhkVgVvw3K6wWvzPg7eCnXp5c8We4Se2LfvUBPvafEHBbPytCCscckrKXCYoiyH",
  "key29": "2H52ZCy5SYFtFLMgbvqu9PyfhcBqufwck61bTxmhqvuMwGQ9irj7CFtPCusY3C2DwQfricQbsvqjSaZHhiUqVQXs",
  "key30": "254vFCsPryFRFSxeSjguuizyzC6ygKeoNDWKxPspa5p6UxikngDo86YWHiMJN1KNX8o12HcBhFrkP58fbyuYnNea",
  "key31": "3ftD2mq5nMMAorfhoCwpchmzx28aZdMfv724ve22BJ77noeLujeTYEDVfC5xtUcTRLiBC4jbuGfYSA5ABjkVAdJ7",
  "key32": "33yhRLNJAuL3rZQXxWFMCbafQegMc4UExTw8Z5sn4YwfnnvyfdVFDL9fUrunZqx5qhoq4wSELm6DtPbCLqjaegtK",
  "key33": "2XeUS8wkViBKpoiKCj7WGKtKEwgmYEMXUdLioxnakZexA1TMHYfZf23DQVYNYCPLLARk28AypRysmt5r7U5P9Mrd",
  "key34": "57zo8Yx3YrBGf4Qrjg69SjhJvt5bWSYVDKaXwXhdwYR3NMDdcasebHMEkvUE4Nj8b4Qe5jbWTLpHQBeFQUxcQ5gS",
  "key35": "LLGEtsjgGeMF5YacgjqYZttwbDPaxfn2BrT3gQZ4oDR5EZ5dWeSbFDrCz1RaapQZoccgHJNEZ1bnp2ZjDzngJ5P",
  "key36": "2Kce4X8S6BPSvtbCDUhrLiTsGBGwpSZAGw8hSzVX84Vbd11QvEtsi4ZJdnHjJD871UPrBo9QwfZtpwTa1bpNTTp4",
  "key37": "4gKmmw1amKFhfwx5dBtz6VdEnz82f91hauAvL9sZtN9toG65qhtxNNnnvbdCTvS82h8RqSMQx16oEEM4QC5iiRH7",
  "key38": "3e3hr7eYofP6A5XfuDdHeu8ydeKjAAAXj15ph2sKicHEiUZCSE1MVJKWUjE2WzLZZqhkWJQwa3PsBZ2ekCf1USf6",
  "key39": "3nmxabTLZKQCv5nxi6McDev4kiqeRNMgvVQG9XtKkq369FrgN884YU7djhhEFhLGjJFe9dExY2mdXqxSwCFJd3wc",
  "key40": "5Xq4FQNUyQJLta5s7dzH1dUL42YK96bBhKAaEZHeiC4cLqFwzTS9bEmZ8Jf4RRQEo5Wv4RtKAX996sW8yyKcPjqX"
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
