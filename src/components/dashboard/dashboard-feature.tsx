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
    "54xd2eLHaHS8HstK1WZ3G6NjWDcf9XrUzzGnRRtxLdbPk8VsqDs5qX7k3ke47fUSrM9kpNevcZ8SCun4mkjLCkbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tR4XwvPX8GbaQxcwkJ6dw4t8v8uQug1CcfwpvG8Lf8DzbPfNid1t39hCrxMeTQVoqYVxwpZ8xpvCVx4guDtMynD",
  "key1": "4pFp4LayrFJ9QQvBBk84hh9cinuLwG5PhMiprdWCYoQc3UesQLJqmrNyB68fs5z9853NLKt7FXeqDquSPAJSWNpp",
  "key2": "5KhJPCASQUojvAYcp3jf12nWKsVPgpc4z8rWpAPSYzjop6S3SJCfGLG8KBghRCAkyk3GF2iw37TtVhfLN68V6yYB",
  "key3": "4izvVMLU87iYVkfV7QvCy5JoM1i9ZHWgUzWLwKcbgHJjTp9pPHTEM6hDkU86nrmfcrkiccrJYjxpovxJeRtsh8uz",
  "key4": "3A3vHoPbxS1v3jVygpzrt9yqWSc4LM2JQVkMn8JPkagLWA79kK3hq6ZdqupPUff82B2HEVi1sgzejmuwfqxLg7qh",
  "key5": "wu4tnM2Af4qcqXFYUVGf5XQpFYXKGsZqpQdqmSV7jguDu457nLgBhuncV6muYdqXyW1UisnLMjgpbGw5c9XLHNB",
  "key6": "4nCyDLMZoye45kmeu8PAC31x8GzHFGAYwWr7ATNMrWcQuVrtVNqGQ3xbHmzYb9BpmJ66YrZT8X2n312LkTpENJiy",
  "key7": "2CDt7Tu69bK2imbNF4S3AKXbMZt5LSc5xAgqdPaCkPToY14Y2njNBp5iKKEJ3DHFFUrbLaKvunNLUki1dXtDvqoM",
  "key8": "6gwPuyHj865cHg6g75Zhq9TitSsU3NTcwtnAGqyMmqCd1yxU1RNXUrEh3CwzQAveqQtiDBWeoVNL3qLA8EikpWH",
  "key9": "3S6Mk1Y7qgKv589RhUq1Xj1dwMyi9fPPDxB2zH1W8kccZct7ChY8eqXZUM88aWE8S3mufrwn1THgsdgaTLrMpeDZ",
  "key10": "3s3dn9KFfhD5X3QPxoW1JbhkiikEvcUvVnSTWdtcD8B1XqQnWCe2NTgMULAHV2unipe1DNv9SVgV4oPneYgTwhq8",
  "key11": "5M5dBysVmjx6CMTeZ82sA8LyAksWJN8C9sPza23nQJchKAUBRYMWLfrc164BQxLs12snLboXq26PjXu79deeBmwn",
  "key12": "2dsbzqMfC5V63EXSt8peP1EqZNtGc35YD4PwnhXnmYuTVqno9ekGso8FCBGdfhmaUeM3rMTcPaPwkDyFrzTgduvh",
  "key13": "56TXgmXddd54dM1AhmqABvF1xNjm7zrztTheeqs6sugCNZMzhYNBpcaU2Xruaztuz4c5nrLTqxUr9CpjUth4q81K",
  "key14": "4HuguwswL3GEPRtYGcha2c4WK8fMRAPM732ZvJYzMYd4XogRAQeLbfEEfDkixnLuAqaYni1MJwkzGTcTco6hjhk",
  "key15": "5TGDcSm1tbYyLbkw3ppfeWRUF94pKkdBXX64vAc4rgVooM3qoyJd5uQNEzMcxDyS2M3UB23JUD2eNeXatn9ExXZ7",
  "key16": "5dmhmFfd72EwY71g4rbMTzeeFRZiJUa5SzrQf4AzwaFLmJNFxpW9RBRaTnAG8XWDSWTzZHTxraY5JhNqMi6cNS4B",
  "key17": "rjFzQZZD9PagBmAxvosVspyufrtg61DFw8uoxEGni51wGzxmUGZKXVR41HVVrcGAh1A8bZxbSSKoEGHpAFoXEpY",
  "key18": "9rVBSgBs9V8MH4mQ3jmQy6Rw94HNsA4rWyb1ufnEqoJjdsxC4XXwC3VHEYACt4Fh1zchwKBkFPUdtCRaZjShtag",
  "key19": "4Pte91xnxmVvQCZTUrStYWMJD93w1Akj3SPrhau8apgHz5Xutqj3yuy5oDGCrBHQZchvTj94HfV98oscDyBb46xU",
  "key20": "2odvxhCSZbDJtMjHpjCDDSPXDpund3GRpxk7UmuWUsTHfGVvLzH1vrefuZjN1f83crZMFht55hLH4AwauFYqUnq3",
  "key21": "5jp7MQArtKC1Q3WrGM8NUwSLvAaR7PaNyzPX7jZt9VKC4uj4e9ztMgV19GzZGjWD5FDi2S5BZ2HeEn2ESJaAaUhi",
  "key22": "2Y6toF24Wkse6iQKxbAmDgTDtsvbBz9BDRP9LSDiUvdxy1XrgfV5JvxaDPtuHhzTxw2tTMBYCJbBdVTdZuXQcp4",
  "key23": "4RK3QzTSbjTgdYDMub87so3qpKnE4pWuMB6SbhGrriHJhhskhfKHD629sgcVnY4nioibSho6fX1Ff73PhuEuaadr",
  "key24": "5Lop3vokZuJqMg1fQU91c29z2eMYX4fXfB8mHDqqswMJy34yGEK9dcxuvWTCAFdwxw53yVEPLoZ85cfohdant1xo",
  "key25": "utu83y8gq5cpcHrmChepe9yJRP32TbgM64XQT4s2Uvg2twjY9rBsHJEqZMxi9EnnhcyBu8tpAn5iNnxTfES8TAx",
  "key26": "3ZkBv1sBs4kQprcUQvnStPqXZ8xmgcAYEqn5MVc5VaSyYBBthuZG6nbGypRZTvGC4reFMUgYaHqgkhHZejJ819fV",
  "key27": "5jWEQLGuqn1Qd4XtBk2bxPKS9naGLFeEXgSFqSk75aBuMcaF29rH4XBjvgxcwRtvYy7sm1JDRkCpqDo4ykKXsfPP",
  "key28": "4AFdh1DRfnDdQKNiqpqPooxxoaigtcquk4ZdaSx5oQ6BUoB5KituPqwyrAdPrWncx7UFjnDde8Eu4W28owRgvR2d",
  "key29": "4CMtRG4qyYYZkMzoMYPHjjcJMe1RPvZgTmYYbZp2Mm7QXP7aJtYkFuKNNbBU1hCTQHheUMvrgg81aGCwGhTMiJqa",
  "key30": "54nBKTNT7GpJZ2VsAwkPGeVncHJRztBGFrWpmpsWpA3F9bQ4R28nfvFHCymcz53hgePikD8RC4ZGpjjMqddjQQHT",
  "key31": "5TRaCobcWu2ze5HPpdZkiVfDJmyedDqf1qNCSRTSex6EbjKxMG7h9KxRSEPwa2wGZnsaXXadrVf7u2PJiz6JZxT8",
  "key32": "53LMA2DRwmrp3gekQphqWus4nCCPpADyRzgKMSFJ2DWortjEARqVX6e65rujyRfJUjkgdFWRBfEo3ZowGGcu5YQa",
  "key33": "42gTVFjXdPYRejeN3qNpRN5uCQ99Sa21GaCAnW92tZVNpTRK2J7YFLU7YyNhqLJJTsAyoKc6iJ3JahTHCLDQ4diX",
  "key34": "3XSHWC7KXEarm5cFg7U2V6uhuewBRaVDaHjSUa7o7uD2y1WUWDShPXTqrkaKnQ69sAHKuzzYDgLLMvQWPWBxS1YJ",
  "key35": "3B4mgJj7SHwehANo7UAoPjY9WVhMoXRbZrVAFvNKU5UejLuPiwYKkxFb7RgpYZBZPF8JYsVkRDJEmgsLvaEnpAgU",
  "key36": "2evTobeFTSaKop72N9RoqWaproRxkYd5JTHTHvqhoMqKToehiBSFctxzBcMTy7SREZhrrELEnC1UZv3fYBPDm7ah",
  "key37": "3Bx98AbffosEMbSp3K2JWKEr4HLe7aQxo8apBF9pxxhC6CUWu8GMqMpWRCKRagcXBgXrjf9KftRUXBJ7BV8XL7Ws",
  "key38": "4Vj3Eb57R7fz1tdhTcMu4mNw1EGXZVm461NALSAjKxJtV3h1ahbaKWwrq2YSLquxZY9oGL1dQu1yxMbrJcpNYhU7",
  "key39": "3h5pvte1tiuWsJZ6GHJxDsZfjNXK3BqjT9wEUdMrQC3Nq95Wusaj4b8eTQp8EQxHYM4nFRhoFnTp1TEyoEAwABAq"
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
