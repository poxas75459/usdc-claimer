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
    "dGRihz1Lri6tb79z7VEPeMsNQsWGWJswoDQSJoDhpzNpsZJN8HcE4k2JTdmpHoiDjD7SW2JZR4dVSsv4RTqJgk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpBGrNstrmqF7ULDja7JdLjf4qvyDWbqQoFUzhuM5TpJt1nfN2XKPGYMNBguMPfQ2t4T2RY8oLZsWjk7ce5Lnsm",
  "key1": "uD78kxvGmTbJp1ssRHzFaforEJW5vB3nq6jwt9mCG1tsq6u3dRReiZkdHL5Z3nMnu1iu1b5sU8DQBeY5xA8skUX",
  "key2": "21cmRyTjijoqmJoPgH29EVtXbsPah5TnVkLwPJNcBsNWhxaSfeS811XTgDJswqyDUFTuqfbcFFgRHHxM7A7936KW",
  "key3": "363GVMj8jrepiQ2sCqXZhyiZysTfymxkkpjurJUVU69r4b1JUiVSfsoxRbrtdEdZ6kPvtusfpoe11gJBcLNCSgg5",
  "key4": "3RV31djvP1Ufy4Yjp1seAAfewMFsRKGYh4xTzX13YxBfa42mx76N9t2eDDoxU1qYLRF2G6cnePxvBM1cHZFfKQbu",
  "key5": "48zRcnRNufdGPLSbpYQAg9nwWAkCZhyVKcCz3jHHZKcx77siuDDdsX1XVb4CPErkudJXdUV7Rb5XHvR3cdiiW6Sh",
  "key6": "5CUUoksPFaVBqapo6KV2smXnA1xEMhFDAcu4xhvwpcK4LU5nqhvVJPbQ2ubUzTJAbe6kGNRTNJUa9f2RcNpcnKSh",
  "key7": "2mpinrnGCSr5VsDv6XtBDSHKzErWBHeubmvDZi2M2U9gFrUC7TU4ufTCGC91pqeQhrTV9mcAkNK76uZBLGnSyaFp",
  "key8": "2BQfFBf1NVH1UjkQA9wos7b2TcJ2REWe8jmuM9QTJAkP4XW4euRR1NYcR3xTgQxuh8vsgipnBzdWgDv5p5rpNeCm",
  "key9": "5bkYsTqRTkHnhzrhfYbVJFZWWaBfyqcFM8Fxa4vP4ywdSbXBBLPzAW32FSNAUTwZMc86ybafWcba4V818YaVB15t",
  "key10": "2mm1eYz3DckzGPH1FfmzS5XnyGzkYsMMEBMB4G8D2WPDC2NDFgpq8Zi4SgwUVYwJHiZ5uZkr3yzGC89BXzLUhVDC",
  "key11": "3Ysd6F3ZoZs6uiAyQoT8jt2iPh6QL8XhDcrXm3KbQNVqKgLUk4uRprwsfagfyhPaA7fvoxgNFrWhdM2RvtCk1f64",
  "key12": "zb3zceFZDEEPrACTZmqLxQNGy2T3XiWoUdeUjaGLCg67zg4zpfPCM8qttRWSx3BtBLDzoZ6H8E9Eom7Fymke8Wg",
  "key13": "39me4MCH124P7tkVL1wwtL1VmKPGqw26jX88JLcD3v8VEPjzHzcd9EcqPT4gtB6wNLDxmcgo6zXfUWXzfMevbrHr",
  "key14": "4uKBu7n9ACesBhvhN5Np7t7ST3wRMLFyDkh4FHbhAEvAkGudztqLGaP5ZnZGNjfSWU8h1CvxdEsVHS6oEXL7Vr2y",
  "key15": "2vuFodMJnCKdcdZ4h5x2sWDUxUS4MRVA1TeJvQGXDQLMMtPXDr7859E8ifZVBa37pyCLNrjVVH4ekq3cRGxGmeqg",
  "key16": "47TCPiN7sKq66zSXXbCeJEWiH2vucQc4F1cM72iNTtvhaFxUBT5tLXGtnM5wjpEMjZXqs6rcdx5pS8MXWz773vg",
  "key17": "4vYvCEhxVEnyZ5Ssetd37R4v4RTtME52CH6wwSurXW775BVA5s5JKv6HHv1apEpxHmm8VnbpS5MsuPhnPcCGJSRt",
  "key18": "coQxH1BTBZK3KC9cu3kageWVvvTHhvrZn8uch11eTherp3qeDK8bD1C2dPSS3KNrE5ug8K1fKTbnoDsTHrEEh8C",
  "key19": "5XMae8ZrJA2jDQK5LtrRCmoKovsx9Q9EDaDivDrivCb75AewDMhpuL9hfjSPBW1poq1AmUYDcuAb5mwND2ujGcLE",
  "key20": "qfGCEXkkTpS1JYEQmbUsdP84XbhewHERu7BRu5NFW8fNkHu1cPQUFdeP8Qo6uiQG3mQ9mmgH5gowqL9djYGz61z",
  "key21": "2NyLd1sNphBGZcT5YKv5MpxGGXsA73bRV3UQxLC1kuakUyyChQqjXDixBznxqi2wmyqE4su4rbGWEfanz7LqRdQP",
  "key22": "3Mm9yzgRrPeCTHG7sxECsgV4QNgVs9ivU9ByGpWCSsRrCtzXZF3TByeYacT535Q7acF8KKMHyh9x2GwhgNS6nDMR",
  "key23": "2zpdZ6R4ybGCoNN5TiU7QWwkXy1ePrR4eQBU2ZVqPFW3uJA7dDKHtGGCBiswcpFA3jZR2c8RLtYPyuRQp1uauuSR",
  "key24": "5AqgXodjvwj23sXTeXBd6hiTs5XnvJiQCmU6CdfnAgAS5NYEkcxiJzh9XfJe82FWRsv65a6EBcSMctFWCN9uSwqC",
  "key25": "5MddiaQwMzaU8KGapg5xzS1rRtYSsemPWTF9MrEgyvyyTwpyD4VJg7yCFJ8J1cnAZnhPkrzAuKAm3XpvpqQKmUfL",
  "key26": "45HgEgEcT1qA3T9FofxiTUBZ3uG6Rmy5z35Zv457HDZp8tuDmdRfuEU2ko2fLZqA3BeFwchP9u74bQteYYS7UzJ5",
  "key27": "4zNeAxMpZzxZwZ1nc2PEzEDKVRzQUUMvk8fFkzqoKa8mSjU92n8GmjLH99pqMAevHpvvSbNT43wtp1JiQQ6YfmDB",
  "key28": "4cKHgxZdeFqv3jGRKC4xUXpifbqRdxspuX6TWB2qnw2g4wQPDPbx8RWt9wrJFLvf26QEG7d5KdcvfdXTbDMYYmXi",
  "key29": "2p7up62KMCTLYv4nLVe6Ev5QLrru6BSZygBDHP6RgRixwq28RjsihGcZEikazmTuoXqLFHYcsdvjnVDjP9aM18FU",
  "key30": "3RTjQjcoyzTDxrXSUuKPNBNjuNGjGTuJnencXXv9np4ZoYSjxjXQwPLp377VkgvncuCNdpYwUCqkjNdF2x6x6Fen",
  "key31": "im8HDeFMCyyiB2zwqGRKALnJq79UQPkJyzmqxWMZdSKGHzJpdL6ExfLWpMVArhcfo5RVjKE56ZMHUrMpKpxr4Qd",
  "key32": "4xqp8kjPem4ysJwfpMFb6xawGaPV6xw1Q6bhHDJVghPGKYxdo7t4giEaNDcrJf1jfCpGD6EvGpYMaBVZb4baZVQn",
  "key33": "2gXm8vdkrm7XLgumrg35Jx8hQ8YcJVpfiSJztL29cwbVMXkcTWYDVpZyK21bmJ8dXwZ5wjc38budciGci91AT5mb",
  "key34": "2jwPt1NVfDBaHDJpwB4t2WxYRrBsfVZdT19t4wNWaaetmHQuMupwsHSTUG5tRzAPrkG9t3YGGPC19hBZSB1dpSSB"
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
