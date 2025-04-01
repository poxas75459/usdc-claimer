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
    "4PkiR4tzmcbmce4dkPQ3HygdjX66XG5duGvVLyAW6cUPAVMgkUatZbrh2Zs1SVvECCC6ENijetTYwTa42QCx79PN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4h6KTVjaVGCY6tax9PJqEDxZeoEqX6Zv9ZbTMNHaZBF25xvavKBbpjqtN4jFLzsYob2Y3W54dFgzzwpLc6Soba",
  "key1": "cmCRQcWmWkjZimQuS6E9YPxWiYg46FaCNALb642HhBsRtwEN8GV7eW29TPA3JVPcTC1ocp5eKwJ9ZYin1En7v73",
  "key2": "3pLQmJTyjyNtJ6PYFFDmkqocyXs6Z8YRgAsi77BBaoGXeB5HnNntoPULXnF7Yyrf1TSJJL31JDH19Wev64G6F3Hw",
  "key3": "3GT2EF3YgVXiFWXdLooLzNLigme5R9FV9j9mabvc73bEfs97tXr2hQdBZkcpfTFDqCwpiRcKPPGcBc4XQH8egWoK",
  "key4": "4vfu579pkxwnuXWWfvY29ijK4NGXDaRPdsuTZW2VxQQJXxxfsbGKeCqyb9KN1P4dorYmhJmGtKomf3vSoWJ9CuAo",
  "key5": "2qsBzRnoVByuecsodqT6B7HAfjBE4L2axNoMD1XBQo6GusXP6Uht1Pay95VHQpeamcUEo4X2zxFnHKyyc7SZ2gLe",
  "key6": "WgDFTbXCdNY3cARCED4QrGsJcbCqmkH6UvjfBwWTCmjW79XEeTRaf9EfSQ6BkVfCqy1xKrTvCS41yAuGmJfRwc2",
  "key7": "PEDzSUVu4YxbQMeXeB7NGhBF9yZKqfpqvLHZvbLy8aiur6z1uZUEYMbDSekxp2yDG3ESFdmbhGs4Hnrh5Jycscv",
  "key8": "248DpDkfWppfqudYz5bbdrr4ZU6uRrZECXu4KBvavUgnf5SnN3cZNofkphrrbVwvhYhRJRgnjRhoN8kUmfq33fWf",
  "key9": "3zUwG2zyD71Q5vJrduF5K8MZJpoKguAp9Mc1RTLRfxZcUw6QqB3v3ZtGf8t5SLw5drEeEZRf9ZLnczb3idNwQhmL",
  "key10": "5XTMXXhUWB2tpHrP62yLKpvX51FKiF9SsyEnQDZy9LsS2dE7qsH221hYjH3SkDGoSheeHUoQ6XH9DT6LVv55aur9",
  "key11": "3psTdJ1wwrp8NrMpNiDWMKevGzSomDfGKMC51stpFm17xvAJn1tmUDGUrP8WHacZiStgQ4KT3MdyhcQCrkEeD4Zr",
  "key12": "4uXqXSxpWTzKpxKc1hxJMzrrHWHav7PVNmc46ec81H29Szd18fp15htYwAwFJg7RkqpKGUiWARQJYoSRjbWP6BQA",
  "key13": "5MvpX2FC44nT5Qc6f9mq2kHG2jYqNXzsCgFQZdfFc6nn1eGfA61r4B9RDzsxMuERh956Vc4QiH9cBubN7W1193yC",
  "key14": "EVYaX8ZYL7ZM2La6BzYdDubHgGVuyvQdjrYrfofjt8mnc6WSoaf35zJbsTPST1kN1aKTpRt4LdqWo7MRQTpnLT1",
  "key15": "57GoLVJxKkumNhS5E7kkrbQvdcnESYAskJLQkXAWXMiXBj6g7X6NsnPQDhREGraogVyUyZgRnnSLHfgQBotnBExd",
  "key16": "sPQ5Da9Yb4r6moDpZDbwXqaRvSvswcRvJKXcv3GtNjCwjukWLx2pn38xGehh9mEMRnuC8e4Y3s89ZQsFr764WyG",
  "key17": "592HdwqTCtQpqD56NPjKTLHURnuyQpQiSZ3moteTsVkmJ6LAxc8eZtCaNXDgqZbpaBEcbBvccampRwMu3WWLd3S7",
  "key18": "3cg8PA5K12zpNrgQcwSmBXN25VjzGy5qCnjXqW4AAX9ynPevXn8P8iRDLEViPkQVzRBe6d9U1SVhLW71NTQgfj6D",
  "key19": "3E4xbSfqonLeepQPJgGq34W8KXdkSKv1rsQSd7SAcf37b3nhgFCJRpP46RXwniZvJ1PHU4TwqxxbUTkWHrFzRfg7",
  "key20": "5E5AoxBEX8TA7eq6AcT8H65DwiysdrqF5K7BWr48nio8oCwdJ5Ji6qzk6QiQZ8hCUWUUdKWae6CBMReyxbaqt4c3",
  "key21": "2RyJRFu43MfxY7xEyRmc7KYDAAVP9UNdd3bA3WctMZD4VJZnrim8QsVGx61RNTN7avw8o9FTnYRr6ricE1MHq5jx",
  "key22": "vm3MPEktRAjRjqzRbvPACiJFUofjyXxwjwdVUSNGxbTTPb16RoD3uN33GyKkcTBFL9USY8YX131xkwhJkrVqyxT",
  "key23": "5rbPnn8bwmfP31Xw7VQmrHYpX3oB5aCMaqgRsKR7YshC83eUcLgvE6w3uhDBEH9Yc5tJXUJrh5nyQB8XRyfPoE5Y",
  "key24": "2hUKNwS5u7BfYbhyj78QkVFdxP2rtxMJpsdgAyiHBEx5NhAMnNQdF3yqerX5z74iuC4YQumUmraZGamTRnUXbYPp",
  "key25": "mpGghcqJDMPya24LPTTuZqxdKxj3hSbE1ewDEq4BBAAkzkRgXum5DEVnFiedecGPnGBBZsocBbjBTbdDHrCeFp8"
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
