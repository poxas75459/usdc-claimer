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
    "5nC4yFyfBUf5bgSGVzN6DHvtnZUuvBNy7aBb5CVvtN7vsM4TXci2LyrZuy1dzYszwMM6aAgHeLB6VaPutFbEqE4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9c1z7FpkKXvmMWj4CRWWZDVzYSkgJaVgTjZ9NcLgoUXNxJAsgn6hYqX967gSff5uxpfKgcrzwbuGhs1hYUHkMC",
  "key1": "4o2oXmCn5w6LyJYcHACTHb8U8NmKr4KdcjurV8xQCWMzi9JAsYFnLeZkVF7smyvz31rfUwZw3Jf9W3ojD7wdcV3M",
  "key2": "46x2RJXdJnKiktXgzwBGcK1YabmFn5KPigcz6vABbj7Yn1U86vfzSVagQc5LSFwyoHySS2EZBscDq8V4mkyDJ4fQ",
  "key3": "5eK1KkRLv2nCQsPuAecWcqan9N47gMxNsqcMQsz6QoeQLZ1QbZ8C1GHnUmpchS5ZqDkr9gzPERHbrLkU9aW67sgk",
  "key4": "5jQ2wvDZwcjLJLwJsT1k9piNESUUhcBoeeixT2pkDavZeoMckKXudkypcdpF785HgrdFKTyyvdTpR3icytkP4dJL",
  "key5": "5SBEoZFiJarJjwP5XQhP7Re1ebe5GL9jBGAHh8WfcFfLX8VSv3GLW99L2ewrsZSrnpmpyj7ix5Fd4E56LzRvE2dp",
  "key6": "53GW3dYd65JGoPDbW4kpqsWtxoKsHcyiU136RNxtiyDSNWj3tWZGwXyDFku9M1PCtrwy9Vgm8JTFRTJgmE7KhsSP",
  "key7": "2ThNJtcCbzJJ1gHuPi3URWdYrRKz4pkcnqJFdesqgrRywofwHYaBnuRfpRNmpCLbYJtuTB21QHiYk2DHAGw84KqB",
  "key8": "4PF6mM9tXkKqUffHUtiVA2zpyW6FdRYnZwPghjCP7PNmnceTcdKm9aYXkui4yhZFfTMAtepKcbztra8648mmMgcT",
  "key9": "4zHQGvvPezGzSkxqwMPsFnu4VCz7BPR6aAKuRZT3ncUJDzepYDK1mzd1H3QKgvELxEU9j1jDgNqpBJRvwpU3Kiy8",
  "key10": "5UYGbLuxnE57Emh143SCujT94XU8UtuzaFZCwNh4hNAyK7fYhjKN9jTTjMdFHeuzsEpFBJLHTN1hxmJdn2hE67xh",
  "key11": "5iTgfgRiAiuoEMq3odw6dMUV9QZU3PvVfg9hHHxkEiaJ8TJLYg4fnDArPadiNvXxmaBrYLnrh84XtmxfNBEaqhKW",
  "key12": "4DJ2z48NH91LNEffTaA4dKtToZzD8jyLUaLjWN49hnkQHgy9uPuWPSDniKAcHQMvQqrbjf7h2Q4RgCWvLqhQzMc8",
  "key13": "5Ka4X9oPUsvzMWTVNsqUL7bW4k8e5yGXYX1MTvCaXQKNtU1r2fcaD27MiqaSfuNthPcTSvSKArnWECbpdcxsTwMQ",
  "key14": "5VToJUQPZqrV9TEGUH1iFZ33oQEgyS51FqXNhrRw6GonxqQVJmL2StwfntnhKh8FKaTvt2ZEDgUKwpT8hmNhKHHR",
  "key15": "8Ndj2PTHwJv3kFCgRWhgiQ8voA2dL5toondn6V9SYUXWeqcDDTHjZLvaZ9gNhTGrxecThjNPZ55iCi3HnRsv38Y",
  "key16": "2Au8fpB6FsZ9Bk8N1XToLVTEE12A7MzRD2CXyEZGTPtD4aSTeGKbyWN85FBbjW7kRWwPn1JFxzJMEYGfNP6rAUXA",
  "key17": "BBobwwBAgXs8Jq1omc4X8Yn4ZPECFk6b4PH99Th7QEFPmUgzVDxquE4kE6cq7Ti7EPmYoGyu9SdjzvbbrxzQ2pb",
  "key18": "5zm54v9fBQq6xehaS861Q8YaCARtcHdVzMQjhjuhqnjKVPwT8PsEHmBcbgZMnQdHe4nXKJQgpo6xBYQ3R9n8wnGw",
  "key19": "4S9NyvzvbSz2CDgwbBnpTnGiZpH2Rkjh2VuYevVZ38sspANytQ5GjWPm7B55hWvRWNfHx4ZdLQ2xfJ9a7oindyYw",
  "key20": "5YJFxjBJBa6YGBhykJN1AozxFr17LUfta24GttJFuGni3GycAfMRuWXVWJGEBEVxNn2e7EmpK3w87dj5mBE8tam8",
  "key21": "p8ae4KGZvuSwqQX6pyjhdosEekzvoLgXeLUf9Gpr5B5ccKyBft7sFXoyyYGifdPZjAKoRrtLVEzq9eWWgpLVQXm",
  "key22": "65fUxW8wv2RSqmasmRuHKXR7e8kdpANzWFVynTQB9ogNHPt5kumo2ZKH8FD9i2GQwP3GHr4Q55iKdWoYKb6asgDe",
  "key23": "35oaNehxxruf5LSRHMYfaiRquVqTQTMEEJZCWg9gqNmrytfnaR7YZNskv79Pgi3L2wqAKLY5jSepkKisKtzCsyHK",
  "key24": "2G1JfdXsu7sjz64wA6yespWBwXEf8rcKmARmpbQbx7SqDyZFpTcHBKC1fmTvNbn9KxAmX8UBrvZdDUGaCLpjoA4E",
  "key25": "3Vqi5xHTNdzekhzRS6t4YpQkQmzZ1FxZc5o89XspXqT2MxEJ5U47vTcbwBfRz8qMiFPF9xuWy8uKyUWp5epLWt3X",
  "key26": "2tXa5QE388UHTj8wyt9kS9Ni6Upm54gYXMFdiZjMLmsear66BEU5G96AtUGYgU4B9RLLUvPaGNXiVSF9dzsn3b9k",
  "key27": "2NsBBq15XUXev6SBs8bQucygxmcZCr9bC5EDkkjMdtJbdiSLLtEXkqGApfbZu586LXp1ai3nvKXBeR6FfRUFz3Rh",
  "key28": "4N8HbJWJ56vMLdM35q3sLi1mU4vZR4vgkovc6ZbebGUT43urY8162mdswQPxK3BANjwKWiVJUtFyUFU2khvtPQFu"
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
