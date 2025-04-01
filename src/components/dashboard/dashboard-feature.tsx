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
    "5prDV2iaznJLhoDJoYkYSYiUjErCwKWZNmKQJNEMbSWrppqjUWgSZNafxKqiPvc3G9PTJ9kiSwE26JYB6s6DGNdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4CXJtR3viUfdNKwChmD8WCrG6e6dEA3Q7jgxQ4GNsQsNUrxknVwEVZhFMcUjBGaadfAPNYL41heFx8yLi5kius",
  "key1": "4FnTui3vBw4CF6EiLMZeeshmMgdGCYGpqf1t5X8hjgfhPPGnZJqf1V4egh1D5Yw8xbNT5FvsV99gjQ1RWrPLhMyP",
  "key2": "2wBCPy8qPVd3S9sWdHG2xwmNCoEcbt75CRfowtwjaVcF26jB9NycZtthhr4LXUtownb2rYLo37mQY3vsy2YAgLfZ",
  "key3": "4NKRY2eHoHCST1HeeDBCxAuABM6jT8t84Bk5CZNQiwUB4RpjrzoWAtSqEeS6PC4VtyNPyTuae98pxbjg3HVsYJeR",
  "key4": "4YSmgZWr7CWxc5ntPB3BVoY952VtaSDyzPkAdqdADR6DxUburBYHxZVtbsoCRyBHJQ2LQYfwH3kjK8pj2u2PSZig",
  "key5": "4UrKirCANYSaTytYeSpKzAXsFpnEumHbRWVtCYyGW3TSfMJEwKMWkaDgTFDhGgT5tJEz5yDV8rzbfvqA3584jjUL",
  "key6": "KkdePFks3YfwgXWUT4EKB2gForWWvFxGkr8aTGxXRPMwKWZbiZcLUbDTnQLqE6FvVAx4M6PxiXNiSvRPVvykmQX",
  "key7": "4ZUzWyojPcX6rvsP6NXkmPxRDM4XghxiNt4CG9yWFtidE4ntGHx6C3EwsEhcu4e93Wd8WmBw5zeZwu2quGqAimNN",
  "key8": "ANutPVVE41acYk8nfu3ci4xAMsZY1CwBttLtGFvEMjaV56fBHjv9EYgqHRNNkLS8yfHXBF6ThcVCPdjaWegW5QE",
  "key9": "SqejPoUsAH5hnitx83FEUEaE1WLpRq6Ghi4CVqwSPTnVN34jXWBzXKSH2TwsNFSuMEHgzLT69LdKbEoDwDhxfvw",
  "key10": "4WBahJzyumpjo5Jt4tGXS7RG334uySgrUjiTNgWs6tqwZgsLDXxESWPpn1BucgqsqszQocsSXeJG1M3tVNhEoes5",
  "key11": "5WWJwzkUTtRuPLVsfqrjHJEhxNswmyCsmNEdrsUCheZ3YQBLUeevYm6CrghiXQWu1PeVeecN1k7UyddG4B8M9w8M",
  "key12": "uLSWzKaMiFQY9FFkJbWemZh1vDQ3J4E6PV6RuVKtv6MrYn8dnEcHWQ87FSnmiae7haDZ7WTiSuugJscRnvZhySd",
  "key13": "66rUNg14Jw2SQDHdjtVUh1uAypuNQVPsN9QKrwQN4bQV7ZjctLYoX5RMEmufwV1PFCkpwDcK3Rgb35n2ya4pgGCQ",
  "key14": "2z13QAz1VfgTuiXMx4dYqJCDgtAi2QZLNbe1fnVSPLvS3LNqLR9PJ9xaQ7A6eEW6jvYA6f4PZah6X5yd3kVG4Y7P",
  "key15": "2dgKcTmkzQW6u8ykxH6TfHfnEshNjVSXC5hV4MXEsVqMpsvMrJDMyViX1cx8cQyUmT35pDvb1agbkM8yYohW2xBM",
  "key16": "21KjipYgeEsCN2FAyFfivRhmpALw8343ZfrbDBsqWHJ3TLUc76TNNbCv2a9yribWYRKQg8wgWXykZRJtdLw3D44U",
  "key17": "67ooPcbAFWEDLdCbLngumFvwDEuEkaimEC8mFHupBuDtGL1Cgx5TsyGcQmCk4hQu4vyQg5Lcw84dRkGq4FhuydzY",
  "key18": "iUd5vbotb75JegzPtcqsGQcdjHDVJwbX5odgEzvCACrriSqwV54HqBBvpJ2GEcmFbrUrhzb7FWbjZERnLvbppQ2",
  "key19": "5fWkGcgqfnSMQtHK2PvD53Mg8Auq3BoMKHut2Vg5FuWncLB6KvGgc7Z9UasgLwXDfU4AEdzEkUQqXr5UWkezPcm8",
  "key20": "3EsVoo1EXDXPzPt4uHrfT7TvhwvB5qdHkBnhkFfZNF4heRCYMgw9LtAWbJhs76c41cgqkb53qgQLbpwxQGbpPena",
  "key21": "2tBzVMHWk9GDLNw3VHykLy1g8gu4odG87nyFVxHJnoMUspSJ5vbSWscUHXGcugvR1XhdNSiMXNkKbqfCxit5hhxd",
  "key22": "3EkbvGdwydBkdCRwFqwpBb5rcnvhCKtA5F3t2VNujVuQTT1RZBequEDjDxEL2JqSymiBscVbfimTY3VyvNjobFHA",
  "key23": "3FYifZVppMEc7eUw6mdjj1yN1LWNzNXPv4gNSfpfDmbRj7iQZgZLbTBAQqBKoWMjKY6rK3naqX1euwcQNnMFmXXE",
  "key24": "2jcJSs48RFqcKJJ4ozrbvkbGpDKBKpXsz4hhLaHmRKAwac6r5cbJVe9qU6Qb4psMRUVSrPTDP5M9pzpMostMswPu",
  "key25": "3gCWAhW7osAkBNfDU8S6jCuf8Q7R49LE1bbgoru5QvfBMWBgyYMKJeQGenHxbnZSkc4cWoffwW4yU4ntGrKziTjt",
  "key26": "35ZNAgEznxWxJCxMKsZ5YPt99QrX3XtX7V6sMzEuJvmisdLLnDazsnPG2Z2rxNoXB6Z3rJxFWRuz8P1cexpsqeEr",
  "key27": "4YN9jdtgPNsWsfKn94WpGafLUuDcBzFTzWJdCUPooGz9SrVk7hmjGnUP9yAR3HBfQVy8iPMe7aUo57BfxpRWnadu",
  "key28": "3fx8W5pY2sZPZt2zejAiDmrrsu4HW1mBh7sh6QxnS9SSkHZ1HHGnesTZqSCzSy7wdc155pJ34wQjuP2224fBR6kp",
  "key29": "36EUuWU6vAC4mobR92p6sPF3amJKENHfXfBH4DXGNspQqDPGPQRpKFJG3A7fnZdKvo3Muri1LJrrwa6fo6s3sNS7",
  "key30": "5mwVQpQzHzYHLW8xogdmsC6qP2NqFD1gdQmQtxgcJoXu3QViyxvNSPcCre8EozRz39J7AGqA8xYCGY3Q7uZY7Nvj",
  "key31": "3XnhUi7NdpkBWKu5fTHqEtpq2Xky1UUsk3b61VcyBRHKfj9obzYL9U4MYKaSQNxwYRBLKbYsfFbuLYksegjXQ6hH",
  "key32": "2SJhMSf5E5oLkrYtTiC45rNKDVZPT5zRRHSF4YzKkNqKgntMBWqqZbFmeQecS1Qe3efBcLHcQTFzoJzcq9YHPFm6",
  "key33": "2bRYK3EM374HpNZD5pMqbNw6Ks37cZgk2V6qiTVaYJayMzH1jFPTC6Yy2GNkWFbLB3eqTnuWLQ95EWhgv87bZhT7",
  "key34": "3dYxhJe3ksXWfiJzaUgVWFbwrD6N6evZCnYhtVJV8WZXmo4Q4Vy5ZMo7FV1M5tnRus6RumGATPYjuFvVXjFfSv8m",
  "key35": "4pe27b3aZsbwFVHufpbFAFbmf6LjHg8H28WwCTPvMhAtFRijUh1uTJ9RwsnwmJbu79cWgcFFCpnkM9zqVzHSiztE",
  "key36": "5WL1Nu5SGcAKqeNpAvYJAGg2HkGhKeNQX1vErrpzBYLEk6JCqyGCirBGyrfpWm47ho3YLySUxeZruSadJGuJKYcg",
  "key37": "3N5FXZpPLXXYuqSp9bUFyKx8JJ6dLTQpL9r6nxLMewTsV4AK884iYTufebxiyL6KfAZdCMxupo4rmGGBjwWF2iYT",
  "key38": "22pH8vn3rfqr8BKhj2NYjdH1nXrkjdKbGs1rTiwShB5mexRoSdiALpFVXxP5dXYmjC5Cp9A1wHJxPBcBsAhSahdW",
  "key39": "42zSdKrb7wJjtrzPzBuYNuygHT8BZrYhM1XRxgCLyceghjrGbn6UA6RfkYYjkMh372kxhPsiktvEcgj9o6naUeCR",
  "key40": "2jR8by77o4jhxbLNssbaGUTZNRuF8WJ2zdX3CVf9VVtCwGVBdNRfYd5GJgZAFiHNV7FvGLUC51mQqmPzJxKC5Uze",
  "key41": "5REEhL2H1V5nbS3tjzautaucibnLUuV2rHXrw8yPytdqDQuopXWTrcshCaw6SbFfQs9prKywnN6NVnZnQR2ea2Lf",
  "key42": "65k53Lp9WVuHey2DXEsUZ5cJfnDHiKPevn1HaC7PjwpAEwDP8A722dKbBYyj4EY7TAfwVmZGTbe83Gjj5LpWLa6X"
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
