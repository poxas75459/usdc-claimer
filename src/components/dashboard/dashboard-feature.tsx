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
    "4HsA9ynZDXXoyZGz1FzR7JS96BjyZruP6cPH9Tyz4tKAtpxzogBLydmHHdBHm4KD8Up6yVHQ5uWFY5Z6nNqEL9DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1d9ZF2SsbzJztr7FopsigXqLt9Bib6rihrAzAsERJiiYrFuTNgLuB4EadxuTdNeEXzQDuSXXgyQnP4Hi6F1XvC",
  "key1": "2nxze1ZyLo7hZYhuynu5P55NS27QTHmsZReGnu6dLUJEWVMhyrqycyBZsTpKpHXQ5z8wFzSKBFoCwGeJonp2R5j9",
  "key2": "2ecLibG2eWVNbA2UWUhfT1dyvFfY432H4g6rQJkEaCokwWaNGRwApmihjDGHyvPVV8PcMpSWXnD83eUBvMRXtPTR",
  "key3": "PyuvrctQM31p4Gtpo75VYRuKKGkuaKtoL6mSC76ArxSLDLWbJJxbBPD8uDKBnqPgVKNFYzmJNLSSnUJ8EK1MrVD",
  "key4": "5Uyrm1hJ5aCGd4XWiogkZieS2JZc6t6a75vD3vnQxgAcj3Eo6bJdtKxFSFacDZXaDCuU5eyqCZ3CbMshBP8eQevf",
  "key5": "2xM5isvcv4u7eNodSpoihvVHqXph7v4Ym1vU8hnCkAbXH48kbPRgEN35g6EYB5S3MQtNhsbgc3SSwLBN2BY3D2SM",
  "key6": "22xP5Gf73bZVEe4A3TGBUzHC11ftTTXRkPCEtmc9iaCUMoxmizJUQAxREvQvjXBU1QnCjKVrDeaTXDCCxuWNJxot",
  "key7": "2HVWWVuuiBZ6whAd74EKHmRTtHo7BjEd5Ydy1JX2RHLMJ1vVetMWvtwDLBiUe2QP78ZvJSyMAsx9Az4L4geUMody",
  "key8": "4umjwxKDv2kGwzYdnMkE2msrNAJnUfYijfasd9wTJpbX3VdFKXPfAzJcgsMPGaUd4ygEFTiXoty4NanjKWiFtGs6",
  "key9": "4u2RuPyRh87Zak3h5ahMxYMGZx85DLQNALjNGvWiNiLGVdQD8THUQNHpqHSumNPdfNmXSVm1SD2XmYvY2Eg4jh3E",
  "key10": "24VYaBzejqUDcGMwuXTC1okESezHuXsL5RrgqVtveUiEKmZSVm8MmKURCqyDrx7SxwMxh4r551nYKdojQRudhDAv",
  "key11": "3tS6k5GXZEr6y7C5CpzdSB4wafEuhT2Ab2ZzP2BuVuXQfAyh8jC1quYZxN5kXMzZm7Q2mJayGJo8EqDr2Kr7R8Ho",
  "key12": "21yTPY3xHjhvVA6ZWPx4BGbNew6EQAQj6jDev14FNNtAj53Wk9L3owFPBenWRviZ3Eso6ovKcYhphWd2hiJJJFj7",
  "key13": "4GNVHgFgbm7Y5fkeRXBsm8AywAVaArEdJpQUaRKriFejx5DP4vmCjmb3C2RWYtetSotVJK49tUbsMBm85AnrGekz",
  "key14": "4dk4Mf8PzYJ6uZkZ5a2BqMpvM22frc4TGo6tsBpeufD7M6G7m1rHkraQet2pe4MwBowrYHupauczuJkare2L1uEh",
  "key15": "Sfb56ep2hw1ye2QsH3zUhfGnnToJLzG6AsatZiJAKGvmbCDo6nrjtJ9titiUPWe5KEU97Wx1v2diZ69cvRtqNyG",
  "key16": "DvZPa1KN3Lv4skqUSAGn8RHWequrhWdPTTxfe62Zbv8qKKayYACbrrCHWiML3bP1gFajGjo5Nt1zprvXazBswHs",
  "key17": "5qLRN4CCsM8W4bSv5oEBuqgv7QVjJkjDC9i59WTau8hAPdtA3fCjFe4NrrMJxZaDCasZ3buSdLQouLbKLunSN874",
  "key18": "5Q1d1xvVfVuAGqYNQZQfrApcASpd2L2q2RUm3S2wBq2weCGf1YJsTiLSt8vrKCgyS5n58MQqBBWZrcE1MnAWvFQz",
  "key19": "4FMJwV8M6xDTYVrrtMtureb3KUfoeWSPGbCFRNK5NbiLHa9mQ1Hnou9N49AZ3H4iKzyZCLwymW5JQSsVQsqX6fvB",
  "key20": "5ym7JUYtFimpA4CqJvwG71AGmRwoe1Hp2vSU3AyFSuQrKLmaWuARc9zej4Q8nzD22hYQbZT89N9yTWWznWPzAV5Y",
  "key21": "5uZcVc8LhhFr9rac655PACbtfq8RBcmbBf5aLcvBDetbJYA5buvJCLnYoxAv1p5Q9GUxeFJ8JSLwYdUgxLkdmDue",
  "key22": "rKZUNPyjThndtSozzV7AhbToRNFb8vMGozG5wTxhArWKg1qeUDr62gieUAAJBAbYSjVGrUZ6vQgvdwLbnmCQu4R",
  "key23": "4NbCvS9jsY6mwXsdpp6ociRgjDAzvkjmP4RSjr1yA9umK2idvCQBQa3myUY9r535mpeX3ijEhd1y9zey9DiygDQj",
  "key24": "4oFF25w43tjuc5EqorBkKPmSZ2btrqMcakGGood6KSkH6VXyqo9PNq5RjJFA18sB4rnJBbfnCJgKNSKqJyq7Lmue",
  "key25": "2UBT7mhwDDuSXA6dmAJ3tFss8D7GyVpeyNDLGqtMww3HdruBipfveevSLdzZpnQyQHEQQnXZKSu3kRDHSrBwR17P",
  "key26": "2xL3xoxouSFEUgTtGU3G6Nhi5MjFhk8cCKSLgBtkd9gP95JdxQRzN7NA86gryrSH5NgScfpeF88r9CHM9xsdnkC9",
  "key27": "46vUKAmtuJeE9dT5df82Rq6NKd32y4uuyTGDSWrH3GA7YGr59venr14xa8wR3T7KQivj2aRp5UhCQS6GomcCZKrs",
  "key28": "VuENeZWAyTQNkdacNu7bN7xN3V4JJxQeNMAR8cukXBJtwDCZoifiM56Jrc8NHVbLmG61bgfo1JScfytovnwAk3b",
  "key29": "XDXGd5K8x8nyxqUZd6byxeZX9suMEmAAXd2dWJtkxXcnLcfWoSY5s3hpMZaruwmdQHodANYxFDCyHDSyGKoy24N",
  "key30": "4bcMpyT6TAQ5ZPG3BPwY9B2EFWtH4Rkcp6PxzDkdz5sDaGpbqBxTP8SgjXfrtfqaLTPotz5bAwmF8RyTrzJ2z1TH",
  "key31": "3YLE6JtWACu6Vvh4HuhDZzi3BEMh8qGKCfKFj3j9G6WrhTK55WVWKP9qPgmfBQ6b2CKmVKiiqyYJrQtL1BtLinUh",
  "key32": "548DCVoJD3FV7hZkNzqQTTCLyw5wPGphfCXfvd7pkr4cTHdQzKFCDrEr3brRgome5cnezeh9veNJEJyrS9RvnZFM",
  "key33": "JHxpiNBfYSEoXcVp33MGX2N7KxWKDq7WX1ynZekq1xm24fnZoR97U4UVNLpbc5fG2Kr9NxChYeP6p4GWRkCcthK",
  "key34": "vrL1JkMYf6NcgKyQxcjHaWwWomewkQYdSE9GVet5Lx857H6omfe2ab4xLvu1PHrVGfW9ey4SyArVbsCPUWqSaDh",
  "key35": "3FyErjx5GKT7GV7DZWv9iamFD5EuQJEPm6Ay7rSTGWndDKNLXqMPtaCQbcviiufFdak6C82qwSu6izeGTGX8iciz",
  "key36": "3Br3AG2kBDLEqTL73P2WKxb3CUjxVYm5SADLs1LLvGj5gLxSrfXFp5QAtNVaLoD3rYL3e2yNdHQtWukNMyWWCTkh",
  "key37": "5AJ83kw4Rb94NHnWLiR8EJyAXsymrMXkrDZXLnx7kGNPt5Nqqy7bREXpzWi9R5e8GN6hNw5L7CH5JV51JPSyTbME",
  "key38": "2UWchwAvDrj8ZwPxc8YqwwL9D4V1GtKKfYm5j96Nx4ujhCuzmTcvpYLewdtvN33J8sECFDyFpMJxkzdUCiQHUCPg",
  "key39": "62exaHaWZJte2vxNHTdKLhfU8ZuZgUqTnkxq8H2TVtWqYSdWq9BiP5r1XDPdH8LtxvvCvsy8Z31AiviDryDe1nfE",
  "key40": "4ydK4drWpfSxMzRxdhqYbncTgmCQVx6ovitEE837Bmzh6p4sM4VDiyErshroYbX4NXH84B6VYjWdDWWr5mYpxG4x",
  "key41": "2zzB6m4ogtfDBApFaH6vw6r9iszQ7a1ZwSmLnryMKyr1U51yeJfPPcfrYPtcGzU9kGU2DxUdXvrGebzyrJkfuAiM",
  "key42": "XA99EiRB5yStpBSwWMEcg7SYw9bW11VSxdLi4FYqbq4vXJLNcVc37YohsML5PkwZstgu6H7CRrVuWAU8Xbwu5r9",
  "key43": "49kTRZYoMxbKQJ2KB44ZpfFSnKAJ1Ss6GELmRhAgP8VprHSV3fUiemHnMFVWbUbz1c2ufYbZCpZc8LuJ9mrcZZiP",
  "key44": "2sBDNBJ9aJCnUnKQoii3yAW3iySwUv56NzWE5aTnWdo2gMuebXAP7edy3c2qiSnrp77TS5EZzT6fheNyfX5RUHxr"
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
