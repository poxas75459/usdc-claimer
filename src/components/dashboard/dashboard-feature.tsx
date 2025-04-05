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
    "3GLSqN4LvEk61Dh8GNA9YrYCRNR5eM6eeWJ1bAbRsbE7cYAmxpJU6o2v68oA3LznemeqZdN6r3oGBPG41iioW2Gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQvPhXEmWQdb61VL51CeVRFXw57rLUt3dHRQxyfV6HpLv1m9eYWPyHSqDmFpxKkceVxk4Dfq9rvxJzSWa9QheDR",
  "key1": "3LVRmsc7DysgpoKkF3d8yhCTTbkUny3iV2JeSD7stdQ5JdTHJ1ywbmNQdktfvLZPKGByHmg71W8uGwaTNAuTAqTe",
  "key2": "34z2nnRuuBQv8FCFEkLyMehe8UfD6EVqH7h3GXP69z1rDQQtD6mgmYtdMniBS382hoCHFDcyq9L3mAohPuBH4C5q",
  "key3": "2D87yDrAZh4mzrXoJ38KyVkaxvZHbtBCAqhDkSdfhz9TeToHvN3fJmZaAeuZy7pbMFwS21g5X7iEqSMgsnwyGdYV",
  "key4": "F8fEHkShMQRKaWGWVkzuSvYBoQULoWyEmda3ZpkZ3U5T8EPbd33kGvNAfi245auFr74oF87gAdj24C6J7QoRRsh",
  "key5": "5YhtHeJBx5auxvdxKrB4JG1UtUkWKtnp7LkxZQsGsoXfefA3m1tQSQwus3dxpMuDRUAW6EbAtG2JWPjuFQBf6iRu",
  "key6": "5PFqaLHSD2ci89ayZYaSbhnwKhLncYLfY7LaAkP6tRpAQYQ2Vt19VMBSjJckjFH6CUwcqhvi22YSRByVZfNCGq6Y",
  "key7": "3HoSwTXgNbExA5LgjB8YXJzpzCpSUdqjxu6vodF1fiZd8oyedeqnrD4cB41FmjnntPr5v4TMkpb8VM1M16fUjCKr",
  "key8": "3GG97Wj4qPoaxa1AJVmN3GYfxo8ZZ41RHJQ9vQ8bNqZyaWkfkYmPGQvegRBsCQMeW8anHjT92GjGkFcnXHShMEFB",
  "key9": "3exKXyUFzGxJkmzkZgBBortG7o5CzHj7UuLaV87Q9AH3WzWZ1HmoHM7Johs5qfDwLXo2hx9P1XEcqRE7myjkUpVv",
  "key10": "5hasGi5V6WnLxCkGr5QU7dwzYbKz5rKFzM2eyoymQbXxbcbC8C5vcFv3nKf1zJdwBskMYjyiPRAkV7nLNbwpZsWC",
  "key11": "kmyssoH9WfAdNMTEGTfwdtu5JRXKTLohxqW47MS2VBVJ81TnqSkNSmWw7eo8G6VfqdpfMibXkamiFHoUHQq9P2t",
  "key12": "2oDopmyL6SEpDQfg8aaMHFA3uhXeYjsizHAa6EbYzb7b8SwYeyC1CrfR4ZgfVTz9He8sHL2GtcjvzCdpZHcS9X9i",
  "key13": "W2ULbpMEJosSSYTDDAFogbbRzEfEmExpxEzsVS5eSH3AissVAJ8YwE6uEYynTttgcVRLcWQC6feWq8zqLGpjMCk",
  "key14": "2chkDYUX4rugUv9LGcJ4HL68kvciQwBSEHXazb1gjYw28RQxmuffs8sau6bbvUDeGfQGY2vwDk24oVV7nc286ZY2",
  "key15": "2F3P6hdznBY4vyP4kFa7yKhDTQsWeLsb7jWypFqYqcW96PdxgdvxEqGbLS9FdPjwrkoshs6moNnyEAHou64HnF3Z",
  "key16": "5YeRmphk3WhsMACVmq7hNHtF31bsvegsM449gdTKXanTb3dAKdW9pkdgTGy32h7oSJq64kKydupvRYzhG8WL58Jn",
  "key17": "mKn51HHGx1ztcCBX6gz6wcxvKHcMB4L1srcvutDtDZvanGGRpFMvTjo1DY1UoioxjHfgHcwnxVXuAuDHZWrHwhr",
  "key18": "Gic2NQ4g7uKzDfsTDLfgQZK2vmdrfLxaeEyn2Y88eABnZZsTW13qmTspkfn7keLSZeLKpT5YCBBXkhLdosLKnkj",
  "key19": "3XWrMumNwnVUuETfzTYVy3AK9a3XwsKLReJ4MZLvXx4r28Q2LQ9xMCKZYC9SyYUh5vh1rKXJN23Wsp7oBzx7ga8m",
  "key20": "2JwYiGLNxgiVcXqFDEnUcvRRi9mLHL3dvRppgnM3hzRy1JB4ybFqTbaYRGCTe34U91h4Uz5F2gVUQS9McgouA5XP",
  "key21": "54X5HiwRDuJFXDJFNqjPbswnXQFCZySnr2b3o83hLpDBXNXxXjqPVMwwxvTyHQu1STSSwtwGbe4tNqrHAas5chhs",
  "key22": "5SDTxAZSk9Lr8vtzBEyYmnJ8Sm8XkSfsLptxUUdKVCkDK4NPNnrDzz16ZJwNMk2XPZHDf9AthdQvGdT3ipbTWKkj",
  "key23": "ddyqJjxYgtFf1NwELyTTaP13A6B6EGUYxAKxo1ucKNFmdZiQmoz1gUa31Xnzxyi4Pt3QdstA6VnWfWr13fpySXJ",
  "key24": "4v9bynFC6prX5f3B7AJyMexxV6TSAWCjmBMCS64urzNzHgB33PphvdTPLHUMMW3iPFsGYMuenATWV94oLgGCc8t4",
  "key25": "3iQuRDo1ZynHmTQbkeqiDPS7gtvr7mxs8tXScnaCxGV3Z158zQWq4FVsgUny7iLEMKfDX24C4qkyYdb2esRns9fP",
  "key26": "5KBHQ9AEkxRSrnoBEWHRu2Qc8mFAyophvEbuY4GMAzJ8CAaNbpFv9dGYijyfgPFHivufgUhZYzPTHhzpGNnhEtSd",
  "key27": "4PciqDVyyuQdLfoTQWP9Rx5DtZBarCfe5xwcbuivPQsS9HDt2ZbXB6mHHuZWEAPfzzoPvi4dUFVRWkcdzKBeNSWp",
  "key28": "3nDD4S8Miiv3pXvFZjSqqMD2hHqC149995bnp28GpKrDVaodzjCSX67xwjArdokS2RpFARYgK8C4nXRrfvugQtTC",
  "key29": "4pMQWeabTWrhyudc4MzhQZ6LLBJe33eDasyeVWujJzv2rspqh8b2sT4uLZQM838cz79sDQ7zEoFH1DSjYxAgNQvM",
  "key30": "3XPdf4y5wAQdBvGCQfWWVgNnQtd56WYjdUCC2gCnRpe3fe3MXHXLgud22ZLLPPfDiivnfaWhtftd8zet3N5qfYJf",
  "key31": "2DDSbPK31GnJ6xbcYZVxdUZxi5JBMe41jXF1U7Z97yhDGU1KV5v9FnVyXYkzj5QEoGrBHhzRAmrTNKkTrY9xXDBR",
  "key32": "f1NaUkEYFLxpiDBCRd96hyny1NY9FAFQZdr7j7GUWEYMNfqipFGvUUTMtohRNKDExTpQ5XWLgr6jaGeRMP1Kmse",
  "key33": "3bqa6Y3Ran2bZHuKggsVH4ZfNWJusGMPXuPVHonkJxGCvFaHjaqEAfXSbkFteimwn4BK1sfQ31UJgxmBspUdo5fw",
  "key34": "3ikrGYnzH8DhWmxpRLZw7q3nAPv8452fbD5zCMPe3YNe3Rmz2ZRmvyrxUohj6kosQTSAS4AFu8XcuraFR56VNMPh",
  "key35": "3UsYzsgREvh42bw4jKsEYdF9ZVjjPxXJG45sxXwBrXn9n3iRHhZQpYiXyNpgD2349WKMWzbbHwwqyRefCedkVBz9",
  "key36": "zcJpEoehXg3FzN7xiQMFWoNsAXApcMRC9wR8kQsBphrJocM8s9oZV1CD2PMSmmu3siAeTHXisYT8PRe2tvVxHVD",
  "key37": "4NCmicmsouLUxk3T13sLCu8LzyCzyddYnrxub1ABfGQzBUjXDQW8EyK1qGHP82vfwZjUsWhgBFwSxy8BpKUcevNr",
  "key38": "WN9Us8jLVjSddWWZdCvGy8abJWpYUCDt65P5xmB3yHyRzxx2HxmrqMfiUvtvFQsDEB47gPpdHt94VgeNqfaxL86",
  "key39": "2EzqkUBKsJqh3TQ1NWAmWTyDDBFSLf1sXCctQsmqo1wYAww6r6fKLDLY83RnGpuGaZWfHen9vNaVvXYbavqLUgnJ",
  "key40": "4XBoWxGRswhQ9VxjBHyxJjtsa2DhuCBjqHQpWuFcMsEvW6LicLuhCedwxvRkxtNmzD344buuJ8YvNN4wCfCLc9qX",
  "key41": "3WL43K3SUK2bSyZc6ZwHF7MFraJ96Y7KBCNVTgeHpqkAtMEbZ5zHKVwyyJwceEiAUxbAiVbokeeoKPTB84vjCukw",
  "key42": "121RxLtyE2RST3Fgf3yUu5K7pN7FtRgywvQym2ozWoGLpDcKnDyqhH2SSXLZ8iMjTcNgBUSavKsXXbaxWYge1p3J",
  "key43": "3dETDTKSPWSLiAUvTjupTQxvnUKSnoVjAfRcikhh8nf9TKW2tpZVUxEWehv9hzpG13LvpFLv4e5fGBfHivfxH3Qm",
  "key44": "4QJzgUYmVqRNyGXcwo2apEnok6Q5ZaanzX8H7vjvEL83fGihQU27CFEjQCijZLF3gVva5yWWbnhnwp2ouG2KwDXc"
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
