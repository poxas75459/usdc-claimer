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
    "tFzmZKYYBN4jN2RhCQn5Jim4mUoDuD2px5cXASMScmdYW8A4gPiJZ23KswQ59ypZYNjfX4jZNfUjFgvPEWqtCc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PvWe7hNJXCU9A3ntRUBCZNZ7giYonPNRzyMGeZzM9NG4Y4rjTmWK12dMxaThFwjkPHKrViH4z52KGBH92oicagF",
  "key1": "3BcNdHf4K2QHDmdA7JF497w3cy7gHmvtoj6PRbi5HAxygjjR5PtBRxK2sTnxDpLvjyDAvFZH5scfPKDRtzHHWoPx",
  "key2": "44Za7zv8j8eu2DxRLVtFuj4cwPMReJe9mMrM4UYHnAgCuSsGkwviGDMjZz4jRXynJtio31pCdyvW6mdzoHq6wGAd",
  "key3": "3Vzwo31fKaN2i8njnGmw8FjF47ocuVQiCaTpgbFyi76bRcnojFgXeRNdHZQpE6vByeMiw14r2UkU2LiE1ERGZk2d",
  "key4": "63BQ51yT12STAdUAAadMBqY8rwk1Ni2VTNQ2w9Sihh3xeGhGLA7d7onjgrLN74ENcpV2i9FDsFjX5CR5Msg3qKHs",
  "key5": "65r8pBCx49uuVjAugrzQ8KUFxVZ6RGL7BaHkckE2sNvjfSPtdacMKczTSs71iDQHV5S9qidKxCcLSNWSpZroFkwo",
  "key6": "4JqKH3xaeYqvnmEzUjLYuyA8viohXkWAv68fJCoGwdrxCkqd4Fg565gsmXgFjyccwJPJaSMi9HPwonzaqJ7Tb1A7",
  "key7": "5v78vTwi8UKzdxj6QnSwHNMxnRKbZSPa8rZWh7VCDqQDueR2gcQHL3fhaJEzyrWLYuo2AcVcho49M4mCBZoeFeBD",
  "key8": "2kDLm1ECJiE3uxYSwAaN6w1NcebLvtakGA1eZaNyYnxRMBmPwZq3j9vtcgRpbsWxsC1Ve3bw5Pb2RMoRSxeLmMnH",
  "key9": "sAgNXiUcr1GYwncen4LLksTGE9dLpTaefkaohxC17bZscDXihoPWCPeSBzRtZJ6gezVFNrF2KVGSQAXedba52si",
  "key10": "qydiNiyEP5i9FzYpbFSpdKypHfQK6FMYAX43EJR4HdRwRHJk3HHugTSxcfaXfwpJ6jVscYFtEMmPDRiFu6A9hG5",
  "key11": "2vKxDnYyJXoGvouLAexND41tAtx3C1cEyttRKe6qiT2ptvtK83tWNH9K2CfMQLqzVGFBVc8B7uX2gBR3nPGNdsvW",
  "key12": "2RvKUmrkGyBoQhp2vSstAKWSTSm3yBvqG5GAsrvm4dz6zDBLJrUPhBTzyp7KZAzvCqk3ziTdwp1NjFKmnXhjXGpV",
  "key13": "55BuvmnwHhrFZohzuotegoTnZFqNa8U2xZUB8tFs1Te84UeoQCZzuu9TJzAMp6jaByZYuEjsaCwGMFz2sE1SDwYd",
  "key14": "4a9xjc7pH2Gf6naWiu1vZcKmhYJixNUqdxs93jiUbHLEcvCY2vUNEyEz9Vou67geLENWMpXqsUWZ7dadB66YgoV2",
  "key15": "64cPCvAWGXe4jM5ZwEHLwDVEiyzeV1jGg2eixj49C7jQFn467VbRpjdZEZ4piAr6fUMj9mdHqHpJ4tX7hPnEMvMg",
  "key16": "2B856EKeJnXD5iMeisQHVxHvWDeS9XuivTnQ2VBLAKRz9EQ8Lb3bsp5MXTXjUS63JuCwvxEebapnMCvV1iM6ydV2",
  "key17": "3kXhWbsGCQjzFDyea4M9JhbfDRe7kUEKKEr5JTc8w2hwbKLA3Fr545N8pokXfbsughZ9SPUq17idbfnoizju9ev9",
  "key18": "2NazU2uvVrgN3VhTx8zumMuBgdLQShHnfdCNMBCUdVeKgE58ydwW7NdYcBBT9Tt8q6McFRNLwrjyjPvi3d1JXiZt",
  "key19": "3WNS4ujZoDR4jnmGtfDF16JXUykAxRkXWSgRHbuuV37LpxYeGFwaoPNC8eiAWTVjByC882qVMZCLqGbZ639CgAXX",
  "key20": "2tmaEUwA4mWpJdKuoeRR7PJHy8bhnPRruJTkYUzK9fCsmwrAzWTzEfrQ9CUZkznZwh5abq9JkegfwDpgwHVjEpiK",
  "key21": "5y4q3Q2uaef21tDnKU4RrzucybxgT2VvNYm8CGqREc3YSVeHyyb2BmjAtq1fs8tRuS1E5zdUWPKp3HirxWTEjzJq",
  "key22": "3nm6hW6R5tUnFQyAVuccbbEMVxBAhZ3KuQ45PCUX2mVRVS6h3KvikgTFQZGdot9UtoTgi9fyC6jhAFowKmVctZVE",
  "key23": "4eVV8P3QmAuEQ33sRv6jP6W3REAurBcZBSidgZ6NMfe8zBWyhftxdGs8A4wJ5XPdcPHSNHXgzSRgPMkUs2YMJSLq",
  "key24": "5umtMV4nJWzHXbfk5ouaH6Dw4obhVSHFeRijxiSNk9ReXrUtuDbeZfPSnq5f7MhjEagfY9W5uuqGjnJgfAicmCU5",
  "key25": "5LXZ4bDdhqTiUNS8KG7fovJZWVhKsr7kr3DS9ENePT8VvXBb6P42Wvghygkfih1JUEohbgKZ2K8UuixXCyKYi9YT",
  "key26": "3aVbd7WN5SfvCur4HTF5sbrR16467JDH7ASAcEiLuodJxX1TpLTqnTgL5Qr5v6RqXZsKsJTE61AsoRfbwC8ifNt8",
  "key27": "5CvzpL93k9aGWbGCqdcEx2asFsggUP7WmeozpvK4TqALRQ9eA7twh8CzD766u8vpfEKP3xDfdVp8UStLiFCa8Ep6",
  "key28": "5er7xLtvW7Egc9pjzroZ8ezE4uSw72Pjkp5hPEbYLtbMpZTFn6ZUaMCqHPzG7tjEnvFk7qDmmaQ4SchDznk5LLZi",
  "key29": "3PMc44QQs86uaq1SXFYbV8gVqUr1MoENXdxiEAWipPutn9jaucWGS8GCJib55LPAmEH3y1QE1vJt7kqNhbsYNSZ8",
  "key30": "teQMNmmHECqQ1kDEtXxUjRWC1cLZwJVEEiyHtK7zW6g1gih1cCDxfXLKZMspay1uXpf4dbjag4s9A7JNioc8xn1",
  "key31": "4Gp4x2AhA7inZezyKJzPwU1xQWUhEqvibW2rhwhyRCqCyUETfKhSFwmf2ebu7YMuobVx4XyrKVbsPJxPYt9PyMdr",
  "key32": "22idqcgZ8ixw34CRfd5aDEiCjfx7cnJknvcu8vVkbHKFZkoP5Lw7A4tZSBemmhXPyje48nktG4nzcMPsDCGGGTuh",
  "key33": "fSmC1sUH3PsNuopfR27Dnb8PHrifp4K6gaHfUpG9UVASTi2wb2oaN8tuoVRyYkuUJV93svx5QrbTLiifFf19xry",
  "key34": "4sjbsH43xXw9DCx4WkpbwQiFjQaBUcUBaUPTTmx2TN7GTRHmwsJ3iP4f57YLCgj72iEcFyj6gDy9Ph1HLWxhyZBr",
  "key35": "43zKKwqgf5wcvbSCAuBbTmqENJ5m347KetxkAT3i2pTrDesSp1UevCgTfH32TAJQQ7fR5kafwdfag3AMAwPgF14A",
  "key36": "614sxECvgLkjDdMswG524fdgKwNibPLVVyV8Z8aVhwo7FFpPcoPBnJD8pPbtEEsTDrQqm24eWLoUCy5bFKQqdVfn",
  "key37": "38omNEZw1nR2bVkSxRfcFLiFnu6NXQ6Xcq1nAJ1TuvMAZcPZUQjZDjCbxKVTTjntyEoZpPc9M3aBp2TndnjUCv9g",
  "key38": "33iyxmm2nYgJCowc4hXR2Xw1DCjqR4a4jxd6hVQ3ZRxSbR7sFNavEsDmW7o7s8FH47jk19GvytWUunxbvURTAhEg",
  "key39": "44iYL87oKhvCAiGvAuTyc9ACJE1ZXTXBQqjt7zZRGBv1EXvhQfZtJeGhncNJ9aQPTRmD9UYwqgn9EdzsKsitH4ZL",
  "key40": "241FYiwZitqYBRiMQ9KNESo9QzCSQ2a7xjBy6ScFR7Yoi1XfcHtGv1gKThATuPKXoWVcjnqz7JTCatiCFqYLS9VX",
  "key41": "2bZrNcbuZvZvP47J2M4WdhPNwhagMfeBgd5sL8janGb8BzoiNJ9nLX6UXk5Tkz7hsmHuqvav9csxCS6q1co3Mr1p",
  "key42": "5ZJcgB1tmVarwVozUheJhQVbt43DkmXtvCEr1b1qkp32UnEjdv4D6o4VqmiCLvAam7PtJ5HMwQNWztn58aMjuXB6",
  "key43": "3GynDghbGuo6T2kn3MZN8uhxZ8wyx7uY5pjAdjKyho8xECGUWkd5vURaoGJD4fha6AF5PBnx9hZ8nDmR4krHwY9f"
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
