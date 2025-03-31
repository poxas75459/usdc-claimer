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
    "5dvzXsE2mjbJVTvj395ehE1fpVKJbzaDfYEPj5z2mSeeMNLASD7kJn8yByuQz6U9WdgopZ3w7pNjWmJm3YU7LLxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXRX3c3ypR7cuXmp2kXoDZyqbd19zzqBoFATqpttsTFpra9AHnf5ykbWTJ8dyHoykUAP88sVUYFURS3DcwwRdjt",
  "key1": "5aJokqnaEXCZAnbXV4iSxBM8SEEVPRfuNoEWu1MTuBBJDd5vaW89UFv6xgAaCsrXHezcb1udQ7hksQvvQwVLhRW5",
  "key2": "3cJ61jUVBL72iovLTHk6w7w6cZyrMQKnRTHUjy3wsJEz5KLbznQgbUE7eSm3q1VUTzRcBgpwRF8aAHzbVAfZdCA5",
  "key3": "5nBY1sbjZQnbdEN4vS8BMT63mXKi3nTGeDC5jBp72K7Wpb1xaXYUjdAjYKSCYpdRumVmfBe22boUafoyc4QJ6unE",
  "key4": "5TzLzgH8YBAju5FTq1ZENHRtzPVUN7HYkBNuntXERaBYa9zWtb9mcurpPLjUiFzY98kZoNpg64fMXGxbWNjdxgRU",
  "key5": "59AcVAcCGeprhk6WttQcA9doJYv8PYeaKVLkTeRHbZw2K6RbEihESN8YGLBMPQWXMc7dKCj6K8FQ3via5FB55YAC",
  "key6": "4iJrbzjydQyXwfCkLUsGe1piMBGFTMJy99LnFkX2Xe8LkgBEgpXPfV21PQqdJsJvcmRR9YWEPhEwcfG9ceRjSywc",
  "key7": "8nKZXC5dsauk4ANqAMcYNoubAYaNAihAnj9ZdDgBt8zcqt93SKFRcszbnGVN5GyE1XsK9XprkJuMTCyUKk341Ko",
  "key8": "53zFYNC3QrCvFZzbSVejbNBAHYn9fGM6XCDfL6ethYJ12fkPMM8v63fgUsUr8yqBuoqt5zHqMPFH3AuBj6zqY5o6",
  "key9": "cqzqdVkbWnLw6TPdwQqhYDnRxFvJGwGsLNP8AmvctRZJXNE6qLT7Cjee2JMHDKmXCptLhATDvS5NHbT1Qb9YGwM",
  "key10": "5Da6gaAEajKBSmbry8nZ9JUke7EarNQDxR2iLotbCXEbszjuDbe8GdKTpfyq5F5tz8ueUTocKc9TPguHA7jiYxFF",
  "key11": "35oEzzPb1tftjESjmfmWAr5T24VxuH7oCZQNVdp8fS8ULNCNpiAhtqYNDYfmzcWRxf5oSsTTUXLu3dcN6Liy7t47",
  "key12": "4DnucA3e2ZKvYEwKWC1jwYiayzC7vTUP6QiGzfPciLJjob7udrXFmDyagSot4UNKxFpmKa1779krDV89aEszUW18",
  "key13": "4X3dzbPa496Pwt8ZAAFCSC3VBaAaRJxuNPKfdX4hbAB4f9rwaCy13ZxgRsveDCk1bAQos636nikqMc71a2vxp8AF",
  "key14": "2sdoAfDdQX3TeqKE22VYytM7QnvvnpzCm3dZ1Kx9GLV4vx6EE64n5CeSwhjC35oE79KhhDg7GqPB8rLbtjoVXp2Y",
  "key15": "4DbDnLyrUTfjw8dn1E3o7BzYDNovoJbN6t4ek7JW1hpKgr1f8wLwM8tZot3HyoTMB9YPsMC3eqZmV7RjBsbmTKHZ",
  "key16": "67aertzMwiqzhvqKatAZXvxf5gUqMKyfvv4jw75ZNo71ujKK5p4xMA8xXG4mq4gXF4kK6578NtzRJEAuLbtbXZh7",
  "key17": "3ZmWnpqZPe8uNCPJA6RTP9ehKntvXsC6XgLSbag9wE3wWRQDWRVHcw89grc9qzv4DwqoMW6sVn71cmtupeh3o9wM",
  "key18": "4wg1rmGthK436zQ5UZ8wjhtagMWfvZj2PvBb3Uw63pft9owsewTDe2EbLbjeZgdg8t3BcKhuDwRSotiCiFz7uFJb",
  "key19": "375d8z3sTk9dDRN2npJmpeuK67PqiF2JMLGGrYkPNL6Vq7HaYQAA7DxnZSSAVoNwWMzjbSBy2Y6V4VBNPf1M3c9B",
  "key20": "5eEdF7836A1asQDg85rzxt4rUsmMtT3avHQHUtseFEjaBpHTk8jGzVv56P3bKyjWckF3gJrwUgaA5ujB2QkG6urN",
  "key21": "f48ePU1f8pcp342QTA11Mn5Bav15mfs5He94zdYGfm8fGc142F6ht2xoeYbLWPgwc4qtBsbNzcG5hn3L7r3gLwn",
  "key22": "YWdovQUATyEzdPLvQpiu4RE1eFzeWVn82vAkTotwLzMpD2sJXvHn3CtxgriUCfnsUgjss4oMBqFh2e7Dk2AoTDQ",
  "key23": "61249QSmVLE3vvZou24E7eHQCVfc3HqEtvRGZArzAJZVwChLxZUhDLTc6yLzP4Pnm1URKc7SPdoVdr99D1GYCiiF",
  "key24": "5aCJvdYCup3Y8G2xs4XTMPjLrMBQtUttUVN5Z75d5j5L4ZJkGwFU7FVGAxiodUuVJokLJ5K1YykCzTdRx6PXQTQ8",
  "key25": "3ZuRffnPgorK3HuqjH55r7P7krEDnhBZtrcQxFpdWux67Lox6h23DyXUKCEpXJSGiMGeAFAecX49cFetogQekVXP",
  "key26": "4Lh939VMiWrHYcQYdNPjvFuw4Cw4JTLsbe6T2H5kgMdrHsaB32xibJx3Q5qdnrYDCTX3UnXVLFVUss9GaCgorCRp",
  "key27": "3Wt7rRGYqPoFVBGQGWhKASieB6b6fiJWf14GbmZKQqt1mn7ADregNY9CzGiygAu5XA4NsSmEcMaUGdiJtNx4VDGs",
  "key28": "2Wj9DyLAMmq16H2rFKYZ2L3DSEfjvS2PxNuEhcjNMnmrD1YD7kad3yyMRctAeo8ZiCuRD3njUHxPdzNNvKapsh1H",
  "key29": "5DpEAD6tmfxhousx2bqTFRa6UNFhqZ1ktzkTe3gbMFsLNTDSehH6ARZTsjxageCKDU2wZpM6rRCe42NeqawGVny2",
  "key30": "2cn497Miuve73gAUh52wXnKZWWKsMoSa4Esk4uPw2JF21Gc8vXb6rCQnFwi3kFKL3TnCoQo7pifhMMCYotrs4eFF",
  "key31": "3K7eeG8yDBoaK3B9TvVG8Ki8HEkh6W4aQmXFddUgLB7NdLxJqv1LYdA9wLHZJUY4AQHzDeXvEve2GVpVhRL88hvD",
  "key32": "3gQNPQASi7LRCfKhHp8fzXHqMw4gvduy3UXPJ5rtXgDnw3UbQr4i6cUcSaLTN42SLryzfm5NkoCDaywr4yg8kvGg",
  "key33": "5qPa8w4SWXmvWpX59fLHGADaAA2gAN1BYJnEmTnCBMQ1Bvfbg2J1TARdKrHv7CXmbNGAwciJkMGLWYDv4GaenW7D",
  "key34": "61X9w3oiYgvzb1ucGzzDHXtw6VSTHwPotTkK4XUWJSpyRV9sfG8om7eAxLRwJf2cg8SHR4VTXuZwwrXKJ2hPTXNc",
  "key35": "3qF1WPtrtaXVcq7SkykTMBdVQUs2zwaSNpaYrPgWrGt25UjyRrzAvikmyBAtZQg3yGfkHmyCyU3SrhkpUBPxp4bY",
  "key36": "2QSuWc2JrJRsFX65YU6hHzqTtx5t3gjFnQ1akegyHkUR22xVLLtXfCzscrsws8Y8Mhae26dYoV6axcXHoCVT7GLJ",
  "key37": "2Yx2Wdu2agrxXGpphijTM1MYfVv8MofB8KmJERgDJUx4eXK4CRvi5tJBKmP9dfyzHredouGRrnyxB17jZda2XSYQ",
  "key38": "3HGH8DU6BapKvFW3jGeKM1YtDpvrB95x4GvSnKZFvVNSGfwVTU16cwrwiE9qcLQjp4mFgnzubYYJQV2NRp8yKaA7",
  "key39": "24CyZGEikxgZ4qLC7Qc3JJAWYeUYJQFznGH1yme7FiSgcHmkqhxypZvSC3awKT9EPWBUarzDdugrZnuKjNuMGVRo",
  "key40": "59yzmjGnaJb5Y4J4DF651SDe8qcTxUUB5svoiCwTAAm3kN4kztiXtCzL2xVK2cBJWjjTMk76orSpTiJxx1tUmdJU",
  "key41": "3WzHjAchacN4VwmEKvNEsUMtZzRv9ntxTBGwQpcNUEJ8aVGoibmAU2i5eU5E9DPKL2sbdsXbDGtKpZZTbucGXuuG",
  "key42": "2qDdvnbDWjVLj4q1tDSKxnbg6JU633xNLvuSEY2GYVbbgJxqVMiNFnhy9HdB3DTF14UQaDd8qvcDPZRd1B6AymXG",
  "key43": "5Be7H7SHd5ConF6r8YpESCqszzkuHvRax2LVfwsgJhPrE128eCJqVFebvhgfKxCjJFSaL2nf6pPbfxCRAdERa24e",
  "key44": "YVjfjUpvTnoS4X2PLKF2vmGYqcjNQvqTKWtFJfPRZC3hx5UhQeBgbytq5tWn6aJ44wd3zKmziWHPaNSBnjq2vs7",
  "key45": "5PWrrDjjmYm7qu2ihDj1axUkn4K7wLdMP5bURj6GVCxB2phZ5faQHUUt6eyh5fMtFNjPVRFpT7W8GMbFAMRoL3Ti",
  "key46": "3XobcihED63CiMDyRU6k9t2aGQ9gmJsTbR8dvQxZK2aRDCYXfqwNnxMmX8R1SHvLWkn2uASnDMWNm6zp6QsSNhZn"
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
