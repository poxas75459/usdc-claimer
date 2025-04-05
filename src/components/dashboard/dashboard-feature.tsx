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
    "3NgavFP37VEjfkFYpPauv8fXCohb2ywAs3k1jUJu8TEqyRgbifJYNpxHc2naBwbUDGiRu935QQHoD7DdNT2FsgyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TS3M2k7FhDdC7XMUMgtKdCVPpyLcDRp6cot5NAzDgzQJX1PvLcaCHjFQTvguBBJSh7DYwu55LDgHBhu42ttti2a",
  "key1": "2LukQU1Du7LSgbtmvb5cgXAbcrQ7VvXwzpWfQ5bryZTo6TFTs9s8AHZkbPQvr5uXYhW4eNCgZAjmqN9YL6wLaMfz",
  "key2": "2f39aJEH6YygJHf5ufzTAPj19yGngP4PSz2e8Cbq82F5FEUoj1ePyqkjNv8o45CAZsdJ11LWng8HkpAtcQbhufnU",
  "key3": "4JkodSSvT7zK36cxg8ts2WgBh5ndWaRBgsUDfP5pwR1kWGnaidhGpdaeGDhKgFwSqRNxm2wZd6smuEcXvi5hXSUj",
  "key4": "kkR8ugtcgzmsC4ckheiqJn9nYQa3cVHWGz8CBaFRax7Y2v4LsJCw5qEwTsSRKWe26twVopaLFPmwKFGKBbTmtsV",
  "key5": "4Zq67HUEfVqwguzAC8B9PsWTiUvW7zK2SDPA1cRfVktEsnqWk9MjcAxnKyNDr1GL9opShxG6deTLNWQMTBepNjXZ",
  "key6": "2a66JptX2vjhTFZvMwZ84Ddb1SZaKs2U4dGv1AZrto8y3PdeYqPfxBDb7Bw1TjjJ4kVEXpCZg162nafKT9coX8t4",
  "key7": "FmMbN9BQg4dsLwAVQVNNdD28tX6XNk1TLHuwEK4pBvm4jYhhKfJMyNq5jLXCDRnpSSyGcJWiZcvR4hg6m58g7K5",
  "key8": "ZqkjURWjJFq6LQ2k66Mr3ffKzDhUcTM7tUsGP9BUFvxK3SdtFTCLF72RFvzQb8KoCSMYZu5WH78mEuuc86fXuVg",
  "key9": "5Lvzuvam1PGenm3vpZm2oLegvpbbDSMGizk1idW4mRgbwRjnCnWPpJRbjHYLcGV4d8ag1DE8Rh8QXSoaDb8kkf1o",
  "key10": "5GncmPrmyCqvp4aefbybWyv54CpTwgdk3LTdJqwCKsW76j7Qyf9Nf5QnePLWuv3tPgfiPftw7G3wyZQZDtksLZwp",
  "key11": "3kRANxgL66g85VEew5kNU5B2Gcjg34VdXJzY88r4LzHBB7U1syq8xXvu6rnrjWaNFS3LbsJmJh3CHsQCC4mgtEr5",
  "key12": "3d7WxM7aMFxUXxgEMaeyaTBR9siciq5dsPbR6fwVvhPZtXzTgsaHgbmdsC7LqZ1Dm1bwKQUL8R9BAYCkseW2jTtV",
  "key13": "4z73c4NvMXoSGkVqrbnx92YTt6NhTSocLsmNB9qHmgkisEXf8sdbpkCdZ4MwHQia9L5kPYHpE36HYMnE4eFGsLz7",
  "key14": "7v4tKPFSsvjiurEc66yLzF5fPx1eJToc4BJyiuPmJTa6FVzPMJ7Mz2iLzpijSCnJtPoKrAhBouVcDyMLqXTyrU7",
  "key15": "2wMcSmzDZB9cE99qGHHbQ4atTZb3FUUXQNrBLhPN5H6mdPFqAKJAQdFzvJS8Ai8Ruav43v5H8LPT8y7Wicufoxdv",
  "key16": "4UpkTUsSZtYj6Dx4fterg893e5rW4ooM6tg8mwu2bsEAnoTqbmosbcdd79PyBvNWULDLf9nykie94K6yzRkQLDrA",
  "key17": "sQstSd75Kmq5f7tXwXFh4BMkN5tqSUFZ17tjC4hYGxM151cFzPY6RYPWsWvSXxi8rtWhjv7LEYBq5ASRGF1HuR3",
  "key18": "5njq5RhJgqTEBXqq7BMWZfPumbcV8n12kLbTC3G5dzTj1oHRfcxbXk4a127KDHPzivYgGonSkvLjvjsrS3SW2gsy",
  "key19": "3NYjyqfUDUJSMDvducDsJeXqXzMfcjxwFvBgp3XAPv5jJKFFia4YAX2WrEcSMa7DbkppUNU4XAFWSeiC1Ky2fWEo",
  "key20": "5wsm43kDwbgfkAPbF9NQdAwJfyW9p3xHPsxcXSaYzVxoctkfYGfcJupUedkQ3iMBPzpaYCdBBEMgg2LgJ9sL2M3H",
  "key21": "41cX6nH5f9MCdyzxSk8LJ7knVaNAjAKttkAcbQFSGkeV3QMSZttQRZM49H8aVVySfgg7auAmgHtQwpf1jBsYCYrC",
  "key22": "2C2P9oYu75sx5JxcLZuFaovQUEcJWrz15sWnAXNP7wPubDaeT44zyVpHrapqJv8FUoBanfQ2PFdX2UcqiQUBzGw8",
  "key23": "4kACygCMWEumqc24fcjobMY7bKdQ8jt8NYVjPGQypWShGBToSzeTAdM5zSP2Js3eiJtAmnM7kSresijt3HdaQrui",
  "key24": "4UAkSvNHC4fK58hUcVAKFk84bhVt6bM2DKC2GHtu5qdDgGtzkKQuv3jZiw5s5z1bUvek6v4WvwMXUh75nhGDNjtf",
  "key25": "58Q4TxxmGkcV2pMgHdA8XD4iMvn1zDj6Bqh8vp1QdcjKGWMT8Y3c3RqtCPj2zESKnERnKjZVaiDV5AH39MumzUBj",
  "key26": "4Ek6Xb1iwcjbpbjrwB9FNgsZRMwefPdjc8YSiDe4ZhLP1kQDifGt5us5YBbGjk9z4NJevyPe7GbdEsqgQMLqCnmu",
  "key27": "4S9eDDHMgChHaLkfLupN8WZU6VHjY8ebv8K4PARbHrWGTUevjdhith6bDmxYVbw44bF5WJtszhzPD8BynqX3ourB",
  "key28": "FBvwFw1c1kwpTQ3MnmBXpxWjR96ENcitkyqJBxnALvH9Wq4KsPdTVvKjvtVN4Q5Bfbc3nhcgb99zzt63Ae17CE1",
  "key29": "2SnUNZDDLZDj9MypKQxJUPchb71NjqsLsn1Ap2bok5wE7cL2qP4d9nBmgbfBSktgLZJNry9R9j1tvfquhwZAahii",
  "key30": "2i5ALgNsvFiZALkqHRhEPoN7G7bwNFnPMczebyxePJ4NyWVmffH2xc5FniKYnP8mgMgJZoyWhkHuWGCefZV7n82k",
  "key31": "SYZ9JAh65N3AP6UXMzq57rwqMSLyB6zj59oDtHwVcMJjQTzAHQp5cF7ubQ1i5H5Sa1jBzbA66RvEskyTnFb7dX3",
  "key32": "55qYpKwaanv5F4asqXbscKbj9Sg78PVpg6CYbmMoooH3GZuUshvqs4sZNnNCE2kV9STNCVnLFJaon3VngTP4GReV",
  "key33": "4hcV4RwBDDt89XRFCG4RqWHJrBio1n1Zmv8Fa3WsnSU7CVc7chw3LikWH9hWuUKHB1kxH8vZGxJCCCTgZzZkQt3",
  "key34": "5gAFpT2bA4jhhx5cGVxGCNwhP9PFzxYY4AJvhg7moREpxttpgxheP96HXBHrLHh7fUGCQSRiZiDXA88tnE5myi5K",
  "key35": "4hFfcsjDHs9VCnX7Vo8sRrGvDQpKCWgfpQT3VnWiW6i1FQBe5hY2cNzGCpHWeR883qGjq88ZatZj9fAgo7WQK4K6",
  "key36": "4oThy7H2nnC4Db9ykEgbKbyq8HX3aQL3FgFACKrX7ABLeLRUdGoitzmE1T3HdhSWvvFYsc8awoYzuVEjPhy6UyrU",
  "key37": "afVPXhuBuMjL1bHEmmuwGqXgsFqitPfT4i4FuCN7LF7tJueWhBF7TEWcebrUtz7bMqskz8UnaUSpRGgnqigjf9h",
  "key38": "5QtTcaHiEQERZwYfD8BFFJTgxbmh3Gkx1fC3MJkuwzwZrf2SCpd6tHdMpTqvnTJmhbcVEXHrJ4g5se525ahksGBZ"
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
