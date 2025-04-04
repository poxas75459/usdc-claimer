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
    "3NxxBV4NMFWVQc95M8MEYVUCyus5jP2DboLgFSLtKAn3LtCLFbikVa6TYAcqYkpjRZQ9q6mk1YANWRbp5hrgD51C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ntuapf5yPearqr1q4m2ahLvuYXyuVprm6ZaVpLk8YuwtJGuqdCTrk7dNq3PuYYE33bUmb1M7KUnvLn8M2jr9wdz",
  "key1": "31433KjUo67AjYTVtH17mnAEjrcr7uSC416XYZYMWnoX4ZcVwMvThjPALEJ3RRRLDxhMxGRSP4rzDnpncfuhBact",
  "key2": "65KzoHAFEqNpEWppqTP7GW3Th6J8PA2857w5P9P6AhB7mF4qELaeer8kKRa1BTGPfSezA1mHVUrM7yjaTPbiaJ34",
  "key3": "3NhtA6LamYXXgyFFDdcASahiNMPqScEqrfa7RBV3gjK47PbRsnjgipFm7JLGEDbjH9HN1x7DDGKkciZYxLeqygVC",
  "key4": "CGb21JLs2FR36DQwJaJvcXsLQ5PeaP7x7RwxA9kPrcyxMTFMbAY8sU2bbmq6iFoJQak8gBzMFv52QZc1LMdNVTS",
  "key5": "5PNTVpi8ecw64mNJdgMrmhXKszRFJkkxHvYBPV3eMvDKCTUmmyJTzjxAHDEwWzXpmbcTP7osdbFWRKPiTwUaSLXT",
  "key6": "31HZo5LLkg1L43sQbTBmJW8nrXw6KeePUwwGgqLeH9XJTQBwcf1xFaANX9wvWMpzMtYPgAbwF4LE2Ci8NWju6ceg",
  "key7": "DCSDysLAzyQ8jQgukPeH26xTf89cjxTsfGtLsrS6cXj2r1NxoDbBd2g95spqbVSuJGMDQ8DndUDwZ8tvofKus8y",
  "key8": "2WMnQmVDqPsDpEN7oeuiFWuY7HeCnkt7ugYSLDrVgxpTKmLj8LtGvJz69ra1NhATH1hAdxnPNi2ZFF4LUgJ5AEZo",
  "key9": "49SuBQ6PMRa8ng8akfxqbXA8GFQabXtaUt9pNrUc7TCnD84n3CVjU38JkXAqHwwptpXTW64jihyAwgwSSpGFC51w",
  "key10": "2wjZ1XLrfWZnSviGs9B6yu5Rc7HJmfN9iMkU9ZXw1oW7oRXUR5rnnphccoTUhZ8Hc6EaL3hyxM19jxDx9J2RGar4",
  "key11": "2SzbbiHGCqFHkTju9xibTgfrcnXwc9u9gMCgENLrBEpsA8wCgQnxmTmMQEZhrMPXRto3e458zhdQ36ZJJnU7jMnT",
  "key12": "27VN6F9ZDWca5qErHCRbieNCkbgKKpKZtgNtrc17kiF73KpBMzKYoGRsXf2adZvVSSkQnzAjNrhjUBNd3vGrYVmc",
  "key13": "PtoRrJo2FNiEpuurvbY3tuH5R4myY1RZ45Jqbmpwg4qN3FuZfEG8FLRsVK8zfcATCgTWYsSHm8FuDrHyzFshWei",
  "key14": "2TSJFB6ZenKDPzS8kuFNyTVzVCfbBamRxzbn91sZcibqiHH7Nxq75BdfkWYgasoxfKLNNjYNkKt3o1EY43B3U5oP",
  "key15": "5GrMjy2dh9gveNyE6ajMvkgyCxg7Yh4WKmBJPitS3grMSq3nfZR3FV9CFkGiRjQgGdwuMA6Pmn6t4Pw5SJRX1EQi",
  "key16": "58Y8JwpV7ee9NG4TB7sjg687jLZTeBkoEnFAuQA3oEZD7xrqqw7hoprDoTxhuYbBgmKHg6oiSzMQMfPZtnvg834z",
  "key17": "mJzm5q2uEvjjLcuFru6Tc8TzrN9tPNnEpr9Krf7cwaukBsqzkfdYJ7P3NivhyJLZrBV18FK8JHzZCVuw8cQEnrL",
  "key18": "2MYqcXR5MxMeycZgDEscdvNtY1phf9g4WrSgyMifQdCKt274PCxtPFTq8WUkVwddxWjrsfLh545RrEymS9okDFYK",
  "key19": "54NZ6UNUbnqAH6uPsJU76MBmVf9cY7LPzQmWSXm4cDEDuUenyj79f6rV1fRNQETvdGcJNs6KJEGd9W39PXCLgqKm",
  "key20": "5DWpRFkowmZN5CoW2aeK6NHg3gz4BrkDQubKAME5bbEXTwSK7uwLAN2W9VQckRZaXURGgjHry198nwZwTgsDumaL",
  "key21": "61gmVn7LMSTajJYtsFuzuNRFiNMwf4SHDz1BrjoDgefySzQicax1zCQ3rnPSC5RfQahqz3E6Cjy8YZcH2KMpYHys",
  "key22": "3BHmPTTZwMgKTQBR85tAm1myN7UKUej3zM95HVbjY4XXBg9zbmoP37AQKAC5dV5PLd94KUDk7BWohDJwyX4QgLk5",
  "key23": "4Dp97ynCrE6zjc6zhd8iUTBoFKwLBc47fF5K2Vp3WZtsg1vNCTfgwzf3cUT5i9yYx2VP9xGdx4VLHRMRbpJkaYPZ",
  "key24": "5XDhdEbtowxPweK29kRRJhMaZkA7KKWfiGWgpveqTudTaL5Tf2KSGBHCbLBWpsek2MGFg9ccvEKPnYYH3aAg7UU1",
  "key25": "3g8LaxP8R5WsAjpywAfeVVTvtpP83MzC8R3CGuvZpcbHMPRev5ZpNVx71qnoRm88A8jcLt4XTTsvM4JBF7yuf3th",
  "key26": "4hX9RYxXeZ5j1hjMWEYKds6ybEmuA6D4VDyPiRKdg7Qrkbi1T4tuqW44ABao3QN8xgz9FNJLuBL9ApcMPng5xx5e",
  "key27": "GKrsaGTVAkjQp3faacRLq73BAEwrnYjzrQtt7ArGCuHdG1P5KQcfoH3ETCtzmRiCuP3UYFPWEQ5ohtqz74wfbvV",
  "key28": "RdhTgQ7zso9Np2KbezBh2Soy8UFoNKBoRhu4M5f4zBpUf62285krknmeLnT1UsyrUhK9dxdUuFAaUfHjAeUH5ou",
  "key29": "5unuoVUUpUMC3HfbaQDDRivAMn94ynRqLu7ARrbPCc9FBYeehhHf53BVYzG5jPH8soyZjSCdfZ37MU62jfzf9ae9",
  "key30": "DecfXVJJ9wqELSidb92eKipQ9QpZHqPYCZAy7wb1zxdV6kS1mfSpET6XusFVLVueR5264MPci217wjU7G66AULx",
  "key31": "5SoPfegkdeh78mvsZ3YZteZx2pmyTUzgPgdF6K8bq69Lg9RRZHmH2iqLSX6gY4gfMHrm2cz3fYVFsTNaYJyjZcPi",
  "key32": "2sQ7jHb7LmkXVFvQCBRdGnKcNUD8mamaQnGzpxT5qQXvaSx16Bu4hk43AuUX6BgXHez9oa1E93QYeqd7fg7Ldb4p",
  "key33": "4YZLwvsj9qXhk3XeXKGJM9phXDSL3YYDR1SEhHKzDakzWzDn2fs8a5wC3Lm8Hc6ysgGUbVkTMcw3eWZkbciSpDBE",
  "key34": "4YoXueuiaoDkBCyVbRnt6SCyLfnwyDaSnxQRwVMgF1GhuDZZ8iJKBTYVYEuGyq7YxdnG9SU4AQTnkwprauLd9PJE",
  "key35": "3cdUeEQMgk3FCVancxLV3AXp25jt3d2JDqdY8UBd8JfaUGRgBeHokGnNoPk5kriR3GxLeinJkDTmYD2ccsCZyCt9",
  "key36": "r9BdVLuci7Dj773EwW8htKZPcL1XueUMz1JFrA4q1kdcZua4DHipYpp9Fnmxgzmg2yzoxE8A7ktnfYq4KdiveYK",
  "key37": "2m3ACNS2UoWwimmZ4q6HVBZGyJnycTcaETNhWokasFGLGLt7nHkLAB9JUWA7ndMi1qo39XMxpJP158D6U5zhFjBk",
  "key38": "JzE9WW6E1C3zbdZqFJb4aSa9WcHpDbqiRNGgpeXhzAoY3nbsLqpSTpfbnq6fBXJ29wQyERmsv14T8e2MdxdwU5x",
  "key39": "3PGBHw6e29sRdJJooPatVbNR7RKEqtM6hSPGLnGJEDmFqnM6oWMKWoFTQYLyLKkevaBXfXBJUC2soNaDpzWUgiZZ",
  "key40": "5u8xdax7kafNkpM9qnYwCABVX4ZGazz4HVDXdwX7azhNAHWT3EUWgR5oSu8vxb1PJWnBLzrLYzm4SsdFKQ6TdgN7",
  "key41": "3idusqA29UvDzugFg4JYQdwP6F8QsGxK6cE6bTM6NP42ZB3qyMxEyNeHn5sWd7jR9WMCS1Ta78FTKv26b1DV2Z9F",
  "key42": "2PA4ernxPfRzXZ5YYHYaYZA1UVzoBof6gCU4p7Hc3pasQbSBP1jyFnNsR8YTfuPdwyGdFVSb4vBDTG7HwjZvxNd7",
  "key43": "VbRckbRwXotRwnZ8vzu7FKoccNuRZesNfQDWgvJzqFXRux4UMheEPn2wiuS9sV4b1BKgiGQ7VLsQZFHaN4EkpCt",
  "key44": "gZPrXrLGBTM5J82U1VhyjrSgW89i1uB5Pe14RM7te3ibFJGcDXsk7aBHS1siRhvvAB1uuxgGiBRHtm7L3D7jUPw",
  "key45": "5aVGvgCGPKx2o2StwcPowHR5YKsvopwsB8tcRdu9iaiwiU9LNb8UAmvML5HexzBKC1L5yRfKUetmKQ94Ek2zgYmX",
  "key46": "4k5QUPQAXmsVSAqizPaGPz6GUYqWCt1gGRhqNd3WP9GPUTFFjcb5gyModHzQZ7kByWW6XqodWqKGtndhaKcap1cs",
  "key47": "2Bk9k8nuhQEnV1Jc2zvMLp4w5GtQRHdVRTfCz36h3SGg5xnVZsnjohCdkRNKMii3DZVJ1jSNNouWvESUwokqpHFD",
  "key48": "3CYsYL2aNV9bpxTBeq4Zfs5B9bK6BNG5Qr7Dor8qf1gpCLvKkgFiHG7ys9Kkh7Wh7LDebB9w8WMkGsZBSgCjJgYD"
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
