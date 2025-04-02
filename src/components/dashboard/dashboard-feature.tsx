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
    "3rGTNvdUKb5Lc4TtThUzU7pkVuQBLr4zDpmac7VXvVocduifBEdFdBDHWxjL3jXM1y8qoJBbw9nAL9AGz4HdXKqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPcQkNvsawbhJVsYuPbz8pd72GiEhXUUiBwc1g6eniFPQXycUpUft6Fz3hafJFn98V6QFGcJ9tVxnHjecitMJdz",
  "key1": "3RUB2L74LTQ3BR9VMLMW8TLusPZD3zS81oL8Gos7ms5FiXvwSoFyexxkGH6PQUJZYSmYZ6YjbSi9bUCtMtCn3Wcf",
  "key2": "tBjKASNRSSeTLfpB9m3EycBKRSsukdBVnoED5F48oWz2F8EeN1WnicZagye2URda46z48pVjv9bkXmxMCZpn2PC",
  "key3": "3AWD4UqdQMnGfr7mXkXmKVeDQjMQBv6Cp3HMeSgXaechQMZizqyGe2c4E92eWvPrh5XvFZh4ZxetBpee3omuVMG2",
  "key4": "42rU6TaoJYRgKFqukJQkLNaKeR9gAn7uc6C2JELDff6WpcttVua7PBcjvJotTEpwseoa8uzunNpjmpHqAsPwTPeg",
  "key5": "2y1Zv7zBqFmKHUxQi7P8JDUd7KTWzqzLgvEuDgLpEfrVgemPssSAWBkkj341Y7RrZ456i8rHgj5TaPBo4F5Yciqw",
  "key6": "2sckqFCaLXkLDPvZQXhfQuzdA82K2PXY82mKns1yBTt74Sm8GjDyTdAh3famopnQ4YoJ17pWYHmo2pPsuE3E8qBv",
  "key7": "2NAzoxsvBYv62vKpeyMDHTRkbvqxMU7SdRW6boVxkeQz1q2qP4q2gCjX5shqNRSK6qZqccs9YCWhqWHiCn4rrCPC",
  "key8": "5KcF6FJ12FcXXYkLsXfdrCcFL4ymELECvbDXDp9XnBWbuaNmYZhBy3wzumAtVkXJTnky3KGSoT8niM6AYJDbhrCC",
  "key9": "33xc4RRypwtyzoFSRmezCPW82eyg3PY1SQWdJV3v8qv19T2kiH3W2Mp2n4EMQzv8Tia8jvzEv6ChbugJsNrgjuD2",
  "key10": "BSqBvjpcsYmNp8bKQd8JBWNVStRr91QyszYidKM8TirKastbqXzjfmNEeDg7dPT2EryLWetriuLxnHG7MtrcTnq",
  "key11": "MBUc9TFsKMgopbtPYxMnDhKRarBn57LjMHvbJefbiHf29CMNnpYxChJgfkqGsewg1rv6RU8S5xtDJFf3czk5Pnz",
  "key12": "3G8JLRWHiaSZprUNL1iHixckjY4cZ8eSxdDuJZU3K7be7fheVfXgt67bUxmHE7u293e4uPwsbjZtbhHZARyffdNb",
  "key13": "2kAJexhxNbZiP5zGX8XiUuEd2EfWcHhJyUjtv7v2jQzuBnpaDTGbrKerVYFdbbJJzmbeJxQ125kKRba3DsrmGd1G",
  "key14": "65RwVkJwqdKgqoBqeWeTzKw2Yjsi46TMexAnfkeQuUK9aM5PQmLWLeMzNMBDAKUbBKn6aiTrCba5V4JnrK5hJrbS",
  "key15": "5k5kCVt6LUJnUe9xYttws8EjwsLHuXqcfJrJwRhGqgg2KmRkshCD8kqXiTXZwYCWpZXmYGTt2B9CLkyHyX3kdeR2",
  "key16": "HbjWXnc5HU5ax8cyY3TA2vTkg5ksog5L9urGVuLGYoVVYwJoo5aBvuC9kzyW4Y6E5mPuctsecnw9ngFVjCY16V4",
  "key17": "JkPfX4iUFt7UoGhsi6UiJbGqUB81ivf265jQJoTrgmZE9UKroVUPDmWjEVhUaxYsTPTxdy4YBQpaTXjJw32Nig1",
  "key18": "3jNQu57us5pbDP3WjJ9h7767bV8PtxJJGgC4whEUn31icz8VzxPgiaTDvxz9Xz3a711GBVqx8ZKv1Y9oWKenkXS7",
  "key19": "2752Wen888tuph2KWqnXq5hhrtK7uw3v1Xz1Lo6orP9ErcueanB1DHb5ZJ9g9ep6SD1LuhAoKgp95aSkV7ztTcde",
  "key20": "4i38g3zeB3kNZGpvCNPDXUx8zBrjC7BHWpT6ApbUwwbFgue8PNQMJHy3972eoajtY4Xy3srh8x1r5vj22NfsTSaP",
  "key21": "4RMRuGpnuCn5gb8SyG1bmfAeEwpRr4mmGeBoyEpVmYkcM8Su5nawTdjfBjTAFLGCtS6wxFMtuTbdWiF2TD1vUDA4",
  "key22": "2sVsbSPYRkSa2RjQtSe968TPv2GxCrCE8vkw3HdS1KxVbKuBLrKRxV1iLQcP3dBzdQpwxtf9MCrCsXh96SYuwP9e",
  "key23": "3ppEjA63Mj8HyCq9nMaQrhTEoP1eS87E4vgdRGbq9jDmTwD6US6FRdWbjLrGhizJgzcEchuPPVk4Ux93AfP4cMsZ",
  "key24": "5axo7rYz8JRHkJP1LBNMUTbi2LBxYjCiCE58sN495a1BwtRVN1obmBfbER4D2eg8uwho6BJLJezZB9wBmXQWWbqM",
  "key25": "2K5SNiCQ5CxYcJRCbgtHsNoRRSCjucoWrULV3TVZJt561RPWaHaetzhAkFVAEdB7mnCZa9VmyBCacKwaKR34qM4q",
  "key26": "3XgirFELC2U7qARGNy76um9ifCLCH3D8q7EJrnGoC8CaUMmUJJEZ6VpXcnJh3eaU3N2vXHUeyxUzs41hiVeLwFGk",
  "key27": "3pBLcfxQQwVgAaLWMnkEywvNQce7BdnCwE8or7VKKRUJkPMfjjHTQRoHN4XagtgdR1E9DTAj9UV11e1J7WuKHfrH",
  "key28": "66qfvFpoqBYPH3yt5JgTUDFfPZRqLvoyyShVKwPkBLQCjBsdEu1cVe8D9RiMGy5mYYGzuK1jfWSF1ZdupwB3bgJN",
  "key29": "3cC2N9foyBPv2ZkAJC3W5yyNRmkg1wLDvmv4521gYuyctyeDMTq7xbxDiBAgsGVhX58VQ6TMsLjjbuL89xsMytDc",
  "key30": "5UJoWoJkPNY2yzyM1HyiSBfymo5p9Xe2nTYdknRm4wfnAeTBLCkG95q9PWwF6JDkVZ9FvBTmRFFXHgw22ue5ueH8",
  "key31": "hfKWjWoyWwBYFvgzW8LieWDkSBMBh99JHw6xEF6bti35QFZb4ChhFZHJf5GMM2YqtGx634zQT4yYgksfeYRo8Qi",
  "key32": "4HytLdYrcF8PaFrKygfguGMrQC5eke2ugv9WMzT2eZn9mqoCHJ8dt9HtttYSHLda3ZzodBp34ySBv5e4ZtCNmdoY"
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
