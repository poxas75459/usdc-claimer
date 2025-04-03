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
    "fxz5seKxAsAjXYAQXXTf5dmMvU33yYKFjGRhKUkXLn8Np5Ed2pMSKeMULk1Shb2YUd2BWuYQWzTCAin56SWhYTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAmzsWehXFbjN83QmHVLerMtoDCNRCzVAgZr3RPcpdQpWsgkYCBzmFDa9mPetoCBy2A2NWBcQtrMXo977n4xZKg",
  "key1": "3CyjcHJbEYo3gSjwyhLZReo2Ph5F5cb6qXJdMXpSUs2KBrNy7Dmi1md1PD2PYxJWNzNkMWSTpJrveNsMzJwpaFUK",
  "key2": "3gnZGFPtmdKHTczAFiByaNwwAV6gZR6fHudkyKP7yaAaXKrAFPW5cVvt6YNiy46p7B4YKS4QTixDEXWyyx2Kb2gd",
  "key3": "2ZYcw3zdVFiPcmE1Vr8T67GKoMbFVAfCrwhv7U9Edkq1C6jKTjzqzqnG9D35PpXkpskb7osodPHduiSVxqEfetHm",
  "key4": "28Km2NBosKPHZhgdUx4WUv13c7Dx8imXy8dyCeEPuEhAmN9KhKDHP1JQK6JntLJMA2MvvW7kofLxLADgtsyrruUP",
  "key5": "bYMgqLGXEkBxhsA8ARhWtkCEmSTbiPkKDNLP1Czy54xqpXc9tZHfR5stAYfCgxsHt5gCxpuQWj3snVhCe5L187f",
  "key6": "623mewAiuWKgYukWN4ihHmu3HBhF2BXaSaVJ4mLupPNfoZFqMNuLJfQuiJxttjahAMMy2HN6J5oXDyKVszbcL8rX",
  "key7": "56pYwTviHYy6avjkbUt2m7NNe8fGCqksTf18h6Qy3TX1p1jLZbBJKZFDgyhxJbtzeHGHSLajVGvbzUt71ipW1GNW",
  "key8": "2dXiTDDq8MPybxAkLqEg8viBPbzP7bEjHLTd9FTA9VjM6jrK1zNjnUC6DJSUyDbRu8Sr9BJwWS6538U3MBqzwJjM",
  "key9": "297BAJsYKsVJ98W7Hr8DF9DJHBxrT6VEgYM7bHCWgxvp9yaj9KisXMCshakS2pDYkKRXVfGC1LTjfxnmMVTKasWn",
  "key10": "2WgGN5w2G8UbeW6htJQJgTHj9c43chgZ47LpfseCLiDCcdbtcaczPbbgSqprgojp1EiAbqo6vTaqn1p3uxHjtiDL",
  "key11": "2XaYPAvzmViDbt5B1rfErm5DxSfDBJALrkXSjMf82EQJWCQWVNgwMMEPhF3W5mzJwSwY84sjY8X6tMD5h27icmb8",
  "key12": "29DUegsXnPmUyuYTFmVAx6RCrcMiHTwiNSqnv91f3mTMAwsfMYUAafGeT5uziyRknXx487fZrJk4nmDBVu7YGV8Q",
  "key13": "e55GiabTGAAE4giQMf66p9gcpogKXfZNzCVxxYUScCm4ZkXkmBvxDHtdDSQg8ru3jrL2JpE4fsE435bYBNURa8i",
  "key14": "4kKR38sVGo6aoAdnrYXu1U8KYFU8DzeeJ34FjSuecHr4YJxGUQvU95bxnGCUevjgbvy8BaF7KoJEv8jLZcnKgauo",
  "key15": "23xAXWXqmqPN3ipLX2QGKGB8i3sfWnaEin2XHzqAhqrRRjBRJcoqNi6yiBWF2pciWsmuH5UH1Y8qsjNqLA434ma8",
  "key16": "5rnmqv1bBsQ1jSpfVJ8NkinbwZ14oDCo1LTRMcaRH8ydBFT7icTnq8g1mC3TipvMuWN8fhwfKuqzG6su7pestCb2",
  "key17": "5iLMvjcbWTaVyDB2J7vMfa2U7qFQKq1EiwGnZzHpNpntPtBkQXhLWMq7Va82nAri56GQQL7nMbrW2gToW5Mooubw",
  "key18": "2bHEGHsGvDawvtoDkwEzh3g18uYZKB1RoxX54G96qKaQmDjqXe6JQxsUUqEZfPN4nm9Xb26aRy52i1PsmNZDvgwF",
  "key19": "2NPKDnRTHEP2axNUYqGK5bYGiVjrapKLdKBVasZymxF5LFk1cPbQdGjgjfPhYqdKvF18rxvkXtEJtM2mSHuFzWS3",
  "key20": "5fJ5Fc8NmMaEWYy1jyAx9TVKV18npYAaugMV82rshf8nQNuf25Ka3VEuvknDV5uqJ9sWbBgonWfbTX6VDtHSgrrp",
  "key21": "5ubfd1XUDLbhcaqFyLDNjcNogMB5jdeoBr9B3zPKe3XXjVsJpJQrzq8GArzc8PYfusqURoySBYQhWALat8bVwQTY",
  "key22": "hPLgc1fzBs6cTUDBLjgeBN31uJW6CibRS1Pb1hdwMHBvx7X62M6VNNFhxNH61bhf14zxVZ15T1QnJTmpkhxJbVB",
  "key23": "LWYTRAmP2QLo7RDWyy6xgDFpX7jCoL1gqjzofECsTmZJ8XVMU4tyxqzpnvAaKNj5voErQLFHYGsZQsNnwxrRc1b",
  "key24": "65tQHzMRsBo2ZMMQUDCarsKVHBvBSQ5aBNZayGNe7CNj5dabgURh4bGUbBCgFCRJBArwjTQNJ8PMSPFdJkStF6yU",
  "key25": "Zxe7KuhasZAwLYmSwoecu5wxsLeU1yEAgPcEaCTgjYGRGegDJmwWB7F64vC2koENETeq19MWPBg7jMwKW3Uniap",
  "key26": "2GrZEi3qk6v7HhdQiCVwTojiBRUsV83KAqw9VCsD7xGVhXerKEVoGsunwHQZUmyhEMJi6KZNrR6PtA6uy4PG3pfy",
  "key27": "2EzNFzmXXh2JJPS4QqDo4U8rXvJwjnZuS8aho4kriqedcwhSzoTCQZ5yqVqQo6exWeK8VjtFQrTL6bTBeK84b6i3",
  "key28": "2XSTthgfyR7Wm4SmekoGrmjqqGuFWSSQXV8KBvEuT7jwJTX16JdeKRzgEETi2tiigDfHsmi1P1zGjCTnJZG3bNw4",
  "key29": "4JfsCb7MWPWiDFwdom6f9JeMuYknY8Lde33c3SDWNFSmj7HYTMcWzic4LQQUcWSPySF3tHAzTFoLFqSmo2CyGvtQ",
  "key30": "4hDF1861m6L9UhJVyHtvqfcR4k4RbzLQdtrd3hUBYEant8EahcdYx3KJ6ULFivYd621cDDrJSfTtq6KX344C1Cpq",
  "key31": "4YhscsC53w1ofR3qCBWFsfqaXQKALF7RjCsxQhabg67Wu3ERMc2Ev1HEYTDviznZvajeo5YnhgzGwFiGTBVAtXTS",
  "key32": "RKUjzdixBYJfX3RuykUhU1MdcA6PstXdsUREyeGm5QF97imfxbjrd3EYoDkyjFkA1mkYtmaTURB9MNZV3PjVA1f",
  "key33": "5QFKKv9m7Y4WGDawT3uNMLSHmxn5AuHyZ8YaPm6zqyZDwTb1gwU7KZwpRbsY51a5nnjiEq8oMU7oF36c12987oQ8",
  "key34": "2gPr6eGvPXMgfNoaiQMrk3KRL6Zsn3TUmUEVebb93qJuKki4C31K95HGoboXybPjTkSC19YeY9Tm7CeBT6W73LqA",
  "key35": "8VKsBR49VbPsBv95FZLndZKhM5y9MY4NQjQD8oQTRvVKUDbR8Lf5oSmPPT4GKSFCSVLzVowQ1BjJBjhS9YpgLpT",
  "key36": "KheF2qb9scVGKKNYB6HVJZW4YT3UHZrdXVMPQChbBinegzESWb7636GWvc4MungRNZnMUHYE7VQ7wcCFSP52wmS",
  "key37": "3iPJtdRaRwHtfwrkDNN447KczJV9gLAW9cAuUxXUYdeiLzrNM8SUHSjBdovAVa4wFjDX4CGZrG73apbTrwhTvX6f",
  "key38": "4ddvecHVQKJLbWo5VeUz9TKczYyrmmEVhcaHnbzdMjH4gHUNCSRsZUGZsDkHABCW2U2RvXzCvWzsXRm2nUWLgWfp"
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
