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
    "YAJtrPqcg3HmhgGYWJjB1JjS95Awc3upqtERwvuRfWgSf1gPrd8Xm7rx3X9H6DaLZ5Tm6AsZUFrK4fYXdwXpKCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XcTt5iXeU9AygkBgaeVVb9BKneurpSe3SJADB6axNY1AZxvjZ5C8wwivwQ1T5tD4csPNYzq9sCuDi4fx6bLCdtR",
  "key1": "5BKPcjkuA8TJ5iQwwn77W335nAuNK66g7GpzcQuXiAVxEZvAaeQa8XcGtRFhFAFrCdANFeFHjTKP2EfqQCMZiZU3",
  "key2": "4rEBzueA8FxpYeV8L7JNGXt5yZQxphJpbC5NezBYCnf9eHsbp7KgVwGhycWoFvEPUCg2shE8898mRvE7E6tU1YAS",
  "key3": "32JUrcEVLRAM9b6UDYeoBq8y5tWy745a6b3Fen8vxWqwFEDkEW6mNnWLSEWKo9AMbJWa5gJwAGpfiZvQ1uBRCHLT",
  "key4": "5VvHJ9xHwyPrA12MrnqsnbdHzq2i2DWPD2rzeP4sJPnJygoBmow7sZ3LRNvi46hKdTkHatoboJkjCi4AyoPFh7yA",
  "key5": "yGocdRgfL8Bc4TYq24j3FUn5KCFwD8J52UBxRqPmLJrcDVDVjH4kC3AddNDCfR1iY7AyZYJtZDgkDEzTewgxeMN",
  "key6": "5Kb5EhuSsYrrZr166UJ7n5VB1uV2RNsxCgdcoNxgxtf95QN6nRg44EJHeAau14CSuZeSeWVGwrDmx1HizH2BTqya",
  "key7": "3LQaCzyReWoPyoX5n1EQHPr339YnKn41BEWezJpGihFikS3L3LuST6DSxQPpf92Uf1jZp4eBi8e6TmGh8NJLf4pP",
  "key8": "56BXMsmNsz175zwwGqzexaxb1rc3jVNG4oshSwPARogvHenckb2fcoBhXw8GezLF1gviHUrxanFGcewxzmYCmBUi",
  "key9": "3xraSfG6avdkLnG2BAKdhQmLuMbxm8vggziQgWEEf4NBykqMA1c3FUeLwXjrRriHY9HHtqC9xDE7Jc1FNV8WgMdb",
  "key10": "YwpaKRrMeMUg2Bbmfbr5YaWAmcTEeP2zXiY4xx6Sb8Pa2n3D5MLEoXj91PBy8pJ7RkLk6e7uzHTDeuHPyqSighQ",
  "key11": "4RWwZ2wtReJ4Ep1BEbJTohWQR9hZdigC6GAcbpYZ7Q3YqbcEkD28FZYDzh8YEyJZX6v9eSP6ZKKJ7A6MPYRR6Dxz",
  "key12": "2nJmcv7GcTnxoFQaKHFNV9iadmG7YKT8Y6YwZoD3CqDG3BziRoVzoE5cbcBcX9kHtFaPXp9LtzoyJThYyU7UEv5o",
  "key13": "4gzUBqsJ5FeWY6pLwnccEaBwuRR7Rbt5znEi1a5m2UtHhKb3xmEiWkCDfvG7HqqZkfjQmMe8Ct3tTdrBjWqHdcnm",
  "key14": "3HSxWBdNdKtcQ1wCdbJKo2PJbvAQWsEX1u9PmxxJT7frvprFty8pLRw8t2SniFZYjbBxn22e2CW48LAKP1CcYcf",
  "key15": "5oJ3uKWpU3p6GboXFWu79yRes5TDsHcYGmMBaaKdPjPEnWiLTKUqhH6o9fw6CqYNMbFt2e7AhuF9cCDM8ViJb22u",
  "key16": "3AVGwPJqMHZvrbDFBeg7V6wZXLsya7Doi9msPD5PdeuaSSDavsC13Tx3VVyHfGmffdRP7nPYqFBy4oqdQejDoQTE",
  "key17": "2AWkMzmA5QfdV8XsNsVPK3KPrrh7pjaHHpiSFTwNs6jtTKehPCZPa3nZWaDb3iteGRS5dhDm52BBiKigrzEFP7ag",
  "key18": "2UuiyRToy2HbzKfyY5LrZHUhhFUZ5Ah8nhWcXny7y98yLSbgVP6isSEriZECz6GhC5rjEGyJNsAwrGqqTpnHu4zD",
  "key19": "biDNH7sKvQi5AHN5ehNF3BPP2RLnhT59dZLJhrTGm55WCNzr1A2xTwJ43SA1Xqk8ZQh8skdfg79zL5wc9vn94E2",
  "key20": "2VGedVYbgWkwJTAvUKBXkzP4X78J2jY9bePmeGQaMHgh5UAxTChZW31XovJVTr9Gs34gwRqYfTQUsZXmisDCZhyh",
  "key21": "4fPP5Z8Rj7e61MTapErP7AK8rvbNd54qUbDh3gQu7xpxK8UpSeCZLdv73pr9LkWaQ9MHmbdACpBX53dAhhV76jsz",
  "key22": "3VxtiP8fFYR2vYjgAPoxYpy1ooF2xHi2Xb5BY3Gjm68bHjdGhWMw7obPau2tKTTneSZ1Pr73DkfquU9bMEqA9feU",
  "key23": "a3PqoZEAE8SgJd2jyqSCX6WawW4Ju4bJ7gbGh8kqtrXqtj9BnvzgzoRkJi9gmUXnXb47yxA3PyejFE1n3Cn1Mbr",
  "key24": "ZcvRECwkNv3av4JxoNqnNLDvzb4WTx9T4Lk2Aix8F67YmAF1z44dw4obWa6dzmvKCm3HPB61kiQbUAZNXsQVMAg",
  "key25": "3xDecec47LJhRrM15G8f2dfsFQDQr84zi9E8XwMGwQmX7hpbcNX6fSshbdArsKTb9rd7qwgm9FyLDMbx4oSbj9c4",
  "key26": "tdqgPP7pFDiSvWJkmWi1umNmQzxT7RNVq3majgBFxHmcvY8MSSytYCpWxzzV6tGLNojveLiwRkKcW6wvTg94Mo9",
  "key27": "HXQmoT6zeNGnAHZsbL5kVet6LnmpZ1TrHuJtiqZwaNr3kMLHX9FafsiGp6sLeXgziEdXiVbqZgN9noioEspZ42A",
  "key28": "66tLFaSgwGxzkDbFds6e2qqGquMcJViHpFPgArvV9zGppS8SRa27ZBqL5xQTRZdLwHbATRb6mQykH9dg7zJKP4pB",
  "key29": "48XWNFePbYjfjbFWG5MTZGfyf8Pz7JSP4MwYGjVX3QHgL8GcNGtU5TCpBvhiNUUmgQiJv6TBoiJBBLku24GHcGXd",
  "key30": "4ZXZPzFgJ7q26w2aUzNYQvpvZU6dMoqnAUXQFQE3xrSv1uRa3iWTnjwNuRPcUN2FtoixshbnRLUMUfYDdgXcDwZM",
  "key31": "3WhuQw6mXsbdYQpa2tjV8uJBoV1DgzxyHmqPgLmhJ1aaufvcH8VGadszQLhmeNCTzddtC5PHfHCyVrYj176TZ186",
  "key32": "3rjpaR9efDnjEWXmZoiow7LdWYUBvBhqr9kNUbGuQFQM5jRUCrARtY1gvtkDfTMGGw371aRz14tWmPh4ZH8KcxJe",
  "key33": "4djPJC2Ctf7kfcmvYvDwRBRwvwUg5tcVbLVr7MEmaN19mYYFKiJzuShZH48g1oWPG5xvfSAme2ait9xf7RiGjDq",
  "key34": "36qA4z3k6CnVebvWbAFAxtWcnK85Hjf59iD7ozXEeJjeG5dqwTbvWQHntnXJ67k63BgTsy189GCc13xH6bq5X8a1"
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
