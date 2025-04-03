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
    "gCKwn7LbjXgR1EWm3jSQCuj39V6dm45bUKe5LK7fr9KsCVKd2JbACtkT4oPUwPDppPRY2XgjtXPf3wZoaw12LGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NngiyBNuZkGtmWkpNZhBGyEbCA5BqFaJDuLFtudG7ug246NyjGVcqYozs7oPP52gq5YtLkdbB47zrxfx4ycecT",
  "key1": "5WE4DVT3z5mMX1pp7ZGbAURdvnpcPJSLzDRascKL2Lfp5VqbhVsawMHivknLvgguLAVugv1pQXy6omNJq2mNHU9T",
  "key2": "4SHHoy2jm1SZBztrAEKHkmYxJdKgB2c3Y1X7Eb1GLoCUqGgGUxkwBowhN6fHtk1f8hMUeh3erwmUoAZAk6vXw2Yx",
  "key3": "2fikFvzHHAieYSEhVF7xyYxnG9cxQWm1L324m8A1FAGffzjhHgdaoR9yRuB2DnCC56HTDzwJ6mF3XJLi6WrwVhYU",
  "key4": "2p1xHt8cwGos3Dm4Gx5aZKweh3hShes5XppemtSVv4X6kSewNjuXkUjzbzSmbrgYVfKwMZTVABvGNcLq1SjnCsty",
  "key5": "bRMrFa7HMFCzddxAEcC2Nq69c57eZKeprPQbaETAGDuAsomT8sSPHmvxsegz2HqE9SKDmfTWJggN2WgQQSwpX1X",
  "key6": "3itnDU6tgVHBr7Vm3a3KQnhjRyJ9XgDmUDGMpDyQWNV1ZAUVPvemZgontyAVDCh84gY6QR3zmAXYZSC7KHCJdHBR",
  "key7": "5swnZ5wt62v6poKYbrfGPs4uynXk9LJQDi9Hxajfk1LxbZAbPPVGR9qjQMD7Rtyz8jueyGfvuppbD6GGoPq1zHpk",
  "key8": "4rMFKKB4X8QdHagjmZfV8jDmnERzhMpToXyVAUQmR3higDcQXy3TdGxYjgbAbWtQeWGTT7CLqLqPjBMJUWDhFjHe",
  "key9": "49oTywwhxaeswNkxSyLToDe2ZJhWKbK1LvBd56h4GnrvVVZCpMJL9bavCUoojEk3dSAeRM7ViChWMy9cvBcDNybp",
  "key10": "3wFQViJoqLARkvpmELseQXfZtFCGTmFPes9EtzZXCaHj9D4ASMPfjjk2AzhHvxE4Kq6rZvDWicecTVvb9Ms3kkrj",
  "key11": "29SeLPGW2ZtFJEppWGvftv3fF4iomREU2Bpi1CBh3RwUaQaR5Mt982dVekSQ1iP6EVCQkicjNQEyRPb6NQMYPiN1",
  "key12": "29ye878QZwYvE7qLwJr1SmMXwuHEFd9yUHf5NNXXAqf8QybSuACkQiva3G2v5CXSJtvT85yZeFtyaYYH1mLSnoeu",
  "key13": "4MrbsiU2ShCRZ22bH75L1H93r8QETW45FqNWSjVivtLtBEGQqnn8a1YXGV1P3tdmuZFdqgNkeTJqoy2GFuANEJHQ",
  "key14": "4shm16QcsvuJq4XruFHw88L8noNdwVZuc8KddmmgkAyAHhYE4CePxzkGYfb8bU95cDsks4LuXc5WKZXYV3C9ef36",
  "key15": "3hePJHexgMtrS17QXf89H3ZTAHRZZ391BPivnvZzVM6d2hQJEFUmeR2H4GR2sLKF9NHFpMgUNzJQtyDebxEewnZ2",
  "key16": "CVBx8ZZZ79HdULNSYvJ7osTZVTSgpTstgoWcdMwwuTgd35oYeWLBwmnxGfVXMAb4QyD3zmJXMXH92wxu6Khdy2R",
  "key17": "4gmUifuJJNw5VMnqJWJT8se979exXZaEFrzjcUbJHsQa6p6fpuAioe1vYbMmgoWbErbUoezpuY1REsZhWC7F5SzT",
  "key18": "2WSRfLEPHfxPb7kNGy7jrwnYkGfJyms18JunmM2Cx847KruPqck4j3JSfMuLZR66zBezW8DvgyBoUB6baXPh7Nr8",
  "key19": "5oQrXq4iogvd57itTbjbsPp2sKWHvRPSdfnX8Q6qcvjCiAaUvs7k1WeMKaJ5tG6DhKaSFBPe6psYmJDjkTFW4Y3",
  "key20": "2KZGs3C22rLxyFvhH1oTXiMpsKcXpsp28qAGJEAhbiy3yUV17m5JVsm4BfTXTHV9cWj3R3M1o8HtJsPKkChvRm56",
  "key21": "4HPbxd7E7TFpB8JaHJZ9nLoinkL2FLw9A8paCW5kwnNyL45aiKdXXujay9RDtcBvCRHCuLmg6y1ZWDtvs17vt5cY",
  "key22": "TU91hUvxhCMbZ8ZZcDaQ81BQMSsuLAhU413qP7v3JbTt8rdPEWZ7m89LxswsuVy3vLAzHhdmVzFqRZxzCf6bhwB",
  "key23": "2Qk68LZJE5VXajxZN6vxyNb3pQQqsXpLYh8xMLFooNky745xCLfvUWwWjds9peyUtdYkAVBVQiDGz7oUCKCaeB23",
  "key24": "j4To4SNW3BKWzgqL7Jckh8PZa4DPx1GzNcuLXPYoiaAHCQroSJr3ZWcYXTFqH5qBda1VYJ6XiRoWZa5qvcvCF7J",
  "key25": "3HpM72y9yPC2mKG3jq4KPj4fQs2iWi2Gy9jJHehZ9NcMfqpgxUDucZLG8SrydXd3ZkeqknpvhQsCoTeK73SJwCDd",
  "key26": "2tneXAvyCfbLtfg1nV4pihpipf3U7w9GbokuKQ6b5PvNpfdmb5wQ7Ciy5sKhNnyUrwSzCHCZS5bBSJSZBrWsrLkA",
  "key27": "4Qbke3TbXHgZ5pj8Ev16weRmwMZsESZNTwqsxSFauhCbNu8H93zmuMjXJyVGGYv31t2sCn3uzdF9ZSD46qrpWSv9",
  "key28": "j26ZxNgNMcDnGk2pBDHpRtMDTRKZx7RSrg2qGnHsHdcwSZZzVGfm92w6DYjfpbFzug4w9MGEuxyT7fZTg3vzVY5",
  "key29": "6fmpJFht6c9Gq31ar57gp64U3j2rY6FWQ4BVjnmRLStSyEPLMnDJ3pHA6uUmqZyBxe7W1Xem3eWFJbLtpPUrhKd",
  "key30": "5DFHM6F8LFec4e8pHJAj8HaCRQ3HYHWMvZo7ns8HWybEDSHF6BfKxCiLNHTskeB89qvsYcKnaWBHmZ42zEe3C2mL",
  "key31": "5coXELtpe4vW81fHWT3PvYnGf5PWgU38J97qUgayRhNQTiPwDnbEWnStYxg8T3pTC7FQ634vHtYkovjGzCoQihwn",
  "key32": "4LhFNiFwuV4NyeSbzzyDjoWRWzvRUn8J3Y3uFq4ocNX1VAbk7wyp7Hh8zca2U9PYwn1vzBLt2F2YnNv3FeV5drDn",
  "key33": "3oQkJrfcpAWoWjMYhhDFddMv48Vv95DVu63TLvvMaYVdw3a3nwBgtim8MfqYuWtSaacUYhg3CyYYRMro4VyNKrst",
  "key34": "4DS3KWEUi7SBJqCEUWLvFuCAQ3F9bD2YyBG2fc4QA6BbNehvyg75Gmaub6Q3tmQKJGTZ38QyGApfCAdQGfjKVmCV",
  "key35": "4hQjMXnruKZR44RzxFLPDb9pzphxiiNGAcCkS1Md4ESozB7Edif4s1aiJzcASeUb7C1pSHe3kXg4bJLxBZFzGLmS"
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
