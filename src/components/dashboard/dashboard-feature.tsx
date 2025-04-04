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
    "AtUbVf3zjiK8BkwzVwQwQTJKvdYF6Bmu1CJ8eGhiou7zQ2KcMBdF9a9U8MDhQd9gvVQ94CFEktQ2Ct6QwWQYZed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rt4NJ2YEXH8o3RzCXJ3pxEbQbq4b6NqW1v9FFsQFDRxnVRiiPjTqPg3t3iHyMaVpmJW2eKkewTUogkAWW5eqX2n",
  "key1": "5QBCKL3VNLxtqD7NtmCbyLjHaAHMk2gzNRidaPv3QtXW5B4FiwMyqa6j2Jorac2WrEvRLj6xvHsUWwK27iP2t5Ak",
  "key2": "2GVmF5DZJWz1Psc8snLvKgAVcbs7JDXHhCVWYRerUCstrS8qaBABZ6BJmjZukCtUByXvVtB6JqYeVTX5TU2xcyns",
  "key3": "5Hh24ac16mMCDc6gkFeMeN6D86BjGGwqvR35CzeMxakV7V4EgcyNErYEZyUKdhxgbihS1WHCTat8MKPQm2VdAZDG",
  "key4": "5P4syQnLMS4KvboWdrq9B9YMwtdd3pq1VBA8qtMbqYUPYBMNRQM9qs7EWyhXu9S9iqg8B9CXRRVVXRfTe3mZG4zH",
  "key5": "2ynqYwbXdjgVXHf1RAwpeokMyrdbcgXCnKfj8TZ32ziaRykT5W1AH3mbJrTq8W4mhsuhrfJn43pmKCKsFSSgprq7",
  "key6": "53u2YcYu145vnhNuSujyNwtBbBxaGsGjUTb2WKxqbqmfsShQZXFTQz45kAxrHioKr11LxW49LMjQNVyM8EiKceBD",
  "key7": "66Vrfp9L6wTxCJzG8FQrXv7Spidx2J2TLsQtruen2kesCNSDUXf8YcH8WB1x2TG4Nz3xeWdYLmtq1eXqkqx6iefE",
  "key8": "3pRJBtuww3QZ2ChaACXE8XBzjdAkbTXJVqUTa7atEvwV4jqZqFpMRBiwCDecqgVjE2k2aPNqKLhs6SwAa8x7WebC",
  "key9": "2q6PGigTE8pKpNvyJTGb6K6AT2js4XPZFTeTSuAxfKiHWP6vkLcbmu584gPeJ6tPZAWWnRKiBnJnt3wMxPnYSNfv",
  "key10": "63za9PowTcAA6oM9BMb196YogAHvZtRgp6iJV1j8vK7rhdStk9CcEhpmMeEvETXsM74Zqssjy6P4tVQ22enPFDc2",
  "key11": "4D8z6AbqWLtZx7sLdLhD9hjoMHCgKa8c2tCrwVsUSn6q6zZG129cKxoedo8EhR6s6K9N4vY5BnPdTkg3N6awahjp",
  "key12": "5d3TkNZLpi6CK3iX9G66tuLmRFYd1rorQ9znTyCYAcHXpgzHebMpThNZhanmPYSLU1cCeCycEiY1ni1ttLvL7KYX",
  "key13": "44zLMDTi1nx6WkBCRZYGSvRtq61hyLHGPnFxMJwsgmHguvt1mqQ8SziQWiohHSWCFLGADzQgSaZcRGswNukvqAmz",
  "key14": "oDWXHGpdsuY3AuRmvYkyR8Tnucub4P7bz4bVhje3ZYJCV79iUkC736RxQqVtoQJmXJzdmDLUHUJZL1q7d33fRFn",
  "key15": "51CcWabUNCgxhnwAXXBkQDqth6HmVZhGGGgSYyqckghCezSsHWc3e8whhAUhpvLoHU24ZpPRs8ZGt9zYMRpDwGvN",
  "key16": "56enzbohARYuP7Gw1JjT5j68ufHmH9pGfwyiX5V8o1WCnfhy27XhKn85QR7GEY3GaemMtHCeL5fvnJwwDRamtuby",
  "key17": "5nDQmNSbUqEhytJd9Bva76CfduvhnyzSSDrMCJy19Li7Sv586Nv5eDJVMoE3kvmuhACy9UBKCRDCbBsnhxE1DzDz",
  "key18": "3HjtPbEsD3j3uS7BmvpKMEke6Yc9iz2hCUSb6fiPFsTcp6XmLT5QEaxHt114hvdi9bwoX5996Pih8h4JfBmwaKtw",
  "key19": "4oHr4KnbaN3Eea9M4DSufbJHH6avcMxx4mLudvMvS6ytUyK7RT2nugYBzSdanKJTogbtAaDBhcMbUQbVCNzVQhq5",
  "key20": "2e3oSDjG6L2KTDnUmfwqBhbPnuNGJJhChGPQmzKQEcFeupo5WpNEaVrERFN6zWfDQ1vcfWbw4BPd5n6a92ZjpLvS",
  "key21": "3yH3eHaLsr1LAhAF9Faeb7dP21g7WxG5LXyYPuCxEWGm47XbkrtymUZRzwnSiMqZW5aC8eeNZ71jKRZJG9fgSzvm",
  "key22": "5oAu7M3hkuqMR1zQvbfCMwpC94vXogr7ecTmT4L2HoqVdQ46hfgyKYzf6xCZ7Ansccmn6ggha6rRRoXe4GB37BmS",
  "key23": "5TmtzdLt9cy4NHXu3vXJvdUCjQvfHutaS1HctgHYFLWaf8bCm1PxeR47QaCBwRjH5TCbVuDZtvA4w5hQQ7McsRyq",
  "key24": "4UcuRFqhvi2vG1uckzVcMuS1o4NsTPbok2eUS2g8kG8yc3EdsbbjR4mshHbP8tATKEfwFojinkbjEQrGfKDDgs2s",
  "key25": "2ysHPQ5QbYNyViYKMs5E41uX8b7KJ5iQFUjFvBVBuhcherM5ywWNGkyUasvSi1nJmHW9Vj8KTCNSZzr6L3Q26y9C",
  "key26": "3Db4Q4ZZSk5Hr8HjtBSWwZA7HundDkM9RMm38oUqWCiebWsq7zBS44MDzEEcTUr5PC7KPe8drbsX9cdZmf3DpcWG",
  "key27": "ri7uzj1nTGeuSnxsGE56tCj9VyLM1aVfwjvepCgPhhXMThsW3i6LeWERfU1ukLbS63Mzfx4r3qKSxi8YYKGW4YM",
  "key28": "5mSstj8VBJeFxxefump4i1mgaz5SybnrWvPxpPpVCa9Vz5H2z7xMXyDtdz7PzviiKetYpV2Th3b9hFboKRvkbpz1",
  "key29": "DyP84ZZB7ozMnjRnMDBJiSJuqhE6JDNcuMyD87rq9ZWKpax7bbNK7vzkZA6gsEsMxc3hmx8nBaY9f79HEtLusu7",
  "key30": "2dwjL7WKsQfmR75jfFuM6bE2ggmtBJu3CweXyCc5G78C1GSW3wgNL36UoaTkii9p5f1ZHREBoz8szq9SSHy9Xk2m"
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
