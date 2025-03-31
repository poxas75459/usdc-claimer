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
    "5DMvq8HayCQsLsQCXVqekjT3qqJpBJ2dZLshmpVfFaZUwUYJr6BSuuJi7W9ZTg3fwPT2oXhXozuZF8ib6PQub93d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ic7Q8hpCeaembYsxcKBuSoCmdYHrx63RzBaYCnh8x4PNmPUEYCrH2doan4miHSEgRJuh3acxm3w7kyBu7WXjzct",
  "key1": "J2KevpFZyxzLzydzSgXxzNj8HTwUcp22H7PhTYwLPq6ragv7jCWRqpyqfMKnqf5en6mhe9x9NzbzMd6E7oQ1tEu",
  "key2": "WVeJkhhrWjky46q2dKzp2nezYnU9Yw9CBmNyexLsbqbr6a5mknopiSHSNjvusVwuBQdaWLgQttarVAPhQsbfmnu",
  "key3": "4EKUkDiQNtqYuHMPgWet82pz9SVM6GdpDz9Mw3UFLVnd79RFte87v54fQrZmc9KMcWjfaMa9B1jdErZTnMqDxajN",
  "key4": "5QwHqgoNyrXty5Cipyy6Yaj4W9TEJ5ZvBzzgvP6uuMcHU7oFpUtEdTh9X4NiwmnD6MjJcBpasQBySTXSxhnKXAuz",
  "key5": "8qqJHygeM6uxrN4spna5y4jC75dFrLtYySko1rdNdWX54QSpXCXHu2ug569VjQE259i57gNpCu6kyWsVucVzXDS",
  "key6": "yV8aPLrHWG9q8kBbAmLp6qoLdTGcozCUraqzoLkV7nqd41ymcm7KUwqoAjUcToQ4u8tmcn4JjVZsyXZoAdC5wC6",
  "key7": "N544m2LFj6Z5hi5gwxFD8YEFBAeAQe7M9v8FS3RGDazhg5BeQDEnqNKwNX3FtcsHPtUWwzvKY8NZbdJzXM6jVPE",
  "key8": "4S6AvkxZerwHLYYsTEdZKZfxjuLQTRDNhMWJgsq7zVVk1wH4QTsZ3Jbu4dFKinAGuLiM3HJbbgHGytkcR8H42Cey",
  "key9": "24oX71GCtfobzzb8bYFNoVzHcRaVRy4HKrRSUPy5o6WPHq7jd5fe8UXeF2RoCox6Pgx9L7egBrxbYMJfWeMTyX3b",
  "key10": "52b3Mrj391Jyz5a2ovqsDjzwuzbGTHzcSfNNJxZhGFZJ7cbXomjjbjDYctefJd4bKLZjeEd7V8UCgEpcwThyNrKr",
  "key11": "nptNr7HLrFh6Ukma1xPm8qbdqaWuJw9bL73Mo1Lai7k35FmFzaNsNG5F8frFC9iA794RhFQXZSvHJXsHbDZF2dt",
  "key12": "5qHehpjWQUvCucGmsKJYYpQuhPeag39jdAjm9WviUHKAmPcY3LgmdUHLSJwAs4rV9GyH3M8qRYRjXLs8inskw1rz",
  "key13": "5r3u1fEp2Lzu2DJbrwwzQQR4MVPE1jusE93VLqGtLcccfdoWtLGjTcDQT5Vbnj76FKgN4LaKv5vv6RLchDtfJma6",
  "key14": "5EbfVLG9LscfjiqEkByL4Wrtx9vzMs9pp2JwudN4jR6NXzaP8spxVQ6Q3Grms9UzdbdSicUnBrG7QkuLAaA8fgnv",
  "key15": "3m2GQJEPZFqp7diUzxD1NhNKrPaijrJCGCKRgSRfV9DwCHP4FYTewvnbqb2JfTAtBin4M5seCpt454chjDNSQc1e",
  "key16": "3XN6gQWV3j655mff2yWiUc1tRAnRwK31HWzbHcswgLASJhQFvwVYodMBnZR988ArnZqrUf9rz1hFvrZMSrXUHN44",
  "key17": "3F2YmqXsKAyccQEALNxVkb8Yw3AiEGqdHsZeH2W92ANBKrP8n2wiYsn73QrQTVYvPsRstgzQW6z7mdCrZQgoV1NS",
  "key18": "3WAqgrJrZaitcRDSsC2rxmMw736VDoYjnnYecPYqkc2w97GbfEFoxS2rm5p6NkU7wtTn9DNyhH8qwSvB7oJe6dt7",
  "key19": "3NAphUrwujvuBJnEf5TNdVkSyimLXiWYFY8e2BqTGgifyzymRrrijErdNJrBby184knxcrxeHKdkZnkTYupDF3JM",
  "key20": "2AyVmfBnA4mpNfFMZ1Yv457U53hHFQmgkmRAz679VRDp9vHtmMADMi6t64aeq2bXS4G6BjstmVSNa8eGg7EvC277",
  "key21": "5apnApACjmYu4VNBbvcCd5TywHRdLma2ZAij3Rsu4EnyCrZfYaiK1K6EruetekPmFKkg4UpFcdBH8AYudseuaF46",
  "key22": "4xBdmjeEPGDuEjcmWmLwjex5zi8NvR78Vifa9Ky8Qp2t4yVkFARaTsS78rAuGRebaDNpijprCmykrEFcZjKGMHok",
  "key23": "5N4iosxavLYW5AjohQkDhMLLV2dV8RaJuATogti34CBF8HrNETDc179z11XbCN3JTCyiEXWKepRbgvmBNDxoh66Q",
  "key24": "3hkZ2sjxLbYrftkVcNFKbQzEHLWScG7T8RgHMdXCnptiUbUnjLgi4Arrtbd78eftTiPupgDEfcg83B8ecX16yHna",
  "key25": "3aAiH5GYoNBSMxUsMi5Geqe2LPfKcipZBj5WvzxJKq9xWaRWZntTn6Q2YxZVW3GVeK84kUkGtt2D5M6u6VaVQyRK"
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
