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
    "2WzvatD6wGahCb6Bot221D8yh4MtigJHzhLPc9FvaGzCKjqaB5MtSyGKsreCiE5uFEZS4QpwWtZVogV6AsoF97Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6KCZqt6hrWccVQaEm8Qbo9MnMkeKXHZWfiWhkXnZWgw9Ttbv2csBGzvMkgSaQGvaxXuwsLLYTRHmhJG4SgWPvs",
  "key1": "2jstxJRdzYw2m8MS4KYGAcnKE6j1KPokKPbHuj5wa4ipoXP8bPqgD58NLYDPK3sHNacF9GGifnhcc3UoSD3zQmgp",
  "key2": "4bvvuy4yepYBfQhfk2F91KJtn2mY2grHxoTRzkEkRpFtqAK8qwFArUz9BzsJ7usrTKypP5aoqozBjs7iAceniV4q",
  "key3": "2mZZhs11mFNyRW4oEnvdrxuPGpdSPoTpYq39mriGiYGz7Vwip4tE8EWgCMeUVsBr9j21aNRQGCHjjPUnLrJA98fy",
  "key4": "4CDHk3gCq8uBnUxJLF6EZ9z42aVKeucoiyZgmBCTaiJRpVoMDwUXKZnsLy17GjcjCF5v24wWsbtTaRFZT1isukB4",
  "key5": "MpfXrxwGRepetBuMsRQWyETMgZASt7eB9ThxsGNwAVYN89hcoQstskPLbNDVJKGuPQ2JNdb2NoeZWyLY6gHUkF8",
  "key6": "2HdeeWXeeYtxGT1ZZfbCKB2HEeiNFVc42AEdY3bZDbJm6J12STpmgr2CvPvUqdyMbWquzsNk6B5B8nAbQBHgy7gq",
  "key7": "5KrWFragEe2gHxZhTycSLQ6iPWUViBRFrQnvxdkRE9X34mP1f2JgBhQWdUokNAvJj4jV2ipC5UtxdDPFLTLeJq7B",
  "key8": "5X6z9GutKQycW76qttwfFifPmHKjao1P2CBJGx9SXg3Dz2N24qHpspqh6UrjDk1fT9tTsKtJvQgcaaSN61ivi2d9",
  "key9": "3uenar3NronKMKBFwEQbR2VU677c8WF8XFYBm8hvURBJADebE3yxov2qGYNXB5WkGpxi3P42C4iUmJVfvPJBv4gN",
  "key10": "5FpYJ5gCX6qCcLxjsYrzQ6q2Vk3edxhaiBevsUd3CrsULX2h6U3qXksiuFPcDMYjua7wcCiUg6RhNXaJ4Cfhuiah",
  "key11": "5MsNjGhWWj4rUArsQZbynMj6wjqffBrpmBT3ULR5NKtrTTgqZS6YoqAHCUpZnBZsFiA7MwFitisWJY5EXr55Y7zL",
  "key12": "5bMVUnkKMZxL1Dj5msDmE8MnY5VEtifwBc2jHvwjCiM6XQap6QKrNX4mte5qNFbSSuWWmX18SqvHTkvJ9YfsP6P5",
  "key13": "2QRgRYMN3LeRyPdbz3kCx5co21vLSSWz7csQWD58XPUwH2e93vptzsYbzpgY6fiSscpcSPgQ9fh9gKKBkQGjnE62",
  "key14": "2xqaJuwR8SSns3xHd7SWrMgg5LVFqrJWuwjDdo8B9SkZyKmy6kNHZ17dR2sBzXtezX5LWBxkV5r8YSqggUYZ5dh2",
  "key15": "53vN7Uen6qLgoJYrRgzHL5bxtxqt8voJuVYukzTzqv2hDvvGHJXDQpHQJ6v5VHtCQ7wTmKgMZeEVkEBz2miaQrfT",
  "key16": "68Uf3K6TyEHSS4kEHsGMNXchT7WqUqBnMAfR4HWXsXa8uG85qvSAn4jU29YM4rqZ4Jk8rU2gYUx76DugfrWbMWL",
  "key17": "4vHSn261eXaB4gRLhqD5bgaaM3BMr8H58qg4Fjkk1VqswxWxRxTf7ejPSAfnH6UoQ2maQNdbYA7t1XETdpH9pisv",
  "key18": "5VXjuL9MhuQfwwYMWaZ2TkfCAgqmULet6yWZS91RRoR5AMSc38UcwEvefo5MPVfZS3T5VHd8chZKtCmUoAxFBzpZ",
  "key19": "3emLLGtkhJnJwcPM2Apr1QY4Q3qLnRjxvjNGBfXbX7CdrxVPEM9i6cCP8C4iZU9qKCGda94R9gr5BZmNMkVXuhjB",
  "key20": "55fVGvPXYZfRAUeAM8ia6KoiJZ96nH9jvm8PeCyNipNAH6VYt3GUfYKvX6SUvJR718PNqsMxfouKJB21drEPEVkj",
  "key21": "46SDwaSDfMo4d6CZVWmQYpwnHN2vnJiFo41h3HGSy2zKEKpfBHPWNY3eVBNGxxfg2dybbYr4TQjy6iTMFJDCXeCb",
  "key22": "XSmYU2GqYGSsCeSSyQMfnY4MP89ZYAz1vWEDwUsdNsgYhiJxEQi5ri1rDWSBKRv2KJKE5M3WQp9U9ZKs1aNzKs2",
  "key23": "3nrwAzT3Nbwccw6vTS3CLtws2o3zcPEmRJEUv9Lm7e5RTSffALm2ZDcj52nUKZD57uPWqFTAXwxrgmJAqRu92zP2",
  "key24": "4f1rvCExuSykKpoSzHfvYEMdauHKctXzDYMsnzuW9A4ENg1EcZx3agunAU2SHVfSxnHugYhTJNBRKt8pBPB7aDNg",
  "key25": "2qJpqpGWYSfK7Liabjhy3RDCh6zTaPpjw3LS8pwHQKnZy3Yeb5ndLQErtbr3RUFLzH6wEjUp3TvUJueMiQgYXbD4",
  "key26": "DkJVmWqGgjgT5YCDUL8mANkY2zeSZzboeiuAx1vDE2SZ23CNiBSR8ivJUgS8G6DA8LX58cDf5bT28dcHywifGn5",
  "key27": "5rPduhBan3hDCcu6caAiAL9SbjMRKuYzQ9QgzHNiruatJmxRMTSKL1nSwjCDbaJspqN4tRpkvJeexj38cFZPqD5x",
  "key28": "b9ouFAX35YiJSCbaoTUGzuaxGBkPRZkcAz7RYkA4yoihrVothNAksLXcmPNGinRVcNAAmetM1QreqrW5mQRRwvB",
  "key29": "53pk5wFVLMtMBWCCFJ4grNYhL6JBdzfybQMEvUswZtj6CwFig6Nvx2XJFpefRigBP45AT1QrDS17VSETrS6ffBrP",
  "key30": "2CuxHQZbjQBBvZLVvqU2wPzzDi9yUoES4AzcgTKRDpzwarDfQVtejfgzQrtjACbLZh2q7FXDHwx7PAQu5SDYg3rU",
  "key31": "4NchouUopRT4jXHbS4NbUMp4qVTqE5z5C8j7iF6FrYt8Ae7f4uSgDTTLCKuHgn6f89XrhwMtmGHKpReBpcVsTTzp",
  "key32": "2HAkL5L5akrcrx64mcc8fAkBACrcg2gNKuqtKG7xoZyyuKR9gMBE8JhZvjyF9j6n6y9mdzUU6oGbgLtako2Ar5hh",
  "key33": "2BCGZfVXfJ5YvnHRz2jY4w2Snjh88LjRitmj2mX7D3E1ynWzrVtBX5X9Anho9JyFg1LMMTSdYaRasWEsnkhHCRcm",
  "key34": "2mmnx4cLcrkVx1N3D1HYxzZfzkm2SBiteSBjjcfjSGKmqgkyGrPDKzB46FzhjrUKxDuYrJubegfLTQ8U5dYGgT36",
  "key35": "4h5kvBDFDPMoTxbq1AJHQrqunh4DZrvVdJtP7hXmNSmcbtqediXHeGRBiaNvJ1cxZReTj1CqJkSv7w9WnRTqe8Vi",
  "key36": "2KARnxV5CP6HkWq9wEwKyokhpUAezDa1qaGzp5Mp2Kc18Tu5U7kusfiSyhXNKiQsKAAe1it6ipbVnbhfyTbYjtjz",
  "key37": "5QfjNnghZiAowGu5WSB7bEPh8jhEDnqj859ATW3Z5T1pme8JDNFskkMx9Y5rtNzW2h58g4Rrw4AawvgcHU13iGwh",
  "key38": "kp3Dx9fweYY98jVgmtAsonynq31gdCvAfjNuXFZYp3nSnLY7knmyZwWCMoowD9jZ3mJj13edjuKxho9TKhVUn7m",
  "key39": "3WJNb3FN5XK2cVj2macpYZgEZE2bqtnnkwjB8Q9gvJDSVi4TdhgQ8eNzJfbtk2GJLsu9jaf8XW6SMXJk1drLQrb6",
  "key40": "3Uwu4B6f7fkgkrce61Hv425j47a3GXH5MutVVj35iDGzv4Np1VxhsRa1Ja3ZhmXuUcihc1rYgoCQcmDA3fct3Wnk",
  "key41": "3CUTGV8Qet1aL239bjHjPQHncrGGUtaZRB7xJQUgiaEnKe5TnpDE5SdryGvQ5BvTMpJR3tcy1vmLdm5hN89MJ5pP"
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
