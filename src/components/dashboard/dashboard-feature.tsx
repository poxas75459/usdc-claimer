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
    "4VEiAcU2N7fUhAFDtCYS1UtEfK1tapiqA2BngRDufhwpUz7gPzpXwGUtDGzx3BVMagkbmsNnpU3SwYsBV8fjER8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNRs7wDJ9ScBJYoKRGef4i3C142S192VTgXHYZsEinRP2ksJ7iKEekBAjC9za54RN7YQRsRibkkTn3giexAjtNc",
  "key1": "2e2xKPsXfhzsMNfNXVWAPjXtUbGPMrG3QcDBJRn6PXEXNbd7RK1QAVrFLSGCRj1ygpcFzjpKgqV8vEAzZUSPndUQ",
  "key2": "4sWhV7ZapkYMRpBHX7YR4QzsuHbSa215oJtTWbPTVKB2seKZjGF19f8SnFA6SDyUWZd6ACqPnjvnwSx8MUpnMQrY",
  "key3": "22SoRFtQHbiGkbaSpGfYRew58aCoY5dbdmouCwUGQ6oNGR73i1Jm4KnBXWwNKmregmXCza4AEb5iN1jjve3QNJ5Y",
  "key4": "5JTsrPm95W4B9FvLB2ifobhjzUkRCfGmqh3juW7A5RSRDNuRHQ6PSwuyTQZochovvydtewfqvEzuzYw9BRtpkMxc",
  "key5": "4DgiSVrXCt6GaxgDxrAFZ3K3m7CCc4M8pTCSSVNa4V2ADcJYzubMNSpA5b7NPKXd7nAuTgFQmzdo5DkgNyUJmfqD",
  "key6": "2maCo15XEM12CireEBUXYqjyxvcLQQ5mi3bdkJUrwoMwoB7AucoDFhufexcvs8LXxt3wsCTrxJyNtSfQGyXEBTZo",
  "key7": "oUGmifUjScH4WdVRD7UpdqLgYSevWzzuA619N2tHksWQ1Y9YPGFaUd9bAUQNrsEGMsJM2ZU48A2UdLRkjM2xu3E",
  "key8": "53DND81f7b2tFFXtoQP5oM7dokzJQV4bPdjz2Bxfa6YYBdaU6HHmGEKStjhqzKUb8VA4BWykrtt3oip6YU1TG2os",
  "key9": "4FdEPtKK6Q36w7tzDn2cdtGoPBn2FJAGRYNVdYdyezASgtJDMXZiXZb8nA1P1s9MS1onLf3cczMi96hE33ttPVmG",
  "key10": "f6Gj8Lpkqus87JaD8xLrH6r4irdGMn9dQ1xhFfawCR7yCA9NzwYoC5J4NfodgiB5NrtwMNwu3K57q29QNn2DzFM",
  "key11": "5eukriYSX4hpGhkFwzQJiZzgnGCmQM4FcPw1h7qSX5Dr9wB9xkzK1rbddYDSA5KixAofZF1Xo5iXpad5e1ai6rfc",
  "key12": "5H12Wah7iYCPh3b3HgLVuKavbc5SEcU8LKGjyDACS574Rqm1GptiWSCHoR3fmQN9iZmtgYH5VKBKt2hZBAfM4i3r",
  "key13": "rGq2JggsFX3MPAFnUC18hXo5diZqscqwHSqrrxHjauAocdRY7ydZxaLa51R7pW9zEPyeU11D9SDWxYV61RjEMyG",
  "key14": "6eMrdV2r5iShTbhzJKsa7pWLLkueJiFiU41dGgsNfg3bCZgwkRzwZLJQiwRGwXnvgktRbdcdzMFfTFC2DddFVqt",
  "key15": "FBVhEvo4DfPu6rK9yMTHJLxqgsRVPzFkUvGF71yaUKSMqvvkqpxYW9YaojSV3uAQ39eqAs7yXRnQYM5Fk7SD35h",
  "key16": "66oGJMdJTrhY4mrMm6jwccmEKJ6AXYspWGeTx8iC124bJmfGUHdYWCXybHjqjX1HKsbisuq3d6c5LUR7w8wZzpWM",
  "key17": "5KmdKKCt9sk86HRMDiPDFDFJFAErzWV7ss8A53muXpABGfCY7NqW3DnL525fGdjrGiwWhYZ4hFZSDxTqjMBKeLGX",
  "key18": "4yEhqwD4rtuksLwjqQP4Gg5FutcF54QUDKMq37G9REThCVb5pMkvULCMpoSfo2KdxQ3X5qCpN6FSBqTddPuHHi49",
  "key19": "3VkDW6A5Nr8wJHTpye1nusdqGAaFisHcALFoVMC3SzmishUZgvhiy5mWygYpTwqSyLa8LGzFDruh6pwQ1rVsNEYs",
  "key20": "2aDg8mMzVTh94xh9PsYLG7a5gTcpAUaqQDum6rwczVTAyKXwtoSLSLXG8ngPho9LyBxgtVktEp2xZTBJBAH2bApL",
  "key21": "5myi7zjA8gfWYLs9n9hkDRTzKckWbs8pceUK2UgXPVHxT6vzs2ZaoJ2LEPcrHqqZAH2JX2e1B5f5cB2AR9qQPG4e",
  "key22": "dRRW31xnQRGdN7sq33igc7RGztMdrcMWTGEUDiSkkxS7ienUT2Jkk7rRTYBMEegiP23KW33V2L8XxHTa5mSbBpw",
  "key23": "3QfbxRxmjYVdKMps6SdRMPzCLdcnuSj8P5auQX5BeyQmmHkvh5WQnwDvm2LDVHYKVcb4wWtDW9yVWZgsunRFB2nv",
  "key24": "3YX5xTUsR5ZexU88fonogVcCss5K1zCdzdS73jJRvLEmLNnEuusYQ2B3Jkn7Pn7KJebnYHFK1rRcEmLMfESenaAA",
  "key25": "2tCBo1hmrrb4mwyumJ51zF35rSHhZvo9YQCs3XfQkQ4Cu3B4FhhYCjzTaXDPsPvqqgjAKZYdboHpdNocRPpsyodh",
  "key26": "3x8XJXLo9ip2svLeAFijNRzZiNC5q4itkwgz9MJgKzrGD5pqp1D7yGjbP1y4yBXdbyvd3WHTtkxpJQELBY5LR8jE",
  "key27": "2MBffTdX8YTzygc3dCvoWG5jTb2bmp9sjZDCxzdyAvxrWZNSjyBccBRXcr81E4YxrsfLGoh9VGxwBBKugfKkDERT",
  "key28": "52mPaswFoyBvmn7mSfQooEhEzurPVshBgXnLjyN1mEJALi6KkEamokFRsHZcRSReQdYi2XLcS384zupJkWoE9t9d",
  "key29": "38g4aFBiKQrMGy5EzvYz1QrrmtJG1Bhuc56JqJ5skL5uL5XjdEoENbLSZinmSSBR9VQBQmgw7fwVTSaBU83a5Srk",
  "key30": "51BvVUkq2Ea9kHjToGvRC7pAnYnjk6Y66DwvLFJwSY4Ab4jL5h5xfALBbbwHPiGj4evH6LGBZVNThNMCNN7RMmW3",
  "key31": "24sYPwemCHksCFtdTN5nCt5saj9dDRDq3Jm1ockQdHexwevG62s7QwtsDWqBg93uKGdus5mnzWMPbn9UCyYc8MxM",
  "key32": "zaB5aXJjMTp61M9ppSXx8c7Eb21drN63tCy136Vp21142xBUbdVHSPFthg2P97HNftjjk4fXSKo2LxZHpS86nCv",
  "key33": "5Ge5XW9YDkLEwwU8Rn62khLG1sr1LAZskhufEBLc8Kcy1qVXyM4K8MvExLyUWHzYKhtc4eQCcZ7NrqizGTMA5Sc6",
  "key34": "ttJUmNvL4FJUUNkZdayZ8jBVyipuZFWu2TjSA1mgP2s1CAKs6wpqyE3t2GRKtcDoAfNYNDmATmw3ofgpUCerRfE",
  "key35": "4jz7XHGDG7N9CFEyCqpBRpWECVPzhKrmAg4JzxQ9g5oR9c74yGPqMHvLxQXWyrtc7xBtDEJwSYx5nFUsjzpdauiS",
  "key36": "5R8hTJ6xoeivURoBjUceWWJQ83Ar165UyyitvNGWxgLpTCT7udgVR1HADwRxteNtFijXu5Q79NdM2Wwk6goiSeKV",
  "key37": "2MJqkvF8cvcaQirjNf7uNJUuDAjJczef4ex443CmYiARGaZaw9uKMJ1kVLVHShL7hQPDKG2kbq3jhiEH6QDPWLV6",
  "key38": "2HgJqMfTxjVLS343GzX5zasVBGohm2CoeteDJzoXESLp734j54jApQnsq2RwgpzbDQekesuzQ3bmSXfTubBZETZY",
  "key39": "5LTe1TW7gicAX28Hzd8jHYpYw3iu2zfFhmZa1FY66dHH2iTEUPyavSnyrtaNZ1r6ZUcd6qah4Y7m631HEZ9ovhPp",
  "key40": "LRRYPXqVrVD6sXSBvihB4TKx6gxpf6SRSz7WLWeTEVvVbZg5qV5n83Z9C4ik5VfeXG7KaDH9mmnBwbCDXkDs7EL",
  "key41": "3B2vu9rvPjndQJPKNYKPXiVrfjaHqAeUjgcu6u7rD2ML7DRuugFvBXkxe4EtCmL5qvhfCxRYUFwS21BA33i2YygL",
  "key42": "5WTTiHDCFTPc1tGZd9yNLMRuorcsjgEz7WaqkVgEzzV3CJVtKZ2AFtTWKor2gUaazVMKcvPjSVTyrGPgvEsiVYdk",
  "key43": "4T4TczQJroSLt6XBKTw1brufu6fv3TA2HH5NpGw4YyULGRSB7ZXgAr4EGQh9MFoJ3hq76nsAZAEJPkKMT1tpMRZs",
  "key44": "4PW1Beep4q63rXZYANU19xMK2X2GLwyY8u4CWMehqD6ZFLZTCVCXwS54AzGkBfReYcwzDKXJbnn2A4mwoQbT6bNu",
  "key45": "xFpnBYbENMcaokgJGvvP7b21uebdBsuW3T8XpwvTNpQ5b9oWMWWUUj4zwPkVfnsobevYsyh24yZYVpyimYbufCx",
  "key46": "UHkNeFrMeAgzkXEQHsZthRpU8rF6UZjEXubdcEHS9UrtYenL9nm8xUbR4XmHnHcpUkaGzCzwNQMzhmENj1BrMvA",
  "key47": "46aQJ7pNhqNNK4DWgzhc7d6kRpqdHHufC2fP3sp2fdLGv2wkrws4oXMxJ3jhcZNUBkndjLqERdAnjmd27nVAV5fY"
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
