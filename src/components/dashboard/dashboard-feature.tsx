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
    "tPCXnLRp4M8sNGUiWZEDzWbAbHZCfB7LWzMt3z67zws5rLvndPQc7wsJafze9StFTMSX3UZmSqPYLGVUEGJG7qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cwAX1HH5hF2cq3uLDEUVwjeXXsig9gecpqcUkynXbbtScMxJSRhJVgDvaFajr1B4NTSwEM1hBMrvfHNWBmxE98",
  "key1": "5aqFwCT8Y7cvDERGgUWyA1uW6cetfL4QxRxvaL3cjKwsw9kAKQtZHc58VVPpfQUh9LG8j91peZEpbA3ZgMQcHEiu",
  "key2": "5rJhpBX9WSrdTyVevZVG8w3Ddp6AtMtiaQN5CtbS9RkGTwfzq4RPUz6YDJtKeYFZXAFKixLbX1zzdX2XSG7ypPt6",
  "key3": "4arc9WbzosU8JThQn4N3JqfXT7kgxbn2BjzTyUntzTRNE1cdkaRdBFPE8UFN7Tvu67ebhn7qLoeTopMziM758BFH",
  "key4": "4NHPPdLZsXcQZikXnVYvSLJtPztukpa1qMnPo3kNq8fxPUP6shgeD2XDk4Eb9VvDZPiAhASktZpgpLrPGmxJbdqR",
  "key5": "3CBq8zNsSh2Xx89Ao6TMBXtNCy52evmnWQZJE4wKzZ5hJJEZdaqeXWyUHy6Tx5NJMCFMzk4e6Cs5ZWCJzRvUq2si",
  "key6": "5XS8KZLDfm9YjnzGc1pRVHJmiJzAUTPK6KWw1dD9reCdQD2FhPPiPyg1QFP7Xmg9dTw6x8HoJEntCV9A8FjPHcuD",
  "key7": "4MjWmNoeSBjR8Y2mihtNPGzmQF37DqD83ehk5vfUJDtDpNgG4dxcQfEtb4woBG9nP8wEijvmij6kF7UsKBMk94bW",
  "key8": "2LoYoDfm3HiPd3FnQPDeCb1bw4kdfSVxFLiT9w6icqSqbxckdRGntt3WiFMjVEM1Y5MZHKLGZ3wmpcYxdnY3hTWW",
  "key9": "3ZKogYfhunVxroKPQjJQtXv4XYBjArQ2pn1XHEkjaapPGU9VmLv7pnqSqNj9nKnGd9RFg1YK4NLXUdb2Yh8tUdnR",
  "key10": "2qhRYXx5p9Ru1Qzuv3YmraHWxA7jqCzJjjSgLJVtBoMxHikYqe1KfHesZfCRgqjCd4MB32CTPLtmrkHF59KKENMK",
  "key11": "3YhkKSz9XXL6XNZ5C8ueRrmTW3Kh4iRd8VhQ5dQHoqQxc1jozLiVTpe6azNALffnGqyVEVckXyPP2iKxBZaqBwVc",
  "key12": "4TpC7D8RZzs3UsYfvUtZTEgFpA28q9MQg5i7baLEjZmqBwRxJ1uNhNyfdQLoQLRpjqBKJgB6W1Zw7gzRLd8QqLL2",
  "key13": "gyafFcmK5xDZ4Gpd36U9RiMcpKmhNfMxJyqnd9nKLwXtQHEHTg7LFRrcLes28ZcmLuxru3fBN6Dpakm2bEeDSQp",
  "key14": "2uF4qMvqwncVSaYH1vnUgKQqVLwYGEJ3VSPLyx82wvLpnxnzJUYfdfMLpBANxMfh7PuttuEAeUZyKbCYtcMCU5ee",
  "key15": "5rnL887PbvWRX98N4wYEDdiWucMJNunCCSe5nxsCxJsXoBuK3UvCchnq715Qkk5YkprSN22ENZrp4AuWHy7B8W2v",
  "key16": "4WQHNgyWx1vAzZ1zoZqc4S8fNanePMzaX3SrmdspQ8ejPVFpNpoTe1sopa5oBJT8e8wTtnSnoghpAZaxWEjr56FZ",
  "key17": "4hTPKLQaGeYjQu8hAZMUXaDwaPuwCr4eTM3grqC4oRGRbJAF3Dbppxjr5wqbRc5W5WWShEbozKpYU3kXzUWcDYrc",
  "key18": "5EGL22zK7Nv2GtxLbXxPSCM57L5yG7Goy6pQaw3LbvyH3oo6KcXvA1uRbsouwkEM1BGD7W5JAnB9KRKcPEf7XkvR",
  "key19": "3MKTL76KF6sKyGtJdUwD4vPtoNkvuDqZpgZGnq7r9BQU4UgbRm6PamYmNd5S2JJwAceBaeHsDA1SuiuG9a5CeVE8",
  "key20": "3DiLy4RhgQAD1oF6cR5kR3nkpv8GWH37TAMTg1gNeqmA8ZEXwjp96rQhMzw8HoUoTrKRqxqtSWkT9gWfSXNGXbYM",
  "key21": "4Z8oqqETS4Gst2y5V8UnqZaZhcVhQuow618zRaeL4iJk6Tv9jXPEm3CzkRER6PXHcwWzD3avoQ8oFEyz1mwxAxqc",
  "key22": "2FvVknrLq6j1WDBhZVNwqzrPsFAc6AuqcZqPphvssoevdZRsE2zyW4wDm6mn4Q7hzcyasinvLtNDpUBSex7ZXFJ6",
  "key23": "3Gsu8nZSP36sTQJyueCXsEJZSqW8jJBSAPe9KobUsLgDw1uDdYMnYFQrFLqWjV5zpLx6QPiHikHzYTdrBjPsEdFz",
  "key24": "4TLnZMtTCG8sRePDGoWbTyYyQEdFPGzxQei1ecDUyPMsp4tv1YaFzw7TKQk17CgMgnvZpCT9TyFkpykPSZXwqChC",
  "key25": "612nu2WVvjzEv8PMfSQeZjxKUP2VGNsyHjaGyYtWRmLBm8bCPyjZWWRP3Hy3661LR92KNLV9eDT4WCqksu5CkrP",
  "key26": "5kdkVAsk3aAVhdefSkgg4BFcawSuioUM3BH5iRGvGawETQUQ1qDLfa2gZZaHBZGas2zjLwco6DX3X3fGV9k7peoU",
  "key27": "3fMx3p4eKxoxAWYoDYVLwQabb8Fr2h8q3Bk7phqocTxtL6CDH4hUZFhLEAEG2PMUvfxzFYQuoLjmw8uofEwRh7wf",
  "key28": "nZwPx25qUbjsaTLfDSgf4pizwg3r8KRf9frBiyBK76JGfUewvVXMCDrTsFmXAwoaYCoorZuur9N8gsWbkqnDaw5",
  "key29": "3WM2pGJy9Zt1CbG91QYfCamgrR5dCASG1rgEeG997Yqk1LP352PBFaGmLZNRoZdNiPoMcm2t5U8QXabuTVjQt6rC",
  "key30": "3gMfzUjddWFUxpFTNJTCU2nTN4Y1ACfwuixPPc41xFrVPsh6CyHF3543sbtpejQ7qA3YkuQ6uxWb8dK3dS1HEgxV",
  "key31": "3am8v4MCK8nxj1uZQhVKBPje5eTA1ahVQHwhzCBtbhj7BMxQfjKzCfFhfm2KNSrrM6RzHu8fhab3aQhV7k6FhRVf",
  "key32": "3Z6cPyRpS2AkLtn7o1SMZJf5wZKiLf5KiGFyFpGVgwNksJkNj6LeLbkdiPaCKoA5qVYofMviKEQxt5CDDBCiRbhN",
  "key33": "2XkSxUT9dNqsD6gkyhKEMpKb4fGvBfYGpbaT3outouWNurVrn4nWBYJYf9gC2MPDM8L6k8qiLxckkMiKq6p6Udi",
  "key34": "pvthZuaHLVEtnhagpYA79f78aRP19uv61TK5WYvPpKmAea6e9Fxr5DBuy3trmr4pEjkrPhnUXJJBsXour1taZp8",
  "key35": "3pVYitkC3PngAVFWjt3vx8y7oWnVgo4FhRJu1Doeu2aLPQjHCivahGipfoeJCJCXMsRYFfZPw9Diq3cSUnPgEmj8",
  "key36": "5uB4sv36xcV8FsnWuLLCqZp7KyhZ2GxoasawkG5vYMNHitynfUZrm5PM3oLsF5hKcRpHGryVWiikFZrSeeEo7wWA",
  "key37": "3XJeroHR5o9MWmWuUe6myoJBJvkJu8FFuEUkzvinnkRMZ3Eaj7vN5FBLb9kuGaqkMDWuQCcVtNXVEBKWtE3mdcrG",
  "key38": "5R8hhbMhLXDnZwyxVykXptxx2UjiqtvecBNLpVpQXxWHJPAJFbBm133U8Mkn8bB5XsXFSm8BvwxR35xomi4iB1qz",
  "key39": "5qVgSqxuURPGF61iJzeUjNKHrpg1iAo3kxqS65YsDkmLKDNtjxRMtsfdaC2FxoRKW35DZvoUvBxbDWFk57sEharJ",
  "key40": "3PmDWcdFizAbNY7ojr1hPvWofrZQUKispnqRBbTnvooCJNZvPGvTtTGKFxfzwYcRnune8FPiv3XhvneQnCGN9htW",
  "key41": "8Z7HB1F3jBVNLjXEcQdoeZkMyvozjvFfrQ4LPz3UyDunLyZ9oH3gChoaZ19SyLEM5xJehs2Lq2bXprEU1jgePnf",
  "key42": "66gvEgGQiS8v3HQMsNE1HMM7N4YoNfkuYts6JCs8p1NjfmvoJcqh3U8BSpn2qEUKrJnbDd9GfV9PNZb2i3Vmpdc3",
  "key43": "3pQL2zVtKUe9Mvj25BbA9GhzJ3mLJhBWYG8wbpqWpGjSoLVVa92svfy5f6XV3kCgnqyYyUs3T5EdqTfMockiJiXy",
  "key44": "2AULrsumABRZcGyNKjH799n2LNqzs7fozKp1553K8mjmEt8AyWaipeHqrc1fwrejj6KpBkqaXycaMiWvhSGKFa96",
  "key45": "5PgqiL12bbpV6FS3DAfeuXswQZ2KoWhwueDLVYSny7bGAi1ndmHHmCo2paaFAMvGiQBtP59zrwSRJf6AGfb5ieHr",
  "key46": "3fTDfRqLg9a15HFikKEK45LXpmd9fRrWCh8r3ynLC5doMYMN5JxpNzGeuUPQBfwcxS3SEwbWBayhnKtz6fzSFWAr",
  "key47": "42XqfqkNkE9ccefUoPJpyhmALRRYCRm6wRYgwofia1ZtAoXFHHzk2i7hnx8fVxbkoHWTL2bFsWEKKKQmNvT2syBv"
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
