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
    "5Jj9TYNuVYJyqVhFp5sVLdLSsmYJfb53N6hGr2jDE5685A98XNARH1YyxcCSt7dbPtS4abGQ4SuktDpo6GhDjbuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sco8iJGUoTFtQDbvxhGN2drdvyfVZ6s7D6zV1L6dhvY2njnrpmpNvWCUFikaSUru9dJYab2eYfJYwUwtvBQLwce",
  "key1": "3bZgLYnU59Fm8T1fMMLZyz6t9c4kPr7PaH5ns2GnLw2316dfLhXxg6NUMuaNczr93dnQbgiZGXRRpfEy2Cu789gT",
  "key2": "5TRS7f1BgyH9aecDYbY3bJb38i5TTYsXJQxS65D4MYkg34hjTm4iFrVL5aKnPH2KajN59J8wdkLP3mqqPjym1NmD",
  "key3": "5KFoi23key8z8ue3NJpfrCMJrxn7mhKSu1uQQbq5rCXENgfiA5F3R7SiFvHF9bRZZHN1NCBhGbsAGhae5J7YuBVN",
  "key4": "yF5CdqMTdVUNeecPxJwAvtEGhRX66EAXioFZGaj5bsUBnCKyN846iK9xzzeoMq6hgDZgoe53rpHQfmGxjbRj5qC",
  "key5": "3GcZ8C9CgX7vfrE5Cr1UCJgginy7oWvc9U3Zov44shNRsAiaVnejDBRLgUQFNyFH3s7Lj63afMtcimkyAeZLhPPe",
  "key6": "5Sg982oTGhBDphituGL6HCRhQFWG1MsWKYXxMAGAVDpEfN7zSU6V4zjFp48At9S3Co3FA9N5Jfz8ZfNiXn53ofZm",
  "key7": "3fBr6dhjoxJkfoi591JCTNAGu3x7aqquvwdp1WNnhPtAwupaNqfgJLjxNkA7RRtn4PweQR8hyT1peNZS59V78qPo",
  "key8": "Ah7yUyfTGUTp1fjhnepZNgBecgPnpofZJ7N4PWaxvC6HgrbXkYjzBN45S81RreVyhAytzCwE1BtTxKBhRduNkQr",
  "key9": "4rE6rAJbRhFkoa3a2JMxdHLa4DdSohbMSXFKd5vbebtUBBWBcFsyR5GG9K7AgvWHDrwpruda2Kb9ddTVn2uZ6bQr",
  "key10": "3FaonfChogsXNAgLEAnbxggVdZCFrLD3dNacFgPV1A1axxtXVP2rmizpvEGJnEJm77ek4yBoC7fg8MFqW2zFn5dX",
  "key11": "3g1YddodNsCw82UyFqefC7NKjv6AhYaeDpuxxnUXvownEWGeyQrdDPudLSXoDdYnCfkzZkMGhU6zFGiXHVBH9Svj",
  "key12": "55GvsqhF5SkbzLzHpqTDVjHZWyXNHxukxrMqtQjU8ed8qepEF2mwYbcns1WMsfZydNo9ctTB5gyqh64u4zW2fMfP",
  "key13": "3M6c1LPbTyMgEWTUsKgePmX8dxvixvuUPfEhKiuZctJ7aqDHNYpiJ2Q23W5SkpJ8dUBxnJ4cWQsLQKpN5rewEaHj",
  "key14": "4fdJYhrrnLzAVQ8QdmS3pctNKvEAc2KYhdPctHnBy37A769ztU6ydAbRmGSgf8re4WopwNKKWukap3LpRGY9ML8P",
  "key15": "4hwr62snUG6ZNoYNffc2t21thooWhWnFKJqjPV26AUwnXibd22EanRkJyTj8NmhkXZtJ57AWc1gR3wVU4qsmgFaZ",
  "key16": "eipPVkKwvyGV8jjDjGQXWESPXDTnJ1JLNMhT2W517HQkF1Kg1wHMyWuxhRB8toGoRgtE8XJ5h4kgpX5wYnSR5iq",
  "key17": "3nibSuSyiHnd693jkBQXdzuHWWmBTjnDqHSVcZHhqTbiRZaHeeS8Z4cfjGhqqxiEKsXqoPcNt5EdZWHiSUJdmbb7",
  "key18": "58onVKKJQG46TMoWFZxXaRHK61X5H6fGx8roqSxrrVNVWzuecDwU58kUv5yCV2Y2Cxebq4XauxRsDwmTJgkFxswg",
  "key19": "KGCsufQjiEbbJUKVR43MYWPYY4cn6NvJyRHmqiMiRt4pQcQysccw5NjqP99HPY5Cusa6EbGFSbHw2L2CtLo1e9R",
  "key20": "9ebucpnaNjphhh3DRu8ZCjvnAM3y7RntbG2yzwDfuhakR3j3s4vRCwSUT5eWqLqbT1ZvopuWi5TjpCW5SZuM2X6",
  "key21": "4eqYt4uUMRychEQxQ95NEnKJk2qMDm3LLdsYq4R5pvkH2urtFxxz33PjcNtxXw1QLVfUcha6iEJWfczkNbgYWweU",
  "key22": "3KDomoryG1GyeUdoBafKCNP8abnYVhhmg38hbAiGf76idPj6Gm32k9pn4ss1rG8WGtP7CLCqpoZr7B4ssT9cers",
  "key23": "26YU5h9wRoac9zMvZHTPeFYCqJNJSGysLfLkXNu6sTAdHLUtf5bUcRiNmg4vUUajZpixEvVeui8wN1D9juqd7y1C",
  "key24": "3kA5tZM1fKT8DfDjyiJMNdLg5LUHe5Q7XAQbFLkR19HeXdKn674YpgHfQGoLH6JTNLFKmbDgxv9kL9fnv4FczajD",
  "key25": "2b4MG3JGLhp5hnuBcs3JaTKHVMwr61sKBgosvQ2W7B8GYUekKz2Fb7bcPxMkA8yCfDPzMCvUQGKu8p481o7ttRTa",
  "key26": "3We1f2iYKwNy5T1mvzLymAwxqHs3FjZ2bjeVHbw3b8aFRCDefsEisTgpQXPr1YQdT86KSUJ3cHFHkV4W6MUWgukp",
  "key27": "3DSK6MuU5MiNrypUcSaULrCiSBDhM8EkYsMvwNGqo6UAMQzG9N4t5gPcE3inzpTgVtB2iXETCwbH6Fqw6cjizBT7",
  "key28": "66jHQUkxxzVu5fbwQCkN7Xb62HqMyfgpjC7Yw1enupghY6vh3DUib11ozBoxLVVMwGoeJsKaA83kR8Pyop5YbU4s",
  "key29": "2FJ5568hfSPjoyehf1iR1pZjFAnCAsn54e5xe8kksbp963W4i6WAnzPYSqsbPhRpiZmWXue8y4foESPgMZJVb9Cj",
  "key30": "4aeEnccCjp9CztL7512XXd2ZCkuj7jg2U9HbWY3NhKtwLrF9piWBPJAhRAXBppdWUEDAkfkzi52BSa4ZpCRr3QVL",
  "key31": "54HN8kqSUaVvcQyaK623qqddguhJJ2MivfaXvv6tKyyXmtBkbY5YFrdFnzQmCukRVcYJ885ekaBCX9bacTWZuzwb",
  "key32": "uncCqCte755CUFfEWXiVgUEiLEqqkVELXv1iwbfpf7jouiqY3aTysHBNtQF5A3Vrz9AUUyk2PTppXDiEaxBhXw9",
  "key33": "3HFwHe1vLB6coe4wG5hTMmQ6BR6Wi56ctR4ZFyHPLm94EvAfHtZ8GrqmMkAhaJWWsNHPPy2L5f8dLDvuLwarqwDk",
  "key34": "3Y5ieq9YrSx6jDgdfTRaPhSdx4KT14h4M71Fqvvn7AGZLXNTqbqbXkaHDPZBCPQ7MtdvoD7cfAHrV9wPxSGMxppB",
  "key35": "21c7vtAdJ9prNbKpai56JqUuKedQ2Z3YPXyVh2XUX3bdXqEdk8sWUDegiJX4CYfwyggvH7V8T9M9GDNqE83V4bcU",
  "key36": "2Y75HEEtJ6szxTjhyrgb4cZuNkALLcdUQZHEHBmAM9pxXcS5h3AXQ37y11hs5AXSoRWb68THa6okZsftF8bgLArq",
  "key37": "2o7o2QAxXaYQw7zr1A7zdTUXTZcRmomiN9aqfnt9hD94BhZELNQ4Efp63LsiBAFaDKxnZfB4SFpwKxjToH8pDyNG",
  "key38": "2MX2igJoDMexUvK9uY2Hu8mUSGsX2dHjE8wZdaMqS8SJkJK7RvGCQpa5taoVaWbPQqzPmW5NKwKLBhKuUpRn6YJf",
  "key39": "oR1GjF3TueSCwgDasSa8Squ8DPRqyG3hxH4beY1kTBQp3Z5LyanWW5DHW58nXiwqzedPdYx6KSbNegy91CiK1qi",
  "key40": "5kjwxjPZacbrvQ3VFQCYUhTjswQAbU36GdpzQeq9nhdoqgFZaY2gbwYH9a5kLDULbsTgBgNVgaEUimn9fyyuq7iS",
  "key41": "4Vuq2S9asU95GViHHuBFLcUt8497359gLmEaNp6iaoAVR4jZUeLghMuo8KatUL5s6zhJJyNkmxiZfLsGC58gQmBS",
  "key42": "5QqedMNfV4VLUStQdntpFe8vicuqsAczYbT1rLm7jALMKJJsYrYhgxLV4DsB8fsdPbHcUewmmNmJM7nFEZsNBSrP",
  "key43": "141rn24NPeBYq992vpnir1q7bxUd5yymFjSX2CcWgsLgfxmUDKFSZQRh7m221pifYT29mg1BXpf8faWHVSa4DJg",
  "key44": "PefEDEK6Pp4uWXoMZnpnep8H1Gg4PAZG1z5vpk5qc4XoRLaYmByox7dZ9SXkCxqRqz57rd51ZyNT1igjPkjH5y2",
  "key45": "3A4TBt7wBH1F5ui7yUtiTdEFAmNpZVdmrDHFLXR93KycQ16jDZFJ7zJjrQoGz561osRbjGefzULYeYUMNbJ6wwQ3",
  "key46": "4s6CzZuuF73TgQZdJj7ga7TYXczzTdiscMQgmX7DvzyU96oatA26j7KJ41SHHJrkvZs3F9Bz9HpNp7F3AjVHwKHB",
  "key47": "2ycLSL13NuEETCgZqN7S3vc3TjSHpToNH2HBUWYLZ5pczKrNwnx62A7U569MEXaRaHkNSKvBtW6PZHUtv9Fc61XW",
  "key48": "5iFXy4gYc4k7dWq7J7HoZwuHiguw7Z86imHMPumwQj3YZNQXN1FuVg9SPLX7ZEpiRmQNrQ5BiX9YL8r7fuQBVi19"
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
