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
    "5q3C915uTDHpdZaBiQg7rcVjxt1KPG2QEipo3m72APdx98k9FWsEwgGVqCggRF8a3R4H3T2vsVfGXt8hB2mnzccH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51XetNvajkpFomDr8vba1DnGiiHufqiPQWmsjXmVoXKNGngEgqbbYVr4hLTsyfAjENkBnzwdrKYSUJTxWVxne7pj",
  "key1": "XrYKo3rvFtsEQTqa5cbETBpPdL4hDSS35oaUc2hza6L7o5m5UzWy64dx41xFYXyTPqv1brQP6dJdpQACGRYbExh",
  "key2": "2QjcZA77DJUZ82wEYGfv4cYmwizzteAsZF7cpK4xpTudjaBnsuysxVgiEUM1RhTDz7fgcHt8qCiUdH9LajB7z5xD",
  "key3": "32B3rjY88xyv6CZLr7Ytn2MpN6z7gfHJdbaikCjY1PBfBHGwLKjigsyUG4Nc78rWkxNpEuNNVbhMhmUYaScQdRXA",
  "key4": "64pJdhof114zEd7Ket3wNNEJXaL2r4pEFSqnKqFvUi9VQqWmyGTQFds8BLVSnUczLjuu3sBkEG78kdfs1bPFRpB1",
  "key5": "2bgTXuXAdSW2ex7NTCUbEQVaMNZf75zh7edFKnLr4SPUGa8kBxbvfkPmJxe1moeuu9rr3iVSPRWgFX1YYEk7v9en",
  "key6": "5e3SDAp9HDCiwmFhrJmYE98MG1i9m7hQT2FajZGmKnAEGFnftebyofpLdrhLoknT61hNUoc7FriYAcTtRKMn2CXW",
  "key7": "2qHNJPaFtbrbFf6LTxcDw4HQAp3AqevjJdzA9e2kjcKRk6y2jQeZ2yxW3NTswdZAN4LbrfHub2m7P6bRwXdgDB3i",
  "key8": "4qMA57faqjFtF41XnKquZ86nx72vd7Q5vfTt1JVEr6SYEVuxR8BHdmt17fQvcNTBxLhqwQPYLsXU24YgsHhJtAGG",
  "key9": "a1jeNDHxkBAdSn3537oczQE1ZspvgMPV517dqPH8GjLKpQfLDWnwxddoMG2NYzoDKoDRipaYAYaL2zqL2nBukHw",
  "key10": "5CaviZEW6PeXjiFANpqxSqAGaS6Zj6WKrhdodc1M59BGhTaSfdrJbnXzCCzcyUAkqyNSCMSroxSGaVbQRC9aqNv4",
  "key11": "4WChwAMeUDQAtJqQN1X2VgwL8ARExRoH2BYxHgy39i4W1evKRYXyEoYMJBa3cJ4ZCJ67fpzANCnRh1cYk2FZBkJa",
  "key12": "2WoD9yqJkivQcyWR7A4wx6ir5LXLiyanAz1QEiHiH5ph9cN2fWYV6YwnMq97tPn115Vrk1W6RFZEmJokkpumRvKu",
  "key13": "4j9kR9CPK5wJWCwY9BKE7nBZTr9X6JCgHP2HdhX2dkML7LWj7EX9SNtoTUMPPj8nfrArmrYo394m253m6v85suMQ",
  "key14": "3EB7LQthrCenp9hKRzifuvc3A6s1trwfjer8vj9eUpDkJNaV4oDYdTVn3cFnchd4oFkowmFxfzTGxe1Y8Cr7GTPf",
  "key15": "5RtJ4Pphxwft1pLitChbM2Gx37Xs8DypLYR5GFM4pU4WqqgoVzewtg2y3fUBFEWwbqF9nux57MHVDoNJgLMHzJM1",
  "key16": "2B9JQtYSnMXBQ6TVUGdbvZp54tJsuNjtRLNkn9U7moUcbtAi6Sxi5if7YCGdZaszezfNw4XiKZm6xdmMAVZvTrtT",
  "key17": "6mTC2y2fY5p23qaYf1r3KAxhYRw3CaYN2uScsQEMBcJaMxt7FRozonU7cAY46rTU39JjcWtzr3DYuDPSVYgrpxd",
  "key18": "618h1TK4qMmEruQ7KYmgpa8psscBcbrpp7744ACBKn3g6oDn93zvKjiTJ7QYguUZUsSLPVfLJi6bs5vNzyTC9Sez",
  "key19": "2bgxuwgqs91vbJD5ewCCJf3YSRVYTGbvVazmGe2SjziWxaF5zKYz3x72t1sh22wzaisuEkr2xmJMauywxZgkwhza",
  "key20": "3oKATag5Zg9Uo4TfbX85AEpdJpMLge7BLsMSyjrnNStXSyJBpgrdnuwf3ukw791LYA87eU6MnqRPggJDN9SXjNgB",
  "key21": "4eoYrqnhmj58FAq3TGpb7D2LWBVGJQBFxKS98aY9RPGZhfje1n8sk5hjKtF3odkLbEhgfFsTZ4FcTWpJXzR2pwTZ",
  "key22": "2SeSiPgJuLQ7yuXFybobi45pw6vHgNrFgofs2inVqoBChF8DwJ8yURTST5Skyz4yKGEUg4UC9hkKcXYFmmaD4rJv",
  "key23": "5smkLZwBUpJKsFiNz1yJQWMmePs2YBGGMbv7zbGR6SqRSAQKpGGs43tzPTLXY3J8gM7Jj6CW6Mn5grVEvSAHdmFR",
  "key24": "61WnmLbA1Bh3EnjPLfxL4fg5QduSPRL5FUnNze2KGGmAtUv5JUgzTuPdMXW2d7snBfujsjZp57sjc3ZEbEtmbPSa",
  "key25": "jJWFyhygytELxA4a1xNNzubUpTSeCqMTgPXzVERv1opb9vKraDHvcjHnHsL2d7StJma5UkmHbQCRGx5zxLsuEhX",
  "key26": "3BFxmGVLmU4cgyUcNmbEzjp39BwL4vtMLCBH12wtxXpnEAWqpw8G51SKZgKAqmWnUqyJqAByqznZz8b7XP2RQNwM",
  "key27": "28hFfrK4GpWfNA9WPd8bcgn1xLQkDVkYN4QTZ6R3dUjYNiHQvbPJbGHpKX2x1ZaQm6aTxGTyaAvwSYVMYtUwveWM",
  "key28": "4sz9aga2bDiff3ZaKDEicCssFnkuMrQFDLzf4q2WzS1HvGCWYZmotM59S1VF5HX9wt6k2hrm9jB4iU3M8MxJZtGu",
  "key29": "2FFrw2AYRCej3WswWoUUzP2JqQiS5mc9FH7puXR7aeLCCSYuf55Z4iHU2yQrMsNq8NsUmgyu6wo1AzpW6MwktqYB",
  "key30": "5kkqkvSBzFw4CyuBrbyx7WFty3KfwbV8G2KYds3FGkLKUcQUDyk1g7xJetz2S2Bhm5hmbvhFGGER1ZzeqRNoXvcB",
  "key31": "3rTZjkyps8EkYmUhjY4ZKN1iu62Dts8jPv1NkK7CrN13fTywdFxyETRE6vpcbzE9jWGJYFsQyQaUcDnn2VVa5W6k",
  "key32": "2cohDF7ugNjnJsYnkj379W4dPWmKB1o9SXNaaXwBtgFRe7jiLUGPvwmvTE1Z9DEbJRm7RcokAzPsjwR4dsyvDgFZ",
  "key33": "4V9LSeqjxzVnKZ8XHfua4KeY5HfQ5PAZyhTY1qBtpqSRTmXuCz5Euf8wwVDsdhA7HcUizha5v67fxHsFJPoo7KAT",
  "key34": "5ZRKAkMuboUzW8tVwo2BVv1cifizxifqDLEdFBehrLtAfNAabEHty78zUZCsijyv8e1saa3h3DXWPrxjqkhBmQD",
  "key35": "3thyPnAis8wcGRqiBfBJhLfU8YcrauTzDKzYoCr8M9trAHqMxFMjoY8PZHWGhPjFBAuDoLajN9N3nEJfUxqBf6zi",
  "key36": "32qxMLqaB2N8GDqWWwc9tUmpXkYxvjD3nRKBaTHiWTcDPg8X8WrFiBEWHx9xCFBxxmoC7woCzVtY2jbyqmqBb3hK",
  "key37": "42WAtogGV51nXvQA8osPjT1dpygSiPqHpXXfWTftudgH2knH6FH6ouhmNHp3CwNVpFbeL3gBphuyCNrLHsMqawKk",
  "key38": "5RWt9MQ7cFErXsp7nxnp6CUDRkyDCn5n6JdH6DjhJtp9ded9hisUGvmoX5a5ZXuKZthGWEiq12AyBjwE3fFcDKcF",
  "key39": "3dyd5epKXqQrWwQcdjXCRgGuUNw3GhqkqQgmEGQV1agpNLeHCgjWEUCwKiRVisN7BugnKNdboNa9WJvsYL5zdZVo",
  "key40": "Ft95qboN2RNKsXNCZtSktWrtq5733Q6Ck6i4shfn1qcX16sKDGUL2nKWo3ywXt4HEZosyH5QTykbyiunt5BmxJY",
  "key41": "2NdU3X3JDzjWMSFhTKHcmdrq31rQjqVFjjNzgvruFP37wxj5yoR426pHZxrcR7iZiXeeRNxvE6d8aAJjktoPTEiz",
  "key42": "3M8eW413LmqiEeA9onxGVaNJKgy1k44Z3urVraMY1TeSsgKocQUXLSn7SaPGY7L6DYPpWf3odJj1DDLeLuySH4yj",
  "key43": "4jr6GZ9oo5fZcWqBFKSLVeidwgtmyyKdL7J65arPHyKT2Mef2suz87mEn5WcXTXnmkVXn1muK1YoPvGh2kG9rTm8",
  "key44": "3ZCDyUimagAXMWk43CfcXU7bagnWTVrNBEb51cTBJZuX8zYnxcZ2NbiUeHN64LKHLkg2mVbm7jVvZanHnwd7qTNq",
  "key45": "2D8n2aSToF4Sik1twpaHQAmywfEiV8n57GpV9MMA6Qb7o8VPCXhPYyHMsTYd6TDwV7nvK1gtuxJUTZ74vKF1st9r",
  "key46": "yBw88w14Fq8RLVnqGUEkXCtp5JZxMFg91SNfiqknqyHKDBPxPYKVG1d2sCe378gmn2thY4rZn7SexdVQQ8CMJS6",
  "key47": "4vmCua5SgbHNS8yeeXSoVeepXL9MFJXB41qA9djH1SMEqo9K11WFeUBopfcaeBz9qeNMsVCvMrrC295prSuV2xeE",
  "key48": "3rn1Gd367vDxgSqMJKDTDcnmAmcWfTVPPYm8MgQp7B9jYp1wmeBMNDQzMJUCiMbY1yd8n88Qvv2wCkhsVuFHb5WF"
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
