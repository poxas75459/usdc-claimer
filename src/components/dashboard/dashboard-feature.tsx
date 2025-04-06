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
    "4FfuJBZBDb98fEYohpjoY35BgPK4Xd4nWP9M9sRXbCWorpft37Max4uubbJXaYHLyf9xzpZbVQWUMkFPENa21auC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HQGJbVWN7AfSo8igMtcf526jkqnhoSe2C374H4Lf43KqtitycGGD8NUdz1VcxMQB3mk96TmneCnFoenpMKgmTLw",
  "key1": "5L4Xtv2YeLGT3oTrn4YM2RPjB3eCi8kb3SdunpnYpe6k9euLfDSjqhzUAqD2o4dy5cqtsJu89t56MyJ94VAJ5d38",
  "key2": "3kWYTw1sUCjvuuaCxLkz68EsyuZdUnNweTkXThmxj5dz5MYEZpwLgETmCGdXgJJ54bZmCvZHkoy1xhVghQ5WjVN9",
  "key3": "5KdsNy7dK1jrSXgmFwSC9bPdFJEW5pURQBpbXthQBXANV4uLQJgWJyYJdMJTeUWqPhSkEZErt8M9RotHjU3H51Y3",
  "key4": "4AgNadBd1tta32zdd8yMSnv6AE2Ck6xMrbteRmDda7oqD9hGZNBegR5NqYmDmmZhzzAhSUoXC6BfoAxau1fDrsoJ",
  "key5": "3csg5XEVDqW4UgoJKbp3uH3Zoy6w169rA5zKgbqYun8hy6ws55wcyjfNfHnDntzh8mKKoPfsf3m2ibXJG1oZJ82F",
  "key6": "3aMz6r8USdFV4Hc9C8jmdzjJduxD2YJNznP6FpBTJJpwPAyi2hxn8uwbUXcbsXPVXdVoENAdaXrBLcc8vDcEaWHK",
  "key7": "3QZYr6B4gEAYEwk5yaRbugwR7AfbpYc7ePfW1UXBLVDmZAvPVrifsBkGdUff5QPpMzgNdYnJ4RRg353dHWaA5wNg",
  "key8": "3if4Kf5q4gyR7PsrpXKLGxC5uzVwBksBLRDikgdm6p27r1C8WMr3zXh6oMdUPeKfHpboQRQDiLwFYS6GZ2cjGkDw",
  "key9": "ZPn17vvf7UmM8pJgK5r8Ha7KgtzmfBxkrMaGwGSEut13rFtvofKy8yWErFJrhqpA9ioUhy4jPg4iHwcjzCFr8kh",
  "key10": "4nXby5zqK8aURmjUzpfkatZxxxSnaRxYnddwjkzAS2gg2dEkL3xCZ7Zy8moUvckgs4kjW28GKcwPxdGkzhpUHs3x",
  "key11": "3G1eWeqz3Tm7YC2JvdTHwDX6AaSVTTnknfTLJyXKgSYeECq361CCb2sHwoB77m9HT9adHMbDecqxGyjwWtPqxc2Z",
  "key12": "4giRQQTqhtLYvFaU8yZQ1wt2hz9H37kaekqBXJk2tKLEgr5maU69H4LLPky9NJc48E5Urcys8hdDdHg3c4KJsZWo",
  "key13": "335hocNHPDyXsVRvmdc3SkHNHFyMvjf2P62tfi3vB1P7mS1ooMwzcyb1AheXGXecsbJ5cJ82LoQy4WhJEfFdXsYr",
  "key14": "3aBaA4XZzA1ECVf7bBxXkAo8QcqcgS3sXmXmksPAw3bzHMKqBQw9LHycLbbhxZvcBcx24oimLzp8nsbg3RM1aczd",
  "key15": "2NdFViKf2MbYPL2YQzmDNfnZoTJ2RCmUGkfepZ9ENaM7ahsiSU3NXmtgBb8DLVKGjzgPA5dhMgabvStC8TieH9kJ",
  "key16": "4Jx7PPSUh9fNFVjTHYRHugwh9zUjd83yKwNGSueY8QJ25JdbSx7pEWbCpwth6v8PMR81nLZ13BWDaqknz7Qq3ibw",
  "key17": "5EL44WESCeiEMW8geieGgVjfpYbAGVut4Lo3vHxpybxkihxPr95opsCkr1cY94TestRiCGVhZZ9HJWwBSsVEhak7",
  "key18": "2vQzD4r4qLD3J1Rc1tVBd1859yLRULRiyFsydBHHKXrGNL9GU2uoFrde3R38ytALVwwRfu47VMEJk6R77QtiukAo",
  "key19": "ifhgZ3L3p5T3e8MiKUnujRB2sFR8b7pE6C7VP6kNuaq8zsYje3SmN2uPpwmC9mfMcjtxhZr4KZpNnJQ7GsXXrPE",
  "key20": "2R1J6Pdt9X3UPbBQQznk9iGxftuKxaQMzvNN8JXa2aEy98GCwo14wJp8MuDcnnLUmDenZy1yHaq6C4dqSvB2LFdi",
  "key21": "2V4vcku1VDhzG7rR4AY1tbsW8JyBVMbYRmFQwyNXMDF9BpzcNe9A8xLgAxiFEy1cteNYrQFwjnJ95o4TDrj7cLdL",
  "key22": "4bCNkcciYSqAQmdRiDwAj1mJveDzu6THZo6Rkf72pof9vQwAWbyK3XsPANTzVTmCaoi9PVU8DsU2M6DE8795Aixu",
  "key23": "4vvJG4nfgWY14KUik85ZPxU19eJCzN3jjCEtDoTrunNvEVN8kTTyg8QjjZHbetV5YcWJ67KwAaL6Si67ewSmRZfN",
  "key24": "3DpwBcpxSMVJBUoSx8yacf7wLek5akfj33QtNqVtUMg2vnN7m6AKJ1CQywZ6zYQRxDjf1TxYmN4VmZToxrNrHgsY",
  "key25": "2WGuMZFvsjQ19KJhW4CJbkB64dh6CSnaVVMzx6Qb6k77HcuGDYjRmroGDDmFFDdH8esTgE23wSkJLWKER2BoSHjD",
  "key26": "3Pzn9Au1d2i1DqHDw8rnK6h6PrRj39HebkQ6CnuBQ73DXNdnxUQ8mHt9LRPDQCuD1P9sBoUDHwFwmWbTWYhq1JVW",
  "key27": "3vPHfzSj2FBacjCJwZBGUw75upqTEcfEbHKzTzGt1r5GcLTR1fc5w8Mt51vfNq2wxCrRQmfa2MDYFVF1sCQ9Xqe6",
  "key28": "4yYU3EsuqRf9qBayfLSQmqmFXSogoARCocLuBtZ7MUvbjLtLGUzsHQo2Bnf3sSz4RZ3a1CyHUsPsmtNpKCaXfaRx",
  "key29": "2QcJPV1Buz4o1ZT39GyEu6sqBfJc7QVFQvJJJWVygaQhbryySPFkbiRCWXuxQ1gDShbGiW5V6W7bDwmBEmFcPDKs",
  "key30": "3yopybLXo3oJMqmGzpDFrGfEA6XNsVCFuG3jacQFMjBwkSsmz2mTDVyrqr8KYKoEZj1m8K8qABskHZ1tUtJtW48",
  "key31": "5A5tr8HLfvxYGnp3FamiD3nieHMmQnmLLZ8SdrFSdAWP76gpWq9CCxfHssXWnHpFAMoraQ9qvGuSWyq5MWbkDPvU",
  "key32": "HE3mAiMwtWw8r7o3hL6dtMz4V5mFUGmMgpqggwvWEsGBAkt27BVsDUtPqEFRQpSLJQkuvKxok5iBKwWeMem7r3Z",
  "key33": "3ACqHkBPkzHVer9TsCCTmYnQpaicuX4CViQdLjUicGyc78yRuphFpCwL54kFbzrPeLQ1m4rnir3VNzEmNkpC5euK",
  "key34": "3mYHB3DPV8k1xoPU62oKSYCLxkJHSpUndcsRZT2Nsnx5Rjz1YoE6xH5UcpDHvz4bbS3PJg96jVKACSwzSRPF322z",
  "key35": "55fCaybMaJwMPRtHiNGJfY8SbSfhFo6euqvRobai6rUBfnMAbEXBqfdsmboTJFenjtTB64jakb88z5mNFmZsDwRt",
  "key36": "5FiQdE1CrTsGyaSBpXEpsbHNzkpSy2qVGG8Y63WNUcGB7i6bWhkELhZHg2JuWsEi4LL1PY5ycrteNvhkmTXY86PA",
  "key37": "3SQaWPS48PYFTHeyVZyBcHCeBig4j95UKWwSbwhx7PW94B5p2hFRijeZ9BmFteuAjjKgaGY7UxRQSwAficWnkJBx",
  "key38": "EtTeHAGvUs2DYs7PuMcRrx1xbs6jJ5brDtJ5L61U24yEiWVKMiYw3BXz8jYBXrQFKfjfxGC7d8Lfv199w4B2ZdL",
  "key39": "4mA9PYcdNYaoamCjdtUdUt78aQVXZFSjeMQDEWQyqDZURMjDtR7CEY8D36VpjbPXMYFeFSm5nRv12GbasdYWgK91",
  "key40": "3FMJBxKhbcKDwXCbyWoKTqczPDidPS8YPbpURisave6vCgPEnSqQYhXv2swmU8r1CTqP3e5ogSREze45aY482UwN",
  "key41": "64Hs5hfbwaB8cafHS3rWHtJPLssZjazLAuZo65FMBEYJs8Wk761eSzEm7STP25PNFm5PdB2FA73FhP4GVichofro",
  "key42": "4uyy23rv3zy1a3WTn3jFhwMLei1HfEXV4ZGWzM95Wa5Sh8SBxkyT9NDEbz1ymcYxSCtz3Es9qNx3SGfubqW9X4c3",
  "key43": "9X6wkpsuQQNuWd78WQCcGQ4gxy91N1EawNfYAaoWVcxv2BYWvB1bnc1p2NH86hcQSiha1TEbtkdhymTCQZVoMjT",
  "key44": "5WWtLA2Dz2HgmXuXyDNeps8q3N9s8AnJ8oUGyVq6NNT6wSp52RMJx8oM2q3DysXa7MV1gCafSPv7e1NV3Fg9C9sG"
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
